Game.sg3_1_1level1=function(){};

Game.sg3_1_1level1.prototype={
    init:function(game)
    {
       _this = this;
       
       telInitializer.gameIdInit("SG3_1_1",gradeSelected);
       
    },

    preload:function(game){
        if(!window.grade1SG3){

            window.grade1SG3 = true;

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

        this.load.atlas('SG3_1_1rightmark',window.baseUrl+'assets/gradeAssets/sg3.1.1/rightmark.png',window.baseUrl+'json/gradeJson/sg3.1.1/rightmark.json');
        this.load.image('SG3_1_1bluepencil',window.baseUrl+'assets/gradeAssets/sg3.1.1/blue pencil.png');
        this.load.image('SG3_1_1greenpencil',window.baseUrl+'assets/gradeAssets/sg3.1.1/green pencil.png');
        this.load.image('SG3_1_1pinkpencil',window.baseUrl+'assets/gradeAssets/sg3.1.1/pink pencil.png');
        this.load.image('SG3_1_1redpencil',window.baseUrl+'assets/gradeAssets/sg3.1.1/red pencil.png');
        this.load.image('SG3_1_1yellowpencil',window.baseUrl+'assets/gradeAssets/sg3.1.1/yellow pencil.png');
        this.load.image('SG3_1_1eraser',window.baseUrl+'assets/gradeAssets/sg3.1.1/eraser.png');
        this.load.atlas('SG3_1_1circle',window.baseUrl+'assets/gradeAssets/sg3.1.1/circle.png',window.baseUrl+'json/gradeJson/sg3.1.1/circle.json');
        this.load.atlas('SG3_1_1circle2',window.baseUrl+'assets/gradeAssets/sg3.1.1/circle2.png',window.baseUrl+'json/gradeJson/sg3.1.1/circle2.json');
        this.load.atlas('SG3_1_1oval',window.baseUrl+'assets/gradeAssets/sg3.1.1/oval.png',window.baseUrl+'json/gradeJson/sg3.1.1/oval.json');
        this.load.atlas('SG3_1_1oval2',window.baseUrl+'assets/gradeAssets/sg3.1.1/oval2.png',window.baseUrl+'json/gradeJson/sg3.1.1/oval2.json'); 
        this.load.atlas('SG3_1_1rectangle',window.baseUrl+'assets/gradeAssets/sg3.1.1/rectangle.png',window.baseUrl+'json/gradeJson/sg3.1.1/rectangle.json');      
        this.load.atlas('SG3_1_1rectangle2',window.baseUrl+'assets/gradeAssets/sg3.1.1/rectangle2.png',window.baseUrl+'json/gradeJson/sg3.1.1/rectangle2.json');
        this.load.atlas('SG3_1_1circle2',window.baseUrl+'assets/gradeAssets/sg3.1.1/circle2.png',window.baseUrl+'json/gradeJson/sg3.1.1/circle2.json');
        this.load.atlas('SG3_1_1square',window.baseUrl+'assets/gradeAssets/sg3.1.1/square.png',window.baseUrl+'json/gradeJson/sg3.1.1/square.json');
        this.load.atlas('SG3_1_1square2',window.baseUrl+'assets/gradeAssets/sg3.1.1/square2.png',window.baseUrl+'json/gradeJson/sg3.1.1/square2.json');
        this.load.atlas('SG3_1_1triangle',window.baseUrl+'assets/gradeAssets/sg3.1.1/triangle.png',window.baseUrl+'json/gradeJson/sg3.1.1/triangle.json');
        this.load.atlas('SG3_1_1triangle2',window.baseUrl+'assets/gradeAssets/sg3.1.1/triangle2.png',window.baseUrl+'json/gradeJson/sg3.1.1/triangle2.json');
        this.load.atlas('SG3_1_1shapecircle',window.baseUrl+'assets/gradeAssets/sg3.1.1/shapecircle.png',window.baseUrl+'json/gradeJson/sg3.1.1/shapecircle.json');
        this.load.atlas('SG3_1_1shapecircle2',window.baseUrl+'assets/gradeAssets/sg3.1.1/shapecircle2.png',window.baseUrl+'json/gradeJson/sg3.1.1/shapecircle2.json');
        this.load.atlas('SG3_1_1shapeoval',window.baseUrl+'assets/gradeAssets/sg3.1.1/shapeoval.png',window.baseUrl+'json/gradeJson/sg3.1.1/shapeoval.json');
        this.load.atlas('SG3_1_1shapeoval2',window.baseUrl+'assets/gradeAssets/sg3.1.1/shapeoval2.png',window.baseUrl+'json/gradeJson/sg3.1.1/shapeoval2.json');
        this.load.atlas('SG3_1_1shaperectangle',window.baseUrl+'assets/gradeAssets/sg3.1.1/shaperectangle.png',window.baseUrl+'json/gradeJson/sg3.1.1/shaperectangle.json');
        this.load.atlas('SG3_1_1shaperectangle2',window.baseUrl+'assets/gradeAssets/sg3.1.1/shaperectangle2.png',window.baseUrl+'json/gradeJson/sg3.1.1/shaperectangle2.json');
        this.load.atlas('SG3_1_1shapesquare',window.baseUrl+'assets/gradeAssets/sg3.1.1/shapesquare.png',window.baseUrl+'json/gradeJson/sg3.1.1/shapesquare.json');
        this.load.atlas('SG3_1_1shapesquare2',window.baseUrl+'assets/gradeAssets/sg3.1.1/shapesquare2.png',window.baseUrl+'json/gradeJson/sg3.1.1/shapesquare2.json');
        this.load.atlas('SG3_1_1shapetriangle',window.baseUrl+'assets/gradeAssets/sg3.1.1/shapetriangle.png',window.baseUrl+'json/gradeJson/sg3.1.1/shapetriangle.json');
        this.load.atlas('SG3_1_1shapetriangle2',window.baseUrl+'assets/gradeAssets/sg3.1.1/shapetriangle2.png',window.baseUrl+'json/gradeJson/sg3.1.1/shapetriangle2.json');
        


    }

    },

create:function(game)
    {

        _this=this;
	
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
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();
        
        _this.qArrays1 = [1,2,3,4,5];
        //_this.qArrays2 = [6,7,8,9,10];
        _this.qArrays2 = [6,7,8,10];
        
        _this.qArrays1 = _this.shuffle(_this.qArrays1);
        _this.qArrays2 = _this.shuffle(_this.qArrays2);
        
        for(var i=0;i<3;i++)
        {
            _this.qArrays.push(_this.qArrays1[i]);
        }
        for(var j=0;j<3;j++)
        {
            _this.qArrays.push(_this.qArrays2[j]);
        }
        
        
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

        //_this.game.input.enabled = true;
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
    
     _this.image1 = _this.add.sprite(130,247,'SG3_1_1square');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(1.3,1.3); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(270,240,'SG3_1_1rectangle');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(450,225,'SG3_1_1oval');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
 
    _this.image4 =_this.add.sprite(527,175,'SG3_1_1triangle');
    _this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,227,'SG3_1_1oval2');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1.2,1.2);
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
     
    _this.image6 =_this.add.sprite(130,400,'SG3_1_1rectangle2');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(290,398,'SG3_1_1circle2');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1.2,1.2);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(450,403,'SG3_1_1square2');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1.2,1.2);
    _this.image8.name="img8";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(570,418,'SG3_1_1circle');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1.1,1.1);
    _this.image9.name="img9"; 
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,397,'SG3_1_1triangle2');;
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1.1,1.1);
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
     _this.shapeGrp1.rightCount = 1;
     
    _this.rightmark =_this.add.sprite(850,300,'SG3_1_1rightmark');
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
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height-10 - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        

     
     },_this);  
}
    
     
     //  _this.physics.startSystem(Phaser.Physics.ARCADE);
    

 
     
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

            _this.noofAttempts++;
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
                         _this.anim1=_this.image4.animations.add('play'[0,1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image10.animations.add('play'[0,1]);
                         _this.anim2.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 2)
                     {
                         _this.anim1=_this.image1.animations.add('play'[0,1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image3.animations.add('play'[0,1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image7.animations.add('play'[0,1]);
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image10.animations.add('play'[0,1]);
                         _this.anim4.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 3)
                     {
                         _this.anim1=_this.image3.animations.add('play'[0,1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image8.animations.add('play'[0,1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image10.animations.add('play'[0,1]);
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 4)
                     {
                         _this.anim1=_this.image7.animations.add('play'[0,1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image9.animations.add('play'[0,1]);
                         _this.anim2.play(3,true);
                         _this.correctAns();
                     }
                  if(_this.questioNo == 5)
                     {
                         _this.anim1=_this.image2.animations.add('play'[0,1]);
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image5.animations.add('play'[0,1]);
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image6.animations.add('play'[0,1]);
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                 
               
             }
         else
            {
                
               _this.shake.shake(10, _this.wrongshapeGrp); 
                 _this.wrongAns1();
                
        
            }
        },_this);
          
                
            
    },
    
    selected:function(target){
       //_this.count++;
        console.log(target.name);
      
        
        target.frame=1;
        if(_this.questioNo == 6)
        {
          if(target.name=="bluepencil")
            {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.bluepencil);
            }
        else if(target.name=="greenpencil")
            {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.greenpencil);
            }
         }
        else if(_this.questioNo == 7)
        {
               if(target.name=="bluepencil")
             {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.bluepencil);
            }
         else if(target.name=="redpencil")
            {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.redpencil);
            }
        }
         else if(_this.questioNo == 8)
        {
               if(target.name=="greenpencil")
             {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.greenpencil);
            }
         else if(target.name=="pinkpencil")
            {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.pinkpencil);
            }
        }
         else if(_this.questioNo == 9)
        {
               if(target.name=="greenpencil")
             {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.greenpencil);
            }
         else if(target.name=="redpencil")
            {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.redpencil);
            }
        }
         else if(_this.questioNo == 10)
        {
               if(target.name=="bluepencil")
             {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.bluepencil);
            }
         else if(target.name=="redpencil")
            {
                 _this.wmusic = _this.add.audio('waudio');
		         _this.wmusic.play();
                 _this.shake.shake(10, _this.redpencil);
            }
        }
                
            
    },
    
     select:function(target){ 
          console.log(_this.graphics1.name);
          console.log(_this.graphics2.name);
          console.log(_this.graphics3.name);
          console.log(_this.graphics4.name);
          console.log(_this.graphics5.name);
          console.log(_this.graphics6.name);
       //  console.log(target.name);
         target.frame=1;
         _this.click1 = _this.add.audio('ClickSound');
         _this.click1.play();
         if(_this.rightmark)
          _this.rightmark.inputEnabled = false;
         if(_this.eraser)
         _this.eraser.inputEnabled = false;
         if(_this.redpencil)
         _this.redpencil.inputEnabled = false;
         if(_this.bluepencil)
         _this.bluepencil.inputEnabled = false;
         if(_this.greenpencil)
         _this.greenpencil.inputEnabled = false;
          if(_this.pinkpencil)
         _this.pinkpencil.inputEnabled = false;
          if(_this.yellowpencil)
         _this.yellowpencil.inputEnabled = false;
          var correct = true;
          var temps = [];
          var temp = 0;
            _this.wrongshapesGrp = this.add.group();
            console.log(_this.shapesGrp.length);
         
         for(var i=0;i<_this.shapesGrp.length;i++)
            {         
                if(_this.questioNo == 6)
              {
                   console.log(_this.shapesGrp.getAt(i).name,_this.shapesGrp.getAt(i).frame);
                     if(_this.shapesGrp.getAt(i).name!="rightAns" && _this.shapesGrp.getAt(i).frame == 2)
                    {
                        correct = false;
                         temps.push(this.shapesGrp.getAt(i));                      
                    }
                    else if(_this.shapesGrp.getAt(i).name=="rightAns" && _this.shapesGrp.getAt(i).frame == 2)
                    {
                        temp++;                 
                    }
           }
                 if(_this.questioNo == 7)
              {
                   console.log(_this.shapesGrp.getAt(i).name,_this.shapesGrp.getAt(i).frame);
               
                 if(_this.shapesGrp.getAt(i).name!="rightAns" && _this.shapesGrp.getAt(i).frame == 4)
                    {
                         correct = false;
                         temps.push(this.shapesGrp.getAt(i));
                    }
                  else if(_this.shapesGrp.getAt(i).name=="rightAns" && _this.shapesGrp.getAt(i).frame == 4)
                    {
                        temp++;                 
                    }
              }
                   if(_this.questioNo == 8)
              {
                  console.log(_this.shapesGrp.getAt(i).name,_this.shapesGrp.getAt(i).frame);
                
                 if(_this.shapesGrp.getAt(i).name!="rightAns" && _this.shapesGrp.getAt(i).frame == 6)
                    {
                         correct = false;
                         temps.push(this.shapesGrp.getAt(i));
                    }
                  else if(_this.shapesGrp.getAt(i).name=="rightAns" && _this.shapesGrp.getAt(i).frame == 6)
                    {
                        temp++;                 
                    }
              }
                     if(_this.questioNo == 9)
              {
                  console.log(_this.shapesGrp.getAt(i).name,_this.shapesGrp.getAt(i).frame);
                  
                 if(_this.shapesGrp.getAt(i).name!="rightAns" && _this.shapesGrp.getAt(i).frame == 10)
                    {
                        correct = false;
                        temps.push(this.shapesGrp.getAt(i));
                    }
                  else if(_this.shapesGrp.getAt(i).name=="rightAns" && _this.shapesGrp.getAt(i).frame == 10)
                    {
                        temp++;                 
                    }
              }
                     if(_this.questioNo == 10)
              {
                  console.log(_this.shapesGrp.getAt(i).name,_this.shapesGrp.getAt(i).frame);
                  
                 if(_this.shapesGrp.getAt(i).name!="rightAns" && _this.shapesGrp.getAt(i).frame == 8)
                    {
                          correct = false;
                         temps.push(this.shapesGrp.getAt(i));
                    }
                  else if(_this.shapesGrp.getAt(i).name=="rightAns" && _this.shapesGrp.getAt(i).frame == 8)
                    {
                        temp++;                 
                    }
              }
            }
         
          console.log(temps);
            
            for(var j=0;j<temps.length;j++)
            {
               _this.wrongshapesGrp.add(temps[j]); 
            }
             
        console.log(correct,temp,temp==_this.shapesGrp.rightCount);
            
         if(correct && temp==_this.shapesGrp.rightCount)
             {
                 
                 if(_this.questioNo == 6)
                     {                       
                          _this.anim1=_this.shape1.animations.add('play',[1, 2]); 
                          _this.anim1.play(3,true);
                          _this.anim2=_this.shape3.animations.add('play',[1, 2]); 
                          _this.anim2.play(3,true);
                          _this.correctAns();
                     }
                 if(_this.questioNo == 7)
                     {                       
                          _this.anim1=_this.shape2.animations.add('play',[3, 4]); 
                          _this.anim1.play(3,true);
                          _this.anim2=_this.shape4.animations.add('play',[3, 4]); 
                          _this.anim2.play(3,true);
                          _this.anim3=_this.shape6.animations.add('play',[3, 4]); 
                          _this.anim3.play(3,true);
                          _this.correctAns();
                     }
                  if(_this.questioNo == 8)
                     {                       
                          _this.anim1=_this.shape2.animations.add('play',[5, 6]); 
                          _this.anim1.play(3,true);
                          _this.anim2=_this.shape4.animations.add('play',[5, 6]); 
                          _this.anim2.play(3,true);
                          _this.correctAns();
                     }
                 if(_this.questioNo == 9)
                     {                       
                          _this.anim1=_this.shape1.animations.add('play',[9, 10]); 
                          _this.anim1.play(3,true);
                          _this.anim2=_this.shape6.animations.add('play',[9, 10]); 
                          _this.anim2.play(3,true);
                          _this.correctAns();
                     }
                 if(_this.questioNo == 10)
                     {                       
                          _this.anim1=_this.shape3.animations.add('play',[7, 8]); 
                          _this.anim1.play(3,true);
                          _this.anim2=_this.shape4.animations.add('play',[7, 8]); 
                          _this.anim2.play(3,true);
                          _this.anim3=_this.shape5.animations.add('play',[7, 8]); 
                          _this.anim3.play(3,true);
                          _this.correctAns();
                     }
             }
         else
            {
                
               _this.shake.shake(10, _this.wrongshapesGrp); 
                 _this.wrongAns();
                
        
            }
     //   },_this);
          
             
         
         
     },
    
        
   
    

gotoSecondQuestion:function(){
       
     _this.questioNo = 2;
     
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
    
     _this.image1 =_this.add.sprite(130,247,'SG3_1_1square');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(1.3,1.3); 
     _this.image1.name="rightAns"; 
     _this.image1.inputEnabled = true
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
  
    _this.image2 =_this.add.sprite(270,240,'SG3_1_1rectangle');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 =_this.add.sprite(440,237,'SG3_1_1square2');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(590,240,'SG3_1_1triangle');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,227,'SG3_1_1oval2');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1.2,1.2);
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
    
    _this.image6 =_this.add.sprite(130,400,'SG3_1_1rectangle2');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(300,403,'SG3_1_1square2');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1.2,1.2);
    _this.image7.name="rightAns";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(450,398,'SG3_1_1circle2');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1.2,1.2);
    _this.image8.name="img8";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(570,418,'SG3_1_1circle');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1.1,1.1);
    _this.image9.name="img9";
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,415,'SG3_1_1square');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1.3,1.3);
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
    
    _this.rightmark =_this.add.sprite(850,300,'SG3_1_1rightmark');
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
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
     },_this);     
    
     }
    
     
     },
    
gotoThirdQuestion:function(){
       
     _this.questioNo = 3;
    
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
        
     _this.image1 =_this.add.sprite(120,252,'SG3_1_1circle');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(270,233,'SG3_1_1triangle2');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1.1,1.1); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(440,243,'SG3_1_1rectangle');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1.4,1.4);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(600,240,'SG3_1_1triangle');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,227,'SG3_1_1oval2');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1.2,1.2);
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
     
    _this.image6 =_this.add.sprite(130,400,'SG3_1_1square2');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1.4,1.4); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(260,400,'SG3_1_1oval2');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1.2,1.2);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(410,403,'SG3_1_1rectangle2');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1.2,1.2);
    _this.image8.name="rightAns";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
   
   
    _this.image9 =_this.add.sprite(560,425,'SG3_1_1square');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1.2,1.2);
    _this.image9.name="img9";
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,413,'SG3_1_1rectangle');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1.4,1.4);
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
   
    _this.rightmark =_this.add.sprite(850,300,'SG3_1_1rightmark');
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
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
     },_this);     
    
     }
      
     
     },
    
    
gotoFourthQuestion:function(){
       
     _this.questioNo = 4;
    
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
   
     _this.image1 =_this.add.sprite(130,250,'SG3_1_1square');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(270,240,'SG3_1_1rectangle');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(450,225,'SG3_1_1oval');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(600,238,'SG3_1_1triangle');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,227,'SG3_1_1oval2');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1.2,1.2);
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
    
    _this.image6 =_this.add.sprite(130,400,'SG3_1_1rectangle2');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(290,398,'SG3_1_1circle2');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1.2,1.2);
    _this.image7.name="rightAns";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(450,403,'SG3_1_1square2');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1.2,1.2);
    _this.image8.name="img8";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(570,418,'SG3_1_1circle');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1.1,1.1);
    _this.image9.name="rightAns";
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(690,397,'SG3_1_1triangle2');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1.1,1.1);
    _this.image10.name="img10";
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
     
    _this.rightmark =_this.add.sprite(850,300,'SG3_1_1rightmark');
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
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
     },_this);     
    
     }
 },
    
gotoFifthQuestion:function(){
       
     _this.questioNo = 5;
     
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
     
     _this.image1 =_this.add.sprite(125,247,'SG3_1_1square');
     _this.image1.anchor.setTo(0.5);
     _this.image1.scale.setTo(1.3,1.3);
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(275,225,'SG3_1_1oval');
    _this.image2.anchor.setTo(0.5);
    _this.image2.scale.setTo(1.2,1.2);
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(455,240,'SG3_1_1rectangle');
    _this.image3.anchor.setTo(0.5);
    _this.image3.scale.setTo(1.4,1.4);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(600,238,'SG3_1_1triangle');
    _this.image4.anchor.setTo(0.5);
    _this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(700,227,'SG3_1_1oval2');
    _this.image5.anchor.setTo(0.5);
    _this.image5.scale.setTo(1.2,1.2);
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
    
    _this.image6 =_this.add.sprite(125,395,'SG3_1_1oval');
    _this.image6.anchor.setTo(0.5);
    _this.image6.scale.setTo(1.2,1.2); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.image7 =_this.add.sprite(300,398,'SG3_1_1circle2');
    _this.image7.anchor.setTo(0.5);
    _this.image7.scale.setTo(1.2,1.2);
    _this.image7.name="img7";
    _this.image7.inputEnabled = true;
    _this.image7.input.useHandCursor = true;
    _this.image7.events.onInputDown.add(_this.clicked,_this);
     
    _this.image8 =_this.add.sprite(440,403,'SG3_1_1square2');
    _this.image8.anchor.setTo(0.5);
    _this.image8.scale.setTo(1.2,1.2);
    _this.image8.name="img8";
    _this.image8.inputEnabled = true;
    _this.image8.input.useHandCursor = true;
    _this.image8.events.onInputDown.add(_this.clicked,_this);
     
    _this.image9 =_this.add.sprite(580,397,'SG3_1_1triangle2');
    _this.image9.anchor.setTo(0.5);
    _this.image9.scale.setTo(1.1,1.1);
    _this.image9.name="img9";
    _this.image9.inputEnabled = true;
    _this.image9.input.useHandCursor = true;
    _this.image9.events.onInputDown.add(_this.clicked,_this);
     
    _this.image10 =_this.add.sprite(700,418,'SG3_1_1circle');
    _this.image10.anchor.setTo(0.5);
    _this.image10.scale.setTo(1.1,1.1);
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
     _this.shapeGrp1.rightCount = 1;
     
    _this.rightmark =_this.add.sprite(850,300,'SG3_1_1rightmark');
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
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp1.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
     
     },_this);     
    
     }
     
    },
    
gotoSixthQuestion:function(){
       
     _this.questioNo = 6;
     
     _this.getVoice();
    
     _this.shapesGrp=_this.add.group();
    
     _this.shape1 =_this.add.sprite(400,225,'SG3_1_1shapeoval');
     _this.shape1.anchor.setTo(0.5);
     _this.shape1.scale.setTo(1.2,1.2); 
     _this.shape1.name="rightAns";
     _this.shape1.frame=0;
     
     _this.shape2 =_this.add.sprite(560,240,'SG3_1_1shapetriangle');
     _this.shape2.anchor.setTo(0.5);
     _this.shape2.scale.setTo(1.2,1.2); 
     _this.shape2.name="img1";
    
     _this.shape3 =_this.add.sprite(670,230,'SG3_1_1shapeoval2');
     _this.shape3.anchor.setTo(0.5);
     _this.shape3.scale.setTo(1,1.2);
     _this.shape3.name="rightAns";
    
     _this.shape4 =_this.add.sprite(400,400,'SG3_1_1shapesquare2');
     _this.shape4.anchor.setTo(0.5);
     _this.shape4.scale.setTo(1.6,1.6);
     _this.shape4.name="img4";
    
     _this.shape5 =_this.add.sprite(540,410,'SG3_1_1shapecircle');
     _this.shape5.anchor.setTo(0.5);
     _this.shape5.scale.setTo(1.45,1.4); 
     _this.shape5.name="img5";
    
     _this.shape6 =_this.add.sprite(670,390,'SG3_1_1shapetriangle2');
     _this.shape6.anchor.setTo(0.5);
     _this.shape6.scale.setTo(1.2,1.2);
     _this.shape6.name="img6";
    
     _this.shapesGrp.rightCount = 2;

     _this.rightmark =_this.add.sprite(850,320,'SG3_1_1rightmark');
     _this.rightmark.anchor.setTo(0.5);
     _this.rightmark.scale.setTo(1.2,1.2);
     _this.rightmark.frame=0;
     _this.rightmark.inputEnabled = true;
     _this.rightmark.input.useHandCursor = true;
     _this.rightmark.events.onInputDown.add(_this.select,_this);
    
     _this.objectGrp=_this.add.group();
      
     _this.bluepencil =_this.add.sprite(100,275,'SG3_1_1bluepencil');
     _this.bluepencil.anchor.setTo(0.5);
     _this.bluepencil.scale.setTo(1,1); 
     _this.bluepencil.name="bluepencil";
     _this.bluepencil.inputEnabled = true;
     _this.bluepencil.input.useHandCursor = true;
     _this.bluepencil.events.onInputDown.add(_this.selected,_this);
    
     _this.greenpencil =_this.add.sprite(150,275,'SG3_1_1greenpencil');
     _this.greenpencil.anchor.setTo(0.5);
     _this.greenpencil.scale.setTo(1,1); 
     _this.greenpencil.name="greenpencil";
     _this.greenpencil.inputEnabled = true;
     _this.greenpencil.input.useHandCursor = true;
     _this.greenpencil.events.onInputDown.add(_this.selected,_this);
    
     _this.redpencil =_this.add.sprite(200,275,'SG3_1_1redpencil');
     _this.redpencil.anchor.setTo(0.5);
     _this.redpencil.scale.setTo(1,1); 
     _this.redpencil.name="redpencil";
     _this.redpencil.inputEnabled = true;
     _this.redpencil.input.useHandCursor = true;
    
     _this.eraser =_this.add.sprite(150,420,'SG3_1_1eraser');
     _this.eraser.anchor.setTo(0.5);
     _this.eraser.scale.setTo(1,1); 
     _this.eraser.name="erase";
     _this.eraser.inputEnabled = true;
     _this.eraser.input.useHandCursor = true;
    
    
     _this.circlegraphics = _this.add.graphics(0, 0);

     _this.circlegraphics.beginFill(0xFFFF00, 1);
     _this.circlegraphics.drawCircle(-50, -10, 30);
     _this.circlegraphics.x = 50;
     _this.circlegraphics.y = -50;
     _this.circlegraphics.alpha = 0;
     _this.circlegraphics.name = "graphics";

     _this.circlegraphics.boundsPadding = 0;

     _this.redpencil.addChild(_this.circlegraphics);

     _this.circlegraphics1 = _this.add.graphics(0, 0);

     _this.circlegraphics1.beginFill(0xFFFF00, 1);
     _this.circlegraphics1.drawCircle(-50, -10, 30);
     _this.circlegraphics1.x = 50;
     _this.circlegraphics1.y = 10;
     _this.circlegraphics1.alpha = 0;
     _this.circlegraphics1.name = "graphics";

     _this.circlegraphics1.boundsPadding = 0;

     _this.eraser.addChild(_this.circlegraphics1);
    
     _this.redpencil.events.onInputDown.add(function(target){

     _this.redpencil.scale.setTo(0.5);
     _this.redpencil.angle = 400;
           
      setTimeout(function(){	

       }, 10);

      _this.redpencil.input.enableDrag(true);
      _this.redpencil.events.onDragStart.add(_this.onDragStart, _this);
     // _this.redpencil.events.onDragStop.add(_this.onDragStop, _this);

     }, _this); 

     _this.eraser.events.onInputDown.add(function(target){

     _this.eraser.scale.setTo(0.5);
     _this.eraser.angle = 245;
           
     setTimeout(function(){	
               

     }, 10);
         
    _this.eraser.input.enableDrag(true);
    _this.eraser.events.onDragStart.add(_this.onEraserDragStart, _this);
    _this.eraser.events.onDragStop.add(_this.onEraserDragStop, _this);

        }, _this);
     
     _this.shapesGrp.add(_this.shape1);
     _this.shapesGrp.add(_this.shape2);
     _this.shapesGrp.add(_this.shape3);
     _this.shapesGrp.add(_this.shape4);
     _this.shapesGrp.add(_this.shape5);
     _this.shapesGrp.add(_this.shape6);
    
     _this.objectGrp.add(_this.bluepencil);
     _this.objectGrp.add(_this.greenpencil);
     _this.objectGrp.add(_this.redpencil);
     _this.objectGrp.add(_this.eraser);
    
     _this.GraphicsGrp=_this.add.group();
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(240, 90, 120, 80);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "shape1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(420, 110, 70, 70);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "shape2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(540, 80, 80, 100);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "shape3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(250, 270, 100, 70);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "shape4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(400, 280, 80, 60);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "shape5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(530, 270, 90, 80);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "shape6";
    
    _this.GraphicsGrp.add(_this.graphics1);
    _this.GraphicsGrp.add(_this.graphics2);
    _this.GraphicsGrp.add(_this.graphics3);
    _this.GraphicsGrp.add(_this.graphics4);
    _this.GraphicsGrp.add(_this.graphics5);
    _this.GraphicsGrp.add(_this.graphics6);
    
    
    
 },
    
     onEraserDragStart:function(target)
    {
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
    },
    
    onEraserDragStop:function(target)
    {
        _this.snapsound = _this.add.audio('snapSound');
        _this.snapsound.play();
        _this.eraser.x = 150;
        _this.eraser.y = 420;
        _this.eraser.scale.setTo(1);
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.angle = 0;
        
        for(var i=0;i<_this.GraphicsGrp.length;i++)
                  {
                     if(_this.checkOverlap(_this.circlegraphics1,_this.graphics1)) 
                         {
                            if(target.name=="erase")
                         {
                            _this.shape1.frame = 0;
                         }
                       }
                      else if(_this.checkOverlap(_this.circlegraphics1,_this.graphics2))
                          {
                             if(target.name=="erase")
                         {
                            _this.shape2.frame = 0;
                         }
                       }
                     else if(_this.checkOverlap(_this.circlegraphics1,_this.graphics3))
                         {
                             if(target.name=="erase")
                         {
                            _this.shape3.frame = 0;
                         }
                       }
                     else if(_this.checkOverlap(_this.circlegraphics1,_this.graphics4))
                        {  
                             if(target.name=="erase")
                         {
                            _this.shape4.frame = 0;
                         }
                       }
                       else if(_this.checkOverlap(_this.circlegraphics1,_this.graphics5))
                        {  
                             if(target.name=="erase")
                         {
                            _this.shape5.frame = 0;
                         }
                       }
                      else if(_this.checkOverlap(_this.circlegraphics1,_this.graphics6))
                        {  
                             if(target.name=="erase")
                         {
                            _this.shape6.frame = 0;
                         }
                       }
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
            res_id: "level3_1_1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        _this.vx = target.x;   
        _this.vy = target.y; 
        target.input.enableDrag(true);
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
         target.events.onDragStop.add(function(target){
            if(_this.questioNo == 6) 
            {
        _this.redpencil.x = 200;
        _this.redpencil.y = 275;
        _this.redpencil.scale.setTo(1);
        _this.redpencil.anchor.setTo(0.5);
        _this.redpencil.angle = 0;
            }
        else if(_this.questioNo == 7) 
            {
        _this.greenpencil.x = 150;
        _this.greenpencil.y = 275;
        _this.greenpencil.scale.setTo(1);
        _this.greenpencil.anchor.setTo(0.5);
        _this.greenpencil.angle = 0;
            }
        else if(_this.questioNo == 8) 
            {
        _this.bluepencil.x = 100;
        _this.bluepencil.y = 275;
        _this.bluepencil.scale.setTo(1);
        _this.bluepencil.anchor.setTo(0.5);
        _this.bluepencil.angle = 0;
            }
         else if(_this.questioNo == 9) 
            {
        _this.pinkpencil.x = 100;
        _this.pinkpencil.y = 275;
        _this.pinkpencil.scale.setTo(1);
        _this.pinkpencil.anchor.setTo(0.5);
        _this.pinkpencil.angle = 0;
            }
        else if(_this.questioNo == 10) 
            {
        _this.yellowpencil.x = 150;
        _this.yellowpencil.y = 275;
        _this.yellowpencil.scale.setTo(1);
        _this.yellowpencil.anchor.setTo(0.5);
        _this.yellowpencil.angle = 0;
            }
            _this.snapsound = _this.add.audio('snapSound');
            _this.snapsound.play();
              for(var i=0;i<_this.GraphicsGrp.length;i++)
                  {
                      if(_this.questioNo == 6)
                   {
                     if(_this.checkOverlap(target,_this.graphics1)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape1.frame=2;
                            
                         }
                     else if(_this.checkOverlap(target,_this.graphics2)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape2.frame=2;
                         }
                       else if(_this.checkOverlap(target,_this.graphics3)) 
                         {
                             console.log("hhh" +target.name);
                             _this.shape3.frame=2;
                        }
                      else if(_this.checkOverlap(target,_this.graphics4)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape4.frame=2;
                         }
                      else if(_this.checkOverlap(target,_this.graphics5)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape5.frame=2;
                             
                        }
                      else if(_this.checkOverlap(target,_this.graphics6)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape6.frame=2;
                         }
                      
                  }
                  
             else if(_this.questioNo == 7)
                  {
                     if(_this.checkOverlap(target,_this.graphics1)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape1.frame=4;
                            
                         }
                
                      else if(_this.checkOverlap(target,_this.graphics2)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape2.frame=4;
                         }
                       else if(_this.checkOverlap(target,_this.graphics3)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape3.frame=4;
                         }
                      else if(_this.checkOverlap(target,_this.graphics4)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape4.frame=4;
                         }
                      else if(_this.checkOverlap(target,_this.graphics5)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape5.frame=4;
                             
                         }
                      else if(_this.checkOverlap(target,_this.graphics6)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape6.frame=4;
                         }
                      
                  }
                       else if(_this.questioNo == 8)
                  {
                     if(_this.checkOverlap(target,_this.graphics1)) 
                         {
                             console.log("hhh" +target.name);
                           
                            _this.shape1.frame=6;
                            
                         }
                
                      else if(_this.checkOverlap(target,_this.graphics2)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape2.frame=6;
                         }
                       else if(_this.checkOverlap(target,_this.graphics3)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape3.frame=6;
                         }
                      else if(_this.checkOverlap(target,_this.graphics4)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape4.frame=6;
                         }
                      else if(_this.checkOverlap(target,_this.graphics5)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape5.frame=6;
                             
                         }
                      else if(_this.checkOverlap(target,_this.graphics6)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape6.frame=6;
                         }
                      
                  }
                         else if(_this.questioNo == 9)
                  {
                     if(_this.checkOverlap(target,_this.graphics1)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape1.frame=10;
                            
                         }
                
                      else if(_this.checkOverlap(target,_this.graphics2)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape2.frame=10;
                         }
                       else if(_this.checkOverlap(target,_this.graphics3)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape3.frame=10;
                         }
                      else if(_this.checkOverlap(target,_this.graphics4)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape4.frame=10;
                         }
                      else if(_this.checkOverlap(target,_this.graphics5)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape5.frame=10;
                             
                         }
                      else if(_this.checkOverlap(target,_this.graphics6)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape6.frame=10;
                         }
                      
                   }
                         else if(_this.questioNo == 10)
                  {
                     if(_this.checkOverlap(target,_this.graphics1)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape1.frame=8;
                            
                         }
                
                      else if(_this.checkOverlap(target,_this.graphics2)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape2.frame=8;
                         }
                       else if(_this.checkOverlap(target,_this.graphics3)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape3.frame=8;
                         }
                      else if(_this.checkOverlap(target,_this.graphics4)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape4.frame=8;
                         }
                      else if(_this.checkOverlap(target,_this.graphics5)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape5.frame=8;
                             
                         }
                      else if(_this.checkOverlap(target,_this.graphics6)) 
                         {
                             console.log("hhh" +target.name);
                            _this.shape6.frame=8;
                         }
                      
                   }
                  }
         },_this);
     },
    
    
             

    checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    }, 
    
  
gotoSeventhQuestion:function(){
      
      _this.questioNo = 7;
   
     _this.getVoice();
    
     _this.shapesGrp=_this.add.group();
     
     _this.shape1 =_this.add.sprite(400,250,'SG3_1_1shaperectangle');
     _this.shape1.anchor.setTo(0.5);
     _this.shape1.scale.setTo(1.2,1.2); 
     _this.shape1.name="oval1";
    
     _this.shape2 =_this.add.sprite(540,240,'SG3_1_1shapetriangle');
     _this.shape2.anchor.setTo(0.5);
     _this.shape2.scale.setTo(1.2,1.2); 
     _this.shape2.name="rightAns";
    
     _this.shape3=_this.add.sprite(670,230,'SG3_1_1shapeoval2');
     _this.shape3.anchor.setTo(0.5);
     _this.shape3.scale.setTo(1,1.2); 
     _this.shape3.name="oval2";
    
     _this.shape4 =_this.add.sprite(400,405,'SG3_1_1shapetriangle');
     _this.shape4.anchor.setTo(0.5);
     _this.shape4.scale.setTo(1.2,1.2);
     _this.shape4.name="rightAns";
    
     _this.shape5 =_this.add.sprite(540,410,'SG3_1_1shapecircle');
     _this.shape5.anchor.setTo(0.5);
     _this.shape5.scale.setTo(1.45,1.4); 
     _this.shape5.name="circle";
    
     _this.shape6 =_this.add.sprite(670,390,'SG3_1_1shapetriangle2');
     _this.shape6.anchor.setTo(0.5);
     _this.shape6.scale.setTo(1.2,1.2);
     _this.shape6.name="rightAns";
    
     _this.shapesGrp.rightCount = 3;
    
     _this.rightmark =_this.add.sprite(850,320,'SG3_1_1rightmark');
     _this.rightmark.anchor.setTo(0.5);
     _this.rightmark.scale.setTo(1.2,1.2);
     _this.rightmark.frame=0;
     _this.rightmark.inputEnabled=true;
     _this.rightmark.input.useHandCursor = true;
     _this.rightmark.events.onInputDown.add(_this.select,_this);
    
     _this.objectGrp=_this.add.group();
    
     _this.bluepencil =_this.add.sprite(100,275,'SG3_1_1bluepencil');
     _this.bluepencil.anchor.setTo(0.5);
     _this.bluepencil.scale.setTo(1,1); 
     _this.bluepencil.name="bluepencil";
     _this.bluepencil.inputEnabled = true;
     _this.bluepencil.input.useHandCursor = true;
     _this.bluepencil.events.onInputDown.add(_this.selected,_this);
    
     _this.greenpencil =_this.add.sprite(150,275,'SG3_1_1greenpencil');
     _this.greenpencil.anchor.setTo(0.5);
     _this.greenpencil.scale.setTo(1,1); 
     _this.greenpencil.name="greenpencil";
     _this.greenpencil.inputEnabled = true;
     _this.greenpencil.input.useHandCursor = true;
    
     _this.redpencil =_this.add.sprite(200,275,'SG3_1_1redpencil');
     _this.redpencil.anchor.setTo(0.5);
     _this.redpencil.scale.setTo(1,1); 
     _this.redpencil.name="redpencil";
     _this.redpencil.inputEnabled = true;
     _this.redpencil.input.useHandCursor = true;
     _this.redpencil.events.onInputDown.add(_this.selected,_this);
    
     _this.eraser =_this.add.sprite(150,420,'SG3_1_1eraser');
     _this.eraser.anchor.setTo(0.5);
     _this.eraser.scale.setTo(1,1); 
     _this.eraser.name="erase";
     _this.eraser.inputEnabled = true;
     _this.eraser.input.useHandCursor = true;
     
	 _this.circlegraphics = _this.add.graphics(0, 0);
     _this.circlegraphics.beginFill(0xFFFF00, 1);
     _this.circlegraphics.drawCircle(-50, -10, 30);
     _this.circlegraphics.x = 50;
     _this.circlegraphics.y = -50;
     _this.circlegraphics.alpha = 0;
     _this.circlegraphics.name = "graphics";

     _this.circlegraphics.boundsPadding = 0;

     _this.greenpencil.addChild(_this.circlegraphics);

     _this.circlegraphics1 = _this.add.graphics(0, 0);

     _this.circlegraphics1.beginFill(0xFFFF00, 1);
     _this.circlegraphics1.drawCircle(-50, -10, 30);
     _this.circlegraphics1.x = 50;
     _this.circlegraphics1.y = 10;
     _this.circlegraphics1.alpha = 0;
     _this.circlegraphics1.name = "graphics";

     _this.circlegraphics1.boundsPadding = 0;

     _this.eraser.addChild(_this.circlegraphics1);
    
     _this.greenpencil.events.onInputDown.add(function(target){

     _this.greenpencil.scale.setTo(0.5);
     _this.greenpencil.angle = 400;
           
      setTimeout(function(){	

       }, 10);

      _this.greenpencil.input.enableDrag(true);
      _this.greenpencil.events.onDragStart.add(_this.onDragStart, _this);
     // _this.redpencil.events.onDragStop.add(_this.onDragStop, _this);

     }, _this); 

     _this.eraser.events.onInputDown.add(function(target){

     _this.eraser.scale.setTo(0.5);
     _this.eraser.angle = 245;
           
     setTimeout(function(){	
               

     }, 10);
         
    _this.eraser.input.enableDrag(true);
    _this.eraser.events.onDragStart.add(_this.onEraserDragStart, _this);
    _this.eraser.events.onDragStop.add(_this.onEraserDragStop, _this);

        }, _this);
     
      
     _this.shapesGrp.add(_this.shape1);
     _this.shapesGrp.add(_this.shape2);
     _this.shapesGrp.add(_this.shape3);
     _this.shapesGrp.add(_this.shape4);
     _this.shapesGrp.add(_this.shape5);
     _this.shapesGrp.add(_this.shape6);
    
     _this.objectGrp.add(_this.bluepencil);
     _this.objectGrp.add(_this.greenpencil);
     _this.objectGrp.add(_this.redpencil);
     _this.objectGrp.add(_this.eraser);
    
     _this.GraphicsGrp=_this.add.group();
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(260, 110, 80, 80);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "shape1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(400, 110, 80, 80);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "shape2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(530, 80, 80, 100);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "shape3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(250, 290, 100, 50);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "shape4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(400, 280, 80, 60);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "shape5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(530, 270, 90, 80);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "shape6";
    
    _this.GraphicsGrp.add(_this.graphics1);
    _this.GraphicsGrp.add(_this.graphics2);
    _this.GraphicsGrp.add(_this.graphics3);
    _this.GraphicsGrp.add(_this.graphics4);
    _this.GraphicsGrp.add(_this.graphics5);
    _this.GraphicsGrp.add(_this.graphics6);
    
     
  },
    
    
    
gotoEighthQuestion:function(){
    
    _this.questioNo = 8;
     
     _this.getVoice();
    
     _this.shapesGrp=_this.add.group();
    
     _this.shape1 =_this.add.sprite(400,225,'SG3_1_1shapeoval');
     _this.shape1.anchor.setTo(0.5);
     _this.shape1.scale.setTo(1.2,1.2); 
     _this.shape1.name="oval1";

     _this.shape2 =_this.add.sprite(560,235,'SG3_1_1shapesquare');
     _this.shape2.anchor.setTo(0.5);
     _this.shape2.scale.setTo(1.3,1.2);
     _this.shape2.name="rightAns";
    
     _this.shape3 =_this.add.sprite(670,230,'SG3_1_1shapeoval2');
     _this.shape3.anchor.setTo(0.5);
     _this.shape3.scale.setTo(1,1.2); 
     _this.shape3.name="oval2";
    
     _this.shape4 =_this.add.sprite(400,400,'SG3_1_1shapesquare2');
     _this.shape4.anchor.setTo(0.5);
     _this.shape4.scale.setTo(1.6,1.6);
     _this.shape4.name="rightAns";
    
     _this.shape5 =_this.add.sprite(540,410,'SG3_1_1shapecircle');
     _this.shape5.anchor.setTo(0.5);
     _this.shape5.scale.setTo(1.5,1.4);
     _this.shape5.name="circle";
    
     _this.shape6 =_this.add.sprite(670,390,'SG3_1_1shapetriangle2');
     _this.shape6.anchor.setTo(0.5);
     _this.shape6.scale.setTo(1.2,1.2);
     _this.shape6.name="triangle";
    
     _this.shapesGrp.rightCount = 2;
    
     _this.rightmark =_this.add.sprite(850,320,'SG3_1_1rightmark');
     _this.rightmark.anchor.setTo(0.5);
     _this.rightmark.scale.setTo(1.2,1.2);
     _this.rightmark.frame=0;
     _this.rightmark.inputEnabled = true;
     _this.rightmark.input.useHandCursor = true;
     _this.rightmark.events.onInputDown.add(_this.select,_this);
    
     _this.objectGrp=_this.add.group();
    
     _this.bluepencil =_this.add.sprite(100,275,'SG3_1_1bluepencil');
     _this.bluepencil.anchor.setTo(0.5);
     _this.bluepencil.scale.setTo(1,1); 
     _this.bluepencil.name="bluepencil";
     _this.bluepencil.inputEnabled = true;
     _this.bluepencil.input.useHandCursor = true;
    
     _this.greenpencil =_this.add.sprite(150,275,'SG3_1_1greenpencil');
     _this.greenpencil.anchor.setTo(0.5);
     _this.greenpencil.scale.setTo(1,1); 
     _this.greenpencil.name="greenpencil";
     _this.greenpencil.inputEnabled = true;
     _this.greenpencil.input.useHandCursor = true;
     _this.greenpencil.events.onInputDown.add(_this.selected,_this);
    
     _this.pinkpencil =_this.add.sprite(200,275,'SG3_1_1pinkpencil');
     _this.pinkpencil.anchor.setTo(0.5);
     _this.pinkpencil.scale.setTo(1,1); 
     _this.pinkpencil.name="pinkpencil";
     _this.pinkpencil.inputEnabled = true;
     _this.pinkpencil.input.useHandCursor = true;
     _this.pinkpencil.events.onInputDown.add(_this.selected,_this);
    
     _this.eraser =_this.add.sprite(150,420,'SG3_1_1eraser');
     _this.eraser.anchor.setTo(0.5);
     _this.eraser.scale.setTo(1,1);
     _this.eraser.name="erase";
     _this.eraser.inputEnabled = true;
     _this.eraser.input.useHandCursor = true;
    
    
     _this.circlegraphics = _this.add.graphics(0, 0);

     _this.circlegraphics.beginFill(0xFFFF00, 1);
     _this.circlegraphics.drawCircle(-50, -10, 30);
     _this.circlegraphics.x = 50;
     _this.circlegraphics.y = -50;
     _this.circlegraphics.alpha = 0;
     _this.circlegraphics.name = "graphics";

     _this.circlegraphics.boundsPadding = 0;

     _this.bluepencil.addChild(_this.circlegraphics);

     _this.circlegraphics1 = _this.add.graphics(0, 0);

     _this.circlegraphics1.beginFill(0xFFFF00, 1);
     _this.circlegraphics1.drawCircle(-50, -10, 30);
     _this.circlegraphics1.x = 50;
     _this.circlegraphics1.y = 10;
     _this.circlegraphics1.alpha = 0;
     _this.circlegraphics1.name = "graphics";

     _this.circlegraphics1.boundsPadding = 0;

     _this.eraser.addChild(_this.circlegraphics1);
    
     _this.bluepencil.events.onInputDown.add(function(target){

     _this.bluepencil.scale.setTo(0.5);
     _this.bluepencil.angle = 400;
           
      setTimeout(function(){	

       }, 10);

      _this.bluepencil.input.enableDrag(true);
      _this.bluepencil.events.onDragStart.add(_this.onDragStart, _this);
     // _this.redpencil.events.onDragStop.add(_this.onDragStop, _this);

     }, _this); 

     _this.eraser.events.onInputDown.add(function(target){

     _this.eraser.scale.setTo(0.5);
     _this.eraser.angle = 245;
           
     setTimeout(function(){	
               

     }, 10);
         
    _this.eraser.input.enableDrag(true);
    _this.eraser.events.onDragStart.add(_this.onEraserDragStart, _this);
    _this.eraser.events.onDragStop.add(_this.onEraserDragStop, _this);

        }, _this);
      
     _this.shapesGrp.add(_this.shape1);
     _this.shapesGrp.add(_this.shape2);
     _this.shapesGrp.add(_this.shape3);
     _this.shapesGrp.add(_this.shape4);
     _this.shapesGrp.add(_this.shape5);
     _this.shapesGrp.add(_this.shape6);
     
     _this.objectGrp.add(_this.bluepencil);
     _this.objectGrp.add(_this.greenpencil);
     _this.objectGrp.add(_this.pinkpencil);
     _this.objectGrp.add(_this.eraser);
    
     _this.GraphicsGrp=_this.add.group();
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(240, 90, 120, 80);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "shape1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(410, 90, 80, 90);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "shape2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(540, 80, 80, 100);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "shape3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(250, 270, 100, 70);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "shape4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(400, 280, 80, 60);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "shape5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(530, 270, 90, 80);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "shape6";
    
    _this.GraphicsGrp.add(_this.graphics1);
    _this.GraphicsGrp.add(_this.graphics2);
    _this.GraphicsGrp.add(_this.graphics3);
    _this.GraphicsGrp.add(_this.graphics4);
    _this.GraphicsGrp.add(_this.graphics5);
    _this.GraphicsGrp.add(_this.graphics6);
    
   
    
},

    
gotoNinthQuestion:function(){
    
    _this.questioNo = 9;
    
     _this.getVoice();
    
     _this.shapesGrp=_this.add.group();
     
     _this.shape1 =_this.add.sprite(400,245,'SG3_1_1shaperectangle');
     _this.shape1.anchor.setTo(0.5);
     _this.shape1.scale.setTo(1.3,1.3); 
     _this.shape1.name="rightAns";
    
     _this.shape2 =_this.add.sprite(560,240,'SG3_1_1shapetriangle');
     _this.shape2.anchor.setTo(0.5);
     _this.shape2.scale.setTo(1.2,1.2); 
     _this.shape2.name="triangle";
    
     _this.shape3 =_this.add.sprite(670,230,'SG3_1_1shapeoval2');
     _this.shape3.anchor.setTo(0.5);
     _this.shape3.scale.setTo(1,1.2); 
     _this.shape3.name="oval";
    
     _this.shape4 =_this.add.sprite(400,400,'SG3_1_1shapesquare2');
     _this.shape4.anchor.setTo(0.5);
     _this.shape4.scale.setTo(1.6,1.6);
     _this.shape4.name="square";
    
     _this.shape5 =_this.add.sprite(530,410,'SG3_1_1shapecircle');
     _this.shape5.anchor.setTo(0.5);
     _this.shape5.scale.setTo(1.45,1.4); 
     _this.shape5.name="circle";
    
     _this.shape6 =_this.add.sprite(670,400,'SG3_1_1shaperectangle2');
     _this.shape6.anchor.setTo(0.5);
     _this.shape6.scale.setTo(1,1);
     _this.shape6.name="rightAns";
    
     _this.shapesGrp.rightCount = 2;
    
     _this.rightmark =_this.add.sprite(850,320,'SG3_1_1rightmark');
     _this.rightmark.anchor.setTo(0.5);
     _this.rightmark.scale.setTo(1.2,1.2);
     _this.rightmark.frame=0;
     _this.rightmark.inputEnabled = true;
     _this.rightmark.input.useHandCursor = true;
     _this.rightmark.events.onInputDown.add(_this.select,_this);
    
     _this.objectGrp=_this.add.group();
    
     _this.pinkpencil =_this.add.sprite(100,275,'SG3_1_1pinkpencil');
     _this.pinkpencil.anchor.setTo(0.5);
     _this.pinkpencil.scale.setTo(1,1); 
     _this.pinkpencil.name="pinkpencil";
     _this.pinkpencil.inputEnabled = true;
     _this.pinkpencil.input.useHandCursor = true;
    
     _this.greenpencil =_this.add.sprite(150,275,'SG3_1_1greenpencil');
     _this.greenpencil.anchor.setTo(0.5);
     _this.greenpencil.scale.setTo(1,1); 
     _this.greenpencil.name="greenpencil";
     _this.greenpencil.inputEnabled = true;
     _this.greenpencil.input.useHandCursor = true;
     _this.greenpencil.events.onInputDown.add(_this.selected,_this);
    
     _this.redpencil =_this.add.sprite(200,275,'SG3_1_1redpencil');
     _this.redpencil.anchor.setTo(0.5);
     _this.redpencil.scale.setTo(1,1); 
     _this.redpencil.name="redpencil";
     _this.redpencil.inputEnabled = true;
     _this.redpencil.input.useHandCursor = true;
     _this.redpencil.events.onInputDown.add(_this.selected,_this);
    
     _this.eraser =_this.add.sprite(150,420,'SG3_1_1eraser');
     _this.eraser.anchor.setTo(0.5);
     _this.eraser.scale.setTo(1,1); 
     _this.eraser.name="erase"; 
     _this.eraser.inputEnabled = true;
     _this.eraser.input.useHandCursor = true;
    
    
     _this.circlegraphics = _this.add.graphics(0, 0);

     _this.circlegraphics.beginFill(0xFFFF00, 1);
     _this.circlegraphics.drawCircle(-50, -10, 30);
     _this.circlegraphics.x = 50;
     _this.circlegraphics.y = -50;
     _this.circlegraphics.alpha = 0;
     _this.circlegraphics.name = "graphics";

     _this.circlegraphics.boundsPadding = 0;

     _this.pinkpencil.addChild(_this.circlegraphics);

     _this.circlegraphics1 = _this.add.graphics(0, 0);

     _this.circlegraphics1.beginFill(0xFFFF00, 1);
     _this.circlegraphics1.drawCircle(-50, -10, 30);
     _this.circlegraphics1.x = 50;
     _this.circlegraphics1.y = 10;
     _this.circlegraphics1.alpha = 0;
     _this.circlegraphics1.name = "graphics";

     _this.circlegraphics1.boundsPadding = 0;

     _this.eraser.addChild(_this.circlegraphics1);
    
     _this.pinkpencil.events.onInputDown.add(function(target){

     _this.pinkpencil.scale.setTo(0.5);
     _this.pinkpencil.angle = 400;
           
      setTimeout(function(){	

       }, 10);

      _this.pinkpencil.input.enableDrag(true);
      _this.pinkpencil.events.onDragStart.add(_this.onDragStart, _this);
     // _this.redpencil.events.onDragStop.add(_this.onDragStop, _this);

     }, _this); 

     _this.eraser.events.onInputDown.add(function(target){

     _this.eraser.scale.setTo(0.5);
     _this.eraser.angle = 245;
           
     setTimeout(function(){	
               

     }, 10);
         
    _this.eraser.input.enableDrag(true);
    _this.eraser.events.onDragStart.add(_this.onEraserDragStart, _this);
    _this.eraser.events.onDragStop.add(_this.onEraserDragStop, _this);

        }, _this);
     
    
     _this.shapesGrp.add(_this.shape1);
     _this.shapesGrp.add(_this.shape2);
     _this.shapesGrp.add(_this.shape3);
     _this.shapesGrp.add(_this.shape4);
     _this.shapesGrp.add(_this.shape5);
     _this.shapesGrp.add(_this.shape6);
     
     _this.objectGrp.add(_this.pinkpencil);
     _this.objectGrp.add(_this.greenpencil);
     _this.objectGrp.add(_this.redpencil);
     _this.objectGrp.add(_this.eraser);
     
     _this.GraphicsGrp=_this.add.group();
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(240, 110, 110, 70);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "shape1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(420, 110, 80, 70);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "shape2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(540, 80, 80, 100);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "shape3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(250, 270, 100, 70);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "shape4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(390, 280, 70, 60);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "shape5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(520, 260, 110, 80);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "shape6";
    
     _this.GraphicsGrp.add(_this.graphics1);
     _this.GraphicsGrp.add(_this.graphics2);
     _this.GraphicsGrp.add(_this.graphics3);
     _this.GraphicsGrp.add(_this.graphics4);
     _this.GraphicsGrp.add(_this.graphics5);
     _this.GraphicsGrp.add(_this.graphics6);
     
     
},

gotoTenthQuestion:function(){
    
    _this.questioNo = 10;
    
     _this.getVoice();
    
    _this.shapesGrp=_this.add.group();
     
     _this.shape1 =_this.add.sprite(400,225,'SG3_1_1shapeoval');
     _this.shape1.anchor.setTo(0.5);
     _this.shape1.scale.setTo(1.2,1.2); 
     _this.shape1.name="oval1";
    
     _this.shape2 =_this.add.sprite(550,240,'SG3_1_1shapetriangle');
     _this.shape2.anchor.setTo(0.5);
     _this.shape2.scale.setTo(1.2,1.2); 
     _this.shape2.name="triangle1";
    
     _this.shape3 =_this.add.sprite(680,225,'SG3_1_1shapecircle2');
     _this.shape3.anchor.setTo(0.5);
     _this.shape3.scale.setTo(1.3,1.3); 
     _this.shape3.name="rightAns";
    
     _this.shape4 =_this.add.sprite(400,390,'SG3_1_1shapecircle2');
     _this.shape4.anchor.setTo(0.5);
     _this.shape4.scale.setTo(1.3,1.3);
     _this.shape4.name="rightAns";
    
     _this.shape5 =_this.add.sprite(540,410,'SG3_1_1shapecircle');
     _this.shape5.anchor.setTo(0.5);
     _this.shape5.scale.setTo(1.45,1.4); 
     _this.shape5.name="rightAns";
    
     _this.shape6 =_this.add.sprite(670,415,'SG3_1_1shapesquare2');
     _this.shape6.anchor.setTo(0.5);
     _this.shape6.scale.setTo(1.3,1.3);
     _this.shape6.name="triangle2";
    
     _this.shapesGrp.rightCount = 3;
    
     _this.rightmark =_this.add.sprite(850,320,'SG3_1_1rightmark');
     _this.rightmark.anchor.setTo(0.5);
     _this.rightmark.scale.setTo(1.2,1.2);
     _this.rightmark.frame=0;
     _this.rightmark.inputEnabled = true;
     _this.rightmark.input.useHandCursor = true;
     _this.rightmark.events.onInputDown.add(_this.select,_this);
    
     _this.objectGrp=_this.add.group();
    
     _this.bluepencil =_this.add.sprite(100,275,'SG3_1_1bluepencil');
     _this.bluepencil.anchor.setTo(0.5);
     _this.bluepencil.scale.setTo(1,1); 
     _this.bluepencil.name="bluepencil"; 
     _this.bluepencil.inputEnabled = true;
     _this.bluepencil.input.useHandCursor = true;
     _this.bluepencil.events.onInputDown.add(_this.selected,_this);
    
     _this.yellowpencil =_this.add.sprite(150,275,'SG3_1_1yellowpencil');
     _this.yellowpencil.anchor.setTo(0.5);
     _this.yellowpencil.scale.setTo(1,1); 
     _this.yellowpencil.name="yellowpencil"; 
     _this.yellowpencil.inputEnabled = true;
     _this.yellowpencil.input.useHandCursor = true;
    
     _this.redpencil =_this.add.sprite(200,275,'SG3_1_1redpencil');
     _this.redpencil.anchor.setTo(0.5);
     _this.redpencil.scale.setTo(1,1); 
     _this.redpencil.name="redpencil";  
     _this.redpencil.inputEnabled = true;
     _this.redpencil.input.useHandCursor = true;
     _this.redpencil.events.onInputDown.add(_this.selected,_this);
    
     _this.eraser =_this.add.sprite(150,420,'SG3_1_1eraser');
     _this.eraser.anchor.setTo(0.5);
     _this.eraser.scale.setTo(1,1); 
     _this.eraser.name="erase"; 
     _this.eraser.inputEnabled = true;
     _this.eraser.input.useHandCursor = true;
    
     _this.circlegraphics = _this.add.graphics(0, 0);

     _this.circlegraphics.beginFill(0xFFFF00, 1);
     _this.circlegraphics.drawCircle(-50, -10, 30);
     _this.circlegraphics.x = 50;
     _this.circlegraphics.y = -50;
     _this.circlegraphics.alpha = 0;
     _this.circlegraphics.name = "graphics";

     _this.circlegraphics.boundsPadding = 0;

     _this.yellowpencil.addChild(_this.circlegraphics);

     _this.circlegraphics1 = _this.add.graphics(0, 0);

     _this.circlegraphics1.beginFill(0xFFFF00, 1);
     _this.circlegraphics1.drawCircle(-50, -10, 30);
     _this.circlegraphics1.x = 50;
     _this.circlegraphics1.y = 10;
     _this.circlegraphics1.alpha = 0;
     _this.circlegraphics1.name = "graphics";

     _this.circlegraphics1.boundsPadding = 0;

     _this.eraser.addChild(_this.circlegraphics1);
    
     _this.yellowpencil.events.onInputDown.add(function(target){

     _this.yellowpencil.scale.setTo(0.5);
     _this.yellowpencil.angle = 400;
           
      setTimeout(function(){	

       }, 10);

      _this.yellowpencil.input.enableDrag(true);
      _this.yellowpencil.events.onDragStart.add(_this.onDragStart, _this);
     // _this.redpencil.events.onDragStop.add(_this.onDragStop, _this);

     }, _this); 

     _this.eraser.events.onInputDown.add(function(target){

     _this.eraser.scale.setTo(0.5);
     _this.eraser.angle = 245;
           
     setTimeout(function(){	
               

     }, 10);
         
    _this.eraser.input.enableDrag(true);
    _this.eraser.events.onDragStart.add(_this.onEraserDragStart, _this);
    _this.eraser.events.onDragStop.add(_this.onEraserDragStop, _this);

        }, _this);
     
      
     _this.shapesGrp.add(_this.shape1);
     _this.shapesGrp.add(_this.shape2);
     _this.shapesGrp.add(_this.shape3);
     _this.shapesGrp.add(_this.shape4);
     _this.shapesGrp.add(_this.shape5);
     _this.shapesGrp.add(_this.shape6);
    
     _this.objectGrp.add(_this.bluepencil);
     _this.objectGrp.add(_this.yellowpencil);
     _this.objectGrp.add(_this.redpencil);
     _this.objectGrp.add(_this.eraser);
    
    
     _this.GraphicsGrp=_this.add.group();
    
     _this.graphics1 = _this.add.graphics(100, 100);       
     _this.graphics1.lineStyle(2, 0x0000FF, 1);
     _this.graphics1.drawRect(240, 90, 120, 80);
     _this.graphics1.alpha=0;
     _this.graphics1.name = "shape1";
    
     _this.graphics2 = _this.add.graphics(100, 100);       
     _this.graphics2.lineStyle(2, 0x0000FF, 1);
     _this.graphics2.drawRect(420, 110, 70, 70);
     _this.graphics2.alpha=0;
     _this.graphics2.name = "shape2";
    
     _this.graphics3 = _this.add.graphics(100, 100);       
     _this.graphics3.lineStyle(2, 0x0000FF, 1);
     _this.graphics3.drawRect(540, 80, 80, 100);
     _this.graphics3.alpha=0;
     _this.graphics3.name = "shape3";
    
     _this.graphics4 = _this.add.graphics(100, 100);       
     _this.graphics4.lineStyle(2, 0x0000FF, 1);
     _this.graphics4.drawRect(240, 260, 110, 70);
     _this.graphics4.alpha=0;
     _this.graphics4.name = "shape4";
    
     _this.graphics5 = _this.add.graphics(100, 100);       
     _this.graphics5.lineStyle(2, 0x0000FF, 1);
     _this.graphics5.drawRect(400, 280, 80, 60);
     _this.graphics5.alpha=0;
     _this.graphics5.name = "shape5";
    
     _this.graphics6 = _this.add.graphics(100, 100);       
     _this.graphics6.lineStyle(2, 0x0000FF, 1);
     _this.graphics6.drawRect(540, 280, 70, 70);
     _this.graphics6.alpha=0;
     _this.graphics6.name = "shape6";
    
     _this.GraphicsGrp.add(_this.graphics1);
     _this.GraphicsGrp.add(_this.graphics2);
     _this.GraphicsGrp.add(_this.graphics3);
     _this.GraphicsGrp.add(_this.graphics4);
     _this.GraphicsGrp.add(_this.graphics5);
     _this.GraphicsGrp.add(_this.graphics6);
    
   
     
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
                         //_this.sceneCount++;
                         _this.time.events.add(1000, function(){  
                            //_this.game.input.enabled = true;
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
                         _this.state.start('sg3_1_1Score',true,false);
                  }



		
	},
    
    
   
    
 correctAns:function(target)
	{
       
       //_this.game.input.enabled = false;

       /*for(var i=0;i<_this.shapeGrp.length;i++)
       {
            _this.shapesGrp.getAt(i).inputEnabled = false;
       }*/
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

        _this.stopvoice();
      
       //_this.noofAttempts++;
          
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
        //_this.noofAttempts++;
        // _this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "level3.1.1_", 
                    access_token: window.acctkn 
               } 
               

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
       
         _this.wrongAnswer = true;
         _this.timer1.stop();	
         _this.wrong = false;
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
        
        
        _this.time.events.add(1000, function(){
        _this.shapesGrp.destroy();
         _this.wrongshapesGrp.destroy();   
        _this.GraphicsGrp.destroy();
        _this.objectGrp.destroy();
        _this.rightmark.destroy();
        _this.getQuestion();
            
        },_this);
    
      
	},
    
    
     wrongAns1:function(target)
	{
       
        _this.stopvoice();
        //_this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
       _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "level3.1.1_", 
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
            case 1: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1dE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1dH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1dK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1d.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1d.mp3");
                    }
                    break;
            case 2: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1cE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1cH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1cK.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1c.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1c.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1c.mp3");
                    }
                    break;
            case 3: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1bE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1bH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1bK.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1b.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1b.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1b.mp3");
                    }
                    break;
            case 4: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1aE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1aH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1aK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1a.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1a.mp3");
                    }
                    break;
            case 5: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1eE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1eH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1eK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1e.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1e.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1e.mp3");
                    }
                    break;
            case 6: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1fE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1fH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1fK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1f.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1f.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1f.mp3");
                    }
                    break;
            case 7: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1gE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1gH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1gK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1g.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1g.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1g.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1g.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1g.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1g.mp3");
                    }
                    break;
            case 8: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1hE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1hH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1hK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1h.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1h.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1h.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1h.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1h.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1h.mp3");
                    }
                    break;
            case 9: if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1iE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1iH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1iK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1i.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1i.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1i.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1i.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1i.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1i.mp3");
                    }
                    break;
            case 10:if(window.languageSelected=="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/English/sg3.1.1jE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Hindi/sg3.1.1jH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Kannada/sg3.1.1jK.mp3");
                    }
                   else if(window.languageSelected =="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Gujrati/sg3.1.1j.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Marathi/sg3.1.1j.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Telugu/sg3.1.1j.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Tamil/sg3.1.1j.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Urdu/sg3.1.1j.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg3.1.1/Odiya/sg3.1.1j.mp3");
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
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       