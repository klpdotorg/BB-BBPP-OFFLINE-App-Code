Game.unity1_7level1=function(){};

var no11;
var randomno;
var count;
var speakerbtn;
var fishGroup;
var xArray,yArray;
var s,st;
var correctflg,wrongflg;
var arrow,arrow2;
var arrowlast,arrowlast2;
var countcorrect;
var maskgraphics;
var randomx;
var randomy;
var overlappedflag,overlappedflag2;
var minutes,seconds,counterForTimer;
var timeDisplay;
var tick;
var scoreflag;
var correctflg;
var wrongflg;
var fishbasket;
var maskbg;
var bluebg;
var background;
var starsGroup;
var timer1;
var noofAttempts;
var AnsTimerCount;
var gameid;

Game.unity1_7level1.prototype={
    
    init:function(game)
    {
        _this = this;
        _this.clickSound=this.add.audio('ClickSound');
        _this.bubbleSound=this.add.audio('bubble');
        _this.wrongSound = this.add.audio('waudio');
        _this.celebrationSound = this.add.audio('celebr');
        _this.snapSound = this.add.audio('snapSound');
        _this.gameid = "Game 1.7";
        
        _this.currentTime = window.timeSaveFunc();
        
        /*this.saveGameplay = 
        { 
            id_game:this.gameid, 
            access_token:window.acctkn, 
            start_time:this.currentTime
        } 
        this.savedVar = absdsjsapi.saveGameplay(this.saveGameplay);*/

        telInitializer.gameIdInit("unity1_7",gradeSelected);
		

        

    },

    preload:function(game){
        if(!window.grade1NSN7){

            window.grade1NSN7 = true;

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

            //game assets.
        this.load.image('Game17_background',window.baseUrl+'assets/gradeAssets/unity/1.7/bg.png');
        this.load.image('Game17_TopBar', window.baseUrl+'assets/gradeAssets/unity/1.7/Topbar.png');
        this.load.image('Game17_dottedBox', window.baseUrl+'assets/gradeAssets/unity/1.7/dottedBox.png');
        this.load.atlas('Game17_tick',window.baseUrl+'assets/gradeAssets/unity/1.7/tick.png' ,window.baseUrl+'json/gradeJson/unity/1.7/tick.json');
        this.load.image('Game17_celeb', window.baseUrl+'assets/gradeAssets/unity/1.7/c.png');
        this.load.atlas('Game17_backbtn',window.baseUrl+'assets/gradeAssets/unity/1.7/backbtn.png' ,window.baseUrl+'json/gradeJson/unity/1.7/backbtn.json');
        this.load.atlas('Game17_speaker',window.baseUrl+'assets/gradeAssets/unity/1.7/speaker.png' ,window.baseUrl+'json/gradeJson/unity/1.7/speaker.json');
        this.load.atlas('Game17_starAnim',window.baseUrl+'assets/gradeAssets/unity/1.7/starAnim.png',window.baseUrl+'json/gradeJson/unity/1.7/starAnim.json');
        this.load.atlas('Game17_btn',window.baseUrl+'assets/gradeAssets/unity/1.7/btn.png',window.baseUrl+'json/gradeJson/unity/1.7/btn.json');
        this.load.image('Game17_tittleBar', window.baseUrl+'assets/gradeAssets/unity/1.7/tittleBar.png');
        this.load.atlas('Game17_replay', window.baseUrl+'assets/gradeAssets/unity/1.7/reply.png', window.baseUrl+'json/gradeJson/unity/1.7/reply.json');
        
        //load 1.7 assets
        this.load.image('Game17_zero', window.baseUrl+'assets/gradeAssets/unity/1.7/0.png');
        this.load.image('Game17_one', window.baseUrl+'assets/gradeAssets/unity/1.7/1.png');
        this.load.image('Game17_two', window.baseUrl+'assets/gradeAssets/unity/1.7/2.png');
        this.load.image('Game17_three', window.baseUrl+'assets/gradeAssets/unity/1.7/3.png');
        this.load.image('Game17_four', window.baseUrl+'assets/gradeAssets/unity/1.7/4.png');
        this.load.image('Game17_five', window.baseUrl+'assets/gradeAssets/unity/1.7/5.png');
        this.load.image('Game17_six', window.baseUrl+'assets/gradeAssets/unity/1.7/6.png');
        this.load.image('Game17_seven', window.baseUrl+'assets/gradeAssets/unity/1.7/7.png');
        this.load.image('Game17_eight', window.baseUrl+'assets/gradeAssets/unity/1.7/8.png');
        this.load.image('Game17_nine', window.baseUrl+'assets/gradeAssets/unity/1.7/9.png');
        this.load.image('Game17_bg', window.baseUrl+'assets/gradeAssets/unity/1.7/bg17.png');
        this.load.atlas('Game17_fish', window.baseUrl+'assets/gradeAssets/unity/1.7/fish.png', window.baseUrl+'json/gradeJson/unity/1.7/fish.json');
        this.load.atlas('Game17_fishbubble', window.baseUrl+'assets/gradeAssets/unity/1.7/fishbubble.png', window.baseUrl+'json/gradeJson/unity/1.7/fishbubble.json');
        this.load.image('Game17_bluebg',window.baseUrl+'assets/gradeAssets/unity/1.7/bluebg.png');
        this.load.image('Game17_maskbg',window.baseUrl+'assets/gradeAssets/unity/1.7/maskbg.png');
        this.load.image('Game17_Arrow_Btn', window.baseUrl+'assets/gradeAssets/unity/1.7/Arrow_Btn.png');
        this.load.image('Game17_timer', window.baseUrl+'assets/gradeAssets/unity/1.7/timer.png');
    }

    },
    
    create:function(game){
		_this.amplify = null;
    noofAttempts=0;
     _this.sceneCount=0;
    AnsTimerCount=0;
    no11 = 0;
    count=0;
    minutes=0;
    seconds=0;
    counterForTimer=0;
    countcorrect=0;
    randomno=0;
    correctflg=0;
    wrongflg=0;
    overlappedflag=false;
    overlappedflag2=false;
    s=new Array();
    st=new Array();
    randomx=new Array();
    randomy=new Array();
    fishGroup=this.add.group();  
    fishbasket=[1,2,3,5,6,7,8,9]; 
    fishbasket=this.shuffle(fishbasket);
    yArray = [90,120,150,180,210,240,270,300,330,360,390];
    xArray = [50,110,170,230,290,350,410,470,530];
    
    this.physics.startSystem(Phaser.Physics.ARCADE);
    background = this.add.tileSprite(0,0,this.world.width,this.world.height, 'Game17_bg');

    shake = new Phaser.Plugin.Shake(game);
    game.plugins.add(shake);
        
    var TopBar=this.add.sprite(0,0,'Game17_TopBar');
    TopBar.name="Game17_TopBar";  
    TopBar.scale.setTo(1,1);

    _this.backbtn = this.add.sprite(-3,3,'newCommonBackBtnForAll');
    _this.backbtn.name="Game17_backbtn"; 
    _this.backbtn.inputEnabled = true;
    _this.backbtn.events.onInputDown.add(function(target){
        //console.log("back");
        target.events.onInputDown.removeAll();
        //this.stopVoice();
        _this.clickSound.play();
        _this.state.start('grade1levelSelectionScreen',true,false); 
    },this);
    //  var lamp=this.add.sprite(910,7,'lamp');

    _this.speakerbtn = this.add.sprite(600,6,'Game17_speaker');
    _this.speakerbtn.name="Game17_speaker";
    
      // _this.speakerbtn.inputEnabled = true;
    _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

    this.generateStarsForTheScene(6);
        
    //  var points=this.add.sprite(720,7,'points');
    // var diamondBox=this.add.sprite(820,7,'diamondBox');
   /* var dottedBox=this.add.sprite(70,7,'Game17_dottedBox');
    dottedBox.name="Game17_dottedBox";
    var numTxt1 = this.add.text(45,17, 'PRACTICE');
    numTxt1.anchor.setTo(0.5);
    numTxt1.align = 'center';
    numTxt1.font = 'Alte Haas Grotesk';
    numTxt1.fontSize = 12;
    numTxt1.fill = '#ffffff';
    numTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
    dottedBox.addChild(numTxt1);
        
    var numTxt2 = this.add.text(235,24, 'Numbers');
    numTxt2.anchor.setTo(0.5);
    numTxt2.align = 'center';
    numTxt2.font = 'Alte Haas Grotesk';
    numTxt2.fontSize = 18;
    numTxt2.fill = '#ffffff';
    numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
    var timebg=this.add.sprite(305,6,'Game17_timer');
    timebg.name="Game17_timer";
    timebg.scale.setTo(1,1);
        
    timeDisplay = this.add.text(330,22,minutes + ' : '+ seconds);
    
    timeDisplay.anchor.setTo(0.5);
    timeDisplay.align = 'center';
    timeDisplay.font = 'Oh Whale';
    timeDisplay.fontSize = 20;
    //text.fontWeight = 'bold';
    timeDisplay.fill = '#ADFF2F';

    this.getVoice();
    this.getQuestion();  
},
    
     shuffle: function(array) {
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
    
    stopVoice:function(){
        if(this.playQuestionSound)
        {
            if(this.playQuestionSound.contains(this.src))
            {
                this.playQuestionSound.removeChild(this.src);
                this.src = null;
            }
            if(!this.playQuestionSound.paused)
            {
                this.playQuestionSound.pause();
                this.playQuestionSound.currentTime = 0.0;
            }
            this.playQuestionSound = null;
            this.src = null;
        }
            
        if(this.celebrationSound)
        {
            if(this.celebrationSound.isPlaying)
            {
                this.celebrationSound.stop();
                this.celebrationSound = null;
            }
        }
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
    },
    
    getVoice:function(){
        _this.stopVoice();   
        this.playQuestionSound = document.createElement('audio');
        this.src = document.createElement('source');

        if(window.languageSelected == "English")
        {
            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.7/English/Game1_7.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.7/Hindi/Game1_7.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.7/Kannada/Game1_7.mp3");
        }
		else if(window.languageSelected == "Marathi")
        {
            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.7/Marathi/Game1_7.mp3");
        }
		else if(window.languageSelected == "Telugu")
        {
            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.7/Telugu/Game1_7.mp3");
        }
		else if(window.languageSelected == "Tamil")
        {
            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.7/Tamil/Game1_7.mp3");
        }
		else if(window.languageSelected == "Urdu")
        {
            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.7/Urdu/Game1_7.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/unity/1.7/Game1_7.mp3");
         }
		else
        {
            this.src.setAttribute("src", window.baseUrl+"questionSounds/unity/1.7/Odiya/1.7.mp3");
			_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        this.playQuestionSound.appendChild(this.src);
        this.playQuestionSound.play();
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
	
    getQuestion:function(target)
    {

        ////console.log("get"+no11);

        noofAttempts = 0;
        AnsTimerCount=0;

        timer1 = _this.time.create(false);
        timer1.loop(1000, function(){
                  AnsTimerCount++;
                  this.updateTimer();
        }, this);
        timer1.start();


        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        
        switch(fishbasket[0])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5: 
            case 6: 
            case 7:
            case 8:
            case 9: this.gotoFirstQuestion();
                    break;
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
    
    generateStarsForTheScene:function(count)
    {
        starsGroup = this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            starsGroup.create(this.world.centerX-15, 10, 'starAnim1');
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
    
     update :function(){

         for (var i = 0; i < fishGroup.length; i++)
         {
            
            if(fishGroup.getChildAt(i).x > 480) 
            {
               fishGroup.getChildAt(i).scale.setTo(-0.6,0.6); 
                fishGroup.getChildAt(i).body.velocity.x = -100;
            }
            if (fishGroup.getChildAt(i).x <=100) 
            {
                fishGroup.getChildAt(i).scale.setTo(0.6,0.6); 
            }
         }
    },
 
        
    
    gotoFirstQuestion:function(){

        /*noofAttempts = 0;
        AnsTimerCount=0;

        timer1 = _this.time.create(false);
        timer1.loop(1000, function(){
                  AnsTimerCount++;
                  this.updateTimer();
        }, this);
        timer1.start();*/

        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        _this.speakerbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
            this.getVoice();
        },this);
        no11++;
        fishGroup=this.add.group();
        fishGroup.enableBody = true;
        if(wrongflg==1){  
          
        }
        else
        {
            randomno=fishbasket[0];
           // randomno = 8;
        }
    
        tick = this.add.sprite(68,493,'Game17_tick');
        tick.name="Game17_tick";
		tick.frameName='Symbol 14 copy instance 10000';
        tick.anchor.setTo(0.5);
        tick.scale.setTo(1,1);
        tick.inputEnabled=false;
        tick.events.onInputDown.removeAll();
        tick.events.onInputDown.add(function(){
			tick.frameName='Symbol 14 copy instance 10001';
            noofAttempts++;
            
            tick.inputEnabled=false;
            //tick.frameName='Symbol 2 instance 10001';
            _this.clickSound.play();
            if(randomno==4 && correctflg==2)
            {
                this.correctAns();
            }
            else if(randomno!=4 && correctflg==1)
            {
                this.correctAns();
            }  
            else{
                wrongflg=1;
                this.wrongAns();
            }
                
        },this);
  
        bluebg = this.add.sprite(720,292,'Game17_bluebg');
        bluebg.name="Game17_bluebg";
        bluebg.anchor.setTo(0.5);
        bluebg.scale.setTo(1.3,1.3);
        var tempx;
        var tempy;
        for (var i = 0; i < randomno; i++)
         {
            tempx=xArray[Math.floor(Math.random()*xArray.length)];
             tempy=yArray[Math.floor(Math.random()*yArray.length)];
            if(i!=0){
               /* if(randomx.includes(tempx) && randomy.includes(tempy)){
                    tempx=xArray[Math.floor(Math.random()*xArray.length)];
                    tempy=yArray[Math.floor(Math.random()*yArray.length)];
                }
                else if(randomx.includes(tempx)){
                    tempx=xArray[Math.floor(Math.random()*xArray.length)];
                }
                else if(randomy.includes(tempy)){
                    tempy=yArray[Math.floor(Math.random()*yArray.length)];
                }*/

                if(randomx.indexOf(tempx) > -1 && randomy.indexOf(tempy) > -1){
                    tempx=xArray[Math.floor(Math.random()*xArray.length)];
                    tempy=yArray[Math.floor(Math.random()*yArray.length)];
                }
                else if(randomx.indexOf(tempx) > -1){
                    tempx=xArray[Math.floor(Math.random()*xArray.length)];
                }
                else if(randomy.indexOf(tempy) > -1){
                    tempy=yArray[Math.floor(Math.random()*yArray.length)];
                }
                
                randomx.push(tempx);
                randomy.push(tempy);
            }
            else{
                randomx.push(tempx);
                randomy.push(tempy);
            }
            s = fishGroup.create(randomx[i],randomy[i],'Game17_fish');
            s.name = 'fish' + i;
            //s.tint = 0xff00ff;
            s.body.collideWorldBounds = true;
            s.scale.setTo(0.6,0.6);
            s.anchor.setTo(0.5,0.5);
            s.body.bounce.setTo(0.8, 0.8);
            s.animations.add('fish');
            s.animations.play('fish', 10, true);
            s.body.velocity.setTo(10 + 1 * 100,00);   
             
             var index1 = xArray.indexOf(randomx[i]);   
            if (index1 > -1) {
                xArray.splice(index1, 1);
            }
            var index2 = yArray.indexOf(randomy[i]);   
            if (index2 > -1) {
                yArray.splice(index2, 1);
            } 
             
         }
        
        maskbg = this.add.sprite(720,292,'Game17_maskbg');
        maskbg.name="Game17_maskbg";
        maskbg.anchor.setTo(0.5);
        maskbg.scale.setTo(1.2,1.20);

        var numbgrps=new Array(); 
        numbgrps.push(this.add.sprite(720,292,'Game17_one'));numbgrps[0].value=1;numbgrps[0].alpha=0;
        numbgrps[0].anchor.setTo(0.5);
        numbgrps[0].name="Game17_one";
        numbgrps[0].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_two'));numbgrps[1].value=2;numbgrps[1].alpha=0;
        numbgrps[1].anchor.setTo(0.5);
        numbgrps[1].name="Game17_two";
        numbgrps[1].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_three'));numbgrps[2].value=3;numbgrps[2].alpha=0;
        numbgrps[2].anchor.setTo(0.5);
        numbgrps[2].name="Game17_three";
        numbgrps[2].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_four'));numbgrps[3].value=4;numbgrps[3].alpha=0;
        numbgrps[3].anchor.setTo(0.5);
        numbgrps[3].name="Game17_four";
        numbgrps[3].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_five'));numbgrps[4].value=5;numbgrps[4].alpha=0;
        numbgrps[4].anchor.setTo(0.5);
        numbgrps[4].name="Game17_five";
        numbgrps[4].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_six'));numbgrps[5].value=6;numbgrps[5].alpha=0;
        numbgrps[5].anchor.setTo(0.5);
        numbgrps[5].name="Game17_six";
        numbgrps[5].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_seven'));numbgrps[6].value=7;numbgrps[6].alpha=0;
        numbgrps[6].anchor.setTo(0.5);
        numbgrps[6].name="Game17_seven";
        numbgrps[6].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_eight'));numbgrps[7].value=8;numbgrps[7].alpha=0;
        numbgrps[7].anchor.setTo(0.5);
        numbgrps[7].name="Game17_eight";
        numbgrps[7].scale.setTo(0.75,0.75);
        numbgrps.push(this.add.sprite(720,292,'Game17_nine'));numbgrps[8].value=9;numbgrps[8].alpha=0;
        numbgrps[8].anchor.setTo(0.5);
        numbgrps[8].name="Game17_nine";
        numbgrps[8].scale.setTo(0.75,0.75);
        for(var no=0;no<numbgrps.length;no++)
        {
            if(randomno==numbgrps[no].value)
            {
                numbgrps[no].alpha=1;
            }
        }
    
        if(randomno==1)
        {
            arrow=this.add.sprite(715,130,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(717,400,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){  
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }   
                if(arrow.x < 650 || arrow.x > 760 || arrow.y > 454 || arrow.y < 110 )
                {
                    //console.log("condition");
                    arrow.x=715;
                    arrow.y=130;
                    
                    maskgraphics = this.add.graphics(0,-20);
                    maskbg.mask = maskgraphics;
                } 
             },this);
                arrow.events.onDragStop.removeAll();
                arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast) || overlappedflag==true)
                {
                    
                  //  //console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // //console.log("not overlap");
                  
                }
                this.input.deleteMoveCallback(this.move, this);
            },this);
        }
        else if(randomno==2)
        {
            /*var graphics = this.add.graphics(730, 180);
            graphics.lineStyle(2, 0x0000FF, 1);
            graphics.drawRect(5, 5, 15, 15);*/
            
            arrow=this.add.sprite(655,230,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(770,405,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
             arrow.angle = 210;
            arrow.input.enableDrag(true);
            //console.log("QQQ"+this.input.x);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
    
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }
                
                 if(this.input.x>740 && this.input.y>180 && this.input.y<400){
                    arrow.angle = 0;
                }
                else if(this.input.x>650 && this.input.y>350)
                    {
                        arrow.angle = 260;
                    }
                
                if(arrow.x < 615 || arrow.x > 840 || arrow.y > 445 || arrow.y < 128)
                {
                     
                    //console.log("condition");
                    arrow.x=655;
                    arrow.y=230;
                    maskgraphics = this.add.graphics(-30,15);
                    maskbg.mask = maskgraphics;
                     /*this.time.events.add(300, function(){
                    arrow.angle = 210;
                     },this);*/
                     arrow.angle = 210;

                    
                }
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast) || overlappedflag==true)
                {
                    ////console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // //console.log("not overlap");
                   
                }
                this.input.deleteMoveCallback(this.move, this);
                /*if(this.checkOverlap(arrow,graphics)){
                   arrow.angle = 0;
                   }*/
               
    
            },this);
        }
        else if(randomno==7)
        {
            arrow=this.add.sprite(652,170,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(695,435,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.angle = 260;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                } 
                if(this.input.x>740 && this.input.y>140 && this.input.y<400){
                    arrow.angle = 20;
                }
                
                if(arrow.x < 612 || arrow.x > 820 || arrow.y > 454 || arrow.y < 115 )
                {
                    //console.log("condition");
                    arrow.x=652;
                    arrow.y=170;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                    /* this.time.events.add(300, function(){
                    arrow.angle = 260;
                     },this);*/
                    arrow.angle = 260;
                }
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast)  || overlappedflag==true)
                {
                    ////console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                    ////console.log("not overlap");
                   
                }
                this.input.deleteMoveCallback(this.move, this);
                
                
            },this);
        }
        else if(randomno==3)
        {
            arrow=this.add.sprite(652,209,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(669,367,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.angle = 210;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
    
             arrow.events.onDragUpdate.removeAll();
             arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }
                  if(this.input.x>740 && this.input.y>180 && this.input.y<370){
                    arrow.angle = 0;
                  }
                 else if(this.input.x<760 && this.input.y<400 &&this.input.y>300 ){
                    arrow.angle = 90;
                 }
                 
                if(arrow.x < 600 || arrow.x > 820 || arrow.y > 454 || arrow.y < 115 )
                {
                    //console.log("condition");
                    arrow.x=652;
                    arrow.y=209;
                    maskgraphics = this.add.graphics(-10,30);
                    maskbg.mask = maskgraphics;
                   /*  this.time.events.add(300, function(){
                    arrow.angle = 210;
                     },this);*/
                     arrow.angle = 210;
                }
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast) || overlappedflag==true)
                {
                   // //console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // //console.log("not overlap");
                  
                }
                this.input.deleteMoveCallback(this.move, this);
               
            },this);
        }
        else if(randomno==4)
        {
            arrow=this.add.sprite(655,170,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrow2=this.add.sprite(754,170,'Game17_Arrow_Btn');
            arrow2.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(752,405,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrowlast2 =this.add.sprite(772,306,'Game17_Arrow_Btn');
            arrowlast2.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrow2.scale.setTo(0.5,0.5);
            arrow2.anchor.setTo(0.5);
            arrow2.inputEnabled=true;
            arrow2.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrowlast2.scale.setTo(0.5,0.5);
            arrowlast2.anchor.setTo(0.5);
            arrowlast2.alpha=0;
            arrow.bringToTop(arrowlast2);
            arrow2.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow2.events.onDragStart.removeAll();
            arrow2.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast2)==true){
                    overlappedflag=true;
                }    
                if(arrow.x < 615 || arrow.x > 820 || arrow.y > 454 || arrow.y < 115 )
                {
                   // //console.log("condition");
                    arrow.x=655;
                    arrow.y=170;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }
             },this);
            arrow2.events.onDragUpdate.removeAll();
            arrow2.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow2,arrowlast)==true || this.checkOverlap(arrow2,arrow)==true){
                    overlappedflag2=true;
                }    
                if(arrow2.x < 615 || arrow2.x > 820 || arrow2.y > 454 || arrow2.y < 115 )
                {
                   // //console.log("condition");
                    arrow2.x=754;
                    arrow2.y=170;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast2)  || overlappedflag==true)
                {
                    
                    correctflg++;
                   // //console.log("arrow1 overlapped"+correctflg);
                }
                else
                {
                   // //console.log("not overlap");
                    
                }
                this.input.deleteMoveCallback(this.move, this);
            },this);
            arrow2.events.onDragStop.removeAll();
            arrow2.events.onDragStop.add(function(){
                _this.snapSound.play();
                
                if(this.checkOverlap(arrow2,arrowlast) || this.checkOverlap(arrow2,arrow) || overlappedflag2==true)
                {
                    
                    correctflg++;
                   // //console.log("arrow2 overlapped"+correctflg);
                }
                else
                {
                   // //console.log("not overlap");
                    
                }
                this.input.deleteMoveCallback(this.move, this);
            },this);
        }
        else if(randomno==5)
        {
            arrow=this.add.sprite(750,173,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(660,395,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.angle = 90;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                }
                
                if(this.input.x<670 && this.input.y>160){
                    arrow.angle = 0;
                }
               else if(this.input.x>670 && this.input.y>250&& this.input.y<280){
                    arrow.angle =260;
                }
                else if(this.input.x>750 && this.input.y>280 && this.input.y<360){
                    arrow.angle = 0;
                }
               else  if(this.input.x<750 && this.input.y>380 ){
                    arrow.angle = 90;
                }
                
                if(arrow.x < 600 || arrow.x > 800 || arrow.y > 454 || arrow.y < 110 )
                {
                    //console.log("condition");
                    arrow.x=750;
                    arrow.y=173;
                    maskgraphics = this.add.graphics(25,0);
                    maskbg.mask = maskgraphics;
                     /*this.time.events.add(300, function(){
                    arrow.angle = 90;
                     },this);*/
                    arrow.angle = 90;
                }    
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast)  || overlappedflag==true)
                {
                  //  //console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // //console.log("not overlap");
                }
                this.input.deleteMoveCallback(this.move, this);
               
            },this);
        }
        
        else if(randomno==6)
        {
            arrow=this.add.sprite(762,192,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(755,285,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
              arrow.angle = 90;
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                   // //console.log("overlapped flag======"+overlappedflag);
                }
                 if(this.input.x<700 && this.input.y>180 &&this.input.y<400){
                    arrow.angle = 0;
                }
                else if(this.input.x>720 && this.input.y>350){
                    arrow.angle = 180;
                }
                else if(this.input.x<750 && this.input.y<280){
                    arrow.angle = 90;
                }
                
                if(arrow.x < 640 || arrow.x > 810 || arrow.y > 458 || arrow.y < 120 )
                {
                    //console.log("condition");
                    arrow.x=762;
                    arrow.y=192;
                    maskgraphics = this.add.graphics(12,25);
                    maskbg.mask = maskgraphics;
                     /*this.time.events.add(300, function(){
                    arrow.angle = 90;
                     },this);*/
                     arrow.angle = 90;
                }
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast)  || overlappedflag==true)
                {
                  //  //console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // //console.log("not overlap");
                }
                this.input.deleteMoveCallback(this.move, this);
               
            },this);
        }
        
        else if(randomno==8)
        {
            arrow=this.add.sprite(720,175,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(760,245,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.angle = 90;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)){
                      overlappedflag=true;
                }
                
                 
                
                if(arrow.x < 604 || arrow.x > 810 || arrow.y > 465 || arrow.y < 120 )
                {
                    //console.log("condition");
                    arrow.x=720;
                    arrow.y=175;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                   /* this.time.events.add(300, function(){
                    arrow.angle = 90;
                     },this);*/
                      arrow.angle = 90;
                }
                
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast) || overlappedflag==true)
                {
                  //  //console.log("overlapssss");
                    correctflg=1;
                }
                else
                {
                   // //console.log("not overlap");
                }
                this.input.deleteMoveCallback(this.move, this);
             /*   if(this.input.x<710 && this.input.y>180 && this.input.y<250){
                    arrow.angle = 340;
                }
                else if(this.input.x>730 && this.input.y>370){
                    arrow.angle = 90;
                }
                else if(this.input.x>650 && this.input.y<350 && this.input.x<680)
                {
                    arrow.angle = 200;
                } */ 
                if(this.input.x<710 && this.input.y>180 && this.input.y<270 && this.input.x<700){
                    arrow.angle = 340;
                }
                else if(this.input.x>700 && this.input.y>290 && this.input.y<380 && this.input.x<740){
                    arrow.angle = 350;
                }
                else if(this.input.x<760 && this.input.y>360 && this.input.y<400 && this.input.x>650)
                {
                    arrow.angle = 90;
                }
                else if(this.input.x>640 && this.input.y<390 && this.input.y>290 && this.input.x<690)
                {
                    arrow.angle = 200;
                }
               
               
            },this);
        }
        
        else if(randomno==9)
        {
            arrow=this.add.sprite(765,215,'Game17_Arrow_Btn');
            arrow.name="Game17_Arrow_Btn";
            arrowlast =this.add.sprite(666,389,'Game17_Arrow_Btn');
            arrowlast.name="Game17_Arrow_Btn";
            arrow.scale.setTo(0.5,0.5);
            arrow.anchor.setTo(0.5);
            arrow.inputEnabled=true;
            arrow.angle = 180;
            arrow.input.enableDrag(true);
            arrowlast.scale.setTo(0.5,0.5);
            arrowlast.anchor.setTo(0.5);
            arrowlast.alpha=0;
            arrow.bringToTop(arrowlast);
            arrow.events.onDragStart.removeAll();
            arrow.events.onDragStart.add(function(){
                _this.clickSound.play();
                this.input.addMoveCallback(this.move, this);
            },this);
            arrow.events.onDragUpdate.removeAll();
            arrow.events.onDragUpdate.add(function(){
                if(this.checkOverlap(arrow,arrowlast)==true){
                    overlappedflag=true;
                } 
                 if(this.input.x<740 && this.input.y>170 && this.input.y<210){
                    arrow.angle = 45;
                }
                else if(this.input.x<760 && this.input.y>210 && this.input.y<360){
                    arrow.angle = 0;
                }
                else if(this.input.x<760 && this.input.y>370){
                    arrow.angle = 90;
                }
                if(arrow.x < 604 || arrow.x > 820 || arrow.y > 465 || arrow.y < 120 )
                {
                    ////console.log("condition");
                    arrow.x=765;
                    arrow.y=215;
                    maskgraphics = this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                  /*   this.time.events.add(300, function(){
                    arrow.angle = 180;
                     },this);*/
                     arrow.angle = 180;
                }   
             },this);
            arrow.events.onDragStop.removeAll();
            arrow.events.onDragStop.add(function(){
                _this.snapSound.play();
                tick.inputEnabled=true;
                
                if(this.checkOverlap(arrow,arrowlast)  || overlappedflag==true)
                {
                    correctflg=1;
                }
                else
                {
                    ////console.log("not overlap");
                }
                this.input.deleteMoveCallback(this.move, this);
               
            },this);
        }
            if(scoreflag==1)
            {
                if(no11==1)
                {
                    maskbg.x=0;
                    maskgraphics= this.add.graphics(0,0); 
                    maskbg.mask = maskgraphics;
                }
                else
                {
                    maskgraphics= this.add.graphics(0,0);
                    maskbg.mask = maskgraphics;
                }
            }
            else
            {
                maskgraphics = this.add.graphics(0,0);
                maskbg.mask = maskgraphics;
            }
    },
    
    move:function(pointer, x, y) {
        var xpos;
        if(randomno==4)
        {
            if(scoreflag==1)
            {
                if(no11==1)
                {
                    maskbg.x=720;
                    maskgraphics.drawCircle(arrow.x,arrow.y,80); 
                }
                else
                {
                    maskgraphics.drawCircle(arrow.x,arrow.y,80); 
                }
            }
            else
            {
                maskgraphics.drawCircle(arrow.x,arrow.y,80); 
            }
            
            
            if(scoreflag==1)
            {
                if(no11==1)
                {
                    maskbg.x=720;                  
                    maskgraphics.drawCircle(arrow2.x,arrow2.y,80); 
                }
                else
                {                   
                    maskgraphics.drawCircle(arrow2.x,arrow2.y,80); 
                }
            }
            else
            {
                maskgraphics.drawCircle(arrow2.x,arrow2.y,80); 
            }
        }
        else
        {
            
            if(scoreflag==1)
            {
                if(no11==1)
                {
                     maskbg.x=720;
                     maskgraphics.drawCircle(pointer.x,pointer.y,80); 
                }
                else
                {
                     maskgraphics.drawCircle(pointer.x,pointer.y,80); 
                }
            }
            else
            {
                maskgraphics.drawCircle(arrow.x,arrow.y,80);   
            }
        } 
},
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },

    correctAns:function(target)
    {  
        _this.sceneCount++;
        this.questionid = 1;
        _this.bubbleSound.play();
        if(timer1)
        {
            timer1.stop();
            timer1 = null;
        }

        var currentTime = window.timeSaveFunc();
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
        
       // absdsjsapi.saveAssessment(saveAsment);

       telInitializer.tele_saveAssessment(_this.questionid,"yes",AnsTimerCount,noofAttempts,_this.sceneCount);
        
        var index = fishbasket.indexOf(randomno);   
                if (index > -1) {
                fishbasket.splice(index, 1);
            }
        wrongflg=0;
        correctflg=0;
        
        _this.speakerbtn.inputEnabled=false;
        
        _this.clickSound.play();
        _this.celebrationSound.play();
        var starAnim = starsGroup.getChildAt(countcorrect);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();
        countcorrect++;
        fishGroup.destroy();
        fishGroup=this.add.group();
        fishGroup.enableBody = true;
        for(var m=0;m<randomno;m++)
        {
            st= fishGroup.create(randomx[m],randomy[m],'Game17_fishbubble');
            st.name = 'fish' + m;
            st.body.collideWorldBounds = true;
            st.scale.setTo(0.6,0.6);
            st.anchor.setTo(0.5,0.5);
            st.body.bounce.setTo(0.8, 0.8);
            st.animations.add('fishbubble');
            st.animations.play('fishbubble', 10, true);
            st.body.velocity.setTo(10 + 1 * 100,00);   
        }
      
        if(randomno==4)
        arrow2.destroy();
        
      
        arrow.events.onDragStart.removeAll();
        arrow.events.onDragStop.removeAll();
        arrow.destroy();
        arrowlast.destroy();
        overlappedflag=false;
        overlappedflag2=false;
        
        this.time.events.add(2000,function(){
		   tick.frameName='Symbol 14 copy instance 10000';
		   tick.events.onInputDown.removeAll();
           if(scoreflag==0){
               maskgraphics.y=arrow.x;
           }
            else{
                 maskgraphics.y=arrow.x;
            }
            fishGroup.destroy();
            if(no11<6)
            {
                yArray = [90,120,150,180,210,240,270,300,330,360,390];
                xArray = [50,110,170,230,290,350,410,470,530];
                //this.gotoFirstQuestion();
                this.getQuestion();
            }
            else
            {
                scoreflag=1;
                no11=0;
                countcorrect=0;
               // _this.stopVoice();
               // _this.bubbleSound.stop();
                this.state.start('unity1_7Score'); 
            }
           
        },this);
        
    },

   wrongAns:function(target)
    {
        wrongflg=0;
        correctflg=0;
        maskgraphics.y=arrow.x; 
         shake.shake(10, fishGroup);
        _this.clickSound.play();
        _this.wrongSound.play();
      this.time.events.add(1000, function(){
        arrow.destroy();
        arrowlast.destroy();
        if(randomno==4)
         arrow2.destroy();
        fishGroup.destroy();
        numbgrps=new Array();
        no11--;
        overlappedflag=false;
        overlappedflag2=false;
        tick.events.onInputDown.removeAll();
		tick.frameName='Symbol 14 copy instance 10000';
        yArray = [90,120,150,180,210,240,270,300,330,360,390];
        xArray = [50,110,170,230,290,350,410,470,530];

        
    
       

        this.gotoFirstQuestion();
           },this);
    },
    
    shutdown:function()
    {
         _this.bubbleSound.stop();
        _this.stopVoice();
        this.playQuestionSound=null;
        this.src = null;
        this.time.events.removeAll();
        _this.celebrationSound = null;
        _this.clickSound = null;
        _this.wrongSound = null;
        _this.snapSound = null;
        this.noofAttempts = null;
        this.AnsTimerCount = null;
        this.gameid=null;
        this.questionid=null;
        _this.sceneCount=null;
        
        this.currentTime =null;
        no11=null;
        randomno=null;
        count=null;
        _this.speakerbtn.events.onInputDown.removeAll();
        _this.speakerbtn= null;
        this.backbtn.events.onInputDown.removeAll();
        this.backbtn = null;
        fishGroup=null;
        xArray=null;
        yArray=null;
        s=null;
        st=null;
        correctflg=null;
        wrongflg=null;
        arrow.events.onInputDown.removeAll();
        arrow= null;
        if(arrow2 !=null){
            arrow2.events.onInputDown.removeAll();
            arrow2= null;
        }
        arrowlast.events.onInputDown.removeAll();
        arrowlast= null;
        if(arrowlast2 !=null){
            arrowlast2.events.onInputDown.removeAll();
            arrowlast2= null;
        }
        countcorrect=null;
        maskgraphics=null;
        randomx=null;
        randomy=null;
        overlappedflag=null;
        overlappedflag2=null;
        minutes=null;
        seconds=null;
        counterForTimer=null;
        timeDisplay=null;
        tick=null;
        correctflg=null;
        wrongflg=null;
        fishbasket=null;
        maskbg=null;
        bluebg=null;
        background=null;
        starsGroup=null;
        timer1=null;
    }
};