Game.grade3_1level1=function(){};


Game.grade3_1level1.prototype={

    init:function(game)
    {
        _this = this;
        
        /*_this.gameid = "3.1";
        
        _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
        _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);*/

        telInitializer.gameIdInit("weight3_1",gradeSelected);
        

    },

    preload:function(game){
        if(!window.grade1MW1){

            window.grade1MW1 = true;

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

        _this.load.image('Level31_bg1',window.baseUrl+'assets/gradeAssets/3.1/bg1.png');
        _this.load.image('Level31_bg3',window.baseUrl+'assets/gradeAssets/3.1/bg3.png');
       // _this.load.image('Level31_tittleBaar',window.baseUrl+'assets/gradeAssets/3.1/tittleBaar.png');
       // _this.load.atlas('Level31_replay',window.baseUrl+'assets/gradeAssets/3.1/reply.png' ,window.baseUrl+'json/gradeJson/3.1/reply.json');
       // _this.load.atlas('Level31_btn',window.baseUrl+'assets/gradeAssets/3.1/btn.png' ,window.baseUrl+'json/gradeJson/3.1/btn.json');
       // _this.load.atlas('Level31_backbtn',window.baseUrl+'assets/gradeAssets/3.1/backbtn.png' ,window.baseUrl+'json/gradeJson/3.1/backbtn.json');
       // _this.load.atlas('Level31_speaker',window.baseUrl+'assets/gradeAssets/3.1/speaker.png' ,window.baseUrl+'json/gradeJson/3.1/speaker.json');
       // _this.load.atlas('Level31_starAnim',window.baseUrl+'assets/gradeAssets/3.1/starAnim.png',window.baseUrl+'json/gradeJson/3.1/starAnim.json');
        _this.load.image('Level31_sh1',window.baseUrl+'assets/gradeAssets/3.1/sh1.png');
        _this.load.image('Level31_sh2',window.baseUrl+'assets/gradeAssets/3.1/sh2.png');
        _this.load.image('Level31_sh3',window.baseUrl+'assets/gradeAssets/3.1/sh3.png');
        _this.load.image('Level31_sh4',window.baseUrl+'assets/gradeAssets/3.1/sh4.png');
        _this.load.image('Level31_sh5',window.baseUrl+'assets/gradeAssets/3.1/sh5.png');
        _this.load.image('Level31_sh6',window.baseUrl+'assets/gradeAssets/3.1/sh6.png');
        _this.load.image('Level31_sh7',window.baseUrl+'assets/gradeAssets/3.1/sh7.png');
        _this.load.image('Level31_sh8',window.baseUrl+'assets/gradeAssets/3.1/sh8.png');
        _this.load.image('Level31_sh9',window.baseUrl+'assets/gradeAssets/3.1/sh9.png');
        _this.load.image('Level31_sh10',window.baseUrl+'assets/gradeAssets/3.1/sh10.png');
        _this.load.image('Level31_sh11',window.baseUrl+'assets/gradeAssets/3.1/sh11.png');
        //_this.load.image('Level31_sh12',window.baseUrl+'assets/gradeAssets/3.1/sh12.png');
        _this.load.image('Level31_sh13',window.baseUrl+'assets/gradeAssets/3.1/sh13.png');
        _this.load.image('Level31_sh14',window.baseUrl+'assets/gradeAssets/3.1/sh14.png');
        _this.load.image('Level31_sh15',window.baseUrl+'assets/gradeAssets/3.1/sh15.png');
        _this.load.image('Level31_sh16',window.baseUrl+'assets/gradeAssets/3.1/sh16.png');
        _this.load.image('Level31_sh17',window.baseUrl+'assets/gradeAssets/3.1/sh17.png');
        _this.load.image('Level31_sh18',window.baseUrl+'assets/gradeAssets/3.1/sh18.png');
        _this.load.image('Level31_sh19',window.baseUrl+'assets/gradeAssets/3.1/sh19.png');
        _this.load.image('Level31_sh20',window.baseUrl+'assets/gradeAssets/3.1/sh20.png');
        _this.load.image('Level31_sh21',window.baseUrl+'assets/gradeAssets/3.1/sh21.png');
        _this.load.image('Level31_sh22',window.baseUrl+'assets/gradeAssets/3.1/sh22.png');
        _this.load.image('Level31_sh23',window.baseUrl+'assets/gradeAssets/3.1/sh23.png');
        _this.load.image('Level31_sh24',window.baseUrl+'assets/gradeAssets/3.1/sh24.png');
        
        _this.load.atlas('Level31_watermelon',window.baseUrl+'assets/gradeAssets/3.1/watermelon.png' ,window.baseUrl+'json/gradeJson/3.1/watermelon.json');
        _this.load.atlas('Level31_cherry',window.baseUrl+'assets/gradeAssets/3.1/cherry.png' ,window.baseUrl+'json/gradeJson/3.1/cherry.json');

        _this.load.atlas('Level31_leaf1',window.baseUrl+'assets/gradeAssets/3.1/leaf1.png' ,window.baseUrl+'json/gradeJson/3.1/leaf1.json');
        _this.load.atlas('Level31_bottle1',window.baseUrl+'assets/gradeAssets/3.1/bottle1.png' ,window.baseUrl+'json/gradeJson/3.1/bottle1.json');

        _this.load.atlas('Level31_crow1',window.baseUrl+'assets/gradeAssets/3.1/crow1.png' ,window.baseUrl+'json/gradeJson/3.1/crow1.json');
        _this.load.atlas('Level31_lizard1',window.baseUrl+'assets/gradeAssets/3.1/lizard1.png' ,window.baseUrl+'json/gradeJson/3.1/lizard1.json');
        
        _this.load.atlas('Level31_car1',window.baseUrl+'assets/gradeAssets/3.1/car1.png' ,window.baseUrl+'json/gradeJson/3.1/car1.json');
        _this.load.atlas('Level31_chair1',window.baseUrl+'assets/gradeAssets/3.1/chair1.png' ,window.baseUrl+'json/gradeJson/3.1/chair1.json');
         
        _this.load.atlas('Level31_dog1',window.baseUrl+'assets/gradeAssets/3.1/dog1.png' ,window.baseUrl+'json/gradeJson/3.1/dog1.json');
        _this.load.atlas('Level31_bird1',window.baseUrl+'assets/gradeAssets/3.1/bird1.png' ,window.baseUrl+'json/gradeJson/3.1/bird1.json');
        
        _this.load.atlas('Level31_bee1',window.baseUrl+'assets/gradeAssets/3.1/bee1.png' ,window.baseUrl+'json/gradeJson/3.1/bee1.json');
        _this.load.atlas('Level31_elephant1',window.baseUrl+'assets/gradeAssets/3.1/elephant1.png' ,window.baseUrl+'json/gradeJson/3.1/elephant1.json');
        
        _this.load.atlas('Level31_bottle2',window.baseUrl+'assets/gradeAssets/3.1/bottle2.png' ,window.baseUrl+'json/gradeJson/3.1/bottle2.json');
        _this.load.atlas('Level31_key1',window.baseUrl+'assets/gradeAssets/3.1/key1.png' ,window.baseUrl+'json/gradeJson/3.1/key1.json');
        
        _this.load.atlas('Level31_suitcase',window.baseUrl+'assets/gradeAssets/3.1/suitcase.png' ,window.baseUrl+'json/gradeJson/3.1/suitcase.json');
        _this.load.atlas('Level31_spanner',window.baseUrl+'assets/gradeAssets/3.1/spanner.png' ,window.baseUrl+'json/gradeJson/3.1/spanner.json');
        
        _this.load.atlas('Level31_scooter1',window.baseUrl+'assets/gradeAssets/3.1/scooter1.png' ,window.baseUrl+'json/gradeJson/3.1/scooter1.json');
        _this.load.atlas('Level31_bulb1',window.baseUrl+'assets/gradeAssets/3.1/bulb1.png' ,window.baseUrl+'json/gradeJson/3.1/bulb1.json');
        
        _this.load.atlas('Level31_tree1',window.baseUrl+'assets/gradeAssets/3.1/tree1.png' ,window.baseUrl+'json/gradeJson/3.1/tree1.json');
        _this.load.atlas('Level31_bird2',window.baseUrl+'assets/gradeAssets/3.1/bird2.png' ,window.baseUrl+'json/gradeJson/3.1/bird2.json');
        
        _this.load.atlas('Level31_croc1',window.baseUrl+'assets/gradeAssets/3.1/croc1.png' ,window.baseUrl+'json/gradeJson/3.1/croc1.json');
        _this.load.atlas('Level31_snake1',window.baseUrl+'assets/gradeAssets/3.1/snake1.png' ,window.baseUrl+'json/gradeJson/3.1/snake1.json');
        
        _this.load.atlas('Level31_book1',window.baseUrl+'assets/gradeAssets/3.1/book1.png' ,window.baseUrl+'json/gradeJson/3.1/book1.json');
        _this.load.atlas('Level31_bread1',window.baseUrl+'assets/gradeAssets/3.1/bread1.png' ,window.baseUrl+'json/gradeJson/3.1/bread1.json');

    }

    },


	create:function(game){

        _this.amplify = null;
        
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer1 = null;


		_this.noofAttempts=0;
		_this.AnsTimerCount=0;
        _this.sceneCount = 0;
		
       // baudio.play(); 
		//baudio.loopFull(0.6);
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
        
        _this.qArrays = _this.shuffle(_this.qArrays);
        _this.no1=0;
        _this.no2=0;
        _this.count1=0;
        _this.count=0;
		_this.shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(_this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,-2,_this.world.width,_this.world.height,'Level31_bg1');
        //_this.bg1.scale.setTo(1.05,1.12);
		
        _this.TopBar=this.add.sprite(0,0,'Level42C_Topbar');
        _this.TopBar.name="grade11_TopBar";
        _this.TopBar.scale.setTo(1,1);
        
        _this.backbtn = this.add.button(-3,3,'newCommonBackBtnForAll',function(){console.log("here");},_this,0,1,2);
        //_this.backbtn = _this.add.sprite(5,1,'CommonBackBtn');
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

         _this.speakerbtn = this.add.button(600,6,'grade11_speaker',function(){},this,1,0,2);
       //_this.speakerbtn = _this.add.sprite(908,1,'CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);

        _this.timebg=this.add.sprite(305,6,'Level42C_timer');
        _this.timebg.name="common_timebg";
        _this.timebg.scale.setTo(1,1);


            this.timeDisplay = this.add.text(330,22,_this.minutes + ' : '+ this.seconds);
            _this.timeDisplay.anchor.setTo(0.5);
            _this.timeDisplay.align = 'center';
            _this.timeDisplay.font = 'Oh Whale';
            _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
            _this.timeDisplay.fill = '#ADFF2F';


           /* _this.dottedBox=this.add.sprite(70,7,'dottedBox');
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
        
            _this.numTxt2 = this.add.text(220,24, 'Fractions');
            _this.numTxt2.anchor.setTo(0.5);
            _this.numTxt2.align = 'center';
            _this.numTxt2.font = 'Alte Haas Grotesk';
            _this.numTxt2.fontSize = 20;
            _this.numTxt2.fill = '#ffffff';
            _this.numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            */
        
         _this.generateStarsForTheScene(6);
        
        
        
        
   
          
				_this.getQuestion();
        
         
            
    
    },
    addQuestion:function(no2)
    {
           ////console.log("here");
        
                _this.time.events.add(1500, function(){
                var tween = _this.add.tween(_this.flagGroup1);
           tween.to({ x: -1000 }, 0,'Linear', true, 0);
           tween.onComplete.add(_this.changeQuestion, _this);


            }, _this);
            
    },
   getVoice:function(){
       _this.stopVoice();   
        
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no1-1])
        {
            case 1:
            case 4:
            case 5:
            case 7:
            case 9:
            case 12:
            case 13:
            case 15:
            case 17:
            case 19:
            case 21:
            case 23:
                   if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/E1a.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/H1a.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/K1a.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1/E1a.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Marathi/3.1_G1_E1a.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Telugu/3.1_G1_E1a.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Tamil/3.1_G1_E1a.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Urdu/3.1_G1_E1a.mp3");
                    }
                    else
                    {
                       
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/3.1_1.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                    break;
            case 2:
            case 3:
            case 6:
            case 8:
            case 10:
            case 11:
            case 14:
            case 16:
            case 18:
            case 20:
            case 22:
            case 24:
                    if(window.languageSelected == "English")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/E1b.mp3");
                    }
                    else if(window.languageSelected == "Hindi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/H1b.mp3");
                    }
                    else if(window.languageSelected == "Kannada")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/K1b.mp3");
                    }
                    else if(window.languageSelected == "Gujarati")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.1/E1b.mp3");
                    }
					else if(window.languageSelected == "Marathi")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Marathi/3.1_G1_E1b.mp3");
                    }
					else if(window.languageSelected == "Telugu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Telugu/3.1_G1_E1b.mp3");
                    }
					else if(window.languageSelected == "Tamil")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Tamil/3.1_G1_E1b.mp3");
                    }
					else if(window.languageSelected == "Urdu")
                    {
                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/Urdu/3.1_G1_E1b.mp3");
                    }
                    else
                    {

                        _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.1/3.1_2.mp3");
                        _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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
 
    
     gotoFirstQuestion:function(){

    	_this.no1++;
         
         
         _this.getVoice();
         
        _this.sh1 = _this.add.sprite(340,414,'Level31_sh1');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,303,'Level31_watermelon');
    	_this.mainFlag.anchor.setTo(0.5);
         _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_watermelon';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
        _this.sh2 = _this.add.sprite(740,410,'Level31_sh2');
        _this.sh2.anchor.setTo(0.5); 

         
    	_this.opt1 = _this.add.sprite(740,360,'Level31_cherry');
        _this.opt1.name = "Level31_cherry";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);


    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);
       



       
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoSecondQuestion:function(){

    	_this.no1++;
         
          _this.getVoice();
   
         
        _this.sh1 = _this.add.sprite(340,414,'Level31_sh1');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,303,'Level31_watermelon');
        _this.mainFlag.name = "Level31_watermelon";
    	_this.mainFlag.anchor.setTo(0.5);
         _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.sh2 = _this.add.sprite(740,410,'Level31_sh2');
        _this.sh2.anchor.setTo(0.5); 

         
    	_this.opt1 = _this.add.sprite(740,360,'Level31_cherry');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
         _this.opt1.name = 'Level31_cherry';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        


    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);
       



       
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    gotoThirdQuestion:function(){

    	_this.no1++;
        
           _this.getVoice();
   
         
        _this.sh2 = _this.add.sprite(320,380,'Level31_sh3');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(330,370,'Level31_leaf1');
    	_this.opt1.anchor.setTo(0.5);
         _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    _this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_leaf';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.sh1= _this.add.sprite(670,430,'Level31_sh4');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(680,260,'Level31_bottle1');
        _this.mainFlag.name = "Level31_bottle";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
         


    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh2);     
    	_this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.sh1);  
    	_this.flagGroup1.add(_this.mainFlag);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoFourthQuestion:function(){

    	_this.no1++;
         
          _this.getVoice();
         
        _this.sh2= _this.add.sprite(320,380,'Level31_sh3');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(330,370,'Level31_leaf1');
        _this.opt1.name = "Level31_leaf";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.sh1 = _this.add.sprite(670,430,'Level31_sh4');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(680,260,'Level31_bottle1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_bottle';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);


    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh2);     
    	_this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.sh1);  
    	_this.flagGroup1.add(_this.mainFlag);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    gotoFifthQuestion:function(){

    	_this.no1++;
        
          _this.getVoice();
         
        _this.sh1 = _this.add.sprite(390,410,'Level31_sh5');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,300,'Level31_crow1');
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_crow';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
        _this.sh2 = _this.add.sprite(720,363,'Level31_sh6');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(730,345,'Level31_lizard1');
        _this.opt1.name = "Level31_lizard";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
   gotoSixthQuestion:function(){

    	_this.no1++;
       
          _this.getVoice();
   
         
        _this.sh1 = _this.add.sprite(390,410,'Level31_sh5');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,300,'Level31_crow1');
        _this.mainFlag.name = "Level31_crow";
    	_this.mainFlag.anchor.setTo(0.5);
        //_this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.sh2 = _this.add.sprite(720,363,'Level31_sh6');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(730,345,'Level31_lizard1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_lizard';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);


    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
     gotoSeventhQuestion:function(){

    	_this.no1++;
          _this.getVoice();
   
         
         
        _this.sh1 = _this.add.sprite(330,370,'Level31_sh7');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,300,'Level31_car1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    _this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_car';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
        _this.sh2 = _this.add.sprite(780,373,'Level31_sh8');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(780,305,'Level31_chair1');
        _this.opt1.name = "Level31_chair";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
    gotoEighthQuestion:function(){

    	_this.no1++;
         
        _this.getVoice();

        _this.sh1 = _this.add.sprite(330,370,'Level31_sh7');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,300,'Level31_car1');
        _this.mainFlag.name = "Level31_car";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.sh2 = _this.add.sprite(780,373,'Level31_sh8');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(780,305,'Level31_chair1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_chair';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
        
    },
    
       gotoNinethQuestion:function(){

    	_this.no1++;
           
          _this.getVoice();
   
         
        _this.sh1 = _this.add.sprite(350,460,'Level31_sh9');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,320,'Level31_dog1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_dog';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        
        _this.sh2 = _this.add.sprite(770,305,'Level31_sh10');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(780,278,'Level31_bird1');
        _this.opt1.name = "Level31_bird";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
       },
    
       gotoTenthQuestion:function(){

    	_this.no1++;
           
           _this.getVoice();
         
        _this.sh1 = _this.add.sprite(350,460,'Level31_sh9');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,320,'Level31_dog1');
        _this.mainFlag.name = "Level31_dog";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.sh2 = _this.add.sprite(770,305,'Level31_sh10');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(780,278,'Level31_bird1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_bird';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
       },
    
      gotoEleventhQuestion:function(){

    	_this.no1++;
          
         _this.getVoice();
         
        _this.sh2 = _this.add.sprite(2000,2000,'Level31_sh9');
        _this.sh2.anchor.setTo(0.5); 
         
          
         
    	_this.opt1 = _this.add.sprite(250,180,'Level31_bee1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.2);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_bee';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        
        _this.sh1 = _this.add.sprite(680,455,'Level31_sh11');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(630,310,'Level31_elephant1');
        _this.mainFlag.name = "Level31_elephant";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh2);     
    	_this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.sh1);  
    	_this.flagGroup1.add(_this.mainFlag);

 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
    gotoTwevelvethQuestion:function(){

    	_this.no1++;
        
        _this.getVoice();
   
         
        _this.sh2 = _this.add.sprite(2000,2000,'Level31_sh9');
        _this.sh2.anchor.setTo(0.5); 
         
          
         
    	_this.opt1 = _this.add.sprite(250,180,'Level31_bee1');
        _this.opt1.name = "Level31_bee";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.2);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);
        
        _this.sh1 = _this.add.sprite(680,455,'Level31_sh11');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(630,310,'Level31_elephant1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_elephant';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh2);     
    	_this.flagGroup1.add(_this.opt1);
        _this.flagGroup1.add(_this.sh1);  
    	_this.flagGroup1.add(_this.mainFlag);
 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
     gotoThirteenthQuestion:function(){

    	_this.no1++;
         
         _this.getVoice();

        _this.sh1 = _this.add.sprite(330,460,'Level31_sh13');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,280,'Level31_bottle2');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_bottle';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
  
        _this.sh2 = _this.add.sprite(690,407,'Level31_sh14');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(680,382,'Level31_key1');
        _this.opt1.name = "Level31_key";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
      
     gotoFourteenthQuestion:function(){

    	_this.no1++;
         
          _this.getVoice();
         
        _this.sh1 = _this.add.sprite(330,460,'Level31_sh13');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,280,'Level31_bottle2');
        _this.mainFlag.name = "Level31_bottle";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
  
        _this.sh2 = _this.add.sprite(690,407,'Level31_sh14');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(680,382,'Level31_key1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_key';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
       gotoFifteenthQuestion:function(){

    	_this.no1++;
           
          _this.getVoice();
         
        _this.sh1 = _this.add.sprite(330,410,'Level31_sh15');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,270,'Level31_suitcase');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_suitcase';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
  
        _this.sh2 = _this.add.sprite(760,365,'Level31_sh16');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(760,350,'Level31_spanner');
        _this.opt1.name = "Level31_spanner";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
       gotoSixteenthQuestion:function(){

    	_this.no1++;
           
          _this.getVoice();
   
         
        _this.sh1 = _this.add.sprite(330,410,'Level31_sh15');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,270,'Level31_suitcase');
        _this.mainFlag.name = "Level31_suitcase";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
  
        _this.sh2 = _this.add.sprite(760,365,'Level31_sh16');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(760,350,'Level31_spanner');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_spanner';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
        gotoSeventeenthQuestion:function(){

    	_this.no1++;
            
          _this.getVoice();
   
         
        _this.sh1 = _this.add.sprite(330,395,'Level31_sh17');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,280,'Level31_scooter1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_scooter';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
  
        _this.sh2 = _this.add.sprite(790,410,'Level31_sh18');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(790,380,'Level31_bulb1');
        _this.opt1.name = "Level31_bulb";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
    
        gotoEighteenthQuestion:function(){

    	_this.no1++;
            
           _this.getVoice();
         
        _this.sh1 = _this.add.sprite(330,395,'Level31_sh17');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,280,'Level31_scooter1');
        _this.mainFlag.name = "Level31_scooter";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
  
        _this.sh2 = _this.add.sprite(790,410,'Level31_sh18');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(790,380,'Level31_bulb1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_bulb';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
    
        gotoNineteenthQuestion:function(){

    	_this.no1++;
            
          _this.getVoice();
         
        _this.sh1 = _this.add.sprite(320,465,'Level31_sh19');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,280,'Level31_tree1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_tree';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
  
        _this.sh2 = _this.add.sprite(690,460,'Level31_sh20');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(690,420,'Level31_bird2');
        _this.opt1.name = "Level31_bird";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
    gotoTwentythQuestion:function(){

    	_this.no1++;
         
          _this.getVoice();
   
        _this.sh1 = _this.add.sprite(320,465,'Level31_sh19');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,280,'Level31_tree1');
        _this.mainFlag.name = "Level31_tree";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
  
        _this.sh2 = _this.add.sprite(690,460,'Level31_sh20');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(690,420,'Level31_bird2');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_bird';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
    
        gotoTwentyonethQuestion:function(){

    	_this.no1++;
            
          _this.getVoice();
         
        _this.sh1 = _this.add.sprite(370,445,'Level31_sh21');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,410,'Level31_croc1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_crocodile';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
  
        _this.sh2 = _this.add.sprite(690,310,'Level31_sh22');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(690,300,'Level31_snake1');
        _this.opt1.name = "Level31_snake";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
      gotoTwentytwothQuestion:function(){

    	_this.no1++;
          
         _this.getVoice();
         
        _this.sh1 = _this.add.sprite(370,445,'Level31_sh21');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,410,'Level31_croc1');
        _this.mainFlag.name = "Level31_crocodile";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
  
        _this.sh2 = _this.add.sprite(690,310,'Level31_sh22');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(690,300,'Level31_snake1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_snake';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
      gotoTwentythreethQuestion:function(){

    	_this.no1++;
          
          _this.getVoice();
   
         
        _this.sh1 = _this.add.sprite(330,425,'Level31_sh23');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,380,'Level31_book1');
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.name = 'Level31_book';
        _this.mainFlag.events.onInputDown.add(_this.correctAns,_this);
  
        _this.sh2 = _this.add.sprite(770,400,'Level31_sh24');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(770,390,'Level31_bread1');
        _this.opt1.name = "Level31_bread";
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.events.onInputDown.add(_this.wrongAns,_this);

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
     },
    
     gotoTwentyfourthQuestion:function(){

    	_this.no1++;
         
          _this.getVoice();
   
         
        _this.sh1 = _this.add.sprite(330,425,'Level31_sh23');
        _this.sh1.anchor.setTo(0.5); 
         
    	_this.mainFlag = _this.add.sprite(330,380,'Level31_book1');
        _this.mainFlag.name = "Level31_book";
    	_this.mainFlag.anchor.setTo(0.5);
        _this.mainFlag.scale.setTo(1,1.2);
        _this.mainFlag.inputEnabled = true;
    	_this.mainFlag.input.useHandCursor = true;
        _this.mainFlag.events.onInputDown.add(_this.wrongAns,_this);
  
        _this.sh2 = _this.add.sprite(770,400,'Level31_sh24');
        _this.sh2.anchor.setTo(0.5); 
         
    	_this.opt1 = _this.add.sprite(770,390,'Level31_bread1');
    	_this.opt1.anchor.setTo(0.5);
        _this.opt1.scale.setTo(1,1.1);
        _this.opt1.inputEnabled = true;
    	_this.opt1.input.useHandCursor = true;
        _this.opt1.name = 'Level31_bread';
        _this.opt1.events.onInputDown.add(_this.correctAns,_this);
        

    	_this.flagGroup1 = _this.add.group();

    	_this.flagGroup1.add(_this.sh1);     
    	_this.flagGroup1.add(_this.mainFlag);
        _this.flagGroup1.add(_this.sh2);  
    	_this.flagGroup1.add(_this.opt1);


 
         
    	_this.flagGroup1.x = 1000;
    	var tween = _this.add.tween(_this.flagGroup1);
    	tween.to({ x: 0 }, 0,'Linear', true, 0);
        //tween.onComplete.add(_this.addQuestion, _this);

        tween.onComplete.add(function(){

     }, _this);    
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

		//  Set a TimerEvent to occur after 2 seconds
		_this.timer.loop(1000, function(){
			_this.AnsTimerCount++;
		}, _this);

		//  Start the _this.timer running - _this is important!
		//  It won't start automatically, allowing you to hook it to button events and the like.
		_this.timer.start();


        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function(){
                  _this.updateTimer();
        }, _this);
        _this.timer1.start();
		
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
    	////console.log("get"+_this.no1);
    	switch(_this.qArrays[_this.no1])
    // switch(_this.no1)
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
                    _this.questionid = 2;
                    _this.gotoThirdQuestion();
    				break;
    		case 4: 
                    _this.questionid = 1;
                    _this.gotoFourthQuestion();
    				break;
    		case 5: 
                    _this.questionid = 1;
                    _this.gotoFifthQuestion();
    				break;
    		case 6: 
                    _this.questionid = 2;
                    _this.gotoSixthQuestion();
    				break;
    		case 7: 
                    _this.questionid = 1;
                    _this.gotoSeventhQuestion();
    				break;
            case 8: 
                    _this.questionid = 2;
                    _this.gotoEighthQuestion();
    				break;
            case 9: 
                    _this.questionid = 1;
                    _this.gotoNinethQuestion();
    				break;
            case 10: 
                    _this.questionid = 2;
                    _this.gotoTenthQuestion();
    				break;
            case 11: 
                    _this.questionid = 2;
                    _this.gotoEleventhQuestion();
    				break;
            case 12: 
                    _this.questionid = 1;
                    _this.gotoTwevelvethQuestion();
    				break;
            case 13: 
                    _this.questionid = 1;
                    _this.gotoThirteenthQuestion();
                    break;
            case 14: 
                    _this.questionid = 2;
                    _this.gotoFourteenthQuestion();
                    break;            
            case 15: 
                    _this.questionid = 1;
                    _this.gotoFifteenthQuestion();
                    break;
            case 16: 
                    _this.questionid = 2;
                    _this.gotoSixteenthQuestion();
                    break;
            case 17: 
                    _this.questionid = 1;
                    _this.gotoSeventeenthQuestion();
                    break;
            case 18: 
                    _this.questionid = 2;
                    _this.gotoEighteenthQuestion();
                    break;
            case 19: 
                    _this.questionid = 1;
                    _this.gotoNineteenthQuestion();
                    break;
            case 20: 
                    _this.questionid = 2;
                    _this.gotoTwentythQuestion();
                    break;
            case 21: 
                    _this.questionid = 1;
                    _this.gotoTwentyonethQuestion();
                    break;
            case 22: 
                    _this.questionid = 2;
                    _this.gotoTwentytwothQuestion();
                    break;
            case 23: 
                    _this.questionid = 1;
                    _this.gotoTwentythreethQuestion();
                    break;
            case 24: 
                    _this.questionid = 2;
                    _this.gotoTwentyfourthQuestion();
                    break;
    	}
        
    },
    
    nothing:function(){
        
    },
    
    shuffle:function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        //While there remain elements to _this.shuffle...
        while (0 !== currentIndex) {
            
        //Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        //And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
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
    
	correctAns:function(target)
	{
		_this.noofAttempts++;
        ////console.log("wrong");
        
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar,
				id_question: _this.questionid,  
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);

		if(_this.timer)
            {
                _this.timer.stop();
                _this.timer = null;
            }

        if(_this.timer1)
            {
                _this.timer1.stop();
                _this.timer1 = null;
            }

		var currentTime = window.timeSaveFunc();
				var saveAsment = 
				{ 
					id_game_play: _this.savedVar,
					id_question: _this.questionid,   
					pass: "Yes",
					time2answer: _this.AnsTimerCount,
					attempts: _this.noofAttempts,
					date_time_submission: currentTime, 
					access_token: window.acctkn 
				}
			
		//absdsjsapi.saveAssessment(saveAsment);

        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
		
		////console.log("correct");
        ////console.log("falseobject");
        _this.speakerbtn.inputEnabled=false; 
        _this.mainFlag.inputEnabled = false;
        _this.opt1.inputEnabled = false;

        ////console.log(target.name);
        _this.mainFlag.name = "";
        _this.opt1.name = "";
        target.name = "rightAnswer";

        //console.log(_this.mainFlag.name);
         //console.log(_this.opt1.name);
        	
        _this.animlev1 =target.animations.add('flag1');
        _this.animlev1.play(10,true);
        //target.frame=1;
        _this.time.events.add(1100, function(){
           _this.falling();
        },_this);
		celebration = true;
		
     	cmusic = _this.add.audio('celebr');
		cmusic.play();

        _this.time.events.add(100, _this.removeCelebration, _this);


		////console.log(target);
        //target.tint = 0xA9A9A9;
        
        var starAnim = _this.starsGroup.getChildAt(_this.count1);
		////console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play(); 
        
        
   		target.events.onInputDown.removeAll();
          
	},
    
    falling:function(target){
         //console.log(_this.mainFlag.name);
         //console.log(_this.opt1.name);
        if(_this.mainFlag.name=="rightAnswer")
            {
                _this.tweening();
            }
        if(_this.opt1.name=="rightAnswer")
            {
                _this.tweening1();
            }


           /* if(
                _this.qArrays[_this.no1]==1||_this.qArrays[_this.no1]==3||_this.qArrays[_this.no1]==5||_this.qArrays[_this.no1]==7||
                _this.qArrays[_this.no1]==9||_this.qArrays[_this.no1]==11||_this.qArrays[_this.no1]==13||_this.qArrays[_this.no1]==15||
                _this.qArrays[_this.no1]==17||_this.qArrays[_this.no1]==19||_this.qArrays[_this.no1]==21||_this.qArrays[_this.no1]==23

            )
            {
                _this.tweening1();
            }
            else
            {
                _this.tweening();
            }*/
    },
    
tweening:function(){
   var group1 = _this.add.group();

    	group1.add(_this.sh1);     
    	group1.add(_this.mainFlag);
     var tween1 = _this.add.tween(group1);
    	tween1.to({ y: 1000 }, -20,'Linear', true, 0);
    	var	goingdown = _this.add.audio('goingdown');
		goingdown.play();
            
},
    tweening1:function(){
   var group2 = _this.add.group();

    	group2.add(_this.sh2);     
    	group2.add(_this.opt1);
     var tween2 = _this.add.tween(group2);
    	tween2.to({ y: -1000 }, -20,'Linear', true, 0);
                	var	goingup = _this.add.audio('goingup');
		goingup.play();
},
    
    wrongAns:function(target)
	{
		_this.noofAttempts++;
        ////console.log("wrong");
        
			var currentTime = window.timeSaveFunc();
			var interactEvent = 
			{ 
				id_game_play: _this.savedVar, 
				id_question: _this.questionid,    
				date_time_event: currentTime, 
				event_type: "click", 
				res_id: target.name, 
				access_token: window.acctkn 
			} 
			
			//absdsjsapi.saveInteractEvent(interactEvent);	


            /*var currentTime = window.timeSaveFunc();
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
			
        ////console.log("wrong");
        	

		//scoretext.setText(selctedLang.score+' : '+score);
        ////console.log(target);
        //target.tint = 0xA9A9A9;
        
 
        
		_this.shake.shake(10, target);
		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
        //wmusic1 = _this.add.audio('aiyoh');
		//wmusic1.play();
        

        //_this.disableListeners();
        //target.events.onInputDown.removeAll();
	},
    
    
    	removeCelebration:function()
	{
		////console.log("removeCeleb");
		celebration = false;
		//celebAnim.destroy();
		//rightCount--;
		////console.log("no"+_this.no1);
		//_this.input.enabled = true;
			
		     _this.count1++;


		//if(rightCount<=0)
		//{		
            ////console.log("vamitha");
            
			if(_this.no1<6)
			{
                ////console.log("addq");
                 _this.addQuestion(_this.count1);
			}
			else
			{
                 _this.time.events.add(3000, function(){
				////console.log("gameEnd");
               //_this.stopAllVoice();
               _this.stopVoice();
				_this.state.start('grade3_1Score',true,false);
                 },_this);
			}

	},
    
    
	changeQuestion:function()
	{
		_this.flagGroup1.destroy();
         
		if(_this.no1<6)
		{
            _this.count++;
			_this.getQuestion();
		}
		else
		{
			////console.log("gameEnd");

		}
	},


    

    
    update:function(){

    },
    
    shutdown:function()
    {
         _this.stopVoice();
    }
    
};