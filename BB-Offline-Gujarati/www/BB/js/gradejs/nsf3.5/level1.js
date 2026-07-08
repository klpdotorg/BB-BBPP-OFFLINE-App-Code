Game.nsf3_5level1=function(){};




Game.nsf3_5level1.prototype={
    init:function(game)
	{
		_this = this;
       
		telInitializer.gameIdInit("NSF3_5",gradeSelected);
	},

  preload:function(game){
  if(!window.grade5NSF3){

            window.grade5NSF3 = true;

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

            this.load.image('F2_5backg',window.baseUrl+'assets/gradeAssets/nsf2.5/backg.png');

            this.load.image('nsf3_5_footer',window.baseUrl+'assets/gradeAssets/nsf3.5/footer.png');

         this.load.atlas('nsf3_5_tickmark',window.baseUrl+'assets/gradeAssets/nsf3.5/rightmark.png' ,window.baseUrl+'json/gradeJson/nsf3.5/rightmark.json');

         this.load.image('nsf3_5_whitebar',window.baseUrl+'assets/gradeAssets/nsf3.5/q1.png');

         this.load.image('nsf3_5_two',window.baseUrl+'assets/gradeAssets/nsf3.5/q3.png');
         this.load.image('nsf3_5_two1',window.baseUrl+'assets/gradeAssets/nsf3.5/1.png');

         this.load.image('nsf3_5_three',window.baseUrl+'assets/gradeAssets/nsf3.5/q4.png');
         this.load.image('nsf3_5_three1',window.baseUrl+'assets/gradeAssets/nsf3.5/2.png');
         this.load.image('nsf3_5_three2',window.baseUrl+'assets/gradeAssets/nsf3.5/3.png');

         this.load.image('nsf3_5_four',window.baseUrl+'assets/gradeAssets/nsf3.5/q5.png');
         this.load.image('nsf3_5_four1',window.baseUrl+'assets/gradeAssets/nsf3.5/4.png');
         this.load.image('nsf3_5_four2',window.baseUrl+'assets/gradeAssets/nsf3.5/5.png');
         this.load.image('nsf3_5_four3',window.baseUrl+'assets/gradeAssets/nsf3.5/6.png');

        this.load.image('nsf3_5_five',window.baseUrl+'assets/gradeAssets/nsf3.5/q6.png');
        this.load.image('nsf3_5_five1',window.baseUrl+'assets/gradeAssets/nsf3.5/7.png');
        this.load.image('nsf3_5_five2',window.baseUrl+'assets/gradeAssets/nsf3.5/8.png');
        this.load.image('nsf3_5_five3',window.baseUrl+'assets/gradeAssets/nsf3.5/9.png');
        this.load.image('nsf3_5_five4',window.baseUrl+'assets/gradeAssets/nsf3.5/10.png');

        this.load.image('nsf3_5_six',window.baseUrl+'assets/gradeAssets/nsf3.5/q7.png');
        this.load.image('nsf3_5_six1',window.baseUrl+'assets/gradeAssets/nsf3.5/11.png');
        this.load.image('nsf3_5_six2',window.baseUrl+'assets/gradeAssets/nsf3.5/12.png');
        this.load.image('nsf3_5_six3',window.baseUrl+'assets/gradeAssets/nsf3.5/13.png');
        this.load.image('nsf3_5_six4',window.baseUrl+'assets/gradeAssets/nsf3.5/14.png');
        this.load.image('nsf3_5_six5',window.baseUrl+'assets/gradeAssets/nsf3.5/15.png');

        this.load.image('nsf3_5_seven',window.baseUrl+'assets/gradeAssets/nsf3.5/q8.png');
        this.load.image('nsf3_5_seven1',window.baseUrl+'assets/gradeAssets/nsf3.5/16.png');
        this.load.image('nsf3_5_seven2',window.baseUrl+'assets/gradeAssets/nsf3.5/17.png');
        this.load.image('nsf3_5_seven3',window.baseUrl+'assets/gradeAssets/nsf3.5/18.png');
        this.load.image('nsf3_5_seven4',window.baseUrl+'assets/gradeAssets/nsf3.5/19.png');
        this.load.image('nsf3_5_seven5',window.baseUrl+'assets/gradeAssets/nsf3.5/20.png');
        this.load.image('nsf3_5_seven6',window.baseUrl+'assets/gradeAssets/nsf3.5/21.png');

         this.load.atlas('nsf3_5_t8',window.baseUrl+'assets/gradeAssets/nsf3.5/w8.png' ,window.baseUrl+'json/gradeJson/nsf3.5/w8.json');
         this.load.atlas('nsf3_5_t9',window.baseUrl+'assets/gradeAssets/nsf3.5/w9.png' ,window.baseUrl+'json/gradeJson/nsf3.5/w9.json');
         this.load.atlas('nsf3_5_t10',window.baseUrl+'assets/gradeAssets/nsf3.5/w10.png' ,window.baseUrl+'json/gradeJson/nsf3.5/w10.json');
         this.load.atlas('nsf3_5_t11',window.baseUrl+'assets/gradeAssets/nsf3.5/w11.png' ,window.baseUrl+'json/gradeJson/nsf3.5/w11.json');
         this.load.atlas('nsf3_5_t12',window.baseUrl+'assets/gradeAssets/nsf3.5/w12.png' ,window.baseUrl+'json/gradeJson/nsf3.5/w12.json');
         this.load.atlas('nsf3_5_t13',window.baseUrl+'assets/gradeAssets/nsf3.5/w13.png' ,window.baseUrl+'json/gradeJson/nsf3.5/w13.json');
         this.load.atlas('nsf3_5_t14',window.baseUrl+'assets/gradeAssets/nsf3.5/w14.png' ,window.baseUrl+'json/gradeJson/nsf3.5/w14.json');

        this.load.image('nsf3_5_glow1',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/1.png');
        this.load.image('nsf3_5_glow2',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/2.png');
        this.load.image('nsf3_5_glow3',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/3.png');
        this.load.image('nsf3_5_glow4',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/4.png');
        this.load.image('nsf3_5_glow5',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/5.png');
        this.load.image('nsf3_5_glow6',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/6.png');
        this.load.image('nsf3_5_glow7',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/7.png');
        this.load.image('nsf3_5_glow8',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/8.png');
        this.load.image('nsf3_5_glow9',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/9.png');
        this.load.image('nsf3_5_glow10',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/10.png');
        this.load.image('nsf3_5_glow11',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/11.png');
        this.load.image('nsf3_5_glow12',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/12.png');
        this.load.image('nsf3_5_glow13',window.baseUrl+'assets/gradeAssets/nsf3.5/Assets/13.png');
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


     _this.noofAttempts=0;
    _this.AnsTimerCount=0;   
        _this.sceneCount=0;


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
        //baudio.play();
		//baudio.loopFull(0.6);
      _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();

        _this.qArrays1 = [1,2,3,4,5,6];
        //_this.qArrays2 = [7,8,9,10,11,12];

        if(window.languageSelected == "Gujarati")
          _this.qArrays2 = [8,9,10,11,12];
        else if(window.languageSelected == "Kannada")
          _this.qArrays2 = [8,9,10,12];
        else
          _this.qArrays2 = [7,8,9,10,11,12];

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

         _this.bg1 = _this.add.sprite(0,0, 'F2_5backg');
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
       //     case 13:this.question13(); break;

        }
    },

     question1:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("1");
         _this.rightAns = 3;
         _this.getVoice();
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
             // _this.group4 = _this.add.group()
                if(_this.wrong == false)
                 {
                     _this.group1.x=1000;
                     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.rectgroup.x=1000;
                     _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.numgroup.x=1000;
                     _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                 }

            _this.glow1 = _this.add.sprite(164, 254, 'nsf3_5_glow1');
	          _this.glow1.visible = false;
	          console.log("value"+_this.glow1);
            _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_whitebar');
            _this.whitebar.inputEnabled = true;
            _this.whitebar.input.priorityID = 0;
            _this.whitebar.events.onInputDown.add(function(target)
              {
                   if(_this.rect1.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar1");
                          _this.check++;
                          _this.rect1.visible = true;
                          _this.num1.visible = true;
                          _this.rect1.inputEnabled = true;
                          _this.rect1.input.priorityID = 1;
                       // target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect2.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar2");
                          _this.check++;
                          _this.rect2.visible = true;
                          _this.rect2.inputEnabled = true;
                          _this.num2.visible = true;
                          // _this.rect1.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect3.visible == false)
                       {
                          console.log("whitebar3");
                          _this.clickSound.play();
                          _this.check++;
                          _this.rect3.visible = true;
                          _this.rect3.inputEnabled = true;
                          _this.num3.visible = true;
                        //   _this.rect2.inputEnabled = false;
                       //  target.events.onInputDown.removeAll();
                       }

                  else
                      {
                          _this.clickSound.play();
                          console.log("whitebar4");
                          _this.check++;
                          _this.rect4.visible = true;
                          _this.rect4.inputEnabled = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }

              },this)

            _this.rect1 = _this.add.sprite(162, 252, 'nsf3_5_four');
            _this.rect1.visible = false;
            _this.rect1.events.onInputDown.add(function(target)
              {

                  if(_this.check == 1)
                    {
                         console.log("check count="+this.check);
                        _this.clickSound.play();
                         console.log("whitebar1");
                        _this.check--;
                        _this.rect1.visible = false;
                        _this.num1.visible = false;
                     }
                   if(_this.check == 2)
                    {
                         console.log("check count="+this.check);
                        _this.clickSound.play();
                         console.log("whitebar2");
                        _this.check--;
                        _this.rect2.visible = false;
                        _this.num2.visible = false;
                     }
                    if(_this.check == 3)
                    {
                         console.log("check count="+this.check);
                        _this.clickSound.play();
                         console.log("whitebar3");
                        _this.check--;
                        _this.rect3.visible = false;
                        _this.num3.visible = false;
                     }
                    if(_this.check == 4)
                      {
                           console.log("check count="+this.check);
                         _this.clickSound.play();
                         console.log("whitebar4");
                         _this.check--;
                         _this.rect4.visible = false;
                      }

              },this)

            _this.rect2 = _this.add.sprite(295, 252, 'nsf3_5_four');
            _this.rect2.visible = false;
             _this.rect2.events.onInputDown.add(function(target)
              {

                  if(_this.check == 2)
                      {
                          console.log("check count="+this.check);
                         _this.clickSound.play();
                         console.log("whitebar2");
                         _this.check--;
                         _this.rect2.visible = false;
                         _this.num2.visible = false;
                      }
                 if(_this.check == 3)
                      {
                           console.log("check count="+this.check);
                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                         _this.rect3.visible = false;
                         _this.num3.visible = false;
                      }
                   if(_this.check == 4)
                      {
                           console.log("check count="+this.check);
                         _this.clickSound.play();
                         console.log("whitebar4");
                         _this.check--;
                         _this.rect4.visible = false;
                      }
              },this)

            _this.rect3 = _this.add.sprite(428, 252, 'nsf3_5_four');
            _this.rect3.visible = false;
            _this.rect3.events.onInputDown.add(function(target)
              {


                  if(_this.check == 3)
                      {

                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                         console.log("check count="+this.check)
                         _this.rect3.visible = false;
                         _this.num3.visible = false;
                      }

                  if(_this.check == 4)
                      {

                        _this.clickSound.play();
                        console.log("whitebar4");
                        _this.check--;
                        console.log("check count="+this.check)
                        _this.rect4.visible = false;
                      }
              },this)

            _this.rect4 = _this.add.sprite(561, 252, 'nsf3_5_four');
            _this.rect4.visible = false;
            _this.rect4.events.onInputDown.add(function(target)
              {

                  if(_this.check == 4)
                      {

                        _this.clickSound.play();
                        console.log("whitebar4");
                        _this.check--;
                        console.log("check count="+this.check)
                        _this.rect4.visible = false;
                      }
              },this)

             _this.num1 = _this.add.sprite(288, 310, 'nsf3_5_four1');
             _this.num1.visible = false;
             _this.num2 = _this.add.sprite(421, 310, 'nsf3_5_four2');
             _this.num2.visible = false;
             _this.num3 = _this.add.sprite(554, 310, 'nsf3_5_four3');
             _this.num3.visible = false;

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

             _this.group1.add(_this.whitebar);
             _this.group1.add(_this.tickmark);
          //   _this.group1.add(_this.glow1);

               _this.rectgroup.add(_this.rect1);
               _this.rectgroup.add(_this.rect2);
               _this.rectgroup.add(_this.rect3);
               _this.rectgroup.add(_this.rect4);

                _this.numgroup.add(_this.num1);
                _this.numgroup.add(_this.num2);
                _this.numgroup.add(_this.num3);




    },

     question2:function(){
         _this.Question = 2;
          _this.no1++;
         console.log("2");
          _this.rightAns = 2;
          _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
             // _this.group4 = _this.add.group()
                if(_this.wrong == false)
                 {
                     _this.group1.x=1000;
                     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.rectgroup.x=1000;
                     _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.numgroup.x=1000;
                     _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                 }

             _this.glow2 = _this.add.sprite(164, 254, 'nsf3_5_glow2');
     	       _this.glow2.visible = false;
            _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_whitebar');
            _this.whitebar.inputEnabled = true;
            _this.whitebar.input.priorityID = 0;
            _this.whitebar.events.onInputDown.add(function(target)
              {
                   if(_this.rect1.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar1");
                          _this.check++;
                          _this.rect1.visible = true;
                          _this.num1.visible = true;
                          _this.rect1.inputEnabled = true;
                          _this.rect1.input.priorityID = 1;
                       // target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect2.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar2");
                          _this.check++;
                          _this.rect2.visible = true;
                          _this.rect2.inputEnabled = true;
                          _this.num2.visible = true;
                          // _this.rect1.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect3.visible == false)
                       {
                          console.log("whitebar3");
                          _this.clickSound.play();
                          _this.check++;
                          _this.rect3.visible = true;
                          _this.rect3.inputEnabled = true;
                          _this.num3.visible = true;
                        //   _this.rect2.inputEnabled = false;
                       //  target.events.onInputDown.removeAll();
                       }

                  else if(_this.rect4.visible == false)
                      {
                          _this.clickSound.play();
                          console.log("whitebar4");
                          _this.check++;
                          _this.rect4.visible = true;
                          _this.rect4.inputEnabled = true;
                          _this.num4.visible = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }
                else
                    {
                         _this.clickSound.play();
                          console.log("whitebar5");
                          _this.check++;
                          _this.rect5.visible = true;
                          _this.rect5.inputEnabled = true;
                    }

              },this)

             _this.rect1 = _this.add.sprite(164, 252, 'nsf3_5_five');
            _this.rect1.visible = false;
            _this.rect1.events.onInputDown.add(function(target)
              {

                  if(_this.check == 1)
                    {

                        _this.clickSound.play();
                         console.log("whitebar1");
                        _this.check--;
                         console.log("check count="+this.check);
                        _this.rect1.visible = false;
                        _this.num1.visible = false;
                     }
                   if(_this.check == 2)
                    {

                        _this.clickSound.play();
                         console.log("whitebar2");
                        _this.check--;
                          console.log("check count="+this.check);
                        _this.rect2.visible = false;
                        _this.num2.visible = false;
                     }
                    if(_this.check == 3)
                    {

                        _this.clickSound.play();
                         console.log("whitebar3");
                        _this.check--;
                          console.log("check count="+this.check);
                        _this.rect3.visible = false;
                        _this.num3.visible = false;
                     }
                    if(_this.check == 4)
                      {

                         _this.clickSound.play();
                         console.log("whitebar4");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect4.visible = false;
                         _this.num4.visible = false;
                      }
                    if(_this.check == 5)
                      {

                         _this.clickSound.play();
                         console.log("whitebar5");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect5.visible = false;
                      }

              },this)

            _this.rect2 = _this.add.sprite(270, 252, 'nsf3_5_five');
            _this.rect2.visible = false;
             _this.rect2.events.onInputDown.add(function(target)
              {

                  if(_this.check == 2)
                      {

                         _this.clickSound.play();
                         console.log("whitebar2");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect2.visible = false;
                         _this.num2.visible = false;
                      }
                 if(_this.check == 3)
                      {

                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect3.visible = false;
                         _this.num3.visible = false;
                      }
                   if(_this.check == 4)
                      {

                         _this.clickSound.play();
                         console.log("whitebar4");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect4.visible = false;
                         _this.num4.visible = false;
                      }
                     if(_this.check == 5)
                      {

                         _this.clickSound.play();
                         console.log("whitebar5");
                         _this.check--;
                            console.log("check count="+this.check);
                         _this.rect5.visible = false;

                      }
              },this)

            _this.rect3 = _this.add.sprite(376, 252, 'nsf3_5_five');
            _this.rect3.visible = false;
            _this.rect3.events.onInputDown.add(function(target)
              {


                  if(_this.check == 3)
                      {

                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                            console.log("check count="+this.check)
                         _this.rect3.visible = false;
                         _this.num3.visible = false;
                      }

                  if(_this.check == 4)
                      {

                        _this.clickSound.play();
                        console.log("whitebar4");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect4.visible = false;
                        _this.num4.visible = false;
                      }
                 if(_this.check == 5)
                      {

                        _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect5.visible = false;

                      }
              },this)

            _this.rect4 = _this.add.sprite(482, 252, 'nsf3_5_five');
            _this.rect4.visible = false;
            _this.rect4.events.onInputDown.add(function(target)
              {

                  if(_this.check == 4)
                      {

                       _this.clickSound.play();
                        console.log("whitebar4");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect4.visible = false;
                        _this.num4.visible = false;
                      }
                 if(_this.check == 5)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect5.visible = false;

                      }
              },this)

             _this.rect5 = _this.add.sprite(588, 252, 'nsf3_5_five');
            _this.rect5.visible = false;
            _this.rect5.events.onInputDown.add(function(target)
              {

                  if(_this.check == 5)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect5.visible = false;

                      }
              },this)

             _this.num1 = _this.add.sprite(263, 310, 'nsf3_5_five1');
             _this.num1.visible = false;
             _this.num2 = _this.add.sprite(369, 310, 'nsf3_5_five2');
             _this.num2.visible = false;
             _this.num3 = _this.add.sprite(475, 310, 'nsf3_5_five3');
            _this.num3.visible = false;
             _this.num4 = _this.add.sprite(581, 310, 'nsf3_5_five4');
             _this.num4.visible = false;

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);


                 _this.group1.add(_this.whitebar);
                 _this.group1.add(_this.tickmark);
              //   _this.group1.add(_this.glow2);

                _this.rectgroup.add(_this.rect1);
                _this.rectgroup.add(_this.rect2);
                _this.rectgroup.add(_this.rect3);
                _this.rectgroup.add(_this.rect4);
                _this.rectgroup.add(_this.rect5);

                _this.numgroup.add(_this.num1);
                _this.numgroup.add(_this.num2);
                _this.numgroup.add(_this.num3);
                _this.numgroup.add(_this.num4);

      },

     question3:function(){
         _this.Question = 3;
          _this.no1++;
         console.log("3");
          _this.rightAns = 4;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
             // _this.group4 = _this.add.group()
               if(_this.wrong == false)
                {
                     _this.group1.x=1000;
                     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.rectgroup.x=1000;
                     _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.numgroup.x=1000;
                     _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                 }
            _this.glow3 = _this.add.sprite(164, 254, 'nsf3_5_glow3');
            _this.glow3.visible = false;
            _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_whitebar');
            _this.whitebar.inputEnabled = true;
            _this.whitebar.input.priorityID = 0;
            _this.whitebar.events.onInputDown.add(function(target)
              {
                   if(_this.rect1.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar1");
                          _this.check++;
                          _this.rect1.visible = true;
                          _this.num1.visible = true;
                          _this.rect1.inputEnabled = true;
                          _this.rect1.input.priorityID = 1;
                       // target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect2.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar2");
                          _this.check++;
                          _this.rect2.visible = true;
                          _this.rect2.inputEnabled = true;
                          _this.num2.visible = true;
                          // _this.rect1.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect3.visible == false)
                       {
                          console.log("whitebar3");
                          _this.clickSound.play();
                          _this.check++;
                          _this.rect3.visible = true;
                          _this.rect3.inputEnabled = true;
                          _this.num3.visible = true;
                        //   _this.rect2.inputEnabled = false;
                       //  target.events.onInputDown.removeAll();
                       }

                  else if(_this.rect4.visible == false)
                      {
                          _this.clickSound.play();
                          console.log("whitebar4");
                          _this.check++;
                          _this.rect4.visible = true;
                          _this.rect4.inputEnabled = true;
                          _this.num4.visible = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }
                 else if(_this.rect5.visible == false)
                      {
                          _this.clickSound.play();
                          console.log("whitebar4");
                          _this.check++;
                          _this.rect5.visible = true;
                          _this.rect5.inputEnabled = true;
                          _this.num5.visible = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }
                else
                    {
                         _this.clickSound.play();
                          console.log("whitebar5");
                          _this.check++;
                          _this.rect6.visible = true;
                          _this.rect6.inputEnabled = true;
                    }

              },this)

             _this.rect1 = _this.add.sprite(162, 252, 'nsf3_5_six');
            _this.rect1.visible = false;
            _this.rect1.events.onInputDown.add(function(target)
              {

                  if(_this.check == 1)
                    {

                        _this.clickSound.play();
                         console.log("whitebar1");
                        _this.check--;
                         console.log("check count="+this.check);
                        _this.rect1.visible = false;
                        _this.num1.visible = false;
                     }
                   if(_this.check == 2)
                    {

                        _this.clickSound.play();
                         console.log("whitebar2");
                        _this.check--;
                          console.log("check count="+this.check);
                        _this.rect2.visible = false;
                        _this.num2.visible = false;
                     }
                    if(_this.check == 3)
                    {

                        _this.clickSound.play();
                         console.log("whitebar3");
                        _this.check--;
                          console.log("check count="+this.check);
                        _this.rect3.visible = false;
                        _this.num3.visible = false;
                     }
                    if(_this.check == 4)
                      {

                         _this.clickSound.play();
                         console.log("whitebar4");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect4.visible = false;
                         _this.num4.visible = false;
                      }
                    if(_this.check == 5)
                      {

                         _this.clickSound.play();
                         console.log("whitebar5");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect5.visible = false;
                          _this.num5.visible = false;
                      }
                     if(_this.check == 6)
                      {

                         _this.clickSound.play();
                         console.log("whitebar6");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect6.visible = false;
                      }

              },this)

            _this.rect2 = _this.add.sprite(251, 252, 'nsf3_5_six');
            _this.rect2.visible = false;
             _this.rect2.events.onInputDown.add(function(target)
              {

                  if(_this.check == 2)
                      {

                         _this.clickSound.play();
                         console.log("whitebar2");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect2.visible = false;
                         _this.num2.visible = false;
                      }
                 if(_this.check == 3)
                      {

                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect3.visible = false;
                         _this.num3.visible = false;
                      }
                   if(_this.check == 4)
                      {

                         _this.clickSound.play();
                         console.log("whitebar4");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect4.visible = false;
                         _this.num4.visible = false;
                      }
                     if(_this.check == 5)
                      {

                         _this.clickSound.play();
                         console.log("whitebar5");
                         _this.check--;
                            console.log("check count="+this.check);
                         _this.rect5.visible = false;
                          _this.num5.visible = false;

                      }
                      if(_this.check == 6)
                      {

                         _this.clickSound.play();
                         console.log("whitebar6");
                         _this.check--;
                            console.log("check count="+this.check);
                         _this.rect6.visible = false;

                      }
              },this)

            _this.rect3 = _this.add.sprite(340, 252, 'nsf3_5_six');
            _this.rect3.visible = false;
            _this.rect3.events.onInputDown.add(function(target)
              {


                  if(_this.check == 3)
                      {

                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                            console.log("check count="+this.check)
                         _this.rect3.visible = false;
                         _this.num3.visible = false;
                      }

                  if(_this.check == 4)
                      {

                        _this.clickSound.play();
                        console.log("whitebar4");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect4.visible = false;
                        _this.num4.visible = false;
                      }
                 if(_this.check == 5)
                      {

                        _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect5.visible = false;
                        _this.num5.visible = false;

                      }
                if(_this.check == 6)
                      {

                        _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect6.visible = false;

                      }
              },this)

            _this.rect4 = _this.add.sprite(429, 252, 'nsf3_5_six');
           _this.rect4.visible = false;
            _this.rect4.events.onInputDown.add(function(target)
              {

                  if(_this.check == 4)
                      {

                       _this.clickSound.play();
                        console.log("whitebar4");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect4.visible = false;
                        _this.num4.visible = false;
                      }
                 if(_this.check == 5)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect5.visible = false;
                        _this.num5.visible = false;

                      }
                 if(_this.check == 6)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect6.visible = false;

                      }
              },this)

             _this.rect5 = _this.add.sprite(518, 252, 'nsf3_5_six');
            _this.rect5.visible = false;
            _this.rect5.events.onInputDown.add(function(target)
              {

                  if(_this.check == 5)
                      {

                        _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                        console.log("check count="+this.check)
                        _this.rect5.visible = false;
                        _this.num5.visible = false;

                      }
                  if(_this.check == 6)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect6.visible = false;

                      }
              },this)

              _this.rect6 = _this.add.sprite(607, 252, 'nsf3_5_six');
            _this.rect6.visible = false;
            _this.rect6.events.onInputDown.add(function(target)
              {

                  if(_this.check == 6)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect6.visible = false;

                      }
              },this)

             _this.num1 = _this.add.sprite(244, 310, 'nsf3_5_six1');
             _this.num1.visible = false;
             _this.num2 = _this.add.sprite(333, 310, 'nsf3_5_six2');
             _this.num2.visible = false;
             _this.num3 = _this.add.sprite(422, 310, 'nsf3_5_six3');
             _this.num3.visible = false;
             _this.num4 = _this.add.sprite(511, 310, 'nsf3_5_six4');
             _this.num4.visible = false;
             _this.num5 = _this.add.sprite(600, 310, 'nsf3_5_six5');
             _this.num5.visible = false;

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);


                 _this.group1.add(_this.whitebar);
                 _this.group1.add(_this.tickmark);

                _this.rectgroup.add(_this.rect1);
                _this.rectgroup.add(_this.rect2);
                _this.rectgroup.add(_this.rect3);
                _this.rectgroup.add(_this.rect4);
                _this.rectgroup.add(_this.rect5);
                _this.rectgroup.add(_this.rect6);

                _this.numgroup.add(_this.num1);
                _this.numgroup.add(_this.num2);
                _this.numgroup.add(_this.num3);
                _this.numgroup.add(_this.num4);
                _this.numgroup.add(_this.num5);


     },

     question4:function(){

          _this.Question = 4;
          _this.no1++;
         console.log("4");
          _this.rightAns = 5;
         _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
             // _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
                     _this.group1.x=1000;
                     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.rectgroup.x=1000;
                     _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.numgroup.x=1000;
                     _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
            _this.glow4 = _this.add.sprite(164, 254, 'nsf3_5_glow4');
            _this.glow4.visible = false;
            _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_whitebar');
            _this.whitebar.inputEnabled = true;
            _this.whitebar.input.priorityID = 0;
            _this.whitebar.events.onInputDown.add(function(target)
              {
                   if(_this.rect1.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar1");
                          _this.check++;
                          _this.rect1.visible = true;
                          _this.num1.visible = true;
                          _this.rect1.inputEnabled = true;
                          _this.rect1.input.priorityID = 1;
                       // target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect2.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar2");
                          _this.check++;
                          _this.rect2.visible = true;
                          _this.rect2.inputEnabled = true;
                          _this.num2.visible = true;
                          // _this.rect1.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect3.visible == false)
                       {
                          console.log("whitebar3");
                          _this.clickSound.play();
                          _this.check++;
                          _this.rect3.visible = true;
                          _this.rect3.inputEnabled = true;
                          _this.num3.visible = true;
                        //   _this.rect2.inputEnabled = false;
                       //  target.events.onInputDown.removeAll();
                       }

                  else if(_this.rect4.visible == false)
                      {
                          _this.clickSound.play();
                          console.log("whitebar4");
                          _this.check++;
                          _this.rect4.visible = true;
                          _this.rect4.inputEnabled = true;
                          _this.num4.visible = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }
                 else if(_this.rect5.visible == false)
                      {
                          _this.clickSound.play();
                          console.log("whitebar5");
                          _this.check++;
                          _this.rect5.visible = true;
                          _this.rect5.inputEnabled = true;
                          _this.num5.visible = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }
                  else if(_this.rect6.visible == false)
                      {
                          _this.clickSound.play();
                          console.log("whitebar6");
                          _this.check++;
                          _this.rect6.visible = true;
                          _this.rect6.inputEnabled = true;
                          _this.num6.visible = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }
                else
                    {
                         _this.clickSound.play();
                          console.log("whitebar5");
                          _this.check++;
                          _this.rect7.visible = true;
                          _this.rect7.inputEnabled = true;
                    }

              },this)

             _this.rect1 = _this.add.sprite(164, 252, 'nsf3_5_seven');
            _this.rect1.visible = false;
            _this.rect1.events.onInputDown.add(function(target)
              {

                  if(_this.check == 1)
                    {

                        _this.clickSound.play();
                         console.log("whitebar1");
                        _this.check--;
                         console.log("check count="+this.check);
                        _this.rect1.visible = false;
                        _this.num1.visible = false;
                     }
                   if(_this.check == 2)
                    {

                        _this.clickSound.play();
                         console.log("whitebar2");
                        _this.check--;
                          console.log("check count="+this.check);
                        _this.rect2.visible = false;
                        _this.num2.visible = false;
                     }
                    if(_this.check == 3)
                    {

                        _this.clickSound.play();
                         console.log("whitebar3");
                        _this.check--;
                          console.log("check count="+this.check);
                        _this.rect3.visible = false;
                        _this.num3.visible = false;
                     }
                    if(_this.check == 4)
                      {

                         _this.clickSound.play();
                         console.log("whitebar4");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect4.visible = false;
                         _this.num4.visible = false;
                      }
                    if(_this.check == 5)
                      {

                         _this.clickSound.play();
                         console.log("whitebar5");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect5.visible = false;
                          _this.num5.visible = false;
                      }
                     if(_this.check == 6)
                      {

                         _this.clickSound.play();
                         console.log("whitebar6");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect6.visible = false;
                         _this.num6.visible = false;
                      }
                      if(_this.check == 7)
                      {

                         _this.clickSound.play();
                         console.log("whitebar7");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect7.visible = false;
                      }

              },this)

            _this.rect2 = _this.add.sprite(240, 252, 'nsf3_5_seven');
            _this.rect2.visible = false;
             _this.rect2.events.onInputDown.add(function(target)
              {

                  if(_this.check == 2)
                      {

                         _this.clickSound.play();
                         console.log("whitebar2");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect2.visible = false;
                         _this.num2.visible = false;
                      }
                 if(_this.check == 3)
                      {

                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect3.visible = false;
                         _this.num3.visible = false;
                      }
                   if(_this.check == 4)
                      {

                         _this.clickSound.play();
                         console.log("whitebar4");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect4.visible = false;
                         _this.num4.visible = false;
                      }
                     if(_this.check == 5)
                      {

                         _this.clickSound.play();
                         console.log("whitebar5");
                         _this.check--;
                            console.log("check count="+this.check);
                         _this.rect5.visible = false;
                          _this.num5.visible = false;

                      }
                      if(_this.check == 6)
                      {

                         _this.clickSound.play();
                         console.log("whitebar6");
                         _this.check--;
                            console.log("check count="+this.check);
                         _this.rect6.visible = false;
                         _this.num6.visible = false;

                      }
                       if(_this.check == 7)
                      {

                         _this.clickSound.play();
                         console.log("whitebar7");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect7.visible = false;
                      }
              },this)

            _this.rect3 = _this.add.sprite(316, 252, 'nsf3_5_seven');
            _this.rect3.visible = false;
            _this.rect3.events.onInputDown.add(function(target)
              {


                  if(_this.check == 3)
                      {

                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                            console.log("check count="+this.check)
                         _this.rect3.visible = false;
                         _this.num3.visible = false;
                      }

                  if(_this.check == 4)
                      {

                        _this.clickSound.play();
                        console.log("whitebar4");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect4.visible = false;
                        _this.num4.visible = false;
                      }
                 if(_this.check == 5)
                      {

                        _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect5.visible = false;
                        _this.num5.visible = false;

                      }
                if(_this.check == 6)
                      {

                        _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect6.visible = false;
                        _this.num6.visible = false;

                      }
                  if(_this.check == 7)
                      {

                         _this.clickSound.play();
                         console.log("whitebar7");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect7.visible = false;
                      }
              },this)

            _this.rect4 = _this.add.sprite(392, 252, 'nsf3_5_seven');
           _this.rect4.visible = false;
            _this.rect4.events.onInputDown.add(function(target)
              {

                  if(_this.check == 4)
                      {

                       _this.clickSound.play();
                        console.log("whitebar4");
                        _this.check--;
                           console.log("check count="+this.check)
                        _this.rect4.visible = false;
                        _this.num4.visible = false;
                      }
                 if(_this.check == 5)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect5.visible = false;
                        _this.num5.visible = false;

                      }
                 if(_this.check == 6)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect6.visible = false;
                        _this.num6.visible = false;

                      }
                  if(_this.check == 7)
                      {

                         _this.clickSound.play();
                         console.log("whitebar7");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect7.visible = false;
                      }
              },this)

             _this.rect5 = _this.add.sprite(468, 252, 'nsf3_5_seven');
            _this.rect5.visible = false;
            _this.rect5.events.onInputDown.add(function(target)
              {

                  if(_this.check == 5)
                      {

                        _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                        console.log("check count="+this.check)
                        _this.rect5.visible = false;
                        _this.num5.visible = false;

                      }
                  if(_this.check == 6)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect6.visible = false;
                        _this.num6.visible = false;

                      }
                   if(_this.check == 7)
                      {

                         _this.clickSound.play();
                         console.log("whitebar7");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect7.visible = false;
                      }
              },this)

              _this.rect6 = _this.add.sprite(544, 252, 'nsf3_5_seven');
            _this.rect6.visible = false;
            _this.rect6.events.onInputDown.add(function(target)
              {

                  if(_this.check == 6)
                      {

                       _this.clickSound.play();
                        console.log("whitebar5");
                        _this.check--;
                          console.log("check count="+this.check)
                        _this.rect6.visible = false;
                        _this.num6.visible = false;

                      }
                    if(_this.check == 7)
                      {

                         _this.clickSound.play();
                         console.log("whitebar7");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect7.visible = false;
                      }
              },this)

            _this.rect7 = _this.add.sprite(620, 252, 'nsf3_5_seven');
            _this.rect7.visible = false;
            _this.rect7.events.onInputDown.add(function(target)
              {

                    if(_this.check == 7)
                      {

                         _this.clickSound.play();
                         console.log("whitebar7");
                         _this.check--;
                           console.log("check count="+this.check);
                         _this.rect7.visible = false;
                      }
              },this)

             _this.num1 = _this.add.sprite(233, 310, 'nsf3_5_seven1');
             _this.num1.visible = false;
             _this.num2 = _this.add.sprite(309, 310, 'nsf3_5_seven2');
             _this.num2.visible = false;
             _this.num3 = _this.add.sprite(385, 310, 'nsf3_5_seven3');
             _this.num3.visible = false;
             _this.num4 = _this.add.sprite(461, 310, 'nsf3_5_seven4');
             _this.num4.visible = false;
             _this.num5 = _this.add.sprite(537, 310, 'nsf3_5_seven5');
             _this.num5.visible = false;
             _this.num6 = _this.add.sprite(613, 310, 'nsf3_5_seven6');
             _this.num6.visible = false;

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);


                 _this.group1.add(_this.whitebar);
                 _this.group1.add(_this.tickmark);

                _this.rectgroup.add(_this.rect1);
                _this.rectgroup.add(_this.rect2);
                _this.rectgroup.add(_this.rect3);
                _this.rectgroup.add(_this.rect4);
                _this.rectgroup.add(_this.rect5);
                _this.rectgroup.add(_this.rect6);
                _this.rectgroup.add(_this.rect7);

                _this.numgroup.add(_this.num1);
                _this.numgroup.add(_this.num2);
                _this.numgroup.add(_this.num3);
                _this.numgroup.add(_this.num4);
                _this.numgroup.add(_this.num5);
                _this.numgroup.add(_this.num6);

     },

     question5:function(){

          _this.Question = 5;
         _this.no1++;
         console.log("5");
         _this.rightAns = 2;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
                     _this.group1.x=1000;
                     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.rectgroup.x=1000;
                     _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                     _this.numgroup.x=1000;
                     _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
                    _this.glow5 = _this.add.sprite(164, 254, 'nsf3_5_glow5');
                    _this.glow5.visible = false;
            _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_whitebar');
            _this.whitebar.inputEnabled = true;
            _this.whitebar.input.priorityID = 0;
            _this.whitebar.events.onInputDown.add(function(target)
              {
                   if(_this.rect1.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar1");
                          _this.check++;
                          _this.rect1.visible = true;
                          _this.num1.visible = true;
                          _this.rect1.inputEnabled = true;
                          _this.rect1.input.priorityID = 1;
                       // target.events.onInputDown.removeAll();
                       }
                    else if(_this.rect2.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar2");
                          _this.check++;
                          _this.rect2.visible = true;
                          _this.rect2.inputEnabled = true;
                          _this.num2.visible = true;
                          // _this.rect1.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                       }

                  else
                      {
                          _this.clickSound.play();
                          console.log("whitebar4");
                          _this.check++;
                          _this.rect3.visible = true;
                          _this.rect3.inputEnabled = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }

              },this)

            _this.rect1 = _this.add.sprite(164, 252, 'nsf3_5_three');
            _this.rect1.visible = false;
            _this.rect1.events.onInputDown.add(function(target)
              {

                  if(_this.check == 1)
                    {
                         console.log("check count="+this.check);
                        _this.clickSound.play();
                         console.log("whitebar1");
                        _this.check--;
                        _this.rect1.visible = false;
                        _this.num1.visible = false;
                     }
                   if(_this.check == 2)
                    {
                         console.log("check count="+this.check);
                        _this.clickSound.play();
                         console.log("whitebar2");
                        _this.check--;
                        _this.rect2.visible = false;
                        _this.num2.visible = false;
                     }
                    if(_this.check == 3)
                    {
                         console.log("check count="+this.check);
                        _this.clickSound.play();
                         console.log("whitebar3");
                        _this.check--;
                        _this.rect3.visible = false;

                     }


              },this)

            _this.rect2 = _this.add.sprite(341, 252, 'nsf3_5_three');
            _this.rect2.visible = false;
             _this.rect2.events.onInputDown.add(function(target)
              {

                  if(_this.check == 2)
                      {
                          console.log("check count="+this.check);
                         _this.clickSound.play();
                         console.log("whitebar2");
                         _this.check--;
                         _this.rect2.visible = false;
                         _this.num2.visible = false;
                      }
                 if(_this.check == 3)
                      {
                           console.log("check count="+this.check);
                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                         _this.rect3.visible = false;

                      }


              },this)

            _this.rect3 = _this.add.sprite(517, 252, 'nsf3_5_three');
            _this.rect3.visible = false;
            _this.rect3.events.onInputDown.add(function(target)
              {


                  if(_this.check == 3)
                      {

                         _this.clickSound.play();
                         console.log("whitebar3");
                         _this.check--;
                         console.log("check count="+this.check)
                         _this.rect3.visible = false;

                      }


              },this)



             _this.num1 = _this.add.sprite(334, 310, 'nsf3_5_three1');
             _this.num1.visible = false;
             _this.num2 = _this.add.sprite(510, 310, 'nsf3_5_three2');
             _this.num2.visible = false;


             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

             _this.group1.add(_this.whitebar);
             _this.group1.add(_this.tickmark);

               _this.rectgroup.add(_this.rect1);
               _this.rectgroup.add(_this.rect2);
               _this.rectgroup.add(_this.rect3);


                _this.numgroup.add(_this.num1);
                _this.numgroup.add(_this.num2);


     },

     question6:function(){

           _this.Question = 6;
          _this.no1++;
         console.log("6");
         _this.rightAns = 1;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
             _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.rectgroup.x=1000;
             _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.numgroup.x=1000;
             _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
            _this.glow6 = _this.add.sprite(164, 254, 'nsf3_5_glow6');
            _this.glow6.visible = false;
            _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_whitebar');
            _this.whitebar.inputEnabled = true;
            _this.whitebar.input.priorityID = 0;
            _this.whitebar.events.onInputDown.add(function(target)
              {
                   if(_this.rect1.visible == false)
                       {
                          _this.clickSound.play();
                          console.log("whitebar1");
                          _this.check++;
                          _this.rect1.visible = true;
                          _this.num1.visible = true;
                          _this.rect1.inputEnabled = true;
                          _this.rect1.input.priorityID = 1;
                       // target.events.onInputDown.removeAll();
                       }

                  else
                      {
                          _this.clickSound.play();
                          console.log("whitebar4");
                          _this.check++;
                          _this.rect2.visible = true;
                          _this.rect2.inputEnabled = true;
                          //   _this.rect3.inputEnabled = false;
                          //  target.events.onInputDown.removeAll();
                      }

              },this)

            _this.rect1 = _this.add.sprite(164, 252, 'nsf3_5_two');
            _this.rect1.visible = false;
            _this.rect1.events.onInputDown.add(function(target)
              {

                  if(_this.check == 1)
                    {
                         console.log("check count="+this.check);
                        _this.clickSound.play();
                         console.log("whitebar1");
                        _this.check--;
                        _this.rect1.visible = false;
                        _this.num1.visible = false;
                     }
                   if(_this.check == 2)
                    {
                         console.log("check count="+this.check);
                        _this.clickSound.play();
                         console.log("whitebar2");
                        _this.check--;
                        _this.rect2.visible = false;

                     }

              },this)

            _this.rect2 = _this.add.sprite(430, 252, 'nsf3_5_two');
            _this.rect2.visible = false;
             _this.rect2.events.onInputDown.add(function(target)
              {

                  if(_this.check == 2)
                      {
                          console.log("check count="+this.check);
                         _this.clickSound.play();
                         console.log("whitebar2");
                         _this.check--;
                         _this.rect2.visible = false;
                      }
              },this)





             _this.num1 = _this.add.sprite(423, 310, 'nsf3_5_two1');
             _this.num1.visible = false;

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

             _this.group1.add(_this.whitebar);
             _this.group1.add(_this.tickmark);

               _this.rectgroup.add(_this.rect1);
               _this.rectgroup.add(_this.rect2);

               _this.numgroup.add(_this.num1);

    },

     question7:function(){

           _this.Question = 7;
           _this.no2++;
           console.log("7");
           _this.rightAns = 7;
           _this.snap = 1;
           _this.getVoice();
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
             _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.rectgroup.x=1000;
             _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.numgroup.x=1000;
             _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
         
                _this.glow7 = _this.add.sprite(164, 260, 'nsf3_5_glow7');
                _this.glow7.visible = false;
               _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_t8');
               _this.whitebar.frame = 1;

               _this.graphics = _this.add.graphics(90, -15);
                _this.graphics.lineStyle(2, 0x0000FF, 1);
               _this.graphics.beginFill(0xFF0000, 0.5);
                _this.graphics.drawRect(50, 265, 120, 70);
               
              // _this.graphics.endFill();
               _this.graphics.alpha=0;

           _this.graphics.inputEnabled=true;
           _this.graphics.events.onInputDown.add(function(target){
            console.log("here>>>");
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics.input.allowVerticalDrag = false;
            _this.graphics.events.onDragStart.add(function(target){
                _this.snapSound.play();
            },_this);
            _this.graphics.events.onDragUpdate.add(function(target){
                 console.log(target.x);
                if(target.x>=620)
                {
                    target.x = 620;
                }
                if(target.x<90)
                {
                    target.x = 90;
                }
                if(target.x>=90 && target.x<120)
                {

                    this.whitebar.frame=1;
                }
                if(target.x>=120 && target.x<178)
                {

                    this.whitebar.frame=2;
                }
               if(target.x>=180 && target.x<243)
                {

                     this.whitebar.frame=3;
                }
                if(target.x>=245 && target.x<308)
                {

                   this.whitebar.frame=4;
                }
                if(target.x>=310 && target.x<375)
                {

                   this.whitebar.frame=5;
                }
                 if(target.x>=375 && target.x<445)
                {

                   this.whitebar.frame=6;
                }
                 if(target.x>=445 && target.x<510)
                {

                    this.whitebar.frame=7;
                }
                 if(target.x>=513 && target.x<573)
                {

                   this.whitebar.frame=8;
                }
                 if(target.x>=573 && target.x<620)
                {
                   this.whitebar.frame=9;
                }
            },this);
             _this.graphics.events.onDragStop.add(function(target){
                 console.log("$$$"+target.x);
                 if(target.x > 590 && target.y <= 620)
                     {
                         console.log("$$$"+target.x);
                         _this.whitebar.frame =9;
                     }
                _this.snapSound.play();
            },_this);

         },this);

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

              _this.group1.add(_this.whitebar);
              _this.group1.add(_this.tickmark);
              _this.group1.add(_this.graphics);

     },

     question8:function(){

          _this.Question = 8;
           _this.no2++;
           console.log("8");
           _this.rightAns = 5;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
             _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.rectgroup.x=1000;
             _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.numgroup.x=1000;
             _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
                    _this.glow8 = _this.add.sprite(164, 260, 'nsf3_5_glow8');
                    _this.glow8.visible = false;
               _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_t9');
               _this.whitebar.frame = 1;

               _this.graphics = _this.add.graphics(90, -15);
                _this.graphics.lineStyle(2, 0x0000FF, 1);
               _this.graphics.beginFill(0xFF0000, 0.5);
                _this.graphics.drawRect(50, 265, 105, 70);
               
              // _this.graphics.endFill();
               _this.graphics.alpha=0;

           _this.graphics.inputEnabled=true;
           _this.graphics.events.onInputDown.add(function(target){
            console.log("here>>>");
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics.input.allowVerticalDrag = false;
            _this.graphics.events.onDragStart.add(function(target){
                _this.snapSound.play();
            },_this);
            _this.graphics.events.onDragUpdate.add(function(target){
                 console.log(target.x);
                if(target.x>=620)
                {
                    target.x = 620;
                }
                if(target.x<90)
                {
                    target.x = 90;
                }
                if(target.x>=90 && target.x<120)
                {

                    this.whitebar.frame=1;
                }
                if(target.x>=120 && target.x<178)
                {

                    this.whitebar.frame=2;
                }
               if(target.x>=180 && target.x<235)
                {

                     this.whitebar.frame=3;
                }
                if(target.x>=236 && target.x<293)
                {

                   this.whitebar.frame=4;
                }
                if(target.x>=294 && target.x<352)
                {

                   this.whitebar.frame=5;
                }
                 if(target.x>=353 && target.x<411)
                {

                   this.whitebar.frame=6;
                }
                 if(target.x>=412 && target.x<469)
                {

                    this.whitebar.frame=7;
                }
                 if(target.x>=470 && target.x<527)
                {

                   this.whitebar.frame=8;
                }
                 if(target.x>=528 && target.x<588)
                {
                   this.whitebar.frame=9;
                }
                  if(target.x>=589 && target.x<620)
                {
                   this.whitebar.frame=10;
                }
            },this);
             _this.graphics.events.onDragStop.add(function(target){
                  if(target.x>=589 && target.x<625)
                {
                   this.whitebar.frame=10;
                }
                _this.snapSound.play();
            },_this);

         },this);
         
         
                _this.graphics.events.onDragStop.add(function(target){
                _this.snapSound.play();
                 },_this);

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

              _this.group1.add(_this.whitebar);
              _this.group1.add(_this.tickmark);
              _this.group1.add(_this.graphics);

     },

     question9:function(){

          _this.Question = 9;
           _this.no2++;
           console.log("9");
           _this.rightAns = 8;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
             _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.rectgroup.x=1000;
             _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.numgroup.x=1000;
             _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
                    _this.glow9 = _this.add.sprite(164, 260, 'nsf3_5_glow9');
                    _this.glow9.visible = false;
               _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_t10');
               _this.whitebar.frame = 1;

                _this.graphics = _this.add.graphics(90, -15);
                _this.graphics.lineStyle(2, 0x0000FF, 1);
                _this.graphics.beginFill(0xFF0000, 0.5);
                _this.graphics.drawRect(50, 265, 100, 70);
               _this.graphics.endFill();
               _this.graphics.alpha=0;

           _this.graphics.inputEnabled=true;
           _this.graphics.events.onInputDown.add(function(target){
            console.log("here>>>");
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics.input.allowVerticalDrag = false;
               _this.graphics.events.onDragStart.add(function(target){
                _this.snapSound.play();
            },_this);
            _this.graphics.events.onDragUpdate.add(function(target){
                 console.log(target.x);
                if(target.x>=620)
                {
                    target.x = 620;
                }
                if(target.x<90)
                {
                    target.x = 90;
                }
                if(target.x>=90 && target.x<120)
                {

                    this.whitebar.frame=1;
                }
                if(target.x>=120 && target.x<171)
                {

                    this.whitebar.frame=2;
                }
               if(target.x>=172 && target.x<223)
                {

                     this.whitebar.frame=3;
                }
                if(target.x>=224 && target.x<275)
                {

                   this.whitebar.frame=4;
                }
                if(target.x>=275 && target.x<329)
                {

                   this.whitebar.frame=5;
                }
                 if(target.x>=330 && target.x<380)
                {

                   this.whitebar.frame=6;
                }
                 if(target.x>=381 && target.x<435)
                {

                    this.whitebar.frame=7;
                }
                 if(target.x>=435 && target.x<490)
                {

                   this.whitebar.frame=8;
                }
                 if(target.x>=491 && target.x<541)
                {
                   this.whitebar.frame=9;
                }
                  if(target.x>=542 && target.x<592)
                {
                   this.whitebar.frame=10;
                }
                  if(target.x>=594 && target.x<=620)
                {
                   this.whitebar.frame=11;
                }
            },this);
                _this.graphics.events.onDragStop.add(function(target){
                if(target.x>=594 && target.x<=625)
                {
                   this.whitebar.frame=11;
                }
                _this.snapSound.play();
            },_this);
         },this);

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

              _this.group1.add(_this.whitebar);
              _this.group1.add(_this.tickmark);
              _this.group1.add(_this.graphics);
     },

     question10:function(){

         _this.Question = 10;
           _this.no2++;
           console.log("10");
           _this.rightAns = 9;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
             _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.rectgroup.x=1000;
             _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.numgroup.x=1000;
             _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
                    _this.glow10 = _this.add.sprite(164, 260, 'nsf3_5_glow10');
                    _this.glow10.visible = false;
               _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_t11');
               _this.whitebar.frame = 1;

                _this.graphics = _this.add.graphics(90, -15);
                _this.graphics.lineStyle(2, 0x0000FF, 1);
                _this.graphics.beginFill(0xFF0000, 0.5);
                _this.graphics.drawRect(50, 265, 97, 70);
               _this.graphics.endFill();
               _this.graphics.alpha=0;

           _this.graphics.inputEnabled=true;
           _this.graphics.events.onInputDown.add(function(target){
            console.log("here>>>");
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics.input.allowVerticalDrag = false;
            _this.graphics.events.onDragStart.add(function(target){
                _this.snapSound.play();
            },_this);
            _this.graphics.events.onDragUpdate.add(function(target){
                 console.log(target.x);
                if(target.x>=620)
                {
                    target.x = 620;
                }
                if(target.x<90)
                {
                    target.x = 90;
                }
                if(target.x>=90 && target.x<120)
                {

                    this.whitebar.frame=1;
                }
                if(target.x>=120 && target.x<165)
                {

                    this.whitebar.frame=2;
                }
               if(target.x>=166 && target.x<212)
                {

                     this.whitebar.frame=3;
                }
                if(target.x>=213 && target.x<261)
                {

                   this.whitebar.frame=4;
                }
                if(target.x>=262 && target.x<309)
                {

                   this.whitebar.frame=5;
                }
                 if(target.x>=310 && target.x<357)
                {

                   this.whitebar.frame=6;
                }
                 if(target.x>=358 && target.x<406)
                {

                    this.whitebar.frame=7;
                }
                 if(target.x>=407 && target.x<454)
                {

                   this.whitebar.frame=8;
                }
                 if(target.x>=455 && target.x<501)
                {
                   this.whitebar.frame=9;
                }
                  if(target.x>=502 && target.x<551)
                {
                   this.whitebar.frame=10;
                }
                  if(target.x>=552 && target.x<595)
                {
                   this.whitebar.frame=11;
                }
                  if(target.x>=596 && target.x<=620)
                {
                   this.whitebar.frame=12;
                }
            },this);
                _this.graphics.events.onDragStop.add(function(target){
                       if(target.x>=596 && target.x<625)
                {
                   this.whitebar.frame=12;
                }
                _this.snapSound.play();
            },_this);
         },this);

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

              _this.group1.add(_this.whitebar);
              _this.group1.add(_this.tickmark);
              _this.group1.add(_this.graphics);
     },

     question11:function(){

         _this.Question = 11;
           _this.no2++;
           console.log("11");
           _this.rightAns = 6;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
             _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.rectgroup.x=1000;
             _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.numgroup.x=1000;
             _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
                _this.glow11 = _this.add.sprite(164, 260, 'nsf3_5_glow11');
            	  _this.glow11.visible = false;
               _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_t12');
               _this.whitebar.frame = 1;

                _this.graphics = _this.add.graphics(90, -15);
                _this.graphics.lineStyle(2, 0x0000FF, 1);
                _this.graphics.beginFill(0xFF0000, 0.5);
                _this.graphics.drawRect(50, 265, 97, 70);
                _this.graphics.endFill();
                _this.graphics.alpha=0;

           _this.graphics.inputEnabled=true;
           _this.graphics.events.onInputDown.add(function(target){
            console.log("here>>>");
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics.input.allowVerticalDrag = false;
               _this.graphics.events.onDragStart.add(function(target){
                _this.snapSound.play();
            },_this);
            _this.graphics.events.onDragUpdate.add(function(target){
                 console.log(target.x);
               if(target.x>=630)
                {
                    target.x = 630;
                }
                if(target.x<90)
                {
                    target.x = 90;
                }
                if(target.x>=90 && target.x<120)
                {

                    this.whitebar.frame=1;
                }
                if(target.x>=120 && target.x<162)
                {

                    this.whitebar.frame=2;
                }
               if(target.x>=163 && target.x<204)
                {

                     this.whitebar.frame=3;
                }
                if(target.x>=205 && target.x<249)
                {

                   this.whitebar.frame=4;
                }
                if(target.x>=250 && target.x<293)
                {

                   this.whitebar.frame=5;
                }
                 if(target.x>=294 && target.x<337)
                {

                   this.whitebar.frame=6;
                }
                 if(target.x>=338 && target.x<382)
                {

                    this.whitebar.frame=7;
                }
                 if(target.x>=382 && target.x<427)
                {

                   this.whitebar.frame=8;
                }
                 if(target.x>=427 && target.x<471)
                {
                   this.whitebar.frame=9;
                }
                  if(target.x>=471 && target.x<515)
                {
                   this.whitebar.frame=10;
                }
                  if(target.x>=515 && target.x<559)
                {
                   this.whitebar.frame=11;
                }
                  if(target.x>=559 && target.x<600)
                {
                   this.whitebar.frame=12;
                }
                   if(target.x>=603 && target.x<=630)
                {
                   this.whitebar.frame=13;
                }
            },this);
                _this.graphics.events.onDragStop.add(function(target){
                if(target.x>=603 && target.x<635)
                {
                   this.whitebar.frame=13;
                }
                _this.snapSound.play();
            },_this);
         },this);

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

              _this.group1.add(_this.whitebar);
              _this.group1.add(_this.tickmark);
              _this.group1.add(_this.graphics);
     },

     question12:function(){

          _this.Question = 12;
           _this.no2++;
           console.log("12");
           _this.rightAns = 13;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
             _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.rectgroup.x=1000;
             _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.numgroup.x=1000;
             _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
                    _this.glow12 = _this.add.sprite(164, 260, 'nsf3_5_glow12');
                    _this.glow12.visible = false;
               _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_t13');
               _this.whitebar.frame = 1;

               _this.graphics = _this.add.graphics(90, -15);
                _this.graphics.lineStyle(2, 0x0000FF, 1);
                _this.graphics.beginFill(0xFF0000, 0.5);
                _this.graphics.drawRect(50, 265, 86, 70);
               _this.graphics.endFill();
               _this.graphics.alpha=0;

           _this.graphics.inputEnabled=true;
           _this.graphics.events.onInputDown.add(function(target){
            console.log("here>>>");
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics.input.allowVerticalDrag = false;
               _this.graphics.events.onDragStart.add(function(target){
                _this.snapSound.play();
            },_this);
            _this.graphics.events.onDragUpdate.add(function(target){
                 console.log(target.x);
                if(target.x>=630)
                {
                    target.x = 630;
                }
                if(target.x<90)
                {
                    target.x = 90;
                }
                if(target.x>=90 && target.x<120)
                {

                    this.whitebar.frame=1;
                }
                if(target.x>=120 && target.x<154)
                {

                    this.whitebar.frame=2;
                }
               if(target.x>=155 && target.x<188)
                {

                     this.whitebar.frame=3;
                }
                if(target.x>=189 && target.x<223)
                {

                   this.whitebar.frame=4;
                }
                if(target.x>=224 && target.x<258)
                {

                   this.whitebar.frame=5;
                }
                 if(target.x>=259 && target.x<294)
                {

                   this.whitebar.frame=6;
                }
                 if(target.x>=295 && target.x<329)
                {

                    this.whitebar.frame=7;
                }
                 if(target.x>=330 && target.x<364)
                {

                   this.whitebar.frame=8;
                }
                 if(target.x>=365 && target.x<398)
                {
                   this.whitebar.frame=9;
                }
                  if(target.x>=399 && target.x<435)
                {
                   this.whitebar.frame=10;
                }
                  if(target.x>=436 && target.x<471)
                {
                   this.whitebar.frame=11;
                }
                  if(target.x>=471 && target.x<505)
                {
                   this.whitebar.frame=12;
                }
                   if(target.x>=506 && target.x<541)
                {
                   this.whitebar.frame=13;
                }
                 if(target.x>=542 && target.x<577)
                {
                   this.whitebar.frame=14;
                }
                  if(target.x>=578 && target.x<605)
                {
                   this.whitebar.frame=15;
                }
                if(target.x>=606 && target.x<=630)
                {
                   this.whitebar.frame=16;
                }
            },this);
                _this.graphics.events.onDragStop.add(function(target){
                if(target.x>=606 && target.x<635)
                 {
                   this.whitebar.frame=16;
                 }
                _this.snapSound.play();
            },_this);
         },this);

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

              _this.group1.add(_this.whitebar);
              _this.group1.add(_this.tickmark);
              _this.group1.add(_this.graphics);
     },

     question13:function(){

          _this.Question = 13;
           _this.no2++;
           console.log("13");
           _this.rightAns = 14;
           _this.getVoice();
         
              _this.group1=_this.add.group();
              _this.rectgroup = _this.add.group();
              _this.numgroup = _this.add.group();
              _this.group4 = _this.add.group()
                if(_this.wrong == false)
                    {
             _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.rectgroup.x=1000;
             _this.tween=_this.add.tween(_this.rectgroup).to( { x: 0 }, 1500, 'Linear', true,0);
             _this.numgroup.x=1000;
             _this.tween=_this.add.tween(_this.numgroup).to( { x: 0 }, 1500, 'Linear', true,0);
                    }
                    _this.glow13 = _this.add.sprite(164, 260, 'nsf3_5_glow13');
                    _this.glow13.visible = false;
               _this.whitebar = _this.add.sprite(160, 250, 'nsf3_5_t14');
               _this.whitebar.frame = 1;

                _this.graphics = _this.add.graphics(90, -15);
                _this.graphics.lineStyle(2, 0x0000FF, 1);
                _this.graphics.beginFill(0xFF0000, 0.5);
                _this.graphics.drawRect(50, 265, 80, 70);
               _this.graphics.endFill();
               _this.graphics.alpha=0;

           _this.graphics.inputEnabled=true;
           _this.graphics.events.onInputDown.add(function(target){
            console.log("here>>>");
            target.inputEnabled = true;
            target.input.enableDrag();
            console.log(target.x);
            _this.graphics.input.allowVerticalDrag = false;
               _this.graphics.events.onDragStart.add(function(target){
                _this.snapSound.play();
            },_this);
            _this.graphics.events.onDragUpdate.add(function(target){
                 console.log(target.x);
               if(target.x>=630)
                {
                    target.x = 630;
                }
                if(target.x<90)
                {
                    target.x = 90;
                }
                if(target.x>=90 && target.x<120)
                {

                    this.whitebar.frame=1;
                }
                if(target.x>=120 && target.x<147)
                {

                    this.whitebar.frame=2;
                }
               if(target.x>=148 && target.x<176)
                {

                     this.whitebar.frame=3;
                }
                if(target.x>=176 && target.x<206)
                {

                   this.whitebar.frame=4;
                }
                if(target.x>=206 && target.x<236)
                {

                   this.whitebar.frame=5;
                }
                 if(target.x>=236 && target.x<265)
                {

                   this.whitebar.frame=6;
                }
                 if(target.x>=265 && target.x<293)
                {

                    this.whitebar.frame=7;
                }
                 if(target.x>=294 && target.x<325)
                {

                   this.whitebar.frame=8;
                }
                 if(target.x>=325 && target.x<354)
                {
                   this.whitebar.frame=9;
                }
                  if(target.x>=354 && target.x<382)
                {
                   this.whitebar.frame=10;
                }
                  if(target.x>=382 && target.x<411)
                {
                   this.whitebar.frame=11;
                }
                  if(target.x>=411 && target.x<442)
                {
                   this.whitebar.frame=12;
                }
                   if(target.x>=442 && target.x<471)
                {
                   this.whitebar.frame=13;
                }
                 if(target.x>=471 && target.x<500)
                {
                   this.whitebar.frame=14;
                }
                  if(target.x>=500 && target.x<530)
                {
                   this.whitebar.frame=15;
                }
                if(target.x>=530 && target.x<560)
                {
                   this.whitebar.frame=16;
                }
                  if(target.x>=560 && target.x<588)
                {
                   this.whitebar.frame=17;
                }  
                if(target.x>=589 && target.x<617)
                {
                   this.whitebar.frame=18;
                }  
                if(target.x>=617 && target.x<630)
                {
                   this.whitebar.frame=19;
                }
            },this);
             _this.graphics.events.onDragStop.add(function(target){
                 console.log(target.x);
                     if(target.x>=617 && target.x<635)
                {
                    console.log("^^^^")
                   this.whitebar.frame=19;
                }
                _this.snapSound.play();
            },_this);
         },this);

             _this.tickmark = _this.add.sprite(850,285,'nsf3_5_tickmark');
             _this.tickmark.anchor.setTo(0.5);
             _this.tickmark.scale.setTo(1.5,1.5);
             _this.tickmark.inputEnabled = true;
             _this.tickmark.events.onInputDown.add(_this.toCheckAnswer,_this);

              _this.group1.add(_this.whitebar);
              _this.group1.add(_this.tickmark);
              _this.group1.add(_this.graphics);
     },



    toCheckAnswer :function (target){
           _this.clickSound.play();
            //_this.noofAttempts++;


          _this.tickmark.frame = 1;
         target.events.onInputDown.removeAll();

				 if(_this.Question == 1)
				 {
					 console.log(_this.Question);
					 if(_this.check == _this.rightAns)
							 {

                  _this.time.events.add(500, function(){
                 _this.glow1.visible = true;
                  },_this)
                  _this.time.events.add(1000, function(){
                 _this.glow1.visible = false;
                  },_this)
                  _this.time.events.add(1500, function(){
                 _this.glow1.visible = true;
                  },_this)
                  _this.time.events.add(2000, function(){
                 _this.glow1.visible = false;
                  },_this)
							  	_this.correctAns();
							 }
					 else
							 {
									 _this.wrongAns();
							 }
             }

         if(_this.Question == 2)
               {
                console.log(_this.Question);
                if(_this.check == _this.rightAns)
                    {
                        _this.time.events.add(500, function(){
                       _this.glow2.visible = true;
                        },_this)
                        _this.time.events.add(1000, function(){
                       _this.glow2.visible = false;
                        },_this)
                        _this.time.events.add(1500, function(){
                       _this.glow2.visible = true;
                        },_this)
                        _this.time.events.add(2000, function(){
                       _this.glow2.visible = false;
                        },_this)
                       _this.correctAns();
                    }
                else
                    {
                        _this.wrongAns();
                    }

				 }

         if(_this.Question == 3)
         {
          console.log(_this.Question);
          if(_this.check == _this.rightAns)
              {
                  _this.time.events.add(500, function(){
                 _this.glow3.visible = true;
                  },_this)
                  _this.time.events.add(1000, function(){
                 _this.glow3.visible = false;
                  },_this)
                  _this.time.events.add(1500, function(){
                 _this.glow3.visible = true;
                  },_this)
                  _this.time.events.add(2000, function(){
                 _this.glow3.visible = false;
                  },_this)
                 _this.correctAns();
              }
          else
              {
                  _this.wrongAns();
              }

   }

   if(_this.Question == 4)
   {
    console.log(_this.Question);
    if(_this.check == _this.rightAns)
        {
            _this.time.events.add(500, function(){
           _this.glow4.visible = true;
            },_this)
            _this.time.events.add(1000, function(){
           _this.glow4.visible = false;
            },_this)
            _this.time.events.add(1500, function(){
           _this.glow4.visible = true;
            },_this)
            _this.time.events.add(2000, function(){
           _this.glow4.visible = false;
            },_this)
           _this.correctAns();
        }
    else
        {
            _this.wrongAns();
        }

  }

  if(_this.Question == 5)
  {
   console.log(_this.Question);
   if(_this.check == _this.rightAns)
       {
           _this.time.events.add(500, function(){
          _this.glow5.visible = true;
           },_this)
           _this.time.events.add(1000, function(){
          _this.glow5.visible = false;
           },_this)
           _this.time.events.add(1500, function(){
          _this.glow5.visible = true;
           },_this)
           _this.time.events.add(2000, function(){
          _this.glow5.visible = false;
           },_this)
          _this.correctAns();
       }
   else
       {
           _this.wrongAns();
       }

 }

 if(_this.Question == 6)
 {
  console.log(_this.Question);
  if(_this.check == _this.rightAns)
      {
          _this.time.events.add(500, function(){
         _this.glow6.visible = true;
          },_this)
          _this.time.events.add(1000, function(){
         _this.glow6.visible = false;
          },_this)
          _this.time.events.add(1500, function(){
         _this.glow6.visible = true;
          },_this)
          _this.time.events.add(2000, function(){
         _this.glow6.visible = false;
          },_this)
         _this.correctAns();
      }
  else
      {
          _this.wrongAns();
      }

}

 if(_this.Question == 7)
  {
    console.log(_this.Question);
      if(_this.whitebar.frame == _this.rightAns)
        {
         _this.time.events.add(500, function(){
        _this.glow7.visible = true;
         },_this)
         _this.time.events.add(1000, function(){
        _this.glow7.visible = false;
         },_this)
         _this.time.events.add(1500, function(){
        _this.glow7.visible = true;
         },_this)
         _this.time.events.add(2000, function(){
        _this.glow7.visible = false;
         },_this)
        _this.correctAns();
     }
 else
     {
         _this.wrongAns();
     }
   }

    if(_this.Question == 8)
     {
      console.log(_this.Question);
      if(_this.whitebar.frame == _this.rightAns)
          {
              _this.time.events.add(500, function(){
             _this.glow8.visible = true;
              },_this)
              _this.time.events.add(1000, function(){
             _this.glow8.visible = false;
              },_this)
              _this.time.events.add(1500, function(){
             _this.glow8.visible = true;
              },_this)
              _this.time.events.add(2000, function(){
             _this.glow8.visible = false;
              },_this)
             _this.correctAns();
          }
      else
          {
              _this.wrongAns();
          }
        }
    if(_this.Question == 9)
      {
           console.log(_this.Question);
           if(_this.whitebar.frame == _this.rightAns)
               {
                   _this.time.events.add(500, function(){
                  _this.glow9.visible = true;
                   },_this)
                   _this.time.events.add(1000, function(){
                  _this.glow9.visible = false;
                   },_this)
                   _this.time.events.add(1500, function(){
                  _this.glow9.visible = true;
                   },_this)
                   _this.time.events.add(2000, function(){
                  _this.glow9.visible = false;
                   },_this)
                  _this.correctAns();
               }
           else
               {
                   _this.wrongAns();
               }
             }
    if(_this.Question == 10)
       {
                console.log(_this.Question);
                if(_this.whitebar.frame == _this.rightAns)
                    {
                        _this.time.events.add(500, function(){
                       _this.glow10.visible = true;
                        },_this)
                        _this.time.events.add(1000, function(){
                       _this.glow10.visible = false;
                        },_this)
                        _this.time.events.add(1500, function(){
                       _this.glow10.visible = true;
                        },_this)
                        _this.time.events.add(2000, function(){
                       _this.glow10.visible = false;
                        },_this)
                       _this.correctAns();
                    }
                else
                    {
                        _this.wrongAns();
                    }
                  }
    if(_this.Question == 11)
      {
                     console.log(_this.Question);
                     if(_this.whitebar.frame == _this.rightAns)
                         {
                             _this.time.events.add(500, function(){
                            _this.glow11.visible = true;
                             },_this)
                             _this.time.events.add(1000, function(){
                            _this.glow11.visible = false;
                             },_this)
                             _this.time.events.add(1500, function(){
                            _this.glow11.visible = true;
                             },_this)
                             _this.time.events.add(2000, function(){
                            _this.glow11.visible = false;
                             },_this)
                            _this.correctAns();
                         }
                     else
                         {
                             _this.wrongAns();
                         }
                       }
    if(_this.Question == 12)
      {
                          console.log(_this.Question);
                          if(_this.whitebar.frame == _this.rightAns)
                              {
                                  _this.time.events.add(500, function(){
                                 _this.glow12.visible = true;
                                  },_this)
                                  _this.time.events.add(1000, function(){
                                 _this.glow12.visible = false;
                                  },_this)
                                  _this.time.events.add(1500, function(){
                                 _this.glow12.visible = true;
                                  },_this)
                                  _this.time.events.add(2000, function(){
                                 _this.glow12.visible = false;
                                  },_this)
                                 _this.correctAns();
                              }
                          else
                              {
                                  _this.wrongAns();
                              }
                            }
    if(_this.Question == 13)
      {
                               console.log(_this.Question);
                               if(_this.whitebar.frame == _this.rightAns)
                                   {
                                       _this.time.events.add(500, function(){
                                      _this.glow13.visible = true;
                                       },_this)
                                       _this.time.events.add(1000, function(){
                                      _this.glow13.visible = false;
                                       },_this)
                                       _this.time.events.add(1500, function(){
                                      _this.glow13.visible = true;
                                       },_this)
                                       _this.time.events.add(2000, function(){
                                      _this.glow13.visible = false;
                                       },_this)
                                      _this.correctAns();
                                   }
                               else
                                   {
                                       _this.wrongAns();
                                   }
                                 }

},


    correctAns:function(target)
	{

        //_this.stopvoice();
         _this.wrong = false;
         _this.check=0;
       // target.events.onInputDown.removeAll();
       // _this.rightmark.inputEnabled=false;
         _this.wrongAnswer = false;
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();


         // absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

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





        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		//console.log(_this.starAnim);

		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();
        _this.count1++;

     
		_this.celebration = true;
     	_this.celebr.play();



        _this.time.events.add(2500, _this.removeCelebration, _this);

        _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

	},

    wrongAns:function(target)
	{
       // _this.stopvoice();
        _this.check = 0;
        _this.noofAttempts++;
        // _this.currentTime = window.timeSaveFunc();

          _this.shake.shake(10, _this.tickmark);
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

         _this.wrongAnswer = true;
         _this.timer1.stop();
         _this.wrong = false;
        _this.time.events.add(500, function(){
        _this.tickmark.frame = 0;
        },_this)

        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        _this.time.events.add(1000, function(){
        _this.group1.destroy();
        _this.rectgroup.destroy();
        _this.numgroup.destroy();
        _this.wrong = true;
        _this.getQuestion();

        },_this);

	},

    removeCelebration:function()
	{
        console.log("removeCeleb");
		_this.celebration = false;
        _this.correct=0;
        _this.count=0;
         _this.qno++;


		  if(_this.qno<6)
                    {



                        _this.group1.destroy();
                        _this.rectgroup.destroy();
                        _this.numgroup.destroy();
                        _this.getQuestion();

                    }

                else
                    {

                        // _this.stopvoice();
                         _this.state.start('nsf3_5Score');
                  }


	},

    
 getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.qno])
        {
            case 1:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5a.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5a.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5a.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5a.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5a.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 2:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5b.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5b.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5b.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5b.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5b.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 3:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5c.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5c.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5c.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5c.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5c.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 4:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5d.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5d.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5d.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5d.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5d.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 5:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5e.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5e.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5e.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5e.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5e.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5e.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 6:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5f.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5f.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5f.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5f.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5f.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5f.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 7:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5g.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5g.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5g.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5g.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5g.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5g.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5g.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5g.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5g.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 8:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5h.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5h.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5h.mp3");
                    }
                     else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5h.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5h.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5h.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5h.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5h.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5h.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 9:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5i.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5i.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5i.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5i.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5i.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5i.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5i.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5i.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5i.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 10:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5j.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5j.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5j.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5j.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5j.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5j.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5j.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5j.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5j.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
          case 11:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5k.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5k.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5k.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5k.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5k.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5k.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5k.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5k.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5k.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;  
                
                 case 12:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/English/nsf3.5l.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Hindi/nsf3.5l.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Kannada/nsf3.5l.mp3");
                    }
                     else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Gujarati/nsf3.5l.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Marathi/nsf3.5l.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Telugu/nsf3.5l.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Tamil/nsf3.5l.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Urdu/nsf3.5l.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.5/Odiya/nsf3.5l.mp3");
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
    }   


};
