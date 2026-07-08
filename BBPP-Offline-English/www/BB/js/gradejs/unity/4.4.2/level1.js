Game.unity4_4_2level1=function(){
};
Game.unity4_4_2level1.prototype={
	init:function(game)
	{
		_this = this;
    telInitializer.gameIdInit("unity4_4_1",gradeSelected);

	},

    

  preload:function(game){
        if(!window.grade1NSC4){

            window.grade1NSC4 = true;

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

        //this.load.image('Level31_bg1',window.baseUrl+'assets/gradeAssets/3.1/BG.png');

        this.load.image('Level441_bg1',window.baseUrl+'assets/gradeAssets/4.4.1/BG.png');
        this.load.image('boy1',window.baseUrl+'assets/gradeAssets/4.4.1/Boy1.png');
        this.load.image('boy2',window.baseUrl+'assets/gradeAssets/4.4.1/Boy2.png');
        this.load.image('boy3',window.baseUrl+'assets/gradeAssets/4.4.1/Boy3.png');
        this.load.image('Tree',window.baseUrl+'assets/gradeAssets/4.4.1/Tree.png');
    
      
        

        this.load.atlas('box1',window.baseUrl+'assets/gradeAssets/4.4.1/box1.png' ,window.baseUrl+'json/gradeJson/4.4.1/box1.json');
        this.load.atlas('box2',window.baseUrl+'assets/gradeAssets/4.4.1/box 2.png' ,window.baseUrl+'json/gradeJson/4.4.1/box 2.json');
        this.load.atlas('BoyhandsUp',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp.json');
        this.load.atlas('BoyRightPointing',window.baseUrl+'assets/gradeAssets/4.4.1/BoyRightPointing.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyRightPointing.json');
        this.load.atlas('BoyWrong',window.baseUrl+'assets/gradeAssets/4.4.1/BoyWrong.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyWrong.json');
        // this.load.atlas('tik1',window.baseUrl+'assets/gradeAssets/4.4.1/tik 1.png' ,window.baseUrl+'assets/gradeAssets/4.4.1/tik 1.json');
        this.load.atlas('BoyJumping',window.baseUrl+'assets/gradeAssets/4.4.1/BoyJumping.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyJumping.json');
        this.load.atlas('BoyhandsUp',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp.json');
        this.load.atlas('BoyLeftPointing',window.baseUrl+'assets/gradeAssets/4.4.1/BoyLeftPointing.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyLeftPointing.json');
    
        this.load.atlas('BoyRightPointing_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyRightPointing_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyRightPointing_blue.json');
        this.load.atlas('BoyJumping_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyJumping_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyJumping_blue.json');
        this.load.atlas('BoyhandsUp_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp_blue.json');



        this.load.atlas('tickBtn',window.baseUrl+'assets/gradeAssets/4.4.1/rightmark.png' ,window.baseUrl+'json/gradeJson/4.4.1/rightmark.json');
       

    }

    },
    
	create:function(game){
		
		_this.amplify = null;

    _this.sceneCount = 0;
		
		 _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		_this.AnsTimerCount = 0;
		
         _this.no1=0;
         _this.qArrays = [1,3,5,7,9,11];
         _this.qArrays = _this.shuffle( _this.qArrays);
         _this.count=0;
         _this.count1=0;
		     _this.shake = new Phaser.Plugin.Shake(game);
		      game.plugins.add( _this.shake);
         _this.physics.startSystem(Phaser.Physics.ARCADE);
		     _this.physics.setBoundsToWorld();
         _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level441_bg1');
         _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
         _this.navBar.scale.setTo(1,1);
         _this.Tree = _this.add.sprite(400,70,'Tree');
         _this.Tree.scale.setTo(1,1);
         _this.BoyLeftPointing = _this.add.sprite(350,400,'BoyLeftPointing');
         _this.BoyLeftPointing.scale.setTo(1,1);
         _this.BoyLeftPointing.frame = 0;

         _this.numbox1Pressed=false;
          _this.numbox2Pressed=false;
         _this.numbox3Pressed=false;
         _this.numbox4Pressed=false;
         _this.numbox5Pressed=false;
		 
		 _this.timebg=this.add.sprite(305,6,'Level42B_timer');
          _this.timebg.scale.setTo(1,1);


            this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';
			

        setTimeout(function(){ _this.BoyLeftPointing.frame = 5;
        }, 100);
              
        setTimeout(function(){ _this.BoyLeftPointing.frame = 10;
        }, 200);
        setTimeout(function(){ _this.BoyLeftPointing.frame = 15;
        }, 300);
        _this.BoyLeftPointing.frame = 21;

 _this.numBox1 = _this.add.sprite(108.5,207.5,'box1');
         _this.numBox1.name = "numBox1";
                  _this.numBox1.frame=0;

       _this.numBox2 = _this.add.sprite(188.5,207.5,'box1');
         _this.numBox2.name = "numBox2";
                           _this.numBox2.frame=0;

         _this.numBox3 = _this.add.sprite(269,207.5,'box1');
         _this.numBox3.name = "numBox3";
                           _this.numBox3.frame=0;

         _this.numBox4 = _this.add.sprite(149,288.5,'box1');
         _this.numBox4.name = "numBox4";
                           _this.numBox4.frame=0;

        _this.numBox5 = _this.add.sprite(228.5,288.5,'box1');
         _this.numBox5.name = "numBox5";
                           _this.numBox5.frame=0;


        
  _this.shakeGroup = _this.add.group();
         _this.numBox1 = _this.add.sprite(570,125,'box1');
         _this.numBox1.name = "numBox1";
        _this.numBox2 = _this.add.sprite(479,185,'box1');
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(570,225,'box1');
         _this.numBox3.name = "numBox3";
         _this.numBox4 = _this.add.sprite(479,277,'box1');
         _this.numBox4.name = "numBox4";
        _this.numBox5 = _this.add.sprite(570,327,'box1');
         _this.numBox5.name = "numBox5";

              _this.numBox1.scale.setTo(0.9,0.9);
              _this.numBox2.scale.setTo(0.9,0.9);
              _this.numBox3.scale.setTo(0.9,0.9);
              _this.numBox4.scale.setTo(0.9,0.9);

              _this.numBox5.scale.setTo(0.9,0.9);

                _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);

        _this.shakeGroup.add(_this.numBox3);
        _this.shakeGroup.add(_this.numBox4);
        _this.shakeGroup.add(_this.numBox5);
        
        _this.numBox1.canAdd = true;
        _this.numBox2.canAdd = false;
        _this.numBox3.canAdd = false;
        _this.numBox4.canAdd = false;
        _this.numBox5.canAdd = false;


_this.numBox5.frame = 1;
setTimeout(function(){ _this.numBox5.frame = 0;
 }, 1000);
setTimeout(function(){ _this.numBox4.frame = 1;
 }, 1000);

setTimeout(function(){ _this.numBox4.frame = 0;
 }, 2000);
setTimeout(function(){ _this.numBox3.frame = 1;
 }, 2000);
setTimeout(function(){ _this.numBox3.frame = 0;
 }, 3000);
setTimeout(function(){ _this.numBox2.frame = 1;
 }, 3000);
setTimeout(function(){ _this.numBox2.frame = 0;
 }, 4000);
setTimeout(function(){ _this.numBox1.frame = 1;
 }, 4000);
setTimeout(function(){ _this.numBox1.frame = 0;
 }, 5000);

       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            ////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade2levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'grade11_speaker');
      _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        _this.no1=0;
          _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,15];
        _this.qArrays = _this.shuffle( _this.qArrays);
   
_this.count=0;
         _this.count1=0;
		_this.generateStarsForTheScene(6);
         // _this.no1++;
		 _this.getQuestion();
       _this.getVoice();
        
        
    

    },

     boxBlink:function(){

      _this.numBox5.frame = 1;
setTimeout(function(){ _this.numBox5.frame = 0;
 }, 1000);
setTimeout(function(){ _this.numBox4.frame = 1;
 }, 1000);

setTimeout(function(){ _this.numBox4.frame = 0;
 }, 2000);
setTimeout(function(){ _this.numBox3.frame = 1;
 }, 2000);
setTimeout(function(){ _this.numBox3.frame = 0;
 }, 3000);
setTimeout(function(){ _this.numBox2.frame = 1;
 }, 3000);
setTimeout(function(){ _this.numBox2.frame = 0;
 }, 4000);
setTimeout(function(){ _this.numBox1.frame = 1;
 }, 4000);
setTimeout(function(){ _this.numBox1.frame = 0;
 }, 5000);
    },
toCheckAnswer:function(target){
          //console.log("tickmark "+_this.tickMark.inputEnabled);
this.tickMark.frame = 1;

      setTimeout(function(){ _this.tickMark.frame = 0;
            }, 200);

      _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
           _this.tickMark.frame = 0;
 var rightans=1;
  selectedAns=1;

    ////console.log("check answer"+_this.checkMangoes);
    if(selectedAns==rightans){
       _this.correctAns(target);
}
},
     generatemangoCeleb:function(){
         _this.shakeObjectGroup.add(_this.basketback);
          _this.objectGroup = _this.add.group();
        var x = 500;
        var x1 = 515;
        var x2 = 530;
        var y = 370;
        var y1 = 342;
        var y2 = 312;
         
    for(var i=0;i<9;i++)
        {
            if(i>4 && i<9){
                
                    box =   _this.objectGroup.create(x,y,'mangoCeleb');
                    box.name = "mango"+i;
                    box.anchor.setTo(0.5);
                    box.scale.setTo(0.7,0.7);
                    x+=30;
            }
            else if(i>1 && i<5){
                
                   box =   _this.objectGroup.create(x1,y1,'mangoCeleb');
                   box.name = "mango"+i;
                   box.anchor.setTo(0.5);
                   box.scale.setTo(0.7,0.7);
                   x1+=30;
             }
            else if(i<2){
                   box =   _this.objectGroup.create(x2,y2,'mangoCeleb');
                   box.name = "mango"+i;
                   box.anchor.setTo(0.5);
                   box.scale.setTo(0.7,0.7);
                   x2+=30;
            }
             _this.objectGroup.getChildAt(i).visible = false;
            
            box.inputEnabled = true;
            box.input.useHandCursor = true;
            box.events.onInputDown.add(_this.mangoCelebClicked,_this);
        }
         _this.basket = _this.add.sprite(450,380,'basket');
         _this.basket.scale.setTo(0.5,0.5);
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
      _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
    },

    getQuestion:function(target)
    {  
	_this.sceneCount++;
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
		
        _this.timer = _this.time.create(false);

            //Set a TimerEvent to occur after 2 seconds
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
        ////console.log(" _this.no1"+ _this.no1);
//_this.addNumberPad();
                	switch( _this.qArrays[ _this.no1])      
    	{
    		case 1:_this.gotoFirstQuestion();
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
            case 11: _this.gotoEleventhQuestion();
    				break;
    		case 12: _this.gotoTwelvethQuestion();
    				break;
            case 13: _this.gotoThirteenthQuestion();
    				break;
    		case 14: _this.gotoFourteenthQuestion();
    				break;
            case 15: _this.gotoFifteenthQuestion();
    				break;
           
    	}
		_this.questionid = 1;
    },
   dragnumbers1:function(target){
  //console.log("targt "+target.name);
 _this.wx=target.x;
    _this.wy=target.y;
       
       _this.numBox1.canAdd = true;

      target.input.enableDrag(true);
  

     target.events.onDragStop.add(

            function(target){
              _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
                    for(var i=0;i<= _this.shakeGroup.length-1;i++)
                    {
                        //console.log(_this.shakeGroup.getChildAt(i).name);
                        /*if((_this.checkOverlap(target,_this.shakeGroup.getChildAt(i))) &&(target.name == _this.shakeGroup.getChildAt(i).name))
                        {
                         //console.log("Wow");
                          break;
                        }*/
                        if((_this.checkOverlap(target,_this.numBox5))&&(target.name == "numBox1")&&_this.numBox1.canAdd)
                           {
                            _this.tickMark = _this.add.sprite(800,250,'tickBtn');
                              _this.tickMark.scale.setTo(1.25,1.25);
                         _this.tickMark.inputEnabled = true;
                 //console.log("tickmark "+_this.tickMark.inputEnabled);
                       _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
                       //console.log("tickmark "+_this.tickMark.inputEnabled);

                               target.frame = 1;
                               target.inputEnabled = false;
                               target.x =  '579.5';
                                target.y =  '332.5';
                               _this.numBox5.canAdd = true;
                               
                               _this.BoyLeftPointing.kill();
                               _this.BoyJumping2 = _this.add.sprite(350,400,'BoyJumping');
                               _this.BoyJumping2.scale.setTo(1,1);
                               _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                                _this.BoyJumping2.animations.play('BoyJumping');  
                               _this.BoyJumping2.x=350;
                                _this.BoyJumping2.y=400;
                                var M1 = this.add.tween(_this.BoyJumping2);
                                M1.to({ x: 605,y:223}, 0, 'Linear', true, 0);
                               break;
                           }
                        else if((_this.checkOverlap(target,_this.numBox4))&&(target.name == "numBox5")&&_this.numBox5.canAdd)
                            {
                                target.frame = 1;
                                target.inputEnabled = false;
                                target.x =  '482.5';
                                target.y =  '283.5';
                                 _this.numBox2.canAdd = true;

 _this.tickMark = _this.add.sprite(800,250,'tickBtn');
                              _this.tickMark.scale.setTo(1.25,1.25);
                         _this.tickMark.inputEnabled = true;
                 //console.log("tickmark "+_this.tickMark.inputEnabled);
                       _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
                       //console.log("tickmark "+_this.tickMark.inputEnabled);
                                  _this.BoyJumping2.kill();
                                  _this.BoyJumping2 = _this.add.sprite(605,223,'BoyJumping');
                               _this.BoyJumping2.scale.setTo(1,1);
                               _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                                _this.BoyJumping2.animations.play('BoyJumping');  
                               _this.BoyJumping2.x=605;
                                _this.BoyJumping2.y=223;
                                var M1 = this.add.tween(_this.BoyJumping2);
                                M1.to({ x: 430,y:172.5}, 0, 'Linear', true, 0);
                                break;
                            }
                        
                        else if((_this.checkOverlap(target,_this.numBox3))&&(target.name == "numBox2")&&_this.numBox2.canAdd)
                            {
                                target.frame = 1;
                                target.inputEnabled = false;
                                target.x =  '579.5';
                                target.y =  '232.5';
                                 _this.numBox4.canAdd = true;

 _this.tickMark = _this.add.sprite(800,250,'tickBtn');
                              _this.tickMark.scale.setTo(1.25,1.25);
                         _this.tickMark.inputEnabled = true;
                 //console.log("tickmark "+_this.tickMark.inputEnabled);
                       _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
                       //console.log("tickmark "+_this.tickMark.inputEnabled);
                                  _this.BoyJumping2.kill();
                                  _this.BoyJumping2 = _this.add.sprite(430,172.5,'BoyJumping');
                               _this.BoyJumping2.scale.setTo(1,1);
                               _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                                _this.BoyJumping2.animations.play('BoyJumping');  
                               _this.BoyJumping2.x=430;
                                _this.BoyJumping2.y=172.5;
                                var M1 = this.add.tween(_this.BoyJumping2);
                                M1.to({ x: 605,y:122.5}, 0, 'Linear', true, 0);
                            
                                break;
                            }
                        else if((_this.checkOverlap(target,_this.numBox2))&&(target.name == "numBox4")&&_this.numBox4.canAdd)
                            {
                                target.frame = 1;
                                target.inputEnabled = false;
                                target.x =  '482.5';
                                target.y =  '190.5';
                                 _this.numBox3.canAdd = true;

 _this.tickMark = _this.add.sprite(800,250,'tickBtn');
                              _this.tickMark.scale.setTo(1.25,1.25);
                         _this.tickMark.inputEnabled = true;
                 //console.log("tickmark "+_this.tickMark.inputEnabled);
                       _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
                       //console.log("tickmark "+_this.tickMark.inputEnabled);
                                   _this.BoyJumping2.kill();
                                  _this.BoyJumping2 = _this.add.sprite(605,122.5,'BoyJumping');
                               _this.BoyJumping2.scale.setTo(1,1);
                               _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                                _this.BoyJumping2.animations.play('BoyJumping');  
                               _this.BoyJumping2.x=605;
                                _this.BoyJumping2.y=122.5;
                                var M1 = this.add.tween(_this.BoyJumping2);
                                M1.to({ x: 430,y:80}, 0, 'Linear', true, 0);
                            
                                break;
                            }
                        else if((_this.checkOverlap(target,_this.numBox1))&&(target.name == "numBox3")&&_this.numBox3.canAdd)
                            {
                                target.frame = 1;
                                target.inputEnabled = false;
                                target.x =  '579.5';
                                target.y =  '132.5';
                               // _this.numBox4.canAdd = true;

 _this.tickMark = _this.add.sprite(800,250,'tickBtn');
                              _this.tickMark.scale.setTo(1.25,1.25);
                         _this.tickMark.inputEnabled = true;
                 //console.log("tickmark "+_this.tickMark.inputEnabled);
                       _this.tickMark.events.onInputDown.add(_this.correctAns,_this);
                       //console.log("tickmark "+_this.tickMark.inputEnabled);
                                _this.BoyJumping2.kill();
                                  _this.BoyJumping2 = _this.add.sprite(430,80,'BoyJumping');
                               _this.BoyJumping2.scale.setTo(1,1);
                               _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                                _this.BoyJumping2.animations.play('BoyJumping');  
                               _this.BoyJumping2.x=430;
                                _this.BoyJumping2.y=80;
                                var M1 = this.add.tween(_this.BoyJumping2);
                                M1.to({ x: 605,y:26}, 0, 'Linear', true, 0);
                            
                                break;
                            }
                        else{
                          if((_this.checkOverlap(target,_this.shakeGroup.getChildAt(i))))
                                {
                                    _this.wmusic = _this.add.audio('waudio');
                                    _this.wmusic.play();
                                }
                            target.x =  _this.wx;
                            target.y =  _this.wy;
                          
                          }
                    }
                target.events.onDragStop.removeAll(); 
                
              },_this);
   },
   
   
 gotoFirstQuestion:function(){

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(19,-3.5,'79');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(21,-3.5,'81');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

         _this.number3 = _this.add.text(17,-3.5,'83');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(17,-3.5,'82');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'80');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);


},
    gotoSecondQuestion:function(){ 
  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

     //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(17,-3.5,'26');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(17,-3.5,'28');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

                _this.number3 = _this.add.text(15,-3.5,'30');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(16,-3.5,'29');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'27');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

     },
    gotoThirdQuestion:function(){
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(19,-3.5,'81');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'83');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

                _this.number3 = _this.add.text(15,-3.5,'85');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'84');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'82');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

     },
    gotoFourthQuestion:function(){
        // _this.stopVoice();

  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.number1 = _this.add.text(30,3,'15');
        //_this.number1.anchor.setTo(0.5,0.5);
       //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(19,-3.5,'81');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(17,-3.5,'83');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);
         _this.number3 = _this.add.text(17,-3.5,'85');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(17,-3.5,'84');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(16,-3.5,'82');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

     }, 
    gotoFifthQuestion:function(){
         _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'46');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'48');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

                _this.number3 = _this.add.text(15,-3.5,'50');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'49');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'47');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

     }, 
    gotoSixthQuestion:function(){
         _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'64');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'66');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'68');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'67');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'65');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

     },
    
    gotoSeventhQuestion:function(){
           _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'67');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'69');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

                _this.number3 = _this.add.text(20,-3.5,'71');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(17,-3.5,'70');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'68');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);
    _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

      
     },
    gotoEighthQuestion:function(){
  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'27');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'29');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

       _this.number3 = _this.add.text(19,-3.5,'31');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'30');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'28');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

     },
    gotoNinthQuestion:function(){
    	  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'55');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(19,-3.5,'57');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'59');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'58');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'56');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);
 _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },
gotoTenthQuestion:function(){ 
  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'54');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'56');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

                _this.number3 = _this.add.text(15,-3.5,'58');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'57');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'55');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);



     },


gotoEleventhQuestion:function(){ 
	  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(19,-3.5,'51');
        //_this.number1.anchor.setTo9(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'53');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'55');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'54');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'52');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

     },

    gotoTwelvethQuestion:function(){ 

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(19,-3.5,'31');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'33');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

                _this.number3 = _this.add.text(15,-3.5,'35');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'34');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'32');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);


     },



     gotoThirteenthQuestion:function(){ 

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'43');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'45');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

                _this.number3 = _this.add.text(15,-3.5,'47');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'46');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'44');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

      
     },

     gotoFourteenthQuestion:function(){ 

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'38');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(15,-3.5,'40');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

       _this.number3 = _this.add.text(15,-3.5,'42');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'41');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'39');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);


     },

     gotoFifteenthQuestion:function(){ 
  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.wrongTick,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
                   _this.numBox51.frame=0;
_this.boxBlink();

      //_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//_this.UnorderedNum1.add(_this.numBox11);
//console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number1 = _this.add.text(15,-3.5,'69');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
_this.number2 = _this.add.text(19,-3.5,'71');
       // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'73');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
                _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'72');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
  _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'70');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
        _this.numBox51.addChild(_this.number5);

             _this.orderedNum1=_this.numBox11;
              _this.orderedNum2=_this.numBox51;
              _this.orderedNum3=_this.numBox21;
              _this.orderedNum4=_this.numBox41;
              _this.orderedNum5=_this.numBox31;


   _this.orderedNum1.inputEnabled = true;
            _this.orderedNum1.input.useHandCursor = true;
    
            _this.orderedNum2.inputEnabled = true;
            _this.orderedNum2.input.useHandCursor = true;

            _this.orderedNum3.inputEnabled = true;
            _this.orderedNum3.input.useHandCursor = true;

             _this.orderedNum4.inputEnabled = true;
            _this.orderedNum4.input.useHandCursor = true;

            _this.orderedNum5.inputEnabled = true;
            _this.orderedNum5.input.useHandCursor = true;

           _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
           _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);


     },
    
checkOverlap:function(spriteA, spriteB) 
	{
		
	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
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
         _this.no1++;
         if( _this.no1<6)
        {
			_this.timer1.stop();
      _this.BoyLeftPointing.visible=true;

      _this.numBox1.canAdd = false;
      _this.numBox2.canAdd = false;
      _this.numBox3.canAdd = false;
      _this.numBox4.canAdd = false;
      _this.numBox5.canAdd = false;
           _this.selectedAns = " ";
           _this.tickMark.destroy();
 _this.numBox11.frame = 0;
            _this.numBox21.frame = 0;
            _this.numBox31.frame = 0;
             _this.numBox41.frame = 0;
            _this.numBox51.frame = 0;

            _this.numBox11.destroy();
                        _this.numBox21.destroy();
            _this.numBox31.destroy();
            _this.numBox41.destroy();
            _this.numBox51.destroy();


_this.BoyJumping3.destroy();

//console.log("************************************");
            _this.getQuestion();
            }
else
        {
			_this.timer1.stop();
			_this.timer1 = null;
             _this.stopVoice();
            _this.state.start('unity4_4_2Score');

          }
      },
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < 6; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=15;
					 _this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},

  wrongTick:function(target)
  {
	_this.noofAttempts++;
    _this.tickMark.frame = 1;

      setTimeout(function(){ _this.tickMark.frame = 0;
            }, 200);
      _this.wmusic = _this.add.audio('waudio');
     _this.wmusic.play();
  },
    
	correctAns:function(target)
{
	_this.noofAttempts++;
    _this.tickMark.frame = 1;

      setTimeout(function(){ _this.tickMark.frame = 0;
            }, 200);
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime,
                    event_type: "click", 
                    res_id: "level12_TickMark", 
                    access_token: window.acctkn 
               } 
               
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
        
            target.events.onInputDown.removeAll();
             _this.stopVoice();
        
        	       _this.speakerbtn.inputEnabled=false;
                    _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
                   // ////console.log(starAnim);
                     _this.starAnim.smoothed = false;
                     _this.anim4 =  _this.starAnim.animations.add('star');
                    _this.celebr = _this.add.audio('celebr');
                     _this.celebr.play();
                     _this.anim4.play();

					 telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
					 
                     _this.count1++;
_this.BoyJumping2.kill();
                               _this.BoyJumping2 = _this.add.sprite(615,35,'BoyhandsUp');
                               _this.BoyJumping2.scale.setTo(1,1);
                               _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19]);
                                _this.BoyJumping2.animations.play('BoyJumping');  
                               _this.BoyJumping2.x=615;
                                _this.BoyJumping2.y=35;
                                var M1 = this.add.tween(_this.BoyJumping2);
                                M1.to({ x: 615,y:35}, 0, 'Linear', true, 0);
_this.BoyJumping2.kill();


                              
 _this.BoyJumping3 = _this.add.sprite(615,35,'BoyhandsUp');
                               _this.BoyJumping3.scale.setTo(1,1);
                               _this.BoyJumping3.animations.add('BoyJumping',[19,19,18,18,17,17,16,16,16,15,15,14,14,14,13,13,13,12,12,12,11,11,11,10,10,10,9,9,8,8,8,7,7,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1]);
                                _this.BoyJumping3.animations.play('BoyJumping');  
                               _this.BoyJumping3.x=615;
                                _this.BoyJumping3.y=35;
                                var M1 = this.add.tween(_this.BoyJumping3);
                                M1.to({ x: 615,y:35}, 0, 'Linear', true, 0);

                             
     setTimeout(function(){ 

                    _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
 }, 1000); 

},

wrongPick:function(target)
{

  _this.wx=target.x;
    _this.wy=target.y;

      target.input.enableDrag(true);
  _this.wmusic = _this.add.audio('waudio');
     _this.wmusic.play();

     target.events.onDragStop.add(
            function(target){
                
                target.events.onDragStop.removeAll(); 

              
                
                target.x =  _this.wx;
                target.y =  _this.wy;
              })
},
wrongAns:function(target)
	{
    _this.noofAttempts++;
          
          //_this.currentTime = window.timeSaveFunc();
          _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar,
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,
                    date_time_event: _this.currentTime, 
                    event_type: "click",
                    res_id: "level12_TickMark",
                    access_token: window.acctkn
               } 
              
        //  absdsjsapi.saveInteractEvent(_this.interactEvent);   
          
       
        //_this.timer1.stop();	
         _this.wrong = false;
      

        _this.BoyJumping1.kill();
                _this.BoyJumping2.kill();

        _this.BoyJumping3.kill();

        _this.BoyJumping4.kill();

        _this.BoyJumping5.kill();
_this.BoyLeftPointing.visible=true;
		 _this.wmusic = _this.add.audio('waudio');
		 _this.wmusic.play();
      
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor=true;
  setTimeout(function(){ 

     _this.shake.shake(10,  _this.numBox1);
     }, 50);
     setTimeout(function(){ 
 _this.shake.shake(10,  _this.numBox2);
 }, 60);
 setTimeout(function(){ 
  _this.shake.shake(10,  _this.numBox3);
  }, 70);
  setTimeout(function(){ 
   _this.shake.shake(10,  _this.numBox4);
   }, 80);
   setTimeout(function(){ 
    _this.shake.shake(10,  _this.numBox5);
}, 90);
        _this.time.events.add(500, function(){ target.events.onInputDown.removeAll();
        	_this.getQuestion();},_this);

        _this.UnorderedNum1.kill();
_this.UnorderedNum2.kill();
_this.UnorderedNum3.kill();
_this.UnorderedNum4.kill();
_this.UnorderedNum5.kill();
	},
      
    update:function(){

    },
    
    getVoice:function(){
         _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
          /*  switch( _this.qArrays[ _this.no1])
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
                case 12:
                case 13:
                case 14:
                case 15:*/if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/English/Game 4.4.1.mp3");                       }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Hindi/Game 4.4.1.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Kannada/Game 4.4.1.mp3");
                        }
						else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Marathi/4.4.1.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Telugu/4.4.1.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Tamil/4.4.1.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Urdu/4.4.1.mp3");
                        }
                        else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.4.1/4.4.1.mp3");
                    }
						else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Odiya/4.5.1.mp3");
							               _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                      /*  break;
            }*/

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
            
        }

    
};