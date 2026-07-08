Game.comparison_NSCG_4_2level1=function(){
};
Game.comparison_NSCG_4_2level1.prototype={
    init:function(param,score)
    {
        _this = this;
        //	telInitializer.gameIdInit("unity4_4_1",gradeSelected);

        this.Stararr = param;
        this.score = score;
	if(window.quizQuest == false)
        this.score =parseInt(window.score);
        telInitializer2.gameIdInit2("NSCG4.2");
    },

    preload:function(game){
        if(!window.grade1NSC4){

            window.grade1NSC4 = true;

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

        this.load.image('Level441_bg1',window.baseUrl+'assets/gradeAssets/4.4.1/BG.png');
        this.load.image('boy1',window.baseUrl+'assets/gradeAssets/4.4.1/Boy1.png');
        this.load.image('boy2',window.baseUrl+'assets/gradeAssets/4.4.1/Boy2.png');
        this.load.image('boy3',window.baseUrl+'assets/gradeAssets/4.4.1/Boy3.png');
        this.load.image('Tree',window.baseUrl+'assets/gradeAssets/4.4.1/Tree.png');
    
      
        

        this.load.atlas('box1',window.baseUrl+'assets/gradeAssets/4.4.1/box1.png' ,window.baseUrl+'json/gradeJson/4.4.1/box1.json');
        this.load.atlas('box2',window.baseUrl+'assets/gradeAssets/4.4.1/box 2.png' ,window.baseUrl+'json/gradeJson/4.4.1/box 2.json');
        this.load.atlas('BoyhandsUp',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp.json');
        this.load.atlas('BoyRightPointing',window.baseUrl+'assets/gradeAssets/4.4.1/BoyRightPointing.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyRightPointing.json');
        this.load.atlas('BoyWrong',window.baseUrl+'assets/gradeAssets/4.4.1/BoyWrong.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyWrong.json');
        // this.load.atlas('tik1',window.baseUrl+'assets/gradeAssets/4.4.1/tik 1.png' ,window.baseUrl+'assets/gradeAssets/4.4.1/tik 1.json');
        this.load.atlas('BoyJumping',window.baseUrl+'assets/gradeAssets/4.4.1/BoyJumping.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyJumping.json');
        this.load.atlas('BoyhandsUp',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp.json');
        this.load.atlas('BoyLeftPointing',window.baseUrl+'assets/gradeAssets/4.4.1/BoyLeftPointing.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyLeftPointing.json');
    
        this.load.atlas('BoyRightPointing_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyRightPointing_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyRightPointing_blue.json');
        this.load.atlas('BoyJumping_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyJumping_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyJumping_blue.json');
        this.load.atlas('BoyhandsUp_blue',window.baseUrl+'assets/gradeAssets/4.4.1/BoyhandsUp_blue.png' ,window.baseUrl+'json/gradeJson/4.4.1/BoyhandsUp_blue.json');



        this.load.atlas('tickBtn',window.baseUrl+'assets/gradeAssets/4.4.1/rightmark.png' ,window.baseUrl+'json/gradeJson/4.4.1/rightmark.json');
       

    }

    },

    create:function(game){
        this.Stararr = [];
        _this.amplify = null;

        _this.sceneCount = 0;
        this.hintparams = [];
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.AnsTimerCount = 0;

        _this.dragno=0;

        _this.selectedorder=[];
        _this.rightorder=[];
		_this.addedArray = new Array(); 
        _this.no1=0;
        _this.qArrays = [1,3,5,7,9,11];
        _this.qArrays = _this.shuffle( _this.qArrays);
        _this.count=0;
        _this.count1=0;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add( _this.shake);
        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();
        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level442_bg1');

		if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/English/Game 4.4.1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Hindi/Game 4.4.1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Kannada/Game 4.4.1.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/4.4.1/4.4.1.mp3";
        }
		else if(window.languageSelected == "Marathi")
                        {
                            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Marathi/4.4.1.mp3";
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Telugu/4.4.1.mp3";
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Tamil/4.4.1.mp3";
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Urdu/4.4.1.mp3";
                        }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Odiya/4.4.1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        //_this.soundurl = "questionSounds/4.4.1/English/Game 4.4.1.mp3";
        commonNavBar.addNavBar(game,_this.soundurl,"numbersense3");
        commonNavBar.addTimerToTheGame(game,0,0,0);

        commonNavBar.addScore(game,this.score);
        this.hintparams=['NSCG4.2','level1',false,true,true,2];
        commonNavBar.addHint(game,this.hintparams);
        _this.Tree = _this.add.sprite(400,70,'Tree');
        _this.Tree.scale.setTo(1,1);
        _this.BoyLeftPointing = _this.add.sprite(350,400,'BoyLeftPointing');
        _this.BoyLeftPointing.scale.setTo(1,1);
        _this.BoyLeftPointing.frame = 0;

        _this.numbox1Pressed=false;
        _this.numbox2Pressed=false;
        _this.numbox3Pressed=false;
        _this.numbox4Pressed=false;
        _this.numbox5Pressed=false;


        setTimeout(function(){ _this.BoyLeftPointing.frame = 5;
                             }, 100);

        setTimeout(function(){ _this.BoyLeftPointing.frame = 10;
                             }, 200);
        setTimeout(function(){ _this.BoyLeftPointing.frame = 15;
                             }, 300);
        _this.BoyLeftPointing.frame = 21;

        _this.numBox1 = _this.add.sprite(200,80,'box1');
        _this.numBox1.name = "numBox1";
        _this.numBox1.frame=0;

        _this.numBox2 = _this.add.sprite(200,160,'box1');
        _this.numBox2.name = "numBox2";
        _this.numBox2.frame=0;

        _this.numBox3 = _this.add.sprite(200,240,'box1');
        _this.numBox3.name = "numBox3";
        _this.numBox3.frame=0;

        _this.numBox4 = _this.add.sprite(200,320,'box1');
        _this.numBox4.name = "numBox4";
        _this.numBox4.frame=0;

        _this.numBox5 = _this.add.sprite(200,400,'box1');
        _this.numBox5.name = "numBox5";
        _this.numBox5.frame=0;


        _this.shakeGroup = _this.add.group();
        _this.numBox1 = _this.add.sprite(570,125,'box1');
        _this.numBox1.name = "numBox1";
        _this.numBox2 = _this.add.sprite(479,185,'box1');
        _this.numBox2.name = "numBox2";
        _this.numBox3 = _this.add.sprite(570,225,'box1');
        _this.numBox3.name = "numBox3";
        _this.numBox4 = _this.add.sprite(479,277,'box1');
        _this.numBox4.name = "numBox4";
        _this.numBox5 = _this.add.sprite(570,327,'box1');
        _this.numBox5.name = "numBox5";

        _this.numBox1.scale.setTo(0.9,0.9);
        _this.numBox2.scale.setTo(0.9,0.9);
        _this.numBox3.scale.setTo(0.9,0.9);
        _this.numBox4.scale.setTo(0.9,0.9);

        _this.numBox5.scale.setTo(0.9,0.9);

        _this.shakeGroup.add(_this.numBox5);
        _this.shakeGroup.add(_this.numBox4);
        _this.shakeGroup.add(_this.numBox3);
        _this.shakeGroup.add(_this.numBox2);
        _this.shakeGroup.add(_this.numBox1);

        _this.numBox1.canAdd = true;
        _this.numBox2.canAdd = false;
        _this.numBox3.canAdd = false;
        _this.numBox4.canAdd = false;
        _this.numBox5.canAdd = false;

        _this.numBox5.frame = 1;
        setTimeout(function(){ _this.numBox5.frame = 0;
                             }, 1000);
        setTimeout(function(){ _this.numBox4.frame = 1;
                             }, 1000);

        setTimeout(function(){ _this.numBox4.frame = 0;
                             }, 2000);
        setTimeout(function(){ _this.numBox3.frame = 1;
                             }, 2000);
        setTimeout(function(){ _this.numBox3.frame = 0;
                             }, 3000);
        setTimeout(function(){ _this.numBox2.frame = 1;
                             }, 3000);
        setTimeout(function(){ _this.numBox2.frame = 0;
                             }, 4000);
        setTimeout(function(){ _this.numBox1.frame = 1;
                             }, 4000);
        setTimeout(function(){ _this.numBox1.frame = 0;
                             }, 5000);


        _this.no1=0;
        _this.qArrays = [1,2,3,4,5,6,7,8,11,12,13,15];
        _this.qArrays = _this.shuffle( _this.qArrays);

        _this.count=0;
        _this.count1=0;
        _this.generateStarsForTheScene(8);
        // _this.no1++;
        _this.getQuestion();
		_this.getVoice();
        //commonNavBar.getVoice(_this.soundurl);

		_this.graphics = game.add.graphics(0, 0);

        // set a fill and line style
        _this.graphics.beginFill(0xFF3300);
        _this.graphics.lineStyle(10, 0xffd900, 1);
        _this.graphics.drawRect(130, 120, 250, 300);
        _this.graphics.alpha = 0;
    },

    boxBlink:function(){

        _this.numBox5.frame = 1;
        setTimeout(function(){ _this.numBox5.frame = 0;
                             }, 1000);
        setTimeout(function(){ _this.numBox4.frame = 1;
                             }, 1000);

        setTimeout(function(){ _this.numBox4.frame = 0;
                             }, 2000);
        setTimeout(function(){ _this.numBox3.frame = 1;
                             }, 2000);
        setTimeout(function(){ _this.numBox3.frame = 0;
                             }, 3000);
        setTimeout(function(){ _this.numBox2.frame = 1;
                             }, 3000);
        setTimeout(function(){ _this.numBox2.frame = 0;
                             }, 4000);
        setTimeout(function(){ _this.numBox1.frame = 1;
                             }, 4000);
        setTimeout(function(){ _this.numBox1.frame = 0;
                             }, 5000);
    },

    //    toCheckAnswer:function(target){
    //        //console.log("tickmark "+_this.tickMark.inputEnabled);
    //        this.tickMark.frame = 1;
    //
    //        setTimeout(function(){ _this.tickMark.frame = 0;
    //                             }, 200);
    //
    //        commonNavBar.playClickSound();
    //        _this.tickMark.frame = 0;
    //        var rightans=1;
    //        selectedAns=1;
    //
    //        ////console.log("check answer"+_this.checkMangoes);
    //        if(selectedAns==rightans){
    //            _this.correctAns(target);
    //        }
    //    },

    generatemangoCeleb:function(){
        _this.shakeObjectGroup.add(_this.basketback);
        _this.objectGroup = _this.add.group();
        var x = 500;
        var x1 = 515;
        var x2 = 530;
        var y = 370;
        var y1 = 342;
        var y2 = 312;

        for(var i=0;i<9;i++)
        {
            if(i>4 && i<9){

                box =   _this.objectGroup.create(x,y,'mangoCeleb');
                box.name = "mango"+i;
                box.anchor.setTo(0.5);
                box.scale.setTo(0.7,0.7);
                x+=30;
            }
            else if(i>1 && i<5){

                box =   _this.objectGroup.create(x1,y1,'mangoCeleb');
                box.name = "mango"+i;
                box.anchor.setTo(0.5);
                box.scale.setTo(0.7,0.7);
                x1+=30;
            }
            else if(i<2){
                box =   _this.objectGroup.create(x2,y2,'mangoCeleb');
                box.name = "mango"+i;
                box.anchor.setTo(0.5);
                box.scale.setTo(0.7,0.7);
                x2+=30;
            }
            _this.objectGroup.getChildAt(i).visible = false;

            box.inputEnabled = true;
            box.input.useHandCursor = true;
            box.events.onInputDown.add(_this.mangoCelebClicked,_this);
        }
        _this.basket = _this.add.sprite(450,380,'basket');
        _this.basket.scale.setTo(0.5,0.5);
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

    getQuestion:function(target)
    {  
        _this.selectedorder=[];
        _this.rightorder=[];
		_this.addedArray =[];
        commonNavBar.startTimer(this);
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;

        //commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            //commonNavBar.speakerClicked(_this.soundurl);
			_this.stopVoice();
        },this);

        _this.BoyJumping2 = _this.add.sprite(605,223,'BoyJumping');
        _this.BoyJumping2.visible=false;

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = false;
       
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(211,92,'box');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.numBox11.xpos=211;
        _this.numBox11.ypos=92;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(211,172,'box');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.numBox21.xpos=211;
        _this.numBox21.ypos=172;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(211,252,'box');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.numBox31.xpos=211;
        _this.numBox31.ypos=252;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(211,332,'box');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.numBox41.xpos=211;
        _this.numBox41.ypos=332;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(211,412,'box');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.numBox51.xpos=211;
        _this.numBox51.ypos=412;
        _this.boxBlink();
        ////console.log(" _this.no1"+ _this.no1);
        //_this.addNumberPad();
        switch(_this.qArrays[ _this.no1])      
        {
            case 1:_this.gotoFirstQuestion();
                break;
            case 2: _this.gotoSecondQuestion();
                break;
            case 3: _this.gotoThirdQuestion();
                break;
            case 4: _this.gotoFourthQuestion();
                break;
            case 5: _this.gotoFifthQuestion();
                break;
            case 6: _this.gotoSixthQuestion();
                break;
            case 7: _this.gotoSeventhQuestion();
                break;
            case 8: _this.gotoEighthQuestion();
                break;
            case 9: _this.gotoNinthQuestion();
                break;
            case 10: _this.gotoTenthQuestion();
                break;
            case 11: _this.gotoEleventhQuestion();
                break;
            case 12: _this.gotoTwelvethQuestion();
                break;
            case 13: _this.gotoThirteenthQuestion();
                break;
            case 14: _this.gotoFourteenthQuestion();
                break;
            case 15: _this.gotoFifteenthQuestion();
                break;

        }
        _this.questionid = 1;
        telInitializer2.gameQuestionStart(this,_this.questionid);

        commonNavBar.enableHintIcon();
    },
	 dragStart:function(target){
        
       
            if(target.x>300)
                {
                    _this.dragno--;
                    _this.increment = true;
                    _this.canDrag = true;
                    _this.candrag1 = false;
                }
        else
            {
                _this.canDrag = false;
                _this.candrag1 = true;
            }
        },
dragStop:function(target){
                commonNavBar.playClickSound();
        
        //alert(_this.dragno);
                //  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
                //  _this.tickMark.scale.setTo(1.25,1.25);
                //  _this.tickMark.inputEnabled = true;
                //  _this.tickMark.events.onInputDown.add(function(){
                //  _this.toCheckAnswer();
                //  },_this);    
                
                
                if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(0)) && _this.dragno==0 &&_this.candrag1)
                {
					
		
                    _this.addedArray.push(target);
                    if( _this.BoyJumping2)
                        {
                             _this.BoyJumping2.kill();
                        }
                    
                    _this.dragno++;
                    target.frame = 1;
                    //target.inputEnabled = false;
                    target.x =  '579.5';
                    target.y =  '332.5';
                    _this.BoyLeftPointing.kill();
                    _this.BoyJumping2 = _this.add.sprite(350,400,'BoyJumping');
                    _this.BoyJumping2.scale.setTo(1,1);
                    _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping2.animations.play('BoyJumping');  
                    _this.BoyJumping2.x=350;
                    _this.BoyJumping2.y=400;
                    var M1 = this.add.tween(_this.BoyJumping2);
                    M1.to({ x: 605,y:223}, 0, 'Linear', true, 0);    

                }
                else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(1)) && _this.dragno==1 &&_this.candrag1){
                    _this.addedArray.push(target);
                    _this.dragno++;
                    target.frame = 1;
                    //target.inputEnabled = false;
                    target.x =  '482.5';
                    target.y =  '283.5';
                    _this.BoyJumping2.kill();                          
                    _this.BoyJumping2 = _this.add.sprite(605,223,'BoyJumping');
                    _this.BoyJumping2.scale.setTo(1,1);
                    _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping2.animations.play('BoyJumping');  
                    _this.BoyJumping2.x=605;
                    _this.BoyJumping2.y=223;
                    var M1 = this.add.tween(_this.BoyJumping2);
                    M1.to({ x: 430,y:172.5}, 0, 'Linear', true, 0);
                }
                else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(2)) && _this.dragno==2 &&_this.candrag1){
                    _this.addedArray.push(target);
                    _this.dragno++;
                    target.frame = 1;
                    //target.inputEnabled = false;
                    target.x =  '579.5';
                    target.y =  '232.5';
                    _this.BoyJumping2.kill();
                    _this.BoyJumping2 = _this.add.sprite(605,122.5,'BoyJumping');
                    _this.BoyJumping2.scale.setTo(1,1);
                    _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping2.animations.play('BoyJumping');  
                    _this.BoyJumping2.x=430;
                    _this.BoyJumping2.y=172.5;
                    var M1 = this.add.tween(_this.BoyJumping2);
                    M1.to({ x: 605,y:122.5}, 0, 'Linear', true, 0);
                }else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(3)) && _this.dragno==3 &&_this.candrag1){
                    _this.addedArray.push(target);
                    _this.dragno++;
                    target.frame = 1;
                   // target.inputEnabled = false;
                    target.x =  '482.5';
                    target.y =  '190.5';
                    _this.BoyJumping2.kill();
                    _this.BoyJumping2 = _this.add.sprite(605,122.5,'BoyJumping');
                    _this.BoyJumping2.scale.setTo(1,1);
                    _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping2.animations.play('BoyJumping');  
                    _this.BoyJumping2.x=605;
                    _this.BoyJumping2.y=122.5;
                    var M1 = this.add.tween(_this.BoyJumping2);
                    M1.to({ x: 430,y:80}, 0, 'Linear', true, 0);
                }else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(4)) && _this.dragno==4 &&_this.candrag1){
					
					
					_this.tickMark.inputEnabled = true;
					_this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
					
                    _this.addedArray.push(target);
                    _this.dragno++;
                    target.frame = 1;
                    //target.inputEnabled = false;
                    target.x =  '579.5';
                    target.y =  '132.5';
                    _this.BoyJumping2.kill();
                    _this.BoyJumping2 = _this.add.sprite(430,80,'BoyJumping');
                    _this.BoyJumping2.scale.setTo(1,1);
                    _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping2.animations.play('BoyJumping');  
                    _this.BoyJumping2.x=430;
                    _this.BoyJumping2.y=80;
                    var M1 = this.add.tween(_this.BoyJumping2);
                    M1.to({ x: 605,y:26}, 0, 'Linear', true, 0);
                }
                else if(_this.checkOverlap(target,_this.graphics) && _this.canDrag ){
                    if(_this.addedArray.length!=0)
                    {
                        _this.addedArray.pop();
                    }
                    //_this.dragno--;
                    target.frame = 0;
                    //target.inputEnabled = false;
                    target.x =  target.xpos;
                    target.y =  target.ypos;
                   _this.getboyToDown();
                }
                else{
//                    commonNavBar.playWrongCelebrationSound();
                    console.log(target.name);
                    
                    target.x =  _this.wx;
                    target.y =  _this.wy;
                    
                    
                    
                    if(_this.increment)
                    {
                        _this.dragno++;
                        //target.inputEnabled = false;
                    }
                    target = null;
                    
                }
                if(target != null){
                    _this.selectedorder.push(target.value);     
                    target.events.onDragStop.removeAll(); 
                }
        
            for(var i=0;i<_this.addedArray.length;i++)
                {
                    _this.addedArray[i].inputEnabled = false;
                }
        
        _this.addedArray = _this.removeDuplicates(_this.addedArray); 
        
        if(_this.addedArray.length!=0)
            {
            _this.addedArray[_this.addedArray.length-1].inputEnabled = true;
            }
             console.log( _this.addedArray); 

            },
    
    removeDuplicates:function(names)
    {
        return names.slice().sort(function(a,b){return a > b}).reduce(function(a,b){if (a.slice(-1)[0] !== b) a.push(b);return a;},[]);
    },
    
    dragnumbers1:function(target){
        console.log("targt "+_this.dragno);
        _this.wx=target.x;
        _this.wy=target.y;

        _this.numBox1.canAdd = true;

        target.input.enableDrag(true);
        _this.increment = false;

        target.events.onDragStart.add(_this.dragStart,this);
        
        
        target.events.onDragStop.add(_this.dragStop,this);

            

    },
    
    getboyToDown:function()
    {
        console.log("getBoyDown "+_this.dragno);
    if(_this.dragno == 4)
        {
        //_this.tempArray[3].inputEnabled = true;
        _this.BoyJumping2.kill();
        _this.BoyJumping2 = _this.add.sprite(605,26,'BoyJumping');
        _this.BoyJumping2.scale.setTo(1,1);
        /*
      _this.BoySadAnim.animations.add('BoySadAnim',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
      */
        _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
        _this.BoyJumping2.animations.play('BoyJumping');  
        _this.BoyJumping2.x=605;
        _this.BoyJumping2.y=26;
        var M1 = this.add.tween(_this.BoyJumping2);
        M1.to({ x: 430,y:80}, 0, 'Linear', true, 0);
        //_this.BoySadAnim.kill();
      }
        if(_this.dragno == 3)
           { //   this.time.events.add(10,function(){
            //_this.tempArray[2].inputEnabled = true;
            _this.BoyJumping2.kill();
            _this.BoyJumping2 = _this.add.sprite(430,80,'BoyJumping');
            _this.BoyJumping2.scale.setTo(1,1);
            _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
            _this.BoyJumping2.animations.play('BoyJumping');  
            var M1 = this.add.tween(_this.BoyJumping2);
            M1.to({ x: 605,y:122.5}, 0, 'Linear', true, 0);
        }
            if(_this.dragno == 2)
            {
                //_this.tempArray[1].inputEnabled = true;
            //M1.onComplete.add(function(){
                //  this.time.events.add(10,function(){
                _this.BoyJumping2.kill();
                _this.BoyJumping2 = _this.add.sprite(605,122.5,'BoyJumping');
                _this.BoyJumping2.scale.setTo(1,1);
                _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
                _this.BoyJumping2.animations.play('BoyJumping');  
                var M1 = this.add.tween(_this.BoyJumping2);
                M1.to({ x: 430,y:172.5}, 0, 'Linear', true, 0);
            }
        if(_this.dragno ==1)
            {
                if(_this.tempArray)
                    //_this.tempArray[0].inputEnabled = true;
                console.log("VVV");
                //M1.onComplete.add(function(){
                    //  this.time.events.add(10,function(){ 
                    _this.BoyJumping2.kill();
                    _this.BoyJumping2 = _this.add.sprite(430,172.5,'BoyJumping');
                    _this.BoyJumping2.scale.setTo(1,1);
                    _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping2.animations.play('BoyJumping');  
                    var M1 = this.add.tween(_this.BoyJumping2);
                    M1.to({ x: 605,y:223}, 0, 'Linear', true, 0);
            }
            if(_this.dragno == 0)  
                {
                // M1.onComplete.add(function(){
                        // this.time.events.add(10,function(){ 
                        _this.BoyJumping2.kill();
                        _this.BoyJumping2 = _this.add.sprite(605,223,'BoyJumping');
                        _this.BoyJumping2.scale.setTo(1,1);
                        _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
                        _this.BoyJumping2.animations.play('BoyJumping');  
                        var M1 = this.add.tween(_this.BoyJumping2);
                        M1.to({ x: 350,y:400}, 0, 'Linear', true, 0);
                    
                }
    },

    gotoFirstQuestion:function(){

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
       

        _this.numBox11.value=43;
        _this.numBox21.value=66;
        _this.numBox31.value=83;
        _this.numBox41.value=71;
        _this.numBox51.value=46;

//        _this.rightorder = [[4,3],[4,6],[6,6],[7,1],[8,3]];
        _this.rightorder = [43,46,66,71,83];

        _this.number1 = _this.add.text(9,-3.5,'4 3');//45
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'6 6');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(9,-3.5,'8 3');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;

        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);

        _this.number4 = _this.add.text(10,-3.5,'7  1');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;

        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'4 6');//53
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;

        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;

        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },

    gotoSecondQuestion:function(){ 

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        

        _this.numBox11.value=26;
        _this.numBox21.value=45;
        _this.numBox31.value=67;
        _this.numBox41.value=59;
        _this.numBox51.value=33;

        _this.rightorder = [26,33,45,59,67];

        _this.number1 = _this.add.text(9,-3.5,'2 6');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'4 5');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(9,-3.5,'6 7');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(9,-3.5,'5 9');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'3 3');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },
    gotoThirdQuestion:function(){
        
        //_this.UnorderedNum1.add(_this.numBox11);
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        

        _this.numBox11.value=37;
        _this.numBox21.value=51;
        _this.numBox31.value=91;
        _this.numBox41.value=73;
        _this.numBox51.value=40;

        _this.rightorder = [37,40,51,73,91];
        
        _this.number1 = _this.add.text(9,-3.5,'3 7');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'5  1');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(9,-3.5,'9  1');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'7 3');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'4 0');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },
    gotoFourthQuestion:function(){
        // _this.stopVoice();
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.number1 = _this.add.text(30,3,'15');
        //_this.number1.anchor.setTo(0.5,0.5);
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);


        _this.numBox11.value=28;
        _this.numBox21.value=42;
        _this.numBox31.value=95;
        _this.numBox41.value=72;
        _this.numBox51.value=32;

        _this.rightorder = [28,32,42,72,95];
        
        _this.number1 = _this.add.text(9,-3.5,'2 8');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'4 2');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);
        _this.number3 = _this.add.text(9,-3.5,'9 5');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'7 2');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'3 2');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    }, 
    gotoFifthQuestion:function(){

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);

        _this.numBox11.value=16;
        _this.numBox21.value=31;
        _this.numBox31.value=50;
        _this.numBox41.value=44;
        _this.numBox51.value=28;

        _this.rightorder = [16,28,31,44,50];
        
        _this.number1 = _this.add.text(15,-3.5,'1  6');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'3  1');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(9,-3.5,'5 0');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(9,-3.5,'4 4');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'2 8');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    }, 
    gotoSixthQuestion:function(){
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
     
        _this.numBox11.value=34;
        _this.numBox21.value=66;
        _this.numBox31.value=87;
        _this.numBox41.value=72;
        _this.numBox51.value=54;

        _this.rightorder = [34,54,66,72,87];
        
        _this.number1 = _this.add.text(9,-3.5,'3 4');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'6 6');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(9,-3.5,'8 7');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(11,-3.5,'7 2');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'5 4');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },

    gotoSeventhQuestion:function(){

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
     
        _this.numBox11.value=17;
        _this.numBox21.value=37;
        _this.numBox31.value=57;
        _this.numBox41.value=47;
        _this.numBox51.value=27;

        _this.rightorder = [17,27,37,47,57];
        
        _this.number1 = _this.add.text(15,-3.5,'1  7');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'3 7');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'5 7');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'4 7');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'2 7');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);
        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);


    },
    gotoEighthQuestion:function(){

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
       
        _this.numBox11.value=11;
        _this.numBox21.value=31;
        _this.numBox31.value=53;
        _this.numBox41.value=42;
        _this.numBox51.value=21;

        _this.rightorder = [11,21,31,42,53];
        
        _this.number1 = _this.add.text(17,-3.5,'1  1');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'3 1');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'5 3');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'4 2');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'2 1');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },
    gotoNinthQuestion:function(){


        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");_this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
     
        _this.numBox11.value=35;
        _this.numBox21.value=52;
        _this.numBox31.value=90;
        _this.numBox41.value=60;
        _this.numBox51.value=48;

        _this.rightorder = [35,48,52,60,90];
        
        _this.number1 = _this.add.text(9,-3.5,'3 5');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'5 2');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'9 0');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'6 0');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'4 8');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);
        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },
    
    gotoTenthQuestion:function(){ 


        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");_this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
     
        _this.numBox11.value=24;
        _this.numBox21.value=56;
        _this.numBox31.value=82;
        _this.numBox41.value=77;
        _this.numBox51.value=39;

        _this.rightorder = [24,39,56,77,82];
        
        _this.number1 = _this.add.text(10,-3.5,'2 4');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'5 6');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'8 2');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'7 7');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'3 9');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;

        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },


    gotoEleventhQuestion:function(){ 


        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
      
        _this.numBox11.value=51;
        _this.numBox21.value=73;
        _this.numBox31.value=98;
        _this.numBox41.value=88;
        _this.numBox51.value=62;

        _this.rightorder = [51,62,73,88,98];
        
        _this.number1 = _this.add.text(10,-3.5,'5 1');
        //_this.number1.anchor.setTo9(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(11,-3.5,'7 3');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'9 8');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'8 8');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'6 2');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },

    gotoTwelvethQuestion:function(){ 

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
      
        _this.numBox11.value=38;
        _this.numBox21.value=59;
        _this.numBox31.value=99;
        _this.numBox41.value=89;
        _this.numBox51.value=43;

        _this.rightorder = [38,43,59,89,99];
        
        _this.number1 = _this.add.text(9,-3.5,'3 8');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'5 9');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'9 9');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'8 9');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'4 3');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);

    },

    gotoThirteenthQuestion:function(){ 

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
      
        _this.numBox11.value=13;
        _this.numBox21.value=35;
        _this.numBox31.value=57;
        _this.numBox41.value=46;
        _this.numBox51.value=24;

        _this.rightorder = [13,24,35,46,57];
        
        _this.number1 = _this.add.text(15,-3.5,'1  3');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'3 5');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'5 7');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'4 6');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'2 4');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);


    },

    gotoFourteenthQuestion:function(){ 


        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
      
        _this.numBox11.value=10;
        _this.numBox21.value=36;
        _this.numBox31.value=92;
        _this.numBox41.value=41;
        _this.numBox51.value=29;

        _this.rightorder = [10,29,36,41,92];
        
        _this.number1 = _this.add.text(13,-3.5,'1  0');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(9,-3.5,'3 6');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'9 2');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'4 1');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'2 9');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);


    },

    gotoFifteenthQuestion:function(){ 

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
    
        _this.numBox11.value=59;
        _this.numBox21.value=70;
        _this.numBox31.value=93;
        _this.numBox41.value=83;
        _this.numBox51.value=60;

        _this.rightorder = [59,60,70,83,93];
        
        _this.number1 = _this.add.text(9,-3.5,'5 9');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);

        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'7 0');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';//#127E8A
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(9,-3.5,'9 3');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(9,-3.5,'8 3');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(9,-3.5,'6 0');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox11;
        _this.orderedNum2=_this.numBox51;
        _this.orderedNum3=_this.numBox21;
        _this.orderedNum4=_this.numBox41;
        _this.orderedNum5=_this.numBox31;


        _this.orderedNum1.inputEnabled = true;
        _this.orderedNum1.input.useHandCursor = true;

        _this.orderedNum2.inputEnabled = true;
        _this.orderedNum2.input.useHandCursor = true;

        _this.orderedNum3.inputEnabled = true;
        _this.orderedNum3.input.useHandCursor = true;

        _this.orderedNum4.inputEnabled = true;
        _this.orderedNum4.input.useHandCursor = true;

        _this.orderedNum5.inputEnabled = true;
        _this.orderedNum5.input.useHandCursor = true;

        _this.orderedNum2.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum3.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum4.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum5.events.onInputDown.add(_this.dragnumbers1,_this);
        _this.orderedNum1.events.onInputDown.add(_this.dragnumbers1,_this);


    },

    checkOverlap:function(spriteA, spriteB) 
    {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
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

    removeEverthing:function() 
    {
        _this.no1++;
        if( _this.no1<4)
        {
            var timerStopVar = commonNavBar.stopTimer();
            _this.BoyLeftPointing.visible=true;

            _this.numBox1.canAdd = false;
            _this.numBox2.canAdd = false;
            _this.numBox3.canAdd = false;
            _this.numBox4.canAdd = false;
            _this.numBox5.canAdd = false;
            _this.selectedAns = " ";
            _this.tickMark.destroy();
            _this.numBox11.frame = 0;
            _this.numBox21.frame = 0;
            _this.numBox31.frame = 0;
            _this.numBox41.frame = 0;
            _this.numBox51.frame = 0;

            _this.numBox11.destroy();
            _this.numBox21.destroy();
            _this.numBox31.destroy();
            _this.numBox41.destroy();
            _this.numBox51.destroy();

//            _this.BoyJumping2.destroy();
//            _this.BoyJumping3.destroy();
            
            if(_this.BoyJumping3)
                _this.BoyJumping3.destroy();

            //console.log("************************************");
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
			if(window.quizQuest == true)
				{
					var timerStopVar = commonNavBar.stopTimer();
					commonNavBar.disableNavBar();
                    commonNavBar.soundVar=null,
					commonNavBar.questionArray=null,
					commonNavBar.questionCount=null,
					commonNavBar.soundUrl=null,
					commonNavBar.speakerbtn=null,
					
					quizCommonFile.changeQuestions(this.Stararr,commonNavBar.getScore());
				}
				else
				{
					_this.getQuestion();
				}
        }
        else
        {
            var timerStopVar = commonNavBar.stopTimer();
             commonNavBar.stopVoice();

                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;
            _this.state.start('comparison_NSCG_4_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
        }
    },
    
    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');

            for(var j =0;j<i;j++)
            {
                if( _this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
        }	
        _this.starsGroup.getChildAt(0).frame = 2; 
if(window.quizQuest == true)
      {
          this.starsGroup.visible = false;
          
          this.quiztext = this.add.text(120,24, "\n"+window.quizText+"\n");
          this.quiztext.anchor.setTo(0.5);
          this.quiztext.align = 'center';
          this.quiztext.font = 'gradefont';
          this.quiztext.fontWeight = 'normal';
          this.quiztext.fontSize = 18;
          this.quiztext.fill = '#ADFF2F';
      }        
    },

   wrongTick:function(target)
    {
        telInitializer2.gameWrongAns();
        console.log("wrong");
        _this.dragno=0;
        _this.noofAttempts++;
        _this.tickMark.frame = 1;
        
         target.events.onInputDown.removeAll();
        
        //  target.events.onDragStop.removeAll(); 
        
        this.Stararr.push(1);
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        commonNavBar.playWrongCelebrationSound();
        _this.BoyJumping2.kill();
        _this.BoySadAnim = _this.add.sprite(605,26,'BoySadAnim');
        _this.BoySadAnim.scale.setTo(1,1);
        /*
      _this.BoySadAnim.animations.add('BoySadAnim',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
      */
        _this.BoySadAnim.animations.add('BoySadAnim',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
        _this.BoySadAnim.animations.play('BoySadAnim');  
        _this.BoySadAnim.x=605;
        _this.BoySadAnim.y=26;
        var M1 = this.add.tween(_this.BoySadAnim);
        M1.to({ x: 350,y:400}, 0, 'Linear', true, 0);
        //_this.BoySadAnim.kill();
        //    },this);//after 1 sec
        // },this);

        setTimeout(function(){ 
            _this.tickMark.frame = 0;
            _this.time.events.add(1500, function(){_this.BoySadAnim.kill();_this.removeEverthing();},_this);            
        }, 1000); 

        if(window.quizQuest == true)
		{
			commonNavBar.updateScore(-5);
		}
    },
    
      toCheckAnswer:function(target){

        commonNavBar.disableHintIcon();

        this.tickMark.frame = 1;
        commonNavBar.playClickSound();
        _this.tickMark.frame = 0;
        //alert(_this.selectedorder+"=="+_this.rightorder);
        
        var correct = true;
        
        for(var i=0;i<_this.rightorder.length;i++)
            {
                
                if(_this.rightorder[i] != _this.addedArray[i].value)
                 {
                      correct = false;  
                     //alert("here");
                }
                
            }
        
        if(correct)
            {
                _this.correctAns(target);
            }
        else
            {
                _this.wrongTick(target);
            }
    },

    correctAns:function(target)
    {
        telInitializer2.gameCorrectAns();
        _this.dragno=0;
        _this.noofAttempts++;
        _this.tickMark.frame = 1;

        setTimeout(function(){ _this.tickMark.frame = 0;
                             }, 200);

        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,
            date_time_event: _this.currentTime,
            event_type: "click", 
            res_id: "level12_TickMark", 
            access_token: window.acctkn 
        } 

        // _this.currentTime = window.timeSaveFunc();
        _this.saveAsment = 
            { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            pass: "yes",
            time2answer: _this.AnsTimerCount,
            attempts: _this.noofAttempts,
            date_time_submission: _this.currentTime, 
            access_token: window.acctkn
        } 
        //absdsjsapi.saveAssessment(_this.saveAsment);  

        target.events.onInputDown.removeAll();

        //commonNavBar.speakerbtn.inputEnabled=false;
        _this.Stararr.push(3); 
        _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
        // ////console.log(starAnim);
        _this.starAnim.smoothed = false;
        _this.anim4 =  _this.starAnim.animations.add('star');
        commonNavBar.playCelebrationSound();
        _this.anim4.play();

        //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        // _this.count1++;
        _this.BoyJumping2.kill();
        _this.BoyJumping2 = _this.add.sprite(615,35,'BoyhandsUp');
        _this.BoyJumping2.scale.setTo(1,1);
        _this.BoyJumping2.animations.add('BoyJumping',[0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19]);
        _this.BoyJumping2.animations.play('BoyJumping');  
        _this.BoyJumping2.x=615;
        _this.BoyJumping2.y=35;
        var M1 = this.add.tween(_this.BoyJumping2);
        M1.to({ x: 615,y:35}, 0, 'Linear', true, 0);
        _this.BoyJumping2.kill();

        _this.BoyJumping3 = _this.add.sprite(615,35,'BoyhandsUp');
        _this.BoyJumping3.scale.setTo(1,1);
        _this.BoyJumping3.animations.add('BoyJumping',[19,19,18,18,17,17,16,16,16,15,15,14,14,14,13,13,13,12,12,12,11,11,11,10,10,10,9,9,8,8,8,7,7,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1]);
        _this.BoyJumping3.animations.play('BoyJumping');  
        _this.BoyJumping3.x=615;
        _this.BoyJumping3.y=35;
        var M1 = this.add.tween(_this.BoyJumping3);
        M1.to({ x: 615,y:35}, 0, 'Linear', true, 0);

        setTimeout(function(){ 
            _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
        }, 1000); 
        if(window.quizQuest == true)
		{
			commonNavBar.updateScore(+5);
		}

    },

    wrongPick:function(target)
    {
        telInitializer2.gameWrongAns();
        _this.wx=target.x;
        _this.wy=target.y;

        target.input.enableDrag(true);
        commonNavBar.playWrongCelebrationSound();

        target.events.onDragStop.add(
            function(target){

                target.events.onDragStop.removeAll(); 

                target.x =  _this.wx;
                target.y =  _this.wy;
            })
    },

    wrongAns:function(target)
    {
        telInitializer2.gameWrongAns();
        _this.noofAttempts++;
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        this.Stararr.push(1);
        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar,
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,
            date_time_event: _this.currentTime, 
            event_type: "click",
            res_id: "level12_TickMark",
            access_token: window.acctkn
        } 

        //  absdsjsapi.saveInteractEvent(_this.interactEvent);   


        //_this.timer1.stop();	
        _this.wrong = false;

        _this.BoyJumping2 = _this.add.sprite(615,35,'BoyhandsUp');
        _this.BoyJumping2.visible = false;

        _this.BoyJumping3 = _this.add.sprite(615,35,'BoyhandsUp');
        _this.BoyJumping3.visible = false;

        //        _this.BoyJumping1.kill();
        //        _this.BoyJumping2.kill();
        //
        //        _this.BoyJumping3.kill();
        //
        //        _this.BoyJumping4.kill();
        //
        //        _this.BoyJumping5.kill();
        //        _this.BoyLeftPointing.visible=true;

        commonNavBar.playWrongCelebrationSound();

        setTimeout(function(){ 
            _this.shake.shake(10,  _this.numBox1);
        }, 50);
        setTimeout(function(){ 
            _this.shake.shake(10,  _this.numBox2);
        }, 60);
        setTimeout(function(){ 
            _this.shake.shake(10,  _this.numBox3);
        }, 70);
        setTimeout(function(){ 
            _this.shake.shake(10,  _this.numBox4);
        }, 80);
        setTimeout(function(){ 
            _this.shake.shake(10,  _this.numBox5);
        }, 90);

        _this.time.events.add(500, function(){ 

            _this.removeEverthing();
        },_this);

        //        _this.UnorderedNum1.kill();
        //        _this.UnorderedNum2.kill();
        //        _this.UnorderedNum3.kill();
        //        _this.UnorderedNum4.kill();
        //        _this.UnorderedNum5.kill();
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
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/English/Game 4.4.1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Hindi/Game 4.4.1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Kannada/Game 4.4.1.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.4.1/4.4.1.mp3");
        }
		else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Marathi/4.4.1.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Telugu/4.4.1.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Tamil/4.4.1.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Urdu/4.4.1.mp3");
                        }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Odiya/4.4.1.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();

        //amp.amplify(3);
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
    }


};