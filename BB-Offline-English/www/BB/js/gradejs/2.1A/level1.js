Game.grade2_1Alevel1=function(){};


Game.grade2_1Alevel1.prototype={

    init:function(game)
    {
       _this = this;
       
      /* _this.gameid = "2.1A";
       
       _this.currentTime = window.timeSaveFunc();
       _this.saveGameplay = 
       {
          id_game:_this.gameid, 
          access_token:window.acctkn, 
          start_time:_this.currentTime
       } 
       _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/
       
       
       telInitializer.gameIdInit("length2_1A",gradeSelected);
    },

    preload:function(game){
        if(!window.grade1ML1){

            window.grade1ML1 = true;

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

        _this.load.image('Level21_bg1',window.baseUrl+'assets/gradeAssets/2.1A/bg1.png');
        _this.load.image('Level21_bg3',window.baseUrl+'assets/gradeAssets/2.1A/bg3.png');                          
        _this.load.image('Level21_sh',window.baseUrl+'assets/gradeAssets/2.1A/sh.png');
      
        _this.load.image('Level21_cloud',window.baseUrl+'assets/gradeAssets/2.1A/cloud.png');
        _this.load.image('Level21_cloud2',window.baseUrl+'assets/gradeAssets/2.1A/c2.png');
        _this.load.image('Level21_cloud3',window.baseUrl+'assets/gradeAssets/2.1A/cloud3.png');
        _this.load.image('Level21_cloud4',window.baseUrl+'assets/gradeAssets/2.1A/cloud4.png');
        _this.load.image('Level21_cloud5',window.baseUrl+'assets/gradeAssets/2.1A/cloud5.png');
        
        _this.load.atlas('Level21_giraffe',window.baseUrl+'assets/gradeAssets/2.1A/giraffe.png',window.baseUrl+'json/gradeJson/2.1A/giraffe.json');
        _this.load.atlas('Level21_elephant',window.baseUrl+'assets/gradeAssets/2.1A/elephant.png',window.baseUrl+'json/gradeJson/2.1A/elephant.json');
        _this.load.image('Level21_tree1',window.baseUrl+'assets/gradeAssets/2.1A/tree1.png');
        
        _this.load.atlas('Level21_bird1',window.baseUrl+'assets/gradeAssets/2.1A/bird1.png',window.baseUrl+'json/gradeJson/2.1A/bird1.json');
        _this.load.atlas('Level21_dog1',window.baseUrl+'assets/gradeAssets/2.1A/dog1.png',window.baseUrl+'json/gradeJson/2.1A/dog1.json');
        _this.load.atlas('Level21_cat',window.baseUrl+'assets/gradeAssets/2.1A/cat.png',window.baseUrl+'json/gradeJson/2.1A/cat.json');
        _this.load.image('Level21_house1',window.baseUrl+'assets/gradeAssets/2.1A/house1.png');
        
        _this.load.atlas('Level21_bluemug',window.baseUrl+'assets/gradeAssets/2.1A/bluemug.png',window.baseUrl+'json/gradeJson/2.1A/bluemug.json');
        _this.load.atlas('Level21_pinkpot',window.baseUrl+'assets/gradeAssets/2.1A/pinkpot.png',window.baseUrl+'json/gradeJson/2.1A/pinkpot.json');
        _this.load.image('Level21_chair1',window.baseUrl+'assets/gradeAssets/2.1A/chair1.png');
        _this.load.image('Level21_ladder1',window.baseUrl+'assets/gradeAssets/2.1A/ladder1.png');
        
        _this.load.image('Level21_sofa1',window.baseUrl+'assets/gradeAssets/2.1A/sofa1.png'); 
        _this.load.atlas('Level21_clock1',window.baseUrl+'assets/gradeAssets/2.1A/clock1.png',window.baseUrl+'json/gradeJson/2.1A/clock1.json');
        _this.load.atlas('Level21_book1',window.baseUrl+'assets/gradeAssets/2.1A/book1.png',window.baseUrl+'json/gradeJson/2.1A/book1.json');
        
        _this.load.atlas('Level21_elephant1',window.baseUrl+'assets/gradeAssets/2.1A/elephant1.png',window.baseUrl+'json/gradeJson/2.1A/elephant1.json');
        _this.load.atlas('Level21_bee1',window.baseUrl+'assets/gradeAssets/2.1A/bee1.png',window.baseUrl+'json/gradeJson/2.1A/bee1.json');
        
        _this.load.atlas('Level21_papaya1',window.baseUrl+'assets/gradeAssets/2.1A/papaya1.png',window.baseUrl+'json/gradeJson/2.1A/papaya1.json');
        _this.load.atlas('Level21_banana1',window.baseUrl+'assets/gradeAssets/2.1A/banana1.png',window.baseUrl+'json/gradeJson/2.1A/banana1.json');
        
        _this.load.atlas('Level21_key1',window.baseUrl+'assets/gradeAssets/2.1A/key1.png',window.baseUrl+'json/gradeJson/2.1A/key1.json');
        _this.load.atlas('Level21_key2',window.baseUrl+'assets/gradeAssets/2.1A/key2.png',window.baseUrl+'json/gradeJson/2.1A/key2.json');
        
        _this.load.atlas('Level21_dog2',window.baseUrl+'assets/gradeAssets/2.1A/dog2.png',window.baseUrl+'json/gradeJson/2.1A/dog2.json');
        _this.load.atlas('Level21_cat2',window.baseUrl+'assets/gradeAssets/2.1A/cat2.png',window.baseUrl+'json/gradeJson/2.1A/cat2.json');
        
        _this.load.atlas('Level21_dog3',window.baseUrl+'assets/gradeAssets/2.1A/dog3.png',window.baseUrl+'json/gradeJson/2.1A/dog3.json');
        _this.load.atlas('Level21_snake1',window.baseUrl+'assets/gradeAssets/2.1A/snake1.png',window.baseUrl+'json/gradeJson/2.1A/snake1.json');
        _this.load.image('Level21_sofa2',window.baseUrl+'assets/gradeAssets/2.1A/sofa2.png');
        
        _this.load.image('Level21_table1',window.baseUrl+'assets/gradeAssets/2.1A/table1.png');
        _this.load.atlas('Level21_cat3',window.baseUrl+'assets/gradeAssets/2.1A/cat3.png',window.baseUrl+'json/gradeJson/2.1A/cat3.json');
        _this.load.atlas('Level21_book2',window.baseUrl+'assets/gradeAssets/2.1A/book2.png',window.baseUrl+'json/gradeJson/2.1A/book2.json');
        
        _this.load.image('Level21_sofa3',window.baseUrl+'assets/gradeAssets/2.1A/sofa3.png');
        _this.load.atlas('Level21_scooter1',window.baseUrl+'assets/gradeAssets/2.1A/scooter1.png',window.baseUrl+'json/gradeJson/2.1A/scooter1.json');
        _this.load.atlas('Level21_car1',window.baseUrl+'assets/gradeAssets/2.1A/car1.png',window.baseUrl+'json/gradeJson/2.1A/car1.json');
        
        _this.load.image('Level21_house2',window.baseUrl+'assets/gradeAssets/2.1A/house2.png');
        _this.load.atlas('Level21_cat4',window.baseUrl+'assets/gradeAssets/2.1A/cat4.png',window.baseUrl+'json/gradeJson/2.1A/cat4.json');
        
        _this.load.image('Level21_tree2',window.baseUrl+'assets/gradeAssets/2.1A/tree2.png');
        _this.load.atlas('Level21_croc1',window.baseUrl+'assets/gradeAssets/2.1A/croc1.png',window.baseUrl+'json/gradeJson/2.1A/croc1.json');
        _this.load.atlas('Level21_bird2',window.baseUrl+'assets/gradeAssets/2.1A/bird2.png',window.baseUrl+'json/gradeJson/2.1A/bird2.json');
        
        _this.load.atlas('Level21_fish1',window.baseUrl+'assets/gradeAssets/2.1A/fish1.png',window.baseUrl+'json/gradeJson/2.1A/fish1.json');
        _this.load.atlas('Level21_cat5',window.baseUrl+'assets/gradeAssets/2.1A/cat5.png',window.baseUrl+'json/gradeJson/2.1A/cat5.json');
        
        _this.load.image('Level21_house3',window.baseUrl+'assets/gradeAssets/2.1A/house3.png');
        _this.load.atlas('Level21_sofa4',window.baseUrl+'assets/gradeAssets/2.1A/sofa4.png',window.baseUrl+'json/gradeJson/2.1A/sofa4.json');
        _this.load.atlas('Level21_scooter2',window.baseUrl+'assets/gradeAssets/2.1A/scooter2.png',window.baseUrl+'json/gradeJson/2.1A/scooter2.json');
        
        _this.load.image('Level21_basket1',window.baseUrl+'assets/gradeAssets/2.1A/basket1.png');
        _this.load.atlas('Level21_papaya2',window.baseUrl+'assets/gradeAssets/2.1A/papaya2.png',window.baseUrl+'json/gradeJson/2.1A/papaya2.json');
        
        _this.load.image('Level21_flower1',window.baseUrl+'assets/gradeAssets/2.1A/flower1.png');
        _this.load.atlas('Level21_pot2',window.baseUrl+'assets/gradeAssets/2.1A/pot2.png',window.baseUrl+'json/gradeJson/2.1A/pot2.json');
        _this.load.atlas('Level21_bee2',window.baseUrl+'assets/gradeAssets/2.1A/bee2.png',window.baseUrl+'json/gradeJson/2.1A/bee2.json');
        
        _this.load.image('Level21_books',window.baseUrl+'assets/gradeAssets/2.1A/books.png');
        _this.load.atlas('Level21_book3',window.baseUrl+'assets/gradeAssets/2.1A/book3.png',window.baseUrl+'json/gradeJson/2.1A/book3.json');
        
        _this.load.image('Level21_step1',window.baseUrl+'assets/gradeAssets/2.1A/step1.png');
        _this.load.atlas('Level21_mug1',window.baseUrl+'assets/gradeAssets/2.1A/mug1.png',window.baseUrl+'json/gradeJson/2.1A/mug1.json');
        _this.load.atlas('Level21_mug2',window.baseUrl+'assets/gradeAssets/2.1A/mug2.png',window.baseUrl+'json/gradeJson/2.1A/mug2.json');
        
        _this.load.image('Level21_table2',window.baseUrl+'assets/gradeAssets/2.1A/table2.png');
        _this.load.atlas('Level21_clock2',window.baseUrl+'assets/gradeAssets/2.1A/clock2.png',window.baseUrl+'json/gradeJson/2.1A/clock2.json');
        _this.load.atlas('Level21_book4',window.baseUrl+'assets/gradeAssets/2.1A/book4.png',window.baseUrl+'json/gradeJson/2.1A/book4.json');
        
        _this.load.atlas('Level21_cat44',window.baseUrl+'assets/gradeAssets/2.1A/cat44.png',window.baseUrl+'json/gradeJson/2.1A/cat44.json');
        _this.load.image('Level21_tree3',window.baseUrl+'assets/gradeAssets/2.1A/tree3.png');
        _this.load.image('Level21_z1',window.baseUrl+'assets/gradeAssets/2.1A/z1.png');
        _this.load.image('Level21_house4',window.baseUrl+'assets/gradeAssets/2.1A/house4.png');
        
        _this.load.atlas('Level21_mug3',window.baseUrl+'assets/gradeAssets/2.1A/mug3.png',window.baseUrl+'json/gradeJson/2.1A/mug3.json');
        
        _this.load.atlas('Level21_mug6',window.baseUrl+'assets/gradeAssets/2.1A/mug6.png',window.baseUrl+'json/gradeJson/2.1A/mug6.json');
        _this.load.image('Level21_cloud7',window.baseUrl+'assets/gradeAssets/2.1A/cloud7.png');
        _this.load.image('Level21_cloud8',window.baseUrl+'assets/gradeAssets/2.1A/cloud8.png');
        _this.load.image('Level21_scooter5',window.baseUrl+'assets/gradeAssets/2.1A/scooter5.png');
        _this.load.atlas('Level21_bird3',window.baseUrl+'assets/gradeAssets/2.1A/bird3.png',window.baseUrl+'json/gradeJson/2.1A/bird3.json');
        
        _this.load.image('Level21_sofa5',window.baseUrl+'assets/gradeAssets/2.1A/sofa5.png');
        _this.load.atlas('Level21_painting',window.baseUrl+'assets/gradeAssets/2.1A/painting.png',window.baseUrl+'json/gradeJson/2.1A/painting.json');
        
        _this.load.image('Level21_stand',window.baseUrl+'assets/gradeAssets/2.1A/stand.png');
        _this.load.atlas('Level21_drum',window.baseUrl+'assets/gradeAssets/2.1A/drum.png',window.baseUrl+'json/gradeJson/2.1A/drum.json');
        _this.load.atlas('Level21_pot4',window.baseUrl+'assets/gradeAssets/2.1A/pot4.png',window.baseUrl+'json/gradeJson/2.1A/pot4.json');
        
        
        _this.load.image('Level21_rope',window.baseUrl+'assets/gradeAssets/2.1A/rope.png');
        _this.load.atlas('Level21_kite',window.baseUrl+'assets/gradeAssets/2.1A/kite.png',window.baseUrl+'json/gradeJson/2.1A/kite.json');
        
        _this.load.atlas('Level21_trees',window.baseUrl+'assets/gradeAssets/2.1A/trees.png',window.baseUrl+'json/gradeJson/2.1A/trees.json');
        _this.load.atlas('Level21_catss',window.baseUrl+'assets/gradeAssets/2.1A/catss.png',window.baseUrl+'json/gradeJson/2.1A/catss.json');
        _this.load.atlas('Level21_treee',window.baseUrl+'assets/gradeAssets/2.1A/treee.png',window.baseUrl+'json/gradeJson/2.1A/treee.json');
        _this.load.atlas('Level21_treee1',window.baseUrl+'assets/gradeAssets/2.1A/treee1.png',window.baseUrl+'json/gradeJson/2.1A/treee1.json');
        

        
        _this.load.atlas('Level21_btn',window.baseUrl+'assets/gradeAssets/2.1A/btn.png',window.baseUrl+'json/gradeJson/2.1A/btn.json');
       

    }

    },


    create:function(game){

          _this.amplify = null;

            _this.minutes=0;
            _this.seconds=0;
            _this.counterForTimer=0;
            _this.timer1 = null;
       
             _this.noofAttempts=0;
             _this.AnsTimercount=0;
             _this.sceneCount = 0;
            //baudio.play(); 
             //baudio.loopFull(0.6);
            _this.qArrays = new Array();
            _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,49,50,51,52,53,54/*,55,56*/];
           _this.qArrays = _this.shuffle(_this.qArrays);
            _this.no1=0;
            _this.no2=0;
            _this.count1=0;
            _this.count=0;
             _this.shake = new Phaser.Plugin.Shake(game);
               game.plugins.add(_this.shake);

            //_this.physics.startSystem(Phaser.Physics.ARCADE);
            // _this.physics.setBoundsToWorld();

            _this.background = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height, 'Level21_bg1');
           // _this.background.scale.setTo(1,1.1);
          
             _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);
    
              _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
              //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
              _this.backbtn.inputEnabled = true;


              _this.backbtn.events.onInputDown.add(function()
              {
                //_this.cache.destroy();
                console.log("back");
                _this.backbtn.events.onInputDown.removeAll();
                _this.stopVoice();
                
                _this.clickSound = _this.add.audio('ClickSound');
                      _this.clickSound.play();
                      if(grade2Selected == false)
                  _this.state.start('grade1levelSelectionScreen',true,false); 
                else
                  _this.state.start('grade2levelSelectionScreen',true,false); 

              },_this);

               _this.speakerbtn = this.add.button(600,6,'grade11_speaker',function(){},this,1,0,2);
                 //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
              // _this.speakerbtn.inputEnabled = true;
              _this.speakerbtn.events.onInputDown.add(function()
              {
                
                 _this.clickSound = _this.add.audio('ClickSound');
                     _this.clickSound.play();
                      
                _this.getVoice();
                
              },_this);

              _this.timebg=this.add.sprite(305,6,'Level42C_timer');
                  _this.timebg.name="common_timebg";
                  _this.timebg.scale.setTo(1,1);


                    this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ this.seconds);
                      _this.timeDisplay.anchor.setTo(0.5);
                      _this.timeDisplay.align = 'center';
                      _this.timeDisplay.font = 'Oh Whale';
                      _this.timeDisplay.fontSize = 20;
                      //text.fontWeight = 'bold';
                      _this.timeDisplay.fill = '#ADFF2F';


           /* _this.dottedBox=this.add.sprite(70,7,'dottedBox');
          _this.dottedBox.name="dottedBox";
            _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
            _this.numTxt1.anchor.setTo(0.5);
            _this.numTxt1.scale.setTo(1.2,1.2);
            _this.numTxt1.align = 'center';
            _this.numTxt1.font = 'Alte Haas Grotesk';
            _this.numTxt1.fontSize = 10;
            _this.numTxt1.fill = '#ffffff';
            _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.dottedBox.addChild(_this.numTxt1);
        
            _this.numTxt2 = this.add.text(220,24, 'Fractions');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
      */
    
     _this.generateStarsForTheScene(6);
            
            
        
                  ////_this.no1++;
             _this.getQuestion();

    },
   
    addQuestion:function(no2)
    {

         //console.log("here");
         _this.time.events.add(2000, function(){
  
             _this.tween = _this.add.tween(_this.flagGroup1);
         _this.tween.to({ x: -1000 }, 0, 'Linear', true, 0);
         _this.tween.onComplete.add(_this.changeQuestion, _this);


          }, _this);

    },
       
 
    gotoFirstQuestion:function(){
         
        _this.getVoice();
        _this.questionid = 1;
        
              //_this.no1++;
                  
              
                 _this.cloud = _this.add.sprite(100,50,'Level21_cloud');
                 _this.cloud.scale.setTo(1,1); 
              _this.mainFlag = _this.add.sprite(210,280,'Level21_giraffe');
              _this.mainFlag.anchor.setTo(0.5);
                 // _this.mainFlag.scale.setTo(1,1);
                 _this.mainFlag.inputEnabled = true;
              _this.mainFlag.input.useHandCursor = true;
                 _this.mainFlag.name = 'Level21_giraffe';
                 _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
                 
              _this.opt1 = _this.add.sprite(400,330, 'Level21_tree1');
              _this.opt1.anchor.setTo(0.5);

                              _this.opt4 = _this.add.sprite(810,466, 'Level21_sh');
              _this.opt4.anchor.setTo(0.5);
                  _this.opt4.scale.setTo(0.9,1.1);
                  
              _this.opt2 = _this.add.sprite(790,380, 'Level21_elephant');
              _this.opt2.anchor.setTo(0.5);
                 _this.opt2.inputEnabled = true;
              _this.opt2.input.useHandCursor = true;
              _this.opt2.name = "Level21_elephant";
                 _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
                  
             
                  
                      _this.opt3 = _this.add.sprite(175,485, 'Level21_sh');
              _this.opt3.anchor.setTo(0.5);
                  _this.opt3.scale.setTo(0.6,1);
                  
               
                  
                  
                _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-230, _this.world.centerY-30);
                  _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
                  _this.wronggraphics1.beginFill(0xFF700B, 1);
                  _this.wronggraphics1.scale.setTo(2,2);
                  _this.wronggraphics1.lineTo(0, 115);
                  _this.wronggraphics1.lineTo(100, 80);
                  _this.wronggraphics1.lineTo(0, 0);
                 _this.wronggraphics1.angle = 10;
               _this.wronggraphics1.alpha = 0;
                  _this.wronggraphics1.inputEnabled = true;
                 _this.wronggraphics1.input.useHandCursor = true;
                  _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
                  
                  
                  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-225, _this.world.centerY-100);
                  _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
                  _this.wronggraphics2.beginFill(0xFF700B, 1);
                  _this.wronggraphics2.scale.setTo(1.5,1.5);
                  _this.wronggraphics2.lineTo(0, 115);
                  _this.wronggraphics2.lineTo(100, 80);
                  _this.wronggraphics2.lineTo(0, 0);
                 _this.wronggraphics2.angle = 10;
               _this.wronggraphics2.alpha = 0;
                  _this.wronggraphics2.inputEnabled = true;
                 _this.wronggraphics2.input.useHandCursor = true;
                  _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
                  
                   _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-255, _this.world.centerY-150);
                  _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
                  _this.wronggraphics3.beginFill(0xFF700B, 1);
                  _this.wronggraphics3.scale.setTo(1.5,1.5);
                  _this.wronggraphics3.lineTo(0, 115);
                  _this.wronggraphics3.lineTo(100, 80);
                  _this.wronggraphics3.lineTo(0, 0);
                 _this.wronggraphics3.angle = 60;
                _this.wronggraphics3.alpha = 0;
                  _this.wronggraphics3.inputEnabled = true;
                 _this.wronggraphics3.input.useHandCursor = true;
                  _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);


                 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX-240, _this.world.centerY-250);
                  _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
                  _this.wronggraphics4.beginFill(0xFF700B, 1);
                  _this.wronggraphics4.scale.setTo(1,1);
                  _this.wronggraphics4.lineTo(0, 115);
                  _this.wronggraphics4.lineTo(100, 80);
                  _this.wronggraphics4.lineTo(0, 0);
                 _this.wronggraphics4.angle = 60;
               _this.wronggraphics4.alpha = 0;
                  _this.wronggraphics4.inputEnabled = true;
                 _this.wronggraphics4.input.useHandCursor = true;
                  _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
                  
                 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-360, _this.world.centerY-60);
                  _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
                  _this.wronggraphics5.beginFill(0xFF700B, 1);
                  _this.wronggraphics5.scale.setTo(1,1);
                  _this.wronggraphics5.lineTo(0, 115);
                  _this.wronggraphics5.lineTo(100, 80);
                  _this.wronggraphics5.lineTo(0, 0);
                 _this.wronggraphics5.angle = 20;
                _this.wronggraphics5.alpha = 0;
                  _this.wronggraphics5.inputEnabled = true;
                 _this.wronggraphics5.input.useHandCursor = true;
                  _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
                  
                  
                 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+180, _this.world.centerY-50);
                  _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
                  _this.wronggraphics6.beginFill(0xFF700B, 1);
                  _this.wronggraphics6.lineTo(0, 115);
                  _this.wronggraphics6.lineTo(100, 80);
                  _this.wronggraphics6.lineTo(0, 0);
                 _this.wronggraphics6.angle = 50;
                 _this.wronggraphics6.alpha =0;
                  _this.wronggraphics6.inputEnabled = true;
                 _this.wronggraphics6.input.useHandCursor = true;
                  _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);
                  
                  _this.wronggraphics7 = _this.add.graphics(_this.world.centerX+230, _this.world.centerY+100);
                  _this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
                  _this.wronggraphics7.beginFill(0xFF700B, 1);
                  _this.wronggraphics7.lineTo(0, 115);
                  _this.wronggraphics7.lineTo(100, 80);
                  _this.wronggraphics7.lineTo(0, 0);
                 _this.wronggraphics7.angle = 50;
                _this.wronggraphics7.alpha =0;
                  _this.wronggraphics7.inputEnabled = true;
                 _this.wronggraphics7.input.useHandCursor = true;
                  _this.wronggraphics7.events.onInputDown.add(_this.nothing,_this);

               _this.wronggraphics8 = _this.add.graphics(_this.world.centerX+434, _this.world.centerY+400);
                 _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
                 _this.wronggraphics8.beginFill(0xFF700B, 1);
                 // _this.wronggraphics8.scale.setTo(1.5,1);
                  _this.wronggraphics8.lineTo(0, 200);
                 _this.wronggraphics8.lineTo(200, 200);
                 _this.wronggraphics8.lineTo(200, 0);
                 _this.wronggraphics8.lineTo(0, 0);
               _this.wronggraphics8.angle = 180;
                 _this.wronggraphics8.alpha = 0;
                  _this.wronggraphics8.inputEnabled = true;
                 _this.wronggraphics8.input.useHandCursor = true;
                  _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
                  
                      _this.wronggraphics9 = _this.add.graphics(_this.world.centerX+204, _this.world.centerY+290);
                 _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
                 _this.wronggraphics9.beginFill(0xFF700B, 1);
                 // _this.wronggraphics9.scale.setTo(1.5,1);
                  _this.wronggraphics9.lineTo(0, 200);
                 _this.wronggraphics9.lineTo(200, 200);
                 _this.wronggraphics9.lineTo(200, 0);
                 _this.wronggraphics9.lineTo(0, 0);
               _this.wronggraphics9.angle = 180;
                _this.wronggraphics9.alpha = 0;
                  _this.wronggraphics9.inputEnabled = true;
                 _this.wronggraphics9.input.useHandCursor = true;
                  _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);
                  
                      _this.wronggraphics10 = _this.add.graphics(_this.world.centerX+614, _this.world.centerY+190);
                 _this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
                 _this.wronggraphics10.beginFill(0xFF700B, 1);
                 // _this.wronggraphics10.scale.setTo(1.5,1);
                  _this.wronggraphics10.lineTo(0, 200);
                 _this.wronggraphics10.lineTo(200, 200);
                 _this.wronggraphics10.lineTo(200, 0);
                 _this.wronggraphics10.lineTo(0, 0);
               _this.wronggraphics10.angle = 180;
                 _this.wronggraphics10.alpha = 0;
                  _this.wronggraphics10.inputEnabled = true;
                 _this.wronggraphics10.input.useHandCursor = true;
                  _this.wronggraphics10.events.onInputDown.add(_this.nothing,_this);
                  
                            _this.wronggraphics11 = _this.add.graphics(_this.world.centerX+614, _this.world.centerY+290);
                 _this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
                 _this.wronggraphics11.beginFill(0xFF700B, 1);
                 // _this.wronggraphics11.scale.setTo(1.5,1);
                  _this.wronggraphics11.lineTo(0, 200);
                 _this.wronggraphics11.lineTo(200, 200);
                 _this.wronggraphics11.lineTo(200, 0);
                 _this.wronggraphics11.lineTo(0, 0);
               _this.wronggraphics11.angle = 180;
                 _this.wronggraphics11.alpha = 0;
                  _this.wronggraphics11.inputEnabled = true;
                 _this.wronggraphics11.input.useHandCursor = true;
                  _this.wronggraphics11.events.onInputDown.add(_this.nothing,_this);
                  
                               _this.wronggraphics12= _this.add.graphics(_this.world.centerX+444, _this.world.centerY+15);
                 _this.wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
                 _this.wronggraphics12.beginFill(0xFF700B, 1);
                 // _this.wronggraphics12.scale.setTo(1.5,1);
                  _this.wronggraphics12.lineTo(0, 300);
                 _this.wronggraphics12.lineTo(300, 300);
                 _this.wronggraphics12.lineTo(300, 0);
                 _this.wronggraphics12.lineTo(0, 0);
               _this.wronggraphics12.angle = 180;
                 _this.wronggraphics12.alpha = 0;
                  _this.wronggraphics12.inputEnabled = true;
                 _this.wronggraphics12.input.useHandCursor = true;
                  _this.wronggraphics12.events.onInputDown.add(_this.nothing,_this);

              _this.flagGroup1 = _this.add.group();
                  _this.flagGroup1.add(_this.cloud);
                  
              _this.flagGroup1.add(_this.mainFlag);
              _this.flagGroup1.add(_this.opt1);
                  _this.flagGroup1.add(_this.opt4); 
              _this.flagGroup1.add(_this.opt2);
                  
              _this.flagGroup1.add(_this.opt3);
                 
                  
              _this.flagGroup1.add(_this.wronggraphics1);
                  _this.flagGroup1.add(_this.wronggraphics2);
                  _this.flagGroup1.add(_this.wronggraphics3);
                  _this.flagGroup1.add(_this.wronggraphics4);
                  _this.flagGroup1.add(_this.wronggraphics5);
                  _this.flagGroup1.add(_this.wronggraphics6);
                  _this.flagGroup1.add(_this.wronggraphics7);
                  _this.flagGroup1.add(_this.wronggraphics8);
                  _this.flagGroup1.add(_this.wronggraphics9);
                    _this.flagGroup1.add(_this.wronggraphics10);
                  _this.flagGroup1.add(_this.wronggraphics11);
                  _this.flagGroup1.add(_this.wronggraphics12);
                  
              _this.flagGroup1.x = 1000;
              _this.tween = _this.add.tween(_this.flagGroup1);
              _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
                // _this.tween.onComplete.add(_this.addQuestion, _this);

                 _this.tween.onComplete.add(function(){

              }, _this);    
       
    },
    
    nothing:function(){
       
    },
    
    gotoSecondQuestion:function(){
         
        _this.questionid = 2;
        _this.getVoice();
    //_this.no1++;
        
       
       
        
       _this.cloud = _this.add.sprite(100,50,'Level21_cloud');
       _this.cloud.scale.setTo(1,1); 
    _this.mainFlag = _this.add.sprite(210,280,'Level21_giraffe');
    _this.mainFlag.anchor.setTo(0.5);
    _this.mainFlag.name = "Level21_giraffe";
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
    _this.opt1 = _this.add.sprite(400,330, 'Level21_tree1');
    _this.opt1.anchor.setTo(0.5);

            _this.opt4 = _this.add.sprite(810,466, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.9,1.1);
        
        
    _this.opt2 = _this.add.sprite(790,380, 'Level21_elephant');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_elephant';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
            _this.opt3 = _this.add.sprite(175,485, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.6,1);
        
       _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-230, _this.world.centerY-30);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2,2);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 10;
       _this.wronggraphics1.alpha = 0;
         _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-225, _this.world.centerY-100);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.5,1.5);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 10;
       _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-255, _this.world.centerY-150);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1.5,1.5);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 60;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);


       _this.wronggraphics4 = _this.add.graphics(_this.world.centerX-240, _this.world.centerY-250);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(1,1);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 60;
       _this.wronggraphics4.alpha = 0;
         _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-360, _this.world.centerY-60);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(1,1);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 20;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
        
       _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+180, _this.world.centerY-50);
        _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics6.beginFill(0xFF700B, 1);
        _this.wronggraphics6.lineTo(0, 115);
        _this.wronggraphics6.lineTo(100, 80);
        _this.wronggraphics6.lineTo(0, 0);
       _this.wronggraphics6.angle = 50;
       _this.wronggraphics6.alpha =0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics7 = _this.add.graphics(_this.world.centerX+230, _this.world.centerY+100);
        _this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics7.beginFill(0xFF700B, 1);
        _this.wronggraphics7.lineTo(0, 115);
        _this.wronggraphics7.lineTo(100, 80);
        _this.wronggraphics7.lineTo(0, 0);
       _this.wronggraphics7.angle = 50;
      _this.wronggraphics7.alpha =0;
        _this.wronggraphics7.inputEnabled = true;
       _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics7.events.onInputDown.add(_this.nothing,_this);

       _this.wronggraphics8 = _this.add.graphics(_this.world.centerX+434, _this.world.centerY+400);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 200);
       _this.wronggraphics8.lineTo(200, 200);
       _this.wronggraphics8.lineTo(200, 0);
       _this.wronggraphics8.lineTo(0, 0);
       _this.wronggraphics8.angle = 180;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
            _this.wronggraphics9 = _this.add.graphics(_this.world.centerX+204, _this.world.centerY+290);
       _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics9.beginFill(0xFF700B, 1);
       // _this.wronggraphics9.scale.setTo(1.5,1);
        _this.wronggraphics9.lineTo(0, 200);
       _this.wronggraphics9.lineTo(200, 200);
       _this.wronggraphics9.lineTo(200, 0);
       _this.wronggraphics9.lineTo(0, 0);
       _this.wronggraphics9.angle = 180;
      _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);
        
            _this.wronggraphics10 = _this.add.graphics(_this.world.centerX+614, _this.world.centerY+190);
       _this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics10.beginFill(0xFF700B, 1);
       // _this.wronggraphics10.scale.setTo(1.5,1);
        _this.wronggraphics10.lineTo(0, 200);
       _this.wronggraphics10.lineTo(200, 200);
       _this.wronggraphics10.lineTo(200, 0);
       _this.wronggraphics10.lineTo(0, 0);
       _this.wronggraphics10.angle = 180;
       _this.wronggraphics10.alpha = 0;
        _this.wronggraphics10.inputEnabled = true;
       _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics10.events.onInputDown.add(_this.nothing,_this);
        
                  _this.wronggraphics11 = _this.add.graphics(_this.world.centerX+614, _this.world.centerY+290);
       _this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics11.beginFill(0xFF700B, 1);
       // _this.wronggraphics11.scale.setTo(1.5,1);
        _this.wronggraphics11.lineTo(0, 200);
       _this.wronggraphics11.lineTo(200, 200);
       _this.wronggraphics11.lineTo(200, 0);
       _this.wronggraphics11.lineTo(0, 0);
       _this.wronggraphics11.angle = 180;
       _this.wronggraphics11.alpha = 0;
        _this.wronggraphics11.inputEnabled = true;
       _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics11.events.onInputDown.add(_this.nothing,_this);
        
                     _this.wronggraphics12= _this.add.graphics(_this.world.centerX+444, _this.world.centerY+15);
       _this.wronggraphics12.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics12.beginFill(0xFF700B, 1);
       // _this.wronggraphics12.scale.setTo(1.5,1);
        _this.wronggraphics12.lineTo(0, 300);
       _this.wronggraphics12.lineTo(300, 300);
       _this.wronggraphics12.lineTo(300, 0);
       _this.wronggraphics12.lineTo(0, 0);
     _this.wronggraphics12.angle = 180;
       _this.wronggraphics12.alpha = 0;
        _this.wronggraphics12.inputEnabled = true;
       _this.wronggraphics12.input.useHandCursor = true;
        _this.wronggraphics12.events.onInputDown.add(_this.nothing,_this);


    _this.flagGroup1 = _this.add.group();
        _this.flagGroup1.add(_this.cloud);
        
    _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt4); 
    _this.flagGroup1.add(_this.opt2);
        
    _this.flagGroup1.add(_this.opt3);
        
       _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
        _this.flagGroup1.add(_this.wronggraphics5);
        _this.flagGroup1.add(_this.wronggraphics6);
        _this.flagGroup1.add(_this.wronggraphics7);
         _this.flagGroup1.add(_this.wronggraphics8);
        _this.flagGroup1.add(_this.wronggraphics9);
        _this.flagGroup1.add(_this.wronggraphics10);
         _this.flagGroup1.add(_this.wronggraphics11);
        _this.flagGroup1.add(_this.wronggraphics12);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);      
    },
    
    gotoThirdQuestion:function(){
        
        _this.questionid = 3;
        _this.getVoice();
        //_this.no1++;
       
       
       _this.cloud = _this.add.sprite(100,50,'Level21_cloud');
       _this.cloud.scale.setTo(1,1); 


    _this.mainFlag = _this.add.sprite(450,255, 'Level21_cat');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_cat';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
       
    _this.opt1 = _this.add.sprite(380,340, 'Level21_house1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.85,1);
      
    _this.opt2 = _this.add.sprite(450,255, 'Level21_cat');
    _this.opt2.anchor.setTo(0.5);
       
             _this.opt4 = _this.add.sprite(700,487, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(0.6,1);

       _this.opt3 = _this.add.sprite(690,430, 'Level21_dog1');
    _this.opt3.name = "Level21_dog"
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.inputEnabled = true;
    _this.opt3.input.useHandCursor = true;
       _this.opt3.events.onInputDown.add(_this.wrongAns,_this);
       


      /* _this.wronggraphics1= _this.add.graphics(_this.world.centerX-94, _this.world.centerY+155);
       _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics1.beginFill(0xFF700B, 1);
       // _this.wronggraphics1.scale.setTo(1.5,1);
        _this.wronggraphics1.lineTo(0, 300);
       _this.wronggraphics1.lineTo(300, 300);
       _this.wronggraphics1.lineTo(300, 0);
       _this.wronggraphics1.lineTo(0, 0);
     _this.wronggraphics1.angle = 180;
       _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
       
           _this.wronggraphics2= _this.add.graphics(_this.world.centerX-289, _this.world.centerY+46);
       _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics2.beginFill(0xFF700B, 1);
       // _this.wronggraphics2.scale.setTo(1.5,1);
        _this.wronggraphics2.lineTo(0, 300);
       _this.wronggraphics2.lineTo(300, 300);
       _this.wronggraphics2.lineTo(300, 0);
       _this.wronggraphics2.lineTo(0, 0);
     _this.wronggraphics2.angle = 180;
       _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
       
          _this.wronggraphics3= _this.add.graphics(_this.world.centerX+150, _this.world.centerY+46);
       _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics3.beginFill(0xFF700B, 1);
       // _this.wronggraphics3.scale.setTo(1.5,1);
        _this.wronggraphics3.lineTo(0, 300);
       _this.wronggraphics3.lineTo(300, 300);
       _this.wronggraphics3.lineTo(300, 0);
       _this.wronggraphics3.lineTo(0, 0);
     _this.wronggraphics3.angle = 180;
       _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
       
         _this.wronggraphics4= _this.add.graphics(_this.world.centerX+140, _this.world.centerY+346);
       _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics4.beginFill(0xFF700B, 1);
       // _this.wronggraphics4.scale.setTo(1.5,1);
        _this.wronggraphics4.lineTo(0, 300);
       _this.wronggraphics4.lineTo(300, 300);
       _this.wronggraphics4.lineTo(300, 0);
       _this.wronggraphics4.lineTo(0, 0);
     _this.wronggraphics4.angle = 180;
       _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
       
        _this.wronggraphics5= _this.add.graphics(_this.world.centerX+320, _this.world.centerY+96);
       _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics5.beginFill(0xFF700B, 1);
       // _this.wronggraphics5.scale.setTo(1.5,1);
        _this.wronggraphics5.lineTo(0, 300);
       _this.wronggraphics5.lineTo(300, 300);
       _this.wronggraphics5.lineTo(300, 0);
       _this.wronggraphics5.lineTo(0, 0);
     _this.wronggraphics5.angle = 180;
       _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
       
        _this.wronggraphics6= _this.add.graphics(_this.world.centerX+560, _this.world.centerY+396);
       _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics6.beginFill(0xFF700B, 1);
       // _this.wronggraphics6.scale.setTo(1.5,1);
        _this.wronggraphics6.lineTo(0, 300);
       _this.wronggraphics6.lineTo(300, 300);
       _this.wronggraphics6.lineTo(300, 0);
       _this.wronggraphics6.lineTo(0, 0);
     _this.wronggraphics6.angle = 180;
    _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);
       
              _this.wronggraphics7= _this.add.graphics(_this.world.centerX+400, _this.world.centerY+516);
       _this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics7.beginFill(0xFF700B, 1);
       // _this.wronggraphics7.scale.setTo(1.5,1);
        _this.wronggraphics7.lineTo(0, 300);
       _this.wronggraphics7.lineTo(300, 300);
       _this.wronggraphics7.lineTo(300, 0);
       _this.wronggraphics7.lineTo(0, 0);
     _this.wronggraphics7.angle = 180;
       _this.wronggraphics7.alpha = 0;
        _this.wronggraphics7.inputEnabled = true;
       _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics7.events.onInputDown.add(_this.nothing,_this);*/
       
    _this.flagGroup1 = _this.add.group();
       _this.flagGroup1.add(_this.cloud);
   
    _this.flagGroup1.add(_this.opt1);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt3);

    _this.opt2.visible = false;
     
       /*_this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
       _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
       _this.flagGroup1.add(_this.wronggraphics5);
            _this.flagGroup1.add(_this.wronggraphics6);
        _this.flagGroup1.add(_this.wronggraphics7);*/

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);     
    },
    
    gotoFourthQuestion:function(){
        
        _this.questionid = 4;
        _this.getVoice();
       //_this.no1++;
       
       
       _this.cloud = _this.add.sprite(100,50,'Level21_cloud');
       _this.cloud.scale.setTo(1,1); 
        _this.mainFlag = _this.add.sprite(450,255, 'Level21_cat');
        _this.mainFlag.name = "Level21_cat";
        _this.mainFlag.anchor.setTo(0.5);
           _this.mainFlag.inputEnabled = true;
        _this.mainFlag.input.useHandCursor = true;
           _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
           
        _this.opt1 = _this.add.sprite(380,340, 'Level21_house1');
        _this.opt1.anchor.setTo(0.5);
           _this.opt1.scale.setTo(0.85,1);
          
        _this.opt2 = _this.add.sprite(450,255, 'Level21_cat');
        _this.opt2.anchor.setTo(0.5);
            
                  _this.opt4 = _this.add.sprite(700,487, 'Level21_sh');
        _this.opt4.anchor.setTo(0.5);
            _this.opt4.scale.setTo(0.6,1);


            _this.opt3 = _this.add.sprite(690,430, 'Level21_dog1');
        _this.opt3.anchor.setTo(0.5);
           _this.opt3.inputEnabled = true;
        _this.opt3.input.useHandCursor = true;
           _this.opt3.name = 'Level21_dog';
       _this.opt3.events.onInputDown.add(_this.correctAns,_this);

      /*  _this.wronggraphics1= _this.add.graphics(_this.world.centerX-94, _this.world.centerY+155);
       _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics1.beginFill(0xFF700B, 1);
       // _this.wronggraphics1.scale.setTo(1.5,1);
        _this.wronggraphics1.lineTo(0, 300);
       _this.wronggraphics1.lineTo(300, 300);
       _this.wronggraphics1.lineTo(300, 0);
       _this.wronggraphics1.lineTo(0, 0);
        _this.wronggraphics1.angle = 180;
       _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
       
           _this.wronggraphics2= _this.add.graphics(_this.world.centerX-289, _this.world.centerY+46);
       _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics2.beginFill(0xFF700B, 1);
       // _this.wronggraphics2.scale.setTo(1.5,1);
        _this.wronggraphics2.lineTo(0, 300);
       _this.wronggraphics2.lineTo(300, 300);
       _this.wronggraphics2.lineTo(300, 0);
       _this.wronggraphics2.lineTo(0, 0);
     _this.wronggraphics2.angle = 180;
       _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
       
          _this.wronggraphics3= _this.add.graphics(_this.world.centerX+150, _this.world.centerY+46);
       _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics3.beginFill(0xFF700B, 1);
       // _this.wronggraphics3.scale.setTo(1.5,1);
        _this.wronggraphics3.lineTo(0, 300);
       _this.wronggraphics3.lineTo(300, 300);
       _this.wronggraphics3.lineTo(300, 0);
       _this.wronggraphics3.lineTo(0, 0);
     _this.wronggraphics3.angle = 180;
       _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
       
         _this.wronggraphics4= _this.add.graphics(_this.world.centerX+140, _this.world.centerY+346);
       _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics4.beginFill(0xFF700B, 1);
       // _this.wronggraphics4.scale.setTo(1.5,1);
        _this.wronggraphics4.lineTo(0, 300);
       _this.wronggraphics4.lineTo(300, 300);
       _this.wronggraphics4.lineTo(300, 0);
       _this.wronggraphics4.lineTo(0, 0);
     _this.wronggraphics4.angle = 180;
       _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
       
        _this.wronggraphics5= _this.add.graphics(_this.world.centerX+320, _this.world.centerY+96);
       _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics5.beginFill(0xFF700B, 1);
       // _this.wronggraphics5.scale.setTo(1.5,1);
        _this.wronggraphics5.lineTo(0, 300);
       _this.wronggraphics5.lineTo(300, 300);
       _this.wronggraphics5.lineTo(300, 0);
       _this.wronggraphics5.lineTo(0, 0);
     _this.wronggraphics5.angle = 180;
       _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
       
        _this.wronggraphics6= _this.add.graphics(_this.world.centerX+560, _this.world.centerY+396);
       _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics6.beginFill(0xFF700B, 1);
       // _this.wronggraphics6.scale.setTo(1.5,1);
        _this.wronggraphics6.lineTo(0, 300);
       _this.wronggraphics6.lineTo(300, 300);
       _this.wronggraphics6.lineTo(300, 0);
       _this.wronggraphics6.lineTo(0, 0);
       _this.wronggraphics6.angle = 180;
       _this.wronggraphics6.alpha = 0;
           _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);
       
              _this.wronggraphics7= _this.add.graphics(_this.world.centerX+400, _this.world.centerY+516);
       _this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics7.beginFill(0xFF700B, 1);
       // _this.wronggraphics7.scale.setTo(1.5,1);
        _this.wronggraphics7.lineTo(0, 300);
       _this.wronggraphics7.lineTo(300, 300);
       _this.wronggraphics7.lineTo(300, 0);
       _this.wronggraphics7.lineTo(0, 0);
       _this.wronggraphics7.angle = 180;
       _this.wronggraphics7.alpha = 0;
        _this.wronggraphics7.inputEnabled = true;
       _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics7.events.onInputDown.add(_this.nothing,_this);*/


       

        _this.flagGroup1 = _this.add.group();
            _this.flagGroup1.add(_this.cloud);
        
        _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.mainFlag);
        //_this.flagGroup1.add(_this.opt2);
            _this.flagGroup1.add(_this.opt4);
        _this.flagGroup1.add(_this.opt3);
        _this.opt2.visible = false;
        /*
              _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
       _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
       _this.flagGroup1.add(_this.wronggraphics5);
            _this.flagGroup1.add(_this.wronggraphics6);
        _this.flagGroup1.add(_this.wronggraphics7);*/

        _this.flagGroup1.x = 1000;
        _this.tween = _this.add.tween(_this.flagGroup1);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

        }, _this);    
    },

    gotoFifthQuestion:function(){
         
        _this.questionid = 7;
        _this.getVoice();
         //_this.no1++;
    
    _this.mainFlag = _this.add.sprite(320,105,'Level21_bluemug');
    _this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.4);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_bluemug';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
                _this.opt4 = _this.add.sprite(310,473, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1.1,1.3);
       
    _this.opt1 = _this.add.sprite(310,302, 'Level21_ladder1');
    _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.0578);
      
    _this.opt2 = _this.add.sprite(600,380, 'Level21_chair1');
    _this.opt2.anchor.setTo(0.5);
        
           opt5= _this.add.sprite(610,494, 'Level21_sh');
    opt5.anchor.setTo(0.5);
        opt5.scale.setTo(0.4,1);

       _this.opt3 = _this.add.sprite(603,457, 'Level21_pinkpot');
    _this.opt3.name = "Level21_pinkpot";
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.inputEnabled = true;
    _this.opt3.input.useHandCursor = true;
       
       _this.opt3.events.onInputDown.add(_this.wrongAns,_this);


       _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-90, _this.world.centerY-135);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2,2);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 90;
     _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
            _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+140, _this.world.centerY+250);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1,1);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 240;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+100, _this.world.centerY+250);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1,1);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle =170;
     _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+159, _this.world.centerY+145);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(1,1);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle =140;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics5= _this.add.graphics(_this.world.centerX+220, _this.world.centerY+130);
       _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics5.beginFill(0xFF700B, 1);
       // _this.wronggraphics5.scale.setTo(1.5,1);
        _this.wronggraphics5.lineTo(0, 350);
       _this.wronggraphics5.lineTo(350, 350);
       _this.wronggraphics5.lineTo(350, 0);
       _this.wronggraphics5.lineTo(0, 0);
     _this.wronggraphics5.angle = 180;
       _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
                _this.wronggraphics6= _this.add.graphics(_this.world.centerX-190, _this.world.centerY+20);
       _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics6.beginFill(0xFF700B, 1);
       // _this.wronggraphics6.scale.setTo(1.5,1);
        _this.wronggraphics6.lineTo(0, 350);
       _this.wronggraphics6.lineTo(350, 350);
       _this.wronggraphics6.lineTo(350, 0);
       _this.wronggraphics6.lineTo(0, 0);
     _this.wronggraphics6.angle = 180;
       _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);
        
                    _this.wronggraphics7= _this.add.graphics(_this.world.centerX-130, _this.world.centerY-200);
       _this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics7.beginFill(0xFF700B, 1);
       // _this.wronggraphics7.scale.setTo(1.5,1);
        _this.wronggraphics7.lineTo(0, 100);
       _this.wronggraphics7.lineTo(100, 100);
       _this.wronggraphics7.lineTo(100, 0);
       _this.wronggraphics7.lineTo(0, 0);
     _this.wronggraphics7.angle = 180;
       _this.wronggraphics7.alpha = 0;
        _this.wronggraphics7.inputEnabled = true;
       _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics7.events.onInputDown.add(_this.nothing,_this);
             
         _this.wronggraphics8= _this.add.graphics(_this.world.centerX+290, _this.world.centerY+580);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 180;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();
       
    _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(opt5);
    _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
         _this.flagGroup1.add(_this.wronggraphics5);
         _this.flagGroup1.add(_this.wronggraphics6);
          _this.flagGroup1.add(_this.wronggraphics7);
         _this.flagGroup1.add(_this.wronggraphics8);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
  
     gotoSixthQuestion:function(){
         
        _this.questionid = 5;
         _this.getVoice();
            //_this.no1++;
   
        _this.mainFlag = _this.add.sprite(320,105,'Level21_bluemug');
    _this.mainFlag.name = "Level21_bluemug";
    _this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.4);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
                _this.opt4 = _this.add.sprite(310,473, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
        _this.opt4.scale.setTo(1.1,1.3);
       
    _this.opt1 = _this.add.sprite(310,302, 'Level21_ladder1');
    _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.0578);
      
    _this.opt2 = _this.add.sprite(600,380, 'Level21_chair1');
    _this.opt2.anchor.setTo(0.5);
        
           opt5= _this.add.sprite(610,494, 'Level21_sh');
    opt5.anchor.setTo(0.5);
        opt5.scale.setTo(0.4,1);

       _this.opt3 = _this.add.sprite(603,457, 'Level21_pinkpot');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.inputEnabled = true;
    _this.opt3.input.useHandCursor = true;
       _this.opt3.name = 'Level21_pinkpot';
       _this.opt3.events.onInputDown.add(_this.correctAns,_this);
        
     _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-90, _this.world.centerY-135);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2,2);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 90;
     _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
            _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+140, _this.world.centerY+250);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1,1);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 240;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+100, _this.world.centerY+250);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1,1);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle =170;
     _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+159, _this.world.centerY+145);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(1,1);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle =140;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics5= _this.add.graphics(_this.world.centerX+220, _this.world.centerY+130);
       _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics5.beginFill(0xFF700B, 1);
       // _this.wronggraphics5.scale.setTo(1.5,1);
        _this.wronggraphics5.lineTo(0, 350);
       _this.wronggraphics5.lineTo(350, 350);
       _this.wronggraphics5.lineTo(350, 0);
       _this.wronggraphics5.lineTo(0, 0);
     _this.wronggraphics5.angle = 180;
       _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
                _this.wronggraphics6= _this.add.graphics(_this.world.centerX-190, _this.world.centerY+20);
       _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics6.beginFill(0xFF700B, 1);
       // _this.wronggraphics6.scale.setTo(1.5,1);
        _this.wronggraphics6.lineTo(0, 350);
       _this.wronggraphics6.lineTo(350, 350);
       _this.wronggraphics6.lineTo(350, 0);
       _this.wronggraphics6.lineTo(0, 0);
     _this.wronggraphics6.angle = 180;
       _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);
        
                    _this.wronggraphics7= _this.add.graphics(_this.world.centerX-130, _this.world.centerY-200);
       _this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics7.beginFill(0xFF700B, 1);
       // _this.wronggraphics7.scale.setTo(1.5,1);
        _this.wronggraphics7.lineTo(0, 100);
       _this.wronggraphics7.lineTo(100, 100);
       _this.wronggraphics7.lineTo(100, 0);
       _this.wronggraphics7.lineTo(0, 0);
     _this.wronggraphics7.angle = 180;
       _this.wronggraphics7.alpha = 0;
        _this.wronggraphics7.inputEnabled = true;
       _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics7.events.onInputDown.add(_this.nothing,_this);
             
         _this.wronggraphics8= _this.add.graphics(_this.world.centerX+290, _this.world.centerY+580);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 180;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();

        _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(opt5);
    _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
         _this.flagGroup1.add(_this.wronggraphics5);
         _this.flagGroup1.add(_this.wronggraphics6);
          _this.flagGroup1.add(_this.wronggraphics7);
         _this.flagGroup1.add(_this.wronggraphics8);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
    
    gotoSeventhQuestion:function(){
        
        _this.questionid = 8;

     _this.getVoice();
       //_this.no1++;
        
        
       
    _this.mainFlag = _this.add.sprite(220,130,'Level21_clock1');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_clock';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
       
    _this.opt1 = _this.add.sprite(610,380, 'Level21_sofa1');
    _this.opt1.anchor.setTo(0.5);

             _this.opt3= _this.add.sprite(550,475, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.5,1.9);


       _this.opt2 = _this.add.sprite(540,465, 'Level21_book1');
    _this.opt2.name = "Level21_book";
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(0.5,0.5);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

   _this.wronggraphics8= _this.add.graphics(_this.world.centerX+290, _this.world.centerY+560);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 180;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
        
    _this.flagGroup1 = _this.add.group();

    _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt2);
    
        _this.flagGroup1.add(_this.wronggraphics8);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },

    
    gotoEighthQuestion:function(){
        
        _this.questionid = 9;

     _this.getVoice();
       //_this.no1++;
        
    _this.mainFlag = _this.add.sprite(320,130,'Level21_clock1');
    _this.mainFlag.name = "Level21_clock";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
    _this.opt1 = _this.add.sprite(610,380, 'Level21_sofa1');
    _this.opt1.anchor.setTo(0.5);

         _this.opt3= _this.add.sprite(550,547, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(0.5,1.9);


       _this.opt2 = _this.add.sprite(540,465, 'Level21_book1');
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(0.5,0.5);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_book';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);

        _this.wronggraphics8= _this.add.graphics(_this.world.centerX+290, _this.world.centerY+560);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 180;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        

    _this.flagGroup1 = _this.add.group();

    _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt2);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
 
    
    
    gotoNinethQuestion:function(){
        
        _this.questionid = 11;

      _this.getVoice();
       //_this.no1++;
        
        
        
      _this.cloud2 = _this.add.sprite(100,70,'Level21_cloud2');
      _this.cloud2.scale.setTo(1,1); 
    _this.mainFlag = _this.add.sprite(280,140,'Level21_bee1');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_bee';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
          _this.opt2= _this.add.sprite(560,490, 'Level21_sh');
    _this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,3.6);
       
       _this.opt1 = _this.add.sprite(540,350, 'Level21_elephant1');
    _this.opt1.name = "Level21_elephant";
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.75,1);
       _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       
       _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt3= _this.add.sprite(560,490, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,3.6);
        _this.opt3.visible=false;
        
        _this.wronggraphics8= _this.add.graphics(_this.world.centerX+250, _this.world.centerY+560);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 180;
      _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics9= _this.add.graphics(_this.world.centerX-40, _this.world.centerY+420);
       _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics9.beginFill(0xFF700B, 1);
       // _this.wronggraphics9.scale.setTo(1.5,1);
        _this.wronggraphics9.lineTo(0, 350);
       _this.wronggraphics9.lineTo(350, 350);
       _this.wronggraphics9.lineTo(350, 0);
       _this.wronggraphics9.lineTo(0, 0);
     _this.wronggraphics9.angle = 180;
       _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);

          _this.wronggraphics10= _this.add.graphics(_this.world.centerX+400, _this.world.centerY-40);
       _this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics10.beginFill(0xFF700B, 1);
       // _this.wronggraphics10.scale.setTo(1.5,1);
        _this.wronggraphics10.lineTo(0, 350);
       _this.wronggraphics10.lineTo(350, 350);
       _this.wronggraphics10.lineTo(350, 0);
       _this.wronggraphics10.lineTo(0, 0);
     _this.wronggraphics10.angle = 180;
       _this.wronggraphics10.alpha = 0;
        _this.wronggraphics10.inputEnabled = true;
       _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics10.events.onInputDown.add(_this.nothing,_this);
        
                 _this.wronggraphics11= _this.add.graphics(_this.world.centerX+550, _this.world.centerY+230);
       _this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics11.beginFill(0xFF700B, 1);
       // _this.wronggraphics11.scale.setTo(1.5,1);
        _this.wronggraphics11.lineTo(0, 350);
       _this.wronggraphics11.lineTo(350, 350);
       _this.wronggraphics11.lineTo(350, 0);
       _this.wronggraphics11.lineTo(0, 0);
     _this.wronggraphics11.angle = 180;
       _this.wronggraphics11.alpha = 0;
        _this.wronggraphics11.inputEnabled = true;
       _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics11.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();
        _this.flagGroup1.add(_this.cloud2);
    _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
    
       _this.flagGroup1.add(_this.wronggraphics8);
        _this.flagGroup1.add(_this.wronggraphics9);
        _this.flagGroup1.add(_this.wronggraphics10);
        _this.flagGroup1.add(_this.wronggraphics11);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
    
       
    gotoTenthQuestion:function(){
         
        _this.questionid = 10;

    _this.getVoice();
       //_this.no1++;
        
        
        
    _this.cloud2 = _this.add.sprite(100,70,'Level21_cloud2');
      _this.cloud2.scale.setTo(1,1); 
    _this.mainFlag = _this.add.sprite(280,140,'Level21_bee1');
    _this.mainFlag.name = "Level21_bee";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
               _this.opt2= _this.add.sprite(560,490, 'Level21_sh');
    _this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,3.6);
       
       
       _this.opt1 = _this.add.sprite(540,350, 'Level21_elephant1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.75,1);
       _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       _this.opt1.name = 'Level21_elephant';
       _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt3= _this.add.sprite(560,490, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
        _this.opt3.scale.setTo(1,3.6);
        _this.opt3.visible=false;

         
        _this.wronggraphics8= _this.add.graphics(_this.world.centerX+250, _this.world.centerY+560);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 180;
      _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics9= _this.add.graphics(_this.world.centerX-40, _this.world.centerY+420);
       _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics9.beginFill(0xFF700B, 1);
       // _this.wronggraphics9.scale.setTo(1.5,1);
        _this.wronggraphics9.lineTo(0, 350);
       _this.wronggraphics9.lineTo(350, 350);
       _this.wronggraphics9.lineTo(350, 0);
       _this.wronggraphics9.lineTo(0, 0);
     _this.wronggraphics9.angle = 180;
       _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);

          _this.wronggraphics10= _this.add.graphics(_this.world.centerX+400, _this.world.centerY-40);
       _this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics10.beginFill(0xFF700B, 1);
       // _this.wronggraphics10.scale.setTo(1.5,1);
        _this.wronggraphics10.lineTo(0, 350);
       _this.wronggraphics10.lineTo(350, 350);
       _this.wronggraphics10.lineTo(350, 0);
       _this.wronggraphics10.lineTo(0, 0);
     _this.wronggraphics10.angle = 180;
       _this.wronggraphics10.alpha = 0;
        _this.wronggraphics10.inputEnabled = true;
       _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics10.events.onInputDown.add(_this.nothing,_this);
        
                 _this.wronggraphics11= _this.add.graphics(_this.world.centerX+550, _this.world.centerY+230);
       _this.wronggraphics11.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics11.beginFill(0xFF700B, 1);
       // _this.wronggraphics11.scale.setTo(1.5,1);
        _this.wronggraphics11.lineTo(0, 350);
       _this.wronggraphics11.lineTo(350, 350);
       _this.wronggraphics11.lineTo(350, 0);
       _this.wronggraphics11.lineTo(0, 0);
     _this.wronggraphics11.angle = 180;
       _this.wronggraphics11.alpha = 0;
        _this.wronggraphics11.inputEnabled = true;
       _this.wronggraphics11.input.useHandCursor = true;
        _this.wronggraphics11.events.onInputDown.add(_this.nothing,_this);


    _this.flagGroup1 = _this.add.group();
        _this.flagGroup1.add(_this.cloud2);
    _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
    
       _this.flagGroup1.add(_this.wronggraphics8);
        _this.flagGroup1.add(_this.wronggraphics9);
        _this.flagGroup1.add(_this.wronggraphics10);
        _this.flagGroup1.add(_this.wronggraphics11);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
    
    gotoEleventhQuestion:function(){
         
        _this.questionid = 12;

   _this.getVoice();
       //_this.no1++;

         
           
        _this.opt2= _this.add.sprite(320,490, 'Level21_sh');
    _this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.3,3);
           
    _this.mainFlag = _this.add.sprite(320,390,'Level21_papaya1');
    _this.mainFlag.anchor.setTo(0.5);
           _this.mainFlag.scale.setTo(0.8,1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_papaya';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
           
       _this.opt3= _this.add.sprite(700,475, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1,2.4);
       
       _this.opt1 = _this.add.sprite(700,420, 'Level21_banana1');
    _this.opt1.anchor.name = "Level21_banana";
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.75,1);
      _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       
       _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

               _this.wronggraphics8= _this.add.graphics(_this.world.centerX-100, _this.world.centerY+330);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 130;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
           
        _this.wronggraphics9= _this.add.graphics(_this.world.centerX+20, _this.world.centerY+120);
       _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics9.beginFill(0xFF700B, 1);
       // _this.wronggraphics9.scale.setTo(1.5,1);
        _this.wronggraphics9.lineTo(0, 270);
       _this.wronggraphics9.lineTo(270, 270);
       _this.wronggraphics9.lineTo(270, 0);
       _this.wronggraphics9.lineTo(0, 0);
     _this.wronggraphics9.angle = 60;
     _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);
           
    _this.flagGroup1 = _this.add.group();

            _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.mainFlag);
           _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.wronggraphics8);
    _this.flagGroup1.add(_this.wronggraphics9);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
      
      gotoTwevelvethQuestion:function(){
           
        _this.questionid = 13;

    _this.getVoice();
       //_this.no1++;
         
        
        _this.opt2= _this.add.sprite(320,490, 'Level21_sh');
    _this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1.3,3);
           
    _this.mainFlag = _this.add.sprite(320,390,'Level21_papaya1');
    _this.mainFlag.name = "Level21_papaya";
    _this.mainFlag.anchor.setTo(0.5);
           _this.mainFlag.scale.setTo(0.8,1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
       _this.opt3= _this.add.sprite(700,475, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1,2.4);
       
       _this.opt1 = _this.add.sprite(700,420, 'Level21_banana1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.75,1);
       _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       _this.opt1.name = 'Level21_banana';
       _this.opt1.events.onInputDown.add(_this.correctAns,_this);

                 _this.wronggraphics8= _this.add.graphics(_this.world.centerX-100, _this.world.centerY+330);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 130;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
           
        _this.wronggraphics9= _this.add.graphics(_this.world.centerX+20, _this.world.centerY+120);
       _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics9.beginFill(0xFF700B, 1);
       // _this.wronggraphics9.scale.setTo(1.5,1);
        _this.wronggraphics9.lineTo(0, 270);
       _this.wronggraphics9.lineTo(270, 270);
       _this.wronggraphics9.lineTo(270, 0);
       _this.wronggraphics9.lineTo(0, 0);
     _this.wronggraphics9.angle = 60;
     _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();

    
            _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.mainFlag);
           _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.wronggraphics8);
    _this.flagGroup1.add(_this.wronggraphics9);

    

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
    
    gotoThirteenthQuestion:function(){
        
        
        _this.questionid = 13;

    _this.getVoice();
       //_this.no1++;
       
       
     
    _this.mainFlag = _this.add.sprite(320,380,'Level21_key1');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_smallkey';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
       
       _this.opt1 = _this.add.sprite(700,320, 'Level21_key2');
    _this.opt1.name = "Level21_bigkey";
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.75,1);
       _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       
       _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.opt2= _this.add.sprite(700,340, 'Level21_key2');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.75,1);
       _this.opt2.visible=false;
       
       _this.opt3= _this.add.sprite(700,340, 'Level21_key2');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.75,1);
       _this.opt3.visible=false;
       
    _this.flagGroup1 = _this.add.group();

    _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt2);
       _this.flagGroup1.add(_this.opt3);
    

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
    
      gotoFourteenthQuestion:function(){
          
        _this.questionid = 12;
        _this.getVoice();
    
       //_this.no1++;
         
         
       
    _this.mainFlag = _this.add.sprite(320,380,'Level21_key1');
    _this.mainFlag.name = "Level21_smallkey";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
       _this.opt1 = _this.add.sprite(700,320, 'Level21_key2');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.75,1);
       _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       _this.opt1.name = 'Level21_bigkey';
       _this.opt1.events.onInputDown.add(_this.correctAns,_this);

          _this.opt2= _this.add.sprite(700,340, 'Level21_key2');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.75,1);
       _this.opt2.visible=false;
       
       _this.opt3= _this.add.sprite(700,340, 'Level21_key2');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.75,1);
       _this.opt3.visible=false;
       
    _this.flagGroup1 = _this.add.group();

    _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt2);
       _this.flagGroup1.add(_this.opt3);
         
    
    

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
    
    gotoFifteenthQuestion:function(){
         
        _this.questionid = 10;
          _this.getVoice();    
       //_this.no1++;

        
        _this.opt2= _this.add.sprite(350,485, 'Level21_sh');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1.5,2.4);
        
    _this.mainFlag = _this.add.sprite(320,340,'Level21_dog2');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_dog';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
          _this.opt3= _this.add.sprite(800,465, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1,2);
        
       
       _this.opt1 = _this.add.sprite(800,420, 'Level21_cat2');
    _this.opt1.name = "Level21_cat";
    _this.opt1.anchor.setTo(0.5);
       //_this.opt1.scale.setTo(1,1);
       _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       
       _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

        _this.wronggraphics8= _this.add.graphics(_this.world.centerX-270, _this.world.centerY+460);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 180;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
          _this.wronggraphics9= _this.add.graphics(_this.world.centerX-100, _this.world.centerY+30);
       _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics9.beginFill(0xFF700B, 1);
       // _this.wronggraphics9.scale.setTo(1.5,1);
        _this.wronggraphics9.lineTo(0, 270);
       _this.wronggraphics9.lineTo(270, 270);
       _this.wronggraphics9.lineTo(270, 0);
       _this.wronggraphics9.lineTo(0, 0);
     _this.wronggraphics9.angle = 180;
      _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);

                    _this.wronggraphics10= _this.add.graphics(_this.world.centerX-10, _this.world.centerY+40);
       _this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics10.beginFill(0xFF700B, 1);
       // _this.wronggraphics10.scale.setTo(1.5,1);
        _this.wronggraphics10.lineTo(0, 200);
       _this.wronggraphics10.lineTo(200, 200);
       _this.wronggraphics10.lineTo(200, 0);
       _this.wronggraphics10.lineTo(0, 0);
     _this.wronggraphics10.angle = 20;
       _this.wronggraphics10.alpha = 0;
        _this.wronggraphics10.inputEnabled = true;
       _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics10.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();

        _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
        
        _this.flagGroup1.add(_this.wronggraphics8);     
    _this.flagGroup1.add(_this.wronggraphics9);  
           _this.flagGroup1.add(_this.wronggraphics10);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
    
    
      gotoSixteenthQuestion:function(){
          
        _this.questionid = 11;
       _this.getVoice();
    
       //_this.no1++;
         
          _this.opt2= _this.add.sprite(350,485, 'Level21_sh');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1.5,2.4);

    _this.mainFlag = _this.add.sprite(320,340,'Level21_dog2');
    _this.mainFlag.name = "Level21_dog";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         
       _this.opt3= _this.add.sprite(800,465, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1,2);
       
        _this.opt1 = _this.add.sprite(800,420, 'Level21_cat2');
    _this.opt1.anchor.setTo(0.5);
       //_this.opt1.scale.setTo(0.7,0.7);
      _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       _this.opt1.name = 'Level21_cat';
       _this.opt1.events.onInputDown.add(_this.correctAns,_this);

         _this.wronggraphics8= _this.add.graphics(_this.world.centerX-270, _this.world.centerY+460);
       _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics8.beginFill(0xFF700B, 1);
       // _this.wronggraphics8.scale.setTo(1.5,1);
        _this.wronggraphics8.lineTo(0, 350);
       _this.wronggraphics8.lineTo(350, 350);
       _this.wronggraphics8.lineTo(350, 0);
       _this.wronggraphics8.lineTo(0, 0);
     _this.wronggraphics8.angle = 180;
       _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
          _this.wronggraphics9= _this.add.graphics(_this.world.centerX-100, _this.world.centerY+30);
       _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics9.beginFill(0xFF700B, 1);
       // _this.wronggraphics9.scale.setTo(1.5,1);
        _this.wronggraphics9.lineTo(0, 270);
       _this.wronggraphics9.lineTo(270, 270);
       _this.wronggraphics9.lineTo(270, 0);
       _this.wronggraphics9.lineTo(0, 0);
     _this.wronggraphics9.angle = 180;
      _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);

                    _this.wronggraphics10= _this.add.graphics(_this.world.centerX-10, _this.world.centerY+40);
       _this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics10.beginFill(0xFF700B, 1);
       // _this.wronggraphics10.scale.setTo(1.5,1);
        _this.wronggraphics10.lineTo(0, 200);
       _this.wronggraphics10.lineTo(200, 200);
       _this.wronggraphics10.lineTo(200, 0);
       _this.wronggraphics10.lineTo(0, 0);
     _this.wronggraphics10.angle = 20;
       _this.wronggraphics10.alpha = 0;
        _this.wronggraphics10.inputEnabled = true;
       _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics10.events.onInputDown.add(_this.nothing,_this);


         
    _this.flagGroup1 = _this.add.group();

        _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
         
               
        _this.flagGroup1.add(_this.wronggraphics8);     
    _this.flagGroup1.add(_this.wronggraphics9);  
           _this.flagGroup1.add(_this.wronggraphics10);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this);
    },
    
    gotoSeventeenthQuestion:function(){
         
        _this.questionid = 14;
         _this.getVoice();
         //_this.no1++;
       
       
       
   
       
    _this.opt1 = _this.add.sprite(500,370, 'Level21_sofa2');
    _this.opt1.anchor.setTo(0.5);
       
        _this.mainFlag = _this.add.sprite(390,239,'Level21_dog3');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_dog';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);

        _this.opt3= _this.add.sprite(390,319, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.8,1.2);
      
        _this.opt4= _this.add.sprite(610,450, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.7,1);
       
       _this.opt2 = _this.add.sprite(612,435, 'Level21_snake1');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.inputEnabled = true;
    _this.opt2.name = "Level21_snake";
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
       
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+45);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3,3);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 90;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        

  
           _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-50, _this.world.centerY+45);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(3,3);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 90;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
       
       _this.wronggraphics10= _this.add.graphics(_this.world.centerX+240, _this.world.centerY+130);
       _this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics10.beginFill(0xFF700B, 1);
       // _this.wronggraphics10.scale.setTo(1.5,1);
        _this.wronggraphics10.lineTo(0, 260);
       _this.wronggraphics10.lineTo(260, 260);
       _this.wronggraphics10.lineTo(260, 0);
       _this.wronggraphics10.lineTo(0, 0);
     _this.wronggraphics10.angle = 180;
      _this.wronggraphics10.alpha = 0;
        _this.wronggraphics10.inputEnabled = true;
       _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics10.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();

      
   
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);
       _this.flagGroup1.add(_this.wronggraphics2);
       _this.flagGroup1.add(_this.wronggraphics10);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
       gotoEighteenthQuestion:function(){
            
        _this.questionid = 15;
         _this.getVoice();
         //_this.no1++;
      
       
    _this.opt1 = _this.add.sprite(500,370, 'Level21_sofa2');
    _this.opt1.anchor.setTo(0.5);
       
        _this.mainFlag = _this.add.sprite(390,239,'Level21_dog3');
    _this.mainFlag.name = "Level21_dog";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
     
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
      
        _this.opt3= _this.add.sprite(390,319, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.8,1.2);
      
        _this.opt4= _this.add.sprite(610,450, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.7,1);
       
       _this.opt2 = _this.add.sprite(612,435, 'Level21_snake1');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_snake';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
          
          
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+45);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3,3);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 90;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        

  
           _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-50, _this.world.centerY+45);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(3,3);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 90;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
       
       _this.wronggraphics10= _this.add.graphics(_this.world.centerX+240, _this.world.centerY+130);
       _this.wronggraphics10.lineStyle(1, 0xFFFFFF, 0.8);
       _this.wronggraphics10.beginFill(0xFF700B, 1);
       // _this.wronggraphics10.scale.setTo(1.5,1);
        _this.wronggraphics10.lineTo(0, 260);
       _this.wronggraphics10.lineTo(260, 260);
       _this.wronggraphics10.lineTo(260, 0);
       _this.wronggraphics10.lineTo(0, 0);
     _this.wronggraphics10.angle = 180;
      _this.wronggraphics10.alpha = 0;
        _this.wronggraphics10.inputEnabled = true;
       _this.wronggraphics10.input.useHandCursor = true;
        _this.wronggraphics10.events.onInputDown.add(_this.nothing,_this);

        
    _this.flagGroup1 = _this.add.group();

    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);
       _this.flagGroup1.add(_this.wronggraphics2);
       _this.flagGroup1.add(_this.wronggraphics10);


    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
      
    gotoNineteenthQuestion:function(){
        
        _this.questionid = 16;
        _this.getVoice();
         //_this.no1++;
       
  
       
    _this.opt1 = _this.add.sprite(490,410, 'Level21_table1');
    _this.opt1.anchor.setTo(0.5);
       
            _this.opt3= _this.add.sprite(450,313, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.8,1);

       _this.mainFlag = _this.add.sprite(440,235,'Level21_cat3');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_cat';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
       
       _this.opt4= _this.add.sprite(470,313, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.8,1);
       
          opt5= _this.add.sprite(520,466, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.7,2.5);
      
      
       _this.opt2 = _this.add.sprite(520,455, 'Level21_book2');
    _this.opt2.name = "Level21_book";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.8,1);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
       


    _this.flagGroup1 = _this.add.group();

    
    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt4);
       _this.flagGroup1.add(opt5);
    _this.flagGroup1.add(_this.opt2);
    

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoTwentythQuestion:function(){
         
        _this.questionid = 17;
         _this.getVoice();
         //_this.no1++;
        
       
        
      
    _this.opt1 = _this.add.sprite(490,410, 'Level21_table1');
    _this.opt1.anchor.setTo(0.5);
       
            _this.opt3= _this.add.sprite(450,313, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.8,1);

       _this.mainFlag = _this.add.sprite(440,235,'Level21_cat3');
    _this.mainFlag.name = "Level21_cat";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
      
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
    _this.opt4= _this.add.sprite(470,313, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.8,1);
       
          opt5= _this.add.sprite(520,466, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.7,2.5);
      
      
       _this.opt2 = _this.add.sprite(520,455, 'Level21_book2');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.8,1);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'Level21_book';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);


    _this.flagGroup1 = _this.add.group();

    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt4);
       _this.flagGroup1.add(opt5);
    _this.flagGroup1.add(_this.opt2);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
       gotoTwentyonethQuestion:function(){
            
        _this.questionid = 18;
         _this.getVoice();
         //_this.no1++;
      

          
    _this.opt1 = _this.add.sprite(500,320, 'Level21_sofa3');
    _this.opt1.anchor.setTo(0.5);

          _this.opt3= _this.add.sprite(380,326, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.7,1);
          
       _this.opt4= _this.add.sprite(380,326, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.7,1);
          
             opt5= _this.add.sprite(530,456, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.7,1);
          
       _this.mainFlag = _this.add.sprite(380,290,'Level21_scooter1');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_scooter';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
      
       _this.opt2 = _this.add.sprite(530,435, 'Level21_car1');
    _this.opt2.name = "Level21_car";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.9,0.9);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

      _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-20, _this.world.centerY+55);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3,1.9);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 90;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
          
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-20, _this.world.centerY+55);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.4,1.4);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 200;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
          
       _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-100, _this.world.centerY-85);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1.4,1.4);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 80;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
          
       _this.wronggraphics4 = _this.add.graphics(_this.world.centerX-100, _this.world.centerY-175);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(1.4,1.4);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 20;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
          
        _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-70, _this.world.centerY+140);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(3,1.9);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 270;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
          
    _this.flagGroup1 = _this.add.group();

    
    _this.flagGroup1.add(_this.opt1);
          _this.flagGroup1.add(_this.opt3);
              _this.flagGroup1.add(_this.opt4);
            _this.flagGroup1.add(opt5);
       _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);
       _this.flagGroup1.add(_this.wronggraphics2);
       _this.flagGroup1.add(_this.wronggraphics3);
       _this.flagGroup1.add(_this.wronggraphics4);
       _this.flagGroup1.add(_this.wronggraphics5);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoTwentytwothQuestion:function(){
        
        _this.questionid = 19;
          _this.getVoice();
    //_this.no1++;
      
           
    _this.opt1 = _this.add.sprite(500,320, 'Level21_sofa3');
    _this.opt1.anchor.setTo(0.5);

          _this.opt3= _this.add.sprite(380,326, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.7,1);
          
       _this.opt4= _this.add.sprite(380,326, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.7,1);
          
             opt5= _this.add.sprite(530,456, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.7,1);
          
       _this.mainFlag = _this.add.sprite(380,290,'Level21_scooter1');
    _this.mainFlag.name = "Level21_scooter";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;

       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
      
      _this.opt2 = _this.add.sprite(530,435, 'Level21_car1');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.9,0.9);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_car';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);

    _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-20, _this.world.centerY+55);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3,1.9);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 90;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
          
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-20, _this.world.centerY+55);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.4,1.4);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 200;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
          
       _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-100, _this.world.centerY-85);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1.4,1.4);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 80;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
          
       _this.wronggraphics4 = _this.add.graphics(_this.world.centerX-100, _this.world.centerY-175);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(1.4,1.4);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 20;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
          
        _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-70, _this.world.centerY+140);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(3,1.9);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 270;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();

    
        _this.flagGroup1.add(_this.opt1);
          _this.flagGroup1.add(_this.opt3);
              _this.flagGroup1.add(_this.opt4);
            _this.flagGroup1.add(opt5);
       _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);
       _this.flagGroup1.add(_this.wronggraphics2);
       _this.flagGroup1.add(_this.wronggraphics3);
       _this.flagGroup1.add(_this.wronggraphics4);
       _this.flagGroup1.add(_this.wronggraphics5);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
     gotoTwentythreethQuestion:function(){
         
        _this.questionid = 20;
         _this.getVoice();
         //_this.no1++;
        
        
        
      
       _this.cloud = _this.add.sprite(90,50,'Level21_cloud');
       _this.cloud.scale.setTo(1,1); 
   
    _this.opt1 = _this.add.sprite(410,300, 'Level21_tree2');
    _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        
       _this.mainFlag = _this.add.sprite(375,250,'Level21_bird2');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_bird';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
       
       _this.opt3= _this.add.sprite(639,500, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1,1.3);
      
       _this.opt2 = _this.add.sprite(630,475, 'Level21_croc1');
    _this.opt2.name = "Level21_crocodile";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.8,0.8);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+30, _this.world.centerY+20);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3,1.9);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 90;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+199, _this.world.centerY-30);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(3,2);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle =130;
     _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);

          _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-179, _this.world.centerY+30);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(3,2);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle =230;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);

            _this.wronggraphics4 = _this.add.graphics(_this.world.centerX-179, _this.world.centerY-50);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(3,2);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle =260;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
    

    _this.flagGroup1 = _this.add.group();

  _this.flagGroup1.add(_this.cloud);
    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
    

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
     gotoTwentyfourthQuestion:function(){
          
        _this.questionid = 21;
         _this.getVoice();
    
         //_this.no1++;
        
        
      _this.cloud = _this.add.sprite(90,50,'Level21_cloud');
       _this.cloud.scale.setTo(1,1); 
   
    _this.opt1 = _this.add.sprite(410,300, 'Level21_tree2');
    _this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        
       _this.mainFlag = _this.add.sprite(375,250,'Level21_bird2');
    _this.mainFlag.name = "Level21_bird";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
       
      
       _this.opt3= _this.add.sprite(639,500, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1,1.3);
      
       _this.opt2 = _this.add.sprite(630,475, 'Level21_croc1');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.8,0.8);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_crocodile';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);

        
       _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+30, _this.world.centerY+20);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3,1.9);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 90;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+199, _this.world.centerY-30);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(3,2);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle =130;
     _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);

          _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-179, _this.world.centerY+30);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(3,2);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle =230;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);

            _this.wronggraphics4 = _this.add.graphics(_this.world.centerX-179, _this.world.centerY-50);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(3,2);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle =260;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
        
    

    _this.flagGroup1 = _this.add.group();

  _this.flagGroup1.add(_this.cloud);
    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
     gotoTwentyfifthQuestion:function(){
         
        _this.questionid = 23;
         _this.getVoice();
         //_this.no1++;
        
        
        
       _this.cloud3 = _this.add.sprite(80,50,'Level21_cloud3');
       _this.cloud3.scale.setTo(1,1); 
        
         _this.opt3= _this.add.sprite(179,460, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.8,1.3);
        
    _this.mainFlag = _this.add.sprite(180,390,'Level21_dog2');
    _this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.5,0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_dog';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
      
          
    _this.opt1 = _this.add.sprite(500,300, 'Level21_house2');
    _this.opt1.anchor.setTo(0.5);
    
     
      
       _this.opt2 = _this.add.sprite(549,280, 'Level21_cat44');
    _this.opt2.name = "Level21_cat";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1,1);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
               _this.opt4= _this.add.sprite(550,280, 'Level21_z1');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.8,0.94);

        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+20, _this.world.centerY+90);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1,1);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 190;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+190, _this.world.centerY-30);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.5,1);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle =90;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+159, _this.world.centerY+50);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(3,3);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle =90;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
        
    _this.flagGroup1 = _this.add.group();

        _this.flagGroup1.add(_this.cloud3);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt2);
            _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoTwentysixthQuestion:function(){
         
        _this.questionid = 22;
         _this.getVoice();
         //_this.no1++;
        
        
        
      _this.cloud3 = _this.add.sprite(80,50,'Level21_cloud3');
       _this.cloud3.scale.setTo(1,1); 
        
         _this.opt3= _this.add.sprite(179,460, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.8,1.3);
        
    _this.mainFlag = _this.add.sprite(180,390,'Level21_dog2');
    _this.mainFlag.name = "Level21_dog";
    _this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.5,0.5);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
      
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
      
          
    _this.opt1 = _this.add.sprite(500,300, 'Level21_house2');
    _this.opt1.anchor.setTo(0.5);
    
     
      
       _this.opt2 = _this.add.sprite(549,280, 'Level21_cat44');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1,1);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21_cat';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);


            _this.opt4= _this.add.sprite(550,280, 'Level21_z1');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.8,0.94);


        
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+20, _this.world.centerY+90);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1,1);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 190;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+190, _this.world.centerY-30);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.5,1);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle =90;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+159, _this.world.centerY+50);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(3,3);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle =90;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
        
        
    _this.flagGroup1 = _this.add.group();

        _this.flagGroup1.add(_this.cloud3);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt2);
            _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
       
     gotoTwentyseventhQuestion:function(){
         
        _this.questionid = 24;
          _this.getVoice();
         //_this.no1++;
        
      
    
    _this.opt1 = _this.add.sprite(500,590, 'Level21_table1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1.5,2.5);
        
              _this.opt3= _this.add.sprite(579,340, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.8,1.3);
        
       _this.opt4= _this.add.sprite(349,345, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.8,1.3);  
        
       _this.mainFlag = _this.add.sprite(350,299,'Level21_fish1');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1,0.9);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_fish';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);

      
       _this.opt2 = _this.add.sprite(625,280, 'Level21_cat5');
    _this.opt2.name = "Level21_cat";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.8,0.8);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);


            _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-60, _this.world.centerY-10);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2,2);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 20;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+260, _this.world.centerY+70);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(5,5);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle =90;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();

    
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt4);
       _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
      gotoTwentyeighthQuestion:function(){
           
        _this.questionid = 25;
         _this.getVoice();
         //_this.no1++;
        
    _this.opt1 = _this.add.sprite(500,590, 'Level21_table1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1.5,2.5);
        
              _this.opt3= _this.add.sprite(579,340, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.8,1.3);
        
       _this.opt4= _this.add.sprite(349,345, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.8,1.3);  
        
       _this.mainFlag = _this.add.sprite(350,299,'Level21_fish1');
    _this.mainFlag.name = "Level21_fish";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1,0.9);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);

      
       _this.opt2 = _this.add.sprite(625,280, 'Level21_cat5');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.8,0.8);
      _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_cat';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);

            _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-60, _this.world.centerY-10);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2,2);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 20;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+260, _this.world.centerY+70);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(5,5);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle =90;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();

    
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt4);
       _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);


    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoTwentyninethQuestion:function(){
        
        _this.questionid = 26;
         _this.getVoice();
         //_this.no1++;
        
       
       _this.cloud5 = _this.add.sprite(80,50,'Level21_cloud5');
       _this.cloud5.scale.setTo(1,1); 
    
    _this.opt1 = _this.add.sprite(380,290, 'Level21_house3');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.81,1);
        
       _this.mainFlag = _this.add.sprite(368,375,'Level21_sofa4');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.85,0.85);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_sofa';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);

       _this.opt3= _this.add.sprite(779,436, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.95,1.3);
      
       _this.opt2 = _this.add.sprite(775,380, 'Level21_scooter2');
    _this.opt2.name = "Level21_scooter";
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(0.8,0.8);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

         _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-160, _this.world.centerY-100);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3,3);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 52;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        

    _this.flagGroup1 = _this.add.group();

    _this.flagGroup1.add(_this.cloud5);
    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
      
    gotoThirtythQuestion:function(){
        
        _this.questionid = 27;
         _this.getVoice();
         //_this.no1++;
        
        
       _this.cloud5 = _this.add.sprite(80,50,'Level21_cloud5');
       _this.cloud5.scale.setTo(1,1); 
    
    _this.opt1 = _this.add.sprite(380,290, 'Level21_house3');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.81,1);
        
       _this.mainFlag = _this.add.sprite(368,375,'Level21_sofa4');
    _this.mainFlag.name = "Level21_sofa";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.85,0.85);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);

      
       _this.opt3= _this.add.sprite(779,436, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.95,1.3);
      
       _this.opt2 = _this.add.sprite(775,380, 'Level21_scooter2');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_scooter';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
 _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-160, _this.world.centerY-100);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3,3);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 52;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        

    _this.flagGroup1 = _this.add.group();

    _this.flagGroup1.add(_this.cloud5);
    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    }, 
    
    gotoThirtyonethQuestion:function(){
         
        _this.questionid = 28;
      _this.getVoice();
         //_this.no1++;
        
       

       _this.mainFlag = _this.add.sprite(355,295,'Level21_papaya2');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.75,0.65);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_papaya';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
       _this.opt3= _this.add.sprite(350,480, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1.2,2.3);
        
    _this.opt1 = _this.add.sprite(350,290, 'Level21_basket1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.81,1);
        
             _this.opt4= _this.add.sprite(700,410, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(1,2.3);
        
       _this.opt2 = _this.add.sprite(695,360, 'Level21_banana1');
    _this.opt2.name = "Level21_banana";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.95,0.95);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);


           _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+100, _this.world.centerY+60);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(4,4);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 92;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();

       _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt4);
       _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    gotoThirtytwothQuestion:function(){
        
        _this.questionid = 29;
          _this.getVoice();
         //_this.no1++;
        
       
   
       _this.mainFlag = _this.add.sprite(355,295,'Level21_papaya2');
    _this.mainFlag.name = "Level21_papaya2";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.75,0.65);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       //_this.mainFlag.name = 'rightAnswer';
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
     _this.opt3= _this.add.sprite(350,480, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1.2,2.3);
        
    _this.opt1 = _this.add.sprite(350,290, 'Level21_basket1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.81,1);
        
             _this.opt4= _this.add.sprite(700,410, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(1,2.3);
        
       _this.opt2 = _this.add.sprite(695,360, 'Level21_banana1');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.95,0.95);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_banana';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);

        
           _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+100, _this.world.centerY+60);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(4,4);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 92;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();

       _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt4);
       _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.wronggraphics1);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    gotoThirtythreethQuestion:function(){
       
        _this.questionid = 30;
         _this.getVoice();
         //_this.no1++;
       
       
       
       _this.mainFlag = _this.add.sprite(510,100,'Level21_bee2');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.85,0.85);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_bee';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
    _this.opt1 = _this.add.sprite(450,260, 'Level21_flower1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1.2,1.3);
       
             _this.opt3= _this.add.sprite(460,495, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.9,2.3);
        
       _this.opt2 = _this.add.sprite(449,425, 'Level21_pot2');
    _this.opt2.name = "Level21_pot";
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(1.5,1.5);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

       _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-140);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2,1.5);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 92;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
    _this.flagGroup1 = _this.add.group();

       _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt3);
       _this.flagGroup1.add(_this.opt2);
     _this.flagGroup1.add(_this.wronggraphics1);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
       gotoThirtyfourthQuestion:function(){
           
        _this.questionid = 31;
          _this.getVoice();
         //_this.no1++;
          
         
       
       _this.mainFlag = _this.add.sprite(510,100,'Level21_bee2');
    _this.mainFlag.name = "Level21_bee";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.85,0.85);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
          
       _this.opt1 = _this.add.sprite(450,260, 'Level21_flower1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1.2,1.3);
       
             _this.opt3= _this.add.sprite(460,495, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.9,2.3);
        
       _this.opt2 = _this.add.sprite(449,425, 'Level21_pot2');
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(1.5,1.5);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_pot';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);

 _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-140);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2,1.5);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 92;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
    _this.flagGroup1 = _this.add.group();

       _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt3);
       _this.flagGroup1.add(_this.opt2);
     _this.flagGroup1.add(_this.wronggraphics1);
    

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    gotoThirtyfifthQuestion:function(){
        
        _this.questionid = 33;
          _this.getVoice();
         //_this.no1++;
        
       
 
            _this.opt3 = _this.add.sprite(500,540, 'Level21_table1');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1.8,2);
        
                    _this.opt4= _this.add.sprite(505,335, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(1,2.5);
        
                opt5= _this.add.sprite(505,335, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(1,2.5);
        
       _this.opt2 = _this.add.sprite(509,325, 'Level21_book1');
    _this.opt2.name = "Level21_bigbook";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1.5,1.7);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
       _this.opt1 = _this.add.sprite(500,272, 'Level21_books');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.8,0.8);
        

        
       _this.mainFlag = _this.add.sprite(500,222,'Level21_book3');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.85,1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_smallbook';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
       _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY-20);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(0.5,1);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 92;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+130, _this.world.centerY+25);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1,0.75);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 182;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+0, _this.world.centerY-10);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(0.95,0.75);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 302;
     _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
        
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY-30);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(1.25,0.75);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 102;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-50, _this.world.centerY-40);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(1.95,0.75);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 2;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics6 = _this.add.graphics(_this.world.centerX-70, _this.world.centerY-30);
        _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics6.beginFill(0xFF700B, 1);
        _this.wronggraphics6.scale.setTo(1.65,0.75);
        _this.wronggraphics6.lineTo(0, 115);
        _this.wronggraphics6.lineTo(100, 80);
        _this.wronggraphics6.lineTo(0, 0);
       _this.wronggraphics6.angle = 72;
     _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics7 = _this.add.graphics(_this.world.centerX-70, _this.world.centerY+50);
        _this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics7.beginFill(0xFF700B, 1);
        _this.wronggraphics7.scale.setTo(1.65,0.75);
        _this.wronggraphics7.lineTo(0, 115);
        _this.wronggraphics7.lineTo(100, 80);
        _this.wronggraphics7.lineTo(0, 0);
       _this.wronggraphics7.angle = 362;
      _this.wronggraphics7.alpha = 0;
        _this.wronggraphics7.inputEnabled = true;
       _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics7.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics8 = _this.add.graphics(_this.world.centerX+190, _this.world.centerY+135);
        _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics8.beginFill(0xFF700B, 1);
        _this.wronggraphics8.scale.setTo(2.55,0.95);
        _this.wronggraphics8.lineTo(0, 115);
        _this.wronggraphics8.lineTo(100, 80);
        _this.wronggraphics8.lineTo(0, 0);
       _this.wronggraphics8.angle = 162;
      _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
               
      _this.wronggraphics9 = _this.add.graphics(_this.world.centerX+120, _this.world.centerY+140);
        _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics9.beginFill(0xFF700B, 1);
        _this.wronggraphics9.scale.setTo(2.65,0.95);
        _this.wronggraphics9.lineTo(0, 115);
        _this.wronggraphics9.lineTo(100, 80);
        _this.wronggraphics9.lineTo(0, 0);
       _this.wronggraphics9.angle = 250;
      _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);
        
        
    _this.flagGroup1 = _this.add.group();
      
      _this.flagGroup1.add(_this.opt3);
         _this.flagGroup1.add(_this.opt4);
        _this.flagGroup1.add(opt5);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.opt1);
      _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
        _this.flagGroup1.add(_this.wronggraphics5);
        _this.flagGroup1.add(_this.wronggraphics6);
        _this.flagGroup1.add(_this.wronggraphics7);
        _this.flagGroup1.add(_this.wronggraphics8);
        _this.flagGroup1.add(_this.wronggraphics9);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    
    gotoThirtysixthQuestion:function(){
        
        _this.questionid = 32;
          _this.getVoice();
         //_this.no1++;
      
        
        
            _this.opt3 = _this.add.sprite(500,540, 'Level21_table1');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1.8,2);
        
                    _this.opt4= _this.add.sprite(505,335, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(1,2.5);
        
                opt5= _this.add.sprite(505,335, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(1,2.5);
        
       _this.opt2 = _this.add.sprite(509,325, 'Level21_book1');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1.5,1.7);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'Level21_bigbook';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        
       _this.opt1 = _this.add.sprite(500,272, 'Level21_books');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(0.8,0.8);
        

        
       _this.mainFlag = _this.add.sprite(500,222,'Level21_book3');
    _this.mainFlag.name = "Level21_smallbook";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.85,1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
      
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        

        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY-20);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(0.5,1);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 92;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+130, _this.world.centerY+25);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1,0.75);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 182;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+0, _this.world.centerY-10);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(0.95,0.75);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 302;
     _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
        
        _this.wronggraphics4 = _this.add.graphics(_this.world.centerX, _this.world.centerY-30);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(1.25,0.75);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 102;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-50, _this.world.centerY-40);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(1.95,0.75);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 2;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics6 = _this.add.graphics(_this.world.centerX-70, _this.world.centerY-30);
        _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics6.beginFill(0xFF700B, 1);
        _this.wronggraphics6.scale.setTo(1.65,0.75);
        _this.wronggraphics6.lineTo(0, 115);
        _this.wronggraphics6.lineTo(100, 80);
        _this.wronggraphics6.lineTo(0, 0);
       _this.wronggraphics6.angle = 72;
     _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics7 = _this.add.graphics(_this.world.centerX-70, _this.world.centerY+50);
        _this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics7.beginFill(0xFF700B, 1);
        _this.wronggraphics7.scale.setTo(1.65,0.75);
        _this.wronggraphics7.lineTo(0, 115);
        _this.wronggraphics7.lineTo(100, 80);
        _this.wronggraphics7.lineTo(0, 0);
       _this.wronggraphics7.angle = 362;
      _this.wronggraphics7.alpha = 0;
        _this.wronggraphics7.inputEnabled = true;
       _this.wronggraphics7.input.useHandCursor = true;
        _this.wronggraphics7.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics8 = _this.add.graphics(_this.world.centerX+190, _this.world.centerY+135);
        _this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics8.beginFill(0xFF700B, 1);
        _this.wronggraphics8.scale.setTo(2.55,0.95);
        _this.wronggraphics8.lineTo(0, 115);
        _this.wronggraphics8.lineTo(100, 80);
        _this.wronggraphics8.lineTo(0, 0);
       _this.wronggraphics8.angle = 162;
      _this.wronggraphics8.alpha = 0;
        _this.wronggraphics8.inputEnabled = true;
       _this.wronggraphics8.input.useHandCursor = true;
        _this.wronggraphics8.events.onInputDown.add(_this.nothing,_this);
        
               
      _this.wronggraphics9 = _this.add.graphics(_this.world.centerX+120, _this.world.centerY+140);
        _this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics9.beginFill(0xFF700B, 1);
        _this.wronggraphics9.scale.setTo(2.65,0.95);
        _this.wronggraphics9.lineTo(0, 115);
        _this.wronggraphics9.lineTo(100, 80);
        _this.wronggraphics9.lineTo(0, 0);
       _this.wronggraphics9.angle = 250;
      _this.wronggraphics9.alpha = 0;
        _this.wronggraphics9.inputEnabled = true;
       _this.wronggraphics9.input.useHandCursor = true;
        _this.wronggraphics9.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();
      
      _this.flagGroup1.add(_this.opt3);
         _this.flagGroup1.add(_this.opt4);
        _this.flagGroup1.add(opt5);
    _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.add(_this.opt1);
      _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
        _this.flagGroup1.add(_this.wronggraphics5);
        _this.flagGroup1.add(_this.wronggraphics6);
        _this.flagGroup1.add(_this.wronggraphics7);
        _this.flagGroup1.add(_this.wronggraphics8);
        _this.flagGroup1.add(_this.wronggraphics9);


    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoThirtyseventhQuestion:function(){
        
        _this.questionid = 35;
       _this.getVoice();
         //_this.no1++;
        
       
       _this.opt1 = _this.add.sprite(600,350, 'Level21_step1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1);
        

       opt5= _this.add.sprite(870,237, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.4,1);
        
       _this.opt2 = _this.add.sprite(860,200, 'Level21_mug2');
    _this.opt2.name = "Level21_largemug";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1.3,1.3);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
                    _this.opt3= _this.add.sprite(330,420, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.4,1.5);
        
          _this.opt4= _this.add.sprite(330,420, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.4,1.5);
        
       _this.mainFlag = _this.add.sprite(330,360,'Level21_mug1');
    _this.mainFlag.name = "Level21_smallmug";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.9,1.1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'rightAnswer';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        

         _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+130, _this.world.centerY+100);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1.9,2.3);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 112;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
           _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-40, _this.world.centerY+160);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.9,2.3);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 92;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-185, _this.world.centerY-40);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1.9,2.3);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 52;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
            _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+388, _this.world.centerY+40);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(2.25,1.75);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 152;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
          _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+495, _this.world.centerY-190);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(2.95,2.75);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 30;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+347, _this.world.centerY-330);
        _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics6.beginFill(0xFF700B, 1);
        _this.wronggraphics6.scale.setTo(2.5,2);
        _this.wronggraphics6.lineTo(0, 115);
        _this.wronggraphics6.lineTo(100, 80);
        _this.wronggraphics6.lineTo(0, 0);
       _this.wronggraphics6.angle = 17;
      _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);



    _this.flagGroup1 = _this.add.group();

      
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(opt5);
       _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt4);
     _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
        _this.flagGroup1.add(_this.wronggraphics5);
        _this.flagGroup1.add(_this.wronggraphics6);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
     gotoThirtyeighthQuestion:function(){
         
        _this.questionid = 34;
        _this.getVoice();
         //_this.no1++;
        
        
      
       _this.opt1 = _this.add.sprite(600,350, 'Level21_step1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1);
        

       opt5= _this.add.sprite(870,237, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.4,1);
        
       _this.opt2 = _this.add.sprite(860,200, 'Level21_mug2');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1.3,1.3);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_largemug';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt3= _this.add.sprite(330,420, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.4,1.5);
        
          _this.opt4= _this.add.sprite(330,420, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.4,1.5);
        
       _this.mainFlag = _this.add.sprite(330,360,'Level21_mug1');
    _this.mainFlag.name = "Level21_smallmug";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.9,1.1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
     _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+130, _this.world.centerY+100);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1.9,2.3);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 112;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
           _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-40, _this.world.centerY+160);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.9,2.3);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 92;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-185, _this.world.centerY-40);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1.9,2.3);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 52;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
            _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+388, _this.world.centerY+40);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(2.25,1.75);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 152;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
          _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+495, _this.world.centerY-190);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(2.95,2.75);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 30;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+347, _this.world.centerY-330);
        _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics6.beginFill(0xFF700B, 1);
        _this.wronggraphics6.scale.setTo(2.5,2);
        _this.wronggraphics6.lineTo(0, 115);
        _this.wronggraphics6.lineTo(100, 80);
        _this.wronggraphics6.lineTo(0, 0);
       _this.wronggraphics6.angle = 17;
      _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);



    _this.flagGroup1 = _this.add.group();

      
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(opt5);
       _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt4);
     _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
        _this.flagGroup1.add(_this.wronggraphics5);
        _this.flagGroup1.add(_this.wronggraphics6);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    
    gotoThirtyninethQuestion:function(){
        
        _this.questionid = 36;
        _this.getVoice();
         //_this.no1++;
        
       
        
          _this.opt3= _this.add.sprite(480,505, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1.1,1.7);
      
       _this.opt1 = _this.add.sprite(480,340, 'Level21_table2');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1);
        


        
       _this.opt2 = _this.add.sprite(385,444, 'Level21_book4');
    _this.opt2.name = "Level21_book";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1,1);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
       _this.mainFlag = _this.add.sprite(480,133,'Level21_clock2');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1.4,1.4);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_clock';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        

        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+77, _this.world.centerY+150);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1.3,1.3);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 108;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-130, _this.world.centerY+270);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.9,2.3);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 180;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-37, _this.world.centerY-290);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1.9,2.3);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 48;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
             _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+30, _this.world.centerY-30);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(2.25,1.75);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 240;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
            _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+20, _this.world.centerY+210);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(1.5,1.5);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 90;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+100, _this.world.centerY-100);
        _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics6.beginFill(0xFF700B, 1);
        _this.wronggraphics6.scale.setTo(1.5,1.5);
        _this.wronggraphics6.lineTo(0, 115);
        _this.wronggraphics6.lineTo(100, 80);
        _this.wronggraphics6.lineTo(0, 0);
       _this.wronggraphics6.angle = 90;
      _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();

      _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.opt2);
     _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
        _this.flagGroup1.add(_this.wronggraphics5);
        _this.flagGroup1.add(_this.wronggraphics6);

    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
   gotoFourtythQuestion:function(){
      
        _this.questionid = 37;
       _this.getVoice();
         //_this.no1++;
      
      
       
       _this.opt3= _this.add.sprite(480,505, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1.1,1.7);
      
       _this.opt1 = _this.add.sprite(480,340, 'Level21_table2');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1);
        


        
       _this.opt2 = _this.add.sprite(385,444, 'Level21_book4');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1,1);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
      _this.opt2.name = 'Level21_book';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        _this.mainFlag = _this.add.sprite(480,133,'Level21_clock2');
    _this.mainFlag.name = "Level21_clock";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1.4,1.4);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        

       _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+77, _this.world.centerY+150);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1.3,1.3);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 108;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
         _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-130, _this.world.centerY+270);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1.9,2.3);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 180;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-37, _this.world.centerY-290);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(1.9,2.3);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 48;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
        
             _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+30, _this.world.centerY-30);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        _this.wronggraphics4.scale.setTo(2.25,1.75);
        _this.wronggraphics4.lineTo(0, 115);
        _this.wronggraphics4.lineTo(100, 80);
        _this.wronggraphics4.lineTo(0, 0);
       _this.wronggraphics4.angle = 240;
      _this.wronggraphics4.alpha = 0;
        _this.wronggraphics4.inputEnabled = true;
       _this.wronggraphics4.input.useHandCursor = true;
        _this.wronggraphics4.events.onInputDown.add(_this.nothing,_this);
        
            _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+20, _this.world.centerY+210);
        _this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics5.beginFill(0xFF700B, 1);
        _this.wronggraphics5.scale.setTo(1.5,1.5);
        _this.wronggraphics5.lineTo(0, 115);
        _this.wronggraphics5.lineTo(100, 80);
        _this.wronggraphics5.lineTo(0, 0);
       _this.wronggraphics5.angle = 90;
      _this.wronggraphics5.alpha = 0;
        _this.wronggraphics5.inputEnabled = true;
       _this.wronggraphics5.input.useHandCursor = true;
        _this.wronggraphics5.events.onInputDown.add(_this.nothing,_this);
        
       _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+100, _this.world.centerY-100);
        _this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics6.beginFill(0xFF700B, 1);
        _this.wronggraphics6.scale.setTo(1.5,1.5);
        _this.wronggraphics6.lineTo(0, 115);
        _this.wronggraphics6.lineTo(100, 80);
        _this.wronggraphics6.lineTo(0, 0);
       _this.wronggraphics6.angle = 90;
      _this.wronggraphics6.alpha = 0;
        _this.wronggraphics6.inputEnabled = true;
       _this.wronggraphics6.input.useHandCursor = true;
        _this.wronggraphics6.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();

      _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.opt2);
     _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        _this.flagGroup1.add(_this.wronggraphics3);
        _this.flagGroup1.add(_this.wronggraphics4);
        _this.flagGroup1.add(_this.wronggraphics5);
        _this.flagGroup1.add(_this.wronggraphics6);
      
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    gotoFourtyonethQuestion:function(){
        
        _this.questionid = 38;
       _this.getVoice();
         //_this.no1++;
       
        
       _this.cloud = _this.add.sprite(80,70,'Level21_cloud');
       _this.cloud.scale.setTo(1,1); 

        


        
        _this.opt2 = _this.add.sprite(805,260, 'Level21_treee');
    _this.opt2.name = "Level21_largetree";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1,1.05);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
       _this.mainFlag = _this.add.sprite(250,305,'Level21_treee1');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1,1.1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_smalltree';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
       _this.opt1 = _this.add.sprite(360,400, 'Level21_house4');
    _this.opt1.anchor.setTo(0.5);
       //_this.opt1.scale.setTo(1,1);
       
       _this.opt3 = _this.add.sprite(360,430, 'Level21_house4');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.visible=false;

        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+47, _this.world.centerY+210);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 118;
    _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics2= _this.add.graphics(_this.world.centerX-50, _this.world.centerY+100);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1,1.5);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 118;
    _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();

      
_this.flagGroup1.add(_this.cloud);
       _this.flagGroup1.add(_this.opt2);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
       _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
        
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
  
      gotoFourtytwothQuestion:function(){
         
        _this.questionid = 39;
      _this.getVoice();
         //_this.no1++;
         
           
        _this.cloud = _this.add.sprite(80,70,'Level21_cloud');
       _this.cloud.scale.setTo(1,1); 

        


        
       _this.opt2 = _this.add.sprite(805,260, 'Level21_treee');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1,1.05);
      _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_largetree';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
       _this.mainFlag = _this.add.sprite(250,305,'Level21_treee1');
    _this.mainFlag.name = "Level21_smalltree";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1,1.1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
       _this.opt1 = _this.add.sprite(360,400, 'Level21_house4');
    _this.opt1.anchor.setTo(0.5);
       //_this.opt1.scale.setTo(1,1);
         
         _this.opt3 = _this.add.sprite(360,430, 'Level21_house4');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.visible=false;

         _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+47, _this.world.centerY+210);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 118;
    _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
        _this.wronggraphics2= _this.add.graphics(_this.world.centerX-50, _this.world.centerY+100);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(1,1.5);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 118;
    _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
        
    _this.flagGroup1 = _this.add.group();

      
_this.flagGroup1.add(_this.cloud);
       _this.flagGroup1.add(_this.opt2);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
         _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.wronggraphics1);
        _this.flagGroup1.add(_this.wronggraphics2);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    gotoFourtythreethQuestion:function(){
       
        _this.questionid = 41; 
    _this.getVoice();
         //_this.no1++;
        
        
        
_this.opt3= _this.add.sprite(227,395, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.5,1.7);

                opt5= _this.add.sprite(770,470, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.9,1.5);
        
        
       _this.opt2 = _this.add.sprite(785,310, 'Level21_mug3');
    _this.opt2.name = "Level21_largemug3";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1,1);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
 
       _this.mainFlag = _this.add.sprite(230,327,'Level21_mug6');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.8,1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_smallmug';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
        _this.opt4= _this.add.sprite(570,495, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(1,1.5);
        
       _this.opt1 = _this.add.sprite(580,440, 'Level21_banana1');
    _this.opt1.anchor.setTo(0.5);
       //_this.opt1.scale.setTo(1,1);

    _this.flagGroup1 = _this.add.group();

      
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(opt5);
       _this.flagGroup1.add(_this.opt2);
        
     _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    gotoFourtyfourthQuestion:function(){
       
        _this.questionid = 40;
        _this.getVoice();
         //_this.no1++;
       
        

     _this.opt3= _this.add.sprite(227,395, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.5,1.7);

                opt5= _this.add.sprite(770,470, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.9,1.5);
        
        
       _this.opt2 = _this.add.sprite(785,310, 'Level21_mug3');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1,1);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_largemug';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
       _this.mainFlag = _this.add.sprite(230,327,'Level21_mug6');
    _this.mainFlag.name = "Level21_smallmug";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.8,1);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt4= _this.add.sprite(570,495, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(1,1.5);
        
       _this.opt1 = _this.add.sprite(580,440, 'Level21_banana1');
    _this.opt1.anchor.setTo(0.5);
       //_this.opt1.scale.setTo(1,1);

    _this.flagGroup1 = _this.add.group();

      
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(opt5);
       _this.flagGroup1.add(_this.opt2);
        
     _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt4);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoFourtyfifthQuestion:function(){
       
        _this.questionid = 45;
    _this.getVoice();
         //_this.no1++;
       
       
     
       _this.cloud7 = _this.add.sprite(100,50,'Level21_cloud7');
       _this.cloud7.scale.setTo(1,1); 

    _this.opt3= _this.add.sprite(200,370, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.9,1.5);
        
       _this.mainFlag = _this.add.sprite(200,330,'Level21_catss');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1.2,1.2);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_cat';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
       _this.opt1 = _this.add.sprite(720,350, 'Level21_scooter5');
    _this.opt1.anchor.setTo(0.5);
      // _this.opt1.scale.setTo(1.95,1.95);
       
       _this.opt4= _this.add.sprite(500,480, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(1,1.5);
       
       _this.opt2 = _this.add.sprite(485,380, 'Level21_dog2');
    _this.opt2.name = "Level21_dog";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.7,0.7);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
       
          _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+365, _this.world.centerY+180);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 128;
    _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        

    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud7);
       _this.flagGroup1.add(_this.opt3);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt4);
        _this.flagGroup1.add(_this.opt2);
       _this.flagGroup1.add(_this.wronggraphics1);
       
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoFourtysixthQuestion:function(){
         
         _this.questionid = 44;
         _this.getVoice();
         //_this.no1++;
        
        
       _this.cloud7 = _this.add.sprite(100,50,'Level21_cloud7');
       _this.cloud7.scale.setTo(1,1); 

    _this.opt3= _this.add.sprite(200,370, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.9,1.5);
        
       _this.mainFlag = _this.add.sprite(200,330,'Level21_catss');
    _this.mainFlag.name = "Level21_cat";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1.2,1.2);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt1 = _this.add.sprite(720,350, 'Level21_scooter5');
    _this.opt1.anchor.setTo(0.5);
      // _this.opt1.scale.setTo(1.95,1.95);
       
       _this.opt4= _this.add.sprite(500,480, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(1,1.5);
       
       _this.opt2 = _this.add.sprite(485,380, 'Level21_dog2');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.7,0.7);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'Level21_dog';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
           _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+365, _this.world.centerY+180);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(1.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 128;
    _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
        
        

    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud7);
       _this.flagGroup1.add(_this.opt3);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
    _this.flagGroup1.add(_this.opt4);
        _this.flagGroup1.add(_this.opt2);
       _this.flagGroup1.add(_this.wronggraphics1);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    gotoFourtyseventhQuestion:function(){
    
        _this.questionid = 48;    
          _this.getVoice();
         //_this.no1++;
        
        
       _this.cloud8 = _this.add.sprite(40,130,'Level21_cloud8');
       _this.cloud8.scale.setTo(1,1); 

        _this.mainFlag = _this.add.sprite(155,500, 'Level21_bird3');
    _this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.name = 'Level21_bird';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
       //_this.opt1.scale.setTo(1.65,1.65);
 
        
       
        
           _this.opt3= _this.add.sprite(150,530, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.5,1.5);
        
        
        _this.opt1 = _this.add.sprite(340,380,'Level21_elephant1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1.15,1.3);
       //_this.mainFlag.inputEnabled = true;
    //_this.mainFlag.input.useHandCursor = true;
       
        
         _this.opt4= _this.add.sprite(850,430, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.5,1.5);
       
       _this.opt2 = _this.add.sprite(875,280, 'Level21_giraffe');
    _this.opt2.name = "Level21_giraffe";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.75,0.75);
       //_this.opt2.inputEnabled = true;
    //_this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
       _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-365, _this.world.centerY+280);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 158;
    // _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);


    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud8);
     _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt4);
        _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(_this.wronggraphics1);
        
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoFourtyeighthQuestion:function(){
    
    _this.questionid = 49;
           _this.getVoice();
         //_this.no1++;
       
       
       _this.cloud8 = _this.add.sprite(40,130,'Level21_cloud8');
       _this.cloud8.scale.setTo(1,1); 

 
        _this.mainFlag = _this.add.sprite(340,380,'Level21_elephant1');
    _this.mainFlag.name = "Level21_elephant";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1.15,1.3);
       //_this.mainFlag.inputEnabled = true;
    //_this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt3= _this.add.sprite(150,530, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.5,1.5);
        
       _this.opt1 = _this.add.sprite(155,500, 'Level21_bird3');
    _this.opt1.anchor.setTo(0.5);
       //_this.opt1.scale.setTo(1.65,1.65);
        
         _this.opt4= _this.add.sprite(850,430, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.5,1.5);
       
       _this.opt2 = _this.add.sprite(875,280, 'Level21_giraffe');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(0.75,0.75);
       //_this.opt2.inputEnabled = true;
    //_this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_giraffe';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
       
       _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-255, _this.world.centerY+280);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 158;
    _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);


    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud8);
     _this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt4);
        _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(_this.wronggraphics1);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
   gotoFourtyninethQuestion:function(){
       
        _this.questionid = 50;
      _this.getVoice();
          //_this.no1++;
      
      
       
      
       _this.cloud7 = _this.add.sprite(170,40,'Level21_cloud7');
       _this.cloud7.scale.setTo(1,1); 

 
        _this.mainFlag = _this.add.sprite(280,110,'Level21_bird1');
    _this.mainFlag.anchor.setTo(0.5);
      // _this.mainFlag.scale.setTo(0.85,0.85);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_bird';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
       _this.opt1 = _this.add.sprite(475,350, 'Level21_treee1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1.3,1.5);
      
      _this.opt3 = _this.add.sprite(475,350, 'Level21_treee1');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1.3,1.6);
      _this.opt3.visible=false;
       
       _this.opt2 = _this.add.sprite(690,390, 'Level21_bee2');
    _this.opt2.name = "Level21_bee";
    _this.opt2.anchor.setTo(0.5);
      // _this.opt2.scale.setTo(0.7,0.7);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);

    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud7);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
      _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt2);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoFiftythQuestion:function(){
        
        _this.questionid = 51;
          _this.getVoice();
         //_this.no1++;
        
        
       
       _this.cloud7 = _this.add.sprite(170,40,'Level21_cloud7');
       _this.cloud7.scale.setTo(1,1); 

 
        _this.mainFlag = _this.add.sprite(280,110,'Level21_bird1');
    _this.mainFlag.name = "Level21_bird";
    _this.mainFlag.anchor.setTo(0.5);
      // _this.mainFlag.scale.setTo(0.85,0.85);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.opt1 = _this.add.sprite(475,350, 'Level21_treee1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1.3,1.5);
        
        _this.opt3 = _this.add.sprite(475,350, 'Level21_treee1');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1.3,1.5);
      _this.opt3.visible=false;
       
       
       _this.opt2 = _this.add.sprite(690,390, 'Level21_bee2');
    _this.opt2.anchor.setTo(0.5);
      // _this.opt2.scale.setTo(0.7,0.7);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
        _this.opt2.name = 'Level21_bee';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        


    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud7);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt2);
       
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoFiftyonethQuestion:function(){
       
        _this.questionid = 52;
          _this.getVoice();
         //_this.no1++;
        
        
 
        _this.mainFlag = _this.add.sprite(650,107,'Level21_clock1');
    _this.mainFlag.anchor.setTo(0.5);
      // _this.mainFlag.scale.setTo(0.85,0.85);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_clock';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
       _this.opt1 = _this.add.sprite(505,410, 'Level21_sofa5');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1.1);
        
        _this.opt3 = _this.add.sprite(505,410, 'Level21_sofa5');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1,1.1);
        _this.opt3.visible=false;
       
       _this.opt2 = _this.add.sprite(280,225, 'Level21_painting');
    _this.opt2.name = "Level21_painting";
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(0.7,0.7);
    _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
        
               _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-105, _this.world.centerY+300);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 198;
    _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();

      

     
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(_this.wronggraphics1);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoFiftytwothQuestion:function(){
        
        _this.questionid = 53;
          _this.getVoice();
         //_this.no1++;
      
 
       
 
        _this.mainFlag = _this.add.sprite(650,107,'Level21_clock1');
    _this.mainFlag.name = "Level21_clock"
    _this.mainFlag.anchor.setTo(0.5);
      // _this.mainFlag.scale.setTo(0.85,0.85);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
       _this.opt1 = _this.add.sprite(505,410, 'Level21_sofa5');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1.1);
        
        _this.opt3 = _this.add.sprite(505,410, 'Level21_sofa5');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(1,1.1);
        _this.opt3.visible=false;
       
       _this.opt2 = _this.add.sprite(280,225, 'Level21_painting');
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(0.7,0.7);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.name = 'Level21_painting';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
        
        
        
                   _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-105, _this.world.centerY+300);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 198;
    _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);

    _this.flagGroup1 = _this.add.group();

      

     
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.opt3);
        _this.flagGroup1.add(_this.opt2);
        _this.flagGroup1.add(_this.wronggraphics1);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
   gotoFiftythreethQuestion:function(){
       
        _this.questionid = 52;
          _this.getVoice();
         //_this.no1++;
      
       
       _this.cloud7 = _this.add.sprite(100,100,'Level21_cloud7');
       _this.cloud7.scale.setTo(1,1); 

        _this.opt4= _this.add.sprite(405,550, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.9,1.5);
 
        _this.mainFlag = _this.add.sprite(420,160,'Level21_drum');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.85,0.95);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_drum';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
       _this.opt1 = _this.add.sprite(425,375, 'Level21_stand');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1.1);
      
           opt5= _this.add.sprite(540,500, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.4,1);
 
       
       _this.opt2 = _this.add.sprite(550,460, 'Level21_pot4');
    _this.opt2.name = "Level21_pot";
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1.4,1.4);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
       _this.opt2.events.onInputDown.add(_this.wrongAns,_this);
      
       _this.opt3= _this.add.sprite(785,290, 'Level21_tree2');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.5,0.5);
      
           _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-55, _this.world.centerY+265);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 198;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
      
    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud7);
      _this.flagGroup1.add(_this.opt4);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
      _this.flagGroup1.add(opt5);
        _this.flagGroup1.add(_this.opt2);
      _this.flagGroup1.add(_this.opt3);
       _this.flagGroup1.add(_this.wronggraphics1);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoFiftyfourthQuestion:function(){
         
        _this.questionid = 53;
          _this.getVoice();
         //_this.no1++;
        
        
       _this.cloud7 = _this.add.sprite(100,100,'Level21_cloud7');
       _this.cloud7.scale.setTo(1,1); 

        _this.opt4= _this.add.sprite(405,550, 'Level21_sh');
    _this.opt4.anchor.setTo(0.5);
       _this.opt4.scale.setTo(0.9,1.5);
 
        _this.mainFlag = _this.add.sprite(420,160,'Level21_drum');
    _this.mainFlag.name = "Level21_drum";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(0.85,0.95);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
       _this.opt1 = _this.add.sprite(425,375, 'Level21_stand');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1.1);
      
           opt5= _this.add.sprite(540,500, 'Level21_sh');
    opt5.anchor.setTo(0.5);
       opt5.scale.setTo(0.4,1);
 
       
       _this.opt2 = _this.add.sprite(550,460, 'Level21_pot4');
    _this.opt2.anchor.setTo(0.5);
       _this.opt2.scale.setTo(1.4,1.4);
       _this.opt2.inputEnabled = true;
    _this.opt2.input.useHandCursor = true;
        _this.mainFlag.name = 'Level21_pot';
       _this.opt2.events.onInputDown.add(_this.correctAns,_this);
      
       _this.opt3= _this.add.sprite(785,290, 'Level21_tree2');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.5,0.5);
      
            _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-55, _this.world.centerY+265);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(2.9,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 198;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
      
    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud7);
      _this.flagGroup1.add(_this.opt4);
     _this.flagGroup1.add(_this.mainFlag);
    _this.flagGroup1.add(_this.opt1);
      _this.flagGroup1.add(opt5);
        _this.flagGroup1.add(_this.opt2);
      _this.flagGroup1.add(_this.opt3);
       _this.flagGroup1.add(_this.wronggraphics1);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
  
    gotoFiftyfifthQuestion:function(){
    
        _this.questionid = 53;   
          _this.getVoice();
         //_this.no1++;
       
       
       _this.cloud7 = _this.add.sprite(100,100,'Level21_cloud7');
       _this.cloud7.scale.setTo(1,1); 

 
        _this.mainFlag = _this.add.sprite(564,190,'Level21_kite');
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1.2,1.2);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
       _this.mainFlag.name = 'Level21_kite';
       _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        

           _this.opt3= _this.add.sprite(290,500, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.6,1.5);
       
       _this.opt1 = _this.add.sprite(300,350, 'Level21_treee1');
    _this.opt1.name = "Level21_tree";
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1);
       _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
      

       _this.opt2= _this.add.sprite(790,250, 'Level21_rope');
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(0.5,0.5);
       
       
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+125, _this.world.centerY+285);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3.4,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 158;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
       
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-175, _this.world.centerY+255);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(2.9,2.6);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 138;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
      
       
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-295, _this.world.centerY+255);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(2.9,2.6);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 298;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
      
      
    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud7);
     _this.flagGroup1.add(_this.mainFlag);
       _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
_this.flagGroup1.add(_this.opt2);
       _this.flagGroup1.add(_this.wronggraphics1);
       _this.flagGroup1.add(_this.wronggraphics2);
       _this.flagGroup1.add(_this.wronggraphics3);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
    },
    
    gotoFiftysixthQuestion:function(){
          _this.questionid = 56;   
      _this.getVoice();
         //_this.no1++;
        
       _this.cloud7 = _this.add.sprite(100,100,'Level21_cloud7');
       _this.cloud7.scale.setTo(1,1); 

 
        _this.mainFlag = _this.add.sprite(564,190,'Level21_kite');
    _this.mainFlag.name = "Level21_kite";
    _this.mainFlag.anchor.setTo(0.5);
       _this.mainFlag.scale.setTo(1.2,1.2);
       _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
      
       _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        

       
      
           _this.opt3= _this.add.sprite(290,550, 'Level21_sh');
    _this.opt3.anchor.setTo(0.5);
       _this.opt3.scale.setTo(0.6,1.5);
       
       _this.opt1 = _this.add.sprite(300,350, 'Level21_treee1');
    _this.opt1.anchor.setTo(0.5);
       _this.opt1.scale.setTo(1,1);
       _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
       _this.opt1.name = 'Level21_tree';
       _this.opt1.events.onInputDown.add(_this.correctAns,_this);
      

       _this.opt2= _this.add.sprite(790,250, 'Level21_rope');
    _this.opt2.anchor.setTo(0.5);
       //_this.opt2.scale.setTo(0.5,0.5);
       
       
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+125, _this.world.centerY+285);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        _this.wronggraphics1.scale.setTo(3.4,2.6);
        _this.wronggraphics1.lineTo(0, 115);
        _this.wronggraphics1.lineTo(100, 80);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.angle = 158;
      _this.wronggraphics1.alpha = 0;
        _this.wronggraphics1.inputEnabled = true;
       _this.wronggraphics1.input.useHandCursor = true;
        _this.wronggraphics1.events.onInputDown.add(_this.nothing,_this);
       
        _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-175, _this.world.centerY+255);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.scale.setTo(2.9,2.6);
        _this.wronggraphics2.lineTo(0, 115);
        _this.wronggraphics2.lineTo(100, 80);
        _this.wronggraphics2.lineTo(0, 0);
       _this.wronggraphics2.angle = 138;
      _this.wronggraphics2.alpha = 0;
        _this.wronggraphics2.inputEnabled = true;
       _this.wronggraphics2.input.useHandCursor = true;
        _this.wronggraphics2.events.onInputDown.add(_this.nothing,_this);
      
       
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX-295, _this.world.centerY+255);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        _this.wronggraphics3.scale.setTo(2.9,2.6);
        _this.wronggraphics3.lineTo(0, 115);
        _this.wronggraphics3.lineTo(100, 80);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 298;
      _this.wronggraphics3.alpha = 0;
        _this.wronggraphics3.inputEnabled = true;
       _this.wronggraphics3.input.useHandCursor = true;
        _this.wronggraphics3.events.onInputDown.add(_this.nothing,_this);
      
      
    _this.flagGroup1 = _this.add.group();

      

     _this.flagGroup1.add(_this.cloud7);
     _this.flagGroup1.add(_this.mainFlag);
       _this.flagGroup1.add(_this.opt3);
    _this.flagGroup1.add(_this.opt1);
_this.flagGroup1.add(_this.opt2);
       _this.flagGroup1.add(_this.wronggraphics1);
       _this.flagGroup1.add(_this.wronggraphics2);
       _this.flagGroup1.add(_this.wronggraphics3);
    _this.flagGroup1.x = 1000;
    _this.tween = _this.add.tween(_this.flagGroup1);
    _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
      // _this.tween.onComplete.add(_this.addQuestion, _this);

       _this.tween.onComplete.add(function(){

    }, _this); 
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
       /* _this.noofAttempts = 0;
        timer = game.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            _this.AnsTimercount++;
        }, _this);

        //  Start the timer running - _this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();
        */

        _this.noofAttempts = 0;
          _this.AnsTimerCount = 0;
          _this.sceneCount++;

          _this.timer = _this.time.create(false);

          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);

          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();


           _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
      _this.timer1.start();


       _this.speakerbtn.inputEnabled=true;       
       _this.speakerbtn.input.useHandCursor = true;
    console.log("get"+_this.qArrays[_this.no1]);
    switch(_this.qArrays[_this.no1])
      //switch(_this.no1)
    {
        case 1: _this.gotoFirstQuestion();
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
          case 9: _this.gotoNinethQuestion();
                break;
          case 10: _this.gotoTenthQuestion();
                break;
          case 11: _this.gotoEleventhQuestion();
                break;
          case 12: _this.gotoTwevelvethQuestion();
                break;
          case 13: _this.gotoThirteenthQuestion();
                break;
          case 14: _this.gotoFourteenthQuestion();
                break;            
          case 15: _this.gotoFifteenthQuestion();
                break;
          case 16: _this.gotoSixteenthQuestion();
                break;
          case 17: _this.gotoSeventeenthQuestion();
                break;
          case 18: _this.gotoEighteenthQuestion();
                break;
          case 19: _this.gotoNineteenthQuestion();
                break;
          case 20: _this.gotoTwentythQuestion();
                break;
          case 21: _this.gotoTwentyonethQuestion();
                break;
          case 22: _this.gotoTwentytwothQuestion();
                break;
          case 23: _this.gotoTwentythreethQuestion();
                break;
          case 24: _this.gotoTwentyfourthQuestion();
                break;
          case 25: _this.gotoTwentyfifthQuestion();
                break;
          case 26: _this.gotoTwentysixthQuestion();
                break;
          case 27: _this.gotoTwentyseventhQuestion();
                break;
          case 28: _this.gotoTwentyeighthQuestion();
                break;
          case 29: _this.gotoTwentyninethQuestion();
                break;
          case 30: _this.gotoThirtythQuestion();
                break;
          case 31: _this.gotoThirtyonethQuestion();
                break;
          case 32: _this.gotoThirtytwothQuestion();
                break;
          case 33: _this.gotoThirtythreethQuestion();
                break;
          case 34: _this.gotoThirtyfourthQuestion();
                break;
          case 35: _this.gotoThirtyfifthQuestion();
                break;
          case 36: _this.gotoThirtysixthQuestion();
                break;
          case 37: _this.gotoThirtyseventhQuestion();
                break;
          case 38: _this.gotoThirtyeighthQuestion();
                break;
          case 39: _this.gotoThirtyninethQuestion();
                break;
          case 40: _this.gotoFourtythQuestion();
                break;
          case 41: _this.gotoFourtyonethQuestion();
                break;
          case 42: _this.gotoFourtytwothQuestion();
                break;
          case 43: _this.gotoFourtythreethQuestion();
                break;
          case 44: _this.gotoFourtyfourthQuestion();
                break;
          case 45: _this.gotoFourtyfifthQuestion();
                break;
          case 46: _this.gotoFourtysixthQuestion();
                break;
          case 47: _this.gotoFourtyseventhQuestion();
                break;
          case 48: _this.gotoFourtyeighthQuestion();
                break;
          case 49: _this.gotoFourtyninethQuestion();
                break;
          case 50: _this.gotoFiftythQuestion();
                break;
          case 51: _this.gotoFiftyonethQuestion();
                break;
          case 52: _this.gotoFiftytwothQuestion();
                break;
          case 53: _this.gotoFiftythreethQuestion();
                break;
          case 54: _this.gotoFiftyfourthQuestion();
                break;
          case 55: _this.gotoFiftyfifthQuestion();
                break;
          case 56: _this.gotoFiftysixthQuestion();
                break;

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
        if(_this.starsGroup.getChildAt(j))
        {
          _this.starsGroup.getChildAt(j).x-=15;
          _this.starsGroup.getChildAt(i).x+=15;
        }
      }
    }           
  },
  
  updateTimer:function() {
     _this.counterForTimer++;
     //console.log("lololil"+counterForTimer);
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 this.minutes =  this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 this.minutes =  this.minutes+1;
                   
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
             this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
     this.timeDisplay.setText(_this.minutes+':' + this.seconds);
 
//timer.setText(minutes + ':'+ seconds );
},
    
    correctAns:function(target)
    {
        _this.noofAttempts++;
          
          _this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);       
           if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
       /* _this.currentTime = window.timeSaveFunc();
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
                    
               absdsjsapi.saveAssessment(_this.saveAsment);  */ 
       
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

       _this.mainFlag.inputEnabled = false;
       _this.opt1.inputEnabled = false;
       _this.opt2.inputEnabled = false;
       _this.opt3.inputEnabled = false;
       _this.speakerbtn.inputEnabled=false;
        //console.log("correct");

    
      
        
       _this.animlev1 =target.animations.add('flag1');
      _this.animlev1.play(10,true);
       //target.frame=1;
       
        _this.celebration = true;
        
        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();

       _this.time.events.add(500, _this.removeCelebration, _this);


        //console.log(target);
       //target.tint = 0xA9A9A9;
       
       _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        //console.log(_this.starAnim);
        _this.starAnim.smoothed = false;
          _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();               
        target.events.onInputDown.removeAll();
    },


    wrongAns:function(target)
    {
       /* _this.noofAttempts++;
       //console.log("wrong");
       
            var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: target.name, 
                access_token: window.acctkn 
            } 
            
            //absdsjsapi.saveInteractEvent(interactEvent);        
            
       //console.log("wrong");
        */

        //scoretext.setText(selctedLang.score+' : '+score);
       //console.log(target);
       //target.tint = 0xA9A9A9;
        _this.noofAttempts++;
       _this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);



          /* _this.currentTime = window.timeSaveFunc();
               _this.saveAsment = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    pass: "no",
                    time2answer: _this.AnsTimerCount,
                    attempts: _this.noofAttempts,
                    date_time_submission: _this.currentTime, 
                    access_token: window.acctkn 
               }
                    
               absdsjsapi.saveAssessment(_this.saveAsment); */


       
        _this.shake.shake(10, target);
        _this.wmusic = _this.add.audio('waudio');
        _this.wmusic.play();
       
      // wmusic1 = _this.add.audio('aiyoh');
        //wmusic1.play();
        //_this.disableListeners();
       //target.events.onInputDown.removeAll();
    },
    
    removeCelebration:function()
    {
        

        //console.log("removeCeleb");
        _this.celebration = false;
        //celebAnim.destroy();
        //right_this.count--;
        //console.log("no"+_this.no1);
        //_this.input.enabled = true;
            
            _this.count1++;
        //if(right_this.count<=0)
        //{     
          //console.log("vamitha");
               _this.no1++;
            if(_this.no1<6)
            {
             //console.log("addq");
              _this.addQuestion(_this.count1);
            }
            else
            {
              _this.time.events.add(2000, function(){
                //console.log("gameEnd");
             _this.stopVoice();
                _this.state.start('grade2_1AScore',true,false);
              },_this);
            }

    },
    
    
    changeQuestion:function()
    {

      if(_this.timer1)
        {
          _this.timer1.stop();
        }
        
       // _this.flagGroup1.destroy();
        _this.destroyEverything();
        if(_this.no1<6)
        {
          _this.count++;
            _this.getQuestion();
        }
        else
        {
            //console.log("gameEnd");
                //_this.input.enabled = false;
                // text = _this.add.text(_this.world.centerX, 450, '  Game Complete  ');

                // text.anchor.set(0.5);
                // text.align = 'center';

                // text.font = 'Arial Black';
                // text.fontSize = 70;
                // text.fontWeight = 'bold';
                // text.fill = '#FFFFF';

                // text.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
          

    
      
            //_this.state.start('level2');
            //baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            speaker1.destroy();
//            starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            speaker1.visible=false;
//            starsGroup1.visible=false;
        }
    },

    destroyEverything:function()
     {
         _this.cloud = null;
     _this.cloud1 = null;
          _this.cloud2 = null;
          _this.cloud3 = null;
          _this.cloud4 = null;
          _this.cloud5 = null;
          _this.cloud6 = null;
          _this.cloud7 = null;
          _this.cloud8 = null;
          _this.cloud9 = null;
          _this.cloud10 = null;
          _this.cloud11 = null;
          _this.cloud12 = null;
          _this.mainFlag = null;
          _this.opt1 = null;
          _this.opt2 = null;
          _this.opt3 = null;
          _this.opt4 = null;
          _this.opt5 = null;
          _this.opt6 = null;
          _this.opt7 = null;
          _this.opt8 = null;
          _this.opt9 = null;
          _this.opt10 = null;
          _this.opt11 = null;
          _this.opt12 = null;
          _this.wronggraphics1 = null;
          _this.wronggraphics2 = null;
          _this.wronggraphics3 = null;
          _this.wronggraphics4 = null;
          _this.wronggraphics5 = null;
          _this.wronggraphics6 = null;
          _this.wronggraphics7 = null;
          _this.wronggraphics8 = null;
          _this.wronggraphics9 = null;
          _this.wronggraphics10 = null;
          _this.wronggraphics11 = null;
          _this.wronggraphics12 = null;
          _this.flagGroup1.destroy();
          _this.flagGroup1 = null;
          _this.tween = null;
          _this.playQuestionSound = null;
          _this.src = null;

          _this.timer = null;
     },
    

    
    update:function(){

    },
    
  /*  speakeron:function(){
       _this.stopVoice();
       //console.log("questnoooo===1=="+_this.qArrays[_this.no1-1]);
       switch(_this.qArrays[_this.no1-1])
          {
             case 1 :if(window.languageSelected=="English")
                    E1a.play();
                    else if(window.languageSelected=="Hindi")
                    H1a.play();
                    else
                    K1a.play();
                    break;
             case 2:if(window.languageSelected=="English")
                    E1b.play();
                    else if(window.languageSelected=="Hindi")
                    H1b.play();
                    else
                    K1b.play();
                    break;    
               
             case 3:if(window.languageSelected=="English")
                    E2a.play();
                    else if(window.languageSelected=="Hindi")
                    H2a.play();
                    else
                    K2a.play();
                    break;  
             case 4 : if(window.languageSelected=="English")
                    E2b.play();
                    else if(window.languageSelected=="Hindi")
                    H2b.play();
                    else
                    K2b.play();
                    break;
             case 5 :if(window.languageSelected=="English")
                    E3b.play();
                    else if(window.languageSelected=="Hindi")
                    H3b.play();
                    else
                    K3b.play();
                    break; 
                
             case 6 :if(window.languageSelected=="English")
                    E3a.play();
                    else if(window.languageSelected=="Hindi")
                    H3a.play();
                    else
                    K3a.play();
                    break;  
                
             case 7 :if(window.languageSelected=="English")
                    E4a.play();
                    else if(window.languageSelected=="Hindi")
                    H4a.play();
                    else
                    K4a.play();
                    break;  
                
             case 8 :if(window.languageSelected=="English")
                    E4b.play();
                    else if(window.languageSelected=="Hindi")
                    H4b.play();
                    else
                    K4b.play();
                    break; 
                
             case 9:
             case 16:if(window.languageSelected=="English")
                    E5b.play();
                    else if(window.languageSelected=="Hindi")
                    H5b.play();
                    else
                    K5b.play();
                    break; 
                
             case 10:
             case 15:if(window.languageSelected=="English")
                    E5a.play();
                    else if(window.languageSelected=="Hindi")
                    H5a.play();
                    else
                    K5a.play();
                    break; 
                
             case 11:
             case 14:if(window.languageSelected=="English")
                    E6a.play();
                    else if(window.languageSelected=="Hindi")
                    H6a.play();
                    else
                    K6a.play();
                    break; 
                
             case 12:
             case 13:if(window.languageSelected=="English")
                    E6b.play();
                    else if(window.languageSelected=="Hindi")
                    H6b.play();
                    else
                    K6b.play();
                    break; 
                
             case 17:if(window.languageSelected=="English")
                    E7a.play();
                    else if(window.languageSelected=="Hindi")
                    H7a.play();
                    else
                    K7a.play();
                    break; 
                
             case 18:if(window.languageSelected=="English")
                    E7b.play();
                    else if(window.languageSelected=="Hindi")
                    H7b.play();
                    else
                    K7b.play();
                    break; 
                
             case 19:if(window.languageSelected=="English")
                    E8a.play();
                    else if(window.languageSelected=="Hindi")
                    H8a.play();
                    else
                    K8a.play();
                    break; 
                
             case 20:if(window.languageSelected=="English")
                    E8b.play();
                    else if(window.languageSelected=="Hindi")
                    H8b.play();
                    else
                    K8b.play();
                    break; 
                
             case 21:if(window.languageSelected=="English")
                    E9a.play();
                    else if(window.languageSelected=="Hindi")
                    H9a.play();
                    else
                    K9a.play();
                    break; 
                
             case 22:if(window.languageSelected=="English")
                    E9b.play();
                    else if(window.languageSelected=="Hindi")
                    H9b.play();
                    else
                    K9b.play();
                    break; 
                
             case 23:if(window.languageSelected=="English")
                    E10a.play();
                    else if(window.languageSelected=="Hindi")
                    H10a.play();
                    else
                    K10a.play();
                    break; 
                
             case 24:if(window.languageSelected=="English")
                    E10b.play();
                    else if(window.languageSelected=="Hindi")
                    H10b.play();
                    else
                    K10b.play();
                    break; 
                
             case 25:if(window.languageSelected=="English")
                    E11b.play();
                    else if(window.languageSelected=="Hindi")
                    H11b.play();
                    else
                    K11b.play();
                    break; 
                
             case 26:if(window.languageSelected=="English")
                    E11a.play();
                    else if(window.languageSelected=="Hindi")
                    H11a.play();
                    else
                    K11a.play();
                    break; 
                
             case 27:if(window.languageSelected=="English")
                    E12a.play();
                    else if(window.languageSelected=="Hindi")
                    H12a.play();
                    else
                    K12a.play();
                    break; 
                
             case 28:if(window.languageSelected=="English")
                    E12b.play();
                    else if(window.languageSelected=="Hindi")
                    H12b.play();
                    else
                    K12b.play();
                    break; 
                
             case 29:if(window.languageSelected=="English")
                    E13a.play();
                    else if(window.languageSelected=="Hindi")
                    H13a.play();
                    else
                    K13a.play();
                    break; 
                
             case 30:if(window.languageSelected=="English")
                    E13b.play();
                    else if(window.languageSelected=="Hindi")
                    H13b.play();
                    else
                    K13b.play();
                    break; 
                
             case 31:if(window.languageSelected=="English")
                    E14a.play();
                    else if(window.languageSelected=="Hindi")
                    H14a.play();
                    else
                    K14a.play();
                    break; 
                
             case 32:if(window.languageSelected=="English")
                    E14b.play();
                    else if(window.languageSelected=="Hindi")
                    H14b.play();
                    else
                    K14b.play();
                    break; 
                
             case 33:if(window.languageSelected=="English")
                    E15a.play();
                    else if(window.languageSelected=="Hindi")
                    H15a.play();
                    else
                    K15a.play();
                    break; 
                
             case 34:if(window.languageSelected=="English")
                    E15b.play();
                    else if(window.languageSelected=="Hindi")
                    H15b.play();
                    else
                    K15b.play();
                    break; 
                
             case 35:if(window.languageSelected=="English")
                    E16b.play();
                    else if(window.languageSelected=="Hindi")
                    H16b.play();
                    else
                    K16b.play();
                    break; 
                
             case 36:if(window.languageSelected=="English")
                    E16a.play();
                    else if(window.languageSelected=="Hindi")
                    H16a.play();
                    else
                    K16a.play();
                    break; 
                
             case 37:if(window.languageSelected=="English")
                    E17b.play();
                    else if(window.languageSelected=="Hindi")
                    H17b.play();
                    else
                    K17b.play();
                    break; 
                
             case 38:if(window.languageSelected=="English")
                    E17a.play();
                    else if(window.languageSelected=="Hindi")
                    H17a.play();
                    else
                    K17a.play();
                    break; 
                
             case 39:if(window.languageSelected=="English")
                    E18a.play();
                    else if(window.languageSelected=="Hindi")
                    H18a.play();
                    else
                    K18a.play();
                    break; 
                
             case 40:if(window.languageSelected=="English")
                    E18b.play();
                    else if(window.languageSelected=="Hindi")
                    H18b.play();
                    else
                    K18b.play();
                    break; 
                
             case 41:if(window.languageSelected=="English")
                    E19a.play();
                    else if(window.languageSelected=="Hindi")
                    H19a.play();
                    else
                    K19a.play();
                    break; 
                
             case 42:if(window.languageSelected=="English")
                    E19b.play();
                    else if(window.languageSelected=="Hindi")
                    H19b.play();
                    else
                    K19b.play();
                    break; 
                
             case 43:if(window.languageSelected=="English")
                    E20b.play();
                    else if(window.languageSelected=="Hindi")
                    H20b.play();
                    else
                    K20b.play();
                    break; 
                
             case 44:if(window.languageSelected=="English")
                    E20a.play();
                    else if(window.languageSelected=="Hindi")
                    H20a.play();
                    else
                    K20a.play();
                    break; 
                
             case 45:if(window.languageSelected=="English")
                    E21b.play();
                    else if(window.languageSelected=="Hindi")
                    H21b.play();
                    else
                    K21b.play();
                    break; 
                
             case 46:if(window.languageSelected=="English")
                    E21a.play();
                    else if(window.languageSelected=="Hindi")
                    H21a.play();
                    else
                    K21a.play();
                    break; 
                
             case 47:if(window.languageSelected=="English")
                    E22a.play();
                    else if(window.languageSelected=="Hindi")
                    H22a.play();
                    else
                    K22a.play();
                    break; 
                
             case 48:if(window.languageSelected=="English")
                    E22b.play();
                    else if(window.languageSelected=="Hindi")
                    H22b.play();
                    else
                    K22b.play();
                    break; 
               
             case 49:if(window.languageSelected=="English")
                    E23a.play();
                    else if(window.languageSelected=="Hindi")
                    H23a.play();
                    else
                    K23a.play();
                    break; 
                
             case 50:if(window.languageSelected=="English")
                    E23b.play();
                    else if(window.languageSelected=="Hindi")
                    H23b.play();
                    else
                    K23b.play();
                    break; 
                
             case 51:if(window.languageSelected=="English")
                    E24a.play();
                    else if(window.languageSelected=="Hindi")
                    H24a.play();
                    else
                    K24a.play();
                    break; 
                
             case 52:if(window.languageSelected=="English")
                    E24b.play();
                    else if(window.languageSelected=="Hindi")
                    H24b.play();
                    else
                    K24b.play();
                    break; 
                
             case 53:
             case 55:if(window.languageSelected=="English")
                    E25a.play();
                    else if(window.languageSelected=="Hindi")
                    H25a.play();
                    else
                    K25a.play();
                    break; 
                
             case 54:
             case 56:if(window.languageSelected=="English")
                    E25b.play();
                    else if(window.languageSelected=="Hindi")
                    H25b.play();
                    else
                    K25b.play();
                    break; 
                
          }
       
    },
    
    stopVoice:function(){
       E1a.stop();K1a.stop();H1a.stop();
       E1b.stop();K1b.stop();H1b.stop();
       E2a.stop();K2a.stop();H2a.stop();
       E2b.stop();K2b.stop();H2b.stop();
       E3a.stop();K3a.stop();H3a.stop();
       E3b.stop();K3b.stop();H3b.stop();
       E4a.stop();K4a.stop();H4a.stop();
       E4b.stop();K4b.stop();H4b.stop();
       E5a.stop();K5a.stop();H5a.stop();
       E5b.stop();K5b.stop();H5b.stop();
       E6a.stop();K6a.stop();H6a.stop();
       E6b.stop();K6b.stop();H6b.stop();
       E7a.stop();K7a.stop();H7a.stop();
       E7b.stop();K7b.stop();H7b.stop();
       E8a.stop();K8a.stop();H8a.stop();
       E8b.stop();K8b.stop();H8b.stop();
       E9a.stop();K9a.stop();H9a.stop();
       E9b.stop();K9b.stop();H9b.stop();
       E10a.stop();K10a.stop();H10a.stop();
       E10b.stop();K10b.stop();H10b.stop();
       E11a.stop();K11a.stop();H11a.stop();
       E11b.stop();K11b.stop();H11b.stop();
       E12a.stop();K12a.stop();H12a.stop();
       E12b.stop();K12b.stop();H12b.stop();
       E13a.stop();K13a.stop();H13a.stop();
       E13b.stop();K13b.stop();H13b.stop();
       E14a.stop();K14a.stop();H14a.stop();
       E14b.stop();K14b.stop();H14b.stop();
       E15a.stop();K15a.stop();H15a.stop();
       E15b.stop();K15b.stop();H15b.stop();
       E16a.stop();K16a.stop();H16a.stop();
       E16b.stop();K16b.stop();H16b.stop();
       E17a.stop();K17a.stop();H17a.stop();
       E17b.stop();K17b.stop();H17b.stop();
       E18a.stop();K18a.stop();H18a.stop();
       E18b.stop();K18b.stop();H18b.stop();
       E19a.stop();K19a.stop();H19a.stop();
       E19b.stop();K19b.stop();H19b.stop();
       E20a.stop();K20a.stop();H20a.stop();
       E20b.stop();K20b.stop();H20b.stop();
       E21a.stop();K21a.stop();H21a.stop();
       E21b.stop();K21b.stop();H21b.stop();
       E22a.stop();K22a.stop();H22a.stop();
       E22b.stop();K22b.stop();H22b.stop();
       E23a.stop();K23a.stop();H23a.stop();
       E23b.stop();K23b.stop();H23b.stop();
       E24a.stop();K24a.stop();H24a.stop();
       E24b.stop();K24b.stop();H24b.stop();
       E25a.stop();K25a.stop();H25a.stop();
       E25b.stop();K25b.stop();H25b.stop();   
    }
*/

 getVoice:function()
     {    
          _this.stopVoice();  
          
          _this.playQuestionSound = document.createElement('audio');
          _this.src = document.createElement('source');
                    
          switch(_this.qArrays[_this.no1])
            {
                case 1 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E1a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H1a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K1a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E1a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E1a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E1a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E1a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E1a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A1.mp3");
                              }
                              break;
                case 2:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E1b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H1b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K1b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E1b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E1b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E1b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E1b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E1b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A2.mp3");
                              }
                              break;
                case 3:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E2a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H2a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K2a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E2a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E2a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E2a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E2a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E2a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A3.mp3");
                              }
                              break;
                case 4 : 
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E2b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H2b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K2b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E2b.mp3");
                              }
							  else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E2b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E2b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E2b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E2b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E2b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A4.mp3");
                              }
                              break;
                case 5 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E3b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H3b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K3b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E3b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E3b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E3b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E3b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E3b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A7.mp3");
                              }
                              break;
                    
                case 6 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E3a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H3a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K3a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E3a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E3a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E3a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E3a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E3a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A5.mp3");
                              }
                              break;
                    
                case 7 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E4a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H4a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K4a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E4a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E4a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E4a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E4a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E4a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A8.mp3");
                              }
                              break;
                    
                case 8 :
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E4b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H4b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K4b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E4b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E4b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E4b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E4b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E4b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A9.mp3");
                              }
                              break;
                    
                case 9:
                case 16:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E5b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H5b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K5b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E5b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E5b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E5b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E5b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E5b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A11.mp3");
                              }
                              break;
                    
                case 10:
                case 15:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E5a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H5a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K5a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E5a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E5a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E5a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E5a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E5a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A10.mp3");
                              }
                              break;
                    
                case 11:
                case 14:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E6a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H6a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K6a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E6a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E6a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E6a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E6a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E6a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A12.mp3");
                              }
                              break;
                    
                case 12:
                case 13:
                              if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E6b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H6b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K6b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E6b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E6b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E6b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E6b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E6b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A13.mp3");
                              }
                              break;
                    
                case 17:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E7a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H7a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K7a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E7a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E7a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E7a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E7a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E7a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A14.mp3");
                              }
                              break;
                    
                case 18:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E7b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H7b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K7b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E7b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E7b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E7b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E7b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E7b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A15.mp3");
                              }
                              break;
                    
                case 19:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E8a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H8a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K8a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E8a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E8a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E8a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E8a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E8a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A16.mp3");
                              }
                              break;
                    
                case 20:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E8b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H8b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K8b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E8b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E8b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E8b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E8b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E8b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A17.mp3");
                              }
                              break;
                    
                case 21:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E9a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H9a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K9a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E9a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E9a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E9a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E9a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E9a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A18.mp3");
                              }
                              break;
                    
                case 22:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E9b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H9b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K9b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E9b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E9b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E9b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E9b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E9b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A19.mp3");
                              }
                              break;
                    
                case 23:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E10a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H10a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K10a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E10a.mp3");
                              }
							   else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E10a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E10a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E10a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E10a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A20.mp3");
                              }
                              break; 
                    
                case 24:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E10b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H10b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K10b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E10b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E10b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E10b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E10b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E10b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A21.mp3");
                              }
                              break; 
                    
                case 25:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E11b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H11b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K11b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E11b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E11b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E11b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E11b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E11b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A23.mp3");
                              }
                              break;
                    
                case 26:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E11a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H11a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K11a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E11a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E11a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E11a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E11a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E11a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A22.mp3");
                              }
                              break; 
                    
                case 27:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E12a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H12a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K12a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E12a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E12a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E12a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E12a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E12a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A24.mp3");
                              }
                              break;
                    
                case 28:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E12b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H12b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K12b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E12b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E12b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E12b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E12b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E12b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A25.mp3");
                              }
                              break; 
                    
                case 29:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E13a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H13a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K13a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E13a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E13a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E13a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E13a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E13a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A26.mp3");
                              }
                              break;
                    
                case 30:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E13b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H13b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K13b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E13b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E13b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E13b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E13b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E13b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A27.mp3");
                              }
                              break; 
                    
                case 31:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E14a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H14a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K14a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E14a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E14a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E14a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E14a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E14a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A28.mp3");
                              }
                              break; 
                    
                case 32:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E14b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H14b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K14b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E14b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E14b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E14b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E14b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E14b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A29.mp3");
                              }
                              break;
                    
                case 33:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E15a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H15a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K15a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E15a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E15a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E15a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E15a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E15a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A30.mp3");
                              }
                              break;
                    
                case 34:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E15b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H15b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K15b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E15b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E15b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E15b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E15b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E15b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A31.mp3");
                              }
                              break;
                    
                case 35:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E16b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H16b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K16b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E16b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E16b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E16b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E16b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E16b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A33.mp3");
                              }
                              break;
                    
                case 36:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E16a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H16a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K16a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E16a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E16a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E16a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E16a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E16a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A32.mp3");
                              }
                              break;
                    
                case 37:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E17b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H17b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K17b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E17b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E17b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E17b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E17b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E17b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A35.mp3");
                              }
                              break;
                    
                case 38:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E17a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H17a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K17a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E17a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E17a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E17a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E17a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E17a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A34.mp3");
                              }
                              break; 
                    
                case 39:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E18a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H18a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K18a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E18a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E18a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E18a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E18a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E18a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A36.mp3");
                              }
                              break;
                    
                case 40:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E18b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H18b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K18b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E18b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E18b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E18b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E18b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E18b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A37.mp3");
                              }
                              break;
                    
                case 41:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E19a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H19a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K19a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E19a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E19a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E19a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E19a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E19a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A38.mp3");
                              }
                              break; 
                    
                case 42:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E19b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H19b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K19b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E19b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E19b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E19b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E19b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E19b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A39.mp3");
                              }
                              break; 
                    
                case 43:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E20b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H20b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K20b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E20b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E20b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E20b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E20b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E20b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A41.mp3");
                              }
                              break; 
                    
                case 44:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E20a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H20a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K20a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E20a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E20a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E20a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E20a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E20a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A40.mp3");
                              }
                              break; 
                    
                case 45:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E21b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H21b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K21b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E21b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E21b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E21b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E21b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E21b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A45.mp3");
                              }
                              break;
                    
                case 46:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E21a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H21a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K21a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E21a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E21a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E21a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E21a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E21a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A44.mp3");
                              }
                              break;
                    
                case 47:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E22a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H22a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K22a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E22a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E22a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E22a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E22a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E22a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A46.mp3");
                              }
                              break; 
                    
                case 48:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E22b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H22b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K22b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E22b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E22b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E22b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E22b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E22b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A47.mp3");
                              }
                              break;
                  
                case 49:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E23a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H23a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K23a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E23a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E23a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E23a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E23a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E23a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A48.mp3");
                              }
                              break;
                    
                case 50:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E23b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H23b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K23b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E23b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E23b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E23b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E23b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E23b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A49.mp3");
                              }
                              break; 
                    
                case 51:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E24a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H24a.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K24a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E24a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E24a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E24a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E24a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E24a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A50.mp3");
                              }
                              break; 
                    
                case 52:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E24b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H24b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K24b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E24b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E24b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E24b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E24b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E24b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A51.mp3");
                              }
                              break;
                    
                case 53:
                case 55:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E25a.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H25a.mp3");
                              } 
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K25a.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E25a.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E25a.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E25a.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E25a.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E25a.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A52.mp3");
                              }
                              break; 
                    
                case 54:
                case 56:
                         if(window.languageSelected == "English")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/E25b.mp3");
                              }
                              else if(window.languageSelected == "Hindi")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/H25b.mp3");
                              }
                              else if(window.languageSelected == "Kannada")
                              {
                                   _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/K25b.mp3");
                              }
                              else if(window.languageSelected == "Gujarati")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.1A/E25b.mp3");
                              }
							  else if(window.languageSelected == "Marathi")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Marathi/E25b.mp3");
                              }
							  else if(window.languageSelected == "Telugu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Telugu/E25b.mp3");
                              }
							  else if(window.languageSelected == "Tamil")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Tamil/E25b.mp3");
                              }
							  else if(window.languageSelected == "Urdu")
                              {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/Urdu/E25b.mp3");
                              }
                              else
                              {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/2.1A/2.1A53.mp3");
                              }
                              break;
                    
            }
          
          
          //_this.playQuestionSound.play();
          //_this.playQuestionSound.onStop.add(function(){_this.playQuestionSound=null;},this);
          
          
          console.log(_this.playQuestionSound);
          
          _this.playQuestionSound.appendChild(_this.src);
          _this.playQuestionSound.play();

          if(window.languageSelected == "Odiya")
           _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
          
     
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
         /* _this.stopVoice();
          _this.destroyEverything();
          _this.time.events.removeAll();
          _this.playQuestionSound = null;
          _this.celebrationSound = null;
          _this.clickSound = null;
          _this.noofAttempts = null;
          _this.AnsTimerCount = null;
          _this.firstTime = null;
          
          _this.shake = null;

          _this.objectGroup = null;
        _this.rightCount = null;
        _this.no11 = null;
        _this.rno11 = null;
        _this.vno11 = null;
        _this.no22 = null;
        _this.count=null;
        _this.count1=null;
        _this.celebration= null;
          
          _this.starsGroup = null;
          _this.flagGroup = null;
          
        _this.qArrays = null;
        _this.qArrays1 = null;
        _this.qArrays2 = null;
        

      
        _this.background = null;
          
          _this.backbtn.events.onInputDown.removeAll();
          _this.backbtn = null;
          
          _this.speakerbtn.events.onInputDown.removeAll();
          _this.speakerbtn = null;

          

          _this = null;*/

         /* _this.world.onChildInputDown.removeAll();
        _this.world.removeChildren(0, _this.world.length);

          _this = null;*/

          _this.stopVoice();


     }
    
};