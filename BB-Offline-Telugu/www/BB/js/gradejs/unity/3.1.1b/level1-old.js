Game.unity3_1_1blevel1=function(){};

Game.unity3_1_1blevel1.prototype={
    init:function(game)
    {
       _this = this;
       telInitializer.gameIdInit("unity3_1_1b",gradeSelected);
       
    },

create:function(game)
    {
        _this.sceneCount = 0;
        
        _this.check = 0;
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
        _this.clickSound;
        _this.tinklesound;
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
        
        _this.correct=0;
        _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;
       
        _this.qArrays = new Array();
        _this.qArrays = [3,2,3,4,5,2];
        _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity3_1_2backg');
        
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
        
     /*   _this.dotbox=_this.add.sprite(70,7,'unity3_1_1Adotbox');
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
        
        _this.check = 0;
        _this.obj=0;
        _this.obj1=0;
        _this.obj2=0;
        _this.obj3=0;
        _this.obj4=0;
        
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
            /* case 7: _this.gotoSeventhQuestion();
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
        
        _this.obj=10;
        
        _this.tbox =_this.add.sprite(240,260,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30,-30, 360,230);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp2 =_this.add.sprite(230,190,'unity3_1_2coinanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1.6,1.6); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp2);
        
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(580,230,'unity3_1_2coin');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(1.3,1.3);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(660,230,'unity3_1_2coin');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(1.3,1.3);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(740,230,'unity3_1_2coin');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(1.3,1.3);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(820,230,'unity3_1_2coin');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(1.3,1.3);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(900,230,'unity3_1_2coin');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(1.3,1.3);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(580,300,'unity3_1_2coin');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(1.3,1.3);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(660,300,'unity3_1_2coin');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(1.3,1.3);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(740,300,'unity3_1_2coin');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(1.3,1.3);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(820,300,'unity3_1_2coin');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(1.3,1.3);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(900,300,'unity3_1_2coin');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(1.3,1.3);
        _this.coin10.frame=1;
    
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(580,230,'unity3_1_2coin');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(1.3,1.3); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(660,230,'unity3_1_2coin');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(1.3,1.3); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(740,230,'unity3_1_2coin');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(1.3,1.3); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(820,230,'unity3_1_2coin');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(1.3,1.3); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(900,230,'unity3_1_2coin');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(1.3,1.3); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(580,300,'unity3_1_2coin');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(1.3,1.3); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(660,300,'unity3_1_2coin');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(1.3,1.3); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(740,300,'unity3_1_2coin');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(1.3,1.3); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(820,300,'unity3_1_2coin');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(1.3,1.3); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(900,300,'unity3_1_2coin');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(1.3,1.3); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="10";
        
        _this.dcoin1 =_this.add.sprite(580,300,'unity3_1_2coin');
        _this.dcoin1.anchor.setTo(0.5); 
        _this.dcoin1.scale.setTo(1.3,1.3); 
        _this.dcoin1.frame=0;
        
         _this.hand = _this.add.sprite(580,300,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dcoin1);
         tween1.to({ x:160 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:160 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dcoin1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dcoin1.destroy();
            },this);
            },this);
            },this);
     
},
    

gotoSecondQuestion:function(){
       
        _this.getVoice();
        _this.questioNo = 2;
        
        _this.obj=10;
        _this.obj1=20;
    
        
        _this.tbox =_this.add.sprite(240,260,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30,-30, 360,230);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp2 =_this.add.sprite(180,190,'unity3_1_2coinanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1.6,1.6); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
    
        _this.coinp1 =_this.add.sprite(300,190,'unity3_1_2coinanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(1.6,1.6); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp2);
        _this.dragcoinGrp1.add(_this.coinp1);
        
         
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(580,120,'unity3_1_2coin');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(1.3,1.3);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(660,120,'unity3_1_2coin');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(1.3,1.3);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(740,120,'unity3_1_2coin');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(1.3,1.3);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(820,120,'unity3_1_2coin');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(1.3,1.3);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(900,120,'unity3_1_2coin');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(1.3,1.3);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(580,190,'unity3_1_2coin');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(1.3,1.3);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(660,190,'unity3_1_2coin');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(1.3,1.3);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(740,190,'unity3_1_2coin');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(1.3,1.3);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(820,190,'unity3_1_2coin');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(1.3,1.3);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(900,190,'unity3_1_2coin');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(1.3,1.3);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(580,260,'unity3_1_2coin');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(1.3,1.3);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(660,260,'unity3_1_2coin');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(1.3,1.3);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(740,260,'unity3_1_2coin');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(1.3,1.3);
        _this.coin13.frame=1;
        
        _this.coin14 =_this.add.sprite(820,260,'unity3_1_2coin');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(1.3,1.3);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(900,260,'unity3_1_2coin');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(1.3,1.3);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(580,330,'unity3_1_2coin');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(1.3,1.3);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(660,330,'unity3_1_2coin');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(1.3,1.3);
        _this.coin17.frame=1;
        
        _this.coin18 =_this.add.sprite(740,330,'unity3_1_2coin');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(1.3,1.3);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(820,330,'unity3_1_2coin');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(1.3,1.3);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(900,330,'unity3_1_2coin');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(1.3,1.3);
        _this.coin20.frame=1;
        
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
    
        _this.dragcoinGrp= _this.add.group();
       
        _this.dragcoin1 =_this.add.sprite(580,120,'unity3_1_2coin');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(1.3,1.3); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(660,120,'unity3_1_2coin');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(1.3,1.3); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(740,120,'unity3_1_2coin');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(1.3,1.3); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(820,120,'unity3_1_2coin');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(1.3,1.3); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(900,120,'unity3_1_2coin');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(1.3,1.3); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(580,190,'unity3_1_2coin');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(1.3,1.3); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(660,190,'unity3_1_2coin');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(1.3,1.3); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(740,190,'unity3_1_2coin');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(1.3,1.3); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(820,190,'unity3_1_2coin');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(1.3,1.3); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(900,190,'unity3_1_2coin');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(1.3,1.3); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(580,260,'unity3_1_2coin');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(1.3,1.3); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(660,260,'unity3_1_2coin');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(1.3,1.3); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(740,260,'unity3_1_2coin');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(1.3,1.3); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin14 =_this.add.sprite(820,260,'unity3_1_2coin');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(1.3,1.3); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(900,260,'unity3_1_2coin');
        _this.dragcoin15.anchor.setTo(0.5); 
        _this.dragcoin15.scale.setTo(1.3,1.3); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(580,330,'unity3_1_2coin');
        _this.dragcoin16.anchor.setTo(0.5);
        _this.dragcoin16.scale.setTo(1.3,1.3); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=16;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(660,330,'unity3_1_2coin');
        _this.dragcoin17.anchor.setTo(0.5);
        _this.dragcoin17.scale.setTo(1.3,1.3); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin18 =_this.add.sprite(740,330,'unity3_1_2coin');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(1.3,1.3); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(820,330,'unity3_1_2coin');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(1.3,1.3); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(900,330,'unity3_1_2coin');
        _this.dragcoin20.anchor.setTo(0.5); 
        _this.dragcoin20.scale.setTo(1.3,1.3); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=20;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="20";
    
        _this.dcoin1 =_this.add.sprite(580,330,'unity3_1_2coin');
        _this.dcoin1.anchor.setTo(0.5); 
        _this.dcoin1.scale.setTo(1.3,1.3); 
        _this.dcoin1.frame=0;
        
         _this.hand = _this.add.sprite(580,330,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dcoin1);
         tween1.to({ x:160 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:160 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dcoin1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dcoin1.destroy();
            },this);
            },this);
            },this);
    
},
    
    
gotoThirdQuestion:function(){
       
      _this.getVoice();
        _this.questioNo = 3;
        
       // _this.obj=10;
        //_this.obj1=20;
       // _this.obj2=30;
    
        
        _this.tbox =_this.add.sprite(240,260,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.3,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30,-30,360,230);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp =_this.add.sprite(130,190,'unity3_1_2coinanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(1.6,1.6); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
    
        _this.coinp1 =_this.add.sprite(230,190,'unity3_1_2coinanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(1.6,1.6); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
    
        _this.coinp2 =_this.add.sprite(330,190,'unity3_1_2coinanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1.6,1.6); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp1);
        _this.dragcoinGrp1.add(_this.coinp2);
        
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(610,100,'unity3_1_2coin');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(1.2,1.2);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(680,100,'unity3_1_2coin');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(1.2,1.2);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(750,100,'unity3_1_2coin');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(1.2,1.2);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(820,100,'unity3_1_2coin');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(1.2,1.2);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(890,100,'unity3_1_2coin');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(1.2,1.2);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(610,170,'unity3_1_2coin');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(1.2,1.2);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(680,170,'unity3_1_2coin');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(1.2,1.2);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(750,170,'unity3_1_2coin');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(1.2,1.2);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(820,170,'unity3_1_2coin');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(1.2,1.2);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(890,170,'unity3_1_2coin');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(1.2,1.2);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(610,240,'unity3_1_2coin');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(1.2,1.2);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(680,240,'unity3_1_2coin');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(1.2,1.2);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(750,240,'unity3_1_2coin');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(1.2,1.2);
        _this.coin13.frame=1;
        
        _this.coin14 =_this.add.sprite(820,240,'unity3_1_2coin');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(1.2,1.2);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(890,240,'unity3_1_2coin');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(1.2,1.2);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(610,310,'unity3_1_2coin');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(1.2,1.2);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(680,310,'unity3_1_2coin');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(1.2,1.2);
        _this.coin17.frame=1;
        
        _this.coin18 =_this.add.sprite(750,310,'unity3_1_2coin');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(1.2,1.2);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(820,310,'unity3_1_2coin');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(1.2,1.2);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(890,310,'unity3_1_2coin');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(1.2,1.2);
        _this.coin20.frame=1;
    
        _this.coin21 =_this.add.sprite(610,380,'unity3_1_2coin');
        _this.coin21.anchor.setTo(0.5);
        _this.coin21.scale.setTo(1.2,1.2);
        _this.coin21.frame=1;
        
        _this.coin22 =_this.add.sprite(680,380,'unity3_1_2coin');
        _this.coin22.anchor.setTo(0.5);
        _this.coin22.scale.setTo(1.2,1.2);
        _this.coin22.frame=1;
        
        _this.coin23 =_this.add.sprite(750,380,'unity3_1_2coin');
        _this.coin23.anchor.setTo(0.5);
        _this.coin23.scale.setTo(1.2,1.2);
        _this.coin23.frame=1;
        
        _this.coin24 =_this.add.sprite(820,380,'unity3_1_2coin');
        _this.coin24.anchor.setTo(0.5);
        _this.coin24.scale.setTo(1.2,1.2);
        _this.coin24.frame=1;
        
        _this.coin25 =_this.add.sprite(890,380,'unity3_1_2coin');
        _this.coin25.anchor.setTo(0.5);
        _this.coin25.scale.setTo(1.2,1.2);
        _this.coin25.frame=1;
        
        _this.coin26 =_this.add.sprite(610,450,'unity3_1_2coin');
        _this.coin26.anchor.setTo(0.5);
        _this.coin26.scale.setTo(1.2,1.2);
        _this.coin26.frame=1;
        
        _this.coin27 =_this.add.sprite(680,450,'unity3_1_2coin');
        _this.coin27.anchor.setTo(0.5);
        _this.coin27.scale.setTo(1.2,1.2);
        _this.coin27.frame=1;
        
        _this.coin28 =_this.add.sprite(750,450,'unity3_1_2coin');
        _this.coin28.anchor.setTo(0.5);
        _this.coin28.scale.setTo(1.2,1.2);
        _this.coin28.frame=1;
        
        _this.coin29 =_this.add.sprite(820,450,'unity3_1_2coin');
        _this.coin29.anchor.setTo(0.5);
        _this.coin29.scale.setTo(1.2,1.2);
        _this.coin29.frame=1;
        
        _this.coin30 =_this.add.sprite(890,450,'unity3_1_2coin');
        _this.coin30.anchor.setTo(0.5);
        _this.coin30.scale.setTo(1.2,1.2);
        _this.coin30.frame=1;
        
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
        _this.coinGrp.add(_this.coin21);
        _this.coinGrp.add(_this.coin22);
        _this.coinGrp.add(_this.coin23);
        _this.coinGrp.add(_this.coin24);
        _this.coinGrp.add(_this.coin25);
        _this.coinGrp.add(_this.coin26);
        _this.coinGrp.add(_this.coin27);
        _this.coinGrp.add(_this.coin28);
        _this.coinGrp.add(_this.coin29);
        _this.coinGrp.add(_this.coin30);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(610,100,'unity3_1_2coin');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(1.2,1.2); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(680,100,'unity3_1_2coin');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(1.2,1.2); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(750,100,'unity3_1_2coin');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(1.2,1.2); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(820,100,'unity3_1_2coin');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(1.2,1.2); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(890,100,'unity3_1_2coin');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(1.2,1.2); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(610,170,'unity3_1_2coin');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(1.2,1.2); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(680,170,'unity3_1_2coin');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(1.2,1.2); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(750,170,'unity3_1_2coin');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(1.2,1.2); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(820,170,'unity3_1_2coin');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(1.2,1.2); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(890,170,'unity3_1_2coin');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(1.2,1.2); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(610,240,'unity3_1_2coin');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(1.2,1.2); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(680,240,'unity3_1_2coin');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(1.2,1.2); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(750,240,'unity3_1_2coin');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(1.2,1.2); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin14 =_this.add.sprite(820,240,'unity3_1_2coin');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(1.2,1.2); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(890,240,'unity3_1_2coin');
        _this.dragcoin15.anchor.setTo(0.5); 
        _this.dragcoin15.scale.setTo(1.2,1.2); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(610,310,'unity3_1_2coin');
        _this.dragcoin16.anchor.setTo(0.5);
        _this.dragcoin16.scale.setTo(1.2,1.2); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=16;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(680,310,'unity3_1_2coin');
        _this.dragcoin17.anchor.setTo(0.5);
        _this.dragcoin17.scale.setTo(1.2,1.2); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin18 =_this.add.sprite(750,310,'unity3_1_2coin');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(1.2,1.2); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(820,310,'unity3_1_2coin');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(1.2,1.2); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(890,310,'unity3_1_2coin');
        _this.dragcoin20.anchor.setTo(0.5); 
        _this.dragcoin20.scale.setTo(1.2,1.2); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=20;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoin21 =_this.add.sprite(610,380,'unity3_1_2coin');
        _this.dragcoin21.anchor.setTo(0.5); 
        _this.dragcoin21.scale.setTo(1.2,1.2); 
        _this.dragcoin21.frame=0;
        _this.dragcoin21.name=21;
        _this.dragcoin21.inputEnabled = true;
        _this.dragcoin21.input.useHandCursor = true;
        _this.dragcoin21.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin22 =_this.add.sprite(680,380,'unity3_1_2coin');
        _this.dragcoin22.anchor.setTo(0.5); 
        _this.dragcoin22.scale.setTo(1.2,1.2); 
        _this.dragcoin22.frame=0;
        _this.dragcoin22.name=22;
        _this.dragcoin22.inputEnabled = true;
        _this.dragcoin22.input.useHandCursor = true;
        _this.dragcoin22.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin23 =_this.add.sprite(750,380,'unity3_1_2coin');
        _this.dragcoin23.anchor.setTo(0.5); 
        _this.dragcoin23.scale.setTo(1.2,1.2); 
        _this.dragcoin23.frame=0;
        _this.dragcoin23.name=23;
        _this.dragcoin23.inputEnabled = true;
        _this.dragcoin23.input.useHandCursor = true;
        _this.dragcoin23.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin24 =_this.add.sprite(820,380,'unity3_1_2coin');
        _this.dragcoin24.anchor.setTo(0.5); 
        _this.dragcoin24.scale.setTo(1.2,1.2); 
        _this.dragcoin24.frame=0;
        _this.dragcoin24.name=24;
        _this.dragcoin24.inputEnabled = true;
        _this.dragcoin24.input.useHandCursor = true;
        _this.dragcoin24.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin25 =_this.add.sprite(890,380,'unity3_1_2coin');
        _this.dragcoin25.anchor.setTo(0.5);
        _this.dragcoin25.scale.setTo(1.2,1.2); 
        _this.dragcoin25.frame=0;
        _this.dragcoin25.name=25;
        _this.dragcoin25.inputEnabled = true;
        _this.dragcoin25.input.useHandCursor = true;
        _this.dragcoin25.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin26 =_this.add.sprite(610,450,'unity3_1_2coin');
        _this.dragcoin26.anchor.setTo(0.5); 
        _this.dragcoin26.scale.setTo(1.2,1.2); 
        _this.dragcoin26.frame=0;
        _this.dragcoin26.name=26;
        _this.dragcoin26.inputEnabled = true;
        _this.dragcoin26.input.useHandCursor = true;
        _this.dragcoin26.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin27 =_this.add.sprite(680,450,'unity3_1_2coin');
        _this.dragcoin27.anchor.setTo(0.5); 
        _this.dragcoin27.scale.setTo(1.2,1.2); 
        _this.dragcoin27.frame=0;
        _this.dragcoin27.name=27;
        _this.dragcoin27.inputEnabled = true;
        _this.dragcoin27.input.useHandCursor = true;
        _this.dragcoin27.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin28 =_this.add.sprite(750,450,'unity3_1_2coin');
        _this.dragcoin28.anchor.setTo(0.5); 
        _this.dragcoin28.scale.setTo(1.2,1.2); 
        _this.dragcoin28.frame=0;
        _this.dragcoin28.name=28;
        _this.dragcoin28.inputEnabled = true;
        _this.dragcoin28.input.useHandCursor = true;
        _this.dragcoin28.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin29 =_this.add.sprite(820,450,'unity3_1_2coin');
        _this.dragcoin29.anchor.setTo(0.5);
        _this.dragcoin29.scale.setTo(1.2,1.2); 
        _this.dragcoin29.frame=0;
        _this.dragcoin29.name=29;
        _this.dragcoin29.inputEnabled = true;
        _this.dragcoin29.input.useHandCursor = true;
        _this.dragcoin29.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin30 =_this.add.sprite(890,450,'unity3_1_2coin');
        _this.dragcoin30.anchor.setTo(0.5);
        _this.dragcoin30.scale.setTo(1.2,1.2); 
        _this.dragcoin30.frame=0;
        _this.dragcoin30.name=30;
        _this.dragcoin30.inputEnabled = true;
        _this.dragcoin30.input.useHandCursor = true;
        _this.dragcoin30.events.onInputDown.add(_this.onDragStart,_this);
    
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        _this.dragcoinGrp.add(_this.dragcoin21);
        _this.dragcoinGrp.add(_this.dragcoin22);
        _this.dragcoinGrp.add(_this.dragcoin23);
        _this.dragcoinGrp.add(_this.dragcoin24);
        _this.dragcoinGrp.add(_this.dragcoin25);
        _this.dragcoinGrp.add(_this.dragcoin26);
        _this.dragcoinGrp.add(_this.dragcoin27);
        _this.dragcoinGrp.add(_this.dragcoin28);
        _this.dragcoinGrp.add(_this.dragcoin29);
        _this.dragcoinGrp.add(_this.dragcoin30);
        
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="30";
    
        _this.dcoin1 =_this.add.sprite(610,450,'unity3_1_2coin');
        _this.dcoin1.anchor.setTo(0.5); 
        _this.dcoin1.scale.setTo(1.2,1.2); 
        _this.dcoin1.frame=0;
        
         _this.hand = _this.add.sprite(610,450,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dcoin1);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dcoin1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dcoin1.destroy();
            },this);
            },this);
            },this);
   
    
},
    
 gotoFourthQuestion:function(){
    
       _this.getVoice();
        _this.questioNo = 4;
        
        //_this.obj=10;
        //_this.obj1=20;

        _this.tbox =_this.add.sprite(240,260,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.4,1.2); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 360,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
        _this.coinp1 =_this.add.sprite(240,220,'unity3_1_2boxanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(1.8,1.8); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
    
        _this.coinp2 =_this.add.sprite(240,248,'unity3_1_2boxanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1.8,1.8); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
      
        _this.coinp =_this.add.sprite(240,277,'unity3_1_2boxanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(1.8,1.8); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
      
        _this.coinp3 =_this.add.sprite(180,295,'unity3_1_2boxanim');
        _this.coinp3.anchor.setTo(0.5);
        _this.coinp3.scale.setTo(0.8,0.9); 
        _this.coinp3.visible=false;
        _this.coinp3.frame=0;
        
        _this.dragcoinGrp1.add(_this.coinp1);
        _this.dragcoinGrp1.add(_this.coinp2);
        _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp3);
        
         _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(630,100,'unity3_1_2box');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(1.8,1.8);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(690,100,'unity3_1_2box');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(1.8,1.8);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(750,100,'unity3_1_2box');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(1.8,1.8);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(810,100,'unity3_1_2box');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(1.8,1.8);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(870,100,'unity3_1_2box');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(1.8,1.8);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(630,170,'unity3_1_2box');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(1.8,1.8);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(690,170,'unity3_1_2box');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(1.8,1.8);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(750,170,'unity3_1_2box');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(1.8,1.8);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(810,170,'unity3_1_2box');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(1.8,1.8);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(870,170,'unity3_1_2box');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(1.8,1.8);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(630,240,'unity3_1_2box');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(1.8,1.8);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(690,240,'unity3_1_2box');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(1.8,1.8);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(750,240,'unity3_1_2box');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(1.8,1.8);
        _this.coin13.frame=1;
      
        _this.coin14 =_this.add.sprite(810,240,'unity3_1_2box');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(1.8,1.8);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(870,240,'unity3_1_2box');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(1.8,1.8);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(630,310,'unity3_1_2box');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(1.8,1.8);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(690,310,'unity3_1_2box');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(1.8,1.8);
        _this.coin17.frame=1;
      
        _this.coin18 =_this.add.sprite(750,310,'unity3_1_2box');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(1.8,1.8);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(810,310,'unity3_1_2box');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(1.8,1.8);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(870,310,'unity3_1_2box');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(1.8,1.8);
        _this.coin20.frame=1;
      
        _this.coin21 =_this.add.sprite(630,380,'unity3_1_2box');
        _this.coin21.anchor.setTo(0.5);
        _this.coin21.scale.setTo(1.8,1.8);
        _this.coin21.frame=1;
        
        _this.coin22 =_this.add.sprite(690,380,'unity3_1_2box');
        _this.coin22.anchor.setTo(0.5);
        _this.coin22.scale.setTo(1.8,1.8);
        _this.coin22.frame=1;
        
        _this.coin23 =_this.add.sprite(750,380,'unity3_1_2box');
        _this.coin23.anchor.setTo(0.5);
        _this.coin23.scale.setTo(1.8,1.8);
        _this.coin23.frame=1;
        
        _this.coin24 =_this.add.sprite(810,380,'unity3_1_2box');
        _this.coin24.anchor.setTo(0.5);
        _this.coin24.scale.setTo(1.8,1.8);
        _this.coin24.frame=1;
        
        _this.coin25 =_this.add.sprite(870,380,'unity3_1_2box');
        _this.coin25.anchor.setTo(0.5);
        _this.coin25.scale.setTo(1.8,1.8);
        _this.coin25.frame=1;
        
        _this.coin26 =_this.add.sprite(630,450,'unity3_1_2box');
        _this.coin26.anchor.setTo(0.5);
        _this.coin26.scale.setTo(1.8,1.8);
        _this.coin26.frame=1;
        
        _this.coin27 =_this.add.sprite(690,450,'unity3_1_2box');
        _this.coin27.anchor.setTo(0.5);
        _this.coin27.scale.setTo(1.8,1.8);
        _this.coin27.frame=1;
        
        _this.coin28 =_this.add.sprite(750,450,'unity3_1_2box');
        _this.coin28.anchor.setTo(0.5);
        _this.coin28.scale.setTo(1.8,1.8);
        _this.coin28.frame=1;
        
        _this.coin29 =_this.add.sprite(810,450,'unity3_1_2box');
        _this.coin29.anchor.setTo(0.5);
        _this.coin29.scale.setTo(1.8,1.8);
        _this.coin29.frame=1;
        
        _this.coin30 =_this.add.sprite(870,450,'unity3_1_2box');
        _this.coin30.anchor.setTo(0.5);
        _this.coin30.scale.setTo(1.8,1.8);
        _this.coin30.frame=1;
    
       /* _this.coin31 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.coin31.anchor.setTo(0.5);
        _this.coin31.scale.setTo(0.85,1);
        _this.coin31.frame=1;
       */
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
        _this.coinGrp.add(_this.coin21);
        _this.coinGrp.add(_this.coin22);
        _this.coinGrp.add(_this.coin23);
        _this.coinGrp.add(_this.coin24);
        _this.coinGrp.add(_this.coin25);
        _this.coinGrp.add(_this.coin26);
        _this.coinGrp.add(_this.coin27);
        _this.coinGrp.add(_this.coin28);
        _this.coinGrp.add(_this.coin29);
        _this.coinGrp.add(_this.coin30);
        //_this.coinGrp.add(_this.coin31);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(630,100,'unity3_1_2box');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(1.8,1.8); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(690,100,'unity3_1_2box');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(1.8,1.8); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(750,100,'unity3_1_2box');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(1.8,1.8); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(810,100,'unity3_1_2box');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(1.8,1.8); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(870,100,'unity3_1_2box');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(1.8,1.8); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(630,170,'unity3_1_2box');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(1.8,1.8); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(690,170,'unity3_1_2box');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(1.8,1.8); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(750,170,'unity3_1_2box');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(1.8,1.8); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(810,170,'unity3_1_2box');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(1.8,1.8); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(870,170,'unity3_1_2box');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(1.8,1.8); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(630,240,'unity3_1_2box');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(1.8,1.8); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(690,240,'unity3_1_2box');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(1.8,1.8); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(750,240,'unity3_1_2box');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(1.8,1.8); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.dragcoin14 =_this.add.sprite(810,240,'unity3_1_2box');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(1.8,1.8); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(870,240,'unity3_1_2box');
        _this.dragcoin15.anchor.setTo(0.5);
        _this.dragcoin15.scale.setTo(1.8,1.8); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(630,310,'unity3_1_2box');
        _this.dragcoin16.anchor.setTo(0.5); 
        _this.dragcoin16.scale.setTo(1.8,1.8); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=6;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(690,310,'unity3_1_2box');
        _this.dragcoin17.anchor.setTo(0.5); 
        _this.dragcoin17.scale.setTo(1.8,1.8); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.dragcoin18 =_this.add.sprite(750,310,'unity3_1_2box');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(1.8,1.8); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(810,310,'unity3_1_2box');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(1.8,1.8); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(870,310,'unity3_1_2box');
        _this.dragcoin20.anchor.setTo(0.5);
        _this.dragcoin20.scale.setTo(1.8,1.8); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=10;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
      
        _this.dragcoin21 =_this.add.sprite(630,380,'unity3_1_2box');
        _this.dragcoin21.anchor.setTo(0.5); 
        _this.dragcoin21.scale.setTo(1.8,1.8); 
        _this.dragcoin21.frame=0;
        _this.dragcoin21.name=21;
        _this.dragcoin21.inputEnabled = true;
        _this.dragcoin21.input.useHandCursor = true;
        _this.dragcoin21.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin22 =_this.add.sprite(690,380,'unity3_1_2box');
        _this.dragcoin22.anchor.setTo(0.5); 
        _this.dragcoin22.scale.setTo(1.8,1.8); 
        _this.dragcoin22.frame=0;
        _this.dragcoin22.name=22;
        _this.dragcoin22.inputEnabled = true;
        _this.dragcoin22.input.useHandCursor = true;
        _this.dragcoin22.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin23 =_this.add.sprite(750,380,'unity3_1_2box');
        _this.dragcoin23.anchor.setTo(0.5); 
        _this.dragcoin23.scale.setTo(1.8,1.8); 
        _this.dragcoin23.frame=0;
        _this.dragcoin23.name=23;
        _this.dragcoin23.inputEnabled = true;
        _this.dragcoin23.input.useHandCursor = true;
        _this.dragcoin23.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin24 =_this.add.sprite(810,380,'unity3_1_2box');
        _this.dragcoin24.anchor.setTo(0.5); 
        _this.dragcoin24.scale.setTo(1.8,1.8); 
        _this.dragcoin24.frame=0;
        _this.dragcoin24.name=24;
        _this.dragcoin24.inputEnabled = true;
        _this.dragcoin24.input.useHandCursor = true;
        _this.dragcoin24.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin25 =_this.add.sprite(870,380,'unity3_1_2box');
        _this.dragcoin25.anchor.setTo(0.5);
        _this.dragcoin25.scale.setTo(1.8,1.8); 
        _this.dragcoin25.frame=0;
        _this.dragcoin25.name=25;
        _this.dragcoin25.inputEnabled = true;
        _this.dragcoin25.input.useHandCursor = true;
        _this.dragcoin25.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin26 =_this.add.sprite(630,450,'unity3_1_2box');
        _this.dragcoin26.anchor.setTo(0.5); 
        _this.dragcoin26.scale.setTo(1.8,1.8); 
        _this.dragcoin26.frame=0;
        _this.dragcoin26.name=26;
        _this.dragcoin26.inputEnabled = true;
        _this.dragcoin26.input.useHandCursor = true;
        _this.dragcoin26.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin27 =_this.add.sprite(690,450,'unity3_1_2box');
        _this.dragcoin27.anchor.setTo(0.5); 
        _this.dragcoin27.scale.setTo(1.8,1.8); 
        _this.dragcoin27.frame=0;
        _this.dragcoin27.name=27;
        _this.dragcoin27.inputEnabled = true;
        _this.dragcoin27.input.useHandCursor = true;
        _this.dragcoin27.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin28 =_this.add.sprite(750,450,'unity3_1_2box');
        _this.dragcoin28.anchor.setTo(0.5); 
        _this.dragcoin28.scale.setTo(1.8,1.8); 
        _this.dragcoin28.frame=0;
        _this.dragcoin28.name=28;
        _this.dragcoin28.inputEnabled = true;
        _this.dragcoin28.input.useHandCursor = true;
        _this.dragcoin28.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin29 =_this.add.sprite(810,450,'unity3_1_2box');
        _this.dragcoin29.anchor.setTo(0.5);
        _this.dragcoin29.scale.setTo(1.8,1.8); 
        _this.dragcoin29.frame=0;
        _this.dragcoin29.name=29;
        _this.dragcoin29.inputEnabled = true;
        _this.dragcoin29.input.useHandCursor = true;
        _this.dragcoin29.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin30 =_this.add.sprite(870,450,'unity3_1_2box');
        _this.dragcoin30.anchor.setTo(0.5);
        _this.dragcoin30.scale.setTo(1.8,1.8); 
        _this.dragcoin30.frame=0;
        _this.dragcoin30.name=30;
        _this.dragcoin30.inputEnabled = true;
        _this.dragcoin30.input.useHandCursor = true;
        _this.dragcoin30.events.onInputDown.add(_this.onDragStart,_this);
      
      /*  _this.dragcoin31 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.dragcoin31.anchor.setTo(0.5);
        _this.dragcoin31.scale.setTo(0.85,1); 
        _this.dragcoin31.frame=0;
        _this.dragcoin31.name=31;
        _this.dragcoin31.inputEnabled = true;
        _this.dragcoin31.input.useHandCursor = true;
        _this.dragcoin31.events.onInputDown.add(_this.onDragStart,_this);
       */
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
        _this.dragcoinGrp.add(_this.dragcoin21);
        _this.dragcoinGrp.add(_this.dragcoin22);
        _this.dragcoinGrp.add(_this.dragcoin23);
        _this.dragcoinGrp.add(_this.dragcoin24);
        _this.dragcoinGrp.add(_this.dragcoin25);
        _this.dragcoinGrp.add(_this.dragcoin26);
        _this.dragcoinGrp.add(_this.dragcoin27);
        _this.dragcoinGrp.add(_this.dragcoin28);
        _this.dragcoinGrp.add(_this.dragcoin29);
        _this.dragcoinGrp.add(_this.dragcoin30);
        //_this.dragcoinGrp.add(_this.dragcoin31);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="30";
      
        _this.dcoin1 =_this.add.sprite(630,450,'unity3_1_2box');
        _this.dcoin1.anchor.setTo(0.5); 
        _this.dcoin1.scale.setTo(1.8,1.8); 
        _this.dcoin1.frame=0;
        
         _this.hand = _this.add.sprite(630,450,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dcoin1);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dcoin1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dcoin1.destroy();
            },this);
            },this);
            },this);
    
    
},  
       
    

gotoFifthQuestion:function(){
    
        _this.getVoice();
        _this.questioNo = 5;
        
        _this.obj=10;
        _this.obj1=20;
       // _this.obj=10;
       // _this.obj1=20;
        //_this.obj2=21;
    
        
        _this.tbox =_this.add.sprite(240,260,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.4,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 360,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
       /* _this.coinp =_this.add.sprite(200,255,'unity3_1_2boxanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(1,1.1); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
        */
    
        _this.coinp1 =_this.add.sprite(240,235,'unity3_1_2boxanim');
        _this.coinp1.anchor.setTo(0.5);
        _this.coinp1.scale.setTo(1.8,1.8); 
        _this.coinp1.visible=false;
        _this.coinp1.frame=0;
    
        _this.coinp2 =_this.add.sprite(240,265,'unity3_1_2boxanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1.8,1.8); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
        
        
       // _this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp1);
        _this.dragcoinGrp1.add(_this.coinp2);
        
         
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(630,120,'unity3_1_2box');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(1.8,1.8);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(690,120,'unity3_1_2box');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(1.8,1.8);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(750,120,'unity3_1_2box');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(1.8,1.8);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(810,120,'unity3_1_2box');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(1.8,1.8);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(870,120,'unity3_1_2box');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(1.8,1.8);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(630,190,'unity3_1_2box');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(1.8,1.8);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(690,190,'unity3_1_2box');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(1.8,1.8);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(750,190,'unity3_1_2box');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(1.8,1.8);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(810,190,'unity3_1_2box');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(1.8,1.8);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(870,190,'unity3_1_2box');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(1.8,1.8);
        _this.coin10.frame=1;
    
        _this.coin11 =_this.add.sprite(630,260,'unity3_1_2box');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(1.8,1.8);
        _this.coin11.frame=1;
        
        _this.coin12 =_this.add.sprite(690,260,'unity3_1_2box');
        _this.coin12.anchor.setTo(0.5);
        _this.coin12.scale.setTo(1.8,1.8);
        _this.coin12.frame=1;
        
        _this.coin13 =_this.add.sprite(750,260,'unity3_1_2box');
        _this.coin13.anchor.setTo(0.5);
        _this.coin13.scale.setTo(1.8,1.8);
        _this.coin13.frame=1;
        
        _this.coin14 =_this.add.sprite(810,260,'unity3_1_2box');
        _this.coin14.anchor.setTo(0.5);
        _this.coin14.scale.setTo(1.8,1.8);
        _this.coin14.frame=1;
        
        _this.coin15 =_this.add.sprite(870,260,'unity3_1_2box');
        _this.coin15.anchor.setTo(0.5);
        _this.coin15.scale.setTo(1.8,1.8);
        _this.coin15.frame=1;
        
        _this.coin16 =_this.add.sprite(630,330,'unity3_1_2box');
        _this.coin16.anchor.setTo(0.5);
        _this.coin16.scale.setTo(1.8,1.8);
        _this.coin16.frame=1;
        
        _this.coin17 =_this.add.sprite(690,330,'unity3_1_2box');
        _this.coin17.anchor.setTo(0.5);
        _this.coin17.scale.setTo(1.8,1.8);
        _this.coin17.frame=1;
        
        _this.coin18 =_this.add.sprite(750,330,'unity3_1_2box');
        _this.coin18.anchor.setTo(0.5);
        _this.coin18.scale.setTo(1.8,1.8);
        _this.coin18.frame=1;
        
        _this.coin19 =_this.add.sprite(810,330,'unity3_1_2box');
        _this.coin19.anchor.setTo(0.5);
        _this.coin19.scale.setTo(1.8,1.8);
        _this.coin19.frame=1;
        
        _this.coin20 =_this.add.sprite(870,330,'unity3_1_2box');
        _this.coin20.anchor.setTo(0.5);
        _this.coin20.scale.setTo(1.8,1.8);
        _this.coin20.frame=1;
    
       /* _this.coin21 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.coin21.anchor.setTo(0.5);
        _this.coin21.scale.setTo(0.85,1);
        _this.coin21.frame=1;
       */
        
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
        _this.coinGrp.add(_this.coin11);
        _this.coinGrp.add(_this.coin12);
        _this.coinGrp.add(_this.coin13);
        _this.coinGrp.add(_this.coin14);
        _this.coinGrp.add(_this.coin15);
        _this.coinGrp.add(_this.coin16);
        _this.coinGrp.add(_this.coin17);
        _this.coinGrp.add(_this.coin18);
        _this.coinGrp.add(_this.coin19);
        _this.coinGrp.add(_this.coin20);
       // _this.coinGrp.add(_this.coin21);
    
        _this.dragcoinGrp= _this.add.group();
       
        _this.dragcoin1 =_this.add.sprite(630,120,'unity3_1_2box');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(1.8,1.8); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(690,120,'unity3_1_2box');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(1.8,1.8); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(750,120,'unity3_1_2box');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(1.8,1.8); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(810,120,'unity3_1_2box');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(1.8,1.8); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(870,120,'unity3_1_2box');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(1.8,1.8); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(630,190,'unity3_1_2box');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(1.8,1.8); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(690,190,'unity3_1_2box');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(1.8,1.8); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(750,190,'unity3_1_2box');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(1.8,1.8); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(810,190,'unity3_1_2box');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(1.8,1.8); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(870,190,'unity3_1_2box');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(1.8,1.8); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
    
        _this.dragcoin11 =_this.add.sprite(630,260,'unity3_1_2box');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(1.8,1.8); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin12 =_this.add.sprite(690,260,'unity3_1_2box');
        _this.dragcoin12.anchor.setTo(0.5); 
        _this.dragcoin12.scale.setTo(1.8,1.8); 
        _this.dragcoin12.frame=0;
        _this.dragcoin12.name=12;
        _this.dragcoin12.inputEnabled = true;
        _this.dragcoin12.input.useHandCursor = true;
        _this.dragcoin12.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin13 =_this.add.sprite(750,260,'unity3_1_2box');
        _this.dragcoin13.anchor.setTo(0.5); 
        _this.dragcoin13.scale.setTo(1.8,1.8); 
        _this.dragcoin13.frame=0;
        _this.dragcoin13.name=13;
        _this.dragcoin13.inputEnabled = true;
        _this.dragcoin13.input.useHandCursor = true;
        _this.dragcoin13.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin14 =_this.add.sprite(810,260,'unity3_1_2box');
        _this.dragcoin14.anchor.setTo(0.5); 
        _this.dragcoin14.scale.setTo(1.8,1.8); 
        _this.dragcoin14.frame=0;
        _this.dragcoin14.name=14;
        _this.dragcoin14.inputEnabled = true;
        _this.dragcoin14.input.useHandCursor = true;
        _this.dragcoin14.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin15 =_this.add.sprite(870,260,'unity3_1_2box');
        _this.dragcoin15.anchor.setTo(0.5); 
        _this.dragcoin15.scale.setTo(1.8,1.8); 
        _this.dragcoin15.frame=0;
        _this.dragcoin15.name=15;
        _this.dragcoin15.inputEnabled = true;
        _this.dragcoin15.input.useHandCursor = true;
        _this.dragcoin15.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin16 =_this.add.sprite(630,330,'unity3_1_2box');
        _this.dragcoin16.anchor.setTo(0.5);
        _this.dragcoin16.scale.setTo(1.8,1.8); 
        _this.dragcoin16.frame=0;
        _this.dragcoin16.name=16;
        _this.dragcoin16.inputEnabled = true;
        _this.dragcoin16.input.useHandCursor = true;
        _this.dragcoin16.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin17 =_this.add.sprite(690,330,'unity3_1_2box');
        _this.dragcoin17.anchor.setTo(0.5);
        _this.dragcoin17.scale.setTo(1.8,1.8); 
        _this.dragcoin17.frame=0;
        _this.dragcoin17.name=17;
        _this.dragcoin17.inputEnabled = true;
        _this.dragcoin17.input.useHandCursor = true;
        _this.dragcoin17.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin18 =_this.add.sprite(750,330,'unity3_1_2box');
        _this.dragcoin18.anchor.setTo(0.5); 
        _this.dragcoin18.scale.setTo(1.8,1.8); 
        _this.dragcoin18.frame=0;
        _this.dragcoin18.name=18;
        _this.dragcoin18.inputEnabled = true;
        _this.dragcoin18.input.useHandCursor = true;
        _this.dragcoin18.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin19 =_this.add.sprite(810,330,'unity3_1_2box');
        _this.dragcoin19.anchor.setTo(0.5);
        _this.dragcoin19.scale.setTo(1.8,1.8); 
        _this.dragcoin19.frame=0;
        _this.dragcoin19.name=19;
        _this.dragcoin19.inputEnabled = true;
        _this.dragcoin19.input.useHandCursor = true;
        _this.dragcoin19.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin20 =_this.add.sprite(870,330,'unity3_1_2box');
        _this.dragcoin20.anchor.setTo(0.5); 
        _this.dragcoin20.scale.setTo(1.8,1.8); 
        _this.dragcoin20.frame=0;
        _this.dragcoin20.name=20;
        _this.dragcoin20.inputEnabled = true;
        _this.dragcoin20.input.useHandCursor = true;
        _this.dragcoin20.events.onInputDown.add(_this.onDragStart,_this);
    
       /* _this.dragcoin21 =_this.add.sprite(520,330,'unity3_1_2box');
        _this.dragcoin21.anchor.setTo(0.5); 
        _this.dragcoin21.scale.setTo(0.85,1); 
        _this.dragcoin21.frame=0;
        _this.dragcoin21.name=21;
        _this.dragcoin21.inputEnabled = true;
        _this.dragcoin21.input.useHandCursor = true;
        _this.dragcoin21.events.onInputDown.add(_this.onDragStart,_this);
     */
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        _this.dragcoinGrp.add(_this.dragcoin11);
        _this.dragcoinGrp.add(_this.dragcoin12);
        _this.dragcoinGrp.add(_this.dragcoin13);
        _this.dragcoinGrp.add(_this.dragcoin14);
        _this.dragcoinGrp.add(_this.dragcoin15);
        _this.dragcoinGrp.add(_this.dragcoin16);
        _this.dragcoinGrp.add(_this.dragcoin17);
        _this.dragcoinGrp.add(_this.dragcoin18);
        _this.dragcoinGrp.add(_this.dragcoin19);
        _this.dragcoinGrp.add(_this.dragcoin20);
       // _this.dragcoinGrp.add(_this.dragcoin21);
        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="20";
    
        _this.dcoin1 =_this.add.sprite(630,330,'unity3_1_2box');
        _this.dcoin1.anchor.setTo(0.5); 
        _this.dcoin1.scale.setTo(1.8,1.8); 
        _this.dcoin1.frame=0;
        
         _this.hand = _this.add.sprite(630,330,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dcoin1);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dcoin1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dcoin1.destroy();
            },this);
            },this);
            },this);
    
    
},
   
    
gotoSixthQuestion:function(){
    
       _this.getVoice();
        _this.questioNo = 6;
        
       // _this.obj=10;
       // _this.obj1=13;

        _this.tbox =_this.add.sprite(240,260,'unity3_1_2tbox');
        _this.tbox.anchor.setTo(0.5);
        _this.tbox.scale.setTo(1.4,1.1); 
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(-30, 100, 360,140);
        _this.graphics1.alpha= 0;
        
        _this.dragcoinGrp1 = _this.add.group();
        
       /* _this.coinp =_this.add.sprite(150,235,'unity3_1_2boxanim');
        _this.coinp.anchor.setTo(0.5);
        _this.coinp.scale.setTo(1,1.1); 
        _this.coinp.visible=false;
        _this.coinp.frame=0;
       */
        _this.coinp2 =_this.add.sprite(250,260,'unity3_1_2boxanim');
        _this.coinp2.anchor.setTo(0.5);
        _this.coinp2.scale.setTo(1.8,1.8); 
        _this.coinp2.visible=false;
        _this.coinp2.frame=0;
        
        
        //_this.dragcoinGrp1.add(_this.coinp);
        _this.dragcoinGrp1.add(_this.coinp2);
        
        _this.coinGrp= _this.add.group();
        
        _this.coin1 =_this.add.sprite(630,230,'unity3_1_2box');
        _this.coin1.anchor.setTo(0.5);
        _this.coin1.scale.setTo(1.8,1.8);
        _this.coin1.frame=1;
        
        _this.coin2 =_this.add.sprite(690,230,'unity3_1_2box');
        _this.coin2.anchor.setTo(0.5);
        _this.coin2.scale.setTo(1.8,1.8);
        _this.coin2.frame=1;
        
        _this.coin3 =_this.add.sprite(750,230,'unity3_1_2box');
        _this.coin3.anchor.setTo(0.5);
        _this.coin3.scale.setTo(1.8,1.8);
        _this.coin3.frame=1;
        
        _this.coin4 =_this.add.sprite(810,230,'unity3_1_2box');
        _this.coin4.anchor.setTo(0.5);
        _this.coin4.scale.setTo(1.8,1.8);
        _this.coin4.frame=1;
        
        _this.coin5 =_this.add.sprite(870,230,'unity3_1_2box');
        _this.coin5.anchor.setTo(0.5);
        _this.coin5.scale.setTo(1.8,1.8);
        _this.coin5.frame=1;
        
        _this.coin6 =_this.add.sprite(630,300,'unity3_1_2box');
        _this.coin6.anchor.setTo(0.5);
        _this.coin6.scale.setTo(1.8,1.8);
        _this.coin6.frame=1;
        
        _this.coin7 =_this.add.sprite(690,300,'unity3_1_2box');
        _this.coin7.anchor.setTo(0.5);
        _this.coin7.scale.setTo(1.8,1.8);
        _this.coin7.frame=1;
        
        _this.coin8 =_this.add.sprite(750,300,'unity3_1_2box');
        _this.coin8.anchor.setTo(0.5);
        _this.coin8.scale.setTo(1.8,1.8);
        _this.coin8.frame=1;
        
        _this.coin9 =_this.add.sprite(810,300,'unity3_1_2box');
        _this.coin9.anchor.setTo(0.5);
        _this.coin9.scale.setTo(1.8,1.8);
        _this.coin9.frame=1;
        
        _this.coin10 =_this.add.sprite(870,300,'unity3_1_2box');
        _this.coin10.anchor.setTo(0.5);
        _this.coin10.scale.setTo(1.8,1.8);
        _this.coin10.frame=1;
    
        /*_this.coin11 =_this.add.sprite(520,330,'unity3_1_2coin');
        _this.coin11.anchor.setTo(0.5);
        _this.coin11.scale.setTo(0.7,0.8);
        _this.coin11.frame=1;
       */
        _this.coinGrp.add(_this.coin1);
        _this.coinGrp.add(_this.coin2);
        _this.coinGrp.add(_this.coin3);
        _this.coinGrp.add(_this.coin4);
        _this.coinGrp.add(_this.coin5);
        _this.coinGrp.add(_this.coin6);
        _this.coinGrp.add(_this.coin7);
        _this.coinGrp.add(_this.coin8);
        _this.coinGrp.add(_this.coin9);
        _this.coinGrp.add(_this.coin10);
       // _this.coinGrp.add(_this.coin11);
       
        _this.dragcoinGrp = _this.add.group();
        
        _this.dragcoin1 =_this.add.sprite(630,230,'unity3_1_2box');
        _this.dragcoin1.anchor.setTo(0.5); 
        _this.dragcoin1.scale.setTo(1.8,1.8); 
        _this.dragcoin1.frame=0;
        _this.dragcoin1.name=1;
        _this.dragcoin1.inputEnabled = true;
        _this.dragcoin1.input.useHandCursor = true;
        _this.dragcoin1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin2 =_this.add.sprite(690,230,'unity3_1_2box');
        _this.dragcoin2.anchor.setTo(0.5); 
        _this.dragcoin2.scale.setTo(1.8,1.8); 
        _this.dragcoin2.frame=0;
        _this.dragcoin2.name=2;
        _this.dragcoin2.inputEnabled = true;
        _this.dragcoin2.input.useHandCursor = true;
        _this.dragcoin2.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin3 =_this.add.sprite(750,230,'unity3_1_2box');
        _this.dragcoin3.anchor.setTo(0.5); 
        _this.dragcoin3.scale.setTo(1.8,1.8); 
        _this.dragcoin3.frame=0;
        _this.dragcoin3.name=3;
        _this.dragcoin3.inputEnabled = true;
        _this.dragcoin3.input.useHandCursor = true;
        _this.dragcoin3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin4 =_this.add.sprite(810,230,'unity3_1_2box');
        _this.dragcoin4.anchor.setTo(0.5); 
        _this.dragcoin4.scale.setTo(1.8,1.8); 
        _this.dragcoin4.frame=0;
        _this.dragcoin4.name=4;
        _this.dragcoin4.inputEnabled = true;
        _this.dragcoin4.input.useHandCursor = true;
        _this.dragcoin4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin5 =_this.add.sprite(870,230,'unity3_1_2box');
        _this.dragcoin5.anchor.setTo(0.5);
        _this.dragcoin5.scale.setTo(1.8,1.8); 
        _this.dragcoin5.frame=0;
        _this.dragcoin5.name=5;
        _this.dragcoin5.inputEnabled = true;
        _this.dragcoin5.input.useHandCursor = true;
        _this.dragcoin5.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin6 =_this.add.sprite(630,300,'unity3_1_2box');
        _this.dragcoin6.anchor.setTo(0.5); 
        _this.dragcoin6.scale.setTo(1.8,1.8); 
        _this.dragcoin6.frame=0;
        _this.dragcoin6.name=6;
        _this.dragcoin6.inputEnabled = true;
        _this.dragcoin6.input.useHandCursor = true;
        _this.dragcoin6.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin7 =_this.add.sprite(690,300,'unity3_1_2box');
        _this.dragcoin7.anchor.setTo(0.5); 
        _this.dragcoin7.scale.setTo(1.8,1.8); 
        _this.dragcoin7.frame=0;
        _this.dragcoin7.name=7;
        _this.dragcoin7.inputEnabled = true;
        _this.dragcoin7.input.useHandCursor = true;
        _this.dragcoin7.events.onInputDown.add(_this.onDragStart,_this);
       
        _this.dragcoin8 =_this.add.sprite(750,300,'unity3_1_2box');
        _this.dragcoin8.anchor.setTo(0.5); 
        _this.dragcoin8.scale.setTo(1.8,1.8); 
        _this.dragcoin8.frame=0;
        _this.dragcoin8.name=8;
        _this.dragcoin8.inputEnabled = true;
        _this.dragcoin8.input.useHandCursor = true;
        _this.dragcoin8.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin9 =_this.add.sprite(810,300,'unity3_1_2box');
        _this.dragcoin9.anchor.setTo(0.5);
        _this.dragcoin9.scale.setTo(1.8,1.8); 
        _this.dragcoin9.frame=0;
        _this.dragcoin9.name=9;
        _this.dragcoin9.inputEnabled = true;
        _this.dragcoin9.input.useHandCursor = true;
        _this.dragcoin9.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.dragcoin10 =_this.add.sprite(870,300,'unity3_1_2box');
        _this.dragcoin10.anchor.setTo(0.5);
        _this.dragcoin10.scale.setTo(1.8,1.8); 
        _this.dragcoin10.frame=0;
        _this.dragcoin10.name=10;
        _this.dragcoin10.inputEnabled = true;
        _this.dragcoin10.input.useHandCursor = true;
        _this.dragcoin10.events.onInputDown.add(_this.onDragStart,_this);
        
    
      /*  _this.dragcoin11 =_this.add.sprite(520,330,'unity3_1_2coin');
        _this.dragcoin11.anchor.setTo(0.5); 
        _this.dragcoin11.scale.setTo(0.7,0.8); 
        _this.dragcoin11.frame=0;
        _this.dragcoin11.name=11;
        _this.dragcoin11.inputEnabled = true;
        _this.dragcoin11.input.useHandCursor = true;
        _this.dragcoin11.events.onInputDown.add(_this.onDragStart,_this);
        */
    
        _this.dragcoinGrp.add(_this.dragcoin1);
        _this.dragcoinGrp.add(_this.dragcoin2);
        _this.dragcoinGrp.add(_this.dragcoin3);
        _this.dragcoinGrp.add(_this.dragcoin4);
        _this.dragcoinGrp.add(_this.dragcoin5);
        _this.dragcoinGrp.add(_this.dragcoin6);
        _this.dragcoinGrp.add(_this.dragcoin7);
        _this.dragcoinGrp.add(_this.dragcoin8);
        _this.dragcoinGrp.add(_this.dragcoin9);
        _this.dragcoinGrp.add(_this.dragcoin10);
        
       // _this.dragcoinGrp.add(_this.dragcoin11);
        

        
        _this.scorebox =_this.add.sprite(485,440,'unity3_1_2scorebox');
        _this.scorebox.anchor.setTo(0.5);
        _this.scorebox.scale.setTo(0.9,1); 
        
        _this.txtbox1 = _this.add.sprite(448,432,'unity3_1_2ansbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.name="numbox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked,_this);
      
        _this.txtbox2 = _this.add.sprite(510,432,'unity3_1_2ansbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.frame=0;
        _this.txtbox2.name="numbox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
          
        _this.numboxGrp = _this.add.group();
        
        _this.numBoxNum1 = _this.add.sprite(426,406,'unity3_1_2numberpad');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.visible = false;
        _this.numBoxNum1.frame=1;
        
        _this.numBoxNum2 = _this.add.sprite(488,406,'unity3_1_2numberpad');
        _this.numBox2Pressed = false;
        _this.numBoxNum2.visible = false;
        _this.numBoxNum2.frame=0;
        
        _this.numboxGrp.add(_this.numBoxNum1);
        _this.numboxGrp.add(_this.numBoxNum2);
        
        _this.rightAns="10";
    
       _this.dcoin1 =_this.add.sprite(630,300,'unity3_1_2box');
        _this.dcoin1.anchor.setTo(0.5); 
        _this.dcoin1.scale.setTo(1.8,1.8); 
        _this.dcoin1.frame=0;
        
         _this.hand = _this.add.sprite(630,300,'Unity4_1_1hand');
         _this.time.events.add(500, function(){  
         var tween1 = _this.add.tween(_this.dcoin1);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         var tween1 = _this.add.tween(_this.hand);
         tween1.to({ x:140 , y:260}, 1500, 'Linear', true, 0);
         tween1.onComplete.add(function(){
                 var tween2 = this.add.tween(_this.dcoin1);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 var tween2 = this.add.tween(_this.hand);
                 tween2.to({ x:_this.xaxisGL , y:_this.yaxisGL}, 1500, 'Linear', true, 0);
                 tween2.onComplete.add(function(){
                _this.hand.visible = false;
                _this.dcoin1.destroy();
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
     
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box1 = _this.numGroup.create(480,510,'unity3_1_2b2');
        _this.box1.anchor.setTo(0.5);
        _this.x = 80;
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,510,'unity3_1_2numberpad');  
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
    
        _this.wrongbtn = _this.numGroup.create(_this.x+30,510,'unity3_1_2eraser');
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(1,1);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        _this.rightbtn = _this.numGroup.create(_this.x+90,510,'unity3_1_2rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "wrongbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
    
        _this.wrongbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
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
            _this.clickSound.play();
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
                    res_id:  "level3.1.1B_"+target.name, 
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
         
         _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level3.1.2_"+target.name, 
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
          //alert("here2");
            for(var i=0;i<_this.dragcoinGrp1.length;i++)
            {
                 //console.log("target.name:"+target.name);
                if(_this.checkOverlap(target,_this.graphics1))
                 {
                  
                     
                if(_this.questioNo==1)
                 {
                     
                      _this.check++;
                     
            
                          if(_this.check==1)
                        { 
                           
                                
                            _this.Displaycoin(target);
                           
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
                    
                 if(_this.questioNo==2)
                 {
                     
                        _this.check++;
                     //alert("here"+target.name);
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                            
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2)
                        { 
                            _this.Displaycoin(target);
                       
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
                         _this.check++;
                     //alert("here");
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                           // alert("here");
                            if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                                
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2)
                        { 
                            if(_this.coinp.frame >= 1)
                            {
                                
                            }
                            else{
                                _this.coinp.visible= false;
                                _this.coinp.frame = 0;
                            }
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==3)
                        { 
                            _this.Displaycoin(target);
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
                     
                      if(_this.questioNo==4)
                 {
                         _this.check++;
                     //alert("here");
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                           // alert("here");
                            if(_this.coinp.frame >= 1)
                                {
                                    
                                    
                                }
                            else
                                {
                                    _this.coinp.visible= false;
                                    _this.coinp.frame = 0;
                                }
                                
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2)
                        { 
                            if(_this.coinp.frame >= 1)
                            {
                                
                            }
                            else{
                                _this.coinp.visible= false;
                                _this.coinp.frame = 0;
                            }
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==3)
                        { 
                            _this.Displaycoin(target);
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
                     
                    
                
                      if(_this.questioNo==5)
                 {
                     
                        _this.check++;
                     //alert("here"+target.name);
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                            
                            _this.Displaycoin(target);
                        }
                        else if(_this.check==2)
                        { 
                            _this.Displaycoin(target);
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
                     
                      _this.check++;
                     //alert("here");
                      //console.log("AAAAAAAAAAA "+_this.check);
            
                          if(_this.check==1)
                        { 
                           
                                
                            _this.Displaycoin(target);
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
                
                     
                 
                      
                 }
                 break;
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
                
Displaycoin:function(target)
    {
      
      
        var tempNum = parseInt(target.name,10);
        
       // alert(tempNum);
       
        if(target.name<=10)
        {
           
        _this.coinp2.visible = true;
        _this.tween21 = _this.add.tween(_this.dragcoin1);
        _this.tween21.to({ x:240 , y:300}, 300, 'Linear', true, 0);
        _this.tween21.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin1.visible=false;
        _this.tween22 = _this.add.tween(_this.dragcoin2);
        _this.tween22.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween22.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin2.visible=false;
        _this.tween23 = _this.add.tween(_this.dragcoin3);
        _this.tween23.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween23.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin3.visible=false;
        _this.tween24 = _this.add.tween(_this.dragcoin4);
        _this.tween24.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween24.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin4.visible=false;
        _this.tween25 = _this.add.tween(_this.dragcoin5);
        _this.tween25.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween25.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin5.visible=false;
        _this.tween26 = _this.add.tween(_this.dragcoin6);
        _this.tween26.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween26.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin6.visible=false;
        _this.tween27 = _this.add.tween(_this.dragcoin7);
        _this.tween27.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween27.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin7.visible=false;
        _this.tween28 = _this.add.tween(_this.dragcoin8);
        _this.tween28.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween28.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin8.visible=false;
        _this.tween29 = _this.add.tween(_this.dragcoin9);
        _this.tween29.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween29.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin9.visible=false;
        _this.tween30 = _this.add.tween(_this.dragcoin10);
        _this.tween30.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween30.onComplete.add(function(){
        _this.dragcoin10.visible=false;
        _this.coinp2.frame=16;
       
       _this.tinklesound = _this.add.audio('tinklesound');
        _this.tinklesound.play();
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);  
        }
        else if(target.name<=20)
        {
            _this.coinp1.visible = true;
        _this.tween11 = _this.add.tween(_this.dragcoin11);
        _this.tween11.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween11.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin11.visible=false;
        _this.tween12 = _this.add.tween(_this.dragcoin12);
        _this.tween12.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween12.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin12.visible=false;
        _this.tween13 = _this.add.tween(_this.dragcoin13);
        _this.tween13.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween13.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin13.visible=false;
        _this.tween14 = _this.add.tween(_this.dragcoin14);
        _this.tween14.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween14.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin14.visible=false;
        _this.tween15 = _this.add.tween(_this.dragcoin15);
        _this.tween15.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween15.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin15.visible=false;
        _this.tween16 = _this.add.tween(_this.dragcoin16);
        _this.tween16.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween16.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin16.visible=false;
        _this.tween17 = _this.add.tween(_this.dragcoin17);
        _this.tween17.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween17.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin17.visible=false;
        _this.tween18 = _this.add.tween(_this.dragcoin18);
        _this.tween18.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween18.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin18.visible=false;
        _this.tween19 = _this.add.tween(_this.dragcoin19);
        _this.tween19.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween19.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin19.visible=false;
        _this.tween20 = _this.add.tween(_this.dragcoin20);
        _this.tween20.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween20.onComplete.add(function(){
        _this.dragcoin20.visible=false;
        _this.coinp1.frame=16;
        _this.tinklesound = _this.add.audio('tinklesound');
        _this.tinklesound.play();
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this); 
        }
        else if(target.name<=30)
        {
           _this.coinp.visible = true;
            _this.tween1 = _this.add.tween(_this.dragcoin21);
            _this.tween1.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin21.visible=false;
            _this.tween2 = _this.add.tween(_this.dragcoin22);
            _this.tween2.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween2.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin22.visible=false;
            _this.tween3 = _this.add.tween(_this.dragcoin23);
            _this.tween3.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween3.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin23.visible=false;
            _this.tween4 = _this.add.tween(_this.dragcoin24);
            _this.tween4.to({x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween4.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin24.visible=false;
            _this.tween5 = _this.add.tween(_this.dragcoin25);
            _this.tween5.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween5.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin25.visible=false;
            _this.tween6 = _this.add.tween(_this.dragcoin26);
            _this.tween6.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween6.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin26.visible=false;
            _this.tween7 = _this.add.tween(_this.dragcoin27);
            _this.tween7.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween7.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin27.visible=false;
            _this.tween8 = _this.add.tween(_this.dragcoin28);
            _this.tween8.to({x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween8.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin28.visible=false;
            _this.tween9 = _this.add.tween(_this.dragcoin29);
            _this.tween9.to({x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween9.onComplete.add(function(){
            _this.coinp.frame++;
            _this.dragcoin29.visible=false;
            _this.tween10 = _this.add.tween(_this.dragcoin30);
            _this.tween10.to({ x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tween10.onComplete.add(function(){
            _this.dragcoin30.visible=false;
            _this.coinp.frame=16;
            //_this.tween1 = _this.add.tween(_this.dragcoin1);
            //_this.tween1.to({x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tinklesound = _this.add.audio('tinklesound');
        _this.tinklesound.play();
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this); 
        }
        else if(target.name<=40)
        {
             _this.coinp3.visible = true;
        _this.tween31 = _this.add.tween(_this.dragcoin31);
        _this.tween31.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween31.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin31.visible=false;
        _this.tween32 = _this.add.tween(_this.dragcoin32);
        _this.tween32.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween32.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin32.visible=false;
        _this.tween33 = _this.add.tween(_this.dragcoin33);
        _this.tween33.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween33.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin33.visible=false;
        _this.tween34 = _this.add.tween(_this.dragcoin34);
        _this.tween34.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween34.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin34.visible=false;
        _this.tween35 = _this.add.tween(_this.dragcoin35);
        _this.tween35.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween35.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin35.visible=false;
        _this.tween36 = _this.add.tween(_this.dragcoin36);
        _this.tween36.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween36.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin36.visible=false;
        _this.tween37 = _this.add.tween(_this.dragcoin37);
        _this.tween37.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween37.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin37.visible=false;
        _this.tween38 = _this.add.tween(_this.dragcoin38);
        _this.tween38.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween38.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin38.visible=false;
        _this.tween39 = _this.add.tween(_this.dragcoin39);
        _this.tween39.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween39.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin39.visible=false;
        _this.tween40 = _this.add.tween(_this.dragcoin40);
        _this.tween40.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween40.onComplete.add(function(){
        _this.dragcoin40.visible=false;
        _this.coinp3.frame=16;
        _this.tween31 = _this.add.tween(_this.dragcoin31);
        _this.tween31.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tinklesound = _this.add.audio('tinklesound');
        _this.tinklesound.play();
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);    
        }
         else if(target.name<=50)
        {
             _this.coinp4.visible = true;
        _this.tween41 = _this.add.tween(_this.dragcoin41);
        _this.tween41.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween41.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin41.visible=false;
        _this.tween42 = _this.add.tween(_this.dragcoin42);
        _this.tween42.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween42.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin42.visible=false;
        _this.tween43 = _this.add.tween(_this.dragcoin43);
        _this.tween43.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween43.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin43.visible=false;
        _this.tween44 = _this.add.tween(_this.dragcoin44);
        _this.tween44.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween44.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin44.visible=false;
        _this.tween45 = _this.add.tween(_this.dragcoin45);
        _this.tween45.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween45.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin45.visible=false;
        _this.tween46 = _this.add.tween(_this.dragcoin46);
        _this.tween46.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween46.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin46.visible=false;
        _this.tween47 = _this.add.tween(_this.dragcoin47);
        _this.tween47.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween47.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin47.visible=false;
        _this.tween48 = _this.add.tween(_this.dragcoin48);
        _this.tween48.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween48.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin48.visible=false;
        _this.tween49 = _this.add.tween(_this.dragcoin49);
        _this.tween49.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween49.onComplete.add(function(){
        _this.coinp4.frame++;
        _this.dragcoin49.visible=false;
        _this.tween50 = _this.add.tween(_this.dragcoin50);
        _this.tween50.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween50.onComplete.add(function(){
        _this.dragcoin50.visible=false;
        _this.coinp4.frame=16;
        _this.tween41 = _this.add.tween(_this.dragcoin41);
        _this.tween41.to({x:130 , y:265}, 300, 'Linear', true, 0);
            _this.tinklesound = _this.add.audio('tinklesound');
        _this.tinklesound.play();
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);    
        }
             
           
    },
    
    
    Displaycoin1:function()
    {
        _this.coinp1.visible = true;
        _this.tween11 = _this.add.tween(_this.dragcoin11);
        _this.tween11.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween11.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin11.visible=false;
        _this.tween12 = _this.add.tween(_this.dragcoin12);
        _this.tween12.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween12.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin12.visible=false;
        _this.tween13 = _this.add.tween(_this.dragcoin13);
        _this.tween13.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween13.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin13.visible=false;
        _this.tween14 = _this.add.tween(_this.dragcoin14);
        _this.tween14.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween14.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin14.visible=false;
        _this.tween15 = _this.add.tween(_this.dragcoin15);
        _this.tween15.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween15.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin15.visible=false;
        _this.tween16 = _this.add.tween(_this.dragcoin16);
        _this.tween16.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween16.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin16.visible=false;
        _this.tween17 = _this.add.tween(_this.dragcoin17);
        _this.tween17.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween17.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin17.visible=false;
        _this.tween18 = _this.add.tween(_this.dragcoin18);
        _this.tween18.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween18.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin18.visible=false;
        _this.tween19 = _this.add.tween(_this.dragcoin19);
        _this.tween19.to({x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween19.onComplete.add(function(){
        _this.coinp1.frame++;
        _this.dragcoin19.visible=false;
        _this.tween20 = _this.add.tween(_this.dragcoin20);
        _this.tween20.to({ x:160 , y:265}, 300, 'Linear', true, 0);
        _this.tween20.onComplete.add(function(){
        _this.dragcoin20.visible=false;
        _this.coinp1.frame=16;
        _this.tinklesound = _this.add.audio('tinklesound');
        _this.tinklesound.play();
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);        
             
           
    },
    
     Displaycoin2:function()
    {
        _this.coinp2.visible = true;
        _this.tween21 = _this.add.tween(_this.dragcoin1);
        _this.tween21.to({ x:240 , y:300}, 300, 'Linear', true, 0);
        _this.tween21.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin1.visible=false;
        _this.tween22 = _this.add.tween(_this.dragcoin2);
        _this.tween22.to({ x:240 , y:268}, 300, 'Linear', true, 0);
        _this.tween22.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin2.visible=false;
        _this.tween23 = _this.add.tween(_this.dragcoin3);
        _this.tween23.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween23.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin3.visible=false;
        _this.tween24 = _this.add.tween(_this.dragcoin4);
        _this.tween24.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween24.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin4.visible=false;
        _this.tween25 = _this.add.tween(_this.dragcoin5);
        _this.tween25.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween25.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin5.visible=false;
        _this.tween26 = _this.add.tween(_this.dragcoin6);
        _this.tween26.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween26.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin6.visible=false;
        _this.tween27 = _this.add.tween(_this.dragcoin7);
        _this.tween27.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween27.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin7.visible=false;
        _this.tween28 = _this.add.tween(_this.dragcoin8);
        _this.tween28.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween28.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin8.visible=false;
        _this.tween29 = _this.add.tween(_this.dragcoin9);
        _this.tween29.to({x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween29.onComplete.add(function(){
        _this.coinp2.frame++;
        _this.dragcoin9.visible=false;
        _this.tween30 = _this.add.tween(_this.dragcoin10);
        _this.tween30.to({ x:240 , y:265}, 300, 'Linear', true, 0);
        _this.tween30.onComplete.add(function(){
        _this.dragcoin10.visible=false;
        _this.coinp2.frame=16;
       _this.tinklesound = _this.add.audio('tinklesound');
        _this.tinklesound.play();
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);        
             
           
    },
    
    Displaycoin3:function()
    {
        _this.coinp3.visible = true;
        _this.tween31 = _this.add.tween(_this.dragcoin31);
        _this.tween31.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween31.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin31.visible=false;
        _this.tween32 = _this.add.tween(_this.dragcoin32);
        _this.tween32.to({ x:130 , y:268}, 300, 'Linear', true, 0);
        _this.tween32.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin32.visible=false;
        _this.tween33 = _this.add.tween(_this.dragcoin33);
        _this.tween33.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween33.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin33.visible=false;
        _this.tween34 = _this.add.tween(_this.dragcoin34);
        _this.tween34.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween34.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin34.visible=false;
        _this.tween35 = _this.add.tween(_this.dragcoin35);
        _this.tween35.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween35.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin35.visible=false;
        _this.tween36 = _this.add.tween(_this.dragcoin36);
        _this.tween36.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween36.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin36.visible=false;
        _this.tween37 = _this.add.tween(_this.dragcoin37);
        _this.tween37.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween37.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin37.visible=false;
        _this.tween38 = _this.add.tween(_this.dragcoin38);
        _this.tween38.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween38.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin38.visible=false;
        _this.tween39 = _this.add.tween(_this.dragcoin39);
        _this.tween39.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween39.onComplete.add(function(){
        _this.coinp3.frame++;
        _this.dragcoin39.visible=false;
        _this.tween40 = _this.add.tween(_this.dragcoin40);
        _this.tween40.to({ x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tween40.onComplete.add(function(){
        _this.dragcoin40.visible=false;
        _this.coinp3.frame=16;
        _this.tween31 = _this.add.tween(_this.dragcoin31);
        _this.tween31.to({x:130 , y:265}, 300, 'Linear', true, 0);
        _this.tinklesound = _this.add.audio('tinklesound');
        _this.tinklesound.play();
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);
             },_this);        
           
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
                        _this.numGroup.destroy();
                        _this.scorebox.destroy();
                         _this.numboxGrp.destroy();
                        _this.dragcoinGrp.destroy();
                        _this.coinGrp.destroy();
                        _this.dragcoinGrp1.destroy();
                        _this.time.events.add(500,function(){
                        _this.getQuestion();
                    },_this);
                 
                    }
        
                else
                    {
                         
                         _this.stopvoice();
                        //_this.timer1.stop();
                         //_this.timer1=null;
                         _this.state.start('unity3_1_1bScore');
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
                    res_id: "level3_1_1A_"+target.name, 
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
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/English/1.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Hindi/1.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Kannada/1.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.2/1.mp3");
                    }
                  else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Odiya/1.mp3");
                    }
                    break;
                   
            case 2: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/English/2.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Hindi/2.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Kannada/2.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.2/2.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Odiya/2.mp3");
                    }
                    break;
            case 3:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/English/3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Hindi/3.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Kannada/3.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.2/3.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Odiya/3.mp3");
                    }
                    break;
            case 4:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/English/3.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Hindi/3.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Kannada/3.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.2/3.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Odiya/3.mp3");
                    }
                    break;
            case 5:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/English/2.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Hindi/2.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Kannada/2.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.2/2.mp3");
                    }
                   else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Odiya/2.mp3");
                    }
                    break;
            case 6:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/English/1.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Hindi/1.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Kannada/1.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1.2/1.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/3.1.2/Odiya/1.mp3");
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
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       