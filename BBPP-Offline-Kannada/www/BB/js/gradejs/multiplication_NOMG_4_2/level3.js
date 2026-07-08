Game.multiplication_NOMG_4_2level3=function(){};

var group2;
var graphics1,graphics2,graphics3,graphicsa,graphicsb,graphicsc;
Game.multiplication_NOMG_4_2level3.prototype={
    init:function(param,score,timerStopVar)
    {
        _this = this;
        //telInitializer.gameIdInit("unity13_1",gradeSelected);
        this.Stararr = param;
        this.score = score;
        this.timerStopVar = timerStopVar;

        _this.gameid = "13.1";

        commonNavBar.level2Bool = true;

    },

    create:function(game){

        this.playedwithHint = false;
        this.completelyplayed = false;

        _this.amplify = null;

        _this.no1=0;
        _this.count=6;
        _this.first=0;
        _this.second=0;
        _this.third=0;
        _this.fourth=0;
        _this.fifth=0;
        _this.correctflag=0;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;   
        _this.sceneCount=0;
        _this.seconds = 0;
        _this.minutes = 0;
		_this.correct = 0;
        _this.counterForTimer = 0;
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = _this.shuffle( _this.qArrays);
        _this.gridarray = new Array();
        _this.blankarray = new Array();
        _this.gridarraynew = new Array();
        _this.displgrid = new Array();
        _this.selectedarray = new Array();
        _this.countcorrect=6;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add( _this.shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level13_background');

        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/13.1/English/Game13.1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/13.1/Hindi/Game13.1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/13.1/Kannada/Game13.1.mp3";
        }
		else if(window.languageSelected=="Marathi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/13.1/Marathi/Game13.1.mp3";
        }
		else if(window.languageSelected=="Tamil")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/13.1/Tamil/Game13.1.mp3";
        }
		else if(window.languageSelected=="Telugu")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/13.1/Telugu/Game13.1.mp3";
        }
		else if(window.languageSelected=="Urdu")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/13.1/Urdu/Game13.1.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/13.1/Game13.1.mp3";
        }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/13.1/Odiya/13.1.mp3";
           // _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        commonNavBar.addNavBar(this,_this.soundurl,"numberoperation3");
        commonNavBar.addTimerToTheGame(this,this.timerStopVar.min,this.timerStopVar.sec,this.timerStopVar.counter);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
        this.hintparams=['NOMG4.2','level3',false,false,true,1];
        commonNavBar.addHint(this,this.hintparams);

		 _this.graphics5 = _this.add.graphics(50, 50);
        _this.graphics5.lineStyle(2, 0x0000FF, 1);
        _this.graphics5.drawRect(5, 5, 280, 400);
        _this.graphics5.alpha = 0;
		
        _this.generateStarsForTheScene(9);
        //  _this.no1++;
        _this.getQuestion();
        _this.getVoice()
    },

    generateStarsForTheScene:function(count)
    {
        _this.starsGroup = _this.add.group();

        for (var i = 0; i < count; i++)
        {

            _this.starsGroup.create(_this.world.centerX, 10, 'cstarAnim');
            for(var j =0;j<i;j++)
            {
                if(_this.starsGroup.getChildAt(j))
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
        _this.starsGroup.getChildAt(6).frame = 2;	     				
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
        //console.log("get Question "+_this.no1);
        //_this.getVoice();
        this.sceneCount++;

        _this.questionid = 1;

        grid = this.add.sprite(380,50,'Level13_grid');
        grid.height-=30;
        switch(this.qArrays[_this.no1]){
            case 1 : this.gotoquestion1();
                break;
            case 2 : this.gotoquestion2();
                break;
            case 3 : this.gotoquestion3();
                break;
            case 4 : this.gotoquestion4();
                break;
            case 5 : this.gotoquestion5();
                break;
            case 6 : this.gotoquestion6();
                break;
        }
		_this.rightmark = _this.add.sprite(80,480,'Level41A_tickMark');
        _this.rightmark.anchor.setTo(0.5);
        _this.rightmark.scale.setTo(1.1,1.1); 
        _this.rightmark.inputEnabled=true;
        _this.rightmark.input.useHandCursor = true;

        telInitializer2.gameQuestionStart(this,_this.questionid);
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

    gotoquestion1:function(){
		 commonNavBar.enableHintIcon();
        //console.log("!st QQQ");
       // _this.no1++;
        _this.first++;
         _this.glowGrp=_this.add.group();
         _this.objGrp=_this.add.group();
        _this.gridarray[0] = this.add.sprite(240,160,'Level13_gridpieces','Symbol 54 instance 10000');
        _this.gridarray[0].scale.setTo(0.65,0.65);
        _this.gridarray[0].anchor.set(0.5);
        _this.gridarray[0].name="opt1";
        
        _this.gd0x = 240;
        _this.gd0y = 160;
         
        _this.blankarray[0] = this.add.sprite(455,155,'Level13_blankpieces','Symbol 54 copy instance 10001');
        _this.blankarray[0].height-=5;
        
        if(_this.first==1){
            _this.square1num1 = 6;
            _this.square1num2 = 9;
            _this.square1num3 = 8;
            _this.square1num4 = 12;
        }else if(_this.first==2){
            _this.blankarray[0].x=589;//597
            _this.blankarray[0].y=34;//42
            _this.square1num1 = 0;
            _this.square1num2 = 0;
            _this.square1num3 = 5;
            _this.square1num4 = 6;
        }
        var opt1grid1 = this.add.text(-33,-42,_this.square1num1);
        opt1grid1.fill = '#FFFFFF';
        opt1grid1.font = "myfont";
        opt1grid1.fontWeight="normal";
        var opt2grid1 = this.add.text(13,-42,_this.square1num2);
        opt2grid1.fill = '#FFFFFF';
        opt2grid1.font = "myfont";
        opt2grid1.fontWeight="normal";
        var opt3grid1 = this.add.text(-33,0,_this.square1num3);
        opt3grid1.fill = '#FFFFFF';
        opt3grid1.font = "myfont";
        opt3grid1.fontWeight="normal";
        var opt4grid1 = this.add.text(13,0,_this.square1num4);
        opt4grid1.fill = '#FFFFFF';
        opt4grid1.font = "myfont";
        opt4grid1.fontWeight="normal";
            
        _this.gridarray[0].inputEnabled = true;
        _this.gridarray[0].input.enableDrag(true);
        _this.gridarray[0].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[0].events.onDragStop.add(this.onDragStop, this);
        _this.gridarray[0].addChild(opt1grid1);
        _this.gridarray[0].addChild(opt2grid1);
        _this.gridarray[0].addChild(opt3grid1);
        _this.gridarray[0].addChild(opt4grid1);

        _this.gridarray[1] = this.add.sprite(130,290,'Level13_gridpieces','Symbol 54 instance 10000');
        _this.gridarray[1].scale.setTo(0.65,0.65);
        _this.gridarray[1].anchor.set(0.5);
        _this.gridarray[1].name="opt2";
        _this.gd1x = 130;
        _this.gd1y = 290;
        _this.blankarray[1] = this.add.sprite(589,316,'Level13_blankpieces','Symbol 54 copy instance 10001');//597,324
        _this.blankarray[1].height-=5;
        
        if(_this.first==1){
            _this.square2num1 = 35;
            _this.square2num2 = 42;
            _this.square2num3 = 40;
            _this.square2num4 = 48;
        }else if(_this.first==2){
            _this.blankarray[1].x=767;//775
            _this.blankarray[1].y=155;//163
            _this.square2num1 = 27;
            _this.square2num2 = 30;
            _this.square2num3 = 36;
            _this.square2num4 = 40;
        }
        
        var opt1grid2 = this.add.text(-37,-42,_this.square2num1);
        opt1grid2.fill = '#FFFFFF';
        opt1grid2.font = "myfont";
        opt1grid2.fontWeight="normal";
        var opt2grid2 = this.add.text(8,-42,_this.square2num2);
        opt2grid2.fill = '#FFFFFF';
        opt2grid2.font = "myfont";
        opt2grid2.fontWeight="normal";
        var opt3grid2 = this.add.text(-37,0,_this.square2num3);
        opt3grid2.fill = '#FFFFFF';
        opt3grid2.font = "myfont";
        opt3grid2.fontWeight="normal";
        var opt4grid2 = this.add.text(8,0,_this.square2num4);
        opt4grid2.fill = '#FFFFFF';
        opt4grid2.font = "myfont";
        opt4grid2.fontWeight="normal";
        
        _this.gridarray[1].inputEnabled = true;
        _this.gridarray[1].input.enableDrag(true);
        _this.gridarray[1].events.onDragStart.add(this.onDragStart, this);
        //_this.gridarray[1].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[1].addChild(opt1grid2);
        _this.gridarray[1].addChild(opt2grid2);
        _this.gridarray[1].addChild(opt3grid2);
        _this.gridarray[1].addChild(opt4grid2);
            
        _this.gridarray[2] = this.add.sprite(240,420,'Level13_gridpieces','Symbol 54 instance 10000');
        _this.gridarray[2].scale.setTo(0.65,0.65);
        _this.gridarray[2].anchor.set(0.5);
        _this.gridarray[2].name="opt3";
        _this.gd2x = 240;
        _this.gd2y = 420;
        _this.blankarray[2] = this.add.sprite(738,172,'Level13_blankpieces','Symbol 54 copy instance 10001');
        _this.blankarray[2].anchor.set(0.5);
        _this.blankarray[2].height-=5;
        
        if(_this.first==1){
            _this.square3num1 = 6;
            _this.square3num2 = 7;
            _this.square3num3 = 12;
            _this.square3num4 = 14;
        }else if(_this.first==2){
            _this.blankarray[2].x=603;
            _this.blankarray[2].y=131;
            _this.square3num1 = 0;
            _this.square3num2 = 0;
            _this.square3num3 = 3;
            _this.square3num4 = 4;
        }
        
        _this.glowGrp.add(_this.blankarray[0]);
        _this.glowGrp.add(_this.blankarray[1]);
        _this.glowGrp.add(_this.blankarray[2]);
        
        
        var opt1grid3 = this.add.text(-33,-42,_this.square3num1);
        opt1grid3.fill = '#FFFFFF';
        opt1grid3.font = "myfont";
        opt1grid3.fontWeight="normal";
        var opt2grid3 = this.add.text(13,-42,_this.square3num2);
        opt2grid3.fill = '#FFFFFF';
        opt2grid3.font = "myfont";
        opt2grid3.fontWeight="normal";
        var opt3grid3 = this.add.text(-33,0,_this.square3num3);
        opt3grid3.fill = '#FFFFFF';
        opt3grid3.font = "myfont";
        opt3grid3.fontWeight="normal";
        var opt4grid3 = this.add.text(13,0,_this.square3num4);
        opt4grid3.fill = '#FFFFFF';
        opt4grid3.font = "myfont";
        opt4grid3.fontWeight="normal";

        _this.gridarray[2].inputEnabled = true;
        _this.gridarray[2].input.enableDrag(true);
        _this.gridarray[2].events.onDragStart.add(this.onDragStart, this);
        //_this.gridarray[2].events.onDragStop.add(this.onDragStop, this);
    
        _this.gridarray[2].addChild(opt1grid3);
        _this.gridarray[2].addChild(opt2grid3);
        _this.gridarray[2].addChild(opt3grid3);
        _this.gridarray[2].addChild(opt4grid3);
        
      /*  graphicsa = this.add.graphics(-30,-30);
        graphicsa.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsa.beginFill(0xFF700B, 1);
        graphicsa.drawRect(0,0,55,55);		//0,0,55,55
        graphicsa.boundsPadding = 0;
        graphicsa.alpha=0;
        graphicsa.name="opt1";

        graphicsb = this.add.graphics(-30,-30);
        graphicsb.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsb.beginFill(0xFF700B, 1);
        graphicsb.drawRect(0,0,55,55);		//0,0,55,55
        graphicsb.boundsPadding = 0;
        graphicsb.alpha=0;
        graphicsb.name="opt2";

        graphicsc = this.add.graphics(-30,-30);
        graphicsc.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsc.beginFill(0xFF700B, 1);
        graphicsc.drawRect(0,0,55,55);		//0,0,55,55
        graphicsc.boundsPadding = 0;
        graphicsc.alpha=0;
        graphicsc.name="opt3";*/
        
       // _this.gridarray[0].addChild(graphicsa);
        //_this.gridarray[1].addChild(graphicsb);
        //_this.gridarray[2].addChild(graphicsc);
        
        if(_this.first==1){
            graphics1 = this.add.graphics(710,143);//463,163
            graphics2 = this.add.graphics(665,384);
            graphics3 = this.add.graphics(530,222);
        }else if(_this.first==2){
            graphics1 = this.add.graphics(572,100);//463,163
            graphics2 = this.add.graphics(840,225);
            graphics3 = this.add.graphics(662,100);
        }

        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,55,55);		//0,0,55,55
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        graphics1.name="opt1";
  
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,55,55);		
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="opt2";

        graphics3.lineStyle(1, 0xFFFFFF, 0.8);
        graphics3.beginFill(0xFF700B, 1);
        graphics3.drawRect(0,0,55,55);		
        graphics3.boundsPadding = 0;
        graphics3.alpha=0;
        graphics3.name="opt3";
        
        _this.objGrp.add(graphics1);
        _this.objGrp.add(graphics2);
        _this.objGrp.add(graphics3);
        
        _this.addX = 102;
        _this.addY = 99;
    },
    
    gotoquestion2:function(){
		 commonNavBar.enableHintIcon();
        //_this.no1++;
        _this.second++;
         _this.glowGrp=_this.add.group();
         _this.objGrp=_this.add.group();
        _this.gridarray[0] = this.add.sprite(240,160,'Level13_gridpieces','Symbol 54 instance 10012');
        _this.gridarray[0].scale.setTo(0.65,0.65);
        _this.gridarray[0].anchor.set(0.5);
        _this.gridarray[0].name="opt1";
        _this.blankarray[0] = this.add.sprite(678,315,'Level13_blankpieces','Symbol 54 copy instance 10013');//678,315
        _this.blankarray[0].height-=5;
        _this.gd0x = 240;
        _this.gd0y = 160;
        if(_this.second==1){
            _this.Lshape1num1 = 49;
            _this.Lshape1num2 = 42;
            _this.Lshape1num3 = 56;
            _this.Lshape1num4 = 64;
        }else if(_this.second==2){
            _this.blankarray[0].x=767;
            _this.blankarray[0].y=196;
            _this.Lshape1num1 = 36;
            _this.Lshape1num2 = 27;
            _this.Lshape1num3 = 45;
            _this.Lshape1num4 = 50;
        }
        var opt1grid1 = this.add.text(-37,-42,_this.Lshape1num1);
        opt1grid1.fill = '#FFFFFF';
        opt1grid1.font = "myfont";
        opt1grid1.fontWeight="normal";
        var opt2grid1 = this.add.text(-37,-83,_this.Lshape1num2);
        opt2grid1.fill = '#FFFFFF';
        opt2grid1.font = "myfont";
        opt2grid1.fontWeight="normal";
        var opt3grid1 = this.add.text(-37,0,_this.Lshape1num3);
        opt3grid1.fill = '#FFFFFF';
        opt3grid1.font = "myfont";
        opt3grid1.fontWeight="normal";
        var opt4grid1 = this.add.text(8,0,_this.Lshape1num4);
        opt4grid1.fill = '#FFFFFF';
        opt4grid1.font = "myfont";
        opt4grid1.fontWeight="normal";
            
        _this.gridarray[0].inputEnabled = true;
        _this.gridarray[0].input.enableDrag(true);
        _this.gridarray[0].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[0].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[0].addChild(opt1grid1);
        _this.gridarray[0].addChild(opt2grid1);
        _this.gridarray[0].addChild(opt3grid1);
        _this.gridarray[0].addChild(opt4grid1);

        _this.gridarray[1] = this.add.sprite(130,290,'Level13_gridpieces','Symbol 54 instance 10012');
        _this.gridarray[1].scale.setTo(0.65,0.65);
        _this.gridarray[1].anchor.set(0.5);
        _this.gridarray[1].name="opt2";
        _this.blankarray[1] = this.add.sprite(544,236,'Level13_blankpieces','Symbol 54 copy instance 10013');//552,244
        _this.blankarray[1].height-=5;
         _this.gd1x = 130;
        _this.gd1y = 290;

        if(_this.second==1){
            _this.Lshape2num1 = 20;
            _this.Lshape2num2 = 16;
            _this.Lshape2num3 = 24;
            _this.Lshape2num4 = 30;
        }else if(_this.second==2){
            _this.blankarray[1].x=767;//775
            _this.blankarray[1].y=357;//364
            _this.Lshape2num1 = 72;
            _this.Lshape2num2 = 63;
            _this.Lshape2num3 = 81;
            _this.Lshape2num4 = 90;
        }
        var opt1grid2 = this.add.text(-37,-42,_this.Lshape2num1);
        opt1grid2.fill = '#FFFFFF';
        opt1grid2.font = "myfont";
        opt1grid2.fontWeight="normal";
        var opt2grid2 = this.add.text(-37,-83,_this.Lshape2num2);
        opt2grid2.fill = '#FFFFFF';
        opt2grid2.font = "myfont";
        opt2grid2.fontWeight="normal";
        var opt3grid2 = this.add.text(-37,0,_this.Lshape2num3);
        opt3grid2.fill = '#FFFFFF';
        opt3grid2.font = "myfont";
        opt3grid2.fontWeight="normal";
        var opt4grid2 = this.add.text(8,0,_this.Lshape2num4);
        opt4grid2.fill = '#FFFFFF';
        opt4grid2.font = "myfont";
        opt4grid2.fontWeight="normal";
            
        _this.gridarray[1].inputEnabled = true;
        _this.gridarray[1].input.enableDrag(true);
        _this.gridarray[1].events.onDragStart.add(this.onDragStart, this);
      //  _this.gridarray[1].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[1].addChild(opt1grid2);
        _this.gridarray[1].addChild(opt2grid2);
        _this.gridarray[1].addChild(opt3grid2);
        _this.gridarray[1].addChild(opt4grid2);
            
        _this.gridarray[2] = this.add.sprite(240,420,'Level13_gridpieces','Symbol 54 instance 10012');
        _this.gridarray[2].scale.setTo(0.65,0.65);
        _this.gridarray[2].anchor.set(0.5);
        _this.gridarray[2].name="opt3";
        _this.blankarray[2] = this.add.sprite(470,373,'Level13_blankpieces','Symbol 54 copy instance 10013');
        _this.blankarray[2].anchor.set(0.5);
        _this.blankarray[2].height-=5;
        _this.gd2x = 240;
        _this.gd2y = 420;

        if(_this.second==1){
            _this.Lshape3num1 = 0;
            _this.Lshape3num2 = 0;
            _this.Lshape3num3 = 0;
            _this.Lshape3num4 = 7;
        }else if(_this.second==2){
            _this.blankarray[2].x=781;
            _this.blankarray[2].y=413;
            _this.Lshape3num1 = 49;
            _this.Lshape3num2 = 42;
            _this.Lshape3num3 = 56;
            _this.Lshape3num4 = 64;
        }
        
        _this.glowGrp.add(_this.blankarray[0]);
        _this.glowGrp.add(_this.blankarray[1]);
        _this.glowGrp.add(_this.blankarray[2]);
        
        var opt1grid3 = this.add.text(-37,-42,_this.Lshape3num1);
        opt1grid3.fill = '#FFFFFF';
        opt1grid3.font = "myfont";
        opt1grid3.fontWeight="normal";
        var opt2grid3 = this.add.text(-37,-83,_this.Lshape3num2);
        opt2grid3.fill = '#FFFFFF';
        opt2grid3.font = "myfont";
        opt2grid3.fontWeight="normal";
        var opt3grid3 = this.add.text(-37,0,_this.Lshape3num3);
        opt3grid3.fill = '#FFFFFF';
        opt3grid3.font = "myfont";
        opt3grid3.fontWeight="normal";
        var opt4grid3 = this.add.text(8,0,_this.Lshape3num4);
        opt4grid3.fill = '#FFFFFF';
        opt4grid3.font = "myfont";
        opt4grid3.fontWeight="normal";

        _this.gridarray[2].inputEnabled = true;
        _this.gridarray[2].input.enableDrag(true);
        _this.gridarray[2].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[2].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[2].addChild(opt1grid3);
        _this.gridarray[2].addChild(opt2grid3);
        _this.gridarray[2].addChild(opt3grid3);
        _this.gridarray[2].addChild(opt4grid3);
            
        /*graphicsa = this.add.graphics(-40,-85);
        graphicsa.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsa.beginFill(0xFF700B, 1);
        graphicsa.drawRect(0,0,40,120);		
        graphicsa.boundsPadding = 0;
        graphicsa.alpha=0;
        graphicsa.name="opt1";

        graphicsb = this.add.graphics(-40,-85);
        graphicsb.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsb.beginFill(0xFF700B, 1);
        graphicsb.drawRect(0,0,40,120);		
        graphicsb.boundsPadding = 0;
        graphicsb.alpha=0;
        graphicsb.name="opt2";

        graphicsc = this.add.graphics(-40,-85);
        graphicsc.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsc.beginFill(0xFF700B, 1);
        graphicsc.drawRect(0,0,40,120);		
        graphicsc.boundsPadding = 0;
        graphicsc.alpha=0;
        graphicsc.name="opt3";
        
        _this.gridarray[0].addChild(graphicsa);
        _this.gridarray[1].addChild(graphicsb);
        _this.gridarray[2].addChild(graphicsc);*/
        
        if(_this.second==1){
            graphics1 = this.add.graphics(437,292);
            graphics2 = this.add.graphics(615,264);
            graphics3 = this.add.graphics(757,336);
        }else if(_this.second==2){
            graphics1 = this.add.graphics(738,330);
            graphics2 = this.add.graphics(827,370);
            graphics3 = this.add.graphics(827,210);
        }

        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,20,102);		
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        graphics1.name="opt1";
  
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,20,102);		
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="opt2";

        graphics3.lineStyle(1, 0xFFFFFF, 0.8);
        graphics3.beginFill(0xFF700B, 1);
        graphics3.drawRect(0,0,20,102);		
        graphics3.boundsPadding = 0;
        graphics3.alpha=0;
        graphics3.name="opt3";

         _this.objGrp.add(graphics1);
        _this.objGrp.add(graphics2);
        _this.objGrp.add(graphics3);
        
        _this.addX = 102;
        _this.addY = 99;
    },
    
    gotoquestion3:function(){
		 commonNavBar.enableHintIcon();
       // _this.no1++;
        _this.third++;
         _this.glowGrp=_this.add.group();
         _this.objGrp=_this.add.group();
        _this.gridarray[0] = this.add.sprite(240,160,'Level13_gridpieces','Symbol 54 instance 10016');
        _this.gridarray[0].scale.setTo(0.65,0.65);
        _this.gridarray[0].anchor.set(0.5);
        _this.gridarray[0].name="opt1";
         _this.gd0x = 240;
        _this.gd0y = 160;
        _this.blankarray[0] = this.add.sprite(410,315,'Level13_blankpieces','Symbol 54 copy instance 10017');//418,324
        _this.blankarray[0].height-=5;
        if(_this.third==1){
            _this.zigzag1num1 = 14;
            _this.zigzag1num2 = 21;
            _this.zigzag1num3 = 8;
            _this.zigzag1num4 = 16;
        }else if(_this.third==2){
            _this.blankarray[0].x=455;//463
            _this.blankarray[0].y=155;//163
            _this.zigzag1num1 = 9;
            _this.zigzag1num2 = 12;
            _this.zigzag1num3 = 8;
            _this.zigzag1num4 = 12;
        }
        var opt1grid1 = this.add.text(10,-42,_this.zigzag1num1);
        opt1grid1.fill = '#FFFFFF';
        opt1grid1.font = "myfont";
        opt1grid1.fontWeight="normal";
        var opt2grid1 = this.add.text(55,-43,_this.zigzag1num2);
        opt2grid1.fill = '#FFFFFF';
        opt2grid1.font = "myfont";
        opt2grid1.fontWeight="normal";
        var opt3grid1 = this.add.text(-37,0,_this.zigzag1num3);
        opt3grid1.fill = '#FFFFFF';
        opt3grid1.font = "myfont";
        opt3grid1.fontWeight="normal";
        var opt4grid1 = this.add.text(8,0,_this.zigzag1num4);
        opt4grid1.fill = '#FFFFFF';
        opt4grid1.font = "myfont";
        opt4grid1.fontWeight="normal";
            
        _this.gridarray[0].inputEnabled = true;
        _this.gridarray[0].input.enableDrag(true);
        _this.gridarray[0].events.onDragStart.add(this.onDragStart, this);
        //_this.gridarray[0].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[0].addChild(opt1grid1);
        _this.gridarray[0].addChild(opt2grid1);
        _this.gridarray[0].addChild(opt3grid1);
        _this.gridarray[0].addChild(opt4grid1);

        _this.gridarray[1] = this.add.sprite(130,290,'Level13_gridpieces','Symbol 54 instance 10016');
        _this.gridarray[1].scale.setTo(0.65,0.65);
        _this.gridarray[1].anchor.set(0.5);
        _this.gridarray[1].name="opt2";
         _this.gd1x = 130;
        _this.gd1y = 290;
        _this.blankarray[1] = this.add.sprite(722,235,'Level13_blankpieces','Symbol 54 copy instance 10017');//730,244
        _this.blankarray[1].height-=5;
        if(_this.third==1){
            _this.zigzag2num1 = 45;
            _this.zigzag2num2 = 50;
            _this.zigzag2num3 = 48;
            _this.zigzag2num4 = 54;
        }else if(_this.third==2){
            _this.blankarray[1].x=722;//730
            _this.blankarray[1].y=275;//284
            _this.zigzag2num1 = 54;
            _this.zigzag2num2 = 60;
            _this.zigzag2num3 = 56;
            _this.zigzag2num4 = 63;
        }
        var opt1grid2 = this.add.text(8,-42,_this.zigzag2num1);
        opt1grid2.fill = '#FFFFFF';
        opt1grid2.font = "myfont";
        opt1grid2.fontWeight="normal";
        var opt2grid2 = this.add.text(53,-43,_this.zigzag2num2);
        opt2grid2.fill = '#FFFFFF';
        opt2grid2.font = "myfont";
        opt2grid2.fontWeight="normal";
        var opt3grid2 = this.add.text(-37,0,_this.zigzag2num3);
        opt3grid2.fill = '#FFFFFF';
        opt3grid2.font = "myfont";
        opt3grid2.fontWeight="normal";
        var opt4grid2 = this.add.text(8,0,_this.zigzag2num4);
        opt4grid2.fill = '#FFFFFF';
        opt4grid2.font = "myfont";
        opt4grid2.fontWeight="normal";
            
        _this.gridarray[1].inputEnabled = true;
        _this.gridarray[1].input.enableDrag(true);
        _this.gridarray[1].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[1].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[1].addChild(opt1grid2);
        _this.gridarray[1].addChild(opt2grid2);
        _this.gridarray[1].addChild(opt3grid2);
        _this.gridarray[1].addChild(opt4grid2);
            
        _this.gridarray[2] = this.add.sprite(240,420,'Level13_gridpieces','Symbol 54 instance 10016');
        _this.gridarray[2].scale.setTo(0.65,0.65);
        _this.gridarray[2].anchor.set(0.5);
        _this.gridarray[2].name="opt3";
         _this.gd2x = 240;
         _this.gd2y = 420;
        _this.blankarray[2] = this.add.sprite(692,212,'Level13_blankpieces','Symbol 54 copy instance 10017');//514,413
        _this.blankarray[2].anchor.set(0.5);
        _this.blankarray[2].height-=5;
      // _this.blankarray[2].alpha=0;
        if(_this.third==1){
            _this.zigzag3num1 = 12;
            _this.zigzag3num2 = 14;
            _this.zigzag3num3 = 15;
            _this.zigzag3num4 = 18;
        }else if(_this.third==2){
            _this.blankarray[2].x=693;
            _this.blankarray[2].y=413;
            _this.zigzag3num1 = 42;
            _this.zigzag3num2 = 49;
            _this.zigzag3num3 = 40;
            _this.zigzag3num4 = 48;
        }
        
        _this.glowGrp.add(_this.blankarray[0]);
        _this.glowGrp.add(_this.blankarray[1]);
        _this.glowGrp.add(_this.blankarray[2]);
            
        var opt1grid3 = this.add.text(8,-42,_this.zigzag3num1);
        opt1grid3.fill = '#FFFFFF';
        opt1grid3.font = "myfont";
        opt1grid3.fontWeight="normal";
        var opt2grid3 = this.add.text(55,-43,_this.zigzag3num2);
        opt2grid3.fill = '#FFFFFF';
        opt2grid3.font = "myfont";
        opt2grid3.fontWeight="normal";
        var opt3grid3 = this.add.text(-37,0,_this.zigzag3num3);
        opt3grid3.fill = '#FFFFFF';
        opt3grid3.font = "myfont";
        opt3grid3.fontWeight="normal";
        var opt4grid3 = this.add.text(8,0,_this.zigzag3num4);
        opt4grid3.fill = '#FFFFFF';
        opt4grid3.font = "myfont";
        opt4grid3.fontWeight="normal";

        _this.gridarray[2].inputEnabled = true;
        _this.gridarray[2].input.enableDrag(true);
        _this.gridarray[2].events.onDragStart.add(this.onDragStart, this);
        //_this.gridarray[2].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[2].addChild(opt1grid3);
        _this.gridarray[2].addChild(opt2grid3);
        _this.gridarray[2].addChild(opt3grid3);
        _this.gridarray[2].addChild(opt4grid3);
            
       /* graphicsa = this.add.graphics(0,-45);
        graphicsa.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsa.beginFill(0xFF700B, 1);
        graphicsa.drawRect(0,0,40,85);		//0,0,55,55
        graphicsa.boundsPadding = 0;
        graphicsa.alpha=0;
        graphicsa.name="opt1";

        graphicsb = this.add.graphics(0,-45);
        graphicsb.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsb.beginFill(0xFF700B, 1);
        graphicsb.drawRect(0,0,40,85);		//0,0,55,55
        graphicsb.boundsPadding = 0;
        graphicsb.alpha=0;
        graphicsb.name="opt2";

        graphicsc = this.add.graphics(0,-45);
        graphicsc.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsc.beginFill(0xFF700B, 1);
        graphicsc.drawRect(0,0,40,85);		//0,0,55,55
        graphicsc.boundsPadding = 0;
        graphicsc.alpha=0;
        graphicsc.name="opt3";
        
        _this.gridarray[0].addChild(graphicsa);
        _this.gridarray[1].addChild(graphicsb);
        _this.gridarray[2].addChild(graphicsc);*/
        
        if(_this.third==1){
            graphics1 = this.add.graphics(698,175);//463,163
            graphics2 = this.add.graphics(832,295);
            graphics3 = this.add.graphics(520,376);
        }else if(_this.third==2){
            graphics1 = this.add.graphics(698,376);//463,163
            graphics2 = this.add.graphics(833,335);
            graphics3 = this.add.graphics(563,215);
        }

        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,30,70);		
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        graphics1.name="opt1";
  
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,30,70);		
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="opt2";

        graphics3.lineStyle(1, 0xFFFFFF, 0.8);
        graphics3.beginFill(0xFF700B, 1);
        graphics3.drawRect(0,0,30,70);		
        graphics3.boundsPadding = 0;
        graphics3.alpha=0;
        graphics3.name="opt3";

         _this.objGrp.add(graphics1);
        _this.objGrp.add(graphics2);
        _this.objGrp.add(graphics3);
        
        _this.addX = 102;
        _this.addY = 99;
        
    },
    
    gotoquestion4:function(){
		 commonNavBar.enableHintIcon();
        //_this.no1++;
        _this.fourth++;
        _this.glowGrp=_this.add.group();
        _this.objGrp=_this.add.group();
        _this.gridarray[0] = this.add.sprite(240,160,'Level13_gridpieces','Symbol 54 instance 10014');
        _this.gridarray[0].scale.setTo(0.65,0.65);
        _this.gridarray[0].anchor.set(0.5);
        _this.gridarray[0].name="opt1";
        _this.gd0x = 240;
        _this.gd0y = 160;
        _this.blankarray[0] = this.add.sprite(366,315,'Level13_blankpieces','Symbol 54 copy instance 10015');//374,323
        _this.blankarray[0].height-=5;
        // _this.blankarray[0].name="opt1";
            
        if(_this.fourth==1){
            _this.chair1num1 = 0;
            _this.chair1num2 = 9;
            _this.chair1num3 = 0;
            _this.chair1num4 = 8;
        }else if(_this.fourth==2){
            _this.blankarray[0].x=678;
            _this.blankarray[0].y=114;
            _this.chair1num1 = 14;
            _this.chair1num2 = 32;
            _this.chair1num3 = 21;
            _this.chair1num4 = 24;
        }
        var opt1grid1 = this.add.text(-33,-42,_this.chair1num1);
        opt1grid1.fill = '#FFFFFF';
        opt1grid1.font = "myfont";
        opt1grid1.fontWeight="normal";
        var opt2grid1 = this.add.text(8,42,_this.chair1num2);
        opt2grid1.fill = '#FFFFFF';
        opt2grid1.font = "myfont";
        opt2grid1.fontWeight="normal";
        var opt3grid1 = this.add.text(-33,0,_this.chair1num3);
        opt3grid1.fill = '#FFFFFF';
        opt3grid1.font = "myfont";
        opt3grid1.fontWeight="normal";
        var opt4grid1 = this.add.text(8,0,_this.chair1num4);
        opt4grid1.fill = '#FFFFFF';
        opt4grid1.font = "myfont";
        opt4grid1.fontWeight="normal";
            
        _this.gridarray[0].inputEnabled = true;
        _this.gridarray[0].input.enableDrag(true);
        _this.gridarray[0].events.onDragStart.add(this.onDragStart, this);
        //_this.gridarray[0].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[0].addChild(opt1grid1);
        _this.gridarray[0].addChild(opt2grid1);
        _this.gridarray[0].addChild(opt3grid1);
        _this.gridarray[0].addChild(opt4grid1);

        _this.gridarray[1] = this.add.sprite(130,290,'Level13_gridpieces','Symbol 54 instance 10014');
        _this.gridarray[1].scale.setTo(0.65,0.65);
        _this.gridarray[1].anchor.set(0.5);
        _this.gridarray[1].name="opt2";
        _this.gd1x = 130;
        _this.gd1y = 290;
        _this.blankarray[1] = this.add.sprite(589,73,'Level13_blankpieces','Symbol 54 copy instance 10015');//597,82
        _this.blankarray[1].height-=5;
       // _this.blankarray[1].alpha=0;
        if(_this.fourth==1){
            _this.chair2num1 = 5;
            _this.chair2num2 = 18;
            _this.chair2num3 = 10;
            _this.chair2num4 = 12;
        }else if(_this.fourth==2){
            _this.blankarray[1].x=723;//731
            _this.blankarray[1].y=234;//244
            _this.chair2num1 = 40;
            _this.chair2num2 = 63;
            _this.chair2num3 = 48;
            _this.chair2num4 = 54;
        }
        var opt1grid2 = this.add.text(-37,-42,_this.chair2num1);
        opt1grid2.fill = '#FFFFFF';
        opt1grid2.font = "myfont";
        opt1grid2.fontWeight="normal";
        var opt2grid2 = this.add.text(8,42,_this.chair2num2);
        opt2grid2.fill = '#FFFFFF';
        opt2grid2.font = "myfont";
        opt2grid2.fontWeight="normal";
        var opt3grid2 = this.add.text(-37,0,_this.chair2num3);
        opt3grid2.fill = '#FFFFFF';
        opt3grid2.font = "myfont";
        opt3grid2.fontWeight="normal";
        var opt4grid2 = this.add.text(8,0,_this.chair2num4);
        opt4grid2.fill = '#FFFFFF';
        opt4grid2.font = "myfont";
        opt4grid2.fontWeight="normal";
            
        _this.gridarray[1].inputEnabled = true;
        _this.gridarray[1].input.enableDrag(true);
        _this.gridarray[1].events.onDragStart.add(this.onDragStart, this);
        //_this.gridarray[1].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[1].addChild(opt1grid2);
        _this.gridarray[1].addChild(opt2grid2);
        _this.gridarray[1].addChild(opt3grid2);
        _this.gridarray[1].addChild(opt4grid2);
            
        _this.gridarray[2] = this.add.sprite(240,420,'Level13_gridpieces','Symbol 54 instance 10014');
        _this.gridarray[2].scale.setTo(0.65,0.65);
        _this.gridarray[2].anchor.set(0.5);
        _this.gridarray[2].name="opt3";
        _this.gd2x = 240;
        _this.gd2y = 420;
        _this.blankarray[2] = this.add.sprite(514,131,'Level13_blankpieces','Symbol 54 copy instance 10015');
        _this.blankarray[2].anchor.set(0.5);
        _this.blankarray[2].height-=5;
       // _this.blankarray[2].alpha=0;
        if(_this.fourth==1){
            _this.chair3num1 = 0;
            _this.chair3num2 = 4;
            _this.chair3num3 = 1;
            _this.chair3num4 = 2;
        }else if(_this.fourth==2){
            _this.blankarray[2].x=871;
            _this.blankarray[2].y=453;
            _this.chair3num1 = 72;
            _this.chair3num2 = 100;
            _this.chair3num3 = 81;
            _this.chair3num4 = 90;
        }
        
        _this.glowGrp.add(_this.blankarray[0]);
        _this.glowGrp.add(_this.blankarray[1]);
        _this.glowGrp.add(_this.blankarray[2]);
        
        var opt1grid3 = this.add.text(-37,-42,_this.chair3num1);
        opt1grid3.fill = '#FFFFFF';
        opt1grid3.font = "myfont";
        opt1grid3.fontWeight="normal";
        var opt2grid3 = this.add.text(3,42,_this.chair3num2);
        opt2grid3.fill = '#FFFFFF';
        opt2grid3.font = "myfont";
        opt2grid3.fontWeight="normal";
        var opt3grid3 = this.add.text(-37,0,_this.chair3num3);
        opt3grid3.fill = '#FFFFFF';
        opt3grid3.font = "myfont";
        opt3grid3.fontWeight="normal";
        var opt4grid3 = this.add.text(6,0,_this.chair3num4);
        opt4grid3.fill = '#FFFFFF';
        opt4grid3.font = "myfont";
        opt4grid3.fontWeight="normal";

        _this.gridarray[2].inputEnabled = true;
        _this.gridarray[2].input.enableDrag(true);
        _this.gridarray[2].events.onDragStart.add(this.onDragStart, this);
        //_this.gridarray[2].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[2].addChild(opt1grid3);
        _this.gridarray[2].addChild(opt2grid3);
        _this.gridarray[2].addChild(opt3grid3);
        _this.gridarray[2].addChild(opt4grid3);
            
        /*graphicsa = this.add.graphics(-44,-45);
        graphicsa.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsa.beginFill(0xFF700B, 1);
        graphicsa.drawRect(0,0,40,85);		//0,0,55,55
        graphicsa.boundsPadding = 0;
        graphicsa.alpha=0;
        graphicsa.name="opt1";

        graphicsb = this.add.graphics(-44,-45);
        graphicsb.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsb.beginFill(0xFF700B, 1);
        graphicsb.drawRect(0,0,40,85);		//0,0,55,55
        graphicsb.boundsPadding = 0;
        graphicsb.alpha=0;
        graphicsb.name="opt2";

        graphicsc = this.add.graphics(-44,-45);
        graphicsc.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsc.beginFill(0xFF700B, 1);
        graphicsc.drawRect(0,0,40,85);		//0,0,55,55
        graphicsc.boundsPadding = 0;
        graphicsc.alpha=0;
        graphicsc.name="opt3";
        
        _this.gridarray[0].addChild(graphicsa);
        _this.gridarray[1].addChild(graphicsb);
        _this.gridarray[2].addChild(graphicsc);*/
        
        if(_this.fourth==1){
            graphics1 = this.add.graphics(474,95);//463,163
            graphics2 = this.add.graphics(653,134);
            graphics3 = this.add.graphics(430,376);
        }else if(_this.fourth==2){
            graphics1 = this.add.graphics(832,437);//463,163
            graphics2 = this.add.graphics(788,305);
            graphics3 = this.add.graphics(743,175);
        }

        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,30,50);		
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        graphics1.name="opt1";
  
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,30,50);		
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="opt2";

        graphics3.lineStyle(1, 0xFFFFFF, 0.8);
        graphics3.beginFill(0xFF700B, 1);
        graphics3.drawRect(0,0,30,70);		
        graphics3.boundsPadding = 0;
        graphics3.alpha=0;
        graphics3.name="opt3";
        
        _this.objGrp.add(graphics1);
        _this.objGrp.add(graphics2);
        _this.objGrp.add(graphics3);
        
        _this.addX = 102;
        _this.addY = 99;
        
    },
    
    gotoquestion5:function(){
		 commonNavBar.enableHintIcon();
        //_this.no1++;
        _this.fifth++;
         _this.glowGrp=_this.add.group();
        _this.objGrp=_this.add.group();
        _this.gridarray[0] = this.add.sprite(240,160,'Level13_gridpieces','Symbol 54 instance 10004');
        _this.gridarray[0].scale.setTo(0.65,0.65);
        _this.gridarray[0].anchor.set(0.5);
        _this.gridarray[0].name="opt1";
        _this.gd0x = 240;
        _this.gd0y = 160;
        _this.blankarray[0] = this.add.sprite(678,35,'Level13_blankpieces','Symbol 54 copy instance 10005');//686,43
        _this.blankarray[0].height-=5;
            
        if(_this.fifth==1){
            _this.Lreverse1num1 = 0;
            _this.Lreverse1num2 = 0;
            _this.Lreverse1num3 = 0;
            _this.Lreverse1num4 = 8;
        }else if(_this.fifth==2){
            _this.blankarray[0].x=366;//374
            _this.blankarray[0].y=115;//123
            _this.Lreverse1num1 = 0;
            _this.Lreverse1num2 = 2;
            _this.Lreverse1num3 = 2;
            _this.Lreverse1num4 = 3;
        }
        var opt1grid1 = this.add.text(-33,-42,_this.Lreverse1num1);
        opt1grid1.fill = '#FFFFFF';
        opt1grid1.font = "myfont";
        opt1grid1.fontWeight="normal";
        var opt2grid1 = this.add.text(13,-42,_this.Lreverse1num2);
        opt2grid1.fill = '#FFFFFF';
        opt2grid1.font = "myfont";
        opt2grid1.fontWeight="normal";
        var opt3grid1 = this.add.text(-79,-42,_this.Lreverse1num3);
        opt3grid1.fill = '#FFFFFF';
        opt3grid1.font = "myfont";
        opt3grid1.fontWeight="normal";
        var opt4grid1 = this.add.text(13,0,_this.Lreverse1num4);
        opt4grid1.fill = '#FFFFFF';
        opt4grid1.font = "myfont";
        opt4grid1.fontWeight="normal";
            
        _this.gridarray[0].inputEnabled = true;
        _this.gridarray[0].input.enableDrag(true);
        _this.gridarray[0].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[0].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[0].addChild(opt1grid1);
        _this.gridarray[0].addChild(opt2grid1);
        _this.gridarray[0].addChild(opt3grid1);
        _this.gridarray[0].addChild(opt4grid1);

        _this.gridarray[1] = this.add.sprite(130,290,'Level13_gridpieces','Symbol 54 instance 10004');
        _this.gridarray[1].scale.setTo(0.65,0.65);
        _this.gridarray[1].anchor.set(0.5);
        _this.gridarray[1].name="opt2";
        _this.gd1x = 130;
        _this.gd1y = 290;
        _this.blankarray[1] = this.add.sprite(455,35,'Level13_blankpieces','Symbol 54 copy instance 10005');//463,43
        _this.blankarray[1].height-=5;
        if(_this.fifth==1){
            _this.Lreverse2num1 = 0;
            _this.Lreverse2num2 = 0;
            _this.Lreverse2num3 = 0;
            _this.Lreverse2num4 = 3;
        }else if(_this.fifth==2){
            _this.blankarray[1].x=499;//507
            _this.blankarray[1].y=115;//123
            _this.Lreverse2num1 = 6;
            _this.Lreverse2num2 = 8;
            _this.Lreverse2num3 = 4;
            _this.Lreverse2num4 = 12;
        }
        var opt1grid2 = this.add.text(-33,-42,_this.Lreverse2num1);
        opt1grid2.fill = '#FFFFFF';
        opt1grid2.font = "myfont";
        opt1grid2.fontWeight="normal";
        var opt2grid2 = this.add.text(13,-42,_this.Lreverse2num2);
        opt2grid2.fill = '#FFFFFF';
        opt2grid2.font = "myfont";
        opt2grid2.fontWeight="normal";
        var opt3grid2 = this.add.text(-79,-42,_this.Lreverse2num3);
        opt3grid2.fill = '#FFFFFF';
        opt3grid2.font = "myfont";
        opt3grid2.fontWeight="normal";
        var opt4grid2 = this.add.text(13,0,_this.Lreverse2num4);
        opt4grid2.fill = '#FFFFFF';
        opt4grid2.font = "myfont";
        opt4grid2.fontWeight="normal";
            
        _this.gridarray[1].inputEnabled = true;
        _this.gridarray[1].input.enableDrag(true);
        _this.gridarray[1].events.onDragStart.add(this.onDragStart, this);
        //_this.gridarray[1].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[1].addChild(opt1grid2);
        _this.gridarray[1].addChild(opt2grid2);
        _this.gridarray[1].addChild(opt3grid2);
        _this.gridarray[1].addChild(opt4grid2);
            
        _this.gridarray[2] = this.add.sprite(240,420,'Level13_gridpieces','Symbol 54 instance 10004');
        _this.gridarray[2].scale.setTo(0.65,0.65);
        _this.gridarray[2].anchor.set(0.5);
        _this.gridarray[2].name="opt3";
         _this.gd2x = 240;
         _this.gd2y = 420;
        _this.blankarray[2] = this.add.sprite(826,373,'Level13_blankpieces','Symbol 54 copy instance 10005');
        _this.blankarray[2].anchor.set(0.5);
        _this.blankarray[2].height-=5;
        
        if(_this.fifth==1){
            _this.Lreverse3num1 = 48;
            _this.Lreverse3num2 = 54;
            _this.Lreverse3num3 = 42;
            _this.Lreverse3num4 = 63;
        }else if(_this.fifth==2){
            _this.blankarray[2].x=559;
            _this.blankarray[2].y=333;
            _this.Lreverse3num1 = 10;
            _this.Lreverse3num2 = 15;
            _this.Lreverse3num3 = 5;
            _this.Lreverse3num4 = 18;
        }
        
        _this.glowGrp.add(_this.blankarray[0]);
        _this.glowGrp.add(_this.blankarray[1]);
        _this.glowGrp.add(_this.blankarray[2]);
        
        var opt1grid3 = this.add.text(-37,-42,_this.Lreverse3num1);
        opt1grid3.fill = '#FFFFFF';
        opt1grid3.font = "myfont";
        opt1grid3.fontWeight="normal";
        var opt2grid3 = this.add.text(8,-42,_this.Lreverse3num2);
        opt2grid3.fill = '#FFFFFF';
        opt2grid3.font = "myfont";
        opt2grid3.fontWeight="normal";
        var opt3grid3 = this.add.text(-83,-42,_this.Lreverse3num3);
        opt3grid3.fill = '#FFFFFF';
        opt3grid3.font = "myfont";
        opt3grid3.fontWeight="normal";
        var opt4grid3 = this.add.text(8,0,_this.Lreverse3num4);
        opt4grid3.fill = '#FFFFFF';
        opt4grid3.font = "myfont";
        opt4grid3.fontWeight="normal";

        _this.gridarray[2].inputEnabled = true;
        _this.gridarray[2].input.enableDrag(true);
        _this.gridarray[2].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[2].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[2].addChild(opt1grid3);
        _this.gridarray[2].addChild(opt2grid3);
        _this.gridarray[2].addChild(opt3grid3);
        _this.gridarray[2].addChild(opt4grid3);
            
        /*graphicsa = this.add.graphics(-90,-40);
        graphicsa.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsa.beginFill(0xFF700B, 1);
        graphicsa.drawRect(0,0,130,30);		//0,0,55,55
        graphicsa.boundsPadding = 0;
        graphicsa.alpha=0;
        graphicsa.name="opt1";

        graphicsb = this.add.graphics(-90,-40);
        graphicsb.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsb.beginFill(0xFF700B, 1);
        graphicsb.drawRect(0,0,130,30);		//0,0,55,55
        graphicsb.boundsPadding = 0;
        graphicsb.alpha=0;
        graphicsb.name="opt2";

        graphicsc = this.add.graphics(-90,-40);
        graphicsc.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsc.beginFill(0xFF700B, 1);
        graphicsc.drawRect(0,0,130,30);		//0,0,55,55
        graphicsc.boundsPadding = 0;
        graphicsc.alpha=0;
        graphicsc.name="opt3";
        
        _this.gridarray[0].addChild(graphicsa);
        _this.gridarray[1].addChild(graphicsb);
        _this.gridarray[2].addChild(graphicsc);*/
        
        if(_this.fifth==1){
            graphics1 = this.add.graphics(750,333);//463,163
            graphics2 = this.add.graphics(480,92);
            graphics3 = this.add.graphics(710,92);
        }else if(_this.fifth==2){
            graphics1 = this.add.graphics(498,293);//463,163
            graphics2 = this.add.graphics(560,173);
            graphics3 = this.add.graphics(398,173);
        }

        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,105,35);		
       // graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        graphics1.name="opt1";
  
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,105,35);		
        //graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="opt2";

        graphics3.lineStyle(1, 0xFFFFFF, 0.8);
        graphics3.beginFill(0xFF700B, 1);
        graphics3.drawRect(0,0,105,35);		
        //graphics3.boundsPadding = 0;
        graphics3.alpha=0;
        graphics3.name="opt3";

        
         _this.objGrp.add(graphics1);
        _this.objGrp.add(graphics2);
        _this.objGrp.add(graphics3);
        
        _this.addX = 102;
        _this.addY = 99;
        
    },
    
    gotoquestion6:function(){
		 commonNavBar.enableHintIcon();
        //_this.no1++;
        _this.glowGrp=_this.add.group();
        _this.objGrp=_this.add.group();
        _this.gridarray[0] = this.add.sprite(240,160,'Level13_gridpieces','Symbol 54 instance 10000');
        _this.gridarray[0].scale.setTo(0.65,0.65);
        _this.gridarray[0].anchor.set(0.5);
        _this.gridarray[0].name="opt1";
         _this.gd0x = 240;
        _this.gd0y = 160;
        _this.blankarray[0] = this.add.sprite(767,235,'Level13_blankpieces','Symbol 54 copy instance 10001');//775,244
        _this.blankarray[0].height-=5;
        
        _this.square1num1 = 45;
        _this.square1num2 = 50;
        _this.square1num3 = 54;
        _this.square1num4 = 60;
    
        var opt1grid1 = this.add.text(-37,-42,_this.square1num1);
        opt1grid1.fill = '#FFFFFF';
        opt1grid1.font = "myfont";
        opt1grid1.fontWeight="normal";
        var opt2grid1 = this.add.text(8,-42,_this.square1num2);
        opt2grid1.fill = '#FFFFFF';
        opt2grid1.font = "myfont";
        opt2grid1.fontWeight="normal";
        var opt3grid1 = this.add.text(-37,0,_this.square1num3);
        opt3grid1.fill = '#FFFFFF';
        opt3grid1.font = "myfont";
        opt3grid1.fontWeight="normal";
        var opt4grid1 = this.add.text(8,0,_this.square1num4);
        opt4grid1.fill = '#FFFFFF';
        opt4grid1.font = "myfont";
        opt4grid1.fontWeight="normal";
            
        _this.gridarray[0].inputEnabled = true;
        _this.gridarray[0].input.enableDrag(true);
        _this.gridarray[0].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[0].events.onDragStop.add(this.onDragStop, this);
        _this.gridarray[0].addChild(opt1grid1);
        _this.gridarray[0].addChild(opt2grid1);
        _this.gridarray[0].addChild(opt3grid1);
        _this.gridarray[0].addChild(opt4grid1);

        _this.gridarray[1] = this.add.sprite(130,290,'Level13_gridpieces','Symbol 54 instance 10000');
        _this.gridarray[1].scale.setTo(0.65,0.65);
        _this.gridarray[1].anchor.set(0.5);
        _this.gridarray[1].name="opt2";
         _this.gd1x = 130;
        _this.gd1y = 290;
        _this.blankarray[1] = this.add.sprite(544,115,'Level13_blankpieces','Symbol 54 copy instance 10001');//552,123
        _this.blankarray[1].height-=5;
        
        _this.square2num1 = 8;
        _this.square2num2 = 10;
        _this.square2num3 = 12;
        _this.square2num4 = 15;
        
        var opt1grid2 = this.add.text(-37,-42,_this.square2num1);
        opt1grid2.fill = '#FFFFFF';
        opt1grid2.font = "myfont";
        opt1grid2.fontWeight="normal";
        var opt2grid2 = this.add.text(8,-42,_this.square2num2);
        opt2grid2.fill = '#FFFFFF';
        opt2grid2.font = "myfont";
        opt2grid2.fontWeight="normal";
        var opt3grid2 = this.add.text(-37,0,_this.square2num3);
        opt3grid2.fill = '#FFFFFF';
        opt3grid2.font = "myfont";
        opt3grid2.fontWeight="normal";
        var opt4grid2 = this.add.text(8,0,_this.square2num4);
        opt4grid2.fill = '#FFFFFF';
        opt4grid2.font = "myfont";
        opt4grid2.fontWeight="normal";
            
        
        _this.gridarray[1].inputEnabled = true;
        _this.gridarray[1].input.enableDrag(true);
        _this.gridarray[1].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[1].events.onDragStop.add(this.onDragStop, this);

        _this.gridarray[1].addChild(opt1grid2);
        _this.gridarray[1].addChild(opt2grid2);
        _this.gridarray[1].addChild(opt3grid2);
        _this.gridarray[1].addChild(opt4grid2);
            
        _this.gridarray[2] = this.add.sprite(240,420,'Level13_gridpieces','Symbol 54 instance 10000');
        _this.gridarray[2].scale.setTo(0.65,0.65);
        _this.gridarray[2].anchor.set(0.5);
        _this.gridarray[2].name="opt3";
         _this.gd2x = 240;
        _this.gd2y = 420;
        _this.blankarray[2] = this.add.sprite(470,131,'Level13_blankpieces','Symbol 54 copy instance 10001');
        _this.blankarray[2].anchor.set(0.5);
        _this.blankarray[2].height-=5;
        
        _this.square3num1 = 0;
        _this.square3num2 = 0;
        _this.square3num3 = 0;
        _this.square3num4 = 1;
        
        	_this.glowGrp.add(_this.blankarray[0]);
        _this.glowGrp.add(_this.blankarray[1]);
        _this.glowGrp.add(_this.blankarray[2]);
        
        var opt1grid3 = this.add.text(-33,-42,_this.square3num1);
        opt1grid3.fill = '#FFFFFF';
        opt1grid3.font = "myfont";
        opt1grid3.fontWeight="normal";
        var opt2grid3 = this.add.text(13,-42,_this.square3num2);
        opt2grid3.fill = '#FFFFFF';
        opt2grid3.font = "myfont";
        opt2grid3.fontWeight="normal";
        var opt3grid3 = this.add.text(-33,0,_this.square3num3);
        opt3grid3.fill = '#FFFFFF';
        opt3grid3.font = "myfont";
        opt3grid3.fontWeight="normal";
        var opt4grid3 = this.add.text(13,0,_this.square3num4);
        opt4grid3.fill = '#FFFFFF';
        opt4grid3.font = "myfont";
        opt4grid3.fontWeight="normal";

        _this.gridarray[2].inputEnabled = true;
        _this.gridarray[2].input.enableDrag(true);
        _this.gridarray[2].events.onDragStart.add(this.onDragStart, this);
       // _this.gridarray[2].events.onDragStop.add(this.onDragStop, this);
        
        
        _this.gridarray[2].addChild(opt1grid3);
        _this.gridarray[2].addChild(opt2grid3);
        _this.gridarray[2].addChild(opt3grid3);
        _this.gridarray[2].addChild(opt4grid3);
        
      /*  graphicsa = this.add.graphics(-30,-30);
        graphicsa.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsa.beginFill(0xFF700B, 1);
        graphicsa.drawRect(0,0,55,55);		//0,0,55,55
        graphicsa.boundsPadding = 0;
        graphicsa.alpha=0;
        graphicsa.name="opt1";

        graphicsb = this.add.graphics(-30,-30);
        graphicsb.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsb.beginFill(0xFF700B, 1);
        graphicsb.drawRect(0,0,55,55);		//0,0,55,55
        graphicsb.boundsPadding = 0;
        graphicsb.alpha=0;
        graphicsb.name="opt2";

        graphicsc = this.add.graphics(-30,-30);
        graphicsc.lineStyle(1, 0xFFFFFF, 0.8);
        graphicsc.beginFill(0xFF700B, 1);
        graphicsc.drawRect(0,0,55,55);		//0,0,55,55
        graphicsc.boundsPadding = 0;
        graphicsc.alpha=0;
        graphicsc.name="opt3";
        
        _this.gridarray[0].addChild(graphicsa);
        _this.gridarray[1].addChild(graphicsb);
        _this.gridarray[2].addChild(graphicsc);*/
        
        graphics1 = this.add.graphics(440,103);//463,163
        graphics2 = this.add.graphics(618,184);
        graphics3 = this.add.graphics(840,302);

        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,55,55);		//0,0,55,55
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        graphics1.name="opt1";
  
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,55,55);		
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="opt2";

        graphics3.lineStyle(1, 0xFFFFFF, 0.8);
        graphics3.beginFill(0xFF700B, 1);
        graphics3.drawRect(0,0,55,55);		
        graphics3.boundsPadding = 0;
        graphics3.alpha=0;
        graphics3.name="opt3";

         _this.objGrp.add(graphics1);
        _this.objGrp.add(graphics2);
        _this.objGrp.add(graphics3);
        
        _this.addX = 102;
        _this.addY = 99;
        
    },

    getVoice:function(){
        /*_this.stopVoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        if(window.languageSelected == "English")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/13.1/English/Game13.1.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/13.1/Hindi/Game13.1.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/13.1/Kannada/Game13.1.mp3");
        }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/13.1/Odiya/13.1.mp3");
            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        _this.playQuestionSound.appendChild(_this.src);
        _this.playQuestionSound.play();*/

        commonNavBar.getVoice(_this.soundurl);
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

    onDragStart:function(target)
    {
		
        //console.log("target name=="+target.name);
        target.scale.setTo(0.85,0.85);
        target.bringToTop(graphics1);
        target.bringToTop(graphics2);
        target.bringToTop(graphics3);
        /*if(target==graphicsa){
                graphicsa.bringToTop(graphics1);
                graphicsa.bringToTop(graphics2);
                graphicsa.bringToTop(graphics3);
                _this.gridarray[0].bringToTop(graphics1);
                _this.gridarray[0].bringToTop(graphics2);
                _this.gridarray[0].bringToTop(graphics3);
            }*/

        //    if(_this.gridarray[0])
        //_this.glow.destroy();
        commonNavBar.playClickSound();
        // //console.log("target name=="+target.name);
		 for(var i=0;i<_this.glowGrp.length;i++)
                {
                    if(_this.checkOverlap(target.getChildAt(0),_this.glowGrp.getChildAt(i)))
                    { 
                        _this.glowGrp.getChildAt(i).visible = true;
                        target.scale.setTo(0.85,0.85);
                         _this.boxAdded--;
                        
                        if(_this.correct!=0)
                            _this.correct--;
                        
                          //console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxx "+_this.boxAdded);
                        break;
                    }
                }
				 target.events.onDragStop.add(
         function(target){
			commonNavBar.playSnapSound();
			console.log(target.getChildAt(0));
            if(_this.checkOverlap(target.getChildAt(0),_this.blankarray[0])&&(_this.glowGrp.getChildAt(0).visible))
                {
                    target.scale.setTo(0.94,0.94);
                    console.log("hit1 "+_this.glowGrp.getChildAt(0).x,_this.glowGrp.getChildAt(0).y);
                    target.x=_this.glowGrp.getChildAt(0).x+_this.addX;
                    target.y=_this.glowGrp.getChildAt(0).y+_this.addY;
                    _this.glowGrp.getChildAt(0).visible = false;
                     if(target.name==_this.objGrp.getChildAt(0).name)
                      {
                           _this.correct++;
                      }
               }
             else if(_this.checkOverlap(target.getChildAt(1),_this.blankarray[1])&&(_this.glowGrp.getChildAt(1).visible))
                {
                    target.scale.setTo(0.94,0.94);
                    console.log("hit2 "+_this.glowGrp.getChildAt(1).x,_this.glowGrp.getChildAt(1).y);
                    target.x=_this.glowGrp.getChildAt(1).x+_this.addX;
                    target.y=_this.glowGrp.getChildAt(1).y+_this.addY;
                    _this.glowGrp.getChildAt(1).visible = false;
                    
                     if(target.name==_this.objGrp.getChildAt(1).name)
                      {
                           _this.correct++;
                      }
               }
             else if(_this.checkOverlap(target.getChildAt(2),_this.blankarray[2])&&(_this.glowGrp.getChildAt(2).visible))
                {
                    console.log("hit3 "+_this.glowGrp.getChildAt(2).x,_this.glowGrp.getChildAt(2).y);
                    target.scale.setTo(0.94,0.94);
                    target.x=_this.glowGrp.getChildAt(2).x;
                    target.y=_this.glowGrp.getChildAt(2).y;
                     _this.glowGrp.getChildAt(2).visible = false;
                     if(target.name==_this.objGrp.getChildAt(2).name)
                      {
                           _this.correct++;
                      }
               }
        else if(_this.checkOverlap(_this.graphics5,target.getChildAt(0)))
		 {
             console.log("taget Name "+target.name);
			if(target.name == "opt1")
			{
				target.x = _this.gd0x;
				target.y = _this.gd0y;
				 target.scale.setTo(0.65,0.65);
					

			}
			else if(target.name == "opt2"){
				target.x = _this.gd1x;
				target.y = _this.gd1y;
				 target.scale.setTo(0.65,0.65);
			}
             else{
                 target.x = _this.gd2x;
				 target.y = _this.gd2y;
				 target.scale.setTo(0.65,0.65);
             }
		 }
        else 
			{
				 console.log("ELSELESE");
            if(target.name == "opt1")
			{
				target.x = _this.gd0x;
				target.y = _this.gd0y;
				 target.scale.setTo(0.65,0.65);
			}
			else if(target.name == "opt2"){
				target.x = _this.gd1x;
				target.y = _this.gd1y;
				 target.scale.setTo(0.65,0.65);
			}
             else{
                 target.x = _this.gd2x;
				 target.y = _this.gd2y;
				 target.scale.setTo(0.65,0.65);
             }
			
            } 
		  
          
     target.events.onDragStop.removeAll(); 

    // alert(_this.boxAdded);
            console.log("CORRECT "+_this.correct);
        //if(_this.correct >= 3){
           _this.rightmark.inputEnabled=true;
           _this.rightmark.events.onInputDown.add(_this.checkAnswer,_this);
       // }

	},_this);
    },
checkAnswer:function(target)
    {
        target.events.onInputDown.removeAll();
        if(_this.correct >= 2)
            {
                _this.gridarray[0].kill();
                _this.gridarray[1].kill();
                _this.gridarray[2].kill();
                _this.correctAns();
            }
        else
            {
                commonNavBar.disableHintIcon();
                _this.correctflag = 0;
                commonNavBar.playClickSound();
                this.Stararr.push(1);
                commonNavBar.playWrongCelebrationSound();
                _this.starsGroup.getChildAt(_this.countcorrect).frame = 1;
				
				_this.gridarray[0].kill();
                _this.gridarray[1].kill();
                _this.gridarray[2].kill();

                _this.time.events.add(1000, _this.removeCelebration, _this);
            }
    },
    onDragStop1:function(target)
    {
        _this.noofAttempts++;
        ////console.log("drag stop again");
        // tick.inputEnabled=true;
        // target.scale.setTo(0.75,0.75);
        commonNavBar.playSnapSound();

        //h=0;
        if(target == _this.gridarray[0]){
            target = graphicsa;
        }else if(target == _this.gridarray[1]){
            target = graphicsb;
        }else{
            target = graphicsc;
        }
        ////console.log("drag stop target again"+target.name);
        if(this.checkOverlap(target,graphics1))
        {   
            if(target.name==graphics1.name)
            {
                commonNavBar.disableHintIcon();
                _this.correctflag++;

                _this.blankarray[2].kill();   // To fill the blank spaces
                if(target==graphicsa){
                    _this.gridarray[0].x=graphics1.x;
                    _this.gridarray[0].y=graphics1.y;
                    _this.gridarray[0].kill();
                }else if(target==graphicsb){
                    _this.gridarray[1].x=graphics1.x;
                    _this.gridarray[1].y=graphics1.y;
                    _this.gridarray[1].kill();
                }else if(target==graphicsc){
                    _this.gridarray[2].x=graphics1.x;
                    _this.gridarray[2].y=graphics1.y;
                    _this.gridarray[2].kill();
                }
                if(_this.correctflag == 3){
                    this.correctAns();
                }
            }
            else{
                commonNavBar.disableHintIcon();
                _this.correctflag = 0;
                commonNavBar.playClickSound();

                _this.Stararr.push(1);

                commonNavBar.playWrongCelebrationSound();

                _this.starsGroup.getChildAt(_this.countcorrect).frame = 1;

                if(target==graphicsa){
                    _this.gridarray[0].scale.setTo(0.65,0.65);
                    _this.gridarray[0].x=240;
                    _this.gridarray[0].y=160;
                }else if(target==graphicsb){
                    _this.gridarray[1].scale.setTo(0.65,0.65);
                    _this.gridarray[1].x=130;
                    _this.gridarray[1].y=290;
                }else if(target==graphicsc){
                    _this.gridarray[2].scale.setTo(0.65,0.65);
                    _this.gridarray[2].x=240;
                    _this.gridarray[2].y=420;
                }

                _this.gridarray[0].kill();
                _this.gridarray[1].kill();
                _this.gridarray[2].kill();

                _this.time.events.add(1000, _this.removeCelebration, _this);
            }
        }
        else if(this.checkOverlap(target,graphics2))
        {
            if(target.name==graphics2.name)
            {
                commonNavBar.disableHintIcon();
                _this.correctflag++;

                _this.blankarray[1].kill(); // To fill the blank spaces
                if(target==graphicsa){
                    _this.gridarray[0].x=graphics2.x;
                    _this.gridarray[0].y=graphics2.y;
                    _this.gridarray[0].kill();
                }else if(target==graphicsb){
                    _this.gridarray[1].x=graphics2.x;
                    _this.gridarray[1].y=graphics2.y;
                    _this.gridarray[1].kill();
                }else if(target==graphicsc){
                    _this.gridarray[2].x=graphics2.x;
                    _this.gridarray[2].y=graphics2.y;
                    _this.gridarray[2].kill();
                }

                if(_this.correctflag == 3){
                    this.correctAns();
                }
            }
            else{
                commonNavBar.disableHintIcon();
                _this.correctflag = 0;
                commonNavBar.playClickSound();

                _this.Stararr.push(1);

                commonNavBar.playWrongCelebrationSound();

                _this.starsGroup.getChildAt(_this.countcorrect).frame = 1;

                if(target==graphicsa){
                    _this.gridarray[0].scale.setTo(0.65,0.65);
                    _this.gridarray[0].x=240;
                    _this.gridarray[0].y=160;
                }else if(target==graphicsb){
                    _this.gridarray[1].scale.setTo(0.65,0.65);
                    _this.gridarray[1].x=130;
                    _this.gridarray[1].y=290;
                }else if(target==graphicsc){
                    _this.gridarray[2].scale.setTo(0.65,0.65);
                    _this.gridarray[2].x=240;
                    _this.gridarray[2].y=420;
                }

                _this.gridarray[0].kill();
                _this.gridarray[1].kill();
                _this.gridarray[2].kill();

                _this.time.events.add(1000, _this.removeCelebration, _this);

            }
        }
        else if(this.checkOverlap(target,graphics3))
        {
            if(target.name==graphics3.name)
            {
                commonNavBar.disableHintIcon();
                _this.correctflag++;

                _this.blankarray[0].kill();     // To fill the blank spaces
                if(target==graphicsa){
                    _this.gridarray[0].x=graphics3.x;
                    _this.gridarray[0].y=graphics3.y;
                    _this.gridarray[0].kill();
                }else if(target==graphicsb){
                    _this.gridarray[1].x=graphics3.x;
                    _this.gridarray[1].y=graphics3.y;
                    _this.gridarray[1].kill();
                }else if(target==graphicsc){
                    _this.gridarray[2].x=graphics3.x;
                    _this.gridarray[2].y=graphics3.y;
                    _this.gridarray[2].kill();
                }
                if(_this.correctflag == 3){
                    this.correctAns();
                }

            }
            else{
                telInitializer2.gameWrongAns();
                commonNavBar.disableHintIcon();
                _this.correctflag = 0;
                commonNavBar.playClickSound();

                _this.Stararr.push(1);

                commonNavBar.playWrongCelebrationSound();

                _this.starsGroup.getChildAt(_this.countcorrect).frame = 1;

                if(target==graphicsa){
                    _this.gridarray[0].scale.setTo(0.65,0.65);
                    _this.gridarray[0].x=240;
                    _this.gridarray[0].y=160;
                }else if(target==graphicsb){
                    _this.gridarray[1].scale.setTo(0.65,0.65);
                    _this.gridarray[1].x=130;
                    _this.gridarray[1].y=290;
                }else if(target==graphicsc){
                    _this.gridarray[2].scale.setTo(0.65,0.65);
                    _this.gridarray[2].x=240;
                    _this.gridarray[2].y=420;
                }

                _this.gridarray[0].kill();
                _this.gridarray[1].kill();
                _this.gridarray[2].kill();

                _this.time.events.add(1000, _this.removeCelebration, _this);

            }
        }
        else{
            //            commonNavBar.playClickSound();
            //
            //            _this.Stararr.push(1);
            //
            //            commonNavBar.playWrongCelebrationSound();
            //
            //            _this.starsGroup.getChildAt(_this.countcorrect).frame = 1;

            //target.scale.setTo(0.65,0.65);
            if(target==graphicsa){
                _this.gridarray[0].scale.setTo(0.65,0.65);
                _this.gridarray[0].x=240;
                _this.gridarray[0].y=160;
            }else if(target==graphicsb){
                _this.gridarray[1].scale.setTo(0.65,0.65);
                _this.gridarray[1].x=130;
                _this.gridarray[1].y=290;
            }else if(target==graphicsc){
                _this.gridarray[2].scale.setTo(0.65,0.65);
                _this.gridarray[2].x=240;
                _this.gridarray[2].y=420;
            }
            //            graphics1.destroy();
            //            graphics2.destroy();
            //            graphics3.destroy();
            //            graphicsa.destroy();
            //            graphicsb.destroy();
            //            graphicsc.destroy();
            //
            //            _this.gridarray[0].kill();
            //            _this.gridarray[1].kill();
            //            _this.gridarray[2].kill();
            //
            //            _this.time.events.add(1000, _this.removeCelebration, _this);
        }

    },
    checkOverlap:function(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);

    },
    fetchrandom: function(array){
        var count=0;
        for (var i=0;i<array.length;i++){

            if(array[i]!=0)
            {
                count++;
                _this.selectedarray.push(array[i]); 
                if(count == 1){
                    return _this.selectedarray;
                }
            } 
        }    

    },

    correctAns:function(){
        telInitializer2.gameCorrectAns();
        _this.correctflag=0;
        commonNavBar.playCelebrationSound();
        if(_this.timer1!=null)
        {
            _this.timer1.stop();
            _this.timer1 = null;
        }
		 this.Stararr.push(3);
        var starAnim = _this.starsGroup.getChildAt(_this.countcorrect);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();

        _this.time.events.add(1000, _this.removeCelebration, _this);

    },

    removeCelebration:function()
    {
        _this.celebration = false;
        _this.correct=0;

        _this.no1++;

        graphics1.destroy();
        graphics2.destroy();
        graphics3.destroy();

        _this.blankarray[0].kill();
        _this.blankarray[1].kill();
        _this.blankarray[2].kill();

        _this.gridarray=new Array();
        _this.blankarray=new Array();

        if(_this.no1 < 3)
        {
            _this.getQuestion();
            _this.starsGroup.getChildAt(_this.countcorrect+1).frame = 2; 
            _this.countcorrect++;
        }else{
            commonNavBar.stopTimer();
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

        //        this.tryAgainText = this.add.text(this.world.centerX,this.world.centerY,'Try Again !!');
        //        this.tryAgainText.anchor.setTo(0.5);
        //        this.tryAgainText.align = 'center';
        //        this.tryAgainText.fontWeight = 'bold';
        //        this.tryAgainText.fontSize = 40;
        //        this.tryAgainText.fill = 'White';
        //        this.tryAgainText.visible = false;
        //        
        //        this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        //        this.terrificText.anchor.setTo(0.5);
        //        this.terrificText.align = 'center';
        //        this.terrificText.fontWeight = 'bold';
        //        this.terrificText.fontSize = 40;
        //        this.terrificText.fill = 'White';
        //        this.terrificText.visible = false;
        //        
        //        this.verGoodText = this.add.text(this.world.centerX,this.world.centerY,'Very Good !!');
        //        this.verGoodText.anchor.setTo(0.5);
        //        this.verGoodText.align = 'center';
        //        this.verGoodText.fontWeight = 'bold';
        //        this.verGoodText.fontSize = 40;
        //        this.verGoodText.fill = 'White';
        //        this.verGoodText.visible = false;
        //        
        //        this.excellentText = this.add.text(this.world.centerX,this.world.centerY,'Excellent !!');
        //        this.excellentText.anchor.setTo(0.5);
        //        this.excellentText.align = 'center';
        //        this.excellentText.fontWeight = 'bold';
        //        this.excellentText.fontSize = 40;
        //        this.excellentText.fill = 'White';
        //        this.excellentText.visible = false;

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

        this.generateStarsForScoreScene(this,9);
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

        _this.state.start('numberoperation3',true,false);
        
    },


    generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
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
        //        if((this.scoreSceneScore/this.maxscore) < 0.4){
        //            this.tryAgainText.visible = true;
        //        }else if(( (this.scoreSceneScore/this.maxscore) > 0.4) && ((this.scoreSceneScore/this.maxscore) < 0.7) ){
        //            this.terrificText.visible = true;
        //        }else if(( (this.scoreSceneScore/this.maxscore) > 0.7) && ((this.scoreSceneScore/this.maxscore) < 0.9) ){
        //            this.verGoodText.visible = true;
        //        }else if((this.scoreSceneScore/this.maxscore) > 0.9){
        //            this.excellentText.visible = true;
        //        }
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

        this.time.events.add(3500, function()
        { 
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
			this.backgroundtransp.visible=false;
            _this.state.start('multiplication_NOMG_4_2level1',true,false);
        }, this);
    },


    shutdown:function()
        {
            //this.stopvoice();

             window.score = this.score;

              window.score += commonNavBar.deductForHint;

            commonNavBar.level2Bool = false;
            commonNavBar.deductForHint = 0;


            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"multiplication_NOMG_4_2state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numberoperationPlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
                telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"multiplication_NOMG_4_2state", "fullycomplete");
                localStorage.setItem(window.avatarName+"multiplication_NOMG_5_3state", "canplay");
                localStorage.setItem(window.avatarName+"numberoperationPlayed", "played");
            }   
        }  

};