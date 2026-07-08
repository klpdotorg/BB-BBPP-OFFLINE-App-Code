Game.sg7_1_2level1=function(){};
Game.sg7_1_2level1.prototype={
init:function(game)
    {
        _this = this;
        
        
       // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        
       telInitializer.gameIdInit("SG7_1_2",gradeSelected);

    },

    preload:function(game){
        if(!window.grade2SG2){

            window.grade2SG2 = true;

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
    

            this.load.atlas('sg7_1_2circle',window.baseUrl+'assets/gradeAssets/sg7.1.2/circle.png',window.baseUrl+'json/gradeJson/sg7.1.2/circle.json');
        
        this.load.atlas('sg7_1_2cone1',window.baseUrl+'assets/gradeAssets/sg7.1.2/cone1.png',window.baseUrl+'json/gradeJson/sg7.1.2/cone1.json');
        this.load.atlas('sg7_1_2cone2',window.baseUrl+'assets/gradeAssets/sg7.1.2/cone2.png',window.baseUrl+'json/gradeJson/sg7.1.2/cone2.json');
        this.load.atlas('sg7_1_2cone3',window.baseUrl+'assets/gradeAssets/sg7.1.2/cone3.png',window.baseUrl+'json/gradeJson/sg7.1.2/cone3.json');
        this.load.atlas('sg7_1_2cone4',window.baseUrl+'assets/gradeAssets/sg7.1.2/cone4.png',window.baseUrl+'json/gradeJson/sg7.1.2/cone4.json');
        this.load.atlas('sg7_1_2cone5',window.baseUrl+'assets/gradeAssets/sg7.1.2/cone5.png',window.baseUrl+'json/gradeJson/sg7.1.2/cone5.json');
        this.load.atlas('sg7_1_2cone6',window.baseUrl+'assets/gradeAssets/sg7.1.2/cone6.png',window.baseUrl+'json/gradeJson/sg7.1.2/cone6.json');
        
        
        this.load.atlas('sg7_1_2cylinder1',window.baseUrl+'assets/gradeAssets/sg7.1.2/cylinder1.png',window.baseUrl+'json/gradeJson/sg7.1.2/cylinder1.json');
        this.load.atlas('sg7_1_2cylinder2',window.baseUrl+'assets/gradeAssets/sg7.1.2/cylinder2.png',window.baseUrl+'json/gradeJson/sg7.1.2/cylinder2.json');
        this.load.atlas('sg7_1_2cylinder3',window.baseUrl+'assets/gradeAssets/sg7.1.2/cylinder3.png',window.baseUrl+'json/gradeJson/sg7.1.2/cylinder3.json');
        this.load.atlas('sg7_1_2cylinder4',window.baseUrl+'assets/gradeAssets/sg7.1.2/cylinder4.png',window.baseUrl+'json/gradeJson/sg7.1.2/cylinder4.json');
        this.load.atlas('sg7_1_2cylinder5',window.baseUrl+'assets/gradeAssets/sg7.1.2/cylinder5.png',window.baseUrl+'json/gradeJson/sg7.1.2/cylinder5.json');
        this.load.atlas('sg7_1_2cylinder6',window.baseUrl+'assets/gradeAssets/sg7.1.2/cylinder6.png',window.baseUrl+'json/gradeJson/sg7.1.2/cylinder6.json');
        
        this.load.atlas('sg7_1_2rectangle1',window.baseUrl+'assets/gradeAssets/sg7.1.2/rectangle1.png',window.baseUrl+'json/gradeJson/sg7.1.2/rectangle1.json');
        this.load.atlas('sg7_1_2rectangle2',window.baseUrl+'assets/gradeAssets/sg7.1.2/rectangle2.png',window.baseUrl+'json/gradeJson/sg7.1.2/rectangle2.json');
        this.load.atlas('sg7_1_2rectangle3',window.baseUrl+'assets/gradeAssets/sg7.1.2/rectangle3.png',window.baseUrl+'json/gradeJson/sg7.1.2/rectangle3.json');
        this.load.atlas('sg7_1_2rectangle4',window.baseUrl+'assets/gradeAssets/sg7.1.2/rectangle4.png',window.baseUrl+'json/gradeJson/sg7.1.2/rectangle4.json');
        this.load.atlas('sg7_1_2rectangle5',window.baseUrl+'assets/gradeAssets/sg7.1.2/rectangle5.png',window.baseUrl+'json/gradeJson/sg7.1.2/rectangle5.json');
        this.load.atlas('sg7_1_2rectangle66',window.baseUrl+'assets/gradeAssets/sg7.1.2/rectangle6.png',window.baseUrl+'json/gradeJson/sg7.1.2/rectangle6.json');
        
        this.load.atlas('sg7_1_2square1',window.baseUrl+'assets/gradeAssets/sg7.1.2/square1.png',window.baseUrl+'json/gradeJson/sg7.1.2/square1.json');
        this.load.atlas('sg7_1_2square2',window.baseUrl+'assets/gradeAssets/sg7.1.2/square2.png',window.baseUrl+'json/gradeJson/sg7.1.2/square2.json');
        this.load.atlas('sg7_1_2square3',window.baseUrl+'assets/gradeAssets/sg7.1.2/square3.png',window.baseUrl+'json/gradeJson/sg7.1.2/square3.json');
        this.load.atlas('sg7_1_2square4',window.baseUrl+'assets/gradeAssets/sg7.1.2/square4.png',window.baseUrl+'json/gradeJson/sg7.1.2/square4.json');
        this.load.atlas('sg7_1_2square5',window.baseUrl+'assets/gradeAssets/sg7.1.2/square5.png',window.baseUrl+'json/gradeJson/sg7.1.2/square5.json');
        this.load.atlas('sg7_1_2square6',window.baseUrl+'assets/gradeAssets/sg7.1.2/square6.png',window.baseUrl+'json/gradeJson/sg7.1.2/square6.json');
        
        this.load.image('rectangle1Old',window.baseUrl+'assets/gradeAssets/sg7.1.2/rectangle1Old.png');
        
        this.load.atlas('sg7_1_2redDot',window.baseUrl+'assets/gradeAssets/sg7.1.2/redDot.png',window.baseUrl+'json/gradeJson/sg7.1.2/redDot.json');


    }

    },
    
	create:function(game){
       _this.amplify = null;
       _this.done1 = 0;
       _this.done2 = 0;
       _this.done3 = 0;
       _this.done4 = 0;
       _this.a = null;
       _this.b = null;
       _this.c = null;
       _this.d = null;
       _this.vertex = 0;
       _this.qid=0;
       _this.noofAttempts=0;
       _this.sceneCount=0;
       _this.seconds = 0;
       _this.minutes = 0;
       _this.counterForTimer = 0;
       _this.wrong = true;
       _this.no1=0;
       _this.count=0;
       _this.count1=0;
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();
        _this.qArrays3 = new Array();
        _this.qArrays4 = new Array();
        _this.button3Clicked = 0;
        _this.button4Clicked = 0;
        _this.button5Clicked = 0;
        _this.button6Clicked = 0;
        _this.button7Clicked = 0;
        _this.button8Clicked = 0;
        _this.button9Clicked = 0;
        _this.button10Clicked = 0;
        _this.tempTarget = '';
        //_this.rightImage = '';
        
        _this.dot1X = 0;
        _this.dot2X = 0;
        _this.dot3X = 0;
        _this.dot4X = 0;
        _this.dot5X = 0;
        _this.dot6X = 0;
        _this.dot7X = 0;
        _this.dot1Y = 0;
        _this.dot2Y = 0;
        _this.dot3Y = 0;
        _this.dot4Y = 0;
        _this.dot5Y = 0;
        _this.dot6Y = 0;
        _this.dot7Y = 0;
                
        _this.AddToBlue == false
               
        //_this.canAdd = false;
       
       //_this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
       _this.qArrays = [1,2,3,4,5];
       _this.qArrays1 = [6,7,8,9,10];
       _this.qArrays2 = [11,12];
       _this.qArrays3 = [13,14];
       _this.qArrays4 = [15,16,17];
       _this.qArrays = _this.shuffle(_this.qArrays);
       _this.qArrays1 = _this.shuffle(_this.qArrays1);
       _this.qArrays2 = _this.shuffle(_this.qArrays2);
       _this.qArrays3 = _this.shuffle(_this.qArrays3);
       _this.qArrays4 = _this.shuffle(_this.qArrays4);
   		 _this.shake = new Phaser.Plugin.Shake(game);
	      game.plugins.add(_this.shake);
       _this.physics.startSystem(Phaser.Physics.ARCADE);
       _this.physics.setBoundsToWorld();

       _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'commonBg2');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="sg7_1_2navBar";
        _this.TopBar.scale.setTo(1,1.1);
        
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
        _this.backbtn.inputEnabled = true;


        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 

        },_this);

         _this.speakerbtn = this.add.button(600,6,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        
        _this.timebg=this.add.sprite(305,6,'Level42C_timer');
        _this.timebg.name="common_timebg";
        //_this.timebg.scale.setTo(1.2,1);


            _this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
             _this.timeDisplay.fontWeight = 'normal';
            _this.timeDisplay.fill = '#ADFF2F';

        _this.generateStarsForTheScene(6);
        _this.getQuestion();  
    },
    updateTimer:function() {
     _this.counterForTimer++;
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

    getQuestion:function(target)
    {  
      _this.AnsTimerCount = 0;
        _this.timer = _this.time.create(false);

          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        

        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
       
        _this.temp = 0;
        
        
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!! "+_this.no1,_this.temp);
        if(_this.no1<2)
        {
           _this.temp =  _this.qArrays[_this.no1];    
        }
        else if(_this.no1==2)
        {
            _this.temp =  _this.qArrays1[_this.no1];
        }
        else if(_this.no1 == 3)
        {
            console.log("IN");
            _this.temp = _this.qArrays2[0];
        }
        else if(_this.no1 == 4)
        {
            _this.temp = _this.qArrays3[0];
        } 
        else if(_this.no1 == 5)
        {
            _this.temp = _this.qArrays4[0];
        }
       
        _this.obj1Array = [];
        _this.obj2Array = [];
        _this.obj3Array = [];
        _this.obj4Array = [];
        _this.rightOrderArray = [];
        _this.glowOrderArray = [];
        _this.UserInputArray = [];
        _this.wrongArray = [];
        _this.objRightArray = [];
  console.log(_this.temp);
      //  _this.temp = 17;

      _this.questionid = 1;
  switch(_this.temp) 
    // switch(1)    
          {
            case 1: _this.object=this.add.sprite(240,200,'sg7_1_2rectangle1');
                    _this.dot1X = 235;_this.dot1Y = 210;
                    _this.dot2X = 340;_this.dot2Y = 180;
                    _this.dot3X = 615;_this.dot3Y = 190;
                    _this.dot4X = 540;_this.dot4Y = 220;
                    _this.dot5X = 240;_this.dot5Y = 360;
                    _this.dot6X = 540;_this.dot6Y = 370;
                    _this.dot7X = 620;_this.dot7Y = 320;
                  _this.tweenValue1 = 200;_this.tweenValue2 = 130;_this.tweenValue3 = 190;
                   _this.gotoFirstQAuestion();
                    break;
           case 2: _this.object=this.add.sprite(290,200,'sg7_1_2rectangle3');
                    _this.dot1X = 320;_this.dot1Y = 140;
                    _this.dot2X = 340;_this.dot2Y = 240;
                    _this.dot3X = 520;_this.dot3Y = 125;
                    _this.dot4X = 550;_this.dot4Y = 220;
                    _this.dot5X = 300;_this.dot5Y = 390;
                    _this.dot6X = 500;_this.dot6Y = 370;
                    _this.dot7X = 280;_this.dot7Y = 300;
                  _this.tweenValue1 = 150;_this.tweenValue2 = 125;_this.tweenValue3 = 140;
                   _this.gotoFirstQAuestion();
                    break;
            case 3: _this.object=this.add.sprite(240,200,'sg7_1_2rectangle66');
                    _this.dot1X = 230;_this.dot1Y = 180;
                    _this.dot2X = 350;_this.dot2Y = 210;
                    _this.dot3X = 450;_this.dot3Y = 170;
                    _this.dot4X = 610;_this.dot4Y = 190;
                    _this.dot5X = 350;_this.dot5Y = 360;
                    _this.dot6X = 610;_this.dot6Y = 330;
                    _this.dot7X = 230;_this.dot7Y = 310;
                  _this.tweenValue1 = 190;_this.tweenValue2 = 130;_this.tweenValue3 = 180;
                   _this.gotoFirstQAuestion();
                    break;
            case 4: _this.object=this.add.sprite(290,150,'sg7_1_2rectangle5');
                    _this.dot1X = 280;_this.dot1Y = 180;
                    _this.dot2X = 300;_this.dot2Y = 130;
                    _this.dot3X = 490;_this.dot3Y = 120;
                    _this.dot4X = 520;_this.dot4Y = 390;
                    _this.dot5X = 340;_this.dot5Y = 340;
                    _this.dot6X = 540;_this.dot6Y = 330;
                    _this.dot7X = 325;_this.dot7Y = 398;
                  _this.tweenValue1 = 140;_this.tweenValue2 = 120;_this.tweenValue3 = 130;
                   _this.gotoFirstQAuestion();
                    break;
            case 5: _this.object=this.add.sprite(290,200,'sg7_1_2rectangle2');
                    _this.dot1X = 285;_this.dot1Y = 180;
                    _this.dot2X = 350;_this.dot2Y = 220;
                    _this.dot3X = 520;_this.dot3Y = 160;
                    _this.dot4X = 600;_this.dot4Y = 205;
                    _this.dot5X = 280;_this.dot5Y = 300;
                    _this.dot6X = 610;_this.dot6Y = 350;
                    _this.dot7X = 345;_this.dot7Y = 360;
                  _this.tweenValue1 = 180;_this.tweenValue2 = 120;_this.tweenValue3 = 170;
                   _this.gotoFirstQAuestion();
                    break; 
            case 6: _this.object=this.add.sprite(340,200,'sg7_1_2square1');
                    _this.dot1X = 390;_this.dot1Y = 160;
                    _this.dot2X = 330;_this.dot2Y = 200;
                    _this.dot3X = 550;_this.dot3Y = 175;
                    _this.dot4X = 500;_this.dot4Y = 205;
                    _this.dot5X = 500;_this.dot5Y = 380;
                    _this.dot6X = 550;_this.dot6Y = 335;
                    _this.dot7X = 330;_this.dot7Y = 360;
                  _this.tweenValue1 = 180;_this.tweenValue2 = 120;_this.tweenValue3 = 170;
                   _this.gotoFirstQAuestion();
                    break;
            case 7: _this.object=this.add.sprite(340,200,'sg7_1_2square2');
                    _this.dot1X = 480;_this.dot1Y = 160;
                    _this.dot2X = 330;_this.dot2Y = 180;
                    _this.dot3X = 570;_this.dot3Y = 190;
                    _this.dot4X = 410;_this.dot4Y = 205;
                    _this.dot5X = 410;_this.dot5Y = 390;
                    _this.dot6X = 570;_this.dot6Y = 370;
                    _this.dot7X = 330;_this.dot7Y = 340;
                  _this.tweenValue1 = 180;_this.tweenValue2 = 120;_this.tweenValue3 = 170;
                   _this.gotoFirstQAuestion();
                    break; 
            case 8: _this.object=this.add.sprite(340,200,'sg7_1_2square3');
                    _this.dot1X = 520;_this.dot1Y = 140;
                    _this.dot2X = 330;_this.dot2Y = 150;
                    _this.dot3X = 580;_this.dot3Y = 160;
                    _this.dot4X = 380;_this.dot4Y = 165;
                    _this.dot5X = 380;_this.dot5Y = 380;
                    _this.dot6X = 580;_this.dot6Y = 370;
                    _this.dot7X = 330;_this.dot7Y = 350;
                  _this.tweenValue1 = 170;_this.tweenValue2 = 120;_this.tweenValue3 = 160;
                   _this.gotoFirstQAuestion();
                    break; 
            case 9: _this.object=this.add.sprite(340,200,'sg7_1_2square4');
                    _this.dot1X = 540;_this.dot1Y = 130;
                    _this.dot2X = 360;_this.dot2Y = 140;
                    _this.dot3X = 575;_this.dot3Y = 270;
                    _this.dot4X = 390;_this.dot4Y = 270;
                    _this.dot5X = 360;_this.dot5Y = 400;
                    _this.dot6X = 540;_this.dot6Y = 390;
                    _this.dot7X = 330;_this.dot7Y = 260;
                  _this.tweenValue1 = 150;_this.tweenValue2 = 125;_this.tweenValue3 = 140;
                   _this.gotoFirstQAuestion();
                    break; 
            case 10: _this.object=this.add.sprite(340,200,'sg7_1_2square6');
                    _this.dot1X = 550;_this.dot1Y = 130;
                    _this.dot2X = 370;_this.dot2Y = 140;
                    _this.dot3X = 580;_this.dot3Y = 270;
                    _this.dot4X = 520;_this.dot4Y = 250;
                    _this.dot5X = 370;_this.dot5Y = 400;
                    _this.dot6X = 550;_this.dot6Y = 390;
                    _this.dot7X = 330;_this.dot7Y = 260;
                  _this.tweenValue1 = 150;_this.tweenValue2 = 125;_this.tweenValue3 = 140;
                   _this.gotoFirstQAuestion();
                    break;
            case 11: _this.gotoEleventhQuestion();
                     break;
            case 12: _this.gotoTwelthQuestion();
                     break;
            case 13: _this.gotoThirteenthQuestion();
                     break;
            case 14: _this.gotoFourteenthQuestion();
                     break;
            case 15: _this.gotoFifteenthQuestion();
                     break;
            case 16: _this.gotoSixteenthQuestion();
                     break;
            case 17: _this.gotoSeventeenthQuestion();
                     break;
         
          }
    },
    
    gotoEleventhQuestion:function()
    {
        _this.getVoice();
        //  _this.Text = _this.add.text(350,50,'Curved Surafaces');
        
        console.log("Elven");
        _this.shapeGrp=_this.add.group();
        _this.shapeGrp1=_this.add.group();
        _this.shapeGrp2=_this.add.group();
        _this.object1=_this.add.sprite(150,90,'sg7_1_2cylinder1');
        _this.object1.name = "cylinder";
        _this.object2=_this.add.sprite(550,100,'sg7_1_2square2');
        _this.object2.name = "square";
        _this.object2.value = 0;
        _this.object2.scale.setTo(0.7);
        _this.object3=_this.add.sprite(60,350,'sg7_1_2rectangle1');
        _this.object3.name = "rectangle";
        _this.object3.value = 0;
        _this.object3.scale.setTo(0.7);
        _this.object4=_this.add.sprite(350,200,'sg7_1_2circle');
        _this.object4.name = "circle";
        _this.object5=_this.add.sprite(600,330,'sg7_1_2cone1');
        _this.object5.name = "cone";
        
        _this.object1.visible = false;
        _this.object2.visible = false;
        _this.object4.visible = false;

         _this.shapeGrp1.add(_this.object3);
         _this.shapeGrp1.add(_this.object5);
        
        _this.shapeGrp2.add(_this.object1);
        _this.shapeGrp2.add(_this.object2);
        _this.shapeGrp2.add(_this.object4);
        
        
         _this.rightMark=this.add.sprite(800,250,'SG3_1_1rightmark');

          // _this.shapeGrp.y = -600;
        /*_this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-50 - _this.shapeGrp.height }, 200, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);*/
        
    _this.shapeGrp1.y = -500;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.object1.visible = true;
        _this.object2.visible = true;
        _this.object4.visible = true;
          _this.shapeGrp2.y = -600;
        _this.tween1 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+200 - _this.shapeGrp2.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+27 - _this.shapeGrp2.height }, 0, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+86 - _this.shapeGrp2.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
       },_this);  
         _this.time.events.add(5000, function(){  
             _this.shapeGrp.add(_this.object1);
             _this.shapeGrp.add(_this.object2);
             _this.shapeGrp.add(_this.object3);
             _this.shapeGrp.add(_this.object4);
             _this.shapeGrp.add(_this.object5);
             for(var k=0;k<_this.shapeGrp.length;k++)
                {
                    _this.shapeGrp.getChildAt(k).inputEnabled = true;
                    _this.shapeGrp.getChildAt(k).events.onInputDown.add(_this.clickOnObjects,_this);
                }
         },_this);
        
        
    },
    gotoTwelthQuestion:function()
    {
        _this.getVoice();
       // _this.Text = _this.add.text(350,50,'Curved Surafaces');
        
        console.log("Elven");
        _this.shapeGrp=_this.add.group();
        _this.shapeGrp2=_this.add.group();
        _this.shapeGrp1=_this.add.group();
        _this.object1=_this.add.sprite(130,90,'sg7_1_2cylinder2');
        _this.object1.name = "cylinder";
        _this.object2=_this.add.sprite(550,100,'sg7_1_2square3');
        _this.object2.name = "square";
        _this.object2.value = 0;
        _this.object2.scale.setTo(0.7);
        _this.object3=_this.add.sprite(500,330,'sg7_1_2rectangle66');
        _this.object3.name = "rectangle";
        _this.object3.value = 0;
        _this.object3.scale.setTo(0.7);
        _this.object4=_this.add.sprite(350,200,'sg7_1_2circle');
        _this.object4.name = "circle";
        _this.object5=_this.add.sprite(100,330,'sg7_1_2cone2');
        _this.object5.name = "cone";
        
         _this.object1.visible = false;
        _this.object2.visible = false;
        _this.object4.visible = false;

         _this.shapeGrp1.add(_this.object3);
         _this.shapeGrp1.add(_this.object5);
        
        _this.shapeGrp2.add(_this.object1);
        _this.shapeGrp2.add(_this.object2);
        _this.shapeGrp2.add(_this.object4);
        
        
         _this.rightMark=this.add.sprite(800,250,'SG3_1_1rightmark');

          // _this.shapeGrp.y = -600;
        /*_this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-50 - _this.shapeGrp.height }, 200, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);*/
        
    _this.shapeGrp1.y = -500;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.object1.visible = true;
        _this.object2.visible = true;
        _this.object4.visible = true;
          _this.shapeGrp2.y = -600;
        _this.tween1 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+200 - _this.shapeGrp2.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+50 - _this.shapeGrp2.height }, 0, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+109 - _this.shapeGrp2.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
       },_this);  
         _this.time.events.add(5000, function(){  
             _this.shapeGrp.add(_this.object1);
             _this.shapeGrp.add(_this.object2);
             _this.shapeGrp.add(_this.object3);
             _this.shapeGrp.add(_this.object4);
             _this.shapeGrp.add(_this.object5);
             for(var k=0;k<_this.shapeGrp.length;k++)
                {
                    _this.shapeGrp.getChildAt(k).inputEnabled = true;
                    _this.shapeGrp.getChildAt(k).events.onInputDown.add(_this.clickOnObjects,_this);
                }
         },_this);
    },  
    gotoThirteenthQuestion:function()
    {
        _this.getVoice();
       // _this.Text = _this.add.text(350,50,'Flat Surafaces');
        
        console.log("Elven");
        _this.shapeGrp=_this.add.group();
        _this.shapeGrp1=_this.add.group();
        _this.shapeGrp2=_this.add.group();
        _this.object1=_this.add.sprite(550,100,'sg7_1_2cylinder3');
        _this.object1.name = "cylinder";
        _this.object2=_this.add.sprite(110,90,'sg7_1_2square2');
        _this.object2.name = "square";
        _this.object2.value = 0;
        _this.object2.scale.setTo(0.7);
        _this.object3=_this.add.sprite(520,330,'sg7_1_2rectangle2');
        _this.object3.name = "rectangle";
        _this.object3.value = 0;
        _this.object3.scale.setTo(0.7);
        _this.object4=_this.add.sprite(350,200,'sg7_1_2circle');
        _this.object4.name = "circle";
        _this.object5=_this.add.sprite(100,330,'sg7_1_2cone3');
        _this.object5.name = "cone";
        
         _this.object1.visible = false;
        _this.object2.visible = false;
        _this.object4.visible = false;

         _this.shapeGrp1.add(_this.object3);
         _this.shapeGrp1.add(_this.object5);
        
        _this.shapeGrp2.add(_this.object1);
        _this.shapeGrp2.add(_this.object2);
        _this.shapeGrp2.add(_this.object4);
        
        
         _this.rightMark=this.add.sprite(800,250,'SG3_1_1rightmark');

          // _this.shapeGrp.y = -600;
        /*_this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-50 - _this.shapeGrp.height }, 200, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);*/
        
    _this.shapeGrp1.y = -500;
      var tween = _this.add.tween(_this.shapeGrp1);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.object1.visible = true;
        _this.object2.visible = true;
        _this.object4.visible = true;
          _this.shapeGrp2.y = -600;
        _this.tween1 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+200 - _this.shapeGrp2.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+50 - _this.shapeGrp2.height }, 0, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp2).to( { y: _this.shapeGrp1.height+101 - _this.shapeGrp2.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
       },_this);  
         _this.time.events.add(5000, function(){  
             _this.shapeGrp.add(_this.object1);
             _this.shapeGrp.add(_this.object2);
             _this.shapeGrp.add(_this.object3);
             _this.shapeGrp.add(_this.object4);
             _this.shapeGrp.add(_this.object5);
             for(var k=0;k<_this.shapeGrp.length;k++)
                {
                    _this.shapeGrp.getChildAt(k).inputEnabled = true;
                    _this.shapeGrp.getChildAt(k).events.onInputDown.add(_this.clickOnObjects,_this);
                }
         },_this);
    },
gotoFourteenthQuestion:function()
    {
        _this.getVoice();
      //  _this.Text = _this.add.text(350,50,'Flat Surafaces');
        
        _this.shapeGrp=_this.add.group();
        _this.shapeGrp1=_this.add.group();
        _this.shapeGrp2=_this.add.group();
        _this.object1=_this.add.sprite(150,300,'sg7_1_2cylinder4');
        _this.object1.name = "cylinder";
        _this.object2=_this.add.sprite(520,290,'sg7_1_2square4');
        _this.object2.name = "square";
        _this.object2.value = 0;
        _this.object2.scale.setTo(0.7);
        _this.object3=_this.add.sprite(110,90,'sg7_1_2rectangle2');
        _this.object3.name = "rectangle";
        _this.object3.value = 0;
        _this.object3.scale.setTo(0.7);
        _this.object4=_this.add.sprite(350,200,'sg7_1_2circle');
        _this.object4.name = "circle";
        _this.object5=_this.add.sprite(550,100,'sg7_1_2cone4');
        _this.object5.name = "cone";
        

        _this.object3.visible = false;
        _this.object5.visible = false;

         _this.shapeGrp1.add(_this.object3);
         _this.shapeGrp1.add(_this.object5);
        
        _this.shapeGrp2.add(_this.object1);
        _this.shapeGrp2.add(_this.object2);
        _this.shapeGrp2.add(_this.object4);
        
        
         _this.rightMark=this.add.sprite(800,250,'SG3_1_1rightmark');

          // _this.shapeGrp.y = -600;
        /*_this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-50 - _this.shapeGrp.height }, 200, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);*/
        
    _this.shapeGrp2.y = -500;
      var tween = _this.add.tween(_this.shapeGrp2);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.object3.visible = true;
        _this.object5.visible = true;
          _this.shapeGrp1.y = -600;
        _this.tween1 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-60 - _this.shapeGrp1.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-185 - _this.shapeGrp1.height }, 0, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-145 - _this.shapeGrp1.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
       },_this);  
         _this.time.events.add(5000, function(){  
             _this.shapeGrp.add(_this.object1);
             _this.shapeGrp.add(_this.object2);
             _this.shapeGrp.add(_this.object3);
             _this.shapeGrp.add(_this.object4);
             _this.shapeGrp.add(_this.object5);
             for(var k=0;k<_this.shapeGrp.length;k++)
                {
                    _this.shapeGrp.getChildAt(k).inputEnabled = true;
                    _this.shapeGrp.getChildAt(k).events.onInputDown.add(_this.clickOnObjects,_this);
                }
         },_this);
    },
gotoFifteenthQuestion:function()
    {
        _this.getVoice();
       // _this.Text = _this.add.text(350,50,'Both Flat & Curved Surafaces');
        
        _this.shapeGrp=_this.add.group();
        _this.shapeGrp1=_this.add.group();
        _this.shapeGrp2=_this.add.group();
        _this.object1=_this.add.sprite(150,300,'sg7_1_2cylinder5');
        _this.object1.name = "cylinder";
        _this.object2=_this.add.sprite(520,330,'sg7_1_2square5');
        _this.object2.name = "square";
        _this.object2.value = 0;
        _this.object2.scale.setTo(0.7);
        _this.object3=_this.add.sprite(110,90,'sg7_1_2rectangle2');
        _this.object3.name = "rectangle";
        _this.object3.value = 0;
        _this.object3.scale.setTo(0.7);
        _this.object4=_this.add.sprite(350,200,'sg7_1_2circle');
        _this.object4.name = "circle";
        _this.object5=_this.add.sprite(550,100,'sg7_1_2cone5');
        _this.object5.name = "cone";
        
        _this.object3.visible = false;
        _this.object5.visible = false;

         _this.shapeGrp1.add(_this.object3);
         _this.shapeGrp1.add(_this.object5);
        
        _this.shapeGrp2.add(_this.object1);
        _this.shapeGrp2.add(_this.object2);
        _this.shapeGrp2.add(_this.object4);
        
        
         _this.rightMark=this.add.sprite(800,250,'SG3_1_1rightmark');

          // _this.shapeGrp.y = -600;
        /*_this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-50 - _this.shapeGrp.height }, 200, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);*/
        
    _this.shapeGrp2.y = -500;
      var tween = _this.add.tween(_this.shapeGrp2);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.object3.visible = true;
        _this.object5.visible = true;
          _this.shapeGrp1.y = -600;
        _this.tween1 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-60 - _this.shapeGrp1.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-165 - _this.shapeGrp1.height }, 0, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-121 - _this.shapeGrp1.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
       },_this);  
         _this.time.events.add(5000, function(){  
             _this.shapeGrp.add(_this.object1);
             _this.shapeGrp.add(_this.object2);
             _this.shapeGrp.add(_this.object3);
             _this.shapeGrp.add(_this.object4);
             _this.shapeGrp.add(_this.object5);
             for(var k=0;k<_this.shapeGrp.length;k++)
                {
                    _this.shapeGrp.getChildAt(k).inputEnabled = true;
                    _this.shapeGrp.getChildAt(k).events.onInputDown.add(_this.clickOnObjects,_this);
                }
         },_this);
    },
    gotoSixteenthQuestion:function()
    {
        _this.getVoice();
     //   _this.Text = _this.add.text(350,50,'Both Flat & Curved Surafaces');
        
        _this.shapeGrp=_this.add.group();
        _this.shapeGrp1=_this.add.group();
        _this.shapeGrp2=_this.add.group();
        _this.object1=_this.add.sprite(150,330,'sg7_1_2cylinder6');
        _this.object1.name = "cylinder";
        _this.object2=_this.add.sprite(520,300,'sg7_1_2square6');
        _this.object2.name = "square";
        _this.object2.value = 0;
        _this.object2.scale.setTo(0.7);
        _this.object3=_this.add.sprite(110,90,'sg7_1_2rectangle66');
        _this.object3.name = "rectangle";
        _this.object3.value = 0;
        _this.object3.scale.setTo(0.7);
        _this.object4=_this.add.sprite(380,200,'sg7_1_2circle');
        _this.object4.name = "circle";
        _this.object5=_this.add.sprite(550,100,'sg7_1_2cone6');
        _this.object5.name = "cone";
        
         _this.object3.visible = false;
        _this.object5.visible = false;

         _this.shapeGrp1.add(_this.object3);
         _this.shapeGrp1.add(_this.object5);
        
        _this.shapeGrp2.add(_this.object1);
        _this.shapeGrp2.add(_this.object2);
        _this.shapeGrp2.add(_this.object4);
        
        
         _this.rightMark=this.add.sprite(800,250,'SG3_1_1rightmark');

          // _this.shapeGrp.y = -600;
        /*_this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-50 - _this.shapeGrp.height }, 200, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);*/
        
    _this.shapeGrp2.y = -500;
      var tween = _this.add.tween(_this.shapeGrp2);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.object3.visible = true;
        _this.object5.visible = true;
          _this.shapeGrp1.y = -600;
        _this.tween1 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-60 - _this.shapeGrp1.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-145 - _this.shapeGrp1.height }, 0, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-113 - _this.shapeGrp1.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
       },_this);  
         _this.time.events.add(5000, function(){  
             _this.shapeGrp.add(_this.object1);
             _this.shapeGrp.add(_this.object2);
             _this.shapeGrp.add(_this.object3);
             _this.shapeGrp.add(_this.object4);
             _this.shapeGrp.add(_this.object5);
             for(var k=0;k<_this.shapeGrp.length;k++)
                {
                    _this.shapeGrp.getChildAt(k).inputEnabled = true;
                    _this.shapeGrp.getChildAt(k).events.onInputDown.add(_this.clickOnObjects,_this);
                }
         },_this);
    },
    gotoSeventeenthQuestion:function()
    {
        _this.getVoice();
        //_this.Text = _this.add.text(350,50,'Only Flat Surfaces');
        
        _this.shapeGrp=_this.add.group();
        _this.shapeGrp1=_this.add.group();
        _this.shapeGrp2=_this.add.group();
        _this.object1=_this.add.sprite(150,300,'sg7_1_2cylinder4');
        _this.object1.name = "cylinder";
        _this.object2=_this.add.sprite(520,330,'sg7_1_2square3');
        _this.object2.name = "square";
        _this.object2.value = 0;
        _this.object2.scale.setTo(0.7);
        _this.object3=_this.add.sprite(110,90,'sg7_1_2rectangle66');
        _this.object3.name = "rectangle";
        _this.object3.value = 0;
        _this.object3.scale.setTo(0.7);
        _this.object4=_this.add.sprite(380,200,'sg7_1_2circle');
        _this.object4.name = "circle";
        _this.object5=_this.add.sprite(550,80,'sg7_1_2cone3');
        _this.object5.name = "cone";
        
         _this.object3.visible = false;
        _this.object5.visible = false;

         _this.shapeGrp1.add(_this.object3);
         _this.shapeGrp1.add(_this.object5);
        
        _this.shapeGrp2.add(_this.object1);
        _this.shapeGrp2.add(_this.object2);
        _this.shapeGrp2.add(_this.object4);
        
        
         _this.rightMark=this.add.sprite(800,250,'SG3_1_1rightmark');

          // _this.shapeGrp.y = -600;
        /*_this.tween1 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height-50 - _this.shapeGrp.height }, 200, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp).to( { y: _this.shapeGrp.height - _this.shapeGrp.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);*/
        
    _this.shapeGrp2.y = -500;
      var tween = _this.add.tween(_this.shapeGrp2);
     tween.to({ y: 0 }, 1500,'Linear', true, 0);
     tween.onComplete.add(function(){
         
        _this.object3.visible = true;
        _this.object5.visible = true;
          _this.shapeGrp1.y = -600;
        _this.tween1 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-60 - _this.shapeGrp1.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-190 - _this.shapeGrp1.height }, 0, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.shapeGrp1).to( { y: _this.shapeGrp2.height-141 - _this.shapeGrp1.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
        
       },_this);  
         _this.time.events.add(5000, function(){  
             _this.shapeGrp.add(_this.object1);
             _this.shapeGrp.add(_this.object2);
             _this.shapeGrp.add(_this.object3);
             _this.shapeGrp.add(_this.object4);
             _this.shapeGrp.add(_this.object5);
             for(var k=0;k<_this.shapeGrp.length;k++)
                {
                    _this.shapeGrp.getChildAt(k).inputEnabled = true;
                    _this.shapeGrp.getChildAt(k).events.onInputDown.add(_this.clickOnObjects,_this);
                }
         },_this);
    },
    
    clickOnObjects:function(target)
    {
         _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
       console.log(this.input.activePointer.id);
        if(target.name == "square" || target.name == "rectangle")
            {
                if(target.frame == 0)
                    {
                     // target.tint = 0xF06222;
                      target.frame = 1;
                    }
                else
                    {
                      //target.tint = 0xFFFFFF;
                      target.frame = 0;
                    }
                
            }
            else
            {
                if(target.frame == 0)
                    target.frame = 1;
                else
                    target.frame =0;
            }
         _this.rightMark.inputEnabled = true;
        _this.rightMark.events.onInputDown.add(_this.CheckForAnswer,_this);
        
       
    },
    gotoFirstQAuestion:function()
    {
      console.log("First");  
        
       _this.getVoice();
        _this.dotGroup = _this.add.group();

        _this.redDot1=_this.add.sprite(_this.dot1X,_this.dot1Y,'sg7_1_2redDot');
        _this.redDot2=_this.add.sprite(_this.dot2X,_this.dot2Y,'sg7_1_2redDot');
        _this.redDot3=_this.add.sprite(_this.dot3X,_this.dot3Y,'sg7_1_2redDot');
        _this.redDot4=_this.add.sprite(_this.dot4X,_this.dot4Y,'sg7_1_2redDot');
        _this.redDot5=_this.add.sprite(_this.dot5X,_this.dot5Y,'sg7_1_2redDot');
        _this.redDot6=_this.add.sprite(_this.dot6X,_this.dot6Y,'sg7_1_2redDot');
        _this.redDot7=_this.add.sprite(_this.dot7X,_this.dot7Y,'sg7_1_2redDot');
        
         _this.dotGroup.add(_this.redDot1);
         _this.dotGroup.add(_this.redDot2);
         _this.dotGroup.add(_this.redDot3);
         _this.dotGroup.add(_this.redDot4);
         _this.dotGroup.add(_this.redDot5);
         _this.dotGroup.add(_this.redDot6);
         _this.dotGroup.add(_this.redDot7);
        
//_this.object.y = -1000;
        /// var tween = _this.add.tween(_this.object);
        // tween.to({ y: 200 }, 1500,'Linear', true, 0);
        
       // tween.onComplete.add(function(){
            
             _this.object.y = -600;
           console.log("11111 "+_this.object.height);
        _this.tween1 = _this.add.tween(_this.object).to( { y: _this.object.height+_this.tweenValue1 - _this.object.height }, 0, "Linear", true);
         _this.tween2 = _this.add.tween(_this.object).to( { y: _this.object.height+_this.tweenValue2-80 - _this.object.height }, 600, "Linear", false);
         
         _this.tween3 = _this.add.tween(_this.object).to( { y: _this.object.height+_this.tweenValue3 - _this.object.height },0, Phaser.Easing.Bounce.Out, false);
         
         _this.tween1.chain(_this.tween2);
         _this.tween2.chain(_this.tween3);
    
     
     //},_this);  
        
        
        _this.rightMark=this.add.sprite(800,250,'SG3_1_1rightmark');
    
        for(var k=0;k<_this.dotGroup.length;k++)
        {
            _this.dotGroup.getChildAt(k).name = k+1;
            _this.dotGroup.setAll('alpha',0);
            _this.dotGroup.getChildAt(k).inputEnabled = true;
            _this.dotGroup.getChildAt(k).events.onInputDown.add(_this.clickVertex,_this);
        }
    },
    clickVertex:function(target)
    {
        console.log("@@@ "+ this.input.activePointer.isDown);
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.vertex++;
        console.log("CLICK "+target.name);
        target.alpha = 1;
        target.events.onInputDown.removeAll();
        _this.rightMark.inputEnabled = true;
        _this.rightMark.events.onInputDown.add(_this.CheckForAnswer,_this);
    },
    
    CheckForAnswer:function(target)
    {
        _this.noofAttempts++;
        target.frame = 1;
        if(_this.temp<11)
            {
                if(_this.vertex == 7)
                    {
                       _this.rightAnswer(target);
                    }
                else
                    {
                        _this.wrongAns();
                    }
                
            }
        else
            {

                if(_this.shapeGrp.getChildAt(0))
                {
                                  
                if(_this.temp == 11 || _this.temp == 12)
                    {
                    if((_this.shapeGrp.getChildAt(0).frame == 1)&&(_this.shapeGrp.getChildAt(3).frame == 1)&&(_this.shapeGrp.getChildAt(4).frame ==1)&&(_this.shapeGrp.getChildAt(1).frame == 0)&&(_this.shapeGrp.getChildAt(2).frame == 0))
                        {
                            _this.shapeGrp.getChildAt(0).frame = 2;
                            _this.shapeGrp.getChildAt(3).frame = 2;
                            _this.shapeGrp.getChildAt(4).frame = 2;
                            _this.rightAnswer(target); 
                            
                        }
                        else
                        {
                            _this.wrongAns();
                        }
                    }
                else if(_this.temp ==13 || _this.temp ==14)
                    {
                        if((_this.shapeGrp.getChildAt(0).frame == 1)&&(_this.shapeGrp.getChildAt(3).frame == 0)&&(_this.shapeGrp.getChildAt(4).frame ==1)&&(_this.shapeGrp.getChildAt(1).frame == 1)&&(_this.shapeGrp.getChildAt(2).frame == 1))
                        {
                            _this.shapeGrp.getChildAt(0).frame = 2;
                            _this.shapeGrp.getChildAt(1).frame = 2;
                            _this.shapeGrp.getChildAt(2).frame = 2;
                            _this.shapeGrp.getChildAt(4).frame = 2;
                            _this.rightAnswer(target); 
                        }
                        else
                        {
                            _this.wrongAns();
                        }
                    }
                else if(_this.temp ==15 || _this.temp ==16)
                    {
                         if((_this.shapeGrp.getChildAt(0).frame == 1)&&(_this.shapeGrp.getChildAt(3).frame == 0)&&(_this.shapeGrp.getChildAt(4).frame ==1)&&(_this.shapeGrp.getChildAt(1).frame == 0)&&(_this.shapeGrp.getChildAt(2).frame == 0))
                        {
                            _this.shapeGrp.getChildAt(0).frame = 2;
                            _this.shapeGrp.getChildAt(4).frame = 2;
                            _this.rightAnswer(target); 
                        }
                        else
                        {
                            _this.wrongAns();
                        }
                    }
                else
                    {
                        if((_this.shapeGrp.getChildAt(0).frame == 0)&&(_this.shapeGrp.getChildAt(3).frame == 0)&&(_this.shapeGrp.getChildAt(4).frame ==0)&&(_this.shapeGrp.getChildAt(1).frame == 1)&&(_this.shapeGrp.getChildAt(2).frame == 1))
                        {
                            _this.shapeGrp.getChildAt(1).frame = 2;
                            _this.shapeGrp.getChildAt(2).frame = 2;
                            _this.rightAnswer(target); 
                        }
                        else
                        {
                            _this.wrongAns();
                        }
                    }
                  }
            }
    },
    
    rightAnswer:function(target){ 

        if(_this.dotGroup)
        {
          _this.dotGroup.setAll("inputEnabled",false);
        }

        if(_this.shapeGrp)
        {
          _this.shapeGrp.setAll("inputEnabled",false);
        }


      //_this.game.input.enabled = false;
         target.events.onInputDown.removeAll();
            if(_this.dotGroup)
                _this.dotGroup.setAll('frame',1);
              
            _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
            _this.starAnim.smoothed = false;
            _this.anim4 =  _this.starAnim.animations.add('star');
            _this.celebr = _this.add.audio('celebr');
            _this.celebr.play();
            _this.anim4.play();
            _this.count1++;
            _this.time.events.add(2000, function(){_this.removeEverthing();},_this);   

            if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }
               _this.sceneCount++;

            telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);         

     },
    
wrongAns:function(target)
	{
        if(_this.temp<11)
            {
                _this.vertex = 0;
            for(var k=0;k<_this.dotGroup.length;k++)
                {
                    _this.dotGroup.getChildAt(k).name = k+1;
                    _this.dotGroup.setAll('alpha',0);
                    _this.dotGroup.getChildAt(k).inputEnabled = true;
                    _this.dotGroup.getChildAt(k).events.onInputDown.add(_this.clickVertex,_this);
                }
            }
            else{
                  _this.shapeGrp.setAll('frame',0);
                  
                if((_this.shapeGrp.getChildAt(0).frame == 1)||(_this.shapeGrp.getChildAt(3).frame == 0))
                    {
                        _this.shapeGrp.setAll('value',0);
                        //_this.shapeGrp.getChildAt(1).tint = 0xFFFFFF;
                       // _this.shapeGrp.getChildAt(2).tint = 0xFFFFFF;
                        _this.shapeGrp.getChildAt(1).frame = 0;
                        _this.shapeGrp.getChildAt(2).frame = 0;
                    }
                }  
            
       // _this.noofAttempts++;
        _this.wrongAnswer = true;
        
        if(_this.temp == 11 || _this.temp == 12)
            {
                _this.shakeGroup =_this.add.group();
                _this.shakeGroup.add(_this.object2);
                _this.shakeGroup.add(_this.object3);
            }
        else if(_this.temp == 13 || _this.temp == 14)
            {
                _this.shakeGroup =_this.add.group();
                _this.shakeGroup.add(_this.object4);
            }
         else if(_this.temp == 15 ||_this.temp ==16)
             {
                 _this.shakeGroup =_this.add.group();
                _this.shakeGroup.add(_this.object2);
                _this.shakeGroup.add(_this.object3);
                _this.shakeGroup.add(_this.object4);
             }
        else if(_this.temp == 17)
            {
                 _this.shakeGroup =_this.add.group();
                _this.shakeGroup.add(_this.object1);
                _this.shakeGroup.add(_this.object5);
                _this.shakeGroup.add(_this.object4);
            }
        _this.wmusic = _this.add.audio('waudio');
        _this.wmusic.play();
        if(_this.temp<11)
            {
                _this.shake.shake(10,_this.object);
            }
        else
            {
                _this.shake.shake(10,_this.shakeGroup);
            }
        
        _this.time.events.add(1000, function(){
            _this.rightMark.frame = 0;
             if(_this.temp>10)
            {
            _this.shapeGrp.remove(_this.object1);
             _this.shapeGrp.remove(_this.object2);
             _this.shapeGrp.remove(_this.object3);
             _this.shapeGrp.remove(_this.object4);
             _this.shapeGrp.remove(_this.object5);
            
            _this.shapeGrp.add(_this.object1);
            _this.shapeGrp.add(_this.object2);
            _this.shapeGrp.add(_this.object3);
            _this.shapeGrp.add(_this.object4);
            _this.shapeGrp.add(_this.object5);
            }
        },_this);
        //target.events.onInputDown.removeAll();
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
    removeEverthing:function() 
    {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
         _this.count =0;
         _this.no1++;
        if( _this.no1<6)
        {
            // _this.no1++;
            //_this.done1=0;
              _this.wrong = true;
            _this.vertex = 0;
             _this.timer1.stop();
            if(_this.dotGroup)
              _this.dotGroup.destroy();
            if( _this.object)
             _this.object.destroy();
            if(_this.shapeGrp)
                _this.shapeGrp.destroy();
             _this.rightMark.destroy();
            
            if(_this.Text)
                _this.Text.destroy();
             // _this.game.input.enabled = true;
                _this.getQuestion();

            
                       
        }
        else
        {
         // _this.game.input.enabled = true;
            // _this.timer1.stop();
            //_this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('sg7_1_2Score');
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
      
    update:function(){

    },
    
    getVoice:function(){
         _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch(_this.temp)
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
                case 10:if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/English/sg7.1.2a.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Hindi/sg7.1.2a.mp3");
                            }
                            else if(window.languageSelected == "Kannada")

                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Kannada/sg7.1.2a.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")

                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Gujarathi/sg7.1.2a.mp3");
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Marathi/sg7.1.2a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Telugu/sg7.1.2a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Tamil/sg7.1.2a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Urdu/sg7.1.2a.mp3");
                    }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Odiya/sg7.1.2a.mp3");
                                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                    
                case 11: if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/English/sg7.1.2d.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Hindi/sg7.1.2d.mp3");
                            }
                            else if(window.languageSelected == "Kannada")

                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Kannada/sg7.1.2d.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Gujarathi/sg7.1.2d.mp3");
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Marathi/sg7.1.2d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Telugu/sg7.1.2d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Tamil/sg7.1.2d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Urdu/sg7.1.2d.mp3");
                    }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Odiya/sg7.1.2d.mp3");
                                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                    
                case 12:if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/English/sg7.1.2d.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Hindi/sg7.1.2d.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Kannada/sg7.1.2d.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Gujarathi/sg7.1.2d.mp3");
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Marathi/sg7.1.2d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Telugu/sg7.1.2d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Tamil/sg7.1.2d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Urdu/sg7.1.2d.mp3");
                    }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Odiya/sg7.1.2d.mp3");
                                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                    
                case 13:if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/English/sg7.1.2b.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Hindi/sg7.1.2b.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Kannada/sg7.1.2b.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Gujarathi/sg7.1.2b.mp3");
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Marathi/sg7.1.2b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Telugu/sg7.1.2b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Tamil/sg7.1.2b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Urdu/sg7.1.2b.mp3");
                    }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Odiya/sg7.1.2b.mp3");
                                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 14:if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/English/sg7.1.2b.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Hindi/sg7.1.2b.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Kannada/sg7.1.2b.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Gujarathi/sg7.1.2b.mp3");
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Marathi/sg7.1.2b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Telugu/sg7.1.2b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Tamil/sg7.1.2b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Urdu/sg7.1.2b.mp3");
                    }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Odiya/sg7.1.2b.mp3");
                                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                    
                case 15:if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/English/sg7.1.2f.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Hindi/sg7.1.2f.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Kannada/sg7.1.2f.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Gujarathi/sg7.1.2f.mp3");
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Marathi/sg7.1.2f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Telugu/sg7.1.2f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Tamil/sg7.1.2f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Urdu/sg7.1.2f.mp3");
                    }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Odiya/sg7.1.2f.mp3");
                                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 16:if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/English/sg7.1.2f.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Hindi/sg7.1.2f.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Kannada/sg7.1.2f.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Gujarathi/sg7.1.2f.mp3");
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Marathi/sg7.1.2f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Telugu/sg7.1.2f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Tamil/sg7.1.2f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Urdu/sg7.1.2f.mp3");
                    }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Odiya/sg7.1.2f.mp3");
                                //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                            }
                            break;
                case 17:if(window.languageSelected == "English")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/English/sg7.1.2c.mp3");
                            }
                            else if(window.languageSelected == "Hindi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Hindi/sg7.1.2c.mp3");
                            }
                            else if(window.languageSelected == "Kannada")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Kannada/sg7.1.2c.mp3");
                            }
                            else if(window.languageSelected == "Gujarati")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Gujarathi/sg7.1.2c.mp3");
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Marathi/sg7.1.2c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Telugu/sg7.1.2c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Tamil/sg7.1.2c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Urdu/sg7.1.2c.mp3");
                    }
                            else
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.1.2/Odiya/sg7.1.2c.mp3");
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
    
        stopVoice:function(){
             if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
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
         // _this.game.input.enabled = true;
          _this.stopVoice();
        },

    
};