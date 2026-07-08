Game.grade4_2Alevel1=function(){};

var background;
var questiongroupA;
var count;
var count1;
var qnoA;
var questarrayA;
var starsGroupA;
var questgroupA;
var syntexincr,bucketincr,vesselincr,pinkmugincr,sodaincr,canincr,drumincr;
var box;
var boxtext;
var tickmark;
var speakerBtn;
var tickmark1,tickmark2;
var pot_graphics,jug_graphics,bottle_graphics,glass_graphics,spoon_graphics1,spoon_graphics2,spoon_graphics3,bottleblue_graphics;
var numGroup;
var enterTxt;
var txtbox;
var boxclick;
var numGroup;
var counterText;
var grpnum;
var minutes,seconds,counterForTimer;
var noofAttempts;
var timer;
var AnsTimerCount;
var gameid;
Game.grade4_2Alevel1.prototype={
init:function(game)
    {
        _this = this;
        telInitializer.gameIdInit("volume4_2A",gradeSelected);
        _this.gameid = "4.2A";
        _this.clickSound = _this.add.audio('ClickSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.cmusic = _this.add.audio('celebr');
        _this.waterFillingSound =_this.add.audio('waterFill');
        _this.watersplash =_this.add.audio('watersplash');
        
    },

    preload:function(game){
        if(!window.grade4MVG2){

            window.grade4MVG2 = true;

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

            this.load.image('Level42A_bgA',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/bgA.png');
        this.load.atlas('Level42A_CommonBackBtn',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/backbtn.png' ,window.baseUrl+'json/gradeJson/4.2A/backbtn.json');
        this.load.atlas('Level42A_CommonStarAnim',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/starAnim.png',window.baseUrl+'json/gradeJson/4.2A/starAnim.json');
        this.load.atlas('Level42A_btn',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.2A/btn.json');
        this.load.image('Level42A_bg3',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/bg3.png');
        this.load.image('Level42A_tittleBaar',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/tittleBaar.png');
        this.load.atlas('Level42A_replay',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.2A/reply.json');
        this.load.image('Level42A_footer',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/footer.png');
        this.load.image('Level42A_Topbar',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/Topbar.png');
        this.load.image('Level42A_timer',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/timer.png');
        this.load.image('Level42A_dottedBox',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/dottedBox.png');
        this.load.image('Level42A_c',window.baseUrl+'assets/gradeAssets/4.2A/commonAssets/c.png');
        
        this.load.atlas('Level42A_bottle',window.baseUrl+'assets/gradeAssets/4.2A/bottle.png' ,window.baseUrl+'json/gradeJson/4.2A/bottle.json');
        this.load.atlas('Level42A_bottleblue',window.baseUrl+'assets/gradeAssets/4.2A/bottleblue.png' ,window.baseUrl+'json/gradeJson/4.2A/bottleblue.json');
        this.load.atlas('Level42A_bucket',window.baseUrl+'assets/gradeAssets/4.2A/bucket.png' ,window.baseUrl+'json/gradeJson/4.2A/bucket.json');
        this.load.atlas('Level42A_cup',window.baseUrl+'assets/gradeAssets/4.2A/cup.png' ,window.baseUrl+'json/gradeJson/4.2A/cup.json');
        this.load.atlas('Level42A_cupreverse',window.baseUrl+'assets/gradeAssets/4.2A/cupreverse.png' ,window.baseUrl+'json/gradeJson/4.2A/cupreverse.json');
        this.load.atlas('Level42A_glass',window.baseUrl+'assets/gradeAssets/4.2A/glass.png' ,window.baseUrl+'json/gradeJson/4.2A/glass.json');
        this.load.atlas('Level42A_jug',window.baseUrl+'assets/gradeAssets/4.2A/jug.png' ,window.baseUrl+'json/gradeJson/4.2A/jug.json');
        this.load.atlas('Level42A_pinkmug',window.baseUrl+'assets/gradeAssets/4.2A/pinkmug.png' ,window.baseUrl+'json/gradeJson/4.2A/pinkmug.json');
        this.load.atlas('Level42A_soda',window.baseUrl+'assets/gradeAssets/4.2A/soda.png' ,window.baseUrl+'json/gradeJson/4.2A/soda.json');
        this.load.atlas('Level42A_box',window.baseUrl+'assets/gradeAssets/4.2A/box.png',window.baseUrl+'json/gradeJson/4.2A/box.json');
        this.load.atlas('Level42A_bluebottlec',window.baseUrl+'assets/gradeAssets/4.2A/bluebottlec.png' ,window.baseUrl+'json/gradeJson/4.2A/bluebottlec.json');
        this.load.atlas('Level42A_bluebucketc',window.baseUrl+'assets/gradeAssets/4.2A/bluebucketc.png' ,window.baseUrl+'json/gradeJson/4.2A/bluebucketc.json');
        this.load.atlas('Level42A_bottlec',window.baseUrl+'assets/gradeAssets/4.2A/bottlec.png' ,window.baseUrl+'json/gradeJson/4.2A/bottlec.json');
        this.load.atlas('Level42A_greenmugc',window.baseUrl+'assets/gradeAssets/4.2A/greenmugc.png' ,window.baseUrl+'json/gradeJson/4.2A/greenmugc.json');
        this.load.atlas('Level42A_pinkbucketc',window.baseUrl+'assets/gradeAssets/4.2A/pinkbucketc.png' ,window.baseUrl+'json/gradeJson/4.2A/pinkbucketc.json');
        this.load.atlas('Level42A_potsplashc',window.baseUrl+'assets/gradeAssets/4.2A/potsplashc.png' ,window.baseUrl+'json/gradeJson/4.2A/potsplashc.json');
        this.load.atlas('Level42A_vessel2c',window.baseUrl+'assets/gradeAssets/4.2A/vessel2c.png' ,window.baseUrl+'json/gradeJson/4.2A/vessel2c.json');
        this.load.atlas('Level42A_yellowctc',window.baseUrl+'assets/gradeAssets/4.2A/yellowctc.png' ,window.baseUrl+'json/gradeJson/4.2A/yellowctc.json');
        this.load.image('Level42A_common_shadow',window.baseUrl+'assets/gradeAssets/4.2A/common_shadow.png');
        this.load.atlas('Level42A_calNum',window.baseUrl+'assets/gradeAssets/4.2A/numbers.png' ,window.baseUrl+'json/gradeJson/4.2A/numbers.json');
       // this.load.atlas('Level42A_calNum',window.baseUrl+'assets/gradeAssets/4.2A/calNum.png' ,window.baseUrl+'json/gradeJson/4.2A/calNum.json');
        this.load.atlas('Level42A_tank',window.baseUrl+'assets/gradeAssets/4.2A/tank.png' ,window.baseUrl+'json/gradeJson/4.2A/tank.json');
        this.load.atlas('Level42A_drum',window.baseUrl+'assets/gradeAssets/4.2A/drum.png' ,window.baseUrl+'json/gradeJson/4.2A/drum.json');
        this.load.atlas('Level42A_pot2',window.baseUrl+'assets/gradeAssets/4.2A/pot.png' ,window.baseUrl+'json/gradeJson/4.2A/pot.json');
        this.load.image('Level42A_darkbg1',window.baseUrl+'assets/gradeAssets/4.2A/darkbg1.png');
        this.load.image('Level42A_darkbg2',window.baseUrl+'assets/gradeAssets/4.2A/darkbg2.png');
        this.load.atlas('Level42A_cooker',window.baseUrl+'assets/gradeAssets/4.2A/cooker.png' ,window.baseUrl+'json/gradeJson/4.2A/cooker.json');
        this.load.atlas('Level42A_jug2',window.baseUrl+'assets/gradeAssets/4.2A/jug2.png' ,window.baseUrl+'json/gradeJson/4.2A/jug2.json');
        this.load.atlas('Level42A_can',window.baseUrl+'assets/gradeAssets/4.2A/can.png' ,window.baseUrl+'json/gradeJson/4.2A/can.json');
        this.load.image('Level42A_spoon',window.baseUrl+'assets/gradeAssets/4.2A/spoon.png');
        this.load.atlas('Level42A_rightBtn',window.baseUrl+'assets/gradeAssets/4.2A/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.2A/rightBtn.json');
        this.load.atlas('Level42A_eraser',window.baseUrl+'assets/gradeAssets/4.2A/eraser.png' ,window.baseUrl+'json/gradeJson/4.2A/eraser.json');
        this.load.image('Level42A_redmark',window.baseUrl+'assets/gradeAssets/4.2A/redmark.png');


    }

    },


	create:function(game){
		_this.amplify = null;
		this.displaynopad=0;
	    noofAttempts=0;
        AnsTimerCount=0;
        _this.sceneCount=0;
        syntexincr=0;
        bucketincr=0;
        vesselincr=0;
        pinkmugincr=0;
        sodaincr=0;
        canincr=0;
        drumincr=0;
        qnoA=0;
        count1=0;
        minutes=0;
        seconds=0;
        counterForTimer=0;
        questarrayA=new Array();
        grpnum=new Array();
        questarrayA=[1,2,3,4,5,6,7,8];
        questarrayA = this.shuffle(questarrayA);
		count = 0;
        shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);
        
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();
		
        background = this.add.tileSprite(0,0,this.world.width,this.world.height, 'Level42A_bgA');
        background.scale.setTo(1.05,1.06);
        
        var TopBar=this.add.sprite(0,0,'Level42A_Topbar');
        TopBar.scale.setTo(1,1);

        _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
        },_this);

        _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
        _this.speakerbtn.events.onInputDown.add(function()
        { 
            _this.clickSound.play();
            _this.getVoice();
        },_this);
        
       /* var dottedBox=this.add.sprite(70,7,'Level42A_dottedBox');
        var numTxt1 = this.add.text(45,17, 'PRACTICE');
        numTxt1.anchor.setTo(0.5);
        numTxt1.align = 'center';
        numTxt1.font = 'Alte Haas Grotesk';
        numTxt1.fontSize = 12;
        numTxt1.fill = '#ffffff';
        numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        dottedBox.addChild(numTxt1);*/
        
       /* var numTxt2 = this.add.text(195,24, 'Volume');
        numTxt2.anchor.setTo(0.5);
        numTxt2.align = 'center';
        numTxt2.font = 'Alte Haas Grotesk';
        numTxt2.fontSize = 18;
        numTxt2.fill = '#ffffff';
        numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
        var timebg=this.add.sprite(305,6,'Level42A_timer');
        timebg.scale.setTo(1,1);
        
        timeDisplay = this.add.text(330,22,minutes + ' : '+ seconds);
        timeDisplay.anchor.setTo(0.5);
        timeDisplay.align = 'center';
        timeDisplay.font = 'Oh Whale';
        timeDisplay.fontSize = 20;
        //text.fontWeight = 'bold';
        timeDisplay.fill = '#ADFF2F';
        //var footer = this.add.sprite(0,465,'Level42A_footer');
        
        this.generateStarsForTheScene(6);
       
        this.getQuestion();
    },
    
    
    generateStarsForTheScene:function(count)
	{
		starsGroupA = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			starsGroupA.create(this.world.centerX-15, 10, 'starAnim1');
			for(var j =0;j<i;j++)
			{
				if(starsGroupA.getChildAt(j))
				{
					starsGroupA.getChildAt(j).x-=15;
					starsGroupA.getChildAt(i).x+=15;
				}
			}
		}						
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
    
    getQuestion:function()
	{
        noofAttempts = 0;
        AnsTimerCount=0;
        _this.sceneCount++;
        timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        timer.loop(1000, function(){
            AnsTimerCount++;
            this.updateTimer();
        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
         timer.start();
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;

		_this.questionid = 1;
        grpnum=new Array();
        
       // this.stopAllVoice();
		switch(questarrayA[qnoA])
		{
			case 1: this.question1(); break;
            case 2: this.question2(); break;
            case 3: this.question3(); break;
            case 4: this.question4(); break;
            case 5: this.question5(); break;
            case 6: this.question6(); break;
            case 7: this.question7(); break;
            case 8: this.question8(); break;
        }
    },
    
    question1:function()
    {
        qnoA++;
        syntexincr=0;
        syntex_shadow = this.add.sprite(235,410,'Level42A_common_shadow');
        syntex_shadow.alpha=0.5;
        syntex_shadow.width-=25;
        pot_shadow = this.add.sprite(573,404,'Level42A_common_shadow');
        pot_shadow.alpha=0.5;
        pot_shadow.width-=120;
        syntex = this.add.sprite(205,78,'Level42A_tank','<Group>_27 copy instance 10000');
        syntexanim=syntex.animations.add('syntex');
        pot = this.add.sprite(540,190,'Level42A_pot2','<Group>_90 copy instance 10006');
        pot.width+=50;
        pot.height+=50;
        potanim=pot.animations.add('pot');
        
        pot_graphics = this.add.graphics(683,350);
		pot_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		pot_graphics.beginFill(0xFF0000, 1);
		pot_graphics.drawCircle(-50, -10, 130);
		pot_graphics.boundsPadding = 0;
		pot_graphics.alpha=0;
        if(qnoA==1)
        {
            this.getVoice();
            this.time.events.add(1300,function(){
                pot_graphics.inputEnabled = true;
                pot_graphics.input.useHandCursor = true;
                pot_graphics.name="pot";
                pot_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
            pot_graphics.inputEnabled = true;
            pot_graphics.input.useHandCursor = true;
            pot_graphics.name="pot";
            pot_graphics.events.onInputDown.add(this.triggerevent,this);
        }
       
        
        //this.addNumberPad();
        var redmark=this.add.sprite(445,190,'Level42A_redmark');
        redmark.scale.setTo(0.75,0.75);
        questgroupA=this.add.group();
        questgroupA.add(pot_shadow);
        questgroupA.add(syntex_shadow);
        questgroupA.add(pot);                   
        questgroupA.add(syntex);
        questgroupA.add(pot_graphics);
       // questgroupA.add(numGroup);
        questgroupA.add(redmark);
        
        questgroupA.x=960;
        var tween = this.add.tween(questgroupA);
        tween.to({ x: 0}, 0, 'Linear', true, 0);
    },

    question2:function()
    {
        qnoA++;
        bucketincr=0;
        bucket_shadow = this.add.sprite(280,407,'Level42A_common_shadow');
        bucket_shadow.alpha=0.5;
        bucket_shadow.width-=84;
        jug_shadow = this.add.sprite(585,405,'Level42A_common_shadow');
        jug_shadow.alpha=0.5;
        jug_shadow.width-=160;
        bucket = this.add.sprite(205,60,'Level42A_bucket','<Group>_19 instance 10000');
        bucketanim=bucket.animations.add('bucket');
        jug = this.add.sprite(550,292,'Level42A_jug','<Group>_18 instance 10000');
        juganim=jug.animations.add('jug');        
        
        jug_graphics = this.add.graphics(638,320);
		jug_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		jug_graphics.beginFill(0xFF0000, 1);
		jug_graphics.drawRect(-50, -10, 68,95);
		jug_graphics.boundsPadding = 0;
		jug_graphics.alpha=0;
        if(qnoA==1)
        {
            this.getVoice();
            this.time.events.add(1300,function(){
                jug_graphics.inputEnabled = true;
                jug_graphics.input.useHandCursor = true;
                jug_graphics.name="jug";
                jug_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                jug_graphics.inputEnabled = true;
                jug_graphics.input.useHandCursor = true;
                jug_graphics.name="jug";
                jug_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        //this.addNumberPad();
        var redmark=this.add.sprite(455,202,'Level42A_redmark');
        redmark.scale.setTo(0.75,0.75);
        questgroupA=this.add.group();
        questgroupA.add(jug_shadow);
        questgroupA.add(bucket_shadow);
        questgroupA.add(jug);                   
        questgroupA.add(bucket);
        questgroupA.add(jug_graphics);
       // questgroupA.add(numGroup);
        questgroupA.add(redmark);
        questgroupA.x=960;
        var tween = this.add.tween(questgroupA);
        tween.to({ x: 0}, 0, 'Linear', true, 0);
    },
    
    question3:function()
    {
        qnoA++;
        vesselincr=0;
        bottle_shadow = this.add.sprite(593,412,'Level42A_common_shadow');
        bottle_shadow.alpha=0.5;
        bottle_shadow.width-=160;
        vessel_shadow = this.add.sprite(265,415,'Level42A_common_shadow');
        vessel_shadow.alpha=0.5;
        vessel_shadow.width-=20;
        vessel = this.add.sprite(208,138,'Level42A_cooker','<Group>_16 instance 10000');
        vesselanim=vessel.animations.add('vessel');
        bottle = this.add.sprite(580,210,'Level42A_bottle','<Group>_17 instance 10001');
        bottleanim=bottle.animations.add('bottle');
        
        bottle_graphics = this.add.graphics(649,275);
		bottle_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		bottle_graphics.beginFill(0xFF0000, 1);
		bottle_graphics.drawRect(-50, -10, 63,158);
		bottle_graphics.boundsPadding = 0;
		bottle_graphics.alpha=0;
        if(qnoA==1)
        {
            this.getVoice();
            this.time.events.add(1300,function(){
                bottle_graphics.inputEnabled = true;
                bottle_graphics.input.useHandCursor = true;
                bottle_graphics.name="bottle";
                bottle_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                bottle_graphics.inputEnabled = true;
                bottle_graphics.input.useHandCursor = true;
                bottle_graphics.name="bottle";
                bottle_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
       // this.addNumberPad();
        var redmark=this.add.sprite(483,280,'Level42A_redmark');
        redmark.scale.setTo(0.75,0.75);

        questgroupA=this.add.group();
        questgroupA.add(bottle_shadow);
        questgroupA.add(vessel_shadow);
        questgroupA.add(bottle);                   
        questgroupA.add(vessel);
        questgroupA.add(bottle_graphics);
       // questgroupA.add(numGroup);
        questgroupA.add(redmark);
        questgroupA.x=960;
        var tween = this.add.tween(questgroupA);
        tween.to({ x: 0}, 0, 'Linear', true, 0);
        tween.onComplete.add(function(){  
        
        },this);
    },
    
    question4:function()
    {
        qnoA++;
        pinkmugincr=0;
        pinkmug_shadow = this.add.sprite(283,410,'Level42A_common_shadow');
        pinkmug_shadow.alpha=0.5;
        pinkmug_shadow.width-=50;
        glass_shadow = this.add.sprite(600,413,'Level42A_common_shadow');
        glass_shadow.alpha=0.5;
        glass_shadow.width-=180;
        glass_shadow.height-=5;
        pinkmug = this.add.sprite(255,70,'Level42A_pinkmug','<Group>_13 instance 10000');
        pinkmuganim=pinkmug.animations.add('pinkmug');
        glass = this.add.sprite(580,310,'Level42A_glass','<Group>_64 instance 10001');
        glassanim=glass.animations.add('glass');
        
        glass_graphics = this.add.graphics(652,340);
		glass_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		glass_graphics.beginFill(0xFF0000, 1);
		glass_graphics.drawRect(-50, -10, 50,85);
		glass_graphics.boundsPadding = 0;
		glass_graphics.alpha=0;
        if(qnoA==1)
        {
            this.getVoice();
            this.time.events.add(1300,function(){
                glass_graphics.inputEnabled = true;
                glass_graphics.input.useHandCursor = true;
                glass_graphics.name="glass";
                glass_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                glass_graphics.inputEnabled = true;
                glass_graphics.input.useHandCursor = true;
                glass_graphics.name="glass";
                glass_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        //this.addNumberPad();
        
         var redmark=this.add.sprite(444,210,'Level42A_redmark');
        redmark.scale.setTo(0.75,0.75);
        questgroupA=this.add.group();
        questgroupA.add(pinkmug_shadow);
        questgroupA.add(glass_shadow);
        questgroupA.add(pinkmug);                   
        questgroupA.add(glass);
        questgroupA.add(glass_graphics);
        //questgroupA.add(numGroup);
        questgroupA.add(redmark);
        questgroupA.x=960;
        var tween = this.add.tween(questgroupA);
        tween.to({ x: 0}, 0, 'Linear', true, 0);
        tween.onComplete.add(function(){  
         
        },this);
    },
    
    question5:function()
    {
        qnoA++;
        sodaincr=0;
        spoon_shadow = this.add.sprite(520,407,'Level42A_common_shadow');
        spoon_shadow.alpha=0.5;
        spoon_shadow.height-=7;
        soda_shadow = this.add.sprite(295,405,'Level42A_common_shadow');
        soda_shadow.alpha=0.5;
        soda_shadow.width-=125;
        soda_shadow.height-=5;
        soda = this.add.sprite(250,125,'Level42A_soda','Symbol 7 instance 10000');
        sodaanim=soda.animations.add('soda');
        spoon = this.add.sprite(510,300,'Level42A_spoon');
        spoon.width+=150;
        spoon.height+=100;
        spoonanim=spoon.animations.add('spoon');
        
        spoon_graphics1 = this.add.graphics(580,387);
		spoon_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		spoon_graphics1.beginFill(0xFF0000, 1);
		spoon_graphics1.drawRect(-50, -10, 70,30);
		spoon_graphics1.boundsPadding = 0;
		spoon_graphics1.alpha=0;
        
        spoon_graphics2 = this.add.graphics(670,370);
		spoon_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		spoon_graphics2.beginFill(0xFF0000, 1);
		spoon_graphics2.drawRect(-50, -10, 130,10);
		spoon_graphics2.boundsPadding = 0;
		spoon_graphics2.alpha=0;
        
        spoon_graphics3 = this.add.graphics(647,358);
		spoon_graphics3.lineStyle(1, 0xFFFFFF, 0.8);
		spoon_graphics3.beginFill(0xFF0000, 1);
		spoon_graphics3.drawRect(-50, -10, 20,10);
		spoon_graphics3.boundsPadding = 0;
		spoon_graphics3.alpha=0;
        
        if(qnoA==1)
        {
            this.getVoice();
            this.time.events.add(1300,function(){
                spoon_graphics1.inputEnabled = true;
                spoon_graphics1.input.useHandCursor = true;
                spoon_graphics1.name="spoon";
                spoon_graphics2.inputEnabled = true;
                spoon_graphics2.input.useHandCursor = true;
                spoon_graphics2.angle=-5;
                spoon_graphics2.name="spoon";
                spoon_graphics3.inputEnabled = true;
                spoon_graphics3.input.useHandCursor = true;
                spoon_graphics3.angle=-35;
                spoon_graphics3.name="spoon";
                spoon_graphics1.events.onInputDown.add(this.triggerevent,this);
                spoon_graphics2.events.onInputDown.add(this.triggerevent,this);
                spoon_graphics3.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                spoon_graphics1.inputEnabled = true;
                spoon_graphics1.input.useHandCursor = true;
                spoon_graphics1.name="spoon";
                spoon_graphics2.inputEnabled = true;
                spoon_graphics2.input.useHandCursor = true;
                spoon_graphics2.angle=-5;
                spoon_graphics2.name="spoon";
                spoon_graphics3.inputEnabled = true;
                spoon_graphics3.input.useHandCursor = true;
                spoon_graphics3.angle=-35;
                spoon_graphics3.name="spoon";
                spoon_graphics1.events.onInputDown.add(this.triggerevent,this);
                spoon_graphics2.events.onInputDown.add(this.triggerevent,this);
                spoon_graphics3.events.onInputDown.add(this.triggerevent,this);
        }

       // this.addNumberPad();
        
        var redmark=this.add.sprite(380,230,'Level42A_redmark');
        redmark.scale.setTo(0.75,0.75);

        
        questgroupA=this.add.group();
        questgroupA.add(soda_shadow);
        questgroupA.add(spoon_shadow);
        questgroupA.add(soda);                   
        questgroupA.add(spoon);
        questgroupA.add(spoon_graphics1);
        questgroupA.add(spoon_graphics2);
        questgroupA.add(spoon_graphics3);
       // questgroupA.add(numGroup);
        questgroupA.add(redmark);
        questgroupA.x=960;
        var tween = this.add.tween(questgroupA);
        tween.to({ x: 0}, 0, 'Linear', true, 0);
        tween.onComplete.add(function(){  
         
        },this);
        
    },
    
    question6:function()
    {
        qnoA++;
        canincr=0;
        can_shadow = this.add.sprite(257,400,'Level42A_common_shadow');
        can_shadow.alpha=0.5;
        can_shadow.width-=20;
        bottleblue_shadow = this.add.sprite(556,405,'Level42A_common_shadow');
        bottleblue_shadow.alpha=0.5;
        bottleblue_shadow.width-=120;
        bottleblue_shadow.height-=5;
        can = this.add.sprite(230,65,'Level42A_can','<Group>_8 instance 10000');
        cananim=can.animations.add('can');
        bottleblue = this.add.sprite(557,150,'Level42A_bottleblue','Symbol 9 instance 10001');
        bottleblueanim=bottleblue.animations.add('bottleblue');
        
        bottleblue_graphics = this.add.graphics(623,200);
		bottleblue_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		bottleblue_graphics.beginFill(0xFF0000, 1);
		bottleblue_graphics.drawRect(-50, -10, 80,215);
		bottleblue_graphics.boundsPadding = 0;
		bottleblue_graphics.alpha=0;
        
        if(qnoA==1)
        {
            this.getVoice();
            this.time.events.add(1300,function(){
                bottleblue_graphics.inputEnabled = true;
                bottleblue_graphics.input.useHandCursor = true;
                bottleblue_graphics.name="bottleblue";
                bottleblue_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                bottleblue_graphics.inputEnabled = true;
                bottleblue_graphics.input.useHandCursor = true;
                bottleblue_graphics.name="bottleblue";
                bottleblue_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
       // this.addNumberPad();
        
        var redmark=this.add.sprite(450,172,'Level42A_redmark');
        redmark.scale.setTo(0.75,0.75);
        
        questgroupA=this.add.group();
        questgroupA.add(bottleblue_shadow);
        questgroupA.add(can_shadow);
        questgroupA.add(bottleblue);                   
        questgroupA.add(can);
        questgroupA.add(bottleblue_graphics);
       // questgroupA.add(numGroup);
        questgroupA.add(redmark);
        questgroupA.x=960;
        var tween = this.add.tween(questgroupA);
        tween.to({ x: 0}, 0, 'Linear', true, 0);
    },
    
    question7:function()
    {
        qnoA++;
        orangecanincr=0;
        orangecan_shadow = this.add.sprite(354,397,'Level42A_common_shadow');
        orangecan_shadow.alpha=0.5;
        orangecan_shadow.width-=120;
        cup_shadow = this.add.sprite(571,398,'Level42A_common_shadow');
        cup_shadow.alpha=0.5;
        cup_shadow.height-=5;
        cup_shadow.width-=120;
        orangecan = this.add.sprite(310,47,'Level42A_jug2','<Group>_3_0 instance 10000');
        orangecananim=orangecan.animations.add('orangecan');
        cup = this.add.sprite(527,298,'Level42A_cup','<Group>_4_0 instance 10001');
        cupanim=cup.animations.add('cup');
        
        cup_graphics1 = this.add.graphics(630,335);
		cup_graphics1.lineStyle(1, 0xFFFFFF, 0.8);
		cup_graphics1.beginFill(0xFF0000, 1);
		cup_graphics1.drawRect(-50, -10, 95,50);
		cup_graphics1.boundsPadding = 0;
		cup_graphics1.alpha=0;
        
        cup_graphics2 = this.add.graphics(650,385);
		cup_graphics2.lineStyle(1, 0xFFFFFF, 0.8);
		cup_graphics2.beginFill(0xFF0000, 1);
		cup_graphics2.drawRect(-50, -10, 55,25);
		cup_graphics2.boundsPadding = 0;
		cup_graphics2.alpha=0;
        
        if(qnoA==1)
        {
            this.getVoice();
            this.time.events.add(1300,function(){
                cup_graphics1.inputEnabled = true;
                cup_graphics1.input.useHandCursor = true;
                cup_graphics1.name="cup";
                cup_graphics2.inputEnabled = true;
                cup_graphics2.input.useHandCursor = true;
                cup_graphics2.name="cup";
                cup_graphics1.events.onInputDown.add(this.triggerevent,this);
                cup_graphics2.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                cup_graphics1.inputEnabled = true;
                cup_graphics1.input.useHandCursor = true;
                cup_graphics1.name="cup";
                cup_graphics2.inputEnabled = true;
                cup_graphics2.input.useHandCursor = true;
                cup_graphics2.name="cup";
                cup_graphics1.events.onInputDown.add(this.triggerevent,this);
                cup_graphics2.events.onInputDown.add(this.triggerevent,this);
        }
        
       // this.addNumberPad();
        
        var redmark=this.add.sprite(445,148,'Level42A_redmark');
        redmark.scale.setTo(0.75,0.75);
        questgroupA=this.add.group();
        questgroupA.add(orangecan_shadow);
        questgroupA.add(cup_shadow);
        questgroupA.add(cup);                   
        questgroupA.add(orangecan);
        questgroupA.add(cup_graphics1);
        questgroupA.add(cup_graphics2);
      //  questgroupA.add(numGroup);
        questgroupA.add(redmark);
        questgroupA.x=960;
        var tween = this.add.tween(questgroupA);
        tween.to({ x: 0}, 0, 'Linear', true, 0);
    },
    
    question8:function()
    {
        qnoA++;
        drumincr=0;
        drum_shadow = this.add.sprite(283,400,'Level42A_common_shadow');
        drum_shadow.alpha=0.5;
        drum_shadow.width-=75;
        cupreverse_shadow = this.add.sprite(578,403,'Level42A_common_shadow');
        cupreverse_shadow.alpha=0.5;
        cupreverse_shadow.width-=110;
        cupreverse_shadow.height-=5;
        drum = this.add.sprite(245,90,'Level42A_drum','<Group>_2_0 instance 10000');
        drumanim=drum.animations.add('drum');
        cupreverse = this.add.sprite(500,268,'Level42A_cupreverse','<Group>_47 instance 10001');
        cupreverseanim=cupreverse.animations.add('cupreverse');
        
        cupreverse_graphics = this.add.graphics(640,298);
		cupreverse_graphics.lineStyle(1, 0xFFFFFF, 0.8);
		cupreverse_graphics.beginFill(0xFF0000, 1);
		cupreverse_graphics.drawRect(-50, -10, 100,115);
		cupreverse_graphics.boundsPadding = 0;
		cupreverse_graphics.alpha=0;
        
        if(qnoA==1)
        {
            this.getVoice();
            this.time.events.add(1300,function(){
                cupreverse_graphics.inputEnabled = true;
                cupreverse_graphics.input.useHandCursor = true;
                cupreverse_graphics.name="cupreverse";
                cupreverse_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                cupreverse_graphics.inputEnabled = true;
                cupreverse_graphics.input.useHandCursor = true;
                cupreverse_graphics.name="cupreverse";
                cupreverse_graphics.events.onInputDown.add(this.triggerevent,this);      
        }
        
        var redmark=this.add.sprite(440,180,'Level42A_redmark');
        redmark.scale.setTo(0.75,0.75);
       // this.addNumberPad();
        
        questgroupA=this.add.group();
        questgroupA.add(drum_shadow);
        questgroupA.add(cupreverse_shadow);
        questgroupA.add(cupreverse);                   
        questgroupA.add(drum);
        questgroupA.add(cupreverse_graphics);
      //  questgroupA.add(numGroup);
        questgroupA.add(redmark);
        questgroupA.x=960;
        var tween = this.add.tween(questgroupA);
        tween.to({ x: 0}, 0, 'Linear', true, 0);
    },
    
    triggerevent:function(target){
        if(target.name=="pot")
            {
                _this.clickSound.play();
                syntexincr++;
                if(syntexincr>6)
                    {
                       pot.frameName='<Group>_90 copy instance 10006';
                       _this.wmusic.play(); 
                       shake.shake(10,syntex);
                    }
                else
                    {
                        if(syntexincr==6)
                        {
                            _this.waterFillingSound.stop();
                            syntex.frameName="<Group>_27 copy instance 10006";
                            _this.watersplash.play();
                            this.enablebuttons(target,6);
                        }  
                        else//less than 6
                        {
                            _this.waterFillingSound.play();
                            syntex.frameName="<Group>_27 copy instance 1000"+(syntexincr);
                        }    
                  }
            }
        if(target.name=="jug")
            {
                _this.clickSound.play();
                bucketincr++;
                if(bucketincr>8)
                    {
                      _this.wmusic.play(); 
                       shake.shake(10,bucket);
                       jug.frameName='<Group>_18 instance 10000';   
                    }
                else
                    {
                        if(bucketincr==8)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            this.enablebuttons(target,8);
                        }
                        else//less than 8
                        {
                            _this.waterFillingSound.play();
                        }

                        bucket.frameName="<Group>_19 instance 1000"+bucketincr;
                    } 
            }
            if(target.name=="bottle")
            {
                _this.clickSound.play();
                vesselincr++;
                if(vesselincr>4)
                    {
                       _this.wmusic.play();
                       shake.shake(10,vessel);
                       bottle.frameName='<Group>_17 instance 10001';
                    }
                else
                    {
                        if(vesselincr==4)
                        {
                            _this.waterFillingSound.stop();
                            vessel.frameName="<Group>_16 instance 10005";
                            _this.watersplash.play();
                            this.enablebuttons(target,4);
                        }
                        else//less than 4
                        {
                            _this.waterFillingSound.play();
                            vessel.frameName="<Group>_16 instance 1000"+(vesselincr);
                        }
                    } 
            }
            if(target.name=="glass")
            {
                _this.clickSound.play();
                pinkmugincr++;
                if(pinkmugincr>7)
                    {
                       _this.wmusic.play();
                       shake.shake(10,pinkmug); 
                       glass.frameName='<Group>_64 instance 10001';   
                    }
                else
                    {
                        if(pinkmugincr==7)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            this.enablebuttons(target,7);
                        }
                        else//less than 7
                        {
                            _this.waterFillingSound.play();
                        }
                        pinkmug.frameName="<Group>_13 instance 1000"+pinkmugincr;
                    } 
            }
        
            if(target.name=="spoon")
            {
                _this.clickSound.play();
                sodaincr++;
                if(sodaincr>10)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,soda);  
                       spoon_graphics2.inputEnabled=false;
                       spoon_graphics3.inputEnabled=false;  
                    }
                else
                    {
                        if(sodaincr==10)
                            {
                                _this.waterFillingSound.stop();
                                _this.watersplash.play();
                                this.enablebuttons(target,10);
                            }
                        else//less than 10
                            {
                                _this.waterFillingSound.play();
                            }
                        
                        if(sodaincr<=9)
                            soda.frameName="Symbol 7 instance 1000"+sodaincr;
                        else
                            soda.frameName="Symbol 7 instance 100"+sodaincr;
                    } 
            }
        
           if(target.name=="bottleblue")
            {
                _this.clickSound.play();
                canincr++;
                if(canincr>2)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,can);   
                       bottleblue.frameName='Symbol 9 instance 10001';
                    }
                else
                    {
                        if(canincr==2)
                        {
                            _this.waterFillingSound.stop();
                            can.frameName="<Group>_8 instance 10003";
                            _this.watersplash.play();
                            this.enablebuttons(target,2);
                        }
                        else//less than 2
                        {
                            _this.waterFillingSound.play();
                            can.frameName="<Group>_8 instance 1000"+canincr;
                        }
                    } 
            }
        
            if(target.name=="cup")
            {
                _this.clickSound.play();
                orangecanincr++;
                if(orangecanincr>5)
                    {
                       _this.wmusic.play();
                       shake.shake(10,orangecan);
                       cup.frameName='<Group>_4_0 instance 10001';  
                    }
                else
                    {
                        if(orangecanincr==5)
                        {
                            _this.waterFillingSound.stop();
                            orangecan.frameName="<Group>_3_0 instance 10006";
                            _this.watersplash.play();
                            this.enablebuttons(target,5);
                        }
                        else//less than 5
                        {
                            _this.waterFillingSound.play();
                            orangecan.frameName="<Group>_3_0 instance 1000"+(orangecanincr);
                        }
                    } 
            }
        
            if(target.name=="cupreverse")
            {
                _this.clickSound.play();
                drumincr++;
                if(drumincr>3)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,drum);
                       cupreverse.frameName='<Group>_47 instance 10001';
                    }
                else
                    {
                        if(drumincr==3)
                        {
                            _this.waterFillingSound.stop();
                            drum.frameName="<Group>_2_0 instance 10004";
                            _this.watersplash.play();
                            this.enablebuttons(target,3);
                        }
                        else//less than 3
                        {
                            _this.waterFillingSound.play();
                            drum.frameName="<Group>_2_0 instance 1000"+(drumincr);   
                        }  
                    } 
            }
    },
    
    addNumberPad:function(){
        var footer = this.add.sprite(0,465,'Level42A_footer');
        numGroup = this.add.group();
        numGroup.add(footer);
        var x = 55;
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,503,'Level42A_calNum'); 
            if(i<9)
                numbg.name = i+1;
            else
                numbg.name = 0;
            numbg.frame = i;
            grpnum.push(numbg);
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            //numbg.name = i;
            numbg.inputEnabled = false;
         //   numbg.input.useHandCursor = false;
            numbg.events.onInputDown.add(this.numClicked,this);
            x+=70;
        }
        
        txtbox = this.add.sprite(x+10,506,'Level42A_box','Symbol 30 copy instance 10001');
        txtbox.anchor.setTo(0.5);
        txtbox.width-=5;
        txtbox.height-=7;
        txtbox.name = "txtbox";
		txtbox.inputEnabled=true;
        txtbox.events.onInputDown.add(function(){
            txtbox.frame=1;
        },this);
        
        wrongbtn = numGroup.create(x+88,506,'Level42A_eraser','Symbol 14 copy 5 instance 10000');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.scale.setTo(1.20,1.20);
        wrongbtn.name = "wrongbtn";

        rightbtn = numGroup.create(x+150,506,'Level42A_rightBtn','Symbol 14 copy instance 10000');
        rightbtn.anchor.setTo(0.5);
        rightbtn.scale.setTo(1.20,1.20);
        rightbtn.name = "rightbtn";
       
        enterTxt = this.add.text(-2,1, selectedAns="");
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'myfont';
        enterTxt.fontSize = 40;
        enterTxt.fontWeight = 'normal';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
		numGroup.y = 50;
		var tweenopt = this.add.tween(numGroup);
        tweenopt.to({ y: 0}, 0, 'Linear', true, 0);
    },
    
    numClicked:function(target){
        _this.clickSound.play();
        if(selectedAns.length<2)
        {
			txtbox.frame=0;
            selectedAns += target.name;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
    },
    
    enablebuttons:function(target,rightAns){
		if(this.displaynopad==0)
        this.addNumberPad();
        this.displaynopad++;
        for(var i=0;i<10;i++)
        {
            grpnum[i].inputEnabled=true;
            grpnum[i].input.useHandCursor=true;
        }
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        wrongbtn.events.onInputDown.add(function(){
            wrongbtn.frameName="Symbol 14 copy 5 instance 10001";
			_this.clickSound.play();
			enterTxt.setText("");
			selectedAns="";
			this.time.events.add(1000,function(){
                wrongbtn.frameName="Symbol 14 copy 5 instance 10000";
            },this);
		},this);
        
        rightbtn.events.onInputDown.add(function(target){
			rightbtn.frame=1;
            noofAttempts++;
            _this.clickSound.play();
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
					this.displaynopad=0;
		            _this.cmusic.play();
                    /*var currentTime = window.timeSaveFunc();
                    var saveAsment = 
                    { 
                        id_game_play: _this.savedVar,
                        id_question: _this.questionid,  
                        pass: "Yes",
                        time2answer: AnsTimerCount,
                        attempts: noofAttempts,
                        date_time_submission: currentTime, 
                        access_token: window.acctkn 
                    }
                        
                    absdsjsapi.saveAssessment(saveAsment);*/

                    telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
    
                    _this.speakerbtn.inputEnabled=false;
                    rightbtn.inputEnabled=false;
                    var starAnim = starsGroupA.getChildAt(count1);
                    starAnim.smoothed = false;
                    var anim = starAnim.animations.add('star');
                    anim.play();
                    count1++;
					txtbox.frame=1;
					numGroup.y = 00;
                    var tween1 = this.add.tween(numGroup);
                    tween1.to({ y: 100 }, 0, 'Linear', true, 0);
                    this.time.events.add(1000,function(){
                        rightbtn.events.onInputDown.removeAll();  
                        var tween = this.add.tween(questgroupA);
                        tween.to({ x: -1000}, 0, 'Linear', true, 0);
                        tween.onComplete.add(function(){  

                            this.nextquestion();
                        },this);
                    },this);
                }
            else
                {
                    _this.wmusic.play(); 
					this.time.events.add(500,function(){
                       rightbtn.frame=0;
                    },this);
                    selectedAns = "";
                    enterTxt.setText("");
                    shake.shake(10,txtbox);
                }
        },this);
        
    },
    
    nextquestion:function(){
        if(timer){
            timer.stop();
            timer=null;
        }
        
        if(qnoA<6)
            {
                this.getQuestion();
            }
            else
            {
                this.stopVoice();
				this.state.start('grade4_2AScore');
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
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2A/English/4.2A1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2A/Hindi/4.2A1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2A/Kannada/4.2A1.mp3");
        }
		else if(window.languageSelected=="Gujarati")
		{
			 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.2A/4.2A1.mp3");
		}
		else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2A/Marathi/4.2A1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2A/telugu/4.2A1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2A/Tamil/4.2A1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2A/Urdu/4.2A1.mp3");
                    }
		else 
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2A/Odiya/4.2A1.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
    
    updateTimer:function() {
        
     counterForTimer++;
     if(counterForTimer>59)
         {
          counterForTimer = 0;
           if(minutes<10){
                 minutes =  minutes+1;
                 seconds = 00;
                        }
             else{
                 minutes =  minutes+1;
                   
                 }
         }
                else{
                        if (counterForTimer < 10)        
                                seconds = '0' + counterForTimer;
                        else
                                seconds = counterForTimer;
                    }
     timeDisplay.setText(minutes+':' + seconds);
},
    
    shutdown:function()
    {
        _this.stopVoice();
        _this.waterFillingSound =null;
        _this.watersplash =null;
        _this.celebrationSound = null;
        _this.playQuestionSound = null;
        _this.wmusic=null;
        _this.clickSound=null;
        delete background;
        delete questiongroupA;
        count=0;
        count1=0;
        qnoA=0;
        delete questarrayA;
        delete starsGroupA;
        delete questgroupA;
        syntexincr=0;
        bucketincr=0;
        vesselincr=0;
        pinkmugincr=0;
        sodaincr=0;
        canincr=0;
        drumincr=0;
        delete box;
        boxtext=null;
        delete tickmark;
        delete speakerBtn;
        delete tickmark1,tickmark2;
        delete pot_graphics,jug_graphics,bottle_graphics,glass_graphics,spoon_graphics1,spoon_graphics2,spoon_graphics3,bottleblue_graphics;
        delete numGroup;
        enterTxt=null;
        txtbox=null;
        boxclick=null;
        delete numGroup;
        delete counterText;
        delete grpnum;
        minutes=0;
        seconds=0;
        counterForTimer=0;
        noofAttempts=0;
        delete timer;
        AnsTimerCount=0;
        gameid=null;
        delete selectedAns;
    },    
            
};