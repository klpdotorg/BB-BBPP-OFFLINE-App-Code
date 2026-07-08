Game.sg7_2_2level1=function(){};
	
	
	

Game.sg7_2_2level1.prototype={
    init:function(game)
	{
		_this = this;
       
//        window.languageSelected = "English";
		telInitializer.gameIdInit("SG7_2_2",gradeSelected);

	},

  preload:function(game){
        if(!window.grade2SG3){

            window.grade2SG3 = true;

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
    

            this.load.atlas('sg7_2_2_circle',window.baseUrl+'assets/gradeAssets/sg7.2.2/B/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/B/1.json');
            this.load.atlas('sg7_2_2_circle2',window.baseUrl+'assets/gradeAssets/sg7.2.2/B/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/B/2.json');
            this.load.atlas('sg7_2_2_circle3',window.baseUrl+'assets/gradeAssets/sg7.2.2/B/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/B/3.json');
            this.load.atlas('sg7_2_2_circle4',window.baseUrl+'assets/gradeAssets/sg7.2.2/B/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/B/4.json');
            this.load.atlas('sg7_2_2_circle5',window.baseUrl+'assets/gradeAssets/sg7.2.2/B/5.png',window.baseUrl+'json/gradeJson/sg7.2.2/B/5.json');
        
        
            this.load.atlas('sg7_2_2_circle1',window.baseUrl+'assets/gradeAssets/sg7.2.2/C/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/C/1.json');
            this.load.atlas('sg7_2_2_circle12',window.baseUrl+'assets/gradeAssets/sg7.2.2/C/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/C/2.json');
            this.load.atlas('sg7_2_2_circle13',window.baseUrl+'assets/gradeAssets/sg7.2.2/C/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/C/3.json');
            this.load.atlas('sg7_2_2_circle14',window.baseUrl+'assets/gradeAssets/sg7.2.2/C/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/C/4.json');
            this.load.atlas('sg7_2_2_circle15',window.baseUrl+'assets/gradeAssets/sg7.2.2/C/5.png',window.baseUrl+'json/gradeJson/sg7.2.2/C/5.json');
        
            this.load.atlas('sg7_2_2_cone',window.baseUrl+'assets/gradeAssets/sg7.2.2/D/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/D/1.json');
            this.load.atlas('sg7_2_2_cone2',window.baseUrl+'assets/gradeAssets/sg7.2.2/D/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/D/2.json');
            this.load.atlas('sg7_2_2_cone3',window.baseUrl+'assets/gradeAssets/sg7.2.2/D/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/D/3.json');
            this.load.atlas('sg7_2_2_cone4',window.baseUrl+'assets/gradeAssets/sg7.2.2/D/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/D/4.json');
        
            this.load.atlas('sg7_2_2_cone1',window.baseUrl+'assets/gradeAssets/sg7.2.2/E/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/E/1.json');
            this.load.atlas('sg7_2_2_cone12',window.baseUrl+'assets/gradeAssets/sg7.2.2/E/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/E/2.json');
            this.load.atlas('sg7_2_2_cone13',window.baseUrl+'assets/gradeAssets/sg7.2.2/E/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/E/3.json');
            this.load.atlas('sg7_2_2_cone14',window.baseUrl+'assets/gradeAssets/sg7.2.2/E/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/E/4.json');
        
            this.load.atlas('sg7_2_2_cube',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/1.json');
            this.load.atlas('sg7_2_2_cube2',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/2.json');
            this.load.atlas('sg7_2_2_cube3',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/3.json');
            this.load.atlas('sg7_2_2_cube4',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/4.json');
            this.load.atlas('sg7_2_2_cube5',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/5.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/5.json');
            this.load.atlas('sg7_2_2_cube6',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/6.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/6.json');
            this.load.atlas('sg7_2_2_cube7',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/7.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/7.json');
            this.load.atlas('sg7_2_2_cube8',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/8.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/8.json');
            this.load.atlas('sg7_2_2_cube9',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/9.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/9.json');
            this.load.atlas('sg7_2_2_cube10',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/10.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/10.json');
            this.load.atlas('sg7_2_2_cube11',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/11.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/11.json');
            this.load.atlas('sg7_2_2_cube12',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/12.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/12.json');
            this.load.atlas('sg7_2_2_cube13',window.baseUrl+'assets/gradeAssets/sg7.2.2/G/13.png',window.baseUrl+'json/gradeJson/sg7.2.2/G/13.json');
          
            this.load.atlas('sg7_2_2_cube1',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/1.json');
            this.load.atlas('sg7_2_2_cubes12',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/2.json');
            this.load.atlas('sg7_2_2_cubes13',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/3.json');
            this.load.atlas('sg7_2_2_cube14',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/4.json');
            this.load.atlas('sg7_2_2_cube15',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/5.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/5.json');
            this.load.atlas('sg7_2_2_cube16',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/6.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/6.json');
            this.load.atlas('sg7_2_2_cube17',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/7.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/7.json');
            this.load.atlas('sg7_2_2_cube18',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/8.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/8.json');
            this.load.atlas('sg7_2_2_cube19',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/9.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/9.json');
            this.load.atlas('sg7_2_2_cube110',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/10.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/10.json');
            this.load.atlas('sg7_2_2_cube111',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/11.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/11.json');
            this.load.atlas('sg7_2_2_cube112',window.baseUrl+'assets/gradeAssets/sg7.2.2/H/12.png',window.baseUrl+'json/gradeJson/sg7.2.2/H/12.json');
        
            this.load.atlas('sg7_2_2_cube210',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/10.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/10.json');
            this.load.atlas('sg7_2_2_cube211',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/11.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/11.json');
            this.load.atlas('sg7_2_2_cube212',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/12.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/12.json');    
            this.load.atlas('sg7_2_2_cubes2',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/1.json');
            this.load.atlas('sg7_2_2_cube22',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/2.json');
            this.load.atlas('sg7_2_2_cube23',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/3.json');
            this.load.atlas('sg7_2_2_cube24',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/4.json');
            this.load.atlas('sg7_2_2_cube25',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/5.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/5.json');
            this.load.atlas('sg7_2_2_cube26',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/6.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/6.json');
            this.load.atlas('sg7_2_2_cube27',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/7.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/7.json');
            this.load.atlas('sg7_2_2_cube28',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/8.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/8.json');
            this.load.atlas('sg7_2_2_cube29',window.baseUrl+'assets/gradeAssets/sg7.2.2/I/9.png',window.baseUrl+'json/gradeJson/sg7.2.2/I/9.json');

            
            this.load.atlas('sg7_2_2_cube310',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/10.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/10.json');
            this.load.atlas('sg7_2_2_cube311',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/11.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/11.json');
            this.load.atlas('sg7_2_2_cube312',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/12.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/12.json');    
            this.load.atlas('sg7_2_2_cubes3',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/1.json');
            this.load.atlas('sg7_2_2_cube32',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/2.json');
            this.load.atlas('sg7_2_2_cube33',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/3.json');
            this.load.atlas('sg7_2_2_cube34',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/4.json');
            this.load.atlas('sg7_2_2_cube35',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/5.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/5.json');
            this.load.atlas('sg7_2_2_cube36',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/6.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/6.json');
            this.load.atlas('sg7_2_2_cube37',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/7.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/7.json');
            this.load.atlas('sg7_2_2_cube38',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/8.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/8.json');
            this.load.atlas('sg7_2_2_cube39',window.baseUrl+'assets/gradeAssets/sg7.2.2/J/9.png',window.baseUrl+'json/gradeJson/sg7.2.2/J/9.json');
            
            this.load.atlas('sg7_2_2_cube410',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/10.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/10.json');
            this.load.atlas('sg7_2_2_cube411',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/11.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/11.json');
            this.load.atlas('sg7_2_2_cube412',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/12.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/12.json');    
            this.load.atlas('sg7_2_2_cubes4',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/1.json');
            this.load.atlas('sg7_2_2_cube42',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/2.json');
            this.load.atlas('sg7_2_2_cube43',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/3.json');
            this.load.atlas('sg7_2_2_cube44',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/4.json');
            this.load.atlas('sg7_2_2_cube45',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/5.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/5.json');
            this.load.atlas('sg7_2_2_cube46',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/6.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/6.json');
            this.load.atlas('sg7_2_2_cube47',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/7.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/7.json');
            this.load.atlas('sg7_2_2_cube48',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/8.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/8.json');
            this.load.atlas('sg7_2_2_cube49',window.baseUrl+'assets/gradeAssets/sg7.2.2/A/9.png',window.baseUrl+'json/gradeJson/sg7.2.2/A/9.json');
        
        
            this.load.image('sg7_2_2_cubelight',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 7.png');
            this.load.image('sg7_2_2_cubelight2',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 12.png');
            this.load.image('sg7_2_2_conelight',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 14.png');
            this.load.image('sg7_2_2_conelight2',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 15.png');
            this.load.image('sg7_2_2_rectlight',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 17.png');
            this.load.image('sg7_2_2_rectlight2',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 18.png');
            this.load.image('sg7_2_2_rectlight3',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 19.png');
            this.load.image('sg7_2_2_rectlight4',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 20.png');
            this.load.image('sg7_2_2_rectlight5',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 21.png');
            this.load.image('sg7_2_2_conelight3',window.baseUrl+'assets/gradeAssets/sg7.2.2/Symbol 16.png');
           
           
        
            this.load.atlas('sg7_2_2_c2',window.baseUrl+'assets/gradeAssets/sg7.2.2/F/1.png',window.baseUrl+'json/gradeJson/sg7.2.2/F/1.json');
            this.load.atlas('sg7_2_2_c3',window.baseUrl+'assets/gradeAssets/sg7.2.2/F/2.png',window.baseUrl+'json/gradeJson/sg7.2.2/F/2.json');
            this.load.atlas('sg7_2_2_c4',window.baseUrl+'assets/gradeAssets/sg7.2.2/F/3.png',window.baseUrl+'json/gradeJson/sg7.2.2/F/3.json');
            this.load.atlas('sg7_2_2_c5',window.baseUrl+'assets/gradeAssets/sg7.2.2/F/4.png',window.baseUrl+'json/gradeJson/sg7.2.2/F/4.json');


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
_this.qArrays1=null;
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
       _this.sceneCount=0;
   _this.AnsTimerCount = 0;

_this.box=0;
        _this.count3=0;
        _this.count4=0;

        //baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
//        _this.qArrays1 = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
//       _this.qArrays1 = [,11,12,13,14,15,16];
        //_this.qArrays = this.shuffle(_this.qArrays);
//        _this.qArrays1 = this.shuffle(_this.qArrays1);
       
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

       if(grade2Selected == false)
                _this.state.start('grade1levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false); 
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
        
         _this.generateStarsForTheScene(6)
       
               //_this.no1++;
       
             this.getQuestion();
    
    },
    /***********************************getquestion************************/
    getQuestion:function(target)
    {
        _this.noofAttempts=0;
       _this.sceneCount++;
      _this.AnsTimerCount = 0;

      _this.timer = this.time.create(false);
        _this.timer.loop(1000, function(){
                  _this.AnsTimerCount++;
        }, this);
        _this.timer.start();

        _this.timer1 = this.time.create(false);
        _this.timer1.loop(1000, function(){
                  this.updateTimer();
        }, this);
        _this.timer1.start();
        _this.grpnum=new Array();
       // _this.speaker.inputEnabled=false;
       // _this.speaker.input.useHandCursor = true;
        this.stopVoice();
    	console.log("get"+_this.no1);
    	console.log("getq"+_this.qArrays[_this.no1]);
        _this.getVoice();
            switch(_this.qArrays[_this.no1])//qArrays[no1])
            {
            case 1: 
                console.log("case1");
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
            case 7: console.log("case5");
                this.gotoseventhQuestion();
    				break;
            case 8: console.log("case5");
                this.gotoeightQuestion();
    				break;
            case 9: console.log("case5");
                    this.gotonineQuestion();
    				break;
            case 10: console.log("case5");
                    this.gototenQuestion();
    				break;
                }
    },
     addQuestion:function(no2)
    {

           console.log("here");
           this.time.events.add(2000, function(){ 
                      _this.count3=0;
                      _this.count4=0; 
                       _this.group1.destroy();  
                 
		if(_this.no1<6)
		{
            _this.count++;
           // _this.game.input.enabled = true;
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
            case 6: 
            case 7:
            case 8:
            case 9:
            case 10:if(window.languageSelected=="English")
                        Eng_42B1.play();
                    else if(window.languageSelected=="Hindi")
                        Hin_42B1.play();
                    else
                        if(window.languageSelected=="")
                        Kan_42B1.play();
                    break;
            
        }
    },
    
    stopAllVoice:function(){
        Eng_42B1.stop();
        Hin_42B1.stop();
        Kan_42B1.stop();
        
    },
    /****************************firstquestionwheel************************/
     gotoFirstQuestion:function(){
         _this.count3=0;
                      _this.count4=0;
         _this.Question = 1;
//          _this.no1++;
         console.log("first");
          
         _this.group1=this.add.group();
        _this.cubelight=this.add.sprite(this.world.centerX+3, this.world.centerY+2,'sg7_2_2_cubelight');
         _this.cubelight.anchor.set(0.5);
         _this.cubelight.visible=false;
          _this.graphics1 = this.add.graphics(85,68);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawRect(340, 47, 110, 40);
        _this.graphics1.endFill();
       _this.graphics1.alpha=0;
         _this.graphics2 = this.add.graphics(83,100);
        _this.graphics2.beginFill(0xFFFF0B, 1);
         _this.graphics2.drawRect(320, 80, 155, 220);
        _this.graphics2.endFill();
       _this.graphics2.alpha=0;
         _this.circle=this.add.sprite(this.world.centerX, this.world.centerY,'sg7_2_2_circle');
         _this.circle.anchor.set(0.5);
          _this.graphics1.inputEnabled=true;
          _this.graphics1.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=2;  
                      _this.count4+=1;
                  } 
              else if(_this.circle.frame==2)
                  {
                     _this.circle.frame=0;  
                      _this.count4-=1;  
                  }
              if(_this.circle.frame==1)
                  {
                      _this.circle.frame=3; 
                      _this.count4+=1;
                  }
              else if(_this.circle.frame==3)
                  {
                     _this.circle.frame=1;  
                      _this.count4-=1;  
                  }
         },this);
         _this.graphics2.inputEnabled=true;
          _this.graphics2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1; 
                      _this.count4+=1;
                  }  
              else if(_this.circle.frame==1)
                  {
                     _this.circle.frame=0;  
                      _this.count4-=1;  
                  }
              if(_this.circle.frame==2)
                  {
                      _this.circle.frame=3;
                      _this.count4+=1;
                  }
              else if(_this.circle.frame==3)
                  {
                     _this.circle.frame=2;  
                      _this.count4-=1;  
                  }
         },this);
         _this.circle2=this.add.sprite(this.world.centerX, this.world.centerY-135,'sg7_2_2_circle2');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
        _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
               else if(target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
               
         },this);
          _this.circle3=this.add.sprite(this.world.centerX+92, this.world.centerY-5,'sg7_2_2_circle3');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
        _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }  
               else if(target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
         _this.circle4=this.add.sprite(this.world.centerX-88, this.world.centerY-5,'sg7_2_2_circle4');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
               else if(target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
         _this.circle5=this.add.sprite(this.world.centerX+2, this.world.centerY+139,'sg7_2_2_circle5');
         _this.circle5.anchor.set(0.5);
         _this.circle5.inputEnabled=true;
           _this.circle5.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  } 
               else if(target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
         _this.group1.add(_this.cubelight);
         _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
          _this.group1.add(_this.circle5);
          _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics1);
         _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
         this.enablebuttons();
    },
   /*******************************secondquestionwheel*******************/
   gotoSecondQuestion:function(){
       _this.count3=0;
                      _this.count4=0;
       _this.Question = 2;
//   _this.no1++;
         console.log("second");
        _this.group1=this.add.group();
        _this.cubelight=this.add.sprite(this.world.centerX+2, this.world.centerY+1,'sg7_2_2_cubelight2');
         _this.cubelight.anchor.set(0.5);
         _this.cubelight.visible=false;
          _this.graphics1 = this.add.graphics(85,68);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawRect(395, 80,  100, 100);
        _this.graphics1.endFill();
       _this.graphics1.alpha=0;
         _this.graphics2 = this.add.graphics(83,100);
        _this.graphics2.beginFill(0xFFFF0B, 1);
         _this.graphics2.drawRect(285, 155, 100, 125);
        _this.graphics2.endFill();
       _this.graphics2.alpha=0;
         _this.circle=this.add.sprite(this.world.centerX, this.world.centerY,'sg7_2_2_circle1');
         _this.circle.anchor.set(0.5);
          _this.graphics1.inputEnabled=true;
          _this.graphics1.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=2;
                      _this.count4+=1
                  } 
             else if( _this.circle.frame==2)
                  {
                    _this.circle.frame=0;
                      _this.count4-=1
                  }  
              if(_this.circle.frame==1)
                  {
                      _this.circle.frame=3;
                      _this.count4+=1;
                  }
               else if( _this.circle.frame==3)
                  {
                    _this.circle.frame=1;
                      _this.count4-=1
                  }  
         },this);
         _this.graphics2.inputEnabled=true;
          _this.graphics2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1;
                      _this.count4+=1;
                  } 
               else if( _this.circle.frame==1)
                  {
                    _this.circle.frame=0;
                      _this.count4-=1
                  }  
              if(_this.circle.frame==2)
                  {
                      _this.circle.frame=3; 
                      _this.count4+=1;
                  }
               else if( _this.circle.frame==3)
                  {
                    _this.circle.frame=2;
                      _this.count4-=1
                  }  
         },this);
         _this.circle2=this.add.sprite(410, 208,'sg7_2_2_circle12');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;
                      _this.count3-=1;
                  }  
         },this);
          _this.circle3=this.add.sprite(535,343,'sg7_2_2_circle13');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  }  
               else if(target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
         _this.circle4=this.add.sprite(405,340,'sg7_2_2_circle14');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  }
               else if(target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
         _this.circle5=this.add.sprite(538,208,'sg7_2_2_circle15');
         _this.circle5.anchor.set(0.5);
         _this.circle5.inputEnabled=true;
           _this.circle5.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  } 
               else if(target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
       _this.group1.add(_this.cubelight);
         _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
          _this.group1.add(_this.circle5);
          _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics1);
         _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0); 
        
         this.enablebuttons();
    	
    },
    /*****************************thirdquestioncircle**********************/
      gotoThirdQuestion:function(){
          _this.count3=0;
                      _this.count4=0;
      _this.Question = 3;
//          _this.no1++;
         console.log("third");
        
         _this.group1=this.add.group();
           _this.conelight=this.add.sprite(this.world.centerX, this.world.centerY+3,'sg7_2_2_conelight');
         _this.conelight.anchor.set(0.5);
         _this.conelight.visible=false;
          _this.graphics1 = this.add.graphics(85,68);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawRect(345, 155,  80, 100);
        _this.graphics1.endFill();
       _this.graphics1.alpha=0;
         _this.graphics2 = this.add.graphics(83,100);
        _this.graphics2.beginFill(0xFFFF0B, 1);
         _this.graphics2.drawRect(320, 260, 150, 35);
        _this.graphics2.endFill();
       _this.graphics2.alpha=0;
         _this.circle=this.add.sprite(this.world.centerX, this.world.centerY,'sg7_2_2_cone');
         _this.circle.anchor.set(0.5);
          _this.graphics1.inputEnabled=true;
          _this.graphics1.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=2;
                      _this.count4+=1;
                  }  
               else if( _this.circle.frame==2)
                  {
                    _this.circle.frame=0;
                      _this.count4-=1;
                  }  
              if(_this.circle.frame==1)
                  {
                      _this.circle.frame=3;
                      _this.count4+=1;
                  }
               else if( _this.circle.frame==3)
                  {
                    _this.circle.frame=1;
                      _this.count4-=1;
                  }  
         },this);
         _this.graphics2.inputEnabled=true;
          _this.graphics2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1; 
                      _this.count4+=1;
                  }  
               else if( _this.circle.frame==1)
                  {
                    _this.circle.frame=0;
                      _this.count4-=1;
                  }  
              if(_this.circle.frame==2)
                  {
                      _this.circle.frame=3; 
                      _this.count4+=1;
                  }
               else if( _this.circle.frame==3)
                  {
                    _this.circle.frame=2;
                      _this.count4-=1;
                  }  
         },this);
         _this.circle2=this.add.sprite(524, 240,'sg7_2_2_cone2');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
          _this.circle3=this.add.sprite(415,250,'sg7_2_2_cone3');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
         _this.circle4=this.add.sprite(477,378,'sg7_2_2_cone4');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  }  
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
          _this.group1.add(_this.conelight);
         _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
          _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics1);
          _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
         
        
         this.enablebuttons();
    },
    /*********************************fourthquestioncircle***********************/
       gotoFourthQuestion:function(){
         _this.count3=0;
                      _this.count4=0;
    	 _this.Question = 4;
//         _this.no1++;
         console.log("four");
           
          _this.group1=this.add.group();
            _this.conelight=this.add.sprite(this.world.centerX, this.world.centerY+3,'sg7_2_2_conelight2');
         _this.conelight.anchor.set(0.5);
         _this.conelight.visible=false;
          _this.graphics1 = this.add.graphics(85,68);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawRect(325, 150,  120, 60);
        _this.graphics1.endFill();
       _this.graphics1.alpha=0;
         _this.graphics2 = this.add.graphics(83,100);
        _this.graphics2.beginFill(0xFFFF0B, 1);
         _this.graphics2.drawRect(480, 100, 35, 150);
        _this.graphics2.endFill();
       _this.graphics2.alpha=0;
         _this.circle=this.add.sprite(this.world.centerX, this.world.centerY,'sg7_2_2_cone1');
         _this.circle.anchor.set(0.5);
          _this.graphics1.inputEnabled=true;
          _this.graphics1.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=2;
                      _this.count4+=1;
                  }  
              else if(_this.circle.frame==2)
                  {
                      _this.circle.frame=0; 
                      _this.count4-=1;
                  }
              if(_this.circle.frame==1)
                  {
                      _this.circle.frame=3;
                      _this.count4+=1;
                  }
              else if(_this.circle.frame==3)
                  {
                      _this.circle.frame=1; 
                      _this.count4-=1;
                  }
         },this);
         _this.graphics2.inputEnabled=true;
          _this.graphics2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1;
                      _this.count4+=1;
                  }  
              else if(_this.circle.frame==1)
                  {
                      _this.circle.frame=0; 
                      _this.count4-=1;
                  }
              if(_this.circle.frame==2)
                  {
                      _this.circle.frame=3; 
                      _this.count4+=1;
                  }
              else if(_this.circle.frame==3)
                  {
                      _this.circle.frame=2; 
                      _this.count4-=1;
                  }
         },this);
         _this.circle2=this.add.sprite(582, 272,'sg7_2_2_cone12');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                  _this.count3+=1;
                  }  
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
          _this.circle3=this.add.sprite(460,198,'sg7_2_2_cone13');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
           _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
         _this.circle4=this.add.sprite(446,307,'sg7_2_2_cone14');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
           _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  } 
         },this);
           _this.group1.add(_this.conelight);
        _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
          _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics1);
          _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
         
        
         this.enablebuttons();
    },
    /******************fifthquestionwheel***************************************/
     gotoFifthQuestion:function(){
         _this.count3=0;
        _this.count4=0;
        _this.Question = 5;
//         _this.no1++;
         console.log("five");
         _this.group1=this.add.group();
          _this.cubelight=this.add.sprite(this.world.centerX+14, this.world.centerY+6,'sg7_2_2_rectlight');
         _this.cubelight.anchor.set(0.5);
         _this.cubelight.visible=false;
         _this.circle=this.add.sprite(this.world.centerX-30, this.world.centerY+20,'sg7_2_2_cube');
         _this.circle.anchor.set(0.5);
         _this.circle.inputEnabled=true;
          _this.circle.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1;  
                      _this.count4+=1;
                  }  
             else if( _this.circle.frame==1)
                  {
                    _this.circle.frame=0;  
                      _this.count4-=1;
                  }  
         },this);
        
         _this.circle2=this.add.sprite(642, 279,'sg7_2_2_cube2');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count4+=1;
                  } 
               else if(target.frame==1)
                  {
                    target.frame=0;  
                      _this.count4-=1;
                  }  
         },this);
          _this.circle3=this.add.sprite(490,195,'sg7_2_2_cube3');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count4+=1;
                  }
               else if(target.frame==1)
                  {
                    target.frame=0;  
                      _this.count4-=1;
                  }  
         },this);
         _this.circle4=this.add.sprite(546,178,'sg7_2_2_cube4');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
              else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
          _this.circle5=this.add.sprite(685,250,'sg7_2_2_cube5');
         _this.circle5.anchor.set(0.5);
         _this.circle5.inputEnabled=true;
           _this.circle5.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
          _this.circle6=this.add.sprite(643,345,'sg7_2_2_cube6');
         _this.circle6.anchor.set(0.5);
         _this.circle6.inputEnabled=true;
           _this.circle6.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  }  
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
          _this.circle7=this.add.sprite(600,294,'sg7_2_2_cube7');
         _this.circle7.anchor.set(0.5);
         _this.circle7.inputEnabled=true;
           _this.circle7.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
          _this.circle8=this.add.sprite(640,200,'sg7_2_2_cube8');
         _this.circle8.anchor.set(0.5);
         _this.circle8.inputEnabled=true;
           _this.circle8.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
         
         _this.circle10=this.add.sprite(448,210,'sg7_2_2_cube10');
         _this.circle10.anchor.set(0.5);
         _this.circle10.inputEnabled=true;
           _this.circle10.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
         _this.circle11=this.add.sprite(452,367,'sg7_2_2_cube11');
         _this.circle11.anchor.set(0.5);
         _this.circle11.inputEnabled=true;
           _this.circle11.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }  
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
         _this.circle12=this.add.sprite(300,282,'sg7_2_2_cube12');
         _this.circle12.anchor.set(0.5);
         _this.circle12.inputEnabled=true;
           _this.circle12.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
         _this.circle13=this.add.sprite(350,190,'sg7_2_2_cube13');
         _this.circle13.anchor.set(0.5);
         _this.circle13.inputEnabled=true;
           _this.circle13.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }
         },this);
      _this.group1.add(_this.cubelight);
         _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
         _this.group1.add(_this.circle5);
         _this.group1.add(_this.circle6);
         _this.group1.add(_this.circle7);
         _this.group1.add(_this.circle8);
         _this.group1.add(_this.circle10);
         _this.group1.add(_this.circle11);
         _this.group1.add(_this.circle12);
         _this.group1.add(_this.circle13);
         _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
         this.enablebuttons();
    },
 /******************sixthquestionwheel***************************************/
     gotosixthQuestion:function(){
         _this.count3=0;
                      _this.count4=0;
        _this.Question = 6;
//         _this.no1++;
         console.log("five");
         _this.group1=this.add.group();
         _this.cubelight=this.add.sprite(this.world.centerX-13, this.world.centerY-3,'sg7_2_2_rectlight2');
         _this.cubelight.anchor.set(0.5);
         _this.cubelight.visible=false;
         _this.graphics1 = this.add.graphics(85,68);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawRect(275, 155, 20, 110);
        _this.graphics1.endFill();
        _this.graphics1.inputEnabled=true;
       _this.graphics1.alpha=0;
         _this.graphics1.input.priorityID = 1;
         _this.circle=this.add.sprite(this.world.centerX, this.world.centerY-70,'sg7_2_2_cube1');
         _this.circle.anchor.set(0.5);
         _this.circle.inputEnabled=true;
          _this.circle.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1;
                      _this.count4+=1;
                  }
              else if( _this.circle.frame==1)
                  {
                    _this.circle.frame=0;
                      _this.count4-=1;
                  } 
             
         },this);
        
         _this.circle2=this.add.sprite(481, 332,'sg7_2_2_cubes12');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count4+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count4-=1;
                  }  
         },this);
          _this.circle3=this.add.sprite(371,264,'sg7_2_2_cubes13');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.graphics1.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(_this.circle3.frame==0)
                  {
                    _this.circle3.frame=1; 
                      _this.count4+=1;
                  }
               else if(_this.circle3.frame==1)
                  {
                    _this.circle3.frame=0; 
                      _this.count4-=1;
                  }
         },this);
         _this.circle4=this.add.sprite(460,130,'sg7_2_2_cube14');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
          _this.circle5=this.add.sprite(570,200,'sg7_2_2_cube15');
         _this.circle5.anchor.set(0.5);
         _this.circle5.inputEnabled=true;
           _this.circle5.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  }  
                else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
          _this.circle6=this.add.sprite(495,271,'sg7_2_2_cube16');
         _this.circle6.anchor.set(0.5);
         _this.circle6.inputEnabled=true;
           _this.circle6.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;   
                      _this.count3+=1;
                  } 
                else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
          _this.circle7=this.add.sprite(356,329,'sg7_2_2_cube17');
         _this.circle7.anchor.set(0.5);
         _this.circle7.inputEnabled=true;
           _this.circle7.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
                else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
          _this.circle8=this.add.sprite(570,330,'sg7_2_2_cube18');
         _this.circle8.anchor.set(0.5);
         _this.circle8.inputEnabled=true;
           _this.circle8.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  }
                else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
         _this.circle9=this.add.sprite(356,195,'sg7_2_2_cube19');
         _this.circle9.anchor.set(0.5);
         _this.circle9.inputEnabled=true;
           _this.circle9.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;   
                      _this.count3+=1;
                  }
                else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
          
         _this.circle10=this.add.sprite(385,334,'sg7_2_2_cube110');
         _this.circle10.anchor.set(0.5);
         _this.circle10.inputEnabled=true;
     
           _this.circle10.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  }
                else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
         _this.circle11=this.add.sprite(385,205,'sg7_2_2_cube111');
         _this.circle11.anchor.set(0.5);
         _this.circle11.inputEnabled=true;
           _this.circle11.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  }
                else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
         _this.circle12=this.add.sprite(462,395,'sg7_2_2_cube112');
         _this.circle12.anchor.set(0.5);
         _this.circle12.inputEnabled=true;
           _this.circle12.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
                else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
         
         console.log(_this.circle3.x);
         _this.group1.add(_this.cubelight);
         _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
         _this.group1.add(_this.circle5);
         _this.group1.add(_this.circle6);
         _this.group1.add(_this.circle7);
         _this.group1.add(_this.circle8);
         _this.group1.add(_this.circle9);
         _this.group1.add(_this.circle10);
         _this.group1.add(_this.circle11);
         _this.group1.add(_this.circle12);
         _this.group1.add(_this.graphics1);
         _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
         this.enablebuttons();
    },
    /******************seventhquestionwheel***************************************/
    gotoseventhQuestion:function(){
       _this.count3=0;
                      _this.count4=0;
        _this.Question = 7;
//         _this.no1++;
         console.log("five");
         _this.group1=this.add.group();
         _this.cubelight=this.add.sprite(this.world.centerX-34, this.world.centerY+34,'sg7_2_2_rectlight3');
         _this.cubelight.anchor.set(0.5);
         _this.cubelight.visible=false;
         _this.graphics1 = this.add.graphics(85,68);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawRect(240, 190, 18, 100);
        _this.graphics1.endFill();
        _this.graphics1.inputEnabled=true;
       _this.graphics1.alpha=0;
         _this.graphics1.input.priorityID = 1;
         _this.circle10=this.add.sprite(460,226,'sg7_2_2_cube210');
         _this.circle10.anchor.set(0.5);
         _this.circle10.inputEnabled=true;
           _this.circle10.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
               _this.count4+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;  
               _this.count4-=1;
                  }  
         },this);
         _this.circle11=this.add.sprite(453,350,'sg7_2_2_cube211');
         _this.circle11.anchor.set(0.5);
         _this.circle11.inputEnabled=true;
           _this.circle11.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
               _this.count4+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;  
               _this.count4-=1;
                  }  
         },this);
         _this.circle12=this.add.sprite(334,306,'sg7_2_2_cube212');
         _this.circle12.anchor.set(0.5);
         _this.circle12.inputEnabled=true;
           _this.graphics1.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(_this.circle12.frame==0)
                  {
                    _this.circle12.frame=1;
               _this.count4+=1;
                  } 
               else if(_this.circle12.frame==1)
                  {
                    _this.circle12.frame=0;  
               _this.count4-=1;
                  }  
         },this);
         
         _this.circle=this.add.sprite(this.world.centerX-30, this.world.centerY-95,'sg7_2_2_cubes2');
         _this.circle.anchor.set(0.5);
         _this.circle.inputEnabled=true;
          _this.circle.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1;  
                      _this.count3+=1;
                  } 
              else if( _this.circle.frame==1)
                  {
                    _this.circle.frame=0;  
                      _this.count3-=1;
                  } 
             
         },this);
        
         _this.circle2=this.add.sprite(568, 218,'sg7_2_2_cube22');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }  
         },this);
          _this.circle3=this.add.sprite(472,275,'sg7_2_2_cube23');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }  
         },this);
         _this.circle4=this.add.sprite(353,230,'sg7_2_2_cube24');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }  
         },this);
          _this.circle5=this.add.sprite(325,261,'sg7_2_2_cube25');
         _this.circle5.anchor.set(0.5);
         _this.circle5.inputEnabled=true;
           _this.circle5.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }  
         },this);
          _this.circle6=this.add.sprite(346,356,'sg7_2_2_cube26');
         _this.circle6.anchor.set(0.5);
         _this.circle6.inputEnabled=true;
           _this.circle6.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }  
         },this);
          _this.circle7=this.add.sprite(555,342,'sg7_2_2_cube27');
         _this.circle7.anchor.set(0.5);
         _this.circle7.inputEnabled=true;
           _this.circle7.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;   
                _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }  
         },this);
          _this.circle8=this.add.sprite(428,426,'sg7_2_2_cube28');
         _this.circle8.anchor.set(0.5);
         _this.circle8.inputEnabled=true;
           _this.circle8.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }  
         },this);
         _this.circle9=this.add.sprite(317,386,'sg7_2_2_cube29');
         _this.circle9.anchor.set(0.5);
         _this.circle9.inputEnabled=true;
           _this.circle9.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count3-=1;
                  }  
         },this);
       
         console.log(_this.circle3.x);
        _this.group1.add(_this.cubelight);
         _this.group1.add(_this.circle10);
         _this.group1.add(_this.circle11);
         _this.group1.add(_this.circle12);
        
         _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
         _this.group1.add(_this.circle5);
         _this.group1.add(_this.circle6);
         _this.group1.add(_this.circle7);
         _this.group1.add(_this.circle8);
         _this.group1.add(_this.circle9);
        _this.group1.add(_this.graphics1);
         _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
         this.enablebuttons();
    },
     /******************eightthquestionwheel***************************************/
    gotoeightQuestion:function(){
       _this.count3=0;
                      _this.count4=0;
        _this.Question = 8;
//         _this.no1++;
         console.log("five");
         _this.group1=this.add.group();
        _this.cubelight=this.add.sprite(this.world.centerX-8, this.world.centerY+23,'sg7_2_2_rectlight4');
         _this.cubelight.anchor.set(0.5);
         _this.cubelight.visible=false;
         _this.circle10=this.add.sprite(470,200,'sg7_2_2_cube310');
         _this.circle10.anchor.set(0.5);
         _this.circle10.inputEnabled=true;
           _this.circle10.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count4+=1;
                  } 
               else  if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count4-=1;
                  } 
         },this);
         _this.circle11=this.add.sprite(508,308,'sg7_2_2_cube311');
         _this.circle11.anchor.set(0.5);
         _this.circle11.inputEnabled=true;
           _this.circle11.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count4+=1;
                  }  
               else  if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count4-=1;
                  } 
         },this);
         _this.circle12=this.add.sprite(386,300,'sg7_2_2_cube312');
         _this.circle12.anchor.set(0.5);
         _this.circle12.inputEnabled=true;
           _this.circle12.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count4+=1;
                  } 
               else  if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count4-=1;
                  } 
         },this);
         
         _this.circle=this.add.sprite(this.world.centerX-52, this.world.centerY-90,'sg7_2_2_cubes3');
         _this.circle.anchor.set(0.5);
         _this.circle.inputEnabled=true;
          _this.circle.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1; 
              _this.count3+=1;
                  }  
            else if( _this.circle.frame==1)
                  {
                    _this.circle.frame=0; 
              _this.count3-=1;
                  } 
         },this);
        
         _this.circle2=this.add.sprite(551, 188,'sg7_2_2_cube32');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
               _this.count3+=1;
                  } 
               else  if( target.frame==1)
                  {
                    target.frame=0; 
               _this.count3-=1;
                  } 
         },this);
          _this.circle3=this.add.sprite(511,216,'sg7_2_2_cube33');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
               _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
               _this.count3-=1;
                  } 
         },this);
         _this.circle4=this.add.sprite(388,207,'sg7_2_2_cube34');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
               _this.count3+=1;
                  } 
               else  if( target.frame==1)
                  {
                    target.frame=0; 
               _this.count3-=1;
                  } 
         },this);
          _this.circle5=this.add.sprite(592,292,'sg7_2_2_cube35');
         _this.circle5.anchor.set(0.5);
         _this.circle5.inputEnabled=true;
        
           _this.circle5.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
               _this.count3+=1;
                  }
               else  if( target.frame==1)
                  {
                    target.frame=0; 
               _this.count3-=1;
                  } 
         },this);
          _this.circle6=this.add.sprite(426,319,'sg7_2_2_cube36');
         _this.circle6.anchor.set(0.5);
         _this.circle6.inputEnabled=true;
           _this.circle6.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
               _this.count3+=1;
                  } 
               else  if( target.frame==1)
                  {
                    target.frame=0; 
               _this.count3-=1;
                  } 
         },this);
          _this.circle7=this.add.sprite(349,274,'sg7_2_2_cube37');
         _this.circle7.anchor.set(0.5);
         _this.circle7.inputEnabled=true;
           _this.circle7.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
               _this.count3+=1;
                  } 
               else  if( target.frame==1)
                  {
                    target.frame=0; 
               _this.count3-=1;
                  } 
         },this);
          _this.circle8=this.add.sprite(388,384,'sg7_2_2_cube38');
         _this.circle8.anchor.set(0.5);
         _this.circle8.inputEnabled=true;
           _this.circle8.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
               _this.count3+=1;
                  } 
               else  if( target.frame==1)
                  {
                    target.frame=0; 
               _this.count3-=1;
                  } 
         },this);
         _this.circle9=this.add.sprite(508,396,'sg7_2_2_cube39');
         _this.circle9.anchor.set(0.5);
         _this.circle9.inputEnabled=true;
        _this.circle9.input.enableDrag();
           _this.circle9.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
               _this.count3+=1;
                  }
               else  if( target.frame==1)
                  {
                    target.frame=0; 
               _this.count3-=1;
                  } 
         },this);
       
         console.log(_this.circle3.x);
        _this.group1.add(_this.cubelight);
         _this.group1.add(_this.circle10);
         _this.group1.add(_this.circle11);
         _this.group1.add(_this.circle12);
         _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
         _this.group1.add(_this.circle5);
         _this.group1.add(_this.circle6);
         _this.group1.add(_this.circle7);
         _this.group1.add(_this.circle8);
         _this.group1.add(_this.circle9);
         _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
         this.enablebuttons();
    },
    /******************ninequestionwheel***************************************/
     gotonineQuestion:function(){
       _this.count3=0;
                      _this.count4=0;
        _this.Question = 9;
//         _this.no1++;
         console.log("five");
          _this.group1=this.add.group();
         _this.cubelight=this.add.sprite(this.world.centerX-11, this.world.centerY+12,'sg7_2_2_rectlight5');
         _this.cubelight.anchor.set(0.5);
         _this.cubelight.visible=false;
         _this.circle=this.add.sprite(this.world.centerX, this.world.centerY+20,'sg7_2_2_cubes4');
         _this.circle.anchor.set(0.5);
         _this.circle.inputEnabled=true;
          _this.circle.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1;
                      _this.count4+=1;
                  } 
              else if( _this.circle.frame==1)
                  {
                    _this.circle.frame=0;
                      _this.count4-=1;
                  }
             
         },this);
         _this.circle2=this.add.sprite(373, 287,'sg7_2_2_cube42');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count4+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0; 
                      _this.count4-=1;
                  }  
         },this);
          _this.circle3=this.add.sprite(467,156,'sg7_2_2_cube43');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if(_this.circle3.frame==0)
                  {
                    _this.circle3.frame=1; 
                      _this.count4+=1;
                  }  
               else if(_this.circle3.frame==1)
                  {
                    _this.circle3.frame=0; 
                      _this.count4-=1;
                  }  
         },this);
         _this.circle4=this.add.sprite(452,145,'sg7_2_2_cube44');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }  
         },this);
          _this.circle5=this.add.sprite(560,150,'sg7_2_2_cube45');
         _this.circle5.anchor.set(0.5);
         _this.circle5.inputEnabled=true;
           _this.circle5.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }
         },this);
          _this.circle6=this.add.sprite(481,165,'sg7_2_2_cube46');
         _this.circle6.anchor.set(0.5);
         _this.circle6.inputEnabled=true;
           _this.circle6.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;   
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }
         },this);
          _this.circle7=this.add.sprite(370,160,'sg7_2_2_cube47');
         _this.circle7.anchor.set(0.5);
         _this.circle7.inputEnabled=true;
           _this.circle7.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }
         },this);
          _this.circle8=this.add.sprite(578,280,'sg7_2_2_cube48');
         _this.circle8.anchor.set(0.5);
         _this.circle8.inputEnabled=true;
           _this.circle8.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }
         },this);
         _this.circle9=this.add.sprite(358,275,'sg7_2_2_cube49');
         _this.circle9.anchor.set(0.5);
         _this.circle9.inputEnabled=true;
           _this.circle9.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;   
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }
         },this);
          
         _this.circle10=this.add.sprite(387,296,'sg7_2_2_cube410');
         _this.circle10.anchor.set(0.5);
         _this.circle10.inputEnabled=true;
           _this.circle10.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;  
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }
         },this);
         _this.circle11=this.add.sprite(375,410,'sg7_2_2_cube411');
         _this.circle11.anchor.set(0.5);
         _this.circle11.inputEnabled=true;
           _this.circle11.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                      _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }
         },this);
         _this.circle12=this.add.sprite(485,414,'sg7_2_2_cube412');
         _this.circle12.anchor.set(0.5);
         _this.circle12.inputEnabled=true;
           _this.circle12.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
                      _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0;  
                      _this.count3-=1;
                  }
         },this);
         
         console.log(_this.circle3.x);
         _this.group1.add(_this.cubelight);
         _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
         _this.group1.add(_this.circle5);
         _this.group1.add(_this.circle6);
         _this.group1.add(_this.circle7);
         _this.group1.add(_this.circle8);
         _this.group1.add(_this.circle9);
         _this.group1.add(_this.circle10);
         _this.group1.add(_this.circle11);
         _this.group1.add(_this.circle12);
         _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
         this.enablebuttons();
    },
    /******************tenquestionwheel***************************************/
    gototenQuestion:function(){
       _this.count3=0;
                      _this.count4=0;
        _this.Question =10;
//         _this.no1++;
         console.log("five");
     
          _this.group1=this.add.group();
        _this.conelight=this.add.sprite(this.world.centerX, this.world.centerY,'sg7_2_2_conelight3');
         _this.conelight.anchor.set(0.5);
         _this.conelight.visible=false;
          _this.graphics1 = this.add.graphics(85,68);
        _this.graphics1.beginFill(0xFFFF0B, 1);
        _this.graphics1.drawRect(310, 80,  170, 35);
        _this.graphics1.endFill();
       _this.graphics1.alpha=0;
         _this.graphics2 = this.add.graphics(100,100);
        _this.graphics2.beginFill(0xFFFF0B, 1);
         _this.graphics2.drawRect(370, 110, 40, 150);
        _this.graphics2.endFill();
       _this.graphics2.alpha=0;
         _this.circle=this.add.sprite(this.world.centerX, this.world.centerY,'sg7_2_2_c2');
         _this.circle.anchor.set(0.5);
          _this.graphics1.inputEnabled=true;
          _this.graphics2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=2;
                      _this.count4+=1;
                  } 
              else if( _this.circle.frame==2)
                  {
                    _this.circle.frame=0;
                      _this.count4-=1;
                  } 
              if(_this.circle.frame==1)
                  {
                      _this.circle.frame=3;
                      _this.count4+=1;
                  }
             else  if(_this.circle.frame==3)
                  {
                      _this.circle.frame=1;
                      _this.count4-=1;
                  }
         },this);
         _this.graphics2.inputEnabled=true;
          _this.graphics1.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( _this.circle.frame==0)
                  {
                    _this.circle.frame=1;
                      _this.count4+=1;
                  } 
              else if( _this.circle.frame==1)
                  {
                    _this.circle.frame=0;
                      _this.count4-=1;
                  } 
              if(_this.circle.frame==2)
                  {
                      _this.circle.frame=3; 
                      _this.count4+=1;
                  }
              else if( _this.circle.frame==3)
                  {
                    _this.circle.frame=2;
                      _this.count4-=1;
                  } 
         },this);
         _this.circle2=this.add.sprite(482, 162,'sg7_2_2_c3');
         _this.circle2.anchor.set(0.5);
          _this.circle2.inputEnabled=true;
           _this.circle2.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
                  _this.count3+=1;
                  } 
               else if( target.frame==1)
                  {
                    target.frame=0;
                  _this.count3-=1;
                  } 
         },this);
          _this.circle3=this.add.sprite(434,298,'sg7_2_2_c4');
         _this.circle3.anchor.set(0.5);
          _this.circle3.inputEnabled=true;
           _this.circle3.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1;
           _this.count3+=1;
                  }
               else if( target.frame==1)
                  {
                    target.frame=0;
                  _this.count3-=1;
                  } 
         },this);
         _this.circle4=this.add.sprite(542,288,'sg7_2_2_c5');
         _this.circle4.anchor.set(0.5);
         _this.circle4.inputEnabled=true;
           _this.circle4.events.onInputDown.add(function(target){
         _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
              if( target.frame==0)
                  {
                    target.frame=1; 
           _this.count3+=1;
                  }  
               else if( target.frame==1)
                  {
                    target.frame=0;
                  _this.count3-=1;
                  } 
         },this);
        _this.group1.add(_this.conelight);
        _this.group1.add(_this.circle);
          _this.group1.add(_this.circle2);
          _this.group1.add(_this.circle3);
          _this.group1.add(_this.circle4);
          _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics1);
          _this.group1.y=-1000;
         _this.tween=this.add.tween(_this.group1).to( { y: 0 }, 2000, 'Linear', true,0);
        
         this.enablebuttons();
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

    if(_this.group1)
    {
      _this.group1.setAll("inputEnabled",false);
    }
   // _this.game.input.enabled = false;
    console.log("correct");
        _this.no1++;
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
        _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);  
	},

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
        //_this.game.input.enabled = true;
                //this.stopAllVoice();
				this.state.start('sg7_2_2Score');
                 },this);
			}

      

	},
 
    update:function(){

    },

    
    getVoice:function(){
       
        _this.stopVoice();	
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
        console.log("voice "+_this.qArrays[_this.no1])
        switch(_this.qArrays[_this.no1])
        {
            case 1:
            case 3:
            case 5:
                   if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/English/sg7.2.2c.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Hindi/sg7.2.2c.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Kannada/sg7.2.2c.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Gujrati/sg7.2.2c.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Marathi/sg7.2.2c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Telugu/sg7.2.2c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Tamil/sg7.2.2c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Urdu/sg7.2.2c.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Odiya/sg7.2.2c.mp3");  
                    }
                break;
            case 2:
            case 6:
            case 7:
                 if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/English/sg7.2.2a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Hindi/sg7.2.2a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Kannada/sg7.2.2a.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Gujrati/sg7.2.2a.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Marathi/sg7.2.2a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Telugu/sg7.2.2a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Tamil/sg7.2.2a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Urdu/sg7.2.2a.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Odiya/sg7.2.2a.mp3");
                        
                    }
                break;
            case 4:
            case 8:
            case 9:
            case 10:
                if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/English/sg7.2.2b.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Hindi/sg7.2.2b.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Kannada/sg7.2.2b.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Gujrati/sg7.2.2b.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Marathi/sg7.2.2b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Telugu/sg7.2.2b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Tamil/sg7.2.2b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Urdu/sg7.2.2b.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg7.2.2/Odiya/sg7.2.2b.mp3");
                        
                    }
                break;
        }
        _this.playQuestionSound.appendChild(_this.src);
                    _this.playQuestionSound.play();
    },
  
   enablebuttons:function(){
         _this.numGroup = this.add.group();
       
        _this.rightbtn =_this.numGroup.create(860,270,'SG3_1_1rightmark');
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
          if( _this.Question==1)
          {
            if (_this.count3==4&&_this.count4==2)
            {
                _this.correctAns();
                _this.cubelight.visible=true;
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
               
            }
          }
            if( _this.Question==2)
                {
                   if (_this.count3==4&&_this.count4==0)
             {
                _this.correctAns(); 
                 _this.cubelight.visible=true;
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                  _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
               
            }
                }
            if( _this.Question==3)
                {
                   if (_this.count3==3&&_this.count4==2)
             {
                _this.correctAns(); 
                  _this.conelight.visible=true;
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
               
            }
                }
            if( _this.Question==4)
                {
                   if (_this.count4==2&&_this.count3==0)
             {
                _this.correctAns(); 
                 _this.conelight.visible=true;
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
            }
                }
            if( _this.Question==5)
                {
                   if (_this.count3==9&&_this.count4==3)
             {
                _this.correctAns(); 
                 _this.cubelight.visible=true;
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
            }
                }
            if( _this.Question==6)
                {
                   if (_this.count3==9&&_this.count4==0)
             {
                _this.correctAns(); 
                 _this.cubelight.visible=true;
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                  _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
            }
                }
            if( _this.Question==7)
                {
                   if (_this.count3==9&&_this.count4==0)
             {
                _this.correctAns(); 
                 _this.cubelight.visible=true;
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                  _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
            }
                }
            if( _this.Question==8)
                {
                   if (_this.count4==3&&_this.count3==0)
             {
                _this.correctAns(); 
                 _this.cubelight.visible=true;
            }
             else
            {   
                _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
            }
                }
            if( _this.Question==9)
                {
                  if (_this.count4==3&&_this.count3==0)
             {
                _this.correctAns(); 
                 _this.cubelight.visible=true;
            }
             else
            {   
               _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
            }
                }
            if( _this.Question==10)
                {
                   if (_this.count4==2&&_this.count3==0)
             {
                _this.correctAns();
                 _this.conelight.visible=true;
            }
             else
            {   
                 _this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
                _this.flag;
                console.log("wrongbutton"); 
                 _this.shake.shake(10,_this.group1);
                _this.group1.setAll("frame",0);
                _this.count3=0;
                _this.count4=0;
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
      //_this.game.input.enabled = true;
    }
    
};