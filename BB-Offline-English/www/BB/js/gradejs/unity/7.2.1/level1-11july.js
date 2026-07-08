Game.unity7_2_1level1=function(){};
var randarr;
var yellowCoinArray;
var coinset;
Game.unity7_2_1level1.prototype={


     init:function(game)
    {
        _this = this;


        telInitializer.gameIdInit("CoinMachine7_2_1",gradeSelected);
        
        _this.gameid = "7.2.1";
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.snapSound = _this.add.audio('snapSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.cmusic = _this.add.audio('celebr');
        _this.coinFall = _this.add.audio('coinFall');
        _this.cashOut = _this.add.audio('cashOut');

    },
    
	create:function(game){
		_this.amplify = null;
		_this.eraserclicked=0;
        coinset=null;
        _this.checkno=0;
        grptween=this.add.group();
        _this.YellowAnimInc = 0;
        _this.YellowAnimInc1 = 0;
        _this.GreenAnimInc = 0;
        _this.BlueAnimInc = 0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        _this.someVar = 0;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.checkMangoes = 0;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.rightAns = "";
        randarr = new Array();
        yellowCoinArray = new Array();
        _this.toDisplayNoPad = 0;
        //baudio.play(); 
		//baudio.loopFull(1);
         _this.w = 8;
         _this.z = 0;
         _this.wrong = true;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9];
         _this.qArrays2 = [1,2,3,4,5,6];
        _this.displayNumber1 = 0;
        _this.displayNumber2 = 0;
       
        _this.animArraylength = 9;
         
        
        
         _this.count=0;
         _this.count1=0;
		 _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level721_bg1');
            _this.navBar = _this.add.sprite(0,0,'Level721_navBar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(305,6,'Level721_timebg');
             /*_this.topicOutline = _this.add.sprite(70,5,'Level721_topicOutline');
             _this.practice = _this.add.sprite(78,10,'Level721_practice');
             var numTxt2 = this.add.text(210,24, 'Addition');
            numTxt2.anchor.setTo(0.5);
            numTxt2.align = 'center';
            numTxt2.font = 'Alte Haas Grotesk';
            numTxt2.fontWeight = 'normal';
            numTxt2.fontSize = 20;
            numTxt2.fill = '#ffffff';
            numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
        
             _this.timeDisplay = _this.add.text(330,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            ////console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level721_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
        
        _this.coinPannel = _this.add.sprite(70,58,'Level721_coinMachinePannel');
        _this.Pannel = _this.add.sprite(624,125,'Level721_pannel1');
        
        _this.LeverGreen = _this.add.sprite(110,67,'Level721_LeverGreen');
         _this.LeverGreen.name = "LeverGreen";
        _this.LeverBlue = _this.add.sprite(290,67,'Level721_LeverBlue');
         _this.LeverBlue.name ="LeverBlue";
        _this.LeverYellow = _this.add.sprite(470,67,'Level721_LeverYellow');
        _this.LeverYellow.name = "LeverYellow";
	//	_this.LeverYellowanim = _this.LeverYellow.animations.add('Level721_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
      //  _this.LeverYellowanim.play(2,true);

        _this.Levercoin1 = _this.add.sprite(505,160,'Level721_coin1Anim');//515
        _this.Levercoin1.visible = false;
        _this.Levercoin2 = _this.add.sprite(510,160,'Level721_coin1Anim');//560
        _this.Levercoin2.visible = false;
        _this.Levercoin10 = _this.add.sprite(305,160,'Level721_coin10Anim');//355
        _this.Levercoin10.visible = false; 
        
        _this.LeverGreenNumber = _this.add.sprite(129,99,'Level721_numberVSmall');
        _this.LeverGreenNumber.frame = 0;
        _this.LeverBlueNumber = _this.add.sprite(309,99,'Level721_numberVSmall');
         _this.LeverBlueNumber.frame = 0;
        _this.LeverYellowNumber = _this.add.sprite(489,99,'Level721_numberVSmall');
        _this.LeverYellowNumber.frame = 0;
        
        /* _this.numBox1 = _this.add.sprite(692,278,'Level721_numberBox');
         _this.numBox1.name = "numBox1";*/
         _this.numBox2 = _this.add.sprite(718,300,'Level721_numberBox');
         _this.numBox2.name = "numBox2";
         _this.numBox3 = _this.add.sprite(789,300,'Level721_numberBox');
         _this.numBox3.name = "numBox3";
        
        _this.askNumber1 = _this.add.sprite(795,148,'Level721_numberSmall');
         _this.askNumber1.frame = 1;
       //  _this.askNumber1.scale.setTo(1.3,1.3);
        
            _this.askNumber2 = _this.add.sprite(795,210,'Level721_numberSmall');
        _this.askNumber2.alpha=0;
            _this.askNumber2.frame = 1;
       //     _this.askNumber2.scale.setTo(1.3,1.3);
        

        _this.numBoxNum1 = _this.add.sprite(698,274,'Level721_numberSmall');
        _this.numBox1Pressed = false;
        _this.numBoxNum1.scale.setTo(0.9,0.9);
        //_this.numBoxNum1.frame  = 1;
        _this.numBoxNum1.visible = false;
        
        _this.numBoxNum2 = _this.add.sprite(732,310,'Level721_numberSmall');
         _this.numBox2Pressed = false;
        _this.numBoxNum2.scale.setTo(0.9,0.9);
        //_this.numBoxNum2.frame  = 1;
        _this.numBoxNum2.visible = false;
        
        _this.numBoxNum3 = _this.add.sprite(803,310,'Level721_numberSmall');
         _this.numBox3Pressed = false;
        _this.numBoxNum3.scale.setTo(0.9,0.9);
        //_this.numBoxNum3.frame  = 1;
        _this.numBoxNum3.visible = false;
        
         //_this.yellowcoin=this.add.sprite(0,0,'Level721_Coin1');
          //      _this.yellowcoin.visible=true;
        
         _this.Level721_OneToHundred1 = _this.add.sprite(124,70,'Level321_OneToHundred');
        _this.Level721_OneToHundred10 = _this.add.sprite(304,70,'Level321_OneToHundred');
        _this.Level721_OneToHundred10.frame = 1;
        _this.Level721_OneToHundred100 = _this.add.sprite(484,70,'Level321_OneToHundred');
        _this.Level721_OneToHundred100.frame = 2;  

		_this.Level321_OneToHundredE1 = _this.add.sprite(665,115,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10 = _this.add.sprite(735,115,'Level321_OneToHundred');
        _this.Level321_OneToHundredE10.frame = 1;
        _this.Level321_OneToHundredE100 = _this.add.sprite(810,115,'Level321_OneToHundred');
        _this.Level321_OneToHundredE100.frame = 2;
		
        
        _this.plusSign = _this.add.sprite(650,200,'Level723_plusSign');
        //_this.insertbox1 = _this.add.sprite(330,145,'Level721_coininsertbox','a1');
        _this.insertbox2 = _this.add.sprite(459,154,'Level721_coininsertbox','a1');
        _this.insertbox2.name="dragcoin";
         _this.generateStarsForTheScene(6);
        //  _this.no1++;
        //_this.getVoice();
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
      _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
    },

    getQuestion:function(target)
    {  //console.log("get Question "+_this.no1);

     _this.noofAttempts=0;
        _this.AnsTimerCount=0;
       
        _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
        _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
     
     _this.yellowcoin=_this.add.sprite(0,0,'Level721_Coin1');
        _this.yellowcoin.visible=true;
        
      //  _this.timer = _this.time.create(false);
        
         _this.toCheckNumberPad = true;
          //  Set a TimerEvent to occur after 2 seconds
         
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
         // _this.timer.start();
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.AnsTimerCount++;
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
        _this.questionid = 1;
        _this.inputDownFunctionForLeverAndBox();
        _this.displayNumber1 = _this.qArrays[0];
        
     //   _this.qArrays = _this.shuffle( _this.qArrays);
      //  _this.qArrays2 = _this.shuffle( _this.qArrays2);
        _this.qArrays = _this.shuffle( _this.qArrays);
        _this.qArrays2 = _this.shuffle( _this.qArrays2);
        _this.displayNumber2 = _this.qArrays2[0];
   //  //console.log("before display 1 =="+_this.displayNumber1);
          //  //console.log("before display 2 =="+_this.displayNumber2);
        _this.checkno = _this.displayNumber2 + _this.displayNumber1;
        if(_this.checkno <= 10){
            _this.checkno = 10 - _this.checkno;
            _this.displayNumber1 = _this.displayNumber1+_this.checkno;
            _this.displayNumber2 = _this.displayNumber2+_this.checkno;//+Math.floor(Math.random()*3);
            
         //   //console.log("check num display 1 =="+_this.displayNumber1);
          //  //console.log("check num display 2 =="+_this.displayNumber2);
        }
        _this.askNumber1.frame = _this.displayNumber1+1;
        _this.askNumber2.frame = _this.displayNumber2 + 1;
        _this.rightAns = _this.displayNumber1 + _this.displayNumber2;
     
        
     _this.assign1=_this.displayNumber1;
     _this.assign=_this.displayNumber2;
    
     if(_this.sceneCount==1){
         _this.timeupdate = 1000;
     }else{
         _this.timeupdate = 2000;
     }
     this.time.events.add(_this.timeupdate,function(){
          _this.askNumber2.alpha=1;
     },this);
   
    // //console.log("first num"+ Number(_this.assign1));
    // //console.log("second num"+ Number(_this.assign));
     
     _this.addYellowCoins();
    },
  inputDownFunctionForLeverAndBox:function(){
        //  _this.rightbtn.frame=0;
      //_this.AnsTimerCount++;
      _this.Coin1 = _this.add.sprite(500,210,'Level721_Coin1');//510 210
      _this.Coin1.visible = false;
      _this.Coin3 = _this.add.sprite(560,210,'Level721_Coin1');
      _this.Coin3.visible = false;
      
      //_this.Coin1.frame=7;
      _this.Coin10 = _this.add.sprite(305,210,'Level721_Coin10');//330,145
      _this.Coin10.visible = false;
      _this.LeverYellow.inputEnabled = true;
      _this.LeverYellow.input.useHandCursor = true;
	  _this.LeverYellowanim = _this.LeverYellow.animations.add('Level721_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
      _this.LeverYellowanim.play(2,true);
      _this.LeverYellow.events.onInputDown.add(_this.leve1Clicked,_this);
     
       _this.numBox2.inputEnabled = true;
       _this.numBox2.name="numbox2";
       _this.numBox2.input.useHandCursor = true;
       _this.numBox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
       _this.numBox3.inputEnabled = true;
       _this.numBox3.name="numbox3";
       _this.numBox3.input.useHandCursor = true;
       _this.numBox3.events.onInputDown.add(_this.numberBoxClicked,_this);
  },
    
 /*gotoFirstQuestion:function(){

     
     _this.questionid = "7.2_1#SCR-"+_this.sceneCount;
     _this.inputDownFunctionForLeverAndBox();
     _this.displayNumber1 = 6;
     _this.askNumber1.frame = 7;
     _this.displayNumber2 = 3;
     _this.askNumber2.frame =4;
     _this.rightAns = 603;
     },    */
 
    numberBoxClicked:function(target){
        
        
        _this.clickSound.play();
        
        if(target.name=="numbox2"){
            _this.numBox2Pressed = true;
            _this.numBox2.frame = 1;
            _this.numBox3Pressed =false;
            _this.numBox3.frame =0;
        }else{
            _this.numBox3Pressed = true;
            _this.numBox3.frame = 1;
            _this.numBox2Pressed =false;
            _this.numBox2.frame =0;
        }

        
        if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            //_this.addNumberPad();
        }
    },
   
   
    leve1Clicked:function(target,frame){
        _this.coinFall.play();
         ////console.log("_this.coinset in func=="+_this.coinset);   
//         //console.log("Im Clicked "+target.name);
//        //console.log("_this.YellowAnimInc"+_this.YellowAnimInc);
//        //console.log("_this.YellowAnimInc2"+_this.YellowAnimInc1);
//
//        //console.log("_this.displayNumber2"+_this.displayNumber2);
        
        if(target.name == "LeverYellow"){
              
            if(_this.YellowAnimInc<_this.displayNumber2)
            {
                
                    ////console.log("sum is==="+(_this.displayNumber1 + _this.YellowAnimInc));
                if(_this.displayNumber1+_this.displayNumber2 < 10)
                   _this.lessthan=1;
                if(_this.displayNumber1 + _this.YellowAnimInc < 9){
                     
                    _this.yellowcoin.visible=true;
                _this.LeverYellow.animations.add('Level721_LeverYellow',[0,1,2,3,4,5,0]);
                
                _this.LeverYellow.animations.play('Level721_LeverYellow');  

                _this.Levercoin1.visible = true;
                _this.Levercoin1.animations.add('Level721_coin1Anim',_this.animArrayCoin1);
                _this.Levercoin1.animations.play('Level721_coin1Anim');
                _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
					
					 _this.LeverYellowanim.play(2,true);
					 
              //      //console.log("on complete");
                _this.LeverYellowNumber.frame++;
                _this.Coin1.visible = true;
                _this.Levercoin1.visible = false;
                _this.Coin1.frame =  _this.YellowAnimInc;
                    
                   //  //console.log("it is not full"+_this.Coin1.frame);
                    _this.YellowAnimInc++;
                    _this.Coin1.x=500;
                    if((Number(_this.assign1))==1)
                    _this.Coin1.y=190;
                    else if((Number(_this.assign1))==2)
                        _this.Coin1.y=171;
                    else if((Number(_this.assign1))==3)
                        _this.Coin1.y=152;
                     else if((Number(_this.assign1))==4)
                            _this.Coin1.y=133;
                     else if((Number(_this.assign1))==5)
                            _this.Coin1.y=114;
                     else if((Number(_this.assign1))==6)
                            _this.Coin1.y=95;
                     else if((Number(_this.assign1))==7)
                            _this.Coin1.y=76;
                     else if((Number(_this.assign1))==8)
                            _this.Coin1.y=57;
                    else if((Number(_this.assign1))==9)
                            _this.Coin1.y=38;
                _this.animArrayCoin1.pop();
                    // //console.log("coin y===="+_this.Coin1.y);
                   //  //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
                }, this);
                }else if(_this.displayNumber1 + _this.YellowAnimInc == 9){
					_this.LeverYellow.inputEnabled=false;
                    _this.sum2=0;
                    _this.glow=_this.add.sprite(509,203,'Level721_glow');
                    _this.glow.visible=false;
                    _this.glow.height+=26;
                    _this.glow.width+=10;
                    
                    _this.LeverYellow.animations.add('Level721_LeverYellow',[0,1,2,3,4,5,0]);
                _this.LeverYellow.animations.play('Level721_LeverYellow');  
                _this.coinFall = _this.add.audio('coinFall');
                _this.coinFall.play();
                _this.Levercoin1.visible = true;
                _this.Levercoin1.animations.add('Level721_coin1Anim',_this.animArrayCoin1);
                _this.Levercoin1.animations.play('Level721_coin1Anim');
                _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
					
					 _this.LeverYellowanim.play(2,true);
					
                _this.LeverYellowNumber.frame++;
                    ////console.log("on complete=9");
                    if(_this.displayNumber1==9){
                        _this.Coin1.y=38;
                    }
                _this.Coin1.visible = true;
                _this.Levercoin1.visible = false;
                _this.Coin1.frame =  _this.YellowAnimInc;
                        _this.YellowAnimInc++;
                        ////console.log("it is full"+_this.Coin1.frame);
                       
                       /* _this.Coin2=this.add.sprite(529,217,'Level721_coindrag');
                        _this.Coin2.inputEnabled=true;
                        _this.Coin2.name="dragcoin";
                        _this.Coin2.input.useHandCursor = true;
                        _this.Coin2.input.enableDrag(true);
                        _this.Coin2.events.onDragStart.add(this.onDragStart, this);
                        _this.Coin2.events.onDragStop.add(this.onDragStop, this);
                        _this.Coin2.x=520;*/
                       // _this.Coin1.x=510;
                       
                        _this.yellowcoin.x=500;
                       
                        var tween=_this.add.tween(_this.Coin1);
                      //  var tween3=_this.add.tween(_this.Coin2);
                        var tween2=_this.add.tween(_this.yellowcoin);
                        var tween4=_this.add.tween(_this.glow);
                    
                        tween.to({ x: 420 }, 0, 'Linear', true, 0);
                        tween2.to({ x: 420 }, 0, 'Linear', true, 0);
                      //  tween3.to({ x: 479 }, 0, 'Linear', true, 0);
                        tween4.to({ x: 410 }, 0, 'Linear', true, 0);
                        tween4.onComplete.add(function(){
							
							_this.LeverYellowanim.stop(null,true);
							_this.LeverYellow.frame = 0;
                            _this.Coin1.visible=false;
                            _this.yellowcoin.visible=false;
                            _this.newcoinset=_this.add.sprite(420,209,'Level721_Coin1','Symbol 15 copy 2 instance 10009');
                            _this.newcoinset.inputEnabled=true;
                            _this.newcoinset.name="dragcoin";
                            _this.newcoinset.input.enableDrag(true);
                            _this.newcoinset.events.onDragStart.add(this.onDragStart, this);
                            _this.newcoinset.events.onDragStop.add(this.onDragStop, this);
                            _this.glow.width+=10;
                            _this.glow.x-=6;
                            _this.glow.visible=true;
                            _this.insertbox2anim = _this.insertbox2.animations.add('Level721_coininsertbox',["a2","a1"]);
                            _this.insertbox2anim.play(1.5,true);
                        },this);
                    
                    _this.animArrayCoin1.pop();
                    
                    // //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc);
                }, this);
                }
            }
            
            if(_this.displayNumber1 + _this.YellowAnimInc > 9){
               
                if(_this.YellowAnimInc1<_this.displayNumber2){
                    ////console.log("it is greater");
                    
                    _this.sum2=Number(_this.displayNumber1)+Number(_this.displayNumber2) ;
                    _this.sum2=_this.sum2-10;
                    ////console.log("sum2=="+_this.sum2);
                   // //console.log("_this.YellowAnimInc1=="+_this.YellowAnimInc1);
                    if(_this.YellowAnimInc1<_this.sum2){
                        _this.LeverYellow.animations.add('Level721_LeverYellow',[0,1,2,3,4,5,0]);
                _this.LeverYellow.animations.play('Level721_LeverYellow');  
                _this.coinFall = _this.add.audio('coinFall');
                _this.coinFall.play();
                _this.Levercoin2.visible = true;
                _this.Levercoin2.animations.add('Level721_coin1Anim',_this.animArrayCoin1);
                _this.Levercoin2.animations.play('Level721_coin1Anim');
                _this.Levercoin2.animations.currentAnim.onComplete.add(function () {
					_this.LeverYellowanim.play(2,true);
                  //  //console.log("on complete>9");
                _this.LeverYellowNumber.frame++;
                _this.Coin3.visible = true;
                _this.Levercoin2.visible = false;
                         _this.Coin3.frame =  _this.YellowAnimInc1;
                  //  //console.log("_this.Coin3.frame=="+_this.Coin3.frame);
                         
                         _this.Coin3.x=494;//543
                     _this.Coin3.y=210;
                       _this.YellowAnimInc1++;
                    _this.animArrayCoin1.pop();
					
					if(_this.YellowAnimInc1 == (_this.sum2 ) && coinset=="full"){
					_this.LeverYellowanim.stop(null,true);
							_this.LeverYellow.frame = 0;
					}
							
 }, this);
                    // //console.log(" _this.YellowAnimInc "+ _this.YellowAnimInc1);
					if(_this.YellowAnimInc1 == (_this.sum2 - 1) && coinset=="full"){
                            _this.displayNopad=true;
                           _this.addNumberPad();
                        }
                    }
                   else{
                   // //console.log("no sound");
                    _this.coinFall.stop();
                    _this.LeverYellow.inputEnabled=false;
                }                 

                    
                }
                    
            }
          
        }
           /* //console.log("_this.coinset=="+_this.coinset);   
        //console.log("_this.sum2=="+_this.sum2);   
        if((_this.YellowAnimInc1==(_this.sum2-1) && _this.coinset=="full")){
            _this.displayNopad=true;
            _this.addNumberPad();
        }else if(_this.coinset=="full" && (_this.sum2==0)){
            _this.displayNopad=true;
            _this.addNumberPad();
        }else if(_this.YellowAnimInc==(Number(_this.assign)-1 ) && (this.sum2!=0)){
            
            _this.displayNopad=true;
            _this.addNumberPad();
        }*/
     // //console.log("_this.coinset=="+coinset);
             if(_this.YellowAnimInc == (Number(_this.assign)-1 ) && _this.lessthan==1){
                // _this.coinFall.stop();
                 _this.LeverYellow.inputEnabled=false;
           // //console.log("dmm");
                 if(_this.displayNopad==false){
                     _this.displayNopad=true;
                    _this.addNumberPad();
                 }
            
        }
        
        /*else if(_this.sum2==1 && _this.coinset=="full"){
                                    //console.log("should be here drag");
                                    _this.displayNopad=true;
                                    _this.addNumberPad();
                                }*/
        
        
     
       /* if(  _this.toDisplayNoPad == ( _this.YellowAnimInc))
            {
            
                 if( _this.toCheckNumberPad)
                {
           
                //console.log("im here hre hre");
                  _this.addNumberPad();
                 _this.numBox2.frame = 1;
                 _this.numBox2Pressed = true;
                 _this.toCheckNumberPad = false;
               }
            }*/
    
    },
    
    addYellowCoins:function(){       
        ////console.log("first num in yellow"+ Number(_this.assign1));
    // //console.log("second num"+ Number(_this.assign));
        _this.yellowcoin.x=500;
       // //console.log("www=="+_this.yellowcoin.x);
        _this.yellowcoin.y=210;
        _this.yellowcoin.frame=Number(_this.assign1) -1;
       // //console.log(" _this.yellowcoin.frame"+_this.yellowcoin.frame);
        
    },
    addNumberPad:function(){
        
        _this.numBackground = this.add.sprite(480,505,'Level721_numBG');
        _this.numBackground.anchor.setTo(0.5);
        _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
        _this.numBox3Pressed=true;
        _this.numBox3.frame = 1;
        _this.numBox2.frame = 0;
        //objGroup = this.add.group();
        _this.x = 80;
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'Level721_NumberKey');  
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.anchor.setTo(0.5);
            if(i<9)
                _this.numbg.name = i+1;
            else
                 _this.numbg.name = 0;
            _this.numbg.frame = i;
            
            _this.numTxt = this.add.text(-2,1,'');
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font='myfont';
            _this.numTxt.fontWeight = 'normal';
            _this.numTxt.fontSize = 45;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#000000';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild( _this.numTxt);
            
            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
        _this.eraser = _this.numGroup.create(_this.x+30,508,'Level721_erase','Symbol 14 copy 5 instance 10000');
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.20,1.20);
        _this.eraser.name = "eraser";
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
       
        
        _this.rightbtn = _this.numGroup.create(_this.x+95,508,'Level721_rightmark','Symbol 14 copy instance 10000');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.20,1.20);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = false;
        //_this.rightbtn.input.useHandCursor = true;
        
         _this.eraser.events.onInputDown.add(function(){
			_this.eraserclicked=1;
             _this.eraser.frame=1;
             _this.clickSound.play();

                if(_this.numBox1Pressed){
					_this.numBox1.frame = 1;
                    _this.numBoxNum1.visible = false;
					_this.numBox1Pressed = true;
                }
                else if(_this.numBox2Pressed){
					_this.numBox2.frame = 1;
                    _this.numBoxNum2.visible = false;
					_this.numBox2Pressed = true;
                }
                else if(_this.numBox3Pressed)
                {
					_this.numBox3.frame = 1;
                    _this.numBoxNum3.visible = false;
					_this.numBox3Pressed = true;
                }
                
                if(_this.numBoxNum1.visible ==false || _this.numBoxNum2.visible==false || _this.numBoxNum3.visible==false  ){
                 this.time.events.add(500,function(){
                      _this.eraser.frame=0;                
                 },this);
                 
             }
                   
                    
                           
                    _this.toCheckNumberPad = false;
             
             
         },this);
        
            
        
         
       
        if(_this.displayNopad){
           // //console.log("llllllllllllllllllllllll");
            _this.numGroup.y = 50;
             _this.displayNopad = false;
           // _this.LeverYellow.events.onInputDown.removeAll();
            _this.tween = _this.add.tween(_this.numGroup);
            _this.tween.to({ y: 0 }, 0, 'Linear', true, 0); 
        }
        
    },
    
     numClicked:function(target){
         _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
         _this.rightbtn.events.onInputDown.add(function(target){
             _this.rightbtn.frame=1;
             _this.noofAttempts++;
             if(_this.glow)
             _this.glow.destroy();
            
             _this.clickSound.play();
             _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3;
            // //console.log("selected Answer "+ _this.selectedAns);
            if( _this.selectedAns== _this.rightAns)  
                {
                    ////console.log("correct");
					_this.eraserclicked=0;
                    target.events.onInputDown.removeAll();
                    _this.cmusic.play();
                    if(_this.timer1!=null)
                    {
                        _this.timer1.stop();
                       _this.timer1 = null;
                    }
                    
                   //  var currentTime = window.timeSaveFunc();
                      /*  var saveAsment = 
                        { 
                            id_game_play: _this.savedVar,
                            id_question: _this.questionid,  
                            pass: "Yes",
                            time2answer: AnsTimerCount,
                            attempts: _this.noofAttempts,
                           // date_time_submission: currentTime, 
                            access_token: window.acctkn 
                        }

                      absdsjsapi.saveAssessment(saveAsment);*/
//                      //console.log("_this.questionid=="+_this.questionid);
//                      //console.log("_this.AnsTimerCount=="+_this.AnsTimerCount);
//                      //console.log("_this.noofAttempts=="+_this.noofAttempts);
//                      //console.log("_this.sceneCount=="+_this.sceneCount);
                telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                    
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     _this.count1++;
                   
                    _this.numBox3.frame = 1;
                    _this.numGroup.y = 00;
                    _this.tween1 = _this.add.tween(_this.numGroup);
                    _this.tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                     _this.time.events.add(2000, function(){ _this.removeEverthing();}, _this);
                }
            else
                { 
					_this.eraserclicked=0;
                    ////console.log("wrong"+_this.rightbtn.frame);
                    _this.checkno=0;
                    _this.displayNopad=false;
                    _this.wmusic.play();
                    _this.insertbox2.frame=0;
                    coinset=null;
                    _this.numBox3.frame = 1;
                    _this.numGroup.destroy();
                    //_this.numBox2.frame = 1;
                    _this.numBox3Pressed = true;
                    _this.numBox2Pressed = false;
                    if(_this.animArrayCoin1)
                        _this.animArrayCoin1=new Array();
                    _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
                    _this.numBox3.frame = 0;
                    
                    _this.numBox2.frame = 0;
                    
                    _this.toCheckNumberPad = false;
                    
                   // shake.shake(10, txtbox);
                    _this.selectedAns = "";
                    _this.selectedAns1="";
                    _this.selectedAns2="";
                    _this.selectedAns3="";
                   
                    if(_this.Coin1){
                        _this.Coin1.destroy();
                    }
                    if(_this.Coin10){
                        _this.Coin10.destroy();
                    }
                    
                    if(_this.Coin3){
                        _this.Coin3.destroy();
                    }
                    if(_this.yellowcoin){
                        _this.yellowcoin.visible=false;
                    }
                    if(_this.newcoinset){
                        _this.newcoinset.destroy();
                    }
                   
                    _this.YellowAnimInc=0;
                    _this.YellowAnimInc1=0;
                    _this.BlueAnimInc=0;
                    
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.numBox3Pressed = false;
                    
                    _this.LeverYellow.events.onInputDown.removeAll();
                  
                    _this.rightbtn.events.onInputDown.removeAll();
                     _this.numBoxNum1.visible = false;
                     _this.numBoxNum2.visible = false;
                     _this.numBoxNum3.visible = false;
                    _this.yellowcoin=_this.add.sprite(0,0,'Level721_Coin1');
                    _this.yellowcoin.visible=true;
                    if(_this.LeverYellow){
                        _this.LeverYellow.destroy();
                    }
                    _this.LeverYellow = _this.add.sprite(470,67,'Level721_LeverYellow');//505
                    _this.LeverYellow.name = "LeverYellow";
                    _this.LeverYellowNumber.destroy();
                   // _this.LeverBlueNumber.destroy();
                    _this.LeverYellowNumber = _this.add.sprite(489,99,'Level721_numberVSmall');//518
                    _this.LeverYellowNumber.frame = 0;
                    _this.LeverBlueNumber.frame = 0;
                       this.addYellowCoins();
                    _this.inputDownFunctionForLeverAndBox();
                    
					
					 _this.LeverYellowanim = _this.LeverYellow.animations.add('Level721_LeverYellow',["Symbol 21 instance 10005","Symbol 21 instance 10000"]);
					 _this.LeverYellowanim.play(2,true);
                    
                    
                    
                    
                  
                }
  
        },this);
         
          // //console.log(target.name);
         
         _this.clickSound.play();
         if(_this.numBox2.frame==1){
             _this.numBox2Pressed=true;
         }else if(_this.numBox3.frame==1){
             _this.numBox3Pressed=true;
         }
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name+1;
             
            // _this.numBox1.frame = 0;
             
             _this.numBox3.frame = 1;
             _this.numBox3Pressed = true;
             _this.numBox1Pressed = false;
         }
         else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name+1;
             if(_this.selectedAns2>=0 && _this.eraserclicked==0){
                 _this.numBox2.frame = 1;
                // _this.numBox1.frame = 0;
                 _this.numBox3.frame = 0;
             }else{
				  if(_this.eraserclicked==0){
                 	 _this.numBox2.frame = 1;
                	 // _this.numBox1.frame = 0;
                	 _this.numBox3.frame = 0;
				}
             }
             
            
             _this.numBox1Pressed = false;
             _this.numBox3Pressed = false;
             _this.numBox2Pressed = true;
         }
        else if(_this.numBox3Pressed)
             {
                 ////console.log("YYYYYYYYYYYY");
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 
                 _this.numBoxNum3.frame = target.name+1;
                 if(_this.selectedAns3>=0 && ((_this.displayNumber1+ _this.displayNumber2)>10) && _this.eraserclicked==0){
                    // //console.log("selected greater");
                     _this.numBox2.frame = 1;
                //     _this.numBox1.frame = 0;
                     _this.numBox3.frame = 0;
                     _this.numBox1Pressed = false;
                     _this.numBox2Pressed = true;
                     _this.numBox3Pressed = false;
                 }else if(_this.selectedAns3>=0 && ((_this.displayNumber1+ _this.displayNumber2)<=10) && _this.eraserclicked==0){
                    // //console.log("selected lesser"); 
                     _this.numBox2.frame = 1;
                   //  _this.numBox1.frame = 0;
                     _this.numBox3.frame = 0;
                     _this.numBox1Pressed = false;
                     _this.numBox2Pressed = true;
                     _this.numBox3Pressed = false;
                 }else{
                   //  //console.log("not selected");
					if(_this.eraserclicked==0){
                     _this.numBox2.frame = 0;
                   //  _this.numBox1.frame = 0;
                     _this.numBox3.frame = 1;
                     _this.numBox1Pressed = false;
                     _this.numBox2Pressed = true;
                     _this.numBox3Pressed = false;
				    }
                 }
                 
            // _this.numBox1.frame = 1;
                 
             }
//         //console.log("1 "+_this.selectedAns1);
//         //console.log("2 "+_this.selectedAns2);
//         //console.log("3 "+_this.selectedAns3);
         
         /*if(_this.numBox2Pressed == true){
             _this.numBox2.frame = 0;
             _this.numBox1.frame = 1;
            _this.numBox1Pressed = true;
             _this.numBox2Pressed == false;
         }*/
         
//         //console.log("2 "+this.numBox1Pressed);
//         //console.log("2 "+this.numBox2Pressed);
//         //console.log("2 "+this.numBox3Pressed);
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
        _this.numGroup.destroy();
        _this.displayNopad=false;
        _this.checkno=0;
        _this.insertbox2.frame=0;
        coinset=null;
         _this.no1++;
        if(_this.glow)
        _this.glow.destroy();
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
       _this.yellowcoin.destroy();
       // _this.numBox1.frame = 0;
            _this.numBox2.frame = 0;
            _this.numBox3.frame = 0;
        ////console.log("--------------------------"+ _this.no1);
        if( _this.no1<6)
        {
            // _this.no1++;
              _this.wrong = true;
            ////console.log("here its");
            if(_this.timer1){
                _this.timer1.stop();
            }
             
                _this.count =0;
                 _this.sceneCount++;
            
            
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.askNumber2.frame =0;
            _this.rightAns = 503;
             _this.numBox3Pressed = false;
             _this.Levercoin1.visible = false;
             _this.Levercoin10.visible = false;
            _this.LeverGreenNumber.frame = 0;
            _this.LeverYellowNumber.frame = 0;
            _this.LeverBlueNumber.frame = 0;
            
            if(_this.Coin1)
            _this.Coin1.destroy();
            if(_this.Coin10)
            _this.Coin10.destroy();
            if(_this.Coin3)
            _this.Coin3.destroy();
            if(_this.newcoinset){
                _this.newcoinset.destroy();
            }
            _this.YellowAnimInc=0;
            _this.YellowAnimInc1=0;
            _this.BlueAnimInc=0;
            _this.numGroup.destroy();
            _this.numBoxNum1.visible = false;
            _this.numBoxNum2.visible = false;
             _this.numBoxNum3.visible = false;
            _this.animArrayCoin10 =null;
            _this.animArrayCoin1 =null;
            _this.selectedAns = " ";
            _this.numBox2Pressed = false;
            _this.numBox3Pressed = false;
            _this.LeverYellow.events.onInputDown.removeAll();
            _this.rightbtn.events.onInputDown.removeAll();
            this.time.events.add(500,function(){
                _this.getQuestion();
            },this);
            
            
        }
        else
        {
            if(_this.timer1)
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
            _this.state.start('unity7_2_1Score');
        }
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'Level721_starAnim');
            
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
    
	
    update:function(){
        /*if(_this.updt==1){
            _this.coinset="full";
            
        }*/
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
	
    getVoice:function(){
        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.1/English/Game 7.2.1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.1/Hindi/Game 7.2.1.mp3");
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.1/Kannada/Game 7.2.1.mp3");
        }
		else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/7.2.1/Odiya/7.2.1.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
                    
        _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
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
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}

            
        },
    
    onDragStart:function(target)
        {
            _this.glow.destroy();
            _this.clickSound.play();
           // //console.log("target name=="+target.name);
        },
    
    onDragStop:function(target)
        {
            _this.snapSound.play();    
            if(this.checkOverlap(target,_this.insertbox2)){
               
               if(target.name==_this.insertbox2.name)
                        {
                            _this.cashOut.play();
                            ////console.log("overlapped and matched"); 
                            _this.glow.destroy();
                            _this.newcoinset.destroy();
                            _this.Coin1.destroy();
                            _this.yellowcoin.destroy();
                            var yellowcoinreverse = this.add.sprite(440,145,'Level721_yellowcoinreverse','Symbol 15 copy 4 instance 10000');
                            var yellowcoinreverseanim=yellowcoinreverse.animations.add('reverse');
                            yellowcoinreverseanim.play();
                            yellowcoinreverseanim.onComplete.add(function () {
								 _this.LeverYellowanim.play(2,true);
								_this.LeverYellow.inputEnabled=true;
                                _this.cashOut.stop();
                                _this.coinFall.play();
                                coinset="full";
//                                //console.log("sum2==="+_this.sum2);
//                                //console.log("_this.YellowAnimInc=="+_this.YellowAnimInc);
//                                //console.log("coinset=="+coinset);
                                 if((_this.YellowAnimInc1==(Number(_this.displayNumber1)+Number(_this.displayNumber2)-10 ) && coinset=="full")){
                                     ////console.log("ggg");
                                    _this.displayNopad=true;
                                    _this.addNumberPad();
                                    }
                              
                                 _this.insertbox2.frame=0;
                                 _this.insertbox2anim.stop();
                                 _this.Levercoin10.visible = true;
                                 _this.Levercoin10.animations.add('Level721_coin10Anim',_this.animArrayCoin1);
                                 _this.Levercoin10.animations.play('Level721_coin10Anim');
                                 _this.Levercoin10.animations.currentAnim.onComplete.add(function () {
                                // _this.LeverBlueNumber.frame++;
                                 _this.Coin10.visible = true;
                                 _this.Levercoin10.visible = false;
                                 _this.Coin10.frame =  _this.BlueAnimInc;

                            },this);
                            
                        },this);
               }else{
                   target.x=510;
                   target.y=38;
               }
            }
},
    
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    
};