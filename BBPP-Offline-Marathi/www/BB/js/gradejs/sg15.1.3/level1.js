Game.sg15_1_3level1=function(){};
Game.sg15_1_3level1.prototype={
init:function(game)
    {

        _this = this;
        
        _this.gameid = "1.2";
        
       // _this.currentTime = window.timeSaveFunc();
        _this.saveGameplay = 
        { 
            id_game:_this.gameid, 
            access_token:window.acctkn, 
            start_time:_this.currentTime
        } 
       // _this.savedVar = absdsjsapi.saveGameplay(_this.saveGameplay);
        
       telInitializer.gameIdInit("SG15_1_3",gradeSelected);
    },

    preload:function(game){
        if(!window.grade3SG4){

            window.grade3SG4 = true;

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
        this.load.atlas('15_1_3_Arrow1',window.baseUrl+'assets/gradeAssets/sg15.1.3/aero1.png',window.baseUrl+'json/gradeJson/sg15.1.3/aero1.json');
        this.load.atlas('15_1_3_Arrow2',window.baseUrl+'assets/gradeAssets/sg15.1.3/aero2.png',window.baseUrl+'json/gradeJson/sg15.1.3/aero2.json');
        this.load.atlas('15_1_3_Arrow3',window.baseUrl+'assets/gradeAssets/sg15.1.3/aero3.png',window.baseUrl+'json/gradeJson/sg15.1.3/aero3.json');
        this.load.atlas('15_1_3_Arrow4',window.baseUrl+'assets/gradeAssets/sg15.1.3/aero4.png',window.baseUrl+'json/gradeJson/sg15.1.3/aero4.json');
        this.load.image('15_1_3_GreenBoard',window.baseUrl+'assets/gradeAssets/sg15.1.3/greenbord.png');
        this.load.atlas('15_1_3_Kiddanim5',window.baseUrl+'assets/gradeAssets/sg15.1.3/Kiddanim5.png',window.baseUrl+'json/gradeJson/sg15.1.3/Kiddanim5.json');
        this.load.atlas('15_1_3_Kiddanim6',window.baseUrl+'assets/gradeAssets/sg15.1.3/kidJumpingAnim.png',window.baseUrl+'json/gradeJson/sg15.1.3/kidJumpingAnim.json');
        this.load.image('15_1_3_Ladder1',window.baseUrl+'assets/gradeAssets/sg15.1.3/Ladder1.png');
        this.load.image('15_1_3_Ladder2',window.baseUrl+'assets/gradeAssets/sg15.1.3/Ladder2.png');
        this.load.image('15_1_3_Snake1',window.baseUrl+'assets/gradeAssets/sg15.1.3/Snake1.png');
        this.load.image('15_1_3_Snake2',window.baseUrl+'assets/gradeAssets/sg15.1.3/Snake2.png');
        this.load.image('15_1_3_Snake3',window.baseUrl+'assets/gradeAssets/sg15.1.3/Snake3.png');
        this.load.image('15_1_3_Snake4',window.baseUrl+'assets/gradeAssets/sg15.1.3/Snake4.png');
        this.load.image('15_1_3_Snake5',window.baseUrl+'assets/gradeAssets/sg15.1.3/Snake5.png');
        this.load.atlas('15_1_3_box',window.baseUrl+'assets/gradeAssets/sg15.1.3/box.png',window.baseUrl+'json/gradeJson/sg15.1.3/box.json');
        this.load.atlas('15_1_3_rightmark',window.baseUrl+'assets/gradeAssets/sg15.1.3/rightmark.png',window.baseUrl+'json/gradeJson/sg15.1.3/rightmark.json');


    }

    },
    
	create:function(game){
    
       _this.amplify = null;
       _this.done1 = 0;
       _this.done2 = 0;
       _this.done3 = 0;
       _this.done4 = 0;
       _this.up = 0;
       _this.down = 0;
       _this.right = 0;
       _this.left = 0;
       _this.qid=0;
       _this.ux=230;
       _this.uy=172-72+10;
       _this.noofAttempts=0;
       _this.sceneCount=0;
       _this.seconds = 0;
       _this.minutes = 0;
       _this.counterForTimer = 0;
       _this.wrong = true;
       _this.no1=0;
        _this.prevQid = 0;
        _this.prevLocation = '';
        _this.rno1=0;
        _this.vno1=0;
        _this.no11=0;
        _this.pno1=0;
        _this.qno1=0;
        _this.sno1=0;
         _this.mno1=0;
        _this.M1 = null;

		/*
				case 1:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/2right.mp3");  break;
                case 2:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/3right.mp3"); break;
                case 3:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/3left.mp3");  break;
                case 4:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/2down.mp3"); break;
                case 5:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/2up.mp3");  break;
                case 6:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/2left.mp3"); break;
                case 7:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/3up.mp3"); break;
                case 8:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/3down.mp3"); break;
                case 9:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/4left.mp3"); break; 
                case 10:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/5left.mp3"); break;
                case 11:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/4right.mp3"); break;
                case 12:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/5right.mp3"); break; 
                case 13:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/4up.mp3"); break;
                case 14:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/5up.mp3"); break;
                case 15:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/4down.mp3"); break;
                case 16:_this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/5down.mp3"); break;
				*/
       /* _this.qArrays1 = [1];  
        _this.qArrays2 = [4];  */
        _this.qArrays1 = [1,2,3]; 						//3,4,5 right 
        _this.qArrays1 = _this.shuffle( _this.qArrays1);  
        _this.qArrays2 = [4];                                
        _this.qArrays2 = _this.shuffle( _this.qArrays2);
       _this.qArrays3 = [5,6,7];
        _this.qArrays3 = _this.shuffle( _this.qArrays3);
        _this.qArrays4 = [8,9];
        _this.qArrays4 = _this.shuffle( _this.qArrays4);
        _this.qArrays5 = [10];
        _this.qArrays5 = _this.shuffle( _this.qArrays5);
        _this.qArrays6 = [11];
        _this.qArrays6 = _this.shuffle( _this.qArrays6);        
        _this.count=0;

        _this.count1=0;
  		  _this.shake = new Phaser.Plugin.Shake(game);
	      game.plugins.add(_this.shake);
        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

       _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'commonBg2');
       _this.navBar = _this.add.sprite(0,0,'Level42C_Topbar');
       _this.navBar.scale.setTo(1,1);
       _this.timebg = _this.add.sprite(300,5,'Level42C_timer');
       _this.timeDisplay = _this.add.text(326,22, _this.minutes + ' : '+  _this.seconds);
       _this.timeDisplay.anchor.setTo(0.5);
       _this.timeDisplay.align = 'center';
       _this.timeDisplay.font = 'myfont';
       _this.timeDisplay.fontWeight = 'normal';
       _this.timeDisplay.fontSize = 20;
       _this.timeDisplay.fill = '#ADFF2F';
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
       _this.backbtn.inputEnabled = true;
       _this.backbtn.events.onInputDown.add(function()
       {
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.state.start('grade1levelSelectionScreen',true,false); 
       },_this);

       _this.speakerbtn = _this.add.sprite(600,5,'grade11_speaker');
       _this.speakerbtn.inputEnabled = true;
       _this.speakerbtn.events.onInputDown.add(function()
        {     
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();            
            _this.getVoice();
        },_this);
         
        _this.generateStarsForTheScene(6);
        
         _this.GreenBoard = _this.add.sprite(50,64.2,'15_1_3_GreenBoard');
        _this.GreenBoard.scale.setTo(1,1.02);
        _this.rightmark = _this.add.sprite(853,450,'15_1_3_rightmark');
        

        _this.bgbox();
        _this.bgSnakePosition();
        _this.bgLadderPosition();
        
        _this.ArrowFunction();
           _this.getQuestion();
      
        _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
       _this.src = document.createElement('source');
                
if(window.languageSelected =="English")
            {
                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/ArrowSound.mp3"); 
            }
            else if(window.languageSelected =="Hindi")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/arrowSound.mp3");
            }
            else if(window.languageSelected =="Kannada")
            {
                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/arrowsound.mp3");
            }
           else if(window.languageSelected =="Gujarati")
            {
                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/arrowSound.mp3");
             //   _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
            }
			else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3q.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3q.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3q.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3q.mp3");
                    }
            else
            {
              _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/arrowSound.mp3");
            }

       




       _this.playQuestionSound.appendChild(_this.src);
    _this.playQuestionSound.play();
    


    },
   
ArrowFunction:function(){
        _this.arrowGroup = _this.add.group();
        
        _this.Arrow1 = _this.add.sprite(850,64,'15_1_3_Arrow1');
        _this.Arrow2 = _this.add.sprite(850,144,'15_1_3_Arrow2');
        _this.Arrow3 = _this.add.sprite(850,224,'15_1_3_Arrow3');    
        
        _this.Arrow4 = _this.add.sprite(850,304,'15_1_3_Arrow4');
        
        _this.arrowGroup.add(_this.Arrow1);
        _this.arrowGroup.add(_this.Arrow2);
        _this.arrowGroup.add(_this.Arrow3);
        _this.arrowGroup.add(_this.Arrow4);

        _this.Arrow1.name = "Arrow1";
        _this.Arrow2.name = "Arrow2";
        _this.Arrow3.name = "Arrow3";
        _this.Arrow4.name = "Arrow4";
        _this.Arrow1.inputEnabled = true;
        _this.Arrow2.inputEnabled = true;
        _this.Arrow3.inputEnabled = true;
        _this.Arrow4.inputEnabled = true;
        _this.Arrow1.input.useHandCursor = true;
        _this.Arrow2.input.useHandCursor = true;
        _this.Arrow3.input.useHandCursor = true;
        _this.Arrow4.input.useHandCursor = true;
        _this.Arrow1.events.onInputDown.add(_this.ArrowUpListener1,_this);
        _this.Arrow2.events.onInputDown.add(_this.ArrowDownListener2,_this);
        _this.Arrow3.events.onInputDown.add(_this.ArrowRightListener3,_this);
        _this.Arrow4.events.onInputDown.add(_this.ArrowLeftListener4,_this);
},

ArrowUpListener1:function(target){
     _this.rightmark.inputEnabled = false;
      _this.Arrow1.input.useHandCursor = false;
     console.log("UP "+_this.BoyStanding.x,_this.BoyStanding.y)
  if(_this.M1==null){
  
  if(_this.BoyStanding.y>=60)
  {

     target.frame = 1;
    _this.up+=1;
    _this.down-=1;
    _this.wx=_this.BoyStanding.x;
    _this.wy=_this.BoyStanding.y;
    _this.wy=_this.wy-72;
    setTimeout(function(){target.frame = 0; }, 200);
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play();
    _this.M1 = this.add.tween(_this.BoyStanding);
    _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0);
   _this.M1.onComplete.add(function(){
       _this.M1=null;   
        _this.rightmark.inputEnabled = true;
         _this.Arrow1.input.useHandCursor = true;
     }, _this);        
}
else
{
   
    _this.BoyStanding.x=_this.BoyStanding.x;
    _this.BoyStanding.y=_this.BoyStanding.y;
    //_this.getVoice();
    //_this.checkforRightAns();
   
}
}
},
ArrowDownListener2:function(target){
      _this.Arrow2.input.useHandCursor = false;
     _this.rightmark.inputEnabled = false;
     console.log("DOWN "+_this.BoyStanding.x,_this.BoyStanding.y)
   if(_this.M1==null){
if(_this.BoyStanding.y<368)
{
    target.frame = 1;
    _this.down+=1;
    _this.up-=1;
    _this.wx=_this.BoyStanding.x;
    _this.wy=_this.BoyStanding.y;
    _this.wy=_this.wy+72;
    setTimeout(function(){target.frame = 0; }, 200);
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play();
    _this.M1 = this.add.tween(_this.BoyStanding);
    _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0);
    _this.M1.onComplete.add(function(){
       _this.M1=null;
       _this.rightmark.inputEnabled = true;
          _this.Arrow2.input.useHandCursor = true;
     }, _this);      
   
}
else
{
    _this.BoyStanding.x=_this.BoyStanding.x;
    _this.BoyStanding.y=_this.BoyStanding.y;
   
    // _this.getVoice();
    // _this.checkforRightAns();
   
}}

},
ArrowRightListener3:function(target){
      _this.Arrow3.input.useHandCursor = false;
     _this.rightmark.inputEnabled = false;
     console.log("RIGHT "+_this.BoyStanding.x,_this.BoyStanding.y)
   if(_this.M1==null){
if(_this.BoyStanding.x<=660)//600
{
    target.frame = 1;
    _this.right+=1;
    _this.left-=1;
    _this.wx=_this.BoyStanding.x;
    _this.wy=_this.BoyStanding.y;
    _this.wx=_this.wx+72;
    setTimeout(function(){target.frame = 0; }, 200);
    _this.clickSound = _this.add.audio('ClickSound');
    _this.clickSound.play();
    
    _this.M1 = this.add.tween(_this.BoyStanding);
    _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0);

     _this.M1.onComplete.add(function(){
       _this.M1=null;
       _this.rightmark.inputEnabled = true;
           _this.Arrow3.input.useHandCursor = true;
     }, _this);      
   
   
}
else
{
    _this.BoyStanding.x=_this.BoyStanding.x;
    _this.BoyStanding.y=_this.BoyStanding.y;
   
     //_this.getVoice();
     //_this.checkforRightAns();
}}

},
ArrowLeftListener4:function(target){
      _this.Arrow4.input.useHandCursor = false;
     _this.rightmark.inputEnabled = false;
    console.log("LEFT "+_this.BoyStanding.x,_this.BoyStanding.y)
   if(_this.M1==null){
if(_this.BoyStanding.x>84)
{
     target.frame = 1;
     _this.left+=1;
     _this.right-=1;
     _this.wx=_this.BoyStanding.x;
     _this.wy=_this.BoyStanding.y;
     _this.wx=_this.wx-72;
     setTimeout(function(){target.frame = 0; }, 200);
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
     _this.M1 = this.add.tween(_this.BoyStanding);
     _this.M1.to({ x: _this.wx,y:_this.wy}, 0, 'Linear', true, 0);
    _this.M1.onComplete.add(function(){
       _this.M1=null;
       _this.rightmark.inputEnabled = true;
        _this.Arrow4.input.useHandCursor = true;
     }, _this);      
   
}
else
{
    _this.BoyStanding.x=_this.BoyStanding.x;
    _this.BoyStanding.y=_this.BoyStanding.y;
   
    // _this.getVoice();
    // _this.checkforRightAns();
     }}
},


     


bgLadderPosition:function() {

    _this.LadderGroup = _this.add.group();
    _this.Ladder1 = _this.add.sprite(600,120,'15_1_3_Ladder1');
    _this.Ladder2 = _this.add.sprite(315,270,'15_1_3_Ladder1');
    _this.Ladder3 = _this.add.sprite(105,320,'15_1_3_Ladder2');
    _this.Ladder4 = _this.add.sprite(320,410,'15_1_3_Ladder2');
    _this.Ladder5 = _this.add.sprite(610,330,'15_1_3_Ladder2');
    _this.Ladder6 = _this.add.sprite(390,120,'15_1_3_Ladder2');
    _this.LadderGroup.add(_this.Ladder1);
    _this.LadderGroup.add(_this.Ladder2);
    _this.LadderGroup.add(_this.Ladder3);
    _this.LadderGroup.add(_this.Ladder4);
    _this.LadderGroup.add(_this.Ladder5);
    _this.LadderGroup.add(_this.Ladder6);

   },

 bgSnakePosition:function() {

    _this.snakeGroup = _this.add.group();
    _this.Snake1 = _this.add.sprite(520,165,'15_1_3_Snake1');
    _this.Snake1.scale.setTo(0.87,0.87);
    _this.Snake2 = _this.add.sprite(440,315,'15_1_3_Snake2');
    _this.Snake3 = _this.add.sprite(220,335,'15_1_3_Snake3');
    _this.Snake3.scale.setTo(1.4,1.4);
    _this.Snake4 = _this.add.sprite(175,170,'15_1_3_Snake4');
    _this.Snake5 = _this.add.sprite(265,90,'15_1_3_Snake5');
    _this.snakeGroup.add(_this.Snake1);
    _this.snakeGroup.add(_this.Snake2);
    _this.snakeGroup.add(_this.Snake3);
    _this.snakeGroup.add(_this.Snake4);
    _this.snakeGroup.add(_this.Snake5);


},
bgbox: function() {
  //first row green boxes
    _this.boxGroup = _this.add.group();
    _this.box1 = _this.add.sprite(66,77.5,'15_1_3_box');
    _this.box1.frame = 1;
    _this.box2 = _this.add.sprite(138,77.5,'15_1_3_box');
    _this.box2.frame = 0;
    _this.box3 = _this.add.sprite(210,77.5,'15_1_3_box');
    _this.box3.frame = 1;
    _this.box4 = _this.add.sprite(282,77.5,'15_1_3_box');
    _this.box4.frame = 0;
    _this.box5 = _this.add.sprite(354,77.5,'15_1_3_box');
    _this.box5.frame = 1;
    _this.box6 = _this.add.sprite(426,77.5,'15_1_3_box');
    _this.box6.frame = 0;
    _this.box7 = _this.add.sprite(498,77.5,'15_1_3_box');
    _this.box7.frame = 1;
    _this.box8 = _this.add.sprite(570,77.5,'15_1_3_box');
    _this.box8.frame = 0;
    _this.box9 = _this.add.sprite(642,77.5,'15_1_3_box');
    _this.box9.frame = 1;
    _this.box10 = _this.add.sprite(714,77.5,'15_1_3_box');
    _this.box10.frame = 0;
 //second row green boxes
    _this.box11 = _this.add.sprite(66,149.5,'15_1_3_box');
    _this.box11.frame = 0;
    _this.box12 = _this.add.sprite(138,149.5,'15_1_3_box');
    _this.box12.frame = 1;
    _this.box13 = _this.add.sprite(210,149.5,'15_1_3_box');
    _this.box13.frame = 0;
    _this.box14 = _this.add.sprite(282,149.5,'15_1_3_box');
    _this.box14.frame = 1;
    _this.box15 = _this.add.sprite(354,149.5,'15_1_3_box');
    _this.box15.frame = 0;
    _this.box16 = _this.add.sprite(426,149.5,'15_1_3_box');
    _this.box16.frame = 1;
    _this.box17 = _this.add.sprite(498,149.5,'15_1_3_box');
    _this.box17.frame = 0;
    _this.box18 = _this.add.sprite(570,149.5,'15_1_3_box');
    _this.box18.frame = 1;
    _this.box19 = _this.add.sprite(642,149.5,'15_1_3_box');
    _this.box19.frame = 0;
    _this.box20 = _this.add.sprite(714,149.5,'15_1_3_box');
    _this.box20.frame = 1;
 //third row green boxes
    _this.box21 = _this.add.sprite(66,221.5,'15_1_3_box');
    _this.box21.frame = 1;
    _this.box22 = _this.add.sprite(138,221.5,'15_1_3_box');
    _this.box22.frame = 0;
    _this.box23 = _this.add.sprite(210,221.5,'15_1_3_box');
    _this.box23.frame = 1;
    _this.box24 = _this.add.sprite(282,221.5,'15_1_3_box');
    _this.box24.frame = 0;
    _this.box25 = _this.add.sprite(354,221.5,'15_1_3_box');
    _this.box25.frame = 1;
    _this.box26 = _this.add.sprite(426,221.5,'15_1_3_box');
    _this.box26.frame = 0;
    _this.box27 = _this.add.sprite(498,221.5,'15_1_3_box');
    _this.box27.frame = 1;
    _this.box28 = _this.add.sprite(570,221.5,'15_1_3_box');
    _this.box28.frame = 0;
    _this.box29 = _this.add.sprite(642,221.5,'15_1_3_box');
    _this.box29.frame = 1;
    _this.box30 = _this.add.sprite(714,221.5,'15_1_3_box');
    _this.box30.frame = 0;
 //fourth row green boxes
    _this.box31 = _this.add.sprite(66,293.5,'15_1_3_box');
    _this.box31.frame = 0;
    _this.box32 = _this.add.sprite(138,293.5,'15_1_3_box');
    _this.box32.frame = 1;
    _this.box33 = _this.add.sprite(210,293.5,'15_1_3_box');
    _this.box33.frame = 0;
    _this.box34 = _this.add.sprite(282,293.5,'15_1_3_box');
    _this.box34.frame = 1;
    _this.box35 = _this.add.sprite(354,293.5,'15_1_3_box');
    _this.box35.frame = 0;
    _this.box36 = _this.add.sprite(426,293.5,'15_1_3_box');
    _this.box36.frame = 1;
    _this.box37 = _this.add.sprite(498,293.5,'15_1_3_box');
    _this.box37.frame = 0;
    _this.box38 = _this.add.sprite(570,293.5,'15_1_3_box');
    _this.box38.frame = 1;
    _this.box39 = _this.add.sprite(642,293.5,'15_1_3_box');
    _this.box39.frame = 0;
    _this.box40 = _this.add.sprite(714,293.5,'15_1_3_box');
    _this.box40.frame = 1;
 //fifth row green boxes
    _this.box41 = _this.add.sprite(66,365.5,'15_1_3_box');
    _this.box41.frame = 1;
    _this.box42 = _this.add.sprite(138,365.5,'15_1_3_box');
    _this.box42.frame = 0;
    _this.box43 = _this.add.sprite(210,365.5,'15_1_3_box');
    _this.box43.frame = 1;
    _this.box44 = _this.add.sprite(282,365.5,'15_1_3_box');
    _this.box44.frame = 0;
    _this.box45 = _this.add.sprite(354,365.5,'15_1_3_box');
    _this.box45.frame = 1;
    _this.box46 = _this.add.sprite(426,365.5,'15_1_3_box');
    _this.box46.frame = 0;
    _this.box47 = _this.add.sprite(498,365.5,'15_1_3_box');
    _this.box47.frame = 1;
    _this.box48 = _this.add.sprite(570,365.5,'15_1_3_box');
    _this.box48.frame = 0;
    _this.box49 = _this.add.sprite(642,365.5,'15_1_3_box');
    _this.box49.frame = 1;
    _this.box50 = _this.add.sprite(714,365.5,'15_1_3_box');
    _this.box50.frame = 0;
 //sixth row green boxes
    _this.box51 = _this.add.sprite(66,437.5,'15_1_3_box');
    _this.box51.frame = 0;
    _this.box52 = _this.add.sprite(138,437.5,'15_1_3_box');
    _this.box52.frame = 1;
    _this.box53 = _this.add.sprite(210,437.5,'15_1_3_box');
    _this.box53.frame = 0;
    _this.box54 = _this.add.sprite(282,437.5,'15_1_3_box');
    _this.box54.frame = 1;
    _this.box55 = _this.add.sprite(354,437.5,'15_1_3_box');
    _this.box55.frame = 0;
    _this.box56 = _this.add.sprite(426,437.5,'15_1_3_box');
    _this.box56.frame = 1;
    _this.box57 = _this.add.sprite(498,437.5,'15_1_3_box');
    _this.box57.frame = 0;
    _this.box58 = _this.add.sprite(570,437.5,'15_1_3_box');
    _this.box58.frame = 1;
    _this.box59 = _this.add.sprite(642,437.5,'15_1_3_box');
    _this.box59.frame = 0;
    _this.box60 = _this.add.sprite(714,437.5,'15_1_3_box');
    _this.box60.frame = 1;

    _this.boxGroup.add(_this.box1);_this.boxGroup.add(_this.box2);_this.boxGroup.add(_this.box3);_this.boxGroup.add(_this.box4);_this.boxGroup.add(_this.box5);_this.boxGroup.add(_this.box6);_this.boxGroup.add(_this.box7);_this.boxGroup.add(_this.box8);_this.boxGroup.add(_this.box9);_this.boxGroup.add(_this.box10);
    _this.boxGroup.add(_this.box11);_this.boxGroup.add(_this.box12);_this.boxGroup.add(_this.box13);_this.boxGroup.add(_this.box14);_this.boxGroup.add(_this.box15);_this.boxGroup.add(_this.box16);_this.boxGroup.add(_this.box17);_this.boxGroup.add(_this.box18);_this.boxGroup.add(_this.box19);_this.boxGroup.add(_this.box20);  
    _this.boxGroup.add(_this.box21);_this.boxGroup.add(_this.box22);_this.boxGroup.add(_this.box23);_this.boxGroup.add(_this.box24);_this.boxGroup.add(_this.box25);_this.boxGroup.add(_this.box26);_this.boxGroup.add(_this.box27);_this.boxGroup.add(_this.box28);_this.boxGroup.add(_this.box29);_this.boxGroup.add(_this.box30);
    _this.boxGroup.add(_this.box31);_this.boxGroup.add(_this.box32);_this.boxGroup.add(_this.box33);_this.boxGroup.add(_this.box34);_this.boxGroup.add(_this.box35);_this.boxGroup.add(_this.box36);_this.boxGroup.add(_this.box37);_this.boxGroup.add(_this.box38);_this.boxGroup.add(_this.box39);_this.boxGroup.add(_this.box40);
    _this.boxGroup.add(_this.box41);_this.boxGroup.add(_this.box42);_this.boxGroup.add(_this.box43);_this.boxGroup.add(_this.box44);_this.boxGroup.add(_this.box45);_this.boxGroup.add(_this.box46);_this.boxGroup.add(_this.box47);_this.boxGroup.add(_this.box48);_this.boxGroup.add(_this.box49);_this.boxGroup.add(_this.box50);
    _this.boxGroup.add(_this.box51);_this.boxGroup.add(_this.box52);_this.boxGroup.add(_this.box53);_this.boxGroup.add(_this.box54);_this.boxGroup.add(_this.box55);_this.boxGroup.add(_this.box56);_this.boxGroup.add(_this.box57);_this.boxGroup.add(_this.box58);_this.boxGroup.add(_this.box59);_this.boxGroup.add(_this.box60);
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
    updateTimer:function() {
     _this.counterForTimer++;
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

      if(!_this.timer)
      {
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.timer = _this.time.create(false);

          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        }
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        
         _this.Arrow1.input.useHandCursor = true;
        _this.Arrow2.input.useHandCursor = true;
        _this.Arrow3.input.useHandCursor = true;
        _this.Arrow4.input.useHandCursor = true;
        

        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
        console.log("_this.no11"+_this.no11);
        
        if(_this.no1==0)
        {
        _this.questno=_this.qArrays1[_this.no1];
        }
        if(_this.no1==1)
        {
        _this.questno=_this.qArrays2[_this.mno1];
        }
        if(_this.no1==2)
        {
        _this.questno=_this.qArrays3[_this.rno1];
        }
        if(_this.no1==3)
        {
        _this.questno=_this.qArrays4[_this.rno1];
        }
        if(_this.no1==4)
        {
        _this.questno=_this.qArrays5[_this.qno1];
        }
        if(_this.no1==5)
        {
         _this.questno=_this.qArrays6[_this.vno1];
        }
        console.log("_this.questno "+_this.questno);
        console.log("_this.prevLocation "+_this.prevLocation);
        console.log("_this.qid "+_this.qid);
        // _this.questno = 11;
      switch( _this.questno)    
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
        case 16: _this.gotoSixteenthQuestion();
            break;
           
      }
    },
   
gotoFirstQuestion:function(){ 
    if(window.languageSelected =="Gujarati")
        {
          _this.interval =   setTimeout(function(){
           _this.getVoice();
            },9000);
        }
    else if(window.languageSelected =="Hindi")
        {
           _this.interval =  setTimeout(function(){
           _this.getVoice();
            },8000);
        }
    else{
        _this.interval = setTimeout(function(){
           _this.getVoice();
            },6000);
        }    //3 step Right
        //Move 3 steps to the right
         //_this.getVoice();
        
        // _this.ux=230;
       //_this.uy=110;
    
       _this.ux=300;
       _this.uy=80;
       
        console.log("1");
        _this.rightmark.frame = 0;
        _this.px=_this.ux;
        _this.py=_this.uy;
        _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=1;
        _this.prevQid = 1;
        _this.rightans=2;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);
    
},
checkforRightAns:function(target){
    target.frame= 1;
   console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
   console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
    
    if(_this.qid == 1 && (_this.BoyStanding.x == 516 && _this.BoyStanding.y == 80))
        {
            console.log("YOU are RIGHT");
         //_this.BoyStanding.kill();
            //_this.BoyStanding.loadTexture('15_1_3_Kiddanim1', 0, false);
            _this.disableButtons();
         // _this.BoyStanding = _this.add.sprite(446,110,'15_1_3_Kiddanim6');
         _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
          _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
            setTimeout(function(){_this.correctAns();}, 1500);
        }
    else if(_this.qid == 2 && (_this.BoyStanding.x == 588 && _this.BoyStanding.y == 80))
        {
            _this.disableButtons();
            if( _this.BoyStanding.key == "15_1_3_Kiddanim6")
            {
                _this.BoyStanding.y += 46;
                _this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim5');
                _this.BoyStanding.animations.play('15_1_3_Kiddanim5',10,false);
                
                _this.tempAnim.onComplete.add(function(){
                    _this.snakeSound = _this.add.audio('snakeSound');
                    _this.snakeSound.play();                              
                      if( _this.BoyStanding.key == "15_1_3_Kiddanim5")
                        { 
                            //_this.BoyStanding.x -= 70;
                            _this.BoyStanding.y -= 40;
                            _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                            _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                            _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                              setTimeout(function(){_this.correctAns();}, 2000);    
                            _this.tempAnim.onComplete.add(function(){
                                  var M1 = this.add.tween(_this.BoyStanding);
                                  M1.to({ x: 510,y:150}, 0, 'Linear', true, 0);//520,190
                                  M1.onComplete.add(function(){
                                     // _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                      _this.BoyStanding.x = 516;
                                      _this.BoyStanding.y = 152;
                                    },_this);
                                },_this);
                        }
                },_this);
            }
            
        }
    else if(_this.qid == 3 && (_this.BoyStanding.x == 660 && _this.BoyStanding.y == 80))
        {
                 _this.disableButtons();
                //_this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                
                _this.tempAnim.onComplete.add(function(){
                    _this.ladderSound = _this.add.audio('ladderSound');
                    _this.ladderSound.play();
                    setTimeout(function(){_this.correctAns();}, 1500);
                    var M1 = this.add.tween(_this.BoyStanding);
                     M1.to({ x: 588,y:8}, 0, 'Linear', true, 0);
                     _this.BoyStanding.x = 588;
                      _this.BoyStanding.y = 8;
                },_this);
        }
    else if(_this.qid == 4)              //2 right
        {
            if((_this.BoyStanding.x == 660 && _this.BoyStanding.y == 80)&& _this.prevQid == 1)
                {
                    _this.disableButtons();
                    _this.prevLocation = '4a';  //topright ladder 
                    _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                    _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);

                    _this.tempAnim.onComplete.add(function(){
                        _this.ladderSound = _this.add.audio('ladderSound');
                        _this.ladderSound.play();
                         setTimeout(function(){_this.correctAns();}, 1500);
                          var M1 = this.add.tween(_this.BoyStanding);
                          M1.to({ x: 588,y:8}, 0, 'Linear', true, 0);
                          _this.BoyStanding.x = 588;
                          _this.BoyStanding.y = 8;
                    },_this);
                }
            else if((_this.BoyStanding.x == 660 && _this.BoyStanding.y == 152)&& _this.prevQid == 2)
                {
                     _this.disableButtons();
                    setTimeout(function(){_this.correctAns();}, 1500);
                    _this.prevLocation = '4b';  //snakeTail last but one
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 732 && _this.BoyStanding.y == 8)&& _this.prevQid == 3)
                {
                     _this.disableButtons();
                    setTimeout(function(){_this.correctAns();}, 1500);
                    _this.prevLocation = '4c'; //top Last
                    _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                    _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else
                {
                    _this.wrongAns();
                }
        }
    else if(_this.qid == 5) // 3 left
        {
            if((_this.BoyStanding.x == 516 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '4c')
                {
                     _this.disableButtons();
                    _this.prevLocation = '51r7c';
                    setTimeout(function(){_this.correctAns();}, 1500);
                    _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                    _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '4a')
                {
                    _this.disableButtons();
                    _this.prevLocation = '52r3c'
                    if( _this.BoyStanding.key == "15_1_3_Kiddanim6")
                        {
                            _this.BoyStanding.y += 46;
                            _this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                            _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim5');
                            _this.BoyStanding.animations.play('15_1_3_Kiddanim5',10,false);

                            _this.tempAnim.onComplete.add(function(){
                                _this.snakeSound = _this.add.audio('snakeSound');
                                _this.snakeSound.play();
                                  if( _this.BoyStanding.key == "15_1_3_Kiddanim5")
                                    { 
                                        //_this.BoyStanding.x -= 70;
                                        _this.BoyStanding.y -= 40;
                                        _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                        _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                                        _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                                         setTimeout(function(){_this.correctAns();}, 2000);
                                        _this.tempAnim.onComplete.add(function(){
                                              var M1 = this.add.tween(_this.BoyStanding);
                                              M1.to({ x: 228,y:80}, 0, 'Linear', true, 0);//520,190
                                              M1.onComplete.add(function(){
                                                 // _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                                  _this.BoyStanding.x = 228;
                                                  _this.BoyStanding.y = 80;
                                                },_this);
                                            },_this);
                                    }
                            },_this);
                        }
                }
            else if((_this.BoyStanding.x == 444 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '4b')
                {
                     _this.disableButtons();
                     _this.prevLocation = '53r6c'
                    setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else
                {
                    _this.wrongAns();
                }
        }
    else if(_this.qid == 6)
        {
            if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '4b')
                {
                     _this.disableButtons();
                     _this.prevLocation = '53r5c'
                      setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '4a')
                {
                     _this.disableButtons();
                    _this.prevLocation = '51r4c'
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 444 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '4c')
                {
                     _this.disableButtons();
                     _this.prevLocation = '51r6c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
                else
                {
                    _this.wrongAns();
                }
        }
     else if(_this.qid == 7)
        {
            if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '4c')
                {
                   _this.prevLocation = '52r3c';
                    if( _this.BoyStanding.key == "15_1_3_Kiddanim6")
                        {
                             _this.disableButtons();
                            _this.BoyStanding.y += 46;
                            _this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                            _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim5');
                            _this.BoyStanding.animations.play('15_1_3_Kiddanim5',10,false);

                            _this.tempAnim.onComplete.add(function(){
                                    _this.snakeSound = _this.add.audio('snakeSound');
                                    _this.snakeSound.play();
                                  if( _this.BoyStanding.key == "15_1_3_Kiddanim5")
                                    { 
                                        //_this.BoyStanding.x -= 70;
                                        _this.BoyStanding.y -= 40;
                                        _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                        _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                                        _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                                         setTimeout(function(){_this.correctAns();}, 2000);
                                        _this.tempAnim.onComplete.add(function(){
                                              var M1 = this.add.tween(_this.BoyStanding);
                                              M1.to({ x: 228,y:80}, 0, 'Linear', true, 0);//520,190
                                              M1.onComplete.add(function(){
                                                 // _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                                  _this.BoyStanding.x = 228;
                                                  _this.BoyStanding.y = 80;
                                                },_this);
                                            },_this);
                                    }
                            },_this);
                        }
                }
            else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '4a')
                {
                     _this.disableButtons();
                    _this.prevLocation = '51r3c'
                    setTimeout(function(){_this.correctAns();}, 1500);
                    _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
          else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '4b')
                {
                     _this.disableButtons();
                     _this.prevLocation = '53r4c'
                    setTimeout(function(){_this.correctAns();}, 1500);
                    _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else
                {
                    _this.wrongAns();
                }
        }
    else if(_this.qid == 8)
        {
            if((_this.BoyStanding.x == 516 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '51r7c')
                {
                     _this.disableButtons();
                    _this.prevLocation = '83r7c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 444 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '51r6c')
                {
                     _this.disableButtons();
                     _this.prevLocation = '83r6c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '52r3c')
                {
                     _this.disableButtons();
                     _this.prevLocation = '84r3c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '51r4c')
                {
                     _this.disableButtons();
                     _this.prevLocation = '83r4c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '51r3c')
                {
                     _this.disableButtons();
                    _this.prevLocation = '83r3c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 444 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '53r6c')
                {
                     _this.disableButtons();
                    _this.prevLocation = '85r6c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '53r5c')
                {
                     _this.disableButtons();
                    _this.prevLocation = '85r5c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '53r4c')
                {
                     _this.disableButtons();
                     _this.prevLocation = '85r4c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
                else
                {
                    _this.wrongAns();
                }
        }
    else if(_this.qid == 9)
        {
            if((_this.BoyStanding.x == 516 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '51r7c')
                {
                     _this.disableButtons();
                    _this.prevLocation = '94r7c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 444 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '51r6c')
                {
                     _this.disableButtons();
                     _this.prevLocation = '95r7c';
                    if( _this.BoyStanding.key == "15_1_3_Kiddanim6")
                        {
                            _this.BoyStanding.y += 46;
                            _this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                            _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim5');
                            _this.BoyStanding.animations.play('15_1_3_Kiddanim5',10,false);

                            _this.tempAnim.onComplete.add(function(){
                                    _this.snakeSound = _this.add.audio('snakeSound');
                                    _this.snakeSound.play();
                                  if( _this.BoyStanding.key == "15_1_3_Kiddanim5")
                                    { 
                                        //_this.BoyStanding.x -= 70;
                                        _this.BoyStanding.y -= 40;
                                        _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                        _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                                        _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                                         setTimeout(function(){_this.correctAns();}, 2000);
                                        _this.tempAnim.onComplete.add(function(){
                                              var M1 = this.add.tween(_this.BoyStanding);
                                              M1.to({ x: 516,y:296}, 0, 'Linear', true, 0);//520,190
                                              M1.onComplete.add(function(){
                                                 // _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                                  _this.BoyStanding.x = 516;
                                                  _this.BoyStanding.y = 296;
                                                },_this);
                                            },_this);
                                    }
                            },_this);
                        }
                }
           else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '52r3c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '95r3c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '51r4c')
                {
                    _this.disableButtons();
                    if( _this.BoyStanding.key == "15_1_3_Kiddanim6")
                        {
                            _this.prevLocation = '96r3c';
                            _this.BoyStanding.y += 46;
                            _this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                            _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim5');
                            _this.BoyStanding.animations.play('15_1_3_Kiddanim5',10,false);

                            _this.tempAnim.onComplete.add(function(){
                                    _this.snakeSound = _this.add.audio('snakeSound');
                                    _this.snakeSound.play();
                                  if( _this.BoyStanding.key == "15_1_3_Kiddanim5")
                                    { 
                                        //_this.BoyStanding.x -= 70;
                                        _this.BoyStanding.y -= 40;
                                        _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                        _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                                        _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                                         setTimeout(function(){_this.correctAns();}, 2000);
                                        _this.tempAnim.onComplete.add(function(){
                                              var M1 = this.add.tween(_this.BoyStanding);
                                              M1.to({ x: 228,y:368}, 0, 'Linear', true, 0);//520,190
                                              M1.onComplete.add(function(){
                                                 // _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                                  _this.BoyStanding.x = 228;
                                                  _this.BoyStanding.y = 368;
                                                },_this);
                                            },_this);
                                    }
                            },_this);
                        }
                }
           else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '51r3c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '94r3c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 444 && _this.BoyStanding.y == 368)&&  _this.prevLocation == '53r6c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '96r6c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 368)&&  _this.prevLocation == '53r5c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '96r5c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
           else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 368)&&  _this.prevLocation == '53r4c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '96r4c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else
                {
                    _this.wrongAns();
                }
        }
    else if(_this.qid == 10)
        {
             if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '83r7c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '113r5c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '83r6c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '113r4c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                } 
            else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '84r3c')
                {
                    _this.disableButtons();
                    _this.prevLocation = '114r1c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                } 
            else if((_this.BoyStanding.x == 156 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '83r4c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '113r2c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                } 
            else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '83r3c')
                {
                    _this.disableButtons();
                    _this.prevLocation = '113r1c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '85r6c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '115r4c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '85r5c')
                {
                    _this.disableButtons();
                    _this.prevLocation = '115r3c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 156 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '85r4c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '115r2c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '94r7c')
                {
                    _this.disableButtons();
                    _this.prevLocation = '113r4c';
                     _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                    _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);

                    _this.tempAnim.onComplete.add(function(){
                        _this.ladderSound = _this.add.audio('ladderSound');
                        _this.ladderSound.play();
                         setTimeout(function(){_this.correctAns();}, 1500);
                          var M1 = this.add.tween(_this.BoyStanding);
                          M1.to({ x: 300,y:152}, 0, 'Linear', true, 0);
                          _this.BoyStanding.x = 300;
                          _this.BoyStanding.y = 152;
                    },_this);
                }
            else if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '95r7c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '115r5c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 296)&&  _this.prevLocation == '95r3c')
                {
                    _this.disableButtons();
                    _this.prevLocation = '114r2c';
                     _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                    _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);

                    _this.tempAnim.onComplete.add(function(){
                        _this.ladderSound = _this.add.audio('ladderSound');
                        _this.ladderSound.play();
                         setTimeout(function(){_this.correctAns();}, 1500);
                          var M1 = this.add.tween(_this.BoyStanding);
                          M1.to({ x: 156,y:224}, 0, 'Linear', true, 0);
                          _this.BoyStanding.x = 156;
                          _this.BoyStanding.y = 224;
                    },_this);
                }
            else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 368)&&  _this.prevLocation == '96r3c')
                {
                    _this.disableButtons();
                    _this.prevLocation = '116r1c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '94r3c')
                {
                    _this.disableButtons();
                    _this.prevLocation = '114r1c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 368)&&  _this.prevLocation == '96r6c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '115r5c';
                    _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                    _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);

                    _this.tempAnim.onComplete.add(function(){
                        _this.ladderSound = _this.add.audio('ladderSound');
                        _this.ladderSound.play();
                         setTimeout(function(){_this.correctAns();}, 1500);
                          var M1 = this.add.tween(_this.BoyStanding);
                          M1.to({ x: 372,y:296}, 0, 'Linear', true, 0);
                          _this.BoyStanding.x = 372;
                          _this.BoyStanding.y = 296;
                    },_this);
                }
            else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 368)&&  _this.prevLocation == '96r5c')
                {
                    _this.disableButtons();
                     _this.prevLocation = '116r3c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 156 && _this.BoyStanding.y == 368)&&  _this.prevLocation == '96r4c')
                {
                    _this.disableButtons();
                    _this.prevLocation = '116r2c';
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
                else
                {
                    _this.wrongAns();
                }
        }
    else if(_this.qid == 11)
        {
            if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '113r5c')
                {
                   _this.disableButtons();
                    if( _this.BoyStanding.key == "15_1_3_Kiddanim6")
                        {
                            _this.BoyStanding.y += 46;
                            _this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                            _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim5');
                            _this.BoyStanding.animations.play('15_1_3_Kiddanim5',10,false);

                            _this.tempAnim.onComplete.add(function(){
                                _this.snakeSound = _this.add.audio('snakeSound');
                                _this.snakeSound.play();
                                  if( _this.BoyStanding.key == "15_1_3_Kiddanim5")
                                    { 
                                        //_this.BoyStanding.x -= 70;
                                        _this.BoyStanding.y -= 40;
                                        _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                        _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                                        _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                                         setTimeout(function(){_this.correctAns();}, 2000);
                                        _this.tempAnim.onComplete.add(function(){
                                              var M1 = this.add.tween(_this.BoyStanding);
                                              M1.to({ x: 228,y:80}, 0, 'Linear', true, 0);//520,190
                                              M1.onComplete.add(function(){
                                                 // _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                                  _this.BoyStanding.x = 228;
                                                  _this.BoyStanding.y = 80;
                                                },_this);
                                            },_this);
                                    }
                            },_this);
                        }
                }
             else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '113r4c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 80)&&  _this.prevLocation == '114r1c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                } 
            else if((_this.BoyStanding.x == 156 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '113r2c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 8)&&  _this.prevLocation == '113r1c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 300 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '115r4c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '115r3c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                } 
            else if((_this.BoyStanding.x == 156 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '115r2c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 372 && _this.BoyStanding.y == 152)&&  _this.prevLocation == '115r5c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 156 && _this.BoyStanding.y == 80)&&  _this.prevLocation == '114r2c')
                {
                    _this.disableButtons();
                    _this.BoyStanding.y += 46;
                            _this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                            _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim5');
                            _this.BoyStanding.animations.play('15_1_3_Kiddanim5',10,false);

                            _this.tempAnim.onComplete.add(function(){
                                    _this.snakeSound = _this.add.audio('snakeSound');
                                    _this.snakeSound.play();
                                  if( _this.BoyStanding.key == "15_1_3_Kiddanim5")
                                    { 
                                        //_this.BoyStanding.x -= 70;
                                        _this.BoyStanding.y -= 40;
                                        _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                        _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                                        _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                                         setTimeout(function(){_this.correctAns();}, 2000);
                                        _this.tempAnim.onComplete.add(function(){
                                              var M1 = this.add.tween(_this.BoyStanding);
                                              M1.to({ x: 228,y:152}, 0, 'Linear', true, 0);//520,190
                                              M1.onComplete.add(function(){
                                                 // _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                                                  _this.BoyStanding.x = 228;
                                                  _this.BoyStanding.y = 152;
                                                },_this);
                                            },_this);
                                    }
                            },_this);
                 }
             else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '116r1c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 84 && _this.BoyStanding.y == 80)&&  _this.prevLocation == '114r1c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 228 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '116r3c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else if((_this.BoyStanding.x == 156 && _this.BoyStanding.y == 224)&&  _this.prevLocation == '116r2c')
                {
                    _this.disableButtons();
                     setTimeout(function(){_this.correctAns();}, 1500);
                     _this.BoyStanding.animations.add('15_1_3_Kiddanim6');
                     _this.BoyStanding.animations.play('15_1_3_Kiddanim6',10,false);
                }
            else
                {
                    _this.wrongAns();
                }
                
        }
    else
        {
            _this.wrongAns();
        }
       
},
gotoSecondQuestion:function(){
   if(window.languageSelected =="Gujarati")
        {
          _this.interval =  setTimeout(function(){
           _this.getVoice();
            },9000);
        }
    else if(window.languageSelected =="Hindi")
        {
          _this.interval =   setTimeout(function(){
           _this.getVoice();
            },8000);
        }
    else{
        _this.interval = setTimeout(function(){
           _this.getVoice();
            },6000);
        }
        //Move 4 steps to the right
       //   _this.getVoice();
    
     _this.ux=300;
       _this.uy=80;
    
        console.log("2");
        _this.px=_this.ux;
        _this.py=_this.uy;
        _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=2;
        _this.prevQid =2;
        _this.rightans=3;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);
    
},
    
gotoThirdQuestion:function(){
   if(window.languageSelected =="Gujarati")
        {
           _this.interval = setTimeout(function(){
           _this.getVoice();
            },9000);
        }
    else if(window.languageSelected =="Hindi")
        {
           _this.interval =  setTimeout(function(){
           _this.getVoice();
            },8000);
        }
    else{
        _this.interval = setTimeout(function(){
           _this.getVoice();
            },6000);
        }
        //Move 5 steps to the right
      // _this.getVoice();

        _this.ux=300;
        _this.uy=80;
    
        console.log("3rd question");
        _this.px=_this.ux;
        _this.py=_this.uy; _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=3;
        _this.prevQid=3;
        _this.rightans=3;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);
    
},
    
gotoFourthQuestion:function(){
    _this.getVoice();
        //Move 2 steps to the right
       // _this.getVoice();
        
       // _this.ux=516; //3rd question
       // _this.uy=80; 
    
        //_this.ux=516;
       // _this.uy=152; 
    
       // _this.ux=588;
        //_this.uy=8;
    
        console.log("4");  
        _this.px=_this.ux;
        _this.py=_this.uy; 
        _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=4;
        //_this.prevQid = 3;
        _this.rightans=2;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);
},
gotoFifthQuestion:function(){
    _this.getVoice();
        //move 2 steps left
        //_this.getVoice();
      //  _this.prevLocation = '4b';
        
       // _this.ux=732; //top right last
       // _this.uy=8; 
    
      //  _this.ux=588; //top right 2nd last
       // _this.uy=8; 
    
       // _this.ux=660; //top right 2nd last
        //_this.uy=152;
          
        console.log("5");
        _this.px=_this.ux;
        _this.py=_this.uy; _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=5;
        //_this.prevQid = 3;
        _this.rightans=2;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);

},
gotoSixthQuestion:function(){
    _this.getVoice();
        //Move 4 steps to the left
      //  _this.getVoice();
      
    // _this.prevLocation = '4c';
        
      //  _this.ux=732; //top right last
      //  _this.uy=8; 
    
        //_this.ux=588; //top right 2nd last
        //_this.uy=8; 
    
        //_this.ux=660; //top right 2nd last
       /// _this.uy=152;
    
          
        console.log("6");  
        _this.px=_this.ux;
        _this.py=_this.uy; _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=6;
        _this.rightans=2;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);

},
gotoSeventhQuestion:function(){
    _this.getVoice();
        //Move 3 steps to the up
        // _this.getVoice();
        //_this.prevLocation = '4a';
        
        //_this.ux=732; //top right last
        //_this.uy=8; 
    
        //_this.ux=588; //top right 2nd last
        //_this.uy=8; 
    
      //  _this.ux=660; //top right 2nd last
       // _this.uy=152;
          
        console.log("7");
        _this.px=_this.ux;
        _this.py=_this.uy; _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=7;
        _this.rightans=3;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this); 
},
gotoEighthQuestion:function(){
    _this.getVoice();
        //Move 2 steps to the down
  // _this.getVoice();    
 
    //_this.prevLocation = '51r7c';
        
       // _this.ux=228; //2nd row 3rd column
        //_this.uy=80; 
    
        //_this.ux=444; //1row 6th column
       // _this.uy=8; 
    
        //_this.ux=516; // 1row 7th column
       // _this.uy=8; 
    
       // _this.ux=300; // 1row 4th column
       // _this.uy=8; 
    
        //_this.ux=228; // 1row 3th column
       // _this.uy=8;
    
        //_this.ux=444; // 3row 6th column
        //_this.uy=152;
    
        //_this.ux=372; // 3row 5th column
        //_this.uy=152;
    
        //_this.ux=300; // 3row 5th column
       // _this.uy=152;
    
    
          
     console.log("8");
        _this.px=_this.ux;
        _this.py=_this.uy; _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=8;
        _this.rightans=3;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);
},
gotoNinthQuestion:function(){
    _this.getVoice();
        //Move 4 steps to the left
     // _this.getVoice();
    
       // _this.prevLocation = '51r7c';
        
       // _this.ux=228; //2nd row 3rd column
        //_this.uy=80; 
    
       // _this.ux=444; //1row 6th column
       // _this.uy=8; 
    
       // _this.ux=516; // 1row 7th column
       // _this.uy=8; 
    
        //_this.ux=300; // 1row 4th column
        //_this.uy=8; 
    
        //_this.ux=228; // 1row 3th column
       // _this.uy=8;
    
        //_this.ux=444; // 3row 6th column
        //_this.uy=152;
    
       // _this.ux=372; // 3row 5th column
        //_this.uy=152;
    
       // _this.ux=300; // 3row 4th column
        //_this.uy=152;
    
          
        console.log("9");
        _this.px=_this.ux;
        _this.py=_this.uy; _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=9;
        _this.rightans=4;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);
         
},
gotoTenthQuestion:function(){
    _this.getVoice();
        //Move 5 steps to the left
     //_this.getVoice();
    
        //_this.prevLocation = '96r4c';
        
        //_this.ux=516; //3nd row 7rd column
        //_this.uy=152; 
    
       // _this.ux=444; //3nd row 6rd column
       // _this.uy=152; 
    
        //_this.ux=228; //4 row 3rd column
        //_this.uy=224; 
    
       // _this.ux=300; //3 row 4rd column
       // _this.uy=152; 
    
        //_this.ux=228; //3 row 3rd column
        //_this.uy=152; 
    
        //_this.ux=444; //5 row 6rd column
        //_this.uy=296; 
    
        //_this.ux=372; //5 row 5rd column
        //_this.uy=296;

        //_this.ux=300; //5 row 4rd column
        //_this.uy=296;
        
      //  _this.ux=516; //4 row 7rd column                   // 9th Question Start
      //  _this.uy=224; 
    
        //_this.ux=516; //5 row 7rd column                 
       // _this.uy=296;
    
        //_this.ux=228; //5 row 3rd column                 
        //_this.uy=296;
    
        //_this.ux=228; //6 row 3rd column                 
        //_this.uy=368;
    
        //_this.ux=228; //4 row 3rd column                 
       // _this.uy=224; 
    
        //_this.ux=444; //6 row 6rd column                 
        //_this.uy=368; 
    
        //_this.ux=372; //6 row 5rd column                 
        //_this.uy=368;
    
        //_this.ux=300; //6 row 4rd column                 
        //_this.uy=368;
          
        console.log("10");
        _this.px=_this.ux;
        _this.py=_this.uy; _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6');
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=10;
        _this.rightans=5;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);
},

gotoEleventhQuestion:function(){
    _this.getVoice();
        //Move 2 steps to the up
   // _this.getVoice();
   
        //_this.prevLocation = '116r2c';
        
    
         //_this.ux=372; //3nd row 5rd column
         //_this.uy=152;
    
        // _this.ux=300; //3nd row 4rd column
        // _this.uy=152;
    
        // _this.ux=84; //3nd row 4rd column
        //_this.uy=224; 
    
         //_this.ux=156; //3nd row 2rd column
         //_this.uy=152; 
    
       //  _this.ux=84; //1nd row 4rd column
         //_this.uy=152;
    
        //_this.ux=300; //5nd row 4rd column
         //_this.uy=296;
        
       // _this.ux=228; //5nd row 3rd column
        // _this.uy=296; 
    
        //_this.ux=156; //5nd row 2rd column
         //_this.uy=296;
    
        //_this.ux=372; //5nd row 5rd column
         //_this.uy=296;
    
       // _this.ux=156; //4nd row 2rd column
        // _this.uy=224;
    
        //_this.ux=84; //4nd row 1rd column
       // _this.uy=224; 
    
        //_this.ux=372; //5nd row 5rd column
        //_this.uy=296;
    
        //_this.ux=228; //6nd row 3rd column
        //_this.uy=368; 
    
       // _this.ux=156; //6nd row 3rd column
       // _this.uy=368;
    
        console.log("11");
        _this.px=_this.ux;
        _this.py=_this.uy; _this.BoyStanding = _this.add.sprite(_this.px,_this.py,'15_1_3_Kiddanim6'); 
        console.log("_this.BoyStanding.x"+_this.BoyStanding.x);
        console.log("_this.BoyStanding.y"+_this.BoyStanding.y);
        _this.ox=_this.BoyStanding.x;
        _this.oy=_this.BoyStanding.y;
        _this.qid=11;
        _this.rightans=4;
        _this.rightmark.inputEnabled = true;
        _this.rightmark.events.onInputDown.add(_this.checkforRightAns,_this);
},
    disableButtons : function() 
{
        _this.rightmark.inputEnabled = false;
     _this.Arrow1.input.useHandCursor = false;
        _this.Arrow2.input.useHandCursor = false;
        _this.Arrow3.input.useHandCursor = false;
        _this.Arrow4.input.useHandCursor = false;
},
correctAns:function()
    {
        _this.noofAttempts++;
        _this.rightmark.frame = 0;
        _this.starAnim =  _this.starsGroup.getChildAt( _this.count1);
        _this.starAnim.smoothed = false;
        _this.anim4 =  _this.starAnim.animations.add('star');
        _this.celebr = _this.add.audio('celebr');
        _this.celebr.play();
        _this.anim4.play();
        _this.count1++;
        _this.time.events.add(1000, function(){
             _this.ux=_this.BoyStanding.x;
            _this.uy=_this.BoyStanding.y;
            console.log("_this.ux "+_this.ux);
            console.log("_this.uy "+_this.uy);
            _this.removeEverthing();
        },_this);

        if(_this.timer)
               {
                    _this.timer.stop();
                    _this.timer = null;
               }

               _this.sceneCount++;
               _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
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

wrongAns:function(){
            _this.rightmark.inputEnabled = false;
          console.log("_this.ox "+_this.ox)
          _this.wmusic = _this.add.audio('waudio');
          _this.wmusic.play();
         if( _this.BoyStanding.key == "15_1_3_Kiddanim6")
            {
                _this.BoyStanding.y += 46;
                _this.BoyStanding.loadTexture('15_1_3_Kiddanim5', 0, false);
                _this.tempAnim = _this.BoyStanding.animations.add('15_1_3_Kiddanim5');
                _this.BoyStanding.animations.play('15_1_3_Kiddanim5',10,false);
                
                _this.tempAnim.onComplete.add(function(){
                      _this.rightmark.frame = 0;
                    _this.rightmark.inputEnabled = true;
                      if( _this.BoyStanding.key == "15_1_3_Kiddanim5")
                        { 
                            //_this.BoyStanding.x -= 70;
                            _this.BoyStanding.y -= 40;
                            _this.BoyStanding.loadTexture('15_1_3_Kiddanim6', 0, false);
                            _this.BoyStanding.x = _this.px;
                            _this.BoyStanding.y = _this.py;
                        }
                },_this);
            }
          _this.up = 0;
          _this.down = 0;
          _this.left = 0;
          _this.right = 0;
          //_this.getVoice();
},
removeEverthing:function() 
{
        _this.no1++;
        console.log("_this.no1"+_this.no1);
        if( _this.no1<6)
        {
            
              _this.wrong = true;
              _this.timer1.stop();
              _this.count =0;
              _this.up=0;
              _this.down=0;
              _this.left=0;
              _this.right=0;
              _this.starsGroup.getChildAt(_this.count1).frame = 2; 
             
              /*_this.ux=_this.BoyStanding.x-72+2;
              _this.uy=_this.BoyStanding.y+72;*/
              console.log("_this.ux"+_this.ux);
              console.log("_this.uy"+_this.uy);
							_this.BoyStanding.kill();        
              _this.getQuestion();
             // _this.getVoice();      
        }
        else
        {
             _this.timer1.stop();
            _this.timer1 = null;
            _this.counterForTimer = null;
             _this.stopVoice();
               setTimeout(function(){_this.state.start('sg15_1_3Score');
            }, 1000);
            
        }
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
    
	

      
    update:function(){

    },
    
    getVoice:function(){
         _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
      _this.src = document.createElement('source');
	  console.log("_this.questno "+_this.questno);
            switch(_this.questno)
            {
                    
                    
                case 1:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/3right.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/3right.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/3right.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/3right.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3b.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3b.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3b.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3b.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/3right.mp3"); 
                            }
                            break;
                case 2:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/4right.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/4right.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/4right.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/4right.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3c.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3c.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3c.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3c.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/4right.mp3"); 
                            }
                            break;
                case 3:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/5right.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/5right.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/5right.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/5right.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3d.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3d.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3d.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3d.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/5right.mp3"); 
                            }
                            break;
                case 4:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/2right.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/2right.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/2right.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/2right.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3a.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3a.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3a.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3a.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/2right.mp3"); 
                            }
                            break;
                case 5:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/3left.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/3left.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/3left.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/3left.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3f.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3f.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3f.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3f.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/3left.mp3"); 
                            }
                            break;
                case 6:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/4left.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/4left.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/4left.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/4left.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3g.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3g.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3g.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3g.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/4left.mp3"); 
                            }
                            break;
                case 7:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/5left.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/5left.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/5left.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/5left.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3h.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3h.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3h.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3h.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/5left.mp3"); 
                            }
                            break;
                case 8:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/2down.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/2down.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/2down.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/2down.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3i.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3i.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3i.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3i.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/2down.mp3"); 
                            }
                            break;
                case 9:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/3down.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/3down.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/3down.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/3down.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3j.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3j.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3j.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3j.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/3down.mp3"); 
                            }
                            break; 
                case 10:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/2left.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/2left.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/2left.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/2left.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3e.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3e.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3e.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3e.mp3");
                    }
                            else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/2left.mp3"); 
                            }
                            break;
                case 11:if(window.languageSelected =="English")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/English/2up.mp3"); 
                            }
                            else if(window.languageSelected =="Hindi")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Hindi/2up.mp3"); 
                            }
                            else if(window.languageSelected =="Kannada")
                            {
                                  _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Kannada/2up.mp3"); 
                            }
                           else if(window.languageSelected =="Gujarati")
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Gujarati/2up.mp3"); 
                            }
							else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Marathi/sg15.1.3m.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Telugu/sg15.1.3m.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Tamil/sg15.1.3m.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Urdu/sg15.1.3m.mp3");
                    }
                             else
                            {
                                 _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg15.1.3/Odiya/2up.mp3"); 
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
          clearInterval(_this.interval);
          _this.stopVoice();
        }

    
};