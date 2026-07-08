Game.sg5_1_2level1=function(){};

Game.sg5_1_2level1.prototype={
    init:function(game)
    {
       _this = this;
       
       telInitializer.gameIdInit("SG5_1_2",gradeSelected);
        
    },

    preload:function(game){
        if(!window.grade2SG1){

            window.grade2SG1 = true;

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

        this.load.atlas('sg5_1_2bluecircle',window.baseUrl+'assets/gradeAssets/sg5.1.2/Circle/bluecircle.png',window.baseUrl+'json/gradeJson/sg5.1.2/Circle/bluecircle.json');
        this.load.atlas('sg5_1_2orangecircle',window.baseUrl+'assets/gradeAssets/sg5.1.2/Circle/orangecircle.png',window.baseUrl+'json/gradeJson/sg5.1.2/Circle/orangecircle.json');
        this.load.atlas('sg5_1_2pinkcircle',window.baseUrl+'assets/gradeAssets/sg5.1.2/Circle/pinkcircle.png',window.baseUrl+'json/gradeJson/sg5.1.2/Circle/pinkcircle.json');
        this.load.atlas('sg5_1_2purplecircle',window.baseUrl+'assets/gradeAssets/sg5.1.2/Circle/purplecircle.png',window.baseUrl+'json/gradeJson/sg5.1.2/Circle/purplecircle.json'); 
        this.load.atlas('sg5_1_2redcircle',window.baseUrl+'assets/gradeAssets/sg5.1.2/Circle/redcircle.png',window.baseUrl+'json/gradeJson/sg5.1.2/Circle/redcircle.json');
        
        this.load.atlas('sg5_1_2blueOval',window.baseUrl+'assets/gradeAssets/sg5.1.2/oval/blueOval.png',window.baseUrl+'json/gradeJson/sg5.1.2/oval/blueOval.json');
        this.load.atlas('sg5_1_2greenOval',window.baseUrl+'assets/gradeAssets/sg5.1.2/oval/greenOval.png',window.baseUrl+'json/gradeJson/sg5.1.2/oval/greenOval.json');
        this.load.atlas('sg5_1_2lightgreenOval',window.baseUrl+'assets/gradeAssets/sg5.1.2/oval/lightgreenOval.png',window.baseUrl+'json/gradeJson/sg5.1.2/oval/lightgreenOval.json');
        this.load.atlas('sg5_1_2pinkOval',window.baseUrl+'assets/gradeAssets/sg5.1.2/oval/pinkOval.png',window.baseUrl+'json/gradeJson/sg5.1.2/oval/pinkOval.json');
        this.load.atlas('sg5_1_2skyblueOval',window.baseUrl+'assets/gradeAssets/sg5.1.2/oval/skyblueOval.png',window.baseUrl+'json/gradeJson/sg5.1.2/oval/skyblueOval.json');
        
        this.load.atlas('sg5_1_2blueRectangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/rectangle/blueRectangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/rectangle/blueRectangle.json');
        this.load.atlas('sg5_1_2orangeRectangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/rectangle/orangeRectangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/rectangle/orangeRectangle.json');
        this.load.atlas('sg5_1_2pinkRectangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/rectangle/pinkRectangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/rectangle/pinkRectangle.json');
        this.load.atlas('sg5_1_2purpleRectangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/rectangle/purpleRectangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/rectangle/purpleRectangle.json');
        this.load.atlas('sg5_1_2skyblueRectangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/rectangle/skyblueRectangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/rectangle/skyblueRectangle.json');
        
        this.load.atlas('sg5_1_2greenSquare',window.baseUrl+'assets/gradeAssets/sg5.1.2/square/greenSquare.png',window.baseUrl+'json/gradeJson/sg5.1.2/square/greenSquare.json');
        this.load.atlas('sg5_1_2lightgreenSquare',window.baseUrl+'assets/gradeAssets/sg5.1.2/square/lightgreenSquare.png',window.baseUrl+'json/gradeJson/sg5.1.2/square/lightgreenSquare.json');
        this.load.atlas('sg5_1_2orangeSquare',window.baseUrl+'assets/gradeAssets/sg5.1.2/square/orangeSquare.png',window.baseUrl+'json/gradeJson/sg5.1.2/square/orangeSquare.json');
        this.load.atlas('sg5_1_2pinkSquare',window.baseUrl+'assets/gradeAssets/sg5.1.2/square/pinkSquare.png',window.baseUrl+'json/gradeJson/sg5.1.2/square/pinkSquare.json');
        this.load.atlas('sg5_1_2purpleSquare',window.baseUrl+'assets/gradeAssets/sg5.1.2/square/purpleSquare.png',window.baseUrl+'json/gradeJson/sg5.1.2/square/purpleSquare.json');
        
        this.load.atlas('sg5_1_2blueTriangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/triangle/blueTriangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/triangle/blueTriangle.json');
        this.load.atlas('sg5_1_2greenTriangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/triangle/greenTriangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/triangle/greenTriangle.json');
        this.load.atlas('sg5_1_2pinkTriangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/triangle/pinkTriangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/triangle/pinkTriangle.json');
        this.load.atlas('sg5_1_2skyblueTriangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/triangle/skyblueTriangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/triangle/skyblueTriangle.json');
        this.load.atlas('sg5_1_2yellowTriangle',window.baseUrl+'assets/gradeAssets/sg5.1.2/triangle/yellowTriangle.png',window.baseUrl+'json/gradeJson/sg5.1.2/triangle/yellowTriangle.json');


    }

    },

create:function(game)
    {
        _this.amplify = null;
	
         _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount = 0;
        
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
        //_this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.correct=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
//        
       this.qArrays = [1,2,3,4,5,6,7,8,9];
       _this.qArrays = _this.shuffle(_this.qArrays);
        
       // console.log(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'commonBg2');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="sg5_1_2navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopvoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(595,7,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.timebg=this.add.sprite(305,9,'Level42C_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            _this.timeDisplay = this.add.text(332,25,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
        _this.getQuestion();     
          
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


         if(!_this.timer)
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

        }

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
        _this.timer1.start();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        
    	console.log("get"+_this.no11);
        //_this.speaker.inputEnabled=true;
        //_this.speaker.input.useHandCursor = true;
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
           // case 10: _this.gotoTenthQuestion();
    				//break; 
           // case 11: _this.gotoEleventhQuestion();
    			//	break; 
          //  case 12: _this.gotoTwevelvethQuestion();
    				//break; 
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


    
    
 gotoFirstQuestion:function(){
       
     _this.questioNo = 1;
   
     _this.getVoice();
     
     _this.shapeGrp=_this.add.group();
    
     _this.image1 = _this.add.sprite(160,180,'sg5_1_2orangeSquare');
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.3,1.3); 
     _this.image1.name="rightAns";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);  
     
    _this.image2 = _this.add.sprite(430,180,'sg5_1_2blueOval');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 = _this.add.sprite(650,180,'sg5_1_2greenSquare');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(30,320,'sg5_1_2skyblueRectangle');
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(430,390,'sg5_1_2greenTriangle');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
        
    _this.image6 =_this.add.sprite(650,390,'sg5_1_2pinkOval');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6)
     
     _this.shapeGrp.rightCount = 4;
     //_this.shapeGrp1.rightCount = 1;
     
    
    _this.rightmark =_this.add.sprite(870,270,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
    
     if(_this.wrongAnswer == false)
     {
    _this.image1.visible = false;
    _this.image2.visible = false;
    _this.image3.visible = false;
    _this.image4.visible = false;
    _this.image5.visible = false;
    _this.image6.visible = false;
     }
     
if(_this.wrongAnswer == false)
{
    
    _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
    
    
          _this.shapeGrp.y = -600;
          // console.log("11111 "+_this.shapeGrp.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
   
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
            //var temp1 = 0;
            _this.wrongshapeGrp = this.add.group();
            console.log(_this.shapeGrp.length);
           
            for(var i=0;i<_this.shapeGrp.length;i++)
                {
                     
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
                
            
            console.log(temps);
            
            for(var j=0;j<temps.length;j++)
            {
               _this.wrongshapeGrp.add(temps[j]); 
            }
             
            
            console.log(correct,temp,temp==_this.shapeGrp.rightCount);
            
            if(correct && temp==_this.shapeGrp.rightCount)
             {
                 if(_this.questioNo == 1)
                     {
                         _this.anim1=_this.image1.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image3.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image4.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image5.animations.add('move');
                         _this.anim4.play(3,true);
                         _this.correctAns();
                     }
            
            
                 if(_this.questioNo == 2)
                     {
                         _this.anim1=_this.image3.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image4.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image5.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 3)
                     {
                         _this.anim1=_this.image3.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image5.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 4)
                     {
                         _this.anim1=_this.image1.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image3.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image4.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.anim4=_this.image5.animations.add('move');
                         _this.anim4.play(3,true);
                         _this.correctAns();
                     }
                  if(_this.questioNo == 5)
                     {
                         _this.anim1=_this.image2.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image4.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image5.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                 if(_this.questioNo == 6)
                     {
                         _this.anim1=_this.image1.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image4.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image6.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                if(_this.questioNo == 7)
                     {
                         _this.anim1=_this.image1.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image3.animations.add('move');
                         _this.anim2.play(3,true);
                         _this.anim3=_this.image5.animations.add('move');
                         _this.anim3.play(3,true);
                         _this.correctAns();
                     }
                if(_this.questioNo == 8)
                     {
                         _this.anim1=_this.image1.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.correctAns();
                     }
                if(_this.questioNo == 9)
                     {
                         _this.anim1=_this.image2.animations.add('move');
                         _this.anim1.play(3,true);
                         _this.anim2=_this.image4.animations.add('move');
                         _this.anim2.play(3,true);
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
    
  
     
gotoSecondQuestion:function(){
       
     _this.questioNo = 2;
     
     _this.getVoice();
    
     _this.shapeGrp=_this.add.group();
    
     _this.image1 =_this.add.sprite(130,210,'sg5_1_2purpleRectangle'); 
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.3,1.3); 
     _this.image1.name="img1"; 
     _this.image1.inputEnabled = true
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
  
    _this.image2 =_this.add.sprite(390,200,'sg5_1_2bluecircle');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(2.5,2.5); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
  
    _this.image3 =_this.add.sprite(640,195,'sg5_1_2pinkSquare');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(127,410,'sg5_1_2lightgreenSquare');
    _this.image4.anchor.setTo(0.5);
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(390,400,'sg5_1_2purpleSquare');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
        
    _this.image6 =_this.add.sprite(690,400,'sg5_1_2blueTriangle');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
    _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 3;
     //_this.shapeGrp1.rightCount = 2;
    
    _this.rightmark =_this.add.sprite(870,280,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
     
    if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
          _this.shapeGrp.y = -600;
           //console.log("11111 "+_this.shapeGrp.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
     }
    
     
     },
    
gotoThirdQuestion:function(){
       
     _this.questioNo = 3;
    
     _this.getVoice();
    
     _this.image1 =_this.add.sprite(140,190,'sg5_1_2yellowTriangle');
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(430,200,'sg5_1_2orangecircle');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(1.1,1.1); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(710,185,'sg5_1_2blueRectangle');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.4,1.4);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(130,410,'sg5_1_2pinkTriangle');
    _this.image4.anchor.setTo(0.5);
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(440,410,'sg5_1_2orangeRectangle');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(710,390,'sg5_1_2greenOval');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.4,1.4); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
            
     _this.shapeGrp.rightCount = 2;
     //_this.shapeGrp1.rightCount = 2;
   
    _this.rightmark =_this.add.sprite(890,300,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
     
      
     if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
        _this.image6.visible = true;
          _this.shapeGrp.y = -600;
           //console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
    
     }
      
     
     },
    
    
gotoFourthQuestion:function(){
       
     _this.questioNo = 4;
    
     _this.getVoice();
    
     
     _this.image1 =_this.add.sprite(170,190,'sg5_1_2skyblueTriangle');
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="rightAns";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(450,200,'sg5_1_2purpleSquare');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(710,200,'sg5_1_2blueTriangle');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(150,410,'sg5_1_2pinkTriangle');
    _this.image4.anchor.setTo(0.5);
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(450,410,'sg5_1_2greenTriangle');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(700,410,'sg5_1_2redcircle');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 4;
    // _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(880,330,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           _this.shapeGrp.y = -600;
           //console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
    
     }
 },
    
gotoFifthQuestion:function(){
       
     _this.questioNo = 5;
     
     _this.getVoice();
    
     _this.image1 =_this.add.sprite(130,175,'sg5_1_2lightgreenOval');
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(410,175,'sg5_1_2skyblueTriangle');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(690,180,'sg5_1_2lightgreenSquare');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(130,390,'sg5_1_2yellowTriangle');
    _this.image4.anchor.setTo(0.5);
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(410,390,'sg5_1_2blueTriangle');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(690,410,'sg5_1_2blueRectangle');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 3;
    // _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(880,290,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           _this.shapeGrp.y = -600;
           //console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
    
     }
     
    },
    
gotoSixthQuestion:function(){
       
     _this.questioNo = 6;
     
     _this.getVoice();
    
     _this.image1 =_this.add.sprite(130,180,'sg5_1_2greenSquare');
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="rightAns";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(380,180,'sg5_1_2pinkTriangle');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(680,195,'sg5_1_2skyblueOval');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(130,390,'sg5_1_2pinkRectangle');
    _this.image4.anchor.setTo(0.5);
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(390,400,'sg5_1_2purplecircle');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(680,400,'sg5_1_2purpleSquare');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="rightAns";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 3;
    // _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(880,290,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           _this.shapeGrp.y = -600;
           //console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
    
     }
    
 },
    
     
gotoSeventhQuestion:function(){
      
      _this.questioNo = 7;
   
     _this.getVoice();
    
     _this.image1 =_this.add.sprite(130,170,'sg5_1_2bluecircle');
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="rightAns";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(420,185,'sg5_1_2orangeSquare');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(700,200,'sg5_1_2pinkOval');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="rightAns";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(130,385,'sg5_1_2purpleRectangle');
    _this.image4.anchor.setTo(0.5);
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(420,390,'sg5_1_2orangecircle');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="rightAns";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(700,400,'sg5_1_2greenTriangle');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 3;
    // _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(880,330,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           _this.shapeGrp.y = -600;
           //console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
    
     }
     
  },
    
    
    
gotoEighthQuestion:function(){
    
    _this.questioNo = 8;
     
     _this.getVoice();
    
     _this.image1 =_this.add.sprite(140,210,'sg5_1_2pinkOval');
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="rightAns";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(400,200,'sg5_1_2purpleSquare');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="img2";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(690,195,'sg5_1_2skyblueTriangle');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(135,420,'sg5_1_2orangeRectangle');
    _this.image4.anchor.setTo(0.5);
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="img4";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(400,410,'sg5_1_2yellowTriangle');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(680,410,'sg5_1_2orangeSquare');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 1;
    // _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(890,330,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           _this.shapeGrp.y = -600;
           //console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
    
     }  
},

    
gotoNinthQuestion:function(){
    
    _this.questioNo = 9;
    
     _this.getVoice();
    
     _this.image1 =_this.add.sprite(150,200,'sg5_1_2skyblueOval');
     _this.image1.anchor.setTo(0.5);
     //_this.image1.scale.setTo(1.2,1.2); 
     _this.image1.name="img1";
     _this.image1.inputEnabled = true;
     _this.image1.input.useHandCursor = true;
     _this.image1.events.onInputDown.add(_this.clicked,_this);
     
    _this.image2 =_this.add.sprite(450,185,'sg5_1_2skyblueTriangle');
    _this.image2.anchor.setTo(0.5);
    //_this.image2.scale.setTo(1.4,1.4); 
    _this.image2.name="rightAns";
    _this.image2.inputEnabled = true;
    _this.image2.input.useHandCursor = true;
    _this.image2.events.onInputDown.add(_this.clicked,_this);
     
    _this.image3 =_this.add.sprite(720,210,'sg5_1_2greenOval');
    _this.image3.anchor.setTo(0.5);
    //_this.image3.scale.setTo(1.2,1.2);
    _this.image3.name="img3";
    _this.image3.inputEnabled = true;
    _this.image3.input.useHandCursor = true;
    _this.image3.events.onInputDown.add(_this.clicked,_this);
     
    _this.image4 =_this.add.sprite(150,410,'sg5_1_2blueRectangle');
    _this.image4.anchor.setTo(0.5);
    //_this.image4.scale.setTo(1.2,1.2);
    _this.image4.name="rightAns";
    _this.image4.inputEnabled = true;
    _this.image4.input.useHandCursor = true;
    _this.image4.events.onInputDown.add(_this.clicked,_this);
     
    _this.image5 =_this.add.sprite(450,390,'sg5_1_2orangecircle');
    _this.image5.anchor.setTo(0.5);
    //_this.image5.scale.setTo(1.2,1.2);
    _this.image5.name="img5";
    _this.image5.inputEnabled = true;
    _this.image5.input.useHandCursor = true;
    _this.image5.events.onInputDown.add(_this.clicked,_this);
    
    _this.image6 =_this.add.sprite(720,410,'sg5_1_2redcircle');
    _this.image6.anchor.setTo(0.5);
    //_this.image6.scale.setTo(1.1,1.1); 
    _this.image6.name="img6";
    _this.image6.inputEnabled = true;
    _this.image6.input.useHandCursor = true;
    _this.image6.events.onInputDown.add(_this.clicked,_this);
     
    _this.shapeGrp=_this.add.group();
     _this.shapeGrp.add(_this.image1);
     _this.shapeGrp.add(_this.image2);
     _this.shapeGrp.add(_this.image3);
     _this.shapeGrp.add(_this.image4);
     _this.shapeGrp.add(_this.image5);
     _this.shapeGrp.add(_this.image6);
     
     _this.shapeGrp.rightCount = 2;
    // _this.shapeGrp1.rightCount = 2;
     
    _this.rightmark =_this.add.sprite(880,330,'SG3_1_1rightmark');
    _this.rightmark.anchor.setTo(0.5);
    //_this.rightmark.scale.setTo(1.2,1.2);
    _this.rightmark.inputEnabled = true;
    _this.rightmark.input.useHandCursor = true;
      
   if(_this.wrongAnswer == false)
     {
      _this.image1.visible = false;
      _this.image2.visible = false;
      _this.image3.visible = false;
      _this.image4.visible = false;
      _this.image5.visible = false;
      _this.image6.visible = false;
     }
     
     if(_this.wrongAnswer == false)
     {
    
        _this.image1.visible = true;
        _this.image2.visible = true;
        _this.image3.visible = true;
        _this.image4.visible = true;
        _this.image5.visible = true;
         _this.image6.visible = true;
           _this.shapeGrp.y = -600;
           //console.log("11111 "+_this.shapeGrp1.height);
        _this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height+70 - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-80 - _this.shapeGrp.height }, 1000, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },1500, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
     
    
     }  
},

         
         
    removeCelebration:function()
	{

        console.log("removeCeleb");
		_this.celebration = false;
		console.log("no"+_this.no11);
        _this.correct=0;
        _this.count=0;
       
        _this.no11++;
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
		   
		  if(_this.no11<6)
                    {
                          if(_this.shapeGrp)
                        {
                          _this.shapeGrp.destroy();
                         }
                          if(_this.rightmark)
                             {
                                 _this.rightmark.destroy();
                             }
                        
                        if(_this.wrongshapeGrp)
                            {
                                _this.wrongshapeGrp.destroy();
                            }
                        
                         
                         _this.time.events.add(1000, function(){  
                           // _this.game.input.enabled = true;
                         _this.getQuestion();
                         },_this);
                    
                    }
        
                else
                    {
                         //_this.game.input.enabled = true;
                         _this.stopvoice();
                         //_this.timer1=null;
                         _this.state.start('sg5_1_2Score',true,false);
                  }



		
	},
    
    
     
    
 correctAns:function(target)
	{
       //_this.game.input.enabled = false;

       if(_this.shapeGrp)
       {
        _this.shapeGrp.setAll("inputEnabled",false);
       }
       if(_this.shapeGrp1)
       {
        _this.shapeGrp1.setAll("inputEnabled",false);
       }
       
        _this.stopvoice();
       // _this.rightmark.frame=1:
      //  target.events.onInputDown.removeAll(); 
      
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: target,
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
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
        //_this.currentTime = window.timeSaveFunc();
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
                  // _this.sceneCount++; 
         telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
              // absdsjsapi.saveAssessment(_this.saveAsment);

        _this.wrongAnswer = false;
     
        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();   
		 console.log("correct11");
       // _this.speaker.inputEnabled=false;
        _this.count1++;
       
		_this.celebration = true;
        
        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();
        
		
        _this.time.events.add(2000, _this.removeCelebration, _this);


		//console.log(target);
        
	},

 
     wrongAns1:function(target)
	{
       
        _this.stopvoice();
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
       _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: "level1_", 
                    access_token: window.acctkn 
               } 
               
           /* if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }*/

               if(_this.timer1)
                       {
                            _this.timer1.stop();
                           _this.timer1 = null;
                       }
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        // this.timer= this.time.create(false);
         _this.wrongAnswer = true;

       
		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
        
        _this.time.events.add(1000, function(){
        _this.shapeGrp.destroy();
        //_this.shapeGrp1.destroy();
        _this.wrongshapeGrp.destroy();
        _this.rightmark.destroy();
        _this.getQuestion();
            
        },_this);
    
        	
       // target.events.onInputDown.removeAll();
	},
    
    
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1:            
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2aE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2aH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2aK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2aG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2a.mp3");
                    }
                    break;
            case 2:
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2cE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2cH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2cK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2cG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2c.mp3");
                    }
                    break;
            case 3:
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2dE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2dH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2dK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2dG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2d.mp3");
                    }
                    break;
            case 4:
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2eE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2eH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2eK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2eG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2e.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2e.mp3");
                    }
                    break;
            case 5:
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2fE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2fH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2fK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2fG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2f.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2f.mp3");
                    }
                    break;
            case 6:
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2gE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2gH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2gK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2gG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2g.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2g.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2g.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2g.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2g.mp3");
                    }
                    break;
            case 7:
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2hE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2hH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2hK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2hG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2h.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2h.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2h.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2h.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2h.mp3");
                    }
                    break;
            case 8:
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2iE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2iH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2iK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2iG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2i.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2i.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2i.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2i.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2i.mp3");
                    }
                    break;
            case 9: 
                   if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/English/sg5.1.2jE.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Hindi/sg5.1.2jH.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Kannada/sg5.1.2jK.mp3");
                    }
                    else if(window.languageSelected =="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Gujarati/sg5.1.2jG.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Marathi/sg5.1.2j.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Telugu/sg5.1.2j.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Tamil/sg5.1.2j.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Urdu/sg5.1.2j.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg5.1.2/Odiya/sg5.1.2j.mp3");
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
       // _this.game.input.enabled = true;
        _this.stopvoice();
    }   
   

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       