Game.sg3_2_1level1=function(){};

Game.sg3_2_1level1.prototype={
    init:function(game)
    {
       _this = this;
       
       telInitializer.gameIdInit("SG3_2_1",gradeSelected);
       
    },

    preload:function(game){
        if(!window.grade1SG5){

            window.grade1SG5 = true;

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

        this.load.atlas('SG3_2_1rightmark',window.baseUrl+'assets/gradeAssets/sg3.2.1/rightmark.png',window.baseUrl+'json/gradeJson/sg3.2.1/rightmark.json');
        this.load.atlas('SG3_2_1circle1',window.baseUrl+'assets/gradeAssets/sg3.2.1/circle1.png',window.baseUrl+'json/gradeJson/sg3.2.1/circle1.json');
        this.load.atlas('SG3_2_1circle2',window.baseUrl+'assets/gradeAssets/sg3.2.1/circle2.png',window.baseUrl+'json/gradeJson/sg3.2.1/circle2.json');
        this.load.atlas('SG3_2_1circle3',window.baseUrl+'assets/gradeAssets/sg3.2.1/circle3.png',window.baseUrl+'json/gradeJson/sg3.2.1/circle3.json');
        this.load.atlas('SG3_2_1circle4',window.baseUrl+'assets/gradeAssets/sg3.2.1/circle4.png',window.baseUrl+'json/gradeJson/sg3.2.1/circle4.json');
        this.load.atlas('SG3_2_1circle5',window.baseUrl+'assets/gradeAssets/sg3.2.1/circle5.png',window.baseUrl+'json/gradeJson/sg3.2.1/circle5.json');
        this.load.atlas('SG3_2_1oval1',window.baseUrl+'assets/gradeAssets/sg3.2.1/oval1.png',window.baseUrl+'json/gradeJson/sg3.2.1/oval1.json');
        this.load.atlas('SG3_2_1oval2',window.baseUrl+'assets/gradeAssets/sg3.2.1/oval2.png',window.baseUrl+'json/gradeJson/sg3.2.1/oval2.json');
        this.load.atlas('SG3_2_1oval3',window.baseUrl+'assets/gradeAssets/sg3.2.1/oval3.png',window.baseUrl+'json/gradeJson/sg3.2.1/oval3.json');
        this.load.atlas('SG3_2_1oval4',window.baseUrl+'assets/gradeAssets/sg3.2.1/oval4.png',window.baseUrl+'json/gradeJson/sg3.2.1/oval4.json');
        this.load.atlas('SG3_2_1oval5',window.baseUrl+'assets/gradeAssets/sg3.2.1/oval5.png',window.baseUrl+'json/gradeJson/sg3.2.1/oval5.json');
        this.load.atlas('SG3_2_1square1',window.baseUrl+'assets/gradeAssets/sg3.2.1/square1.png',window.baseUrl+'json/gradeJson/sg3.2.1/square1.json');
        this.load.atlas('SG3_2_1square2',window.baseUrl+'assets/gradeAssets/sg3.2.1/square2.png',window.baseUrl+'json/gradeJson/sg3.2.1/square2.json');
        this.load.atlas('SG3_2_1square3',window.baseUrl+'assets/gradeAssets/sg3.2.1/square3.png',window.baseUrl+'json/gradeJson/sg3.2.1/square3.json');
        this.load.atlas('SG3_2_1square4',window.baseUrl+'assets/gradeAssets/sg3.2.1/square4.png',window.baseUrl+'json/gradeJson/sg3.2.1/square4.json');
        this.load.atlas('SG3_2_1square5',window.baseUrl+'assets/gradeAssets/sg3.2.1/square5.png',window.baseUrl+'json/gradeJson/sg3.2.1/square5.json');
        this.load.atlas('SG3_2_1rectangle1',window.baseUrl+'assets/gradeAssets/sg3.2.1/rectangle1.png',window.baseUrl+'json/gradeJson/sg3.2.1/rectangle1.json');
        this.load.atlas('SG3_2_1rectangle2',window.baseUrl+'assets/gradeAssets/sg3.2.1/rectangle2.png',window.baseUrl+'json/gradeJson/sg3.2.1/rectangle2.json');
        this.load.atlas('SG3_2_1rectangle3',window.baseUrl+'assets/gradeAssets/sg3.2.1/rectangle3.png',window.baseUrl+'json/gradeJson/sg3.2.1/rectangle3.json');
        this.load.atlas('SG3_2_1rectangle4',window.baseUrl+'assets/gradeAssets/sg3.2.1/rectangle4.png',window.baseUrl+'json/gradeJson/sg3.2.1/rectangle4.json');
        this.load.atlas('SG3_2_1rectangle5',window.baseUrl+'assets/gradeAssets/sg3.2.1/rectangle5.png',window.baseUrl+'json/gradeJson/sg3.2.1/rectangle5.json');
        this.load.atlas('SG3_2_1triangle1',window.baseUrl+'assets/gradeAssets/sg3.2.1/triangle1.png',window.baseUrl+'json/gradeJson/sg3.2.1/triangle1.json');
        this.load.atlas('SG3_2_1triangle2',window.baseUrl+'assets/gradeAssets/sg3.2.1/triangle2.png',window.baseUrl+'json/gradeJson/sg3.2.1/triangle2.json');
        this.load.atlas('SG3_2_1triangle3',window.baseUrl+'assets/gradeAssets/sg3.2.1/triangle3.png',window.baseUrl+'json/gradeJson/sg3.2.1/triangle3.json');
        this.load.atlas('SG3_2_1triangle4',window.baseUrl+'assets/gradeAssets/sg3.2.1/triangle4.png',window.baseUrl+'json/gradeJson/sg3.2.1/triangle4.json');
        this.load.atlas('SG3_2_1triangle5',window.baseUrl+'assets/gradeAssets/sg3.2.1/triangle5.png',window.baseUrl+'json/gradeJson/sg3.2.1/triangle5.json');
        


    }

    },

create:function(game)
    {
	
        _this.amplify = null;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=0;
         _this.wrong = true;
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.rightmark;
        _this.background;
        _this.click3;
        _this.anim4;
        _this.wmusic;
        _this.clickSound;
        _this.starsGroup;
        _this.snapsound;
        _this.questioNo = 0;
        _this.wrongAnswer = false;
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        _this.sceneCount = 0;
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.correct=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        
       _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
       _this.qArrays = _this.shuffle(_this.qArrays);
        
       console.log(_this.qArrays);

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');
        
        _this.topbar=_this.add.sprite(0,0,'Level42C_Topbar');
        _this.topbar.scale.setTo(1,1.1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false);
            console.log("here");},_this,0,1,2);

        _this.speaker = _this.add.button(620,9,'grade11_speaker',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();
        },_this);
        
        _this.timebg=_this.add.sprite(320,9,'Level42C_timer');
        _this.timebg.scale.setTo(1,1);
        
        _this.timeDisplay = _this.add.text(345,25,_this.minutes + ' : '+_this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        _this.timeDisplay.fill = '#ADFF2F';
         

        _this.generateStarsForTheScene(6);
        _this.getQuestion();     
          
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
      _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
    },
    
  
    shuffle: function(array) 
    {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) 
        {
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
         if(!_this.timer)
        {
            _this.timer = _this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
      }
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        
    	console.log("get"+_this.no11);
        _this.speaker.inputEnabled=true;
        _this.speaker.input.useHandCursor = true;
         _this.questionid =1;
        //no11 = 0;
        
        
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
	
			_this.starsGroup.create(_this.world.centerX, 15, 'starAnim1');
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


    
    
 gotoFirstQuestion:function(){
       
     _this.questioNo = 1;
   
     _this.getVoice();
     
     _this.shapeGrp=_this.add.group();
    
     _this.image1 = _this.add.sprite(130,210,'SG3_2_1square3');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.8,0.8); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(290,210,'SG3_2_1oval2');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(450,210,'SG3_2_1circle4');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(527,120,'SG3_2_1oval4');
    _this.image4.scale.setTo(0.8,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,210,'SG3_2_1square5');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.7,0.7);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(145,385,'SG3_2_1triangle2');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,375,'SG3_2_1triangle3');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.8,0.8);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(400,375,'SG3_2_1circle2');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.7,0.7);
    _this.image8.name="img8";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,375,'SG3_2_1rectangle1');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.8,0.8);
    _this.image9.name="rightAns"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,370,'SG3_2_1rectangle5');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.9,0.9);
    _this.image10.name="rightAns";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 0;
     _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-50 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+30 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
 
     
  },
    
update:function()
    {

       // _this.physics.arcade.collide([_this.image1,_this.image2,_this.image3,_this.image4,_this.image5]);
        _this.physics.arcade.collide([_this.shapeGrp]);

    },
    
    
    
    unselect:function(target){
       _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
        target.events.onInputDown.removeAll();
        target.frame=0;
        target.events.onInputDown.add(_this.clicked,_this);
         
        
    },
    
    clicked:function(target){
         console.log(target.name);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play(); 
         target.frame=1;
         target.events.onInputDown.add(_this.unselect,_this);
        
        _this.rightmark.events.onInputDown.add(function(target){
            target.events.onInputDown.removeAll();
            _this.rightmark.frame=1;
           var correct = true;
            var temps = [];
            var temp = 0;
            var temp1 = 0;
            _this.wrongshapeGrp = this.add.group();
            console.log(_this.shapeGrp.length);
            console.log(_this.shapeGrp1.length);
            for(var i=0;i<_this.shapeGrp.length;i++)
                {
                     for(var i=0;i<_this.shapeGrp1.length;i++)
                
                   {         
                
                console.log(_this.shapeGrp1.getAt(i).name,_this.shapeGrp1.getAt(i).frame);
                if(_this.shapeGrp1.getAt(i).name!="rightAns" && _this.shapeGrp1.getAt(i).frame == 1)
                    {
                        correct = false;
                         temps.push(this.shapeGrp1.getAt(i));                      
                    }
                else if(_this.shapeGrp1.getAt(i).name=="rightAns" && _this.shapeGrp1.getAt(i).frame == 1)
                    {
                        temp1++;                 
                    }
                
            
                     console.log(_this.shapeGrp.getAt(i).name,_this.shapeGrp.getAt(i).frame);
                     if(_this.shapeGrp.getAt(i).name!="rightAns" && _this.shapeGrp.getAt(i).frame == 1)
                    {
                        correct = false;
                         temps.push(this.shapeGrp.getAt(i));                      
                    }
                    else if(_this.shapeGrp.getAt(i).name=="rightAns" && _this.shapeGrp.getAt(i).frame == 1)
                    {
                        temp++;                 
                    }
                }
                }
            
            console.log(temps);
            
            for(var j=0;j<temps.length;j++)
            {
               _this.wrongshapeGrp.add(temps[j]); 
            }
             
            
            console.log(correct,temp,temp1 ,temp==_this.shapeGrp.rightCount , temp1 == _this.shapeGrp1.rightCount);
            
            if(correct && temp==_this.shapeGrp.rightCount && temp1 == _this.shapeGrp1.rightCount)
             {
                 if(_this.questioNo == 1)
                     {
                         _this.anim1=_this.image9.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image10.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 2)
                     {
                         _this.anim1=_this.image1.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image6.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image8.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 3)
                     {
                         _this.anim1=_this.image1.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image3.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image5.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image7.animations.add('play',[0, 1]);
                         _this.anim4.play(3,true);
                         _this.anim5=_this.image9.animations.add('play',[0, 1]);
                         _this.anim5.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 4)
                     {
                         _this.anim1=_this.image2.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image4.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image8.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image10.animations.add('play',[0, 1]);
                         _this.anim4.play(3,true);
                         _this.correctAns();
                     }
                  if(_this.questioNo == 5)
                     {
                         _this.anim1=_this.image2.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image6.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image8.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                  if(_this.questioNo == 6)
                     {
                         _this.anim1=_this.image1.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image4.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image10.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                   if(_this.questioNo == 7)
                     {
                         _this.anim1=_this.image1.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image4.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image6.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image8.animations.add('play',[0, 1]);
                         _this.anim4.play(3,true);
                         _this.correctAns();
                     }
                  if(_this.questioNo == 8)
                     {
                         _this.anim1=_this.image3.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image5.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.correctAns();
                     }
                  if(_this.questioNo == 9)
                     {
                         _this.anim1=_this.image2.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image8.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image10.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 10)
                     {
                         _this.anim1=_this.image2.animations.add('play',[0, 1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image5.animations.add('play',[0, 1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image6.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.anim3=_this.image8.animations.add('play',[0, 1]);
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
               
             }
         else
            {
                
               _this.shake.shake(10, _this.wrongshapeGrp); 
                 _this.wrongAns();
                
        
            }
        },_this);
          
                
            
    },
       

gotoSecondQuestion:function(){
       
     _this.questioNo = 2;
     
     _this.getVoice();
    
      _this.shapeGrp=_this.add.group();
    
     _this.image1 = _this.add.sprite(130,205,'SG3_2_1triangle1');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="rightAns";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(290,205,'SG3_2_1square1');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.8,0.8); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(450,205,'SG3_2_1circle4');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(540,130,'SG3_2_1oval3');
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,220,'SG3_2_1square5');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.7,0.7);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(130,365,'SG3_2_1triangle5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,370,'SG3_2_1circle5');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.7,0.7);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(400,365,'SG3_2_1triangle4');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.7,0.7);
    _this.image8.name="rightAns";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,375,'SG3_2_1rectangle1');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.8,0.8);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,380,'SG3_2_1rectangle4');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.8,0.85);
    _this.image10.name="img10";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 1;
     _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+3 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
     
     },
 
    
gotoThirdQuestion:function(){
       
     _this.questioNo = 3;
    
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
    
     _this.image1 = _this.add.sprite(130,200,'SG3_2_1circle3');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="rightAns";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(280,190,'SG3_2_1rectangle3');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1,1); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(430,200,'SG3_2_1circle4');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(520,130,'SG3_2_1oval3');
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,200,'SG3_2_1circle1');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.8,0.8);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(130,370,'SG3_2_1triangle5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,380,'SG3_2_1circle5');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.7,0.7);
    _this.image7.name="rightAns";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(410,380,'SG3_2_1square4');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.7,0.7);
    _this.image8.name="img8";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,380,'SG3_2_1circle2');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.7,0.7);
    _this.image9.name="rightAns"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,380,'SG3_2_1rectangle4');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.8,0.85);
    _this.image10.name="img10";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 3;
     _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-40 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+32 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
    
      
     
     },
 
    
gotoFourthQuestion:function(){
       
     _this.questioNo = 4;
    
     _this.getVoice();
    
      _this.shapeGrp=_this.add.group();
    
     _this.image1 = _this.add.sprite(130,200,'SG3_2_1circle3');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(280,200,'SG3_2_1square2');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.8,0.8); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(420,200,'SG3_2_1rectangle2');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(500,140,'SG3_2_1square3');
    _this.image4.scale.setTo(0.7,0.7);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,210,'SG3_2_1circle1');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.8,0.8);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(130,370,'SG3_2_1oval5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.8,0.8); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,360,'SG3_2_1triangle4');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.7,0.7);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(400,370,'SG3_2_1square4');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.7,0.7);
    _this.image8.name="rightAns";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,370,'SG3_2_1circle4');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.7,0.7);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,370,'SG3_2_1square5');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.7,0.7);
    _this.image10.name="rightAns";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 2;
     _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-60 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+20 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
    
 },
    
    
gotoFifthQuestion:function(){
       
     _this.questioNo = 5;
     
     _this.getVoice();
    
    _this.shapeGrp=_this.add.group();
    
     _this.image1 = _this.add.sprite(130,200,'SG3_2_1circle3');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(280,200,'SG3_2_1oval4');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(420,200,'SG3_2_1rectangle2');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(500,140,'SG3_2_1square3');
    _this.image4.scale.setTo(0.7,0.7);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,200,'SG3_2_1circle1');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.8,0.8);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(130,380,'SG3_2_1oval5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,370,'SG3_2_1triangle4');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.7,0.7);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(400,380,'SG3_2_1oval3');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.9,0.9);
    _this.image8.name="rightAns";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,380,'SG3_2_1rectangle5');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.9,0.9);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,390,'SG3_2_1rectangle3');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.9,0.9);
    _this.image10.name="img10";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 1;
     _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-70 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-4 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
     
    },
 
    
gotoSixthQuestion:function(){
       
     _this.questioNo = 6;
     
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
    
    _this.image1 = _this.add.sprite(130,210,'SG3_2_1rectangle3');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(0.9,0.9); 
    _this.image1.name="rightAns";
    _this.image1.inputEnabled = true;
    _this.image1.input.useHandCursor = true;
    _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(270,210,'SG3_2_1oval2');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(440,210,'SG3_2_1triangle1');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(527,120,'SG3_2_1rectangle2');
    _this.image4.scale.setTo(0.8,0.8);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,215,'SG3_2_1square5');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.7,0.7);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(145,390,'SG3_2_1triangle2');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,380,'SG3_2_1triangle3');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.9,0.9);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(400,380,'SG3_2_1circle2');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.7,0.7);
    _this.image8.name="img8";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,380,'SG3_2_1oval5');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.8,0.8);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,380,'SG3_2_1rectangle4');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.8,0.85);
    _this.image10.name="rightAns";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 2;
     _this.shapeGrp1.rightCount = 1;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
  if(_this.wrongAnswer == false)
  {
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-60 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+20 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
  
    
 },
      
  
gotoSeventhQuestion:function(){
      
      _this.questioNo = 7;
   
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
    
    _this.image1 = _this.add.sprite(130,210,'SG3_2_1triangle1');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(0.9,0.9); 
    _this.image1.name="rightAns";
    _this.image1.inputEnabled = true;
    _this.image1.input.useHandCursor = true;
    _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(290,220,'SG3_2_1square1');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.7,0.7); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(450,210,'SG3_2_1circle4');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(510,150,'SG3_2_1triangle3');
    _this.image4.scale.setTo(0.8,0.8);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,220,'SG3_2_1square5');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.7,0.7);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(130,370,'SG3_2_1triangle5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,380,'SG3_2_1circle5');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.7,0.7);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(400,380,'SG3_2_1triangle4');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.7,0.7);
    _this.image8.name="rightAns";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,380,'SG3_2_1rectangle1');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.8,0.8);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,380,'SG3_2_1rectangle4');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.8,0.85);
    _this.image10.name="img10";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 2;
     _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+60 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-6 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
    
     
  },
    
    
    
gotoEighthQuestion:function(){
    
    _this.questioNo = 8;
     
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
    
    _this.image1 = _this.add.sprite(130,210,'SG3_2_1triangle3');
    _this.image1.anchor.setTo(0.5);
    _this.image1.scale.setTo(0.9,0.9); 
    _this.image1.name="img1";
    _this.image1.inputEnabled = true;
    _this.image1.input.useHandCursor = true;
    _this.image1.events.onInputDown.add(_this.clicked,_this);  
    
    _this.image2 = _this.add.sprite(280,210,'SG3_2_1rectangle3');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1,1); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(430,210,'SG3_2_1circle4');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(520,150,'SG3_2_1oval3');
    _this.image4.scale.setTo(0.9,0.9);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,210,'SG3_2_1circle1');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.8,0.8);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(130,370,'SG3_2_1triangle5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,380,'SG3_2_1oval2');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.8,0.8);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(410,375,'SG3_2_1square4');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.7,0.7);
    _this.image8.name="img8";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(550,370,'SG3_2_1triangle4');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.8,0.8);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,380,'SG3_2_1square2');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.7,0.7);
    _this.image10.name="img10";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 2;
     _this.shapeGrp1.rightCount = 0;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+80 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-40 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+45 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}

    
},

    
gotoNinthQuestion:function(){
    
    _this.questioNo = 9;
    
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
    
     _this.image1 = _this.add.sprite(130,200,'SG3_2_1circle3');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(280,210,'SG3_2_1square2');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.7,0.7); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(420,210,'SG3_2_1rectangle2');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(490,130,'SG3_2_1oval1');
    _this.image4.scale.setTo(0.8,0.8);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,210,'SG3_2_1circle1');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.8,0.8);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(130,380,'SG3_2_1circle5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.8,0.8); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,385,'SG3_2_1triangle4');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.7,0.7);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(400,385,'SG3_2_1square3');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.7,0.7);
    _this.image8.name="rightAns";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,390,'SG3_2_1circle4');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.7,0.7);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,380,'SG3_2_1square1');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.7,0.7);
    _this.image10.name="rightAns";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 1;
     _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(850,300,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-50 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+28 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
    
     
},

gotoTenthQuestion:function(){
    
    _this.questioNo = 10;
    
     _this.getVoice();
    
    _this.shapeGrp=_this.add.group();
    
     _this.image1 = _this.add.sprite(130,200,'SG3_2_1circle3');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(0.9,0.9); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(280,200,'SG3_2_1oval4');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(0.9,0.9); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(420,200,'SG3_2_1rectangle2');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(0.8,0.8);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(500,140,'SG3_2_1square3');
    _this.image4.scale.setTo(0.7,0.7);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,200,'SG3_2_1oval1');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(0.8,0.8);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     
     _this.shapeGrp1=_this.add.group();
     
    _this.image6 =_this.add.sprite(130,380,'SG3_2_1oval5');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(0.9,0.9); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(270,370,'SG3_2_1triangle4');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(0.7,0.7);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(400,390,'SG3_2_1oval3');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(0.9,0.9);
    _this.image8.name="rightAns";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(540,380,'SG3_2_1rectangle5');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(0.9,0.9);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,385,'SG3_2_1rectangle3');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(0.9,0.9);
    _this.image10.name="img10";   
    _this.image10.inputEnabled = true;
    _this.image10.input.useHandCursor = true;
    _this.image10.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp1.add(_this.image6);
     _this.shapeGrp1.add(_this.image7);
     _this.shapeGrp1.add(_this.image8);
     _this.shapeGrp1.add(_this.image9);
     _this.shapeGrp1.add(_this.image10);
     
     _this.shapeGrp.rightCount = 2;
     _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(850,280,'SG3_2_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    _this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    _this.shapeGrp1.y = -1000;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
          _this.shapeGrp.y = -600;
           console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
        _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-60 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
   
     
},

                 
    removeCelebration:function()
	{

        console.log("removeCeleb");
	//	_this.celebration = false;
		console.log("no"+_this.no11);
        _this.correct=0;
       // _this.count=0;
       
        _this.no11++;
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
		   
		  if(_this.no11<6)
                    {
                     _this.wrong = true;
                     _this.timer1.stop();
                      _this.count=0;
                          if(_this.shapeGrp)
                        {
                          _this.shapeGrp.destroy();
                         }
                          if(_this.shapeGrp1)
                        {
                          _this.shapeGrp1.destroy();
                         }
                         if(_this.rightmark)
                             {
                                 _this.rightmark.destroy();
                             }
                        if(_this.shapesGrp)
                            {
                                _this.shapesGrp.destroy();
                            }
                        if(_this.objectGrp)
                            {
                                _this.objectGrp.destroy();
                            }
                        if(_this.wrongshapeGrp)
                            {
                                _this.wrongshapeGrp.destroy();
                            }
                        if(_this.wrongshapesGrp)
                            {
                                _this.wrongshapesGrp.destroy();
                            }
                         _this.countIncrement = 0;
                         
                         _this.time.events.add(1000, function(){  
                           // _this.game.input.enabled = true;
                         _this.getQuestion();
                         },_this);
                    
                    }
        
                else
                    {
                        // _this.game.input.enabled = true;
                        _this.stopvoice();
                        _this.timer1.stop();
                        _this.timer1 = null;
                        _this.countIncrement = 0;
                        _this.counterForTimer = null;
                         _this.state.start('sg3_2_1Score',true,false);
                  }



		
	},
    
    
   
    
 correctAns:function(target)
	{
       if(_this.shapeGrp)
       {
        _this.shapeGrp.setAll("inputEnabled",false);
       }
       if(_this.shapesGrp)
       {
        _this.shapesGrp.setAll("inputEnabled",false);
       }
       if(_this.shapeGrp1)
       {
        _this.shapeGrp1.setAll("inputEnabled",false);
       }
       //_this.game.input.enabled = false;
       
        _this.stopvoice();
      
       _this.noofAttempts++;
          
          _this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click"+target, 
                    res_id: target, 
                    access_token: window.acctkn 
               } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;


        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        // _this.currentTime = window.timeSaveFunc();

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
     
       

        _this.wrongAnswer = false;
     
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();   
		 console.log("correct11");
        _this.speaker.inputEnabled=false;
        _this.count1++;
       
		_this.celebration = true;
        
        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();
        
		
        _this.time.events.add(2000, _this.removeCelebration, _this);
        _this.sceneCount++;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        
	},


  wrongAns:function(target)
	{
       
        _this.stopvoice();
        _this.noofAttempts++;
        // _this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "level3.2.1_", 
                    access_token: window.acctkn 
               } 
               

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
       
         _this.wrongAnswer = true;
         _this.timer1.stop();	
         _this.wrong = false;
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
        
        
        _this.time.events.add(1000, function(){
        _this.shapeGrp.destroy();
        _this.shapeGrp1.destroy();
         _this.wrongshapeGrp.destroy();   
        _this.rightmark.destroy();
        _this.getQuestion();
            
        },_this);
    
      
	},
    
    
   

        
    
    
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1: 
            case 6:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/English/sg3.2.1aE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Hindi/sg3.2.1aH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Kannada/sg3.2.1aK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Gujrati/sg3.2.1a.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Marathi/sg3.2.1a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Telugu/sg3.2.1a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Tamil/sg3.2.1a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Urdu/sg3.2.1a.mp3");
                    }
                    else
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Odiya/sg3.2.1a.mp3");
                    }
                    break;
            case 2:
            case 7: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/English/sg3.2.1bE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Hindi/sg3.2.1bH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Kannada/sg3.2.1bK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Gujrati/sg3.2.1b.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Marathi/sg3.2.1b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Telugu/sg3.2.1b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Tamil/sg3.2.1b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Urdu/sg3.2.1b.mp3");
                    }
                    else
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Odiya/sg3.2.1b.mp3");
                    }
                    break;
            case 3:
            case 8: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/English/sg3.2.1cE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Hindi/sg3.2.1cH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Kannada/sg3.2.1cK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Gujrati/sg3.2.1c.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Marathi/sg3.2.1c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Telugu/sg3.2.1c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Tamil/sg3.2.1c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Urdu/sg3.2.1c.mp3");
                    }
                    else
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Odiya/sg3.2.1c.mp3");
                    }
                    break;
            case 4:
            case 9: if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/English/sg3.2.1dE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Hindi/sg3.2.1dH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Kannada/sg3.2.1dK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Gujrati/sg3.2.1d.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Marathi/sg3.2.1d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Telugu/sg3.2.1d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Tamil/sg3.2.1d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Urdu/sg3.2.1d.mp3");
                    }
                    else
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Odiya/sg3.2.1d.mp3");
                    }
                    break;
            case 5:
            case 10:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/English/sg3.2.1eE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Hindi/sg3.2.1eH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Kannada/sg3.2.1eK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Gujrati/sg3.2.1e.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Marathi/sg3.2.1e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Telugu/sg3.2.1e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Tamil/sg3.2.1e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.2.1/Urdu/sg3.2.1e.mp3");
                    }
                    else
                    {
                         _this.src.setAttribute("src",window.baseUrl+"questionSounds/sg3.2.1/Odiya/sg3.2.1e.mp3");
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


    shutdown:function()
    {
        //_this.game.input.enabled = true;
        this.stopvoice();
    }   
   

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       