Game.unity3_1_1alevel1=function(){};

Game.unity3_1_1alevel1.prototype={
    init:function(game)
    {
       _this = this;

       telInitializer.gameIdInit("unity3_1_1a",gradeSelected);
       
    },

create:function(game)
    {
          
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.rightmark;
        _this.background;
        _this.click1;
        _this.click2;
        _this.click4;
        _this.click5;
        _this.wmusic;
        _this.tapsound;
        _this.tinklesound;
        _this.clickSound;
        _this.starsGroup;
        _this.questioNo = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.enterTxt = null;
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.toCheckNumberPad = false;

        _this.sceneCount = 0;
        
        _this.correct=0;
        _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;
       
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity3_1_1backg');
        
        _this.topbar=_this.add.sprite(0,0,'Level321_navBar');
        _this.topbar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
        _this.backbtn.events.onInputDown.removeAll();
        _this.stopvoice();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
       
        _this.speaker = _this.add.button(600,6,'Level321_CommonSpeakerBtn');
        _this.speaker.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();

        },_this);
        
        _this.timerbg=_this.add.sprite(305,6,'Level321_timebg');
        _this.timerbg.scale.setTo(1,1);
        
        _this.timerDisplay = _this.add.text(330,22,_this.minutes + ' : '+_this.seconds);
        _this.timerDisplay.anchor.setTo(0.5);
        _this.timerDisplay.align = 'center';
        _this.timerDisplay.font = 'Oh Whale';
        _this.timerDisplay.fontSize = 20;
        _this.timerDisplay.fill = '#ADFF2F';
        
     /*   _this.dotbox=_this.add.sprite(70,7,'unity3_1_1dotbox');
        _this.txt1 = _this.add.text(45,17, 'PRACTICE');
        _this.txt1.anchor.setTo(0.5);
        _this.txt1.scale.setTo(1.2,1.2);
        _this.txt1.align = 'center';
        _this.txt1.font = 'Alte Haas Grotesk';
        _this.txt1.fontSize = 10;
        _this.txt1.fill = '#ffffff';
        _this.txt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.dotbox.addChild(_this.txt1);
        
        _this.txt2 = _this.add.text(230,24, 'Comparison');
        _this.txt2.anchor.setTo(0.5);
        _this.txt2.align = 'center';
        _this.txt2.font = 'Alte Haas Grotesk';
        _this.txt2.fontSize = 20;
        _this.txt2.fill = '#ffffff';
        _this.txt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
       */
        _this.generateStarsForTheScene(6);
        _this.getQuestion();  
          
    },

updateTimer:function() {
     _this.counterForTimer++;
    // ////console.log("lololil"+_this.counterForTimer);
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
      _this.timerDisplay.setText(_this.minutes+':' + _this.seconds);
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
         _this.stopvoice();
        _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount++;
        _this.toCheckNumberPad = true;
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
                         {
                            _this.AnsTimerCount++;
                           
                        }, _this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
      _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        
    	//console.log("get"+_this.no11);
        _this.speaker.inputEnabled=true;
        _this.speaker.input.useHandCursor = true;
        _this.questionid =1;
        
    	switch(_this.qArrays[_this.no11])
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
             /*case 7: _this.gotoSeventhQuestion();
    				  break;
             case 8: _this.gotoEighthQuestion();
    				  break;
             case 9: _this.gotoNinthQuestion();
    				  break; 
             case 10: _this.gotoTenthQuestion();
    				  break; 
           */
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
       
     
gotoFirstQuestion:function()
    {
        _this.getVoice();
        _this.questioNo = 1;
        
        _this.cube=10;
        
        _this.tbox =_this.add.sprite(240,260,'unity3_1_1tbox2');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 360,140);
        _this.graphics1.alpha= 0;
        
        _this.dragboxGrp1 = _this.add.group();
        
        _this.obj =_this.add.sprite(240,260,'unity3_1_1boxanim');
        _this.obj.anchor.setTo(0.5);
        _this.obj.scale.setTo(1.8,1.8); 
        _this.obj.visible=false;
        _this.obj.frame=0;
        
        _this.dragboxGrp1.add(_this.obj);
        
        _this.boxGrp= _this.add.group();
        
        _this.box1 =_this.add.sprite(630,230,'unity3_1_1box');
        _this.box1.anchor.setTo(0.5);
        _this.box1.scale.setTo(1.8,1.8);
        _this.box1.frame=1;
        
        _this.box2 =_this.add.sprite(690,230,'unity3_1_1box');
        _this.box2.anchor.setTo(0.5);
        _this.box2.scale.setTo(1.8,1.8);
        _this.box2.frame=1;
        
        _this.box3 =_this.add.sprite(750,230,'unity3_1_1box');
        _this.box3.anchor.setTo(0.5);
        _this.box3.scale.setTo(1.8,1.8);
        _this.box3.frame=1;
        
        _this.box4 =_this.add.sprite(810,230,'unity3_1_1box');
        _this.box4.anchor.setTo(0.5);
        _this.box4.scale.setTo(1.8,1.8);
        _this.box4.frame=1;
        
        _this.box5 =_this.add.sprite(870,230,'unity3_1_1box');
        _this.box5.anchor.setTo(0.5);
        _this.box5.scale.setTo(1.8,1.8);
        _this.box5.frame=1;
        
        _this.box6 =_this.add.sprite(630,300,'unity3_1_1box');
        _this.box6.anchor.setTo(0.5);
        _this.box6.scale.setTo(1.8,1.8);
        _this.box6.frame=1;
        
        _this.box7 =_this.add.sprite(690,300,'unity3_1_1box');
        _this.box7.anchor.setTo(0.5);
        _this.box7.scale.setTo(1.8,1.8);
        _this.box7.frame=1;
        
        _this.box8 =_this.add.sprite(750,300,'unity3_1_1box');
        _this.box8.anchor.setTo(0.5);
        _this.box8.scale.setTo(1.8,1.8);
        _this.box8.frame=1;
        
        _this.box9 =_this.add.sprite(810,300,'unity3_1_1box');
        _this.box9.anchor.setTo(0.5);
        _this.box9.scale.setTo(1.8,1.8);
        _this.box9.frame=1;
        
        _this.box10 =_this.add.sprite(870,300,'unity3_1_1box');
        _this.box10.anchor.setTo(0.5);
        _this.box10.scale.setTo(1.8,1.8);
        _this.box10.frame=1;
        
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
        _this.boxGrp.add(_this.box3);
        _this.boxGrp.add(_this.box4);
        _this.boxGrp.add(_this.box5);
        _this.boxGrp.add(_this.box6);
        _this.boxGrp.add(_this.box7);
        _this.boxGrp.add(_this.box8);
        _this.boxGrp.add(_this.box9);
        _this.boxGrp.add(_this.box10);
        
        _this.dragboxGrp = _this.add.group();
        
        _this.dragbox1 =_this.add.sprite(630,230,'unity3_1_1box');
        _this.dragbox1.anchor.setTo(0.5); 
        _this.dragbox1.scale.setTo(1.8,1.8);
        _this.dragbox1.frame=0;
        _this.dragbox1.name="box1";
        _this.dragbox1.inputEnabled = true;
        _this.dragbox1.input.useHandCursor = true;
        _this.dragbox1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox2 =_this.add.sprite(690,230,'unity3_1_1box');
        _this.dragbox2.anchor.setTo(0.5);
        _this.dragbox2.scale.setTo(1.8,1.8);
        _this.dragbox2.frame=0;
        _this.dragbox2.name="box2";
        _this.dragbox2.inputEnabled = true;
        _this.dragbox2.input.useHandCursor = true;
        _this.dragbox2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox3 =_this.add.sprite(750,230,'unity3_1_1box');
        _this.dragbox3.anchor.setTo(0.5);
        _this.dragbox3.scale.setTo(1.8,1.8);
        _this.dragbox3.frame=0;
        _this.dragbox3.name="box3";
        _this.dragbox3.inputEnabled = true;
        _this.dragbox3.input.useHandCursor = true;
        _this.dragbox3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox4 =_this.add.sprite(810,230,'unity3_1_1box');
        _this.dragbox4.anchor.setTo(0.5);
        _this.dragbox4.scale.setTo(1.8,1.8);
        _this.dragbox4.frame=0;
        _this.dragbox4.name="box4";
        _this.dragbox4.inputEnabled = true;
        _this.dragbox4.input.useHandCursor = true;
        _this.dragbox4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox5 =_this.add.sprite(870,230,'unity3_1_1box');
        _this.dragbox5.anchor.setTo(0.5);
        _this.dragbox5.scale.setTo(1.8,1.8);
        _this.dragbox5.frame=0;
        _this.dragbox5.name="box5";
        _this.dragbox5.inputEnabled = true;
        _this.dragbox5.input.useHandCursor = true;
        _this.dragbox5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox6 =_this.add.sprite(630,300,'unity3_1_1box');
        _this.dragbox6.anchor.setTo(0.5);
        _this.dragbox6.scale.setTo(1.8,1.8);
        _this.dragbox6.frame=0;
        _this.dragbox6.name="box6";
        _this.dragbox6.inputEnabled = true;
        _this.dragbox6.input.useHandCursor = true;
        _this.dragbox6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox7 =_this.add.sprite(690,300,'unity3_1_1box');
        _this.dragbox7.anchor.setTo(0.5);
        _this.dragbox7.scale.setTo(1.8,1.8);
        _this.dragbox7.frame=0;
        _this.dragbox7.name="box7";
        _this.dragbox7.inputEnabled = true;
        _this.dragbox7.input.useHandCursor = true;
        _this.dragbox7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox8 =_this.add.sprite(750,300,'unity3_1_1box');
        _this.dragbox8.anchor.setTo(0.5);
        _this.dragbox8.scale.setTo(1.8,1.8);
        _this.dragbox8.frame=0;
        _this.dragbox8.name="box8";
        _this.dragbox8.inputEnabled = true;
        _this.dragbox8.input.useHandCursor = true;
        _this.dragbox8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox9 =_this.add.sprite(810,300,'unity3_1_1box');
        _this.dragbox9.anchor.setTo(0.5);
        _this.dragbox9.scale.setTo(1.8,1.8);
        _this.dragbox9.frame=0;
        _this.dragbox9.name="box9";
        _this.dragbox9.inputEnabled = true;
        _this.dragbox9.input.useHandCursor = true;
        _this.dragbox9.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox10 =_this.add.sprite(870,300,'unity3_1_1box');
        _this.dragbox10.anchor.setTo(0.5);
        _this.dragbox10.scale.setTo(1.8,1.8);
        _this.dragbox10.frame=0;
        _this.dragbox10.name="box10";
        _this.dragbox10.inputEnabled = true;
        _this.dragbox10.input.useHandCursor = true;
        _this.dragbox10.events.onInputDown.add(_this.onDragStart,_this);
        
         _this.dragboxGrp.add(_this.dragbox1);
         _this.dragboxGrp.add(_this.dragbox2);
         _this.dragboxGrp.add(_this.dragbox3);
         _this.dragboxGrp.add(_this.dragbox4);
         _this.dragboxGrp.add(_this.dragbox5);
         _this.dragboxGrp.add(_this.dragbox6);
         _this.dragboxGrp.add(_this.dragbox7);
         _this.dragboxGrp.add(_this.dragbox8);
         _this.dragboxGrp.add(_this.dragbox9);
         _this.dragboxGrp.add(_this.dragbox10);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_1scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_1ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_1ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_1numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_1numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="10";
        _this.dbox1 =_this.add.sprite(630,300,'unity3_1_1box');
        _this.dbox1.anchor.setTo(0.5); 
        _this.dbox1.scale.setTo(1.8,1.8);
        _this.dbox1.frame=0;
        
         _this.hand = _this.add.sprite(630,300,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dbox1);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dbox1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dbox1.destroy();
            },this);
            },this);
            },this);
            
},
    

    
gotoSecondQuestion:function(){
    
         _this.getVoice();
         _this.questioNo = 2;
         _this.cube=10;
         _this.cube1=20;
    
        _this.tbox =_this.add.sprite(240,260,'unity3_1_1tbox2');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 360,140);
        _this.graphics1.alpha= 0;
        
         
        _this.dragboxGrp1 = _this.add.group();
        
        _this.obj =_this.add.sprite(240,230,'unity3_1_1boxanim');
        _this.obj.anchor.setTo(0.5);
        _this.obj.scale.setTo(1.8,1.8); 
        _this.obj.visible=false;
        _this.obj.frame=0;
        
        _this.obj1 =_this.add.sprite(240,260,'unity3_1_1boxanim');
        _this.obj1.anchor.setTo(0.5);
        _this.obj1.scale.setTo(1.8,1.8); 
        _this.obj1.visible=false;
        _this.obj1.frame=0;
    
        _this.dragboxGrp1.add(_this.obj);
        _this.dragboxGrp1.add(_this.obj1);
       
         _this.boxGrp= _this.add.group();
    
        _this.box1 =_this.add.sprite(630,120,'unity3_1_1box');
        _this.box1.anchor.setTo(0.5);
        _this.box1.scale.setTo(1.8,1.8);
        _this.box1.frame=1;
        
        _this.box2 =_this.add.sprite(690,120,'unity3_1_1box');
        _this.box2.anchor.setTo(0.5);
        _this.box2.scale.setTo(1.8,1.8);
        _this.box2.frame=1;
        
        _this.box3 =_this.add.sprite(750,120,'unity3_1_1box');
        _this.box3.anchor.setTo(0.5);
        _this.box3.scale.setTo(1.8,1.8);
        _this.box3.frame=1;
        
        _this.box4 =_this.add.sprite(810,120,'unity3_1_1box');
        _this.box4.anchor.setTo(0.5);
        _this.box4.scale.setTo(1.8,1.8);
        _this.box4.frame=1;
        
        _this.box5 =_this.add.sprite(870,120,'unity3_1_1box');
        _this.box5.anchor.setTo(0.5);
        _this.box5.scale.setTo(1.8,1.8);
        _this.box5.frame=1;
        
        _this.box6 =_this.add.sprite(630,190,'unity3_1_1box');
        _this.box6.anchor.setTo(0.5);
        _this.box6.scale.setTo(1.8,1.8);
        _this.box6.frame=1;
        
        _this.box7 =_this.add.sprite(690,190,'unity3_1_1box');
        _this.box7.anchor.setTo(0.5);
        _this.box7.scale.setTo(1.8,1.8);
        _this.box7.frame=1;
        
        _this.box8 =_this.add.sprite(750,190,'unity3_1_1box');
        _this.box8.anchor.setTo(0.5);
        _this.box8.scale.setTo(1.8,1.8);
        _this.box8.frame=1;
        
        _this.box9 =_this.add.sprite(810,190,'unity3_1_1box');
        _this.box9.anchor.setTo(0.5);
        _this.box9.scale.setTo(1.8,1.8);
        _this.box9.frame=1;
        
        _this.box10 =_this.add.sprite(870,190,'unity3_1_1box');
        _this.box10.anchor.setTo(0.5);
        _this.box10.scale.setTo(1.8,1.8);
        _this.box10.frame=1;
    
        _this.box11 =_this.add.sprite(630,260,'unity3_1_1box');
        _this.box11.anchor.setTo(0.5);
        _this.box11.scale.setTo(1.8,1.8);
        _this.box11.frame=1;
        
        _this.box12 =_this.add.sprite(690,260,'unity3_1_1box');
        _this.box12.anchor.setTo(0.5);
        _this.box12.scale.setTo(1.8,1.8);
        _this.box12.frame=1;
        
        _this.box13 =_this.add.sprite(750,260,'unity3_1_1box');
        _this.box13.anchor.setTo(0.5);
        _this.box13.scale.setTo(1.8,1.8);
        _this.box13.frame=1;
        
        _this.box14 =_this.add.sprite(810,260,'unity3_1_1box');
        _this.box14.anchor.setTo(0.5);
        _this.box14.scale.setTo(1.8,1.8);
        _this.box14.frame=1;
        
        _this.box15 =_this.add.sprite(870,260,'unity3_1_1box');
        _this.box15.anchor.setTo(0.5);
        _this.box15.scale.setTo(1.8,1.8);
        _this.box15.frame=1;
        
        _this.box16 =_this.add.sprite(630,330,'unity3_1_1box');
        _this.box16.anchor.setTo(0.5);
        _this.box16.scale.setTo(1.8,1.8);
        _this.box16.frame=1;
        
        _this.box17 =_this.add.sprite(690,330,'unity3_1_1box');
        _this.box17.anchor.setTo(0.5);
        _this.box17.scale.setTo(1.8,1.8);
        _this.box17.frame=1;
        
        _this.box18 =_this.add.sprite(750,330,'unity3_1_1box');
        _this.box18.anchor.setTo(0.5);
        _this.box18.scale.setTo(1.8,1.8);
        _this.box18.frame=1;
        
        _this.box19 =_this.add.sprite(810,330,'unity3_1_1box');
        _this.box19.anchor.setTo(0.5);
        _this.box19.scale.setTo(1.8,1.8);
        _this.box19.frame=1;
        
        _this.box20 =_this.add.sprite(870,330,'unity3_1_1box');
        _this.box20.anchor.setTo(0.5);
        _this.box20.scale.setTo(1.8,1.8);
        _this.box20.frame=1;
    
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
        _this.boxGrp.add(_this.box3);
        _this.boxGrp.add(_this.box4);
        _this.boxGrp.add(_this.box5);
        _this.boxGrp.add(_this.box6);
        _this.boxGrp.add(_this.box7);
        _this.boxGrp.add(_this.box8);
        _this.boxGrp.add(_this.box9);
        _this.boxGrp.add(_this.box10);
        _this.boxGrp.add(_this.box11);
        _this.boxGrp.add(_this.box12);
        _this.boxGrp.add(_this.box13);
        _this.boxGrp.add(_this.box14);
        _this.boxGrp.add(_this.box15);
        _this.boxGrp.add(_this.box16);
        _this.boxGrp.add(_this.box17);
        _this.boxGrp.add(_this.box18);
        _this.boxGrp.add(_this.box19);
        _this.boxGrp.add(_this.box20);
        
         _this.dragboxGrp = _this.add.group();
        
        _this.dragbox1 =_this.add.sprite(630,120,'unity3_1_1box');
        _this.dragbox1.anchor.setTo(0.5); 
        _this.dragbox1.scale.setTo(1.8,1.8);
        _this.dragbox1.frame=0;
        _this.dragbox1.name="box1";
        _this.dragbox1.inputEnabled = true;
        _this.dragbox1.input.useHandCursor = true;
        _this.dragbox1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox2 =_this.add.sprite(690,120,'unity3_1_1box');
        _this.dragbox2.anchor.setTo(0.5);
        _this.dragbox2.scale.setTo(1.8,1.8);
        _this.dragbox2.frame=0;
        _this.dragbox2.name="box2";
        _this.dragbox2.inputEnabled = true;
        _this.dragbox2.input.useHandCursor = true;
        _this.dragbox2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox3 =_this.add.sprite(750,120,'unity3_1_1box');
        _this.dragbox3.anchor.setTo(0.5);
        _this.dragbox3.scale.setTo(1.8,1.8);
        _this.dragbox3.frame=0;
        _this.dragbox3.name="box3";
        _this.dragbox3.inputEnabled = true;
        _this.dragbox3.input.useHandCursor = true;
        _this.dragbox3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox4 =_this.add.sprite(810,120,'unity3_1_1box');
        _this.dragbox4.anchor.setTo(0.5);
        _this.dragbox4.scale.setTo(1.8,1.8);
        _this.dragbox4.frame=0;
        _this.dragbox4.name="box4";
        _this.dragbox4.inputEnabled = true;
        _this.dragbox4.input.useHandCursor = true;
        _this.dragbox4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox5 =_this.add.sprite(870,120,'unity3_1_1box');
        _this.dragbox5.anchor.setTo(0.5);
        _this.dragbox5.scale.setTo(1.8,1.8);
        _this.dragbox5.frame=0;
        _this.dragbox5.name="box5";
        _this.dragbox5.inputEnabled = true;
        _this.dragbox5.input.useHandCursor = true;
        _this.dragbox5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox6 =_this.add.sprite(630,190,'unity3_1_1box');
        _this.dragbox6.anchor.setTo(0.5);
        _this.dragbox6.scale.setTo(1.8,1.8);
        _this.dragbox6.frame=0;
        _this.dragbox6.name="box6";
        _this.dragbox6.inputEnabled = true;
        _this.dragbox6.input.useHandCursor = true;
        _this.dragbox6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox7 =_this.add.sprite(690,190,'unity3_1_1box');
        _this.dragbox7.anchor.setTo(0.5);
        _this.dragbox7.scale.setTo(1.8,1.8);
        _this.dragbox7.frame=0;
        _this.dragbox7.name="box7";
        _this.dragbox7.inputEnabled = true;
        _this.dragbox7.input.useHandCursor = true;
        _this.dragbox7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox8 =_this.add.sprite(750,190,'unity3_1_1box');
        _this.dragbox8.anchor.setTo(0.5);
        _this.dragbox8.scale.setTo(1.8,1.8);
        _this.dragbox8.frame=0;
        _this.dragbox8.name="box8";
        _this.dragbox8.inputEnabled = true;
        _this.dragbox8.input.useHandCursor = true;
        _this.dragbox8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox9 =_this.add.sprite(810,190,'unity3_1_1box');
        _this.dragbox9.anchor.setTo(0.5);
        _this.dragbox9.scale.setTo(1.8,1.8);
        _this.dragbox9.frame=0;
        _this.dragbox9.name="box9";
        _this.dragbox9.inputEnabled = true;
        _this.dragbox9.input.useHandCursor = true;
        _this.dragbox9.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox10 =_this.add.sprite(870,190,'unity3_1_1box');
        _this.dragbox10.anchor.setTo(0.5);
        _this.dragbox10.scale.setTo(1.8,1.8);
        _this.dragbox10.frame=0;
        _this.dragbox10.name="box10";
        _this.dragbox10.inputEnabled = true;
        _this.dragbox10.input.useHandCursor = true;
        _this.dragbox10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox11 =_this.add.sprite(630,260,'unity3_1_1box');
        _this.dragbox11.anchor.setTo(0.5); 
        _this.dragbox11.scale.setTo(1.8,1.8);
        _this.dragbox11.frame=0;
        _this.dragbox11.name="box11";
        _this.dragbox11.inputEnabled = true;
        _this.dragbox11.input.useHandCursor = true;
        _this.dragbox11.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox12 =_this.add.sprite(690,260,'unity3_1_1box');
        _this.dragbox12.anchor.setTo(0.5);
        _this.dragbox12.scale.setTo(1.8,1.8);
        _this.dragbox12.frame=0;
        _this.dragbox12.name="box12";
        _this.dragbox12.inputEnabled = true;
        _this.dragbox12.input.useHandCursor = true;
        _this.dragbox12.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox13 =_this.add.sprite(750,260,'unity3_1_1box');
        _this.dragbox13.anchor.setTo(0.5);
        _this.dragbox13.scale.setTo(1.8,1.8);
        _this.dragbox13.frame=0;
        _this.dragbox13.name="box13";
        _this.dragbox13.inputEnabled = true;
        _this.dragbox13.input.useHandCursor = true;
        _this.dragbox13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox14 =_this.add.sprite(810,260,'unity3_1_1box');
        _this.dragbox14.anchor.setTo(0.5);
        _this.dragbox14.scale.setTo(1.8,1.8);
        _this.dragbox14.frame=0;
        _this.dragbox14.name="box14";
        _this.dragbox14.inputEnabled = true;
        _this.dragbox14.input.useHandCursor = true;
        _this.dragbox14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox15 =_this.add.sprite(870,260,'unity3_1_1box');
        _this.dragbox15.anchor.setTo(0.5);
        _this.dragbox15.scale.setTo(1.8,1.8);
        _this.dragbox15.frame=0;
        _this.dragbox15.name="box15";
        _this.dragbox15.inputEnabled = true;
        _this.dragbox15.input.useHandCursor = true;
        _this.dragbox15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox16 =_this.add.sprite(630,330,'unity3_1_1box');
        _this.dragbox16.anchor.setTo(0.5);
        _this.dragbox16.scale.setTo(1.8,1.8);
        _this.dragbox16.frame=0;
        _this.dragbox16.name="box16";
        _this.dragbox16.inputEnabled = true;
        _this.dragbox16.input.useHandCursor = true;
        _this.dragbox16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox17 =_this.add.sprite(690,330,'unity3_1_1box');
        _this.dragbox17.anchor.setTo(0.5);
        _this.dragbox17.scale.setTo(1.8,1.8);
        _this.dragbox17.frame=0;
        _this.dragbox17.name="box17";
        _this.dragbox17.inputEnabled = true;
        _this.dragbox17.input.useHandCursor = true;
        _this.dragbox17.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox18 =_this.add.sprite(750,330,'unity3_1_1box');
        _this.dragbox18.anchor.setTo(0.5);
        _this.dragbox18.scale.setTo(1.8,1.8);
        _this.dragbox18.frame=0;
        _this.dragbox18.name="box18";
        _this.dragbox18.inputEnabled = true;
        _this.dragbox18.input.useHandCursor = true;
        _this.dragbox18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox19 =_this.add.sprite(810,330,'unity3_1_1box');
        _this.dragbox19.anchor.setTo(0.5);
        _this.dragbox19.scale.setTo(1.8,1.8);
        _this.dragbox19.frame=0;
        _this.dragbox19.name="box19";
        _this.dragbox19.inputEnabled = true;
        _this.dragbox19.input.useHandCursor = true;
        _this.dragbox19.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox20 =_this.add.sprite(870,330,'unity3_1_1box');
        _this.dragbox20.anchor.setTo(0.5);
        _this.dragbox20.scale.setTo(1.8,1.8);
        _this.dragbox20.frame=0;
        _this.dragbox20.name="box20";
        _this.dragbox20.inputEnabled = true;
        _this.dragbox20.input.useHandCursor = true;
        _this.dragbox20.events.onInputDown.add(_this.onDragStart,_this);
        
         _this.dragboxGrp.add(_this.dragbox1);
         _this.dragboxGrp.add(_this.dragbox2);
         _this.dragboxGrp.add(_this.dragbox3);
         _this.dragboxGrp.add(_this.dragbox4);
         _this.dragboxGrp.add(_this.dragbox5);
         _this.dragboxGrp.add(_this.dragbox6);
         _this.dragboxGrp.add(_this.dragbox7);
         _this.dragboxGrp.add(_this.dragbox8);
         _this.dragboxGrp.add(_this.dragbox9);
         _this.dragboxGrp.add(_this.dragbox10);
         _this.dragboxGrp.add(_this.dragbox11);
         _this.dragboxGrp.add(_this.dragbox12);
         _this.dragboxGrp.add(_this.dragbox13);
         _this.dragboxGrp.add(_this.dragbox14);
         _this.dragboxGrp.add(_this.dragbox15);
         _this.dragboxGrp.add(_this.dragbox16);
         _this.dragboxGrp.add(_this.dragbox17);
         _this.dragboxGrp.add(_this.dragbox18);
         _this.dragboxGrp.add(_this.dragbox19);
         _this.dragboxGrp.add(_this.dragbox20);
         
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_1scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_1ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_1ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
    
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_1numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_1numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
    
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);

        _this.rightAns="20";
        _this.dbox1 =_this.add.sprite(630,330,'unity3_1_1box');
        _this.dbox1.anchor.setTo(0.5); 
        _this.dbox1.scale.setTo(1.8,1.8);
        _this.dbox1.frame=0;
        
         _this.hand = _this.add.sprite(630,330,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dbox1);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dbox1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dbox1.destroy();
            },this);
            },this);
            },this);
     
},
    
gotoThirdQuestion:function(){
    
         _this.getVoice();
        _this.questioNo = 3;
    
        _this.cube=10;
        _this.cube1=20;
        _this.cube2=30;
      
        _this.tbox =_this.add.sprite(240,260,'unity3_1_1tbox2');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.3); 
    
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 360,140);
        _this.graphics1.alpha= 0;
        
          
        _this.dragboxGrp1 = _this.add.group();
        
        _this.obj =_this.add.sprite(240,220,'unity3_1_1boxanim');
        _this.obj.anchor.setTo(0.5);
        _this.obj.scale.setTo(1.8,1.8); 
        _this.obj.visible=false;
        _this.obj.frame=0;
        
        _this.obj1 =_this.add.sprite(240,250,'unity3_1_1boxanim');
        _this.obj1.anchor.setTo(0.5);
        _this.obj1.scale.setTo(1.8,1.8); 
        _this.obj1.visible=false;
        _this.obj1.frame=0;
    
        _this.obj2 =_this.add.sprite(240,280,'unity3_1_1boxanim');
        _this.obj2.anchor.setTo(0.5);
        _this.obj2.scale.setTo(1.8,1.8); 
        _this.obj2.visible=false;
        _this.obj2.frame=0;
    
        _this.dragboxGrp1.add(_this.obj);
        _this.dragboxGrp1.add(_this.obj1);
        _this.dragboxGrp1.add(_this.obj2);
    
        _this.boxGrp= _this.add.group();
    
        _this.box1 =_this.add.sprite(630,120,'unity3_1_1box');
        _this.box1.anchor.setTo(0.5);
        _this.box1.scale.setTo(1.8,1.8);
        _this.box1.frame=1;
        
        _this.box2 =_this.add.sprite(690,120,'unity3_1_1box');
        _this.box2.anchor.setTo(0.5);
        _this.box2.scale.setTo(1.8,1.8);
        _this.box2.frame=1;
        
        _this.box3 =_this.add.sprite(750,120,'unity3_1_1box');
        _this.box3.anchor.setTo(0.5);
        _this.box3.scale.setTo(1.8,1.8);
        _this.box3.frame=1;
        
        _this.box4 =_this.add.sprite(810,120,'unity3_1_1box');
        _this.box4.anchor.setTo(0.5);
        _this.box4.scale.setTo(1.8,1.8);
        _this.box4.frame=1;
        
        _this.box5 =_this.add.sprite(870,120,'unity3_1_1box');
        _this.box5.anchor.setTo(0.5);
        _this.box5.scale.setTo(1.8,1.8);
        _this.box5.frame=1;
        
        _this.box6 =_this.add.sprite(630,190,'unity3_1_1box');
        _this.box6.anchor.setTo(0.5);
        _this.box6.scale.setTo(1.8,1.8);
        _this.box6.frame=1;
        
        _this.box7 =_this.add.sprite(690,190,'unity3_1_1box');
        _this.box7.anchor.setTo(0.5);
        _this.box7.scale.setTo(1.8,1.8);
        _this.box7.frame=1;
        
        _this.box8 =_this.add.sprite(750,190,'unity3_1_1box');
        _this.box8.anchor.setTo(0.5);
        _this.box8.scale.setTo(1.8,1.8);
        _this.box8.frame=1;
        
        _this.box9 =_this.add.sprite(810,190,'unity3_1_1box');
        _this.box9.anchor.setTo(0.5);
        _this.box9.scale.setTo(1.8,1.8);
        _this.box9.frame=1;
        
        _this.box10 =_this.add.sprite(870,190,'unity3_1_1box');
        _this.box10.anchor.setTo(0.5);
        _this.box10.scale.setTo(1.8,1.8);
        _this.box10.frame=1;
    
        _this.box11 =_this.add.sprite(630,260,'unity3_1_1box');
        _this.box11.anchor.setTo(0.5);
        _this.box11.scale.setTo(1.8,1.8);
        _this.box11.frame=1;
        
        _this.box12 =_this.add.sprite(690,260,'unity3_1_1box');
        _this.box12.anchor.setTo(0.5);
        _this.box12.scale.setTo(1.8,1.8);
        _this.box12.frame=1;
        
        _this.box13 =_this.add.sprite(750,260,'unity3_1_1box');
        _this.box13.anchor.setTo(0.5);
        _this.box13.scale.setTo(1.8,1.8);
        _this.box13.frame=1;
        
        _this.box14 =_this.add.sprite(810,260,'unity3_1_1box');
        _this.box14.anchor.setTo(0.5);
        _this.box14.scale.setTo(1.8,1.8);
        _this.box14.frame=1;
        
        _this.box15 =_this.add.sprite(870,260,'unity3_1_1box');
        _this.box15.anchor.setTo(0.5);
        _this.box15.scale.setTo(1.8,1.8);
        _this.box15.frame=1;
        
        _this.box16 =_this.add.sprite(630,330,'unity3_1_1box');
        _this.box16.anchor.setTo(0.5);
        _this.box16.scale.setTo(1.8,1.8);
        _this.box16.frame=1;
        
        _this.box17 =_this.add.sprite(690,330,'unity3_1_1box');
        _this.box17.anchor.setTo(0.5);
        _this.box17.scale.setTo(1.8,1.8);
        _this.box17.frame=1;
        
        _this.box18 =_this.add.sprite(750,330,'unity3_1_1box');
        _this.box18.anchor.setTo(0.5);
        _this.box18.scale.setTo(1.8,1.8);
        _this.box18.frame=1;
        
        _this.box19 =_this.add.sprite(810,330,'unity3_1_1box');
        _this.box19.anchor.setTo(0.5);
        _this.box19.scale.setTo(1.8,1.8);
        _this.box19.frame=1;
        
        _this.box20 =_this.add.sprite(870,330,'unity3_1_1box');
        _this.box20.anchor.setTo(0.5);
        _this.box20.scale.setTo(1.8,1.8);
        _this.box20.frame=1;
    
        _this.box21 =_this.add.sprite(630,400,'unity3_1_1box');
        _this.box21.anchor.setTo(0.5);
        _this.box21.scale.setTo(1.8,1.8);
        _this.box21.frame=1;
        
        _this.box22 =_this.add.sprite(690,400,'unity3_1_1box');
        _this.box22.anchor.setTo(0.5);
        _this.box22.scale.setTo(1.8,1.8);
        _this.box22.frame=1;
        
        _this.box23 =_this.add.sprite(750,400,'unity3_1_1box');
        _this.box23.anchor.setTo(0.5);
        _this.box23.scale.setTo(1.8,1.8);
        _this.box23.frame=1;
        
        _this.box24 =_this.add.sprite(810,400,'unity3_1_1box');
        _this.box24.anchor.setTo(0.5);
        _this.box24.scale.setTo(1.8,1.8);
        _this.box24.frame=1;
        
        _this.box25 =_this.add.sprite(870,400,'unity3_1_1box');
        _this.box25.anchor.setTo(0.5);
        _this.box25.scale.setTo(1.8,1.8);
        _this.box25.frame=1;
        
        _this.box26 =_this.add.sprite(630,470,'unity3_1_1box');
        _this.box26.anchor.setTo(0.5);
        _this.box26.scale.setTo(1.8,1.8);
        _this.box26.frame=1;
        
        _this.box27 =_this.add.sprite(690,470,'unity3_1_1box');
        _this.box27.anchor.setTo(0.5);
        _this.box27.scale.setTo(1.8,1.8);
        _this.box27.frame=1;
        
        _this.box28 =_this.add.sprite(750,470,'unity3_1_1box');
        _this.box28.anchor.setTo(0.5);
        _this.box28.scale.setTo(1.8,1.8);
        _this.box28.frame=1;
        
        _this.box29 =_this.add.sprite(810,470,'unity3_1_1box');
        _this.box29.anchor.setTo(0.5);
        _this.box29.scale.setTo(1.8,1.8);
        _this.box29.frame=1;
        
        _this.box30 =_this.add.sprite(870,470,'unity3_1_1box');
        _this.box30.anchor.setTo(0.5);
        _this.box30.scale.setTo(1.8,1.8);
        _this.box30.frame=1;
    
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
        _this.boxGrp.add(_this.box3);
        _this.boxGrp.add(_this.box4);
        _this.boxGrp.add(_this.box5);
        _this.boxGrp.add(_this.box6);
        _this.boxGrp.add(_this.box7);
        _this.boxGrp.add(_this.box8);
        _this.boxGrp.add(_this.box9);
        _this.boxGrp.add(_this.box10);
        _this.boxGrp.add(_this.box11);
        _this.boxGrp.add(_this.box12);
        _this.boxGrp.add(_this.box13);
        _this.boxGrp.add(_this.box14);
        _this.boxGrp.add(_this.box15);
        _this.boxGrp.add(_this.box16);
        _this.boxGrp.add(_this.box17);
        _this.boxGrp.add(_this.box18);
        _this.boxGrp.add(_this.box19);
        _this.boxGrp.add(_this.box20);
        _this.boxGrp.add(_this.box21);
        _this.boxGrp.add(_this.box22);
        _this.boxGrp.add(_this.box23);
        _this.boxGrp.add(_this.box24);
        _this.boxGrp.add(_this.box25);
        _this.boxGrp.add(_this.box26);
        _this.boxGrp.add(_this.box27);
        _this.boxGrp.add(_this.box28);
        _this.boxGrp.add(_this.box29);
        _this.boxGrp.add(_this.box30);

        
        _this.dragboxGrp = _this.add.group();
        
        _this.dragbox1 =_this.add.sprite(630,120,'unity3_1_1box');
        _this.dragbox1.anchor.setTo(0.5); 
        _this.dragbox1.scale.setTo(1.8,1.8);
        _this.dragbox1.frame=0;
        _this.dragbox1.name="box1";
        _this.dragbox1.inputEnabled = true;
        _this.dragbox1.input.useHandCursor = true;
        _this.dragbox1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox2 =_this.add.sprite(690,120,'unity3_1_1box');
        _this.dragbox2.anchor.setTo(0.5);
        _this.dragbox2.scale.setTo(1.8,1.8);
        _this.dragbox2.frame=0;
        _this.dragbox2.name="box2";
        _this.dragbox2.inputEnabled = true;
        _this.dragbox2.input.useHandCursor = true;
        _this.dragbox2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox3 =_this.add.sprite(750,120,'unity3_1_1box');
        _this.dragbox3.anchor.setTo(0.5);
        _this.dragbox3.scale.setTo(1.8,1.8);
        _this.dragbox3.frame=0;
        _this.dragbox3.name="box3";
        _this.dragbox3.inputEnabled = true;
        _this.dragbox3.input.useHandCursor = true;
        _this.dragbox3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox4 =_this.add.sprite(810,120,'unity3_1_1box');
        _this.dragbox4.anchor.setTo(0.5);
        _this.dragbox4.scale.setTo(1.8,1.8);
        _this.dragbox4.frame=0;
        _this.dragbox4.name="box4";
        _this.dragbox4.inputEnabled = true;
        _this.dragbox4.input.useHandCursor = true;
        _this.dragbox4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox5 =_this.add.sprite(870,120,'unity3_1_1box');
        _this.dragbox5.anchor.setTo(0.5);
        _this.dragbox5.scale.setTo(1.8,1.8);
        _this.dragbox5.frame=0;
        _this.dragbox5.name="box5";
        _this.dragbox5.inputEnabled = true;
        _this.dragbox5.input.useHandCursor = true;
        _this.dragbox5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox6 =_this.add.sprite(630,190,'unity3_1_1box');
        _this.dragbox6.anchor.setTo(0.5);
        _this.dragbox6.scale.setTo(1.8,1.8);
        _this.dragbox6.frame=0;
        _this.dragbox6.name="box6";
        _this.dragbox6.inputEnabled = true;
        _this.dragbox6.input.useHandCursor = true;
        _this.dragbox6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox7 =_this.add.sprite(690,190,'unity3_1_1box');
        _this.dragbox7.anchor.setTo(0.5);
        _this.dragbox7.scale.setTo(1.8,1.8);
        _this.dragbox7.frame=0;
        _this.dragbox7.name="box7";
        _this.dragbox7.inputEnabled = true;
        _this.dragbox7.input.useHandCursor = true;
        _this.dragbox7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox8 =_this.add.sprite(750,190,'unity3_1_1box');
        _this.dragbox8.anchor.setTo(0.5);
        _this.dragbox8.scale.setTo(1.8,1.8);
        _this.dragbox8.frame=0;
        _this.dragbox8.name="box8";
        _this.dragbox8.inputEnabled = true;
        _this.dragbox8.input.useHandCursor = true;
        _this.dragbox8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox9 =_this.add.sprite(810,190,'unity3_1_1box');
        _this.dragbox9.anchor.setTo(0.5);
        _this.dragbox9.scale.setTo(1.8,1.8);
        _this.dragbox9.frame=0;
        _this.dragbox9.name="box9";
        _this.dragbox9.inputEnabled = true;
        _this.dragbox9.input.useHandCursor = true;
        _this.dragbox9.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox10 =_this.add.sprite(870,190,'unity3_1_1box');
        _this.dragbox10.anchor.setTo(0.5);
        _this.dragbox10.scale.setTo(1.8,1.8);
        _this.dragbox10.frame=0;
        _this.dragbox10.name="box10";
        _this.dragbox10.inputEnabled = true;
        _this.dragbox10.input.useHandCursor = true;
        _this.dragbox10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox11 =_this.add.sprite(630,260,'unity3_1_1box');
        _this.dragbox11.anchor.setTo(0.5); 
        _this.dragbox11.scale.setTo(1.8,1.8);
        _this.dragbox11.frame=0;
        _this.dragbox11.name="box11";
        _this.dragbox11.inputEnabled = true;
        _this.dragbox11.input.useHandCursor = true;
        _this.dragbox11.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox12 =_this.add.sprite(690,260,'unity3_1_1box');
        _this.dragbox12.anchor.setTo(0.5);
        _this.dragbox12.scale.setTo(1.8,1.8);
        _this.dragbox12.frame=0;
        _this.dragbox12.name="box12";
        _this.dragbox12.inputEnabled = true;
        _this.dragbox12.input.useHandCursor = true;
        _this.dragbox12.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox13 =_this.add.sprite(750,260,'unity3_1_1box');
        _this.dragbox13.anchor.setTo(0.5);
        _this.dragbox13.scale.setTo(1.8,1.8);
        _this.dragbox13.frame=0;
        _this.dragbox13.name="box13";
        _this.dragbox13.inputEnabled = true;
        _this.dragbox13.input.useHandCursor = true;
        _this.dragbox13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox14 =_this.add.sprite(810,260,'unity3_1_1box');
        _this.dragbox14.anchor.setTo(0.5);
        _this.dragbox14.scale.setTo(1.8,1.8);
        _this.dragbox14.frame=0;
        _this.dragbox14.name="box14";
        _this.dragbox14.inputEnabled = true;
        _this.dragbox14.input.useHandCursor = true;
        _this.dragbox14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox15 =_this.add.sprite(870,260,'unity3_1_1box');
        _this.dragbox15.anchor.setTo(0.5);
        _this.dragbox15.scale.setTo(1.8,1.8);
        _this.dragbox15.frame=0;
        _this.dragbox15.name="box15";
        _this.dragbox15.inputEnabled = true;
        _this.dragbox15.input.useHandCursor = true;
        _this.dragbox15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox16 =_this.add.sprite(630,330,'unity3_1_1box');
        _this.dragbox16.anchor.setTo(0.5);
        _this.dragbox16.scale.setTo(1.8,1.8);
        _this.dragbox16.frame=0;
        _this.dragbox16.name="box16";
        _this.dragbox16.inputEnabled = true;
        _this.dragbox16.input.useHandCursor = true;
        _this.dragbox16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox17 =_this.add.sprite(690,330,'unity3_1_1box');
        _this.dragbox17.anchor.setTo(0.5);
        _this.dragbox17.scale.setTo(1.8,1.8);
        _this.dragbox17.frame=0;
        _this.dragbox17.name="box17";
        _this.dragbox17.inputEnabled = true;
        _this.dragbox17.input.useHandCursor = true;
        _this.dragbox17.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox18 =_this.add.sprite(750,330,'unity3_1_1box');
        _this.dragbox18.anchor.setTo(0.5);
        _this.dragbox18.scale.setTo(1.8,1.8);
        _this.dragbox18.frame=0;
        _this.dragbox18.name="box18";
        _this.dragbox18.inputEnabled = true;
        _this.dragbox18.input.useHandCursor = true;
        _this.dragbox18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox19 =_this.add.sprite(810,330,'unity3_1_1box');
        _this.dragbox19.anchor.setTo(0.5);
        _this.dragbox19.scale.setTo(1.8,1.8);
        _this.dragbox19.frame=0;
        _this.dragbox19.name="box19";
        _this.dragbox19.inputEnabled = true;
        _this.dragbox19.input.useHandCursor = true;
        _this.dragbox19.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox20 =_this.add.sprite(870,330,'unity3_1_1box');
        _this.dragbox20.anchor.setTo(0.5);
        _this.dragbox20.scale.setTo(1.8,1.8);
        _this.dragbox20.frame=0;
        _this.dragbox20.name="box20";
        _this.dragbox20.inputEnabled = true;
        _this.dragbox20.input.useHandCursor = true;
        _this.dragbox20.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox21 =_this.add.sprite(630,400,'unity3_1_1box');
        _this.dragbox21.anchor.setTo(0.5); 
        _this.dragbox21.scale.setTo(1.8,1.8);
        _this.dragbox21.frame=0;
        _this.dragbox21.name="box21";
        _this.dragbox21.inputEnabled = true;
        _this.dragbox21.input.useHandCursor = true;
        _this.dragbox21.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox22 =_this.add.sprite(690,400,'unity3_1_1box');
        _this.dragbox22.anchor.setTo(0.5);
        _this.dragbox22.scale.setTo(1.8,1.8);
        _this.dragbox22.frame=0;
        _this.dragbox22.name="box22";
        _this.dragbox22.inputEnabled = true;
        _this.dragbox22.input.useHandCursor = true;
        _this.dragbox22.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox23 =_this.add.sprite(750,400,'unity3_1_1box');
        _this.dragbox23.anchor.setTo(0.5);
        _this.dragbox23.scale.setTo(1.8,1.8);
        _this.dragbox23.frame=0;
        _this.dragbox23.name="box23";
        _this.dragbox23.inputEnabled = true;
        _this.dragbox23.input.useHandCursor = true;
        _this.dragbox23.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox24 =_this.add.sprite(810,400,'unity3_1_1box');
        _this.dragbox24.anchor.setTo(0.5);
        _this.dragbox24.scale.setTo(1.8,1.8);
        _this.dragbox24.frame=0;
        _this.dragbox24.name="box24";
        _this.dragbox24.inputEnabled = true;
        _this.dragbox24.input.useHandCursor = true;
        _this.dragbox24.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox25 =_this.add.sprite(870,400,'unity3_1_1box');
        _this.dragbox25.anchor.setTo(0.5);
        _this.dragbox25.scale.setTo(1.8,1.8);
        _this.dragbox25.frame=0;
        _this.dragbox25.name="box25";
        _this.dragbox25.inputEnabled = true;
        _this.dragbox25.input.useHandCursor = true;
        _this.dragbox25.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox26 =_this.add.sprite(630,470,'unity3_1_1box');
        _this.dragbox26.anchor.setTo(0.5);
        _this.dragbox26.scale.setTo(1.8,1.8);
        _this.dragbox26.frame=0;
        _this.dragbox26.name="box26";
        _this.dragbox26.inputEnabled = true;
        _this.dragbox26.input.useHandCursor = true;
        _this.dragbox26.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox27 =_this.add.sprite(690,470,'unity3_1_1box');
        _this.dragbox27.anchor.setTo(0.5);
        _this.dragbox27.scale.setTo(1.8,1.8);
        _this.dragbox27.frame=0;
        _this.dragbox27.name="box27";
        _this.dragbox27.inputEnabled = true;
        _this.dragbox27.input.useHandCursor = true;
        _this.dragbox27.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox28 =_this.add.sprite(750,470,'unity3_1_1box');
        _this.dragbox28.anchor.setTo(0.5);
        _this.dragbox28.scale.setTo(1.8,1.8);
        _this.dragbox28.frame=0;
        _this.dragbox28.name="box28";
        _this.dragbox28.inputEnabled = true;
        _this.dragbox28.input.useHandCursor = true;
        _this.dragbox28.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox29 =_this.add.sprite(810,470,'unity3_1_1box');
        _this.dragbox29.anchor.setTo(0.5);
        _this.dragbox29.scale.setTo(1.8,1.8);
        _this.dragbox29.frame=0;
        _this.dragbox29.name="box29";
        _this.dragbox29.inputEnabled = true;
        _this.dragbox29.input.useHandCursor = true;
        _this.dragbox29.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox30 =_this.add.sprite(870,470,'unity3_1_1box');
        _this.dragbox30.anchor.setTo(0.5);
        _this.dragbox30.scale.setTo(1.8,1.8);
        _this.dragbox30.frame=0;
        _this.dragbox30.name="box30";
        _this.dragbox30.inputEnabled = true;
        _this.dragbox30.input.useHandCursor = true;
        _this.dragbox30.events.onInputDown.add(_this.onDragStart,_this);
        
         _this.dragboxGrp.add(_this.dragbox1);
         _this.dragboxGrp.add(_this.dragbox2);
         _this.dragboxGrp.add(_this.dragbox3);
         _this.dragboxGrp.add(_this.dragbox4);
         _this.dragboxGrp.add(_this.dragbox5);
         _this.dragboxGrp.add(_this.dragbox6);
         _this.dragboxGrp.add(_this.dragbox7);
         _this.dragboxGrp.add(_this.dragbox8);
         _this.dragboxGrp.add(_this.dragbox9);
         _this.dragboxGrp.add(_this.dragbox10);
         _this.dragboxGrp.add(_this.dragbox11);
         _this.dragboxGrp.add(_this.dragbox12);
         _this.dragboxGrp.add(_this.dragbox13);
         _this.dragboxGrp.add(_this.dragbox14);
         _this.dragboxGrp.add(_this.dragbox15);
         _this.dragboxGrp.add(_this.dragbox16);
         _this.dragboxGrp.add(_this.dragbox17);
         _this.dragboxGrp.add(_this.dragbox18);
         _this.dragboxGrp.add(_this.dragbox19);
         _this.dragboxGrp.add(_this.dragbox20);
         _this.dragboxGrp.add(_this.dragbox21);
         _this.dragboxGrp.add(_this.dragbox22);
         _this.dragboxGrp.add(_this.dragbox23);
         _this.dragboxGrp.add(_this.dragbox24);
         _this.dragboxGrp.add(_this.dragbox25);
         _this.dragboxGrp.add(_this.dragbox26);
         _this.dragboxGrp.add(_this.dragbox27);
         _this.dragboxGrp.add(_this.dragbox28);
         _this.dragboxGrp.add(_this.dragbox29);
         _this.dragboxGrp.add(_this.dragbox30);
         
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_1scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_1ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
        
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_1ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
    
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_1numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_1numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
    
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);

        
        _this.rightAns="30";
    
    
        _this.dbox1 =_this.add.sprite(630,470,'unity3_1_1box');
        _this.dbox1.anchor.setTo(0.5); 
         _this.dbox1.scale.setTo(1.8,1.8);
        _this.dbox1.frame=0;
        
         _this.hand = _this.add.sprite(630,470,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dbox1);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dbox1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dbox1.destroy();
            },this);
            },this);
            },this);
},
    



   
    

         
gotoFourthQuestion:function()
    {
        _this.getVoice();
        _this.questioNo = 4;
        
        _this.cube=10;
        
        _this.tbox =_this.add.sprite(240,260,'unity3_1_1tbox2');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 70, 360,140);
        _this.graphics1.alpha= 0;
        
        _this.dragboxGrp1 = _this.add.group();
        
        _this.obj =_this.add.sprite(220,250,'unity3_1_1woodstickanim');
        _this.obj.anchor.setTo(0.5);
        _this.obj.scale.setTo(1.5,1.5); 
        _this.obj.visible=false;
        _this.obj.frame=0;
        
        _this.dragboxGrp1.add(_this.obj);
        
         _this.boxGrp= _this.add.group();
    
        
        _this.box1 =_this.add.sprite(730,80,'unity3_1_1woodstick2');
        _this.box1.anchor.setTo(0.5);
        _this.box1.scale.setTo(1,1); 
        _this.box1.frame=1;
        
        _this.box2 =_this.add.sprite(730,120,'unity3_1_1woodstick1');
        _this.box2.anchor.setTo(0.5);
        _this.box2.scale.setTo(1,1);
        _this.box2.frame=1;
        
        _this.box3 =_this.add.sprite(730,160,'unity3_1_1woodstick2');
        _this.box3.anchor.setTo(0.5);
        _this.box3.scale.setTo(1,1);
        _this.box3.frame=1;
        
        _this.box4 =_this.add.sprite(730,200,'unity3_1_1woodstick1');
        _this.box4.anchor.setTo(0.5);
        _this.box4.scale.setTo(1,1);
        _this.box4.frame=1;
        
        _this.box5 =_this.add.sprite(730,240,'unity3_1_1woodstick2');
        _this.box5.anchor.setTo(0.5);
        _this.box5.scale.setTo(1,1);
        _this.box5.frame=1;
        
        _this.box6 =_this.add.sprite(730,280,'unity3_1_1woodstick1');
        _this.box6.anchor.setTo(0.5);
        _this.box6.scale.setTo(1,1);
        _this.box6.frame=1;
        
        _this.box7 =_this.add.sprite(730,320,'unity3_1_1woodstick2');
        _this.box7.anchor.setTo(0.5);
        _this.box7.scale.setTo(1,1);
        _this.box7.frame=1;
        
        _this.box8 =_this.add.sprite(730,360,'unity3_1_1woodstick1');
        _this.box8.anchor.setTo(0.5);
        _this.box8.scale.setTo(1,1);
        _this.box8.frame=1;
        
        _this.box9 =_this.add.sprite(730,400,'unity3_1_1woodstick2');
        _this.box9.anchor.setTo(0.5);
        _this.box9.scale.setTo(1,1);
        _this.box9.frame=1;
        
        _this.box10 =_this.add.sprite(730,440,'unity3_1_1woodstick1');
        _this.box10.anchor.setTo(0.5);
        _this.box10.scale.setTo(1,1);
        _this.box10.frame=1;
        
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
        _this.boxGrp.add(_this.box3);
        _this.boxGrp.add(_this.box4);
        _this.boxGrp.add(_this.box5);
        _this.boxGrp.add(_this.box6);
        _this.boxGrp.add(_this.box7);
        _this.boxGrp.add(_this.box8);
        _this.boxGrp.add(_this.box9);
        _this.boxGrp.add(_this.box10);
        
       _this.dragboxGrp = _this.add.group();
        
        _this.dragbox1 =_this.add.sprite(730,80,'unity3_1_1woodstick2');
        _this.dragbox1.anchor.setTo(0.5);
        _this.dragbox1.scale.setTo(1,1); 
        _this.dragbox1.frame=0;
        _this.dragbox1.name="box1";
        _this.dragbox1.inputEnabled = true;
        _this.dragbox1.input.useHandCursor = true;
        _this.dragbox1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox2 =_this.add.sprite(730,120,'unity3_1_1woodstick1');
        _this.dragbox2.anchor.setTo(0.5);
        _this.dragbox2.scale.setTo(1,1); 
        _this.dragbox2.frame=0;
        _this.dragbox2.name="box2";
        _this.dragbox2.inputEnabled = true;
        _this.dragbox2.input.useHandCursor = true;
        _this.dragbox2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox3 =_this.add.sprite(730,160,'unity3_1_1woodstick2');
        _this.dragbox3.anchor.setTo(0.5);
        _this.dragbox3.scale.setTo(1,1);
        _this.dragbox3.frame=0;
        _this.dragbox3.name="box3";
        _this.dragbox3.inputEnabled = true;
        _this.dragbox3.input.useHandCursor = true;
        _this.dragbox3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox4 =_this.add.sprite(730,200,'unity3_1_1woodstick1');
        _this.dragbox4.anchor.setTo(0.5);
        _this.dragbox4.scale.setTo(1,1);
        _this.dragbox4.frame=0;
        _this.dragbox4.name="box4";
        _this.dragbox4.inputEnabled = true;
        _this.dragbox4.input.useHandCursor = true;
        _this.dragbox4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox5 =_this.add.sprite(730,240,'unity3_1_1woodstick2');
        _this.dragbox5.anchor.setTo(0.5);
        _this.dragbox5.scale.setTo(1,1);
        _this.dragbox5.frame=0;
        _this.dragbox5.name="box5";
        _this.dragbox5.inputEnabled = true;
        _this.dragbox5.input.useHandCursor = true;
        _this.dragbox5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox6 =_this.add.sprite(730,280,'unity3_1_1woodstick1');
        _this.dragbox6.anchor.setTo(0.5);
        _this.dragbox6.scale.setTo(1,1);
        _this.dragbox6.frame=0;
        _this.dragbox6.name="box6";
        _this.dragbox6.inputEnabled = true;
        _this.dragbox6.input.useHandCursor = true;
        _this.dragbox6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox7 =_this.add.sprite(730,320,'unity3_1_1woodstick2');
        _this.dragbox7.anchor.setTo(0.5);
        _this.dragbox7.scale.setTo(1,1);
        _this.dragbox7.frame=0;
        _this.dragbox7.name="box7";
        _this.dragbox7.inputEnabled = true;
        _this.dragbox7.input.useHandCursor = true;
        _this.dragbox7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox8 =_this.add.sprite(730,360,'unity3_1_1woodstick1');
        _this.dragbox8.anchor.setTo(0.5);
        _this.dragbox8.scale.setTo(1,1);
        _this.dragbox8.frame=0;
        _this.dragbox8.name="box8";
        _this.dragbox8.inputEnabled = true;
        _this.dragbox8.input.useHandCursor = true;
        _this.dragbox8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox9 =_this.add.sprite(730,400,'unity3_1_1woodstick2');
        _this.dragbox9.anchor.setTo(0.5);
        _this.dragbox9.scale.setTo(1,1);
        _this.dragbox9.frame=0;
        _this.dragbox9.name="box9";
        _this.dragbox9.inputEnabled = true;
        _this.dragbox9.input.useHandCursor = true;
        _this.dragbox9.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox10 =_this.add.sprite(730,440,'unity3_1_1woodstick1');
        _this.dragbox10.anchor.setTo(0.5);
        _this.dragbox10.scale.setTo(1,1);
        _this.dragbox10.frame=0;
        _this.dragbox10.name="box10";
        _this.dragbox10.inputEnabled = true;
        _this.dragbox10.input.useHandCursor = true;
        _this.dragbox10.events.onInputDown.add(_this.onDragStart,_this);
        
         _this.dragboxGrp.add(_this.dragbox1);
         _this.dragboxGrp.add(_this.dragbox2);
         _this.dragboxGrp.add(_this.dragbox3);
         _this.dragboxGrp.add(_this.dragbox4);
         _this.dragboxGrp.add(_this.dragbox5);
         _this.dragboxGrp.add(_this.dragbox6);
         _this.dragboxGrp.add(_this.dragbox7);
         _this.dragboxGrp.add(_this.dragbox8);
         _this.dragboxGrp.add(_this.dragbox9);
         _this.dragboxGrp.add(_this.dragbox10);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_1scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_1ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_1ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_1numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_1numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="10";
        
        _this.dbox1 =_this.add.sprite(730,440,'unity3_1_1woodstick1');
        _this.dbox1.anchor.setTo(0.5);
        _this.dbox1.scale.setTo(1,1); 
        _this.dbox1.frame=0;
        
         _this.hand = _this.add.sprite(730,440,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dbox1);
         tween1.to({ x:160 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:160 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dbox1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dbox1.destroy();
            },this);
            },this);
            },this);
        
        
     
},    
    
    
gotoFifthQuestion:function()
    {
        _this.getVoice();
        _this.questioNo = 5;
        
        _this.cube=10;
        _this.cube1=20;
        
        _this.tbox =_this.add.sprite(220,250,'unity3_1_1tbox2');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.2); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-50, 70, 360,140);
        _this.graphics1.alpha= 0;
        
         _this.dragboxGrp1 = _this.add.group();
        
        _this.obj =_this.add.sprite(120,210,'unity3_1_1woodstickanim');
        _this.obj.anchor.setTo(0.5);
        _this.obj.scale.setTo(1.5,1.5); 
        _this.obj.visible=false;
        _this.obj.frame=0;
        
        _this.obj1 =_this.add.sprite(300,250,'unity3_1_1woodstickanim');
        _this.obj1.anchor.setTo(0.5);
        _this.obj1.scale.setTo(1.5,1.5); 
        _this.obj1.visible=false;
        _this.obj1.frame=0;
        
        _this.dragboxGrp1.add(_this.obj);
        _this.dragboxGrp1.add(_this.obj1);
        
        _this.boxGrp= _this.add.group();
    
        
        _this.box1 =_this.add.sprite(650,80,'unity3_1_1woodstick2');
        _this.box1.anchor.setTo(0.5);
        _this.box1.scale.setTo(1,1); 
        _this.box1.frame=1;
        
        _this.box2 =_this.add.sprite(650,120,'unity3_1_1woodstick1');
        _this.box2.anchor.setTo(0.5);
        _this.box2.scale.setTo(1,1);
        _this.box2.frame=1;
        
        _this.box3 =_this.add.sprite(650,160,'unity3_1_1woodstick2');
        _this.box3.anchor.setTo(0.5);
        _this.box3.scale.setTo(1,1);
        _this.box3.frame=1;
        
        _this.box4 =_this.add.sprite(650,200,'unity3_1_1woodstick1');
        _this.box4.anchor.setTo(0.5);
        _this.box4.scale.setTo(1,1);
        _this.box4.frame=1;
        
        _this.box5 =_this.add.sprite(650,240,'unity3_1_1woodstick2');
        _this.box5.anchor.setTo(0.5);
        _this.box5.scale.setTo(1,1);
        _this.box5.frame=1;
        
        _this.box6 =_this.add.sprite(650,280,'unity3_1_1woodstick1');
        _this.box6.anchor.setTo(0.5);
        _this.box6.scale.setTo(1,1);
        _this.box6.frame=1;
        
        _this.box7 =_this.add.sprite(650,320,'unity3_1_1woodstick2');
        _this.box7.anchor.setTo(0.5);
        _this.box7.scale.setTo(1,1);
        _this.box7.frame=1;
        
        _this.box8 =_this.add.sprite(650,360,'unity3_1_1woodstick1');
        _this.box8.anchor.setTo(0.5);
        _this.box8.scale.setTo(1,1);
        _this.box8.frame=1;
        
        _this.box9 =_this.add.sprite(650,400,'unity3_1_1woodstick2');
        _this.box9.anchor.setTo(0.5);
        _this.box9.scale.setTo(1,1);
        _this.box9.frame=1;
        
        _this.box10 =_this.add.sprite(650,440,'unity3_1_1woodstick1');
        _this.box10.anchor.setTo(0.5);
        _this.box10.scale.setTo(1,1);
        _this.box10.frame=1;
        
        _this.box11 =_this.add.sprite(850,80,'unity3_1_1woodstick2');
        _this.box11.anchor.setTo(0.5);
        _this.box11.scale.setTo(1,1); 
        _this.box11.frame=1;
        
        _this.box12 =_this.add.sprite(850,120,'unity3_1_1woodstick1');
        _this.box12.anchor.setTo(0.5);
        _this.box12.scale.setTo(1,1);
        _this.box12.frame=1;
        
        _this.box13 =_this.add.sprite(850,160,'unity3_1_1woodstick2');
        _this.box13.anchor.setTo(0.5);
        _this.box13.scale.setTo(1,1);
        _this.box13.frame=1;
        
        _this.box14 =_this.add.sprite(850,200,'unity3_1_1woodstick1');
        _this.box14.anchor.setTo(0.5);
        _this.box14.scale.setTo(1,1);
        _this.box14.frame=1;
        
        _this.box15 =_this.add.sprite(850,240,'unity3_1_1woodstick2');
        _this.box15.anchor.setTo(0.5);
        _this.box15.scale.setTo(1,1);
        _this.box15.frame=1;
        
        _this.box16 =_this.add.sprite(850,280,'unity3_1_1woodstick1');
        _this.box16.anchor.setTo(0.5);
        _this.box16.scale.setTo(1,1);
        _this.box16.frame=1;
        
        _this.box17 =_this.add.sprite(850,320,'unity3_1_1woodstick2');
        _this.box17.anchor.setTo(0.5);
        _this.box17.scale.setTo(1,1);
        _this.box17.frame=1;
        
        _this.box18 =_this.add.sprite(850,360,'unity3_1_1woodstick1');
        _this.box18.anchor.setTo(0.5);
        _this.box18.scale.setTo(1,1);
        _this.box18.frame=1;
        
        _this.box19 =_this.add.sprite(850,400,'unity3_1_1woodstick2');
        _this.box19.anchor.setTo(0.5);
        _this.box19.scale.setTo(1,1);
        _this.box19.frame=1;
        
        _this.box20 =_this.add.sprite(850,440,'unity3_1_1woodstick1');
        _this.box20.anchor.setTo(0.5);
        _this.box20.scale.setTo(1,1);
        _this.box20.frame=1;
        
        
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
        _this.boxGrp.add(_this.box3);
        _this.boxGrp.add(_this.box4);
        _this.boxGrp.add(_this.box5);
        _this.boxGrp.add(_this.box6);
        _this.boxGrp.add(_this.box7);
        _this.boxGrp.add(_this.box8);
        _this.boxGrp.add(_this.box9);
        _this.boxGrp.add(_this.box10);
        _this.boxGrp.add(_this.box11);
        _this.boxGrp.add(_this.box12);
        _this.boxGrp.add(_this.box13);
        _this.boxGrp.add(_this.box14);
        _this.boxGrp.add(_this.box15);
        _this.boxGrp.add(_this.box16);
        _this.boxGrp.add(_this.box17);
        _this.boxGrp.add(_this.box18);
        _this.boxGrp.add(_this.box19);
        _this.boxGrp.add(_this.box20);
        
       _this.dragboxGrp = _this.add.group();
        
        _this.dragbox1 =_this.add.sprite(650,80,'unity3_1_1woodstick2');
        _this.dragbox1.anchor.setTo(0.5);
        _this.dragbox1.scale.setTo(1,1); 
        _this.dragbox1.frame=0;
        _this.dragbox1.name="box1";
        _this.dragbox1.inputEnabled = true;
        _this.dragbox1.input.useHandCursor = true;
        _this.dragbox1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox2 =_this.add.sprite(650,120,'unity3_1_1woodstick1');
        _this.dragbox2.anchor.setTo(0.5);
        _this.dragbox2.scale.setTo(1,1); 
        _this.dragbox2.frame=0;
        _this.dragbox2.name="box2";
        _this.dragbox2.inputEnabled = true;
        _this.dragbox2.input.useHandCursor = true;
        _this.dragbox2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox3 =_this.add.sprite(650,160,'unity3_1_1woodstick2');
        _this.dragbox3.anchor.setTo(0.5);
        _this.dragbox3.scale.setTo(1,1);
        _this.dragbox3.frame=0;
        _this.dragbox3.name="box3";
        _this.dragbox3.inputEnabled = true;
        _this.dragbox3.input.useHandCursor = true;
        _this.dragbox3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox4 =_this.add.sprite(650,200,'unity3_1_1woodstick1');
        _this.dragbox4.anchor.setTo(0.5);
        _this.dragbox4.scale.setTo(1,1);
        _this.dragbox4.frame=0;
        _this.dragbox4.name="box4";
        _this.dragbox4.inputEnabled = true;
        _this.dragbox4.input.useHandCursor = true;
        _this.dragbox4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox5 =_this.add.sprite(650,240,'unity3_1_1woodstick2');
        _this.dragbox5.anchor.setTo(0.5);
        _this.dragbox5.scale.setTo(1,1);
        _this.dragbox5.frame=0;
        _this.dragbox5.name="box5";
        _this.dragbox5.inputEnabled = true;
        _this.dragbox5.input.useHandCursor = true;
        _this.dragbox5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox6 =_this.add.sprite(650,280,'unity3_1_1woodstick1');
        _this.dragbox6.anchor.setTo(0.5);
        _this.dragbox6.scale.setTo(1,1);
        _this.dragbox6.frame=0;
        _this.dragbox6.name="box6";
        _this.dragbox6.inputEnabled = true;
        _this.dragbox6.input.useHandCursor = true;
        _this.dragbox6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox7 =_this.add.sprite(650,320,'unity3_1_1woodstick2');
        _this.dragbox7.anchor.setTo(0.5);
        _this.dragbox7.scale.setTo(1,1);
        _this.dragbox7.frame=0;
        _this.dragbox7.name="box7";
        _this.dragbox7.inputEnabled = true;
        _this.dragbox7.input.useHandCursor = true;
        _this.dragbox7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox8 =_this.add.sprite(650,360,'unity3_1_1woodstick1');
        _this.dragbox8.anchor.setTo(0.5);
        _this.dragbox8.scale.setTo(1,1);
        _this.dragbox8.frame=0;
        _this.dragbox8.name="box8";
        _this.dragbox8.inputEnabled = true;
        _this.dragbox8.input.useHandCursor = true;
        _this.dragbox8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox9 =_this.add.sprite(650,400,'unity3_1_1woodstick2');
        _this.dragbox9.anchor.setTo(0.5);
        _this.dragbox9.scale.setTo(1,1);
        _this.dragbox9.frame=0;
        _this.dragbox9.name="box9";
        _this.dragbox9.inputEnabled = true;
        _this.dragbox9.input.useHandCursor = true;
        _this.dragbox9.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox10 =_this.add.sprite(650,440,'unity3_1_1woodstick1');
        _this.dragbox10.anchor.setTo(0.5);
        _this.dragbox10.scale.setTo(1,1);
        _this.dragbox10.frame=0;
        _this.dragbox10.name="box10";
        _this.dragbox10.inputEnabled = true;
        _this.dragbox10.input.useHandCursor = true;
        _this.dragbox10.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox11 =_this.add.sprite(850,80,'unity3_1_1woodstick2');
        _this.dragbox11.anchor.setTo(0.5);
        _this.dragbox11.scale.setTo(1,1); 
        _this.dragbox11.frame=0;
        _this.dragbox11.name="box11";
        _this.dragbox11.inputEnabled = true;
        _this.dragbox11.input.useHandCursor = true;
        _this.dragbox11.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox12 =_this.add.sprite(850,120,'unity3_1_1woodstick1');
        _this.dragbox12.anchor.setTo(0.5);
        _this.dragbox12.scale.setTo(1,1); 
        _this.dragbox12.frame=0;
        _this.dragbox12.name="box12";
        _this.dragbox12.inputEnabled = true;
        _this.dragbox12.input.useHandCursor = true;
        _this.dragbox12.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox13 =_this.add.sprite(850,160,'unity3_1_1woodstick2');
        _this.dragbox13.anchor.setTo(0.5);
        _this.dragbox13.scale.setTo(1,1);
        _this.dragbox13.frame=0;
        _this.dragbox13.name="box13";
        _this.dragbox13.inputEnabled = true;
        _this.dragbox13.input.useHandCursor = true;
        _this.dragbox13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox14 =_this.add.sprite(850,200,'unity3_1_1woodstick1');
        _this.dragbox14.anchor.setTo(0.5);
        _this.dragbox14.scale.setTo(1,1);
        _this.dragbox14.frame=0;
        _this.dragbox14.name="box14";
        _this.dragbox14.inputEnabled = true;
        _this.dragbox14.input.useHandCursor = true;
        _this.dragbox14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox15 =_this.add.sprite(850,240,'unity3_1_1woodstick2');
        _this.dragbox15.anchor.setTo(0.5);
        _this.dragbox15.scale.setTo(1,1);
        _this.dragbox15.frame=0;
        _this.dragbox15.name="box15";
        _this.dragbox15.inputEnabled = true;
        _this.dragbox15.input.useHandCursor = true;
        _this.dragbox15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox16 =_this.add.sprite(850,280,'unity3_1_1woodstick1');
        _this.dragbox16.anchor.setTo(0.5);
        _this.dragbox16.scale.setTo(1,1);
        _this.dragbox16.frame=0;
        _this.dragbox16.name="box16";
        _this.dragbox16.inputEnabled = true;
        _this.dragbox16.input.useHandCursor = true;
        _this.dragbox16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox17 =_this.add.sprite(850,320,'unity3_1_1woodstick2');
        _this.dragbox17.anchor.setTo(0.5);
        _this.dragbox17.scale.setTo(1,1);
        _this.dragbox17.frame=0;
        _this.dragbox17.name="box17";
        _this.dragbox17.inputEnabled = true;
        _this.dragbox17.input.useHandCursor = true;
        _this.dragbox17.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox18 =_this.add.sprite(850,360,'unity3_1_1woodstick1');
        _this.dragbox18.anchor.setTo(0.5);
        _this.dragbox18.scale.setTo(1,1);
        _this.dragbox18.frame=0;
        _this.dragbox18.name="box18";
        _this.dragbox18.inputEnabled = true;
        _this.dragbox18.input.useHandCursor = true;
        _this.dragbox18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox19 =_this.add.sprite(850,400,'unity3_1_1woodstick2');
        _this.dragbox19.anchor.setTo(0.5);
        _this.dragbox19.scale.setTo(1,1);
        _this.dragbox19.frame=0;
        _this.dragbox19.name="box19";
        _this.dragbox19.inputEnabled = true;
        _this.dragbox19.input.useHandCursor = true;
        _this.dragbox19.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox20 =_this.add.sprite(850,440,'unity3_1_1woodstick1');
        _this.dragbox20.anchor.setTo(0.5);
        _this.dragbox20.scale.setTo(1,1);
        _this.dragbox20.frame=0;
        _this.dragbox20.name="box20";
        _this.dragbox20.inputEnabled = true;
        _this.dragbox20.input.useHandCursor = true;
        _this.dragbox20.events.onInputDown.add(_this.onDragStart,_this);
        
        
         _this.dragboxGrp.add(_this.dragbox1);
         _this.dragboxGrp.add(_this.dragbox2);
         _this.dragboxGrp.add(_this.dragbox3);
         _this.dragboxGrp.add(_this.dragbox4);
         _this.dragboxGrp.add(_this.dragbox5);
         _this.dragboxGrp.add(_this.dragbox6);
         _this.dragboxGrp.add(_this.dragbox7);
         _this.dragboxGrp.add(_this.dragbox8);
         _this.dragboxGrp.add(_this.dragbox9);
         _this.dragboxGrp.add(_this.dragbox10);
         _this.dragboxGrp.add(_this.dragbox11);
         _this.dragboxGrp.add(_this.dragbox12);
         _this.dragboxGrp.add(_this.dragbox13);
         _this.dragboxGrp.add(_this.dragbox14);
         _this.dragboxGrp.add(_this.dragbox15);
         _this.dragboxGrp.add(_this.dragbox16);
         _this.dragboxGrp.add(_this.dragbox17);
         _this.dragboxGrp.add(_this.dragbox18);
         _this.dragboxGrp.add(_this.dragbox19);
         _this.dragboxGrp.add(_this.dragbox20);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_1scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_1ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_1ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_1numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_1numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="20";
        
        _this.dbox1 =_this.add.sprite(650,390,'unity3_1_1woodstick1');
        _this.dbox1.anchor.setTo(0.5);
        _this.dbox1.scale.setTo(0.6,0.7); 
        _this.dbox1.frame=0;
        
         _this.hand = _this.add.sprite(650,390,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dbox1);
         tween1.to({ x:130 , y:250}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:130 , y:250}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dbox1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dbox1.destroy();
            },this);
            },this);
            },this);
     
},    
    
gotoSixthQuestion:function(){
    
         _this.getVoice();
         _this.questioNo = 6;
         _this.cube=10;
         _this.cube1=20;
    
        _this.tbox =_this.add.sprite(240,260,'unity3_1_1tbox2');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 360,140);
        _this.graphics1.alpha= 0;
        
         
        _this.dragboxGrp1 = _this.add.group();
        
        _this.obj =_this.add.sprite(240,230,'unity3_1_1boxanim');
        _this.obj.anchor.setTo(0.5);
        _this.obj.scale.setTo(1.8,1.8); 
        _this.obj.visible=false;
        _this.obj.frame=0;
        
        _this.obj1 =_this.add.sprite(240,260,'unity3_1_1boxanim');
        _this.obj1.anchor.setTo(0.5);
        _this.obj1.scale.setTo(1.8,1.8); 
        _this.obj1.visible=false;
        _this.obj1.frame=0;
    
        _this.dragboxGrp1.add(_this.obj);
        _this.dragboxGrp1.add(_this.obj1);
       
         _this.boxGrp= _this.add.group();
    
        _this.box1 =_this.add.sprite(630,120,'unity3_1_1box');
        _this.box1.anchor.setTo(0.5);
        _this.box1.scale.setTo(1.8,1.8);
        _this.box1.frame=1;
        
        _this.box2 =_this.add.sprite(690,120,'unity3_1_1box');
        _this.box2.anchor.setTo(0.5);
        _this.box2.scale.setTo(1.8,1.8);
        _this.box2.frame=1;
        
        _this.box3 =_this.add.sprite(750,120,'unity3_1_1box');
        _this.box3.anchor.setTo(0.5);
        _this.box3.scale.setTo(1.8,1.8);
        _this.box3.frame=1;
        
        _this.box4 =_this.add.sprite(810,120,'unity3_1_1box');
        _this.box4.anchor.setTo(0.5);
        _this.box4.scale.setTo(1.8,1.8);
        _this.box4.frame=1;
        
        _this.box5 =_this.add.sprite(870,120,'unity3_1_1box');
        _this.box5.anchor.setTo(0.5);
        _this.box5.scale.setTo(1.8,1.8);
        _this.box5.frame=1;
        
        _this.box6 =_this.add.sprite(630,190,'unity3_1_1box');
        _this.box6.anchor.setTo(0.5);
        _this.box6.scale.setTo(1.8,1.8);
        _this.box6.frame=1;
        
        _this.box7 =_this.add.sprite(690,190,'unity3_1_1box');
        _this.box7.anchor.setTo(0.5);
        _this.box7.scale.setTo(1.8,1.8);
        _this.box7.frame=1;
        
        _this.box8 =_this.add.sprite(750,190,'unity3_1_1box');
        _this.box8.anchor.setTo(0.5);
        _this.box8.scale.setTo(1.8,1.8);
        _this.box8.frame=1;
        
        _this.box9 =_this.add.sprite(810,190,'unity3_1_1box');
        _this.box9.anchor.setTo(0.5);
        _this.box9.scale.setTo(1.8,1.8);
        _this.box9.frame=1;
        
        _this.box10 =_this.add.sprite(870,190,'unity3_1_1box');
        _this.box10.anchor.setTo(0.5);
        _this.box10.scale.setTo(1.8,1.8);
        _this.box10.frame=1;
    
        _this.box11 =_this.add.sprite(630,260,'unity3_1_1box');
        _this.box11.anchor.setTo(0.5);
        _this.box11.scale.setTo(1.8,1.8);
        _this.box11.frame=1;
        
        _this.box12 =_this.add.sprite(690,260,'unity3_1_1box');
        _this.box12.anchor.setTo(0.5);
        _this.box12.scale.setTo(1.8,1.8);
        _this.box12.frame=1;
        
        _this.box13 =_this.add.sprite(750,260,'unity3_1_1box');
        _this.box13.anchor.setTo(0.5);
        _this.box13.scale.setTo(1.8,1.8);
        _this.box13.frame=1;
        
        _this.box14 =_this.add.sprite(810,260,'unity3_1_1box');
        _this.box14.anchor.setTo(0.5);
        _this.box14.scale.setTo(1.8,1.8);
        _this.box14.frame=1;
        
        _this.box15 =_this.add.sprite(870,260,'unity3_1_1box');
        _this.box15.anchor.setTo(0.5);
        _this.box15.scale.setTo(1.8,1.8);
        _this.box15.frame=1;
        
        _this.box16 =_this.add.sprite(630,330,'unity3_1_1box');
        _this.box16.anchor.setTo(0.5);
        _this.box16.scale.setTo(1.8,1.8);
        _this.box16.frame=1;
        
        _this.box17 =_this.add.sprite(690,330,'unity3_1_1box');
        _this.box17.anchor.setTo(0.5);
        _this.box17.scale.setTo(1.8,1.8);
        _this.box17.frame=1;
        
        _this.box18 =_this.add.sprite(750,330,'unity3_1_1box');
        _this.box18.anchor.setTo(0.5);
        _this.box18.scale.setTo(1.8,1.8);
        _this.box18.frame=1;
        
        _this.box19 =_this.add.sprite(810,330,'unity3_1_1box');
        _this.box19.anchor.setTo(0.5);
        _this.box19.scale.setTo(1.8,1.8);
        _this.box19.frame=1;
        
        _this.box20 =_this.add.sprite(870,330,'unity3_1_1box');
        _this.box20.anchor.setTo(0.5);
        _this.box20.scale.setTo(1.8,1.8);
        _this.box20.frame=1;
    
        _this.boxGrp.add(_this.box1);
        _this.boxGrp.add(_this.box2);
        _this.boxGrp.add(_this.box3);
        _this.boxGrp.add(_this.box4);
        _this.boxGrp.add(_this.box5);
        _this.boxGrp.add(_this.box6);
        _this.boxGrp.add(_this.box7);
        _this.boxGrp.add(_this.box8);
        _this.boxGrp.add(_this.box9);
        _this.boxGrp.add(_this.box10);
        _this.boxGrp.add(_this.box11);
        _this.boxGrp.add(_this.box12);
        _this.boxGrp.add(_this.box13);
        _this.boxGrp.add(_this.box14);
        _this.boxGrp.add(_this.box15);
        _this.boxGrp.add(_this.box16);
        _this.boxGrp.add(_this.box17);
        _this.boxGrp.add(_this.box18);
        _this.boxGrp.add(_this.box19);
        _this.boxGrp.add(_this.box20);
        
         _this.dragboxGrp = _this.add.group();
        
        _this.dragbox1 =_this.add.sprite(630,120,'unity3_1_1box');
        _this.dragbox1.anchor.setTo(0.5); 
        _this.dragbox1.scale.setTo(1.8,1.8);
        _this.dragbox1.frame=0;
        _this.dragbox1.name="box1";
        _this.dragbox1.inputEnabled = true;
        _this.dragbox1.input.useHandCursor = true;
        _this.dragbox1.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox2 =_this.add.sprite(690,120,'unity3_1_1box');
        _this.dragbox2.anchor.setTo(0.5);
        _this.dragbox2.scale.setTo(1.8,1.8);
        _this.dragbox2.frame=0;
        _this.dragbox2.name="box2";
        _this.dragbox2.inputEnabled = true;
        _this.dragbox2.input.useHandCursor = true;
        _this.dragbox2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox3 =_this.add.sprite(750,120,'unity3_1_1box');
        _this.dragbox3.anchor.setTo(0.5);
        _this.dragbox3.scale.setTo(1.8,1.8);
        _this.dragbox3.frame=0;
        _this.dragbox3.name="box3";
        _this.dragbox3.inputEnabled = true;
        _this.dragbox3.input.useHandCursor = true;
        _this.dragbox3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox4 =_this.add.sprite(810,120,'unity3_1_1box');
        _this.dragbox4.anchor.setTo(0.5);
        _this.dragbox4.scale.setTo(1.8,1.8);
        _this.dragbox4.frame=0;
        _this.dragbox4.name="box4";
        _this.dragbox4.inputEnabled = true;
        _this.dragbox4.input.useHandCursor = true;
        _this.dragbox4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox5 =_this.add.sprite(870,120,'unity3_1_1box');
        _this.dragbox5.anchor.setTo(0.5);
        _this.dragbox5.scale.setTo(1.8,1.8);
        _this.dragbox5.frame=0;
        _this.dragbox5.name="box5";
        _this.dragbox5.inputEnabled = true;
        _this.dragbox5.input.useHandCursor = true;
        _this.dragbox5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox6 =_this.add.sprite(630,190,'unity3_1_1box');
        _this.dragbox6.anchor.setTo(0.5);
        _this.dragbox6.scale.setTo(1.8,1.8);
        _this.dragbox6.frame=0;
        _this.dragbox6.name="box6";
        _this.dragbox6.inputEnabled = true;
        _this.dragbox6.input.useHandCursor = true;
        _this.dragbox6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox7 =_this.add.sprite(690,190,'unity3_1_1box');
        _this.dragbox7.anchor.setTo(0.5);
        _this.dragbox7.scale.setTo(1.8,1.8);
        _this.dragbox7.frame=0;
        _this.dragbox7.name="box7";
        _this.dragbox7.inputEnabled = true;
        _this.dragbox7.input.useHandCursor = true;
        _this.dragbox7.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox8 =_this.add.sprite(750,190,'unity3_1_1box');
        _this.dragbox8.anchor.setTo(0.5);
        _this.dragbox8.scale.setTo(1.8,1.8);
        _this.dragbox8.frame=0;
        _this.dragbox8.name="box8";
        _this.dragbox8.inputEnabled = true;
        _this.dragbox8.input.useHandCursor = true;
        _this.dragbox8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox9 =_this.add.sprite(810,190,'unity3_1_1box');
        _this.dragbox9.anchor.setTo(0.5);
        _this.dragbox9.scale.setTo(1.8,1.8);
        _this.dragbox9.frame=0;
        _this.dragbox9.name="box9";
        _this.dragbox9.inputEnabled = true;
        _this.dragbox9.input.useHandCursor = true;
        _this.dragbox9.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox10 =_this.add.sprite(870,190,'unity3_1_1box');
        _this.dragbox10.anchor.setTo(0.5);
        _this.dragbox10.scale.setTo(1.8,1.8);
        _this.dragbox10.frame=0;
        _this.dragbox10.name="box10";
        _this.dragbox10.inputEnabled = true;
        _this.dragbox10.input.useHandCursor = true;
        _this.dragbox10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox11 =_this.add.sprite(630,260,'unity3_1_1box');
        _this.dragbox11.anchor.setTo(0.5); 
        _this.dragbox11.scale.setTo(1.8,1.8);
        _this.dragbox11.frame=0;
        _this.dragbox11.name="box11";
        _this.dragbox11.inputEnabled = true;
        _this.dragbox11.input.useHandCursor = true;
        _this.dragbox11.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragbox12 =_this.add.sprite(690,260,'unity3_1_1box');
        _this.dragbox12.anchor.setTo(0.5);
        _this.dragbox12.scale.setTo(1.8,1.8);
        _this.dragbox12.frame=0;
        _this.dragbox12.name="box12";
        _this.dragbox12.inputEnabled = true;
        _this.dragbox12.input.useHandCursor = true;
        _this.dragbox12.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox13 =_this.add.sprite(750,260,'unity3_1_1box');
        _this.dragbox13.anchor.setTo(0.5);
        _this.dragbox13.scale.setTo(1.8,1.8);
        _this.dragbox13.frame=0;
        _this.dragbox13.name="box13";
        _this.dragbox13.inputEnabled = true;
        _this.dragbox13.input.useHandCursor = true;
        _this.dragbox13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox14 =_this.add.sprite(810,260,'unity3_1_1box');
        _this.dragbox14.anchor.setTo(0.5);
        _this.dragbox14.scale.setTo(1.8,1.8);
        _this.dragbox14.frame=0;
        _this.dragbox14.name="box14";
        _this.dragbox14.inputEnabled = true;
        _this.dragbox14.input.useHandCursor = true;
        _this.dragbox14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox15 =_this.add.sprite(870,260,'unity3_1_1box');
        _this.dragbox15.anchor.setTo(0.5);
        _this.dragbox15.scale.setTo(1.8,1.8);
        _this.dragbox15.frame=0;
        _this.dragbox15.name="box15";
        _this.dragbox15.inputEnabled = true;
        _this.dragbox15.input.useHandCursor = true;
        _this.dragbox15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox16 =_this.add.sprite(630,330,'unity3_1_1box');
        _this.dragbox16.anchor.setTo(0.5);
        _this.dragbox16.scale.setTo(1.8,1.8);
        _this.dragbox16.frame=0;
        _this.dragbox16.name="box16";
        _this.dragbox16.inputEnabled = true;
        _this.dragbox16.input.useHandCursor = true;
        _this.dragbox16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox17 =_this.add.sprite(690,330,'unity3_1_1box');
        _this.dragbox17.anchor.setTo(0.5);
        _this.dragbox17.scale.setTo(1.8,1.8);
        _this.dragbox17.frame=0;
        _this.dragbox17.name="box17";
        _this.dragbox17.inputEnabled = true;
        _this.dragbox17.input.useHandCursor = true;
        _this.dragbox17.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox18 =_this.add.sprite(750,330,'unity3_1_1box');
        _this.dragbox18.anchor.setTo(0.5);
        _this.dragbox18.scale.setTo(1.8,1.8);
        _this.dragbox18.frame=0;
        _this.dragbox18.name="box18";
        _this.dragbox18.inputEnabled = true;
        _this.dragbox18.input.useHandCursor = true;
        _this.dragbox18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragbox19 =_this.add.sprite(810,330,'unity3_1_1box');
        _this.dragbox19.anchor.setTo(0.5);
        _this.dragbox19.scale.setTo(1.8,1.8);
        _this.dragbox19.frame=0;
        _this.dragbox19.name="box19";
        _this.dragbox19.inputEnabled = true;
        _this.dragbox19.input.useHandCursor = true;
        _this.dragbox19.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragbox20 =_this.add.sprite(870,330,'unity3_1_1box');
        _this.dragbox20.anchor.setTo(0.5);
        _this.dragbox20.scale.setTo(1.8,1.8);
        _this.dragbox20.frame=0;
        _this.dragbox20.name="box20";
        _this.dragbox20.inputEnabled = true;
        _this.dragbox20.input.useHandCursor = true;
        _this.dragbox20.events.onInputDown.add(_this.onDragStart,_this);
        
         _this.dragboxGrp.add(_this.dragbox1);
         _this.dragboxGrp.add(_this.dragbox2);
         _this.dragboxGrp.add(_this.dragbox3);
         _this.dragboxGrp.add(_this.dragbox4);
         _this.dragboxGrp.add(_this.dragbox5);
         _this.dragboxGrp.add(_this.dragbox6);
         _this.dragboxGrp.add(_this.dragbox7);
         _this.dragboxGrp.add(_this.dragbox8);
         _this.dragboxGrp.add(_this.dragbox9);
         _this.dragboxGrp.add(_this.dragbox10);
         _this.dragboxGrp.add(_this.dragbox11);
         _this.dragboxGrp.add(_this.dragbox12);
         _this.dragboxGrp.add(_this.dragbox13);
         _this.dragboxGrp.add(_this.dragbox14);
         _this.dragboxGrp.add(_this.dragbox15);
         _this.dragboxGrp.add(_this.dragbox16);
         _this.dragboxGrp.add(_this.dragbox17);
         _this.dragboxGrp.add(_this.dragbox18);
         _this.dragboxGrp.add(_this.dragbox19);
         _this.dragboxGrp.add(_this.dragbox20);
         
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_1scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_1ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_1ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
    
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_1numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_1numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
    
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);

        _this.rightAns="20";
        _this.dbox1 =_this.add.sprite(630,330,'unity3_1_1box');
        _this.dbox1.anchor.setTo(0.5); 
        _this.dbox1.scale.setTo(1.8,1.8);
        _this.dbox1.frame=0;
        
         _this.hand = _this.add.sprite(630,330,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dbox1);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dbox1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dbox1.destroy();
            },this);
            },this);
            },this);
     
},
    
    
    
numberBoxClicked:function(target){
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
        if(target.name == "numbox1")
        {
           
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
             _this.txtbox1.frame = 1;
             _this.txtbox2.frame = 0;
        } 
        if(target.name == "numbox2")
        {
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
             _this.txtbox2.frame = 1;
             _this.txtbox1.frame = 0;
             
        } 
      
       
    if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            
        _this.time.events.add(200, function(){    
        _this.addNumberPad();
        _this.numGroup.y=50;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
            target.events.onInputDown.removeAll();
        },_this);
        }
        
        
},

        

    
addNumberPad:function(target){
     
        //_this.clickSound = _this.add.audio('ClickSound');
        //_this.clickSound.play();
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box1 = _this.numGroup.create(480,510,'unity3_1_1b2');
        _this.box1.anchor.setTo(0.5);
        _this.x = 80;
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,510,'unity3_1_1numberpad');  
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.name =i;
            _this.numbg.frame=i;
            
            _this.numTxt = _this.add.text(-2,1);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';
            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            _this.numTxt.fill = '#FFFFFF';
            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild(_this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
    
        _this.wrongbtn = _this.numGroup.create(_this.x+30,510,'unity3_1_1eraser');
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(1,1);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        _this.rightbtn = _this.numGroup.create(_this.x+90,510,'unity3_1_1rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "wrongbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
    
        _this.wrongbtn.events.onInputDown.add(function(){
             _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
            _this.wrongbtn.frame=1;
            if(_this.numBox1Pressed){
                    _this.numBoxNum1.visible = false;
                }
                else if(_this.numBox2Pressed){
                    _this.numBoxNum2.visible = false;
                }
            
            _this.time.events.add(500, function(){
                _this.wrongbtn.frame=0;
            },_this);
        },_this);
    
      
       _this.rightbtn.events.onInputDown.add(function(target){
             _this.noofAttempts++;
             _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
            _this.rightbtn.frame=1;
        _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2;
             //console.log("selected Answer "+ _this.selectedAns1);
             //console.log("selected Answer "+ _this.selectedAns2);
             //console.log(_this.selectedAns);
             //console.log(_this.rightAns);
            _this.time.events.add(500, function(){
                _this.rightbtn.frame=0;
            },_this);
            if(_this.selectedAns==_this.rightAns) 
                {
                    //console.log("correct");

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


                        _this.currentTime = window.timeSaveFunc();
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
                    
                       // absdsjsapi.saveAssessment(_this.saveAsment);
                    _this.noofAttempts++;
                  telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

                    _this.rightbtn.frame=1;
                    _this.txtbox1.visible=false;
                     _this.txtbox2.visible=false;
                    target.events.onInputDown.removeAll();
                    
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                   
                    _this.time.events.add(1000, function(){_this.removeCelebration();},_this);
                }
            else
                {
                   
                     //console.log("wrong");
                    _this.selectedAns = "";
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.time.events.add(500, function(){
                _this.rightbtn.frame=0;
            },_this);
                    _this.wmusic = _this.add.audio('waudio');
		            _this.wmusic.play(); 
                    _this.numBoxNum1.visible = false;
                    _this.numBoxNum2.visible = false;
                    
                }
  
        },_this);

       
},
numClicked:function(target){
     //console.log(target.name);
        
       //  _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level3.1.1_"+target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         _this.tapsound = _this.add.audio('tap');
         _this.tapsound.play();
         
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name;
             _this.txtbox1.frame = 0;
             _this.txtbox2.frame = 1;
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
         }
         else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name;
             _this.txtbox2.frame = 0;
             _this.txtbox1.frame = 1;
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
         }
       
         
       
     },
    
     
     onDragStart:function(target){
         
         //_this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level3.1.1_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
      
      target.events.onDragStop.add(function(target)
        {
            //console.log("dragboxGr :"+target.name);
            //console.log("dragboxGrkey :"+target.key);
            for(var i=0;i<_this.dragboxGrp1.length;i++)
            {
                 //console.log("target.name:"+target.name);
                if(_this.checkOverlap(target,_this.graphics1))
                { 
                    
                    if(_this.correct < _this.cube)
                        {
                           _this.A=-1;
                           _this.obj.frame = _this.correct;
                        }
                    else if(_this.correct < _this.cube1)
                       {
                           _this.B=-1;
                            //console.log("hhhh "+_this.A);
                           _this.obj1.visible = true;
                           _this.obj1.frame =  _this.A;
                       }
                    else if(_this.correct < _this.cube2)
                       {
                            _this.C=-1;
                            //console.log("hhhh "+_this.B);
                           _this.obj2.visible = true;
                           _this.obj2.frame =  _this.B;
                       }
                      else if(_this.correct < _this.cube3)
                       {
                            _this.D=-1;
                            //console.log("hhhh "+_this.C);
                           _this.obj3.visible = true;
                           _this.obj3.frame =  _this.C;
                       }
                     else if(_this.correct < _this.cube4)
                       {
                           _this.E=-1;
                            //console.log("hhhh "+_this.D);
                           _this.obj4.visible = true;
                           _this.obj4.frame =  _this.D;
                       }
                   
                     _this.correct++;
                     _this.A++;
                     _this.B++;
                     _this.C++;
                     _this.D++;
                     _this.E++;
                     target.visible = false;
                    _this.dragboxGrp1.getChildAt(i).visible = true;
                    _this.click2 = _this.add.audio('snapSound');
                    _this.click2.play();
                if(_this.correct >=_this.cube &&  _this.questioNo==1)
                    {
                        _this.obj.frame = 16;
                         //console.log("dddd");
                         _this.tinklesound = _this.add.audio('tinklesound');
                         _this.tinklesound.play();
                      
                    if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                        
                 }
                        
                    }
                  if(_this.questioNo==2)
                 {
                     if(_this.correct ==_this.cube)
                         {
                            _this.obj.frame = 16;
                        _this.tinklesound = _this.add.audio('tinklesound');
                         _this.tinklesound.play();
                         }
                       
                     if(_this.correct ==_this.cube1)
                    {
                         //console.log("target.name:"+target.name);
                        _this.obj1.frame = 16;
                         _this.tinklesound = _this.add.audio('tinklesound');
                         _this.tinklesound.play();
                       if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                    }
                 }
                    
                   if(_this.questioNo==3)

                  {
                       if(_this.correct ==_this.cube)
                         {
                           _this.obj.frame = 16;
                           _this.tinklesound = _this.add.audio('tinklesound');
                           _this.tinklesound.play();
                         }
                      
                      if(_this.correct ==_this.cube1)
                          {
                                //console.log("target.name:"+target.name);
                                _this.obj1.frame = 16;
                               _this.tinklesound = _this.add.audio('tinklesound');
                               _this.tinklesound.play();
                          }
                      if(_this.correct ==_this.cube2)
                          {
                                //console.log("target.name:"+target.name);
                                _this.obj2.frame = 16;
                               _this.tinklesound = _this.add.audio('tinklesound');
                              _this.tinklesound.play();
                             if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                          }
                  }
                    
                    if(_this.correct >=_this.cube &&  _this.questioNo==4)
                    {
                        _this.obj.frame = 10;
                         //console.log("dddd");
                         _this.tinklesound = _this.add.audio('tinklesound');
                         _this.tinklesound.play();
                      
                    if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                        
                 }
                        
                    }
                  if(_this.questioNo==5)

                  {
                     if(_this.correct ==_this.cube)
                         {
                            _this.obj.frame = 10;
                        _this.tinklesound = _this.add.audio('tinklesound');
                         _this.tinklesound.play();
                         }
                       
                     if(_this.correct ==_this.cube1)
                    {
                         //console.log("target.name:"+target.name);
                        _this.obj1.frame = 10;
                         _this.tinklesound = _this.add.audio('tinklesound');
                         _this.tinklesound.play();
                       if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                    }
                 }
                    
               
             if(_this.questioNo==6)

                  {
                     if(_this.correct ==_this.cube)
                         {
                            _this.obj.frame = 16;
                        _this.tinklesound = _this.add.audio('tinklesound');
                         _this.tinklesound.play();
                         }
                       
                     if(_this.correct ==_this.cube1)
                    {
                         //console.log("target.name:"+target.name);
                        _this.obj1.frame = 16;
                         _this.tinklesound = _this.add.audio('tinklesound');
                         _this.tinklesound.play();
                       if( _this.toCheckNumberPad)
                    {
                        _this.toCheckNumberPad = false;
                        _this.time.events.add(200, function(){    
                        _this.addNumberPad();
                        _this.numGroup.y=50;
                        _this.Maintween = _this.add.tween(_this.numGroup);
                        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
                        _this.txtbox1.frame = 1;
                        _this.numBox1Pressed = true;
                          
                   },_this);
                 }
                    }
                 }
                      
                    
                  
                     break;
                     
                }
                 
            }
           
            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
         
    },_this);
         
              
     },
    
    checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    },  
                


    removeCelebration:function()
	{
        //console.log("removeCeleb");
		_this.celebration = false;
		//console.log("no"+_this.no11);
       // _this.counterForTimer=0;
        _this.correct=0;
        _this.count=0;
        _this.correctflag=0;
        _this.no11++;
		   
		  if(_this.no11<6)
                    {
                      //_this.timer1.stop();
                        _this.selectedAns1 = "";
                        _this.selectedAns2 = "";
                        _this.tbox.destroy();
                        _this.boxGrp.destroy();
                        _this.numGroup.destroy();
                        _this.scorebox.destroy();
                         _this.numboxGrp.destroy();
                        _this.dragboxGrp.destroy();
                        _this.dragboxGrp1.destroy();
                        _this.time.events.add(500,function(){
                        _this.getQuestion();
                    },_this);
                 
                    }
        
                else
                    {
                         
                         _this.stopvoice();
                        //_this.timer1.stop();
                         //_this.timer1=null;
                         _this.state.start('unity3_1_1aScore');
                    }



		
	},

     
    
  correctAns:function(target)
	{
        
       
        _this.stopvoice();
         target.events.onInputDown.removeAll();
        _this.speaker.inputEnabled=false;
        _this.rightmark.inputEnabled=false;
        _this.rightmark.events.onInputUp.removeAll();
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "level3_1_1_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
      if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
              }
        _this.currentTime = window.timeSaveFunc();
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
                    
               //absdsjsapi.saveAssessment(_this.saveAsment);
        //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
               
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		//console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();
     
		//console.log("correct11");
        _this.speaker.inputEnabled=false;
        _this.count1++;
       
		_this.celebration = true;
		
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();
		
        _this.time.events.add(2000, _this.removeCelebration, _this);

 
	},

    

  wrongAns:function(target)
	{
        
        _this.stopvoice();
        
        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
       
        _this.timer1.stop();
        _this.noofAttempts++;
        
         //_this.currentTime = window.timeSaveFunc();
       /*  _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 
               

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
		
        */
   
	},
    
   
    
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/English/10cube.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Hindi/10cube.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Kannada/10cube.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.1/10cube.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Odiya/10cube.mp3");

                    }
                    break;
            case 2: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/English/20cube.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Hindi/20cube.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Kannada/20cube.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.1/20cube.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Odiya/20cube.mp3");

                    }
                    break;
            case 3: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/English/30cube.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Hindi/30cube.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Kannada/30cube.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.1/30cube.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Odiya/30cube.mp3");

                    }
                    break;
            case 4: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/English/10stick.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Hindi/10stick.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Kannada/10stick.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.1/10stick.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Odiya/10stick.mp3");

                    }
                    break;
            case 5: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/English/20stick.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Hindi/20stick.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Kannada/20stick.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.1/20stick.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Odiya/20stick.mp3");

                    }
                    break;
            case 6: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/English/20cube.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Hindi/20cube.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Kannada/20cube.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.1/20cube.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Odiya/20cube.mp3");

                    }
                    break;
          /*  case 7: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/English/10stick.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Hindi/10stick.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Kannada/10stick.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Odiya/10stick.mp3");

                    }
                    break;
            case 8:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/English/20stick.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Hindi/20stick.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Kannada/20stick.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.1/Odiya/20stick.mp3");

                    }
                    break;
               */
                
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
                   //console.log("here");
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
        }         
   

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       