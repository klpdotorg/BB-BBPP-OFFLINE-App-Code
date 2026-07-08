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
        _this.soundurl = "questionSounds/unity/4.5.2/English/Game 4.5.1.mp3";
        commonNavBar.addNavBar(game,null,"numbersense3");
        commonNavBar.addTimerToTheGame(game,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);

        commonNavBar.addScore(game,this.score);
        // commonNavBar.getVoice("questionSounds/4.4.1/English/Game 4.5.1.mp3");
        this.hintparams=['NSCG4.2','level2',false,true,true,2];
        commonNavBar.addHint(game,this.hintparams);
        _this.Tree = _this.add.sprite(400,70,'Tree');
        _this.Tree.scale.setTo(1,1);

        commonNavBar.getVoice(_this.soundurl);

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
        _this.BoyRightPointing_blue.frame = 21;
        _this.numBox111 = _this.add.sprite(108.5,207.5,'box1');
        _this.numBox111.name = "numBox1";
        _this.numBox111.frame=0;

        _this.numBox222 = _this.add.sprite(188.5,207.5,'box1');
        _this.numBox222.name = "numBox2";
        _this.numBox222.frame=0;

        _this.numBox333 = _this.add.sprite(269,207.5,'box1');
        _this.numBox333.name = "numBox3";
        _this.numBox333.frame=0;

        _this.numBox444 = _this.add.sprite(149,288.5,'box1');
        _this.numBox444.name = "numBox4";
        _this.numBox444.frame=0;

        _this.numBox555 = _this.add.sprite(228.5,288.5,'box1');
        _this.numBox555.name = "numBox5";
        _this.numBox555.frame=0;

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
        _this.qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,15];
        _this.qArrays = _this.shuffle( _this.qArrays);

        _this.count=0;
        _this.count1=4;
        _this.generateStarsForTheScene(8);
        // _this.no1++;
        _this.getQuestion();
        //_this.getVoice();

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
        //commonNavBar.speakerbtn.inputEnabled=true;
        commonNavBar.speakerbtn.events.onInputDown.add(function(){
            commonNavBar.speakerClicked(_this.soundurl);
        },this);
        _this.BoyJumping_blue = _this.add.sprite(605,223,'BoyJumping_blue');
        _this.BoyJumping_blue.visible = false;
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
    },

    dragnumbers1:function(target){
        console.log("targt "+_this.dragno);
        _this.wx=target.x;
        _this.wy=target.y;

        _this.numBox1.canAdd = true;

        target.input.enableDrag(true);

        target.events.onDragStop.add(

            function(target){
                commonNavBar.playClickSound();

                //                    if((_this.checkOverlap(target,_this.numBox1))&&(target.name == "numBox1")&&_this.numBox1.canAdd)
                if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(4)) && _this.dragno==4 )
                {
                    _this.dragno++;

                    target.frame = 1;
                    target.inputEnabled = false;
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
                    //                        break;
                }
                //                    else if((_this.checkOverlap(target,_this.numBox2))&&(target.name == "numBox5")&&_this.numBox5.canAdd)
                else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(3)) && _this.dragno==3 ){
                    _this.dragno++;
                    target.frame = 1;
                    target.inputEnabled = false;
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
                    //                        break;
                }

                //                    else if((_this.checkOverlap(target,_this.numBox3))&&(target.name == "numBox2")&&_this.numBox2.canAdd)
                else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(2)) && _this.dragno==2 ){
                    _this.dragno++;
                    target.frame = 1;
                    target.inputEnabled = false;
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
                    //                        break;
                }
                //                    else if((_this.checkOverlap(target,_this.numBox4))&&(target.name == "numBox4")&&_this.numBox4.canAdd)
                else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(1)) && _this.dragno==1 ){
                    _this.dragno++;
                    target.frame = 1;
                    target.inputEnabled = false;
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
                    //                        break;
                }
                //                    else if((_this.checkOverlap(target,_this.numBox5))&&(target.name == "numBox3")&&_this.numBox3.canAdd)
                else if(_this.checkOverlap(target,_this.shakeGroup.getChildAt(0)) && _this.dragno==0 ){
                    _this.dragno++;
                    target.frame = 1;
                    target.inputEnabled = false;

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
                    //                        break;
                }
                else{
                    //                        if((_this.checkOverlap(target,_this.shakeGroup.getChildAt(i))))
                    //                        {
                    ////                            commonNavBar.playWrongCelebrationSound();
                    //                        }
                    target.x =  _this.wx;
                    target.y =  _this.wy;
                    target=null;
                }
                if(target != null){
                    _this.selectedorder.push(target.value);     
                    target.events.onDragStop.removeAll();
                } 

            },_this);
    },

    toCheckAnswer:function(target){
        this.tickMark.frame = 1;
        commonNavBar.playClickSound();
        _this.tickMark.frame = 0;

        for (var i = 0; i < _this.selectedorder.length; i++) {
            if(_this.selectedorder[i] != _this.rightorder[i]) {
                _this.wrongflag=1;
                _this.wrongTick(target);
                return true;       
            }else{
                _this.wrongflag=0;
            }
        }
        if(_this.wrongflag==0){
            _this.correctAns(target);
        }
    },

    gotoFirstQuestion:function(){

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);

        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        _this.numBox11.value=85;
        _this.numBox21.value=83;
        _this.numBox31.value=81;
        _this.numBox41.value=82;
        _this.numBox51.value=84;

        _this.rightorder = [85,84,83,82,81];

        _this.number1 = _this.add.text(19,-3.5,'85');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(21,-3.5,'83');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(17,-3.5,'81');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(17,-3.5,'82');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'84');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=30;
        _this.numBox21.value=28;
        _this.numBox31.value=26;
        _this.numBox41.value=27;
        _this.numBox51.value=29;

        _this.rightorder = [30,29,28,27,26];

        _this.number1 = _this.add.text(17,-3.5,'30');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(17,-3.5,'28');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'26');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(16,-3.5,'27');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'29');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=86;
        _this.numBox21.value=84;
        _this.numBox31.value=82;
        _this.numBox41.value=83;
        _this.numBox51.value=85;

        _this.rightorder = [86,85,84,83,82];

        _this.number1 = _this.add.text(19,-3.5,'86');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'84');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'82');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'83');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'85');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.number1 = _this.add.text(30,3,'15');
        //_this.number1.anchor.setTo(0.5,0.5);
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=92;
        _this.numBox21.value=90;
        _this.numBox31.value=88;
        _this.numBox41.value=89;
        _this.numBox51.value=91;

        _this.rightorder = [92,91,90,89,88];

        _this.number1 = _this.add.text(19,-3.5,'92');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(17,-3.5,'90');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);
        _this.number3 = _this.add.text(17,-3.5,'88');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(17,-3.5,'89');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(16,-3.5,'91');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");

        _this.numBox11.value=50;
        _this.numBox21.value=48;
        _this.numBox31.value=46;
        _this.numBox41.value=47;
        _this.numBox51.value=49;

        _this.rightorder = [50,49,48,47,46];

        _this.number1 = _this.add.text(15,-3.5,'50');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'48');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'46');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'47');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'49');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=68;
        _this.numBox21.value=66;
        _this.numBox31.value=64;
        _this.numBox41.value=65;
        _this.numBox51.value=67;

        _this.rightorder = [68,67,66,65,64];

        _this.number1 = _this.add.text(15,-3.5,'68');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'66');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'64');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'65');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'67');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=71;
        _this.numBox21.value=69;
        _this.numBox31.value=67;
        _this.numBox41.value=68;
        _this.numBox51.value=70;

        _this.rightorder = [71,70,69,68,67];

        _this.number1 = _this.add.text(15,-3.5,'71');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'69');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(20,-3.5,'67');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(17,-3.5,'68');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'70');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=31;
        _this.numBox21.value=29;
        _this.numBox31.value=27;
        _this.numBox41.value=28;
        _this.numBox51.value=30;

        _this.rightorder = [31,30,29,28,27];

        _this.number1 = _this.add.text(15,-3.5,'31');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'29');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(19,-3.5,'27');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'28');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'30');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=59;
        _this.numBox21.value=57;
        _this.numBox31.value=55;
        _this.numBox41.value=56;
        _this.numBox51.value=58;

        _this.rightorder = [59,58,57,56,55];

        _this.number1 = _this.add.text(15,-3.5,'59');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(19,-3.5,'57');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'55');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'56');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'58');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=58;
        _this.numBox21.value=56;
        _this.numBox31.value=54;
        _this.numBox41.value=55;
        _this.numBox51.value=57;

        _this.rightorder = [58,57,56,55,54];

        _this.number1 = _this.add.text(15,-3.5,'58');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'56');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'54');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'55');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'57');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=55;
        _this.numBox21.value=53;
        _this.numBox31.value=51;
        _this.numBox41.value=52;
        _this.numBox51.value=54;

        _this.rightorder = [55,54,53,52,51];

        _this.number1 = _this.add.text(19,-3.5,'55');
        //_this.number1.anchor.setTo9(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'53');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'51');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'52');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'54');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=35;
        _this.numBox21.value=33;
        _this.numBox31.value=31;
        _this.numBox41.value=32;
        _this.numBox51.value=34;

        _this.rightorder = [35,34,33,32,31];

        _this.number1 = _this.add.text(19,-3.5,'35');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'33');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'31');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'32');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'34');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=47;
        _this.numBox21.value=45;
        _this.numBox31.value=43;
        _this.numBox41.value=44;
        _this.numBox51.value=46;

        _this.rightorder = [47,46,45,44,43];

        _this.number1 = _this.add.text(15,-3.5,'47');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'45');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'43');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'44');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'46');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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

        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=42;
        _this.numBox21.value=40;
        _this.numBox31.value=38;
        _this.numBox41.value=39;
        _this.numBox51.value=41;

        _this.rightorder = [42,41,40,39,38];

        _this.number1 = _this.add.text(15,-3.5,'42');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(15,-3.5,'40');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'38');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'39');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'41');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
        _this.tickMark = _this.add.sprite(800,250,'tickBtn');
        _this.tickMark.scale.setTo(1.25,1.25);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.events.onInputDown.add(_this.toCheckAnswer,_this);
        _this.UnorderedNum1 = _this.add.group();
        _this.numBox11 = _this.UnorderedNum1.create(120,220,'box2');
        _this.numBox11.name = "numBox1";
        _this.numBox11.frame=0;
        _this.UnorderedNum2 = _this.add.group();
        _this.numBox21 = _this.UnorderedNum1.create(200,220,'box2');
        _this.numBox21.name = "numBox2";
        _this.numBox21.frame=0;
        _this.UnorderedNum3 = _this.add.group();
        _this.numBox31 = _this.UnorderedNum1.create(280,220,'box2');
        _this.numBox31.name = "numBox3";
        _this.numBox31.frame=0;
        _this.UnorderedNum4 = _this.add.group();
        _this.numBox41 = _this.UnorderedNum1.create(160,300,'box2');
        _this.numBox41.name = "numBox4";
        _this.numBox41.frame=0;
        _this.UnorderedNum5 = _this.add.group();
        _this.numBox51 = _this.UnorderedNum1.create(240,300,'box2');
        _this.numBox51.name = "numBox5";
        _this.numBox51.frame=0;
        _this.boxBlink();

        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //_this.UnorderedNum1.add(_this.numBox11);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.numBox11.value=73;
        _this.numBox21.value=71;
        _this.numBox31.value=69;
        _this.numBox41.value=70;
        _this.numBox51.value=72;

        _this.rightorder = [73,72,71,70,69];

        _this.number1 = _this.add.text(15,-3.5,'73');
        //_this.number1.anchor.setTo(0.5,0.5);
        _this.number1.align = 'center';
        _this.number1.font = 'myfont';
        _this.number1.fontWeight = 'normal';
        _this.number1.fontSize = 40;
        _this.number1.fill = '#127E8A';
        _this.numBox11.addChild(_this.number1);
        //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        _this.number2 = _this.add.text(19,-3.5,'71');
        // _this.number2.anchor.setTo(2);
        _this.number2.align = 'center';
        _this.number2.font = 'myfont';
        _this.number2.fontWeight = 'normal';
        _this.number2.fontSize = 40;

        _this.number2.fill = '#127E8A';
        _this.numBox21.addChild(_this.number2);

        _this.number3 = _this.add.text(15,-3.5,'69');
        //_this.number3.anchor.setTo(2);
        _this.number3.align = 'center';
        _this.number3.font = 'myfont';
        _this.number3.fontWeight = 'normal';
        _this.number3.fontSize = 40;


        _this.number3.fill = '#127E8A';
        _this.numBox31.addChild(_this.number3);


        _this.number4 = _this.add.text(15,-3.5,'70');
        //_this.number4.anchor.setTo(2);
        _this.number4.align = 'center';
        _this.number4.font = 'myfont';
        _this.number4.fontWeight = 'normal';
        _this.number4.fontSize = 40;


        _this.number4.fill = '#127E8A';
        _this.numBox41.addChild(_this.number4);
        _this.number5 = _this.add.text(15,-3.5,'72');
        //_this.number5.anchor.setTo(2);
        _this.number5.align = 'center';
        _this.number5.font = 'myfont';
        _this.number5.fontWeight = 'normal';
        _this.number5.fontSize = 40;


        _this.number5.fill = '#127E8A';
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
            
            _this.numBox111.destroy();
            _this.numBox222.destroy();
            _this.numBox333.destroy();
            _this.numBox444.destroy();
            _this.numBox555.destroy();

            _this.shakeGroup.destroy();

            if(_this.BoyJumping3)
                _this.BoyJumping3.destroy();

            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopVoice();
            commonNavBar.disableNavBar();
            this.createScoreScene();
        }
    },

    createScoreScene:function()
    {

        this.completelyplayed = true;

        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);

        this.happyemoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.happyemoji.anchor.setTo(0.5);
        this.happyemoji.scale.setTo(0.5,0.6);
        this.happyemoji.frame=0;
        this.happyemoji.visible = false;

        this.sademoji = this.add.sprite(this.world.centerX,this.world.centerY+80,'emoji');
        this.sademoji.anchor.setTo(0.5);
        this.sademoji.scale.setTo(0.5,0.6);
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
                _this.state.start('comparison_NSCG_4_2level1',true,false);
        }, this);
    },

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 12, 'starAnim');

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
        _this.dragno=0;
        _this.noofAttempts++;
        target.events.onInputDown.removeAll();    
        _this.tickMark.frame = 1;
        
        _this.Stararr.push(1);
        _this.starsGroup.getChildAt(_this.count1).frame = 1;
        
        commonNavBar.playWrongCelebrationSound();
        _this.BoyJumping_blue.kill();

        _this.BoySadAnim = _this.add.sprite(340,370,'BoySad_blue');
        _this.BoySadAnim.scale.setTo(1,1);
        setTimeout(function(){ 
            _this.tickMark.frame = 0;
            _this.time.events.add(1000, function(){_this.BoySadAnim.kill();_this.removeEverthing();},_this);            
        }, 1000); 

    },

    correctAns:function(target)
    {
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

        commonNavBar.speakerbtn.inputEnabled=false;
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

    shutdown:function()
    {
       

        window.score = this.score;
            localStorage.setItem("Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                localStorage.setItem("comparison_NSCG_4_2state", "playedwithhint");
                localStorage.setItem("numbersensePlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                localStorage.setItem("comparison_NSCG_4_2state", "fullycomplete");
                //localStorage.setItem("number_NSNG_2_1state", "canplay");
                localStorage.setItem("numbersensePlayed", "played");
            }   
    }

};