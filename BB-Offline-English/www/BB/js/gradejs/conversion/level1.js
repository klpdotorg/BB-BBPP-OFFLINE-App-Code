Game.conversion=function(){};
Game.conversion.prototype={
init:function(game)
    {
        _this = this;   
    },
    
    create:function(game)
    {
        _this.shake = new Phaser.Plugin.Shake(game);
	      game.plugins.add(_this.shake);
        commonNavBarConversion.init();
        _this.initializeEverything();
        
        telInitializer.gameIdInit("conversion",gradeSelected);
        
    },
    
    preload:function(game){
        if(!window.conversion){

            window.conversion = true;

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

         this.load.atlas('sg7_1_2backbtn',window.baseUrl+'assets/conversion/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/NOLDG1_4_5/backbtn.json');
        this.load.atlas('sg7_1_2CommonSpeakerBtn',window.baseUrl+'assets/conversion/commonAssets/speaker.png' ,window.baseUrl+'json/gradeJson/NOLDG1_4_5/speaker.json');
        this.load.atlas('sg7_1_2starAnim',window.baseUrl+'assets/conversion/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/NOLDG1_4_5/starAnim.json');
        this.load.atlas('sg7_1_2replay',window.baseUrl+'assets/conversion/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/NOLDG1_4_5/reply.json');
        this.load.atlas('sg7_1_2btn',window.baseUrl+'assets/conversion/commonAssets/btn.png',window.baseUrl+'json/gradeJson/NOLDG1_4_5/btn.json');
        
        this.load.atlas('numpadNum',window.baseUrl+'assets/conversion/commonAssets/numpadNum.png',window.baseUrl+'json/gradeJson/NOLDG1_4_5/numpadNum.json');
        this.load.atlas('rightmark',window.baseUrl+'assets/conversion/commonAssets/rightmark.png',window.baseUrl+'json/gradeJson/NOLDG1_4_5/rightmark.json');
        this.load.atlas('erase',window.baseUrl+'assets/conversion/commonAssets/erase.png',window.baseUrl+'json/gradeJson/NOLDG1_4_5/erase.json');
        
        this.load.atlas('numberVSmall',window.baseUrl+'assets/conversion/commonAssets/numberVSmall.png',window.baseUrl+'json/gradeJson/NOLDG1_4_5/numberVSmall.json');
        
        this.load.image('numbg',window.baseUrl+'assets/conversion/commonAssets/numbg.png');
        this.load.image('hand_sp',window.baseUrl+'assets/conversion/commonAssets/hand.png');
        this.load.image('sg7_1_2background1',window.baseUrl+'assets/conversion/commonAssets/bg1.png');
        this.load.image('sg7_1_2tittleBar',window.baseUrl+'assets/conversion/commonAssets/tittleBar.png');
        this.load.image('navBar_sp',window.baseUrl+'assets/conversion/commonAssets/navBar.png');
        this.load.image('timebg_sp',window.baseUrl+'assets/conversion/commonAssets/timebg.png');
        this.load.image('skipDemoVideos',window.baseUrl+'assets/conversion/commonAssets/skipArrow.png');

        //game assets.
        this.load.image('commonBg', window.baseUrl+'assets/conversion/commonAssets/commonBG.png');
        
        //StartScene
         this.load.image('1rsNote_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/1rsNote.png');
         this.load.image('2rsNote_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/2rsNote.png');
         this.load.image('5rsNote_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/5rsNote.png');
         this.load.image('10rsNote_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/10rsNote.png');
         this.load.image('20rsNote_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/20rsNote.png');
         this.load.image('50rsNote_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/50rsNote.png');
         this.load.image('100rsNote_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/100rsNote.png');
         this.load.image('200rsNote_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/200rsNote.png');
         this.load.image('closeWallet_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/closeWallet.png');
         this.load.image('handOverMoney_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/handOverMoney.png');
         this.load.image('handOverRecipt_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/handOverRecipt.png');
         this.load.image('handToShow_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/handToShow.png');
         this.load.image('receiptBtn_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/receiptBtn.png');
         this.load.image('receiptForBeg_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/receiptForBeg.png');
         this.load.image('walletBG_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/walletBG.png');
         this.load.image('wallet_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/wallet.png');
         this.load.image('walletBtn_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/walletBtn.png');
         this.load.image('receiptToClick_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/receiptToClick.png');
         this.load.image('billMachine_sp', window.baseUrl+'assets/conversion/gradeAssets/startScene/billMachine.png');
         this.load.image('inputBox_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/inputBox.png');
         this.load.image('shopKeeper_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/shopKeeper.png');
         this.load.image('billValueBox_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/billValueBox.png');
        
         this.load.atlas('1rupee_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/1rupee.png',window.baseUrl+'json/gradeJson/startScene/1rupee.json');
         this.load.atlas('2rupee_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/2rupee.png',window.baseUrl+'json/gradeJson/startScene/2rupee.json');
         this.load.atlas('5rupee_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/5rupee.png',window.baseUrl+'json/gradeJson/startScene/5rupee.json');
         this.load.atlas('10rupee_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/10rupee.png',window.baseUrl+'json/gradeJson/startScene/10rupee.json');
         this.load.atlas('20rupee_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/20rupee.png',window.baseUrl+'json/gradeJson/startScene/20rupee.json');
         this.load.atlas('50rupee_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/50rupee.png',window.baseUrl+'json/gradeJson/startScene/50rupee.json');
         this.load.atlas('100rupee_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/100rupee.png',window.baseUrl+'json/gradeJson/startScene/100rupee.json');
         this.load.atlas('200rupee_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/200rupee.png',window.baseUrl+'json/gradeJson/startScene/200rupee.json');
         this.load.atlas('nextArrow_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/nextArrow.png',window.baseUrl+'json/gradeJson/startScene/nextArrow.json');
         this.load.atlas('blueBox_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/blueBox.png',window.baseUrl+'json/gradeJson/startScene/blueBox.json');
         this.load.atlas('walletAnim_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/walletAnim.png',window.baseUrl+'json/gradeJson/startScene/walletAnim.json');
         this.load.atlas('autoAnim_sp',window.baseUrl+'assets/conversion/gradeAssets/startScene/autoAnim.png',window.baseUrl+'json/gradeJson/startScene/autoAnim.json');
         
        
        //0BmarketImages
        this.load.image('0Bmarket1_sp', window.baseUrl+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket1.png');
        this.load.image('0Bmarket2_sp', window.baseUrl+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket2.png');
        this.load.image('0Bmarket3_sp', window.baseUrl+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket3.png');
        this.load.image('0Bmarket4_sp', window.baseUrl+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket4.png');
        this.load.image('0Bmarket5_sp', window.baseUrl+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket5.png');
        this.load.image('0Bmarket6_sp', window.baseUrl+'assets/conversion/gradeAssets/0BmarketImages/0Bmarket6.png');
        
         //0BmarketImages
        this.load.image('0Astreet1_sp', window.baseUrl+'assets/conversion/gradeAssets/0AstreetImages/0Astreet1.png');
        this.load.image('0Astreet2_sp', window.baseUrl+'assets/conversion/gradeAssets/0AstreetImages/0Astreet2.png');
        this.load.image('0Astreet3_sp', window.baseUrl+'assets/conversion/gradeAssets/0AstreetImages/0Astreet3.png');
        this.load.image('0Astreet4_sp', window.baseUrl+'assets/conversion/gradeAssets/0AstreetImages/0Astreet4.png');
        this.load.image('0Astreet5_sp', window.baseUrl+'assets/conversion/gradeAssets/0AstreetImages/0Astreet5.png');
        
        //0CmarketImgClsUps
         this.load.image('CmarketClsUp1_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp1.png');
         this.load.image('CmarketClsUp2_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp2.png');
         this.load.image('CmarketClsUp3_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp3.png');
         this.load.image('CmarketClsUp4_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp4.png');
         this.load.image('CmarketClsUp5_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp5.png');
         this.load.image('CmarketClsUp6_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp6.png');
         this.load.image('CmarketClsUp7_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp7.png');
         this.load.image('CmarketClsUp8_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp8.png');
         this.load.image('CmarketClsUp9_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp9.png');
         this.load.image('CmarketClsUp10_sp', window.baseUrl+'assets/conversion/gradeAssets/CmarketImgClsUps/0CmarketClsUp10.png');
              
        //groceryList
        this.load.image('apple_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Apple.png');
        this.load.image('banana_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Banana.png');
        this.load.image('brinjal_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Brinjal.png');
        this.load.image('carrot_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Carrot.png');
        this.load.image('chilly_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Chilli.png');
        this.load.image('laddu_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/laddu.png');
        this.load.image('iceCreamTub_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Icecream.png');
        this.load.image('jalebi_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Jalebi.png');
        this.load.image('lampOil_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/LampOil.png');
        this.load.image('milkPacket_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Milk.png');
        this.load.image('burfi_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Mitai.png');
        this.load.image('peanuts_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Peanuts.png');
        this.load.image('pineapple_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Pinaepple.png');
        this.load.image('pumpkin_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/pumpkin.png');
        this.load.image('rice_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Rice.png');
        this.load.image('flour_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Flour.png');
        this.load.image('candy_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Toffee.png');
        this.load.image('tomato_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/Tomato.png');
        this.load.image('sunflowerOil_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/VegetableOil.png');
        this.load.image('watermelon_sp', window.baseUrl+'assets/conversion/gradeAssets/groceryList/WaterMelon.png');
        
        //Item list images
        this.load.image('clearLine_sp', window.baseUrl+'assets/conversion/gradeAssets/itemList/clearLine.png');
        this.load.atlas('autoImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/autoImg.png',window.baseUrl+'json/gradeJson/itemList/autoImg.json');
        this.load.atlas('bananaImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/bananaImg.png',window.baseUrl+'json/gradeJson/itemList/bananaImg.json');
        this.load.atlas('candyImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/candyImg.png',window.baseUrl+'json/gradeJson/itemList/candyImg.json');
        this.load.atlas('carrotImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/carrotImg.png',window.baseUrl+'json/gradeJson/itemList/carrotImg.json');
        this.load.atlas('lampOilImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/oilImg.png',window.baseUrl+'json/gradeJson/itemList/oilImg.json');
        this.load.atlas('jalebiImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/jalebiImg.png',window.baseUrl+'json/gradeJson/itemList/jalebiImg.json');
        this.load.atlas('appleImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/appleImg.png',window.baseUrl+'json/gradeJson/itemList/appleImg.json');
        this.load.atlas('brinjalImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/brinjalImg.png',window.baseUrl+'json/gradeJson/itemList/brinjalImg.json');
        this.load.atlas('burfiImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/burfyImg.png',window.baseUrl+'json/gradeJson/itemList/burfyImg.json');
        this.load.atlas('chillyImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/chilliImg.png',window.baseUrl+'json/gradeJson/itemList/chilliImg.json');
        this.load.atlas('riceImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/flourImg.png',window.baseUrl+'json/gradeJson/itemList/flourImg.json');
        this.load.atlas('iceCreamTubImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/iceCreamImg.png',window.baseUrl+'json/gradeJson/itemList/iceCreamImg.json');
        this.load.atlas('ladduImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/ladduImg.png',window.baseUrl+'json/gradeJson/itemList/ladduImg.json');
        this.load.atlas('milkPacketImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/milkImg.png',window.baseUrl+'json/gradeJson/itemList/milkImg.json');
        this.load.atlas('oil1Img_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/oil1Img.png',window.baseUrl+'json/gradeJson/itemList/oil1Img.json');
        this.load.atlas('sunfloweroilImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/oil2Img.png',window.baseUrl+'json/gradeJson/itemList/oil2Img.json');
        this.load.atlas('sunflowerOilImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/oil2Img.png',window.baseUrl+'json/gradeJson/itemList/oil2Img.json');
        //this.load.atlas('oil2Img_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/oil2Img.png',window.baseUrl+'json/gradeJson/itemList/oil2Img.json');
        this.load.atlas('peanutsImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/peanutImg.png',window.baseUrl+'json/gradeJson/itemList/peanutImg.json');
        this.load.atlas('pineappleImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/pineAppleImg.png',window.baseUrl+'json/gradeJson/itemList/pineAppleImg.json');
        this.load.atlas('pumpkinImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/pumpkinImg.png',window.baseUrl+'json/gradeJson/itemList/pumpkinImg.json');
        this.load.atlas('flourImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/riceImg.png',window.baseUrl+'json/gradeJson/itemList/riceImg.json');
        this.load.atlas('tomatoImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/tomatoImg.png',window.baseUrl+'json/gradeJson/itemList/tomatoImg.json');
        this.load.atlas('watermelonImg_sp',window.baseUrl+'assets/conversion/gradeAssets/itemList/waterMelonImg.png',window.baseUrl+'json/gradeJson/itemList/waterMelonImg.json');
        
        //Blur Images
        this.load.image('0BmarketBlur1_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur1.png');
        this.load.image('0BmarketBlur2_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur2.png');
        this.load.image('0BmarketBlur3_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur3.png');
        this.load.image('0BmarketBlur4_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur4.png');
        this.load.image('0BmarketBlur5_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur5.png');
        this.load.image('0BmarketBlur6_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0BmarketBlur6.png');
        this.load.image('0CmarketClsUpBlur1_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur1.png');
        this.load.image('0CmarketClsUpBlur2_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur2.png');
        this.load.image('0CmarketClsUpBlur3_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur3.png');
        this.load.image('0CmarketClsUpBlur4_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur4.png');
        this.load.image('0CmarketClsUpBlur5_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur5.png');
        this.load.image('0CmarketClsUpBlur6_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur6.png');
        this.load.image('0CmarketClsUpBlur7_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur7.png');
        this.load.image('0CmarketClsUpBlur8_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur8.png');
        this.load.image('0CmarketClsUpBlur9_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur9.png');
        this.load.image('0CmarketClsUpBlur10_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0CmarketClsUpBlur10.png');
        this.load.image('0AstreetBlur1_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur1.png');
        this.load.image('0AstreetBlur2_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur2.png');
        this.load.image('0AstreetBlur3_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur3.png');
        this.load.image('0AstreetBlur4_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur4.png');
        this.load.image('0AstreetBlur5_sp', window.baseUrl+'assets/conversion/gradeAssets/BlurImages/0AstreetBlur5.png');
        
        //MoneyMachine
        this.load.image('mmBg_sp', window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mmBg.png');
        this.load.image('minusSymbol_sp', window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/minusSymbol.png');
        this.load.image('moneyMachine_sp', window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/moneyMachine.png');
        this.load.atlas('mm1rs_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mm1rs.png',window.baseUrl+'json/gradeJson/moneyMachine/mm1rs.json');
        this.load.atlas('mm2rs_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mm2rs.png',window.baseUrl+'json/gradeJson/moneyMachine/mm2rs.json');
        this.load.atlas('mm5rs_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mm5rs.png',window.baseUrl+'json/gradeJson/moneyMachine/mm5rs.json');
        this.load.atlas('mm10rs_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mm10rs.png',window.baseUrl+'json/gradeJson/moneyMachine/mm10rs.json');
        this.load.atlas('mm20rs_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mm20rs.png',window.baseUrl+'json/gradeJson/moneyMachine/mm20rs.json');
        this.load.atlas('mm50rs_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mm50rs.png',window.baseUrl+'json/gradeJson/moneyMachine/mm50rs.json');
        this.load.atlas('mm100rs_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mm100rs.png',window.baseUrl+'json/gradeJson/moneyMachine/mm100rs.json');
        this.load.atlas('mm200rs_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mm200rs.png',window.baseUrl+'json/gradeJson/moneyMachine/mm200rs.json');
        this.load.atlas('mmCount_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mmCount.png',window.baseUrl+'json/gradeJson/moneyMachine/mmCount.json');
        this.load.atlas('mmPull_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/mmPull.png',window.baseUrl+'json/gradeJson/moneyMachine/mmPull.json');
        this.load.atlas('resetBtn_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/resetBtn.png',window.baseUrl+'json/gradeJson/moneyMachine/resetBtn.json');
        this.load.atlas('dropNoteSpot_sp',window.baseUrl+'assets/conversion/gradeAssets/moneyMachine/dropNoteSpot.png',window.baseUrl+'json/gradeJson/moneyMachine/dropNoteSpot.json');
        
        //End Sene
         this.load.image('autoMeter_sp', window.baseUrl+'assets/conversion/gradeAssets/endScene/autoMeter.png');
         this.load.image('celebBg_sp', window.baseUrl+'assets/conversion/gradeAssets/endScene/celebBg.png');
        this.load.atlas('celebAnim1_sp',window.baseUrl+'assets/conversion/gradeAssets/endScene/celebAnim1.png',window.baseUrl+'json/gradeJson/endScene/celebAnim1.json');
        this.load.atlas('celebAnim2_sp',window.baseUrl+'assets/conversion/gradeAssets/endScene/celebAnim2.png',window.baseUrl+'json/gradeJson/endScene/celebAnim2.json');
        this.load.atlas('celebAnim3_sp',window.baseUrl+'assets/conversion/gradeAssets/endScene/celebAnim3.png',window.baseUrl+'json/gradeJson/endScene/celebAnim3.json');
        this.load.atlas('celebAnim4_sp',window.baseUrl+'assets/conversion/gradeAssets/endScene/celebAnim4.png',window.baseUrl+'json/gradeJson/endScene/celebAnim4.json');
        this.load.atlas('celebAnim5_sp',window.baseUrl+'assets/conversion/gradeAssets/endScene/celebAnim5.png',window.baseUrl+'json/gradeJson/endScene/celebAnim5.json');
        this.load.atlas('celebAnim6_sp',window.baseUrl+'assets/conversion/gradeAssets/endScene/celebAnim6.png',window.baseUrl+'json/gradeJson/endScene/celebAnim6.json');
        }
        
    },
    
    initializeEverything:function()
    {
        _this.carrotRate =  1;
        _this.tomatoRate = 4;
        _this.brinjalRate = 6;
        _this.pumpkinRate = 3;
        _this.appleRate = 7;
        _this.bananaRate = 2;
        _this.pineappleRate = 8;
        _this.watermelonRate = 5;
        
        _this.noofAttempts=1;
        _this.AnsTimerCount=0;
        
        _this.sceneCount = 1;
        
        _this.moneyExchanged = false;
        
        
        _this.payment1completed = false;
        _this.payment2completed = false;
        _this.payment3completed = false;
        _this.payment4completed = false;
        _this.payment5completed = false;
        _this.payment6completed = false;
        _this.payment7completed = false;
        
        _this.change1added = false;
        _this.change2added = false;
        _this.change3added = false;

        _this.riceRate = 9;
        _this.flourRate = 6;
        _this.peanutsRate = 7;
        _this.chillyRate = 8;
        _this.ladduRate = 8;
        _this.jalebiRate = 9;
        _this.candyRate = 2;
        _this.burfiRate = 3;

        _this.lampOilRate = 3;
        _this.sunflowerOilRate = 8;
        _this.milkPacketRate = 2;
        _this.iceCreamTubRate = 9;
        
        _this.get100or200 = ['200','100'];
        _this.random100or200 = _this.getRandom(_this.get100or200,1);
        if(_this.random100or200 == '100')
            _this.getRandomNoBtw4and5H = Math.floor(Math.random() * (320 - 270 + 1) + 270);
        else
            _this.getRandomNoBtw4and5H = Math.floor(Math.random() * (420 - 370 + 1) + 370);
        console.log(_this.getRandomNoBtw4and5H);
        _this.get3valuesofRandomNo =  Math.floor(_this.getRandomNoBtw4and5H/3);
        console.log(_this.get3valuesofRandomNo);
        _this.randomNumber1 = _this.generate(_this.get3valuesofRandomNo,2);
        _this.randomNumber2 = _this.generate(_this.get3valuesofRandomNo,2);
         if(_this.random100or200 == '100')
            _this.randomNumber3 = _this.generate(Math.floor(Math.random() * (80 - 50 + 1) + 50),1);
        else
            _this.randomNumber3 = _this.generate(_this.get3valuesofRandomNo,1);
        console.log(_this.randomNumber1);
        console.log(_this.randomNumber2);
        console.log(_this.randomNumber3);
        
        
        //_this.randomNumber1 = _this.rounditTo50(_this.randomNumber1);
        //console.log(_this.randomNumber1);
        /*_this.amount1 = _this.generateAmount(_this.randomNumber1[0]);
        _this.amount2 = _this.generateAmount(_this.randomNumber1[1]);
        _this.amount3 = _this.generateAmount(_this.randomNumber2[0]);
        _this.amount4 = _this.generateAmount(_this.randomNumber2[1]);
        _this.amount5 = _this.generateAmount(_this.randomNumber3[0]);
        console.log(_this.amount1);
        console.log(_this.amount2);
        console.log(_this.amount3);
        console.log(_this.amount4);
        console.log(_this.amount5);*/
        
        
        
        _this.itemArray1 = ["carrot","tomato","brinjal","pumpkin"];
        _this.itemArray2 = ["apple","banana","pineapple","watermelon"];        
        _this.itemArray3 = ["rice","flour","peanuts","chilly"];
        _this.itemArray4 = ["laddu","jalebi","candy","burfi"];        
        _this.itemArray5 = ["lampOil","sunflowerOil","milkPacket","iceCreamTub"];
        
        //_this.itemArray1 = ["pumpkin"];
        //_this.itemArray2 = ["watermelon"];        
        //_this.itemArray3 = ["chilly"];
        //_this.itemArray4 = ["burfi"];        
        //_this.itemArray5 = ["milkPacket"];
        
        
        _this.itemArray1 = _this.getRandom(_this.itemArray1,1);
        _this.itemArray2 = _this.getRandom(_this.itemArray2,1);
        _this.itemArray3 = _this.getRandom(_this.itemArray3,1);
        _this.itemArray4 = _this.getRandom(_this.itemArray4,1);
        _this.itemArray5 = _this.getRandom(_this.itemArray5,1);
        
        console.log(_this.itemArray1);
        console.log(_this.itemArray2);
        console.log(_this.itemArray3);
        
        _this.item1 = _this.itemArray1[0];
        _this.item2 = _this.itemArray2[0];
        _this.item3 = _this.itemArray3[0];
        _this.item4 = _this.itemArray4[0];
        _this.item5 = _this.itemArray5[0];
        
        _this.item1quantity = (Math.round(_this.randomNumber1[0]/_this[_this.item1+"Rate"]))*50;
        _this.item2quantity = (Math.round(_this.randomNumber1[1]/_this[_this.item2+"Rate"]))*50;
        _this.item3quantity = (Math.round(_this.randomNumber2[0]/_this[_this.item3+"Rate"]))*50;
        _this.item4quantity = (Math.round(_this.randomNumber2[1]/_this[_this.item4+"Rate"]))*50;
        _this.item5quantity = (Math.round(_this.randomNumber3[0]/_this[_this.item5+"Rate"]))*50;
        
        
        console.log(_this.item1quantity);
        console.log(_this.item2quantity);
        console.log(_this.item3quantity);
        console.log(_this.item4quantity);
        console.log(_this.item5quantity);
        
        _this.item1Rate = (_this.item1quantity/50)*_this[_this.item1+"Rate"];
        _this.item2Rate = (_this.item2quantity/50)*_this[_this.item2+"Rate"];
        _this.item3Rate = (_this.item3quantity/50)*_this[_this.item3+"Rate"];
        _this.item4Rate = (_this.item4quantity/50)*_this[_this.item4+"Rate"];
        _this.item5Rate = (_this.item5quantity/50)*_this[_this.item5+"Rate"];
        
        console.log(_this.item1Rate);
        console.log(_this.item2Rate);
        console.log(_this.item3Rate);
        console.log(_this.item4Rate);
        console.log(_this.item5Rate);
        
        
        _this.amount1 = _this.generateAmount(_this.item1Rate);
        _this.amount2 = _this.generateAmount(_this.item2Rate);
        
        /*if(_this.item3Rate >= 140)
            {
                _this.amount3 = [100,50];
            }
        else if(_this.item3Rate >= 130)
            {
                _this.amount3 = [100,20,20];
            }*/
        
        console.log("here");
        //_this.amount3 = _this.generateAmount(Math.floor(((_this.item3Rate+_this.item4Rate)/2)+20));
        //_this.amount3 = _this.generateAmount1(Math.floor(_this.item3Rate)+Math.floor(Math.random() * (10 - 2 + 1) + 2));
        _this.amount3 = _this.generateAmount(_this.item3Rate);
        //_this.amount4 = _this.generateAmount(Math.floor((_this.item3Rate+_this.item4Rate)/2));
        _this.amount4 = _this.generateAmount1(_this.item4Rate);
        //_this.amount4 = _this.generateAmount((_this.item4quantity/50)*_this[_this.item4+"Rate"]);
        //_this.amount5 = _this.generateAmount((_this.item5quantity/50)*_this[_this.item5+"Rate"]);
        if(_this.random100or200 == '100')
            _this.amount5 = [100];
        else
            _this.amount5 = [200];
        console.log(_this.amount1);
        console.log(_this.amount2);
        console.log(_this.amount3);
        console.log(_this.amount4);
        console.log(_this.amount5);
        
        
        
        _this.randGMORKG = ["gm", "kg"];
        _this.randMORKM = ["m", "km"];
        _this.randMLORL = ["ml", "l"];
        
        //_this.randGMORKG = ["kg"];
        //_this.randMORKM = ["km"];
        //_this.randMLORL = ["l"];
        
        _this.item1type = _this.getRandom(_this.randGMORKG,1);
        _this.item2type = _this.getRandom(_this.randGMORKG,1);
        _this.item3type = _this.getRandom(_this.randGMORKG,1);
        _this.item4type = _this.getRandom(_this.randGMORKG,1);
        _this.item5type = _this.getRandom(_this.randMLORL,1);
        
        console.log(_this.item1type);
        console.log(_this.item2type);
        console.log(_this.item3type);
        console.log(_this.item4type);
        console.log(_this.item5type);
        
        
        //_this.randomNumber1 = _this.rounditTo50(_this.randomNumber1);
        //console.log(_this.randomNumber1);
        /*_this.amount1 = _this.generateAmount(_this.randomNumber1);
        _this.amount2 = _this.generateAmount(_this.randomNumber2);
        _this.amount3 = _this.generateAmount(_this.randomNumber3);
        console.log(_this.amount1);
        console.log(_this.amount2);
        console.log(_this.amount3);*/
        
        
        if(_this.random100or200 == '100')
            _this.getRandomNoForAuto = Math.floor(Math.random() * (2500 - 500 + 1) + 500);
        else
            _this.getRandomNoForAuto = Math.floor(Math.random() * (3500 - 1500 + 1) + 1500);
        console.log(_this.getRandomNoForAuto);
        _this.randomNumberForAuto = _this.generate(_this.getRandomNoForAuto,3);
        console.log(_this.randomNumberForAuto);
        _this.randomNumberForAuto = _this.rounditTo100(_this.randomNumberForAuto);
        _this.randomNumberForAuto.push(_this.randomNumberForAuto[0]+_this.randomNumberForAuto[1]+_this.randomNumberForAuto[2]);
        
        
        
        //_this.randomNumberForAuto = ["700","700","600","800"]
        
        _this.autoRide1type = _this.getRandom(_this.randMORKM,1);
        _this.autoRide2type = _this.getRandom(_this.randMORKM,1);
        _this.autoRide3type = _this.getRandom(_this.randMORKM,1);
        _this.autoRide4type = _this.getRandom(_this.randMORKM,1);
        
        _this.autoTotalkm = _this.convertToKm(_this.randomNumberForAuto[3]*2);
        _this.autoRate = (_this.randomNumberForAuto[3]*2)/100;
        _this.autoAmount = _this.generateAmount(_this.autoRate);
        
        
        console.log(_this.autoRide1type);
        console.log(_this.autoRide2type);
        console.log(_this.autoRide3type);
        console.log(_this.autoRide4type);

        
        _this.startGame();
    },
    
    rounditTo100:function(array)
    {
        
        for(var i=0; i<array.length; i++)
            {
                if(array[i]%100!=0)
                    {
                        var round = array[i]%100;
                        console.log(round);
                        if((array[i]-round)!=0)
                            array[i]-=round;
                        else
                            array[i]+=(100-round);
                                              
                    }
            }
        return array;
    },
    

    
    
    getRandom:function(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
},
    
    generateAmount:function(amount)
    {
        var amountArray = [];
        //for(var i=0;i<amount.length;i++)
            while(amount>0){
                if(amount>=200)
                    {
                        amountArray.push(200);
                        amount-=200;
                    }
                else if(amount>=100)
                    {
                        amountArray.push(100);
                        amount-=100;
                    }
                else if(amount>=50)
                    {
                        amountArray.push(50);
                        amount-=50;
                        
                    }
                else if(amount>=20)
                    {
                        amountArray.push(20);
                        amount-=20;
                        
                    }
                else if(amount>=10)
                    {
                        amountArray.push(10);
                        amount-=10;
                        
                    }
                else if(amount>=5)
                    {
                        amountArray.push(5);
                        amount-=5;
                        
                    }
                else if(amount>=2)
                    {
                        amountArray.push(2);
                        amount-=2;
                        
                    }
                else if(amount>=1)
                    {
                        amountArray.push(1);
                        amount-=1;
                        
                    }
                
            }
        return amountArray;
    },
    
    
    generateAmount1:function(amount)
    {
        var amountArray = [];
        //for(var i=0;i<amount.length;i++)
            //while(amount>0){
                if(amount>=150)
                    {
                        amountArray.push(200);
                        //amount-=200;
                    }
                else if(amount>=100)
                    {
                        amountArray.push(100);
                        amountArray.push(50);
                        //amount-=100;
                    }
                else if(amount>=50)
                    {
                        amountArray.push(100);
                        //amount-=50;
                        
                    }
                else if(amount>=10)
                    {
                        amountArray.push(50);
                        //amount-=20;
                        
                    }
                else if(amount>=1)
                    {
                        amountArray.push(20);
                        //amount-=10;
                        
                    }
                /*else if(amount>=1)
                    {
                        amountArray.push(10);
                        //amount-=5;
                        
                    }
                else if(amount>=2)
                    {
                        amountArray.push(2);
                        amount-=2;
                        
                    }
                else if(amount>=1)
                    {
                        amountArray.push(1);
                        amount-=1;
                        
                    }*/
                
           // }
        return amountArray;
    },
    
    
    
    generateAmountold:function(amount)
    {
        var amountArray = [];
        for(var i=0;i<amount.length;i++)
            {
                if(amount[i]>=200)
                    {
                        amountArray.push(200);
                        amount[i]-=200;
                        if(amount[i]>0)
                            i--;
                    }
                else if(amount[i]>=100)
                    {
                        amountArray.push(100);
                        amount[i]-=100;
                        if(amount[i]>0)
                            i--;
                    }
                else if(amount[i]>=50)
                    {
                        amountArray.push(50);
                        amount[i]-=50;
                        if(amount[i]>0)
                            i--;
                    }
                else if(amount[i]>=20)
                    {
                        amountArray.push(20);
                        amount[i]-=20;
                        if(amount[i]>0)
                            i--;
                    }
                else if(amount[i]>=10)
                    {
                        amountArray.push(10);
                        amount[i]-=10;
                        if(amount[i]>0)
                            i--;
                    }
                else if(amount[i]>=5)
                    {
                        amountArray.push(5);
                        amount[i]-=5;
                        if(amount[i]>0)
                            i--;
                    }
                else if(amount[i]>=2)
                    {
                        amountArray.push(2);
                        amount[i]-=2;
                        if(amount[i]>0)
                            i--;
                    }
                else if(amount[i]>=1)
                    {
                        amountArray.push(1);
                        amount[i]-=1;
                        if(amount[i]>0)
                            i--;
                    }
                
            }
        return amountArray;
    },
    
    rounditTo50:function(array)
    {
        
        for(var i=0; i<array.length; i++)
            {
                if(array[i]%10!=0)
                    {
                        var round = array[i]%10;
                        console.log(round);
                        if((array[i]-round)!=0)
                            array[i]-=round;
                        else
                            array[i]+=(10-round);
                                              
                    }
            }
        return array;
    },
    
    generate:function(max, thecount) {
      var r = [];
      var currsum = 0;
      for(var i=0; i<thecount-1; i++) {
         r[i] = _this.randombetween(1, max-(thecount-i-1)-currsum);
         currsum += r[i];
      }
      r[thecount-1] = max - currsum;
      return r;
    },

    randombetween:function(min, max) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },
    

    startGame:function()
    {
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;
        _this.no1 = 0;
        _this.selectedAns = '';
        _this.selectedAns1 = '';
        _this.checkFor2dvdnt1 = 0;
        _this.checkFor2dvdnt2 = 0;
        _this.remainderEnd = 0;
        _this.count1 =0;
        _this.checkForDropB = 0;
        
        _this.twoHundredFrame = 0;
        _this.oneHundredFrame = 0;
        _this.fiftyFrame = 3;
        _this.twentyFrame = 0;
        _this.tenFrame = 0;
        _this.fiveFrame = 0;
        _this.twoFrame = 0;
        _this.oneFrame = 0;
        
        _this.twoHundredFrameTemp = 0;
        _this.twoHundredFrameTemp = 0;
        _this.oneHundredFrameTemp = 0;
        _this.fiftyFrameTemp = 3;
        _this.twentyFrameTemp = 0;
        _this.tenFrameTemp = 0;
        _this.fiveFrameTemp = 0;
        _this.twoFrameTemp = 0;
        _this.oneFrameTemp = 0;
        
        _this.contNotes = 0;
        _this.contNotes1 = 0;
        _this.contNotes5 = 0;
        _this.countDopNotes = 0;
        _this.walletCount = 0;   
        _this.walletCountTopass = 0;   
        _this.countDragNotes = 0;
        _this.checkCountNotes = 0;
        _this.qArray = new Array();
        _this.qArray = [2,3,4,5,6];
        _this.qArray = _this.shuffle(_this.qArray);
        _this.qArray.unshift(1);
       
        _this.greyItem1 = false;
        _this.greyItem2 = false;
        _this.greyItem3 = false;
        _this.greyItem4 = false;
        _this.greyItem5 = false;
        _this.greyItem6 = false;
        _this.greyItem7 = false;
        _this.greyItem8 = false;
        _this.greyItem9 = false;
        _this.openListAutomatically = false;
        
        _this.exchangeCheck = false;
        _this.moveBgToleft = false;
        _this.moveBgToleft1 = false;
        _this.moveBgToleft2 = false;
        _this.moveBgToRight2 = false;
        _this.billValue = 'Carrot';
        _this.enableChangeDrag = false;
        _this.notesValue = 0;
        _this.VoiceNumber = 1;
        _this.inputBoxStandard = '';
        _this.walletClicked = false;
        _this.billMachineDisplayed = false;
        
   		 


        
        _this.bg1 = _this.add.sprite(0,0,'commonBg');
       _this.bg2 = _this.add.sprite(960,0,'0Bmarket1_sp');
       _this.bg3 = _this.add.sprite(1920,0,'0BmarketBlur5_sp');
       _this.bg4 = _this.add.sprite(2880,0,'0BmarketBlur3_sp');
        
        _this.TopBar=this.add.sprite(0,0,'navBar_sp');
        _this.TopBar.name="sg7_1_2navBar"; 
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(10,7,'sg7_1_2backbtn',function(){console.log("here");},_this,0,1,2);
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice(); 
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
           _this.state.start('grade4levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(470,6,'sg7_1_2CommonSpeakerBtn',function(){},this,1,0,2);
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
           _this.getVoice(_this.VoiceNumber);
            
        },_this);

        
        _this.timebg=this.add.sprite(405,6,'timebg_sp');
        _this.timebg.name="common_timebg";
        

            _this.timeDisplay = this.add.text(430,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
             _this.timeDisplay.fontWeight = 'normal';
            _this.timeDisplay.fill = '#ADFF2F';

        
        _this.getQuestion();
       
    },
    
    
	create1:function(game){
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;
        _this.no1 = 0;
        _this.selectedAns = '';
        _this.selectedAns1 = '';
        _this.checkFor2dvdnt1 = 0;
        _this.checkFor2dvdnt2 = 0;
        _this.remainderEnd = 0;
        _this.count1 =0;
        _this.checkForDropB = 0;

        /************************* Lists of items rates *******************/
        _this.Carrot =  1 
        _this.Tomato = 4;
        _this.Brinjal = 6;
        _this.Pumpkin = 3;

        _this.Apple = 7;
        _this.Banana = 2;
        _this.Pineapple = 8;
        _this.Watermelon = 5;

        _this.Rice = 9;
        _this.Flour = 6;
        _this.Peanuts = 7;
        _this.Chilly = 8;

        _this.Laddu = 8;
        _this.Jalebi = 9;
        _this.Candy = 2;
        _this.Burfi = 3;

        _this.LampOil = 3;
        _this.SunflowerOil = 8;

        _this.MilkPacket = 2;

        _this.IceCreamTub = 9;
        /*****************************************************/
        _this.autoRideDist1 = '1.2 km';
        _this.autoRideDist2 = '300 m';
        _this.autoRideDist3 = '1500 m';
        _this.autoRideDist4 = '6 km';
        _this.vegitableList = '200 gm';
        _this.fruitList = '1 kg';
        _this.sweetList1 = '350 gm';
        _this.sweetList2 = '1/4 kg';
        _this.sweetList2N = '1';
        _this.sweetList2_ = '-';
        _this.sweetList2Std = 'kg';
        _this.sweetList2D = '4';

        _this.oilListN = '1';
        _this.oilList_ = '_';
        _this.oilListStd = 'l';
        _this.oilListD = '2';
         
        _this.twoHundredFrame = 0;
        _this.oneHundredFrame = 0;
        _this.fiftyFrame = 3;
        _this.twentyFrame = 0;
        _this.tenFrame = 0;
        _this.fiveFrame = 0;
        _this.twoFrame = 0;
        _this.oneFrame = 0;
        
        _this.twoHundredFrameTemp = 0;
        _this.twoHundredFrameTemp = 0;
        _this.oneHundredFrameTemp = 0;
        _this.fiftyFrameTemp = 3;
        _this.twentyFrameTemp = 0;
        _this.tenFrameTemp = 0;
        _this.fiveFrameTemp = 0;
        _this.twoFrameTemp = 0;
        _this.oneFrameTemp = 0;
        
        _this.contNotes = 0;
        _this.contNotes1 = 0;
        _this.contNotes5 = 0;
        _this.countDopNotes = 0;
        _this.walletCount = 0;   
        _this.walletCountTopass = 0;   
        _this.countDragNotes = 0;
        _this.checkCountNotes = 0;
        _this.qArray = new Array();
        _this.qArray = [2,3,4,5,6];
        _this.qArray = _this.shuffle(_this.qArray);
        _this.qArray.unshift(1);
       
        _this.greyItem1 = false;
        _this.greyItem2 = false;
        _this.greyItem3 = false;
        _this.greyItem4 = false;
        _this.greyItem5 = false;
        _this.greyItem6 = false;
        _this.greyItem7 = false;
        _this.greyItem8 = false;
        _this.greyItem9 = false;
        _this.openListAutomatically = false;
        
        _this.exchangeCheck = false;
        _this.moveBgToleft = false;
        _this.moveBgToleft1 = false;
        _this.moveBgToleft2 = false;
        _this.moveBgToRight2 = false;
        _this.billValue = 'Carrot';
        _this.enableChangeDrag = false;
        _this.notesValue = 0;
        _this.VoiceNumber = 1;
        //_this.inputBoxStandard = 2;
        _this.walletClicked = false;
        _this.billMachineDisplayed = false;
        
   		 _this.shake = new Phaser.Plugin.Shake(game);
	      game.plugins.add(_this.shake);
       _this.physics.startSystem(Phaser.Physics.ARCADE);
       _this.physics.setBoundsToWorld();

       _this.bg1 = _this.add.sprite(0,0,'commonBg');
       _this.bg2 = _this.add.sprite(960,0,'0Bmarket1_sp');
       _this.bg3 = _this.add.sprite(1920,0,'0BmarketBlur5_sp');
       _this.bg4 = _this.add.sprite(2880,0,'0BmarketBlur3_sp');
        
        //_this.bg1.scale.setTo(1.05,1.12);
		
        
        _this.TopBar=this.add.sprite(0,0,'navBar_sp');
        _this.TopBar.name="sg7_1_2navBar"; 
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(10,7,'sg7_1_2backbtn',function(){console.log("here");},_this,0,1,2);
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice(); 
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            this.state.start('langSelectScreen');

        },_this);

         _this.speakerbtn = this.add.button(470,6,'sg7_1_2CommonSpeakerBtn',function(){},this,1,0,2);
        //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
        // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
           _this.getVoice(_this.VoiceNumber);
            
        },_this);

        
        _this.timebg=this.add.sprite(405,6,'timebg_sp');
        _this.timebg.name="common_timebg";
        //_this.timebg.scale.setTo(1.2,1);


            _this.timeDisplay = this.add.text(430,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
             _this.timeDisplay.fontWeight = 'normal';
            _this.timeDisplay.fill = '#ADFF2F';

        
        //_this.generateStarsForTheScene(6);
       _this.getQuestion();
       /* _this.carrotToSell = _this.add.sprite(150,120,'LampOil_sp');
        _this.gotoShoppingScene3();*/
        //_this.gotoCelebrationScene();
        //_this.showBillMachine(_this.billValue);
        //_this.showListOfItems();
    },
    updateTimer:function() {
     _this.counterForTimer++;
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
        //_this.no1 = 1;
        //_this.qArray[_this.no1]
        /*switch(1)
            {
                case 1: _this.firstQuestion();
                        break;
            }*/
        
        _this.firstQuestion();
        
    },
    
    convertToKm:function(value)
    {
        value = value/1000;
        return value;
    },
    
    firstQuestion:function()
    {
        _this.autoRide1Ans1 = 0;
        _this.autoRide1Ans2 = 'qqqq';
        
        _this.autoRide2Ans1 = 0;
        _this.autoRide2Ans2 = 'qqqq';
        
        _this.autoRide3Ans1 = 0;
        _this.autoRide3Ans2 = 'qqqq';
        
        _this.autoRide4Ans1 = 0;
        _this.autoRide4Ans2 = 'qqqq';
        
        _this.carrotAns1 = 0;
        _this.carrotAns2 = 'qqqq';
        
        _this.bananaAns1 = 0;
        _this.bananaAns2 = 'qqqq';
        
        _this.candyAns1 = 0;
        _this.candyAns2 = 'qqqq';
        
        _this.jalebiAns1 = 0;
        _this.jalebiAns2 = 'qqqq';
        
        _this.oilAns1 = 0;
        _this.oilAns2 = 'qqqq';
        
        
        if(_this.autoRide1type == 'km')
            {
            _this.autoRide1 = _this.convertToKm(_this.randomNumberForAuto[0]);
                _this.autoRide1Ans1 = _this.randomNumberForAuto[0];
                _this.inputBoxStandard = 2;
            }
        else 
            {
                _this.inputBoxStandard = 3;
                _this.autoRide1 = _this.randomNumberForAuto[0];
                _this.autoRide1Ans1 = _this.convertToKm(_this.randomNumberForAuto[0]);
                if(_this.autoRide1Ans1<1)
                    _this.autoRide1Ans2 = _this.autoRide1Ans1.toString().substring(1);
                else if(_this.autoRide1Ans1==1.0)
                    _this.autoRide1Ans2 = 1;
            }
        
        if(_this.randomNumberForAuto[0]/750 == 1)
        {   
            _this.autoRide1 = '3/4';
            _this.autoRide1type = 'km';
            _this.autoRide1Ans1 = 750;
        }
        else if(_this.randomNumberForAuto[0]/500 == 1)
           {   
            _this.autoRide1 = '1/2';
            _this.autoRide1type = 'km';
               _this.autoRide1Ans1 = 500;
        }
        else if(_this.randomNumberForAuto[0]/250 == 1)
            {   
            _this.autoRide1 = '1/4';
            _this.autoRide1type = 'km';
                _this.autoRide1Ans1 = 250;
        }
        
        
        
        
        
        
        if(_this.item1type == 'kg')
            {
            _this.item1 = _this.convertToKm(_this.item1quantity);
                _this.carrotAns1 = _this.item1quantity;
                //_this.inputBoxStandard = 1;
                //_this.VoiceNumber = 5;
            }
        else 
            {
                //_this.inputBoxStandard = 0;
                //_this.VoiceNumber = 6;
                _this.item1 = _this.item1quantity;
                _this.carrotAns1 = _this.convertToKm(_this.item1quantity);
                if(_this.carrotAns1<1)
                    _this.carrotAns2 = _this.carrotAns1.toString().substring(1);
                else if(_this.carrotAns1==1.0)
                    _this.carrotAns2 = 1;
            }
        
        if(_this.item1quantity/750 == 1)
            {   
            _this.item1 = '3/4';
            _this.item1type = 'kg';
            _this.carrotAns1 = 750;
        }
        else if(_this.item1quantity/500 == 1)
            {   
            _this.item1 = '1/2';
            _this.item1type = 'kg';
                _this.carrotAns1 = 500;
        }
        else if(_this.item1quantity/250 == 1)
            {   
            _this.item1 = '1/4';
            _this.item1type = 'kg';
                _this.carrotAns1 = 250;
        }
        
        
        
        if(_this.item2type == 'kg')
            {
            _this.item2 = _this.convertToKm(_this.item2quantity);
                _this.bananaAns1 = _this.item2quantity;
                //_this.inputBoxStandard = 1;
                //_this.VoiceNumber = 5;
            }
        else 
            {
                //_this.inputBoxStandard = 0;
                //_this.VoiceNumber = 6;
                _this.item2 = _this.item2quantity;
                _this.bananaAns1 = _this.convertToKm(_this.item2quantity);
                if(_this.bananaAns1<1)
                    _this.bananaAns2 = _this.bananaAns1.toString().substring(1);
                else if(_this.bananaAns1==1.0)
                    _this.bananaAns2 = 1;
            }
        
        if(_this.item2quantity/750 == 1)
            {   
            _this.item2 = '3/4';
            _this.item2type = 'kg';
            _this.bananaAns1 = 750;
        }
        else if(_this.item2quantity/500 == 1)
            {   
            _this.item2 = '1/2';
            _this.item2type = 'kg';
                _this.bananaAns1 = 500;
        }
        else if(_this.item2quantity/250 == 1)
            {   
            _this.item2 = '1/4';
            _this.item2type = 'kg';
                _this.bananaAns1 = 250;
        }
        
        
        
        if(_this.autoRide2type == 'km')
            {
            _this.autoRide2 = _this.convertToKm(_this.randomNumberForAuto[1]);
                _this.autoRide2Ans1 = _this.randomNumberForAuto[1];
                //_this.inputBoxStandard = 2;
            }
        else 
            {
                //_this.inputBoxStandard = 3;
                _this.autoRide2 = _this.randomNumberForAuto[1];
                _this.autoRide2Ans1 = _this.convertToKm(_this.randomNumberForAuto[1]);
                if(_this.autoRide2Ans1<1)
                    _this.autoRide2Ans2 = _this.autoRide2Ans1.toString().substring(1);
                else if(_this.autoRide2Ans1==1.0)
                    _this.autoRide2Ans2 = 1;
            }
        
        if(_this.randomNumberForAuto[1]/750 == 1)
        {   
            _this.autoRide2 = '3/4';
            _this.autoRide2type = 'km';
            _this.autoRide2Ans1 = 750;
        }
        else if(_this.randomNumberForAuto[1]/500 == 1)
           {   
            _this.autoRide2 = '1/2';
            _this.autoRide2type = 'km';
               _this.autoRide2Ans1 = 500;
        }
        else if(_this.randomNumberForAuto[1]/250 == 1)
            {   
            _this.autoRide2 = '1/4';
            _this.autoRide2type = 'km';
                _this.autoRide2Ans1 = 250;
        }
        
        
        if(_this.item3type == 'kg')
            {
            _this.item3 = _this.convertToKm(_this.item3quantity);
                _this.candyAns1 = _this.item3quantity;
                //_this.inputBoxStandard = 1;
                //_this.VoiceNumber = 5;
            }
        else 
            {
                //_this.inputBoxStandard = 0;
                //_this.VoiceNumber = 6;
                _this.item3 = _this.item3quantity;
                _this.candyAns1 = _this.convertToKm(_this.item3quantity);
                if(_this.candyAns1<1)
                    _this.candyAns2 = _this.candyAns1.toString().substring(1);
                else if(_this.candyAns1==1.0)
                    _this.candyAns2 = 1;
            }
        
        if(_this.item3quantity/750 == 1)
            {   
            _this.item3 = '3/4';
            _this.item3type = 'kg';
            _this.candyAns1 = 750;
        }
        else if(_this.item3quantity/500 == 1)
            {   
            _this.item3 = '1/2';
            _this.item3type = 'kg';
                _this.candyAns1 = 500;
        }
        else if(_this.item3quantity/250 == 1)
            {   
            _this.item3 = '1/4';
            _this.item3type = 'kg';
                _this.candyAns1 = 250;
        }
        
        
        
        if(_this.item4type == 'kg')
            {
            _this.item4 = _this.convertToKm(_this.item4quantity);
                _this.jalebiAns1 = _this.item4quantity;
                //_this.inputBoxStandard = 1;
                //_this.VoiceNumber = 5;
            }
        else 
            {
                //_this.inputBoxStandard = 0;
                //_this.VoiceNumber = 6;
                _this.item4 = _this.item4quantity;
                _this.jalebiAns1 = _this.convertToKm(_this.item4quantity);
                if(_this.jalebiAns1<1)
                    _this.jalebiAns2 = _this.jalebiAns1.toString().substring(1);
                else if(_this.jalebiAns1==1.0)
                    _this.jalebiAns2 = 1;
            }
        
        if(_this.item4quantity/750 == 1)
            {   
            _this.item4 = '3/4';
            _this.item4type = 'kg';
            _this.jalebiAns1 = 750;
        }
        else if(_this.item4quantity/500 == 1)
            {   
            _this.item4 = '1/2';
            _this.item4type = 'kg';
                _this.jalebiAns1 = 500;
        }
        else if(_this.item2quantity/250 == 1)
            {   
            _this.item4 = '1/4';
            _this.item4type = 'kg';
                _this.jalebiAns1 = 250;
        }
        

        
        if(_this.autoRide3type == 'km')
            {
            _this.autoRide3 = _this.convertToKm(_this.randomNumberForAuto[2]);
                _this.autoRide3Ans1 = _this.randomNumberForAuto[2];
                //_this.inputBoxStandard = 2;
            }
        else 
            {
                //_this.inputBoxStandard = 3;
                _this.autoRide3 = _this.randomNumberForAuto[2];
                _this.autoRide3Ans1 = _this.convertToKm(_this.randomNumberForAuto[2]);
                if(_this.autoRide3Ans1<1)
                    _this.autoRide3Ans2 = _this.autoRide3Ans1.toString().substring(1);
                else if(_this.autoRide3Ans1==1.0)
                    _this.autoRide3Ans2 = 1;
            }
        
        if(_this.randomNumberForAuto[2]/750 == 1)
        {   
            _this.autoRide3 = '3/4';
            _this.autoRide3type = 'km';
            _this.autoRide3Ans1 = 750;
        }
        else if(_this.randomNumberForAuto[2]/500 == 1)
           {   
            _this.autoRide3 = '1/2';
            _this.autoRide3type = 'km';
               _this.autoRide3Ans1 = 500;
        }
        else if(_this.randomNumberForAuto[2]/250 == 1)
            {   
            _this.autoRide3 = '1/4';
            _this.autoRide3type = 'km';
                _this.autoRide3Ans1 = 250;
        }
        
        
        
        if(_this.item5type == 'l')
            {
            _this.item5 = _this.convertToKm(_this.item5quantity);
                _this.oilAns1 = _this.item5quantity;
                //_this.inputBoxStandard = 1;
                //_this.VoiceNumber = 5;
            }
        else 
            {
                //_this.inputBoxStandard = 0;
                //_this.VoiceNumber = 6;
                _this.item5 = _this.item5quantity;
                _this.oilAns1 = _this.convertToKm(_this.item5quantity);
                if(_this.oilAns1<1)
                    _this.oilAns2 = _this.oilAns1.toString().substring(1);
                else if(_this.oilAns1==1.0)
                    _this.oilAns2 = 1;
            }
        
        if(_this.item5quantity/750 == 1)
            {   
            _this.item5 = '3/4';
            _this.item5type = 'l';
            _this.oilAns1 = 750;
        }
        else if(_this.item5quantity/500 == 1)
            {   
            _this.item5 = '1/2';
            _this.item5type = 'l';
                _this.oilAns1 = 500;
        }
        else if(_this.item5quantity/250 == 1)
            {   
            _this.item5 = '1/4';
            _this.item5type = 'l';
                _this.oilAns1 = 250;
        }
        
        
        
        if(_this.autoRide4type == 'km')
            {
            _this.autoRide4 = _this.convertToKm(_this.randomNumberForAuto[3]);
                _this.autoRide4Ans1 = _this.randomNumberForAuto[3];
                //_this.inputBoxStandard = 2;
            }
        else 
            {
                //_this.inputBoxStandard = 3;
                _this.autoRide4 = _this.randomNumberForAuto[3];
                _this.autoRide4Ans1 = _this.convertToKm(_this.randomNumberForAuto[3]);
                if(_this.autoRide4Ans1<1)
                    _this.autoRide4Ans2 = _this.autoRide4Ans1.toString().substring(1);
                else if(_this.autoRide4Ans1==1.0)
                    _this.autoRide4Ans2 = 1;
            }
        
        if(_this.randomNumberForAuto[3]/750 == 1)
        {   
            _this.autoRide4 = '3/4';
            _this.autoRide4type = 'km';
            _this.autoRide4Ans1 = 750;
        }
        else if(_this.randomNumberForAuto[3]/500 == 1)
           {   
            _this.autoRide4 = '1/2';
            _this.autoRide4type = 'km';
               _this.autoRide4Ans1 = 500;
        }
        else if(_this.randomNumberForAuto[3]/250 == 1)
            {   
            _this.autoRide4 = '1/4';
            _this.autoRide4type = 'km';
                _this.autoRide4Ans1 = 250;
        }
       
        
        if(window.languageSelected == "English")
            {
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' km';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' m';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' km';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' m';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' km';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' m';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' km';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' m';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+' Kg';
                else 
                    _this.vegitableList = _this.item1+' gm';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+' Kg';
                else 
                    _this.fruitList = _this.item2+' gm';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+' Kg';
                else 
                    _this.grossList = _this.item3+' gm';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+' Kg';
                else 
                    _this.sweetList = _this.item4+' gm';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' l';
                else 
                    _this.oilList = _this.item5+' ml';
                
            }
        else if(window.languageSelected == "Hindi")
            {
                
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' कि.मि';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' मि';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' कि.मि';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' मि';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' कि.मि';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' मि';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' कि.मि';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' मि';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+' कि.ग्रा';
                else 
                    _this.vegitableList = _this.item1+' ग्राम';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+' कि.ग्रा';
                else 
                    _this.fruitList = _this.item2+' ग्राम';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+' कि.ग्रा';
                else 
                    _this.grossList = _this.item3+' ग्राम';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+' कि.ग्रा';
                else 
                    _this.sweetList = _this.item4+' ग्राम';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' ली';
                else 
                    _this.oilList = _this.item5+' मि.ली';
                
                
            }
        else if(window.languageSelected == "Kannada")
            {
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' ಕಿ.ಮೀ';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' ಮಿ';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' ಕಿ.ಮೀ';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' ಮಿ';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' ಕಿ.ಮೀ';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' ಮಿ';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' ಕಿ.ಮೀ';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' ಮಿ';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+' ಕೆಜಿ';
                else 
                    _this.vegitableList = _this.item1+' ಗ್ರಾಂ';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+' ಕೆಜಿ';
                else 
                    _this.fruitList = _this.item2+' ಗ್ರಾಂ';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+' ಕೆಜಿ';
                else 
                    _this.grossList = _this.item3+' ಗ್ರಾಂ';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+' ಕೆಜಿ';
                else 
                    _this.sweetList = _this.item4+' ಗ್ರಾಂ';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' ಲೀ';
                else 
                    _this.oilList = _this.item5+' ಮಿ.ಲೀ';

                
            }
        else if(window.languageSelected == "Gujarati")
            {
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' કિ.મી';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' મી';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' કિ.મી';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' મી';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' કિ.મી';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' મી';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' કિ.મી';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' મી';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+' કિગ્રા';
                else 
                    _this.vegitableList = _this.item1+' ગ્રા';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+' કિગ્રા';
                else 
                    _this.fruitList = _this.item2+' ગ્રા';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+' કિગ્રા';
                else 
                    _this.grossList = _this.item3+' ગ્રા';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+' કિગ્રા';
                else 
                    _this.sweetList = _this.item4+' ગ્રા';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' લી';
                else 
                    _this.oilList = _this.item5+' મિલી';

            }
        else if(window.languageSelected == "Odiya")
            {
                
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' କି.ମି';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' ମି';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' କି.ମି';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' ମି';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' କି.ମି';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' ମି';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' କି.ମି';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' ମି';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+' କି.ଗ୍ରା';
                else 
                    _this.vegitableList = _this.item1+' ଗ୍ରାମ';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+' କି.ଗ୍ରା';
                else 
                    _this.fruitList = _this.item2+' ଗ୍ରାମ';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+' କି.ଗ୍ରା';
                else 
                    _this.grossList = _this.item3+' ଗ୍ରାମ';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+' କି.ଗ୍ରା';
                else 
                    _this.sweetList = _this.item4+' ଗ୍ରାମ';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' ଲି';
                else 
                    _this.oilList = _this.item5+' ମି.ଲି';
                
            }
        else if(window.languageSelected == "Tamil")
            {
                
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' கி.மீ';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' மி';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' கி.மீ';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' மி';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' கி.மீ';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' மி';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' கி.மீ';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' மி';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+' கி.கி';
                else 
                    _this.vegitableList = _this.item1+' கி';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+' கி.கி';
                else 
                    _this.fruitList = _this.item2+' கி';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+' கி.கி';
                else 
                    _this.grossList = _this.item3+' கி';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+' கி.கி';
                else 
                    _this.sweetList = _this.item4+' கி';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' லி';
                else 
                    _this.oilList = _this.item5+' மி.லி';
                
                
                
            }
        else if(window.languageSelected == "Marathi")
            {
                
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' किमी';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' मी';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' किमी';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' मी';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' किमी';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' मी';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' किमी';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' मी';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+' किलो';
                else 
                    _this.vegitableList = _this.item1+' ग्रॅम';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+' किलो';
                else 
                    _this.fruitList = _this.item2+' ग्रॅम';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+' किलो';
                else 
                    _this.grossList = _this.item3+' ग्रॅम';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+' किलो';
                else 
                    _this.sweetList = _this.item4+' ग्रॅम';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' ली';
                else 
                    _this.oilList = _this.item5+' मि.ली';
                

            }
        else if(window.languageSelected == "Urdu")
            {
                
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' کلومیٹر';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' میٹر';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' کلومیٹر';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' میٹر';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' کلومیٹر';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' میٹر';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' کلومیٹر';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' میٹر';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+' کلوگرام';
                else 
                    _this.vegitableList = _this.item1+' گرام';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+' کلوگرام';
                else 
                    _this.fruitList = _this.item2+' گرام';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+' کلوگرام';
                else 
                    _this.grossList = _this.item3+' گرام';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+' کلوگرام';
                else 
                    _this.sweetList = _this.item4+' گرام';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' لیٹر';
                else 
                    _this.oilList = _this.item5+' ملی لیٹر';
                

            }
        else if(window.languageSelected == "Telugu")
            {
                
                if(_this.autoRide1type == 'km')
                    _this.autoRideDist1 = _this.autoRide1+' కి.మీ';
                else 
                    _this.autoRideDist1 = _this.autoRide1+' మీ';
                
                if(_this.autoRide2type == 'km')
                    _this.autoRideDist2 = _this.autoRide2+' కి.మీ';
                else 
                    _this.autoRideDist2 = _this.autoRide2+' మీ';
                
                if(_this.autoRide3type == 'km')
                    _this.autoRideDist3 = _this.autoRide3+' కి.మీ';
                else 
                    _this.autoRideDist3 = _this.autoRide3+' మీ';
                
                if(_this.autoRide4type == 'km')
                    _this.autoRideDist4 = _this.autoRide4+' కి.మీ';
                else 
                    _this.autoRideDist4 = _this.autoRide4+' మీ';
                
                
                if(_this.item1type == 'kg')
                    _this.vegitableList = _this.item1+'  కి.గ్రా';
                else 
                    _this.vegitableList = _this.item1+' గ్రా';

                if(_this.item2type == 'kg')
                    _this.fruitList = _this.item2+'  కి.గ్రా';
                else 
                    _this.fruitList = _this.item2+' గ్రా';
                
                if(_this.item3type == 'kg')
                    _this.grossList = _this.item3+'  కి.గ్రా';
                else 
                    _this.grossList = _this.item3+' గ్రా';
                
                if(_this.item4type == 'kg')
                    _this.sweetList = _this.item4+'  కి.గ్రా';
                else 
                    _this.sweetList = _this.item4+' గ్రా';
                
                if(_this.item5type == 'l')
                    _this.oilList = _this.item5+' లీ';
                else 
                    _this.oilList = _this.item5+' మి.లీ';
                

            }
        /*_this.twoHundredFrame = 0;
        _this.oneHundredFrame = 1;
        _this.fiftyFrame = 4;
        _this.twentyFrame = 2;
        _this.tenFrame = 2;
        _this.fiveFrame = 1;
        _this.twoFrame = 2;
        _this.oneFrame = 2;
        _this.enableWalletDrag = false;
        _this.walletClicked = false;
        _this.billMachineDisplayed = false;
        _this.walletCountTopass = 371;*/
        _this.startGameScene();
    },
    
    startGameScene:function()
    {
        _this.walletCount = 0;
        
      _this.handOverMoney = _this.add.sprite(0,47,'handOverMoney_sp');
      _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
      _this.nextArrow.inputEnabled = true;
      _this.nextArrow.input.useHandCursor = true;
      _this.nextArrow.events.onInputDown.add(_this.gotoWalletScene,_this);
      _this.VoiceNumber = 16;
      _this.getVoice(_this.VoiceNumber);
    },
    
  gotoWalletScene:function()
    {
        _this.VoiceNumber = 1;
        _this.getVoice(_this.VoiceNumber);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.getVoice(_this.VoiceNumber);
         _this.nextArrow.events.onInputDown.removeAll();
        
        
        _this.handOverMoney.destroy();   //uncomment this
        _this.nextArrow.destroy();
        
        _this.walletGrup = _this.add.group();
        _this.wallet = _this.add.sprite(300,80,'wallet_sp');
        
        _this.twoHunSprite = _this.add.sprite(330,170,'200rupee_sp');
        _this.twoHunSprite.frame = 0;
        
        _this.HundredSprite = _this.add.sprite(350,241,'100rupee_sp');
        _this.HundredSprite.frame = 0;
        
        _this.fiftySprite = _this.add.sprite(330,300,'50rupee_sp');
        _this.fiftySprite.frame = 0;
        
        _this.twentySprite = _this.add.sprite(350,371,'20rupee_sp');
        _this.twentySprite.frame = 0;
        
        _this.tenSprite = _this.add.sprite(620,157,'10rupee_sp');
        _this.tenSprite.frame = 0;
        
        _this.fiveSprite = _this.add.sprite(600,224,'5rupee_sp');
        _this.fiveSprite.frame = 0;
        
        _this.twoSprite = _this.add.sprite(620,298,'2rupee_sp');
        _this.twoSprite.frame = 0;
        
        _this.oneSprite = _this.add.sprite(600,371,'1rupee_sp');
        _this.oneSprite.frame = 0;
        
        _this.walletGrup.add(_this.wallet);
        _this.walletGrup.add(_this.twoHunSprite);
        _this.walletGrup.add(_this.HundredSprite);
        _this.walletGrup.add(_this.fiftySprite);
        _this.walletGrup.add(_this.twentySprite);
        _this.walletGrup.add(_this.tenSprite);
        _this.walletGrup.add(_this.fiveSprite);
        _this.walletGrup.add(_this.twoSprite);
        _this.walletGrup.add(_this.oneSprite);
        
        _this.addDragMoneyOnLeft()
    },
    addDragMoneyOnLeft:function()
    {
        _this.notesGroup200 = _this.add.group();
        _this.notesGroup100 = _this.add.group();
        _this.notesGroup50 = _this.add.group();
        _this.notesGroup20 = _this.add.group();
        _this.notesGroup10 = _this.add.group();
        _this.notesGroup5 = _this.add.group();
        _this.notesGroup2 = _this.add.group();
        _this.notesGroup1 = _this.add.group();
         
        _this.notesGroup200.inputEnableChildren = true;
        _this.notesGroup100.inputEnableChildren = true;
        _this.notesGroup50.inputEnableChildren = true;
        _this.notesGroup20.inputEnableChildren = true;
        _this.notesGroup10.inputEnableChildren = true;
        _this.notesGroup5.inputEnableChildren = true;
        _this.notesGroup2.inputEnableChildren = true;
        _this.notesGroup1.inputEnableChildren = true;
        
        _this.twohunCount = 0;
        _this.hunCount = 0;
        _this.fiftyCount = 0;
        _this.twentyCount = 0;
        _this.tenCount = 0;
        _this.fiveCount = 0;
        _this.twoCount = 0;
        _this.oneCount = 0;
        
        for(var i=0; i<_this.amount1.length;i++)
            {
                if(_this.amount1[i]==200)
                    _this.twohunCount++;
                else if(_this.amount1[i]==100)
                    _this.hunCount++;
                else if(_this.amount1[i]==50)
                    _this.fiftyCount++;
                else if(_this.amount1[i]==20)
                    _this.twentyCount++;
                else if(_this.amount1[i]==10)
                    _this.tenCount++;
                else if(_this.amount1[i]==5)
                    _this.fiveCount++;
                else if(_this.amount1[i]==2)
                    _this.twoCount++;
                else if(_this.amount1[i]==1)
                    _this.oneCount++;
            }
        
        for(var i=0; i<_this.amount2.length;i++)
            {
                if(_this.amount2[i]==200)
                    _this.twohunCount++;
                else if(_this.amount2[i]==100)
                    _this.hunCount++;
                else if(_this.amount2[i]==50)
                    _this.fiftyCount++;
                else if(_this.amount2[i]==20)
                    _this.twentyCount++;
                else if(_this.amount2[i]==10)
                    _this.tenCount++;
                else if(_this.amount2[i]==5)
                    _this.fiveCount++;
                else if(_this.amount2[i]==2)
                    _this.twoCount++;
                else if(_this.amount2[i]==1)
                    _this.oneCount++;
            }
        
        for(var i=0; i<_this.amount3.length;i++)
            {
                if(_this.amount3[i]==200)
                    _this.twohunCount++;
                else if(_this.amount3[i]==100)
                    _this.hunCount++;
                else if(_this.amount3[i]==50)
                    _this.fiftyCount++;
                else if(_this.amount3[i]==20)
                    _this.twentyCount++;
                else if(_this.amount3[i]==10)
                    _this.tenCount++;
                else if(_this.amount3[i]==5)
                    _this.fiveCount++;
                else if(_this.amount3[i]==2)
                    _this.twoCount++;
                else if(_this.amount3[i]==1)
                    _this.oneCount++;
            }
        
        for(var i=0; i<_this.amount4.length;i++)
            {
                if(_this.amount4[i]==200)
                    _this.twohunCount++;
                else if(_this.amount4[i]==100)
                    _this.hunCount++;
                else if(_this.amount4[i]==50)
                    _this.fiftyCount++;
                else if(_this.amount4[i]==20)
                    _this.twentyCount++;
                else if(_this.amount4[i]==10)
                    _this.tenCount++;
                else if(_this.amount4[i]==5)
                    _this.fiveCount++;
                else if(_this.amount4[i]==2)
                    _this.twoCount++;
                else if(_this.amount4[i]==1)
                    _this.oneCount++;
            }
        
        for(var i=0; i<_this.amount5.length;i++)
            {
                if(_this.amount5[i]==200)
                    _this.twohunCount++;
                else if(_this.amount5[i]==100)
                    _this.hunCount++;
                else if(_this.amount5[i]==50)
                    _this.fiftyCount++;
                else if(_this.amount5[i]==20)
                    _this.twentyCount++;
                else if(_this.amount5[i]==10)
                    _this.tenCount++;
                else if(_this.amount5[i]==5)
                    _this.fiveCount++;
                else if(_this.amount5[i]==2)
                    _this.twoCount++;
                else if(_this.amount5[i]==1)
                    _this.oneCount++;
            }
        
        console.log(_this.twohunCount);
        console.log(_this.hunCount);
        console.log(_this.fiftyCount);
        console.log(_this.twentyCount);
        console.log(_this.tenCount);
        console.log(_this.fiveCount);
        console.log(_this.twoCount);
        console.log(_this.oneCount);
        
        _this.firstValue = _this.twohunCount;
        _this.secondValue = _this.twohunCount+_this.hunCount;
        _this.thirdValue = _this.twohunCount+_this.hunCount+_this.fiftyCount;
        _this.fourthValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount;
        _this.fifthValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount+_this.tenCount;
        _this.sixthValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount+_this.tenCount+_this.fiveCount;
        _this.seventhValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount+_this.tenCount+_this.fiveCount+_this.twoCount;
        _this.eightValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount+_this.tenCount+_this.fiveCount+_this.twoCount+_this.oneCount;
        
        _this.checkCountNotes = _this.eightValue;
        _this.countDragNotes = 0;
        
        for (var i = 0; i < _this.firstValue; i++)
                {
                    _this.sprite2 = _this.notesGroup200.create(30, 100+(20*i), '200rsNote_sp');
                    _this.sprite2.name = '200rsNote_sp' + i;  
                }
         
            for (var i = _this.firstValue; i < _this.secondValue; i++)
                {
                    _this.sprite2 = _this.notesGroup100.create(30, 100+(20*i), '100rsNote_sp');
                    _this.sprite2.name = '100rsNote_sp' + i;  
                }
            for (var i = _this.secondValue; i < _this.thirdValue; i++)
                {
                    _this.sprite2 = _this.notesGroup50.create(30, 100+(20*i), '50rsNote_sp');
                    _this.sprite2.name = '50rsNote_sp' + i;  
                }
            for (var i = _this.thirdValue; i < _this.fourthValue; i++)
                {
                    _this.sprite2 = _this.notesGroup20.create(30, 100+(20*i), '20rsNote_sp');
                    _this.sprite2.name = '20rsNote_sp' + i;  
                }
            for (var i = _this.fourthValue; i < _this.fifthValue; i++)
                {
                    _this.sprite2 = _this.notesGroup10.create(30, 100+(20*i), '10rsNote_sp');
                    _this.sprite2.name = '10rsNote_sp' + i;  
                }
            for (var i = _this.fifthValue; i < _this.sixthValue; i++)
                {
                    _this.sprite2 = _this.notesGroup5.create(30, 100+(20*i), '5rsNote_sp');
                    _this.sprite2.name = '5rsNote_sp' + i;  
                }
            for (var i = _this.sixthValue; i < _this.seventhValue; i++)
                {
                    _this.sprite2 = _this.notesGroup2.create(30, 100+(20*i), '2rsNote_sp');
                    _this.sprite2.name = '2rsNote_sp' + i;  
                }
            for (var i = _this.seventhValue; i < _this.eightValue; i++)
                {
                    _this.sprite2 = _this.notesGroup1.create(30, 100+(20*i), '1rsNote_sp');
                    _this.sprite2.name = '1rsNote_sp' + i;  
                }
        
        _this.twoHundredFrame = _this.twohunCount;
        _this.oneHundredFrame = _this.hunCount;
        _this.fiftyFrame = _this.fiftyCount;
        _this.twentyFrame = _this.twentyCount;
        _this.tenFrame = _this.tenCount;
        _this.fiveFrame = _this.fiveCount;
        _this.twoFrame = _this.twoCount;
        _this.oneFrame = _this.oneCount;
        _this.enableWalletDrag = false;
        _this.walletClicked = false;
        _this.billMachineDisplayed = false;
        //_this.walletCountTopass = 371;
        
        _this.notesGroup200.onChildInputDown.add(_this.notesClicked, this);
        _this.notesGroup100.onChildInputDown.add(_this.notesClicked, this);
        _this.notesGroup50.onChildInputDown.add(_this.notesClicked, this);
        _this.notesGroup20.onChildInputDown.add(_this.notesClicked, this);
        _this.notesGroup10.onChildInputDown.add(_this.notesClicked, this);
        _this.notesGroup5.onChildInputDown.add(_this.notesClicked, this);
        _this.notesGroup2.onChildInputDown.add(_this.notesClicked, this);
        _this.notesGroup1.onChildInputDown.add(_this.notesClicked, this);
    
    },
    notesClicked:function(target) {
       
        _this.vx = target.x;   
        _this.vy = target.y;
        
        target.input.enableDrag(true);
        target.events.onDragStart.add(_this.dragStopNotes,_this)
    },
    dragStopNotes:function(target)
    {
        target.events.onDragStop.add(function(){
            console.log(target.name);
            if(_this.checkOverlap(target,_this.wallet))
                {
                    for (var i = 0; i < _this.notesGroup200.length; i++)
                    {
                        if(_this.notesGroup200.getChildAt(i).name == target.name)
                            {
                                _this.snapSound = _this.add.audio('snapSound');
                                _this.snapSound.play();
                                _this.walletCount =_this.walletCount+200;
                                _this.updateAmountToWallet(_this.walletCount);
                                target.events.onDragStop.removeAll();
                                _this.countDragNotes++;
                                _this.twoHunSprite.frame++;
                                target.visible = false;
                            }
                    }
                    for (var i = 0; i < _this.notesGroup100.length; i++)
                    {
                        if(_this.notesGroup100.getChildAt(i).name == target.name)
                            {
                                _this.snapSound = _this.add.audio('snapSound');
                                _this.snapSound.play();
                                _this.walletCount =_this.walletCount+100;
                                _this.updateAmountToWallet(_this.walletCount);
                                target.events.onDragStop.removeAll();
                                _this.countDragNotes++;
                                _this.HundredSprite.frame++;
                                target.visible = false;
                            }
                    }
                    for (var i = 0; i < _this.notesGroup50.length; i++)
                    {
                        if(_this.notesGroup50.getChildAt(i).name == target.name)
                            {
                                _this.snapSound = _this.add.audio('snapSound');
                                _this.snapSound.play();
                                _this.walletCount =_this.walletCount+50;
                                _this.updateAmountToWallet(_this.walletCount);
                                target.events.onDragStop.removeAll();
                                _this.countDragNotes++;
                                _this.fiftySprite.frame++;
                                target.visible = false;
                            }
                    }
                    for (var i = 0; i < _this.notesGroup20.length; i++)
                    {
                        if(_this.notesGroup20.getChildAt(i).name == target.name)
                            {
                                _this.snapSound = _this.add.audio('snapSound');
                                _this.snapSound.play();
                                _this.walletCount =_this.walletCount+20;
                                _this.updateAmountToWallet(_this.walletCount);
                                target.events.onDragStop.removeAll();
                                _this.countDragNotes++;
                                _this.twentySprite.frame++;
                                target.visible = false;
                            }
                    }
                    for (var i = 0; i < _this.notesGroup10.length; i++)
                    {
                        if(_this.notesGroup10.getChildAt(i).name == target.name)
                            {
                                _this.snapSound = _this.add.audio('snapSound');
                                _this.snapSound.play();
                                _this.walletCount =_this.walletCount+10;
                                _this.updateAmountToWallet(_this.walletCount);
                                target.events.onDragStop.removeAll();
                                _this.countDragNotes++;
                                _this.tenSprite.frame++;
                                target.visible = false;
                            }
                    }
                    for (var i = 0; i < _this.notesGroup5.length; i++)
                    {
                        if(_this.notesGroup5.getChildAt(i).name == target.name)
                            {
                                _this.snapSound = _this.add.audio('snapSound');
                                _this.snapSound.play();
                                _this.walletCount =_this.walletCount+5;
                                _this.updateAmountToWallet(_this.walletCount);
                                target.events.onDragStop.removeAll();
                                _this.countDragNotes++;
                                _this.fiveSprite.frame++;
                                target.visible = false;
                            }
                    }
                    for (var i = 0; i < _this.notesGroup2.length; i++)
                    {
                        if(_this.notesGroup2.getChildAt(i).name == target.name)
                            {
                                _this.snapSound = _this.add.audio('snapSound');
                                _this.snapSound.play();
                                _this.walletCount =_this.walletCount+2;
                                _this.updateAmountToWallet(_this.walletCount);
                                target.events.onDragStop.removeAll();
                                _this.countDragNotes++;
                                _this.twoSprite.frame++;
                                target.visible = false;
                            }
                    }
                    for (var i = 0; i < _this.notesGroup1.length; i++)
                    {
                        if(_this.notesGroup1.getChildAt(i).name == target.name)
                            {
                                _this.snapSound = _this.add.audio('snapSound');
                                _this.snapSound.play();
                                _this.walletCount =_this.walletCount+1;
                                _this.updateAmountToWallet(_this.walletCount);
                                target.events.onDragStop.removeAll();
                                _this.countDragNotes++;
                                _this.oneSprite.frame++;
                                target.visible = false;
                            }
                    }
                    console.log("!! "+_this.countDragNotes);
                    
                    if(_this.countDragNotes == _this.checkCountNotes)
                        {
                            _this.time.events.add(1000, function(){
                            //_this.wallet.loadTexture('walletAnim_sp', 0, false);
                            _this.walletGrup.destroy();
                                _this.walletText.destroy();
                            _this.wallet = _this.add.sprite(300,80,'walletAnim_sp');
                            _this.anim4 = _this.wallet.animations.add('walletAnim_sp');
				            _this.anim4.play(25,false);
                            _this.anim4.onComplete.add(function(){
                                
                               _this.boxonRightCrnrW = _this.add.sprite(857,47,'blueBox_sp');
                               _this.walletBtnOnBoxW = _this.add.sprite(875,70,'walletBtn_sp');
                                
                                _this.walletCountTopass = _this.walletCount;
                                
                                _this.showListOfItems()
                                //_this.show();
                              
                            },_this);
                        },_this);
                            
                        }
                }
                else
                {
                    target.x = _this.vx;   
                    target.y = _this.vy;
                }
        },_this);
    },
    updateAmountToWallet:function(count)
    {
        if(_this.walletText == null)
            {
              _this.walletText = this.add.text(770,105,''+count);
              _this.walletText.anchor.setTo(0.5);
              _this.walletText.font = 'myfont';
              _this.walletText.align = 'center';
              _this.walletText.fontWeight = 'bold';
              _this.walletText.fontSize = 30;
              _this.walletText.fill = '#ffffff';
            }
        
      _this.walletText.setText(count);
    },
    
    show:function()
    {
       _this.receiptToClick = _this.add.sprite(322,46,'receiptForBeg_sp');
       
        
      _this.autoImg1 = _this.add.sprite(380,120,'autoImg_sp');
      ///_this.autoImg1.angle = 21;
        
      _this.autoImg1Text = this.add.text(540,135,''+_this.autoRideDist1);
      _this.autoImg1Text.anchor.setTo(0.5);
      _this.autoImg1Text.font = 'myfont';
      _this.autoImg1Text.align = 'center';
      _this.autoImg1Text.fontWeight = 'bold';
      _this.autoImg1Text.fontSize = 30;
      //_this.autoImg1Text.angle = 21;
        
        _this.autoImg1.frame = 1;
            _this.autoImg1Text.fill = "#949494";
      
      _this.carrotImg = _this.add.sprite(390,180,_this.itemArray1+'Img_sp');
      //_this.carrotImg.angle = 21;
      _this.carrotImg.anchor.setTo(0.5);
        
      //_this.carrotImgText = this.add.text(550,220,''+_this.vegitableList);
      _this.carrotImgText = this.add.text(540,185,''+_this.vegitableList);
      _this.carrotImgText.anchor.setTo(0.5);
      _this.carrotImgText.font = 'myfont';
      _this.carrotImgText.align = 'center';
      _this.carrotImgText.fontWeight = 'bold';
      _this.carrotImgText.fontSize = 30;
      //_this.carrotImgText.angle = 21;
        
        _this.carrotImg.frame = 1;
            _this.carrotImgText.fill = "#949494";
      
      _this.bananaImg = _this.add.sprite(390,220,_this.itemArray2+'Img_sp');
      //_this.bananaImg.angle = 21;
      _this.bananaImg.anchor.setTo(0.5);
        
      //_this.bananaImgText = this.add.text(535,245,''+_this.fruitList);
      _this.bananaImgText = this.add.text(540,225,''+_this.fruitList);
      _this.bananaImgText.anchor.setTo(0.5);
      _this.bananaImgText.font = 'myfont';
      _this.bananaImgText.align = 'center';
      _this.bananaImgText.fontWeight = 'bold';
      _this.bananaImgText.fontSize = 30;
      //_this.bananaImgText.angle = 21;
        
        _this.bananaImg.frame = 1;
            _this.bananaImgText.fill = "#949494";
        
        
      _this.autoImg2 = _this.add.sprite(380,270,'autoImg_sp');
      //_this.autoImg2.angle = 21;
        
      _this.autoImg2Text = this.add.text(540,280,''+_this.autoRideDist2);
      _this.autoImg2Text.anchor.setTo(0.5);
      _this.autoImg2Text.font = 'myfont';
      _this.autoImg2Text.align = 'center';
      _this.autoImg2Text.fontWeight = 'bold';
      _this.autoImg2Text.fontSize = 30;
      //_this.autoImg2Text.angle = 21;
        
        _this.autoImg2.frame = 1;
            _this.autoImg2Text.fill = "#949494";
      //  
      _this.candyImg = _this.add.sprite(390,320,_this.itemArray3+'Img_sp');
      //_this.candyImg.angle = 21;
      _this.candyImg.anchor.setTo(0.5);
        
      //_this.candyImgText = this.add.text(505,340,''+_this.grossList);
      _this.candyImgText = this.add.text(540,325,''+_this.grossList);
      _this.candyImgText.anchor.setTo(0.5);
      _this.candyImgText.font = 'myfont';
      _this.candyImgText.align = 'center';
      _this.candyImgText.fontWeight = 'bold';
      _this.candyImgText.fontSize = 30;
      //_this.candyImgText.angle = 21;
        
        _this.candyImg.frame = 1;
            _this.candyImgText.fill = "#949494";
        
      _this.jalebiImg = _this.add.sprite(390,370,_this.itemArray4+'Img_sp');
      //_this.jalebiImg.angle = 21;
      _this.jalebiImg.anchor.setTo(0.5);
        
      /*_this.jalebiImgTextN = this.add.text(460,355,''+_this.sweetList2N);
      _this.jalebiImgTextN.anchor.setTo(0.5);
      _this.jalebiImgTextN.font = 'myfont';
      _this.jalebiImgTextN.align = 'center';
      _this.jalebiImgTextN.fontWeight = 'bold';
      _this.jalebiImgTextN.fontSize = 30;
      _this.jalebiImgTextN.angle = 21;*/
        
      //_this.jalebiImgText_ = this.add.text(490,355,''+_this.sweetList);
      _this.jalebiImgText_ = this.add.text(540,375,''+_this.sweetList);
      _this.jalebiImgText_.anchor.setTo(0.5);
      _this.jalebiImgText_.font = 'myfont';
      _this.jalebiImgText_.align = 'center';
      _this.jalebiImgText_.fontWeight = 'bold';
      _this.jalebiImgText_.fontSize = 30;
      //_this.jalebiImgText_.angle = 21;
        
        _this.jalebiImg.frame = 1;
            _this.jalebiImgText_.fill = "#949494";
        
      /*_this.jalebiImgTextStd = this.add.text(490,385,''+_this.sweetList);
      _this.jalebiImgTextStd.anchor.setTo(0.5);
      _this.jalebiImgTextStd.font = 'myfont';
      _this.jalebiImgTextStd.align = 'center';
      _this.jalebiImgTextStd.fontWeight = 'bold';
      _this.jalebiImgTextStd.fontSize = 30;
      _this.jalebiImgTextStd.angle = 21;
      
      /*_this.jalebiImgTextD = this.add.text(450,385,''+_this.sweetList2D);
      _this.jalebiImgTextD.anchor.setTo(0.5);
      _this.jalebiImgTextD.font = 'myfont';
      _this.jalebiImgTextD.align = 'center';
      _this.jalebiImgTextD.fontWeight = 'bold';
      _this.jalebiImgTextD.fontSize = 30;
      _this.jalebiImgTextD.angle = 21;*/
        
      _this.autoImg3 = _this.add.sprite(380,410,'autoImg_sp');
      //_this.autoImg3.angle = 21;
      //  
      _this.autoImg3Text = this.add.text(540,415,''+_this.autoRideDist3);
      _this.autoImg3Text.anchor.setTo(0.5);
      _this.autoImg3Text.font = 'myfont';
      _this.autoImg3Text.align = 'center';
      _this.autoImg3Text.fontWeight = 'bold';
      _this.autoImg3Text.fontSize = 30;
      //_this.autoImg3Text.angle = 21;
        
        _this.autoImg3.frame = 1;
            _this.autoImg3Text.fill = "#949494";
        
      _this.oilImg = _this.add.sprite(390,470,_this.itemArray5+'Img_sp');
      //_this.oilImg.angle = 21;
      _this.oilImg.anchor.setTo(0.5);
        
      /*_this.oilImgTextN = this.add.text(435,440,''+_this.oilList);
      _this.oilImgTextN.anchor.setTo(0.5);
      _this.oilImgTextN.font = 'myfont';
      _this.oilImgTextN.align = 'center';
      _this.oilImgTextN.fontWeight = 'bold';
      _this.oilImgTextN.fontSize = 30;
      _this.oilImgTextN.angle = 21;*/
        
      _this.oilImgText_ = this.add.text(540,475,''+_this.oilList);
      _this.oilImgText_.anchor.setTo(0.5);
      _this.oilImgText_.font = 'myfont';
      _this.oilImgText_.align = 'center';
      _this.oilImgText_.fontWeight = 'bold';
      _this.oilImgText_.fontSize = 30;
      //_this.oilImgText_.angle = 21;
        
        _this.oilImg.frame = 1;
            _this.oilImgText_.fill = "#949494";
        
      /*_this.oilImgTextStd = this.add.text(455,460,''+_this.oilListStd);
      _this.oilImgTextStd.anchor.setTo(0.5);
      _this.oilImgTextStd.font = 'myfont';
      _this.oilImgTextStd.align = 'center';
      _this.oilImgTextStd.fontWeight = 'bold';
      _this.oilImgTextStd.fontSize = 30;
      _this.oilImgTextStd.angle = 21;
        
      _this.oilImgTextD = this.add.text(425,468,''+_this.oilListD);
      _this.oilImgTextD.anchor.setTo(0.5);
      _this.oilImgTextD.font = 'myfont';
      _this.oilImgTextD.align = 'center';
      _this.oilImgTextD.fontWeight = 'bold';
      _this.oilImgTextD.fontSize = 30;
      _this.oilImgTextD.angle = 21;*/
        
      _this.autoImg4 = _this.add.sprite(380,510,'autoImg_sp');
      //_this.autoImg4.angle = 21;
        
      _this.autoImg4Text = this.add.text(540,515,''+_this.autoRideDist4);
      _this.autoImg4Text.anchor.setTo(0.5);
      _this.autoImg4Text.font = 'myfont';
      _this.autoImg4Text.align = 'center';
      _this.autoImg4Text.fontWeight = 'bold';
      _this.autoImg4Text.fontSize = 30;
      //_this.autoImg4Text.angle = 21;
        
        _this.autoImg4.frame = 1;
            _this.autoImg4Text.fill = "#949494";
    
    },
    showListOfItems:function()
    {
      _this.VoiceNumber = 17;
      _this.getVoice(_this.VoiceNumber); 
      _this.handOverRecipt = _this.add.sprite(0,47,'handOverRecipt_sp');
      _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
      _this.nextArrow.inputEnabled = true;
      _this.nextArrow.input.useHandCursor = true;
      _this.nextArrow.events.onInputDown.add(_this.gotoAutoStartScene,_this);  
        
      _this.autoImg1 = _this.add.sprite(470,117,'autoImg_sp');
      _this.autoImg1.angle = 21;
        
      _this.autoImg1Text = this.add.text(565,170,''+_this.autoRideDist1);
      _this.autoImg1Text.anchor.setTo(0.5);
      _this.autoImg1Text.font = 'myfont';
      _this.autoImg1Text.align = 'center';
      _this.autoImg1Text.fontWeight = 'bold';
      _this.autoImg1Text.fontSize = 30;
      _this.autoImg1Text.angle = 21;
      
      _this.carrotImg = _this.add.sprite(470,180,_this.itemArray1+'Img_sp');
      _this.carrotImg.angle = 21;
      _this.carrotImg.anchor.setTo(0.5);
        
      //_this.carrotImgText = this.add.text(550,220,''+_this.vegitableList);
      _this.carrotImgText = this.add.text(545,215,''+_this.vegitableList);
      _this.carrotImgText.anchor.setTo(0.5);
      _this.carrotImgText.font = 'myfont';
      _this.carrotImgText.align = 'center';
      _this.carrotImgText.fontWeight = 'bold';
      _this.carrotImgText.fontSize = 30;
      _this.carrotImgText.angle = 21;
      
      _this.bananaImg = _this.add.sprite(450,220,_this.itemArray2+'Img_sp');
      _this.bananaImg.angle = 21;
      _this.bananaImg.anchor.setTo(0.5);
        
      //_this.bananaImgText = this.add.text(535,245,''+_this.fruitList);
      _this.bananaImgText = this.add.text(535,255,''+_this.fruitList);
      _this.bananaImgText.anchor.setTo(0.5);
      _this.bananaImgText.font = 'myfont';
      _this.bananaImgText.align = 'center';
      _this.bananaImgText.fontWeight = 'bold';
      _this.bananaImgText.fontSize = 30;
      _this.bananaImgText.angle = 21;
        
        
      _this.autoImg2 = _this.add.sprite(415,240,'autoImg_sp');
      _this.autoImg2.angle = 21;
        
      _this.autoImg2Text = this.add.text(520,295,''+_this.autoRideDist2);
      _this.autoImg2Text.anchor.setTo(0.5);
      _this.autoImg2Text.font = 'myfont';
      _this.autoImg2Text.align = 'center';
      _this.autoImg2Text.fontWeight = 'bold';
      _this.autoImg2Text.fontSize = 30;
      _this.autoImg2Text.angle = 21;
        
      _this.candyImg = _this.add.sprite(410,300,_this.itemArray3+'Img_sp');
      _this.candyImg.angle = 21;
      _this.candyImg.anchor.setTo(0.5);
        
      //_this.candyImgText = this.add.text(505,340,''+_this.grossList);
      _this.candyImgText = this.add.text(505,340,''+_this.grossList);
      _this.candyImgText.anchor.setTo(0.5);
      _this.candyImgText.font = 'myfont';
      _this.candyImgText.align = 'center';
      _this.candyImgText.fontWeight = 'bold';
      _this.candyImgText.fontSize = 30;
      _this.candyImgText.angle = 21;
        
      _this.jalebiImg = _this.add.sprite(390,350,_this.itemArray4+'Img_sp');
      _this.jalebiImg.angle = 21;
      _this.jalebiImg.anchor.setTo(0.5);
        
      /*_this.jalebiImgTextN = this.add.text(460,355,''+_this.sweetList2N);
      _this.jalebiImgTextN.anchor.setTo(0.5);
      _this.jalebiImgTextN.font = 'myfont';
      _this.jalebiImgTextN.align = 'center';
      _this.jalebiImgTextN.fontWeight = 'bold';
      _this.jalebiImgTextN.fontSize = 30;
      _this.jalebiImgTextN.angle = 21;*/
        
      //_this.jalebiImgText_ = this.add.text(490,355,''+_this.sweetList);
      _this.jalebiImgText_ = this.add.text(490,385,''+_this.sweetList);
      _this.jalebiImgText_.anchor.setTo(0.5);
      _this.jalebiImgText_.font = 'myfont';
      _this.jalebiImgText_.align = 'center';
      _this.jalebiImgText_.fontWeight = 'bold';
      _this.jalebiImgText_.fontSize = 30;
      _this.jalebiImgText_.angle = 21;
        
      /*_this.jalebiImgTextStd = this.add.text(490,385,''+_this.sweetList);
      _this.jalebiImgTextStd.anchor.setTo(0.5);
      _this.jalebiImgTextStd.font = 'myfont';
      _this.jalebiImgTextStd.align = 'center';
      _this.jalebiImgTextStd.fontWeight = 'bold';
      _this.jalebiImgTextStd.fontSize = 30;
      _this.jalebiImgTextStd.angle = 21;
      
      /*_this.jalebiImgTextD = this.add.text(450,385,''+_this.sweetList2D);
      _this.jalebiImgTextD.anchor.setTo(0.5);
      _this.jalebiImgTextD.font = 'myfont';
      _this.jalebiImgTextD.align = 'center';
      _this.jalebiImgTextD.fontWeight = 'bold';
      _this.jalebiImgTextD.fontSize = 30;
      _this.jalebiImgTextD.angle = 21;*/
        
      _this.autoImg3 = _this.add.sprite(365,370,'autoImg_sp');
      _this.autoImg3.angle = 21;
        
      _this.autoImg3Text = this.add.text(475,430,''+_this.autoRideDist3);
      _this.autoImg3Text.anchor.setTo(0.5);
      _this.autoImg3Text.font = 'myfont';
      _this.autoImg3Text.align = 'center';
      _this.autoImg3Text.fontWeight = 'bold';
      _this.autoImg3Text.fontSize = 30;
      _this.autoImg3Text.angle = 21;
        
      _this.oilImg = _this.add.sprite(370,420,_this.itemArray5+'Img_sp');
      _this.oilImg.angle = 21;
      _this.oilImg.anchor.setTo(0.5);
        
      /*_this.oilImgTextN = this.add.text(435,440,''+_this.oilList);
      _this.oilImgTextN.anchor.setTo(0.5);
      _this.oilImgTextN.font = 'myfont';
      _this.oilImgTextN.align = 'center';
      _this.oilImgTextN.fontWeight = 'bold';
      _this.oilImgTextN.fontSize = 30;
      _this.oilImgTextN.angle = 21;*/
        
      _this.oilImgText_ = this.add.text(460,465,''+_this.oilList);
      _this.oilImgText_.anchor.setTo(0.5);
      _this.oilImgText_.font = 'myfont';
      _this.oilImgText_.align = 'center';
      _this.oilImgText_.fontWeight = 'bold';
      _this.oilImgText_.fontSize = 30;
      _this.oilImgText_.angle = 21;
        
      /*_this.oilImgTextStd = this.add.text(455,460,''+_this.oilListStd);
      _this.oilImgTextStd.anchor.setTo(0.5);
      _this.oilImgTextStd.font = 'myfont';
      _this.oilImgTextStd.align = 'center';
      _this.oilImgTextStd.fontWeight = 'bold';
      _this.oilImgTextStd.fontSize = 30;
      _this.oilImgTextStd.angle = 21;
        
      _this.oilImgTextD = this.add.text(425,468,''+_this.oilListD);
      _this.oilImgTextD.anchor.setTo(0.5);
      _this.oilImgTextD.font = 'myfont';
      _this.oilImgTextD.align = 'center';
      _this.oilImgTextD.fontWeight = 'bold';
      _this.oilImgTextD.fontSize = 30;
      _this.oilImgTextD.angle = 21;*/
        
      _this.autoImg4 = _this.add.sprite(335,445,'autoImg_sp');
      _this.autoImg4.angle = 21;
        
      _this.autoImg4Text = this.add.text(445,505,''+_this.autoRideDist4);
      _this.autoImg4Text.anchor.setTo(0.5);
      _this.autoImg4Text.font = 'myfont';
      _this.autoImg4Text.align = 'center';
      _this.autoImg4Text.fontWeight = 'bold';
      _this.autoImg4Text.fontSize = 30;
      _this.autoImg4Text.angle = 21;
    
        _this.listitemsGroup = _this.add.group();
        _this.listitemsGroup.add(_this.autoImg1);
        _this.listitemsGroup.add(_this.carrotImg);
        _this.listitemsGroup.add(_this.bananaImg);
        _this.listitemsGroup.add(_this.autoImg2);
        _this.listitemsGroup.add(_this.candyImg);
        _this.listitemsGroup.add(_this.jalebiImg);
        _this.listitemsGroup.add(_this.autoImg3);
        _this.listitemsGroup.add(_this.oilImg);
        _this.listitemsGroup.add(_this.autoImg4);
        _this.listitemsGroup.add(_this.autoImg1Text);
        _this.listitemsGroup.add(_this.carrotImgText);
        _this.listitemsGroup.add(_this.bananaImgText);
        _this.listitemsGroup.add(_this.autoImg2Text);
        _this.listitemsGroup.add(_this.candyImgText);
        //_this.listitemsGroup.add(_this.jalebiImgTextN);
        _this.listitemsGroup.add(_this.jalebiImgText_);
        //_this.listitemsGroup.add(_this.jalebiImgTextStd);
        //_this.listitemsGroup.add(_this.jalebiImgTextD);
        _this.listitemsGroup.add(_this.autoImg3Text);
        //_this.listitemsGroup.add(_this.oilImgTextN);
        _this.listitemsGroup.add(_this.oilImgText_);
        //_this.listitemsGroup.add(_this.oilImgTextD);
        //_this.listitemsGroup.add(_this.oilImgTextStd);
        _this.listitemsGroup.add(_this.autoImg4Text);
    },
    gotoAutoStartScene:function()
    {
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        _this.nextArrow.events.onInputDown.removeAll();
        
        _this.listitemsGroup.destroy();
        _this.handOverRecipt.destroy();
        _this.nextArrow.destroy();
        //_this.boxonRightCrnrL = _this.add.sprite(857,159,'blueBox_sp');
       // _this.walletBtnOnBoxL = _this.add.sprite(875,180,'receiptBtn_sp');
        
        _this.boxonRightCrnrW.inputEnabled = true;
        _this.boxonRightCrnrW.input.useHandCursor = true;
        _this.boxonRightCrnrW.events.onInputDown.add(function(){
        _this.boxonRightCrnrW.frame= 1;
        _this.boxonRightCrnrW.inputEnabled = false;  commonNavBarConversion.addWallet(_this.twoHundredFrame,_this.oneHundredFrame,_this.fiftyFrame,_this.twentyFrame,_this.tenFrame,_this.fiveFrame,_this.twoFrame,_this.oneFrame, _this.walletCountTopass,_this.enableWalletDrag);
        },_this);
        
  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
        
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.kill();
            _this.bg1.loadTexture('0Astreet4_sp', 0, false);
            //_this.bg1.tint = 0xadadad;
            
            _this.greyItem1 = false;
            _this.greyItem2 = true;
            _this.greyItem3 = true;
            _this.greyItem4 = true;
            _this.greyItem5 = true;
            _this.greyItem6 = true;
            _this.greyItem7 = true;
            _this.greyItem8 = true;
            _this.greyItem9 = true;
            commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
            
                _this.autoStand = _this.add.sprite(40,320,'autoAnim_sp');
            
                _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
                _this.nextArrow.inputEnabled = true;
                _this.nextArrow.input.useHandCursor = true;
                _this.nextArrow.events.onInputDown.add(function(){
                    _this.clickSound = _this.add.audio('ClickSound');
                    _this.clickSound.play();
                    _this.nextArrow.events.onInputDown.removeAll();
                    _this.nextArrow.destroy();
                    _this.startRideFromHere();
                },_this);
        },_this);
   
    },
    
    startRideFromHere:function()
    {
        
      _this.openListAutomatically = true;
      _this.greyItem1 = false;
      _this.greyItem2 = true;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
        _this.addNumberPad();
        //_this.VoiceNumber = 3;
        if(_this.autoRide1type == 'km')
            {
            _this.VoiceNumber = 3;
            }
        else 
            {
               _this.VoiceNumber = 2;
        
            }
        _this.getVoice(_this.VoiceNumber);
    },
    update:function(){
        
        
        
        if(_this.moveBgToleft)
        {
           _this.bg1.x -= 6;
           _this.bg2.x -= 6;
           if(_this.bg1.x == -960)
               {
                   _this.bg1.x = 960;
                   _this.bg3.x = 960;
                   _this.bg4.x = 1920;
                   _this.autoStandAnim.stop(10,null);
                   _this.slideComplete1();
                   _this.moveBgToleft = false;
                   _this.autoSound.stop();
               }
        }
        if(_this.moveBgToleft1)
        {
           _this.bg2.x -= 6;
           _this.bg3.x -= 6;
           if(_this.bg2.x == -960)
               {
                   _this.bg2.x = 960;
                   _this.bg4.x = 960;
                   _this.autoStandAnim.stop(10,null);
                   _this.slideComplete2();
                   _this.moveBgToleft1 = false;
                   _this.autoSound.stop();
               }
        }
        if(_this.moveBgToleft2)
        {
           _this.bg3.x -= 6;
           _this.bg4.x -= 6;
           if(_this.bg3.x == -960)
               {
                   _this.bg3.x = 960;
                   _this.autoStandAnim.stop(10,null);
                   _this.slideComplete3();
                   _this.moveBgToleft2 = false;
                   _this.autoSound.stop();
               }
        }
        if(_this.moveBgToRight2)
        {
           _this.bg1.x += 10;
           _this.bg2.x += 10;
           _this.bg3.x += 10;
           _this.bg4.x += 10;
           if(_this.bg1.x == 0)
               {
                   _this.bg1.x = 0;
                   _this.autoStandAnim.stop(10,null);
                   _this.slideComplete4();
                   _this.moveBgToRight2 = false;
                   _this.autoSound.stop();
               }
        }

    },
    completedPayment1:function()
    {
        
        _this.payment1completed = true;
        _this.payment2completed = false;
        _this.payment3completed = false;
        _this.payment4completed = false;
        _this.payment5completed = false;
        _this.payment6completed = false;
        _this.payment7completed = false;
        
        commonNavBarConversion.closeWalletAutoMatically();
        _this.VoiceNumber = 11;
        _this.getVoice(_this.VoiceNumber);
        _this.enableWalletDrag = false;
        _this.billMachine.destroy();
        _this.billMachineDisplayed = false;
        _this.receiptItemText.destroy();
        _this.receiptQuantText.destroy();
        _this.fullRateText.destroy();
        _this.itemRateText.destroy();
        _this.itemRateTextBig.destroy();
        
        _this.shopKeeper = _this.add.sprite(550,150,'shopKeeper_sp');
        _this.tween = _this.add.tween(_this.groupNotes);
        _this.tween.to({ x: 600,y:280 }, 1000, 'Linear', true, 0);
        _this.add.tween(_this.groupNotes.scale).to( { x:0.2,y:0.2 }, 1000, "Linear", true);
        _this.tween.onComplete.add(function(){
            _this.groupNotes.destroy();
            _this.shopKeeper.destroy();
            
            
            if(_this.item2type == 'kg')
            {
            _this.item2 = _this.convertToKm(_this.item2quantity);
                _this.bananaAns1 = _this.item2quantity;
                _this.inputBoxStandard = 1;
                _this.VoiceNumber = 5;
            }
        else 
            {
                _this.inputBoxStandard = 0;
                _this.VoiceNumber = 6;
                _this.item2 = _this.item2quantity;
                _this.bananaAns = _this.convertToKm(_this.item2quantity);
                if(_this.bananaAns1<1)
                    _this.bananaAns2 = _this.bananaAns1.toString().substring(1);
                else if(_this.bananaAns1==1.0)
                    _this.bananaAns2 = 1;
            }
        
        if(_this.item2quantity/750 == 1)
            {   
            _this.item2 = '3/4';
            _this.item2type = 'kg';
            _this.bananaAns1 = 750;
        }
        else if(_this.item2quantity[4]/500 == 1)
            {   
            _this.item2 = '1/2';
            _this.item2type = 'kg';
                _this.bananaAns2 = 500;
        }
        else if(_this.item2quantity[4]/250 == 1)
            {   
            _this.item2 = '1/4';
            _this.item2type = 'kg';
                _this.bananaAns1 = 250;
        }
        
        
        
       _this.bg2.loadTexture('commonBg', 0, false);
       _this.carrotToSell = _this.add.sprite(150,120,_this.itemArray2+'_sp');
            if(window.languageSelected == "English")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,180,'gm');
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,185,'gm');
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'kg');
                else if(_this.itemArray2 == "watermelon")
                    _this.textForItemList = _this.add.text(390,185,'kg');
                
                _this.textForItemList.fontSize = 40;
            }
        else if(window.languageSelected == "Hindi")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,190,'ग्रा');
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,195,'ग्रा');
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'कि.ग्रा');
                else if(_this.itemArray2 == "watermelon")
                    _this.textForItemList = _this.add.text(400,185,'कि.ग्रा');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Kannada")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,190,'ಗ್ರಾಂ');
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,195,'ಗ್ರಾಂ');
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'ಕೆಜಿ');
                else if(_this.itemArray2 == "watermelon")
                    _this.textForItemList = _this.add.text(400,185,'ಕೆಜಿ');
                
                _this.textForItemList.fontSize = 32;
            }
        else if(window.languageSelected == "Gujarati")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,190,'ગ્રા');
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,195,'ગ્રા');
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'કિગ્રા');
                else if(_this.itemArray2 == "watermelon")
                    _this.textForItemList = _this.add.text(400,185,'કિગ્રા');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Odiya")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,190,'ଗ୍ରାମ');
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,195,'ଗ୍ରାମ');
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'କି.ଗ୍ରା');
                else if(_this.itemArray2 == "watermelon")
                    _this.textForItemList = _this.add.text(400,185,'କି.ଗ୍ରା');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Tamil")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,190,'கி');
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,195,'கி');
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'கி.கி');
                else if(_this.itemArray2 == "pumpkin")
                    _this.textForItemList = _this.add.text(400,185,'கி.கி');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Marathi")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,190,'ग्रॅम');
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,195,'ग्रॅम');
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'किलो');
                else if(_this.itemArray2 == "watermelon")
                    _this.textForItemList = _this.add.text(400,185,'किलो');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Urdu")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,190,'گرام'); 
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,195,'گرام'); 
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'کلوگرام');
                else if(_this.itemArray2 == "watermelon")
                    _this.textForItemList = _this.add.text(400,185,'کلوگرام');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Telugu")
            {
                if(_this.itemArray2 == "apple")
                    _this.textForItemList = _this.add.text(390,190,'గ్రా');
                else if(_this.itemArray2 == "banana")
                    _this.textForItemList = _this.add.text(360,195,'గ్రా');
                else if(_this.itemArray2 == "pineapple")
                    _this.textForItemList = _this.add.text(370,195,'కి.గ్రా');
                else if(_this.itemArray2 == "watermelon")
                    _this.textForItemList = _this.add.text(400,185,'కి.గ్రా');
                

                _this.textForItemList.fontSize = 30;
            }
        _this.textForItemList.anchor.setTo(0.5);
        _this.textForItemList.font = 'myfont';
        _this.textForItemList.align = 'center';
        _this.textForItemList.fontWeight = 'bold';
        _this.textForItemList.angle = -10;
            
            //_this.bananaToSell = _this.add.sprite(150,120,'Banana_sp');
            _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
            _this.nextArrow.inputEnabled = true;
            _this.nextArrow.input.useHandCursor = true;
            _this.nextArrow.events.onInputDown.add(function(){
                _this.clickSound = _this.add.audio('ClickSound');
                _this.clickSound.play();
                _this.nextArrow.events.onInputDown.removeAll();
                _this.nextArrow.destroy();  
                _this.openListAutomatically = true;
                _this.greyItem1 = true;
                _this.greyItem2 = true;
                _this.greyItem3 = false;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
                //_this.inputBoxStandard = 1;
                _this.addNumberPad();
                //_this.VoiceNumber = 5;
            _this.getVoice(_this.VoiceNumber);
            },_this);
      },_this);
    },
    completedPayment2:function()
    {
        _this.payment1completed = false;
        _this.payment2completed = true;
        _this.payment3completed = false;
        _this.payment4completed = false;
        _this.payment5completed = false;
        _this.payment6completed = false;
        _this.payment7completed = false;
        
        commonNavBarConversion.closeWalletAutoMatically();
        _this.VoiceNumber = 11;
        _this.getVoice(_this.VoiceNumber);
        _this.enableWalletDrag = false;
        _this.billMachine.destroy();
        _this.billMachineDisplayed = false;
        _this.receiptItemText.destroy();
        _this.receiptQuantText.destroy();
        _this.fullRateText.destroy();
        _this.itemRateText.destroy();
        _this.itemRateTextBig.destroy();
        _this.shopKeeper = _this.add.sprite(550,150,'shopKeeper_sp');
        _this.tween = _this.add.tween(_this.groupNotes);
        _this.tween.to({ x: 600,y:280 }, 1000, 'Linear', true, 0);
        _this.add.tween(_this.groupNotes.scale).to( { x:0.2,y:0.2 }, 1000, "Linear", true);
        _this.tween.onComplete.add(function(){
            _this.shopKeeper.destroy();
            _this.groupNotes.destroy();
            _this.carrotToSell.visible = false;
            _this.openListAutomatically = false;
            _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
            _this.nextArrow.inputEnabled = true;
            _this.nextArrow.input.useHandCursor = true;
            _this.nextArrow.events.onInputDown.add(function(){
                _this.clickSound = _this.add.audio('ClickSound');
                 _this.clickSound.play();
                _this.nextArrow.events.onInputDown.removeAll();
                _this.nextArrow.destroy();
                _this.greyItem1 = true;
                _this.greyItem2 = true;
                _this.greyItem3 = true;
                _this.greyItem4 = false;
              _this.openListAutomatically = true;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
              _this.bg2.loadTexture('0Bmarket4_sp', 0, false);
              _this.autoStand = _this.add.sprite(40,320,'autoAnim_sp');
              //_this.inputBoxStandard = 3;
                
                
                if(_this.autoRide2type == 'km')
            {
            _this.autoRide2 = _this.convertToKm(_this.randomNumberForAuto[1]);
                _this.autoRide2Ans1 = _this.randomNumberForAuto[1];
                _this.inputBoxStandard = 2;
            }
        else 
            {
                _this.inputBoxStandard = 3;
                _this.autoRide2 = _this.randomNumberForAuto[1];
                _this.autoRide2Ans1 = _this.convertToKm(_this.randomNumberForAuto[1]);
                if(_this.autoRide2Ans1<1)
                    _this.autoRide2Ans2 = _this.autoRide2Ans1.toString().substring(1);
                else if(_this.autoRide2Ans1==1.0)
                    _this.autoRide2Ans2 = 1;
            }
        
        if(_this.randomNumberForAuto[1]/750 == 1)
        {   
            _this.autoRide2 = '3/4';
            _this.autoRide2type = 'km';
            _this.autoRide2Ans1 = 750;
        }
        else if(_this.randomNumberForAuto[1]/500 == 1)
           {   
            _this.autoRide2 = '1/2';
            _this.autoRide2type = 'km';
               _this.autoRide2Ans1 = 500;
        }
        else if(_this.randomNumberForAuto[1]/250 == 1)
            {   
            _this.autoRide2 = '1/4';
            _this.autoRide2type = 'km';
                _this.autoRide2Ans1 = 250;
        }
              _this.addNumberPad();
                
                if(_this.autoRide2type == 'km')
            {
            _this.VoiceNumber = 3;
            }
        else 
            {
               _this.VoiceNumber = 2;
        
            }
                //_this.VoiceNumber = 2;
            _this.getVoice(_this.VoiceNumber);
            },_this);
        },_this);
    },
    completedPayment3:function()
    {
        _this.payment1completed = false;
        _this.payment2completed = false;
        _this.payment3completed = true;
        _this.payment4completed = false;
        _this.payment5completed = false;
        _this.payment6completed = false;
        _this.payment7completed = false;
        
        commonNavBarConversion.closeWalletAutoMatically();
        
        _this.enableWalletDrag = false;
        _this.billMachine.destroy();
        _this.billMachineDisplayed = false;
        _this.receiptItemText.destroy();
        _this.receiptQuantText.destroy();
        _this.fullRateText.destroy();
        _this.itemRateText.destroy();
        _this.itemRateTextBig.destroy();
        
        _this.shopKeeper = _this.add.sprite(550,150,'shopKeeper_sp');
        _this.tween = _this.add.tween(_this.groupNotes);
        _this.tween.to({ x: 600,y:280 }, 1000, 'Linear', true, 0);
        _this.add.tween(_this.groupNotes.scale).to( { x:0.2,y:0.2 }, 1000, "Linear", true);
        _this.tween.onComplete.add(function(){
            
            _this.groupNotes.destroy();
            _this.carrotToSell.visible = false;
            _this.openListAutomatically = false;
            
            if((_this.addedAmount-_this.item3Rate)!=0)
            {
                ////alert("here");
                _this.VoiceNumber = 7;
                _this.getVoice(_this.VoiceNumber);
                
                console.log(_this.addedAmount-_this.item3Rate);
                _this.changeAmount = _this.generateAmount(_this.addedAmount-_this.item3Rate);
                _this.addChangeToWallet(_this.changeAmount);
                _this.notesChangeGroup.x=600;
                _this.notesChangeGroup.y=280;
                _this.notesChangeGroup.scale.setTo(0.2,0.2);
                _this.changeNoteCount = 0;
                _this.tween = _this.add.tween(_this.notesChangeGroup);
                _this.tween.to({ x: 30,y:200 }, 1000, 'Linear', true, 0);
                _this.add.tween(_this.notesChangeGroup.scale).to( { x:1,y:1 }, 1000, "Linear", true);
                
                 _this.tween.onComplete.add(function(){
                _this.shopKeeper.destroy();
                     
                     for(var i=0;i<_this.notesChangeGroup.length;i++)
                    {
                        _this.changeNoteCount++;
                        _this.notesChangeGroup.getAt(i).inputEnabled = true;
                        _this.notesChangeGroup.getAt(i).events.onInputDown.add(function(target){
                            if(_this.enableChangeDrag == true)
                            {
                                commonNavBarConversion.addNotesToWallet(target);
                            }
                            else
                            {
                                //Do nothing
                            }
                        
                        },_this);  
                    }
   
                
            },_this);
            }
            else
                {
                    //_this.groupNotes.destroy();
            _this.shopKeeper.destroy();
                    
                    _this.changeAddedToWallet1();
                }

            /*_this.changeSprite1 = _this.add.sprite(600, 280, '1rsNote_sp');
            _this.changeSprite1.scale.setTo(0.2,0.2);
            _this.changeSprite1.name = '1rsNote_sp';
            _this.tween = _this.add.tween(_this.changeSprite1);
            _this.tween.to({ x: 30,y:340 }, 1000, 'Linear', true, 0);
            _this.add.tween(_this.changeSprite1.scale).to( { x:1,y:1 }, 1000, "Linear", true);
            _this.tween.onComplete.add(function(){
                _this.shopKeeper.destroy();
                _this.changeSprite1.inputEnabled = true;
                _this.changeSprite1.events.onInputDown.add(function(target){
                    if(_this.enableChangeDrag == true)
                    {
                        commonNavBarConversion.addNotesToWallet(target);
                    }
                    else
                    {
                        //Do nothing
                    }
                },_this);  
            },_this);  */
        },_this);  
    },
    completedPayment4:function()
    {
        _this.payment1completed = false;
        _this.payment2completed = false;
        _this.payment3completed = false;
        _this.payment4completed = true;
        _this.payment5completed = false;
        _this.payment6completed = false;
        _this.payment7completed = false;
        
        commonNavBarConversion.closeWalletAutoMatically();
        
        _this.enableWalletDrag = false;
        _this.billMachine.destroy();
        _this.billMachineDisplayed = false;
        _this.receiptItemText.destroy();
        _this.receiptQuantText.destroy();
        _this.fullRateText.destroy();
        _this.itemRateText.destroy();
        _this.itemRateTextBig.destroy();
        
        _this.shopKeeper = _this.add.sprite(550,150,'shopKeeper_sp');
        _this.tween = _this.add.tween(_this.groupNotes);
        _this.tween.to({ x: 600,y:280 }, 1000, 'Linear', true, 0);
        _this.add.tween(_this.groupNotes.scale).to( { x:0.2,y:0.2 }, 1000, "Linear", true);
        _this.tween.onComplete.add(function(){
            _this.groupNotes.destroy();
            _this.carrotToSell.visible = false;
            _this.openListAutomatically = false;
            
            if((_this.addedAmount-_this.item4Rate)!=0)
            {
                ////alert("here");
                _this.VoiceNumber = 7;
        _this.getVoice(_this.VoiceNumber);
                console.log(_this.addedAmount-_this.item4Rate);
                _this.changeAmount = _this.generateAmount(_this.addedAmount-_this.item4Rate);
                _this.addChangeToWallet(_this.changeAmount);
                _this.notesChangeGroup.x=600;
                _this.notesChangeGroup.y=280;
                _this.notesChangeGroup.scale.setTo(0.2,0.2);
                _this.changeNoteCount = 0;
                _this.tween = _this.add.tween(_this.notesChangeGroup);
                _this.tween.to({ x: 30,y:200 }, 1000, 'Linear', true, 0);
                _this.add.tween(_this.notesChangeGroup.scale).to( { x:1,y:1 }, 1000, "Linear", true);
                commonNavBarConversion.notesDestroy = _this.notesChangeGroup;
                
                 _this.tween.onComplete.add(function(){
                _this.shopKeeper.destroy();
                     
                     for(var i=0;i<_this.notesChangeGroup.length;i++)
                    {
                        _this.changeNoteCount++;
                        _this.notesChangeGroup.getAt(i).inputEnabled = true;
                        _this.notesChangeGroup.getAt(i).events.onInputDown.add(function(target){
                            if(_this.enableChangeDrag == true)
                            {
                                commonNavBarConversion.addNotesToWallet(target);
                            }
                            else
                            {
                                //Do nothing
                            }
                        
                        },_this);  
                    }
   
                
            },_this);
            }

            /*_this.changeSprite1 = _this.add.sprite(600, 280, '5rsNote_sp');
            _this.changeSprite1.scale.setTo(0.2,0.2);
            _this.changeSprite1.name = '5rsNote_sp';
            _this.tween = _this.add.tween(_this.changeSprite1);
            _this.tween.to({ x: 30,y:340 }, 1000, 'Linear', true, 0);
            _this.add.tween(_this.changeSprite1.scale).to( { x:1,y:1 }, 1000, "Linear", true);
            _this.tween.onComplete.add(function(){
            _this.shopKeeper.destroy();
            _this.changeSprite1.inputEnabled = true;
            _this.changeSprite1.events.onInputDown.add(function(target){
                    if(_this.enableChangeDrag == true)
                    {
                        commonNavBarConversion.addNotesToWallet(target);
                    }
                    else
                    {
                        //Do nothing
                    }
                },_this);  
            },_this);  
            */
        },_this);  
    },
    completedPayment7:function()
    {
        _this.payment1completed = false;
        _this.payment2completed = false;
        _this.payment3completed = false;
        _this.payment4completed = false;
        _this.payment5completed = false;
        _this.payment6completed = false;
        _this.payment7completed = true;
        
        commonNavBarConversion.closeWalletAutoMatically();
        _this.enableWalletDrag = false;
        //_this.billMachine.destroy();
        _this.billMachineDisplayed = false;
        _this.receiptItemText.destroy();
        _this.receiptQuantText.destroy();
        _this.fullRateText.destroy();
        _this.itemRateText.destroy();
        _this.itemRateTextBig.destroy();
        
        
        
        //_this.shopKeeper = _this.add.sprite(550,150,'shopKeeper_sp');
        _this.tween = _this.add.tween(_this.groupNotes);
        _this.tween.to({ x: 600,y:280 }, 1000, 'Linear', true, 0);
        _this.add.tween(_this.groupNotes.scale).to( { x:0.2,y:0.2 }, 1000, "Linear", true);
        _this.tween.onComplete.add(function(){
            _this.groupNotes.destroy();
            _this.carrotToSell.visible = false;
            _this.openListAutomatically = false;
            
            
            if((_this.addedAmount-_this.autoRate)!=0)
            {
                _this.change1added = false;
                _this.change2added = false;
                _this.change3added = true;
                //alert("here");
                _this.VoiceNumber = 7;
                _this.getVoice(_this.VoiceNumber);
                
                console.log(_this.addedAmount-_this.autoRate);
                _this.changeAmount = _this.generateAmount(_this.addedAmount-_this.autoRate);
                _this.addChangeToWallet(_this.changeAmount);
                _this.notesChangeGroup.x=600;
                _this.notesChangeGroup.y=280;
                _this.notesChangeGroup.scale.setTo(0.2,0.2);
                _this.changeNoteCount = 0;
                _this.tween = _this.add.tween(_this.notesChangeGroup);
                _this.tween.to({ x: 30,y:200 }, 1000, 'Linear', true, 0);
                _this.add.tween(_this.notesChangeGroup.scale).to( { x:1,y:1 }, 1000, "Linear", true);
                
                 _this.tween.onComplete.add(function(){
                //_this.shopKeeper.destroy();
                     
                     for(var i=0;i<_this.notesChangeGroup.length;i++)
                    {
                        _this.changeNoteCount++;
                        _this.notesChangeGroup.getAt(i).inputEnabled = true;
                        _this.notesChangeGroup.getAt(i).events.onInputDown.add(function(target){
                            if(_this.enableChangeDrag == true)
                            {
                                commonNavBarConversion.addNotesToWallet(target);
                            }
                            else
                            {
                                //Do nothing
                            }
                        
                        },_this);  
                    }
   
                
            },_this);
            }
            else
                {
                    _this.gotoCelebrationScene();
                }
   
                
            },_this);
    },
    completedPayment6:function()
    {
        _this.payment1completed = false;
        _this.payment2completed = false;
        _this.payment3completed = false;
        _this.payment4completed = false;
        _this.payment5completed = false;
        _this.payment6completed = true;
        _this.payment7completed = false;
        
        
        
        commonNavBarConversion.closeWalletAutoMatically();
        _this.enableWalletDrag = false;
        _this.billMachine.destroy();
        _this.billMachineDisplayed = false;
        _this.receiptItemText.destroy();
        _this.receiptQuantText.destroy();
        _this.fullRateText.destroy();
        _this.itemRateText.destroy();
        _this.itemRateTextBig.destroy();
        
        _this.shopKeeper = _this.add.sprite(550,150,'shopKeeper_sp');
        _this.tween = _this.add.tween(_this.groupNotes);
        _this.tween.to({ x: 600,y:280 }, 1000, 'Linear', true, 0);
        _this.add.tween(_this.groupNotes.scale).to( { x:0.2,y:0.2 }, 1000, "Linear", true);
        _this.tween.onComplete.add(function(){
            _this.groupNotes.destroy();
            _this.carrotToSell.visible = false;
            _this.openListAutomatically = false;
            
            if((_this.addedAmount-_this.item5Rate)!=0)
            {
                //alert("here");
                _this.VoiceNumber = 7;
        _this.getVoice(_this.VoiceNumber);
                
                console.log(_this.addedAmount-_this.item5Rate);
                _this.changeAmount = _this.generateAmount(_this.addedAmount-_this.item5Rate);
                _this.addChangeToWallet(_this.changeAmount);
                _this.notesChangeGroup.x=600;
                _this.notesChangeGroup.y=280;
                _this.notesChangeGroup.scale.setTo(0.2,0.2);
                _this.changeNoteCount = 0;
                _this.tween = _this.add.tween(_this.notesChangeGroup);
                _this.tween.to({ x: 30,y:200 }, 1000, 'Linear', true, 0);
                _this.add.tween(_this.notesChangeGroup.scale).to( { x:1,y:1 }, 1000, "Linear", true);
                
                 _this.tween.onComplete.add(function(){
                _this.shopKeeper.destroy();
                     
                     for(var i=0;i<_this.notesChangeGroup.length;i++)
                    {
                        _this.changeNoteCount++;
                        _this.notesChangeGroup.getAt(i).inputEnabled = true;
                        _this.notesChangeGroup.getAt(i).events.onInputDown.add(function(target){
                            if(_this.enableChangeDrag == true)
                            {
                                commonNavBarConversion.addNotesToWallet(target);
                            }
                            else
                            {
                                //Do nothing
                            }
                        
                        },_this);  
                    }
   
                
            },_this);
            }
            else
                {
                    _this.shopKeeper.destroy();    
                    _this.notesChangeGroup.destroy();

                    _this.enableWalletDrag = false;

                        if(_this.autoRide4type == 'km')
                        {
                        _this.autoRide4 = _this.convertToKm(_this.randomNumberForAuto[3]);
                            _this.autoRide4Ans1 = _this.randomNumberForAuto[3];
                            _this.inputBoxStandard = 2;
                        }
                    else 
                        {
                            _this.inputBoxStandard = 3;
                            _this.autoRide4 = _this.randomNumberForAuto[3];
                            _this.autoRide4Ans1 = _this.convertToKm(_this.randomNumberForAuto[3]);
                            if(_this.autoRide4Ans1<1)
                                _this.autoRide4Ans2 = _this.autoRide4Ans1.toString().substring(1);
                            else if(_this.autoRide4Ans1==1.0)
                                _this.autoRide4Ans2 = 1;
                        }

                    if(_this.randomNumberForAuto[3]/750 == 1)
                    {   
                        _this.autoRide4 = '3/4';
                        _this.autoRide4type = 'km';
                        _this.autoRide4Ans1 = 750;
                    }
                    else if(_this.randomNumberForAuto[3]/500 == 1)
                       {   
                        _this.autoRide4 = '1/2';
                        _this.autoRide4type = 'km';
                           _this.autoRide4Ans1 = 500;
                    }
                    else if(_this.randomNumberForAuto[3]/250 == 1)
                        {   
                        _this.autoRide4 = '1/4';
                        _this.autoRide4type = 'km';
                            _this.autoRide4Ans1 = 250;
                    }

                    _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
                    _this.nextArrow.inputEnabled = true;
                    _this.nextArrow.input.useHandCursor = true;
                    _this.nextArrow.events.onInputDown.add(function(){
                        _this.clickSound = _this.add.audio('ClickSound');
                        _this.clickSound.play();
                        _this.nextArrow.events.onInputDown.removeAll();
                        _this.nextArrow.destroy();
                        _this.greyItem8 = true;
                        _this.greyItem9 = false;
                      _this.openListAutomatically = true;
                       _this.autoStand = _this.add.sprite(880,320,'autoAnim_sp');  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
                        _this.bg4.loadTexture('0Bmarket3_sp', 0, false);
                        _this.autoStand.scale.x *= -1;
                       //_this.inputBoxStandard = 2;
                       _this.addNumberPad();
                        
                        if(_this.autoRide4type == 'km')
                        {
                        _this.VoiceNumber = 3;
                        }
                    else 
                        {
                           _this.VoiceNumber = 2;

                        }
                       //_this.VoiceNumber = 3;
                       _this.getVoice(_this.VoiceNumber);

                    },_this);
                    
                }
   
                
            },_this);
        
        /*_this.shopKeeper = _this.add.sprite(550,150,'shopKeeper_sp');
        _this.tween = _this.add.tween(_this.notesChangeGroup);
        _this.tween.to({ x: 600,y:280 }, 1000, 'Linear', true, 0);
        _this.add.tween(_this.notesChangeGroup.scale).to( { x:0.2,y:0.2 }, 1000, "Linear", true);
        
        _this.tween7 = _this.add.tween(_this.notesChangeGroup);
        _this.tween7.to({ x: 600,y:280 }, 1000, 'Linear', true, 0);
        _this.add.tween(_this.notesChangeGroup.scale).to( { x:0.2,y:0.2 }, 1000, "Linear", true);
        
        _this.tween.onComplete.add(function(){
        _this.shopKeeper.destroy();    
        _this.notesChangeGroup.destroy();
        
        _this.enableWalletDrag = false;
            
            if(_this.autoRide4type == 'km')
            {
            _this.autoRide4 = _this.convertToKm(_this.randomNumberForAuto[3]);
                _this.autoRide4Ans1 = _this.randomNumberForAuto[3];
                _this.inputBoxStandard = 2;
            }
        else 
            {
                _this.inputBoxStandard = 3;
                _this.autoRide4 = _this.randomNumberForAuto[3];
                _this.autoRide4Ans1 = _this.convertToKm(_this.randomNumberForAuto[3]);
                if(_this.autoRide4Ans1<1)
                    _this.autoRide4Ans2 = _this.autoRide4Ans1.toString().substring(1);
                else if(_this.autoRide4Ans1==1.0)
                    _this.autoRide4Ans2 = 1;
            }
        
        if(_this.randomNumberForAuto[3]/750 == 1)
        {   
            _this.autoRide4 = '3/4';
            _this.autoRide4type = 'km';
            _this.autoRide4Ans1 = 750;
        }
        else if(_this.randomNumberForAuto[3]/500 == 1)
           {   
            _this.autoRide4 = '1/2';
            _this.autoRide4type = 'km';
               _this.autoRide4Ans1 = 500;
        }
        else if(_this.randomNumberForAuto[3]/250 == 1)
            {   
            _this.autoRide4 = '1/4';
            _this.autoRide4type = 'km';
                _this.autoRide4Ans1 = 250;
        }
        
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();
            _this.greyItem8 = true;
            _this.greyItem9 = false;
          _this.openListAutomatically = true;
           _this.autoStand = _this.add.sprite(880,320,'autoAnim_sp');  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
            _this.bg4.loadTexture('0Bmarket3_sp', 0, false);
            _this.autoStand.scale.x *= -1;
           //_this.inputBoxStandard = 2;
           _this.addNumberPad();
           _this.VoiceNumber = 3;
           _this.getVoice(_this.VoiceNumber);
            
        },_this);
        },_this);*/
    },
    completedPayment5:function()
    {
        _this.payment1completed = false;
        _this.payment2completed = false;
        _this.payment3completed = false;
        _this.payment4completed = false;
        _this.payment5completed = true;
        _this.payment6completed = false;
        _this.payment7completed = false;
        
        commonNavBarConversion.closeWalletAutoMatically();
        _this.exchangeCheck = true;
        _this.VoiceNumber = 10;
        _this.getVoice(_this.VoiceNumber);
        _this.enableWalletDrag = false;
        _this.billMachine.destroy();
        _this.billMachineDisplayed = false;
        _this.receiptItemText.destroy();
        _this.receiptQuantText.destroy();
        _this.fullRateText.destroy();
        _this.itemRateText.destroy();
        _this.itemRateTextBig.destroy();
        
        //_this.sprite21.destroy();
        _this.carrotToSell.visible = false;
        _this.openListAutomatically = false;
        _this.mmBg = _this.add.sprite(0, 45, 'mmBg_sp');
        _this.mmBg.visible = false;
         _this.groupNotes.destroy();
        if(_this.random100or200 == '100')
            {
                _this.changeSprite1 = _this.add.sprite(30, 340, '100rsNote_sp');
                _this.changeSprite1.name = '100rsNote_sp';
            }
        else
            {
                _this.changeSprite1 = _this.add.sprite(30, 340, '200rsNote_sp');
                _this.changeSprite1.name = '200rsNote_sp';
            }
        
        //_this.changeSprite1 = _this.add.sprite(30, 340, '50rsNote_sp');
        //_this.changeSprite1.name = '50rsNote_sp';
       
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.nextArrow.events.onInputDown.removeAll();
             _this.nextArrow.destroy();
             _this.gotoMoneyMachine();
        },_this);  
    },
    completedPayment5Copy:function()
    {
        //alert('In Copies');
        commonNavBarConversion.closeWalletAutoMatically();
        _this.VoiceNumber = 10;
        _this.getVoice(_this.VoiceNumber);
        _this.enableWalletDrag = false;
        _this.billMachine.destroy();
        _this.billMachineDisplayed = false;
        _this.receiptItemText.destroy();
        _this.receiptQuantText.destroy();
        _this.fullRateText.destroy();
        _this.itemRateText.destroy();
        _this.itemRateTextBig.destroy();
        
        //_this.sprite21.destroy();
        _this.carrotToSell.visible = false;
        _this.openListAutomatically = false;
         _this.mmBg = _this.add.sprite(0, 45, 'mmBg_sp');
        _this.mmBg.visible = false;
         _this.sprite22.alpha = 0;
         _this.sprite23.alpha = 0;
        _this.changeSprite2 = _this.add.sprite(30, 340, '50rsNote_sp');
        _this.changeSprite2.name = '50rsNote_sp'; 
        _this.changeSprite3 = _this.add.sprite(30, 345, '50rsNote_sp');
        _this.changeSprite3.name = '50rsNote_sp';
       
        //_this.changeSprite1 = _this.add.sprite(30, 340, '50rsNote_sp');
        //_this.changeSprite1.name = '50rsNote_sp';
       
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();
            _this.gotoMoneyMachine();
        },_this);
    },
    gotoMoneyMachine:function()
    {
       _this.mmBg.visible = true;
       
        _this.changeSprite1.x = 730;
        _this.changeSprite1.y = 385;
        _this.changeSprite1.visible = true;
          
        _this.twoHundredFrameTemp = _this.twoHundredFrame;
        _this.oneHundredFrameTemp = _this.oneHundredFrame;
        _this.fiftyFrameTemp = _this.fiftyFrame;
        _this.twentyFrameTemp = _this.twentyFrame;
        _this.tenFrameTemp =  _this.tenFrame;
        _this.fiveFrameTemp = _this.fiveFrame;
        _this.twoFrameTemp = _this.twoFrame;
        _this.oneFrameTemp = _this.oneFrame;
        _this.moneyMachine = _this.add.sprite(50,70,'moneyMachine_sp');
        _this.mmLever = _this.add.sprite(520,100,'mmPull_sp');
        _this.minusSymbol = _this.add.sprite(720,220,'minusSymbol_sp');
        _this.resetBtn = _this.add.sprite(780,80,'resetBtn_sp');
        _this.dropNoteSpot = _this.add.sprite(105,100,'dropNoteSpot_sp');
        _this.dropNoteAnim =  _this.dropNoteSpot.animations.add('auto');
		_this.dropNoteAnim.play(10,true);
        
        _this.changeSprite1.inputEnabled = true;
        
        _this.graphicsMm = _this.add.graphics(100, 100);
		_this.graphicsMm.lineStyle(1, 0xFFFFFF, 0.8);
		_this.graphicsMm.beginFill(0xFF700B, 1);
		_this.graphicsMm.drawRect(0,0,250,50);		
		_this.graphicsMm.boundsPadding = 0;
        _this.graphicsMm.alpha =0;
        //_this.addNotesToMoneyMachine();//*** ************ ***** ****** ******* **** remove after
       
        _this.changeSprite1.events.onInputDown.add(function(target){
            _this.vx = target.x;   
            _this.vy = target.y;
            target.bringToTop();
            target.input.enableDrag(true);
            target.events.onDragStart.add(_this.dragMMNotes,_this)
        },_this);
    },
    dragMMNotes:function(target)
    {
        target.events.onDragStop.add(function(){
            console.log(target.name);
            if(_this.checkOverlap(target,_this.graphicsMm))
                {
                    if(target.name == '200rsNote_sp')
                        {
                            _this.dropNoteAnim.stop(null,true);
                            _this.dropNoteSpot.frame = 0;
                            target.events.onDragStop.removeAll();
                            _this.changeSprite1.visible = false;
                            target.x = _this.vx;   
                            target.y = _this.vy;
                            _this.addNotesToMoneyMachine();
                        }
                        else if(target.name == '100rsNote_sp')
                        {
                            _this.dropNoteAnim.stop(null,true);
                            _this.dropNoteSpot.frame = 0;
                            target.events.onDragStop.removeAll();
                            _this.changeSprite1.visible = false;
                            target.x = _this.vx;   
                            target.y = _this.vy;
                            _this.addNotesToMoneyMachine();
                        }
                    else
                        {
                            _this.count1++;
                            target.events.onDragStop.removeAll();
                            target.x = _this.vx;   
                            target.y = _this.vy;
                            target.visible = false;
                            if(_this.count1 == 2)
                                {
                                    _this.count1 = 0;
                                    _this.dropNoteAnim.stop(null,true);
                                    _this.dropNoteSpot.frame = 0;
                                    _this.addNotesToMoneyMachine();
                                }
                        }
                }
            else
                {
                    target.x = _this.vx;   
                    target.y = _this.vy;
                }
        },_this);
    },
    addNotesToMoneyMachine:function()
    {
        _this.VoiceNumber = 14;
        _this.getVoice(_this.VoiceNumber);
        
        _this.mm200rs = _this.add.sprite(95,195,'mm200rs_sp');
        _this.mm200rs.name = 'mm200rs_sp';
        _this.mm200rs.inputEnabled = true;
        _this.mm200rs.events.onInputDown.add(this.exchangeNotes, this);
        _this.mm100rs = _this.add.sprite(95,265,'mm100rs_sp');
        _this.mm100rs.name = 'mm100rs_sp';
        _this.mm100rs.inputEnabled = true;
        _this.mm100rs.value = 100;
        _this.mm100rs.events.onInputDown.add(this.exchangeNotes, this);
        _this.mm50rs = _this.add.sprite(95,335,'mm50rs_sp');
        _this.mm50rs.name = 'mm50rs_sp';
        _this.mm50rs.inputEnabled = true;
        _this.mm50rs.value = 50;
        _this.mm50rs.events.onInputDown.add(this.exchangeNotes, this);
        _this.mm20rs = _this.add.sprite(95,405,'mm20rs_sp');
        _this.mm20rs.name = 'mm20rs_sp';
        _this.mm20rs.inputEnabled = true;
        _this.mm20rs.value = 20;
        _this.mm20rs.events.onInputDown.add(this.exchangeNotes, this);
        
        _this.mm200rsL = _this.add.sprite(207,218,'mmCount_sp');
        _this.mm100rsL = _this.add.sprite(206,288,'mmCount_sp');
        _this.mm50rsL = _this.add.sprite(206,358,'mmCount_sp');
        _this.mm20rsL = _this.add.sprite(207,428,'mmCount_sp');
        
        _this.mm10rs = _this.add.sprite(230,195,'mm10rs_sp');
        _this.mm10rs.name = 'mm10rs_sp';
        _this.mm10rs.inputEnabled = true;
        _this.mm10rs.value = 10;
        _this.mm10rs.events.onInputDown.add(this.exchangeNotes, this);
        _this.mm5rs = _this.add.sprite(230,265,'mm5rs_sp');
        _this.mm5rs.name = 'mm5rs_sp';
        _this.mm5rs.inputEnabled = true;
        _this.mm5rs.value = 5;
        _this.mm5rs.events.onInputDown.add(this.exchangeNotes, this);
        _this.mm2rs = _this.add.sprite(230,335,'mm2rs_sp');
        _this.mm2rs.name = 'mm2rs_sp';
        _this.mm2rs.inputEnabled = true;
        _this.mm2rs.value = 2;
        _this.mm2rs.events.onInputDown.add(this.exchangeNotes, this);
        _this.mm1rs = _this.add.sprite(230,405,'mm1rs_sp');
        _this.mm1rs.name = 'mm1rs_sp';
        _this.mm1rs.inputEnabled = true;
        _this.mm1rs.value = 1;
        _this.mm1rs.events.onInputDown.add(this.exchangeNotes, this);
        
        _this.mm10rsR = _this.add.sprite(343,218,'mmCount_sp');
        _this.mm5rsR = _this.add.sprite(342,288,'mmCount_sp');
        _this.mm2rsR = _this.add.sprite(343,358,'mmCount_sp');
        _this.mm1rsR = _this.add.sprite(343,428,'mmCount_sp');
        
       
        _this.upperNum1 = _this.add.sprite(755,188,'numberVSmall');
        _this.upperNum2 = _this.add.sprite(795,188,'numberVSmall');
        _this.upperNum3 = _this.add.sprite(835,188,'numberVSmall');
        _this.lowerNum1 = _this.add.sprite(755,225,'numberVSmall');
        _this.lowerNum2 = _this.add.sprite(795,225,'numberVSmall');
        _this.lowerNum3 = _this.add.sprite(835,225,'numberVSmall');
        
        _this.resultNum1 = _this.add.sprite(755,278,'numberVSmall');
        _this.resultNum2 = _this.add.sprite(795,278,'numberVSmall');
        _this.resultNum3 = _this.add.sprite(835,278,'numberVSmall');
        
        if(_this.random100or200 == '100')
            _this.upperNum1.frame = 1;
        else
            _this.upperNum1.frame = 2;
        
        _this.mmLever.inputEnabled = true;
        _this.mmLever.events.onInputDown.add(this.leverDownToDrop, this);
        
        _this.resetBtn.inputEnabled = true;
        _this.resetBtn.events.onInputDown.add(this.resetMoneyMachine, this);
        
        if(_this.handShow == null)
            {
                _this.handShow = _this.add.sprite(150, 200, 'hand_sp');
                _this.tween = _this.add.tween(_this.handShow);
                _this.tween.to({ x:180,y:300  }, 1000, 'Linear', true, 0);     //657
                 _this.tween.onComplete.add(function(){
                     _this.tween = _this.add.tween(_this.handShow);
                     _this.tween.to({ x:250,y:300  }, 1000, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.tween = _this.add.tween(_this.handShow);
                         _this.tween.to({ x:180,y:350  }, 1000, 'Linear', true, 0);
                         _this.tween.onComplete.add(function(){
                             _this.tween = _this.add.tween(_this.handShow);
                             _this.tween.to({ x:530,y:120  }, 1000, 'Linear', true, 0);
                             _this.tween.onComplete.add(function(){
                                 _this.time.events.add(500, function(){
                                     _this.handShow.destroy();
                                 },_this);
                             },_this);
                         },_this);
                     },_this);
                 },_this);
            }
    },
   
    exchangeNotes:function(target)
    {
        if(_this.random100or200 == '100')
            _this.v = 100;
        else
            _this.v = 200;
        if((_this.notesValue <= _this.v))
          {
              
              if(target.name == 'mm100rs_sp'  && _this.random100or200 != '100')
               {

                    if(_this.oneHundredFrameTemp<1)
                        {
                            _this.notesValue += _this.mm100rs.value;
                            if(_this.notesValue<=_this.v)
                                {
                                    target.frame = 1;
                                    _this.mm100rsL.frame++;
                                    _this.oneHundredFrameTemp++;
                                    _this.updateTextValues(_this.notesValue);
                                    if(_this.mm100rsL.frame == 2)
                                        {
                                            
                                            _this.mmLever.inputEnabled = false;
                                        }
                                }
                            else
                                {
                                    _this.notesValue -= _this.mm100rs.value;
                                }
                        }
                }
            if(target.name == 'mm50rs_sp')
               {

                    if(_this.fiftyFrameTemp<1)
                        {
                            _this.notesValue += _this.mm50rs.value;
                            if(_this.notesValue<=_this.v)
                                {
                                    target.frame = 1;
                                    _this.mm50rsL.frame++;
                                    _this.fiftyFrameTemp++;
                                    _this.updateTextValues(_this.notesValue);
                                    if(_this.mm50rsL.frame >= 2)
                                        {
                                            
                                            _this.mmLever.inputEnabled = false;
                                        }
                                }
                            else
                                {
                                    _this.notesValue -= _this.mm50rs.value;
                                }
                        }
                }
              if(target.name == 'mm20rs_sp')
               {

                    if(_this.twentyFrameTemp<3)
                        {
                            _this.notesValue += _this.mm20rs.value;
                            if(_this.notesValue<=_this.v)
                                {
                                    target.frame = 1;
                                    _this.mm20rsL.frame++;
                                    _this.twentyFrameTemp++;
                                    _this.updateTextValues(_this.notesValue);
                                }
                            else
                                {
                                    _this.notesValue -= _this.mm20rs.value;
                                }
                        }
                }
              if(target.name == 'mm10rs_sp')
               {

                    if(_this.tenFrameTemp<4)
                        {
                            _this.notesValue += _this.mm10rs.value;
                            if(_this.notesValue<=_this.v)
                                {
                                    target.frame = 1;
                                    _this.mm10rsR.frame++;
                                    _this.tenFrameTemp++;
                                    _this.updateTextValues(_this.notesValue);
                                }
                            else
                                {
                                    _this.notesValue -= _this.mm10rs.value;
                                }
                        }
                }
              if(target.name == 'mm5rs_sp')
               {

                    if(_this.fiveFrameTemp<5)
                        {
                            _this.notesValue += _this.mm5rs.value;
                            if(_this.notesValue<=_this.v)
                                {
                                    target.frame = 1;
                                    _this.mm5rsR.frame++;
                                    _this.fiveFrameTemp++;
                                    _this.updateTextValues(_this.notesValue);
                                }
                            else
                                {
                                    _this.notesValue -= _this.mm5rs.value;
                                }
                        }
                }
              if(target.name == 'mm2rs_sp')
               {

                    if(_this.twoFrameTemp<5)
                        {
                            _this.notesValue += _this.mm2rs.value;
                            if(_this.notesValue<=_this.v)
                                {
                                    target.frame = 1;
                                    _this.mm2rsR.frame++;
                                    _this.twoFrameTemp++;
                                    _this.updateTextValues(_this.notesValue);
                                }
                            else
                                {
                                    _this.notesValue -= _this.mm2rs.value;
                                }
                        }
                }
              if(target.name == 'mm1rs_sp')
               {

                    if(_this.oneFrameTemp<5)
                        {
                            _this.notesValue += _this.mm1rs.value;
                            if(_this.notesValue<=_this.v)
                                {
                                    target.frame = 1;
                                    _this.mm1rsR.frame++;
                                    _this.oneFrameTemp++;
                                    _this.updateTextValues(_this.notesValue);
                                }
                            else{
                                        _this.notesValue -= _this.mm1rs.value;
                                }
                        }
                }
              _this.mmLeverAnim =  _this.mmLever.animations.add('auto',[0,1]);
		      _this.mmLeverAnim.play(10,true);
         }
        else{
            
            _this.mmLever.inputEnabled = false;
        }
        
    },
    updateTextValues:function(notesValue)
    {
        var num = notesValue;
        var digits = num.toString().split('');
        var realDigits = digits.map(Number)
        console.log(realDigits,notesValue);
        var temp = 0;
        if(_this.random100or200 == '100')
            temp = 100 - notesValue;
        else
            temp = 200 - notesValue;
        var temp1 = temp.toString().split('');
        var temp2 = temp1.map(Number);
        console.log(temp2);
        
        
       
            
        if(realDigits.length == 3)
            {
               /*_this.lowerNum1.frame = 1; 
               _this.resultNum1.frame = 0;*/
                for (var i =0;i<10;i++)
                        {
                            if(realDigits[0] == i)
                                {
                                    _this.lowerNum1.frame = i;
                                }
                            if(realDigits[1] == i)
                                {
                                    _this.lowerNum2.frame = i;
                                } 
                            if(realDigits[2] == i)
                                {
                                    _this.lowerNum3.frame = i;
                                }
                        }
            }
            if(realDigits.length == 2)
                {
                    for (var i =0;i<10;i++)
                        {
                            if(realDigits[0] == i)
                                {
                                    _this.lowerNum2.frame = i;
                                }
                            if(realDigits[1] == i)
                                {
                                    _this.lowerNum3.frame = i;
                                }
                        }
                }
            if(realDigits.length == 1)
                {
                    for (var j =0;j<10;j++)
                        {
                            if(realDigits[0] == j)
                                {
                                    _this.lowerNum3.frame = j;
                                    _this.resultNum3.frame = 10-j ;
                                        
                                }
                        }
                }
        
        if(temp2.length == 3)
            {
                for(var k = 0;k<10;k++)
                    {
                        if(temp2[0] == k)
                            {
                                _this.resultNum1.frame = k;
                            }
                        if(temp2[1] == k)
                            {
                                _this.resultNum2.frame = k;
                            }
                        if(temp2[2] == k)
                            {
                                _this.resultNum3.frame = k;
                            }
                    }
            }
        if(temp2.length == 2)
            {
                _this.resultNum1.frame = 0;
                for(var k = 0;k<10;k++)
                    {
                        if(temp2[0] == k)
                            {
                                _this.resultNum2.frame = k;
                            }
                        if(temp2[1] == k)
                            {
                                _this.resultNum3.frame = k;
                            }
                    }
            }
        if(temp2.length == 1)
            {
                _this.resultNum1.frame = 0;
                for(var k = 0;k<10;k++)
                    {
                        if(temp2[0] == k)
                            {
                                if(temp2[0] == 0)
                                    {
                                         _this.resultNum1.frame = 0;
                                         _this.resultNum2.frame = 0;
                                         _this.resultNum3.frame = 0;
                                    }
                                else
                                    {
                                         _this.resultNum3.frame = k;
                                         _this.resultNum2.frame = 0;
                                    }
                               
                            }
                        
                    }
            }
    },
    
    leverDownToDrop:function()
    {
        //alert("here");
        _this.mmLeverAnim =  _this.mmLever.animations.add('auto');
		_this.mmLeverAnim.play(10,false);
        if(_this.notesGroup100mm)
            {
                _this.notesGroup100mm.destroy();
            }
        if(_this.notesGroup50mm)
            {
                _this.notesGroup50mm.destroy();
            }
        if(_this.notesGroup20mm)
            {
                _this.notesGroup20mm.destroy();
            }
        if(_this.notesGroup10mm)
            {
                _this.notesGroup10mm.destroy();
            }
        if(_this.notesGroup5mm)
            {
                _this.notesGroup5mm.destroy();
            }
        if(_this.notesGroup2mm)
            {
                _this.notesGroup2mm.destroy();
            }
        if(_this.notesGroup1mm)
            {
                _this.notesGroup1mm.destroy();
            }
        
        _this.notesGroup100mm = _this.add.group();
        _this.notesGroup50mm = _this.add.group();
        _this.notesGroup20mm = _this.add.group();
        _this.notesGroup10mm = _this.add.group();
        _this.notesGroup5mm = _this.add.group();
        _this.notesGroup2mm = _this.add.group();
        _this.notesGroup1mm = _this.add.group();
         
        for (var i = 0; i < _this.mm100rsL.frame; i++)
            {
                _this.sprite4 = _this.notesGroup100mm.create(442, 335+(5*i), '100rsNote_sp');
                _this.sprite4.name = '100rsNote_sp' + i;
                _this.notesGroup100mm.getChildAt(i).bringToTop();
            }
        for (var i = 0; i < _this.mm50rsL.frame; i++)
            {
                _this.sprite3 = _this.notesGroup50mm.create(442, 335+(5*i), '50rsNote_sp');
                _this.sprite3.name = '50rsNote_sp' + i;
                _this.notesGroup50mm.getChildAt(i).bringToTop();
            }
        for (var i = 0; i < _this.mm20rsL.frame; i++)
            {
                _this.sprite2 = _this.notesGroup20mm.create(442, 335+(5*i), '20rsNote_sp');
                _this.sprite2.name = '20rsNote_sp' + i;
                _this.notesGroup20mm.getChildAt(i).bringToTop();
            }
        for (var i = 0; i < _this.mm10rsR.frame; i++)
            {
                _this.sprite3 = _this.notesGroup10mm.create(442, 335+(5*i), '10rsNote_sp');
                _this.sprite3.name = '10rsNote_sp' + i;
                _this.notesGroup10mm.getChildAt(i).bringToTop();
            }
        for (var i = 0; i < _this.mm5rsR.frame; i++)
            {
                _this.sprite4 = _this.notesGroup5mm.create(442, 335+(5*i), '5rsNote_sp');
                _this.sprite4.name = '5rsNote_sp' + i;
                _this.notesGroup5mm.getChildAt(i).bringToTop();
            }
        for (var i = 0; i < _this.mm2rsR.frame; i++)
            {
                _this.sprite6 = _this.notesGroup2mm.create(442, 335+(5*i), '2rsNote_sp');
                _this.sprite6.name = '2rsNote_sp' + i;
                _this.notesGroup2mm.getChildAt(i).bringToTop();
            }
        for (var i = 0; i < _this.mm1rsR.frame; i++)
            {
                _this.sprite6 = _this.notesGroup1mm.create(442, 335+(5*i), '1rsNote_sp');
                _this.sprite6.name = '1rsNote_sp' + i;  
                _this.notesGroup1mm.getChildAt(i).bringToTop();
            }
        if((_this.notesValue == 100 && _this.random100or200 == '100')||(_this.notesValue == 200 && _this.random100or200 == '200'))
            {
                _this.time.events.add(1000, function(){
                    _this.finishedMoneyMachineExchange();
                },_this);
            }
        
        
    },
    finishedMoneyMachineExchange:function()
    {
        
        
        _this.notesGroup100mm.destroy();
        _this.notesGroup50mm.destroy();
        _this.notesGroup20mm.destroy();
        _this.notesGroup10mm.destroy();
        _this.notesGroup5mm.destroy();
        _this.notesGroup2mm.destroy();
        _this.notesGroup1mm.destroy();
        
        _this.notesGroup100mmN = _this.add.group();
        _this.notesGroup50mmN = _this.add.group();
        _this.notesGroup20mmN = _this.add.group();
        _this.notesGroup10mmN = _this.add.group();
        _this.notesGroup5mmN = _this.add.group();
        _this.notesGroup2mmN = _this.add.group();
        _this.notesGroup1mmN = _this.add.group();
        
        _this.notesGroup100mmN.inputEnableChildren = true;
        _this.notesGroup50mmN.inputEnableChildren = true;
        _this.notesGroup20mmN.inputEnableChildren = true;
        _this.notesGroup10mmN.inputEnableChildren = true;
        _this.notesGroup5mmN.inputEnableChildren = true;
        _this.notesGroup2mmN.inputEnableChildren = true;
        _this.notesGroup1mmN.inputEnableChildren = true;
        
            _this.k = 0;
        
        var forOne1 = _this.mm50rsL.frame+_this.mm100rsL.frame
        var forOne = forOne1+_this.mm20rsL.frame
        console.log("&& "+forOne);
        var forTwo = forOne + _this.mm10rsR.frame;
        var forThree = forTwo+_this.mm5rsR.frame;
        var forFour = forThree+_this.mm2rsR.frame;
        var forFive = forFour+_this.mm1rsR.frame;
        console.log("@@@-## "+(_this.k+_this.mm10rsR.frame))
        
        _this.changeNoteCount2 = 0;
        
        for (var i = 0; i < _this.mm100rsL.frame; i++)
                {
                    _this.sprite2 = _this.notesGroup100mmN.create(30, 100+(20*i), '100rsNote_sp');
                    _this.sprite2.name = '100rsNote_sp';
                    _this.changeNoteCount2++;
                    
                }
            for (var i = _this.mm100rsL.frame; i < forOne1; i++)
                {
                    _this.sprite2 = _this.notesGroup50mmN.create(30, 100+(20*i), '50rsNote_sp');
                    _this.sprite2.name = '50rsNote_sp';
                    _this.changeNoteCount2++;
                    
                }
            for (var i = forOne1; i < forOne; i++)
                {
                    _this.sprite2 = _this.notesGroup20mmN.create(30, 100+(20*i), '20rsNote_sp');
                    _this.sprite2.name = '20rsNote_sp';
                    _this.changeNoteCount2++;
                }
            for (var i = forOne; i < forTwo; i++)
                {
                    _this.sprite2 = _this.notesGroup10mmN.create(30, 100+(20*i), '10rsNote_sp');
                    _this.sprite2.name = '10rsNote_sp';
                    _this.changeNoteCount2++;
                    
                    console.log("!$! "+_this.k,_this.mm50rsL.frame);
                }
            for (var i = forTwo; i < forThree; i++)
                {
                    _this.sprite2 = _this.notesGroup5mmN.create(30, 100+(20*i), '5rsNote_sp');
                    _this.sprite2.name = '5rsNote_sp';
                    _this.changeNoteCount2++;
                }
            for (var i = forThree; i < forFour; i++)
                {
                    _this.sprite2 = _this.notesGroup2mmN.create(30, 100+(20*i), '2rsNote_sp');
                    _this.sprite2.name = '2rsNote_sp'; 
                    _this.changeNoteCount2++;
                }
            for (var i = forFour; i < forFive; i++)
                {
                    _this.sprite2 = _this.notesGroup1mmN.create(30, 100+(20*i), '1rsNote_sp');
                    _this.sprite2.name = '1rsNote_sp';
                    _this.changeNoteCount2++;
                }
        _this.mmBg.destroy();
        if(_this.exchangeCheck)
            {
            _this.changeSprite1.visible = false;
            _this.changeSprite1.destroy();
            }
        else
            {
                _this.changeSprite2.visible = false;
                _this.changeSprite2.destroy();
                _this.changeSprite3.visible = false;
                _this.changeSprite3.destroy();
            }
        _this.moneyMachine.destroy();
        _this.mmLever.destroy();
        _this.dropNoteSpot.destroy();
        _this.minusSymbol.destroy();
        _this.resetBtn.destroy(); 
        _this.mm200rs.destroy();
        _this.mm100rs.destroy();
        _this.mm50rs.destroy();
        _this.mm20rs.destroy();
        _this.mm10rs.destroy();
        _this.mm5rs.destroy();
        _this.mm2rs.destroy();
        _this.mm1rs.destroy();
        _this.mm10rsR.destroy();
        _this.mm5rsR.destroy();
        _this.mm2rsR.destroy();
        _this.mm1rsR.destroy();
        _this.mm200rsL.destroy();
        _this.mm100rsL.destroy();
        _this.mm50rsL.destroy();
        _this.mm20rsL.destroy();
        _this.upperNum1.destroy();
        _this.upperNum2.destroy();
        _this.upperNum3.destroy();
        _this.lowerNum1.destroy();
        _this.lowerNum2.destroy();
        _this.lowerNum3.destroy();
        _this.resultNum1.destroy();
        _this.resultNum2.destroy();
        _this.resultNum3.destroy();
        _this.graphicsMm.destroy();
        
        _this.handShow1 = _this.add.sprite(50, 130, 'hand_sp');
        _this.tween = _this.add.tween(_this.handShow1);
        _this.tween.to({ x:870,y:100  }, 1500, 'Linear', true, 0);
         _this.tween.onComplete.add(function(){
                 _this.time.events.add(500, function(){
                   _this.handShow1.destroy();
                     _this.handShow1 = null;
            },_this);
         },_this);
        
        _this.notesGroup100mmN.onChildInputDown.add(_this.notesClickedMm, _this);
        _this.notesGroup50mmN.onChildInputDown.add(_this.notesClickedMm, _this);
        _this.notesGroup20mmN.onChildInputDown.add(_this.notesClickedMm, _this);
        _this.notesGroup10mmN.onChildInputDown.add(_this.notesClickedMm, _this);
        _this.notesGroup5mmN.onChildInputDown.add(_this.notesClickedMm, _this);
        _this.notesGroup2mmN.onChildInputDown.add(_this.notesClickedMm, _this);
        _this.notesGroup1mmN.onChildInputDown.add(_this.notesClickedMm, _this);
    
        _this.VoiceNumber = 1;
        _this.getVoice(_this.VoiceNumber);
    },
     notesClickedMm:function(target) {
       console.log("OK 1");
            if(_this.enableChangeDrag == true)
             {
                console.log("OK 2");
                commonNavBarConversion.addNotesToWallet2(target);
             }
    },
resetMoneyMachine:function()
    {
        _this.moneyMachine.destroy();
        _this.mmLever.destroy();
        _this.dropNoteSpot.destroy();
        _this.minusSymbol.destroy();
        _this.resetBtn.destroy(); 
        _this.graphicsMm.destroy();
        _this.mm200rs.destroy();
        _this.mm100rs.destroy();
        _this.mm50rs.destroy();
        _this.mm20rs.destroy();
        _this.mm10rs.destroy();
        _this.mm5rs.destroy();
        _this.mm2rs.destroy();
        _this.mm1rs.destroy();
        _this.mm10rsR.destroy();
        _this.mm5rsR.destroy();
        _this.mm2rsR.destroy();
        _this.mm1rsR.destroy();
        _this.mm200rsL.destroy();
        _this.mm100rsL.destroy();
        _this.mm50rsL.destroy();
        _this.mm20rsL.destroy();
        _this.upperNum1.destroy();
        _this.upperNum2.destroy();
        _this.upperNum3.destroy();
        _this.lowerNum1.destroy();
        _this.lowerNum2.destroy();
        _this.lowerNum3.destroy();
        _this.resultNum1.destroy();
        _this.resultNum2.destroy();
        _this.resultNum3.destroy();
        _this.notesValue = 0;
        _this.twoHundredFrameTemp = _this.twoHundredFrame;
        _this.oneHundredFrameTemp =_this.oneHundredFrame;
        _this.fiftyFrameTemp = _this.fiftyFrame; 
        _this.twentyFrameTemp =_this.twentyFrame;
        _this.tenFrameTemp = _this.tenFrame;
        _this.fiveFrameTemp = _this.fiveFrame;
        _this.twoFrameTemp =_this.twoFrame;
        _this.oneFrameTemp = _this.oneFrame;
        _this.gotoMoneyMachine();
    },
changeAddedToWallet1:function()
    {
        _this.change1added = true;
        _this.change2added = false;
        _this.change3added = false;
        commonNavBarConversion.closeWalletAutoMatically();
        _this.carrotToSell.visible = true;
        _this.carrotToSell.loadTexture(_this.itemArray4+'_sp', 0, false);
        _this.carrotToSell.x = 230;
        
        if(_this.item4type == 'kg')
            {
            _this.item4 = _this.convertToKm(_this.item4quantity);
                _this.jalebiAns1 = _this.item4quantity;
                _this.inputBoxStandard = 1;
                _this.VoiceNumber = 5;
            }
        else 
            {
                _this.inputBoxStandard = 0;
                _this.VoiceNumber = 6;
                _this.item4 = _this.item4quantity;
                _this.jalebiAns1 = _this.convertToKm(_this.item4quantity);
                if(_this.jalebiAns1<1)
                    _this.jalebiAns2 = _this.jalebiAns1.toString().substring(1);
                else if(_this.jalebiAns1==1.0)
                    _this.jalebiAns2 = 1;
            }
        
        if(_this.item4quantity/750 == 1)
            {   
            _this.item4 = '3/4';
            _this.item4type = 'kg';
            _this.jalebiAns1 = 750;
        }
        else if(_this.item4quantity/500 == 1)
            {   
            _this.item4 = '1/2';
            _this.item4type = 'kg';
                _this.jalebiAns1 = 500;
        }
        else if(_this.item2quantity/250 == 1)
            {   
            _this.item4 = '1/4';
            _this.item4type = 'kg';
                _this.jalebiAns1 = 250;
        }
        
        if(window.languageSelected == "English")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(440,185,'kg');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,183,'gm');
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,300,'kg');
                else if(_this.itemArray4 == "candy")
                    _this.textForItemList = _this.add.text(440,295,'gm');
                
                _this.textForItemList.fontSize = 40;
            }
        else if(window.languageSelected == "Hindi")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(450,190,'कि.ग्रा');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,190,'ग्रा');
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,305,'कि.ग्रा');
                else if(_this.itemArray4 == "candy")
                    _this.textForItemList = _this.add.text(430,300,'ग्रा');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Kannada")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(450,190,'ಕೆಜಿ');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,190,'ಗ್ರಾಂ');
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,305,'ಕೆಜಿ');
                else if(_this.itemArray4 == "candy")
                    _this.textForItemList = _this.add.text(430,300,'ಗ್ರಾಂ');
                
                _this.textForItemList.fontSize = 32;
            }
        else if(window.languageSelected == "Gujarati")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(450,190,'કિગ્રા');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,190,'ગ્રા');
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,305,'કિગ્રા');
                else if(_this.itemArray4 == "candy")
                    _this.textForItemList = _this.add.text(430,300,'ગ્રા');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Odiya")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(450,190,'କି.ଗ୍ରା');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,190,'ଗ୍ରାମ');
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,305,'କି.ଗ୍ରା');
                else if(_this.itemArray4 == "candy")
                    _this.textForItemList = _this.add.text(430,300,'ଗ୍ରାମ');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Tamil")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(450,190,'கி.கி');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,190,'கி');
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,305,'கி.கி');
                else if(_this.itemArray4 == "pumpkin")
                    _this.textForItemList = _this.add.text(430,300,'கி');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Marathi")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(450,190,'किलो');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,190,'ग्रॅम');
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,305,'किलो');
                else if(_this.itemArray4 == "candy")
                    _this.textForItemList = _this.add.text(430,300,'ग्रॅम');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Urdu")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(450,190,'کلوگرام');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,190,'گرام'); 
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,305,'کلوگرام');
                else if(_this.itemArray4 == "candy")
                    _this.textForItemList = _this.add.text(430,300,'گرام'); 
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Telugu")
            {
                if(_this.itemArray4 == "jalebi")
                    _this.textForItemList = _this.add.text(450,190,'కి.గ్రా');
                else if(_this.itemArray4 == "laddu")
                    _this.textForItemList = _this.add.text(440,190,'గ్రా');
                else if(_this.itemArray4 == "burfi")
                    _this.textForItemList = _this.add.text(420,305,'కి.గ్రా');
                else if(_this.itemArray4 == "candy")
                    _this.textForItemList = _this.add.text(430,300,'గ్రా');
                

                _this.textForItemList.fontSize = 30;
            }
        
        _this.textForItemList.anchor.setTo(0.5);
        _this.textForItemList.font = 'myfont';
        _this.textForItemList.align = 'center';
        _this.textForItemList.fontWeight = 'bold';
        _this.textForItemList.angle = -10;
        //_this.bananaToSell = _this.add.sprite(150,120,'Banana_sp');
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();  
            _this.openListAutomatically = true;
            
            _this.greyItem4 = true;
            _this.greyItem5 = true;
            _this.greyItem6 = false;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
            //_this.inputBoxStandard = 1;
            _this.addNumberPad();
            //_this.VoiceNumber = 5;
            _this.getVoice(_this.VoiceNumber);
        },_this);
    },
changeAddedToWallet2:function()
    {
        
        
        _this.change1added = false;
        _this.change2added = true;
        _this.change3added = false;
        
        if(_this.autoRide3type == 'km')
            {
            _this.autoRide3 = _this.convertToKm(_this.randomNumberForAuto[2]);
                _this.autoRide3Ans1 = _this.randomNumberForAuto[2];
                _this.inputBoxStandard = 2;
            }
        else 
            {
                _this.inputBoxStandard = 3;
                _this.autoRide3 = _this.randomNumberForAuto[2];
                _this.autoRide3Ans1 = _this.convertToKm(_this.randomNumberForAuto[2]);
                if(_this.autoRide3Ans1<1)
                    _this.autoRide3Ans2 = _this.autoRide3Ans1.toString().substring(1);
                else if(_this.autoRide3Ans1==1.0)
                    _this.autoRide3Ans2 = 1;
            }
        
        if(_this.randomNumberForAuto[2]/750 == 1)
        {   
            _this.autoRide3 = '3/4';
            _this.autoRide3type = 'km';
            _this.autoRide3Ans1 = 750;
        }
        else if(_this.randomNumberForAuto[2]/500 == 1)
           {   
            _this.autoRide3 = '1/2';
            _this.autoRide3type = 'km';
               _this.autoRide3Ans1 = 500;
        }
        else if(_this.randomNumberForAuto[2]/250 == 1)
            {   
            _this.autoRide3 = '1/4';
            _this.autoRide3type = 'km';
                _this.autoRide3Ans1 = 250;
        }
        
        
        commonNavBarConversion.closeWalletAutoMatically();
        _this.openListAutomatically = false;
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();
            
            _this.greyItem5 = true;
            _this.greyItem6 = true;
            _this.greyItem7 = false;
          _this.openListAutomatically = true;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
          _this.bg3.loadTexture('0Bmarket5_sp', 0, false);
          _this.autoStand = _this.add.sprite(40,320,'autoAnim_sp');
          //_this.inputBoxStandard = 3;
          _this.addNumberPad();
            if(_this.autoRide3type == 'km')
            {
            _this.VoiceNumber = 3;
            }
        else 
            {
               _this.VoiceNumber = 2;
        
            }
          //_this.VoiceNumber = 2;
          _this.getVoice(_this.VoiceNumber);
        },_this);
    },
    
    changeAddedToWallet3:function()
    {
        
        
        _this.change1added = false;
        _this.change2added = false;
        _this.change3added = true;
        
        _this.enableWalletDrag = false;
            
            if(_this.autoRide4type == 'km')
            {
            _this.autoRide4 = _this.convertToKm(_this.randomNumberForAuto[3]);
                _this.autoRide4Ans1 = _this.randomNumberForAuto[3];
                _this.inputBoxStandard = 2;
            }
        else 
            {
                _this.inputBoxStandard = 3;
                _this.autoRide4 = _this.randomNumberForAuto[3];
                _this.autoRide4Ans1 = _this.convertToKm(_this.randomNumberForAuto[3]);
                if(_this.autoRide4Ans1<1)
                    _this.autoRide4Ans2 = _this.autoRide4Ans1.toString().substring(1);
                else if(_this.autoRide4Ans1==1.0)
                    _this.autoRide4Ans2 = 1;
            }
        
        if(_this.randomNumberForAuto[3]/750 == 1)
        {   
            _this.autoRide4 = '3/4';
            _this.autoRide4type = 'km';
            _this.autoRide4Ans1 = 750;
        }
        else if(_this.randomNumberForAuto[3]/500 == 1)
           {   
            _this.autoRide4 = '1/2';
            _this.autoRide4type = 'km';
               _this.autoRide4Ans1 = 500;
        }
        else if(_this.randomNumberForAuto[3]/250 == 1)
            {   
            _this.autoRide4 = '1/4';
            _this.autoRide4type = 'km';
                _this.autoRide4Ans1 = 250;
        }
        
        commonNavBarConversion.closeWalletAutoMatically();
        _this.openListAutomatically = false;
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();
            _this.greyItem8 = true;
            _this.greyItem9 = false;
          _this.openListAutomatically = true;
           _this.autoStand = _this.add.sprite(880,320,'autoAnim_sp');  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
            _this.bg4.loadTexture('0Bmarket3_sp', 0, false);
            _this.autoStand.scale.x *= -1;
           //_this.inputBoxStandard = 2;
           _this.addNumberPad();
            if(_this.autoRide4type == 'km')
            {
            _this.VoiceNumber = 3;
            }
        else 
            {
               _this.VoiceNumber = 2;
        
            }
           //_this.VoiceNumber = 3;
           _this.getVoice(_this.VoiceNumber);
        },_this);
    },
    
    exchangeMoneyAddedtoWallet:function()
    {
        commonNavBarConversion.closeWalletAutoMatically();
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();
            _this.checkIfAmountExistsInWallet(_this.item5Rate,_this.itemArray5);
            
            
        },_this);
    },
    
    checkIfAmountExistsInWallet:function(itemRateNew,itemArrayNew)
    {
        _this.amountAfterExchange = [];
        
        _this.itemRateNew = itemRateNew;
        _this.newAmount = _this.generateAmount(_this.itemRateNew);
        _this.checkNewAmount = _this.itemRateNew;
        
        _this.tFrameNew = _this.twoHundredFrame;
         _this.hnFrameNew = _this.oneHundredFrame;
         _this.oFrameNew = _this.oneFrame;
         _this.fFrameNew = _this.fiveFrame;
         _this.twFrameNew = _this.twoFrame;
         _this.teFrameNew = _this.tenFrame;
         _this.tyFrameNew = _this.twentyFrame;
         _this.fyFrameNew = _this.fiftyFrame;
        
        console.log("1"+_this.newAmount);
        loop:for(var i=0;i<_this.newAmount.length;i++){
            console.log("2"+_this.newAmount);
                if(_this.newAmount[i]==200 && _this.tFrameNew>0)
                    {
                        _this.tFrameNew--;
                        
                         _this.amountAfterExchange.push(200);
                        _this.checkNewAmount-=200;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=200;
                    }
                else if(_this.newAmount[i]==100 && _this.hnFrameNew>0)
                    {
                        _this.hnFrameNew--;
                         _this.amountAfterExchange.push(100);
                        _this.checkNewAmount-=100;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                       // amount-=100;
                    }
                else if(_this.newAmount[i]==50 && _this.fyFrameNew>0)
                    {
                        _this.fyFrameNew--;
                         _this.amountAfterExchange.push(50);
                        _this.checkNewAmount-=50;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=50;
                        
                    }
                else if(_this.newAmount[i]==20 && _this.tyFrameNew>0)
                    {
                        _this.tyFrameNew--;
                         _this.amountAfterExchange.push(20);
                        _this.checkNewAmount-=20;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=20;
                        
                    }
                else if(_this.newAmount[i]==10 && _this.teFrameNew>0)
                    {
                        _this.teFrameNew--;
                         _this.amountAfterExchange.push(10);
                        _this.checkNewAmount-=10;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=10;
                        
                    }
                else if(_this.newAmount[i]==5 && _this.fFrameNew>0)
                    {
                        _this.fFrameNew--;
                         _this.amountAfterExchange.push(5);
                        _this.checkNewAmount-=5;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=5;
                        
                    }
                else if(_this.newAmount[i]==2 && _this.twFrameNew>0)
                    {
                        _this.twFrameNew--;
                         _this.amountAfterExchange.push(2);
                        _this.checkNewAmount-=2;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                       // amount-=2;
                        
                    }
                else if(_this.newAmount[i]==1 && _this.oFrameNew>0)
                    {
                        _this.oFrameNew--;
                         _this.amountAfterExchange.push(1);
                        _this.checkNewAmount-=1;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                       // amount-=1;
                        
                    }
            else if(_this.newAmount[i]==50 && _this.fyFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                            }
                        
                    }
            else if(_this.newAmount[i]==20 && _this.tyFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                            }
                        
                    }
            else if(_this.newAmount[i]==10 && _this.teFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                            }
                        
                    }
            else if(_this.newAmount[i]==5 && _this.fFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.teFrameNew>0)
                                {
                                    _this.teFrameNew--;
                                     _this.amountAfterExchange.push(10);
                                    _this.checkNewAmount-=10;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=10;

                                }
                                else if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                            }
                        
                    }
            else if(_this.newAmount[i]==2 && _this.twFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.fFrameNew>0)
                                {
                                    _this.fFrameNew--;
                                     _this.amountAfterExchange.push(5);
                                    _this.checkNewAmount-=5;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=5;

                                }
                                else if(_this.teFrameNew>0)
                                {
                                    _this.teFrameNew--;
                                     _this.amountAfterExchange.push(10);
                                    _this.checkNewAmount-=10;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=10;

                                }
                                else if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                            }
                        
                    }
            
                else if(_this.newAmount[i]==1 && _this.oFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.twFrameNew>0)
                                {
                                    _this.twFrameNew--;
                                     _this.amountAfterExchange.push(2);
                                    _this.checkNewAmount-=2;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                                else if(_this.fFrameNew>0)
                                {
                                    _this.fFrameNew--;
                                     _this.amountAfterExchange.push(5);
                                    _this.checkNewAmount-=5;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=5;

                                }
                                else if(_this.teFrameNew>0)
                                {
                                    _this.teFrameNew--;
                                     _this.amountAfterExchange.push(10);
                                    _this.checkNewAmount-=10;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=10;

                                }
                                else if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                            }
                        
                        
                    }
            
    
            }
        
        //if(_this.newAmount.length != _this.amountAfterExchange.length)
        //    _this.amountAfterExchange = _this.generateAmount1(_this.item5Rate);
        
        console.log("hai"+_this.amountAfterExchange);
        
        _this.amountAfterExchange.sort(function(a, b){return b - a});
        _this.sum = 0;
        for(var i=0;i<_this.amountAfterExchange.length;i++)
          {
                _this.sum+=_this.amountAfterExchange[i];
                if(_this.sum>_this.itemRateNew)
                {
                    if(i<_this.amountAfterExchange.length-1)
                        _this.amountAfterExchange.splice(i+1,_this.amountAfterExchange.length-1);
                }
          }
        
        console.log("hai2"+_this.amountAfterExchange);
        
        _this.moneyExchanged = true;
            _this.billValue = itemArrayNew;
            _this.showBillMachine(_this.billValue);
        
    },
    
    checkIfAmountExistsInWallet2:function(itemRateNew,itemArrayNew)
    {
        console.log(itemRateNew);
        console.log(itemArrayNew);
        
        _this.amountAfterExchange = [];
        
        _this.itemRateNew = itemRateNew;
        //alert(_this.itemRateNew);
        _this.newAmount = _this.generateAmount(_this.itemRateNew);
        _this.checkNewAmount = _this.itemRateNew;
        
        _this.tFrameNew = _this.twoHundredFrame;
         _this.hnFrameNew = _this.oneHundredFrame;
         _this.oFrameNew = _this.oneFrame;
         _this.fFrameNew = _this.fiveFrame;
         _this.twFrameNew = _this.twoFrame;
         _this.teFrameNew = _this.tenFrame;
         _this.tyFrameNew = _this.twentyFrame;
         _this.fyFrameNew = _this.fiftyFrame;
        
        console.log("1"+_this.newAmount);
        loop:for(var i=0;i<_this.newAmount.length;i++){
            console.log("2"+_this.newAmount);
            console.log("3"+_this.checkNewAmount);
                if(_this.newAmount[i]==200 && _this.tFrameNew>0)
                    {
                        _this.tFrameNew--;
                        
                         _this.amountAfterExchange.push(200);
                        _this.checkNewAmount-=200;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=200;
                    }
                else if(_this.newAmount[i]==100 && _this.hnFrameNew>0)
                    {
                        _this.hnFrameNew--;
                         _this.amountAfterExchange.push(100);
                        _this.checkNewAmount-=100;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                       // amount-=100;
                    }
                else if(_this.newAmount[i]==50 && _this.fyFrameNew>0)
                    {
                        _this.fyFrameNew--;
                         _this.amountAfterExchange.push(50);
                        _this.checkNewAmount-=50;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=50;
                        
                    }
                else if(_this.newAmount[i]==20 && _this.tyFrameNew>0)
                    {
                        _this.tyFrameNew--;
                         _this.amountAfterExchange.push(20);
                        _this.checkNewAmount-=20;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=20;
                        
                    }
                else if(_this.newAmount[i]==10 && _this.teFrameNew>0)
                    {
                        _this.teFrameNew--;
                         _this.amountAfterExchange.push(10);
                        _this.checkNewAmount-=10;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=10;
                        
                    }
                else if(_this.newAmount[i]==5 && _this.fFrameNew>0)
                    {
                        _this.fFrameNew--;
                         _this.amountAfterExchange.push(5);
                        _this.checkNewAmount-=5;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                        //amount-=5;
                        
                    }
                else if(_this.newAmount[i]==2 && _this.twFrameNew>0)
                    {
                        _this.twFrameNew--;
                         _this.amountAfterExchange.push(2);
                        _this.checkNewAmount-=2;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                       // amount-=2;
                        
                    }
                else if(_this.newAmount[i]==1 && _this.oFrameNew>0)
                    {
                        _this.oFrameNew--;
                         _this.amountAfterExchange.push(1);
                        _this.checkNewAmount-=1;
                        _this.newAmount.splice(i, 1);
                        i--;
                        if(_this.checkNewAmount<=0)
                            break;
                       // amount-=1;
                        
                    }
            else if(_this.newAmount[i]==50 && _this.fyFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                                else if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.teFrameNew>0)
                                {
                                    _this.teFrameNew--;
                                     _this.amountAfterExchange.push(10);
                                    _this.checkNewAmount-=10;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=10;

                                }
                                else if(_this.fFrameNew>0)
                                {
                                    _this.fFrameNew--;
                                     _this.amountAfterExchange.push(5);
                                    _this.checkNewAmount-=5;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=5;

                                }
                                else if(_this.twFrameNew>0)
                                {
                                    _this.twFrameNew--;
                                     _this.amountAfterExchange.push(2);
                                    _this.checkNewAmount-=2;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                                else if(_this.oFrameNew>0)
                                {
                                    _this.oFrameNew--;
                                     _this.amountAfterExchange.push(1);
                                    _this.checkNewAmount-=1;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                                
                                
                                
                            }
                        
                    }
            else if(_this.newAmount[i]==20 && _this.tyFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                                else if(_this.teFrameNew>0)
                                {
                                    _this.teFrameNew--;
                                     _this.amountAfterExchange.push(10);
                                    _this.checkNewAmount-=10;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=10;

                                }
                                else if(_this.fFrameNew>0)
                                {
                                    _this.fFrameNew--;
                                     _this.amountAfterExchange.push(5);
                                    _this.checkNewAmount-=5;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=5;

                                }
                                else if(_this.twFrameNew>0)
                                {
                                    _this.twFrameNew--;
                                     _this.amountAfterExchange.push(2);
                                    _this.checkNewAmount-=2;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                                else if(_this.oFrameNew>0)
                                {
                                    _this.oFrameNew--;
                                     _this.amountAfterExchange.push(1);
                                    _this.checkNewAmount-=1;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                            }
                        
                    }
            else if(_this.newAmount[i]==10 && _this.teFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                                else if(_this.fFrameNew>0)
                                {
                                    _this.fFrameNew--;
                                     _this.amountAfterExchange.push(5);
                                    _this.checkNewAmount-=5;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=5;

                                }
                                else if(_this.twFrameNew>0)
                                {
                                    _this.twFrameNew--;
                                     _this.amountAfterExchange.push(2);
                                    _this.checkNewAmount-=2;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                                else if(_this.oFrameNew>0)
                                {
                                    _this.oFrameNew--;
                                     _this.amountAfterExchange.push(1);
                                    _this.checkNewAmount-=1;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                            }
                        
                    }
            else if(_this.newAmount[i]==5 && _this.fFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.teFrameNew>0)
                                {
                                    _this.teFrameNew--;
                                     _this.amountAfterExchange.push(10);
                                    _this.checkNewAmount-=10;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=10;

                                }
                                else if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                                else if(_this.fFrameNew>0)
                                {
                                    _this.fFrameNew--;
                                     _this.amountAfterExchange.push(5);
                                    _this.checkNewAmount-=5;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=5;

                                }
                                else if(_this.twFrameNew>0)
                                {
                                    _this.twFrameNew--;
                                     _this.amountAfterExchange.push(2);
                                    _this.checkNewAmount-=2;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                                else if(_this.oFrameNew>0)
                                {
                                    _this.oFrameNew--;
                                     _this.amountAfterExchange.push(1);
                                    _this.checkNewAmount-=1;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                            }
                        
                    }
            else if(_this.newAmount[i]==2 && _this.twFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.fFrameNew>0)
                                {
                                    _this.fFrameNew--;
                                     _this.amountAfterExchange.push(5);
                                    _this.checkNewAmount-=5;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=5;

                                }
                                else if(_this.teFrameNew>0)
                                {
                                    _this.teFrameNew--;
                                     _this.amountAfterExchange.push(10);
                                    _this.checkNewAmount-=10;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=10;

                                }
                                else if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                                else if(_this.oFrameNew>0)
                                {
                                    _this.oFrameNew--;
                                     _this.amountAfterExchange.push(1);
                                    _this.checkNewAmount-=1;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                            }
                        
                    }
            
                else if(_this.newAmount[i]==1 && _this.oFrameNew<=0)
                    {
                        for(var j=0;j<_this.newAmount.length;j++)
                            {
                                if(_this.twFrameNew>0)
                                {
                                    _this.twFrameNew--;
                                     _this.amountAfterExchange.push(2);
                                    _this.checkNewAmount-=2;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=2;

                                }
                                else if(_this.fFrameNew>0)
                                {
                                    _this.fFrameNew--;
                                     _this.amountAfterExchange.push(5);
                                    _this.checkNewAmount-=5;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=5;

                                }
                                else if(_this.teFrameNew>0)
                                {
                                    _this.teFrameNew--;
                                     _this.amountAfterExchange.push(10);
                                    _this.checkNewAmount-=10;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=10;

                                }
                                else if(_this.tyFrameNew>0)
                                {
                                    _this.tyFrameNew--;
                                     _this.amountAfterExchange.push(20);
                                    _this.checkNewAmount-=20;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=20;

                                }
                                else if(_this.fyFrameNew>0)
                                {
                                    _this.fyFrameNew--;
                                     _this.amountAfterExchange.push(50);
                                    _this.checkNewAmount-=50;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                    //amount-=50;

                                }
                                else if(_this.hnFrameNew>0)
                                {
                                    _this.hnFrameNew--;
                                     _this.amountAfterExchange.push(100);
                                    _this.checkNewAmount-=100;
                                    _this.newAmount.splice(j, 1);
                                    i--;
                                    j--;
                                if(_this.checkNewAmount<=0)
                                    break loop;
                                   // amount-=100;
                                }
                            }
                        
                        
                    }
            
    
            }
        
        //if(_this.newAmount.length != _this.amountAfterExchange.length)
        //    _this.amountAfterExchange = _this.generateAmount1(_this.item5Rate);
        
        console.log("hai"+_this.amountAfterExchange);
        
        _this.amountAfterExchange.sort(function(a, b){return b - a});
        _this.sum = 0;
        for(var i=0;i<_this.amountAfterExchange.length;i++)
          {
                _this.sum+=_this.amountAfterExchange[i];
                if(_this.sum>_this.itemRateNew)
                {
                    if(i<_this.amountAfterExchange.length-1)
                        _this.amountAfterExchange.splice(i+1,_this.amountAfterExchange.length-1);
                }
          }
        
        console.log("hai2"+_this.amountAfterExchange);
        
        _this.moneyExchanged = true;
            //_this.billValue = itemArrayNew;
            //_this.showBillMachine(_this.billValue);
        _this.displayPayingNotes(_this.amountAfterExchange);
                                    _this.amounts = _this.amountAfterExchange;
        
    
    },
    slideComplete1:function()
    {
        _this.bg2.loadTexture('0Bmarket4_sp', 0, false);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(_this.gotomarketCloseUps1,_this);
    },
    slideComplete2:function()
    {
        _this.bg3.loadTexture('0Bmarket5_sp', 0, false);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(_this.gotomarketCloseUps2,_this);
    },
    slideComplete3:function()
    {
        //alert("here");
        _this.bg4.loadTexture('0Bmarket3_sp', 0, false);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(_this.gotomarketCloseUps3,_this);
    },
    slideComplete4:function()
    {
        _this.bg1.loadTexture('0Astreet4_sp', 0, false);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(_this.gotoAutoMeter,_this);
    },
    gotoAutoMeter:function()
    {
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.nextArrow.events.onInputDown.removeAll();
        _this.nextArrow.destroy();
        _this.autoStand.destroy();
        _this.bg1.loadTexture('commonBg', 0, false);
        _this.autometer = _this.add.sprite(250,80,'autoMeter_sp');
        
        
        _this.autoMeter1Txt = this.add.text(420,275, '₹'+_this.autoRate+'.00');
        _this.autoMeter1Txt.anchor.setTo(0.5);
        _this.autoMeter1Txt.align = 'center';
        _this.autoMeter1Txt.font = 'myfont';
        _this.autoMeter1Txt.fontSize = 40;
        _this.autoMeter1Txt.fontWeight = 'normal';
        _this.autoMeter1Txt.fill = '#FF0000'
        
       
        
        if(window.languageSelected == "English")
            {
                _this.autoMeter2Txt = this.add.text(420,335, _this.autoTotalkm+' km');
            }
        else if(window.languageSelected == "Hindi")
            {
                _this.autoMeter2Txt = this.add.text(420,335, _this.autoTotalkm+' कि.मि');
            }
        else if(window.languageSelected == "Kannada")
            {
                _this.autoMeter2Txt = this.add.text(420,335, _this.autoTotalkm+' ಕಿ.ಮೀ');
            }
        else if(window.languageSelected == "Gujarati")
            {
                _this.autoMeter2Txt = this.add.text(420,338, _this.autoTotalkm+' કિ.મી');
            }
        else if(window.languageSelected == "Odiya")
            {
                _this.autoMeter2Txt = this.add.text(420,338, _this.autoTotalkm+' କି.ମି');
            }
        else if(window.languageSelected == "Tamil")
            {
                _this.autoMeter2Txt = this.add.text(420,338, _this.autoTotalkm+' கி.மீ');
            }
        else if(window.languageSelected == "Marathi")
            {
                _this.autoMeter2Txt = this.add.text(420,338, _this.autoTotalkm+' किमी');
            }
        else if(window.languageSelected == "Urdu")
            {
                _this.autoMeter2Txt = this.add.text(420,338, _this.autoTotalkm+' کلومیٹر');
            }
        else if(window.languageSelected == "Telugu")
            {
                _this.autoMeter2Txt = this.add.text(420,338, _this.autoTotalkm+' కి.మీ');
            }
        _this.autoMeter2Txt.anchor.setTo(0.5);
        _this.autoMeter2Txt.align = 'center';
        _this.autoMeter2Txt.font = 'myfont';
        _this.autoMeter2Txt.fontSize = 30;
        _this.autoMeter2Txt.fontWeight = 'normal';
        _this.autoMeter2Txt.fill = '#000000'
        /*_this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();*/
            _this.VoiceNumber = 13;
            _this.getVoice(_this.VoiceNumber);
            _this.billMachineDisplayed  = true;
            _this.payForAutoRide();
        //_this.checkIfAmountExistsInWallet2();
       // },_this);
                                        
    },
    completedPaymentLast:function()
    {
        commonNavBarConversion.closeWalletAutoMatically();
        _this.VoiceNumber = 7;
        _this.getVoice(_this.VoiceNumber);
        _this.enableWalletDrag = false;
        _this.sprite21.destroy();
        _this.sprite22.destroy();
        _this.sprite23.destroy();
        _this.sprite24.destroy();
        _this.sprite25.destroy();
        _this.sprite26.destroy();
        _this.sprite27.destroy();
        _this.sprite28.destroy();
        _this.sprite29.destroy();
        _this.sprite30.destroy();
        _this.sprite31.destroy();
        _this.sprite32.destroy();
        _this.sprite33.destroy();
        _this.sprite34.destroy();

            _this.changeSprite1 = _this.add.sprite(600, 280, '10rsNote_sp');
            _this.changeSprite1.scale.setTo(0.2,0.2);
            _this.changeSprite1.name = '10rsNote_sp';
            _this.tween = _this.add.tween(_this.changeSprite1);
            _this.tween.to({ x: 30,y:340 }, 1000, 'Linear', true, 0);
            _this.add.tween(_this.changeSprite1.scale).to( { x:1,y:1 }, 1000, "Linear", true);
            _this.tween.onComplete.add(function(){
                _this.shopKeeper.destroy();
                _this.changeSprite1.inputEnabled = true;
                _this.changeSprite1.events.onInputDown.add(function(target){
                    if(_this.enableChangeDrag == true)
                    {
                        commonNavBarConversion.addNotesToWallet(target);
                    }
                    else
                    {
                        //Do nothing
                    }
                },_this);  
            },_this);  
       
    },
     gotoCelebrationScene:function()
    {
        commonNavBarConversion.closeWalletAutoMatically();
        _this.VoiceNumber = 11;
        _this.getVoice(_this.VoiceNumber);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            
            _this.autometer.destroy();
            _this.autoMeter1Txt.destroy();
            _this.autoMeter2Txt.destroy();
            _this.receiptToClick = _this.add.sprite(322,46,'receiptForBeg_sp');
       
        
      _this.autoImg1 = _this.add.sprite(380,120,'autoImg_sp');
      ///_this.autoImg1.angle = 21;
        
      _this.autoImg1Text = this.add.text(540,135,''+_this.autoRideDist1);
      _this.autoImg1Text.anchor.setTo(0.5);
      _this.autoImg1Text.font = 'myfont';
      _this.autoImg1Text.align = 'center';
      _this.autoImg1Text.fontWeight = 'bold';
      _this.autoImg1Text.fontSize = 30;
      //_this.autoImg1Text.angle = 21;
        
        _this.autoImg1.frame = 1;
            _this.autoImg1Text.fill = "#949494";
      
      _this.carrotImg = _this.add.sprite(390,180,_this.itemArray1+'Img_sp');
      //_this.carrotImg.angle = 21;
      _this.carrotImg.anchor.setTo(0.5);
        
      //_this.carrotImgText = this.add.text(550,220,''+_this.vegitableList);
      _this.carrotImgText = this.add.text(540,185,''+_this.vegitableList);
      _this.carrotImgText.anchor.setTo(0.5);
      _this.carrotImgText.font = 'myfont';
      _this.carrotImgText.align = 'center';
      _this.carrotImgText.fontWeight = 'bold';
      _this.carrotImgText.fontSize = 30;
      //_this.carrotImgText.angle = 21;
        
        _this.carrotImg.frame = 1;
            _this.carrotImgText.fill = "#949494";
      
      _this.bananaImg = _this.add.sprite(390,220,_this.itemArray2+'Img_sp');
      //_this.bananaImg.angle = 21;
      _this.bananaImg.anchor.setTo(0.5);
        
      //_this.bananaImgText = this.add.text(535,245,''+_this.fruitList);
      _this.bananaImgText = this.add.text(540,225,''+_this.fruitList);
      _this.bananaImgText.anchor.setTo(0.5);
      _this.bananaImgText.font = 'myfont';
      _this.bananaImgText.align = 'center';
      _this.bananaImgText.fontWeight = 'bold';
      _this.bananaImgText.fontSize = 30;
      //_this.bananaImgText.angle = 21;
        
        _this.bananaImg.frame = 1;
            _this.bananaImgText.fill = "#949494";
        
        
      _this.autoImg2 = _this.add.sprite(380,270,'autoImg_sp');
      //_this.autoImg2.angle = 21;
        
      _this.autoImg2Text = this.add.text(540,280,''+_this.autoRideDist2);
      _this.autoImg2Text.anchor.setTo(0.5);
      _this.autoImg2Text.font = 'myfont';
      _this.autoImg2Text.align = 'center';
      _this.autoImg2Text.fontWeight = 'bold';
      _this.autoImg2Text.fontSize = 30;
      //_this.autoImg2Text.angle = 21;
        
        _this.autoImg2.frame = 1;
            _this.autoImg2Text.fill = "#949494";
      //  
      _this.candyImg = _this.add.sprite(390,320,_this.itemArray3+'Img_sp');
      //_this.candyImg.angle = 21;
      _this.candyImg.anchor.setTo(0.5);
        
      //_this.candyImgText = this.add.text(505,340,''+_this.grossList);
      _this.candyImgText = this.add.text(540,325,''+_this.grossList);
      _this.candyImgText.anchor.setTo(0.5);
      _this.candyImgText.font = 'myfont';
      _this.candyImgText.align = 'center';
      _this.candyImgText.fontWeight = 'bold';
      _this.candyImgText.fontSize = 30;
      //_this.candyImgText.angle = 21;
        
        _this.candyImg.frame = 1;
            _this.candyImgText.fill = "#949494";
        
      _this.jalebiImg = _this.add.sprite(390,370,_this.itemArray4+'Img_sp');
      //_this.jalebiImg.angle = 21;
      _this.jalebiImg.anchor.setTo(0.5);
        
      /*_this.jalebiImgTextN = this.add.text(460,355,''+_this.sweetList2N);
      _this.jalebiImgTextN.anchor.setTo(0.5);
      _this.jalebiImgTextN.font = 'myfont';
      _this.jalebiImgTextN.align = 'center';
      _this.jalebiImgTextN.fontWeight = 'bold';
      _this.jalebiImgTextN.fontSize = 30;
      _this.jalebiImgTextN.angle = 21;*/
        
      //_this.jalebiImgText_ = this.add.text(490,355,''+_this.sweetList);
      _this.jalebiImgText_ = this.add.text(540,375,''+_this.sweetList);
      _this.jalebiImgText_.anchor.setTo(0.5);
      _this.jalebiImgText_.font = 'myfont';
      _this.jalebiImgText_.align = 'center';
      _this.jalebiImgText_.fontWeight = 'bold';
      _this.jalebiImgText_.fontSize = 30;
      //_this.jalebiImgText_.angle = 21;
        
        _this.jalebiImg.frame = 1;
            _this.jalebiImgText_.fill = "#949494";
        
      /*_this.jalebiImgTextStd = this.add.text(490,385,''+_this.sweetList);
      _this.jalebiImgTextStd.anchor.setTo(0.5);
      _this.jalebiImgTextStd.font = 'myfont';
      _this.jalebiImgTextStd.align = 'center';
      _this.jalebiImgTextStd.fontWeight = 'bold';
      _this.jalebiImgTextStd.fontSize = 30;
      _this.jalebiImgTextStd.angle = 21;
      
      /*_this.jalebiImgTextD = this.add.text(450,385,''+_this.sweetList2D);
      _this.jalebiImgTextD.anchor.setTo(0.5);
      _this.jalebiImgTextD.font = 'myfont';
      _this.jalebiImgTextD.align = 'center';
      _this.jalebiImgTextD.fontWeight = 'bold';
      _this.jalebiImgTextD.fontSize = 30;
      _this.jalebiImgTextD.angle = 21;*/
        
      _this.autoImg3 = _this.add.sprite(380,410,'autoImg_sp');
      //_this.autoImg3.angle = 21;
      //  
      _this.autoImg3Text = this.add.text(540,415,''+_this.autoRideDist3);
      _this.autoImg3Text.anchor.setTo(0.5);
      _this.autoImg3Text.font = 'myfont';
      _this.autoImg3Text.align = 'center';
      _this.autoImg3Text.fontWeight = 'bold';
      _this.autoImg3Text.fontSize = 30;
      //_this.autoImg3Text.angle = 21;
        
        _this.autoImg3.frame = 1;
            _this.autoImg3Text.fill = "#949494";
        
      _this.oilImg = _this.add.sprite(390,470,_this.itemArray5+'Img_sp');
      //_this.oilImg.angle = 21;
      _this.oilImg.anchor.setTo(0.5);
        
      /*_this.oilImgTextN = this.add.text(435,440,''+_this.oilList);
      _this.oilImgTextN.anchor.setTo(0.5);
      _this.oilImgTextN.font = 'myfont';
      _this.oilImgTextN.align = 'center';
      _this.oilImgTextN.fontWeight = 'bold';
      _this.oilImgTextN.fontSize = 30;
      _this.oilImgTextN.angle = 21;*/
        
      _this.oilImgText_ = this.add.text(540,475,''+_this.oilList);
      _this.oilImgText_.anchor.setTo(0.5);
      _this.oilImgText_.font = 'myfont';
      _this.oilImgText_.align = 'center';
      _this.oilImgText_.fontWeight = 'bold';
      _this.oilImgText_.fontSize = 30;
      //_this.oilImgText_.angle = 21;
        
        _this.oilImg.frame = 1;
            _this.oilImgText_.fill = "#949494";
        
      /*_this.oilImgTextStd = this.add.text(455,460,''+_this.oilListStd);
      _this.oilImgTextStd.anchor.setTo(0.5);
      _this.oilImgTextStd.font = 'myfont';
      _this.oilImgTextStd.align = 'center';
      _this.oilImgTextStd.fontWeight = 'bold';
      _this.oilImgTextStd.fontSize = 30;
      _this.oilImgTextStd.angle = 21;
        
      _this.oilImgTextD = this.add.text(425,468,''+_this.oilListD);
      _this.oilImgTextD.anchor.setTo(0.5);
      _this.oilImgTextD.font = 'myfont';
      _this.oilImgTextD.align = 'center';
      _this.oilImgTextD.fontWeight = 'bold';
      _this.oilImgTextD.fontSize = 30;
      _this.oilImgTextD.angle = 21;*/
        
      _this.autoImg4 = _this.add.sprite(380,510,'autoImg_sp');
      //_this.autoImg4.angle = 21;
        
      _this.autoImg4Text = this.add.text(540,515,''+_this.autoRideDist4);
      _this.autoImg4Text.anchor.setTo(0.5);
      _this.autoImg4Text.font = 'myfont';
      _this.autoImg4Text.align = 'center';
      _this.autoImg4Text.fontWeight = 'bold';
      _this.autoImg4Text.fontSize = 30;
      //_this.autoImg4Text.angle = 21;
        
        _this.autoImg4.frame = 1;
            _this.autoImg4Text.fill = "#949494";
        
        _this.playAnimations();
        },_this);
    },
    gotoCelebrationScene2:function()
    {
        commonNavBarConversion.closeWalletAutoMatically();
        _this.VoiceNumber = 11;
        _this.getVoice(_this.VoiceNumber);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            
            _this.autometer.destroy();
            _this.autoMeter1Txt.destroy();
            _this.autoMeter2Txt.destroy();
            _this.receiptToClick = _this.add.sprite(322,46,'receiptForBeg_sp');
       
        
      _this.autoImg1 = _this.add.sprite(380,110,'autoImg_sp');
      _this.autoImg1Text = _this.add.text(520,120,''+_this.autoRideDist1);
      _this.autoImg1Text.anchor.setTo(0.5);
      _this.autoImg1Text.font = 'myfont';
      _this.autoImg1Text.align = 'center';
      _this.autoImg1Text.fontWeight = 'bold';
      _this.autoImg1Text.fontSize = 30;

            _this.autoImg1.frame = 1;
            _this.autoImg1Text.fill = "#949494";
        
      _this.carrotImg = _this.add.sprite(380,162,_this.itemArray1+'Img_sp');
        
      _this.carrotImgText = _this.add.text(540,170,''+_this.vegitableList);
      _this.carrotImgText.anchor.setTo(0.5);
      _this.carrotImgText.font = 'myfont';
      _this.carrotImgText.align = 'center';
      _this.carrotImgText.fontWeight = 'bold';
      _this.carrotImgText.fontSize = 30;
  
            _this.carrotImg.frame = 1;
            _this.carrotImgText.fill = "#949494";
      
      _this.bananaImg = _this.add.sprite(380,195,_this.itemArray2+'Img_sp');
        
      _this.bananaImgText = _this.add.text(505,210,''+_this.fruitList);
      _this.bananaImgText.anchor.setTo(0.5);
      _this.bananaImgText.font = 'myfont';
      _this.bananaImgText.align = 'center';
      _this.bananaImgText.fontWeight = 'bold';
      _this.bananaImgText.fontSize = 30;
      
            _this.bananaImg.frame = 1;
            _this.bananaImgText.fill = "#949494";
     
      _this.autoImg2 = _this.add.sprite(380,240,'autoImg_sp');
        
      _this.autoImg2Text = _this.add.text(520,255,''+_this.autoRideDist2);
      _this.autoImg2Text.anchor.setTo(0.5);
      _this.autoImg2Text.font = 'myfont';
      _this.autoImg2Text.align = 'center';
      _this.autoImg2Text.fontWeight = 'bold';
      _this.autoImg2Text.fontSize = 30;
      
            _this.autoImg2.frame = 1;
            _this.autoImg2Text.fill = "#949494";
       
      _this.candyImg = _this.add.sprite(380,280,_this.itemArray3+'Img_sp');
        
      _this.candyImgText = _this.add.text(530,295,''+_this.sweetList1);
      _this.candyImgText.anchor.setTo(0.5);
      _this.candyImgText.font = 'myfont';
      _this.candyImgText.align = 'center';
      _this.candyImgText.fontWeight = 'bold';
      _this.candyImgText.fontSize = 30;
     
            _this.candyImg.frame = 1;
            _this.candyImgText.fill = "#949494";
       
      _this.jalebiImg = _this.add.sprite(380,325,_this.itemArray4+'Img_sp');
        
      /*_this.jalebiImgTextN = _this.add.text(490,325,''+_this.sweetList2N);
      _this.jalebiImgTextN.anchor.setTo(0.5);
      _this.jalebiImgTextN.font = 'myfont';
      _this.jalebiImgTextN.align = 'center';
      _this.jalebiImgTextN.fontWeight = 'bold';
      _this.jalebiImgTextN.fontSize = 30;*/
      
      _this.jalebiImgText_ = _this.add.text(490,340,_this.itemArray5+'Img_sp');
      _this.jalebiImgText_.anchor.setTo(0.5);
      _this.jalebiImgText_.font = 'myfont';
      _this.jalebiImgText_.align = 'center';
      _this.jalebiImgText_.fontWeight = 'bold';
      _this.jalebiImgText_.fontSize = 30;
      
      /*_this.jalebiImgTextStd = _this.add.text(530,340,''+_this.sweetList2Std);
      _this.jalebiImgTextStd.anchor.setTo(0.5);
      _this.jalebiImgTextStd.font = 'myfont';
      _this.jalebiImgTextStd.align = 'center';
      _this.jalebiImgTextStd.fontWeight = 'bold';
      _this.jalebiImgTextStd.fontSize = 30;
            
      _this.jalebiImgTextD = _this.add.text(490,355,''+_this.sweetList2D);
      _this.jalebiImgTextD.anchor.setTo(0.5);
      _this.jalebiImgTextD.font = 'myfont';
      _this.jalebiImgTextD.align = 'center';
      _this.jalebiImgTextD.fontWeight = 'bold';
      _this.jalebiImgTextD.fontSize = 30;*/
       
            _this.jalebiImg.frame = 1;
            _this.jalebiImgTextN.fill = "#949494";
            _this.jalebiImgText_.fill = "#949494";
            _this.jalebiImgTextStd.fill = "#949494";
            _this.jalebiImgTextD.fill = "#949494";
       
      _this.autoImg3 = _this.add.sprite(380,370,'autoImg_sp');
        
      _this.autoImg3Text = _this.add.text(520,380,''+_this.autoRideDist3);
      _this.autoImg3Text.anchor.setTo(0.5);
      _this.autoImg3Text.font = 'myfont';
      _this.autoImg3Text.align = 'center';
      _this.autoImg3Text.fontWeight = 'bold';
      _this.autoImg3Text.fontSize = 30;
      
            _this.autoImg3.frame = 1;
            _this.autoImg3Text.fill = "#949494";
       
      _this.oilImg = _this.add.sprite(380,405,'oilImg_sp');
        
      /*_this.oilImgTextN = _this.add.text(490,410,''+_this.oilListN);
      _this.oilImgTextN.anchor.setTo(0.5);
      _this.oilImgTextN.font = 'myfont';
      _this.oilImgTextN.align = 'center';
      _this.oilImgTextN.fontWeight = 'bold';
      _this.oilImgTextN.fontSize = 30;*/
            
      _this.oilImgText_ = _this.add.text(490,412,_this.itemArray6+'Img_sp');
      _this.oilImgText_.anchor.setTo(0.5);
      _this.oilImgText_.font = 'myfont';
      _this.oilImgText_.align = 'center';
      _this.oilImgText_.fontWeight = 'bold';
      _this.oilImgText_.fontSize = 30;
      
      /*_this.oilImgTextStd = _this.add.text(520,425,''+_this.oilListStd);
      _this.oilImgTextStd.anchor.setTo(0.5);
      _this.oilImgTextStd.font = 'myfont';
      _this.oilImgTextStd.align = 'center';
      _this.oilImgTextStd.fontWeight = 'bold';
      _this.oilImgTextStd.fontSize = 30;
      
      _this.oilImgTextD = _this.add.text(490,440,''+_this.oilListD);
      _this.oilImgTextD.anchor.setTo(0.5);
      _this.oilImgTextD.font = 'myfont';
      _this.oilImgTextD.align = 'center';
      _this.oilImgTextD.fontWeight = 'bold';
      _this.oilImgTextD.fontSize = 30;*/
        
            _this.oilImg.frame = 1;
            _this.oilImgTextN.fill = "#949494";
            _this.oilImgText_.fill = "#949494";
            _this.oilImgTextStd.fill = "#949494";
            _this.oilImgTextD.fill = "#949494";
       
      _this.autoImg4 = _this.add.sprite(380,455,'autoImg_sp');
        
      _this.autoImg4Text = _this.add.text(520,470,''+_this.autoRideDist4);
      _this.autoImg4Text.anchor.setTo(0.5);
      _this.autoImg4Text.font = 'myfont';
      _this.autoImg4Text.align = 'center';
      _this.autoImg4Text.fontWeight = 'bold';
      _this.autoImg4Text.fontSize = 30;
    
            _this.autoImg4.frame = 1;
            _this.autoImg4Text.fill = "#949494";
        
        _this.playAnimations();
        },_this);
    },
    playAnimations:function()
    {
        _this.Anim1 = _this.add.sprite(150, 100, 'celebAnim1_sp');
        _this.autoStandAnim =  _this.Anim1.animations.add('auto');
		_this.autoStandAnim.play(10,true);
        
        _this.Anim2 = _this.add.sprite(250, 100, 'celebAnim2_sp');
        _this.autoStandAni2 =  _this.Anim2.animations.add('auto');
		_this.autoStandAni2.play(10,true);
        
        _this.Anim3 = _this.add.sprite(400, 100, 'celebAnim3_sp');
        _this.autoStandAni3 =  _this.Anim3.animations.add('auto');
		_this.autoStandAni3.play(10,true);
        
        _this.Anim4 = _this.add.sprite(200, 100, 'celebAnim4_sp');
        _this.autoStandAni4 =  _this.Anim4.animations.add('auto');
		_this.autoStandAni4.play(10,true);
        
        _this.Anim5 = _this.add.sprite(350, 100, 'celebAnim5_sp');
        _this.autoStandAni5 =  _this.Anim5.animations.add('auto');
		_this.autoStandAni5.play(10,true);
        
        _this.Anim6 = _this.add.sprite(450, 100, 'celebAnim6_sp');
        _this.autoStandAni6 =  _this.Anim6.animations.add('auto');
		_this.autoStandAni6.play(10,true);
        
        _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
                      _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);              
        _this.time.events.add(3000, function(){
            this.state.start('conversionScore');
        },_this);
    },
    payForAutoRide:function()
    {
        _this.billMachineDisplayed = true;
        _this.billValue = 'autoPay';
        _this.enableWalletDrag = true;
        _this.graphics = _this.add.graphics(30, 150);
        _this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
        _this.graphics.beginFill(0xFF700B, 1);
        _this.graphics.drawRect(0,0,200,330);		
        _this.graphics.boundsPadding = 0;
        _this.graphics.alpha = 0;
        _this.billMachineDisplayed = true;
        commonNavBarConversion.removeListFromScreen();
        _this.itemsRate = _this.autoRate;
        //alert(_this.autoAmount);
       _this.checkIfAmountExistsInWallet2(_this.autoRate,_this.autoAmount);
        
        //_this.billValue = _this.auto;
                         //_this.autoRide4Ans = '6000';
                         //_this.showBillMachine(_this.billValue);
        
        
        
        /*_this.sprite21 = _this.add.sprite(30, 300, '50rsNote_sp');
        _this.sprite21.alpha = 0;
        _this.sprite22 = _this.add.sprite(30, 320, '20rsNote_sp'); 
        _this.sprite22.alpha = 0; 
        
        _this.sprite23 = _this.add.sprite(30, 340, '20rsNote_sp'); 
        _this.sprite23.alpha = 0;
        _this.sprite24 = _this.add.sprite(30, 350, '20rsNote_sp'); 
        _this.sprite24.alpha = 0;
        _this.sprite25 = _this.add.sprite(30, 360, '10rsNote_sp'); 
        _this.sprite25.alpha = 0;
        
        _this.sprite26 = _this.add.sprite(30, 360, '10rsNote_sp'); 
        _this.sprite26.alpha = 0;
        _this.sprite27 = _this.add.sprite(30, 370, '10rsNote_sp'); 
        _this.sprite27.alpha = 0;
        _this.sprite28 = _this.add.sprite(30, 380, '10rsNote_sp'); 
        _this.sprite28.alpha = 0;
        _this.sprite29 = _this.add.sprite(30, 390, '10rsNote_sp'); 
        _this.sprite29.alpha = 0;
        _this.sprite30 = _this.add.sprite(30, 400, '5rsNote_sp'); 
        _this.sprite30.alpha = 0;
        
        _this.sprite31 = _this.add.sprite(30, 410, '2rsNote_sp'); 
        _this.sprite31.alpha = 0;
        
        _this.sprite32 = _this.add.sprite(30, 420, '2rsNote_sp'); 
        _this.sprite32.alpha = 0;
        _this.sprite33 = _this.add.sprite(30, 430, '5rsNote_sp'); 
        _this.sprite33.alpha = 0;
        _this.sprite34 = _this.add.sprite(30, 440, '5rsNote_sp'); 
        _this.sprite34.alpha = 0;*/
    },
    gotomarketCloseUps1:function()
    {
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.nextArrow.events.onInputDown.removeAll();
        _this.nextArrow.destroy();
        _this.autoStand.destroy();
        _this.bg2.loadTexture('CmarketClsUp6_sp', 0, false);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();
            //_this.bg2.loadTexture('CmarketClsUp1_sp', 0, false);
            _this.gotoShoppingScene1();
        },_this);
    },
    gotomarketCloseUps2:function()
    {
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.nextArrow.events.onInputDown.removeAll();
        _this.nextArrow.destroy();
        _this.autoStand.destroy();
        _this.bg3.loadTexture('CmarketClsUp9_sp', 0, false);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();
            //_this.bg2.loadTexture('CmarketClsUp1_sp', 0, false);
            _this.gotoShoppingScene2();
        },_this);
    },
    gotomarketCloseUps3:function()
    {
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.nextArrow.events.onInputDown.removeAll();
        _this.nextArrow.destroy();
        _this.autoStand.destroy();
        _this.bg4.loadTexture('CmarketClsUp4_sp', 0, false);
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();
            //_this.bg2.loadTexture('CmarketClsUp1_sp', 0, false);
            _this.gotoShoppingScene3();
        },_this);
    },
    gotoShoppingScene1:function()
    {
        
        if(_this.item1type == 'kg')
            {
            _this.item1 = _this.convertToKm(_this.item1quantity);
                _this.carrotAns1 = _this.item1quantity;
                _this.inputBoxStandard = 1;
                _this.VoiceNumber = 5;
            }
        else 
            {
                _this.inputBoxStandard = 0;
                _this.VoiceNumber = 6;
                _this.item1 = _this.item1quantity;
                _this.carrotAns1 = _this.convertToKm(_this.item1quantity);
                if(_this.carrotAns1<1)
                    _this.carrotAns2 = _this.carrotAns1.toString().substring(1);
                else if(_this.carrotAns1==1.0)
                    _this.carrotAns2 = 1;
            }
        
        if(_this.item1quantity/750 == 1)
            {   
            _this.item1 = '3/4';
            _this.item1type = 'kg';
            _this.carrotAns1 = 750;
        }
        else if(_this.item1quantity[4]/500 == 1)
            {   
            _this.item1 = '1/2';
            _this.item1type = 'kg';
                _this.carrotAns1 = 500;
        }
        else if(_this.item1quantity[4]/250 == 1)
            {   
            _this.item1 = '1/4';
            _this.item1type = 'kg';
                _this.carrotAns1 = 250;
        }
        
        
        
       _this.bg2.loadTexture('commonBg', 0, false);
       _this.carrotToSell = _this.add.sprite(150,120,_this.itemArray1+'_sp');
        if(window.languageSelected == "English")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(315,200,'kg');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'gm');
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(370,195,'kg');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(325,245,'kg');
                
                _this.textForItemList.fontSize = 40;
            }
        else if(window.languageSelected == "Hindi")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(325,200,'कि.ग्रा');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'ग्रा');
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(390,195,'कि.ग्रा');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(335,245,'कि.ग्रा');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Kannada")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(325,200,'ಕೆಜಿ');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'ಗ್ರಾಂ');
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(390,195,'ಕೆಜಿ');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(335,245,'ಕೆಜಿ');
                
                _this.textForItemList.fontSize = 32;
            }
        else if(window.languageSelected == "Gujarati")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(325,200,'કિગ્રા');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'ગ્રા');
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(390,195,'કિગ્રા');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(335,245,'કિગ્રા');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Odiya")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(325,200,'କି.ଗ୍ରା');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'ଗ୍ରାମ');
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(390,195,'କି.ଗ୍ରା');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(335,245,'କି.ଗ୍ରା');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Tamil")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(325,200,'கி.கி');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'கி');
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(390,195,'கி.கி');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(335,245,'கி.கி');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Marathi")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(325,200,'किलो');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'ग्रॅम');
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(390,195,'किलो');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(335,245,'किलो');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Urdu")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(325,200,'کلوگرام');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'گرام'); 
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(390,195,'کلوگرام');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(335,245,'کلوگرام');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Telugu")
            {
                if(_this.itemArray1 == "carrot")
                    _this.textForItemList = _this.add.text(325,200,'కి.గ్రా');
                else if(_this.itemArray1 == "tomato")
                    _this.textForItemList = _this.add.text(400,185,'గ్రా');
                else if(_this.itemArray1 == "brinjal")
                    _this.textForItemList = _this.add.text(390,195,'కి.గ్రా');
                else if(_this.itemArray1 == "pumpkin")
                    _this.textForItemList = _this.add.text(335,245,'కి.గ్రా');
                

                _this.textForItemList.fontSize = 30;
            }
        
        
        
        
        _this.textForItemList.anchor.setTo(0.5);
        _this.textForItemList.font = 'myfont';
        _this.textForItemList.align = 'center';
        _this.textForItemList.fontWeight = 'bold';
        _this.textForItemList.angle = -10;
        _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();  
            _this.openListAutomatically = true;
            _this.greyItem1 = true;
            _this.greyItem2 = false;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
            //_this.inputBoxStandard = 0;
            _this.addNumberPad();
            
            _this.getVoice(_this.VoiceNumber);
        },_this);
    },
    gotoShoppingScene2:function()
    {
        
       _this.bg3.loadTexture('commonBg', 0, false);
       _this.carrotToSell.visible = true;
       _this.carrotToSell.loadTexture(_this.itemArray3+'_sp', 0, false);
       _this.carrotToSell.scale.setTo(0.9);
       _this.carrotToSell.x = 280;
        
        
        if(_this.item3type == 'kg')
            {
            _this.item3 = _this.convertToKm(_this.item3quantity);
                _this.candyAns1 = _this.item3quantity;
                _this.inputBoxStandard = 1;
                _this.VoiceNumber = 5;
            }
        else 
            {
                _this.inputBoxStandard = 0;
                _this.VoiceNumber = 6;
                _this.item3 = _this.item3quantity;
                _this.candyAns1 = _this.convertToKm(_this.item3quantity);
                if(_this.candyAns1<1)
                    _this.candyAns2 = _this.candyAns1.toString().substring(1);
                else if(_this.candyAns1==1.0)
                    _this.candyAns2 = 1;
            }
        
        if(_this.item3quantity/750 == 1)
            {   
            _this.item3 = '3/4';
            _this.item3type = 'kg';
            _this.candyAns1 = 750;
        }
        else if(_this.item3quantity/500 == 1)
            {   
            _this.item3 = '1/2';
            _this.item3type = 'kg';
                _this.candyAns1 = 500;
        }
        else if(_this.item3quantity/250 == 1)
            {   
            _this.item3 = '1/4';
            _this.item3type = 'kg';
                _this.candyAns1 = 250;
        }
        
        
        /*if(window.languageSelected == "English")
            {
                _this.textForItemList = _this.add.text(450,185,'Kg');
                _this.textForItemList.fontSize = 40;
            }
            else if(window.languageSelected == "Hindi")
                {
                    _this.textForItemList = _this.add.text(475,303,'ग्रा');
                    _this.textForItemList.fontSize = 30;
                }
            else if(window.languageSelected == "Kannada")
                {
                    _this.textForItemList = _this.add.text(485,300,'ಗ್ರಾಂ');
                    _this.textForItemList.fontSize = 30;
                }
            else if(window.languageSelected == "Gujarati")
                {
                    _this.textForItemList = _this.add.text(475,305,'ગ્રા');
                    _this.textForItemList.fontSize = 30;
                }
            else if(window.languageSelected == "Odiya")
                {
                    _this.textForItemList = _this.add.text(480,305,'ଗ୍ରାମ');
                    _this.textForItemList.fontSize = 30;
                }
            else if(window.languageSelected == "Tamil")
                {
                    _this.textForItemList = _this.add.text(475,305,'கி');
                    _this.textForItemList.fontSize = 30;
                }
            else if(window.languageSelected == "Marathi")
                {
                    _this.textForItemList = _this.add.text(475,305,'ग्रॅम');
                    _this.textForItemList.fontSize = 30;
                }
            else if(window.languageSelected == "Urdu")
                {
                    _this.textForItemList = _this.add.text(475,305,'گرام');
                    _this.textForItemList.fontSize = 30;
                }
            else if(window.languageSelected == "Telugu")
                {
                    _this.textForItemList = _this.add.text(475,305,'గ్రా');
                    _this.textForItemList.fontSize = 30;
                }*/
        
        if(window.languageSelected == "English")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(450,185,'kg');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'gm');
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(470,185,'kg');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,185,'gm');
                
                _this.textForItemList.fontSize = 40;
            }
        else if(window.languageSelected == "Hindi")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(460,190,'कि.ग्रा');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'ग्रा');
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(485,185,'कि.ग्रा');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,190,'ग्रा');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Kannada")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(460,190,'ಕೆಜಿ');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'ಗ್ರಾಂ');
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(485,185,'ಕೆಜಿ');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,190,'ಗ್ರಾಂ');
                
                _this.textForItemList.fontSize = 32;
            }
        else if(window.languageSelected == "Gujarati")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(460,190,'કિગ્રા');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'ગ્રા');
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(485,185,'કિગ્રા');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,190,'ગ્રા');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Odiya")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(460,190,'କି.ଗ୍ରା');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'ଗ୍ରାମ');
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(485,185,'କି.ଗ୍ରା');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,190,'ଗ୍ରାମ');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Tamil")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(460,190,'கி.கி');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'கி');
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(485,185,'கி.கி');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,190,'கி');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Marathi")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(460,190,'किलो');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'ग्रॅम');
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(485,185,'किलो');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,190,'ग्रॅम');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Urdu")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(460,190,'کلوگرام');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'گرام'); 
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(485,185,'کلوگرام');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,190,'گرام'); 
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Telugu")
            {
                if(_this.itemArray3 == "rice")
                    _this.textForItemList = _this.add.text(460,190,'కి.గ్రా');
                else if(_this.itemArray3 == "peanuts")
                    _this.textForItemList = _this.add.text(490,180,'గ్రా');
                else if(_this.itemArray3 == "flour")
                    _this.textForItemList = _this.add.text(485,185,'కి.గ్రా');
                else if(_this.itemArray3 == "chilly")
                    _this.textForItemList = _this.add.text(460,190,'గ్రా');
                

                _this.textForItemList.fontSize = 30;
            }
        
        _this.textForItemList.anchor.setTo(0.5);
        _this.textForItemList.font = 'myfont';
        _this.textForItemList.align = 'center';
        _this.textForItemList.fontWeight = 'bold';
        _this.textForItemList.angle = -10;
       _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();  
            _this.openListAutomatically = true;
            _this.greyItem4 = true;
            _this.greyItem5 = false;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
            //_this.inputBoxStandard = 0;
            _this.addNumberPad();
            //_this.VoiceNumber = 6;
            _this.getVoice(_this.VoiceNumber);
        },_this);
    },
    gotoShoppingScene3:function()
    {
       _this.bg4.loadTexture('commonBg', 0, false);
       _this.carrotToSell.visible = true;
       _this.carrotToSell.loadTexture(_this.itemArray5+'_sp', 0, false);
       _this.carrotToSell.scale.setTo(0.9);
       _this.carrotToSell.x = 280;
        
        
        if(_this.item5type == 'l')
            {
            _this.item5 = _this.convertToKm(_this.item5quantity);
                _this.oilAns1 = _this.item5quantity;
                _this.inputBoxStandard = 5;
                _this.VoiceNumber = 9;
            }
        else 
            {
                _this.inputBoxStandard = 4;
                _this.VoiceNumber = 8;
                _this.item5 = _this.item5quantity;
                _this.oilAns1 = _this.convertToKm(_this.item5quantity);
                if(_this.oilAns1<1)
                    _this.oilAns2 = _this.oilAns1.toString().substring(1);
                else if(_this.oilAns1==1.0)
                    _this.oilAns2 = 1;
            }
        
        if(_this.item5quantity/750 == 1)
            {   
            _this.item5 = '3/4';
            _this.item5type = 'l';
                _this.inputBoxStandard = 5;
                _this.VoiceNumber = 9;
            _this.oilAns1 = 750;
        }
        else if(_this.item5quantity/500 == 1)
            {   
            _this.item5 = '1/2';
            _this.item5type = 'l';
                _this.inputBoxStandard = 5;
                _this.VoiceNumber = 9;
                _this.oilAns1 = 500;
        }
        else if(_this.item5quantity/250 == 1)
            {   
            _this.item5 = '1/4';
            _this.item5type = 'l';
                _this.inputBoxStandard = 5;
                _this.VoiceNumber = 9;
                _this.oilAns1 = 250;
        }
        
        
         if(window.languageSelected == "English")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'l');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,390,'ml');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'ml');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'l');
                
                _this.textForItemList.fontSize = 40;
            }
        else if(window.languageSelected == "Hindi")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'ली');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,395,'मि.ली');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'मि.ली');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'ली');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Kannada")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'ಲೀ');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,395,'ಮಿ.ಲೀ');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'ಮಿ.ಲೀ');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'ಲೀ');
                
                _this.textForItemList.fontSize = 32;
            }
        else if(window.languageSelected == "Gujarati")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'લી');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,395,'મિલી');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'મિલી');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'લી');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Odiya")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'ଲି');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,395,'ମି.ଲି');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'ମି.ଲି');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'ଲି');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Tamil")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'லி');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,395,'மி.லி');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'மி.லி');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'லி');

                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Marathi")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'ली');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,395,'मि.ली');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'मि.ली');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'ली');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Urdu")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'لیٹر');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,395,'ملی لیٹر');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'ملی لیٹر');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'لیٹر');
                
                _this.textForItemList.fontSize = 30;
            }
        else if(window.languageSelected == "Telugu")
            {
                if(_this.itemArray5 == "lampOil")
                    _this.textForItemList = _this.add.text(470,360,'లీ');
                else if(_this.itemArray5 == "sunflowerOil")
                    _this.textForItemList = _this.add.text(480,395,'మి.లీ');
                else if(_this.itemArray5 == "milkPacket")
                    _this.textForItemList = _this.add.text(490,190,'మి.లీ');
                else if(_this.itemArray5 == "iceCreamTub")
                    _this.textForItemList = _this.add.text(460,190,'లీ');
                

                _this.textForItemList.fontSize = 30;
            }
        _this.textForItemList.anchor.setTo(0.5);
        _this.textForItemList.font = 'myfont';
        _this.textForItemList.align = 'center';
        _this.textForItemList.fontWeight = 'bold';
        _this.textForItemList.angle = -10;
        
       _this.nextArrow = _this.add.sprite(780,380,'nextArrow_sp');
        _this.nextArrow.inputEnabled = true;
        _this.nextArrow.input.useHandCursor = true;
        _this.nextArrow.events.onInputDown.add(function(){
            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
            _this.nextArrow.events.onInputDown.removeAll();
            _this.nextArrow.destroy();  
            _this.openListAutomatically = true;
            _this.greyItem7 = true;
            _this.greyItem8 = false;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
            
            //_this.inputBoxStandard = 5;
            _this.addNumberPad();
            //_this.VoiceNumber = 9;
            _this.getVoice(_this.VoiceNumber);
        },_this);
    },
    checkOverlap:function(spriteA, spriteB) 
    {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX-30, 12, 'sg7_1_2starAnim');
            
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=15;
                    _this.starsGroup.getChildAt(i).x+=15;
                }
            }
        }                       
    },
    getVoice:function(value){
         _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch(value)
           {
                    
                    
                case 1: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5d.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5d.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5d.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5d.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5d.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5d.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5d.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5d.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5d.mp3");
                            }
                            break;
                case 2: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5i.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5i.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5i.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5i.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5i.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5i.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5i.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5i.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5i.mp3");
                            }
                            break;
                case 3: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5e.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5e.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5e.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5e.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5e.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5e.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5e.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5e.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5e.mp3");
                            }
                            break;
                case 4: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5c.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5c.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5c.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5c.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5c.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5c.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5c.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5c.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5c.mp3");
                            }
                            break;
                case 5: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5j.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5j.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5j.mp3");
                            }
                       else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5j.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5j.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5j.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5j.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5j.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5j.mp3");
                            }
                            break;
                case 6: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5f.mp3");
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5f.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5f.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5f.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5f.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5f.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5f.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5f.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5f.mp3");
                            }
                            break;
                case 7: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5k.mp3");
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5k.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5k.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5k.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5k.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5k.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5k.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5k.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5k.mp3");
                            }
                            break;
                case 8: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5m.mp3");
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5m.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5m.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5m.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5m.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5m.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5m.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5m.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5m.mp3");
                            }
                            break;
                case 9: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5l.mp3");
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5l.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5l.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5l.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5l.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5l.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5l.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5l.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5l.mp3");
                            }
                            break;
                case 10: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5n.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5n.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5n.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5n.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5n.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5n.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5n.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5n.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5n.mp3");
                            }
                            break;
                case 11: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5h.mp3");
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5h.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5h.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5h.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5h.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5h.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5h.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5h.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5h.mp3");
                            }
                            break;
                case 12: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5o.mp3");
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5o.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5o.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5o.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5o.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5o.mp3");
                            } 
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5o.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5o.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5o.mp3");
                            }
                            break;
                case 13: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5g.mp3");
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5g.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5g.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5g.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5g.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5g.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5g.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5g.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5g.mp3");
                            }
                            break;
                case 14: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5p.mp3");
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5p.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5p.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5p.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5p.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5p.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5p.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5p.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5p.mp3");
                            }
                            break;
                case 15: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5q.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5q.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5q.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5q.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5q.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5q.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5q.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5q.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5q.mp3");
                            }
                            break;
                case 16: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5a.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5a.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5a.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5a.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5a.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5a.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5a.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5a.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5a.mp3");
                            }
                            break;
                case 17: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/English/MCON1.4_5b.mp3");
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Hindi/MCON1.4_5b.mp3");
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Kannada/MCON1.4_5b.mp3");
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Gujarati/MCON1.4_5b.mp3");
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Odiya/MCON1.4_5b.mp3");
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Tamil/MCON1.4_5b.mp3");
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Telugu/MCON1.4_5b.mp3");
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Marathi/MCON1.4_5b.mp3");
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/shoppingGame/Urdu/MCON1.4_5b.mp3");
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
addTextToInputBox:function(value)
    {
        //alert(value);
        switch(value)
            {
                case 0:  if(window.languageSelected == "English")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'kg');
                                _this.inputBoxText.fontSize = 30;
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'कि.ग्रा');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ಕೆಜಿ');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'કિગ્રા');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'କି.ଗ୍ରା');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'கி.கி');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'किलो');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'کلوگرام');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'కి.గ్రా');
                                _this.inputBoxText.fontSize = 25;
                            }
                        break;
                case 1:  if(window.languageSelected == "English")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'gm');
                                _this.inputBoxText.fontSize = 30;
                            }
                         else if(window.languageSelected == "Hindi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ग्राम');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ಗ್ರಾಂ');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ગ્રા');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ଗ୍ରାମ');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'கி');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ग्रॅम');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'گرام');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'గ్రా');
                                _this.inputBoxText.fontSize = 25;
                            }
                        break;
                case 2:  if(window.languageSelected == "English")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'m');
                                _this.inputBoxText.fontSize = 30;
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'मि');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ಮೀ');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'મી');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ମି');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'மி');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'मी');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'میٹر');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'మీ');
                                _this.inputBoxText.fontSize = 25;
                            }
                        break;
                case 3:  if(window.languageSelected == "English")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'km');
                                _this.inputBoxText.fontSize = 30;
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'कि.मि');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ಕಿ.ಮೀ');
                                _this.inputBoxText.fontSize = 22;
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'કિ.મી');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'କି.ମି');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'கி.மீ');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'किमी');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'کلومیٹر');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'కి.మీ');
                                _this.inputBoxText.fontSize = 23;
                            }
                        break;
                case 4:  if(window.languageSelected == "English")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'l');
                                _this.inputBoxText.fontSize = 30;
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ली');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ಲೀ');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'લી');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ଲି');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'லி');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ली');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'لیٹر');
                                _this.inputBoxText.fontSize = 25;
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'లీ');
                                _this.inputBoxText.fontSize = 25;
                            }
                        break;
                case 5:  if(window.languageSelected == "English")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ml');
                                _this.inputBoxText.fontSize = 30;
                            }
                        else if(window.languageSelected == "Hindi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'मि.ली');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Kannada")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ಮಿ.ಲೀ');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Gujarati")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'મિલી');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Odiya")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ମି.ଲି');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Tamil")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'மி.லி');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Marathi")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'मि.ली');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Urdu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'ملی لیٹر');
                                _this.inputBoxText.fontSize = 23;
                            }
                        else if(window.languageSelected == "Telugu")
                            {
                                _this.inputBoxText = _this.add.text(195,50,'మి.లీ');
                                _this.inputBoxText.fontSize = 23;
                            }
                        break;
                        
            }
      _this.inputBoxText.anchor.setTo(0.5);
      _this.inputBoxText.font = 'myfont';
      _this.inputBoxText.align = 'center';
      _this.inputBoxText.fontWeight = 'normal';
      //_this.inputBoxText.fontSize = 30;
        
     _this.tween3 = _this.add.tween(_this.inputBoxText);
     _this.tween3.to({ y: 95 }, 1000, 'Linear', true, 0);
          
    },
    
    
addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,510,'numbg');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
        _this.textBoxGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
    
        _this.inputBox = this.add.sprite(0,46,'inputBox_sp');
        //_this.inputBoxStandard = 2;
        _this.addTextToInputBox(_this.inputBoxStandard);
        _this.inputBox.name = 'txtbox';
    
        //objGroup = this.add.group();
        _this.x = 70;
        for(var i=0;i<11;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,510,'numpadNum');  
            _this.numbg.scale.setTo(0.9,0.9);
            _this.numbg.anchor.setTo(0.5);
            if(i<9)
                _this.numbg.name = i+1;
            else if(i<10)
                 _this.numbg.name = 0;
            else
                {
                 _this.numbg.name = '.';
                }
            _this.numbg.frame = i;
            
            /*_this.numTxt = this.add.text(-2,1);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Oh Whale';
            _this.numTxt.fontSize = 45;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#000000';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild( _this.numTxt);*/
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
        _this.eraser = _this.numGroup.create(_this.x+20,510,'erase');
        _this.eraser.anchor.setTo(0.5);
        //_this.eraser.scale.setTo(0.5);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        _this.enterTxt = this.add.text(90,50, _this.selectedAns);
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = 'myfont';
        _this.enterTxt.fontSize = 40;
            //text.fontWeight = 'bold';
        _this.enterTxt.fill = '#65B4C3';

        _this.enterTxt.setShadow(0, 0,'Level43A_rgba(0, 0, 0, 0)', 0);
        _this.inputBox.addChild(_this.enterTxt);
        
        _this.textBoxGroup.add(_this.inputBox);
    
        _this.rightbtn = _this.numGroup.create(_this.x+80,510,'rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "eraser";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
             _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.eraser.frame = 1;
             _this.enterTxt.setText("");
             _this.selectedAns="";
             _this.time.events.add(500, function(){
                 _this.eraser.frame = 0;                                                
             }, _this);
             
         },this);
        
         _this.rightbtn.events.onInputDown.add(function(target){

            _this.clickSound = _this.add.audio('ClickSound');
             _this.clickSound.play();
             _this.rightbtn.frame = 1;
             _this.time.events.add(500, function(){
                 _this.rightbtn.frame = 0;                                 
             }, _this);
             console.log("selected "+ _this.selectedAns,_this.autoRide2Ans1,_this.autoRide2Ans2,_this.autoRide3Ans,_this.carrotAns1,_this.carrotAns2,_this.bananaAns,_this.candyAns1,_this.candyAns2,_this.jalebiAns);
             
            if((_this.selectedAns == _this.autoRide1Ans1) || (_this.selectedAns == _this.autoRide1Ans2))  
                {
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.autoRide1Ans1 = 'qqq';
                         _this.autoRide1Ans2 = 'qqq';
                         _this.moveAuto1SlideRightToLeft();
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.moveBgToleft = true;
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                         //_this.carrotAns = '0.2';
                         //_this.carrotAns1 = '.2';
                     },_this);
                }
             else if((_this.selectedAns == _this.carrotAns1)||(_this.selectedAns == _this.carrotAns2))  
                {
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.carrotAns1 = 'qqq'
                         _this.carrotAns2 = 'qqq'
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                         _this.billValue = _this.itemArray1;
                         
                         _this.showBillMachine(_this.billValue);
                     },_this);
                }
             else if((_this.selectedAns == _this.bananaAns1)||(_this.selectedAns == _this.bananaAns2))  
                {
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.bananaAns1 = 'qqq';
                         _this.bananaAns2 = 'qqq';
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                         _this.billValue = _this.itemArray2;
                         
                         _this.showBillMachine(_this.billValue);
                     },_this);
                }
             else if((_this.selectedAns == _this.autoRide2Ans1) || (_this.selectedAns == _this.autoRide2Ans2))    
                {
                    
                    //alert('yo');
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.autoRide2Ans1 = 'qqq';
                         _this.autoRide2Ans2 = 'qqq';
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                          
                         _this.moveAuto2SlideRightToLeft();
                     },_this);
                }
             else if((_this.selectedAns == _this.candyAns1)||(_this.selectedAns == _this.candyAns2))  
                {
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.candyAns1 = 'qqq';
                         _this.candyAns2 = 'qqq';
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                         _this.billValue = _this.itemArray3;
                         //_this.jalebiAns = '250';
                         
                         _this.showBillMachine(_this.billValue);
                     },_this);
                }
             else if((_this.selectedAns == _this.jalebiAns1) || (_this.selectedAns == _this.jalebiAns2))  
                {
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.jalebiAns1 = 'qqq';
                         _this.jalebiAns2 = 'qqq';
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                         _this.billValue = _this.itemArray4;
                         //_this.autoRide3Ans = '1.5';
        
                         _this.showBillMachine(_this.billValue);
                     },_this);
                }
             else if((_this.selectedAns == _this.autoRide3Ans1) || (_this.selectedAns == _this.autoRide3Ans2))
                {
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.autoRide3Ans1 = 'qqq';
                         _this.autoRide3Ans2 = 'qqq';
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                        // _this.oilAns = '500';
                         _this.moveAuto3SlideRightToLeft();
                     },_this);
                }
             else if((_this.selectedAns == _this.oilAns1) || (_this.selectedAns == _this.oilAns2))  
                {
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.oilAns1 = 'qqq';
                         _this.oilAns2 = 'qqq';
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                         _this.billValue = _this.itemArray5;
                         //_this.autoRide4Ans = '6000';
                         //alert(_this.billValue);
                         _this.showBillMachine(_this.billValue);
                     },_this);
                }
              else if((_this.selectedAns == _this.autoRide4Ans1) || (_this.selectedAns == _this.autoRide4Ans2)) 
                {
                    target.events.onInputDown.removeAll();
                     _this.tween1 = _this.add.tween(_this.textBoxGroup);
                     _this.tween1.to({ y: -150 }, 2000, 'Linear', true, 0);
                     _this.tween = _this.add.tween(_this.numGroup);
                     _this.tween.to({ y: 100 }, 2000, 'Linear', true, 0);
                     _this.tween3 = _this.add.tween(_this.inputBoxText);
                     _this.tween3.to({ y: -15 }, 1500, 'Linear', true, 0);
                     _this.tween.onComplete.add(function(){
                         _this.autoRide3Ans = '111';
                         _this.enterTxt.setText("");
                         _this.selectedAns="";
                         _this.numGroup.destroy();
                         _this.textBoxGroup.destroy();
                         _this.moveAutoSlideLeftToRight();
                     },_this);
                }
             else
                 {
                     _this.shake.shake(10, _this.textBoxGroup);
                     _this.wmusic = this.add.audio('waudio');
                    _this.wmusic.play(); 
                     _this.enterTxt.setText("");
                     _this.selectedAns="";
                     _this.noofAttempts++;
                 }
        },this);
       
        
            _this.numGroup.y = 50;
            _this.textBoxGroup.y = -50;
            _this.displayNopad = false;
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
            _this.tween1 = _this.add.tween(_this.textBoxGroup);
            _this.tween1.to({ y: 0 }, 0, 'Linear', true, 0);
            
        
        
    },
    moveAuto1SlideRightToLeft:function()
    {
        //alert("here1");
        _this.moveBgToleft = true;
        _this.moveBgToleft1 = false;
        _this.moveBgToleft2 = false;
        _this.moveBgToRight2 = false;
        
        _this.greyItem1 = true;
        _this.greyItem2 = false;
        _this.openListAutomatically = false;  commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
        
        _this.bg1.loadTexture('0AstreetBlur4_sp', 0, false);
        _this.bg2.loadTexture('0BmarketBlur4_sp', 0, false);
        _this.autoStandAnim =  _this.autoStand.animations.add('auto');
		_this.autoStandAnim.play(10,true);
        _this.autoSound = _this.add.audio('autoSound');
        _this.autoSound.play();
    },
    moveAuto2SlideRightToLeft:function()
    {
        //alert("here2");
        _this.moveBgToleft = false;
        _this.moveBgToleft1 = false;
        _this.moveBgToleft2 = false;
        _this.moveBgToRight2 = false;
        _this.greyItem4 = true;
        _this.greyItem5 = false;
        _this.openListAutomatically = false; 
        commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
        
        //_this.bg1.loadTexture('0AstreetBlur4_sp', 0, false);
        //_this.bg2.loadTexture('0BmarketBlur4_sp', 0, false);
        _this.autoStandAnim =  _this.autoStand.animations.add('auto');
		_this.autoStandAnim.play(10,true);
         _this.autoSound = _this.add.audio('autoSound');
        _this.autoSound.play();
        _this.bg2.loadTexture('0BmarketBlur4_sp', 0, false);
         _this.moveBgToleft1 = true;
    },
    moveAuto3SlideRightToLeft:function()
    {
        //alert("here3");
        _this.moveBgToleft = false;
        _this.moveBgToleft1 = false;
        _this.moveBgToleft2 = false;
        _this.moveBgToRight2 = false;
        _this.greyItem6 = true;
        _this.greyItem7 = false;
        _this.openListAutomatically = false; 
        commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
        
        //_this.bg1.loadTexture('0AstreetBlur4_sp', 0, false);
        //_this.bg2.loadTexture('0BmarketBlur4_sp', 0, false);
        _this.autoStandAnim =  _this.autoStand.animations.add('auto');
		_this.autoStandAnim.play(10,true);
         _this.autoSound = _this.add.audio('autoSound');
        _this.autoSound.play();
        _this.bg3.loadTexture('0BmarketBlur5_sp', 0, false);
        _this.moveBgToleft2 = true;
    },
    moveAutoSlideLeftToRight:function()
    {
        //alert("error");
        _this.moveBgToleft = false;
        _this.moveBgToleft1 = false;
        _this.moveBgToleft2 = false;
        _this.moveBgToRight2 = false;
        _this.greyItem8 = true;
        _this.greyItem9 = false;
        _this.openListAutomatically = false; 
        commonNavBarConversion.showListWhenClicked(_this.greyItem1,_this.greyItem2,_this.greyItem3,_this.greyItem4,_this.greyItem5,_this.greyItem6,_this.greyItem7,_this.greyItem8,_this.greyItem9,_this.openListAutomatically);
        
        //_this.bg1.loadTexture('0AstreetBlur4_sp', 0, false);
        //_this.bg2.loadTexture('0BmarketBlur4_sp', 0, false);
        _this.autoStandAnim =  _this.autoStand.animations.add('auto');
		_this.autoStandAnim.play(10,true);
        _this.autoSound = _this.add.audio('autoSound');
        _this.autoSound.play();
        /* _this.bg1 = _this.add.sprite(-2880,0,'0AstreetBlur4_sp');
         _this.bg2 = _this.add.sprite(-1920,0,'0BmarketBlur4_sp');
         _this.bg3 = _this.add.sprite(-960,0,'0BmarketBlur5_sp');*/
        _this.bg1.loadTexture('0AstreetBlur4_sp', 0, false);
        _this.bg1.x =-2880; 
        _this.bg2.loadTexture('0BmarketBlur4_sp', 0, false);
        _this.bg2.x =-1920; 
        _this.bg3.loadTexture('0BmarketBlur5_sp', 0, false);
        _this.bg3.x =-960;
        _this.bg4.loadTexture('0BmarketBlur3_sp', 0, false);
        _this.moveBgToRight2 = true;
    },
    showBillMachine:function(billValue)
    {
        console.log(billValue);
        _this.billMachineDisplayed = true;
        commonNavBarConversion.removeListFromScreen();
        _this.VoiceNumber = 13;
        _this.billMachine = _this.add.sprite(270,120,'billMachine_sp');
        switch(billValue[0])
            {
                case 'carrot':  
                    _this.receiptItemText = _this.add.sprite(385,375,'carrotImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹20/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item1Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item1Rate+'.00');
                                _this.itemsRate = _this.item1Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.showHandnsignalToPay();
                                _this.displayPayingNotes(_this.amount1);
                                _this.amounts = _this.amount1;
                                break;
                    case 'tomato':  
                    _this.receiptItemText = _this.add.sprite(385,375,'tomatoImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹80/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item1Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item1Rate+'.00');
                                _this.itemsRate = _this.item1Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.showHandnsignalToPay();
                                _this.displayPayingNotes(_this.amount1);
                                _this.amounts = _this.amount1;
                                break;
                    case 'brinjal':  
                    _this.receiptItemText = _this.add.sprite(385,370,'brinjalImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item1Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item1Rate+'.00');
                                _this.itemsRate = _this.item1Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.showHandnsignalToPay();
                                _this.displayPayingNotes(_this.amount1);
                                _this.amounts = _this.amount1;
                                break;
                    case 'pumpkin':  
                    _this.receiptItemText = _this.add.sprite(385,375,'pumpkinImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item1type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item1+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item1Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item1Rate+'.00');
                                _this.itemsRate = _this.item1Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.showHandnsignalToPay();
                                _this.displayPayingNotes(_this.amount1);
                                _this.amounts = _this.amount1;
                                break;
                    case 'apple':  _this.receiptItemText = _this.add.sprite(385,375,'appleImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item2Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item2Rate+'.00');
                                _this.itemsRate = _this.item2Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount2);
                                _this.amounts = _this.amount2;
                                break;
                    case 'banana':  _this.receiptItemText = _this.add.sprite(385,375,'bananaImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item2Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item2Rate+'.00');
                                _this.itemsRate = _this.item2Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount2);
                                _this.amounts = _this.amount2;
                                break;
                    case 'pineapple':  _this.receiptItemText = _this.add.sprite(385,375,'pineappleImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item2Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item2Rate+'.00');
                                _this.itemsRate = _this.item2Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount2);
                                _this.amounts = _this.amount2;
                                break;
                    case 'watermelon':  _this.receiptItemText = _this.add.sprite(385,375,'watermelonImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item2type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item2+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹100/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item2Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item2Rate+'.00');
                                _this.itemsRate = _this.item2Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount2);
                                _this.amounts = _this.amount2;
                                break;
                    case 'rice':  _this.receiptItemText = _this.add.sprite(385,375,'riceImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item3Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item3Rate+'.00');
                                _this.itemsRate = _this.item3Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount3);
                                _this.amounts = _this.amount3;
                                break;
                    case 'flour':  _this.receiptItemText = _this.add.sprite(385,375,'flourImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹120/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item3Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item3Rate+'.00');
                                _this.itemsRate = _this.item3Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount3);
                                _this.amounts = _this.amount3;
                                break;
                    case 'peanuts':  _this.receiptItemText = _this.add.sprite(385,375,'peanutsImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹140/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item3Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item3Rate+'.00');
                                _this.itemsRate = _this.item3Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount3);
                                _this.amounts = _this.amount3;
                                break;
                    case 'chilly':  _this.receiptItemText = _this.add.sprite(385,375,'chillyImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item3type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item3+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item3Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item3Rate+'.00');
                                _this.itemsRate = _this.item3Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount3);
                                _this.amounts = _this.amount3;
                                break;
                    
                    case 'laddu':  _this.receiptItemText = _this.add.sprite(385,375,'ladduImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item4Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item4Rate+'.00');
                                _this.itemsRate = _this.item4Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount4);
                                _this.amounts = _this.amount4;
                                break;
                    case 'jalebi':  _this.receiptItemText = _this.add.sprite(385,375,'jalebiImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item4Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item4Rate+'.00');
                                _this.itemsRate = _this.item4Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount4);
                                _this.amounts = _this.amount4;
                                break;
                    case 'candy':  _this.receiptItemText = _this.add.sprite(385,375,'jalebiImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item4Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item4Rate+'.00');
                                _this.itemsRate = _this.item4Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount4);
                                _this.amounts = _this.amount4;
                                break;
                    case 'burfi':  _this.receiptItemText = _this.add.sprite(385,375,'burfiImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' kg');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/Kg');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' gm');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/Kg');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' कि.ग्रा');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/कि.ग्रा');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ग्राम');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/कि.ग्रा');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ಕೆಜಿ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ಕೆಜಿ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ಗ್ರಾಂ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ಕೆಜಿ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' કિગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/કિગ્રા');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ગ્રા');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/કિગ્રા');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' କି.ଗ୍ରା');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/କି.ଗ୍ରା');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ଗ୍ରାମ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/କି.ଗ୍ରା');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' கி.கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/கி.கி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' கி');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/கி.கி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' किलो');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/किलो');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' ग्रॅम');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/किलो');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' کلوگرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/کلوگرام');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' گرام');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/کلوگرام');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item4type == 'kg')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' కి.గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/కి.గ్రా');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item4+' గ్రా');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/కి.గ్రా');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item4Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item4Rate+'.00');
                                _this.itemsRate = _this.item4Rate;
                                _this.getVoice(_this.VoiceNumber);
                                _this.displayPayingNotes(_this.amount4);
                                _this.amounts = _this.amount4;
                                break;
                    case 'lampOil':  _this.receiptItemText = _this.add.sprite(385,375,'lampOilImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' l');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/l');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ml');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/l');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' मी');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ली');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ली');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ಲೀ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ಲೀ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ಮಿ.ಲೀ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ಲೀ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' લી');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/લી');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' મિલી');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/કલી');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ଲି');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ଲି');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ମି.ଲି');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ଲି');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' லி');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/லி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' மி.லி');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/லி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/ली');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' मि.ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/कली');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' لیٹر');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/لیٹر');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ملی لیٹر');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/لیٹر');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' లీ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/లీ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' మి.లీ');
                                            _this.fullRateText = _this.add.text(640,405,'₹60/లీ');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item5Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item5Rate+'.00');
                                _this.itemsRate = _this.item5Rate;
                                _this.getVoice(_this.VoiceNumber);
                                if(_this.moneyExchanged)
                                {
                                    _this.displayPayingNotes(_this.amountAfterExchange);
                                    _this.amounts = _this.amountAfterExchange;
                                }
                                else
                                {
                                    _this.displayPayingNotes(_this.amount5);
                                    _this.amounts = _this.amount5;
                                }
                                break;
                case 'sunflowerOil':  _this.receiptItemText = _this.add.sprite(385,375,'sunfloweroilImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' l');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/l');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ml');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/l');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' मी');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ली');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ली');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ಲೀ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ಲೀ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ಮಿ.ಲೀ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ಲೀ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' લી');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/લી');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' મિલી');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/કલી');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ଲି');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ଲି');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ମି.ଲି');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ଲି');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' லி');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/லி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' மி.லி');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/லி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/ली');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' मि.ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/कली');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' لیٹر');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/لیٹر');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ملی لیٹر');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/لیٹر');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' లీ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/లీ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' మి.లీ');
                                            _this.fullRateText = _this.add.text(640,405,'₹160/లీ');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item5Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item5Rate+'.00');
                                _this.itemsRate = _this.item5Rate;
                                _this.getVoice(_this.VoiceNumber);
                                if(_this.moneyExchanged)
                                {
                                    _this.displayPayingNotes(_this.amountAfterExchange);
                                    _this.amounts = _this.amountAfterExchange;
                                }
                                else
                                {
                                    _this.displayPayingNotes(_this.amount5);
                                    _this.amounts = _this.amount5;
                                }
                                break;
                    case 'milkPacket':  _this.receiptItemText = _this.add.sprite(385,375,'milkPacketImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' l');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/l');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ml');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/l');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' मी');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ली');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ली');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ಲೀ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ಲೀ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ಮಿ.ಲೀ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ಲೀ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' લી');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/લી');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' મિલી');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/કલી');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ଲି');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ଲି');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ମି.ଲି');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ଲି');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' லி');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/லி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' மி.லி');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/லி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/ली');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' मि.ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/कली');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' لیٹر');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/لیٹر');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ملی لیٹر');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/لیٹر');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' లీ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/లీ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' మి.లీ');
                                            _this.fullRateText = _this.add.text(640,405,'₹40/లీ');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item5Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item5Rate+'.00');
                                _this.itemsRate = _this.item5Rate;
                                _this.getVoice(_this.VoiceNumber);
                                if(_this.moneyExchanged)
                                {
                                    _this.displayPayingNotes(_this.amountAfterExchange);
                                    _this.amounts = _this.amountAfterExchange;
                                }
                                else
                                {
                                    _this.displayPayingNotes(_this.amount5);
                                    _this.amounts = _this.amount5;
                                }
                                break;
                    case 'iceCreamTub':  _this.receiptItemText = _this.add.sprite(385,375,'iceCreamTubImg_sp');
                                if(window.languageSelected == "English")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' l');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/l');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ml');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/l');
                                        }
                                    }
                                else if(window.languageSelected == "Hindi")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' मी');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ली');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ली');
                                        }                                         
                                    }
                                else if(window.languageSelected == "Kannada")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ಲೀ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ಲೀ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ಮಿ.ಲೀ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ಲೀ');
                                        }   

                                    }
                                else if(window.languageSelected == "Gujarati")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' લી');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/લી');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' મિલી');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/કલી');
                                        }   
                                        
                                    }
                                else if(window.languageSelected == "Odiya")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ଲି');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ଲି');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ମି.ଲି');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ଲି');
                                        } 

                                    }
                                else if(window.languageSelected == "Tamil")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' லி');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/லி');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' மி.லி');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/லி');
                                        } 

                                    }
                                else if(window.languageSelected == "Marathi")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/ली');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' मि.ली');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/कली');
                                        } 
                                        
                                    }
                                else if(window.languageSelected == "Urdu")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' لیٹر');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/لیٹر');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' ملی لیٹر');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/لیٹر');
                                        } 

                                    }
                                else if(window.languageSelected == "Telugu")
                                    {
                                        if(_this.item5type == 'l')
                                        {
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' లీ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/లీ');
                                        }
                                        else{
                                            _this.receiptQuantText = _this.add.text(415,415,_this.item5+' మి.లీ');
                                            _this.fullRateText = _this.add.text(640,405,'₹180/లీ');
                                        } 
                                       
                                    }
                                
                                _this.itemRateText = _this.add.text(750,405,_this.item5Rate+'.00');
                                _this.itemRateTextBig = _this.add.text(680,185,'₹'+_this.item5Rate+'.00');
                                _this.itemsRate = _this.item5Rate;
                                _this.getVoice(_this.VoiceNumber);
                                if(_this.moneyExchanged)
                                {
                                    _this.displayPayingNotes(_this.amountAfterExchange);
                                    _this.amounts = _this.amountAfterExchange;
                                }
                                else
                                {
                                    _this.displayPayingNotes(_this.amount5);
                                    _this.amounts = _this.amount5;
                                }
                                break;
            }
         //_this.carrotToSell.destroy();
        if(_this.carrotToSell)
          _this.carrotToSell.visible =false;
         if(_this.textForItemList)
             _this.textForItemList.destroy();
        
     /* _this.receiptItemText.anchor.setTo(0.5);
      _this.receiptItemText.font = 'myfont';
      _this.receiptItemText.align = 'center';
      _this.receiptItemText.fontWeight = 'normal';
      _this.receiptItemText.fontSize = 25;
      _this.receiptItemText.fill = '#000000';*/
        
     
      _this.receiptQuantText.anchor.setTo(0.5);
      _this.receiptQuantText.font = 'myfont';
      _this.receiptQuantText.align = 'center';
      _this.receiptQuantText.fontWeight = 'normal';
      _this.receiptQuantText.fontSize = 25;
      _this.receiptQuantText.fill = '#000000';
        
      
      _this.fullRateText.anchor.setTo(0.5);
      _this.fullRateText.font = 'myfont';
      _this.fullRateText.align = 'center';
      _this.fullRateText.fontWeight = 'normal';
      _this.fullRateText.fontSize = 30;
      _this.fullRateText.fill = '#ffffff';
      
      _this.itemRateText.anchor.setTo(0.5);
      _this.itemRateText.font = 'myfont';
      _this.itemRateText.align = 'center';
      _this.itemRateText.fontWeight = 'normal';
      _this.itemRateText.fontSize = 30;
      _this.itemRateText.fill = '#ffffff';
        
      _this.itemRateTextBig.anchor.setTo(0.5);
      _this.itemRateTextBig.font = 'myfont';
      _this.itemRateTextBig.align = 'center';
      _this.itemRateTextBig.fontWeight = 'normal';
      _this.itemRateTextBig.fontSize = 50;
      _this.itemRateTextBig.fill = '#ffffff';
        
        
        //_this.displayPayingNotes();
        
    },
    showHandnsignalToPay:function()
    {
        _this.handShow2 = _this.add.sprite(750, 200, 'hand_sp');
        _this.tween = _this.add.tween(_this.handShow2);
        _this.tween.to({ x:870,y:100  }, 1000, 'Linear', true, 0);
         _this.tween.onComplete.add(function(){
              _this.tween = _this.add.tween(_this.handShow2);
             _this.tween.to({ x:80,y:330  }, 1000, 'Linear', true, 0);
             _this.tween.onComplete.add(function(){
                 _this.time.events.add(500, function(){
                   _this.handShow2.destroy();
                     _this.handShow2 = null;
                },_this);
            },_this);
         },_this);
    },
    displayPayingNotes:function(amount)
    {
        //alert(amount);
        _this.enableWalletDrag = true;
        _this.graphics = _this.add.graphics(30, 150);
        _this.graphics.lineStyle(1, 0xFFFFFF, 0.8);
        _this.graphics.beginFill(0xFF700B, 1);
        _this.graphics.drawRect(0,0,200,330);		
        _this.graphics.boundsPadding = 0;
        _this.graphics.alpha = 0;
        
        
        /*_this.notesGroup200.inputEnableChildren = false;
        _this.notesGroup100.inputEnableChildren = false;
        _this.notesGroup50.inputEnableChildren = false;
        _this.notesGroup20.inputEnableChildren = false;
        _this.notesGroup10.inputEnableChildren = false;
        _this.notesGroup5.inputEnableChildren = false;
        _this.notesGroup2.inputEnableChildren = false;
        _this.notesGroup1.inputEnableChildren = false;
        
        _this.notesGroup200.setAll('alpha',0);*/
        
        _this.groupNotes = _this.add.group();
        
        _this.twoHunDragSprite = null;
        _this.HundredDragSprite = null;
        _this.fiftyDragSprite = null;
        _this.twentyDragSprite = null;
        _this.tenDragSprite = null;
        _this.fiveDragSprite = null;
        _this.twoDragSprite = null;
        _this.oneDragSprite = null;
        
        for(var i=0; i<amount.length;i++)
            {
                if(amount[i]==200)
                {
                    //if(_this.twoHunDragSprite == null)
                        _this.twoHunDragSprite = _this.add.sprite(30, 300+(20*i), '200rsNote_sp');
                    _this.twoHunDragSprite.alpha = 0;
                    _this.twoHunDragSprite.name = "200rupee_sp";
                    
                    _this.groupNotes.add(_this.twoHunDragSprite);
                
                }
                else if(amount[i]==100)
                {
                    //if(_this.HundredDragSprite == null)
                        _this.HundredDragSprite = _this.add.sprite(30, 300+(20*i), '100rsNote_sp');
                    _this.HundredDragSprite.alpha = 0;
                    _this.HundredDragSprite.name = "100rupee_sp";
                    
                    _this.groupNotes.add(_this.HundredDragSprite);
                
                }
                else if(amount[i]==50)
                {
                    //if(_this.fiftyDragSprite == null)
                        _this.fiftyDragSprite = _this.add.sprite(30, 300+(20*i), '50rsNote_sp');
                    _this.fiftyDragSprite.alpha = 0;
                    _this.fiftyDragSprite.name = "50rupee_sp";
                    
                    _this.groupNotes.add(_this.fiftyDragSprite);
                
                }
                else if(amount[i]==20)
                {
                    //if(_this.twentyDragSprite == null)
                        _this.twentyDragSprite = _this.add.sprite(30, 300+(20*i), '20rsNote_sp');
                    _this.twentyDragSprite.alpha = 0;
                    _this.twentyDragSprite.name = "20rupee_sp";
                    
                    _this.groupNotes.add(_this.twentyDragSprite);
                
                }
                else if(amount[i]==10)
                {
                    //if(_this.tenDragSprite == null)
                        _this.tenDragSprite = _this.add.sprite(30, 300+(20*i), '10rsNote_sp');
                    _this.tenDragSprite.alpha = 0;
                    _this.tenDragSprite.name = "10rupee_sp";
                    
                    _this.groupNotes.add(_this.tenDragSprite);
                
                }
                else if(amount[i]==5)
                {
                    //if(_this.fiveDragSprite == null)
                        _this.fiveDragSprite = _this.add.sprite(30, 300+(20*i), '5rsNote_sp');
                    _this.fiveDragSprite.alpha = 0;
                    _this.fiveDragSprite.name = "5rupee_sp";
                    
                    _this.groupNotes.add(_this.fiveDragSprite);
                
                }
                else if(amount[i]==2)
                {
                    //if(_this.twoDragSprite == null)
                        _this.twoDragSprite = _this.add.sprite(30, 300+(20*i), '2rsNote_sp');
                    _this.twoDragSprite.alpha = 0;
                    _this.twoDragSprite.name = "2rupee_sp";
                    
                    _this.groupNotes.add(_this.twoDragSprite);
                
                }
                else if(amount[i]==1)
                {
                    //if(_this.oneDragSprite == null)
                        _this.oneDragSprite = _this.add.sprite(30, 300+(20*i), '1rsNote_sp');
                    _this.oneDragSprite.alpha = 0;
                    _this.oneDragSprite.name = "1rupee_sp";
                    
                    _this.groupNotes.add(_this.oneDragSprite);
                }
                
                
                
            }
        /*if(_this.billValue == 'Carrot')
            {
                _this.sprite21 = _this.add.sprite(30, 340, '2rsNote_sp');
                _this.sprite21.alpha = 0;
                _this.sprite22 = _this.add.sprite(30, 360, '2rsNote_sp'); 
                _this.sprite22.alpha = 0;
            }
        else if(_this.billValue == 'Banana')
            {
                _this.sprite21 = _this.add.sprite(30, 340, '20rsNote_sp');
                _this.sprite21.alpha = 0;
                _this.sprite22 = _this.add.sprite(30, 360, '20rsNote_sp'); 
                _this.sprite22.alpha = 0;
            }
        else if(_this.billValue == 'Candy')
            {
                _this.sprite21 = _this.add.sprite(30, 340, '10rsNote_sp');
                _this.sprite21.alpha = 0;
                _this.sprite22 = _this.add.sprite(30, 360, '5rsNote_sp'); 
                _this.sprite22.alpha = 0;
            }
        else if(_this.billValue == 'Jalebi')
            {
                _this.sprite21 = _this.add.sprite(30, 340, '50rsNote_sp');
                _this.sprite21.alpha = 0;
            }
        else if(_this.billValue == 'Oil')
            {
                _this.sprite21 = _this.add.sprite(30, 340, '100rsNote_sp');
                _this.sprite21.alpha = 0;
                
                _this.sprite22 = _this.add.sprite(30, 340, '50rsNote_sp');
                _this.sprite22.alpha = 0; 
                
                _this.sprite23 = _this.add.sprite(30, 360, '50rsNote_sp');
                _this.sprite23.alpha = 0;
            }
        else if(_this.billValue == 'Oilpay')
            {
                _this.sprite21 = _this.add.sprite(30, 320, '50rsNote_sp');
                _this.sprite21.alpha = 0;
                
                _this.sprite22 = _this.add.sprite(30, 340, '20rsNote_sp');
                _this.sprite22.alpha = 0; 
                
                _this.sprite23 = _this.add.sprite(30, 360, '20rsNote_sp');
                _this.sprite23.alpha = 0;
                
                _this.sprite24 = _this.add.sprite(30, 380, '20rsNote_sp');
                _this.sprite24.alpha = 0;
                
                _this.sprite25 = _this.add.sprite(30, 400, '20rsNote_sp');
                _this.sprite25.alpha = 0;
                
                _this.sprite26 = _this.add.sprite(30, 420, '10rsNote_sp');
                _this.sprite26.alpha = 0;
                _this.sprite27 = _this.add.sprite(30, 440, '10rsNote_sp');
                _this.sprite27.alpha = 0;
                _this.sprite28 = _this.add.sprite(30, 460, '10rsNote_sp');
                _this.sprite28.alpha = 0;
                _this.sprite29 = _this.add.sprite(30, 480, '10rsNote_sp');
                _this.sprite29.alpha = 0;
                _this.sprite30 = _this.add.sprite(30, 500, '10rsNote_sp');
                _this.sprite30.alpha = 0;
                
                _this.sprite31 = _this.add.sprite(30, 520, '5rsNote_sp');
                _this.sprite31.alpha = 0;
                _this.sprite32 = _this.add.sprite(30, 540, '5rsNote_sp');
                _this.sprite32.alpha = 0;
                
                
            }*/
        
    },
     numClicked:function(target){
         
         console.log("!!!!! "+target.name);
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         
        if(_this.selectedAns.length<4)
        {
            _this.selectedAns += target.name;
            _this.textBoxGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns);
        }
    },
    correctAnswer:function()
    {
       _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                  
       _this.starAnim.smoothed = false;
       _this.anim4 =  _this.starAnim.animations.add('star');
       _this.celebr = _this.add.audio('celebr');
       _this.celebr.play();
       _this.anim4.play();

       _this.count1++;
       
       _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
          
    },
removeEverthing:function() 
{
   _this.no1++;
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
             _this.getQuestion();
        }
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
    
    
     addChangeToWallet:function(changeAmount)
    {
        _this.notesChangeGroup = _this.add.group();
        
         
        //_this.notesChangeGroup.inputEnableChildren = true;
        
        
        _this.twohunCount = 0;
        _this.hunCount = 0;
        _this.fiftyCount = 0;
        _this.twentyCount = 0;
        _this.tenCount = 0;
        _this.fiveCount = 0;
        _this.twoCount = 0;
        _this.oneCount = 0;
        
        for(var i=0; i<changeAmount.length;i++)
            {
                if(changeAmount[i]==200)
                    _this.twohunCount++;
                else if(changeAmount[i]==100)
                    _this.hunCount++;
                else if(changeAmount[i]==50)
                    _this.fiftyCount++;
                else if(changeAmount[i]==20)
                    _this.twentyCount++;
                else if(changeAmount[i]==10)
                    _this.tenCount++;
                else if(changeAmount[i]==5)
                    _this.fiveCount++;
                else if(changeAmount[i]==2)
                    _this.twoCount++;
                else if(changeAmount[i]==1)
                    _this.oneCount++;
            }
        
        
        
        _this.firstValue = _this.twohunCount;
        _this.secondValue = _this.twohunCount+_this.hunCount;
        _this.thirdValue = _this.twohunCount+_this.hunCount+_this.fiftyCount;
        _this.fourthValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount;
        _this.fifthValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount+_this.tenCount;
        _this.sixthValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount+_this.tenCount+_this.fiveCount;
        _this.seventhValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount+_this.tenCount+_this.fiveCount+_this.twoCount;
        _this.eightValue = _this.twohunCount+_this.hunCount+_this.fiftyCount+_this.twentyCount+_this.tenCount+_this.fiveCount+_this.twoCount+_this.oneCount;
        
        _this.checkCountNotes = _this.eightValue;
        _this.countDragNotes = 0;
        
        for (var i = 0; i < _this.firstValue; i++)
                {
                    _this.sprite2 = _this.notesChangeGroup.create(30, 100+(20*i), '200rsNote_sp');
                    _this.sprite2.name = '200rsNote_sp';  
                    //_this.twoHundredFram++;
                }
         
            for (var i = _this.firstValue; i < _this.secondValue; i++)
                {
                    _this.sprite2 = _this.notesChangeGroup.create(30, 100+(20*i), '100rsNote_sp');
                    _this.sprite2.name = '100rsNote_sp'; 
                    //_this.oneHundredFrame++;
                }
            for (var i = _this.secondValue; i < _this.thirdValue; i++)
                {
                    _this.sprite2 = _this.notesChangeGroup.create(30, 100+(20*i), '50rsNote_sp');
                    _this.sprite2.name = '50rsNote_sp'; 
                    //_this.fiftyFrame++;
                }
            for (var i = _this.thirdValue; i < _this.fourthValue; i++)
                {
                    _this.sprite2 = _this.notesChangeGroup.create(30, 100+(20*i), '20rsNote_sp');
                    _this.sprite2.name = '20rsNote_sp';  
                    //_this.twentyFrame++;
                }
            for (var i = _this.fourthValue; i < _this.fifthValue; i++)
                {
                    _this.sprite2 = _this.notesChangeGroup.create(30, 100+(20*i), '10rsNote_sp');
                    _this.sprite2.name = '10rsNote_sp';
                    //_this.tenFrame++;
                }
            for (var i = _this.fifthValue; i < _this.sixthValue; i++)
                {
                    _this.sprite2 = _this.notesChangeGroup.create(30, 100+(20*i), '5rsNote_sp');
                    _this.sprite2.name = '5rsNote_sp';  
                    //_this.fiveFrame++;
                }
            for (var i = _this.sixthValue; i < _this.seventhValue; i++)
                {
                    _this.sprite2 = _this.notesChangeGroup.create(30, 100+(20*i), '2rsNote_sp');
                    _this.sprite2.name = '2rsNote_sp';  
                    //_this.twoFrame++;
                }
            for (var i = _this.seventhValue; i < _this.eightValue; i++)
                {
                    _this.sprite2 = _this.notesChangeGroup.create(30, 100+(20*i), '1rsNote_sp');
                    _this.sprite2.name = '1rsNote_sp';  
                    //_this.oneFrame++;
                }
        
        /*_this.twoHundredFrame = _this.twohunCount;
        _this.oneHundredFrame = _this.hunCount;
        _this.fiftyFrame = _this.fiftyCount;
        _this.twentyFrame = _this.twentyCount;
        _this.tenFrame = _this.tenCount;
        _this.fiveFrame = _this.fiveCount;
        _this.twoFrame = _this.twoCount;
        _this.oneFrame = _this.oneCount;*/
        
        //_this.enableWalletDrag = false;
        //_this.walletClicked = false;
        //_this.billMachineDisplayed = false;
         
        //_this.notesChangeGroup.onChildInputDown.add(_this.notesClicked, this);
        
    
    },
};