Game.length_MLG_2_1level1=function(){};


Game.length_MLG_2_1level1.prototype={

	init:function()
	{
		_this = this;

		this.score =parseInt(window.score);

		/*_this.gameid = "2.3";
		
		_this.currentTime = window.timeSaveFunc();
		_this.saveGameplay = 
		{ 
			id_game:_this.gameid, 
			access_token:window.acctkn, 
			start_time:_this.currentTime
		} 
		_this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

		//telInitializer.gameIdInit("length2_3",gradeSelected);
		 _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level23_bg1');
        commonNavBar.addNavBar(this,null,"measurement1");
        commonNavBar.addTimerToTheGame(this,0,0,0);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
        telInitializer2.gameIdInit2("MLG2.1");
        
	},


	create:function(game){

		this.hintparams=['MTG3.3','level2',false,false,false,0];
        commonNavBar.addHint(game,this.hintparams);

		_this.amplify = null;
 this.Stararr = [];
		_this.questionid=null;

		this.playedwithHint = false;
		this.completelyplayed = false;
		
		_this.noofAttempts=0;
		_this.AnsTimerCount=0;
		_this.sceneCount = 0;
		
		//baudio.play(); 
		//baudio.loopFull(0.6);
	 	_this.no1=0;
		_this.no2=0;
		_this.coverVAr=-1;
		_this.count1=0;
		_this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		_this.count=0;
		_this.opt1X=659;
		_this.opt1Y=350;
		_this.opt2X=659;
		_this.opt2Y=210;
		_this.opt3X=659;
		_this.opt3Y=75;
		_this.qArray = new Array();
		_this.qArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
		
		_this.qArray = _this.shuffle(_this.qArray);
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

		

		//_this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'Level23_bg1');
	   // _this.bg1.scale.setTo(1.05,1.12);
	   /*  var backbtn = _this.add.button(5,1,'Level23_CommonBackBtn',function(){
			_this.stopVoice();
			_this.state.start('grade1levelSelectionScreen');
		},_this,1,0,2);*/

		/*_this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1.1);
		
		_this.backbtn = this.add.button(10,7,'grade11_backbtn',function(){console.log("here");},_this,0,1,2);
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

       _this.speakerbtn = this.add.button(590,9,'grade11_speaker',function(){},this,1,0,2);
	  // _this.speakerbtn.inputEnabled = true;
		_this.speakerbtn.events.onInputDown.add(function()
		{
			
		   _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
			_this.getVoice();
			
		},_this);

		  _this.timebg=this.add.sprite(300,9,'Level42C_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1.2,1);


            this.timeDisplay = this.add.text(330,25,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';

*/
          /*  _this.dottedBox=this.add.sprite(70,7,'dottedBox');
            _this.dottedBox.name="dottedBox";
            _this.numTxt1 = this.add.text(45,17, 'PRACTICE');
            _this.numTxt1.anchor.setTo(0.5);
            _this.numTxt1.scale.setTo(1.2,1.2);
            _this.numTxt1.align = 'center';
            _this.numTxt1.font = 'Alte Haas Grotesk';
            _this.numTxt1.fontSize = 10;
            _this.numTxt1.fill = '#ffffff';
            _this.numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            _this.dottedBox.addChild(_this.numTxt1);
        
            _this.numTxt2 = this.add.text(220,24, 'Length');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
		
       _this.generateStarsForTheScene(game,9);
		

		

		
		
		
		
		
//            flagmain11Anim = game.add.sprite(100, 100,'Level23_giraffe','Symbol 2 instance 10000');
//            flagmain11Anim.scale.setTo(1.0,1.0);
//            flagmain11Anim.x=-400;
//            flagmain11Anim.y=170;
//            flagmain11Anim.smoothed = true;
		
		
	   
		
				
			_this.getQuestion();

   
	
	},
	addQuestion:function(no2)
	{

		   //console.log("here");
		_this.time.events.add(2000, function(){
	  		var tween = _this.add.tween(flagGroup1);
			var tween2 = _this.add.tween(_this.optionsgrp);
				   
			tween.to({ x: -1000 }, 0,'Linear', true, 0);
			tween2.to({ x: -1000 }, 0,'Linear', true, 0);
			tween.onComplete.add(_this.changeQuestion, _this);
		
		}, _this);
			
	},
	
	 gotoFirstQuestion:function(){
		_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;

		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		 
		 
		 _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		_this.mainFlag = _this.add.sprite(490,250,'Level23_tree1');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(0.9,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,278,'Level23_leaf1');
	   // _this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringLeaf";
		_this.mainFlag1.scale.setTo(0.75,0.68);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
		//},_this);
	   
		
		_this.mainFlag2 = _this.add.sprite(630,245,'Level23_line1');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.9,1);
		 
	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+150, _this.world.centerY+40);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		//_this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 120);
		_this.wronggraphics1.lineTo(120, 120);
		_this.wronggraphics1.lineTo(120, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   //_this.wronggraphics1.angle = 198;
	  	_this.wronggraphics1.alpha = 0;
		_this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		_this.wronggraphics2 = _this.add.graphics(_this.world.centerX+150, _this.world.centerY-80);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 120);
		_this.wronggraphics2.lineTo(120, 120);
		_this.wronggraphics2.lineTo(120, 0);
		_this.wronggraphics2.lineTo(0, 0);
	  //  _this.wronggraphics2.angle = 198;
		_this.wronggraphics2.alpha = 0;
		_this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+150, _this.world.centerY-200);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 120);
		_this.wronggraphics3.lineTo(120, 120);
		_this.wronggraphics3.lineTo(120, 0);
		_this.wronggraphics3.lineTo(0, 0);
	  //  _this.wronggraphics3.angle = 198;
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_leaf','Symbol 20 instance 10000');
		_this.opt1.scale.setTo(1.0,1.05);
		_this.opt1.anchor.setTo(0.24,0.13);
		_this.opt1.name = "_this.opt1";
		_this.opt1.x=659;
		_this.opt1.y=308;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_leaf','Symbol 20 instance 10000');
		_this.opt2.scale.setTo(1.0,1.05);
		_this.opt2.anchor.setTo(0.24,0.13);
		_this.opt2.x=659;
		_this.opt2.y=185;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_leaf','Symbol 20 instance 10000');
		_this.opt3.scale.setTo(1.0,1.05);
		_this.opt3.anchor.setTo(0.24,0.13);
		_this.opt3.x=659;
		_this.opt3.y=65;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
	  	_this.opt3.visible=false;

		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);

		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 
		_this.mainFlag1.x = _this.opt1.x;
		_this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	 
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
			// _this.addQuestion(_this.count1);
			//_this.getQuestion();

			_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 	}, _this);      
	  
	},
	 
	gotoSecondQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		  _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		  _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		
		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(490,270,'Level23_pencil');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.9,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_cutter1');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringSharpner"
		_this.mainFlag1.scale.setTo(0.7,0.7);
	   // _this.time.events.add(6500,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(520,250,'Level23_line1');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.9,1);
		 
	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY+90);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 70);
		_this.wronggraphics1.lineTo(70, 70);
		_this.wronggraphics1.lineTo(70, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		_this.wronggraphics2 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY+20);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 70);
		_this.wronggraphics2.lineTo(70, 70);
		_this.wronggraphics2.lineTo(70, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY-52);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 70);
		_this.wronggraphics3.lineTo(70, 70);
		_this.wronggraphics3.lineTo(70, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY-125);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 70);
		_this.wronggraphics4.lineTo(70, 70);
		_this.wronggraphics4.lineTo(70, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
	   _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY-198);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 70);
		_this.wronggraphics5.lineTo(70, 70);
		_this.wronggraphics5.lineTo(70, 0);
		_this.wronggraphics5.lineTo(0, 0);
	   _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_cutters','Symbol 88 instance 10000');
		_this.opt1.scale.setTo(1.0,1);
		 _this.opt1.anchor.setTo(0.15,0.13);
		_this.opt1.x=540;
		_this.opt1.y=362;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_cutters','Symbol 88 instance 10000');
		_this.opt2.scale.setTo(1.0,1);
		  _this.opt2.anchor.setTo(0.15,0.13);
		_this.opt2.x=540;
		_this.opt2.y=289;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_cutters','Symbol 88 instance 10000');
		_this.opt3.scale.setTo(1.0,1);
		  _this.opt3.anchor.setTo(0.15,0.13);
		_this.opt3.x=540;
		_this.opt3.y=216;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_cutters','Symbol 88 instance 10000');
		_this.opt4.scale.setTo(1.0,1);
		  _this.opt4.anchor.setTo(0.15,0.13);
		_this.opt4.x=540;
		_this.opt4.y=142;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		_this.opt5 = _this.add.sprite(0, 0,'Level23_cutters','Symbol 88 instance 10000');
		_this.opt5.scale.setTo(1.0,1);
		  _this.opt5.anchor.setTo(0.15,0.13);
		_this.opt5.x=540;
		_this.opt5.y=67;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
	  
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		   flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		 
		_this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;

			_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
	
	gotoThirdQuestion:function(){
		_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		 
		_this.mainFlag = _this.add.sprite(485,280,'Level23_crocodile');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.92,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(910,270,'Level23_crocodile1');
		_this.mainFlag1.anchor.setTo(0.5,0.6);
		//_this.mainFlag1.scale.setTo(0.75,0.75);
		//_this.time.events.add(6100,function(){
			 _this.mainFlag1.name = "Level23_measuringCrocodile";
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(477,350,'Level23_line2');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.91,1.1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-350, _this.world.centerY+60);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 110);
		_this.wronggraphics1.lineTo(110, 110);
		_this.wronggraphics1.lineTo(110, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-230, _this.world.centerY+60);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 110);
		_this.wronggraphics2.lineTo(110, 110);
		_this.wronggraphics2.lineTo(110, 0);
		_this.wronggraphics2.lineTo(0, 0);
	   _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-110, _this.world.centerY+60);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 110);
		_this.wronggraphics3.lineTo(110, 110);
		_this.wronggraphics3.lineTo(110, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+10, _this.world.centerY+60);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 110);
		_this.wronggraphics4.lineTo(110, 110);
		_this.wronggraphics4.lineTo(110, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
	   _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+130, _this.world.centerY+60);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 110);
		_this.wronggraphics5.lineTo(110, 110);
		_this.wronggraphics5.lineTo(110, 0);
		_this.wronggraphics5.lineTo(0, 0);
		_this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+250, _this.world.centerY+60);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		 _this.wronggraphics6.lineTo(0, 110);
		_this.wronggraphics6.lineTo(110, 110);
		_this.wronggraphics6.lineTo(110, 0);
		_this.wronggraphics6.lineTo(0, 0);
	   _this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_crocs','Symbol 28 instance 10000');
		_this.opt1.scale.setTo(0.9,0.9);
 _this.opt1.anchor.setTo(0.5);
		_this.opt1.x=180;
		_this.opt1.y=390;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_crocs','Symbol 28 instance 10000');
		_this.opt2.scale.setTo(0.9,0.9);
		 _this.opt2.anchor.setTo(0.5);
		_this.opt2.x=300;
		_this.opt2.y=390;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_crocs','Symbol 28 instance 10000');
		_this.opt3.scale.setTo(0.9,0.9);
				
  _this.opt3.anchor.setTo(0.5);
		_this.opt3.x=420;
		_this.opt3.y=390;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_crocs','Symbol 28 instance 10000');
		_this.opt4.scale.setTo(0.9,0.9);
		  _this.opt4.anchor.setTo(0.5);
		_this.opt4.x=540;
		_this.opt4.y=390;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		_this.opt5 = _this.add.sprite(0, 0,'Level23_crocs','Symbol 28 instance 10000');
		_this.opt5.scale.setTo(0.9,0.9);
		  _this.opt5.anchor.setTo(0.5);
		_this.opt5.x=660;
		_this.opt5.y=390;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
	   _this.opt5.visible=false;
		
		_this.opt6 = _this.add.sprite(0, 0,'Level23_crocs','Symbol 28 instance 10000');
		_this.opt6.scale.setTo(0.9,0.9);
		  _this.opt6.anchor.setTo(0.5);
		_this.opt6.x=780;
		_this.opt6.y=390;
		_this.opt6.smoothed = true;
		_this.opt6.frame=1;
		_this.opt6.visible=false;
		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
	   _this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		flagGroup1 = _this.add.group();
		 

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		_this.wrngGraphicgrp.add(_this.wronggraphics6);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		 _this.optionsgrp.add(_this.opt6);  
		
			   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
	
	 gotoFourthQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;

	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;

	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;

		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;

	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		_this.mainFlag = _this.add.sprite(478,300,'Level23_snake');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(1.11,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_bug1');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringBug";
		_this.mainFlag1.scale.setTo(1.2,1);
		//_this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(464,330,'Level23_line2');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.89,1.1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-370, _this.world.centerY+70);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 75);
		_this.wronggraphics1.lineTo(75, 75);
		_this.wronggraphics1.lineTo(75, 0);
		_this.wronggraphics1.lineTo(0, 0);
	  _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-290, _this.world.centerY+70);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 75);
		_this.wronggraphics2.lineTo(75, 75);
		_this.wronggraphics2.lineTo(75, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-210, _this.world.centerY+70);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 75);
		_this.wronggraphics3.lineTo(75, 75);
		_this.wronggraphics3.lineTo(75, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX-130, _this.world.centerY+70);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 75);
		_this.wronggraphics4.lineTo(75, 75);
		_this.wronggraphics4.lineTo(75, 0);
		_this.wronggraphics4.lineTo(0, 0);
	   _this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
	   _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-50, _this.world.centerY+70);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 75);
		_this.wronggraphics5.lineTo(75, 75);
		_this.wronggraphics5.lineTo(75, 0);
		_this.wronggraphics5.lineTo(0, 0);
	   _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+30, _this.world.centerY+70);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		 _this.wronggraphics6.lineTo(0, 75);
		_this.wronggraphics6.lineTo(75, 75);
		_this.wronggraphics6.lineTo(75, 0);
		_this.wronggraphics6.lineTo(0, 0);
	   _this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		 _this.wronggraphics7 = _this.add.graphics(_this.world.centerX+110, _this.world.centerY+70);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);
		 _this.wronggraphics7.lineTo(0, 75);
		_this.wronggraphics7.lineTo(75, 75);
		_this.wronggraphics7.lineTo(75, 0);
		_this.wronggraphics7.lineTo(0, 0);
	   _this.wronggraphics7.alpha = 0;
		 _this.wronggraphics7.inputEnabled = true;
		_this.wronggraphics7.input.useHandCursor = true;
		 
		 _this.wronggraphics8 = _this.add.graphics(_this.world.centerX+190, _this.world.centerY+70);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);
		 _this.wronggraphics8.lineTo(0, 75);
		_this.wronggraphics8.lineTo(75, 75);
		_this.wronggraphics8.lineTo(75, 0);
		_this.wronggraphics8.lineTo(0, 0);
	 _this.wronggraphics8.alpha = 0;
		 _this.wronggraphics8.inputEnabled = true;
		_this.wronggraphics8.input.useHandCursor = true;
		 
		 _this.wronggraphics9 = _this.add.graphics(_this.world.centerX+270, _this.world.centerY+70);
		_this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics9.beginFill(0xFF700B, 1);
		 _this.wronggraphics9.lineTo(0, 75);
		_this.wronggraphics9.lineTo(75, 75);
		_this.wronggraphics9.lineTo(75, 0);
		_this.wronggraphics9.lineTo(0, 0);
	   _this.wronggraphics9.alpha = 0;
		 _this.wronggraphics9.inputEnabled = true;
		_this.wronggraphics9.input.useHandCursor = true;
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt1.scale.setTo(1.2,0.9);
		  _this.opt1.anchor.setTo(0.16,0.187);
		_this.opt1.x=110;
		_this.opt1.y=350;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt2.scale.setTo(1.2,0.9);
		  _this.opt2.anchor.setTo(0.16,0.187);
		_this.opt2.x=190;
		_this.opt2.y=350;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt3.scale.setTo(1.2,0.9);
		 _this.opt3.anchor.setTo(0.16,0.187);
		_this.opt3.x=267;
		_this.opt3.y=350;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt4.scale.setTo(1.2,0.9);
		 _this.opt4.anchor.setTo(0.16,0.187);
		_this.opt4.x=342;
		_this.opt4.y=350;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		_this.opt5 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt5.scale.setTo(1.2,0.9);
		 _this.opt5.anchor.setTo(0.16,0.187);
		_this.opt5.x=420;
		_this.opt5.y=350;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		
		_this.opt6 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt6.scale.setTo(1.2,0.9);
		 _this.opt6.anchor.setTo(0.16,0.187);
		_this.opt6.x=498;
		_this.opt6.y=350;
		_this.opt6.smoothed = true;
		_this.opt6.frame=1;
		_this.opt6.visible=false;
		 
		_this.opt7 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt7.scale.setTo(1.2,0.9);
		 _this.opt7.anchor.setTo(0.16,0.187);
		_this.opt7.x=578;
		_this.opt7.y=350;
		_this.opt7.smoothed = true;
		_this.opt7.frame=1;
		_this.opt7.visible=false;
		 
		_this.opt8 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt8.scale.setTo(1.2,0.9);
		 _this.opt8.anchor.setTo(0.16,0.187);
		_this.opt8.x=657;
		_this.opt8.y=350;
		_this.opt8.smoothed = true;
		_this.opt8.frame=1;
		_this.opt8.visible=false;

		_this.opt9 = _this.add.sprite(0, 0,'Level23_buggs','Symbol 32 instance 10000');
		_this.opt9.scale.setTo(1.2,0.9);
		 _this.opt9.anchor.setTo(0.16,0.187);
		_this.opt9.x=734;
		_this.opt9.y=350;
		_this.opt9.smoothed = true;
		_this.opt9.frame=1;
		_this.opt9.visible=false;
		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		_this.wrngGraphicgrp.add(_this.wronggraphics6);
		 _this.wrngGraphicgrp.add(_this.wronggraphics7);
		 _this.wrngGraphicgrp.add(_this.wronggraphics8);
		 _this.wrngGraphicgrp.add(_this.wronggraphics9);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		 _this.optionsgrp.add(_this.opt6);  
		 _this.optionsgrp.add(_this.opt7); 
		 _this.optionsgrp.add(_this.opt8); 
		 _this.optionsgrp.add(_this.opt9); 
		 
			  _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;

			_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.correctAns,_this);

	 }, _this);      
		
	},
	
	  gotoFifthQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
	
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		 
		_this.mainFlag = _this.add.sprite(480,265,'Level23_Window');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.9,1.25);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm1');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringPalm";
		_this.mainFlag1.scale.setTo(0.461,0.561);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(580,250,'Level23_line1');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.9,0.95);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+85);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 70);
		_this.wronggraphics1.lineTo(70, 70);
		_this.wronggraphics1.lineTo(70, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+13);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 70);
		_this.wronggraphics2.lineTo(70, 70);
		_this.wronggraphics2.lineTo(70, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-58);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 70);
		_this.wronggraphics3.lineTo(70, 70);
		_this.wronggraphics3.lineTo(70, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-128);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 70);
		_this.wronggraphics4.lineTo(70, 70);
		_this.wronggraphics4.lineTo(70, 0);
		_this.wronggraphics4.lineTo(0, 0);
	   _this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
	   _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-200);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 70);
		_this.wronggraphics5.lineTo(70, 70);
		_this.wronggraphics5.lineTo(70, 0);
		_this.wronggraphics5.lineTo(0, 0);
		_this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt1.scale.setTo(1.1,1.3);
		  _this.opt1.anchor.setTo(0.23,0.187);
		_this.opt1.x=600;
		_this.opt1.y=355;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt2.scale.setTo(1.1,1.3);
				_this.opt2.anchor.setTo(0.23,0.187);
		_this.opt2.x=600;
		_this.opt2.y=285;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt3.scale.setTo(1.1,1.3);
				_this.opt3.anchor.setTo(0.23,0.187);
		_this.opt3.x=600;
		_this.opt3.y=215;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt4.scale.setTo(1.1,1.3);
				_this.opt4.anchor.setTo(0.23,0.187);
		_this.opt4.x=600;
		_this.opt4.y=145;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		_this.opt5 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt5.scale.setTo(1.1,1.3);
				_this.opt5.anchor.setTo(0.23,0.187);
		_this.opt5.x=600;
		_this.opt5.y=75;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		  flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		
		   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			 _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	
			_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	gotoSixthQuestion:function(){
		_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			  _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			  _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(480,263,'Level23_petrol');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.9,1.09);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm1');
	   // _this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringPalm";
		_this.mainFlag1.scale.setTo(0.461,0.491);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(580,250,'Level23_line1');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.9,0.98);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+105);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 60);
		_this.wronggraphics1.lineTo(60, 60);
		_this.wronggraphics1.lineTo(60, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+43);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 60);
		_this.wronggraphics2.lineTo(60, 60);
		_this.wronggraphics2.lineTo(60, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-19);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 60);
		_this.wronggraphics3.lineTo(60, 60);
		_this.wronggraphics3.lineTo(60, 0);
		_this.wronggraphics3.lineTo(0, 0);
	_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-81);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 60);
		_this.wronggraphics4.lineTo(60, 60);
		_this.wronggraphics4.lineTo(60, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
	   _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-143);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 60);
		_this.wronggraphics5.lineTo(60, 60);
		_this.wronggraphics5.lineTo(60, 0);
		_this.wronggraphics5.lineTo(0, 0);
		_this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		
		_this.wronggraphics6 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-205);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		 _this.wronggraphics6.lineTo(0, 60);
		_this.wronggraphics6.lineTo(60, 60);
		_this.wronggraphics6.lineTo(60, 0);
		_this.wronggraphics6.lineTo(0, 0);
		_this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt1.scale.setTo(1.1,1.1);
		 _this.opt1.anchor.setTo(0.23,0.187);
		_this.opt1.x=600;
		_this.opt1.y=370;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt2.scale.setTo(1.1,1.1);
		 _this.opt2.anchor.setTo(0.23,0.187);
		_this.opt2.x=600;
		_this.opt2.y=310;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt3.scale.setTo(1.1,1.1);
		 _this.opt3.anchor.setTo(0.23,0.187);
		_this.opt3.x=600;
		_this.opt3.y=250;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt4.scale.setTo(1.1,1.1);
		 _this.opt4.anchor.setTo(0.23,0.187);
		_this.opt4.x=600;
		_this.opt4.y=190;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		_this.opt5 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt5.scale.setTo(1.1,1.1);
		 _this.opt5.anchor.setTo(0.23,0.187);
		_this.opt5.x=600;
		_this.opt5.y=127;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		
		_this.opt6 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt6.scale.setTo(1.1,1.1);
		 _this.opt6.anchor.setTo(0.23,0.187);
		_this.opt6.x=600;
		_this.opt6.y=65;
		_this.opt6.smoothed = true;
		_this.opt6.frame=1;
		_this.opt6.visible=false;
		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		 _this.wrngGraphicgrp.add(_this.wronggraphics6);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		 _this.optionsgrp.add(_this.opt6);
		
		 _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
		  	
		  	_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	gotoSeventhQuestion:function(){
		_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		 
		_this.mainFlag = _this.add.sprite(480,293,'Level23_tablebox');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.9,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm1');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringPalm";
		_this.mainFlag1.scale.setTo(0.461,0.5);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(580,280,'Level23_line1');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.9,0.685);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+73);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 60);
		_this.wronggraphics1.lineTo(60, 60);
		_this.wronggraphics1.lineTo(60, 0);
		_this.wronggraphics1.lineTo(0, 0);
	  _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+9);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 60);
		_this.wronggraphics2.lineTo(60, 60);
		_this.wronggraphics2.lineTo(60, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-51);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 60);
		_this.wronggraphics3.lineTo(60, 60);
		_this.wronggraphics3.lineTo(60, 0);
		_this.wronggraphics3.lineTo(0, 0);
	_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-113);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 60);
		_this.wronggraphics4.lineTo(60, 60);
		_this.wronggraphics4.lineTo(60, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt1.scale.setTo(1.1,1.1);
		_this.opt1.anchor.setTo(0.23,0.187);
		_this.opt1.x=600;
		_this.opt1.y=343;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt2.scale.setTo(1.1,1.1);
		_this.opt2.anchor.setTo(0.23,0.187);
		_this.opt2.x=600;
		_this.opt2.y=280;
		_this.opt2.smoothed = true;
		_this.opt2.frame=0;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt3.scale.setTo(1.1,1.1);
		_this.opt3.anchor.setTo(0.23,0.187);
		_this.opt3.x=600;
		_this.opt3.y=219;
		_this.opt3.smoothed = true;
		_this.opt3.frame=0;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt4.scale.setTo(1.1,1.1);
		_this.opt4.anchor.setTo(0.23,0.187);
		_this.opt4.x=600;
		_this.opt4.y=157;
		_this.opt4.smoothed = true;
		_this.opt4.frame=0;
		_this.opt4.visible=false;
		 

		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);

		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);

		   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			 _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
	gotoEighthQuestion:function(){
		_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
			 _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			 _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(480,263,'Level23_Can');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.9,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm1');
	   // _this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringPalm"
		_this.mainFlag1.scale.setTo(0.5,0.5);
	 //   _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(560,250,'Level23_Line8');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.9,1.05);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+70, _this.world.centerY+20);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 60);
		_this.wronggraphics1.lineTo(60, 60);
		_this.wronggraphics1.lineTo(60, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+70, _this.world.centerY-49);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 60);
		_this.wronggraphics2.lineTo(60, 60);
		_this.wronggraphics2.lineTo(60, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+70, _this.world.centerY-120);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 60);
		_this.wronggraphics3.lineTo(60, 60);
		_this.wronggraphics3.lineTo(60, 0);
		_this.wronggraphics3.lineTo(0, 0);
	_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 

		 
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt1.scale.setTo(1.1,1.14);
			_this.opt1.anchor.setTo(0.23,0.187);
		_this.opt1.x=580;
		_this.opt1.y=282;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt2.scale.setTo(1.1,1.14);
			_this.opt2.anchor.setTo(0.23,0.187);
		_this.opt2.x=580;
		_this.opt2.y=221;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_palms','Symbol 36 instance 10000');
		_this.opt3.scale.setTo(1.1,1.14);
			_this.opt3.anchor.setTo(0.23,0.187);
		_this.opt3.x=580;
		_this.opt3.y=160;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
  


		 
	   
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
			 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
   

		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 
  _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	  gotoNinethQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		_this.mainFlag = _this.add.sprite(491,300,'Level23_Shoes');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(1.11,1.15);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm2');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringPalm";
		_this.mainFlag1.scale.setTo(1.09,1.15);
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(477,360,'Level23_Line9');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1.06,1.1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-140, _this.world.centerY+110);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 62);
		_this.wronggraphics1.lineTo(62, 62);
		_this.wronggraphics1.lineTo(62, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-73, _this.world.centerY+110);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 62);
		_this.wronggraphics2.lineTo(62, 62);
		_this.wronggraphics2.lineTo(62, 0);
		_this.wronggraphics2.lineTo(0, 0);
	   _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-5, _this.world.centerY+110);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 62);
		_this.wronggraphics3.lineTo(62, 62);
		_this.wronggraphics3.lineTo(62, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY+110);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 62);
		_this.wronggraphics4.lineTo(62, 62);
		_this.wronggraphics4.lineTo(62, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 

		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt1.scale.setTo(1.1,1.1);
		   _this.opt1.anchor.setTo(0.16,0.19);
		_this.opt1.x=355;
		_this.opt1.y=380;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt2.scale.setTo(1.1,1.1);
		   _this.opt2.anchor.setTo(0.16,0.19);
		_this.opt2.x=415;
		_this.opt2.y=380;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt3.scale.setTo(1.1,1.1);
		   _this.opt3.anchor.setTo(0.16,0.19);
		_this.opt3.x=475;
		_this.opt3.y=380;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt4.scale.setTo(1.1,1.1);
		   _this.opt4.anchor.setTo(0.16,0.19);
		_this.opt4.x=535;
		_this.opt4.y=380;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		  flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);

		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		  
		 _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	 gotoTenthQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
			 _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			 _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
	


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(498,260,'Level23_soffa');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.97,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm2');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringPalm";
		_this.mainFlag1.scale.setTo(1,1);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(484,360,'Level23_Line10');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.97,1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-250, _this.world.centerY+100);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 55);
		_this.wronggraphics1.lineTo(55, 55);
		_this.wronggraphics1.lineTo(55, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-193, _this.world.centerY+100);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 55);
		_this.wronggraphics2.lineTo(55, 55);
		_this.wronggraphics2.lineTo(55, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-136, _this.world.centerY+100);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 55);
		_this.wronggraphics3.lineTo(55, 55);
		_this.wronggraphics3.lineTo(55, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX-80, _this.world.centerY+100);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 55);
		_this.wronggraphics4.lineTo(55, 55);
		_this.wronggraphics4.lineTo(55, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-23, _this.world.centerY+100);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 55);
		_this.wronggraphics5.lineTo(55, 55);
		_this.wronggraphics5.lineTo(55, 0);
		_this.wronggraphics5.lineTo(0, 0);
	   _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+33, _this.world.centerY+100);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		 _this.wronggraphics6.lineTo(0, 55);
		_this.wronggraphics6.lineTo(55, 55);
		_this.wronggraphics6.lineTo(55, 0);
		_this.wronggraphics6.lineTo(0, 0);
		_this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		  _this.wronggraphics7 = _this.add.graphics(_this.world.centerX+87, _this.world.centerY+100);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);
		 _this.wronggraphics7.lineTo(0, 55);
		_this.wronggraphics7.lineTo(55, 55);
		_this.wronggraphics7.lineTo(55, 0);
		_this.wronggraphics7.lineTo(0, 0);
		_this.wronggraphics7.alpha = 0;
		 _this.wronggraphics7.inputEnabled = true;
		_this.wronggraphics7.input.useHandCursor = true;
		 
				  _this.wronggraphics8 = _this.add.graphics(_this.world.centerX+140, _this.world.centerY+100);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);
		 _this.wronggraphics8.lineTo(0, 55);
		_this.wronggraphics8.lineTo(55, 55);
		_this.wronggraphics8.lineTo(55, 0);
		_this.wronggraphics8.lineTo(0, 0);
		_this.wronggraphics8.alpha = 0;
		 _this.wronggraphics8.inputEnabled = true;
		_this.wronggraphics8.input.useHandCursor = true;
		 

					  _this.wronggraphics9 = _this.add.graphics(_this.world.centerX+196, _this.world.centerY+100);
		_this.wronggraphics9.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics9.beginFill(0xFF700B, 1);
		 _this.wronggraphics9.lineTo(0, 55);
		_this.wronggraphics9.lineTo(55, 55);
		_this.wronggraphics9.lineTo(55, 0);
		_this.wronggraphics9.lineTo(0, 0);
		_this.wronggraphics9.alpha = 0;
		 _this.wronggraphics9.inputEnabled = true;
		_this.wronggraphics9.input.useHandCursor = true;
		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt1.scale.setTo(1,1);
			 _this.opt1.anchor.setTo(0.16,0.19);
		_this.opt1.x=235;
		_this.opt1.y=377;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt2.scale.setTo(1,1);
			 _this.opt2.anchor.setTo(0.16,0.19);
		_this.opt2.x=290;
		_this.opt2.y=377;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt3.scale.setTo(1,1);
			 _this.opt3.anchor.setTo(0.16,0.19);
		_this.opt3.x=345;
		_this.opt3.y=377;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt4.scale.setTo(1,1);
			 _this.opt4.anchor.setTo(0.16,0.19);
		_this.opt4.x=400;
		_this.opt4.y=377;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 

		_this.opt5 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt5.scale.setTo(1,1);
			 _this.opt5.anchor.setTo(0.16,0.19);
		_this.opt5.x=455;
		_this.opt5.y=377;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 
		_this.opt6= _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt6.scale.setTo(1,1);
			 _this.opt6.anchor.setTo(0.16,0.19);
		_this.opt6.x=510;
		_this.opt6.y=377;
		_this.opt6.smoothed = true;
		_this.opt6.frame=1;
		_this.opt6.visible=false;
		 
		 
		_this.opt7= _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt7.scale.setTo(1,1);
			 _this.opt7.anchor.setTo(0.16,0.19);
		_this.opt7.x=565;
		_this.opt7.y=377;
		_this.opt7.smoothed = true;
		_this.opt7.frame=1;
		_this.opt7.visible=false;
		 
		 
		_this.opt8 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt8.scale.setTo(1,1);
			 _this.opt8.anchor.setTo(0.16,0.19);
		_this.opt8.x=620;
		_this.opt8.y=377;
		_this.opt8.smoothed = true;
		_this.opt8.frame=1;
		_this.opt8.visible=false;
		 
		_this.opt9 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt9.scale.setTo(1,1);
			 _this.opt9.anchor.setTo(0.16,0.19);
		_this.opt9.x=677;
		_this.opt9.y=377;
		_this.opt9.smoothed = true;
		_this.opt9.frame=1;
		_this.opt9.visible=false;
		 
		  
  _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		 
	   
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		  flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		  _this.wrngGraphicgrp.add(_this.wronggraphics5);
		  _this.wrngGraphicgrp.add(_this.wronggraphics6);
		  _this.wrngGraphicgrp.add(_this.wronggraphics7);
		 _this.wrngGraphicgrp.add(_this.wronggraphics8);
		  _this.wrngGraphicgrp.add(_this.wronggraphics9);

		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		_this.optionsgrp.add(_this.opt5);
		_this.optionsgrp.add(_this.opt6);
		 _this.optionsgrp.add(_this.opt7);
		 _this.optionsgrp.add(_this.opt8);
		 _this.optionsgrp.add(_this.opt9);

		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
				  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.correctAns,_this);
	 }, _this);      
		
	},
	
	  gotoEleventhQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;
		
		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";

			 _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			 _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		 
		_this.mainFlag = _this.add.sprite(497,300,'Level23_Longtable');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(1.01,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm2');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringPalm";
		_this.mainFlag1.scale.setTo(1,1);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(484,350,'Level23_Line11');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.97,1);
		 

		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-193, _this.world.centerY+90);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 55);
		_this.wronggraphics2.lineTo(55, 55);
		_this.wronggraphics2.lineTo(55, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-136, _this.world.centerY+90);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 55);
		_this.wronggraphics3.lineTo(55, 55);
		_this.wronggraphics3.lineTo(55, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX-80, _this.world.centerY+90);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 55);
		_this.wronggraphics4.lineTo(55, 55);
		_this.wronggraphics4.lineTo(55, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-23, _this.world.centerY+90);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 55);
		_this.wronggraphics5.lineTo(55, 55);
		_this.wronggraphics5.lineTo(55, 0);
		_this.wronggraphics5.lineTo(0, 0);
	   _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+33, _this.world.centerY+90);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		 _this.wronggraphics6.lineTo(0, 55);
		_this.wronggraphics6.lineTo(55, 55);
		_this.wronggraphics6.lineTo(55, 0);
		_this.wronggraphics6.lineTo(0, 0);
		_this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		  _this.wronggraphics7 = _this.add.graphics(_this.world.centerX+87, _this.world.centerY+90);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);
		 _this.wronggraphics7.lineTo(0, 55);
		_this.wronggraphics7.lineTo(55, 55);
		_this.wronggraphics7.lineTo(55, 0);
		_this.wronggraphics7.lineTo(0, 0);
		_this.wronggraphics7.alpha = 0;
		 _this.wronggraphics7.inputEnabled = true;
		_this.wronggraphics7.input.useHandCursor = true;
		 
				  _this.wronggraphics8 = _this.add.graphics(_this.world.centerX+140, _this.world.centerY+90);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);
		 _this.wronggraphics8.lineTo(0, 55);
		_this.wronggraphics8.lineTo(55, 55);
		_this.wronggraphics8.lineTo(55, 0);
		_this.wronggraphics8.lineTo(0, 0);
		_this.wronggraphics8.alpha = 0;
		 _this.wronggraphics8.inputEnabled = true;
		_this.wronggraphics8.input.useHandCursor = true;

		 

		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt1.scale.setTo(1,1);
		_this.opt1.anchor.setTo(0.16,0.19);
		_this.opt1.x=290;
		_this.opt1.y=370;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt2.scale.setTo(1,1);
		_this.opt2.anchor.setTo(0.16,0.19);
		_this.opt2.x=345;
		_this.opt2.y=370;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt3.scale.setTo(1,1);
			   _this.opt3.anchor.setTo(0.16,0.19);
		_this.opt3.x=400;
		_this.opt3.y=370;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 

		_this.opt4 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt4.scale.setTo(1,1);
			   _this.opt4.anchor.setTo(0.16,0.19);
		_this.opt4.x=455;
		_this.opt4.y=370;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		_this.opt5= _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt5.scale.setTo(1,1);
		_this.opt5.anchor.setTo(0.16,0.19);
		_this.opt5.x=510;
		_this.opt5.y=370;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 
		 
		_this.opt6= _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt6.scale.setTo(1,1);
		_this.opt6.anchor.setTo(0.16,0.19);   

		_this.opt6.x=565;
		_this.opt6.y=370;
		_this.opt6.smoothed = true;
		_this.opt6.frame=1;
		_this.opt6.visible=false;
		 
		 
		_this.opt7 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt7.scale.setTo(1,1);
		   _this.opt7.anchor.setTo(0.16,0.19);
		_this.opt7.x=620;
		_this.opt7.y=370;
		_this.opt7.smoothed = true;
		_this.opt7.frame=1;
		_this.opt7.visible=false;
		 

				   
  _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		  flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
	
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		  _this.wrngGraphicgrp.add(_this.wronggraphics5);
		  _this.wrngGraphicgrp.add(_this.wronggraphics6);
		  _this.wrngGraphicgrp.add(_this.wronggraphics7);
		 _this.wrngGraphicgrp.add(_this.wronggraphics8);


		 _this.optionsgrp.add(_this.opt1);    
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		_this.optionsgrp.add(_this.opt5);
		_this.optionsgrp.add(_this.opt6);
		 _this.optionsgrp.add(_this.opt7);
		 
   

		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
					_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	   
	  gotoTwevelvethQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		 
		_this.mainFlag = _this.add.sprite(495,260,'Level23_Suitcase');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.97,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm2');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.name = "Level23_measuringPalm";
		_this.mainFlag1.scale.setTo(1,1);
	 //   _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(483,367,'Level23_Line12');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.97,1);
		 
		

	
	   
		 
	  
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-136, _this.world.centerY+100);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 55);
		_this.wronggraphics3.lineTo(55, 55);
		_this.wronggraphics3.lineTo(55, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX-80, _this.world.centerY+100);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 55);
		_this.wronggraphics4.lineTo(55, 55);
		_this.wronggraphics4.lineTo(55, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX-23, _this.world.centerY+100);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 55);
		_this.wronggraphics5.lineTo(55, 55);
		_this.wronggraphics5.lineTo(55, 0);
		_this.wronggraphics5.lineTo(0, 0);
	   _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+33, _this.world.centerY+100);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		 _this.wronggraphics6.lineTo(0, 55);
		_this.wronggraphics6.lineTo(55, 55);
		_this.wronggraphics6.lineTo(55, 0);
		_this.wronggraphics6.lineTo(0, 0);
		_this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		  _this.wronggraphics7 = _this.add.graphics(_this.world.centerX+87, _this.world.centerY+100);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);
		 _this.wronggraphics7.lineTo(0, 55);
		_this.wronggraphics7.lineTo(55, 55);
		_this.wronggraphics7.lineTo(55, 0);
		_this.wronggraphics7.lineTo(0, 0);
		_this.wronggraphics7.alpha = 0;
		 _this.wronggraphics7.inputEnabled = true;
		_this.wronggraphics7.input.useHandCursor = true;
		 


		 
//        _this.opt1 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
//        _this.opt1.scale.setTo(1,1);
//          _this.opt1.anchor.setTo(0.16,0.19);
//        _this.opt1.x=290;
//        _this.opt1.y=390;
//        _this.opt1.smoothed = true;
//        _this.opt1.frame=0;
//       // _this.opt1.visible=false;
		 
	   _this.opt1 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt1.scale.setTo(1,1);
		  _this.opt1.anchor.setTo(0.16,0.19);
		  
		_this.opt1.x=345;
		_this.opt1.y=390;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt2.scale.setTo(1,1);
		  _this.opt2.anchor.setTo(0.16,0.19);
		_this.opt2.x=400;
		_this.opt2.y=390;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 

		_this.opt3 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt3.scale.setTo(1,1);
		  _this.opt3.anchor.setTo(0.16,0.19);
		_this.opt3.x=455;
		_this.opt3.y=390;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4= _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt4.scale.setTo(1,1);
		  _this.opt4.anchor.setTo(0.16,0.19);
		_this.opt4.x=510;
		_this.opt4.y=390;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		 
		_this.opt5= _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt5.scale.setTo(1,1);
		  _this.opt5.anchor.setTo(0.16,0.19);
		_this.opt5.x=565;
		_this.opt5.y=390;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 
		 
		_this.opt6 = _this.add.sprite(0, 0,'Level23_palm22','Symbol 43 instance 10000');
		_this.opt6.scale.setTo(1,1);
		  _this.opt6.anchor.setTo(0.16,0.19);
		_this.opt6.x=620;
		_this.opt6.y=390;
		_this.opt6.smoothed = true;
		_this.opt6.frame=1;
		_this.opt6.visible=false;
		 

		 

		 
	   
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		   flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
	
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		  _this.wrngGraphicgrp.add(_this.wronggraphics5);
		  _this.wrngGraphicgrp.add(_this.wronggraphics6);
		  _this.wrngGraphicgrp.add(_this.wronggraphics7);
  

		_this.optionsgrp.add(_this.opt1);
	 _this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		_this.optionsgrp.add(_this.opt5);
		_this.optionsgrp.add(_this.opt6);
 
	   
   
 _this.mainFlag1.x = _this.opt1.x;
		_this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
		   
	  gotoThirteenthQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(495,270,'Level23_Car');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.97,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_hand1');
	   // _this.mainFlag1.anchor.setTo(0.5);
	   // _this.mainFlag1.anchor.setTo(0.5);
		//_this.mainFlag1.scale.setTo(0.54,0.54);
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.name = "Level23_measuringHand";
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(483,360,'Level23_Line13');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.97,1);
		 
		
		 _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-285, _this.world.centerY+90);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 110);
		_this.wronggraphics1.lineTo(110, 110);
		_this.wronggraphics1.lineTo(110, 0);
		_this.wronggraphics1.lineTo(0, 0);
	  _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-170, _this.world.centerY+90);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 110);
		_this.wronggraphics2.lineTo(110, 110);
		_this.wronggraphics2.lineTo(110, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-55, _this.world.centerY+90);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 110);
		_this.wronggraphics3.lineTo(110, 110);
		_this.wronggraphics3.lineTo(110, 0);
		_this.wronggraphics3.lineTo(0, 0);
		_this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY+90);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 110);
		_this.wronggraphics4.lineTo(110, 110);
		_this.wronggraphics4.lineTo(110, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+180, _this.world.centerY+90);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		 _this.wronggraphics5.lineTo(0, 110);
		_this.wronggraphics5.lineTo(110, 110);
		_this.wronggraphics5.lineTo(110, 0);
		_this.wronggraphics5.lineTo(0, 0);
	_this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;

		 _this.opt1 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt1.scale.setTo(1,1);
		   _this.opt1.anchor.setTo(0.09,0.21);
		_this.opt1.x=190;
		_this.opt1.y=380;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;


		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt2.scale.setTo(1,1);
			 _this.opt2.anchor.setTo(0.09,0.21);
		_this.opt2.x=307;
		_this.opt2.y=380;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt3.scale.setTo(1,1);
			 _this.opt3.anchor.setTo(0.09,0.21);
		_this.opt3.x=425;
		_this.opt3.y=380;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt4.scale.setTo(1,1);
			 _this.opt4.anchor.setTo(0.09,0.21);
		_this.opt4.x=540;
		_this.opt4.y=380;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 

		_this.opt5 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt5.scale.setTo(1,1);
			 _this.opt5.anchor.setTo(0.09,0.21);
		_this.opt5.x=658;
		_this.opt5.y=380;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 
	  
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
			flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		  _this.wrngGraphicgrp.add(_this.wronggraphics1);
	_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		  _this.wrngGraphicgrp.add(_this.wronggraphics5);
	
  

	 _this.optionsgrp.add(_this.opt1);
  _this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		_this.optionsgrp.add(_this.opt5);
	
	   
	 _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;

		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;

			_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
		gotoFourteenthQuestion:function(){
			_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		 
		_this.mainFlag = _this.add.sprite(495,250,'Level23_gate');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.97,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_hand1');
	   // _this.mainFlag1.anchor.setTo(0.5);
	   // _this.mainFlag1.scale.setTo(0.54,0.54);
	  //  _this.time.events.add(6100,function(){
	  	 _this.mainFlag1.name = "Level23_measuringHand";
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(483,365,'Level23_Line14');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.97,1);
		 
		

	
	   
		 
	  
		 
		
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-170, _this.world.centerY+90);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 110);
		_this.wronggraphics2.lineTo(110, 110);
		_this.wronggraphics2.lineTo(110, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-55, _this.world.centerY+90);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 110);
		_this.wronggraphics3.lineTo(110, 110);
		_this.wronggraphics3.lineTo(110, 0);
		_this.wronggraphics3.lineTo(0, 0);
	  _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+60, _this.world.centerY+90);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 110);
		_this.wronggraphics4.lineTo(110, 110);
		_this.wronggraphics4.lineTo(110, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 




		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt1.scale.setTo(1,1);
			_this.opt1.anchor.setTo(0.09,0.21);
		_this.opt1.x=307;
		_this.opt1.y=385;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt2.scale.setTo(1,1);
		  _this.opt2.anchor.setTo(0.09,0.21);
		_this.opt2.x=425;
		_this.opt2.y=385;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt3.scale.setTo(1,1);
			_this.opt3.anchor.setTo(0.09,0.21);
		_this.opt3.x=540;
		_this.opt3.y=385;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 


		 

		 

		 
	
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
				flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		 
	_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		  
	
  


  _this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		 _this.optionsgrp.add(_this.opt3);
 
	
	   
		_this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;


		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
					_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
			 
	  gotoFifteenthQuestion:function(){
	  	console.log("15");
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(495,270,'Level23_Table');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.97,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_hand1');
		//_this.mainFlag1.anchor.setTo(0.5);
		//_this.mainFlag1.scale.setTo(0.54,0.54);
	   // _this.time.events.add(6100,function(){
	   	 _this.mainFlag1.name = "Level23_measuringHand";
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(483,370,'Level23_Line15');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.98,1);
		 
		

	
	   
		 
	  
		 
		 _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-225, _this.world.centerY+110);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 110);
		_this.wronggraphics1.lineTo(110, 110);
		_this.wronggraphics1.lineTo(110, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-110, _this.world.centerY+110);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 110);
		_this.wronggraphics2.lineTo(110, 110);
		_this.wronggraphics2.lineTo(110, 0);
		_this.wronggraphics2.lineTo(0, 0);
	   _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-5, _this.world.centerY+110);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 110);
		_this.wronggraphics3.lineTo(110, 110);
		_this.wronggraphics3.lineTo(110, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 
		_this.wronggraphics4 = _this.add.graphics(_this.world.centerX+110, _this.world.centerY+110);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		 _this.wronggraphics4.lineTo(0, 110);
		_this.wronggraphics4.lineTo(110, 110);
		_this.wronggraphics4.lineTo(110, 0);
		_this.wronggraphics4.lineTo(0, 0);
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 


		 _this.opt1 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt1.scale.setTo(1,1);
		  _this.opt1.anchor.setTo(0.09,0.21);
		_this.opt1.x=250;
		_this.opt1.y=390;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;


		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt2.scale.setTo(1,1);
		  _this.opt2.anchor.setTo(0.09,0.21);
		_this.opt2.x=365;
		_this.opt2.y=390;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt3.scale.setTo(1,1);
		  _this.opt3.anchor.setTo(0.09,0.21);
		_this.opt3.x=485;
		_this.opt3.y=390;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt4.scale.setTo(1,1);
		  _this.opt4.anchor.setTo(0.09,0.21);
		_this.opt4.x=600;
		_this.opt4.y=390;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 

  
	   
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		   flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		  _this.wrngGraphicgrp.add(_this.wronggraphics1);
	_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics4);
	  
	
  

	 _this.optionsgrp.add(_this.opt1);
  _this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
 
	
	   
	   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;

		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
				 _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	
	
		gotoSixteenthQuestion:function(){
			_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;
		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			 _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			 _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(487,330,'Level23_rope');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(0.99,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_hand1');
		//_this.mainFlag1.anchor.setTo(0.5);
		//_this.mainFlag1.scale.setTo(0.54,0.54);
	   // _this.time.events.add(6100,function(){
	   	 _this.mainFlag1.name = "Level23_measuringHand";
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(485,365,'Level23_Line16');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.98,1);
		 
		

	
	   
		 
	  
		 
	 
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-110, _this.world.centerY+110);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 110);
		_this.wronggraphics2.lineTo(110, 110);
		_this.wronggraphics2.lineTo(110, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+10, _this.world.centerY+110);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 110);
		_this.wronggraphics3.lineTo(110, 110);
		_this.wronggraphics3.lineTo(110, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
   



		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt1.scale.setTo(1,1);
			_this.opt1.anchor.setTo(0.09,0.21);
		_this.opt1.x=365;
		_this.opt1.y=390;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_hand','Symbol 50 instance 10000');
		_this.opt2.scale.setTo(1,1);
			_this.opt2.anchor.setTo(0.09,0.21);
		_this.opt2.x=485;
		_this.opt2.y=390;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 


  
	   
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
			 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		
	_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	  
	  
	
  

	 
  _this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
	  
 
		_this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
	   
   

		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
				  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	 		
	 		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	  gotoSeventeenthQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(500,270,'Level23_Chair');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(1.185,1.15);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_hand111');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.scale.setTo(0.6,0.63);
		 _this.mainFlag1.name = "Level23_measuringHand";
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(590,255,'Level23_Line17');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1.14,1.13);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+85, _this.world.centerY-160);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 130);
		_this.wronggraphics1.lineTo(130, 130);
		_this.wronggraphics1.lineTo(130, 0);
		_this.wronggraphics1.lineTo(0, 0);
	   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-20);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 130);
		_this.wronggraphics2.lineTo(130, 130);
		_this.wronggraphics2.lineTo(130, 0);
		_this.wronggraphics2.lineTo(0, 0);
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
	   
	 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt1.scale.setTo(1.1,1.15);
		   _this.opt1.anchor.setTo(0.21,0.12);
		_this.opt1.x=610;
		_this.opt1.y=260;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt2.scale.setTo(1.1,1.15);
		   _this.opt2.anchor.setTo(0.21,0.12);
		_this.opt2.x=610;
		_this.opt2.y=120;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
	
		

		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		  flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);


		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;

		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	   gotoEighteenthQuestion:function(){
		   _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

       _this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";

	   
			 _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			 _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(480,260,'Level23_door');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(1.185,1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_hand111');
		 _this.mainFlag1.name = "Level23_measuringHand";
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.scale.setTo(0.6,0.57);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(590,245,'Level23_Line18');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1.14,1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+50);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 130);
		_this.wronggraphics1.lineTo(130, 130);
		_this.wronggraphics1.lineTo(130, 0);
		_this.wronggraphics1.lineTo(0, 0);
	  _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-90);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 130);
		_this.wronggraphics2.lineTo(130, 130);
		_this.wronggraphics2.lineTo(130, 0);
		_this.wronggraphics2.lineTo(0, 0);
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		   _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+85, _this.world.centerY-230);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 130);
		_this.wronggraphics3.lineTo(130, 130);
		_this.wronggraphics3.lineTo(130, 0);
		_this.wronggraphics3.lineTo(0, 0);
	  _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
	   

		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt1.scale.setTo(1.1,1);
		_this.opt1.anchor.setTo(0.21,0.12);
		_this.opt1.x=610;
		_this.opt1.y=304;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt2.scale.setTo(1.1,1);
		_this.opt2.anchor.setTo(0.21,0.12);
		_this.opt2.x=610;
		_this.opt2.y=185;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		 _this.opt3 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt3.scale.setTo(1.1,1);
		_this.opt3.anchor.setTo(0.21,0.12);
		_this.opt3.x=610;
		_this.opt3.y=65;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;

		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		   flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		   _this.wrngGraphicgrp.add(_this.wronggraphics3);

		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
  _this.optionsgrp.add(_this.opt3);
  
 _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
	  gotoNineteenthQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
			 _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			 _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		_this.mainFlag = _this.add.sprite(490,290,'Level23_flower');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(1.185,1.15);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_hand111');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.scale.setTo(0.6,0.65);
		 _this.mainFlag1.name = "Level23_measuringHand";
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(540,275,'Level23_Line19');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1.14,1.13);
		 
		

	

		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+40, _this.world.centerY-90);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 130);
		_this.wronggraphics2.lineTo(130, 130);
		_this.wronggraphics2.lineTo(130, 0);
		_this.wronggraphics2.lineTo(0, 0);
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
   
		 
	   

		 

		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt1.scale.setTo(1.1,1.15);
					_this.opt1.anchor.setTo(0.21,0.12);
		_this.opt1.x=570;
		_this.opt1.y=205;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;


		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
	   
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		   flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
	 
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		

		_this.optionsgrp.add(_this.opt1);
  
   _this.mainFlag1.x = _this.opt1.x;
		_this.mainFlag1.y = _this.opt1.y;

		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
	 gotoTwentythQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(480,252,'Level23_flower1');
		_this.mainFlag.anchor.setTo(0.5);
		_this.mainFlag.scale.setTo(1.185,1.05);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,270,'Level23_hand111');
		//_this.mainFlag1.anchor.setTo(0.5);
		 _this.mainFlag1.name = "Level23_measuringHand";
		_this.mainFlag1.scale.setTo(0.6,0.59);
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(510,252,'Level23_Line20');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1.14,1.04);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX+40, _this.world.centerY+50);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		 _this.wronggraphics1.lineTo(0, 130);
		_this.wronggraphics1.lineTo(130, 130);
		_this.wronggraphics1.lineTo(130, 0);
		_this.wronggraphics1.lineTo(0, 0);
	  _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+40, _this.world.centerY-90);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		 _this.wronggraphics2.lineTo(0, 130);
		_this.wronggraphics2.lineTo(130, 130);
		_this.wronggraphics2.lineTo(130, 0);
		_this.wronggraphics2.lineTo(0, 0);
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		   _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+40, _this.world.centerY-230);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		 _this.wronggraphics3.lineTo(0, 130);
		_this.wronggraphics3.lineTo(130, 130);
		_this.wronggraphics3.lineTo(130, 0);
		_this.wronggraphics3.lineTo(0, 0);
	  _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
	   

		 
		_this.opt1 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt1.scale.setTo(1.1,1.10);
		_this.opt1.anchor.setTo(0.21,0.12);
		_this.opt1.x=530;
		_this.opt1.y=310;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt2.scale.setTo(1.1,1.10);
				   _this.opt2.anchor.setTo(0.21,0.12);
		_this.opt2.x=530;
		_this.opt2.y=185;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		 _this.opt3 = _this.add.sprite(0, 0,'Level23_hand11','Symbol 58 instance 10000');
		_this.opt3.scale.setTo(1.1,1.10);
				   _this.opt3.anchor.setTo(0.21,0.12);
		_this.opt3.x=530;
		_this.opt3.y=60;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;

		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		   _this.wrngGraphicgrp.add(_this.wronggraphics3);

		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
  _this.optionsgrp.add(_this.opt3);
  
		  _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;

		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
				_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	gotoTwentyonethQuestion:function(){
		_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(500,300,'Level23_ladder');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(0.95,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,252,'Level23_feet1');
		_this.mainFlag1.anchor.setTo(0.55,0.6);

	   // _this.mainFlag1.scale.setTo(0.75,0.75);
		 _this.mainFlag1.name = "Level23_measuringFeet";
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
	   
		
		_this.mainFlag2 = _this.add.sprite(485,360,'Level23_Line21');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.95,1.1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-95, _this.world.centerY+187);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 85);
		_this.wronggraphics1.lineTo(85, 85);
		_this.wronggraphics1.lineTo(85, 0);
		_this.wronggraphics1.lineTo(0, 0);
	 _this.wronggraphics1.angle = 180;
	_this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-10, _this.world.centerY+187);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 80);
		_this.wronggraphics2.lineTo(80, 80);
		_this.wronggraphics2.lineTo(80, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
		_this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+78, _this.world.centerY+187);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 80);
		_this.wronggraphics3.lineTo(80, 80);
		_this.wronggraphics3.lineTo(80, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+180, _this.world.centerY+187);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 85);
		_this.wronggraphics4.lineTo(85, 85);
		_this.wronggraphics4.lineTo(85, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.opt1 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt1.name = "_this.opt1";
		_this.opt1.scale.setTo(1.0,1.1);
		_this.opt1.anchor.setTo(0.5);
		_this.opt1.x=357;
		_this.opt1.y=405;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		//_this.opt1.scale.y *= -1;
		
		_this.opt2 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt2.name = "_this.opt2";
		_this.opt2.scale.setTo(1.0,1.1);
		 _this.opt2.anchor.setTo(0.5);
		_this.opt2.x=445;
		_this.opt2.y=405;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		_this.opt2.scale.y *= -1;
		
		_this.opt3 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt3.name = "_this.opt3";
		_this.opt3.scale.setTo(1.0,1.1);
		 _this.opt3.anchor.setTo(0.5);
		_this.opt3.x=532;
		_this.opt3.y=405;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		 
		 _this.opt4 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt4.name = "_this.opt4";
		_this.opt4.scale.setTo(1.0,1.1);
		 _this.opt4.anchor.setTo(0.5);
		_this.opt4.x=620;
		_this.opt4.y=405;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		_this.opt4.scale.y *= -1;

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
	  
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		  flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		
		 _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
				_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
	
	 gotoTwentytwothQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	  
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		_this.mainFlag = _this.add.sprite(480,280,'Level23_House');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(0.95,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,254,'Level23_feet1');
	   _this.mainFlag1.anchor.setTo(0.55,0.6);
		//_this.mainFlag1.scale.setTo(0.75,0.75);
		  _this.mainFlag1.name = "Level23_measuringFeet";
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		 //_this.mainFlag1.visible=false;
		
		_this.mainFlag2 = _this.add.sprite(500,360,'Level23_Line22');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.95,1.1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-155, _this.world.centerY+177);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 85);
		_this.wronggraphics1.lineTo(85, 85);
		_this.wronggraphics1.lineTo(85, 0);
		_this.wronggraphics1.lineTo(0, 0);
	 _this.wronggraphics1.angle = 180;
	_this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-73, _this.world.centerY+177);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 80);
		_this.wronggraphics2.lineTo(80, 80);
		_this.wronggraphics2.lineTo(80, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+12, _this.world.centerY+177);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 80);
		_this.wronggraphics3.lineTo(80, 80);
		_this.wronggraphics3.lineTo(80, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	 _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+97, _this.world.centerY+177);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 80);
		_this.wronggraphics4.lineTo(80, 80);
		_this.wronggraphics4.lineTo(80, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
	   _this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+183, _this.world.centerY+177);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		// _this.wronggraphics5.scale.setTo(1.5,1);
		 _this.wronggraphics5.lineTo(0, 80);
		_this.wronggraphics5.lineTo(80, 80);
		_this.wronggraphics5.lineTo(80, 0);
		_this.wronggraphics5.lineTo(0, 0);
	  _this.wronggraphics5.angle = 180;
	 _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+270, _this.world.centerY+177);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		// _this.wronggraphics6.scale.setTo(1.5,1);
		 _this.wronggraphics6.lineTo(0, 85);
		_this.wronggraphics6.lineTo(85, 85);
		_this.wronggraphics6.lineTo(85, 0);
		_this.wronggraphics6.lineTo(0, 0);
	  _this.wronggraphics6.angle = 180;
	 _this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		 _this.opt1 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
		  _this.opt1.anchor.setTo(0.5);
		  _this.opt1.name = "_this.opt1";
		_this.opt1.x=293;
		_this.opt1.y=400;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		
		_this.opt2 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
		  _this.opt2.anchor.setTo(0.5);
		  _this.opt2.name = "_this.opt2";
		_this.opt2.x=380;
		_this.opt2.y=400;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 _this.opt2.scale.y *= -1;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt3.scale.setTo(1.0,1.1);
		  _this.opt3.anchor.setTo(0.5);
		  _this.opt3.name = "_this.opt3";
		_this.opt3.x=463;
		_this.opt3.y=400;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		 
				_this.opt4 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt4.scale.setTo(1.0,1.1);
		  _this.opt4.anchor.setTo(0.5);
		  _this.opt4.name = "_this.opt4";
		_this.opt4.x=548;
		_this.opt4.y=400;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 _this.opt4.scale.y *= -1;
		 
		_this.opt5 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt5.scale.setTo(1.0,1.1);
		_this.opt5.anchor.setTo(0.5);
		  _this.opt5.name = "_this.opt5";
		_this.opt5.x=635;
		_this.opt5.y=400;
		_this.opt5.smoothed = false;
		_this.opt5.frame=1;
	_this.opt5.visible=false;
		 
		_this.opt6 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt6.scale.setTo(1.0,1.1);
		_this.opt6.anchor.setTo(0.5);
		  _this.opt6.name = "_this.opt6";
		_this.opt6.x=718;
		_this.opt6.y=400;
		_this.opt6.smoothed = true;
		_this.opt6.frame=1;
		_this.opt6.visible=false;
		 _this.opt6.scale.y *= -1;

   
		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		 _this.wrngGraphicgrp.add(_this.wronggraphics6);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		 _this.optionsgrp.add(_this.opt6);
		 
				  _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	 
	 gotoTwentythreethQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		_this.mainFlag = _this.add.sprite(488,280,'Level23_gate2');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(0.95,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,250,'Level23_feet1');
		//_this.mainFlag1.anchor.setTo(0.5);
		//_this.mainFlag1.scale.setTo(0.75,0.75);
			 _this.mainFlag1.anchor.setTo(0.55,0.53);
		//_this.mainFlag1.scale.setTo(0.75,0.75);
		 _this.mainFlag1.name = "Level23_measuringFeet";
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		 //_this.mainFlag1.visible=false;
		
		_this.mainFlag2 = _this.add.sprite(475,370,'Level23_Line23');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.95,1.1);
		 
		
 _this.wronggraphics7 = _this.add.graphics(_this.world.centerX-260, _this.world.centerY+190);
		_this.wronggraphics7.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics7.beginFill(0xFF700B, 1);
		// _this.wronggraphics7.scale.setTo(1.5,1);
		 _this.wronggraphics7.lineTo(0, 85);
		_this.wronggraphics7.lineTo(85, 85);
		_this.wronggraphics7.lineTo(85, 0);
		_this.wronggraphics7.lineTo(0, 0);
	  _this.wronggraphics7.angle = 180;
	 _this.wronggraphics7.alpha = 0;
		 _this.wronggraphics7.inputEnabled = true;
		_this.wronggraphics7.input.useHandCursor = true;
		 
	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-170, _this.world.centerY+190);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 85);
		_this.wronggraphics1.lineTo(85, 85);
		_this.wronggraphics1.lineTo(85, 0);
		_this.wronggraphics1.lineTo(0, 0);
	 _this.wronggraphics1.angle = 180;
	_this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-78, _this.world.centerY+190);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 85);
		_this.wronggraphics2.lineTo(85, 85);
		_this.wronggraphics2.lineTo(85, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+5, _this.world.centerY+190);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 80);
		_this.wronggraphics3.lineTo(80, 80);
		_this.wronggraphics3.lineTo(80, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+95, _this.world.centerY+190);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 85);
		_this.wronggraphics4.lineTo(85, 85);
		_this.wronggraphics4.lineTo(85, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+180, _this.world.centerY+190);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		// _this.wronggraphics5.scale.setTo(1.5,1);
		 _this.wronggraphics5.lineTo(0, 80);
		_this.wronggraphics5.lineTo(80, 80);
		_this.wronggraphics5.lineTo(80, 0);
		_this.wronggraphics5.lineTo(0, 0);
	  _this.wronggraphics5.angle = 180;
		_this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+264, _this.world.centerY+190);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		// _this.wronggraphics6.scale.setTo(1.5,1);
		 _this.wronggraphics6.lineTo(0, 80);
		_this.wronggraphics6.lineTo(80, 80);
		_this.wronggraphics6.lineTo(80, 0);
		_this.wronggraphics6.lineTo(0, 0);
	  _this.wronggraphics6.angle = 180;
	 _this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics8 = _this.add.graphics(_this.world.centerX+355, _this.world.centerY+190);
		_this.wronggraphics8.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics8.beginFill(0xFF700B, 1);
		// _this.wronggraphics8.scale.setTo(1.5,1);
		 _this.wronggraphics8.lineTo(0, 85);
		_this.wronggraphics8.lineTo(85, 85);
		_this.wronggraphics8.lineTo(85, 0);
		_this.wronggraphics8.lineTo(0, 0);
	  _this.wronggraphics8.angle = 180;
	 _this.wronggraphics8.alpha = 0;
		 _this.wronggraphics8.inputEnabled = true;
		_this.wronggraphics8.input.useHandCursor = true;
		 
			   _this.opt1 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
		  _this.opt1.anchor.setTo(0.5);
		   _this.opt1.name = "_this.opt1";
		_this.opt1.x=180;
		_this.opt1.y=407;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		 _this.opt2 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
		  _this.opt2.anchor.setTo(0.5);
		   _this.opt2.name = "_this.opt2";
		_this.opt2.x=266;
		_this.opt2.y=407;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
			 _this.opt2.scale.y *= -1;
		 
		
		_this.opt3 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt3.scale.setTo(1.0,1.1);
		  _this.opt3.anchor.setTo(0.5);
		   _this.opt3.name = "_this.opt3";
		_this.opt3.x=352;
		_this.opt3.y=407;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt4.scale.setTo(1.0,1.1);
		  _this.opt4.anchor.setTo(0.5);
		   _this.opt4.name = "_this.opt4";
		_this.opt4.x=435;
		_this.opt4.y=407;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
			 _this.opt4.scale.y *= -1;
		 
				_this.opt5 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt5.scale.setTo(1.0,1.1);
		  _this.opt5.anchor.setTo(0.5);
		   _this.opt5.name = "_this.opt5";
		_this.opt5.x=520;
		_this.opt5.y=407;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 
		   _this.opt6 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt6.scale.setTo(1.0,1.1);
		  _this.opt6.anchor.setTo(0.5);
		   _this.opt6.name = "_this.opt6";
		_this.opt6.x=610;
		_this.opt6.y=407;
		_this.opt6.smoothed = false;
		_this.opt6.frame=1;
		_this.opt6.visible=false;
			 _this.opt6.scale.y *= -1;
		 
		   _this.opt7 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt7.scale.setTo(1.0,1.1);
		  _this.opt7.anchor.setTo(0.5);
		   _this.opt7.name = "_this.opt7";
		_this.opt7.x=694;
		_this.opt7.y=407;
		_this.opt7.smoothed = true;
		_this.opt7.frame=1;
		_this.opt7.visible=false;
		 
  
		 
		_this.opt8 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt8.scale.setTo(1.0,1.1);
		  _this.opt8.anchor.setTo(0.5);
		   _this.opt8.name = "_this.opt8";
		_this.opt8.x=780;
		_this.opt8.y=407;
		_this.opt8.smoothed = true;
		_this.opt8.frame=1;
		_this.opt8.visible=false;
			 _this.opt8.scale.y *= -1;

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

	

		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
				 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);

		   _this.wrngGraphicgrp.add(_this.wronggraphics7);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		 _this.wrngGraphicgrp.add(_this.wronggraphics6);
	  
		 _this.wrngGraphicgrp.add(_this.wronggraphics8);
	 
		 _this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		 _this.optionsgrp.add(_this.opt6);
		 _this.optionsgrp.add(_this.opt7);
			_this.optionsgrp.add(_this.opt8);
		 
			  
			_this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
						_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	 		
	 		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
	
	 gotoTwentyfourthQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(493,255,'Level23_treee');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(0.95,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,250,'Level23_feet1');
		  //_this.mainFlag1.anchor.setTo(0,0.6);
		//_this.mainFlag1.scale.setTo(0.75,0.75);
			_this.mainFlag1.anchor.setTo(0.55,0.6);
		//_this.mainFlag1.scale.setTo(0.75,0.75);
		  _this.mainFlag1.name = "Level23_measuringFeet";
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
	  
		_this.mainFlag2 = _this.add.sprite(483,360,'Level23_Line24');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.95,1.1);
		 
		

	
	  
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-126, _this.world.centerY+180);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 85);
		_this.wronggraphics2.lineTo(85, 85);
		_this.wronggraphics2.lineTo(85, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX-37, _this.world.centerY+180);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 85);
		_this.wronggraphics3.lineTo(85, 85);
		_this.wronggraphics3.lineTo(85, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+50, _this.world.centerY+180);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 85);
		_this.wronggraphics4.lineTo(85, 85);
		_this.wronggraphics4.lineTo(85, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
	   _this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+133, _this.world.centerY+180);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		// _this.wronggraphics5.scale.setTo(1.5,1);
		 _this.wronggraphics5.lineTo(0, 85);
		_this.wronggraphics5.lineTo(85, 85);
		_this.wronggraphics5.lineTo(85, 0);
		_this.wronggraphics5.lineTo(0, 0);
	  _this.wronggraphics5.angle = 180;
	   _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+220, _this.world.centerY+180);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		// _this.wronggraphics6.scale.setTo(1.5,1);
		 _this.wronggraphics6.lineTo(0, 85);
		_this.wronggraphics6.lineTo(85, 85);
		_this.wronggraphics6.lineTo(85, 0);
		_this.wronggraphics6.lineTo(0, 0);
	  _this.wronggraphics6.angle = 180;
	 _this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
   
	
		 
		
		_this.opt1 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
		 _this.opt1.anchor.setTo(0.5);
					_this.opt1.name = "_this.opt1";
		_this.opt1.x=315;
		_this.opt1.y=404;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2 = _this.add.sprite(0, 0, 'Level23_feets101','Symbol 66 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
		 _this.opt2.anchor.setTo(0.5);
					_this.opt2.name = "_this.opt2";
		_this.opt2.x=400;
		_this.opt2.y=404;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
			   _this.opt2.scale.y *= -1;
		 
		 
				_this.opt3 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt3.scale.setTo(1.0,1.1);
		 _this.opt3.anchor.setTo(0.5);
					_this.opt3.name = "_this.opt3";
		_this.opt3.x=486;
		_this.opt3.y=404;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		   _this.opt4 = _this.add.sprite(0, 0,  'Level23_feets101','Symbol 66 instance 10000');
		_this.opt4.scale.setTo(1.0,1.1);
		 _this.opt4.anchor.setTo(0.5);
					_this.opt4.name = "_this.opt4";
		_this.opt4.x=572;
		_this.opt4.y=404;
		_this.opt4.smoothed = false;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
			   _this.opt4.scale.y *= -1;
		 
		   _this.opt5 = _this.add.sprite(0, 0,'Level23_feets101','Symbol 66 instance 10000');
		_this.opt5.scale.setTo(1.0,1.1);
		 _this.opt5.anchor.setTo(0.5);
					_this.opt5.name = "_this.opt5";
		_this.opt5.x=658;
		_this.opt5.y=404;
		_this.opt5.smoothed = true;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 


		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		 _this.wrngGraphicgrp.add(_this.wronggraphics6);
	   
	   _this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		 
	
			_this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
				   _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	}, 
	
	  gotoTwentyfifthQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(495,265,'Level23_ladder2');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(0.95,1.05);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,253,'Level23_rope11');
		//_this.mainFlag1.anchor.setTo(0.5);
		 _this.mainFlag1.name = "Level23_measuringRope";
		_this.mainFlag1.scale.setTo(1,1.06);
	 //   _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(550,253,'Level23_Line28');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.95,1.03);
		 

		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY+170);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		// _this.wronggraphics5.scale.setTo(1.5,1);
		 _this.wronggraphics5.lineTo(0, 90);
		_this.wronggraphics5.lineTo(90, 90);
		_this.wronggraphics5.lineTo(90, 0);
		_this.wronggraphics5.lineTo(0, 0);
	  _this.wronggraphics5.angle = 180;
		_this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		   _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY+66);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 90);
		_this.wronggraphics4.lineTo(90, 90);
		_this.wronggraphics4.lineTo(90, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
	   _this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		
		 _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY-33);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 90);
		_this.wronggraphics3.lineTo(90, 90);
		_this.wronggraphics3.lineTo(90, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
	
				   _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY-135);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 90);
		_this.wronggraphics2.lineTo(90, 90);
		_this.wronggraphics2.lineTo(90, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;

		 


		 
		   _this.opt1 = _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt1.scale.setTo(1.0,1.05);
		_this.opt1.anchor.setTo(0.25,0.1);
		_this.opt1.x=575;
		_this.opt1.y=338;
		_this.opt1.smoothed = false;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
   
		 
		_this.opt2 = _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt2.scale.setTo(1.0,1.05);
		  _this.opt2.anchor.setTo(0.25,0.1);
		_this.opt2.x=575;
		_this.opt2.y=247;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		  
				  _this.opt3 = _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt3.scale.setTo(1.0,1.05);
		  _this.opt3.anchor.setTo(0.25,0.1);
		_this.opt3.x=575;
		_this.opt3.y=157;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		  
				  
		_this.opt4 = _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt4.scale.setTo(1.0,1.05);
		_this.opt4.anchor.setTo(0.25,0.1);
		_this.opt4.x=575;
		_this.opt4.y=67;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
	 
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
			 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		
		_this.wrngGraphicgrp.add(_this.wronggraphics5);
		_this.wrngGraphicgrp.add(_this.wronggraphics4);
	 _this.wrngGraphicgrp.add(_this.wronggraphics3);
		 _this.wrngGraphicgrp.add(_this.wronggraphics2);
		
	   
	   
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		 _this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
	 _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
	
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			   _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	}, 
	
	 gotoTwentysixthQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(475,277,'Level23_door111');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(0.95,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,250,'Level23_rope11');
		//_this.mainFlag1.anchor.setTo(0.5);
		_this.mainFlag1.scale.setTo(0.75,1.12);
		 _this.mainFlag1.name = "Level23_measuringRope";
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(550,266,'Level23_Line27');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.95,1.09);
		 
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY+135);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 100);
		_this.wronggraphics4.lineTo(100, 100);
		_this.wronggraphics4.lineTo(100, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
	   _this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY+35);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 100);
		_this.wronggraphics3.lineTo(100, 100);
		_this.wronggraphics3.lineTo(100, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		
   
			 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY-55);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 100);
		_this.wronggraphics2.lineTo(100, 100);
		_this.wronggraphics2.lineTo(100, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		 
		
	   
	
		 
		 
				_this.opt1 = _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
		 _this.opt1.anchor.setTo(0.3,0.1);
		_this.opt1.x=575;
		_this.opt1.y=315;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
	  
	_this.opt2 = _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
		  _this.opt2.anchor.setTo(0.3,0.1);
		_this.opt2.x=575;
		_this.opt2.y=215;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;

		 _this.opt3= _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt3.scale.setTo(1.0,1.1);
		  _this.opt3.anchor.setTo(0.3,0.1);
		_this.opt3.x=575;
		_this.opt3.y=115;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		
		_this.wrngGraphicgrp.add(_this.wronggraphics4);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	 _this.wrngGraphicgrp.add(_this.wronggraphics2);
	   
		
	   
	   
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		 _this.optionsgrp.add(_this.opt3);
	  
	   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
	
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	 		
	 		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	}, 
	
	
	gotoTwentyseventhQuestion:function(){
		_this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	  
		   _this.numberbtn1 = _this.add.sprite(0, 0, 'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0, 'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0, 'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0, 'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0, 'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0, 'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0, 'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0, 'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0, 'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		_this.mainFlag = _this.add.sprite(475,280,'Level23_flower111');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(1.5,1.5);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,234,'Level23_rope11');
		//_this.mainFlag1.anchor.setTo(0.5);
		 _this.mainFlag1.name = "Level23_measuringRope";
		_this.mainFlag1.scale.setTo(0.95,1.5);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(500,265,'Level23_Line25');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.95,1.45);
		 
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+120, _this.world.centerY+45);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 100);
		_this.wronggraphics3.lineTo(100, 100);
		_this.wronggraphics3.lineTo(100, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 

		_this.opt1 = _this.add.sprite(0, 0, 'Level23_ropes11', 'Symbol 73 instance 10000');
		_this.opt1.scale.setTo(1.0,1.35);
		_this.opt1.anchor.setTo(0.3,0.1);
		_this.opt1.x=525;
		_this.opt1.y=198;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
	  
	 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
	   
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		
	   
		_this.wrngGraphicgrp.add(_this.wronggraphics3);

		
		_this.optionsgrp.add(_this.opt1);
		   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0, 'Linear', true, 0);
		tween2.to({ x: 0 }, 0, 'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
						  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	}, 
	
	  gotoTwentyeighthQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		


		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(515,260,'Level23_car111');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(1,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,250,'Level23_rope111');
	 _this.mainFlag1.anchor.setTo(-0.05,0);
		_this.mainFlag1.scale.setTo(1,1.1);
		 _this.mainFlag1.name = "Level23_measuringRope";
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	  //  },_this);
		
		_this.mainFlag2 = _this.add.sprite(505,360,'Level23_Line32');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1,1.1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-160, _this.world.centerY+180);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 90);
		_this.wronggraphics1.lineTo(90, 90);
		_this.wronggraphics1.lineTo(90, 0);
		_this.wronggraphics1.lineTo(0, 0);
	 _this.wronggraphics1.angle = 180;
	_this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-70, _this.world.centerY+180);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 90);
		_this.wronggraphics2.lineTo(90, 90);
		_this.wronggraphics2.lineTo(90, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+23, _this.world.centerY+180);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 90);
		_this.wronggraphics3.lineTo(90, 90);
		_this.wronggraphics3.lineTo(90, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+114, _this.world.centerY+180);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 90);
		_this.wronggraphics4.lineTo(90, 90);
		_this.wronggraphics4.lineTo(90, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+200, _this.world.centerY+180);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		// _this.wronggraphics5.scale.setTo(1.5,1);
		 _this.wronggraphics5.lineTo(0, 90);
		_this.wronggraphics5.lineTo(90, 90);
		_this.wronggraphics5.lineTo(90, 0);
		_this.wronggraphics5.lineTo(0, 0);
	  _this.wronggraphics5.angle = 180;
	   _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 
		 _this.wronggraphics6 = _this.add.graphics(_this.world.centerX+290, _this.world.centerY+180);
		_this.wronggraphics6.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics6.beginFill(0xFF700B, 1);
		// _this.wronggraphics6.scale.setTo(1.5,1);
		 _this.wronggraphics6.lineTo(0, 90);
		_this.wronggraphics6.lineTo(90, 90);
		_this.wronggraphics6.lineTo(90, 0);
		_this.wronggraphics6.lineTo(0, 0);
	  _this.wronggraphics6.angle = 180;
	 _this.wronggraphics6.alpha = 0;
		 _this.wronggraphics6.inputEnabled = true;
		_this.wronggraphics6.input.useHandCursor = true;
		 
		 _this.opt1 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
		  _this.opt1.anchor.setTo(0.09,0.27);
		_this.opt1.x=227;
		_this.opt1.y=380;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		
		_this.opt2 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
			_this.opt2.anchor.setTo(0.09,0.27);
		_this.opt2.x=318;
		_this.opt2.y=380;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt3.scale.setTo(1.0,1.1);
			_this.opt3.anchor.setTo(0.09,0.27);
		_this.opt3.x=409;
		_this.opt3.y=380;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt4.scale.setTo(1.0,1.1);
			_this.opt4.anchor.setTo(0.09,0.27);
		_this.opt4.x=500;
		_this.opt4.y=380;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		   _this.opt5 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt5.scale.setTo(1.0,1.1);
			_this.opt5.anchor.setTo(0.09,0.27);
		_this.opt5.x=591;
		_this.opt5.y=380;
		_this.opt5.smoothed = false;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 
		   _this.opt6 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt6.scale.setTo(1.0,1.1);
			_this.opt6.anchor.setTo(0.09,0.27);
		_this.opt6.x=682;
		_this.opt6.y=380;
		_this.opt6.smoothed = true;
		_this.opt6.frame=1;
		_this.opt6.visible=false;

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 

		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
				  flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
		 _this.wrngGraphicgrp.add(_this.wronggraphics6);
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		 _this.optionsgrp.add(_this.opt6);
		   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
						_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
		
	  gotoTwentyninethQuestion:function(){
		  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		_this.mainFlag = _this.add.sprite(510,260,'Level23_gate21');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(1,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,250,'Level23_rope111');
		_this.mainFlag1.anchor.setTo(-0.05,0);
		 _this.mainFlag1.name = "Level23_measuringRope";
		//_this.mainFlag1.scale.setTo(0.75,0.75);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(498,375,'Level23_Line31');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1,1.1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-120, _this.world.centerY+190);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 90);
		_this.wronggraphics1.lineTo(90, 90);
		_this.wronggraphics1.lineTo(90, 0);
		_this.wronggraphics1.lineTo(0, 0);
	 _this.wronggraphics1.angle = 180;
	_this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-28, _this.world.centerY+190);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 90);
		_this.wronggraphics2.lineTo(90, 90);
		_this.wronggraphics2.lineTo(90, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+63, _this.world.centerY+190);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 90);
		_this.wronggraphics3.lineTo(90, 90);
		_this.wronggraphics3.lineTo(90, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+154, _this.world.centerY+190);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 90);
		_this.wronggraphics4.lineTo(90, 90);
		_this.wronggraphics4.lineTo(90, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
		_this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		 _this.wronggraphics5 = _this.add.graphics(_this.world.centerX+245, _this.world.centerY+190);
		_this.wronggraphics5.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics5.beginFill(0xFF700B, 1);
		// _this.wronggraphics5.scale.setTo(1.5,1);
		 _this.wronggraphics5.lineTo(0, 90);
		_this.wronggraphics5.lineTo(90, 90);
		_this.wronggraphics5.lineTo(90, 0);
		_this.wronggraphics5.lineTo(0, 0);
	  _this.wronggraphics5.angle = 180;
	   _this.wronggraphics5.alpha = 0;
		 _this.wronggraphics5.inputEnabled = true;
		_this.wronggraphics5.input.useHandCursor = true;
		 

		 
		 _this.opt1 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
		  _this.opt1.anchor.setTo(0.09,0.27);
		_this.opt1.x=270;
		_this.opt1.y=400;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		
		_this.opt2 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
		  _this.opt2.anchor.setTo(0.09,0.27);
		_this.opt2.x=361;
		_this.opt2.y=400;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt3.scale.setTo(1.0,1.1);
		  _this.opt3.anchor.setTo(0.09,0.27);
		_this.opt3.x=452;
		_this.opt3.y=400;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt4.scale.setTo(1.0,1.1);
		  _this.opt4.anchor.setTo(0.09,0.27);
		_this.opt4.x=543;
		_this.opt4.y=400;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
		 
		   _this.opt5 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt5.scale.setTo(1.0,1.1);
		  _this.opt5.anchor.setTo(0.09,0.27);
		_this.opt5.x=634;
		_this.opt5.y=400;
		_this.opt5.smoothed = false;
		_this.opt5.frame=1;
		_this.opt5.visible=false;
		 
 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
  
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
				flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	 _this.wrngGraphicgrp.add(_this.wronggraphics4);
		 _this.wrngGraphicgrp.add(_this.wronggraphics5);
	  
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		 _this.optionsgrp.add(_this.opt5);
		_this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
					   _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
			
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

	 }, _this);      
		
	},
	
  gotoThirtythQuestion:function(){
	  _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(510,310,'Level23_longtable111');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(1,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,250,'Level23_rope111');
	   // _this.mainFlag1.anchor.setTo(0.5);
	   // _this.mainFlag1.scale.setTo(0.75,0.75);
	    _this.mainFlag1.name = "Level23_measuringRope";
	   _this.mainFlag1.anchor.setTo(-0.05,0);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(498,370,'Level23_Line30');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1,1.1);
		 
		

	
		_this.wronggraphics1 = _this.add.graphics(_this.world.centerX-73, _this.world.centerY+190);
		_this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics1.beginFill(0xFF700B, 1);
		// _this.wronggraphics1.scale.setTo(1.5,1);
		 _this.wronggraphics1.lineTo(0, 90);
		_this.wronggraphics1.lineTo(90, 90);
		_this.wronggraphics1.lineTo(90, 0);
		_this.wronggraphics1.lineTo(0, 0);
	 _this.wronggraphics1.angle = 180;
   _this.wronggraphics1.alpha = 0;
		 _this.wronggraphics1.inputEnabled = true;
		_this.wronggraphics1.input.useHandCursor = true;
		 
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+22, _this.world.centerY+190);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 90);
		_this.wronggraphics2.lineTo(90, 90);
		_this.wronggraphics2.lineTo(90, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+110, _this.world.centerY+190);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 90);
		_this.wronggraphics3.lineTo(90, 90);
		_this.wronggraphics3.lineTo(90, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+203, _this.world.centerY+190);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 90);
		_this.wronggraphics4.lineTo(90, 90);
		_this.wronggraphics4.lineTo(90, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
	   _this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
  

		 
		 _this.opt1 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
	   _this.opt1.anchor.setTo(0.09,0.27);
		_this.opt1.x=313;
		_this.opt1.y=395;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		
		_this.opt2 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
	   _this.opt2.anchor.setTo(0.09,0.27);
		_this.opt2.x=404;
		_this.opt2.y=395;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;
		 
		_this.opt3 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt3.scale.setTo(1.0,1.1);
			 _this.opt3.anchor.setTo(0.09,0.27);

		_this.opt3.x=495;
		_this.opt3.y=395;
		_this.opt3.smoothed = true;
		_this.opt3.frame=1;
		_this.opt3.visible=false;
		 
		 
		_this.opt4 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt4.scale.setTo(1.0,1.1);
			 _this.opt4.anchor.setTo(0.09,0.27);

		_this.opt4.x=586;
		_this.opt4.y=395;
		_this.opt4.smoothed = true;
		_this.opt4.frame=1;
		_this.opt4.visible=false;
 
		 
	 

		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
	   
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
	   flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		_this.wrngGraphicgrp.add(_this.wronggraphics1);
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);
	 _this.wrngGraphicgrp.add(_this.wronggraphics4);
	  
	  
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		_this.optionsgrp.add(_this.opt3);
		 _this.optionsgrp.add(_this.opt4);
		
			   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
						 _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	 		
	 		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},
		
	   gotoThirtyonethQuestion:function(){
		   _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
	   
			_this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
			_this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(510,320,'Level23_shoes111');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(1,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,250,'Level23_rope111');
		//_this.mainFlag1.anchor.setTo(0.5);
		 _this.mainFlag1.name = "Level23_measuringRope";
		//_this.mainFlag1.scale.setTo(0.75,0.75);
			_this.mainFlag1.anchor.setTo(-0.05,0);
	  //  _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
	   // },_this);
		
		_this.mainFlag2 = _this.add.sprite(498,370,'Level23_Line29');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(1,1.1);
		 
		  _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+22, _this.world.centerY+180);
		_this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics2.beginFill(0xFF700B, 1);
		// _this.wronggraphics2.scale.setTo(1.5,1);
		 _this.wronggraphics2.lineTo(0, 90);
		_this.wronggraphics2.lineTo(90, 90);
		_this.wronggraphics2.lineTo(90, 0);
		_this.wronggraphics2.lineTo(0, 0);
		_this.wronggraphics2.angle = 180;
	  _this.wronggraphics2.alpha = 0;
		 _this.wronggraphics2.inputEnabled = true;
		_this.wronggraphics2.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+110, _this.world.centerY+180);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 90);
		_this.wronggraphics3.lineTo(90, 90);
		_this.wronggraphics3.lineTo(90, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		 
		
		_this.opt1 = _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
		 _this.opt1.anchor.setTo(0.09,0.27);
		_this.opt1.x=404;
		_this.opt1.y=395;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
		_this.opt2= _this.add.sprite(0, 0,'Level23_ropes111','Symbol 91 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
			_this.opt2.anchor.setTo(0.09,0.27);
		_this.opt2.x=495;
		_this.opt2.y=395;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
		_this.opt2.visible=false;


		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		   flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
	   
		_this.wrngGraphicgrp.add(_this.wronggraphics2);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);

	 
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		
				
			   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
	   
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			_this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	},  


	 gotoThirtytwothQuestion:function(){
		 _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		_this.numberbtn6.inputEnabled = true;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
		 
		 
		_this.mainFlag = _this.add.sprite(475,277,'Level23_petrol111');
		_this.mainFlag.anchor.setTo(0.5);
		 _this.mainFlag.scale.setTo(0.95,1.1);
		 
		 
		_this.mainFlag1 = _this.add.sprite(900,250,'Level23_rope11');
		//_this.mainFlag1.anchor.setTo(0.5);
		 _this.mainFlag1.name = "Level23_measuringRope";
		_this.mainFlag1.scale.setTo(0.75,1.12);
	   // _this.time.events.add(6100,function(){
			 _this.mainFlag1.inputEnabled = true;
			 _this.mainFlag1.input.useHandCursor = true;
			 _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
		//},_this);
		
		_this.mainFlag2 = _this.add.sprite(550,266,'Level23_Line26');
		_this.mainFlag2.anchor.setTo(0.5);
		_this.mainFlag2.scale.setTo(0.95,1.09);
		 
		

	
	  
		 

  
		 
		 _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY+95);
		_this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics4.beginFill(0xFF700B, 1);
		// _this.wronggraphics4.scale.setTo(1.5,1);
		 _this.wronggraphics4.lineTo(0, 100);
		_this.wronggraphics4.lineTo(100, 100);
		_this.wronggraphics4.lineTo(100, 0);
		_this.wronggraphics4.lineTo(0, 0);
	  _this.wronggraphics4.angle = 180;
	   _this.wronggraphics4.alpha = 0;
		 _this.wronggraphics4.inputEnabled = true;
		_this.wronggraphics4.input.useHandCursor = true;
		 
		_this.wronggraphics3 = _this.add.graphics(_this.world.centerX+160, _this.world.centerY-5);
		_this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
		_this.wronggraphics3.beginFill(0xFF700B, 1);
		// _this.wronggraphics3.scale.setTo(1.5,1);
		 _this.wronggraphics3.lineTo(0, 100);
		_this.wronggraphics3.lineTo(100, 100);
		_this.wronggraphics3.lineTo(100, 0);
		_this.wronggraphics3.lineTo(0, 0);
	   _this.wronggraphics3.angle = 180;
	   _this.wronggraphics3.alpha = 0;
		 _this.wronggraphics3.inputEnabled = true;
		_this.wronggraphics3.input.useHandCursor = true;
		
   
			 

		 
		 
		
	   
	
		 
		 
				_this.opt1 = _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt1.scale.setTo(1.0,1.1);
		 _this.opt1.anchor.setTo(0.3,0.1);
		_this.opt1.x=575;
		_this.opt1.y=265;
		_this.opt1.smoothed = true;
		_this.opt1.frame=1;
		_this.opt1.visible=false;
		 
	  
	_this.opt2 = _this.add.sprite(0, 0,'Level23_ropes11','Symbol 73 instance 10000');
		_this.opt2.scale.setTo(1.0,1.1);
		  _this.opt2.anchor.setTo(0.3,0.1);
		_this.opt2.x=575;
		_this.opt2.y=165;
		_this.opt2.smoothed = true;
		_this.opt2.frame=1;
	   _this.opt2.visible=false;


		 //_this.numberbtn3.events.onInputDown.add(_this.correctAns1,_this);

		 
		
		_this.optionsgrp = _this.add.group();
		_this.wrngGraphicgrp = _this.add.group();
		 flagGroup1 = _this.add.group();

		flagGroup1.add(_this.mainFlag);
		flagGroup1.add(_this.mainFlag1);
		flagGroup1.add(_this.mainFlag2);
		
		_this.wrngGraphicgrp.add(_this.wronggraphics4);
		_this.wrngGraphicgrp.add(_this.wronggraphics3);

	   
		
	   
	   
		_this.optionsgrp.add(_this.opt1);
		_this.optionsgrp.add(_this.opt2);
		 
	  
	   _this.mainFlag1.x = _this.opt1.x;
		 _this.mainFlag1.y = _this.opt1.y;
	
		
		flagGroup1.x = 1000;
		var tween = _this.add.tween(flagGroup1);
		var tween2 = _this.add.tween(_this.optionsgrp);
		tween.to({ x: 0 }, 0,'Linear', true, 0);
		tween2.to({ x: 0 }, 0,'Linear', true, 0);
	   // tween.onComplete.add(_this.addQuestion, _this);

		tween.onComplete.add(function(){
			  _this.opt1.visible=true;
			_this.selectedSprite = _this.opt1;
	  		
	  		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
	 }, _this);      
		
	}, 

	 gotoThirtythreeQuestion:function(){
         _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
	
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		
		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";

         
         
        _this.mainFlag = _this.add.sprite(470,270,'Level23_jugg');
        _this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(0.9,0.9);
         
         
        _this.mainFlag1 = _this.add.sprite(900,230,'Level23_hand111');
        //mainFlag1.anchor.setTo(0.5);
        _this.mainFlag1.scale.setTo(0.6,0.73);
        _this.mainFlag1.name = "Level23_measuringHand";
      //  this.time.events.add(6100,function(){
             _this.mainFlag1.inputEnabled = true;
             _this.mainFlag1.input.useHandCursor = true;
             _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
      //  },this);
        
        _this.mainFlag2 = _this.add.sprite(520,270,'Level23_Line17');
        _this.mainFlag2.anchor.setTo(0.5);
        _this.mainFlag2.scale.setTo(1,0.63);
         
        

    
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+55, _this.world.centerY-100);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
         _this.wronggraphics1.lineTo(0, 130);
        _this.wronggraphics1.lineTo(130, 130);
        _this.wronggraphics1.lineTo(130, 0);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.alpha = 0;
         _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
         
         
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-20);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        _this.wronggraphics2.lineTo(0, 130);
        _this.wronggraphics2.lineTo(130, 130);
        _this.wronggraphics2.lineTo(130, 0);
        _this.wronggraphics2.lineTo(0, 0);
      _this.wronggraphics2.alpha = 0;
         _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
         
       
     
        _this.opt1 = _this.add.sprite(0, 0, 'Level23_hand11', 'Symbol 58 instance 10000');
        _this.opt1.scale.setTo(1.1,1.35);
           _this.opt1.anchor.setTo(0.21,0.12);
        _this.opt1.x=540;
        _this.opt1.y=190;
        _this.opt1.smoothed = true;
        _this.opt1.frame=1;
        _this.opt1.visible=false;
         
         
       /* opt2 = this.add.sprite(0, 0, 'hand11', 'Symbol 58 instance 10000');
        opt2.scale.setTo(1.1,1.15);
           opt2.anchor.setTo(0.21,0.12);
        opt2.x=610;
        opt2.y=120;
        opt2.smoothed = true;
        opt2.frame=1;
        opt2.visible=false;*/
    
        

         

         //numberbtn3.events.onInputDown.add(this.correctAns1,this);

         
        
        _this.optionsgrp = _this.add.group();
        _this.wrngGraphicgrp = _this.add.group();
          flagGroup1 = _this.add.group();

        flagGroup1.add(_this.mainFlag);
        flagGroup1.add(_this.mainFlag1);
        flagGroup1.add(_this.mainFlag2);
        _this.wrngGraphicgrp.add(_this.wronggraphics1);
        


        _this.optionsgrp.add(_this.opt1);
        
   		_this.mainFlag1.x = _this.opt1.x;
        _this.mainFlag1.y = _this.opt1.y;

        
        flagGroup1.x = 1000;
        var tween = _this.add.tween(flagGroup1);
        var tween2 =_this.add.tween(_this.optionsgrp);
        tween.to({ x: 0 }, 0, 'Linear', true, 0);
        tween2.to({ x: 0 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
            _this.opt1.visible=true;
            _this.selectedSprite = _this.opt1;
      		
      		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
     }, _this); 
    },
       gotoThirtyfourthQuestion:function(){
        _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
         
         
         
        _this.mainFlag = _this.add.sprite(480,265,'Level23_boot');
        _this.mainFlag.anchor.setTo(0.5);
        //mainFlag.scale.setTo(0.9,1.25);
         
         
        _this.mainFlag1 = _this.add.sprite(900,270,'Level23_palm1');
        //mainFlag1.anchor.setTo(0.5);
        _this.mainFlag1.scale.setTo(0.461,0.561);
       // this.time.events.add(6100,function(){
             _this.mainFlag1.inputEnabled = true;
             _this.mainFlag1.input.useHandCursor = true;
             _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
       // },this);
        
        _this.mainFlag2 = _this.add.sprite(580,265,'Level23_line1');
        _this.mainFlag2.anchor.setTo(0.5);
        _this.mainFlag2.scale.setTo(0.9,0.555);
         
        

    
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+85);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         _this.wronggraphics1.lineTo(0, 70);
        _this.wronggraphics1.lineTo(70, 70);
        _this.wronggraphics1.lineTo(70, 0);
        _this.wronggraphics1.lineTo(0, 0);
       _this.wronggraphics1.alpha = 0;
         _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
         
         
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY+13);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         _this.wronggraphics2.lineTo(0, 70);
        _this.wronggraphics2.lineTo(70, 70);
        _this.wronggraphics2.lineTo(70, 0);
        _this.wronggraphics2.lineTo(0, 0);
        _this.wronggraphics2.alpha = 0;
         _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
         
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+90, _this.world.centerY-58);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         _this.wronggraphics3.lineTo(0, 70);
        _this.wronggraphics3.lineTo(70, 70);
        _this.wronggraphics3.lineTo(70, 0);
        _this.wronggraphics3.lineTo(0, 0);
        _this.wronggraphics3.alpha = 0;
         _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
         
         
    
         
     
         
        _this.opt1 = this.add.sprite(0, 0, 'Level23_palms', 'Symbol 36 instance 10000');
        _this.opt1.scale.setTo(1.1,1.3);
          _this.opt1.anchor.setTo(0.23,0.187);
        _this.opt1.x=600;
        _this.opt1.y=300;
        _this.opt1.smoothed = true;
        _this.opt1.frame=1;
        _this.opt1.visible=false;
         
        _this.opt2 = _this.add.sprite(0, 0, 'Level23_palms', 'Symbol 36 instance 10000');
        _this.opt2.scale.setTo(1.1,1.3);
                _this.opt2.anchor.setTo(0.23,0.187);
        _this.opt2.x=600;
        _this.opt2.y=230;
        _this.opt2.smoothed = true;
        _this.opt2.frame=1;
        _this.opt2.visible=false;
         
        _this.opt3 = this.add.sprite(0, 0, 'Level23_palms', 'Symbol 36 instance 10000');
        _this.opt3.scale.setTo(1.1,1.3);
                _this.opt3.anchor.setTo(0.23,0.187);
        _this.opt3.x=600;
        _this.opt3.y=160;
        _this.opt3.smoothed = true;
        _this.opt3.frame=1;
        _this.opt3.visible=false;
         
        
         
        
         

         //numberbtn3.events.onInputDown.add(this.correctAns1,this);

         
        
        _this.optionsgrp = _this.add.group();
        _this.wrngGraphicgrp = _this.add.group();
          flagGroup1 = _this.add.group();

        flagGroup1.add(_this.mainFlag);
        flagGroup1.add(_this.mainFlag1);
        flagGroup1.add(_this.mainFlag2);
        _this.wrngGraphicgrp.add(_this.wronggraphics1);
        _this.wrngGraphicgrp.add(_this.wronggraphics2);
        _this.wrngGraphicgrp.add(_this.wronggraphics3);
       
         
        _this.optionsgrp.add(_this.opt1);
        _this.optionsgrp.add(_this.opt2);
        _this.optionsgrp.add(_this.opt3);
    
       
        
           _this.mainFlag1.x = _this.opt1.x;
         _this.mainFlag1.y = _this.opt1.y;
        flagGroup1.x = 1000;
        var tween = _this.add.tween(flagGroup1);
        var tween2 = _this.add.tween(_this.optionsgrp);
        tween.to({ x: 0 }, 0, 'Linear', true, 0);
        tween2.to({ x: 0 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
             _this.opt1.visible=true;
            _this.selectedSprite = _this.opt1;
      
      		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);
     }, _this);      
        
    },
        gotoThirtyfifthQuestion:function(){
        _this.stopVoice();
		_this.getVoice(_this.no1);
		//_this.no1++;

		_this.bottomBar=_this.add.sprite(0,470,'bottomBar');
        _this.bottomBar.name="bottomBar";
		
		   _this.numberbtn1 = _this.add.sprite(0, 0,'calNum');
		   _this.numberbtn1.frame=0;
		//_this.numberbtn1.scale.setTo(0.5,0.5);
		_this.numberbtn1.x=160;
		_this.numberbtn1.y=465;
		
		
		_this.numberbtn2 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn2.frame=1;
		//_this.numberbtn2.scale.setTo(0.5,0.5);
		_this.numberbtn2.x=230;
		_this.numberbtn2.y=465;
		
		
   
		_this.numberbtn3 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn3.frame=2;
		//_this.numberbtn3.scale.setTo(0.5,0.5);
		_this.numberbtn3.x=300;
		_this.numberbtn3.y=465;
		
		
		_this.numberbtn4 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn4.frame=3;
		//_this.numberbtn4.scale.setTo(0.5,0.5);
		_this.numberbtn4.x=370;
		_this.numberbtn4.y=465;
		
		
		
		_this.numberbtn5 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn5.frame=4;
		//_this.numberbtn5.scale.setTo(0.5,0.5);
		_this.numberbtn5.x=440;
		_this.numberbtn5.y=465;
		
		
		_this.numberbtn6 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn6.frame=5;
		//_this.numberbtn6.scale.setTo(0.5,0.5);
		_this.numberbtn6.x=510;
		_this.numberbtn6.y=465;
		
	 
		
		_this.numberbtn7 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn7.frame=6;
		//_this.numberbtn7.scale.setTo(0.5,0.5);
		_this.numberbtn7.x=580;
		_this.numberbtn7.y=465;
		
		
		
		_this.numberbtn8 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn8.frame=7;
		//_this.numberbtn8.scale.setTo(0.5,0.5);
		_this.numberbtn8.x=650;
		_this.numberbtn8.y=465;
		
	   
		
		_this.numberbtn9 = _this.add.sprite(0, 0,'calNum');
		_this.numberbtn9.frame=8;
		//_this.numberbtn9.scale.setTo(0.5,0.5);
		_this.numberbtn9.x=720;
		_this.numberbtn9.y=465;
		

		  _this.numberbtn1.name = "Level23_numberbtn1";
		 _this.numberbtn2.name = "Level23_numberbtn2";
		 _this.numberbtn3.name = "Level23_numberbtn3";
		 _this.numberbtn4.name = "Level23_numberbtn4";
		 _this.numberbtn5.name = "Level23_numberbtn5";
		 _this.numberbtn6.name = "Level23_numberbtn6";
		 _this.numberbtn7.name = "Level23_numberbtn7";
		 _this.numberbtn8.name = "Level23_numberbtn8";
		 _this.numberbtn9.name = "Level23_numberbtn9";
         
         
        _this.mainFlag = _this.add.sprite(470,230,'Level23_housenew');
        _this.mainFlag.anchor.setTo(0.5);
         //mainFlag.scale.setTo(1,1.1);
         
         
        _this.mainFlag1 = _this.add.sprite(900,250,'Level23_rope111');
     _this.mainFlag1.anchor.setTo(-0.05,0);
        _this.mainFlag1.scale.setTo(1.1,1.1);
      //  this.time.events.add(6100,function(){
             _this.mainFlag1.inputEnabled = true;
             _this.mainFlag1.input.useHandCursor = true;
             _this.mainFlag1.events.onInputDown.add(_this.addListeners1,_this);
      //  },this);
        
        _this.mainFlag2 = _this.add.sprite(469,395,'Level23_Line32');
        _this.mainFlag2.anchor.setTo(0.5);
        _this.mainFlag2.scale.setTo(0.74,1.1);
         
        

    
        _this.wronggraphics1 = _this.add.graphics(_this.world.centerX-130, _this.world.centerY+180);
        _this.wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics1.beginFill(0xFF700B, 1);
        // wronggraphics1.scale.setTo(1.5,1);
         _this.wronggraphics1.lineTo(0, 90);
        _this.wronggraphics1.lineTo(90, 90);
        _this.wronggraphics1.lineTo(90, 0);
        _this.wronggraphics1.lineTo(0, 0);
     _this.wronggraphics1.angle = 180;
    _this.wronggraphics1.alpha = 0;
         _this.wronggraphics1.inputEnabled = true;
        _this.wronggraphics1.input.useHandCursor = true;
         
         
          _this.wronggraphics2 = _this.add.graphics(_this.world.centerX-40, _this.world.centerY+180);
        _this.wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics2.beginFill(0xFF700B, 1);
        // wronggraphics2.scale.setTo(1.5,1);
         _this.wronggraphics2.lineTo(0, 90);
        _this.wronggraphics2.lineTo(90, 90);
        _this.wronggraphics2.lineTo(90, 0);
        _this.wronggraphics2.lineTo(0, 0);
        _this.wronggraphics2.angle = 180;
      _this.wronggraphics2.alpha = 0;
         _this.wronggraphics2.inputEnabled = true;
        _this.wronggraphics2.input.useHandCursor = true;
         
        _this.wronggraphics3 = _this.add.graphics(_this.world.centerX+53, _this.world.centerY+180);
        _this.wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics3.beginFill(0xFF700B, 1);
        // wronggraphics3.scale.setTo(1.5,1);
         _this.wronggraphics3.lineTo(0, 90);
        _this.wronggraphics3.lineTo(90, 90);
        _this.wronggraphics3.lineTo(90, 0);
        _this.wronggraphics3.lineTo(0, 0);
       _this.wronggraphics3.angle = 180;
       _this.wronggraphics3.alpha = 0;
         _this.wronggraphics3.inputEnabled = true;
        _this.wronggraphics3.input.useHandCursor = true;
         
         _this.wronggraphics4 = _this.add.graphics(_this.world.centerX+144, _this.world.centerY+180);
        _this.wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        _this.wronggraphics4.beginFill(0xFF700B, 1);
        // wronggraphics4.scale.setTo(1.5,1);
         _this.wronggraphics4.lineTo(0, 90);
        _this.wronggraphics4.lineTo(90, 90);
        _this.wronggraphics4.lineTo(90, 0);
        _this.wronggraphics4.lineTo(0, 0);
      _this.wronggraphics4.angle = 180;
        _this.wronggraphics4.alpha = 0;
         _this.wronggraphics4.inputEnabled = true;
        _this.wronggraphics4.input.useHandCursor = true;
         
      
         

         
         _this.opt1 = _this.add.sprite(0, 0, 'Level23_ropes111', 'Symbol 91 instance 10000');
        _this.opt1.scale.setTo(1.1,1.1);
          _this.opt1.anchor.setTo(0.09,0.27);
        _this.opt1.x=262;
        _this.opt1.y=420;
        _this.opt1.smoothed = true;
        _this.opt1.frame=1;
        _this.opt1.visible=false;
         
        
        _this.opt2 = _this.add.sprite(0, 0, 'Level23_ropes111', 'Symbol 91 instance 10000');
        _this.opt2.scale.setTo(1.1,1.1);
            _this.opt2.anchor.setTo(0.09,0.27);
        _this.opt2.x=363;
        _this.opt2.y=420;
        _this.opt2.smoothed = true;
        _this.opt2.frame=1;
        _this.opt2.visible=false;
         
        _this.opt3 = _this.add.sprite(0, 0, 'Level23_ropes111', 'Symbol 91 instance 10000');
        _this.opt3.scale.setTo(1.1,1.1);
            _this.opt3.anchor.setTo(0.09,0.27);
        _this.opt3.x=465;
        _this.opt3.y=420;
        _this.opt3.smoothed = true;
        _this.opt3.frame=1;
        _this.opt3.visible=false;
         
         
        _this.opt4 = _this.add.sprite(0, 0, 'Level23_ropes111', 'Symbol 91 instance 10000');
        _this.opt4.scale.setTo(1.1,1.1);
            _this.opt4.anchor.setTo(0.09,0.27);
        _this.opt4.x=565;
        _this.opt4.y=420;
        _this.opt4.smoothed = true;
        _this.opt4.frame=1;
        _this.opt4.visible=false;
         
       
         
          

         //numberbtn3.events.onInputDown.add(this.correctAns1,this);

         

        _this.optionsgrp = _this.add.group();
        _this.wrngGraphicgrp = _this.add.group();
                  flagGroup1 = _this.add.group();

        flagGroup1.add(_this.mainFlag);
        flagGroup1.add(_this.mainFlag1);
        flagGroup1.add(_this.mainFlag2);
        _this.wrngGraphicgrp.add(_this.wronggraphics1);
        _this.wrngGraphicgrp.add(_this.wronggraphics2);
        _this.wrngGraphicgrp.add(_this.wronggraphics3);
     _this.wrngGraphicgrp.add(_this.wronggraphics4);
         
         
        _this.optionsgrp.add(_this.opt1);
        _this.optionsgrp.add(_this.opt2);
        _this.optionsgrp.add(_this.opt3);
         _this.optionsgrp.add(_this.opt4);
         
         
           _this.mainFlag1.x = _this.opt1.x;
         _this.mainFlag1.y = _this.opt1.y;
        
        flagGroup1.x = 1000;
        var tween = _this.add.tween(flagGroup1);
        var tween2 = _this.add.tween(_this.optionsgrp);
        tween.to({ x: 0 }, 0, 'Linear', true, 0);
        tween2.to({ x: 0 }, 0, 'Linear', true, 0);
       // tween.onComplete.add(this.addQuestion, this);

        tween.onComplete.add(function(){
                        _this.opt1.visible=true;
            _this.selectedSprite = _this.opt1;
     		
     		_this.numberbtn1.inputEnabled = true;
			_this.numberbtn1.input.useHandCursor = true;
			_this.numberbtn1.smoothed = true;
			_this.numberbtn1.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn2.inputEnabled = true;
			_this.numberbtn2.input.useHandCursor = true;
			_this.numberbtn2.smoothed = true;
			_this.numberbtn2.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn3.inputEnabled = true;
			_this.numberbtn3.input.useHandCursor = true;
			_this.numberbtn3.smoothed = true;
			_this.numberbtn3.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn4.inputEnabled = true;
			_this.numberbtn4.input.useHandCursor = true;
			_this.numberbtn4.smoothed = true;
			_this.numberbtn4.events.onInputDown.add(_this.correctAns,_this);

			_this.numberbtn5.inputEnabled = true;
			_this.numberbtn5.input.useHandCursor = true;
			_this.numberbtn5.smoothed = true;
			_this.numberbtn5.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn6.inputEnabled = true;
			_this.numberbtn6.input.useHandCursor = true;
			_this.numberbtn6.smoothed = true;
			_this.numberbtn6.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn7.inputEnabled = true;
			_this.numberbtn7.input.useHandCursor = true;
			_this.numberbtn7.smoothed = true;
			_this.numberbtn7.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn8.inputEnabled = true;
			_this.numberbtn8.input.useHandCursor = true;
			_this.numberbtn8.smoothed = true;
			_this.numberbtn8.events.onInputDown.add(_this.wrongAns,_this);

			_this.numberbtn9.inputEnabled = true;
			_this.numberbtn9.input.useHandCursor = true;
			_this.numberbtn9.smoothed = true;
			_this.numberbtn9.events.onInputDown.add(_this.wrongAns,_this);

     }, _this);      
             
        
    },
		
	
	  onDragStart1:function(target){
		  //var currentTime = window.timeSaveFunc();
		/*var interactEvent = 
		{ 
			id_game_play: _this.savedVar, 
			id_question: _this.questionid,
			date_time_event: currentTime, 
			event_type: "drag", 
			res_id: target.name, 
			access_token: window.acctkn 
		} */
			
		//absdsjsapi.saveInteractEvent(interactEvent);
		
		//console.log("startdrag");
		 // if(target.name == "feet")
		 //   target.scale.y *= -1;
		commonNavBar.playClickSound();
	},

	 onDragStop1:function(target){
		// var currentTime = window.timeSaveFunc();
		/*var interactEvent = 
		{ 
			id_game_play: _this.savedVar, 
			id_question: _this.questionid,  
			date_time_event: currentTime, 
			event_type: "drop", 
			res_id: target.name,
			access_token: window.acctkn 
		} */
			
		//absdsjsapi.saveInteractEvent(interactEvent);
		
		 for(var i=0;i<_this.wrngGraphicgrp.children.length;i++)
			 {
			commonNavBar.playSnapSound();
				 if(_this.checkOverlap(target,_this.wrngGraphicgrp.getChildAt(i))&&_this.optionsgrp.getChildAt(i).visible==false)
					 {
						 if(_this.selectedSprite!=null)
						{
							_this.selectedSprite.frame = 1;
						}
						  _this.optionsgrp.getChildAt(i).visible = true;
						 //target.destroy();
						// _this.imageAgain();
						if(target.name == "Level23_measuringFeet")
						{
							 //target.scale.y *= -1;  
							if(_this.optionsgrp.getChildAt(i).name == "_this.opt1")
								{
									target.loadTexture('Level23_feet1', 0, false);
									target.anchor.setTo(0.55,0.6);
								}
							else if(_this.optionsgrp.getChildAt(i).name == "_this.opt2")
								{
									target.loadTexture('Level23_feet2', 0, false);
									target.anchor.setTo(0.5,0.45);
								}
							else if(_this.optionsgrp.getChildAt(i).name == "_this.opt3")
								{
									target.loadTexture('Level23_feet1', 0, false);
									target.anchor.setTo(0.55,0.6);
								}
							else if(_this.optionsgrp.getChildAt(i).name == "_this.opt4")
								{
									target.loadTexture('Level23_feet2', 0, false);
									target.anchor.setTo(0.5,0.45);
								}
							 else if(_this.optionsgrp.getChildAt(i).name == "_this.opt5")
								{
									target.loadTexture('Level23_feet1', 0, false);
									target.anchor.setTo(0.5,0.55);
								}
							 else if(_this.optionsgrp.getChildAt(i).name == "_this.opt6")
								{
									target.loadTexture('Level23_feet2', 0, false);
									target.anchor.setTo(0.5,0.45);
								}
								 else if(_this.optionsgrp.getChildAt(i).name == "_this.opt7")
								{
									target.loadTexture('Level23_feet1', 0, false);
									target.anchor.setTo(0.5,0.55);
								}
							 else if(_this.optionsgrp.getChildAt(i).name == "_this.opt8")
								{
									target.loadTexture('Level23_feet2', 0, false);
									target.anchor.setTo(0.5,0.45);
								}
							 else if(_this.optionsgrp.getChildAt(i).name == "_this.opt9")
								{
									target.loadTexture('Level23_feet1', 0, false);
									target.anchor.setTo(0.5,0.45);
								}
						}
							
						_this.selectedSprite = _this.optionsgrp.getChildAt(i);
						break;
					 }
				 else
					 {
						// //console.log("hhhhhhhhhhhhhhhhhhhh"+target.name);
						 //if(target.name == "feet")
						 //   target.scale.y *= -1;
					 }
			 
			 }
		 target.x = _this.selectedSprite.x;
		 target.y = _this.selectedSprite.y;

	},

	
		checkOverlap:function(spriteA, spriteB) 
	{

		var boundsA = spriteA.getBounds();
		var boundsB = spriteB.getBounds();

		return Phaser.Rectangle.intersects(boundsA, boundsB);
	},

	
	
	addListeners1:function()
	{
		_this.mainFlag1.input.enableDrag(true);
		 

		_this.mainFlag1.events.onDragStart.add(_this.onDragStart1, _this);
		_this.mainFlag1.events.onDragStop.add(_this.onDragStop1, _this);
		

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

	   getQuestion:function(target)
	{
		_this.noofAttempts = 0;
		_this.AnsTimerCount = 0;
		_this.sceneCount++;
		_this.timer = _this.time.create(false);

/*_this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
        _this.timer1.start();*/

		//  Set a TimerEvent to occur after 2 seconds
		/*_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, _this);*/

		//  Start the _this.timer running - _this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		/*_this.timer.start();
		
		_this.speakerbtn.inputEnabled=true;  
		_this.speakerbtn.input.useHandCursor = true;*/
		//console.log("get"+_this.no1);
		switch(_this.qArray[_this.no1])
		{
			case 1: 
					_this.questionid = 1;
					_this.gotoFirstQuestion();
					break;
			case 2: 
					_this.questionid = 2;
					_this.gotoSecondQuestion();
					break;
			case 3: 
					_this.questionid = 3;
					_this.gotoThirdQuestion();
					break;
			case 4: 
					_this.questionid = 4;
					_this.gotoFourthQuestion();
					break;
			case 5: 
					_this.questionid = 5;
					_this.gotoFifthQuestion();
					break;
			case 6: 
					_this.questionid = 5;
					_this.gotoSixthQuestion();
					break;
			case 7: 
					_this.questionid = 5;
					_this.gotoSeventhQuestion();
					break;
			case 8: 
					_this.questionid = 5;
					_this.gotoEighthQuestion();
					break;
			case 9: 
					_this.questionid = 5;
					_this.gotoNinethQuestion();
					break;
			case 10: 
					_this.questionid = 5;
					_this.gotoTenthQuestion();
					break;
			case 11: 
					_this.questionid = 5;
					_this.gotoEleventhQuestion();
					break;
			case 12: 
					_this.questionid = 5;
					_this.gotoTwevelvethQuestion();
					break;
			case 13: 
					_this.questionid = 6;
					_this.gotoThirteenthQuestion();
					break;
			case 14: 
					_this.questionid = 6;
					_this.gotoFourteenthQuestion();
					break;            
			case 15: 
					_this.questionid = 6;
					_this.gotoFifteenthQuestion();
					break;
			case 16: 
					_this.questionid = 6;
					_this.gotoSixteenthQuestion();
					break;
			case 17: 
					_this.questionid = 6;
					_this.gotoSeventeenthQuestion();
					break;
			case 18: 
					_this.questionid = 6;
					_this.gotoEighteenthQuestion();
					break;
			case 19: 
					_this.questionid = 6;
					_this.gotoNineteenthQuestion();
					break;
			case 20: 
					_this.questionid = 6;
					_this.gotoTwentythQuestion();
					break;
			case 21: 
					_this.questionid = 7;
					_this.gotoTwentyonethQuestion();
					break;
			case 22: 
					_this.questionid = 7;
					_this.gotoTwentytwothQuestion();
					break;
			case 23: 
					_this.questionid = 7;
					_this.gotoTwentythreethQuestion();
					break;
			case 24: 
					_this.questionid = 7;
					_this.gotoTwentyfourthQuestion();
					break;
			case 25: 
					_this.questionid = 8;
					_this.gotoTwentyfifthQuestion();
					break;
			case 26: 
					_this.questionid = 8;
					_this.gotoTwentysixthQuestion();
					break;
			case 27: 
					_this.questionid = 8;
					_this.gotoTwentyseventhQuestion();
					break;
			case 28: 
					_this.questionid = 8;
					_this.gotoTwentyeighthQuestion();
					break;
			case 29: 
					_this.questionid = 8;
					_this.gotoTwentyninethQuestion();
					break;
			case 30: 
					_this.questionid = 8;
					_this.gotoThirtythQuestion();
					break;
			case 31: 
					_this.questionid = 8;
					_this.gotoThirtyonethQuestion();
					break;
			case 32: 
					_this.questionid = 8;
					_this.gotoThirtytwothQuestion();
					break;
			case 33: 
					_this.questionid = 8;
					_this.gotoThirtythreeQuestion();
                    break;
            case 34:
            		_this.questionid = 8;
             		_this.gotoThirtyfourthQuestion();
                    break;
            case 35: 
            		_this.questionid = 8;
            		_this.gotoThirtyfifthQuestion();
                    break;


		}
		telInitializer2.gameQuestionStart(this,_this.questionid);
	},
	
	generateStarsForTheScene:function(game,count)
    {
        _this.starsGroup = _this.add.group();
        
        for (var i = 0; i <  count; i++)
        {
    
            _this.starsGroup.create(_this.world.centerX, 7, 'cstarAnim');
            
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
        }
        _this.starsGroup.getChildAt(0).frame = 2; 
    },
	/* generateStarsForTheScene:function(count)
	{
		starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroup.create(_this.world.centerX-15, 12, 'starAnim1');
			
			for(var j =0;j<i;j++)
			{
				if(starsGroup.getChildAt(j))
				{
					starsGroup.getChildAt(j).x-=15;
					starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
	*/
	createScoreScene:function()
    {
    	this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);
        
        /* this.tryAgainText = this.add.text(this.world.centerX,this.world.centerY,'Try Again !!');
        this.tryAgainText.anchor.setTo(0.5);
        this.tryAgainText.align = 'center';
        this.tryAgainText.fontWeight = 'bold';
        this.tryAgainText.fontSize = 40;
        this.tryAgainText.fill = 'White';
        this.tryAgainText.visible = false;
        
        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        this.terrificText.anchor.setTo(0.5);
        this.terrificText.align = 'center';
        this.terrificText.fontWeight = 'bold';
        this.terrificText.fontSize = 40;
        this.terrificText.fill = 'White';
        this.terrificText.visible = false;
        
        this.verGoodText = this.add.text(this.world.centerX,this.world.centerY,'Very Good !!');
        this.verGoodText.anchor.setTo(0.5);
        this.verGoodText.align = 'center';
        this.verGoodText.fontWeight = 'bold';
        this.verGoodText.fontSize = 40;
        this.verGoodText.fill = 'White';
        this.verGoodText.visible = false;
        
        this.excellentText = this.add.text(this.world.centerX,this.world.centerY,'Excellent !!');
        this.excellentText.anchor.setTo(0.5);
        this.excellentText.align = 'center';
        this.excellentText.fontWeight = 'bold';
        this.excellentText.fontSize = 40;
        this.excellentText.fill = 'White';
        this.excellentText.visible = false; */
  
  this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.7,0.7);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;
        
        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.7,0.7);
        this.sademoji.frame=4;
        this.sademoji.visible = false;

        this.HomeBtn = this.add.sprite(this.world.centerX+140,this.world.centerY+80,'HomeBtn');
        this.HomeBtn.anchor.setTo(0.5);
        this.HomeBtn.inputEnabled = true;
        this.HomeBtn.events.onInputDown.add(this.homeClicked,this);

        this.replayBtn = this.add.sprite(this.world.centerX-140,this.world.centerY+80,'replayBtn');
        this.replayBtn.anchor.setTo(0.5);
        this.replayBtn.inputEnabled = true;
        this.replayBtn.events.onInputDown.add(this.replayClicked,this);

        this.generateStarsForScoreScene(this,9);   //Stars based on the Game
    },

    homeClicked:function()
    {
        commonNavBar.playClickSound();

        this.HomeBtn.events.onInputDown.removeAll();
        
        commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                commonNavBar.navBar=null;

        this.score += this.scoreSceneScore;
		
		this.backgroundtransp.visible=false; //Remove BackGround Opacity

        _this.state.start('measurement1',true,false);
        
    },

     replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true,false);

        this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(3000, function()
        { 
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
			this.backgroundtransp.visible=false; //Remove BackGround Opacity
            _this.time.events.add(500,function(){
           _this.state.start('length_MLG_2_1level1',true,false);
            },this);
        }, this);
    },
    
    generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
        this.maxscore = count * 5;
        console.log(this.maxscore);
        
        for (var i = 0; i < count; i++)
        {
            if(this.Stararr[i]!=1)
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'star5');
                this.scoreSceneScore+=5;
            }
            else
            {
                this.starsGroup.create(this.world.centerX, this.world.centerY-70, 'dot');
                this.playedwithHint = true;
            }

            for(var j =0;j<=i;j++)
            {
                if(this.starsGroup.getChildAt(j))
                {
                    this.starsGroup.getChildAt(j).anchor.setTo(0.5);
                    this.starsGroup.getChildAt(j).x-=20;
                    this.starsGroup.getChildAt(i).x+=20;
                }
            }
        }    
        /* if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.tryAgainText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.4) && ((this.scoreSceneScore/this.maxscore) < 0.7) ){
            this.terrificText.visible = true;
        }else if(( (this.scoreSceneScore/this.maxscore) > 0.7) && ((this.scoreSceneScore/this.maxscore) < 0.9) ){
            this.verGoodText.visible = true;
        }else if((this.scoreSceneScore/this.maxscore) > 0.9){
            this.excellentText.visible = true;
        } */
  
  if((this.scoreSceneScore/this.maxscore) < 0.4){
            this.sademoji.visible = true;
        }else{
            this.happyemoji.visible = true;
        }

        commonNavBar.playCelebrationSound();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false,false);    

        if(!this.playedwithHint)
        {
        	this.replayBtn.visible = false;
        } 
            
    },
	correctAns:function(target1)
	{
		telInitializer2.gameCorrectAns();
		target1.frame = target1.frame +9;
		_this.noofAttempts++;

		target1.events.onInputDown.removeAll();

		_this.removeListeners();

		//console.log("wrong");
		
			//var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play:_this.savedVar,
				id_question: _this.questionid,
				date_time_event: _this.currentTime,  
				event_type: "click", 
				res_id: target1.name, 
				access_token: window.acctkn 
			} 
			
			if(_this.timer1)
            {
            _this.timer1.stop();
            }

			//absdsjsapi.saveInteractEvent(interactEvent);	
			if(_this.timer)
			{
			_this.timer.stop();
			_this.timer = null;
			}
		//var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: _this.savedVar,
					id_question: _this.questionid,
					pass: "Yes",
					time2answer: _this.AnsTimerCount,
					attempts: _this.noofAttempts,
					date_time_submission: _this.currentTime,  
					access_token: window.acctkn 
				}
		
		//absdsjsapi.saveAssessment(saveAsment);


		//telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
		
		//_this.speakerbtn.inputEnabled=false;
		//console.log("correct");

		
	  
	  //target1.frame=1;
		//_this.mainFlag.frame=1;
		_this.mainFlag1.visible=false;
		  _this.anim11 =_this.mainFlag.animations.add('flag1');
	   _this.anim11.play(10,true);
	  //  //console.log(_this.selectedSprite.name);
		_this.selectedSprite.frame=0;
		//var anim4 = _this.selectedSprite.animations.add('star');
	   // anim4.play(10,true); 
		
		celebration = true;
		
		                    commonNavBar.playCelebrationSound();

		_this.time.events.add(500, _this.removeCelebration, _this);

		if(_this.numberbtn1!=null||_this.numberbtn1!=undefined)
		{
			_this.numberbtn1.events.onInputDown.removeAll();
			_this.numberbtn1.events.onInputOver.removeAll();
			_this.numberbtn1.events.onInputOut.removeAll();           
		}
			
		if(_this.numberbtn2!=null||_this.numberbtn2!=undefined)
		   {
			   _this.numberbtn2.events.onInputDown.removeAll();
			   _this.numberbtn2.events.onInputOver.removeAll();
			   _this.numberbtn2.events.onInputOut.removeAll();    
		   }
		if(_this.numberbtn3!=null||_this.numberbtn3!=undefined)
		{
			_this.numberbtn3.events.onInputDown.removeAll();
			_this.numberbtn3.events.onInputOver.removeAll();
			_this.numberbtn3.events.onInputOut.removeAll();   
		}
				if(_this.numberbtn4!=null||_this.numberbtn4!=undefined)
		{
			_this.numberbtn4.events.onInputDown.removeAll();
			_this.numberbtn4.events.onInputOver.removeAll();
			_this.numberbtn4.events.onInputOut.removeAll();           
		}
			
		if(_this.numberbtn5!=null||_this.numberbtn5!=undefined)
		   {
			   _this.numberbtn5.events.onInputDown.removeAll();
			   _this.numberbtn5.events.onInputOver.removeAll();
			   _this.numberbtn5.events.onInputOut.removeAll();    
		   }
		if(_this.numberbtn6!=null||_this.numberbtn6!=undefined)
		{
			_this.numberbtn6.events.onInputDown.removeAll();
			_this.numberbtn6.events.onInputOver.removeAll();
			_this.numberbtn6.events.onInputOut.removeAll();   
		}
				if(_this.numberbtn7!=null||_this.numberbtn7!=undefined)
		{
			_this.numberbtn7.events.onInputDown.removeAll();
			_this.numberbtn7.events.onInputOver.removeAll();
			_this.numberbtn7.events.onInputOut.removeAll();           
		}
			
		if(_this.numberbtn8!=null||_this.numberbtn8!=undefined)
		   {
			   _this.numberbtn8.events.onInputDown.removeAll();
			   _this.numberbtn8.events.onInputOver.removeAll();
			   _this.numberbtn8.events.onInputOut.removeAll();    
		   }
		if(_this.numberbtn9!=null||_this.numberbtn9!=undefined)
		{
			_this.numberbtn9.events.onInputDown.removeAll();
			_this.numberbtn9.events.onInputOver.removeAll();
			_this.numberbtn9.events.onInputOut.removeAll();   
		}

		////console.log(target);
		//target.tint = 0xA9A9A9;

                  _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                  
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
        
                    _this.anim4.play(25,false);
                    this.Stararr.push(3);
		//target.events.onInputDown.removeAll();
		 
	},

	removeListeners:function(){
		_this.numberbtn1.inputEnabled = false;
		_this.numberbtn1.input.useHandCursor = false;

		_this.numberbtn2.inputEnabled = false;
		_this.numberbtn2.input.useHandCursor = false;

		_this.numberbtn3.inputEnabled = false;
		_this.numberbtn3.input.useHandCursor = false;

		_this.numberbtn4.inputEnabled = false;
		_this.numberbtn4.input.useHandCursor = false;

		_this.numberbtn5.inputEnabled = false;
		_this.numberbtn5.input.useHandCursor = false;

		_this.numberbtn6.inputEnabled = false;
		_this.numberbtn6.input.useHandCursor = false;

		_this.numberbtn7.inputEnabled = false;
		_this.numberbtn7.input.useHandCursor = false;

		_this.numberbtn8.inputEnabled = false;
		_this.numberbtn8.input.useHandCursor = false;

		_this.numberbtn9.inputEnabled = false;
		_this.numberbtn9.input.useHandCursor = false;
	},

	wrongAns:function(target1)
	{
		telInitializer2.gameWrongAns();
		target1.frame = target1.frame +9;
		_this.noofAttempts++;

		target1.events.onInputDown.removeAll();

		_this.removeListeners();

		//console.log("wrong");
		
			//var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid, 
				date_time_event: _this.currentTime,  
				event_type: "click", 
				res_id: target1.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);	


			/*//var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: _this.savedVar,
					id_question: _this.questionid,
					pass: "no",
					time2answer: _this.AnsTimerCount,
					attempts: _this.noofAttempts,
					date_time_submission: currentTime, 
					access_token: window.acctkn 
				}
		
		absdsjsapi.saveAssessment(saveAsment);*/
			
		//console.log("wrong");
	   

// target1.destroy();
		//_this.getQuestion();
		
	   _this.mainFlag1.x = _this.opt1.x;
		_this.mainFlag1.y = _this.opt1.y;
	
		  _this.shake.shake(10, _this.mainFlag);
		_this.time.events.add(100, function(){_this.shake.shake(10, _this.mainFlag1);target1.frame = target1.frame -9;},_this);
	   // _this.shake._this.shake(10, _this.mainFlag1);
		_this.wrong = false;
        commonNavBar.playWrongCelebrationSound();
                _this.starsGroup.getChildAt(_this.count1).frame = 1;
           this.Stararr.push(1);

		//_this.wmusic1 = _this.add.audio('aiyoh');
		//_this.wmusic1.play();
			//_this.disableListeners();
		
		for(var i=0;i<_this.optionsgrp.children.length;i++)
			{
				_this.optionsgrp.getChildAt(i).visible = false;
			}
		
		_this.optionsgrp.getChildAt(0).visible = true;
		_this.selectedSprite = _this.optionsgrp.getChildAt(0);
		
		if(_this.mainFlag1.name == "feet")
		{
			_this.mainFlag1.loadTexture('Level23_feet1', 0, false);
			_this.mainFlag1.anchor.setTo(0.55,0.6);
		}
		
		
		_this.mainFlag1.x = _this.selectedSprite.x;
		_this.mainFlag1.y = _this.selectedSprite.y;
		 		_this.time.events.add(500, _this.removeCelebration, _this);

	},
	
	removeCelebration:function()
	{
		//console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		console.log("no"+_this.no1);
		//_this.input.enabled = true;
			
			 _this.count1++;
			 _this.no1++;
		//if(rightCount<=0)
		//{     
			//console.log("vamitha");
			
			if(_this.no1<9)
			{          
				_this.time.events.add(3500, function(){
			  _this.starsGroup.getChildAt(_this.count1).frame = 2;

            }, _this);


				//console.log("addq");
				 _this.addQuestion(_this.count1);
			}
			else
			{
				commonNavBar.stopTimer();
              commonNavBar.stopVoice();

                commonNavBar.disableNavBar();
				commonNavBar.soundVar=null,
        commonNavBar.questionArray=null,
        commonNavBar.questionCount=null,
        commonNavBar.soundUrl=null,
        commonNavBar.hint1=true,
        commonNavBar.hint2=true,
        commonNavBar.hint3=true,
        commonNavBar.speakerbtn=null;
        commonNavBar.backbtn=null;
                this.createScoreScene();
			}

	},
	
	
	changeQuestion:function()
	{
		_this.bottomBar.destroy();
		flagGroup1.destroy();
		_this.optionsgrp.destroy();
		_this.numberbtn1.destroy();
		 _this.numberbtn2.destroy();
		_this.numberbtn3.destroy();
		_this.numberbtn4.destroy();
		_this.numberbtn5.destroy();
		 _this.numberbtn6.destroy();
		 _this.numberbtn7.destroy();
		 _this.numberbtn8.destroy();
		 _this.numberbtn9.destroy();
		if(_this.no1<9)
		{
			_this.count++;
			_this.getQuestion();
		}
		else
		{
			//console.log("gameEnd");
				//_this.input.enabled = false;
				// text = _this.add.text(_this.world.centerX, 450,'Level23_  Game Complete  ');

				// text.anchor.set(0.5);
				// text.align = 'center';

				// text.font = 'Arial Black';
				// text.fontSize = 70;
				// text.fontWeight = 'bold';
				// text.fill = '#FFFFF';

				// text.setShadow(0, 0,'Level23_rgba(0, 0, 0, 0.5)', 0);
			

	
	   
			   //_this.state.start('level2');
			  //baudio.stop();
//            headingText2.destroy();
//            backbtn1.destroy();
//            _this.speaker1.destroy();
//            starsGroup1.destroy();
//              
//            headingText2.visible=false;
//            backbtn1.visible=false;
//            _this.speaker1.visible=false;
//            starsGroup1.visible=false;
		}
	},


	

	
	update:function(){

	},
	
	getVoice:function(){
       _this.stopVoice();	
		
		_this.playQuestionSound = document.createElement('audio');
		_this.src = document.createElement('source');
        switch(_this.qArray[_this.no1])
        {
            case 1:
            		if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/English/2.3_1.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Hindi/2.3_1.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Kannada/2.3_1.mp3");
					}
					else if(window.languageSelected == "Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.3/2.3_1.mp3");
					}
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Odiya/2.3_1.mp3");
					}
					break;
			case 2:
            		if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/English/2.3_2.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Hindi/2.3_2.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Kannada/2.3_2.mp3");
					}
					else if(window.languageSelected == "Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.3/2.3_2.mp3");
					}
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Odiya/2.3_2.mp3");
					}
					break;
			case 3:
					if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/English/2.3_3.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Hindi/2.3_3.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Kannada/2.3_3.mp3");
					}
					else if(window.languageSelected == "Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.3/2.3_3.mp3");
					}
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Odiya/2.3_3.mp3");
					}
					break;
			case 4:
					if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/English/2.3_4.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Hindi/2.3_4.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Kannada/2.3_4.mp3");
					}
					else if(window.languageSelected == "Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.3/2.3_4.mp3");
					}
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Odiya/2.3_4.mp3");
					}
					break;
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 34:
					if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/English/2.3_5.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Hindi/2.3_5.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Kannada/2.3_5.mp3");
					}
					else if(window.languageSelected == "Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.3/2.3_5.mp3");
					}
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Odiya/2.3_5.mp3");
					}
					break;
            case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 33:
					if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/English/2.3_6.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Hindi/2.3_6.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Kannada/2.3_6.mp3");
					}
					else if(window.languageSelected == "Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.3/2.3_6.mp3");
					}
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Odiya/2.3_6.mp3");
					}
					break;
            case 21:
            case 22:
            case 23:
			case 24:if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/English/2.3_7.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Hindi/2.3_7.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Kannada/2.3_7.mp3");
					}
					else if(window.languageSelected == "Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.3/2.3_7.mp3");
					}
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Odiya/2.3_7.mp3");
					}
					break;
            case 25:
			case 26:
			case 27:
			case 28:
			case 29:
			case 30:
			case 31:
			case 32:
			case 35:
					if(window.languageSelected == "English")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/English/2.3_8.mp3");
					}
					else if(window.languageSelected == "Hindi")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Hindi/2.3_8.mp3");
					}
					else if(window.languageSelected == "Kannada")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Kannada/2.3_8.mp3");
					}
					else if(window.languageSelected == "Gujarati")
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/2.3/2.3_8.mp3");
					}
					else
					{
						_this.src.setAttribute("src", window.baseUrl+"questionSounds/2.3/Odiya/2.3_8.mp3");
					}
					break;
        }

        _this.playQuestionSound.appendChild(_this.src);
		//_this.playQuestionSound.play();

		commonNavBar.addNavBar(this,_this.src.src,'measurement1');
		commonNavBar.getVoice(_this.src.src);
        //commonNavBar.stopVoice();

		//if(window.languageSelected == "Odiya")
       //     _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
         
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
		 _this.stopVoice();

		  window.score = this.score;
        localStorage.setItem(window.avatarName+"Score", window.score);

        if(this.playedwithHint&&this.completelyplayed)
        {
        	telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"length_MLG_2_1state", "playedwithhint");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
        else if(!this.playedwithHint&&this.completelyplayed)
        {
        	telInitializer2.syncToServer();
            localStorage.setItem(window.avatarName+"length_MLG_2_1state", "fullycomplete");
            localStorage.setItem(window.avatarName+"length_MLG_3_2state", "canplay");
            localStorage.setItem(window.avatarName+"measurementPlayed", "played");
        }
	}
	
};