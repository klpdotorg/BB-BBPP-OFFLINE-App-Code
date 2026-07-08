Game.nsf1_5level1=function(){};
	
	
	

Game.nsf1_5level1.prototype={
    init:function(game)
	{
		_this = this;
        telInitializer.gameIdInit("NSF1_5",gradeSelected);
	},

    preload:function(game){
  if(!window.grade5NSF1){

            window.grade5NSF1 = true;

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

            this.load.image('nsf1_4_bgA',window.baseUrl+'assets/gradeAssets/nsf1.4/bg1.png');

            this.load.atlas('nsf1_5_calNum',window.baseUrl+'assets/gradeAssets/nsf1.5/calNum.png' ,window.baseUrl+'json/gradeJson/nsf1.5/calNum.json');
         this.load.atlas('nsf1_5_RightButton',window.baseUrl+'assets/gradeAssets/nsf1.5/RightButton.png' ,window.baseUrl+'json/gradeJson/nsf1.5/RightButton.json');
         this.load.atlas('nsf1_5_EraseButton',window.baseUrl+'assets/gradeAssets/nsf1.5/EraseButton.png' ,window.baseUrl+'json/gradeJson/nsf1.5/EraseButton.json');

         this.load.image('nsf1_5_bg1',window.baseUrl+'assets/gradeAssets/nsf1.5/bg1.png');
         this.load.image('nsf1_5_apple',window.baseUrl+'assets/gradeAssets/nsf1.5/apple.png');
         this.load.image('nsf1_5_shadow',window.baseUrl+'assets/gradeAssets/nsf1.5/shadow.png');
         this.load.atlas('nsf1_5_basket',window.baseUrl+'assets/gradeAssets/nsf1.5/basket.png' ,window.baseUrl+'json/gradeJson/nsf1.5/basket.json');
         this.load.atlas('nsf1_5_cloud',window.baseUrl+'assets/gradeAssets/nsf1.5/cloud.png' ,window.baseUrl+'json/gradeJson/nsf1.5/cloud.json');
       //  this.load.atlas('box1','assets/gameAssets/box.png' ,'json/box.json');
          this.load.atlas('nsf1_5_box',window.baseUrl+'assets/gradeAssets/nsf1.5/5.png' ,window.baseUrl+'json/gradeJson/nsf1.5/5.json');
         this.load.image('nsf1_5_line',window.baseUrl+'assets/gradeAssets/nsf1.5/6.png');
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
    _this.optionsgrp=0;
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
    _this.numberPadShown  = false;
    _this.minutes=0;_this.seconds=0;_this.counterForTimer=0;
    _this.temp;
    _this.soundPlayed = true;

    _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;

    

          _this.clickSound = _this.add.audio('ClickSound');
          _this.waudio = _this.add.audio('waudio');
          _this.celebr = _this.add.audio('celebr');
          _this.snapSound = _this.add.audio('snapSound');
        //baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12];
    
         _this.qArrays = this.shuffle(_this.qArrays);
        
       
       // counterText=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

         _this.bg1 = _this.add.sprite(0,0, 'nsf1_4_bgA');
        _this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
       // _this.footer = _this.add.sprite(0,480,'footer');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopVoice();
       _this.clickSound = this.add.audio('ClickSound');
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
            _this.getVoice();},_this,1,0,2);//,function(){console.log("speaker on");/*this.speakeron();*/},this,0,1,2);

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
            case 11:this.question11(); break;
            case 12:this.question12(); break;   
                
        }
    },
    dragFromBasket:function()
    {
        _this.apple1.x = _this.input.x;
        _this.apple1.y = _this.input.y;
    },
 
bright:function(target)
    {
        
    if(_this.selectedBox == "box1A")
    {
         _this.box1A.frame = 2;
        
         if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
        if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
    }
        
    if(_this.selectedBox == "box2A")
    {
         _this.box2A.frame = 2;
        
         if(_this.box1A.frame == 1 || _this.box1A.frame == 2){
             _this.box1A.frame = 1
         }
        if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
    }
        
    if(_this.selectedBox == "box3A")
    {
         _this.box3A.frame = 2;
        
         if(_this.box1A.frame == 1 || _this.box1A.frame == 2){
             _this.box1A.frame = 1
         }
        if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
    } 
        
    if(_this.selectedBox == "box4A")
    {
         _this.box4A.frame = 2;
        
         if(_this.box1A.frame == 1 || _this.box1A.frame == 2){
             _this.box1A.frame = 1
         }
        if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
         if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
    } 
        
    if(_this.selectedBox == "box5A")
    {
         _this.box5A.frame = 2;
        
         if(_this.box1A.frame == 1 || _this.box1A.frame == 2){
             _this.box1A.frame = 1
         }
        if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
         if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
    }   
        
     if(_this.selectedBox == "box6A")
    {
         _this.box6A.frame = 2;
        
         if(_this.box1A.frame == 1 || _this.box1A.frame == 2){
             _this.box1A.frame = 1
         }
        if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
         if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
     
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
    }                    
  
    if(_this.selectedBox == "box1B")
    {
        
         _this.box1B.frame = 2;
        
        if( _this.box1A.frame == 1 ||  _this.box1A.frame == 2){
         _this.box1A.frame = 1;
         }
       if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
        if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
        
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
    }
        
    if(_this.selectedBox  == "box2B")
     {
         
         _this.box2B.frame = 2;
        
        if( _this.box1A.frame == 1 ||  _this.box1A.frame == 2){
         _this.box1A.frame = 1;
         }
       if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
        if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
        
         _this.box1B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
        }
        
    if(_this.selectedBox  == "box3B")
     {
         _this.box3B.frame = 2;
        
         if( _this.box1A.frame == 1 ||  _this.box1A.frame == 2){
         _this.box1A.frame = 1;
         }
       if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
        if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
        
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
        }
        
    if(_this.selectedBox == "box4B")
     {
         _this.box4B.frame = 2;
        
         if( _this.box1A.frame == 1 ||  _this.box1A.frame == 2){
         _this.box1A.frame = 1;
         }
       if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
        if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
        
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box5B.frame = 1;
         _this.box6B.frame = 1;
        
        }
        
    if(_this.selectedBox == "box5B")
     {
         _this.box5B.frame = 2;
        
        if( _this.box1A.frame == 1 ||  _this.box1A.frame == 2){
         _this.box1A.frame = 1;
         }
       if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
        if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
        
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box6B.frame = 1;
        
        }
        
    if(_this.selectedBox == "box6B")
     {
         _this.box6B.frame = 2;
        
        if( _this.box1A.frame == 1 ||  _this.box1A.frame == 2){
         _this.box1A.frame = 1;
         }
       if(_this.box2A.frame == 1 || _this.box2A.frame == 2){
             _this.box2A.frame = 1
         }
        if(_this.box3A.frame == 1 || _this.box3A.frame == 2){
             _this.box3A.frame = 1
         }
         if(_this.box4A.frame == 1 || _this.box4A.frame == 2){
             _this.box4A.frame = 1
         }
         if(_this.box5A.frame == 1 || _this.box5A.frame == 2){
             _this.box5A.frame = 1
         }
         if(_this.box6A.frame == 1 || _this.box6A.frame == 2){
             _this.box6A.frame = 1
         }
     
        
         _this.box1B.frame = 1;
         _this.box2B.frame = 1;
         _this.box3B.frame = 1;
         _this.box4B.frame = 1;
         _this.box5B.frame = 1;
        
        }
},
    
 dragapple:function(target){
  //console.log("targt "+target.name);
     _this.snapSound.play();
    _this.wx=target.x;
    _this.wy=target.y;
       console.log("wx="+_this.wx);
       console.log("target1="+target.x)
     target.alpha = 1;
     target.input.enableDrag(true);
     
     if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple)
         {
             if(_this[""+target.name].frame > 0)
             {
                 _this[""+target.name].frame--;
             }
         }
     
  

     target.events.onDragStop.add(

            function(target){
                 
                  _this.snapSound.play();
                  console.log("Target"+target.value);
                 if(_this.checkOverlap(target,_this.basket1))
                        { 
                            console.log("1");
                             
                          if(_this.basket1.frame < 9)
                              {
                                 _this.basket1.frame++;
                                 _this.basket1DragApple.visible = true;
                                  _this.basket1DragApple.alpha = 0;
                                  _this.box1A.frame =1;
                                  _this.box1A.inputEnabled = true;
                                  
                                  if(target!=_this.basket1DragApple && target!=_this.basket2DragApple
                                  && target!=_this.basket3DragApple && target!=_this.basket4DragApple
                                  && target!=_this.basket5DragApple && target!=_this.basket6DragApple)
                                      {
                                          target.alpha = 0;
                                          target.inputEnabled = false;
                                      }
                                    
                                  
                              }
                            else
                                {
                                    target.x =  _this.wx;
                                    target.y =  _this.wy;
                                     console.log("wx2="+_this.wx);
                                   console.log("target2="+target.x)
                                    if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple)
                                 {
                                     _this[""+target.name].frame++;
                                    
                                 }
                                }
                            
                              
                        }
                    else if(_this.checkOverlap(target,_this.basket2))
                        {
                         console.log("2");
                            if(_this.basket2.frame<9)
                                {
                                   _this.basket2.frame++;
                                    _this.basket2DragApple.visible = true;
                                  _this.basket2DragApple.alpha = 0;
                            _this.box2A.frame=1;
                            _this.box2A.inputEnabled = true;
                                    
                                    if(target!=_this.basket1DragApple && target!=_this.basket2DragApple
                                  && target!=_this.basket3DragApple && target!=_this.basket4DragApple
                                  && target!=_this.basket5DragApple && target!=_this.basket6DragApple)
                                    {
                                          target.alpha = 0;
                                          target.inputEnabled = false;
                                      }
                            
                                }
                             else
                                {
                                    target.x =  _this.wx;
                                    console.log("ans"+ target.x )
                                    target.y =  _this.wy;
                                     console.log("ans"+ _this.wy)
                                    if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple)
                                 {
                                     _this[""+target.name].frame++;
                                    
                                 }
                                }
                        }
                
                    else if(_this.checkOverlap(target,_this.basket3))
                        {
                         console.log("3");
                             if(_this.basket3.frame<9)
                                {
                               _this.basket3.frame++;
                                    _this.basket3DragApple.visible = true;
                                  _this.basket3DragApple.alpha = 0;
                               _this.box3A.frame=1;
                               _this.box3A.inputEnabled = true;
                               if(target!=_this.basket1DragApple && target!=_this.basket2DragApple
                                  && target!=_this.basket3DragApple && target!=_this.basket4DragApple
                                  && target!=_this.basket5DragApple && target!=_this.basket6DragApple)
                                    {
                                          target.alpha = 0;
                                          target.inputEnabled = false;
                                      }
                                }
                             else
                                {
                                    target.x =  _this.wx;
                                    target.y =  _this.wy;
                                    
                                    if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple)
                                 {
                                     _this[""+target.name].frame++;
                                    
                                 }
                                }
                        }
                    else if(_this.checkOverlap(target,_this.basket4))
                        {
                         console.log("4");
                           if(_this.basket4.frame<9)
                                {
                               _this.basket4.frame++;
                                    
                                    _this.basket4DragApple.visible = true;
                                  _this.basket4DragApple.alpha = 0;
                                    
                               _this.box4A.frame=1;  
                               _this.box4A.inputEnabled = true;
                               if(target!=_this.basket1DragApple && target!=_this.basket2DragApple
                                  && target!=_this.basket3DragApple && target!=_this.basket4DragApple
                                  && target!=_this.basket5DragApple && target!=_this.basket6DragApple)
                                    {
                                          target.alpha = 0;
                                          target.inputEnabled = false;
                                      }
                                }
                             else
                                {
                                    target.x =  _this.wx;
                                    target.y =  _this.wy;
                                    
                                    if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple)
                                 {
                                     _this[""+target.name].frame++;
                                    
                                 }
                                }
                        }
                    else if(_this.checkOverlap(target,_this.basket5))
                        {
                         console.log("5");
                           if(_this.basket5.frame<9)
                                {
                               _this.basket5.frame++;
                                    
                                    _this.basket5DragApple.visible = true;
                                  _this.basket5DragApple.alpha = 0;
                                    
                               _this.box5A.frame = 1; 
                               _this.box5A.inputEnabled = true;
                               if(target!=_this.basket1DragApple && target!=_this.basket2DragApple
                                  && target!=_this.basket3DragApple && target!=_this.basket4DragApple
                                  && target!=_this.basket5DragApple && target!=_this.basket6DragApple)
                                    {
                                          target.alpha = 0;
                                          target.inputEnabled = false;
                                      }
                                }
                             else
                                {
                                    target.x =  _this.wx;
                                    target.y =  _this.wy;
                                    
                                    if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple)
                                 {
                                     _this[""+target.name].frame++;
                                    
                                 }
                                }
                        }
                      else if(_this.checkOverlap(target,_this.basket6))
                        {
                           console.log("6");
                           if(_this.basket6.frame<9)
                                {
                               _this.basket6.frame++;
                                    
                                    _this.basket6DragApple.visible = true;
                                  _this.basket6DragApple.alpha = 0;
                                    
                               _this.box6A.frame=1;
                               _this.box6A.inputEnabled = true;
                               if(target!=_this.basket1DragApple && target!=_this.basket2DragApple
                                  && target!=_this.basket3DragApple && target!=_this.basket4DragApple
                                  && target!=_this.basket5DragApple && target!=_this.basket6DragApple)
                                    {
                                          target.alpha = 0;
                                          target.inputEnabled = false;
                                      }
                                }
                             else
                                {
                                    target.x =  _this.wx;
                                    target.y =  _this.wy;
                                    
                                    if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple)
                                 {
                                     _this[""+target.name].frame++;
                                    
                                 }
                                }
                        }
                      else
                        {
                            if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple )
                                 {
                                     
                                     var hit = false;
                                     
                                     for(var i=0;i<_this.appleGroup.length;i++)
                                         {
                                             
                                             if(_this.checkOverlap(target,_this.appleGroup.getAt(i)) && _this.appleGroup.getAt(i).alpha==0)
                                                 {
                                                     
                                                     hit = true;
                                                     _this.appleGroup.getAt(i).alpha = 1;
                                                     _this.appleGroup.getAt(i).inputEnabled = true;
                                                     break;
                                                     
                                                 }
                                         }
    
                                     if(!hit)
                                         {
                                             _this[""+target.name].frame++;
                                         }
                                    
                                 }
                            target.x =  _this.wx;
                            target.y =  _this.wy;
                            
                        }
               
                            target.x =  _this.wx;
                            target.y =  _this.wy;
                              console.log("wx3="+_this.wx);
                        console.log("target3="+target.x)
                    if(target==_this.basket1DragApple || target==_this.basket2DragApple
                                  || target==_this.basket3DragApple || target==_this.basket4DragApple
                                  || target==_this.basket5DragApple || target==_this.basket6DragApple)
                         {
                             console.log("che "+target.name)
                             if(_this[""+target.name].frame > 0)
                             {
                                 target.alpha = 0;
                             }
                             else
                                 {
                                     target.visible = false;
                                 }
                         }
                
                   target.events.onDragStop.removeAll(); 
                
              },_this);
   },
    
 checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
	},
    
shadowA:function(){
    _this.shadow1 = _this.add.sprite(55,120,'nsf1_5_shadow');
    _this.shadow2 = _this.add.sprite(105,120,'nsf1_5_shadow');
    _this.shadow3 = _this.add.sprite(155,120,'nsf1_5_shadow');
    _this.shadow4 = _this.add.sprite(205,120,'nsf1_5_shadow');
    
    _this.shadow5 = _this.add.sprite(55,180,'nsf1_5_shadow');
    _this.shadow6 = _this.add.sprite(105,180,'nsf1_5_shadow');
    _this.shadow7 = _this.add.sprite(155,180,'nsf1_5_shadow');
    _this.shadow8 = _this.add.sprite(205,180,'nsf1_5_shadow');
    
    _this.shadow9 = _this.add.sprite(55,240,'nsf1_5_shadow');
    _this.shadow10 = _this.add.sprite(105,240,'nsf1_5_shadow');
    _this.shadow11 = _this.add.sprite(155,240,'nsf1_5_shadow');
    _this.shadow12 = _this.add.sprite(205,240,'nsf1_5_shadow');
    
    _this.shadow13 = _this.add.sprite(55,300,'nsf1_5_shadow');
    _this.shadow14 = _this.add.sprite(105,300,'nsf1_5_shadow');
    _this.shadow15 = _this.add.sprite(155,300,'nsf1_5_shadow');
    _this.shadow16 = _this.add.sprite(205,300,'nsf1_5_shadow');
    
    _this.shadow17 = _this.add.sprite(55,360,'nsf1_5_shadow');
    _this.shadow18 = _this.add.sprite(105,360,'nsf1_5_shadow');
    _this.shadow19 = _this.add.sprite(155,360,'nsf1_5_shadow');
    _this.shadow20 = _this.add.sprite(205,360,'nsf1_5_shadow');
        
    },
shadowB:function(){
    _this.shadow1 = _this.add.sprite(60,100,'nsf1_5_shadow');
    _this.shadow2 = _this.add.sprite(110,100,'nsf1_5_shadow');
    _this.shadow3 = _this.add.sprite(160,100,'nsf1_5_shadow');
    
    _this.shadow4 = _this.add.sprite(60,160,'nsf1_5_shadow');
    _this.shadow5 = _this.add.sprite(110,160,'nsf1_5_shadow');
    _this.shadow6 = _this.add.sprite(160,160,'nsf1_5_shadow');
    
    _this.shadow7 = _this.add.sprite(60,220,'nsf1_5_shadow');
    _this.shadow8 = _this.add.sprite(110,220,'nsf1_5_shadow');
    _this.shadow9 = _this.add.sprite(160,220,'nsf1_5_shadow');
    
    _this.shadow10 = _this.add.sprite(60,280,'nsf1_5_shadow');
    _this.shadow11 = _this.add.sprite(110,280,'nsf1_5_shadow');
    _this.shadow12 = _this.add.sprite(160,280,'nsf1_5_shadow');
    
    _this.shadow13 = _this.add.sprite(60,340,'nsf1_5_shadow');
    _this.shadow14 = _this.add.sprite(110,340,'nsf1_5_shadow');
    _this.shadow15 = _this.add.sprite(160,340,'nsf1_5_shadow');
    
    _this.shadow16 = _this.add.sprite(60,400,'nsf1_5_shadow');
    _this.shadow17 = _this.add.sprite(110,400,'nsf1_5_shadow');
    _this.shadow18 = _this.add.sprite(160,400,'nsf1_5_shadow');
    
    },
shadowC:function(){
    
     _this.shadow1 = _this.add.sprite(55,160,'nsf1_5_shadow');
    _this.shadow2 = _this.add.sprite(105,160,'nsf1_5_shadow');
    _this.shadow3 = _this.add.sprite(155,160,'nsf1_5_shadow');
    _this.shadow4 = _this.add.sprite(205,160,'nsf1_5_shadow');
    
    _this.shadow5 = _this.add.sprite(55,220,'nsf1_5_shadow');
    _this.shadow6 = _this.add.sprite(105,220,'nsf1_5_shadow');
    _this.shadow7 = _this.add.sprite(155,220,'nsf1_5_shadow');
    _this.shadow8 = _this.add.sprite(205,220,'nsf1_5_shadow');
    
    _this.shadow9 = _this.add.sprite(55,280,'nsf1_5_shadow');
    _this.shadow10 = _this.add.sprite(105,280,'nsf1_5_shadow');
    _this.shadow11 = _this.add.sprite(155,280,'nsf1_5_shadow');
    _this.shadow12 = _this.add.sprite(205,280,'nsf1_5_shadow');
    
    _this.shadow13 = _this.add.sprite(55,340,'nsf1_5_shadow');
    _this.shadow14 = _this.add.sprite(105,340,'nsf1_5_shadow');
    _this.shadow15 = _this.add.sprite(155,340,'nsf1_5_shadow');
    _this.shadow16 = _this.add.sprite(205,340,'nsf1_5_shadow');
           
 
},
shadowD:function(){
    
    _this.shadow1 = _this.add.sprite(60,120,'nsf1_5_shadow');
    _this.shadow2 = _this.add.sprite(110,120,'nsf1_5_shadow');
    _this.shadow3 = _this.add.sprite(160,120,'nsf1_5_shadow');
    
    _this.shadow4 = _this.add.sprite(60,180,'nsf1_5_shadow');
    _this.shadow5 = _this.add.sprite(110,180,'nsf1_5_shadow');
    _this.shadow6 = _this.add.sprite(160,180,'nsf1_5_shadow');
    
    _this.shadow7 = _this.add.sprite(60,240,'nsf1_5_shadow');
    _this.shadow8 = _this.add.sprite(110,240,'nsf1_5_shadow');
    _this.shadow9 = _this.add.sprite(160,240,'nsf1_5_shadow');
    
    _this.shadow10 = _this.add.sprite(60,300,'nsf1_5_shadow');
    _this.shadow11 = _this.add.sprite(110,300,'nsf1_5_shadow');
    _this.shadow12 = _this.add.sprite(160,300,'nsf1_5_shadow');
    
    _this.shadow13 = _this.add.sprite(60,360,'nsf1_5_shadow');
    _this.shadow14 = _this.add.sprite(110,360,'nsf1_5_shadow');
    _this.shadow15 = _this.add.sprite(160,360,'nsf1_5_shadow');
      
},    
    
applesA:function(){
     _this.apple1 = _this.add.sprite(55,120,'nsf1_5_apple');
    _this.apple2 = _this.add.sprite(105,120,'nsf1_5_apple');
    _this.apple3 = _this.add.sprite(155,120,'nsf1_5_apple');
    _this.apple4 = _this.add.sprite(205,120,'nsf1_5_apple');
    
    _this.apple5 = _this.add.sprite(55,180,'nsf1_5_apple');
    _this.apple6 = _this.add.sprite(105,180,'nsf1_5_apple');
    _this.apple7 = _this.add.sprite(155,180,'nsf1_5_apple');
    _this.apple8 = _this.add.sprite(205,180,'nsf1_5_apple');
    
    _this.apple9 = _this.add.sprite(55,240,'nsf1_5_apple');
    _this.apple10 = _this.add.sprite(105,240,'nsf1_5_apple');
    _this.apple11 = _this.add.sprite(155,240,'nsf1_5_apple');
    _this.apple12 = _this.add.sprite(205,240,'nsf1_5_apple');
    
    _this.apple13 = _this.add.sprite(55,300,'nsf1_5_apple');
    _this.apple14 = _this.add.sprite(105,300,'nsf1_5_apple');
    _this.apple15 = _this.add.sprite(155,300,'nsf1_5_apple');
    _this.apple16 = _this.add.sprite(205,300,'nsf1_5_apple');
    
    _this.apple17 = _this.add.sprite(55,360,'nsf1_5_apple');
    _this.apple18 = _this.add.sprite(105,360,'nsf1_5_apple');
    _this.apple19 = _this.add.sprite(155,360,'nsf1_5_apple');
    _this.apple20 = _this.add.sprite(205,360,'nsf1_5_apple');
    
},   
applesB:function(){ 
    _this.apple1 = _this.add.sprite(60,100,'nsf1_5_apple');
    _this.apple2 = _this.add.sprite(110,100,'nsf1_5_apple');
    _this.apple3 = _this.add.sprite(160,100,'nsf1_5_apple');
    
    _this.apple4 = _this.add.sprite(60,160,'nsf1_5_apple');
    _this.apple5 = _this.add.sprite(110,160,'nsf1_5_apple');
    _this.apple6 = _this.add.sprite(160,160,'nsf1_5_apple');
    
    _this.apple7 = _this.add.sprite(60,220,'nsf1_5_apple');
    _this.apple8 = _this.add.sprite(110,220,'nsf1_5_apple');
    _this.apple9 = _this.add.sprite(160,220,'nsf1_5_apple');
    
    _this.apple10 = _this.add.sprite(60,280,'nsf1_5_apple');
    _this.apple11 = _this.add.sprite(110,280,'nsf1_5_apple');
    _this.apple12 = _this.add.sprite(160,280,'nsf1_5_apple');
    
    _this.apple13 = _this.add.sprite(60,340,'nsf1_5_apple');
    _this.apple14 = _this.add.sprite(110,340,'nsf1_5_apple');
    _this.apple15 = _this.add.sprite(160,340,'nsf1_5_apple');
    
    _this.apple16 = _this.add.sprite(60,400,'nsf1_5_apple');
    _this.apple17 = _this.add.sprite(110,400,'nsf1_5_apple');
    _this.apple18 = _this.add.sprite(160,400,'nsf1_5_apple');

},
applesC:function(){
    
       _this.apple1 = _this.add.sprite(55,160,'nsf1_5_apple');
    _this.apple2 = _this.add.sprite(105,160,'nsf1_5_apple');
    _this.apple3 = _this.add.sprite(155,160,'nsf1_5_apple');
    _this.apple4 = _this.add.sprite(205,160,'nsf1_5_apple');
    
    _this.apple5 = _this.add.sprite(55,220,'nsf1_5_apple');
    _this.apple6 = _this.add.sprite(105,220,'nsf1_5_apple');
    _this.apple7 = _this.add.sprite(155,220,'nsf1_5_apple');
    _this.apple8 = _this.add.sprite(205,220,'nsf1_5_apple');
    
    _this.apple9 = _this.add.sprite(55,280,'nsf1_5_apple');
    _this.apple10 = _this.add.sprite(105,280,'nsf1_5_apple');
    _this.apple11 = _this.add.sprite(155,280,'nsf1_5_apple');
    _this.apple12 = _this.add.sprite(205,280,'nsf1_5_apple');
    
    _this.apple13 = _this.add.sprite(55,340,'nsf1_5_apple');
    _this.apple14 = _this.add.sprite(105,340,'nsf1_5_apple');
    _this.apple15 = _this.add.sprite(155,340,'nsf1_5_apple');
    _this.apple16 = _this.add.sprite(205,340,'nsf1_5_apple');
}, 
applesD:function(){
    
     _this.apple1 = _this.add.sprite(60,120,'nsf1_5_apple');
    _this.apple2 = _this.add.sprite(110,120,'nsf1_5_apple');
    _this.apple3 = _this.add.sprite(160,120,'nsf1_5_apple');
    
    _this.apple4 = _this.add.sprite(60,180,'nsf1_5_apple');
    _this.apple5 = _this.add.sprite(110,180,'nsf1_5_apple');
    _this.apple6 = _this.add.sprite(160,180,'nsf1_5_apple');
    
    _this.apple7 = _this.add.sprite(60,240,'nsf1_5_apple');
    _this.apple8 = _this.add.sprite(110,240,'nsf1_5_apple');
    _this.apple9 = _this.add.sprite(160,240,'nsf1_5_apple');
    
    _this.apple10 = _this.add.sprite(60,300,'nsf1_5_apple');
    _this.apple11 = _this.add.sprite(110,300,'nsf1_5_apple');
    _this.apple12 = _this.add.sprite(160,300,'nsf1_5_apple');
    
    _this.apple13 = _this.add.sprite(60,360,'nsf1_5_apple');
    _this.apple14 = _this.add.sprite(110,360,'nsf1_5_apple');
    _this.apple15 = _this.add.sprite(160,360,'nsf1_5_apple');
},    
    
    
    
question1:function(){
    _this.question = 1;
    console.log("1st");
    if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 78, 'nsf1_5_bg1');
     _this.bg1.scale.setTo(0.9,1);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowA();
     _this.applesA();
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "hii";
    
    _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple');
    _this.basket1DragApple.name = "basket1";
    _this.basket1DragApple.inputEnabled = true;
    _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=7;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(300,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
    _this.basket2DragApple = _this.add.sprite(350,220,'nsf1_5_apple');
    _this.basket2DragApple.name = "basket2";
    _this.basket2DragApple.inputEnabled = true;
    _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket2DragApple.visible = false;
    
    _this.cloud2 =  _this.add.sprite(435,215,'nsf1_5_cloud');
    _this.cloud2.frame=4;
    
     _this.box2A =  _this.add.sprite(520,216,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                   _this.clickSound.play();    
                   _this.selectedBox = "box2A" ;
                   _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(507,267,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(520,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    
    _this.basket3DragApple = _this.add.sprite(350,360,'nsf1_5_apple');
    _this.basket3DragApple.name = "basket3";
    _this.basket3DragApple.inputEnabled = true;
    _this.basket3DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket3DragApple.visible = false;
    
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=3;
    
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box3B";
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
    _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
    _this.basket4DragApple.name = "basket4";
    _this.basket4DragApple.inputEnabled = true;
    _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=5;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box4B";
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
    
    _this.basket5DragApple = _this.add.sprite(680,220,'nsf1_5_apple');
    _this.basket5DragApple.name = "basket5";
    _this.basket5DragApple.inputEnabled = true;
    _this.basket5DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket5DragApple.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=2;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box5B";
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
    
    _this.basket6DragApple = _this.add.sprite(680,360,'nsf1_5_apple');
    _this.basket6DragApple.name = "basket6";
    _this.basket6DragApple.inputEnabled = true;
    _this.basket6DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket6DragApple.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=5; 
    
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
     _this.box6A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box6B";
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
      _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);
    _this.shadowgroup.add(_this.shadow17);
    _this.shadowgroup.add(_this.shadow18);
    _this.shadowgroup.add(_this.shadow19);
    _this.shadowgroup.add(_this.shadow20);
    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);
    _this.appleGroup.add(_this.apple17);
    _this.appleGroup.add(_this.apple18);
    _this.appleGroup.add(_this.apple19);
    _this.appleGroup.add(_this.apple20);
    
    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "632414";
  //  _this.rightAns1B = "060302040104";
    _this.rightAns2 = "202020202020";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
    
} ,   
    
question2:function(){
    
    _this.question = 2;
    console.log("2nd");
    if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 78, 'nsf1_5_bg1');
     _this.bg1.scale.setTo(0.9,1);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
      _this.shadowA();
      _this.applesA();
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
     _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple');
    _this.basket1DragApple.name = "basket1";
    _this.basket1DragApple.inputEnabled = true;
    _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket1DragApple.visible = false;
    
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=3;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(300,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
    _this.basket2DragApple = _this.add.sprite(350,220,'nsf1_5_apple');
    _this.basket2DragApple.name = "basket2";
    _this.basket2DragApple.inputEnabled = true;
    _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);  
    _this.basket2DragApple.visible = false;
     
    
    _this.cloud2 =  _this.add.sprite(435,215,'nsf1_5_cloud');
    _this.cloud2.frame=2;
    
     _this.box2A =  _this.add.sprite(520,216,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(507,267,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(520,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box2B";
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    
     _this.basket3DragApple = _this.add.sprite(350,360,'nsf1_5_apple');
    _this.basket3DragApple.name = "basket3";  
  _this.basket3DragApple.inputEnabled = true;  
  _this.basket3DragApple.events.onInputDown.add(_this.dragapple,this);
 
   _this.basket3DragApple.visible = false;
    
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=8;
    
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
     _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
    _this.basket4DragApple.name = "basket4";
   _this.basket4DragApple.inputEnabled = true;
   _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
 
   _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=6;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
    
    _this.basket5DragApple = _this.add.sprite(680,220,'nsf1_5_apple');
   _this.basket5DragApple.name = "basket5";
    _this.basket5DragApple.inputEnabled = true;
   _this.basket5DragApple.events.onInputDown.add(_this.dragapple,this);
 
   _this.basket5DragApple.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=4;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
  
    _this.basket6DragApple = _this.add.sprite(680,360,'nsf1_5_apple');
    _this.basket6DragApple.name = "basket6";
    _this.basket6DragApple.inputEnabled = true;
    _this.basket6DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket6DragApple.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=3; 
    
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
     _this.box6A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);
    _this.shadowgroup.add(_this.shadow17);
    _this.shadowgroup.add(_this.shadow18);
    _this.shadowgroup.add(_this.shadow19);
    _this.shadowgroup.add(_this.shadow20);
    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);
    _this.appleGroup.add(_this.apple17);
    _this.appleGroup.add(_this.apple18);
    _this.appleGroup.add(_this.apple19);
    _this.appleGroup.add(_this.apple20);
    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "217532";
    _this.rightAns2 = "202020202020";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
    
}, 
    
question3:function(){
    
     _this.question = 3;
     console.log("3");
     if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 78, 'nsf1_5_bg1');
     _this.bg1.scale.setTo(0.75,1.05);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
    _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
    _this.shadowB();
    _this.applesB();

    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
    _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple'); 
    _this.basket1DragApple.name = "basket1";  
    _this.basket1DragApple.inputEnabled = true;
    _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
 
  _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=3;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(470,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
     _this.basket2DragApple = _this.add.sprite(520,220,'nsf1_5_apple'); 
     _this.basket2DragApple.name = "basket2"; 
     _this.basket2DragApple.inputEnabled = true; 
     _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket2DragApple.visible = false;
    
    _this.cloud2 =  _this.add.sprite(605,215,'nsf1_5_cloud');
    _this.cloud2.frame=8;
    
     _this.box2A =  _this.add.sprite(690,216,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(677,267,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(690,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    
     _this.basket3DragApple = _this.add.sprite(350,360,'nsf1_5_apple');
     _this.basket3DragApple.name = "basket3"; 
     _this.basket3DragApple.inputEnabled = true; 
     _this.basket3DragApple.events.onInputDown.add(_this.dragapple,this);
 
   _this.basket3DragApple.visible = false;
    
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=6;
    
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
     _this.box3A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
    _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
    _this.basket4DragApple.name = "basket4";
   _this.basket4DragApple.inputEnabled = true;
   _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
 
   _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=4;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=4;
    _this.cloud5.visible = false;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
    _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
    // _this.basket6.visible = false;
    
    _this.basket6DragApple = _this.add.sprite(680,360,'nsf1_5_apple');
    _this.basket6DragApple.name = "basket6";
    _this.basket6DragApple.inputEnabled = true;
    _this.basket6DragApple.events.onInputDown.add(_this.dragapple,this);
   _this.basket6DragApple.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=2; 
    
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
     _this.box6A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);
    _this.shadowgroup.add(_this.shadow17);
    _this.shadowgroup.add(_this.shadow18);
    
    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);
    _this.appleGroup.add(_this.apple17);
    _this.appleGroup.add(_this.apple18);
  
    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "27531";
    _this.rightAns2 = "1818181818";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
        
    },
    
question4:function(){
  
     _this.question = 4;
     console.log("4");
      if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 78, 'nsf1_5_bg1');
     _this.bg1.scale.setTo(0.9,1);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
    _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowA();
     _this.applesA();
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
     
    _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple');
    _this.basket1DragApple.name = "basket1"; 
    _this.basket1DragApple.inputEnabled = true; 
    _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=4;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(470,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
    
  _this.basket2DragApple = _this.add.sprite(520,220,'nsf1_5_apple'); 
  _this.basket2DragApple.name = "basket2"; 
  _this.basket2DragApple.inputEnabled = true; 
  _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);
   _this.basket2DragApple.visible = false;
    
    _this.cloud2 =  _this.add.sprite(605,215,'nsf1_5_cloud');
    _this.cloud2.frame=3;
    
     _this.box2A =  _this.add.sprite(690,216,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(677,267,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(690,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    
    _this.basket3DragApple = _this.add.sprite(350,360,'nsf1_5_apple');
    _this.basket3DragApple.name = "basket3";
    _this.basket3DragApple.inputEnabled = true;
    _this.basket3DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket3DragApple.visible = false;
    
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=9;
    
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
     _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
    _this.basket4DragApple.name = "basket4";
    _this.basket4DragApple.inputEnabled = true;
    _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=2;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=4;
    _this.cloud5.visible = false;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
    _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box5B";
                    _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
    // _this.basket6.visible = false;
    
    _this.basket6DragApple = _this.add.sprite(680,360,'nsf1_5_apple');
    _this.basket6DragApple.name = "basket6";
    _this.basket6DragApple.inputEnabled = true;
    _this.basket6DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket6DragApple.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=6; 
    
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
     _this.box6A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);
    _this.shadowgroup.add(_this.shadow17);
    _this.shadowgroup.add(_this.shadow18);
    _this.shadowgroup.add(_this.shadow19);
    _this.shadowgroup.add(_this.shadow20);
    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);
    _this.appleGroup.add(_this.apple17);
    _this.appleGroup.add(_this.apple18);
    _this.appleGroup.add(_this.apple19);
    _this.appleGroup.add(_this.apple20);
    
    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "32815";
    _this.rightAns2 = "2020202020";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
},    

question5:function(){
  
     _this.question = 5;
     console.log("5");
      if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 130, 'nsf1_5_bg1');
     _this.bg1.scale.setTo(0.9,0.8);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
    _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowC();
     _this.applesC();
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
     _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple'); 
     _this.basket1DragApple.name = "basket1";  
     _this.basket1DragApple.inputEnabled = true;
     _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=6;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(470,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
     _this.basket2DragApple = _this.add.sprite(520,220,'nsf1_5_apple'); 
    _this.basket2DragApple.name = "basket2"; 
    _this.basket2DragApple.inputEnabled = true; 
    _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);
   _this.basket2DragApple.visible = false;
    
    _this.cloud2 =  _this.add.sprite(605,215,'nsf1_5_cloud');
    _this.cloud2.frame=4;
    
     _this.box2A =  _this.add.sprite(690,216,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(677,267,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(690,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    
     _this.basket3DragApple = _this.add.sprite(350,360,'nsf1_5_apple');
    _this.basket3DragApple.name = "basket3";
    _this.basket3DragApple.inputEnabled = true;
    _this.basket3DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket3DragApple.visible = false;

    
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=3;
    
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
     _this.box3A.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
     _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
     _this.basket4DragApple.name = "basket4";
     _this.basket4DragApple.inputEnabled = true;
     _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
 
   _this.basket4DragApple.visible = false;

    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=2;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=4;
    _this.cloud5.visible = false;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
    _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
    // _this.basket6.visible = false;
    
     _this.basket6DragApple = _this.add.sprite(680,360,'nsf1_5_apple');
     _this.basket6DragApple.name = "basket6";
     _this.basket6DragApple.inputEnabled = true;
     _this.basket6DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket6DragApple.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=5; 
    
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
     _this.box6A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);

    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);
    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "53214";
    _this.rightAns2 = "1616161616";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
},    
    
question6:function(){
    
     _this.question = 6;
     console.log("6");
     if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 130, 'nsf1_5_bg1');
     _this.bg1.scale.setTo(0.9,0.8);
     _this.group1 = _this.add.group();
      _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowC();
     _this.applesC();
   
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
     _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple');
     _this.basket1DragApple.name = "basket1";
     _this.basket1DragApple.inputEnabled = true;
     _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=7;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(300,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
     _this.basket2.visible = false;
    
    _this.cloud2 =  _this.add.sprite(435,215,'nsf1_5_cloud');
    _this.cloud2.frame=4;
     _this.cloud2.visible = false;
     _this.box2A =  _this.add.sprite(520,216,'nsf1_5_box');
     _this.box2A.visible = false;
     _this.box2A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(507,267,'nsf1_5_line');
     _this.line2.visible = false;
    _this.box2B =  _this.add.sprite(520,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.visible = false;
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,290,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    
     _this.basket3DragApple = _this.add.sprite(350,320,'nsf1_5_apple');
     _this.basket3DragApple.name = "basket3";
     _this.basket3DragApple.inputEnabled = true;
     _this.basket3DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket3DragApple.visible = false;
    
    _this.cloud3 =  _this.add.sprite(435,315,'nsf1_5_cloud');
    _this.cloud3.frame=3;
    
    _this.box3A =  _this.add.sprite(520,316,'nsf1_5_box');
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,367,'nsf1_5_line');
    _this.box3B =  _this.add.sprite(520,376,'nsf1_5_box');
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
     _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
     _this.basket4DragApple.name = "basket4";
     _this.basket4DragApple.inputEnabled = true;
     _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=4;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=2;
     _this.cloud5.visible = false;
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
     _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,290,'nsf1_5_basket');
    _this.basket6.name = "basket6";
    
     _this.basket6DragApple = _this.add.sprite(680,320,'nsf1_5_apple');
     _this.basket6DragApple.name = "basket6";
     _this.basket6DragApple.inputEnabled = true;
     _this.basket6DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket6DragApple.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,315,'nsf1_5_cloud');
    _this.cloud6.frame=6; 
    
     _this.box6A =  _this.add.sprite(850,316,'nsf1_5_box');
     _this.box6A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,367,'nsf1_5_line');
    _this.box6B =  _this.add.sprite(850,376,'nsf1_5_box');
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);
    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);
    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "6235";
  //  _this.rightAns1B = "060302040104";
    _this.rightAns2 = "16161616";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
    
},
    
question7:function(){
    
     _this.question = 7;
     console.log("7");
     if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 78, 'nsf1_5_bg1');
     _this.bg1.scale.setTo(0.75,1.05);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowB();
     _this.applesB();
   
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
     _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple');  
     _this.basket1DragApple.name = "basket1"; 
     _this.basket1DragApple.inputEnabled = true;
     _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=4;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(300,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
     _this.basket2.visible = false;
    _this.cloud2 =  _this.add.sprite(435,215,'nsf1_5_cloud');
    _this.cloud2.frame=4;
     _this.cloud2.visible = false;
     _this.box2A =  _this.add.sprite(520,216,'nsf1_5_box');
     _this.box2A.visible = false;
     _this.box2A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(507,267,'nsf1_5_line');
     _this.line2.visible = false;
    _this.box2B =  _this.add.sprite(520,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.visible = false;
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,290,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    
     _this.basket3DragApple = _this.add.sprite(350,320,'nsf1_5_apple');
    _this.basket3DragApple.name = "basket3";
    _this.basket3DragApple.inputEnabled = true;
    _this.basket3DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket3DragApple.visible = false;
    
    _this.cloud3 =  _this.add.sprite(435,315,'nsf1_5_cloud');
    _this.cloud3.frame=8;
    
    _this.box3A =  _this.add.sprite(520,316,'nsf1_5_box');
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,367,'nsf1_5_line');
    _this.box3B =  _this.add.sprite(520,376,'nsf1_5_box');
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
     _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
    _this.basket4DragApple.name = "basket4";
    _this.basket4DragApple.inputEnabled = true;
    _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=6;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=2;
     _this.cloud5.visible = false;
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
     _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,290,'nsf1_5_basket');
    _this.basket6.name = "basket6";
    
     _this.basket6DragApple = _this.add.sprite(680,320,'nsf1_5_apple');
     _this.basket6DragApple.name = "basket6";
     _this.basket6DragApple.inputEnabled = true;
     _this.basket6DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket6DragApple.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,315,'nsf1_5_cloud');
    _this.cloud6.frame=3; 
    
     _this.box6A =  _this.add.sprite(850,316,'nsf1_5_box');
     _this.box6A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,367,'nsf1_5_line');
    _this.box6B =  _this.add.sprite(850,376,'nsf1_5_box');
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
      _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);
    _this.shadowgroup.add(_this.shadow17);
    _this.shadowgroup.add(_this.shadow18);
  
    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);
    _this.appleGroup.add(_this.apple17);
    _this.appleGroup.add(_this.apple18);

    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "3752";
  //  _this.rightAns1B = "060302040104";
    _this.rightAns2 = "18181818";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
    
},
    
question8:function(){
    
      _this.question = 8;
      console.log("8");
      if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
      _this.bg1 = _this.add.sprite(30, 100, 'nsf1_5_bg1');
      _this.bg1.scale.setTo(0.75,0.9);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowD();
     _this.applesD();
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
     _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple');
     _this.basket1DragApple.name = "basket1"; 
     _this.basket1DragApple.inputEnabled = true;
     _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
 
  _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=7;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(300,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
     _this.basket2.visible = false;
    _this.cloud2 =  _this.add.sprite(435,215,'nsf1_5_cloud');
    _this.cloud2.frame=4;
     _this.cloud2.visible = false;
     _this.box2A =  _this.add.sprite(520,216,'nsf1_5_box');
     _this.box2A.visible = false;
     _this.box2A.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(507,267,'nsf1_5_line');
     _this.line2.visible = false;
    _this.box2B =  _this.add.sprite(520,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.visible = false;
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,290,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    
     _this.basket3DragApple = _this.add.sprite(350,320,'nsf1_5_apple');
     _this.basket3DragApple.name = "basket3";
     _this.basket3DragApple.inputEnabled = true;
     _this.basket3DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket3DragApple.visible = false;
    
    _this.cloud3 =  _this.add.sprite(435,315,'nsf1_5_cloud');
    _this.cloud3.frame=5;
    
    _this.box3A =  _this.add.sprite(520,316,'nsf1_5_box');
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,367,'nsf1_5_line');
    _this.box3B =  _this.add.sprite(520,376,'nsf1_5_box');
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
     _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
    _this.basket4DragApple.name = "basket4";
   _this.basket4DragApple.inputEnabled = true;
   _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
   _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=3;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=2;
     _this.cloud5.visible = false;
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
     _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,290,'nsf1_5_basket');
    _this.basket6.name = "basket6";
    
     _this.basket6DragApple = _this.add.sprite(680,320,'nsf1_5_apple');
     _this.basket6DragApple.name = "basket6";
     _this.basket6DragApple.inputEnabled = true;
     _this.basket6DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket6DragApple.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,315,'nsf1_5_cloud');
    _this.cloud6.frame=4; 
    
     _this.box6A =  _this.add.sprite(850,316,'nsf1_5_box');
     _this.box6A.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,367,'nsf1_5_line');
    _this.box6B =  _this.add.sprite(850,376,'nsf1_5_box');
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
  
    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
   
    
    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "6423";
  //  _this.rightAns1B = "060302040104";
    _this.rightAns2 = "15151515";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
},
    
question9:function(){
    
     _this.question = 9;
     console.log("9");
     if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 78, 'nsf1_5_bg1');
    _this.bg1.scale.setTo(0.75,1.05);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
    _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowB();
     _this.applesB();
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
   _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple');
   _this.basket1DragApple.name = "basket1";
   _this.basket1DragApple.inputEnabled = true;
   _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
   _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=3;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(470,240,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
     _this.basket2DragApple = _this.add.sprite(520,270,'nsf1_5_apple'); 
     _this.basket2DragApple.name = "basket2";
     _this.basket2DragApple.inputEnabled = true;
     _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket2DragApple.visible = false;
    
    _this.cloud2 =  _this.add.sprite(605,265,'nsf1_5_cloud');
    _this.cloud2.frame=10;
    
     _this.box2A =  _this.add.sprite(690,266,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(677,317,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(690,326,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
     _this.basket3.visible = false;
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=6;
     _this.cloud3.visible = false;
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
     _this.box3A.visible = false;
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
     _this.line3.visible = false;
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
     _this.box3B.visible = false;
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
    _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
    _this.basket4DragApple.name = "basket4";
   _this.basket4DragApple.inputEnabled = true;
   _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
   _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=4;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=4;
    _this.cloud5.visible = false;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
    _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
     _this.basket6.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=2; 
    _this.cloud6.visible = false;
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
    _this.box6A.visible = false;
     _this.box6A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.line6.visible = false;
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
    _this.box6B.visible = false;
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);
    _this.shadowgroup.add(_this.shadow17);
    _this.shadowgroup.add(_this.shadow18);
  
    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);
    _this.appleGroup.add(_this.apple17);
    _this.appleGroup.add(_this.apple18);

    
     
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "293";
    _this.rightAns2 = "181818";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
    
}, 
    
question10:function(){
    
     _this.question = 10;
     console.log("10");
     if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
      _this.bg1 = _this.add.sprite(30, 130, 'nsf1_5_bg1');
     _this.bg1.scale.setTo(0.9,0.8);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowC();
     _this.applesC();
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
     _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple'); 
     _this.basket1DragApple.name = "basket1"; 
     _this.basket1DragApple.inputEnabled = true;
     _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=3;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(470,240,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
     _this.basket2DragApple = _this.add.sprite(520,270,'nsf1_5_apple');
    _this.basket2DragApple.name = "basket2";
    _this.basket2DragApple.inputEnabled = true;
    _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket2DragApple.visible = false;
    
    _this.cloud2 =  _this.add.sprite(605,265,'nsf1_5_cloud');
    _this.cloud2.frame=7;
    
     _this.box2A =  _this.add.sprite(690,266,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(677,317,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(690,326,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
     _this.basket3.visible = false;
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=6;
     _this.cloud3.visible = false;
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
     _this.box3A.visible = false;
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
     _this.line3.visible = false;
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
     _this.box3B.visible = false;
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
     _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
     _this.basket4DragApple.name = "basket4";
     _this.basket4DragApple.inputEnabled = true;
     _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=6;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=4;
    _this.cloud5.visible = false;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
    _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
     _this.basket6.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=2; 
    _this.cloud6.visible = false;
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
    _this.box6A.visible = false;
     _this.box6A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.line6.visible = false;
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
    _this.box6B.visible = false;
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);
    _this.shadowgroup.add(_this.shadow16);

    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
    _this.appleGroup.add(_this.apple16);

    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "265";
    _this.rightAns2 = "161616";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
}, 
    
question11:function(){
    
     _this.question = 11;
     console.log("11");
      if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
      _this.bg1 = _this.add.sprite(30, 100, 'nsf1_5_bg1');
      _this.bg1.scale.setTo(0.75,0.9);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowD();
     _this.applesD();
      
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    
     _this.basket1DragApple = _this.add.sprite(350,80,'nsf1_5_apple');
     _this.basket1DragApple.name = "basket1";
     _this.basket1DragApple.inputEnabled = true;
     _this.basket1DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket1DragApple.visible = false;
    
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=8;
    
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(470,240,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
     _this.basket2DragApple = _this.add.sprite(520,270,'nsf1_5_apple');
     _this.basket2DragApple.name = "basket2";
     _this.basket2DragApple.inputEnabled = true;
     _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket2DragApple.visible = false;

    
    _this.cloud2 =  _this.add.sprite(605,265,'nsf1_5_cloud');
    _this.cloud2.frame=4;
    
     _this.box2A =  _this.add.sprite(690,266,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(677,317,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(690,326,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box2B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
     _this.basket3.visible = false;
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=6;
     _this.cloud3.visible = false;
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
     _this.box3A.visible = false;
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
     _this.line3.visible = false;
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
     _this.box3B.visible = false;
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box3B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    
     _this.basket4DragApple = _this.add.sprite(680,80,'nsf1_5_apple');
     _this.basket4DragApple.name = "basket4";
     _this.basket4DragApple.inputEnabled = true;
     _this.basket4DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket4DragApple.visible = false;
    
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=6;
    
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
     _this.box4A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box4B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
     _this.basket5.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=4;
    _this.cloud5.visible = false;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
    _this.box5A.visible = false;
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
     _this.line5.visible = false;
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.visible = false;
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
     _this.basket6.visible = false;
    
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=2; 
    _this.cloud6.visible = false;
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
    _this.box6A.visible = false;
     _this.box6A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.line6.visible = false;
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
    _this.box6B.visible = false;
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);

    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);

    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "735";
    _this.rightAns2 = "151515";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
    
}, 
    
question12:function(){
    
    _this.question = 12;
    console.log("12");
    if(_this.soundPlayed == false)
    {
      _this.getVoice();
      _this.soundPlayed = true;     
    }
     
     _this.bg1 = _this.add.sprite(30, 100, 'nsf1_5_bg1');
      _this.bg1.scale.setTo(0.75,0.9);
     _this.group1 = _this.add.group();
     _this.group2 = _this.add.group();
     _this.shadowgroup = _this.add.group();
     _this.appleGroup = _this.add.group();
    
     _this.appleGroup.x=1000;
     _this.tween=_this.add.tween(_this.appleGroup).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group1.x=1000;
     _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.group2.x=1000;
     _this.tween=_this.add.tween(_this.group2).to( { x: 0 }, 1500, 'Linear', true,0);
     _this.shadowgroup.x=1000;
     _this.tween=_this.add.tween(_this.shadowgroup).to( { x: 0 }, 1500, 'Linear', true,0);
   
     _this.shadowD();
     _this.applesD();
    
    _this.basket1 = _this.add.sprite(300,50,'nsf1_5_basket');
    _this.basket1.name = "basket1";
    _this.basket1.visible = false;
    _this.cloud1 =  _this.add.sprite(435,75,'nsf1_5_cloud');
    _this.cloud1.frame=7;
    _this.cloud1.visible = false;
    _this.box1A =  _this.add.sprite(520,76,'nsf1_5_box');
    _this.box1A.visible = false
    _this.box1A.name = "box1A";
     _this.box1A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = _this.box1A.name ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    _this.line1 =  _this.add.sprite(507,127,'nsf1_5_line');
    _this.line1.visible = false
    _this.box1B =  _this.add.sprite(520,136,'nsf1_5_box');
    _this.box1B.visible = false
    _this.box1B.name = "box1B";
    _this.box1B.frame = 1;
    _this.box1B.inputEnabled = true;
    _this.box1B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox =  _this.box1B.name;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
     
     _this.basket2 = _this.add.sprite(300,190,'nsf1_5_basket');
    _this.basket2.name = "basket2";
    
    _this.basket2DragApple = _this.add.sprite(350,220,'nsf1_5_apple');
    _this.basket2DragApple.name = "basket2";
    _this.basket2DragApple.inputEnabled = true;
    _this.basket2DragApple.events.onInputDown.add(_this.dragapple,this);
    _this.basket2DragApple.visible = false;
    
    _this.cloud2 =  _this.add.sprite(435,215,'nsf1_5_cloud');
    _this.cloud2.frame=10;
    
     _this.box2A =  _this.add.sprite(520,216,'nsf1_5_box');
     _this.box2A.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                _this.selectedBox = "box2A" ;
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line2 =  _this.add.sprite(507,267,'nsf1_5_line');
    _this.box2B =  _this.add.sprite(520,276,'nsf1_5_box');
     _this.box2B.name = "box2B";
     _this.box2B.frame = 1;
     _this.box2B.inputEnabled = true;
     _this.box2B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box2B";
                   _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    
    
    _this.basket3 = _this.add.sprite(300,330,'nsf1_5_basket');
    _this.basket3.name = "basket3";
    _this.basket3.visible = false;
    _this.cloud3 =  _this.add.sprite(435,355,'nsf1_5_cloud');
    _this.cloud3.frame=3;
    _this.cloud3.visible = false
    _this.box3A =  _this.add.sprite(520,356,'nsf1_5_box');
    _this.box3A.visible = false
     _this.box3A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box3A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line3 =  _this.add.sprite(507,407,'nsf1_5_line');
    _this.line3.visible = false
    _this.box3B =  _this.add.sprite(520,416,'nsf1_5_box');
    _this.box3B.visible = false
    _this.box3B.frame = 1;
     _this.box3B.inputEnabled = true;
     _this.box3B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box3B";
                   _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
                  else
                  {
                         
                  }
              },_this);
    
    _this.basket4 = _this.add.sprite(630,50,'nsf1_5_basket');
    _this.basket4.name = "basket4";
    _this.basket4.visible = false;
    _this.cloud4 =  _this.add.sprite(765,75,'nsf1_5_cloud');
    _this.cloud4.frame=6;
    _this.cloud4.visible = false;
     _this.box4A =  _this.add.sprite(850,76,'nsf1_5_box');
    _this.box4A.visible = false
     _this.box4A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box4A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line4 =  _this.add.sprite(837,127,'nsf1_5_line');
    _this.line4.visible = false
    _this.box4B =  _this.add.sprite(850,136,'nsf1_5_box');
    _this.box4B.visible = false
     _this.box4B.frame = 1;
     _this.box4B.inputEnabled = true;
     _this.box4B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box4B";
                   _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.basket5 = _this.add.sprite(630,190,'nsf1_5_basket');
    _this.basket5.name = "basket5";
    
     _this.basket5DragApple = _this.add.sprite(680,220,'nsf1_5_apple');
     _this.basket5DragApple.name = "basket5";
     _this.basket5DragApple.inputEnabled = true;
     _this.basket5DragApple.events.onInputDown.add(_this.dragapple,this);
     _this.basket5DragApple.visible = false;
    
    _this.cloud5 =  _this.add.sprite(765,215,'nsf1_5_cloud');
    _this.cloud5.frame=4;
    
     _this.box5A =  _this.add.sprite(850,216,'nsf1_5_box');
     _this.box5A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box5A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line5 =  _this.add.sprite(837,267,'nsf1_5_line');
    _this.box5B =  _this.add.sprite(850,276,'nsf1_5_box');
     _this.box5B.frame = 1;
     _this.box5B.inputEnabled = true;
     _this.box5B.events.onInputDown.add(function(target)
              {
                  _this.clickSound.play();
                 _this.selectedBox = "box5B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
    _this.basket6 = _this.add.sprite(630,330,'nsf1_5_basket');
    _this.basket6.name = "basket6";
    _this.basket6.visible = false
    _this.cloud6 =  _this.add.sprite(765,355,'nsf1_5_cloud');
    _this.cloud6.frame=5; 
    _this.cloud6.visible = false
     _this.box6A =  _this.add.sprite(850,356,'nsf1_5_box');
    _this.box6A.visible = false
     _this.box6A.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                _this.selectedBox = "box6A" ;
                 _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
              },_this);
    _this.line6 =  _this.add.sprite(837,407,'nsf1_5_line');
    _this.line6.visible = false
    _this.box6B =  _this.add.sprite(850,416,'nsf1_5_box');
    _this.box6B.visible = false
     _this.box6B.frame = 1;
     _this.box6B.inputEnabled = true;
     _this.box6B.events.onInputDown.add(function(target)
              {
                 _this.clickSound.play();
                 _this.selectedBox = "box6B";
                  _this.bright(target);
                if(_this.numberPadShown == false)
                    {
                        _this.numberPadShown = true;
                        _this.clickSound.play();
                        _this.addNumberPad();
                    }
        
              },_this);
    
     _this.shadowgroup.add(_this.bg1);
     _this.shadowgroup.add(_this.shadow1);
     _this.shadowgroup.add(_this.shadow2);
     _this.shadowgroup.add(_this.shadow3);
     _this.shadowgroup.add(_this.shadow4);
    _this.shadowgroup.add(_this.shadow5);
    _this.shadowgroup.add(_this.shadow6);
    _this.shadowgroup.add(_this.shadow7);
    _this.shadowgroup.add(_this.shadow8);
    _this.shadowgroup.add(_this.shadow9);
    _this.shadowgroup.add(_this.shadow10);
    _this.shadowgroup.add(_this.shadow11);
    _this.shadowgroup.add(_this.shadow12);
    _this.shadowgroup.add(_this.shadow13);
    _this.shadowgroup.add(_this.shadow14);
    _this.shadowgroup.add(_this.shadow15);

    
    _this.appleGroup.add(_this.apple1);
     _this.appleGroup.add(_this.apple2);
     _this.appleGroup.add(_this.apple3);
     _this.appleGroup.add(_this.apple4);
     _this.appleGroup.add(_this.apple5);
     _this.appleGroup.add(_this.apple6);
     _this.appleGroup.add(_this.apple7);
     _this.appleGroup.add(_this.apple8);
     _this.appleGroup.add(_this.apple9);
     _this.appleGroup.add(_this.apple10);
     _this.appleGroup.add(_this.apple11);
     _this.appleGroup.add(_this.apple12);
     _this.appleGroup.add(_this.apple13);
     _this.appleGroup.add(_this.apple14);
    _this.appleGroup.add(_this.apple15);
   
    
    _this.group1.add(_this.basket1);
     _this.group1.add(_this.basket2);
     _this.group1.add(_this.basket3);
     _this.group1.add(_this.basket4);
     _this.group1.add(_this.basket5);
     _this.group1.add(_this.basket6);
    
     _this.group1.add(_this.cloud1);
    _this.group1.add(_this.cloud2);
    _this.group1.add(_this.cloud3);
    _this.group1.add(_this.cloud4);
    _this.group1.add(_this.cloud5);
    _this.group1.add(_this.cloud6);
    
     _this.group2.add(_this.box1A);
     _this.group2.add(_this.line1);
     _this.group2.add(_this.box1B);
     _this.group2.add(_this.box2A);
     _this.group2.add(_this.line2);
     _this.group2.add(_this.box2B);
     _this.group2.add(_this.box3A);
     _this.group2.add(_this.line3);
     _this.group2.add(_this.box3B);
     _this.group2.add(_this.box4A);
     _this.group2.add(_this.line4);
     _this.group2.add(_this.box4B);
     _this.group2.add(_this.box5A);
     _this.group2.add(_this.line5);
     _this.group2.add(_this.box5B);
     _this.group2.add(_this.box6A);
     _this.group2.add(_this.line6);
     _this.group2.add(_this.box6B);
    
    _this.rightAns1 = "93";
  //  _this.rightAns1B = "060302040104";
    _this.rightAns2 = "1515";
    
    for(var i = 0;i<_this.appleGroup.length;i++)
        {
              _this.appleGroup.getChildAt(i).inputEnabled = true;
              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
        }
    _this.numberPadShown = false;
    
},     
    
addNumberPad:function(){
        //_this.snapSound.play();
        _this.numGroup = _this.add.group();
       _this.footer = _this.add.sprite(0,475,'nsf2_4_numBG');
        _this.numGroup.add(_this.footer);
        var x = 100;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'nsf1_5_calNum'); 
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
        
        _this.Text1A = _this.add.text(26,27, _this.selAns1A="");
        _this.Text1A.anchor.setTo(0.5);
        _this.Text1A.align = 'center';
        _this.Text1A.font = 'myfont';
        _this.Text1A.fontSize = 35;
        _this.Text1A.fill = '#65B4C3';
        _this.Text1A.fontWeight = 'normal';
        _this.Text1A.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box1A.addChild(_this.Text1A);
      
         _this.Text2A = _this.add.text(26,27, _this.selAns2A="");
        _this.Text2A.anchor.setTo(0.5);
        _this.Text2A.align = 'center';
        _this.Text2A.font = 'myfont';
        _this.Text2A.fontSize = 35;
        _this.Text2A.fill = '#65B4C3';
        _this.Text2A.fontWeight = 'normal';
        _this.Text2A.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box2A.addChild(_this.Text2A);
      
       _this.Text3A = _this.add.text(26,27, _this.selAns3A="");
        _this.Text3A.anchor.setTo(0.5);
        _this.Text3A.align = 'center';
        _this.Text3A.font = 'myfont';
        _this.Text3A.fontSize = 35;
        _this.Text3A.fill = '#65B4C3';
        _this.Text3A.fontWeight = 'normal';
        _this.Text3A.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box3A.addChild(_this.Text3A);
      
       _this.Text4A = _this.add.text(26,27, _this.selAns4A="");
        _this.Text4A.anchor.setTo(0.5);
        _this.Text4A.align = 'center';
        _this.Text4A.font = 'myfont';
        _this.Text4A.fontSize = 35;
        _this.Text4A.fill = '#65B4C3';
        _this.Text4A.fontWeight = 'normal';
        _this.Text4A.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box4A.addChild(_this.Text4A);
      
       _this.Text5A = _this.add.text(26,27, _this.selAns5A="");
        _this.Text5A.anchor.setTo(0.5);
        _this.Text5A.align = 'center';
        _this.Text5A.font = 'myfont';
        _this.Text5A.fontSize = 35;
        _this.Text5A.fill = '#65B4C3';
        _this.Text5A.fontWeight = 'normal';
        _this.Text5A.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box5A.addChild(_this.Text5A);
      
       _this.Text6A = _this.add.text(26,27, _this.selAns6A="");
        _this.Text6A.anchor.setTo(0.5);
        _this.Text6A.align = 'center';
        _this.Text6A.font = 'myfont';
        _this.Text6A.fontSize = 35;
        _this.Text6A.fill = '#65B4C3';
        _this.Text6A.fontWeight = 'normal';
        _this.Text6A.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box6A.addChild(_this.Text6A);
        
        _this.Text1B = _this.add.text(26,27, _this.selAns1B="");
        _this.Text1B.anchor.setTo(0.5);
        _this.Text1B.align = 'center';
        _this.Text1B.font = 'myfont';
        _this.Text1B.fontSize = 35;
        _this.Text1B.fill = '#65B4C3';
        _this.Text1B.fontWeight = 'normal';
        _this.Text1B.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box1B.addChild(_this.Text1B);
      
        _this.Text2B = _this.add.text(26,27, _this.selAns2B="");
        _this.Text2B.anchor.setTo(0.5);
        _this.Text2B.align = 'center';
        _this.Text2B.font = 'myfont';
        _this.Text2B.fontSize = 35;
        _this.Text2B.fill = '#65B4C3';
        _this.Text2B.fontWeight = 'normal';
        _this.Text2B.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box2B.addChild(_this.Text2B);
      
         _this.Text3B = _this.add.text(26,27, _this.selAns3B="");
        _this.Text3B.anchor.setTo(0.5);
        _this.Text3B.align = 'center';
        _this.Text3B.font = 'myfont';
        _this.Text3B.fontSize = 35;
        _this.Text3B.fill = '#65B4C3';
        _this.Text3B.fontWeight = 'normal';
        _this.Text3B.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box3B.addChild(_this.Text3B);
      
       _this.Text4B = _this.add.text(26,27, _this.selAns4B="");
        _this.Text4B.anchor.setTo(0.5);
        _this.Text4B.align = 'center';
        _this.Text4B.font = 'myfont';
        _this.Text4B.fontSize = 35;
        _this.Text4B.fill = '#65B4C3';
        _this.Text4B.fontWeight = 'normal';
        _this.Text4B.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box4B.addChild(_this.Text4B);
      
       _this.Text5B = _this.add.text(26,27, _this.selAns5B="");
        _this.Text5B.anchor.setTo(0.5);
        _this.Text5B.align = 'center';
        _this.Text5B.font = 'myfont';
        _this.Text5B.fontSize = 35;
        _this.Text5B.fill = '#65B4C3';
        _this.Text5B.fontWeight = 'normal';
        _this.Text5B.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box5B.addChild(_this.Text5B);
      
       _this.Text6B = _this.add.text(26,27, _this.selAns6B="");
        _this.Text6B.anchor.setTo(0.5);
        _this.Text6B.align = 'center';
        _this.Text6B.font = 'myfont';
        _this.Text6B.fontSize = 35;
        _this.Text6B.fill = '#65B4C3';
        _this.Text6B.fontWeight = 'normal';
        _this.Text6B.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box6B.addChild(_this.Text6B);
        
        
        
   
        
        _this.wrongbtn = _this.numGroup.create(x+10,510,'nsf1_5_EraseButton');
        _this.wrongbtn.anchor.setTo(0.5);
       //_this.wrongbtn.scale.setTo(0.5,0.5);
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
           _this.wrongbtn.frame=1;
            if(_this.selectedBox == "box1A")
            {
            _this.Text1A.setText("");
            _this.selAns1A=""; 
            }
            if(_this.selectedBox == "box2A")
            {
            _this.Text2A.setText("");
            _this.selAns2A=""; 
            }
            if(_this.selectedBox == "box3A")
            {
            _this.Text3A.setText("");
            _this.selAns3A=""; 
            }
            if(_this.selectedBox == "box4A")
            {
            _this.Text4A.setText("");
            _this.selAns4A=""; 
            }
            if(_this.selectedBox == "box5A")
            {
            _this.Text5A.setText("");
            _this.selAns5A=""; 
            }
            if(_this.selectedBox == "box6A")
            {
            _this.Text6A.setText("");
            _this.selAns6A=""; 
            }
            if(_this.selectedBox == "box1B")
            {
            _this.Text1B.setText("");
            _this.selAns1B=""; 
            }
            if(_this.selectedBox == "box2B")
            {
            _this.Text2B.setText("");
            _this.selAns2B=""; 
            }
            if(_this.selectedBox == "box3B")
            {
            _this.Text3B.setText("");
            _this.selAns3B=""; 
            }
            if(_this.selectedBox == "box4B")
            {
            _this.Text4B.setText("");
            _this.selAns4B=""; 
            }
            if(_this.selectedBox == "box5B")
            {
            _this.Text5B.setText("");
            _this.selAns5B=""; 
            }
            if(_this.selectedBox == "box6B")
            {
            _this.Text6B.setText("");
            _this.selAns6B=""; 
            }
              
      _this.time.events.add(1000,function(){
           _this.wrongbtn.frame=0;
      },this);
      },this);

        _this.rightbtn =_this.numGroup.create(x+70,510,'nsf1_5_RightButton');
        _this.rightbtn.anchor.setTo(0.5);
      
        //_this.rightbtn.scale.setTo(0.5,0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(function(){

            _this.noofAttempts++;

              _this.clickSound.play();
              console.log(_this.selectedAns);
            console.log(_this.rightAns);
              _this.rightbtn.frame=1;
            _this.time.events.add(1000,function(){
                _this.rightbtn.frame = 0;
            },this);
            
            _this.selAns1A = _this.selAns1A.replace(/^0+/, '');
             _this.selAns2A = _this.selAns2A.replace(/^0+/, '');
             _this.selAns3A = _this.selAns3A.replace(/^0+/, '');
             _this.selAns4A = _this.selAns4A.replace(/^0+/, '');
             _this.selAns5A = _this.selAns5A.replace(/^0+/, '');
             _this.selAns6A = _this.selAns6A.replace(/^0+/, '');
            console.log("_this.selAns1A "+_this.selAns1A);
            
             _this.selectedAns1 = ""+_this.selAns1A+_this.selAns2A+_this.selAns3A+_this.selAns4A+_this.selAns5A+_this.selAns6A;
             _this.selectedAns2 = ""+_this.selAns1B+_this.selAns2B+_this.selAns3B+_this.selAns4B+_this.selAns5B+_this.selAns6B;
            
            if(_this.question == 1 || _this.question == 2)
                {
            if((_this.selectedAns1==_this.rightAns1 || _this.selectedAns1==""+_this.rightAns1)    &&
               (_this.selectedAns2 ==_this.rightAns2||_this.selectedAns2==""+_this.rightAns2)    &&
               ((_this.basket1.frame == (this.cloud1.frame-1)) && (_this.basket2.frame == (this.cloud2.frame-1)) && (_this.basket3.frame == (this.cloud3.frame-1)) && (_this.basket4.frame == (this.cloud4.frame-1)) && (_this.basket5.frame == (this.cloud5.frame-1)) && (_this.basket6.frame == (this.cloud6.frame-1)))) 
                {
                    
                    console.log("correct");
                  // _this.group2.setAll("frame",2);
                    _this.time.events.add(500,function(){
                        _this.group2.setAll("frame",2);
                     
                     },this);
                    _this.time.events.add(1000,function(){
                        _this.group2.setAll("frame",1);
                     
                     },this);
                    _this.time.events.add(1500,function(){
                        _this.group2.setAll("frame",2);
                     
                     },this);
                     _this.time.events.add(2000,function(){
                        _this.group2.setAll("frame",1);
                     
                     },this);
                    
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
                        
    
                    _this.time.events.add(1000,function(){
                        _this.rightbtn.frame = 0;
                     
                     },this);
                    
                    _this.time.events.add(1000,function(){
                        //_this.group2.setAll("frame",0);
                     },this);
         
                    
                   //  _this.celebr = __this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                    _this.time.events.add(2500, function(){_this.removeCelebration(); 
                                                          },_this);
                    
                    _this.questionid = 1;
            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                }
            else
                { 
                    //_this.appleGroup.reset(_this.appleGroup.x, _this.appleGroup.y);
                     console.log("wrong");
                    _this.basket1.frame=0;
                    _this.basket2.frame=0;
                    _this.basket3.frame=0;
                    _this.basket4.frame=0;
                    _this.basket5.frame=0;
                    _this.basket6.frame=0;
                    
                    _this.Text1A.setText("");
                    _this.selAns1A=""; 
                     _this.Text2A.setText("");
                    _this.selAns2A=""; 
                     _this.Text3A.setText("");
                    _this.selAns3A=""; 
                     _this.Text4A.setText("");
                    _this.selAns4A=""; 
                     _this.Text5A.setText("");
                    _this.selAns5A=""; 
                     _this.Text6A.setText("");
                    _this.selAns6A=""; 
                     _this.Text1B.setText("");
                    _this.selAns1B=""; 
                     _this.Text2B.setText("");
                    _this.selAns2B=""; 
                     _this.Text3B.setText("");
                    _this.selAns3B=""; 
                     _this.Text4B.setText("");
                    _this.selAns4B=""; 
                     _this.Text5B.setText("");
                    _this.selAns5B=""; 
                     _this.Text6B.setText("");
                    _this.selAns6B=""; 
                    _this.shake.shake(10, _this.group1);
                 //   _this.wmusic = __this.add.audio('waudio');
		            _this.waudio.play();
                  
                    _this.appleGroup.setAll("alpha",1);
                    
                     _this.box1A.frame = 0;
                     _this.box1A.inputEnabled = false;
                     _this.box2A.frame = 0;
                    _this.box2A.inputEnabled = false;
                     _this.box3A.frame = 0;
                    _this.box3A.inputEnabled = false;
                     _this.box4A.frame = 0;
                    _this.box4A.inputEnabled = false;
                     _this.box5A.frame = 0;
                    _this.box5A.inputEnabled = false;
                     _this.box6A.frame = 0;
                    _this.box6A.inputEnabled = false;
                      
                     _this.box1B.frame = 1;
                     _this.box2B.frame = 1;
                     _this.box3B.frame = 1;
                     _this.box4B.frame = 1;
                     _this.box5B.frame = 1;
                     _this.box6B.frame = 1;
                 
                      for(var i = 0;i<_this.appleGroup.length;i++)
                        {
                              _this.appleGroup.getChildAt(i).inputEnabled = true;
                              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
                              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
                        }
                }
             }
            
             if(_this.question == 3 || _this.question == 4 || _this.question == 5)
                {
            if((_this.selectedAns1==_this.rightAns1 || _this.selectedAns1==""+_this.rightAns1)    &&
               (_this.selectedAns2 ==_this.rightAns2||_this.selectedAns2==""+_this.rightAns2)    &&
               ((_this.basket1.frame == (this.cloud1.frame-1)) && (_this.basket2.frame == (this.cloud2.frame-1)) && (_this.basket3.frame == (this.cloud3.frame-1)) && (_this.basket4.frame == (this.cloud4.frame-1)) && (_this.basket6.frame == (this.cloud6.frame-1)))) 
                {
                  
                    console.log("correct");
                    
                     _this.time.events.add(500,function(){
                        _this.group2.setAll("frame",2);
                     
                     },this);
                    _this.time.events.add(1000,function(){
                        _this.group2.setAll("frame",1);
                     
                     },this);
                    _this.time.events.add(1500,function(){
                        _this.group2.setAll("frame",2);
                     
                     },this);
                     _this.time.events.add(2000,function(){
                        _this.group2.setAll("frame",1);
                     
                     },this);
                    
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
                        
    
                    _this.time.events.add(1000,function(){
                        _this.rightbtn.frame = 0;
                     
                     },this);
                    
                    _this.time.events.add(1000,function(){
                        //_this.group2.setAll("frame",0);
                     },this);
         
                    
                   //  _this.celebr = __this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                    _this.time.events.add(2500, function(){_this.removeCelebration(); 
                                                          },_this);

                    _this.questionid = 1;
            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
            
                }
            else
                {
                   
                     console.log("wrong");
                      _this.basket1.frame=0;
                    _this.basket2.frame=0;
                    _this.basket3.frame=0;
                    _this.basket4.frame=0;
                    _this.basket5.frame=0;
                    _this.basket6.frame=0;
                    
                    _this.Text1A.setText("");
                    _this.selAns1A=""; 
                     _this.Text2A.setText("");
                    _this.selAns2A=""; 
                     _this.Text3A.setText("");
                    _this.selAns3A=""; 
                     _this.Text4A.setText("");
                    _this.selAns4A=""; 
                     _this.Text5A.setText("");
                    _this.selAns5A=""; 
                     _this.Text6A.setText("");
                    _this.selAns6A=""; 
                     _this.Text1B.setText("");
                    _this.selAns1B=""; 
                     _this.Text2B.setText("");
                    _this.selAns2B=""; 
                     _this.Text3B.setText("");
                    _this.selAns3B=""; 
                     _this.Text4B.setText("");
                    _this.selAns4B=""; 
                     _this.Text5B.setText("");
                    _this.selAns5B=""; 
                     _this.Text6B.setText("");
                    _this.selAns6B=""; 
                    _this.shake.shake(10, _this.group1);
                 //   _this.wmusic = __this.add.audio('waudio');
                    _this.waudio.play();
                    _this.appleGroup.setAll("alpha",1);
                    
                   _this.box1A.frame = 0;
                     _this.box1A.inputEnabled = false;
                     _this.box2A.frame = 0;
                    _this.box2A.inputEnabled = false;
                     _this.box3A.frame = 0;
                    _this.box3A.inputEnabled = false;
                     _this.box4A.frame = 0;
                    _this.box4A.inputEnabled = false;
                     _this.box5A.frame = 0;
                    _this.box5A.inputEnabled = false;
                     _this.box6A.frame = 0;
                    _this.box6A.inputEnabled = false;
                      
                     _this.box1B.frame = 1;
                     _this.box2B.frame = 1;
                     _this.box3B.frame = 1;
                     _this.box4B.frame = 1;
                     _this.box5B.frame = 1;
                     _this.box6B.frame = 1;
                    
                      for(var i = 0;i<_this.appleGroup.length;i++)
                        {
                              _this.appleGroup.getChildAt(i).inputEnabled = true;
                              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
                              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
                        }
                }
             }
            
             if(_this.question == 6 || _this.question == 7 || _this.question == 8)
                {
            if((_this.selectedAns1==_this.rightAns1 || _this.selectedAns1==""+_this.rightAns1)    &&
               (_this.selectedAns2 ==_this.rightAns2||_this.selectedAns2==""+_this.rightAns2)    &&
               ((_this.basket1.frame == (this.cloud1.frame-1)) && (_this.basket3.frame == (this.cloud3.frame-1)) && (_this.basket4.frame == (this.cloud4.frame-1)) && (_this.basket6.frame == (this.cloud6.frame-1)))) 
                {
                     console.log("frame "+_this.box1A.frame);
                     _this.time.events.add(500,function(){
                     _this.group2.setAll("frame",2);
                     },this);
                    
                    _this.time.events.add(1000,function(){
                        _this.group2.setAll("frame",1);
                     },this);
                    
                    _this.time.events.add(1500,function(){
                        _this.group2.setAll("frame",2);       
                     },this);
                    
                     _this.time.events.add(2000,function(){
                        _this.group2.setAll("frame",1);
                     
                     },this);

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
                        
    
                    _this.time.events.add(1000,function(){
                        _this.rightbtn.frame = 0;
                     
                     },this);
                    
                     _this.time.events.add(1000,function(){
                        //_this.group2.setAll("frame",0);
                     },this);
                    
                   //  _this.celebr = __this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                    _this.time.events.add(2500, function(){_this.removeCelebration(); 
                                                          },_this);
                    
                    _this.questionid = 1;
                    telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                }
            else
                {
                   
                     console.log("wrong");
                    _this.basket1.frame=0;
                    _this.basket2.frame=0;
                    _this.basket3.frame=0;
                    _this.basket4.frame=0;
                    _this.basket5.frame=0;
                    _this.basket6.frame=0;
                    
                    _this.Text1A.setText("");
                    _this.selAns1A=""; 
                     _this.Text2A.setText("");
                    _this.selAns2A=""; 
                     _this.Text3A.setText("");
                    _this.selAns3A=""; 
                     _this.Text4A.setText("");
                    _this.selAns4A=""; 
                     _this.Text5A.setText("");
                    _this.selAns5A=""; 
                     _this.Text6A.setText("");
                    _this.selAns6A=""; 
                     _this.Text1B.setText("");
                    _this.selAns1B=""; 
                     _this.Text2B.setText("");
                    _this.selAns2B=""; 
                     _this.Text3B.setText("");
                    _this.selAns3B=""; 
                     _this.Text4B.setText("");
                    _this.selAns4B=""; 
                     _this.Text5B.setText("");
                    _this.selAns5B=""; 
                     _this.Text6B.setText("");
                    _this.selAns6B=""; 
                    _this.shake.shake(10, _this.group1);
                 //   _this.wmusic = __this.add.audio('waudio');
		            _this.waudio.play(); 
                      
                     _this.box1A.frame = 0;
                     _this.box1A.inputEnabled = false;
                     _this.box2A.frame = 0;
                    _this.box2A.inputEnabled = false;
                     _this.box3A.frame = 0;
                    _this.box3A.inputEnabled = false;
                     _this.box4A.frame = 0;
                    _this.box4A.inputEnabled = false;
                     _this.box5A.frame = 0;
                    _this.box5A.inputEnabled = false;
                     _this.box6A.frame = 0;
                    _this.box6A.inputEnabled = false;
                      
                     _this.box1B.frame = 1;
                     _this.box2B.frame = 1;
                     _this.box3B.frame = 1;
                     _this.box4B.frame = 1;
                     _this.box5B.frame = 1;
                     _this.box6B.frame = 1;
                    
                    _this.appleGroup.setAll("alpha",1);
                    
                      for(var i = 0;i<_this.appleGroup.length;i++)
                        {
                              _this.appleGroup.getChildAt(i).inputEnabled = true;
                              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
                              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
                        }
                }
             }
            
             if(_this.question == 9 || _this.question == 10 || _this.question == 11)
                {
            if((_this.selectedAns1==_this.rightAns1 || _this.selectedAns1==""+_this.rightAns1)    &&
               (_this.selectedAns2 ==_this.rightAns2||_this.selectedAns2==""+_this.rightAns2)    &&
               ((_this.basket1.frame == (this.cloud1.frame-1)) && (_this.basket2.frame == (this.cloud2.frame-1)) && (_this.basket4.frame == (this.cloud4.frame-1)) )) 
                {
                  
                    console.log("correct");
                    
                     _this.time.events.add(500,function(){
                        _this.group2.setAll("frame",2); 
                     },this);
                    _this.time.events.add(1000,function(){
                        _this.group2.setAll("frame",1);
                     },this);
                    _this.time.events.add(1500,function(){
                        _this.group2.setAll("frame",2);
                     },this);
                     _this.time.events.add(2000,function(){
                        _this.group2.setAll("frame",1);
                     },this);
                    
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
                        
    
                    _this.time.events.add(1000,function(){
                        _this.rightbtn.frame = 0;
                     
                     },this);
                    
                    _this.time.events.add(1000,function(){
                        //_this.group2.setAll("frame",0);
                     },this);
         
                    
                   //  _this.celebr = __this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                    _this.time.events.add(2500, function(){_this.removeCelebration(); 
                                                          },_this);
                    
                    _this.questionid = 1;
                    telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                }
            else
                {
                   
                     console.log("wrong");
                      _this.basket1.frame=0;
                    _this.basket2.frame=0;
                    _this.basket3.frame=0;
                    _this.basket4.frame=0;
                    _this.basket5.frame=0;
                    _this.basket6.frame=0;
                    
                    _this.Text1A.setText("");
                    _this.selAns1A=""; 
                     _this.Text2A.setText("");
                    _this.selAns2A=""; 
                     _this.Text3A.setText("");
                    _this.selAns3A=""; 
                     _this.Text4A.setText("");
                    _this.selAns4A=""; 
                     _this.Text5A.setText("");
                    _this.selAns5A=""; 
                     _this.Text6A.setText("");
                    _this.selAns6A=""; 
                     _this.Text1B.setText("");
                    _this.selAns1B=""; 
                     _this.Text2B.setText("");
                    _this.selAns2B=""; 
                     _this.Text3B.setText("");
                    _this.selAns3B=""; 
                     _this.Text4B.setText("");
                    _this.selAns4B=""; 
                     _this.Text5B.setText("");
                    _this.selAns5B=""; 
                     _this.Text6B.setText("");
                    _this.selAns6B=""; 
                    _this.shake.shake(10, _this.group1);
                 //   _this.wmusic = __this.add.audio('waudio');
		            _this.waudio.play(); 
                    _this.appleGroup.setAll("alpha",1);
                    
                   _this.box1A.frame = 0;
                     _this.box1A.inputEnabled = false;
                     _this.box2A.frame = 0;
                    _this.box2A.inputEnabled = false;
                     _this.box3A.frame = 0;
                    _this.box3A.inputEnabled = false;
                     _this.box4A.frame = 0;
                    _this.box4A.inputEnabled = false;
                     _this.box5A.frame = 0;
                    _this.box5A.inputEnabled = false;
                     _this.box6A.frame = 0;
                    _this.box6A.inputEnabled = false;
                      
                     _this.box1B.frame = 1;
                     _this.box2B.frame = 1;
                     _this.box3B.frame = 1;
                     _this.box4B.frame = 1;
                     _this.box5B.frame = 1;
                     _this.box6B.frame = 1;
                    
                      for(var i = 0;i<_this.appleGroup.length;i++)
                        {
                              _this.appleGroup.getChildAt(i).inputEnabled = true;
                              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
                              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
                        }
                }
             }
              if(_this.question == 12)
                {
            if((_this.selectedAns1==_this.rightAns1 || _this.selectedAns1==""+_this.rightAns1)    &&
               (_this.selectedAns2 ==_this.rightAns2||_this.selectedAns2==""+_this.rightAns2)    &&
               ((_this.basket2.frame == (this.cloud2.frame-1)) && (_this.basket5.frame == (this.cloud5.frame-1)))) 
                {
                  
                    console.log("correct");
                    
                    _this.time.events.add(500,function(){
                        _this.group2.setAll("frame",2);                  
                     },this);
                    _this.time.events.add(1000,function(){
                        _this.group2.setAll("frame",1);                    
                     },this);
                    _this.time.events.add(1500,function(){
                        _this.group2.setAll("frame",2);                   
                     },this);
                     _this.time.events.add(2000,function(){
                        _this.group2.setAll("frame",1);                    
                     },this);
                    
                    //_this.group2.setAll("frame",2);
                    
                   //   _this.group2.callAll('animations.add', 'animations', 'nsf1_5_box', [1,2], 16, true);
                  //    _this.group2.callAll('play',null,'nsf1_5_box');
                    
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
                        
    
                    _this.time.events.add(1000,function(){
                        _this.rightbtn.frame = 0;
                     
                     },this);
                      
                   //  _this.celebr = __this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                    _this.time.events.add(2500, function(){_this.removeCelebration(); 
                                                          },_this);
                    
                    _this.questionid = 1;
            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                }
            else
                {
                   
                     console.log("wrong");
                      _this.basket1.frame=0;
                    _this.basket2.frame=0;
                    _this.basket3.frame=0;
                    _this.basket4.frame=0;
                    _this.basket5.frame=0;
                    _this.basket6.frame=0;
                    
                    console.log(_this.apple1);
                    _this.Text1A.setText("");
                    _this.selAns1A=""; 
                     _this.Text2A.setText("");
                    _this.selAns2A=""; 
                     _this.Text3A.setText("");
                    _this.selAns3A=""; 
                     _this.Text4A.setText("");
                    _this.selAns4A=""; 
                     _this.Text5A.setText("");
                    _this.selAns5A=""; 
                     _this.Text6A.setText("");
                    _this.selAns6A=""; 
                     _this.Text1B.setText("");
                    _this.selAns1B=""; 
                     _this.Text2B.setText("");
                    _this.selAns2B=""; 
                     _this.Text3B.setText("");
                    _this.selAns3B=""; 
                     _this.Text4B.setText("");
                    _this.selAns4B=""; 
                     _this.Text5B.setText("");
                    _this.selAns5B=""; 
                     _this.Text6B.setText("");
                    _this.selAns6B=""; 
                    _this.shake.shake(10, _this.group1);
                 //   _this.wmusic = __this.add.audio('waudio');
		            _this.waudio.play(); 
                    _this.appleGroup.setAll("alpha",1);
                    
                   _this.box1A.frame = 0;
                     _this.box1A.inputEnabled = false;
                     _this.box2A.frame = 0;
                    _this.box2A.inputEnabled = false;
                     _this.box3A.frame = 0;
                    _this.box3A.inputEnabled = false;
                     _this.box4A.frame = 0;
                    _this.box4A.inputEnabled = false;
                     _this.box5A.frame = 0;
                    _this.box5A.inputEnabled = false;
                     _this.box6A.frame = 0;
                    _this.box6A.inputEnabled = false;
                      
                     _this.box1B.frame = 1;
                     _this.box2B.frame = 1;
                     _this.box3B.frame = 1;
                     _this.box4B.frame = 1;
                     _this.box5B.frame = 1;
                     _this.box6B.frame = 1;
                    
                      for(var i = 0;i<_this.appleGroup.length;i++)
                        {
                              _this.appleGroup.getChildAt(i).inputEnabled = true;
                              _this.appleGroup.getChildAt(i).input.useHandCursor = true;
                              _this.appleGroup.getChildAt(i).events.onInputDown.add(this.dragapple,this);
                        }
                }
             }
                
        },this);
    
      
      
      _this.numGroup.y  = 100;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
          //  target.events.onInputDown.removeAll();
        
       
       // _this.numGroup.add(_this.box);
    },
    
    
numClicked:function(target){
        _this.clickSound.play();
        
          if(_this.selectedBox == "box1A")
            {
              if(_this.selAns1A.length<2)
                {

                    _this.selAns1A+= target.name;
                    console.log("1a");
                    _this.Text1A.setText(_this.selAns1A);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
            }
          if(_this.selectedBox == "box2A")
              {
              if(_this.selAns2A.length<2)
                {

                    _this.selAns2A+= target.name;
                    console.log("2a");
                    _this.Text2A.setText(_this.selAns2A);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
          if(_this.selectedBox == "box3A")
              {
              if(_this.selAns3A.length<2)
                {

                    _this.selAns3A+= target.name;
                    console.log("3a");
                    _this.Text3A.setText(_this.selAns3A);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
          if(_this.selectedBox == "box4A")
              {
              if(_this.selAns4A.length<2)
                {

                    _this.selAns4A+= target.name;
                    console.log("4a");
                    _this.Text4A.setText(_this.selAns4A);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
          if(_this.selectedBox == "box5A")
            {
              if(_this.selAns5A.length<2)
                {

                    _this.selAns5A+= target.name;
                    console.log("5a");
                    _this.Text5A.setText(_this.selAns5A);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
             }
          if(_this.selectedBox == "box6A")
            {
                  if(_this.selAns6A.length<2)
                    {

                        _this.selAns6A+= target.name;
                        console.log("6a");
                        _this.Text6A.setText(_this.selAns6A);
                        //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                    }
            }
        if(_this.selectedBox == "box1B")
            {
                if(_this.selAns1B.length<2)
                {

                    _this.selAns1B+= target.name;
                    console.log("1b ");
                    _this.Text1B.setText(_this.selAns1B);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
            }
         if(_this.selectedBox == "box2B")
          {
             if(_this.selAns2B.length<2)
                {

                    _this.selAns2B+= target.name;
                    console.log("2b ");
                    _this.Text2B.setText(_this.selAns2B);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
          }
         if(_this.selectedBox == "box3B")
            {
             if(_this.selAns3B.length<2)
                {

                    _this.selAns3B+= target.name;
                    console.log("3b ");
                    _this.Text3B.setText(_this.selAns3B);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
             }
        
         if(_this.selectedBox == "box4B")
             {
             if(_this.selAns4B.length<2)
                {

                    _this.selAns4B+= target.name;
                    console.log("4b ");
                    _this.Text4B.setText(_this.selAns4B);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
             }
        
         if(_this.selectedBox == "box5B")
             {
              if(_this.selAns5B.length<2)
                {

                    _this.selAns5B+= target.name;
                    console.log("5b ");
                    _this.Text5B.setText(_this.selAns5B);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
             }
        
         if(_this.selectedBox == "box6B")
         {
             if(_this.selAns6B.length<2)
                {

                    _this.selAns6B+= target.name;
                    console.log("6b ");
                    _this.Text6B.setText(_this.selAns6B);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
         }

        
        
        
    },
    
removeCelebration:function()
	{
        console.log("removeCeleb");
		_this.celebration = false;
		console.log("no"+_this.no11);
        _this.correct=0;
        _this.count=0;
         _this.qno++;

       
		 
		   
		  if(_this.qno<6)
                    {
                        if( _this.basket1DragApple)    
                        {_this.basket1DragApple.destroy();}
                        
                        if( _this.basket2DragApple)    
                        {_this.basket2DragApple.destroy();}
                        
                         if( _this.basket3DragApple)    
                        {_this.basket3DragApple.destroy();}
                        
                          if( _this.basket4DragApple)    
                        {_this.basket4DragApple.destroy();}
                        
                         if( _this.basket5DragApple)    
                        {_this.basket5DragApple.destroy();}
                        
                         if( _this.basket6DragApple)    
                        {_this.basket6DragApple.destroy();}
                        
                        _this.appleGroup.destroy();
                        _this.shadowgroup.destroy();
                        _this.group1.destroy();
                         _this.group2.destroy();
                        _this.numGroup.destroy();
                        //_this.selectedAns = "";
                        _this.getQuestion();
                    
                    }
        
                else
                    {
                         
                        // _this.stopvoice();
                         _this.state.start('nsf1_5Score');
                  }
        
	
	},
    
    getVoice:function()
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
            console.log("!!!!!!!!!!!! "+window.languageSelected);
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
            case 12:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/English/nsf1.5E.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Hindi/nsf1.5H.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Kannada/nsf1.5K.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Gujarati/nsf1.5G.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Marathi/nsf1.5.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Telugu/nsf1.5.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Tamil/nsf1.5.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Urdu/nsf1.5.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.5/Odiya/nsf1.5O.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
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

    }

       
};