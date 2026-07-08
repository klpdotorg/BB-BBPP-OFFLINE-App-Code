Game.sg12_1_3level1=function(){};
Game.sg12_1_3level1.prototype={
init:function(game)
    {
        _this = this;
        
        _this.gameid = "1.2";
        
       // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        telInitializer.gameIdInit("SG12_1_3",gradeSelected);

    },

    preload:function(game){
        if(!window.grade3SG2){

            window.grade3SG2 = true;

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

            //GAME ASSETS                   
        this.load.image('1_1_1_White_box',window.baseUrl+'assets/gradeAssets/sg12.1.3/Bg/White_box.png');
        //Shapes
        this.load.atlas('Shape1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/Shape1.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/Shape1.json');
        this.load.atlas('Shape2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/Shape2.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/Shape2.json');
        this.load.atlas('Shape3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/Shape3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/Shape3.json');
        this.load.atlas('Shape4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/Shape4.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/Shape4.json');
        this.load.atlas('Shape5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/Shape5.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/Shape5.json');
        this.load.atlas('Shape6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/Shape6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/Shape6.json');
        this.load.atlas('Shape7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/Shape7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/Shape7.json');
        this.load.atlas('Shape8',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/Shape8.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/Shape8.json');
        this.load.atlas('Shape9',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/Shape9.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/Shape9.json');
        this.load.atlas('Shape10',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/Shape10.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/Shape10.json');
        this.load.atlas('Shape11',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/Shape11.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/Shape11.json');
        this.load.atlas('Shape12',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/Shape12.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/Shape12.json');

         this.load.atlas('Shape1new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/Shape1new.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/Shape1new.json');
        this.load.atlas('Shape2new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/Shape2new.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/Shape2new.json');
        this.load.atlas('Shape3new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/Shape3new.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/Shape3new.json');
        this.load.atlas('Shape4new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/Shape4new.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/Shape4new.json');
        this.load.atlas('Shape5new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/Shape5new.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/Shape5new.json');
        this.load.atlas('Shape6new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/Shape6new.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/Shape6new.json');
        this.load.atlas('Shape7new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/Shape7new.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/Shape7new.json');
       /* this.load.atlas('Shape8new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/Shape8new.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/Shape8new.json');
        this.load.atlas('Shape9new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/Shape9new.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/Shape9new.json');
        this.load.atlas('Shape10new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/Shape10newnew.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/Shape10new.json');
        this.load.atlas('Shape11new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/Shape11new.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/Shape11new.json');
        this.load.atlas('Shape12new',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/Shape12new.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/Shape12new.json');
     */   
        //Options of shape-1
        this.load.atlas('Shape1_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/option1.json');
        this.load.atlas('Shape1_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/option2.json');
        this.load.atlas('Shape1_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/option3.json');
        this.load.atlas('Shape1_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/option4.json');
        this.load.atlas('Shape1_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/option5.json');
        this.load.atlas('Shape1_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/option6.json');
        this.load.atlas('Shape1_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape1/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape1/option7.json');
        //Options of shape-2
        this.load.atlas('Shape2_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/option1.json');
        this.load.atlas('Shape2_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/option2.json');
        this.load.atlas('Shape2_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/option3.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/option3.json');
        this.load.atlas('Shape2_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/option4.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/option4.json');
        this.load.atlas('Shape2_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/option5.json');
        this.load.atlas('Shape2_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/option6.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/option6.json');
        this.load.atlas('Shape2_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape2/option7.png' ,window.baseUrl+'json/gradeJson/sg12.1.3/Shape2/option7.json');
        //Options of shape-3
        this.load.atlas('Shape3_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/option1.json');
        this.load.atlas('Shape3_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/option2.json');
        this.load.atlas('Shape3_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/option3.json');
        this.load.atlas('Shape3_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/option4.json');
        this.load.atlas('Shape3_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/option5.json');
        this.load.atlas('Shape3_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/option6.json');
        this.load.atlas('Shape3_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape3/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape3/option7.json');
         //Options of shape-4
        this.load.atlas('Shape4_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/option1.json');
        this.load.atlas('Shape4_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/option2.json');
        this.load.atlas('Shape4_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/option3.json');
        this.load.atlas('Shape4_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/option4.json');
        this.load.atlas('Shape4_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/option5.json');
        this.load.atlas('Shape4_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/option6.json');
        this.load.atlas('Shape4_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape4/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape4/option7.json');
         //Options of shape-5
        this.load.atlas('Shape5_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/option1.json');
        this.load.atlas('Shape5_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/option2.json');
        this.load.atlas('Shape5_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/option3.json');
        this.load.atlas('Shape5_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/option4.json');
        this.load.atlas('Shape5_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/option5.json');
        this.load.atlas('Shape5_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/option6.json');
        this.load.atlas('Shape5_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape5/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape5/option7.json');
         //Options of shape-6
        this.load.atlas('Shape6_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/option1.json');
        this.load.atlas('Shape6_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/option2.json');
        this.load.atlas('Shape6_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/option3.json');
        this.load.atlas('Shape6_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/option4.json');
        this.load.atlas('Shape6_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/option5.json');
        this.load.atlas('Shape6_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/option6.json');
        this.load.atlas('Shape6_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape6/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape6/option7.json');
         //Options of shape-7
        this.load.atlas('Shape7_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/option1.json');
        this.load.atlas('Shape7_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/option2.json');
        this.load.atlas('Shape7_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/option3.json');
        this.load.atlas('Shape7_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/option4.json');
        this.load.atlas('Shape7_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/option5.json');
        this.load.atlas('Shape7_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/option6.json');
        this.load.atlas('Shape7_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape7/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape7/option7.json');
         //Options of shape-8
        this.load.atlas('Shape8_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/option1.json');
        this.load.atlas('Shape8_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/option2.json');
        this.load.atlas('Shape8_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/option3.json');
        this.load.atlas('Shape8_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/option4.json');
        this.load.atlas('Shape8_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/option5.json');
        this.load.atlas('Shape8_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/option6.json');
        this.load.atlas('Shape8_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape8/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape8/option7.json');
         //Options of shape-9
        this.load.atlas('Shape9_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/option1.json');
        this.load.atlas('Shape9_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/option2.json');
        this.load.atlas('Shape9_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/option3.json');
        this.load.atlas('Shape9_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/option4.json');
        this.load.atlas('Shape9_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/option5.json');
        this.load.atlas('Shape9_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/option6.json');
        this.load.atlas('Shape9_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape9/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape9/option7.json');
         //Options of shape-10
        this.load.atlas('Shape10_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/option1.json');
        this.load.atlas('Shape10_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/option2.json');
        this.load.atlas('Shape10_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/option3.json');
        this.load.atlas('Shape10_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/option4.json');
        this.load.atlas('Shape10_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/option5.json');
        this.load.atlas('Shape10_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/option6.json');
        this.load.atlas('Shape10_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape10/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape10/option7.json');
        //Options of shape-11
        this.load.atlas('Shape11_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/option1.json');
        this.load.atlas('Shape11_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/option2.json');
        this.load.atlas('Shape11_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/option3.json');
        this.load.atlas('Shape11_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/option4.json');
        this.load.atlas('Shape11_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/option5.json');
        this.load.atlas('Shape11_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/option6.json');
        this.load.atlas('Shape11_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape11/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape11/option7.json');
         //Options of shape-12
        this.load.atlas('Shape12_option1',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/option1.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/option1.json');
        this.load.atlas('Shape12_option2',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/option2.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/option2.json');
        this.load.atlas('Shape12_option3',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/option3.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/option3.json');
        this.load.atlas('Shape12_option4',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/option4.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/option4.json');
        this.load.atlas('Shape12_option5',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/option5.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/option5.json');
        this.load.atlas('Shape12_option6',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/option6.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/option6.json');
        this.load.atlas('Shape12_option7',window.baseUrl+'assets/gradeAssets/sg12.1.3/Shape12/option7.png',window.baseUrl+'json/gradeJson/sg12.1.3/Shape12/option7.json');
      
        
    }

    },
    
	create:function(game){
       _this.amplify = null;
       _this.done1 = 0;
       _this.done2 = 0;
       _this.done3 = 0;
       _this.done4 = 0;
       _this.a = null;
       _this.b = null;
       _this.c = null;
       _this.d = null;
       _this.qid=0;
       _this.noofAttempts=0;
       _this.sceneCount=0;
       _this.seconds = 0;
       _this.minutes = 0;
       _this.counterForTimer = 0;
       _this.wrong = true;
       _this.no1=0;
       _this.qArrays = [1,2,3,4,5,6,7];
       _this.qArrays = _this.shuffle( _this.qArrays);
       _this.count=0;
       _this.count1=0;
   		 _this.shake = new Phaser.Plugin.Shake(game);
	      game.plugins.add(_this.shake);
       _this.physics.startSystem(Phaser.Physics.ARCADE);
       _this.physics.setBoundsToWorld();

       _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');
       _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
       _this.navBar.scale.setTo(1,1);
       _this.timebg = _this.add.sprite(300,5,'Level42C_timer');
       _this.timeDisplay = _this.add.text(326,22, _this.minutes + ' : '+  _this.seconds);
       _this.timeDisplay.anchor.setTo(0.5);
       _this.timeDisplay.align = 'center';
       _this.timeDisplay.font = 'myfont';
       _this.timeDisplay.fontSize = 20;
       _this.timeDisplay.fill = '#ADFF2F';
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
       _this.backbtn.inputEnabled = true;
       _this.backbtn.events.onInputDown.add(function()
       {
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false); 
       },_this);

       _this.speakerbtn = _this.add.sprite(600,5,'grade11_speaker');
       _this.speakerbtn.inputEnabled = true;
       _this.speakerbtn.events.onInputDown.add(function()
        {     
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();            
           _this.getVoice();
        },_this);
         
        _this.generateStarsForTheScene(6);
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
        if(!_this.timer)
        {


        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
                         {
            _this.AnsTimerCount++;
        }, _this);


        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();
    }
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        

        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       


        _this.obj1Array = [];
        _this.obj2Array = [];
        _this.obj3Array = [];
        _this.obj4Array = [];
        _this.rightOrderArray = [];
        _this.glowOrderArray = [];
        _this.UserInputArray = [];
        _this.wrongArray = [];
        _this.objRightArray = [];
  
 switch(_this.qArrays[_this.no1]) 
    //switch(5)    
          {
            case 1: console.log("q1");
                    _this.qid = 1;
                    _this.obj1Array = ['Shape1_option1',150,350];
                    _this.obj2Array = ['Shape1_option2',250,400];
                    _this.obj3Array = ['Shape1_option3',250,220];
                    _this.obj4Array = ['Shape1_option4',350,250];
                    _this.obj5Array = ['Shape1_option5',350,350];
                    _this.obj6Array = ['Shape1_option6',150,250];
                    _this.obj7Array = ['Shape1_option7',250,320];   
                    _this.objRightArray = ['Shape1',635,155];           
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray);
                    break;
            case 2: console.log("q2");
                    _this.qid = 2;
                    _this.obj1Array = ['Shape2_option1',150,350];
                    _this.obj2Array = ['Shape2_option2',250,400];
                    _this.obj3Array = ['Shape2_option3',250,250];
                    _this.obj4Array = ['Shape2_option4',350,250];
                    _this.obj5Array = ['Shape2_option5',350,350];
                    _this.obj6Array = ['Shape2_option6',150,250];
                    _this.obj7Array = ['Shape2_option7',250,320];    
                     _this.objRightArray = ['Shape2',635-40,155];     
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray);
                    break;
            case 3: console.log("q3");
                    _this.qid = 3;
                    _this.obj1Array = ['Shape3_option1',150,350];
                    _this.obj2Array = ['Shape3_option2',250,400];
                    _this.obj3Array = ['Shape3_option3',250,250];
                    _this.obj4Array = ['Shape3_option4',350,250];
                    _this.obj5Array = ['Shape3_option5',350,350];
                    _this.obj6Array = ['Shape3_option6',150,250];
                    _this.obj7Array = ['Shape3_option7',250,320];  
                     _this.objRightArray = ['Shape3',635-50,155];  
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray);
                    break;
            case 4: console.log("q4");
                    _this.qid = 4;
                    _this.obj1Array = ['Shape4_option1',150,350];
                    _this.obj2Array = ['Shape4_option2',250,400];
                    _this.obj3Array = ['Shape4_option3',250,220];
                    _this.obj4Array = ['Shape4_option4',350,250];
                    _this.obj5Array = ['Shape4_option5',350,350];
                    _this.obj6Array = ['Shape4_option6',150,250];
                    _this.obj7Array = ['Shape4_option7',250,320];  
                    
                     _this.objRightArray = ['Shape4',605,183];  
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray);
                    
                     break;
            case 5: console.log("q5");
                    _this.qid = 5;
                    _this.obj1Array = ['Shape5_option1',150,350];
                    _this.obj2Array = ['Shape5_option2',250,400];
                    _this.obj3Array = ['Shape5_option3',250,220];
                    _this.obj4Array = ['Shape5_option4',350,250];
                    _this.obj5Array = ['Shape5_option5',350,350];
                    _this.obj6Array = ['Shape5_option6',150,250];
                    _this.obj7Array = ['Shape5_option7',250,300]; 
                    _this.objRightArray = ['Shape5',605-40,183-30];  
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray);
                  
                     break;
            case 6: console.log("q6");
                    _this.qid = 6;
                    _this.obj1Array = ['Shape6_option1',150,350];
                    _this.obj2Array = ['Shape6_option2',250,400];
                    _this.obj3Array = ['Shape6_option3',250,220];
                    _this.obj4Array = ['Shape6_option4',350,250];
                    _this.obj5Array = ['Shape6_option5',380,350];
                    _this.obj6Array = ['Shape6_option6',150,250];
                    _this.obj7Array = ['Shape6_option7',250,300]; 
                    _this.objRightArray = ['Shape6',590,130-10]; 
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray);
                  
                    break;
            case 7: console.log("q7");
                    _this.qid = 7;
                    _this.obj1Array = ['Shape7_option1',165,350];
                    _this.obj2Array = ['Shape7_option2',280,400];
                    _this.obj3Array = ['Shape7_option3',300,300];
                    _this.obj4Array = ['Shape7_option4',350,250];
                    _this.obj5Array = ['Shape7_option5',380,350];
                    _this.obj6Array = ['Shape7_option6',150,250];
                    _this.obj7Array = ['Shape7_option7',260,260]; 
                    _this.objRightArray = ['Shape7',550-10,180]; 
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray);
                  
                    break;
            case 8: console.log("q8");
                    _this.qid = 8;
                    _this.obj1Array = ['Shape8_option1',150,487];
                    _this.obj2Array = ['Shape8_option2',355,490];
                    _this.obj3Array = ['Shape8_option3',545,500];
                    _this.obj4Array = ['Shape8_option4',725,470];
                    _this.obj5Array = ['Shape8_option5',725,470];
                    _this.obj6Array = ['Shape8_option6',725,470];
                    _this.obj7Array = ['Shape8_option7',725,470]; 
                     _this.objRightArray = ['Shape8',550-10,180];
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.objRightArray);
                  
                    break;
           case 9: 
                    _this.qid = 9;
                    _this.obj1Array = ['Shape9_option1',150,487];
                    _this.obj2Array = ['Shape9_option2',355,490];
                    _this.obj3Array = ['Shape9_option3',545,500];
                    _this.obj4Array = ['Shape9_option4',725,470];
                    _this.obj5Array = ['Shape9_option5',725,470];
                    _this.obj6Array = ['Shape9_option6',725,470];
                    _this.obj7Array = ['Shape9_option7',725,470]; 
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array);
                  
                    break;
           case 10: 
                    _this.qid = 10;
                    _this.obj1Array = ['Shape10_option1',150,487];
                    _this.obj2Array = ['Shape10_option2',355,490];
                    _this.obj3Array = ['Shape10_option3',545,500];
                    _this.obj4Array = ['Shape10_option4',725,470];
                    _this.obj5Array = ['Shape10_option5',725,470];
                    _this.obj6Array = ['Shape10_option6',725,470];
                    _this.obj7Array = ['Shape10_option7',725,470]; 
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array);
                  
                    break;
             case 11: 
                    _this.qid = 11;
                    _this.obj1Array = ['Shape11_option1',150,487];
                    _this.obj2Array = ['Shape11_option2',355,490];
                    _this.obj3Array = ['Shape11_option3',545,500];
                    _this.obj4Array = ['Shape11_option4',725,470];
                    _this.obj5Array = ['Shape11_option5',725,470];
                    _this.obj6Array = ['Shape11_option6',725,470];
                    _this.obj7Array = ['Shape11_option7',725,470]; 
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array);
                  
                    break;
             case 12: 
                    _this.qid = 12;
                    _this.obj1Array = ['Shape12_option1',150,487];
                    _this.obj2Array = ['Shape12_option2',355,490];
                    _this.obj3Array = ['Shape12_option3',545,500];
                    _this.obj4Array = ['Shape12_option4',725,470];
                    _this.obj5Array = ['Shape12_option5',725,470];
                    _this.obj6Array = ['Shape12_option6',725,470];
                    _this.obj7Array = ['Shape12_option7',725,470]; 
                    _this.gotoQuestion(_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array);
                  
                    break;         
        }
    
    },
    addDragBoxes12:function(obj1,obj2,obj3,obj4,obj5,obj6,obj7){

      //no1++;
        _this.gameBoxGroup = _this.add.group();
        
        _this.x = 100;
        _this.x1 = 180;
       _this. y = 150;
        _this.y1 = 130;

        _this.option1 = _this.gameBoxGroup.create(160,200,'obj1');
        _this.option1.anchor.setTo(0.435,0.42); 
        _this.option1.name = "option1";
        
        _this.option2 = _this.gameBoxGroup.create(360,200,'obj2');
        _this.option2.anchor.setTo(0.435,0.42); 
        _this.option2.name = "option2";
        
        _this.option3 = _this.gameBoxGroup.create(560,200,'obj3');
        _this.option3.anchor.setTo(0.435,0.42);
        _this.option3.name = "option3";
        
        _this.option4 = _this.gameBoxGroup.create(760,200,'obj4');
        _this.option4.anchor.setTo(0.435,0.42);
        _this.option4.name = "option4";

         _this.option5 = _this.gameBoxGroup.create(160,200,'obj5');
        _this.option5.anchor.setTo(0.435,0.42); 
        _this.option5name = "option5";
        
        _this.option6 = _this.gameBoxGroup.create(360,200,'obj6');
        _this.option6.anchor.setTo(0.435,0.42); 
        _this.option6.name = "option6";
        
        _this.option7 = _this.gameBoxGroup.create(560,200,'obj7');
        _this.option7.anchor.setTo(0.435,0.42);
        _this.option7.name = "option7";
        
        _this.gameBoxGroup.add(_this.box1);
        _this.gameBoxGroup.add(_this.box2);
        _this.gameBoxGroup.add(_this.box3);
        _this.gameBoxGroup.add(_this.box4);
        _this.gameBoxGroup.add(_this.box5);
        _this.gameBoxGroup.add(_this.box6);
        _this.gameBoxGroup.add(_this.box7);
        
         
        /*for(var k=0;k<_this.gameBoxGroup.children.length;k++)
        {
           _this.targetChild = _this.add.sprite(0,0,'Level5.1_allimg');
            //targetChild.frameName = gameBoxGroup.getChildAt(i).frameName;
            _this.targetChild.anchor.setTo(0.5);
            _this.targetChild.alpha = 0;
            _this.gameBoxGroup.getChildAt(k).addChild(_this.targetChild); 
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).inputEnabled = true;
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).input.useHandCursor = true;
            _this.gameBoxGroup.getChildAt(k).getChildAt(0).events.onInputDown.add(_this.boxDragFunction,_this);
        }*/
         
    },
    
gotoQuestion:function(obj1Array,obj2Array,obj3Array,obj4Array,obj5Array,obj6Array,obj7Array,objRightArray){

       // _this.getVoice();

       /*_this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       */         
      _this.objGroup = _this.add.group();

      _this.White_box_left = _this.add.sprite(90,115, '1_1_1_White_box');
      _this.White_box_right = _this.add.sprite(530,115, '1_1_1_White_box');
      _this.objRight = _this.add.sprite(objRightArray[1],objRightArray[2],objRightArray[0]);
/*        _this.objRight.frame=1;
*/      _this.gameBoxGroup = _this.add.group();
       
      _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
      _this.b1.anchor.setTo(0.5,1);
      _this.b1.name = _this.obj1Array[0];
      _this.b1.inputEnabled = true;
      _this.b1.input.useHandCursor = true;
     
      _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
      _this.b3.anchor.setTo(0.5,1);
      _this.b3.name = _this.obj3Array[0];
      _this.b3.inputEnabled = true;
      _this.b3.input.useHandCursor = true;
      _this.b4 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
      _this.b4.anchor.setTo(0.5,1);
      _this.b4.name = _this.obj4Array[0];
      _this.b4.inputEnabled = true;
      _this.b4.input.useHandCursor = true;
      _this.b5 = _this.add.sprite(obj5Array[1],obj5Array[2],obj5Array[0]);
      _this.b5.anchor.setTo(0.5,1);
      _this.b5.name = _this.obj5Array[0];
      _this.b5.inputEnabled = true;
      _this.b5.input.useHandCursor = true;
      _this.b6 = _this.add.sprite(obj6Array[1],obj6Array[2],obj6Array[0]);
      _this.b6.anchor.setTo(0.5,1);
      _this.b6.name = _this.obj6Array[0];
      _this.b6.inputEnabled = true;
      _this.b6.input.useHandCursor = true;
      


        /*_this.b11 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
      _this.b11.anchor.setTo(0.5,1);
      _this.b11.name = _this.obj1Array[0];
     
      _this.b31 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
      _this.b31.anchor.setTo(0.5,1);
      _this.b31.name = _this.obj3Array[0];
       _this.b41 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
      _this.b41.anchor.setTo(0.5,1);
      _this.b41.name = _this.obj4Array[0];
      _this.b51 = _this.add.sprite(obj5Array[1],obj5Array[2],obj5Array[0]);
      _this.b51.anchor.setTo(0.5,1);
      _this.b51.name = _this.obj5Array[0];
       _this.b61 = _this.add.sprite(obj6Array[1],obj6Array[2],obj6Array[0]);
      _this.b61.anchor.setTo(0.5,1);
      _this.b61.name = _this.obj6Array[0];

       _this.b11.visible = false;
       _this.b31.visible = false;
       _this.b41.visible = false;
       _this.b51.visible = false;
       _this.b61.visible = false;*/
       if(_this.qid==3){

        _this.b7 = _this.add.sprite(obj7Array[1],obj7Array[2]-40,obj7Array[0]);
      _this.b7.anchor.setTo(0.5,1);
      _this.b7.name = _this.obj7Array[0];
      _this.b7.inputEnabled = true;
      _this.b7.input.useHandCursor = true;

       _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2]+15,obj2Array[0]);
      _this.b2.anchor.setTo(0.5,1);
      _this.b2.name = _this.obj2Array[0];
      _this.b2.inputEnabled = true;
      _this.b2.input.useHandCursor = true;


      /* _this.b71 = _this.add.sprite(obj7Array[1],obj7Array[2]-40,obj7Array[0]);
      _this.b71.anchor.setTo(0.5,1);
      _this.b71.name = _this.obj7Array[0];
     
       _this.b21 = _this.add.sprite(obj2Array[1],obj2Array[2]+15,obj2Array[0]);
      _this.b21.anchor.setTo(0.5,1);
      _this.b21.name = _this.obj2Array[0];

       _this.b71.visible = false;
              _this.b21.visible = false;*/

      
      }
      else{
_this.b7 = _this.add.sprite(obj7Array[1],obj7Array[2],obj7Array[0]);
      _this.b7.anchor.setTo(0.5,1);
      _this.b7.name = _this.obj7Array[0];
      _this.b7.inputEnabled = true;
      _this.b7.input.useHandCursor = true;

 _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
      _this.b2.anchor.setTo(0.5,1);
      _this.b2.name = _this.obj2Array[0];
      _this.b2.inputEnabled = true;
      _this.b2.input.useHandCursor = true;


      /*_this.b71 = _this.add.sprite(obj7Array[1],obj7Array[2],obj7Array[0]);
      _this.b71.anchor.setTo(0.5,1);
      _this.b71.name = _this.obj7Array[0];
     

 _this.b21 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
      _this.b21.anchor.setTo(0.5,1);
      _this.b21.name = _this.obj2Array[0];
     
      _this.b71.visible = false;
              _this.b21.visible = false;*/

      }
      _this.objGroup.add(_this.White_box_left);
      _this.objGroup.add(_this.White_box_right);
      _this.objGroup.add(_this.objRight);
      _this.objGroup.add(_this.b1);
      _this.objGroup.add(_this.b2);
      _this.objGroup.add(_this.b3);
      _this.objGroup.add(_this.b4);
      _this.objGroup.add(_this.b5);
      _this.objGroup.add(_this.b6);
      _this.objGroup.add(_this.b7);

      
        
      _this.b1.inputEnabled = true;
      _this.b2.inputEnabled = true;
      _this.b3.inputEnabled = true;
      _this.b4.inputEnabled = true;
      _this.b5.inputEnabled = true;
      _this.b6.inputEnabled = true;
      _this.b7.inputEnabled = true;

      _this.b1.input.useHandCursor = true;
      _this.b2.input.useHandCursor = true;
      _this.b3.input.useHandCursor = true;
      _this.b4.input.useHandCursor = true;
      _this.b5.input.useHandCursor = true;
      _this.b6.input.useHandCursor = true;
      _this.b7.input.useHandCursor = true;
           _this.objGroup.x = 1000;
      _this.Maintween = _this.add.tween(_this.objGroup);
      _this.Maintween.to({ x: 0}, 0, 'Linear', true, 0);
      _this.Maintween.onComplete.add(function()
      {
            _this.gameBoxGroup.add(_this.b1);
      _this.gameBoxGroup.add(_this.b2);
      _this.gameBoxGroup.add(_this.b3);
      _this.gameBoxGroup.add(_this.b4);
      _this.gameBoxGroup.add(_this.b5);
      _this.gameBoxGroup.add(_this.b6);
      _this.gameBoxGroup.add(_this.b7);
           if(_this.qid==1){


            _this.b1.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes1,_this);

            _this.b4.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes1,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes1,_this);

             /*  _this.b1.events.onInputDown.add(function(){_this.b11.visible = true;_this.b11.frame=1;},_this);
              _this.b2.events.onInputDown.add(function(){_this.b21.visible = true;_this.b21.frame=1;},_this);
               _this.b3.events.onInputDown.add(function(){_this.b31.visible = true;_this.b31.frame=1;},_this);
               _this.b4.events.onInputDown.add(function(){_this.b41.visible = true;_this.b41.frame=1;},_this);
               _this.b5.events.onInputDown.add(function(){_this.b51.visible = true;_this.b51.frame=1;},_this);
               _this.b6.events.onInputDown.add(function(){_this.b61.visible = true;_this.b61.frame=1;},_this);
               _this.b7.events.onInputDown.add(function(){_this.b71.visible = true;_this.b71.frame=1;},_this);
*/

          }
           else if(_this.qid==2){
            _this.b1.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes2,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes2,_this);
             
            /*  _this.b1.events.onInputDown.add(function(){_this.b11.visible = true;_this.b11.frame=1;},_this);
              _this.b2.events.onInputDown.add(function(){_this.b21.visible = true;_this.b21.frame=1;},_this);
               _this.b3.events.onInputDown.add(function(){_this.b31.visible = true;_this.b31.frame=1;},_this);
               _this.b4.events.onInputDown.add(function(){_this.b41.visible = true;_this.b41.frame=1;},_this);
               _this.b5.events.onInputDown.add(function(){_this.b51.visible = true;_this.b51.frame=1;},_this);
               _this.b6.events.onInputDown.add(function(){_this.b61.visible = true;_this.b61.frame=1;},_this);
               _this.b7.events.onInputDown.add(function(){_this.b71.visible = true;_this.b71.frame=1;},_this);
*/


          }
           else if(_this.qid==3){ _this.b1.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes3,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes3,_this);

             /*  _this.b1.events.onInputDown.add(function(){_this.b11.visible = true;_this.b11.frame=1;},_this);
              _this.b2.events.onInputDown.add(function(){_this.b21.visible = true;_this.b21.frame=1;},_this);
               _this.b3.events.onInputDown.add(function(){_this.b31.visible = true;_this.b31.frame=1;},_this);
               _this.b4.events.onInputDown.add(function(){_this.b41.visible = true;_this.b41.frame=1;},_this);
               _this.b5.events.onInputDown.add(function(){_this.b51.visible = true;_this.b51.frame=1;},_this);
               _this.b6.events.onInputDown.add(function(){_this.b61.visible = true;_this.b61.frame=1;},_this);
               _this.b7.events.onInputDown.add(function(){_this.b71.visible = true;_this.b71.frame=1;},_this);
*/

          }
           else if(_this.qid==4){ _this.b1.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes4,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes4,_this);

            /*   _this.b1.events.onInputDown.add(function(){_this.b11.visible = true;_this.b11.frame=1;},_this);
              _this.b2.events.onInputDown.add(function(){_this.b21.visible = true;_this.b21.frame=1;},_this);
               _this.b3.events.onInputDown.add(function(){_this.b31.visible = true;_this.b31.frame=1;},_this);
               _this.b4.events.onInputDown.add(function(){_this.b41.visible = true;_this.b41.frame=1;},_this);
               _this.b5.events.onInputDown.add(function(){_this.b51.visible = true;_this.b51.frame=1;},_this);
               _this.b6.events.onInputDown.add(function(){_this.b61.visible = true;_this.b61.frame=1;},_this);
               _this.b7.events.onInputDown.add(function(){_this.b71.visible = true;_this.b71.frame=1;},_this);
*/

          }
           else if(_this.qid==5){

             _this.b1.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes5,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes5,_this);

             /*  _this.b1.events.onInputDown.add(function(){_this.b11.visible = true;_this.b11.frame=1;},_this);
              _this.b2.events.onInputDown.add(function(){_this.b21.visible = true;_this.b21.frame=1;},_this);
               _this.b3.events.onInputDown.add(function(){_this.b31.visible = true;_this.b31.frame=1;},_this);
               _this.b4.events.onInputDown.add(function(){_this.b41.visible = true;_this.b41.frame=1;},_this);
               _this.b5.events.onInputDown.add(function(){_this.b51.visible = true;_this.b51.frame=1;},_this);
               _this.b6.events.onInputDown.add(function(){_this.b61.visible = true;_this.b61.frame=1;},_this);
               _this.b7.events.onInputDown.add(function(){_this.b71.visible = true;_this.b71.frame=1;},_this);
*/

           }
           else if(_this.qid==6){
              _this.b1.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes6,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes6,_this);

             /*  _this.b1.events.onInputDown.add(function(){_this.b11.visible = true;_this.b11.frame=1;},_this);
              _this.b2.events.onInputDown.add(function(){_this.b21.visible = true;_this.b21.frame=1;},_this);
               _this.b3.events.onInputDown.add(function(){_this.b31.visible = true;_this.b31.frame=1;},_this);
               _this.b4.events.onInputDown.add(function(){_this.b41.visible = true;_this.b41.frame=1;},_this);
               _this.b5.events.onInputDown.add(function(){_this.b51.visible = true;_this.b51.frame=1;},_this);
               _this.b6.events.onInputDown.add(function(){_this.b61.visible = true;_this.b61.frame=1;},_this);
               _this.b7.events.onInputDown.add(function(){_this.b71.visible = true;_this.b71.frame=1;},_this);
*/

         

           }
           else if(_this.qid==7){
            _this.b1.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes7,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes7,_this);

              /* _this.b1.events.onInputDown.add(function(){_this.b11.visible = true;_this.b11.frame=1;},_this);
              _this.b2.events.onInputDown.add(function(){_this.b21.visible = true;_this.b21.frame=1;},_this);
               _this.b3.events.onInputDown.add(function(){_this.b31.visible = true;_this.b31.frame=1;},_this);
               _this.b4.events.onInputDown.add(function(){_this.b41.visible = true;_this.b41.frame=1;},_this);
               _this.b5.events.onInputDown.add(function(){_this.b51.visible = true;_this.b51.frame=1;},_this);
               _this.b6.events.onInputDown.add(function(){_this.b61.visible = true;_this.b61.frame=1;},_this);
               _this.b7.events.onInputDown.add(function(){_this.b71.visible = true;_this.b71.frame=1;},_this);
*/

         
           }

            else if(_this.qid==8){
            _this.b1.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b2.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b3.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b4.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b5.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b6.events.onInputDown.add(_this.addDragBoxes8,_this);
            _this.b7.events.onInputDown.add(_this.addDragBoxes8,_this);

             /*  _this.b1.events.onInputDown.add(function(){_this.b11.visible = true;_this.b11.frame=1;},_this);
              _this.b2.events.onInputDown.add(function(){_this.b21.visible = true;_this.b21.frame=1;},_this);
               _this.b3.events.onInputDown.add(function(){_this.b31.visible = true;_this.b31.frame=1;},_this);
               _this.b4.events.onInputDown.add(function(){_this.b41.visible = true;_this.b41.frame=1;},_this);
               _this.b5.events.onInputDown.add(function(){_this.b51.visible = true;_this.b51.frame=1;},_this);
               _this.b6.events.onInputDown.add(function(){_this.b61.visible = true;_this.b61.frame=1;},_this);
               _this.b7.events.onInputDown.add(function(){_this.b71.visible = true;_this.b71.frame=1;},_this);
*/

         
           }
          
              },this);
            
     },
    
 addDragBoxes1:function(target){

              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              _this.graphicsGroup = _this.add.group();
              _this.graphics1 = _this.add.graphics(100, 100);
              _this.graphics2 = _this.add.graphics(100, 100);
              _this.graphics3 = _this.add.graphics(100, 100);
              _this.graphics4 = _this.add.graphics(100, 100);
              _this.graphics5 = _this.add.graphics(100, 100);
              _this.graphics6 = _this.add.graphics(100, 100);
              _this.graphics7 = _this.add.graphics(100, 100);
              // draw a rectangle
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(585, 70, 10, 10);
              _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(585, 110, 20, 40);
              _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(570, 160, 20, 20);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(550, 200, 20, 20);
              _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(575, 250, 10, 10);
              _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(640, 210, 25, 25);
              _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(620, 250, 10, 10);
              _this.graphicsGroup.add(_this.graphics1);
              _this.graphicsGroup.add(_this.graphics2);
              _this.graphicsGroup.add(_this.graphics3);
              _this.graphicsGroup.add(_this.graphics4);
              _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
              _this.graphicsGroup.add(_this.graphics7);
              _this.graphicsGroup.alpha = 0;

            

              target.events.onDragStop.add(function(target)
              {
               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "Shape1_option3"))
                       {
                         _this.done1+=1;
                         _this.b3.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                         _this.box1 =  _this.gameBoxGroup.create(666.5,168.5,'Shape1_option3');
                         _this.box1.name = "box1";
                         _this.boxGroup.add(_this.box1);
                          break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "Shape1_option1"))
                       {
                         _this.done1+=1;
                         _this.b1.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                         _this.box2 =  _this.gameBoxGroup.create(679,181.5,'Shape1_option1');
                         _this.box2.name = "box2";
                         _this.boxGroup.add(_this.box2);
                          break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "Shape1_option5"))
                      {
                        _this.done1+=1;
                        _this.b5.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                        _this.box3 =  _this.gameBoxGroup.create(648.8,245,'Shape1_option5');
                        _this.box3.name = "box3";    
                        _this.boxGroup.add(_this.box3);
                         break;
                      }
                      else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "Shape1_option4"))
                      {
                        _this.done1+=1;
                        _this.b4.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                        _this.clickSound.play();
                        _this.box4 =  _this.gameBoxGroup.create(649,277,'Shape1_option4');
                        _this.box4.name = "box4";
                        _this.boxGroup.add(_this.box4);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "Shape1_option6"))
                       {
                         _this.done1+=1;
                         _this.b6.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                         _this.box5 =  _this.gameBoxGroup.create(650,295,'Shape1_option6');
                         _this.box5.name = "box5";
                         _this.boxGroup.add(_this.box5);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "Shape1_option2"))
                       {
                         _this.done1+=1;
                         _this.b2.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                         _this.box6 =  _this.gameBoxGroup.create(692.5,296,'Shape1_option2');
                         _this.box6.name = "box6";
                         _this.boxGroup.add(_this.box6);
                          break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "Shape1_option7"))
                       {
                         _this.done1+=1;
                         _this.b7.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                         _this.clickSound.play();
                         _this.box7 =  _this.gameBoxGroup.create(693,295.7,'Shape1_option7');
                         _this.box7.name = "box7";
                        _this.boxGroup.add(_this.box7);
                         break;
                       }
                       else
                       {
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                         /* if(_this.b11) _this.b11.visible=false;
                           if(_this.b21) _this.b21.visible=false;
                            if(_this.b31) _this.b31.visible=false;
                             if(_this.b41) _this.b41.visible=false;
                              if(_this.b51) _this.b51.visible=false;
                               if(_this.b61) _this.b61.visible=false;
                                if(_this.b71) _this.b71.visible=false;*/
        
                       }

                    }
                   

                    if(_this.done1>=7)
                    {

                       _this.boxGroup.add(_this.box1);
                       _this.boxGroup.add(_this.box2);
                       _this.boxGroup.add(_this.box3);
                       _this.boxGroup.add(_this.box4);
                       _this.boxGroup.add(_this.box5);
                       _this.boxGroup.add(_this.box6);
                       _this.boxGroup.add(_this.box7);
                      

                       _this.time.events.add(100, function(){ 
                       _this.boxGroup.destroy();
                       _this.objRight.destroy();
                        },_this);
                       _this.time.events.add(100, function(){ 
                        _this.objRightNew =  _this.add.sprite(650,170,'Shape1new');
                         _this.objRightNew.frame = 1;
                         },_this);
                       
                       _this.time.events.add(1000, function(){ 
                                               _this.growBigger( _this.objRightNew);

                         },_this);
                       _this.time.events.add(2000, function(){ 
                       _this.rightAnswer();},_this);
                    
                    }
               },_this);
                            
},
    
addDragBoxes2:function(target){

              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              _this.graphicsGroup = _this.add.group();
              _this.graphics1 = _this.add.graphics(100, 100);
             _this.graphics2 = _this.add.graphics(100, 100);
              _this.graphics3 = _this.add.graphics(100, 100);
               _this.graphics4 = _this.add.graphics(100, 100);
              _this.graphics5 = _this.add.graphics(100, 100);
              _this.graphics6 = _this.add.graphics(100, 100);
              _this.graphics7 = _this.add.graphics(100, 100);
              // draw a rectangle
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(555-40, 90, 10, 10);
              _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(592-40, 95, 10, 10);
              _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(570-40, 125, 20, 20);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(618-40, 130, 15, 15);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(648-40, 162, 15, 15);
              _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(682-40, 175, 20, 20);
               _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(695-40, 250, 20, 20);
              _this.graphicsGroup.add(_this.graphics1);
             _this.graphicsGroup.add(_this.graphics2);
             _this.graphicsGroup.add(_this.graphics3);
               _this.graphicsGroup.add(_this.graphics4);
              _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
               _this.graphicsGroup.add(_this.graphics7);
              _this.graphicsGroup.alpha = 0;
                      
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "Shape2_option2"))
                       {
                         _this.done1+=1;
                         _this.b2.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box1 =  _this.gameBoxGroup.create(649.2-40,170.4,'Shape2_option2');
                         _this.box1.name = "box1";
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "Shape2_option4"))
                       {
                         _this.done1+=1;
                         _this.b4.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box2 =  _this.gameBoxGroup.create(679.5-40,169,'Shape2_option4');
                         _this.box2.name = "box2";
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "Shape2_option7"))
                      {
                        _this.done1+=1;
                        _this.b7.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box3 =  _this.gameBoxGroup.create(649.3-40,201.8,'Shape2_option7');
                        _this.box3.name = "box3";  
                        break;
                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "Shape2_option6"))
                      {
                        _this.done1+=1;
                        _this.b6.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box4 =  _this.gameBoxGroup.create(680-40,220,'Shape2_option6');
                        _this.box4.name = "box4";
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "Shape2_option1"))
                       {
                         _this.done1+=1;
                         _this.b1.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box5 =  _this.gameBoxGroup.create(727-40,220,'Shape2_option1');
                         _this.box5.name = "box5";
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "Shape2_option3"))
                       {
                         _this.done1+=1;
                         _this.b3.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box6 =  _this.gameBoxGroup.create(770.8-40,219,'Shape2_option3');
                         _this.box6.name = "box6";
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "Shape2_option5"))
                       {
                         _this.done1+=1;
                         _this.b5.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box7 =  _this.gameBoxGroup.create(745-40,285,'Shape2_option5');
                         _this.box7.name = "box7";
                         break;
                       }
                       else
                       {
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                          /*if(_this.b11) _this.b11.visible=false;
                           if(_this.b21) _this.b21.visible=false;
                            if(_this.b31) _this.b31.visible=false;
                             if(_this.b41) _this.b41.visible=false;
                              if(_this.b51) _this.b51.visible=false;
                               if(_this.b61) _this.b61.visible=false;
                                if(_this.b71) _this.b71.visible=false;*/
                       }

                    }
                   
                    

                    if(_this.done1>=7)
                    {
                      _this.boxGroup.add(_this.box1);
                      _this.boxGroup.add(_this.box2);
                      _this.boxGroup.add(_this.box3);
                      _this.boxGroup.add(_this.box4);
                       _this.boxGroup.add(_this.box5);
                       _this.boxGroup.add(_this.box6);
                       _this.boxGroup.add(_this.box7);
                         

                       _this.time.events.add(100, function(){ 

                       _this.boxGroup.destroy();
                       _this.objRight.destroy();

                        },_this);

                       _this.time.events.add(100, function(){

                       _this.objRightNew =  _this.add.sprite(645-37,155+15,'Shape2new');
                       _this.objRightNew.frame = 1;

                        },_this);
                       
                       _this.time.events.add(1000, function(){ 
                       
                       _this.growBigger( _this.objRightNew);

                         },_this);

                       _this.time.events.add(2000, function(){ 

                       _this.rightAnswer();
                     },_this);
                    
                    }
               },_this);
              
    },
    
    addDragBoxes3:function(target){

       
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              _this.graphicsGroup = _this.add.group();
             _this.graphics1 = _this.add.graphics(100, 100);
             _this.graphics2 = _this.add.graphics(100, 100);
             _this.graphics3 = _this.add.graphics(100, 100);
             _this.graphics4 = _this.add.graphics(100, 100);
             _this.graphics5 = _this.add.graphics(100, 100);
             _this.graphics6 = _this.add.graphics(100, 100);
             _this.graphics7 = _this.add.graphics(100, 100);
              // draw a rectangle
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(715-50, 90, 10, 10);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(715-50, 170, 10, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(740-50, 145, 10, 10);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(745-50, 190, 15, 15);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(665-50, 220, 15, 15);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(625-50, 190, 15, 15);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(570-50, 230, 10, 10);
              _this.graphicsGroup.add(_this.graphics1);
             _this.graphicsGroup.add(_this.graphics2);
            _this.graphicsGroup.add(_this.graphics3);
             _this.graphicsGroup.add(_this.graphics4);
             _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
               _this.graphicsGroup.add(_this.graphics7);
              _this.graphicsGroup.alpha = 0;
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "Shape3_option1"))
                       {
                         _this.done1+=1;
                         _this.b1.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box1 =  _this.gameBoxGroup.create(790-50,168.5,'Shape3_option1');
                         _this.box1.name = "box1";
                         _this.boxGroup.add(_this.box1);
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "Shape3_option2"))
                       {
                         _this.done1+=1;
                         _this.b2.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box2 =  _this.gameBoxGroup.create(771-50,225,'Shape3_option2');
                         _this.box2.name = "box1";
                         _this.boxGroup.add(_this.box2);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "Shape3_option3"))
                      {
                        _this.done1+=1;
                        _this.b3.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box3 =  _this.gameBoxGroup.create(833-50,227,'Shape3_option3');
                        _this.box3.name = "box1";  
                        _this.boxGroup.add(_this.box3);   
                        break;
                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "Shape3_option4"))
                      {
                        _this.done1+=1;
                        _this.b4.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box4 =  _this.gameBoxGroup.create(835-50,256.5,'Shape3_option4');
                        _this.box4.name = "box1";
                        _this.boxGroup.add(_this.box4);
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "Shape3_option6"))
                       {
                         _this.done1+=1;
                         _this.b6.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box5 =  _this.gameBoxGroup.create(745-50,262.5,'Shape3_option6');
                         _this.box5.name = "box1";
                         _this.boxGroup.add(_this.box5);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "Shape3_option7"))
                       {
                         _this.done1+=1;
                         _this.b7.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box6 =  _this.gameBoxGroup.create(682-50,262.5,'Shape3_option7');
                         _this.box6.name = "box1";
                         _this.boxGroup.add(_this.box6);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "Shape3_option5"))
                       {
                         _this.done1+=1;
                         _this.b5.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box7 =  _this.gameBoxGroup.create(649-50,325,'Shape3_option5');
                         _this.box7.name = "box1";
                         _this.boxGroup.add(_this.box7);
                         break;
                       }
                       else
                       {
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                         /* if(_this.b11) _this.b11.visible=false;
                           if(_this.b21) _this.b21.visible=false;
                            if(_this.b31) _this.b31.visible=false;
                             if(_this.b41) _this.b41.visible=false;
                              if(_this.b51) _this.b51.visible=false;
                               if(_this.b61) _this.b61.visible=false;
                                if(_this.b71) _this.b71.visible=false;*/
                       }

                    }
                   

                    if(_this.done1>=7)
                    {
                       _this.boxGroup.add(_this.box1);
                    _this.boxGroup.add(_this.box2);
                    _this.boxGroup.add(_this.box3);
                    _this.boxGroup.add(_this.box4);
                    _this.boxGroup.add(_this.box5);
                    _this.boxGroup.add(_this.box6);
                    _this.boxGroup.add(_this.box7);
                    
                     _this.time.events.add(100, function(){ 
                       _this.boxGroup.destroy();
                       _this.objRight.destroy();
                        },_this);
                       _this.time.events.add(100, function(){ 
                        _this.objRightNew =  _this.add.sprite(645-50,155+10,'Shape3new');
                         _this.objRightNew.frame = 1;

                         },_this);
                       
                       _this.time.events.add(1000, function(){ 
                                               _this.growBigger( _this.objRightNew);

                         },_this);
                       _this.time.events.add(2000, function(){ 
                       _this.rightAnswer();},_this);
                    
                    }
               },_this);
    },
  addDragBoxes4:function(target){

      
       
              var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              _this.graphicsGroup = _this.add.group();
             _this.graphics1 = _this.add.graphics(100, 100);
             _this.graphics2 = _this.add.graphics(100, 100);
             _this.graphics3 = _this.add.graphics(100, 100);
             _this.graphics4 = _this.add.graphics(100, 100);
             _this.graphics5 = _this.add.graphics(100, 100);
             _this.graphics6 = _this.add.graphics(100, 100);
             _this.graphics7 = _this.add.graphics(100, 100);
              // draw a rectangle
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(680, 108, 10, 10);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(670, 140, 20, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(635, 200, 10, 10);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(655, 230, 10, 10);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(570, 160, 10, 10);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(560, 120, 10, 10);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(540, 180, 10, 10);
              _this.graphicsGroup.add(_this.graphics1);
             _this.graphicsGroup.add(_this.graphics2);
            _this.graphicsGroup.add(_this.graphics3);
             _this.graphicsGroup.add(_this.graphics4);
             _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
               _this.graphicsGroup.add(_this.graphics7);
              _this.graphicsGroup.alpha = 0;
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "Shape4_option5"))
                       {
                         _this.done1+=1;console.log("111111111111");
                         _this.b5.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box1 =  _this.gameBoxGroup.create(751.9,198,'Shape4_option5');
                         _this.box1.name = "box1";
                         _this.boxGroup.add(_this.box1);
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "Shape4_option4"))
                       {
                         _this.done1+=1;console.log("222222222");
                         _this.b4.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box2 =  _this.gameBoxGroup.create(752.9,229,'Shape4_option4');
                         _this.box2.name = "box1";
                         _this.boxGroup.add(_this.box2);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "Shape4_option1"))
                      {
                        _this.done1+=1;console.log("33333333333333");
                        _this.b1.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box3 =  _this.gameBoxGroup.create(707.5,273,'Shape4_option1');
                        _this.box3.name = "box1";  
                        _this.boxGroup.add(_this.box3);   
                        break;
                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "Shape4_option6"))
                      {
                        _this.done1+=1;console.log("444444");
                        _this.b6.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box4 =  _this.gameBoxGroup.create(740,300,'Shape4_option6');
                        _this.box4.name = "box1";
                        _this.boxGroup.add(_this.box4);
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "Shape4_option7"))
                       {
                         _this.done1+=1;console.log("55555555555555");
                         _this.b7.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box5 =  _this.gameBoxGroup.create(619,248.7,'Shape4_option7');
                         _this.box5.name = "box1";
                         _this.boxGroup.add(_this.box5);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "Shape4_option2"))
                       {
                         _this.done1+=1;console.log("66666666666666");
                         _this.b2.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box6 =  _this.gameBoxGroup.create(620,202,'Shape4_option2');
                         _this.box6.name = "box1";
                         _this.boxGroup.add(_this.box6);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "Shape4_option3"))
                       {
                         _this.done1+=1;console.log("77777777");
                         _this.b3.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box7 =  _this.gameBoxGroup.create(618.5,247.7,'Shape4_option3');
                         _this.box7.name = "box1";
                         _this.boxGroup.add(_this.box7);
                         break;
                       }
                       else
                       {
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                           target.events.onDragStop.removeAll(); 
                         /* if(_this.b11) _this.b11.visible=false;
                           if(_this.b21) _this.b21.visible=false;
                            if(_this.b31) _this.b31.visible=false;
                             if(_this.b41) _this.b41.visible=false;
                              if(_this.b51) _this.b51.visible=false;
                               if(_this.b61) _this.b61.visible=false;
                                if(_this.b71) _this.b71.visible=false;*/
                       }

                    }
                    
                   

                    if(_this.done1>=7)
                    {
                       _this.boxGroup.add(_this.box1);
                    _this.boxGroup.add(_this.box2);
                    _this.boxGroup.add(_this.box3);
                    _this.boxGroup.add(_this.box4);
                    _this.boxGroup.add(_this.box5);
                    _this.boxGroup.add(_this.box6);
                    _this.boxGroup.add(_this.box7);
                      _this.time.events.add(100, function(){ 
                       _this.boxGroup.destroy();
                       _this.objRight.destroy();
                        },_this);
                       _this.time.events.add(100, function(){ 
                        _this.objRightNew =  _this.add.sprite(645-40+10,155+40,'Shape4new');
                         _this.objRightNew.frame = 1;

                         },_this);
                       
                       _this.time.events.add(1000, function(){ 
                                               _this.growBigger( _this.objRightNew);

                         },_this);
                       _this.time.events.add(2000, function(){ 
                       _this.rightAnswer();},_this);
                    
                    }
               },_this);
    },
  addDragBoxes5:function(target){

        var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              _this.graphicsGroup = _this.add.group();
             _this.graphics1 = _this.add.graphics(100, 100);
             _this.graphics2 = _this.add.graphics(100, 100);
             _this.graphics3 = _this.add.graphics(100, 100);
             _this.graphics4 = _this.add.graphics(100, 100);
             _this.graphics5 = _this.add.graphics(100, 100);
             _this.graphics6 = _this.add.graphics(100, 100);
             _this.graphics7 = _this.add.graphics(100, 100);
              // draw a rectangle
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(700-40, 125-30, 10, 10);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(670-40, 160-30, 20, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(605-40, 180-30, 10, 10);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(627-40, 245-30, 10, 10);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(645-40, 320-30, 10, 10);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(560-40, 180-30, 10, 10);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(540-40, 120-30, 10, 10);
              _this.graphicsGroup.add(_this.graphics1);
             _this.graphicsGroup.add(_this.graphics2);
            _this.graphicsGroup.add(_this.graphics3);
             _this.graphicsGroup.add(_this.graphics4);
             _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
               _this.graphicsGroup.add(_this.graphics7);
  
              _this.graphicsGroup.alpha = 0;
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                      console.log("******************11111111111111");
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "Shape5_option3"))
                       {
                         _this.done1+=1;console.log("111111111111");
                         _this.b3.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box1 =  _this.gameBoxGroup.create(777.7-40,197-30,'Shape5_option3');
                         _this.box1.name = "box1";
                         _this.boxGroup.add(_this.box1);
                         console.log("done1"+_this.done1);
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "Shape5_option6"))
                       {
                         _this.done1+=1;console.log("222222222");
                         _this.b6.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();

                         _this.box2 =  _this.gameBoxGroup.create(753-40,209.5-30,'Shape5_option6');
                         _this.box2.name = "box1";
                         _this.boxGroup.add(_this.box2);
                         console.log("done1"+_this.done1);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "Shape5_option2"))
                      {
                        _this.done1+=1;console.log("33333333333333");
                        _this.b2.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box3 =  _this.gameBoxGroup.create(661.5-40,257-30,'Shape5_option2');
                        _this.box3.name = "box1";  
                        _this.boxGroup.add(_this.box3);   
                        console.log("done1"+_this.done1);

                        break;

                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "Shape5_option4"))
                      {
                        _this.done1+=1;console.log("444444");
                        _this.b4.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box4 =  _this.gameBoxGroup.create(720-40,315-30,'Shape5_option4');
                        _this.box4.name = "box1";
                        _this.boxGroup.add(_this.box4);
                        console.log("done1"+_this.done1);
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "Shape5_option7"))
                       {
                         _this.done1+=1;console.log("55555555555555");
                         _this.b7.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box5 =  _this.gameBoxGroup.create(734.5-40,393-30,'Shape5_option7');
                         _this.box5.name = "box1";
                         _this.boxGroup.add(_this.box5);
                         console.log("done1"+_this.done1);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "Shape5_option5"))
                       {
                         _this.done1+=1;console.log("66666666666666");
                         _this.b5.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box6 =  _this.gameBoxGroup.create(647-40,241-30,'Shape5_option5');
                         _this.box6.name = "box1";
                         _this.boxGroup.add(_this.box6);
                         console.log("done1"+_this.done1);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "Shape5_option1"))
                       {
                         _this.done1+=1;console.log("77777777");
                         _this.b1.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box7 =  _this.gameBoxGroup.create(618.5-40,213-30,'Shape5_option1');
                         _this.box7.name = "box1";
                         _this.boxGroup.add(_this.box7);
                         console.log("done1"+_this.done1);
                         break;
                       }
                       else
                       {
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                          /*if(_this.b11) _this.b11.visible=false;
                           if(_this.b21) _this.b21.visible=false;
                            if(_this.b31) _this.b31.visible=false;
                             if(_this.b41) _this.b41.visible=false;
                              if(_this.b51) _this.b51.visible=false;
                               if(_this.b61) _this.b61.visible=false;
                                if(_this.b71) _this.b71.visible=false;*/

                    }}
                   
                    console.log("done1"+_this.done1)

                    if(_this.done1>=7)
                    {
                       _this.boxGroup.add(_this.box1);
                    _this.boxGroup.add(_this.box2);
                    _this.boxGroup.add(_this.box3);
                    _this.boxGroup.add(_this.box4);
                    _this.boxGroup.add(_this.box5);
                    _this.boxGroup.add(_this.box6);
                    _this.boxGroup.add(_this.box7);
                      _this.time.events.add(100, function(){ 
                       _this.boxGroup.destroy();
                       _this.objRight.destroy();
                        },_this);
                       _this.time.events.add(100, function(){ 
                        _this.objRightNew =  _this.add.sprite(645-65,165,'Shape5new');
                         _this.objRightNew.frame = 1;

                         },_this);
                       
                       _this.time.events.add(1000, function(){ 
                                               _this.growBigger( _this.objRightNew);

                         },_this);
                       _this.time.events.add(2000, function(){ 
                       _this.rightAnswer();},_this);
                    
                    }
               },_this);
    },
  addDragBoxes6:function(target){

       var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              _this.graphicsGroup = _this.add.group();
             _this.graphics1 = _this.add.graphics(100, 100);
             _this.graphics2 = _this.add.graphics(100, 100);
             _this.graphics3 = _this.add.graphics(100, 100);
             _this.graphics4 = _this.add.graphics(100, 100);
             _this.graphics5 = _this.add.graphics(100, 100);
             _this.graphics6 = _this.add.graphics(100, 100);
             _this.graphics7 = _this.add.graphics(100, 100);
              // dra              w a rectangle
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(640, 80-10, 10, 10);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(605, 100-10, 10, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(630, 135-10, 10, 10);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(570, 135-10, 10, 10);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(560, 190-10, 10, 10);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(540, 270-10, 10, 10);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(555, 318-10, 10, 10);
              _this.graphicsGroup.add(_this.graphics1);
             _this.graphicsGroup.add(_this.graphics2);
            _this.graphicsGroup.add(_this.graphics3);
             _this.graphicsGroup.add(_this.graphics4);
             _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
               _this.graphicsGroup.add(_this.graphics7);
              _this.graphicsGroup.alpha = 0;
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                      console.log("******************11111111111111");
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "Shape6_option5"))
                       {
                         _this.done1+=1;console.log("111111111111");
                         _this.b5.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box1 =  _this.gameBoxGroup.create(730.5,145-10,'Shape6_option5');
                         _this.box1.name = "box1";
                         _this.boxGroup.add(_this.box1);
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "Shape6_option2"))
                       {
                         _this.done1+=1;console.log("222222222");
                         _this.b2.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box2 =  _this.gameBoxGroup.create(698,144.5-10,'Shape6_option2');
                         _this.box2.name = "box2";
                         _this.boxGroup.add(_this.box2);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "Shape6_option3"))
                      {
                        _this.done1+=1;console.log("33333333333333");
                        _this.b3.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box3 =  _this.gameBoxGroup.create(700,208-10,'Shape6_option3');
                        _this.box3.name = "box3";  
                        _this.boxGroup.add(_this.box3);   
                        break;

                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "Shape6_option7"))
                      {
                        _this.done1+=1;console.log("444444");
                        _this.b7.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box4 =  _this.gameBoxGroup.create(603,207-10,'Shape6_option7');
                        _this.box4.name = "box4";
                        _this.boxGroup.add(_this.box4);
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "Shape6_option1"))
                       {
                         _this.done1+=1;console.log("55555555555555");
                         _this.b1.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box5 =  _this.gameBoxGroup.create(639.5,271-10,'Shape6_option1');
                         _this.box5.name = "box5";
                         _this.boxGroup.add(_this.box5);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "Shape6_option4"))
                       {
                         _this.done1+=1;console.log("66666666666666");
                         _this.b4.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box6 =  _this.gameBoxGroup.create(626,341.5-10,'Shape6_option4');
                         _this.box6.name = "box6";
                         _this.boxGroup.add(_this.box6);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "Shape6_option6"))
                       {
                         _this.done1+=1;console.log("77777777");
                         _this.b6.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box7 =  _this.gameBoxGroup.create(643.5,390-10,'Shape6_option6');
                         _this.box7.name = "box7";
                         _this.boxGroup.add(_this.box7);
                         break;
                       }
                       else
                       {
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy;
                           target.events.onDragStop.removeAll(); 
                         /* if(_this.b11) _this.b11.visible=false;
                           if(_this.b21) _this.b21.visible=false;
                            if(_this.b31) _this.b31.visible=false;
                             if(_this.b41) _this.b41.visible=false;
                              if(_this.b51) _this.b51.visible=false;
                               if(_this.b61) _this.b61.visible=false;
                                if(_this.b71) _this.b71.visible=false;*/ 
                       }

                    }
                   
                    

                    if(_this.done1>=7)
                    {

                       _this.boxGroup.add(_this.box1);
                    _this.boxGroup.add(_this.box2);
                    _this.boxGroup.add(_this.box3);
                    _this.boxGroup.add(_this.box4);
                    _this.boxGroup.add(_this.box5);
                    _this.boxGroup.add(_this.box6);
                    _this.boxGroup.add(_this.box7);
                    _this.time.events.add(100, function(){ 
                       _this.boxGroup.destroy();
                       _this.objRight.destroy();
                        },_this);
                       _this.time.events.add(100, function(){ 
                        _this.objRightNew =  _this.add.sprite(605,135,'Shape6new');
                         _this.objRightNew.frame = 1;

                         },_this);
                       
                       _this.time.events.add(1000, function(){ 
                                               _this.growBigger( _this.objRightNew);

                         },_this);
                       _this.time.events.add(2000, function(){ 
                       _this.rightAnswer();},_this);
                    
                    }
               },_this);
    },

  addDragBoxes7:function(target){

       var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              _this.graphicsGroup = _this.add.group();
             _this.graphics1 = _this.add.graphics(100, 100);
             _this.graphics2 = _this.add.graphics(100, 100);
             _this.graphics3 = _this.add.graphics(100, 100);
             _this.graphics4 = _this.add.graphics(100, 100);
             _this.graphics5 = _this.add.graphics(100, 100);
             _this.graphics6 = _this.add.graphics(100, 100);
             _this.graphics7 = _this.add.graphics(100, 100);
              // draw a rectangle
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(725-10, 140, 10, 10);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(695-10, 120, 10, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(630-10, 130, 10, 10);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(600-10, 170, 10, 10);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(550-10, 195, 10, 10);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(500-10, 240, 10, 10);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(570-10, 260, 10, 10);
              _this.graphicsGroup.add(_this.graphics1);
             _this.graphicsGroup.add(_this.graphics2);
            _this.graphicsGroup.add(_this.graphics3);
             _this.graphicsGroup.add(_this.graphics4);
             _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
               _this.graphicsGroup.add(_this.graphics7);
             _this.graphicsGroup.alpha = 0;
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                      console.log("******************11111111111111");
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "Shape7_option3"))
                       {
                         _this.done1+=1;console.log("111111111111");
                         _this.b3.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box1 =  _this.gameBoxGroup.create(800-10,226.3,'Shape7_option3');
                         _this.box1.name = "box1";
                         _this.boxGroup.add(_this.box1);
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "Shape7_option2"))
                       {
                         _this.done1+=1;console.log("222222222");
                         _this.b2.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box2 =  _this.gameBoxGroup.create(768-10,194,'Shape7_option2');
                         _this.box2.name = "box2";
                         _this.boxGroup.add(_this.box2);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "Shape7_option1"))
                      {
                        _this.done1+=1;console.log("33333333333333");
                        _this.b1.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box3 =  _this.gameBoxGroup.create(672-10,192.2,'Shape7_option1');
                        _this.box3.name = "box3";  
                        _this.boxGroup.add(_this.box3);   
                        break;

                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "Shape7_option7"))
                      {
                        _this.done1+=1;console.log("444444");
                        _this.b7.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box4 =  _this.gameBoxGroup.create(672-10,256.5,'Shape7_option7');
                        _this.box4.name = "box4";
                        _this.boxGroup.add(_this.box4);
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "Shape7_option4"))
                       {
                         _this.done1+=1;console.log("55555555555555");
                         _this.b4.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box5 =  _this.gameBoxGroup.create(608-10,258.5,'Shape7_option4');
                         _this.box5.name = "box5";
                         _this.boxGroup.add(_this.box5);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "Shape7_option5"))
                       {
                         _this.done1+=1;console.log("66666666666666");
                         _this.b5.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box6 =  _this.gameBoxGroup.create(564.7-10,322,'Shape7_option5');
                         _this.box6.name = "box6";
                         _this.boxGroup.add(_this.box6);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "Shape7_option6"))
                       {
                         _this.done1+=1;console.log("77777777");
                         _this.b6.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box7 =  _this.gameBoxGroup.create(639.5-10,347,'Shape7_option6');
                         _this.box7.name = "box7";
                         _this.boxGroup.add(_this.box7);
                         break;
                       }
                       else
                       {
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                           target.events.onDragStop.removeAll(); 
                         /* if(_this.b11) _this.b11.visible=false;
                           if(_this.b21) _this.b21.visible=false;
                            if(_this.b31) _this.b31.visible=false;
                             if(_this.b41) _this.b41.visible=false;
                              if(_this.b51) _this.b51.visible=false;
                               if(_this.b61) _this.b61.visible=false;
                                if(_this.b71) _this.b71.visible=false;*/
                       }

                    }
                   

                    if(_this.done1>=7)
                    {

                       _this.boxGroup.add(_this.box1);
                    _this.boxGroup.add(_this.box2);
                    _this.boxGroup.add(_this.box3);
                    _this.boxGroup.add(_this.box4);
                    _this.boxGroup.add(_this.box5);
                    _this.boxGroup.add(_this.box6);
                    _this.boxGroup.add(_this.box7);
                    
                     _this.time.events.add(100, function(){ 
                       _this.boxGroup.destroy();
                       _this.objRight.destroy();
                        },_this);
                       _this.time.events.add(100, function(){ 
                        _this.objRightNew =  _this.add.sprite(550,190,'Shape7new');
                         _this.objRightNew.frame = 1;

                         },_this);
                       
                       _this.time.events.add(1000, function(){ 
                                               _this.growBigger( _this.objRightNew);

                         },_this);
                       _this.time.events.add(2000, function(){ 
                       _this.rightAnswer();},_this);
                    
                    }
               },_this);
    },

    addDragBoxes8:function(target){

       var vx = target.x;   
              var vy = target.y;
              target.input.enableDrag(true);
              _this.clickSound = _this.add.audio('ClickSound');
              _this.clickSound.play();
              _this.graphicsGroup = _this.add.group();
             _this.graphics1 = _this.add.graphics(100, 100);
             _this.graphics2 = _this.add.graphics(100, 100);
             _this.graphics3 = _this.add.graphics(100, 100);
             _this.graphics4 = _this.add.graphics(100, 100);
             _this.graphics5 = _this.add.graphics(100, 100);
             _this.graphics6 = _this.add.graphics(100, 100);
             _this.graphics7 = _this.add.graphics(100, 100);
              // draw a rectangle
              _this.graphics1.lineStyle(2, 0x0000FF, 1);
              _this.graphics1.drawRect(725-10, 140, 10, 10);
             _this.graphics2.lineStyle(2, 0x0000FF, 1);
              _this.graphics2.drawRect(695-10, 120, 10, 10);
               _this.graphics3.lineStyle(2, 0x0000FF, 1);
              _this.graphics3.drawRect(630-10, 130, 10, 10);
              _this.graphics4.lineStyle(2, 0x0000FF, 1);
              _this.graphics4.drawRect(600-10, 170, 10, 10);
             _this.graphics5.lineStyle(2, 0x0000FF, 1);
              _this.graphics5.drawRect(550-10, 195, 10, 10);
             _this.graphics6.lineStyle(2, 0x0000FF, 1);
              _this.graphics6.drawRect(500-10, 240, 10, 10);
            _this.graphics7.lineStyle(2, 0x0000FF, 1);
              _this.graphics7.drawRect(570-10, 260, 10, 10);
              _this.graphicsGroup.add(_this.graphics1);
             _this.graphicsGroup.add(_this.graphics2);
            _this.graphicsGroup.add(_this.graphics3);
             _this.graphicsGroup.add(_this.graphics4);
             _this.graphicsGroup.add(_this.graphics5);
              _this.graphicsGroup.add(_this.graphics6);
               _this.graphicsGroup.add(_this.graphics7);
            // _this.graphicsGroup.alpha = 0;
                     
              target.events.onDragStop.add(function(target)
              {

               for(var i=0;i<= _this.gameBoxGroup.length-1;i++)
                    {

                      console.log("******************11111111111111");
                       _this.boxGroup = _this.add.group();
                       if((_this.checkOverlap(target,_this.graphics1))&&(target.name == "Shape7_option3"))
                       {
                         _this.done1+=1;console.log("111111111111");
                         _this.b3.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box1 =  _this.gameBoxGroup.create(800-10,226.3,'Shape7_option3');
                         _this.box1.name = "box1";
                         _this.boxGroup.add(_this.box1);
                         break;
                        }
                       else if((_this.checkOverlap(target,_this.graphics2))&&(target.name == "Shape7_option2"))
                       {
                         _this.done1+=1;console.log("222222222");
                         _this.b2.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box2 =  _this.gameBoxGroup.create(768-10,194,'Shape7_option2');
                         _this.box2.name = "box2";
                         _this.boxGroup.add(_this.box2);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics3))&&(target.name == "Shape7_option1"))
                      {
                        _this.done1+=1;console.log("33333333333333");
                        _this.b1.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box3 =  _this.gameBoxGroup.create(672-10,192.2,'Shape7_option1');
                        _this.box3.name = "box3";  
                        _this.boxGroup.add(_this.box3);   
                        break;

                      }
                     else if((_this.checkOverlap(target,_this.graphics4))&&(target.name == "Shape7_option7"))
                      {
                        _this.done1+=1;console.log("444444");
                        _this.b7.kill();
                        _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                        _this.box4 =  _this.gameBoxGroup.create(672-10,256.5,'Shape7_option7');
                        _this.box4.name = "box4";
                        _this.boxGroup.add(_this.box4);
                        break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics5))&&(target.name == "Shape7_option4"))
                       {
                         _this.done1+=1;console.log("55555555555555");
                         _this.b4.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box5 =  _this.gameBoxGroup.create(608-10,258.5,'Shape7_option4');
                         _this.box5.name = "box5";
                         _this.boxGroup.add(_this.box5);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics6))&&(target.name == "Shape7_option5"))
                       {
                         _this.done1+=1;console.log("66666666666666");
                         _this.b5.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box6 =  _this.gameBoxGroup.create(564.7-10,322,'Shape7_option5');
                         _this.box6.name = "box6";
                         _this.boxGroup.add(_this.box6);
                         break;
                       }
                       else if((_this.checkOverlap(target,_this.graphics7))&&(target.name == "Shape7_option6"))
                       {
                         _this.done1+=1;console.log("77777777");
                         _this.b6.kill();
                         _this.clickSound = _this.add.audio('snapSound');
                           _this.clickSound.play();
                         _this.box7 =  _this.gameBoxGroup.create(639.5-10,347,'Shape7_option6');
                         _this.box7.name = "box7";
                         _this.boxGroup.add(_this.box7);
                         break;
                       }
                       else
                       {
                        _this.noofAttempts++;
                          _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                          _this.shake.shake(10,target);
                          target.x = vx;   
                          target.y = vy; 
                          target.events.onDragStop.removeAll(); 
                         /* if(_this.b11) _this.b11.visible=false;
                           if(_this.b21) _this.b21.visible=false;
                            if(_this.b31) _this.b31.visible=false;
                             if(_this.b41) _this.b41.visible=false;
                              if(_this.b51) _this.b51.visible=false;
                               if(_this.b61) _this.b61.visible=false;
                                if(_this.b71) _this.b71.visible=false;*/
                       }

                    }
                    _this.boxGroup.add(_this.box1);
                    _this.boxGroup.add(_this.box2);
                    _this.boxGroup.add(_this.box3);
                    _this.boxGroup.add(_this.box4);
                    _this.boxGroup.add(_this.box5);
                    _this.boxGroup.add(_this.box6);
                    _this.boxGroup.add(_this.box7);
                    

                    if(_this.done1>=7)
                    {
                      _this.noofAttempts++;
                     _this.time.events.add(100, function(){ 
                       _this.boxGroup.destroy();},_this);
                       _this.time.events.add(100, function(){ 
                       _this.objRight.frame=1;
                                              
},_this);
                       
                       _this.growBigger( _this.objRight);
                       _this.time.events.add(1500, function(){ 
                       _this.rightAnswer();},_this);
                    }
               },_this);  
    },

  growBigger:function(target)
{
  var tween1 = this.add.tween(target.scale);
          tween1.to({ x:1.1 , y:1.1}, 300,'Linear', true, 0);
          tween1.onComplete.add(function(){
                var tween2 = this.add.tween(target.scale);
                tween2.to({ x:0 , y:0}, 2000,'Linear', true, 0);},this);

        
},
    
     rightAnswer:function(target){
console.log("*******************************************************************");          
                        _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                        _this.starAnim.smoothed = false;
                        _this.anim4 =  _this.starAnim.animations.add('star');
                        _this.celebr = _this.add.audio('celebr');
                        _this.celebr.play();
                        _this.anim4.play();
                        _this.count1++;
                        _this.box1.destroy();
                        _this.box2.destroy();
                        _this.box3.destroy();
                        _this.box4.destroy();
                        _this.box5.destroy();
                        _this.box6.destroy();
                        _this.box7.destroy();

                        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

        _this.noofAttempts++;
        _this.questionid=1;

        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
  _this.time.events.add(1300, function(){_this.removeEverthing();},_this);            

     },
    
    

checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);

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
        if( _this.no1<6)
        {
            // _this.no1++;
            _this.done1=0;
            _this.wrong = true;
            _this.timer1.stop();
            _this.count =0;
            _this.starsGroup.getChildAt(_this.count1).frame = 2; 
            var MaintweenDestroy = _this.add.tween(_this.objGroup);
            MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){_this.objGroup.destroy();},_this);
            var Maintween1Destroy = _this.add.tween(_this.gameBoxGroup);
            Maintween1Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                _this.gameBoxGroup.destroy();
                _this.getQuestion();
            },_this); 

           /* _this.b11.kill();
             _this.b21.kill();
              _this.b31.kill();
               _this.b41.kill();
                _this.b51.kill();
                 _this.b61.kill();
                  _this.b71.kill();*/

        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('sg12_1_3Score');
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            
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
    
	

      
    update:function(){

    },
    
    getVoice:function(){
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
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/English/sg12.1.3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/Hindi/sg12.1.3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")

                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/Kannada/sg12.1.3.mp3");
                        }
                        else if(window.languageSelected == "Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/Gujarati/sg12.1.3.mp3");
                            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
						else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/Marathi/sg12.1.3.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/Telugu/sg12.1.3.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/Tamil/sg12.1.3.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/Urdu/sg12.1.3.mp3");
                    }
                        else
                        {
                          _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg12.1.3/Odiya/sg12.1.3.mp3");
                        }
        
                      /*  break;
            */}

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