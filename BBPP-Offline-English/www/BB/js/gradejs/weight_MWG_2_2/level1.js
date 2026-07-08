Game.weight_MWG_2_2level1=function(){};

Game.weight_MWG_2_2level1.prototype={

    init:function(param,score)
    {
        _this = this;
        
        _this.gameid = "3.2B";
        this.Stararr = param;
        this.score = score;
	if(window.quizQuest == false)
        this.score =parseInt(window.score);
        
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        //telInitializer.gameIdInit("weight3_2B",gradeSelected);
       
       telInitializer2.gameIdInit2("MWG2.2");
    },

    preload:function(game){
        if(!window.grade3MW1){

            window.grade3MW1 = true;

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

         _this.load.image('Level32B_gameBg',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/gameBg.png');
        
       
        
        _this.load.atlas('Level32B_Can',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.2B/Can.json');
        _this.load.atlas('Level32B_Carrot',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.2B/Carot.json');
        _this.load.atlas('Level32B_Coin',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.2B/Coin.json');
        _this.load.atlas('Level32B_Ball',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.2B/Ball.json');
        _this.load.atlas('Level32B_Book',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.2B/Book.json');
        _this.load.atlas('Level32B_Banana',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.2B/Banana.json');
        _this.load.atlas('Level32B_Comb',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.2B/comb.json');
        _this.load.atlas('Level32B_Eraser',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.2B/eraser.json');
        _this.load.atlas('Level32B_Eraser2',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.2B/eraser2.json');
        _this.load.atlas('Level32B_Glass',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.2B/Glass.json');
        _this.load.atlas('Level32B_Glass2',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.2B/Glass2.json');
        _this.load.atlas('Level32B_Mug',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.2B/Mug.json');
        _this.load.atlas('Level32B_Key',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.2B/Key.json');
        _this.load.atlas('Level32B_Pappaya',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.2B/Pappaya.json');
        _this.load.atlas('Level32B_Pencil',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.2B/Pencil.json');
        _this.load.atlas('Level32B_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2B/ScrewDriver.json');
        _this.load.atlas('Level32B_Shoe',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.2B/Shoe.json');
        
        //level2
        _this.load.image('Level32B_level2weight1',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight1.png');
        _this.load.image('Level32B_level2weight2',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight2.png');
        _this.load.image('Level32B_level2weight32',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight3.png');
        _this.load.image('Level32B_level2weight42',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level32B_level2Bg',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32B_txtbox',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/box.png');
        _this.load.atlas('Level32B_numbg',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.2B/numbg.json');
        _this.load.atlas('Level32B_rightBtn',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.2B/rightBtn.json');
        _this.load.atlas('Level32B_wrongBtn',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.2B/wrongBtn.json');
        
        _this.load.atlas('Level32B_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.2B/eraser2Anim.json');
        _this.load.atlas('Level32B_BananaAnim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.2B/BananaAnim.json');
        _this.load.atlas('Level32B_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.2B/CarrotAnim.json');
        _this.load.atlas('Level32B_CoinAnim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.2B/CoinAnim.json');
        _this.load.atlas('Level32B_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.2B/GlassAnim.json');
        
        _this.load.atlas('Level32B_level2weight3',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.2B/L2.json');
        _this.load.atlas('Level32B_level2weight4',window.baseUrl+'assets/gradeAssets/3.2B/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.2B/R2.json');
       

    }

    if(!window.grade3MW2){

            window.grade3MW2 = true;

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

         _this.load.image('Level32C_bg',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/bg.png');
         
        //game assets.
        _this.load.image('Level32C_level2Bg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/gameBg.png');
        
        _this.load.image('Level32C_weight1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight1.png');
        _this.load.image('Level32C_weight2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight2.png');
        _this.load.image('Level32C_weight3',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight3.png');
        
        _this.load.atlas('Level32C_Can',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.2C/Can.json');
        _this.load.atlas('Level32C_Carrot',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.2C/Carot.json');
        _this.load.atlas('Level32C_Coin',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.2C/Coin.json');
        _this.load.atlas('Level32C_Ball',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.2C/Ball.json');
        _this.load.atlas('Level32C_Book',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.2C/Book.json');
        _this.load.atlas('Level32C_Banana',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.2C/Banana.json');
        _this.load.atlas('Level32C_Comb',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.2C/comb.json');
        _this.load.atlas('Level32C_Eraser',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.2C/eraser.json');
        _this.load.atlas('Level32C_Eraser2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.2C/eraser2.json');
        _this.load.atlas('Level32C_Glass',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.2C/Glass.json');
        _this.load.atlas('Level32C_Glass2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.2C/Glass2.json');
        _this.load.atlas('Level32C_Mug',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.2C/Mug.json');
        _this.load.atlas('Level32C_Key',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.2C/Key.json');
        _this.load.atlas('Level32C_Pappaya',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.2C/Pappaya.json');
        _this.load.atlas('Level32C_Pencil',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.2C/Pencil.json');
        _this.load.atlas('Level32C_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2C/ScrewDriver.json');
        _this.load.atlas('Level32C_Shoe',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.2C/Shoe.json');
        
        //level2
        _this.load.image('Level32C_level2weight1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight1.png');
        _this.load.image('Level32C_level2weight2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight2.png');
        _this.load.image('Level32C_level2weight32',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight3.png');
        _this.load.image('Level32C_level2weight42',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level32C_level2Bg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32C_txtbox',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/box.png');
        _this.load.atlas('Level32C_numbg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.2C/numbg.json');
        _this.load.atlas('Level32C_rightBtn',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.2C/rightBtn.json');
        _this.load.atlas('Level32C_wrongBtn',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.2C/wrongBtn.json');
        
        _this.load.atlas('Level32C_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.2C/eraser2Anim.json');
        _this.load.atlas('Level32C_BananaAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.2C/BananaAnim.json');
        _this.load.atlas('Level32C_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.2C/CarrotAnim.json');
        _this.load.atlas('Level32C_CoinAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.2C/CoinAnim.json');
        _this.load.atlas('Level32C_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.2C/GlassAnim.json');
        
        _this.load.atlas('Level32C_level2weight3',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.2C/L2.json');
        _this.load.atlas('Level32C_level2weight4',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.2C/R2.json');
       
             //level3
        _this.load.atlas('Level32C_bottle',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/bottle.png',window.baseUrl+'json/gradeJson/3.2C/bottle.json');
        _this.load.atlas('Level32C_w1Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1Anim.png',window.baseUrl+'json/gradeJson/3.2C/w1Anim.json');
        _this.load.image('Level32C_w1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1.png');
        _this.load.image('Level32C_w2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2.png');
        _this.load.atlas('Level32C_w2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2Anim.png',window.baseUrl+'json/gradeJson/3.2C/w2Anim.json');
        _this.load.atlas('Level32C_tomoto',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/tomoto.png',window.baseUrl+'json/gradeJson/3.2C/tomoto.json');
        _this.load.atlas('Level32C_spoon',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/spoon.png',window.baseUrl+'json/gradeJson/3.2C/spoon.json');
        _this.load.atlas('Level32C_eraser1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/eraser1.png',window.baseUrl+'json/gradeJson/3.2C/eraser1.json');
        _this.load.atlas('Level32C_rope',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/rope.png',window.baseUrl+'json/gradeJson/3.2C/rope.json');
        _this.load.atlas('Level32C_leef',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/leef.png',window.baseUrl+'json/gradeJson/3.2C/leef.json');
        _this.load.atlas('Level32C_coin1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/coin1.png',window.baseUrl+'json/gradeJson/3.2C/coin1.json');
        _this.load.atlas('Level32C_Comb1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/Comb1.png',window.baseUrl+'json/gradeJson/3.2C/Comb1.json');
        _this.load.atlas('Level32C_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/w1AnimGlow.json');
        _this.load.atlas('Level32C_w2AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/w2AnimGlow.json');
        
        _this.load.atlas('Level32C_w22AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/Anim2/w22AnimGlow.json');
        _this.load.atlas('Level32C_w22Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22Anim.png',window.baseUrl+'json/gradeJson/3.2C/Anim2/w22Anim.json');
        _this.load.image('Level32C_w22',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22.png');

        //level4
        _this.load.atlas('Level32C_bottle2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/bottle2.png',window.baseUrl+'json/gradeJson/3.2C/bottle2.json');
       

    }

    if(!window.grade3MW2){

            window.grade3MW2 = true;

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

         _this.load.image('Level32C_bg',window.baseUrl+'assets/gradeAssets/3.2C/commonAssets/bg.png');
         
        //game assets.
        _this.load.image('Level32C_level2Bg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/gameBg.png');
        
        _this.load.image('Level32C_weight1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight1.png');
        _this.load.image('Level32C_weight2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight2.png');
        _this.load.image('Level32C_weight3',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/weight3.png');
        
        _this.load.atlas('Level32C_Can',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.2C/Can.json');
        _this.load.atlas('Level32C_Carrot',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.2C/Carot.json');
        _this.load.atlas('Level32C_Coin',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.2C/Coin.json');
        _this.load.atlas('Level32C_Ball',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.2C/Ball.json');
        _this.load.atlas('Level32C_Book',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.2C/Book.json');
        _this.load.atlas('Level32C_Banana',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.2C/Banana.json');
        _this.load.atlas('Level32C_Comb',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.2C/comb.json');
        _this.load.atlas('Level32C_Eraser',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.2C/eraser.json');
        _this.load.atlas('Level32C_Eraser2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.2C/eraser2.json');
        _this.load.atlas('Level32C_Glass',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.2C/Glass.json');
        _this.load.atlas('Level32C_Glass2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.2C/Glass2.json');
        _this.load.atlas('Level32C_Mug',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.2C/Mug.json');
        _this.load.atlas('Level32C_Key',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.2C/Key.json');
        _this.load.atlas('Level32C_Pappaya',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.2C/Pappaya.json');
        _this.load.atlas('Level32C_Pencil',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.2C/Pencil.json');
        _this.load.atlas('Level32C_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.2C/ScrewDriver.json');
        _this.load.atlas('Level32C_Shoe',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.2C/Shoe.json');
        
        //level2
        _this.load.image('Level32C_level2weight1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight1.png');
        _this.load.image('Level32C_level2weight2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight2.png');
        _this.load.image('Level32C_level2weight32',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight3.png');
        _this.load.image('Level32C_level2weight42',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level32C_level2Bg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/level2Bg.png');
        _this.load.image('Level32C_txtbox',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/box.png');
        _this.load.atlas('Level32C_numbg',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.2C/numbg.json');
        _this.load.atlas('Level32C_rightBtn',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.2C/rightBtn.json');
        _this.load.atlas('Level32C_wrongBtn',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.2C/wrongBtn.json');
        
        _this.load.atlas('Level32C_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.2C/eraser2Anim.json');
        _this.load.atlas('Level32C_BananaAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.2C/BananaAnim.json');
        _this.load.atlas('Level32C_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.2C/CarrotAnim.json');
        _this.load.atlas('Level32C_CoinAnim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.2C/CoinAnim.json');
        _this.load.atlas('Level32C_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.2C/GlassAnim.json');
        
        _this.load.atlas('Level32C_level2weight3',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.2C/L2.json');
        _this.load.atlas('Level32C_level2weight4',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.2C/R2.json');
       
             //level3
        _this.load.atlas('Level32C_bottle',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/bottle.png',window.baseUrl+'json/gradeJson/3.2C/bottle.json');
        _this.load.atlas('Level32C_w1Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1Anim.png',window.baseUrl+'json/gradeJson/3.2C/w1Anim.json');
        _this.load.image('Level32C_w1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1.png');
        _this.load.image('Level32C_w2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2.png');
        _this.load.atlas('Level32C_w2Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2Anim.png',window.baseUrl+'json/gradeJson/3.2C/w2Anim.json');
        _this.load.atlas('Level32C_tomoto',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/tomoto.png',window.baseUrl+'json/gradeJson/3.2C/tomoto.json');
        _this.load.atlas('Level32C_spoon',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/spoon.png',window.baseUrl+'json/gradeJson/3.2C/spoon.json');
        _this.load.atlas('Level32C_eraser1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/eraser1.png',window.baseUrl+'json/gradeJson/3.2C/eraser1.json');
        _this.load.atlas('Level32C_rope',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/rope.png',window.baseUrl+'json/gradeJson/3.2C/rope.json');
        _this.load.atlas('Level32C_leef',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/leef.png',window.baseUrl+'json/gradeJson/3.2C/leef.json');
        _this.load.atlas('Level32C_coin1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/coin1.png',window.baseUrl+'json/gradeJson/3.2C/coin1.json');
        _this.load.atlas('Level32C_Comb1',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/Comb1.png',window.baseUrl+'json/gradeJson/3.2C/Comb1.json');
        _this.load.atlas('Level32C_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/w1AnimGlow.json');
        _this.load.atlas('Level32C_w2AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/w2AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/w2AnimGlow.json');
        
        _this.load.atlas('Level32C_w22AnimGlow',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22AnimGlow.png',window.baseUrl+'json/gradeJson/3.2C/Anim2/w22AnimGlow.json');
        _this.load.atlas('Level32C_w22Anim',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22Anim.png',window.baseUrl+'json/gradeJson/3.2C/Anim2/w22Anim.json');
        _this.load.image('Level32C_w22',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/Anim2/w22.png');

        //level4
        _this.load.atlas('Level32C_bottle2',window.baseUrl+'assets/gradeAssets/3.2C/gameAssets/level3/bottle2.png',window.baseUrl+'json/gradeJson/3.2C/bottle2.json');
       

    }

    },


	create:function(game){

        _this.shake = new Phaser.Plugin.Shake(game);
         game.plugins.add( _this.shake);

		_this.amplify = null;
		_this.Stararr = [];
		noofAttempts=0;
		AnsTimerCount=0;
		selectedAns = "";
        _this.sceneCount = 0;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
		_this.balanceCkeckVar = 0;
		_this.balancevar = 0;
		
        no1=0;
       
        count = 0;
        count1 = 0;
        objAdded = 0;
     
        qArrays = [2,3,4,5,7,8,10];
        qArrays = this.shuffle(qArrays);
        

        bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level32B_gameBg');
		
		commonNavBar.addNavBar(this,_this.soundurl,"measurement2");
             commonNavBar.addTimerToTheGame(this,0,0,0);
             commonNavBar.startTimer(this);
             commonNavBar.addScore(this,this.score);
		
         _this.generateStarsForTheScene(9);
        
        //this.input.enabled = false;
       // this.Voice1();
        //no1++;
        this.getQuestion();
        
        
        _this.getVoice();
        
        //this.gotoFirstQuestion();
        

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

    getQuestion:function(target)
    {       
         noofAttempts = 0;
         AnsTimerCount=0;
         _this.sceneCount++;

		/*timer = _this.time.create(false);

		//  Set a TimerEvent to occur after 2 seconds
		timer.loop(1000, function(){
			AnsTimerCount++;
		}, this);

			
		/**************************************************************************/ 
        /*_this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
		//  Start the timer running - this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		//timer.start();
		
       
        //_this.speakerbtn.inputEnabled=true;
        //_this.speakerbtn.input.useHandCursor = true;
		
		
		_this.questionid = 1;
					
    	switch(qArrays[no1])      
    	{
    		case 1: this.gotoFirstQuestion();
    				break;
    		case 2: this.gotoSecondQuestion();
    				break;
    		case 3: this.gotoThirdQuestion();
    				break;
    		case 4: this.gotoFourthQuestion();
    				break;
    		case 5: this.gotoFifthQuestion();
    				break;
    		case 6: this.gotoSixthQuestion();
    				break;
            case 7: this.gotoSeventhQuestion();
    				break;
            case 8: this.gotoEightQuestion();
    				break;
            case 9: this.gotoNinthQuestion();
    				break;
            case 10: this.gotoTenthQuestion();
    				break;
          
    	}

        telInitializer2.gameQuestionStart(this,_this.questionid);
        
    },
   
    removeEverthing:function() 
    {
        no1++;
        //commonNavBar.stopTimer();
        numGroup.destroy();
       /* objGroup.destroy();
        obj1Group.destroy();
        obj2Group.destroy();
        scale1Group.destroy();
        scale2Group.destroy();*/

        

        selectedAns="";
        if(no1<3)
        {
            count =0;
            
			_this.balanceCkeckVar = 0;
			_this.balancevar = 0;
            
            var MaintweenDestroy = this.add.tween(objGroup);
            MaintweenDestroy.to({ x: -1000}, 0,'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                objGroup.destroy();
            },this);
            var Maintween1Destroy = this.add.tween(scale1Group);
            Maintween1Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                scale1Group.destroy();
            },this);
            var Maintween2Destroy = this.add.tween(scale2Group);
            Maintween2Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween2Destroy.onComplete.add(function(){
                scale2Group.destroy();
            },this);
            var Maintween3Destroy = this.add.tween(obj1Group);
            Maintween3Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween3Destroy.onComplete.add(function(){
                obj1Group.destroy();
            },this);
            var Maintween4Destroy = this.add.tween(obj2Group);
            Maintween4Destroy.to({ x: -1000}, 0,'Linear', true, 0);
            Maintween4Destroy.onComplete.add(function(){
                obj2Group.destroy();
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
					this.getQuestion();
				}
            },this);
            starsGroup.getChildAt(count1+1).frame = 2; 
            count1++;
        
        }
        else
        {
			var timerStopVar = commonNavBar.stopTimer();
            // commonNavBar.disableNavBar();

                commonNavBar.stopVoice();
                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
            _this.state.start('weight_MWG_2_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
       
        }
    },
    
    checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    
    addNumberPad:function(){
        
         numGroup = this.add.group();
        var x = 50;
        var bottomBar=numGroup.create(0,470,'bottomBar');
        bottomBar.name="bottomBar";
        for(var i=0;i<10;i++)
        {
             var numbg = numGroup.create(x,505,'Level43A_numbg');  
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            //numbg.name = i;
            numbg.frame=i;
            
            /*var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0,'Level32B_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);*/
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=70;
        }
        var txtbox = this.add.sprite(x+20,506,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
		txtbox.scale.setTo(1,1.2);
        txtbox.name = "txtbox";
        
        var wrongbtn = numGroup.create(x+100,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
        //wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+160,505,'tick');
        rightbtn.anchor.setTo(0.5);
        //rightbtn.scale.setTo(0.5,0.5);
        rightbtn.name = "rightbtn";
        //rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 30;
        enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level24A_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(target){
			target.frame = 1;
            commonNavBar.playClickSound();
            enterTxt.setText("");
            selectedAns="";
           /* var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32B_CrossButton", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			_this.time.events.add(300, function(){ target.frame = 0;}, _this);
        },this);
        
        rightbtn.events.onInputDown.add(function(target){

            if(numGroup)
                numGroup.setAll("inputEnabled",false);

            if(objGroup)
                objGroup.setAll("inputEnabled",false);

            if(scale1Group)
                scale1Group.setAll("inputEnabled",false);

            if(scale2Group)
                scale2Group.setAll("inputEnabled",false);

            if(obj1Group)
                obj1Group.setAll("inputEnabled",false);

            if(obj2Group)
                obj2Group.setAll("inputEnabled",false);





			target.frame = 1;
            commonNavBar.playClickSound();
            target.events.onInputDown.removeAll();
			noofAttempts++;
            /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32B_TickButton", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);
					
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
					telInitializer2.gameCorrectAns();
                    console.log("correct");
                    this.Stararr.push(3);
                    //_this.speakerbtn.inputEnabled=false;
                    target.events.onInputDown.removeAll();
                    
                    //mainSprite.frame = 1;
                    var anim = weightScale3.animations.add('glow');
                    anim.play(10);
                    var anim2 = weightScale4.animations.add('glow');
                    anim2.play(10);
                    
					/*commonNavBar.stopTimer();

					 var currentTime = window.timeSaveFunc();
                        var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: noofAttempts,
                            date_time_submission: currentTime, 
                            access_token: window.acctkn 
                        }*/
                
               // absdsjsapi.saveAssessment(saveAsment);

              // telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
			
                     commonNavBar.stopVoice();
                    commonNavBar.playCelebrationSound();
                     var starAnim = starsGroup.getChildAt(count1);
                       // console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim4 = starAnim.animations.add('star');
                        anim4.play();
                        anim.onComplete.add(function(){this.removeEverthing();},this);
                        //this.time.events.add(3000, function(){this.removeEverthing();},this);
                   // count1++;
                if(window.quizQuest == true)
					{
						commonNavBar.updateScore(+5);
					}
                }
            else
                {
                    telInitializer2.gameWrongAns();
					/*this.time.events.add(300, function(){target.frame = 0;},this);
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    if(scale1Group.getByName("targetAnim"))
                    {
                        shake.shake(10, scale1Group.getByName("targetAnim"));
                    }
                    if(scale2Group.getByName("targetAnim"))
                    {
                        shake.shake(10, scale2Group.getByName("targetAnim"));
                    }*/
                    commonNavBar.stopVoice();
                      commonNavBar.playWrongCelebrationSound();
                    starsGroup.getChildAt(count1).frame = 1;
                     _this.Stararr.push(1);
                    // _this.count1++
                     //target.events.onInputDown.removeAll();
                    _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);

                      if(window.quizQuest == true)
					{
						commonNavBar.updateScore(-5);
					}                                  
                }
  
        },this); 
                   // aiyoh.play(); 
                    this.time.events.add(500, function()
                    {
						_this.balancevar = 0;
                        //numGroup.destroy();
                        //objGroup.destroy();
                        //obj1Group.destroy();
                        //obj2Group.destroy();
                        //scale1Group.destroy();
                   
                        var tempAngle = 0;
                        var tempweight = 0;
                        
                        if(tp!=null)
                        {
                            for(var j=0;j<tp.length;j++)
                            {
                                if(!tp.getChildAt(j).visible)
                                {
                                    tp.getChildAt(j).visible = true;
                                    tp.getChildAt(j).inputEnabled = true;
                                    tp.getChildAt(j).input.useHandCursor = true;
                                    tp.getChildAt(j).events.onInputDown.add(function(target){
                                        this.objectClicked(target,tweenVal,angleVal);
                                    },this);
                                    //break;
                                    tempAngle+=angleVal;
                                    tempweight+=tweenVal;
                                }
                            }
                        }
                        
                        if(scale1Group.getByName("targetAnim"))
                        {
                            scale1Group.getByName("targetAnim").destroy();
                            //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                            weightScale2.angle+=tempAngle;
                            scale1Group.y-=tempweight;
                            scale2Group.y+=tempweight;
                        }
                        if(scale2Group.getByName("targetAnim"))
                        {
                            scale2Group.getByName("targetAnim").destroy();
                            weightScale2.angle-=tempAngle;
                            scale1Group.y+=tempweight;
                            scale2Group.y-=tempweight;
                        }
                       //this.getQuestion();
                    },this);
                },
        
        //console.log(numGroup.length);
        
       /* for(var k=0;k<numGroup.length;k++)
        {
            numGroup.getChildAt(k).inputEnabled = false;  
        }*/
    
    
    
    numClicked:function(target){
        //console.log(target.name);

        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level32B_NumberBtn"+target.name, 
                access_token: window.acctkn 
            } 
            */
            //absdsjsapi.saveInteractEvent(interactEvent);

        
        commonNavBar.playClickSound();
        if(selectedAns.length<3)
        {
            selectedAns += target.frame;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // console.log(selectedAns);
        
    },
    
     gotoFirstQuestion:function(){
       // this.getVoice();
         
        this.addNumberPad();
        
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Can');
        object1.name = "Can";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,20,8);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<12;i++)
        {
            if(i==4||i==8)
            {
                x-=10;
                y+=5;
            }
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Eraser2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Eraser2";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,2,0.8);
            },this);
            if(i<4)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=10;
                    y+=5;
                }
            }
            else if(i<8)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=5;
                    y+=10;
                }
            }
            else if(i<12)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=2;
                    y+=10;
                }
            }
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "10";
		_this.balanceCkeckVar = 10;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
        objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
     
    gotoSecondQuestion:function(){
         //this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Can');
        object1.name = "Can";
        mainSprite = object1;
        
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,20,8);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<5;i++)
        {
            if(i==4||i==8)
            {
                x+=15;
                y+=5;
            }
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Carrot');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Carrot";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,10,4);
            },this);
            if(i<4)
            {
                if(i%2==0)
                {
                    x+=60;
                }
                else
                {
                    x= 0;
                    x-=10;
                    y+=15;
                }
            }
            else if(i<8)
            {
                if(i%2==0)
                {
                    x+=60;
                }
                else
                {
                    x= 0;
                    x+=15;
                    y+=10;
                }
            }
            else if(i<12)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=2;
                    y+=10;
                }
            }
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "2";
		_this.balanceCkeckVar = 2;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
        
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoThirdQuestion:function(){
       //  this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Pappaya');
        object1.name = "Pappaya";
        mainSprite = object1;
        
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,18,8);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<12;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Banana');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Banana";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,3,1.33);
            },this);
                if(i%2==0)
                {
                    x+=60;
                }
                else 
                {
                    x= 0;
                    x-=10;
                    y+=10;
                }
           
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "6";
		_this.balanceCkeckVar = 6;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoFourthQuestion:function(){
        // this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, -50);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,100);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, -50);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,100);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Book');
        object1.name = "Book";
        mainSprite = object1;
        
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,16,7);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<8;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Coin');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Coin";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            var g = this.add.graphics(-30, -30);
            g.lineStyle(1, 0xFFFFFF, 0.8);
            g.beginFill(0xFF700B, 1);
            g.drawRect(0,0,50,100);		
            g.boundsPadding = 0;
            g.alpha=0;
            object2.addChild(g);
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,4,1.75);
            },this);
                /*if(i%2==0)
                {
                    x+=60;
                }
                else 
                {
                    x= 0;
                    x-=10;
                    y+=10;
                }*/
            y-=10;
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "4";
		_this.balanceCkeckVar = 4;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */  
        
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoFifthQuestion:function(){
      // this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Book');
        object1.name = "Book";
        mainSprite = object1;
        
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,16,7);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<5;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+300+x,385+y,'Level32B_Glass2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Glass2";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,8,3.5);
            },this);
                /*if(i%2==0)
                {
                    x+=60;
                }
                else 
                {
                    x= 0;
                    x-=10;
                    y+=10;
                }*/
            x+=35;
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "2";
		_this.balanceCkeckVar = 2;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoSixthQuestion:function(){
        // this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
       weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Shoe');
        object1.name = "Shoe";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,14,6);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<12;i++)
        {
            if(i==4||i==8)
            {
                x-=10;
                y+=5;
            }
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Eraser2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Eraser2";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,2,0.8);
            },this);
            if(i<4)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=10;
                    y+=5;
                }
            }
            else if(i<8)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=5;
                    y+=10;
                }
            }
            else if(i<12)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=2;
                    y+=10;
                }
            }
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "7";
		_this.balanceCkeckVar = 7;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */ 
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoSeventhQuestion:function(){
        // this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Ball');
        object1.name = "Ball";
        mainSprite = object1;
        
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,12,5);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<6;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Banana');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Banana";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,6,2.5);
            },this);
                if(i%2==0)
                {
                    x+=60;
                }
                else 
                {
                    x= 0;
                    x-=10;
                    y+=10;
                }
           
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "2";
		_this.balanceCkeckVar = 2;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoEightQuestion:function(){
         //this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, -50);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,100);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
       weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, -50);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,100);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Ball');
        object1.name = "Ball";
        mainSprite = object1;
        
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,12,5);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<8;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Coin');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Coin";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            var g = this.add.graphics(-30, -30);
            g.lineStyle(1, 0xFFFFFF, 0.8);
            g.beginFill(0xFF700B, 1);
            g.drawRect(0,0,50,100);		
            g.boundsPadding = 0;
            g.alpha=0;
            object2.addChild(g);
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,4,1.66);
            },this);
                /*if(i%2==0)
                {
                    x+=60;
                }
                else 
                {
                    x= 0;
                    x-=10;
                    y+=10;
                }*/
            y-=10;
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "3";
		_this.balanceCkeckVar = 3;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */
        
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoNinthQuestion:function(){
        // this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
         weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Carrot');
        object1.name = "BigCarrot";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,10,4);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<12;i++)
        {
            if(i==4||i==8)
            {
                x-=10;
                y+=5;
            }
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Eraser2');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Eraser2";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,2,0.8);
            },this);
            if(i<4)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=10;
                    y+=5;
                }
            }
            else if(i<8)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=5;
                    y+=10;
                }
            }
            else if(i<12)
            {
                if(i%2==0)
                {
                    x+=42;
                }
                else
                {
                    x= 0;
                    x-=2;
                    y+=10;
                }
            }
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "5";
		_this.balanceCkeckVar = 5;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
    
    gotoTenthQuestion:function(){
       // this.getVoice();
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        tp = null;
    /*
        mainSprite = this.add.sprite(560,192,'Level32B_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'Level32B_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'Level32B_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
         weightScale3 = this.add.sprite(230,222,'Level32B_level2weight3');
        
        var graphics = this.add.graphics(0, -50);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,100);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(472,222,'Level32B_level2weight4');
        
        var graphics1 = this.add.graphics(40, -50);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,100);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        var tempX = 0;
        var tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-350,440,'Level32B_Glass');
        object1.name = "BigGlass";
        mainSprite = object1;
        
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            this.objectClicked(target,8,4);
        },this);
        obj1Group.add(object1);
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        var x = 0;
        var y = 0;
        for(var i=0;i<8;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+320+x,385+y,'Level32B_Coin');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "Coin";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            var g = this.add.graphics(-30, -30);
            g.lineStyle(1, 0xFFFFFF, 0.8);
            g.beginFill(0xFF700B, 1);
            g.drawRect(0,0,50,100);		
            g.boundsPadding = 0;
            g.alpha=0;
            object2.addChild(g);
            
            object2.events.onInputDown.add(function(target){
                
                this.objectClicked(target,4,1.66);
            },this);
                /*if(i%2==0)
                {
                    x+=60;
                }
                else 
                {
                    x= 0;
                    x-=10;
                    y+=10;
                }*/
            y-=10;
            obj2Group.add(object2);
            //y-=5;
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
		graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		graphics2.beginFill(0xFF700B, 1);
		graphics2.drawRect(0,0,960,150);		
		graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "2";
		_this.balanceCkeckVar = 2;
        
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0,'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0,'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0,'Linear', true, 1000);
        */    
        
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0,'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0,'Linear', true, 0);
      
     },
   
   
   objectClicked:function(target,tween1,tween2)
    {
			//noofAttempts++;
            console.log("target"+target.name);
			/*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level32B_"+target.name, 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
            commonNavBar.playClickSound();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){
                /*var currentTime = window.timeSaveFunc();
                var interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: currentTime, 
                    event_type: "drop", 
                    res_id: "Level32B_"+target.name, 
                    access_token: window.acctkn 
                } */
                
                //absdsjsapi.saveInteractEvent(interactEvent);

                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,weightScale3.getChildAt(0))&&scale1Empty)
                {

                    console.log("3");
                    

                    if(target.name=="Can"||target.name=="Pappaya"||target.name=="Book"||target.name=="Shoe"||target.name=="Ball"||target.name=="BigCarrot"||target.name=="BigGlass")
                    {
                        scale1Empty = false;
                        scale1Group.add(target);
                        scale1Group.bringToTop(weightScale3);
                        target.x = weightScale3.x+120;
                        target.y = weightScale3.y+57;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                        commonNavBar.playsnapSound();
                        target.events.onInputDown.removeAll();
                        this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);
                    }
                    else
                    {
                        target.x = tempX;
                        target.y = tempY;
                    }
						// _this.balancevar++;
						// if(_this.balanceCkeckVar == _this.balancevar)
						// 	{
						// 		_this.time.events.add(200, function()
						// 		{
						// 			commonNavBar.playclungSound();
						// 		}, this);
						// 	}
      //                  var tempFrame = 0;
      //                  target.visible = false;
      //                  target.x = tempX;
      //                  target.y = tempY;
      //                  if(scale1Group.getByName('targetAnim'))
      //                   {
      //                       tempFrame = scale1Group.getByName('targetAnim').frame+1;
      //                       scale1Group.getByName('targetAnim').destroy();
      //                   }
      //                   tempName = "Level32B_"+target.name+"Anim";
      //                   var targetAnim = this.add.sprite( weightScale3.x+120, weightScale3.y+38,tempName);
      //                   targetAnim.name = "targetAnim";
      //                   targetAnim.anchor.setTo(0.5,1);
      //                   targetAnim.frame = tempFrame;
      //                   scale1Group.add(targetAnim);
      //                   scale1Group.bringToTop(weightScale3);
      //                   targetAnim.inputEnabled = true;
      //                   targetAnim.input.useHandCursor = true;
      //                   tp = target.parent;
      //                   tweenVal = tween1;
      //                   angleVal = tween2;
      //                   targetAnim.events.onInputDown.add(function(target){
      //                       //console.log(tweenVal);
      //                       this.objectRemoved(target,tweenVal,angleVal);
      //                   },this);
      //               }
                    // commonNavBar.playsnapSound();
                    // target.events.onInputDown.removeAll();
                    // this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else if(this.checkOverlap(target,weightScale4.getChildAt(0))&&scale2Empty)
                {

                    console.log("4");


                    if(target.name=="Can"||target.name=="Pappaya"||target.name=="Book"||target.name=="Shoe"||target.name=="Ball"||target.name=="BigCarrot"||target.name=="BigGlass")
                    {

                        target.x = tempX;
                        target.y = tempY;

                        // scale2Empty = false;
                    
                        // scale2Group.add(target);
                        // scale2Group.bringToTop(weightScale4);
                        // target.x = weightScale4.x+160;
                        // target.y = weightScale4.y+57;
                        
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
                        // scale2Empty = false;
						_this.balancevar++;
						if(_this.balanceCkeckVar == _this.balancevar)
						{
							_this.time.events.add(200, function()
							{
                                console.log("equa");
								commonNavBar.playclungSound();
							}, this);
						}
							
                       var tempFrame = 0;
                       target.visible = false;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale2Group.getByName('targetAnim'))
                        {
                            tempFrame = scale2Group.getByName('targetAnim').frame+1;
                            scale2Group.getByName('targetAnim').destroy();
                        }
                        tempName = "Level32B_"+target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale4.x+160, weightScale4.y+38,tempName);
                        targetAnim.name = "targetAnim";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale2Group.add(targetAnim);
                        scale2Group.bringToTop(weightScale4);
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        targetAnim.events.onInputDown.add(function(target){
                            //console.log(tweenVal);
                            this.objectRemoved(target,tweenVal,angleVal);
                        },this);

                        commonNavBar.playsnapSound();
                        target.events.onInputDown.removeAll();
                        
                        this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);

                    }
                    // commonNavBar.playsnapSound();
                    // target.events.onInputDown.removeAll();
                    
                    // this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },this);
   },
    
    objectRemoved:function(target,tween1,tween2)
    {
        commonNavBar.playClickSound();

        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level32B_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);




        //console.log(target.parent);
        var targetParent = target.parent;
        if(targetParent==scale2Group)
        {
            //console.log("here");
            var targetAnim = this.add.sprite( weightScale4.x+160, weightScale4.y+38,tempName);
        }
        else
        {
             //console.log("here2");
            var targetAnim = this.add.sprite( weightScale3.x+120, weightScale3.y+38,tempName);
        }
        
        targetAnim.name = "targetAnim";
        targetAnim.anchor.setTo(0.5,1);
        targetAnim.frame = target.frame;
                        
        target.parent.add(targetAnim);
        target.parent.bringToTop(weightScale3);
        targetAnim.inputEnabled = true;
        targetAnim.input.useHandCursor = true;
        targetAnim.events.onInputDown.add(function(target){
            this.objectRemoved(target,tweenVal,angleVal);
        },this);
               
                //newTarget.frame = target.frame-1;
                //target.frame = 0;
        
        if(target.frame == 0)
            {
                //console.log("yo");
               targetAnim.visible = false;
            }
        else
            {
                targetAnim.frame = target.frame-1;
            }
        
        target.input.enableDrag();
            target.events.onDragStart.add(function(target){
                if(target.frame!=0)
                    target.frame=0;
                },this);
        
            target.events.onDragStop.add(function(){

              /*  var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level32B_MeasuringObject", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);

                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {  

                    commonNavBar.playsnapSound();
				
				_this.balancevar--;
					if(_this.balanceCkeckVar == _this.balancevar)
						{
							_this.time.events.add(200, function()
							{
								commonNavBar.playclungSound();
							}, this);
						}
                    if(tp!=null)
                    {
                        for(var j=0;j<tp.length;j++)
                        {
                            if(!tp.getChildAt(j).visible)
                            {
                                tp.getChildAt(j).visible = true;
                                tp.getChildAt(j).inputEnabled = true;
                                tp.getChildAt(j).input.useHandCursor = true;
                                tp.getChildAt(j).events.onInputDown.add(function(target){
                                    this.objectClicked(target,tweenVal,angleVal);
                                },this);

                                if(!targetAnim.visible)
                                    targetAnim.destroy();

                                break;
                            }
                        }
                    }
                    target.destroy();
                    //newTarget.x = tempX;
                    //newTarget.y = tempY;
                    if(targetParent==scale2Group)
                    {
                        //console.log("yo1");
                       this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);     
                    }
                    else
                    {
                        //console.log("yo2");
                       this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                    }
                }
                else
                {
                    if(!targetAnim.visible)
                        targetAnim.visible = true;
                    else
                        targetAnim.frame+=1;
                    
                    
                    target.destroy();
                   // newTarget.x = tempX;
                   // newTarget.y = tempY;
                   // newTarget.visible = false;
                   // target.frame+=1;
                   // target.visible=true;
                }
            },this);
    
        
         
   },
                                          
    tweenTheMachineLeft:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this1 = this;
        
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle+angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y-weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y+weight}, 0,'Linear', true, 0);
            tween2.onComplete.add(function(){
                _this1.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
             //object1.events.onInputDown.add(this.checkCorrectAns,this);   
             //object2.events.onInputDown.add(this.checkCorrectAns,this);
          /*  for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    
    tweenTheMachineRight:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this1 = this; 
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle-angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y+weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y-weight}, 0,'Linear', true, 0);
        
        tween2.onComplete.add(function(){
                _this1.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
            // object1.events.onInputDown.add(this.checkCorrectAns,this);   
            // object2.events.onInputDown.add(this.checkCorrectAns,this);  
           /* for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    
    
   
    generateStarsForTheScene:function(count)
	{
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(this.world.centerX, 10,'cstarAnim');
            
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=10;
					starsGroup.getChildAt(i).x+=10;
				}
			}
		}
        starsGroup.getChildAt(0).frame = 2;
if(window.quizQuest == true)
      {
          starsGroup.visible = false;
          
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

    

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        
        if(window.languageSelected == "English")
        {
            
            commonNavBar.getVoice(window.baseUrl+"questionSounds/3.2A/E2a.mp3");
            _this.soundurl = window.baseUrl+"questionSounds/3.2A/E2a.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            
            commonNavBar.getVoice(window.baseUrl+"questionSounds/3.2A/H2a.mp3");
            _this.soundurl = window.baseUrl+"questionSounds/3.2A/H2a.mp3";
        }
        else if(window.languageSelected == "Kannada")
        {
            
            commonNavBar.getVoice(window.baseUrl+"questionSounds/3.2A/K2a.mp3");
            _this.soundurl = window.baseUrl+"questionSounds/3.2A/K2a.mp3";
        } 
        else if(window.languageSelected == "Gujarati")
        {
            
            commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/3.2A/3.2B_E2a.mp3");
            _this.soundurl = window.baseUrl+"questionSounds/Gujarati/3.2A/3.2B_E2a.mp3";
        } 
		else if(window.languageSelected == "Marathi")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Marathi/3.2B_E2a.mp3");
						_this.soundurl = window.baseUrl+"questionSounds/3.1/Marathi/3.2B_E2a.mp3";
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Telugu/3.2B_E2a.mp3");
						_this.soundurl = window.baseUrl+"questionSounds/3.1/Telugu/3.2B_E2a.mp3";
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Tamil/3.2B_E2a.mp3");
						_this.soundurl = window.baseUrl+"questionSounds/3.1/Tamil/3.2B_E2a.mp3";
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        commonNavBar.getVoice( window.baseUrl+"questionSounds/3.1/Urdu/3.2B_E2a.mp3");
						_this.soundurl = window.baseUrl+"questionSounds/3.1/Urdu/3.2B_E2a.mp3";
                    }
		else
        {
           
            commonNavBar.getVoice(window.baseUrl+"questionSounds/3.2A/3.2_B1.mp3");
            _this.soundurl = window.baseUrl+"questionSounds/3.2A/3.2_B1.mp3";
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
                       

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
       commonNavBar.addNavBar(this,_this.soundurl,"measurement2");
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
    
    stopVoice:function()
    {     

        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
                 console.log("stop"); 
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
        commonNavBar.stopVoice();

               
    }

    
};