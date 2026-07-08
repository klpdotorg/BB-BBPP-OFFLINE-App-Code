Game.nsd6_5level1=function(){};




Game.nsd6_5level1.prototype={
    init:function(game)
	{
		_this = this;

		telInitializer.gameIdInit("NSD6_5",gradeSelected);
	},

  preload:function(game){
  if(!window.grade5NSF10){

            window.grade5NSF10 = true;

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

            this.load.atlas('nsd5_5_rightmark',window.baseUrl+'assets/gradeAssets/nsd5.5/rightmark.png' ,window.baseUrl+'json/gradeJson/nsd5.5/rightmark.json');
        
            this.load.atlas('nsd6_5_10_note',window.baseUrl+'assets/gradeAssets/nsd6.5/note10.png' ,window.baseUrl+'json/gradeJson/nsd6.5/note10.json');
         this.load.atlas('nsd6_5_1_note',window.baseUrl+'assets/gradeAssets/nsd6.5/note1.png' ,window.baseUrl+'json/gradeJson/nsd6.5/note1.json');
         this.load.atlas('nsd6_5_10_coin',window.baseUrl+'assets/gradeAssets/nsd6.5/coin10.png' ,window.baseUrl+'json/gradeJson/nsd6.5/coin10.json');
         this.load.atlas('nsd6_5_1_coin',window.baseUrl+'assets/gradeAssets/nsd6.5/coin1.png' ,window.baseUrl+'json/gradeJson/nsd6.5/coin1.json');
         this.load.atlas('nsd6_5_box2',window.baseUrl+'assets/gradeAssets/nsd6.5/3.png' ,window.baseUrl+'json/gradeJson/nsd6.5/3.json');   
        
         this.load.image('nsd6_5_currency',window.baseUrl+'assets/gradeAssets/nsd6.5/1.png');
         this.load.image('nsd6_5_box1',window.baseUrl+'assets/gradeAssets/nsd6.5/2.png');
         this.load.image('nsd6_5_note_10',window.baseUrl+'assets/gradeAssets/nsd6.5/51.png');
         this.load.image('nsd6_5_note_1',window.baseUrl+'assets/gradeAssets/nsd6.5/52.png');
         this.load.image('nsd6_5_coin_10',window.baseUrl+'assets/gradeAssets/nsd6.5/53.png');
         this.load.image('nsd6_5_coin_1',window.baseUrl+'assets/gradeAssets/nsd6.5/54.png');
        
         this.load.image('nsd6_5_note_10frame',window.baseUrl+'assets/gradeAssets/nsd6.5/4.png');
         this.load.image('nsd6_5_note_1frame',window.baseUrl+'assets/gradeAssets/nsd6.5/5.png');
         this.load.image('nsd6_5_coin_10frame',window.baseUrl+'assets/gradeAssets/nsd6.5/6.png');
         this.load.image('nsd6_5_coin_1frame',window.baseUrl+'assets/gradeAssets/nsd6.5/7.png');
         this.load.image('nsd6_5_dot',window.baseUrl+'assets/gradeAssets/nsd6.5/9.png');
         this.load.image('nsd6_5_chart',window.baseUrl+'assets/gradeAssets/nsd6.5/10.png');
         this.load.image('nsd6_5_div',window.baseUrl+'assets/gradeAssets/nsd6.5/div.png');
       }

    },

create:function(game){
    _this.bg1=null;
    _this.qno=0;
    _this.starsGroup=0;

    _this.count1=0;
    _this.count=0;
    _this.qArrays=[];
    _this.flagmain11Anim=0;
    _this.animlev1=0;
    _this.a1=0;
    _this.wrong = false;
    _this.snap = 0;
    _this.soundPlayed = true;
    _this.soundPlayed1 = true;
    _this.tweened = false;

    _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;


    _this.speaker=0;
    _this.w1=0;_this.w2=0;
    _this.AnimOpt=0;_this.AnimOpt2=0;_this.AnimOpt3=0;

    _this.numGroup=0;

    _this.grpnum=new Array();

    _this.minutes=0;_this.seconds=0;_this.counterForTimer=0;

    _this.box=0;
    _this.check=0;
    _this.qflag=0;
    _this.questno=0;
    _this.Ans;
    _this.flag = 0;
    _this.wrongAnswer = false;

    _this.clickSound = _this.add.audio('ClickSound');
    _this.waudio = _this.add.audio('waudio');
    _this.celebr = _this.add.audio('celebr');
    _this.snapSound = _this.add.audio('snapSound');
    _this.eggCrack = _this.add.audio('eggSound');
    _this.rollsound = _this.add.audio('rollSound');
     _this.coinDrop = _this.add.audio('tinklesound');
    //baudio.play();
    //baudio.loopFull(0.6);
    _this.qArrays = new Array();
    _this.qArrays1 = new Array();
    _this.qArrays2 = new Array();

    _this.qArrays1 = [1,2,3,4,5];
    _this.qArrays2 = [6,7,8,9,10];

      this.qArrays1 = this.shuffle(_this.qArrays1);
      this.qArrays2 = this.shuffle(_this.qArrays2);

    for(var i=0;i<3;i++)
       {
         _this.qArrays.push(_this.qArrays1[i]);
       }
    for(var j=0;j<3;j++)
       {
         _this.qArrays.push(_this.qArrays2[j]);
       }
    console.log(_this.qArrays);

    // counterText=0;
    _this.shake = new Phaser.Plugin.Shake(game);
     game.plugins.add(_this.shake);

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.setBoundsToWorld();

    _this.bg1 = _this.add.sprite(0,0, 'nsd1_5_bg');
    _this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
    //  _this.footer = _this.add.sprite(0,480,'footer');

    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){

        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopvoice();
        this.clickSound = this.add.audio('ClickSound');
            _this.clickSound.play();
       _this.state.start('grade1levelSelectionScreen',true,false);

    },this);

    _this.timebg=_this.add.sprite(305,6,'Level42C_timer');
    _this.timebg.scale.setTo(1.2,1);

    _this.timeDisplay = _this.add.text(336,22,_this.minutes + ' : '+ _this.seconds);
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = 'center';
    _this.timeDisplay.font = 'myfont';
    _this.timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    _this.timeDisplay.fill = '#ADFF2F';

    _this.speaker = this.add.button(600,5,'grade11_speaker',function(){

        _this.clickSound = this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.getVoice();

    },_this,1,0,2);//,function(){console.log("speaker on");/*this.speakeron();*/},this,0,1,2);

    _this.generateStarsForTheScene(6);

    //  _this.no1++;
    _this.getQuestion();

},


 updateTimer:function() {
     _this.counterForTimer++;
     //console.log("lololil"+counterForTimer);
     if(_this.counterForTimer>59)
         {
           _this.counterForTimer = 0;
           if(_this.minutes<10)
             {
               this.minutes =  this.minutes+1;
               _this.seconds = 00;
             }
           else
             {
               this.minutes =  this.minutes+1;
             }
         }
    else
        {
          if (_this.counterForTimer < 10)
             this.seconds = '0' + this.counterForTimer;
          else
            this.seconds = this.counterForTimer;
        }
    this.timeDisplay.setText(_this.minutes+':' + this.seconds);

//timer.setText(minutes + ':'+ seconds );
 },

generateStarsForTheScene:function(count){

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

shuffle: function(array) {

   _this.currentIndex = array.length, _this.temporaryValue, _this.randomIndex;
    // While there remain elements to shuffle...
    while (0 !== _this.currentIndex)
      {

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

    /***********************************getquestion************************/
getQuestion:function(target)
{

     _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount++;
    
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
      _this.AnsTimerCount++;
    }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

    _this.timer1 = this.time.create(false);

    _this.timer1.loop(1000, function(){
        this.updateTimer();
     }, this);

    _this.timer1.start();
    _this.grpnum=new Array();
   // _this.speaker.inputEnabled=false;
   // _this.speaker.input.useHandCursor = true;
   //this.stopAllVoice();

    //console.log("Quest:"+_this.qArrays[_this.qno]);

    switch(_this.qArrays[_this.qno])
      {
        case 1: this.question1();  break;
        case 2: this.question2();  break;
        case 3: this.question3();  break;
        case 4: this.question4();  break;
        case 5: this.question5();  break;
        case 6: this.question6();  break;
        case 7: this.question7();  break;
        case 8: this.question8();  break;
        case 9: this.question9();  break;
        case 10:this.question10(); break;


      }
},

checkOverlap:function(spriteA, spriteB)
 {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
 },

loadAssets:function(){

  _this.currencygroup = _this.add.group();
  _this.chartgroup = _this.add.group();
  _this.currency = _this.add.sprite(30,75,'nsd6_5_currency');
  _this.chart = _this.add.sprite(30,195,'nsd6_5_chart');
 /*----Invisible notes----in Upper table--*/
  _this.note_10Draggable = _this.add.sprite(55,90,'nsd6_5_note_10');
  _this.note_10Draggable.name = "note_10Draggable";
  _this.note_10Draggable.inputEnabled = true;
  _this.note_10Draggable.events.onInputDown.add(_this.dragnote10,_this);
  _this.note_10Draggable.alpha = 0;

  _this.note_1Draggable = _this.add.sprite(160,90,'nsd6_5_note_1');
  _this.note_1Draggable.name = "note_1Draggable";
  _this.note_1Draggable.inputEnabled = true;
  _this.note_1Draggable.events.onInputDown.add(_this.dragnote1,this);
  _this.note_1Draggable.alpha = 0;

  _this.coin_10Draggable = _this.add.sprite(288,110,'nsd6_5_coin_10');
  _this.coin_10Draggable.alpha = 0;
  _this.coin_10Draggable.name = "coin_10Draggable";
  _this.coin_10Draggable.inputEnabled = true;
  _this.coin_10Draggable.events.onInputDown.add(_this.dragcoin10,this);

  _this.coin_1Draggable = _this.add.sprite(352,110,'nsd6_5_coin_1');
  _this.coin_1Draggable.alpha = 0;
  _this.coin_1Draggable.name = "coin_1Draggable";
  _this.coin_1Draggable.inputEnabled = true;
  _this.coin_1Draggable.events.onInputDown.add(_this.dragcoin1,this);

 /*-----note frames in chart---*/
  _this.frame_10_note = _this.add.sprite(45,285,'nsd6_5_10_note');
  _this.frame_10_note.frame =0 ;
  _this.frame_1_note = _this.add.sprite(255,285,'nsd6_5_1_note');
  _this.frame_1_note.frame = 0;
  _this.frame_10_coin = _this.add.sprite(520,260,'nsd6_5_10_coin');
  _this.frame_10_coin.frame = 0;
  _this.frame_1_coin = _this.add.sprite(650,260,'nsd6_5_1_coin');
  _this.frame_1_coin.frame = 0;


  /*----Single notes in chart that are invisible----*/
  _this.note_10_chartDrag = _this.add.sprite(45,335,'nsd6_5_note_10frame');
  _this.note_10_chartDrag.visible = false;
  _this.note_10_chartDrag.name = "note10chart";
  _this.note_10_chartDrag.inputEnabled = true;
  _this.note_10_chartDrag.events.onInputDown.add(_this.dragnote10,this);

  _this.note_1_chartDrag = _this.add.sprite(255,335,'nsd6_5_note_1frame');
  _this.note_1_chartDrag.visible = false;
  _this.note_1_chartDrag.name = "note1chart";
  _this.note_1_chartDrag.inputEnabled = true;
  _this.note_1_chartDrag.events.onInputDown.add(_this.dragnote1,this);

  _this.coin_10_chartDrag = _this.add.sprite(520,455,'nsd6_5_coin_10frame');
  _this.coin_10_chartDrag.visible = false;
  _this.coin_10_chartDrag.name = "coin10chart";
  _this.coin_10_chartDrag.inputEnabled = true;
  _this.coin_10_chartDrag.events.onInputDown.add(_this.dragcoin10,this);

  _this.coin_1_chartDrag = _this.add.sprite(650,455,'nsd6_5_coin_1frame');
  _this.coin_1_chartDrag.visible = false;
  _this.coin_1_chartDrag.name = "coin1chart";
  _this.coin_1_chartDrag.inputEnabled = true;
  _this.coin_1_chartDrag.events.onInputDown.add(_this.dragcoin1,this);


   _this.currencygroup.add(_this.currency);
    _this.chartgroup.add(_this.chart);
    _this.chartgroup.add(_this.frame_1_coin);
    _this.chartgroup.add(_this.frame_10_coin);
    _this.chartgroup.add(_this.frame_1_note);
    _this.chartgroup.add(_this.frame_10_note);
},

dragnote10:function(target){
     console.log("Hii")
     _this.snapSound.play();
     _this.wx=target.x;
     _this.wy=target.y;
     console.log("wx="+_this.wx);
     console.log("target1="+target.x)
     target.alpha = 1;
     _this.note_10Draggable.scale.setTo(2,2);

     target.input.enableDrag(true);

    if(target == _this.note_10_chartDrag)
        {
             if(_this.frame_10_note.frame > 0)
             {
                 _this.frame_10_note.frame--;
             }
        }

     target.events.onDragStop.add(function(target){

        
        _this.note_10Draggable.scale.setTo(1,1);
         console.log("Target"+target.x);
         if(_this.checkOverlap(target,_this.frame_10_note) && target.name == "note_10Draggable")
           {
              console.log("1");
              console.log("frame="+_this.frame_10_note.frame)
              if(_this.frame_10_note.frame < 9)
                {
                     if(_this.frame_10_note.frame == 8){
                          target.inputEnabled = false;
                     }
                  _this.frame_10_note.frame++;
                  _this.note_10_chartDrag.inputEnabled = true;
                  console.log("frame="+_this.frame_10_note.frame)
                  _this.note_10_chartDrag.visible = true;
                  _this.note_10_chartDrag.alpha = 0;
                  target.alpha = 0;
                }
              else
                {
                  target.alpha = 0;
               // target.inputEnabled = false;
                  target.x =  _this.wx;
                  target.y =  _this.wy;
                }
            }

            if(target.name == "note10chart")
              {
                if(_this.checkOverlap(target,_this.currency))
                  {
                     console.log("Hii");
                       if(_this.frame_10_note.frame == 0){
                         _this.note_10_chartDrag.inputEnabled = false;
                      }
                     _this.note_10Draggable.inputEnabled = true;
                  }
                else
                  {
                     _this.frame_10_note.frame++;
                  }
              }

            target.alpha = 0;
            target.x =  _this.wx;
            target.y =  _this.wy;
            console.log("wx2="+_this.wx);
            console.log("target2="+target.x)
            target.events.onDragStop.removeAll();

              },_this);
},

dragnote1:function(target){
     console.log("Hii")
     _this.snapSound.play();
     _this.wx=target.x;
     _this.wy=target.y;
     console.log("wx="+_this.wx);
     console.log("target1="+target.x)
     target.alpha = 1;
     _this.note_1Draggable.scale.setTo(2,2);
     target.input.enableDrag(true);

    if(target == _this.note_1_chartDrag)
        {
             if(_this.frame_1_note.frame > 0)
             {
                 _this.frame_1_note.frame--;
             }
        }

     target.events.onDragStop.add(function(target){

         _this.note_1Draggable.scale.setTo(1,1);
         console.log("Target50="+target.x);
         if(_this.checkOverlap(target,_this.frame_1_note) && target.name == "note_1Draggable")
           {
              console.log("1");
              if(_this.frame_1_note.frame < 9)
                {
                     if(_this.frame_1_note.frame == 8){
                          target.inputEnabled = false;
                     }
                    console.log("Hello")
                  _this.frame_1_note.frame++;
                  _this.note_1_chartDrag.inputEnabled = true;
                  _this.note_1_chartDrag.visible = true;
                  _this.note_1_chartDrag.alpha = 0;
                  target.alpha = 0;
                }
              else
                {
                  target.alpha = 0;
                //  target.inputEnabled = false;
                  target.x =  _this.wx;
                  target.y =  _this.wy;
                }
            }

            if(target.name == "note1chart")
              {
                if(_this.checkOverlap(target,_this.currency))
                  {
                     console.log("Hii");
                       if(_this.frame_1_note.frame == 0){
                         _this.note_1_chartDrag.inputEnabled = false;
                      }
                     _this.note_1Draggable.inputEnabled = true;
                  }
                else
                  {
                     _this.frame_1_note.frame++;
                  }
              }

            target.alpha = 0;
            target.x =  _this.wx;
            target.y =  _this.wy;
            console.log("wx2="+_this.wx);
            console.log("target2="+target.x)
            target.events.onDragStop.removeAll();

              },_this);
},

dragcoin10:function(target){

     _this.snapSound.play();
     _this.wx=target.x;
     console.log("wxx"+_this.wx);
     _this.wy=target.y;
      console.log("wxy"+_this.wy);
     target.alpha = 1;
     _this.coin_10Draggable.scale.setTo(2,2);

     target.input.enableDrag(true);

    if(target == _this.coin_10_chartDrag)
        {
             if(_this.frame_10_coin.frame > 0)
             {
                 _this.frame_10_coin.frame--;
             }
        }

     target.events.onDragStop.add(function(target){
       
        _this.coin_10Draggable.scale.setTo(1,1);


         if(_this.checkOverlap(target,_this.frame_10_coin) && target.name == "coin_10Draggable")
           {
              console.log("!!!!!!!!!");
              if(_this.frame_10_coin.frame < 9)
                {
                  if(_this.frame_10_coin.frame == 8){
                          target.inputEnabled = false;
                     }
                  _this.frame_10_coin.frame++;
                      _this.coinDrop.play();
                  _this.coin_10_chartDrag.inputEnabled = true;
                  _this.coin_10_chartDrag.visible = true;
                  _this.coin_10_chartDrag.alpha = 0;

                  _this.coin_10_chartDrag.y -=20;
                  console.log("y1 value="+_this.coin_10_chartDrag.y)

                  target.alpha = 0;
                  // target.x =  _this.wx;
                   console.log("tar1x="+target.x);
                 //  target.y =  _this.wy;
                   console.log("tar1y="+target.y);
                }
              else
                {
                  target.alpha = 0;
                //  target.inputEnabled = false;
                 // target.x =  _this.wx;
                     console.log("tar1xElsepart="+target.x);
                //  target.y =  _this.wy;
                     console.log("tar1yElsepart="+target.y);
                }

                  target.x =  _this.wx;
                  console.log("tar1x="+target.x);
                  target.y =  _this.wy;
                  console.log("tar1y="+target.y);
            }

           else if(target.name == "coin10chart")
              {

                if(_this.checkOverlap(target,_this.currency))
                  {
                     console.log("************");
                      if(_this.frame_10_coin.frame == 0){
                         _this.coin_10_chartDrag.inputEnabled = false;
                      }
                         _this.coinDrop.play();
                       target.x =  _this.wx;
                      console.log("targetX="+target.x);
                       target.y =  _this.wy;
                      console.log("TargetY="+target.y);
                      _this.coin_10_chartDrag.y+=20;
                        console.log("y2 value="+_this.coin_10_chartDrag.y)
                     _this.coin_10Draggable.inputEnabled = true;
                  }
                else
                  {
                     _this.frame_10_coin.frame++;
                      target.x =  _this.wx;
                      console.log("targetX="+target.x);
                       target.y =  _this.wy;
                      console.log("TargetY="+target.y);
                  }
              }
         else
         {
             target.x =  _this.wx;
                      console.log("targetX="+target.x);
                       target.y =  _this.wy;
                      console.log("TargetY="+target.y);
         }

            target.alpha = 0;

            target.events.onDragStop.removeAll();

              },_this);
},

dragcoin1:function(target){

  _this.snapSound.play();
  _this.wx=target.x;
  console.log("wxx"+_this.wx);
  _this.wy=target.y;
   console.log("wxy"+_this.wy);
  target.alpha = 1;
  _this.coin_1Draggable.scale.setTo(2,2);

  target.input.enableDrag(true);

 if(target == _this.coin_1_chartDrag)
     {
          if(_this.frame_1_coin.frame > 0)
          {
              _this.frame_1_coin.frame--;
          }
     }

  target.events.onDragStop.add(function(target){
      
     _this.coin_1Draggable.scale.setTo(1,1);


      if(_this.checkOverlap(target,_this.frame_1_coin) && target.name == "coin_1Draggable")
        {
           console.log("!!!!!!!!!");
           if(_this.frame_1_coin.frame < 9)
             {
               if(_this.frame_1_coin.frame == 8){
                       target.inputEnabled = false;
                  }
                _this.coinDrop.play();
               _this.frame_1_coin.frame++;
               _this.coin_1_chartDrag.inputEnabled = true;
               _this.coin_1_chartDrag.visible = true;
               _this.coin_1_chartDrag.alpha = 0;

               _this.coin_1_chartDrag.y -=20;
               console.log("y1 value="+_this.coin_1_chartDrag.y)

               target.alpha = 0;
               // target.x =  _this.wx;
                console.log("tar1x="+target.x);
              //  target.y =  _this.wy;
                console.log("tar1y="+target.y);
             }
           else
             {
               target.alpha = 0;
             //  target.inputEnabled = false;
              // target.x =  _this.wx;
                  console.log("tar1xElsepart="+target.x);
             //  target.y =  _this.wy;
                  console.log("tar1yElsepart="+target.y);
             }

               target.x =  _this.wx;
               console.log("tar1x="+target.x);
               target.y =  _this.wy;
               console.log("tar1y="+target.y);
         }

        else if(target.name == "coin1chart")
           {

             if(_this.checkOverlap(target,_this.currency))
               {
                  console.log("************");
                   if(_this.frame_1_coin.frame == 0){
                      _this.coin_1_chartDrag.inputEnabled = false;
                   }
                    _this.coinDrop.play();
                    target.x =  _this.wx;
                   console.log("targetX="+target.x);
                    target.y =  _this.wy;
                   console.log("TargetY="+target.y);
                   _this.coin_1_chartDrag.y+=20;
                     console.log("y2 value="+_this.coin_1_chartDrag.y)
                  _this.coin_1Draggable.inputEnabled = true;
               }
             else
               {
                  _this.frame_1_coin.frame++;
                   target.x =  _this.wx;
                   console.log("targetX="+target.x);
                    target.y =  _this.wy;
                   console.log("TargetY="+target.y);
               }
           }
      else
      {
          target.x =  _this.wx;
                   console.log("targetX="+target.x);
                    target.y =  _this.wy;
                   console.log("TargetY="+target.y);
      }

         target.alpha = 0;
         target.events.onDragStop.removeAll();

           },_this);
},

question1:function(){

     _this.Question = 1;
     _this.no1++;
     console.log("1");
     _this.rightAns = 2;
    if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
  

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()
     
     _this.loadAssets();
    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "4");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "5");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "2");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "6");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
           
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
        _this.clickSound.play();
          _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
          _this.clickSound.play();
          _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
          _this.clickSound.play();
          _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "2");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "2");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "2");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "2");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "2");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "2");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F);
    if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }

},
    
question2:function(){

    _this.Question = 2;
    _this.no1++;
    console.log("2");
    _this.rightAns = 1;
  if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
    

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()

    _this.loadAssets();
    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "6");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "4");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "3");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "7");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
          _this.clickSound.play();
         _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
           _this.clickSound.play();
           _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "7");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "7");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "7");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "7");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "7");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "7");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F);
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},

question3:function(){

   _this.Question = 3;
   _this.no1++;
   console.log("3");
   _this.rightAns = 3;
   if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
   _this.loadAssets();

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()


    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "2");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "5");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "1");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "8");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
          _this.clickSound.play();
          _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
           _this.clickSound.play();
         _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
          _this.clickSound.play();
          _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
           _this.clickSound.play();
           _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "5");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "5");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "5");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "5");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "5");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "5");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F);    
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},

question4:function(){

  _this.Question = 4;
  _this.no1++;
  console.log("4");
  _this.rightAns = 4;
   if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
    _this.loadAssets();

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()


    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "8");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "3");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "2");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "4");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
          _this.clickSound.play();
         _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
          _this.clickSound.play();
      _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "8");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "8");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "8");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "8");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "8");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "8");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F); 
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},
    
question5:function(){

   _this.Question = 5;
   _this.no1++;
   console.log("5");
   _this.rightAns = 2;
   if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
   _this.loadAssets();

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()


    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "3");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "7");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "9");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "1");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
          _this.clickSound.play();
          _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
          _this.clickSound.play();
      _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "9");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "9");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "9");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "9");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "9");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "9");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F); 
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},
    
question6:function(){
   _this.Question = 6;
   _this.no1++;
   console.log("6");
   _this.rightAns = 1;
  if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
     _this.loadAssets();

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()


    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "7");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "5");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "4");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "2");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
          _this.clickSound.play();
         _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
           _this.clickSound.play();
         _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "2");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "2");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "2");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "2");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "2");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "2");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F);
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},
    
question7:function(){
   _this.Question = 7;
   _this.no1++;
   console.log("7");
   _this.rightAns = 3;
    if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
     _this.loadAssets();

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()


    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "5");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "3");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "6");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "7");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
          _this.clickSound.play();
         _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
        _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
          _this.clickSound.play();
      _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "3");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "3");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "3");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "3");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "3");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "3");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F);
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},
    
question8:function(){
   _this.Question = 8;
   _this.no1++;
   console.log("8");
   _this.rightAns = 4;
  if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
     _this.loadAssets();

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()


    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "4");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "8");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "1");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "9");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
           _this.clickSound.play();
         _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
          _this.check = 3;
          _this.box2C.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "4");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "4");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "4");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "4");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "4");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "4");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F);
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},
    
question9:function(){
   _this.Question = 9;
   _this.no1++;
   console.log("9");
   _this.rightAns = 4;
   if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
     _this.loadAssets();

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()


    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "9");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "9");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "7");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "7");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
            _this.clickSound.play();
           _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
           _this.clickSound.play();
         _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
          _this.clickSound.play();
          _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
           _this.clickSound.play();
           _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
           _this.clickSound.play();
          _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "9");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "9");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "9");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "9");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "9");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "9");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F);
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},
    
question10:function(){
    
   _this.Question = 10;
   _this.no1++;
   console.log("10");
   _this.rightAns = 1;
    if(_this.soundPlayed == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
    
      _this.loadAssets();

    _this.answersgroup = _this.add.group();
    _this.group1 = _this.add.group()


    /*---right side box----*/
     _this.box1 = _this.add.sprite(770,75,'nsd6_5_box1');


/*----right side box Text----*/
    _this.text1 = _this.add.text(36, 55, "7");
    _this.text1.font = "myfont";
    _this.text1.fill = "#4BBCE2";
    _this.text1.fontWeight = 'bold';
    _this.text1.anchor.set(0.5);
    _this.text1.fontSize = 50;
    _this.box1.addChild(_this.text1);

    _this.text2 = _this.add.text(63, 55, "4");
    _this.text2.font = "myfont";
    _this.text2.fill = "#4BBCE2";
    _this.text2.fontWeight = 'bold';
    _this.text2.anchor.set(0.5);
    _this.text2.fontSize = 50;
    _this.box1.addChild(_this.text2);

    _this.dot = _this.add.sprite(68,-10,'nsd6_5_dot');
    _this.dot.scale.setTo(1.8);
    _this.box1.addChild(_this.dot);

    _this.text3 = this.add.text(105, 55, "3");
    _this.text3.font = "myfont";
    _this.text3.fill = "#4BBCE2";
    _this.text3.fontWeight = 'bold';
    _this.text3.anchor.set(0.5);
    _this.text3.fontSize = 50;
    _this.box1.addChild(_this.text3);

    _this.text4 = _this.add.text(132, 55, "6");
    _this.text4.font = "myfont";
    _this.text4.fill = "#4BBCE2";
    _this.text4.fontWeight = 'bold';
    _this.text4.anchor.set(0.5);
    _this.text4.fontSize = 50;
    _this.box1.addChild(_this.text4);

    /*----Answer Boxes---*/
     _this.box2A = _this.add.sprite(40,400,"nsd6_5_box2");
     _this.box2A.visible = false;
     _this.box2A.inputEnabled = true;
     _this.box2A.events.onInputDown.add(function(){
          _this.clickSound.play();
          _this.check = 1;
          _this.box2A.frame = 1;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2B = _this.add.sprite(155,400,"nsd6_5_box2");
    _this.box2B.visible = false;
    _this.box2B.inputEnabled = true;
    _this.box2B.events.onInputDown.add(function(){
          _this.clickSound.play();
         _this.check = 2;
          _this.box2B.frame = 1;
          _this.box2A.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2C = _this.add.sprite(270,400,"nsd6_5_box2");
    _this.box2C.visible = false;
    _this.box2C.inputEnabled = true;
    _this.box2C.events.onInputDown.add(function(){
          _this.clickSound.play();
       _this.check = 3;
       _this.box2C.frame = 1;
        _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
      },this);
    _this.box2D = _this.add.sprite(385,400,"nsd6_5_box2");
    _this.box2D.visible = false;
    _this.box2D.inputEnabled = true;
    _this.box2D.events.onInputDown.add(function(){
           _this.clickSound.play();
       _this.check = 4;
          _this.box2D.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2E.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2E = _this.add.sprite(500,400,"nsd6_5_box2");
    _this.box2E.visible = false;
    _this.box2E.inputEnabled = true;
    _this.box2E.events.onInputDown.add(function(){
           _this.clickSound.play();
       _this.check = 5;
          _this.box2E.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2F.frame = 0;
     },this);
    _this.box2F = _this.add.sprite(615,400,"nsd6_5_box2");
    _this.box2F.visible = false;
    _this.box2F.inputEnabled = true;
    _this.box2F.events.onInputDown.add(function(){
          _this.clickSound.play();
      _this.check = 6;
          _this.box2F.frame = 1;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
     },this);
  /*------First Answer Box Text--------*/
    _this.text2A = _this.add.text(52, 37, "6");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2A.addChild(_this.div);

    _this.text2A = _this.add.text(32, 74, "1");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

     _this.text2A = _this.add.text(47, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

    _this.text2A = _this.add.text(67, 74, "0");
    _this.text2A.font = "myfont";
    _this.text2A.fill = "#4BBCE2";
    _this.text2A.fontWeight = 'normal';
    _this.text2A.anchor.set(0.5);
    _this.text2A.fontSize = 30;
    _this.box2A.addChild(_this.text2A);

/*----Second Answer Box Text-----*/
     _this.text2B = _this.add.text(53, 37, "6");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    _this.div = _this.add.sprite(20,52,"nsd6_5_div");
    _this.box2B.addChild(_this.div);

    _this.text2B = _this.add.text(42, 74, "1");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

     _this.text2B = _this.add.text(57, 74, "0");
    _this.text2B.font = "myfont";
    _this.text2B.fill = "#4BBCE2";
    _this.text2B.fontWeight = 'normal';
    _this.text2B.anchor.set(0.5);
    _this.text2B.fontSize = 30;
    _this.box2B.addChild(_this.text2B);

    /*---3rd Answer Box Text----*/
     _this.text2C = _this.add.text(53, 54, "6");
    _this.text2C.font = "myfont";
    _this.text2C.fill = "#4BBCE2";
    _this.text2C.fontWeight = 'normal';
    _this.text2C.anchor.set(0.5);
    _this.text2C.fontSize = 30;
    _this.box2C.addChild(_this.text2C);

    /*---4th Answer Box Text---*/
     _this.text2D = _this.add.text(43, 54, "6");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

     _this.text2D = _this.add.text(60, 54, "0");
    _this.text2D.font = "myfont";
    _this.text2D.fill = "#4BBCE2";
    _this.text2D.fontWeight = 'normal';
    _this.text2D.anchor.set(0.5);
    _this.text2D.fontSize = 30;
    _this.box2D.addChild(_this.text2D);

    /*---5th answer box text-----*/
     _this.text2E = _this.add.text(34, 54, "6");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

     _this.text2E = _this.add.text(51, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    _this.text2E = _this.add.text(70, 54, "0");
    _this.text2E.font = "myfont";
    _this.text2E.fill = "#4BBCE2";
    _this.text2E.fontWeight = 'normal';
    _this.text2E.anchor.set(0.5);
    _this.text2E.fontSize = 30;
    _this.box2E.addChild(_this.text2E);

    /*-----6th answer box text----*/
     _this.text2F = _this.add.text(25, 54, "6");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

     _this.text2F = _this.add.text(42, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(61, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.text2F = _this.add.text(80, 54, "0");
    _this.text2F.font = "myfont";
    _this.text2F.fill = "#4BBCE2";
    _this.text2F.fontWeight = 'normal';
    _this.text2F.anchor.set(0.5);
    _this.text2F.fontSize = 30;
    _this.box2F.addChild(_this.text2F);

    _this.tickmark = _this.add.sprite(860,433,'nsd5_5_rightmark');
    _this.tickmark.anchor.setTo(0.5);
    _this.tickmark.scale.setTo(1.5,1.5);
    _this.tickmark.inputEnabled = true;
    _this.tickmark.events.onInputDown.add(function(){
      if(_this.flag == 0)
       {  _this.toCheckTweenAns(); }
       else if(_this.flag == 1)
       { console.log("checking*******");
         _this.toCheckAnswer(); }
     },_this);

     _this.group1.add(_this.box1);
     _this.group1.add(_this.tickmark);
     
      _this.answersgroup.add(_this.box2A);
      _this.answersgroup.add(_this.box2B);
      _this.answersgroup.add(_this.box2C);
      _this.answersgroup.add(_this.box2D);
      _this.answersgroup.add(_this.box2E);
      _this.answersgroup.add(_this.box2F);
    
     if(_this.wrongAnswer == false)
     {
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.chartgroup.x=1000;
     _this.tween=_this.add.tween(_this.chartgroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.currencygroup.x=1000;
     _this.tween=_this.add.tween(_this.currencygroup).to( { x: 0 }, 1500, 'Linear', true,0);
     }
},

toCheckTweenAns:function () {
  _this.flag =1;
  console.log("Hello");
   if(_this.Question == 1)
   {
     console.log("Hello2");
     if(_this.frame_10_note.frame == 4 && _this.frame_1_note.frame == 5 && _this.frame_10_coin.frame == 2 && _this.frame_1_coin.frame == 6)
     {
       console.log("hi");
       _this.tweengroup();  
       _this.time.events.add(500, function(){
            _this.text3.fill = "#FF0000";
        },_this);       
     }
     else
     {
        _this.dontTween();     
     }
   }
       
     if(_this.Question == 2)
     {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 6 && _this.frame_1_note.frame == 4 && _this.frame_10_coin.frame == 3 && _this.frame_1_coin.frame == 7)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text4.fill = "#FF0000";
        },_this);
         }
         else
         {
              _this.dontTween();
         }
       }
    
     if(_this.Question == 3)
     {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 2 && _this.frame_1_note.frame == 5 && _this.frame_10_coin.frame == 1 && _this.frame_1_coin.frame == 8)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text2.fill = "#FF0000";
        },_this);
         }
         else
         {    
             _this.dontTween();
         }
       }

      if(_this.Question == 4)
     {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 8 && _this.frame_1_note.frame == 3 && _this.frame_10_coin.frame == 2 && _this.frame_1_coin.frame == 4)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text1.fill = "#FF0000";
             },_this);
         }
         else
         {   
             _this.dontTween();
         }
     }
         
     if(_this.Question == 5)
       {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 3 && _this.frame_1_note.frame == 7 && _this.frame_10_coin.frame == 9 && _this.frame_1_coin.frame == 1)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text3.fill = "#FF0000";
        },_this);
         }
         else
         {    
              _this.dontTween();
         }
       }
    
     if(_this.Question == 6)
       {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 7 && _this.frame_1_note.frame == 5 && _this.frame_10_coin.frame == 4 && _this.frame_1_coin.frame == 2)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text4.fill = "#FF0000";
        },_this);
         }
         else
         {
              _this.dontTween();
         }
       }
    
     if(_this.Question == 7)
       {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 5 && _this.frame_1_note.frame == 3 && _this.frame_10_coin.frame == 6 && _this.frame_1_coin.frame == 7)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text2.fill = "#FF0000";
        },_this);
         }
         else
         {   
              _this.dontTween();
         }
       }
     if(_this.Question == 8)
       {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 4 && _this.frame_1_note.frame == 8 && _this.frame_10_coin.frame == 1 && _this.frame_1_coin.frame == 9)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text1.fill = "#FF0000";
        },_this);
         }
         else
         {
              _this.dontTween();
         }
       }
     if(_this.Question == 9)
       {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 9 && _this.frame_1_note.frame == 9 && _this.frame_10_coin.frame == 7 && _this.frame_1_coin.frame == 7)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text1.fill = "#FF0000";
        },_this);
         }
         else
         { 
              _this.dontTween();
         }
       }
    
     if(_this.Question == 10)
       {
         console.log("Hello3");
         if(_this.frame_10_note.frame == 7 && _this.frame_1_note.frame == 4 && _this.frame_10_coin.frame == 3 && _this.frame_1_coin.frame == 6)
         {
           console.log("hi");
           _this.tweengroup();
             _this.time.events.add(500, function(){
                _this.text4.fill = "#FF0000";
        },_this);
         }
         else
         {      
             _this.dontTween();
         }
       }

},

/*---Function for wrong drag ---*/
dontTween:function(){
  _this.noofAttempts++;
      console.log("wrong");
      _this.shake.shake(10, _this.chartgroup);
      _this.flag = 0;
      _this.frame_10_coin.frame = 0;
      _this.frame_1_coin.frame = 0;
      _this.frame_10_note.frame = 0;
      _this.frame_1_note.frame = 0;
      _this.note_10Draggable.inputEnabled = true;
      _this.note_1Draggable.inputEnabled = true;
      _this.coin_10Draggable.inputEnabled = true;
      _this.coin_1Draggable.inputEnabled = true;
      _this.note_10_chartDrag.inputEnabled = false;
      _this.note_1_chartDrag.inputEnabled = false;
      _this.coin_1_chartDrag.inputEnabled = false;
      _this.coin_10_chartDrag.inputEnabled = false;
      _this.coin_10_chartDrag.y =455;
      _this.coin_1_chartDrag.y =455;
      _this.wmusic = _this.add.audio('waudio');
      _this.wmusic.play();
},  
    
/*--Function for tweening---*/    
tweengroup:function(){
      console.log("hi");
       _this.tweened = true;
      _this.answersgroup.y  = 150;
       _this.answersgroup.setAll("visible",true);
       _this.Maintween = _this.add.tween(_this.answersgroup);
       _this.Maintween.to({ y:20}, 0, 'Linear', true, 0);

    //   _this.chartgroup.y = -100;
       _this.Maintween = _this.add.tween(_this.chartgroup);
       _this.Maintween.to({ y:-120}, 0, 'Linear', true, 0);

  //    _this.currencygroup.y = -200
       _this.Maintween = _this.add.tween(_this.currencygroup);
       _this.Maintween.to({ y:-200}, 0, 'Linear', true, 0);
    
     _this.note_10_chartDrag.inputEnabled = false;
     _this.note_1_chartDrag.inputEnabled = false;
     _this.coin_1_chartDrag.inputEnabled = false;
     _this.coin_10_chartDrag.inputEnabled = false;
    
     if(_this.soundPlayed1 == false)
                  {
                  _this.getVoice();
                  _this.soundPlayed1 = true;     
                 }
      
},


toCheckAnswer :function (target){
   _this.clickSound.play();
   //_this.noofAttempts++;

      //   target.events.onInputDown.removeAll();

    if(_this.Question == 1||_this.Question == 2||_this.Question == 3||_this.Question == 4||_this.Question == 5||_this.Question ==6|| _this.Question == 7||_this.Question == 8||_this.Question == 9||_this.Question == 10||_this.Question == 11||_this.Question == 12)
         {

             if(_this.check == _this.rightAns)
                 {
                   console.log("wrong");
                    _this.correctAns();
                 }
             else
                 {
                    _this.wrongAns();
                 }
         }



},


correctAns:function(target){

    //_this.stopvoice();
     _this.wrong = false;
   // target.events.onInputDown.removeAll();
   // _this.rightmark.inputEnabled=false;
     _this.wrongAnswer = false;
    _this.noofAttempts++;
     _this.flag = 0;
    
     _this.note_10_chartDrag.inputEnabled = false;
     _this.note_1_chartDrag.inputEnabled = false;
     _this.coin_1_chartDrag.inputEnabled = false;
     _this.coin_10_chartDrag.inputEnabled = false;
     _this.note_10Draggable.inputEnabled = false;
      _this.note_1Draggable.inputEnabled = false;
     _this.coin_1Draggable.inputEnabled = false;
     _this.coin_10Draggable.inputEnabled = false;
    
    if(_this.Question == 1 || _this.Question == 5)
        {   _this.box2B.frame = 2;  }
    if(_this.Question == 2 || _this.Question == 6 || _this.Question == 10)
        {   _this.box2A.frame = 2;  }
    if(_this.Question == 3 || _this.Question == 7)
        {   _this.box2C.frame = 2;  }
    if(_this.Question == 4 || _this.Question == 8 || _this.Question == 9)
        {   _this.box2D.frame = 2;  }
   
    
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



     _this.time.events.add(1000, function(){});

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play();
        _this.count1++;

        _this.celebration = true;
        _this.celebr.play();



    _this.time.events.add(2500, _this.removeCelebration, _this);

    _this.questionid=1;
            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

	},

    wrongAns:function(target)
	{
       // _this.stopvoice();
        _this.check = 0;
        _this.noofAttempts++;
        // _this.currentTime = window.timeSaveFunc();

          _this.shake.shake(10, _this.answersgroup);
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
           _this.box2F.frame = 0;
          _this.box2A.frame = 0;
          _this.box2B.frame = 0;
          _this.box2C.frame = 0;
          _this.box2D.frame = 0;
          _this.box2E.frame = 0;
        
        // _this.timer1.stop();
         _this.wrong = false;
        _this.time.events.add(500, function(){

        },_this)

        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        _this.time.events.add(500, function(){


        },_this);

	},

removeCelebration:function()
  {
    console.log("removeCeleb");
    _this.celebration = false;
    _this.correct=0;
    _this.count=0;
    _this.qno++;
    _this.tweened = false;  


      if(_this.qno<6)
        {

            _this.currencygroup.destroy();
            _this.chartgroup.destroy();
            _this.answersgroup.destroy();
            _this.group1.destroy();
            _this.getQuestion();

        }

    else
        {
             // _this.stopvoice();
             _this.state.start('nsd6_5Score');
        }

  },


 getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.qno])
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
                if(_this.tweened == false)
                    {
                        
                     if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/English/nsd6.5a.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Hindi/nsd6.5a.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Kannada/nsd6.5a.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Gujarati/nsd6.5a.mp3");
                    }    
else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Marathi/nsd6.5a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Telugu/nsd6.5a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Tamil/nsd6.5a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Urdu/nsd6.5a.mp3");
                    }					
                     else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Odiya/nsd6.5a.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                        
                    }
                else
                    {
                          if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/English/nsd6.5b.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Hindi/nsd6.5b.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Kannada/nsd6.5b.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Gujarati/nsd6.5b.mp3");
                    }   
else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Marathi/nsd6.5b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Telugu/nsd6.5b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Tamil/nsd6.5b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Urdu/nsd6.5b.mp3");
                    }					
                     else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd6.5/Odiya/nsd6.5b.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                       
                    }
                    break;


        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();
    },

stopvoice:function(){

          if(_this.playQuestionSound)
          {
               if(_this.playQuestionSound.contains(_this.src))
               {
                    _this.playQuestionSound.removeChild(_this.src);
                    _this.src = null;
               }
               if(!_this.playQuestionSound.paused)
               {
                   console.log("here");
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

shutdown:function()
{
  this.stopvoice();
},


};
