Game.unity12_2level1=function(){};

Game.unity12_2level1.prototype={
    init:function(game)
    {
       _this = this;
       
       telInitializer.gameIdInit("unity12_2",gradeSelected);
       
    },

create:function(game)
    {
        _this.amplify = null;
        _this.once = true;
        _this.selectedBox = null;
        _this.Maintween;
        _this.qArrays;
        _this.speaker;
        _this.celebration;
        _this.timerDisplay;
        _this.apple;
        _this.rightmark;
        _this.appleGrp;
        _this.boxGrp;
        _this.numbg;
        _this.ansbox;
        _this.txtbox;
        _this.numGrp;
        _this.rightAns ="";
        _this.numGroup;
        _this.background;
        _this.click3;
        _this.anim4;
        _this.wmusic;
        _this.tapsound;
        _this.cracksound;
        _this.clickSound;
        _this.starsGroup;
        _this.addEgg = 0;
    
        _this.enterTxt = null;
        _this.selectedAns1 = "";
        _this.selectedAns2 = "";
        _this.selectedAns3 = "";
        _this.selectedAns4 = "";
        _this.selectedAns5 = "";
         _this.selectedAns6 = "";
        _this.questioNo = 0;
        _this.toCheckNumberPad = false;
        
		_this.shake = new Phaser.Plugin.Shake(game);
		 game.plugins.add(_this.shake);
        
        _this.sceneCount = 0;
        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.box=0;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.correct=0;
        _this.celebration= false;
        
        _this.qArrays = new Array();
        _this.qArrays = [1,2,3,4,5,6];
        _this.qArrays = _this.shuffle(_this.qArrays);

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity12_1BG_01');
        
        _this.topbar=_this.add.sprite(0,0,'Unity12_3_1navBar');
        _this.topbar.scale.setTo(1,1.1);
        
        _this.backbtn = _this.add.button(-3,3,'newCommonBackBtnForAll',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade3levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false);
            //console.log("here");
        },_this,0,1,2);

        _this.speaker = _this.add.button(600,6,'unity1_1CommonSpeakerBtn',function(){
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            _this.getVoice();},_this,1,0,2);
        
        _this.timerbg=_this.add.sprite(305,6,'Unity12_3_1timebg');
        _this.timerbg.scale.setTo(1.2,1);
        
        _this.timerDisplay = _this.add.text(330,22,_this.minutes + ' : '+_this.seconds);
        _this.timerDisplay.anchor.setTo(0.5);
        _this.timerDisplay.align = 'center';
        _this.timerDisplay.font = 'Oh Whale';
        _this.timerDisplay.fontSize = 20;
        _this.timerDisplay.fill = '#ADFF2F';
         
       /* _this.dotbox=_this.add.sprite(70,7,'unity12_2dotbox');
        _this.txt1 = _this.add.text(45,17, 'PRACTICE');
        _this.txt1.anchor.setTo(0.5);
        _this.txt1.scale.setTo(1.2,1.2);
        _this.txt1.align = 'center';
        _this.txt1.font = 'Alte Haas Grotesk';
        _this.txt1.fontSize = 10;
        _this.txt1.fill = '#ffffff';
        _this.txt1.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.dotbox.addChild(_this.txt1);
        
        _this.txt2 = _this.add.text(240,24, 'Multiplication');
        _this.txt2.anchor.setTo(0.5);
        _this.txt2.align = 'center';
        _this.txt2.font = 'Alte Haas Grotesk';
        _this.txt2.fontSize = 20;
        _this.txt2.fill = '#ffffff';
        _this.txt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
*/
        _this.generateStarsForTheScene(6);
        _this.getQuestion();   
		_this.getVoice();
          
    },

 updateTimer:function() 
    {
        _this.counterForTimer++;
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            
            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes = _this.minutes+1;
            }
         }
        else
         {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
         }
    
        _this.timerDisplay.setText(_this.minutes+':' +_this.seconds);
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
         _this.stopvoice();
         _this.noofAttempts = 0;
         _this.AnsTimerCount = 0;
         _this.sceneCount++;
        _this.toCheckNumberPad = true;
        _this.timer = _this.time.create(false);

        //  Set a TimerEvent to occur after 2 seconds
        _this.timer.loop(1000, function()
                         {
                            _this.AnsTimerCount++;
                        }, this);

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        _this.timer.start();

        /*******************For Navigation Bar*********************/
        _this.timer1 = this.time.create(false);

        _this.timer1.loop(1000, function()
        {
            _this.updateTimer();
        }, _this);
        _this.timer1.start();
        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        
    	//console.log("get"+_this.no11);
        _this.speaker.inputEnabled=true;
        _this.speaker.input.useHandCursor = true;
        //_this.no11 = 0;
        _this.questionid =1;
        
    	switch(_this.qArrays[_this.no11])
    	{
    		case 1: _this.gotoFirstQuestion();
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
         
    	}
        
       
        
    },
   

    
    generateStarsForTheScene:function(count)
	{
		_this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			_this.starsGroup.create(_this.world.centerX-15, 10, 'unity1_1starAnim');
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

onDragStart:function(target){
         
         _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "drag", 
                    res_id: "level12.2_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
         
        _this.vx = target.x;   
        _this.vy = target.y; 
    
        target.input.enableDrag();
        _this.click1 = _this.add.audio('ClickSound');
        _this.click1.play();
    
     target.events.onDragStop.add(function(target)
    {
        target.x = _this.vx;   
        target.y = _this.vy;
        _this.click1 = this.add.audio('snapSound');
         _this.click1.play();
    
         //console.log("target.key:"+target.key);
     if(_this.questioNo==1)
        {
            //console.log("target.key:"+target.key);
            
                if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                 && _this.addEgg == 0)
                 {
                    
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg1.frame=9;
                      _this.glow1.frame=0;
                      _this.addEgg++;
                      _this.glow2.frame=1;
                     
                 }
                 
            else  if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
             {
                 
                      _this.smalleggGrp.getChildAt(1).visible = true;
                      _this.smallegg2.frame=9;
                      _this.glow2.frame=0;
                      _this.addEgg++;
                      _this.glow3.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
            
                      _this.smalleggGrp.getChildAt(2).visible = true;
                      _this.smallegg3.frame=9;
                      _this.glow3.frame=0;
                      _this.addEgg++;
                      _this.glow4.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                      _this.smalleggGrp.getChildAt(3).visible = true;
                      _this.smallegg4.frame=9;
                      _this.glow4.frame=0;
                      _this.addEgg++;
                      _this.glow5.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                       _this.smalleggGrp.getChildAt(4).visible = true;
                       _this.smallegg5.frame=9;
                       _this.glow5.frame=0;
                       _this.addEgg++;
                      _this.cracksound = _this.add.audio('eggcrack');
                      _this.cracksound.play();
                         
        
             }
        }
         else if(_this.questioNo==2)
             {
                 //console.log("tttt");
                if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                && _this.addEgg == 0)
                {
                     //console.log("ttt2");
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg6.frame=7;
                      _this.glow6.frame=0;
                      _this.addEgg++;
                      _this.glow7.frame=1;
               }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
            {
                     _this.smalleggGrp.getChildAt(1).visible = true;
                     _this.smallegg7.frame=7;
                     _this.glow7.frame=0;
                     _this.addEgg++;
                     _this.glow8.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
                     _this.smalleggGrp.getChildAt(2).visible = true;
                     _this.smallegg8.frame=7;
                     _this.glow8.frame=0;
                     _this.addEgg++;
                     _this.glow9.frame=1;
             }
             else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                     _this.smalleggGrp.getChildAt(3).visible = true;
                     _this.smallegg9.frame=7;
                     _this.glow9.frame=0;
                     _this.addEgg++;
                     _this.glow10.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                     _this.smalleggGrp.getChildAt(4).visible = true;
                     _this.smallegg10.frame=7;
                      _this.glow10.frame=0;
                     _this.addEgg++;
                     _this.glow11.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(5)) && (_this.smalleggGrp.getChildAt(5).visible == false))
                && _this.addEgg == 5)
             {
                     _this.smalleggGrp.getChildAt(5).visible = true;
                     _this.smallegg11.frame=7;
                     _this.glow11.frame=0;
                     _this.addEgg++;
                     _this.glow12.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(6)) && (_this.smalleggGrp.getChildAt(6).visible == false))
                && _this.addEgg == 6)
             {
                     _this.smalleggGrp.getChildAt(6).visible = true;
                     _this.smallegg12.frame=7;
                     _this.glow12.frame=0;
                     _this.addEgg++;
                     _this.glow13.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(7)) && (_this.smalleggGrp.getChildAt(7).visible == false))
                && _this.addEgg == 7)
             {
                     _this.smalleggGrp.getChildAt(7).visible = true;
                     _this.smallegg13.frame=7;
                     _this.glow13.frame=0;
                     _this.addEgg++;
                    _this.glow14.frame=1;
             } 
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(8)) && (_this.smalleggGrp.getChildAt(8).visible == false))
                && _this.addEgg == 8)
             {
                     _this.smalleggGrp.getChildAt(8).visible = true;
                     _this.smallegg14.frame=7;
                     _this.glow14.frame=0;
                     _this.addEgg++;
                    _this.glow15.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(9)) && (_this.smalleggGrp.getChildAt(9).visible == false))
                && _this.addEgg == 9)
             {
                     _this.smalleggGrp.getChildAt(9).visible = true;
                     _this.smallegg15.frame=7;
                    _this.glow15.frame=0;
                    _this.addEgg++;
                    _this.cracksound = _this.add.audio('eggcrack');
                    _this.cracksound.play();
             }
          }
         else if(_this.questioNo==3)
             {
                 if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                && _this.addEgg == 0)
                {
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg16.frame=11;
                      _this.glow16.frame=0;
                      _this.addEgg++;
                      _this.glow17.frame=1;
                }
             else  if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
             {
                 
                      _this.smalleggGrp.getChildAt(1).visible = true;
                      _this.smallegg17.frame=11;
                      _this.glow17.frame=0;
                      _this.addEgg++;
                      _this.glow18.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
            
                      _this.smalleggGrp.getChildAt(2).visible = true;
                      _this.smallegg18.frame=11;
                      _this.glow18.frame=0;
                      _this.addEgg++;
                      _this.glow19.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                      _this.smalleggGrp.getChildAt(3).visible = true;
                      _this.smallegg19.frame=11;
                      _this.glow19.frame=0;
                      _this.addEgg++;
                      _this.glow20.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                       _this.smalleggGrp.getChildAt(4).visible = true;
                       _this.smallegg20.frame=11;
                       _this.glow20.frame=0;
                       _this.addEgg++;
                       _this.cracksound = _this.add.audio('eggcrack');
                       _this.cracksound.play();
             }
         }
          else if(_this.questioNo==4)
             {
                if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                && _this.addEgg == 0)
                {
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg21.frame=13;
                      _this.glow21.frame=0;
                      _this.addEgg++;
                      _this.glow22.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
            {
                     _this.smalleggGrp.getChildAt(1).visible = true;
                     _this.smallegg22.frame=13;
                     _this.glow22.frame=0;
                     _this.addEgg++;
                     _this.glow23.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
                     _this.smalleggGrp.getChildAt(2).visible = true;
                     _this.smallegg23.frame=13;
                     _this.glow23.frame=0;
                     _this.addEgg++;
                     _this.glow24.frame=1;
             }
             else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                     _this.smalleggGrp.getChildAt(3).visible = true;
                     _this.smallegg24.frame=13;
                     _this.glow24.frame=0;
                     _this.addEgg++;
                     _this.glow25.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                     _this.smalleggGrp.getChildAt(4).visible = true;
                     _this.smallegg25.frame=13;
                     _this.glow25.frame=0;
                     _this.addEgg++;
                     _this.glow26.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(5)) && (_this.smalleggGrp.getChildAt(5).visible == false))
                && _this.addEgg == 5)
             {
                     _this.smalleggGrp.getChildAt(5).visible = true;
                     _this.smallegg26.frame=13;
                     _this.glow26.frame=0;
                     _this.addEgg++;
                     _this.glow27.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(6)) && (_this.smalleggGrp.getChildAt(6).visible == false))
                && _this.addEgg == 6)
             {
                     _this.smalleggGrp.getChildAt(6).visible = true;
                     _this.smallegg27.frame=13;
                     _this.glow27.frame=0;
                     _this.addEgg++;
                     _this.glow28.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(7)) && (_this.smalleggGrp.getChildAt(7).visible == false))
                && _this.addEgg == 7)
             {
                     _this.smalleggGrp.getChildAt(7).visible = true;
                     _this.smallegg28.frame=13;
                     _this.glow28.frame=0;
                     _this.addEgg++;
                     _this.glow29.frame=1;
             } 
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(8)) && (_this.smalleggGrp.getChildAt(8).visible == false))
                && _this.addEgg == 8)
             {
                     _this.smalleggGrp.getChildAt(8).visible = true;
                     _this.smallegg29.frame=13;
                     _this.glow29.frame=0;
                     _this.addEgg++;
                     _this.glow30.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(9)) && (_this.smalleggGrp.getChildAt(9).visible == false))
                && _this.addEgg == 9)
             {
                     _this.smalleggGrp.getChildAt(9).visible = true;
                     _this.smallegg30.frame=13;
                     _this.glow30.frame=0;
                     _this.addEgg++;
                     _this.cracksound = _this.add.audio('eggcrack');
                     _this.cracksound.play();
             }
          }
          else if(_this.questioNo==5)
             {
                 if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                && _this.addEgg == 0)
                {
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg31.frame=5;
                      _this.glow31.frame=0;
                      _this.addEgg++;
                      _this.glow32.frame=1;
                }
             else  if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
             {
                 
                      _this.smalleggGrp.getChildAt(1).visible = true;
                      _this.smallegg32.frame=5;
                      _this.glow32.frame=0;
                      _this.addEgg++;
                      _this.glow33.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
            
                      _this.smalleggGrp.getChildAt(2).visible = true;
                      _this.smallegg33.frame=5;
                      _this.glow33.frame=0;
                      _this.addEgg++;
                      _this.glow34.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                      _this.smalleggGrp.getChildAt(3).visible = true;
                      _this.smallegg34.frame=5;
                      _this.glow34.frame=0;
                      _this.addEgg++;
                      _this.glow35.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                       _this.smalleggGrp.getChildAt(4).visible = true;
                       _this.smallegg35.frame=5;
                      _this.glow35.frame=0;
                       _this.addEgg++;
                      _this.glow36.frame=1;
             }
                  else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(5)) && (_this.smalleggGrp.getChildAt(5).visible == false))
                && _this.addEgg == 5)
             {
                     _this.smalleggGrp.getChildAt(5).visible = true;
                     _this.smallegg36.frame=5;
                     _this.glow36.frame=0;
                     _this.addEgg++;
                     _this.glow37.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(6)) && (_this.smalleggGrp.getChildAt(6).visible == false))
                && _this.addEgg == 6)
             {
                     _this.smalleggGrp.getChildAt(6).visible = true;
                     _this.smallegg37.frame=5;
                      _this.glow37.frame=0;
                     _this.addEgg++;
                     _this.glow38.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(7)) && (_this.smalleggGrp.getChildAt(7).visible == false))
                && _this.addEgg == 7)
             {
                     _this.smalleggGrp.getChildAt(7).visible = true;
                     _this.smallegg38.frame=5;
                      _this.glow38.frame=0;
                     _this.addEgg++;
                     _this.glow39.frame=1;
             } 
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(8)) && (_this.smalleggGrp.getChildAt(8).visible == false))
                && _this.addEgg == 8)
             {
                     _this.smalleggGrp.getChildAt(8).visible = true;
                     _this.smallegg39.frame=5;
                     _this.glow39.frame=0;
                    _this.addEgg++;
                     _this.glow40.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(9)) && (_this.smalleggGrp.getChildAt(9).visible == false))
                && _this.addEgg == 9)
             {
                     _this.smalleggGrp.getChildAt(9).visible = true;
                     _this.smallegg40.frame=5;
                     _this.glow40.frame=0;
                     _this.addEgg++;
                     _this.cracksound = _this.add.audio('eggcrack');
                     _this.cracksound.play();
             }
          
         }
         else if(_this.questioNo==6)
             {
                if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                && _this.addEgg == 0)
                {
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg41.frame=3;
                      _this.glow41.frame=0;
                      _this.addEgg++;
                      _this.glow42.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
            {
                     _this.smalleggGrp.getChildAt(1).visible = true;
                     _this.smallegg42.frame=3;
                     _this.glow42.frame=0;
                     _this.addEgg++;
                     _this.glow43.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
                     _this.smalleggGrp.getChildAt(2).visible = true;
                     _this.smallegg43.frame=3;
                     _this.glow43.frame=0;
                     _this.addEgg++;
                    _this.glow44.frame=1;
             }
             else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                     _this.smalleggGrp.getChildAt(3).visible = true;
                     _this.smallegg44.frame=3;
                     _this.glow44.frame=0;
                     _this.addEgg++;
                     _this.glow45.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                     _this.smalleggGrp.getChildAt(4).visible = true;
                     _this.smallegg45.frame=3;
                    _this.glow45.frame=0;
                     _this.addEgg++;
                     _this.glow46.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(5)) && (_this.smalleggGrp.getChildAt(5).visible == false))
                && _this.addEgg == 5)
             {
                     _this.smalleggGrp.getChildAt(5).visible = true;
                     _this.smallegg46.frame=3;
                     _this.glow46.frame=0;
                     _this.addEgg++;
                     _this.glow47.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(6)) && (_this.smalleggGrp.getChildAt(6).visible == false))
                && _this.addEgg == 6)
             {
                     _this.smalleggGrp.getChildAt(6).visible = true;
                     _this.smallegg47.frame=3;
                     _this.glow47.frame=0;
                     _this.addEgg++;
                     _this.glow48.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(7)) && (_this.smalleggGrp.getChildAt(7).visible == false))
                && _this.addEgg == 7)
             {
                     _this.smalleggGrp.getChildAt(7).visible = true;
                     _this.smallegg48.frame=3;
                     _this.glow48.frame=0;
                     _this.addEgg++;
                     _this.glow49.frame=1;
             } 
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(8)) && (_this.smalleggGrp.getChildAt(8).visible == false))
                && _this.addEgg == 8)
             {
                     _this.smalleggGrp.getChildAt(8).visible = true;
                     _this.smallegg49.frame=3;
                    _this.glow49.frame=0;
                    _this.addEgg++;
                    _this.glow50.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(9)) && (_this.smalleggGrp.getChildAt(9).visible == false))
                && _this.addEgg == 9)
             {
                     _this.smalleggGrp.getChildAt(9).visible = true;
                     _this.smallegg50.frame=3;
                    _this.glow50.frame=0;
                    _this.addEgg++;
                    _this.cracksound = _this.add.audio('eggcrack');
                    _this.cracksound.play();
             }
          }
         else if(_this.questioNo==7)
             {
                if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                && _this.addEgg == 0)
                {
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg51.frame=13;
                      _this.glow51.frame=0;
                      _this.addEgg++;
                      _this.glow52.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
            {
                     _this.smalleggGrp.getChildAt(1).visible = true;
                     _this.smallegg52.frame=13;
                     _this.glow52.frame=0;
                     _this.addEgg++;
                     _this.glow53.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
                     _this.smalleggGrp.getChildAt(2).visible = true;
                     _this.smallegg53.frame=13;
                     _this.glow53.frame=0;
                     _this.addEgg++;
                     _this.glow54.frame=1;
             }
             else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                     _this.smalleggGrp.getChildAt(3).visible = true;
                     _this.smallegg54.frame=13;
                     _this.glow54.frame=0;
                     _this.addEgg++;
                     _this.glow55.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                     _this.smalleggGrp.getChildAt(4).visible = true;
                     _this.smallegg55.frame=13;
                     _this.glow55.frame=0;
                     _this.addEgg++;
                     _this.cracksound = _this.add.audio('eggcrack');
                    _this.cracksound.play();
             }
        
        }
          else if(_this.questioNo==8)
             {
                if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                && _this.addEgg == 0)
                {
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg56.frame=11;
                      _this.glow56.frame=0;
                      _this.addEgg++;
                      _this.glow57.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
            {
                     _this.smalleggGrp.getChildAt(1).visible = true;
                     _this.smallegg57.frame=11;
                     _this.glow57.frame=0;
                     _this.addEgg++;
                     _this.glow58.frame=1;
             }
              else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
                     _this.smalleggGrp.getChildAt(2).visible = true;
                     _this.smallegg58.frame=11;
                     _this.glow58.frame=0;
                     _this.addEgg++;
                    _this.glow59.frame=1;
             }
             else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                     _this.smalleggGrp.getChildAt(3).visible = true;
                     _this.smallegg59.frame=11;
                     _this.glow59.frame=0;
                     _this.addEgg++;
                     _this.glow60.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                     _this.smalleggGrp.getChildAt(4).visible = true;
                     _this.smallegg60.frame=11;
                    _this.glow60.frame=0;
                     _this.addEgg++;
                     _this.glow61.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(5)) && (_this.smalleggGrp.getChildAt(5).visible == false))
                && _this.addEgg == 5)
             {
                     _this.smalleggGrp.getChildAt(5).visible = true;
                     _this.smallegg61.frame=11;
                     _this.glow61.frame=0;
                     _this.addEgg++;
                     _this.glow62.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(6)) && (_this.smalleggGrp.getChildAt(6).visible == false))
                && _this.addEgg == 6)
             {
                     _this.smalleggGrp.getChildAt(6).visible = true;
                     _this.smallegg62.frame=11;
                     _this.glow62.frame=0;
                     _this.addEgg++;
                     _this.glow63.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(7)) && (_this.smalleggGrp.getChildAt(7).visible == false))
                && _this.addEgg == 7)
             {
                     _this.smalleggGrp.getChildAt(7).visible = true;
                     _this.smallegg63.frame=11;
                     _this.glow63.frame=0;
                     _this.addEgg++;
                     _this.glow64.frame=1;
             } 
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(8)) && (_this.smalleggGrp.getChildAt(8).visible == false))
                && _this.addEgg == 8)
             {
                     _this.smalleggGrp.getChildAt(8).visible = true;
                     _this.smallegg64.frame=11;
                    _this.glow64.frame=0;
                    _this.addEgg++;
                    _this.glow65.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(9)) && (_this.smalleggGrp.getChildAt(9).visible == false))
                && _this.addEgg == 9)
             {
                     _this.smalleggGrp.getChildAt(9).visible = true;
                     _this.smallegg65.frame=11;
                    _this.glow65.frame=0;
                    _this.addEgg++;
                    _this.cracksound = _this.add.audio('eggcrack');
                    _this.cracksound.play();
             }
          }
           else if(_this.questioNo==9)
             {
                 if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(0)) && (_this.smalleggGrp.getChildAt(0).visible == false))
                && _this.addEgg == 0)
                {
                      _this.smalleggGrp.getChildAt(0).visible = true;
                      _this.smallegg66.frame=9;
                      _this.glow66.frame=0;
                      _this.addEgg++;
                      _this.glow67.frame=1;
                }
             else  if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(1)) && (_this.smalleggGrp.getChildAt(1).visible == false))
                && _this.addEgg == 1)
             {
                 
                      _this.smalleggGrp.getChildAt(1).visible = true;
                      _this.smallegg67.frame=9;
                      _this.glow67.frame=0;
                      _this.addEgg++;
                      _this.glow68.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(2)) && (_this.smalleggGrp.getChildAt(2).visible == false))
                && _this.addEgg == 2)
             {
            
                      _this.smalleggGrp.getChildAt(2).visible = true;
                      _this.smallegg68.frame=9;
                      _this.glow68.frame=0;
                      _this.addEgg++;
                      _this.glow69.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(3)) && (_this.smalleggGrp.getChildAt(3).visible == false))
                && _this.addEgg == 3)
             {
                      _this.smalleggGrp.getChildAt(3).visible = true;
                      _this.smallegg69.frame=9;
                      _this.glow69.frame=0;
                      _this.addEgg++;
                      _this.glow70.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(4)) && (_this.smalleggGrp.getChildAt(4).visible == false))
                && _this.addEgg == 4)
             {
                       _this.smalleggGrp.getChildAt(4).visible = true;
                       _this.smallegg70.frame=9;
                       _this.glow70.frame=0;
                       _this.addEgg++;
                       _this.glow71.frame=1;

             }
             else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(5)) && (_this.smalleggGrp.getChildAt(5).visible == false))
                && _this.addEgg == 5)
             {
                     _this.smalleggGrp.getChildAt(5).visible = true;
                     _this.smallegg71.frame=9;
                     _this.glow71.frame=0;
                     _this.addEgg++;
                     _this.glow72.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(6)) && (_this.smalleggGrp.getChildAt(6).visible == false))
                && _this.addEgg == 6)
             {
                     _this.smalleggGrp.getChildAt(6).visible = true;
                     _this.smallegg72.frame=9;
                     _this.glow72.frame=0;
                     _this.addEgg++;
                     _this.glow73.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(7)) && (_this.smalleggGrp.getChildAt(7).visible == false))
                && _this.addEgg == 7)
             {
                     _this.smalleggGrp.getChildAt(7).visible = true;
                     _this.smallegg73.frame=9;
                     _this.glow73.frame=0;
                     _this.addEgg++;
                     _this.glow74.frame=1;
             } 
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(8)) && (_this.smalleggGrp.getChildAt(8).visible == false))
                && _this.addEgg == 8)
             {
                     _this.smalleggGrp.getChildAt(8).visible = true;
                     _this.smallegg74.frame=9;
                    _this.glow74.frame=0;
                    _this.addEgg++;
                    _this.glow75.frame=1;
             }
            else if((_this.checkOverlap(target,_this.smalleggGrp.getChildAt(9)) && (_this.smalleggGrp.getChildAt(9).visible == false))
                && _this.addEgg == 9)
             {
                     _this.smalleggGrp.getChildAt(9).visible = true;
                     _this.smallegg75.frame=9;
                    _this.glow75.frame=0;
                    _this.addEgg++;
                    _this.cracksound = _this.add.audio('eggcrack');
                    _this.cracksound.play();
             }
         }
             
             },_this);
     
          
            target.x = _this.vx;   
            target.y = _this.vy;
    
    
         
            target.events.onInputDown.removeAll(); 
             
},

     checkOverlap:function(spriteA, spriteB) 
	{

	    _this.boundsA = spriteA.getBounds();
	    _this.boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
        
    },  
          
                                
                                  
 gotoFirstQuestion:function(){ 
     _this.questioNo = 1;
   
     //_this.getVoice();;
     
     
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
     
     _this.glowGrp = _this.add.group();
     
     _this.glow1=_this.add.sprite(183,105,'unity12_2glow5')
     _this.glow1.anchor.setTo(0.5);
     _this.glow1.scale.setTo(1,1);
     _this.glow1.frame=1;
     
     _this.glow2=_this.add.sprite(183,145,'unity12_2glow5')
     _this.glow2.anchor.setTo(0.5);
     _this.glow2.scale.setTo(1,1);
     //_this.glow2.frame=1;
     
     _this.glow3=_this.add.sprite(183,183,'unity12_2glow5')
     _this.glow3.anchor.setTo(0.5);
     _this.glow3.scale.setTo(1,1);
     //_this.glow3.frame=1;
     
     _this.glow4=_this.add.sprite(183,221,'unity12_2glow5')
     _this.glow4.anchor.setTo(0.5);
     _this.glow4.scale.setTo(1,1);
     //_this.glow4.frame=1;
     
     _this.glow5=_this.add.sprite(183,258,'unity12_2glow5')
     _this.glow5.anchor.setTo(0.5);
     _this.glow5.scale.setTo(1,1);
     //_this.glow5.frame=1;
     
     _this.glowGrp.add(_this.glow1);
     _this.glowGrp.add(_this.glow2);
     _this.glowGrp.add(_this.glow3);
     _this.glowGrp.add(_this.glow4);
     _this.glowGrp.add(_this.glow5);
     
     
     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=4;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
      
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg1 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg1.anchor.setTo(0.5);
     _this.smallegg1.scale.setTo(1,1);
     _this.smallegg1.frame=8;
     _this.smallegg1.visible=false;
     _this.smallegg1.name = "smallegg1";
    
     _this.smallegg2 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg2.anchor.setTo(0.5);
     _this.smallegg2.scale.setTo(1,1);
     _this.smallegg2.frame=8;
     _this.smallegg2.visible=false;
     _this.smallegg2.name = "smallegg2";
     
     _this.smallegg3 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg3.anchor.setTo(0.5);
     _this.smallegg3.scale.setTo(1,1);
     _this.smallegg3.frame=8;
     _this.smallegg3.visible=false;
     _this.smallegg3.name = "smallegg3";
     
     _this.smallegg4 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg4.anchor.setTo(0.5);
     _this.smallegg4.scale.setTo(1,1);
     _this.smallegg4.frame=8;
    _this.smallegg4.visible=false;
     _this.smallegg4.name = "smallegg4";
     
     _this.smallegg5 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg5.anchor.setTo(0.5);
     _this.smallegg5.scale.setTo(1,1);
     _this.smallegg5.frame=8;
     _this.smallegg5.visible=false;
     _this.smallegg5.name = "smallegg5";
     
     _this.smalleggGrp.add(_this.smallegg1);
     _this.smalleggGrp.add(_this.smallegg2);
     _this.smalleggGrp.add(_this.smallegg3);
     _this.smalleggGrp.add(_this.smallegg4);
     _this.smalleggGrp.add(_this.smallegg5);
     
      _this.numGrp = _this.add.group();
     
     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=5;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=5;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=5;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=5;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=5;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=1;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=2;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=3;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=4;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=5;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,180,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
     
      _this.txtGrp = _this.add.group();

     _this.txtbox1 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,110,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=5;
     //_this.number11.scale.setTo(1,1.1);
     
     _this.txtbox2 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,240,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=1;
    // _this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;
    
     _this.number13 =_this.add.sprite(835,240,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=5;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.numboxGrp = _this.add.group();
     
     _this.numBoxNum1 = _this.add.sprite(752,147,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=1;
     
     _this.numBoxNum2 = _this.add.sprite(812,147,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=0;
     
     _this.numBoxNum3 = _this.add.sprite(752,277,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=2;
     
     _this.numBoxNum4 = _this.add.sprite(812,277,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=0;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=2;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=5;
     
      _this.numboxGrp.add(_this.numBoxNum1);
      _this.numboxGrp.add(_this.numBoxNum2);
      _this.numboxGrp.add(_this.numBoxNum3);
      _this.numboxGrp.add(_this.numBoxNum4);
      _this.numboxGrp.add(_this.numBoxNum5);
      _this.numboxGrp.add(_this.numBoxNum6);
     
     _this.txtGrp.add(_this.txtbox1);
     _this.txtGrp.add(_this.txtbox2);
     _this.txtGrp.add(_this.txtbox3);
     _this.txtGrp.add(_this.txtbox4);
     _this.txtGrp.add(_this.txtbox5);
     _this.txtGrp.add(_this.txtbox6);
     _this.txtGrp.add(_this.txtbox7);
     _this.txtGrp.add(_this.txtbox8);
     _this.txtGrp.add(_this.txtbox9);
     _this.txtGrp.add(_this.number11);
     _this.txtGrp.add(_this.number12);
     _this.txtGrp.add(_this.number13);
     
     _this.numGrp.add(_this.number1);
     _this.numGrp.add(_this.number2);
     _this.numGrp.add(_this.number3);
     _this.numGrp.add(_this.number4);
     _this.numGrp.add(_this.number5);
     _this.numGrp.add(_this.number6);
     _this.numGrp.add(_this.number7);
     _this.numGrp.add(_this.number8);
     _this.numGrp.add(_this.number9);
     _this.numGrp.add(_this.number10);
     _this.numGrp.add(_this.mul1);
     _this.numGrp.add(_this.mul2);
     _this.numGrp.add(_this.mul3);
     _this.numGrp.add(_this.mul4);
     _this.numGrp.add(_this.mul5);
     _this.numGrp.add(_this.equal1);
     _this.numGrp.add(_this.equal2);
     _this.numGrp.add(_this.equal3);
     _this.numGrp.add(_this.equal4);
     _this.numGrp.add(_this.equal5);
     
     
     
     _this.rightAns="102025";
 },
    
    
gotoSecondQuestion:function(){
    
    _this.questioNo = 2;
   
     //_this.getVoice();;
    
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
    
     _this.glowGrp = _this.add.group();

     _this.glow6=_this.add.sprite(165,105,'unity12_2glow4')
     _this.glow6.anchor.setTo(0.5);
     _this.glow6.scale.setTo(1,1);
     _this.glow6.frame=1;
     
     _this.glow7=_this.add.sprite(165,145,'unity12_2glow4')
     _this.glow7.anchor.setTo(0.5);
     _this.glow7.scale.setTo(1,1);
     //_this.glow7.frame=1;
     
     _this.glow8=_this.add.sprite(165,183,'unity12_2glow4')
     _this.glow8.anchor.setTo(0.5);
     _this.glow8.scale.setTo(1,1);
     //_this.glow8.frame=1;
     
     _this.glow9=_this.add.sprite(165,221,'unity12_2glow4')
     _this.glow9.anchor.setTo(0.5);
     _this.glow9.scale.setTo(1,1);
     //_this.glow9.frame=1;
     
     _this.glow10=_this.add.sprite(165,258,'unity12_2glow4')
     _this.glow10.anchor.setTo(0.5);
     _this.glow10.scale.setTo(1,1);
     //_this.glow10.frame=1;
    
     _this.glow11=_this.add.sprite(165,297,'unity12_2glow4')
     _this.glow11.anchor.setTo(0.5);
     _this.glow11.scale.setTo(1,1);
     //_this.glow11.frame=1;
    
     _this.glow12=_this.add.sprite(165,335,'unity12_2glow4')
     _this.glow12.anchor.setTo(0.5);
     _this.glow12.scale.setTo(1,1);
     //_this.glow12.frame=1;
    
     _this.glow13=_this.add.sprite(165,373,'unity12_2glow4')
     _this.glow13.anchor.setTo(0.5);
     _this.glow13.scale.setTo(1,1);
     //_this.glow13.frame=1;
    
     _this.glow14=_this.add.sprite(165,410,'unity12_2glow4')
     _this.glow14.anchor.setTo(0.5);
     _this.glow14.scale.setTo(1,1);
     //_this.glow14.frame=1;
    
     _this.glow15=_this.add.sprite(165,448,'unity12_2glow4')
     _this.glow15.anchor.setTo(0.5);
     _this.glow15.scale.setTo(1,1);
     //_this.glow15.frame=1;
    
     _this.glowGrp.add(_this.glow6);
     _this.glowGrp.add(_this.glow7);
     _this.glowGrp.add(_this.glow8);
     _this.glowGrp.add(_this.glow9);
     _this.glowGrp.add(_this.glow10);
     _this.glowGrp.add(_this.glow11);
     _this.glowGrp.add(_this.glow12);
     _this.glowGrp.add(_this.glow13);
     _this.glowGrp.add(_this.glow14);
     _this.glowGrp.add(_this.glow15);

     
     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=3;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
     
        
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg6 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg6.anchor.setTo(0.5);
     _this.smallegg6.scale.setTo(1,1);
     _this.smallegg6.frame=6;
     _this.smallegg6.visible=false;
     _this.smallegg6.name = "smallegg6";
     
     _this.smallegg7 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg7.anchor.setTo(0.5);
     _this.smallegg7.scale.setTo(1,1);
     _this.smallegg7.frame=6;
     _this.smallegg7.visible=false;
     _this.smallegg7.name = "smallegg7";
     
     _this.smallegg8 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg8.anchor.setTo(0.5);
     _this.smallegg8.scale.setTo(1,1);
     _this.smallegg8.frame=6;
     _this.smallegg8.visible=false;
     _this.smallegg8.name = "smallegg8";
     
     _this.smallegg9 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg9.anchor.setTo(0.5);
     _this.smallegg9.scale.setTo(1,1);
     _this.smallegg9.frame=6;
     _this.smallegg9.visible=false;
     _this.smallegg9.name = "smallegg9";
     
     _this.smallegg10 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg10.anchor.setTo(0.5);
     _this.smallegg10.scale.setTo(1,1);
     _this.smallegg10.frame=6;
     _this.smallegg10.visible=false;
     _this.smallegg10.name = "smallegg10";
    
     _this.smallegg11 =_this.add.sprite(221,297,'unity12_2smallegg');
     _this.smallegg11.anchor.setTo(0.5);
     _this.smallegg11.scale.setTo(1,1);
     _this.smallegg11.frame=6;
     _this.smallegg11.visible=false;
     _this.smallegg11.name = "smallegg11";
    
     _this.smallegg12 =_this.add.sprite(221,335,'unity12_2smallegg');
     _this.smallegg12.anchor.setTo(0.5);
     _this.smallegg12.scale.setTo(1,1);
     _this.smallegg12.frame=6;
     _this.smallegg12.visible=false;
     _this.smallegg12.name = "smallegg12";
    
     _this.smallegg13 =_this.add.sprite(221,373,'unity12_2smallegg');
     _this.smallegg13.anchor.setTo(0.5);
     _this.smallegg13.scale.setTo(1,1);
     _this.smallegg13.frame=6;
     _this.smallegg13.visible=false;
     _this.smallegg13.name = "smallegg13";
    
     _this.smallegg14 =_this.add.sprite(221,410,'unity12_2smallegg');
     _this.smallegg14.anchor.setTo(0.5);
     _this.smallegg14.scale.setTo(1,1);
     _this.smallegg14.frame=6;
     _this.smallegg14.visible=false;
     _this.smallegg14.name = "smallegg14";
    
     _this.smallegg15 =_this.add.sprite(221,448,'unity12_2smallegg');
     _this.smallegg15.anchor.setTo(0.5);
     _this.smallegg15.scale.setTo(1,1);
     _this.smallegg15.frame=6;
     _this.smallegg15.visible=false;
     _this.smallegg15.name = "smallegg15";
     
     _this.smalleggGrp.add(_this.smallegg6);
     _this.smalleggGrp.add(_this.smallegg7);
     _this.smalleggGrp.add(_this.smallegg8);
     _this.smalleggGrp.add(_this.smallegg9);
     _this.smalleggGrp.add(_this.smallegg10);
     _this.smalleggGrp.add(_this.smallegg11);
     _this.smalleggGrp.add(_this.smallegg12);
     _this.smalleggGrp.add(_this.smallegg13);
     _this.smalleggGrp.add(_this.smallegg14);
     _this.smalleggGrp.add(_this.smallegg15);
     
     _this.numGrp = _this.add.group();

     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=4;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=4;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=4;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=4;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=4;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=6;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=7;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=8;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=9;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=10;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,180,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
     
     _this.txtGrp = _this.add.group();
    
     _this.txtbox1 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,110,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=2;
     //_this.number11.scale.setTo(1,1.1);
    
     _this.txtbox10 = _this.add.sprite(835,110,'unity12_2ansbox');
     _this.txtbox10.anchor.setTo(0.5);
     _this.txtbox10.scale.setTo(1,1);
     _this.txtbox10.frame=0;
   
     _this.number14 =_this.add.sprite(835,110,'unity12_2numberpad');
     _this.number14.anchor.setTo(0.5);
     _this.number14.frame=4;
     //_this.number14.scale.setTo(1,1.1);
    
     
     _this.txtbox2 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,240,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=3;
    // _this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;
    
     _this.number13 =_this.add.sprite(835,240,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=2;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
    
     _this.numboxGrp = _this.add.group();

     _this.numBoxNum1 = _this.add.sprite(752,147,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=2;
     
     _this.numBoxNum2 = _this.add.sprite(812,147,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=8;
     
     _this.numBoxNum3 = _this.add.sprite(752,278,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=3;
     
     _this.numBoxNum4 = _this.add.sprite(812,278,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=2;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=4;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=0;
    
     _this.numboxGrp.add(_this.numBoxNum1);
     _this.numboxGrp.add(_this.numBoxNum2);
     _this.numboxGrp.add(_this.numBoxNum3);
     _this.numboxGrp.add(_this.numBoxNum4);
     _this.numboxGrp.add(_this.numBoxNum5);
     _this.numboxGrp.add(_this.numBoxNum6);
    
    _this.txtGrp.add(_this.txtbox1);
    _this.txtGrp.add(_this.txtbox2);
    _this.txtGrp.add(_this.txtbox3);
    _this.txtGrp.add(_this.txtbox4);
    _this.txtGrp.add(_this.txtbox5);
    _this.txtGrp.add(_this.txtbox6);
    _this.txtGrp.add(_this.txtbox7);
    _this.txtGrp.add(_this.txtbox8);
    _this.txtGrp.add(_this.txtbox9);
    _this.txtGrp.add(_this.txtbox10);
    _this.txtGrp.add(_this.number11);
    _this.txtGrp.add(_this.number12);
    _this.txtGrp.add(_this.number13);
    _this.txtGrp.add(_this.number14);
    
    _this.numGrp.add(_this.number1);
    _this.numGrp.add(_this.number2);
    _this.numGrp.add(_this.number3);
    _this.numGrp.add(_this.number4);
    _this.numGrp.add(_this.number5);
    _this.numGrp.add(_this.number6);
    _this.numGrp.add(_this.number7);
    _this.numGrp.add(_this.number8);
    _this.numGrp.add(_this.number9);
    _this.numGrp.add(_this.number10);
    _this.numGrp.add(_this.mul1);
    _this.numGrp.add(_this.mul2);
    _this.numGrp.add(_this.mul3);
    _this.numGrp.add(_this.mul4);
    _this.numGrp.add(_this.mul5);
    _this.numGrp.add(_this.equal1);
    _this.numGrp.add(_this.equal2);
    _this.numGrp.add(_this.equal3);
    _this.numGrp.add(_this.equal4);
    _this.numGrp.add(_this.equal5);
    
      _this.rightAns="283640";
    },
    
gotoThirdQuestion:function(){
       
      _this.questioNo = 3;
   
     //_this.getVoice();;
     
     
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
    
     _this.glowGrp = _this.add.group();

     _this.glow16=_this.add.sprite(202,105,'unity12_2glow6')
     _this.glow16.anchor.setTo(0.5);
     _this.glow16.scale.setTo(1,1);
     _this.glow16.frame=1;
     
     _this.glow17=_this.add.sprite(202,145,'unity12_2glow6')
     _this.glow17.anchor.setTo(0.5);
     _this.glow17.scale.setTo(1,1);
     //_this.glow17.frame=1;
     
     _this.glow18=_this.add.sprite(202,183,'unity12_2glow6')
     _this.glow18.anchor.setTo(0.5);
     _this.glow18.scale.setTo(1,1);
     //_this.glow18.frame=1;
     
     _this.glow19=_this.add.sprite(202,221,'unity12_2glow6')
     _this.glow19.anchor.setTo(0.5);
     _this.glow19.scale.setTo(1,1);
     //_this.glow19.frame=1;
     
     _this.glow20=_this.add.sprite(202,258,'unity12_2glow6')
     _this.glow20.anchor.setTo(0.5);
     _this.glow20.scale.setTo(1,1);
     //_this.glow20.frame=1;
    
     _this.glowGrp.add(_this.glow16);
     _this.glowGrp.add(_this.glow17);
     _this.glowGrp.add(_this.glow18);
     _this.glowGrp.add(_this.glow19);
     _this.glowGrp.add(_this.glow20);
     
     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=5;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg16 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg16.anchor.setTo(0.5);
     _this.smallegg16.scale.setTo(1,1);
     _this.smallegg16.frame=10;
     _this.smallegg16.visible=false;
     _this.smallegg16.name = "smallegg16";
     
     _this.smallegg17 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg17.anchor.setTo(0.5);
     _this.smallegg17.scale.setTo(1,1);
     _this.smallegg17.frame=10;
     _this.smallegg17.visible=false;
     _this.smallegg17.name = "smallegg17";
     
     _this.smallegg18 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg18.anchor.setTo(0.5);
     _this.smallegg18.scale.setTo(1,1);
     _this.smallegg18.frame=10;
     _this.smallegg18.visible=false;
     _this.smallegg18.name = "smallegg18";
     
     _this.smallegg19 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg19.anchor.setTo(0.5);
     _this.smallegg19.scale.setTo(1,1);
     _this.smallegg19.frame=10;
     _this.smallegg19.visible=false;
     _this.smallegg19.name = "smallegg19";
     
     _this.smallegg20 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg20.anchor.setTo(0.5);
     _this.smallegg20.scale.setTo(1,1);
     _this.smallegg20.frame=10;
     _this.smallegg20.visible=false;
     _this.smallegg20.name = "smallegg20";
     
     
     _this.smalleggGrp.add(_this.smallegg16);
     _this.smalleggGrp.add(_this.smallegg17);
     _this.smalleggGrp.add(_this.smallegg18);
     _this.smalleggGrp.add(_this.smallegg19);
     _this.smalleggGrp.add(_this.smallegg20);
     
      _this.numGrp = _this.add.group();

     
     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=6;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=6;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=6;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=6;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=6;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=1;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=2;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=3;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=4;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=5;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,180,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
    
     _this.txtGrp = _this.add.group();

     _this.txtbox1 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,110,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=6;
     //_this.number11.scale.setTo(1,1.1);
     
     _this.txtbox2 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,240,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=1;
     //_this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;
     
     _this.number13 =_this.add.sprite(835,240,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=8;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
    
     _this.numboxGrp = _this.add.group();

     
     _this.numBoxNum1 = _this.add.sprite(752,147,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=1;
     
     _this.numBoxNum2 = _this.add.sprite(812,147,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=2;
     
     _this.numBoxNum3 = _this.add.sprite(752,278,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=2;
     
     _this.numBoxNum4 = _this.add.sprite(812,278,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=4;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=3;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=0;
    
     _this.numboxGrp.add(_this.numBoxNum1);
     _this.numboxGrp.add(_this.numBoxNum2);
     _this.numboxGrp.add(_this.numBoxNum3);
     _this.numboxGrp.add(_this.numBoxNum4);
     _this.numboxGrp.add(_this.numBoxNum5);
     _this.numboxGrp.add(_this.numBoxNum6);     
    
     _this.txtGrp.add(_this.txtbox1);
     _this.txtGrp.add(_this.txtbox2);
     _this.txtGrp.add(_this.txtbox3);
     _this.txtGrp.add(_this.txtbox4);
     _this.txtGrp.add(_this.txtbox5);
     _this.txtGrp.add(_this.txtbox6);
     _this.txtGrp.add(_this.txtbox7);
     _this.txtGrp.add(_this.txtbox8);
     _this.txtGrp.add(_this.txtbox9);
     _this.txtGrp.add(_this.number11);
     _this.txtGrp.add(_this.number12);
     _this.txtGrp.add(_this.number13);
    
     _this.numGrp.add(_this.number1);
     _this.numGrp.add(_this.number2);
     _this.numGrp.add(_this.number3);
     _this.numGrp.add(_this.number4);
     _this.numGrp.add(_this.number5);
     _this.numGrp.add(_this.number6);
     _this.numGrp.add(_this.number7);
     _this.numGrp.add(_this.number8);
     _this.numGrp.add(_this.number9);
     _this.numGrp.add(_this.number10);
     _this.numGrp.add(_this.mul1);
     _this.numGrp.add(_this.mul2);
     _this.numGrp.add(_this.mul3);
     _this.numGrp.add(_this.mul4);
     _this.numGrp.add(_this.mul5);
     _this.numGrp.add(_this.equal1);
     _this.numGrp.add(_this.equal2);
     _this.numGrp.add(_this.equal3);
     _this.numGrp.add(_this.equal4);
     _this.numGrp.add(_this.equal5);

    
     _this.rightAns="122430";
     
},
    
    
gotoFourthQuestion:function(){
       
     _this.questioNo = 4;
   
     //_this.getVoice();;
     
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
    
      _this.glowGrp = _this.add.group();

     _this.glow21=_this.add.sprite(221,105,'unity12_2glow7')
     _this.glow21.anchor.setTo(0.5);
     _this.glow21.scale.setTo(1,1);
     _this.glow21.frame=1;
     
     _this.glow22=_this.add.sprite(221,145,'unity12_2glow7')
     _this.glow22.anchor.setTo(0.5);
     _this.glow22.scale.setTo(1,1);
     //_this.glow22.frame=1;
     
     _this.glow23=_this.add.sprite(221,183,'unity12_2glow7')
     _this.glow23.anchor.setTo(0.5);
     _this.glow23.scale.setTo(1,1);
     //_this.glow23.frame=1;
     
     _this.glow24=_this.add.sprite(221,221,'unity12_2glow7')
     _this.glow24.anchor.setTo(0.5);
     _this.glow24.scale.setTo(1,1);
     //_this.glow24.frame=1;
     
     _this.glow25=_this.add.sprite(221,258,'unity12_2glow7')
     _this.glow25.anchor.setTo(0.5);
     _this.glow25.scale.setTo(1,1);
     //_this.glow25.frame=1;
    
     _this.glow26=_this.add.sprite(221,297,'unity12_2glow7')
     _this.glow26.anchor.setTo(0.5);
     _this.glow26.scale.setTo(1,1);
     //_this.glow26.frame=1;
    
     _this.glow27=_this.add.sprite(221,335,'unity12_2glow7')
     _this.glow27.anchor.setTo(0.5);
     _this.glow27.scale.setTo(1,1);
     //_this.glow27.frame=1;
    
     _this.glow28=_this.add.sprite(221,373,'unity12_2glow7')
     _this.glow28.anchor.setTo(0.5);
     _this.glow28.scale.setTo(1,1);
     //_this.glow28.frame=1;
    
     _this.glow29=_this.add.sprite(221,410,'unity12_2glow7')
     _this.glow29.anchor.setTo(0.5);
     _this.glow29.scale.setTo(1,1);
     //_this.glow29.frame=1;
    
     _this.glow30=_this.add.sprite(221,448,'unity12_2glow7')
     _this.glow30.anchor.setTo(0.5);
     _this.glow30.scale.setTo(1,1);
     //_this.glow30.frame=1;
    
     _this.glowGrp.add(_this.glow21);
     _this.glowGrp.add(_this.glow22);
     _this.glowGrp.add(_this.glow23);
     _this.glowGrp.add(_this.glow24);
     _this.glowGrp.add(_this.glow25);
     _this.glowGrp.add(_this.glow26);
     _this.glowGrp.add(_this.glow27);
     _this.glowGrp.add(_this.glow28);
     _this.glowGrp.add(_this.glow29);
     _this.glowGrp.add(_this.glow30);
     
     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=6;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
        
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg21 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg21.anchor.setTo(0.5);
     _this.smallegg21.scale.setTo(1,1);
     _this.smallegg21.frame=12;
     _this.smallegg21.visible=false;
     _this.smallegg21.name = "smallegg21";
     
     _this.smallegg22 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg22.anchor.setTo(0.5);
     _this.smallegg22.scale.setTo(1,1);
     _this.smallegg22.frame=12;
     _this.smallegg22.visible=false;
     _this.smallegg22.name = "smallegg22";
     
     _this.smallegg23 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg23.anchor.setTo(0.5);
     _this.smallegg23.scale.setTo(1,1);
     _this.smallegg23.frame=12;
     _this.smallegg23.visible=false;
     _this.smallegg23.name = "smallegg23";
     
     _this.smallegg24 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg24.anchor.setTo(0.5);
     _this.smallegg24.scale.setTo(1,1);
     _this.smallegg24.frame=12;
     _this.smallegg24.visible=false;
     _this.smallegg24.name = "smallegg24";
     
     _this.smallegg25 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg25.anchor.setTo(0.5);
     _this.smallegg25.scale.setTo(1,1);
     _this.smallegg25.frame=12;
     _this.smallegg25.visible=false;
     _this.smallegg25.name = "smallegg25";
    
     _this.smallegg26 =_this.add.sprite(221,297,'unity12_2smallegg');
     _this.smallegg26.anchor.setTo(0.5);
     _this.smallegg26.scale.setTo(1,1);
     _this.smallegg26.frame=12;
     _this.smallegg26.visible=false;
     _this.smallegg26.name = "smallegg26";
    
     _this.smallegg27 =_this.add.sprite(221,335,'unity12_2smallegg');
     _this.smallegg27.anchor.setTo(0.5);
     _this.smallegg27.scale.setTo(1,1);
     _this.smallegg27.frame=12;
     _this.smallegg27.visible=false;
     _this.smallegg27.name = "smallegg27";
    
     _this.smallegg28 =_this.add.sprite(221,373,'unity12_2smallegg');
     _this.smallegg28.anchor.setTo(0.5);
     _this.smallegg28.scale.setTo(1,1);
     _this.smallegg28.frame=12;
     _this.smallegg28.visible=false;
     _this.smallegg28.name = "smallegg28";
    
     _this.smallegg29 =_this.add.sprite(221,410,'unity12_2smallegg');
     _this.smallegg29.anchor.setTo(0.5);
     _this.smallegg29.scale.setTo(1,1);
     _this.smallegg29.frame=12;
     _this.smallegg29.visible=false;
     _this.smallegg29.name = "smallegg29";
    
     _this.smallegg30 =_this.add.sprite(221,448,'unity12_2smallegg');
     _this.smallegg30.anchor.setTo(0.5);
     _this.smallegg30.scale.setTo(1,1);
     _this.smallegg30.frame=12;
     _this.smallegg30.visible=false;
     _this.smallegg30.name = "smallegg30";
     
     _this.smalleggGrp.add(_this.smallegg21);
     _this.smalleggGrp.add(_this.smallegg22);
     _this.smalleggGrp.add(_this.smallegg23);
     _this.smalleggGrp.add(_this.smallegg24);
     _this.smalleggGrp.add(_this.smallegg25);
     _this.smalleggGrp.add(_this.smallegg26);
     _this.smalleggGrp.add(_this.smallegg27);
     _this.smalleggGrp.add(_this.smallegg28);
     _this.smalleggGrp.add(_this.smallegg29);
     _this.smalleggGrp.add(_this.smallegg30);
     
      _this.numGrp = _this.add.group();

     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=7;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=7;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=7;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=7;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=7;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=6;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=7;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=8;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=9;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=10;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,185,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
     
     _this.txtGrp = _this.add.group();

    
     _this.txtbox1 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,110,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=4;
     //_this.number11.scale.setTo(1,1.1);
    
     _this.txtbox10 = _this.add.sprite(835,110,'unity12_2ansbox');
     _this.txtbox10.anchor.setTo(0.5);
     _this.txtbox10.scale.setTo(1,1);
     _this.txtbox10.frame=0;
    
     _this.number14 =_this.add.sprite(835,110,'unity12_2numberpad');
     _this.number14.anchor.setTo(0.5);
     _this.number14.frame=2;
     //_this.number14.scale.setTo(1,1.1);
      
     _this.txtbox2 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,240,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=5;
     //_this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;
     
     _this.number13 =_this.add.sprite(835,240,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=6;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
    
     _this.numboxGrp = _this.add.group();

     _this.numBoxNum1 = _this.add.sprite(752,147,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=4;
     
     _this.numBoxNum2 = _this.add.sprite(812,147,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=9;
     
     _this.numBoxNum3 = _this.add.sprite(752,278,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=5;
     
     _this.numBoxNum4 = _this.add.sprite(812,278,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=6;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=7;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=0;
    
     _this.numboxGrp.add(_this.numBoxNum1);
     _this.numboxGrp.add(_this.numBoxNum2);
     _this.numboxGrp.add(_this.numBoxNum3);
     _this.numboxGrp.add(_this.numBoxNum4);
     _this.numboxGrp.add(_this.numBoxNum5);
     _this.numboxGrp.add(_this.numBoxNum6); 
     

     _this.txtGrp.add(_this.txtbox1);
    _this.txtGrp.add(_this.txtbox2);
    _this.txtGrp.add(_this.txtbox3);
    _this.txtGrp.add(_this.txtbox4);
    _this.txtGrp.add(_this.txtbox5);
    _this.txtGrp.add(_this.txtbox6);
    _this.txtGrp.add(_this.txtbox7);
    _this.txtGrp.add(_this.txtbox8);
    _this.txtGrp.add(_this.txtbox9);
    _this.txtGrp.add(_this.txtbox10);
    _this.txtGrp.add(_this.number11);
    _this.txtGrp.add(_this.number12);
    _this.txtGrp.add(_this.number13);
    _this.txtGrp.add(_this.number14);
    
    _this.numGrp.add(_this.number1);
    _this.numGrp.add(_this.number2);
    _this.numGrp.add(_this.number3);
    _this.numGrp.add(_this.number4);
    _this.numGrp.add(_this.number5);
    _this.numGrp.add(_this.number6);
    _this.numGrp.add(_this.number7);
    _this.numGrp.add(_this.number8);
    _this.numGrp.add(_this.number9);
    _this.numGrp.add(_this.number10);
    _this.numGrp.add(_this.mul1);
    _this.numGrp.add(_this.mul2);
    _this.numGrp.add(_this.mul3);
    _this.numGrp.add(_this.mul4);
    _this.numGrp.add(_this.mul5);
    _this.numGrp.add(_this.equal1);
    _this.numGrp.add(_this.equal2);
    _this.numGrp.add(_this.equal3);
    _this.numGrp.add(_this.equal4);
    _this.numGrp.add(_this.equal5);
    
    
     _this.rightAns="496370";
   

 },
    
gotoFifthQuestion:function(){
       
      _this.questioNo = 5;
   
     //_this.getVoice();;
     
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
    
     _this.glowGrp = _this.add.group();

     _this.glow31=_this.add.sprite(145,105,'unity12_2glow3')
     _this.glow31.anchor.setTo(0.5);
     _this.glow31.scale.setTo(1,1);
     _this.glow31.frame=1;
     
     _this.glow32=_this.add.sprite(145,145,'unity12_2glow3')
     _this.glow32.anchor.setTo(0.5);
     _this.glow32.scale.setTo(1,1);
     //_this.glow32.frame=1;
     
     _this.glow33=_this.add.sprite(145,183,'unity12_2glow3')
     _this.glow33.anchor.setTo(0.5);
     _this.glow33.scale.setTo(1,1);
     //_this.glow33.frame=1;
     
     _this.glow34=_this.add.sprite(145,221,'unity12_2glow3')
     _this.glow34.anchor.setTo(0.5);
     _this.glow34.scale.setTo(1,1);
     //_this.glow34.frame=1;
     
     _this.glow35=_this.add.sprite(145,258,'unity12_2glow3')
     _this.glow35.anchor.setTo(0.5);
     _this.glow35.scale.setTo(1,1);
     //_this.glow35.frame=1;
    
     _this.glow36=_this.add.sprite(145,297,'unity12_2glow3')
     _this.glow36.anchor.setTo(0.5);
     _this.glow36.scale.setTo(1,1);
     //_this.glow36.frame=1;
    
     _this.glow37=_this.add.sprite(145,335,'unity12_2glow3')
     _this.glow37.anchor.setTo(0.5);
     _this.glow37.scale.setTo(1,1);
     //_this.glow37.frame=1;
    
     _this.glow38=_this.add.sprite(145,373,'unity12_2glow3')
     _this.glow38.anchor.setTo(0.5);
     _this.glow38.scale.setTo(1,1);
     //_this.glow38.frame=1;
    
     _this.glow39=_this.add.sprite(145,410,'unity12_2glow3')
     _this.glow39.anchor.setTo(0.5);
     _this.glow39.scale.setTo(1,1);
     //_this.glow39.frame=1;
    
     _this.glow40=_this.add.sprite(145,448,'unity12_2glow3')
     _this.glow40.anchor.setTo(0.5);
     _this.glow40.scale.setTo(1,1);
     //_this.glow40.frame=1;
    
     _this.glowGrp.add(_this.glow31);
     _this.glowGrp.add(_this.glow32);
     _this.glowGrp.add(_this.glow33);
     _this.glowGrp.add(_this.glow34);
     _this.glowGrp.add(_this.glow35);
     _this.glowGrp.add(_this.glow36);
     _this.glowGrp.add(_this.glow37);
     _this.glowGrp.add(_this.glow38);
     _this.glowGrp.add(_this.glow39);
     _this.glowGrp.add(_this.glow40);

     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=2;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
     
        
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg31 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg31.anchor.setTo(0.5);
     _this.smallegg31.scale.setTo(1,1);
     _this.smallegg31.frame=4;
     _this.smallegg31.visible=false;
     _this.smallegg31.name = "smallegg31";
     
     _this.smallegg32 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg32.anchor.setTo(0.5);
     _this.smallegg32.scale.setTo(1,1);
     _this.smallegg32.frame=4;
     _this.smallegg32.visible=false;
     _this.smallegg32.name = "smallegg32";
     
     _this.smallegg33 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg33.anchor.setTo(0.5);
     _this.smallegg33.scale.setTo(1,1);
     _this.smallegg33.frame=4;
     _this.smallegg33.visible=false;
     _this.smallegg33.name = "smallegg33";
     
     _this.smallegg34 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg34.anchor.setTo(0.5);
     _this.smallegg34.scale.setTo(1,1);
     _this.smallegg34.frame=4;
     _this.smallegg34.visible=false;
     _this.smallegg34.name = "smallegg34";
     
     _this.smallegg35 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg35.anchor.setTo(0.5);
     _this.smallegg35.scale.setTo(1,1);
     _this.smallegg35.frame=4;
     _this.smallegg35.visible=false;
     _this.smallegg35.name = "smallegg35";
    
     _this.smallegg36 =_this.add.sprite(221,297,'unity12_2smallegg');
     _this.smallegg36.anchor.setTo(0.5);
     _this.smallegg36.scale.setTo(1,1);
     _this.smallegg36.frame=4;
     _this.smallegg36.visible=false;
     _this.smallegg36.name = "smallegg36";
    
     _this.smallegg37 =_this.add.sprite(221,335,'unity12_2smallegg');
     _this.smallegg37.anchor.setTo(0.5);
     _this.smallegg37.scale.setTo(1,1);
     _this.smallegg37.frame=4;
     _this.smallegg37.visible=false;
     _this.smallegg37.name = "smallegg37";
    
     _this.smallegg38 =_this.add.sprite(221,373,'unity12_2smallegg');
     _this.smallegg38.anchor.setTo(0.5);
     _this.smallegg38.scale.setTo(1,1);
     _this.smallegg38.frame=4;
     _this.smallegg38.visible=false;
     _this.smallegg38.name = "smallegg38";
    
     _this.smallegg39 =_this.add.sprite(221,410,'unity12_2smallegg');
     _this.smallegg39.anchor.setTo(0.5);
     _this.smallegg39.scale.setTo(1,1);
     _this.smallegg39.frame=4;
     _this.smallegg39.visible=false;
     _this.smallegg39.name = "smallegg39";
    
     _this.smallegg40 =_this.add.sprite(221,448,'unity12_2smallegg');
     _this.smallegg40.anchor.setTo(0.5);
     _this.smallegg40.scale.setTo(1,1);
     _this.smallegg40.frame=4;
     _this.smallegg40.visible=false;
     _this.smallegg40.name = "smallegg40";
     
     
     _this.smalleggGrp.add(_this.smallegg31);
     _this.smalleggGrp.add(_this.smallegg32);
     _this.smalleggGrp.add(_this.smallegg33);
     _this.smalleggGrp.add(_this.smallegg34);
     _this.smalleggGrp.add(_this.smallegg35);
     _this.smalleggGrp.add(_this.smallegg36);
     _this.smalleggGrp.add(_this.smallegg37);
     _this.smalleggGrp.add(_this.smallegg38);
     _this.smalleggGrp.add(_this.smallegg39);
     _this.smalleggGrp.add(_this.smallegg40);
     
     _this.numGrp = _this.add.group();
    
     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=3;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=3;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=3;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=3;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=3;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=6;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=7;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=8;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=9;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=10;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,180,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
    
     _this.txtGrp = _this.add.group();

     _this.txtbox1 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,175,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=2;
     //_this.number11.scale.setTo(1,1.1);
    
     _this.txtbox10 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox10.anchor.setTo(0.5);
     _this.txtbox10.scale.setTo(1,1);
     _this.txtbox10.frame=0;
    
     _this.number14 =_this.add.sprite(835,175,'unity12_2numberpad');
     _this.number14.anchor.setTo(0.5);
     _this.number14.frame=1;
     //_this.number14.scale.setTo(1,1.1);
      
    
     _this.txtbox2 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,110,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,305,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=2;
     //_this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;

     _this.number13 =_this.add.sprite(835,305,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=7;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
    
     _this.numboxGrp = _this.add.group();
 
     _this.numBoxNum1 = _this.add.sprite(752,83,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=1;
     
     _this.numBoxNum2 = _this.add.sprite(812,83,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=8;
     
     _this.numBoxNum3 = _this.add.sprite(752,213,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=2;
     
     _this.numBoxNum4 = _this.add.sprite(812,213,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=4;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=3;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=0;
    
     _this.numboxGrp.add(_this.numBoxNum1);
     _this.numboxGrp.add(_this.numBoxNum2);
     _this.numboxGrp.add(_this.numBoxNum3);
     _this.numboxGrp.add(_this.numBoxNum4);
     _this.numboxGrp.add(_this.numBoxNum5);
     _this.numboxGrp.add(_this.numBoxNum6);   
    
     _this.txtGrp.add(_this.txtbox1);
     _this.txtGrp.add(_this.txtbox2);
     _this.txtGrp.add(_this.txtbox3);
     _this.txtGrp.add(_this.txtbox4);
     _this.txtGrp.add(_this.txtbox5);
     _this.txtGrp.add(_this.txtbox6);
     _this.txtGrp.add(_this.txtbox7);
     _this.txtGrp.add(_this.txtbox8);
     _this.txtGrp.add(_this.txtbox9);
     _this.txtGrp.add(_this.txtbox10);
     _this.txtGrp.add(_this.number11);
     _this.txtGrp.add(_this.number12);
     _this.txtGrp.add(_this.number13);
     _this.txtGrp.add(_this.number14);
    
     _this.numGrp.add(_this.number1);
     _this.numGrp.add(_this.number2);
     _this.numGrp.add(_this.number3);
     _this.numGrp.add(_this.number4);
     _this.numGrp.add(_this.number5);
     _this.numGrp.add(_this.number6);
     _this.numGrp.add(_this.number7);
     _this.numGrp.add(_this.number8);
     _this.numGrp.add(_this.number9);
     _this.numGrp.add(_this.number10);
     _this.numGrp.add(_this.mul1);
     _this.numGrp.add(_this.mul2);
     _this.numGrp.add(_this.mul3);
     _this.numGrp.add(_this.mul4);
     _this.numGrp.add(_this.mul5);
     _this.numGrp.add(_this.equal1);
     _this.numGrp.add(_this.equal2);
     _this.numGrp.add(_this.equal3);
     _this.numGrp.add(_this.equal4);
     _this.numGrp.add(_this.equal5);

   
      _this.rightAns="182430";
     
     
     },
    
gotoSixthQuestion:function(){
       _this.questioNo = 6;
   
     //_this.getVoice();;
     
     
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
    
     _this.glowGrp = _this.add.group();

     _this.glow41=_this.add.sprite(127,105,'unity12_2glow2')
     _this.glow41.anchor.setTo(0.5);
     _this.glow41.scale.setTo(1,1);
     _this.glow41.frame=1;
     
     _this.glow42=_this.add.sprite(127,145,'unity12_2glow2')
     _this.glow42.anchor.setTo(0.5);
     _this.glow42.scale.setTo(1,1);
     //_this.glow42.frame=1;
     
     _this.glow43=_this.add.sprite(127,183,'unity12_2glow2')
     _this.glow43.anchor.setTo(0.5);
     _this.glow43.scale.setTo(1,1);
     //_this.glow43.frame=1;
     
     _this.glow44=_this.add.sprite(127,221,'unity12_2glow2')
     _this.glow44.anchor.setTo(0.5);
     _this.glow44.scale.setTo(1,1);
     //_this.glow44.frame=1;
     
     _this.glow45=_this.add.sprite(127,258,'unity12_2glow2')
     _this.glow45.anchor.setTo(0.5);
     _this.glow45.scale.setTo(1,1);
     //_this.glow45.frame=1;
    
     _this.glow46=_this.add.sprite(127,297,'unity12_2glow2')
     _this.glow46.anchor.setTo(0.5);
     _this.glow46.scale.setTo(1,1);
     //_this.glow46.frame=1;
    
     _this.glow47=_this.add.sprite(127,335,'unity12_2glow2')
     _this.glow47.anchor.setTo(0.5);
     _this.glow47.scale.setTo(1,1);
     //_this.glow47.frame=1;
    
     _this.glow48=_this.add.sprite(127,373,'unity12_2glow2')
     _this.glow48.anchor.setTo(0.5);
     _this.glow48.scale.setTo(1,1);
     //_this.glow48.frame=1;
    
     _this.glow49=_this.add.sprite(127,410,'unity12_2glow2')
     _this.glow49.anchor.setTo(0.5);
     _this.glow49.scale.setTo(1,1);
     //_this.glow49.frame=1;
    
     _this.glow50=_this.add.sprite(127,448,'unity12_2glow2')
     _this.glow50.anchor.setTo(0.5);
     _this.glow50.scale.setTo(1,1);
     //_this.glow50.frame=1;
     _this.glowGrp.add(_this.glow41);
     _this.glowGrp.add(_this.glow42);
     _this.glowGrp.add(_this.glow43);
     _this.glowGrp.add(_this.glow44);
     _this.glowGrp.add(_this.glow45);
     _this.glowGrp.add(_this.glow46);
     _this.glowGrp.add(_this.glow47);
     _this.glowGrp.add(_this.glow48);
     _this.glowGrp.add(_this.glow49);
     _this.glowGrp.add(_this.glow50);

     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=1;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
     
        
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg41 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg41.anchor.setTo(0.5);
     _this.smallegg41.scale.setTo(1,1);
     _this.smallegg41.frame=2;
     _this.smallegg41.visible=false;
     _this.smallegg41.name = "smallegg41";
     
     _this.smallegg42 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg42.anchor.setTo(0.5);
     _this.smallegg42.scale.setTo(1,1);
     _this.smallegg42.frame=2;
     _this.smallegg42.visible=false;
     _this.smallegg42.name = "smallegg42";
     
     _this.smallegg43 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg43.anchor.setTo(0.5);
     _this.smallegg43.scale.setTo(1,1);
     _this.smallegg43.frame=2;
     _this.smallegg43.visible=false;
     _this.smallegg43.name = "smallegg43";
     
     _this.smallegg44 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg44.anchor.setTo(0.5);
     _this.smallegg44.scale.setTo(1,1);
     _this.smallegg44.frame=2;
     _this.smallegg44.visible=false;
     _this.smallegg44.name = "smallegg44";
     
     _this.smallegg45 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg45.anchor.setTo(0.5);
     _this.smallegg45.scale.setTo(1,1);
     _this.smallegg45.frame=2;
     _this.smallegg45.visible=false;
     _this.smallegg45.name = "smallegg45";
    
     _this.smallegg46 =_this.add.sprite(221,297,'unity12_2smallegg');
     _this.smallegg46.anchor.setTo(0.5);
     _this.smallegg46.scale.setTo(1,1);
     _this.smallegg46.frame=2;
     _this.smallegg46.visible=false;
     _this.smallegg46.name = "smallegg46";
    
     _this.smallegg47 =_this.add.sprite(221,335,'unity12_2smallegg');
     _this.smallegg47.anchor.setTo(0.5);
     _this.smallegg47.scale.setTo(1,1);
     _this.smallegg47.frame=2;
     _this.smallegg47.visible=false;
     _this.smallegg47.name = "smallegg47";
    
     _this.smallegg48 =_this.add.sprite(221,373,'unity12_2smallegg');
     _this.smallegg48.anchor.setTo(0.5);
     _this.smallegg48.scale.setTo(1,1);
     _this.smallegg48.frame=2;
     _this.smallegg48.visible=false;
     _this.smallegg48.name = "smallegg48";
    
     _this.smallegg49 =_this.add.sprite(221,410,'unity12_2smallegg');
     _this.smallegg49.anchor.setTo(0.5);
     _this.smallegg49.scale.setTo(1,1);
     _this.smallegg49.frame=2;
     _this.smallegg49.visible=false;
     _this.smallegg49.name = "smallegg49";
    
     _this.smallegg50 =_this.add.sprite(221,448,'unity12_2smallegg');
     _this.smallegg50.anchor.setTo(0.5);
     _this.smallegg50.scale.setTo(1,1);
     _this.smallegg50.frame=2;
     _this.smallegg50.visible=false;
     _this.smallegg50.name = "smallegg50";
     
     _this.smalleggGrp.add(_this.smallegg41);
     _this.smalleggGrp.add(_this.smallegg42);
     _this.smalleggGrp.add(_this.smallegg43);
     _this.smalleggGrp.add(_this.smallegg44);
     _this.smalleggGrp.add(_this.smallegg45);
     _this.smalleggGrp.add(_this.smallegg46);
     _this.smalleggGrp.add(_this.smallegg47);
     _this.smalleggGrp.add(_this.smallegg48);
     _this.smalleggGrp.add(_this.smallegg49);
     _this.smalleggGrp.add(_this.smallegg50);
     
     _this.numGrp = _this.add.group();

     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=2;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=2;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=2;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=2;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=2;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=6;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=7;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=8;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=9;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=10;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,180,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
    
      _this.txtGrp = _this.add.group();
    
     _this.txtbox1 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,175,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=1;
     //_this.number11.scale.setTo(1,1.1);
    
     _this.txtbox10 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox10.anchor.setTo(0.5);
     _this.txtbox10.scale.setTo(1,1);
     _this.txtbox10.frame=0;
    
     _this.number14 =_this.add.sprite(835,175,'unity12_2numberpad');
     _this.number14.anchor.setTo(0.5);
     _this.number14.frame=4;
     //_this.number14.scale.setTo(1,1.1);
    
     _this.txtbox2 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,110,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,305,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=1;
     //_this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;
     
     _this.number13 =_this.add.sprite(835,305,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=8;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
    
     _this.numboxGrp = _this.add.group();
    
     _this.numBoxNum1 = _this.add.sprite(752,83,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=1;
     
     _this.numBoxNum2 = _this.add.sprite(812,83,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=2;
     
     _this.numBoxNum3 = _this.add.sprite(752,213,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=1;
     
     _this.numBoxNum4 = _this.add.sprite(812,213,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=6;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=2;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=0;
    
      _this.numboxGrp.add(_this.numBoxNum1);
     _this.numboxGrp.add(_this.numBoxNum2);
     _this.numboxGrp.add(_this.numBoxNum3);
     _this.numboxGrp.add(_this.numBoxNum4);
     _this.numboxGrp.add(_this.numBoxNum5);
     _this.numboxGrp.add(_this.numBoxNum6);   
    
     _this.txtGrp.add(_this.txtbox1);
     _this.txtGrp.add(_this.txtbox2);
     _this.txtGrp.add(_this.txtbox3);
     _this.txtGrp.add(_this.txtbox4);
     _this.txtGrp.add(_this.txtbox5);
     _this.txtGrp.add(_this.txtbox6);
     _this.txtGrp.add(_this.txtbox7);
     _this.txtGrp.add(_this.txtbox8);
     _this.txtGrp.add(_this.txtbox9);
     _this.txtGrp.add(_this.txtbox10);
     _this.txtGrp.add(_this.number11);
     _this.txtGrp.add(_this.number12);
     _this.txtGrp.add(_this.number13);
     _this.txtGrp.add(_this.number14);
    
     _this.numGrp.add(_this.number1);
     _this.numGrp.add(_this.number2);
     _this.numGrp.add(_this.number3);
     _this.numGrp.add(_this.number4);
     _this.numGrp.add(_this.number5);
     _this.numGrp.add(_this.number6);
     _this.numGrp.add(_this.number7);
     _this.numGrp.add(_this.number8);
     _this.numGrp.add(_this.number9);
     _this.numGrp.add(_this.number10);
     _this.numGrp.add(_this.mul1);
     _this.numGrp.add(_this.mul2);
     _this.numGrp.add(_this.mul3);
     _this.numGrp.add(_this.mul4);
     _this.numGrp.add(_this.mul5);
     _this.numGrp.add(_this.equal1);
     _this.numGrp.add(_this.equal2);
     _this.numGrp.add(_this.equal3);
     _this.numGrp.add(_this.equal4);
     _this.numGrp.add(_this.equal5);
   
      _this.rightAns="121620";
     

    
 },
    
  gotoSeventhQuestion:function(){ 
     _this.questioNo = 7;
   
     //_this.getVoice();;
     
     
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
     
     _this.glowGrp = _this.add.group();
     
     _this.glow51=_this.add.sprite(221,105,'unity12_2glow7')
     _this.glow51.anchor.setTo(0.5);
     _this.glow51.scale.setTo(1,1);
     _this.glow51.frame=1;
     
     _this.glow52=_this.add.sprite(221,145,'unity12_2glow7')
     _this.glow52.anchor.setTo(0.5);
     _this.glow52.scale.setTo(1,1);
     //_this.glow52.frame=1;
     
     _this.glow53=_this.add.sprite(221,183,'unity12_2glow7')
     _this.glow53.anchor.setTo(0.5);
     _this.glow53.scale.setTo(1,1);
     //_this.glow3.frame=1;
     
     _this.glow54=_this.add.sprite(221,221,'unity12_2glow7')
     _this.glow54.anchor.setTo(0.5);
     _this.glow54.scale.setTo(1,1);
     //_this.glow4.frame=1;
     
     _this.glow55=_this.add.sprite(221,258,'unity12_2glow7')
     _this.glow55.anchor.setTo(0.5);
     _this.glow55.scale.setTo(1,1);
     //_this.glow5.frame=1;
     
     _this.glowGrp.add(_this.glow51);
     _this.glowGrp.add(_this.glow52);
     _this.glowGrp.add(_this.glow53);
     _this.glowGrp.add(_this.glow54);
     _this.glowGrp.add(_this.glow55);
     
     
     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=6;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
      
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg51 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg51.anchor.setTo(0.5);
     _this.smallegg51.scale.setTo(1,1);
     _this.smallegg51.frame=12;
     _this.smallegg51.visible=false;
     _this.smallegg51.name = "smallegg51";
    
     _this.smallegg52 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg52.anchor.setTo(0.5);
     _this.smallegg52.scale.setTo(1,1);
     _this.smallegg52.frame=12;
     _this.smallegg52.visible=false;
     _this.smallegg52.name = "smallegg52";
     
     _this.smallegg53 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg53.anchor.setTo(0.5);
     _this.smallegg53.scale.setTo(1,1);
     _this.smallegg53.frame=12;
     _this.smallegg53.visible=false;
     _this.smallegg53.name = "smallegg53";
     
     _this.smallegg54 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg54.anchor.setTo(0.5);
     _this.smallegg54.scale.setTo(1,1);
     _this.smallegg54.frame=12;
     _this.smallegg54.visible=false;
     _this.smallegg54.name = "smallegg54";
     
     _this.smallegg55 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg55.anchor.setTo(0.5);
     _this.smallegg55.scale.setTo(1,1);
     _this.smallegg55.frame=12;
     _this.smallegg55.visible=false;
     _this.smallegg55.name = "smallegg55";
     
     _this.smalleggGrp.add(_this.smallegg51);
     _this.smalleggGrp.add(_this.smallegg52);
     _this.smalleggGrp.add(_this.smallegg53);
     _this.smalleggGrp.add(_this.smallegg54);
     _this.smalleggGrp.add(_this.smallegg55);
     
      _this.numGrp = _this.add.group();
     
     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=7;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=7;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=7;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=7;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=7;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=1;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=2;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=3;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=4;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=5;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,180,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
     
      _this.txtGrp = _this.add.group();

     _this.txtbox1 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,110,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=7;
     //_this.number11.scale.setTo(1,1.1);
     
     _this.txtbox2 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,240,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=2;
    // _this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;
    
     _this.number13 =_this.add.sprite(835,240,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=1;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.numboxGrp = _this.add.group();
     
     _this.numBoxNum1 = _this.add.sprite(752,147,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=1;
     
     _this.numBoxNum2 = _this.add.sprite(812,147,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=0;
     
     _this.numBoxNum3 = _this.add.sprite(752,277,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=2;
     
     _this.numBoxNum4 = _this.add.sprite(812,277,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=0;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=2;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=5;
     
      _this.numboxGrp.add(_this.numBoxNum1);
      _this.numboxGrp.add(_this.numBoxNum2);
      _this.numboxGrp.add(_this.numBoxNum3);
      _this.numboxGrp.add(_this.numBoxNum4);
      _this.numboxGrp.add(_this.numBoxNum5);
      _this.numboxGrp.add(_this.numBoxNum6);
     
     _this.txtGrp.add(_this.txtbox1);
     _this.txtGrp.add(_this.txtbox2);
     _this.txtGrp.add(_this.txtbox3);
     _this.txtGrp.add(_this.txtbox4);
     _this.txtGrp.add(_this.txtbox5);
     _this.txtGrp.add(_this.txtbox6);
     _this.txtGrp.add(_this.txtbox7);
     _this.txtGrp.add(_this.txtbox8);
     _this.txtGrp.add(_this.txtbox9);
     _this.txtGrp.add(_this.number11);
     _this.txtGrp.add(_this.number12);
     _this.txtGrp.add(_this.number13);
     
     _this.numGrp.add(_this.number1);
     _this.numGrp.add(_this.number2);
     _this.numGrp.add(_this.number3);
     _this.numGrp.add(_this.number4);
     _this.numGrp.add(_this.number5);
     _this.numGrp.add(_this.number6);
     _this.numGrp.add(_this.number7);
     _this.numGrp.add(_this.number8);
     _this.numGrp.add(_this.number9);
     _this.numGrp.add(_this.number10);
     _this.numGrp.add(_this.mul1);
     _this.numGrp.add(_this.mul2);
     _this.numGrp.add(_this.mul3);
     _this.numGrp.add(_this.mul4);
     _this.numGrp.add(_this.mul5);
     _this.numGrp.add(_this.equal1);
     _this.numGrp.add(_this.equal2);
     _this.numGrp.add(_this.equal3);
     _this.numGrp.add(_this.equal4);
     _this.numGrp.add(_this.equal5);
     
     
     
     _this.rightAns="142835";
 },   
    
gotoEighthQuestion:function(){
       _this.questioNo = 8;
   
     //_this.getVoice();;
     
     
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
    
     _this.glowGrp = _this.add.group();

     _this.glow56=_this.add.sprite(202,105,'unity12_2glow6')
     _this.glow56.anchor.setTo(0.5);
     _this.glow56.scale.setTo(1,1);
     _this.glow56.frame=1;
     
     _this.glow57=_this.add.sprite(202,145,'unity12_2glow6')
     _this.glow57.anchor.setTo(0.5);
     _this.glow57.scale.setTo(1,1);
     //_this.glow57.frame=1;
     
     _this.glow58=_this.add.sprite(202,183,'unity12_2glow6')
     _this.glow58.anchor.setTo(0.5);
     _this.glow58.scale.setTo(1,1);
     //_this.glow43.frame=1;
     
     _this.glow59=_this.add.sprite(202,221,'unity12_2glow6')
     _this.glow59.anchor.setTo(0.5);
     _this.glow59.scale.setTo(1,1);
     //_this.glow44.frame=1;
     
     _this.glow60=_this.add.sprite(202,258,'unity12_2glow6')
     _this.glow60.anchor.setTo(0.5);
     _this.glow60.scale.setTo(1,1);
     //_this.glow45.frame=1;
    
     _this.glow61=_this.add.sprite(202,297,'unity12_2glow6')
     _this.glow61.anchor.setTo(0.5);
     _this.glow61.scale.setTo(1,1);
     //_this.glow46.frame=1;
    
     _this.glow62=_this.add.sprite(202,335,'unity12_2glow6')
     _this.glow62.anchor.setTo(0.5);
     _this.glow62.scale.setTo(1,1);
     //_this.glow47.frame=1;
    
     _this.glow63=_this.add.sprite(202,373,'unity12_2glow6')
     _this.glow63.anchor.setTo(0.5);
     _this.glow63.scale.setTo(1,1);
     //_this.glow48.frame=1;
    
     _this.glow64=_this.add.sprite(202,410,'unity12_2glow6')
     _this.glow64.anchor.setTo(0.5);
     _this.glow64.scale.setTo(1,1);
     //_this.glow49.frame=1;
    
     _this.glow65=_this.add.sprite(202,448,'unity12_2glow6')
     _this.glow65.anchor.setTo(0.5);
     _this.glow65.scale.setTo(1,1);
     //_this.glow50.frame=1;
     _this.glowGrp.add(_this.glow56);
     _this.glowGrp.add(_this.glow57);
     _this.glowGrp.add(_this.glow58);
     _this.glowGrp.add(_this.glow59);
     _this.glowGrp.add(_this.glow60);
     _this.glowGrp.add(_this.glow61);
     _this.glowGrp.add(_this.glow62);
     _this.glowGrp.add(_this.glow63);
     _this.glowGrp.add(_this.glow64);
     _this.glowGrp.add(_this.glow65);

     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=5;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
     
        
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg56 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg56.anchor.setTo(0.5);
     _this.smallegg56.scale.setTo(1,1);
     _this.smallegg56.frame=10;
     _this.smallegg56.visible=false;
     _this.smallegg56.name = "smallegg56";
     
     _this.smallegg57 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg57.anchor.setTo(0.5);
     _this.smallegg57.scale.setTo(1,1);
     _this.smallegg57.frame=10;
     _this.smallegg57.visible=false;
     _this.smallegg57.name = "smallegg57";
     
     _this.smallegg58 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg58.anchor.setTo(0.5);
     _this.smallegg58.scale.setTo(1,1);
     _this.smallegg58.frame=10;
     _this.smallegg58.visible=false;
     _this.smallegg58.name = "smallegg58";
     
     _this.smallegg59 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg59.anchor.setTo(0.5);
     _this.smallegg59.scale.setTo(1,1);
     _this.smallegg59.frame=10;
     _this.smallegg59.visible=false;
     _this.smallegg59.name = "smallegg59";
     
     _this.smallegg60 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg60.anchor.setTo(0.5);
     _this.smallegg60.scale.setTo(1,1);
     _this.smallegg60.frame=10;
     _this.smallegg60.visible=false;
     _this.smallegg60.name = "smallegg60";
    
     _this.smallegg61 =_this.add.sprite(221,297,'unity12_2smallegg');
     _this.smallegg61.anchor.setTo(0.5);
     _this.smallegg61.scale.setTo(1,1);
     _this.smallegg61.frame=10;
     _this.smallegg61.visible=false;
     _this.smallegg61.name = "smallegg61";
    
     _this.smallegg62 =_this.add.sprite(221,335,'unity12_2smallegg');
     _this.smallegg62.anchor.setTo(0.5);
     _this.smallegg62.scale.setTo(1,1);
     _this.smallegg62.frame=10;
     _this.smallegg62.visible=false;
     _this.smallegg62.name = "smallegg62";
    
     _this.smallegg63 =_this.add.sprite(221,373,'unity12_2smallegg');
     _this.smallegg63.anchor.setTo(0.5);
     _this.smallegg63.scale.setTo(1,1);
     _this.smallegg63.frame=10;
     _this.smallegg63.visible=false;
     _this.smallegg63.name = "smallegg63";
    
     _this.smallegg64 =_this.add.sprite(221,410,'unity12_2smallegg');
     _this.smallegg64.anchor.setTo(0.5);
     _this.smallegg64.scale.setTo(1,1);
     _this.smallegg64.frame=10;
     _this.smallegg64.visible=false;
     _this.smallegg64.name = "smallegg64";
    
     _this.smallegg65 =_this.add.sprite(221,448,'unity12_2smallegg');
     _this.smallegg65.anchor.setTo(0.5);
     _this.smallegg65.scale.setTo(1,1);
     _this.smallegg65.frame=10;
     _this.smallegg65.visible=false;
     _this.smallegg65.name = "smallegg65";
     
     _this.smalleggGrp.add(_this.smallegg56);
     _this.smalleggGrp.add(_this.smallegg57);
     _this.smalleggGrp.add(_this.smallegg58);
     _this.smalleggGrp.add(_this.smallegg59);
     _this.smalleggGrp.add(_this.smallegg60);
     _this.smalleggGrp.add(_this.smallegg61);
     _this.smalleggGrp.add(_this.smallegg62);
     _this.smalleggGrp.add(_this.smallegg63);
     _this.smalleggGrp.add(_this.smallegg64);
     _this.smalleggGrp.add(_this.smallegg65);
     
     _this.numGrp = _this.add.group();

     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=6;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=6;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=6;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=6;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=6;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=6;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=7;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=8;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=9;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=10;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,180,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
    
      _this.txtGrp = _this.add.group();
    
     _this.txtbox1 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,175,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=4;
     //_this.number11.scale.setTo(1,1.1);
    
     _this.txtbox10 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox10.anchor.setTo(0.5);
     _this.txtbox10.scale.setTo(1,1);
     _this.txtbox10.frame=0;
    
     _this.number14 =_this.add.sprite(835,175,'unity12_2numberpad');
     _this.number14.anchor.setTo(0.5);
     _this.number14.frame=2;
     //_this.number14.scale.setTo(1,1.1);
    
     _this.txtbox2 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,110,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,305,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=5;
     //_this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;
     
     _this.number13 =_this.add.sprite(835,305,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=4;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
    
     _this.numboxGrp = _this.add.group();
    
     _this.numBoxNum1 = _this.add.sprite(752,83,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=1;
     
     _this.numBoxNum2 = _this.add.sprite(812,83,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=2;
     
     _this.numBoxNum3 = _this.add.sprite(752,213,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=1;
     
     _this.numBoxNum4 = _this.add.sprite(812,213,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=6;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=2;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=0;
    
      _this.numboxGrp.add(_this.numBoxNum1);
     _this.numboxGrp.add(_this.numBoxNum2);
     _this.numboxGrp.add(_this.numBoxNum3);
     _this.numboxGrp.add(_this.numBoxNum4);
     _this.numboxGrp.add(_this.numBoxNum5);
     _this.numboxGrp.add(_this.numBoxNum6);   
    
     _this.txtGrp.add(_this.txtbox1);
     _this.txtGrp.add(_this.txtbox2);
     _this.txtGrp.add(_this.txtbox3);
     _this.txtGrp.add(_this.txtbox4);
     _this.txtGrp.add(_this.txtbox5);
     _this.txtGrp.add(_this.txtbox6);
     _this.txtGrp.add(_this.txtbox7);
     _this.txtGrp.add(_this.txtbox8);
     _this.txtGrp.add(_this.txtbox9);
     _this.txtGrp.add(_this.txtbox10);
     _this.txtGrp.add(_this.number11);
     _this.txtGrp.add(_this.number12);
     _this.txtGrp.add(_this.number13);
     _this.txtGrp.add(_this.number14);
    
     _this.numGrp.add(_this.number1);
     _this.numGrp.add(_this.number2);
     _this.numGrp.add(_this.number3);
     _this.numGrp.add(_this.number4);
     _this.numGrp.add(_this.number5);
     _this.numGrp.add(_this.number6);
     _this.numGrp.add(_this.number7);
     _this.numGrp.add(_this.number8);
     _this.numGrp.add(_this.number9);
     _this.numGrp.add(_this.number10);
     _this.numGrp.add(_this.mul1);
     _this.numGrp.add(_this.mul2);
     _this.numGrp.add(_this.mul3);
     _this.numGrp.add(_this.mul4);
     _this.numGrp.add(_this.mul5);
     _this.numGrp.add(_this.equal1);
     _this.numGrp.add(_this.equal2);
     _this.numGrp.add(_this.equal3);
     _this.numGrp.add(_this.equal4);
     _this.numGrp.add(_this.equal5);
   
      _this.rightAns="364860";
},
    
gotoNinthQuestion:function(){
       
      _this.questioNo = 9;
   
     //_this.getVoice();;
     
     
     _this.eggbox =_this.add.sprite(275,275,'unity12_2eggbox');
     _this.eggbox.anchor.setTo(0.5);
     _this.eggbox.scale.setTo(1,1);
     
     _this.box =_this.add.sprite(720,246,'unity12_2box');
     _this.box.anchor.setTo(0.5);
     _this.box.scale.setTo(1,1);
    
     _this.glowGrp = _this.add.group();

     _this.glow66=_this.add.sprite(183,105,'unity12_2glow5')
     _this.glow66.anchor.setTo(0.5);
     _this.glow66.scale.setTo(1,1);
     _this.glow66.frame=1;
     
     _this.glow67=_this.add.sprite(183,145,'unity12_2glow5')
     _this.glow67.anchor.setTo(0.5);
     _this.glow67.scale.setTo(1,1);
     //_this.glow17.frame=1;
     
     _this.glow68=_this.add.sprite(183,183,'unity12_2glow5')
     _this.glow68.anchor.setTo(0.5);
     _this.glow68.scale.setTo(1,1);
     //_this.glow18.frame=1;
     
     _this.glow69=_this.add.sprite(183,221,'unity12_2glow5')
     _this.glow69.anchor.setTo(0.5);
     _this.glow69.scale.setTo(1,1);
     //_this.glow19.frame=1;
     
     _this.glow70=_this.add.sprite(183,258,'unity12_2glow5')
     _this.glow70.anchor.setTo(0.5);
     _this.glow70.scale.setTo(1,1);
     //_this.glow20.frame=1;
    
     _this.glow71=_this.add.sprite(183,297,'unity12_2glow5')
     _this.glow71.anchor.setTo(0.5);
     _this.glow71.scale.setTo(1,1);
     //_this.glow11.frame=1;
    
     _this.glow72=_this.add.sprite(183,335,'unity12_2glow5')
     _this.glow72.anchor.setTo(0.5);
     _this.glow72.scale.setTo(1,1);
     //_this.glow12.frame=1;
    
     _this.glow73=_this.add.sprite(183,373,'unity12_2glow5')
     _this.glow73.anchor.setTo(0.5);
     _this.glow73.scale.setTo(1,1);
     //_this.glow13.frame=1;
    
     _this.glow74=_this.add.sprite(183,410,'unity12_2glow5')
     _this.glow74.anchor.setTo(0.5);
     _this.glow74.scale.setTo(1,1);
     //_this.glow14.frame=1;
    
     _this.glow75=_this.add.sprite(183,448,'unity12_2glow5')
     _this.glow75.anchor.setTo(0.5);
     _this.glow75.scale.setTo(1,1);
     //_this.glow15.frame=1;
    
     _this.glowGrp.add(_this.glow66);
     _this.glowGrp.add(_this.glow67);
     _this.glowGrp.add(_this.glow68);
     _this.glowGrp.add(_this.glow69);
     _this.glowGrp.add(_this.glow70);
     _this.glowGrp.add(_this.glow71);
     _this.glowGrp.add(_this.glow72);
     _this.glowGrp.add(_this.glow73);
     _this.glowGrp.add(_this.glow74);
     _this.glowGrp.add(_this.glow75);
    
     _this.egg =_this.add.sprite(705,455,'unity12_2egg');
     _this.egg.anchor.setTo(0.5);
     _this.egg.scale.setTo(1,1);
     _this.egg.frame=4;
     _this.egg.inputEnabled = true;
     _this.egg.input.useHandCursor = true;
     _this.egg.events.onInputDown.add(_this.onDragStart,_this);
     
     _this.smalleggGrp = _this.add.group();
     
     _this.smallegg66 =_this.add.sprite(221,105,'unity12_2smallegg');
     _this.smallegg66.anchor.setTo(0.5);
     _this.smallegg66.scale.setTo(1,1);
     _this.smallegg66.frame=8;
     _this.smallegg66.visible=false;
     _this.smallegg66.name = "smallegg66";
     
     _this.smallegg67 =_this.add.sprite(221,145,'unity12_2smallegg');
     _this.smallegg67.anchor.setTo(0.5);
     _this.smallegg67.scale.setTo(1,1);
     _this.smallegg67.frame=8;
     _this.smallegg67.visible=false;
     _this.smallegg67.name = "smallegg67";
     
     _this.smallegg68 =_this.add.sprite(221,183,'unity12_2smallegg');
     _this.smallegg68.anchor.setTo(0.5);
     _this.smallegg68.scale.setTo(1,1);
     _this.smallegg68.frame=8;
     _this.smallegg68.visible=false;
     _this.smallegg68.name = "smallegg68";
     
     _this.smallegg69 =_this.add.sprite(221,221,'unity12_2smallegg');
     _this.smallegg69.anchor.setTo(0.5);
     _this.smallegg69.scale.setTo(1,1);
     _this.smallegg69.frame=8;
     _this.smallegg69.visible=false;
     _this.smallegg69.name = "smallegg69";
     
     _this.smallegg70 =_this.add.sprite(221,258,'unity12_2smallegg');
     _this.smallegg70.anchor.setTo(0.5);
     _this.smallegg70.scale.setTo(1,1);
     _this.smallegg70.frame=8;
     _this.smallegg70.visible=false;
     _this.smallegg70.name = "smallegg70";
    
     _this.smallegg71 =_this.add.sprite(221,297,'unity12_2smallegg');
     _this.smallegg71.anchor.setTo(0.5);
     _this.smallegg71.scale.setTo(1,1);
     _this.smallegg71.frame=8;
     _this.smallegg71.visible=false;
     _this.smallegg71.name = "smallegg71";
    
     _this.smallegg72 =_this.add.sprite(221,335,'unity12_2smallegg');
     _this.smallegg72.anchor.setTo(0.5);
     _this.smallegg72.scale.setTo(1,1);
     _this.smallegg72.frame=8;
     _this.smallegg72.visible=false;
     _this.smallegg72.name = "smallegg72";
    
     _this.smallegg73 =_this.add.sprite(221,373,'unity12_2smallegg');
     _this.smallegg73.anchor.setTo(0.5);
     _this.smallegg73.scale.setTo(1,1);
     _this.smallegg73.frame=8;
     _this.smallegg73.visible=false;
     _this.smallegg73.name = "smallegg73";
    
     _this.smallegg74 =_this.add.sprite(221,410,'unity12_2smallegg');
     _this.smallegg74.anchor.setTo(0.5);
     _this.smallegg74.scale.setTo(1,1);
     _this.smallegg74.frame=6;
     _this.smallegg74.visible=false;
     _this.smallegg74.name = "smallegg74";
    
     _this.smallegg75 =_this.add.sprite(221,448,'unity12_2smallegg');
     _this.smallegg75.anchor.setTo(0.5);
     _this.smallegg75.scale.setTo(1,1);
     _this.smallegg75.frame=6;
     _this.smallegg75.visible=false;
     _this.smallegg75.name = "smallegg75";
     
     _this.smalleggGrp.add(_this.smallegg66);
     _this.smalleggGrp.add(_this.smallegg67);
     _this.smalleggGrp.add(_this.smallegg68);
     _this.smalleggGrp.add(_this.smallegg69);
     _this.smalleggGrp.add(_this.smallegg70);
     _this.smalleggGrp.add(_this.smallegg71);
     _this.smalleggGrp.add(_this.smallegg72);
     _this.smalleggGrp.add(_this.smallegg73);
     _this.smalleggGrp.add(_this.smallegg74);
     _this.smalleggGrp.add(_this.smallegg75);
     
    _this.numGrp = _this.add.group();

     _this.number1 =_this.add.sprite(600,115,'unity12_2numbers');
     _this.number1.anchor.setTo(0.5);
     _this.number1.frame=5;
     _this.number1.scale.setTo(1,1.1);
     
     _this.number2 =_this.add.sprite(600,180,'unity12_2numbers');
     _this.number2.anchor.setTo(0.5);
     _this.number2.frame=5;
     _this.number2.scale.setTo(1,1.1);
     
     _this.number3 =_this.add.sprite(600,245,'unity12_2numbers');
     _this.number3.anchor.setTo(0.5);
     _this.number3.frame=5;
     _this.number3.scale.setTo(1,1.1);
     
     _this.number4 =_this.add.sprite(600,310,'unity12_2numbers');
     _this.number4.anchor.setTo(0.5);
     _this.number4.frame=5;
     _this.number4.scale.setTo(1,1.1);
     
     _this.number5 =_this.add.sprite(600,375,'unity12_2numbers');
     _this.number5.anchor.setTo(0.5);
     _this.number5.frame=5;
     _this.number5.scale.setTo(1,1.1);
     
     _this.mul1 =_this.add.sprite(640,115,'unity12_2mul');
     _this.mul1.anchor.setTo(0.5);
     _this.mul1.scale.setTo(1,1.1);
     
     _this.mul2 =_this.add.sprite(640,180,'unity12_2mul');
     _this.mul2.anchor.setTo(0.5);
     _this.mul2.scale.setTo(1,1.1);
     
     _this.mul3 =_this.add.sprite(640,245,'unity12_2mul');
     _this.mul3.anchor.setTo(0.5);
     _this.mul3.scale.setTo(1,1.1);
     
     _this.mul4 =_this.add.sprite(640,310,'unity12_2mul');
     _this.mul4.anchor.setTo(0.5);
     _this.mul4.scale.setTo(1,1.1);
     
     _this.mul5 =_this.add.sprite(640,375,'unity12_2mul');
     _this.mul5.anchor.setTo(0.5);
     _this.mul5.scale.setTo(1,1.1);
     
     _this.number6 =_this.add.sprite(680,115,'unity12_2numbers');
     _this.number6.anchor.setTo(0.5);
     _this.number6.frame=6;
     _this.number6.scale.setTo(1,1.1);
     
     _this.number7 =_this.add.sprite(680,180,'unity12_2numbers');
     _this.number7.anchor.setTo(0.5);
     _this.number7.frame=7;
     _this.number7.scale.setTo(1,1.1);
     
     _this.number8 =_this.add.sprite(680,245,'unity12_2numbers');
     _this.number8.anchor.setTo(0.5);
     _this.number8.frame=8;
     _this.number8.scale.setTo(1,1.1);
     
     _this.number9 =_this.add.sprite(680,310,'unity12_2numbers');
     _this.number9.anchor.setTo(0.5);
     _this.number9.frame=9;
     _this.number9.scale.setTo(1,1.1);
     
     _this.number10 =_this.add.sprite(680,375,'unity12_2numbers');
     _this.number10.anchor.setTo(0.5);
     _this.number10.frame=10;
     _this.number10.scale.setTo(1,1.1);
    
     _this.equal1 =_this.add.sprite(720,115,'unity12_2mul');
     _this.equal1.anchor.setTo(0.5);
     _this.equal1.scale.setTo(1,1.1);
     _this.equal1.frame=1;
     
     _this.equal2 =_this.add.sprite(720,180,'unity12_2mul');
     _this.equal2.anchor.setTo(0.5);
     _this.equal2.scale.setTo(1,1.1);
     _this.equal2.frame=1;
     
     _this.equal3 =_this.add.sprite(720,245,'unity12_2mul');
     _this.equal3.anchor.setTo(0.5);
     _this.equal3.scale.setTo(1,1.1);
     _this.equal3.frame=1;
     
     _this.equal4 =_this.add.sprite(720,310,'unity12_2mul');
     _this.equal4.anchor.setTo(0.5);
     _this.equal4.scale.setTo(1,1.1);
     _this.equal4.frame=1;
     
     _this.equal5 =_this.add.sprite(720,375,'unity12_2mul');
     _this.equal5.anchor.setTo(0.5);
     _this.equal5.scale.setTo(1,1.1);
     _this.equal5.frame=1;
     
     _this.txtGrp = _this.add.group();
    
     _this.txtbox1 = _this.add.sprite(775,110,'unity12_2ansbox');
     _this.txtbox1.anchor.setTo(0.5);
     _this.txtbox1.scale.setTo(1,1);
     _this.txtbox1.frame=0;
     
     _this.number11 =_this.add.sprite(775,110,'unity12_2numberpad');
     _this.number11.anchor.setTo(0.5);
     _this.number11.frame=3;
     //_this.number11.scale.setTo(1,1.1);
    
     _this.txtbox10 = _this.add.sprite(835,110,'unity12_2ansbox');
     _this.txtbox10.anchor.setTo(0.5);
     _this.txtbox10.scale.setTo(1,1);
     _this.txtbox10.frame=0;
   
     _this.number14 =_this.add.sprite(835,110,'unity12_2numberpad');
     _this.number14.anchor.setTo(0.5);
     _this.number14.frame=0;
     //_this.number14.scale.setTo(1,1.1);
    
     
     _this.txtbox2 = _this.add.sprite(775,175,'unity12_2ansbox');
     _this.txtbox2.anchor.setTo(0.5);
     _this.txtbox2.scale.setTo(1,1);
     _this.txtbox2.frame=0;
     _this.txtbox2.name="numbox1";
     _this.txtbox2.inputEnabled = true;
     _this.txtbox2.input.useHandCursor = true;
     _this.txtbox2.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox3 = _this.add.sprite(835,175,'unity12_2ansbox');
     _this.txtbox3.anchor.setTo(0.5);
     _this.txtbox3.scale.setTo(1,1);
     _this.txtbox3.frame=0;
     _this.txtbox3.name="numbox2";
     _this.txtbox3.inputEnabled = true;
     _this.txtbox3.input.useHandCursor = true;
     _this.txtbox3.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox4 = _this.add.sprite(775,240,'unity12_2ansbox');
     _this.txtbox4.anchor.setTo(0.5);
     _this.txtbox4.scale.setTo(1,1);
     _this.txtbox4.frame=0;
     
     _this.number12 =_this.add.sprite(775,240,'unity12_2numberpad');
     _this.number12.anchor.setTo(0.5);
     _this.number12.frame=4;
    // _this.number12.scale.setTo(1,1.1);
     
     _this.txtbox5 = _this.add.sprite(835,240,'unity12_2ansbox');
     _this.txtbox5.anchor.setTo(0.5);
     _this.txtbox5.scale.setTo(1,1);
     _this.txtbox5.frame=0;
    
     _this.number13 =_this.add.sprite(835,240,'unity12_2numberpad');
     _this.number13.anchor.setTo(0.5);
     _this.number13.frame=0;
     //_this.number13.scale.setTo(1,1.1);
     
     _this.txtbox6 = _this.add.sprite(775,305,'unity12_2ansbox');
     _this.txtbox6.anchor.setTo(0.5);
     _this.txtbox6.scale.setTo(1,1);
     _this.txtbox6.frame=0;
     _this.txtbox6.name="numbox3";
     _this.txtbox6.inputEnabled = true;
     _this.txtbox6.input.useHandCursor = true;
     _this.txtbox6.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox7 = _this.add.sprite(835,305,'unity12_2ansbox');
     _this.txtbox7.anchor.setTo(0.5);
     _this.txtbox7.scale.setTo(1,1);
     _this.txtbox7.frame=0;
     _this.txtbox7.name="numbox4";
     _this.txtbox7.inputEnabled = true;
     _this.txtbox7.input.useHandCursor = true;
     _this.txtbox7.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox8 = _this.add.sprite(775,370,'unity12_2ansbox');
     _this.txtbox8.anchor.setTo(0.5);
     _this.txtbox8.scale.setTo(1,1);
     _this.txtbox8.frame=0;
     _this.txtbox8.name="numbox5";
     _this.txtbox8.inputEnabled = true;
     _this.txtbox8.input.useHandCursor = true;
     _this.txtbox8.events.onInputDown.add(_this.numberBoxClicked,_this);
     
     _this.txtbox9 = _this.add.sprite(835,370,'unity12_2ansbox');
     _this.txtbox9.anchor.setTo(0.5);
     _this.txtbox9.scale.setTo(1,1);
     _this.txtbox9.frame=0;
     _this.txtbox9.name="numbox6";
     _this.txtbox9.inputEnabled = true;
     _this.txtbox9.input.useHandCursor = true;
     _this.txtbox9.events.onInputDown.add(_this.numberBoxClicked,_this);
    
     _this.numboxGrp = _this.add.group();

     _this.numBoxNum1 = _this.add.sprite(752,147,'unity12_2numberpad');
     _this.numBox1Pressed = false;
     _this.numBoxNum1.visible = false;
     _this.numBoxNum1.frame=2;
     
     _this.numBoxNum2 = _this.add.sprite(812,147,'unity12_2numberpad');
     _this.numBox2Pressed = false;
     _this.numBoxNum2.visible = false;
     _this.numBoxNum2.frame=8;
     
     _this.numBoxNum3 = _this.add.sprite(752,278,'unity12_2numberpad');
     _this.numBox3Pressed = false;
     _this.numBoxNum3.visible = false;
     _this.numBoxNum3.frame=3;
     
     _this.numBoxNum4 = _this.add.sprite(812,278,'unity12_2numberpad');
     _this.numBox4Pressed = false;
     _this.numBoxNum4.visible = false;
     _this.numBoxNum4.frame=2;
     
     _this.numBoxNum5 = _this.add.sprite(752,343,'unity12_2numberpad');
     _this.numBox5Pressed = false;
     _this.numBoxNum5.visible = false;
     _this.numBoxNum5.frame=4;
     
     _this.numBoxNum6 = _this.add.sprite(812,343,'unity12_2numberpad');
     _this.numBox6Pressed = false;
     _this.numBoxNum6.visible = false;
     _this.numBoxNum6.frame=0;
    
     _this.numboxGrp.add(_this.numBoxNum1);
     _this.numboxGrp.add(_this.numBoxNum2);
     _this.numboxGrp.add(_this.numBoxNum3);
     _this.numboxGrp.add(_this.numBoxNum4);
     _this.numboxGrp.add(_this.numBoxNum5);
     _this.numboxGrp.add(_this.numBoxNum6);
    
    _this.txtGrp.add(_this.txtbox1);
    _this.txtGrp.add(_this.txtbox2);
    _this.txtGrp.add(_this.txtbox3);
    _this.txtGrp.add(_this.txtbox4);
    _this.txtGrp.add(_this.txtbox5);
    _this.txtGrp.add(_this.txtbox6);
    _this.txtGrp.add(_this.txtbox7);
    _this.txtGrp.add(_this.txtbox8);
    _this.txtGrp.add(_this.txtbox9);
    _this.txtGrp.add(_this.txtbox10);
    _this.txtGrp.add(_this.number11);
    _this.txtGrp.add(_this.number12);
    _this.txtGrp.add(_this.number13);
    _this.txtGrp.add(_this.number14);
    
    _this.numGrp.add(_this.number1);
    _this.numGrp.add(_this.number2);
    _this.numGrp.add(_this.number3);
    _this.numGrp.add(_this.number4);
    _this.numGrp.add(_this.number5);
    _this.numGrp.add(_this.number6);
    _this.numGrp.add(_this.number7);
    _this.numGrp.add(_this.number8);
    _this.numGrp.add(_this.number9);
    _this.numGrp.add(_this.number10);
    _this.numGrp.add(_this.mul1);
    _this.numGrp.add(_this.mul2);
    _this.numGrp.add(_this.mul3);
    _this.numGrp.add(_this.mul4);
    _this.numGrp.add(_this.mul5);
    _this.numGrp.add(_this.equal1);
    _this.numGrp.add(_this.equal2);
    _this.numGrp.add(_this.equal3);
    _this.numGrp.add(_this.equal4);
    _this.numGrp.add(_this.equal5);
    
      _this.rightAns="354550";
     
},
       

numberBoxClicked:function(target){
     _this.clickSound = _this.add.audio('ClickSound');
     _this.clickSound.play();
        if(target.name == "numbox1")
        {
           
             _this.numBox1Pressed = true;
             _this.numBox2Pressed = false;
             _this.numBox3Pressed = false;
             _this.numBox4Pressed = false;
             _this.numBox5Pressed = false;
             _this.numBox6Pressed = false;
              _this.txtbox2.frame = 1;
              _this.txtbox3.frame = 0;
              _this.txtbox6.frame = 0;
              _this.txtbox7.frame = 0;
              _this.txtbox8.frame = 0;
              _this.txtbox9.frame = 0;
        } 
        if(target.name == "numbox2")
        {
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox3Pressed = false;
             _this.numBox4Pressed = false;
             _this.numBox5Pressed = false;
             _this.numBox6Pressed = false;
              _this.txtbox3.frame = 1;
              _this.txtbox2.frame = 0;
              _this.txtbox6.frame = 0;
              _this.txtbox7.frame = 0;
              _this.txtbox8.frame = 0;
              _this.txtbox9.frame = 0;
        }
       if(target.name == "numbox3")
        {
             _this.numBox3Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox2Pressed = false;
             _this.numBox4Pressed = false;
             _this.numBox5Pressed = false;
             _this.numBox6Pressed = false;
              _this.txtbox6.frame = 1;
              _this.txtbox2.frame = 0;
              _this.txtbox3.frame = 0;
              _this.txtbox7.frame = 0;
              _this.txtbox8.frame = 0;
              _this.txtbox9.frame = 0;
        }
       if(target.name == "numbox4")
        {
             _this.numBox4Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox2Pressed = false;
             _this.numBox3Pressed = false;
             _this.numBox5Pressed = false;
             _this.numBox6Pressed = false;
              _this.txtbox7.frame = 1;
              _this.txtbox2.frame = 0;
              _this.txtbox3.frame = 0;
              _this.txtbox6.frame = 0;
              _this.txtbox8.frame = 0;
              _this.txtbox9.frame = 0;
        }
        if(target.name == "numbox5")
        {
             _this.numBox5Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox2Pressed = false;
             _this.numBox3Pressed = false;
             _this.numBox4Pressed = false;
             _this.numBox6Pressed = false;
              _this.txtbox8.frame = 1;
              _this.txtbox2.frame = 0;
              _this.txtbox3.frame = 0;
              _this.txtbox6.frame = 0;
              _this.txtbox7.frame = 0;
              _this.txtbox9.frame = 0;
        }
       if(target.name == "numbox6")
        {
             _this.numBox6Pressed = true;
             _this.numBox1Pressed = false;
             _this.numBox2Pressed = false;
             _this.numBox3Pressed = false;
             _this.numBox4Pressed = false;
             _this.numBox5Pressed = false;
              _this.txtbox9.frame = 1;
              _this.txtbox2.frame = 0;
              _this.txtbox3.frame = 0;
              _this.txtbox6.frame = 0;
              _this.txtbox7.frame = 0;
              _this.txtbox8.frame = 0;
        }
       
    if( _this.toCheckNumberPad)
        {
             _this.toCheckNumberPad = false;
            
        _this.time.events.add(200, function(){
        _this.addNumberPad();
        _this.numGroup.y=50;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
           // target.events.onInputDown.removeAll();
        },_this);
        }
        
},
    addNumberPad:function(target){
     
        _this.clickSound = _this.add.audio('ClickSound');
        _this.clickSound.play();
        _this.numGroup = _this.add.group();
        _this.objGroup = _this.add.group();
        _this.box1 = _this.numGroup.create(480,510,'unity12_2b2');
        _this.box1.anchor.setTo(0.5);
        _this.x = 80;
     
        for(var i=0;i<10;i++)
        {
            _this.numbg = _this.numGroup.create(_this.x,510,'unity12_2numberpad');  
            _this.numbg.anchor.setTo(0.5);
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
            _this.numbg.events.onInputDown.add(_this.numClicked,_this);
            
            _this.x+=70;
        }
       
        _this.wrongbtn = _this.numGroup.create(_this.x+30,510,'unity12_2eraser');
        _this.wrongbtn.anchor.setTo(0.5);
        _this.wrongbtn.scale.setTo(1,1);
        _this.wrongbtn.name = "wrongbtn";
        _this.wrongbtn.inputEnabled = true;
        _this.wrongbtn.input.useHandCursor = true;
       
        _this.rightbtn = _this.numGroup.create(_this.x+90,510,'unity12_2rightmark');
        _this.rightbtn.anchor.setTo(0.5);
        _this.rightbtn.name = "rightbtn";
        _this.rightbtn.name = "wrongbtn";
        _this.rightbtn.inputEnabled = true;
        _this.rightbtn.input.useHandCursor = true;
        
        
        _this.wrongbtn.events.onInputDown.add(function(){
            _this.clickSound.play();
            _this.wrongbtn.frame=1;
            if(_this.numBox1Pressed){
                    _this.numBoxNum1.visible = true;
                }
                else if(_this.numBox2Pressed){
                    _this.numBoxNum2.visible = false;
                }
                else if(_this.numBox3Pressed)
                {
                    _this.numBoxNum3.visible = false;
                }
               else if(_this.numBox4Pressed)
                {
                    _this.numBoxNum4.visible = false;
                }
               else if(_this.numBox5Pressed)
                {
                    _this.numBoxNum5.visible = false;
                }
               else if(_this.numBox6Pressed)
                {
                    _this.numBoxNum6.visible = false;
                }
            
            _this.time.events.add(500, function(){
                _this.wrongbtn.frame=0;
            },_this);
        },_this);
        
        _this.rightbtn.events.onInputDown.add(function(target){
             _this.noofAttempts++;
            _this.clickSound.play();
            _this.rightbtn.frame=1;
        _this.selectedAns = ""+_this.selectedAns1+_this.selectedAns2+_this.selectedAns3+_this.selectedAns4+_this.selectedAns5+_this.selectedAns6;
             //console.log("selected Answer "+ _this.selectedAns1);
             //console.log("selected Answer "+ _this.selectedAns2);
             //console.log("selected Answer "+ _this.selectedAns3);
             //console.log("selected Answer "+ _this.selectedAns4);
             //console.log("selected Answer "+ _this.selectedAns5);
             //console.log("selected Answer "+ _this.selectedAns6);
             //console.log(_this.selectedAns);
             //console.log(_this.rightAns);
            _this.time.events.add(500, function(){
                _this.rightbtn.frame=0;
            },_this);
            if(_this.selectedAns==_this.rightAns) 
                {
                    //console.log("correct");

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


                        _this.currentTime = window.timeSaveFunc();
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
                    
                       // absdsjsapi.saveAssessment(_this.saveAsment);

                  telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

				  _this.txtbox2 = _this.txtbox2.animations.add('walk');                   
                    _this.txtbox2.play(3,true);
                    _this.txtbox3 = _this.txtbox3.animations.add('walk');                   
                    _this.txtbox3.play(3,true);
                    _this.txtbox6 = _this.txtbox6.animations.add('walk');                   
                    _this.txtbox6.play(3,true);
                    _this.txtbox7 = _this.txtbox7.animations.add('walk');                   
                    _this.txtbox7.play(3,true);
                    _this.txtbox8 = _this.txtbox8.animations.add('walk');                   
                    _this.txtbox8.play(3,true);
                    _this.txtbox9 = _this.txtbox9.animations.add('walk');                   
                    _this.txtbox9.play(3,true);
					
                    _this.rightbtn.frame=1;
                    target.events.onInputDown.removeAll();
                    
                    _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                    _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
                   
                    _this.starAnim.smoothed = false;
                    _this.anim4 = _this.starAnim.animations.add('star');
                    _this.anim4.play();
                    _this.count1++;
                   
                    _this.time.events.add(2000, function(){_this.removeCelebration();},_this);
                }
            else
                {
                   
                     //console.log("wrong");
                    _this.selectedAns = "";
                    _this.time.events.add(500, function(){
                _this.rightbtn.frame=0;
            },_this);
                    _this.wmusic = _this.add.audio('waudio');
		            _this.wmusic.play(); 
                    _this.numBoxNum1.visible = false;
                    _this.numBoxNum2.visible = false;
                    _this.numBoxNum3.visible = false;
                    _this.numBoxNum4.visible = false;
                    _this.numBoxNum5.visible = false;
                    _this.numBoxNum6.visible = false;
                }
  
        },_this);
    
        
        //_this.numGroup.visible=true;
      /*  _this.time.events.add(200, function(){
        //_this.numGroup.visible=true;
        _this.numGroup.y=100;
        _this.Maintween = _this.add.tween(_this.numGroup);
        _this.Maintween.to({ y:0}, 0, 'Linear', true, 0);
           // target.events.onInputDown.removeAll();
        },_this);
        
        */   

       },
       

	 numClicked:function(target){
     //console.log(target.name);
        
       //  _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id:  "level12.2_"+target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
         _this.clickSound = _this.add.audio('ClickSound');
               _this.clickSound.play();
         
         if(_this.numBox1Pressed){
             _this.numBoxNum1.visible = true;
             _this.selectedAns1 = target.name;
             _this.numBoxNum1.frame = target.name;
             _this.txtbox2.frame = 0;
             _this.txtbox3.frame = 1;
             _this.numBox2Pressed = true;
             _this.numBox1Pressed = false;
         }
         else if(_this.numBox2Pressed){
             _this.numBoxNum2.visible = true;
             _this.selectedAns2 = target.name;
             _this.numBoxNum2.frame = target.name;
             _this.txtbox3.frame = 0;
             _this.txtbox6.frame = 1;
             _this.numBox3Pressed = true;
             _this.numBox2Pressed = false;
         }
        else if(_this.numBox3Pressed)
             {
                 _this.numBoxNum3.visible = true;
                 _this.selectedAns3 = target.name;
                 _this.numBoxNum3.frame = target.name;
                 _this.txtbox6.frame = 0;
                 _this.txtbox7.frame = 1;
                 _this.numBox4Pressed = true;
                 _this.numBox3Pressed = false;
             }
         else if(_this.numBox4Pressed)
             {
                 _this.numBoxNum4.visible = true;
                 _this.selectedAns4 = target.name;
                 _this.numBoxNum4.frame = target.name;
                 _this.txtbox7.frame = 0;
                 _this.txtbox8.frame = 1;
                 _this.numBox5Pressed = true;
                 _this.numBox4Pressed = false;
             }
         else if(_this.numBox5Pressed)
             {
                 _this.numBoxNum5.visible = true;
                 _this.selectedAns5 = target.name;
                 _this.numBoxNum5.frame = target.name;
                 _this.txtbox8.frame = 0;
                 _this.txtbox9.frame = 1;
                 _this.numBox6Pressed = true;
                 _this.numBox5Pressed = false;
             }
         else if(_this.numBox6Pressed)
             {
                 _this.numBoxNum6.visible = true;
                 _this.selectedAns6 = target.name;
                 _this.numBoxNum6.frame = target.name;
                 _this.txtbox9.frame = 0;
                 _this.txtbox2.frame = 1;
                 _this.numBox1Pressed = true;
                 _this.numBox6Pressed = false;
             }
       
     },
     
      
         
    removeCelebration:function()
	{
        //console.log("removeCeleb");
		_this.celebration = false;
		//console.log("no"+_this.no11);
        _this.correct=0;
        _this.count=0;
       
		  _this.no11++;
		   
		  if(_this.no11<6)
                    {
                        
                         
                        
                        _this.addEgg = 0;
                        _this.glowGrp.destroy();
                        _this.smalleggGrp.destroy();
                        _this.egg.destroy();
                        _this.eggbox.destroy();
                        _this.box.destroy();
                        _this.numboxGrp.destroy();
                        _this.txtGrp.destroy();
                        _this.numGrp.destroy();
                        _this.box1.destroy();
                        _this.numGroup.destroy();
                        _this.smallegg1=null;_this.smallegg2=null;_this.smalleg3=null;_this.smallegg4=null;_this.smallegg5=null;
                        _this.smallegg6=null;_this.smallegg7=null;_this.smallegg8=null;_this.smallegg9=null;_this.smallegg10=null;
                        _this.smallegg11=null;_this.smallegg12=null;_this.smallegg13=null;_this.smallegg14=null;_this.smallegg15=null;
                        _this.smallegg16=null;_this.smallegg17=null;_this.smallegg18=null;_this.smallegg19=null;_this.smallegg20=null;
                        _this.smallegg21=null;_this.smallegg22=null;_this.smallegg23=null;_this.smallegg24=null;_this.smallegg25=null;
                        _this.smallegg26=null;_this.smallegg27=null;_this.smallegg28=null;_this.smallegg29=null;_this.smallegg30=null;
                        _this.smallegg31=null;_this.smallegg32=null;_this.smallegg33=null;_this.smallegg34=null;_this.smallegg35=null;
                        _this.smallegg36=null;_this.smallegg37=null;_this.smallegg38=null;_this.smallegg39=null;_this.smallegg40=null;
                        _this.smallegg41=null;_this.smallegg42=null;_this.smallegg43=null;_this.smallegg44=null;_this.smallegg45=null;
                        _this.smallegg46=null;_this.smallegg47=null;_this.smallegg48=null;_this.smallegg49=null;_this.smallegg50=null;
                        _this.time.events.add(500,function(){
                        _this.getQuestion();
                    },_this);
                        
                    
                    }
        
                else
                    {
                         
                         _this.stopvoice();
                         _this.timer1=null;
                         _this.state.start('unity12_2Score');
                  }



		
	},
    
    
     
    
 correctAns:function(target)
	{
       
        _this.stopvoice();

        target.events.onInputDown.removeAll(); 
      _this.wrongbtn.frame=1;
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "Click", 
                    res_id: "level12.2_"+target.name, 
                    access_token: window.acctkn 
               } 
               
          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
        
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
        _this.currentTime = window.timeSaveFunc();
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
                    
               absdsjsapi.saveAssessment(_this.saveAsment);


        _this.starAnim = _this.starsGroup.getChildAt(_this.count1);
		//console.log(_this.starAnim);
        
		_this.starAnim.smoothed = false;
    	_this.anim4 = _this.starAnim.animations.add('star');
		_this.anim4.play();   
		 //console.log("correct11");
        _this.speaker.inputEnabled=false;
        _this.count1++;
       
		_this.celebration = true;
        
        _this.click3 = _this.add.audio('ClickSound');
        _this.click3.play();
     	_this.cmusic = _this.add.audio('celebr');
		_this.cmusic.play();
        
		
        _this.time.events.add(1000, _this.removeCelebration, _this);


		//console.log(target);
        
	},


  wrongAns:function(target)
	{
       
        _this.stopvoice();
       
		_this.shake.shake(10, target);
        _this.noofAttempts++;
         //_this.currentTime = window.timeSaveFunc();
         _this.interactEvent = 
               { 
                    id_game_play: _this.savedVar, 
                    id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
                    date_time_event: _this.currentTime, 
                    event_type: "click", 
                    res_id: target.name, 
                    access_token: window.acctkn 
               } 

          //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;
		_this.wmusic = _this.add.audio('waudio');
		_this.wmusic.play();
        
        	
        target.events.onInputDown.removeAll();
	},
    
    
    getVoice:function(){
        _this.stopvoice();
        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');
        switch(_this.qArrays[_this.no11])
        {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:if(window.languageSelected =="English")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/12.2/English/12.2E.mp3");
                    }
                    else if(window.languageSelected =="Hindi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/12.2/Hindi/12.2H.mp3");
                    }
                    else if(window.languageSelected =="Kannada")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/12.2/Kannada/12.2K.mp3");
                    }
                else{
                          _this.src.setAttribute("src", window.baseUrl+"questionSounds/12.2/Odiya/12.2O.mp3");
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
    
stopvoice:function(){
            
          if(_this.playQuestionSound)
          {
               if(_this.playQuestionSound.contains(_this.src))
               {
                    _this.playQuestionSound.removeChild(_this.src);
                    _this.src = null;
               }
               if(!_this.playQuestionSound.paused)
               {
                   //console.log("here");
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
        this.stopvoice();
    }   
   

};
       
      
		
        
   
    
    
            
       
     
    
      
      
       



             


		
	
       