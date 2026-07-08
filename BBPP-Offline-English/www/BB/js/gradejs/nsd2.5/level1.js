Game.nsd2_5level1=function(){};
    
    
    

Game.nsd2_5level1.prototype={
    init:function(game)
    {
        _this = this;
       
        telInitializer.gameIdInit("NSD2_5",gradeSelected);
       
    },

    preload:function(game){
  if(!window.grade5NSF7){

            window.grade5NSF7 = true;

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

            this.load.atlas('nsd2_5_grid',window.baseUrl+'assets/gradeAssets/nsd2.5/box10X10.png',window.baseUrl+'json/gradeJson/nsd2.5/box10X10.json');
        this.load.image('nsd2_5_block',window.baseUrl+'assets/gradeAssets/nsd2.5/b10.png');
        this.load.image('nsd2_5_block2',window.baseUrl+'assets/gradeAssets/nsd2.5/bb10.png');
        this.load.image('nsd2_5_block3',window.baseUrl+'assets/gradeAssets/nsd2.5/single box.png');
        this.load.atlas('nsd2_5_block4',window.baseUrl+'assets/gradeAssets/nsd2.5/single box1.png',window.baseUrl+'json/gradeJson/nsd2.5/single box1.json');
        this.load.atlas('nsd2_5_value',window.baseUrl+'assets/gradeAssets/nsd2.5/image2.png',window.baseUrl+'json/gradeJson/nsd2.5/image2.json');
        this.load.image('nsd2_5_stack',window.baseUrl+'assets/gradeAssets/nsd2.5/wight box.png');
        this.load.image('nsd2_5_stack2',window.baseUrl+'assets/gradeAssets/nsd2.5/wight box2.png');
        
        this.load.atlas('nsd2_5_egg',window.baseUrl+'assets/gradeAssets/nsd2.5/Egg game/egg.png',window.baseUrl+'json/gradeJson/nsd2.5/egg.json');
        this.load.image('nsd2_5_violetbox',window.baseUrl+'assets/gradeAssets/nsd2.5/Egg game/pink box.png');
            
        //second 3 level assets
        
        //this.load.image('nsd2_5_Score',window.baseUrl+'assets/gradeAssets/nsd2.5/Egg game/Score box.png');
       

       
        this.load.atlas('nsd2_5_rightBtn',window.baseUrl+'assets/gradeAssets/nsd2.5/Egg game/1.png' ,window.baseUrl+'json/gradeJson/nsd2.5/1.json');
        this.load.atlas('nsd2_5_eraser',window.baseUrl+'assets/gradeAssets/nsd2.5/Egg game/2.png' ,window.baseUrl+'json/gradeJson/nsd2.5/2.json');
        this.load.atlas('nsd2_5_calNum',window.baseUrl+'assets/gradeAssets/nsd2.5/Egg game/calNum.png' ,window.baseUrl+'json/gradeJson/nsd2.5/calNum.json');
        this.load.atlas('nsd2_5_score',window.baseUrl+'assets/gradeAssets/nsd2.5/b1.png' ,window.baseUrl+'json/gradeJson/nsd2.5/b1.json');
        this.load.image('nsd2_5_footer',window.baseUrl+'assets/gradeAssets/nsd2.5/Egg game/footer.png');
        this.load.image('nsd2_5_line',window.baseUrl+'assets/gradeAssets/nsd2.5/6.png');
//        this.load.atlas('nsd2_5_rightBtn',window.baseUrl+'assets/gradeAssets/nsd2.5/Egg game/egg.png' ,window.baseUrl+'json/gradeJson/nsd2.5/tickBtn.json');
        //this.load.atlas('nsd2_5_eraser','assets/gameAssets/eraser.png' ,window.baseUrl+'json/gradeJson/nsd2.5/eraser.json');
      }

    },

    create:function(game){
        _this.bg1=null;
_this.starsGroup=0;
_this.no1=0;
_this.mainFlag=0;
_this.opt1=null;
_this.opt2=null;
_this.opt3=null;
_this.opt4=null;
_this.opt9=null;
_this.no2=0;
_this.count1=0;
_this.count=0;
_this.qArrays=null; 
_this.qArrays1=null;
_this.qArrays2=null;
_this.qArrays3=null;
_this.qArrays4=null;
_this.qArrays5=null;
_this.flagmain11Anim=0;
_this.animlev1=0;
//_this.a1=0;
_this.Sprite=0;
_this.optionsgrp=0;
_this.wronggraphics1=0;_this.wronggraphics2=0;_this.wronggraphics3=0;
_this.wrngGraphicgrp=0;
_this.boxb1;
_this.counterText;
_this.counterText1;
_this.counterText2;
_this.maingroup;
_this.value1=7;
_this.value2=11;
_this.value3=13;
_this.i=0;_this.j=0;_this.k=0;
_this.speaker=0;
_this.w1=0;_this.w2=0;
_this.AnimOpt=0;_this.AnimOpt2=0;_this.AnimOpt3=0;
_this.tick=0;
_this.numGroup=0;
_this.enterTxt=0;
_this.txtbox=0;
_this.grpnum=new Array();
_this.boxclick=0;
_this.minutes=0;_this.seconds=0;_this.counterForTimer=0;
_this.box=0;
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;
        _this.a=0;
        _this.b=0;
        _this.count3=0;
        _this.count4=0;

        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount=0;

        //baudio.play(); 
        //baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7];
        _this.qArrays = this.shuffle(_this.qArrays);
        _this.qArrays1 = new Array();
        _this.qArrays1 = [8,9,10,11,12,13,14];
        _this.qArrays1 = this.shuffle(_this.qArrays1);
       
       
       // counterText=0;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

         _this.bg1 = this.add.sprite(0,0, 'nsd1_5_bg');
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
    
    _this.TopBar.scale.setTo(1,1.1);

    this.clickSound = this.add.audio('ClickSound');

    _this.backbtn = this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopVoice();
       this.clickSound = this.add.audio('ClickSound');
            _this.clickSound.play();
       _this.state.start('grade1levelSelectionScreen',true,false);
    },this);
  
   /* _this.dottedBox=this.add.sprite(70,7,'dottedBox');
    _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
    _this.numTxt1.anchor.setTo(0.5);
    _this.numTxt1.align = 'center';
    _this.numTxt1.font = 'Alte Haas Grotesk';
    _this.numTxt1.fontSize = 12;
    _this.numTxt1.fill = '#ffffff';
    _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
    _this.dottedBox.addChild(_this.numTxt1);
        
    _this.numTxt2 = this.add.text(220,24, 'Subtraction');
    _this.numTxt2.anchor.setTo(0.5);
    _this.numTxt2.align = 'center';
    _this.numTxt2.font = 'Alte Haas Grotesk';
    _this.numTxt2.fontSize = 18;
    _this.numTxt2.fill = '#ffffff';
    _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
   _this.timebg=this.add.sprite(305,6,'Level42C_timer');
    _this.timebg.scale.setTo(1.2,1);
        
    _this.timeDisplay = this.add.text(336,22,_this.minutes + ' : '+ _this.seconds);
    
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = 'center';
    _this.timeDisplay.font = 'myfont';
    _this.timeDisplay.fontSize = 20;
    _this.timeDisplay.fontWeight = 'Normal';
    _this.timeDisplay.fill = '#ADFF2F';
//        _this.footer = this.add.sprite(0,480,'nsd2_5_footer');
       // footer.scale.setTo(1,1);
        _this.speaker = this.add.sprite(600,5,'grade11_speaker');
        _this.speaker.inputEnabled = true;
        _this.speaker.events.onInputDown.add(function()
        {
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            _this.getVoice();
        },_this);
         _this.generateStarsForTheScene(6)
         
       
             this.getQuestion();
        
              
    },
    /***********************************getquestion************************/
    getQuestion:function(target)
    {
        if(!_this.timer)
        {
          _this.sceneCount++;
          _this.noofAttempts=0;
          _this.AnsTimerCount=0;
            _this.timer = _this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
      }

        _this.timer1 = this.time.create(false);
        _this.timer1.loop(1000, function(){
                  this.updateTimer();
        }, this);
        _this.timer1.start();
        _this.grpnum=new Array();
        //_this.speaker.inputEnabled=false;
//        _this.speaker.input.useHandCursor = true;

        if(_this.no1==0)
        {
            //_this.getVoice(); 
        }
        else if(_this.no1==3)
        {
            _this.getVoice(); 
        }
     
        console.log("get"+_this.no1);
        console.log("getq"+_this.qArrays[_this.no1]);
        if(_this.no1<3)
            {
              switch(_this.qArrays[_this.no1])
                    {
                      case 1: console.log("case1"); 
                            this.gotoFirstQuestion();
                            break;  
                     case 2:console.log("case2");
                            this.gotoSecondQuestion();
                             break;
                     case 3: console.log("case3");
                            this.gotoThirdQuestion();
                            break;
                     case 4: console.log("case3");
                            this.gotoFourthQuestion();
                            break;
                     case 5: console.log("case3");
                            this.gotoFifthQuestion();
                            break;
                     case 6: console.log("case3");
                            this.gotosixthQuestion();
                            break;
                     case 7: console.log("case3");
                            this.gotoseventhQuestion();
                            break;
                    }
            }
                else
                    {
                        switch(_this.qArrays1[_this.no1])
                            {
                     case 8: console.log("case3");
                            this.gotoeightQuestion();
                            break;
                     case 9: console.log("case3");
                            this.gotonineQuestion();
                            break;
                     case 10: console.log("case3");
                            this.gototenQuestion();
                            break;
                     case 11: console.log("case3");
                            this.gotoelevenQuestion();
                            break;
                     case 12: console.log("case3");
                            this.gototewlveQuestion();
                            break;
                     case 13: console.log("case3");
                            this.gotothirteenQuestion();
                            break;
                     case 14: console.log("case3");
                            this.gotoforteenQuestion();
                            break;       
                            }
                    }
    },
     addQuestion:function(no2)
    {

           console.log("here");
           this.time.events.add(2000, function(){ 
               if(_this.Question<=7)
            {
             _this.movegroup.destroy();
                       _this.stackgrp.destroy();
                       _this.blockgrp.destroy();
                       _this.bigblock.destroy();
                       _this.bigblock2.destroy();
                       _this.bigblock3.destroy();
                       _this.valuegrp.destroy();   
                       _this.numGroup.destroy();   
            }   
              else if(_this.Question>7)
                   {
                        _this.numGroup.destroy();
                       _this.group1.destroy();
                       _this.violetbox.destroy();
                       _this.egggrp.destroy();
                       _this.selectedBox=null;
                   }
           
        if(_this.no1<6)
        {
            _this.count++;
            this.getQuestion();
        }
        else
        {
            console.log("gameEnd");
                //this.input.enabled = false;
                // text = this.add.text(this.world.centerX, 450, '  Game Complete  ');

                // text.anchor.set(0.5);
                // text.align = 'center';

                // text.font = 'Arial Black';
                // text.fontSize = 70;
                // text.fontWeight = 'bold';
                // text.fill = '#FFFFF';

                // text.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
        
               //this.state.start('level2');
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
            }, this);

    },
    stack:function()
    {
        _this.blockgrp=_this.add.group();
         _this.grid=_this.add.sprite(this.world.centerX+100,this.world.centerY+40,'nsd2_5_grid');
         _this.grid.anchor.set(0.5);
         _this.grid.alpha=1;
        _this.grid.scale.setTo(1,1);
        
        _this.stackgrp = _this.add.group();
        _this.stacks=_this.add.sprite(200,310,'nsd2_5_stack2');
         _this.stacks.anchor.set(0.5);
         _this.stacks.scale.setTo(1.5,1.4);
        
         _this.bigblock=_this.add.sprite(200,236,'nsd2_5_block');
        _this.bigboxX=_this.bigblock.x;
        _this.bigboxY=_this.bigblock.y;
          _this.bigblock.anchor.set(0.5);
         _this.bigblock.scale.setTo(0.6,0.6);
          _this.bigblock.inputEnabled=true;
      
          _this.bigblock2=_this.add.sprite(200,395,'nsd2_5_block2');
        _this.bigbox2X=_this.bigblock2.x;
        _this.bigbox2Y=_this.bigblock2.y;
          _this.bigblock2.anchor.set(0.5);
        _this.bigblock2.scale.setTo(0.6,0.6);
         _this.bigblock2.inputEnabled=true;
       
         _this.bigblock3=_this.add.sprite(200,470,'nsd2_5_block3');
        _this.bigbox3X=_this.bigblock3.x;
        _this.bigbox3Y=_this.bigblock3.y;
          _this.bigblock3.anchor.set(0.5);
        _this.bigblock3.scale.setTo(0.6,0.6);
         _this.bigblock3.inputEnabled=true;
        
        _this.blockgrp.add(_this.stacks);
        _this.stackgrp.add(_this.grid);
        
        _this.movegroup= _this.add.group();
        _this.b1=_this.add.sprite(403,134,'nsd2_5_block4');
        _this.b1.frame=1;
        _this.b1.anchor.set(0.5);
        _this.b1.scale.setTo(1,1);
        _this.b2=_this.add.sprite(443,134,'nsd2_5_block4');
        _this.b2.frame=1;
        _this.b2.anchor.set(0.5);
        _this.b2.scale.setTo(1,1);
        _this.b3=_this.add.sprite(482,134,'nsd2_5_block4');
        _this.b3.frame=1;
        _this.b3.anchor.set(0.5);
        _this.b3.scale.setTo(1,1);
        _this.b4=_this.add.sprite(521,134,'nsd2_5_block4');
        _this.b4.frame=1;
        _this.b4.anchor.set(0.5);
        _this.b4.scale.setTo(1,1);
        _this.b5=_this.add.sprite(560,134,'nsd2_5_block4');
        _this.b5.frame=1;
        _this.b5.anchor.set(0.5);
        _this.b5.scale.setTo(1,1);
        _this.b6=_this.add.sprite(599,134,'nsd2_5_block4');
        _this.b6.frame=1;
        _this.b6.anchor.set(0.5);
        _this.b6.scale.setTo(1,1);
        _this.b7=_this.add.sprite(638,134,'nsd2_5_block4');
        _this.b7.frame=1;
        _this.b7.anchor.set(0.5);
        _this.b7.scale.setTo(1,1);
        _this.b8=_this.add.sprite(677,134,'nsd2_5_block4');
        _this.b8.frame=1;
        _this.b8.anchor.set(0.5);
        _this.b8.scale.setTo(1,1);
        _this.b9=_this.add.sprite(716,134,'nsd2_5_block4');
        _this.b9.frame=1;
        _this.b9.anchor.set(0.5);
        _this.b9.scale.setTo(1,1);
        _this.b10=_this.add.sprite(755,134,'nsd2_5_block4');
        _this.b10.frame=1;
        _this.b10.anchor.set(0.5);
        _this.b10.scale.setTo(1,1);
        
        _this.b11=_this.add.sprite(403,173,'nsd2_5_block4');
        _this.b11.frame=1;
        _this.b11.anchor.set(0.5);
        _this.b11.scale.setTo(1,1);
        _this.b12=_this.add.sprite(443,173,'nsd2_5_block4');
        _this.b12.frame=1;
        _this.b12.anchor.set(0.5);
        _this.b12.scale.setTo(1,1);
        _this.b13=_this.add.sprite(482,173,'nsd2_5_block4');
        _this.b13.frame=1;
        _this.b13.anchor.set(0.5);
        _this.b13.scale.setTo(1,1);
        _this.b14=_this.add.sprite(521,173,'nsd2_5_block4');
        _this.b14.frame=1;
        _this.b14.anchor.set(0.5);
        _this.b14.scale.setTo(1,1);
        _this.b15=_this.add.sprite(560,173,'nsd2_5_block4');
        _this.b15.frame=1;
        _this.b15.anchor.set(0.5);
        _this.b15.scale.setTo(1,1);
        _this.b16=_this.add.sprite(599,173,'nsd2_5_block4');
        _this.b16.frame=1;
        _this.b16.anchor.set(0.5);
        _this.b16.scale.setTo(1,1);
        _this.b17=_this.add.sprite(638,173,'nsd2_5_block4');
        _this.b17.frame=1;
        _this.b17.anchor.set(0.5);
        _this.b17.scale.setTo(1,1);
        _this.b18=_this.add.sprite(677,173,'nsd2_5_block4');
        _this.b18.frame=1;
        _this.b18.anchor.set(0.5);
        _this.b18.scale.setTo(1,1);
        _this.b19=_this.add.sprite(716,173,'nsd2_5_block4');
        _this.b19.frame=1;
        _this.b19.anchor.set(0.5);
        _this.b19.scale.setTo(1,1);
        _this.b20=_this.add.sprite(755,173,'nsd2_5_block4');
        _this.b20.frame=1;
        _this.b20.anchor.set(0.5);
        _this.b20.scale.setTo(1,1);
        
        _this.b21=_this.add.sprite(403,212,'nsd2_5_block4');
        _this.b21.frame=1;
        _this.b21.anchor.set(0.5);
        _this.b21.scale.setTo(1,1);
        _this.b22=_this.add.sprite(443,212,'nsd2_5_block4');
        _this.b22.frame=1;
        _this.b22.anchor.set(0.5);
        _this.b22.scale.setTo(1,1);
        _this.b23=_this.add.sprite(482,212,'nsd2_5_block4');
        _this.b23.frame=1;
        _this.b23.anchor.set(0.5);
        _this.b23.scale.setTo(1,1);
        _this.b24=_this.add.sprite(521,212,'nsd2_5_block4');
        _this.b24.frame=1;
        _this.b24.anchor.set(0.5);
        _this.b24.scale.setTo(1,1);
        _this.b25=_this.add.sprite(560,212,'nsd2_5_block4');
        _this.b25.frame=1;
        _this.b25.anchor.set(0.5);
        _this.b25.scale.setTo(1,1);
        _this.b26=_this.add.sprite(599,212,'nsd2_5_block4');
        _this.b26.frame=1;
        _this.b26.anchor.set(0.5);
        _this.b26.scale.setTo(1,1);
        _this.b27=_this.add.sprite(638,212,'nsd2_5_block4');
        _this.b27.frame=1;
        _this.b27.anchor.set(0.5);
        _this.b27.scale.setTo(1,1);
        _this.b28=_this.add.sprite(677,212,'nsd2_5_block4');
        _this.b28.frame=1;
        _this.b28.anchor.set(0.5);
        _this.b28.scale.setTo(1,1);
        _this.b29=_this.add.sprite(716,212,'nsd2_5_block4');
        _this.b29.frame=1;
        _this.b29.anchor.set(0.5);
        _this.b29.scale.setTo(1,1);
        _this.b30=_this.add.sprite(755,212,'nsd2_5_block4');
        _this.b30.frame=1;
        _this.b30.anchor.set(0.5);
        _this.b30.scale.setTo(1,1);
        
        _this.b31=_this.add.sprite(403,251,'nsd2_5_block4');
        _this.b31.frame=1;
        _this.b31.anchor.set(0.5);
        _this.b31.scale.setTo(1,1);
        _this.b32=_this.add.sprite(443,251,'nsd2_5_block4');
        _this.b32.frame=1;
        _this.b32.anchor.set(0.5);
        _this.b32.scale.setTo(1,1);
        _this.b33=_this.add.sprite(482,251,'nsd2_5_block4');
        _this.b33.frame=1;
        _this.b33.anchor.set(0.5);
        _this.b33.scale.setTo(1,1);
        _this.b34=_this.add.sprite(521,251,'nsd2_5_block4');
        _this.b34.frame=1;
        _this.b34.anchor.set(0.5);
        _this.b34.scale.setTo(1,1);
        _this.b35=_this.add.sprite(560,251,'nsd2_5_block4');
        _this.b35.frame=1;
        _this.b35.anchor.set(0.5);
        _this.b35.scale.setTo(1,1);
        _this.b36=_this.add.sprite(599,251,'nsd2_5_block4');
        _this.b36.frame=1;
        _this.b36.anchor.set(0.5);
        _this.b36.scale.setTo(1,1);
        _this.b37=_this.add.sprite(638,251,'nsd2_5_block4');
        _this.b37.frame=1;
        _this.b37.anchor.set(0.5);
        _this.b37.scale.setTo(1,1);
        _this.b38=_this.add.sprite(677,251,'nsd2_5_block4');
        _this.b38.frame=1;
        _this.b38.anchor.set(0.5);
        _this.b38.scale.setTo(1,1);
        _this.b39=_this.add.sprite(716,251,'nsd2_5_block4');
        _this.b39.frame=1;
        _this.b39.anchor.set(0.5);
        _this.b39.scale.setTo(1,1);
        _this.b40=_this.add.sprite(755,251,'nsd2_5_block4');
        _this.b40.frame=1;
        _this.b40.anchor.set(0.5);
        _this.b40.scale.setTo(1,1);
        
        _this.b41=_this.add.sprite(403,290,'nsd2_5_block4');
        _this.b41.frame=1;
        _this.b41.anchor.set(0.5);
        _this.b41.scale.setTo(1,1);
        _this.b42=_this.add.sprite(443,290,'nsd2_5_block4');
        _this.b42.frame=1;
        _this.b42.anchor.set(0.5);
        _this.b42.scale.setTo(1,1);
        _this.b43=_this.add.sprite(482,290,'nsd2_5_block4');
        _this.b43.frame=1;
        _this.b43.anchor.set(0.5);
        _this.b43.scale.setTo(1,1);
        _this.b44=_this.add.sprite(521,290,'nsd2_5_block4');
        _this.b44.frame=1;
        _this.b44.anchor.set(0.5);
        _this.b44.scale.setTo(1,1);
        _this.b45=_this.add.sprite(560,290,'nsd2_5_block4');
        _this.b45.frame=1;
        _this.b45.anchor.set(0.5);
        _this.b45.scale.setTo(1,1);
        _this.b46=_this.add.sprite(599,290,'nsd2_5_block4');
        _this.b46.frame=1;
        _this.b46.anchor.set(0.5);
        _this.b46.scale.setTo(1,1);
        _this.b47=_this.add.sprite(638,290,'nsd2_5_block4');
        _this.b47.frame=1;
        _this.b47.anchor.set(0.5);
        _this.b47.scale.setTo(1,1);
        _this.b48=_this.add.sprite(677,290,'nsd2_5_block4');
        _this.b48.frame=1;
        _this.b48.anchor.set(0.5);
        _this.b48.scale.setTo(1,1);
        _this.b49=_this.add.sprite(716,290,'nsd2_5_block4');
        _this.b49.frame=1;
        _this.b49.anchor.set(0.5);
        _this.b49.scale.setTo(1,1);
        _this.b50=_this.add.sprite(755,290,'nsd2_5_block4');
        _this.b50.frame=1;
        _this.b50.anchor.set(0.5);
        _this.b50.scale.setTo(1,1);
        
        _this.b51=_this.add.sprite(403,329,'nsd2_5_block4');
        _this.b51.frame=1;
        _this.b51.anchor.set(0.5);
        _this.b51.scale.setTo(1,1);
        _this.b52=_this.add.sprite(443,329,'nsd2_5_block4');
        _this.b52.frame=1;
        _this.b52.anchor.set(0.5);
        _this.b52.scale.setTo(1,1);
        _this.b53=_this.add.sprite(482,329,'nsd2_5_block4');
        _this.b53.frame=1;
        _this.b53.anchor.set(0.5);
        _this.b53.scale.setTo(1,1);
        _this.b54=_this.add.sprite(521,329,'nsd2_5_block4');
        _this.b54.frame=1;
        _this.b54.anchor.set(0.5);
        _this.b54.scale.setTo(1,1);
        _this.b55=_this.add.sprite(560,329,'nsd2_5_block4');
        _this.b55.frame=1;
        _this.b55.anchor.set(0.5);
        _this.b55.scale.setTo(1,1);
        _this.b56=_this.add.sprite(599,329,'nsd2_5_block4');
        _this.b56.frame=1;
        _this.b56.anchor.set(0.5);
        _this.b56.scale.setTo(1,1);
        _this.b57=_this.add.sprite(638,329,'nsd2_5_block4');
        _this.b57.frame=1;
        _this.b57.anchor.set(0.5);
        _this.b57.scale.setTo(1,1);
        _this.b58=_this.add.sprite(677,329,'nsd2_5_block4');
        _this.b58.frame=1;
        _this.b58.anchor.set(0.5);
        _this.b58.scale.setTo(1,1);
        _this.b59=_this.add.sprite(716,329,'nsd2_5_block4');
        _this.b59.frame=1;
        _this.b59.anchor.set(0.5);
        _this.b59.scale.setTo(1,1);
        _this.b60=_this.add.sprite(755,329,'nsd2_5_block4');
        _this.b60.frame=1;
        _this.b60.anchor.set(0.5);
        _this.b60.scale.setTo(1,1);
        
        _this.b61=_this.add.sprite(403,368,'nsd2_5_block4');
        _this.b61.frame=1;
        _this.b61.anchor.set(0.5);
        _this.b61.scale.setTo(1,1);
        _this.b62=_this.add.sprite(443,368,'nsd2_5_block4');
        _this.b62.frame=1;
        _this.b62.anchor.set(0.5);
        _this.b62.scale.setTo(1,1);
        _this.b63=_this.add.sprite(482,368,'nsd2_5_block4');
        _this.b63.frame=1;
        _this.b63.anchor.set(0.5);
        _this.b63.scale.setTo(1,1);
        _this.b64=_this.add.sprite(521,368,'nsd2_5_block4');
        _this.b64.frame=1;
        _this.b64.anchor.set(0.5);
        _this.b64.scale.setTo(1,1);
        _this.b65=_this.add.sprite(560,368,'nsd2_5_block4');
        _this.b65.frame=1;
        _this.b65.anchor.set(0.5);
        _this.b65.scale.setTo(1,1);
        _this.b66=_this.add.sprite(599,368,'nsd2_5_block4');
        _this.b66.frame=1;
        _this.b66.anchor.set(0.5);
        _this.b66.scale.setTo(1,1);
        _this.b67=_this.add.sprite(638,368,'nsd2_5_block4');
        _this.b67.frame=1;
        _this.b67.anchor.set(0.5);
        _this.b67.scale.setTo(1,1);
        _this.b68=_this.add.sprite(677,368,'nsd2_5_block4');
        _this.b68.frame=1;
        _this.b68.anchor.set(0.5);
        _this.b68.scale.setTo(1,1);
        _this.b69=_this.add.sprite(716,368,'nsd2_5_block4');
        _this.b69.frame=1;
        _this.b69.anchor.set(0.5);
        _this.b69.scale.setTo(1,1);
        _this.b70=_this.add.sprite(755,368,'nsd2_5_block4');
        _this.b70.frame=1;
        _this.b70.anchor.set(0.5);
        _this.b70.scale.setTo(1,1);
        
        _this.b71=_this.add.sprite(403,407,'nsd2_5_block4');
        _this.b71.frame=1;
        _this.b71.anchor.set(0.5);
        _this.b71.scale.setTo(1,1);
        _this.b72=_this.add.sprite(443,407,'nsd2_5_block4');
        _this.b72.frame=1;
        _this.b72.anchor.set(0.5);
        _this.b72.scale.setTo(1,1);
        _this.b73=_this.add.sprite(482,407,'nsd2_5_block4');
        _this.b73.frame=1;
        _this.b73.anchor.set(0.5);
        _this.b73.scale.setTo(1,1);
        _this.b74=_this.add.sprite(521,407,'nsd2_5_block4');
        _this.b74.frame=1;
        _this.b74.anchor.set(0.5);
        _this.b74.scale.setTo(1,1);
        _this.b74X=_this.b74.x;
        _this.b74Y=_this.b74.y;
        _this.b75=_this.add.sprite(560,407,'nsd2_5_block4');
        _this.b75.frame=1;
        _this.b75.anchor.set(0.5);
        _this.b75.scale.setTo(1,1);
        _this.b76=_this.add.sprite(599,407,'nsd2_5_block4');
        _this.b76.frame=1;
        _this.b76.anchor.set(0.5);
        _this.b76.scale.setTo(1,1);
        _this.b77=_this.add.sprite(638,407,'nsd2_5_block4');
        _this.b77.frame=1;
        _this.b77.anchor.set(0.5);
        _this.b77.scale.setTo(1,1);
        _this.b78=_this.add.sprite(677,407,'nsd2_5_block4');
        _this.b78.frame=1;
        _this.b78.anchor.set(0.5);
        _this.b78.scale.setTo(1,1);
        _this.b79=_this.add.sprite(716,407,'nsd2_5_block4');
        _this.b79.frame=1;
        _this.b79.anchor.set(0.5);
        _this.b79.scale.setTo(1,1);
        _this.b80=_this.add.sprite(755,407,'nsd2_5_block4');
        _this.b80.frame=1;
        _this.b80.anchor.set(0.5);
        _this.b80.scale.setTo(1,1);
        
        _this.b81=_this.add.sprite(403,446,'nsd2_5_block4');
        _this.b81.frame=1;
        _this.b81.anchor.set(0.5);
        _this.b81.scale.setTo(1,1);
        _this.b82=_this.add.sprite(443,446,'nsd2_5_block4');
        _this.b82.frame=1;
        _this.b82.anchor.set(0.5);
        _this.b82.scale.setTo(1,1);
        _this.b83=_this.add.sprite(482,446,'nsd2_5_block4');
        _this.b83.frame=1;
        _this.b83.anchor.set(0.5);
        _this.b83.scale.setTo(1,1);
        _this.b84=_this.add.sprite(521,446,'nsd2_5_block4');
        _this.b84.frame=1;
        _this.b84.anchor.set(0.5);
        _this.b84.scale.setTo(1,1);
        _this.b85=_this.add.sprite(560,446,'nsd2_5_block4');
        _this.b85.frame=1;
        _this.b85.anchor.set(0.5);
        _this.b85.scale.setTo(1,1);
        _this.b86=_this.add.sprite(599,446,'nsd2_5_block4');
        _this.b86.frame=1;
        _this.b86.anchor.set(0.5);
        _this.b86.scale.setTo(1,1);
        _this.b87=_this.add.sprite(638,446,'nsd2_5_block4');
        _this.b87.frame=1;
        _this.b87.anchor.set(0.5);
        _this.b87.scale.setTo(1,1);
        _this.b88=_this.add.sprite(677,446,'nsd2_5_block4');
        _this.b88.frame=1;
        _this.b88.anchor.set(0.5);
        _this.b88.scale.setTo(1,1);
        _this.b89=_this.add.sprite(716,446,'nsd2_5_block4');
        _this.b89.frame=1;
        _this.b89.anchor.set(0.5);
        _this.b89.scale.setTo(1,1);
        _this.b90=_this.add.sprite(755,446,'nsd2_5_block4');
        _this.b90.frame=1;
        _this.b90.anchor.set(0.5);
        _this.b90.scale.setTo(1,1);
        
        _this.b91=_this.add.sprite(403,485,'nsd2_5_block4');
        _this.b91.frame=1;
        _this.b91.anchor.set(0.5);
        _this.b91.scale.setTo(1,1);
        _this.b92=_this.add.sprite(443,485,'nsd2_5_block4');
        _this.b92.frame=1;
        _this.b92.anchor.set(0.5);
        _this.b92.scale.setTo(1,1);
        _this.b93=_this.add.sprite(482,485,'nsd2_5_block4');
        _this.b93.frame=1;
        _this.b93.anchor.set(0.5);
        _this.b93.scale.setTo(1,1);
        _this.b94=_this.add.sprite(521,485,'nsd2_5_block4');
        _this.b94.frame=1;
        _this.b94.anchor.set(0.5);
        _this.b94.scale.setTo(1,1);
        _this.b95=_this.add.sprite(560,485,'nsd2_5_block4');
        _this.b95.frame=1;
        _this.b95.anchor.set(0.5);
        _this.b95.scale.setTo(1,1);
        _this.b96=_this.add.sprite(599,485,'nsd2_5_block4');
        _this.b96.frame=1;
        _this.b96.anchor.set(0.5);
        _this.b96.scale.setTo(1,1);
        _this.b97=_this.add.sprite(638,485,'nsd2_5_block4');
        _this.b97.frame=1;
        _this.b97.anchor.set(0.5);
        _this.b97.scale.setTo(1,1);
        _this.b98=_this.add.sprite(677,485,'nsd2_5_block4');
        _this.b98.frame=1;
        _this.b98.anchor.set(0.5);
        _this.b98.scale.setTo(1,1);
        _this.b99=_this.add.sprite(716,485,'nsd2_5_block4');
        _this.b99.frame=1;
        _this.b99.anchor.set(0.5);
        _this.b99.scale.setTo(1,1);
        _this.b100=_this.add.sprite(755,485,'nsd2_5_block4');
        _this.b100.frame=1;
        _this.b100.anchor.set(0.5);
        _this.b100.scale.setTo(1,1);
       /*********************************************vertical block************************/ 
        _this.one=_this.add.sprite(402,309,'nsd2_5_block');
        _this.one.anchor.set(0.5);
        _this.one.scale.setTo(1.05,0.998);
        _this.one.visible=false;
        _this.oneX=_this.one.x;
        _this.oneY=_this.one.y;
        
        _this.two=_this.add.sprite(442,309,'nsd2_5_block');
        _this.two.anchor.set(0.5);
        _this.two.scale.setTo(1.04,0.998);
        _this.two.visible=false;
        _this.twoX=_this.two.x;
        _this.twoY=_this.two.y;
        
        _this.three=_this.add.sprite(481,309,'nsd2_5_block');
        _this.three.anchor.set(0.5);
        _this.three.scale.setTo(1.02,0.998);
        _this.three.visible=false;
        _this.threeX=_this.three.x;
        _this.threeY=_this.three.y;
        
        _this.four=_this.add.sprite(520,309,'nsd2_5_block');
        _this.four.anchor.set(0.5);
        _this.four.scale.setTo(1.01,0.998);
        _this.four.visible=false;
        _this.fourX=_this.four.x;
        _this.fourY=_this.four.y;
        
        _this.five=_this.add.sprite(559,309,'nsd2_5_block');
        _this.five.anchor.set(0.5);
        _this.five.scale.setTo(1.01,0.998);
        _this.five.visible=false;
        _this.fiveX=_this.five.x;
        _this.fiveY=_this.five.y;
        
        _this.six=_this.add.sprite(598,309,'nsd2_5_block');
        _this.six.anchor.set(0.5);
        _this.six.scale.setTo(1.01,0.998);
        _this.six.visible=false;
        _this.sixX=_this.six.x;
        _this.sixY=_this.six.y;
        
        _this.seven=_this.add.sprite(637,309,'nsd2_5_block');
        _this.seven.anchor.set(0.5);
        _this.seven.scale.setTo(1.01,0.998);
        _this.seven.visible=false;
        _this.sevenX=_this.seven.x;
        _this.sevenY=_this.seven.y;
        
        _this.eight=_this.add.sprite(676,309,'nsd2_5_block');
        _this.eight.anchor.set(0.5);
        _this.eight.scale.setTo(1.01,0.998);
        _this.eight.visible=false;
        _this.eightX=_this.eight.x;
        _this.eightY=_this.eight.y;
        
        _this.nine=_this.add.sprite(715,309,'nsd2_5_block');
        _this.nine.anchor.set(0.5);
        _this.nine.scale.setTo(1,0.998);
        _this.nine.visible=false;
        _this.nineX=_this.nine.x;
        _this.nineY=_this.nine.y;
        
        _this.ten=_this.add.sprite(755,309,'nsd2_5_block');
        _this.ten.anchor.set(0.5);
        _this.ten.scale.setTo(1.01,0.998);
        _this.ten.visible=false;
        _this.tenX=_this.ten.x;
        _this.tenY=_this.ten.y;
        /**************************horizontal block**************************************/
        _this.one2=_this.add.sprite(579,134,'nsd2_5_block2');
        _this.one2.anchor.set(0.5);
        _this.one2.scale.setTo(1,1);
        _this.one2.visible=false;
        _this.one2X=_this.one2.x;
        _this.one2Y=_this.one2.y;
        
        _this.two2=_this.add.sprite(579,173,'nsd2_5_block2');
        _this.two2.anchor.set(0.5);
        _this.two2.scale.setTo(1,1);
        _this.two2.visible=false;
        _this.two2X=_this.two2.x;
        _this.two2Y=_this.two2.y;
        
        _this.three2=_this.add.sprite(579,211,'nsd2_5_block2');
        _this.three2.anchor.set(0.5);
        _this.three2.scale.setTo(1,1);
        _this.three2.visible=false;
        _this.three2X=_this.three2.x;
        _this.three2Y=_this.three2.y;
        
        _this.four2=_this.add.sprite(579,250,'nsd2_5_block2');
        _this.four2.anchor.set(0.5);
        _this.four2.scale.setTo(1,1);
        _this.four2.visible=false;
        _this.four2X=_this.four2.x;
        _this.four2Y=_this.four2.y;
        
        _this.five2=_this.add.sprite(579,289,'nsd2_5_block2');
        _this.five2.anchor.set(0.5);
        _this.five2.scale.setTo(1,1);
        _this.five2.visible=false;
        _this.five2X=_this.five2.x;
        _this.five2Y=_this.five2.y;
        
        _this.six2=_this.add.sprite(579,328,'nsd2_5_block2');
        _this.six2.anchor.set(0.5);
        _this.six2.scale.setTo(1,1);
        _this.six2.visible=false;
        _this.six2X=_this.six2.x;
        _this.six2Y=_this.six2.y;
        
        _this.seven2=_this.add.sprite(579,367,'nsd2_5_block2');
        _this.seven2.anchor.set(0.5);
        _this.seven2.scale.setTo(1,1);
        _this.seven2.visible=false;
        _this.seven2X=_this.seven2.x;
        _this.seven2Y=_this.seven2.y;
        
        _this.eight2=_this.add.sprite(579,406,'nsd2_5_block2');
        _this.eight2.anchor.set(0.5);
        _this.eight2.scale.setTo(1,1);
        _this.eight2.visible=false;
        _this.eight2X=_this.eight2.x;
        _this.eight2Y=_this.eight2.y;
        
        _this.nine2=_this.add.sprite(579,445,'nsd2_5_block2');
        _this.nine2.anchor.set(0.5);
        _this.nine2.scale.setTo(1,1);
        _this.nine2.visible=false;
        _this.nine2X=_this.nine2.x;
        _this.nine2Y=_this.nine2.y;
        
        _this.ten2=_this.add.sprite(579,485,'nsd2_5_block2');
        _this.ten2.anchor.set(0.5);
        _this.ten2.scale.setTo(1,1);
        _this.ten2.visible=false;
        _this.ten2X=_this.ten2.x;
        _this.ten2Y=_this.ten2.y;
        
        _this.bigblock.events.onInputDown.add(_this.clickedSprite,this);
        _this.bigblock2.events.onInputDown.add(_this.clickedSprite,this);
        _this.bigblock3.events.onInputDown.add(_this.clickedSprite,this);
    
        _this.one.events.onInputDown.add(_this.clicked1,this);
        _this.two.events.onInputDown.add(_this.clicked2,this);
        _this.three.events.onInputDown.add(_this.clicked3,this);
        _this.four.events.onInputDown.add(_this.clicked4,this);
        _this.five.events.onInputDown.add(_this.clicked5,this);
        _this.six.events.onInputDown.add(_this.clicked6,this);
        _this.seven.events.onInputDown.add(_this.clicked7,this);
        _this.eight.events.onInputDown.add(_this.clicked8,this);
        _this.nine.events.onInputDown.add(_this.clicked9,this);
        _this.ten.events.onInputDown.add(_this.clicked10,this);

        _this.one2.events.onInputDown.add(_this.clickedA1,this);
        _this.two2.events.onInputDown.add(_this.clickedA2,this);
        _this.three2.events.onInputDown.add(_this.clickedA3,this);
        _this.four2.events.onInputDown.add(_this.clickedA4,this);
        _this.five2.events.onInputDown.add(_this.clickedA5,this);
        _this.six2.events.onInputDown.add(_this.clickedA6,this);
        _this.seven2.events.onInputDown.add(_this.clickedA7,this);
        _this.eight2.events.onInputDown.add(_this.clickedA8,this);
        _this.nine2.events.onInputDown.add(_this.clickedA9,this);
        _this.ten2.events.onInputDown.add(_this.clickedA10,this);
        
        
        _this.movegroup.add(_this.one);
        _this.movegroup.add(_this.two);
        _this.movegroup.add(_this.three);
        _this.movegroup.add(_this.four);
        _this.movegroup.add(_this.five);
        _this.movegroup.add(_this.six);
        _this.movegroup.add(_this.seven);
        _this.movegroup.add(_this.eight);
        _this.movegroup.add(_this.nine);
        _this.movegroup.add(_this.ten);
        
        _this.movegroup.add(_this.one2);
        _this.movegroup.add(_this.two2);
        _this.movegroup.add(_this.three2);
        _this.movegroup.add(_this.four2);
        _this.movegroup.add(_this.five2);
        _this.movegroup.add(_this.six2);
        _this.movegroup.add(_this.seven2);
        _this.movegroup.add(_this.eight2);
        _this.movegroup.add(_this.nine2);
        _this.movegroup.add(_this.ten2);
        
        for(var i=1;i<=100;i++)
            {
                _this["b"+i].events.onInputDown.add(_this.boxClicked,this);
                _this["b"+i].name = "b"+i;
            }
        _this.stackgrp.add(_this.b1);
        _this.stackgrp.add(_this.b2);
        _this.stackgrp.add(_this.b3);
        _this.stackgrp.add(_this.b4);
        _this.stackgrp.add(_this.b5);
        _this.stackgrp.add(_this.b6);
        _this.stackgrp.add(_this.b7);
        _this.stackgrp.add(_this.b8);
        _this.stackgrp.add(_this.b9);
        _this.stackgrp.add(_this.b10);
        _this.stackgrp.add(_this.b11);
        _this.stackgrp.add(_this.b12);
        _this.stackgrp.add(_this.b13);
        _this.stackgrp.add(_this.b14);
        _this.stackgrp.add(_this.b15);
        _this.stackgrp.add(_this.b16);
        _this.stackgrp.add(_this.b17);
        _this.stackgrp.add(_this.b18);
        _this.stackgrp.add(_this.b19);
        _this.stackgrp.add(_this.b20);
        _this.stackgrp.add(_this.b21);
        _this.stackgrp.add(_this.b22);
        _this.stackgrp.add(_this.b23);
        _this.stackgrp.add(_this.b24);
        _this.stackgrp.add(_this.b25);
        _this.stackgrp.add(_this.b26);
        _this.stackgrp.add(_this.b27);
        _this.stackgrp.add(_this.b28);
        _this.stackgrp.add(_this.b29);
        _this.stackgrp.add(_this.b30);
        _this.stackgrp.add(_this.b31);
        _this.stackgrp.add(_this.b32);
        _this.stackgrp.add(_this.b33);
        _this.stackgrp.add(_this.b34);
        _this.stackgrp.add(_this.b35);
        _this.stackgrp.add(_this.b36);
        _this.stackgrp.add(_this.b37);
        _this.stackgrp.add(_this.b38);
        _this.stackgrp.add(_this.b39);
        _this.stackgrp.add(_this.b40);
        _this.stackgrp.add(_this.b41);
        _this.stackgrp.add(_this.b42);
        _this.stackgrp.add(_this.b43);
        _this.stackgrp.add(_this.b44);
        _this.stackgrp.add(_this.b45);
        _this.stackgrp.add(_this.b46);
        _this.stackgrp.add(_this.b47);
        _this.stackgrp.add(_this.b48);
        _this.stackgrp.add(_this.b49);
        _this.stackgrp.add(_this.b50);
        _this.stackgrp.add(_this.b51);
        _this.stackgrp.add(_this.b52);
        _this.stackgrp.add(_this.b53);
        _this.stackgrp.add(_this.b54);
        _this.stackgrp.add(_this.b55);
        _this.stackgrp.add(_this.b56);
        _this.stackgrp.add(_this.b57);
        _this.stackgrp.add(_this.b58);
        _this.stackgrp.add(_this.b59);
        _this.stackgrp.add(_this.b60);
        _this.stackgrp.add(_this.b61);
        _this.stackgrp.add(_this.b62);
        _this.stackgrp.add(_this.b63);
        _this.stackgrp.add(_this.b64);
        _this.stackgrp.add(_this.b65);
        _this.stackgrp.add(_this.b66);
        _this.stackgrp.add(_this.b67);
        _this.stackgrp.add(_this.b68);
        _this.stackgrp.add(_this.b69);
        _this.stackgrp.add(_this.b70);
        _this.stackgrp.add(_this.b71);
        _this.stackgrp.add(_this.b72);
        _this.stackgrp.add(_this.b73);
        _this.stackgrp.add(_this.b74);
        _this.stackgrp.add(_this.b75);
        _this.stackgrp.add(_this.b76);
        _this.stackgrp.add(_this.b77);
        _this.stackgrp.add(_this.b78);
        _this.stackgrp.add(_this.b79);
        _this.stackgrp.add(_this.b80);
        _this.stackgrp.add(_this.b81);
        _this.stackgrp.add(_this.b82);
        _this.stackgrp.add(_this.b83);
        _this.stackgrp.add(_this.b84);
        _this.stackgrp.add(_this.b85);
        _this.stackgrp.add(_this.b86);
        _this.stackgrp.add(_this.b87);
        _this.stackgrp.add(_this.b88);
        _this.stackgrp.add(_this.b89);
        _this.stackgrp.add(_this.b90);
        _this.stackgrp.add(_this.b91);
        _this.stackgrp.add(_this.b92);
        _this.stackgrp.add(_this.b93);
        _this.stackgrp.add(_this.b94);
        _this.stackgrp.add(_this.b95);
        _this.stackgrp.add(_this.b96);
        _this.stackgrp.add(_this.b97);
        _this.stackgrp.add(_this.b98);
        _this.stackgrp.add(_this.b99);
        _this.stackgrp.add(_this.b100);
        
        _this.a1=0;
        _this.a2=0;
        _this.a3=0;
        _this.a4=0;
        _this.a5=0;
        _this.a6=0;
        _this.a7=0;
        _this.a8=0;
        _this.a9=0;
        _this.a10=0;
        
        _this.d1=0;
        _this.d2=0;
        _this.d3=0;
        _this.d4=0;
        _this.d5=0;
        _this.d6=0;
        _this.d7=0;
        _this.d8=0;
        _this.d9=0;
        _this.d10=0;
        
    },
    
    boxClicked:function(target)
    {
        _this.clickSound.play();
        var xpos = target.x;
        var ypos = target.y;
        console.log(target.name);
        target.input.enableDrag();
        _this.world.bringToTop(_this.stackgrp);
        _this.stackgrp.bringToTop(target);
    target.events.onDragStop.add(function(target){
        if(_this.checkOverlap(target,_this.stacks))
            {
             target.frame=1; 
                target.inputEnabled=false;
            }
        else
            {
             target.frame=0;   
            }
        //target.x=_this[""+target.name+"X"];
        //target.y=_this[""+target.name+"Y"];
        target.x=xpos;
        target.y=ypos;
    },this);
    },
    
    clickedSprite:function(target)
    {
        _this.clickSound.play();
        _this.bigblock.input.enableDrag();
        _this.bigblock2.input.enableDrag();
        _this.bigblock3.input.enableDrag();
        _this.world.bringToTop(target);
       _this.bigblock.events.onDragStop.add(_this.drag1,this);
        _this.bigblock2.events.onDragStop.add(_this.drag2,this);
        _this.bigblock3.events.onDragStop.add(_this.drag3,this);
    },
    /*************************vertical movement**************************/
    clicked10:function(target)
    {
        _this.clickSound.play();
     _this.b10.frame=1;   
     _this.b20.frame=1;   
     _this.b30.frame=1;   
     _this.b40.frame=1;   
     _this.b50.frame=1;   
     _this.b60.frame=1;   
     _this.b70.frame=1;   
     _this.b80.frame=1;   
     _this.b90.frame=1;   
     _this.b100.frame=1;
      _this.ten.input.enableDrag(); 
        _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
      _this.ten.events.onDragStop.add(function(target){
          if(_this.checkOverlap(target,_this.stacks))
     {
              target.visible=false;
              target.inputEnabled=false;
                  _this.b10.frame=1;   
                _this.b20.frame=1;   
                _this.b30.frame=1;   
                _this.b40.frame=1;   
                _this.b50.frame=1;   
                _this.b60.frame=1;   
                _this.b70.frame=1;   
                _this.b80.frame=1;   
                _this.b90.frame=1;   
                _this.b100.frame=1;
                _this.a10=0;
               }
                    else{  _this.b10.frame=0;   
                          _this.b20.frame=0;   
                          _this.b30.frame=0;   
                          _this.b40.frame=0;   
                          _this.b50.frame=0;   
                          _this.b60.frame=0;   
                          _this.b70.frame=0;   
                          _this.b80.frame=0;   
                          _this.b90.frame=0;   
                          _this.b100.frame=0;
                        }
                 target.x=_this.tenX;
                     target.y=_this.tenY;    
       },this);
},
    clicked9:function(target)
    {  _this.clickSound.play();
         _this.b9.frame=1;   
        _this.b19.frame=1;   
        _this.b29.frame=1;   
        _this.b39.frame=1;   
        _this.b49.frame=1;   
        _this.b59.frame=1;   
        _this.b69.frame=1;   
        _this.b79.frame=1;   
        _this.b89.frame=1;   
        _this.b99.frame=1;
                _this.nine.input.enableDrag(); 
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                _this.nine.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b9.frame=1;   
                          _this.b19.frame=1;   
                          _this.b29.frame=1;   
                          _this.b39.frame=1;   
                          _this.b49.frame=1;   
                          _this.b59.frame=1;   
                          _this.b69.frame=1;   
                          _this.b79.frame=1;   
                          _this.b89.frame=1;   
                          _this.b99.frame=1;
                   _this.a9=0;
               }
                    else{
                    _this.b9.frame=0;   
                          _this.b19.frame=0;   
                          _this.b29.frame=0;   
                          _this.b39.frame=0;   
                          _this.b49.frame=0;   
                          _this.b59.frame=0;   
                          _this.b69.frame=0;   
                          _this.b79.frame=0;   
                          _this.b89.frame=0;   
                          _this.b99.frame=0;
                    }
                 target.x=_this.nineX;
                     target.y=_this.nineY;   
       },this);
    },
    clicked8:function(target)
    {_this.clickSound.play();
        _this.b8.frame=1;   
        _this.b18.frame=1;   
        _this.b28.frame=1;   
        _this.b38.frame=1;   
        _this.b48.frame=1;   
        _this.b58.frame=1;   
        _this.b68.frame=1;   
        _this.b78.frame=1;   
        _this.b88.frame=1;   
        _this.b98.frame=1;
                _this.eight.input.enableDrag();
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                _this.eight.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b8.frame=1;   
                          _this.b18.frame=1;   
                          _this.b28.frame=1;   
                          _this.b38.frame=1;   
                          _this.b48.frame=1;   
                          _this.b58.frame=1;   
                          _this.b68.frame=1;   
                          _this.b78.frame=1;   
                          _this.b88.frame=1;   
                          _this.b98.frame=1;
                   _this.a8=0;
               }
                    else
                    {     _this.b8.frame=0;   
                          _this.b18.frame=0;   
                          _this.b28.frame=0;   
                          _this.b38.frame=0;   
                          _this.b48.frame=0;   
                          _this.b58.frame=0;   
                          _this.b68.frame=0;   
                          _this.b78.frame=0;   
                          _this.b88.frame=0;   
                          _this.b98.frame=0;
                    }
                target.x=_this.eightX;
                     target.y=_this.eightY;    
       },this);
    },
    clicked7:function(target)
    { _this.clickSound.play();
        _this.b7.frame=1;   
        _this.b17.frame=1;   
        _this.b27.frame=1;   
        _this.b37.frame=1;   
        _this.b47.frame=1;   
        _this.b57.frame=1;   
        _this.b67.frame=1;   
        _this.b77.frame=1;   
        _this.b87.frame=1;   
        _this.b97.frame=1;
                _this.seven.input.enableDrag();
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                _this.seven.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b7.frame=1;   
                          _this.b17.frame=1;   
                          _this.b27.frame=1;   
                          _this.b37.frame=1;   
                          _this.b47.frame=1;   
                          _this.b57.frame=1;   
                          _this.b67.frame=1;   
                          _this.b77.frame=1;   
                          _this.b87.frame=1;   
                          _this.b97.frame=1;
                   _this.a7=0;
               }
                    else{
                    _this.b7.frame=0;   
                          _this.b17.frame=0;   
                          _this.b27.frame=0;   
                          _this.b37.frame=0;   
                          _this.b47.frame=0;   
                          _this.b57.frame=0;   
                          _this.b67.frame=0;   
                          _this.b77.frame=0;   
                          _this.b87.frame=0;   
                          _this.b97.frame=0;
                    }
                target.x=_this.sevenX;
                     target.y=_this.sevenY;    
       },this);
    },
    clicked6:function(target)
    { _this.clickSound.play();
        _this.b6.frame=1;   
        _this.b16.frame=1;   
        _this.b26.frame=1;   
        _this.b36.frame=1;   
        _this.b46.frame=1;   
        _this.b56.frame=1;   
        _this.b66.frame=1;   
        _this.b76.frame=1;   
        _this.b86.frame=1;   
        _this.b96.frame=1;
                _this.six.input.enableDrag(); 
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                _this.six.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b6.frame=1;   
                          _this.b16.frame=1;   
                          _this.b26.frame=1;   
                          _this.b36.frame=1;   
                          _this.b46.frame=1;   
                          _this.b56.frame=1;   
                          _this.b66.frame=1;   
                          _this.b76.frame=1;   
                          _this.b86.frame=1;   
                          _this.b96.frame=1;
                   _this.a6=0;
               }
                    else{
                    _this.b6.frame=0;   
                          _this.b16.frame=0;   
                          _this.b26.frame=0;   
                          _this.b36.frame=0;   
                          _this.b46.frame=0;   
                          _this.b56.frame=0;   
                          _this.b66.frame=0;   
                          _this.b76.frame=0;   
                          _this.b86.frame=0;   
                          _this.b96.frame=0;
                    }
               target.x=_this.sixX;
                     target.y=_this.sixY;     
       },this);
    },
    clicked5:function(target)
    { _this.clickSound.play();
        _this.b5.frame=1;   
        _this.b15.frame=1;   
        _this.b25.frame=1;   
        _this.b35.frame=1;   
        _this.b45.frame=1;   
        _this.b55.frame=1;   
        _this.b65.frame=1;   
        _this.b75.frame=1;   
        _this.b85.frame=1;   
        _this.b95.frame=1;
                _this.five.input.enableDrag(); 
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                _this.five.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b5.frame=1;   
                          _this.b15.frame=1;   
                          _this.b25.frame=1;   
                          _this.b35.frame=1;   
                          _this.b45.frame=1;   
                          _this.b55.frame=1;   
                          _this.b65.frame=1;   
                          _this.b75.frame=1;   
                          _this.b85.frame=1;   
                          _this.b95.frame=1;
                   _this.a5=0;
                   
               }
                    else{
                     _this.b5.frame=0;   
                          _this.b15.frame=0;   
                          _this.b25.frame=0;   
                          _this.b35.frame=0;   
                          _this.b45.frame=0;   
                          _this.b55.frame=0;   
                          _this.b65.frame=0;   
                          _this.b75.frame=0;   
                          _this.b85.frame=0;   
                          _this.b95.frame=0;
                    }
                    target.x=_this.fiveX;
                     target.y=_this.fiveY;
       },this);
    },
    clicked4:function(target)
    { _this.clickSound.play();
        _this.b4.frame=1;   
        _this.b14.frame=1;   
        _this.b24.frame=1;   
        _this.b34.frame=1;   
        _this.b44.frame=1;   
        _this.b54.frame=1;   
        _this.b64.frame=1;   
        _this.b74.frame=1;   
        _this.b84.frame=1;   
        _this.b94.frame=1;
                _this.four.input.enableDrag(); 
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                _this.four.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b4.frame=1;   
                          _this.b14.frame=1;   
                          _this.b24.frame=1;   
                          _this.b34.frame=1;   
                          _this.b44.frame=1;   
                          _this.b54.frame=1;   
                          _this.b64.frame=1;   
                          _this.b74.frame=1;   
                          _this.b84.frame=1;   
                          _this.b94.frame=1;
                   _this.a4=0;
               }
                    else {
                     _this.b4.frame=0;   
                          _this.b14.frame=0;   
                          _this.b24.frame=0;   
                          _this.b34.frame=0;   
                          _this.b44.frame=0;   
                          _this.b54.frame=0;   
                          _this.b64.frame=0;   
                          _this.b74.frame=0;   
                          _this.b84.frame=0;   
                          _this.b94.frame=0;
                    }
                    target.x=_this.fourX;
                     target.y=_this.fourY;
       },this);
    },
    clicked3:function(target)
    { _this.clickSound.play();
        _this.b3.frame=1;   
        _this.b13.frame=1;   
        _this.b23.frame=1;   
        _this.b33.frame=1;   
        _this.b43.frame=1;   
        _this.b53.frame=1;   
        _this.b63.frame=1;   
        _this.b73.frame=1;   
        _this.b83.frame=1;   
        _this.b93.frame=1;
                _this.three.input.enableDrag();
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                _this.three.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b3.frame=1;   
                          _this.b13.frame=1;   
                          _this.b23.frame=1;   
                          _this.b33.frame=1;   
                          _this.b43.frame=1;   
                          _this.b53.frame=1;   
                          _this.b63.frame=1;   
                          _this.b73.frame=1;   
                          _this.b83.frame=1;   
                          _this.b93.frame=1;
                   _this.a3=0;
               }
                    else {
                            _this.b3.frame=0;   
                          _this.b13.frame=0;   
                          _this.b23.frame=0;   
                          _this.b33.frame=0;   
                          _this.b43.frame=0;   
                          _this.b53.frame=0;   
                          _this.b63.frame=0;   
                          _this.b73.frame=0;   
                          _this.b83.frame=0;   
                          _this.b93.frame=0;
                    }
                target.x=_this.threeX;
                     target.y=_this.threeY;    
       },this);
    },
    clicked2:function(target)
    {
        _this.clickSound.play();
         _this.b2.frame=1;   
        _this.b12.frame=1;   
        _this.b22.frame=1;   
        _this.b32.frame=1;   
        _this.b42.frame=1;   
        _this.b52.frame=1;   
        _this.b62.frame=1;   
        _this.b72.frame=1;   
        _this.b82.frame=1;   
        _this.b92.frame=1;
        _this.two.input.enableDrag();
        _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
        _this.two.events.onDragStop.add(function(target){
            if(_this.checkOverlap(target,_this.stacks))
                {
                target.visible=false;
           target.inputEnabled=false;
                    _this.b2.frame=1;   
                  _this.b12.frame=1;   
                  _this.b22.frame=1;   
                  _this.b32.frame=1;   
                  _this.b42.frame=1;   
                  _this.b52.frame=1;   
                  _this.b62.frame=1;   
                  _this.b72.frame=1;   
                  _this.b82.frame=1;   
                  _this.b92.frame=1;
                    _this.a2=0;
               }
                    else{
                            _this.b2.frame=0;   
                          _this.b12.frame=0;   
                          _this.b22.frame=0;   
                          _this.b32.frame=0;   
                          _this.b42.frame=0;   
                          _this.b52.frame=0;   
                          _this.b62.frame=0;   
                          _this.b72.frame=0;   
                          _this.b82.frame=0;   
                          _this.b92.frame=0;
                    }
                    target.x=_this.twoX;
                     target.y=_this.twoY;
       },this);
    },
    clicked1:function(target)
    {
        _this.clickSound.play();
        _this.one.input.enableDrag();
        _this.b1.frame=1;   
        _this.b11.frame=1;   
        _this.b21.frame=1;   
        _this.b31.frame=1;   
        _this.b41.frame=1;   
        _this.b51.frame=1;   
        _this.b61.frame=1;   
        _this.b71.frame=1;   
        _this.b81.frame=1;   
        _this.b91.frame=1;
       _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
       _this.one.events.onDragStop.add(function(target){
           if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b1.frame=1;   
                          _this.b11.frame=1;   
                          _this.b21.frame=1;   
                          _this.b31.frame=1;   
                          _this.b41.frame=1;   
                          _this.b51.frame=1;   
                          _this.b61.frame=1;   
                          _this.b71.frame=1;   
                          _this.b81.frame=1;   
                          _this.b91.frame=1;
                   _this.a1=0;
               }
           else{          _this.b1.frame=0;   
                          _this.b11.frame=0;   
                          _this.b21.frame=0;   
                          _this.b31.frame=0;   
                          _this.b41.frame=0;   
                          _this.b51.frame=0;   
                          _this.b61.frame=0;   
                          _this.b71.frame=0;   
                          _this.b81.frame=0;   
                          _this.b91.frame=0;
               }
           target.x=_this.oneX;
                     target.y=_this.oneY;
       },this);  
    },
    /****************************horizontal movement**************************/
    clickedA1:function(target)
    {
        _this.clickSound.play();
     _this.b1.frame=1;   
     _this.b2.frame=1;   
     _this.b3.frame=1;   
     _this.b4.frame=1;   
     _this.b5.frame=1;   
     _this.b6.frame=1;   
     _this.b7.frame=1;   
     _this.b8.frame=1;   
     _this.b9.frame=1;   
     _this.b10.frame=1;
      target.input.enableDrag(); 
        _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
      target.events.onDragStop.add(function(target){
          if(_this.checkOverlap(target,_this.stacks))
     {
              target.visible=false;
              target.inputEnabled=false;
                  _this.b1.frame=1;   
                _this.b2.frame=1;   
                _this.b3.frame=1;   
                _this.b4.frame=1;   
                _this.b5.frame=1;   
                _this.b6.frame=1;   
                _this.b7.frame=1;   
                _this.b8.frame=1;   
                _this.b9.frame=1;   
                _this.b10.frame=1;
         _this.d1=0;
               }
                    else{  _this.b1.frame=0;   
                          _this.b2.frame=0;   
                          _this.b3.frame=0;   
                          _this.b4.frame=0;   
                          _this.b5.frame=0;   
                          _this.b6.frame=0;   
                          _this.b7.frame=0;   
                          _this.b8.frame=0;   
                          _this.b9.frame=0;   
                          _this.b10.frame=0;
                        }
                 target.x=_this.one2X;
                     target.y=_this.one2Y;    
       },this);
},
    clickedA2:function(target)
    {  _this.clickSound.play();
         _this.b11.frame=1;   
        _this.b12.frame=1;   
        _this.b13.frame=1;   
        _this.b14.frame=1;   
        _this.b15.frame=1;   
        _this.b16.frame=1;   
        _this.b17.frame=1;   
        _this.b18.frame=1;   
        _this.b19.frame=1;   
        _this.b20.frame=1;
                target.input.enableDrag(); 
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                target.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b11.frame=1;   
                            _this.b12.frame=1;   
                            _this.b13.frame=1;   
                            _this.b14.frame=1;   
                            _this.b15.frame=1;   
                            _this.b16.frame=1;   
                            _this.b17.frame=1;   
                            _this.b18.frame=1;   
                            _this.b19.frame=1;   
                            _this.b20.frame=1;
                   _this.d2=0;
               }
                    else{
                            _this.b11.frame=0;   
                          _this.b12.frame=0;   
                          _this.b13.frame=0;   
                          _this.b14.frame=0;   
                          _this.b15.frame=0;   
                          _this.b16.frame=0;   
                          _this.b17.frame=0;   
                          _this.b18.frame=0;   
                          _this.b19.frame=0;   
                          _this.b20.frame=0;
                    }
                 target.x=_this.two2X;
                     target.y=_this.two2Y;   
       },this);
    },
    clickedA3:function(target)
    {_this.clickSound.play();
        _this.b21.frame=1;   
        _this.b22.frame=1;   
        _this.b23.frame=1;   
        _this.b24.frame=1;   
        _this.b25.frame=1;   
        _this.b26.frame=1;   
        _this.b27.frame=1;   
        _this.b28.frame=1;   
        _this.b29.frame=1;   
        _this.b30.frame=1;
                target.input.enableDrag();
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                target.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b21.frame=1;   
                            _this.b22.frame=1;   
                            _this.b23.frame=1;   
                            _this.b24.frame=1;   
                            _this.b25.frame=1;   
                            _this.b26.frame=1;   
                            _this.b27.frame=1;   
                            _this.b28.frame=1;   
                            _this.b29.frame=1;   
                            _this.b30.frame=1;
                   _this.d3=0;
               }
                    else
                    {     _this.b21.frame=0;   
                            _this.b22.frame=0;   
                            _this.b23.frame=0;   
                            _this.b24.frame=0;   
                            _this.b25.frame=0;   
                            _this.b26.frame=0;   
                            _this.b27.frame=0;   
                            _this.b28.frame=0;   
                            _this.b29.frame=0;   
                            _this.b30.frame=0;
                    }
                target.x=_this.three2X;
                     target.y=_this.three2Y;    
       },this);
    },
    clickedA4:function(target)
    { _this.clickSound.play();
        _this.b31.frame=1;   
        _this.b32.frame=1;   
        _this.b33.frame=1;   
        _this.b34.frame=1;   
        _this.b35.frame=1;   
        _this.b36.frame=1;   
        _this.b37.frame=1;   
        _this.b38.frame=1;   
        _this.b39.frame=1;   
        _this.b40.frame=1;
                target.input.enableDrag();
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                target.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b31.frame=1;   
                            _this.b32.frame=1;   
                            _this.b33.frame=1;   
                            _this.b34.frame=1;   
                            _this.b35.frame=1;   
                            _this.b36.frame=1;   
                            _this.b37.frame=1;   
                            _this.b38.frame=1;   
                            _this.b39.frame=1;   
                            _this.b40.frame=1;
                   _this.d4=0;
               }
                    else{
                        _this.b31.frame=0;   
                        _this.b32.frame=0;   
                        _this.b33.frame=0;   
                        _this.b34.frame=0;   
                        _this.b35.frame=0;   
                        _this.b36.frame=0;   
                        _this.b37.frame=0;   
                        _this.b38.frame=0;   
                        _this.b39.frame=0;   
                        _this.b40.frame=0;
                    }
                target.x=_this.four2X;
                     target.y=_this.four2Y;    
       },this);
    },
    clickedA5:function(target)
    { _this.clickSound.play();
        _this.b41.frame=1;   
        _this.b42.frame=1;   
        _this.b43.frame=1;   
        _this.b44.frame=1;   
        _this.b45.frame=1;   
        _this.b46.frame=1;   
        _this.b47.frame=1;   
        _this.b48.frame=1;   
        _this.b49.frame=1;   
        _this.b50.frame=1;
                target.input.enableDrag(); 
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                target.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b41.frame=1;   
                            _this.b42.frame=1;   
                            _this.b43.frame=1;   
                            _this.b44.frame=1;   
                            _this.b45.frame=1;   
                            _this.b46.frame=1;   
                            _this.b47.frame=1;   
                            _this.b48.frame=1;   
                            _this.b49.frame=1;   
                            _this.b50.frame=1;
                   _this.d5=0;
               }
                    else{
                    _this.b41.frame=0;   
                    _this.b42.frame=0;   
                    _this.b43.frame=0;   
                    _this.b44.frame=0;   
                    _this.b45.frame=0;   
                    _this.b46.frame=0;   
                    _this.b47.frame=0;   
                    _this.b48.frame=0;   
                    _this.b49.frame=0;   
                    _this.b50.frame=0;
                    }
               target.x=_this.five2X;
                     target.y=_this.five2Y;     
       },this);
    },
    clickedA6:function(target)
    {   _this.clickSound.play();
        _this.b51.frame=1;   
        _this.b52.frame=1;   
        _this.b53.frame=1;   
        _this.b54.frame=1;   
        _this.b55.frame=1;   
        _this.b56.frame=1;   
        _this.b57.frame=1;   
        _this.b58.frame=1;   
        _this.b59.frame=1;   
        _this.b60.frame=1;
                target.input.enableDrag(); 
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                target.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b51.frame=1;   
                            _this.b52.frame=1;   
                            _this.b53.frame=1;   
                            _this.b54.frame=1;   
                            _this.b55.frame=1;   
                            _this.b56.frame=1;   
                            _this.b57.frame=1;   
                            _this.b58.frame=1;   
                            _this.b59.frame=1;   
                            _this.b60.frame=1;
                   _this.d6=0;
               }
                    else{
                        _this.b51.frame=0;   
                        _this.b52.frame=0;   
                        _this.b53.frame=0;   
                        _this.b54.frame=0;   
                        _this.b55.frame=0;   
                        _this.b56.frame=0;   
                        _this.b57.frame=0;   
                        _this.b58.frame=0;   
                        _this.b59.frame=0;   
                        _this.b60.frame=0;
                    }
                    target.x=_this.six2X;
                     target.y=_this.six2Y;
       },this);
    },
    clickedA7:function(target)
    { _this.clickSound.play();
        _this.b61.frame=1;   
        _this.b62.frame=1;   
        _this.b63.frame=1;   
        _this.b64.frame=1;   
        _this.b65.frame=1;   
        _this.b66.frame=1;   
        _this.b67.frame=1;   
        _this.b68.frame=1;   
        _this.b69.frame=1;   
        _this.b70.frame=1;
                target.input.enableDrag(); 
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                target.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                            _this.b61.frame=1;   
                            _this.b62.frame=1;   
                            _this.b63.frame=1;   
                            _this.b64.frame=1;   
                            _this.b65.frame=1;   
                            _this.b66.frame=1;   
                            _this.b67.frame=1;   
                            _this.b68.frame=1;   
                            _this.b69.frame=1;   
                            _this.b70.frame=1;
                   _this.d7=0;
               }
                    else {
                        _this.b61.frame=0;   
                        _this.b62.frame=0;   
                        _this.b63.frame=0;   
                        _this.b64.frame=0;   
                        _this.b65.frame=0;   
                        _this.b66.frame=0;   
                        _this.b67.frame=0;   
                        _this.b68.frame=0;   
                        _this.b69.frame=0;   
                        _this.b70.frame=0;
                    }
                    target.x=_this.seven2X;
                     target.y=_this.seven2Y;
       },this);
    },
    clickedA8:function(target)
    { _this.clickSound.play();
        _this.b71.frame=1;   
        _this.b72.frame=1;   
        _this.b73.frame=1;   
        _this.b74.frame=1;   
        _this.b75.frame=1;   
        _this.b76.frame=1;   
        _this.b77.frame=1;   
        _this.b78.frame=1;   
        _this.b79.frame=1;   
        _this.b80.frame=1;
                target.input.enableDrag();
     _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
                target.events.onDragStop.add(function(target){
                    if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                           _this.b71.frame=1;   
                            _this.b72.frame=1;   
                            _this.b73.frame=1;   
                            _this.b74.frame=1;   
                            _this.b75.frame=1;   
                            _this.b76.frame=1;   
                            _this.b77.frame=1;   
                            _this.b78.frame=1;   
                            _this.b79.frame=1;   
                            _this.b80.frame=1;
                   _this.d8=0;
               }
                    else {
                           _this.b71.frame=0;   
                            _this.b72.frame=0;   
                            _this.b73.frame=0;   
                            _this.b74.frame=0;   
                            _this.b75.frame=0;   
                            _this.b76.frame=0;   
                            _this.b77.frame=0;   
                            _this.b78.frame=0;   
                            _this.b79.frame=0;   
                            _this.b80.frame=0;
                    }
                target.x=_this.eight2X;
                     target.y=_this.eight2Y;    
       },this);
    },
    clickedA9:function(target)
    {
        _this.clickSound.play();
        _this.b81.frame=1;   
        _this.b82.frame=1;   
        _this.b83.frame=1;   
        _this.b84.frame=1;   
        _this.b85.frame=1;   
        _this.b86.frame=1;   
        _this.b87.frame=1;   
        _this.b88.frame=1;   
        _this.b89.frame=1;   
        _this.b90.frame=1;
        target.input.enableDrag();
        _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
        target.events.onDragStop.add(function(target){
            if(_this.checkOverlap(target,_this.stacks))
                {
                target.visible=false;
           target.inputEnabled=false;
                   _this.b81.frame=1;   
                    _this.b82.frame=1;   
                    _this.b83.frame=1;   
                    _this.b84.frame=1;   
                    _this.b85.frame=1;   
                    _this.b86.frame=1;   
                    _this.b87.frame=1;   
                    _this.b88.frame=1;   
                    _this.b89.frame=1;   
                    _this.b90.frame=1;
                    _this.d9=0;
               }
                    else{
                           _this.b81.frame=0;   
                            _this.b82.frame=0;   
                            _this.b83.frame=0;   
                            _this.b84.frame=0;   
                            _this.b85.frame=0;   
                            _this.b86.frame=0;   
                            _this.b87.frame=0;   
                            _this.b88.frame=0;   
                            _this.b89.frame=0;   
                            _this.b90.frame=0;
                    }
                    target.x=_this.nine2X;
                     target.y=_this.nine2Y;
       },this);
    },
    clickedA10:function(target)
    {
        _this.clickSound.play();
        target.input.enableDrag();
        _this.b91.frame=1;   
        _this.b92.frame=1;   
        _this.b93.frame=1;   
        _this.b94.frame=1;   
        _this.b95.frame=1;   
        _this.b96.frame=1;   
        _this.b97.frame=1;   
        _this.b98.frame=1;   
        _this.b99.frame=1;   
        _this.b100.frame=1;
       _this.world.bringToTop(_this.movegroup);
        _this.movegroup.bringToTop(target);
       target.events.onDragStop.add(function(target){
           if(_this.checkOverlap(target,_this.stacks))
               {
                        target.visible=false;
                   target.inputEnabled=false;
                           _this.b91.frame=1;   
                            _this.b92.frame=1;   
                            _this.b93.frame=1;   
                            _this.b94.frame=1;   
                            _this.b95.frame=1;   
                            _this.b96.frame=1;   
                            _this.b97.frame=1;   
                            _this.b98.frame=1;   
                            _this.b99.frame=1;   
                            _this.b100.frame=1;
                   _this.d10=0;
               }
           else{          _this.b91.frame=0;   
                            _this.b92.frame=0;   
                            _this.b93.frame=0;   
                            _this.b94.frame=0;   
                            _this.b95.frame=0;   
                            _this.b96.frame=0;   
                            _this.b97.frame=0;   
                            _this.b98.frame=0;   
                            _this.b99.frame=0;   
                            _this.b100.frame=0;
               }
                        target.x=_this.ten2X;
                        target.y=_this.ten2Y;
       },this);  
    },
    
    drag1:function(target){ 
        
           if(_this.checkOverlap(target,_this.grid))
               {
            if(_this.d1==0&&_this.d2==0&&_this.d3==0&&_this.d4==0&&_this.d5==0&&_this.d6==0&&_this.d7==0&&_this.d8==0&&_this.d9==0&&_this.d10==0)
             {  if(_this.one.visible==false&&_this.b1.frame==1&&_this.b11.frame==1&&_this.b21.frame==1&&_this.b31.frame==1&&_this.b41.frame==1&&_this.b51.frame==1&&_this.b61.frame==1&&_this.b71.frame==1&&_this.b81.frame==1&&_this.b91.frame==1)
                         {
                         _this.b1.frame=0;   
                          _this.b11.frame=0;   
                          _this.b21.frame=0;   
                          _this.b31.frame=0;   
                          _this.b41.frame=0;   
                          _this.b51.frame=0;   
                          _this.b61.frame=0;   
                          _this.b71.frame=0;   
                          _this.b81.frame=0;   
                          _this.b91.frame=0;
                             _this.one.visible=true;
                             _this.one.inputEnabled=true;
                             _this.a1=1;
                         }  
            else if(_this.two.visible==false&&_this.b2.frame==1&&_this.b12.frame==1&&_this.b22.frame==1&&_this.b32.frame==1&&_this.b42.frame==1&&_this.b52.frame==1&&_this.b62.frame==1&&_this.b72.frame==1&&_this.b82.frame==1&&_this.b92.frame==1)
                       {
                         _this.b2.frame=0;   
                          _this.b12.frame=0;   
                          _this.b22.frame=0;   
                          _this.b32.frame=0;   
                          _this.b42.frame=0;   
                          _this.b52.frame=0;   
                          _this.b62.frame=0;   
                          _this.b72.frame=0;   
                          _this.b82.frame=0;   
                          _this.b92.frame=0;
                            _this.two.visible=true;
                           _this.two.inputEnabled=true;
                           _this.a2=1;
                       }
                   else if(_this.three.visible==false&&_this.b3.frame==1&&_this.b13.frame==1&&_this.b23.frame==1&&_this.b33.frame==1&&_this.b43.frame==1&&_this.b53.frame==1&&_this.b63.frame==1&&_this.b73.frame==1&&_this.b83.frame==1&&_this.b93.frame==1)
                       {
                           _this.b3.frame=0;   
                          _this.b13.frame=0;   
                          _this.b23.frame=0;   
                          _this.b33.frame=0;   
                          _this.b43.frame=0;   
                          _this.b53.frame=0;   
                          _this.b63.frame=0;   
                          _this.b73.frame=0;   
                          _this.b83.frame=0;   
                          _this.b93.frame=0;
                           _this.three.visible=true;
                           _this.three.inputEnabled=true;
                           _this.a3=1;
                       }
                   else if(_this.four.visible==false&&_this.b4.frame==1&&_this.b14.frame==1&&_this.b24.frame==1&&_this.b34.frame==1&&_this.b44.frame==1&&_this.b54.frame==1&&_this.b64.frame==1&&_this.b74.frame==1&&_this.b84.frame==1&&_this.b94.frame==1)
                       {
                           _this.b4.frame=0;   
                          _this.b14.frame=0;   
                          _this.b24.frame=0;   
                          _this.b34.frame=0;   
                          _this.b44.frame=0;   
                          _this.b54.frame=0;   
                          _this.b64.frame=0;   
                          _this.b74.frame=0;   
                          _this.b84.frame=0;   
                          _this.b94.frame=0;
                           _this.four.visible=true;
                           _this.four.inputEnabled=true;
                           _this.a4=1;
                       }
                   else if(_this.five.visible==false&&_this.b5.frame==1&&_this.b15.frame==1&&_this.b25.frame==1&&_this.b35.frame==1&&_this.b45.frame==1&&_this.b55.frame==1&&_this.b65.frame==1&&_this.b75.frame==1&&_this.b85.frame==1&&_this.b95.frame==1)
                       {
                          _this.b5.frame=0;   
                          _this.b15.frame=0;   
                          _this.b25.frame=0;   
                          _this.b35.frame=0;   
                          _this.b45.frame=0;   
                          _this.b55.frame=0;   
                          _this.b65.frame=0;   
                          _this.b75.frame=0;   
                          _this.b85.frame=0;   
                          _this.b95.frame=0;
                           _this.five.visible=true;
                           _this.five.inputEnabled=true;
                           _this.a5=1;
                       }
                   else if(_this.six.visible==false&&_this.b6.frame==1&&_this.b16.frame==1&&_this.b26.frame==1&&_this.b36.frame==1&&_this.b46.frame==1&&_this.b56.frame==1&&_this.b66.frame==1&&_this.b76.frame==1&&_this.b86.frame==1&&_this.b96.frame==1)
                       {
                           _this.b6.frame=0;   
                          _this.b16.frame=0;   
                          _this.b26.frame=0;   
                          _this.b36.frame=0;   
                          _this.b46.frame=0;   
                          _this.b56.frame=0;   
                          _this.b66.frame=0;   
                          _this.b76.frame=0;   
                          _this.b86.frame=0;   
                          _this.b96.frame=0;
                           _this.six.visible=true;
                           _this.six.inputEnabled=true;
                           _this.a6=1;
                       }
                   else if(_this.seven.visible==false&&_this.b7.frame==1&&_this.b17.frame==1&&_this.b27.frame==1&&_this.b37.frame==1&&_this.b47.frame==1&&_this.b57.frame==1&&_this.b67.frame==1&&_this.b77.frame==1&&_this.b87.frame==1&&_this.b97.frame==1)
                       {
                           _this.b7.frame=0;   
                          _this.b17.frame=0;   
                          _this.b27.frame=0;   
                          _this.b37.frame=0;   
                          _this.b47.frame=0;   
                          _this.b57.frame=0;   
                          _this.b67.frame=0;   
                          _this.b77.frame=0;   
                          _this.b87.frame=0;   
                          _this.b97.frame=0;
                           _this.seven.visible=true;
                           _this.seven.inputEnabled=true;
                           _this.a7=1;
                       }
                   else if(_this.eight.visible==false&&_this.b8.frame==1&&_this.b18.frame==1&&_this.b28.frame==1&&_this.b38.frame==1&&_this.b48.frame==1&&_this.b58.frame==1&&_this.b68.frame==1&&_this.b78.frame==1&&_this.b88.frame==1&&_this.b98.frame==1)
                       {
                          _this.b8.frame=0;   
                          _this.b18.frame=0;   
                          _this.b28.frame=0;   
                          _this.b38.frame=0;   
                          _this.b48.frame=0;   
                          _this.b58.frame=0;   
                          _this.b68.frame=0;   
                          _this.b78.frame=0;   
                          _this.b88.frame=0;   
                          _this.b98.frame=0;
                           _this.eight.visible=true;
                           _this.eight.inputEnabled=true;
                           _this.a8=1;
                       }
                   else if(_this.nine.visible==false&&_this.b9.frame==1&&_this.b19.frame==1&&_this.b29.frame==1&&_this.b39.frame==1&&_this.b49.frame==1&&_this.b59.frame==1&&_this.b69.frame==1&&_this.b79.frame==1&&_this.b89.frame==1&&_this.b99.frame==1)
                       {
                           _this.b9.frame=0;   
                          _this.b19.frame=0;   
                          _this.b29.frame=0;   
                          _this.b39.frame=0;   
                          _this.b49.frame=0;   
                          _this.b59.frame=0;   
                          _this.b69.frame=0;   
                          _this.b79.frame=0;   
                          _this.b89.frame=0;   
                          _this.b99.frame=0;
                           _this.nine.visible=true;
                           _this.nine.inputEnabled=true;
                           _this.a9=1;
                       }
                   else if(_this.ten.visible==false&&_this.b10.frame==1&&_this.b20.frame==1&&_this.b30.frame==1&&_this.b40.frame==1&&_this.b50.frame==1&&_this.b60.frame==1&&_this.b70.frame==1&&_this.b80.frame==1&&_this.b90.frame==1&&_this.b100.frame==1)
                       {
                          _this.b10.frame=0;   
                          _this.b20.frame=0;   
                          _this.b30.frame=0;   
                          _this.b40.frame=0;   
                          _this.b50.frame=0;   
                          _this.b60.frame=0;   
                          _this.b70.frame=0;   
                          _this.b80.frame=0;   
                          _this.b90.frame=0;   
                          _this.b100.frame=0;
                           _this.ten.visible=true;
                           _this.ten.inputEnabled=true;
                           _this.a10=1;
                       }
                       }
                    _this.bigblock.x=_this.bigboxX;
                          _this.bigblock.y=_this.bigboxY;
               }
         _this.bigblock.x=_this.bigboxX;
                          _this.bigblock.y=_this.bigboxY;
             console.log("b: "+_this.b);
                   console.log("a: "+_this.a);
       },
    
    drag2:function(target){
        
           if(_this.checkOverlap(target,_this.grid))
               {
            if(_this.a1==0&&_this.a2==0&&_this.a3==0&&_this.a4==0&&_this.a5==0&&_this.a6==0&&_this.a7==0&&_this.a8==0&&_this.a9==0&&_this.a10==0)
                       {
                   if(_this.one2.visible==false&&_this.b1.frame==1&&_this.b2.frame==1&&_this.b3.frame==1&&_this.b4.frame==1&&_this.b5.frame==1&&_this.b6.frame==1&&_this.b7.frame==1&&_this.b8.frame==1&&_this.b9.frame==1&&_this.b10.frame==1)
                       {
                           _this.b1.frame=0;
                           _this.b2.frame=0;
                           _this.b3.frame=0;
                           _this.b4.frame=0;
                           _this.b5.frame=0;
                           _this.b6.frame=0;
                           _this.b7.frame=0;
                           _this.b8.frame=0;
                           _this.b9.frame=0;
                           _this.b10.frame=0;
                           _this.one2.visible=true;
                             _this.one2.inputEnabled=true;
                           _this.d1=1;
                       }
                   else if(_this.two2.visible==false&&_this.b11.frame==1&&_this.b12.frame==1&&_this.b13.frame==1&&_this.b14.frame==1&&_this.b15.frame==1&&_this.b16.frame==1&&_this.b17.frame==1&&_this.b18.frame==1&&_this.b19.frame==1&&_this.b20.frame==1)
                       {
                           _this.b11.frame=0;
                           _this.b12.frame=0;
                           _this.b13.frame=0;
                           _this.b14.frame=0;
                           _this.b15.frame=0;
                           _this.b16.frame=0;
                           _this.b17.frame=0;
                           _this.b18.frame=0;
                           _this.b19.frame=0;
                           _this.b20.frame=0;
                           _this.two2.visible=true;
                             _this.two2.inputEnabled=true;
                           _this.d2=1;
                       }
                   else if(_this.three2.visible==false&&_this.b21.frame==1&&_this.b22.frame==1&&_this.b23.frame==1&&_this.b24.frame==1&&_this.b25.frame==1&&_this.b26.frame==1&&_this.b27.frame==1&&_this.b28.frame==1&&_this.b29.frame==1&&_this.b30.frame==1)
                       {
                           _this.b21.frame=0;
                           _this.b22.frame=0;
                           _this.b23.frame=0;
                           _this.b24.frame=0;
                           _this.b25.frame=0;
                           _this.b26.frame=0;
                           _this.b27.frame=0;
                           _this.b28.frame=0;
                           _this.b29.frame=0;
                           _this.b30.frame=0;
                           _this.three2.visible=true;
                             _this.three2.inputEnabled=true;
                           _this.d3=1;
                       }
                   else if(_this.four2.visible==false&&_this.b31.frame==1&&_this.b32.frame==1&&_this.b33.frame==1&&_this.b34.frame==1&&_this.b35.frame==1&&_this.b36.frame==1&&_this.b37.frame==1&&_this.b38.frame==1&&_this.b39.frame==1&&_this.b40.frame==1)
                       {
                           _this.b31.frame=0;
                           _this.b32.frame=0;
                           _this.b33.frame=0;
                           _this.b34.frame=0;
                           _this.b35.frame=0;
                           _this.b36.frame=0;
                           _this.b37.frame=0;
                           _this.b38.frame=0;
                           _this.b39.frame=0;
                           _this.b40.frame=0;
                           _this.four2.visible=true;
                             _this.four2.inputEnabled=true;
                           _this.d4=1;
                       }
                   else if(_this.five2.visible==false&&_this.b41.frame==1&&_this.b42.frame==1&&_this.b43.frame==1&&_this.b44.frame==1&&_this.b45.frame==1&&_this.b46.frame==1&&_this.b47.frame==1&&_this.b48.frame==1&&_this.b49.frame==1&&_this.b50.frame==1)
                       {
                           _this.b41.frame=0;
                           _this.b42.frame=0;
                           _this.b43.frame=0;
                           _this.b44.frame=0;
                           _this.b45.frame=0;
                           _this.b46.frame=0;
                           _this.b47.frame=0;
                           _this.b48.frame=0;
                           _this.b49.frame=0;
                           _this.b50.frame=0;
                           _this.five2.visible=true;
                             _this.five2.inputEnabled=true;
                           _this.d5=1;
                       }
                   else if(_this.six2.visible==false&&_this.b51.frame==1&&_this.b52.frame==1&&_this.b53.frame==1&&_this.b54.frame==1&&_this.b55.frame==1&&_this.b56.frame==1&&_this.b57.frame==1&&_this.b58.frame==1&&_this.b59.frame==1&&_this.b60.frame==1)
                       {
                           _this.b51.frame=0;
                           _this.b52.frame=0;
                           _this.b53.frame=0;
                           _this.b54.frame=0;
                           _this.b55.frame=0;
                           _this.b56.frame=0;
                           _this.b57.frame=0;
                           _this.b58.frame=0;
                           _this.b59.frame=0;
                           _this.b60.frame=0;
                           _this.six2.visible=true;
                             _this.six2.inputEnabled=true;
                           _this.d6=1;
                       }
                   else if(_this.seven2.visible==false&&_this.b61.frame==1&&_this.b62.frame==1&&_this.b63.frame==1&&_this.b64.frame==1&&_this.b65.frame==1&&_this.b66.frame==1&&_this.b67.frame==1&&_this.b68.frame==1&&_this.b69.frame==1&&_this.b70.frame==1)
                       {
                           _this.b61.frame=0;
                           _this.b62.frame=0;
                           _this.b63.frame=0;
                           _this.b64.frame=0;
                           _this.b65.frame=0;
                           _this.b66.frame=0;
                           _this.b67.frame=0;
                           _this.b68.frame=0;
                           _this.b69.frame=0;
                           _this.b70.frame=0;
                           _this.seven2.visible=true;
                             _this.seven2.inputEnabled=true;
                           _this.d7=1;
                       }
                   else if(_this.eight2.visible==false&&_this.b71.frame==1&&_this.b72.frame==1&&_this.b73.frame==1&&_this.b74.frame==1&&_this.b75.frame==1&&_this.b76.frame==1&&_this.b77.frame==1&&_this.b78.frame==1&&_this.b79.frame==1&&_this.b80.frame==1)
                       {
                           _this.b71.frame=0;
                           _this.b72.frame=0;
                           _this.b73.frame=0;
                           _this.b74.frame=0;
                           _this.b75.frame=0;
                           _this.b76.frame=0;
                           _this.b77.frame=0;
                           _this.b78.frame=0;
                           _this.b79.frame=0;
                           _this.b80.frame=0;
                           _this.eight2.visible=true;
                             _this.eight2.inputEnabled=true;
                           _this.d8=1;
                       }
                   else if(_this.nine2.visible==false&&_this.b81.frame==1&&_this.b82.frame==1&&_this.b83.frame==1&&_this.b84.frame==1&&_this.b85.frame==1&&_this.b86.frame==1&&_this.b87.frame==1&&_this.b88.frame==1&&_this.b89.frame==1&&_this.b90.frame==1)
                       {
                           _this.b81.frame=0;
                           _this.b82.frame=0;
                           _this.b83.frame=0;
                           _this.b84.frame=0;
                           _this.b85.frame=0;
                           _this.b86.frame=0;
                           _this.b87.frame=0;
                           _this.b88.frame=0;
                           _this.b89.frame=0;
                           _this.b90.frame=0;
                           _this.nine2.visible=true;
                             _this.nine2.inputEnabled=true;
                           _this.d9=1;
                       }
                   else if(_this.ten2.visible==false&&_this.b91.frame==1&&_this.b92.frame==1&&_this.b93.frame==1&&_this.b94.frame==1&&_this.b95.frame==1&&_this.b96.frame==1&&_this.b97.frame==1&&_this.b98.frame==1&&_this.b99.frame==1&&_this.b100.frame==1)
                       {
                           _this.b91.frame=0;
                           _this.b92.frame=0;
                           _this.b93.frame=0;
                           _this.b94.frame=0;
                           _this.b95.frame=0;
                           _this.b96.frame=0;
                           _this.b97.frame=0;
                           _this.b98.frame=0;
                           _this.b99.frame=0;
                           _this.b100.frame=0;
                           _this.ten2.visible=true;
                             _this.ten2.inputEnabled=true;
                           _this.d10=1;
                       }
                       }
                    _this.bigblock2.x=_this.bigbox2X;
                          _this.bigblock2.y=_this.bigbox2Y;
               }
         _this.bigblock2.x=_this.bigbox2X;
                          _this.bigblock2.y=_this.bigbox2Y;
       },
    
    drag3:function(target){
           
           if(_this.checkOverlap(target,_this.grid))
               {
                   console.log("b: "+_this.b);
                   console.log("a: "+_this.a);
                   _this.world.bringToTop(_this.stackgrp);
        _this.stackgrp.bringToTop(target);
            if(_this.d1==0&&_this.d2==0&&_this.d3==0&&_this.d4==0&&_this.d5==0&&_this.d6==0&&_this.d7==0&&_this.d8==0&&_this.d9==0&&_this.d10==0)
                      {
                   if(_this.b1.frame==1)
                       {
                           _this.b1.frame=0;
                           _this.b1.inputEnabled=true;
                       }
                    else if(_this.b11.frame==1)
                       {
                           _this.b11.frame=0;
                           _this.b11.inputEnabled=true;
                       }
                   else if(_this.b21.frame==1)
                       {
                           _this.b21.frame=0;
                           _this.b21.inputEnabled=true;
                       }
                   else if(_this.b31.frame==1)
                       {
                           _this.b31.frame=0;
                           _this.b31.inputEnabled=true;
                       }
                   else if(_this.b41.frame==1)
                       {
                           _this.b41.frame=0;
                           _this.b41.inputEnabled=true;
                       }
                   else if(_this.b51.frame==1)
                       {
                           _this.b51.frame=0;
                           _this.b51.inputEnabled=true;
                       }
                   else if(_this.b61.frame==1)
                       {
                           _this.b61.frame=0;
                           _this.b61.inputEnabled=true;
                       }
                   else if(_this.b71.frame==1)
                       {
                           _this.b71.frame=0;
                           _this.b71.inputEnabled=true;
                       }
                   else if(_this.b81.frame==1)
                       {
                           _this.b81.frame=0;
                           _this.b81.inputEnabled=true;
                       }
                   else if(_this.b91.frame==1)
                       {
                           _this.b91.frame=0;
                           _this.b91.inputEnabled=true;
                       }
                   else if(_this.b2.frame==1)
                       {
                           _this.b2.frame=0;
                           _this.b2.inputEnabled=true;
                       }
                   else if(_this.b12.frame==1)
                       {
                           _this.b12.frame=0;
                           _this.b12.inputEnabled=true;
                       }
                   else if(_this.b22.frame==1)
                       {
                           _this.b22.frame=0;
                           _this.b22.inputEnabled=true;
                       }
                   else if(_this.b32.frame==1)
                       {
                           _this.b32.frame=0;
                           _this.b32.inputEnabled=true;
                       }
                   else if(_this.b42.frame==1)
                       {
                           _this.b42.frame=0;
                           _this.b42.inputEnabled=true;
                       }
                   else if(_this.b52.frame==1)
                       {
                           _this.b52.frame=0;
                           _this.b52.inputEnabled=true;
                       }
                   else if(_this.b62.frame==1)
                       {
                           _this.b62.frame=0;
                           _this.b62.inputEnabled=true;
                       }
                   else if(_this.b72.frame==1)
                       {
                           _this.b72.frame=0;
                           _this.b72.inputEnabled=true;
                       }
                   else if(_this.b82.frame==1)
                       {
                           _this.b82.frame=0;
                           _this.b82.inputEnabled=true;
                       }
                   else if(_this.b92.frame==1)
                       {
                           _this.b92.frame=0;
                           _this.b92.inputEnabled=true;
                       }
                   else if(_this.b3.frame==1)
                       {
                           _this.b3.frame=0;
                           _this.b3.inputEnabled=true;
                       }
                   else if(_this.b13.frame==1)
                       {
                           _this.b13.frame=0;
                           _this.b13.inputEnabled=true;
                       }
                   else if(_this.b23.frame==1)
                       {
                           _this.b23.frame=0;
                           _this.b23.inputEnabled=true;
                       }
                   else if(_this.b33.frame==1)
                       {
                           _this.b33.frame=0;
                           _this.b33.inputEnabled=true;
                       }
                   else if(_this.b43.frame==1)
                       {
                           _this.b43.frame=0;
                           _this.b43.inputEnabled=true;
                       }
                   else if(_this.b53.frame==1)
                       {
                           _this.b53.frame=0;
                           _this.b53.inputEnabled=true;
                       }
                   else if(_this.b63.frame==1)
                       {
                           _this.b63.frame=0;
                           _this.b63.inputEnabled=true;
                       }
                   else if(_this.b73.frame==1)
                       {
                           _this.b73.frame=0;
                           _this.b73.inputEnabled=true;
                       }
                   else if(_this.b83.frame==1)
                       {
                           _this.b83.frame=0;
                           _this.b83.inputEnabled=true;
                       }
                   else if(_this.b93.frame==1)
                       {
                           _this.b93.frame=0;
                           _this.b93.inputEnabled=true;
                       }
                   else if(_this.b4.frame==1)
                       {
                           _this.b4.frame=0;
                           _this.b4.inputEnabled=true;
                       }
                   else if(_this.b14.frame==1)
                       {
                           _this.b14.frame=0;
                           _this.b14.inputEnabled=true;
                       }
                   else if(_this.b24.frame==1)
                       {
                           _this.b24.frame=0;
                           _this.b24.inputEnabled=true;
                       }
                   else if(_this.b34.frame==1)
                       {
                           _this.b34.frame=0;
                           _this.b34.inputEnabled=true;
                       }
                   else if(_this.b44.frame==1)
                       {
                           _this.b44.frame=0;
                           _this.b44.inputEnabled=true;
                       }
                   else if(_this.b54.frame==1)
                       {
                           _this.b54.frame=0;
                           _this.b54.inputEnabled=true;
                       }
                   else if(_this.b64.frame==1)
                       {
                           _this.b64.frame=0;
                           _this.b64.inputEnabled=true;
                       }
                   else if(_this.b74.frame==1)
                       {
                           _this.b74.frame=0;
                           _this.b74.inputEnabled=true;
                       }
                   else if(_this.b84.frame==1)
                       {
                           _this.b84.frame=0;
                           _this.b84.inputEnabled=true;
                       }
                   else if(_this.b94.frame==1)
                       {
                           _this.b94.frame=0;
                           _this.b94.inputEnabled=true;
                       }
                   else if(_this.b5.frame==1)
                       {
                           _this.b5.frame=0;
                           _this.b5.inputEnabled=true;
                       }
                   else if(_this.b15.frame==1)
                       {
                           _this.b15.frame=0;
                           _this.b15.inputEnabled=true;
                       }
                   else if(_this.b25.frame==1)
                       {
                           _this.b25.frame=0;
                           _this.b25.inputEnabled=true;
                       }
                   else if(_this.b35.frame==1)
                       {
                           _this.b35.frame=0;
                           _this.b35.inputEnabled=true;
                       }
                   else if(_this.b45.frame==1)
                       {
                           _this.b45.frame=0;
                           _this.b45.inputEnabled=true;
                       }
                   else if(_this.b55.frame==1)
                       {
                           _this.b55.frame=0;
                           _this.b55.inputEnabled=true;
                       }
                   else if(_this.b65.frame==1)
                       {
                           _this.b65.frame=0;
                           _this.b65.inputEnabled=true;
                       }
                   else if(_this.b75.frame==1)
                       {
                           _this.b75.frame=0;
                           _this.b75.inputEnabled=true;
                       }
                   else if(_this.b85.frame==1)
                       {
                           _this.b85.frame=0;
                           _this.b85.inputEnabled=true;
                       }
                   else if(_this.b95.frame==1)
                       {
                           _this.b95.frame=0;
                           _this.b95.inputEnabled=true;
                       }
                   else if(_this.b6.frame==1)
                       {
                           _this.b6.frame=0;
                           _this.b6.inputEnabled=true;
                       }
                   else if(_this.b16.frame==1)
                       {
                           _this.b16.frame=0;
                           _this.b16.inputEnabled=true;
                       }
                   else if(_this.b26.frame==1)
                       {
                           _this.b26.frame=0;
                           _this.b26.inputEnabled=true;
                       }
                   else if(_this.b36.frame==1)
                       {
                           _this.b36.frame=0;
                           _this.b36.inputEnabled=true;
                       }
                   else if(_this.b46.frame==1)
                       {
                           _this.b46.frame=0;
                           _this.b46.inputEnabled=true;
                       }
                   else if(_this.b56.frame==1)
                       {
                           _this.b56.frame=0;
                           _this.b56.inputEnabled=true;
                       }
                   else if(_this.b66.frame==1)
                       {
                           _this.b66.frame=0;
                           _this.b66.inputEnabled=true;
                       }
                   else if(_this.b76.frame==1)
                       {
                           _this.b76.frame=0;
                           _this.b76.inputEnabled=true;
                       }
                   else if(_this.b86.frame==1)
                       {
                           _this.b86.frame=0;
                           _this.b86.inputEnabled=true;
                       }
                   else if(_this.b96.frame==1)
                       {
                           _this.b96.frame=0;
                           _this.b96.inputEnabled=true;
                       }
                   else if(_this.b7.frame==1)
                       {
                           _this.b7.frame=0;
                           _this.b7.inputEnabled=true;
                       }
                   else if(_this.b17.frame==1)
                       {
                           _this.b17.frame=0;
                           _this.b17.inputEnabled=true;
                       }
                   else if(_this.b27.frame==1)
                       {
                           _this.b27.frame=0;
                           _this.b27.inputEnabled=true;
                       }
                   else if(_this.b37.frame==1)
                       {
                           _this.b37.frame=0;
                           _this.b37.inputEnabled=true;
                       }
                   else if(_this.b47.frame==1)
                       {
                           _this.b47.frame=0;
                           _this.b47.inputEnabled=true;
                       }
                   else if(_this.b57.frame==1)
                       {
                           _this.b57.frame=0;
                           _this.b57.inputEnabled=true;
                       }
                   else if(_this.b67.frame==1)
                       {
                           _this.b67.frame=0;
                           _this.b67.inputEnabled=true;
                       }
                   else if(_this.b77.frame==1)
                       {
                           _this.b77.frame=0;
                           _this.b77.inputEnabled=true;
                       }
                   else if(_this.b87.frame==1)
                       {
                           _this.b87.frame=0;
                           _this.b87.inputEnabled=true;
                       }
                   else if(_this.b97.frame==1)
                       {
                           _this.b97.frame=0;
                           _this.b97.inputEnabled=true;
                       }
                   else if(_this.b8.frame==1)
                       {
                           _this.b8.frame=0;
                           _this.b8.inputEnabled=true;
                       }
                   else if(_this.b18.frame==1)
                       {
                           _this.b18.frame=0;
                           _this.b18.inputEnabled=true;
                       }
                   else if(_this.b28.frame==1)
                       {
                           _this.b28.frame=0;
                           _this.b28.inputEnabled=true;
                       }
                   else if(_this.b38.frame==1)
                       {
                           _this.b38.frame=0;
                           _this.b38.inputEnabled=true;
                       }
                   else if(_this.b48.frame==1)
                       {
                           _this.b48.frame=0;
                           _this.b48.inputEnabled=true;
                       }
                   else if(_this.b58.frame==1)
                       {
                           _this.b58.frame=0;
                           _this.b58.inputEnabled=true;
                       }
                   else if(_this.b68.frame==1)
                       {
                           _this.b68.frame=0;
                           _this.b68.inputEnabled=true;
                       }
                   else if(_this.b78.frame==1)
                       {
                           _this.b78.frame=0;
                           _this.b78.inputEnabled=true;
                       }
                   else if(_this.b88.frame==1)
                       {
                           _this.b88.frame=0;
                           _this.b88.inputEnabled=true;
                       }
                   else if(_this.b98.frame==1)
                       {
                           _this.b98.frame=0;
                           _this.b98.inputEnabled=true;
                       }
                   else if(_this.b9.frame==1)
                       {
                           _this.b9.frame=0;
                           _this.b9.inputEnabled=true;
                       }
                   else if(_this.b19.frame==1)
                       {
                           _this.b19.frame=0;
                           _this.b19.inputEnabled=true;
                       }
                   else if(_this.b29.frame==1)
                       {
                           _this.b29.frame=0;
                           _this.b29.inputEnabled=true;
                       }
                   else if(_this.b39.frame==1)
                       {
                           _this.b39.frame=0;
                           _this.b39.inputEnabled=true;
                       }
                   else if(_this.b49.frame==1)
                       {
                           _this.b49.frame=0;
                           _this.b49.inputEnabled=true;
                       }
                   else if(_this.b59.frame==1)
                       {
                           _this.b59.frame=0;
                           _this.b59.inputEnabled=true;
                       }
                   else if(_this.b69.frame==1)
                       {
                           _this.b69.frame=0;
                           _this.b69.inputEnabled=true;
                       }
                   else if(_this.b79.frame==1)
                       {
                           _this.b79.frame=0;
                           _this.b79.inputEnabled=true;
                       }
                   else if(_this.b89.frame==1)
                       {
                           _this.b89.frame=0;
                           _this.b89.inputEnabled=true;
                       }
                   else if(_this.b99.frame==1)
                       {
                           _this.b99.frame=0;
                           _this.b99.inputEnabled=true;
                       }
                   else if(_this.b10.frame==1)
                       {
                           _this.b10.frame=0;
                           _this.b10.inputEnabled=true;
                       }
                   else if(_this.b20.frame==1)
                       {
                           _this.b20.frame=0;
                           _this.b20.inputEnabled=true;
                       }
                   else if(_this.b30.frame==1)
                       {
                           _this.b30.frame=0;
                           _this.b30.inputEnabled=true;
                       }
                   else if(_this.b40.frame==1)
                       {
                           _this.b40.frame=0;
                           _this.b40.inputEnabled=true;
                       }
                   else if(_this.b50.frame==1)
                       {
                           _this.b50.frame=0;
                           _this.b50.inputEnabled=true;
                       }
                   else if(_this.b60.frame==1)
                       {
                           _this.b60.frame=0;
                           _this.b60.inputEnabled=true;
                       }
                   else if(_this.b70.frame==1)
                       {
                           _this.b70.frame=0;
                           _this.b70.inputEnabled=true;
                       }
                   else if(_this.b80.frame==1)
                       {
                           _this.b80.frame=0;
                           _this.b80.inputEnabled=true;
                       }
                   else if(_this.b90.frame==1)
                       {
                           _this.b90.frame=0;
                           _this.b90.inputEnabled=true;
                       }
                   else if(_this.b100.frame==1)
                       {
                           _this.b100.frame=0;
                           _this.b100.inputEnabled=true;
                       }
                      }
            else if(_this.d1==0&&_this.d2==0&&_this.d3==0&&_this.d4==0&&_this.d5==0&&_this.d6==0&&_this.d7==0&&_this.d8==0&&_this.d9==0&&_this.d10==0&&_this.a1==0&&_this.a2==0&&_this.a3==0&&_this.a4==0&&_this.a5==0&&_this.a6==0&&_this.a7==0&&_this.a8==0&&_this.a9==0&&_this.a10==0)
                {
                   if(_this.b1.frame==1)
                       {
                           _this.b1.frame=0;
                           _this.b1.inputEnabled=true;
                       }
                    else if(_this.b11.frame==1)
                       {
                           _this.b11.frame=0;
                           _this.b11.inputEnabled=true;
                       }
                   else if(_this.b21.frame==1)
                       {
                           _this.b21.frame=0;
                           _this.b21.inputEnabled=true;
                       }
                   else if(_this.b31.frame==1)
                       {
                           _this.b31.frame=0;
                           _this.b31.inputEnabled=true;
                       }
                   else if(_this.b41.frame==1)
                       {
                           _this.b41.frame=0;
                           _this.b41.inputEnabled=true;
                       }
                   else if(_this.b51.frame==1)
                       {
                           _this.b51.frame=0;
                           _this.b51.inputEnabled=true;
                       }
                   else if(_this.b61.frame==1)
                       {
                           _this.b61.frame=0;
                           _this.b61.inputEnabled=true;
                       }
                   else if(_this.b71.frame==1)
                       {
                           _this.b71.frame=0;
                           _this.b71.inputEnabled=true;
                       }
                   else if(_this.b81.frame==1)
                       {
                           _this.b81.frame=0;
                           _this.b81.inputEnabled=true;
                       }
                   else if(_this.b91.frame==1)
                       {
                           _this.b91.frame=0;
                           _this.b91.inputEnabled=true;
                       }
                   else if(_this.b2.frame==1)
                       {
                           _this.b2.frame=0;
                           _this.b2.inputEnabled=true;
                       }
                   else if(_this.b12.frame==1)
                       {
                           _this.b12.frame=0;
                           _this.b12.inputEnabled=true;
                       }
                   else if(_this.b22.frame==1)
                       {
                           _this.b22.frame=0;
                           _this.b22.inputEnabled=true;
                       }
                   else if(_this.b32.frame==1)
                       {
                           _this.b32.frame=0;
                           _this.b32.inputEnabled=true;
                       }
                   else if(_this.b42.frame==1)
                       {
                           _this.b42.frame=0;
                           _this.b42.inputEnabled=true;
                       }
                   else if(_this.b52.frame==1)
                       {
                           _this.b52.frame=0;
                           _this.b52.inputEnabled=true;
                       }
                   else if(_this.b62.frame==1)
                       {
                           _this.b62.frame=0;
                           _this.b62.inputEnabled=true;
                       }
                   else if(_this.b72.frame==1)
                       {
                           _this.b72.frame=0;
                           _this.b72.inputEnabled=true;
                       }
                   else if(_this.b82.frame==1)
                       {
                           _this.b82.frame=0;
                           _this.b82.inputEnabled=true;
                       }
                   else if(_this.b92.frame==1)
                       {
                           _this.b92.frame=0;
                           _this.b92.inputEnabled=true;
                       }
                   else if(_this.b3.frame==1)
                       {
                           _this.b3.frame=0;
                           _this.b3.inputEnabled=true;
                       }
                   else if(_this.b13.frame==1)
                       {
                           _this.b13.frame=0;
                           _this.b13.inputEnabled=true;
                       }
                   else if(_this.b23.frame==1)
                       {
                           _this.b23.frame=0;
                           _this.b23.inputEnabled=true;
                       }
                   else if(_this.b33.frame==1)
                       {
                           _this.b33.frame=0;
                           _this.b33.inputEnabled=true;
                       }
                   else if(_this.b43.frame==1)
                       {
                           _this.b43.frame=0;
                           _this.b43.inputEnabled=true;
                       }
                   else if(_this.b53.frame==1)
                       {
                           _this.b53.frame=0;
                           _this.b53.inputEnabled=true;
                       }
                   else if(_this.b63.frame==1)
                       {
                           _this.b63.frame=0;
                           _this.b63.inputEnabled=true;
                       }
                   else if(_this.b73.frame==1)
                       {
                           _this.b73.frame=0;
                           _this.b73.inputEnabled=true;
                       }
                   else if(_this.b83.frame==1)
                       {
                           _this.b83.frame=0;
                           _this.b83.inputEnabled=true;
                       }
                   else if(_this.b93.frame==1)
                       {
                           _this.b93.frame=0;
                           _this.b93.inputEnabled=true;
                       }
                   else if(_this.b4.frame==1)
                       {
                           _this.b4.frame=0;
                           _this.b4.inputEnabled=true;
                       }
                   else if(_this.b14.frame==1)
                       {
                           _this.b14.frame=0;
                           _this.b14.inputEnabled=true;
                       }
                   else if(_this.b24.frame==1)
                       {
                           _this.b24.frame=0;
                           _this.b24.inputEnabled=true;
                       }
                   else if(_this.b34.frame==1)
                       {
                           _this.b34.frame=0;
                           _this.b34.inputEnabled=true;
                       }
                   else if(_this.b44.frame==1)
                       {
                           _this.b44.frame=0;
                           _this.b44.inputEnabled=true;
                       }
                   else if(_this.b54.frame==1)
                       {
                           _this.b54.frame=0;
                           _this.b54.inputEnabled=true;
                       }
                   else if(_this.b64.frame==1)
                       {
                           _this.b64.frame=0;
                           _this.b64.inputEnabled=true;
                       }
                   else if(_this.b74.frame==1)
                       {
                           _this.b74.frame=0;
                           _this.b74.inputEnabled=true;
                       }
                   else if(_this.b84.frame==1)
                       {
                           _this.b84.frame=0;
                           _this.b84.inputEnabled=true;
                       }
                   else if(_this.b94.frame==1)
                       {
                           _this.b94.frame=0;
                           _this.b94.inputEnabled=true;
                       }
                   else if(_this.b5.frame==1)
                       {
                           _this.b5.frame=0;
                           _this.b5.inputEnabled=true;
                       }
                   else if(_this.b15.frame==1)
                       {
                           _this.b15.frame=0;
                           _this.b15.inputEnabled=true;
                       }
                   else if(_this.b25.frame==1)
                       {
                           _this.b25.frame=0;
                           _this.b25.inputEnabled=true;
                       }
                   else if(_this.b35.frame==1)
                       {
                           _this.b35.frame=0;
                           _this.b35.inputEnabled=true;
                       }
                   else if(_this.b45.frame==1)
                       {
                           _this.b45.frame=0;
                           _this.b45.inputEnabled=true;
                       }
                   else if(_this.b55.frame==1)
                       {
                           _this.b55.frame=0;
                           _this.b55.inputEnabled=true;
                       }
                   else if(_this.b65.frame==1)
                       {
                           _this.b65.frame=0;
                           _this.b65.inputEnabled=true;
                       }
                   else if(_this.b75.frame==1)
                       {
                           _this.b75.frame=0;
                           _this.b75.inputEnabled=true;
                       }
                   else if(_this.b85.frame==1)
                       {
                           _this.b85.frame=0;
                           _this.b85.inputEnabled=true;
                       }
                   else if(_this.b95.frame==1)
                       {
                           _this.b95.frame=0;
                           _this.b95.inputEnabled=true;
                       }
                   else if(_this.b6.frame==1)
                       {
                           _this.b6.frame=0;
                           _this.b6.inputEnabled=true;
                       }
                   else if(_this.b16.frame==1)
                       {
                           _this.b16.frame=0;
                           _this.b16.inputEnabled=true;
                       }
                   else if(_this.b26.frame==1)
                       {
                           _this.b26.frame=0;
                           _this.b26.inputEnabled=true;
                       }
                   else if(_this.b36.frame==1)
                       {
                           _this.b36.frame=0;
                           _this.b36.inputEnabled=true;
                       }
                   else if(_this.b46.frame==1)
                       {
                           _this.b46.frame=0;
                           _this.b46.inputEnabled=true;
                       }
                   else if(_this.b56.frame==1)
                       {
                           _this.b56.frame=0;
                           _this.b56.inputEnabled=true;
                       }
                   else if(_this.b66.frame==1)
                       {
                           _this.b66.frame=0;
                           _this.b66.inputEnabled=true;
                       }
                   else if(_this.b76.frame==1)
                       {
                           _this.b76.frame=0;
                           _this.b76.inputEnabled=true;
                       }
                   else if(_this.b86.frame==1)
                       {
                           _this.b86.frame=0;
                           _this.b86.inputEnabled=true;
                       }
                   else if(_this.b96.frame==1)
                       {
                           _this.b96.frame=0;
                           _this.b96.inputEnabled=true;
                       }
                   else if(_this.b7.frame==1)
                       {
                           _this.b7.frame=0;
                           _this.b7.inputEnabled=true;
                       }
                   else if(_this.b17.frame==1)
                       {
                           _this.b17.frame=0;
                           _this.b17.inputEnabled=true;
                       }
                   else if(_this.b27.frame==1)
                       {
                           _this.b27.frame=0;
                           _this.b27.inputEnabled=true;
                       }
                   else if(_this.b37.frame==1)
                       {
                           _this.b37.frame=0;
                           _this.b37.inputEnabled=true;
                       }
                   else if(_this.b47.frame==1)
                       {
                           _this.b47.frame=0;
                           _this.b47.inputEnabled=true;
                       }
                   else if(_this.b57.frame==1)
                       {
                           _this.b57.frame=0;
                           _this.b57.inputEnabled=true;
                       }
                   else if(_this.b67.frame==1)
                       {
                           _this.b67.frame=0;
                           _this.b67.inputEnabled=true;
                       }
                   else if(_this.b77.frame==1)
                       {
                           _this.b77.frame=0;
                           _this.b77.inputEnabled=true;
                       }
                   else if(_this.b87.frame==1)
                       {
                           _this.b87.frame=0;
                           _this.b87.inputEnabled=true;
                       }
                   else if(_this.b97.frame==1)
                       {
                           _this.b97.frame=0;
                           _this.b97.inputEnabled=true;
                       }
                   else if(_this.b8.frame==1)
                       {
                           _this.b8.frame=0;
                           _this.b8.inputEnabled=true;
                       }
                   else if(_this.b18.frame==1)
                       {
                           _this.b18.frame=0;
                           _this.b18.inputEnabled=true;
                       }
                   else if(_this.b28.frame==1)
                       {
                           _this.b28.frame=0;
                           _this.b28.inputEnabled=true;
                       }
                   else if(_this.b38.frame==1)
                       {
                           _this.b38.frame=0;
                           _this.b38.inputEnabled=true;
                       }
                   else if(_this.b48.frame==1)
                       {
                           _this.b48.frame=0;
                           _this.b48.inputEnabled=true;
                       }
                   else if(_this.b58.frame==1)
                       {
                           _this.b58.frame=0;
                           _this.b58.inputEnabled=true;
                       }
                   else if(_this.b68.frame==1)
                       {
                           _this.b68.frame=0;
                           _this.b68.inputEnabled=true;
                       }
                   else if(_this.b78.frame==1)
                       {
                           _this.b78.frame=0;
                           _this.b78.inputEnabled=true;
                       }
                   else if(_this.b88.frame==1)
                       {
                           _this.b88.frame=0;
                           _this.b88.inputEnabled=true;
                       }
                   else if(_this.b98.frame==1)
                       {
                           _this.b98.frame=0;
                           _this.b98.inputEnabled=true;
                       }
                   else if(_this.b9.frame==1)
                       {
                           _this.b9.frame=0;
                           _this.b9.inputEnabled=true;
                       }
                   else if(_this.b19.frame==1)
                       {
                           _this.b19.frame=0;
                           _this.b19.inputEnabled=true;
                       }
                   else if(_this.b29.frame==1)
                       {
                           _this.b29.frame=0;
                           _this.b29.inputEnabled=true;
                       }
                   else if(_this.b39.frame==1)
                       {
                           _this.b39.frame=0;
                           _this.b39.inputEnabled=true;
                       }
                   else if(_this.b49.frame==1)
                       {
                           _this.b49.frame=0;
                           _this.b49.inputEnabled=true;
                       }
                   else if(_this.b59.frame==1)
                       {
                           _this.b59.frame=0;
                           _this.b59.inputEnabled=true;
                       }
                   else if(_this.b69.frame==1)
                       {
                           _this.b69.frame=0;
                           _this.b69.inputEnabled=true;
                       }
                   else if(_this.b79.frame==1)
                       {
                           _this.b79.frame=0;
                           _this.b79.inputEnabled=true;
                       }
                   else if(_this.b89.frame==1)
                       {
                           _this.b89.frame=0;
                           _this.b89.inputEnabled=true;
                       }
                   else if(_this.b99.frame==1)
                       {
                           _this.b99.frame=0;
                           _this.b99.inputEnabled=true;
                       }
                   else if(_this.b10.frame==1)
                       {
                           _this.b10.frame=0;
                           _this.b10.inputEnabled=true;
                       }
                   else if(_this.b20.frame==1)
                       {
                           _this.b20.frame=0;
                           _this.b20.inputEnabled=true;
                       }
                   else if(_this.b30.frame==1)
                       {
                           _this.b30.frame=0;
                           _this.b30.inputEnabled=true;
                       }
                   else if(_this.b40.frame==1)
                       {
                           _this.b40.frame=0;
                           _this.b40.inputEnabled=true;
                       }
                   else if(_this.b50.frame==1)
                       {
                           _this.b50.frame=0;
                           _this.b50.inputEnabled=true;
                       }
                   else if(_this.b60.frame==1)
                       {
                           _this.b60.frame=0;
                           _this.b60.inputEnabled=true;
                       }
                   else if(_this.b70.frame==1)
                       {
                           _this.b70.frame=0;
                           _this.b70.inputEnabled=true;
                       }
                   else if(_this.b80.frame==1)
                       {
                           _this.b80.frame=0;
                           _this.b80.inputEnabled=true;
                       }
                   else if(_this.b90.frame==1)
                       {
                           _this.b90.frame=0;
                           _this.b90.inputEnabled=true;
                       }
                   else if(_this.b100.frame==1)
                       {
                           _this.b100.frame=0;
                           _this.b100.inputEnabled=true;
                       }
                      }
                   else if(_this.a1==0&&_this.a2==0&&_this.a3==0&&_this.a4==0&&_this.a5==0&&_this.a6==0&&_this.a7==0&&_this.a8==0&&_this.a9==0&&_this.a10==0)
                       {
                         if(_this.b1.frame==1) 
                             {
                              _this.b1.frame=0; 
                              _this.b1.inputEnabled=true;
                             }
                            else if(_this.b2.frame==1)
                            {
                                _this.b2.frame=0;
                                _this.b2.inputEnabled=true;
                            }
                           else if(_this.b3.frame==1)
                            {
                                _this.b3.frame=0;
                                _this.b3.inputEnabled=true;
                            }
                           else if(_this.b4.frame==1)
                            {
                                _this.b4.frame=0; 
                                _this.b4.inputEnabled=true;
                            }
                           else if(_this.b5.frame==1)
                            {
                                _this.b5.frame=0;
                                _this.b5.inputEnabled=true;
                            }
                           else if(_this.b6.frame==1)
                            {
                                _this.b6.frame=0;
                                _this.b6.inputEnabled=true;
                            }
                           else if(_this.b7.frame==1)
                            {
                                _this.b7.frame=0;
                                _this.b7.inputEnabled=true;
                            }
                           else if(_this.b8.frame==1)
                            {
                                _this.b8.frame=0;
                                _this.b8inputEnabled=true;
                            }
                           else if(_this.b9.frame==1)
                            {
                                _this.b9.frame=0;
                                _this.b9.inputEnabled=true;
                            }
                           else if(_this.b10.frame==1)
                            {
                                _this.b10.frame=0;
                                _this.b10.inputEnabled=true;
                            }
                           else if(_this.b11.frame==1)
                            {
                                _this.b11.frame=0;
                                _this.b11.inputEnabled=true;
                            }
                           else if(_this.b12.frame==1) 
                             {
                              _this.b12.frame=0;
                                 _this.b12.inputEnabled=true;
                             }
                            else if(_this.b13.frame==1)
                            {
                                _this.b13.frame=0;
                                _this.b13.inputEnabled=true;
                            }
                           else if(_this.b14.frame==1)
                            {
                                _this.b14.frame=0;
                                _this.b14.inputEnabled=true;
                            }
                           else if(_this.b15.frame==1)
                            {
                                _this.b15.frame=0;
                                _this.b15.inputEnabled=true;
                            }
                           else if(_this.b16.frame==1)
                            {
                                _this.b16.frame=0;
                                _this.b16.inputEnabled=true;
                            }
                           else if(_this.b17.frame==1)
                            {
                                _this.b17.frame=0;
                                _this.b17.inputEnabled=true;
                            }
                           else if(_this.b18.frame==1)
                            {
                                _this.b18.frame=0;
                                _this.b18.inputEnabled=true;
                            }
                           else if(_this.b19.frame==1)
                            {
                                _this.b19.frame=0;
                                _this.b19.inputEnabled=true;
                            }
                           else if(_this.b20.frame==1)
                            {
                                _this.b20.frame=0;
                                _this.b20.inputEnabled=true;
                            }
                           else if(_this.b21.frame==1) 
                             {
                              _this.b21.frame=0; 
                                 _this.b21.inputEnabled=true;
                             }
                            else if(_this.b22.frame==1)
                            {
                                _this.b22.frame=0;
                                _this.b22.inputEnabled=true;
                            }
                           else if(_this.b23.frame==1)
                            {
                                _this.b23.frame=0; 
                                _this.b23.inputEnabled=true;
                            }
                           else if(_this.b24.frame==1)
                            {
                                _this.b24.frame=0; 
                                _this.b24.inputEnabled=true;
                            }
                           else if(_this.b25.frame==1)
                            {
                                _this.b25.frame=0;
                                _this.b25.inputEnabled=true;
                            }
                           else if(_this.b26.frame==1)
                            {
                                _this.b26.frame=0;
                                _this.b26.inputEnabled=true;
                            }
                           else if(_this.b27.frame==1)
                            {
                                _this.b27.frame=0;
                                _this.b27.inputEnabled=true;
                            }
                           else if(_this.b28.frame==1)
                            {
                                _this.b28.frame=0;
                                _this.b28.inputEnabled=true;
                            }
                           else if(_this.b29.frame==1)
                            {
                                _this.b29.frame=0;
                                _this.b29.inputEnabled=true;
                            }
                           else if(_this.b30.frame==1)
                            {
                                _this.b30.frame=0;
                                _this.b30.inputEnabled=true;
                            }
                           else if(_this.b31.frame==1) 
                             {
                              _this.b31.frame=0;
                                 _this.b31.inputEnabled=true;
                             }
                            else if(_this.b32.frame==1)
                            {
                                _this.b32.frame=0;
                                _this.b32.inputEnabled=true;
                            }
                           else if(_this.b33.frame==1)
                            {
                                _this.b33.frame=0;
                                _this.b33.inputEnabled=true;
                            }
                           else if(_this.b34.frame==1)
                            {
                                _this.b34.frame=0;
                                _this.b34.inputEnabled=true;
                            }
                           else if(_this.b35.frame==1)
                            {
                                _this.b35.frame=0;
                                _this.b35.inputEnabled=true;
                            }
                           else if(_this.b36.frame==1)
                            {
                                _this.b36.frame=0;
                                _this.b36.inputEnabled=true;
                            }
                           else if(_this.b37.frame==1)
                            {
                                _this.b37.frame=0;
                                _this.b37.inputEnabled=true;
                            }
                           else if(_this.b38.frame==1)
                            {
                                _this.b38.frame=0;
                                _this.b37.inputEnabled=true;
                            }
                           else if(_this.b39.frame==1)
                            {
                                _this.b39.frame=0;
                                _this.b39.inputEnabled=true;
                            }
                           else if(_this.b40.frame==1)
                            {
                                _this.b40.frame=0;
                                _this.b40.inputEnabled=true;
                            }
                           else if(_this.b41.frame==1) 
                             {
                              _this.b41.frame=0;
                                 _this.b41.inputEnabled=true;
                             }
                            else if(_this.b42.frame==1)
                            {
                                _this.b42.frame=0;
                                _this.b42.inputEnabled=true;
                            }
                           else if(_this.b43.frame==1)
                            {
                                _this.b43.frame=0; 
                                _this.b43.inputEnabled=true;
                            }
                           else if(_this.b44.frame==1)
                            {
                                _this.b44.frame=0; 
                                _this.b44.inputEnabled=true;
                            }
                           else if(_this.b45.frame==1)
                            {
                                _this.b45.frame=0; 
                                _this.b45.inputEnabled=true;
                            }
                           else if(_this.b46.frame==1)
                            {
                                _this.b46.frame=0; 
                                _this.b46.inputEnabled=true;
                            }
                           else if(_this.b47.frame==1)
                            {
                                _this.b47.frame=0;
                                _this.b47.inputEnabled=true;
                            }
                           else if(_this.b48.frame==1)
                            {
                                _this.b48.frame=0;
                                _this.b48.inputEnabled=true;
                            }
                           else if(_this.b49.frame==1)
                            {
                                _this.b49.frame=0; 
                                _this.b49.inputEnabled=true;
                            }
                           else if(_this.b50.frame==1)
                            {
                                _this.b50.frame=0;
                                _this.b50.inputEnabled=true;
                            }
                           else if(_this.b51.frame==1) 
                             {
                              _this.b51.frame=0;
                                 _this.b51.inputEnabled=true;
                             }
                            else if(_this.b52.frame==1)
                            {
                                _this.b52.frame=0;
                                _this.b52.inputEnabled=true;
                            }
                           else if(_this.b53.frame==1)
                            {
                                _this.b53.frame=0;
                                _this.b53.inputEnabled=true;
                            }
                           else if(_this.b54.frame==1)
                            {
                                _this.b54.frame=0;
                                _this.b54.inputEnabled=true;
                            }
                           else if(_this.b55.frame==1)
                            {
                                _this.b55.frame=0;
                                _this.b55.inputEnabled=true;
                            }
                           else if(_this.b56.frame==1)
                            {
                                _this.b56.frame=0;
                                _this.b56.inputEnabled=true;
                            }
                           else if(_this.b57.frame==1)
                            {
                                _this.b57.frame=0;
                                _this.b57.inputEnabled=true;
                            }
                           else if(_this.b58.frame==1)
                            {
                                _this.b58.frame=0;
                                _this.b58.inputEnabled=true;
                            }
                           else if(_this.b59.frame==1)
                            {
                                _this.b59.frame=0;
                                _this.b59.inputEnabled=true;
                            }
                           else if(_this.b60.frame==1)
                            {
                                _this.b60.frame=0;
                                _this.b60.inputEnabled=true;
                            }
                           else if(_this.b61.frame==1) 
                             {
                              _this.b61.frame=0;
                                 _this.b61.inputEnabled=true;
                             }
                            else if(_this.b62.frame==1)
                            {
                                _this.b62.frame=0;
                                _this.b62.inputEnabled=true;
                            }
                           else if(_this.b63.frame==1)
                            {
                                _this.b63.frame=0;
                                _this.b63.inputEnabled=true;
                            }
                           else if(_this.b64.frame==1)
                            {
                                _this.b64.frame=0;
                                _this.b64.inputEnabled=true;
                            }
                           else if(_this.b65.frame==1)
                            {
                                _this.b65.frame=0;
                                _this.b65.inputEnabled=true;
                            }
                           else if(_this.b66.frame==1)
                            {
                                _this.b66.frame=0;
                                _this.b66.inputEnabled=true;
                            }
                           else if(_this.b67.frame==1)
                            {
                                _this.b67.frame=0;
                                _this.b67.inputEnabled=true;
                            }
                           else if(_this.b68.frame==1)
                            {
                                _this.b68.frame=0;
                                _this.b68.inputEnabled=true;
                            }
                           else if(_this.b69.frame==1)
                            {
                                _this.b69.frame=0;
                                _this.b69.inputEnabled=true;
                            }
                           else if(_this.b70.frame==1)
                            {
                                _this.b70.frame=0;
                                _this.b70.inputEnabled=true;
                            }
                           else if(_this.b71.frame==1) 
                             {
                              _this.b71.frame=0;
                                 _this.b71.inputEnabled=true;
                             }
                            else if(_this.b72.frame==1)
                            {
                                _this.b72.frame=0;
                                _this.b72.inputEnabled=true;
                            }
                           else if(_this.b73.frame==1)
                            {
                                _this.b73.frame=0;
                                _this.b73.inputEnabled=true;
                            }
                           else if(_this.b74.frame==1)
                            {
                                _this.b74.frame=0;
                                _this.b74.inputEnabled=true;
                            }
                           else if(_this.b75.frame==1)
                            {
                                _this.b75.frame=0;
                                _this.b75.inputEnabled=true;
                            }
                           else if(_this.b76.frame==1)
                            {
                                _this.b76.frame=0;
                                _this.b76.inputEnabled=true;
                            }
                           else if(_this.b77.frame==1)
                            {
                                _this.b77.frame=0;
                                _this.b77.inputEnabled=true;
                            }
                           else if(_this.b78.frame==1)
                            {
                                _this.b78.frame=0;
                                _this.b78.inputEnabled=true;
                            }
                           else if(_this.b79.frame==1)
                            {
                                _this.b79.frame=0;
                                _this.b79.inputEnabled=true;
                            }
                           else if(_this.b80.frame==1)
                            {
                                _this.b80.frame=0;
                                _this.b80.inputEnabled=true;
                            }
                           else if(_this.b81.frame==1) 
                             {
                              _this.b81.frame=0;
                                 _this.b81.inputEnabled=true;
                             }
                            else if(_this.b82.frame==1)
                            {
                                _this.b82.frame=0;
                                _this.b82.inputEnabled=true;
                            }
                           else if(_this.b83.frame==1)
                            {
                                _this.b83.frame=0;
                                _this.b83inputEnabled=true;
                            }
                           else if(_this.b84.frame==1)
                            {
                                _this.b84.frame=0;
                                _this.b84.inputEnabled=true;
                            }
                           else if(_this.b85.frame==1)
                            {
                                _this.b85.frame=0;
                                _this.b85.inputEnabled=true;
                            }
                           else if(_this.b86.frame==1)
                            {
                                _this.b86.frame=0;
                                _this.b86.inputEnabled=true;
                            }
                           else if(_this.b87.frame==1)
                            {
                                _this.b87.frame=0;
                                _this.b87.inputEnabled=true;
                            }
                           else if(_this.b88.frame==1)
                            {
                                _this.b88.frame=0;
                                _this.b88.inputEnabled=true;
                            }
                           else if(_this.b89.frame==1)
                            {
                                _this.b89.frame=0;
                                _this.b89.inputEnabled=true;
                            }
                           else if(_this.b90.frame==1)
                            {
                                _this.b90.frame=0;
                                _this.b90.inputEnabled=true;
                            }
                           else if(_this.b91.frame==1) 
                             {
                              _this.b91.frame=0;
                                 _this.b91.inputEnabled=true;
                             }
                            else if(_this.b92.frame==1)
                            {
                                _this.b92.frame=0;
                                _this.b92.inputEnabled=true;
                            }
                           else if(_this.b93.frame==1)
                            {
                                _this.b93.frame=0;
                                _this.b93.inputEnabled=true;
                            }
                           else if(_this.b94.frame==1)
                            {
                                _this.b94.frame=0;
                                _this.b94inputEnabled=true;
                            }
                           else if(_this.b95.frame==1)
                            {
                                _this.b95.frame=0;
                                _this.b95.inputEnabled=true;
                            }
                           else if(_this.b96.frame==1)
                            {
                                _this.b96.frame=0;
                                _this.b96.inputEnabled=true;
                            }
                           else if(_this.b97.frame==1)
                            {
                                _this.b97.frame=0;
                                _this.b97.inputEnabled=true;
                            }
                           else if(_this.b98.frame==1)
                            {
                                _this.b98.frame=0;
                                _this.b98.inputEnabled=true;
                            }
                           else if(_this.b99.frame==1)
                            {
                                _this.b99.frame=0;
                                _this.b99.inputEnabled=true;
                            }
                           else if(_this.b100.frame==1)
                            {
                                _this.b100.frame=0;
                                _this.b100.inputEnabled=true;
                            }
                       }
                   _this.bigblock3.x=_this.bigbox3X;
                          _this.bigblock3.y=_this.bigbox3Y;
               }
                        _this.bigblock3.x=_this.bigbox3X;
                          _this.bigblock3.y=_this.bigbox3Y;
       },
    
    checkOverlap: function(opt0, target) {

    var boundsA = opt0.getBounds();
    var boundsB = target.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    stopAllVoice:function(){
        Eng_42B1.stop();
        Hin_42B1.stop();
        Kan_42B1.stop();
        
    },
    eggstack:function(target)
    {
        _this.violetbox=_this.add.sprite(this.world.centerX+100,this.world.centerY,'nsd2_5_violetbox');
         _this.violetbox.anchor.set(0.5);
         _this.violetbox.alpha=1;
        _this.egggrp = _this.add.group();
       for (var y = 0; y < 10; y++)
            for (var x = 0; x <10; x++)
            {
             _this.egg=_this.add.sprite(432 + (x * 33), 123 + (y * 33),'nsd2_5_egg');
                _this.egg.frame=0;
                _this.egg.anchor.set(0.5);
                _this.egg.name = "egg"+y+""+x;
                 _this.egg.inputEnabled=true; 
                _this.egggrp.add(_this.egg);
            }
        
    },
    /****************************firstquestionwheel************************/
     gotoFirstQuestion:function(){
          _this.Question =1;
         //_this.no1++;
         console.log("one");
         _this.valuegrp=_this.add.group();
         _this.value=_this.add.sprite(860,180,'nsd2_5_value');
         _this.value.anchor.setTo(0.5);
         this.text = this.add.text(0, -26, "23");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
        
        this.text = this.add.text(0, 21, "100");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
         _this.valuegrp.add(_this.value);
         _this.stack();
       
         this.enablebuttons();
        
    },
   /*******************************secondquestionwheel*******************/
   gotoSecondQuestion:function(){
       _this.Question =2;
         //_this.no1++;
         console.log("two");
        _this.valuegrp=_this.add.group();
         _this.value=_this.add.sprite(860,180,'nsd2_5_value');
         _this.value.anchor.setTo(0.5);
         this.text = this.add.text(0, -26, "30");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
        
        this.text = this.add.text(0, 21, "100");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
       _this.valuegrp.add(_this.value);
         _this.stack();
         this.enablebuttons();
        
    },
    /*****************************thirdquestioncircle**********************/
      gotoThirdQuestion:function(){
          _this.Question =3;
        // _this.no1++;
         console.log("three");
         _this.valuegrp=_this.add.group();
         _this.value=_this.add.sprite(860,180,'nsd2_5_value');
         _this.value.anchor.setTo(0.5);
         this.text = this.add.text(0, -26, "42");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
        
        this.text = this.add.text(0, 21, "100");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
       _this.valuegrp.add(_this.value);
         _this.stack();
         this.enablebuttons();
        
    },
    /*********************************fourthquestioncircle***********************/
       gotoFourthQuestion:function(){
         _this.Question =4;
         //_this.no1++;
         console.log("four");
         _this.valuegrp=_this.add.group();
         _this.value=_this.add.sprite(860,180,'nsd2_5_value');
         _this.value.anchor.setTo(0.5);
         this.text = this.add.text(0, -26, "55");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
        
        this.text = this.add.text(0, 21, "100");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
       _this.valuegrp.add(_this.value);
         _this.stack();
         this.enablebuttons();
        
    },
    /******************fifthquestionwheel***************************************/
     gotoFifthQuestion:function(){
        _this.Question =5;
         //_this.no1++;
         console.log("five");
         _this.valuegrp=_this.add.group();
         _this.value=_this.add.sprite(860,180,'nsd2_5_value');
         _this.value.anchor.setTo(0.5);
         this.text = this.add.text(0, -26, "16");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
        
        this.text = this.add.text(0, 21, "100");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
       _this.valuegrp.add(_this.value);
         _this.stack();
         this.enablebuttons();
        
    },
 /******************sixthquestionwheel***************************************/
     gotosixthQuestion:function(){
        _this.Question =6;
         //_this.no1++;
         console.log("six");
         _this.valuegrp=_this.add.group();
         _this.value=_this.add.sprite(860,180,'nsd2_5_value');
         _this.value.anchor.setTo(0.5);
         this.text = this.add.text(0, -26, "67");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
        
        this.text = this.add.text(0, 21, "100");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
       _this.valuegrp.add(_this.value);
         _this.stack();
         this.enablebuttons();
        
    },
    /******************seventhquestionwheel***************************************/
    gotoseventhQuestion:function(){
       _this.Question =7;
         //_this.no1++;
         console.log("seven");
         _this.valuegrp=_this.add.group();
         _this.value=_this.add.sprite(860,180,'nsd2_5_value');
         _this.value.anchor.setTo(0.5);
         this.text = this.add.text(0, -26, "81");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
        
        this.text = this.add.text(0, 21, "100");
        this.text.font = "myfont";
        this.text.fill = "#4BBCE2";
        this.text.fontWeight = 'normal';
        this.text.anchor.set(0.5);
        this.text.fontSize = 40;
        this.value.addChild(_this.text);
       _this.valuegrp.add(_this.value);
         _this.stack();
         this.enablebuttons();
        
    },
    
     /******************eightthquestionwheel***************************************/
    gotoeightQuestion:function(){
       _this.Question =8;
         //_this.no1++;
         console.log("eight");
        var j=1;
        _this.group1=_this.add.group();
        _this.box=this.add.sprite(850,180,'nsd2_5_score');
        _this.box.frame=1;
         _this.box.anchor.set(0.5);
         _this.box.scale.setTo(1.3,1.3);
         _this.box.name="opt1box";
        _this.box.inputEnabled=true;
        _this.box.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=2;
            _this.box2.frame=1;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box.name ;
        },this);
        _this.line=this.add.sprite(812,210,'nsd2_5_line');
        _this.box2=this.add.sprite(850,250,'nsd2_5_score');
        _this.box2.frame=1;
         _this.box2.anchor.set(0.5);
         _this.box2.scale.setTo(1.3,1.3);
         _this.box2.name="opt2box";
        _this.box2.inputEnabled=true;
        _this.box2.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=1;
            _this.box2.frame=2;
            _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box2.name ;
        },this);
        _this.group1.add(_this.box);
        _this.group1.add(_this.line);
        _this.group1.add(_this.box2);
        _this.eggstack();
        for(var x=j-1;x<26;x++)
                      {
                          temp = x;
                         if(x<10)
                             {
                                 temp = "0"+x; 
                             }
                          
                          //alert(temp);
                            _this.c++;
                         _this.egggrp.getByName("egg"+temp).frame = 1;
                      }
        _this.rightAns1=26;
        _this.rightAns2=100;
        
         this.addNumberPad();
    },
    /******************ninequestionwheel***************************************/
     gotonineQuestion:function(){
       
        _this.Question = 9;
        // _this.no1++;
         console.log("nine");
       var j=1;
        _this.group1=_this.add.group();
        _this.box=this.add.sprite(850,180,'nsd2_5_score');
        _this.box.frame=1;
         _this.box.anchor.set(0.5);
         _this.box.scale.setTo(1.3,1.3);
         _this.box.name="opt1box";
        _this.box.inputEnabled=true;
        _this.box.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=2;
            _this.box2.frame=1;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box.name ;
        },this);
        _this.line=this.add.sprite(812,210,'nsd2_5_line');
        _this.box2=this.add.sprite(850,250,'nsd2_5_score');
        _this.box2.frame=1;
         _this.box2.anchor.set(0.5);
         _this.box2.scale.setTo(1.3,1.3);
         _this.box2.name="opt2box";
        _this.box2.inputEnabled=true;
        _this.box2.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=1;
            _this.box2.frame=2;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box2.name ;
        },this);
        _this.group1.add(_this.box);
        _this.group1.add(_this.line);
        _this.group1.add(_this.box2);
        _this.eggstack();
        for(var x=j-1;x<32;x++)
                      {
                          temp = x;
                         if(x<10)
                             {
                                 temp = "0"+x; 
                             }
                          
                          //alert(temp);
                            _this.c++;
                         _this.egggrp.getByName("egg"+temp).frame = 1;
                      }
        _this.rightAns1=32;
        _this.rightAns2=100;
         this.addNumberPad();
    },
    /******************tenquestionwheel***************************************/
    gototenQuestion:function(){
       
        _this.Question =10;
         //_this.no1++;
         console.log("ten");
     var j=1;
        _this.group1=_this.add.group();
        _this.box=this.add.sprite(850,180,'nsd2_5_score');
        _this.box.frame=1;
         _this.box.anchor.set(0.5);
         _this.box.scale.setTo(1.3,1.3);
         _this.box.name="opt1box";
        _this.box.inputEnabled=true;
        _this.box.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=2;
            _this.box2.frame=1;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box.name ;
        },this);
        _this.line=this.add.sprite(812,210,'nsd2_5_line');
        _this.box2=this.add.sprite(850,250,'nsd2_5_score');
        _this.box2.frame=1;
         _this.box2.anchor.set(0.5);
         _this.box2.scale.setTo(1.3,1.3);
         _this.box2.name="opt2box";
        _this.box2.inputEnabled=true;
        _this.box2.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=1;
            _this.box2.frame=2;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box2.name ;
        },this);
        _this.group1.add(_this.box);
        _this.group1.add(_this.line);
        _this.group1.add(_this.box2);
        _this.eggstack();
        for(var x=j-1;x<48;x++)
                      {
                          temp = x;
                         if(x<10)
                             {
                                 temp = "0"+x; 
                             }
                          
                          //alert(temp);
                            _this.c++;
                         _this.egggrp.getByName("egg"+temp).frame = 1;
                      }
        _this.rightAns1=48;
        _this.rightAns2=100;
         this.addNumberPad();
    },
   /*****************************elevenquestion*****************************************/ 
    gotoelevenQuestion:function(){
       
        _this.Question =11;
        // _this.no1++;
         console.log("eleven");
       var j=1;
        _this.group1=_this.add.group();
        _this.box=this.add.sprite(850,180,'nsd2_5_score');
        _this.box.frame=1;
         _this.box.anchor.set(0.5);
         _this.box.scale.setTo(1.3,1.3);
         _this.box.name="opt1box";
        _this.box.inputEnabled=true;
        _this.box.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=2;
            _this.box2.frame=1;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box.name ;
        },this);
        _this.line=this.add.sprite(812,210,'nsd2_5_line');
        _this.box2=this.add.sprite(850,250,'nsd2_5_score');
        _this.box2.frame=1;
         _this.box2.anchor.set(0.5);
         _this.box2.scale.setTo(1.3,1.3);
         _this.box2.name="opt2box";
        _this.box2.inputEnabled=true;
        _this.box2.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=1;
            _this.box2.frame=2;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box2.name ;
        },this);
        _this.group1.add(_this.box);
        _this.group1.add(_this.line);
        _this.group1.add(_this.box2);
        _this.eggstack();
        for(var x=j-1;x<69;x++)
                      {
                          temp = x;
                         if(x<10)
                             {
                                 temp = "0"+x; 
                             }
                          
                          //alert(temp);
                            _this.c++;
                         _this.egggrp.getByName("egg"+temp).frame = 1;
                      }
        _this.rightAns1=69;
        _this.rightAns2=100;
         this.addNumberPad();
    },
    /******************************tewelvequestion**********************************/
    gototewlveQuestion:function(){
       
        _this.Question =12;
         //_this.no1++;
         console.log("twelve");
       var j=1;
        _this.group1=_this.add.group();
        _this.box=this.add.sprite(850,180,'nsd2_5_score');
        _this.box.frame=1;
         _this.box.anchor.set(0.5);
         _this.box.scale.setTo(1.3,1.3);
         _this.box.name="opt1box";
        _this.box.inputEnabled=true;
        _this.box.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=2;
            _this.box2.frame=1;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box.name ;
        },this);
        _this.line=this.add.sprite(812,210,'nsd2_5_line');
        _this.box2=this.add.sprite(850,250,'nsd2_5_score');
        _this.box2.frame=1;
         _this.box2.anchor.set(0.5);
         _this.box2.scale.setTo(1.3,1.3);
         _this.box2.name="opt2box";
        _this.box2.inputEnabled=true;
        _this.box2.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=1;
            _this.box2.frame=2;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box2.name ;
        },this);
        _this.group1.add(_this.box);
        _this.group1.add(_this.line);
        _this.group1.add(_this.box2);
        _this.eggstack();
        for(var x=j-1;x<75;x++)
                      {
                          temp = x;
                         if(x<10)
                             {
                                 temp = "0"+x; 
                             }
                          
                          //alert(temp);
                            _this.c++;
                         _this.egggrp.getByName("egg"+temp).frame = 1;
                      }
        _this.rightAns1=75;
        _this.rightAns2=100;
         this.addNumberPad();
    },
    /*question********************************thirteen************************/
    gotothirteenQuestion:function(){
       
        _this.Question =13;
         //_this.no1++;
         console.log("thirteen");
    var j=1;
        _this.group1=_this.add.group();
        _this.box=this.add.sprite(850,180,'nsd2_5_score');
        _this.box.frame=1;
         _this.box.anchor.set(0.5);
         _this.box.scale.setTo(1.3,1.3);
         _this.box.name="opt1box";
        _this.box.inputEnabled=true;
        _this.box.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=2;
            _this.box2.frame=1;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box.name ;
        },this);
        _this.line=this.add.sprite(812,210,'nsd2_5_line');
        _this.box2=this.add.sprite(850,250,'nsd2_5_score');
        _this.box2.frame=1;
         _this.box2.anchor.set(0.5);
         _this.box2.scale.setTo(1.3,1.3);
         _this.box2.name="opt2box";
        _this.box2.inputEnabled=true;
        _this.box2.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=1;
            _this.box2.frame=2;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box2.name ;
        },this);
        _this.group1.add(_this.box);
        _this.group1.add(_this.line);
        _this.group1.add(_this.box2);
        _this.eggstack();
        for(var x=j-1;x<12;x++)
                      {
                          temp = x;
                         if(x<10)
                             {
                                 temp = "0"+x; 
                             }
                          
                          //alert(temp);
                            _this.c++;
                         _this.egggrp.getByName("egg"+temp).frame = 1;
                      }
        _this.rightAns1=12;
        _this.rightAns2=100;
         this.addNumberPad();
    },
    /*********************forteenquestion*********************************/
    gotoforteenQuestion:function(){
       
        _this.Question =14;
         //_this.no1++;
         console.log("forteen");
        var j=1;
        _this.group1=_this.add.group();
        _this.box=this.add.sprite(850,180,'nsd2_5_score');
        _this.box.frame=1;
         _this.box.anchor.set(0.5);
         _this.box.scale.setTo(1.3,1.3);
         _this.box.name="opt1box";
        _this.box.inputEnabled=true;
        _this.box.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=2;
            _this.box2.frame=1;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box.name ;
        },this);
        _this.line=this.add.sprite(812,210,'nsd2_5_line');
        _this.box2=this.add.sprite(850,250,'nsd2_5_score');
        _this.box2.frame=1;
         _this.box2.anchor.set(0.5);
         _this.box2.scale.setTo(1.3,1.3);
         _this.box2.name="opt2box";
        _this.box2.inputEnabled=true;
        _this.box2.events.onInputDown.add(function(target){
            _this.clickSound.play();
            _this.box.frame=1;
            _this.box2.frame=2;
            this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;
             _this.selectedBox = _this.box2.name ;
        },this);
        _this.group1.add(_this.box);
        _this.group1.add(_this.line);
        _this.group1.add(_this.box2);
        _this.eggstack();
        for(var x=j-1;x<88;x++)
                      {
                          temp = x;
                         if(x<10)
                             {
                                 temp = "0"+x; 
                             }
                          
                          //alert(temp);
                            _this.c++;
                         _this.egggrp.getByName("egg"+temp).frame = 1;
                      }
        _this.rightAns1=88;
        _this.rightAns2=100;
         this.addNumberPad();
    },
    
    shuffle: function(array) {
      _this.currentIndex = array.length, _this.temporaryValue, _this.randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== _this.currentIndex) {
            
        // Pick a remaining element...
        _this.randomIndex = Math.floor(Math.random() * _this.currentIndex);
        _this.currentIndex -= 1;

        // And swap it with the current element.
        _this.temporaryValue = array[_this.currentIndex];
        array[_this.currentIndex] = array[_this.randomIndex];
        array[_this.randomIndex] = _this.temporaryValue;
  }

  return array;
},
    
  
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = this.add.group();
        
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
    
    correctAns:function()
    {
        _this.no1++;
        console.log("correct");
        //_this.speaker.inputEnabled=false;
        _this.celebration = true;
        _this.cmusic = this.add.audio('celebr');
        _this.cmusic.play();
        this.time.events.add(500, this.removeCelebration, this);
        //target.tint = 0xA9A9A9;
         _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        console.log(_this.starAnim);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();

        if(_this.rightbtn)
            _this.rightbtn.events.onInputDown.removeAll();

        if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }

               if(_this.timer1)
               {
                    _this.timer1.stop();
                    _this.timer1 = null;
               }

                _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
    },

        removeCelebration:function()
    {
        
        console.log("remove everythg");
        console.log("removeCeleb");
        _this.celebration = false;
        //celebAnim.destroy();
        //rightCount--;
        console.log("no"+_this.no1);
        //this.input.enabled = true;
        _this.count1++;
        //if(rightCount<=0)
        //{     
            console.log("vamitha");
            
            if(_this.no1<6)
            {
                 if(_this.timer1)
               {
                    _this.timer1.stop();
                    _this.timer1 = null;
               }
                console.log("addq");
                 this.addQuestion(_this.count1);
            }
            else
            {
                if(_this.timer1)
               {
                    _this.timer1.stop();
                    _this.timer1 = null;
               }
                 this.time.events.add(2000, function(){
                console.log("gameEnd");
                //this.stopAllVoice();
                this.state.start('nsd2_5Score');
                 },this);
            }

    },
 
    update:function(){

    },

    
     getVoice:function(){
       
        _this.stopVoice();  
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
         if(_this.no1<3)
             {
                    if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/English/nsd2.5a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Hindi/nsd2.5a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Kannada/nsd2.5a.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Gujrati/nsd2.5a.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Marathi/nsd2.5a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Telugu/nsd2.5a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Tamil/nsd2.5a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Urdu/nsd2.5a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Odiya/nsd2.5a.mp3");  
                    }    
             }
         else
         {
          if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/English/nsd2.5b.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Hindi/nsd2.5b.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Kannada/nsd2.5b.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Gujrati/nsd2.5b.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Marathi/nsd2.5b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Telugu/nsd2.5b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Tamil/nsd2.5b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Urdu/nsd2.5b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd2.5/Odiya/nsd2.5b.mp3");  
                    }       
         }
       
        _this.playQuestionSound.appendChild(_this.src);
                    _this.playQuestionSound.play();
    },
  
   enablebuttons:function(){
         _this.numGroup = this.add.group();
       
        _this.rightbtn1 =_this.numGroup.create(860,355,'nsd2_5_rightBtn');
        _this.rightbtn1.anchor.setTo(0.5);
        _this.rightbtn1.scale.setTo(0.6,0.6);
        _this.rightbtn1.name = "rightbtn";

        _this.rightbtn1.inputEnabled = true;
        _this.rightbtn1.input.useHandCursor = true;
        
        _this.rightbtn1.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            _this.clickSound.play();
            target.frame=1;
          if(_this.Question==1)
              {
                  var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["b"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==23)
                      {
                          _this.grid.frame=1;
                          _this.value.frame=1;
                          _this.correctAns();
                      }
                
                    else
                        {
                             _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                            /*for(var i=1;i<=100;i++)
                                {
                                   _this["b"+i].frame=1; 
                                }*/
                            _this.stackgrp.setAll("frame",1);
                            _this.movegroup.setAll("visible",false);
                            _this.shake.shake(10,_this.stackgrp);
//                            _this.shake.shake(10,_this.movegroupgrp);
                            _this.grid.frame=0;
                                    _this.a1=0;
                                    _this.a2=0;
                                    _this.a3=0;
                                    _this.a4=0;
                                    _this.a5=0;
                                    _this.a6=0;
                                    _this.a7=0;
                                    _this.a8=0;
                                    _this.a9=0;
                                    _this.a10=0;

                                    _this.d1=0;
                                    _this.d2=0;
                                    _this.d3=0;
                                    _this.d4=0;
                                    _this.d5=0;
                                    _this.d6=0;
                                    _this.d7=0;
                                    _this.d8=0;
                                    _this.d9=0;
                                    _this.d10=0;
                        }
                      
              }
            if(_this.Question==2)
              {
                  var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["b"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==30)
                      {
                          _this.grid.frame=1;
                          _this.value.frame=1;
                          _this.correctAns();
                      }
                
                    else
                        {
                             _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                            /*for(var i=1;i<=100;i++)
                                {
                                   _this["b"+i].frame=1; 
                                }*/
                             _this.stackgrp.setAll("frame",1);
                            _this.movegroup.setAll("visible",false);
                            _this.shake.shake(10,_this.stackgrp);
//                            _this.shake.shake(10,_this.movegroupgrp);
                            _this.grid.frame=0;
                                    _this.a1=0;
                                    _this.a2=0;
                                    _this.a3=0;
                                    _this.a4=0;
                                    _this.a5=0;
                                    _this.a6=0;
                                    _this.a7=0;
                                    _this.a8=0;
                                    _this.a9=0;
                                    _this.a10=0;

                                    _this.d1=0;
                                    _this.d2=0;
                                    _this.d3=0;
                                    _this.d4=0;
                                    _this.d5=0;
                                    _this.d6=0;
                                    _this.d7=0;
                                    _this.d8=0;
                                    _this.d9=0;
                                    _this.d10=0;
                        }
                      
              }
            if(_this.Question==3)
              {
                  var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["b"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==42)
                      {
                          _this.grid.frame=1;
                          _this.value.frame=1;
                          _this.correctAns();
                          
                      }
                
                    else
                        {
                             _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                            /*for(var i=1;i<=100;i++)
                                {
                                   _this["b"+i].frame=1; 
                                }*/
                             _this.stackgrp.setAll("frame",1);
                            _this.movegroup.setAll("visible",false);
                            _this.shake.shake(10,_this.stackgrp);
//                            _this.shake.shake(10,_this.movegroupgrp);
                            _this.grid.frame=0;
                                    _this.a1=0;
                                    _this.a2=0;
                                    _this.a3=0;
                                    _this.a4=0;
                                    _this.a5=0;
                                    _this.a6=0;
                                    _this.a7=0;
                                    _this.a8=0;
                                    _this.a9=0;
                                    _this.a10=0;

                                    _this.d1=0;
                                    _this.d2=0;
                                    _this.d3=0;
                                    _this.d4=0;
                                    _this.d5=0;
                                    _this.d6=0;
                                    _this.d7=0;
                                    _this.d8=0;
                                    _this.d9=0;
                                    _this.d10=0;
                        }
                      
              }
            if(_this.Question==4)
              {
                  var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["b"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==55)
                      {
                          _this.grid.frame=1;
                          _this.value.frame=1;
                          _this.correctAns();
                      }
                
                    else
                        {
                             _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                            /*for(var i=1;i<=100;i++)
                                {
                                   _this["b"+i].frame=1; 
                                }*/
                             _this.stackgrp.setAll("frame",1);
                            _this.movegroup.setAll("visible",false);
                            _this.shake.shake(10,_this.stackgrp);
//                            _this.shake.shake(10,_this.movegroupgrp);
                            _this.grid.frame=0;
                                    _this.a1=0;
                                    _this.a2=0;
                                    _this.a3=0;
                                    _this.a4=0;
                                    _this.a5=0;
                                    _this.a6=0;
                                    _this.a7=0;
                                    _this.a8=0;
                                    _this.a9=0;
                                    _this.a10=0;

                                    _this.d1=0;
                                    _this.d2=0;
                                    _this.d3=0;
                                    _this.d4=0;
                                    _this.d5=0;
                                    _this.d6=0;
                                    _this.d7=0;
                                    _this.d8=0;
                                    _this.d9=0;
                                    _this.d10=0;
                        }
                      
              }
            if(_this.Question==5)
              {
                  var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["b"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==16)
                      {
                          _this.grid.frame=1;
                          _this.value.frame=1;
                          _this.correctAns();
                      }
                
                    else
                        {
                             _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                            /*for(var i=1;i<=100;i++)
                                {
                                   _this["b"+i].frame=1; 
                                }*/
                            _this.stackgrp.setAll("frame",1);
                            _this.movegroup.setAll("visible",false);
                            _this.shake.shake(10,_this.stackgrp);
//                            _this.shake.shake(10,_this.movegroupgrp);
                            _this.grid.frame=0;
                                    _this.a1=0;
                                    _this.a2=0;
                                    _this.a3=0;
                                    _this.a4=0;
                                    _this.a5=0;
                                    _this.a6=0;
                                    _this.a7=0;
                                    _this.a8=0;
                                    _this.a9=0;
                                    _this.a10=0;

                                    _this.d1=0;
                                    _this.d2=0;
                                    _this.d3=0;
                                    _this.d4=0;
                                    _this.d5=0;
                                    _this.d6=0;
                                    _this.d7=0;
                                    _this.d8=0;
                                    _this.d9=0;
                                    _this.d10=0;
                        }
                      
              }
            if(_this.Question==6)
              {
                  var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["b"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==67)
                      {
                         _this.grid.frame=1;
                          _this.value.frame=1;
                          _this.correctAns();
                      }
                
                    else
                        {
                             _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                            /*for(var i=1;i<=100;i++)
                                {
                                   _this["b"+i].frame=1; 
                                }*/
                             _this.stackgrp.setAll("frame",1);
                            _this.movegroup.setAll("visible",false);
                            _this.shake.shake(10,_this.stackgrp);
//                            _this.shake.shake(10,_this.movegroupgrp);
                            _this.grid.frame=0;
                                    _this.a1=0;
                                    _this.a2=0;
                                    _this.a3=0;
                                    _this.a4=0;
                                    _this.a5=0;
                                    _this.a6=0;
                                    _this.a7=0;
                                    _this.a8=0;
                                    _this.a9=0;
                                    _this.a10=0;

                                    _this.d1=0;
                                    _this.d2=0;
                                    _this.d3=0;
                                    _this.d4=0;
                                    _this.d5=0;
                                    _this.d6=0;
                                    _this.d7=0;
                                    _this.d8=0;
                                    _this.d9=0;
                                    _this.d10=0;
                        }
                      
              }
            if(_this.Question==7)
              {
                  var frameCount = 0;
                  for( h=1;h<=100;h++)
                      {
                          if(_this["b"+h].frame==0)
                              {
                                  frameCount++;
                              }
                      }
                
                  if(frameCount==81)
                      {
                         _this.grid.frame=1;
                          _this.value.frame=1;
                          _this.correctAns();
                      }
                
                    else
                        {
                             _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                            /*for(var i=1;i<=100;i++)
                                {
                                   _this["b"+i].frame=1; 
                                }*/
                             _this.stackgrp.setAll("frame",1);
                            _this.movegroup.setAll("visible",false);
                            _this.shake.shake(10,_this.stackgrp);
//                            _this.shake.shake(10,_this.movegroupgrp);
                            _this.grid.frame=0;
                                    _this.a1=0;
                                    _this.a2=0;
                                    _this.a3=0;
                                    _this.a4=0;
                                    _this.a5=0;
                                    _this.a6=0;
                                    _this.a7=0;
                                    _this.a8=0;
                                    _this.a9=0;
                                    _this.a10=0;

                                    _this.d1=0;
                                    _this.d2=0;
                                    _this.d3=0;
                                    _this.d4=0;
                                    _this.d5=0;
                                    _this.d6=0;
                                    _this.d7=0;
                                    _this.d8=0;
                                    _this.d9=0;
                                    _this.d10=0;
                        }
                      
              }
              //  _this.numGroup.add(_this.box);
            
        },this);
        _this.rightbtn1.events.onInputUp.add(function(target){
           target.frame=0;
       }, this);
       
    },
    enablebuttons2:function(rightAns1,rightAns2){
        
        console.log("opt1 value==="+rightAns1);
//       _this.vibe=this.add.group();
//       _this.vibe.add(_this.opt1);
//       _this.vibe.add(_this.box);
            
        for(var i=0;i<10;i++)
        {
            _this.grpnum[i].inputEnabled=true;
            _this.grpnum[i].input.useHandCursor=true;
        }
        _this.wrongbtn.inputEnabled = true;
       _this.wrongbtn.input.useHandCursor = true;
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(function(){
            console.log("erase"+_this.boxclick);
            _this.clickSound.play();
            _this.wrongbtn.frame=1;
            if(_this.selectedBox=="opt1box"||_this.numBox1Pressed==true)
            {
                _this.selectedAns1="";
                _this.counterText1.setText("");
            }
            if(_this.selectedBox=="opt2box"||_this.numBox2Pressed==true)
            {
                _this.selectedAns2="";
                _this.counterText2.setText("");
            }
            
        },this);
        _this.wrongbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this)
        
        _this.rightbtn.events.onInputDown.add(function(target){
            _this.clickSound.play();
            target.frame=1;
            _this.noofAttempts++;
            if((_this.selectedAns1==rightAns1||_this.selectedAns1=="0"+rightAns1)&&_this.selectedAns2==100)
            {
               _this.box.frame=2;
                _this.box2.frame=2;
                this.correctAns();
                
            }
            else 
            {
                 
                _this.wmusic = _this.add.audio('waudio');
		          _this.wmusic.play();
                  
                _this.flag;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.counterText2.setText("");
                    _this.counterText1.setText("");
                _this.selectedBox="opt1box";
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.group1);
                      _this.shake.shake(10,_this.egggrp);
                _this.box.frame=2;
                _this.box2.frame=1;
                //_this.shake2.shake(10,_this.opt1);
            }
             //  _this.numGroup.add(_this.box);
        },this);
       _this.rightbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this);
       
       
    },
     
    addNumberPad:function(){
        _this.numBox1Pressed=true;
        _this.box.frame=2;
        _this.numGroup = this.add.group();
         _this.footer = this.add.sprite(0,475,'nsd2_5_footer');
        _this.numGroup.add(_this.footer);
        _this.numGroup.visible=true;
        var x = 120;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'nsd2_5_calNum'); 
            _this.numbg.frame=i;
            _this.grpnum.push(_this.numbg);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.5,0.5);
            _this.numbg.name = i;
            _this.numbg.inputEnabled = true;
         //   numbg.input.useHandCursor = false;
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            x+=60;
        }
      
        _this.counterText1 = this.add.text(0,0, _this.selectedAns1="");
        _this.counterText1.anchor.setTo(0.5);
        _this.counterText1.align = 'center';
        _this.counterText1.font = 'myfont';
        _this.counterText1.fontWeight = 'Normal';
        _this.counterText1.fontSize = 26;
        _this.counterText1.fill = '#65B4C3';
        _this.counterText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box.addChild(_this.counterText1);
        
        _this.counterText2 = this.add.text(0,0, _this.selectedAns2="");
        _this.counterText2.anchor.setTo(0.5);
        _this.counterText2.align = 'center';
        _this.counterText2.font = 'myfont';
        _this.counterText2.fontWeight = 'Normal';
        _this.counterText2.fontSize = 26;
        _this.counterText2.fill = '#65B4C3';
        _this.counterText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box2.addChild(_this.counterText2);
     //   txtbox = this.add.sprite(x+50,508,'box');
     //   txtbox.anchor.setTo(0.5);
      //  txtbox.name = "txtbox";
        
        _this.wrongbtn = _this.numGroup.create(x+60,510,'nsd2_5_eraser');
        _this.wrongbtn.anchor.setTo(0.5);
       _this.wrongbtn.scale.setTo(0.5,0.5);
        _this.wrongbtn.name = "wrongbtn";

        _this.rightbtn =_this.numGroup.create(x+110,510,'nsd2_5_rightBtn');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.5,0.5);
        _this.rightbtn.name = "rightbtn";
       // _this.numGroup.add(_this.box);
        _this.numGroup.y  = 100;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
       this.enablebuttons2(_this.rightAns1,_this.rightAns2);
    },
    
    numClicked:function(target){
        _this.clickSound.play();
        if(_this.selectedBox=="opt1box")
        {
            console.log("option1"+_this.selectedAns1);
            if(_this.selectedAns1.length<2)
            {
                console.log("in thirddd");
                _this.selectedAns1+= target.name;
                console.log("third one");
                _this.counterText1.setText(_this.selectedAns1);
                //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);   
            }
        } 
        else if(_this.selectedBox=="opt2box")
            {
                if(_this.selectedAns2.length<3)
                    {
                        _this.selectedAns2+= target.name;
                console.log("third one");
                _this.counterText2.setText(_this.selectedAns2);
                    }
            }
        else if(_this.numBox1Pressed==true)
            {
                if(_this.selectedAns1.length<2)
                {
                    _this.selectedAns1+= target.name;
                    console.log("1a");
                   _this.counterText1.setText(_this.selectedAns1);
                    if(_this.selectedAns1.length==2)
                       {
                           _this.numBox1Pressed = false;
                    _this.numBox2Pressed = true;
                    _this.box2.frame = 2;
                    _this.box.frame = 1;   
                       }
                    
                }
            }
         else if(_this.numBox2Pressed==true)
            {
                if(_this.selectedAns2.length<3)
                {
                    _this.selectedAns2+= target.name;
                    console.log("2a");
                    _this.counterText2.setText(_this.selectedAns2);
                     if(_this.selectedAns2.length==3)
                       {
                           _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.box.frame = 1;
                    _this.box2.frame = 1;
                       }
                    
                }
            }
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
        // _timer1.stop();
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
   /* disableallbuttons:function(){
        a1.events.onInputDown.removeAll();
        rightbtn.events.onInputDown.removeAll();
        wrongbtn.events.onInputDown.removeAll();
        opt1.events.onInputDown.removeAll();
        opt2.events.onInputDown.removeAll();
        opt3.events.onInputDown.removeAll();
       // numGroup.inputEnabled=false;
        //boxclick='';
    }*/
    
};