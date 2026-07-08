Game.sg16_1_4level1=function(){};
	
	
	

Game.sg16_1_4level1.prototype={
    init:function(game)
	{
		_this = this;
        
		telInitializer.gameIdInit("SG16_1_4",gradeSelected);
	},

    preload:function(game){
        if(!window.grade4SG1){

            window.grade4SG1 = true;

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

            this.load.image('sg16.1.4_table',window.baseUrl+'assets/gradeAssets/sg16.1.4/bg 2.png');
        
        //this.load.image('table1',window.baseUrl+'assets/gradeAssets/sg16.1.4/bg2.png');
        
        
        
        this.load.atlas('sg16.1.4_circle1',window.baseUrl+'assets/gradeAssets/sg16.1.4/01.png',window.baseUrl+'json/gradeJson/sg16.1.4/01.json');
         this.load.atlas('sg16.1.4_circle',window.baseUrl+'assets/gradeAssets/sg16.1.4/1.png',window.baseUrl+'json/gradeJson/sg16.1.4/1.json');
        this.load.atlas('sg16.1.4_circle2',window.baseUrl+'assets/gradeAssets/sg16.1.4/2.png',window.baseUrl+'json/gradeJson/sg16.1.4/2.json');
        //         this.load.atlas('circleleft',window.baseUrl+'assets/gradeAssets/sg16.1.4/left.png',window.baseUrl+'json/sg16.1.4/left.json');
        
        
        
        
        
        //this.load.atlas('sg16.1.4_lines',window.baseUrl+'assets/gradeAssets/sg16.1.4/A1.png',window.baseUrl+'json/gradeJson/sg16.1.4/A1.json');
       // this.load.atlas('sg16.1.4_lines1',window.baseUrl+'assets/gradeAssets/sg16.1.4/A2.png',window.baseUrl+'json/gradeJson/sg16.1.4/A2.json');
        
       
       
       
        
     

       
        this.load.atlas('sg16.1.4_rightBtn',window.baseUrl+'assets/gradeAssets/sg16.1.4/tickBtn.png' ,window.baseUrl+'json/gradeJson/sg16.1.4/tickBtn.json');
        //this.load.atlas('eraser',window.baseUrl+'assets/gradeAssets/sg16.1.4/eraser.png' ,window.baseUrl+'json/sg16.1.4/eraser.json');

    }

    },


	create:function(game){
        _this.bg1=null;
_this.starsGroup=0;
_this.no1=0;
_this.mainFlag=0;
_this.opt1=null;
_this.opt2=null;
_this.opt3=null;
_this.opt4=null;
_this.opt9=null;
_this.no2=0;
_this.count1=0;
_this.count=0;
_this.qArrays=null;
_this.flagmain11Anim=0;
_this.animlev1=0;
_this.a1=0;
_this.Sprite=0;
_this.optionsgrp=0;
_this.wronggraphics1=0;_this.wronggraphics2=0;_this.wronggraphics3=0;
_this.wrngGraphicgrp=0;
_this.boxb1;
_this.counterText;
_this.counterText1;
_this.counterText2;
_this.maingroup;
_this.value1=7;
_this.value2=11;
_this.value3=13;
_this.i=0;_this.j=0;_this.k=0;
_this.speaker=0;
_this.w1=0;_this.w2=0;
_this.AnimOpt=0;_this.AnimOpt2=0;_this.AnimOpt3=0;
_this.tick=0;
_this.numGroup=0;
_this.enterTxt=0;
_this.txtbox=0;
_this.grpnum=new Array();
_this.boxclick=0;
_this.minutes=0;_this.seconds=0;_this.counterForTimer=0;

_this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount=0;

_this.box=0;

        //baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays = [1,2,3,4,5,6];
       // _this.qArrays1 = [5,6,7,8,9,10];
        _this.qArrays = this.shuffle(_this.qArrays);
       // _this.qArrays1 = this.shuffle(_this.qArrays1);
       
       // counterText=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

         _this.bg1 = this.add.sprite(0,0, 'commonBg2');
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopVoice();
       _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();

       _this.state.start('grade1levelSelectionScreen',true,false);
    },this);
  
   /* _this.dottedBox=this.add.sprite(70,7,'dottedBox');
    _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
    _this.numTxt1.anchor.setTo(0.5);
    _this.numTxt1.align = 'center';
    _this.numTxt1.font = 'Alte Haas Grotesk';
    _this.numTxt1.fontSize = 12;
    _this.numTxt1.fill = '#ffffff';
    _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
    _this.dottedBox.addChild(_this.numTxt1);
        
    _this.numTxt2 = this.add.text(220,24, 'Subtraction');
    _this.numTxt2.anchor.setTo(0.5);
    _this.numTxt2.align = 'center';
    _this.numTxt2.font = 'Alte Haas Grotesk';
    _this.numTxt2.fontSize = 18;
    _this.numTxt2.fill = '#ffffff';
    _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
   _this.timebg=this.add.sprite(305,6,'Level42C_timer');
    _this.timebg.scale.setTo(1.2,1);
        
    _this.timeDisplay = this.add.text(336,22,_this.minutes + ' : '+ _this.seconds);
    
    _this.timeDisplay.anchor.setTo(0.5);
    _this.timeDisplay.align = 'center';
     _this.timeDisplay.font = 'myfont';
      _this.timeDisplay.fontWeight = 'Normal';
    _this.timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    _this.timeDisplay.fill = '#ADFF2F';
//        _this.footer = this.add.sprite(0,480,'footer');
       // footer.scale.setTo(1,1);
        _this.speaker = this.add.sprite(600,6,'grade11_speaker');
        _this.speaker.inputEnabled = true;
        _this.speaker.events.onInputDown.add(function()
		{
		   _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
			_this.getVoice();
		},_this);
         _this.sprite = this.add.sprite(this.world.centerX-50, this.world.centerY+20, 'sg16.1.4_table');
	   _this.sprite.anchor.set(0.5);
        _this.sprite.scale.setTo(1,1);
        _this.sprite.x=1000;
         _this.tween=this.add.tween(_this.sprite).to( { x: this.world.centerX-50 }, 2000, 'Linear', true,0);
         _this.generateStarsForTheScene(6)
       
               //_this.no1++;
         _this.tween.onComplete.add(function(){
             this.getQuestion();
  }, this);
				//this.getQuestion();
    
    },
    changeTexture:function() {
        /***********************rightline****************************************************/
        _this.group3=this.add.group();
       
//        _this.bounds = new Phaser.Rectangle(-60, 280, 500, 50);
//        _this.bounds2 = new Phaser.Rectangle(90,280, 800, 50);
////        _this.graphics = _this.add.graphics(_this.bounds2.x,_this.bounds2.y);
////   _this.graphics.beginFill(0x000077);
////    _this.graphics.drawRect(0, 0, _this.bounds2.width, _this.bounds2.height);
   
         _this.opt1=this.add.sprite(575,303 ,'sg16.1.4_circle');
       
        _this.graphics1 = this.add.graphics(100,265);
         _this.graphics1.lineStyle(0);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawCircle(400, 50,50);
        _this.graphics1.endFill();
       _this.graphics1.alpha=0;
        _this.graphics1X=_this.graphics1.x;
        _this.graphics1Y=_this.graphics1.y;
        
        _this.graphics2 = this.add.graphics(100,265);
         _this.graphics2.lineStyle(0);
        _this.graphics2.beginFill(0xFFFF0B, 1);
        _this.graphics2.drawCircle(300, 50,50);
         _this.graphics2.endFill();
        _this.graphics2.alpha=0;
        _this.graphics2X=_this.graphics2.x;
        _this.graphics2Y=_this.graphics2.y;
    
        _this.graphics3 = this.add.graphics(100,220);
         _this.graphics3.lineStyle(0);
        _this.graphics3.beginFill(0xFFFF0B, 1);
        _this.graphics3.drawCircle(350, 35,35);
         _this.graphics3.endFill();
        _this.graphics3.alpha=0;
        _this.graphics3X=_this.graphics3.x;
        _this.graphics3Y=_this.graphics3.y;
        
         _this.graphics4 = this.add.graphics(100,330);
         _this.graphics4.lineStyle(0);
        _this.graphics4.beginFill(0xFFFF0B, 1);
        _this.graphics4.drawCircle(350, 35,35);
         _this.graphics4.endFill();
         _this.graphics4.alpha=0;
        _this.graphics4X=_this.graphics4.x;
        _this.graphics4Y=_this.graphics4.y;
//         _this.group3.add(_this.graphics1);
//        _this.group3.add(_this.graphics2);
//        _this.group3.add(_this.graphics3);
//        _this.group3.add(_this.graphics4);
        
        _this.opt1.frame=0;
         _this.opt1.anchor.setTo(0.8,0.5);
         _this.opt1.scale.setTo(1,1);
         _this.opt1.name = "sg16.1.4_circle1";
        _this.opt1.alpha=0.8;
        
        //_this.opt2=this.add.sprite(235,90 ,'sg16.1.4_circle1');
        //_this.opt2.visible=false;
        
       _this.graphics1.inputEnabled = true; 
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
//                _this.graphics2.x--;
//                _this.graphics3.y--;
//                _this.graphics4.y++;
            if(target.x>=253)
            {    
                _this.opt1.input.draggable = false;
                target.x = 250;
            }
            else if(target.x<100)
            {
                _this.opt1.input.draggable = false;
                target.x = 100;    
            }
            if(target.x>=90&&target.x<=100)
            {
               _this.opt1.frame=0; 
                _this.graphics2.x=95;
                _this.graphics3.y=220;
                _this.graphics4.y=320;
//                _this.opt2.frame=1;
//                _this.opt2.visible=true;
            }
             if(target.x>=100&&target.x<=110)
            {
                _this.opt1.frame=0;
            }
                else if(target.x>=110&&target.x<=120)
            {
                _this.opt1.frame=2;
            }
                else  if(target.x>=120&&target.x<=130)
            {
                _this.opt1.frame=3;
            }
               else  if(target.x>=130&&target.x<=140)
            {
                _this.opt1.frame=4;
            }
                else  if(target.x>=140&&target.x<=145)
            {
                _this.opt1.frame=5;
            }
                else  if(target.x>=145&&target.x<=155)
            {
                _this.opt1.frame=6;
                _this.opt1.value=2;
                _this.graphics2.x=50;
                _this.graphics3.y=170;
                _this.graphics4.y=370;
            }
               else  if(target.x>=155&&target.x<=165)
            {
                _this.opt1.frame=7;
                
            } 
                 else  if(target.x>=165&&target.x<=175)
            {
                _this.opt1.frame=8;
            }
                else  if(target.x>=175&&target.x<=185)
            {
                _this.opt1.frame=9;
            }
                else  if(target.x>=185&&target.x<=195)
            {
                _this.opt1.frame=10;
            }
                else  if(target.x>=195&&target.x<=200)
            {
                _this.opt1.frame=11;
            } 
                else  if(target.x>=200&&target.x<=205)
            {
                _this.opt1.frame=12;
                _this.opt1.value=3;
                _this.graphics2.x=0;
                _this.graphics3.y=120;
                _this.graphics4.y=420;
            }
                else  if(target.x>=205&&target.x<=215)
            {
                _this.opt1.frame=13;
                
            } 
                else  if(target.x>=205&&target.x<=215)
            {
                _this.opt1.frame=14;
            } 
                else  if(target.x>=215&&target.x<=220)
            {
                _this.opt1.frame=15;
            } 
                else  if(target.x>=220&&target.x<=230)
            {
                _this.opt1.frame=16;
            } 
                else  if(target.x>=230&&target.x<=240)
            {
                _this.opt1.frame=17;
            }
                else  if(target.x>=240&&target.x<=245)
            {
                _this.opt1.frame=18;
            } 
                else  if(target.x>=245&&target.x<=250)
            {
                _this.opt1.frame=19;
                _this.opt1.value=4;
                _this.graphics2.x=-50;
                _this.graphics3.y=70;
                _this.graphics4.y=470;
            }
        },this);
             },this);
        /***********************leftsidedot*****************************************/
        _this.graphics2.inputEnabled = true;
        _this.graphics2.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics2.input.allowVerticalDrag = false;
            _this.graphics2.events.onDragUpdate.add(function(target){
        
                console.log(target.x);
            if(target.x>=95)
            {    
                _this.opt1.input.draggable = false;
                target.x = 95;
            }
            else if(target.x<-55)
            {
                _this.opt1.input.draggable = false;
                target.x = -50;    
            }
            if(target.x>=90&&target.x<=100)
            {
               _this.opt1.frame=0;
                _this.graphics1.x=100;
                _this.graphics3.y=220;
                _this.graphics4.y=320;
            }
             if(target.x>=80&&target.x<=90)
            {
                _this.opt1.frame=0;
            }
                else if(target.x>=70&&target.x<=80)
            {
                _this.opt1.frame=2;
            }
                else  if(target.x>=65&&target.x<=70)
            {
                _this.opt1.frame=3;
            }
               else  if(target.x>=60&&target.x<=65)
            {
                _this.opt1.frame=4;
            }
                else  if(target.x>=55&&target.x<=60)
            {
                _this.opt1.frame=5;
            }
                else  if(target.x>=45&&target.x<=55)
            {
                _this.opt1.frame=6;
                _this.opt1.value=2;
                _this.graphics1.x=150;
                 _this.graphics3.y=170;
                _this.graphics4.y=370;
            }
                else  if(target.x>=40&&target.x<=45)
            {
                _this.opt1.frame=7;
                
            } 
                 else  if(target.x>=35&&target.x<=40)
            {
                _this.opt1.frame=8;
            }
                else  if(target.x>=30&&target.x<=35)
            {
                _this.opt1.frame=9;
            }
                else  if(target.x>=20&&target.x<=30)
            {
                _this.opt1.frame=10;
            }
                else  if(target.x>=10&&target.x<=20)
            {
                _this.opt1.frame=11;
            } 
                else  if(target.x>=5&&target.x<=10)
            {
                _this.opt1.frame=12;
            }
                else  if(target.x>=-5&&target.x<=5)
            {
                _this.opt1.frame=13;
                _this.opt1.value=3;
                _this.graphics1.x=200;
                _this.graphics3.y=120;
                _this.graphics4.y=420;
            } 
                else  if(target.x>=-15&&target.x<=-5)
            {
                _this.opt1.frame=14;
            } 
                else  if(target.x>=-25&&target.x<=-15)
            {
                _this.opt1.frame=15;
            } 
                else  if(target.x>=-30&&target.x<=-25)
            {
                _this.opt1.frame=16;
            } 
                else  if(target.x>=-40&&target.x<=-30)
            {
                _this.opt1.frame=17;
            }
                else  if(target.x>=-45&&target.x<=-40)
            {
                _this.opt1.frame=18;
            } 
                else  if(target.x>=-55&&target.x<=-45)
            {
                _this.opt1.frame=19;
                _this.opt1.value=4;
                _this.graphics1.x=250
                _this.graphics3.y=70;
                _this.graphics4.y=470;
            }
        },this);
             },this);
        /******************************************upside*************************/
        _this.graphics3.inputEnabled = true;
        _this.graphics3.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.y);
            _this.graphics3.input.allowHorizontalDrag = false;
            _this.graphics3.events.onDragUpdate.add(function(target){
                       

                console.log(target.y);
            if(target.y>=215)
            {    
                _this.opt1.input.draggable = false;
                target.y = 215;
            }
            else if(target.y<70)
            {
                _this.opt1.input.draggable = false;
                target.y = 70;    
            }
            if(target.y>=215&&target.y<=225)
            {
               _this.opt1.frame=0;
                 _this.graphics1.x=100;
                _this.graphics2.x=95;
                _this.graphics4.y=320;
            }
             if(target.y>=205&&target.y<=215)
            {
                _this.opt1.frame=1;
            }
                else if(target.y>=195&&target.y<=205)
            {
                _this.opt1.frame=2;
            }
                else  if(target.y>=190&&target.y<=195)
            {
                _this.opt1.frame=3;
            }
               else  if(target.y>=185&&target.y<=190)
            {
                _this.opt1.frame=4;
            }
                else  if(target.y>=175&&target.y<=185)
            {
                _this.opt1.frame=5;
            }
                else  if(target.y>=165&&target.y<=175)
            {
                _this.opt1.frame=6;
                _this.opt1.value=2;
                _this.graphics1.x=150;
                _this.graphics4.y=370;
                _this.graphics2.x=50;
            }
                else  if(target.y>=160&&target.y<=165)
            {
                _this.opt1.frame=7;
                
            } 
                 else  if(target.y>=155&&target.y<=160)
            {
                _this.opt1.frame=8;
            }
                else  if(target.y>=145&&target.y<=155)
            {
                _this.opt1.frame=9;
            }
                else  if(target.y>=130&&target.y<=145)
            {
                _this.opt1.frame=10;
            }
                else  if(target.y>=125&&target.y<=130)
            {
                _this.opt1.frame=11;
            } 
                else  if(target.y>=115&&target.y<=125)
            {
                _this.opt1.frame=12;
                _this.opt1.value=3;
                 _this.graphics2.x=0;
                _this.graphics1.x=200;
                _this.graphics4.y=420;
            }
                else  if(target.y>=105&&target.y<=115)
            {
                _this.opt1.frame=13;
            } 
                else  if(target.y>=100&&target.y<=105)
            {
                _this.opt1.frame=14;
            } 
                else  if(target.y>=90&&target.y<=100)
            {
                _this.opt1.frame=15;
            } 
                else  if(target.y>=85&&target.y<=90)
            {
                _this.opt1.frame=16;
            } 
                else  if(target.y>=80&&target.y<=85)
            {
                _this.opt1.frame=17;
            }
                else  if(target.y>=75&&target.y<=80)
            {
                _this.opt1.frame=18;
            } 
                else  if(target.y>=60&&target.y<=75)
            {
                _this.opt1.frame=19;
                _this.opt1.value=4;
                 _this.graphics1.x=250
                _this.graphics2.x=-50;
                _this.graphics4.y=470;
            }
        },this);
             },this);
        /*******************************downside********************************/
        _this.graphics4.inputEnabled = true;
        _this.graphics4.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.y);
            _this.graphics4.input.allowHorizontalDrag = false;
            _this.graphics4.events.onDragUpdate.add(function(target){
                
                
                console.log(target.y);
            if(target.y>=475)
            {    
                _this.opt1.input.draggable = false;
                target.y = 470;
            }
            else if(target.y<325)
            {
                _this.opt1.input.draggable = false;
                target.y = 320;    
            }
            if(target.y>=315&&target.y<=325)
            {
               _this.opt1.frame=0;
                _this.graphics2.x=95;
                _this.graphics3.y=220;
                _this.graphics1.x=100;
            }
             if(target.y>=325&&target.y<=335)
            {
                _this.opt1.frame=0;
            }
                else if(target.y>=340&&target.y<=345)
            {
                _this.opt1.frame=2;
            }
                else  if(target.y>=345&&target.y<=350)
            {
                _this.opt1.frame=3;
            }
               else  if(target.y>=350&&target.y<=360)
            {
                _this.opt1.frame=4;
            }
                else  if(target.y>=360&&target.y<=365)
            {
                _this.opt1.frame=5;
            }
                else  if(target.y>=365&&target.y<=375)
            {
                 _this.opt1.frame=6;
                _this.opt1.value=2;
                _this.graphics1.x=150;
                _this.graphics3.y=170;
                _this.graphics2.x=50;
            }
                else  if(target.y>=375&&target.y<=380)
            {
                _this.opt1.frame=7;
            } 
                 else  if(target.y>=380&&target.y<=390)
            {
                _this.opt1.frame=8;
            }
                else  if(target.y>=390&&target.y<=395)
            {
                _this.opt1.frame=9;
            }
                else  if(target.y>=395&&target.y<=405)
            {
                _this.opt1.frame=10;
            }
                else  if(target.y>=405&&target.y<=415)
            {
                _this.opt1.frame=11;
            } 
                else  if(target.y>=415&&target.y<=425)
            {
                _this.opt1.frame=12;
                _this.opt1.frame=12;
                _this.opt1.value=3;
                 _this.graphics2.x=0;
                _this.graphics1.x=200;
                _this.graphics3.y=120;
            }
                else  if(target.y>=425&&target.y<=430)
            {
                _this.opt1.frame=13;
            } 
                else  if(target.y>=430&&target.y<=440)
            {
                _this.opt1.frame=14;
            } 
                else  if(target.x>=440&&target.x<=445)
            {
                _this.opt1.frame=15;
            } 
                else  if(target.y>=445&&target.y<=450)
            {
                _this.opt1.frame=16;
            } 
                else  if(target.y>=450&&target.y<=455)
            {
                _this.opt1.frame=17;
            }
                else  if(target.y>=455&&target.y<=465)
            {
                _this.opt1.frame=18;
            } 
                else  if(target.y>=465&&target.y<=475)
            {
                _this.opt1.frame=19;
                _this.opt1.value=4;
                 _this.graphics1.x=250;
                _this.graphics2.x=-50;
                _this.graphics3.y=70;
            }
        },this);
             },this);
       
          
}, 
changeTexture2:function() {
        /***********************rightline****************************************************/
        _this.group3=this.add.group();
       
//        _this.bounds = new Phaser.Rectangle(-60, 280, 500, 50);
//        _this.bounds2 = new Phaser.Rectangle(90,280, 800, 50);
////        _this.graphics = _this.add.graphics(_this.bounds2.x,_this.bounds2.y);
////   _this.graphics.beginFill(0x000077);
////    _this.graphics.drawRect(0, 0, _this.bounds2.width, _this.bounds2.height);
   
         _this.opt1=this.add.sprite(575,303 ,'sg16.1.4_circle2');
       
        _this.graphics1 = this.add.graphics(100,265);
         _this.graphics1.lineStyle(0);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawCircle(400, 50,50);
        _this.graphics1.endFill();
       _this.graphics1.alpha=0;
        _this.graphics1X=_this.graphics1.x;
        _this.graphics1Y=_this.graphics1.y;
        
        _this.graphics2 = this.add.graphics(100,265);
         _this.graphics2.lineStyle(0);
        _this.graphics2.beginFill(0xFFFF0B, 1);
        _this.graphics2.drawCircle(300, 50,50);
         _this.graphics2.endFill();
        _this.graphics2.alpha=0;
        _this.graphics2X=_this.graphics2.x;
        _this.graphics2Y=_this.graphics2.y;
    
        _this.graphics3 = this.add.graphics(100,220);
         _this.graphics3.lineStyle(0);
        _this.graphics3.beginFill(0xFFFF0B, 1);
        _this.graphics3.drawCircle(350, 35,35);
         _this.graphics3.endFill();
        _this.graphics3.alpha=0;
        _this.graphics3X=_this.graphics3.x;
        _this.graphics3Y=_this.graphics3.y;
        
         _this.graphics4 = this.add.graphics(100,330);
         _this.graphics4.lineStyle(0);
        _this.graphics4.beginFill(0xFFFF0B, 1);
        _this.graphics4.drawCircle(350, 35,35);
         _this.graphics4.endFill();
         _this.graphics4.alpha=0;
        _this.graphics4X=_this.graphics4.x;
        _this.graphics4Y=_this.graphics4.y;
//         _this.group3.add(_this.graphics1);
//        _this.group3.add(_this.graphics2);
//        _this.group3.add(_this.graphics3);
//        _this.group3.add(_this.graphics4);
        
        _this.opt1.frame=0;
         _this.opt1.anchor.setTo(0.8,0.5);
         _this.opt1.scale.setTo(1,1);
         _this.opt1.name = "sg16.1.4_circle1";
        _this.opt1.alpha=0.8;
        
        //_this.opt2=this.add.sprite(235,90 ,'sg16.1.4_circle1');
        //_this.opt2.visible=false;
        
       _this.graphics1.inputEnabled = true; 
        _this.graphics1.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics1.input.allowVerticalDrag = false;
            _this.graphics1.events.onDragUpdate.add(function(target){
                 console.log(target.x);
//                _this.graphics2.x--;
//                _this.graphics3.y--;
//                _this.graphics4.y++;
            if(target.x>=253)
            {    
                _this.opt1.input.draggable = false;
                target.x = 250;
            }
            else if(target.x<100)
            {
                _this.opt1.input.draggable = false;
                target.x = 100;    
            }
            if(target.x>=90&&target.x<=100)
            {
               _this.opt1.frame=0; 
                _this.graphics2.x=95;
                _this.graphics3.y=220;
                _this.graphics4.y=320;
//                _this.opt2.frame=1;
//                _this.opt2.visible=true;
            }
             if(target.x>=100&&target.x<=110)
            {
                _this.opt1.frame=0;
            }
                else if(target.x>=110&&target.x<=120)
            {
                _this.opt1.frame=2;
            }
                else  if(target.x>=120&&target.x<=130)
            {
                _this.opt1.frame=3;
            }
               else  if(target.x>=130&&target.x<=140)
            {
                _this.opt1.frame=4;
            }
                else  if(target.x>=140&&target.x<=145)
            {
                _this.opt1.frame=5;
            }
                else  if(target.x>=145&&target.x<=155)
            {
                _this.opt1.frame=6;
                _this.opt1.value=2;
                _this.graphics2.x=50;
                _this.graphics3.y=170;
                _this.graphics4.y=370;
            }
               else  if(target.x>=155&&target.x<=165)
            {
                _this.opt1.frame=7;
                
            } 
                 else  if(target.x>=165&&target.x<=175)
            {
                _this.opt1.frame=8;
            }
                else  if(target.x>=175&&target.x<=185)
            {
                _this.opt1.frame=9;
            }
                else  if(target.x>=185&&target.x<=195)
            {
                _this.opt1.frame=10;
            }
                else  if(target.x>=195&&target.x<=200)
            {
                _this.opt1.frame=11;
            } 
                else  if(target.x>=200&&target.x<=205)
            {
                _this.opt1.frame=12;
                _this.opt1.value=3;
                _this.graphics2.x=0;
                _this.graphics3.y=120;
                _this.graphics4.y=420;
            }
                else  if(target.x>=205&&target.x<=215)
            {
                _this.opt1.frame=13;
                
            } 
                else  if(target.x>=205&&target.x<=215)
            {
                _this.opt1.frame=14;
            } 
                else  if(target.x>=215&&target.x<=220)
            {
                _this.opt1.frame=15;
            } 
                else  if(target.x>=220&&target.x<=230)
            {
                _this.opt1.frame=16;
            } 
                else  if(target.x>=230&&target.x<=240)
            {
                _this.opt1.frame=17;
            }
                else  if(target.x>=240&&target.x<=245)
            {
                _this.opt1.frame=18;
            } 
                else  if(target.x>=245&&target.x<=250)
            {
                _this.opt1.frame=19;
                _this.opt1.value=4;
                _this.graphics2.x=-50;
                _this.graphics3.y=70;
                _this.graphics4.y=470;
            }
        },this);
             },this);
        /***********************leftsidedot*****************************************/
        _this.graphics2.inputEnabled = true;
        _this.graphics2.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.x);
            _this.graphics2.input.allowVerticalDrag = false;
            _this.graphics2.events.onDragUpdate.add(function(target){
        
                console.log(target.x);
            if(target.x>=95)
            {    
                _this.opt1.input.draggable = false;
                target.x = 95;
            }
            else if(target.x<-55)
            {
                _this.opt1.input.draggable = false;
                target.x = -50;    
            }
            if(target.x>=90&&target.x<=100)
            {
               _this.opt1.frame=0;
                _this.graphics1.x=100;
                _this.graphics3.y=220;
                _this.graphics4.y=320;
            }
             if(target.x>=80&&target.x<=90)
            {
                _this.opt1.frame=0;
            }
                else if(target.x>=70&&target.x<=80)
            {
                _this.opt1.frame=2;
            }
                else  if(target.x>=65&&target.x<=70)
            {
                _this.opt1.frame=3;
            }
               else  if(target.x>=60&&target.x<=65)
            {
                _this.opt1.frame=4;
            }
                else  if(target.x>=55&&target.x<=60)
            {
                _this.opt1.frame=5;
            }
                else  if(target.x>=45&&target.x<=55)
            {
                _this.opt1.frame=6;
                _this.opt1.value=2;
                _this.graphics1.x=150;
                 _this.graphics3.y=170;
                _this.graphics4.y=370;
            }
                else  if(target.x>=40&&target.x<=45)
            {
                _this.opt1.frame=7;
                
            } 
                 else  if(target.x>=35&&target.x<=40)
            {
                _this.opt1.frame=8;
            }
                else  if(target.x>=30&&target.x<=35)
            {
                _this.opt1.frame=9;
            }
                else  if(target.x>=20&&target.x<=30)
            {
                _this.opt1.frame=10;
            }
                else  if(target.x>=10&&target.x<=20)
            {
                _this.opt1.frame=11;
            } 
                else  if(target.x>=5&&target.x<=10)
            {
                _this.opt1.frame=12;
            }
                else  if(target.x>=-5&&target.x<=5)
            {
                _this.opt1.frame=13;
                _this.opt1.value=3;
                _this.graphics1.x=200;
                _this.graphics3.y=120;
                _this.graphics4.y=420;
            } 
                else  if(target.x>=-15&&target.x<=-5)
            {
                _this.opt1.frame=14;
            } 
                else  if(target.x>=-25&&target.x<=-15)
            {
                _this.opt1.frame=15;
            } 
                else  if(target.x>=-30&&target.x<=-25)
            {
                _this.opt1.frame=16;
            } 
                else  if(target.x>=-40&&target.x<=-30)
            {
                _this.opt1.frame=17;
            }
                else  if(target.x>=-45&&target.x<=-40)
            {
                _this.opt1.frame=18;
            } 
                else  if(target.x>=-55&&target.x<=-45)
            {
                _this.opt1.frame=19;
                _this.opt1.value=4;
                _this.graphics1.x=250
                _this.graphics3.y=70;
                _this.graphics4.y=470;
            }
        },this);
             },this);
        /******************************************upside*************************/
        _this.graphics3.inputEnabled = true;
        _this.graphics3.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.y);
            _this.graphics3.input.allowHorizontalDrag = false;
            _this.graphics3.events.onDragUpdate.add(function(target){
                       

                console.log(target.y);
            if(target.y>=215)
            {    
                _this.opt1.input.draggable = false;
                target.y = 215;
            }
            else if(target.y<70)
            {
                _this.opt1.input.draggable = false;
                target.y = 70;    
            }
            if(target.y>=215&&target.y<=225)
            {
               _this.opt1.frame=0;
                 _this.graphics1.x=100;
                _this.graphics2.x=95;
                _this.graphics4.y=320;
            }
             if(target.y>=205&&target.y<=215)
            {
                _this.opt1.frame=1;
            }
                else if(target.y>=195&&target.y<=205)
            {
                _this.opt1.frame=2;
            }
                else  if(target.y>=190&&target.y<=195)
            {
                _this.opt1.frame=3;
            }
               else  if(target.y>=185&&target.y<=190)
            {
                _this.opt1.frame=4;
            }
                else  if(target.y>=175&&target.y<=185)
            {
                _this.opt1.frame=5;
            }
                else  if(target.y>=165&&target.y<=175)
            {
                _this.opt1.frame=6;
                _this.opt1.value=2;
                _this.graphics1.x=150;
                _this.graphics4.y=370;
                _this.graphics2.x=50;
            }
                else  if(target.y>=160&&target.y<=165)
            {
                _this.opt1.frame=7;
                
            } 
                 else  if(target.y>=155&&target.y<=160)
            {
                _this.opt1.frame=8;
            }
                else  if(target.y>=145&&target.y<=155)
            {
                _this.opt1.frame=9;
            }
                else  if(target.y>=130&&target.y<=145)
            {
                _this.opt1.frame=10;
            }
                else  if(target.y>=125&&target.y<=130)
            {
                _this.opt1.frame=11;
            } 
                else  if(target.y>=115&&target.y<=125)
            {
                _this.opt1.frame=12;
                _this.opt1.value=3;
                 _this.graphics2.x=0;
                _this.graphics1.x=200;
                _this.graphics4.y=420;
            }
                else  if(target.y>=105&&target.y<=115)
            {
                _this.opt1.frame=13;
            } 
                else  if(target.y>=100&&target.y<=105)
            {
                _this.opt1.frame=14;
            } 
                else  if(target.y>=90&&target.y<=100)
            {
                _this.opt1.frame=15;
            } 
                else  if(target.y>=85&&target.y<=90)
            {
                _this.opt1.frame=16;
            } 
                else  if(target.y>=80&&target.y<=85)
            {
                _this.opt1.frame=17;
            }
                else  if(target.y>=75&&target.y<=80)
            {
                _this.opt1.frame=18;
            } 
                else  if(target.y>=60&&target.y<=75)
            {
                _this.opt1.frame=19;
                _this.opt1.value=4;
                 _this.graphics1.x=250
                _this.graphics2.x=-50;
                _this.graphics4.y=470;
            }
        },this);
             },this);
        /*******************************downside********************************/
        _this.graphics4.inputEnabled = true;
        _this.graphics4.events.onInputDown.add(function(target){
            console.log("here>>>")
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
             target.inputEnabled = true;
                target.input.enableDrag();
            console.log(target.y);
            _this.graphics4.input.allowHorizontalDrag = false;
            _this.graphics4.events.onDragUpdate.add(function(target){
                
                
                console.log(target.y);
            if(target.y>=475)
            {    
                _this.opt1.input.draggable = false;
                target.y = 470;
            }
            else if(target.y<325)
            {
                _this.opt1.input.draggable = false;
                target.y = 320;    
            }
            if(target.y>=315&&target.y<=325)
            {
               _this.opt1.frame=0;
                _this.graphics2.x=95;
                _this.graphics3.y=220;
                _this.graphics1.x=100;
            }
             if(target.y>=325&&target.y<=335)
            {
                _this.opt1.frame=0;
            }
                else if(target.y>=340&&target.y<=345)
            {
                _this.opt1.frame=2;
            }
                else  if(target.y>=345&&target.y<=350)
            {
                _this.opt1.frame=3;
            }
               else  if(target.y>=350&&target.y<=360)
            {
                _this.opt1.frame=4;
            }
                else  if(target.y>=360&&target.y<=365)
            {
                _this.opt1.frame=5;
            }
                else  if(target.y>=365&&target.y<=375)
            {
                 _this.opt1.frame=6;
                _this.opt1.value=2;
                _this.graphics1.x=150;
                _this.graphics3.y=170;
                _this.graphics2.x=50;
            }
                else  if(target.y>=375&&target.y<=380)
            {
                _this.opt1.frame=7;
            } 
                 else  if(target.y>=380&&target.y<=390)
            {
                _this.opt1.frame=8;
            }
                else  if(target.y>=390&&target.y<=395)
            {
                _this.opt1.frame=9;
            }
                else  if(target.y>=395&&target.y<=405)
            {
                _this.opt1.frame=10;
            }
                else  if(target.y>=405&&target.y<=415)
            {
                _this.opt1.frame=11;
            } 
                else  if(target.y>=415&&target.y<=425)
            {
                _this.opt1.frame=12;
                _this.opt1.frame=12;
                _this.opt1.value=3;
                 _this.graphics2.x=0;
                _this.graphics1.x=200;
                _this.graphics3.y=120;
            }
                else  if(target.y>=425&&target.y<=430)
            {
                _this.opt1.frame=13;
            } 
                else  if(target.y>=430&&target.y<=440)
            {
                _this.opt1.frame=14;
            } 
                else  if(target.x>=440&&target.x<=445)
            {
                _this.opt1.frame=15;
            } 
                else  if(target.y>=445&&target.y<=450)
            {
                _this.opt1.frame=16;
            } 
                else  if(target.y>=450&&target.y<=455)
            {
                _this.opt1.frame=17;
            }
                else  if(target.y>=455&&target.y<=465)
            {
                _this.opt1.frame=18;
            } 
                else  if(target.y>=465&&target.y<=475)
            {
                _this.opt1.frame=19;
                _this.opt1.value=4;
                 _this.graphics1.x=250;
                _this.graphics2.x=-50;
                _this.graphics3.y=70;
            }
        },this);
             },this);
       
          
},
    /***********************************getquestion************************/
    getQuestion:function(target)
    {
        if(!_this.timer)
        {
            _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;
            _this.timer = _this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
      }

        _this.timer1 = this.time.create(false);
        _this.timer1.loop(1000, function(){
                  this.updateTimer();
        }, this);
        _this.timer1.start();
        _this.grpnum=new Array();
       // _this.speaker.inputEnabled=false;
       // _this.speaker.input.useHandCursor = true;
        //this.stopVoice();
    	console.log("get"+_this.no1);
    	console.log("get"+_this.qArrays[_this.no1]);
        _this.getVoice();
            switch(_this.qArrays[_this.no1])//qArrays[no1])
            {
            case 1: console.log("case1"); 
                this.gotoFirstQuestion();
				    break;
            case 2:console.log("case2");
                this.gotoSecondQuestion();
   				     break;
    		case 3: console.log("case3");
                this.gotoThirdQuestion();
    				break;
    		case 4: console.log("case4");
                this.gotoFourthQuestion();
    				break;
            case 5: console.log("case5");
                this.gotoFifthQuestion();
    				break;
            case 6: console.log("case5");
                this.gotosixthQuestion();
    				break;
            }
        
    },
     addQuestion:function(no2)
    {

           console.log("here");
           this.time.events.add(2000, function(){ 
               
           this.changeQuestion();
               
            }, this);

    },
   
    
    speakeron:function(){
        console.log("in funct");
        this.stopAllVoice();
        switch(qArrays[no1-1])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:if(window.languageSelected=="English")
                        Eng_42B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42B1.play();
                    else
                        Kan_42B1.play();
                    break;
            
        }
    },
    
    /****************************firstquestionwheel************************/
     gotoFirstQuestion:function(){
         _this.Question = 1;
//          _this.no1++;
         console.log("first");
         
         _this.changeTexture();

            _this.group1=this.add.group();
         _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.visibility=true;
         this.enablebuttons();

//         _this.opt1.input.boundsRect = _this.bounds;
        
    },
   /*******************************secondquestionwheel*******************/
   gotoSecondQuestion:function(){
       _this.Question = 2;
//   _this.no1++;
         console.log("second");
       
       // _this.bounds = new Phaser.Rectangle(112,99, 684, 380);
        
         _this.changeTexture();

            _this.group1=this.add.group();
         _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.visibility=true;
         this.enablebuttons();
    	
    },
    /*****************************thirdquestionsg16.1.4_circle**********************/
      gotoThirdQuestion:function(){
      _this.Question = 3;
//          _this.no1++;
         console.log("third");
          
           //_this.bounds = new Phaser.Rectangle(66, 47, 775, 478);
           
    	    _this.changeTexture();

            
         _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.visibility=true;
          
          
         this.enablebuttons();
    },
    /*********************************fourthquestionsg16.1.4_circle***********************/
       gotoFourthQuestion:function(){
         
    	 _this.Question = 4;
//         _this.no1++;
         console.log("four");
           
        // _this.bounds = new Phaser.Rectangle(111,98, 684, 380);
           
    	    _this.changeTexture2();

            _this.group1=this.add.group();
          _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.visibility=true;
         this.enablebuttons2();
    },
    /******************fifthquestionwheel***************************************/
     gotoFifthQuestion:function(){
         
    	
        _this.Question = 5;
//         _this.no1++;
         console.log("five");
        
        // _this.bounds = new Phaser.Rectangle(110,41, 670, 485);
        
         _this.changeTexture2();

            _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.visibility=true;
         this.enablebuttons2();
    },
 /******************sixthquestionwheel***************************************/
     gotosixthQuestion:function(){
         
        _this.Question = 6;
//         _this.no1++;
         console.log("five");
        
         ///_this.bounds = new Phaser.Rectangle(110,41, 670, 485);
        
         _this.changeTexture2();

             _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.visibility=true;
         this.enablebuttons2();
    },
    
    addListeners:function()
	{
		_this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.checkAns,_this);

	},
    
    checkAns:function(target)
	{ 
        target.input.enableDrag(true);
       
    },
     getVoice:function(){
       
        _this.stopVoice();	
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
         console.log("voice"+_this.qArrays[_this.no1]);
        switch(_this.qArrays[_this.no1])
        {
            case 1:
                
                   if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/English/sg16.1.4a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Hindi/sg16.1.4a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Kannada/sg16.1.4a.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Gujrati/sg16.1.4a.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Marathi/sg16.1.4a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Telugu/sg16.1.4a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Tamil/sg16.1.4a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Urdu/sg16.1.4a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Odiya/sg16.1.4a.mp3");  
                    }
                break;
            case 2:
                 if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/English/sg16.1.4b.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Hindi/sg16.1.4b.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Kannada/sg16.1.4b.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Gujrati/sg16.1.4b.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Marathi/sg16.1.4b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Telugu/sg16.1.4b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Tamil/sg16.1.4b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Urdu/sg16.1.4b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Odiya/sg16.1.4b.mp3");
                        
                    }
                break;
            case 3:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/English/sg16.1.4c.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Hindi/sg16.1.4c.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Kannada/sg16.1.4c.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Gujrati/sg16.1.4c.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Marathi/sg16.1.4c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Telugu/sg16.1.4c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Tamil/sg16.1.4c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Urdu/sg16.1.4c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Odiya/sg16.1.4c.mp3");
                        
                    }
                break;
            case 4:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/English/sg16.1.4d.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Hindi/sg16.1.4d.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Kannada/sg16.1.4d.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Gujrati/sg16.1.4d.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Marathi/sg16.1.4d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Telugu/sg16.1.4d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Tamil/sg16.1.4d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Urdu/sg16.1.4d.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Odiya/sg16.1.4d.mp3");
                        
                    }
                break;
            case 5:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/English/sg16.1.4e.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Hindi/sg16.1.4e.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Kannada/sg16.1.4e.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Gujrati/sg16.1.4e.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Marathi/sg16.1.4e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Telugu/sg16.1.4e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Tamil/sg16.1.4e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Urdu/sg16.1.4e.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Odiya/sg16.1.4e.mp3");  
                    }
                break;
            case 6:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/English/sg16.1.4f.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Hindi/sg16.1.4f.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Kannada/sg16.1.4f.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Gujrati/sg16.1.4f.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Marathi/sg16.1.4f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Telugu/sg16.1.4f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Tamil/sg16.1.4f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Urdu/sg16.1.4f.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg16.1.4/Odiya/sg16.1.4f.mp3");  
                    }
                break;
        }
        _this.playQuestionSound.appendChild(_this.src);
                    _this.playQuestionSound.play();
    },
    
    shuffle: function(array) {
      _this.currentIndex = array.length, _this.temporaryValue, _this.randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== _this.currentIndex) {
            
        // Pick a remaining element...
        _this.randomIndex = Math.floor(Math.random() * _this.currentIndex);
        _this.currentIndex -= 1;

        // And swap it with the current element.
        _this.temporaryValue = array[_this.currentIndex];
        array[_this.currentIndex] = array[_this.randomIndex];
        array[_this.randomIndex] = _this.temporaryValue;
  }

  return array;
},
    
  
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = this.add.group();
		
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
    
	correctAns:function()
	{
        _this.no1++;
		console.log("correct");
        //_this.speaker.inputEnabled=false;
		_this.celebration = true;
     	_this.cmusic = this.add.audio('celebr');
		_this.cmusic.play();
        this.time.events.add(500, this.removeCelebration, this);
        //target.tint = 0xA9A9A9;
         _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		console.log(_this.starAnim);
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();
        _this.rightbtn.events.onInputDown.removeAll();

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

        _this.questionid=1;
         telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
	},


    /*wrongAns:function()
	{
        console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
        console.log(_this.target);
        //target.tint = 0xA9A9A9;
        
		_this.shake.shake(10, _this.target);
		_this.wmusic = this.add.audio('waudio');
		_this.wmusic.play();
        
        //wmusic1 = this.add.audio('aiyoh');
		//wmusic1.play();
        	//this.disableListeners();
        //target.events.onInputDown.removeAll();
	},*/
    
    	removeCelebration:function()
	{
        
        console.log("remove everythg");
		console.log("removeCeleb");
		_this.celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		console.log("no"+_this.no1);
		//this.input.enabled = true;
        _this.count1++;
		//if(rightCount<=0)
		//{		
            console.log("vamitha");
            
			if(_this.no1<6)
			{
                 _this.timer1.stop();
                console.log("addq");
                 this.addQuestion(_this.count1);
			}
			else
			{
                _this.timer1.stop();
                 this.time.events.add(2000, function(){
				console.log("gameEnd");
                //this.stopAllVoice();
				this.state.start('sg16_1_4Score');
                 },this);
			}

	},
    
    
	changeQuestion:function()
	{
       
            _this.opt1.destroy();
           _this.graphics1.destroy();
        _this.graphics2.destroy();
        _this.graphics3.destroy();
        _this.graphics4.destroy();
            _this.opt2.destroy();
    
		if(_this.no1<6)
		{
            _this.count++;
			this.getQuestion();
		}
		else
		{
			console.log("gameEnd");
				//this.input.enabled = false;
				// text = this.add.text(this.world.centerX, 450, '  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0, 'rgba(0, 0, 0, 0.5)', 0);
        
               //this.state.start('level2');
              //baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            speaker1.destroy();
//            starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            speaker1.visible=false;
//            starsGroup1.visible=false;
		}
	},

    
    update:function(){

    },
  
   enablebuttons:function(){
         _this.numGroup = this.add.group();
       
        _this.rightbtn =_this.numGroup.create(890,270,'sg16.1.4_rightBtn');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1,1);
        _this.rightbtn.name = "rightbtn";

        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
        _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            target.frame=1;
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
          if( _this.Question==1)
          {
            if (_this.opt1.frame==6||_this.opt1.frame==7)
            {
                _this.opt1.visible=false;
                _this.opt2=this.add.sprite(239,88,'sg16.1.4_circle1');
                _this.opt2.frame=23;
                _this.correctAns(); 
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		   _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.opt1);
                _this.opt1.frame=0;
                _this.graphics1.x=_this.graphics1X;
                _this.graphics1.y=_this.graphics1Y;
                
                _this.graphics2.x=_this.graphics2X;
                _this.graphics2.y=_this.graphics2Y;
                
                _this.graphics3.x=_this.graphics3X;
                _this.graphics3.y=_this.graphics3Y;
                
                _this.graphics4.x=_this.graphics4X;
                _this.graphics4.y=_this.graphics4Y;
               
            }
          }
            if( _this.Question==2)
                {
                   if (_this.opt1.frame==12||_this.opt1.frame==13)
            {
               _this.opt1.visible=false;
                _this.opt2=this.add.sprite(239,88,'sg16.1.4_circle1');
                _this.opt2.frame=25;
                _this.correctAns(); 
            }
            else 
            {   
                _this.wmusic = _this.add.audio('waudio');
		   _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.opt1);
                _this.opt1.frame=0;
                _this.graphics1.x=_this.graphics1X;
                _this.graphics1.y=_this.graphics1Y;
                
                _this.graphics2.x=_this.graphics2X;
                _this.graphics2.y=_this.graphics2Y;
                
                _this.graphics3.x=_this.graphics3X;
                _this.graphics3.y=_this.graphics3Y;
                
                _this.graphics4.x=_this.graphics4X;
                _this.graphics4.y=_this.graphics4Y;
            } 
                }
            if( _this.Question==3)
                {
                   if (_this.opt1.frame==19)
            {
               _this.opt1.visible=false;
                _this.opt2=this.add.sprite(239,88,'sg16.1.4_circle1');
                _this.opt2.frame=27;
                _this.correctAns(); 
            }
            else 
            {   
                _this.wmusic = _this.add.audio('waudio');
		   _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
               _this.shake.shake(10,_this.opt1);
                _this.opt1.frame=0;
                _this.graphics1.x=_this.graphics1X;
                _this.graphics1.y=_this.graphics1Y;
                
                _this.graphics2.x=_this.graphics2X;
                _this.graphics2.y=_this.graphics2Y;
                
                _this.graphics3.x=_this.graphics3X;
                _this.graphics3.y=_this.graphics3Y;
                
                _this.graphics4.x=_this.graphics4X;
                _this.graphics4.y=_this.graphics4Y;
              
                }
                }
            
              //  _this.numGroup.add(_this.box);
            
        },this);
        _this.rightbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this);
    },
     enablebuttons2:function(){
         _this.numGroup = this.add.group();
        _this.rightbtn =_this.numGroup.create(890,270,'sg16.1.4_rightBtn');
        _this.rightbtn.anchor.setTo(0.5);
       _this.rightbtn.scale.setTo(1,1);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
        _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
          target.frame=1;
            if( _this.Question==4)
                {
                   if (_this.opt1.frame==6||_this.opt1.frame==7)
            {
                
              _this.opt1.visible=false;
                _this.opt2=this.add.sprite(239,88,'sg16.1.4_circle1');
                _this.opt2.frame=9;
                _this.correctAns(); 
            }
            else 
            {   
                _this.wmusic = _this.add.audio('waudio');
		   _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.opt1);
                _this.opt1.frame=0;
                _this.graphics1.x=_this.graphics1X;
                _this.graphics1.y=_this.graphics1Y;
                
                _this.graphics2.x=_this.graphics2X;
                _this.graphics2.y=_this.graphics2Y;
                
                _this.graphics3.x=_this.graphics3X;
                _this.graphics3.y=_this.graphics3Y;
                
                _this.graphics4.x=_this.graphics4X;
                _this.graphics4.y=_this.graphics4Y;
            } 
                }
            if( _this.Question==5)
                {
                   if (_this.opt1.frame==12||_this.opt1.frame==13)
            {
               _this.opt1.visible=false; 
               _this.opt2=this.add.sprite(239,88,'sg16.1.4_circle1');
                _this.opt2.frame=14;
                _this.correctAns(); 
            }
            else 
            {   
                _this.wmusic = _this.add.audio('waudio');
		   _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.opt1);
                _this.opt1.frame=0;
                _this.graphics1.x=_this.graphics1X;
                _this.graphics1.y=_this.graphics1Y;
                
                _this.graphics2.x=_this.graphics2X;
                _this.graphics2.y=_this.graphics2Y;
                
                _this.graphics3.x=_this.graphics3X;
                _this.graphics3.y=_this.graphics3Y;
                
                _this.graphics4.x=_this.graphics4X;
                _this.graphics4.y=_this.graphics4Y;
            } 
                }
            if( _this.Question==6)
                {
                   if (_this.opt1.frame==19)
            {
                
               _this.opt1.visible=false;
                _this.opt2=this.add.sprite(239,88,'sg16.1.4_circle1');
                _this.opt2.frame=19;
                _this.correctAns(); 
            }
            else 
            {   
                _this.wmusic = _this.add.audio('waudio');
		   _this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
              _this.shake.shake(10,_this.opt1);
                _this.opt1.frame=0;
                _this.graphics1.x=_this.graphics1X;
                _this.graphics1.y=_this.graphics1Y;
                
                _this.graphics2.x=_this.graphics2X;
                _this.graphics2.y=_this.graphics2Y;
                
                _this.graphics3.x=_this.graphics3X;
                _this.graphics3.y=_this.graphics3Y;
                
                _this.graphics4.x=_this.graphics4X;
                _this.graphics4.y=_this.graphics4Y;
            } 
                }
              //  _this.numGroup.add(_this.box);
            
        },this);
        _this.rightbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this);
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
  stopVoice:function()
	{		
		// _timer1.stop();
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
   /* disableallbuttons:function(){
        a1.events.onInputDown.removeAll();
        rightbtn.events.onInputDown.removeAll();
        wrongbtn.events.onInputDown.removeAll();
        opt1.events.onInputDown.removeAll();
        opt2.events.onInputDown.removeAll();
        opt3.events.onInputDown.removeAll();
       // numGroup.inputEnabled=false;
        //boxclick='';
    }*/
    shutdown:function()
    {
        _this.stopVoice();
    }
};