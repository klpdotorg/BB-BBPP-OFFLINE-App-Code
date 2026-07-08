Game.nsf1_4level1=function(){};
	
	
	

Game.nsf1_4level1.prototype={
    init:function(game)
	{
		_this = this;
       telInitializer.gameIdInit("NSF1_4",gradeSelected);
	},

    preload:function(game){
        if(!window.grade4NSF1_4){

            window.grade4NSF1_4 = true;

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
     
        this.load.image('nsf1_4_plate',window.baseUrl+'assets/gradeAssets/nsf1.4/A/1.png');
        this.load.image('nsf1_4_plate2',window.baseUrl+'assets/gradeAssets/nsf1.4/A/2.png');
         this.load.image('nsf1_4_girl',window.baseUrl+'assets/gradeAssets/nsf1.4/A/4.png');
        this.load.image('nsf1_4_cloud',window.baseUrl+'assets/gradeAssets/nsf1.4/A/n3.png');
     /*****************8 piece cake***********************************************/   
       this.load.image('nsf1_4_largecake',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A1.png');
        this.load.image('nsf1_4_largecake2',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A2.png');
        this.load.atlas('nsf1_4_largecake3',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A3.png',window.baseUrl+'json/gradeJson/nsf1.4/8/A3.json');
        this.load.atlas('nsf1_4_largecake4',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A4.png',window.baseUrl+'json/gradeJson/nsf1.4/8/A4.json');
        this.load.atlas('nsf1_4_largecake5',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A5.png',window.baseUrl+'json/gradeJson/nsf1.4/8/A5.json');
        this.load.atlas('nsf1_4_largecake6',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A6.png',window.baseUrl+'json/gradeJson/nsf1.4/8/A6.json');
        this.load.atlas('nsf1_4_largecake7',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A7.png',window.baseUrl+'json/gradeJson/nsf1.4/8/A7.json');
        this.load.atlas('nsf1_4_largecake8',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A8.png',window.baseUrl+'json/gradeJson/nsf1.4/8/A8.json');
        this.load.atlas('nsf1_4_largecake9',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A9.png',window.baseUrl+'json/gradeJson/nsf1.4/8/A9.json');
        this.load.atlas('nsf1_4_largecake10',window.baseUrl+'assets/gradeAssets/nsf1.4/A/A10.png',window.baseUrl+'json/gradeJson/nsf1.4/8/A10.json');
        
        this.load.atlas('nsf1_4_minicake3',window.baseUrl+'assets/gradeAssets/nsf1.4/A/8/1.png',window.baseUrl+'json/gradeJson/nsf1.4/8/8/1.json');
        this.load.atlas('nsf1_4_minicake4',window.baseUrl+'assets/gradeAssets/nsf1.4/A/8/2.png',window.baseUrl+'json/gradeJson/nsf1.4/8/8/2.json');
        this.load.atlas('nsf1_4_minicake5',window.baseUrl+'assets/gradeAssets/nsf1.4/A/8/3.png',window.baseUrl+'json/gradeJson/nsf1.4/8/8/3.json');
        this.load.atlas('nsf1_4_minicake6',window.baseUrl+'assets/gradeAssets/nsf1.4/A/8/4.png',window.baseUrl+'json/gradeJson/nsf1.4/8/8/4.json');
        this.load.atlas('nsf1_4_minicake7',window.baseUrl+'assets/gradeAssets/nsf1.4/A/8/5.png',window.baseUrl+'json/gradeJson/nsf1.4/8/8/5.json');
        this.load.atlas('nsf1_4_minicake8',window.baseUrl+'assets/gradeAssets/nsf1.4/A/8/6.png',window.baseUrl+'json/gradeJson/nsf1.4/8/8/6.json');
        this.load.atlas('nsf1_4_minicake9',window.baseUrl+'assets/gradeAssets/nsf1.4/A/8/7.png',window.baseUrl+'json/gradeJson/nsf1.4/8/8/7.json');
        this.load.atlas('nsf1_4_minicake10',window.baseUrl+'assets/gradeAssets/nsf1.4/A/8/8.png',window.baseUrl+'json/gradeJson/nsf1.4/8/8/8.json');
        /*****************16 piece cake***********************************************/
        this.load.atlas('nsf1_4_largecake1',window.baseUrl+'assets/gradeAssets/nsf1.4/2/1.png',window.baseUrl+'json/gradeJson/nsf1.4/16/1.json');
        this.load.atlas('nsf1_4_largecake12',window.baseUrl+'assets/gradeAssets/nsf1.4/2/2.png',window.baseUrl+'json/gradeJson/nsf1.4/16/2.json');
        this.load.atlas('nsf1_4_largecake13',window.baseUrl+'assets/gradeAssets/nsf1.4/2/3.png',window.baseUrl+'json/gradeJson/nsf1.4/16/3.json');
        this.load.atlas('nsf1_4_largecake14',window.baseUrl+'assets/gradeAssets/nsf1.4/2/4.png',window.baseUrl+'json/gradeJson/nsf1.4/16/4.json');
        this.load.atlas('nsf1_4_largecake15',window.baseUrl+'assets/gradeAssets/nsf1.4/2/5.png',window.baseUrl+'json/gradeJson/nsf1.4/16/5.json');
        this.load.atlas('nsf1_4_largecake16',window.baseUrl+'assets/gradeAssets/nsf1.4/2/6.png',window.baseUrl+'json/gradeJson/nsf1.4/16/6.json');
        this.load.atlas('nsf1_4_largecake17',window.baseUrl+'assets/gradeAssets/nsf1.4/2/7.png',window.baseUrl+'json/gradeJson/nsf1.4/16/7.json');
        this.load.atlas('nsf1_4_largecake18',window.baseUrl+'assets/gradeAssets/nsf1.4/2/8.png',window.baseUrl+'json/gradeJson/nsf1.4/16/8.json');
        this.load.atlas('nsf1_4_largecake19',window.baseUrl+'assets/gradeAssets/nsf1.4/2/9.png',window.baseUrl+'json/gradeJson/nsf1.4/16/9.json');
        this.load.atlas('nsf1_4_largecake110',window.baseUrl+'assets/gradeAssets/nsf1.4/2/10.png',window.baseUrl+'json/gradeJson/nsf1.4/16/10.json');
        this.load.atlas('nsf1_4_largecake111',window.baseUrl+'assets/gradeAssets/nsf1.4/2/11.png',window.baseUrl+'json/gradeJson/nsf1.4/16/11.json');
        this.load.atlas('nsf1_4_largecake112',window.baseUrl+'assets/gradeAssets/nsf1.4/2/12.png',window.baseUrl+'json/gradeJson/nsf1.4/16/12.json');
        this.load.atlas('nsf1_4_largecake113',window.baseUrl+'assets/gradeAssets/nsf1.4/2/13.png',window.baseUrl+'json/gradeJson/nsf1.4/16/13.json');
        this.load.atlas('nsf1_4_largecake114',window.baseUrl+'assets/gradeAssets/nsf1.4/2/14.png',window.baseUrl+'json/gradeJson/nsf1.4/16/14.json');
        this.load.atlas('nsf1_4_largecake115',window.baseUrl+'assets/gradeAssets/nsf1.4/2/15.png',window.baseUrl+'json/gradeJson/nsf1.4/16/15.json');
        this.load.atlas('nsf1_4_largecake116',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16.json');
        
        this.load.atlas('nsf1_4_minicake1',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/1.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/1.json');
        this.load.atlas('nsf1_4_minicake12',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/2.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/2.json');
        this.load.atlas('nsf1_4_minicake13',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/3.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/3.json');
        this.load.atlas('nsf1_4_minicake14',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/4.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/4.json');
        this.load.atlas('nsf1_4_minicake15',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/5.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/5.json');
        this.load.atlas('nsf1_4_minicake16',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/6.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/6.json');
        this.load.atlas('nsf1_4_minicake17',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/7.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/7.json');
        this.load.atlas('nsf1_4_minicake18',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/8.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/8.json');
        this.load.atlas('nsf1_4_minicake19',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/9.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/9.json');
        this.load.atlas('nsf1_4_minicake110',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/10.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/10.json');
        this.load.atlas('nsf1_4_minicake111',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/11.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/11.json');
        this.load.atlas('nsf1_4_minicake112',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/12.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/12.json');
        this.load.atlas('nsf1_4_minicake113',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/13.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/13.json');
        this.load.atlas('nsf1_4_minicake114',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/14.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/14.json');
        this.load.atlas('nsf1_4_minicake115',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/15.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/15.json');
        this.load.atlas('nsf1_4_minicake116',window.baseUrl+'assets/gradeAssets/nsf1.4/2/16/16.png',window.baseUrl+'json/gradeJson/nsf1.4/16/16/16.json');
        /*****************5 piece cake***********************************************/
        this.load.atlas('nsf1_4_largecake21',window.baseUrl+'assets/gradeAssets/nsf1.4/4/1.png',window.baseUrl+'json/gradeJson/nsf1.4/5/1.json');
        this.load.atlas('nsf1_4_largecake22',window.baseUrl+'assets/gradeAssets/nsf1.4/4/2.png',window.baseUrl+'json/gradeJson/nsf1.4/5/2.json');
        this.load.atlas('nsf1_4_largecake23',window.baseUrl+'assets/gradeAssets/nsf1.4/4/3.png',window.baseUrl+'json/gradeJson/nsf1.4/5/3.json');
        this.load.atlas('nsf1_4_largecake24',window.baseUrl+'assets/gradeAssets/nsf1.4/4/4.png',window.baseUrl+'json/gradeJson/nsf1.4/5/4.json');
        this.load.atlas('nsf1_4_largecake25',window.baseUrl+'assets/gradeAssets/nsf1.4/4/5.png',window.baseUrl+'json/gradeJson/nsf1.4/5/5.json');
        
        this.load.atlas('nsf1_4_minicake21',window.baseUrl+'assets/gradeAssets/nsf1.4/4/5/1.png',window.baseUrl+'json/gradeJson/nsf1.4/5/5/1.json');
        this.load.atlas('nsf1_4_minicake22',window.baseUrl+'assets/gradeAssets/nsf1.4/4/5/2.png',window.baseUrl+'json/gradeJson/nsf1.4/5/5/2.json');
        this.load.atlas('nsf1_4_minicake23',window.baseUrl+'assets/gradeAssets/nsf1.4/4/5/3.png',window.baseUrl+'json/gradeJson/nsf1.4/5/5/3.json');
        this.load.atlas('nsf1_4_minicake24',window.baseUrl+'assets/gradeAssets/nsf1.4/4/5/4.png',window.baseUrl+'json/gradeJson/nsf1.4/5/5/4.json');
        this.load.atlas('nsf1_4_minicake25',window.baseUrl+'assets/gradeAssets/nsf1.4/4/5/5.png',window.baseUrl+'json/gradeJson/nsf1.4/5/5/5.json');
        /*****************4 piece cake************v***********************************/
         this.load.atlas('nsf1_4_largecake41',window.baseUrl+'assets/gradeAssets/nsf1.4/1/1.png',window.baseUrl+'json/gradeJson/nsf1.4/4/1.json');
         this.load.atlas('nsf1_4_largecake42',window.baseUrl+'assets/gradeAssets/nsf1.4/1/2.png',window.baseUrl+'json/gradeJson/nsf1.4/4/2.json');
         this.load.atlas('nsf1_4_largecake43',window.baseUrl+'assets/gradeAssets/nsf1.4/1/3.png',window.baseUrl+'json/gradeJson/nsf1.4/4/3.json');
         this.load.atlas('nsf1_4_largecake44',window.baseUrl+'assets/gradeAssets/nsf1.4/1/4.png',window.baseUrl+'json/gradeJson/nsf1.4/4/4.json');
        
        this.load.atlas('nsf1_4_minicake41',window.baseUrl+'assets/gradeAssets/nsf1.4/1/4/1.png',window.baseUrl+'json/gradeJson/nsf1.4/4/4/1.json');
        this.load.atlas('nsf1_4_minicake42',window.baseUrl+'assets/gradeAssets/nsf1.4/1/4/2.png',window.baseUrl+'json/gradeJson/nsf1.4/4/4/2.json');
        this.load.atlas('nsf1_4_minicake43',window.baseUrl+'assets/gradeAssets/nsf1.4/1/4/3.png',window.baseUrl+'json/gradeJson/nsf1.4/4/4/3.json');
        this.load.atlas('nsf1_4_minicake44',window.baseUrl+'assets/gradeAssets/nsf1.4/1/4/4.png',window.baseUrl+'json/gradeJson/nsf1.4/4/4/4.json');
        /*****************7 piece cake***********************************************/
        this.load.atlas('nsf1_4_largecake31',window.baseUrl+'assets/gradeAssets/nsf1.4/3/1.png',window.baseUrl+'json/gradeJson/nsf1.4/7/1.json');
        this.load.atlas('nsf1_4_largecake32',window.baseUrl+'assets/gradeAssets/nsf1.4/3/2.png',window.baseUrl+'json/gradeJson/nsf1.4/7/2.json');
        this.load.atlas('nsf1_4_largecake33',window.baseUrl+'assets/gradeAssets/nsf1.4/3/3.png',window.baseUrl+'json/gradeJson/nsf1.4/7/3.json');
        this.load.atlas('nsf1_4_largecake34',window.baseUrl+'assets/gradeAssets/nsf1.4/3/4.png',window.baseUrl+'json/gradeJson/nsf1.4/7/4.json');
        this.load.atlas('nsf1_4_largecake35',window.baseUrl+'assets/gradeAssets/nsf1.4/3/5.png',window.baseUrl+'json/gradeJson/nsf1.4/7/5.json');
        this.load.atlas('nsf1_4_largecake36',window.baseUrl+'assets/gradeAssets/nsf1.4/3/6.png',window.baseUrl+'json/gradeJson/nsf1.4/7/6.json');
        this.load.atlas('nsf1_4_largecake37',window.baseUrl+'assets/gradeAssets/nsf1.4/3/7.png',window.baseUrl+'json/gradeJson/nsf1.4/7/7.json');
        
        this.load.atlas('nsf1_4_minicake31',window.baseUrl+'assets/gradeAssets/nsf1.4/3/7/1.png',window.baseUrl+'json/gradeJson/nsf1.4/7/7/1.json');
        this.load.atlas('nsf1_4_minicake32',window.baseUrl+'assets/gradeAssets/nsf1.4/3/7/2.png',window.baseUrl+'json/gradeJson/nsf1.4/7/7/2.json');
        this.load.atlas('nsf1_4_minicake33',window.baseUrl+'assets/gradeAssets/nsf1.4/3/7/3.png',window.baseUrl+'json/gradeJson/nsf1.4/7/7/3.json');
        this.load.atlas('nsf1_4_minicake34',window.baseUrl+'assets/gradeAssets/nsf1.4/3/7/4.png',window.baseUrl+'json/gradeJson/nsf1.4/7/7/4.json');
        this.load.atlas('nsf1_4_minicake35',window.baseUrl+'assets/gradeAssets/nsf1.4/3/7/5.png',window.baseUrl+'json/gradeJson/nsf1.4/7/7/5.json');
        this.load.atlas('nsf1_4_minicake36',window.baseUrl+'assets/gradeAssets/nsf1.4/3/7/6.png',window.baseUrl+'json/gradeJson/nsf1.4/7/7/6.json');
        this.load.atlas('nsf1_4_minicake37',window.baseUrl+'assets/gradeAssets/nsf1.4/3/7/7.png',window.baseUrl+'json/gradeJson/nsf1.4/7/7/7.json');
//        this.load.atlas('box',window.baseUrl+'assets/gradeAssets/nsf1.4/A/box 3.png',window.baseUrl+'json/gradeJson/nsf1.4/box 3.json');
        this.load.atlas('nsf1_4_box',window.baseUrl+'assets/gradeAssets/nsf1.4/b1.png',window.baseUrl+'json/gradeJson/nsf1.4/b1.json');
        this.load.image('nsf1_4_line',window.baseUrl+'assets/gradeAssets/nsf1.4/A/6.png');
        
        
        this.load.image('nsf1_4_footer',window.baseUrl+'assets/gradeAssets/nsf1.4/footer.png');
        this.load.atlas('nsf1_4_calNum',window.baseUrl+'assets/gradeAssets/nsf1.4/calNum.png',window.baseUrl+'json/gradeJson/nsf1.4/calNum.json');
        this.load.atlas('nsf1_4_rightBtn',window.baseUrl+'assets/gradeAssets/nsf1.4/1.png' ,window.baseUrl+'json/gradeJson/nsf1.4/1.json');
       this.load.atlas('nsf1_4_eraser',window.baseUrl+'assets/gradeAssets/nsf1.4/2.png' ,window.baseUrl+'json/gradeJson/nsf1.4/2.json');


    }

    },

    
	create:function(game){
        _this.bg1=null;
_this.starsGroup=0;
_this.no1=0;
_this.mainFlag=0;

_this.noofAttempts=0;
       _this.sceneCount=0;

_this.opt1=null;
_this.opt2=null;
_this.opt3=null;
_this.opt4=null;
_this.opt9=null;
_this.no2=0;
_this.count2=0;
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
_this.boxclick=0;_this.selectedBox=0;
  _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;     
            
_this.minutes=0;_this.seconds=0;_this.counterForTimer=0;
_this.box=0;

        //baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9];
//        _this.qArrays1 = [5,6,7,8,9,10];
        _this.qArrays = this.shuffle(_this.qArrays);
       // _this.qArrays1 = this.shuffle(_this.qArrays1);
       
       // counterText=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);
       
        this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

         _this.bg1 = this.add.sprite(0,0, 'nsf1_4_bgA');
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
    
    _this.TopBar.scale.setTo(1,1.1);

    _this.backbtn = this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(){
        console.log("back");
        _this.backbtn.events.onInputDown.removeAll();
        this.stopVoice();
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
     _this.clickSound = _this.add.audio('ClickSound');
     _this.snapSound = _this.add.audio('snapSound');
        
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
       _this.speaker = this.add.sprite(600,5,'grade11_speaker');
        _this.speaker.inputEnabled = true;
        _this.speaker.events.onInputDown.add(function()
		{
		    _this.clickSound.play();
			_this.getVoice();
		},_this);
         _this.generateStarsForTheScene(6)
       
         this.getQuestion();
        console.log("getquestion");
    //_this.getVoice();
    },
   
    /***********************************getquestion************************/
    getQuestion:function()
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

        _this.addOnce = true;
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
    	console.log("get"+_this.qArrays[_this.no1]);
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
            case 6: console.log("case6");
                this.gotosixthQuestion();
    				break;
            case 7: console.log("case 7");
                this.gotoseventhQuestion();
                    break;
            case 8: console.log("case 8");
                this.gotoeighthQuestion();
                    break;
            case 9: console.log("case 9");
                    this.gotonineQuestion();
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
   
    
    
    checkOverlap: function(opt0, target) {

    var boundsA = opt0.getBounds();
    var boundsB = target.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
},
    /****************************firstquestionwheel************************/
     gotoFirstQuestion:function(){
         _this.Question = 1;
         _this.count2=0;
//         _this.no1++;
         _this.x2=250;
         _this.x=250;
         console.log("first");
         _this.group3=this.add.group();
         
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
         for(i=0;i<6;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=130;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<6;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=130;
                  _this.cloud.scale.setTo(0.8,0.8); 
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
          
          
         _this.group1=this.add.group();
         _this.group1.alpha=0;
        _this.graphics1 = this.add.graphics(40, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=1;
         _this.mcake3=this.add.sprite(80, 330,'nsf1_4_minicake3');_this.mcake3.visible=false;
        _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
         
         _this.graphics2 = this.add.graphics(170, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=1;
         _this.mcake23=this.add.sprite(210,330,'nsf1_4_minicake5');_this.mcake23.visible=false;
        _this.mcake23.inputEnabled=false;
          _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y;
         
         _this.graphics3 = this.add.graphics(300, 300);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFFFF0B, 0.5);
            _this.graphics3.drawCircle(50, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha=0;
         _this.graphics3.canAdd=1;
         _this.mcake33=this.add.sprite(340, 330,'nsf1_4_minicake7');_this.mcake33.visible=false;
        _this.mcake33.inputEnabled=false;
         _this.mcake33X=_this.mcake33.x;
         _this.mcake33Y=_this.mcake33.y;
         
         _this.graphics4= this.add.graphics(430, 300);
            _this.graphics4.lineStyle(0);
            _this.graphics4.beginFill(0xFFFF0B, 0.5);
            _this.graphics4.drawCircle(50, 50, 50);
            _this.graphics4.endFill();
            _this.graphics4.alpha=0;
         _this.graphics4.canAdd=1;
         _this.mcake43=this.add.sprite(470, 330,'nsf1_4_minicake9');_this.mcake43.visible=false;
        _this.mcake43.inputEnabled=false;
          _this.mcake43X=_this.mcake43.x;
         _this.mcake43Y=_this.mcake43.y;
         
         _this.graphics5= this.add.graphics(560, 300);
            _this.graphics5.lineStyle(0);
            _this.graphics5.beginFill(0xFFFF0B, 0.5);
            _this.graphics5.drawCircle(50, 50, 50);
            _this.graphics5.endFill();
            _this.graphics5.alpha=0;
         _this.graphics5.canAdd=1;
         _this.mcake53=this.add.sprite(600,330,'nsf1_4_minicake10');_this.mcake53.visible=false;
         _this.mcake53.inputEnabled=true;
          _this.mcake53X=_this.mcake53.x;
         _this.mcake53Y=_this.mcake53.y;
         
         _this.graphics6= this.add.graphics(690, 300);
            _this.graphics6.lineStyle(0);
            _this.graphics6.beginFill(0xFFFF0B, 0.5);
            _this.graphics6.drawCircle(50, 50, 50);
            _this.graphics6.endFill();
            _this.graphics6.alpha=0;
         _this.graphics6.canAdd=1;
         _this.mcake63=this.add.sprite(730,330,'nsf1_4_minicake8');_this.mcake63.visible=false;
         _this.mcake63.inputEnabled=true;
          _this.mcake63X=_this.mcake63.x;
         _this.mcake63Y=_this.mcake63.y;
         
        _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
        
          _this.cake5=_this.add.sprite(465,82,'nsf1_4_largecake7'); _this.cake5.name='l5';
         
         _this.cake6=_this.add.sprite(412,82,'nsf1_4_largecake8'); _this.cake6.name='l6';
         
          _this.cake7=_this.add.sprite(400,112,'nsf1_4_largecake9');_this.cake7.name='l7';
         
         _this.cake8=_this.add.sprite(404,150,'nsf1_4_largecake10');_this.cake8.name='l8';
         
         _this.cake4=_this.add.sprite(490,95,'nsf1_4_largecake6'); _this.cake4.name='l4';
         
          _this.cake3=_this.add.sprite(490,130,'nsf1_4_largecake5');_this.cake3.name='l3';
         
          _this.cake2=_this.add.sprite(485,149,'nsf1_4_largecake4'); _this.cake2.name='l2';
         
         _this.cake1=_this.add.sprite(445,150,'nsf1_4_largecake3');_this.cake1.name='l1';
         
         _this.cake5X=_this.cake5.x;
         _this.cake5Y=_this.cake5.y;
         _this.cake6X=_this.cake6.x;
         _this.cake6Y=_this.cake6.y;
         _this.cake7X=_this.cake7.x;
         _this.cake7Y=_this.cake7.y;
         _this.cake8X=_this.cake8.x;
         _this.cake8Y=_this.cake8.y;
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
         
         _this.cake5.inputEnabled=true;
        _this.cake5.events.onInputDown.add(_this.checkAns,_this);
        _this.cake6.inputEnabled=true;
        _this.cake6.events.onInputDown.add(_this.checkAns,_this);
         _this.cake7.inputEnabled=true;
        _this.cake7.events.onInputDown.add(_this.checkAns,_this);
         _this.cake8.inputEnabled=true;
        _this.cake8.events.onInputDown.add(_this.checkAns,_this);
        _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
        _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
         _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
         _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
         
          _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;     
          _this.numBox3Pressed =  false;     
          _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics3);
         _this.group1.add(_this.graphics4);
         _this.group1.add(_this.graphics5);
         _this.group1.add(_this.graphics6);
         
         _this.group1.add(_this.mcake3);
        
         _this.group1.add(_this.mcake23);
        
         _this.group1.add(_this.mcake33);
     
         _this.group1.add(_this.mcake43);
    
         _this.group1.add(_this.mcake53);
       
         _this.group1.add(_this.mcake63);
        
         
         _this.group1.add(_this.cake5);
         _this.group1.add(_this.cake6);
         _this.group1.add(_this.cake7);
         _this.group1.add(_this.cake8);
         _this.group1.add(_this.cake4);
         _this.group1.add(_this.cake3);
         _this.group1.add(_this.cake2);
         _this.group1.add(_this.cake1);
    
         _this.rightAns1=2;
         _this.rightAns2=8;
         _this.rightAns3=1;
         _this.rightAns4=8;
         
         _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
    },
   /*******************************secondquestionwheel*******************/
   gotoSecondQuestion:function(){
       _this.Question = 2;
       _this.count2=0;
//   _this.no1++;
         _this.x2=250;
         _this.x=250;
         console.log("second");
         _this.group3=this.add.group();
         
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
         for(i=0;i<6;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=130;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<6;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=130;
                  _this.cloud.scale.setTo(0.8,0.8);  
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
       
         _this.group1=this.add.group();
       _this.group1.alpha=0;
         _this.graphics1 = this.add.graphics(40, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=2;
         _this.mcake3=this.add.sprite(60, 330,'nsf1_4_minicake1');_this.mcake3.visible=false;
         _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
         _this.mcakes4=this.add.sprite(90, 330,'nsf1_4_minicake13');_this.mcakes4.visible=false;
        _this.mcakes4.inputEnabled=false;
         _this.mcakes4X=_this.mcakes4.x;
         _this.mcakes4Y=_this.mcakes4.y;
       
         _this.graphics2 = this.add.graphics(170, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=2;
         _this.mcake23=this.add.sprite(190,330,'nsf1_4_minicake12');_this.mcake23.visible=false;
         _this.mcake23.inputEnabled=false;
         _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y;
         _this.mcakes24=this.add.sprite(220, 330,'nsf1_4_minicake14');_this.mcakes24.visible=false;
        _this.mcakes24.inputEnabled=false;
         _this.mcakes24X=_this.mcakes24.x;
         _this.mcakes24Y=_this.mcakes24.y;
       
         _this.graphics3 = this.add.graphics(300, 300);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFFFF0B, 0.5);
            _this.graphics3.drawCircle(50, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha=0;
         _this.graphics3.canAdd=2;
         _this.mcake33=this.add.sprite(320, 330,'nsf1_4_minicake17');_this.mcake33.visible=false;
         _this.mcake33.inputEnabled=false;
         _this.mcake33X=_this.mcake33.x;
         _this.mcake33Y=_this.mcake33.y;
         _this.mcakes34=this.add.sprite(350, 330,'nsf1_4_minicake16');_this.mcakes34.visible=false;
        _this.mcakes34.inputEnabled=false;
         _this.mcakes34X=_this.mcakes34.x;
         _this.mcakes34Y=_this.mcakes34.y;
       
         _this.graphics4= this.add.graphics(430, 300);
            _this.graphics4.lineStyle(0);
            _this.graphics4.beginFill(0xFFFF0B, 0.5);
            _this.graphics4.drawCircle(50, 50, 50);
            _this.graphics4.endFill();
            _this.graphics4.alpha=0;
         _this.graphics4.canAdd=2;
         _this.mcake43=this.add.sprite(450, 330,'nsf1_4_minicake15');_this.mcake43.visible=false;
         _this.mcake43.inputEnabled=false;
         _this.mcake43X=_this.mcake43.x;
         _this.mcake43Y=_this.mcake43.y;
         _this.mcakes44=this.add.sprite(480, 330,'nsf1_4_minicake113');_this.mcakes44.visible=false;
        _this.mcakes44.inputEnabled=false;
         _this.mcakes44X=_this.mcakes44.x;
         _this.mcakes44Y=_this.mcakes44.y;
       
         _this.graphics5= this.add.graphics(560, 300);
            _this.graphics5.lineStyle(0);
            _this.graphics5.beginFill(0xFFFF0B, 0.5);
            _this.graphics5.drawCircle(50, 50, 50);
            _this.graphics5.endFill();
            _this.graphics5.alpha=0;
         _this.graphics5.canAdd=2;
         _this.mcake53=this.add.sprite(580,330,'nsf1_4_minicake111');_this.mcake53.visible=false;
           _this.mcake53.inputEnabled=false;
         _this.mcake53X=_this.mcake53.x;
         _this.mcake53Y=_this.mcake53.y;
         _this.mcakes54=this.add.sprite(610,330,'nsf1_4_minicake110');_this.mcakes54.visible=false;
         _this.mcakes54.inputEnabled=false;
         _this.mcakes54X=_this.mcakes54.x;
         _this.mcakes54Y=_this.mcakes54.y;
       
         _this.graphics6= this.add.graphics(690, 300);
            _this.graphics6.lineStyle(0);
            _this.graphics6.beginFill(0xFFFF0B, 0.5);
            _this.graphics6.drawCircle(50, 50, 50);
            _this.graphics6.endFill();
            _this.graphics6.alpha=0;
         _this.graphics6.canAdd=2;
         _this.mcake63=this.add.sprite(710,330,'nsf1_4_minicake19');_this.mcake63.visible=false;
         _this.mcake63.inputEnabled=false;
         _this.mcake63X=_this.mcake63.x;
         _this.mcake63Y=_this.mcake63.y;
         _this.mcakes64=this.add.sprite(740,330,'nsf1_4_minicake112');_this.mcakes64.visible=false;
          _this.mcakes64.inputEnabled=false;
         _this.mcakes64X=_this.mcakes64.x;
         _this.mcakes64Y=_this.mcakes64.y;
       
           _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
    
          _this.cake9=_this.add.sprite(458,82,'nsf1_4_largecake19'); _this.cake9.name='l9';
          _this.cake10=_this.add.sprite(477,82,'nsf1_4_largecake110'); _this.cake10.name='l10';
       
         _this.cake11=_this.add.sprite(410,95,'nsf1_4_largecake111'); _this.cake11.name='l11';
         _this.cake12=_this.add.sprite(430,85,'nsf1_4_largecake112'); _this.cake12.name='l12';
         
          _this.cake13=_this.add.sprite(400,128,'nsf1_4_largecake113');_this.cake13.name='l13';
          _this.cake14=_this.add.sprite(400,110,'nsf1_4_largecake114');_this.cake14.name='l14';
         
         _this.cake15=_this.add.sprite(400,145,'nsf1_4_largecake115');_this.cake15.name='l15';
         _this.cake16=_this.add.sprite(414,150,'nsf1_4_largecake116');_this.cake16.name='l16';
         
         _this.cake7=_this.add.sprite(490,90,'nsf1_4_largecake17'); _this.cake7.name='l7';
         _this.cake8=_this.add.sprite(493,105,'nsf1_4_largecake18'); _this.cake8.name='l8';
         
          _this.cake5=_this.add.sprite(498,140,'nsf1_4_largecake15');_this.cake5.name='l5';
          _this.cake6=_this.add.sprite(498,125,'nsf1_4_largecake16');_this.cake6.name='l6';
         
          _this.cake3=_this.add.sprite(495,145,'nsf1_4_largecake13'); _this.cake3.name='l3';
          _this.cake4=_this.add.sprite(500,145,'nsf1_4_largecake14'); _this.cake4.name='l4';
       
         _this.cake2=_this.add.sprite(475,150,'nsf1_4_largecake12');_this.cake2.name='l2';
         _this.cake1=_this.add.sprite(445,150,'nsf1_4_largecake1');_this.cake1.name='l1';
         
         _this.cake7X=_this.cake7.x;
         _this.cake7Y=_this.cake7.y;
         _this.cake11X=_this.cake11.x;
         _this.cake11Y=_this.cake11.y;
         _this.cake12X=_this.cake12.x;
         _this.cake12Y=_this.cake12.y;
         _this.cake13X=_this.cake13.x;
         _this.cake13Y=_this.cake13.y;
         _this.cake14X=_this.cake14.x;
         _this.cake14Y=_this.cake14.y;
         _this.cake15X=_this.cake15.x;
         _this.cake15Y=_this.cake15.y;
         _this.cake16X=_this.cake16.x;
         _this.cake16Y=_this.cake16.y;
         _this.cake8X=_this.cake8.x;
         _this.cake8Y=_this.cake8.y;
         _this.cake9X=_this.cake9.x;
         _this.cake9Y=_this.cake9.y;
         _this.cake10X=_this.cake10.x;
         _this.cake10Y=_this.cake10.y;
         _this.cake6X=_this.cake6.x;
         _this.cake6Y=_this.cake6.y;
         _this.cake5X=_this.cake5.x;
         _this.cake5Y=_this.cake5.y;
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
         
         _this.cake7.inputEnabled=true;
        _this.cake7.events.onInputDown.add(_this.checkAns,_this);
        _this.cake8.inputEnabled=true;
        _this.cake8.events.onInputDown.add(_this.checkAns,_this);
         _this.cake9.inputEnabled=true;
        _this.cake9.events.onInputDown.add(_this.checkAns,_this);
         _this.cake10.inputEnabled=true;
        _this.cake10.events.onInputDown.add(_this.checkAns,_this);
        _this.cake6.inputEnabled=true;
        _this.cake6.events.onInputDown.add(_this.checkAns,_this);
        _this.cake5.inputEnabled=true;
        _this.cake5.events.onInputDown.add(_this.checkAns,_this);
         _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
         _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
        _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
        _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
        _this.cake11.inputEnabled=true;
        _this.cake11.events.onInputDown.add(_this.checkAns,_this);
        _this.cake12.inputEnabled=true;
        _this.cake12.events.onInputDown.add(_this.checkAns,_this);
        _this.cake13.inputEnabled=true;
        _this.cake13.events.onInputDown.add(_this.checkAns,_this); 
        _this.cake14.inputEnabled=true;
        _this.cake14.events.onInputDown.add(_this.checkAns,_this);
        _this.cake15.inputEnabled=true;
        _this.cake15.events.onInputDown.add(_this.checkAns,_this);
        _this.cake16.inputEnabled=true;
        _this.cake16.events.onInputDown.add(_this.checkAns,_this);
         
       
          _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;     
          _this.numBox3Pressed =  false;     
          _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;     
          _this.numBox3Pressed =  false;     
          _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;     
          _this.numBox3Pressed =  false;     
          _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
        _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics3);
         _this.group1.add(_this.graphics4);
         _this.group1.add(_this.graphics5);
         _this.group1.add(_this.graphics6);
         
         _this.group1.add(_this.mcake3);
         _this.group1.add(_this.mcakes4);
         _this.group1.add(_this.mcake23);
         _this.group1.add(_this.mcakes24);
         _this.group1.add(_this.mcake33);
         _this.group1.add(_this.mcakes34);
         _this.group1.add(_this.mcake43);
         _this.group1.add(_this.mcakes44);
         _this.group1.add(_this.mcake53);
         _this.group1.add(_this.mcakes54);
         _this.group1.add(_this.mcake63);
         _this.group1.add(_this.mcakes64);
         
         
          _this.group1.add(_this.cake9);
        _this.group1.add(_this.cake12);
       _this.group1.add(_this.cake11);
       _this.group1.add(_this.cake14);
        _this.group1.add(_this.cake13);
       _this.group1.add(_this.cake15);
       _this.group1.add(_this.cake16);
        _this.group1.add(_this.cake10);
        _this.group1.add(_this.cake7);
         _this.group1.add(_this.cake8);
         _this.group1.add(_this.cake6);
         _this.group1.add(_this.cake5);
         _this.group1.add(_this.cake4);
         _this.group1.add(_this.cake3);
          _this.group1.add(_this.cake1);
         _this.group1.add(_this.cake2);  
         
         _this.rightAns1=4;
         _this.rightAns2=16;
         _this.rightAns3=2;
         _this.rightAns4=16;
       
       _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
    	
    },
    /*****************************thirdquestioncircle**********************/
      gotoThirdQuestion:function(){
      _this.Question = 3;
           _this.count2=0;
//         _this.no1++;
         _this.x2=250;
         _this.x=250;
         console.log("first");
         _this.group3=this.add.group();
         
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
         for(i=0;i<5;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=150;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<5;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=150;
                  _this.cloud.scale.setTo(0.8,0.8); 
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
          
         _this.group1=this.add.group();
          _this.group1.alpha=0;
        _this.graphics1 = this.add.graphics(40, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=1;
         _this.mcake3=this.add.sprite(70, 330,'nsf1_4_minicake3');_this.mcake3.visible=false;
        _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
          
         _this.graphics2 = this.add.graphics(190, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=1;
         _this.mcake23=this.add.sprite(230,330,'nsf1_4_minicake5');_this.mcake23.visible=false;
        _this.mcake23.inputEnabled=false;
         _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y;
          
         _this.graphics3 = this.add.graphics(330, 300);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFFFF0B, 0.5);
            _this.graphics3.drawCircle(50, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha=0;
         _this.graphics3.canAdd=1;
         _this.mcake33=this.add.sprite(370, 330,'nsf1_4_minicake7');_this.mcake33.visible=false;
        _this.mcake33.inputEnabled=false;
         _this.mcake33X=_this.mcake33.x;
         _this.mcake33Y=_this.mcake33.y;
          
         _this.graphics4= this.add.graphics(500, 300);
            _this.graphics4.lineStyle(0);
            _this.graphics4.beginFill(0xFFFF0B, 0.5);
            _this.graphics4.drawCircle(50, 50, 50);
            _this.graphics4.endFill();
            _this.graphics4.alpha=0;
         _this.graphics4.canAdd=1;
         _this.mcake43=this.add.sprite(520, 330,'nsf1_4_minicake9');_this.mcake43.visible=false;
        _this.mcake43.inputEnabled=false;
         _this.mcake43X=_this.mcake43.x;
         _this.mcake43Y=_this.mcake43.y;
          
         _this.graphics5= this.add.graphics(640, 300);
            _this.graphics5.lineStyle(0);
            _this.graphics5.beginFill(0xFFFF0B, 0.5);
            _this.graphics5.drawCircle(50, 50, 50);
            _this.graphics5.endFill();
            _this.graphics5.alpha=0;
         _this.graphics5.canAdd=1;
         _this.mcake53=this.add.sprite(670,330,'nsf1_4_minicake10');_this.mcake53.visible=false;
         _this.mcake53.inputEnabled=false;
         _this.mcake53X=_this.mcake53.x;
         _this.mcake53Y=_this.mcake53.y;
          
          _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
        
          _this.cake5=_this.add.sprite(465,82,'nsf1_4_largecake7'); _this.cake5.name='l5';
         
         _this.cake6=_this.add.sprite(412,82,'nsf1_4_largecake8'); _this.cake6.name='l6';
         
          _this.cake7=_this.add.sprite(400,112,'nsf1_4_largecake9');_this.cake7.name='l7';
         
         _this.cake8=_this.add.sprite(404,150,'nsf1_4_largecake10');_this.cake8.name='l8';
         
         _this.cake4=_this.add.sprite(490,95,'nsf1_4_largecake6'); _this.cake4.name='l4';
         
          _this.cake3=_this.add.sprite(490,130,'nsf1_4_largecake5');_this.cake3.name='l3';
         
          _this.cake2=_this.add.sprite(485,149,'nsf1_4_largecake4'); _this.cake2.name='l2';
         
         _this.cake1=_this.add.sprite(445,150,'nsf1_4_largecake3');_this.cake1.name='l1';
         
         _this.cake5X=_this.cake5.x;
         _this.cake5Y=_this.cake5.y;
         _this.cake6X=_this.cake6.x;
         _this.cake6Y=_this.cake6.y;
         _this.cake7X=_this.cake7.x;
         _this.cake7Y=_this.cake7.y;
         _this.cake8X=_this.cake8.x;
         _this.cake8Y=_this.cake8.y;
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
         
         _this.cake5.inputEnabled=true;
        _this.cake5.events.onInputDown.add(_this.checkAns,_this);
        _this.cake6.inputEnabled=true;
        _this.cake6.events.onInputDown.add(_this.checkAns,_this);
         _this.cake7.inputEnabled=true;
        _this.cake7.events.onInputDown.add(_this.checkAns,_this);
         _this.cake8.inputEnabled=true;
        _this.cake8.events.onInputDown.add(_this.checkAns,_this);
        _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
        _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
         _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
         _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
         
         _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics3);
         _this.group1.add(_this.graphics4);
         _this.group1.add(_this.graphics5);
         
         _this.group1.add(_this.mcake3);
         _this.group1.add(_this.mcake23);
         _this.group1.add(_this.mcake33);
         _this.group1.add(_this.mcake43);
         _this.group1.add(_this.mcake53);
       
         _this.group1.add(_this.cake5);
         _this.group1.add(_this.cake6);
         _this.group1.add(_this.cake7);
         _this.group1.add(_this.cake8);
         _this.group1.add(_this.cake4);
         _this.group1.add(_this.cake3);
         _this.group1.add(_this.cake2);
         _this.group1.add(_this.cake1);
    
         _this.rightAns1=3;
         _this.rightAns2=8;
         _this.rightAns3=1;
         _this.rightAns4=8;
          
          _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
    },
    /*********************************fourthquestioncircle***********************/
       gotoFourthQuestion:function(){
         
    	 _this.Question = 4;
         _this.count2=0;
//   _this.no1++;
         _this.x2=250;
         _this.x=250;
         console.log("second");
         _this.group3=this.add.group();
         
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
          for(i=0;i<5;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=150;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<5;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=150;
                  _this.cloud.scale.setTo(0.8,0.8); 
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
       
         _this.group1=this.add.group();
           _this.group1.alpha=0;
          _this.graphics1 = this.add.graphics(40, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=3;
         _this.mcake3=this.add.sprite(60, 330,'nsf1_4_minicake1');_this.mcake3.visible=false;
            _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
         _this.mcakes4=this.add.sprite(90, 330,'nsf1_4_minicake16');_this.mcakes4.visible=false;
            _this.mcakes4.inputEnabled=false;
         _this.mcakes4X=_this.mcakes4.x;
         _this.mcakes4Y=_this.mcakes4.y;

          _this.mcakes5=this.add.sprite(75, 300,'nsf1_4_minicake16');_this.mcakes5.visible=false;
            _this.mcakes5.inputEnabled=false;
         _this.mcakes5X=_this.mcakes5.x;
         _this.mcakes5Y=_this.mcakes5.y;
        
        _this.graphics2 = this.add.graphics(190, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=3;
         _this.mcake23=this.add.sprite(210,330,'nsf1_4_minicake12');_this.mcake23.visible=false;
            _this.mcake23.inputEnabled=false;
         _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y;
         _this.mcakes24=this.add.sprite(240, 330,'nsf1_4_minicake14');_this.mcakes24.visible=false;
            _this.mcakes24.inputEnabled=false;
         _this.mcakes24X=_this.mcakes24.x;
         _this.mcakes24Y=_this.mcakes24.y;

          _this.mcakes25=this.add.sprite(225, 300,'nsf1_4_minicake14');_this.mcakes25.visible=false;
            _this.mcakes25.inputEnabled=false;
         _this.mcakes25X=_this.mcakes25.x;
         _this.mcakes25Y=_this.mcakes25.y;
        
         _this.graphics3 = this.add.graphics(330, 300);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFFFF0B, 0.5);
            _this.graphics3.drawCircle(50, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha=0;
         _this.graphics3.canAdd=3;
         _this.mcake33=this.add.sprite(360,330,'nsf1_4_minicake17');_this.mcake33.visible=false;
            _this.mcake33.inputEnabled=false;
         _this.mcake33X=_this.mcake33.x;
         _this.mcake33Y=_this.mcake33.y;
         _this.mcakes34=this.add.sprite(390,330,'nsf1_4_minicake13');_this.mcakes34.visible=false;
            _this.mcakes34.inputEnabled=false;
         _this.mcakes34X=_this.mcakes34.x;
         _this.mcakes34Y=_this.mcakes34.y;
         _this.mcakes35=this.add.sprite(370,300,'nsf1_4_minicake13');_this.mcakes35.visible=false;
            _this.mcakes35.inputEnabled=false;
         _this.mcakes35X=_this.mcakes35.x;
         _this.mcakes35Y=_this.mcakes35.y;
        
        _this.graphics4= this.add.graphics(500, 300);
            _this.graphics4.lineStyle(0);
            _this.graphics4.beginFill(0xFFFF0B, 0.5);
            _this.graphics4.drawCircle(50, 50, 50);
            _this.graphics4.endFill();
            _this.graphics4.alpha=0;
         _this.graphics4.canAdd=3;
         _this.mcake43=this.add.sprite(510,330,'nsf1_4_minicake15');_this.mcake43.visible=false;
            _this.mcake43.inputEnabled=false;
         _this.mcake43X=_this.mcake43.x;
         _this.mcake43Y=_this.mcake43.y;
         _this.mcakes44=this.add.sprite(550,330,'nsf1_4_minicake116');_this.mcakes44.visible=false;
            _this.mcakes44.inputEnabled=false;
         _this.mcakes44X=_this.mcakes44.x;
         _this.mcakes44Y=_this.mcakes44.y;
         _this.mcakes45=this.add.sprite(530,300,'nsf1_4_minicake116');_this.mcakes45.visible=false;
            _this.mcakes45.inputEnabled=false;
         _this.mcakes45X=_this.mcakes45.x;
         _this.mcakes45Y=_this.mcakes45.y;
        
          _this.graphics5= this.add.graphics(640, 300);
            _this.graphics5.lineStyle(0);
            _this.graphics5.beginFill(0xFFFF0B, 0.5);
            _this.graphics5.drawCircle(50, 50, 50);
            _this.graphics5.endFill();
            _this.graphics5.alpha=0;
         _this.graphics5.canAdd=3;
         _this.mcake53=this.add.sprite(660,330,'nsf1_4_minicake111');_this.mcake53.visible=false;
            _this.mcake53.inputEnabled=false;
         _this.mcake53X=_this.mcake53.x;
         _this.mcake53Y=_this.mcake53.y;
         _this.mcakes54=this.add.sprite(690,330,'nsf1_4_minicake110');_this.mcakes54.visible=false;
            _this.mcakes54.inputEnabled=false;
         _this.mcakes54X=_this.mcakes54.x;
         _this.mcakes54Y=_this.mcakes54.y;

         _this.mcakes55=this.add.sprite(670,300,'nsf1_4_minicake110');_this.mcakes55.visible=false;
            _this.mcakes55.inputEnabled=false;
         _this.mcakes55X=_this.mcakes55.x;
         _this.mcakes55Y=_this.mcakes55.y;
           
          /* _this.graphics6= this.add.graphics(600,290);
            _this.graphics6.lineStyle(0);
            _this.graphics6.beginFill(0xFFFF0B, 0.5);
            _this.graphics6.drawCircle(50, 50, 50);
            _this.graphics6.endFill();
            _this.graphics6.alpha=0;
         _this.graphics6.canAdd=2;
         _this.mcake63=this.add.sprite(620,320,'nsf1_4_minicake112');_this.mcake63.visible=false;
            _this.mcake63.inputEnabled=false;
         _this.mcake63X=_this.mcake63.x;
         _this.mcake63Y=_this.mcake63.y;
         _this.mcakes64=this.add.sprite(650,320,'nsf1_4_minicake115');_this.mcakes64.visible=false;
            _this.mcakes64.inputEnabled=false;
         _this.mcakes64X=_this.mcakes64.x;
         _this.mcakes64Y=_this.mcakes64.y;
           
           _this.graphics7= this.add.graphics(720,290);
            _this.graphics7.lineStyle(0);
            _this.graphics7.beginFill(0xFFFF0B, 0.5);
            _this.graphics7.drawCircle(50, 50, 50);
            _this.graphics7.endFill();
            _this.graphics7.alpha=0;
         _this.graphics7.canAdd=2;
         _this.mcake73=this.add.sprite(740,320,'nsf1_4_minicake114');_this.mcake73.visible=false;
            _this.mcake73.inputEnabled=false;
         _this.mcake73X=_this.mcake73.x;
         _this.mcake73Y=_this.mcake73.y;
         _this.mcakes74=this.add.sprite(770,320,'nsf1_4_minicake19');_this.mcakes74.visible=false;
            _this.mcakes74.inputEnabled=false;
         _this.mcakes74X=_this.mcakes74.x;
         _this.mcakes74Y=_this.mcakes74.y;*/
       
           _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
    
           _this.cake9=_this.add.sprite(458,82,'nsf1_4_largecake19'); _this.cake9.name='l9';
          _this.cake10=_this.add.sprite(477,82,'nsf1_4_largecake110'); _this.cake10.name='l10';
       
         _this.cake11=_this.add.sprite(410,95,'nsf1_4_largecake111'); _this.cake11.name='l11';
         _this.cake12=_this.add.sprite(430,85,'nsf1_4_largecake112'); _this.cake12.name='l12';
         
          _this.cake13=_this.add.sprite(400,128,'nsf1_4_largecake113');_this.cake13.name='l13';
          _this.cake14=_this.add.sprite(400,110,'nsf1_4_largecake114');_this.cake14.name='l14';
         
         _this.cake15=_this.add.sprite(400,145,'nsf1_4_largecake115');_this.cake15.name='l15';
         _this.cake16=_this.add.sprite(414,150,'nsf1_4_largecake116');_this.cake16.name='l16';
         
         _this.cake7=_this.add.sprite(490,90,'nsf1_4_largecake17'); _this.cake7.name='l7';
         _this.cake8=_this.add.sprite(493,105,'nsf1_4_largecake18'); _this.cake8.name='l8';
         
          _this.cake5=_this.add.sprite(498,140,'nsf1_4_largecake15');_this.cake5.name='l5';
          _this.cake6=_this.add.sprite(498,125,'nsf1_4_largecake16');_this.cake6.name='l6';
         
          _this.cake3=_this.add.sprite(495,145,'nsf1_4_largecake13'); _this.cake3.name='l3';
          _this.cake4=_this.add.sprite(500,145,'nsf1_4_largecake14'); _this.cake4.name='l4';
       
         _this.cake2=_this.add.sprite(475,150,'nsf1_4_largecake12');_this.cake2.name='l2';
         _this.cake1=_this.add.sprite(445,150,'nsf1_4_largecake1');_this.cake1.name='l1';
         
         _this.cake7X=_this.cake7.x;
         _this.cake7Y=_this.cake7.y;
         _this.cake11X=_this.cake11.x;
         _this.cake11Y=_this.cake11.y;
         _this.cake12X=_this.cake12.x;
         _this.cake12Y=_this.cake12.y;
         _this.cake13X=_this.cake13.x;
         _this.cake13Y=_this.cake13.y;
         _this.cake14X=_this.cake14.x;
         _this.cake14Y=_this.cake14.y;
         _this.cake15X=_this.cake15.x;
         _this.cake15Y=_this.cake15.y;
         _this.cake16X=_this.cake16.x;
         _this.cake16Y=_this.cake16.y;
         _this.cake8X=_this.cake8.x;
         _this.cake8Y=_this.cake8.y;
         _this.cake9X=_this.cake9.x;
         _this.cake9Y=_this.cake9.y;
         _this.cake10X=_this.cake10.x;
         _this.cake10Y=_this.cake10.y;
         _this.cake6X=_this.cake6.x;
         _this.cake6Y=_this.cake6.y;
         _this.cake5X=_this.cake5.x;
         _this.cake5Y=_this.cake5.y;
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
         
         _this.cake7.inputEnabled=true;
        _this.cake7.events.onInputDown.add(_this.checkAns,_this);
        _this.cake8.inputEnabled=true;
        _this.cake8.events.onInputDown.add(_this.checkAns,_this);
         _this.cake9.inputEnabled=true;
        _this.cake9.events.onInputDown.add(_this.checkAns,_this);
         _this.cake10.inputEnabled=true;
        _this.cake10.events.onInputDown.add(_this.checkAns,_this);
        _this.cake6.inputEnabled=true;
        _this.cake6.events.onInputDown.add(_this.checkAns,_this);
        _this.cake5.inputEnabled=true;
        _this.cake5.events.onInputDown.add(_this.checkAns,_this);
         _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
         _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
        _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
        _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
        _this.cake11.inputEnabled=true;
        _this.cake11.events.onInputDown.add(_this.checkAns,_this);
        _this.cake12.inputEnabled=true;
        _this.cake12.events.onInputDown.add(_this.checkAns,_this);
        _this.cake13.inputEnabled=true;
        _this.cake13.events.onInputDown.add(_this.checkAns,_this); 
        _this.cake14.inputEnabled=true;
        _this.cake14.events.onInputDown.add(_this.checkAns,_this);
        _this.cake15.inputEnabled=true;
        _this.cake15.events.onInputDown.add(_this.checkAns,_this);
        _this.cake16.inputEnabled=true;
        _this.cake16.events.onInputDown.add(_this.checkAns,_this);
         
       
         _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
        _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics3);
         _this.group1.add(_this.graphics4);
         _this.group1.add(_this.graphics5);
//         _this.group1.add(_this.graphics6);
//         _this.group1.add(_this.graphics7);
         
         _this.group1.add(_this.mcake3);
         _this.group1.add(_this.mcakes4);
         _this.group1.add(_this.mcakes5);
         _this.group1.add(_this.mcake23);
         _this.group1.add(_this.mcakes24);
         _this.group1.add(_this.mcakes25);
         _this.group1.add(_this.mcake33);
         _this.group1.add(_this.mcakes34);
         _this.group1.add(_this.mcakes35);
         _this.group1.add(_this.mcake43);
         _this.group1.add(_this.mcakes44);
         _this.group1.add(_this.mcakes45);
         _this.group1.add(_this.mcake53);
         _this.group1.add(_this.mcakes54);
         _this.group1.add(_this.mcakes55);
        /* _this.group1.add(_this.mcake63);
         _this.group1.add(_this.mcakes64);
           _this.group1.add(_this.mcake73);
         _this.group1.add(_this.mcakes74);*/
         
          _this.group1.add(_this.cake9);
        _this.group1.add(_this.cake12);
       _this.group1.add(_this.cake11);
       _this.group1.add(_this.cake14);
        _this.group1.add(_this.cake13);
       _this.group1.add(_this.cake15);
       _this.group1.add(_this.cake16);
        _this.group1.add(_this.cake10);
        _this.group1.add(_this.cake7);
         _this.group1.add(_this.cake8);
         _this.group1.add(_this.cake6);
         _this.group1.add(_this.cake5);
         _this.group1.add(_this.cake4);
         _this.group1.add(_this.cake3);
          _this.group1.add(_this.cake1);
         _this.group1.add(_this.cake2);  
         
         _this.rightAns1=1;
         _this.rightAns2=16;
         _this.rightAns3=3;
         _this.rightAns4=16;
           
           _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
            
    },
    /******************fifthquestionwheel***************************************/
     gotoFifthQuestion:function(){
        _this.Question = 5;
          _this.count2=0;
//         _this.no1++;
         _this.x2=280;
         _this.x=280;
         console.log("first");
         _this.group3=this.add.group();
         
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
         for(i=0;i<4;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=180;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<4;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=180;
                  _this.cloud.scale.setTo(0.8,0.8); 
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
          
          
         _this.group1=this.add.group();
         _this.group1.alpha=0;
        _this.graphics1 = this.add.graphics(60, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=1;
         _this.mcake3=this.add.sprite(90, 330,'nsf1_4_minicake21');_this.mcake3.visible=false;
        _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
         
         _this.graphics2 = this.add.graphics(250, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=1;
         
         _this.mcake23=this.add.sprite(280,330,'nsf1_4_minicake22');_this.mcake23.visible=false;
        _this.mcake23.inputEnabled=false;
         _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y;
         
         _this.graphics3 = this.add.graphics(430, 300);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFFFF0B, 0.5);
            _this.graphics3.drawCircle(50, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha=0;
         _this.graphics3.canAdd=1;
        
         _this.mcake33=this.add.sprite(470, 330,'nsf1_4_minicake23');_this.mcake33.visible=false;
        _this.mcake33.inputEnabled=false;
         _this.mcake33X=_this.mcake33.x;
         _this.mcake33Y=_this.mcake33.y;
         
         _this.graphics4= this.add.graphics(600, 300);
            _this.graphics4.lineStyle(0);
            _this.graphics4.beginFill(0xFFFF0B, 0.5);
            _this.graphics4.drawCircle(50, 50, 50);
            _this.graphics4.endFill();
            _this.graphics4.alpha=0;
         _this.graphics4.canAdd=1;
        
         _this.mcake43=this.add.sprite(640, 330,'nsf1_4_minicake24');_this.mcake43.visible=false;
        _this.mcake43.inputEnabled=false;
         _this.mcake43X=_this.mcake43.x;
         _this.mcake43Y=_this.mcake43.y;
         
          _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
        
          _this.cake1=_this.add.sprite(434,78,'nsf1_4_largecake21'); _this.cake1.name='l1';
         
         _this.cake2=_this.add.sprite(480,92,'nsf1_4_largecake22'); _this.cake2.name='l2';
         
          _this.cake3=_this.add.sprite(480,142,'nsf1_4_largecake23');_this.cake3.name='l3';
         
         _this.cake4=_this.add.sprite(400,142,'nsf1_4_largecake24');_this.cake4.name='l4';
         
         _this.cake5=_this.add.sprite(400,90,'nsf1_4_largecake25'); _this.cake5.name='l5';
         
         _this.cake5X=_this.cake5.x;
         _this.cake5Y=_this.cake5.y;
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
         
        _this.cake5.inputEnabled=true;
        _this.cake5.events.onInputDown.add(_this.checkAns,_this);
        _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
        _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
        _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
        _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
         
          _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics3);
         _this.group1.add(_this.graphics4);
         
         _this.group1.add(_this.mcake3);
        
         _this.group1.add(_this.mcake23);
        
         _this.group1.add(_this.mcake33);
     
         _this.group1.add(_this.mcake43);
         
        _this.group1.add(_this.cake1);
        _this.group1.add(_this.cake2);
        _this.group1.add(_this.cake5);
        _this.group1.add(_this.cake4);
        _this.group1.add(_this.cake3);
        
         _this.rightAns1=1;
         _this.rightAns2=5;
         _this.rightAns3=1;
         _this.rightAns4=5;
         
         _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
    },
 /******************sixthquestionwheel***************************************/
     gotosixthQuestion:function(){
         
        _this.Question = 6;
        _this.count2=0;
//         _this.no1++;
         _this.x2=400;
         _this.x=400;
         console.log("first");
         _this.group3=this.add.group();
         
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
         for(i=0;i<3;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=200;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<3;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=200;
                  _this.cloud.scale.setTo(0.8,0.8); 
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
          
         _this.group1=this.add.group();
         _this.group1.alpha=0;
        _this.graphics1 = this.add.graphics(180, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=1;
         _this.mcake3=this.add.sprite(210, 330,'nsf1_4_minicake21');_this.mcake3.visible=false;
         _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
         
         _this.graphics2 = this.add.graphics(380, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=1;
         
         _this.mcake23=this.add.sprite(410,330,'nsf1_4_minicake22');_this.mcake23.visible=false;
          _this.mcake23.inputEnabled=false;
         _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y;
         
         _this.graphics3 = this.add.graphics(580, 300);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFFFF0B, 0.5);
            _this.graphics3.drawCircle(50, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha=0;
         _this.graphics3.canAdd=1;
         
         _this.mcake33=this.add.sprite(620,330,'nsf1_4_minicake23');_this.mcake33.visible=false;
         _this.mcake33.inputEnabled=false;
         _this.mcake33X=_this.mcake33.x;
         _this.mcake33Y=_this.mcake33.y;
         
         _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
        
          _this.cake1=_this.add.sprite(434,78,'nsf1_4_largecake21'); _this.cake1.name='l1';
         
         _this.cake2=_this.add.sprite(480,92,'nsf1_4_largecake22'); _this.cake2.name='l2';
         
          _this.cake3=_this.add.sprite(480,142,'nsf1_4_largecake23');_this.cake3.name='l3';
         
         _this.cake4=_this.add.sprite(400,142,'nsf1_4_largecake24');_this.cake4.name='l4';
         
         _this.cake5=_this.add.sprite(400,90,'nsf1_4_largecake25'); _this.cake5.name='l5';
         
         _this.cake5X=_this.cake5.x;
         _this.cake5Y=_this.cake5.y;
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
         
        _this.cake5.inputEnabled=true;
        _this.cake5.events.onInputDown.add(_this.checkAns,_this);
        _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
        _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
        _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
        _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
         
          _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics3);
         
         _this.group1.add(_this.mcake3);
         _this.group1.add(_this.mcake23);
         _this.group1.add(_this.mcake33);
         
          _this.group1.add(_this.cake1);
          _this.group1.add(_this.cake2);
          _this.group1.add(_this.cake5);
          _this.group1.add(_this.cake4);
          _this.group1.add(_this.cake3);
        
         _this.rightAns1=2;
         _this.rightAns2=5;
         _this.rightAns3=1;
         _this.rightAns4=5;
         
         _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
    },
    /********************seventhquestion*************************************/
    gotoseventhQuestion:function(){
         
        _this.Question = 7;
        _this.count2=0;
//         _this.no1++;
         _this.x2=500;
         _this.x=500;
         console.log("first");
         _this.group3=this.add.group();
         
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
         for(i=0;i<2;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=250;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<2;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=250;
                  _this.cloud.scale.setTo(0.8,0.8); 
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
          
         _this.group1=this.add.group();
        _this.group1.alpha=0;
        _this.graphics1 = this.add.graphics(280, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=2;
         _this.mcake3=this.add.sprite(300, 330,'nsf1_4_minicake21');_this.mcake3.visible=false;
        _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
         _this.mcakes4=this.add.sprite(340, 330,'nsf1_4_minicake23');_this.mcakes4.visible=false;
        _this.mcakes4.inputEnabled=false;
         _this.mcakes4X=_this.mcakes4.x;
         _this.mcakes4Y=_this.mcakes4.y;
        
         _this.graphics2 = this.add.graphics(540, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=2;
         
         _this.mcake23=this.add.sprite(550,330,'nsf1_4_minicake22');_this.mcake23.visible=false;
        _this.mcake23.inputEnabled=false;
         _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y;
         _this.mcakes24=this.add.sprite(590,330,'nsf1_4_minicake24');_this.mcakes24.visible=false;
        _this.mcakes24.inputEnabled=false;
         _this.mcakes24X=_this.mcakes24.x;
         _this.mcakes24Y=_this.mcakes24.y;
        
          _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
        
          _this.cake1=_this.add.sprite(434,78,'nsf1_4_largecake21'); _this.cake1.name='l1';
         
         _this.cake2=_this.add.sprite(480,92,'nsf1_4_largecake22'); _this.cake2.name='l2';
         
          _this.cake3=_this.add.sprite(480,142,'nsf1_4_largecake23');_this.cake3.name='l3';
         
         _this.cake4=_this.add.sprite(400,142,'nsf1_4_largecake24');_this.cake4.name='l4';
         
         _this.cake5=_this.add.sprite(400,90,'nsf1_4_largecake25'); _this.cake5.name='l5';
         
         _this.cake5X=_this.cake5.x;
         _this.cake5Y=_this.cake5.y;
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
         
        _this.cake5.inputEnabled=true;
        _this.cake5.events.onInputDown.add(_this.checkAns,_this);
        _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
        _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
        _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
        _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
         
          _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         
         _this.group1.add(_this.mcake3);
         _this.group1.add(_this.mcakes4);
         _this.group1.add(_this.mcake23);
         _this.group1.add(_this.mcakes24);
        
          _this.group1.add(_this.cake1);
          _this.group1.add(_this.cake2);
          _this.group1.add(_this.cake5);
         _this.group1.add(_this.cake4);
         _this.group1.add(_this.cake3);
        
         _this.rightAns1=1;
         _this.rightAns2=5;
         _this.rightAns3=2;
         _this.rightAns4=5;
        
        _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
    },
    /*********************eighthquestion************************************/
    gotoeighthQuestion:function(){
         _this.Question = 8;
         _this.count2=0;
//         _this.no1++;
         _this.x2=280;
         _this.x=280;
         console.log("first");
         _this.group3=this.add.group();
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
         for(i=0;i<4;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=180;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<4;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=180;
                  _this.cloud.scale.setTo(0.8,0.8); 
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
          
         _this.group1=this.add.group();
        _this.group1.alpha=0;
        _this.graphics1 = this.add.graphics(60, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=1;
         _this.mcake3=this.add.sprite(90, 330,'nsf1_4_minicake31');_this.mcake3.visible=false;
        _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
        
         _this.graphics2 = this.add.graphics(250, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=1;
         _this.mcake23=this.add.sprite(280,330,'nsf1_4_minicake32');_this.mcake23.visible=false;
        _this.mcake23.inputEnabled=false;
         _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y;
        
         _this.graphics3 = this.add.graphics(430, 300);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFFFF0B, 0.5);
            _this.graphics3.drawCircle(50, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha=0;
         _this.graphics3.canAdd=1; 
         _this.mcake33=this.add.sprite(470, 330,'nsf1_4_minicake33');_this.mcake33.visible=false;
        _this.mcake33.inputEnabled=false;
         _this.mcake33X=_this.mcake33.x;
         _this.mcake33Y=_this.mcake33.y;
        
         _this.graphics4= this.add.graphics(600, 300);
            _this.graphics4.lineStyle(0);
            _this.graphics4.beginFill(0xFFFF0B, 0.5);
            _this.graphics4.drawCircle(50, 50, 50);
            _this.graphics4.endFill();
            _this.graphics4.alpha=0;
         _this.graphics4.canAdd=1;
         _this.mcake43=this.add.sprite(640, 330,'nsf1_4_minicake34');_this.mcake43.visible=false;
         _this.mcake43.inputEnabled=false;
         _this.mcake43X=_this.mcake43.x;
         _this.mcake43Y=_this.mcake43.y;
        
           _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
        
          _this.cake4=_this.add.sprite(400,120,'nsf1_4_largecake31');_this.cake4.name='l4';
         
         _this.cake5=_this.add.sprite(420,140,'nsf1_4_largecake32'); _this.cake5.name='l5';
         
          _this.cake6=_this.add.sprite(480,140,'nsf1_4_largecake33');_this.cake6.name='l6';
         
         _this.cake7=_this.add.sprite(490,130,'nsf1_4_largecake34');_this.cake7.name='l7';
         
         _this.cake3=_this.add.sprite(490,80,'nsf1_4_largecake35'); _this.cake3.name='l3';
         
          _this.cake2=_this.add.sprite(450,70,'nsf1_4_largecake36');_this.cake2.name='l2';
         
          _this.cake1=_this.add.sprite(400,80,'nsf1_4_largecake37'); _this.cake1.name='l1';
         
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake5X=_this.cake5.x;
         _this.cake5Y=_this.cake5.y;
         _this.cake6X=_this.cake6.x;
         _this.cake6Y=_this.cake6.y;
         _this.cake7X=_this.cake7.x;
         _this.cake7Y=_this.cake7.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
         
        _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
        _this.cake5.inputEnabled=true;
        _this.cake5.events.onInputDown.add(_this.checkAns,_this);
        _this.cake6.inputEnabled=true;
        _this.cake6.events.onInputDown.add(_this.checkAns,_this);
        _this.cake7.inputEnabled=true;
        _this.cake7.events.onInputDown.add(_this.checkAns,_this);
        _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
        _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
        _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
         
         _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics3);
         _this.group1.add(_this.graphics4);
         
         _this.group1.add(_this.mcake3);
        
         _this.group1.add(_this.mcake23);
        
         _this.group1.add(_this.mcake33);
     
         _this.group1.add(_this.mcake43);
        
         _this.group1.add(_this.cake2);
        _this.group1.add(_this.cake3);
        _this.group1.add(_this.cake1);
         _this.group1.add(_this.cake4);
         _this.group1.add(_this.cake5);
         _this.group1.add(_this.cake7);
        _this.group1.add(_this.cake6);
        
         _this.rightAns1=3;
         _this.rightAns2=7;
         _this.rightAns3=1;
         _this.rightAns4=7;
        
        _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
    },
    /*********************ninequestion************************************/
    gotonineQuestion:function(){
         
        _this.Question = 9;
        _this.count2=0;
//         _this.no1++;
         _this.x2=400;
         _this.x=400;
         console.log("first");
         _this.group3=this.add.group();
         
                _this.plate=_this.add.sprite(this.world.centerX,180,'nsf1_4_plate'); 
         _this.plate.anchor.set(0.5);
         for(i=0;i<3;i++)
             {
               _this.girl=_this.add.sprite(_this.x2-240,380,'nsf1_4_girl');
                 _this.x2+=200;
                 _this.girl.scale.setTo(0.8,0.8);
                 _this.group3.add(_this.girl);
             }
         for(i=0;i<3;i++)
             {
               _this.cloud=_this.add.sprite(_this.x-220,300,'nsf1_4_cloud');
                 _this.x+=200;
                  _this.cloud.scale.setTo(0.8,0.8); 
                 _this.group3.add(_this.cloud);
             }
          _this.group3.add(_this.plate);
          
         _this.group1=this.add.group();
        _this.group1.alpha=0;
        _this.graphics1 = this.add.graphics(180, 300);
            _this.graphics1.lineStyle(0);
            _this.graphics1.beginFill(0xFFFF0B, 0.5);
            _this.graphics1.drawCircle(50, 50, 50);
            _this.graphics1.endFill();
            _this.graphics1.alpha=0;
         _this.graphics1.canAdd=1;
         _this.mcake3=this.add.sprite(210, 330,'nsf1_4_minicake41');_this.mcake3.visible=false;
          _this.mcake3.inputEnabled=false;
         _this.mcake3X=_this.mcake3.x;
         _this.mcake3Y=_this.mcake3.y;
        
         _this.graphics2 = this.add.graphics(380, 300);
            _this.graphics2.lineStyle(0);
            _this.graphics2.beginFill(0xFFFF0B, 0.5);
            _this.graphics2.drawCircle(50, 50, 50);
            _this.graphics2.endFill();
            _this.graphics2.alpha=0;
         _this.graphics2.canAdd=1;
         _this.mcake23=this.add.sprite(410,330,'nsf1_4_minicake42');_this.mcake23.visible=false;
        _this.mcake23.inputEnabled=false;
         _this.mcake23X=_this.mcake23.x;
         _this.mcake23Y=_this.mcake23.y; 
        
         _this.graphics3 = this.add.graphics(580, 300);
            _this.graphics3.lineStyle(0);
            _this.graphics3.beginFill(0xFFFF0B, 0.5);
            _this.graphics3.drawCircle(50, 50, 50);
            _this.graphics3.endFill();
            _this.graphics3.alpha=0;
         _this.graphics3.canAdd=1;
         _this.mcake33=this.add.sprite(620,330,'nsf1_4_minicake43');_this.mcake33.visible=false;
        _this.mcake33.inputEnabled=false;
         _this.mcake33X=_this.mcake33.x;
         _this.mcake33Y=_this.mcake33.y;
        
           _this.cake=_this.add.sprite(412,85,'nsf1_4_largecake');
         _this.cake.inputEnabled=true;
         _this.cake.events.onInputDown.add(function(){
             _this.clickSound.play();
             _this.group1.alpha=1;
             _this.cake.destroy();
         },this);
        
          _this.cake1=_this.add.sprite(420,80,'nsf1_4_largecake41'); _this.cake1.name='l1';
         
         _this.cake2=_this.add.sprite(490,92,'nsf1_4_largecake42'); _this.cake2.name='l2';
         
          _this.cake3=_this.add.sprite(450,150,'nsf1_4_largecake43');_this.cake3.name='l3';
         
         _this.cake4=_this.add.sprite(400,120,'nsf1_4_largecake44');_this.cake4.name='l4';
        
         _this.cake4X=_this.cake4.x;
         _this.cake4Y=_this.cake4.y;
         _this.cake3X=_this.cake3.x;
         _this.cake3Y=_this.cake3.y;
         _this.cake2X=_this.cake2.x;
         _this.cake2Y=_this.cake2.y;
         _this.cake1X=_this.cake1.x;
         _this.cake1Y=_this.cake1.y;
        
        _this.cake4.inputEnabled=true;
        _this.cake4.events.onInputDown.add(_this.checkAns,_this);
        _this.cake3.inputEnabled=true;
        _this.cake3.events.onInputDown.add(_this.checkAns,_this);
        _this.cake2.inputEnabled=true;
        _this.cake2.events.onInputDown.add(_this.checkAns,_this);
        _this.cake1.inputEnabled=true;
        _this.cake1.events.onInputDown.add(_this.checkAns,_this);
         
          _this.boxgroup=_this.add.group();
      _this.box1=this.add.sprite(830,80,'nsf1_4_box');
         _this.box1.frame=0; 
        _this.box1.inputEnabled=false;
     _this.box1.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=2;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box1.name = "nsf1_4_box1A";
                _this.selectedBox = _this.box1.name ;
               
              },this);
         _this.line=this.add.sprite(818,130,'nsf1_4_line');
         _this.box2=this.add.sprite(830,140,'nsf1_4_box');
         _this.box2.frame=0;
         _this.box2.inputEnabled=false;
     _this.box2.events.onInputDown.add(function(target)
              {
         _this.clickSound.play();
         _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
         _this.box1.frame=1;
         _this.box2.frame=2;
         _this.box3.frame=1;
         _this.box.frame=1;
                _this.box2.name = "nsf1_4_box2A";
                _this.selectedBox = _this.box2.name ;
               
              },this);
            
          _this.box3=this.add.sprite(830,320,'nsf1_4_box');
            _this.box3.frame=0;
            _this.box3.inputEnabled=false;
    _this.box3.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=2;
         _this.box.frame=1;
                    _this.box3.name = "nsf1_4_box3A";
                _this.selectedBox = _this.box3.name ;
               
              },this);
         _this.line1=this.add.sprite(818,370,'nsf1_4_line');
         _this.box=this.add.sprite(830,380,'nsf1_4_box');
         _this.box.frame=0;
            _this.box.inputEnabled=false;
    _this.box.events.onInputDown.add(function(target)
              {
        _this.clickSound.play();
        _this.numBox1Pressed =  false;     
  _this.numBox2Pressed =  false;     
  _this.numBox3Pressed =  false;     
  _this.numBox4Pressed =  false;
        _this.box1.frame=1;
         _this.box2.frame=1;
         _this.box3.frame=1;
         _this.box.frame=2;
                _this.box.name = "nsf1_4_boxA";
                _this.selectedBox = _this.box.name ;
                
              },this);
      _this.boxgroup.add(_this.box1);
      _this.boxgroup.add(_this.box2);
      _this.boxgroup.add(_this.box3);
      _this.boxgroup.add(_this.box);
      _this.boxgroup.add(_this.line);
      _this.boxgroup.add(_this.line1);
      _this.boxgroup.add(_this.cake);
         
         _this.group1.add(_this.graphics1);
         _this.group1.add(_this.graphics2);
         _this.group1.add(_this.graphics3);
         
         _this.group1.add(_this.mcake3);
         _this.group1.add(_this.mcake23);
         _this.group1.add(_this.mcake33);
         
         _this.group1.add(_this.cake1);
         _this.group1.add(_this.cake2);
         _this.group1.add(_this.cake4);
         _this.group1.add(_this.cake3);
        
         _this.rightAns1=1;
         _this.rightAns2=4;
         _this.rightAns3=1;
         _this.rightAns4=4;
         
         _this.group1.x  = 100;
         _this.group3.x  = 100;
         _this.boxgroup.x  = 100;
        _this.Mtween = _this.add.tween(_this.group1);
        _this.Mtween.to({ x:0}, 0, 'Linear', true, 0);
          _this.Matween = _this.add.tween(_this.group3);
        _this.Matween.to({ x:0}, 0, 'Linear', true, 0);
         _this.M1tween = _this.add.tween(_this.boxgroup);
        _this.M1tween.to({ x:0}, 0, 'Linear', true, 0);
    },
    
    /************************check answer***********************/
    checkAns:function(target)
	{ 
        target.input.enableDrag(true);
		_this.clickSound.play();
        console.log("count"+_this.count2);
       if(_this.Question==1) {
         _this.cake1.events.onDragStop.add(_this.match1,this);
         _this.cake2.events.onDragStop.add(_this.match2,this);
         _this.cake3.events.onDragStop.add(_this.match3,this);
         _this.cake4.events.onDragStop.add(_this.match4,this);
         _this.cake5.events.onDragStop.add(_this.match5,this);
         _this.cake6.events.onDragStop.add(_this.match6,this);
         _this.cake7.events.onDragStop.add(_this.match7,this);
         _this.cake8.events.onDragStop.add(_this.match8,this); 
         _this.mcake3.events.onDragStop.add(_this.small1,this); 
         _this.mcake23.events.onDragStop.add(_this.small2,this); 
         _this.mcake33.events.onDragStop.add(_this.small3,this); 
         _this.mcake43.events.onDragStop.add(_this.small4,this); 
         _this.mcake53.events.onDragStop.add(_this.small5,this); 
         _this.mcake63.events.onDragStop.add(_this.small6,this); 
       }
        if(_this.Question==2){
         _this.cake1.events.onDragStop.add(_this.match1,this);
         _this.cake2.events.onDragStop.add(_this.match2,this);
         _this.cake3.events.onDragStop.add(_this.match3,this);
         _this.cake4.events.onDragStop.add(_this.match4,this);
         _this.cake5.events.onDragStop.add(_this.match5,this);
         _this.cake6.events.onDragStop.add(_this.match6,this);
         _this.cake7.events.onDragStop.add(_this.match7,this);
         _this.cake8.events.onDragStop.add(_this.match8,this);
         _this.cake9.events.onDragStop.add(_this.match9,this);
         _this.cake10.events.onDragStop.add(_this.match10,this);
         _this.cake11.events.onDragStop.add(_this.match11,this);
         _this.cake12.events.onDragStop.add(_this.match12,this);
         _this.cake13.events.onDragStop.add(_this.match13,this);
         _this.cake14.events.onDragStop.add(_this.match14,this);
         _this.cake15.events.onDragStop.add(_this.match15,this);
          _this.cake16.events.onDragStop.add(_this.match16,this);
            
         _this.mcake3.events.onDragStop.add(_this.small1,this); 
         _this.mcakes4.events.onDragStop.add(_this.small1,this); 
         _this.mcake23.events.onDragStop.add(_this.small2,this); 
         _this.mcakes24.events.onDragStop.add(_this.small2,this); 
         _this.mcake33.events.onDragStop.add(_this.small3,this); 
         _this.mcakes34.events.onDragStop.add(_this.small3,this); 
         _this.mcake43.events.onDragStop.add(_this.small4,this); 
         _this.mcakes44.events.onDragStop.add(_this.small4,this); 
         _this.mcake53.events.onDragStop.add(_this.small5,this); 
         _this.mcakes54.events.onDragStop.add(_this.small5,this); 
         _this.mcake63.events.onDragStop.add(_this.small6,this); 
         _this.mcakes64.events.onDragStop.add(_this.small6,this); 
        }
       if(_this.Question==3){
              _this.cake1.events.onDragStop.add(_this.match1,this);
         _this.cake2.events.onDragStop.add(_this.match2,this);
         _this.cake3.events.onDragStop.add(_this.match3,this);
         _this.cake4.events.onDragStop.add(_this.match4,this);
         _this.cake5.events.onDragStop.add(_this.match5,this);
         _this.cake6.events.onDragStop.add(_this.match6,this);
        _this.cake7.events.onDragStop.add(_this.match7,this);
         _this.cake8.events.onDragStop.add(_this.match8,this);
           _this.mcake3.events.onDragStop.add(_this.small1,this); 
         _this.mcake23.events.onDragStop.add(_this.small2,this); 
         _this.mcake33.events.onDragStop.add(_this.small3,this); 
         _this.mcake43.events.onDragStop.add(_this.small4,this); 
         _this.mcake53.events.onDragStop.add(_this.small5,this); 
       } 
         if(_this.Question==4){
            _this.cake1.events.onDragStop.add(_this.match1,this);
            _this.cake2.events.onDragStop.add(_this.match2,this);
            _this.cake3.events.onDragStop.add(_this.match3,this);
            _this.cake4.events.onDragStop.add(_this.match4,this);
            _this.cake5.events.onDragStop.add(_this.match5,this);
            _this.cake6.events.onDragStop.add(_this.match6,this);
            _this.cake7.events.onDragStop.add(_this.match7,this);
            _this.cake8.events.onDragStop.add(_this.match8,this);
            _this.cake9.events.onDragStop.add(_this.match9,this);
            _this.cake10.events.onDragStop.add(_this.match10,this);
            _this.cake11.events.onDragStop.add(_this.match11,this);
            _this.cake12.events.onDragStop.add(_this.match12,this);
            _this.cake13.events.onDragStop.add(_this.match13,this);
            _this.cake14.events.onDragStop.add(_this.match14,this);
            _this.cake15.events.onDragStop.add(_this.match15,this);
            _this.cake16.events.onDragStop.add(_this.match16,this);
             
             _this.mcake3.events.onDragStop.add(_this.small1,this); 
             _this.mcakes4.events.onDragStop.add(_this.small1,this); 
             _this.mcakes5.events.onDragStop.add(_this.small1,this); 
             _this.mcake23.events.onDragStop.add(_this.small2,this); 
             _this.mcakes24.events.onDragStop.add(_this.small2,this); 
             _this.mcakes25.events.onDragStop.add(_this.small2,this); 
             _this.mcake33.events.onDragStop.add(_this.small3,this); 
             _this.mcakes34.events.onDragStop.add(_this.small3,this); 
             _this.mcakes35.events.onDragStop.add(_this.small3,this); 
             _this.mcake43.events.onDragStop.add(_this.small4,this); 
             _this.mcakes44.events.onDragStop.add(_this.small4,this); 
             _this.mcakes45.events.onDragStop.add(_this.small4,this); 
             _this.mcake53.events.onDragStop.add(_this.small5,this); 
             _this.mcakes54.events.onDragStop.add(_this.small5,this); 
             _this.mcakes55.events.onDragStop.add(_this.small5,this); 
             /*_this.mcake63.events.onDragStop.add(_this.small6,this); 
             _this.mcakes64.events.onDragStop.add(_this.small6,this);
             _this.mcake73.events.onDragStop.add(_this.small7,this); 
             _this.mcakes74.events.onDragStop.add(_this.small7,this);*/
        }
         if(_this.Question==5){
         _this.cake1.events.onDragStop.add(_this.match1,this);
         _this.cake2.events.onDragStop.add(_this.match2,this);
         _this.cake3.events.onDragStop.add(_this.match3,this);
         _this.cake4.events.onDragStop.add(_this.match4,this);
         _this.cake5.events.onDragStop.add(_this.match5,this);
         _this.mcake3.events.onDragStop.add(_this.small1,this); 
         _this.mcake23.events.onDragStop.add(_this.small2,this); 
         _this.mcake33.events.onDragStop.add(_this.small3,this); 
         _this.mcake43.events.onDragStop.add(_this.small4,this);
       } 
         if(_this.Question==6){
         _this.cake1.events.onDragStop.add(_this.match1,this);
         _this.cake2.events.onDragStop.add(_this.match2,this);
         _this.cake3.events.onDragStop.add(_this.match3,this);
         _this.cake4.events.onDragStop.add(_this.match4,this);
         _this.cake5.events.onDragStop.add(_this.match5,this);
         _this.mcake3.events.onDragStop.add(_this.small1,this); 
         _this.mcake23.events.onDragStop.add(_this.small2,this); 
         _this.mcake33.events.onDragStop.add(_this.small3,this); 
       } 
         if(_this.Question==7){
         _this.cake1.events.onDragStop.add(_this.match1,this);
         _this.cake2.events.onDragStop.add(_this.match2,this);
         _this.cake3.events.onDragStop.add(_this.match3,this);
         _this.cake4.events.onDragStop.add(_this.match4,this);
         _this.cake5.events.onDragStop.add(_this.match5,this); 
         _this.mcake3.events.onDragStop.add(_this.small1,this); 
         _this.mcake23.events.onDragStop.add(_this.small2,this); 
         _this.mcakes4.events.onDragStop.add(_this.small1,this);
         _this.mcakes24.events.onDragStop.add(_this.small2,this);
       } 
        if(_this.Question==8) {
         _this.cake1.events.onDragStop.add(_this.match1,this);
         _this.cake2.events.onDragStop.add(_this.match2,this);
         _this.cake3.events.onDragStop.add(_this.match3,this);
        _this.cake4.events.onDragStop.add(_this.match4,this);
         _this.cake5.events.onDragStop.add(_this.match5,this);
        _this.cake6.events.onDragStop.add(_this.match6,this);
         _this.cake7.events.onDragStop.add(_this.match7,this); 
          _this.mcake3.events.onDragStop.add(_this.small1,this); 
         _this.mcake23.events.onDragStop.add(_this.small2,this); 
         _this.mcake33.events.onDragStop.add(_this.small3,this); 
         _this.mcake43.events.onDragStop.add(_this.small4,this);
       }
        if(_this.Question==9){
         _this.cake1.events.onDragStop.add(_this.match1,this);
         _this.cake2.events.onDragStop.add(_this.match2,this);
         _this.cake3.events.onDragStop.add(_this.match3,this);
         _this.cake4.events.onDragStop.add(_this.match4,this);
         _this.mcake3.events.onDragStop.add(_this.small1,this); 
         _this.mcake23.events.onDragStop.add(_this.small2,this); 
         _this.mcake33.events.onDragStop.add(_this.small3,this); 
       } 
    },
    /*********************smallcake drag function***************/
    small1:function(target)
    {
      _this.snapSound.play();
        if(_this.Question==1||_this.Question==3)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<8;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics1.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                    
                    if(_this.mcake23.visible==false)
                        {
                           _this.mcake23.visible=true; 
                            _this.mcake23.inputEnabled=true;
                            target.visible=false;
                            target.inputEnabled=false;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                            _this.graphics2.canAdd--;
                            _this.graphics1.canAdd++;
                        }
                   else
                         {
                             target.x=_this.mcake3X;
                             target.y=_this.mcake3Y;   
                         }
                }
            else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                             target.visible=false;
                             target.inputEnabled=false;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    else{
                        target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;
                        }
                }
            else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==false)
                         {
                             _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                                _this.graphics1.canAdd++;
                         }
                    else{
                        target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;
                        }
                }
            else if(_this.checkOverlap(_this.graphics5,target))
                {
                    
                    if(_this.mcake53.visible==false)
                         {
                             _this.mcake53.inputEnabled=true;
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake53.visible=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                             _this.graphics1.canAdd++;
                         }
                    else{
                        target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;
                        }
                }
            else if(_this.Question==1&&_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                             _this.graphics6.canAdd--;
                             _this.graphics1.canAdd++;
                         }
                    else{
                        target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;
                        }
                }
            target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
          }  
        if(_this.Question==5||_this.Question==6||_this.Question==7)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<5;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics1.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==true)
                    {
                        if(_this.Question==7&&_this.mcakes24.visible==false)
                         {
                             _this.mcakes24.visible=true;
                             _this.mcakes24.inputEnabled=true;
                             target.visible=false;
                             target.inputEnabled=false;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                else
                    {
                        
                        if(_this.mcake23.visible==false)
                         {
                             _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                             target.visible=false;
                             target.inputEnabled=false;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                        
                         target.x=_this.mcake3X;
                         target.y=_this.mcake3Y; 
                            if(_this.Question==7)
                                {
                                 _this.mcakes4.x=_this.mcakes4X;
                           _this.mcakes4.y=_this.mcakes4Y;   
                                }
                       
                    
                }
           else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);  
                             _this.graphics3.canAdd--;
                        _this.graphics1.canAdd++;
                         }
                    else
                        {
                           target.x=_this.mcake3X;
                            target.y=_this.mcake3Y; 
                        }
                    
                }
            else if(_this.Question==5&&_this.checkOverlap(_this.graphics4,target))
                {
                    
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics4.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    else {
                        target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;
                    }
                    
                }
            target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
            if(_this.Question==7)
                {
                 _this.mcakes4.x=_this.mcakes4X;
           _this.mcakes4.y=_this.mcakes4Y;   
                }
            
          }
        if(_this.Question==8)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<7;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics1.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                        if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                            _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                              _this.graphics2.canAdd--;
                                _this.graphics1.canAdd++;
                         }
                    else{
                         target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;
                    }
                   
                }
           else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    else{
                      target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;  
                    }
                }
            else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    else{
                         target.x=_this.mcake3X;
                         target.y=_this.mcake3Y; 
                    }
                }
            target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
          }
        if(_this.Question==9)
            {
             if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<4;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics1.canAdd++;
            }
                else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    else{
                        target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;
                    } 
                }
            else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                            _this.mcake33.events.onInputDown.add(_this.checkAns,_this);
                                _this.graphics3.canAdd--;
                                _this.graphics1.canAdd++;
                         }
                    else{
                       target.x=_this.mcake3X;
                        target.y=_this.mcake3Y; 
                    }
                }
            target.x=_this.mcake3X;
            target.y=_this.mcake3Y;   
            }
        if(_this.Question==2||_this.Question==4)
            {
               if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<16;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics1.canAdd++;
            }
             else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                        if(_this.mcakes24.visible==false)
                         {
                             _this.mcakes24.visible=true;
                             target.visible=false;
                             target.inputEnabled=false;
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                        if(_this.mcakes25.visible==false)
                         {
                             _this.mcakes25.visible=true;
                             target.visible=false;
                             target.inputEnabled=false;
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake23.visible==false)
                         {
                                _this.mcake23.visible=true;
                                target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                         target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
            _this.mcakes4.x=_this.mcakes4X;
            _this.mcakes4.y=_this.mcakes4Y;  
            _this.mcakes5.x=_this.mcakes5X;
            _this.mcakes5.y=_this.mcakes5Y;       
                }
                 else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                      
                        if(_this.mcakes34.visible==false )
                         {
                              target.visible=false;
                             target.inputEnabled=false;
                             _this.mcakes34.visible=true;
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics3.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                      
                        if(_this.mcakes35.visible==false)
                         {
                              target.visible=false;
                             target.inputEnabled=false;
                             _this.mcakes35.visible=true;
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics3.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                             target.inputEnabled=false;
                              _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                    
                        target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
            _this.mcakes4.x=_this.mcakes4X;
            _this.mcakes4.y=_this.mcakes4Y;
            _this.mcakes5.x=_this.mcakes5X;
            _this.mcakes5.y=_this.mcakes5Y;  
                    
                }
                 else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==true&& _this.mcakes44.visible==false)
                    {
                        if(_this.mcakes44.visible==false )
                         {
                             target.visible=false;
                             target.inputEnabled=false;
                             _this.mcakes44.visible=true;
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                        if(_this.mcakes45.visible==false)
                         {
                             target.visible=false;
                             target.inputEnabled=false;
                             _this.mcakes45.visible=true;
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                   
                        target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
            _this.mcakes4.x=_this.mcakes4X;
            _this.mcakes4.y=_this.mcakes4Y;
            _this.mcakes5.x=_this.mcakes5X;
            _this.mcakes5.y=_this.mcakes5Y; 
                    
                }
                 else if(_this.checkOverlap(_this.graphics5,target))
                {
                    if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                        if(_this.mcakes54.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes54.visible=true;
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                        if(_this.mcakes55.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes55.visible=true;
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                else
                    {
                        
                        if(_this.mcake53.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake53.visible=true;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics5.canAdd--;
                    _this.graphics1.canAdd++;
                         }
                    }
                    
                        target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
            _this.mcakes4.x=_this.mcakes4X;
            _this.mcakes4.y=_this.mcakes4Y;
            _this.mcakes5.x=_this.mcakes5X;
            _this.mcakes5.y=_this.mcakes5Y; 
                    
                }
                 else if(_this.Question==2&&_this.checkOverlap(_this.graphics6,target))
                {
                    
                    if(_this.mcake63.visible==true)
                    {
                     
                        if(_this.mcakes64.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                              _this.mcakes64.visible=true;
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                else
                    {
                        
                        if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                  
                            target.x=_this.mcake3X;
                        target.y=_this.mcake3Y;
                    _this.mcakes4.x=_this.mcakes4X;
                    _this.mcakes4.y=_this.mcakes4Y;
                    _this.mcakes5.x=_this.mcakes5X;
            _this.mcakes5.y=_this.mcakes5Y; 
                   
                    
                }
                /* else if(_this.Question==4&&_this.checkOverlap(_this.graphics7,target))
                {
                    if(_this.mcake73.visible==true)
                    {
                        if(_this.mcakes74.visible==true)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes74.visible=true;
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake73.visible==true)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake73.visible=true;
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                            _this.graphics1.canAdd++;
                         }
                    }
                  
                     target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
            _this.mcakes4.x=_this.mcakes4X;
            _this.mcakes4.y=_this.mcakes4Y;  
                  
                }*/
            target.x=_this.mcake3X;
            target.y=_this.mcake3Y;
            _this.mcakes4.x=_this.mcakes4X;
            _this.mcakes4.y=_this.mcakes4Y;   
            _this.mcakes5.x=_this.mcakes5X;
            _this.mcakes5.y=_this.mcakes5Y; 
            }
    },
     small2:function(target)
    {
      _this.snapSound.play();
        if(_this.Question==1||_this.Question==3)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                for(var i=0;i<8;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics2.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                            _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this); 
                              _this.graphics1.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                   else{
                       target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
                   }
                }
            else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                    _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);  
                             _this.graphics3.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    else{
                       target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
                   }
                }
            else if(_this.checkOverlap(_this.graphics4,target))
                { 
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                        target.inputEnabled=false;
                        _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    else{
                       target.x=_this.mcake23X;
                    target.y=_this.mcake23Y;
                   }
                }
            else if(_this.checkOverlap(_this.graphics5,target))
                {
                   
                    if(_this.mcake53.visible==false)
                         {
                              target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake53.visible=true;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    else{
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                    } 
                }
            else if(_this.Question==1&&_this.checkOverlap(_this.graphics6,target))
                {
                    
                    if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                                _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    else{
                        target.x=_this.mcake23X;
                            target.y=_this.mcake23Y;
                    }
                }
            target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
          }
          if(_this.Question==5||_this.Question==6||_this.Question==7)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<5;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics2.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==true)
                    {
                        if(_this.Question==7&&_this.mcakes4.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes4.visible=true;
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics1.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                 
                     target.x=_this.mcake23X;
                    target.y=_this.mcake23Y;
                    if(_this.Question==7)
                        {
                         _this.mcakes24.x=_this.mcakes24X;
                        _this.mcakes24.y=_this.mcakes24Y;   
                        }
                    
                }
            else if(_this.checkOverlap(_this.graphics3,target))
                {
                    
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                            _this.graphics2.canAdd++;
                         }
                    else{
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                    }
                    
                }
           else  if(_this.Question==5&&_this.checkOverlap(_this.graphics4,target))
                {
                    
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics4.canAdd--;
                            _this.graphics2.canAdd++;
                         }
                    else{
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                    }
                    
                }
            target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
            if(_this.Question==7)
                {
                 _this.mcakes24.x=_this.mcakes24X;
                _this.mcakes24.y=_this.mcakes24Y;   
                }
            
          }
        if(_this.Question==8)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                for(var i=0;i<7;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics2.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                        if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                        _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics1.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    else{
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                    }
                }
           else if(_this.checkOverlap(_this.graphics3,target))
                {
                    
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics3.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    else{
                         target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
                    }
                }
            else if(_this.checkOverlap(_this.graphics4,target))
                {
                   
                    if(_this.mcake43.visible==false)
                         {
                              target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this); 
                               _this.graphics4.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                  else{
                    target.x=_this.mcake23X;
            target.y=_this.mcake23Y;  
                  }
                }
            target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
          }
        if(_this.Question==9)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<4;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics2.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                                _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this); 
                                         _this.graphics1.canAdd--;
                                _this.graphics2.canAdd++;
                         }
                    else{
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                    }
                }
            else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                                _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    else{
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                    }
                }
            target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
          }
        if(_this.Question==2||_this.Question==4)
            {
               if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<16;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics2.canAdd++;
            }
             else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                      
                        if(_this.mcakes4.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes4.visible=true;
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                      
                        if(_this.mcakes5.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes5.visible=true;
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                else
                    {
                        
                        if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                  
                        target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
            _this.mcakes24.x=_this.mcakes24X;
            _this.mcakes24.y=_this.mcakes24Y;
                   
                    
                }
                 else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    { 
                        if(_this.mcakes34.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                              _this.mcakes34.visible=true;
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this); 
                              _this.graphics3.canAdd--;
                            _this.graphics2.canAdd++;
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    { 
                        if(_this.mcakes35.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                              _this.mcakes35.visible=true;
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this); 
                              _this.graphics3.canAdd--;
                            _this.graphics2.canAdd++;
                         }
                    }
                else
                    { 
                        if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);
                              _this.graphics3.canAdd--;
                            _this.graphics2.canAdd++;
                         }
                    }
                
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                        _this.mcakes24.x=_this.mcakes24X;
                        _this.mcakes24.y=_this.mcakes24Y;
                    
                }
                 else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                      
                        if(_this.mcakes44.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes44.visible=true;
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                      
                        if(_this.mcakes45.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes45.visible=true;
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                else
                    {
                        
                        if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                   
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                        _this.mcakes24.x=_this.mcakes24X;
                        _this.mcakes24.y=_this.mcakes24Y;
                    
                }
                 else if(_this.checkOverlap(_this.graphics5,target))
                {
                    if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    { 
                        if(_this.mcakes54.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes54.visible=true;
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                                _this.graphics2.canAdd++;
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    { 
                        if(_this.mcakes55.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes55.visible=true;
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                                _this.graphics2.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake53.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake53.visible=true;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics5.canAdd--;
                                _this.graphics2.canAdd++;
                         }
                    }
                    
                      target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
            _this.mcakes24.x=_this.mcakes24X;
            _this.mcakes24.y=_this.mcakes24Y;   
                    
                }
                 else if(_this.Question==2&&_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==true)
                    { 
                        if(_this.mcakes64.visible==false)
                         {
                              target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes64.visible=true;
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake63.visible==false)
                         {
                              target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics6.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                    
                            target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                        _this.mcakes24.x=_this.mcakes24X;
                        _this.mcakes24.y=_this.mcakes24Y;   
                    
                }
                 /*else if(_this.Question==4&&_this.checkOverlap(_this.graphics7,target))
                {
                    if(_this.mcake73.visible==true)
                    {
                        if(_this.mcakes74.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes74.visible=true; 
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);
                              _this.graphics7.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
                else
                    { 
                        if(_this.mcake73.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake73.visible=true;
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);
                              _this.graphics7.canAdd--;
                    _this.graphics2.canAdd++;
                         }
                    }
           
                        target.x=_this.mcake23X;
                        target.y=_this.mcake23Y;
                        _this.mcakes24.x=_this.mcakes24X;
                        _this.mcakes24.y=_this.mcakes24Y;   
            
                }*/  
            target.x=_this.mcake23X;
            target.y=_this.mcake23Y;
            _this.mcakes24.x=_this.mcakes24X;
            _this.mcakes24.y=_this.mcakes24Y;
             _this.mcakes25.x=_this.mcakes25X;
            _this.mcakes25.y=_this.mcakes25Y;   
            }
    },
     small3:function(target)
    {
      _this.snapSound.play();
        if(_this.Question==1||_this.Question==3)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<8;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics3.canAdd++;
                
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                       target.x=_this.mcake33X;
                        target.y=_this.mcake33Y; 
                    }
                }
           else  if(_this.checkOverlap(_this.graphics1,target))
                {
                    
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);  
                             _this.graphics1.canAdd--;
                            _this.graphics3.canAdd++;
                         }
                    else{
                       target.x=_this.mcake33X;
                        target.y=_this.mcake33Y; 
                    }
                }
           else  if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                       target.x=_this.mcake33X;
                        target.y=_this.mcake33Y; 
                    }
                }
            else if(_this.checkOverlap(_this.graphics5,target))
                {
                    if(_this.mcake53.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake53.visible=true;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics5.canAdd--;
                            _this.graphics3.canAdd++;
                         }
                    else{
                       target.x=_this.mcake33X;
                        target.y=_this.mcake33Y; 
                    }
                }
           else  if(_this.Question==1&&_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                            _this.graphics3.canAdd++;
                         }
                    else{
                       target.x=_this.mcake33X;
                        target.y=_this.mcake33Y; 
                    }
                }
            target.x=_this.mcake33X;
            target.y=_this.mcake33Y;
          } 
       if(_this.Question==5||_this.Question==6)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<5;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics3.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                        target.x=_this.mcake33X;
                        target.y=_this.mcake33Y;
                    } 
                }
           else  if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                                _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                        target.x=_this.mcake33X;
                        target.y=_this.mcake33Y;
                    } 
                }
            else if(_this.Question==5&&_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics4.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                        target.x=_this.mcake33X;
                        target.y=_this.mcake33Y;
                    } 
                }
            target.x=_this.mcake33X;
            target.y=_this.mcake33Y;
          }
       if(_this.Question==8)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<7;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics3.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                        if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                        target.x=_this.mcake33X;
                        target.y=_this.mcake33Y;
                    }
                }
           else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                        target.x=_this.mcake33X;
                        target.y=_this.mcake33Y;
                    }
                }
            else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                    _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                        target.x=_this.mcake33X;
                        target.y=_this.mcake33Y;
                    }
                }
            target.x=_this.mcake33X;
            target.y=_this.mcake33Y;
          }
        if(_this.Question==9)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<4;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics3.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                    
                    if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                        target.x=_this.mcake33X;
                        target.y=_this.mcake33Y;
                    }
                }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                                _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    else{
                        target.x=_this.mcake33X;
                        target.y=_this.mcake33Y;
                    }
                }
            target.x=_this.mcake33X;
            target.y=_this.mcake33Y;
          }
        if(_this.Question==2||_this.Question==4)
            {
               if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<16;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics3.canAdd++;
            }
                else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                        if(_this.mcakes24.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes24.visible=true; 
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                        if(_this.mcakes25.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes25.visible=true; 
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                   
                      target.x=_this.mcake33X;
                    target.y=_this.mcake33Y;
                    _this.mcakes34.x=_this.mcakes34X;
                    _this.mcakes34.y=_this.mcakes34Y;  
                    
                }
                 else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                        if(_this.mcakes4.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcakes4.visible=true; 
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                        if(_this.mcakes5.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcakes5.visible=true; 
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                    
                      target.x=_this.mcake33X;
                    target.y=_this.mcake33Y;
                    _this.mcakes34.x=_this.mcakes34X;
                    _this.mcakes34.y=_this.mcakes34Y;  
                   
                }
                 else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     
                        if(_this.mcakes44.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcakes44.visible=true; 
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     
                        if(_this.mcakes45.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcakes45.visible=true; 
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                else
                    {
                        
                        if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                   
                      target.x=_this.mcake33X;
                    target.y=_this.mcake33Y;
                    _this.mcakes34.x=_this.mcakes34X;
                    _this.mcakes34.y=_this.mcakes34Y;  
                
                }
                 else if(_this.checkOverlap(_this.graphics5,target))
                {
                    if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                        if(_this.mcakes54.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes54.visible=true; 
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics5.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                        if(_this.mcakes55.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes55.visible=true; 
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics5.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake53.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake53.visible=true;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                  
                      target.x=_this.mcake33X;
                    target.y=_this.mcake33Y;
                    _this.mcakes34.x=_this.mcakes34X;
                    _this.mcakes34.y=_this.mcakes34Y;  
                 
                }
                 else if(_this.Question==2&&_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==true)
                    {
                     
                        if(_this.mcakes64.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcakes64.visible=true; 
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                else
                    {
                        
                        if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                  
                      target.x=_this.mcake33X;
                    target.y=_this.mcake33Y;
                    _this.mcakes34.x=_this.mcakes34X;
                    _this.mcakes34.y=_this.mcakes34Y;  
                   
                }
                /* else if(_this.Question==4&&_this.checkOverlap(_this.graphics7,target))
                {
                    
                    if(_this.mcake73.visible==true)
                    {
                        if(_this.mcakes74.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                              _this.mcakes74.visible=true; 
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake73.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                             _this.mcake73.visible=true;
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                    _this.graphics3.canAdd++;
                         }
                    }
                   
                      target.x=_this.mcake33X;
                    target.y=_this.mcake33Y;
                    _this.mcakes34.x=_this.mcakes34X;
                    _this.mcakes34.y=_this.mcakes34Y;  
                }*/
            target.x=_this.mcake33X;
            target.y=_this.mcake33Y;
            _this.mcakes34.x=_this.mcakes34X;
            _this.mcakes34.y=_this.mcakes34Y;
            _this.mcakes35.x=_this.mcakes35X;
            _this.mcakes35.y=_this.mcakes35Y;    
            }
    },
     small4:function(target)
    {
      _this.snapSound.play();
        if(_this.Question==1||_this.Question==3)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<8;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics4.canAdd++;
                
            }
           else  if(_this.checkOverlap(_this.graphics2,target))
                {
                    
                    if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                              _this.graphics2.canAdd--;
                                _this.graphics4.canAdd++;
                         }
                   else{
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                   }
                }
            else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                                _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);
                              _this.graphics3.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    else{
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                   }
                }
           else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                             target.inputEnabled=false;
                                _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    else{
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                   }
                }
            else if(_this.checkOverlap(_this.graphics5,target))
                {
                    if(_this.mcake53.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake53.visible=true;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this); 
                              _this.graphics5.canAdd--;
                                _this.graphics4.canAdd++;
                         }
                    else{
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                   }
                }
            else if(_this.Question==1&&_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                            _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    else{
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                   }
                }
            target.x=_this.mcake43X;
            target.y=_this.mcake43Y;
          }
        if(_this.Question==5)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<5;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics4.canAdd++;
            }
           else  if(_this.checkOverlap(_this.graphics2,target))
                {
                    
                    if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                                _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                                _this.graphics4.canAdd++;
                         }
                    else{
                       target.x=_this.mcake43X;
                            target.y=_this.mcake43Y; 
                    }
                }
           else  if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                                _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);  
                              _this.graphics3.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    else{
                       target.x=_this.mcake43X;
                            target.y=_this.mcake43Y; 
                    }
                }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                                    target.inputEnabled=false;
                                _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                                _this.graphics4.canAdd++;
                         }
                    else{
                       target.x=_this.mcake43X;
                            target.y=_this.mcake43Y; 
                    }
                }
            target.x=_this.mcake43X;
            target.y=_this.mcake43Y;
          }
       if(_this.Question==8)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<7;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics4.canAdd++;
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                        if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                             target.inputEnabled=false;
                        _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                    _this.graphics4.canAdd++;
                         }
                    else{
                        target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                    }
                }
           else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                     else{
                        target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                    }
                }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics1.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                     else{
                        target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                    }
                }
            target.x=_this.mcake43X;
            target.y=_this.mcake43Y;
          }
        if(_this.Question==2||_this.Question==4)
            {
               if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<16;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics4.canAdd++;
            }
                else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                        if(_this.mcakes24.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes24.visible=true;
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                        if(_this.mcakes25.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes25.visible=true;
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                        _this.mcakes44.x=_this.mcakes44X;
                        _this.mcakes44.y=_this.mcakes44Y; 
                }
                 else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                        if(_this.mcakes34.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes34.visible=true; 
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics3.canAdd--;
                         _this.graphics4.canAdd++;
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                        if(_this.mcakes35.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes35.visible=true; 
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics3.canAdd--;
                         _this.graphics4.canAdd++;
                         }
                    }
                else
                    {
                        
                        if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics3.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                        _this.mcakes44.x=_this.mcakes44X;
                        _this.mcakes44.y=_this.mcakes44Y;  
                }
                 else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                        if(_this.mcakes4.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes4.visible=true;
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                        if(_this.mcakes5.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes5.visible=true;
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                        _this.mcakes44.x=_this.mcakes44X;
                        _this.mcakes44.y=_this.mcakes44Y;  
                }
                 else if(_this.checkOverlap(_this.graphics5,target))
                {
                    if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    { 
                        if(_this.mcakes54.visible==false)
                         {
                              _this.mcakes54.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    { 
                        if(_this.mcakes55.visible==false)
                         {
                              _this.mcakes55.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake53.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake53.visible=true;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                        _this.mcakes44.x=_this.mcakes44X;
                        _this.mcakes44.y=_this.mcakes44Y;  
                }
                 else if(_this.Question==2&&_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==true)
                    {
                        if(_this.mcakes64.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                              _this.mcakes64.visible=true;
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics6.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                else
                    { 
                        if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics6.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                        _this.mcakes44.x=_this.mcakes44X;
                        _this.mcakes44.y=_this.mcakes44Y;  
                }
                /* else if(_this.Question==4&&_this.checkOverlap(_this.graphics7,target))
                {
                    if(_this.mcake73.visible==true)
                    {
                        if(_this.mcakes74.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes74.visible=true; 
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake73.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake73.visible=true;
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                            _this.graphics4.canAdd++;
                         }
                    }
                       target.x=_this.mcake43X;
                        target.y=_this.mcake43Y;
                        _this.mcakes44.x=_this.mcakes44X;
                        _this.mcakes44.y=_this.mcakes44Y;  
                }*/
            target.x=_this.mcake43X;
            target.y=_this.mcake43Y;
            _this.mcakes44.x=_this.mcakes44X;
            _this.mcakes44.y=_this.mcakes44Y;
             _this.mcakes45.x=_this.mcakes45X;
            _this.mcakes45.y=_this.mcakes45Y;   
            }
    },
     small5:function(target)
    {
      _this.snapSound.play();
        if(_this.Question==1||_this.Question==3)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<8;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics5.canAdd++;
                
            }
           else  if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                                _this.graphics5.canAdd++;
                         }
                    else{
                       target.x=_this.mcake53X;
                        target.y=_this.mcake53Y; 
                    }
                }
            else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                    _this.graphics5.canAdd++;
                         }
                    else{
                       target.x=_this.mcake53X;
                        target.y=_this.mcake53Y; 
                    }
                }
            else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                                target.inputEnabled=false;
                            _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this); 
                              _this.graphics4.canAdd--;
                        _this.graphics5.canAdd++;
                         }
                    else{
                       target.x=_this.mcake53X;
                        target.y=_this.mcake53Y; 
                    }
                }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics1.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    else{
                       target.x=_this.mcake53X;
                        target.y=_this.mcake53Y; 
                    }
                }
            else if(_this.Question==1&&_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                             target.inputEnabled=false;
                                _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    
                    else{
                       target.x=_this.mcake53X;
                        target.y=_this.mcake53Y; 
                    }
                }
            target.x=_this.mcake53X;
            target.y=_this.mcake53Y;
          } 
        if(_this.Question==2||_this.Question==4)
            {
               if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<16;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics5.canAdd++;
            }
                else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                        if(_this.mcakes24.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes24.visible=true;
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                                _this.graphics5.canAdd++;
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                        if(_this.mcakes25.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes25.visible=true;
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                                _this.graphics5.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                              _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                                _this.graphics5.canAdd++;
                         }
                    }
                    target.x=_this.mcake53X;
                        target.y=_this.mcake53Y;
                        _this.mcakes54.x=_this.mcakes54X;
                        _this.mcakes54.y=_this.mcakes54Y;
                }
                 else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                        if(_this.mcakes34.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes34.visible=true; 
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                        if(_this.mcakes35.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes35.visible=true; 
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                else
                    { 
                        if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                    target.x=_this.mcake53X;
                    target.y=_this.mcake53Y;
                    _this.mcakes54.x=_this.mcakes54X;
                    _this.mcakes54.y=_this.mcakes54Y;
                }
                 else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                        if(_this.mcakes44.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes44.visible=true;
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                        if(_this.mcakes45.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes45.visible=true;
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                         _this.graphics5.canAdd++;
                         }
                    }
                    target.x=_this.mcake53X;
                    target.y=_this.mcake53Y;
                    _this.mcakes54.x=_this.mcakes54X;
                    _this.mcakes54.y=_this.mcakes54Y;
                }
                 else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                        if(_this.mcakes4.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes4.visible=true;
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics1.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                        if(_this.mcakes5.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes5.visible=true;
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics1.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                    target.x=_this.mcake53X;
                    target.y=_this.mcake53Y;
                    _this.mcakes54.x=_this.mcakes54X;
                    _this.mcakes54.y=_this.mcakes54Y;
                }
                 else if(_this.Question==2&&_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==true)
                    {
                        if(_this.mcakes64.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                              _this.mcakes64.visible=true; 
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                        _this.graphics5.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake63.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake63.visible=true;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                      _this.graphics5.canAdd++;
                         }
                    }
                    target.x=_this.mcake53X;
                    target.y=_this.mcake53Y;
                    _this.mcakes54.x=_this.mcakes54X;
                    _this.mcakes54.y=_this.mcakes54Y;
                }
                /* else if(_this.Question==4&&_this.checkOverlap(_this.graphics7,target))
                {
                    if(_this.mcake73.visible==true)
                    {
                        if(_this.mcakes74.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes74.visible=true; 
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics7.canAdd--;
                         _this.graphics5.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake73.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake73.visible=true;
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                            _this.graphics5.canAdd++;
                         }
                    }
                    target.x=_this.mcake53X;
                    target.y=_this.mcake53Y;
                    _this.mcakes54.x=_this.mcakes54X;
                    _this.mcakes54.y=_this.mcakes54Y;
                }*/
            target.x=_this.mcake53X;
            target.y=_this.mcake53Y;
            _this.mcakes54.x=_this.mcakes54X;
            _this.mcakes54.y=_this.mcakes54Y; 
            _this.mcakes55.x=_this.mcakes55X;
            _this.mcakes55.y=_this.mcakes55Y;  
            }
    },
     small6:function(target)
    {
      _this.snapSound.play();
        if(_this.Question==1)
        {
              if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<8;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics6.canAdd++;
                
            }
            else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==false)
                         {
                             target.visible=false;
                            target.inputEnabled=false;
                            _this.mcake23.visible=true;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                            _this.graphics6.canAdd++;
                         }
                    else{
                       target.x=_this.mcake63X;
                        target.y=_this.mcake63Y; 
                    }
                    
                }
            else if(_this.checkOverlap(_this.graphics3,target))
                {
                    
                    if(_this.mcake33.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                    _this.mcake33.visible=true;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                              _this.graphics3.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                   
                    else{
                       target.x=_this.mcake63X;
                        target.y=_this.mcake63Y; 
                    }
                }
            else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                    _this.mcake43.visible=true;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics4.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    
                    else{
                       target.x=_this.mcake63X;
                        target.y=_this.mcake63Y; 
                    }
                }
            else if(_this.checkOverlap(_this.graphics5,target))
                {
                    if(_this.mcake53.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                    _this.mcake53.visible=true;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);
                              _this.graphics5.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    else{
                       target.x=_this.mcake63X;
                        target.y=_this.mcake63Y; 
                    }
                }
            else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==false)
                         {
                             target.visible=false;
                target.inputEnabled=false;
                    _this.mcake3.visible=true;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics1.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    else{
                       target.x=_this.mcake63X;
                        target.y=_this.mcake63Y; 
                    }
                }
            target.x=_this.mcake63X;
            target.y=_this.mcake63Y;
          }
        if(_this.Question==2/*||_this.Question==4*/)
            {
               if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<16;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics6.canAdd++;
            }
                else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==true)
                    {
                        if(_this.mcakes24.visible==false)
                         {
                             _this.mcakes24.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake23.visible==false)
                         {
                              _this.mcake23.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics2.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                    target.x=_this.mcake63X;
            target.y=_this.mcake63Y;
            _this.mcakes64.x=_this.mcakes64X;
            _this.mcakes64.y=_this.mcakes64Y;
                }
                 else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==true)
                    {
                        if(_this.mcakes34.visible==false)
                         {
                             _this.mcakes34.visible=true;
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake33.visible==false)
                         {
                             _this.mcake33.visible=true;
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                    target.x=_this.mcake63X;
            target.y=_this.mcake63Y;
            _this.mcakes64.x=_this.mcakes64X;
            _this.mcakes64.y=_this.mcakes64Y;
                }
                 else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==true)
                    {
                        if(_this.mcakes44.visible==false)
                         {
                             _this.mcakes44.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake43.visible==false)
                         {
                             _this.mcake43.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                    target.x=_this.mcake63X;
            target.y=_this.mcake63Y;
            _this.mcakes64.x=_this.mcakes64X;
            _this.mcakes64.y=_this.mcakes64Y;
                }
                 else if(_this.checkOverlap(_this.graphics5,target))
                {
                    if(_this.mcake53.visible==true)
                    {
                        if(_this.mcakes54.visible==false)
                         {
                             _this.mcakes54.visible=true;
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                                _this.graphics6.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake53.visible==false)
                         {
                             _this.mcake53.visible=true;
                             target.visible=false;
                             target.inputEnabled=false;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                                _this.graphics6.canAdd++;
                         }
                    }
                    target.x=_this.mcake63X;
            target.y=_this.mcake63Y;
            _this.mcakes64.x=_this.mcakes64X;
            _this.mcakes64.y=_this.mcakes64Y;
                }
                 else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==true)
                    {
                        if(_this.mcakes4.visible==false)
                         {
                             _this.mcakes4.visible=true; 
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake3.visible==false)
                         {
                             _this.mcake3.visible=true;
                             target.visible=false;
                         target.inputEnabled=false;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                    target.x=_this.mcake63X;
            target.y=_this.mcake63Y;
            _this.mcakes64.x=_this.mcakes64X;
            _this.mcakes64.y=_this.mcakes64Y;
                }
                 /*else if(_this.Question==4&&_this.checkOverlap(_this.graphics7,target))
                {
                    if(_this.mcake73.visible==true)
                    {
                        if(_this.mcakes74.visible==false)
                         {
                             _this.mcakes74.visible=true; 
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake73.visible==false)
                         {
                             _this.mcake73.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics7.canAdd--;
                    _this.graphics6.canAdd++;
                         }
                    }
                    target.x=_this.mcake63X;
            target.y=_this.mcake63Y;
            _this.mcakes64.x=_this.mcakes64X;
            _this.mcakes64.y=_this.mcakes64Y;
                }*/
            target.x=_this.mcake63X;
            target.y=_this.mcake63Y;
            _this.mcakes64.x=_this.mcakes64X;
            _this.mcakes64.y=_this.mcakes64Y;   
            }
    },
    /* small7:function(target)
    {
        _this.snapSound.play();
      if(_this.Question==4)
            {
               if (_this.checkOverlap(_this.plate, target))
            {
                 target.visible=false;
                target.inputEnabled=false;
                
                for(var i=0;i<16;i++)
                    {
                        if(_this["cake"+(i+1)].visible == false)
                            {
                              _this["cake"+(i+1)].visible = true;
                              _this["cake"+(i+1)].inputEnabled=true; 
                                break;
                            }
                        
                    }
                _this.count2-=1;
                _this.graphics7.canAdd++;
            }
                else if(_this.checkOverlap(_this.graphics2,target))
                {
                    if(_this.mcake23.visible==true)
                    {
                        if(_this.mcakes24.visible==false)
                         {
                             _this.mcakes24.visible=true; 
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake23.visible==false)
                         {
                             _this.mcake23.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics2.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                    target.x=_this.mcake73X;
            target.y=_this.mcake73Y;
            _this.mcakes74.x=_this.mcakes74X;
            _this.mcakes74.y=_this.mcakes74Y; 
                }
                 else if(_this.checkOverlap(_this.graphics3,target))
                {
                    if(_this.mcake33.visible==true)
                    {
                        if(_this.mcakes34.visible==false)
                         {
                             _this.mcakes34.visible=true;
                              target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics3.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake33.visible==false)
                         {
                             _this.mcake33.visible=true;
                              target.visible=false;
                                target.inputEnabled=false;
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics3.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                    
                    target.x=_this.mcake73X;
            target.y=_this.mcake73Y;
            _this.mcakes74.x=_this.mcakes74X;
            _this.mcakes74.y=_this.mcakes74Y; 
                }
                 else if(_this.checkOverlap(_this.graphics4,target))
                {
                    if(_this.mcake43.visible==true)
                    {
                        if(_this.mcakes44.visible==false)
                         {
                             _this.mcakes44.visible=true;
                             target.visible=false;
                         target.inputEnabled=false;
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake43.visible==false)
                         {
                             _this.mcake43.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics4.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                    target.x=_this.mcake73X;
            target.y=_this.mcake73Y;
            _this.mcakes74.x=_this.mcakes74X;
            _this.mcakes74.y=_this.mcakes74Y; 
                }
                 else if(_this.checkOverlap(_this.graphics5,target))
                { 
                    if(_this.mcake53.visible==true)
                    {
                        if(_this.mcakes54.visible==false)
                         {
                             _this.mcakes54.visible=true; 
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this); 
                             _this.graphics5.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake53.visible==false)
                         {
                             _this.mcake53.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics5.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                    
                    target.x=_this.mcake73X;
            target.y=_this.mcake73Y;
            _this.mcakes74.x=_this.mcakes74X;
            _this.mcakes74.y=_this.mcakes74Y; 
                }
                 else if(_this.checkOverlap(_this.graphics6,target))
                {
                    if(_this.mcake63.visible==true)
                    {
                        if(_this.mcakes64.visible==false)
                         {
                             _this.mcakes64.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake63.visible==false)
                         {
                             _this.mcake63.visible=true;
                             target.visible=false;
                            target.inputEnabled=false;
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics6.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                    target.x=_this.mcake73X;
            target.y=_this.mcake73Y;
            _this.mcakes74.x=_this.mcakes74X;
            _this.mcakes74.y=_this.mcakes74Y; 
                }
                 else if(_this.checkOverlap(_this.graphics1,target))
                {
                    if(_this.mcake3.visible==true)
                    {
                        if(_this.mcakes4.visible==false)
                         {
                             _this.mcakes4.visible=true; 
                             target.visible=false;
                                target.inputEnabled=false;
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                else
                    {
                        if(_this.mcake3.visible==false)
                         {
                              _this.mcake3.visible=true;
                             target.visible=false;
                             target.inputEnabled=false;
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);
                             _this.graphics1.canAdd--;
                    _this.graphics7.canAdd++;
                         }
                    }
                    target.x=_this.mcake73X;
            target.y=_this.mcake73Y;
            _this.mcakes74.x=_this.mcakes74X;
            _this.mcakes74.y=_this.mcakes74Y; 
                }
            target.x=_this.mcake73X;
            target.y=_this.mcake73Y;
            _this.mcakes74.x=_this.mcakes74X;
            _this.mcakes74.y=_this.mcakes74Y;   
            }  
    },*/
    /**************************cloudmatch************************/
    match1: function(target)
    {
        _this.snapSound.play();
        if(_this.Question==1)
        {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                        
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
           else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             if(_this.count2==6&&_this.addOnce)
            {
                _this.numBox1Pressed = true; 
                console.log("@@@@@@@@@@@@@@ "+_this.numBox1Pressed);
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
              target.x=_this.cake1X;
            target.y=_this.cake1Y;
          }  
        if(_this.Question==2)
       { 
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
           if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             } 
            target.x=_this.cake1X;
            target.y=_this.cake1Y;
       }
        if(_this.Question==4)
        {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true &&  _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                   else if(_this.mcake23.visible==true &&  _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true &&  _this.mcakes34.visible== false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true &&  _this.mcakes34.visible== true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
            target.x=_this.cake1X;
            target.y=_this.cake1Y;
        } 
        if(_this.Question==3)
        {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
           else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             if(_this.count2==5&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
              target.x=_this.cake1X;
            target.y=_this.cake1Y;  
            }
        if(_this.Question==5)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
           else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
              target.x=_this.cake1X;
            target.y=_this.cake1Y;   
            }
        if(_this.Question==6)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             if(_this.count2==3&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
              target.x=_this.cake1X;
            target.y=_this.cake1Y;   
            }
        if(_this.Question==7)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            
             if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
              target.x=_this.cake1X;
            target.y=_this.cake1Y;   
            }
        if(_this.Question==8)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
           else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
              target.x=_this.cake1X;
            target.y=_this.cake1Y;   
            }
        if(_this.Question==9)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake1X;
            target.y=_this.cake1Y;
            } 
             if(_this.count2==3&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
              target.x=_this.cake1X;
            target.y=_this.cake1Y;   
            }
         },
    match2: function(target)
    {
        _this.snapSound.play();
        if(_this.Question==1)
            {
                 if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
           else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
              if(_this.count2==6&&_this.addOnce)
            {
                 _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
        if(_this.Question==2)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }  
                if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             } 
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
        if(_this.Question==4)
            {
                if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
             /*else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
        if(_this.Question==3)
            {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
           else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            
              if(_this.count2==5&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake2X;
            target.y=_this.cake2Y;    
            }
        if(_this.Question==5)
            {
                 if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
           else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }  
              if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
        if(_this.Question==6)
            {
                 if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
              if(_this.count2==3&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
        if(_this.Question==7)
            {
                 if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
              if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
        if(_this.Question==8)
            {
                 if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
           else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }  
              if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
        if(_this.Question==9)
            {
                 if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake2X;
            target.y=_this.cake2Y;
            } 
              if(_this.count2==3&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake2X;
            target.y=_this.cake2Y;
            }
    },
    match3:function(target)
    {
         _this.snapSound.play();
            if(_this.Question==1)
                {
                  if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                 if(_this.mcake3.visible==true)
                        {
                         _this.mcakes4.visible=true; 
                            _this.count2+=1;
                        }
                    else
                        {
                            _this.mcake3.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake3.visible==true)
                             {
                                 _this.mcake3.inputEnabled=true;
                              _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics1.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                }
                else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake23.visible==true)
                        {
                         _this.mcakes24.visible=true;  
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake23.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake3.visible==true)
                             {
                                 _this.mcake23.inputEnabled=true;
                              _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics2.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake33.visible==true)
                        {
                         _this.mcakes34.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                              _this.mcake33.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake33.visible==true)
                             {
                                 _this.mcake33.inputEnabled=true;
                              _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics3.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                     if(_this.mcake43.visible==true)
                        {
                         _this.mcakes44.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake43.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake43.visible==true)
                             {
                                 _this.mcake43.inputEnabled=true;
                              _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics4.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                 else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake53.visible==true)
                        {
                         _this.mcakes54.visible=true;
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake53.visible=true;
                            _this.count2+=1;
                            if(_this.mcake53.visible==true)
                             {
                                 _this.mcake53.inputEnabled=true;
                              _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics5.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                 else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake63.visible==true)
                        {
                         _this.mcakes64.visible=true;
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake63.visible=true;
                            _this.count2+=1;
                            if(_this.mcake63.visible==true)
                             {
                                 _this.mcake63.inputEnabled=true;
                              _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics6.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                }
                if(_this.count2==6&&_this.addOnce)
                {
                     _this.numBox1Pressed = true;
                    _this.addNumberPad();
                     _this.addOnce = false; 
                }
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y; 
                }
            if(_this.Question==2)
                {
                  if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                 if(_this.mcake3.visible==true)
                        {
                         _this.mcakes4.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes4.visible==true)
                             {
                                 _this.mcakes4.inputEnabled=true;
                              _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    else
                        {
                            _this.mcake3.visible=true;
                            _this.count2+=1;
                            if(_this.mcake3.visible==true)
                             {
                                 _this.mcake3.inputEnabled=true;
                              _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics1.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                }
                else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake23.visible==true)
                        {
                         _this.mcakes24.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes24.visible==true)
                             {
                                 _this.mcakes24.inputEnabled=true;
                              _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake23.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake23.visible==true)
                             {
                                 _this.mcake23.inputEnabled=true;
                              _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics2.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake33.visible==true)
                        {
                         _this.mcakes34.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes34.visible==true)
                             {
                                 _this.mcakes34.inputEnabled=true;
                              _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                              _this.mcake33.visible=true;
                            _this.count2+=1;
                            if(_this.mcake33.visible==true)
                             {
                                 _this.mcake33.inputEnabled=true;
                              _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics3.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                     if(_this.mcake43.visible==true)
                        {
                         _this.mcakes44.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes44.visible==true)
                             {
                                 _this.mcakes44.inputEnabled=true;
                              _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake43.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake43.visible==true)
                             {
                                 _this.mcake43.inputEnabled=true;
                              _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics4.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                 else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake53.visible==true)
                        {
                         _this.mcakes54.visible=true;
                            _this.count2+=1;
                            if(_this.mcakes54.visible==true)
                             {
                                 _this.mcakes54.inputEnabled=true;
                              _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake53.visible=true;
                            _this.count2+=1;
                            if(_this.mcake53.visible==true)
                             {
                                 _this.mcake53.inputEnabled=true;
                              _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics5.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                 else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake63.visible==true)
                        {
                         _this.mcakes64.visible=true;
                            _this.count2+=1;
                            if(_this.mcakes64.visible==true)
                             {
                                 _this.mcakes64.inputEnabled=true;
                              _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake63.visible=true;
                            _this.count2+=1;
                            if(_this.mcake63.visible==true)
                             {
                                 _this.mcake63.inputEnabled=true;
                              _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics6.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                    if(_this.count2==12&& _this.addOnce)
                 {
                     _this.numBox1Pressed = true; 
                     _this.addNumberPad();
                     _this.addOnce = false;
                 }
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y; 
                }
            if(_this.Question==4)
                {
                   if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                 if(_this.mcake3.visible==true && _this.mcakes4.visible!=true)
                        {
                         _this.mcakes4.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes4.visible==true)
                             {
                                 _this.mcakes4.inputEnabled=true;
                              _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                        else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                        {
                         _this.mcakes5.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes5.visible==true)
                             {
                                 _this.mcakes5.inputEnabled=true;
                              _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    else
                        {
                            _this.mcake3.visible=true;
                            _this.count2+=1;
                            if(_this.mcake3.visible==true)
                             {
                                 _this.mcake3.inputEnabled=true;
                              _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics1.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                }
                else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake23.visible==true &&  _this.mcakes24.visible==false)
                        {
                         _this.mcakes24.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes24.visible==true)
                             {
                                 _this.mcakes24.inputEnabled=true;
                              _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                        else if(_this.mcake23.visible==true &&  _this.mcakes24.visible==true)
                        {
                         _this.mcakes25.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes25.visible==true)
                             {
                                 _this.mcakes25.inputEnabled=true;
                              _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake23.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake23.visible==true)
                             {
                                 _this.mcake23.inputEnabled=true;
                              _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics2.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                        {
                         _this.mcakes34.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes34.visible==true)
                             {
                                 _this.mcakes34.inputEnabled=true;
                              _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                        else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                        {
                         _this.mcakes35.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes35.visible==true)
                             {
                                 _this.mcakes35.inputEnabled=true;
                              _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                              _this.mcake33.visible=true;
                            _this.count2+=1;
                            if(_this.mcake33.visible==true)
                             {
                                 _this.mcake33.inputEnabled=true;
                              _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics3.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                     if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                        {
                         _this.mcakes44.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes44.visible==true)
                             {
                                 _this.mcakes44.inputEnabled=true;
                              _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                        else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                        {
                         _this.mcakes45.visible=true; 
                            _this.count2+=1;
                            if(_this.mcakes45.visible==true)
                             {
                                 _this.mcakes45.inputEnabled=true;
                              _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake43.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake43.visible==true)
                             {
                                 _this.mcake43.inputEnabled=true;
                              _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics4.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                 else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake53.visible==true && _this.mcakes54.visible== false)
                        {
                         _this.mcakes54.visible=true;
                            _this.count2+=1;
                            if(_this.mcakes54.visible==true)
                             {
                                 _this.mcakes54.inputEnabled=true;
                              _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                        else if(_this.mcake53.visible==true && _this.mcakes54.visible== true)
                        {
                         _this.mcakes55.visible=true;
                            _this.count2+=1;
                            if(_this.mcakes55.visible==true)
                             {
                                 _this.mcakes55.inputEnabled=true;
                              _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake53.visible=true;
                            _this.count2+=1;
                            if(_this.mcake53.visible==true)
                             {
                                 _this.mcake53.inputEnabled=true;
                              _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics5.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                 /*else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake63.visible==true)
                        {
                         _this.mcakes64.visible=true;
                            _this.count2+=1;
                            if(_this.mcakes64.visible==true)
                             {
                                 _this.mcakes64.inputEnabled=true;
                              _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake63.visible=true;
                            _this.count2+=1;
                            if(_this.mcake63.visible==true)
                             {
                                 _this.mcake63.inputEnabled=true;
                              _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics6.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;
                } 
                else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
                {
                  target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake73.visible==true)
                        {
                         _this.mcakes74.visible=true;
                            _this.count2+=1;
                            if(_this.mcakes74.visible==true)
                             {
                                 _this.mcakes74.inputEnabled=true;
                              _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                     else
                        {
                             _this.mcake73.visible=true;
                            _this.count2+=1;
                            if(_this.mcake73.visible==true)
                             {
                                 _this.mcake73.inputEnabled=true;
                              _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics7.canAdd--;
                    target.x=_this.cake3X;
                target.y=_this.cake3Y;   
                }*/
                if(_this.count2==15&&_this.addOnce)
                {
                    _this.numBox1Pressed = true;
                    _this.addNumberPad();
                     _this.addOnce = false; 
                }
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y; 
                }  
            if(_this.Question==3)
                {
                    if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                 if(_this.mcake3.visible==true)
                        {
                         _this.mcakes4.visible=true; 
                            _this.count2+=1;
                        }
                    else
                        {
                            _this.mcake3.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake3.visible==true)
                             {
                                 _this.mcake3.inputEnabled=true;
                              _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics1.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                }
                else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake23.visible==true)
                        {
                         _this.mcakes24.visible=true;  
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake23.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake23.visible==true)
                             {
                                 _this.mcake23.inputEnabled=true;
                              _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics2.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake33.visible==true)
                        {
                         _this.mcakes34.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                              _this.mcake33.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake33.visible==true)
                             {
                                 _this.mcake33.inputEnabled=true;
                              _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics3.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                     if(_this.mcake43.visible==true)
                        {
                         _this.mcakes44.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake43.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake43.visible==true)
                             {
                                 _this.mcake43.inputEnabled=true;
                              _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics4.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                 else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake53.visible==true)
                        {
                         _this.mcakes54.visible=true;
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake53.visible=true;
                            _this.count2+=1;
                            if(_this.mcake53.visible==true)
                             {
                                 _this.mcake53.inputEnabled=true;
                              _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics5.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                if(_this.count2==5&&_this.addOnce)
                {
                    _this.numBox1Pressed = true;
                    _this.addNumberPad();
                     _this.addOnce = false; 
                }
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y; 
                }
            if(_this.Question==5)
                {
                    if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                 if(_this.mcake3.visible==true)
                        {
                         _this.mcakes4.visible=true; 
                            _this.count2+=1;
                        }
                    else
                        {
                            _this.mcake3.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake3.visible==true)
                             {
                                 _this.mcake3.inputEnabled=true;
                              _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics1.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                }
                else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake23.visible==true)
                        {
                         _this.mcakes24.visible=true;  
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake23.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake23.visible==true)
                             {
                                 _this.mcake23.inputEnabled=true;
                              _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics2.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake33.visible==true)
                        {
                         _this.mcakes34.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                              _this.mcake33.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake33.visible==true)
                             {
                                 _this.mcake33.inputEnabled=true;
                              _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics3.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                     if(_this.mcake43.visible==true)
                        {
                         _this.mcakes44.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake43.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake43.visible==true)
                             {
                                 _this.mcake43.inputEnabled=true;
                              _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics4.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                 
                if(_this.count2==4&&_this.addOnce)
                {
                    _this.numBox1Pressed = true;
                    _this.addNumberPad();
                     _this.addOnce = false; 
                }
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y; 
                }
            if(_this.Question==6)
                {
                    if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                 if(_this.mcake3.visible==true)
                        {
                         _this.mcakes4.visible=true; 
                            _this.count2+=1;
                        }
                    else
                        {
                            _this.mcake3.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake3.visible==true)
                             {
                                 _this.mcake3.inputEnabled=true;
                              _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics1.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                }
                else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake23.visible==true)
                        {
                         _this.mcakes24.visible=true;  
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake23.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake23.visible==true)
                             {
                                 _this.mcake23.inputEnabled=true;
                              _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics2.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                } 
                else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake33.visible==true)
                        {
                         _this.mcakes34.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                              _this.mcake33.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake33.visible==true)
                             {
                                 _this.mcake33.inputEnabled=true;
                              _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics3.canAdd--;
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y;
                }
                 
                if(_this.count2==3&&_this.addOnce)
                {
                    _this.numBox1Pressed = true;
                    _this.addNumberPad();
                     _this.addOnce = false; 
                }
                    target.x=_this.cake3X;
                  target.y=_this.cake3Y; 
                }
            if(_this.Question==7)
            {
                if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            } 
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake3X;
              target.y=_this.cake3Y; 
            }
            if(_this.Question==8)
            {
                if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            } 
             
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake3X;
              target.y=_this.cake3Y; 
            }
            if(_this.Question==9)
            {
                if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake3X;
              target.y=_this.cake3Y;
            }
             
            if(_this.count2==3&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake3X;
              target.y=_this.cake3Y; 
            }
    },
    match4:function(target)
    {
        _this.snapSound.play();
         if(_this.Question==1)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
            if(_this.count2==6&&_this.addOnce)
            {
                 _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake4X;
              target.y=_this.cake4Y; 
            }
        if(_this.Question==2)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
                if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             }
                 target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
        if(_this.Question==4)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake4X;
            target.y=_this.cake4Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                 target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
        if(_this.Question==3)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            if(_this.count2==5&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake4X;
              target.y=_this.cake4Y;  
            }
        if(_this.Question==5)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake4X;
              target.y=_this.cake4Y;  
            }
        if(_this.Question==6)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            if(_this.count2==3&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake4X;
              target.y=_this.cake4Y;  
            }
        if(_this.Question==7)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }  
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake4X;
              target.y=_this.cake4Y;  
            }
         if(_this.Question==8)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake4X;
              target.y=_this.cake4Y;  
            }
        if(_this.Question==9)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake4X;
              target.y=_this.cake4Y;
            } 
            if(_this.count2==3&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake4X;
              target.y=_this.cake4Y;  
            }
         
    },
    match5:function(target)
    {
        _this.snapSound.play();
              if(_this.Question==1)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
               target.x=_this.cake5X;
              target.y=_this.cake5Y;
            }
            if(_this.count2==6&&_this.addOnce)
            {
                 _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake5X;
              target.y=_this.cake5Y; 
            }
        if(_this.Question==2)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
                if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             }
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            }
        if(_this.Question==4)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake5X;
            target.y=_this.cake5Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
        if(_this.Question==3)
            {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            if(_this.count2==5&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake5X;
              target.y=_this.cake5Y;     
            }
        if(_this.Question==5)
            {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake5X;
              target.y=_this.cake5Y;     
            }
        if(_this.Question==6)
            {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            if(_this.count2==3&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake5X;
              target.y=_this.cake5Y;     
            }
        if(_this.Question==7)
            {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake5X;
              target.y=_this.cake5Y;     
            }
        if(_this.Question==8)
            {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake5X;
              target.y=_this.cake5Y;
            } 
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake5X;
              target.y=_this.cake5Y;     
            }
},
    match6:function(target)
    {
            _this.snapSound.play();
            if(_this.Question==1)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            }
            if(_this.count2==6&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake6X;
              target.y=_this.cake6Y; 
            }
        if(_this.Question==2)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
                if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             }
               target.x=_this.cake6X;
              target.y=_this.cake6Y;
            }
        if(_this.Question==4)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake6X;
            target.y=_this.cake6Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            } 
         if(_this.Question==3)
             {
                  if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                 if(_this.mcake3.visible==true)
                        {
                         _this.mcakes4.visible=true; 
                            _this.count2+=1;
                        }
                    else
                        {
                            _this.mcake3.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake3.visible==true)
                             {
                                 _this.mcake3.inputEnabled=true;
                              _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics1.canAdd--;
                    target.x=_this.cake6X;
                  target.y=_this.cake6Y;
                }
                else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake23.visible==true)
                        {
                         _this.mcakes24.visible=true;  
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake23.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake23.visible==true)
                             {
                                 _this.mcake23.inputEnabled=true;
                              _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics2.canAdd--;
                    target.x=_this.cake6X;
                  target.y=_this.cake6Y;
                } 
                else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake33.visible==true)
                        {
                         _this.mcakes34.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                              _this.mcake33.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake33.visible==true)
                             {
                                 _this.mcake33.inputEnabled=true;
                              _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics3.canAdd--;
                    target.x=_this.cake6X;
                  target.y=_this.cake6Y;
                } 
                else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                     if(_this.mcake43.visible==true)
                        {
                         _this.mcakes44.visible=true; 
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake43.visible=true; 
                            _this.count2+=1;
                            if(_this.mcake43.visible==true)
                             {
                                 _this.mcake43.inputEnabled=true;
                              _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics4.canAdd--;
                    target.x=_this.cake6X;
                  target.y=_this.cake6Y;
                } 
                 else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
                {
                     target.visible=false;
                    target.inputEnabled=false;
                    if(_this.mcake53.visible==true)
                        {
                         _this.mcakes54.visible=true;
                            _this.count2+=1;
                        }
                     else
                        {
                             _this.mcake53.visible=true;
                            _this.count2+=1;
                            if(_this.mcake53.visible==true)
                             {
                                 _this.mcake53.inputEnabled=true;
                              _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                             }
                        }
                    _this.graphics5.canAdd--;
                    target.x=_this.cake6X;
                  target.y=_this.cake6Y;
                } 
                if(_this.count2==5&&_this.addOnce)
                {
                    _this.numBox1Pressed = true;
                    _this.addNumberPad();
                     _this.addOnce = false; 
                }
                    target.x=_this.cake6X;
                  target.y=_this.cake6Y;
             }
         if(_this.Question==8)
            {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
               target.x=_this.cake6X;
              target.y=_this.cake6Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake6X;
              target.y=_this.cake6Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake6X;
              target.y=_this.cake6Y;
            } 
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake6X;
              target.y=_this.cake6Y;    
            }
         },
    
    match7:function(target)
    {       _this.snapSound.play();
          if(_this.Question==1)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake7X;
              target.y=_this.cake7Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            }
            if(_this.count2==6&&_this.addOnce)
            {
                 _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
               target.x=_this.cake7X;
              target.y=_this.cake7Y; 
            }
            if(_this.Question==2)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
                if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             }
                target.x=_this.cake7X;
              target.y=_this.cake7Y; 
            }
        if(_this.Question==4)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true &&  _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true &&  _this.mcakes24.visible==true)
                    {
                        _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake7X;
            target.y=_this.cake7Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake7X;
              target.y=_this.cake7Y; 
            } 
     if(_this.Question==3)
         {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake7X;
              target.y=_this.cake7Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y;
            } 
            if(_this.count2==5&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
               target.x=_this.cake7X;
              target.y=_this.cake7Y;
         }
     if(_this.Question==8)
            {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                 target.x=_this.cake7X;
              target.y=_this.cake7Y; 
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake7X;
              target.y=_this.cake7Y; 
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
               target.x=_this.cake7X;
              target.y=_this.cake7Y; 
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                 target.x=_this.cake7X;
              target.y=_this.cake7Y; 
            } 
            if(_this.count2==4&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                 target.x=_this.cake7X;
              target.y=_this.cake7Y;  
            }
    },


    match8:function(target)
    {_this.snapSound.play();
           if(_this.Question==1)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            }
            if(_this.count2==6&&_this.addOnce)
            {
                 _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake8X;
              target.y=_this.cake8Y; 
            }
        if(_this.Question==2)
            {
               if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
                if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             }
                target.x=_this.cake8X;
              target.y=_this.cake8Y; 
            }
        if(_this.Question==4)
            {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true &&  _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake8X;
            target.y=_this.cake8Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake8X;
              target.y=_this.cake8Y; 
            } 
        if(_this.Question==3)
            {
             if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                    }
                else
                    {
                        _this.mcake3.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true;  
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                          _this.mcake33.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake8X;
              target.y=_this.cake8Y;
            } 
            if(_this.count2==5&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
                target.x=_this.cake8X;
              target.y=_this.cake8Y; 
         }
          },
    

    match9:function(target)
    {   
        _this.snapSound.play();
        if(_this.Question==2)
         {
            if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
             if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             } 
             target.x=_this.cake9X;
              target.y=_this.cake9Y;
         }
     if(_this.Question==4)
         {
          if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake9X;
            target.y=_this.cake9Y;   
            } */ 
             if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
         target.x=_this.cake9X;
              target.y=_this.cake9Y;
         }
         },
    
    match10:function(target)
    {_this.snapSound.play();
     if(_this.Question==2)
         {
          if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
             if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             } 
             target.x=_this.cake10X;
              target.y=_this.cake10Y;
         }
     if(_this.Question==4)
         {
           if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake10X;
            target.y=_this.cake10Y;   
            } */ 
             if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
             target.x=_this.cake10X;
              target.y=_this.cake10Y;
         }
          },
    
    match11:function(target)
    {
        _this.snapSound.play();
        if(_this.Question==2)
        {
          if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            }  
            if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             } 
             target.x=_this.cake11X;
              target.y=_this.cake11Y;
        }
        if(_this.Question==4)
            {
             if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                        _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
             /*else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake11X;
            target.y=_this.cake11Y;   
            }  */
                 if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            } 
                 target.x=_this.cake11X;
              target.y=_this.cake11Y;
            }
          
       },
    
    match12:function(target)
    {_this.snapSound.play();
     if(_this.Question==2)
         {
             if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
             if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             }
            target.x=_this.cake12X;
              target.y=_this.cake12Y; 
         }
     if(_this.Question==4)  
         {
             if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
             /*else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake12X;
            target.y=_this.cake12Y;   
            }*/
             if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
           target.x=_this.cake12X;
              target.y=_this.cake12Y;  
         }
         },
    
    match13:function(target)
    {_this.snapSound.play();
     if(_this.Question==2)
         {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
             if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             }
          target.x=_this.cake13X;
              target.y=_this.cake13Y;   
         }
     if(_this.Question==4)
         {
           if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true &&  _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true &&  _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake13X;
            target.y=_this.cake13Y;   
            }*/
             if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
         target.x=_this.cake13X;
              target.y=_this.cake13Y;    
         }
             
         },
    
    match14:function(target)
    { _this.snapSound.play();
     if(_this.Question==2)
         {
             if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            } 
             if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             } 
             target.x=_this.cake14X;
              target.y=_this.cake14Y;
         }
     if(_this.Question==4)
         {
         if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true &&  _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true &&  _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake144X;
            target.y=_this.cake144Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true &&  _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true &&  _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake144X;
            target.y=_this.cake144Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else  if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            } 
           /*  else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake14X;
            target.y=_this.cake14Y;   
            }*/
             if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
         target.x=_this.cake14X;
              target.y=_this.cake14Y;
         }   
        },
    
    match15:function(target)
    {_this.snapSound.play();
     if(_this.Question==2)
         {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            }
           if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             }
             target.x=_this.cake15X;
              target.y=_this.cake15Y;
         }
     if(_this.Question==4)
         {
             if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true &&  _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true &&  _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true  &&  _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true &&  _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake15X;
            target.y=_this.cake15Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
         target.x=_this.cake15X;
              target.y=_this.cake15Y; 
         }  
        },
    
    match16:function(target)
    {_this.snapSound.play();
     if(_this.Question==2)
         {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
             else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
           if(_this.count2==12&& _this.addOnce)
             {
                 _this.numBox1Pressed = true; 
                 _this.addNumberPad();
                 _this.addOnce = false;
             } 
             target.x=_this.cake16X;
              target.y=_this.cake16Y;
         }
     if(_this.Question==4)
         {
              if (_this.checkOverlap(_this.graphics1, target) && _this.graphics1.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
             if(_this.mcake3.visible==true && _this.mcakes4.visible==false)
                    {
                     _this.mcakes4.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes4.visible==true)
                         {
                             _this.mcakes4.inputEnabled=true;
                          _this.mcakes4.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake3.visible==true && _this.mcakes4.visible==true)
                    {
                     _this.mcakes5.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes5.visible==true)
                         {
                             _this.mcakes5.inputEnabled=true;
                          _this.mcakes5.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                else
                    {
                        _this.mcake3.visible=true;
                        _this.count2+=1;
                        if(_this.mcake3.visible==true)
                         {
                             _this.mcake3.inputEnabled=true;
                          _this.mcake3.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics1.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            }
            else if (_this.checkOverlap(_this.graphics2, target)&&_this.graphics2.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake23.visible==true && _this.mcakes24.visible==false)
                    {
                     _this.mcakes24.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes24.visible==true)
                         {
                             _this.mcakes24.inputEnabled=true;
                          _this.mcakes24.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake23.visible==true && _this.mcakes24.visible==true)
                    {
                     _this.mcakes25.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes25.visible==true)
                         {
                             _this.mcakes25.inputEnabled=true;
                          _this.mcakes25.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake23.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake23.visible==true)
                         {
                             _this.mcake23.inputEnabled=true;
                          _this.mcake23.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics2.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
            else if (_this.checkOverlap(_this.graphics3, target)&&_this.graphics3.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake33.visible==true && _this.mcakes34.visible==false)
                    {
                     _this.mcakes34.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes34.visible==true)
                         {
                             _this.mcakes34.inputEnabled=true;
                          _this.mcakes34.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake33.visible==true && _this.mcakes34.visible==true)
                    {
                     _this.mcakes35.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes35.visible==true)
                         {
                             _this.mcakes35.inputEnabled=true;
                          _this.mcakes35.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                          _this.mcake33.visible=true;
                        _this.count2+=1;
                        if(_this.mcake33.visible==true)
                         {
                             _this.mcake33.inputEnabled=true;
                          _this.mcake33.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics3.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
            else if (_this.checkOverlap(_this.graphics4, target)&&_this.graphics4.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                 if(_this.mcake43.visible==true && _this.mcakes44.visible==false)
                    {
                     _this.mcakes44.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes44.visible==true)
                         {
                             _this.mcakes44.inputEnabled=true;
                          _this.mcakes44.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake43.visible==true && _this.mcakes44.visible==true)
                    {
                     _this.mcakes45.visible=true; 
                        _this.count2+=1;
                        if(_this.mcakes45.visible==true)
                         {
                             _this.mcakes45.inputEnabled=true;
                          _this.mcakes45.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake43.visible=true; 
                        _this.count2+=1;
                        if(_this.mcake43.visible==true)
                         {
                             _this.mcake43.inputEnabled=true;
                          _this.mcake43.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics4.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
             else if (_this.checkOverlap(_this.graphics5, target)&&_this.graphics5.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake53.visible==true && _this.mcakes54.visible==false)
                    {
                     _this.mcakes54.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes54.visible==true)
                         {
                             _this.mcakes54.inputEnabled=true;
                          _this.mcakes54.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                    else if(_this.mcake53.visible==true && _this.mcakes54.visible==true)
                    {
                     _this.mcakes55.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes55.visible==true)
                         {
                             _this.mcakes55.inputEnabled=true;
                          _this.mcakes55.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake53.visible=true;
                        _this.count2+=1;
                        if(_this.mcake53.visible==true)
                         {
                             _this.mcake53.inputEnabled=true;
                          _this.mcake53.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics5.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
            /* else if (_this.checkOverlap(_this.graphics6, target)&&_this.graphics6.canAdd>0)
            {
                 target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake63.visible==true)
                    {
                     _this.mcakes64.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes64.visible==true)
                         {
                             _this.mcakes64.inputEnabled=true;
                          _this.mcakes64.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake63.visible=true;
                        _this.count2+=1;
                        if(_this.mcake63.visible==true)
                         {
                             _this.mcake63.inputEnabled=true;
                          _this.mcake63.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics6.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;
            } 
            else if(_this.checkOverlap(_this.graphics7,target)&&_this.graphics7.canAdd>0)
            {
              target.visible=false;
                target.inputEnabled=false;
                if(_this.mcake73.visible==true)
                    {
                     _this.mcakes74.visible=true;
                        _this.count2+=1;
                        if(_this.mcakes74.visible==true)
                         {
                             _this.mcakes74.inputEnabled=true;
                          _this.mcakes74.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                 else
                    {
                         _this.mcake73.visible=true;
                        _this.count2+=1;
                        if(_this.mcake73.visible==true)
                         {
                             _this.mcake73.inputEnabled=true;
                          _this.mcake73.events.onInputDown.add(_this.checkAns,_this);   
                         }
                    }
                _this.graphics7.canAdd--;
                target.x=_this.cake16X;
            target.y=_this.cake16Y;   
            }*/
            if(_this.count2==15&&_this.addOnce)
            {
                _this.numBox1Pressed = true;
                _this.addNumberPad();
                 _this.addOnce = false; 
            }
         target.x=_this.cake16X;
              target.y=_this.cake16Y;
         }  
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

		console.log("correct");
        _this.no1++;
//        _this.speaker.inputEnabled=false;
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
        _this.wrongbtn.events.onInputDown.removeAll();
        _this.box.events.onInputDown.removeAll();
        _this.box1.events.onInputDown.removeAll();
        _this.box2.events.onInputDown.removeAll();
        _this.box3.events.onInputDown.removeAll();
        _this.numbg.events.onInputDown.removeAll();
        _this.counterText1.events.onInputDown.removeAll();
        _this.counterText2.events.onInputDown.removeAll();
        _this.counterText3.events.onInputDown.removeAll();
        _this.counterText4.events.onInputDown.removeAll();
         _this.numBox1Pressed =  false;     
          _this.numBox2Pressed =  false;     
          _this.numBox3Pressed =  false;     
          _this.numBox4Pressed =  false; 
        _this.selectedBox=null;

        if(_this.timer)
      {
        _this.timer.stop();
        _this.timer = null;
      }
      _this.questionid = 1;
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
				this.state.start('nsf1_4Score');
                 },this);
			}

	},
    
    
	changeQuestion:function()
	{
       
            _this.group1.destroy();
            _this.group3.destroy();
        _this.boxgroup.destroy();
        _this.numGroup.destroy();
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
getVoice:function(){
       
        _this.stopVoice();	
        _this.playQuestionSound = document.createElement('audio');
                    _this.src = document.createElement('source');
       if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/English/nsf1.4.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Hindi/nsf1.4.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Kannada/nsf1.4.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Gujrati/nsf1.4.mp3");
                    }
					else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Marathi/nsf1.4.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Telugu/nsf1.4.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Tamil/nsf1.4.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Urdu/nsf1.4.mp3");
                    }
                    else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsf1.4/Odiya/nsf1.4.mp3");  
                    }
        _this.playQuestionSound.appendChild(_this.src);
                    _this.playQuestionSound.play();
    },
  addNumberPad:function(){
      _this.box1.frame=2;
      _this.box2.frame=1;
      _this.box3.frame=1;
      _this.box.frame=1;
      _this.box1.inputEnabled = true;
      _this.box2.inputEnabled = true;
      _this.box3.inputEnabled = true;
      _this.box.inputEnabled = true;
        _this.numGroup = this.add.group();
         _this.footer = this.add.sprite(0,475,'nsf1_4_footer');
        _this.numGroup.add(_this.footer);
        _this.numGroup.visible=true;
        var x = 120;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(x,510,'nsf1_4_calNum'); 
            _this.numbg.frame=i;
            _this.grpnum.push(_this.numbg);
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name = i;
            _this.numbg.inputEnabled = true;
         //   numbg.input.useHandCursor = false;
            _this.numbg.events.onInputDown.add(this.numClicked,this);
            x+=60;
        }
       for(var i=0;i<10;i++)
        {
            _this.grpnum[i].inputEnabled=true;
            _this.grpnum[i].input.useHandCursor=true;
        }
      _this.counterText2 = this.add.text(26,26, _this.selectedAns2="");
        _this.counterText2.anchor.setTo(0.5);
        _this.counterText2.align = 'center';
        _this.counterText2.font = 'myfont';
        _this.counterText2.fontWeight = 'Normal';
        _this.counterText2.fontSize = 30;
        _this.counterText2.fill = '#65B4C3';
        _this.counterText2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box2.addChild(_this.counterText2);
        _this.counterText3 = this.add.text(26,26, _this.selectedAns3="");
        _this.counterText3.anchor.setTo(0.5);
        _this.counterText3.align = 'center';
        _this.counterText3.font = 'myfont';
        _this.counterText3.fontWeight = 'Normal';
        _this.counterText3.fontSize = 30;
        _this.counterText3.fill = '#65B4C3';
        _this.counterText3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box3.addChild(_this.counterText3);
      _this.counterText1 = this.add.text(26,26, _this.selectedAns1="");
        _this.counterText1.anchor.setTo(0.5);
        _this.counterText1.align = 'center';
         _this.counterText1.font = 'myfont';
        _this.counterText1.fontWeight = 'Normal';
        _this.counterText1.fontSize = 30;
        _this.counterText1.fill = '#65B4C3';
        _this.counterText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box1.addChild(_this.counterText1);
      _this.counterText4 = this.add.text(26,26, _this.selectedAns4="");
        _this.counterText4.anchor.setTo(0.5);
        _this.counterText4.align = 'center';
        _this.counterText4.font = 'myfont';
        _this.counterText4.fontWeight = 'Normal';
        _this.counterText4.fontSize = 30;
        _this.counterText4.fill = '#65B4C3';
        _this.counterText4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.box.addChild(_this.counterText4);
        
     //   txtbox = this.add.sprite(x+50,508,'nsf1_4_box');
     //   txtbox.anchor.setTo(0.5);
      //  txtbox.name = "txtbox";
        
        _this.wrongbtn = _this.numGroup.create(x+60,510,'nsf1_4_eraser');
        _this.wrongbtn.anchor.setTo(0.5);
       _this.wrongbtn.scale.setTo(0.6,0.6);
        _this.wrongbtn.name = "wrongbtn";
       _this.wrongbtn.inputEnabled = true;
       _this.wrongbtn.input.useHandCursor = true;
        _this.wrongbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
            _this.wrongbtn.frame=1;
            if(_this.selectedBox=="nsf1_4_box1A"||_this.numBox1Pressed==true)
            {
                _this.selectedAns1="";
                _this.counterText1.setText("");
            }
            if(_this.selectedBox=="nsf1_4_box2A"||_this.numBox2Pressed==true)
            {
                _this.selectedAns2="";
                _this.counterText2.setText("");
            }
            if(_this.selectedBox=="nsf1_4_box3A"||_this.numBox3Pressed==true)
            {
                _this.selectedAns3="";
                _this.counterText3.setText("");
            }
            if(_this.selectedBox=="nsf1_4_boxA"||_this.numBox4Pressed==true)
            {
                _this.selectedAns4="";
                _this.counterText4.setText("");
            }
        },this);
        _this.wrongbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this)

        _this.rightbtn =_this.numGroup.create(x+120,510,'nsf1_4_rightBtn');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(0.6,0.6);
        _this.rightbtn.name = "rightbtn";
       _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
      _this.rightbtn.events.onInputDown.add(function(target){
            _this.clickSound.play();
            target.frame=1;
          _this.noofAttempts++;
          if(_this.Question==1)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcake23.visible==true&&_this.mcake33.visible==true&&_this.mcake43.visible==true&&_this.mcake53.visible==true&&_this.mcake63.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                       _this.mcake3.frame=1;
                         _this.mcake23.frame=1;
                         _this.mcake33.frame=1;
                         _this.mcake43.frame=1;
                         _this.mcake53.frame=1;
                        _this.mcake63.frame=1;
                        
                        _this.cake1.frame=1;
                        _this.cake2.frame=1;
                        _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        _this.cake5.frame=1;
                        _this.cake6.frame=1;
                        _this.cake7.frame=1;
                        _this.cake8.frame=1;
                        this.correctAns();   
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }
          if(_this.Question==2)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcakes4.visible==true&&_this.mcake23.visible==true&&_this.mcakes24.visible==true&&_this.mcakes34.visible==true&&_this.mcake33.visible==true&&_this.mcakes44.visible==true&&_this.mcake43.visible==true&&_this.mcakes54.visible==true&&_this.mcake53.visible==true&&_this.mcakes64.visible==true&&_this.mcake63.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                      _this.mcake3.frame=1;
                     _this.mcakes4.frame=1;
                     _this.mcake23.frame=1;
                     _this.mcakes24.frame=1;
                     _this.mcake33.frame=1;
                     _this.mcakes34.frame=1;
                     _this.mcake43.frame=1;
                     _this.mcakes44.frame=1;
                     _this.mcake53.frame=1;
                     _this.mcakes54.frame=1;
                     _this.mcake63.frame=1;
                     _this.mcakes64.frame=1;
                       
                       _this.cake1.frame=1;
                       _this.cake2.frame=1;
                       _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        _this.cake5.frame=1;
                        _this.cake6.frame=1;
                        _this.cake7.frame=1;
                        _this.cake8.frame=1;
                        _this.cake9.frame=1;
                        _this.cake10.frame=1;
                        _this.cake11.frame=1;
                        _this.cake12.frame=1;
                        _this.cake13.frame=1;
                        _this.cake14.frame=1;
                        _this.cake15.frame=1;
                        _this.cake16.frame=1;
                     this.correctAns();  
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }
          if(_this.Question==3)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcake23.visible==true&&_this.mcake33.visible==true&&_this.mcake43.visible==true&&_this.mcake53.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                       _this.mcake3.frame=1;
                         _this.mcake23.frame=1;
                         _this.mcake33.frame=1;
                         _this.mcake43.frame=1;
                         _this.mcake53.frame=1;
                        
                        _this.cake1.frame=1;
                        _this.cake2.frame=1;
                        _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        _this.cake5.frame=1;
                        _this.cake6.frame=1;
                        _this.cake7.frame=1;
                        _this.cake8.frame=1;
                        this.correctAns();   
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }
          if(_this.Question==4)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcakes4.visible==true&&_this.mcake23.visible==true&&_this.mcakes24.visible==true&&_this.mcakes34.visible==true&&_this.mcake33.visible==true&&_this.mcakes44.visible==true&&_this.mcake43.visible==true&&_this.mcakes54.visible==true&&_this.mcake53.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                      _this.mcake3.frame=1;
                     _this.mcakes4.frame=1;
                     _this.mcakes5.frame=1;
                     _this.mcake23.frame=1;
                     _this.mcakes24.frame=1;
                     _this.mcakes25.frame=1;
                     _this.mcake33.frame=1;
                     _this.mcakes34.frame=1;
                     _this.mcakes35.frame=1;
                     _this.mcake43.frame=1;
                     _this.mcakes44.frame=1;
                     _this.mcakes45.frame=1;
                     _this.mcake53.frame=1;
                     _this.mcakes54.frame=1;
                     _this.mcakes55.frame=1;
                       
                       _this.cake1.frame=1;
                       _this.cake2.frame=1;
                       _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        _this.cake5.frame=1;
                        _this.cake6.frame=1;
                        _this.cake7.frame=1;
                        _this.cake8.frame=1;
                        _this.cake9.frame=1;
                        _this.cake10.frame=1;
                        _this.cake11.frame=1;
                        _this.cake12.frame=1;
                        _this.cake13.frame=1;
                        _this.cake14.frame=1;
                        _this.cake15.frame=1;
                        _this.cake16.frame=1;
                     this.correctAns();  
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }
          if(_this.Question==5)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcake23.visible==true&&_this.mcake33.visible==true&&_this.mcake43.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                        _this.mcake3.frame=1;
                         _this.mcake23.frame=1;
                         _this.mcake33.frame=1;
                         _this.mcake43.frame=1;
                        
                        _this.cake1.frame=1;
                        _this.cake2.frame=1;
                        _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        _this.cake5.frame=1;
                        this.correctAns();   
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }
          if(_this.Question==6)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcake23.visible==true&&_this.mcake33.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                        _this.mcake3.frame=1;
                         _this.mcake23.frame=1;
                         _this.mcake33.frame=1;
                        
                        _this.cake1.frame=1;
                        _this.cake2.frame=1;
                        _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        _this.cake5.frame=1;
                        this.correctAns();   
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }
          if(_this.Question==7)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcake23.visible==true&&_this.mcakes4.visible==true&&_this.mcakes24.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                      _this.mcake3.frame=1;
                     _this.mcakes4.frame=1;
                     _this.mcake23.frame=1;
                     _this.mcakes24.frame=1;
                        
                        _this.cake1.frame=1;
                        _this.cake2.frame=1;
                        _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        _this.cake5.frame=1;
                        this.correctAns();  
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }
          if(_this.Question==8)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcake23.visible==true&&_this.mcake33.visible==true&&_this.mcake43.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                        _this.mcake3.frame=1;
                         _this.mcake23.frame=1;
                         _this.mcake33.frame=1;
                         _this.mcake43.frame=1;
                        
                         _this.cake1.frame=1;
                        _this.cake2.frame=1;
                        _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        _this.cake5.frame=1;
                        _this.cake6.frame=1;
                        _this.cake7.frame=1;
                        this.correctAns();    
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }
          if(_this.Question==9)
              {
                  if((_this.selectedAns1== _this.rightAns1||_this.selectedAns1=="0"+ _this.rightAns1)&&(_this.selectedAns2== _this.rightAns2||_this.selectedAns2=="0"+ _this.rightAns2)&&(_this.selectedAns3== _this.rightAns3||_this.selectedAns3=="0"+ _this.rightAns3)&&(_this.selectedAns4== _this.rightAns4||_this.selectedAns4=="0"+ _this.rightAns4)&&_this.mcake3.visible==true&&_this.mcake23.visible==true&&_this.mcake33.visible==true)
                      {
                          _this.box1.frame=2;
                            _this.box2.frame=2;
                            _this.box3.frame=2;
                            _this.box.frame=2; 
                          
                            _this.mcake3.frame=1;
                         _this.mcake23.frame=1;
                         _this.mcake33.frame=1; 
                        
                         _this.cake1.frame=1;
                        _this.cake2.frame=1;
                        _this.cake3.frame=1;
                        _this.cake4.frame=1;
                        this.correctAns();    
                      }
                else 
            {
                 _this.wmusic = _this.add.audio('waudio');
                          _this.wmusic.play();
                  
                _this.flag;
                _this.box1.frame=1;
                _this.box2.frame=1;
                _this.box3.frame=1;
                _this.box.frame=1;
                    _this.selectedAns1 = "";
                    _this.selectedAns2 = "";
                    _this.selectedAns3 = "";
                    _this.selectedAns4 = "";
                    _this.counterText1.setText("");
                    _this.counterText2.setText("");
                    _this.counterText3.setText("");
                    _this.counterText4.setText("");
                console.log("wrongbutton");
                      _this.shake.shake(10,_this.boxgroup);
            }   
              }

        },this);
       _this.rightbtn.events.onInputUp.add(function(target){
           target.frame=0;
       }, this);
       
       // _this.numGroup.add(_this.box);
        _this.numGroup.y  = 100;
      
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
      
//      _this.enablebuttons();
    },
    
    numClicked:function(target){
        _this.clickSound.play();
        
        console.log("!!!!!!!!!!!!!!! "+_this.numBox1Pressed);
        
        if(_this.Question==1||_this.Question==3||_this.Question==6||_this.Question==5||_this.Question==7||_this.Question==8||_this.Question==9)
        {
            if(_this.selectedBox == "nsf1_4_box1A")
            {
              if(_this.selectedAns1.length<2)
                {

                    _this.selectedAns1+= target.name;
                    console.log("1a");
                   _this.counterText1.setText(_this.selectedAns1);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
            }
          else if(_this.selectedBox == "nsf1_4_box2A")
              {
              if(_this.selectedAns2.length<2)
                {

                    _this.selectedAns2+= target.name;
                    console.log("2a");
                    _this.counterText2.setText(_this.selectedAns2);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
          else if(_this.selectedBox == "nsf1_4_box3A")
              {
              if(_this.selectedAns3.length<2)
                {

                    _this.selectedAns3+= target.name;
                    console.log("3a");
                    _this.counterText3.setText(_this.selectedAns3);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
         else if(_this.selectedBox == "nsf1_4_boxA")
              {
              if(_this.selectedAns4.length<2)
                {

                    _this.selectedAns4+= target.name;
                    console.log("4a");
                    _this.counterText4.setText(_this.selectedAns4);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
            else if(_this.numBox1Pressed==true)
            {    
                if(_this.selectedAns1.length<1)
                {
                    _this.selectedAns1+= target.name;
                    console.log("1a");
                   _this.counterText1.setText(_this.selectedAns1);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                    _this.numBox1Pressed = false;
                    _this.numBox3Pressed = false;
                    _this.numBox4Pressed = false;
                    _this.numBox2Pressed = true;
                    _this.box2.frame = 2;
                    _this.box1.frame = 1;
                }
            } 
        else if(_this.numBox2Pressed==true)
            {
                if(_this.selectedAns2.length<1)
                {
                    _this.selectedAns2+= target.name;
                    console.log("2a");
                    _this.counterText2.setText(_this.selectedAns2);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                    _this.numBox2Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.numBox4Pressed = false;
                    _this.numBox3Pressed = true;
                    _this.box3.frame = 2;
                    _this.box2.frame = 1;
                }
            }
            else if(_this.numBox3Pressed==true)
            {
                if(_this.selectedAns3.length<1)
                {
                   
                    _this.selectedAns3+= target.name;
                    _this.counterText3.setText(_this.selectedAns3);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                    _this.numBox1Pressed = false;
                    _this.numBox2Pressed = false;
                    _this.numBox3Pressed = false;
                    _this.numBox4Pressed = true;
                    _this.box3.frame = 1;
                    _this.box.frame = 2;
                }
            }
        else if(_this.numBox4Pressed==true)
            {
                if(_this.selectedAns4.length<1)
                {
                   
                    _this.selectedAns4+= target.name;
                    _this.counterText4.setText(_this.selectedAns4);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                    _this.numBox4Pressed = false;
                    _this.numBox1Pressed = false;
                    _this.numBox2Pressed = false;
                    _this.numBox3Pressed = false;
                    _this.box.frame = 1;
                }
            }
        }
        if(_this.Question==2||_this.Question==4)
            {
                if(_this.selectedBox == "nsf1_4_box1A")
            {
              if(_this.selectedAns1.length<2)
                {

                    _this.selectedAns1+= target.name;
                    console.log("1a");
                   _this.counterText1.setText(_this.selectedAns1);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
            }
          else if(_this.selectedBox == "nsf1_4_box2A")
              {
              if(_this.selectedAns2.length<2)
                {

                    _this.selectedAns2+= target.name;
                    console.log("2a");
                    _this.counterText2.setText(_this.selectedAns2);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
         else if(_this.selectedBox == "nsf1_4_box3A")
              {
              if(_this.selectedAns3.length<2)
                {

                    _this.selectedAns3+= target.name;
                    console.log("3a");
                    _this.counterText3.setText(_this.selectedAns3);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
        else if(_this.selectedBox == "nsf1_4_boxA")
              {
              if(_this.selectedAns4.length<2)
                {

                    _this.selectedAns4+= target.name;
                    console.log("4a");
                    _this.counterText4.setText(_this.selectedAns4);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);

                }
              }
                //console.log("question2"+_this.Question);
            else if(_this.numBox1Pressed==true)
                 {
              if(_this.selectedAns1.length<1)
                {
                    _this.selectedAns1+= target.name;
                    console.log("1a");
                   _this.counterText1.setText(_this.selectedAns1);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                    _this.numBox1Pressed = false;
                    _this.numBox3Pressed = false;
                    _this.numBox4Pressed = false;
                    _this.numBox2Pressed = true;
                    _this.box2.frame = 2;
                    _this.box1.frame = 1;
                }
            } 
        else if(_this.numBox2Pressed==true)
            {
                if(_this.selectedAns2.length<2)
                {
                    _this.selectedAns2+= target.name;
                    console.log("2a "+_this.selectedAns2.length);
                    _this.counterText2.setText(_this.selectedAns2);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                    
                   if(_this.selectedAns2.length==2)
                       {
                           _this.numBox1Pressed = false;
                           _this.numBox4Pressed = false;
                           _this.numBox2Pressed = false;
                        _this.numBox3Pressed = true;
                    _this.box3.frame = 2;
                    _this.box2.frame = 1;   
                       }   
                }
            }
            else if(_this.numBox3Pressed==true)
            {
                if(_this.selectedAns3.length<1)
                {
                   
                    _this.selectedAns3+= target.name;
                    _this.counterText3.setText(_this.selectedAns3);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                    _this.numBox1Pressed = false;
                    _this.numBox2Pressed = false;
                    _this.numBox3Pressed = false;
                    _this.numBox4Pressed = true;
                    _this.box3.frame = 1;
                    _this.box.frame = 2;
                }
            }
        else if(_this.numBox4Pressed==true)
            {
                
                if(_this.selectedAns4.length<2)
                {
                   console.log("2a "+_this.selectedAns4.length);
                    _this.selectedAns4+= target.name;
                    _this.counterText4.setText(_this.selectedAns4);
                    //numGroup.getByName("opt1box").getChildAt(0).setText(selectedAns3);
                    if(_this.selectedAns4.length==2)
                        {
                         _this.numBox4Pressed = false;
                         _this.numBox1Pressed = false;
                         _this.numBox2Pressed = false;
                         _this.numBox3Pressed = false;
                    _this.box.frame = 1;   
                        }
                }
            }
            }
    },
   enablebuttons:function(rightAns1){
       
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