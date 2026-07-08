Game.sg24_1_4level1=function(){};
	
	
	

Game.sg24_1_4level1.prototype={
    init:function(game)
	{
		_this = this;
       
		telInitializer.gameIdInit("SG24_1_4",gradeSelected);
	},

preload:function(game){
  if(!window.grade4SG6){

            window.grade4SG6 = true;

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

            this.load.image('sg16_2_4_box',window.baseUrl+'assets/gradeAssets/sg16.2.4/box.png');
            
            this.load.image('sg24_1_4_symbol',window.baseUrl+'assets/gradeAssets/sg24.1.4/Symbol.png'); 
        
         this.load.atlas('sg24_1_4_RightButton',window.baseUrl+'assets/gradeAssets/sg24.1.4/RightButton.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/RightButton.json');
         this.load.atlas('sg24_1_4_EraseButton',window.baseUrl+'assets/gradeAssets/sg24.1.4/EraseButton.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/EraseButton.json');

         this.load.image('sg24_1_4_dotline1',window.baseUrl+'assets/gradeAssets/sg24.1.4/doteline1.png');
         this.load.image('sg24_1_4_dotline2',window.baseUrl+'assets/gradeAssets/sg24.1.4/doteline2.png'); 
         this.load.image('sg24_1_4_dotline3',window.baseUrl+'assets/gradeAssets/sg24.1.4/doteline3.png');
         this.load.image('sg24_1_4_dotline4',window.baseUrl+'assets/gradeAssets/sg24.1.4/doteline4.png');
         this.load.image('sg24_1_4_dotline5',window.baseUrl+'assets/gradeAssets/sg24.1.4/doteline5.png');
         this.load.image('sg24_1_4_dotline6',window.baseUrl+'assets/gradeAssets/sg24.1.4/doteline6.png');
         this.load.image('sg24_1_4_dotline7',window.baseUrl+'assets/gradeAssets/sg24.1.4/doteline7.png');
        
         this.load.image('sg24_1_4_img1',window.baseUrl+'assets/gradeAssets/sg24.1.4/img1.png');
         this.load.image('sg24_1_4_img2',window.baseUrl+'assets/gradeAssets/sg24.1.4/img2.png');
         this.load.image('sg24_1_4_img3',window.baseUrl+'assets/gradeAssets/sg24.1.4/img3.png');
         this.load.image('sg24_1_4_img4',window.baseUrl+'assets/gradeAssets/sg24.1.4/img4.png');
         this.load.image('sg24_1_4_img5',window.baseUrl+'assets/gradeAssets/sg24.1.4/img5.png');
        
         this.load.image('sg24_1_4_dot',window.baseUrl+'assets/gradeAssets/sg24.1.4/dote.png');
        
         
         this.load.atlas('sg24_1_4_line1',window.baseUrl+'assets/gradeAssets/sg24.1.4/line1.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/line1.json');
         this.load.atlas('sg24_1_4_line2',window.baseUrl+'assets/gradeAssets/sg24.1.4/line2.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/line2.json');
         this.load.atlas('sg24_1_4_line3',window.baseUrl+'assets/gradeAssets/sg24.1.4/line3.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/line3.json');
        
         
         this.load.atlas('sg24_1_4_footstep1',window.baseUrl+'assets/gradeAssets/sg24.1.4/footstep1.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/footstep1.json');
         this.load.atlas('sg24_1_4_footstep2',window.baseUrl+'assets/gradeAssets/sg24.1.4/footstep2.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/footstep2.json');
         this.load.atlas('sg24_1_4_footstep3',window.baseUrl+'assets/gradeAssets/sg24.1.4/footstep3.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/footstep3.json');
         this.load.atlas('sg24_1_4_footstep4',window.baseUrl+'assets/gradeAssets/sg24.1.4/footstep4.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/footstep4.json');
         this.load.atlas('sg24_1_4_footstep5',window.baseUrl+'assets/gradeAssets/sg24.1.4/footstep5.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/footstep5.json');
         this.load.atlas('sg24_1_4_footstep6',window.baseUrl+'assets/gradeAssets/sg24.1.4/footstep6.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/footstep6.json');
         this.load.atlas('sg24_1_4_footstep7',window.baseUrl+'assets/gradeAssets/sg24.1.4/footstep7.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/footstep7.json');
         this.load.atlas('sg24_1_4_footstep8',window.baseUrl+'assets/gradeAssets/sg24.1.4/footstep8.png' ,window.baseUrl+'json/gradeJson/sg24.1.4/footstep8.json');
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
    _this.tick=0;
    _this.numGroup=0;
    _this.enterTxt=0;
    _this.txtbox=0;
    _this.grpnum=new Array();
    _this.boxclick=0;
    _this.minutes=0;_this.seconds=0;_this.counterForTimer=0;

    _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount=0;

    _this.box=0;
    _this.soundPlayed = false;
    _this.soundPlayed2 = false;
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

         _this.bg1 = _this.add.sprite(0,0, 'commonBg2');
        _this.TopBar=_this.add.sprite(0,0,'Level42C_Topbar');
      //  _this.sg16_2_4_footer = _this.add.sprite(0,480,'sg16_2_4_footer');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
       // _this.backbtn.events.onInputDown.removeAll();
        this.stopVoice();
       _this.clickSound.play();

       _this.state.start('grade1levelSelectionScreen',true,false);
    },this);
        
   _this.timebg=_this.add.sprite(305,6,'Level42C_timer');
    _this.timebg.scale.setTo(1,1);
        
    _this.timeDisplay = _this.add.text(330,22,_this.minutes + ':'+ _this.seconds);
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = 'center';
    _this.timeDisplay.font = 'myfont';
    _this.timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    _this.timeDisplay.fill = '#ADFF2F';

       // _this.speaker = _this.add.sprite(600,6,'speaker');//,function(){console.log("speaker on");/*this.speakeron();*/},this,0,1,2);
        _this.speaker = this.add.button(620,9,'grade11_speaker',function(){
            this.clickSound = this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();},_this,1,0,2);
    
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
             _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
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
    
    question1:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("first");
       
         
        
        
           _this.sprite1 = _this.add.sprite(70, 100, 'sg24_1_4_symbol');
           _this.dotline = _this.add.sprite(210, 100, 'sg24_1_4_dotline1');
           _this.sprite3 = _this.add.sprite(202,93,'sg24_1_4_dot');
           _this.box = _this.add.sprite(840,240,'sg16_2_4_box');
              _this.group1=_this.add.group();
              _this.group2 = _this.add.group(); 
              _this.group3 = _this.add.group();
              _this.group4 = _this.add.group()
        
              _this.group1.add(_this.sprite1);
              _this.group1.add(_this.dotline);  
              _this.group1.add(_this.sprite3); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
             if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
            _this.line1 = _this.add.sprite(198,86,'sg24_1_4_line2');
            _this.line1.visible = false;
        
             _this.graphics1 = _this.add.graphics(100, 55);   
             _this.graphics1.lineStyle(0);
             _this.graphics1.beginFill(0xFF0000, 0.5);
             _this.graphics1.drawCircle(178, 50, 50);
             _this.graphics1.endFill();
             _this.graphics1.alpha = 0;
             _this.graphics1.name = "graphics1";
             _this.graphics1.inputEnabled = true;
            
             _this.graphics1.events.onInputDown.add(function(target)
              { 
                 _this.clickSound.play();
                 console.log("graphics1 "+target.name);
                if(target.name == "graphics1")
                    {
                         _this.one = _this.add.sprite(269,93,'sg24_1_4_dot');
                         _this.group4.add(_this.one);
                        _this.line1.visible = true; 
                        _this.graphics2.inputEnabled = true;
                       // _this.sprite3.x += 68;
                       // this.addNumberPad();
                        target.events.onInputDown.removeAll();
                      
                    
                    }
              },this)
        
            _this.sg24_1_4_line2 = _this.add.sprite(266,86,'sg24_1_4_line2');
            _this.sg24_1_4_line2.visible = false;
        
             _this.graphics2 = _this.add.graphics(100, 55);   
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFF0000, 0.5);
            _this.graphics2.drawCircle(247, 50,50);
            _this.graphics2.endFill();
            _this.graphics2.alpha = 0;
            _this.graphics2.name = "graphics2";
           
            _this.graphics2.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("graphics2 "+target.name);
                if(target.name == "graphics2")
                    {
                          _this.two = _this.add.sprite(336,93,'sg24_1_4_dot');
                        _this.group4.add(_this.two);
                        _this.sg24_1_4_line2.visible = true;
                         _this.graphics1.inputEnabled = false;
                        _this.graphics3.inputEnabled = true;
                       // _this.sprite3.x += 68;
                  
                          target.events.onInputDown.removeAll();
                    }
              },this)
        
            _this.sg24_1_4_line3 = _this.add.sprite(333,86,'sg24_1_4_line2');
            _this.sg24_1_4_line3.visible = false;
        
             _this.graphics3 = _this.add.graphics(100, 55);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFF0000, 0.5);
            _this.graphics3.drawCircle(315, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha = 0;
            _this.graphics3.name ="graphics3";
           _this.graphics3.events.onInputDown.add(function(target)
              { 
               _this.clickSound.play();
                 console.log("graphics3 "+target.name);
                if(target.name == "graphics3")
                    {        
                          _this.three = _this.add.sprite(403,93,'sg24_1_4_dot');
                          _this.group4.add(_this.three);
                        _this.sg24_1_4_line3.visible = true; 
                        _this.graphics4.inputEnabled = true;
                       // _this.graphics23.inputEnabled = false;
                       // _this.sprite3.x +=68;
                         target.events.onInputDown.removeAll();
                    }
              },this)
        
                
          
            _this.line4 = _this.add.sprite(400,86,'sg24_1_4_line2');
            _this.line4.visible = false;
            _this.graphics4 = _this.add.graphics(100, 55);
           _this.graphics4.lineStyle(0);
           _this.graphics4.beginFill(0xFF0000, 0.5);
           _this.graphics4.drawCircle(384,50,50);
           _this.graphics4.endFill();
            _this.graphics4.alpha = 0;
            _this.graphics4.name ="graphics4";
             _this.graphics4.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics4 "+target.name);
                if(target.name == "graphics4")
                    {
                        _this.four = _this.add.sprite(470,93,'sg24_1_4_dot');  
                        _this.group4.add(_this.four);
                        _this.line4.visible = true; 
                        _this.graphics5.inputEnabled = true;
                       // _this.graphics23.inputEnabled = false;
                       //  _this.sprite3.x +=68;
                         target.events.onInputDown.removeAll();
                    }
              },this)
          
                
          
          _this.line5 = _this.add.sprite(467,86,'sg24_1_4_line2');
          _this.line5.visible = false;
        _this.graphics5 = _this.add.graphics(100, 55);
           _this.graphics5.lineStyle(0);
           _this.graphics5.beginFill(0xFF0000, 0.5);
           _this.graphics5.drawCircle(452,50,50);
           _this.graphics5.endFill();
           _this.graphics5.alpha = 0;
            _this.graphics5.name ="graphics5";
             _this.graphics5.events.onInputDown.add(function(target)
              { 
                    _this.clickSound.play();
                 console.log("graphics5 "+target.name);
                if(target.name == "graphics5")
                    {
                        _this.five = _this.add.sprite(543,93,'sg24_1_4_dot'); 
                        _this.group4.add(_this.five);
                        _this.line5.visible = true; 
                        _this.graphics6.inputEnabled = true;
                      
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    }
              },this)
           
        _this.line6 = _this.add.sprite(534,86,'sg24_1_4_line2');
          _this.line6.visible = false;
            _this.graphics6 = _this.add.graphics(100, 55);
           _this.graphics6.lineStyle(0);
           _this.graphics6.beginFill(0xFF0000, 0.5);
           _this.graphics6.drawCircle(520,50,50);
           _this.graphics6.endFill();
           _this.graphics6.alpha = 0;
            _this.graphics6.name ="graphics6";
             _this.graphics6.events.onInputDown.add(function(target)
              { 
                    _this.clickSound.play();
                 console.log("graphics6 "+target.name);
                if(target.name == "graphics6")
                    {
                           _this.six = _this.add.sprite(611,93,'sg24_1_4_dot');
                          _this.group4.add(_this.six);
                          _this.line6.visible = true; 
                          _this.graphics7.inputEnabled = true;
                           target.events.onInputDown.removeAll();
                  
                    }
              },this)
           
          
        
           _this.line7 = _this.add.sprite(604,86,'sg24_1_4_line3');
           _this.line7.visible = false;
            _this.graphics7 = _this.add.graphics(100, 122);
           _this.graphics7.lineStyle(0);
           _this.graphics7.beginFill(0xFF0000, 0.5);
           _this.graphics7.drawCircle(520,50,50);
           _this.graphics7.endFill();
           _this.graphics7.alpha = 0;
            _this.graphics7.name ="graphics7";
             _this.graphics7.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics7 "+target.name);
                if(target.name == "graphics7")
                    {
                            _this.seven = _this.add.sprite(611,160,'sg24_1_4_dot');
                         _this.group4.add(_this.seven); 
                        _this.line7.visible = true; 
                        _this.graphics8.inputEnabled = true;
                        // _this.sprite3.y +=68;
                    target.events.onInputDown.removeAll();
                    }
              },this)
         
         _this.line8 = _this.add.sprite(604,153,'sg24_1_4_line3');
             _this.line8.visible = false;
            _this.graphics8 = _this.add.graphics(100, 189);
           _this.graphics8.lineStyle(0);
           _this.graphics8.beginFill(0xFF0000, 0.5);
           _this.graphics8.drawCircle(520,50,50);
           _this.graphics8.endFill();
          _this.graphics8.alpha = 0;
            _this.graphics8.name ="graphics8";
             _this.graphics8.events.onInputDown.add(function(target)
              { 
                 _this.clickSound.play();
                 console.log("graphics8 "+target.name);
                if(target.name == "graphics8")
                    {
                          _this.eight = _this.add.sprite(611,227,'sg24_1_4_dot');
                         _this.group4.add(_this.eight);    
                        _this.line8.visible = true; 
                        _this.graphics9.inputEnabled = true;
                        // _this.sprite3.y +=68;
                        target.events.onInputDown.removeAll();
                    }
              },this)
        
          _this.line9 = _this.add.sprite(604,220,'sg24_1_4_line3');
              _this.line9.visible = false;
            _this.graphics9 = _this.add.graphics(100, 256);
           _this.graphics9.lineStyle(0);
           _this.graphics9.beginFill(0xFF0000, 0.5);
           _this.graphics9.drawCircle(520,50,50);
           _this.graphics9.endFill();
            _this.graphics9.alpha = 0;
            _this.graphics9.name ="graphics9";
             _this.graphics9.events.onInputDown.add(function(target)
              { 
                      _this.clickSound.play();
                 console.log("graphics9 "+target.name);
                if(target.name == "graphics9")
                    {
                         _this.nine = _this.add.sprite(611,294,'sg24_1_4_dot');
                         _this.group4.add(_this.nine);
                        _this.line9.visible = true; 
                        _this.graphics10.inputEnabled = true;
                       //  _this.sprite3.y +=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
         
         _this.line10 = _this.add.sprite(604,287,'sg24_1_4_line3');
                _this.line10.visible = false;
            _this.graphics10 = _this.add.graphics(100, 324);
           _this.graphics10.lineStyle(0);
           _this.graphics10.beginFill(0xFF0000, 0.5);
           _this.graphics10.drawCircle(520,50,50);
           _this.graphics10.endFill();
            _this.graphics10.alpha = 0;
            _this.graphics10.name ="graphics10";
             _this.graphics10.events.onInputDown.add(function(target)
              { 
                 _this.clickSound.play();
                 console.log("graphics10 "+target.name);
                if(target.name == "graphics10")
                    {
                          _this.ten = _this.add.sprite(611,361,'sg24_1_4_dot');
                         _this.group4.add(_this.ten);    
                        _this.line10.visible = true; 
                        _this.graphics11.inputEnabled = true;
                        // _this.sprite3.y +=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line11 = _this.add.sprite(604,354,'sg24_1_4_line3');
               _this.line11.visible = false;
            _this.graphics11 = _this.add.graphics(100, 392);
           _this.graphics11.lineStyle(0);
           _this.graphics11.beginFill(0xFF0000, 0.5);
           _this.graphics11.drawCircle(520,50,50);
           _this.graphics11.endFill();
             _this.graphics11.alpha = 0;
            _this.graphics11.name ="graphics11";
             _this.graphics11.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics11 "+target.name);
                if(target.name == "graphics11")
                    {
                         _this.leven = _this.add.sprite(611,428,'sg24_1_4_dot');
                         _this.group4.add(_this.leven);    
                        _this.line11.visible = true; 
                        _this.graphics12.inputEnabled = true;
                        // _this.sprite3.y +=68;
                        target.events.onInputDown.removeAll();
                    }
              },this)
  
         
         _this.line12 = _this.add.sprite(541,423,'sg24_1_4_line2');
               _this.line12.visible = false;
            _this.graphics12 = _this.add.graphics(100, 392);
           _this.graphics12.lineStyle(0);
           _this.graphics12.beginFill(0xFF0000, 0.5);
           _this.graphics12.drawCircle(452,50,50);
           _this.graphics12.endFill();
            _this.graphics12.alpha = 0;
            _this.graphics12.name ="graphics12";
             _this.graphics12.events.onInputDown.add(function(target)
              { 
                         _this.clickSound.play();
                 console.log("graphics12 "+target.name);
                if(target.name == "graphics12")
                    {
                      _this.t12 = _this.add.sprite(544,428,'sg24_1_4_dot');
                         _this.group4.add(_this.t12);
                        _this.line12.visible = true; 
                        _this.graphics13.inputEnabled = true;
                         // _this.sprite3.x -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line13 = _this.add.sprite(536,359,'sg24_1_4_line3');
               _this.line13.visible = false;
            _this.graphics13 = _this.add.graphics(100, 324);
           _this.graphics13.lineStyle(0);
           _this.graphics13.beginFill(0xFF0000, 0.5);
           _this.graphics13.drawCircle(452,50,50);
           _this.graphics13.endFill();
          _this.graphics13.alpha = 0;
            _this.graphics13.name ="graphics13";
             _this.graphics13.events.onInputDown.add(function(target)
              { 
                     _this.clickSound.play();
                 console.log("graphics13 "+target.name);
                if(target.name == "graphics13")
                    {
                          _this.t13 = _this.add.sprite(544,361,'sg24_1_4_dot');
                         _this.group4.add(_this.t13);
                        _this.line13.visible = true; 
                        _this.graphics14.inputEnabled = true;
                       //  _this.sprite3.y -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
           
        
         _this.line14 = _this.add.sprite(472,354,'sg24_1_4_line2');
               _this.line14.visible = false;
            _this.graphics14 = _this.add.graphics(100, 324);
           _this.graphics14.lineStyle(0);
           _this.graphics14.beginFill(0xFF0000, 0.5);
           _this.graphics14.drawCircle(384,50,50);
           _this.graphics14.endFill();
             _this.graphics14.alpha = 0;
            _this.graphics14.name ="graphics14";
             _this.graphics14.events.onInputDown.add(function(target)
              { 
                 _this.clickSound.play();
                 console.log("graphics14 "+target.name);
                if(target.name == "graphics14")
                    {
                         _this.t14 = _this.add.sprite(477,361,'sg24_1_4_dot');
                         _this.group4.add(_this.t14);     
                        _this.line14.visible = true; 
                        _this.graphics15.inputEnabled = true;
                        // _this.sprite3.x -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line15 = _this.add.sprite(468,291,'sg24_1_4_line3');
               _this.line15.visible = false;
            _this.graphics15 = _this.add.graphics(100, 256);
           _this.graphics15.lineStyle(0);
           _this.graphics15.beginFill(0xFF0000, 0.5);
           _this.graphics15.drawCircle(384,50,50);
           _this.graphics15.endFill();
             _this.graphics15.alpha = 0;
            _this.graphics15.name ="graphics15";
             _this.graphics15.events.onInputDown.add(function(target)
              { 
                   _this.clickSound.play();
                 console.log("graphics15 "+target.name);
                if(target.name == "graphics15")
                    {
                          _this.t15 = _this.add.sprite(477,294,'sg24_1_4_dot');
                         _this.group4.add(_this.t15);  
                        _this.line15.visible = true; 
                        _this.graphics16.inputEnabled = true;
                       //  _this.sprite3.y -=68;
                        target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line16 = _this.add.sprite(404,288,'sg24_1_4_line2');
               _this.line16.visible = false;
            _this.graphics16 = _this.add.graphics(100, 256);
           _this.graphics16.lineStyle(0);
           _this.graphics16.beginFill(0xFF0000, 0.5);
           _this.graphics16.drawCircle(315,50,50);
           _this.graphics16.endFill();
             _this.graphics16.alpha = 0;
            _this.graphics16.name ="graphics16";
             _this.graphics16.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics16 "+target.name);
                if(target.name == "graphics16")
                    {
                          _this.t16 = _this.add.sprite(410,294,'sg24_1_4_dot');
                         _this.group4.add(_this.t16);   
                        _this.line16.visible = true; 
                        _this.graphics17.inputEnabled = true;
                        // _this.sprite3.x -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line17 = _this.add.sprite(336,288,'sg24_1_4_line2');
               _this.line17.visible = false;
            _this.graphics17 = _this.add.graphics(100, 256);
           _this.graphics17.lineStyle(0);
           _this.graphics17.beginFill(0xFF0000, 0.5);
           _this.graphics17.drawCircle(247,50,50);
           _this.graphics17.endFill();
            _this.graphics17.alpha = 0;
            _this.graphics17.name ="graphics17";
             _this.graphics17.events.onInputDown.add(function(target)
              { 
                 _this.clickSound.play();
                 console.log("graphics17 "+target.name);
                if(target.name == "graphics17")
                    {
                         _this.t17 = _this.add.sprite(340,294,'sg24_1_4_dot');
                         _this.group4.add(_this.t17);     
                        _this.line17.visible = true; 
                        _this.graphics18.inputEnabled = true;
                       //  _this.sprite3.x -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line18 = _this.add.sprite(331,288,'sg24_1_4_line3');
               _this.line18.visible = false;
            _this.graphics18 = _this.add.graphics(100, 324);
           _this.graphics18.lineStyle(0);
           _this.graphics18.beginFill(0xFF0000, 0.5);
           _this.graphics18.drawCircle(247,50,50);
           _this.graphics18.endFill();
             _this.graphics18.alpha = 0;
            _this.graphics18.name ="graphics18";
             _this.graphics18.events.onInputDown.add(function(target)
              { 
                   _this.clickSound.play();
                 console.log("graphics18 "+target.name);
                if(target.name == "graphics18")
                    {
                        _this.t18 = _this.add.sprite(340,361,'sg24_1_4_dot');
                         _this.group4.add(_this.t18);    
                        _this.line18.visible = true; 
                        _this.graphics19.inputEnabled = true;
                       //  _this.sprite3.y +=68;
                        target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line19 = _this.add.sprite(267,356,'sg24_1_4_line2');
               _this.line19.visible = false;
            _this.graphics19 = _this.add.graphics(100, 324);
           _this.graphics19.lineStyle(0);
           _this.graphics19.beginFill(0xFF0000, 0.5);
           _this.graphics19.drawCircle(178,50,50);
           _this.graphics19.endFill();
            _this.graphics19.alpha = 0;
            _this.graphics19.name ="graphics19";
             _this.graphics19.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics19 "+target.name);
                if(target.name == "graphics19")
                    {
                         _this.t19 = _this.add.sprite(270,361,'sg24_1_4_dot');
                         _this.group4.add(_this.t19);    
                        _this.line19.visible = true; 
                        _this.graphics20.inputEnabled = true;
                      //  _this.sprite3.x -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line20 = _this.add.sprite(262,356,'sg24_1_4_line3');
               _this.line20.visible = false;
            _this.graphics20 = _this.add.graphics(100, 392);
           _this.graphics20.lineStyle(0);
           _this.graphics20.beginFill(0xFF0000, 0.5);
           _this.graphics20.drawCircle(178,50,50);
           _this.graphics20.endFill();
             _this.graphics20.alpha = 0;
            _this.graphics20.name ="graphics20";
             _this.graphics20.events.onInputDown.add(function(target)
              { 
                 _this.clickSound.play();
                 console.log("graphics20 "+target.name);
                if(target.name == "graphics20")
                    {
                         _this.t20 = _this.add.sprite(270,428,'sg24_1_4_dot');
                         _this.group4.add(_this.t20);     
                        _this.line20.visible = true; 
                        _this.graphics21.inputEnabled = true;
                        // _this.sprite3.y +=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line21 = _this.add.sprite(198,423,'sg24_1_4_line2');
               _this.line21.visible = false;
            _this.graphics21 = _this.add.graphics(100, 392);
           _this.graphics21.lineStyle(0);
           _this.graphics21.beginFill(0xFF0000, 0.5);
           _this.graphics21.drawCircle(110,50,50);
           _this.graphics21.endFill();
              _this.graphics21.alpha = 0;
            _this.graphics21.name ="graphics21";
             _this.graphics21.events.onInputDown.add(function(target)
              { 
                       _this.clickSound.play();
                 console.log("graphics21 "+target.name);
                if(target.name == "graphics21")
                    {
                        _this.t21 = _this.add.sprite(203,428,'sg24_1_4_dot');
                         _this.group4.add(_this.t21);
                        _this.line21.visible = true; 
                        _this.graphics22.inputEnabled = true;
                        // _this.sprite3.x -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line22 = _this.add.sprite(195,359,'sg24_1_4_line3');
               _this.line22.visible = false;
            _this.graphics22 = _this.add.graphics(100, 324);
           _this.graphics22.lineStyle(0);
           _this.graphics22.beginFill(0xFF0000, 0.5);
           _this.graphics22.drawCircle(110,50,50);
           _this.graphics22.endFill();
             _this.graphics22.alpha = 0;
            _this.graphics22.name ="graphics22";
             _this.graphics22.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics22 "+target.name);
                if(target.name == "graphics22")
                    {
                        _this.t22 = _this.add.sprite(203,361,'sg24_1_4_dot');
                         _this.group4.add(_this.t22);
                        _this.line22.visible = true; 
                        _this.graphics23.inputEnabled = true;
                       //  _this.sprite3.y -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line23 = _this.add.sprite(195,291,'sg24_1_4_line3');
               _this.line23.visible = false;
            _this.graphics23 = _this.add.graphics(100, 256);
           _this.graphics23.lineStyle(0);
           _this.graphics23.beginFill(0xFF0000, 0.5);
           _this.graphics23.drawCircle(110,50,50);
           _this.graphics23.endFill();
             _this.graphics23.alpha = 0;
            _this.graphics23.name ="graphics23";
             _this.graphics23.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics23 "+target.name);
                if(target.name == "graphics23")
                    {
                        _this.t23 = _this.add.sprite(203,294,'sg24_1_4_dot');
                         _this.group4.add(_this.t23);
                        _this.line23.visible = true; 
                        _this.graphics24.inputEnabled = true;
                        //  _this.sprite3.y -=68;
                      target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line24 = _this.add.sprite(195,224,'sg24_1_4_line3');
               _this.line24.visible = false;
            _this.graphics24 = _this.add.graphics(100, 190);
           _this.graphics24.lineStyle(0);
           _this.graphics24.beginFill(0xFF0000, 0.5);
           _this.graphics24.drawCircle(110,50,50);
           _this.graphics24.endFill();
           _this.graphics24.alpha = 0;
            _this.graphics24.name ="graphics24";
             _this.graphics24.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics24 "+target.name);
                if(target.name == "graphics24")
                    {
                        _this.t24 = _this.add.sprite(203,227,'sg24_1_4_dot');
                         _this.group4.add(_this.t24);
                        _this.line24.visible = true; 
                        _this.graphics25.inputEnabled = true;
                        //  _this.sprite3.y -=68;
                       target.events.onInputDown.removeAll();
                    }
              },this)
        
         _this.line25 = _this.add.sprite(195,156,'sg24_1_4_line3');
            _this.line25.visible = false;
             _this.graphics25 = _this.add.graphics(100, 122);
            _this.graphics25.lineStyle(0);
            _this.graphics25.beginFill(0xFF0000, 0.5);
            _this.graphics25.drawCircle(110,50,50);
            _this.graphics25.endFill();
           _this.graphics25.alpha = 0;
            _this.graphics25.name = "graphics25";
        
          _this.graphics25.events.onInputDown.add(function(target)
              { 
               _this.clickSound.play();
                 console.log("graphics25 "+target.name);
                if(target.name == "graphics25")
                    {
                        _this.t25 = _this.add.sprite(203,160,'sg24_1_4_dot');
                         _this.group4.add(_this.t25);
                        _this.line25.visible = true; 
                        _this.graphics26.inputEnabled = true;
                       //   _this.sprite3.y -=68;
                       target.events.onInputDown.removeAll();
                    }
                
              },this)
        
           
        
        
              _this.line26 = _this.add.sprite(195,88,'sg24_1_4_line3');
               _this.line26.visible = false;
               _this.graphics26 = _this.add.graphics(103, 54);
               _this.graphics26.lineStyle(0);
               _this.graphics26.beginFill(0xFF0000, 0.5);
               _this.graphics26.drawCircle(110,50,50);
               _this.graphics26.endFill();
               _this.graphics26.name = "graphics26";
               _this.graphics26.alpha = 0;
               _this.graphics26.events.onInputDown.add(function(target)
               { 
                    _this.clickSound.play();
                console.log("graphics26"+target.name);
                if(target.name == "graphics26")
                    {
                      
                        _this.line26.visible = true; 
                         // _this.sprite3.y -=68;
                         target.events.onInputDown.removeAll();
                        _this.addNumberPad();
                    
                    }
                
              },this)
        
        _this.rightAns = 26;
        /***For Glow I grouped Lines ***/
     
          _this.group2.add(_this.line1);
           _this.group2.add(_this.sg24_1_4_line2);
          _this.group2.add(_this.sg24_1_4_line3);
          _this.group2.add(_this.line4);
          _this.group2.add(_this.line5);
          _this.group2.add(_this.line6);
          _this.group2.add(_this.line7);
          _this.group2.add(_this.line8);
          _this.group2.add(_this.line9);
          _this.group2.add(_this.line10);
          _this.group2.add(_this.line11);
          _this.group2.add(_this.line12);
          _this.group2.add(_this.line13);
          _this.group2.add(_this.line14);
          _this.group2.add(_this.line15);
          _this.group2.add(_this.line16);
          _this.group2.add(_this.line17);
           _this.group2.add(_this.line18);
          _this.group2.add(_this.line19);
          _this.group2.add(_this.line20);
          _this.group2.add(_this.line21);
          _this.group2.add(_this.line22);
          _this.group2.add(_this.line23);
          _this.group2.add(_this.line24);
          _this.group2.add(_this.line25);
          _this.group2.add(_this.line26);
        
        _this.group3.add(_this.graphics1);
        _this.group3.add(_this.graphics2);
        _this.group3.add(_this.graphics3);
        _this.group3.add(_this.graphics4);
        _this.group3.add(_this.graphics5);
        _this.group3.add(_this.graphics6);
        _this.group3.add(_this.graphics7);
        _this.group3.add(_this.graphics8);
        _this.group3.add(_this.graphics9);
        _this.group3.add(_this.graphics10);
        _this.group3.add(_this.graphics11);
        _this.group3.add(_this.graphics12);
        _this.group3.add(_this.graphics13);
        _this.group3.add(_this.graphics14);
        _this.group3.add(_this.graphics15);
        _this.group3.add(_this.graphics16);
        _this.group3.add(_this.graphics17);
        _this.group3.add(_this.graphics18);
        _this.group3.add(_this.graphics19);
        _this.group3.add(_this.graphics20);
        _this.group3.add(_this.graphics21);
        _this.group3.add(_this.graphics22);
        _this.group3.add(_this.graphics23);
        _this.group3.add(_this.graphics24);
        _this.group3.add(_this.graphics25);
        _this.group3.add(_this.graphics26);
        
       
        
        
    },
          
     question2:function(){
         _this.Question = 2;
          _this.no1++;
         console.log("2");
      
         
           _this.sprite1 = _this.add.sprite(70, 100, 'sg24_1_4_symbol');
           _this.dotline = _this.add.sprite(142, 102, 'sg24_1_4_dotline2');
           _this.sprite3 = _this.add.sprite(202,93,'sg24_1_4_dot');
           _this.box = _this.add.sprite(840,240,'sg16_2_4_box');
         
            _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
            _this.group4 = _this.add.group();
        
              _this.group1.add(_this.sprite1);
              _this.group1.add(_this.dotline);  
              _this.group1.add(_this.sprite3); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
           if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
           _this.line1 = _this.add.sprite(198,88,'sg24_1_4_line2');
           _this.line1.visible = false; 
             _this.graphics1 = _this.add.graphics(100, 55);
                
           _this.graphics1.lineStyle(0);
           _this.graphics1.beginFill(0xFF0000, 0.5);
           _this.graphics1.drawCircle(178, 50, 50);
           _this.graphics1.endFill();
           _this.graphics1.alpha = 0;
           _this.graphics1.name = "graphics1";
           _this.graphics1.inputEnabled = true;
          
             _this.graphics1.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics1 "+target.name);
                if(target.name == "graphics1")
                    {
                         _this.t1 = _this.add.sprite(269,93,'sg24_1_4_dot');
                         _this.group4.add(_this.t1);
                        _this.line1.visible = true; 
                         _this.graphics1.inputEnabled = true;
                        _this.graphics2.inputEnabled = true;
                        //_this.sprite3.x += 68;
                       // _this.addNumberPad();
                         target.events.onInputDown.removeAll();
                        _this.graphics23.inputEnabled = false;
                    }
              },this)
        
        
            _this.sg24_1_4_line2 = _this.add.sprite(266,88,'sg24_1_4_line2');
            _this.sg24_1_4_line2.visible = false;
            _this.graphics2 = _this.add.graphics(100,55);
                
           _this.graphics2.lineStyle(0);
           _this.graphics2.beginFill(0xFF0000, 0.5);
           _this.graphics2.drawCircle(247,50, 50);
           _this.graphics2.endFill();
           _this.graphics2.alpha = 0;
           _this.graphics2.name = "graphics2";
        
             _this.graphics2.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics2 "+target.name);
                if(target.name == "graphics2")
                    {
                         _this.t2 = _this.add.sprite(336,93,'sg24_1_4_dot');
                         _this.group4.add(_this.t2);
                        _this.sg24_1_4_line2.visible = true; 
                         _this.graphics1.inputEnabled = false;
                        _this.graphics3.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
        
            _this.sg24_1_4_line3 = _this.add.sprite(333,88,'sg24_1_4_line2');
            _this.sg24_1_4_line3.visible = false;
        
            _this.graphics3 = _this.add.graphics(100,55);
           _this.graphics3.lineStyle(0);
           _this.graphics3.beginFill(0xFF0000, 0.5);
           _this.graphics3.drawCircle(315,50, 50);
           _this.graphics3.endFill();
           _this.graphics3.alpha = 0;
           _this.graphics3.name = "graphics3";
           _this.graphics3.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics3 "+target.name);
                if(target.name == "graphics3")
                    {
                         _this.t3 = _this.add.sprite(406,93,'sg24_1_4_dot');
                         _this.group4.add(_this.t3);
                        _this.sg24_1_4_line3.visible = true; 
                        _this.graphics4.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
    
                
          
            _this.line4 = _this.add.sprite(400,88,'sg24_1_4_line2');
           _this.line4.visible = false;
            _this.graphics4 = _this.add.graphics(100,55);
           _this.graphics4.lineStyle(0);
           _this.graphics4.beginFill(0xFF0000, 0.5);
           _this.graphics4.drawCircle(384,50, 50);
           _this.graphics4.endFill();
           _this.graphics4.alpha = 0;
          _this.graphics4.name = "graphics4";
         //  _this.graphics4.inputEnabled = true;
             _this.graphics4.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics4"+target.name);
                if(target.name == "graphics4")
                    {
                         _this.t4 = _this.add.sprite(473,93,'sg24_1_4_dot');
                         _this.group4.add(_this.t4);
                        _this.line4.visible = true; 
                        _this.graphics5.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
                
          
          _this.line5 = _this.add.sprite(467,88,'sg24_1_4_line2');
          _this.line5.visible = false;
            _this.graphics5 = _this.add.graphics(100,55);
           _this.graphics5.lineStyle(0);
           _this.graphics5.beginFill(0xFF0000, 0.5);
           _this.graphics5.drawCircle(452,50, 50);
           _this.graphics5.endFill();
           _this.graphics5.alpha = 0;
          _this.graphics5.name = "graphics5";
         //  _this.graphics5.inputEnabled = true;
             _this.graphics5.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics5 "+target.name);
                if(target.name == "graphics5")
                    {
                         _this.t5 = _this.add.sprite(542,93,'sg24_1_4_dot');
                         _this.group4.add(_this.t5);
                        _this.line5.visible = true; 
                        _this.graphics6.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line6 = _this.add.sprite(536,88,'sg24_1_4_line3');
            _this.line6.visible = false;
            _this.graphics6 = _this.add.graphics(100, 122);
           _this.graphics6.lineStyle(0);
           _this.graphics6.beginFill(0xFF0000, 0.5);
           _this.graphics6.drawCircle(452,50, 50);
           _this.graphics6.endFill();
           _this.graphics6.alpha = 0;
          _this.graphics6.name = "graphics6";
          // _this.graphics6.inputEnabled = true;
             _this.graphics6.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics6 "+target.name);
                if(target.name == "graphics6")
                    {
                         _this.t6 = _this.add.sprite(542,160,'sg24_1_4_dot');
                         _this.group4.add(_this.t6);
                        _this.line6.visible = true; 
                        _this.graphics7.inputEnabled = true;
                      // // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line7 = _this.add.sprite(536,156,'sg24_1_4_line3');
            _this.line7.visible = false;
            _this.graphics7 = _this.add.graphics(100, 191);
           _this.graphics7.lineStyle(0);
           _this.graphics7.beginFill(0xFF0000, 0.5);
           _this.graphics7.drawCircle(452,50, 50);
           _this.graphics7.endFill();
           _this.graphics7.alpha = 0;
          _this.graphics7.name = "graphics7";
           //_this.graphics7.inputEnabled = true;
             _this.graphics7.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics7 "+target.name);
                if(target.name == "graphics7")
                    {
                         _this.t7 = _this.add.sprite(542,227,'sg24_1_4_dot');
                         _this.group4.add(_this.t7);
                        _this.line7.visible = true; 
                        _this.graphics8.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line8 = _this.add.sprite(536,222,'sg24_1_4_line2');
              _this.line8.visible = false;
            _this.graphics8 = _this.add.graphics(100, 191);
           _this.graphics8.lineStyle(0);
           _this.graphics8.beginFill(0xFF0000, 0.5);
           _this.graphics8.drawCircle(520,50, 50);
           _this.graphics8.endFill();
            _this.graphics8.alpha = 0;
          _this.graphics8.name = "graphics8";
         //  _this.graphics8.inputEnabled = true;
             _this.graphics8.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics8 "+target.name);
                if(target.name == "graphics8")
                    {
                         _this.t8 = _this.add.sprite(609,227,'sg24_1_4_dot');
                         _this.group4.add(_this.t8);
                        _this.line8.visible = true; 
                        _this.graphics9.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line9 = _this.add.sprite(604,222,'sg24_1_4_line3');
             _this.line9.visible = false;
                _this.graphics9 = _this.add.graphics(100, 257);
               _this.graphics9.lineStyle(0);
               _this.graphics9.beginFill(0xFF0000, 0.5);
               _this.graphics9.drawCircle(520,50, 50);
               _this.graphics9.endFill();
              _this.graphics9.alpha = 0;
          _this.graphics9.name = "graphics9";
       
             _this.graphics9.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics9 "+target.name);
                if(target.name == "graphics9")
                    {
                         _this.t9 = _this.add.sprite(609,294,'sg24_1_4_dot');
                         _this.group4.add(_this.t9);
                        _this.line9.visible = true; 
                        _this.graphics10.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line10 = _this.add.sprite(540,289,'sg24_1_4_line2');
              _this.line10.visible = false;
               _this.graphics10 = _this.add.graphics(100, 257);
               _this.graphics10.lineStyle(0);
               _this.graphics10.beginFill(0xFF0000, 0.5);
               _this.graphics10.drawCircle(452,50, 50);
               _this.graphics10.endFill();
                 _this.graphics10.alpha = 0;
              _this.graphics10.name = "graphics10";
        //   _this.graphics10.inputEnabled = true;
             _this.graphics10.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics10 "+target.name);
                if(target.name == "graphics10")
                    {
                         _this.t10 = _this.add.sprite(542,294,'sg24_1_4_dot');
                         _this.group4.add(_this.t10);
                        _this.line10.visible = true; 
                        _this.graphics11.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
            _this.line11 = _this.add.sprite(536,289,'sg24_1_4_line3');
             _this.line11.visible = false;
                _this.graphics11 = _this.add.graphics(100, 325);
               _this.graphics11.lineStyle(0);
               _this.graphics11.beginFill(0xFF0000, 0.5);
               _this.graphics11.drawCircle(452,50, 50);
               _this.graphics11.endFill();
               _this.graphics11.alpha = 0;
          _this.graphics11.name = "graphics11";
          // _this.graphics11.inputEnabled = true;
             _this.graphics11.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics11 "+target.name);
                if(target.name == "graphics11")
                    {
                         _this.t11 = _this.add.sprite(542,361,'sg24_1_4_dot');
                         _this.group4.add(_this.t11);
                        _this.line11.visible = true; 
                        _this.graphics12.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           
            _this.line12 = _this.add.sprite(536,357,'sg24_1_4_line3');
              _this.line12.visible = false;
              _this.graphics12 = _this.add.graphics(100, 393);
               _this.graphics12.lineStyle(0);
               _this.graphics12.beginFill(0xFF0000, 0.5);
               _this.graphics12.drawCircle(452,50, 50);
               _this.graphics12.endFill();
               _this.graphics12.alpha = 0;
          _this.graphics12.name = "graphics12";
         //  _this.graphics12.inputEnabled = true;
             _this.graphics12.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics12 "+target.name);
                if(target.name == "graphics12")
                    {
                         _this.t12 = _this.add.sprite(542,432,'sg24_1_4_dot');
                         _this.group4.add(_this.t12);
                        _this.line12.visible = true; 
                        _this.graphics13.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          
             _this.line13 = _this.add.sprite(472,425,'sg24_1_4_line2');
             _this.line13.visible = false;
               _this.graphics13 = _this.add.graphics(100, 393);
               _this.graphics13.lineStyle(0);
               _this.graphics13.beginFill(0xFF0000, 0.5);
               _this.graphics13.drawCircle(384,50, 50);
               _this.graphics13.endFill();
               _this.graphics13.alpha = 0;
          _this.graphics13.name = "graphics13";
         //  _this.graphics13.inputEnabled = true;
             _this.graphics13.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics13 "+target.name);
                if(target.name == "graphics13")
                    {
                         _this.t13 = _this.add.sprite(475,432,'sg24_1_4_dot');
                         _this.group4.add(_this.t13);
                        _this.line13.visible = true; 
                        _this.graphics14.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line14 = _this.add.sprite(404,425,'sg24_1_4_line2');
              _this.line14.visible = false;
                 _this.graphics14 = _this.add.graphics(100, 393);
               _this.graphics14.lineStyle(0);
               _this.graphics14.beginFill(0xFF0000, 0.5);
               _this.graphics14.drawCircle(316,50, 50);
               _this.graphics14.endFill();
               _this.graphics14.alpha = 0;
          _this.graphics14.name = "graphics14";
         //  _this.graphics14.inputEnabled = true;
             _this.graphics14.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics14 "+target.name);
                if(target.name == "graphics14")
                    {
                         _this.t14 = _this.add.sprite(408,432,'sg24_1_4_dot');
                         _this.group4.add(_this.t14);
                        _this.line14.visible = true; 
                        _this.graphics15.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
        
             _this.line15 = _this.add.sprite(336,425,'sg24_1_4_line2');
              _this.line15.visible = false;
                _this.graphics15 = _this.add.graphics(100, 393);
               _this.graphics15.lineStyle(0);
               _this.graphics15.beginFill(0xFF0000, 0.5);
               _this.graphics15.drawCircle(248,50, 50);
               _this.graphics15.endFill();
               _this.graphics15.alpha = 0;
          _this.graphics15.name = "graphics15";
        //   _this.graphics15.inputEnabled = true;
             _this.graphics15.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics15 "+target.name);
                if(target.name == "graphics15")
                    {
                         _this.t15 = _this.add.sprite(341,432,'sg24_1_4_dot');
                         _this.group4.add(_this.t15);
                        _this.line15.visible = true; 
                        _this.graphics16.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
              _this.line16 = _this.add.sprite(268,425,'sg24_1_4_line2');
              _this.line16.visible = false;
                _this.graphics16 = _this.add.graphics(100, 393);
               _this.graphics16.lineStyle(0);
               _this.graphics16.beginFill(0xFF0000, 0.5);
               _this.graphics16.drawCircle(180,50, 50);
               _this.graphics16.endFill();
               _this.graphics16.alpha = 0;
          _this.graphics16.name = "graphics16";
        //   _this.graphics16.inputEnabled = true;
             _this.graphics16.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics16 "+target.name);
                if(target.name == "graphics16")
                    {
                         _this.t16 = _this.add.sprite(274,432,'sg24_1_4_dot');
                         _this.group4.add(_this.t16);
                        _this.line16.visible = true; 
                        _this.graphics17.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
               _this.line17 = _this.add.sprite(199,425,'sg24_1_4_line2');
             _this.line17.visible = false;
                _this.graphics17 = _this.add.graphics(100, 393);
               _this.graphics17.lineStyle(0);
               _this.graphics17.beginFill(0xFF0000, 0.5);
               _this.graphics17.drawCircle(111,50, 50);
               _this.graphics17.endFill();
               _this.graphics17.alpha = 0;
          _this.graphics17.name = "graphics17";
        //   _this.graphics17.inputEnabled = true;
             _this.graphics17.events.onInputDown.add(function(target)
              { 
                 
                  _this.clickSound.play();
                 console.log("graphics17 "+target.name);
                if(target.name == "graphics17")
                    {
                         _this.t17 = _this.add.sprite(203,432,'sg24_1_4_dot');
                         _this.group4.add(_this.t17);
                        _this.line17.visible = true; 
                        _this.graphics18.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line18 = _this.add.sprite(194,360,'sg24_1_4_line3');
              _this.line18.visible = false;
                _this.graphics18 = _this.add.graphics(100, 325);
               _this.graphics18.lineStyle(0);
               _this.graphics18.beginFill(0xFF0000, 0.5);
               _this.graphics18.drawCircle(111,50, 50);
               _this.graphics18.endFill();
               _this.graphics18.alpha = 0;
          _this.graphics18.name = "graphics18";
        //   _this.graphics18.inputEnabled = true;
             _this.graphics18.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics18 "+target.name);
                if(target.name == "graphics18")
                    {
                         _this.t18 = _this.add.sprite(203,365,'sg24_1_4_dot');
                         _this.group4.add(_this.t18);
                        _this.line18.visible = true; 
                        _this.graphics19.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
               _this.line19 = _this.add.sprite(194,293,'sg24_1_4_line3');
               _this.line19.visible = false;
                _this.graphics19 = _this.add.graphics(100, 257);
               _this.graphics19.lineStyle(0);
               _this.graphics19.beginFill(0xFF0000, 0.5);
               _this.graphics19.drawCircle(111,50, 50);
               _this.graphics19.endFill();
               _this.graphics19.alpha = 0;
          _this.graphics19.name = "graphics19";
         //  _this.graphics19.inputEnabled = true;
             _this.graphics19.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics19 "+target.name);
                if(target.name == "graphics19")
                    {
                        _this.t19 = _this.add.sprite(203,298,'sg24_1_4_dot');
                         _this.group4.add(_this.t19);
                        _this.line19.visible = true; 
                        _this.graphics20.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line20 = _this.add.sprite(130,290,'sg24_1_4_line2');
              _this.line20.visible = false;
                _this.graphics20 = _this.add.graphics(100, 257);
               _this.graphics20.lineStyle(0);
               _this.graphics20.beginFill(0xFF0000, 0.5);
               _this.graphics20.drawCircle(43,50, 50);
               _this.graphics20.endFill();
              _this.graphics20.alpha = 0;
          _this.graphics20.name = "graphics20";
       //    _this.graphics20.inputEnabled = true;
             _this.graphics20.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics20 "+target.name);
                if(target.name == "graphics20")
                    {
                          _this.t20 = _this.add.sprite(135,298,'sg24_1_4_dot');
                         _this.group4.add(_this.t20);
                        _this.line20.visible = true; 
                        _this.graphics21.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          _this.line21 = _this.add.sprite(126,225,'sg24_1_4_line3');
              _this.line21.visible = false;
               _this.graphics21 = _this.add.graphics(100, 189);
               _this.graphics21.lineStyle(0);
               _this.graphics21.beginFill(0xFF0000, 0.5);
               _this.graphics21.drawCircle(43,50, 50);
               _this.graphics21.endFill();
               _this.graphics21.alpha = 0;
          _this.graphics21.name = "graphics21";
       //    _this.graphics21.inputEnabled = true;
             _this.graphics21.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics21 "+target.name);
                if(target.name == "graphics21")
                    {
                         _this.t21 = _this.add.sprite(135,231,'sg24_1_4_dot');
                         _this.group4.add(_this.t21);
                        _this.line21.visible = true; 
                        _this.graphics22.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line22 = _this.add.sprite(126,223,'sg24_1_4_line2');
              _this.line22.visible = false;
               _this.graphics22 = _this.add.graphics(100, 189);
               _this.graphics22.lineStyle(0);
               _this.graphics22.beginFill(0xFF0000, 0.5);
               _this.graphics22.drawCircle(111,50, 50);
               _this.graphics22.endFill();
              _this.graphics22.alpha = 0;
          _this.graphics22.name = "graphics22";
       //    _this.graphics22.inputEnabled = true;
             _this.graphics22.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics22 "+target.name);
                if(target.name == "graphics22")
                    {
                         _this.t22 = _this.add.sprite(203,231,'sg24_1_4_dot');
                         _this.group4.add(_this.t22);
                        _this.line22.visible = true; 
                        _this.graphics23.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
            _this.line23 = _this.add.sprite(194,158,'sg24_1_4_line3');
              _this.line23.visible = false;
                _this.graphics23 = _this.add.graphics(100, 121);
               _this.graphics23.lineStyle(0);
               _this.graphics23.beginFill(0xFF0000, 0.5);
               _this.graphics23.drawCircle(111,50, 50);
               _this.graphics23.endFill();
                _this.graphics23.alpha = 0;
          _this.graphics23.name = "graphics23";
        //   _this.graphics23.inputEnabled = true;
             _this.graphics23.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics23 "+target.name);
                if(target.name == "graphics23")
                    {
                         _this.t23 = _this.add.sprite(203,164,'sg24_1_4_dot');
                         _this.group4.add(_this.t23);
                        _this.line23.visible = true; 
                        _this.graphics24.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line24 = _this.add.sprite(194,90,'sg24_1_4_line3');
              _this.line24.visible = false;
                _this.graphics24 = _this.add.graphics(100, 53);
               _this.graphics24.lineStyle(0);
               _this.graphics24.beginFill(0xFF0000, 0.5);
               _this.graphics24.drawCircle(111,50, 50);
               _this.graphics24.endFill();
                _this.graphics24.alpha = 0;
          _this.graphics24.name = "graphics24";
        //   _this.graphics24.inputEnabled = true;
             _this.graphics24.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics24 "+target.name);
                if(target.name == "graphics24")
                    {
                        _this.line24.visible = true; 
                        
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                        _this.addNumberPad();
                    
                    }
              },this)
          
         
         _this.rightAns = 24;
         
         
          _this.group2.add(_this.line1);
           _this.group2.add(_this.sg24_1_4_line2);
          _this.group2.add(_this.sg24_1_4_line3);
          _this.group2.add(_this.line4);
          _this.group2.add(_this.line5);
          _this.group2.add(_this.line6);
          _this.group2.add(_this.line7);
          _this.group2.add(_this.line8);
          _this.group2.add(_this.line9);
          _this.group2.add(_this.line10);
          _this.group2.add(_this.line11);
          _this.group2.add(_this.line12);
          _this.group2.add(_this.line13);
          _this.group2.add(_this.line14);
          _this.group2.add(_this.line15);
          _this.group2.add(_this.line16);
          _this.group2.add(_this.line17);
           _this.group2.add(_this.line18);
          _this.group2.add(_this.line19);
          _this.group2.add(_this.line20);
          _this.group2.add(_this.line21);
          _this.group2.add(_this.line22);
          _this.group2.add(_this.line23);
          _this.group2.add(_this.line24);
         // _this.group2.add(_this.line25);
        //  _this.group2.add(_this.line26);
        
        _this.group3.add(_this.graphics1);
        _this.group3.add(_this.graphics2);
        _this.group3.add(_this.graphics3);
        _this.group3.add(_this.graphics4);
        _this.group3.add(_this.graphics5);
        _this.group3.add(_this.graphics6);
        _this.group3.add(_this.graphics7);
        _this.group3.add(_this.graphics8);
        _this.group3.add(_this.graphics9);
        _this.group3.add(_this.graphics10);
        _this.group3.add(_this.graphics11);
        _this.group3.add(_this.graphics12);
        _this.group3.add(_this.graphics13);
        _this.group3.add(_this.graphics14);
        _this.group3.add(_this.graphics15);
        _this.group3.add(_this.graphics16);
        _this.group3.add(_this.graphics17);
        _this.group3.add(_this.graphics18);
        _this.group3.add(_this.graphics19);
        _this.group3.add(_this.graphics20);
        _this.group3.add(_this.graphics21);
        _this.group3.add(_this.graphics22);
        _this.group3.add(_this.graphics23);
        _this.group3.add(_this.graphics24);
       // _this.group3.add(_this.graphics25);
       // _this.group3.add(_this.graphics26);      
      },
    
      question3:function(){
         _this.Question = 3;
          _this.no1++;
         console.log("3");
        
       
           _this.sprite1 = _this.add.sprite(70, 100, 'sg24_1_4_symbol');
           _this.dotline = _this.add.sprite(277, 103, 'sg24_1_4_dotline3');
           _this.sprite3 = _this.add.sprite(270,94,'sg24_1_4_dot');
           _this.box = _this.add.sprite(840,240,'sg16_2_4_box');
          
          
           _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
            _this.group4 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1);
              _this.group1.add(_this.dotline);  
              _this.group1.add(_this.sprite3); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
             _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
             if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
           _this.line1 = _this.add.sprite(265,88,'sg24_1_4_line2');
           _this.line1.visible = false; 
             _this.graphics1 = _this.add.graphics(100,55);
                
           _this.graphics1.lineStyle(0);
           _this.graphics1.beginFill(0xFF0000, 0.5);
           _this.graphics1.drawCircle(247, 50, 50);
           _this.graphics1.endFill();
           _this.graphics1.alpha = 0;
           _this.graphics1.name = "graphics1";
           _this.graphics1.inputEnabled = true;
          
             _this.graphics1.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics1 "+target.name);
                if(target.name == "graphics1")
                    {
                         _this.t1 = _this.add.sprite(337,94,'sg24_1_4_dot');
                         _this.group4.add(_this.t1);
                        _this.line1.visible = true; 
                        _this.graphics2.inputEnabled = true;
                        //_this.sprite3.x += 68;
                       // _this.addNumberPad();
                        _this.graphics15.inputEnabled = false;
                         target.events.onInputDown.removeAll();
                    }
              },this)
        
        
            _this.sg24_1_4_line2 = _this.add.sprite(333,88,'sg24_1_4_line2');
            _this.sg24_1_4_line2.visible = false;
            _this.graphics2 = _this.add.graphics(100, 55);
                
           _this.graphics2.lineStyle(0);
           _this.graphics2.beginFill(0xFF0000, 0.5);
           _this.graphics2.drawCircle(315, 50,50);
           _this.graphics2.endFill();
           _this.graphics2.alpha = 0;
           _this.graphics2.name = "graphics2";
         
             _this.graphics2.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics2 "+target.name);
                if(target.name == "graphics2")
                    {
                         _this.t2 = _this.add.sprite(404,94,'sg24_1_4_dot');
                         _this.group4.add(_this.t2);
                        _this.sg24_1_4_line2.visible = true; 
                        _this.graphics1.inputEnabled = false;
                        _this.graphics3.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                      //  _this.addNumberPad();
                    
                    }
              },this)
        
            _this.sg24_1_4_line3 = _this.add.sprite(401,88,'sg24_1_4_line2');
            _this.sg24_1_4_line3.visible = false;
        
            _this.graphics3 = _this.add.graphics(100, 55);
           _this.graphics3.lineStyle(0);
           _this.graphics3.beginFill(0xFF0000, 0.5);
           _this.graphics3.drawCircle(384, 50,50);
           _this.graphics3.endFill();
           _this.graphics3.alpha = 0;
           _this.graphics3.name = "graphics3";
          
             _this.graphics3.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics3 "+target.name);
                if(target.name == "graphics3")
                    {
                         _this.t3 = _this.add.sprite(471,94,'sg24_1_4_dot');
                         _this.group4.add(_this.t3);
                        _this.sg24_1_4_line3.visible = true; 
                        _this.graphics4.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
    
                
          
            _this.line4 = _this.add.sprite(469,88,'sg24_1_4_line2');
           _this.line4.visible = false;
            _this.graphics4 = _this.add.graphics(100, 55);
           _this.graphics4.lineStyle(0);
           _this.graphics4.beginFill(0xFF0000, 0.5);
           _this.graphics4.drawCircle(452, 50,50);
           _this.graphics4.endFill();
          _this.graphics4.alpha = 0;
          _this.graphics4.name = "graphics4";
           
             _this.graphics4.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics4"+target.name);
                if(target.name == "graphics4")
                    {
                         _this.t4 = _this.add.sprite(542,94,'sg24_1_4_dot');
                         _this.group4.add(_this.t4);
                        _this.line4.visible = true; 
                        _this.graphics5.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
                
          
          _this.line5 = _this.add.sprite(535,88,'sg24_1_4_line3');
           _this.line5.visible = false;
            _this.graphics5 = _this.add.graphics(100, 122);
           _this.graphics5.lineStyle(0);
           _this.graphics5.beginFill(0xFF0000, 0.5);
           _this.graphics5.drawCircle(452, 50,50);
           _this.graphics5.endFill();
          _this.graphics5.alpha = 0;
          _this.graphics5.name = "graphics5";
           
             _this.graphics5.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics5 "+target.name);
                if(target.name == "graphics5")
                    {
                         _this.t5 = _this.add.sprite(542,161,'sg24_1_4_dot');
                         _this.group4.add(_this.t5);
                        _this.line5.visible = true; 
                        _this.graphics6.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line6 = _this.add.sprite(535,156,'sg24_1_4_line3');
            _this.line6.visible = false;
            _this.graphics6 = _this.add.graphics(100, 190);
           _this.graphics6.lineStyle(0);
           _this.graphics6.beginFill(0xFF0000, 0.5);
           _this.graphics6.drawCircle(452, 50,50);
           _this.graphics6.endFill();
          _this.graphics6.alpha = 0;
          _this.graphics6.name = "graphics6";
          
             _this.graphics6.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics6 "+target.name);
                if(target.name == "graphics6")
                    {
                         _this.t6 = _this.add.sprite(542,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t6);
                        _this.line6.visible = true; 
                        _this.graphics7.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line7 = _this.add.sprite(535,224,'sg24_1_4_line3');
            _this.line7.visible = false;
            _this.graphics7 = _this.add.graphics(100, 258);
           _this.graphics7.lineStyle(0);
           _this.graphics7.beginFill(0xFF0000, 0.5);
           _this.graphics7.drawCircle(452, 50,50);
           _this.graphics7.endFill();
           _this.graphics7.alpha = 0;
          _this.graphics7.name = "graphics7";
          
             _this.graphics7.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics7 "+target.name);
                if(target.name == "graphics7")
                    {
                         _this.t7 = _this.add.sprite(542,295,'sg24_1_4_dot');
                         _this.group4.add(_this.t7);
                        _this.line7.visible = true; 
                        _this.graphics8.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line8 = _this.add.sprite(535,292,'sg24_1_4_line3');
              _this.line8.visible = false;
            _this.graphics8 = _this.add.graphics(100, 325);
           _this.graphics8.lineStyle(0);
           _this.graphics8.beginFill(0xFF0000, 0.5);
           _this.graphics8.drawCircle(452, 50,50);
           _this.graphics8.endFill();
            _this.graphics8.alpha = 0;
          _this.graphics8.name = "graphics8";
          
             _this.graphics8.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics8 "+target.name);
                if(target.name == "graphics8")
                    {
                         _this.t8 = _this.add.sprite(542,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t8);
                        _this.line8.visible = true; 
                        _this.graphics9.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line9 = _this.add.sprite(467,356,'sg24_1_4_line2');
            _this.line9.visible = false;
                _this.graphics9 = _this.add.graphics(100, 325);
               _this.graphics9.lineStyle(0);
               _this.graphics9.beginFill(0xFF0000, 0.5);
               _this.graphics9.drawCircle(384, 50,50);
               _this.graphics9.endFill();
                 _this.graphics9.alpha = 0;
          _this.graphics9.name = "graphics9";
          
             _this.graphics9.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics9 "+target.name);
                if(target.name == "graphics9")
                    {
                         _this.t9 = _this.add.sprite(475,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t9);
                        _this.line9.visible = true; 
                        _this.graphics10.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
             _this.line10 = _this.add.sprite(399,356,'sg24_1_4_line2');
              _this.line10.visible = false;
               _this.graphics10 = _this.add.graphics(100, 325);
               _this.graphics10.lineStyle(0);
               _this.graphics10.beginFill(0xFF0000, 0.5);
               _this.graphics10.drawCircle(316, 50,50);
               _this.graphics10.endFill();
                 _this.graphics10.alpha = 0;
          _this.graphics10.name = "graphics10";
         
             _this.graphics10.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics10 "+target.name);
                if(target.name == "graphics10")
                    {
                         _this.t10 = _this.add.sprite(406,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t10);
                        _this.line10.visible = true; 
                        _this.graphics11.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
            _this.line11 = _this.add.sprite(331,356,'sg24_1_4_line2');
             _this.line11.visible = false;
                _this.graphics11 = _this.add.graphics(100, 325);
               _this.graphics11.lineStyle(0);
               _this.graphics11.beginFill(0xFF0000, 0.5);
               _this.graphics11.drawCircle(248, 50,50);
               _this.graphics11.endFill();
                 _this.graphics11.alpha = 0;
          _this.graphics11.name = "graphics11";
          
             _this.graphics11.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics11 "+target.name);
                if(target.name == "graphics11")
                    {
                         _this.t11 = _this.add.sprite(337,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t11);
                        _this.line11.visible = true; 
                        _this.graphics12.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           
            _this.line12 = _this.add.sprite(263,356,'sg24_1_4_line2');
              _this.line12.visible = false;
              _this.graphics12 = _this.add.graphics(100, 325);
               _this.graphics12.lineStyle(0);
               _this.graphics12.beginFill(0xFF0000, 0.5);
               _this.graphics12.drawCircle(180, 50,50);
               _this.graphics12.endFill();
                _this.graphics12.alpha = 0;
          _this.graphics12.name = "graphics12";
           
             _this.graphics12.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics12 "+target.name);
                if(target.name == "graphics12")
                    {
                         _this.t12 = _this.add.sprite(270,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t12);
                        _this.line12.visible = true; 
                        _this.graphics13.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          
             _this.line13 = _this.add.sprite(262,289,'sg24_1_4_line3');
             _this.line13.visible = false;
               _this.graphics13 = _this.add.graphics(100, 257);
               _this.graphics13.lineStyle(0);
               _this.graphics13.beginFill(0xFF0000, 0.5);
               _this.graphics13.drawCircle(180, 50,50);
               _this.graphics13.endFill();
                 _this.graphics13.alpha = 0;
          _this.graphics13.name = "graphics13";
          
             _this.graphics13.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics13 "+target.name);
                if(target.name == "graphics13")
                    {
                         _this.t13 = _this.add.sprite(270,295,'sg24_1_4_dot');
                         _this.group4.add(_this.t13);
                        _this.line13.visible = true; 
                        _this.graphics14.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line14 = _this.add.sprite(262,220,'sg24_1_4_line3');
              _this.line14.visible = false;
                 _this.graphics14 = _this.add.graphics(100, 189);
               _this.graphics14.lineStyle(0);
               _this.graphics14.beginFill(0xFF0000, 0.5);
               _this.graphics14.drawCircle(180, 50,50);
               _this.graphics14.endFill();
                _this.graphics14.alpha = 0;
          _this.graphics14.name = "graphics14";
          
             _this.graphics14.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics14 "+target.name);
                if(target.name == "graphics14")
                    {
                         _this.t14 = _this.add.sprite(270,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t14);
                        _this.line14.visible = true; 
                        _this.graphics15.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       
                    
                    }
              },this)
        
             _this.line15 = _this.add.sprite(262,152,'sg24_1_4_line3');
              _this.line15.visible = false;
                _this.graphics15 = _this.add.graphics(100, 121);
               _this.graphics15.lineStyle(0);
               _this.graphics15.beginFill(0xFF0000, 0.5);
               _this.graphics15.drawCircle(180, 50,50);
               _this.graphics15.endFill();
                 _this.graphics15.alpha = 0;
          _this.graphics15.name = "graphics15";
          
             _this.graphics15.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics15 "+target.name);
                if(target.name == "graphics15")
                    {
                         _this.t15 = _this.add.sprite(270,161,'sg24_1_4_dot');
                         _this.group4.add(_this.t15);
                        _this.line15.visible = true; 
                        _this.graphics16.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
              _this.line16 = _this.add.sprite(262,88,'sg24_1_4_line3');
              _this.line16.visible = false;
                _this.graphics16 = _this.add.graphics(100, 54);
               _this.graphics16.lineStyle(0);
               _this.graphics16.beginFill(0xFF0000, 0.5);
               _this.graphics16.drawCircle(180, 50,50);
               _this.graphics16.endFill();
                 _this.graphics16.alpha = 0;
          _this.graphics16.name = "graphics16";
          
             _this.graphics16.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics16 "+target.name);
                if(target.name == "graphics16")
                    {
                        _this.line16.visible = true; 
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                        _this.addNumberPad();
                    
                    }
              },this)
          
           _this.rightAns = 16;
         
         
          _this.group2.add(_this.line1);
           _this.group2.add(_this.sg24_1_4_line2);
          _this.group2.add(_this.sg24_1_4_line3);
          _this.group2.add(_this.line4);
          _this.group2.add(_this.line5);
          _this.group2.add(_this.line6);
          _this.group2.add(_this.line7);
          _this.group2.add(_this.line8);
          _this.group2.add(_this.line9);
          _this.group2.add(_this.line10);
          _this.group2.add(_this.line11);
          _this.group2.add(_this.line12);
          _this.group2.add(_this.line13);
          _this.group2.add(_this.line14);
          _this.group2.add(_this.line15);
          _this.group2.add(_this.line16);
       
        
        _this.group3.add(_this.graphics1);
        _this.group3.add(_this.graphics2);
        _this.group3.add(_this.graphics3);
        _this.group3.add(_this.graphics4);
        _this.group3.add(_this.graphics5);
        _this.group3.add(_this.graphics6);
        _this.group3.add(_this.graphics7);
        _this.group3.add(_this.graphics8);
        _this.group3.add(_this.graphics9);
        _this.group3.add(_this.graphics10);
        _this.group3.add(_this.graphics11);
        _this.group3.add(_this.graphics12);
        _this.group3.add(_this.graphics13);
        _this.group3.add(_this.graphics14);
        _this.group3.add(_this.graphics15);
        _this.group3.add(_this.graphics16);
      
         
	    
      },
    
      question4:function(){
         _this.Question = 4;
          _this.no1++;
         console.log("4");
         
         
         //_this.bounds = new Phaser.Rectangle(65, 52, 775, 475);
         
        // _this.group2=_this.add.group();
           _this.sprite1 = _this.add.sprite(70, 100, 'sg24_1_4_symbol');
           _this.dotline = _this.add.sprite(210, 100, 'sg24_1_4_dotline4');
           _this.sprite3 = _this.add.sprite(203,92,'sg24_1_4_dot');
           _this.box = _this.add.sprite(840,240,'sg16_2_4_box');
          
            _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
            _this.group4 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1);
              _this.group1.add(_this.dotline);  
              _this.group1.add(_this.sprite3); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
           if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
           _this.line1 = _this.add.sprite(196,86,'sg24_1_4_line2');
           _this.line1.visible = false; 
             _this.graphics1 = _this.add.graphics(100, 55);
                
           _this.graphics1.lineStyle(0);
           _this.graphics1.beginFill(0xFF0000, 0.5);
           _this.graphics1.drawCircle(178, 50,50);
           _this.graphics1.endFill();
           _this.graphics1.alpha = 0;
           _this.graphics1.name = "graphics1";
           _this.graphics1.inputEnabled = true;
         
             _this.graphics1.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics1 "+target.name);
                if(target.name == "graphics1")
                    {
                         _this.t1 = _this.add.sprite(270,92,'sg24_1_4_dot');
                         _this.group4.add(_this.t1);
                        _this.line1.visible = true; 
                        _this.graphics2.inputEnabled = true;
                        //_this.sprite3.x += 68;
                       // _this.addNumberPad();
                         target.events.onInputDown.removeAll();
                       
                    }
              },this)
        
        
            _this.sg24_1_4_line2 = _this.add.sprite(263,87,'sg24_1_4_line3');
            _this.sg24_1_4_line2.visible = false;
            _this.graphics2 = _this.add.graphics(100, 123);
                
           _this.graphics2.lineStyle(0);
           _this.graphics2.beginFill(0xFF0000, 0.5);
           _this.graphics2.drawCircle(179, 50,50);
           _this.graphics2.endFill();
          _this.graphics2.alpha = 0;
           _this.graphics2.name = "graphics2";
       
             _this.graphics2.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics2 "+target.name);
                if(target.name == "graphics2")
                    {
                         _this.t2 = _this.add.sprite(270,159,'sg24_1_4_dot');
                         _this.group4.add(_this.t2);
                        _this.sg24_1_4_line2.visible = true; 
                         _this.graphics1.inputEnabled = false;
                        _this.graphics3.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                      //  _this.addNumberPad();
                    
                    }
              },this)
        
            _this.sg24_1_4_line3 = _this.add.sprite(263,155,'sg24_1_4_line3');
            _this.sg24_1_4_line3.visible = false;
        
            _this.graphics3 = _this.add.graphics(100, 190);
           _this.graphics3.lineStyle(0);
           _this.graphics3.beginFill(0xFF0000, 0.5);
           _this.graphics3.drawCircle(179, 50, 50);
           _this.graphics3.endFill();
           _this.graphics3.alpha = 0;
           _this.graphics3.name = "graphics3";
       
             _this.graphics3.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics3 "+target.name);
                if(target.name == "graphics3")
                    {
                         _this.t3 = _this.add.sprite(270,226,'sg24_1_4_dot');
                         _this.group4.add(_this.t3);
                        _this.sg24_1_4_line3.visible = true; 
                        _this.graphics4.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
    
                
          
            _this.line4 = _this.add.sprite(263,220,'sg24_1_4_line2');
           _this.line4.visible = false;
            _this.graphics4 = _this.add.graphics(100, 190);
           _this.graphics4.lineStyle(0);
           _this.graphics4.beginFill(0xFF0000, 0.5);
           _this.graphics4.drawCircle(247, 50, 50);
           _this.graphics4.endFill();
           _this.graphics4.alpha = 0;
          _this.graphics4.name = "graphics4";
          
             _this.graphics4.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics4"+target.name);
                if(target.name == "graphics4")
                    {
                         _this.t4 = _this.add.sprite(337,226,'sg24_1_4_dot');
                         _this.group4.add(_this.t4);
                        _this.line4.visible = true; 
                        _this.graphics5.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
                
          
          _this.line5 = _this.add.sprite(331,220,'sg24_1_4_line2');
          _this.line5.visible = false;
            _this.graphics5 = _this.add.graphics(100, 190);
           _this.graphics5.lineStyle(0);
           _this.graphics5.beginFill(0xFF0000, 0.5);
           _this.graphics5.drawCircle(315, 50, 50);
           _this.graphics5.endFill();
           _this.graphics5.alpha = 0;
          _this.graphics5.name = "graphics5";
         
             _this.graphics5.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics5 "+target.name);
                if(target.name == "graphics5")
                    {
                         _this.t5 = _this.add.sprite(406,226,'sg24_1_4_dot');
                         _this.group4.add(_this.t5);
                        _this.line5.visible = true; 
                        _this.graphics6.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line6 = _this.add.sprite(400,156,'sg24_1_4_line3');
            _this.line6.visible = false;
            _this.graphics6 = _this.add.graphics(100, 122);
           _this.graphics6.lineStyle(0);
           _this.graphics6.beginFill(0xFF0000, 0.5);
           _this.graphics6.drawCircle(315, 50, 50);
           _this.graphics6.endFill();
          _this.graphics6.alpha = 0;
          _this.graphics6.name = "graphics6";
          
             _this.graphics6.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics6 "+target.name);
                if(target.name == "graphics6")
                    {
                         _this.t6 = _this.add.sprite(406,159,'sg24_1_4_dot');
                         _this.group4.add(_this.t6);
                        _this.line6.visible = true; 
                        _this.graphics7.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line7 = _this.add.sprite(400,88,'sg24_1_4_line3');
           _this.line7.visible = false;
            _this.graphics7 = _this.add.graphics(100, 57);
           _this.graphics7.lineStyle(0);
           _this.graphics7.beginFill(0xFF0000, 0.5);
           _this.graphics7.drawCircle(315, 50, 50);
           _this.graphics7.endFill();
          _this.graphics7.alpha = 0;
          _this.graphics7.name = "graphics7";
        
             _this.graphics7.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics7 "+target.name);
                if(target.name == "graphics7")
                    {
                         _this.t7 = _this.add.sprite(407,92,'sg24_1_4_dot');
                         _this.group4.add(_this.t7);
                        _this.line7.visible = true; 
                        _this.graphics8.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line8 = _this.add.sprite(400,86,'sg24_1_4_line2');
             _this.line8.visible = false;
            _this.graphics8 = _this.add.graphics(100, 57);
           _this.graphics8.lineStyle(0);
           _this.graphics8.beginFill(0xFF0000, 0.5);
           _this.graphics8.drawCircle(383, 50, 50);
           _this.graphics8.endFill();
             _this.graphics8.alpha = 0;
          _this.graphics8.name = "graphics8";
       
             _this.graphics8.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics8 "+target.name);
                if(target.name == "graphics8")
                    {
                         _this.t8 = _this.add.sprite(475,92,'sg24_1_4_dot');
                         _this.group4.add(_this.t8);
                        _this.line8.visible = true; 
                        _this.graphics9.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line9 = _this.add.sprite(468,86,'sg24_1_4_line2');
             _this.line9.visible = false;
                _this.graphics9 = _this.add.graphics(100, 57);
               _this.graphics9.lineStyle(0);
               _this.graphics9.beginFill(0xFF0000, 0.5);
               _this.graphics9.drawCircle(451, 50, 50);
               _this.graphics9.endFill();
                 _this.graphics9.alpha = 0;
          _this.graphics9.name = "graphics9";
       
             _this.graphics9.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics9 "+target.name);
                if(target.name == "graphics9")
                    {
                         _this.t9 = _this.add.sprite(544,92,'sg24_1_4_dot');
                         _this.group4.add(_this.t9);
                        _this.line9.visible = true; 
                        _this.graphics10.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line10 = _this.add.sprite(536,86,'sg24_1_4_line3');
             _this.line10.visible = false;
               _this.graphics10 = _this.add.graphics(100, 123);
               _this.graphics10.lineStyle(0);
               _this.graphics10.beginFill(0xFF0000, 0.5);
               _this.graphics10.drawCircle(451, 50, 50);
               _this.graphics10.endFill();
             _this.graphics10.alpha = 0;
          _this.graphics10.name = "graphics10";
      
             _this.graphics10.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics10 "+target.name);
                if(target.name == "graphics10")
                    {
                         _this.t10 = _this.add.sprite(544,159,'sg24_1_4_dot');
                         _this.group4.add(_this.t10);
                        _this.line10.visible = true; 
                        _this.graphics11.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
            _this.line11 = _this.add.sprite(536,155,'sg24_1_4_line3');
             _this.line11.visible = false;
                _this.graphics11 = _this.add.graphics(100, 191);
               _this.graphics11.lineStyle(0);
               _this.graphics11.beginFill(0xFF0000, 0.5);
               _this.graphics11.drawCircle(452, 50, 50);
               _this.graphics11.endFill();
                 _this.graphics11.alpha = 0;
          _this.graphics11.name = "graphics11";
    
             _this.graphics11.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics11 "+target.name);
                if(target.name == "graphics11")
                    {
                         _this.t11 = _this.add.sprite(544,226,'sg24_1_4_dot');
                         _this.group4.add(_this.t11);
                        _this.line11.visible = true; 
                        _this.graphics12.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           
            _this.line12 = _this.add.sprite(536,223,'sg24_1_4_line3');
              _this.line12.visible = false;
              _this.graphics12 = _this.add.graphics(100, 259);
               _this.graphics12.lineStyle(0);
               _this.graphics12.beginFill(0xFF0000, 0.5);
               _this.graphics12.drawCircle(452, 50, 50);
               _this.graphics12.endFill();
                 _this.graphics12.alpha = 0;
          _this.graphics12.name = "graphics12";
       
             _this.graphics12.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics12 "+target.name);
                if(target.name == "graphics12")
                    {
                         _this.t12 = _this.add.sprite(544,293,'sg24_1_4_dot');
                         _this.group4.add(_this.t12);
                        _this.line12.visible = true; 
                        _this.graphics13.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          
             _this.line13 = _this.add.sprite(536,292,'sg24_1_4_line3');
             _this.line13.visible = false;
               _this.graphics13 = _this.add.graphics(100, 326);
               _this.graphics13.lineStyle(0);
               _this.graphics13.beginFill(0xFF0000, 0.5);
               _this.graphics13.drawCircle(452, 50, 50);
               _this.graphics13.endFill();
                 _this.graphics13.alpha = 0;
          _this.graphics13.name = "graphics13";
       
             _this.graphics13.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics13 "+target.name);
                if(target.name == "graphics13")
                    {
                         _this.t13 = _this.add.sprite(544,360,'sg24_1_4_dot');
                         _this.group4.add(_this.t13);
                        _this.line13.visible = true; 
                        _this.graphics14.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line14 = _this.add.sprite(536,355,'sg24_1_4_line3');
              _this.line14.visible = false;
                 _this.graphics14 = _this.add.graphics(100, 393);
               _this.graphics14.lineStyle(0);
               _this.graphics14.beginFill(0xFF0000, 0.5);
               _this.graphics14.drawCircle(452, 50, 50);
               _this.graphics14.endFill();
                _this.graphics14.alpha = 0;
          _this.graphics14.name = "graphics14";
       
             _this.graphics14.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics14 "+target.name);
                if(target.name == "graphics14")
                    {
                         _this.t14 = _this.add.sprite(544,427,'sg24_1_4_dot');
                         _this.group4.add(_this.t14);
                        _this.line14.visible = true; 
                        _this.graphics15.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
        
             _this.line15 = _this.add.sprite(470,423,'sg24_1_4_line2');
              _this.line15.visible = false;
                _this.graphics15 = _this.add.graphics(100, 393);
               _this.graphics15.lineStyle(0);
               _this.graphics15.beginFill(0xFF0000, 0.5);
               _this.graphics15.drawCircle(384, 50, 50);
               _this.graphics15.endFill();
               _this.graphics15.alpha = 0;
          _this.graphics15.name = "graphics15";
       
             _this.graphics15.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics15 "+target.name);
                if(target.name == "graphics15")
                    {
                         _this.t15 = _this.add.sprite(476,429,'sg24_1_4_dot');
                         _this.group4.add(_this.t15);
                        _this.line15.visible = true; 
                        _this.graphics16.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
              _this.line16 = _this.add.sprite(400,423,'sg24_1_4_line2');
              _this.line16.visible = false;
                _this.graphics16 = _this.add.graphics(100, 393);
               _this.graphics16.lineStyle(0);
               _this.graphics16.beginFill(0xFF0000, 0.5);
               _this.graphics16.drawCircle(316, 50, 50);
               _this.graphics16.endFill();
                _this.graphics16.alpha = 0;
          _this.graphics16.name = "graphics16";
      
             _this.graphics16.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics16 "+target.name);
                if(target.name == "graphics16")
                    {
                         _this.t16 = _this.add.sprite(406,429,'sg24_1_4_dot');
                         _this.group4.add(_this.t16);
                        _this.line16.visible = true; 
                        _this.graphics17.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
               _this.line17 = _this.add.sprite(400,356,'sg24_1_4_line3');
             _this.line17.visible = false;
                _this.graphics17 = _this.add.graphics(100, 325);
               _this.graphics17.lineStyle(0);
               _this.graphics17.beginFill(0xFF0000, 0.5);
               _this.graphics17.drawCircle(316, 50, 50);
               _this.graphics17.endFill();
                 _this.graphics17.alpha = 0;
          _this.graphics17.name = "graphics17";
      
             _this.graphics17.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics17 "+target.name);
                if(target.name == "graphics17")
                    {
                         _this.t17 = _this.add.sprite(406,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t17);
                        _this.line17.visible = true; 
                        _this.graphics18.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line18 = _this.add.sprite(400,289,'sg24_1_4_line3');
              _this.line18.visible = false;
                _this.graphics18 = _this.add.graphics(100, 256);
               _this.graphics18.lineStyle(0);
               _this.graphics18.beginFill(0xFF0000, 0.5);
               _this.graphics18.drawCircle(316, 50, 50);
               _this.graphics18.endFill();
                 _this.graphics18.alpha = 0;
          _this.graphics18.name = "graphics18";
    
             _this.graphics18.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics18 "+target.name);
                if(target.name == "graphics18")
                    {
                         _this.t18 = _this.add.sprite(406,295,'sg24_1_4_dot');
                         _this.group4.add(_this.t18);
                        _this.line18.visible = true; 
                        _this.graphics19.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
               _this.line19 = _this.add.sprite(332,288,'sg24_1_4_line2');
               _this.line19.visible = false;
                _this.graphics19 = _this.add.graphics(100, 257);
               _this.graphics19.lineStyle(0);
               _this.graphics19.beginFill(0xFF0000, 0.5);
               _this.graphics19.drawCircle(248, 50, 50);
               _this.graphics19.endFill();
                _this.graphics19.alpha = 0;
          _this.graphics19.name = "graphics19";
       
             _this.graphics19.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics19 "+target.name);
                if(target.name == "graphics19")
                    {
                         _this.t19 = _this.add.sprite(337,295,'sg24_1_4_dot');
                         _this.group4.add(_this.t19);
                        _this.line19.visible = true; 
                        _this.graphics20.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line20 = _this.add.sprite(264,288,'sg24_1_4_line2');
              _this.line20.visible = false;
                _this.graphics20 = _this.add.graphics(100, 257);
               _this.graphics20.lineStyle(0);
               _this.graphics20.beginFill(0xFF0000, 0.5);
               _this.graphics20.drawCircle(180, 50, 50);
               _this.graphics20.endFill();
                 _this.graphics20.alpha = 0;
          _this.graphics20.name = "graphics20";
     
             _this.graphics20.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics20 "+target.name);
                if(target.name == "graphics20")
                    {
                         _this.t20 = _this.add.sprite(270,295,'sg24_1_4_dot');
                         _this.group4.add(_this.t20);
                        _this.line20.visible = true; 
                        _this.graphics21.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          _this.line21 = _this.add.sprite(263,289,'sg24_1_4_line3');
              _this.line21.visible = false;
               _this.graphics21 = _this.add.graphics(100, 325);
               _this.graphics21.lineStyle(0);
               _this.graphics21.beginFill(0xFF0000, 0.5);
               _this.graphics21.drawCircle(180, 50, 50);
               _this.graphics21.endFill();
                _this.graphics21.alpha = 0;
          _this.graphics21.name = "graphics21";
     
             _this.graphics21.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics21 "+target.name);
                if(target.name == "graphics21")
                    {
                         _this.t21 = _this.add.sprite(270,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t21);
                        _this.line21.visible = true; 
                        _this.graphics22.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line22 = _this.add.sprite(263,357,'sg24_1_4_line3');
             _this.line22.visible = false;
               _this.graphics22 = _this.add.graphics(100, 393);
               _this.graphics22.lineStyle(0);
               _this.graphics22.beginFill(0xFF0000, 0.5);
               _this.graphics22.drawCircle(180, 50, 50);
               _this.graphics22.endFill();
              _this.graphics22.alpha = 0;
          _this.graphics22.name = "graphics22";
    
             _this.graphics22.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics22 "+target.name);
                if(target.name == "graphics22")
                    {
                         _this.t22 = _this.add.sprite(270,429,'sg24_1_4_dot');
                         _this.group4.add(_this.t22);
                        _this.line22.visible = true; 
                        _this.graphics23.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
            _this.line23 = _this.add.sprite(195,422,'sg24_1_4_line2');
              _this.line23.visible = false;
                _this.graphics23 = _this.add.graphics(100, 393);
               _this.graphics23.lineStyle(0);
               _this.graphics23.beginFill(0xFF0000, 0.5);
               _this.graphics23.drawCircle(112, 50, 50);
               _this.graphics23.endFill();
                _this.graphics23.alpha = 0;
          _this.graphics23.name = "graphics23";
     
             _this.graphics23.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics23 "+target.name);
                if(target.name == "graphics23")
                    {
                         _this.t23 = _this.add.sprite(203,429,'sg24_1_4_dot');
                         _this.group4.add(_this.t23);
                        _this.line23.visible = true; 
                        _this.graphics24.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line24 = _this.add.sprite(195,356,'sg24_1_4_line3');
              _this.line24.visible = false;
                _this.graphics24 = _this.add.graphics(100, 325);
               _this.graphics24.lineStyle(0);
               _this.graphics24.beginFill(0xFF0000, 0.5);
               _this.graphics24.drawCircle(111, 50, 50);
               _this.graphics24.endFill();
                _this.graphics24.alpha = 0;
          _this.graphics24.name = "graphics24";
      
             _this.graphics24.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics24 "+target.name);
                if(target.name == "graphics24")
                    {
                         _this.t24 = _this.add.sprite(203,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t24);
                        _this.line24.visible = true; 
                         _this.graphics25.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                     
                    }
              },this)
             
                _this.line25 = _this.add.sprite(195,288,'sg24_1_4_line3');
              _this.line25.visible = false;
                _this.graphics25 = _this.add.graphics(100, 257);
               _this.graphics25.lineStyle(0);
               _this.graphics25.beginFill(0xFF0000, 0.5);
               _this.graphics25.drawCircle(111, 50, 50);
               _this.graphics25.endFill();
                 _this.graphics25.alpha = 0;
          _this.graphics25.name = "graphics25";
       
             _this.graphics25.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics25 "+target.name);
                if(target.name == "graphics25")
                    {
                         _this.t25 = _this.add.sprite(203,295,'sg24_1_4_dot');
                         _this.group4.add(_this.t25);
                        _this.line25.visible = true; 
                         _this.graphics26.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                      
                    
                    }
              },this)
             
             _this.line26 = _this.add.sprite(195,220,'sg24_1_4_line3');
              _this.line26.visible = false;
                _this.graphics26 = _this.add.graphics(100, 189);
               _this.graphics26.lineStyle(0);
               _this.graphics26.beginFill(0xFF0000, 0.5);
               _this.graphics26.drawCircle(111, 50, 50);
               _this.graphics26.endFill();
                 _this.graphics26.alpha = 0;
          _this.graphics26.name = "graphics26";
     
             _this.graphics26.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics26 "+target.name);
                if(target.name == "graphics26")
                    {
                         _this.t26 = _this.add.sprite(203,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t26);
                        _this.line26.visible = true; 
                         _this.graphics27.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                      
                    
                    }
              },this)
             
             _this.line27 = _this.add.sprite(195,152,'sg24_1_4_line3');
              _this.line27.visible = false;
                _this.graphics27 = _this.add.graphics(100, 121);
               _this.graphics27.lineStyle(0);
               _this.graphics27.beginFill(0xFF0000, 0.5);
               _this.graphics27.drawCircle(111, 50, 50);
               _this.graphics27.endFill();
               _this.graphics27.alpha = 0;
             _this.graphics27.name = "graphics27";
     
             _this.graphics27.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics27 "+target.name);
                if(target.name == "graphics27")
                    {
                         _this.t27 = _this.add.sprite(203,161,'sg24_1_4_dot');
                         _this.group4.add(_this.t27);
                        _this.line27.visible = true; 
                         _this.graphics28.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       
                    
                    }
              },this)
             
              _this.line28 = _this.add.sprite(195,86,'sg24_1_4_line3');
             _this.line28.visible = false;
                _this.graphics28 = _this.add.graphics(100, 53);
               _this.graphics28.lineStyle(0);
               _this.graphics28.beginFill(0xFF0000, 0.5);
               _this.graphics28.drawCircle(111, 50, 50);
               _this.graphics28.endFill();
                 _this.graphics28.alpha = 0;
          _this.graphics28.name = "graphics28";
       
             _this.graphics28.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics28 "+target.name);
                if(target.name == "graphics28")
                    {
                        _this.line28.visible = true; 
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                        _this.addNumberPad();
                    
                    }
              },this)
          
          
         
         _this.rightAns = 28;
         
         
          _this.group2.add(_this.line1);
           _this.group2.add(_this.sg24_1_4_line2);
          _this.group2.add(_this.sg24_1_4_line3);
          _this.group2.add(_this.line4);
          _this.group2.add(_this.line5);
          _this.group2.add(_this.line6);
          _this.group2.add(_this.line7);
          _this.group2.add(_this.line8);
          _this.group2.add(_this.line9);
          _this.group2.add(_this.line10);
          _this.group2.add(_this.line11);
          _this.group2.add(_this.line12);
          _this.group2.add(_this.line13);
          _this.group2.add(_this.line14);
          _this.group2.add(_this.line15);
          _this.group2.add(_this.line16);
          _this.group2.add(_this.line17);
           _this.group2.add(_this.line18);
          _this.group2.add(_this.line19);
          _this.group2.add(_this.line20);
          _this.group2.add(_this.line21);
          _this.group2.add(_this.line22);
          _this.group2.add(_this.line23);
          _this.group2.add(_this.line24);
          _this.group2.add(_this.line25);
          _this.group2.add(_this.line26);
          _this.group2.add(_this.line27);
          _this.group2.add(_this.line28);
        
        _this.group3.add(_this.graphics1);
        _this.group3.add(_this.graphics2);
        _this.group3.add(_this.graphics3);
        _this.group3.add(_this.graphics4);
        _this.group3.add(_this.graphics5);
        _this.group3.add(_this.graphics6);
        _this.group3.add(_this.graphics7);
        _this.group3.add(_this.graphics8);
        _this.group3.add(_this.graphics9);
        _this.group3.add(_this.graphics10);
        _this.group3.add(_this.graphics11);
        _this.group3.add(_this.graphics12);
        _this.group3.add(_this.graphics13);
        _this.group3.add(_this.graphics14);
        _this.group3.add(_this.graphics15);
        _this.group3.add(_this.graphics16);
        _this.group3.add(_this.graphics17);
        _this.group3.add(_this.graphics18);
        _this.group3.add(_this.graphics19);
        _this.group3.add(_this.graphics20);
        _this.group3.add(_this.graphics21);
        _this.group3.add(_this.graphics22);
        _this.group3.add(_this.graphics23);
        _this.group3.add(_this.graphics24);
        _this.group3.add(_this.graphics25);
        _this.group3.add(_this.graphics26);   
        _this.group3.add(_this.graphics27);  
        _this.group3.add(_this.graphics28);  
    
      },
    
      question5:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("5");

           _this.sprite1 = _this.add.sprite(70, 100, 'sg24_1_4_symbol');
           _this.dotline = _this.add.sprite(210, 101, 'sg24_1_4_dotline5');
           _this.sprite3 = _this.add.sprite(203,93,'sg24_1_4_dot');
           _this.box = _this.add.sprite(840,240,'sg16_2_4_box');
          
           _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
             _this.group4 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1);
              _this.group1.add(_this.dotline);  
              _this.group1.add(_this.sprite3); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
           if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
           _this.line1 = _this.add.sprite(198,87,'sg24_1_4_line2');
           _this.line1.visible = false; 
          
           _this.graphics1 = _this.add.graphics(100, 55);   
           _this.graphics1.lineStyle(0);
           _this.graphics1.beginFill(0xFF0000, 0.5);
           _this.graphics1.drawCircle(178, 50, 50);
           _this.graphics1.endFill();
           _this.graphics1.alpha = 0;
           _this.graphics1.name = "graphics1";
           _this.graphics1.inputEnabled = true;
          
             _this.graphics1.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics1 "+target.name);
                if(target.name == "graphics1")
                    {
                        _this.t1 = _this.add.sprite(270,93,'sg24_1_4_dot');
                        _this.group4.add(_this.t1);
                        _this.line1.visible = true; 
                        _this.graphics2.inputEnabled = true;
                        //_this.sprite3.x += 68;
                       // _this.addNumberPad();
                         target.events.onInputDown.removeAll();
                    }
              },this)
        
        
            _this.sg24_1_4_line2 = _this.add.sprite(266,87,'sg24_1_4_line2');
            _this.sg24_1_4_line2.visible = false;
            _this.graphics2 = _this.add.graphics(100, 55);
                
           _this.graphics2.lineStyle(0);
           _this.graphics2.beginFill(0xFF0000, 0.5);
           _this.graphics2.drawCircle(247, 50, 50);
           _this.graphics2.endFill();
           _this.graphics2.alpha = 0;
           _this.graphics2.name = "graphics2";
      
             _this.graphics2.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics2 "+target.name);
                if(target.name == "graphics2")
                    {
                        _this.t2 = _this.add.sprite(338,93,'sg24_1_4_dot');
                        _this.group4.add(_this.t2);
                        _this.sg24_1_4_line2.visible = true; 
                         _this.graphics1.inputEnabled = false;
                        _this.graphics3.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
        
            _this.sg24_1_4_line3 = _this.add.sprite(333,87,'sg24_1_4_line2');
            _this.sg24_1_4_line3.visible = false;
        
            _this.graphics3 = _this.add.graphics(100, 55);
           _this.graphics3.lineStyle(0);
           _this.graphics3.beginFill(0xFF0000, 0.5);
           _this.graphics3.drawCircle(315, 50, 50);
           _this.graphics3.endFill();
           _this.graphics3.alpha = 0;
           _this.graphics3.name = "graphics3";
         
             _this.graphics3.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics3 "+target.name);
                if(target.name == "graphics3")
                    {
                         _this.t3 = _this.add.sprite(406,93,'sg24_1_4_dot');
                        _this.group4.add(_this.t3);
                        _this.sg24_1_4_line3.visible = true; 
                        _this.graphics4.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
    
                
          
            _this.line4 = _this.add.sprite(400,87,'sg24_1_4_line2');
           _this.line4.visible = false;
            _this.graphics4 = _this.add.graphics(100, 55);
           _this.graphics4.lineStyle(0);
           _this.graphics4.beginFill(0xFF0000, 0.5);
           _this.graphics4.drawCircle(384, 50, 50);
           _this.graphics4.endFill();
          _this.graphics4.alpha = 0;
          _this.graphics4.name = "graphics4";
         
             _this.graphics4.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics4"+target.name);
                if(target.name == "graphics4")
                    {
                         _this.t4 = _this.add.sprite(474,93,'sg24_1_4_dot');
                        _this.group4.add(_this.t4);
                        _this.line4.visible = true; 
                        _this.graphics5.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
                
          
          _this.line5 = _this.add.sprite(466,87,'sg24_1_4_line2');
          _this.line5.visible = false;
            _this.graphics5 = _this.add.graphics(100, 55);
           _this.graphics5.lineStyle(0);
           _this.graphics5.beginFill(0xFF0000, 0.5);
           _this.graphics5.drawCircle(452, 50, 50);
           _this.graphics5.endFill();
           _this.graphics5.alpha = 0;
          _this.graphics5.name = "graphics5";
        
             _this.graphics5.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics5 "+target.name);
                if(target.name == "graphics5")
                    {
                         _this.t5 = _this.add.sprite(542,93,'sg24_1_4_dot');
                        _this.group4.add(_this.t5);
                        _this.line5.visible = true; 
                        _this.graphics6.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line6 = _this.add.sprite(535,87,'sg24_1_4_line2');
           _this.line6.visible = false;
            _this.graphics6 = _this.add.graphics(90, 55);
           _this.graphics6.lineStyle(0);
           _this.graphics6.beginFill(0xFF0000, 0.5);
           _this.graphics6.drawCircle(530, 50, 50);
           _this.graphics6.endFill();
          _this.graphics6.alpha = 0;
          _this.graphics6.name = "graphics6";
        
             _this.graphics6.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics6 "+target.name);
                if(target.name == "graphics6")
                    {
                         _this.t6 = _this.add.sprite(609,93,'sg24_1_4_dot');
                        _this.group4.add(_this.t6);
                        _this.line6.visible = true; 
                        _this.graphics7.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line7 = _this.add.sprite(603,87,'sg24_1_4_line2');
            _this.line7.visible = false;
            _this.graphics7 = _this.add.graphics(100, 55);
           _this.graphics7.lineStyle(0);
           _this.graphics7.beginFill(0xFF0000, 0.5);
           _this.graphics7.drawCircle(588, 50,50);
           _this.graphics7.endFill();
           _this.graphics7.alpha = 0;
          _this.graphics7.name = "graphics7";
         
             _this.graphics7.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics7 "+target.name);
                if(target.name == "graphics7")
                    {
                         _this.t7 = _this.add.sprite(679,93,'sg24_1_4_dot');
                        _this.group4.add(_this.t7);
                        _this.line7.visible = true; 
                        _this.graphics8.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line8 = _this.add.sprite(672,87,'sg24_1_4_line3');
            _this.line8.visible = false;
            _this.graphics8 = _this.add.graphics(100, 123);
           _this.graphics8.lineStyle(0);
           _this.graphics8.beginFill(0xFF0000, 0.5);
           _this.graphics8.drawCircle(588, 50,50);
           _this.graphics8.endFill();
           _this.graphics8.alpha = 0;
          _this.graphics8.name = "graphics8";
        
             _this.graphics8.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics8 "+target.name);
                if(target.name == "graphics8")
                    {
                         _this.t1 = _this.add.sprite(679,160,'sg24_1_4_dot');
                        _this.group4.add(_this.t1);
                        _this.line8.visible = true; 
                        _this.graphics9.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line9 = _this.add.sprite(672,155,'sg24_1_4_line3');
             _this.line9.visible = false;
                _this.graphics9 = _this.add.graphics(100, 191);
               _this.graphics9.lineStyle(0);
               _this.graphics9.beginFill(0xFF0000, 0.5);
               _this.graphics9.drawCircle(588, 50,50);
               _this.graphics9.endFill();
                 _this.graphics9.alpha = 0;
          _this.graphics9.name = "graphics9";
       
             _this.graphics9.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics9 "+target.name);
                if(target.name == "graphics9")
                    {
                         _this.t9 = _this.add.sprite(679,227,'sg24_1_4_dot');
                        _this.group4.add(_this.t9);
                        _this.line9.visible = true; 
                        _this.graphics10.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line10 = _this.add.sprite(672,223,'sg24_1_4_line3');
              _this.line10.visible = false;
               _this.graphics10 = _this.add.graphics(100, 259);
               _this.graphics10.lineStyle(0);
               _this.graphics10.beginFill(0xFF0000, 0.5);
               _this.graphics10.drawCircle(588, 50,50);
               _this.graphics10.endFill();
                _this.graphics10.alpha = 0;
          _this.graphics10.name = "graphics10";
          
             _this.graphics10.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics10 "+target.name);
                if(target.name == "graphics10")
                    {
                         _this.t10 = _this.add.sprite(679,294,'sg24_1_4_dot');
                        _this.group4.add(_this.t10);
                        _this.line10.visible = true; 
                        _this.graphics11.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
            _this.line11 = _this.add.sprite(672,291,'sg24_1_4_line3');
             _this.line11.visible = false;
                _this.graphics11 = _this.add.graphics(100, 327);
               _this.graphics11.lineStyle(0);
               _this.graphics11.beginFill(0xFF0000, 0.5);
               _this.graphics11.drawCircle(588, 50,50);
               _this.graphics11.endFill();
                 _this.graphics11.alpha = 0;
          _this.graphics11.name = "graphics11";
         
             _this.graphics11.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics11 "+target.name);
                if(target.name == "graphics11")
                    {
                         _this.t11 = _this.add.sprite(679,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t11);
                        _this.line11.visible = true; 
                        _this.graphics12.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           
            _this.line12 = _this.add.sprite(604,356,'sg24_1_4_line2');
              _this.line12.visible = false;
              _this.graphics12 = _this.add.graphics(90, 327);
               _this.graphics12.lineStyle(0);
               _this.graphics12.beginFill(0xFF0000, 0.5);
               _this.graphics12.drawCircle(530,50, 50);
               _this.graphics12.endFill();
                _this.graphics12.alpha = 0;
          _this.graphics12.name = "graphics12";
             _this.graphics12.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics12 "+target.name);
                if(target.name == "graphics12")
                    {
                         _this.t12 = _this.add.sprite(612,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t12);
                        _this.line12.visible = true; 
                        _this.graphics13.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          
             _this.line13 = _this.add.sprite(536,356,'sg24_1_4_line2');
             _this.line13.visible = false;
               _this.graphics13 = _this.add.graphics(100, 327);
               _this.graphics13.lineStyle(0);
               _this.graphics13.beginFill(0xFF0000, 0.5);
               _this.graphics13.drawCircle(452, 50,50);
               _this.graphics13.endFill();
                 _this.graphics13.alpha = 0;
          _this.graphics13.name = "graphics13";
     
             _this.graphics13.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics13 "+target.name);
                if(target.name == "graphics13")
                    {
                         _this.t13 = _this.add.sprite(543,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t13);
                        _this.line13.visible = true; 
                        _this.graphics14.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line14 = _this.add.sprite(468,356,'sg24_1_4_line2');
              _this.line14.visible = false;
                 _this.graphics14 = _this.add.graphics(100, 327);
               _this.graphics14.lineStyle(0);
               _this.graphics14.beginFill(0xFF0000, 0.5);
               _this.graphics14.drawCircle(384,50,50);
               _this.graphics14.endFill();
               _this.graphics14.alpha = 0;
          _this.graphics14.name = "graphics14";
        
             _this.graphics14.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics14 "+target.name);
                if(target.name == "graphics14")
                    {
                         _this.t14 = _this.add.sprite(475,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t14);
                        _this.line14.visible = true; 
                        _this.graphics15.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
        
             _this.line15 = _this.add.sprite(400,356,'sg24_1_4_line2');
              _this.line15.visible = false;
                _this.graphics15 = _this.add.graphics(100, 327);
               _this.graphics15.lineStyle(0);
               _this.graphics15.beginFill(0xFF0000, 0.5);
               _this.graphics15.drawCircle(316,50,50);
               _this.graphics15.endFill();
                 _this.graphics15.alpha = 0;
          _this.graphics15.name = "graphics15";
       
             _this.graphics15.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics15 "+target.name);
                if(target.name == "graphics15")
                    {
                         _this.t15 = _this.add.sprite(408,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t15);
                        _this.line15.visible = true; 
                        _this.graphics16.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
              _this.line16 = _this.add.sprite(332,356,'sg24_1_4_line2');
              _this.line16.visible = false;
                _this.graphics16 = _this.add.graphics(100, 327);
               _this.graphics16.lineStyle(0);
               _this.graphics16.beginFill(0xFF0000, 0.5);
               _this.graphics16.drawCircle(248,50,50);
               _this.graphics16.endFill();
                 _this.graphics16.alpha = 0;
          _this.graphics16.name = "graphics16";
       
             _this.graphics16.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics16 "+target.name);
                if(target.name == "graphics16")
                    {
                         _this.t16 = _this.add.sprite(339,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t16);
                        _this.line16.visible = true; 
                        _this.graphics17.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
               _this.line17 = _this.add.sprite(264,356,'sg24_1_4_line2');
             _this.line17.visible = false;
                _this.graphics17 = _this.add.graphics(100, 327);
               _this.graphics17.lineStyle(0);
               _this.graphics17.beginFill(0xFF0000, 0.5);
               _this.graphics17.drawCircle(180,50,50);
               _this.graphics17.endFill();
                 _this.graphics17.alpha = 0;
          _this.graphics17.name = "graphics17";
      
             _this.graphics17.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics17 "+target.name);
                if(target.name == "graphics17")
                    {
                         _this.t17 = _this.add.sprite(272,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t17);
                        _this.line17.visible = true; 
                        _this.graphics18.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line18 = _this.add.sprite(197,356,'sg24_1_4_line2');
              _this.line18.visible = false;
                _this.graphics18 = _this.add.graphics(100, 327);
               _this.graphics18.lineStyle(0);
               _this.graphics18.beginFill(0xFF0000, 0.5);
               _this.graphics18.drawCircle(112,50,50);
               _this.graphics18.endFill();
                 _this.graphics18.alpha = 0;
          _this.graphics18.name = "graphics18";
     
             _this.graphics18.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics18 "+target.name);
                if(target.name == "graphics18")
                    {
                         _this.t18 = _this.add.sprite(203,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t18);
                        _this.line18.visible = true; 
                        _this.graphics19.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
               _this.line19 = _this.add.sprite(195,290,'sg24_1_4_line3');
               _this.line19.visible = false;
                _this.graphics19 = _this.add.graphics(100, 259);
               _this.graphics19.lineStyle(0);
               _this.graphics19.beginFill(0xFF0000, 0.5);
               _this.graphics19.drawCircle(111,50,50);
               _this.graphics19.endFill();
                 _this.graphics19.alpha = 0;
          _this.graphics19.name = "graphics19";
        
             _this.graphics19.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics19 "+target.name);
                if(target.name == "graphics19")
                    {
                         _this.t19 = _this.add.sprite(203,296,'sg24_1_4_dot');
                        _this.group4.add(_this.t19);
                        _this.line19.visible = true; 
                        _this.graphics20.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line20 = _this.add.sprite(195,222,'sg24_1_4_line3');
              _this.line20.visible = false;
                _this.graphics20 = _this.add.graphics(100, 191);
               _this.graphics20.lineStyle(0);
               _this.graphics20.beginFill(0xFF0000, 0.5);
               _this.graphics20.drawCircle(111,50,50);
               _this.graphics20.endFill();
                 _this.graphics20.alpha = 0;
          _this.graphics20.name = "graphics20";
      
             _this.graphics20.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics20 "+target.name);
                if(target.name == "graphics20")
                    {
                         _this.t20 = _this.add.sprite(203,229,'sg24_1_4_dot');
                        _this.group4.add(_this.t20);
                        _this.line20.visible = true; 
                        _this.graphics21.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          _this.line21 = _this.add.sprite(195,154,'sg24_1_4_line3');
              _this.line21.visible = false;
               _this.graphics21 = _this.add.graphics(100, 123);
               _this.graphics21.lineStyle(0);
               _this.graphics21.beginFill(0xFF0000, 0.5);
               _this.graphics21.drawCircle(111,50,50);
               _this.graphics21.endFill();
                 _this.graphics21.alpha = 0;
          _this.graphics21.name = "graphics21";
         
             _this.graphics21.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics21 "+target.name);
                if(target.name == "graphics21")
                    {
                         _this.t21 = _this.add.sprite(203,162,'sg24_1_4_dot');
                        _this.group4.add(_this.t21);
                        _this.line21.visible = true; 
                        _this.graphics22.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line22 = _this.add.sprite(195,87,'sg24_1_4_line3');
              _this.line22.visible = false;
               _this.graphics22 = _this.add.graphics(100, 54);
               _this.graphics22.lineStyle(0);
               _this.graphics22.beginFill(0xFF0000, 0.5);
               _this.graphics22.drawCircle(111,50,50);
               _this.graphics22.endFill();
                 _this.graphics22.alpha = 0;
          _this.graphics22.name = "graphics22";
         
             _this.graphics22.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics22 "+target.name);
                if(target.name == "graphics22")
                    {
                        _this.line22.visible = true; 
                       
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                        _this.addNumberPad();
                    
                    }
              },this)
         
  
         
         _this.rightAns = 22;
         
         
          _this.group2.add(_this.line1);
           _this.group2.add(_this.sg24_1_4_line2);
          _this.group2.add(_this.sg24_1_4_line3);
          _this.group2.add(_this.line4);
          _this.group2.add(_this.line5);
          _this.group2.add(_this.line6);
          _this.group2.add(_this.line7);
          _this.group2.add(_this.line8);
          _this.group2.add(_this.line9);
          _this.group2.add(_this.line10);
          _this.group2.add(_this.line11);
          _this.group2.add(_this.line12);
          _this.group2.add(_this.line13);
          _this.group2.add(_this.line14);
          _this.group2.add(_this.line15);
          _this.group2.add(_this.line16);
          _this.group2.add(_this.line17);
           _this.group2.add(_this.line18);
          _this.group2.add(_this.line19);
          _this.group2.add(_this.line20);
          _this.group2.add(_this.line21);
          _this.group2.add(_this.line22);
         
        
        _this.group3.add(_this.graphics1);
        _this.group3.add(_this.graphics2);
        _this.group3.add(_this.graphics3);
        _this.group3.add(_this.graphics4);
        _this.group3.add(_this.graphics5);
        _this.group3.add(_this.graphics6);
        _this.group3.add(_this.graphics7);
        _this.group3.add(_this.graphics8);
        _this.group3.add(_this.graphics9);
        _this.group3.add(_this.graphics10);
        _this.group3.add(_this.graphics11);
        _this.group3.add(_this.graphics12);
        _this.group3.add(_this.graphics13);
        _this.group3.add(_this.graphics14);
        _this.group3.add(_this.graphics15);
        _this.group3.add(_this.graphics16);
        _this.group3.add(_this.graphics17);
        _this.group3.add(_this.graphics18);
        _this.group3.add(_this.graphics19);
        _this.group3.add(_this.graphics20);
        _this.group3.add(_this.graphics21);
        _this.group3.add(_this.graphics22);
       
          
     
      },
    
      question6:function(){
         _this.Question = 6;
          _this.no1++;
         console.log("6");
         
         
           _this.sprite1 = _this.add.sprite(70, 100, 'sg24_1_4_symbol');
           _this.dotline = _this.add.sprite(210, 101, 'sg24_1_4_dotline6');
           _this.sprite3 = _this.add.sprite(340,94,'sg24_1_4_dot');
           _this.box = _this.add.sprite(840,240,'sg16_2_4_box');
          
           _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
              _this.group4 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1);
              _this.group1.add(_this.dotline);  
              _this.group1.add(_this.sprite3); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
             if(_this.soundPlayed == false)
                 {
                  _this.getVoice();
                  _this.soundPlayed = true;     
                 }
           _this.line1 = _this.add.sprite(332,87,'sg24_1_4_line2');
           _this.line1.visible = false; 
          
             _this.graphics1 = _this.add.graphics(100, 55);      
           _this.graphics1.lineStyle(0);
           _this.graphics1.beginFill(0xFF0000, 0.5);
           _this.graphics1.drawCircle(315,50,50);
           _this.graphics1.endFill();
           _this.graphics1.alpha = 0;
           _this.graphics1.name = "graphics1";
           _this.graphics1.inputEnabled = true;
          
             _this.graphics1.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics1 "+target.name);
                if(target.name == "graphics1")
                    {
                         _this.t1 = _this.add.sprite(407,94,'sg24_1_4_dot');
                         _this.group4.add(_this.t1);
                        _this.line1.visible = true; 
                        _this.graphics2.inputEnabled = true;
                        //_this.sprite3.x += 68;
                       // _this.addNumberPad();
                         target.events.onInputDown.removeAll();
                    }
              },this)
        
        
            _this.sg24_1_4_line2 = _this.add.sprite(400,87,'sg24_1_4_line2');
            _this.sg24_1_4_line2.visible = false;
            _this.graphics2 = _this.add.graphics(100, 55);
                
           _this.graphics2.lineStyle(0);
           _this.graphics2.beginFill(0xFF0000, 0.5);
           _this.graphics2.drawCircle(383,50,50);
           _this.graphics2.endFill();
           _this.graphics2.alpha = 0;
           _this.graphics2.name = "graphics2";
      
             _this.graphics2.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics2 "+target.name);
                if(target.name == "graphics2")
                    {
                          _this.t2 = _this.add.sprite(475,94,'sg24_1_4_dot');
                         _this.group4.add(_this.t2);
                        _this.sg24_1_4_line2.visible = true; 
                         _this.graphics1.inputEnabled = false;
                        _this.graphics3.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                      //  _this.addNumberPad();
                    
                    }
              },this)
        
            _this.sg24_1_4_line3 = _this.add.sprite(468,87,'sg24_1_4_line3');
            _this.sg24_1_4_line3.visible = false;
        
            _this.graphics3 = _this.add.graphics(100, 123);
           _this.graphics3.lineStyle(0);
           _this.graphics3.beginFill(0xFF0000, 0.5);
           _this.graphics3.drawCircle(383,50,50);
           _this.graphics3.endFill();
           _this.graphics3.alpha = 0;
           _this.graphics3.name = "graphics3";
         
             _this.graphics3.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics3 "+target.name);
                if(target.name == "graphics3")
                    {
                          _this.t3 = _this.add.sprite(475,161,'sg24_1_4_dot');
                         _this.group4.add(_this.t3);
                        _this.sg24_1_4_line3.visible = true; 
                        _this.graphics4.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
    
                
          
            _this.line4 = _this.add.sprite(468,155,'sg24_1_4_line3');
           _this.line4.visible = false;
            _this.graphics4 = _this.add.graphics(100, 191);
           _this.graphics4.lineStyle(0);
           _this.graphics4.beginFill(0xFF0000, 0.5);
           _this.graphics4.drawCircle(384,50,50);
           _this.graphics4.endFill();
           _this.graphics4.alpha = 0;
          _this.graphics4.name = "graphics4";
         
             _this.graphics4.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics4"+target.name);
                if(target.name == "graphics4")
                    {
                          _this.t4 = _this.add.sprite(475,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t4);
                        _this.line4.visible = true; 
                        _this.graphics5.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
                
          
          _this.line5 = _this.add.sprite(468,222,'sg24_1_4_line2');
          _this.line5.visible = false;
            _this.graphics5 = _this.add.graphics(100, 191);
           _this.graphics5.lineStyle(0);
           _this.graphics5.beginFill(0xFF0000, 0.5);
           _this.graphics5.drawCircle(452,50,50);
           _this.graphics5.endFill();
           _this.graphics5.alpha = 0;
          _this.graphics5.name = "graphics5";
        
             _this.graphics5.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics5 "+target.name);
                if(target.name == "graphics5")
                    {
                          _this.t5 = _this.add.sprite(542,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t5);
                        _this.line5.visible = true; 
                        _this.graphics6.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line6 = _this.add.sprite(536,222,'sg24_1_4_line2');
           _this.line6.visible = false;
            _this.graphics6 = _this.add.graphics(100, 191);
           _this.graphics6.lineStyle(0);
           _this.graphics6.beginFill(0xFF0000, 0.5);
           _this.graphics6.drawCircle(520,50,50);
           _this.graphics6.endFill();
          _this.graphics6.alpha = 0;
          _this.graphics6.name = "graphics6";
        
             _this.graphics6.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics6 "+target.name);
                if(target.name == "graphics6")
                    {
                          _this.t6 = _this.add.sprite(612,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t6);
                        _this.line6.visible = true; 
                        _this.graphics7.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line7 = _this.add.sprite(604,222,'sg24_1_4_line3');
            _this.line7.visible = false;
            _this.graphics7 = _this.add.graphics(100, 259);
           _this.graphics7.lineStyle(0);
           _this.graphics7.beginFill(0xFF0000, 0.5);
           _this.graphics7.drawCircle(520,50,50);
           _this.graphics7.endFill();
          _this.graphics7.alpha = 0;
          _this.graphics7.name = "graphics7";
         
             _this.graphics7.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics7 "+target.name);
                if(target.name == "graphics7")
                    {
                          _this.t7 = _this.add.sprite(612,295,'sg24_1_4_dot');
                         _this.group4.add(_this.t7);
                        _this.line7.visible = true; 
                        _this.graphics8.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line8 = _this.add.sprite(604,290,'sg24_1_4_line3');
            _this.line8.visible = false;
            _this.graphics8 = _this.add.graphics(100, 325);
           _this.graphics8.lineStyle(0);
           _this.graphics8.beginFill(0xFF0000, 0.5);
           _this.graphics8.drawCircle(520,50,50);
           _this.graphics8.endFill();
            _this.graphics8.alpha = 0;
          _this.graphics8.name = "graphics8";
        
             _this.graphics8.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics8 "+target.name);
                if(target.name == "graphics8")
                    {
                          _this.t8 = _this.add.sprite(612,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t8);
                        _this.line8.visible = true; 
                        _this.graphics9.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line9 = _this.add.sprite(538,356,'sg24_1_4_line2');
               _this.line9.visible = false;
                _this.graphics9 = _this.add.graphics(100, 325);
               _this.graphics9.lineStyle(0);
               _this.graphics9.beginFill(0xFF0000, 0.5);
               _this.graphics9.drawCircle(452,50,50);
               _this.graphics9.endFill();
                _this.graphics9.alpha = 0;
          _this.graphics9.name = "graphics9";
       
             _this.graphics9.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics9 "+target.name);
                if(target.name == "graphics9")
                    {
                          _this.t9 = _this.add.sprite(542,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t9);
                        _this.line9.visible = true; 
                        _this.graphics10.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line10 = _this.add.sprite(470,356,'sg24_1_4_line2');
              _this.line10.visible = false;
               _this.graphics10 = _this.add.graphics(100, 325);
               _this.graphics10.lineStyle(0);
               _this.graphics10.beginFill(0xFF0000, 0.5);
               _this.graphics10.drawCircle(384,50,50);
               _this.graphics10.endFill();
                _this.graphics10.alpha = 0;
          _this.graphics10.name = "graphics10";
          
             _this.graphics10.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics10 "+target.name);
                if(target.name == "graphics10")
                    {
                          _this.t10 = _this.add.sprite(475,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t10);
                        _this.line10.visible = true; 
                        _this.graphics11.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
            _this.line11 = _this.add.sprite(468,356,'sg24_1_4_line3');
             _this.line11.visible = false;
                _this.graphics11 = _this.add.graphics(100, 393);
               _this.graphics11.lineStyle(0);
               _this.graphics11.beginFill(0xFF0000, 0.5);
               _this.graphics11.drawCircle(384,50,50);
               _this.graphics11.endFill();
               _this.graphics11.alpha = 0;
          _this.graphics11.name = "graphics11";
         
             _this.graphics11.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics11 "+target.name);
                if(target.name == "graphics11")
                    {
                          _this.t11 = _this.add.sprite(475,429,'sg24_1_4_dot');
                         _this.group4.add(_this.t11);
                        _this.line11.visible = true; 
                        _this.graphics12.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           
            _this.line12 = _this.add.sprite(403,424,'sg24_1_4_line2');
              _this.line12.visible = false;
              _this.graphics12 = _this.add.graphics(100, 393);
               _this.graphics12.lineStyle(0);
               _this.graphics12.beginFill(0xFF0000, 0.5);
               _this.graphics12.drawCircle(316,50,50);
               _this.graphics12.endFill();
                _this.graphics12.alpha = 0;
          _this.graphics12.name = "graphics12";
             _this.graphics12.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics12 "+target.name);
                if(target.name == "graphics12")
                    {
                          _this.t12 = _this.add.sprite(407,429,'sg24_1_4_dot');
                         _this.group4.add(_this.t12);
                        _this.line12.visible = true; 
                        _this.graphics13.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          
             _this.line13 = _this.add.sprite(335,424,'sg24_1_4_line2');
             _this.line13.visible = false;
               _this.graphics13 = _this.add.graphics(100, 393);
               _this.graphics13.lineStyle(0);
               _this.graphics13.beginFill(0xFF0000, 0.5);
               _this.graphics13.drawCircle(248,50,50);
               _this.graphics13.endFill();
                 _this.graphics13.alpha = 0;
          _this.graphics13.name = "graphics13";
     
             _this.graphics13.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics13 "+target.name);
                if(target.name == "graphics13")
                    {
                          _this.t13 = _this.add.sprite(340,429,'sg24_1_4_dot');
                         _this.group4.add(_this.t13);
                        _this.line13.visible = true; 
                        _this.graphics14.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line14 = _this.add.sprite(332,359,'sg24_1_4_line3');
              _this.line14.visible = false;
                 _this.graphics14 = _this.add.graphics(100, 325);
               _this.graphics14.lineStyle(0);
               _this.graphics14.beginFill(0xFF0000, 0.5);
               _this.graphics14.drawCircle(248,50,50);
               _this.graphics14.endFill();
                 _this.graphics14.alpha = 0;
          _this.graphics14.name = "graphics14";
        
             _this.graphics14.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics14 "+target.name);
                if(target.name == "graphics14")
                    {
                          _this.t14 = _this.add.sprite(340,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t14);
                        _this.line14.visible = true; 
                        _this.graphics15.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
        
             _this.line15 = _this.add.sprite(267,356,'sg24_1_4_line2');
              _this.line15.visible = false;
                _this.graphics15 = _this.add.graphics(100, 325);
               _this.graphics15.lineStyle(0);
               _this.graphics15.beginFill(0xFF0000, 0.5);
               _this.graphics15.drawCircle(180,50,50);
               _this.graphics15.endFill();
                 _this.graphics15.alpha = 0;
          _this.graphics15.name = "graphics15";
       
             _this.graphics15.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics15 "+target.name);
                if(target.name == "graphics15")
                    {
                          _this.t15 = _this.add.sprite(273,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t15);
                        _this.line15.visible = true; 
                        _this.graphics16.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
              _this.line16 = _this.add.sprite(199,356,'sg24_1_4_line2');
              _this.line16.visible = false;
                _this.graphics16 = _this.add.graphics(100, 325);
               _this.graphics16.lineStyle(0);
               _this.graphics16.beginFill(0xFF0000, 0.5);
               _this.graphics16.drawCircle(112,50,50);
               _this.graphics16.endFill();
                 _this.graphics16.alpha = 0;
          _this.graphics16.name = "graphics16";
       
             _this.graphics16.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics16 "+target.name);
                if(target.name == "graphics16")
                    {
                          _this.t16 = _this.add.sprite(203,362,'sg24_1_4_dot');
                         _this.group4.add(_this.t16);
                        _this.line16.visible = true; 
                        _this.graphics17.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
               _this.line17 = _this.add.sprite(195,291,'sg24_1_4_line3');
               _this.line17.visible = false;
                _this.graphics17 = _this.add.graphics(100, 257);
               _this.graphics17.lineStyle(0);
               _this.graphics17.beginFill(0xFF0000, 0.5);
               _this.graphics17.drawCircle(112,50,50);
               _this.graphics17.endFill();
                 _this.graphics17.alpha = 0;
          _this.graphics17.name = "graphics17";
      
             _this.graphics17.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics17 "+target.name);
                if(target.name == "graphics17")
                    {
                          _this.t17 = _this.add.sprite(203,295,'sg24_1_4_dot');
                         _this.group4.add(_this.t17);
                        _this.line17.visible = true; 
                        _this.graphics18.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line18 = _this.add.sprite(195,223,'sg24_1_4_line3');
              _this.line18.visible = false;
                _this.graphics18 = _this.add.graphics(100, 189);
               _this.graphics18.lineStyle(0);
               _this.graphics18.beginFill(0xFF0000, 0.5);
               _this.graphics18.drawCircle(112,50,50);
               _this.graphics18.endFill();
                 _this.graphics18.alpha = 0;
          _this.graphics18.name = "graphics18";
     
             _this.graphics18.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics18 "+target.name);
                if(target.name == "graphics18")
                    {
                          _this.t18 = _this.add.sprite(203,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t18);
                        _this.line18.visible = true; 
                        _this.graphics19.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
               _this.line19 = _this.add.sprite(195,221,'sg24_1_4_line2');
               _this.line19.visible = false;
                _this.graphics19 = _this.add.graphics(100, 189);
               _this.graphics19.lineStyle(0);
               _this.graphics19.beginFill(0xFF0000, 0.5);
               _this.graphics19.drawCircle(180,50,50);
               _this.graphics19.endFill();
                 _this.graphics19.alpha = 0;
          _this.graphics19.name = "graphics19";
        
             _this.graphics19.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics19 "+target.name);
                if(target.name == "graphics19")
                    {
                          _this.t19 = _this.add.sprite(272,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t19);
                        _this.line19.visible = true; 
                        _this.graphics20.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line20 = _this.add.sprite(263,221,'sg24_1_4_line2');
              _this.line20.visible = false;
                _this.graphics20 = _this.add.graphics(100, 189);
               _this.graphics20.lineStyle(0);
               _this.graphics20.beginFill(0xFF0000, 0.5);
               _this.graphics20.drawCircle(248,50,50);
               _this.graphics20.endFill();
                 _this.graphics20.alpha = 0;
          _this.graphics20.name = "graphics20";
      
             _this.graphics20.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics20 "+target.name);
                if(target.name == "graphics20")
                    {
                          _this.t20 = _this.add.sprite(340,228,'sg24_1_4_dot');
                         _this.group4.add(_this.t20);
                        _this.line20.visible = true; 
                        _this.graphics21.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          _this.line21 = _this.add.sprite(332,156,'sg24_1_4_line3');
              _this.line21.visible = false;
               _this.graphics21 = _this.add.graphics(100, 121);
               _this.graphics21.lineStyle(0);
               _this.graphics21.beginFill(0xFF0000, 0.5);
               _this.graphics21.drawCircle(248,50,50);
               _this.graphics21.endFill();
                _this.graphics21.alpha = 0;
          _this.graphics21.name = "graphics21";
         
             _this.graphics21.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics21 "+target.name);
                if(target.name == "graphics21")
                    {
                          _this.t21 = _this.add.sprite(340,161,'sg24_1_4_dot');
                         _this.group4.add(_this.t21);
                        _this.line21.visible = true; 
                        _this.graphics22.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line22 = _this.add.sprite(332,88,'sg24_1_4_line3');
              _this.line22.visible = false;
               _this.graphics22 = _this.add.graphics(100, 54);
               _this.graphics22.lineStyle(0);
               _this.graphics22.beginFill(0xFF0000, 0.5);
               _this.graphics22.drawCircle(248,50,50);
               _this.graphics22.endFill();
                _this.graphics22.alpha = 0;
          _this.graphics22.name = "graphics22";
         
             _this.graphics22.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics22 "+target.name);
                if(target.name == "graphics22")
                    {
                        _this.line22.visible = true; 
                       
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                        _this.addNumberPad();
                    
                    }
              },this)
         
  
         
         _this.rightAns = 22;
         
         
          _this.group2.add(_this.line1);
           _this.group2.add(_this.sg24_1_4_line2);
          _this.group2.add(_this.sg24_1_4_line3);
          _this.group2.add(_this.line4);
          _this.group2.add(_this.line5);
          _this.group2.add(_this.line6);
          _this.group2.add(_this.line7);
          _this.group2.add(_this.line8);
          _this.group2.add(_this.line9);
          _this.group2.add(_this.line10);
          _this.group2.add(_this.line11);
          _this.group2.add(_this.line12);
          _this.group2.add(_this.line13);
          _this.group2.add(_this.line14);
          _this.group2.add(_this.line15);
          _this.group2.add(_this.line16);
          _this.group2.add(_this.line17);
           _this.group2.add(_this.line18);
          _this.group2.add(_this.line19);
          _this.group2.add(_this.line20);
          _this.group2.add(_this.line21);
          _this.group2.add(_this.line22);
         
        
        _this.group3.add(_this.graphics1);
        _this.group3.add(_this.graphics2);
        _this.group3.add(_this.graphics3);
        _this.group3.add(_this.graphics4);
        _this.group3.add(_this.graphics5);
        _this.group3.add(_this.graphics6);
        _this.group3.add(_this.graphics7);
        _this.group3.add(_this.graphics8);
        _this.group3.add(_this.graphics9);
        _this.group3.add(_this.graphics10);
        _this.group3.add(_this.graphics11);
        _this.group3.add(_this.graphics12);
        _this.group3.add(_this.graphics13);
        _this.group3.add(_this.graphics14);
        _this.group3.add(_this.graphics15);
        _this.group3.add(_this.graphics16);
        _this.group3.add(_this.graphics17);
        _this.group3.add(_this.graphics18);
        _this.group3.add(_this.graphics19);
        _this.group3.add(_this.graphics20);
        _this.group3.add(_this.graphics21);
        _this.group3.add(_this.graphics22);
          
      },
         

      question7:function(){
         _this.Question = 7;
          _this.no1++;
         console.log("7");
          
         
        
           _this.sprite1 = _this.add.sprite(70, 100, 'sg24_1_4_symbol');
           _this.dotline = _this.add.sprite(141, 101, 'sg24_1_4_dotline7');
           _this.sprite3 = _this.add.sprite(270,95,'sg24_1_4_dot');
           _this.box = _this.add.sprite(840,240,'sg16_2_4_box');
          
           _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
             _this.group4 = _this.add.group();
        
              _this.group1.add(_this.sprite1);
              _this.group1.add(_this.dotline);  
              _this.group1.add(_this.sprite3); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
            if( _this.soundPlayed == false)
                 {
                  _this.getVoice();
                   _this.soundPlayed = true;     
                 }
           _this.line1 = _this.add.sprite(264,87,'sg24_1_4_line2');
           _this.line1.visible = false; 
           _this.graphics1 = _this.add.graphics(100, 55);
                
           _this.graphics1.lineStyle(0);
           _this.graphics1.beginFill(0xFF0000, 0.5);
           _this.graphics1.drawCircle(248,50,50);
           _this.graphics1.endFill();
           _this.graphics1.alpha = 0;
           _this.graphics1.name = "graphics1";
           _this.graphics1.inputEnabled = true;
          
             _this.graphics1.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics1 "+target.name);
                if(target.name == "graphics1")
                    {
                        _this.t1 = _this.add.sprite(338,95,'sg24_1_4_dot');
                        _this.group4.add(_this.t1);
                        _this.line1.visible = true; 
                        _this.graphics2.inputEnabled = true;
                        //_this.sprite3.x += 68;
                       // _this.addNumberPad();
                         target.events.onInputDown.removeAll();
                    }
              },this)
        
        
            _this.sg24_1_4_line2 = _this.add.sprite(332,87,'sg24_1_4_line2');
            _this.sg24_1_4_line2.visible = false;
            _this.graphics2 = _this.add.graphics(100, 55);
                
           _this.graphics2.lineStyle(0);
           _this.graphics2.beginFill(0xFF0000, 0.5);
           _this.graphics2.drawCircle(316,50,50);
           _this.graphics2.endFill();
           _this.graphics2.alpha = 0;
           _this.graphics2.name = "graphics2";
      
             _this.graphics2.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics2 "+target.name);
                if(target.name == "graphics2")
                    {
                        _this.t2 = _this.add.sprite(405,95,'sg24_1_4_dot');
                        _this.group4.add(_this.t2);
                        _this.sg24_1_4_line2.visible = true; 
                         _this.graphics1.inputEnabled = false;
                        _this.graphics3.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                      // _this.addNumberPad();
                    
                    }
              },this)
        
            _this.sg24_1_4_line3 = _this.add.sprite(400,87,'sg24_1_4_line2');
            _this.sg24_1_4_line3.visible = false;
        
            _this.graphics3 = _this.add.graphics(100, 55);
           _this.graphics3.lineStyle(0);
           _this.graphics3.beginFill(0xFF0000, 0.5);
           _this.graphics3.drawCircle(383,50,50);
           _this.graphics3.endFill();
           _this.graphics3.alpha = 0;
           _this.graphics3.name = "graphics3";
         
             _this.graphics3.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics3 "+target.name);
                if(target.name == "graphics3")
                    {
                        _this.t3 = _this.add.sprite(473,95,'sg24_1_4_dot');
                        _this.group4.add(_this.t3);
                        _this.sg24_1_4_line3.visible = true; 
                        _this.graphics4.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
    
                
          
            _this.line4 = _this.add.sprite(468,87,'sg24_1_4_line2');
           _this.line4.visible = false;
            _this.graphics4 = _this.add.graphics(100, 55);
           _this.graphics4.lineStyle(0);
           _this.graphics4.beginFill(0xFF0000, 0.5);
           _this.graphics4.drawCircle(452,50,50);
           _this.graphics4.endFill();
           _this.graphics4.alpha = 0;
          _this.graphics4.name = "graphics4";
         
             _this.graphics4.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics4"+target.name);
                if(target.name == "graphics4")
                    {
                        _this.t4 = _this.add.sprite(541,95,'sg24_1_4_dot');
                        _this.group4.add(_this.t4);
                        _this.line4.visible = true; 
                        _this.graphics5.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
                
          
          _this.line5 = _this.add.sprite(536,87,'sg24_1_4_line3');
          _this.line5.visible = false;
            _this.graphics5 = _this.add.graphics(100, 123);
           _this.graphics5.lineStyle(0);
           _this.graphics5.beginFill(0xFF0000, 0.5);
           _this.graphics5.drawCircle(452,50,50);
           _this.graphics5.endFill();
           _this.graphics5.alpha = 0;
          _this.graphics5.name = "graphics5";
        
             _this.graphics5.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics5 "+target.name);
                if(target.name == "graphics5")
                    {
                        _this.t1 = _this.add.sprite(543,162,'sg24_1_4_dot');
                        _this.group4.add(_this.t1);
                        _this.line5.visible = true; 
                        _this.graphics6.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line6 = _this.add.sprite(536,155,'sg24_1_4_line2');
           _this.line6.visible = false;
            _this.graphics6 = _this.add.graphics(100, 123);
           _this.graphics6.lineStyle(0);
           _this.graphics6.beginFill(0xFF0000, 0.5);
           _this.graphics6.drawCircle(520,50,50);
           _this.graphics6.endFill();
          _this.graphics6.alpha = 0;
          _this.graphics6.name = "graphics6";
        
             _this.graphics6.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics6 "+target.name);
                if(target.name == "graphics6")
                    {
                        _this.t6 = _this.add.sprite(610,162,'sg24_1_4_dot');
                        _this.group4.add(_this.t6);
                        _this.line6.visible = true; 
                        _this.graphics7.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line7 = _this.add.sprite(604,155,'sg24_1_4_line3');
            _this.line7.visible = false;
            _this.graphics7 = _this.add.graphics(100, 191);
           _this.graphics7.lineStyle(0);
           _this.graphics7.beginFill(0xFF0000, 0.5);
           _this.graphics7.drawCircle(520,50,50);
           _this.graphics7.endFill();
          _this.graphics7.alpha = 0;
          _this.graphics7.name = "graphics7";
         
             _this.graphics7.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics7 "+target.name);
                if(target.name == "graphics7")
                    {
                        _this.t7 = _this.add.sprite(610,229,'sg24_1_4_dot');
                        _this.group4.add(_this.t7);
                        _this.line7.visible = true; 
                        _this.graphics8.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line8 = _this.add.sprite(604,221,'sg24_1_4_line2');
            _this.line8.visible = false;
            _this.graphics8 = _this.add.graphics(100, 191);
           _this.graphics8.lineStyle(0);
           _this.graphics8.beginFill(0xFF0000, 0.5);
           _this.graphics8.drawCircle(588,50,50);
           _this.graphics8.endFill();
            _this.graphics8.alpha = 0;
          _this.graphics8.name = "graphics8";
        
             _this.graphics8.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics8 "+target.name);
                if(target.name == "graphics8")
                    {
                        _this.t8 = _this.add.sprite(679,229,'sg24_1_4_dot');
                        _this.group4.add(_this.t8);
                        _this.line8.visible = true; 
                        _this.graphics9.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line9 = _this.add.sprite(672,221,'sg24_1_4_line3');
               _this.line9.visible = false;
                _this.graphics9 = _this.add.graphics(100, 259);
               _this.graphics9.lineStyle(0);
               _this.graphics9.beginFill(0xFF0000, 0.5);
               _this.graphics9.drawCircle(588,50,50);
               _this.graphics9.endFill();
                _this.graphics9.alpha = 0;
          _this.graphics9.name = "graphics9";
       
             _this.graphics9.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics9 "+target.name);
                if(target.name == "graphics9")
                    {
                        _this.t9 = _this.add.sprite(679,296,'sg24_1_4_dot');
                        _this.group4.add(_this.t9);
                        _this.line9.visible = true; 
                        _this.graphics10.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line10 = _this.add.sprite(606,289,'sg24_1_4_line2');
              _this.line10.visible = false;
               _this.graphics10 = _this.add.graphics(100, 259);
               _this.graphics10.lineStyle(0);
               _this.graphics10.beginFill(0xFF0000, 0.5);
               _this.graphics10.drawCircle(520,50,50);
               _this.graphics10.endFill();
                _this.graphics10.alpha = 0;
          _this.graphics10.name = "graphics10";
          
             _this.graphics10.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics10 "+target.name);
                if(target.name == "graphics10")
                    {
                        _this.t10 = _this.add.sprite(612,296,'sg24_1_4_dot');
                        _this.group4.add(_this.t10);
                        _this.line10.visible = true; 
                        _this.graphics11.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
            _this.line11 = _this.add.sprite(604,289,'sg24_1_4_line3');
             _this.line11.visible = false;
                _this.graphics11 = _this.add.graphics(100, 325);
               _this.graphics11.lineStyle(0);
               _this.graphics11.beginFill(0xFF0000, 0.5);
               _this.graphics11.drawCircle(520,50,50);
               _this.graphics11.endFill();
               _this.graphics11.alpha = 0;
          _this.graphics11.name = "graphics11";
         
             _this.graphics11.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics11 "+target.name);
                if(target.name == "graphics11")
                    {
                        _this.t11 = _this.add.sprite(612,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t11);
                        _this.line11.visible = true; 
                        _this.graphics12.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           
            _this.line12 = _this.add.sprite(538,357,'sg24_1_4_line2');
              _this.line12.visible = false;
              _this.graphics12 = _this.add.graphics(100, 325);
               _this.graphics12.lineStyle(0);
               _this.graphics12.beginFill(0xFF0000, 0.5);
               _this.graphics12.drawCircle(452,50,50);
               _this.graphics12.endFill();
               _this.graphics12.alpha = 0;
          _this.graphics12.name = "graphics12";
             _this.graphics12.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics12 "+target.name);
                if(target.name == "graphics12")
                    {
                       _this.t12 = _this.add.sprite(545,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t12);   
                        _this.line12.visible = true; 
                        _this.graphics13.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          
             _this.line13 = _this.add.sprite(536,357,'sg24_1_4_line3');
             _this.line13.visible = false;
               _this.graphics13 = _this.add.graphics(100, 393);
               _this.graphics13.lineStyle(0);
               _this.graphics13.beginFill(0xFF0000, 0.5);
               _this.graphics13.drawCircle(452,50,50);
               _this.graphics13.endFill();
                 _this.graphics13.alpha = 0;
          _this.graphics13.name = "graphics13";
     
             _this.graphics13.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics13 "+target.name);
                if(target.name == "graphics13")
                    {
                         _this.t11 = _this.add.sprite(543,430,'sg24_1_4_dot');
                        _this.group4.add(_this.t11);
                        _this.line13.visible = true; 
                        _this.graphics14.inputEnabled = true;
                       // _this.sprite3.y += 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
            _this.line14 = _this.add.sprite(470,424,'sg24_1_4_line2');
              _this.line14.visible = false;
                 _this.graphics14 = _this.add.graphics(100, 393);
               _this.graphics14.lineStyle(0);
               _this.graphics14.beginFill(0xFF0000, 0.5);
               _this.graphics14.drawCircle(384,50,50);
               _this.graphics14.endFill();
                 _this.graphics14.alpha = 0;
          _this.graphics14.name = "graphics14";
        
             _this.graphics14.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics14 "+target.name);
                if(target.name == "graphics14")
                    {
                         _this.t12 = _this.add.sprite(475,430,'sg24_1_4_dot');
                        _this.group4.add(_this.t12);
                        _this.line14.visible = true; 
                        _this.graphics15.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
        
             _this.line15 = _this.add.sprite(402,424,'sg24_1_4_line2');
             _this.line15.visible = false;
                _this.graphics15 = _this.add.graphics(100, 393);
               _this.graphics15.lineStyle(0);
               _this.graphics15.beginFill(0xFF0000, 0.5);
               _this.graphics15.drawCircle(316,50,50);
               _this.graphics15.endFill();
                 _this.graphics15.alpha = 0;
          _this.graphics15.name = "graphics15";
       
             _this.graphics15.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics15 "+target.name);
                if(target.name == "graphics15")
                    {
                         _this.t15 = _this.add.sprite(408,430,'sg24_1_4_dot');
                        _this.group4.add(_this.t15);
                        _this.line15.visible = true; 
                        _this.graphics16.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
              _this.line16 = _this.add.sprite(334,424,'sg24_1_4_line2');
              _this.line16.visible = false;
                _this.graphics16 = _this.add.graphics(100, 393);
               _this.graphics16.lineStyle(0);
               _this.graphics16.beginFill(0xFF0000, 0.5);
               _this.graphics16.drawCircle(248,50,50);
               _this.graphics16.endFill();
                 _this.graphics16.alpha = 0;
          _this.graphics16.name = "graphics16";
       
             _this.graphics16.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics16 "+target.name);
                if(target.name == "graphics16")
                    {
                          _this.t16 = _this.add.sprite(339,430,'sg24_1_4_dot');
                        _this.group4.add(_this.t16);
                        _this.line16.visible = true; 
                        _this.graphics17.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
               _this.line17 = _this.add.sprite(266,424,'sg24_1_4_line2');
               _this.line17.visible = false;
                _this.graphics17 = _this.add.graphics(100, 393);
               _this.graphics17.lineStyle(0);
               _this.graphics17.beginFill(0xFF0000, 0.5);
               _this.graphics17.drawCircle(180,50,50);
               _this.graphics17.endFill();
                _this.graphics17.alpha = 0;
          _this.graphics17.name = "graphics17";
      
             _this.graphics17.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics17 "+target.name);
                if(target.name == "graphics17")
                    {
                          _this.t17 = _this.add.sprite(270,430,'sg24_1_4_dot');
                        _this.group4.add(_this.t17);
                        _this.line17.visible = true; 
                        _this.graphics18.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
          
              _this.line18 = _this.add.sprite(263,359,'sg24_1_4_line3');
              _this.line18.visible = false;
                _this.graphics18 = _this.add.graphics(100, 325);
               _this.graphics18.lineStyle(0);
               _this.graphics18.beginFill(0xFF0000, 0.5);
               _this.graphics18.drawCircle(180,50,50);
               _this.graphics18.endFill();
                 _this.graphics18.alpha = 0;
          _this.graphics18.name = "graphics18";
     
             _this.graphics18.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics18 "+target.name);
                if(target.name == "graphics18")
                    {
                           _this.t18 = _this.add.sprite(270,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t18);
                        _this.line18.visible = true; 
                        _this.graphics19.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
               _this.line19 = _this.add.sprite(196,356,'sg24_1_4_line2');
               _this.line19.visible = false;
                _this.graphics19 = _this.add.graphics(100, 325);
               _this.graphics19.lineStyle(0);
               _this.graphics19.beginFill(0xFF0000, 0.5);
               _this.graphics19.drawCircle(112,50,50);
               _this.graphics19.endFill();
                 _this.graphics19.alpha = 0;
          _this.graphics19.name = "graphics19";
        
             _this.graphics19.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics19 "+target.name);
                if(target.name == "graphics19")
                    {
                           _this.t19 = _this.add.sprite(203,363,'sg24_1_4_dot');
                        _this.group4.add(_this.t19);
                        _this.line19.visible = true; 
                        _this.graphics20.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line20 = _this.add.sprite(194,290,'sg24_1_4_line3');
              _this.line20.visible = false;
                _this.graphics20 = _this.add.graphics(100, 257);
               _this.graphics20.lineStyle(0);
               _this.graphics20.beginFill(0xFF0000, 0.5);
               _this.graphics20.drawCircle(112,50,50);
               _this.graphics20.endFill();
               _this.graphics20.alpha = 0;
          _this.graphics20.name = "graphics20";
      
             _this.graphics20.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics20 "+target.name);
                if(target.name == "graphics20")
                    {
                         _this.t20 = _this.add.sprite(203,296,'sg24_1_4_dot');
                        _this.group4.add(_this.t20);
                        _this.line20.visible = true; 
                        _this.graphics21.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
          _this.line21 = _this.add.sprite(126,289,'sg24_1_4_line2');
              _this.line21.visible = false;
               _this.graphics21 = _this.add.graphics(100, 257);
               _this.graphics21.lineStyle(0);
               _this.graphics21.beginFill(0xFF0000, 0.5);
               _this.graphics21.drawCircle(43,50,50);
               _this.graphics21.endFill();
                _this.graphics21.alpha = 0;
          _this.graphics21.name = "graphics21";
         
             _this.graphics21.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics21 "+target.name);
                if(target.name == "graphics21")
                    {
                         _this.t21 = _this.add.sprite(134,296,'sg24_1_4_dot');
                        _this.group4.add(_this.t21);
                        _this.line21.visible = true; 
                        _this.graphics22.inputEnabled = true;
                        //_this.sprite3.x -= 68;
                         target.events.onInputDown.removeAll();
                       // _this.addNumberPad();
                    
                    }
              },this)
         
           _this.line22 = _this.add.sprite(126,221,'sg24_1_4_line3');
              _this.line22.visible = false;
               _this.graphics22 = _this.add.graphics(100, 189);
               _this.graphics22.lineStyle(0);
               _this.graphics22.beginFill(0xFF0000, 0.5);
               _this.graphics22.drawCircle(43,50,50);
               _this.graphics22.endFill();
               _this.graphics22.alpha = 0;
          _this.graphics22.name = "graphics22";
         
             _this.graphics22.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics22 "+target.name);
                if(target.name == "graphics22")
                    {
                         _this.t22 = _this.add.sprite(134,229,'sg24_1_4_dot');
                        _this.group4.add(_this.t22);
                        _this.line22.visible = true; 
                         _this.graphics23.inputEnabled = true;
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                      
                    
                    }
              },this)
             
               _this.line23 = _this.add.sprite(126,221,'sg24_1_4_line2');
              _this.line23.visible = false;
               _this.graphics23 = _this.add.graphics(100, 189);
               _this.graphics23.lineStyle(0);
               _this.graphics23.beginFill(0xFF0000, 0.5);
               _this.graphics23.drawCircle(112,50,50);
               _this.graphics23.endFill();
                _this.graphics23.alpha = 0;
          _this.graphics23.name = "graphics23";
         
             _this.graphics23.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics23 "+target.name);
                if(target.name == "graphics23")
                    {
                         _this.t23 = _this.add.sprite(203,229,'sg24_1_4_dot');
                        _this.group4.add(_this.t23);
                        _this.line23.visible = true; 
                       
                        //_this.sprite3.x += 68;
                          _this.graphics24.inputEnabled = true;
                         target.events.onInputDown.removeAll();
                       
                    
                    }
              },this)
         
               _this.line24 = _this.add.sprite(194,157,'sg24_1_4_line3');
              _this.line24.visible = false;
               _this.graphics24 = _this.add.graphics(100, 121);
               _this.graphics24.lineStyle(0);
               _this.graphics24.beginFill(0xFF0000, 0.5);
               _this.graphics24.drawCircle(112,50,50);
               _this.graphics24.endFill();
                 _this.graphics24.alpha = 0;
          _this.graphics24.name = "graphics24";
         
             _this.graphics24.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics24 "+target.name);
                if(target.name == "graphics24")
                    {
                         _this.t24 = _this.add.sprite(203,162,'sg24_1_4_dot');
                        _this.group4.add(_this.t24);
                        _this.line24.visible = true; 
                       
                       // _this.sprite3.y -= 68;
                          _this.graphics25.inputEnabled = true;
                         target.events.onInputDown.removeAll();
                        
                    
                    }
              },this)
         
               _this.line25 = _this.add.sprite(195,155,'sg24_1_4_line2');
              _this.line25.visible = false;
               _this.graphics25 = _this.add.graphics(100, 121);
               _this.graphics25.lineStyle(0);
               _this.graphics25.beginFill(0xFF0000, 0.5);
               _this.graphics25.drawCircle(180,50,50);
               _this.graphics25.endFill();
                 _this.graphics25.alpha = 0;
          _this.graphics25.name = "graphics25";
         
             _this.graphics25.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics25 "+target.name);
                if(target.name == "graphics25")
                    {
                         _this.t25 = _this.add.sprite(270,162,'sg24_1_4_dot');
                        _this.group4.add(_this.t25);
                        _this.line25.visible = true; 
                         _this.graphics26.inputEnabled = true;
                        //_this.sprite3.x += 68;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
         
               _this.line26 = _this.add.sprite(261,88,'sg24_1_4_line3');
              _this.line26.visible = false;
               _this.graphics26 = _this.add.graphics(100, 54);
               _this.graphics26.lineStyle(0);
               _this.graphics26.beginFill(0xFF0000, 0.5);
               _this.graphics26.drawCircle(180,50,50);
               _this.graphics26.endFill();
              _this.graphics26.alpha = 0;
          _this.graphics26.name = "graphics26";
         
             _this.graphics26.events.onInputDown.add(function(target)
              { 
                  _this.clickSound.play();
                 console.log("graphics26 "+target.name);
                if(target.name == "graphics26")
                    {
                        _this.line26.visible = true; 
                       
                       // _this.sprite3.y -= 68;
                         target.events.onInputDown.removeAll();
                        _this.addNumberPad();
                    
                    }
              },this)
         
        
         
         
  
         
         _this.rightAns = 26;
         
         
          _this.group2.add(_this.line1);
           _this.group2.add(_this.sg24_1_4_line2);
          _this.group2.add(_this.sg24_1_4_line3);
          _this.group2.add(_this.line4);
          _this.group2.add(_this.line5);
          _this.group2.add(_this.line6);
          _this.group2.add(_this.line7);
          _this.group2.add(_this.line8);
          _this.group2.add(_this.line9);
          _this.group2.add(_this.line10);
          _this.group2.add(_this.line11);
          _this.group2.add(_this.line12);
          _this.group2.add(_this.line13);
          _this.group2.add(_this.line14);
          _this.group2.add(_this.line15);
          _this.group2.add(_this.line16);
          _this.group2.add(_this.line17);
           _this.group2.add(_this.line18);
          _this.group2.add(_this.line19);
          _this.group2.add(_this.line20);
          _this.group2.add(_this.line21);
          _this.group2.add(_this.line22);
           _this.group2.add(_this.line23);
          _this.group2.add(_this.line24);
          _this.group2.add(_this.line25);
          _this.group2.add(_this.line26);
          
         
        
        _this.group3.add(_this.graphics1);
        _this.group3.add(_this.graphics2);
        _this.group3.add(_this.graphics3);
        _this.group3.add(_this.graphics4);
        _this.group3.add(_this.graphics5);
        _this.group3.add(_this.graphics6);
        _this.group3.add(_this.graphics7);
        _this.group3.add(_this.graphics8);
        _this.group3.add(_this.graphics9);
        _this.group3.add(_this.graphics10);
        _this.group3.add(_this.graphics11);
        _this.group3.add(_this.graphics12);
        _this.group3.add(_this.graphics13);
        _this.group3.add(_this.graphics14);
        _this.group3.add(_this.graphics15);
        _this.group3.add(_this.graphics16);
        _this.group3.add(_this.graphics17);
        _this.group3.add(_this.graphics18);
        _this.group3.add(_this.graphics19);
        _this.group3.add(_this.graphics20);
        _this.group3.add(_this.graphics21);
        _this.group3.add(_this.graphics22);
        _this.group3.add(_this.graphics23);
        _this.group3.add(_this.graphics24);
        _this.group3.add(_this.graphics25);
        _this.group3.add(_this.graphics26);
      },
       
    
    question8:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("first");
        
         
         //_this.bounds = new Phaser.Rectangle(65, 52, 775, 475);
         
        // _this.group2=_this.add.group();
           _this.sprite1 = _this.add.sprite(70, 100, 'sg24_1_4_img2');
           _this.box = _this.add.sprite(800,240,'sg16_2_4_box');
          _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
            if( _this.soundPlayed2 == false)
                 {
                  _this.getVoice();
                   _this.soundPlayed2 = true;     
                 }
           _this.foot1 = _this.add.sprite(77,89,'sg24_1_4_footstep1');
           _this.foot1.frame = 0;
           _this.foot1.name = "foot1";
           _this.foot1.inputEnabled = true;
           _this.foot1.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot1 "+target.name);
                if(target.name == "foot1")
                    {
                          _this.foot1.frame = 1;
                          _this.foot2.inputEnabled = true;
                          _this.foot2.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this) 
           
           _this.foot2 = _this.add.sprite(145,91,'sg24_1_4_footstep2');
           _this.foot2.alpha = 0;
        
           _this.foot2.name = "foot2";
           _this.foot2.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot2 "+target.name);
                if(target.name == "foot2")
                    {
                          _this.foot2.frame = 1;
                           _this.foot1.inputEnabled = true;
                          _this.foot3.inputEnabled = true;
                          _this.foot3.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot3 = _this.add.sprite(213,89,'sg24_1_4_footstep1');
           _this.foot3.alpha = 0;
           
           _this.foot3.name = "foot3";
           _this.foot3.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot3 "+target.name);
                if(target.name == "foot3")
                    {
                          _this.foot3.frame = 1;
                          _this.foot4.inputEnabled = true;
                          _this.foot4.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot4 = _this.add.sprite(281,91,'sg24_1_4_footstep2');
           _this.foot4.alpha = 0;
           
           _this.foot4.name = "foot4";
           _this.foot4.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot4 "+target.name);
                if(target.name == "foot4")
                    {
                          _this.foot4.frame = 1;
                          _this.foot5.inputEnabled = true;
                          _this.foot5.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot5 = _this.add.sprite(349,89,'sg24_1_4_footstep1');
           _this.foot5.alpha = 0;
          
           _this.foot5.name = "foot5";
           _this.foot5.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot5 "+target.name);
                if(target.name == "foot5")
                    {
                          _this.foot5.frame = 1;
                          _this.foot6.inputEnabled = true;
                          _this.foot6.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot6 = _this.add.sprite(417,91,'sg24_1_4_footstep2');
           _this.foot6.alpha = 0;
          
           _this.foot6.name = "foot6";
           _this.foot6.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot6 "+target.name);
                if(target.name == "foot6")
                    {
                          _this.foot6.frame = 1;
                          _this.foot7.inputEnabled = true;
                          _this.foot7.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot7 = _this.add.sprite(485,89,'sg24_1_4_footstep1');
           _this.foot7.alpha = 0;
          
           _this.foot7.name = "foot7";
           _this.foot7.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot7 "+target.name);
                if(target.name == "foot7")
                    {
                          _this.foot7.frame = 1;
                          _this.foot8.inputEnabled = true;
                           _this.foot8.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot8 = _this.add.sprite(553,91,'sg24_1_4_footstep2');
           _this.foot8.alpha = 0;
          
           _this.foot8.name = "foot8";
           _this.foot8.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot8 "+target.name);
                if(target.name == "foot8")
                    {
                          _this.foot8.frame = 1;
                          _this.foot9.inputEnabled = true;
                          _this.foot9.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot9 = _this.add.sprite(621,89,'sg24_1_4_footstep1');
           _this.foot9.alpha = 0;
          
           _this.foot9.name = "foot9";
           _this.foot9.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot9 "+target.name);
                if(target.name == "foot9")
                    {
                          _this.foot9.frame = 1;
                          _this.foot10.inputEnabled = true;
                          _this.foot10.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
            _this.foot10 = _this.add.sprite(689,91,'sg24_1_4_footstep2');
           _this.foot10.alpha = 0;
           
           _this.foot10.name = "foot10";
           _this.foot10.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot10 "+target.name);
                if(target.name == "foot10")
                    {
                          _this.foot10.frame = 1;
                         _this.foot11.inputEnabled = true;
                          _this.foot11.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
             _this.foot11 = _this.add.sprite(735,105,'sg24_1_4_footstep3');
           _this.foot11.alpha = 0;
           _this.foot11.name = "foot11";
           _this.foot11.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot11 "+target.name);
                if(target.name == "foot11")
                    {
                          _this.foot11.frame = 1;
                          _this.foot12.inputEnabled = true;
                          _this.foot12.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot12 = _this.add.sprite(735,173,'sg24_1_4_footstep4');
           _this.foot12.alpha = 0;
           
           _this.foot12.name = "foot12";
           _this.foot12.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot12 "+target.name);
                if(target.name == "foot12")
                    {
                          _this.foot12.frame = 1;
                          _this.foot13.inputEnabled = true;
                          _this.foot13.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot13 = _this.add.sprite(735,241,'sg24_1_4_footstep3');
           _this.foot13.alpha = 0;
           
           _this.foot13.name = "foot13";
           _this.foot13.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot13 "+target.name);
                if(target.name == "foot13")
                    {
                          _this.foot13.frame = 1;
                          _this.foot14.inputEnabled = true;
                          _this.foot14.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot14 = _this.add.sprite(735,309,'sg24_1_4_footstep4');
           _this.foot14.alpha = 0;
           
           _this.foot14.name = "foot14";
           _this.foot14.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot14 "+target.name);
                if(target.name == "foot14")
                    {
                          _this.foot14.frame = 1;
                          _this.foot15.inputEnabled = true;
                          _this.foot15.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot15 = _this.add.sprite(735,377,'sg24_1_4_footstep3');
           _this.foot15.alpha = 0;
           
           _this.foot15.name = "foot15";
           _this.foot15.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot15 "+target.name);
                if(target.name == "foot15")
                    {
                          _this.foot15.frame = 1;
                          _this.foot16.inputEnabled = true;
                          _this.foot16.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           //////////
           
            _this.foot16 = _this.add.sprite(685,425,'sg24_1_4_footstep5');
           _this.foot16.alpha = 0;
          
           _this.foot16.name = "foot16";
           _this.foot16.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot16 "+target.name);
                if(target.name == "foot16")
                    {
                          _this.foot16.frame = 1;
                         _this.foot17.inputEnabled = true;
                         _this.foot17.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)    
            
         _this.foot17 = _this.add.sprite(617,425,'sg24_1_4_footstep6');
           _this.foot17.alpha = 0;
           _this.foot17.name = "foot17";
           _this.foot17.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot17 "+target.name);
                if(target.name == "foot17")
                    {
                          _this.foot17.frame = 1;
                          _this.foot18.inputEnabled = true;
                          _this.foot18.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this) 
           
           _this.foot18 = _this.add.sprite(549,425,'sg24_1_4_footstep5');
           _this.foot18.alpha = 0;
        
           _this.foot18.name = "foot18";
           _this.foot18.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot18 "+target.name);
                if(target.name == "foot18")
                    {
                          _this.foot18.frame = 1;
                          _this.foot19.inputEnabled = true;
                          _this.foot19.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot19 = _this.add.sprite(481,425,'sg24_1_4_footstep6');
           _this.foot19.alpha = 0;
           
           _this.foot19.name = "foot19";
           _this.foot19.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot19 "+target.name);
                if(target.name == "foot19")
                    {
                          _this.foot19.frame = 1;
                          _this.foot20.inputEnabled = true;
                          _this.foot20.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot20 = _this.add.sprite(413,425,'sg24_1_4_footstep5');
           _this.foot20.alpha = 0;
           
           _this.foot20.name = "foot20";
           _this.foot20.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot20 "+target.name);
                if(target.name == "foot20")
                    {
                          _this.foot20.frame = 1;
                          _this.foot21.inputEnabled = true;
                          _this.foot21.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot21 = _this.add.sprite(345,425,'sg24_1_4_footstep6');
           _this.foot21.alpha = 0;
          
           _this.foot21.name = "foot21";
           _this.foot21.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot21 "+target.name);
                if(target.name == "foot21")
                    {
                          _this.foot21.frame = 1;
                          _this.foot22.inputEnabled = true;
                          _this.foot22.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot22 = _this.add.sprite(277,425,'sg24_1_4_footstep5');
           _this.foot22.alpha = 0;
          
           _this.foot22.name = "foot22";
           _this.foot22.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot22 "+target.name);
                if(target.name == "foot22")
                    {
                          _this.foot22.frame = 1;
                          _this.foot23.inputEnabled = true;
                          _this.foot23.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot23 = _this.add.sprite(209,425,'sg24_1_4_footstep6');
           _this.foot23.alpha = 0;
          
           _this.foot23.name = "foot23";
           _this.foot23.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot23 "+target.name);
                if(target.name == "foot23")
                    {
                          _this.foot23.frame = 1;
                          _this.foot24.inputEnabled = true;
                           _this.foot24.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot24 = _this.add.sprite(141,425,'sg24_1_4_footstep5');
           _this.foot24.alpha = 0;
          
           _this.foot24.name = "foot24";
           _this.foot24.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot24 "+target.name);
                if(target.name == "foot24")
                    {
                          _this.foot24.frame = 1;
                          _this.foot25.inputEnabled = true;
                          _this.foot25.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot25 = _this.add.sprite(73,425,'sg24_1_4_footstep6');
           _this.foot25.alpha = 0;
          
           _this.foot25.name = "foot25";
           _this.foot25.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot25 "+target.name);
                if(target.name == "foot25")
                    {
                          _this.foot25.frame = 1;
                          _this.foot26.inputEnabled = true;
                          _this.foot26.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           //////
           
               _this.foot26 = _this.add.sprite(62,370,'sg24_1_4_footstep8');
           _this.foot26.alpha = 0;
           _this.foot26.name = "foot26";
           _this.foot26.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot26 "+target.name);
                if(target.name == "foot26")
                    {
                          _this.foot26.frame = 1;
                          _this.foot27.inputEnabled = true;
                          _this.foot27.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot27 = _this.add.sprite(63,302,'sg24_1_4_footstep7');
           _this.foot27.alpha = 0;
           
           _this.foot27.name = "foot27";
           _this.foot27.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot27 "+target.name);
                if(target.name == "foot27")
                    {
                          _this.foot27.frame = 1;
                          _this.foot28.inputEnabled = true;
                          _this.foot28.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot28 = _this.add.sprite(62,234,'sg24_1_4_footstep8');
           _this.foot28.alpha = 0;
           
           _this.foot28.name = "foot28";
           _this.foot28.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot28 "+target.name);
                if(target.name == "foot28")
                    {
                          _this.foot28.frame = 1;
                          _this.foot29.inputEnabled = true;
                          _this.foot29.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot29 = _this.add.sprite(63,166,'sg24_1_4_footstep7');
           _this.foot29.alpha = 0;
           
           _this.foot29.name = "foot29";
           _this.foot29.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot29 "+target.name);
                if(target.name == "foot29")
                    {
                          _this.foot29.frame = 1;
                          _this.foot30.inputEnabled = true;
                          _this.foot30.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot30 = _this.add.sprite(62,98,'sg24_1_4_footstep8');
           _this.foot30.alpha = 0;
           
           _this.foot30.name = "foot30";
           _this.foot30.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot30 "+target.name);
                if(target.name == "foot30")
                    {
                          _this.foot30.frame = 1;
                          _this.foot30.alpha = 1;
                         target.events.onInputDown.removeAll();
                         _this.addNumberPad();
                    
                    }
              },this)
           
           _this.rightAns = 30;
        
          _this.group1.add(_this.foot1);
          _this.group2.add(_this.foot2);
          _this.group2.add(_this.foot3);
          _this.group2.add(_this.foot4);
          _this.group2.add(_this.foot5);
          _this.group2.add(_this.foot6);
          _this.group2.add(_this.foot7);
          _this.group2.add(_this.foot8);
          _this.group2.add(_this.foot9);
          _this.group2.add(_this.foot10);
          _this.group2.add(_this.foot11);
          _this.group2.add(_this.foot12);
          _this.group2.add(_this.foot13);
          _this.group2.add(_this.foot14);
          _this.group2.add(_this.foot15);
          _this.group2.add(_this.foot16);
          _this.group2.add(_this.foot17);
          _this.group2.add(_this.foot18);
          _this.group2.add(_this.foot19);
          _this.group2.add(_this.foot20);
          _this.group2.add(_this.foot21);
          _this.group2.add(_this.foot22);
          _this.group2.add(_this.foot23);
          _this.group2.add(_this.foot24);
          _this.group2.add(_this.foot25);
          _this.group2.add(_this.foot26);
          _this.group2.add(_this.foot27);
            _this.group2.add(_this.foot28);
          _this.group2.add(_this.foot29);
          _this.group2.add(_this.foot30);
        
        
        
        
         
         
	  
    },
    
      question9:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("9");
          
          
            _this.sprite1 = _this.add.sprite(280, 100, 'sg24_1_4_img3');
            _this.sprite1.scale.setTo(0.9,0.9);
            _this.box = _this.add.sprite(800,240,'sg16_2_4_box');
             _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1); 
              _this.group1.add(_this.box);  
              _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
          if( _this.soundPlayed2 == false)
                 {
                  _this.getVoice();
                   _this.soundPlayed2 = true;     
                 }
          _this.foot1 = _this.add.sprite(284,88,'sg24_1_4_footstep1');
           _this.foot1.frame = 0;
           _this.foot1.name = "foot1";
           _this.foot1.inputEnabled = true;
           _this.foot1.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot1 "+target.name);
                if(target.name == "foot1")
                    {
                          _this.foot1.frame = 1;
                          _this.foot2.inputEnabled = true;
                          _this.foot2.alpha = 1;
                         target.events.onInputDown.removeAll();
                       
                     
                    
                    }
              },this) 
           
           _this.foot2 = _this.add.sprite(351,88,'sg24_1_4_footstep2');
           _this.foot2.alpha = 0;
        
           _this.foot2.name = "foot2";
           _this.foot2.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot2 "+target.name);
                if(target.name == "foot2")
                    {
                          _this.foot2.frame = 1;
                           _this.foot1.inputEnabled = false;
                          _this.foot3.inputEnabled = true;
                          _this.foot3.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot3 = _this.add.sprite(418,88,'sg24_1_4_footstep1');
           _this.foot3.alpha = 0;
           
           _this.foot3.name = "foot3";
           _this.foot3.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot3 "+target.name);
                if(target.name == "foot3")
                    {
                          _this.foot3.frame = 1;
                          _this.foot4.inputEnabled = true;
                          _this.foot4.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot4 = _this.add.sprite(485,88,'sg24_1_4_footstep2');
           _this.foot4.alpha = 0;
           
           _this.foot4.name = "foot4";
           _this.foot4.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot4 "+target.name);
                if(target.name == "foot4")
                    {
                          _this.foot4.frame = 1;
                          _this.foot5.inputEnabled = true;
                          _this.foot5.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot5 = _this.add.sprite(552,88,'sg24_1_4_footstep1');
           _this.foot5.alpha = 0;
          
           _this.foot5.name = "foot5";
           _this.foot5.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot5 "+target.name);
                if(target.name == "foot5")
                    {
                          _this.foot5.frame = 1;
                          _this.foot6.inputEnabled = true;
                          _this.foot6.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot6 = _this.add.sprite(602,103,'sg24_1_4_footstep3');
           _this.foot6.alpha = 0;
          
           _this.foot6.name = "foot6";
           _this.foot6.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot6 "+target.name);
                if(target.name == "foot6")
                    {
                          _this.foot6.frame = 1;
                          _this.foot7.inputEnabled = true;
                          _this.foot7.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot7 = _this.add.sprite(602,170,'sg24_1_4_footstep4');
           _this.foot7.alpha = 0;
          
           _this.foot7.name = "foot7";
           _this.foot7.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot7 "+target.name);
                if(target.name == "foot7")
                    {
                          _this.foot7.frame = 1;
                          _this.foot8.inputEnabled = true;
                           _this.foot8.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot8 = _this.add.sprite(602,237,'sg24_1_4_footstep3');
           _this.foot8.alpha = 0;
          
           _this.foot8.name = "foot8";
           _this.foot8.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot8 "+target.name);
                if(target.name == "foot8")
                    {
                          _this.foot8.frame = 1;
                          _this.foot9.inputEnabled = true;
                          _this.foot9.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot9 = _this.add.sprite(602,304,'sg24_1_4_footstep4');
            _this.foot9.alpha = 0;
          
           _this.foot9.name = "foot9";
           _this.foot9.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot9 "+target.name);
                if(target.name == "foot9")
                    {
                          _this.foot9.frame = 1;
                          _this.foot10.inputEnabled = true;
                          _this.foot10.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
            _this.foot10 = _this.add.sprite(602,371,'sg24_1_4_footstep3');
           _this.foot10.alpha = 0;
           
           _this.foot10.name = "foot10";
           _this.foot10.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot10 "+target.name);
                if(target.name == "foot10")
                    {
                          _this.foot10.frame = 1;
                         _this.foot11.inputEnabled = true;
                          _this.foot11.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
             _this.foot11 = _this.add.sprite(548,420,'sg24_1_4_footstep6');
          _this.foot11.alpha = 0;
           _this.foot11.name = "foot11";
           _this.foot11.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot11 "+target.name);
                if(target.name == "foot11")
                    {
                          _this.foot11.frame = 1;
                          _this.foot12.inputEnabled = true;
                          _this.foot12.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot12 = _this.add.sprite(483,420,'sg24_1_4_footstep5');
           _this.foot12.alpha = 0;
           
           _this.foot12.name = "foot12";
           _this.foot12.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot12 "+target.name);
                if(target.name == "foot12")
                    {
                          _this.foot12.frame = 1;
                          _this.foot13.inputEnabled = true;
                          _this.foot13.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot13 = _this.add.sprite(416,420,'sg24_1_4_footstep6');
           _this.foot13.alpha = 0;
           
           _this.foot13.name = "foot13";
           _this.foot13.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot13 "+target.name);
                if(target.name == "foot13")
                    {
                          _this.foot13.frame = 1;
                          _this.foot14.inputEnabled = true;
                          _this.foot14.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot14 = _this.add.sprite(349,420,'sg24_1_4_footstep5');
          _this.foot14.alpha = 0;
           
           _this.foot14.name = "foot14";
           _this.foot14.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot14 "+target.name);
                if(target.name == "foot14")
                    {
                          _this.foot14.frame = 1;
                          _this.foot15.inputEnabled = true;
                          _this.foot15.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot15 = _this.add.sprite(282,420,'sg24_1_4_footstep6');
           _this.foot15.alpha = 0;
           
           _this.foot15.name = "foot15";
           _this.foot15.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot15 "+target.name);
                if(target.name == "foot15")
                    {
                          _this.foot15.frame = 1;
                          _this.foot16.inputEnabled = true;
                          _this.foot16.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           //////////
           
            _this.foot16 = _this.add.sprite(270,369,'sg24_1_4_footstep8');
            _this.foot16.alpha = 0;
          
           _this.foot16.name = "foot16";
           _this.foot16.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot16 "+target.name);
                if(target.name == "foot16")
                    {
                          _this.foot16.frame = 1;
                         _this.foot17.inputEnabled = true;
                         _this.foot17.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)    
            
         _this.foot17 = _this.add.sprite(270,304,'sg24_1_4_footstep7');
           _this.foot17.alpha = 0;
           _this.foot17.name = "foot17";
           _this.foot17.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot17 "+target.name);
                if(target.name == "foot17")
                    {
                          _this.foot17.frame = 1;
                          _this.foot18.inputEnabled = true;
                          _this.foot18.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this) 
           
           _this.foot18 = _this.add.sprite(270,237,'sg24_1_4_footstep8');
           _this.foot18.alpha = 0;
        
           _this.foot18.name = "foot18";
           _this.foot18.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot18 "+target.name);
                if(target.name == "foot18")
                    {
                          _this.foot18.frame = 1;
                          _this.foot19.inputEnabled = true;
                          _this.foot19.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot19 = _this.add.sprite(270,170,'sg24_1_4_footstep8');
           _this.foot19.alpha = 0;
           
           _this.foot19.name = "foot19";
           _this.foot19.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot19 "+target.name);
                if(target.name == "foot19")
                    {
                          _this.foot19.frame = 1;
                          _this.foot20.inputEnabled = true;
                          _this.foot20.alpha = 1;
                         target.events.onInputDown.removeAll();
                         
                     
                    
                    }
              },this)
           
            _this.foot20 = _this.add.sprite(270,103,'sg24_1_4_footstep7');
           _this.foot20.alpha = 0;
           
           _this.foot20.name = "foot20";
           _this.foot20.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot20 "+target.name);
                if(target.name == "foot20")
                    {
                          _this.foot20.frame = 1;
                        target.events.onInputDown.removeAll();
                         _this.addNumberPad();
                     
                    
                    }
              },this)
             
           
           
           _this.rightAns = 20;
        
          _this.group1.add(_this.foot1);
          _this.group2.add(_this.foot2);
          _this.group2.add(_this.foot3);
          _this.group2.add(_this.foot4);
          _this.group2.add(_this.foot5);
          _this.group2.add(_this.foot6);
          _this.group2.add(_this.foot7);
          _this.group2.add(_this.foot8);
          _this.group2.add(_this.foot9);
          _this.group2.add(_this.foot10);
          _this.group2.add(_this.foot11);
          _this.group2.add(_this.foot12);
          _this.group2.add(_this.foot13);
          _this.group2.add(_this.foot14);
          _this.group2.add(_this.foot15);
          _this.group2.add(_this.foot16);
          _this.group2.add(_this.foot17);
          _this.group2.add(_this.foot18);
          _this.group2.add(_this.foot19);
          _this.group2.add(_this.foot20);
         
          
 
      },
    
      question10:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("10");
          
        
            _this.sprite1 = _this.add.sprite(150, 100, 'sg24_1_4_img1');
           // _this.sprite1.scale.setTo(0.9);
           _this.box = _this.add.sprite(800,240,'sg16_2_4_box');
          _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1); 
              _this.group1.add(_this.box);  
             _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
           if( _this.soundPlayed2 == false)
                 {
                  _this.getVoice();
                   _this.soundPlayed2 = true;     
                 }
           _this.foot1 = _this.add.sprite(165,96,'sg24_1_4_footstep1');
           _this.foot1.frame = 0;
           _this.foot1.name = "foot1";
           _this.foot1.inputEnabled = true;
           _this.foot1.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot1 "+target.name);
                if(target.name == "foot1")
                    {
                          _this.foot1.frame = 1;
                          _this.foot2.inputEnabled = true;
                          _this.foot2.alpha = 1;
                         target.events.onInputDown.removeAll();
                         
                    
                    }
              },this) 
           
           _this.foot2 = _this.add.sprite(233,96,'sg24_1_4_footstep2');
           _this.foot2.alpha = 0;
        
           _this.foot2.name = "foot2";
           _this.foot2.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot2 "+target.name);
                if(target.name == "foot2")
                    {
                          _this.foot2.frame = 1;
                           _this.foot1.inputEnabled = true;
                          _this.foot3.inputEnabled = true;
                          _this.foot3.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot3 = _this.add.sprite(300,96,'sg24_1_4_footstep1');
           _this.foot3.alpha = 0;
           
           _this.foot3.name = "foot3";
           _this.foot3.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot3 "+target.name);
                if(target.name == "foot3")
                    {
                          _this.foot3.frame = 1;
                          _this.foot4.inputEnabled = true;
                          _this.foot4.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot4 = _this.add.sprite(367,96,'sg24_1_4_footstep2');
           _this.foot4.alpha = 0;
           
           _this.foot4.name = "foot4";
           _this.foot4.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot4 "+target.name);
                if(target.name == "foot4")
                    {
                          _this.foot4.frame = 1;
                          _this.foot5.inputEnabled = true;
                          _this.foot5.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot5 = _this.add.sprite(434,96,'sg24_1_4_footstep1');
           _this.foot5.alpha = 0;
          
           _this.foot5.name = "foot5";
           _this.foot5.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot5 "+target.name);
                if(target.name == "foot5")
                    {
                          _this.foot5.frame = 1;
                          _this.foot6.inputEnabled = true;
                          _this.foot6.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot6 = _this.add.sprite(501,96,'sg24_1_4_footstep2');
           _this.foot6.alpha = 0;
          
           _this.foot6.name = "foot6";
           _this.foot6.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot6 "+target.name);
                if(target.name == "foot6")
                    {
                          _this.foot6.frame = 1;
                          _this.foot7.inputEnabled = true;
                          _this.foot7.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot7 = _this.add.sprite(568,96,'sg24_1_4_footstep1');
           _this.foot7.alpha = 0;
          
           _this.foot7.name = "foot7";
           _this.foot7.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot7 "+target.name);
                if(target.name == "foot7")
                    {
                          _this.foot7.frame = 1;
                          _this.foot8.inputEnabled = true;
                           _this.foot8.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot8 = _this.add.sprite(630,105,'sg24_1_4_footstep3');
           _this.foot8.alpha = 0;
          
           _this.foot8.name = "foot8";
           _this.foot8.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot8 "+target.name);
                if(target.name == "foot8")
                    {
                          _this.foot8.frame = 1;
                          _this.foot9.inputEnabled = true;
                          _this.foot9.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot9 = _this.add.sprite(570,155,'sg24_1_4_footstep6');
           _this.foot9.alpha = 0;
          
           _this.foot9.name = "foot9";
           _this.foot9.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot9 "+target.name);
                if(target.name == "foot9")
                    {
                          _this.foot9.frame = 1;
                          _this.foot10.inputEnabled = true;
                          _this.foot10.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
            _this.foot10 = _this.add.sprite(546,166,'sg24_1_4_footstep3');
           _this.foot10.alpha = 0;
           
           _this.foot10.name = "foot10";
           _this.foot10.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot10 "+target.name);
                if(target.name == "foot10")
                    {
                          _this.foot10.frame = 1;
                         _this.foot11.inputEnabled = true;
                          _this.foot11.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
             _this.foot11 = _this.add.sprite(546,236,'sg24_1_4_footstep4');
           _this.foot11.alpha = 0;
           _this.foot11.name = "foot11";
           _this.foot11.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot11 "+target.name);
                if(target.name == "foot11")
                    {
                          _this.foot11.frame = 1;
                          _this.foot12.inputEnabled = true;
                          _this.foot12.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot12 = _this.add.sprite(546,307,'sg24_1_4_footstep3');
           _this.foot12.alpha = 0;
           
           _this.foot12.name = "foot12";
           _this.foot12.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot12 "+target.name);
                if(target.name == "foot12")
                    {
                          _this.foot12.frame = 1;
                          _this.foot13.inputEnabled = true;
                          _this.foot13.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot13 = _this.add.sprite(568,362,'sg24_1_4_footstep1');
           _this.foot13.alpha = 0;
           
           _this.foot13.name = "foot13";
           _this.foot13.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot13 "+target.name);
                if(target.name == "foot13")
                    {
                          _this.foot13.frame = 1;
                          _this.foot14.inputEnabled = true;
                          _this.foot14.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot14 = _this.add.sprite(632,370,'sg24_1_4_footstep3');
           _this.foot14.alpha = 0;
           
           _this.foot14.name = "foot14";
           _this.foot14.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot14 "+target.name);
                if(target.name == "foot14")
                    {
                          _this.foot14.frame = 1;
                          _this.foot15.inputEnabled = true;
                          _this.foot15.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot15 = _this.add.sprite(568,420,'sg24_1_4_footstep6');
           _this.foot15.alpha = 0;
           
           _this.foot15.name = "foot15";
           _this.foot15.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot15 "+target.name);
                if(target.name == "foot15")
                    {
                          _this.foot15.frame = 1;
                          _this.foot16.inputEnabled = true;
                          _this.foot16.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           //////////
           
            _this.foot16 = _this.add.sprite(501,420,'sg24_1_4_footstep5');
           _this.foot16.alpha = 0;
          
           _this.foot16.name = "foot16";
           _this.foot16.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot16 "+target.name);
                if(target.name == "foot16")
                    {
                          _this.foot16.frame = 1;
                         _this.foot17.inputEnabled = true;
                         _this.foot17.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)    
            
         _this.foot17 = _this.add.sprite(434,420,'sg24_1_4_footstep6');
           _this.foot17.alpha = 0;
           _this.foot17.name = "foot17";
           _this.foot17.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot17 "+target.name);
                if(target.name == "foot17")
                    {
                          _this.foot17.frame = 1;
                          _this.foot18.inputEnabled = true;
                          _this.foot18.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this) 
           
           _this.foot18 = _this.add.sprite(367,420,'sg24_1_4_footstep5');
           _this.foot18.alpha = 0;
        
           _this.foot18.name = "foot18";
           _this.foot18.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot18 "+target.name);
                if(target.name == "foot18")
                    {
                          _this.foot18.frame = 1;
                          _this.foot19.inputEnabled = true;
                          _this.foot19.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot19 = _this.add.sprite(300,420,'sg24_1_4_footstep6');
           _this.foot19.alpha = 0;
           
           _this.foot19.name = "foot19";
           _this.foot19.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot19 "+target.name);
                if(target.name == "foot19")
                    {
                          _this.foot19.frame = 1;
                          _this.foot20.inputEnabled = true;
                          _this.foot20.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot20 = _this.add.sprite(233,420,'sg24_1_4_footstep5');
           _this.foot20.alpha = 0;
           
           _this.foot20.name = "foot20";
           _this.foot20.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot20 "+target.name);
                if(target.name == "foot20")
                    {
                          _this.foot20.frame = 1;
                          _this.foot21.inputEnabled = true;
                          _this.foot21.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot21 = _this.add.sprite(166,420,'sg24_1_4_footstep6');
           _this.foot21.alpha = 0;
          
           _this.foot21.name = "foot21";
           _this.foot21.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot21 "+target.name);
                if(target.name == "foot21")
                    {
                          _this.foot21.frame = 1;
                          _this.foot22.inputEnabled = true;
                          _this.foot22.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot22 = _this.add.sprite(145,370,'sg24_1_4_footstep8');
           _this.foot22.alpha = 0;
          
           _this.foot22.name = "foot22";
           _this.foot22.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot22 "+target.name);
                if(target.name == "foot22")
                    {
                          _this.foot22.frame = 1;
                          _this.foot23.inputEnabled = true;
                          _this.foot23.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot23 = _this.add.sprite(172,360,'sg24_1_4_footstep1');
           _this.foot23.alpha = 0;
          
           _this.foot23.name = "foot23";
           _this.foot23.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot23 "+target.name);
                if(target.name == "foot23")
                    {
                          _this.foot23.frame = 1;
                          _this.foot24.inputEnabled = true;
                           _this.foot24.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot24 = _this.add.sprite(231,312,'sg24_1_4_footstep8');
           _this.foot24.alpha = 0;
          
           _this.foot24.name = "foot24";
           _this.foot24.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot24 "+target.name);
                if(target.name == "foot24")
                    {
                          _this.foot24.frame = 1;
                          _this.foot25.inputEnabled = true;
                          _this.foot25.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot25 = _this.add.sprite(231,245,'sg24_1_4_footstep7');
           _this.foot25.alpha = 0;
          
           _this.foot25.name = "foot25";
           _this.foot25.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot25 "+target.name);
                if(target.name == "foot25")
                    {
                          _this.foot25.frame = 1;
                          _this.foot26.inputEnabled = true;
                          _this.foot26.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           //////
           
               _this.foot26 = _this.add.sprite(231,178,'sg24_1_4_footstep8');
           _this.foot26.alpha = 0;
           _this.foot26.name = "foot26";
           _this.foot26.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot26 "+target.name);
                if(target.name == "foot26")
                    {
                          _this.foot26.frame = 1;
                          _this.foot27.inputEnabled = true;
                          _this.foot27.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot27 = _this.add.sprite(173,154,'sg24_1_4_footstep6');
           _this.foot27.alpha = 0;
           
           _this.foot27.name = "foot27";
           _this.foot27.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot27 "+target.name);
                if(target.name == "foot27")
                    {
                          _this.foot27.frame = 1;
                          _this.foot28.inputEnabled = true;
                          _this.foot28.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot28 = _this.add.sprite(147,110,'sg24_1_4_footstep8');
           _this.foot28.alpha = 0;
           
           _this.foot28.name = "foot28";
           _this.foot28.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot28 "+target.name);
                if(target.name == "foot28")
                    {
                          _this.foot28.frame = 1;
                         target.events.onInputDown.removeAll();
                          _this.addNumberPad();
                    
                    }
              },this)
           
                     _this.rightAns = 28;
        
          _this.group1.add(_this.foot1);
          _this.group2.add(_this.foot2);
          _this.group2.add(_this.foot3);
          _this.group2.add(_this.foot4);
          _this.group2.add(_this.foot5);
          _this.group2.add(_this.foot6);
          _this.group2.add(_this.foot7);
          _this.group2.add(_this.foot8);
          _this.group2.add(_this.foot9);
          _this.group2.add(_this.foot10);
          _this.group2.add(_this.foot11);
          _this.group2.add(_this.foot12);
          _this.group2.add(_this.foot13);
          _this.group2.add(_this.foot14);
          _this.group2.add(_this.foot15);
          _this.group2.add(_this.foot16);
          _this.group2.add(_this.foot17);
          _this.group2.add(_this.foot18);
          _this.group2.add(_this.foot19);
          _this.group2.add(_this.foot20);
          _this.group2.add(_this.foot21);
          _this.group2.add(_this.foot22);
          _this.group2.add(_this.foot23);
          _this.group2.add(_this.foot24);
          _this.group2.add(_this.foot25);
          _this.group2.add(_this.foot26);
          _this.group2.add(_this.foot27);
            _this.group2.add(_this.foot28);

          
      },
    
      question11:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("11");
          
         
             _this.sprite1 = _this.add.sprite(210, 50, 'sg24_1_4_img5');
           // _this.sprite1.scale.setTo(0.9);
           _this.box = _this.add.sprite(800,240,'sg16_2_4_box');
          _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1); 
              _this.group1.add(_this.box);  
             _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
         
           if( _this.soundPlayed2 == false)
                 {
                  _this.getVoice();
                   _this.soundPlayed2 = true;     
                 }
           _this.foot1 = _this.add.sprite(216,55,'sg24_1_4_footstep1');
           _this.foot1.frame = 0;
           _this.foot1.name = "foot1";
           _this.foot1.inputEnabled = true;
           _this.foot1.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot1 "+target.name);
                if(target.name == "foot1")
                    {
                          _this.foot1.frame = 1;
                          _this.foot2.inputEnabled = true;
                          _this.foot2.alpha = 1;
                         target.events.onInputDown.removeAll();
                          
                    
                    }
              },this) 
           
           _this.foot2 = _this.add.sprite(287,55,'sg24_1_4_footstep2');
           _this.foot2.alpha = 0;
        
           _this.foot2.name = "foot2";
           _this.foot2.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot2 "+target.name);
                if(target.name == "foot2")
                    {
                          _this.foot2.frame = 1;
                          _this.foot3.inputEnabled = true;
                          _this.foot3.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot3 = _this.add.sprite(358,55,'sg24_1_4_footstep1');
           _this.foot3.alpha = 0;
           
           _this.foot3.name = "foot3";
           _this.foot3.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot3 "+target.name);
                if(target.name == "foot3")
                    {
                          _this.foot3.frame = 1;
                          _this.foot4.inputEnabled = true;
                          _this.foot4.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot4 = _this.add.sprite(429,55,'sg24_1_4_footstep2');
           _this.foot4.alpha = 0;
           
           _this.foot4.name = "foot4";
           _this.foot4.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot4 "+target.name);
                if(target.name == "foot4")
                    {
                          _this.foot4.frame = 1;
                          _this.foot5.inputEnabled = true;
                          _this.foot5.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot5 = _this.add.sprite(500,55,'sg24_1_4_footstep1');
           _this.foot5.alpha = 0;
          
           _this.foot5.name = "foot5";
           _this.foot5.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot5 "+target.name);
                if(target.name == "foot5")
                    {
                          _this.foot5.frame = 1;
                          _this.foot6.inputEnabled = true;
                          _this.foot6.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot6 = _this.add.sprite(571,55,'sg24_1_4_footstep2');
           _this.foot6.alpha = 0;
          
           _this.foot6.name = "foot6";
           _this.foot6.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot6 "+target.name);
                if(target.name == "foot6")
                    {
                          _this.foot6.frame = 1;
                          _this.foot7.inputEnabled = true;
                          _this.foot7.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot7 = _this.add.sprite(638,60,'sg24_1_4_footstep4');
           _this.foot7.alpha = 0;
          
           _this.foot7.name = "foot7";
           _this.foot7.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot7 "+target.name);
                if(target.name == "foot7")
                    {
                          _this.foot7.frame = 1;
                          _this.foot8.inputEnabled = true;
                           _this.foot8.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot8 = _this.add.sprite(638,131,'sg24_1_4_footstep3');
           _this.foot8.alpha = 0;
          
           _this.foot8.name = "foot8";
           _this.foot8.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot8 "+target.name);
                if(target.name == "foot8")
                    {
                          _this.foot8.frame = 1;
                          _this.foot9.inputEnabled = true;
                          _this.foot9.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot9 = _this.add.sprite(638,202,'sg24_1_4_footstep4');
           _this.foot9.alpha = 0;
          
           _this.foot9.name = "foot9";
           _this.foot9.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot9 "+target.name);
                if(target.name == "foot9")
                    {
                          _this.foot9.frame = 1;
                          _this.foot10.inputEnabled = true;
                          _this.foot10.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
            _this.foot10 = _this.add.sprite(638,273,'sg24_1_4_footstep3');
           _this.foot10.alpha = 0;
           
           _this.foot10.name = "foot10";
           _this.foot10.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot10 "+target.name);
                if(target.name == "foot10")
                    {
                          _this.foot10.frame = 1;
                         _this.foot11.inputEnabled = true;
                          _this.foot11.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
             _this.foot11 = _this.add.sprite(594,335,'sg24_1_4_footstep6');
           _this.foot11.alpha = 0;
           _this.foot11.name = "foot11";
           _this.foot11.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot11 "+target.name);
                if(target.name == "foot11")
                    {
                          _this.foot11.frame = 1;
                          _this.foot12.inputEnabled = true;
                          _this.foot12.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot12 = _this.add.sprite(523,335,'sg24_1_4_footstep5');
           _this.foot12.alpha = 0;
           
           _this.foot12.name = "foot12";
           _this.foot12.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot12 "+target.name);
                if(target.name == "foot12")
                    {
                          _this.foot12.frame = 1;
                          _this.foot13.inputEnabled = true;
                          _this.foot13.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot13 = _this.add.sprite(452,335,'sg24_1_4_footstep6');
           _this.foot13.alpha = 0;
           
           _this.foot13.name = "foot13";
           _this.foot13.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot13 "+target.name);
                if(target.name == "foot13")
                    {
                          _this.foot13.frame = 1;
                          _this.foot14.inputEnabled = true;
                          _this.foot14.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot14 = _this.add.sprite(381,335,'sg24_1_4_footstep5');
           _this.foot14.alpha = 0;
           
           _this.foot14.name = "foot14";
           _this.foot14.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot14 "+target.name);
                if(target.name == "foot14")
                    {
                          _this.foot14.frame = 1;
                          _this.foot15.inputEnabled = true;
                          _this.foot15.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot15 = _this.add.sprite(313,335,'sg24_1_4_footstep6');
           _this.foot15.alpha = 0;
           
           _this.foot15.name = "foot15";
           _this.foot15.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot15 "+target.name);
                if(target.name == "foot15")
                    {
                          _this.foot15.frame = 1;
                          _this.foot16.inputEnabled = true;
                          _this.foot16.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           //////////
           
            _this.foot16 = _this.add.sprite(288,338,'sg24_1_4_footstep3');
           _this.foot16.alpha = 0;
          
           _this.foot16.name = "foot16";
           _this.foot16.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot16 "+target.name);
                if(target.name == "foot16")
                    {
                          _this.foot16.frame = 1;
                         _this.foot17.inputEnabled = true;
                         _this.foot17.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)    
            
         _this.foot17 = _this.add.sprite(318,377,'sg24_1_4_footstep1');
          _this.foot17.alpha = 0;
           _this.foot17.name = "foot17";
           _this.foot17.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot17 "+target.name);
                if(target.name == "foot17")
                    {
                          _this.foot17.frame = 1;
                          _this.foot18.inputEnabled = true;
                          _this.foot18.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this) 
           
           _this.foot18 = _this.add.sprite(384,377,'sg24_1_4_footstep2');
           _this.foot18.alpha = 0;
        
           _this.foot18.name = "foot18";
           _this.foot18.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot18 "+target.name);
                if(target.name == "foot18")
                    {
                          _this.foot18.frame = 1;
                          _this.foot19.inputEnabled = true;
                          _this.foot19.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot19 = _this.add.sprite(450,377,'sg24_1_4_footstep1');
           _this.foot19.alpha = 0;
           
           _this.foot19.name = "foot19";
           _this.foot19.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot19 "+target.name);
                if(target.name == "foot19")
                    {
                          _this.foot19.frame = 1;
                          _this.foot20.inputEnabled = true;
                          _this.foot20.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot20 = _this.add.sprite(516,377,'sg24_1_4_footstep2');
           _this.foot20.alpha = 0;
           
           _this.foot20.name = "foot20";
           _this.foot20.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot20 "+target.name);
                if(target.name == "foot20")
                    {
                          _this.foot20.frame = 1;
                          _this.foot21.inputEnabled = true;
                          _this.foot21.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot21 = _this.add.sprite(582,377,'sg24_1_4_footstep1');
           _this.foot21.alpha = 0;
          
           _this.foot21.name = "foot21";
           _this.foot21.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot21 "+target.name);
                if(target.name == "foot21")
                    {
                          _this.foot21.frame = 1;
                          _this.foot22.inputEnabled = true;
                          _this.foot22.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot22 = _this.add.sprite(636,398,'sg24_1_4_footstep3');
           _this.foot22.alpha = 0;
          
           _this.foot22.name = "foot22";
           _this.foot22.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot22 "+target.name);
                if(target.name == "foot22")
                    {
                          _this.foot22.frame = 1;
                          _this.foot23.inputEnabled = true;
                          _this.foot23.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot23 = _this.add.sprite(570,441,'sg24_1_4_footstep6');
           _this.foot23.alpha = 0;
          
           _this.foot23.name = "foot23";
           _this.foot23.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot23 "+target.name);
                if(target.name == "foot23")
                    {
                          _this.foot23.frame = 1;
                          _this.foot24.inputEnabled = true;
                           _this.foot24.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot24 = _this.add.sprite(499,441,'sg24_1_4_footstep5');
           _this.foot24.alpha = 0;
          
           _this.foot24.name = "foot24";
           _this.foot24.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot24 "+target.name);
                if(target.name == "foot24")
                    {
                          _this.foot24.frame = 1;
                          _this.foot25.inputEnabled = true;
                          _this.foot25.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot25 = _this.add.sprite(428,441,'sg24_1_4_footstep6');
           _this.foot25.alpha = 0;
          
           _this.foot25.name = "foot25";
           _this.foot25.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot25 "+target.name);
                if(target.name == "foot25")
                    {
                          _this.foot25.frame = 1;
                          _this.foot26.inputEnabled = true;
                          _this.foot26.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           //////
           
               _this.foot26 = _this.add.sprite(357,441,'sg24_1_4_footstep5');
           _this.foot26.alpha = 0;
           _this.foot26.name = "foot26";
           _this.foot26.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot26 "+target.name);
                if(target.name == "foot26")
                    {
                          _this.foot26.frame = 1;
                          _this.foot27.inputEnabled = true;
                          _this.foot27.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot27 = _this.add.sprite(286,441,'sg24_1_4_footstep6');
           _this.foot27.alpha = 0;
           
           _this.foot27.name = "foot27";
           _this.foot27.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot27 "+target.name);
                if(target.name == "foot27")
                    {
                          _this.foot27.frame = 1;
                          _this.foot28.inputEnabled = true;
                          _this.foot28.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot28 = _this.add.sprite(215,441,'sg24_1_4_footstep5');
           _this.foot28.alpha = 0;
           
           _this.foot28.name = "foot28";
           _this.foot28.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot28 "+target.name);
                if(target.name == "foot28")
                    {
                          _this.foot28.frame = 1;
                           _this.foot29.inputEnabled = true;
                          _this.foot29.alpha = 1;
                         target.events.onInputDown.removeAll();
                        
                    
                    }
              },this)
           ////********
           
              _this.foot29 = _this.add.sprite(211,372,'sg24_1_4_footstep7');
           _this.foot29.alpha = 0;
           
           _this.foot29.name = "foot29";
           _this.foot29.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot29 "+target.name);
                if(target.name == "foot29")
                    {
                          _this.foot29.frame = 1;
                           _this.foot30.inputEnabled = true;
                          _this.foot30.alpha = 1;
                         target.events.onInputDown.removeAll();
                          
                    
                    }
              },this)
           
                _this.foot30 = _this.add.sprite(211,301,'sg24_1_4_footstep8');
           _this.foot30.alpha = 0;
           
           _this.foot30.name = "foot30";
           _this.foot30.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot30 "+target.name);
                if(target.name == "foot30")
                    {
                          _this.foot30.frame = 1;
                             _this.foot31.inputEnabled = true;
                          _this.foot31.alpha = 1;
                         target.events.onInputDown.removeAll();
                         
                    
                    }
              },this)
           
                _this.foot31 = _this.add.sprite(211,230,'sg24_1_4_footstep7');
           _this.foot31.alpha = 0;
           
           _this.foot31.name = "foot31";
           _this.foot31.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot31 "+target.name);
                if(target.name == "foot31")
                    {
                          _this.foot31.frame = 1;
                             _this.foot32.inputEnabled = true;
                          _this.foot32.alpha = 1;
                         target.events.onInputDown.removeAll();
                         
                    
                    }
              },this)
           
                _this.foot32 = _this.add.sprite(211,159,'sg24_1_4_footstep8');
           _this.foot32.alpha = 0;
           
           _this.foot32.name = "foot32";
           _this.foot32.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot32 "+target.name);
                if(target.name == "foot32")
                    {
                          _this.foot32.frame = 1;
                             _this.foot33.inputEnabled = true;
                          _this.foot33.alpha = 1;
                         target.events.onInputDown.removeAll();
                         
                    
                    }
              },this)
           
                _this.foot33 = _this.add.sprite(211,88,'sg24_1_4_footstep7');
           _this.foot33.alpha = 0;
           
           _this.foot33.name = "foot33";
           _this.foot33.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot33 "+target.name);
                if(target.name == "foot33")
                    {
                          _this.foot33.frame = 1;
                         target.events.onInputDown.removeAll();
                          _this.addNumberPad();
                    
                    }
              },this)
              
           
   
        
           
                     _this.rightAns = 33;
        
          _this.group1.add(_this.foot1);
          _this.group2.add(_this.foot2);
          _this.group2.add(_this.foot3);
          _this.group2.add(_this.foot4);
          _this.group2.add(_this.foot5);
          _this.group2.add(_this.foot6);
          _this.group2.add(_this.foot7);
          _this.group2.add(_this.foot8);
          _this.group2.add(_this.foot9);
          _this.group2.add(_this.foot10);
          _this.group2.add(_this.foot11);
          _this.group2.add(_this.foot12);
          _this.group2.add(_this.foot13);
          _this.group2.add(_this.foot14);
          _this.group2.add(_this.foot15);
          _this.group2.add(_this.foot16);
          _this.group2.add(_this.foot17);
          _this.group2.add(_this.foot18);
          _this.group2.add(_this.foot19);
          _this.group2.add(_this.foot20);
          _this.group2.add(_this.foot21);
          _this.group2.add(_this.foot22);
          _this.group2.add(_this.foot23);
          _this.group2.add(_this.foot24);
          _this.group2.add(_this.foot25);
          _this.group2.add(_this.foot26);
          _this.group2.add(_this.foot27);
            _this.group2.add(_this.foot28);
           _this.group2.add(_this.foot29);
          _this.group2.add(_this.foot30);
          _this.group2.add(_this.foot31);
          _this.group2.add(_this.foot32);
            _this.group2.add(_this.foot33);
 
 
      },
    
      question12:function(){
         _this.Question = 1;
          _this.no1++;
         console.log("12");
           
          
          
            _this.sprite1 = _this.add.sprite(80, 70, 'sg24_1_4_img4');
           // _this.sprite1.scale.setTo(0.9);
           _this.box = _this.add.sprite(800,240,'sg16_2_4_box');
          _this.group1=_this.add.group();
            _this.group2 = _this.add.group(); 
            _this.group3 = _this.add.group();
             
        
              _this.group1.add(_this.sprite1); 
              _this.group1.add(_this.box);  
             _this.group1.x=1000;
              _this.tween=_this.add.tween(_this.group1).to( { x: 0 }, 1500, 'Linear', true,0);
          
            if( _this.soundPlayed2 == false)
                 {
                  _this.getVoice();
                   _this.soundPlayed2 = true;     
                 }
           _this.foot1 = _this.add.sprite(131,94,'sg24_1_4_footstep1');
           _this.foot1.frame = 0;
           _this.foot1.name = "foot1";
           _this.foot1.inputEnabled = true;
           _this.foot1.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot1 "+target.name);
                if(target.name == "foot1")
                    {
                          _this.foot1.frame = 1;
                          _this.foot2.inputEnabled = true;
                          _this.foot2.alpha = 1;
                         target.events.onInputDown.removeAll();
                        
                    
                    }
              },this) 
           
           _this.foot2 = _this.add.sprite(199,94,'sg24_1_4_footstep2');
           _this.foot2.alpha = 0;
        
           _this.foot2.name = "foot2";
           _this.foot2.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot2 "+target.name);
                if(target.name == "foot2")
                    {
                          _this.foot2.frame = 1;
                          _this.foot3.inputEnabled = true;
                          _this.foot3.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot3 = _this.add.sprite(267,94,'sg24_1_4_footstep1');
           _this.foot3.alpha = 0;
           
           _this.foot3.name = "foot3";
           _this.foot3.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot3 "+target.name);
                if(target.name == "foot3")
                    {
                          _this.foot3.frame = 1;
                          _this.foot4.inputEnabled = true;
                          _this.foot4.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot4 = _this.add.sprite(325,105,'sg24_1_4_footstep2');
            _this.foot4.angle = -45;
           _this.foot4.alpha = 0;
           
           _this.foot4.name = "foot4";
           _this.foot4.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot4 "+target.name);
                if(target.name == "foot4")
                    {
                          _this.foot4.frame = 1;
                          _this.foot5.inputEnabled = true;
                          _this.foot5.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot5 = _this.add.sprite(387,59,'sg24_1_4_footstep1');
           _this.foot5.alpha = 0;
          
           _this.foot5.name = "foot5";
           _this.foot5.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot5 "+target.name);
                if(target.name == "foot5")
                    {
                          _this.foot5.frame = 1;
                          _this.foot6.inputEnabled = true;
                          _this.foot6.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot6 = _this.add.sprite(458,59,'sg24_1_4_footstep2');
           _this.foot6.alpha = 0;
          
           _this.foot6.name = "foot6";
           _this.foot6.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot6 "+target.name);
                if(target.name == "foot6")
                    {
                          _this.foot6.frame = 1;
                          _this.foot7.inputEnabled = true;
                          _this.foot7.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot7 = _this.add.sprite(526,59,'sg24_1_4_footstep1');
           _this.foot7.alpha = 0;
          
           _this.foot7.name = "foot7";
           _this.foot7.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot7 "+target.name);
                if(target.name == "foot7")
                    {
                          _this.foot7.frame = 1;
                          _this.foot8.inputEnabled = true;
                           _this.foot8.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot8 = _this.add.sprite(594,59,'sg24_1_4_footstep2');
           _this.foot8.alpha = 0;
          
           _this.foot8.name = "foot8";
           _this.foot8.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot8 "+target.name);
                if(target.name == "foot8")
                    {
                          _this.foot8.frame = 1;
                          _this.foot9.inputEnabled = true;
                          _this.foot9.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot9 = _this.add.sprite(662,59,'sg24_1_4_footstep1');
           _this.foot9.alpha = 0;
          
           _this.foot9.name = "foot9";
           _this.foot9.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot9 "+target.name);
                if(target.name == "foot9")
                    {
                          _this.foot9.frame = 1;
                          _this.foot10.inputEnabled = true;
                          _this.foot10.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
            _this.foot10 = _this.add.sprite(727,78,'sg24_1_4_footstep3');
           _this.foot10.alpha = 0;
           
           _this.foot10.name = "foot10";
           _this.foot10.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot10 "+target.name);
                if(target.name == "foot10")
                    {
                          _this.foot10.frame = 1;
                         _this.foot11.inputEnabled = true;
                          _this.foot11.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
             _this.foot11 = _this.add.sprite(727,148,'sg24_1_4_footstep4');
           _this.foot11.alpha = 0;
           _this.foot11.name = "foot11";
           _this.foot11.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot11 "+target.name);
                if(target.name == "foot11")
                    {
                          _this.foot11.frame = 1;
                          _this.foot12.inputEnabled = true;
                          _this.foot12.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot12 = _this.add.sprite(727,218,'sg24_1_4_footstep3');
           _this.foot12.alpha = 0;
           
           _this.foot12.name = "foot12";
           _this.foot12.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot12 "+target.name);
                if(target.name == "foot12")
                    {
                          _this.foot12.frame = 1;
                          _this.foot13.inputEnabled = true;
                          _this.foot13.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot13 = _this.add.sprite(727,288,'sg24_1_4_footstep4');
           _this.foot13.alpha = 0;
           
           _this.foot13.name = "foot13";
           _this.foot13.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot13 "+target.name);
                if(target.name == "foot13")
                    {
                          _this.foot13.frame = 1;
                          _this.foot14.inputEnabled = true;
                          _this.foot14.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot14 = _this.add.sprite(669,352,'sg24_1_4_footstep5');
           _this.foot14.alpha = 0;
           
           _this.foot14.name = "foot14";
           _this.foot14.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot14 "+target.name);
                if(target.name == "foot14")
                    {
                          _this.foot14.frame = 1;
                          _this.foot15.inputEnabled = true;
                          _this.foot15.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot15 = _this.add.sprite(606,396,'sg24_1_4_footstep6');
             _this.foot15.angle = -45;
           _this.foot15.alpha = 0;
           
           _this.foot15.name = "foot15";
           _this.foot15.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot15 "+target.name);
                if(target.name == "foot15")
                    {
                          _this.foot15.frame = 1;
                          _this.foot16.inputEnabled = true;
                          _this.foot16.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           
            _this.foot16 = _this.add.sprite(556,447,'sg24_1_4_footstep5');
             _this.foot16.angle = -45;
           _this.foot16.alpha = 0;
          
           _this.foot16.name = "foot16";
           _this.foot16.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot16 "+target.name);
                if(target.name == "foot16")
                    {
                          _this.foot16.frame = 1;
                         _this.foot17.inputEnabled = true;
                         _this.foot17.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)    
            
         _this.foot17 = _this.add.sprite(490,439,'sg24_1_4_footstep6');
          _this.foot17.alpha = 0;
           _this.foot17.name = "foot17";
           _this.foot17.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot17 "+target.name);
                if(target.name == "foot17")
                    {
                          _this.foot17.frame = 1;
                          _this.foot18.inputEnabled = true;
                          _this.foot18.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this) 
           
           _this.foot18 = _this.add.sprite(455,394,'sg24_1_4_footstep8');
           _this.foot18.alpha = 0;
        
           _this.foot18.name = "foot18";
           _this.foot18.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot18 "+target.name);
                if(target.name == "foot18")
                    {
                          _this.foot18.frame = 1;
                          _this.foot19.inputEnabled = true;
                          _this.foot19.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot19 = _this.add.sprite(425,363,'sg24_1_4_footstep6');
         
           _this.foot19.alpha = 0;
           
           _this.foot19.name = "foot19";
           _this.foot19.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot19 "+target.name);
                if(target.name == "foot19")
                    {
                          _this.foot19.frame = 1;
                          _this.foot20.inputEnabled = true;
                          _this.foot20.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot20 = _this.add.sprite(390,407,'sg24_1_4_footstep5');
           _this.foot20.alpha = 0;
           
           _this.foot20.name = "foot20";
           _this.foot20.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot20 "+target.name);
                if(target.name == "foot20")
                    {
                          _this.foot20.frame = 1;
                          _this.foot21.inputEnabled = true;
                          _this.foot21.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
            _this.foot21 = _this.add.sprite(323,407,'sg24_1_4_footstep6');
           _this.foot21.alpha = 0;
           
           _this.foot21.name = "foot21";
           _this.foot21.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot21 "+target.name);
                if(target.name == "foot21")
                    {
                          _this.foot21.frame = 1;
                          _this.foot22.inputEnabled = true;
                          _this.foot22.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot22 = _this.add.sprite(276,450,'sg24_1_4_footstep5');
            _this.foot22.angle = -55;
           _this.foot22.alpha = 0;
          
           _this.foot22.name = "foot22";
           _this.foot22.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot22 "+target.name);
                if(target.name == "foot22")
                    {
                          _this.foot22.frame = 1;
                          _this.foot23.inputEnabled = true;
                          _this.foot23.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot23 = _this.add.sprite(208,432,'sg24_1_4_footstep6');
           _this.foot23.alpha = 0;
          
           _this.foot23.name = "foot23";
           _this.foot23.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot23 "+target.name);
                if(target.name == "foot23")
                    {
                          _this.foot23.frame = 1;
                          _this.foot24.inputEnabled = true;
                          _this.foot24.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot24 = _this.add.sprite(140,434,'sg24_1_4_footstep5');
           _this.foot24.alpha = 0;
          
           _this.foot24.name = "foot24";
           _this.foot24.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot24 "+target.name);
                if(target.name == "foot24")
                    {
                          _this.foot24.frame = 1;
                          _this.foot25.inputEnabled = true;
                           _this.foot25.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
            
            _this.foot25 = _this.add.sprite(103,382,'sg24_1_4_footstep6');
            _this.foot25.angle = 50;
           _this.foot25.alpha = 0;
          
           _this.foot25.name = "foot25";
           _this.foot25.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot25 "+target.name);
                if(target.name == "foot25")
                    {
                          _this.foot25.frame = 1;
                          _this.foot26.inputEnabled = true;
                          _this.foot26.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
             
            _this.foot26 = _this.add.sprite(68,319,'sg24_1_4_footstep8');
           _this.foot26.alpha = 0;
          
           _this.foot26.name = "foot26";
           _this.foot26.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot26 "+target.name);
                if(target.name == "foot26")
                    {
                          _this.foot26.frame = 1;
                          _this.foot27.inputEnabled = true;
                          _this.foot27.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
           //////
           
               _this.foot27 = _this.add.sprite(68,245,'sg24_1_4_footstep7');
           _this.foot27.alpha = 0;
           _this.foot27.name = "foot27";
           _this.foot27.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot27 "+target.name);
                if(target.name == "foot27")
                    {
                          _this.foot27.frame = 1;
                          _this.foot28.inputEnabled = true;
                          _this.foot28.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot28 = _this.add.sprite(68,172,'sg24_1_4_footstep8');
           _this.foot28.alpha = 0;
           
           _this.foot28.name = "foot28";
           _this.foot28.events.onInputDown.add(function(target)
              {
                _this.clickSound.play();
                 console.log("foot28 "+target.name);
                if(target.name == "foot28")
                    {
                          _this.foot28.frame = 1;
                          _this.foot29.inputEnabled = true;
                          _this.foot29.alpha = 1;
                         target.events.onInputDown.removeAll();
                     
                    
                    }
              },this)
           
             _this.foot29 = _this.add.sprite(115,101,'sg24_1_4_footstep7');
             _this.foot29.angle = 43;
          _this.foot29.alpha = 0;
           
           _this.foot29.name = "foot29";
           _this.foot29.events.onInputDown.add(function(target)
              { 
                _this.clickSound.play();
                 console.log("foot29 "+target.name);
                if(target.name == "foot29")
                    {
                          _this.foot29.frame = 1;
                        _this.addNumberPad();
                         target.events.onInputDown.removeAll();
                          
                    
                    }
              },this)
           ////********
           
          
   
        
           
            _this.rightAns = 29;
        
          _this.group1.add(_this.foot1);
          _this.group2.add(_this.foot2);
          _this.group2.add(_this.foot3);
          _this.group2.add(_this.foot4);
          _this.group2.add(_this.foot5);
          _this.group2.add(_this.foot6);
          _this.group2.add(_this.foot7);
          _this.group2.add(_this.foot8);
          _this.group2.add(_this.foot9);
          _this.group2.add(_this.foot10);
          _this.group2.add(_this.foot11);
          _this.group2.add(_this.foot12);
          _this.group2.add(_this.foot13);
          _this.group2.add(_this.foot14);
          _this.group2.add(_this.foot15);
          _this.group2.add(_this.foot16);
          _this.group2.add(_this.foot17);
          _this.group2.add(_this.foot18);
          _this.group2.add(_this.foot19);
          _this.group2.add(_this.foot20);
          _this.group2.add(_this.foot21);
          _this.group2.add(_this.foot22);
          _this.group2.add(_this.foot23);
          _this.group2.add(_this.foot24);
          _this.group2.add(_this.foot25);
          _this.group2.add(_this.foot26);
          _this.group2.add(_this.foot27);
            _this.group2.add(_this.foot28);
           _this.group2.add(_this.foot29);
       
      },
    
  addNumberPad:function(){
        //_this.snapSound.play();
        _this.numGroup = _this.add.group();
       _this.sg16_2_4_footer = _this.add.sprite(0,475,'sg16_2_4_footer');
        _this.numGroup.add(_this.sg16_2_4_footer);
        var x = 100;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'sg16_2_4_calNum'); 
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
        
        
        _this.counterText = _this.add.text(37,36, _this.selectedAns="");
        _this.counterText.anchor.setTo(0.5);
        _this.counterText.align = 'center';
        _this.counterText.font = 'myfont';
        _this.counterText.fontSize = 45;
        _this.counterText.fontWeight = 'normal';
        _this.counterText.fill = '#65B4C3';
        _this.counterText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box.addChild(_this.counterText);
        
        
        
     //   txtbox = _this.add.sprite(x+50,508,'sg16_2_4_box');
     //   txtbox.anchor.setTo(0.5);
      //  txtbox.name = "txtbox";
        
        _this.wrongbtn = _this.numGroup.create(x+10,510,'sg24_1_4_EraseButton');
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

        _this.rightbtn =_this.numGroup.create(x+70,510,'sg24_1_4_RightButton');
        _this.rightbtn.anchor.setTo(0.5);
      
        //_this.rightbtn.scale.setTo(0.5,0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.events.onInputDown.add(function(){
              _this.clickSound.play();
              _this.noofAttempts++;
              console.log(_this.selectedAns);
            console.log(_this.rightAns);
              _this.rightbtn.frame=1;
            _this.time.events.add(1000,function(){
                _this.rightbtn.frame = 0;
            },this);
            if(_this.selectedAns==_this.rightAns||_this.selectedAns==""+_this.rightAns)  
                {
                  _this.rightbtn.events.onInputDown.removeAll();
                    console.log("correct");
                    _this.group2.setAll("frame",1);
                    
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
                        _this.group2.setAll("frame",0);
                     },this);
         
                    
                   //  _this.celebr = __this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                    _this.time.events.add(1000, function(){_this.removeCelebration(); 
                                                          },_this);

                    if(_this.timer)
                    {
                        _this.timer.stop();
                        _this.timer = null;
                    }
                    _this.questionid = 1;
                    telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
            
                }
            else
                {
                   
                     console.log("wrong");
                    _this.selectedAns = "";
                    _this.counterText.setText("");
                    _this.shake.shake(10, _this.box);
                 //   _this.wmusic = __this.add.audio('waudio');
		            _this.waudio.play(); 
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

            console.log("option1 "+_this.selectedAns);
            if(_this.selectedAns.length<2)
            {

                _this.selectedAns+= target.name;
                console.log("third one");
                _this.counterText.setText(_this.selectedAns);
                //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                
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
                        
                        
                       
                        _this.group1.destroy();
                        _this.counterText.destroy();
                        _this.numGroup.destroy();
                        _this.group2.destroy();
                        _this.group3.destroy();
                        if(_this.group4)
                         {
                           _this.group4.destroy();
                         }
                        _this.selectedAns = "";
                        _this.getQuestion();
                    
                    }
        
                else
                    {
                         
                        // _this.stopvoice();
                         _this.state.start('sg24_1_4Score');
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
            case 7:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/English/sg24.1.4.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Hindi/sg24.1.4h.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Kannada/sg24.1.4k.mp3");
                    }
					           else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Gujarathi/sg24.1.4.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Marathi/sg24.1.4.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Telugu/sg24.1.4.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Tamil/sg24.1.4.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Urdu/sg24.1.4.mp3");
                    }
                    else
                    {
                      _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Odiya/sg24.1.4.mp3");
                    }
                    break;
            
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/English/sg24.1.4a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Hindi/sg24.1.4a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Kannada/sg24.1.4a.mp3");
                    }
					         else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Gujarathi/sg24.1.4a.mp3");
						//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Marathi/sg24.1.4a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Telugu/sg24.1.4a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Tamil/sg24.1.4a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Urdu/sg24.1.4a.mp3");
                    }
                    else
                    {
                      _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg24.1.4/Odiya/sg24.1.4.mp3");
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