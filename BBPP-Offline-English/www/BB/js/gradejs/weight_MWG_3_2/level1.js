Game.weight_MWG_3_2level1=function(){
/*     bg1;
 starsGroup;
 dragBox;
 count;
 gameBoxGroup;
 crocsGroup;
 tickMark;
 objGroup;
 rightOrderArray;
 glowOrderArray;
 no1;
 count;
 count1;
 qArrays;
 graphics;
 numGroup;
 selectedAns;
 rightAns;
 mainSprite;
 scale1Empty;
 scale2Empty;
 weightScale1,weightScale2,weightScale3,weightScale4;
 obj1Group,obj2Group;
 tweenVal,angleval;
 tempName,tp;
 tempAngle;
 tempweight1;
 tempweight2;
 speaker;
 oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

 noofAttempts;
 timer;
 AnsTimerCount;
 enterTxt;*/
};


Game.weight_MWG_3_2level1.prototype={

    init:function(param,score)
    {
        _this = this;
        
        _this.gameid = "3.3A";
        
        /*_this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/


        //telInitializer.gameIdInit("weight3_3A",gradeSelected);
        this.Stararr = param;
		this.score = score;
	if(window.quizQuest == false)
        this.score =parseInt(window.score);
        telInitializer2.gameIdInit2("MWG3.2");
    },

    preload:function(game){
        if(!window.grade3MW3){

            window.grade3MW3 = true;

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

         //game assets.
        _this.load.image('Level33A_gameBg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/gameBg.png');
      
        _this.load.atlas('Level33A_Can',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.3A/Can.json');
        _this.load.atlas('Level33A_Carrot',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.3A/Carot.json');
        _this.load.atlas('Level33A_Coin',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.3A/Coin.json');
        _this.load.atlas('Level33A_Ball',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.3A/Ball.json');
        _this.load.atlas('Level33A_Book',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.3A/Book.json');
        _this.load.atlas('Level33A_Banana',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.3A/Banana.json');
        _this.load.atlas('Level33A_Comb',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.3A/comb.json');
        _this.load.atlas('Level33A_Eraser',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.3A/eraser.json');
        _this.load.atlas('Level33A_Eraser2',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.3A/eraser2.json');
        _this.load.atlas('Level33A_Glass',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.3A/Glass.json');
        _this.load.atlas('Level33A_Glass2',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.3A/Glass2.json');
        _this.load.atlas('Level33A_Mug',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.3A/Mug.json');
        _this.load.atlas('Level33A_muggg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/muggg.png',window.baseUrl+'json/gradeJson/3.3A/muggg.json');
        _this.load.atlas('Level33A_Key',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.3A/Key.json');
        _this.load.atlas('Level33A_Pappaya',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.3A/Pappaya.json');
        _this.load.atlas('Level33A_pappaya1',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/pappaya1.png',window.baseUrl+'json/gradeJson/3.3A/pappaya1.json');
        _this.load.atlas('Level33A_Pencil',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.3A/Pencil.json');
        _this.load.atlas('Level33A_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.3A/ScrewDriver.json');
        _this.load.atlas('Level33A_Shoe',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.3A/Shoe.json');
        _this.load.atlas('Level33A_bottle32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/bottle32.png',window.baseUrl+'json/gradeJson/3.3A/bottle32.json');
        _this.load.atlas('Level33A_tomato32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/tomato32.png',window.baseUrl+'json/gradeJson/3.3A/tomato32.json');
        _this.load.atlas('Level33A_carrot32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/carrot32.png',window.baseUrl+'json/gradeJson/3.3A/carrot32.json');
        _this.load.atlas('Level33A_banana32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/banana32.png',window.baseUrl+'json/gradeJson/3.3A/banana32.json');
        _this.load.atlas('Level33A_bread',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/bread.png',window.baseUrl+'json/gradeJson/3.3A/bread.json');
        _this.load.atlas('Level33A_ball32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/ball32.png',window.baseUrl+'json/gradeJson/3.3A/ball32.json');
        _this.load.atlas('Level33A_banana322',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/banana322.png',window.baseUrl+'json/gradeJson/3.3A/banana322.json');
        _this.load.atlas('Level33A_block50',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/block50.png',window.baseUrl+'json/gradeJson/3.3A/block50.json');
        _this.load.atlas('Level33A_bottle322',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/bottle322.png',window.baseUrl+'json/gradeJson/3.3A/bottle322.json');
        _this.load.atlas('Level33A_redbook',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/redbook.png',window.baseUrl+'json/gradeJson/3.3A/redbook.json');
        
        
        //level2
        _this.load.image('Level33A_level2weight1',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight1.png');
        _this.load.image('Level33A_level2weight2',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight2.png');
        //_this.load.image('Level33A_level2weight32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight3.png');
        //_this.load.image('Level33A_level2weight42',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2weight4.png');
        
        
        _this.load.image('Level33A_level2Bg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/level2Bg.png');
        _this.load.image('Level33A_txtbox',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/box.png');
        _this.load.atlas('Level33A_numbg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.3A/numbg.json');
        _this.load.atlas('Level33A_rightBtn',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.3A/rightBtn.json');
        _this.load.atlas('Level33A_wrongBtn',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3A/wrongBtn.json');
        
        _this.load.atlas('Level33A_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.3A/eraser2Anim.json');
        _this.load.atlas('Level33A_BananaAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.3A/BananaAnim.json');
        _this.load.atlas('Level33A_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.3A/CarrotAnim.json');
        _this.load.atlas('Level33A_CoinAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.3A/CoinAnim.json');
        _this.load.atlas('Level33A_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.3A/GlassAnim.json');
        
        _this.load.atlas('Level33A_level2weight3',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.3A/L2.json');
        _this.load.atlas('Level33A_level2weight4',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.3A/R2.json');
       
     
        
        //level33a
        _this.load.image('Level33A_bg1',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/bg1.png');
        _this.load.image('Level33A_level2weight32',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/level2weight32.png');
        _this.load.image('Level33A_level2weight42',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/level2weight42.png');
        _this.load.atlas('Level33A_50g',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/50g.png',window.baseUrl+'json/gradeJson/3.3A/50g.json'); 
        _this.load.atlas('Level33A_100g',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/100g.png',window.baseUrl+'json/gradeJson/3.3A/100g.json'); 
        _this.load.atlas('Level33A_200g',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/200g.png',window.baseUrl+'json/gradeJson/3.3A/200g.json'); 
        _this.load.atlas('Level33A_500g',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/500g.png',window.baseUrl+'json/gradeJson/3.3A/500g.json'); 
        
        _this.load.atlas('Level33A_50gAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/50gAnim.png',window.baseUrl+'json/gradeJson/3.3A/50gAnim.json'); 
        _this.load.atlas('Level33A_100gAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/100gAnim.png',window.baseUrl+'json/gradeJson/3.3A/100gAnim.json'); 
        _this.load.atlas('Level33A_200gAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/200gAnim.png',window.baseUrl+'json/gradeJson/3.3A/200gAnim.json'); 
        _this.load.atlas('Level33A_500gAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/500gAnim.png',window.baseUrl+'json/gradeJson/3.3A/500gAnim.json'); 
        
        _this.load.atlas('Level33A_50gg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/50gg.png',window.baseUrl+'json/gradeJson/3.3A/50gg.json'); 
        _this.load.atlas('Level33A_100gg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/100gg.png',window.baseUrl+'json/gradeJson/3.3A/100gg.json'); 
        _this.load.atlas('Level33A_200gg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/200gg.png',window.baseUrl+'json/gradeJson/3.3A/200gg.json'); 
        _this.load.atlas('Level33A_500gg',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/500gg.png',window.baseUrl+'json/gradeJson/3.3A/500gg.json');
        
        _this.load.atlas('Level33A_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.3A/w1AnimGlow.json');
        
 
        _this.load.atlas('Level33A_targetAnim',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level33a/targetAnim.png',window.baseUrl+'json/gradeJson/3.3A/targetAnim.json');
        _this.load.atlas('Level33A_bottle2',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level3/bottle2.png',window.baseUrl+'json/gradeJson/3.3A/bottle2.json');
        _this.load.atlas('Level33A_bottle',window.baseUrl+'assets/gradeAssets/3.3A/gameAssets/level3/bottle.png',window.baseUrl+'json/gradeJson/3.3A/bottle.json');
        
    }

    if(!window.grade3MW4){

            window.grade3MW4 = true;

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

         //level22
        _this.load.image('Level33B1_Newlevel2weight1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight1.png');
        _this.load.image('Level33B1_Newlevel2weight2',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight2.png');
        _this.load.image('Level33B1_Newlevel2weight3',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight3.png');
        _this.load.image('Level33B1_Newlevel2weight4',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2weight4.png');
        
        
        _this.load.atlas('Level33B1_Newbottle',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bottle.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bottle.json');
        _this.load.atlas('Level33B1_Newjug',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/jug.png',window.baseUrl+'json/gradeJson/3.3B1/level22/jug.json');
        _this.load.atlas('Level33B1_Newpot',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/pot.png',window.baseUrl+'json/gradeJson/3.3B1/level22/pot.json');
        _this.load.atlas('Level33B1_Newcan',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/can.png',window.baseUrl+'json/gradeJson/3.3B1/level22/can.json');
        _this.load.atlas('Level33B1_NewfruitBox',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/fruitBox.png',window.baseUrl+'json/gradeJson/3.3B1/level22/fruitBox.json');
        _this.load.atlas('Level33B1_Newbox1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/box1.png',window.baseUrl+'json/gradeJson/3.3B1/level22/box1.json');
        _this.load.atlas('Level33B1_Newbag1',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bag1.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bag1.json');
        _this.load.atlas('Level33B1_Newbag2',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/bag2.png',window.baseUrl+'json/gradeJson/3.3B1/level22/bag2.json');
        _this.load.atlas('Level33B1_Newcylinder',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/cylinder.png',window.baseUrl+'json/gradeJson/3.3B1/level22/cylinder.json');
        
        _this.load.atlas('Level33B1_New1kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/1kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/1kg.json');
        _this.load.atlas('Level33B1_New2kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/2kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/2kg.json');
        _this.load.atlas('Level33B1_New5kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/5kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/5kg.json');
        _this.load.atlas('Level33B1_New10kg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/10kg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/10kg.json');
        
        _this.load.atlas('Level33B1_New1kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/1kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/1kgAnim.json');
        _this.load.atlas('Level33B1_New2kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/2kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/2kgAnim.json');
        _this.load.atlas('Level33B1_New5kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/5kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/5kgAnim.json');
        _this.load.atlas('Level33B1_New10kgAnim',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/10kgAnim.png',window.baseUrl+'json/gradeJson/3.3B1/level22/10kgAnim.json');
        

        
        _this.load.image('Level33B1_Newlevel2Bg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/level2Bg.png');
        _this.load.image('Level33B1_Newtxtbox',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/box.png');
        _this.load.atlas('Level33B1_Newnumbg',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/numbg.png',window.baseUrl+'json/gradeJson/3.3B1/level22/numbg.json');
        _this.load.atlas('Level33B1_NewrightBtn',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/rightBtn.png',window.baseUrl+'json/gradeJson/3.3B1/level22/rightBtn.json');
        _this.load.atlas('Level33B1_NewwrongBtn',window.baseUrl+'assets/gradeAssets/3.3B1/gameAssets/level22/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3B1/level22/wrongBtn.json');
    }

    if(!window.grade3MW5){

            window.grade3MW5 = true;

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

         _this.load.image('Level33B2_gameBg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/gameBg.png');
        
        _this.load.image('Level33B2_weight1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/weight1.png');
        _this.load.image('Level33B2_weight2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/weight2.png');
        _this.load.image('Level33B2_weight3',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/weight3.png');
        
        _this.load.atlas('Level33B2_Can',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Can.png',window.baseUrl+'json/gradeJson/3.3B2/Can.json');
        _this.load.atlas('Level33B2_Carrot',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Carot.png',window.baseUrl+'json/gradeJson/3.3B2/Carot.json');
        _this.load.atlas('Level33B2_Coin',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Coin.png',window.baseUrl+'json/gradeJson/3.3B2/Coin.json');
        _this.load.atlas('Level33B2_Ball',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Ball.png',window.baseUrl+'json/gradeJson/3.3B2/Ball.json');
        _this.load.atlas('Level33B2_Book',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Book.png',window.baseUrl+'json/gradeJson/3.3B2/Book.json');
        _this.load.atlas('Level33B2_Banana',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Banana.png',window.baseUrl+'json/gradeJson/3.3B2/Banana.json');
        _this.load.atlas('Level33B2_Comb',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/comb.png',window.baseUrl+'json/gradeJson/3.3B2/comb.json');
        _this.load.atlas('Level33B2_Eraser',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/eraser.png',window.baseUrl+'json/gradeJson/3.3B2/eraser.json');
        _this.load.atlas('Level33B2_Eraser2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/eraser2.png',window.baseUrl+'json/gradeJson/3.3B2/eraser2.json');
        _this.load.atlas('Level33B2_Glass',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Glass.png',window.baseUrl+'json/gradeJson/3.3B2/Glass.json');
        _this.load.atlas('Level33B2_Glass2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Glass2.png',window.baseUrl+'json/gradeJson/3.3B2/Glass2.json');
        _this.load.atlas('Level33B2_Mug',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Mug.png',window.baseUrl+'json/gradeJson/3.3B2/Mug.json');
        _this.load.atlas('Level33B2_muggg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/muggg.png',window.baseUrl+'json/gradeJson/3.3B2/muggg.json');
        _this.load.atlas('Level33B2_Key',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Key.png',window.baseUrl+'json/gradeJson/3.3B2/Key.json');
        _this.load.atlas('Level33B2_Pappaya',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Pappaya.png',window.baseUrl+'json/gradeJson/3.3B2/Pappaya.json');
        _this.load.atlas('Level33B2_pappaya1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/pappaya1.png',window.baseUrl+'json/gradeJson/3.3B2/pappaya1.json');
        _this.load.atlas('Level33B2_Pencil',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Pencil.png',window.baseUrl+'json/gradeJson/3.3B2/Pencil.json');
        _this.load.atlas('Level33B2_ScrewDriver',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/ScrewDriver.png',window.baseUrl+'json/gradeJson/3.3B2/ScrewDriver.json');
        _this.load.atlas('Level33B2_Shoe',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/Shoe.png',window.baseUrl+'json/gradeJson/3.3B2/Shoe.json');
        _this.load.atlas('Level33B2_bottle32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/bottle32.png',window.baseUrl+'json/gradeJson/3.3B2/bottle32.json');
        _this.load.atlas('Level33B2_tomato32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/tomato32.png',window.baseUrl+'json/gradeJson/3.3B2/tomato32.json');
        _this.load.atlas('Level33B2_carrot32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/carrot32.png',window.baseUrl+'json/gradeJson/3.3B2/carrot32.json');
        _this.load.atlas('Level33B2_banana32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/banana32.png',window.baseUrl+'json/gradeJson/3.3B2/banana32.json');
        _this.load.atlas('Level33B2_bread',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/bread.png',window.baseUrl+'json/gradeJson/3.3B2/bread.json');
        _this.load.atlas('Level33B2_ball32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/ball32.png',window.baseUrl+'json/gradeJson/3.3B2/ball32.json');
        _this.load.atlas('Level33B2_banana322',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/banana322.png',window.baseUrl+'json/gradeJson/3.3B2/banana322.json');
        _this.load.atlas('Level33B2_block50',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/block50.png',window.baseUrl+'json/gradeJson/3.3B2/block50.json');
        _this.load.atlas('Level33B2_bottle322',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/bottle322.png',window.baseUrl+'json/gradeJson/3.3B2/bottle322.json');
        _this.load.atlas('Level33B2_redbook',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/redbook.png',window.baseUrl+'json/gradeJson/3.3B2/redbook.json');
        
        
        //level2
        _this.load.image('Level33B2_level2weight1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/level2weight1.png');
        _this.load.image('Level33B2_level2weight2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/level2weight2.png');

        _this.load.image('Level33B2_level2Bg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/level2Bg.png');
        _this.load.image('Level33B2_txtbox',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/box.png');
        _this.load.atlas('Level33B2_numbg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/numbg.png',window.baseUrl+'json/gradeJson/3.3B2/numbg.json');
        _this.load.atlas('Level33B2_rightBtn',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/rightBtn.png',window.baseUrl+'json/gradeJson/3.3B2/rightBtn.json');
        _this.load.atlas('Level33B2_wrongBtn',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3B2/wrongBtn.json');
        
        _this.load.atlas('Level33B2_Eraser2Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/eraser2Anim.png',window.baseUrl+'json/gradeJson/3.3B2/eraser2Anim.json');
        _this.load.atlas('Level33B2_BananaAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/BananaAnim.png',window.baseUrl+'json/gradeJson/3.3B2/BananaAnim.json');
        _this.load.atlas('Level33B2_CarrotAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/CarrotAnim.png',window.baseUrl+'json/gradeJson/3.3B2/CarrotAnim.json');
        _this.load.atlas('Level33B2_CoinAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/CoinAnim.png',window.baseUrl+'json/gradeJson/3.3B2/CoinAnim.json');
        _this.load.atlas('Level33B2_Glass2Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/GlassAnim.png',window.baseUrl+'json/gradeJson/3.3B2/GlassAnim.json');
        
        _this.load.atlas('Level33B2_level2weight3',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/L2.png',window.baseUrl+'json/gradeJson/3.3B2/L2.json');
        _this.load.atlas('Level33B2_level2weight4',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level2/R2.png',window.baseUrl+'json/gradeJson/3.3B2/R2.json');
       
             //level3
        _this.load.atlas('Level33B2_bottle',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/bottle.png',window.baseUrl+'json/gradeJson/3.3B2/bottle.json');
        _this.load.atlas('Level33B2_w1Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w1Anim.png',window.baseUrl+'json/gradeJson/3.3B2/w1Anim.json');
        _this.load.image('Level33B2_w1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w1.png');
        _this.load.image('Level33B2_w2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w2.png');
        _this.load.atlas('Level33B2_w2Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w2Anim.png',window.baseUrl+'json/gradeJson/3.3B2/w2Anim.json');
        _this.load.atlas('Level33B2_tomoto',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/tomoto.png',window.baseUrl+'json/gradeJson/3.3B2/tomoto.json');
        _this.load.atlas('Level33B2_spoon',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/spoon.png',window.baseUrl+'json/gradeJson/3.3B2/spoon.json');
        _this.load.atlas('Level33B2_eraser1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/eraser1.png',window.baseUrl+'json/gradeJson/3.3B2/eraser1.json');
        _this.load.atlas('Level33B2_rope',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/rope.png',window.baseUrl+'json/gradeJson/3.3B2/rope.json');
        _this.load.atlas('Level33B2_leef',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/leef.png',window.baseUrl+'json/gradeJson/3.3B2/leef.json');
        _this.load.atlas('Level33B2_coin1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/coin1.png',window.baseUrl+'json/gradeJson/3.3B2/coin1.json');
        _this.load.atlas('Level33B2_Comb1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/Comb1.png',window.baseUrl+'json/gradeJson/3.3B2/Comb1.json');
        _this.load.atlas('Level33B2_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.3B2/w1AnimGlow.json');
        _this.load.atlas('Level33B2_w2AnimGlow',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/w2AnimGlow.png',window.baseUrl+'json/gradeJson/3.3B2/w2AnimGlow.json');


        //level4
        _this.load.atlas('Level33B2_bottle2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level3/bottle2.png',window.baseUrl+'json/gradeJson/3.3B2/bottle2.json');
        
        //level33a
        _this.load.image('Level33B2_bg1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/bg1.png');
        _this.load.image('Level33B2_level2weight32',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/level2weight32.png');
        _this.load.image('Level33B2_level2weight42',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/level2weight42.png');
       
        
        _this.load.atlas('Level33B2_w1AnimGlow',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/w1AnimGlow.png',window.baseUrl+'json/gradeJson/3.3B2/w1AnimGlow.json');
        
 
        _this.load.atlas('Level33B2_targetAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33a/targetAnim.png',window.baseUrl+'json/gradeJson/3.3B2/targetAnim.json');
        
        //level33c
        _this.load.atlas('Level33B2_cylinder33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/cylinder33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/cylinder33.json'); 
        _this.load.atlas('Level33B2_50g33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/50g33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/50g33.json'); 
        _this.load.atlas('Level33B2_100g33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/100g33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/100g33.json'); 
        _this.load.atlas('Level33B2_200g33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/200g33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/200g33.json'); 
        _this.load.atlas('Level33B2_500g33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/500g33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/500g33.json'); 
        
        _this.load.atlas('Level33B2_50g33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/50g33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/50g33Anim.json'); 
        _this.load.atlas('Level33B2_100g33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/100g33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/100g33Anim.json'); 
        _this.load.atlas('Level33B2_200g33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/200g33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/200g33Anim.json'); 
        _this.load.atlas('Level33B2_500g33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/500g33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/500g33Anim.json'); 
        
        _this.load.atlas('Level33B2_1kg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/1kg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/1kg33.json'); 
        _this.load.atlas('Level33B2_2kg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/2kg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/2kg33.json'); 
        _this.load.atlas('Level33B2_5kg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/5kg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/5kg33.json'); 
        _this.load.atlas('Level33B2_10kg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/10kg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/10kg33.json'); 
        
        _this.load.atlas('Level33B2_1kg33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/1kg33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/1kg33Anim.json'); 
        _this.load.atlas('Level33B2_2kg33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/2kg33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/2kg33Anim.json'); 
        _this.load.atlas('Level33B2_5kg33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/5kg33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/5kg33Anim.json'); 
        _this.load.atlas('Level33B2_10kg33Anim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/10kg33Anim.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/10kg33Anim.json'); 
        
        _this.load.atlas('Level33B2_bag33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/bag33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/bag33.json');
        _this.load.atlas('Level33B2_coinbag',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/coinbag.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/coinbag.json');
        _this.load.atlas('Level33B2_box33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/box33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/box33.json');
        _this.load.atlas('Level33B2_fruitbox33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/fruitbox33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/fruitbox33.json');
        _this.load.atlas('Level33B2_can33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/can33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/can33.json');
        _this.load.atlas('Level33B2_pot33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/pot33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/pot33.json');
        _this.load.atlas('Level33B2_mugg33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/mugg33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/mugg33.json');
        _this.load.atlas('Level33B2_bottles33',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/bottles33.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/bottles33.json');
        _this.load.atlas('Level33B2_box-new',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level33c/box-new.png',window.baseUrl+'json/gradeJson/3.3B2/level33c/box-new.json');
        
        
        //level22
        _this.load.image('Level33B2_Newlevel2weight1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight1.png');
        _this.load.image('Level33B2_Newlevel2weight2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight2.png');
        _this.load.image('Level33B2_Newlevel2weight3',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight3.png');
        _this.load.image('Level33B2_Newlevel2weight4',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2weight4.png');
        
        
        _this.load.atlas('Level33B2_Newbottle',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/bottle.png',window.baseUrl+'json/gradeJson/3.3B2/level22/bottle.json');
        _this.load.atlas('Level33B2_Newjug',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/jug.png',window.baseUrl+'json/gradeJson/3.3B2/level22/jug.json');
        _this.load.atlas('Level33B2_Newpot',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/pot.png',window.baseUrl+'json/gradeJson/3.3B2/level22/pot.json');
        _this.load.atlas('Level33B2_Newcan',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/can.png',window.baseUrl+'json/gradeJson/3.3B2/level22/can.json');
        _this.load.atlas('Level33B2_NewfruitBox',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/fruitBox.png',window.baseUrl+'json/gradeJson/3.3B2/level22/fruitBox.json');
        _this.load.atlas('Level33B2_Newbox1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/box1.png',window.baseUrl+'json/gradeJson/3.3B2/level22/box1.json');
        _this.load.atlas('Level33B2_Newbag1',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/bag1.png',window.baseUrl+'json/gradeJson/3.3B2/level22/bag1.json');
        _this.load.atlas('Level33B2_Newbag2',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/bag2.png',window.baseUrl+'json/gradeJson/3.3B2/level22/bag2.json');
        _this.load.atlas('Level33B2_Newcylinder',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/cylinder.png',window.baseUrl+'json/gradeJson/3.3B2/level22/cylinder.json');
        
        _this.load.atlas('Level33B2_New1kg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/1kg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/1kg.json');
        _this.load.atlas('Level33B2_New2kg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/2kg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/2kg.json');
        _this.load.atlas('Level33B2_New5kg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/5kg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/5kg.json');
        _this.load.atlas('Level33B2_New10kg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/10kg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/10kg.json');
        
        _this.load.atlas('Level33B2_New1kgAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/1kgAnim.png',window.baseUrl+'json/gradeJson/3.3B2/level22/1kgAnim.json');
        _this.load.atlas('Level33B2_New2kgAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/2kgAnim.png',window.baseUrl+'json/gradeJson/3.3B2/level22/2kgAnim.json');
        _this.load.atlas('Level33B2_New5kgAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/5kgAnim.png',window.baseUrl+'json/gradeJson/3.3B2/level22/5kgAnim.json');
        _this.load.atlas('Level33B2_New10kgAnim',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/10kgAnim.png',window.baseUrl+'json/gradeJson/3.3B2/level22/10kgAnim.json');
        

        
        _this.load.image('Level33B2_Newlevel2Bg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/level2Bg.png');
        _this.load.image('Level33B2_Newtxtbox',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/box.png');
        _this.load.atlas('Level33B2_Newnumbg',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/numbg.png',window.baseUrl+'json/gradeJson/3.3B2/level22/numbg.json');
        _this.load.atlas('Level33B2_NewrightBtn',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/rightBtn.png',window.baseUrl+'json/gradeJson/3.3B2/level22/rightBtn.json');
        _this.load.atlas('Level33B2_NewwrongBtn',window.baseUrl+'assets/gradeAssets/3.3B2/gameAssets/level22/wrongBtn.png',window.baseUrl+'json/gradeJson/3.3B2/level22/wrongBtn.json');
    }

    },


	create:function(game){

		_this.amplify = null;
        this.Stararr = [];
		noofAttempts=0;
        AnsTimerCount=0;
        selectedAns = "";
        _this.sceneCount = 0;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
		_this.balanceCheck = 0;
		
        no1=0;
       // qArrays = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
       // qArrays = this.shuffle(qArrays);
        count = 0;
        count1 = 0;
        objAdded = 0;
        tempAngle = 0;
        tempweight = 0;
        oneKgAngle=oneKgWeight=twoKgAngle=twoKgWeight=fiveKgAngle=fiveKgWeight=tenKgAngle=tenKgWeight=0;

        qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
        qArrays = this.shuffle(qArrays);
   
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

       

        bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level33A_bg1');
       
	  commonNavBar.addNavBar(this,_this.soundurl,"measurement2");
             commonNavBar.addTimerToTheGame(this,0,0,0);
             commonNavBar.startTimer(this);
             commonNavBar.addScore(this,this.score);
		
         this.generateStarsForTheScene(9);
        this.getQuestion();
        _this.getVoice();
        

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
            case 11: this.gotoEleventhQuestion();
                    break;
            case 12: this.gotoTwevelvethQuestion();
                    break;
            case 13: this.gotoThirteenthQuestion();
                    break;
            case 14: this.gotoFourteenthQuestion();
                    break;            
            case 15: this.gotoFifteenthQuestion();
                    break;
            case 16: this.gotoSixteenthQuestion();
                    break;
            case 17: this.gotoSeventeenthQuestion();
                    break;
          
    	}
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
     
    
    /*stopAllVoice:function(){
        Eng_33A.stop();
        Hin_33A.stop();
        Kan_33A.stop();
 
    },*/
     
   
    removeEverthing:function() 
    {
        no1++;
		//_this.timer1.stop();
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
            
			_this.balanceCheck = 0;
            
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
            //commonNavBar.makeNavbarNull();
            commonNavBar.stopVoice();
                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
           // console.log("gameover");
            objGroup.destroy();
            scale1Group.destroy();
            scale2Group.destroy();
            obj1Group.destroy();
            obj2Group.destroy();
           // this.stopAllVoice();
            this.state.start('weight_MWG_3_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
        }
    },
	
     telemetry:function(target){
		
		/* var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: window.gameid, 
				id_question: window.gameid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			//absdsjsapi.saveInteractEvent(interactEvent);*/
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

            numTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);*/
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=65;
        }
        var txtbox = this.add.sprite(x+20,506,'Level24A_txtbox');
        txtbox.anchor.setTo(0.5);
		txtbox.scale.setTo(1,1.2);
        txtbox.name = "txtbox";
         
             if(window.languageSelected=="English")
                        var gmTxt1 = this.add.text(x+90,505, "gm");
                    else if(window.languageSelected=="Hindi")
                   var gmTxt = this.add.text(x+90,505, "ग्राम");
                    else if(window.languageSelected=="Kannada")
                        var gmTxt = this.add.text(x+90,505, "ಗ್ರಾಂ"); 
					else if(window.languageSelected=="Odiya")
                        var gmTxt = this.add.text(x+90,505, "ଗ୍ରାମ");
					else if(window.languageSelected=="Marathi")
				var gmTxt = this.add.text(x+90,505, "ग्रॅम");
			else if(window.languageSelected=="Telugu")
				var gmTxt = this.add.text(x+90,505, "గ్రాము");
			else if(window.languageSelected=="Tamil")
				var gmTxt = this.add.text(x+90,505, "கிராம்");
			else if(window.languageSelected=="Urdu")
				var gmTxt = this.add.text(x+90,505, "گرام");
                    else
                        var gmTxt = this.add.text(x+90,505, "ગ્રા");
       
            //titletext.scale.setTo(1.5);
			if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya" || window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Telugu" || window.languageSelected=="Tamil" || window.languageSelected=="Urdu"){
				gmTxt.anchor.setTo(0.5);
				gmTxt.align = 'center';

				gmTxt.font = 'Alte Haas Grotesk';
				gmTxt.fontSize = 24;
					//text.fontWeight = 'bold';
				gmTxt.fill = '#65B4C3';

				gmTxt.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
				 numGroup.add(gmTxt);
		}
		else{
			gmTxt1.anchor.setTo(0.5);
			gmTxt1.align = 'center';

			gmTxt1.font = 'myfont';
			gmTxt1.fontSize = 28;
			//gmTxt1.fontWeight = 'normal';
			gmTxt1.fill = '#65B4C3';

			gmTxt1.setShadow(0, 0,'Level33A_rgba(0, 0, 0, 0)', 0);
			 numGroup.add(gmTxt1);
		}
        
        var wrongbtn = numGroup.create(x+160,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
        //wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+220,505,'tick');
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
         
       
        
        wrongbtn.events.onInputDown.add(function(target){ this.telemetry(target);
			
             /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33A_CrossButton", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


            target.frame = 1; 
            commonNavBar.playClickSound();
            
            this.time.events.add(500, function(){
                target.frame = 0;
                enterTxt.setText("");
                selectedAns="";
            
            },this);
        },this);
        
        rightbtn.events.onInputDown.add(function(target){ this.telemetry(target);
			
            noofAttempts++;
            /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33A_TickButton", 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


           commonNavBar.playClickSound();
            target.frame = 1;
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
                    telInitializer2.gameCorrectAns();
                    //console.log("correct");
                    //_this.speakerbtn.inputEnabled=false;
                    this.Stararr.push(3);
                    target.events.onInputDown.removeAll();
                    
                    
                    scale2Group.getByName("50gAnim").frame = 1;
                    scale2Group.getByName("100gAnim").frame = 1;
                    scale2Group.getByName("200gAnim").frame = 1;
                    scale2Group.getByName("500gAnim").frame = 1;
                    
                  
                    
                    var tween = this.add.tween(scale2Group.getByName("50gAnim").scale);
                    tween.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween1 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                    tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween2 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                    tween2.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    var tween3 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                    tween3.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
                    
                    tween.onComplete.add(function(){
                            var tween4 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                            tween4.to({ x:1 , y:1}, 300,'Linear', true, 0);
                    
                            var tween5 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                            tween5.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            var tween6 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                            tween6.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            var tween7 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                            tween7.to({ x:1 , y:1}, 300,'Linear', true, 0);

                            tween4.onComplete.add(function(){

                                        var tween8 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                                        tween8.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween9 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                                        tween9.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween10 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                                        tween10.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        var tween11 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                                        tween11.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                        tween8.onComplete.add(function(){

                                            var tween12 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                                            tween12.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween13 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                                            tween13.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween14 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                                            tween14.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            var tween15 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                                            tween15.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                            tween15.onComplete.add(function(){

                                                    var tween16 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                                                    tween16.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween17 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                                                    tween17.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween18 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                                                    tween18.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    var tween19 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                                                    tween19.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                    tween19.onComplete.add(function(){

                                                            var tween20 = this.add.tween(scale2Group.getByName("50gAnim").scale);
                                                            tween20.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween21 = this.add.tween(scale2Group.getByName("100gAnim").scale);
                                                            tween21.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween22 = this.add.tween(scale2Group.getByName("200gAnim").scale);
                                                            tween22.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            var tween23 = this.add.tween(scale2Group.getByName("500gAnim").scale);
                                                            tween23.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                            tween23.onComplete.add(function(){


                                                                    this.removeEverthing();

                                                            },this);


                                                    },this);


                                            },this);


                                    },this);


                            },this);
                        
                        
                        
                    },this);
                    /*if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
                    }*/

                     /*var currentTime = window.timeSaveFunc();
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

               //telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
                    
                    
                      commonNavBar.playCelebrationSound();
                     var starAnim = starsGroup.getChildAt(count1);
                       // console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim5 = starAnim.animations.add('star');
                        anim5.play();
                        //anim4.onComplete.add(function(){//this.removeEverthing();},this);
                        //this.time.events.add(3000, function(){this.removeEverthing();},this);
                    //count1++;
                 if(window.quizQuest == true)
					{
						commonNavBar.updateScore(+5);
					}
                }
            else
                {
                    telInitializer2.gameWrongAns();
					//noofAttempts++;
                    //_this.speakerbtn.inputEnabled=true;
                    //_this.speakerbtn.input.useHandCursor=true;
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    
                    starsGroup.getChildAt(count1).frame = 1;
                    this.Stararr.push(1);
                    _this.time.events.add(2000, function(){ _this.removeEverthing();}, this);
                    
                    var shakeGroup = this.add.group();
                    shakeGroup.x = scale2Group.x;
                    shakeGroup.y = scale2Group.y;
                    shakeGroup.add(scale2Group.getByName("50gAnim"));
                    shakeGroup.add(scale2Group.getByName("100gAnim"));
                    shakeGroup.add(scale2Group.getByName("200gAnim"));
                    shakeGroup.add(scale2Group.getByName("500gAnim"));
                    
                    shake.shake(10, shakeGroup);
                    
                    
                     commonNavBar.playWrongCelebrationSound();
                   // aiyoh.play(); 
                    this.time.events.add(500, function()
                    {
                        //numGroup.destroy();
                        //objGroup.destroy();
                        //obj1Group.destroy();
                        //obj2Group.destroy();
                        //scale1Group.destroy();
                        
                        scale2Group.add(shakeGroup.getByName("50gAnim"));
                        scale2Group.add(shakeGroup.getByName("100gAnim"));
                        scale2Group.add(shakeGroup.getByName("200gAnim"));
                        scale2Group.add(shakeGroup.getByName("500gAnim"));
                        shakeGroup.destroy();
                        
                        scale2Group.getByName("50gAnim").visible = false;
                        scale2Group.getByName("100gAnim").visible = false;
                        scale2Group.getByName("200gAnim").visible = false;
                        scale2Group.getByName("500gAnim").visible = false;
                        
                        obj2Group.getByName("50g").frame = 0;
                        obj2Group.getByName("100g").frame = 0;
                        obj2Group.getByName("200g").frame = 0;
                        obj2Group.getByName("500g").frame = 0;
                        
                        
                        obj2Group.getByName('200g').inputEnabled = true;
                        obj2Group.getByName('200g').input.useHandCursor = true;
                        obj2Group.getByName('200g').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,fiveKgWeight,fiveKgAngle);
                        },this);
                        
                        obj2Group.getByName('500g').inputEnabled = true;
                        obj2Group.getByName('500g').input.useHandCursor = true;
                        obj2Group.getByName('500g').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,tenKgWeight,tenKgAngle);
                        },this);
                        
                        obj2Group.getByName('100g').inputEnabled = true;
                        obj2Group.getByName('100g').input.useHandCursor = true;
                        obj2Group.getByName('100g').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,twoKgWeight,twoKgAngle);
                        },this);
                        
                        obj2Group.getByName('50g').inputEnabled = true;
                        obj2Group.getByName('50g').input.useHandCursor = true;
                        obj2Group.getByName('50g').events.onInputDown.add(function(target){ this.telemetry(target);
                                this.objectClicked(target,oneKgWeight,oneKgAngle);
                        },this);
                        
                        
                        
                        
                        
                        
                        weightScale2.angle=tempAngle;
                        scale1Group.y=tempweight1;
                        scale2Group.y=tempweight2;
						
						_this.balanceCheck = 0;
                        
                        target.frame = 0;
                    },this);
					_this.time.events.add(300, function(){ target.frame = 0;}, _this);
       if(window.quizQuest == true)
					{
						commonNavBar.updateScore(-5);
					}
                }
        },this);
        
       
    },
    
    
    
    numClicked:function(target){
		/*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33A_NumberBtn"+target.name, 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);
			
        //console.log(target.name);
        
        commonNavBar.playClickSound();
        if(selectedAns.length<3)
        {
            selectedAns += target.frame;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // console.log(selectedAns);
        
    },
    
    gotoFirstQuestion:function(){
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_Pappaya');
        object1.name = "Pappaya";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        
        if(no1==0)
        {
            this.getVoice();
            this.time.events.add(9000,function(){
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);
                   oneKgAngle=0.9;
                oneKgWeight=3;
                   // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3,0.9);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target);
                    twoKgAngle=4;
                twoKgWeight=8;
                    this.objectClicked(target,8,4);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);
                    fiveKgAngle=4.5;
                fiveKgWeight=11;
                    this.objectClicked(target,11,4.5);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);
                    tenKgAngle=6;
                tenKgWeight=16;
                    this.objectClicked(target,16,6);
                },this);
            },this);
        }
        else
        {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){ this.telemetry(target);
                   oneKgAngle=0.9;
                oneKgWeight=3;
                   // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3,0.9);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){ this.telemetry(target);
                    twoKgAngle=4;
                twoKgWeight=8;
                    this.objectClicked(target,8,4);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){ this.telemetry(target);
                    fiveKgAngle=4.5;
                fiveKgWeight=11;
                    this.objectClicked(target,11,4.5);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){ this.telemetry(target);
                    tenKgAngle=6;
                tenKgWeight=16;
                    this.objectClicked(target,16,6);
                },this);
        }
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "600";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
      
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_pappaya1');
        object1.name = "pappaya1";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=6.5;
                    this.objectClicked(target,6.5,3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                    this.objectClicked(target,10,4);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=6.5;
                    this.objectClicked(target,6.5,3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                    this.objectClicked(target,10,4);
                    },this);
            }
            
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "850";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+90;
        
                

               
        
       
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
         tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
       
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bottle32');
        object1.name = "bottle32";
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
               // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=6.9;
                    this.objectClicked(target,6.9,3);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=7.3;
                        this.objectClicked(target,7.3,3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                        this.objectClicked(target,10,4);
                    },this);
                },this);
            }
        else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
               // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=6.9;
                    this.objectClicked(target,6.9,3);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=7.3;
                        this.objectClicked(target,7.3,3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                        this.objectClicked(target,10,4);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "800";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+90;
        
                

               
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
       var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
       
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_muggg');
        object1.name = "muggg";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=1.9;
                        oneKgWeight=5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,5,1.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=6.5;
                        this.objectClicked(target,6.5,3);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.5;
                        fiveKgWeight=9.3;
                        this.objectClicked(target,9.3,3.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                        this.objectClicked(target,10,4);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=1.9;
                        oneKgWeight=5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,5,1.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=6.5;
                        this.objectClicked(target,6.5,3);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.5;
                        fiveKgWeight=9.3;
                        this.objectClicked(target,9.3,3.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=4;
                        tenKgWeight=10;
                        this.objectClicked(target,10,4);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "750";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
      
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
          
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_Book');
        object1.name = "Book";
		//object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                        oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.5;
                        fiveKgWeight=9.3;
                        this.objectClicked(target,9.3,3.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=6;
                        tenKgWeight=15;
                        this.objectClicked(target,15,6);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                        oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.5;
                        fiveKgWeight=9.3;
                        this.objectClicked(target,9.3,3.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=6;
                        tenKgWeight=15;
                        this.objectClicked(target,15,6);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "700";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_tomato32');
        object1.name = "tomato32";
		//object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.8;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.8,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.4;
                        fiveKgWeight=9.4;
                        this.objectClicked(target,9.4,3.4);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5;
                        tenKgWeight=11;
                        this.objectClicked(target,11,5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.8;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.8,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.4;
                        fiveKgWeight=9.4;
                        this.objectClicked(target,9.4,3.4);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5;
                        tenKgWeight=11;
                        this.objectClicked(target,11,5);
                    },this);
            }
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "650";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
      
        
          weightScale2.angle-=8;
          scale1Group.y+=19;
          scale2Group.y-=19;
        
          tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
        this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_carrot32');
        object1.name = "carrot32";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1;
                        fiveKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=13;
                        this.objectClicked(target,13,5.3);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1;
                        fiveKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=13;
                        this.objectClicked(target,13,5.3);
                    },this);
            }
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "550";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

 
        
          weightScale2.angle-=6;
          scale1Group.y+=16;
          scale2Group.y-=16;
        
                      
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_banana32');
        object1.name = "banana32";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=0.9;
                        twoKgWeight=3;
                        this.objectClicked(target,3,0.9);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1.5;
                        fiveKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=14;
                        this.objectClicked(target,14,5.3);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=0.9;
                        twoKgWeight=3;
                        this.objectClicked(target,3,0.9);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1.5;
                        fiveKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=14;
                        this.objectClicked(target,14,5.3);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "500";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
       
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
        
         
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
       var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
       this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bread');
        object1.name = "bread";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1;
                        fiveKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=13;
                        this.objectClicked(target,13,5.3);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=1;
                        fiveKgWeight=5;
                        this.objectClicked(target,5,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=5.3;
                        tenKgWeight=13;
                        this.objectClicked(target,13,5.3);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "550";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
  
        
          weightScale2.angle-=6;
          scale1Group.y+=16;
          scale2Group.y-=16;
        
              tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bottle');
        object1.name = "bottle";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.3;
                        fiveKgWeight=6.5;
                        this.objectClicked(target,6.5,3.3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.3;
                        fiveKgWeight=6.5;
                        this.objectClicked(target,6.5,3.3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "350";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
     
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
         
            tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        
       var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
	 
	 gotoEleventhQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_redbook');
        object1.name = "redbook";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                        object2.inputEnabled = true;
                        object2.input.useHandCursor = true;
                        object2.events.onInputDown.add(function(target){ this.telemetry(target);
                           oneKgAngle=0.9;
                            oneKgWeight=3.5;
                           // this.objectClicked(target,2,0.9);
                            this.objectClicked(target,3.5,0.9);
                        },this);
                        object3.inputEnabled = true;
                        object3.input.useHandCursor = true;
                        object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.3;
                        fiveKgWeight=6.5;
                        this.objectClicked(target,6.5,3.3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                        object2.inputEnabled = true;
                        object2.input.useHandCursor = true;
                        object2.events.onInputDown.add(function(target){ this.telemetry(target);
                           oneKgAngle=0.9;
                            oneKgWeight=3.5;
                           // this.objectClicked(target,2,0.9);
                            this.objectClicked(target,3.5,0.9);
                        },this);
                        object3.inputEnabled = true;
                        object3.input.useHandCursor = true;
                        object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=1.5;
                        twoKgWeight=4.5;
                        this.objectClicked(target,4.5,1.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.3;
                        fiveKgWeight=6.5;
                        this.objectClicked(target,6.5,3.3);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "350";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
 
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
         
                
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
       var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
    
	 gotoTwevelvethQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_ball32');
        object1.name = "ball32";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.2;
                        twoKgWeight=6.9;
                        this.objectClicked(target,6.9,3.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.2;
                        fiveKgWeight=7.2;
                        this.objectClicked(target,7.2,3.2);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.2;
                        twoKgWeight=6.9;
                        this.objectClicked(target,6.9,3.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=3.2;
                        fiveKgWeight=7.2;
                        this.objectClicked(target,7.2,3.2);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "300";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

      
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
         
                  
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
	 
	 gotoThirteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_banana322');
        object1.name = "banana322";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.2;
                        twoKgWeight=6.9;
                        this.objectClicked(target,6.9,3.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=4.5;
                        fiveKgWeight=11;
                        this.objectClicked(target,11,4.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.2;
                        twoKgWeight=6.9;
                        this.objectClicked(target,6.9,3.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=4.5;
                        fiveKgWeight=11;
                        this.objectClicked(target,11,4.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "250";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
  
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
         
               
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
	 
	 gotoFourteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bottle322');
        object1.name = "bottle322";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=2.5;
                        twoKgWeight=5.5;
                        this.objectClicked(target,5.5,2.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=4.9;
                        fiveKgWeight=12;
                        this.objectClicked(target,12,4.9);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=2.5;
                        twoKgWeight=5.5;
                        this.objectClicked(target,5.5,2.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=4.9;
                        fiveKgWeight=12;
                        this.objectClicked(target,12,4.9);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "200";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+90;
        
                

               
        

        
          weightScale2.angle-=5;
          scale1Group.y+=12;
          scale2Group.y-=12;
         
                 tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
	 
	  gotoFifteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_Ball');
        object1.name = "Ball";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.5;
                        twoKgWeight=9;
                        this.objectClicked(target,9,3.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.5;
                        twoKgWeight=9;
                        this.objectClicked(target,9,3.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "150";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
     
        
          weightScale2.angle-=5;
          scale1Group.y+=12;
          scale2Group.y-=12;
          
             tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
	 
	 gotoSixteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_bottle2');
        object1.name = "bottle2";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                    // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.5;
                        twoKgWeight=9;
                        this.objectClicked(target,9,3.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=0.9;
                        oneKgWeight=3.5;
                    // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,3.5,0.9);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=3.5;
                        twoKgWeight=9;
                        this.objectClicked(target,9,3.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "100";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

 
        
          weightScale2.angle-=4;
          scale1Group.y+=9;
          scale2Group.y-=9;
         
                       
        
        tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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
	 
	  gotoSeventeenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
       
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'Level33A_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'Level33A_level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'Level33A_level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(80,220,'Level33A_level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(333,220,'Level33A_level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33A_block50');
        object1.name = "block50";
		object1.scale.setTo(0.9,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'Level33A_50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'Level33A_100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'Level33A_200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'Level33A_500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
          
            if(no1==0)
            {
                this.getVoice();
                this.time.events.add(9000,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=2.6;
                        oneKgWeight=7;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,7,2.6);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=4.5;
                        twoKgWeight=11;
                        this.objectClicked(target,11,4.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){ this.telemetry(target);
                       oneKgAngle=2.6;
                        oneKgWeight=7;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,7,2.6);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){ this.telemetry(target);
                        twoKgAngle=4.5;
                        twoKgWeight=11;
                        this.objectClicked(target,11,4.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){ this.telemetry(target);
                        fiveKgAngle=6;
                        fiveKgWeight=16;
                        this.objectClicked(target,16,6);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){ this.telemetry(target);
                        tenKgAngle=8.5;
                        tenKgWeight=19;
                        this.objectClicked(target,19,8.5);
                    },this);
            }
        
        
        

        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";


        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
      
        
        rightAns = "50";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+110;
                        object1.y = weightScale3.y+60;
        
                

               
        
    
        
          weightScale2.angle-=3;
          scale1Group.y+=7;
          scale2Group.y-=7;
          
              tempAngle = weightScale2.angle;
        tempweight1 = scale1Group.y;
        tempweight2 = scale2Group.y;
        
        var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+5,'Level33A_50gAnim');
        o50gAnim.name = "50gAnim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+5,'Level33A_100gAnim');
        o100gAnim.name = "100gAnim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+5,'Level33A_200gAnim');
        o200gAnim.name = "200gAnim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+5,'Level33A_500gAnim');
        o500gAnim.name = "500gAnim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        
        scale2Group.add(o50gAnim);
        scale2Group.add(o100gAnim);
        scale2Group.add(o200gAnim);
        scale2Group.add(o500gAnim);
        
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

        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level33A_"+target.name, 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);


            commonNavBar.playClickSound();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){

               /* var currentTime = window.timeSaveFunc();
                var interactEvent = 
                { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid,  
                    date_time_event: currentTime, 
                    event_type: "drop", 
                    res_id: "Level33A_"+target.name, 
                    access_token: window.acctkn 
                } */
                
                //absdsjsapi.saveInteractEvent(interactEvent);

                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,weightScale4.getChildAt(0)))
                {
                     _this.balanceCheck +=target.value;
                       var tempFrame = 0;
                       target.frame = 1;
                       target.x = tempX;
                       target.y = tempY;
                       
                        tempName = target.name+"Anim";
                        scale2Group.getByName(tempName).visible = true;
                        
                        scale2Group.getByName(tempName).inputEnabled = true;
                        scale2Group.getByName(tempName).input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        scale2Group.getByName(tempName).events.onInputDown.add(function(target){ this.telemetry(target);
                           // console.log(target.name);
                            if(target.name == "50gAnim")
                                this.objectRemoved(target,oneKgWeight,oneKgAngle);
                            else if(target.name == "100gAnim")
                               this.objectRemoved(target,twoKgWeight,twoKgAngle);
                            else if(target.name == "200gAnim")
                                this.objectRemoved(target,fiveKgWeight,fiveKgAngle);
                            else if(target.name == "500gAnim")
                                this.objectRemoved(target,tenKgWeight,tenKgAngle);
                        },this);
                    
                 commonNavBar.playsnapSound();
				
				
				console.log("Object Added "+_this.balanceCheck);
				if(_this.balanceCheck == Number(rightAns))
				{
					
					_this.time.events.add(200, function()
					{
						commonNavBar.playclungSound();
					}, this);
				}
                
                    target.events.onInputDown.removeAll();
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
					
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

       /* var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level33A_"+target.name, 
                access_token: window.acctkn 
            } */
            
            //absdsjsapi.saveInteractEvent(interactEvent);

			
           commonNavBar.playClickSound();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){

            /*    var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level33A_"+target.name, 
                access_token: window.acctkn
            } 
            */
            //absdsjsapi.saveInteractEvent(interactEvent);


                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {
                     
					  _this.balanceCheck -=target.value;
					 
                       var tempFrame = 0;
                       target.visible = false
                       target.x = tempX;
                       target.y = tempY;
                       
                        tempName = target.name;
                        tempName = tempName.substring(0, tempName.length-4);
                    
                    
                        obj2Group.getByName(tempName).frame = 0;
                        
                        obj2Group.getByName(tempName).inputEnabled = true;
                        obj2Group.getByName(tempName).input.useHandCursor = true;
                        //tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        obj2Group.getByName(tempName).events.onInputDown.add(function(target){ this.telemetry(target);
                            //console.log(tweenVal);
                            if(target.name == "50g")
                                this.objectClicked(target,oneKgWeight,oneKgAngle);
                            else if(target.name == "100g")
                                this.objectClicked(target,twoKgWeight,twoKgAngle);
                            else if(target.name == "200g")
                                this.objectClicked(target,fiveKgWeight,fiveKgAngle);
                            else if(target.name == "500g")
                                this.objectClicked(target,tenKgWeight,tenKgAngle);
                        },this);
                    
                  commonNavBar.playsnapSound();
				
				console.log("Object Removed "+_this.balanceCheck);
					 if(_this.balanceCheck == Number(rightAns))
						{
							
							_this.time.events.add(200, function()
							{
								commonNavBar.playclungSound();
							}, this);
						}
						
                    target.events.onInputDown.removeAll();
                    this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);
					
					
						
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },this);
   },
    
   
                                          
    tweenTheMachineLeft:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this;
        
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle+angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y-weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y+weight}, 0,'Linear', true, 0);
            tween2.onComplete.add(function(){
                _this.input.enabled = true;
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
       var _this = this; 
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle-angle}, 0,'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y+weight}, 0,'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y-weight}, 0,'Linear', true, 0);
        
        tween2.onComplete.add(function(){
                _this.input.enabled = true;
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
    
   /* getVoice:function(){
        this.stopAllVoice();
        switch(qArrays[no1])
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
            case 17:if(window.languageSelected=="English")
                        Eng_33A.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_33A.play();
                    else
                        Kan_33A.play();
                    break;
        }
    }*/

    getVoice:function(question)
    {   
          _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
       
                   if(window.languageSelected == "English")
                    {
                        //_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/English/3.3A.mp3");
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.3A/English/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.3A/English/3.3A.mp3";
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        //_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Hindi/3.3A.mp3");
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.3A/Hindi/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.3A/Hindi/3.3A.mp3";
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        //_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Kannada/3.3A.mp3");
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.3A/Kannada/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.3A/Kannada/3.3A.mp3";
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        //_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Kannada/3.3A.mp3");
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/Gujarati/3.3A/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/Gujarati/3.3A/3.3A.mp3";
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Marathi/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.1/Marathi/3.3A.mp3";
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Telugu/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.1/Telugu/3.3A.mp3";
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Tamil/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.1/Tamil/3.3A.mp3";
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.1/Urdu/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.1/Urdu/3.3A.mp3";
                    }
					else
                    {
                        //_this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Odiya/3.3A.mp3");
                        commonNavBar.getVoice(window.baseUrl+"questionSounds/3.3A/Odiya/3.3A.mp3");
                        _this.soundurl = window.baseUrl+"questionSounds/3.3A/Odiya/3.3A.mp3";
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
        _this.stopVoice();

       /* delete bg1;
        delete starsGroup;
        delete dragBox;
        delete count;
        delete gameBoxGroup;
        delete crocsGroup;
        delete tickMark;
        delete objGroup;
        delete rightOrderArray;
        delete glowOrderArray;
        delete no1;
        delete count;
        delete count1;
        delete qArrays;
        delete graphics;
        delete numGroup;
        delete selectedAns;
        delete rightAns;
        delete mainSprite;
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group;
        delete tweenVal,angleval;
        delete tempName,tp;
        delete tempAngle;
        delete tempweight1;
        delete tempweight2;
        delete speaker;
        delete oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

        delete noofAttempts;
        delete timer;
        delete AnsTimerCount;
        delete enterTxt;*/
        
    }

    
};