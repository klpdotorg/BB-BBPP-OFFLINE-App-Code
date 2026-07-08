Game.pv1_4level1=function(){};




Game.pv1_4level1.prototype={
    init:function(game)
	{
		_this = this;
         
		telInitializer.gameIdInit("pv1_4",gradeSelected);
	},

    preload:function(game){

        if(!window.grade4PV1_4){

            window.grade4PV1_4 = true;

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
        
            this.load.image('pv1_4bgA',window.baseUrl+'assets/gradeAssets/pv1.4/bg2.png');
        
            this.load.atlas('pv1_4EraseButton',window.baseUrl+'assets/gradeAssets/pv1.4/EraseButton.png' ,window.baseUrl+'json/gradeJson/pv1.4/EraseButton.json');
              this.load.atlas('pv1_4RightButton',window.baseUrl+'assets/gradeAssets/pv1.4/RightButton.png' ,window.baseUrl+'json/gradeJson/pv1.4/RightButton.json');
                this.load.atlas('pv1_4CalNum',window.baseUrl+'assets/gradeAssets/pv1.4/calNum.png' ,window.baseUrl+'json/gradeJson/pv1.4/calNum.json');
        this.load.image('pv1_4footer',window.baseUrl+'assets/gradeAssets/pv1.4/footer.png');

        /*Questions Assets*/
         this.load.atlas('pv1_4rightmark',window.baseUrl+'assets/gradeAssets/pv1.4/rightmark.png',window.baseUrl+'json/gradeJson/pv1.4/rightmark.json');
         this.load.image('pv1_4locker',window.baseUrl+'assets/gradeAssets/pv1.4/locker.png');
         this.load.atlas('pv1_4door',window.baseUrl+'assets/gradeAssets/pv1.4/d2.png' ,window.baseUrl+'json/gradeJson/pv1.4/d2.json');
      //   this.load.image('pv1_4lock',window.baseUrl+'assets/gradeAssets/pv1.4/lock.png');
         this.load.image('pv1_4lock2',window.baseUrl+'assets/gradeAssets/pv1.4/lock2.png');
         this.load.atlas('pv1_4lock1',window.baseUrl+'assets/gradeAssets/pv1.4/lock1.png',window.baseUrl+'json/gradeJson/pv1.4/lock1.json');
         this.load.atlas('pv1_4questionBox',window.baseUrl+'assets/gradeAssets/pv1.4/box1.png',window.baseUrl+'json/gradeJson/pv1.4/box1.json');
         this.load.atlas('pv1_4answerBox',window.baseUrl+'assets/gradeAssets/pv1.4/box2.png',window.baseUrl+'json/gradeJson/pv1.4/box2.json');
         this.load.atlas('pv1_4sBox1',window.baseUrl+'assets/gradeAssets/pv1.4/bx1.png',window.baseUrl+'json/gradeJson/pv1.4/bx1.json');
         
         this.load.atlas('pv1_4sBox2',window.baseUrl+'assets/gradeAssets/pv1.4/bx2.png',window.baseUrl+'json/gradeJson/pv1.4/bx2.json');
         this.load.atlas('pv1_4sBox3',window.baseUrl+'assets/gradeAssets/pv1.4/bx3.png',window.baseUrl+'json/gradeJson/pv1.4/bx3.json');
         this.load.atlas('pv1_4sBox4',window.baseUrl+'assets/gradeAssets/pv1.4/bx4.png',window.baseUrl+'json/gradeJson/pv1.4/bx4.json');
         this.load.atlas('pv1_4sBox5',window.baseUrl+'assets/gradeAssets/pv1.4/bx5.png',window.baseUrl+'json/gradeJson/pv1.4/bx5.json');
         this.load.atlas('pv1_4numbers',window.baseUrl+'assets/gradeAssets/pv1.4/number.png',window.baseUrl+'json/gradeJson/pv1.4/number.json');
         this.load.image('pv1_4numb',window.baseUrl+'assets/gradeAssets/pv1.4/numb.png');
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
    _this.wrongAnswer = false;

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
    _this.clickSound = _this.add.audio('ClickSound');
    _this.waudio = _this.add.audio('waudio');
    _this.celebr = _this.add.audio('celebr');
    _this.snapSound = _this.add.audio('snapSound');
    _this.lockSound1 = _this.add.audio('lockSound1');
	_this.lockSound2 = _this.add.audio('lockSound2');
    _this.scrollSound = _this.add.audio('scrollSound');
    //baudio.play();
    //baudio.loopFull(0.6);
    _this.qArrays = new Array();
    _this.qArrays1 = new Array();
    _this.qArrays2 = new Array();
    _this.qArrays1 = [1,2,3,4,5];
    _this.qArrays2 = [6,7,8,9];

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

    _this.bg1 = _this.add.sprite(0,0, 'pv1_4bgA');
    _this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
    // _this.footer = _this.add.sprite(0,480,'footer');

    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopvoice();
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

    _this.speaker = this.add.button(620,9,'grade11_speaker',function(){
        this.clickSound = this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.getVoice();
    },_this,1,0,2);//,function(){console.log("speaker on");/*this.speakeron();*/},this,0,1,2);

    _this.generateStarsForTheScene(6);
   //  _this.no1++;
    this.getQuestion();

    

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
        if(_this.counterForTimer < 10)
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
getQuestion:function(target){

    _this.timer1 = this.time.create(false);
    _this.timer1.loop(1000, function(){
            this.updateTimer();
    }, this);
    _this.timer1.start();
    _this.grpnum=new Array();

    _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function(){
            _this.AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();
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
      //    case 10:this.question10(); break;
      //    case 11:this.question11(); break;
      //    case 12:this.question12(); break;
      }
},

 dragUpdate41:function(target) {
        console.log(target.y);
        console.log("dragUpdate41");
        console.log("HitareaGraphics41="+_this.hitAreaGraphics41.y);
        if(_this.temp41)
        {
            if(target.y<_this.temp41)
            {
                //console.log("hai");
                _this.hitAreaGraphics41.y+=((_this.temp41-target.y)-0.15);
            }
            else if(target.y>_this.temp41)
            {
                //console.log("hai2");
                _this.hitAreaGraphics41.y-=((target.y-_this.temp41)-0.15);
            }
        }

        if(target.y>150)
        {
            target.y = -268;
            _this.hitAreaGraphics41.y=420;
        }
        else if(target.y<-700)
        {
            target.y = -268;
            _this.hitAreaGraphics41.y=420;
        }

        _this.temp41 = target.y;
 },
 dragUpdate42:function(target) {
     console.log(target.y);
     console.log("dragUpdate42");
     console.log("HitareaGraphics42="+_this.hitAreaGraphics42.y);
     if(_this.temp42)
     {
         if(target.y<_this.temp42)
         {
             //console.log("hai");
             _this.hitAreaGraphics42.y+=((_this.temp42-target.y)-0.15);
         }
         else if(target.y>_this.temp42)
         {
             //console.log("hai2");
             _this.hitAreaGraphics42.y-=((target.y-_this.temp42)-0.15);
         }
     }

     if(target.y>150)
     {
         target.y = -268;
         _this.hitAreaGraphics42.y=420;
     }
     else if(target.y<-700)
     {
         target.y = -268;
         _this.hitAreaGraphics42.y=420;
     }

     _this.temp42 = target.y;
},
 dragUpdate43:function(target) {
     console.log(target.y);
     console.log("dragUpdate43");
     console.log("HitareaGraphics43="+_this.hitAreaGraphics43.y);
     if(_this.temp43)
     {
         if(target.y<_this.temp43)
         {
             //console.log("hai");
             _this.hitAreaGraphics43.y+=((_this.temp43-target.y)-0.15);
         }
         else if(target.y>_this.temp43)
         {
             //console.log("hai2");
             _this.hitAreaGraphics43.y-=((target.y-_this.temp43)-0.15);
         }
     }

     if(target.y>150)
     {
         target.y = -268;
         _this.hitAreaGraphics43.y=420;
     }
     else if(target.y<-700)
     {
         target.y = -268;
         _this.hitAreaGraphics43.y=420;
     }

     _this.temp43 = target.y;
},
 dragUpdate44:function(target) {
     console.log(target.y);
     console.log("dragUpdate44");
     console.log("HitareaGraphics44="+_this.hitAreaGraphics44.y);
     if(_this.temp44)
     {
         if(target.y<_this.temp44)
         {
             //console.log("hai");
             _this.hitAreaGraphics44.y+=((_this.temp44-target.y)-0.15);
         }
         else if(target.y>_this.temp44)
         {
             //console.log("hai2");
             _this.hitAreaGraphics44.y-=((target.y-_this.temp44)-0.15);
         }
     }

     if(target.y>150)
     {
         target.y = -268;
         _this.hitAreaGraphics44.y=420;
     }
     else if(target.y<-700)
     {
         target.y = -268;
         _this.hitAreaGraphics44.y=420;
     }

     _this.temp44 = target.y;
},
 dragUpdate31:function(target) {
     console.log(target.y);
     console.log("dragUpdate31");
     console.log("HitareaGraphics31="+_this.hitAreaGraphics31.y);
     if(_this.temp31)
     {
         if(target.y<_this.temp31)
         {
             //console.log("hai");
             _this.hitAreaGraphics31.y+=((_this.temp31-target.y)-0.15);
         }
         else if(target.y>_this.temp31)
         {
             //console.log("hai2");
             _this.hitAreaGraphics31.y-=((target.y-_this.temp31)-0.15);
         }
     }

     if(target.y>200)
     {
         target.y = -208;
         _this.hitAreaGraphics31.y=420;
     }
     else if(target.y<-630)
     {
         target.y = -208;
         _this.hitAreaGraphics31.y=420;
     }

     _this.temp31 = target.y;
},
 dragUpdate32:function(target) {
        console.log(target.y);
        console.log("dragUpdate32");
        console.log("HitareaGraphics32="+_this.hitAreaGraphics32.y);
        if(_this.temp32)
        {
            if(target.y<_this.temp32)
            {
                //console.log("hai");
                _this.hitAreaGraphics32.y+=((_this.temp32-target.y)-0.15);
            }
            else if(target.y>_this.temp32)
            {
                //console.log("hai2");
                _this.hitAreaGraphics32.y-=((target.y-_this.temp32)-0.15);
            }
        }

     if(target.y>200)
     {
         target.y = -208;
         _this.hitAreaGraphics32.y=420;
     }
     else if(target.y<-630)
     {
         target.y = -208;
         _this.hitAreaGraphics32.y=420;
     }

     _this.temp32 = target.y;
},
 dragUpdate33:function(target) {
     console.log(target.y);
     console.log("dragUpdate33");
     console.log("HitareaGraphics33="+_this.hitAreaGraphics33.y);
     if(_this.temp33)
     {
         if(target.y<_this.temp33)
         {
             //console.log("hai");
             _this.hitAreaGraphics33.y+=((_this.temp33-target.y)-0.15);
         }
         else if(target.y>_this.temp33)
         {
             //console.log("hai2");
             _this.hitAreaGraphics33.y-=((target.y-_this.temp33)-0.15);
         }
     }

     if(target.y>200)
     {
         target.y = -208;
         _this.hitAreaGraphics33.y=420;
     }
     else if(target.y<-630)
     {
         target.y = -208;
         _this.hitAreaGraphics33.y=420;
     }

     _this.temp33 = target.y;
},
 dragUpdate21:function(target) {
     console.log(target.y);
     console.log("dragUpdate21");
     console.log("HitareaGraphics21="+_this.hitAreaGraphics21.y);
     if(_this.temp21)
     {
         if(target.y<_this.temp21)
         {
             //console.log("hai");
             _this.hitAreaGraphics21.y+=((_this.temp21-target.y)-0.15);
         }
         else if(target.y>_this.temp21)
         {
             //console.log("hai2");
             _this.hitAreaGraphics21.y-=((target.y-_this.temp21)-0.15);
         }
     }

     if(target.y>275)
     {
         target.y = -148;
         _this.hitAreaGraphics21.y=420;
     }
     else if(target.y<-568)
     {
         target.y = -148;
         _this.hitAreaGraphics21.y=420;
     }

     _this.temp21 = target.y;
},
 dragUpdate22:function(target) {
     console.log(target.y);
     console.log("dragUpdate22");
     console.log("HitareaGraphics22="+_this.hitAreaGraphics22.y);
     if(_this.temp22)
     {
         if(target.y<_this.temp22)
         {
             //console.log("hai");
             _this.hitAreaGraphics22.y+=((_this.temp22-target.y)-0.15);
         }
         else if(target.y>_this.temp22)
         {
             //console.log("hai2");
             _this.hitAreaGraphics22.y-=((target.y-_this.temp22)-0.15);
         }
     }

     if(target.y>275)
     {
         target.y = -148;
         _this.hitAreaGraphics22.y=420;
     }
     else if(target.y<-568)
     {
         target.y = -148;
         _this.hitAreaGraphics22.y=420;
     }

     _this.temp22 = target.y;
},
 dragUpdate11:function(target) {
     console.log(target.y);
     console.log("dragUpdate11");
     console.log("HitareaGraphics11="+_this.hitAreaGraphics11.y);
     if(_this.temp11)
     {
         if(target.y<_this.temp11)
         {
             //console.log("hai");
             _this.hitAreaGraphics11.y+=((_this.temp11-target.y)-0.15);
         }
         else if(target.y>_this.temp11)
         {
             //console.log("hai2");
             _this.hitAreaGraphics11.y-=((target.y-_this.temp11)-0.15);
         }
     }

     if(target.y>315)
     {
         target.y = -88;
         _this.hitAreaGraphics11.y=420;
     }
     else if(target.y<-516)
     {
         target.y = -88;
         _this.hitAreaGraphics11.y=420;
     }

     _this.temp11 = target.y;
},

loadAssets:function(){
  _this.lockergroup=_this.add.group();
  _this.lockgroup = _this.add.group();
  _this.boxgroup = _this.add.group();
  _this.numbergroup = _this.add.group();
  _this.graphicgroup = _this.add.group();

  _this.locker = _this.add.sprite(70, 70, 'pv1_4locker');
  _this.door = _this.add.sprite(55, 85, 'pv1_4door');
  _this.lock1 = _this.add.sprite(587.5, 312, 'pv1_4lock1');
  _this.lock1.anchor.setTo(0.4915, 0.486);
  _this.lock2 = _this.add.sprite(587.5, 311, 'pv1_4lock2');
  _this.lock2.anchor.setTo(0.5,0.5);
  //_this.numbers = _this.add.sprite(202,93,'numbers');
  _this.qBox = _this.add.sprite(468,140,'pv1_4questionBox');
  _this.sBox2 = _this.add.sprite(180,140,'pv1_4sBox2');
  _this.sBox3 = _this.add.sprite(225,200,'pv1_4sBox3');
  _this.sBox4 = _this.add.sprite(270,260,'pv1_4sBox4');
  _this.sBox5 = _this.add.sprite(315,320,'pv1_4sBox5');

  /*NUMBERS IN BOXES*/
  _this.numb41 = _this.add.sprite(197,-267,'pv1_4numb');
  _this.numb41.inputEnabled = true;
  _this.numb41.input.priorityID = 1;
  _this.numb41.input.pixelPerfectClick = true;
  _this.numb41.input.useHandCursor = true;
  _this.numb41.input.enableDrag();
  _this.numb41.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics41 = new Phaser.Rectangle(0, 0, 40, 60);
  _this.numb41.hitArea = _this.hitAreaGraphics41;
  _this.hitAreaGraphics41.y = 420;//410
  _this.numb41.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb41.events.onDragUpdate.add(_this.dragUpdate41, _this);
  _this.numb41.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb42 = _this.add.sprite(244,-267,'pv1_4numb');
  _this.numb42.inputEnabled = true;
  _this.numb42.input.priorityID = 1;
  _this.numb42.input.pixelPerfectClick = true;
  _this.numb42.input.useHandCursor = true;
  _this.numb42.input.enableDrag();
  _this.numb42.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics42 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb42.hitArea = _this.hitAreaGraphics42;
  _this.hitAreaGraphics42.y = 420;//
  _this.numb42.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb42.events.onDragUpdate.add(_this.dragUpdate42, _this);
  _this.numb42.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb43 = _this.add.sprite(290,-267,'pv1_4numb');
  _this.numb43.inputEnabled = true;
  _this.numb43.input.priorityID = 1;
  _this.numb43.input.pixelPerfectClick = true;
  _this.numb43.input.useHandCursor = true;
  _this.numb43.input.enableDrag();
  _this.numb43.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics43 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb43.hitArea = _this.hitAreaGraphics43;
  _this.hitAreaGraphics43.y = 420;//410
  _this.numb43.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb43.events.onDragUpdate.add(_this.dragUpdate43, _this);
  _this.numb43.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb44 = _this.add.sprite(336,-267,'pv1_4numb');
  _this.numb44.inputEnabled = true;
  _this.numb44.input.priorityID = 1;
  _this.numb44.input.pixelPerfectClick = true;
  _this.numb44.input.useHandCursor = true;
  _this.numb44.input.enableDrag();
  _this.numb44.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics44 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb44.hitArea = _this.hitAreaGraphics44;
  _this.hitAreaGraphics44.y = 420;//410
  _this.numb44.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb44.events.onDragUpdate.add(_this.dragUpdate44, _this);
  _this.numb44.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb31 = _this.add.sprite(244,-208,'pv1_4numb');
  _this.numb31.inputEnabled = true;
  _this.numb31.input.priorityID = 1;
  _this.numb31.input.pixelPerfectClick = true;
  _this.numb31.input.useHandCursor = true;
  _this.numb31.input.enableDrag();
  _this.numb31.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics31 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb31.hitArea = _this.hitAreaGraphics31;
  _this.hitAreaGraphics31.y = 420;//410
  _this.numb31.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb31.events.onDragUpdate.add(_this.dragUpdate31, _this);
  _this.numb31.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb32 = _this.add.sprite(290,-208,'pv1_4numb');
  _this.numb32.inputEnabled = true;
  _this.numb32.input.priorityID = 1;
  _this.numb32.input.pixelPerfectClick = true;
  _this.numb32.input.useHandCursor = true;
  _this.numb32.input.enableDrag();
  _this.numb32.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics32 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb32.hitArea = _this.hitAreaGraphics32;
  _this.hitAreaGraphics32.y = 420;//
  _this.numb32.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb32.events.onDragUpdate.add(_this.dragUpdate32, _this);
  _this.numb32.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb33 = _this.add.sprite(336,-208,'pv1_4numb');
  _this.numb33.inputEnabled = true;
  _this.numb33.input.priorityID = 1;
  _this.numb33.input.pixelPerfectClick = true;
  _this.numb33.input.useHandCursor = true;
  _this.numb33.input.enableDrag();
  _this.numb33.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics33 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb33.hitArea = _this.hitAreaGraphics33;
  _this.hitAreaGraphics33.y = 420;//410
  _this.numb33.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb33.events.onDragUpdate.add(_this.dragUpdate33, _this);
  _this.numb33.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb21 = _this.add.sprite(290,-148,'pv1_4numb');
  _this.numb21.inputEnabled = true;
  _this.numb21.input.priorityID = 1;
  _this.numb21.input.pixelPerfectClick = true;
  _this.numb21.input.useHandCursor = true;
  _this.numb21.input.enableDrag();
  _this.numb21.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics21 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb21.hitArea = _this.hitAreaGraphics21;
  _this.hitAreaGraphics21.y = 420;//410
  _this.numb21.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb21.events.onDragUpdate.add(_this.dragUpdate21, _this);
  _this.numb21.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb22 = _this.add.sprite(336,-148,'pv1_4numb');
  _this.numb22.inputEnabled = true;
  _this.numb22.input.priorityID = 1;
  _this.numb22.input.pixelPerfectClick = true;
  _this.numb22.input.useHandCursor = true;
  _this.numb22.input.enableDrag();
  _this.numb22.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics22 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb22.hitArea = _this.hitAreaGraphics22;
  _this.hitAreaGraphics22.y = 420;//410
  _this.numb22.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb22.events.onDragUpdate.add(_this.dragUpdate22, _this);
  _this.numb22.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  _this.numb11 = _this.add.sprite(334,-88,'pv1_4numb');
  _this.numb11.inputEnabled = true;
  _this.numb11.input.priorityID = 1;
  _this.numb11.input.pixelPerfectClick = true;
  _this.numb11.input.useHandCursor = true;
  _this.numb11.input.enableDrag();
  _this.numb11.input.allowHorizontalDrag = false;

  _this.hitAreaGraphics11 = new Phaser.Rectangle(2, 0, 40, 60);
  _this.numb11.hitArea = _this.hitAreaGraphics11;
  _this.hitAreaGraphics11.y = 420;//410
  _this.numb11.events.onDragStart.add(function () {
      _this.scrollSound.play();
  })
  _this.numb11.events.onDragUpdate.add(_this.dragUpdate11, _this);
  _this.numb11.events.onDragStop.add(function () {
      //_this.scrollSound.play();
  })

  /*SCROLL BOXES GRAPHICS*/
  _this.sg41 = _this.add.graphics(90, 25);
  _this.sg41.lineStyle(2, 0x0000FF, 1);
  _this.sg41.beginFill(0xFF0000, 0.5);
  _this.sg41.drawRect(110, 135, 40, 50);
  _this.sg41.endFill();
  _this.sg41.alpha=0;
  _this.sg41.inputEnabled=true;
  _this.numb41.mask = _this.sg41;


  _this.sg42 = _this.add.graphics(90, 25);
  _this.sg42.lineStyle(2, 0x0000FF, 1);
  _this.sg42.beginFill(0xFF0000, 0.5);
  _this.sg42.drawRect(156, 135, 40, 50);
  _this.sg42.endFill();
  _this.sg42.alpha=0;
  _this.sg42.inputEnabled=true;
  _this.numb42.mask = _this.sg42;

  _this.sg43 = _this.add.graphics(90, 25);
  _this.sg43.lineStyle(2, 0x0000FF, 1);
  _this.sg43.beginFill(0xFF0000, 0.5);
  _this.sg43.drawRect(202, 135, 40, 50);
  _this.sg43.endFill();
  _this.sg43.alpha=0;
  _this.sg43.inputEnabled=true;
  _this.numb43.mask = _this.sg43;

  _this.sg44 = _this.add.graphics(90, 25);
  _this.sg44.lineStyle(2, 0x0000FF, 1);
  _this.sg44.beginFill(0xFF0000, 0.5);
  _this.sg44.drawRect(248, 135, 40, 50);
  _this.sg44.endFill();
  _this.sg44.alpha=0;
  _this.sg44.inputEnabled=true;
  _this.numb44.mask = _this.sg44;

  _this.sg31 = _this.add.graphics(90, 25);
  _this.sg31.lineStyle(2, 0x0000FF, 1);
  _this.sg31.beginFill(0xFF0000, 0.5);
  _this.sg31.drawRect(156, 195, 40, 50);
  _this.sg31.endFill();
  _this.sg31.alpha=0;
  _this.sg31.inputEnabled=true;
  _this.numb31.mask = _this.sg31;

  _this.sg32 = _this.add.graphics(90, 25);
  _this.sg32.lineStyle(2, 0x0000FF, 1);
  _this.sg32.beginFill(0xFF0000, 0.5);
  _this.sg32.drawRect(202, 195, 40, 50);
  _this.sg32.endFill();
  _this.sg32.alpha=0;
  _this.sg32.inputEnabled=true;
  _this.numb32.mask = _this.sg32;

  _this.sg33 = _this.add.graphics(90, 25);
  _this.sg33.lineStyle(2, 0x0000FF, 1);
  _this.sg33.beginFill(0xFF0000, 0.5);
  _this.sg33.drawRect(248, 195, 40, 50);
  _this.sg33.endFill();
  _this.sg33.alpha=0;
  _this.sg33.inputEnabled=true;
  _this.numb33.mask = _this.sg33;

  _this.sg21 = _this.add.graphics(90, 25);
  _this.sg21.lineStyle(2, 0x0000FF, 1);
  _this.sg21.beginFill(0xFF0000, 0.5);
  _this.sg21.drawRect(202, 255, 40, 50);
  _this.sg21.endFill();
  _this.sg21.alpha=0;
  _this.sg21.inputEnabled=true;
  _this.numb21.mask = _this.sg21;

   _this.sg22 = _this.add.graphics(90, 25);
  _this.sg22.lineStyle(2, 0x0000FF, 1);
  _this.sg22.beginFill(0xFF0000, 0.5);
  _this.sg22.drawRect(248, 255, 40, 50);
  _this.sg22.endFill();
  _this.sg22.alpha=0;
  _this.sg22.inputEnabled=true;
  _this.numb22.mask = _this.sg22;

   _this.sg11 = _this.add.graphics(90, 25);
  _this.sg11.lineStyle(2, 0x0000FF, 1);
  _this.sg11.beginFill(0xFF0000, 0.5);
  _this.sg11.drawRect(245, 315, 40, 50);
  _this.sg11.endFill();
  _this.sg11.alpha=0;
  _this.sg11.inputEnabled=true;
  _this.numb11.mask = _this.sg11;

  _this.lockergroup.add(_this.locker);
  _this.lockgroup.add(_this.lock1);
  _this.lockgroup.add(_this.lock2);
  _this.lockergroup.add(_this.door);
  _this.lockergroup.add(_this.qBox);
  _this.boxgroup.add(_this.sBox2);
  _this.boxgroup.add(_this.sBox3);
  _this.boxgroup.add(_this.sBox4);
  _this.boxgroup.add(_this.sBox5);
  _this.numbergroup.add(_this.numb41);
  _this.numbergroup.add(_this.numb42);
  _this.numbergroup.add(_this.numb43);
  _this.numbergroup.add(_this.numb44);
  _this.numbergroup.add(_this.numb31);
  _this.numbergroup.add(_this.numb32);
  _this.numbergroup.add(_this.numb33);
  _this.numbergroup.add(_this.numb21);
  _this.numbergroup.add(_this.numb22);
  _this.numbergroup.add(_this.numb11);
  _this.graphicgroup.add(_this.sg41);
  _this.graphicgroup.add(_this.sg42);
  _this.graphicgroup.add(_this.sg43);
  _this.graphicgroup.add(_this.sg44);
  _this.graphicgroup.add(_this.sg31);
  _this.graphicgroup.add(_this.sg32);
  _this.graphicgroup.add(_this.sg33);
  _this.graphicgroup.add(_this.sg21);
  _this.graphicgroup.add(_this.sg22);
  _this.graphicgroup.add(_this.sg11);
},

question1:function(){
    _this.Question = 1;
    _this.no1++;
    console.log("1");
    _this.loadAssets();
    _this.getVoice();
    _this.group1 = _this.add.group();
   

    _this.text = this.add.text(115, 45, "4 5 2 6");
    _this.text.font = "myfont";
    _this.text.fill = "#000000";
    _this.text.fontWeight = 'bold';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 45;
    _this.qBox.addChild(_this.text);

    _this.rightmark = _this.add.sprite(825,255,'pv1_4rightmark');
    _this.rightmark.scale.setTo(1.5,1.5);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);

    _this.group1.add(_this.rightmark);
     if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
        }
    },

question2:function(){
  _this.Question = 2;
  _this.no1++;
  console.log("2");
  _this.loadAssets();
   _this.getVoice();
   _this.group1 = _this.add.group();

  _this.text = this.add.text(115, 45, "1 3 5 7");
  _this.text.font = "myfont";
  _this.text.fill = "#000000";
  _this.text.fontWeight = 'bold';
  _this.text.anchor.set(0.5);
  _this.text.fontSize = 45;
  _this.qBox.addChild(_this.text);

  _this.rightmark = _this.add.sprite(825,255,'pv1_4rightmark');
  _this.rightmark.scale.setTo(1.5,1.5);
  _this.rightmark.inputEnabled = true;
  _this.rightmark.input.useHandCursor = true;
  _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);

   _this.group1.add(_this.rightmark);

  if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
        }
},

question3:function(){
  _this.Question = 3;
  _this.no1++;
  console.log("3");
  _this.loadAssets();
   _this.getVoice();
   _this.group1 = _this.add.group();

  _this.text = this.add.text(115, 45, "7 8 9 6");
  _this.text.font = "myfont";
  _this.text.fill = "#000000";
  _this.text.fontWeight = 'bold';
  _this.text.anchor.set(0.5);
  _this.text.fontSize = 45;
  _this.qBox.addChild(_this.text);

  _this.rightmark = _this.add.sprite(825,255,'pv1_4rightmark');
  _this.rightmark.scale.setTo(1.5,1.5);
  _this.rightmark.inputEnabled = true;
  _this.rightmark.input.useHandCursor = true;
  _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);

   _this.group1.add(_this.rightmark);
  if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
        }

},
question4:function(){
  _this.Question = 4;
  _this.no1++;
  console.log("4");
  _this.loadAssets();
   _this.getVoice();
   _this.group1 = _this.add.group();

  _this.text = this.add.text(115, 45, "3 6 1 8");
  _this.text.font = "myfont";
  _this.text.fill = "#000000";
  _this.text.fontWeight = 'bold';
  _this.text.anchor.set(0.5);
  _this.text.fontSize = 45;
  _this.qBox.addChild(_this.text);

  _this.rightmark = _this.add.sprite(825,255,'pv1_4rightmark');
  _this.rightmark.scale.setTo(1.5,1.5);
  _this.rightmark.inputEnabled = true;
  _this.rightmark.input.useHandCursor = true;
  _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);

  _this.group1.add(_this.rightmark);
  if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
        }
},
question5:function(){
  _this.Question = 5;
  _this.no1++;
  console.log("5");
  _this.loadAssets();
   _this.getVoice();
   _this.group1 = _this.add.group();

  _this.text = this.add.text(115, 45, "2 7 9 5");
  _this.text.font = "myfont";
  _this.text.fill = "#000000";
  _this.text.fontWeight = 'bold';
  _this.text.anchor.set(0.5);
  _this.text.fontSize = 45;
  _this.qBox.addChild(_this.text);

  _this.rightmark = _this.add.sprite(825,255,'pv1_4rightmark');
  _this.rightmark.scale.setTo(1.5,1.5);
  _this.rightmark.inputEnabled = true;
  _this.rightmark.input.useHandCursor = true;
  _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);

   _this.group1.add(_this.rightmark);

  if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.group1.x=1000;
            _this.tween1=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);    
        }
},


question6:function(){
    _this.Question = 6;
    _this.no1++;
    console.log("6");
     _this.getVoice();

    _this.lockergroup=_this.add.group();
    _this.lockgroup = _this.add.group();
    _this.boxgroup = _this.add.group();
    _this.numbergroup = _this.add.group();

    _this.locker = _this.add.sprite(70, 70, 'pv1_4locker');
     _this.door = _this.add.sprite(55, 85, 'pv1_4door');
    _this.lock1 = _this.add.sprite(587.5, 312, 'pv1_4lock1');
   _this.lock1.anchor.setTo(0.4915, 0.486);
  _this.lock2 = _this.add.sprite(587.5, 311, 'pv1_4lock2');
    _this.lock2.anchor.setTo(0.5,0.5);
    //_this.numbers = _this.add.sprite(202,93,'numbers');
    _this.qBox = _this.add.sprite(468,140,'pv1_4questionBox');
    _this.aBox = _this.add.sprite(500,380,'pv1_4answerBox');
    _this.sBox2 = _this.add.sprite(180,140,'pv1_4sBox2');
    _this.sBox3 = _this.add.sprite(225,200,'pv1_4sBox3');
    _this.sBox4 = _this.add.sprite(270,260,'pv1_4sBox4');
    _this.sBox5 = _this.add.sprite(317,320,'pv1_4sBox5');

    _this.num41 = _this.add.sprite(198,158,'pv1_4numbers');
    _this.num41.frame = 5;
    _this.num42 = _this.add.sprite(244,158,'pv1_4numbers');
    _this.num42.frame = 0;
    _this.num43 = _this.add.sprite(290,158,'pv1_4numbers');
    _this.num43.frame = 0;
    _this.num44 = _this.add.sprite(336,158,'pv1_4numbers');
    _this.num44.frame = 0;
    _this.num31 = _this.add.sprite(244,218,'pv1_4numbers');
    _this.num31.frame = 4;
    _this.num32 = _this.add.sprite(290,218,'pv1_4numbers');
    _this.num32.frame = 0;
    _this.num33 = _this.add.sprite(336,218,'pv1_4numbers');
    _this.num33.frame = 0;
    _this.num21 = _this.add.sprite(290,278,'pv1_4numbers');
    _this.num21.frame = 7;
    _this.num22 = _this.add.sprite(336,278,'pv1_4numbers');
    _this.num22.frame = 0;
    _this.num11 = _this.add.sprite(336,338,'pv1_4numbers');
    _this.num11.frame = 8;



    _this.text = this.add.text(115, 45, "5 4 7 8");
    _this.text.font = "myfont";
    _this.text.fill = "#000000";
    _this.text.fontWeight = 'bold';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 45;
    _this.qBox.addChild(_this.text);

    _this.addNumberPad();

    _this.lockergroup.add(_this.locker);
    _this.lockgroup.add(_this.lock1);
    _this.lockgroup.add(_this.lock2);
    _this.lockergroup.add(_this.door);
    _this.lockergroup.add(_this.qBox);
    _this.lockergroup.add(_this.aBox);
    _this.boxgroup.add(_this.sBox2);
    _this.boxgroup.add(_this.sBox3);
    _this.boxgroup.add(_this.sBox4);
    _this.boxgroup.add(_this.sBox5);
    _this.numbergroup.add(_this.num41);
    _this.numbergroup.add(_this.num42);
    _this.numbergroup.add(_this.num43);
    _this.numbergroup.add(_this.num44);
    _this.numbergroup.add(_this.num31);
    _this.numbergroup.add(_this.num32);
    _this.numbergroup.add(_this.num33);
    _this.numbergroup.add(_this.num21);
    _this.numbergroup.add(_this.num22);
    _this.numbergroup.add(_this.num11);

    if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
        }


    // _this.rightmark = _this.add.sprite(825,255,'rightmark');
    // _this.rightmark.scale.setTo(1.5,1.5);
    // _this.rightmark.inputEnabled = true;
    // _this.rightmark.input.useHandCursor = true;
    // _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);
},
question7:function(){
    _this.Question = 7;
    _this.no1++;
    console.log("7");
     _this.getVoice();

    _this.lockergroup=_this.add.group();
    _this.lockgroup = _this.add.group();
    _this.boxgroup = _this.add.group();
    _this.numbergroup = _this.add.group();

    _this.locker = _this.add.sprite(70, 70, 'pv1_4locker');
     _this.door = _this.add.sprite(55, 85, 'pv1_4door');
    _this.lock1 = _this.add.sprite(587.5, 312, 'pv1_4lock1');
   _this.lock1.anchor.setTo(0.4915, 0.486);
  _this.lock2 = _this.add.sprite(587.5, 311, 'pv1_4lock2');
    _this.lock2.anchor.setTo(0.5,0.5);
    //_this.numbers = _this.add.sprite(202,93,'numbers');
    _this.qBox = _this.add.sprite(468,140,'pv1_4questionBox');
    _this.aBox = _this.add.sprite(500,380,'pv1_4answerBox');
    _this.sBox2 = _this.add.sprite(180,140,'pv1_4sBox2');
    _this.sBox3 = _this.add.sprite(225,200,'pv1_4sBox3');
    _this.sBox4 = _this.add.sprite(270,260,'pv1_4sBox4');
    _this.sBox5 = _this.add.sprite(317,320,'pv1_4sBox5');

    _this.num41 = _this.add.sprite(198,158,'pv1_4numbers');
    _this.num41.frame = 6;
    _this.num42 = _this.add.sprite(244,158,'pv1_4numbers');
    _this.num42.frame = 0;
    _this.num43 = _this.add.sprite(290,158,'pv1_4numbers');
    _this.num43.frame = 0;
    _this.num44 = _this.add.sprite(336,158,'pv1_4numbers');
    _this.num44.frame = 0;
    _this.num31 = _this.add.sprite(244,218,'pv1_4numbers');
    _this.num31.frame = 2;
    _this.num32 = _this.add.sprite(290,218,'pv1_4numbers');
    _this.num32.frame = 0;
    _this.num33 = _this.add.sprite(336,218,'pv1_4numbers');
    _this.num33.frame = 0;
    _this.num21 = _this.add.sprite(290,278,'pv1_4numbers');
    _this.num21.frame = 4;
    _this.num22 = _this.add.sprite(336,278,'pv1_4numbers');
    _this.num22.frame = 0;
    _this.num11 = _this.add.sprite(336,338,'pv1_4numbers');
    _this.num11.frame = 8;


    _this.text = this.add.text(115, 45, "6 2 4 8");
    _this.text.font = "myfont";
    _this.text.fill = "#000000";
    _this.text.fontWeight = 'bold';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 45;
    _this.qBox.addChild(_this.text);

    _this.addNumberPad();

     _this.lockergroup.add(_this.locker);
    _this.lockgroup.add(_this.lock1);
    _this.lockgroup.add(_this.lock2);
    _this.lockergroup.add(_this.door);
    _this.lockergroup.add(_this.qBox);
    _this.lockergroup.add(_this.aBox);
    _this.boxgroup.add(_this.sBox2);
    _this.boxgroup.add(_this.sBox3);
    _this.boxgroup.add(_this.sBox4);
    _this.boxgroup.add(_this.sBox5);
    _this.numbergroup.add(_this.num41);
    _this.numbergroup.add(_this.num42);
    _this.numbergroup.add(_this.num43);
    _this.numbergroup.add(_this.num44);
    _this.numbergroup.add(_this.num31);
    _this.numbergroup.add(_this.num32);
    _this.numbergroup.add(_this.num33);
    _this.numbergroup.add(_this.num21);
    _this.numbergroup.add(_this.num22);
    _this.numbergroup.add(_this.num11);

    if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
                
        }


    // _this.rightmark = _this.add.sprite(825,255,'rightmark');
    // _this.rightmark.scale.setTo(1.5,1.5);
    // _this.rightmark.inputEnabled = true;
    // _this.rightmark.input.useHandCursor = true;
    // _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);
},
question8:function(){
    _this.Question = 8;
    _this.no1++;
    console.log("8");
     _this.getVoice();

    _this.lockergroup=_this.add.group();
    _this.lockgroup = _this.add.group();
    _this.boxgroup = _this.add.group();
    _this.numbergroup = _this.add.group();

    _this.locker = _this.add.sprite(70, 70, 'pv1_4locker');
    _this.door = _this.add.sprite(55, 85, 'pv1_4door');
    _this.lock1 = _this.add.sprite(587.5, 312, 'pv1_4lock1');
   _this.lock1.anchor.setTo(0.4915, 0.486);
  _this.lock2 = _this.add.sprite(587.5, 311, 'pv1_4lock2');
    _this.lock2.anchor.setTo(0.5,0.5);
    //_this.numbers = _this.add.sprite(202,93,'numbers');
    _this.qBox = _this.add.sprite(468,140,'pv1_4questionBox');
    _this.aBox = _this.add.sprite(500,380,'pv1_4answerBox');
    _this.sBox2 = _this.add.sprite(180,140,'pv1_4sBox2');
    _this.sBox3 = _this.add.sprite(225,200,'pv1_4sBox3');
    _this.sBox4 = _this.add.sprite(270,260,'pv1_4sBox4');
    _this.sBox5 = _this.add.sprite(317,320,'pv1_4sBox5');

    _this.num41 = _this.add.sprite(198,158,'pv1_4numbers');
    _this.num41.frame = 3;
    _this.num42 = _this.add.sprite(244,158,'pv1_4numbers');
    _this.num42.frame = 0;
    _this.num43 = _this.add.sprite(290,158,'pv1_4numbers');
    _this.num43.frame = 0;
    _this.num44 = _this.add.sprite(336,158,'pv1_4numbers');
    _this.num44.frame = 0;
    _this.num31 = _this.add.sprite(244,218,'pv1_4numbers');
    _this.num31.frame = 6;
    _this.num32 = _this.add.sprite(290,218,'pv1_4numbers');
    _this.num32.frame = 0;
    _this.num33 = _this.add.sprite(336,218,'pv1_4numbers');
    _this.num33.frame = 0;
    _this.num21 = _this.add.sprite(290,278,'pv1_4numbers');
    _this.num21.frame = 2;
    _this.num22 = _this.add.sprite(336,278,'pv1_4numbers');
    _this.num22.frame = 0;
    _this.num11 = _this.add.sprite(336,338,'pv1_4numbers');
    _this.num11.frame = 9;


    _this.text = this.add.text(115, 45, "3 6 2 9");
    _this.text.font = "myfont";
    _this.text.fill = "#000000";
    _this.text.fontWeight = 'bold';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 45;
    _this.qBox.addChild(_this.text);

    _this.addNumberPad();

     _this.lockergroup.add(_this.locker);
    _this.lockgroup.add(_this.lock1);
    _this.lockgroup.add(_this.lock2);
    _this.lockergroup.add(_this.door);
    _this.lockergroup.add(_this.qBox);
    _this.lockergroup.add(_this.aBox);
    _this.boxgroup.add(_this.sBox2);
    _this.boxgroup.add(_this.sBox3);
    _this.boxgroup.add(_this.sBox4);
    _this.boxgroup.add(_this.sBox5);
    _this.numbergroup.add(_this.num41);
    _this.numbergroup.add(_this.num42);
    _this.numbergroup.add(_this.num43);
    _this.numbergroup.add(_this.num44);
    _this.numbergroup.add(_this.num31);
    _this.numbergroup.add(_this.num32);
    _this.numbergroup.add(_this.num33);
    _this.numbergroup.add(_this.num21);
    _this.numbergroup.add(_this.num22);
    _this.numbergroup.add(_this.num11);

    if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
          
        }


    // _this.rightmark = _this.add.sprite(825,255,'rightmark');
    // _this.rightmark.scale.setTo(1.5,1.5);
    // _this.rightmark.inputEnabled = true;
    // _this.rightmark.input.useHandCursor = true;
    // _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);
},
question9:function(){
    _this.Question = 9;
    _this.no1++;
    console.log("9");
     _this.getVoice();

    _this.lockergroup=_this.add.group();
    _this.lockgroup = _this.add.group();
    _this.boxgroup = _this.add.group();
    _this.numbergroup = _this.add.group();

    _this.locker = _this.add.sprite(70, 70, 'pv1_4locker');
    _this.door = _this.add.sprite(55, 85, 'pv1_4door');
    _this.lock1 = _this.add.sprite(587.5, 312, 'pv1_4lock1');
   _this.lock1.anchor.setTo(0.4915, 0.486);
   _this.lock2 = _this.add.sprite(587.5, 311, 'pv1_4lock2');
    _this.lock2.anchor.setTo(0.5,0.5);
    //_this.numbers = _this.add.sprite(202,93,'numbers');
    _this.qBox = _this.add.sprite(468,140,'pv1_4questionBox');
    _this.aBox = _this.add.sprite(500,380,'pv1_4answerBox');
    _this.sBox2 = _this.add.sprite(180,140,'pv1_4sBox2');
    _this.sBox3 = _this.add.sprite(225,200,'pv1_4sBox3');
    _this.sBox4 = _this.add.sprite(270,260,'pv1_4sBox4');
    _this.sBox5 = _this.add.sprite(317,320,'pv1_4sBox5');

    _this.num41 = _this.add.sprite(198,158,'pv1_4numbers');
    _this.num41.frame = 4;
    _this.num42 = _this.add.sprite(244,158,'pv1_4numbers');
    _this.num42.frame = 0;
    _this.num43 = _this.add.sprite(290,158,'pv1_4numbers');
    _this.num43.frame = 0;
    _this.num44 = _this.add.sprite(336,158,'pv1_4numbers');
    _this.num44.frame = 0;
    _this.num31 = _this.add.sprite(244,218,'pv1_4numbers');
    _this.num31.frame = 8;
    _this.num32 = _this.add.sprite(290,218,'pv1_4numbers');
    _this.num32.frame = 0;
    _this.num33 = _this.add.sprite(336,218,'pv1_4numbers');
    _this.num33.frame = 0;
    _this.num21 = _this.add.sprite(290,278,'pv1_4numbers');
    _this.num21.frame = 2;
    _this.num22 = _this.add.sprite(336,278,'pv1_4numbers');
    _this.num22.frame = 0;
    _this.num11 = _this.add.sprite(336,338,'pv1_4numbers');
    _this.num11.frame = 5;

    _this.text = this.add.text(115, 45, "4 8 2 5");
    _this.text.font = "myfont";
    _this.text.fill = "#000000";
    _this.text.fontWeight = 'bold';
    _this.text.anchor.set(0.5);
    _this.text.fontSize = 45;
    _this.qBox.addChild(_this.text);

    _this.addNumberPad();

     _this.lockergroup.add(_this.locker);
    _this.lockgroup.add(_this.lock1);
    _this.lockgroup.add(_this.lock2);
    _this.lockergroup.add(_this.door);
    _this.lockergroup.add(_this.qBox);
    _this.lockergroup.add(_this.aBox);
    _this.boxgroup.add(_this.sBox2);
    _this.boxgroup.add(_this.sBox3);
    _this.boxgroup.add(_this.sBox4);
    _this.boxgroup.add(_this.sBox5);
    _this.numbergroup.add(_this.num41);
    _this.numbergroup.add(_this.num42);
    _this.numbergroup.add(_this.num43);
    _this.numbergroup.add(_this.num44);
    _this.numbergroup.add(_this.num31);
    _this.numbergroup.add(_this.num32);
    _this.numbergroup.add(_this.num33);
    _this.numbergroup.add(_this.num21);
    _this.numbergroup.add(_this.num22);
    _this.numbergroup.add(_this.num11);

    if(_this.wrongAnswer == false)
        {
            _this.lockergroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.lockgroup.x=1000;
            _this.tween1=_this.add.tween(_this.lockgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.boxgroup.x=1000;
            _this.tween1=_this.add.tween(_this.boxgroup).to( { x: 0 }, 1500, 'Linear', true,0);    
             _this.numbergroup.x=1000;
            _this.tween1=_this.add.tween(_this.numbergroup).to( { x: 0 }, 1500, 'Linear', true,0);    
                 
        }

    // _this.rightmark = _this.add.sprite(825,255,'rightmark');
    // _this.rightmark.scale.setTo(1.5,1.5);
    // _this.rightmark.inputEnabled = true;
    // _this.rightmark.input.useHandCursor = true;
    // _this.rightmark.events.onInputDown.add(_this.toCheckAnswer,_this);
},

addNumberPad:function(){
        //_this.snapSound.play();
        _this.numGroup = _this.add.group();
       _this.footer = _this.add.sprite(0,475,'pv1_4footer');
        _this.numGroup.add(_this.footer);
        var x = 100;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'pv1_4CalNum');
            _this.numbg.frame=i;
            _this.grpnum.push(_this.numbg);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name = i;
            _this.numbg.inputEnabled = true;
         //   numbg.input.useHandCursor = false;
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            x+=70;
        }


        _this.counterText = _this.add.text(80,42, _this.selectedAns="");
        _this.counterText.anchor.setTo(0.5);
        _this.counterText.align = 'center';
        _this.counterText.font = 'myfont';
        _this.counterText.fontSize = 45;
        _this.counterText.fontWeight = 'normal';
        _this.counterText.fill = '#65B4C3';
        _this.counterText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.aBox.addChild(_this.counterText);



     //   txtbox = _this.add.sprite(x+50,508,'box');
     //   txtbox.anchor.setTo(0.5);
      //  txtbox.name = "txtbox";

        _this.wrongbtn = _this.numGroup.create(x+10,510,'pv1_4EraseButton');
        _this.wrongbtn.anchor.setTo(0.5);
       //_this.wrongbtn.scale.setTo(0.5,0.5);
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
           _this.wrongbtn.frame=1;
            _this.counterText.setText("");
            _this.selectedAns="";

      _this.time.events.add(1000,function(){
           _this.wrongbtn.frame=0;
      },this);
      },this);

        _this.rightbtn =_this.numGroup.create(x+70,510,'pv1_4RightButton');
        _this.rightbtn.anchor.setTo(0.5);

        //_this.rightbtn.scale.setTo(0.5,0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
            console.log(_this.selectedAns);
            console.log(_this.rightAns);
            _this.rightbtn.frame=1;
            _this.time.events.add(1000,function(){
                  _this.rightbtn.frame = 0;
            },this);
             _this.checkAnswer();
        },this);

        _this.numGroup.y  = 100;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
          //  target.events.onInputDown.removeAll();


       // _this.numGroup.add(_this.box);
    },

numClicked:function(target){
        _this.clickSound.play();

            console.log("option1 "+_this.selectedAns);
            if(_this.selectedAns.length<1)
            {
                _this.aBox.frame = 1;
                _this.selectedAns+= target.name;
                console.log("third one");
                _this.counterText.setText(_this.selectedAns);
                //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

            }
    },

checkAnswer:function(){
    if(_this.Question == 7)
    {
       if(_this.selectedAns==_this.num31.frame||_this.selectedAns==""+_this.num31.frame)
       {
         _this.correctAns();
       }
       else
       {
        _this.noofAttempts++;
         console.log("wrong7");
        _this.lock1.frame =1;
        _this.time.events.add(500, function(){
            _this.lock1.frame =0;
        },_this);
         _this.selectedAns = "";
         _this.counterText.setText("");
         _this.aBox.frame = 0;
         _this.shake.shake(10, _this.boxgroup);
        //   _this.wmusic = __this.add.audio('waudio');
 		      _this.waudio.play();
       }

    }
    if(_this.Question == 6)
    {
       if(_this.selectedAns==_this.num21.frame||_this.selectedAns==""+_this.num21.frame)
       {
         _this.correctAns();
       }
       else
       {
        _this.noofAttempts++;
         console.log("wrong6");
          _this.lock1.frame =1;
        _this.time.events.add(500, function(){
            _this.lock1.frame =0;
        },_this);
         _this.selectedAns = "";
         _this.counterText.setText("");
          _this.aBox.frame = 0;
         _this.shake.shake(10, _this.boxgroup);
        //   _this.wmusic = __this.add.audio('waudio');
          _this.waudio.play();
       }

    }
    if(_this.Question == 8)
    {
       if(_this.selectedAns==_this.num11.frame||_this.selectedAns==""+_this.num11.frame)
       {
         _this.correctAns();
       }
       else
       {
        _this.noofAttempts++;
         console.log("wrong8");
          _this.lock1.frame =1;
        _this.time.events.add(500, function(){
            _this.lock1.frame =0;
        },_this);
         _this.selectedAns = "";
         _this.counterText.setText("");
          _this.aBox.frame = 0;
         _this.shake.shake(10, _this.boxgroup);
        //   _this.wmusic = __this.add.audio('waudio');
          _this.waudio.play();
       }

    }
    if(_this.Question == 9)
    {
       if(_this.selectedAns==_this.num41.frame||_this.selectedAns==""+_this.num41.frame)
       {
         _this.correctAns();
       }
       else
       {
        _this.noofAttempts++;
         console.log("wrong9");
          _this.lock1.frame =1;
        _this.time.events.add(500, function(){
            _this.lock1.frame =0;
        },_this);
         _this.selectedAns = "";
         _this.counterText.setText("");
          _this.aBox.frame = 0;
         _this.shake.shake(10, _this.boxgroup);
        //   _this.wmusic = __this.add.audio('waudio');
          _this.waudio.play();
       }

    }
},

toCheckAnswer:function (target){
    _this.clickSound.play();
    //_this.noofAttempts++;

    //   target.events.onInputDown.removeAll();

    if(_this.Question == 1)
    {
        if(( _this.numb41.y > -105  && _this.numb41.y < -85 || _this.numb41.y < -516  && _this.numb41.y > -536) &&
           ( _this.numb42.y > -278  && _this.numb42.y < -257 || _this.numb42.y < -688  && _this.numb42.y > -708 ||  _this.numb42.y > 148  && _this.numb42.y < 154) &&
           ( _this.numb43.y > -278  && _this.numb43.y < -257 || _this.numb43.y < -688  && _this.numb43.y > -708 || _this.numb43.y > 148   && _this.numb43.y < 151) &&
           ( _this.numb44.y > -278  && _this.numb44.y < -257 || _this.numb44.y < -688  && _this.numb44.y > -708 || _this.numb44.y > 148  && _this.numb44.y < 151) &&
           ( _this.numb31.y > -4 && _this.numb31.y < 18 || _this.numb31.y < -412  && _this.numb31.y > -434) &&
           ( _this.numb32.y > -216  && _this.numb32.y < -196 || _this.numb32.y < -626  && _this.numb32.y > -630 ||  _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb33.y > -216  && _this.numb33.y < -196 || _this.numb33.y < -626  && _this.numb33.y > -630 || _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb21.y > -75  && _this.numb21.y < -52 || _this.numb21.y < -481  && _this.numb21.y > -503) &&
           ( _this.numb22.y > -156  && _this.numb22.y < -140 || _this.numb22.y < -520  && _this.numb22.y > -534 || _this.numb33.y > 272  && _this.numb33.y < 278) &&
           ( _this.numb11.y > 160  && _this.numb11.y < 182 || _this.numb11.y < -251  && _this.numb11.y > -269))
        {
            _this.correctAns();
        }
        else
        {
            _this.wrongAns();
        }
    }if(_this.Question == 2)
    {
        if(( _this.numb41.y > -236  && _this.numb41.y < -213 || _this.numb41.y < -648  && _this.numb41.y > -664) &&
           ( _this.numb42.y > -278  && _this.numb42.y < -257 || _this.numb42.y < -688  && _this.numb42.y > -708 ||  _this.numb42.y > 148  && _this.numb42.y < 151) &&
           ( _this.numb43.y > -278  && _this.numb43.y < -257 || _this.numb43.y < -688  && _this.numb43.y > -708 || _this.numb43.y > 148   && _this.numb43.y < 151) &&
           ( _this.numb44.y > -278  && _this.numb44.y < -257 || _this.numb44.y < -688  && _this.numb44.y > -708 || _this.numb44.y > 148  && _this.numb44.y < 151) &&
           ( _this.numb31.y > -89  && _this.numb31.y < -66 || _this.numb31.y < -504  && _this.numb31.y > -515) &&
           ( _this.numb32.y > -216  && _this.numb32.y < -196 || _this.numb32.y < -626  && _this.numb32.y > -630 ||  _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb33.y > -216  && _this.numb33.y < -196 || _this.numb33.y < -626  && _this.numb33.y > -630 || _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb21.y > 55  && _this.numb21.y < 79 || _this.numb21.y < -352  && _this.numb21.y > -374) &&
           ( _this.numb22.y > -156  && _this.numb22.y < -140 || _this.numb22.y < -520  && _this.numb22.y > -534 || _this.numb33.y > 272  && _this.numb33.y < 278) &&
           ( _this.numb11.y > 201  && _this.numb11.y < 225 || _this.numb11.y < -207  && _this.numb11.y > -226))
        {
            _this.correctAns();
        }
        else
        {
            _this.wrongAns(target);
        }
    }
    if(_this.Question == 3)
    {
        if(( _this.numb41.y > 25  && _this.numb41.y < 43 || _this.numb41.y < -389  && _this.numb41.y > -405) &&
           ( _this.numb42.y > -278  && _this.numb42.y < -257 || _this.numb42.y < -688  && _this.numb42.y > -708 ||  _this.numb42.y > 148  && _this.numb42.y < 151) &&
           ( _this.numb43.y > -278  && _this.numb43.y < -257 || _this.numb43.y < -688  && _this.numb43.y > -708 || _this.numb43.y > 148   && _this.numb43.y < 151) &&
           ( _this.numb44.y > -278  && _this.numb44.y < -257 || _this.numb44.y < -688  && _this.numb44.y > -708 || _this.numb44.y > 148  && _this.numb44.y < 151) &&
           ( _this.numb31.y > 128  && _this.numb31.y < 145 || _this.numb31.y < -285  && _this.numb31.y > -302) &&
           ( _this.numb32.y > -216  && _this.numb32.y < -196 || _this.numb32.y < -626  && _this.numb32.y > -630 ||  _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb33.y > -216  && _this.numb33.y < -196 || _this.numb33.y < -626  && _this.numb33.y > -630 || _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb21.y > 229  && _this.numb21.y < 248 || _this.numb21.y < -181  && _this.numb21.y > -199) &&
           ( _this.numb22.y > -156  && _this.numb22.y < -140 || _this.numb22.y < -520  && _this.numb22.y > -534 || _this.numb33.y > 274  && _this.numb33.y < 276) &&
           ( _this.numb11.y > 161  && _this.numb11.y < 181 || _this.numb11.y < -250  && _this.numb11.y > -269))
        {
            _this.correctAns();
        }
        else
        {
            _this.wrongAns(target);
        }
    }
    if(_this.Question == 4)
    {
        if(( _this.numb41.y > -148  && _this.numb41.y < -128 || _this.numb41.y < -560  && _this.numb41.y > -577) &&
           ( _this.numb42.y > -278  && _this.numb42.y < -257 || _this.numb42.y < -688  && _this.numb42.y > -708 ||  _this.numb42.y > 148  && _this.numb42.y < 151) &&
           ( _this.numb43.y > -278  && _this.numb43.y < -257 || _this.numb43.y < -688  && _this.numb43.y > -708 || _this.numb43.y > 148   && _this.numb43.y < 151) &&
           ( _this.numb44.y > -278  && _this.numb44.y < -257 || _this.numb44.y < -688  && _this.numb44.y > -708 || _this.numb44.y > 148  && _this.numb44.y < 151) &&
           ( _this.numb31.y > 42  && _this.numb31.y < 62 || _this.numb31.y < -367  && _this.numb31.y > -389) &&
           ( _this.numb32.y > -216  && _this.numb32.y < -196 || _this.numb32.y < -626  && _this.numb32.y > -630 ||  _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb33.y > -216  && _this.numb33.y < -196 || _this.numb33.y < -626  && _this.numb33.y > -630 || _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb21.y > -113  && _this.numb21.y < -97 || _this.numb21.y < -525  && _this.numb21.y > -545) &&
           ( _this.numb22.y > -156  && _this.numb22.y < -140 || _this.numb22.y < -520  && _this.numb22.y > -534 || _this.numb33.y > 272  && _this.numb33.y < 276) &&
           ( _this.numb11.y > 248  && _this.numb11.y < 268 || _this.numb11.y < -164  && _this.numb11.y > -183))
        {
            _this.correctAns();
        }
        else
        {
            _this.wrongAns(target);
        }
    }
    if(_this.Question == 5)
    {
        if(( _this.numb41.y > -193  && _this.numb41.y < -171 || _this.numb41.y < -603  && _this.numb41.y > -623) &&
           ( _this.numb42.y > -278  && _this.numb42.y < -257 || _this.numb42.y < -688  && _this.numb42.y > -708 ||  _this.numb42.y > 148  && _this.numb42.y < 151) &&
           ( _this.numb43.y > -278  && _this.numb43.y < -257 || _this.numb43.y < -688  && _this.numb43.y > -708 || _this.numb43.y > 148   && _this.numb43.y < 151) &&
           ( _this.numb44.y > -278  && _this.numb44.y < -257 || _this.numb44.y < -688  && _this.numb44.y > -708 || _this.numb44.y > 148  && _this.numb44.y < 151) &&
           ( _this.numb31.y > 82  && _this.numb31.y < 104 || _this.numb31.y < -327  && _this.numb31.y > -347) &&
           ( _this.numb32.y > -216  && _this.numb32.y < -196 || _this.numb32.y < -626  && _this.numb32.y > -630 ||  _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb33.y > -216  && _this.numb33.y < -196 || _this.numb33.y < -626  && _this.numb33.y > -630 || _this.numb32.y > 198  && _this.numb32.y < 203) &&
           ( _this.numb21.y > 230  && _this.numb21.y < 251 || _this.numb21.y < -180  && _this.numb21.y > -202) &&
           ( _this.numb22.y > -156  && _this.numb22.y < -140 || _this.numb22.y < -520  && _this.numb22.y > -534 || _this.numb33.y > 272  && _this.numb33.y < 276) &&
           ( _this.numb11.y > 117  && _this.numb11.y < 137 || _this.numb11.y < -293  && _this.numb11.y > -313))
        {
            _this.correctAns();
        }
        else
        {
            _this.wrongAns(target);
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
    _this.boxgroup.setAll("frame", 1);
     _this.add.tween(_this.lock2).to( { angle: 70 }, 1000, "Linear", true);
     _this.time.events.add(400, function () {
         _this.lockSound1.volume = 2;
         _this.lockSound1.play();
     });
    _this.time.events.add(1500, function(){
        _this.add.tween(_this.lock1).to({ angle: -50 }, 800, "Linear", true);
        _this.time.events.add(400, function () {
            _this.lockSound2.volume = 2;
            _this.lockSound2.play();
        });
     });

    _this.time.events.add(1500, function(){
         if(_this.numGroup)
         {_this.numGroup.destroy();}
    });

    _this.time.events.add(2900, function(){
      _this.lock1.destroy();
      _this.lock2.destroy();
      _this.qBox.destroy();
      if(_this.aBox)
      {  _this.aBox.destroy();}
      if(_this.numbergroup)
      {_this.numbergroup.destroy();}
      _this.boxgroup.destroy();
      //_this.door.frame = 1;
       _this.animdoor = _this.door.animations.add('door');
         _this.animdoor.play();
     });

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

     _this.time.events.add(2000, function(){
         _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
         _this.starAnim.smoothed = false;
         _this.anim4 = _this.starAnim.animations.add('star');
         _this.anim4.play();
         _this.count1++;

         _this.celebration = true;
         _this.celebr.play();
     });
     if(_this.Question == 1 || _this.Question == 2 || _this.Question == 3 || _this.Question == 4 || _this.Question == 5)
     {
     _this.time.events.add(4000, _this.removeCelebration, _this);
     }
     else
     {
       _this.time.events.add(4000, _this.removeCelebration1, _this);
     }

     _this.sceneCount++;
     _this.questionid = 1;
     telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
     _this.noofAttempts = 0;
     _this.AnsTimerCount = 0;
},

wrongAns:function(target){
    // _this.stopvoice();
    _this.noofAttempts++;
    _this.lock1.frame = 1;
    _this.shake.shake(10,_this.boxgroup);
  // _this.timer1.stop();
    _this.time.events.add(1500, function(){
            _this.lock1.frame =0;
    },_this);
    _this.wrongAnswer = true;
    console.log("Wrongggg")

    _this.wmusic = _this.add.audio('waudio');
    _this.wmusic.play();



    _this.numb41.hitArea=null;
    _this.hitAreaGraphics41 = null;
    _this.numb42.hitArea=null;
    _this.hitAreaGraphics42 = null;
    _this.numb43.hitArea=null;
    _this.hitAreaGraphics43 = null;
    _this.numb44.hitArea=null;
    _this.hitAreaGraphics44 = null;
    _this.numb31.hitArea=null;
    _this.hitAreaGraphics31 = null;
    _this.numb32.hitArea=null;
    _this.hitAreaGraphics32 = null;
    _this.numb33.hitArea=null;
    _this.hitAreaGraphics33 = null;
    _this.numb21.hitArea=null;
    _this.hitAreaGraphics21 = null;
    _this.numb22.hitArea=null;
    _this.hitAreaGraphics22 = null;
    _this.numb11.hitArea=null;
    _this.hitAreaGraphics11 = null;

    _this.temp41 = null;
    _this.temp42 = null;
    _this.temp43 = null;
    _this.temp44 = null;
    _this.temp31 = null;
    _this.temp32 = null;
    _this.temp33 = null;
    _this.temp21 = null;
    _this.temp22 = null;
    _this.temp11 = null; 

    _this.time.events.add(990, function(){
      
     },_this);


    _this.time.events.add(1000, function(){
         console.log("destroying");
       _this.lockergroup.destroy();
       _this.lockgroup.destroy();
       _this.group1.destroy();
       _this.numbergroup.destroy();
       _this.graphicgroup.destroy();
       _this.boxgroup.destroy();
        _this.getQuestion();  
    },_this);
},

removeCelebration:function(){
    console.log("removeCeleb");
    _this.celebration = false;
    _this.correct=0;
    _this.count=0;
    _this.qno++;
     _this.wrongAnswer = false;

      _this.numb41.hitArea=null;
       _this.hitAreaGraphics41 = null;
       _this.numb42.hitArea=null;
       _this.hitAreaGraphics42 = null;
       _this.numb43.hitArea=null;
       _this.hitAreaGraphics43 = null;
       _this.numb44.hitArea=null;
       _this.hitAreaGraphics44 = null;
       _this.numb31.hitArea=null;
       _this.hitAreaGraphics31 = null;
       _this.numb32.hitArea=null;
       _this.hitAreaGraphics32 = null;
       _this.numb33.hitArea=null;
       _this.hitAreaGraphics33 = null;
       _this.numb21.hitArea=null;
       _this.hitAreaGraphics21 = null;
       _this.numb22.hitArea=null;
       _this.hitAreaGraphics22 = null;
       _this.numb11.hitArea=null;
       _this.hitAreaGraphics11 = null;

       _this.temp41 = null;
       _this.temp42 = null;
       _this.temp43 = null;
       _this.temp44 = null;
       _this.temp31 = null;
       _this.temp32 = null;
       _this.temp33 = null;
       _this.temp21 = null;
       _this.temp22 = null;
       _this.temp11 = null; 

    if(_this.qno<6)
    {
        console.log("destroying");
       _this.lockergroup.destroy();
       _this.lockgroup.destroy();
       _this.group1.destroy();
       _this.numbergroup.destroy();
       _this.graphicgroup.destroy();

        _this.getQuestion();
    }
    else
    {
        // _this.stopvoice();
        _this.state.start('pv1_4Score');
    }
},
removeCelebration1:function(){
    console.log("removeCeleb1");
    _this.celebration = false;
    _this.correct=0;
    _this.count=0;
    _this.qno++;

    if(_this.qno<6)
    {
       _this.lockergroup.destroy();
        _this.lockgroup.destroy();
       _this.numbergroup.destroy();
       
  //       _this.hitAreaGraphics41.destroy();
       _this.getQuestion();
    }
    else
    {
        // _this.stopvoice();
        _this.state.start('pv1_4Score');
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
         case 5:  if(window.languageSelected =="English")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/English/question.mp3");
             }
             else if(window.languageSelected =="Hindi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Hindi/question.mp3");
             }
             else if(window.languageSelected =="Kannada")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Kannada/question.mp3");
             }
			 else if(window.languageSelected =="Marathi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Marathi/question.mp3");
             }
			 else if(window.languageSelected =="Telugu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Telugu/question.mp3");
             }
			 else if(window.languageSelected =="Tamil")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Tamil/question.mp3");
             }
			 else if(window.languageSelected =="Urdu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Urdu/question.mp3");
             }
             else if(window.languageSelected =="Gujarati")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Gujarati/question.mp3");
             }
             else
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Odiya/question.mp3");
                 
             }
             break;
         case 6:  if(window.languageSelected =="English")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/English/question1.mp3");
             }
             else if(window.languageSelected =="Hindi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Hindi/question1.mp3");
             }
             else if(window.languageSelected =="Kannada")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Kannada/question1.mp3");
             }
			 else if(window.languageSelected =="Marathi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Marathi/question1.mp3");
             }
			 else if(window.languageSelected =="Telugu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Telugu/question1.mp3");
             }
			 else if(window.languageSelected =="Tamil")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Tamil/question1.mp3");
             }
			 else if(window.languageSelected =="Urdu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Urdu/question1.mp3");
             }
             else if(window.languageSelected =="Gujarati")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Gujarati/question1.mp3");
             }
             else
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Odiya/question1.mp3");
                 
             }
             break;
         case 7:  if(window.languageSelected =="English")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/English/question2.mp3");
             }
             else if(window.languageSelected =="Hindi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Hindi/question2.mp3");
             }
             else if(window.languageSelected =="Kannada")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Kannada/question2.mp3");
             }
			 else if(window.languageSelected =="Marathi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Marathi/question2.mp3");
             }
			 else if(window.languageSelected =="Telugu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Telugu/question2.mp3");
             }
			 else if(window.languageSelected =="Tamil")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Tamil/question2.mp3");
             }
			 else if(window.languageSelected =="Urdu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Urdu/question2.mp3");
             }
             else if(window.languageSelected =="Gujarati")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Gujarati/question2.mp3");
             }
             else
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Odiya/question2.mp3");
                 
             }
             break;
         case 8:  if(window.languageSelected =="English")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/English/question3.mp3");
             }
             else if(window.languageSelected =="Hindi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Hindi/question3.mp3");
             }
             else if(window.languageSelected =="Kannada")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Kannada/question3.mp3");
             }
             else if(window.languageSelected =="Gujarati")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Gujarati/question3.mp3");
             }
			 else if(window.languageSelected =="Marathi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Marathi/question3.mp3");
             }
			 else if(window.languageSelected =="Telugu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Telugu/question3.mp3");
             }
			 else if(window.languageSelected =="Tamil")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Tamil/question3.mp3");
             }
			 else if(window.languageSelected =="Urdu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Urdu/question3.mp3");
             }
             else
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Odiya/question3.mp3");
                 
             }
             break;
         case 9:
              if(window.languageSelected =="English")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/English/question4.mp3");
             }
             else if(window.languageSelected =="Hindi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Hindi/question4.mp3");
             }
             else if(window.languageSelected =="Kannada")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Kannada/question4.mp3");
             }
             else if(window.languageSelected =="Gujarati")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Gujarati/question4.mp3");
             }
			 else if(window.languageSelected =="Marathi")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Marathi/question4.mp3");
             }
			 else if(window.languageSelected =="Telugu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Telugu/question4.mp3");
             }
			 else if(window.languageSelected =="Tamil")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Tamil/question4.mp3");
             }
			 else if(window.languageSelected =="Urdu")
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Urdu/question4.mp3");
             }
             else
             {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/pv1.4/Odiya/question4.mp3");
                 
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

shutdown:function(){
    this.stopvoice();
},

};
