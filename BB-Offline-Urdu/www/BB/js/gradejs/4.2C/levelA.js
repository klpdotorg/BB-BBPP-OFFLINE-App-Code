Game.grade4_2Clevel1=function(){};

var background;
var count;
var count1;
var qnoC;
var questarrayC=new Array();
var starsGroupC;
var questgroupC;
var potcincr=0,drumcincr=0,sodacincr=0,orangemugcincr=0,bottlecincr=0,orangecancincr=0,greenbottlecincr=0,pinkbucketcincr=0,redjugcincr=0,yellowctcincr=0,nipplecincr=0,glassincr=0,bluebottlecincr=0,greencupcincr=0,greencupreverseincr=0,redjugc2incr=0,redjugc2incr=0,greencupreverseincr=0;
var boxb;
var potc_graphics,drumc_graphics,sodac1_graphics,sodac2_graphics,orangemugc1_graphics,orangemugc2_graphics;
var bottlec1_graphics,bottlec2_graphics,orangecan_graphics,greenbottlec_graphics,pinkbucketc_graphics;
var yellowctc1_graphics,yellowctc2_graphics,redjugc_graphics,nipplec1_graphics,nipplec2_graphics,glass_graphics;
var greencupc_graphics,bluebottlec_graphics,redjugc2_graphics,greencupreverse_graphics;
var newpotcincr=1,newbottleincr=1,newyellowctcincr=1,newnipplecincr=1,newbluebottlecincr=1,newgreencupcincr=1,newgreencupreverseincr=1;
var grpnum=new Array();
var boxclick;
var numGroup;
var box1,box2;
var counterText;
var counterText1;
var minutes,seconds,counterForTimer;
var redmark;
var noofAttempts;
var timer;
var AnsTimerCount;
var gameid;
var wrongflag;
var leftmost;
var AnimOpt1;
Game.grade4_2Clevel1.prototype={
init:function(game)
    {
        _this = this;

        telInitializer.gameIdInit("volume4_2C",gradeSelected);

        _this.clickSound = _this.add.audio('ClickSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.waterFillingSound =_this.add.audio('waterFill');
        _this.watersplash =_this.add.audio('watersplash');
        _this.cmusic = _this.add.audio('celebr');
        _this.gameid = "4.2C";
    },

     preload:function(game){
        if(!window.grade4MVG4){

            window.grade4MVG4 = true;

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

            this.load.image('Level42C_bgC',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/bgC.png');
        this.load.atlas('Level42C_btn',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/btn.png',window.baseUrl+'json/gradeJson/4.2C/btn.json');
        this.load.image('Level42C_bg3',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/bg3.png');
        this.load.image('Level42C_tittleBaar',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/tittleBaar.png');
        this.load.atlas('Level42C_replay',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/reply.png' ,window.baseUrl+'json/gradeJson/4.2C/reply.json');
        this.load.image('Level42C_footer',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/footer.png');
        this.load.image('Level42C_Topbar',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/Topbar.png');
        this.load.image('Level42C_timer',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/timer.png');
        this.load.image('Level42C_dottedBox',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/dottedBox.png');
        this.load.image('Level42C_c',window.baseUrl+'assets/gradeAssets/4.2C/commonAssets/c.png');
        //this.load.atlas('Level42C_calNum',window.baseUrl+'assets/gradeAssets/4.2C/calNum.png' ,window.baseUrl+'json/gradeJson/4.2C/calNum.json');
        this.load.atlas('Level42C_calNum',window.baseUrl+'assets/gradeAssets/4.2C/numbers.png' ,window.baseUrl+'json/gradeJson/4.2C/numbers.json');
        this.load.atlas('Level42C_glass',window.baseUrl+'assets/gradeAssets/4.2C/glass.png' ,window.baseUrl+'json/gradeJson/4.2C/glass.json');
        this.load.atlas('Level42C_box',window.baseUrl+'assets/gradeAssets/4.2C/box.png',window.baseUrl+'json/gradeJson/4.2C/box.json');
        this.load.image('Level42C_redmark',window.baseUrl+'assets/gradeAssets/4.2C/redmark.png');
        
        this.load.atlas('Level42C_bluebottlec',window.baseUrl+'assets/gradeAssets/4.2C/bluebottlec.png' ,window.baseUrl+'json/gradeJson/4.2C/bluebottlec.json');
        this.load.atlas('Level42C_bluebucketc1',window.baseUrl+'assets/gradeAssets/4.2C/bluebucketc1.png' ,window.baseUrl+'json/gradeJson/4.2C/bluebucketc1.json');
        this.load.atlas('Level42C_bluebucketc2',window.baseUrl+'assets/gradeAssets/4.2C/bluebucketc2.png' ,window.baseUrl+'json/gradeJson/4.2C/bluebucketc2.json');
        this.load.atlas('Level42C_bottlec',window.baseUrl+'assets/gradeAssets/4.2C/bottlec.png' ,window.baseUrl+'json/gradeJson/4.2C/bottlec.json');
        this.load.atlas('Level42C_greenmugc1',window.baseUrl+'assets/gradeAssets/4.2C/greenmugc1.png' ,window.baseUrl+'json/gradeJson/4.2C/greenmugc1.json');
        this.load.atlas('Level42C_greenmugc2',window.baseUrl+'assets/gradeAssets/4.2C/greenmugc2.png' ,window.baseUrl+'json/gradeJson/4.2C/greenmugc2.json');
        this.load.atlas('Level42C_pinkbucketc',window.baseUrl+'assets/gradeAssets/4.2C/pinkbucketc.png' ,window.baseUrl+'json/gradeJson/4.2C/pinkbucketc.json');
        this.load.atlas('Level42C_potsplash1',window.baseUrl+'assets/gradeAssets/4.2C/potsplash1.png' ,window.baseUrl+'json/gradeJson/4.2C/potsplash1.json');
        this.load.atlas('Level42C_potsplash2',window.baseUrl+'assets/gradeAssets/4.2C/potsplash2.png' ,window.baseUrl+'json/gradeJson/4.2C/potsplash2.json');
        this.load.atlas('Level42C_vessel1',window.baseUrl+'assets/gradeAssets/4.2C/vessel1.png' ,window.baseUrl+'json/gradeJson/4.2C/vessel1.json');
        this.load.atlas('Level42C_vessel2',window.baseUrl+'assets/gradeAssets/4.2C/vessel2.png' ,window.baseUrl+'json/gradeJson/4.2C/vessel2.json');
        this.load.atlas('Level42C_yellowctc',window.baseUrl+'assets/gradeAssets/4.2C/yellowctc.png' ,window.baseUrl+'json/gradeJson/4.2C/yellowctc.json');
        this.load.image('Level42C_maskbg',window.baseUrl+'assets/gradeAssets/4.2C/maskbg.png');
        this.load.image('Level42C_common_shadow',window.baseUrl+'assets/gradeAssets/4.2C/common_shadow.png');
        this.load.atlas('Level42C_tank1',window.baseUrl+'assets/gradeAssets/4.2C/tank1.png' ,window.baseUrl+'json/gradeJson/4.2C/tank1.json');
        this.load.atlas('Level42C_tank2',window.baseUrl+'assets/gradeAssets/4.2C/tank2.png' ,window.baseUrl+'json/gradeJson/4.2C/tank2.json');
        this.load.atlas('Level42C_drum2',window.baseUrl+'assets/gradeAssets/4.2C/drum.png' ,window.baseUrl+'json/gradeJson/4.2C/drum.json');
        this.load.atlas('Level42C_pot2',window.baseUrl+'assets/gradeAssets/4.2C/pot.png' ,window.baseUrl+'json/gradeJson/4.2C/pot.json');
        this.load.atlas('Level42C_cooker1',window.baseUrl+'assets/gradeAssets/4.2C/cooker1.png' ,window.baseUrl+'json/gradeJson/4.2C/cooker1.json');
        this.load.atlas('Level42C_cooker2',window.baseUrl+'assets/gradeAssets/4.2C/cooker2.png' ,window.baseUrl+'json/gradeJson/4.2C/cooker2.json');
        this.load.atlas('Level42C_bottleB',window.baseUrl+'assets/gradeAssets/4.2C/bottle.png' ,window.baseUrl+'json/gradeJson/4.2C/bottle.json');
        this.load.atlas('Level42C_jugB',window.baseUrl+'assets/gradeAssets/4.2C/jug.png' ,window.baseUrl+'json/gradeJson/4.2C/jug.json');
        this.load.image('Level42C_coffeecup',window.baseUrl+'assets/gradeAssets/4.2C/coffeecup.png');
        this.load.atlas('Level42C_mug1',window.baseUrl+'assets/gradeAssets/4.2C/mug1.png' ,window.baseUrl+'json/gradeJson/4.2C/mug1.json');
        this.load.atlas('Level42C_mug2',window.baseUrl+'assets/gradeAssets/4.2C/mug2.png' ,window.baseUrl+'json/gradeJson/4.2C/mug2.json');
        this.load.atlas('Level42C_can1',window.baseUrl+'assets/gradeAssets/4.2C/can1.png' ,window.baseUrl+'json/gradeJson/4.2C/can1.json');
        this.load.atlas('Level42C_can2',window.baseUrl+'assets/gradeAssets/4.2C/can2.png' ,window.baseUrl+'json/gradeJson/4.2C/can2.json');
        this.load.atlas('Level42C_greenbot22',window.baseUrl+'assets/gradeAssets/4.2C/greenbot22.png' ,window.baseUrl+'json/gradeJson/4.2C/greenbot22.json');
        this.load.image('Level42C_greena1',window.baseUrl+'assets/gradeAssets/4.2C/greena1.png');
        this.load.image('Level42C_a1',window.baseUrl+'assets/gradeAssets/4.2C/a1.png');
        this.load.atlas('Level42C_a11',window.baseUrl+'assets/gradeAssets/4.2C/a11.png',window.baseUrl+'json/gradeJson/4.2C/a11.json'); 
        this.load.atlas('Level42C_boxb',window.baseUrl+'assets/gradeAssets/4.2C/boxb.png' ,window.baseUrl+'json/gradeJson/4.2C/boxb.json');
        this.load.atlas('Level42C_numbg',window.baseUrl+'assets/gradeAssets/4.2C/numbg.png' ,window.baseUrl+'json/gradeJson/4.2C/numbg.json');
        this.load.atlas('Level42C_rightBtn',window.baseUrl+'assets/gradeAssets/4.2C/rightBtn.png' ,window.baseUrl+'json/gradeJson/4.2C/rightBtn.json');
        this.load.atlas('Level42C_eraser',window.baseUrl+'assets/gradeAssets/4.2C/eraser.png' ,window.baseUrl+'json/gradeJson/4.2C/eraser.json');


    }

    },


    create:function(game){
		_this.amplify = null;
		this.displaynopad=0;
        noofAttempts=0;
        AnsTimerCount=0;
         _this.sceneCount=0;
		leftmost=null;
         wrongflag=0;
        qnoC=0;
        count1=0;
        questarrayC=[1,2,3,4,5,6,7,8];
        questarrayC = this.shuffle(questarrayC);
        count = 0;
        minutes=0;
        seconds=0;
        counterForTimer=0;
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);
        
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();
        
        background = this.add.tileSprite(0,0,this.world.width,this.world.height, 'Level42C_bgC');
        
        var TopBar=this.add.sprite(0,0,'Level42C_Topbar');
    
        TopBar.scale.setTo(1,1);

        _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            console.log("back");
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            _this.clickSound.play();
            _this.state.start('grade4levelSelectionScreen',true,false); 
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level42A_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            _this.clickSound.play();
           
            _this.getVoice(no1);
            
        },_this);
    
   
    //  var points=this.add.sprite(720,7,'points');
    // var diamondBox=this.add.sprite(820,7,'diamondBox');
    /*var dottedBox=this.add.sprite(70,7,'Level42C_dottedBox');
    var numTxt1 = this.add.text(45,17, 'PRACTICE');
    numTxt1.anchor.setTo(0.5);
    numTxt1.align = 'center';
    numTxt1.font = 'Alte Haas Grotesk';
    numTxt1.fontSize = 12;
    numTxt1.fill = '#ffffff';
    numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
    dottedBox.addChild(numTxt1);*/
        
    /*var numTxt2 = this.add.text(195,24, 'Volume');
    numTxt2.anchor.setTo(0.5);
    numTxt2.align = 'center';
    numTxt2.font = 'Alte Haas Grotesk';
    numTxt2.fontSize = 18;
    numTxt2.fill = '#ffffff';
    numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
    var timebg=this.add.sprite(305,6,'Level42C_timer');
    timebg.scale.setTo(1,1);
        
    timeDisplay = this.add.text(330,22,minutes + ' : '+ seconds);
    
    timeDisplay.anchor.setTo(0.5);
    timeDisplay.align = 'center';
    timeDisplay.font = 'myfont';
    timeDisplay.fontWeight = 'normal';
    timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    timeDisplay.fill = '#ADFF2F';
      //  var footer = this.add.sprite(0,465,'Level42C_footer');
       // footer.scale.setTo(1,1);
        
        this.generateStarsForTheScene(6);
        this.getQuestion();
    },
    
    
    generateStarsForTheScene:function(count)
    {
        starsGroupC = this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            starsGroupC.create(this.world.centerX-15, 10, 'starAnim1');
            for(var j =0;j<i;j++)
            {
                if(starsGroupC.getChildAt(j))
                {
                    starsGroupC.getChildAt(j).x-=15;
                    starsGroupC.getChildAt(i).x+=15;
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
        grpnum=new Array();
        noofAttempts = 0;
         AnsTimerCount=0;
         if(wrongflag==0)
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
        switch(questarrayC[qnoC])
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
        qnoC++;
        greenpotc_shadow = this.add.sprite(97,380,'Level42C_common_shadow');
        greenpotc_shadow.width-=120;
        greenpotc_shadow.alpha=0.5;
        drumc_shadow = this.add.sprite(350,375,'Level42C_common_shadow');
        drumc_shadow.width-=65;
        drumc_shadow.alpha=0.5;
        drumc_shadow.height+=10;
        syntexc_shadow = this.add.sprite(633,383,'Level42C_common_shadow');
        syntexc_shadow.width-=50;
        syntexc_shadow.alpha=0.5;
        greenpotc = this.add.sprite(65,165,'Level42C_pot2','<Group>_90 copy instance 10000');
        greenpotc.width+=50;
        greenpotc.height+=50;
        greenpotcanim=greenpotc.animations.add('greenpotc');
        maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
        maskbg.height-=40;
        drumc = this.add.sprite(318,102,'Level42C_drum2','<Group>_450 copy instance 10000');
        drumc.width+=70;
        drumc.height+=40;
        drumc.inputEnabled=true;
        drumcanim=drumc.animations.add('drumc');
        syntexc = this.add.sprite(612,113,'Level42C_tank2','<Group>_449 copy 2 instance 10001');
        syntexcanim=syntexc.animations.add('syntexc');
        syntexc.inputEnabled=false;
        
        drumc_graphics = this.add.graphics(410,200);
        drumc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        drumc_graphics.beginFill(0xFF0000, 1);
        drumc_graphics.drawRect(-50, -10, 153,195);
        drumc_graphics.boundsPadding = 0;
        drumc_graphics.alpha=0;
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(1300,function(){
                drumc_graphics.inputEnabled = true;
                drumc_graphics.input.useHandCursor = true;
                drumc_graphics.name="drumc";
                drumc_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
            drumc_graphics.inputEnabled = true;
            drumc_graphics.input.useHandCursor = true;
            drumc_graphics.name="drumc";
            drumc_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        potc_graphics = this.add.graphics(204,327);
        potc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        potc_graphics.beginFill(0xFF0000, 1);
        potc_graphics.drawCircle(-50, -10, 130);
        potc_graphics.boundsPadding = 0;
        potc_graphics.alpha=0;
        potc_graphics.inputEnabled = false;
        potc_graphics.name="potc";
        potc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        box1=this.add.sprite(120,405,'Level42C_box','Symbol 30 copy instance 10001');
        box1.scale.setTo(1,0.8);
        box1.alpha=0;
        box1.name="opt1box";
         
        box2=this.add.sprite(400,405,'Level42C_box','Symbol 30 copy instance 10001');
        box2.scale.setTo(1,0.8);
        box2.alpha=0;
        box2.name="opt2box";
        
        redmark=this.add.sprite(813,200,'Level42C_redmark');
        redmark.scale.setTo(0.75,0.75);
        
       // this.addNumberPad(); 
        
        boxb = this.add.sprite(598,120,'Level42C_boxb');
        boxb.height+=20;
        boxb.visible=false;
        this.questionaftertrigger('potc','before');
    },
    
    question2:function()
    {
        qnoC++;
        sodac_shadow = this.add.sprite(115,383,'Level42C_common_shadow');
        sodac_shadow.width-=140;
        sodac_shadow.alpha=0.5;
        orangemugc_shadow = this.add.sprite(378,383,'Level42C_common_shadow');
        orangemugc_shadow.width-=145;
        orangemugc_shadow.alpha=0.5;
        vessel1c_shadow = this.add.sprite(634,384,'Level42C_common_shadow');
        vessel1c_shadow.width-=50;
        vessel1c_shadow.alpha=0.5;
        sodac = this.add.sprite(77,155,'Level42C_bottleB','<Group>_74 copy instance 10000');
        sodac.width+=40;
        sodac.height+=40;
        sodacanim=sodac.animations.add('sodac');
        maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
        maskbg.height-=40;
        orangemugc = this.add.sprite(334,105,'Level42C_jugB','<Group>_57 copy instance 10000');
        orangemugc.width+=70;
        orangemugc.height+=70;
        orangemugc.inputEnabled=true;
        orangemugcanim=orangemugc.animations.add('orangemugc');
        vessel1c = this.add.sprite(607,201,'Level42C_cooker1','<Group>_73 copy 5 instance 10000');
        vessel1canim=vessel1c.animations.add('vessel1c');
        vessel1c.inputEnabled=false;
        
        sodac1_graphics = this.add.graphics(182,290);
        sodac1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        sodac1_graphics.beginFill(0xFF0000, 1);
        sodac1_graphics.drawRect(-50, -10, 62,110);
        sodac1_graphics.boundsPadding = 0;
        sodac1_graphics.alpha=0;
        sodac1_graphics.inputEnabled = false;
        sodac1_graphics.name="sodac";
        sodac1_graphics.events.onInputDown.add(this.triggerevent,this);
        
        sodac2_graphics = this.add.graphics(195,230);
        sodac2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        sodac2_graphics.beginFill(0xFF0000, 1);
        sodac2_graphics.drawRect(-50, -10, 35,60);
        sodac2_graphics.boundsPadding = 0;
        sodac2_graphics.alpha=0;
        sodac2_graphics.inputEnabled = false;
        sodac2_graphics.name="sodac";
        sodac2_graphics.events.onInputDown.add(this.triggerevent,this);
        
        orangemugc1_graphics = this.add.graphics(449,250);
        orangemugc1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        orangemugc1_graphics.beginFill(0xFF0000, 1);
        orangemugc1_graphics.drawRect(-50, -10, 70,150);
        orangemugc1_graphics.boundsPadding = 0;
        orangemugc1_graphics.alpha=0;
        
        orangemugc2_graphics = this.add.graphics(463,188);
        orangemugc2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        orangemugc2_graphics.beginFill(0xFF0000, 1);
        orangemugc2_graphics.drawRect(-50, -10, 40,60);
        orangemugc2_graphics.boundsPadding = 0;
        orangemugc2_graphics.alpha=0;
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(1300,function(){
                orangemugc1_graphics.inputEnabled = true;
                orangemugc1_graphics.input.useHandCursor = true;
                orangemugc1_graphics.name="orangemugc";
                orangemugc1_graphics.events.onInputDown.add(this.triggerevent,this);
                orangemugc2_graphics.inputEnabled = true;
                orangemugc2_graphics.input.useHandCursor = true;
                orangemugc2_graphics.name="orangemugc";
                orangemugc2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
            orangemugc1_graphics.inputEnabled = true;
            orangemugc1_graphics.input.useHandCursor = true;
            orangemugc1_graphics.name="orangemugc";
            orangemugc1_graphics.events.onInputDown.add(this.triggerevent,this);
            orangemugc2_graphics.inputEnabled = true;
            orangemugc2_graphics.input.useHandCursor = true;
            orangemugc2_graphics.name="orangemugc";
            orangemugc2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        redmark=this.add.sprite(825,270,'Level42C_redmark');
        redmark.scale.setTo(0.75,0.75);
        
        box1=this.add.sprite(127,405,'Level42C_box','Symbol 30 copy instance 10001');
        box1.scale.setTo(1,0.8);
        box1.alpha=0;
        box1.name="opt1box";
         
        box2=this.add.sprite(387,405,'Level42C_box','Symbol 30 copy instance 10001');
        box2.scale.setTo(1,0.8);
        box2.alpha=0;
        box2.name="opt2box";
        
        //this.addNumberPad(); 
        boxb = this.add.sprite(598,120,'Level42C_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('sodac','before');
    },
    
    question3:function()
    {
        qnoC++;
        orangecanc_shadow = this.add.sprite(65,380,'Level42C_common_shadow');
        orangecanc_shadow.width-=80;
        orangecanc_shadow.alpha=0.5;
        bottlec_shadow = this.add.sprite(400,380,'Level42C_common_shadow');
        bottlec_shadow.width-=150;
        bottlec_shadow.alpha=0.5;
        //bottlec_shadow.height+=10;
        mugc_shadow = this.add.sprite(626,380,'Level42C_common_shadow');
        mugc_shadow.width-=74;
        mugc_shadow.alpha=0.5;
        orangecanc = this.add.sprite(27,137,'Level42C_can1','<Group>_51 copy 4 instance 10000');
        orangecanc.width+=30;
        orangecanc.height+=10;
        orangecancanim=orangecanc.animations.add('orangecanc');
        maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
        maskbg.height-=40;
        bottlec = this.add.sprite(385,154,'Level42C_bottlec','<Group>_452 instance 10001');
        bottlec.width+=40;
        bottlec.height+=70;
        bottlec.inputEnabled=true;
        bottlecanim=bottlec.animations.add('bottlec');
        mugc = this.add.sprite(600,120,'Level42C_mug2','<Group>_453 copy 2 instance 10001');
        mugcanim=mugc.animations.add('mugc');
        mugc.inputEnabled=false;
        
        bottlec1_graphics = this.add.graphics(460,225);
        bottlec1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        bottlec1_graphics.beginFill(0xFF0000, 1);
        bottlec1_graphics.drawRect(-50, -10, 70,170);
        bottlec1_graphics.boundsPadding = 0;
        bottlec1_graphics.alpha=0;
        
        bottlec2_graphics = this.add.graphics(495,220);
        bottlec2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        bottlec2_graphics.beginFill(0xFF0000, 1);
        bottlec2_graphics.drawCircle(-50, -10, 40,10);
        bottlec2_graphics.boundsPadding = 0;
        bottlec2_graphics.alpha=0;
        
        orangecanc_graphics = this.add.graphics(106,225);
        orangecanc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        orangecanc_graphics.beginFill(0xFF0000, 1);
        orangecanc_graphics.drawRect(-50, -10, 165,170);
        orangecanc_graphics.boundsPadding = 0;
        orangecanc_graphics.alpha=0;
        orangecanc_graphics.inputEnabled = false;
        orangecanc_graphics.name="orangecanc";
        orangecanc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(1300,function(){
                bottlec1_graphics.inputEnabled = true;
                bottlec1_graphics.input.useHandCursor = true;
                bottlec1_graphics.name="bottlec";
                bottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
                bottlec2_graphics.inputEnabled = true;
                bottlec2_graphics.input.useHandCursor = true;
                bottlec2_graphics.name="bottlec";
                bottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                bottlec1_graphics.inputEnabled = true;
                bottlec1_graphics.input.useHandCursor = true;
                bottlec1_graphics.name="bottlec";
                bottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
                bottlec2_graphics.inputEnabled = true;
                bottlec2_graphics.input.useHandCursor = true;
                bottlec2_graphics.name="bottlec";
                bottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        redmark=this.add.sprite(772,164,'Level42C_redmark');
        redmark.scale.setTo(0.75,0.75);
        
        box1=this.add.sprite(106,405,'Level42C_box','Symbol 30 copy instance 10001');
        box1.scale.setTo(1,0.8);
        box1.alpha=0;
        box1.name="opt1box";
         
        box2=this.add.sprite(408,405,'Level42C_box','Symbol 30 copy instance 10001');
        box2.scale.setTo(1,0.8);
        box2.alpha=0;
        box2.name="opt2box";
        
        //this.addNumberPad(); 
        boxb = this.add.sprite(598,120,'Level42C_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('orangecanc','before');
        
    },
    
    question4:function()
    {
        qnoC++;
        pinkbucketc_shadow = this.add.sprite(107,373,'Level42C_common_shadow');
        pinkbucketc_shadow.width-=155;
        pinkbucketc_shadow.alpha=0.5;
        greenbottlec_shadow = this.add.sprite(382,375,'Level42C_common_shadow');
        greenbottlec_shadow.width-=130;
        greenbottlec_shadow.alpha=0.5;
        //bottlec_shadow.height+=10;
        bluecanc_shadow = this.add.sprite(635,375,'Level42C_common_shadow');
        bluecanc_shadow.width-=55;
        bluecanc_shadow.alpha=0.5;
        pinkbucketc = this.add.sprite(86,255,'Level42C_pinkbucketc','<Group>_460 instance 10000');
        pinkbucketc.width-=40;
        pinkbucketc.height-=40;
        pinkbucketcanim=pinkbucketc.animations.add('pinkbucketc');
        maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
        maskbg.height-=40;
        greenbottlec = this.add.sprite(363,128,'Level42C_greenbot22','<Group>_413 copy instance 10000');
        greenbottlec.width+=15;
        greenbottlec.height+=20;
        greenbottlec.inputEnabled=true;
        greenbottlecanim=greenbottlec.animations.add('greenbottlec');
        bluecanc = this.add.sprite(621,140,'Level42C_can1','<Group>_51 copy 4 instance 10001');
        bluecancanim=bluecanc.animations.add('bluecanc');
        bluecanc.inputEnabled=false;
        
        greenbottlec1_graphics = this.add.graphics(450,225);
        greenbottlec1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        greenbottlec1_graphics.beginFill(0xFF0000, 1);
        greenbottlec1_graphics.drawRect(-50, -10, 70,170);
        greenbottlec1_graphics.boundsPadding = 0;
        greenbottlec1_graphics.alpha=0;
        
        greenbottlec2_graphics = this.add.graphics(485,215);
        greenbottlec2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        greenbottlec2_graphics.beginFill(0xFF0000, 1);
        greenbottlec2_graphics.drawCircle(-50, -10, 40,10);
        greenbottlec2_graphics.boundsPadding = 0;
        greenbottlec2_graphics.alpha=0;
        
        pinkbucketc_graphics = this.add.graphics(158,280);
        pinkbucketc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        pinkbucketc_graphics.beginFill(0xFF0000, 1);
        pinkbucketc_graphics.drawRect(-50, -10, 75,110);
        pinkbucketc_graphics.boundsPadding = 0;
        pinkbucketc_graphics.alpha=0;
        pinkbucketc_graphics.inputEnabled = false;
        pinkbucketc_graphics.name="pinkbucketc";
        pinkbucketc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(1300,function(){
                greenbottlec1_graphics.inputEnabled = true;
                greenbottlec1_graphics.input.useHandCursor = true;
                greenbottlec1_graphics.name="greenbottlec";
                greenbottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
                greenbottlec2_graphics.inputEnabled = true;
                greenbottlec2_graphics.input.useHandCursor = true;
                greenbottlec2_graphics.name="greenbottlec";
                greenbottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                greenbottlec1_graphics.inputEnabled = true;
                greenbottlec1_graphics.input.useHandCursor = true;
                greenbottlec1_graphics.name="greenbottlec";
                greenbottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
                greenbottlec2_graphics.inputEnabled = true;
                greenbottlec2_graphics.input.useHandCursor = true;
                greenbottlec2_graphics.name="greenbottlec";
                greenbottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        redmark=this.add.sprite(803,205,'Level42C_redmark');
        redmark.scale.setTo(0.75,0.75);
        
        box1=this.add.sprite(111,405,'Level42C_box','Symbol 30 copy instance 10001');
        box1.scale.setTo(1,0.8);
        box1.alpha=0;
        box1.name="opt1box";
         
        box2=this.add.sprite(399,405,'Level42C_box','Symbol 30 copy instance 10001');
        box2.scale.setTo(1,0.8);
        box2.alpha=0;
        box2.name="opt2box";
        
        //this.addNumberPad(); 
        boxb = this.add.sprite(598,120,'Level42C_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('pinkbucketc','before');
    },
    
    question5:function()
    {
        qnoC++;
        redjugc_shadow = this.add.sprite(102,375,'Level42C_common_shadow');
        redjugc_shadow.width-=130;
        redjugc_shadow.alpha=0.5;
        nipplec_shadow = this.add.sprite(397,373,'Level42C_common_shadow');
        nipplec_shadow.width-=170;
        nipplec_shadow.alpha=0.5;
        bluebucketc_shadow = this.add.sprite(648,375,'Level42C_common_shadow');
        bluebucketc_shadow.width-=94;
        bluebucketc_shadow.alpha=0.5;
        redjugc = this.add.sprite(65,270,'Level42C_a1');
        redjugc.width+=90;
        redjugc.height+=60;
        redjugcanim=redjugc.animations.add('redjugc');
        maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
        maskbg.height-=40;
        nipplec = this.add.sprite(365,285,'Level42C_a11','<Group>_373 instance 10003');//nipplec
        nipplec.width+=20;
        nipplec.height+=20;
        nipplec.inputEnabled=true;
        nipplecanim=nipplec.animations.add('nipplec');
        bluebucketc = this.add.sprite(601,160,'Level42C_bluebucketc2','<Group>_15 copy 4 instance 10000');
        bluebucketc.width-=70;
        bluebucketc.height-=70;
        bluebucketcanim=bluebucketc.animations.add('bluebucketc');
        bluebucketc.inputEnabled=false;
        
        nipplec1_graphics = this.add.graphics(454,315);//484,340
        nipplec1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        nipplec1_graphics.beginFill(0xFF0000, 1);
        nipplec1_graphics.drawRect(-50, -10, 55,80);//80,60
        nipplec1_graphics.boundsPadding = 0;
        nipplec1_graphics.alpha=0;
        
        nipplec2_graphics = this.add.graphics(505,288);//500,304
        nipplec2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        nipplec2_graphics.beginFill(0xFF0000, 1);
        nipplec2_graphics.drawRect(-50, -10, 30,25);//50,37
        nipplec2_graphics.boundsPadding = 0;
        nipplec2_graphics.alpha=0;
        
        redjugc_graphics = this.add.graphics(170,305);
        redjugc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        redjugc_graphics.beginFill(0xFF0000, 1);
        redjugc_graphics.drawRect(-50, -10, 70,80);
        redjugc_graphics.boundsPadding = 0;
        redjugc_graphics.alpha=0;
        redjugc_graphics.inputEnabled = false;
        redjugc_graphics.name="redjugc";
        redjugc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(1300,function(){
                nipplec1_graphics.inputEnabled = true;
                nipplec1_graphics.input.useHandCursor = true;
                nipplec1_graphics.name="nipplec";
                nipplec1_graphics.events.onInputDown.add(this.triggerevent,this);
                nipplec2_graphics.inputEnabled = true;
                nipplec2_graphics.input.useHandCursor = true;
                nipplec2_graphics.name="nipplec";
                nipplec2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                nipplec1_graphics.inputEnabled = true;
                nipplec1_graphics.input.useHandCursor = true;
                nipplec1_graphics.name="nipplec";
                nipplec1_graphics.events.onInputDown.add(this.triggerevent,this);
                nipplec2_graphics.inputEnabled = true;
                nipplec2_graphics.input.useHandCursor = true;
                nipplec2_graphics.name="nipplec";
                nipplec2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        redmark=this.add.sprite(818,220,'Level42C_redmark');
        redmark.scale.setTo(0.75,0.75);
        
        box1=this.add.sprite(119,405,'Level42C_box','Symbol 30 copy instance 10001');
        box1.scale.setTo(1,0.8);
        box1.alpha=0;
        box1.name="opt1box";
         
        box2=this.add.sprite(394,405,'Level42C_box','Symbol 30 copy instance 10001');
        box2.scale.setTo(1,0.8);
        box2.alpha=0;
        box2.name="opt2box";
        
        //this.addNumberPad(); 
        boxb = this.add.sprite(594,120,'Level42C_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('redjugc','before');
        
    },
    
    question6:function()
    {
        qnoC++;
        glass_shadow = this.add.sprite(111,375,'Level42C_common_shadow');
        glass_shadow.width-=180;
        glass_shadow.alpha=0.5;
        yellowctc_shadow = this.add.sprite(382,380,'Level42C_common_shadow');
        yellowctc_shadow.width-=150;
        yellowctc_shadow.alpha=0.5;
        //bottlec_shadow.height+=10;
        greenmugc_shadow = this.add.sprite(656,382,'Level42C_common_shadow');
        greenmugc_shadow.width-=150;
        greenmugc_shadow.alpha=0.5;
        glass = this.add.sprite(100,290,'Level42C_glass','<Group>_64 instance 10001');
        glass.width-=20;
        glass.height-=20;
        glassanim=glass.animations.add('glass');
        maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
        maskbg.height-=40;
        yellowctc = this.add.sprite(377,290,'Level42C_yellowctc','Symbol 19 instance 10000');
        yellowctc.width+=10;
        yellowctc.height+=35;
        yellowctc.inputEnabled=true;
        yellowctcanim=yellowctc.animations.add('yellowctc');
        greenmugc = this.add.sprite(640,142,'Level42C_greenmugc1','<Group>_57 copy 2 instance 10000');
        greenmugcanim=greenmugc.animations.add('greenmugc');
       // greenmugc.width+=70;
       // greenmugc.height+=95;
		greenmugc.scale.setTo(1,1.3);
        greenmugc.inputEnabled=false;
        
        yellowctc1_graphics = this.add.graphics(434,340);
        yellowctc1_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        yellowctc1_graphics.beginFill(0xFF0000, 1);
        yellowctc1_graphics.drawRect(-50, -10, 80,60);
        yellowctc1_graphics.boundsPadding = 0;
        yellowctc1_graphics.alpha=0;
        
        yellowctc2_graphics = this.add.graphics(450,314);
        yellowctc2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        yellowctc2_graphics.beginFill(0xFF0000, 1);
        yellowctc2_graphics.drawRect(-50, -10, 50,27);
        yellowctc2_graphics.boundsPadding = 0;
        yellowctc2_graphics.alpha=0;
        
        glass_graphics = this.add.graphics(168,315);
        glass_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        glass_graphics.beginFill(0xFF0000, 1);
        glass_graphics.drawRect(-50, -10, 43,75);
        glass_graphics.boundsPadding = 0;
        glass_graphics.alpha=0;
        glass_graphics.inputEnabled = false;
        glass_graphics.name="glass";
        glass_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(1300,function(){
                yellowctc1_graphics.inputEnabled = true;
                yellowctc1_graphics.input.useHandCursor = true;
                yellowctc1_graphics.name="yellowctc";
                yellowctc1_graphics.events.onInputDown.add(this.triggerevent,this);
                yellowctc2_graphics.inputEnabled = true;
                yellowctc2_graphics.input.useHandCursor = true;
                yellowctc2_graphics.name="yellowctc";
                yellowctc2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                yellowctc1_graphics.inputEnabled = true;
                yellowctc1_graphics.input.useHandCursor = true;
                yellowctc1_graphics.name="yellowctc";
                yellowctc1_graphics.events.onInputDown.add(this.triggerevent,this);
                yellowctc2_graphics.inputEnabled = true;
                yellowctc2_graphics.input.useHandCursor = true;
                yellowctc2_graphics.name="yellowctc";
                yellowctc2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        redmark=this.add.sprite(757,187,'Level42C_redmark');
        redmark.scale.setTo(0.75,0.75);
        
        box1=this.add.sprite(102,405,'Level42C_box','Symbol 30 copy instance 10001');
        box1.scale.setTo(1,0.8);
        box1.alpha=0;
        box1.name="opt1box";
         
        box2=this.add.sprite(388,405,'Level42C_box','Symbol 30 copy instance 10001');
        box2.scale.setTo(1,0.8);
        box2.alpha=0;
        box2.name="opt2box";
        
        //this.addNumberPad(); 
        boxb = this.add.sprite(592,120,'Level42C_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('glass','before');
    },
    
    question7:function()
    {
        qnoC++;
        greencupc_shadow = this.add.sprite(102,377,'Level42C_common_shadow');
        greencupc_shadow.width-=170;
        greencupc_shadow.alpha=0.5;
        bluebottlec_shadow = this.add.sprite(369,375,'Level42C_common_shadow');
        bluebottlec_shadow.width-=130;
        bluebottlec_shadow.alpha=0.5;
        //bottlec_shadow.height+=10;
        vessel2c_shadow = this.add.sprite(630,373,'Level42C_common_shadow');
        vessel2c_shadow.width-=80;
        vessel2c_shadow.alpha=0.5;
        greencupc = this.add.sprite(32,294,'Level42C_coffeecup');
        greencupc.width+=80;
        greencupc.height+=40;
        greencupcanim=greencupc.animations.add('greencupc');
        maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
        maskbg.height-=40;
        bluebottlec = this.add.sprite(350,135,'Level42C_bluebottlec','<Group>_413 instance 10001');
        bluebottlec.width+=60;
        bluebottlec.height+=70;
        bluebottlec.inputEnabled=true;
        bluebottlecanim=bluebottlec.animations.add('bluebottlec');
        vessel2c = this.add.sprite(585,222,'Level42C_vessel1','<Group>_73 copy 2 instance 10001');
        vessel2canim=vessel2c.animations.add('vessel2c');
        //vessel2c.height+=20;
        vessel2c.inputEnabled=false;
        
        bluebottlec_graphics = this.add.graphics(435,203);
        bluebottlec_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        bluebottlec_graphics.beginFill(0xFF0000, 1);
        bluebottlec_graphics.drawRect(-50, -10, 75,190);
        bluebottlec_graphics.boundsPadding = 0;
        bluebottlec_graphics.alpha=0;
        
        greencupc_graphics = this.add.graphics(188,365);
        greencupc_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        greencupc_graphics.beginFill(0xFF0000, 1);
        greencupc_graphics.drawCircle(-50, -10,62);
        greencupc_graphics.boundsPadding = 0;
        greencupc_graphics.alpha=0;
        greencupc_graphics.inputEnabled = false;
        greencupc_graphics.name="greencupc";
        greencupc_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(1300,function(){
                bluebottlec_graphics.inputEnabled = true;
                bluebottlec_graphics.input.useHandCursor = true;
                bluebottlec_graphics.name="bluebottlec";
                bluebottlec_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                bluebottlec_graphics.inputEnabled = true;
                bluebottlec_graphics.input.useHandCursor = true;
                bluebottlec_graphics.name="bluebottlec";
                bluebottlec_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        redmark=this.add.sprite(815,268,'Level42C_redmark');
        redmark.scale.setTo(0.75,0.75);
        
        box1=this.add.sprite(98,405,'Level42C_box','Symbol 30 copy instance 10001');
        box1.scale.setTo(1,0.8);
        box1.alpha=0;
        box1.name="opt1box";
         
        box2=this.add.sprite(387,405,'Level42C_box','Symbol 30 copy instance 10001');
        box2.scale.setTo(1,0.8);
        box2.alpha=0;
        box2.name="opt2box";
        
        //this.addNumberPad(); 
        boxb = this.add.sprite(570,120,'Level42C_boxb');
        boxb.width+=20;
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('greencupc','before');
    },
    
    question8:function()
    {
        qnoC++;
        greencupreverse_shadow = this.add.sprite(108,378,'Level42C_common_shadow');
        greencupreverse_shadow.width-=110;
        greencupreverse_shadow.alpha=0.5;
        redjugc2_shadow = this.add.sprite(377,380,'Level42C_common_shadow');
        redjugc2_shadow.width-=150;
        redjugc2_shadow.alpha=0.5;
        //bottlec_shadow.height+=10;
        bluepotc_shadow = this.add.sprite(645,380,'Level42C_common_shadow');
        bluepotc_shadow.width-=75;
        bluepotc_shadow.alpha=0.5;
        greencupreverse = this.add.sprite(40,224,'Level42C_greena1');
        greencupreverse.width+=150;
        greencupreverse.height+=140;
        greencupreverseanim=greencupreverse.animations.add('greencupreverse');
        maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
        maskbg.height-=40;
        redjugc2 = this.add.sprite(328,265,'Level42C_a1');
        redjugc2.width+=90;
        redjugc2.height+=70;
        redjugc2.inputEnabled=true;
        redjugc2anim=redjugc2.animations.add('redjugc2');
        bluepotc = this.add.sprite(609,62,'Level42C_potsplash1','<Group>_90 copy 2 instance 10001');
        bluepotcanim=bluepotc.animations.add('bluepotc');
        //bluepotc.width-=20;
        //bluepotc.height-=50;
        bluepotc.inputEnabled=false;
        
        redjugc2_graphics = this.add.graphics(429,295);
        redjugc2_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        redjugc2_graphics.beginFill(0xFF0000, 1);
        redjugc2_graphics.drawRect(-50, -10, 75,100);
        redjugc2_graphics.boundsPadding = 0;
        redjugc2_graphics.alpha=0;
        
        greencupreverse_graphics = this.add.graphics(180,295);
        greencupreverse_graphics.lineStyle(1, 0xFFFFFF, 0.8);
        greencupreverse_graphics.beginFill(0xFF0000, 1);
        greencupreverse_graphics.drawRect(-50, -10,85,95);
        greencupreverse_graphics.boundsPadding = 0;
        greencupreverse_graphics.alpha=0;
        greencupreverse_graphics.inputEnabled = false;
        greencupreverse_graphics.name="greencupreverse";
        greencupreverse_graphics.events.onInputDown.add(this.triggerevent,this);
        
        if(qnoC==1)
        {
            this.getVoice(qnoC);
            this.time.events.add(1300,function(){
                redjugc2_graphics.inputEnabled = true;
                redjugc2_graphics.input.useHandCursor = true;
                redjugc2_graphics.name="redjugc2";
                redjugc2_graphics.events.onInputDown.add(this.triggerevent,this);
            },this);
        }
        else
        {
                redjugc2_graphics.inputEnabled = true;
                redjugc2_graphics.input.useHandCursor = true;
                redjugc2_graphics.name="redjugc2";
                redjugc2_graphics.events.onInputDown.add(this.triggerevent,this);
        }
        
        redmark=this.add.sprite(782,136,'Level42C_redmark');
        redmark.scale.setTo(0.75,0.75);
        
        box1=this.add.sprite(135,405,'Level42C_box','Symbol 30 copy instance 10001');
        box1.scale.setTo(1,0.8);
        box1.alpha=0;
        box1.name="opt1box";
         
        box2=this.add.sprite(383,405,'Level42C_box','Symbol 30 copy instance 10001');
        box2.scale.setTo(1,0.8);
        box2.alpha=0;
        box2.name="opt2box";
        
        //this.addNumberPad(); 
        boxb = this.add.sprite(598,110,'Level42C_boxb');
        boxb.height+=20;
        boxb.visible=false;
        
        this.questionaftertrigger('greencupreverse','before');
    },
    
    addNumberPad:function(){
        var footer = this.add.sprite(0,465,'Level42C_footer');
        numGroup = this.add.group();
		numGroup.add(footer);
        var x = 80;

        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,503,'Level42C_calNum');//518  
            if(i<9)
                numbg.name = i+1;
            else
                numbg.name = 0;
            numbg.frame = i;
            grpnum.push(numbg);
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
         //   numbg.name = i;
            numbg.inputEnabled = false;
            numbg.events.onInputDown.add(this.numClicked,this);
            x+=70;
        }
        
        counterText = this.add.text(35,37,selectedAns1="");
        counterText.anchor.setTo(0.5);
        counterText.align = 'center';
        counterText.font = 'myfont';
        counterText.fontWeight = 'normal'; 
        counterText.fontSize = 35;
        counterText.fill = '#65B4C3';
        counterText.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        box1.addChild(counterText);
         
        counterText1 = this.add.text(35,37,selectedAns2="");
        counterText1.anchor.setTo(0.5);
        counterText1.align = 'center';
        counterText1.font = 'myfont';
        counterText1.fontWeight = 'normal'; 
        counterText1.fontSize = 35;
        counterText1.fill = '#65B4C3';
        counterText1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        box2.addChild(counterText1);
        
        wrongbtn = numGroup.create(x+30,506,'Level42C_eraser','Symbol 14 copy 5 instance 10000');
        wrongbtn.scale.setTo(1.20,1.20);
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.name = "wrongbtn";

        rightbtn = numGroup.create(x+95,506,'Level42C_rightBtn','Symbol 14 copy instance 10000');
        rightbtn.anchor.setTo(0.5);
        rightbtn.scale.setTo(1.20,1.20);
        rightbtn.name = "rightbtn";
        numGroup.y = 50;
		var tweenopt = this.add.tween(numGroup);
        tweenopt.to({ y: 0}, 0, 'Linear', true, 0);
        //numGroup.add(box1);
        //numGroup.add(box2);
    },
    
    numClicked:function(target){
        _this.clickSound.play();
        if(boxclick=="opt1box")
        {
            if(selectedAns1.length<2)
            {
				box1.frame=0;
                selectedAns1+= target.name;
                counterText.setText(selectedAns1);
            }
        }
        if(boxclick=="opt2box" || boxclick==undefined || boxclick=="")
        {        
            if(selectedAns2.length<2)
            {
                selectedAns2 += target.name;
                counterText1.setText(selectedAns2);
                //maskbg.kill();
               /* if(wrongflag==1){
                    questarrayC[qnoC-1]=questarrayC[qnoC];
                }*/
				if(leftmost==null){
                if(questarrayC[qnoC-1]==1){
					maskbg.kill();
					box2.frame=0;
                    potc_graphics.inputEnabled = true;
                    potc_graphics.input.useHandCursor = true;
                    if(wrongflag==1){
						box1.frame=1;
                        potc_graphics.events.onInputDown.add(this.triggerevent,this);
                    }
                    
                    boxb.visible=false;
                    syntexc.frameName="<Group>_449 copy 2 instance 10001";
                }
                else if(questarrayC[qnoC-1]==2){
					box2.frame=0;
                    maskbg.kill();
                    sodac1_graphics.inputEnabled = true;
                    sodac1_graphics.input.useHandCursor = true;
                    sodac2_graphics.inputEnabled = true;
                    sodac2_graphics.input.useHandCursor = true;
                    if(wrongflag==1){
						box1.frame=1;
                        sodac1_graphics.events.onInputDown.add(this.triggerevent,this);
                        sodac2_graphics.events.onInputDown.add(this.triggerevent,this);
                    }  
                    boxb.visible=false;
                    vessel1c.frameName="<Group>_73 copy 5 instance 10000";
                }
                else if(questarrayC[qnoC-1]==3){
					box2.frame=0;
                    maskbg.kill();
                    orangecanc_graphics.inputEnabled = true;
                    orangecanc_graphics.input.useHandCursor = true;
                    if(wrongflag==1){
                        box1.frame=1;
                        orangecanc_graphics.events.onInputDown.add(this.triggerevent,this);
                    }
                    boxb.visible=false;
                    mugc.frameName="<Group>_453 copy 2 instance 10001";
                }
                else if(questarrayC[qnoC-1]==4){
					box2.frame=0;
                    maskbg.kill();
                    pinkbucketc_graphics.inputEnabled = true;
                    pinkbucketc_graphics.input.useHandCursor = true;
                    if(wrongflag==1){
                        box1.frame=1;
                        pinkbucketc_graphics.events.onInputDown.add(this.triggerevent,this);
                    }
                    boxb.visible=false;
                    bluecanc.frameName="<Group>_51 copy 4 instance 10001";
                }
                else if(questarrayC[qnoC-1]==6){
					box2.frame=0;
                    maskbg.kill();
                    glass_graphics.inputEnabled = true;
                    glass_graphics.input.useHandCursor = true;
                    if(wrongflag==1){
                        box1.frame=1;
                        glass_graphics.events.onInputDown.add(this.triggerevent,this);
                    }
                    boxb.visible=false;
                    greenmugc.frameName="<Group>_57 copy 2 instance 10000";
                }
                else if(questarrayC[qnoC-1]==7){
					box2.frame=0;
                    maskbg.kill();
                    greencupc_graphics.inputEnabled = true;
                    greencupc_graphics.input.useHandCursor = true;
                    if(wrongflag==1){
                        box1.frame=1;
                        greencupc_graphics.events.onInputDown.add(this.triggerevent,this);
                    }
                    boxb.visible=false;
                    vessel2c.frameName="<Group>_73 copy 2 instance 10001";
                }
                else if(questarrayC[qnoC-1]==8){
					box2.frame=0;
                    maskbg.kill();
                    greencupreverse_graphics.inputEnabled = true;
                    greencupreverse_graphics.input.useHandCursor = true;
                    if(wrongflag==1){
                        box1.frame=1;
                        greencupreverse_graphics.events.onInputDown.add(this.triggerevent,this);
                    }
                    boxb.visible=false;
                    bluepotc.frameName="<Group>_90 copy 2 instance 10001";
                }
            }
		}
            if(selectedAns2.length==2 && leftmost==null){
               /* if(wrongflag==1){
                    questarrayC[qnoC-1]=questarrayC[qnoC];
                }*/
                if(questarrayC[qnoC-1]==5){
					box2.frame=0;
                    maskbg.kill();
                    redjugc_graphics.inputEnabled = true;
                    redjugc_graphics.input.useHandCursor = true;
                    if(wrongflag==1){
                        box1.frame=1;
                        redjugc_graphics.events.onInputDown.add(this.triggerevent,this);
                    }
                    boxb.visible=false;
                    bluebucketc.frameName="<Group>_15 copy 4 instance 10000";
                }
            }
                wrongbtn.events.onInputDown.add(function(){
				wrongbtn.frameName="Symbol 14 copy 5 instance 10001";
                _this.clickSound.play();
                   
                if(boxclick=="opt1box")
                {
                    selectedAns1="";
                    counterText.setText("");
					this.time.events.add(1000,function(){
                        wrongbtn.frameName="Symbol 14 copy 5 instance 10000";
                    },this);
                }
                else if(boxclick=="opt2box" || boxclick==undefined || boxclick=="")
                {
                    selectedAns2="";
                    counterText1.setText("");
					this.time.events.add(1000,function(){
                        wrongbtn.frameName="Symbol 14 copy 5 instance 10000";
                    },this);
                }
        },this);
                
            
        }
        
    },
    
    
    
    triggerevent:function(target){
        /*var currentTime = window.timeSaveFunc();
            var interactEvent = 
            { 
                id_game_play: window.gameid, 
                id_question: window.gameid,  
                date_time_event: currentTime, 
                event_type: "click", 
                res_id: target.name,
                access_token: window.acctkn 
            } */
            //absdsjsapi.saveInteractEvent(interactEvent);

        if(target.name=="drumc")
            {
                _this.clickSound.play();
                drumcincr++;
                if(drumcincr>2)
                    {
                       
                       _this.wmusic.play(); 
                       shake.shake(10,syntexc); 
                       syntexc.frameName="a2";
                    }
                else
                    {
                        if(drumcincr==2)
                        {
                           _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box2.alpha=1;
                            console.log("it si 2");
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
                            //this.enablebuttons(4,2,"potc");
                            box2.inputEnabled=true;
                           // box2.name="opt2box";
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                console.log("box2"+box2.name);
                               boxclick=box2.name;
    
                            },this);
                            boxb.visible=true;
                            syntexc.frameName="a2";
                            drumc_graphics.inputEnabled=false; 
                            this.time.events.add(2000,function(){
                                _this.watersplash.stop();
                                
                            },this);
                            
                        }
                        else
                        {
                            //less than 2
                            _this.waterFillingSound.play(); 
                            syntexc.frameName="<Group>_449 copy 2 instance 1000"+(drumcincr+1);
                        }

                    }
            }
        if(target.name=="potc")
            {
                //console.log("hai");
                
                _this.clickSound.play();
                syntexc.destroy();
                 syntexc = this.add.sprite(612,113,'Level42C_tank1','<Group>_449 copy instance 10001');
                syntexcanim=syntexc.animations.add('syntexc');
                potcincr++;
                if(potcincr>4)
                    {
                       syntexc.frameName="a2";
                       _this.wmusic.play(); 
                       shake.shake(10,syntexc);

                    }
                else
                    {
                        if(potcincr==4)
                        {
                            boxclick="opt1box";
                             this.enablebuttons(4,2,'potc');
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box1.alpha=1;
                            //box2.alpha=1;
                            box1.inputEnabled=true;
                            box2.inputEnabled=true;
            
                            box1.events.onInputDown.add(function(){
								box1.frame=1;
                                //console.log("box1");
                               boxclick=box1.name;
                            },this);
    
                            boxb.visible=true;
                            syntexc.frameName="a2";
                        }
                        else//less than 4
                        {
                            _this.waterFillingSound.play();
                            syntexc.frameName="<Group>_449 copy instance 1000"+(potcincr+1);
                        }
   
                    } 
            }
            
            if(target.name=="orangemugc")
            {
                _this.clickSound.play();
                orangemugcincr++;
                if(orangemugcincr>6)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,vessel1c); 
                       vessel1c.frameName="a2";
                    }
                else
                    {
                        if(orangemugcincr==6)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box2.alpha=1;
                            console.log("it si 2");
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
                            //this.enablebuttons(4,2,"potc");
                            box2.inputEnabled=true;
                           // box2.name="opt2box";
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                console.log("box2"+box2.name);
                               boxclick=box2.name;
    
                            },this);
                            boxb.visible=true;
                            vessel1c.frameName="a2";
                            orangemugc1_graphics.inputEnabled=false; 
                            orangemugc2_graphics.inputEnabled=false; 
                            
                        }
                        else if(orangemugcincr<6)
                        {
                            //less than 2
                            _this.waterFillingSound.play(); 
                            vessel1c.frameName="<Group>_73 copy 5 instance 1000"+(orangemugcincr);
                        }
                       
                    }
            }
        if(target.name=="sodac")
            {
                vessel1c.destroy();
                vessel1c = this.add.sprite(607,201,'Level42C_cooker2','<Group>_73 copy 3 instance 10000');
                vessel1canim=vessel1c.animations.add('vessel1c');
                _this.clickSound.play();
                sodacincr++;
                if(sodacincr>8)
                    {
                       vessel1c.frameName="a1";
                       _this.wmusic.play(); 
                       shake.shake(10,vessel1c);    
                    }
                else
                    {
                        if(sodacincr==8)
                        {
                            boxclick="opt1box";
                            this.enablebuttons(8,6,'sodac');
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box1.alpha=1;
                            box2.alpha=1;
                            box1.inputEnabled=true;
                            box2.inputEnabled=true;
            
                            box1.events.onInputDown.add(function(){
								box1.frame=1;
                               _this.clickSound.play();
                               boxclick=box1.name;
                            },this);
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                //console.log("box2");
                                _this.clickSound.play();
                               boxclick=box2.name;
                            },this);
                            boxb.visible=true;
                            vessel1c.frameName="a1";
                        }
                        else//less than 10
                        {
                            _this.waterFillingSound.play();
                            vessel1c.frameName="<Group>_73 copy 3 instance 1000"+(sodacincr);
                        }
                        
                    } 
            }
        
            if(target.name=="orangecanc")
            {
                _this.clickSound.play();
                mugc.destroy();
                mugc = this.add.sprite(600,120,'Level42C_mug1','<Group>_453 copy instance 10001');
                mugcanim=mugc.animations.add('mugc');
                orangecancincr++;
                if(orangecancincr>2)
                    {
                       mugc.frameName="a2";
                       _this.wmusic.play(); 
                       shake.shake(10,mugc);     
                    }
                else
                    {
                        if(orangecancincr==2)
                        {
                            boxclick="opt1box";
                            this.enablebuttons(2,5,'orangecanc');
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box1.alpha=1;
                            box2.alpha=1;
                            box1.inputEnabled=true;
                            box2.inputEnabled=true;
            
                            box1.events.onInputDown.add(function(){
								box1.frame=1;
                               _this.clickSound.play();
                               boxclick=box1.name;
                            },this);
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                               _this.clickSound.play();
                               boxclick=box2.name;
                            },this);
                            boxb.visible=true;
                            mugc.frameName="a2";
                        }
                        else//less than 2
                        {
                            _this.waterFillingSound.play();
                            mugc.frameName="<Group>_453 copy instance 1000"+(orangecancincr+1);
                        }  
                    } 
            }
        
            if(target.name=="bottlec")
            {
                _this.clickSound.play();
                bottlecincr++;
                if(bottlecincr>5)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,mugc); 
                       mugc.frameName="a2";
                    }
                else
                    {
                        if(bottlecincr==5)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box2.alpha=1;
                            console.log("it si 2");
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
                            //this.enablebuttons(4,2,"potc");
                            box2.inputEnabled=true;
                           // box2.name="opt2box";
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                console.log("box2"+box2.name);
                               boxclick=box2.name;
    
                            },this);
                            boxb.visible=true;
                            mugc.frameName="a2";
                            bottlec1_graphics.inputEnabled=false; 
                            bottlec2_graphics.inputEnabled=false; 
                            
                        }
                        else if(bottlecincr<5)
                        {
                            //less than 2
                            _this.waterFillingSound.play(); 
                            mugc.frameName="<Group>_453 copy 2 instance 1000"+(bottlecincr+1);
                        }
                    }
            }
            
            if(target.name=="pinkbucketc")
            {
                _this.clickSound.play();
                bluecanc.destroy();
                bluecanc = this.add.sprite(621,140,'Level42C_can2','<Group>_51 copy 3 instance 10001');
                bluecancanim=bluecanc.animations.add('bluecanc');
                pinkbucketcincr++;
                if(pinkbucketcincr>6)
                    {
                       bluecanc.frameName="a2";
                       _this.wmusic.play(); 
                       shake.shake(10,bluecanc);   
                    }
                else
                    {
                        if(pinkbucketcincr==6)
                        {
                            boxclick="opt1box";
                            this.enablebuttons(6,4,'pinkbucketc');
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box1.alpha=1;
                            box2.alpha=1;
                            box1.inputEnabled=true;
                            box2.inputEnabled=true;
            
                            box1.events.onInputDown.add(function(){
								box1.frame=1;
                               // console.log("box1");
                               boxclick=box1.name;
                            },this);
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                               // console.log("box2");
                               boxclick=box2.name;
                            },this);
                            boxb.visible=true;
                            bluecanc.frameName="a2";
                        }
                        else//less than 15
                        {
                            _this.waterFillingSound.play();
                           // if(pinkbucketcincr<9)
                                bluecanc.frameName="<Group>_51 copy 3 instance 1000"+(pinkbucketcincr+1);
                           // else
                               // bluecanc.frameName="<Group>_51 copy instance 100"+(pinkbucketcincr+1);
                            
                        }
                        
                          
                    } 
            }
        
            if(target.name=="greenbottlec")
            {
                _this.clickSound.play();
                greenbottlecincr++;
                if(greenbottlecincr>4)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,bluecanc); 
                       bluecanc.frameName="a2";
                    }
                else
                    {
                        if(greenbottlecincr==4)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box2.alpha=1;
                            console.log("it si 2");
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
                            //this.enablebuttons(4,2,"potc");
                            box2.inputEnabled=true;
                           // box2.name="opt2box";
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                console.log("box2"+box2.name);
                               boxclick=box2.name;
    
                            },this);
                            boxb.visible=true;
                            bluecanc.frameName="a2";
                            greenbottlec1_graphics.inputEnabled=false; 
                            greenbottlec2_graphics.inputEnabled=false;
                            
                        }
                        else if(greenbottlecincr<4)
                        {
                            //less than 5
                            _this.waterFillingSound.play(); 
                            bluecanc.frameName="<Group>_51 copy 4 instance 1000"+(greenbottlecincr+1);
                        }
                    }
            }
        
            if(target.name=="redjugc")
            {
                _this.clickSound.play();
                bluebucketc.destroy();
                bluebucketc = this.add.sprite(601,160,'Level42C_bluebucketc1','<Group>_15 copy 3 instance 10001');
                bluebucketc.width-=70;
                bluebucketc.height-=70;
                bluebucketcanim=bluebucketc.animations.add('bluebucketc');
                redjugcincr++;
                if(redjugcincr>8)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,bluebucketc);
                       bluebucketc.frameName="a2";     
                    }
                else
                    {
                        if(redjugcincr==8)
                        {
                            boxclick="opt1box";
                            this.enablebuttons(8,10,'redjugc');
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box1.alpha=1;
                            box2.alpha=1;
                            box1.inputEnabled=true;
                            box2.inputEnabled=true;

                            box1.events.onInputDown.add(function(){
								box1.frame=1;
                               _this.clickSound.play();
                               boxclick=box1.name;
                            },this);
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                               _this.clickSound.play();
                               boxclick=box2.name;
                            },this);
                            boxb.visible=true;
                            bluebucketc.frameName="a2"; 
                        }
                        else//less than 10
                        {
                            _this.waterFillingSound.play();
                          //  if(redjugcincr<9)
                            bluebucketc.frameName="<Group>_15 copy 3 instance 1000"+(redjugcincr);
                         //   else
                          //  bluebucketc.frameName="<Group>_15 copy instance 10010";
                        }
                        
                    } 
            }
        
            if(target.name=="nipplec")
            {
                _this.clickSound.play();
                nipplecincr++;
                if(nipplecincr>10)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,bluebottlec); 
                       bluebucketc.frameName="a2";
                    }
                else
                    {
                        if(nipplecincr==10)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box2.alpha=1;
                            console.log("it si 2");
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
                            //this.enablebuttons(4,2,"potc");
                            box2.inputEnabled=true;
                           // box2.name="opt2box";
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                console.log("box2"+box2.name);
                               boxclick=box2.name;
    
                            },this);
                            boxb.visible=true;
                            bluebucketc.frameName="a2";
                            nipplec1_graphics.inputEnabled=false; 
                            nipplec2_graphics.inputEnabled=false;
                            
                        }
                        else if(nipplecincr<10)
                        {
                            //less than 15
                            //console.log("in nipple"+nipplecincr);
                            _this.waterFillingSound.play(); 
                          //  if(nipplecincr<9)
                                bluebucketc.frameName="<Group>_15 copy 4 instance 1000"+(nipplecincr);
                           // else
                               // bluebucketc.frameName="<Group>_15 copy 2 instance 100"+(nipplecincr+1);
                                
                        }
                        
                    }
            }
        
            if(target.name=="glass")
            {
                _this.clickSound.play();
                greenmugc.destroy();
                greenmugc = this.add.sprite(640,142,'Level42C_greenmugc2','<Group>_57 copy instance 10000');
                greenmugcanim=greenmugc.animations.add('greenmugc');
                greenmugc.scale.setTo(1,1.3);
			//	greenmugc.width+=70;
            //    greenmugc.height+=95;
                glassincr++;
                if(glassincr>11)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,greenmugc); 
                       greenmugc.frameName="a2"; 
                    }
                else
                    {
                        if(glassincr==11)
                        {
                            boxclick="opt1box";
                            this.enablebuttons(11,9,'glass');
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box1.alpha=1;
                            box2.alpha=1;
                            box1.inputEnabled=true;
                            box2.inputEnabled=true;

                            box1.events.onInputDown.add(function(){
								box1.frame=1;
                               _this.clickSound.play();
                               boxclick=box1.name;
                            },this);
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                               _this.clickSound.play();
                               boxclick=box2.name;
                            },this);
                            
                            boxb.visible=true;
                            greenmugc.frameName="a2"; 
                        }
                        else//less than 11
                        {
                            _this.waterFillingSound.play(); 
                            if(glassincr<9)
                            greenmugc.frameName="<Group>_57 copy instance 1000"+(glassincr+1);
                            else
                            greenmugc.frameName="<Group>_57 copy instance 100"+(glassincr+1);
                              
                        }
                        
                        
                    } 
            }
        
            if(target.name=="yellowctc")
            {
                _this.clickSound.play();
                yellowctcincr++;
                if(yellowctcincr>9)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,greenmugc); 
                       greenmugc.frameName="a2";
                    }
                else
                    {
                        if(yellowctcincr==9)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box2.alpha=1;
                            console.log("it si 2");
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
                            //this.enablebuttons(4,2,"potc");
                            box2.inputEnabled=true;
                           // box2.name="opt2box";
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                console.log("box2"+box2.name);
                               boxclick=box2.name;
    
                            },this);
                            boxb.visible=true;
                            greenmugc.frameName="a1";
                            yellowctc1_graphics.inputEnabled=false; 
                            yellowctc2_graphics.inputEnabled=false;
                            
                        }
                        else if(yellowctcincr<9)
                        {
                            //less than 9
                            _this.waterFillingSound.play(); 
                            greenmugc.frameName="<Group>_57 copy 2 instance 1000"+(yellowctcincr);
                        }
                    }
            }
        
            if(target.name=="greencupc")
            {
                _this.clickSound.play();
                vessel2c.destroy();
                vessel2c = this.add.sprite(585,222,'Level42C_vessel2','<Group>_73 copy instance 10001');
                vessel2canim=vessel2c.animations.add('vessel2c');
               // vessel2c.height+=40;
                greencupcincr++;
                if(greencupcincr>7)
                    {
                       _this.wmusic.play(); 
                       vessel2c.frameName="a2";
                       shake.shake(10,vessel2c);  
                    }
                else
                    {
                        if(greencupcincr==7)
                        {
                            boxclick="opt1box";
                            this.enablebuttons(7,3,'greencupc');
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box1.alpha=1;
                            box2.alpha=1;
                            box1.inputEnabled=true;
                            box2.inputEnabled=true;

                            box1.events.onInputDown.add(function(){
								box1.frame=1;
                               _this.clickSound.play();
                               boxclick=box1.name;
                            },this);
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                               _this.clickSound.play();
                               boxclick=box2.name;
                            },this); 
                            
                            boxb.visible=true;
                            vessel2c.frameName="a2";
                        }
                        else//less than 7
                        {
                            _this.waterFillingSound.play();
                            if(greencupcincr<7)
                            vessel2c.frameName="<Group>_73 copy instance 1000"+(greencupcincr+1);
                        } 
                    } 
            }
        
            if(target.name=="bluebottlec")
            {
                _this.clickSound.play();
                bluebottlecincr++;
                if(bluebottlecincr>3)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,vessel2c); 
                       vessel2c.frameName="a2";
                    }
                else
                    {
                        if(bluebottlecincr==3)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box2.alpha=1;
                            console.log("it si 2");
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
                            //this.enablebuttons(4,2,"potc");
                            box2.inputEnabled=true;
                           // box2.name="opt2box";
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                console.log("box2"+box2.name);
                               boxclick=box2.name;
    
                            },this);
                            boxb.visible=true;
                            vessel2c.frameName="a2";
                            bluebottlec_graphics.inputEnabled=false; 
                            
                        }
                        else if(bluebottlecincr<3)
                        {
                            _this.waterFillingSound.play(); 
                            vessel2c.frameName="<Group>_73 copy 2 instance 1000"+(bluebottlecincr+1);
                        }
                    }
            }
        
            if(target.name=="greencupreverse")
            {
                _this.clickSound.play();
                bluepotc.destroy();
                bluepotc = this.add.sprite(609,62,'Level42C_potsplash2','<Group>_90 copy instance 10001');
                bluepotcanim=bluepotc.animations.add('bluepotc');
               // bluepotc.width-=20;
               // bluepotc.height-=50;
                greencupreverseincr++;
                if(greencupreverseincr>5)
                    {
                       _this.wmusic.play(); 
                       bluepotc.frameName="a2";
                       shake.shake(10,bluepotc);    
                    }
                else
                    {
                        if(greencupreverseincr==5)
                        {
                            boxclick="opt1box";
                            this.enablebuttons(5,7,'greencupreverse');
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box1.alpha=1;
                            box2.alpha=1;
                            box1.inputEnabled=true;
                            box2.inputEnabled=true;

                            box1.events.onInputDown.add(function(){
								box1.frame=1;
                               _this.clickSound.play();
                               boxclick=box1.name;
                            },this);
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                               _this.clickSound.play();
                               boxclick=box2.name;
                            },this);
                            
                            boxb.visible=true;
                            bluepotc.frameName="a2";
                        }
                        else//less than 5
                        {
                            _this.waterFillingSound.play();  
                            bluepotc.frameName="<Group>_90 copy instance 1000"+(greencupreverseincr+1);
                        }
                    } 
            }
        
            if(target.name=="redjugc2")
            {
                _this.clickSound.play();
                redjugc2incr++;
                if(redjugc2incr>7)
                    {
                       _this.wmusic.play(); 
                       shake.shake(10,bluepotc); 
                       bluepotc.frameName="<Group>_90 copy 2 instance 10001";
                    }
                else
                    {
                        if(redjugc2incr==7)
                        {
                            _this.waterFillingSound.stop();
                            _this.watersplash.play();
                            box2.alpha=1;
                            console.log("it si 2");
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
                            //this.enablebuttons(4,2,"potc");
                            box2.inputEnabled=true;
                           // box2.name="opt2box";
                            box2.events.onInputDown.add(function(){
								box2.frame=1;
                                console.log("box2"+box2.name);
                               boxclick=box2.name;
    
                            },this);
                            boxb.visible=true;
                            bluepotc.frameName="a2";
                            redjugc2_graphics.inputEnabled=false; 
                            
                        }
                        else if(redjugc2incr<7)
                        {
                            //less than 7
                            _this.waterFillingSound.play(); 
                            bluepotc.frameName="<Group>_90 copy 2 instance 1000"+(redjugc2incr+1);
                        }
                    }
            }
            
    },
    
    nextquestion:function(){
        noofAttempts = 0;
        if(timer)
        {
            timer.stop();
           timer = null; 
        }

        if(qnoC<6)
            {
                this.getQuestion();
            }
            else
            {
                //console.log("finished 4.2a");
                this.state.start('grade4_2CScore');
            }
    },
    
    update:function(){
       
    },
        
    questionaftertrigger:function(object,arg){
        switch(object)
        {
            case "potc" :  questgroupC=this.add.group();
                           questgroupC.add(greenpotc_shadow);
                           questgroupC.add(drumc_shadow);
                           questgroupC.add(syntexc_shadow);
                           questgroupC.add(greenpotc);                   
                           questgroupC.add(drumc);
                           questgroupC.add(syntexc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(potc_graphics);
                           questgroupC.add(drumc_graphics);
                           questgroupC.add(boxb);
                           //questgroupC.add(numGroup);
                           questgroupC.add(redmark);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                            {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0, 'Linear', true, 0);
                            }
                            else
                            {
                                tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                tween.onComplete.add(function(){   
                                    potcincr=0;drumcincr=0;
                                    this.nextquestion();
                                },this);
                            }
                            break;
            case "sodac" : questgroupC=this.add.group();
                           questgroupC.add(vessel1c_shadow);
                           questgroupC.add(sodac_shadow);
                           questgroupC.add(orangemugc_shadow);
                           questgroupC.add(vessel1c);                   
                           questgroupC.add(sodac);
                           questgroupC.add(orangemugc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(sodac1_graphics);
                           questgroupC.add(sodac2_graphics);
                           questgroupC.add(orangemugc1_graphics);
                           questgroupC.add(orangemugc2_graphics);
                           questgroupC.add(boxb);
                          // questgroupC.add(numGroup);
                           questgroupC.add(redmark);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0, 'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    sodacincr=0;orangemugcincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
        case "orangecanc": questgroupC=this.add.group();
                           questgroupC.add(bottlec_shadow);
                           questgroupC.add(mugc_shadow);
                           questgroupC.add(orangecanc_shadow);
                           questgroupC.add(orangecanc);                   
                           questgroupC.add(mugc);
                           questgroupC.add(bottlec);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(orangecanc_graphics);
                           questgroupC.add(bottlec1_graphics);
                           questgroupC.add(bottlec2_graphics);
                           questgroupC.add(boxb);
                           //questgroupC.add(numGroup);
                           questgroupC.add(redmark);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0, 'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    bottlecincr=0;orangecancincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
       case "pinkbucketc": questgroupC=this.add.group();
                           questgroupC.add(bluecanc_shadow);
                           questgroupC.add(pinkbucketc_shadow);
                           questgroupC.add(greenbottlec_shadow);
                           questgroupC.add(pinkbucketc);                   
                           questgroupC.add(greenbottlec);
                           questgroupC.add(bluecanc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(pinkbucketc_graphics);
                           questgroupC.add(greenbottlec1_graphics);
                           questgroupC.add(greenbottlec2_graphics);
                           questgroupC.add(boxb);
                         //  questgroupC.add(numGroup);
                           questgroupC.add(redmark);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0, 'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    pinkbucketcincr=0;greenbottlecincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
        case "redjugc"  :  questgroupC=this.add.group();
                           questgroupC.add(nipplec_shadow);
                           questgroupC.add(bluebucketc_shadow);
                           questgroupC.add(redjugc_shadow);
                           questgroupC.add(bluebucketc);                   
                           questgroupC.add(redjugc);
                           questgroupC.add(nipplec);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(redjugc_graphics);
                           questgroupC.add(nipplec1_graphics);
                           questgroupC.add(nipplec2_graphics);
                           questgroupC.add(boxb);
                          // questgroupC.add(numGroup);
                           questgroupC.add(redmark);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0, 'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    redjugcincr=0;nipplecincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
        case "glass"   :   questgroupC=this.add.group();
                           questgroupC.add(glass_shadow);
                           questgroupC.add(greenmugc_shadow);
                           questgroupC.add(yellowctc_shadow);
                           questgroupC.add(greenmugc);                   
                           questgroupC.add(glass);
                           questgroupC.add(yellowctc);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(glass_graphics);
                           questgroupC.add(yellowctc1_graphics);
                           questgroupC.add(yellowctc2_graphics);
                           questgroupC.add(boxb);
                         //  questgroupC.add(numGroup);
                           questgroupC.add(redmark);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0, 'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                tween.onComplete.add(function(){  
                                    yellowctcincr=0;glassincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
        case "greencupc" : questgroupC=this.add.group();
                           questgroupC.add(greencupc_shadow);
                           questgroupC.add(vessel2c_shadow);
                           questgroupC.add(bluebottlec_shadow);
                           questgroupC.add(vessel2c);                   
                           questgroupC.add(greencupc);
                           questgroupC.add(bluebottlec);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(bluebottlec_graphics);
                           questgroupC.add(greencupc_graphics);
                           questgroupC.add(boxb);
                        //   questgroupC.add(numGroup);
                           questgroupC.add(redmark);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0, 'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    bluebottlecincr=0;greencupcincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;
    case "greencupreverse":questgroupC=this.add.group();
                           questgroupC.add(greencupreverse_shadow);
                           questgroupC.add(bluepotc_shadow);
                           questgroupC.add(redjugc2_shadow);
                           questgroupC.add(bluepotc);                   
                           questgroupC.add(greencupreverse);
                           questgroupC.add(redjugc2);
                           questgroupC.add(box1);
                           questgroupC.add(box2);
                           questgroupC.add(redjugc2_graphics);
                           questgroupC.add(greencupreverse_graphics);
                           questgroupC.add(boxb);
                         //  questgroupC.add(numGroup);
                           questgroupC.add(redmark);
                           var tween = this.add.tween(questgroupC);
                           if(arg=="before")
                           {
                                questgroupC.add(maskbg);
                                questgroupC.x=960;
                                var tween = this.add.tween(questgroupC);
                                tween.to({ x: 0}, 0, 'Linear', true, 0);
                           }
                           else
                           {
                                tween.to({ x: -1000}, 0, 'Linear', true, 0);
                                tween.onComplete.add(function(){ 
                                    redjugc2incr=0;greencupreverseincr=0;
                                    this.nextquestion();
                                },this);
                           }
                           break;   
           
    }
    
},
   
    enablebuttons:function(rightAns1,rightAns2,element){
        
        for(var i=0;i<10;i++)
        {
            grpnum[i].inputEnabled=true;
            grpnum[i].input.useHandCursor=true;
        }
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        rightbtn.events.onInputDown.removeAll();
        rightbtn.events.onInputDown.add(function(target){
			rightbtn.frame=1;
            noofAttempts++;
                                    
            _this.clickSound.play();
            if((selectedAns1==rightAns1||selectedAns1=="0"+rightAns1)  && (selectedAns2==rightAns2||selectedAns2=="0"+rightAns2))
            {
                wrongflag=0;

                target.events.onInputDown.removeAll();
                
                this.correctAns();
                this.time.events.add(2000,function(){
                   this.questionaftertrigger(element);
               },this);
            }
            else 
            {
                
                _this.wmusic.play(); 
                this.time.events.add(500,function(){
                    rightbtn.frame=0;
                },this);
                wrongflag=1;
				if(selectedAns1==rightAns1||selectedAns1=="0"+rightAns1){
                    //leftmost
                    leftmost="correct";
                    shake.shake(10,box2);
                    box1.inputEnabled=false;
                    box1.events.onInputDown.removeAll();
                    selectedAns2='';
                    counterText1.setText(selectedAns2);
                    boxclick="opt2box";
                    if(questarrayC[qnoC-1]==1){
                        potc_graphics.inputEnabled=false;
                        drumc_graphics.inputEnabled=true;
                        potc_graphics.events.onInputDown.removeAll();
                        syntexc.destroy();
                        syntexc = this.add.sprite(612,113,'Level42C_tank2','<Group>_449 copy 2 instance 10001');
                        syntexcanim=syntexc.animations.add('syntexc');
                        drumcincr=0;
                        potcincr=0;
                    }else if(questarrayC[qnoC-1]==2){
                        sodac1_graphics.inputEnabled=false;
                        sodac2_graphics.inputEnabled=false;
                        orangemugc1_graphics.inputEnabled=true;
                        orangemugc2_graphics.inputEnabled=true;
                        sodac1_graphics.events.onInputDown.removeAll();
                        sodac2_graphics.events.onInputDown.removeAll();
                        vessel1c.destroy();
                        vessel1c = this.add.sprite(607,201,'Level42C_cooker1','<Group>_73 copy 5 instance 10000');
                        vessel1canim=vessel1c.animations.add('vessel1c');
                        sodacincr=0;
                        orangemugcincr=0;
                    }else if(questarrayC[qnoC-1]==3){
                        bottlec1_graphics.inputEnabled=true;
                        bottlec2_graphics.inputEnabled=true;
                        orangecanc_graphics.inputEnabled=false;
                        orangecanc_graphics.events.onInputDown.removeAll();
                        mugc.destroy();
                        mugc = this.add.sprite(600,120,'Level42C_mug2','<Group>_453 copy 2 instance 10001');
                        mugcanim=mugc.animations.add('mugc');
                        orangecancincr=0;
                        bottlecincr=0;
                    }else if(questarrayC[qnoC-1]==4){
                        greenbottlec1_graphics.inputEnabled=true;
                        greenbottlec2_graphics.inputEnabled=true;
                        pinkbucketc_graphics.inputEnabled=false;
                        pinkbucketc_graphics.events.onInputDown.removeAll();
                        bluecanc.destroy();
                        bluecanc = this.add.sprite(621,140,'Level42C_can1','<Group>_51 copy 4 instance 10001');
                        bluecancanim=bluecanc.animations.add('bluecanc');
                        pinkbucketcincr=0;
                        greenbottlecincr=0;
                    }else if(questarrayC[qnoC-1]==5){
                        nipplec1_graphics.inputEnabled=true;
                        nipplec2_graphics.inputEnabled=true;
                        redjugc_graphics.inputEnabled=false;
                        redjugc_graphics.events.onInputDown.removeAll();
                        bluebucketc.destroy();
                        bluebucketc = this.add.sprite(601,160,'Level42C_bluebucketc2','<Group>_15 copy 4 instance 10000');
                        bluebucketc.width-=70;
                        bluebucketc.height-=70;
                        bluebucketcanim=bluebucketc.animations.add('bluebucketc');
                        redjugcincr=0;
                        nipplecincr=0;
                    }else if(questarrayC[qnoC-1]==6){
                        yellowctc1_graphics.inputEnabled=true;
                        yellowctc2_graphics.inputEnabled=true;
                        glass_graphics.inputEnabled=false;
                        glass_graphics.events.onInputDown.removeAll();
                        greenmugc.destroy();
                        greenmugc = this.add.sprite(640,142,'Level42C_greenmugc1','<Group>_57 copy 2 instance 10000');
                        greenmugcanim=greenmugc.animations.add('greenmugc');
                        //greenmugc.width+=70;
                        //greenmugc.height+=95;
						greenmugc.scale.setTo(1,1.3);
                        glassincr=0;
                        yellowctcincr=0;
                    }else if(questarrayC[qnoC-1]==7){
                        bluebottlec_graphics.inputEnabled=true;
                        greencupc_graphics.inputEnabled=false;
                        greencupc_graphics.events.onInputDown.removeAll();
                        vessel2c.destroy();
                        vessel2c = this.add.sprite(585,222,'Level42C_vessel1','<Group>_73 copy 2 instance 10001');
                        vessel2canim=vessel2c.animations.add('vessel2c');
                       // vessel2c.height+=40;
                        greencupcincr=0;
                        bluebottlecincr=0;
                    }else if(questarrayC[qnoC-1]==8){
                        redjugc2_graphics.inputEnabled=true;
                        greencupreverse_graphics.inputEnabled=false;
                        greencupreverse_graphics.events.onInputDown.removeAll();
                        bluepotc.destroy();
                        bluepotc = this.add.sprite(609,62,'Level42C_potsplash1','<Group>_90 copy 2 instance 10001');
                        bluepotcanim=bluepotc.animations.add('bluepotc');
                        //bluepotc.width-=20;
                        //bluepotc.height-=50;
                        greencupreverseincr=0;
                        redjugc2incr=0;
                    }
                    boxb.visible=false;
                }
                else if(selectedAns2==rightAns2||selectedAns2=="0"+rightAns2){
                    leftmost="wrong";
                    shake.shake(10,box1);
                    box2.inputEnabled=false;
                    box2.events.onInputDown.removeAll();
                    selectedAns1='';
                    counterText.setText(selectedAns1);
                    boxclick="opt1box";
                    
                    if(questarrayC[qnoC-1]==1){
                        potc_graphics.inputEnabled=true;
                        drumc_graphics.inputEnabled=false;
                        drumc_graphics.events.onInputDown.removeAll();
                        syntexc.destroy();
                        syntexc = this.add.sprite(612,113,'Level42C_tank2','<Group>_449 copy 2 instance 10001');
                        syntexcanim=syntexc.animations.add('syntexc');
                        drumcincr=0;
                        potcincr=0;
                    }else if(questarrayC[qnoC-1]==2){
                        sodac1_graphics.inputEnabled=true;
                        sodac2_graphics.inputEnabled=true;
                        orangemugc1_graphics.inputEnabled=false;
                        orangemugc2_graphics.inputEnabled=false;
                        orangemugc1_graphics.events.onInputDown.removeAll();
                        orangemugc2_graphics.events.onInputDown.removeAll();
                        vessel1c.destroy();
                        vessel1c = this.add.sprite(607,201,'Level42C_cooker1','<Group>_73 copy 5 instance 10000');
                        vessel1canim=vessel1c.animations.add('vessel1c');
                        sodacincr=0;
                        orangemugcincr=0;
                    }else if(questarrayC[qnoC-1]==3){
                        bottlec1_graphics.inputEnabled=false;
                        bottlec2_graphics.inputEnabled=false;
                        orangecanc_graphics.inputEnabled=true;
                        bottlec1_graphics.events.onInputDown.removeAll();
                        bottlec2_graphics.events.onInputDown.removeAll();
                        mugc.destroy();
                        mugc = this.add.sprite(600,120,'Level42C_mug2','<Group>_453 copy 2 instance 10001');
                        mugcanim=mugc.animations.add('mugc');
                        orangecancincr=0;
                        bottlecincr=0;
                    }else if(questarrayC[qnoC-1]==4){
                        greenbottlec1_graphics.inputEnabled=false;
                        greenbottlec2_graphics.inputEnabled=false;
                        pinkbucketc_graphics.inputEnabled=true;
                        greenbottlec1_graphics.events.onInputDown.removeAll();
                        greenbottlec2_graphics.events.onInputDown.removeAll();
                        bluecanc.destroy();
                        bluecanc = this.add.sprite(621,140,'Level42C_can1','<Group>_51 copy 4 instance 10001');
                        bluecancanim=bluecanc.animations.add('bluecanc');
                        pinkbucketcincr=0;
                        greenbottlecincr=0;
                    }else if(questarrayC[qnoC-1]==5){
                        nipplec1_graphics.inputEnabled=false;
                        nipplec2_graphics.inputEnabled=false;
                        redjugc_graphics.inputEnabled=true;
                        nipplec1_graphics.events.onInputDown.removeAll();
                        nipplec2_graphics.events.onInputDown.removeAll();
                        bluebucketc.destroy();
                        bluebucketc = this.add.sprite(601,160,'Level42C_bluebucketc2','<Group>_15 copy 4 instance 10000');
                        bluebucketc.width-=70;
                        bluebucketc.height-=70;
                        bluebucketcanim=bluebucketc.animations.add('bluebucketc');
                        redjugcincr=0;
                        nipplecincr=0;
                    }else if(questarrayC[qnoC-1]==6){
                        yellowctc1_graphics.inputEnabled=false;
                        yellowctc2_graphics.inputEnabled=false;
                        glass_graphics.inputEnabled=true;
                        yellowctc1_graphics.events.onInputDown.removeAll();
                        yellowctc2_graphics.events.onInputDown.removeAll();
                        greenmugc.destroy();
                        greenmugc = this.add.sprite(640,142,'Level42C_greenmugc1','<Group>_57 copy 2 instance 10000');
                        greenmugcanim=greenmugc.animations.add('greenmugc');
                        //greenmugc.width+=70;
                        //greenmugc.height+=95;
						greenmugc.scale.setTo(1,1.3);
                        glassincr=0;
                        yellowctcincr=0;
                    }else if(questarrayC[qnoC-1]==7){
                        bluebottlec_graphics.inputEnabled=false;
                        greencupc_graphics.inputEnabled=true;
                        bluebottlec_graphics.events.onInputDown.removeAll();
                        vessel2c.destroy();
                        vessel2c = this.add.sprite(585,222,'Level42C_vessel1','<Group>_73 copy 2 instance 10001');
                        vessel2canim=vessel2c.animations.add('vessel2c');
                       // vessel2c.height+=40;
                        greencupcincr=0;
                        bluebottlecincr=0;
                    }else if(questarrayC[qnoC-1]==8){
                        redjugc2_graphics.inputEnabled=false;
                        greencupreverse_graphics.inputEnabled=true;
                        redjugc2_graphics.events.onInputDown.removeAll();
                        bluepotc.destroy();
                        bluepotc = this.add.sprite(609,62,'Level42C_potsplash1','<Group>_90 copy 2 instance 10001');
                        bluepotcanim=bluepotc.animations.add('bluepotc');
                       // bluepotc.width-=20;
                       // bluepotc.height-=50;
                        greencupreverseincr=0;
                        redjugc2incr=0;
                    }
                    boxb.visible=false;
                }
				else{
						leftmost=null;
		                box1.frame=0;
		                box2.frame=1;
		                selectedAns1='';
		                selectedAns2='';
		                counterText.setText(selectedAns1);
		                counterText1.setText(selectedAns2); 
		                if(questarrayC[qnoC-1]==1){
		                    potc_graphics.inputEnabled=false;
		                    drumc_graphics.inputEnabled=true;
		                    potc_graphics.events.onInputDown.removeAll();
		                    drumc_graphics.events.onInputDown.removeAll();
		                    syntexc.destroy();
		                    syntexc = this.add.sprite(612,113,'Level42C_tank2','<Group>_449 copy 2 instance 10001');
		                    syntexcanim=syntexc.animations.add('syntexc');
		                   // potc_graphics.events.onInputDown.add(this.triggerevent,this);
		                    drumc_graphics.events.onInputDown.add(this.triggerevent,this);
		                    maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
		                    maskbg.height-=115;
		                    potcincr=0;
		                    drumcincr=0;
                		}else if(questarrayC[qnoC-1]==2){
                    		sodac1_graphics.inputEnabled=false;
		                    sodac2_graphics.inputEnabled=false;
		                    orangemugc1_graphics.inputEnabled=true;
		                    orangemugc2_graphics.inputEnabled=true;
		                    sodac1_graphics.events.onInputDown.removeAll();
		                    sodac2_graphics.events.onInputDown.removeAll();
		                    orangemugc1_graphics.events.onInputDown.removeAll();
		                    orangemugc2_graphics.events.onInputDown.removeAll();
		                    vessel1c.destroy();
		                    vessel1c = this.add.sprite(607,201,'Level42C_cooker1','<Group>_73 copy 5 instance 10000');
		                    vessel1canim=vessel1c.animations.add('vessel1c');
		                    //sodac1_graphics.events.onInputDown.add(this.triggerevent,this);
		                    //sodac2_graphics.events.onInputDown.add(this.triggerevent,this);
		                    orangemugc1_graphics.events.onInputDown.add(this.triggerevent,this);
		                    orangemugc2_graphics.events.onInputDown.add(this.triggerevent,this);
		                    maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
		                    maskbg.height-=115;
		                    sodacincr=0;
		                    orangemugcincr=0;
		                }else if(questarrayC[qnoC-1]==3){
		                    bottlec1_graphics.inputEnabled=true;
		                    bottlec2_graphics.inputEnabled=true;
		                    orangecanc_graphics.inputEnabled=false;
		                    bottlec1_graphics.events.onInputDown.removeAll();
		                    bottlec2_graphics.events.onInputDown.removeAll();
		                    orangecanc_graphics.events.onInputDown.removeAll();
		                    mugc.destroy();
		                    mugc = this.add.sprite(600,120,'Level42C_mug2','<Group>_453 copy 2 instance 10001');
		                    mugcanim=mugc.animations.add('mugc');
		                    bottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
		                    bottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
		                    //orangecanc_graphics.events.onInputDown.add(this.triggerevent,this);
		                    maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
		                    maskbg.height-=115;
		                    orangecancincr=0;
		                    bottlecincr=0;
                		}else if(questarrayC[qnoC-1]==4){
		                    greenbottlec1_graphics.inputEnabled=true;
		                    greenbottlec2_graphics.inputEnabled=true;
		                    pinkbucketc_graphics.inputEnabled=false;
		                    greenbottlec1_graphics.events.onInputDown.removeAll();
		                    greenbottlec2_graphics.events.onInputDown.removeAll();
		                    pinkbucketc_graphics.events.onInputDown.removeAll();
		                    bluecanc.destroy();
		                    bluecanc = this.add.sprite(621,140,'Level42C_can1','<Group>_51 copy 4 instance 10001');
		                    bluecancanim=bluecanc.animations.add('bluecanc');
		                    greenbottlec1_graphics.events.onInputDown.add(this.triggerevent,this);
		                    greenbottlec2_graphics.events.onInputDown.add(this.triggerevent,this);
		                   // pinkbucketc_graphics.events.onInputDown.add(this.triggerevent,this);
		                    maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
		                    maskbg.height-=115;
		                    pinkbucketcincr=0;
		                    greenbottlecincr=0;
		                }else if(questarrayC[qnoC-1]==5){
		                    nipplec1_graphics.inputEnabled=true;
		                    nipplec2_graphics.inputEnabled=true;
		                    redjugc_graphics.inputEnabled=false;
		                    nipplec1_graphics.events.onInputDown.removeAll();
		                    nipplec1_graphics.events.onInputDown.removeAll();
		                    redjugc_graphics.events.onInputDown.removeAll();
		                    bluebucketc.destroy();
		                    bluebucketc = this.add.sprite(601,160,'Level42C_bluebucketc2','<Group>_15 copy 4 instance 10000');
		                    bluebucketc.width-=70;
		                    bluebucketc.height-=70;
		                    bluebucketcanim=bluebucketc.animations.add('bluebucketc');
		                    nipplec1_graphics.events.onInputDown.add(this.triggerevent,this);
		                    nipplec2_graphics.events.onInputDown.add(this.triggerevent,this);
		                    //redjugc_graphics.events.onInputDown.add(this.triggerevent,this);
		                    maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
		                    maskbg.height-=115;
		                    redjugcincr=0;
		                    nipplecincr=0;
		                }else if(questarrayC[qnoC-1]==6){
		                    yellowctc1_graphics.inputEnabled=true;
		                    yellowctc2_graphics.inputEnabled=true;
		                    glass_graphics.inputEnabled=false;
		                    yellowctc1_graphics.events.onInputDown.removeAll();
		                    yellowctc2_graphics.events.onInputDown.removeAll();
		                    glass_graphics.events.onInputDown.removeAll();
		                    greenmugc.destroy();
		                    greenmugc = this.add.sprite(640,142,'Level42C_greenmugc1','<Group>_57 copy 2 instance 10000');
		                    greenmugcanim=greenmugc.animations.add('greenmugc');
		                   // greenmugc.width+=70;
		                   // greenmugc.height+=95;
							greenmugc.scale.setTo(1,1.3);
		                    yellowctc1_graphics.events.onInputDown.add(this.triggerevent,this);
		                    yellowctc2_graphics.events.onInputDown.add(this.triggerevent,this);
		                    //glass_graphics.events.onInputDown.add(this.triggerevent,this);
		                    maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
		                    maskbg.height-=115;
		                    glassincr=0;
		                    yellowctcincr=0;
		                }else if(questarrayC[qnoC-1]==7){
		                    bluebottlec_graphics.inputEnabled=true;
		                    greencupc_graphics.inputEnabled=false;
		                    bluebottlec_graphics.events.onInputDown.removeAll();
		                    greencupc_graphics.events.onInputDown.removeAll();
		                    vessel2c.destroy();
		                    vessel2c = this.add.sprite(585,222,'Level42C_vessel1','<Group>_73 copy 2 instance 10001');
		                    vessel2canim=vessel2c.animations.add('vessel2c');
		                   // vessel2c.height+=40;
		                    bluebottlec_graphics.events.onInputDown.add(this.triggerevent,this);
		                    //greencupc_graphics.events.onInputDown.add(this.triggerevent,this);
		                    maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
		                    maskbg.height-=115;
		                    greencupcincr=0;
		                    bluebottlecincr=0;
		                }else if(questarrayC[qnoC-1]==8){
		                    redjugc2_graphics.inputEnabled=true;
		                    greencupreverse_graphics.inputEnabled=false;
		                    redjugc2_graphics.events.onInputDown.removeAll();
		                    greencupreverse_graphics.events.onInputDown.removeAll();
		                    bluepotc.destroy();
		                    bluepotc = this.add.sprite(609,62,'Level42C_potsplash1','<Group>_90 copy 2 instance 10001');
		                    bluepotcanim=bluepotc.animations.add('bluepotc');
		                   // bluepotc.width-=20;
		                  //  bluepotc.height-=50;
		                    redjugc2_graphics.events.onInputDown.add(this.triggerevent,this);
		                    //greencupreverse_graphics.events.onInputDown.add(this.triggerevent,this);
		                    maskbg = this.add.sprite(-20,43,'Level42C_maskbg');
		                    maskbg.height-=115;
		                    greencupreverseincr=0;
		                    redjugc2incr=0;
		                }
                
                		boxclick="opt2box";
                
                		boxb.visible=false;
              		}
            }
            
        },this);

        wrongbtn.events.onInputDown.add(function(){
			wrongbtn.frameName="Symbol 14 copy 5 instance 10001";
            //console.log("erase"+boxclick);
            _this.clickSound.play();
            if(boxclick=="opt1box")
            {
                selectedAns1="";
                counterText.setText("");
				this.time.events.add(1000,function(){
                    wrongbtn.frameName="Symbol 14 copy 5 instance 10000";
                },this);
            }
            else if(boxclick=="opt2box")
            {
                selectedAns2="";
                counterText1.setText("");
				this.time.events.add(1000,function(){
                    wrongbtn.frameName="Symbol 14 copy 5 instance 10000";
                },this);
            }

        },this);
       
    },
    
    getVoice:function(question)
    {   
        _this.stopVoice();  
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2C/English/4.2C1.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2C/Hindi/4.2C1.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2C/Kannada/4.2C1.mp3");
                    } 
					else if(window.languageSelected=="Gujarati")
					{
						 _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.2A/4.2C1.mp3");
					}
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2C/Marathi/4.2C1.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2C/telugu/4.2C1.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2C/Tamil/4.2C1.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2C/Urdu/4.2C1.mp3");
                    }
					else
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2C/Odiya/4.2C1.mp3");
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
                 console.log("stop"); 
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
    
    correctAns:function()
    {
		this.displaynopad=0;
        numGroup.y = 00;
        var tween1 = _this.add.tween(numGroup);
        tween1.to({ y: 100 }, 0, 'Linear', true, 0);
        boxclick="";
		leftmost=null;
		box1.frame=1;
        box2.frame=1;
       _this.clickSound.play();
       _this.cmusic.play();
		if(questarrayC[qnoC-1]==1){
            //AnimOpt1 =syntexc.animations.add('syntexc',["a2","a1"]);
        	_this.tween1 = this.add.tween(syntexc.scale);
            _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(syntexc.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(syntexc.scale);
                                _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(syntexc.scale);
                                    _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
		}else if(questarrayC[qnoC-1]==2){
            //AnimOpt1 =vessel1c.animations.add('vessel1c',["a2","a1"]);
			_this.tween1 = this.add.tween(vessel1c.scale);
            _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(vessel1c.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(vessel1c.scale);
                                _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(vessel1c.scale);
                                    _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }else if(questarrayC[qnoC-1]==3){
            //AnimOpt1 =mugc.animations.add('mugc',["a2","a1"]);
			_this.tween1 = this.add.tween(mugc.scale);
            _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(mugc.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(mugc.scale);
                                _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(mugc.scale);
                                    _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }else if(questarrayC[qnoC-1]==4){
            //AnimOpt1 =bluecanc.animations.add('bluecanc',["a2","a1"]);
			_this.tween1 = this.add.tween(bluecanc.scale);
            _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(bluecanc.scale);
                        _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(bluecanc.scale);
                                _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(bluecanc.scale);
                                    _this.tween2.to({ x:1 , y:1}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }else if(questarrayC[qnoC-1]==5){
            //AnimOpt1 =bluebucketc.animations.add('bluebucketc',["a2","a1"]);
			_this.tween1 = this.add.tween(bluebucketc.scale);
            _this.tween1.to({ x:0.83 , y:0.83}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(bluebucketc.scale);
                        _this.tween2.to({x:0.8 , y:0.8}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(bluebucketc.scale);
                                _this.tween1.to({x:0.83, y:0.83}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(bluebucketc.scale);
                                    _this.tween2.to({x:0.8 , y:0.8}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }else if(questarrayC[qnoC-1]==6){
            //AnimOpt1 =greenmugc.animations.add('greenmugc',["a2","a1"]);
			_this.tween1 = this.add.tween(greenmugc.scale);
            _this.tween1.to({ x:1.03 , y:1.35}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(greenmugc.scale);
                        _this.tween2.to({ x:1 , y:1.32}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(greenmugc.scale);
                                _this.tween1.to({ x:1.03 , y:1.35}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(greenmugc.scale);
                                    _this.tween2.to({x:1 , y:1.32}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }else if(questarrayC[qnoC-1]==7){
            //AnimOpt1 =vessel2c.animations.add('vessel2c',["a2","a1"]);
			_this.tween1 = this.add.tween(vessel2c.scale);
            _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(vessel2c.scale);
                        _this.tween2.to({ x:0.99 , y:0.99}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(vessel2c.scale);
                                _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(vessel2c.scale);
                                    _this.tween2.to({ x:0.99 , y:0.99}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }else if(questarrayC[qnoC-1]==8){
            //AnimOpt1 =bluepotc.animations.add('bluepotc',["a2","a1"]);
			_this.tween1 = this.add.tween(bluepotc.scale);
            _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
            _this.tween1.onComplete.add(function(){
                _this.tween2 = this.add.tween(bluepotc.scale);
                        _this.tween2.to({ x:0.99 , y:0.99}, 300, 'Linear', true, 0);
                        _this.tween2.onComplete.add(function(){
                                _this.tween1 = this.add.tween(bluepotc.scale);
                                _this.tween1.to({ x:1.03 , y:1.03}, 300, 'Linear', true, 0);
                                _this.tween1.onComplete.add(function(){
                                    _this.tween2 = this.add.tween(bluepotc.scale);
                                    _this.tween2.to({ x:0.99 , y:0.99}, 300, 'Linear', true, 0); 
                                },_this);
                        },_this);
                    },_this);
        }
        //AnimOpt1.play(2.8,true);
        var bAnim = boxb.animations.add('boxb',["b2","b1"]);
        bAnim.play(2.8,true);
       if(timer!=null)
        {
            timer.stop();
           timer = null;
        }

        /* var currentTime = window.timeSaveFunc();
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
       var starAnim = starsGroupC.getChildAt(count1);
       starAnim.smoothed = false;
       var anim = starAnim.animations.add('star');
       anim.play();
       count1++;
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
        _this.cmusic = null;
        _this.playQuestionSound = null;
        _this.wmusic=null;
        _this.clickSound=null;
        delete background;
        count=0;
        count1=0;
        qnoC=0;
        delete questarrayC;
        delete starsGroupC;
        delete questgroupC;
        potcincr=0;
        drumcincr=0;
        sodacincr=0;
        orangemugcincr=0;
        bottlecincr=0;
        orangecancincr=0;
        greenbottlecincr=0;
        pinkbucketcincr=0; 
        redjugcincr=0;
        yellowctcincr=0;
        nipplecincr=0;
        glassincr=0;
        bluebottlecincr=0;
        greencupcincr=0;
        greencupreverseincr=0;
        redjugc2incr=0;
        redjugc2incr=0;
        greencupreverseincr=0;
        boxb=0;
        potc_graphics=null;
        drumc_graphics=null;
        sodac1_graphics=null;
        sodac2_graphics=null;
        orangemugc1_graphics=null;
        orangemugc2_graphics=null;
        bottlec1_graphics=null;
        bottlec2_graphics=null;
        orangecan_graphics=null;
        greenbottlec_graphics=null;
        pinkbucketc_graphics=null;
        yellowctc1_graphics=null;
        yellowctc2_graphics=null;
        redjugc_graphics=null;
        nipplec1_graphics=null;
        nipplec2_graphics=null;
        glass_graphics=null;
        greencupc_graphics=null;
        bluebottlec_graphics=null;
        redjugc2_graphics=null;
        greencupreverse_graphics=null;
        delete selectedAns1;
        delete selectedAns2;
        delete timer;
        minutes=0;
        seconds=0;
        counterForTimer=0;
        delete noofAttempts;
        delete AnsTimerCount;
        delete gameid;
    }
                  
};