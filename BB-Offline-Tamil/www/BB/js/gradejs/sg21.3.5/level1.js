Game.sg21_3_5level1=function(){};
	
	
	

Game.sg21_3_5level1.prototype={
    init:function(game)
	{
		_this = this;
       
		telInitializer.gameIdInit("SG23_1_5",gradeSelected);
	},

    preload:function(game){
  if(!window.grade5SG3){

            window.grade5SG3 = true;

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

            this.load.image('sg21_3_5_protracter',window.baseUrl+'assets/gradeAssets/sg21.3.5/1.png');
         this.load.image('sg21_3_5_graphic',window.baseUrl+'assets/gradeAssets/sg21.3.5/graphic.png');
         this.load.image('sg21_3_5_degree',window.baseUrl+'assets/gradeAssets/sg21.3.5/degree.png');
        
         this.load.atlas('sg21_3_5_tick',window.baseUrl+'assets/gradeAssets/sg21.3.5/rightmark.png' ,window.baseUrl+'json/gradeJson/sg21.3.5/rightmark.json');
         this.load.atlas('sg21_3_5_line',window.baseUrl+'assets/gradeAssets/sg21.3.5/line.png' ,window.baseUrl+'json/gradeJson/sg21.3.5/line.json');
         this.load.atlas('sg21_3_5_angle',window.baseUrl+'assets/gradeAssets/sg21.3.5/angle1.png' ,window.baseUrl+'json/gradeJson/sg21.3.5/angle1.json');
         this.load.atlas('sg21_3_5_numbers',window.baseUrl+'assets/gradeAssets/sg21.3.5/numbers.png' ,window.baseUrl+'json/gradeJson/sg21.3.5/numbers.json');
       }

    },
    
create:function(game){
    _this.bg1=null;
    _this.qno=0;
    _this.starsGroup=0;
    _this.no1=0;
    _this.no2=0;
    _this.count1=0;
    _this.count=0;
    _this.qArrays=[];
    _this.flagmain11Anim=0;
    _this.animlev1=0;
    _this.a1=0;
    _this.Sprite=0;
    _this.cloud2=0;_this.cloud3=0;_this.cloud4=0;_this.cloud5=0;_this.cloud6=0;_this.cloud7=0;_this.cloud8=0;
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
    _this.sg21_3_5_tick=0;
    _this.numGroup=0;
    _this.enterTxt=0;
    _this.txtbox=0;
    _this.grpnum=new Array();
    _this.boxclick=0;
    _this.minutes=0;_this.seconds=0;_this.counterForTimer=0;
    _this.box=0;
    _this.radius = 100;
    _this.cx = 0;
    _this.cy = 0;
    _this.Question = 0;
    _this.wrongAnswer = false;

    _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount=0;

          _this.clickSound = _this.add.audio('ClickSound');
          _this.waudio = _this.add.audio('waudio');
          _this.celebr = _this.add.audio('celebr');
          _this.snapSound = _this.add.audio('snapSound');
    
         
        //baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
    
        _this.qArrays = this.shuffle(_this.qArrays);
        
       
       // counterText=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

         _this.bg1 = _this.add.sprite(0,0, 'commonBg2');
        _this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
      //  _this.footer = _this.add.sprite(0,480,'footer');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
      //  _this.backbtn.events.onInputDown.removeAll();
        this.stopvoice();
       _this.clickSound.play();

       _this.state.start('grade1levelSelectionScreen',true,false);
    },_this,1,0,2);
        
   _this.timebg=_this.add.sprite(305,6,'Level42C_timer');
    _this.timebg.scale.setTo(1,1);
        
    _this.timeDisplay = _this.add.text(330,22,_this.minutes + ' : '+ _this.seconds);
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
            console.log("SPEAKER");
        },_this,1,0,2);

         _this.generateStarsForTheScene(6);
       
               _this.no1++;
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
            _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount++;


            _this.timer = _this.time.create(false);

            _this.timer.loop(1000, function(){
                _this.AnsTimerCount++;
            }, this);
           
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
    	console.log("get"+_this.qArrays[_this.qno]);
       
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
    
loadobject:function()
    {
      console.log("hiiiiiii???????????????????");
     _this.img = _this.add.sprite(420,295,'sg21_3_5_protracter');
     _this.img.anchor.setTo(0.5);
     _this.img.scale.setTo(1,1); 


     _this.line1 = _this.add.sprite(415,434,'sg21_3_5_line');
     _this.line1.anchor.setTo(0.021,0.5);
     //_this.line1.alpha = 0;
     _this.line1.scale.setTo(0.98,0.98); 


     _this.line2 = _this.add.sprite(415,431,'sg21_3_5_line');
     _this.line2.anchor.setTo(0.021,0.5);//0,0.5
     _this.line2.scale.setTo(0.98,0.98); 
     _this.line2.angle=-90;
     //_this.line2.alpha = 0;
     _this.line2.name="sg21_3_5_line";
     _this.line2.inputEnabled = true;
     _this.line2.input.useHandCursor = true;

     _this.c = this.add.graphics(0,0);
     // graphics.lineStyle(2, 0xffd900, 1);
     _this.c.beginFill(0xEC008C, 1);
     _this.c.drawCircle(413, 432, 15);
     

     _this.cX = 416;
     _this.cY = 432;
    
    _this.circle = _this.add.graphics();
    //_this.circle.pivot.setTo(0.5);
    _this.circle.lineStyle(2,0xFF0000);
    _this.circle.drawCircle(_this.cX,_this.cY,_this.radius);
    _this.circle.alpha = 0;

   
     

      _this.x = 124;
       _this.y = 285;  
    
    },
    
    
   
question1:function(){
       
       _this.Question = 1;
          _this.no1++;
   
       _this.loadobject();
      _this.getVoice();
       _this.slideGrp = _this.add.group(); 
    
     _this.angle = _this.add.sprite(420,403,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=22;
    _this.angle.alpha=0;
     
     _this.number1 = _this.add.sprite(467,380,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(2,2); 
     _this.number1.frame=9;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(487,380,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(2,2); 
     _this.number2.frame=5;
     _this.number2.alpha=0;
     
 
     _this.degree = _this.add.sprite(498,360,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(2,2); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2); 
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }
    },
    

        

    
    question2:function(){
         _this.Question = 2;
          _this.no1++;
         console.log("2");
        
         _this.loadobject();
         _this.getVoice();
         _this.slideGrp = _this.add.group(); 

     
     _this.angle = _this.add.sprite(420,403,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=18;
    _this.angle.alpha=0;
     
     _this.number1 = _this.add.sprite(469,395,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(2,2); 
     _this.number1.frame=7;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(489,395,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(2,2); 
     _this.number2.frame=0;
     _this.number2.alpha=0;
     
     _this.degree = _this.add.sprite(509,375,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(2,2); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2); 
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }

  
    },
    
    question3:function(){
         _this.Question = 3;
          _this.no1++;
         console.log("3");
        
        _this.loadobject();
         _this.getVoice();
        _this.slideGrp = _this.add.group(); 
   
        
     
     _this.angle = _this.add.sprite(420,403,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=25;
    _this.angle.alpha=0;
     
     _this.number1 = _this.add.sprite(467,380,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(2,2); 
     _this.number1.frame=1;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(487,380,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(2,2); 
     _this.number2.frame=2;
     _this.number2.alpha=0;
     
     _this.number3 = _this.add.sprite(507,380,'sg21_3_5_numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.scale.setTo(1.95,1.95); 
     _this.number3.frame=5;
     _this.number3.alpha=0;
     
     _this.degree = _this.add.sprite(527,360,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(2,2); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2); 
    _this.slideGrp.add(_this.number3); 
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }  

     
    },
    
    question4:function(){
         _this.Question = 4;
          _this.no1++;
         console.log("4");
        
         _this.loadobject();
          _this.getVoice();
         _this.slideGrp = _this.add.group(); 

        
     _this.angle = _this.add.sprite(420,403,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=16;
    _this.angle.alpha=0;
     
     _this.number1 = _this.add.sprite(487,400,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(2,2); 
     _this.number1.frame=4;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(507,400,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(2,2); 
     _this.number2.frame=5;
     _this.number2.alpha=0;
     
   
     
     _this.degree = _this.add.sprite(524,380,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(2,2); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2); 
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }
        
    },
    
    question5:function(){
  _this.Question = 5;
          _this.no1++;
         console.log("5");
        
         _this.loadobject();
          _this.getVoice();
         _this.slideGrp = _this.add.group(); 

         
     _this.angle = _this.add.sprite(420,403,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=27;
     _this.angle.alpha=0;
     
    _this.number1 = _this.add.sprite(467,380,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(2,2); 
     _this.number1.frame=1;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(487,380,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(2,2); 
     _this.number2.frame=5;
     _this.number2.alpha=0;
     
     _this.number3 = _this.add.sprite(507,380,'sg21_3_5_numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.scale.setTo(1.95,1.95); 
     _this.number3.frame=0;
     _this.number3.alpha=0;
     
     _this.degree = _this.add.sprite(527,360,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(2,2); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2);
    _this.slideGrp.add(_this.number3);
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }
           
    },
    
    question6:function(){
         _this.Question = 6;
          _this.no1++;
         console.log("6");
        _this.loadobject();
          _this.getVoice();
         _this.slideGrp = _this.add.group(); 

        
     _this.angle = _this.add.sprite(450,403,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=14;
     _this.angle.alpha=0;
     
     _this.number1 = _this.add.sprite(527,410,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(1.5,1.5); 
     _this.number1.frame=2;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(547,410,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(1.5,1.5); 
     _this.number2.frame=0;
     _this.number2.alpha=0;
     
     _this.degree = _this.add.sprite(560,397,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(1.5,1.5); 
     _this.degree.alpha=0;
           
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2); 
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }
        
             
         
    },
    
    question7:function(){
         _this.Question = 7;
          _this.no1++;
         console.log("7");
        
        _this.loadobject();
          _this.getVoice();
         _this.slideGrp = _this.add.group(); 

        
     
     _this.angle = _this.add.sprite(420,402,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=29;
     _this.angle.alpha=0;
     
    _this.number1 = _this.add.sprite(467,380,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(2,2); 
     _this.number1.frame=1;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(487,380,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(2,2); 
     _this.number2.frame=6;
     _this.number2.alpha=0;
     
     _this.number3 = _this.add.sprite(507,380,'sg21_3_5_numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.scale.setTo(1.95,1.95); 
     _this.number3.frame=5;
     _this.number3.alpha=0;
     
     _this.degree = _this.add.sprite(527,360,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(2,2); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2);
    _this.slideGrp.add(_this.number3);
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }
        
        
        
    },
    
    question8:function(){
         _this.Question = 8;
          _this.no1++;
         console.log("8");
        
        _this.loadobject();
          _this.getVoice();
         _this.slideGrp = _this.add.group(); 

      _this.angle = _this.add.sprite(510,405,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=14;
     _this.angle.alpha=0;
     
     _this.number1 = _this.add.sprite(570,418,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(1,1); 
     _this.number1.frame=1;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(580,418,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(1,1); 
     _this.number2.frame=0;
     _this.number2.alpha=0;
     
     _this.degree = _this.add.sprite(590,410,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(1,1); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2); 
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }
        
        
           
    },
    
    question9:function(){
         _this.Question = 9;
          _this.no1++;
         console.log("9");
        
         _this.loadobject();
          _this.getVoice();
         _this.slideGrp = _this.add.group(); 
  
      _this.angle = _this.add.sprite(420,403,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=23;
    _this.angle.alpha=0;
     
     _this.number1 = _this.add.sprite(467,380,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(2,2); 
     _this.number1.frame=1;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(487,380,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(2,2); 
     _this.number2.frame=0;
     _this.number2.alpha=0;
     
     _this.number3 = _this.add.sprite(507,380,'sg21_3_5_numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.scale.setTo(2,2); 
     _this.number3.frame=5;
     _this.number3.alpha=0;
     
     _this.degree = _this.add.sprite(527,360,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(2,2); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2); 
    _this.slideGrp.add(_this.number3); 
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }
     
        
         
    },
    
    question10:function(){
         _this.Question = 10;
          _this.no1++;
         console.log("10");
         _this.loadobject();
          _this.getVoice();
         _this.slideGrp = _this.add.group(); 

     
     _this.angle = _this.add.sprite(420,403,'sg21_3_5_angle');
     _this.angle.anchor.setTo(0.5);
     _this.angle.scale.setTo(0.95,0.95); 
     _this.angle.frame=17;
    _this.angle.alpha=0;
     
     _this.number1 = _this.add.sprite(487,400,'sg21_3_5_numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.scale.setTo(2,2); 
     _this.number1.frame=6;
     _this.number1.alpha=0;
     
     _this.number2 = _this.add.sprite(507,400,'sg21_3_5_numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.scale.setTo(2,2); 
     _this.number2.frame=0;
     _this.number2.alpha=0;
  
     
     _this.degree = _this.add.sprite(527,380,'sg21_3_5_degree');
     _this.degree.anchor.setTo(0.5);
     _this.degree.scale.setTo(2,2); 
     _this.degree.alpha=0;
           
     _this.tickmark = _this.add.sprite(860,300,'sg21_3_5_tick');
     _this.tickmark.anchor.setTo(0.5);
     _this.tickmark.scale.setTo(1.5,1.5); 
     _this.tickmark.inputEnabled = true;
     _this.tickmark.events.onInputDown.add(_this.toCheckangle,_this);
           
     _this.rectgraphic = _this.add.sprite(415,240,'sg21_3_5_graphic');
     _this.rectgraphic.anchor.setTo(0.645,0.5);
     _this.rectgraphic.scale.setTo(3.46,1.8);
     _this.rectgraphic.angle=-90;
        
     _this.rectgraphic.alpha= 0;
     _this.rectgraphic.inputEnabled = true;
     _this.rectgraphic.input.useHandCursor = true;
     _this.rectgraphic.input.enableDrag(true);
     _this.rectgraphic.events.onDragUpdate.add(_this.onDragUpdate, _this);
           
     _this.slideGrp.add(_this.img);
     _this.slideGrp.add(_this.line1);
     _this.slideGrp.add(_this.line2);
     _this.slideGrp.add(_this.c);  
     _this.slideGrp.add(_this.tickmark);
     _this.slideGrp.add(_this.rectgraphic);   
    _this.slideGrp.add(_this.angle); 
    _this.slideGrp.add(_this.number1); 
    _this.slideGrp.add(_this.number2); 
    _this.slideGrp.add(_this.degree); 
        
        if(_this.wrongAnswer == false)
        {
            _this.slideGrp.x=1000;
            _this.tween1=_this.add.tween(_this.slideGrp).to( { x: 0 }, 1500, 'Linear', true,0);    
        
        }
    
       
    },
 
    moveSpriteOnCircle:function(x,y) {
    
        _this.theta = Math.atan2(x-_this.cX, y-_this.cY)
        console.log("theta"+_this.theta);
        var newX = Math.sin(_this.theta) * _this.radius;
             console.log("newx"+newX);
        var newY = Math.cos(_this.theta) * _this.radius;
              console.log("newy"+newY);
        _this.rectgraphic.x=_this.cX + newX;
             console.log("rectgraphic"+_this.rectgraphic.x);
        _this.rectgraphic.y=_this.cY + newY;
              console.log("rectographicy"+_this.rectgraphic.y);
}, 
    
    onDragUpdate:function() {
        var mouseX= _this.input.x;
        var mouseY = _this.input.y;
          console.log("value"+mouseX);
          console.log("value"+mouseY);
            if(mouseY >= 430)
                {
                    mouseY = 430;
                }

        _this.moveSpriteOnCircle(mouseX, mouseY);
            console.log("line2"+_this.line2);
             console.log("rect"+_this.rectgraphic);
        _this.line2.rotation = _this.physics.arcade.angleBetween(_this.line2,_this.rectgraphic);
            console.log(_this.line2.rotation)
        _this.rectgraphic.rotation = _this.physics.arcade.angleBetween(_this.rectgraphic,_this.line2);   
        console.log(" "+_this.rectgraphic.rotation);
        _this.rectgraphic.events.onDragStop.removeAll(); 
},
    
    toCheckangle :function (target){
           _this.clickSound.play();
            _this.noofAttempts++;


         target.events.onInputDown.removeAll();

        _this.tickmark.frame=1;
        if(_this.Question == 1) {
            if(_this.line2.angle > -97 && _this.line2.angle < -93)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

               if(_this.Question == 2) {
            if(_this.line2.angle > -72 && _this.line2.angle < -68)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

              if(_this.Question == 3) {
            if(_this.line2.angle > -127 && _this.line2.angle < -123)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

              if(_this.Question == 4) {
            if(_this.line2.angle > -47 && _this.line2.angle < -43)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

              if(_this.Question == 5) {
            if(_this.line2.angle > -152 && _this.line2.angle < -148)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }
              if(_this.Question == 6) {
            if(_this.line2.angle > -22 && _this.line2.angle < -18)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

              if(_this.Question == 7) {
            if(_this.line2.angle > -167 && _this.line2.angle < -163)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

              if(_this.Question == 8) {
            if(_this.line2.angle > -12 && _this.line2.angle < -8)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

              if(_this.Question == 9) {
            if(_this.line2.angle > -107 && _this.line2.angle < -103)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

              if(_this.Question == 10) {
            if(_this.line2.angle > -62 && _this.line2.angle < -58)
            {
               //console.log("owow");

                _this.correctAns();
            }
            else

                _this.wrongAns();
        }

        
    
},
    
    
    correctAns:function(target)
	{
        
        _this.stopvoice();
        
        
       // target.events.onInputDown.removeAll();
       // _this.speaker.inputEnabled=false;
       // _this.rightmark.inputEnabled=false;
         _this.wrongAnswer = false;
        //_this.noofAttempts++;
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
        
       
		
         if(_this.Question==1)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14,15,16,17,18,19,20,21,22]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                            
                        }
           
        else if(_this.Question==2)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14,15,16,17,18]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                            
                        }
        
         else if(_this.Question==3)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14,15,16,17,18,19,20,21,22,23,24,25]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.number3.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                            
                        }
        else if(_this.Question==4)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14,15]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                            
                        }
        
         else if(_this.Question==5)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.number3.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                            
                        }
         else if(_this.Question==6)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                            
                        }
          else if(_this.Question==7)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.number3.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                        }
      
         else if(_this.Question==8)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                        }
        
         else if(_this.Question==9)
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14,15,16,17,18,19,20,21,22,23]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.number3.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                        }
      
         else
                        {
                            _this.line1.frame=1;
                            _this.line2.frame=1;
                            _this.angle.alpha=1;
                            _this.image=_this.angle.animations.add('play',[12,13,14,15,16,17]); 
                            _this.image.play(10);
                            _this.time.events.add(1500, function(){    
                            _this.number1.alpha=1;
                            _this.number2.alpha=1;
                            _this.degree.alpha=1;
                           
                              },_this);
                        }
        
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		//console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();
        _this.count1++;
       
       // _this.speaker.inputEnabled=false;
		_this.celebration = true;
     	_this.celebr.play();
        
        
        
        _this.time.events.add(3000, _this.removeEverthing, _this);	

        _this.questionid=1;
                telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
  
	},

    wrongAns:function(target)
	{
        _this.stopvoice();
        //_this.noofAttempts++;
        // _this.currentTime = window.timeSaveFunc();
   
          _this.shake.shake(10, _this.slideGrp);
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
        _this.slideGrp.destroy();
        _this.getQuestion();
            
        },_this);
          
	},
        
removeEverthing:function() 
    {
		//_this.timer1.stop();
      //  gameBoxGroup.destroy();
      //  _this.crocsGroup.destroy();
      //  _this.objGroup.destroy();
        _this.qno++;
        //console.log("--------------------------"+_this.no1);
        if(_this.qno<6)
        {
            
         //_this.wrong = true;
        // _this.timer1.stop();
         _this.slideGrp.destroy();
         _this.time.events.add(1000, function(){  
         _this.getQuestion();
         },_this);
               
        }
        else
        {
			 _this.stopvoice();
          //  _this.timer1.stop();
          //  _this.timer1 = null;
            _this.countIncrement = 0;
            _this.counterForTimer = null;
             _this.state.start('sg21_3_5Score',true,false);
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
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5a.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5a.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5a.mp3");
                    }
                else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5a.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5a.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5a.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 2:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5b.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5b.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5b.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5b.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5b.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5b.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 3:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5c.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5c.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5c.mp3");
                    }
                         else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5c.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5c.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5c.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 4:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5d.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5d.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5d.mp3");
                    }
                         else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5d.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5d.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5d.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 5:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5e.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5e.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5e.mp3");
                    }
                         else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5e.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5e.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5e.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 6:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5f.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5f.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5f.mp3");
                    }
                         else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5f.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5f.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5f.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 7:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5g.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5g.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5g.mp3");
                    }
                         else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5g.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5g.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5g.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5g.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5g.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5g.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 8:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5h.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5h.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5h.mp3");
                    }
                         else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5h.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5h.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5h.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5h.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5h.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5h.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 9:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5i.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5i.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5i.mp3");
                    }
                         else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5i.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5i.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5i.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5i.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5i.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5i.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
                
            case 10:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/English/sg21.3.5j.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Hindi/sg21.3.5j.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Kannada/sg21.3.5j.mp3");
                    }
                         else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Gujarathi/sg21.3.5j.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Marathi/sg21.3.5j.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Telugu/sg21.3.5j.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Tamil/sg21.3.5j.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Urdu/sg21.3.5j.mp3");
                    }
                    else 
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg21.3.5/Odiya/sg21.3.5j.mp3");
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
         
       