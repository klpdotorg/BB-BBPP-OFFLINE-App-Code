Game.comparison_NSCG_4_2level2=function(){
};
Game.comparison_NSCG_4_2level2.prototype={
    init:function(param,score,timerStopVar)
    {
        _this = this;
        //	telInitializer.gameIdInit("unity4_5_1",gradeSelected);
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;
        commonNavBar.level2Bool = true;
    },

    create:function(game){

        this.playedwithHint = false;
        this.completelyplayed = false;

        _this.amplify = null;
        this.hintparams=[];
        _this.sceneCount = 0;

        _this.selectedorder=[];
        _this.rightorder=[];
        _this.dragno=0;

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
		 _this.addedArray = new Array(); 
        _this.AnsTimerCount = 0;

        _this.no1=0;
        _this.qArrays = [1,3,5,7,9,11];
        _this.qArrays = _this.shuffle( _this.qArrays);
        _this.count=0;
        _this.count1=4;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add( _this.shake);
        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();
        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level442_bg1');
		
        //_this.soundurl = "questionSounds/4.4.1/English/Game 4.5.1.mp3";
		if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/English/Game 4.5.1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Hindi/Game 4.5.1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Kannada/Game 4.5.1.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/4.4.1/4.5.1.mp3";
        }
		else if(window.languageSelected == "Marathi")
                        {
                            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Marathi/4.5.1.mp3";
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Telugu/4.5.1.mp3";
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Tamil/4.5.1.mp3";
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Urdu/4.5.1.mp3";
                        }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/4.4.1/Odiya/4.5.1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        
        commonNavBar.addNavBar(game,_this.soundurl,"numbersense3");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);

        commonNavBar.addScore(game,this.score);
        // commonNavBar.getVoice("questionSounds/4.4.1/English/Game 4.5.1.mp3");
        this.hintparams=['NSCG4.2','level2',false,true,true,2];
        commonNavBar.addHint(game,this.hintparams);
        _this.Tree = _this.add.sprite(400,70,'Tree');
        _this.Tree.scale.setTo(1,1);

        //commonNavBar.getVoice(_this.soundurl);

        _this.BoyRightPointing_blue = _this.add.sprite(610,35,'BoyRightPointing_blue');
        _this.BoyRightPointing_blue.scale.setTo(1,1);
        _this.BoyRightPointing_blue.frame = 0;

        _this.numbox1Pressed=false;
        _this.numbox2Pressed=false;
        _this.numbox3Pressed=false;
        _this.numbox4Pressed=false;
        _this.numbox5Pressed=false;


        setTimeout(function(){ _this.BoyRightPointing_blue.frame = 5;
                             }, 100);

        setTimeout(function(){ _this.BoyRightPointing_blue.frame = 10;
                             }, 200);
        setTimeout(function(){ _this.BoyRightPointing_blue.frame = 15;
                             }, 300);
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

        _this.shakeGroup.add(_this.numBox1);
        _this.shakeGroup.add(_this.numBox2);
        _this.shakeGroup.add(_this.numBox3);
        _this.shakeGroup.add(_this.numBox4);
        _this.shakeGroup.add(_this.numBox5);

        _this.numBox1.canAdd = true;
        _this.numBox2.canAdd = false;
        _this.numBox3.canAdd = false;
        _this.numBox4.canAdd = false;
        _this.numBox5.canAdd = false;


        /*_this.numBox5.frame = 1;
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
 }, 5000);*/


        _this.no1=0;
        // _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,15];
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        _this.qArrays = _this.shuffle( _this.qArrays);

        _this.count=0;
        _this.count1=4;
        _this.generateStarsForTheScene(8);
        // _this.no1++;
        _this.getQuestion();
        _this.getVoice();
		
		_this.graphics = game.add.graphics(0, 0);

        // set a fill and line style
        _this.graphics.beginFill(0xFF3300);
        _this.graphics.lineStyle(10, 0xffd900, 1);
        _this.graphics.drawRect(130, 120, 250, 300);
        _this.graphics.alpha = 0;

    },

    boxBlink:function(){

        _this.numBox1.frame = 1;
        setTimeout(function(){ _this.numBox1.frame = 0;
                             }, 1000);
        setTimeout(function(){ _this.numBox2.frame = 1;
                             }, 1000);

        setTimeout(function(){ _this.numBox2.frame = 0;
                             }, 2000);
        setTimeout(function(){ _this.numBox3.frame = 1;
                             }, 2000);
        setTimeout(function(){ _this.numBox3.frame = 0;
                             }, 3000);
        setTimeout(function(){ _this.numBox4.frame = 1;
                             }, 3000);
        setTimeout(function(){ _this.numBox4.frame = 0;
                             }, 4000);
        setTimeout(function(){ _this.numBox5.frame = 1;
                             }, 4000);
        setTimeout(function(){ _this.numBox5.frame = 0;
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
        commonNavBar.startTimer(this);
        _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
		_this.addedArray  = [];
        //commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            //commonNavBar.speakerClicked(_this.soundurl);
			_this.stopVoice();
        },this);
        _this.BoyJumping_blue = _this.add.sprite(605,223,'BoyJumping_blue');
        _this.BoyJumping_blue.visible = false;
        ////console.log(" _this.no1"+ _this.no1);
        //_this.addNumberPad();
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
                //  _this.tickMark = _this.add.sprite(800,250,'tickBtn');
                //  _this.tickMark.scale.setTo(1.25,1.25);
                //  _this.tickMark.inputEnabled = true;
                //  _this.tickMark.events.onInputDown.add(function(){
                //  _this.toCheckAnswer();
                //  },_this);                       
                if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(4)) && _this.dragno==4 &&_this.candrag1)
                {
                   
                     _this.addedArray.push(target);
                    if( _this.BoyJumping_blue)
                        {
                             _this.BoyJumping_blue.kill();
                        }
                    
                    _this.dragno++;
                    target.frame = 1;
                   // target.inputEnabled = false;
                    target.x =  '579.5';
                    target.y =  '332.5';
                    _this.BoyJumping_blue.kill(); 
                    _this.BoyJumping_blue = _this.add.sprite(350,400,'BoyJumping_blue');
                    _this.BoyJumping_blue.scale.setTo(1,1);
                    _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
                    _this.BoyJumping_blue.x=605;
                    _this.BoyJumping_blue.y=223;
                    var M1 = this.add.tween(_this.BoyJumping_blue);
                    M1.to({ x: 340,y:370}, 0, 'Linear', true, 0);    

                }
                else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(3)) && _this.dragno==3 &&_this.candrag1){
                     _this.addedArray.push(target);
                    _this.dragno++;
                    target.frame = 1;
                   //target.inputEnabled = false;
                    target.x =  '482.5';
                    target.y =  '283.5';
                    _this.BoyJumping_blue.kill();                          
                    _this.BoyJumping_blue = _this.add.sprite(605,223,'BoyJumping_blue');
                    _this.BoyJumping_blue.scale.setTo(1,1);
                    _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
                    _this.BoyJumping_blue.x=430;
                    _this.BoyJumping_blue.y=172.5;
                    var M1 = this.add.tween(_this.BoyJumping_blue);
                    M1.to({ x: 605,y:223.5}, 0, 'Linear', true, 0);
                }
                else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(2)) && _this.dragno==2 &&_this.candrag1){
                     _this.addedArray.push(target);
                    _this.dragno++;
                    target.frame = 1;
                    //target.inputEnabled = false;
                    target.x =  '579.5';
                    target.y =  '232.5';
                    _this.BoyJumping_blue.kill();
                    _this.BoyJumping_blue = _this.add.sprite(605,122.5,'BoyJumping_blue');
                    _this.BoyJumping_blue.scale.setTo(1,1);
                    _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
                    _this.BoyJumping_blue.x=605;
                    _this.BoyJumping_blue.y=122.5;
                    var M1 = this.add.tween(_this.BoyJumping_blue);
                    M1.to({ x: 430,y:172.5}, 0, 'Linear', true, 0);
                }else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(1)) && _this.dragno==1 &&_this.candrag1){
                     _this.addedArray.push(target);
                    _this.dragno++;
                    target.frame = 1;
                    //target.inputEnabled = false;
                    target.x =  '482.5';
                    target.y =  '190.5';
                    _this.BoyJumping_blue.kill();
                    _this.BoyJumping_blue = _this.add.sprite(605,122.5,'BoyJumping_blue');
                    _this.BoyJumping_blue.scale.setTo(1,1);
                    _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
                    _this.BoyJumping_blue.x=430;
                    _this.BoyJumping_blue.y=80;
                    var M1 = this.add.tween(_this.BoyJumping_blue);
                    M1.to({ x: 605,y:122.5}, 0, 'Linear', true, 0);
                }else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(0)) && _this.dragno==0 &&_this.candrag1){
                    _this.tickMark.inputEnabled = true;
					_this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
                    if( _this.BoyJumping_blue)
                        {
                             _this.BoyJumping_blue.kill();
                        }
                    _this.addedArray.push(target);
                    _this.dragno++;
                    target.frame = 1;
                   // target.inputEnabled = false;
                    target.x =  '579.5';
                    target.y =  '132.5';
                    _this.BoyRightPointing_blue.kill();
                    _this.BoyJumping_blue = _this.add.sprite(430,80,'BoyJumping_blue');
                    _this.BoyJumping_blue.scale.setTo(1,1);
                    _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
                    _this.BoyJumping_blue.x=605;
                    _this.BoyJumping_blue.y=26;
                    var M1 = this.add.tween(_this.BoyJumping_blue);
                    M1.to({ x: 430,y:80}, 0, 'Linear', true, 0);
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
                   _this.getboyToUp();
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
getboyToUp:function()
    {
        console.log("getBoyDown "+_this.dragno);
    if(_this.dragno == 0)
        {
            console.log("OKKKKKKKKKKKK");
        //_this.tempArray[3].inputEnabled = true;
        _this.BoyJumping_blue.kill();
        _this.BoyJumping_blue = _this.add.sprite(430,80,'BoyJumping_blue');
        _this.BoyJumping_blue.scale.setTo(1,1);
        /*
      _this.BoySadAnim.animations.add('BoySadAnim',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,12,13,14,15,15,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,22,23,23,23,24,24,24,25,26,26,26,27,27,28,28,29,29,30,31]);
      */
        _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
        _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
        _this.BoyJumping_blue.x=430;
        _this.BoyJumping_blue.y=80;
        var M1 = this.add.tween(_this.BoyJumping_blue);
        M1.to({ x: 605,y:26}, 0, 'Linear', true, 0);
        //_this.BoySadAnim.kill();
      }
        if(_this.dragno == 1)
           { //   this.time.events.add(10,function(){
            //_this.tempArray[2].inputEnabled = true;
            _this.BoyJumping_blue.kill();
            _this.BoyJumping_blue = _this.add.sprite(605,122.5,'BoyJumping_blue');
            _this.BoyJumping_blue.scale.setTo(1,1);
            _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
            _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
            var M1 = this.add.tween(_this.BoyJumping_blue);
            M1.to({ x: 430,y:80}, 0, 'Linear', true, 0);
        }
            if(_this.dragno == 2)
            {
                //_this.tempArray[1].inputEnabled = true;
            //M1.onComplete.add(function(){
                //  this.time.events.add(10,function(){
                _this.BoyJumping_blue.kill();
                _this.BoyJumping_blue = _this.add.sprite(430,172.5,'BoyJumping_blue');
                _this.BoyJumping_blue.scale.setTo(1,1);
                _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
                _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
                var M1 = this.add.tween(_this.BoyJumping_blue);
                M1.to({ x: 605,y:122.5}, 0, 'Linear', true, 0);
            }
        if(_this.dragno ==3)
            {
                if(_this.tempArray)
                    //_this.tempArray[0].inputEnabled = true;
                console.log("VVV");
                //M1.onComplete.add(function(){
                    //  this.time.events.add(10,function(){ 
                    _this.BoyJumping_blue.kill();
                    _this.BoyJumping_blue = _this.add.sprite(605,223,'BoyJumping_blue');
                    _this.BoyJumping_blue.scale.setTo(1,1);
                    _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
                    _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
                    var M1 = this.add.tween(_this.BoyJumping_blue);
                    M1.to({ x: 430,y:172.5}, 0, 'Linear', true, 0);
            }
            if(_this.dragno == 4)  
                {
                // M1.onComplete.add(function(){
                        // this.time.events.add(10,function(){ 
                        _this.BoyJumping_blue.kill();
                        _this.BoyJumping_blue = _this.add.sprite(350,400,'BoyJumping_blue');
                        _this.BoyJumping_blue.scale.setTo(1,1);
                        _this.BoyJumping_blue.animations.add('BoyJumping_blue',[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,26,26,26,27,27,28,28,29,29,30,31]);
                        _this.BoyJumping_blue.animations.play('BoyJumping_blue');  
                        var M1 = this.add.tween(_this.BoyJumping_blue);
                        M1.to({ x: 605,y:223}, 0, 'Linear', true, 0);
                    
                }
    },


    gotoFirstQuestion:function(){

       
        console.log("1");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        _this.numBox11.value=84;
        _this.numBox21.value=73;
        _this.numBox31.value=51;
        _this.numBox41.value=62;
        _this.numBox51.value=95;

        _this.rightorder = [95,84,73,62,51];

        _this.number1 = _this.add.text(10,-3.5,'8 4');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'7 3');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'5  1');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'6 2');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'9 5');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
        
        console.log("2");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=29;
        _this.numBox21.value=18;
        _this.numBox31.value=10;
        _this.numBox41.value=15;
        _this.numBox51.value=40;

        _this.rightorder = [40,29,18,15,10];

        _this.number1 = _this.add.text(10,-3.5,'2 9');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(12,-3.5,'1  8');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(12,-3.5,'1  0');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(12,-3.5,'1  5');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'4 0');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
      
        console.log("3");
        //_this.UnorderedNum1.add(_this.numBox11);
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=85;
        _this.numBox21.value=64;
        _this.numBox31.value=10;
        _this.numBox41.value=42;
        _this.numBox51.value=97;

        _this.rightorder = [97,85,64,42,10];

        _this.number1 = _this.add.text(10,-3.5,'8 5');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'6 4');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(12,-3.5,'1  0');
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
        _this.number5 = _this.add.text(10,-3.5,'9 7');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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

        console.log("4");

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.number1 = _this.add.text(30,3,'15');
        //_this.number1.anchor.setTo(0.5,0.5);
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=71;
        _this.numBox21.value=50;
        _this.numBox31.value=38;
        _this.numBox41.value=49;
        _this.numBox51.value=92;

        _this.rightorder = [92,71,50,49,38];

        _this.number1 = _this.add.text(10,-3.5,'7  1');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'5 0');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);
        _this.number3 = _this.add.text(10,-3.5,'3 8');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'4 9');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'9 2');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
    
        console.log("5");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        _this.numBox11.value=39;
        _this.numBox21.value=28;
        _this.numBox31.value=17;
        _this.numBox41.value=20;
        _this.numBox51.value=50;

        _this.rightorder = [50,39,28,20,17];

        _this.number1 = _this.add.text(10,-3.5,'3 9');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'2 8');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(12,-3.5,'1  7');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'2 0');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'5 0');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
 
        console.log("6");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=64;
        _this.numBox21.value=60;
        _this.numBox31.value=50;
        _this.numBox41.value=58;
        _this.numBox51.value=68;

        _this.rightorder = [68,64,60,58,50];

        _this.number1 = _this.add.text(10,-3.5,'6 4');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'6 0');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'5 0');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'5 8');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'6 8');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
      
        console.log("7");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=60;
        _this.numBox21.value=49;
        _this.numBox31.value=26;
        _this.numBox41.value=37;
        _this.numBox51.value=71;

        _this.rightorder = [71,60,49,37,26];

        _this.number1 = _this.add.text(10,-3.5,'6  0');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'4 9');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'2 6');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'3 7');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'7  1');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);
        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
  
        console.log("8");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=28;
        _this.numBox21.value=25;
        _this.numBox31.value=19;
        _this.numBox41.value=21;
        _this.numBox51.value=31;

        _this.rightorder = [31,28,25,21,19];

        _this.number1 = _this.add.text(10,-3.5,'2 8');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'2 5');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(12,-3.5,'1  9');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'2  1');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'3  1');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
        console.log("9");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=56;
        _this.numBox21.value=53;
        _this.numBox31.value=47;
        _this.numBox41.value=50;
        _this.numBox51.value=59;

        _this.rightorder = [59,56,53,50,47];

        _this.number1 = _this.add.text(10,-3.5,'5 6');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'5 3');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'4 7');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'5 0');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'5 9');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);
        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
       
        console.log("10");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=54;
        _this.numBox21.value=50;
        _this.numBox31.value=42;
        _this.numBox41.value=46;
        _this.numBox51.value=58;

        _this.rightorder = [58,54,50,46,42];

        _this.number1 = _this.add.text(10,-3.5,'5 4');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'5 0');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'4 2');
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
        _this.number5 = _this.add.text(10,-3.5,'5 8');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
     
        console.log("11");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=54;
        _this.numBox21.value=53;
        _this.numBox31.value=51;
        _this.numBox41.value=52;
        _this.numBox51.value=55;

        _this.rightorder = [55,54,53,52,51];

        _this.number1 = _this.add.text(10,-3.5,'5 4');
        //_this.number1.anchor.setTo9(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'5 3');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'5  1');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'5 2');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'5 5');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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

   
        console.log("12");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=34;
        _this.numBox21.value=33;
        _this.numBox31.value=31;
        _this.numBox41.value=32;
        _this.numBox51.value=35;

        _this.rightorder = [35,34,33,32,31];

        _this.number1 = _this.add.text(10,-3.5,'3 4');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'3 3');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'3  1');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'3 2');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'3 5');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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

        console.log("13");

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=46;
        _this.numBox21.value=45;
        _this.numBox31.value=43;
        _this.numBox41.value=44;
        _this.numBox51.value=47;

        _this.rightorder = [47,46,45,44,43];

        _this.number1 = _this.add.text(10,-3.5,'4 6');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'4 5');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'4 3');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'4 4');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'4 7');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
        _this.numBox11.value=41;
        _this.numBox21.value=40;
        _this.numBox31.value=38;
        _this.numBox41.value=39;
        _this.numBox51.value=42;

        _this.rightorder = [42,41,40,39,38];

        _this.number1 = _this.add.text(10,-3.5,'4  1');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'4 0');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'3 8');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'3 9');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'4 2');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
        _this.numBox11.value=72;
        _this.numBox21.value=71;
        _this.numBox31.value=69;
        _this.numBox41.value=70;
        _this.numBox51.value=73;

        _this.rightorder = [73,72,71,70,69];

        _this.number1 = _this.add.text(10,-3.5,'7 2');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#FFFFFF';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(10,-3.5,'7  1');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#FFFFFF';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(10,-3.5,'6 9');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#FFFFFF';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(10,-3.5,'7 0');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#FFFFFF';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(10,-3.5,'7 3');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#FFFFFF';
        _this.numBox51.addChild(_this.number5);

        _this.orderedNum1=_this.numBox51;
        _this.orderedNum2=_this.numBox11;
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
            _this.BoyRightPointing_blue.visible=true;

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


            if(_this.BoyJumping3)
                _this.BoyJumping3.destroy();

            //console.log("************************************");
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
            _this.getQuestion();
        }
        else
        {
            _this.numBox1.canAdd = false;
            _this.numBox2.canAdd = false;
            _this.numBox3.canAdd = false;
            _this.numBox4.canAdd = false;
            _this.numBox5.canAdd = false;
            _this.selectedAns = " ";
            
            _this.Tree.destroy();
            _this.tickMark.destroy();
            if(_this.numBox11)
                _this.numBox11.destroy();
            if(_this.numBox21)
                _this.numBox21.destroy();
            if(_this.numBox31)
                _this.numBox31.destroy();
            if(_this.numBox41)
                _this.numBox41.destroy();
            if(_this.numBox51)
                _this.numBox51.destroy();

            if(_this.numBox1)
                _this.numBox1.destroy();
            if(_this.numBox2)
                _this.numBox2.destroy();
            if(_this.numBox3)
                _this.numBox3.destroy();
            if(_this.numBox4)
                _this.numBox4.destroy();
            if(_this.numBox5)
                _this.numBox5.destroy();
            
            /*_this.numBox111.destroy();
            _this.numBox222.destroy();
            _this.numBox333.destroy();
            _this.numBox444.destroy();
            _this.numBox555.destroy();*/

            _this.shakeGroup.destroy();

            if(_this.BoyJumping3)
                _this.BoyJumping3.destroy();
			
			if(_this.BoyRightPointing_blue)
                _this.BoyRightPointing_blue.destroy();

            var timerStopVar = commonNavBar.stopTimer();
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

    createScoreScene:function()
    {

        this.completelyplayed = true;
		
		this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);

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

        this.generateStarsForScoreScene(this,8);   //Stars based on the Game
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
		
		this.backgroundtransp.visible=false;

        _this.state.start('numbersense3',true,false);
        
    },

    generateStarsForScoreScene:function(game,count)
    {
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
                _this.state.start('comparison_NSCG_4_2level1',true,false);
        }, this);
    },

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 12, 'cstarAnim');

            for(var j =0;j<i;j++)
            {
                if( _this.starsGroup.getChildAt(j))
                {
                    _this.starsGroup.getChildAt(j).x-=10;
                    _this.starsGroup.getChildAt(i).x+=10;
                }
            }
            if(this.Stararr[i])
            {
                _this.starsGroup.getChildAt(i).frame = this.Stararr[i];
            }
        }		
        _this.starsGroup.getChildAt(4).frame = 2;
    },

   wrongTick:function(target)
    {
        telInitializer2.gameWrongAns();
		this.Stararr.push(1);
        _this.dragno=0;
        _this.noofAttempts++;
        _this.tickMark.frame = 1;
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        //this.Stararr.push(1);
         target.events.onInputDown.removeAll();
        commonNavBar.playWrongCelebrationSound();
        _this.BoyJumping_blue.kill();
        _this.BoySadAnim = _this.add.sprite(340,370,'BoySad_blue');
        _this.BoySadAnim.scale.setTo(1,1);
        setTimeout(function(){ 
            _this.tickMark.frame = 0;
            _this.time.events.add(1000, function(){_this.BoySadAnim.kill();_this.removeEverthing();},_this);            
        }, 1000); 
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
		 this.Stararr.push(3);
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
        commonNavBar.stopVoice();

        //commonNavBar.speakerbtn.inputEnabled=false;
        _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
        // ////console.log(starAnim);
        _this.starAnim.smoothed = false;
        _this.anim4 =  _this.starAnim.animations.add('star');
        commonNavBar.playCelebrationSound();
        _this.anim4.play();

        //telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);


        _this.BoyJumping_blue.kill();
        _this.BoyJumping2 = _this.add.sprite(340,370,'BoyhandsUp_blue');
        _this.BoyJumping2.scale.setTo(1,1);
        _this.BoyJumping2.animations.add('BoyhandsUp_blue',[0,0,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19]);
        _this.BoyJumping2.animations.play('BoyhandsUp_blue');  
        _this.BoyJumping2.x=340;
        _this.BoyJumping2.y=370;
        var M1 = this.add.tween(_this.BoyJumping2);
        M1.to({ x: 340,y:370}, 0, 'Linear', true, 0);
        _this.BoyJumping2.kill();

        _this.BoyJumping3 = _this.add.sprite(340,370,'BoyhandsUp_blue');
        _this.BoyJumping3.scale.setTo(1,1);
        _this.BoyJumping3.animations.add('BoyhandsUp_blue',[19,19,18,18,17,17,16,16,16,15,15,14,14,14,13,13,13,12,12,12,11,11,11,10,10,10,9,9,8,8,8,7,7,6,6,5,5,5,4,4,4,3,3,3,2,2,2,1,1,1]);
        _this.BoyJumping3.animations.play('BoyhandsUp_blue');  
        _this.BoyJumping3.x=340;
        _this.BoyJumping3.y=370;
        var M1 = this.add.tween(_this.BoyJumping3);
        M1.to({ x: 340,y:385}, 0, 'Linear', true, 0);

        setTimeout(function(){ 
            _this.time.events.add(500, function(){_this.removeEverthing();},_this);            
        }, 1000); 

    },

    wrongPick:function(target)
    {
        telInitializer2.gameWrongAns();
	 this.Stararr.push(1);
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

        _this.BoyJumping2 = _this.add.sprite(340,370,'BoyhandsUp_blue');
        _this.BoyJumping2.visible=false;
        _this.BoyJumping3 = _this.add.sprite(340,370,'BoyhandsUp_blue');
        _this.BoyJumping3.visible=false;

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
            //            target.events.onInputDown.removeAll();
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
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/English/Game 4.5.1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Hindi/Game 4.5.1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Kannada/Game 4.5.1.mp3");
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/4.4.1/4.5.1.mp3");
        }
		else if(window.languageSelected == "Marathi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Marathi/4.5.1.mp3");
                        }
						else if(window.languageSelected == "Telugu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Telugu/4.5.1.mp3");
                        }
						else if(window.languageSelected == "Tamil")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Tamil/4.5.1.mp3");
                        }
						else if(window.languageSelected == "Urdu")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Urdu/4.5.1.mp3");
                        }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/4.4.1/Odiya/4.5.1.mp3");
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

        window.score = this.score;

         window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;
            
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"comparison_NSCG_4_2state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"comparison_NSCG_4_2state", "fullycomplete");
                localStorage.setItem(window.avatarName+"comparison_NSCG_5_3state", "canplay");
                localStorage.setItem(window.avatarName+"numbersensePlayed", "played");
            }   
            
    }

};