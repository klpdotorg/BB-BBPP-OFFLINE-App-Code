Game.nsd1_5level1=function(){};


Game.nsd1_5level1.prototype={
    init:function(game)
	{
		_this = this;
         
		telInitializer.gameIdInit("NSD1_5",gradeSelected);
	},

  preload:function(game){
  if(!window.grade5NSF6){

            window.grade5NSF6 = true;

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

            this.load.image('nsd1_5_bg',window.baseUrl+'assets/gradeAssets/nsd1.5/bg2.png');
    this.load.image('nsd1_5_line',window.baseUrl+'assets/gradeAssets/nsd1.5/1.png');

        this.load.image('nsd1_5_circle1',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol1.png');
        this.load.image('nsd1_5_circle2',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol2.png');
        this.load.image('nsd1_5_circle3',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol3.png');
        
        this.load.image('nsd1_5_circle4',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol4.png');
        this.load.image('nsd1_5_circle5',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol5.png');
        this.load.image('nsd1_5_circle6',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol6.png');
        
        this.load.image('nsd1_5_circle7',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol7.png');
        this.load.image('nsd1_5_circle8',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol8.png');
        this.load.image('nsd1_5_circle9',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol9.png');
        
        this.load.image('nsd1_5_circle10',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol10.png');
        this.load.image('nsd1_5_circle11',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol11.png');
        this.load.image('nsd1_5_circle12',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol12.png');
        
        this.load.image('nsd1_5_egg1',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol13.png');
        this.load.image('nsd1_5_egg2',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol14.png');
        this.load.image('nsd1_5_egg3',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol15.png');
        
        this.load.image('nsd1_5_egg4',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol16.png');
        this.load.image('nsd1_5_egg5',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol17.png');
        this.load.image('nsd1_5_egg6',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol18.png');
        
        this.load.image('nsd1_5_egg7',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol19.png');
        this.load.image('nsd1_5_egg8',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol20.png');
        this.load.image('nsd1_5_egg9',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol21.png');
        
        this.load.image('nsd1_5_egg10',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol22.png');
        this.load.image('nsd1_5_egg11',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol23.png');
        this.load.image('nsd1_5_egg12',window.baseUrl+'assets/gradeAssets/nsd1.5/Symbol24.png');
   
        this.load.atlas('nsd1_5_back1',window.baseUrl+'assets/gradeAssets/nsd1.5/2.png' ,window.baseUrl+'json/gradeJson/nsd1.5/2.json');
        
        this.load.atlas('nsd1_5_back2',window.baseUrl+'assets/gradeAssets/nsd1.5/4.png' ,window.baseUrl+'json/gradeJson/nsd1.5/4.json');
        this.load.atlas('nsd1_5_back3',window.baseUrl+'assets/gradeAssets/nsd1.5/3.png' ,window.baseUrl+'json/gradeJson/nsd1.5/3.json');
        this.load.atlas('nsd1_5_back4',window.baseUrl+'assets/gradeAssets/nsd1.5/5.png' ,window.baseUrl+'json/gradeJson/nsd1.5/5.json');
        
        this.load.atlas('nsd1_5_back5',window.baseUrl+'assets/gradeAssets/nsd1.5/6.png' ,window.baseUrl+'json/gradeJson/nsd1.5/6.json');
        this.load.atlas('nsd1_5_back6',window.baseUrl+'assets/gradeAssets/nsd1.5/7.png' ,window.baseUrl+'json/gradeJson/nsd1.5/7.json');
        this.load.atlas('nsd1_5_back7',window.baseUrl+'assets/gradeAssets/nsd1.5/8.png' ,window.baseUrl+'json/gradeJson/nsd1.5/8.json');

        this.load.atlas('nsd1_5_ball1',window.baseUrl+'assets/gradeAssets/nsd1.5/q1.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q1.json');
        this.load.atlas('nsd1_5_ball2',window.baseUrl+'assets/gradeAssets/nsd1.5/q2.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q2.json');
        this.load.atlas('nsd1_5_ball3',window.baseUrl+'assets/gradeAssets/nsd1.5/q3.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q3.json');
        this.load.atlas('nsd1_5_ball4',window.baseUrl+'assets/gradeAssets/nsd1.5/q4.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q4.json');
        this.load.atlas('nsd1_5_ball5',window.baseUrl+'assets/gradeAssets/nsd1.5/q5.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q5.json');
        this.load.atlas('nsd1_5_ball6',window.baseUrl+'assets/gradeAssets/nsd1.5/q6.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q6.json');
        this.load.atlas('nsd1_5_ball7',window.baseUrl+'assets/gradeAssets/nsd1.5/q7.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q7.json');
        this.load.atlas('nsd1_5_ball8',window.baseUrl+'assets/gradeAssets/nsd1.5/q8.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q8.json');
        this.load.atlas('nsd1_5_ball9',window.baseUrl+'assets/gradeAssets/nsd1.5/q9.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q9.json');
        this.load.atlas('nsd1_5_ball10',window.baseUrl+'assets/gradeAssets/nsd1.5/q10.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q10.json');
        this.load.atlas('nsd1_5_ball11',window.baseUrl+'assets/gradeAssets/nsd1.5/q11.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q11.json');
        this.load.atlas('nsd1_5_ball12',window.baseUrl+'assets/gradeAssets/nsd1.5/q12.png' ,window.baseUrl+'json/gradeJson/nsd1.5/q12.json');
      }

    },

create:function(game){

  _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount=0;

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
    _this.soundPlayed = false;



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
          _this.eggCrack = _this.add.audio('eggCrack');
          _this.rollsound = _this.add.audio('roll');
          _this.wheelsound = _this.add.audio('spin2');
    
        //baudio.play();
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();
    
        _this.qArrays1 = [1,2,5,6,9,10];
        _this.qArrays2 = [3,4,7,8,11,12];
     
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
            case 11:this.question11(); break;
            case 12:this.question12(); break;
            case 13:this.question13(); break;

        }
    },

     question1:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("1");
         _this.rightAns = 1;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
              _this.backgroup = _this.add.group();
              _this.circlegroup=_this.add.group();
              _this.group2 = _this.add.group();
         
                
                     _this.circlegroup.x=1000;
                     _this.tween=_this.add.tween(_this.circlegroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);

        
              _this.back1 = _this.add.sprite(60, 140, 'nsd1_5_back1');
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.back2.inputEnabled = false;
                   _this.back3.inputEnabled = false;
                  _this.add.tween(_this.circle1).to( { angle: 720 }, 1800, Phaser.Easing.Linear.None, true); 
                 _this.wheelsound.play();
                  _this.toCheckAnswer(target);
                    _this.back1.inputEnabled = false;
                 
               },_this);
         
             _this.back2 = _this.add.sprite(360, 140, 'nsd1_5_back1');
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
              },_this);
         
             _this.back3 = _this.add.sprite(660, 140, 'nsd1_5_back1');
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 _this.toCheckAnswer(target);
              },_this);
         
            _this.circle1 = _this.add.sprite(174, 257, 'nsd1_5_circle1');
            _this.circle1.anchor.setTo(0.5);
            _this.circle2 = _this.add.sprite(474, 257, 'nsd1_5_circle2');
            _this.circle2.anchor.setTo(0.5);
            _this.circle3 = _this.add.sprite(774, 257, 'nsd1_5_circle3');
            _this.circle3.anchor.setTo(0.5);
         
            _this.line1 = _this.add.sprite(148, 400, 'nsd1_5_line');
            _this.line2 = _this.add.sprite(448, 400, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(748, 400, 'nsd1_5_line');
         
            _this.text = this.add.text(113, 250, "7");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(113, 250, "1");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "5");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(113, 250, "8");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "14");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.circlegroup.add(_this.circle1);
           _this.circlegroup.add(_this.circle2);
           _this.circlegroup.add(_this.circle3);
            
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);

    },

     question2:function(){
         
        _this.Question = 2;
          _this.no1++;
         console.log("2");
         _this.rightAns = 2;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.circlegroup=_this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.circlegroup.x=1000;
                     _this.tween=_this.add.tween(_this.circlegroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(60, 140, 'nsd1_5_back1');
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(360, 140, 'nsd1_5_back1');
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.back1.inputEnabled = false;
                  _this.back3.inputEnabled = false;
                  _this.add.tween(_this.circle2).to( { angle: 720 }, 2000, Phaser.Easing.Linear.None, true); 
                   _this.wheelsound.play();
                  _this.toCheckAnswer(target);
                  _this.back2.inputEnabled = false;
              },_this);
         
             _this.back3 = _this.add.sprite(660, 140, 'nsd1_5_back1');
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 _this.toCheckAnswer(target);
              },_this);
         
            _this.circle1 = _this.add.sprite(174, 257, 'nsd1_5_circle5');
            _this.circle1.anchor.setTo(0.5);
            _this.circle2 = _this.add.sprite(474, 257, 'nsd1_5_circle4');
            _this.circle2.anchor.setTo(0.5);
            _this.circle3 = _this.add.sprite(774, 257, 'nsd1_5_circle6');
            _this.circle3.anchor.setTo(0.5);
         
            _this.line1 = _this.add.sprite(148, 400, 'nsd1_5_line');
            _this.line2 = _this.add.sprite(448, 400, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(748, 400, 'nsd1_5_line');
         
            _this.text = this.add.text(113, 250, "3");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "5");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(113, 250, "6");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(113, 250, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "14");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.circlegroup.add(_this.circle1);
           _this.circlegroup.add(_this.circle2);
           _this.circlegroup.add(_this.circle3);
            
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);
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
         
               _this.backgroup = _this.add.group();
               _this.circlegroup=_this.add.group();
               _this.group2 = _this.add.group();
         
                
                     _this.circlegroup.x=1000;
                     _this.tween=_this.add.tween(_this.circlegroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                
         
              _this.back1 = _this.add.sprite(60, 140, 'nsd1_5_back1');
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(360, 140, 'nsd1_5_back1');
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                 
              },_this);
         
             _this.back3 = _this.add.sprite(660, 140, 'nsd1_5_back1');
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 _this.back1.inputEnabled = false;
                 _this.back2.inputEnabled = false;
                 _this.add.tween(_this.circle3).to( { angle: 720 }, 2000, Phaser.Easing.Linear.None, true); 
                  _this.wheelsound.play();
                 _this.toCheckAnswer(target);
                  _this.back3.inputEnabled = false;
              },_this);
         
            _this.circle1 = _this.add.sprite(174, 257, 'nsd1_5_circle9');
            _this.circle1.anchor.setTo(0.5);
            _this.circle2 = _this.add.sprite(474, 257, 'nsd1_5_circle8');
            _this.circle2.anchor.setTo(0.5);
            _this.circle3 = _this.add.sprite(774, 257, 'nsd1_5_circle7');
            _this.circle3.anchor.setTo(0.5);
         
            _this.line1 = _this.add.sprite(148, 400, 'nsd1_5_line');
            _this.line2 = _this.add.sprite(448, 400, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(748, 400, 'nsd1_5_line');
         
            _this.text = this.add.text(113, 250, "11");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "14");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(113, 250, "2");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "5");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(113, 250, "5");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.circlegroup.add(_this.circle1);
           _this.circlegroup.add(_this.circle2);
           _this.circlegroup.add(_this.circle3);
            
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);
         
     },

     question4:function(){
         
          _this.Question = 4;
          _this.no1++;
         console.log("4");
         _this.rightAns = 2;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.circlegroup=_this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.circlegroup.x=1000;
                     _this.tween=_this.add.tween(_this.circlegroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(60, 140, 'nsd1_5_back1');
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(360, 140, 'nsd1_5_back1');
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.back1.inputEnabled = false;
                  _this.back3.inputEnabled = false;
                  _this.add.tween(_this.circle2).to( { angle: 720 }, 2000, Phaser.Easing.Linear.None, true); 
                  _this.wheelsound.play();
                  _this.toCheckAnswer(target);
                   _this.back2.inputEnabled = false;
              },_this);
         
             _this.back3 = _this.add.sprite(660, 140, 'nsd1_5_back1');
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 _this.toCheckAnswer(target);
                 
              },_this);
         
            _this.circle1 = _this.add.sprite(174, 257, 'nsd1_5_circle10');
            _this.circle1.anchor.setTo(0.5);
            _this.circle2 = _this.add.sprite(474, 257, 'nsd1_5_circle12');
            _this.circle2.anchor.setTo(0.5);
            _this.circle3 = _this.add.sprite(774, 257, 'nsd1_5_circle11');
            _this.circle3.anchor.setTo(0.5);
         
            _this.line1 = _this.add.sprite(148, 400, 'nsd1_5_line');
            _this.line2 = _this.add.sprite(448, 400, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(748, 400, 'nsd1_5_line');
         
            _this.text = this.add.text(113, 250, "5");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "14");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(113, 250, "3");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(113, 250, "4");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(113, 280, "5");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.circlegroup.add(_this.circle1);
           _this.circlegroup.add(_this.circle2);
           _this.circlegroup.add(_this.circle3);
            
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);

     },

     question5:function(){

         _this.Question = 5;
          _this.no1++;
         console.log("5");
         _this.rightAns = 3;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.circlegroup=_this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.circlegroup.x=1000;
                     _this.tween=_this.add.tween(_this.circlegroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(150, 70, 'nsd1_5_back2');
        // _this.back1.frame =1;
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(400, 70, 'nsd1_5_back3');
        //  _this.back2.frame =1;
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                   
              },_this);
         
             _this.back3 = _this.add.sprite(650, 70, 'nsd1_5_back4');
           //   _this.back3.frame =1;
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                  _this.back1.inputEnabled = false;
                  _this.back2.inputEnabled = false;
                  _this.eggCrack.play();
                 _this.toCheckAnswer(target);
                
                 _this.back3.inputEnabled = false;
              },_this);
         
            _this.eggplate1 = _this.add.sprite(224, 250, 'nsd1_5_egg1');
            _this.eggplate1.anchor.setTo(0.5);
            _this.eggplate2 = _this.add.sprite(474, 270, 'nsd1_5_egg2');
            _this.eggplate2.anchor.setTo(0.5);
            _this.eggplate3 = _this.add.sprite(724.5, 222, 'nsd1_5_egg3');
            _this.eggplate3.anchor.setTo(0.5);
         
            _this.line1 = _this.add.sprite(200, 445, 'nsd1_5_line');
           _this.line2 = _this.add.sprite(450, 488, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(700, 390, 'nsd1_5_line');
         
            _this.text = this.add.text(75, 365, "7");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(75, 392, "12");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(75, 408, "8");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(75, 435, "14");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(75, 310, "7");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(75, 338, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.circlegroup.add(_this.eggplate1);
           _this.circlegroup.add(_this.eggplate2);
           _this.circlegroup.add(_this.eggplate3);
            
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);


     },

     question6:function(){

           _this.Question = 6;
          _this.no1++;
         console.log("6");
         _this.rightAns = 2;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.circlegroup=_this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.circlegroup.x=1000;
                     _this.tween=_this.add.tween(_this.circlegroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(150, 70, 'nsd1_5_back3');
        // _this.back1.frame =1;
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(400, 70, 'nsd1_5_back4');
        //  _this.back2.frame =1;
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.back1.inputEnabled = false;
                  _this.back3.inputEnabled = false;
                  _this.toCheckAnswer(target);
                    _this.eggCrack.play();
                    _this.back2.inputEnabled = false;
              },_this);
         
             _this.back3 = _this.add.sprite(650, 70, 'nsd1_5_back2');
           //   _this.back3.frame =1;
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 _this.toCheckAnswer(target); 
              },_this);
         
            _this.eggplate1 = _this.add.sprite(224, 270, 'nsd1_5_egg5');
            _this.eggplate1.anchor.setTo(0.5);
            _this.eggplate2 = _this.add.sprite(474, 222, 'nsd1_5_egg6');
            _this.eggplate2.anchor.setTo(0.5);
            _this.eggplate3 = _this.add.sprite(724.5, 250, 'nsd1_5_egg4');
            _this.eggplate3.anchor.setTo(0.5);
         
            _this.line1 = _this.add.sprite(200, 488, 'nsd1_5_line');
           _this.line2 = _this.add.sprite(450, 390, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(700, 445, 'nsd1_5_line');
         
            _this.text = this.add.text(75, 408, "7");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(75, 435, "14");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(75, 310, "6");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(75, 338, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(75, 365, "4");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(75, 392, "12");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.circlegroup.add(_this.eggplate1);
           _this.circlegroup.add(_this.eggplate2);
           _this.circlegroup.add(_this.eggplate3);
            
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);

    },

     question7:function(){

          _this.Question = 7;
          _this.no1++;
         console.log("6");
         _this.rightAns = 1;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.circlegroup=_this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.circlegroup.x=1000;
                     _this.tween=_this.add.tween(_this.circlegroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(150, 70, 'nsd1_5_back4');
        // _this.back1.frame =1;
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.back2.inputEnabled = false;
                  _this.back3.inputEnabled = false;
                  _this.toCheckAnswer(target);
                    _this.eggCrack.play();
                   _this.back1.inputEnabled = false;
               },_this);
         
             _this.back2 = _this.add.sprite(400, 70, 'nsd1_5_back2');
        //  _this.back2.frame =1;
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
              },_this);
         
             _this.back3 = _this.add.sprite(650, 70, 'nsd1_5_back3');
           //   _this.back3.frame =1;
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 _this.toCheckAnswer(target); 
              },_this);
         
            _this.eggplate1 = _this.add.sprite(224, 222, 'nsd1_5_egg9');
            _this.eggplate1.anchor.setTo(0.5);
            _this.eggplate2 = _this.add.sprite(474, 250, 'nsd1_5_egg7');
            _this.eggplate2.anchor.setTo(0.5);
            _this.eggplate3 = _this.add.sprite(724.5, 270, 'nsd1_5_egg8');
            _this.eggplate3.anchor.setTo(0.5);
         
            _this.line1 = _this.add.sprite(200, 390, 'nsd1_5_line');
           _this.line2 = _this.add.sprite(450, 445, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(700, 485, 'nsd1_5_line');
         
            _this.text = this.add.text(75, 310, "8");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(75, 338, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(75, 365, "7");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(75, 392, "12");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(75, 408, "6");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(75, 435, "14");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.circlegroup.add(_this.eggplate1);
           _this.circlegroup.add(_this.eggplate2);
           _this.circlegroup.add(_this.eggplate3);
            
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);

     },

     question8:function(){

          _this.Question = 8;
          _this.no1++;
         console.log("8");
         _this.rightAns = 3;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.circlegroup=_this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.circlegroup.x=1000;
                     _this.tween=_this.add.tween(_this.circlegroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(150, 70, 'nsd1_5_back2');
        // _this.back1.frame =1;
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
               },_this);
         
             _this.back2 = _this.add.sprite(400, 70, 'nsd1_5_back3');
        //  _this.back2.frame =1;
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                   
              },_this);
         
             _this.back3 = _this.add.sprite(650, 70, 'nsd1_5_back4');
           //   _this.back3.frame =1;
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                  _this.back1.inputEnabled = false;
                  _this.back2.inputEnabled = false;
                 _this.toCheckAnswer(target);
                   _this.eggCrack.play();
                 _this.back3.inputEnabled = false;
              },_this);
         
            _this.eggplate1 = _this.add.sprite(224, 250, 'nsd1_5_egg10');
            _this.eggplate1.anchor.setTo(0.5);
            _this.eggplate2 = _this.add.sprite(474, 270, 'nsd1_5_egg11');
            _this.eggplate2.anchor.setTo(0.5);
            _this.eggplate3 = _this.add.sprite(724.5, 222, 'nsd1_5_egg12');
            _this.eggplate3.anchor.setTo(0.5);
         
            _this.line1 = _this.add.sprite(200, 445, 'nsd1_5_line');
           _this.line2 = _this.add.sprite(450, 488, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(700, 390, 'nsd1_5_line');
         
            _this.text = this.add.text(75, 365, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(75, 392, "12");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(75, 408, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(75, 435, "14");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(75, 310, "6");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(75, 338, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.circlegroup.add(_this.eggplate1);
           _this.circlegroup.add(_this.eggplate2);
           _this.circlegroup.add(_this.eggplate3);
            
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);

     },

     question9:function(){

          _this.Question = 9;
          _this.no1++;
         console.log("9");
         _this.rightAns = 2;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.ballgroup1 =_this.add.group();
               _this.ballgroup2 = _this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.ballgroup1.x=1000;
                     _this.tween=_this.add.tween(_this.ballgroup1).to( { x: 0 }, 1500, 'Linear', true,0);
                      _this.ballgroup2.x=1000;
                     _this.tween=_this.add.tween(_this.ballgroup2).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(97, 70, 'nsd1_5_back5');
        // _this.back1.frame =1;
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(367, 70, 'nsd1_5_back6');
        //  _this.back2.frame =1;
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                   _this.back1.inputEnabled = false;
                  _this.back3.inputEnabled = false;
                
                  _this.ballgroup2.callAll('animations.add','animations','spin','',10);
                  _this.ballgroup2.callAll('play',null,'spin');
                  _this.rollsound.play();
                 _this.toCheckAnswer(target);
                 _this.back2.inputEnabled = false;
              },_this);
         
             _this.back3 = _this.add.sprite(581, 70, 'nsd1_5_back7');
           //   _this.back3.frame =1;
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 _this.toCheckAnswer(target);
              },_this);
         
            _this.ball1A = _this.add.sprite(120, 100, 'nsd1_5_ball1');
            _this.ball1B = _this.add.sprite(180, 100, 'nsd1_5_ball1');
            _this.ball1C = _this.add.sprite(240, 100, 'nsd1_5_ball1');
            _this.ball1D = _this.add.sprite(120, 160, 'nsd1_5_ball1');
            _this.ball1E = _this.add.sprite(180, 160, 'nsd1_5_ball1');
            _this.ball1F = _this.add.sprite(240, 160, 'nsd1_5_ball1');
            _this.ball1G = _this.add.sprite(120, 220, 'nsd1_5_ball1');
         
            _this.ball2A = _this.add.sprite(180, 220, 'nsd1_5_ball2');
            _this.ball2B = _this.add.sprite(240, 220, 'nsd1_5_ball2');
            _this.ball2C = _this.add.sprite(120, 280, 'nsd1_5_ball2');
            _this.ball2D = _this.add.sprite(180, 280, 'nsd1_5_ball2');
            _this.ball2E = _this.add.sprite(240, 280, 'nsd1_5_ball2');
            _this.ball2F = _this.add.sprite(120, 340, 'nsd1_5_ball2');
            _this.ball2G = _this.add.sprite(180, 340, 'nsd1_5_ball2');
            _this.ball2H = _this.add.sprite(240, 340, 'nsd1_5_ball2');
         
            _this.ball3A = _this.add.sprite(390, 100, 'nsd1_5_ball3');
            _this.ball3B = _this.add.sprite(450, 100, 'nsd1_5_ball3');
            _this.ball3C = _this.add.sprite(390, 160, 'nsd1_5_ball3');
            _this.ball3D = _this.add.sprite(450, 160, 'nsd1_5_ball3');
            _this.ball3E = _this.add.sprite(390, 220, 'nsd1_5_ball3');
           
         
            _this.ball4A = _this.add.sprite(450, 220, 'nsd1_5_ball4');
            _this.ball4B = _this.add.sprite(390, 280, 'nsd1_5_ball4');
            _this.ball4C = _this.add.sprite(450, 280, 'nsd1_5_ball4');
            _this.ball4D = _this.add.sprite(390, 340, 'nsd1_5_ball4');
            _this.ball4E = _this.add.sprite(450, 340, 'nsd1_5_ball4');
         
            _this.ball5A = _this.add.sprite(610, 100, 'nsd1_5_ball5');
            _this.ball5B = _this.add.sprite(670, 100, 'nsd1_5_ball5');
            _this.ball5C = _this.add.sprite(730, 100, 'nsd1_5_ball5');
            _this.ball5D = _this.add.sprite(790, 100, 'nsd1_5_ball5');
            _this.ball5E = _this.add.sprite(610, 160, 'nsd1_5_ball5');
            _this.ball5F = _this.add.sprite(670, 160, 'nsd1_5_ball5');
            _this.ball5G = _this.add.sprite(730, 160, 'nsd1_5_ball5');
         
            
            _this.ball6B = _this.add.sprite(790, 160, 'nsd1_5_ball6');
            _this.ball6C = _this.add.sprite(610, 220, 'nsd1_5_ball6');
            _this.ball6D = _this.add.sprite(670, 220, 'nsd1_5_ball6');
            _this.ball6E = _this.add.sprite(730, 220, 'nsd1_5_ball6');
            _this.ball6F = _this.add.sprite(790, 220, 'nsd1_5_ball6');
            _this.ball6G = _this.add.sprite(610, 280, 'nsd1_5_ball6');
            _this.ball6H = _this.add.sprite(670, 280, 'nsd1_5_ball6');
            _this.ball6I = _this.add.sprite(730, 280, 'nsd1_5_ball6');
            _this.ball6J = _this.add.sprite(790, 280, 'nsd1_5_ball6');
            _this.ball6K = _this.add.sprite(610, 340, 'nsd1_5_ball6');
            _this.ball6L = _this.add.sprite(670, 340, 'nsd1_5_ball6');
            _this.ball6M = _this.add.sprite(730, 340, 'nsd1_5_ball6');
            _this.ball6N = _this.add.sprite(790, 340, 'nsd1_5_ball6');
         
            _this.line1 = _this.add.sprite(177, 445, 'nsd1_5_line');
            _this.line2 = _this.add.sprite(420, 445, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(700, 445, 'nsd1_5_line');
         
            _this.text = this.add.text(105, 362, "7");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(105, 395, "15");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(78, 362, "5");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(78, 395, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(143, 362, "7");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(143, 395, "20");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.group2.add(_this.line1);
           _this.group2.add(_this.line2);
           _this.group2.add(_this.line3);
         
            _this.ballgroup1.add(_this.ball1A);
          _this.ballgroup1.add(_this.ball1B);
          _this.ballgroup1.add(_this.ball1C);
          _this.ballgroup1.add(_this.ball1D);
          _this.ballgroup1.add(_this.ball1E);
          _this.ballgroup1.add(_this.ball1F);
          _this.ballgroup1.add(_this.ball1G);
          _this.ballgroup1.add(_this.ball2A);
          _this.ballgroup1.add(_this.ball2B);
          _this.ballgroup1.add(_this.ball2C);
          _this.ballgroup1.add(_this.ball2D);
          _this.ballgroup1.add(_this.ball2E);
          _this.ballgroup1.add(_this.ball2F);
          _this.ballgroup1.add(_this.ball2G);
          _this.ballgroup1.add(_this.ball2H);
         
          _this.ballgroup2.add(_this.ball3A);
          _this.ballgroup2.add(_this.ball3B);
          _this.ballgroup2.add(_this.ball3C);
          _this.ballgroup2.add(_this.ball3D);
          _this.ballgroup2.add(_this.ball3E);
          _this.ballgroup2.add(_this.ball4A);
          _this.ballgroup2.add(_this.ball4B);
          _this.ballgroup2.add(_this.ball4C);
          _this.ballgroup2.add(_this.ball4D);
          _this.ballgroup2.add(_this.ball4E);
         
          _this.ballgroup1.add(_this.ball5A);
          _this.ballgroup1.add(_this.ball5B);
          _this.ballgroup1.add(_this.ball5C);
          _this.ballgroup1.add(_this.ball5D);
          _this.ballgroup1.add(_this.ball5E);
          _this.ballgroup1.add(_this.ball5F);
           _this.ballgroup1.add(_this.ball5G);
          _this.ballgroup1.add(_this.ball6B);
          _this.ballgroup1.add(_this.ball6C);
          _this.ballgroup1.add(_this.ball6D);
          _this.ballgroup1.add(_this.ball6E);
          _this.ballgroup1.add(_this.ball6F);
          _this.ballgroup1.add(_this.ball6G);
          _this.ballgroup1.add(_this.ball6H);
          _this.ballgroup1.add(_this.ball6I);
          _this.ballgroup1.add(_this.ball6J);
          _this.ballgroup1.add(_this.ball6K);
          _this.ballgroup1.add(_this.ball6L);
          _this.ballgroup1.add(_this.ball6M);
          _this.ballgroup1.add(_this.ball6N);
         
           
//            
//            _this.group2.add(_this.line1);
//            _this.group2.add(_this.line2);
//            _this.group2.add(_this.line3);
//         
     },

     question10:function(){

          _this.Question = 10;
          _this.no1++;
         console.log("10");
         _this.rightAns = 2;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.ballgroup1 =_this.add.group();
               _this.ballgroup2 = _this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.ballgroup1.x=1000;
                     _this.tween=_this.add.tween(_this.ballgroup1).to( { x: 0 }, 1500, 'Linear', true,0);
                      _this.ballgroup2.x=1000;
                     _this.tween=_this.add.tween(_this.ballgroup2).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(97, 70, 'nsd1_5_back5');
        // _this.back1.frame =1;
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(367, 70, 'nsd1_5_back6');
        //  _this.back2.frame =1;
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.back1.inputEnabled = false;
                  _this.back3.inputEnabled = false;
                
                  _this.ballgroup2.callAll('animations.add','animations','spin','',10);
                  _this.ballgroup2.callAll('play',null,'spin');
                  _this.rollsound.play();
                  _this.toCheckAnswer(target);
                  _this.back2.inputEnabled = false;
              },_this);
         
             _this.back3 = _this.add.sprite(581, 70, 'nsd1_5_back7');
           //   _this.back3.frame =1;
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 
                 _this.toCheckAnswer(target);
                
              },_this);
         
            _this.ball1A = _this.add.sprite(120, 100, 'nsd1_5_ball4');
            _this.ball1B = _this.add.sprite(180, 100, 'nsd1_5_ball4');
            _this.ball1C = _this.add.sprite(240, 100, 'nsd1_5_ball4');
            _this.ball1D = _this.add.sprite(120, 160, 'nsd1_5_ball4');
            _this.ball1E = _this.add.sprite(180, 160, 'nsd1_5_ball4');
            _this.ball1F = _this.add.sprite(240, 160, 'nsd1_5_ball4');
            _this.ball1G = _this.add.sprite(120, 220, 'nsd1_5_ball4');
            _this.ball1H = _this.add.sprite(180, 220, 'nsd1_5_ball4');
            _this.ball1I = _this.add.sprite(240, 220, 'nsd1_5_ball4');
         
            
            _this.ball2A = _this.add.sprite(120, 280, 'nsd1_5_ball5');
            _this.ball2B = _this.add.sprite(180, 280, 'nsd1_5_ball5');
            _this.ball2C = _this.add.sprite(240, 280, 'nsd1_5_ball5');
            _this.ball2D = _this.add.sprite(120, 340, 'nsd1_5_ball5');
            _this.ball2E = _this.add.sprite(180, 340, 'nsd1_5_ball5');
            _this.ball2F = _this.add.sprite(240, 340, 'nsd1_5_ball5');
         
            _this.ball3A = _this.add.sprite(390, 100, 'nsd1_5_ball6');
            _this.ball3B = _this.add.sprite(450, 100, 'nsd1_5_ball6');
            _this.ball3C = _this.add.sprite(390, 160, 'nsd1_5_ball6');
            _this.ball3D = _this.add.sprite(450, 160, 'nsd1_5_ball6');
         
            _this.ball4A = _this.add.sprite(390, 220, 'nsd1_5_ball7');
            _this.ball4B = _this.add.sprite(450, 220, 'nsd1_5_ball7');
            _this.ball4C = _this.add.sprite(390, 280, 'nsd1_5_ball7');
            _this.ball4D = _this.add.sprite(450, 280, 'nsd1_5_ball7');
            _this.ball4E = _this.add.sprite(390, 340, 'nsd1_5_ball7');
            _this.ball4F = _this.add.sprite(450, 340, 'nsd1_5_ball7');
           
            
            _this.ball5A = _this.add.sprite(610, 100, 'nsd1_5_ball8');
            _this.ball5B = _this.add.sprite(670, 100, 'nsd1_5_ball8');
            _this.ball5C = _this.add.sprite(730, 100, 'nsd1_5_ball8');
            _this.ball5D = _this.add.sprite(790, 100, 'nsd1_5_ball8');
            _this.ball5E = _this.add.sprite(610, 160, 'nsd1_5_ball8');
            _this.ball5F = _this.add.sprite(670, 160, 'nsd1_5_ball8');
            _this.ball5G = _this.add.sprite(730, 160, 'nsd1_5_ball8');
            _this.ball5H = _this.add.sprite(790, 160, 'nsd1_5_ball8');
            _this.ball5I = _this.add.sprite(610, 220, 'nsd1_5_ball8');
         
           
            _this.ball6B = _this.add.sprite(670, 220, 'nsd1_5_ball9');
            _this.ball6C = _this.add.sprite(730, 220, 'nsd1_5_ball9');
            _this.ball6D = _this.add.sprite(790, 220, 'nsd1_5_ball9');
            _this.ball6E = _this.add.sprite(610, 280, 'nsd1_5_ball9');
            _this.ball6F = _this.add.sprite(670, 280, 'nsd1_5_ball9');
            _this.ball6G = _this.add.sprite(730, 280, 'nsd1_5_ball9');
            _this.ball6H = _this.add.sprite(790, 280, 'nsd1_5_ball9');
            _this.ball6I = _this.add.sprite(610, 340, 'nsd1_5_ball9');
            _this.ball6J = _this.add.sprite(670, 340, 'nsd1_5_ball9');
            _this.ball6K = _this.add.sprite(730, 340, 'nsd1_5_ball9');
            _this.ball6L = _this.add.sprite(790, 340, 'nsd1_5_ball9');
         
            _this.line1 = _this.add.sprite(177, 445, 'nsd1_5_line');
            _this.line2 = _this.add.sprite(420, 445, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(700, 445, 'nsd1_5_line');
         
            _this.text = this.add.text(105, 362, "9");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(105, 395, "15");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(78, 362, "4");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(78, 395, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(143, 362, "9");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(143, 395, "20");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
         
            _this.group2.add(_this.line1);
            _this.group2.add(_this.line2);
            _this.group2.add(_this.line3);

         
           _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
            _this.ballgroup1.add(_this.ball1A);
          _this.ballgroup1.add(_this.ball1B);
          _this.ballgroup1.add(_this.ball1C);
          _this.ballgroup1.add(_this.ball1D);
          _this.ballgroup1.add(_this.ball1E);
          _this.ballgroup1.add(_this.ball1F);
          _this.ballgroup1.add(_this.ball1G);
            _this.ballgroup1.add(_this.ball1H);
           _this.ballgroup1.add(_this.ball1I);
         
           _this.ballgroup1.add(_this.ball5A);
          _this.ballgroup1.add(_this.ball5B);
          _this.ballgroup1.add(_this.ball5C);
          _this.ballgroup1.add(_this.ball5D);
          _this.ballgroup1.add(_this.ball5E);
          _this.ballgroup1.add(_this.ball5F);
          _this.ballgroup1.add(_this.ball5G);
            _this.ballgroup1.add(_this.ball5H);
           _this.ballgroup1.add(_this.ball5I);
         
          _this.ballgroup1.add(_this.ball2A);
          _this.ballgroup1.add(_this.ball2B);
          _this.ballgroup1.add(_this.ball2C);
          _this.ballgroup1.add(_this.ball2D);
          _this.ballgroup1.add(_this.ball2E);
          _this.ballgroup1.add(_this.ball2F);
         
         
         
          _this.ballgroup1.add(_this.ball6B);
          _this.ballgroup1.add(_this.ball6C);
          _this.ballgroup1.add(_this.ball6D);
          _this.ballgroup1.add(_this.ball6E);
          _this.ballgroup1.add(_this.ball6F);
          _this.ballgroup1.add(_this.ball6G);
            _this.ballgroup1.add(_this.ball6H);
           _this.ballgroup1.add(_this.ball6I);
          _this.ballgroup1.add(_this.ball6J);
          _this.ballgroup1.add(_this.ball6K);
          _this.ballgroup1.add(_this.ball6L);
         
          _this.ballgroup2.add(_this.ball3A);
          _this.ballgroup2.add(_this.ball3B);
          _this.ballgroup2.add(_this.ball3C);
          _this.ballgroup2.add(_this.ball3D);
          _this.ballgroup2.add(_this.ball4A);   
          _this.ballgroup2.add(_this.ball4B);
          _this.ballgroup2.add(_this.ball4C);
          _this.ballgroup2.add(_this.ball4D);
          _this.ballgroup2.add(_this.ball4E);
          _this.ballgroup2.add(_this.ball4F);
     },

     question11:function(){
        
          _this.Question = 11;
          _this.no1++;
         console.log("11");
         _this.rightAns = 1;
         if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.ballgroup1 =_this.add.group();
               _this.ballgroup2 = _this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.ballgroup1.x=1000;
                     _this.tween=_this.add.tween(_this.ballgroup1).to( { x: 0 }, 1500, 'Linear', true,0);
                      _this.ballgroup2.x=1000;
                     _this.tween=_this.add.tween(_this.ballgroup2).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(87, 70, 'nsd1_5_back6');
        // _this.back1.frame =1;
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.back2.inputEnabled = false;
                  _this.back3.inputEnabled = false;
                
                  _this.ballgroup2.callAll('animations.add','animations','spin','',10);
                  _this.ballgroup2.callAll('play',null,'spin');
                   _this.rollsound.play();
                  _this.toCheckAnswer(target);
                  _this.back1.inputEnabled = false;
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(310, 70, 'nsd1_5_back7');
        //  _this.back2.frame =1;
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                    _this.toCheckAnswer(target);
              },_this);
         
             _this.back3 = _this.add.sprite(661, 70, 'nsd1_5_back5');
           //   _this.back3.frame =1;
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                 
                 _this.toCheckAnswer(target);
                
              },_this);
         
         _this.ball1A = _this.add.sprite(110, 100, 'nsd1_5_ball10');
         _this.ball1B = _this.add.sprite(170, 100, 'nsd1_5_ball10');
         _this.ball1C = _this.add.sprite(110, 160, 'nsd1_5_ball10');
         _this.ball1D = _this.add.sprite(170, 160, 'nsd1_5_ball10');
         _this.ball1E = _this.add.sprite(110, 220, 'nsd1_5_ball10');
         _this.ball1F = _this.add.sprite(170, 220, 'nsd1_5_ball10');
         _this.ball1G = _this.add.sprite(110, 280, 'nsd1_5_ball10');
         
          _this.ball2A = _this.add.sprite(170, 280, 'nsd1_5_ball6');
          _this.ball2B = _this.add.sprite(110, 340, 'nsd1_5_ball6');
          _this.ball2C = _this.add.sprite(170, 340, 'nsd1_5_ball6');
         
          _this.ball3A = _this.add.sprite(340, 100, 'nsd1_5_ball12');
         _this.ball3B = _this.add.sprite(400, 100, 'nsd1_5_ball12');
         _this.ball3C = _this.add.sprite(460, 100, 'nsd1_5_ball12');
         _this.ball3D = _this.add.sprite(520, 100, 'nsd1_5_ball12');
         _this.ball3E = _this.add.sprite(340, 160, 'nsd1_5_ball12');
         _this.ball3F = _this.add.sprite(400, 160, 'nsd1_5_ball12');
         _this.ball3G = _this.add.sprite(460, 160, 'nsd1_5_ball12');
         _this.ball3H = _this.add.sprite(520, 160, 'nsd1_5_ball12');
         _this.ball3I = _this.add.sprite(340, 220, 'nsd1_5_ball12');
         _this.ball3J = _this.add.sprite(400, 220, 'nsd1_5_ball12');
         _this.ball3K = _this.add.sprite(460, 220, 'nsd1_5_ball12');
         
         _this.ball4A = _this.add.sprite(520, 220, 'nsd1_5_ball1');
         _this.ball4B = _this.add.sprite(340, 280, 'nsd1_5_ball1');
         _this.ball4C = _this.add.sprite(400, 280, 'nsd1_5_ball1');
         _this.ball4D = _this.add.sprite(460, 280, 'nsd1_5_ball1');
         _this.ball4E = _this.add.sprite(520, 280, 'nsd1_5_ball1');
         _this.ball4F = _this.add.sprite(340, 340, 'nsd1_5_ball1');
         _this.ball4G = _this.add.sprite(400, 340, 'nsd1_5_ball1');
          _this.ball4H = _this.add.sprite(460, 340, 'nsd1_5_ball1');
          _this.ball4I = _this.add.sprite(520, 340, 'nsd1_5_ball1');
         
         _this.ball5A = _this.add.sprite(684, 100, 'nsd1_5_ball2');
         _this.ball5B = _this.add.sprite(744, 100, 'nsd1_5_ball2');
         _this.ball5C = _this.add.sprite(804, 100, 'nsd1_5_ball2');
         _this.ball5D = _this.add.sprite(684, 160, 'nsd1_5_ball2');
         
          _this.ball6A = _this.add.sprite(744, 160, 'nsd1_5_ball4');
          _this.ball6B = _this.add.sprite(804, 160, 'nsd1_5_ball4');
          _this.ball6C = _this.add.sprite(684, 220, 'nsd1_5_ball4');
          _this.ball6D = _this.add.sprite(744, 220, 'nsd1_5_ball4');
          _this.ball6E = _this.add.sprite(804, 220, 'nsd1_5_ball4');
          _this.ball6F = _this.add.sprite(684, 280, 'nsd1_5_ball4');
          _this.ball6G = _this.add.sprite(744, 280, 'nsd1_5_ball4');
          _this.ball6H = _this.add.sprite(804, 280, 'nsd1_5_ball4');
          _this.ball6I = _this.add.sprite(684, 340, 'nsd1_5_ball4');
          _this.ball6J = _this.add.sprite(744, 340, 'nsd1_5_ball4');
           _this.ball6K = _this.add.sprite(804, 340, 'nsd1_5_ball4');
         
           _this.line1 = _this.add.sprite(140, 445, 'nsd1_5_line');
            _this.line2 = _this.add.sprite(430, 445, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(745, 445, 'nsd1_5_line');
         
            _this.text = this.add.text(78, 362, "7");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(78, 395, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(145, 362, "11");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(145, 395, "20");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(110, 362, "4");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(110, 395, "15");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
         
            _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
           _this.group2.add(_this.line1);
           _this.group2.add(_this.line2);
          _this.group2.add(_this.line3);
           
         
           _this.ballgroup2.add(_this.ball1A);
          _this.ballgroup2.add(_this.ball1B);
          _this.ballgroup2.add(_this.ball1C);
          _this.ballgroup2.add(_this.ball1D);
          _this.ballgroup2.add(_this.ball1E);
          _this.ballgroup2.add(_this.ball1F);
          _this.ballgroup2.add(_this.ball1G);
          _this.ballgroup2.add(_this.ball2A);
          _this.ballgroup2.add(_this.ball2B);
          _this.ballgroup2.add(_this.ball2C);
       
           _this.ballgroup2.add(_this.ball2A);
         _this.ballgroup2.add(_this.ball2B);
         _this.ballgroup2.add(_this.ball2C);
         
         _this.ballgroup1.add(_this.ball3A);
           _this.ballgroup1.add(_this.ball3B);
           _this.ballgroup1.add(_this.ball3C);
           _this.ballgroup1.add(_this.ball3D);
           _this.ballgroup1.add(_this.ball3E);
           _this.ballgroup1.add(_this.ball3F);
           _this.ballgroup1.add(_this.ball3G);
           _this.ballgroup1.add(_this.ball3H);
            _this.ballgroup1.add(_this.ball3I);
            _this.ballgroup1.add(_this.ball3J);
            _this.ballgroup1.add(_this.ball3K);
         
           _this.ballgroup1.add(_this.ball4A);
           _this.ballgroup1.add(_this.ball4B);
          _this.ballgroup1.add(_this.ball4C);
          _this.ballgroup1.add(_this.ball4D);
          _this.ballgroup1.add(_this.ball4E);
          _this.ballgroup1.add(_this.ball4F);
          _this.ballgroup1.add(_this.ball4G);
           _this.ballgroup1.add(_this.ball4H);
           _this.ballgroup1.add(_this.ball4I);
         
           _this.ballgroup1.add(_this.ball5A);
          _this.ballgroup1.add(_this.ball5B);
          _this.ballgroup1.add(_this.ball5C);
          _this.ballgroup1.add(_this.ball5D);
        
           _this.ballgroup1.add(_this.ball6A);
          _this.ballgroup1.add(_this.ball6B);
          _this.ballgroup1.add(_this.ball6C);
          _this.ballgroup1.add(_this.ball6D);
          _this.ballgroup1.add(_this.ball6E);
          _this.ballgroup1.add(_this.ball6F);
          _this.ballgroup1.add(_this.ball6G);
          _this.ballgroup1.add(_this.ball6H);
          _this.ballgroup1.add(_this.ball6I);
          _this.ballgroup1.add(_this.ball6J);
          _this.ballgroup1.add(_this.ball6K);
         
     },

     question12:function(){

          _this.Question = 12;
          _this.no1++;
         console.log("12");
         _this.rightAns = 3;
        if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
         
               _this.backgroup = _this.add.group();
               _this.ballgroup1 =_this.add.group();
               _this.ballgroup2 = _this.add.group();
               _this.group2 = _this.add.group();
         
               
                     _this.ballgroup1.x=1000;
                     _this.tween=_this.add.tween(_this.ballgroup1).to( { x: 0 }, 1500, 'Linear', true,0);
                      _this.ballgroup2.x=1000;
                     _this.tween=_this.add.tween(_this.ballgroup2).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.backgroup.x=1000;
                     _this.backgroup.x=1000;
                     _this.tween=_this.add.tween(_this.backgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.group2.x=1000;
                     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
                 
         
              _this.back1 = _this.add.sprite(87, 70, 'nsd1_5_back7');
        // _this.back1.frame =1;
              _this.back1.inputEnabled = true;
              _this.back1.events.onInputDown.add(function(target){
                  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
                  _this.tap = 1;
                  _this.back1.frame = 1;
                  _this.back2.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                  
                  
                 
               },_this);
         
             _this.back2 = _this.add.sprite(430, 70, 'nsd1_5_back5');
        //  _this.back2.frame =1;
             _this.back2.inputEnabled = true;
             _this.back2.events.onInputDown.add(function(target){
                  _this.tap = 2;
                  _this.back2.frame = 1;
                  _this.back1.frame = 0;
                  _this.back3.frame = 0;
                  _this.toCheckAnswer(target);
                
              },_this);
         
             _this.back3 = _this.add.sprite(700, 70, 'nsd1_5_back6');
           //   _this.back3.frame =1;
             _this.back3.inputEnabled = true;
             _this.back3.events.onInputDown.add(function(target){
                 _this.tap = 3;
                 _this.back3.frame = 1;
                 _this.back2.frame = 0;
                 _this.back1.frame = 0;
                  _this.back1.inputEnabled = false;
                  _this.back2.inputEnabled = false;
                 
                  _this.ballgroup2.callAll('animations.add','animations','spin','',10);
                  _this.ballgroup2.callAll('play',null,'spin');
                  _this.rollsound.play();
                  _this.toCheckAnswer(target);
                  _this.back3.inputEnabled = false;
                
              },_this);
         
             _this.ball1A = _this.add.sprite(115, 100, 'nsd1_5_ball4');
             _this.ball1B = _this.add.sprite(175, 100, 'nsd1_5_ball4');
             _this.ball1C = _this.add.sprite(235, 100, 'nsd1_5_ball4');
             _this.ball1D = _this.add.sprite(295, 100, 'nsd1_5_ball4');
         
             _this.ball1E = _this.add.sprite(115, 160, 'nsd1_5_ball4');
              _this.ball1F = _this.add.sprite(175, 160, 'nsd1_5_ball4');
              _this.ball1G = _this.add.sprite(235, 160, 'nsd1_5_ball4');
              _this.ball1H = _this.add.sprite(295, 160, 'nsd1_5_ball4');
         
              _this.ball1I = _this.add.sprite(115, 220, 'nsd1_5_ball4');
              _this.ball1J = _this.add.sprite(175, 220, 'nsd1_5_ball4');
              _this.ball1K = _this.add.sprite(235, 220, 'nsd1_5_ball4');
              _this.ball1L = _this.add.sprite(295, 220, 'nsd1_5_ball4');
         
              _this.ball1M = _this.add.sprite(115, 280, 'nsd1_5_ball4');
              _this.ball2A = _this.add.sprite(175, 280, 'nsd1_5_ball5');
              _this.ball2B = _this.add.sprite(235, 280, 'nsd1_5_ball5');
              _this.ball2C = _this.add.sprite(295, 280, 'nsd1_5_ball5');
         
              _this.ball2D= _this.add.sprite(115, 340, 'nsd1_5_ball5');
              _this.ball2E = _this.add.sprite(175, 340, 'nsd1_5_ball5');
              _this.ball2F = _this.add.sprite(235, 340, 'nsd1_5_ball5');
              _this.ball2G = _this.add.sprite(295, 340, 'nsd1_5_ball5');
          
              _this.ball3A = _this.add.sprite(453, 100, 'nsd1_5_ball6');
              _this.ball3B = _this.add.sprite(513, 100, 'nsd1_5_ball6');
              _this.ball3C = _this.add.sprite(573, 100, 'nsd1_5_ball6');
              _this.ball3D = _this.add.sprite(453, 160, 'nsd1_5_ball6');
              _this.ball3E = _this.add.sprite(513, 160, 'nsd1_5_ball6');
              _this.ball3F = _this.add.sprite(573, 160, 'nsd1_5_ball6');
              _this.ball3G = _this.add.sprite(453, 220, 'nsd1_5_ball6');
              _this.ball3H = _this.add.sprite(513, 220, 'nsd1_5_ball6');
              _this.ball4A = _this.add.sprite(573, 220, 'nsd1_5_ball7');
         
             _this.ball4B = _this.add.sprite(453, 280, 'nsd1_5_ball7');
             _this.ball4C = _this.add.sprite(513, 280, 'nsd1_5_ball7');
             _this.ball4D = _this.add.sprite(573, 280, 'nsd1_5_ball7');
             _this.ball4E = _this.add.sprite(453, 340, 'nsd1_5_ball7');
             _this.ball4F = _this.add.sprite(513, 340, 'nsd1_5_ball7');
             _this.ball4G = _this.add.sprite(573, 340, 'nsd1_5_ball7');
         
            _this.ball5A = _this.add.sprite(723, 100, 'nsd1_5_ball1');
            _this.ball5B = _this.add.sprite(783, 100, 'nsd1_5_ball1');
            _this.ball5C = _this.add.sprite(723, 160, 'nsd1_5_ball1');
            _this.ball5D = _this.add.sprite(783, 160, 'nsd1_5_ball1');
            _this.ball5E = _this.add.sprite(723, 220, 'nsd1_5_ball1');
            _this.ball5F = _this.add.sprite(783, 220, 'nsd1_5_ball1');
            _this.ball5G = _this.add.sprite(723, 280, 'nsd1_5_ball1');
            _this.ball5H = _this.add.sprite(783, 280, 'nsd1_5_ball1');
            _this.ball5I = _this.add.sprite(723, 340, 'nsd1_5_ball1');
            _this.ball6A = _this.add.sprite(783, 340, 'nsd1_5_ball12');
         
             _this.line1 = _this.add.sprite(205, 445, 'nsd1_5_line');
            _this.line2 = _this.add.sprite(512, 445, 'nsd1_5_line');
            _this.line3 = _this.add.sprite(753, 445, 'nsd1_5_line');
         
            _this.text = this.add.text(142, 362, "13");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
        
            _this.text = this.add.text(142, 395, "20");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back1.addChild(_this.text);
         
            _this.text = this.add.text(105, 362, "8");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
        
            _this.text = this.add.text(105, 395, "15");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back2.addChild(_this.text);
         
            _this.text = this.add.text(78, 362, "9");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
        
            _this.text = this.add.text(78, 395, "10");
            _this.text.font = "myfont";
            _this.text.fill = "#0079BF";
            _this.text.fontWeight = 'bold';
            _this.text.anchor.set(0.5);
            _this.text.fontSize = 25;
            _this.back3.addChild(_this.text);
         
            _this.backgroup.add(_this.back1);
           _this.backgroup.add(_this.back2);
           _this.backgroup.add(_this.back3);
         
          _this.group2.add(_this.line1);
         _this.group2.add(_this.line2);
         _this.group2.add(_this.line3);
         
           _this.ballgroup1.add(_this.ball1A);
          _this.ballgroup1.add(_this.ball1B);
          _this.ballgroup1.add(_this.ball1C);
          _this.ballgroup1.add(_this.ball1D);
          _this.ballgroup1.add(_this.ball1E);
          _this.ballgroup1.add(_this.ball1F);
          _this.ballgroup1.add(_this.ball1G);
          _this.ballgroup1.add(_this.ball1H);
          _this.ballgroup1.add(_this.ball1I);
          _this.ballgroup1.add(_this.ball1J);
           _this.ballgroup1.add(_this.ball1K);
           _this.ballgroup1.add(_this.ball1L);
           _this.ballgroup1.add(_this.ball1M);
         
           _this.ballgroup1.add(_this.ball2A);
         _this.ballgroup1.add(_this.ball2B);
         _this.ballgroup1.add(_this.ball2C);
         _this.ballgroup1.add(_this.ball2D);
         _this.ballgroup1.add(_this.ball2E);
         _this.ballgroup1.add(_this.ball2F);
         _this.ballgroup1.add(_this.ball2G);
         
         _this.ballgroup1.add(_this.ball3A);
           _this.ballgroup1.add(_this.ball3B);
           _this.ballgroup1.add(_this.ball3C);
           _this.ballgroup1.add(_this.ball3D);
           _this.ballgroup1.add(_this.ball3E);
           _this.ballgroup1.add(_this.ball3F);
           _this.ballgroup1.add(_this.ball3G);
           _this.ballgroup1.add(_this.ball3H);
         
           _this.ballgroup1.add(_this.ball4A);
           _this.ballgroup1.add(_this.ball4B);
          _this.ballgroup1.add(_this.ball4C);
          _this.ballgroup1.add(_this.ball4D);
          _this.ballgroup1.add(_this.ball4E);
          _this.ballgroup1.add(_this.ball4F);
          _this.ballgroup1.add(_this.ball4G);
         
           _this.ballgroup2.add(_this.ball5A);
          _this.ballgroup2.add(_this.ball5B);
          _this.ballgroup2.add(_this.ball5C);
          _this.ballgroup2.add(_this.ball5D);
          _this.ballgroup2.add(_this.ball5E);
          _this.ballgroup2.add(_this.ball5F);
          _this.ballgroup2.add(_this.ball5G);
          _this.ballgroup2.add(_this.ball5H);
          _this.ballgroup2.add(_this.ball5I);
         
           _this.ballgroup2.add(_this.ball6A);
             },

   


    toCheckAnswer :function (target){
           _this.clickSound.play();
            //_this.noofAttempts++;

      //   target.events.onInputDown.removeAll();

				 if(_this.Question == 1 || _this.Question == 2 || _this.Question == 3 || _this.Question == 4 ||  _this.Question == 5 ||  _this.Question == 6 || _this.Question == 7 ||  _this.Question == 8 || _this.Question == 9 || _this.Question == 10 || _this.Question == 11 || _this.Question == 12)
				 {
					 
					 if(_this.tap == _this.rightAns)
                         {
                            _this.correctAns();
                         }
                     else
                         {
                            _this.wrongAns(target);
                         }
                 }
                
       

},


    correctAns:function(target)
	{

        
        //_this.stopvoice();
         _this.wrong = false;
       // target.events.onInputDown.removeAll();
       // _this.rightmark.inputEnabled=false;
         _this.wrongAnswer = false;
        _this.noofAttempts++;
        
       if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }

                



         _this.time.events.add(1000, function(){
             
            _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 = _this.starAnim.animations.add('star');
            _this.anim4.play();
            _this.count1++;
        
		_this.celebration = true;
     	_this.celebr.play();
         });


        _this.time.events.add(2500, _this.removeCelebration, _this);

        _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

	},

    wrongAns:function(target)
	{
       // _this.stopvoice();
        _this.check = 0;
        _this.noofAttempts++;
       
        _this.shake.shake(10,target);
        
       
        // _this.timer1.stop();
         _this.wrong = false;
        _this.time.events.add(500, function(){
       
        },_this)

        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        _this.time.events.add(500, function(){
            if(_this.back1)
           _this.back1.frame = 0;
            if(_this.back2)
             _this.back2.frame = 0;
            if(_this.back3)
             _this.back3.frame = 0;
            if(_this.back4)
             _this.back4.frame = 0;
            if(_this.back5)
             _this.back5.frame = 0;
            if(_this.back6)
             _this.back6.frame = 0;
            if(_this.back7)
             _this.back7.frame = 0;
            if(_this.back8)
            _this.back8.frame = 0;
            
        },_this);

	},

    removeCelebration:function()
	{
        console.log("removeCeleb");
		_this.celebration = false;
        _this.correct=0;
        _this.count=0;
         _this.qno++;

         if(_this.timer1)
               {
                    _this.timer1.stop();
                    _this.timer1 = null;
               }


		  if(_this.qno<6)
                    {
                       if(_this.ballgroup1){
                           _this.ballgroup1.destroy();
                         }
                        if(_this.ballgroup2){
                           _this.ballgroup2.destroy();
                         }
                        if(_this.circlegroup){
                        _this.circlegroup.destroy();
                        }
                        _this.backgroup.destroy();
                        _this.group2.destroy();
                      
                        _this.getQuestion();

                    }

                else
                    {

                        // _this.stopvoice();
                         _this.state.start('nsd1_5Score');
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
            case 11:
            case 12:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/English/nsd1.5E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/Hindi/nsd1.5H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/Kannada/nsd1.5K.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/Gujarati/nsd1.5G.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/Marathi/nsd1.5.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/Telugu/nsd1.5.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/Tamil/nsd1.5.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/Urdu/nsd1.5.mp3");
                    }
                        else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd1.5/Odiya/nsd1.5O.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
