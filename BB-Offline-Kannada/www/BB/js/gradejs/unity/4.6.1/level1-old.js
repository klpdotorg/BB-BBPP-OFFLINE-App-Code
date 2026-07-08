Game.unity4_6_1level1=function(){};

Game.unity4_6_1level1.prototype={
    init:function(game)
    {
       _this = this;
       telInitializer.gameIdInit("unity4_6_1",gradeSelected);
       
    },

create:function(game)
    {
          
        _this.drag=0;
        _this.Ans1=0;
        _this.Ans2=0;
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
        _this.starsGroup;
        _this.questioNo = 0;
        _this.SquareGrp;
        _this.numGrp;
        _this.graphicGrp;
        _this.n1=0;
        _this.n2=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        
        _this.correct=0;
        _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;
       
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
       _this.qArrays = _this.shuffle(_this.qArrays);
        
        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'unity4_6_1backg');
        
        _this.topbar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.topbar.scale.setTo(1,1.1);
        
        _this.backbtn = _this.add.button(10,7,'grade11_backbtn',function(){ 
        _this.backbtn.events.onInputDown.removeAll();
        _this.stopvoice();
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this,0,1,2);
       
        _this.speaker = _this.add.button(610,9,'grade11_speaker');
        _this.speaker.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();

        },_this);
        
        _this.timerbg=_this.add.sprite(300,9,'Level42C_timer');
        _this.timerbg.scale.setTo(1.2,1);
        
        _this.timerDisplay = _this.add.text(330,25,_this.minutes + ' : '+_this.seconds);
        _this.timerDisplay.anchor.setTo(0.5);
        _this.timerDisplay.align = 'center';
        _this.timerDisplay.font = 'Oh Whale';
        _this.timerDisplay.fontSize = 20;
        _this.timerDisplay.fill = '#ADFF2F';
        
      /*  _this.dotbox=_this.add.sprite(70,7,'unity4_6_1dotbox');
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
        
        //language selection sounds
		_this.getVoice();
          
    },

updateTimer:function() {
     _this.counterForTimer++;
    // //console.log("lololil"+_this.counterForTimer);
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
        
    	console.log("get"+_this.no11);
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
             case 7: _this.gotoSeventhQuestion();
    				  break;
             case 8: _this.gotoEighthQuestion();
    				  break;
             case 9: _this.gotoNinthQuestion();
    				  break; 
            case 10: _this.gotoTenthQuestion();
    				  break;   
                      
           
    	}
        
       
        
    },
    
    
    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			_this.starsGroup.create(_this.world.centerX-15, 13, 'starAnim1');
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
       // _this.getVoice();
        
        _this.optGrp=_this.add.group();
        
        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);
        
        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);
        
        
        _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;
      
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
       
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(510, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=0;
        _this.number1.value=1;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=4;
        _this.number2.value=5;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=0;
        _this.number3.value=1;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=4;
        _this.number4.value=5;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
      /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        */
        
},
    
gotoSecondQuestion:function()
    {
       // _this.getVoice();
        
        _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);
        
        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        
        _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;
        
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;

        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=1;
        _this.number1.value=2;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=6;
        _this.number2.value=7;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=1;
        _this.number3.value=2;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=6;
        _this.number4.value=7;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
       /* _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        */
        
},
    
gotoThirdQuestion:function()
    {
       // _this.getVoice();
        
        _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
       
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95);
        _this.square1.value = 0;
        _this.square1.canAdd = true;

        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
        _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=8;
        _this.number1.value=9;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=2;
        _this.number2.value=3;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=8;
        _this.number3.value=9;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=2;
        _this.number4.value=3;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
       /* _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           */
        
},
    
gotoFourthQuestion:function()
    {
       // _this.getVoice();
        
        _this.optGrp=_this.add.group();
        
        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

         _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;
        
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95);
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
         _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=5;
        _this.number1.value=6;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=6;
        _this.number2.value=7;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=5;
        _this.number3.value=6;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=6;
        _this.number4.value=7;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
      /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        */
        
},
      
 gotoFifthQuestion:function()
    {
        // _this.getVoice();
        
         _this.optGrp=_this.add.group();

        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        
         _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;
        
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
         _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=7;
        _this.number1.value=8;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=4;
        _this.number2.value=5;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=7;
        _this.number3.value=8;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=4;
        _this.number4.value=5;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
  
        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
      /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        */
        
},
       
gotoSixthQuestion:function()
    {
        
        //_this.getVoice();
        
        _this.optGrp=_this.add.group();

        
        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        
         _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95);
        _this.square1.value = 0;
        _this.square1.canAdd = true;
        
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
         _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=3;
        _this.number1.value=4;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=4;
        _this.number2.value=5;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=3;
        _this.number3.value=4;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=4;
        _this.number4.value=5;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
      /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
       */ 
        
        
},
  
gotoSeventhQuestion:function()
    {
         
       // _this.getVoice();
        
        _this.optGrp=_this.add.group();
    
        
        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
         _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);
        
        _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95);
        _this.square1.value = 0;
        _this.square1.canAdd = true;
        
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
         _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=5;
        _this.number1.value=6;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=4;
        _this.number2.value=5;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=5;
        _this.number3.value=6;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=4;
        _this.number4.value=5;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
       /* _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        */
        
},

gotoEighthQuestion:function()
    {
        // _this.getVoice();
        
         _this.optGrp=_this.add.group();

        
        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        
         _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;
        
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95);
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
         _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=1;
        _this.number1.value=2;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=2;
        _this.number2.value=3;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=1;
        _this.number3.value=2;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=2;
        _this.number4.value=3;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number3.value) + String(_this.number4.value);
        _this.Ans2 = String(_this.number2.value) + String(_this.number1.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
      /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
       */ 
        
},
    
gotoNinthQuestion:function()
    {
        // _this.getVoice();
        
        _this.optGrp=_this.add.group();

        
        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

         _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95);
        _this.square1.value = 0;
        _this.square1.canAdd = true;
        
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95); 
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
         _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=7;
        _this.number1.value=8;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=6;
        _this.number2.value=7;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=7;
        _this.number3.value=8;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=6;
        _this.number4.value=7;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);


        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
      /*  _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
           */ 
        
},
    

 gotoTenthQuestion:function()
    {
        //_this.getVoice();
        
        _this.optGrp=_this.add.group();
        
        _this.rightmark = _this.add.sprite(920,275,'unity4_6_1rightmark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.2,1.2); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;
        
        _this.mouse =_this.add.sprite(270,270,'unity4_6_1MouseIdle');
        _this.mouse.anchor.setTo(0.5);
        _this.mouse.frame=6;
        
        _this.mouseanim=_this.mouse.animations.add('stay');
        _this.mouseanim.play(12,true);

        _this.elephant =_this.add.sprite(640,220,'unity4_6_1ElephantIdle');
        _this.elephant.anchor.setTo(0.5);
        _this.elephant.frame=1;
        
        _this.elephantanim=_this.elephant.animations.add('stay');
        _this.elephantanim.play(12,true);
        
        _this.optGrp.add(_this.rightmark);
        _this.optGrp.add(_this.mouse);
        _this.optGrp.add(_this.elephant);

        
         _this.SquareGrp=_this.add.group();
        
        _this.square1 =_this.add.sprite(240,370,'unity4_6_1square');
        _this.square1.anchor.setTo(0.5);
        _this.square1.scale.setTo(0.9,0.95); 
        _this.square1.value = 0;
        _this.square1.canAdd = true;
        
        _this.square2 =_this.add.sprite(305,370,'unity4_6_1square');
        _this.square2.anchor.setTo(0.5);
        _this.square2.scale.setTo(0.9,0.95);
        _this.square2.value = 0;
        _this.square2.canAdd = true;
        
        _this.square3 =_this.add.sprite(570,370,'unity4_6_1square');
        _this.square3.anchor.setTo(0.5);
        _this.square3.scale.setTo(0.9,0.95);
        _this.square3.value = 0;
        _this.square3.canAdd = true;
        
        _this.square4 =_this.add.sprite(635,370,'unity4_6_1square');
        _this.square4.anchor.setTo(0.5);
        _this.square4.scale.setTo(0.9,0.95);
        _this.square4.value = 0;
        _this.square4.canAdd = true;
        
        _this.SquareGrp.add(_this.square1);
        _this.SquareGrp.add(_this.square2);
        _this.SquareGrp.add(_this.square3);
        _this.SquareGrp.add(_this.square4);
        
        _this.numGrp=_this.add.group();
         _this.graphicGrp=_this.add.group();
        
        _this.graphics1 = _this.add.graphics(100, 100);
        _this.graphics1.lineStyle(2, 0x0000FF, 1);
        _this.graphics1.drawRect(110, 235, 60, 70);
        _this.graphics1.alpha=0;
        _this.graphics1.name = "number3";
     
        _this.graphics2 = _this.add.graphics(100, 50);
        _this.graphics2.lineStyle(2, 0x0000FF, 1);
        _this.graphics2.drawRect(175, 285, 60, 70);
        _this.graphics2.alpha=0;
        _this.graphics2.name = "number4";
     
        _this.graphics3 = _this.add.graphics(100, 100);       
        _this.graphics3.lineStyle(2, 0x0000FF, 1);
        _this.graphics3.drawRect(440, 235, 60, 70);
        _this.graphics3.alpha=0;
        _this.graphics3.name = "number2";
     
        _this.graphics4 = _this.add.graphics(100, 50);
        _this.graphics4.lineStyle(2, 0x0000FF, 1);
        _this.graphics4.drawRect(505, 285, 60, 70);
        _this.graphics4.alpha=0;
        _this.graphics4.name = "number1";
        
        _this.graphicGrp.add(_this.graphics1);
        _this.graphicGrp.add(_this.graphics2);
        _this.graphicGrp.add(_this.graphics3);
        _this.graphicGrp.add(_this.graphics4);
        
        _this.number1 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number1.anchor.setTo(0.5);
        _this.number1.scale.setTo(0.9,0.95);
        _this.number1.frame=7;
        _this.number1.value=8;
        _this.number1.name = "number1";
        _this.number1.inputEnabled = true;
        _this.number1.input.useHandCursor = true;
        _this.number1.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number2 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number2.anchor.setTo(0.5);
        _this.number2.scale.setTo(0.9,0.95);
        _this.number2.frame=2;
        _this.number2.value=3;
        _this.number2.name = "number2";
        _this.number2.inputEnabled = true;
        _this.number2.input.useHandCursor = true;
        _this.number2.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number3 =_this.add.sprite(400,450,'unity4_6_1numbers');
        _this.number3.anchor.setTo(0.5);
        _this.number3.scale.setTo(0.9,0.95);
        _this.number3.frame=7;
        _this.number3.value=8;
        _this.number3.name = "number3";
        _this.number3.inputEnabled = true;
        _this.number3.input.useHandCursor = true;
        _this.number3.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.number4 =_this.add.sprite(480,450,'unity4_6_1numbers');
        _this.number4.anchor.setTo(0.5);
        _this.number4.scale.setTo(0.9,0.95);
        _this.number4.frame=2;
        _this.number4.value=3;
        _this.number4.name = "number4";
        _this.number4.inputEnabled = true;
        _this.number4.input.useHandCursor = true;
        _this.number4.events.onInputDown.add(_this.onDragStart,_this);
        
        _this.Ans1 = String(_this.number2.value) + String(_this.number1.value);
        _this.Ans2 = String(_this.number3.value) + String(_this.number4.value);
        console.log("ans1=="+_this.Ans1);
        console.log("ans2=="+_this.Ans2);

        _this.numGrp.add(_this.number1);
        _this.numGrp.add(_this.number2);
        _this.numGrp.add(_this.number3);
        _this.numGrp.add(_this.number4);
        
     /*   _this.SquareGrp.x = 1000;
        _this.tween = _this.add.tween(_this.SquareGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

        _this.numGrp.x = 1000;
        _this.tween = _this.add.tween(_this.numGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        _this.optGrp.x = 1000;
        _this.tween = _this.add.tween(_this.optGrp);
        _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);
        
        */
        
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
                    res_id: "level4.6.1_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
         
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
     
         _this.SquareGrp.getChildAt(0).canAdd = true; 
         _this.SquareGrp.getChildAt(1).canAdd = true; 
         _this.SquareGrp.getChildAt(2).canAdd = true; 
         _this.SquareGrp.getChildAt(3).canAdd = true; 
         
        if(_this.SquareGrp.getChildAt(0).value==target.value)
        {
             _this.SquareGrp.getChildAt(1).canAdd = false;    
        }
        else if(_this.SquareGrp.getChildAt(1).value==target.value)
        {
             _this.SquareGrp.getChildAt(0).canAdd = false;    
        }
         
        if(_this.SquareGrp.getChildAt(2).value==target.value)
        {
             _this.SquareGrp.getChildAt(3).canAdd = false;    
        }
        else if(_this.SquareGrp.getChildAt(3).value==target.value)
        {
             _this.SquareGrp.getChildAt(2).canAdd = false;    
        }
      
       target.events.onDragStop.add(
        function(target){
            console.log("fffffffffffffff"+_this.graphicGrp.length);
        for(var i=0;i<_this.graphicGrp.length;i++)
         {
            
            if(_this.checkOverlap(target,_this.graphicGrp.getChildAt(i)) && _this.SquareGrp.getChildAt(i).value==0 && _this.SquareGrp.getChildAt(i).canAdd)
                {
                    
                    _this.correct++;
                    console.log("overlappedtrgt "+target.name);
                    console.log("overlappedgrp "+_this.graphicGrp.getChildAt(i).name);
                     target.x=_this.SquareGrp.getChildAt(i).x;
                     target.y=_this.SquareGrp.getChildAt(i).y;
                    _this.click2 = _this.add.audio('snapSound');
                    _this.click2.play();
                    _this.SquareGrp.getChildAt(i).value = target.value;
                    target.value = 0;
                    target.events.onInputDown.removeAll();
                    target.inputEnabled = false;
                    
                    /*
                     if(target.name==_this.graphicGrp.getChildAt(i).name)
                    {
                        if(target.name ==_this.graphicGrp.getChildAt(0).name)
                            {
                               _this.correct++;
                                _this.number1 = target.value;
                                _this.click2 = _this.add.audio('snapSound');
                                _this.click2.play();
                                console.log("fdsdfdfdfdfdf 0 "+_this.graphicGrp.getChildAt(0).name);
                            }
                        else if(target.name ==_this.graphicGrp.getChildAt(1).name)
                            {
                                _this.correct++;
                                _this.number2 = target.value;
                                _this.click2 = _this.add.audio('snapSound');
                                _this.click2.play();
                                
                                 console.log("fdsdfdfdfdfdf 1 "+_this.graphicGrp.getChildAt(1).name);
                            }
                        else if(target.name ==_this.graphicGrp.getChildAt(2).name)
                            {
                                _this.correct++;
                                _this.number3 = target.value;
                                _this.click2 = _this.add.audio('snapSound');
                                _this.click2.play();
                                 console.log("fdsdfdfdfdfdf 2 "+_this.graphicGrp.getChildAt(2).name);
                            }
                        else if(target.name ==_this.graphicGrp.getChildAt(3).name)
                            {
                                _this.correct++;
                                 _this.number4= target.value;
                                _this.click2 = _this.add.audio('snapSound');
                                _this.click2.play();
                                console.log("fdsdfdfdfdfdf 3 "+_this.graphicGrp.getChildAt(3).name);
                            }
                    }*/
                    break;
                }
            /* else
             {
                 //_this.number1
                 target.x=_this.vx;
                 target.y=_this.vy;
                // target.y=450;
                //target.x=480;
                // target.y=450;
                 
             }*/
                    
                    
             
            
         
           
        }
        
            
        if(target.value!=0)
            {
                target.x=_this.vx;
                 target.y=_this.vy;
            }
            if(_this.correct >= 4){
           _this.rightmark.inputEnabled=true;
            _this.rightmark.frame=1;
             _this.rightmark.events.onInputDown.add(_this.clickTickMark,_this);
             
              
         }
           
         
         
    },_this);
      
     },
    
    checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    },  
                


    
    clickTickMark:function(target){
          target.events.onInputDown.removeAll(); 
            console.log("first answer=="+(String(_this.number3.value) + String(_this.number4.value)));
            console.log("second answer=="+(String(_this.number2.value) + String(_this.number1.value)));
        console.log("_this.Ans1=="+_this.Ans1);
         console.log("_this.Ans2=="+_this.Ans2);
        //_this.checkans1 = (String(_this.number3.value) + String(_this.number4.value));
        //_this.checkans2 = (String(_this.number2.value) + String(_this.number1.value));
        _this.checkans1 = (String(_this.SquareGrp.getChildAt(0).value) + String(_this.SquareGrp.getChildAt(1).value));
        _this.checkans2 = (String(_this.SquareGrp.getChildAt(2).value) + String(_this.SquareGrp.getChildAt(3).value));
        
        console.log(_this.checkans1,_this.checkans2);
        
        if( (_this.checkans1 == _this.Ans1 && _this.checkans2 == _this.Ans2) || (_this.checkans1 == _this.Ans1 && _this.checkans2 == _this.Ans2))
             {
                 console.log("correct");
                 _this.mouse.loadTexture('unity4_6_1MouseHappy',0,false);
                 _this.mouseanim=_this.mouse.animations.add('stay');
                 _this.mouseanim.play(12,true);
                 _this.click4 = _this.add.audio('anim1sound');
                 _this.click4.play();
                 
                 _this.elephant.loadTexture('unity4_6_1ElephantHappy',0,false);
                 _this.elephantanim=_this.elephant.animations.add('stay');
                 _this.elephantanim.play(12,true);
                 _this.click5 = _this.add.audio('anim2sound');
                 _this.click5.play();
                   
                  _this.correctAns(target);
             }
        
        else{
              _this.wrongAns();
           }
         
        
    },

    

    removeCelebration:function()
	{
        console.log("removeCeleb");
		_this.celebration = false;
        _this.rightmark.frame=0;
		console.log("no"+_this.no11);
       // _this.counterForTimer=0;
        _this.drag=0;
        _this.correct=0;
        _this.count=0;
        _this.correctflag=0;
        _this.no11++;
		   
		  if(_this.no11<6)
                    {
                       _this.timer1.stop();
                        
                      /*   _this.MaintweenDestroy = _this.add.tween(_this.SquareGrp);
                       _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
                       _this.MaintweenDestroy = _this.add.tween(_this.optGrp);
                        _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
                        
                        _this.MaintweenDestroy = _this.add.tween(_this.numGrp);
                        _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
                        
                          _this.MaintweenDestroy.onComplete.add(function()
                          */
                    //  {
                        _this.graphicGrp.destroy();
                        _this.SquareGrp.destroy();
                        _this.numGrp.destroy();
                        _this.mouse.destroy();
                        _this.elephant.destroy();
                        _this.rightmark.destroy();
                        _this.time.events.add(500,function(){
                        _this.getQuestion();
                    },_this);
                 
                    }
        
                else
                    {
                         
                         _this.stopvoice();
                        _this.timer1.stop();
                         _this.timer1=null;
                         _this.state.start('unity4_6_1Score');
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
                    res_id: "level4.6.1_"+target.name, 
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
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
               
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();
     
		console.log("correct11");
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
        _this.rightmark.frame=1;
        _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        _this.drag=0;
        _this.correct=0;
       // _this.counterForTimer=0;
        _this.correctflag=0;
        _this.celebration= false;
        _this.graphicGrp.destroy();
        _this.SquareGrp.destroy();
        _this.numGrp.destroy();
        _this.optGrp.destroy();
        _this.mouse.destroy();
        _this.elephant.destroy();
        _this.rightmark.destroy();
        
       // _this.no11--;
        
        
        _this.getQuestion();
      /*  _this.number1.x=400;
        _this.number1.y=450;
        _this.number2.x=480;
        _this.number2.y=450;
        _this.number3.x=400;
        _this.number3.y=450;
        _this.number4.x=480;
        _this.number4.y=450;
        */
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
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.6.1/English/46.1E.mp3");
                    }
                    else if(window.languageSelected=="hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.6.1/Hindi/46.1H.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.6.1/Kannada/46.1K.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.6.1/Odiya/4.6.1.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
        }         
   

};
       
      
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       