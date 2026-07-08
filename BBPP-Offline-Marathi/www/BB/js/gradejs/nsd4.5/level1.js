Game.nsd4_5level1=function(){};


Game.nsd4_5level1.prototype={

    init:function(param,score)
    {
        _this = this;

        this.Stararr = param;
        this.score = score;
        telInitializer.gameIdInit("NSD4_5",gradeSelected);
    },

    preload:function(game){
  if(!window.grade5NSF8){

            window.grade5NSF8 = true;

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

            this.load.image('NSD4_5_BG',window.baseUrl+'assets/gradeAssets/nsd4.5/bg1.png');
        this.load.atlas("NSD4_5_TickMark",window.baseUrl+"assets/gradeAssets/nsd4.5/tick.png",window.baseUrl+"json/gradeJson/nsd4.5/tick.json");
        this.load.atlas("NSD4_5_Eraser",window.baseUrl+"assets/gradeAssets/nsd4.5/erase.png",window.baseUrl+"json/gradeJson/nsd4.5/erase.json");
        this.load.atlas('NSD4_5_numberpad',window.baseUrl+'assets/gradeAssets/nsd4.5/numberpad.png',window.baseUrl+'json/gradeJson/nsd4.5/numberpad.json');
        this.load.atlas("NSD4_5_AnsBox",window.baseUrl+"assets/gradeAssets/nsd4.5/AnsBox.png",window.baseUrl+"json/gradeJson/nsd4.5/AnsBox.json");
        this.load.image('NSD4_5_Bottombar',window.baseUrl+'assets/gradeAssets/nsd4.5/bottombar.png');
        this.load.atlas('NSD4_5_Txtbox',window.baseUrl+'assets/gradeAssets/nsd4.5/txtbox.png',window.baseUrl+'json/gradeJson/nsd4.5/txtbox.json');
        this.load.image('NSD4_5_OneReNote',window.baseUrl+'assets/gradeAssets/nsd4.5/OneReNote.png');
        this.load.image('NSD4_5_TenRsNote',window.baseUrl+'assets/gradeAssets/nsd4.5/TenRsNote.png');
        this.load.image('NSD4_5_OneReCoin',window.baseUrl+'assets/gradeAssets/nsd4.5/OneReCoin.png');
        this.load.image('NSD4_5_TenRsCoin',window.baseUrl+'assets/gradeAssets/nsd4.5/TenRsCoin.png');
        this.load.image('NSD4_5_Dot',window.baseUrl+'assets/gradeAssets/nsd4.5/point.png');
        this.load.image('NSD4_5_Table',window.baseUrl+'assets/gradeAssets/nsd4.5/table.png');
    }

    },

    

    create:function(game){
        _this = this;

        _this.Stararr = [];
        _this.amplify = null;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount=0;
        
       _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.wrongAnswer = false;

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.rno11 = 0;
        _this.vno11 = 0;
        _this.no2 = 0;
        _this.count=0;

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.timer = null;

        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.selectedAns4 = "";

        _this.selAns1 = "";
        _this.selAns2 = "";

        _this.toCheckNumberPad = false;

        _this.qArray = new Array();

        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();

        _this.qArrays1 = [1,2,3,4,5,6];
        _this.qArrays2 = [7,8,9,10,11,12];

        this.qArrays1 = this.shuffle(_this.qArrays1);
        this.qArrays2 = this.shuffle(_this.qArrays2);

        for(var i=0;i<3;i++)
        {
            _this.qArray.push(_this.qArrays1[i]);
        }
        for(var j=0;j<3;j++)
        {
            _this.qArray.push(_this.qArrays2[j]);
        }

        console.log(_this.qArray);

        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'NSD4_5_BG');

        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/English/nsd4.5.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/Hindi/nsd4.5.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/Kannada/nsd4.5.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/Gujarati/nsd4.5.mp3";
        }
		
		else if(window.languageSelected =="Marathi")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/Marathi/nsd4.5.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/Telugu/nsd4.5.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/Tamil/nsd4.5.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/Urdu/nsd4.5.mp3";
                    }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/nsd4.5/Odiya/nsd4.5.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        commonNavBar_nsd4_5.addNavBar(this,_this.soundurl);
        commonNavBar_nsd4_5.addTimerToTheGame(this,0,0,0);
        commonNavBar_nsd4_5.startTimer(this);

        _this.generateStarsForTheScene(6);

        _this.getQuestion();
        //_this.getVoice();

    },

    shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

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
            _this.starsGroup.create(_this.world.centerX, 10, 'starAnim1');
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=12;
                    _this.starsGroup.getChildAt(i).x+=12;
                }
            }
        } 
        _this.starsGroup.getChildAt(0).frame = 2;
    },

    getQuestion:function(target1)
    {
        console.log(_this.qArray[_this.no11]);

        _this.toCheckNumberPad = true;

        if(!_this.timer)
        {
          _this.sceneCount++;
          _this.noofAttempts=0;
          _this.AnsTimerCount=0;
            _this.timer = _this.time.create(false);

              //  Set a TimerEvent to occur after 2 seconds
              _this.timer.loop(1000, function(){
                   _this.AnsTimerCount++;
              }, this);
              //  Start the timer running - this is important!
              //  It won't start automatically, allowing you to hook it to button events and the like.
              _this.timer.start();
      }

        _this.flagGroup = _this.add.group();

        switch(_this.qArray[_this.no11])
        {
            case 1: 
                _this.gotoFirstQuestion();
                break;

            case 2: 
                _this.gotoSecondQuestion();
                break;

            case 3: 
                _this.gotoThirdQuestion();
                break;

            case 4: 
                _this.gotoFourthQuestion();
                break;

            case 5: 
                _this.gotoFifthQuestion();
                break;

            case 6: 
                _this.gotoSixthQuestion();
                break;

            case 7: 
                _this.gotoSeventhQuestion();
                break;

            case 8: 
                _this.gotoEighthQuestion();
                break;

            case 9: 
                _this.gotoNinthQuestion();
                break;

            case 10: 
                _this.gotoTenthQuestion();
                break;

            case 11: 
                _this.gotoEleventhQuestion();
                break;

            case 12: 
                _this.gotoTwelvthQuestion();
                break;

        }
    },

    loadTable_TextBox:function(){

        _this.table = _this.add.sprite(_this.world.centerX,_this.world.centerY+110,'NSD4_5_Table');
        _this.table.anchor.setTo(0.5);
        _this.table.name="Table";

        _this.txtbox1 = _this.add.sprite(_this.world.centerX-250,_this.world.centerY+145,'NSD4_5_Txtbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.scale.setTo(0.9,0.9);
        _this.txtbox1.frame = 0;
        _this.txtbox1.name="AnsBox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked1,_this); 

        _this.txtbox2 = _this.add.sprite(_this.world.centerX-35,_this.world.centerY+145,'NSD4_5_Txtbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.scale.setTo(0.9,0.9);
        _this.txtbox2.frame = 0;
        _this.txtbox2.name="AnsBox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked1,_this); 

        _this.txtbox3 = _this.add.sprite(_this.world.centerX+175,_this.world.centerY+145,'NSD4_5_Txtbox');
        _this.txtbox3.anchor.setTo(0.5);
        _this.txtbox3.scale.setTo(0.9,0.9);
        _this.txtbox3.frame = 0;
        _this.txtbox3.name="AnsBox3";
        _this.txtbox3.inputEnabled = true;
        _this.txtbox3.input.useHandCursor = true;
        _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked1,_this); 

        _this.txtbox4 = _this.add.sprite(_this.world.centerX+305,_this.world.centerY+145,'NSD4_5_Txtbox');
        _this.txtbox4.anchor.setTo(0.5);
        _this.txtbox4.scale.setTo(0.9,0.9);
        _this.txtbox4.frame = 0;
        _this.txtbox4.name="AnsBox4";
        _this.txtbox4.inputEnabled = true;
        _this.txtbox4.input.useHandCursor = true;
        _this.txtbox4.events.onInputDown.add(_this.numberBoxClicked1,_this); 

        _this.txtbox1Pressed = false;
        _this.txtbox2Pressed = false;
        _this.txtbox3Pressed = false;
        _this.txtbox4Pressed = false;

    },

    loadTextBox:function(){

        _this.txtbox1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY+135,'NSD4_5_Txtbox');
        _this.txtbox1.anchor.setTo(0.5);
        _this.txtbox1.scale.setTo(0.9,0.9);
        _this.txtbox1.frame = 0;
        _this.txtbox1.name="AnsBox1";
        _this.txtbox1.inputEnabled = true;
        _this.txtbox1.input.useHandCursor = true;
        _this.txtbox1.events.onInputDown.add(_this.numberBoxClicked2,_this); 

        _this.dot = _this.add.sprite(_this.world.centerX-4,_this.world.centerY+125,'NSD4_5_Dot');
        _this.dot.anchor.setTo(0.5);
        _this.dot.scale.setTo(1.2,1.2);
        _this.dot.name="Point";

        _this.txtbox2 = _this.add.sprite(_this.world.centerX+45,_this.world.centerY+135,'NSD4_5_Txtbox');
        _this.txtbox2.anchor.setTo(0.5);
        _this.txtbox2.scale.setTo(0.9,0.9);
        _this.txtbox2.frame = 0;
        _this.txtbox2.name="AnsBox2";
        _this.txtbox2.inputEnabled = true;
        _this.txtbox2.input.useHandCursor = true;
        _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked2,_this);  

        _this.txtbox1Pressed = false;
        _this.txtbox2Pressed = false;

    },

    numberBoxClicked1:function(target){

        commonNavBar_nsd4_5.playClickSound();

        if(target.name == "AnsBox1")
        {
            _this.txtbox1Pressed = true;
            _this.txtbox2Pressed = false;
            _this.txtbox3Pressed = false;
            _this.txtbox4Pressed = false;

            _this.txtbox1.frame = 1;
            _this.txtbox2.frame = 0;
            _this.txtbox3.frame = 0;
            _this.txtbox4.frame = 0;
        } 
        if(target.name == "AnsBox2")
        {
            _this.txtbox2Pressed = true;
            _this.txtbox1Pressed = false;
            _this.txtbox3Pressed = false;
            _this.txtbox4Pressed = false;

            _this.txtbox1.frame = 0;
            _this.txtbox2.frame = 1;
            _this.txtbox3.frame = 0;
            _this.txtbox4.frame = 0;
        } 
        if(target.name == "AnsBox3")
        {
            _this.txtbox3Pressed = true;
            _this.txtbox1Pressed = false;
            _this.txtbox2Pressed = false;
            _this.txtbox4Pressed = false;

            _this.txtbox1.frame = 0;
            _this.txtbox2.frame = 0;
            _this.txtbox3.frame = 1;
            _this.txtbox4.frame = 0;
        } 
        if(target.name == "AnsBox4")
        {
            _this.txtbox4Pressed = true;
            _this.txtbox1Pressed = false;
            _this.txtbox2Pressed = false;
            _this.txtbox3Pressed = false;

            _this.txtbox1.frame = 0;
            _this.txtbox2.frame = 0;
            _this.txtbox3.frame = 0;
            _this.txtbox4.frame = 1;
        } 

        if( _this.toCheckNumberPad)
        {
            _this.toCheckNumberPad = false;
            _this.addNumberPad1();
        }

    },

    numberBoxClicked2:function(target){

        commonNavBar_nsd4_5.playClickSound();

        if(target.name == "AnsBox1")
        {
            _this.txtbox1Pressed = true;
            _this.txtbox2Pressed = false;

            _this.txtbox1.frame = 1;
            _this.txtbox2.frame = 0;
        } 
        if(target.name == "AnsBox2")
        {
            _this.txtbox2Pressed = true;
            _this.txtbox1Pressed = false;

            _this.txtbox1.frame = 0;
            _this.txtbox2.frame = 1;
        } 

        if( _this.toCheckNumberPad)
        {
            _this.toCheckNumberPad = false;
            _this.addNumberPad2();
        }

    },

    gotoFirstQuestion:function(){

        _this.questionNo = 1;  //34.56

        //Ten Rupees Note
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-90,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";
        _this.OneRe_Note4 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note4.anchor.setTo(0.5);
        _this.OneRe_Note4.name="OneRe_Note4";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";
        _this.TenRs_Coin4 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-100,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin4.anchor.setTo(0.5);
        _this.TenRs_Coin4.name="TenRs_Coin4";
        _this.TenRs_Coin5 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-120,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin5.anchor.setTo(0.5);
        _this.TenRs_Coin5.name="TenRs_Coin5";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";
        _this.OneRe_Coin4 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-100,'NSD4_5_OneReCoin');
        _this.OneRe_Coin4.anchor.setTo(0.5);
        _this.OneRe_Coin4.name="OneRe_Coin4";
        _this.OneRe_Coin5 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-120,'NSD4_5_OneReCoin');
        _this.OneRe_Coin5.anchor.setTo(0.5);
        _this.OneRe_Coin5.name="OneRe_Coin5";
        _this.OneRe_Coin6 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-140,'NSD4_5_OneReCoin');
        _this.OneRe_Coin6.anchor.setTo(0.5);
        _this.OneRe_Coin6.name="OneRe_Coin6";

        _this.loadTable_TextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.TenRs_Coin4);
        _this.flagGroup.add(_this.TenRs_Coin5);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin5);
        _this.flagGroup.add(_this.OneRe_Coin6);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);
        _this.flagGroup.add(_this.OneRe_Note4);

        _this.flagGroup.add(_this.table);
        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.txtbox3);
        _this.flagGroup.add(_this.txtbox4);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 3; 
        _this.rightans2 = 4; 
        _this.rightans3 = 5; 
        _this.rightans4 = 6; 
    },

    gotoSecondQuestion:function(){

        _this.questionNo = 2;  //25.32

        //Ten Rupees Note
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-100,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-90,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";
        _this.OneRe_Note4 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note4.anchor.setTo(0.5);
        _this.OneRe_Note4.name="OneRe_Note4";
        _this.OneRe_Note5 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note5.anchor.setTo(0.5);
        _this.OneRe_Note5.name="OneRe_Note5";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";

        _this.loadTable_TextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);
        _this.flagGroup.add(_this.OneRe_Note4);
        _this.flagGroup.add(_this.OneRe_Note5);

        _this.flagGroup.add(_this.table);
        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.txtbox3);
        _this.flagGroup.add(_this.txtbox4);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 2; 
        _this.rightans2 = 5; 
        _this.rightans3 = 3; 
        _this.rightans4 = 2; 

    },

    gotoThirdQuestion:function(){

        _this.questionNo = 3;  // 43.36

        //Ten Rupees Note  
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-90,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";
        _this.TenRs_Note4 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note4.anchor.setTo(0.5);
        _this.TenRs_Note4.name="TenRsNote4";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";
        _this.OneRe_Coin4 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-100,'NSD4_5_OneReCoin');
        _this.OneRe_Coin4.anchor.setTo(0.5);
        _this.OneRe_Coin4.name="OneRe_Coin4";
        _this.OneRe_Coin5 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-120,'NSD4_5_OneReCoin');
        _this.OneRe_Coin5.anchor.setTo(0.5);
        _this.OneRe_Coin5.name="OneRe_Coin5";
        _this.OneRe_Coin6 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-140,'NSD4_5_OneReCoin');
        _this.OneRe_Coin6.anchor.setTo(0.5);
        _this.OneRe_Coin6.name="OneRe_Coin6";

        _this.loadTable_TextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin5);
        _this.flagGroup.add(_this.OneRe_Coin6);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.TenRs_Note4);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);

        _this.flagGroup.add(_this.table);
        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.txtbox3);
        _this.flagGroup.add(_this.txtbox4);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 4; 
        _this.rightans2 = 3; 
        _this.rightans3 = 3; 
        _this.rightans4 = 6; 

    },

    gotoFourthQuestion:function(){

        _this.questionNo = 4;  //55.44

        //Ten Rupees Note
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-100,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-90,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";
        _this.TenRs_Note4 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note4.anchor.setTo(0.5);
        _this.TenRs_Note4.name="TenRsNote4";
        _this.TenRs_Note5 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note5.anchor.setTo(0.5);
        _this.TenRs_Note5.name="TenRsNote5";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-100,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-90,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";
        _this.OneRe_Note4 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note4.anchor.setTo(0.5);
        _this.OneRe_Note4.name="OneRe_Note4";
        _this.OneRe_Note5 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note5.anchor.setTo(0.5);
        _this.OneRe_Note5.name="OneRe_Note5";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";
        _this.TenRs_Coin4 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-100,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin4.anchor.setTo(0.5);
        _this.TenRs_Coin4.name="TenRs_Coin4";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";
        _this.OneRe_Coin4 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-100,'NSD4_5_OneReCoin');
        _this.OneRe_Coin4.anchor.setTo(0.5);
        _this.OneRe_Coin4.name="OneRe_Coin4";

        _this.loadTable_TextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.TenRs_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin4);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.TenRs_Note4);
        _this.flagGroup.add(_this.TenRs_Note5);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);
        _this.flagGroup.add(_this.OneRe_Note4);
        _this.flagGroup.add(_this.OneRe_Note5);

        _this.flagGroup.add(_this.table);
        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.txtbox3);
        _this.flagGroup.add(_this.txtbox4);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 5; 
        _this.rightans2 = 5; 
        _this.rightans3 = 4; 
        _this.rightans4 = 4; 

    },

    gotoFifthQuestion:function(){

        _this.questionNo = 5;  //68.45

        //Ten Rupees Note  
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-110,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-100,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-90,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";
        _this.TenRs_Note4 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note4.anchor.setTo(0.5);
        _this.TenRs_Note4.name="TenRsNote4";
        _this.TenRs_Note5 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note5.anchor.setTo(0.5);
        _this.TenRs_Note5.name="TenRsNote5";
        _this.TenRs_Note6 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note6.anchor.setTo(0.5);
        _this.TenRs_Note6.name="TenRsNote6";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-130,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-120,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-110,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";
        _this.OneRe_Note4 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-100,'NSD4_5_OneReNote');
        _this.OneRe_Note4.anchor.setTo(0.5);
        _this.OneRe_Note4.name="OneRe_Note4";
        _this.OneRe_Note5 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-90,'NSD4_5_OneReNote');
        _this.OneRe_Note5.anchor.setTo(0.5);
        _this.OneRe_Note5.name="OneRe_Note5";
        _this.OneRe_Note6 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note6.anchor.setTo(0.5);
        _this.OneRe_Note6.name="OneRe_Note6";
        _this.OneRe_Note7 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note7.anchor.setTo(0.5);
        _this.OneRe_Note7.name="OneRe_Note7";
        _this.OneRe_Note8 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note8.anchor.setTo(0.5);
        _this.OneRe_Note8.name="OneRe_Note8";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";
        _this.TenRs_Coin4 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-100,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin4.anchor.setTo(0.5);
        _this.TenRs_Coin4.name="TenRs_Coin4";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";
        _this.OneRe_Coin4 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-100,'NSD4_5_OneReCoin');
        _this.OneRe_Coin4.anchor.setTo(0.5);
        _this.OneRe_Coin4.name="OneRe_Coin4";
        _this.OneRe_Coin5 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-120,'NSD4_5_OneReCoin');
        _this.OneRe_Coin5.anchor.setTo(0.5);
        _this.OneRe_Coin5.name="OneRe_Coin5";

        _this.loadTable_TextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.TenRs_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin5);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.TenRs_Note4);
        _this.flagGroup.add(_this.TenRs_Note5);
        _this.flagGroup.add(_this.TenRs_Note6);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);
        _this.flagGroup.add(_this.OneRe_Note4);
        _this.flagGroup.add(_this.OneRe_Note5);
        _this.flagGroup.add(_this.OneRe_Note6);
        _this.flagGroup.add(_this.OneRe_Note7);
        _this.flagGroup.add(_this.OneRe_Note8);

        _this.flagGroup.add(_this.table);
        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.txtbox3);
        _this.flagGroup.add(_this.txtbox4);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 6; 
        _this.rightans2 = 8; 
        _this.rightans3 = 4; 
        _this.rightans4 = 5; 

    },

    gotoSixthQuestion:function(){

        _this.questionNo = 6; //76.21

        //Ten Rupees Note  
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-120,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-110,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-100,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";
        _this.TenRs_Note4 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-90,'NSD4_5_TenRsNote');
        _this.TenRs_Note4.anchor.setTo(0.5);
        _this.TenRs_Note4.name="TenRsNote4";
        _this.TenRs_Note5 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note5.anchor.setTo(0.5);
        _this.TenRs_Note5.name="TenRsNote5";
        _this.TenRs_Note6 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note6.anchor.setTo(0.5);
        _this.TenRs_Note6.name="TenRsNote6";
        _this.TenRs_Note7 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note7.anchor.setTo(0.5);
        _this.TenRs_Note7.name="TenRsNote7";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-110,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-100,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-90,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";
        _this.OneRe_Note4 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note4.anchor.setTo(0.5);
        _this.OneRe_Note4.name="OneRe_Note4";
        _this.OneRe_Note5 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note5.anchor.setTo(0.5);
        _this.OneRe_Note5.name="OneRe_Note5";
        _this.OneRe_Note6 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note6.anchor.setTo(0.5);
        _this.OneRe_Note6.name="OneRe_Note6";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";

        _this.loadTable_TextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.TenRs_Note4);
        _this.flagGroup.add(_this.TenRs_Note5);
        _this.flagGroup.add(_this.TenRs_Note6);
        _this.flagGroup.add(_this.TenRs_Note7);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);
        _this.flagGroup.add(_this.OneRe_Note4);
        _this.flagGroup.add(_this.OneRe_Note5);
        _this.flagGroup.add(_this.OneRe_Note6);

        _this.flagGroup.add(_this.table);
        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.txtbox3);
        _this.flagGroup.add(_this.txtbox4);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 7; 
        _this.rightans2 = 6; 
        _this.rightans3 = 2; 
        _this.rightans4 = 1; 

    },

    gotoSeventhQuestion:function(){

        _this.questionNo = 7;  //71.21

        //Ten Rupees Note  
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-120,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-110,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-100,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";
        _this.TenRs_Note4 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-90,'NSD4_5_TenRsNote');
        _this.TenRs_Note4.anchor.setTo(0.5);
        _this.TenRs_Note4.name="TenRsNote4";
        _this.TenRs_Note5 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note5.anchor.setTo(0.5);
        _this.TenRs_Note5.name="TenRsNote5";
        _this.TenRs_Note6 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note6.anchor.setTo(0.5);
        _this.TenRs_Note6.name="TenRsNote6";
        _this.TenRs_Note7 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note7.anchor.setTo(0.5);
        _this.TenRs_Note7.name="TenRsNote7";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";

        _this.loadTextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.TenRs_Note4);
        _this.flagGroup.add(_this.TenRs_Note5);
        _this.flagGroup.add(_this.TenRs_Note6);
        _this.flagGroup.add(_this.TenRs_Note7);
        _this.flagGroup.add(_this.OneRe_Note1);

        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.dot);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 71; 
        _this.rightans2 = 21;  

    },

    gotoEighthQuestion:function(){

        _this.questionNo = 8;  //23.56

        //Ten Rupees Note  
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";
        _this.TenRs_Coin4 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-100,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin4.anchor.setTo(0.5);
        _this.TenRs_Coin4.name="TenRs_Coin4";
        _this.TenRs_Coin5 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-120,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin5.anchor.setTo(0.5);
        _this.TenRs_Coin5.name="TenRs_Coin5";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";
        _this.OneRe_Coin4 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-100,'NSD4_5_OneReCoin');
        _this.OneRe_Coin4.anchor.setTo(0.5);
        _this.OneRe_Coin4.name="OneRe_Coin4";
        _this.OneRe_Coin5 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-120,'NSD4_5_OneReCoin');
        _this.OneRe_Coin5.anchor.setTo(0.5);
        _this.OneRe_Coin5.name="OneRe_Coin5";
        _this.OneRe_Coin6 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-140,'NSD4_5_OneReCoin');
        _this.OneRe_Coin6.anchor.setTo(0.5);
        _this.OneRe_Coin6.name="OneRe_Coin6";

        _this.loadTextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.TenRs_Coin4);
        _this.flagGroup.add(_this.TenRs_Coin5);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin5);
        _this.flagGroup.add(_this.OneRe_Coin6);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);

        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.dot);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 23; 
        _this.rightans2 = 56;  

    },

    gotoNinthQuestion:function(){

        _this.questionNo = 9;  //33.45

        //Ten Rupees Note  
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";
        _this.TenRs_Coin4 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-100,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin4.anchor.setTo(0.5);
        _this.TenRs_Coin4.name="TenRs_Coin4";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";
        _this.OneRe_Coin4 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-100,'NSD4_5_OneReCoin');
        _this.OneRe_Coin4.anchor.setTo(0.5);
        _this.OneRe_Coin4.name="OneRe_Coin4";
        _this.OneRe_Coin5 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-120,'NSD4_5_OneReCoin');
        _this.OneRe_Coin5.anchor.setTo(0.5);
        _this.OneRe_Coin5.name="OneRe_Coin5";

        _this.loadTextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.TenRs_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin5);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);

        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.dot);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 33; 
        _this.rightans2 = 45;  

    },

    gotoTenthQuestion:function(){

        _this.questionNo = 10;  //42.34

        //Ten Rupees Note  
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-90,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";
        _this.TenRs_Note4 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note4.anchor.setTo(0.5);
        _this.TenRs_Note4.name="TenRsNote4";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";
        _this.OneRe_Coin4 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-100,'NSD4_5_OneReCoin');
        _this.OneRe_Coin4.anchor.setTo(0.5);
        _this.OneRe_Coin4.name="OneRe_Coin4";

        _this.loadTextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin4);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.TenRs_Note4);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);

        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.dot);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 42; 
        _this.rightans2 = 34;  

    },

    gotoEleventhQuestion:function(){

        _this.questionNo = 11;  //55.23

        //Ten Rupees Note
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-100,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-90,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";
        _this.TenRs_Note4 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note4.anchor.setTo(0.5);
        _this.TenRs_Note4.name="TenRsNote4";
        _this.TenRs_Note5 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note5.anchor.setTo(0.5);
        _this.TenRs_Note5.name="TenRsNote5";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-100,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-90,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";
        _this.OneRe_Note4 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note4.anchor.setTo(0.5);
        _this.OneRe_Note4.name="OneRe_Note4";
        _this.OneRe_Note5 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note5.anchor.setTo(0.5);
        _this.OneRe_Note5.name="OneRe_Note5";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";

        _this.loadTextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.TenRs_Note4);
        _this.flagGroup.add(_this.TenRs_Note5);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);
        _this.flagGroup.add(_this.OneRe_Note4);
        _this.flagGroup.add(_this.OneRe_Note5);

        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.dot);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 55; 
        _this.rightans2 = 23;  

    },

    gotoTwelvthQuestion:function(){

        _this.questionNo = 12;  //65.35

        //Ten Rupees Note
        _this.TenRs_Note1 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-110,'NSD4_5_TenRsNote');
        _this.TenRs_Note1.anchor.setTo(0.5);
        _this.TenRs_Note1.name="TenRsNote1";
        _this.TenRs_Note2 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-100,'NSD4_5_TenRsNote');
        _this.TenRs_Note2.anchor.setTo(0.5);
        _this.TenRs_Note2.name="TenRsNote2";
        _this.TenRs_Note3 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-90,'NSD4_5_TenRsNote');
        _this.TenRs_Note3.anchor.setTo(0.5);
        _this.TenRs_Note3.name="TenRsNote3";
        _this.TenRs_Note4 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-80,'NSD4_5_TenRsNote');
        _this.TenRs_Note4.anchor.setTo(0.5);
        _this.TenRs_Note4.name="TenRsNote4";
        _this.TenRs_Note5 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-70,'NSD4_5_TenRsNote');
        _this.TenRs_Note5.anchor.setTo(0.5);
        _this.TenRs_Note5.name="TenRsNote5";
        _this.TenRs_Note6 = _this.add.sprite(_this.world.centerX-260,_this.world.centerY-60,'NSD4_5_TenRsNote');
        _this.TenRs_Note6.anchor.setTo(0.5);
        _this.TenRs_Note6.name="TenRsNote6";

        //One Rupee Note
        _this.OneRe_Note1 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-100,'NSD4_5_OneReNote');
        _this.OneRe_Note1.anchor.setTo(0.5);
        _this.OneRe_Note1.name="OneRe_Note1";
        _this.OneRe_Note2 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-90,'NSD4_5_OneReNote');
        _this.OneRe_Note2.anchor.setTo(0.5);
        _this.OneRe_Note2.name="OneRe_Note2";
        _this.OneRe_Note3 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-80,'NSD4_5_OneReNote');
        _this.OneRe_Note3.anchor.setTo(0.5);
        _this.OneRe_Note3.name="OneRe_Note3";
        _this.OneRe_Note4 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-70,'NSD4_5_OneReNote');
        _this.OneRe_Note4.anchor.setTo(0.5);
        _this.OneRe_Note4.name="OneRe_Note4";
        _this.OneRe_Note5 = _this.add.sprite(_this.world.centerX-45,_this.world.centerY-60,'NSD4_5_OneReNote');
        _this.OneRe_Note5.anchor.setTo(0.5);
        _this.OneRe_Note5.name="OneRe_Note5";

        //Ten Rupees Coin
        _this.TenRs_Coin1 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-40,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin1.anchor.setTo(0.5);
        _this.TenRs_Coin1.name="TenRs_Coin1";
        _this.TenRs_Coin2 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-60,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin2.anchor.setTo(0.5);
        _this.TenRs_Coin2.name="TenRs_Coin2";
        _this.TenRs_Coin3 = _this.add.sprite(_this.world.centerX+170,_this.world.centerY-80,'NSD4_5_TenRsCoin');
        _this.TenRs_Coin3.anchor.setTo(0.5);
        _this.TenRs_Coin3.name="TenRs_Coin3";

        //One Rupee Coin
        _this.OneRe_Coin1 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-40,'NSD4_5_OneReCoin');
        _this.OneRe_Coin1.anchor.setTo(0.5);
        _this.OneRe_Coin1.name="OneRe_Coin1";
        _this.OneRe_Coin2 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-60,'NSD4_5_OneReCoin');
        _this.OneRe_Coin2.anchor.setTo(0.5);
        _this.OneRe_Coin2.name="OneRe_Coin2";
        _this.OneRe_Coin3 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-80,'NSD4_5_OneReCoin');
        _this.OneRe_Coin3.anchor.setTo(0.5);
        _this.OneRe_Coin3.name="OneRe_Coin3";
        _this.OneRe_Coin4 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-100,'NSD4_5_OneReCoin');
        _this.OneRe_Coin4.anchor.setTo(0.5);
        _this.OneRe_Coin4.name="OneRe_Coin4";
        _this.OneRe_Coin5 = _this.add.sprite(_this.world.centerX+300,_this.world.centerY-120,'NSD4_5_OneReCoin');
        _this.OneRe_Coin5.anchor.setTo(0.5);
        _this.OneRe_Coin5.name="OneRe_Coin5";

        _this.loadTextBox();

        _this.flagGroup.add(_this.TenRs_Coin1);
        _this.flagGroup.add(_this.TenRs_Coin2);
        _this.flagGroup.add(_this.TenRs_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin1);
        _this.flagGroup.add(_this.OneRe_Coin2);
        _this.flagGroup.add(_this.OneRe_Coin3);
        _this.flagGroup.add(_this.OneRe_Coin4);
        _this.flagGroup.add(_this.OneRe_Coin5);
        _this.flagGroup.add(_this.TenRs_Note1);
        _this.flagGroup.add(_this.TenRs_Note2);
        _this.flagGroup.add(_this.TenRs_Note3);
        _this.flagGroup.add(_this.TenRs_Note4);
        _this.flagGroup.add(_this.TenRs_Note5);
        _this.flagGroup.add(_this.TenRs_Note6);
        _this.flagGroup.add(_this.OneRe_Note1);
        _this.flagGroup.add(_this.OneRe_Note2);
        _this.flagGroup.add(_this.OneRe_Note3);
        _this.flagGroup.add(_this.OneRe_Note4);
        _this.flagGroup.add(_this.OneRe_Note5);

        _this.flagGroup.add(_this.txtbox1);
        _this.flagGroup.add(_this.txtbox2);
        _this.flagGroup.add(_this.dot);

        if(_this.wrongAnswer == false){
            _this.flagGroup.x = 1000;
            _this.tween = _this.add.tween(_this.flagGroup);
            _this.tween.to({ x: 0 }, 0, 'Linear', true, 0);

            _this.tween.onComplete.add(function(){
                _this.tween = null;
            }, _this);    
        }

        _this.rightans1 = 65; 
        _this.rightans2 = 35;  

    },

    addNumberPad1:function(target){

        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box = _this.numGroup.create(480,505,'NSD4_5_Bottombar');
        _this.box.anchor.setTo(0.5);
        _this.x = 80;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,508,'NSD4_5_numberpad');  
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name =i;
            _this.numbg.frame=i;

            _this.numTxt = _this.add.text(-2,1);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            _this.numTxt.fill = '#FFFFFF';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

            _this.numbg.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked1,_this);

            _this.x+=70;
        }

        _this.objGroup.add(_this.txtbox1);
        _this.objGroup.add(_this.txtbox2);
        _this.objGroup.add(_this.txtbox3);
        _this.objGroup.add(_this.txtbox4);

        _this.eraserbtn = _this.numGroup.create(_this.x+30,508,'NSD4_5_Eraser');
        _this.eraserbtn.anchor.setTo(0.5);
        _this.eraserbtn.scale.setTo(1.1,1.1);
        _this.eraserbtn.name = "Eraser";
        _this.eraserbtn.inputEnabled = true;
        _this.eraserbtn.input.useHandCursor = true;

        _this.rightbtn = _this.numGroup.create(_this.x+100,508,'NSD4_5_TickMark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.1,1.1);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;

        _this.enterTxt1 = _this.add.text(-2,1, _this.selectedAns1);
        _this.enterTxt1.anchor.setTo(0.5);
        _this.enterTxt1.align = 'center';
        _this.enterTxt1.font = 'myfont';
        _this.enterTxt1.name = "enterTxt";
        _this.enterTxt1.fontSize = 50;
        _this.enterTxt1.fontWeight = 'normal';
        _this.enterTxt1.fill = '#00C4EB';
        _this.enterTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox1.addChild(_this.enterTxt1);

        _this.enterTxt2 = _this.add.text(-2,1, _this.selectedAns2);
        _this.enterTxt2.anchor.setTo(0.5);
        _this.enterTxt2.align = 'center';
        _this.enterTxt2.font = 'myfont';
        _this.enterTxt2.name = "enterTxt";
        _this.enterTxt2.fontSize = 50;
        _this.enterTxt2.fontWeight = 'normal';
        _this.enterTxt2.fill = '#00C4EB';
        _this.enterTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox2.addChild(_this.enterTxt2);

        _this.enterTxt3 = _this.add.text(-2,1, _this.selectedAns3);
        _this.enterTxt3.anchor.setTo(0.5);
        _this.enterTxt3.align = 'center';
        _this.enterTxt3.font = 'myfont';
        _this.enterTxt3.name = "enterTxt";
        _this.enterTxt3.fontSize = 50;
        _this.enterTxt3.fontWeight = 'normal';
        _this.enterTxt3.fill = '#00C4EB';
        _this.enterTxt3.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox3.addChild(_this.enterTxt3);

        _this.enterTxt4 = _this.add.text(-2,1, _this.selectedAns4);
        _this.enterTxt4.anchor.setTo(0.5);
        _this.enterTxt4.align = 'center';
        _this.enterTxt4.font = 'myfont';
        _this.enterTxt4.name = "enterTxt";
        _this.enterTxt4.fontSize = 50;
        _this.enterTxt4.fontWeight = 'normal';
        _this.enterTxt4.fill = '#00C4EB';
        _this.enterTxt4.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox4.addChild(_this.enterTxt4);

        _this.eraserbtn.events.onInputDown.add(function(){
            commonNavBar_nsd4_5.playClickSound();
            _this.eraserbtn.frame=1;
            _this.time.events.add(500, function(){    
                _this.eraserbtn.frame=0;
            },_this);

            if(_this.txtbox1Pressed){
                _this.enterTxt1.setText("");
                _this.selectedAns1="";
            }
            if(_this.txtbox2Pressed){
                _this.enterTxt2.setText("");
                _this.selectedAns2="";
            }
            if(_this.txtbox3Pressed){
                _this.enterTxt3.setText("");
                _this.selectedAns3="";
            }
            if(_this.txtbox4Pressed){
                _this.enterTxt4.setText("");
                _this.selectedAns4="";
            }

        },_this);

        _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            commonNavBar_nsd4_5.playClickSound();

            if(( _this.selectedAns1 == _this.rightans1      ||
                _this.selectedAns1 == ""+_this.rightans1   ||
                _this.selectedAns1 == ""+_this.rightans1  ) && 
               ( _this.selectedAns2 == _this.rightans2      ||
                _this.selectedAns2 == ""+_this.rightans2   ||
                _this.selectedAns2 == ""+_this.rightans2 ) &&
               ( _this.selectedAns3 == _this.rightans3      ||
                _this.selectedAns3 == ""+_this.rightans3   ||
                _this.selectedAns3 == ""+_this.rightans3 ) &&
               ( _this.selectedAns4 == _this.rightans4      ||
                _this.selectedAns4 == ""+_this.rightAns4   ||
                _this.selectedAns4 == ""+_this.rightAns4 )) 

            {
                console.log("correct");

                _this.wrongAnswer = false;

                target.events.onInputDown.removeAll();
                _this.rightbtn.frame=1;

                _this.txtbox1.frame=1;
                _this.txtbox2.frame=1;
                _this.txtbox3.frame=1;
                _this.txtbox4.frame=1;

                _this.celebr = _this.add.audio('celebr');
                _this.celebr.play();

                _this.starAnim = _this.starsGroup.getChildAt(_this.count);
                _this.starAnim.smoothed = false;
                _this.anim4 = _this.starAnim.animations.add('star');
                _this.anim4.play();
                _this.time.events.add(1000, function(){    
                    _this.rightbtn.frame=0;
                },_this);

                _this.eraserbtn.inputEnabled = false;

                _this.time.events.add(2000, function(){_this.removeCelebration();},_this);

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

                _this.wrongAnswer = true;

                _this.rightbtn.frame=1;
                _this.selectedAns1 = "";
                _this.selectedAns2 = "";
                _this.selectedAns3 = "";
                _this.selectedAns4 = "";
                _this.enterTxt1.setText("");
                _this.enterTxt2.setText("");
                _this.enterTxt3.setText("");
                _this.enterTxt4.setText("");
                _this.shake.shake(10, _this.objGroup);
                _this.wmusic = _this.add.audio('waudio');
                _this.wmusic.play(); 

                _this.time.events.add(500, function(){   
                    _this.rightbtn.frame=0;
                    _this.numGroup.visible=false;
                    _this.txtbox1.destroy();
                    _this.txtbox2.destroy();
                    _this.txtbox3.destroy();
                    _this.txtbox4.destroy();
                    _this.flagGroup.destroy();
                    _this.toCheckNumberPad=false;
                    _this.getQuestion();
                },_this);
            }
        },_this);

        _this.numGroup.visible=false;
        _this.time.events.add(200, function(){
            _this.numGroup.visible=true;
            _this.numGroup.y=100;
            _this.Maintween = _this.add.tween(_this.numGroup);
            _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
        },_this);

    },

    addNumberPad2:function(target){

        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box = _this.numGroup.create(480,505,'NSD4_5_Bottombar');
        _this.box.anchor.setTo(0.5);
        _this.x = 80;

        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,508,'NSD4_5_numberpad');  
            _this.numbg.anchor.setTo(0.5);
            _this.numbg.scale.setTo(0.6,0.6);
            _this.numbg.name =i;
            _this.numbg.frame=i;

            _this.numTxt = _this.add.text(-2,1);
            _this.numTxt.anchor.setTo(0.5);
            _this.numTxt.align = 'center';

            _this.numTxt.font = 'Alte Haas Grotesk';
            _this.numTxt.fontSize = 24;
            _this.numTxt.fill = '#FFFFFF';

            _this.numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);

            _this.numbg.addChild(_this.numTxt);

            _this.numbg.inputEnabled = true;
            _this.numbg.input.useHandCursor = true;
            _this.numbg.events.onInputDown.add(_this.numClicked2,_this);

            _this.x+=70;
        }

        _this.objGroup.add(_this.txtbox1);
        _this.objGroup.add(_this.txtbox2);

        _this.eraserbtn = _this.numGroup.create(_this.x+30,508,'NSD4_5_Eraser');
        _this.eraserbtn.anchor.setTo(0.5);
        _this.eraserbtn.scale.setTo(1.1,1.1);
        _this.eraserbtn.name = "Eraser";
        _this.eraserbtn.inputEnabled = true;
        _this.eraserbtn.input.useHandCursor = true;

        _this.rightbtn = _this.numGroup.create(_this.x+100,508,'NSD4_5_TickMark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.scale.setTo(1.1,1.1);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;

        _this.enterTxt1 = _this.add.text(-2,1, _this.selectedAns1);
        _this.enterTxt1.anchor.setTo(0.5);
        _this.enterTxt1.align = 'center';
        _this.enterTxt1.font = 'myfont';
        _this.enterTxt1.name = "enterTxt";
        _this.enterTxt1.fontSize = 50;
        _this.enterTxt1.fontWeight = 'normal';
        _this.enterTxt1.fill = '#00C4EB';
        _this.enterTxt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox1.addChild(_this.enterTxt1);

        _this.enterTxt2 = _this.add.text(-2,1, _this.selectedAns2);
        _this.enterTxt2.anchor.setTo(0.5);
        _this.enterTxt2.align = 'center';
        _this.enterTxt2.font = 'myfont';
        _this.enterTxt2.name = "enterTxt";
        _this.enterTxt2.fontSize = 50;
        _this.enterTxt2.fontWeight = 'normal';
        _this.enterTxt2.fill = '#00C4EB';
        _this.enterTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox2.addChild(_this.enterTxt2);

        _this.eraserbtn.events.onInputDown.add(function(){
            commonNavBar_nsd4_5.playClickSound();
            _this.eraserbtn.frame=1;
            _this.time.events.add(500, function(){    
                _this.eraserbtn.frame=0;
            },_this);

            if(_this.txtbox1Pressed){
                _this.enterTxt1.setText("");
                _this.selectedAns1="";
                _this.selAns1="";
            }
            if(_this.txtbox2Pressed){
                _this.enterTxt2.setText("");
                _this.selectedAns2="";
                 _this.selAns2="";
            }

        },_this);

        _this.rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            commonNavBar_nsd4_5.playClickSound();

            if(( _this.selectedAns1 == _this.rightans1     ||
                _this.selectedAns1 == ""+_this.rightans1   ||
                _this.selectedAns1 == ""+_this.rightans1 ) && 
               ( _this.selectedAns2 == _this.rightans2    ||
                _this.selectedAns2 == ""+_this.rightans2  ||
                _this.selectedAns2 == ""+_this.rightans2))  
            {
                console.log("correct");

                _this.wrongAnswer = false;

                target.events.onInputDown.removeAll();
                _this.rightbtn.frame=1;

                _this.txtbox1.frame=1;
                _this.txtbox2.frame=1;

                _this.celebr = _this.add.audio('celebr');
                _this.celebr.play();

                _this.starAnim = _this.starsGroup.getChildAt(_this.count);
                _this.starAnim.smoothed = false;
                _this.anim4 = _this.starAnim.animations.add('star');
                _this.anim4.play();
                _this.time.events.add(1000, function(){    
                    _this.rightbtn.frame=0;
                },_this);

                _this.eraserbtn.inputEnabled = false;

                _this.time.events.add(2000, function(){_this.removeCelebration();},_this);

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

                _this.wrongAnswer = true;

                _this.rightbtn.frame=1;
                _this.selectedAns1 = "";
                _this.selectedAns2 = "";
                _this.selAns1="";
                _this.selAns2="";
                _this.enterTxt1.setText("");
                _this.enterTxt2.setText("");
                _this.shake.shake(10, _this.objGroup);
                _this.wmusic = _this.add.audio('waudio');
                _this.wmusic.play(); 

                _this.time.events.add(500, function(){   
                    _this.rightbtn.frame=0;
                    _this.numGroup.visible=false;
                    _this.txtbox1.destroy();
                    _this.txtbox2.destroy();
                    _this.flagGroup.destroy();
                    _this.toCheckNumberPad=false;
                    _this.getQuestion();
                },_this);
            }
        },_this);

        _this.numGroup.visible=false;
        _this.time.events.add(200, function(){
            _this.numGroup.visible=true;
            _this.numGroup.y=100;
            _this.Maintween = _this.add.tween(_this.numGroup);
            _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
        },_this);

    },

    numClicked1:function(target){

        commonNavBar_nsd4_5.playTapSound();

        if(_this.txtbox1Pressed){

            _this.selectedAns1 = target.name;
            _this.txtbox1.getChildAt(0).setText(_this.selectedAns1);

            _this.txtbox2.frame=1;
            _this.txtbox1.frame=0;
            _this.txtbox3.frame=0;
            _this.txtbox4.frame=0;

            _this.txtbox2Pressed=true;
            _this.txtbox1Pressed=false;
            _this.txtbox3Pressed=false;
            _this.txtbox4Pressed=false;
        }
        else if(_this.txtbox2Pressed){
            _this.selectedAns2 = target.name;
            _this.txtbox2.getChildAt(0).setText(_this.selectedAns2);

            _this.txtbox3.frame=1;
            _this.txtbox1.frame=0;
            _this.txtbox2.frame=0;
            _this.txtbox4.frame=0;

            _this.txtbox3Pressed=true;
            _this.txtbox1Pressed=false;
            _this.txtbox2Pressed=false;
            _this.txtbox4Pressed=false;
        }
        else if(_this.txtbox3Pressed){
            _this.selectedAns3 = target.name;
            _this.txtbox3.getChildAt(0).setText(_this.selectedAns3);

            _this.txtbox4.frame=1;
            _this.txtbox1.frame=0;
            _this.txtbox2.frame=0;
            _this.txtbox3.frame=0;

            _this.txtbox4Pressed=true;
            _this.txtbox1Pressed=false;
            _this.txtbox2Pressed=false;
            _this.txtbox3Pressed=false;
        }
        else if(_this.txtbox4Pressed){
            _this.selectedAns4 = target.name;
            _this.txtbox4.getChildAt(0).setText(_this.selectedAns4);

            _this.txtbox1.frame=1;
            _this.txtbox2.frame=0;
            _this.txtbox3.frame=0;
            _this.txtbox4.frame=0;

            _this.txtbox1Pressed=true;
            _this.txtbox2Pressed=false;
            _this.txtbox3Pressed=false;
            _this.txtbox4Pressed=false;
        }

    },

    numClicked2:function(target){

        commonNavBar_nsd4_5.playTapSound();

        if(_this.txtbox1Pressed){
            if(_this.selAns1.length < 2 ){
                _this.selAns1 += target.name;
                _this.txtbox1.getChildAt(0).setText(_this.selAns1);
                _this.selectedAns1 = _this.selAns1;
            }
        }
        else if(_this.txtbox2Pressed){
            if(_this.selAns2.length < 2){
                _this.selAns2 += target.name;
                _this.txtbox2.getChildAt(0).setText(_this.selAns2);
                _this.selectedAns2 = _this.selAns2;
            }
        }
        if(_this.selAns1.length == 2 ){
            _this.txtbox2.frame=1;
            _this.txtbox1.frame=0;
            _this.txtbox2Pressed=true;
            _this.txtbox1Pressed=false;
            _this.selAns1= "";
        }
        if(_this.selAns2.length == 2 ){
            _this.txtbox1.frame=1;
            _this.txtbox2.frame=0;
            _this.txtbox1Pressed=true;
            _this.txtbox2Pressed=false;
            _this.selAns2= "";
        }

    },

    removeCelebration:function()
    {

        if(_this.timer1)
        {
            _this.timer1.stop();
        }
        _this.celebration1 = false;

        _this.numGroup.destroy();
        _this.objGroup.destroy();

        if(_this.enterTxt1)
            _this.enterTxt1.destroy();
        if(_this.enterTxt2)
            _this.enterTxt2.destroy();
        if(_this.enterTxt3)
            _this.enterTxt3.destroy();
        if(_this.enterTxt4)
            _this.enterTxt4.destroy();

        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.selectedAns4 = "";

        _this.toCheckNumberPad=false;
        _this.flagGroup.destroy();

        _this.no11++;

        if(_this.no11 < 6)
        {
            _this.getQuestion();

            _this.starsGroup.getChildAt(_this.count+1).frame = 2; 
            _this.count++;
        }
        else
        {
            var timerStopVar = commonNavBar_nsd4_5.stopTimer();
            

            _this.state.start('nsd4_5Score',true,false);
        }
    },

    checkOverlap:function(spriteA, spriteB) 
    {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    update:function(){

    },

    getVoice:function()
    {   
        _this.stopVoice();  

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/English/nsd4.5.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Hindi/nsd4.5.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Kannada/nsd4.5.mp3");
        }
        else if(window.languageSelected == "Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Gujarati/nsd4.5.mp3");
        }
		else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Marathi/nsd4.5.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Telugu/nsd4.5.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Tamil/nsd4.5.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Urdu/nsd4.5.mp3");
                    }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/nsd4.5/Odiya/nsd4.5.mp3");
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
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

    shutdown:function()
    {
         commonNavBar_nsd4_5.stopTimer();
            commonNavBar_nsd4_5.stopVoice();
            commonNavBar_nsd4_5.disableNavBar();

            commonNavBar_nsd4_5.navBar= null;
            commonNavBar_nsd4_5.speakerbtn= null;
            commonNavBar_nsd4_5.backbtn= null;
        _this.stopVoice();
        commonNavBar_nsd4_5.stopVoice();
    }

};