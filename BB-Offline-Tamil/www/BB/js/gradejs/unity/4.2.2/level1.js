Game.unity4_2_2level1=function(){};
var group2;
var graphics1,graphics2,graphics3,graphicsa,graphicsb,graphicsc,graphicsgrid,graphicsgrid2;
var groupvertical,grouphorizontal,grouphorizontal2;
//var enterTxt;
var shakeGroup;
var count;
var horiznum,vertinum;
var deletesarr;
var groupyellowleft,groupyellowright,groupblueleft,groupblueright,groupanim;
var AnimOpt1;
var grouptween;
Game.unity4_2_2level1.prototype={
     init:function(game)
    {
        _this = this;
        telInitializer.gameIdInit("unity_4_2_2",gradeSelected);
        
        _this.gameid = "4.2.2";
        
        _this.clickSound = _this.add.audio('ClickSound');
        _this.snapSound = _this.add.audio('snapSound');
        _this.wmusic = _this.add.audio('waudio');
        _this.cmusic = _this.add.audio('celebr');
        

    },

    preload:function(game){
        if(!window.grade2NSC1){

            window.grade2NSC1 = true;

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

        this.load.image('Level4_22_background',window.baseUrl+'assets/gradeAssets/4.2.2/bg.png');
        
        this.load.image('Level4_22_celeb', window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/c.png');
        this.load.image('Level4_22_practice',window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/practice.png');
        this.load.image('Level4_22_topicOutline',window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/topicOutline.png');
        this.load.image('Level4_22_timebg',window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/timebg.png');
        this.load.image('Level4_22_navBar',window.baseUrl+'assets/gradeAssets/4.2.2/commonAssets/navBar.png');
        //gameassets
        this.load.atlas('Level4_22_bluerod',window.baseUrl+'assets/gradeAssets/4.2.2/bluerod.png',window.baseUrl+'json/gradeJson/4.2.2/bluerod.json');
        this.load.image('Level4_22_yellowcube',window.baseUrl+'assets/gradeAssets/4.2.2/yellowcube.png');
        this.load.image('Level4_22_hand',window.baseUrl+'assets/gradeAssets/4.2.2/hand.png');
        this.load.atlas('Level4_22_box',window.baseUrl+'assets/gradeAssets/4.2.2/box.png',window.baseUrl+'json/gradeJson/4.2.2/box.json');
        //this.load.atlas('Level4_22_croc_greater',window.baseUrl+'assets/gradeAssets/4.2.2/croc_greater.png',window.baseUrl+'json/gradeJson/4.2.2/croc_greater.json');
        //this.load.atlas('Level4_22_croc_greater2','assets/gradeAssets/4.2.2/croc_greater2.png','json/gradeJson/4.2.2/croc_greater2.json');
        //this.load.atlas('Level4_22_croc_lessthan',window.baseUrl+'assets/gradeAssets/4.2.2/croc_lessthan.png',window.baseUrl+'json/gradeJson/4.2.2/croc_lessthan.json');
        //this.load.atlas('Level4_22_croc_lessthan2','assets/gradeAssets/4.2.2/croc_lessthan2.png','json/gradeJson/4.2.2/croc_lessthan2.json');
        //this.load.atlas('Level4_22_croc_watch',window.baseUrl+'assets/gradeAssets/4.2.2/croc_watch.png',window.baseUrl+'json/gradeJson/4.2.2/croc_watch.json');
        //this.load.atlas('Level4_22_croc_watch2',window.baseUrl+'assets/gradeAssets/4.2.2/croc_watch2.png',window.baseUrl+'json/gradeJson/4.2.2/croc_watch2.json');
        this.load.image('Level4_22_tray',window.baseUrl+'assets/gradeAssets/4.2.2/tray.png');
        this.load.image('Level4_22_singlebox',window.baseUrl+'assets/gradeAssets/4.2.2/singlebox.png');

        this.load.image('Level4_22_croc_greater',window.baseUrl+'assets/gradeAssets/4.2.2/Crocodile_GreateThan.png');

        this.load.image('Level4_22_croc_lessthan',window.baseUrl+'assets/gradeAssets/4.2.2/Crocodile_LessThan.png');

        this.load.image('Level4_22_croc_equal',window.baseUrl+'assets/gradeAssets/4.2.2/Crocodile_Equal.png');
       

    }

    },
    
	create:function(game){
        _this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();
        _this.sceneCount=0;
        grouptween=this.add.group();
        _this.amplify = null;
        _this.seconds = 0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.noofAttempts=0;
        _this.countcorrect=0;
        _this.counthand=0;
        _this.count1=0;
        _this.count2=0;
        _this.count3=0;
        _this.count4=0;
        _this.allowdragleft=0;
        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level4_22_background');
        _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
        _this.navBar.scale.setTo(1,1);
        _this.timebg = _this.add.sprite(305,6,'Level42C_timer');
            // _this.topicOutline = _this.add.sprite(70,5,'Level4_22_topicOutline');
             //_this.practice = _this.add.sprite(78,10,'Level4_22_practice');
             /*var numTxt2 = this.add.text(223,24, 'Multiplication');
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

       _this.speakerbtn = _this.add.sprite(600,6,'grade11_speaker');
      // _this.speakerbtn.inputEnabled = true;
        /*_this.speakerbtn.events.onInputDown.add(function()
        {
            
           
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);*/
        _this.no1=0;
        _this.dragcolleft=0;
        _this.dragcolright=0;
        _this.dragrowleft=0;
        _this.dragrowright=0;
        _this.yellowcub1=0;
        _this.yellowcub2=0;
        _this.dragcount=0;
        _this.firstno=0;
        _this.secondno=0;
        _this.dragcountleftq2=0;
        _this.dragcountrightq2=0;
        _this.dragcountleftq3=0;
        _this.dragcountrightq3=0;
        _this.yellowallowdrag=0;
        _this.q2=0;
        _this.q3=0;
        _this.randomarr=new Array();
        _this.flag=null;
        _this.rightans=null;
        _this.enabledcubes = 0;
        _this.generateStarsForTheScene(6);
        _this.getVoice();
        _this.getQuestion();
        
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
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
        groupyellowleft=new Array();
        groupyellowright=new Array();
        groupblueleft=new Array();
        groupblueright=new Array();
        groupanim=new Array();
        _this.qArrays = [1,2,3,4,5,6];
      //  _this.qArrays = _this.shuffle( _this.qArrays);
        
        //console.log("get Question "+_this.no1);
       // _this.getVoice();
        this.sceneCount++;
         _this.noofAttempts=0;
         _this.AnsTimerCount = 0;
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
        _this.speakerbtn.events.onInputDown.add(function(){
            this.clickSound.play();
            this.getVoice();
        },this);
        
        _this.questionid = 1;
        
        _this.singlebox = this.add.sprite(416,270,'Level4_22_box','Symbol 6 copy 7 instance 10000');
        _this.singlebox.scale.setTo(0.9,1.3);
		_this.singleboxanim = _this.singlebox.animations.add('box',['Symbol 6 copy 7 instance 10001','Symbol 6 copy 7 instance 10000']);
        _this.croclessthan = this.add.sprite(312,435,'Level4_22_croc_lessthan');
        _this.croclessthan.scale.setTo(0.55,0.65);
        //_this.croclessthananim = _this.croclessthan.animations.add('croc less than');
        _this.croclessthan.inputEnabled=true;
        _this.croclessthan.name="croclessthan";
        _this.croclessthan.input.enableDrag(true);
        _this.croclessthan.events.onDragStart.add(this.onDragStart, this);
        _this.croclessthan.events.onDragStop.add(this.onDragStop, this);
        _this.crocgreaterthan = this.add.sprite(547,435,'Level4_22_croc_greater');
        _this.crocgreaterthan.scale.setTo(0.55,0.65);
        //_this.crocgreateranim = _this.crocgreaterthan.animations.add('croc greater than');
        _this.crocgreaterthan.inputEnabled=true;
        _this.crocgreaterthan.name="crocgreaterthan";
        _this.crocgreaterthan.input.enableDrag(true);
        _this.crocgreaterthan.events.onDragStart.add(this.onDragStart, this);
        _this.crocgreaterthan.events.onDragStop.add(this.onDragStop, this);
        _this.croc_equal = this.add.sprite(429,435,'Level4_22_croc_equal');
        _this.croc_equal.scale.setTo(0.55,0.65);
       // _this.crocwatchanim=_this.croc_watch.animations.add('croc watch');
       // _this.crocwatchanim.play(10,true);
        _this.croc_equal.inputEnabled=true;
        _this.croc_equal.name="croc_equal";
        _this.croc_equal.input.enableDrag(true);
        _this.croc_equal.events.onDragStart.add(this.onDragStart, this);
        _this.croc_equal.events.onDragStop.add(this.onDragStop, this);
        
        switch(this.qArrays[_this.no1]){
            case 1 : 
            case 2 : this.question3();
                     break;
            case 3 : 
            case 4 : this.question2();
                     break;
            case 5 : this.question3();
                     break;
            case 6 : this.question1();
                     break;
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
    
    
    getVoice:function(){
        _this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/English/4.2.2.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Hindi/4.2.2.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Kannada/4.2.2.mp3");
        }
		else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Marathi/4.2.2.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Telugu/4.2.2.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Tamil/4.2.2.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Urdu/4.2.2.mp3");
                        }
        else if(window.languageSelected=="Gujarati")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.2.2/4.2.2.mp3");
                    }
        else{
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.2.2/Odiya/4.2.2.mp3");
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
            
            if(_this.amplify!=null)
            {
                _this.amplify.context.close();
                _this.amplify = null;
            }
		}

            
    },
    
    
    checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    
    question1:function(){
        _this.no1++;
        
        _this.trayleft = this.add.sprite(55,270,'Level4_22_tray');//60-
        _this.trayleft.scale.setTo(1.1,1.3);
        
        _this.trayright = this.add.sprite(555,270,'Level4_22_tray');//580
        _this.trayright.scale.setTo(1.1,1.3);
        
        _this.randomarr=[2,4,6,8,10];
        _this.randomarr=this.shuffle(_this.randomarr);
        
        _this.firstno = _this.randomarr[0];
        _this.secondno = _this.randomarr[0];
        _this.leftyellow=_this.randomarr[1];
        _this.rightyellow=_this.randomarr[1];
        for(var r=0;r<(_this.firstno/2);r++){
            for(var c=0;c<2;c++){
                _this.bluerod1 = this.add.sprite(92+(c*132)-(r*8),265+(r*16.5),'Level4_22_bluerod');
                _this.bluerod1.scale.setTo(0.9,1);
                AnimOpt1 =_this.bluerod1.animations.add('bluerod1',["Symbol 10 copy instance 10001","Symbol 10 copy instance 10000"]);
                AnimOpt1.play(2.8,true);
                _this.bluerod1.inputEnabled=true;
                _this.bluerod1.name="bluerodleft";
                _this.bluerod1.input.enableDrag(true);
                _this.bluerod1.value=_this.count1;
                _this.count1++;
                _this.bluerod1.events.onDragStart.add(this.onDragStart, this);
                _this.bluerod1.events.onDragStop.add(this.onDragStop, this);
                _this.bluerod2 = this.add.sprite(592+(c*132)-(r*8),265+(r*16.5),'Level4_22_bluerod');
                _this.bluerod2.scale.setTo(0.9,1);
                _this.bluerod2.name="bluerodright";
                _this.bluerod2.value=_this.count2;
                _this.count2++;
                _this.bluerod2.inputEnabled=false;
               
                groupblueleft.push(_this.bluerod1);
                groupblueright.push(_this.bluerod2);
                groupanim.push(AnimOpt1);
            }
        }
       
        for(var y1=0;y1<_this.leftyellow;y1++){//left yellow and right yello same
            _this.yellowcube1 = this.add.sprite(65+(y1*15),363,'Level4_22_yellowcube');//448
            _this.yellowcube1.scale.setTo(0.9,1); 
            _this.yellowcube1.name="yellowcube1";
            _this.yellowcube1.value=_this.count3;
            _this.count3++;
            groupyellowleft.push(_this.yellowcube1);
            _this.yellowcube2 = this.add.sprite(565+(y1*15),363,'Level4_22_yellowcube');
            _this.yellowcube2.scale.setTo(0.9,1); 
            _this.yellowcube2.name="yellowcube2";
            _this.yellowcube2.value=_this.count4;
            _this.count4++;
            groupyellowright.push(_this.yellowcube2);
            _this.yellowcube1.inputEnabled=false;
            _this.yellowcube2.inputEnabled=false;
        }
        
        //console.log("_this.dragcount latest=="+_this.dragcount);
        _this.blueallowdrag = _this.firstno;
        
        _this.rightans="croc_equal";
        
    },
    
    
    question2:function(){
        _this.no1++;
        _this.q2++;
        //console.log("q2------------------>"+_this.q2);
        
        _this.trayleft = this.add.sprite(55,270,'Level4_22_tray');//60-
        _this.trayleft.scale.setTo(1.1,1.3);
        
        _this.trayright = this.add.sprite(555,270,'Level4_22_tray');//580
        _this.trayright.scale.setTo(1.1,1.3);
        
        _this.randomarr=[2,3,4,5,6,7,8,9];
        _this.randomarr=this.shuffle(_this.randomarr);
        //console.log(" the _this.randomarr[0]=="+_this.randomarr[0]);
        
        _this.firstno = _this.randomarr[0];
        _this.secondno = _this.randomarr[0];
        
        
        _this.blueallowdrag = _this.firstno;
        _this.leftyellow=_this.randomarr[0];
        _this.rightyellow=_this.randomarr[1];
        //console.log("left yellow before"+_this.leftyellow);
        //console.log("right yellow before"+_this.rightyellow);
        if(_this.q2 == 1 || _this.q2 == 3){
            if(_this.leftyellow > _this.rightyellow){
                _this.leftyellow = _this.randomarr[1];
                _this.rightyellow = _this.randomarr[0];
                _this.yellowallowdrag = _this.leftyellow;
                _this.rightans = "croclessthan";
            }else{
                _this.yellowallowdrag = _this.leftyellow;
            _this.rightans = "croclessthan";
            }
        }
        else if(_this.q2 == 2){
             if(_this.leftyellow < _this.rightyellow){
                _this.leftyellow = _this.randomarr[1];
                _this.rightyellow = _this.randomarr[0];
                _this.yellowallowdrag = _this.rightyellow;
                _this.rightans = "crocgreaterthan";
             }else{
                 _this.yellowallowdrag = _this.rightyellow;
                _this.rightans = "crocgreaterthan";
             }
        }
       
        //console.log("right ans===="+_this.rightans);
        //console.log("left yellow after"+_this.leftyellow);
        //console.log("right yellow after"+_this.rightyellow);
        for(var r=0;r<(_this.firstno/2);r++){
            for(var c=0;c<2;c++){
                //_this.bluerod = this.add.sprite(105+(c*148)-(r*10),225+(r*16),'Level4_22_bluerod');
                _this.bluerod1 = this.add.sprite(92+(c*132)-(r*8),265+(r*16.5),'Level4_22_bluerod');//128+(c*118)-(r*8),348+(r*12.5)
                 AnimOpt1 =_this.bluerod1.animations.add('bluerod1',["Symbol 10 copy instance 10001","Symbol 10 copy instance 10000"]);
                 AnimOpt1.play(2.8,true);
                 
                _this.bluerod1.scale.setTo(0.9,1);
                _this.bluerod1.inputEnabled=true;
                _this.bluerod1.name="bluerodleft";
                _this.bluerod1.value=_this.count1;
                _this.count1++;
                _this.bluerod1.input.enableDrag(true);
                _this.bluerod1.events.onDragStart.add(this.onDragStart, this);
                _this.bluerod1.events.onDragStop.add(this.onDragStop, this);
                _this.bluerod2 = this.add.sprite(592+(c*132)-(r*8),265+(r*16.5),'Level4_22_bluerod');//598 356
                _this.bluerod2.scale.setTo(0.9,1);
                _this.bluerod2.value=_this.count2;
                _this.count2++;
                _this.bluerod2.name="bluerodright";
                _this.bluerod2.inputEnabled=false;
                
                groupblueleft.push(_this.bluerod1);
                groupblueright.push(_this.bluerod2);
                groupanim.push(AnimOpt1);
            }
        }
        
        for(var y1=0;y1<_this.leftyellow;y1++){
            _this.yellowcube1 = this.add.sprite(65+(y1*15),363,'Level4_22_yellowcube');//448
            _this.yellowcube1.scale.setTo(0.9,1); 
            _this.yellowcube1.name="yellowcube1";
            _this.yellowcube1.inputEnabled=false;
            _this.yellowcube1.value=_this.count3;
            _this.count3++;
         //   _this.yellowcube1.inputEnabled=true;
          //  _this.yellowcube1.input.enableDrag(true);
          //  _this.yellowcube1.events.onDragStart.add(this.onDragStart, this);
          //  _this.yellowcube1.events.onDragStop.add(this.onDragStop, this);
            groupyellowleft.push(_this.yellowcube1);
        }
        for(var y1=0;y1<_this.rightyellow;y1++){
            _this.yellowcube2 = this.add.sprite(565+(y1*15),363,'Level4_22_yellowcube');
            _this.yellowcube2.scale.setTo(0.9,1); 
            _this.yellowcube2.name="yellowcube2";
            _this.yellowcube2.inputEnabled=false;
            _this.yellowcube2.value=_this.count4;
            _this.count4++;
           // _this.yellowcube2.inputEnabled=true;
           // _this.yellowcube2.input.enableDrag(true);
          //  _this.yellowcube2.events.onDragStart.add(this.onDragStart, this);
          //  _this.yellowcube2.events.onDragStop.add(this.onDragStop, this);
            groupyellowright.push(_this.yellowcube2);
        }
        
        //console.log("_this.dragcount latest=="+_this.dragcount);
        
    },
    
    
    question3:function(){
        grouptween=this.add.group();
        _this.flag="question3";
        _this.no1++;
        _this.q3++;
        _this.trayleft = this.add.sprite(55,270,'Level4_22_tray');//90,355
        _this.trayleft.scale.setTo(1.1,1.3);
        
      //  _this.boxoverlap = this.add.sprite(92,95,'Level4_22_singlebox');//90,355
       // _this.boxoverlap.scale.setTo(1.1,1.3);
        
        _this.trayright = this.add.sprite(555,270,'Level4_22_tray');//555,355
        _this.trayright.scale.setTo(1.1,1.3);//1,0.90
        
        _this.randomarr=[2,4,6,8,10];
        _this.randomarr=this.shuffle(_this.randomarr);
        
        _this.firstno = _this.randomarr[0];
        _this.secondno = _this.randomarr[1];
        _this.leftyellow= _this.randomarr[2];
        _this.rightyellow= _this.randomarr[2];
        
        if(_this.q3 == 1){
           // _this.allowdragleft = _this.firstno;
            if(_this.firstno > _this.secondno){
                _this.firstno = _this.randomarr[1];
                _this.secondno = _this.randomarr[0];
                _this.blueallowdrag = _this.firstno;
                _this.rightans = "croclessthan";
            }else{
                _this.blueallowdrag = _this.firstno;
                _this.rightans = "croclessthan";
            }
        }else if(_this.q3 == 2){
            //_this.allowdragleft = _this.secondno;
            if(_this.firstno < _this.secondno){
                _this.firstno = _this.randomarr[1];
                _this.secondno = _this.randomarr[0];
                _this.blueallowdrag = _this.secondno;
                _this.rightans = "crocgreaterthan";
            }else{
                _this.blueallowdrag = _this.secondno;
                _this.rightans = "crocgreaterthan";
            }
        }else if(_this.q3 == 3){
          //  _this.allowdragleft = _this.firstno;
            if(_this.firstno < _this.secondno){
                _this.blueallowdrag = _this.firstno;
                _this.rightans = "croclessthan";
            }else{
                _this.blueallowdrag = _this.secondno;
                _this.rightans = "crocgreaterthan";
            }
        }
        
        
        //console.log("left yellow after"+_this.leftyellow);
        //console.log("right yellow after"+_this.rightyellow);
        
        for(var r=0;r<(_this.firstno/2);r++){
            for(var c=0;c<2;c++){
                
                //console.log("c is==="+c);
                //_this.bluerod = this.add.sprite(105+(c*148)-(r*10),225+(r*16),'Level4_22_bluerod');
                _this.bluerod1 = this.add.sprite(92+(c*132)-(r*8),265+(r*16.5),'Level4_22_bluerod');//128,348
                _this.bluerod1.scale.setTo(0.9,1);//0.80,0.80
                
                AnimOpt1 =_this.bluerod1.animations.add('bluerod1',["Symbol 10 copy instance 10001","Symbol 10 copy instance 10000"]);
                AnimOpt1.play(2.8,true);
                
                if(r>=(_this.secondno/2)){
                    _this.bluerod1.inputEnabled=false;
                    //added
                    
                    
                    
                    
                }else{
                    _this.bluerod1.inputEnabled=true;
                    _this.bluerod1.input.enableDrag(true);
                    _this.bluerod1.events.onDragStart.add(this.onDragStart, this);
                    _this.bluerod1.events.onDragStop.add(this.onDragStop, this);
                }
                
                _this.bluerod1.name="bluerodleft";
                _this.bluerod1.value=_this.count1;
                _this.count1++;
                groupblueleft.push(_this.bluerod1);
                
                groupanim.push(AnimOpt1);
                
                if(r==0 && c==0 && _this.q3 == 1){
                    //console.log("only once tween");
                    _this.hand = this.add.sprite(15,23,'Level4_22_hand');
                    _this.hand.scale.setTo(0.75,0.75);
                    _this.hand.scale.x*=-1;
                    _this.bluerod1.addChild(_this.hand);
                    var tween = this.add.tween(_this.bluerod1);    
                    tween.to({ y:95 }, 0, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                        tween.to({ y:265 }, 0, 'Linear', true, 0);
                        this.time.events.add(2500,function(){
                            _this.hand.alpha=0;
                        },this);    
                    tween.onComplete.removeAll();
                    },this);
                    
                     
                   //   },this);
                        
                      //  tween.onComplete.add(function(){
                         //   tween.onComplete.removeAll();
                       // },this);
                     
                   // },this);
                    
                }
                
            }
        }
        
        for(var r=0;r<(_this.secondno/2);r++){
            for(var c=0;c<2;c++){
                //_this.bluerod = this.add.sprite(105+(c*148)-(r*10),225+(r*16),'Level4_22_bluerod');
                
                _this.bluerod2 = this.add.sprite(592+(c*132)-(r*8),265+(r*16.5),'Level4_22_bluerod');//592,349 r*12.5  c*118-r*8
                _this.bluerod2.scale.setTo(0.9,1);
                _this.bluerod2.name="bluerodright";
                _this.bluerod2.inputEnabled=false;
                _this.bluerod2.value=_this.count2;
                _this.count2++;
                groupblueright.push(_this.bluerod2);
                
                //_this.bluerod2.input.enableDrag(true);
                //_this.bluerod2.events.onDragStart.add(this.onDragStart, this);
                //_this.bluerod2.events.onDragStop.add(this.onDragStop, this);
            }
        }
        
        
        for(var y1=0;y1<_this.leftyellow;y1++){
            _this.yellowcube1 = this.add.sprite(65+(y1*15),363,'Level4_22_yellowcube');//448 y1*15 100
            _this.yellowcube1.scale.setTo(0.9,1); 
            _this.yellowcube1.name="yellowcube1";
            _this.yellowcube1.value=_this.count3;
            _this.count3++;
            _this.yellowcube1.inputEnabled=false;
            groupyellowleft.push(_this.yellowcube1);
            _this.yellowcube2 = this.add.sprite(565+(y1*15),363,'Level4_22_yellowcube');//565
            _this.yellowcube2.scale.setTo(0.9,1); 
            _this.yellowcube2.value=_this.count4;
            _this.count4++;
            _this.yellowcube2.name="yellowcube2";
            groupyellowright.push(_this.yellowcube2);
            _this.yellowcube2.inputEnabled=false;
        }
       
        
        //console.log("_this.dragcount latest=="+_this.dragcount);
        
        
        
        
    },
    
    correctAns:function(){
        //console.log("correct");
       // _this.correctflag=0;
        _this.singlebox.x+=5;
        _this.singlebox.y+=4;
        _this.singlebox.width-=5;
        _this.singlebox.height-=5;
        _this.singleboxanim.play(4,true);
        _this.wrongflag=0;
        _this.cmusic.play();
        
        if(_this.timer1!=null)
        {
            _this.timer1.stop();
            _this.timer1 = null;
        }

        if(_this.AnsTimerCount<=0||_this.AnsTimerCount==null||_this.AnsTimerCount==undefined)
            _this.AnsTimerCount=1;
        
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
        _this.count1=0;
        _this.count2=0;
        _this.count3=0;
        _this.count4=0;
        _this.counthand=0;
        _this.dragcolleft=0;
        _this.dragcolright=0;
        _this.dragrowleft=0;
        _this.dragrowright=0;
        _this.yellowcub1=0;
        _this.yellowcub2=0;
        _this.dragcount=0;
        _this.firstno=0;
        _this.secondno=0;
        _this.dragcountleftq2=0;
        _this.dragcountrightq2=0;
        _this.dragcountleftq3=0;
        _this.dragcountrightq3=0;
        _this.yellowallowdrag=0;
        _this.flag=null;
        _this.rightans=null;
        _this.enabledcubes = 0;
        var starAnim = _this.starsGroup.getChildAt(_this.countcorrect);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();
        _this.countcorrect++;

        this.time.events.add(2000,function(){
            groupblueleft.forEach(function (bl) { bl.destroy(); });
            groupblueright.forEach(function (br) { br.destroy(); });
            groupyellowleft.forEach(function (yl) { yl.destroy(); });
            groupyellowright.forEach(function (yr) { yr.destroy(); });
            
            groupanim.forEach(function (anim1) { anim1.stop(); });
            _this.trayleft.destroy();
            _this.trayright.destroy();
            _this.singlebox.destroy();
            _this.croc_equal.destroy();
            _this.crocgreaterthan.destroy();
            _this.croclessthan.destroy();
            if(_this.no1<6)
            {
                this.getQuestion(); 
            }
            else{
                _this.no1=0;
               // this.stopVoice();	
                this.state.start('unity4_2_2Score'); 
            }
        },this);
    },
    
    wrongAns:function(target){
        //console.log("wrong");
        _this.shake.shake(10,target);
        _this.wrongflag++;
        _this.wmusic.play();
        
        
     
    },
    
    
    onDragStart:function(target){
        //target.scale.setTo(0.9,1.12);
        if(target.name=="bluerodleft")
        target.frame=0;
        _this.clickSound.play();
        //console.log("startdrag"+target.name);
        _this.vx=target.x;
        _this.vy=target.y;
     //   target.bringToTop(_this.gridarea);
        
    },
    
    onDragStop:function(target){//_this.Level4_22_gridjointvadd  groupvertical
        
        _this.snapSound.play();
        
        //console.log("target name==="+target.name);
        if(target.name=="bluerodleft" && _this.flag==null){
            target.inputEnabled=false;
            //_this.bluerod1.animations.stop();
             //console.log("target frame==="+target.frame);
            target.frame=0;
            groupblueleft.forEach(function (fr) { fr.frame=0; });
           groupanim.forEach(function (anim) { anim.stop(); });
            target.scale.setTo(0.98,1.2);
            _this.dragcount++;
            if(_this.dragcolleft >= 2){
                _this.dragrowleft++;
                _this.dragcolleft=0;
            }
             target.x = 75+(_this.dragcolleft*142)-(_this.dragrowleft*8);
             target.y = 95+(_this.dragrowleft*19.8);//225
            
            groupblueright[target.value].scale.setTo(0.98,1.2);
            groupblueright[target.value].x = 578+(_this.dragcolleft*142)-(_this.dragrowleft*8);
            groupblueright[target.value].y = 95+(_this.dragrowleft*19.8);
            //target.x = 75+(_this.dragcolleft*142)-(_this.dragrowleft*8);
         //       target.y = 95+(_this.dragrowleft*19.8);
            _this.dragcolleft++;
        }else if(target.name=="bluerodright" && _this.flag==null){
            target.inputEnabled=false;
            target.scale.setTo(0.98,1.2);
            _this.dragcount++;
            if(_this.dragcolright >= 2){
                _this.dragrowright++;
                _this.dragcolright=0;
            }
            target.x = 578+(_this.dragcolright*142)-(_this.dragrowright*8);
            target.y = 95+(_this.dragrowright*19.8);
            //target.x = 598+(_this.dragcolright*125)-(_this.dragrowright*8);
           // target.y = 225+(_this.dragrowright*14.8);
            //console.log("target x==="+target.x);
            _this.dragcolright++;
        }else if(target.name=="yellowcube1" && _this.flag=="question3"){
            target.inputEnabled=false;
            target.scale.setTo(0.98,1.2);
            target.x = 145+(_this.yellowcub1*15);
            target.y = 220;
            groupyellowright[target.value].scale.setTo(0.98,1.2);
            groupyellowright[target.value].x=640+(_this.yellowcub1*15);
            groupyellowright[target.value].y=220;
            _this.yellowcub1++;
            //console.log("yellow1 target x==="+target.x);
            //console.log("yellow1 target y==="+target.y);
        }
        else if(target.name=="yellowcube2" && _this.flag=="question3"){
            target.inputEnabled=false;
            target.scale.setTo(0.98,1.2);
            target.x = 640+(_this.yellowcub2*15);
            target.y = 220;
            _this.yellowcub2++;
            //console.log("yellow2 target y==="+target.y);
        }
        else if(target.name=="yellowcube1" && _this.flag==null){
            target.inputEnabled=false;
            _this.dragcountleftq2++;
            if(_this.dragcountleftq2<=(_this.yellowallowdrag) || _this.leftyellow == _this.rightyellow){
                target.scale.setTo(0.98,1.2);
                target.x = 145+(_this.yellowcub1*15);
                target.y = 220;
                groupyellowright[target.value].scale.setTo(0.98,1.2);
                groupyellowright[target.value].x=640+(_this.yellowcub1*15);
                groupyellowright[target.value].y=220;
                _this.yellowcub1++;
            }else{
                target.x = _this.vx;
                target.y = _this.vy;
                target.inputEnabled=false;
            }
        }
        else if(target.name=="yellowcube2" && _this.flag==null){
            target.inputEnabled=false;
            _this.dragcountrightq2++;
            if(_this.dragcountrightq2<=(_this.yellowallowdrag) || _this.leftyellow == _this.rightyellow){
                target.scale.setTo(0.98,1.2);
                target.x = 640+(_this.yellowcub2*15);
                target.y = 220;
                _this.yellowcub2++;
            }else{
                target.x = _this.vx;
                target.y = _this.vy;
                target.inputEnabled=false;
            }
        }
        else if(target.name=="bluerodleft" && _this.flag=="question3"){
            target.inputEnabled=false;
            _this.dragcountleftq3++;
            _this.dragcountrightq3++;
            target.frame=0;
            groupblueleft.forEach(function (fr) { fr.frame=0; });
            groupanim.forEach(function (anim) { anim.stop(); });
            if(_this.dragcountleftq3<=_this.blueallowdrag){
                target.scale.setTo(0.98,1.2);
                if(_this.dragcolleft >= 2){
                    _this.dragrowleft++;
                    _this.dragcolleft=0;
                }
                target.x = 75+(_this.dragcolleft*142)-(_this.dragrowleft*8);
                target.y = 95+(_this.dragrowleft*19.8);
                
                //new line added _this.bluerod2
                groupblueright[target.value].scale.setTo(0.98,1.2);
                groupblueright[target.value].x = 578+(_this.dragcolleft*142)-(_this.dragrowleft*8);
                groupblueright[target.value].y = 95+(_this.dragrowleft*19.8);
                
                //new line end
                _this.dragcolleft++;
               /* if(_this.dragcountleftq3==_this.blueallowdrag){
                    for(var gr=_this.dragcountrightq3;gr<_this.secondno;gr++){
                        groupblueright[gr].inputEnabled=true;
                        groupblueright[gr].input.enableDrag(true);
                        groupblueright[gr].events.onDragStart.add(this.onDragStart, this);
                        groupblueright[gr].events.onDragStop.add(this.onDragStop, this);
                    }
                }*/
                
            }else{
                
                    
                //_this.bluerod2.input.enableDrag(true);
                //_this.bluerod2.events.onDragStart.add(this.onDragStart, this);
                //_this.bluerod2.events.onDragStop.add(this.onDragStop, this);
                target.x = _this.vx;
                target.y = _this.vy;
                target.inputEnabled=false;
            }
            
        }else if(target.name=="bluerodright" && _this.flag=="question3"){
            target.inputEnabled=false;
            _this.dragcountrightq3++;
            //console.log("right blue drag==="+_this.dragcountrightq3);
            if(_this.dragcountrightq3>_this.blueallowdrag){
                //console.log("in else right");
                target.x = _this.vx;
                target.y = _this.vy;
                target.inputEnabled=false;
            }
        }else if(this.checkOverlap(target,_this.singlebox)){
            _this.noofAttempts++;
            _this.snapSound.play();
            //console.log("overlapped=========="+_this.rightans);
            //console.log("overlapped target=========="+target.name);
            if(target.name==_this.rightans){
                _this.singlebox.frame = 1;
                //console.log("correct ans here");
                target.scale.setTo(0.60,0.85);
                target.x=_this.singlebox.x+9;
                target.y=_this.singlebox.y+11;
                if(target.name=="croclessthan"){
                  //  _this.croclessthananim.play(5,true);
                    target.inputEnabled=false;
                }else if(target.name=="crocgreaterthan"){
                   // _this.crocgreateranim.play(5,true);
                    target.inputEnabled=false;
                }else if(target.name=="croc_equal"){
                    target.inputEnabled=false;
                    _this.croc_equal.destroy();
                    _this.croc_equal = this.add.sprite(target.x,target.y,'Level4_22_croc_equal');
                    _this.croc_equal.scale.setTo(0.60,0.85);
                   // _this.crocwatchanim=_this.croc_watch.animations.add('croc watch');
                   // _this.crocwatchanim.play(8,true); 
                }
                    
                this.correctAns();
            }else{
               // target.scale.setTo(0.95,1.2);
                //console.log("wrong ans here");
                if(target.name=="croclessthan"){
                    target.x=312;
                    target.y=435;
                }else if(target.name=="crocgreaterthan"){
                    target.x=547;
                    target.y=435;
                }else if(target.name=="croc_equal"){
                    target.x=429;
                    target.y=435;
                }
                this.wrongAns(target);
            }
        }else{
           // target.scale.setTo(0.95,1.2);
                //console.log("wrong ans here");
                if(target.name=="croclessthan"){
                    target.x=312;
                    target.y=435;
                }else if(target.name=="crocgreaterthan"){
                    target.x=547;
                    target.y=435;
                }else if(target.name=="croc_equal"){
                    target.x=429;
                    target.y=435;
                }
                this.wrongAns(target);
        }
        
        //console.log(" drag count in drag stop=="+_this.dragcount);
        //console.log("first no=="+_this.firstno);
        //console.log("second no=="+_this.secondno);
        /*if(_this.leftyellow > _this.rightyellow && _this.flag==null){
            _this.loopyellow = _this.rightyellow;
        }else if(_this.leftyellow < _this.rightyellow && _this.flag==null){
            _this.loopyellow = _this.leftyellow;
        }else if(_this.leftyellow == _this.rightyellow && _this.flag==null){
            _this.loopyellow = _this.leftyellow;//any one
        }*/
        if(_this.leftyellow < _this.rightyellow && _this.flag==null){
            _this.loopyellow = _this.rightyellow;
        }else if(_this.leftyellow > _this.rightyellow && _this.flag==null){
            _this.loopyellow = _this.leftyellow;
        }else if(_this.leftyellow == _this.rightyellow && _this.flag==null){
            _this.loopyellow = _this.leftyellow;//any one
        }
        
        if(_this.flag=="question3" && _this.counthand==0){
            if((_this.dragcountleftq3 + _this.dragcountrightq3) == (_this.blueallowdrag * 2)){
                //console.log("i am here now"+_this.secondno);
                
                //console.log("second no=="+_this.leftyellow);
                //both leftyellow and rightyellow same
                    
                    //console.log("yd1===="+yd1);
                    //console.log("q3===="+_this.q3);
                    // || (yd1==(_this.secondno-1) && _this.q3 > 1)){
                        for(var yd1=0;yd1<_this.leftyellow;yd1++){
                            _this.counthand++;
                        if((_this.counthand==1 && _this.q3 == 1)){
                            //console.log("first");
                            
                          /*  if(yd1==_this.secondno-1 && _this.q3 > 1){
                                
                                _this.hand.destroy();
                                _this.hand2 = this.add.sprite(15,23,'Level4_22_hand');
                                _this.hand2.scale.setTo(0.75,0.75);
                                _this.hand2.scale.x*=-1;
                             //   _this.hand.x=10;
                              //  _this.hand.y = 23;
                             //   _this.hand.alpha=1;
                                groupyellowleft[0].addChild(_this.hand2);
                                var tween = this.add.tween(groupyellowleft[0]);
                                tween.to({ y:220,x:145 }, 0, 'Linear', true, 0);
                            tween.onComplete.add(function(){
                            tween.to({ y:363,x:65 }, 0, 'Linear', true, 0);
                            this.time.events.add(2500,function(){
                                _this.hand2.alpha=0;
                            },this); 
                            tween.onComplete.removeAll();
                        },this);
                            }else{*/
                                _this.hand.x=10;
                                _this.hand.y = 23;
                                _this.hand.alpha=1;
                                groupyellowleft[0].addChild(_this.hand);
                                var tween = this.add.tween(groupyellowleft[0]);
                                tween.to({ y:220,x:145 }, 0, 'Linear', true, 0);
                            tween.onComplete.add(function(){
                            tween.to({ y:363,x:65 }, 0, 'Linear', true, 0);
                            this.time.events.add(2500,function(){
                                _this.hand.alpha=0;
                            },this); 
                            tween.onComplete.removeAll();
                        },this);
                          //  }
                            
                            
                            
                            
                    
                    
                        }//end if count
                            if(yd1>=(_this.rightyellow)){
                        groupyellowleft[yd1].inputEnabled=false;
                    }else{
                        groupyellowleft[yd1].inputEnabled=true;
                        groupyellowleft[yd1].input.enableDrag(true);
                      //  groupyellowright[yd1].inputEnabled=true;
                       // groupyellowright[yd1].input.enableDrag(true);
                        groupyellowleft[yd1].events.onDragStart.add(this.onDragStart, this);
                        groupyellowleft[yd1].events.onDragStop.add(this.onDragStop, this);
                      //  groupyellowright[yd1].events.onDragStart.add(this.onDragStart, this);
                      //  groupyellowright[yd1].events.onDragStop.add(this.onDragStop, this);
                    }
            }//end for 
             if(_this.q3 > 1){
                for(var yd2=0;yd2<_this.secondno;yd2++){
                    if(yd2==_this.secondno-1){
                        _this.hand.destroy();
                        _this.hand2 = this.add.sprite(15,23,'Level4_22_hand');
                        _this.hand2.scale.setTo(0.75,0.75);
                        _this.hand2.scale.x*=-1;
                             //   _this.hand.x=10;
                              //  _this.hand.y = 23;
                             //   _this.hand.alpha=1;
                        groupyellowleft[0].addChild(_this.hand2);
                        var tweens = this.add.tween(groupyellowleft[0]);
                        tweens.to({ y:220,x:145 }, 0, 'Linear', true, 0);
                        tweens.onComplete.add(function(){
                        tweens.to({ y:363,x:65 }, 0, 'Linear', true, 0);
                        this.time.events.add(2500,function(){
                            _this.hand2.alpha=0;
                        },this); 
                        tweens.onComplete.removeAll();
                       },this);
                    }
                   
                }
            }
            }
        }
        if(_this.flag==null && _this.enabledcubes==0){
            //console.log("_this.blueallowdrag ==============="+_this.blueallowdrag);
            //console.log("sum========================"+(_this.dragcount));
         //   if(((_this.dragcountleftq2 + _this.dragcountrightq2) == (_this.blueallowdrag * 2)) || _this.leftyellow == _this.rightyellow){
               if((_this.dragcount == (_this.blueallowdrag))){
                   _this.enabledcubes = 1;
              //  //console.log()
                for(var yd1=0;yd1<_this.leftyellow;yd1++){
                    if(yd1>=(_this.rightyellow)){
                        groupyellowleft[yd1].inputEnabled=false;
                    }else{
                        groupyellowleft[yd1].inputEnabled=true;
                        groupyellowleft[yd1].input.enableDrag(true);
                        groupyellowleft[yd1].events.onDragStart.add(this.onDragStart, this);
                        groupyellowleft[yd1].events.onDragStop.add(this.onDragStop, this);
                    }
                }
            /*for(var yd1=0;yd1<_this.rightyellow;yd1++){
                    groupyellowright[yd1].inputEnabled=true;
                    groupyellowright[yd1].input.enableDrag(true);
                    groupyellowright[yd1].events.onDragStart.add(this.onDragStart, this);
                    groupyellowright[yd1].events.onDragStop.add(this.onDragStop, this);
                }*/
                
            }
        }
        
        
        
        
        //_this.bluerod = this.add.sprite(105+(c*148)-(r*10),225+(r*16),'Level4_22_bluerod');
       // _this.bluerod2 = this.add.sprite(598+(c*118)-(r*8),356+(r*12),'Level4_22_bluerod');
    }

    
   
    

};