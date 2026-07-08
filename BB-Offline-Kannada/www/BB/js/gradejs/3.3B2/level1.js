Game.grade3_3B2level1=function(){
 /*     bg1;
 starsGroup;
 dragBox;
 count;
 gameBoxGroup;
 crocsGroup;
 tickMark;
 objGroup;
 rightOrderArray = [];
 glowOrderArray = [];
 no1;
 count;
 count1;
 qArrays = [];
 graphics;
 numGroup;
 selectedAns = "";
 selectedAns2 = "";
 rightAns = "";
 mainSprite;
  _this.speakerbtn;
 scale1Empty = true;
 scale2Empty = true;
 weightScale1,weightScale2,weightScale3,weightScale4;
 obj1Group,obj2Group;
 tweenVal,angleval;
 tempName,tp;
 tempAngle = 0;
 tempweight1 = 0;
 tempweight2 = 0;
 q1Array=[];
 q2Array=[];
 q3Array=[];
 oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

 object1,object2,object3,object4,object5,object6,object7,object8,object9;
 timelang=0;

 timer;
 noofAttempts;
 AnsTimerCount;
 enterTxt,enterTxt2;

 gameid,questionid;*/
};


Game.grade3_3B2level1.prototype={
	
	
    init:function(game)
    {
        _this = this;

        _this.gameid = "3.3B2";
        
       /* _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("weight3_3B2",gradeSelected);
        
    },

    preload:function(game){
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
		noofAttempts=0;
        AnsTimerCount=0;
        selectedAns = "";
        selectedAns2 = "";
        _this.sceneCount = 0;
		
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		
		_this.balanceCheck = 0;

		
        no1=0;
		qArrays=[];
        count = 0;
        count1 = 0;
        objAdded = 0;
        tempAngle = 0;
        tempweight = 0;
        oneKgAngle=oneKgWeight=twoKgAngle=twoKgWeight=fiveKgAngle=fiveKgWeight=tenKgAngle=tenKgWeight=0;

     //qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
        //qArrays = [5,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
        //qArrays = this.shuffle(qArrays);
        q1Array=[];
        q2Array=[];
        q3Array=[];
        
     /*q1Array[0]=[1,4,7,10,13,16,19,22,25];
        q1Array[1]=[2,5,8,11,14,17,20,23,26];
        q1Array[2]=[3,6,9,12,15,18,21,24,27];
        
        var temp = Math.floor(Math.random()*3);
        
        qArrays = q1Array[temp];
        console.log(temp);
        qArrays = this.shuffle(qArrays);*/
       
  
        
        
		
		q1Array[0]=[1,24,25,19];
        q1Array[1]=[4,4,4,4];
        q1Array[2]=[7,7,7,22];
        q1Array[3]=[10,11,14,14];
        q1Array[4]=[13,15,26,20];
        q1Array[5]=[17,27,18,21];

        q1Array[6]=[23,20,21];
        q1Array[7]=[26,26,24];
        q1Array[8]=[27,27,27];
        
        var temp = Math.floor(Math.random()*4);
        
        qArrays[0]=q1Array[0][temp];
        temp = Math.floor(Math.random()*4);
        qArrays[1]=q1Array[1][temp];
        temp = Math.floor(Math.random()*4);
        qArrays[2]=q1Array[2][temp];
        temp = Math.floor(Math.random()*4);
        qArrays[3]=q1Array[3][temp];
        temp = Math.floor(Math.random()*4);
        qArrays[4]=q1Array[4][temp];
        temp = Math.floor(Math.random()*4);
        qArrays[5]=q1Array[5][temp];
        temp = Math.floor(Math.random()*4);
       /* qArrays[6]=q1Array[6][temp];
        temp = Math.floor(Math.random()*3);
        qArrays[7]=q1Array[7][temp];
        temp = Math.floor(Math.random()*3);
        qArrays[8]=q1Array[8][temp];*/
        
        qArrays = this.shuffle(qArrays);
        console.log(qArrays[0],qArrays[1],qArrays[2],qArrays[3],qArrays[4],qArrays[5]);


        
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

       

        bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level33B2_bg1');
       
	   _this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.scale.setTo(1,1);
		
      /* var backbtn = this.add.button(5,1,'CommonBackBtn',function(){
			 this.stopAllVoice();
				enterTxt.setText("");
                enterTxt2.setText("");
                selectedAns="";
                selectedAns2="";
			this.state.start('grade3levelSelectionScreen');
		},this,1,0,2);

        _this.speakerbtn = this.add.button(908,1,'CommonSpeakerBtn',function(){
			this.getVoice();
		},this,1,0,2);
        */
		
		_this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
           // console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade3levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           
            _this.getVoice();
            
        },_this);
        
		_this.timebg=this.add.sprite(305,6,'Level42C_timer');
		_this.timebg.scale.setTo(1,1);
			
		_this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
		
		_this.timeDisplay.anchor.setTo(0.5);
		_this.timeDisplay.align = 'center';
		_this.timeDisplay.font = 'myfont';
		_this.timeDisplay.fontWeight = 'normal';
		_this.timeDisplay.fontSize = 20;
		//text.fontWeight = 'bold';
		_this.timeDisplay.fill = '#ADFF2F';
		
         _this.generateStarsForTheScene(6);
        
        //no1++;
        this.getQuestion();
        
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

        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();

		/**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
		

        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;

        
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
            case 18: this.gotoEighteenthQuestion();
                    break;
            case 19: this.gotoNineteenthQuestion();
                    break;
            case 20: this.gotoTwentythQuestion();
                    break;
            case 21: this.gotoTwentyonethQuestion();
                    break;
            case 22: this.gotoTwentytwothQuestion();
                    break;
            case 23: this.gotoTwentythreethQuestion();
                    break;
            case 24: this.gotoTwentyfourthQuestion();
                    break;
            case 25: this.gotoTwentyfifthQuestion();
                    break;
            case 26: this.gotoTwentysixthQuestion();
                    break;
            case 27: this.gotoTwentyseventhQuestion();
                    break;
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
	
    removeEverthing:function() 
    {
		_this.timer1.stop();
        numGroup.destroy();
       /* objGroup.destroy();
        obj1Group.destroy();
        obj2Group.destroy();
        scale1Group.destroy();
        scale2Group.destroy();*/
        selectedAns="";
        selectedAns2="";
        if(no1<5)
        {
            count =0;
            no1++;
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
                this.getQuestion();
            },this);
            
        
        }
        else
        {
			_this.timer1.stop();
			_this.timer1 = null;
           // console.log("gameover");
            objGroup.destroy();
            scale1Group.destroy();
            scale2Group.destroy();
            obj1Group.destroy();
            obj2Group.destroy();
           // this.stopAllVoice();
         this.state.start('grade3_3B2Score');
        }
    },
    
    
    
    /*stopAllVoice:function(){
        Eng_33B2.stop();
        Hin_33B2.stop();
        Kan_33B2.stop();
 
    },*/
    
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
            numbg.scale.setTo(0.5,0.5);
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

            numTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);*/
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=55;
        }
        var txtbox = this.add.sprite(x+10,501,'Level33B2_box-new');
        txtbox.anchor.setTo(0.5);
		txtbox.scale.setTo(1,1.2);
        txtbox.name = "txtbox";
         
        if(window.languageSelected=="English")
            kgTxt1 = this.add.text(x+75,505, "Kg");
        else if(window.languageSelected=="Hindi")
            kgTxt = this.add.text(x+80,505, "कि.ग्रा ");
         else if(window.languageSelected=="Kannada")
            kgTxt = this.add.text(x+80,505, "ಕೆಜಿ");
		else if(window.languageSelected=="Odiya")
            kgTxt = this.add.text(x+80,505, "କି.ଗ୍ରା.");
		else if(window.languageSelected=="Marathi")
				var kgTxt = this.add.text(x+80,505, "किलोग्रॅम");
			else if(window.languageSelected=="Telugu")
				var kgTxt = this.add.text(x+80,505, "కిలో");
			else if(window.languageSelected=="Tamil")
				var kgTxt = this.add.text(x+80,505, "கி.கி");
			else if(window.languageSelected=="Urdu")
				var kgTxt = this.add.text(x+80,505, "کلو گرام");
        else
            kgTxt = this.add.text(x+80,505, "કિગ્રા");
            //titletext.scale.setTo(1.5);
			
			if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya" || window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Telugu" || window.languageSelected=="Tamil" || window.languageSelected=="Urdu"){
				kgTxt.anchor.setTo(0.5);
				kgTxt.align = 'center';

				kgTxt.font = 'Comic Sans MS';
				kgTxt.fontSize = 24;
				kgTxt.fontWeight = 'normal';	//text.fontWeight = 'bold';
				kgTxt.fill = '#65B4C3';

				kgTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
				numGroup.add(kgTxt);
         }
		else{
					kgTxt1.anchor.setTo(0.5);
                    kgTxt1.align = 'center';
                    kgTxt1.font = 'myfont';
                    kgTxt1.fontSize = 24;
                    kgTxt1.fontWeight = 'normal';
                    kgTxt1.fill = '#65B4C3';
                    kgTxt1.setShadow(0, 0,'Level33B1_rgba(0, 0, 0, 0)', 0);
					numGroup.add(kgTxt1);
		}
         
        var txtbox2 = this.add.sprite(x+150,501,'Level33B2_box-new');
        txtbox2.anchor.setTo(0.5);
		txtbox2.scale.setTo(1,1.2);
        txtbox2.name = "txtbox2";
         
         if(window.languageSelected=="English")
                        var gmTxt1 = this.add.text(x+210,505, "gm");
                    else if(window.languageSelected=="Hindi")
                   var gmTxt = this.add.text(x+210,505, "ग्राम");
                    else if(window.languageSelected=="Kannada")
                        var gmTxt = this.add.text(x+210,505, "ಗ್ರಾಂ");
					else if(window.languageSelected=="Odiya")
                        var gmTxt = this.add.text(x+210,505, "ଗ୍ରାମ");
					else if(window.languageSelected=="Marathi")
				var gmTxt = this.add.text(x+210,505, "ग्रॅम");
			else if(window.languageSelected=="Telugu")
				var gmTxt = this.add.text(x+210,505, "గ్రాము");
			else if(window.languageSelected=="Tamil")
				var gmTxt = this.add.text(x+210,505, "கி");
			else if(window.languageSelected=="Urdu")
				var gmTxt = this.add.text(x+210,505, "گرام");
                    else
                        var gmTxt = this.add.text(x+210,505, "ગ્રા");
            //titletext.scale.setTo(1.5);
			
			if(window.languageSelected=="Hindi" || window.languageSelected=="Kannada"|| window.languageSelected=="Odiya" || window.languageSelected=="Gujarati" || window.languageSelected=="Marathi" || window.languageSelected=="Telugu" || window.languageSelected=="Tamil" || window.languageSelected=="Urdu"){
				gmTxt.anchor.setTo(0.5);
				gmTxt.align = 'center';

				gmTxt.font = 'Comic Sans MS';
				gmTxt.fontSize = 24;
				gmTxt.fontWeight = 'normal';
				gmTxt.fill = '#65B4C3';

				gmTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
				numGroup.add(gmTxt);
		}
		else
		{
				gmTxt1.anchor.setTo(0.5);
				gmTxt1.align = 'center';

				gmTxt1.font = 'myfont';
				gmTxt1.fontSize = 24;
				gmTxt1.fontWeight = 'normal';
				gmTxt1.fill = '#65B4C3';

				gmTxt1.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
				numGroup.add(gmTxt1);
		}
        
        var wrongbtn = numGroup.create(x+265,505,'eraser');
        wrongbtn.anchor.setTo(0.5);
        //wrongbtn.scale.setTo(0.5,0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+320,505,'tick');
        rightbtn.anchor.setTo(0.5);
        //rightbtn.scale.setTo(0.5,0.5);
        rightbtn.name = "rightbtn";
        //rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        enterTxt = this.add.text(0,3, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 30;
         enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
         
        enterTxt2 = this.add.text(0,3, selectedAns2);
            //titletext.scale.setTo(1.5);
        enterTxt2.anchor.setTo(0.5);
        enterTxt2.align = 'center';

        enterTxt2.font = 'myfont';
        enterTxt2.fontSize = 30;
        enterTxt2.fontWeight = 'normal';
        enterTxt2.fill = '#65B4C3';

        enterTxt2.setShadow(0, 0,'Level33B2_rgba(0, 0, 0, 0)', 0);
        txtbox2.addChild(enterTxt2);
         
        selectedBox = "txtbox";
        txtbox.frame = 1;
         
        txtbox.inputEnabled = true;
        txtbox.input.useHandCursor = true;
        txtbox.events.onInputDown.add(function(){
            selectedBox = "txtbox";
            txtbox.frame = 1;
            txtbox2.frame = 0;
        },this);
         
        txtbox2.inputEnabled = true;
        txtbox2.input.useHandCursor = true;
        txtbox2.events.onInputDown.add(function(){
            selectedBox = "txtbox2";
            txtbox.frame = 0;
            txtbox2.frame = 1;
        },this);
         
        
        
        numGroup.add(txtbox);
        numGroup.add(txtbox2);
        
        
        wrongbtn.events.onInputDown.add(function(target){this.telemetry(target);

            var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33B2_CrossButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


            target.frame = 1; 
             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            this.time.events.add(300, function(){
                target.frame = 0;
                if(selectedBox=="txtbox"){
                    enterTxt.setText("");
                    selectedAns="";
                    txtbox.frame = 1;
                    txtbox2.frame = 0;
                    selectedBox = "txtbox";
                }else if(selectedBox=="txtbox2"){
                    enterTxt2.setText("");
                    selectedAns2="";
                    txtbox.frame = 0;
                    txtbox2.frame = 1;
                    selectedBox = "txtbox2";
                }
            },this);
        },this);
        
        rightbtn.events.onInputDown.add(function(target){this.telemetry(target);

            noofAttempts++;
            var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33B2_TickButton", 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
            
             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            target.frame = 1;
           // console.log(selectedAns,selectedAns2)
             _this.speakerbtn.inputEnabled=false;
                if((selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns) && (selectedAns2==rightAns2||selectedAns2=="0"+rightAns2||selectedAns2=="00"+rightAns2))
                {
                        //console.log("correct");
                    
                        target.events.onInputDown.removeAll();



                        scale2Group.getByName("50g33Anim").frame = 1;
                        scale2Group.getByName("100g33Anim").frame = 1;
                        scale2Group.getByName("200g33Anim").frame = 1;
                        scale2Group.getByName("500g33Anim").frame = 1;
                        scale2Group.getByName("1kg33Anim").frame = 1;
                        scale2Group.getByName("2kg33Anim").frame = 1;
                        scale2Group.getByName("5kg33Anim").frame = 1;
                        scale2Group.getByName("10kg33Anim").frame = 1;


                        var tween = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                        tween.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween1 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                        tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween2 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                        tween2.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween3 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                        tween3.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween4 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                        tween4.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween5 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                        tween5.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween6 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                        tween6.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween7 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                        tween7.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        tween7.onComplete.add(function(){
                                var tween8 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                tween8.to({ x:1. , y:1}, 300,'Linear', true, 0);

                                var tween9 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                tween9.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween10 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                tween10.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween11 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                tween11.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween12 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                tween12.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween13 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                tween13.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween14 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                tween14.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween15 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                tween15.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                tween15.onComplete.add(function(){

                                            var tween16 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                            tween16.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween17 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                            tween17.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween18 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                            tween18.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween19 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                            tween19.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween20 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                            tween20.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween21 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                            tween21.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween22 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                            tween22.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween23 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                            tween23.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            tween23.onComplete.add(function(){

                                                var tween24 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                                tween24.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween25 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                                tween25.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween26 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                                tween26.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween27 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                                tween27.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween28 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                                tween28.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween29 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                                tween29.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween30 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                                tween30.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween31 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                                tween31.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                tween31.onComplete.add(function(){

                                                        var tween32 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                                        tween32.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween33 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                                        tween33.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween34 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                                        tween34.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween35 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                                        tween35.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween36 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                                        tween36.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween37 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                                        tween37.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween38 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                                        tween38.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween39 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                                        tween39.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        tween39.onComplete.add(function(){

                                                                var tween40 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                                                tween40.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween41 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                                                tween41.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween42 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                                                tween42.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween43 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                                                tween43.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween44 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                                                tween44.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween45 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                                                tween45.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween46 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                                                tween46.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween47 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                                                tween47.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                tween47.onComplete.add(function(){


                                                                        this.removeEverthing();

                                                                },this);


                                                        },this);


                                                },this);


                                        },this);


                                },this);



                        },this);

					if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
                    }

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
                        }
                
               // absdsjsapi.saveAssessment(saveAsment);

               telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
					

                          _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
                         var starAnim = starsGroup.getChildAt(count1);
                           // console.log(starAnim);
                            starAnim.smoothed = false;
                            var anim5 = starAnim.animations.add('star');
                            anim5.play();
                            //anim4.onComplete.add(function(){//this.removeEverthing();},this);
                            //this.time.events.add(3000, function(){this.removeEverthing();},this);
                        count1++;
                    }
                else if((selectedAns==rightAns||selectedAns=="0"+rightAns||selectedAns=="00"+rightAns) && selectedAns2=="" && rightAns2=="0")
                {
                       // console.log("correct");
                        target.events.onInputDown.removeAll();



                        scale2Group.getByName("50g33Anim").frame = 1;
                        scale2Group.getByName("100g33Anim").frame = 1;
                        scale2Group.getByName("200g33Anim").frame = 1;
                        scale2Group.getByName("500g33Anim").frame = 1;
                        scale2Group.getByName("1kg33Anim").frame = 1;
                        scale2Group.getByName("2kg33Anim").frame = 1;
                        scale2Group.getByName("5kg33Anim").frame = 1;
                        scale2Group.getByName("10kg33Anim").frame = 1;


                        var tween = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                        tween.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween1 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                        tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween2 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                        tween2.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween3 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                        tween3.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween4 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                        tween4.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween5 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                        tween5.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween6 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                        tween6.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        var tween7 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                        tween7.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                        tween7.onComplete.add(function(){
                                var tween8 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                tween8.to({ x:1. , y:1}, 300,'Linear', true, 0);

                                var tween9 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                tween9.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween10 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                tween10.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween11 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                tween11.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween12 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                tween12.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween13 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                tween13.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween14 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                tween14.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                var tween15 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                tween15.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                tween15.onComplete.add(function(){

                                            var tween16 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                            tween16.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween17 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                            tween17.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween18 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                            tween18.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween19 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                            tween19.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween20 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                            tween20.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween21 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                            tween21.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween22 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                            tween22.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            var tween23 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                            tween23.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                            tween23.onComplete.add(function(){

                                                var tween24 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                                tween24.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween25 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                                tween25.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween26 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                                tween26.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween27 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                                tween27.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween28 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                                tween28.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween29 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                                tween29.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween30 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                                tween30.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                var tween31 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                                tween31.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                tween31.onComplete.add(function(){

                                                        var tween32 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                                        tween32.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween33 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                                        tween33.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween34 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                                        tween34.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween35 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                                        tween35.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween36 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                                        tween36.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween37 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                                        tween37.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween38 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                                        tween38.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        var tween39 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                                        tween39.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);

                                                        tween39.onComplete.add(function(){

                                                                var tween40 = this.add.tween(scale2Group.getByName("50g33Anim").scale);
                                                                tween40.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween41 = this.add.tween(scale2Group.getByName("100g33Anim").scale);
                                                                tween41.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween42 = this.add.tween(scale2Group.getByName("200g33Anim").scale);
                                                                tween42.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween43 = this.add.tween(scale2Group.getByName("500g33Anim").scale);
                                                                tween43.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween44 = this.add.tween(scale2Group.getByName("1kg33Anim").scale);
                                                                tween44.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween45 = this.add.tween(scale2Group.getByName("2kg33Anim").scale);
                                                                tween45.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween46 = this.add.tween(scale2Group.getByName("5kg33Anim").scale);
                                                                tween46.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                var tween47 = this.add.tween(scale2Group.getByName("10kg33Anim").scale);
                                                                tween47.to({ x:1 , y:1}, 300,'Linear', true, 0);

                                                                tween47.onComplete.add(function(){


                                                                        this.removeEverthing();

                                                                },this);


                                                        },this);


                                                },this);


                                        },this);


                                },this);



                        },this);

					if(timer!=null)
                    {
                        timer.stop();
                       timer = null;
                    }

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
                        }
                
                      //  absdsjsapi.saveAssessment(saveAsment);
					telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);

                         // _this.clickSound = _this.add.audio('ClickSound');
                         //   _this.clickSound.play();
                         var starAnim = starsGroup.getChildAt(count1);

                          _this.cmusic1 = _this.add.audio('celebr');
                      _this.cmusic1.play();
                           // console.log(starAnim);
                            starAnim.smoothed = false;
                            var anim5 = starAnim.animations.add('star');
                            anim5.play();
                            //anim4.onComplete.add(function(){//this.removeEverthing();},this);
                            //this.time.events.add(3000, function(){this.removeEverthing();},this);
                        count1++;
                    }
                else
                    {
						noofAttempts++;
                        //console.log("wrong");
                          _this.speakerbtn.inputEnabled=true;
						 _this.speakerbtn.input.useHandCursor=true;
                        enterTxt.setText("");
                        enterTxt2.setText("");
                        selectedAns="";
                        selectedAns2="";
                        selectedBox = "txtbox";
                        txtbox.frame = 1;
                        txtbox2.frame = 0;


                        var shakeGroup = this.add.group();
                        shakeGroup.x = scale2Group.x;
                        shakeGroup.y = scale2Group.y;
                        shakeGroup.add(scale2Group.getByName("10kg33Anim"));
                        shakeGroup.add(scale2Group.getByName("5kg33Anim"));
                        shakeGroup.add(scale2Group.getByName("2kg33Anim"));
                        shakeGroup.add(scale2Group.getByName("1kg33Anim"));
                        shakeGroup.add(scale2Group.getByName("50g33Anim"));
                        shakeGroup.add(scale2Group.getByName("100g33Anim"));
                        shakeGroup.add(scale2Group.getByName("200g33Anim"));
                        shakeGroup.add(scale2Group.getByName("500g33Anim"));
                        
                        
                        
                        

                        shake.shake(10, shakeGroup);


                         _this.wmusic1 = _this.add.audio('waudio');
		              _this.wmusic1.play();
                       // aiyoh.play(); 
                        this.time.events.add(500, function()
                        {
							_this.balanceCheck = 0;
							
                            //numGroup.destroy();
                            //objGroup.destroy();
                            //obj1Group.destroy();
                            //obj2Group.destroy();
                            //scale1Group.destroy();
                            scale2Group.add(shakeGroup.getByName("10kg33Anim"));
                            scale2Group.add(shakeGroup.getByName("5kg33Anim"));
                            scale2Group.add(shakeGroup.getByName("2kg33Anim"));
                            scale2Group.add(shakeGroup.getByName("1kg33Anim"));
                            scale2Group.add(shakeGroup.getByName("50g33Anim"));
                            scale2Group.add(shakeGroup.getByName("100g33Anim"));
                            scale2Group.add(shakeGroup.getByName("200g33Anim"));
                            scale2Group.add(shakeGroup.getByName("500g33Anim"));
                            
                            
                            shakeGroup.destroy();

                            scale2Group.getByName("50g33Anim").visible = false;
                            scale2Group.getByName("100g33Anim").visible = false;
                            scale2Group.getByName("200g33Anim").visible = false;
                            scale2Group.getByName("500g33Anim").visible = false;
                            scale2Group.getByName("1kg33Anim").visible = false;
                            scale2Group.getByName("2kg33Anim").visible = false;
                            scale2Group.getByName("5kg33Anim").visible = false;
                            scale2Group.getByName("10kg33Anim").visible = false;
                            
                            obj2Group.getByName("50g33").frame = 0;
                            obj2Group.getByName("100g33").frame = 0;
                            obj2Group.getByName("200g33").frame = 0;
                            obj2Group.getByName("500g33").frame = 0;
                            obj2Group.getByName("1kg33").frame = 0;
                            obj2Group.getByName("2kg33").frame = 0;
                            obj2Group.getByName("5kg33").frame = 0;
                            obj2Group.getByName("10kg33").frame = 0;

                             obj2Group.getByName('50g33').inputEnabled = true;
                            obj2Group.getByName('50g33').input.useHandCursor = true;
                            obj2Group.getByName('50g33').events.onInputDown.add(function(target){this.telemetry(target);
                                    this.objectClicked(target,fifgWeight,fifgAngle);
                            },this);

                             obj2Group.getByName('100g33').inputEnabled = true;
                            obj2Group.getByName('100g33').input.useHandCursor = true;
                            obj2Group.getByName('100g33').events.onInputDown.add(function(target){this.telemetry(target);
                                    this.objectClicked(target,hungWeight,hungAngle);
                            },this);

                            obj2Group.getByName('200g33').inputEnabled = true;
                            obj2Group.getByName('200g33').input.useHandCursor = true;
                            obj2Group.getByName('200g33').events.onInputDown.add(function(target){this.telemetry(target);
                                    this.objectClicked(target,twohungWeight,twohungAngle);
                            },this);

                            obj2Group.getByName('500g33').inputEnabled = true;
                            obj2Group.getByName('500g33').input.useHandCursor = true;
                            obj2Group.getByName('500g33').events.onInputDown.add(function(target){this.telemetry(target);
                                    this.objectClicked(target,fivehungWeight,fivehungAngle);
                            },this);




                            obj2Group.getByName('1kg33').inputEnabled = true;
                            obj2Group.getByName('1kg33').input.useHandCursor = true;
                            obj2Group.getByName('1kg33').events.onInputDown.add(function(target){this.telemetry(target);
                                    this.objectClicked(target,oneKgWeight,oneKgAngle);
                            },this);

                            obj2Group.getByName('2kg33').inputEnabled = true;
                            obj2Group.getByName('2kg33').input.useHandCursor = true;
                            obj2Group.getByName('2kg33').events.onInputDown.add(function(target){this.telemetry(target);
                                    this.objectClicked(target,twoKgWeight,twoKgAngle);
                            },this);

                            obj2Group.getByName('5kg33').inputEnabled = true;
                            obj2Group.getByName('5kg33').input.useHandCursor = true;
                            obj2Group.getByName('5kg33').events.onInputDown.add(function(target){this.telemetry(target);
                                    this.objectClicked(target,fiveKgWeight,fiveKgAngle);
                            },this);

                            obj2Group.getByName('10kg33').inputEnabled = true;
                            obj2Group.getByName('10kg33').input.useHandCursor = true;
                            obj2Group.getByName('10kg33').events.onInputDown.add(function(target){this.telemetry(target);
                                    this.objectClicked(target,tenKgWeight,tenKgAngle);
                            },this);

                            weightScale2.angle=tempAngle;
                            scale1Group.y=tempweight1;
                            scale2Group.y=tempweight2;

                            target.frame = 0;
                        },this);
                    }
            
        },this);
        
       
    },
    
    
    
    numClicked:function(target){
        //console.log(target.name);

        var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: "Level33B2_NumberBtn"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);
        
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
        if(selectedBox == "txtbox")
        {
            if(selectedAns.length<3)
            {
                selectedAns += target.frame;
                numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
            }
        }
        else if(selectedBox == "txtbox2")
        {
            if(selectedAns2.length<3)
            {
                selectedAns2 += target.frame;
                numGroup.getByName("txtbox2").getChildAt(0).setText(selectedAns2);
            }
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_cylinder33');
        object1.name = "cylinder33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.5;
                    fifgWeight=0.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,0.5,0.5);
                    },this);                    
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.5;
                    hungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.5;
                    twohungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this);    
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=1;
                        fivehungWeight=1;
                        this.objectClicked(target,1,1);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=1;
                        oneKgWeight=2;
                        this.objectClicked(target,2,1);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=2;
                        this.objectClicked(target,2,1);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=4;
                        fiveKgWeight=11;
                        this.objectClicked(target,11,4);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=4.5;
                        tenKgWeight=13;
                        this.objectClicked(target,13,4.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.5;
                    fifgWeight=0.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,0.5,0.5);
                    },this);                    
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.5;
                    hungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.5;
                    twohungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this);    
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=1;
                        fivehungWeight=1;
                        this.objectClicked(target,1,1);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=1;
                        oneKgWeight=2;
                        this.objectClicked(target,2,1);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=1;
                        twoKgWeight=2;
                        this.objectClicked(target,2,1);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=4;
                        fiveKgWeight=11;
                        this.objectClicked(target,11,4);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=4.5;
                        tenKgWeight=13;
                        this.objectClicked(target,13,4.5);
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
      
        
        rightAns = "15";
        rightAns2 = "0";
        
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
      
       
        

                    var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_cylinder33');
        object1.name = "cylinder33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
            
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.1;
                        fifgWeight=0.8;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,0.8,0.1);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.7;
                        hungWeight=2;
                        this.objectClicked(target,1.2,0.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.7;
                        twohungWeight=2;
                        this.objectClicked(target,1.5,0.7);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.9;
                        fivehungWeight=3.5;
                        this.objectClicked(target,4.5,2);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=0.7;
                        oneKgWeight=2.4;
                        this.objectClicked(target,4.5,2);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=9;
                        this.objectClicked(target,4.5,2);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=5.5;
                        fiveKgWeight=14.5;
                        this.objectClicked(target,7.5,3);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=11;
                        tenKgWeight=30;
                        this.objectClicked(target,13,5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.1;
                        fifgWeight=0.8;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,0.8,0.1);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.7;
                        hungWeight=2;
                        this.objectClicked(target,1.2,0.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.7;
                        twohungWeight=2;
                        this.objectClicked(target,1.5,0.7);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.9;
                        fivehungWeight=3.5;
                        this.objectClicked(target,4.5,2);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=0.7;
                        oneKgWeight=2.4;
                        this.objectClicked(target,4.5,2);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=9;
                        this.objectClicked(target,4.5,2);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=5.5;
                        fiveKgWeight=14.5;
                        this.objectClicked(target,7.5,3);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=11;
                        tenKgWeight=30;
                        this.objectClicked(target,13,5);
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
      
        
        rightAns = "15";
        rightAns2 = "800";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=11;
          scale1Group.y+=28;
          scale2Group.y-=28;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                     var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
         weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
        
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_bag33');
        object1.name = "bag33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.5;
                        fifgWeight=1;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,1,0.5);
                    },this);

                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.5;
                        hungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.5;
                        twohungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.5;
                        fivehungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this); 
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=0.9;
                        oneKgWeight=1;
                        this.objectClicked(target,1,0.9);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=2.5;
                        twoKgWeight=6;
                        this.objectClicked(target,6,2.5);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=8;
                        this.objectClicked(target,8,3);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=7;
                        tenKgWeight=18;
                        this.objectClicked(target,18,7);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.5;
                        fifgWeight=1;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,1,0.5);
                    },this);

                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.5;
                        hungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.5;
                        twohungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.5;
                        fivehungWeight=1;
                        this.objectClicked(target,1,0.5);
                    },this); 
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=0.9;
                        oneKgWeight=1;
                        this.objectClicked(target,1,0.9);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=2.5;
                        twoKgWeight=6;
                        this.objectClicked(target,6,2.5);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=8;
                        this.objectClicked(target,8,3);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=7;
                        tenKgWeight=18;
                        this.objectClicked(target,18,7);
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
      
        
      rightAns = "12";
        rightAns2 = "0";
        
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
        
       
        

                    var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_bag33');
        object1.name = "bag33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.1;
                        fifgWeight=0.1;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,0.1,0.1);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.1;
                        hungWeight=0.7;
                        this.objectClicked(target,1,0.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.2;
                        twohungWeight=1.1;
                        this.objectClicked(target,2,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.5;
                        fivehungWeight=2.2;
                        this.objectClicked(target,3,1);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=1;
                        oneKgWeight=2.2;
                        this.objectClicked(target,4,2);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=4;
                        twoKgWeight=9;
                        this.objectClicked(target,6,2.5);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=5;
                        fiveKgWeight=12;
                        this.objectClicked(target,12,4);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=6.5;
                        tenKgWeight=17;
                        this.objectClicked(target,22,8.5);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.1;
                        fifgWeight=0.1;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,0.1,0.1);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.1;
                        hungWeight=0.7;
                        this.objectClicked(target,1,0.5);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.2;
                        twohungWeight=1.1;
                        this.objectClicked(target,2,1);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.5;
                        fivehungWeight=2.2;
                        this.objectClicked(target,3,1);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=1;
                        oneKgWeight=2.2;
                        this.objectClicked(target,4,2);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=4;
                        twoKgWeight=9;
                        this.objectClicked(target,6,2.5);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=5;
                        fiveKgWeight=12;
                        this.objectClicked(target,12,4);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=6.5;
                        tenKgWeight=17;
                        this.objectClicked(target,22,8.5);
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
      
        
        rightAns = "12";
        rightAns2 = "600";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=12;
          scale1Group.y+=35;
          scale2Group.y-=35;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                   var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_coinbag');
        object1.name = "coinbag";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.2;
                        fifgWeight=0.1;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,0.1,0.2);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.2;
                        hungWeight=0.1;
                        this.objectClicked(target,0.1,0.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.2;
                        twohungWeight=0.1;
                        this.objectClicked(target,0.1,0.2);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.2;
                        fivehungWeight=0.1;
                        this.objectClicked(target,0.1,0.2);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=2.5;
                        oneKgWeight=6;
                        this.objectClicked(target,6,2.5);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=7;
                        this.objectClicked(target,7,3);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=7;
                        this.objectClicked(target,7,3);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=7;
                        tenKgWeight=18;
                        this.objectClicked(target,18,7);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.2;
                        fifgWeight=0.1;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,0.1,0.2);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.2;
                        hungWeight=0.1;
                        this.objectClicked(target,0.1,0.2);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.2;
                        twohungWeight=0.1;
                        this.objectClicked(target,0.1,0.2);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.2;
                        fivehungWeight=0.1;
                        this.objectClicked(target,0.1,0.2);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=2.5;
                        oneKgWeight=6;
                        this.objectClicked(target,6,2.5);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=3;
                        twoKgWeight=7;
                        this.objectClicked(target,7,3);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=3;
                        fiveKgWeight=7;
                        this.objectClicked(target,7,3);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=7;
                        tenKgWeight=18;
                        this.objectClicked(target,18,7);
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
      
        
       rightAns = "11";
        rightAns2 = "0";
        
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
        
       
        

                    var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_coinbag');
        object1.name = "coinbag";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=1;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.7,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.2;
					    hungWeight=1;
						this.objectClicked(target,1,0.2);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.2;
					    twohungWeight=1;
						this.objectClicked(target,2,0.8);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.2;
					    fivehungWeight=1;
						this.objectClicked(target,3.3,1.5);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2.5;
					    oneKgWeight=6;
						this.objectClicked(target,3.5,1);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=3;
					    twoKgWeight=7;
						this.objectClicked(target,7,3);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=3;
					    fiveKgWeight=7;
						this.objectClicked(target,7,3);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=5;
					    tenKgWeight=13;
						this.objectClicked(target,13,5);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=1;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.7,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.2;
					    hungWeight=1;
						this.objectClicked(target,1,0.2);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.2;
					    twohungWeight=1;
						this.objectClicked(target,2,0.8);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.2;
					    fivehungWeight=1;
						this.objectClicked(target,3.3,1.5);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2.5;
					    oneKgWeight=6;
						this.objectClicked(target,3.5,1);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=3;
					    twoKgWeight=7;
						this.objectClicked(target,7,3);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=3;
					    fiveKgWeight=7;
						this.objectClicked(target,7,3);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=5;
					    tenKgWeight=13;
						this.objectClicked(target,13,5);
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
      
        
       rightAns = "11";
        rightAns2 = "800";
        
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
        
       
        

                   var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_box33');
        object1.name = "box33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.6;
					   fifgWeight=0.5;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.5,0.6);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.6;
					   hungWeight=0.5;
						this.objectClicked(target,0.5,0.6);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.6;
					   twohungWeight=0.5;
						this.objectClicked(target,0.5,0.6);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.6;
					   fivehungWeight=1;
						this.objectClicked(target,1,0.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=0.9;
					   oneKgWeight=1;
						this.objectClicked(target,1,0.9);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=2.5;
					   twoKgWeight=6.2;
						this.objectClicked(target,6.2,2.5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7;
					   fiveKgWeight=18;
						this.objectClicked(target,18,7);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=33;
						this.objectClicked(target,33,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.6;
					   fifgWeight=0.5;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.5,0.6);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.6;
					   hungWeight=0.5;
						this.objectClicked(target,0.5,0.6);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.6;
					   twohungWeight=0.5;
						this.objectClicked(target,0.5,0.6);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.6;
					   fivehungWeight=1;
						this.objectClicked(target,1,0.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=0.9;
					   oneKgWeight=1;
						this.objectClicked(target,1,0.9);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=2.5;
					   twoKgWeight=6.2;
						this.objectClicked(target,6.2,2.5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7;
					   fiveKgWeight=18;
						this.objectClicked(target,18,7);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=33;
						this.objectClicked(target,33,12);
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
      
        
        rightAns = "7";
        rightAns2 = "0";
        
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
        
       
        

                    var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_box33');
        object1.name = "box33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.6;
					   fifgWeight=0.5;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.5,0.6);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.6;
					   hungWeight=0.5;
						this.objectClicked(target,0.5,0.6);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.6;
					   twohungWeight=0.5;
						this.objectClicked(target,0.5,0.6);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.6;
					   fivehungWeight=1;
						this.objectClicked(target,1,0.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2;
					   oneKgWeight=5;
						this.objectClicked(target,5,2);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=2;
					   twoKgWeight=5;
						this.objectClicked(target,5,2);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=5;
					   fiveKgWeight=14;
						this.objectClicked(target,14,5);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=33;
						this.objectClicked(target,33,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.6;
					   fifgWeight=0.5;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.5,0.6);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.6;
					   hungWeight=0.5;
						this.objectClicked(target,0.5,0.6);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.6;
					   twohungWeight=0.5;
						this.objectClicked(target,0.5,0.6);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.6;
					   fivehungWeight=1;
						this.objectClicked(target,1,0.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2;
					   oneKgWeight=5;
						this.objectClicked(target,5,2);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=2;
					   twoKgWeight=5;
						this.objectClicked(target,5,2);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=5;
					   fiveKgWeight=14;
						this.objectClicked(target,14,5);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=33;
						this.objectClicked(target,33,12);
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
      
        
        rightAns = "8";
        rightAns2 = "0";
        
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
        
       
        

                   var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
       weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_fruitbox33');
        object1.name = "fruitbox33";
        object1.scale.setTo(1,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=0.5;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.5,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.2;
					   hungWeight=0.6;
						this.objectClicked(target,0.6,0.2);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.2;
					   twohungWeight=0.7;
						this.objectClicked(target,0.7,0.2);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.6;
					   fivehungWeight=2.1;
						this.objectClicked(target,2.1,0.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2.5;
					   oneKgWeight=6.2;
						this.objectClicked(target,6.2,2.5);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=3;
					   twoKgWeight=7.6;
						this.objectClicked(target,7.6,3);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7;
					   fiveKgWeight=18;
						this.objectClicked(target,18,7);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=0.5;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.5,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.2;
					   hungWeight=0.6;
						this.objectClicked(target,0.6,0.2);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.2;
					   twohungWeight=0.7;
						this.objectClicked(target,0.7,0.2);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.6;
					   fivehungWeight=2.1;
						this.objectClicked(target,2.1,0.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2.5;
					   oneKgWeight=6.2;
						this.objectClicked(target,6.2,2.5);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=3;
					   twoKgWeight=7.6;
						this.objectClicked(target,7.6,3);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7;
					   fiveKgWeight=18;
						this.objectClicked(target,18,7);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
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
      
        
       rightAns = "6";
        rightAns2 = "0";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+73;
        
                

               
        
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

               var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_fruitbox33');
        object1.name = "fruitbox33";
        object1.scale.setTo(1,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.1;
					   fifgWeight=0.8;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.8,0.1);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.7;
					   hungWeight=2;
						this.objectClicked(target,2,0.7);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.7;
					   twohungWeight=2;
						this.objectClicked(target,2,0.7);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.9;
					   fivehungWeight=3.5;
						this.objectClicked(target,3.5,0.9);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=0.7;
					   oneKgWeight=2.4;
						this.objectClicked(target,2.4,0.7);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=4;
					   twoKgWeight=11;
						this.objectClicked(target,11,4);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=5.5;
					   fiveKgWeight=14.5;
						this.objectClicked(target,14.5,5.5);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=11;
					   tenKgWeight=30;
						this.objectClicked(target,30,11);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.1;
					   fifgWeight=0.8;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.8,0.1);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.7;
					   hungWeight=2;
						this.objectClicked(target,2,0.7);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.7;
					   twohungWeight=2;
						this.objectClicked(target,2,0.7);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.9;
					   fivehungWeight=3.5;
						this.objectClicked(target,3.5,0.9);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=0.7;
					   oneKgWeight=2.4;
						this.objectClicked(target,2.4,0.7);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=4;
					   twoKgWeight=11;
						this.objectClicked(target,11,4);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=5.5;
					   fiveKgWeight=14.5;
						this.objectClicked(target,14.5,5.5);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=11;
					   tenKgWeight=30;
						this.objectClicked(target,30,11);
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
      
        
        rightAns = "6";
        rightAns2 = "800";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+73;
        
                

               
        
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                    var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
         weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_fruitbox33');
        object1.name = "fruitbox33";
        object1.scale.setTo(1,1);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.3;
					   fifgWeight=0.7;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.7,0.3);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.8;
					   hungWeight=1.5;
						this.objectClicked(target,1.5,0.8);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=1;
					   twohungWeight=3;
						this.objectClicked(target,3,1);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.9;
					   fivehungWeight=3.5;
						this.objectClicked(target,3.5,0.9);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=0.7;
					   oneKgWeight=2.4;
						this.objectClicked(target,2.4,0.7);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=4;
					   twoKgWeight=11;
						this.objectClicked(target,11,4);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=5.5;
					   fiveKgWeight=14.5;
						this.objectClicked(target,14.5,5.5);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=11;
					   tenKgWeight=30;
						this.objectClicked(target,30,11);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.3;
					   fifgWeight=0.7;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.7,0.3);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.8;
					   hungWeight=1.5;
						this.objectClicked(target,1.5,0.8);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=1;
					   twohungWeight=3;
						this.objectClicked(target,3,1);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.9;
					   fivehungWeight=3.5;
						this.objectClicked(target,3.5,0.9);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=0.7;
					   oneKgWeight=2.4;
						this.objectClicked(target,2.4,0.7);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=4;
					   twoKgWeight=11;
						this.objectClicked(target,11,4);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=5.5;
					   fiveKgWeight=14.5;
						this.objectClicked(target,14.5,5.5);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=11;
					   tenKgWeight=30;
						this.objectClicked(target,30,11);
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
      
        
        rightAns = "6";
        rightAns2 = "750";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+73;
        
                

               
        
        
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                   var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_can33');
        object1.name = "can33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=1;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,1,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.6;
					   hungWeight=2.1;
						this.objectClicked(target,2.1,0.6);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.6;
					   twohungWeight=2.1;
						this.objectClicked(target,2.1,0.6);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.6;
					   fivehungWeight=2.1;
						this.objectClicked(target,2.1,0.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2.5;
					   oneKgWeight=6.2;
						this.objectClicked(target,6.2,2.5);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=1;
					   twoKgWeight=4;
						this.objectClicked(target,4,1);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=20.3;
						this.objectClicked(target,20.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=10;
					   tenKgWeight=26;
						this.objectClicked(target,26,10);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=1;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,1,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.6;
					   hungWeight=2.1;
						this.objectClicked(target,2.1,0.6);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.6;
					   twohungWeight=2.1;
						this.objectClicked(target,2.1,0.6);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.6;
					   fivehungWeight=2.1;
						this.objectClicked(target,2.1,0.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2.5;
					   oneKgWeight=6.2;
						this.objectClicked(target,6.2,2.5);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=1;
					   twoKgWeight=4;
						this.objectClicked(target,4,1);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=20.3;
						this.objectClicked(target,20.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=10;
					   tenKgWeight=26;
						this.objectClicked(target,26,10);
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
      
        
        rightAns = "5";
        rightAns2 = "0";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                   var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_can33');
        object1.name = "can33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.6;
                        fifgWeight=1.1;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,1.1,0.6);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.6;
                        hungWeight=1.1;
                        this.objectClicked(target,1.1,0.6);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.9;
                        twohungWeight=3;
                        this.objectClicked(target,3,0.9);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=2;
                        fivehungWeight=5.5;
                        this.objectClicked(target,5.5,2);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=2;
                        oneKgWeight=5.5;
                        this.objectClicked(target,5.5,2);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=2;
                        twoKgWeight=5.2;
                        this.objectClicked(target,5.2,2);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=8;
                        fiveKgWeight=21;
                        this.objectClicked(target,21,8);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=12;
                        tenKgWeight=34;
                        this.objectClicked(target,34,12);
                    },this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.6;
                        fifgWeight=1.1;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,1.1,0.6);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.6;
                        hungWeight=1.1;
                        this.objectClicked(target,1.1,0.6);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.9;
                        twohungWeight=3;
                        this.objectClicked(target,3,0.9);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=2;
                        fivehungWeight=5.5;
                        this.objectClicked(target,5.5,2);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=2;
                        oneKgWeight=5.5;
                        this.objectClicked(target,5.5,2);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=2;
                        twoKgWeight=5.2;
                        this.objectClicked(target,5.2,2);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=8;
                        fiveKgWeight=21;
                        this.objectClicked(target,21,8);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=12;
                        tenKgWeight=34;
                        this.objectClicked(target,34,12);
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
      
        
        rightAns = "5";
        rightAns2 = "200";
        
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
        
       
        

                    var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
     gotoEighteenthQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
         weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_can33');
        object1.name = "can33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=0.8;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.8,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=2;
					   hungWeight=3.7;
						this.objectClicked(target,3.7,2);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=1.2;
					   twohungWeight=4;
						this.objectClicked(target,4,1.2);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=2;
					   fivehungWeight=4.5;
						this.objectClicked(target,4.5,2);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2;
					   oneKgWeight=5.5;
						this.objectClicked(target,5.5,2);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=2;
					   twoKgWeight=4.5;
						this.objectClicked(target,4.5,2);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=8;
					   fiveKgWeight=21;
						this.objectClicked(target,21,8);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=0.8;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.8,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=2;
					   hungWeight=3.7;
						this.objectClicked(target,3.7,2);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=1.2;
					   twohungWeight=4;
						this.objectClicked(target,4,1.2);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=2;
					   fivehungWeight=4.5;
						this.objectClicked(target,4.5,2);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=2;
					   oneKgWeight=5.5;
						this.objectClicked(target,5.5,2);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=2;
					   twoKgWeight=4.5;
						this.objectClicked(target,4.5,2);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=8;
					   fiveKgWeight=21;
						this.objectClicked(target,21,8);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
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
      
        
        rightAns = "5";
        rightAns2 = "100";
        
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
        
       
        
 var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
     gotoNineteenthQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
       weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_pot33');
        object1.name = "pot33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					   fifgWeight=0.2;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.2,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.1;
					   hungWeight=0.3;
						this.objectClicked(target,0.3,0.1);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.1;
					   twohungWeight=0.4;
						this.objectClicked(target,0.4,0.1);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.1;
					   fivehungWeight=0.6;
						this.objectClicked(target,0.6,0.1);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=1.6;
					   oneKgWeight=4.4;
						this.objectClicked(target,4.4,1.6);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=6.5;
					   twoKgWeight=16;
						this.objectClicked(target,16,6.5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.2;
					fifgWeight=0.2;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.2,0.2);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.1;
					hungWeight=0.3;
						this.objectClicked(target,0.3,0.1);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.1;
					twohungWeight=0.4;
						this.objectClicked(target,0.4,0.1);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.1;
					fivehungWeight=0.6;
						this.objectClicked(target,0.6,0.1);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=1.6;
					oneKgWeight=4.4;
						this.objectClicked(target,4.4,1.6);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=6.5;
					twoKgWeight=16;
						this.objectClicked(target,16,6.5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					tenKgWeight=34;
						this.objectClicked(target,34,12);
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
      
        
        rightAns = "3";
        rightAns2 = "0";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                   var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
      gotoTwentythQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
       weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_pot33');
        object1.name = "pot33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.5;
					   fifgWeight=1;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,1,0.5);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.6;
					   hungWeight=0.8;
						this.objectClicked(target,0.8,0.6);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.9;
					   twohungWeight=3.9;
						this.objectClicked(target,3.9,0.9);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=1.6;
					   fivehungWeight=5.6;
						this.objectClicked(target,5.6,1.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=1.4;
					   oneKgWeight=3.4;
						this.objectClicked(target,3.4,1.4);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=5;
					   twoKgWeight=13;
						this.objectClicked(target,13,5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.5;
					   fifgWeight=1;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,1,0.5);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.6;
					   hungWeight=0.8;
						this.objectClicked(target,0.8,0.6);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.9;
					   twohungWeight=3.9;
						this.objectClicked(target,3.9,0.9);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=1.6;
					   fivehungWeight=5.6;
						this.objectClicked(target,5.6,1.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=1.4;
					   oneKgWeight=3.4;
						this.objectClicked(target,3.4,1.4);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=5;
					   twoKgWeight=13;
						this.objectClicked(target,13,5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
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
      
        
        rightAns = "3";
        rightAns2 = "200";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        
 var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
     gotoTwentyonethQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_pot33');
        object1.name = "pot33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    					object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.8;
					   fifgWeight=2;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,2,0.8);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.8;
					   hungWeight=2;
						this.objectClicked(target,2,0.8);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=1.6;
					   twohungWeight=5.3;
						this.objectClicked(target,5.3,1.6);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=1.6;
					   fivehungWeight=5.3;
						this.objectClicked(target,5.3,1.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=1.4;
					   oneKgWeight=3.4;
						this.objectClicked(target,3.4,1.4);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=5;
					   twoKgWeight=13;
						this.objectClicked(target,13,5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=8.9;
					   fiveKgWeight=24.3;
						this.objectClicked(target,24.3,8.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.8;
					   fifgWeight=2;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,2,0.8);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.8;
					   hungWeight=2;
						this.objectClicked(target,2,0.8);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=1.6;
					   twohungWeight=5.3;
						this.objectClicked(target,5.3,1.6);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=1.6;
					   fivehungWeight=5.3;
						this.objectClicked(target,5.3,1.6);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=1.4;
					   oneKgWeight=3.4;
						this.objectClicked(target,3.4,1.4);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=5;
					   twoKgWeight=13;
						this.objectClicked(target,13,5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=8.9;
					   fiveKgWeight=24.3;
						this.objectClicked(target,24.3,8.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
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
      
        
        rightAns = "3";
        rightAns2 = "150";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                     var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
     gotoTwentytwothQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_mugg33');
        object1.name = "mugg33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
                    object2.input.useHandCursor = true;
                    object2.events.onInputDown.add(function(target){this.telemetry(target);
                       fifgAngle=0.7;
                     fifgWeight=2.5;
                       // this.objectClicked(target,2,0.9);
                        this.objectClicked(target,2.5,0.7);
                    },this);
                    object3.inputEnabled = true;
                    object3.input.useHandCursor = true;
                    object3.events.onInputDown.add(function(target){this.telemetry(target);
                        hungAngle=0.7;
                         hungWeight=2.5;
                        this.objectClicked(target,2.5,0.7);
                    },this);
                    object4.inputEnabled = true;
                    object4.input.useHandCursor = true;
                    object4.events.onInputDown.add(function(target){this.telemetry(target);
                        twohungAngle=0.9;
                         twohungWeight=2.9;
                        this.objectClicked(target,2.9,0.9);
                    },this);
                    object5.inputEnabled = true;
                    object5.input.useHandCursor = true;
                    object5.events.onInputDown.add(function(target){this.telemetry(target);
                        fivehungAngle=0.9;
                         fivehungWeight=3;
                        this.objectClicked(target,3,0.9);
                    },this);
                    object6.inputEnabled = true;
                    object6.input.useHandCursor = true;
                    object6.events.onInputDown.add(function(target){this.telemetry(target);
                        oneKgAngle=1.6;
                         oneKgWeight=4.2;
                        this.objectClicked(target,4.2,1.6);
                    },this);
                    object7.inputEnabled = true;
                    object7.input.useHandCursor = true;
                    object7.events.onInputDown.add(function(target){this.telemetry(target);
                        twoKgAngle=7.3;
                         twoKgWeight=20;
                        this.objectClicked(target,20,7.3);
                    },this);
                    object8.inputEnabled = true;
                    object8.input.useHandCursor = true;
                    object8.events.onInputDown.add(function(target){this.telemetry(target);
                        fiveKgAngle=7.9;
                         fiveKgWeight=22.3;
                        this.objectClicked(target,22.3,7.9);
                    },this);
                    object9.inputEnabled = true;
                    object9.input.useHandCursor = true;
                    object9.events.onInputDown.add(function(target){this.telemetry(target);
                        tenKgAngle=12;
                         tenKgWeight=34;
                        this.objectClicked(target,34,12);
                    },this);
                },this);
            }
            else
            {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){this.telemetry(target);
                   fifgAngle=0.7;
                 fifgWeight=2.5;
                   // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,2.5,0.7);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){this.telemetry(target);
                    hungAngle=0.7;
                     hungWeight=2.5;
                    this.objectClicked(target,2.5,0.7);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){this.telemetry(target);
                    twohungAngle=0.9;
                     twohungWeight=2.9;
                    this.objectClicked(target,2.9,0.9);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){this.telemetry(target);
                    fivehungAngle=0.9;
                     fivehungWeight=3;
                    this.objectClicked(target,3,0.9);
                },this);
                object6.inputEnabled = true;
                object6.input.useHandCursor = true;
                object6.events.onInputDown.add(function(target){this.telemetry(target);
                    oneKgAngle=1.6;
                     oneKgWeight=4.2;
                    this.objectClicked(target,4.2,1.6);
                },this);
                object7.inputEnabled = true;
                object7.input.useHandCursor = true;
                object7.events.onInputDown.add(function(target){this.telemetry(target);
                    twoKgAngle=7.3;
                     twoKgWeight=20;
                    this.objectClicked(target,20,7.3);
                },this);
                object8.inputEnabled = true;
                object8.input.useHandCursor = true;
                object8.events.onInputDown.add(function(target){this.telemetry(target);
                    fiveKgAngle=7.9;
                     fiveKgWeight=22.3;
                    this.objectClicked(target,22.3,7.9);
                },this);
                object9.inputEnabled = true;
                object9.input.useHandCursor = true;
                object9.events.onInputDown.add(function(target){this.telemetry(target);
                    tenKgAngle=12;
                     tenKgWeight=34;
                    this.objectClicked(target,34,12);
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
      
        
        rightAns = "2";
        rightAns2 = "0";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                     var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
     gotoTwentythreethQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_mugg33');
        object1.name = "mugg33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.5;
					   fifgWeight=0.9;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.9,0.5);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.5;
					   hungWeight=1.5;
						this.objectClicked(target,1.5,0.5);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.8;
					   twohungWeight=2;
						this.objectClicked(target,2,0.8);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=2.3;
					   fivehungWeight=6;
						this.objectClicked(target,6,2.3);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=3;
					   oneKgWeight=7.5;
						this.objectClicked(target,7.5,3);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=5;
					   twoKgWeight=14;
						this.objectClicked(target,14,5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.5;
					   fifgWeight=0.9;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.9,0.5);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.5;
					   hungWeight=1.5;
						this.objectClicked(target,1.5,0.5);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.8;
					   twohungWeight=2;
						this.objectClicked(target,2,0.8);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=2.3;
					   fivehungWeight=6;
						this.objectClicked(target,6,2.3);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=3;
					   oneKgWeight=7.5;
						this.objectClicked(target,7.5,3);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=5;
					   twoKgWeight=14;
						this.objectClicked(target,14,5);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
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
      
        
       rightAns = "2";
        rightAns2 = "500";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                     var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
     gotoTwentyfourthQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
         weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_mugg33');
        object1.name = "mugg33";
        object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.5;
					   fifgWeight=1;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,1,0.5);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.5;
					   hungWeight=1.5;
						this.objectClicked(target,1.5,0.5);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=1.3;
					   twohungWeight=4;
						this.objectClicked(target,4,1.3);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=2.3;
					   fivehungWeight=5.5;
						this.objectClicked(target,5.5,2.3);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=3;
					   oneKgWeight=6.5;
						this.objectClicked(target,6.5,3);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=6;
					   twoKgWeight=16;
						this.objectClicked(target,16,6);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.5;
					   fifgWeight=1;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,1,0.5);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.5;
					   hungWeight=1.5;
						this.objectClicked(target,1.5,0.5);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=1.3;
					   twohungWeight=4;
						this.objectClicked(target,4,1.3);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=2.3;
					   fivehungWeight=5.5;
						this.objectClicked(target,5.5,2.3);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=3;
					   oneKgWeight=6.5;
						this.objectClicked(target,6.5,3);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=6;
					   twoKgWeight=16;
						this.objectClicked(target,16,6);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=12;
					   tenKgWeight=34;
						this.objectClicked(target,34,12);
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
      
        
        rightAns = "2";
        rightAns2 = "200";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                    var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
     gotoTwentyfifthQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_bottles33');
        object1.name = "bottles33";
        //object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.7;
					   fifgWeight=2.5;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,2.5,0.7);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.7;
					   hungWeight=2.5;
						this.objectClicked(target,2.5,0.7);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.9;
					   twohungWeight=2.9;
						this.objectClicked(target,2.9,0.9);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.9;
					   fivehungWeight=3;
						this.objectClicked(target,3,0.9);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=5;
					   oneKgWeight=14;
						this.objectClicked(target,14,5);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=7.3;
					   twoKgWeight=20;
						this.objectClicked(target,20,7.3);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=10;
					   tenKgWeight=26;
						this.objectClicked(target,26,10);
					},this);
                },this);
            }
            else
            {
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.7;
					   fifgWeight=2.5;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,2.5,0.7);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.7;
					   hungWeight=2.5;
						this.objectClicked(target,2.5,0.7);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.9;
					   twohungWeight=2.9;
						this.objectClicked(target,2.9,0.9);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.9;
					   fivehungWeight=3;
						this.objectClicked(target,3,0.9);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=5;
					   oneKgWeight=14;
						this.objectClicked(target,14,5);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=7.3;
					   twoKgWeight=20;
						this.objectClicked(target,20,7.3);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=10;
					   tenKgWeight=26;
						this.objectClicked(target,26,10);
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
      
        
        rightAns = "1";
        rightAns2 = "0";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                  var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;
        

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
    gotoTwentysixthQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
       weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_bottles33');
        object1.name = "bottles33";
        //object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                        object2.inputEnabled = true;
						object2.input.useHandCursor = true;
						object2.events.onInputDown.add(function(target){this.telemetry(target);
						   fifgAngle=0.1;
						  fifgWeight=0.8;
						   // this.objectClicked(target,2,0.9);
							this.objectClicked(target,0.8,0.1);
						},this);
						object3.inputEnabled = true;
						object3.input.useHandCursor = true;
						object3.events.onInputDown.add(function(target){this.telemetry(target);
							hungAngle=0.7;
						      hungWeight=2.5;
							this.objectClicked(target,2.5,0.7);
						},this);
						object4.inputEnabled = true;
						object4.input.useHandCursor = true;
						object4.events.onInputDown.add(function(target){this.telemetry(target);
							twohungAngle=0.9;
						      twohungWeight=3.5;
							this.objectClicked(target,3.5,0.9);
						},this);
						object5.inputEnabled = true;
						object5.input.useHandCursor = true;
						object5.events.onInputDown.add(function(target){this.telemetry(target);
							fivehungAngle=0.9;
						      fivehungWeight=3.5;
							this.objectClicked(target,3.5,0.9);
						},this);
						object6.inputEnabled = true;
						object6.input.useHandCursor = true;
						object6.events.onInputDown.add(function(target){this.telemetry(target);
							oneKgAngle=5;
						      oneKgWeight=12;
							this.objectClicked(target,12,5);
						},this);
						object7.inputEnabled = true;
						object7.input.useHandCursor = true;
						object7.events.onInputDown.add(function(target){this.telemetry(target);
							twoKgAngle=7.3;
						      twoKgWeight=20;
							this.objectClicked(target,20,7.3);
						},this);
						object8.inputEnabled = true;
						object8.input.useHandCursor = true;
						object8.events.onInputDown.add(function(target){this.telemetry(target);
							fiveKgAngle=7.9;
						      fiveKgWeight=22.3;
							this.objectClicked(target,22.3,7.9);
						},this);
						object9.inputEnabled = true;
						object9.input.useHandCursor = true;
						object9.events.onInputDown.add(function(target){this.telemetry(target);
							tenKgAngle=10;
						      tenKgWeight=26;
							this.objectClicked(target,26,10);
						},this);
                },this);
            }
            else
            {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){this.telemetry(target);
                   fifgAngle=0.1;
                  fifgWeight=0.8;
                   // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,0.8,0.1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){this.telemetry(target);
                    hungAngle=0.7;
                      hungWeight=2.5;
                    this.objectClicked(target,2.5,0.7);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){this.telemetry(target);
                    twohungAngle=0.9;
                      twohungWeight=3.5;
                    this.objectClicked(target,3.5,0.9);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){this.telemetry(target);
                    fivehungAngle=0.9;
                      fivehungWeight=3.5;
                    this.objectClicked(target,3.5,0.9);
                },this);
                object6.inputEnabled = true;
                object6.input.useHandCursor = true;
                object6.events.onInputDown.add(function(target){this.telemetry(target);
                    oneKgAngle=5;
                      oneKgWeight=12;
                    this.objectClicked(target,12,5);
                },this);
                object7.inputEnabled = true;
                object7.input.useHandCursor = true;
                object7.events.onInputDown.add(function(target){this.telemetry(target);
                    twoKgAngle=7.3;
                      twoKgWeight=20;
                    this.objectClicked(target,20,7.3);
                },this);
                object8.inputEnabled = true;
                object8.input.useHandCursor = true;
                object8.events.onInputDown.add(function(target){this.telemetry(target);
                    fiveKgAngle=7.9;
                      fiveKgWeight=22.3;
                    this.objectClicked(target,22.3,7.9);
                },this);
                object9.inputEnabled = true;
                object9.input.useHandCursor = true;
                object9.events.onInputDown.add(function(target){this.telemetry(target);
                    tenKgAngle=10;
                      tenKgWeight=26;
                    this.objectClicked(target,26,10);
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
      
        
       rightAns = "1";
        rightAns2 = "100";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                    var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
    
    gotoTwentyseventhQuestion:function(){
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
        mainSprite = this.add.sprite(560,192,'Level33B2_shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
         weightScale1 = this.add.sprite(this.world.centerX-150,363,'Level33B2_Newlevel2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,374,'Level33B2_level2weight2');
        weightScale2.scale.setTo(1.1);
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(65,274,'Level33B2_level2weight32');
        
        var graphics = this.add.graphics(0, 0);
		graphics.lineStyle(1, 0xFFFFFF, 0.8);
		graphics.beginFill(0xFF700B, 1);
		graphics.drawRect(0,0,200,70);		
		graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(335,274,'Level33B2_level2weight42');
        
        var graphics1 = this.add.graphics(40, 0);
		graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		graphics1.beginFill(0xFF700B, 1);
		graphics1.drawRect(0,0,200,70);		
		graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
       object1 = this.add.sprite(this.world.centerX-100,280,'Level33B2_bottles33');
        object1.name = "bottles33";
        //object1.scale.setTo(0.8,0.85);
        mainSprite = object1;
       
        object1.anchor.setTo(0.5,1);
        
        //obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            object2 = this.add.sprite(this.world.centerX+305,this.world.centerY-135,'Level33B2_50g33');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g33";
            object2.value = 50;
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object2);
        
        
            object3 = this.add.sprite(this.world.centerX+360,this.world.centerY-130,'Level33B2_100g33');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g33";
            object3.value = 100;
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object3);
        
            object4 = this.add.sprite(this.world.centerX+330,this.world.centerY-75,'Level33B2_200g33');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g33";
            object4.value = 200;
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object4);
        
            object5 = this.add.sprite(this.world.centerX+370,this.world.centerY-9,'Level33B2_500g33');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g33";
            object5.value = 500;
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object5);
        
            object6 = this.add.sprite(this.world.centerX+290,this.world.centerY-9,'Level33B2_1kg33');
            //object2.name = objArray[qArrays[count]][1];
            object6.name = "1kg33";
            object6.value = 1;
            object6.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object6);
        
            object7 = this.add.sprite(this.world.centerX+330,this.world.centerY+65,'Level33B2_2kg33');
            //object2.name = objArray[qArrays[count]][1];
            object7.name = "2kg33";
            object7.value = 2;
            object7.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object7);
        
            object8 = this.add.sprite(this.world.centerX+375,this.world.centerY+140,'Level33B2_5kg33');
            //object2.name = objArray[qArrays[count]][1];
            object8.name = "5kg33";
            object8.value = 5;
            object8.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object8);
        
            object9 = this.add.sprite(this.world.centerX+280,this.world.centerY+145,'Level33B2_10kg33');
            //object2.name = objArray[qArrays[count]][1];
            object9.name = "10kg33";
            object9.value = 10;
            object9.anchor.setTo(0.5,1);
            //object6.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            
            //y+=12;
            obj2Group.add(object9);
        
            if(no1==0)
            {
                this.getVoice();
                if(window.languageSelected=="English")
                    timelang=11000;
                else if(window.languageSelected=="ಕನ್ನಡ")
                    timelang=12000;
                else
                    timelang=10000;
                this.time.events.add(timelang,function(){
                    object2.inputEnabled = true;
					object2.input.useHandCursor = true;
					object2.events.onInputDown.add(function(target){this.telemetry(target);
					   fifgAngle=0.1;
					   fifgWeight=0.8;
					   // this.objectClicked(target,2,0.9);
						this.objectClicked(target,0.8,0.1);
					},this);
					object3.inputEnabled = true;
					object3.input.useHandCursor = true;
					object3.events.onInputDown.add(function(target){this.telemetry(target);
						hungAngle=0.7;
					   hungWeight=2;
						this.objectClicked(target,2,0.7);
					},this);
					object4.inputEnabled = true;
					object4.input.useHandCursor = true;
					object4.events.onInputDown.add(function(target){this.telemetry(target);
						twohungAngle=0.7;
					   twohungWeight=2;
						this.objectClicked(target,2,0.7);
					},this);
					object5.inputEnabled = true;
					object5.input.useHandCursor = true;
					object5.events.onInputDown.add(function(target){this.telemetry(target);
						fivehungAngle=0.9;
					   fivehungWeight=3.5;
						this.objectClicked(target,3.5,0.9);
					},this);
					object6.inputEnabled = true;
					object6.input.useHandCursor = true;
					object6.events.onInputDown.add(function(target){this.telemetry(target);
						oneKgAngle=3;
					   oneKgWeight=7;
						this.objectClicked(target,7,3);
					},this);
					object7.inputEnabled = true;
					object7.input.useHandCursor = true;
					object7.events.onInputDown.add(function(target){this.telemetry(target);
						twoKgAngle=7.3;
					   twoKgWeight=20;
						this.objectClicked(target,20,7.3);
					},this);
					object8.inputEnabled = true;
					object8.input.useHandCursor = true;
					object8.events.onInputDown.add(function(target){this.telemetry(target);
						fiveKgAngle=7.9;
					   fiveKgWeight=22.3;
						this.objectClicked(target,22.3,7.9);
					},this);
					object9.inputEnabled = true;
					object9.input.useHandCursor = true;
					object9.events.onInputDown.add(function(target){this.telemetry(target);
						tenKgAngle=10;
					   tenKgWeight=26;
						this.objectClicked(target,26,10);
					},this);
                },this);
            }
            else
            {
                object2.inputEnabled = true;
                object2.input.useHandCursor = true;
                object2.events.onInputDown.add(function(target){this.telemetry(target);
                   fifgAngle=0.1;
                   fifgWeight=0.8;
                   // this.objectClicked(target,2,0.9);
                    this.objectClicked(target,0.8,0.1);
                },this);
                object3.inputEnabled = true;
                object3.input.useHandCursor = true;
                object3.events.onInputDown.add(function(target){this.telemetry(target);
                    hungAngle=0.7;
                   hungWeight=2;
                    this.objectClicked(target,2,0.7);
                },this);
                object4.inputEnabled = true;
                object4.input.useHandCursor = true;
                object4.events.onInputDown.add(function(target){this.telemetry(target);
                    twohungAngle=0.7;
                   twohungWeight=2;
                    this.objectClicked(target,2,0.7);
                },this);
                object5.inputEnabled = true;
                object5.input.useHandCursor = true;
                object5.events.onInputDown.add(function(target){this.telemetry(target);
                    fivehungAngle=0.9;
                   fivehungWeight=3.5;
                    this.objectClicked(target,3.5,0.9);
                },this);
                object6.inputEnabled = true;
                object6.input.useHandCursor = true;
                object6.events.onInputDown.add(function(target){this.telemetry(target);
                    oneKgAngle=3;
                   oneKgWeight=7;
                    this.objectClicked(target,7,3);
                },this);
                object7.inputEnabled = true;
                object7.input.useHandCursor = true;
                object7.events.onInputDown.add(function(target){this.telemetry(target);
                    twoKgAngle=7.3;
                   twoKgWeight=20;
                    this.objectClicked(target,20,7.3);
                },this);
                object8.inputEnabled = true;
                object8.input.useHandCursor = true;
                object8.events.onInputDown.add(function(target){this.telemetry(target);
                    fiveKgAngle=7.9;
                   fiveKgWeight=22.3;
                    this.objectClicked(target,22.3,7.9);
                },this);
                object9.inputEnabled = true;
                object9.input.useHandCursor = true;
                object9.events.onInputDown.add(function(target){this.telemetry(target);
                    tenKgAngle=10;
                   tenKgWeight=26;
                    this.objectClicked(target,26,10);
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
      
        
        rightAns = "1";
        rightAns2 = "800";
        
                        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
                

               
        
        
        
          weightScale2.angle-=6;
          scale1Group.y+=14;
          scale2Group.y-=14;
		  
		  tempAngle = weightScale2.angle;
		  tempweight1 = scale1Group.y;
          tempweight2 = scale2Group.y;
        
       
        

                   var o1kgAnim = this.add.sprite( weightScale4.x+90, weightScale4.y+58,'Level33B2_1kg33Anim');
                    o1kgAnim.name = "1kg33Anim";
                    o1kgAnim.value = 1;
                    o1kgAnim.anchor.setTo(0.5,1);
                    o1kgAnim.visible = false;


                    var o2kgAnim = this.add.sprite( weightScale4.x+145, weightScale4.y+70,'Level33B2_2kg33Anim');
                    o2kgAnim.name = "2kg33Anim";
                    o2kgAnim.value = 2;
                    o2kgAnim.anchor.setTo(0.5,1);
                    o2kgAnim.visible = false;


                    var o5kgAnim = this.add.sprite( weightScale4.x+130, weightScale4.y+45,'Level33B2_5kg33Anim');
                    o5kgAnim.name = "5kg33Anim";
                    o5kgAnim.value = 5;
                    o5kgAnim.anchor.setTo(0.5,1);
                    o5kgAnim.visible = false;


                    var o10kgAnim = this.add.sprite( weightScale4.x+205, weightScale4.y+65,'Level33B2_10kg33Anim');
                    o10kgAnim.name = "10kg33Anim";
                    o10kgAnim.value = 10;
                    o10kgAnim.anchor.setTo(0.5,1);
                    o10kgAnim.visible = false;
       
         var o50gAnim = this.add.sprite(this.world.centerX-70,this.world.centerY+60,'Level33B2_50g33Anim');
        o50gAnim.name = "50g33Anim";
        o50gAnim.value = 50;
        o50gAnim.anchor.setTo(0.5,1);
        o50gAnim.visible = false;
        
        var o100gAnim = this.add.sprite(this.world.centerX-30,this.world.centerY+60,'Level33B2_100g33Anim');
        o100gAnim.name = "100g33Anim";
        o100gAnim.value = 100;
        o100gAnim.anchor.setTo(0.5,1);
        o100gAnim.visible = false;
        
        var o200gAnim = this.add.sprite(this.world.centerX+13,this.world.centerY+60,'Level33B2_200g33Anim');
        o200gAnim.name = "200g33Anim";
        o200gAnim.value = 200;
        o200gAnim.anchor.setTo(0.5,1);
        o200gAnim.visible = false;
        
        var o500gAnim = this.add.sprite(this.world.centerX+60,this.world.centerY+60,'Level33B2_500g33Anim');
        o500gAnim.name = "500g33Anim";
        o500gAnim.value = 500;
        o500gAnim.anchor.setTo(0.5,1);
        o500gAnim.visible = false;

        
        scale2Group.add(o5kgAnim);
        scale2Group.add(o10kgAnim);
        scale2Group.add(o2kgAnim);
        scale2Group.add(o1kgAnim);
        
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
		
		this.t1 = tween1;
		this.t2 = tween2;
         var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level3B2_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(_this.stopDragging1,this);
   },
   
   stopDragging1:function(target){

                var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level3B2_"+target.name, 
                access_token: window.acctkn 
            } 
            
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
                        tweenVal = this.t1;
                        angleVal = this.t2;
                        scale2Group.getByName(tempName).events.onInputDown.add(function(target){this.telemetry(target);
                           // console.log(target.name);
                            if(target.name == "50g33Anim")
                                this.objectRemoved(target,fifgWeight,fifgAngle);
                            else if(target.name == "100g33Anim")
                               this.objectRemoved(target,hungWeight,hungAngle);
                            else if(target.name == "200g33Anim")
                                this.objectRemoved(target,twohungWeight,twohungAngle);
                            else if(target.name == "500g33Anim")
                                this.objectRemoved(target,fivehungWeight,fivehungAngle);
                            else if(target.name == "1kg33Anim")
                                this.objectRemoved(target,oneKgWeight,oneKgAngle);
                            else if(target.name == "2kg33Anim")
                                this.objectRemoved(target,twoKgWeight,twoKgAngle);
                            else if(target.name == "5kg33Anim")
                                this.objectRemoved(target,fiveKgWeight,fiveKgAngle);
                            else if(target.name == "10kg33Anim")
                                this.objectRemoved(target,tenKgWeight,tenKgAngle);
                        },this);
                    
                     _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
				
				
				if(_this.balanceCheck == Number(rightAns)+Number(rightAns2))
				{
					
					_this.time.events.add(200, function()
					{
						_this.clungSound = _this.add.audio('ClungSound');
						_this.clungSound.play();
					}, this);
				}
				
                    target.events.onInputDown.removeAll();
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,this.t1,this.t2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },
    
    objectRemoved:function(target,tween1,tween2)
    {
		this.t1 = tween1;
		this.t2 = tween2;
        var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drag", 
                res_id: "Level3B2_"+target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);


             _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(_this.dragStopping2,this);
   },
   
   dragStopping2:function(target){

                var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: _this.savedVar, 
                id_question: _this.questionid,  
                date_time_event: currentTime, 
                event_type: "drop", 
                res_id: "Level3B2_"+target.name, 
                access_token: window.acctkn 
            } 
            
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
                        tweenVal = this.t1;
                        angleVal = this.t2;
                        obj2Group.getByName(tempName).events.onInputDown.add(function(target){this.telemetry(target);
                            //console.log(tweenVal);
                            if(target.name == "50g33")
                                this.objectClicked(target,fifgWeight,fifgAngle);
                            else if(target.name == "100g33")
                                this.objectClicked(target,hungWeight,hungAngle);
                            else if(target.name == "200g33")
                                this.objectClicked(target,twohungWeight,twohungAngle);
                            else if(target.name == "500g33")
                                this.objectClicked(target,fivehungWeight,fivehungAngle);
                            else if(target.name == "1kg33")
                                this.objectClicked(target,oneKgWeight,oneKgAngle);
                            else if(target.name == "2kg33")
                                this.objectClicked(target,twoKgWeight,twoKgAngle);
                            else if(target.name == "5kg33")
                                this.objectClicked(target,fiveKgWeight,fiveKgAngle);
                            else if(target.name == "10kg33")
                                this.objectClicked(target,tenKgWeight,tenKgAngle);
                        },this);
                    
                     _this.snap1 = _this.add.audio('snapSound');
                _this.snap1.play();
				
				console.log(_this.balanceCheck);
				console.log(rightAns+rightAns2);
				if(_this.balanceCheck == Number(rightAns)+Number(rightAns2))
				{
					
					_this.time.events.add(200, function()
					{
						_this.clungSound = _this.add.audio('ClungSound');
						_this.clungSound.play();
					}, this);
				}
				
                    target.events.onInputDown.removeAll();
                    this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,this.t1,this.t2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
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
	
			starsGroup.create(this.world.centerX-15, 10,'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=15;
					starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
 
    update:function(){

    },
    
    /*getVoice:function(){
        this.stopAllVoice();
        switch(qArrays[no1])
        {
            case 1 :
            case 2 :
            case 3 :
            case 4 :
            case 5 :
            case 6 :
            case 7 :
            case 8 :
            case 9 :
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
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:if(window.languageSelected=="English")
                        Eng_33B2.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_33B2.play();
                    else
                        Kan_33B2.play();
                    break;
        }
    },*/

    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

       
                   if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/English/3.3B_2.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Hindi/3.3B_2.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Kannada/3.3B_2.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.3A/3.3B_2.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Marathi/3.3B_2.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Telugu/3.3B_2.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Tamil/3.3B_2.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Urdu/3.3B_2.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.3A/Odiya/3.3B_1.mp3");
						_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
                // console.log("stop"); 
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
        /*delete bg1;
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
        delete selectedAns2;
        delete rightAns;
        delete mainSprite;
        delete  _this.speakerbtn;
        delete scale1Empty;
        delete scale2Empty;
        delete weightScale1,weightScale2,weightScale3,weightScale4;
        delete obj1Group,obj2Group;
        delete tweenVal,angleval;
        delete tempName,tp;
        delete tempAngle;
        delete tempweight1;
        delete tempweight2;
        delete q1Array;
        delete q2Array;
        delete q3Array;
        delete oneKgAngle,oneKgWeight,twoKgAngle,twoKgWeight,fiveKgAngle,fiveKgWeight,tenKgAngle,tenKgWeight;

        delete object1,object2,object3,object4,object5,object6,object7,object8,object9;
        delete timelang;

        delete timer;
        delete noofAttempts;
        delete AnsTimerCount;
        delete enterTxt,enterTxt2;

        delete gameid,questionid;*/
    }

    
};