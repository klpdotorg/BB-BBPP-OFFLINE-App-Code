Game.nsf3_4level1=function(){};

Game.nsf3_4level1.prototype ={
    
    init:function(game)
    {
        _this= this;
        telInitializer.gameIdInit("NSF3_4",gradeSelected);
    },

    preload:function(game){
        if(!window.grade4NSF3_4){

            window.grade4NSF3_4 = true;

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

            this.load.image('nsf1_4_bgA',window.baseUrl+'assets/gradeAssets/nsf1.4/bg1.png');            
        this.load.image('3_4bg2', window.baseUrl+'assets/gradeAssets/nsf3.4/Bg.png');
        this.load.image('3_4bg', window.baseUrl+'assets/gradeAssets/nsf3.4/b2.png');
        this.load.image('3_4hand', window.baseUrl+'assets/gradeAssets/nsf3.4/hand.png');
        this.load.atlas('3_4num1', window.baseUrl+'assets/gradeAssets/nsf3.4/num1.png', window.baseUrl+'json/gradeJson/nsf3.4/num1.json');
        this.load.atlas('3_4num2', window.baseUrl+'assets/gradeAssets/nsf3.4/num2.png', window.baseUrl+'json/gradeJson/nsf3.4/num2.json');
        this.load.atlas('3_4num3', window.baseUrl+'assets/gradeAssets/nsf3.4/num3.png', window.baseUrl+'json/gradeJson/nsf3.4/num3.json');
        this.load.atlas('3_4num4', window.baseUrl+'assets/gradeAssets/nsf3.4/num4.png', window.baseUrl+'json/gradeJson/nsf3.4/num4.json');
        this.load.atlas('3_4num5', window.baseUrl+'assets/gradeAssets/nsf3.4/num5.png', window.baseUrl+'json/gradeJson/nsf3.4/num5.json');
        this.load.atlas('3_4num6', window.baseUrl+'assets/gradeAssets/nsf3.4/num6.png', window.baseUrl+'json/gradeJson/nsf3.4/num6.json');
        this.load.atlas('3_4num7', window.baseUrl+'assets/gradeAssets/nsf3.4/num7.png', window.baseUrl+'json/gradeJson/nsf3.4/num7.json');
        this.load.atlas('3_4num8', window.baseUrl+'assets/gradeAssets/nsf3.4/num8.png', window.baseUrl+'json/gradeJson/nsf3.4/num8.json');
        this.load.atlas('3_4num9', window.baseUrl+'assets/gradeAssets/nsf3.4/num9.png', window.baseUrl+'json/gradeJson/nsf3.4/num9.json');
        this.load.atlas('3_4num10', window.baseUrl+'assets/gradeAssets/nsf3.4/num10.png', window.baseUrl+'json/gradeJson/nsf3.4/num10.json');
        this.load.image('3_4square', window.baseUrl+'assets/gradeAssets/nsf3.4/square box.png');
        this.load.atlas('3_4box', window.baseUrl+'assets/gradeAssets/nsf3.4/box.png', window.baseUrl+'json/gradeJson/nsf3.4/box.json');
        this.load.atlas('3_4box1', window.baseUrl+'assets/gradeAssets/nsf3.4/box1.png', window.baseUrl+'json/gradeJson/nsf3.4/box1.json');
        this.load.atlas('3_4numberpad', window.baseUrl+'assets/gradeAssets/nsf3.4/numberpad.png', window.baseUrl+'json/gradeJson/nsf3.4/numberpad.json');
        this.load.atlas('3_4eraser', window.baseUrl+'assets/gradeAssets/nsf3.4/erase.png', window.baseUrl+'json/gradeJson/nsf3.4/erase.json');
        this.load.atlas('3_4tick', window.baseUrl+'assets/gradeAssets/nsf3.4/tickMark.png', window.baseUrl+'json/gradeJson/nsf3.4/tickMark.json');
        
        this.load.atlas('3_4n1', window.baseUrl+'assets/gradeAssets/nsf3.4/n1.png', window.baseUrl+'json/gradeJson/nsf3.4/n1.json');
        this.load.atlas('3_4n2', window.baseUrl+'assets/gradeAssets/nsf3.4/n2.png', window.baseUrl+'json/gradeJson/nsf3.4/n2.json');
        this.load.atlas('3_4n3', window.baseUrl+'assets/gradeAssets/nsf3.4/n3.png', window.baseUrl+'json/gradeJson/nsf3.4/n3.json');
        this.load.atlas('3_4n4', window.baseUrl+'assets/gradeAssets/nsf3.4/n4.png', window.baseUrl+'json/gradeJson/nsf3.4/n4.json');
        this.load.atlas('3_4n5', window.baseUrl+'assets/gradeAssets/nsf3.4/n5.png', window.baseUrl+'json/gradeJson/nsf3.4/n5.json');
        this.load.atlas('3_4n6', window.baseUrl+'assets/gradeAssets/nsf3.4/n6.png', window.baseUrl+'json/gradeJson/nsf3.4/n6.json');
        this.load.atlas('3_4n7', window.baseUrl+'assets/gradeAssets/nsf3.4/n7.png', window.baseUrl+'json/gradeJson/nsf3.4/n7.json');
        this.load.atlas('3_4n8', window.baseUrl+'assets/gradeAssets/nsf3.4/n8.png', window.baseUrl+'json/gradeJson/nsf3.4/n8.json');
        this.load.atlas('3_4n9', window.baseUrl+'assets/gradeAssets/nsf3.4/n9.png', window.baseUrl+'json/gradeJson/nsf3.4/n9.json');
        this.load.atlas('3_4n10', window.baseUrl+'assets/gradeAssets/nsf3.4/n10.png', window.baseUrl+'json/gradeJson/nsf3.4/n10.json');
        this.load.atlas('3_4n11', window.baseUrl+'assets/gradeAssets/nsf3.4/n11.png', window.baseUrl+'json/gradeJson/nsf3.4/n11.json');
        this.load.atlas('3_4n12', window.baseUrl+'assets/gradeAssets/nsf3.4/n12.png', window.baseUrl+'json/gradeJson/nsf3.4/n12.json');
        this.load.atlas('3_4n13', window.baseUrl+'assets/gradeAssets/nsf3.4/n13.png', window.baseUrl+'json/gradeJson/nsf3.4/n13.json');
        this.load.atlas('3_4n14', window.baseUrl+'assets/gradeAssets/nsf3.4/n14.png', window.baseUrl+'json/gradeJson/nsf3.4/n14.json');
        this.load.atlas('3_4n15', window.baseUrl+'assets/gradeAssets/nsf3.4/n15.png', window.baseUrl+'json/gradeJson/nsf3.4/n15.json');


    }

    },
    
	create:function(game)
    {
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.correctans=0;
        _this.questionNo = 0;
        _this.background;
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
        _this.starsGroup;
        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
        _this.no11 = 0;
        _this.count=0;
        _this.count1=0;
        _this.celebration= false;
         added=0;
         temp1 = 0;
         temp2 = 0;
         temp3 = 0;
         addcount = 0;

         _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount = 0;
        
        _this.qArrays = new Array();
        
        _this.qArrays = [1,2,3,4,5,6,7,8];
        
        _this.qArrays = _this.shuffle(_this.qArrays);

		_this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, '3_4bg2');
        
        _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
        _this.navBar.scale.setTo(1,1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){ 
               _this.backbtn.events.onInputDown.removeAll();
               _this.stopVoice();
               _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
               _this.state.start('grade1levelSelectionScreen',true,false); 
        },_this,0,1,2);
        
        _this.speakerbtn = _this.add.sprite(600,5,'grade11_speaker');
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

            _this.getVoice();

        },_this);
        
        _this.timebg = _this.add.sprite(305,6,'Level42C_timer');
       // _this.topicOutline = _this.add.sprite(70,5,'topicOutline');
       // _this.practice = _this.add.sprite(78,10,'practice');
        //_this.topic = _this.add.sprite(165,10,'topic');
        
        _this.timeDisplay = _this.add.text(331,22,_this.minutes + ' : '+ _this.seconds);
        _this.timeDisplay.anchor.setTo(0.5);
        _this.timeDisplay.align = 'center';
        _this.timeDisplay.font = 'myfont';
        _this.timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        _this.timeDisplay.fill = '#ADFF2F';
        
        _this.generateStarsForTheScene(6);
        _this.getQuestion();
        
        //language selection sounds
        //_this.getVoice();
    },
    
    
    updateTimer:function() 
    {
        _this.counterForTimer++;
        //console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes = _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes = _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
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
        console.log("getQuestion: "+_this.qArrays[_this.no11]);
        
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        
        _this.sceneCount++;

        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        
        _this.timer1.start();
        
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
       
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.questionid = 1;
        
        //_this.no11 = 0;
        console.log(_this.no11)
        
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
            
    	}
        
    },
    
    gotoFirstQuestion:function()
    {
       console.log("gotoFirstQuestion");
        _this.questionNo=1;
        _this.opt = 2;
        
        _this.objGrp = _this.add.group();
        
        _this.square = _this.add.sprite(200,300,'3_4square');
        _this.square.anchor.setTo(0.5);
        
        _this.box = _this.add.sprite(850,300,'3_4box');
        _this.box.anchor.setTo(0.5);
        _this.box.frame = 1;
        
        _this.num = _this.add.sprite(470,297,'3_4n6');
        _this.num.anchor.setTo(0.5);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        _this.correctGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;
        
        _this.opt1 = _this.add.sprite(120,290,'3_4num3');
        _this.opt1.anchor.setTo(0.5);
        _this.opt1.xpos = 120;
        _this.opt1.ypos = 290;
        _this.opt1.name = 'wrongAns';
       // _this.opt1.inputEnabled = true;
        _this.opt1.addChild(_this.targetchild1);
        _this.opt1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt2 = _this.add.sprite(200,320,'3_4n7');
        _this.opt2.anchor.setTo(0.5);
        _this.opt2.xpos = 200;
        _this.opt2.ypos = 320;
        _this.opt2.name = 'opt2';
        //_this.opt2.inputEnabled = true;
        _this.opt2.visible = false;
        _this.opt2.addChild(_this.targetchild2);
        _this.opt2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt3 = _this.add.sprite(260,280,'3_4n8');
        _this.opt3.anchor.setTo(0.5);
        _this.opt3.xpos = 260;
        _this.opt3.ypos = 280;
        _this.opt3.name = 'opt3';
        //_this.opt3.inputEnabled = true;
        _this.opt3.addChild(_this.targetchild3);
        _this.opt3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt1);
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(-5, -5, 30, 30);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(-5, -5, 30, 30);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(-5, 5, 30, 30);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(-5, 5, 30, 30);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(-5, 5, 30, 30);
        _this.child5.visible = false;
       
        _this.num11 = _this.add.sprite(509,242,'3_4n7');
        _this.num11.anchor.setTo(0.5);
        _this.num11.name = 'opt2';
        _this.num11.inputEnabled = true;
        _this.num11.addChild(_this.child1);
        _this.num11.visible = false;
        
        _this.num12 = _this.add.sprite(509,352,'3_4n7');
        _this.num12.anchor.setTo(0.5);
        _this.num12.name = 'opt2';
        _this.num12.inputEnabled = true;
        _this.num12.addChild(_this.child2);
        _this.num12.visible = false;
        
        _this.objGrp1.add(_this.num11);
        _this.objGrp1.add(_this.num12);
        
        _this.num21 = _this.add.sprite(508,224,'3_4n8');
        _this.num21.anchor.setTo(0.5);
        _this.num21.name = 'opt3';
        _this.num21.inputEnabled = true;
        _this.num21.addChild(_this.child3);
        _this.num21.visible = false;
        
        _this.num22 = _this.add.sprite(508,297,'3_4n8');
        _this.num22.anchor.setTo(0.5);
        _this.num22.name = 'opt3';
        _this.num22.inputEnabled = true;
        _this.num22.addChild(_this.child4);
        _this.num22.visible = false;
        
        _this.num23 = _this.add.sprite(508,370,'3_4n8');
        _this.num23.anchor.setTo(0.5);
        _this.num23.name = 'opt3';
        _this.num23.inputEnabled = true;
        _this.num23.addChild(_this.child5);
        _this.num23.visible = false;
        
        _this.objGrp2.add(_this.num21);
        _this.objGrp2.add(_this.num22);
        _this.objGrp2.add(_this.num23);
        
         n1 = 2;
         n2 = 3;
        
        _this.rightAns1 = 2;
        _this.rightAns2 = 4;
        _this.rightAns3 = 3;
        _this.rightAns4 = 6;
        
        _this.objGrp.add(_this.square);
        _this.objGrp.add(_this.box);
        _this.objGrp.add(_this.num);
        
        if(_this.no11 == 0)
            {
                  _this.option = _this.add.sprite(200,320,'3_4n7');
                  _this.option.anchor.setTo(0.5);
                
                  _this.hand = _this.add.sprite(235,355,'3_4hand');
                  _this.hand.anchor.setTo(0.5);
                  _this.hand.scale.setTo(0.5,0.5);
        
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:545 , y:280}, 1200, 'Linear', true, 0);
                
                var tween1 = _this.add.tween(_this.option);
                tween1.to({ x:510 , y:243}, 1200, 'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                            _this.time.events.add(400,function(){
                                _this.hand.destroy();
                                _this.option.destroy();
                                _this.opt1.inputEnabled = true; 
                                _this.opt2.inputEnabled = true;
                                _this.opt3.inputEnabled = true;
                                _this.opt2.visible = true;
                            },_this);
                          },_this);  
                
            }
        else
         {
             _this.opt1.inputEnabled = true; 
             _this.opt2.inputEnabled = true;
             _this.opt3.inputEnabled = true;
             _this.opt2.visible = true;
         }
        
    },
    
     gotoSecondQuestion:function()
    {
       console.log("gotoSecondQuestion");
       _this.questionNo=2;
        _this.opt = 3;
        
        _this.objGrp = _this.add.group();
        
        _this.square = _this.add.sprite(200,300,'3_4square');
        _this.square.anchor.setTo(0.5);
        
        _this.box = _this.add.sprite(850,300,'3_4box');
        _this.box.anchor.setTo(0.5);
        _this.box.frame = 1;
        
        _this.num = _this.add.sprite(463,300,'3_4n1'); //470,297
        _this.num.anchor.setTo(0.5);
        //_this.num.scale.setTo(0.9,0.55);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        _this.objGrp3 = _this.add.group();
        _this.correctGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;
        
        _this.opt1 = _this.add.sprite(120,290,'3_4n2');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.9,0.55);
        _this.opt1.xpos = 120;
        _this.opt1.ypos = 290;
        _this.opt1.name = 'opt1';
        //_this.opt1.inputEnabled = true;
        _this.opt1.visible = false;
        _this.opt1.addChild(_this.targetchild1);
        _this.opt1.events.onInputDown.add(_this.onDragstart,_this);
   
        _this.opt2 = _this.add.sprite(195,320,'3_4n5');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(0.9,0.55);
        _this.opt2.xpos = 195;
        _this.opt2.ypos = 320;
        _this.opt2.name = 'opt2';
        //_this.opt2.inputEnabled = true;
        _this.opt2.addChild(_this.targetchild2);
        _this.opt2.events.onInputDown.add(_this.onDragstart,_this);
 
        _this.opt3 = _this.add.sprite(260,290,'3_4n4');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(0.9,0.55);
        _this.opt3.xpos = 260;
        _this.opt3.ypos = 290;
        _this.opt3.name = 'opt3';
        //_this.opt3.inputEnabled = true;
        _this.opt3.addChild(_this.targetchild3);
        _this.opt3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt1);
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(-5, -5, 30, 30);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(-5, -5, 30, 30);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(-5, -5, 30, 30);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(-5, -5, 30, 30);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(-5, -5, 30, 30);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(-5, -5, 30, 30);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(-5, -5, 30, 30);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(-5, -5, 30, 30);
        _this.child8.visible = false;
        
        _this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(-5, -5, 30, 30);
        _this.child9.visible = false;
        
        _this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(-5, -5, 30, 30);
        _this.child10.visible = false;
        
        _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(-5, -5, 30, 30);
        _this.child11.visible = false;
        
        _this.num11 = _this.add.sprite(500,245,'3_4n2');
        _this.num11.anchor.setTo(0.5);  
        _this.num11.name = 'opt1';
        _this.num11.inputEnabled = true;
        _this.num11.addChild(_this.child1);
        _this.num11.visible = false;
        
        _this.num12 = _this.add.sprite(500,355,'3_4n2');
        _this.num12.anchor.setTo(0.5);
        _this.num12.name = 'opt1';
        _this.num12.inputEnabled = true;
        _this.num12.addChild(_this.child2);
        _this.num12.visible = false;
        
        _this.objGrp1.add(_this.num11);
        _this.objGrp1.add(_this.num12);
        
        _this.num21 = _this.add.sprite(501,211,'3_4n5');
        _this.num21.anchor.setTo(0.5);
        _this.num21.name = 'opt2';
        _this.num21.inputEnabled = true;
        _this.num21.addChild(_this.child3);
        _this.num21.visible = false;
        
        _this.num22 = _this.add.sprite(501,255,'3_4n5');
        _this.num22.anchor.setTo(0.5);
        _this.num22.name = 'opt2';
        _this.num22.inputEnabled = true;
        _this.num22.addChild(_this.child4);
        _this.num22.visible = false;
        
        _this.num23 = _this.add.sprite(501,300,'3_4n5');
        _this.num23.anchor.setTo(0.5);
        _this.num23.name = 'opt2';
        _this.num23.inputEnabled = true;
        _this.num23.addChild(_this.child5);
        _this.num23.visible = false;
        
        _this.num24 = _this.add.sprite(501,345,'3_4n5');
        _this.num24.anchor.setTo(0.5);
        _this.num24.name = 'opt2';
        _this.num24.inputEnabled = true;
        _this.num24.addChild(_this.child6);
        _this.num24.visible = false;
        
        _this.num25 = _this.add.sprite(501,389,'3_4n5');
        _this.num25.anchor.setTo(0.5);
        _this.num25.name = 'opt2';
        _this.num25.inputEnabled = true;
        _this.num25.addChild(_this.child7);
        _this.num25.visible = false;
        
        _this.objGrp2.add(_this.num21);
        _this.objGrp2.add(_this.num22);
        _this.objGrp2.add(_this.num23);
        _this.objGrp2.add(_this.num24);
        _this.objGrp2.add(_this.num25);
        
        _this.num31 = _this.add.sprite(501,217,'3_4n4');
        _this.num31.anchor.setTo(0.5);
        _this.num31.name = 'opt3';
        _this.num31.inputEnabled = true;
        _this.num31.addChild(_this.child8);
        _this.num31.visible = false;
        
        _this.num32 = _this.add.sprite(501,272,'3_4n4');
        _this.num32.anchor.setTo(0.5);
        _this.num32.name = 'opt3';
        _this.num32.inputEnabled = true;
        _this.num32.addChild(_this.child9);
        _this.num32.visible = false;
        
        _this.num33 = _this.add.sprite(501,328,'3_4n4');
        _this.num33.anchor.setTo(0.5);
        _this.num33.name = 'opt3';
        _this.num33.inputEnabled = true;
        _this.num33.addChild(_this.child10);
        _this.num33.visible = false;
        
        _this.num34 = _this.add.sprite(501,383,'3_4n4');
        _this.num34.anchor.setTo(0.5);
        _this.num34.name = 'opt3';
        _this.num34.inputEnabled = true;
        _this.num34.addChild(_this.child11);
        _this.num34.visible = false;
        
        _this.objGrp3.add(_this.num31);
        _this.objGrp3.add(_this.num32);
        _this.objGrp3.add(_this.num33);
        _this.objGrp3.add(_this.num34);
        
         n1 = 2;
         n2 = 5;
         n3 = 4;
        
        _this.rightAns1 = 2;
        _this.rightAns2 = 2;
        _this.rightAns3 = 5;
        _this.rightAns4 = 5;
        _this.rightAns5 = 4;
        _this.rightAns6 = 4;
        
        _this.objGrp.add(_this.square);
        _this.objGrp.add(_this.box);
        _this.objGrp.add(_this.num);
        
        if(_this.no11 == 0)
            {
                
                  _this.option = _this.add.sprite(120,290,'3_4n2');
                  _this.option.anchor.setTo(0.5);
                
                  _this.hand = _this.add.sprite(148,330,'3_4hand');
                  _this.hand.anchor.setTo(0.5);
                  _this.hand.scale.setTo(0.5,0.5);
        
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:527 , y:287}, 1200, 'Linear', true, 0);
                
                var tween1 = _this.add.tween(_this.option);
                tween1.to({ x:500 , y:245}, 1200, 'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                            _this.time.events.add(400,function(){
                                _this.hand.destroy();
                                _this.option.destroy();
                                _this.opt1.inputEnabled = true; 
                                _this.opt2.inputEnabled = true;
                                _this.opt3.inputEnabled = true;
                                _this.opt1.visible = true;
                            },_this);
                          },_this);  
                
            }
        else
         {
             _this.opt1.inputEnabled = true; 
             _this.opt2.inputEnabled = true;
             _this.opt3.inputEnabled = true;
             _this.opt1.visible = true;
         }
        
       
    },

     gotoThirdQuestion:function()
    {
        console.log("gotoThirdQuestion");
        _this.questionNo=3;
        _this.opt = 2;
        
        _this.objGrp = _this.add.group();
       
        _this.square = _this.add.sprite(200,300,'3_4square');
        _this.square.anchor.setTo(0.5);
        
        _this.box = _this.add.sprite(850,300,'3_4box');
        _this.box.anchor.setTo(0.5);
        _this.box.frame = 1;
        
        _this.num = _this.add.sprite(486,298,'3_4n9');
        _this.num.anchor.setTo(0.5);
       // _this.num.scale.setTo(1,1.5);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        _this.correctGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;
        
        _this.opt1 = _this.add.sprite(120,290,'3_4num5');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.1);
        _this.opt1.xpos = 120;
        _this.opt1.ypos = 290;
        _this.opt1.name = 'wrongAns';
        //_this.opt1.inputEnabled = true;
        _this.opt1.addChild(_this.targetchild1);
        _this.opt1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt2 = _this.add.sprite(200,320,'3_4n10');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,1.5);
        _this.opt2.xpos = 200;
        _this.opt2.ypos = 320;
        _this.opt2.name = 'opt2';
       // _this.opt2.inputEnabled = true;
        _this.opt2.visible = false;
        _this.opt2.addChild(_this.targetchild2);
        _this.opt2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt3 = _this.add.sprite(260,280,'3_4n11');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,1.5);
        _this.opt3.xpos = 260;
        _this.opt3.ypos = 280;
        _this.opt3.name = 'opt3';
        //_this.opt3.inputEnabled = true;
        _this.opt3.addChild(_this.targetchild3);
        _this.opt3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt1);
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(-5, -5, 30, 30);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(-5, -5, 30, 30);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(-5, 5, 30, 30);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(-5, 5, 30, 30);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(-5, 5, 30, 30);
        _this.child5.visible = false;

        _this.num11 = _this.add.sprite(524,243,'3_4n10');
        _this.num11.anchor.setTo(0.5);
        _this.num11.name = 'opt2';
        _this.num11.inputEnabled = true;
        _this.num11.addChild(_this.child1);
        _this.num11.visible = false;
        
        _this.num12 = _this.add.sprite(524,353,'3_4n10');
        _this.num12.anchor.setTo(0.5);
        _this.num12.name = 'opt2';
        _this.num12.inputEnabled = true;
        _this.num12.addChild(_this.child2);
        _this.num12.visible = false;

        _this.objGrp1.add(_this.num11);
        _this.objGrp1.add(_this.num12);
        
        _this.num21 = _this.add.sprite(525,224,'3_4n11');
        _this.num21.anchor.setTo(0.5);
        _this.num21.name = 'opt3';
        _this.num21.inputEnabled = true;
        _this.num21.addChild(_this.child3);
        _this.num21.visible = false;
        
        _this.num22 = _this.add.sprite(525,297,'3_4n11');
        _this.num22.anchor.setTo(0.5);
        _this.num22.name = 'opt3';
        _this.num22.inputEnabled = true;
        _this.num22.addChild(_this.child4);
        _this.num22.visible = false;
        
        _this.num23 = _this.add.sprite(525,371,'3_4n11');
        _this.num23.anchor.setTo(0.5);
        _this.num23.name = 'opt3';
        _this.num23.inputEnabled = true;
        _this.num23.addChild(_this.child5);
        _this.num23.visible = false;
        
        _this.objGrp2.add(_this.num21);
        _this.objGrp2.add(_this.num22);
        _this.objGrp2.add(_this.num23);
         
         n1 = 2;
         n2 = 3;
        
        _this.rightAns1 = 2;
        _this.rightAns2 = 6;
        _this.rightAns3 = 3;
        _this.rightAns4 = 9;
        
        _this.objGrp.add(_this.square);
        _this.objGrp.add(_this.box);
        _this.objGrp.add(_this.num);
        
        if(_this.no11 == 0)
            {
                
                  _this.option = _this.add.sprite(190,320,'3_4n10');
                  _this.option.anchor.setTo(0.5);
                
                  _this.hand = _this.add.sprite(227,355,'3_4hand');
                  _this.hand.anchor.setTo(0.5);
                  _this.hand.scale.setTo(0.5,0.5);
        
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:562 , y:280}, 1200, 'Linear', true, 0);
                
                var tween1 = _this.add.tween(_this.option);
                tween1.to({ x:525 , y:242}, 1200, 'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                            _this.time.events.add(400,function(){
                                _this.hand.destroy();
                                _this.option.destroy();
                                _this.opt1.inputEnabled = true; 
                                _this.opt2.inputEnabled = true;
                                _this.opt3.inputEnabled = true;
                                _this.opt2.visible = true;
                            },_this);
                          },_this);  
                
            }
        else
         {
             _this.opt1.inputEnabled = true; 
             _this.opt2.inputEnabled = true;
             _this.opt3.inputEnabled = true;
             _this.opt2.visible = true;
         }
       
    },
    
     gotoFourthQuestion:function()
    {
        console.log("gotoFourthQuestion");
       _this.questionNo=4;
        _this.opt = 1;
        
        _this.objGrp = _this.add.group();
        
        _this.square = _this.add.sprite(200,300,'3_4square');
        _this.square.anchor.setTo(0.5);
        
        _this.box = _this.add.sprite(850,300,'3_4box');
        _this.box.anchor.setTo(0.5);
        _this.box.frame = 1;
        
        _this.num = _this.add.sprite(470,298,'3_4n12');
        _this.num.anchor.setTo(0.5);
       // _this.num.scale.setTo(1,2);
        
        _this.objGrp1 = _this.add.group();
        _this.correctGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;

        _this.opt1 = _this.add.sprite(120,290,'3_4num3');
        _this.opt1.anchor.setTo(0.5);
       // _this.opt1.scale.setTo(1,0.95);
        _this.opt1.xpos = 120;
        _this.opt1.ypos = 290;
        _this.opt1.name = 'wrongAns';
        //_this.opt1.inputEnabled = true;
        _this.opt1.addChild(_this.targetchild1);
        _this.opt1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt2 = _this.add.sprite(190,320,'3_4n15');
        _this.opt2.anchor.setTo(0.5);
        _this.opt2.scale.setTo(1,0.8);
        _this.opt2.xpos = 190;
        _this.opt2.ypos = 320;
        _this.opt2.name = 'wrongAns';
        //_this.opt2.inputEnabled = true;
        _this.opt2.addChild(_this.targetchild2);
        _this.opt2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt3 = _this.add.sprite(260,280,'3_4n13');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,2);
        _this.opt3.xpos = 260;
        _this.opt3.ypos = 280;
        _this.opt3.name = 'opt3';
        //_this.opt3.inputEnabled = true;
        _this.opt3.visible = false;
        _this.opt3.addChild(_this.targetchild3);
        _this.opt3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt1);
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(-5, -15, 30, 40);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(-5, -15, 30, 40);
        _this.child2.visible = false;
        
        _this.num11 = _this.add.sprite(509,243,'3_4n13');
        _this.num11.anchor.setTo(0.5);
        _this.num11.name = 'opt3';
        _this.num11.inputEnabled = true;
        _this.num11.addChild(_this.child1);
        _this.num11.visible = false;
        
        _this.num12 = _this.add.sprite(509,354,'3_4n13');
        _this.num12.anchor.setTo(0.5);
        _this.num12.name = 'opt3';
        _this.num12.inputEnabled = true;
        _this.num12.addChild(_this.child2);
        _this.num12.visible = false;

        _this.objGrp1.add(_this.num11);
        _this.objGrp1.add(_this.num12);
        
         n1 = 2;
        
        _this.rightAns1 = 2;
        _this.rightAns2 = 8;
        
        _this.objGrp.add(_this.square);
        _this.objGrp.add(_this.box);
        _this.objGrp.add(_this.num);
    
         if(_this.no11 == 0)
            {
                
                  _this.option = _this.add.sprite(260,287,'3_4n13');
                  _this.option.anchor.setTo(0.5);
                
                  _this.hand = _this.add.sprite(295,327,'3_4hand');
                  _this.hand.anchor.setTo(0.5);
                  _this.hand.scale.setTo(0.5,0.5);
        
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:542 , y:287}, 1200, 'Linear', true, 0);
                
                var tween1 = _this.add.tween(_this.option);
                tween1.to({ x:510 , y:243}, 1200, 'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                            _this.time.events.add(400,function(){
                                _this.hand.destroy();
                                _this.option.destroy();
                                _this.opt1.inputEnabled = true; 
                                _this.opt2.inputEnabled = true;
                                _this.opt3.inputEnabled = true;
                                _this.opt3.visible = true;
                            },_this);
                          },_this);  
                
            }
        else
         {
             _this.opt1.inputEnabled = true; 
             _this.opt2.inputEnabled = true;
             _this.opt3.inputEnabled = true;
             _this.opt3.visible = true;
         }
       
    },
    
     gotoFifthQuestion:function()
    {
        console.log("gotoFifthQuestion");
        _this.questionNo=5;
        _this.opt = 1;
        
        _this.objGrp = _this.add.group();
        
        _this.square = _this.add.sprite(200,300,'3_4square');
        _this.square.anchor.setTo(0.5);
        
        _this.box = _this.add.sprite(850,300,'3_4box');
        _this.box.anchor.setTo(0.5);
        _this.box.frame = 1;
        
        _this.num = _this.add.sprite(470,297,'3_4n14');
        _this.num.anchor.setTo(0.5);
        //_this.num.scale.setTo(1,2.5);
        
        _this.objGrp1 = _this.add.group();
        _this.correctGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;
        
        _this.opt1 = _this.add.sprite(120,290,'3_4n15');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,2);
        _this.opt1.xpos = 120;
        _this.opt1.ypos = 290;
        _this.opt1.name = 'opt1';
        //_this.opt1.inputEnabled = true;
        _this.opt1.visible = false;
        _this.opt1.addChild(_this.targetchild1);
        _this.opt1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt2 = _this.add.sprite(198,323,'3_4num7');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,1.5);
        _this.opt2.xpos = 198;
        _this.opt2.ypos = 323;
        _this.opt2.name = 'wrongAns';
        //_this.opt2.inputEnabled = true;
        _this.opt2.addChild(_this.targetchild2);
        _this.opt2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt3 = _this.add.sprite(262,290,'3_4num4');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,1);
        _this.opt3.xpos = 262;
        _this.opt3.ypos = 290;
        _this.opt3.name = 'wrongAns';
        //_this.opt3.inputEnabled = true;
        _this.opt3.addChild(_this.targetchild3);
        _this.opt3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt1);
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(-5, -15, 30, 30);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(-5, -15, 30, 30);
        _this.child2.visible = false;

        _this.num11 = _this.add.sprite(508,242,'3_4n15');
        _this.num11.anchor.setTo(0.5);
        //_this.num11.scale.setTo(1,2.5);
        _this.num11.name = 'opt1';
        _this.num11.inputEnabled = true;
        _this.num11.addChild(_this.child1);
        _this.num11.visible = false;
        
        _this.num12 = _this.add.sprite(508,352,'3_4n15');
        _this.num12.anchor.setTo(0.5);
        //_this.num12.scale.setTo(1,2.5);
        _this.num12.name = 'opt1';
        _this.num12.inputEnabled = true;
        _this.num12.addChild(_this.child2);
        _this.num12.visible = false;
        
        _this.objGrp1.add(_this.num11);
        _this.objGrp1.add(_this.num12);
        
         n1 = 2;
        
        _this.rightAns1 = 2;
        _this.rightAns2 = 10;
        
        _this.objGrp.add(_this.square);
        _this.objGrp.add(_this.box);
        _this.objGrp.add(_this.num);
        
        if(_this.no11 == 0)
            {
                
                  _this.option = _this.add.sprite(120,290,'3_4n15');
                  _this.option.anchor.setTo(0.5);
                
                  _this.hand = _this.add.sprite(150,330,'3_4hand');
                  _this.hand.anchor.setTo(0.5);
                  _this.hand.scale.setTo(0.5,0.5);
        
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:542 , y:283}, 1200, 'Linear', true, 0);
                
                var tween1 = _this.add.tween(_this.option);
                tween1.to({ x:508 , y:242}, 1200, 'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                            _this.time.events.add(400,function(){
                                _this.hand.destroy();
                                _this.option.destroy();
                                _this.opt1.inputEnabled = true; 
                                _this.opt2.inputEnabled = true;
                                _this.opt3.inputEnabled = true;
                                _this.opt1.visible = true;
                            },_this);
                          },_this);  
                
            }
        else
         {
             _this.opt1.inputEnabled = true; 
             _this.opt2.inputEnabled = true;
             _this.opt3.inputEnabled = true;
             _this.opt1.visible = true;
         }
       
    },
    
     gotoSixthQuestion:function()
    {
        console.log("gotoSixthQuestion");
        _this.questionNo=6;
        _this.opt = 1;
        
        _this.objGrp = _this.add.group();
        
        _this.square = _this.add.sprite(200,300,'3_4square');
        _this.square.anchor.setTo(0.5);
        
        _this.box = _this.add.sprite(850,300,'3_4box');
        _this.box.anchor.setTo(0.5);
        _this.box.frame = 1;
        
        _this.num = _this.add.sprite(470,297,'3_4num2');
        _this.num.anchor.setTo(0.5);
        
        _this.objGrp1 = _this.add.group();
        _this.correctGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;
        
        _this.opt1 = _this.add.sprite(120,290,'3_4num7');
        _this.opt1.anchor.setTo(0.5);
       // _this.opt1.scale.setTo(1,1.3);
        _this.opt1.xpos = 120;
        _this.opt1.ypos = 290;
        _this.opt1.name = 'wrongAns';
        //_this.opt1.inputEnabled = true;
        _this.opt1.addChild(_this.targetchild1);
        _this.opt1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt2 = _this.add.sprite(198,305,'3_4num3');
        _this.opt2.anchor.setTo(0.5);
        _this.opt2.xpos = 198;
        _this.opt2.ypos = 305;
        _this.opt2.name = 'wrongAns';
        //_this.opt2.inputEnabled = true;
        _this.opt2.addChild(_this.targetchild2);
        _this.opt2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt3 = _this.add.sprite(262,290,'3_4num8');
        _this.opt3.anchor.setTo(0.5);
        _this.opt3.xpos = 262;
        _this.opt3.ypos = 290;
        _this.opt3.name = 'opt3';
        _this.opt3.visible = false;
        //_this.opt3.inputEnabled = true;
        _this.opt3.addChild(_this.targetchild3);
        _this.opt3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt1);
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(-5, -5, 30, 30);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(-5, -5, 30, 30);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(-5, -5, 30, 30);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(-5, -5, 30, 30);
        _this.child4.visible = false;
        
        _this.num11 = _this.add.sprite(508,215,'3_4num8');
        _this.num11.anchor.setTo(0.5);
        _this.num11.name = 'opt3';
        _this.num11.inputEnabled = true;
        _this.num11.addChild(_this.child1);
        _this.num11.visible = false;
        
        _this.num12 = _this.add.sprite(508,270,'3_4num8');
        _this.num12.anchor.setTo(0.5);
        _this.num12.name = 'opt3';
        _this.num12.inputEnabled = true;
        _this.num12.addChild(_this.child2);
        _this.num12.visible = false;
        
        _this.num13 = _this.add.sprite(508,325,'3_4num8');
        _this.num13.anchor.setTo(0.5);
        _this.num13.name = 'opt3';
        _this.num13.inputEnabled = true;
        _this.num13.addChild(_this.child3);
        _this.num13.visible = false;
        
        _this.num14 = _this.add.sprite(508,380,'3_4num8');
        _this.num14.anchor.setTo(0.5);
        _this.num14.name = 'opt3';
        _this.num14.inputEnabled = true;
        _this.num14.addChild(_this.child4);
        _this.num14.visible = false;
        
        _this.objGrp1.add(_this.num11);
        _this.objGrp1.add(_this.num12);
        _this.objGrp1.add(_this.num13);
        _this.objGrp1.add(_this.num14);
        
         n1 = 4;
        
        _this.rightAns1 = 4;
        _this.rightAns2 = 8;
        
        _this.objGrp.add(_this.square);
        _this.objGrp.add(_this.box);
        _this.objGrp.add(_this.num);
        
        if(_this.no11 == 0)
            {
                
                  _this.option = _this.add.sprite(262,290,'3_4num8');
                  _this.option.anchor.setTo(0.5);
                
                  _this.hand = _this.add.sprite(290,323,'3_4hand');
                  _this.hand.anchor.setTo(0.5);
                  _this.hand.scale.setTo(0.5,0.5);
        
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:542 , y:245}, 1200, 'Linear', true, 0);
                
                var tween1 = _this.add.tween(_this.option);
                tween1.to({ x:510 , y:215}, 1200, 'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                            _this.time.events.add(400,function(){
                                _this.hand.destroy();
                                _this.option.destroy();
                                _this.opt1.inputEnabled = true; 
                                _this.opt2.inputEnabled = true;
                                _this.opt3.inputEnabled = true;
                                _this.opt3.visible = true;
                            },_this);
                          },_this);  
                
            }
        else
         {
             _this.opt1.inputEnabled = true; 
             _this.opt2.inputEnabled = true;
             _this.opt3.inputEnabled = true;
             _this.opt3.visible = true;
         }
       
       
    },
    
     gotoSeventhQuestion:function()
    {
        console.log("gotoSeventhQuestion");
        _this.questionNo=7;
        _this.opt = 1;
        
        _this.objGrp = _this.add.group();
        
        _this.square = _this.add.sprite(200,300,'3_4square');
        _this.square.anchor.setTo(0.5);
        
        _this.box = _this.add.sprite(850,300,'3_4box');
        _this.box.anchor.setTo(0.5);
        _this.box.frame = 1;
        
        _this.num = _this.add.sprite(486,300,'3_4n9');
        _this.num.anchor.setTo(0.5);
        //_this.num.scale.setTo(1.2,1.5);
        
        _this.objGrp1 = _this.add.group();
        _this.correctGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;
        
        _this.opt1 = _this.add.sprite(120,290,'3_4num10');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(1,1.5);
        _this.opt1.xpos = 120;
        _this.opt1.ypos = 290;
        _this.opt1.name = 'wrongAns';
        //_this.opt1.inputEnabled = true;
        _this.opt1.addChild(_this.targetchild1);
        _this.opt1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt2 = _this.add.sprite(198,324,'3_4n10');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,1.5);
        _this.opt2.xpos = 198;
        _this.opt2.ypos = 324;
        _this.opt2.name = 'opt2';
        //_this.opt2.inputEnabled = true;
        _this.opt2.visible = false;
        _this.opt2.addChild(_this.targetchild2);
        _this.opt2.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt3 = _this.add.sprite(262,290,'3_4num8');
        _this.opt3.anchor.setTo(0.5);
        //_this.opt3.scale.setTo(1,1.5);
        _this.opt3.xpos = 262;
        _this.opt3.ypos = 290;
        _this.opt3.name = 'wrongAns';
        //_this.opt3.inputEnabled = true;
        _this.opt3.addChild(_this.targetchild3);
        _this.opt3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt1);
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(-5, -5, 30, 30);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(-5, -5, 30, 30);
        _this.child2.visible = false;

        _this.num11 = _this.add.sprite(525,245,'3_4n10');
        _this.num11.anchor.setTo(0.5);
        _this.num11.name = 'opt2';
        _this.num11.inputEnabled = true;
        _this.num11.addChild(_this.child1);
        _this.num11.visible = false;
        
        _this.num12 = _this.add.sprite(525,355,'3_4n10');
        _this.num12.anchor.setTo(0.5);
        _this.num12.name = 'opt2';
        _this.num12.inputEnabled = true;
        _this.num12.addChild(_this.child2);
        _this.num12.visible = false;
        
        _this.objGrp1.add(_this.num11);
        _this.objGrp1.add(_this.num12);
        
         n1 = 2;
        
        _this.rightAns1 = 2;
        _this.rightAns2 = 6;
        
        _this.objGrp.add(_this.square);
        _this.objGrp.add(_this.box);
        _this.objGrp.add(_this.num);
        
        if(_this.no11 == 0)
            {
                
                  _this.option = _this.add.sprite(198,324,'3_4n10');
                  _this.option.anchor.setTo(0.5);
                
                  _this.hand = _this.add.sprite(231,362,'3_4hand');
                  _this.hand.anchor.setTo(0.5);
                  _this.hand.scale.setTo(0.5,0.5);
        
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:560 , y:280}, 1200, 'Linear', true, 0);
                
                var tween1 = _this.add.tween(_this.option);
                tween1.to({ x:523 , y:245}, 1200, 'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                            _this.time.events.add(400,function(){
                                _this.hand.destroy();
                                _this.option.destroy();
                                _this.opt1.inputEnabled = true; 
                                _this.opt2.inputEnabled = true;
                                _this.opt3.inputEnabled = true;
                                _this.opt2.visible = true;
                            },_this);
                          },_this); 
                
            }
        else
         {
             _this.opt1.inputEnabled = true; 
             _this.opt2.inputEnabled = true;
             _this.opt3.inputEnabled = true;
             _this.opt2.visible = true;
         }
       
       
       
    },
    
     gotoEighthQuestion:function()
    {
        console.log("gotoEighthQuestion");
        _this.questionNo=8;
        _this.opt = 3;
        
        _this.objGrp = _this.add.group();
        
        _this.square = _this.add.sprite(200,300,'3_4square');
        _this.square.anchor.setTo(0.5);
        
        _this.box = _this.add.sprite(850,300,'3_4box');
        _this.box.anchor.setTo(0.5);
        _this.box.frame = 1;
        
        _this.num = _this.add.sprite(462,300,'3_4n1'); //470,297
        _this.num.anchor.setTo(0.5);
        //_this.num.scale.setTo(0.9,0.55);
        
        _this.objGrp1 = _this.add.group();
        _this.objGrp2 = _this.add.group();
        _this.objGrp3 = _this.add.group();
        _this.correctGrp = _this.add.group();
        _this.optionGrp = _this.add.group();
        
        _this.targetchild1 = _this.add.graphics(-10, -10);
        _this.targetchild1.lineStyle(2, 0x0000FF, 0);
        _this.targetchild1.drawRect(0, 0, 20, 20);
        //_this.targetchild1.visible = false;
        
        _this.targetchild2 = _this.add.graphics(-10, -10);
        _this.targetchild2.lineStyle(2, 0x0000FF, 0);
        _this.targetchild2.drawRect(0, 0, 20, 20);
        //_this.targetchild2.visible = false;
        
        _this.targetchild3 = _this.add.graphics(-10, -10);
        _this.targetchild3.lineStyle(2, 0x0000FF, 0);
        _this.targetchild3.drawRect(0, 0, 20, 20);
        //_this.targetchild3.visible = false;
        
        _this.opt1 = _this.add.sprite(120,290,'3_4n5');
        _this.opt1.anchor.setTo(0.5);
        //_this.opt1.scale.setTo(0.9,0.55);
        _this.opt1.xpos = 120;
        _this.opt1.ypos = 290;
        _this.opt1.name = 'opt1';
        //_this.opt1.inputEnabled = true;
        _this.opt1.visible = false;
        _this.opt1.addChild(_this.targetchild1);
        _this.opt1.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.opt2 = _this.add.sprite(195,320,'3_4n3');
        _this.opt2.anchor.setTo(0.5);
        //_this.opt2.scale.setTo(1,0.7);
        _this.opt2.xpos = 195;
        _this.opt2.ypos = 320;
        _this.opt2.name = 'opt2';
        //_this.opt2.inputEnabled = true;
        _this.opt2.addChild(_this.targetchild2);
        _this.opt2.events.onInputDown.add(_this.onDragstart,_this);

        _this.opt3 = _this.add.sprite(260,290,'3_4n4');
        _this.opt3.anchor.setTo(0.5);
       // _this.opt3.scale.setTo(0.9,0.55);
        _this.opt3.xpos = 260;
        _this.opt3.ypos = 290;
        _this.opt3.name = 'opt3';
       // _this.opt3.inputEnabled = true;
        _this.opt3.addChild(_this.targetchild3);
        _this.opt3.events.onInputDown.add(_this.onDragstart,_this);
        
        _this.optionGrp.add(_this.opt3);
        _this.optionGrp.add(_this.opt2);
        _this.optionGrp.add(_this.opt1);
        
        _this.child1 = _this.add.graphics(-10, -10);
        _this.child1.lineStyle(2, 0x0000FF, 1);
        _this.child1.drawRect(-5, -5, 30, 30);
        _this.child1.visible = false;
        
        _this.child2 = _this.add.graphics(-10, -10);
        _this.child2.lineStyle(2, 0x0000FF, 1);
        _this.child2.drawRect(-5, -5, 30, 30);
        _this.child2.visible = false;
        
        _this.child3 = _this.add.graphics(-10, -10);
        _this.child3.lineStyle(2, 0x0000FF, 1);
        _this.child3.drawRect(-5, -5, 30, 30);
        _this.child3.visible = false;
        
        _this.child4 = _this.add.graphics(-10, -10);
        _this.child4.lineStyle(2, 0x0000FF, 1);
        _this.child4.drawRect(0, 0, 10, 10);
        _this.child4.visible = false;
        
        _this.child5 = _this.add.graphics(-10, -10);
        _this.child5.lineStyle(2, 0x0000FF, 1);
        _this.child5.drawRect(0, 0, 10, 10);
        _this.child5.visible = false;
        
        _this.child6 = _this.add.graphics(-10, -10);
        _this.child6.lineStyle(2, 0x0000FF, 1);
        _this.child6.drawRect(0, 0, 10, 10);
        _this.child6.visible = false;
        
        _this.child7 = _this.add.graphics(-10, -10);
        _this.child7.lineStyle(2, 0x0000FF, 1);
        _this.child7.drawRect(0, 0, 10, 10);
        _this.child7.visible = false;
        
        _this.child8 = _this.add.graphics(-10, -10);
        _this.child8.lineStyle(2, 0x0000FF, 1);
        _this.child8.drawRect(0, 0, 10, 10);
        _this.child8.visible = false;
        
        /*_this.child9 = _this.add.graphics(-10, -10);
        _this.child9.lineStyle(2, 0x0000FF, 1);
        _this.child9.drawRect(0, 0, 10, 10);
        _this.child9.visible = false;*/
        
        /*_this.child10 = _this.add.graphics(-10, -10);
        _this.child10.lineStyle(2, 0x0000FF, 1);
        _this.child10.drawRect(0, 0, 10, 10);
        _this.child10.visible = false;*/
        
        _this.child11 = _this.add.graphics(-10, -10);
        _this.child11.lineStyle(2, 0x0000FF, 1);
        _this.child11.drawRect(-5, -5, 30, 30);
        _this.child11.visible = false;
        
        _this.child12 = _this.add.graphics(-10, -10);
        _this.child12.lineStyle(2, 0x0000FF, 1);
        _this.child12.drawRect(-5, -5, 30, 30);
        _this.child12.visible = false;
        
        _this.child13 = _this.add.graphics(-10, -10);
        _this.child13.lineStyle(2, 0x0000FF, 1);
        _this.child13.drawRect(-5, -5, 30, 30);
        _this.child13.visible = false;
        
        _this.child14 = _this.add.graphics(-10, -10);
        _this.child14.lineStyle(2, 0x0000FF, 1);
        _this.child14.drawRect(-5, -5, 30, 30);
        _this.child14.visible = false;

        _this.num11 = _this.add.sprite(500,226,'3_4n3');
        _this.num11.anchor.setTo(0.5);
        _this.num11.name = 'opt2';
        _this.num11.inputEnabled = true;
        _this.num11.addChild(_this.child1);
        _this.num11.visible = false;
        
        _this.num12 = _this.add.sprite(500,300,'3_4n3');
        _this.num12.anchor.setTo(0.5);
        _this.num12.name = 'opt2';
        _this.num12.inputEnabled = true;
        _this.num12.addChild(_this.child2);
        _this.num12.visible = false;
        
        _this.num13 = _this.add.sprite(500,374,'3_4n3');
        _this.num13.anchor.setTo(0.5);
        _this.num13.name = 'opt2';
        _this.num13.inputEnabled = true;
        _this.num13.addChild(_this.child3);
        _this.num13.visible = false;
        
        _this.objGrp2.add(_this.num11);
        _this.objGrp2.add(_this.num12);
        _this.objGrp2.add(_this.num13);
        
        _this.num21 = _this.add.sprite(501,211,'3_4n5');
        _this.num21.anchor.setTo(0.5);
        //_this.num21.scale.setTo(0.9,0.5);
        _this.num21.name = 'opt1';
        _this.num21.inputEnabled = true;
        _this.num21.addChild(_this.child4);
        _this.num21.visible = false;
        
        _this.num22 = _this.add.sprite(501,255,'3_4n5');
        _this.num22.anchor.setTo(0.5);
        //_this.num22.scale.setTo(0.9,0.5);
        _this.num22.name = 'opt1';
        _this.num22.inputEnabled = true;
        _this.num22.addChild(_this.child5);
        _this.num22.visible = false;
        
        _this.num23 = _this.add.sprite(501,300,'3_4n5');
        _this.num23.anchor.setTo(0.5);
        //_this.num23.scale.setTo(0.9,0.5);
        _this.num23.name = 'opt1';
        _this.num23.inputEnabled = true;
        _this.num23.addChild(_this.child6);
        _this.num23.visible = false;
        
        _this.num24 = _this.add.sprite(501,345,'3_4n5');
        _this.num24.anchor.setTo(0.5);
        //_this.num24.scale.setTo(0.9,0.5);
        _this.num24.name = 'opt1';
        _this.num24.inputEnabled = true;
        _this.num24.addChild(_this.child7);
        _this.num24.visible = false;
        
        _this.num25 = _this.add.sprite(501,389,'3_4n5');
        _this.num25.anchor.setTo(0.5);
        //_this.num25.scale.setTo(0.9,0.5);
        _this.num25.name = 'opt1';
        _this.num25.inputEnabled = true;
        _this.num25.addChild(_this.child8);
        _this.num25.visible = false;
        
        /*_this.num26 = _this.add.sprite(500,392,'3_4n8');
        _this.num26.anchor.setTo(0.5);
        _this.num26.scale.setTo(0.9,0.5);
        _this.num26.name = 'opt2';
        _this.num26.inputEnabled = true;
        _this.num26.addChild(_this.child9);
        _this.num26.visible = false;*/
        
        /*_this.num27 = _this.add.sprite(500,395,'3_4n8');
        _this.num27.anchor.setTo(0.5);
        _this.num27.scale.setTo(0.9,0.5);
        _this.num27.name = 'opt2';
        _this.num27.inputEnabled = true;
        _this.num27.addChild(_this.child10);
        _this.num27.visible = false;*/
        
        _this.objGrp1.add(_this.num21);
        _this.objGrp1.add(_this.num22);
        _this.objGrp1.add(_this.num23);
        _this.objGrp1.add(_this.num24);
        _this.objGrp1.add(_this.num25);
        //_this.objGrp2.add(_this.num26);
        //_this.objGrp2.add(_this.num27);
        
        _this.num31 = _this.add.sprite(501,216,'3_4n4');
        _this.num31.anchor.setTo(0.5);
        _this.num31.name = 'opt3';
        _this.num31.inputEnabled = true;
        _this.num31.addChild(_this.child11);
        _this.num31.visible = false;
        
        _this.num32 = _this.add.sprite(501,272,'3_4n4');
        _this.num32.anchor.setTo(0.5);
        _this.num32.name = 'opt3';
        _this.num32.inputEnabled = true;
        _this.num32.addChild(_this.child12);
        _this.num32.visible = false;
        
        _this.num33 = _this.add.sprite(501,327,'3_4n4');
        _this.num33.anchor.setTo(0.5);
        _this.num33.name = 'opt3';
        _this.num33.inputEnabled = true;
        _this.num33.addChild(_this.child13);
        _this.num33.visible = false;
        
        _this.num34 = _this.add.sprite(501,383,'3_4n4');
        _this.num34.anchor.setTo(0.5);
        _this.num34.name = 'opt3';
        _this.num34.inputEnabled = true;
        _this.num34.addChild(_this.child14);
        _this.num34.visible = false;
        
        _this.objGrp3.add(_this.num31);
        _this.objGrp3.add(_this.num32);
        _this.objGrp3.add(_this.num33);
        _this.objGrp3.add(_this.num34);
        
         n1 = 5;
         n2 = 3;
         n3 = 4;
        
        _this.rightAns1 = 5;
        _this.rightAns2 = 5;
        _this.rightAns3 = 3;
        _this.rightAns4 = 3;
        _this.rightAns5 = 4;
        _this.rightAns6 = 4;
        
        _this.objGrp.add(_this.square);
        _this.objGrp.add(_this.box);
        _this.objGrp.add(_this.num);
        
         if(_this.no11 == 0)
            {
                
                  _this.option = _this.add.sprite(120,290,'3_4n5');
                  _this.option.anchor.setTo(0.5);
                
                  _this.hand = _this.add.sprite(150,325,'3_4hand');
                  _this.hand.anchor.setTo(0.5);
                  _this.hand.scale.setTo(0.5,0.5);
        
                var tween1 = _this.add.tween(_this.hand);
                tween1.to({ x:533 , y:245}, 1200, 'Linear', true, 0);
                
                var tween1 = _this.add.tween(_this.option);
                tween1.to({ x:499 , y:210}, 1200, 'Linear', true, 0);
                
                tween1.onComplete.add(function(){
                            _this.time.events.add(400,function(){
                                _this.hand.destroy();
                                _this.option.destroy();
                                _this.opt1.inputEnabled = true; 
                                _this.opt2.inputEnabled = true;
                                _this.opt3.inputEnabled = true;
                                _this.opt1.visible = true;
                            },_this);
                          },_this); 
                
            }
        else
         {
             _this.opt1.inputEnabled = true; 
             _this.opt2.inputEnabled = true;
             _this.opt3.inputEnabled = true;
             _this.opt1.visible = true;
         }
       
       

        
    },

     onDragstart:function(target)
    {
         // _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level3.4_"+target.name, 
                    access_token: window.acctkn 
               }  
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         
          target.inputEnabled =true;
         target.input.enableDrag();
        
        _this.click = _this.add.audio('ClickSound');
        _this.click.play();
        
        target.events.onDragStop.add(this.checkForOverLap,this); 
    },
    
   checkForOverLap:function(target)
    {
        
        var shake = true;
        
       if(_this.opt == 1 || _this.opt == 2 || _this.opt == 3)
           {
        for(var i=0;i<_this.objGrp1.length;i++)
        {       
           if(_this.checkOverlap(target.getChildAt(0),_this.objGrp1.getAt(i).getChildAt(0)) && target.name == this.objGrp1.getAt(i).name
             && this.objGrp1.getAt(i).visible == false)
            { 
                console.log('objGrp1 '+target.name);
                 shake = false; 
                _this.click = _this.add.audio('snapSound');
                _this.click.play();
                _this.objGrp1.getAt(i).visible = true;
                if(_this.objGrp1.getAt(i).visible == true)
               {
                      temp1++;
                     console.log(temp1);
                   if(_this.opt == 2 || _this.opt == 3)
                        {
                       _this.objGrp2.destroy();
                        }
                       if(_this.opt == 3)
                      {
                          _this.objGrp3.destroy();
                      }
              } 
                    
            }
            }
               
                if(temp1 == n1)
                   {
                      _this.addNumberPad(); 
                      _this.Ans = _this.rightAns1;
                      _this.Ans1 = _this.rightAns2;
                   }
               else if(temp1 != n1 && temp1 > n1)
                  {
                      shake = true;
                  }
                   
                  _this.correctGrp.add(_this.objGrp1);
           }
        
         if(_this.opt == 2 || _this.opt == 3)
            {
            for(var i=0;i<_this.objGrp2.length;i++)
            {
          if(_this.checkOverlap(target.getChildAt(0),_this.objGrp2.getAt(i).getChildAt(0)) && target.name == this.objGrp2.getAt(i).name  && this.objGrp2.getAt(i).visible == false)
            {
                 console.log('objGrp2 '+target.name);
                 shake = false; 
                _this.click = _this.add.audio('snapSound');
                _this.click.play();
                _this.objGrp2.getAt(i).visible = true;
                if(this.objGrp2.getAt(i).visible == true)
                {
                      temp2++;
                     console.log(temp2);
                    if(_this.opt == 2 || _this.opt == 3)
                        {
                            _this.objGrp1.destroy();
                        }
                     if(_this.opt == 3)
                      {
                          _this.objGrp3.destroy();
                      }
                }
                //_this.objGrp1.getAt(i).visible = false;
                //break;
            } 
            }
                
                 if(temp2 == n2)
                   {
                       _this.addNumberPad();
                       _this.Ans = _this.rightAns3;
                       _this.Ans1 = _this.rightAns4;
                   }
                else if(temp2 != n2 && temp2 > n2)
                {
                    shake = true;
                }
                _this.correctGrp.add(_this.objGrp2);
            }
            
         if(_this.opt == 3)
             {
                for(var i=0;i<_this.objGrp3.length;i++)
             {
        if(_this.checkOverlap(target.getChildAt(0),_this.objGrp3.getAt(i).getChildAt(0)) && target.name == this.objGrp3.getAt(i).name && this.objGrp3.getAt(i).visible == false)
            {
                 console.log('objGrp3 '+target.name);
                 shake = false; 
                _this.click = _this.add.audio('snapSound');
                _this.click.play();
                _this.objGrp3.getAt(i).visible = true;
                if(this.objGrp3.getAt(i).visible == true)
                {
                     temp3++;
                     console.log(temp3);
                    _this.objGrp1.destroy();
                    _this.objGrp2.destroy();
                }
                //_this.objGrp1.getAt(i).visible = false;
                //break;
            } 
            }
                
                  if(temp3 == n3)
                   {
                       _this.addNumberPad();
                       _this.Ans = _this.rightAns5;
                       _this.Ans1 = _this.rightAns6;
                   }
                  else if(temp3 != n3 && temp3 > n3)
                  {
                      shake =true;
                  }
                 _this.correctGrp.add(_this.objGrp3);
            }

         if(shake)
            {
                _this.shake.shake(10, target);
                _this.wrongAns();
              setTimeout(function(){
                  
                  target.x = target.xpos;
                  target.y = target.ypos;
              },500);   
            }
        else{
          
                  target.x = target.xpos;
                  target.y = target.ypos;
        }
        
                 
                  
                   
    },  
    
      addNumberPad:function(){
          if(addcount == 0)
              {
         _this.numBackground = _this.add.sprite(480,505,'3_4bg');
         _this.numBackground.anchor.setTo(0.5);
         _this.numGroup = _this.add.group();
         _this.numGroup.add(_this.numBackground);
         _this.objGroup = _this.add.group();
         _this.x = 80;
        for(var i=1;i<11;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,505,'3_4numberpad');  
            _this.numbg.anchor.setTo(0.5);
           // _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name = i;
            _this.numbg.frame = i;
            
            
            _this.numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            _this.numTxt.fill = '#FFFFFF';
            _this.numTxt.visible=false;
            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            _this.numbg.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            
            
            _this.x+=70;
        }
        _this.txtbox = _this.objGroup.create(850,256,'3_4box1');
        _this.txtbox.anchor.setTo(0.5);
        _this.txtbox.scale.setTo(0.5,0.5);
        _this.txtbox.frame=1;
        _this.txtbox.inputEnabled = true;
        _this.txtbox.visible=false;
        
        _this.txtbox1 = _this.objGroup.create(850,345,'3_4box1');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.scale.setTo(0.5,0.5);
        _this.txtbox1.frame=0;
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.visible=false;
      
        _this.wrongbtn = _this.numGroup.create(_this.x+10,508,'3_4eraser');
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(0.5,0.5);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        _this.rightbtn = _this.numGroup.create(_this.x+90,513,'3_4tick');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.05,1.05);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.frame = 0;
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
        _this.enterTxt = this.add.text(-2,1, _this.selectedAns);
        //_this.enterTxt.scale.setTo(0.8,0.8);
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = 'myfont';
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fontSize = 70;
       //text.fontWeight = 'bold';
        _this.enterTxt.fill = '#65B4C3';

       

        
        _this.enterTxt1 = this.add.text(-2,1, _this.selectedAns1);
        //_this.enterTxt1.scale.setTo(0.8,0.8);
        _this.enterTxt1.anchor.setTo(0.5);
        _this.enterTxt1.align = 'center';
        _this.enterTxt1.font = 'myfont';
        _this.enterTxt1.fontWeight = 'normal';
        _this.enterTxt1.fontSize = 70;
       //text.fontWeight = 'bold';
        _this.enterTxt1.fill = '#65B4C3';

        _this.enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

         _this.txtbox.inputEnabled = true;
        _this.txtbox.events.onInputDown.add(function(target){
            _this.selectedBox = target;
            added = 0;
            target.frame = 1;
             _this.txtbox1.frame = 0;
        },this);

        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.events.onInputDown.add(function(target){
            _this.selectedBox = target;
            added = 1;
            target.frame = 1;
            _this.txtbox.frame = 0;
        },this);


        _this.txtbox.addChild(_this.enterTxt);
        _this.txtbox1.addChild(_this.enterTxt1);
        _this.txtbox.name = "txtbox";
        _this.txtbox1.name = "txtbox1";
        
        _this.numGroup.y=500;
        
        _this.selectedAns = "";
        _this.selectedAns1 = "";
         this.time.events.add(1000, function(){
        _this.txtbox.visible=true;
        _this.txtbox1.visible=true;
         },this);
           
        _this.numGroup.y = 50;
         var Maintween = this.add.tween(_this.numGroup);
        Maintween.to({ y:0}, 0, 'Linear', true, 0);
           
        
       // _this.slideup();
        
        _this.wrongbtn.events.onInputDown.add(function(){
            //wrongbtn.inputEnabled = false;
          _this.clickSound = _this.add.audio('ClickSound');
          _this.clickSound.play();
            _this.wrongbtn.frame = 1;
           /* _this.enterTxt.setText("");
            _this.selectedAns="";
            _this.enterTxt1.setText("");
            _this.selectedAns1="";
             added=0;*/

             if(_this.txtbox.frame==1)
             {
                _this.enterTxt.setText("");
                _this.selectedAns="";
                _this.txtbox.frame=1;
                added = 0;
             }
             else
             {
                _this.enterTxt1.setText("");
                _this.selectedAns1="";
                _this.txtbox1.frame=1;

                added = 1;
             }
            
            
          this.time.events.add(500, function(){
              _this.wrongbtn.frame = 0},this);
           },this);
        
        _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            _this.rightbtn.inputEnabled = false;
            console.log("right btn");
           //_this.speakerbtn.inputEnabled=false;
           click = this.add.audio('ClickSound');
           click.play();
            
            
            _this.rightbtn.frame = 1;
             //this.time.events.add(500, function(){rightbtn.frame = 0},this);
            console.log(_this.selectedAns);
            if((_this.selectedAns=="0"+_this.Ans||_this.selectedAns==_this.Ans)&&(_this.selectedAns1=="0"+_this.Ans1||_this.selectedAns1==_this.Ans1))  
                {
                    _this.rightbtn.frame = 1;
                    _this.txtbox.frame=0;
                    _this.txtbox1.frame=0;
                     console.log("correct");
                    _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                   // _this.animText=_this.num11.animations.add('walk');
                    // _this.animText.play(3,true);
                    
                    //_this.animText1=_this.txtbox1.animations.add('txtbox1');
                    // _this.animText1.play(3,true);
                    
                    _this.num.frame = 1;
                    
                    if(_this.objGrp1)
                        {
                            _this.objGrp1.setAll("frame",1);
                        }
                    if(_this.objGrp2)
                        {
                            _this.objGrp2.setAll("frame",1);
                        }
                     if(_this.objGrp3)
                        {
                            _this.objGrp3.setAll("frame",1);
                        }
                   
                     _this.cmusic = _this.add.audio('celebr');
                     _this.cmusic.play();
                    
                     _this.numbg.inputEnabled = false;
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();  
                    
                     _this.time.events.add(500,function(){
                       var Maintween1 = this.add.tween(_this.numGroup);
                       Maintween1.to({ y: 70}, 0, 'Linear', true, 0);
                     },this);
                    
                     _this.time.events.add(1500, _this.removeEverthing, _this);

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
                    _this.enterTxt.setText("");
                    _this.selectedAns = '';
                     added=0;
                    _this.txtbox.frame=1;
                    _this.txtbox1.frame=0;
                    _this.selectedAns1 = "";
                    _this.enterTxt1.setText("");
                    _this.selectedAns1 = '';
                    //_this.enterTxt.set1Text("");
                    _this.shake.shake(10, _this.box);
                    
                    _this.wmusic = _this.add.audio('waudio');
		            _this.wmusic.play();
                    
                    this.time.events.add(400, function(){
                    //_this.objGroup.destroy();
                        _this.rightbtn.frame = 0;
                    },this);
               
                      //this.time.events.add(500, this.removeEverthing, this);
                    _this.rightbtn.frame = 1;
                    
                    _this.rightbtn.inputEnabled = true;
                   // _this.numGroup.visible=false;
                    
             }
        },this);
                  addcount = 1;
              }
    },
     
     numClicked:function(target){
        console.log(target.name,_this.selectedAns);
       
         _this.clickSound = _this.add.audio('ClickSound');
         _this.clickSound.play();
         
         //if(_this.questionNo == 1)
           //  {
                 console.log(_this.selectedAns);
                 if(_this.selectedAns.length<1)
                {
                    added++;
                 var number = Number(target.name);
                 if(number == 10)
                     number = 0;

                 if(_this.selectedAns!=""||_this.selectedAns!=null)
                     _this.selectedAns += number;
                 else
                     _this.selectedAns = number;

                _this.objGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns); 
                    if(added==1){
                        _this.txtbox.frame=0;
                         _this.txtbox1.frame=1;
                        //_this.numClicked1(target);
                    }


                }
                  else{
             //txtbox.frame=0;
                // txtbox1.frame=1;
                _this.numClicked1(target);
                }
            // }
       /*  else{
         if(_this.selectedAns.length<2)
        {
                added++;
             var number = Number(target.name);
             if(number == 10)
                 number = 0;

             if(_this.selectedAns!=""||_this.selectedAns!=null)
                 _this.selectedAns += number;
             else
                 _this.selectedAns = number;

            _this.objGroup.getByName("txtbox").getChildAt(0).setText(_this.selectedAns); 
                if(added==2){
                    _this.txtbox.frame=0;
                     _this.txtbox1.frame=1;
                    //_this.numClicked1(target);
                }


            }
         
         else{
             //txtbox.frame=0;
                // txtbox1.frame=1;
                _this.numClicked1(target);
         }
         }*/
        
            
        
    },
    
    numClicked1:function(target){
       
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        
        if(_this.questionNo == 5)
            {
         if(_this.selectedAns1.length<2)
        {
            
         var number = Number(target.name);
         if(number == 10)
             number = 0;
         
         if(_this.selectedAns1!=""||_this.selectedAns1!=null)
             _this.selectedAns1 += number;
         else
             _this.selectedAns1 = number;
         
        _this.objGroup.getByName("txtbox1").getChildAt(0).setText(_this.selectedAns1); 
            
        }
            }
    else
    {
         if(_this.selectedAns1.length<1)
        {
            
         var number = Number(target.name);
         if(number == 10)
             number = 0;
         
         if(_this.selectedAns1!=""||_this.selectedAns1!=null)
             _this.selectedAns1 += number;
         else
             _this.selectedAns1 = number;
         
        _this.objGroup.getByName("txtbox1").getChildAt(0).setText(_this.selectedAns1); 
            
        }
    }
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
             
 
    
    
 	changeQuestion:function()
	{
		if(_this.no11<6)
		{
            count++;
			_this.getQuestion();
		}
		else
		{
            console.log("gameEnd");
            _this.stopVoice();
            //_this.state.start('level2');
		}
	},
    
    checkOverlap:function(spriteA, spriteB) 
	{
	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();
	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    },  
   
	correctAns:function(target)
	{
        console.log("correct Answer");
        console.log("_this.questionNo :"+_this.questionNo);

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

        
           //target.frame=1;
           //_this.click1 = _this.add.audio('ClickSound');
           //_this.click1.play();
         
        _this.speakerbtn.inputEnabled=false;
        _this.celebration = true;

        _this.cmusic = _this.add.audio('celebr');
        _this.cmusic.play();
        
        _this.time.events.add(3000, _this.removeEverthing, _this);
        

        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 = _this.starAnim.animations.add('star');
        _this.anim4.play(); 
    
	},

    wrongAns:function(target)
	{
        console.log("wrong function");
        _this.wrong = false;
      
        //_this.noofAttempts++;
        
       //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
        { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "click", 
            res_id: "level3.4_",  
            access_token: window.acctkn 
        }

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
        _this.timer3 = _this.time.create(false);
            
              _this.wmusic = _this.add.audio('waudio');
		      _this.wmusic.play(); 
               
        
        
		  //_this.timer1.stop();
        
        
	},
    
    removeEverthing:function() 
    {
        console.log("removeEverthing");
        console.log("Question Number :"+_this.no11);
        _this.no11++;
        _this.count1++;
        _this.wrong = true;
      
        if(_this.no11<6)
        {
           // wrong = true;
            _this.timer1.stop();
           
            _this.MaintweenDestroy = _this.add.tween(_this.optionGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.objGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.correctGrp);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            
            _this.MaintweenDestroy = _this.add.tween(_this.objGroup);
            _this.MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
             
            _this.MaintweenDestroy.onComplete.add(function()
            {
                _this.count =0;
                _this.objGrp.destroy();
                _this.correctGrp.destroy();
                _this.objGroup.destroy();
                _this.optionGrp.destroy();
                
                added=0;
                _this.txtbox.frame=1;
                _this.txtbox1.frame=0;
                 temp1 =0;
                 temp2 =0;
                 temp3 =0;
                 addcount=0;
                 _this.numGroup.destroy();
                _this.selectedAns = " ";
                _this.selectedAns1 = " ";
                _this.getQuestion();
            },_this);  
        }
        else
        {
            _this.stopVoice();
             _this.selectedAns = '';
             _this.selectedAns1 = '';
            addcount = 0;
            _this.timer1.stop();
            _this.timer1=null;
            _this.state.start('nsf3_4Score');
        }
    },
    
    getVoice:function()
    {
        _this.stopVoice();
        console.log("voice"+_this.qArrays[_this.no11]);
        
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
            case 8:if(window.languageSelected=="English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/English/3.4E.mp3");
                    }
                    else if(window.languageSelected=="Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Hindi/3.4H.mp3");
                    }
                    else if(window.languageSelected=="Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Kannada/3.4K.mp3");
                    }
                    else if(window.languageSelected=="Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Gujarati/3.4G.mp3");
				        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Marathi/nsf3.4.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Telugu/nsf3.4.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Tamil/nsf3.4.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Urdu/nsf3.4.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf3.4/Odiya/3.4O.mp3");
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

    shutdown:function()
    {
        if(_this.enterTxt)
         _this.enterTxt.setText("");

            _this.selectedAns="";
            
            if(_this.enterTxt1)
            _this.enterTxt1.setText("");
            _this.selectedAns1="";
            _this.stopVoice();
    }
	
};