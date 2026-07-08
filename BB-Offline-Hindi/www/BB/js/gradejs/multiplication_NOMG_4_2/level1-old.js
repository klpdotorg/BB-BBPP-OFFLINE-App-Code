Game.multiplication_NOMG_4_2level1=function(){};

Game.multiplication_NOMG_4_2level1.prototype ={

    init:function(param,score)
    {
        _this= this;
        this.Stararr = param;
        this.score =parseInt(window.score);
        //       telInitializer.gameIdInit("multiplication12_3_1",gradeSelected);
        telInitializer2.gameIdInit2("NOMG4.2");
    },

    create:function(game)
    {

        _this.sceneCount = 0;
        _this.Stararr = [];
        _this.qArrays;
        _this.count;
        _this.count1;
        _this.speakerbtn;
        _this.celebration;
        _this.selectedAns = "";

        _this.opt = new Array();
        _this.correctans=0;
        _this.questionNo = 0;

        _this.no11 = 0;

        _this.background;
        _this.click3;
        _this.click4;
        _this.rightCount ;
        _this.opt1;
        _this.wmusic;
        _this.wrong = true;
        _this.count;
        _this.clickSound;
        _this.change = 0;
        _this.multiplication;
        _this.starsGroup;

        _this.seconds = 0;
        _this.minutes = 0
        _this.counterForTimer = 0;
        _this.increament;

        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.no22 = 0;
        _this.count=0;
        _this.count1=0;
        _this.checkEgg =1;
        _this.celebration= false;

        _this.greenNumbers =null;

        _this.qArrays = new Array();

        _this.qArrays = [1,2,3,4,5,6,7,8];

        //_this.qArrays = _this.shuffle(_this.qArrays);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
        _this.physics.setBoundsToWorld();

        _this.background = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Unity12_3_2BG_01');

        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/12.3.1/English/12.3.1.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/12.3.1/Hindi/12.3.1.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/12.3.1/Kannada/12.3.1.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/12.1/12.1.mp3";
        }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/12.3.1/Odiya/12.3.1.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }
        commonNavBar.addNavBar(this,_this.soundurl,"numberoperation3");
        commonNavBar.addTimerToTheGame(this,0,0,0);
        commonNavBar.startTimer(this);
        commonNavBar.addScore(this,this.score);
        this.hintparams=['NOMG4.2','level1',true,true,true,3];
        commonNavBar.addHint(this,this.hintparams);

        _this.generateStarsForTheScene(9);
        _this.getQuestion();

        _this.getVoice();

    },

    updateTimer:function() 
    {
        _this.counterForTimer++;
        ////console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;

            if(_this.minutes<10){
                _this.minutes =  _this.minutes+1;
                _this.seconds = 00;
            }
            else
            {
                _this.minutes =  _this.minutes+1;
            }
        }
        else
        {
            if (_this.counterForTimer < 10)        
                _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
        _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
        //timer.setText(minutes + ':'+ seconds );
    },

    shuffle: function(array) 
    {
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

    getQuestion:function(target)
    {
        //commonNavBar.enableHintIcon();
        //console.log("getQuestion :"+_this.no11);
        //console.log("getQuestion :"+_this.qArrays[_this.no11]);

        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
        _this.sceneCount++;

        /************************$$$$$$$$$$**********************/

        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.

//        _this.speakerbtn.inputEnabled=true;
//        _this.speakerbtn.input.useHandCursor = true;
        _this.questionid=1;


        _this.addEgg = 0;

        /*switch(_this.qArrays[_this.no11])
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
    	}*/

        _this.gotoFirstQuestion();
        telInitializer2.gameQuestionStart(this,_this.questionid);
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
        }	
         _this.starsGroup.getChildAt(0).frame = 2;
    },

    addQuestion:function(no22)
    {
        //console.log("addQuestion");
        _this.time.events.add(900, function(){
            var tween = _this.add.tween(flagGroup1);
            tween.to({ x: -1000 }, 0, 'Linear', true, 0);
            tween.onComplete.add(_this.changeQuestion, _this);

        }, _this);
    },

    onDragStart:function(target)
    {
        console.log("onDragStart");

        _this.noofAttempts++;

        //_this.currentTime = window.timeSaveFunc();
        _this.interactEvent = 
            { 
            id_game_play: _this.savedVar, 
            id_question: _this.questionid+"#SCR-"+_this.sceneCount,  
            date_time_event: _this.currentTime, 
            event_type: "drag", 
            res_id: "level12.3.1_"+target.name, 
            access_token: window.acctkn 
        } 

        //absdsjsapi.saveInteractEvent(_this.interactEvent);_this.noofAttempts++;

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
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
//        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);

        target.input.enableDrag(true);
        commonNavBar.playClickSound();

        _this.vx = target.x;   
        _this.vy = target.y; 

        target.events.onDragStop.add(function(target)
                                     {
            console.log("target.key:"+target.key);

            commonNavBar.playSnapSound();

            if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(0)) && (_this.SmallEggGrp.getChildAt(0).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(1)) && (_this.SmallEggGrp.getChildAt(1).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(2)) && (_this.SmallEggGrp.getChildAt(2).visible == false))|| 
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(3)) && (_this.SmallEggGrp.getChildAt(3).visible == false))|| 
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(4)) && (_this.SmallEggGrp.getChildAt(4).visible == false))|| 
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(5)) && (_this.SmallEggGrp.getChildAt(5).visible == false))|| 
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(6)) && (_this.SmallEggGrp.getChildAt(6).visible == false)))&& _this.addEgg == 0 
            )
            { 

                if(_this.randomno==7)
                {
                    _this.SmallEggGrp.getChildAt(0).visible = true;
                    _this.SmallEggGrp.getChildAt(1).visible = true;
                    _this.SmallEggGrp.getChildAt(2).visible = true;
                    _this.SmallEggGrp.getChildAt(3).visible = true;
                    _this.SmallEggGrp.getChildAt(4).visible = true;
                    _this.SmallEggGrp.getChildAt(5).visible = true;
                    _this.SmallEggGrp.getChildAt(6).visible = true;

                    _this.SmallEgg1.frame = 1;
                    _this.SmallEgg2.frame = 1;
                    _this.SmallEgg3.frame = 1;
                    _this.SmallEgg4.frame = 1;
                    _this.SmallEgg5.frame = 1;
                    _this.SmallEgg6.frame = 1;
                    _this.SmallEgg7.frame = 1;

                    _this.FirstNumbers1.frame = _this.randomno-1;
                    _this.FirstNumbers1.visible=true;
                    _this.NumberGrp2.getChildAt(0).visible = true;
                    _this.NumberGrp3.getChildAt(0).visible = true;

                    _this.SmallEgg1_Glow_seven.frame = 0;

                    _this.SmallEgg2_Glow_seven.frame = 1;
                    _this.SmallEgg2_Glow_seven.visible=true;


                }
                else //if(_this.randomno==6)
                {
                    _this.SmallEggGrp.getChildAt(0).visible = true;
                    _this.SmallEggGrp.getChildAt(1).visible = true;
                    _this.SmallEggGrp.getChildAt(2).visible = true;
                    _this.SmallEggGrp.getChildAt(3).visible = true;
                    _this.SmallEggGrp.getChildAt(4).visible = true;
                    _this.SmallEggGrp.getChildAt(5).visible = true;

                    _this.FirstNumbers1.frame = _this.randomno-1;
                    _this.FirstNumbers1.visible=true;
                    _this.NumberGrp2.getChildAt(0).visible = true;
                    _this.NumberGrp3.getChildAt(0).visible = true;

                    _this.SmallEgg1.frame = 1;
                    _this.SmallEgg2.frame = 1;
                    _this.SmallEgg3.frame = 1;
                    _this.SmallEgg4.frame = 1;
                    _this.SmallEgg5.frame = 1;
                    _this.SmallEgg6.frame = 1;

                    _this.SmallEgg1_Glow_six.frame = 0;

                    _this.SmallEgg2_Glow_six.frame=1;

                    _this.SmallEgg2_Glow_six.visible = true;

                }


                _this.addEgg ++;

            }

            else if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(7)) && (_this.SmallEggGrp.getChildAt(7).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(8)) && (_this.SmallEggGrp.getChildAt(8).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(9)) && (_this.SmallEggGrp.getChildAt(9).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(10)) && (_this.SmallEggGrp.getChildAt(10).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(11)) && (_this.SmallEggGrp.getChildAt(11).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(12)) && (_this.SmallEggGrp.getChildAt(12).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(13)) && (_this.SmallEggGrp.getChildAt(13).visible == false)))&&
                _this.addEgg == 1
            )
            { 
                console.log("target.name hittttttttttttttt:"+target.name);

                if(_this.randomno==7)
                {
                    _this.SmallEggGrp.getChildAt(7).visible = true;
                    _this.SmallEggGrp.getChildAt(8).visible = true;
                    _this.SmallEggGrp.getChildAt(9).visible = true;
                    _this.SmallEggGrp.getChildAt(10).visible = true;
                    _this.SmallEggGrp.getChildAt(11).visible = true;
                    _this.SmallEggGrp.getChildAt(12).visible = true;
                    _this.SmallEggGrp.getChildAt(13).visible = true;

                    _this.FirstNumbers2.frame = _this.randomno-1;
                    _this.FirstNumbers2.visible=true;
                    _this.NumberGrp2.getChildAt(1).visible = true;
                    _this.NumberGrp3.getChildAt(1).visible = true;

                    _this.SmallEgg8.frame = 1;
                    _this.SmallEgg9.frame = 1;
                    _this.SmallEgg10.frame = 1;
                    _this.SmallEgg11.frame = 1;
                    _this.SmallEgg12.frame = 1;
                    _this.SmallEgg13.frame = 1;
                    _this.SmallEgg14.frame = 1;

                    _this.SmallEgg2_Glow_seven.frame = 0;

                    _this.SmallEgg3_Glow_seven.frame=1;
                    _this.SmallEgg3_Glow_seven.visible=true;

                }
                else// if( _this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(7).visible = true;
                    _this.SmallEggGrp.getChildAt(8).visible = true;
                    _this.SmallEggGrp.getChildAt(9).visible = true;
                    _this.SmallEggGrp.getChildAt(10).visible = true;
                    _this.SmallEggGrp.getChildAt(11).visible = true;
                    _this.SmallEggGrp.getChildAt(12).visible = true;

                    _this.SmallEgg8.frame = 1;
                    _this.SmallEgg9.frame = 1;
                    _this.SmallEgg10.frame = 1;
                    _this.SmallEgg11.frame = 1;
                    _this.SmallEgg12.frame = 1;
                    _this.SmallEgg13.frame = 1;
                    // _this.SmallEgg14.frame = 1;

                    _this.FirstNumbers2.frame = _this.randomno-1;
                    _this.FirstNumbers2.visible=true;
                    _this.NumberGrp2.getChildAt(1).visible = true;
                    _this.NumberGrp3.getChildAt(1).visible = true;

                    _this.SmallEgg2_Glow_six.frame = 0;

                    _this.SmallEgg3_Glow_six.frame=1;
                    _this.SmallEgg3_Glow_six.visible=true;

                }

                _this.addEgg++;
            }
            else if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(14)) && (_this.SmallEggGrp.getChildAt(14).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(15)) && (_this.SmallEggGrp.getChildAt(15).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(16)) && (_this.SmallEggGrp.getChildAt(16).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(17)) && (_this.SmallEggGrp.getChildAt(17).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(18)) && (_this.SmallEggGrp.getChildAt(18).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(19)) && (_this.SmallEggGrp.getChildAt(19).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(20)) && (_this.SmallEggGrp.getChildAt(20).visible == false)))&&
                _this.addEgg == 2
            )
            { 
                console.log("target.name hittttttttttttttt:"+target.name);
                if(_this.randomno==7)
                {
                    _this.SmallEggGrp.getChildAt(14).visible = true;
                    _this.SmallEggGrp.getChildAt(15).visible = true;
                    _this.SmallEggGrp.getChildAt(16).visible = true;
                    _this.SmallEggGrp.getChildAt(17).visible = true;
                    _this.SmallEggGrp.getChildAt(18).visible = true;
                    _this.SmallEggGrp.getChildAt(19).visible = true;
                    _this.SmallEggGrp.getChildAt(20).visible = true;

                    _this.FirstNumbers3.frame = _this.randomno-1;
                    _this.FirstNumbers3.visible=true;
                    _this.NumberGrp2.getChildAt(2).visible = true;
                    _this.NumberGrp3.getChildAt(2).visible = true;

                    _this.SmallEgg15.frame = 1;
                    _this.SmallEgg16.frame = 1;
                    _this.SmallEgg17.frame = 1;
                    _this.SmallEgg18.frame = 1;
                    _this.SmallEgg19.frame = 1;
                    _this.SmallEgg20.frame = 1;
                    _this.SmallEgg21.frame = 1;

                    _this.SmallEgg3_Glow_seven.frame = 0;

                    _this.SmallEgg4_Glow_seven.frame=1;
                    _this.SmallEgg4_Glow_seven.visible=true;

                }
                else //if( _this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(14).visible = true;
                    _this.SmallEggGrp.getChildAt(15).visible = true;
                    _this.SmallEggGrp.getChildAt(16).visible = true;
                    _this.SmallEggGrp.getChildAt(17).visible = true;
                    _this.SmallEggGrp.getChildAt(18).visible = true;
                    _this.SmallEggGrp.getChildAt(19).visible = true;
                    //_this.SmallEggGrp.getChildAt(20).visible = true;

                    _this.FirstNumbers3.frame = _this.randomno-1;
                    _this.FirstNumbers3.visible=true;
                    _this.NumberGrp2.getChildAt(2).visible = true;
                    _this.NumberGrp3.getChildAt(2).visible = true;

                    _this.SmallEgg15.frame = 1;
                    _this.SmallEgg16.frame = 1;
                    _this.SmallEgg17.frame = 1;
                    _this.SmallEgg18.frame = 1;
                    _this.SmallEgg19.frame = 1;
                    _this.SmallEgg20.frame = 1;
                    //_this.SmallEgg21.frame = 1;

                    _this.SmallEgg3_Glow_six.frame = 0;

                    _this.SmallEgg4_Glow_six.frame=1;
                    _this.SmallEgg4_Glow_six.visible=true;

                }
                _this.addEgg++;
            } 
            else if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(21)) && (_this.SmallEggGrp.getChildAt(21).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(22)) && (_this.SmallEggGrp.getChildAt(22).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(23)) && (_this.SmallEggGrp.getChildAt(23).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(24)) && (_this.SmallEggGrp.getChildAt(24).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(25)) && (_this.SmallEggGrp.getChildAt(25).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(26)) && (_this.SmallEggGrp.getChildAt(26).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(27)) && (_this.SmallEggGrp.getChildAt(27).visible == false)))&&
                _this.addEgg == 3
            )
            { 
                console.log("target.name hittttttttttttttt:"+target.name);
                if(_this.randomno == 7)
                {
                    _this.SmallEggGrp.getChildAt(21).visible = true;
                    _this.SmallEggGrp.getChildAt(22).visible = true;
                    _this.SmallEggGrp.getChildAt(23).visible = true;
                    _this.SmallEggGrp.getChildAt(24).visible = true;
                    _this.SmallEggGrp.getChildAt(25).visible = true;
                    _this.SmallEggGrp.getChildAt(26).visible = true;
                    _this.SmallEggGrp.getChildAt(27).visible = true;

                    _this.FirstNumbers4.frame = _this.randomno-1;
                    _this.FirstNumbers4.visible=true;
                    _this.NumberGrp2.getChildAt(3).visible = true;
                    _this.NumberGrp3.getChildAt(3).visible = true;

                    _this.SmallEgg22.frame = 1;
                    _this.SmallEgg23.frame = 1;
                    _this.SmallEgg24.frame = 1;
                    _this.SmallEgg25.frame = 1;
                    _this.SmallEgg26.frame = 1;
                    _this.SmallEgg27.frame = 1;
                    _this.SmallEgg28.frame = 1;

                    _this.SmallEgg4_Glow_seven.frame = 0;

                    _this.SmallEgg5_Glow_seven.frame=1;
                    _this.SmallEgg5_Glow_seven.visible=true;
                }
                else //if(_this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(21).visible = true;
                    _this.SmallEggGrp.getChildAt(22).visible = true;
                    _this.SmallEggGrp.getChildAt(23).visible = true;
                    _this.SmallEggGrp.getChildAt(24).visible = true;
                    _this.SmallEggGrp.getChildAt(25).visible = true;
                    _this.SmallEggGrp.getChildAt(26).visible = true;
                    //_this.SmallEggGrp.getChildAt(27).visible = true;

                    _this.FirstNumbers4.frame = _this.randomno-1;
                    _this.FirstNumbers4.visible=true;
                    _this.NumberGrp2.getChildAt(3).visible = true;
                    _this.NumberGrp3.getChildAt(3).visible = true;

                    _this.SmallEgg22.frame = 1;
                    _this.SmallEgg23.frame = 1;
                    _this.SmallEgg24.frame = 1;
                    _this.SmallEgg25.frame = 1;
                    _this.SmallEgg26.frame = 1;
                    _this.SmallEgg27.frame = 1;
                    //_this.SmallEgg28.frame = 1;

                    _this.SmallEgg4_Glow_six.frame = 0;

                    _this.SmallEgg5_Glow_six.frame=1;
                    _this.SmallEgg5_Glow_six.visible=true;
                }

                _this.addEgg++;
            }
            else if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(28)) && (_this.SmallEggGrp.getChildAt(28).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(29)) && (_this.SmallEggGrp.getChildAt(29).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(30)) && (_this.SmallEggGrp.getChildAt(30).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(31)) && (_this.SmallEggGrp.getChildAt(31).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(32)) && (_this.SmallEggGrp.getChildAt(32).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(33)) && (_this.SmallEggGrp.getChildAt(33).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(34)) && (_this.SmallEggGrp.getChildAt(34).visible == false)))&&
                _this.addEgg == 4
            )
            { 
                console.log("target.name hittttttttttttttt:"+target.name);
                if(_this.randomno==7)
                {
                    _this.SmallEggGrp.getChildAt(28).visible = true;
                    _this.SmallEggGrp.getChildAt(29).visible = true;
                    _this.SmallEggGrp.getChildAt(30).visible = true;
                    _this.SmallEggGrp.getChildAt(31).visible = true;
                    _this.SmallEggGrp.getChildAt(32).visible = true;
                    _this.SmallEggGrp.getChildAt(33).visible = true;
                    _this.SmallEggGrp.getChildAt(34).visible = true;

                    _this.FirstNumbers5.frame = _this.randomno-1;
                    _this.FirstNumbers5.visible=true;
                    _this.NumberGrp2.getChildAt(4).visible = true;
                    _this.NumberGrp3.getChildAt(4).visible = true;

                    _this.SmallEgg29.frame = 1;
                    _this.SmallEgg30.frame = 1;
                    _this.SmallEgg31.frame = 1;
                    _this.SmallEgg32.frame = 1;
                    _this.SmallEgg33.frame = 1;
                    _this.SmallEgg34.frame = 1;
                    _this.SmallEgg35.frame = 1;

                    _this.SmallEgg5_Glow_seven.frame = 0;
                    _this.SmallEgg6_Glow_seven.frame=1;
                    _this.SmallEgg6_Glow_seven.visible=true;
                }
                else //if(_this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(28).visible = true;
                    _this.SmallEggGrp.getChildAt(29).visible = true;
                    _this.SmallEggGrp.getChildAt(30).visible = true;
                    _this.SmallEggGrp.getChildAt(31).visible = true;
                    _this.SmallEggGrp.getChildAt(32).visible = true;
                    _this.SmallEggGrp.getChildAt(33).visible = true;
                    //_this.SmallEggGrp.getChildAt(34).visible = true;

                    _this.FirstNumbers5.frame = _this.randomno-1;
                    _this.FirstNumbers5.visible=true;
                    _this.NumberGrp2.getChildAt(4).visible = true;
                    _this.NumberGrp3.getChildAt(4).visible = true;

                    _this.SmallEgg29.frame = 1;
                    _this.SmallEgg30.frame = 1;
                    _this.SmallEgg31.frame = 1;
                    _this.SmallEgg32.frame = 1;
                    _this.SmallEgg33.frame = 1;
                    _this.SmallEgg34.frame = 1;
                    //_this.SmallEgg35.frame = 1;

                    _this.SmallEgg5_Glow_six.frame = 0;

                    _this.SmallEgg6_Glow_six.frame=1;
                    _this.SmallEgg6_Glow_six.visible=true;
                }

                _this.addEgg++;
            }
            else if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(35)) && (_this.SmallEggGrp.getChildAt(35).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(36)) && (_this.SmallEggGrp.getChildAt(36).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(37)) && (_this.SmallEggGrp.getChildAt(37).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(38)) && (_this.SmallEggGrp.getChildAt(38).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(39)) && (_this.SmallEggGrp.getChildAt(39).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(40)) && (_this.SmallEggGrp.getChildAt(40).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(41)) && (_this.SmallEggGrp.getChildAt(41).visible == false)))&&
                _this.addEgg == 5
            )
            { 
                console.log("target.name hittttttttttttttt:"+target.name);
                if(_this.randomno==7)
                {
                    _this.SmallEggGrp.getChildAt(35).visible = true;
                    _this.SmallEggGrp.getChildAt(36).visible = true;
                    _this.SmallEggGrp.getChildAt(37).visible = true;
                    _this.SmallEggGrp.getChildAt(38).visible = true;
                    _this.SmallEggGrp.getChildAt(39).visible = true;
                    _this.SmallEggGrp.getChildAt(40).visible = true;
                    _this.SmallEggGrp.getChildAt(41).visible = true;

                    _this.FirstNumbers6.frame = _this.randomno-1;
                    _this.FirstNumbers6.visible=true;

                    _this.NumberGrp2.getChildAt(5).visible = true;
                    _this.NumberGrp3.getChildAt(5).visible = true;

                    _this.SmallEgg36.frame = 1;
                    _this.SmallEgg37.frame = 1;
                    _this.SmallEgg38.frame = 1;
                    _this.SmallEgg39.frame = 1;
                    _this.SmallEgg40.frame = 1;
                    _this.SmallEgg41.frame = 1;
                    _this.SmallEgg42.frame = 1;

                    _this.SmallEgg6_Glow_seven.frame = 0;

                    _this.SmallEgg7_Glow_seven.frame = 1;
                    _this.SmallEgg7_Glow_seven.visible=true;

                }
                else// if(_this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(35).visible = true;
                    _this.SmallEggGrp.getChildAt(36).visible = true;
                    _this.SmallEggGrp.getChildAt(37).visible = true;
                    _this.SmallEggGrp.getChildAt(38).visible = true;
                    _this.SmallEggGrp.getChildAt(39).visible = true;
                    _this.SmallEggGrp.getChildAt(40).visible = true;
                    //_this.SmallEggGrp.getChildAt(41).visible = true;

                    _this.FirstNumbers6.frame = _this.randomno-1;
                    _this.FirstNumbers6.visible=true;

                    _this.NumberGrp2.getChildAt(5).visible = true;
                    _this.NumberGrp3.getChildAt(5).visible = true;

                    _this.SmallEgg36.frame = 1;
                    _this.SmallEgg37.frame = 1;
                    _this.SmallEgg38.frame = 1;
                    _this.SmallEgg39.frame = 1;
                    _this.SmallEgg40.frame = 1;
                    _this.SmallEgg41.frame = 1;
                    //_this.SmallEgg42.frame = 1;

                    _this.SmallEgg6_Glow_six.frame = 0;

                    _this.SmallEgg7_Glow_six.frame=1;
                    _this.SmallEgg7_Glow_six.visible=true;
                }

                _this.addEgg++;
            }
            else if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(42)) && (_this.SmallEggGrp.getChildAt(42).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(43)) && (_this.SmallEggGrp.getChildAt(43).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(44)) && (_this.SmallEggGrp.getChildAt(44).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(45)) && (_this.SmallEggGrp.getChildAt(45).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(46)) && (_this.SmallEggGrp.getChildAt(46).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(47)) && (_this.SmallEggGrp.getChildAt(47).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(48)) && (_this.SmallEggGrp.getChildAt(48).visible == false)))&&
                _this.addEgg == 6
            )
            { 
                console.log("target.name hittttttttttttttt:"+target.name);
                if(_this.randomno==7)
                {
                    _this.SmallEggGrp.getChildAt(42).visible = true;
                    _this.SmallEggGrp.getChildAt(43).visible = true;
                    _this.SmallEggGrp.getChildAt(44).visible = true;
                    _this.SmallEggGrp.getChildAt(45).visible = true;
                    _this.SmallEggGrp.getChildAt(46).visible = true;
                    _this.SmallEggGrp.getChildAt(47).visible = true;
                    _this.SmallEggGrp.getChildAt(48).visible = true;

                    _this.FirstNumbers7.frame = _this.randomno-1;
                    _this.FirstNumbers7.visible=true;

                    _this.NumberGrp2.getChildAt(6).visible = true;
                    _this.NumberGrp3.getChildAt(6).visible = true;

                    _this.SmallEgg43.frame = 1;
                    _this.SmallEgg44.frame = 1;
                    _this.SmallEgg45.frame = 1;
                    _this.SmallEgg46.frame = 1;
                    _this.SmallEgg47.frame = 1;
                    _this.SmallEgg48.frame = 1;
                    _this.SmallEgg49.frame = 1;

                    _this.SmallEgg7_Glow_seven.frame = 0;

                    _this.SmallEgg8_Glow_seven.frame=1;
                    _this.SmallEgg8_Glow_seven.visible=true;
                }
                else //if(_this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(42).visible = true;
                    _this.SmallEggGrp.getChildAt(43).visible = true;
                    _this.SmallEggGrp.getChildAt(44).visible = true;
                    _this.SmallEggGrp.getChildAt(45).visible = true;
                    _this.SmallEggGrp.getChildAt(46).visible = true;
                    _this.SmallEggGrp.getChildAt(47).visible = true;
                    //_this.SmallEggGrp.getChildAt(48).visible = true;

                    _this.FirstNumbers7.frame = _this.randomno-1;
                    _this.FirstNumbers7.visible=true;

                    _this.NumberGrp2.getChildAt(6).visible = true;
                    _this.NumberGrp3.getChildAt(6).visible = true;

                    _this.SmallEgg43.frame = 1;
                    _this.SmallEgg44.frame = 1;
                    _this.SmallEgg45.frame = 1;
                    _this.SmallEgg46.frame = 1;
                    _this.SmallEgg47.frame = 1;
                    _this.SmallEgg48.frame = 1;
                    //_this.SmallEgg49.frame = 1;

                    _this.SmallEgg7_Glow_six.frame = 0;

                    _this.SmallEgg8_Glow_six.frame=1;
                    _this.SmallEgg8_Glow_six.visible=true;
                }

                _this.addEgg++;
            }
            else if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(49)) && (_this.SmallEggGrp.getChildAt(49).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(50)) && (_this.SmallEggGrp.getChildAt(50).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(51)) && (_this.SmallEggGrp.getChildAt(51).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(52)) && (_this.SmallEggGrp.getChildAt(52).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(53)) && (_this.SmallEggGrp.getChildAt(53).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(54)) && (_this.SmallEggGrp.getChildAt(54).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(55)) && (_this.SmallEggGrp.getChildAt(55).visible == false)))&&
                _this.addEgg == 7
            )
            { 
                console.log("target.name hittttttttttttttt:"+target.name);

                if(_this.randomno==7)
                {
                    _this.SmallEggGrp.getChildAt(49).visible = true;
                    _this.SmallEggGrp.getChildAt(50).visible = true;
                    _this.SmallEggGrp.getChildAt(51).visible = true;
                    _this.SmallEggGrp.getChildAt(52).visible = true;
                    _this.SmallEggGrp.getChildAt(53).visible = true;
                    _this.SmallEggGrp.getChildAt(54).visible = true;
                    _this.SmallEggGrp.getChildAt(55).visible = true;

                    _this.FirstNumbers8.frame = _this.randomno-1;
                    _this.FirstNumbers8.visible=true;

                    _this.NumberGrp2.getChildAt(7).visible = true;
                    _this.NumberGrp3.getChildAt(7).visible = true;

                    _this.SmallEgg50.frame = 1;
                    _this.SmallEgg51.frame = 1;
                    _this.SmallEgg52.frame = 1;
                    _this.SmallEgg53.frame = 1;
                    _this.SmallEgg54.frame = 1;
                    _this.SmallEgg55.frame = 1;
                    _this.SmallEgg56.frame = 1;

                    _this.SmallEgg8_Glow_seven.frame = 0;

                    _this.SmallEgg9_Glow_seven.frame=1;
                    _this.SmallEgg9_Glow_seven.visible=true;
                }
                else //if(_this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(49).visible = true;
                    _this.SmallEggGrp.getChildAt(50).visible = true;
                    _this.SmallEggGrp.getChildAt(51).visible = true;
                    _this.SmallEggGrp.getChildAt(52).visible = true;
                    _this.SmallEggGrp.getChildAt(53).visible = true;
                    _this.SmallEggGrp.getChildAt(54).visible = true;
                    //_this.SmallEggGrp.getChildAt(55).visible = true;

                    _this.FirstNumbers8.frame = _this.randomno-1;
                    _this.FirstNumbers8.visible=true;

                    _this.NumberGrp2.getChildAt(7).visible = true;
                    _this.NumberGrp3.getChildAt(7).visible = true;


                    _this.SmallEgg50.frame = 1;
                    _this.SmallEgg51.frame = 1;
                    _this.SmallEgg52.frame = 1;
                    _this.SmallEgg53.frame = 1;
                    _this.SmallEgg54.frame = 1;
                    _this.SmallEgg55.frame = 1;
                    //_this.SmallEgg56.frame = 1;

                    _this.SmallEgg8_Glow_six.frame = 0;
                    _this.SmallEgg9_Glow_six.frame=1;
                    _this.SmallEgg9_Glow_six.visible=true;
                }

                _this.addEgg++;
            }
            else if(
                ((_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(56)) && (_this.SmallEggGrp.getChildAt(56).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(57)) && (_this.SmallEggGrp.getChildAt(57).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(58)) && (_this.SmallEggGrp.getChildAt(58).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(59)) && (_this.SmallEggGrp.getChildAt(59).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(60)) && (_this.SmallEggGrp.getChildAt(60).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(61)) && (_this.SmallEggGrp.getChildAt(61).visible == false))||
                 (_this.checkOverlap(target,_this.SmallEggGrp.getChildAt(62)) && (_this.SmallEggGrp.getChildAt(62).visible == false)))&&
                _this.addEgg == 8
            )
            { 
                console.log("target.name hittttttttttttttt:"+target.name);

                if(_this.randomno==7)
                {
                    _this.SmallEggGrp.getChildAt(56).visible = true;
                    _this.SmallEggGrp.getChildAt(57).visible = true;
                    _this.SmallEggGrp.getChildAt(58).visible = true;
                    _this.SmallEggGrp.getChildAt(59).visible = true;
                    _this.SmallEggGrp.getChildAt(60).visible = true;
                    _this.SmallEggGrp.getChildAt(61).visible = true;
                    _this.SmallEggGrp.getChildAt(62).visible = true;

                    _this.FirstNumbers9.frame = _this.randomno-1;
                    _this.FirstNumbers9.visible=true;

                    _this.NumberGrp2.getChildAt(8).visible = true;
                    _this.NumberGrp3.getChildAt(8).visible = true;

                    _this.SmallEgg57.frame = 1;
                    _this.SmallEgg58.frame = 1;
                    _this.SmallEgg59.frame = 1;
                    _this.SmallEgg60.frame = 1;
                    _this.SmallEgg61.frame = 1;
                    _this.SmallEgg62.frame = 1;
                    _this.SmallEgg63.frame = 1;

                    //_this.SmallEgg9_Glow_seven.frame = 0;

                    //_this.SmallEgg9_Glow.seven.frame=1;

                }
                else //if(_this.randomno==4)
                {
                    _this.SmallEggGrp.getChildAt(56).visible = true;
                    _this.SmallEggGrp.getChildAt(57).visible = true;
                    _this.SmallEggGrp.getChildAt(58).visible = true;
                    _this.SmallEggGrp.getChildAt(59).visible = true;
                    _this.SmallEggGrp.getChildAt(60).visible = true;
                    _this.SmallEggGrp.getChildAt(61).visible = true;
                    //_this.SmallEggGrp.getChildAt(62).visible = true;

                    _this.FirstNumbers9.frame = _this.randomno-1;
                    _this.FirstNumbers9.visible=true;

                    _this.NumberGrp2.getChildAt(8).visible = true;
                    _this.NumberGrp3.getChildAt(8).visible = true;

                    _this.SmallEgg57.frame = 1;
                    _this.SmallEgg58.frame = 1;
                    _this.SmallEgg59.frame = 1;
                    _this.SmallEgg60.frame = 1;
                    _this.SmallEgg61.frame = 1;
                    _this.SmallEgg62.frame = 1;
                    //_this.SmallEgg63.frame = 1;

                    //_this.SmallEgg9_Glow_six.frame = 0;

                    //_this.SmallEgg9_Glow_six.frame=1;

                }

                _this.addEgg++;
            }

            target.events.onDragStop.removeAll(); 
            target.x = _this.vx;   
            target.y = _this.vy;
            console.log("SecondNumbers and addEgg ::"+_this.SecondNumbers.frame,_this.addEgg);

            if(_this.SecondNumbers.frame == _this.addEgg-1)
            {
                _this.addEgg = -1;

                commonNavBar.playEggCrackSound();

                _this.SmallEgg1_Glow_six.frame = 0;
                _this.SmallEgg1_Glow_seven.frame = 0;

                _this.SmallEgg2_Glow_six.frame= 0;
                _this.SmallEgg2_Glow_seven.frame  = 0;

                _this.SmallEgg3_Glow_six.frame = 0;
                _this.SmallEgg3_Glow_seven.frame = 0;


                _this.SmallEgg4_Glow_six.frame = 0;
                _this.SmallEgg4_Glow_seven.frame  = 0;

                _this.SmallEgg5_Glow_six.frame= 0;
                _this.SmallEgg5_Glow_seven.frame  = 0;

                _this.SmallEgg6_Glow_six.frame = 0;
                _this.SmallEgg6_Glow_seven.frame = 0;

                _this.SmallEgg7_Glow_six.frame= 0;
                _this.SmallEgg7_Glow_seven.frame  = 0;

                _this.SmallEgg8_Glow_six.frame = 0;
                _this.SmallEgg8_Glow_seven.frame  = 0;

                _this.SmallEgg9_Glow_six.frame = 0;
                _this.SmallEgg9_Glow_seven.frame  = 0;

            }

        },_this);

    },

    gotoFirstQuestion:function()
    {  
        console.log("gotoFirstQuestion");
        
        commonNavBar.enableHintIcon();
        
        _this.questionNo = 1;

        _this.min = 6;
        _this.max = 7;

        _this.randomno = Math.floor(Math.random()*(_this.max-_this.min+1)+_this.min);

        console.log("randomno length :"+_this.randomno);

        _this.addNumberPad();

        //egg box
        _this.Eggbox= _this.add.sprite(_this.world.centerX-150,_this.world.centerY-10,'Unity12_3_2Egg_box');
        _this.Eggbox.anchor.setTo(0.5);
        _this.Eggbox.scale.setTo(1,1);

        _this.Eggbox.visible = false;

        _this.FirstNumbers1 = _this.add.sprite(_this.world.centerX-420,_this.world.centerY-173,'Unity12_3_2greenNumbers');
        _this.FirstNumbers1.name="FirstNumbers";
        _this.FirstNumbers1.anchor.setTo(0.5);
        _this.FirstNumbers1.scale.setTo(0.7);
        _this.FirstNumbers1.visible = false;
        //_this.FirstNumbers1.frame=0;

        // _this.FirstNumbers1.frame = _this.framesChange[0];

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers1 = this.add.sprite(_this.world.centerX-370,_this.world.centerY-173,'Unity12_3_2greenNumbers');
        _this.SecondNumbers1.name="SecondNumbers";
        _this.SecondNumbers1.scale.setTo(0.7);
        _this.SecondNumbers1.anchor.setTo(0.5);
        _this.SecondNumbers1.frame=0;
        _this.SecondNumbers1.visible=false;

        _this.Multiplicationsign1=_this.add.sprite(_this.world.centerX-407,_this.world.centerY-195,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign1.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign1.scale.setTo(0.7);
        _this.Multiplicationsign1.visible=false;

        _this.FirstNumbers2 = _this.add.sprite(_this.world.centerX-420,_this.world.centerY-135,'Unity12_3_2greenNumbers');
        _this.FirstNumbers2.name="FirstNumbers";
        _this.FirstNumbers2.anchor.setTo(0.5);
        _this.FirstNumbers2.scale.setTo(0.7);
        _this.FirstNumbers2.visible=false;

        //_this.FirstNumbers2.frame = 1;

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers2 = this.add.sprite(_this.world.centerX-370,_this.world.centerY-135,'Unity12_3_2greenNumbers');
        _this.SecondNumbers2.name="SecondNumbers";
        _this.SecondNumbers2.scale.setTo(0.7);
        _this.SecondNumbers2.anchor.setTo(0.5);
        _this.SecondNumbers2.frame=1;
        _this.SecondNumbers2.visible=false;

        _this.Multiplicationsign2=_this.add.sprite(_this.world.centerX-407,_this.world.centerY-155,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign2.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign2.scale.setTo(0.7);
        _this.Multiplicationsign2.visible=false;

        _this.FirstNumbers3 = _this.add.sprite(_this.world.centerX-420,_this.world.centerY-95,'Unity12_3_2greenNumbers');
        _this.FirstNumbers3.name="FirstNumbers";
        _this.FirstNumbers3.anchor.setTo(0.5);
        _this.FirstNumbers3.scale.setTo(0.7);
        _this.FirstNumbers3.visible=false;

        //_this.FirstNumbers2.frame = 1;

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers3 = this.add.sprite(_this.world.centerX-370,_this.world.centerY-95,'Unity12_3_2greenNumbers');
        _this.SecondNumbers3.name="SecondNumbers";
        _this.SecondNumbers3.scale.setTo(0.7);
        _this.SecondNumbers3.anchor.setTo(0.5);
        _this.SecondNumbers3.frame=2;
        _this.SecondNumbers3.visible=false;

        _this.Multiplicationsign3=_this.add.sprite(_this.world.centerX-407,_this.world.centerY-115,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign3.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign3.scale.setTo(0.7);
        _this.Multiplicationsign3.visible=false;

        _this.FirstNumbers4 = _this.add.sprite(_this.world.centerX-420,_this.world.centerY-60,'Unity12_3_2greenNumbers');
        _this.FirstNumbers4.name="FirstNumbers";
        _this.FirstNumbers4.anchor.setTo(0.5);
        _this.FirstNumbers4.scale.setTo(0.7);
        _this.FirstNumbers4.visible=false;

        //_this.FirstNumbers2.frame = 1;

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers4 = this.add.sprite(_this.world.centerX-370,_this.world.centerY-60,'Unity12_3_2greenNumbers');
        _this.SecondNumbers4.name="SecondNumbers";
        _this.SecondNumbers4.scale.setTo(0.7);
        _this.SecondNumbers4.anchor.setTo(0.5);
        _this.SecondNumbers4.frame=3;
        _this.SecondNumbers4.visible=false;

        _this.Multiplicationsign4=_this.add.sprite(_this.world.centerX-407,_this.world.centerY-80,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign4.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign4.scale.setTo(0.7);
        _this.Multiplicationsign4.visible=false;

        _this.FirstNumbers5 = _this.add.sprite(_this.world.centerX-420,_this.world.centerY-23,'Unity12_3_2greenNumbers');
        _this.FirstNumbers5.name="FirstNumbers";
        _this.FirstNumbers5.anchor.setTo(0.5);
        _this.FirstNumbers5.scale.setTo(0.7);
        _this.FirstNumbers5.visible=false;

        //_this.FirstNumbers2.frame = 1;

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers5 = this.add.sprite(_this.world.centerX-370,_this.world.centerY-23,'Unity12_3_2greenNumbers');
        _this.SecondNumbers5.name="SecondNumbers";
        _this.SecondNumbers5.scale.setTo(0.7);
        _this.SecondNumbers5.anchor.setTo(0.5);
        _this.SecondNumbers5.frame=4;
        _this.SecondNumbers5.visible=false;

        _this.Multiplicationsign5=_this.add.sprite(_this.world.centerX-407,_this.world.centerY-45,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign5.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign5.scale.setTo(0.7);
        _this.Multiplicationsign5.visible=false;


        _this.FirstNumbers6= _this.add.sprite(_this.world.centerX-420,_this.world.centerY+15,'Unity12_3_2greenNumbers');
        _this.FirstNumbers6.name="FirstNumbers";
        _this.FirstNumbers6.anchor.setTo(0.5);
        _this.FirstNumbers6.scale.setTo(0.7);
        _this.FirstNumbers6.visible=false;

        //_this.FirstNumbers2.frame = 1;

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers6 = this.add.sprite(_this.world.centerX-370,_this.world.centerY+15,'Unity12_3_2greenNumbers');
        _this.SecondNumbers6.name="SecondNumbers";
        _this.SecondNumbers6.scale.setTo(0.7);
        _this.SecondNumbers6.anchor.setTo(0.5);
        _this.SecondNumbers6.frame=5;
        _this.SecondNumbers6.visible=false;

        _this.Multiplicationsign6=_this.add.sprite(_this.world.centerX-407,_this.world.centerY-5,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign6.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign6.scale.setTo(0.7);
        _this.Multiplicationsign6.visible=false;

        _this.FirstNumbers7= _this.add.sprite(_this.world.centerX-420,_this.world.centerY+53,'Unity12_3_2greenNumbers');
        _this.FirstNumbers7.name="FirstNumbers";
        _this.FirstNumbers7.anchor.setTo(0.5);
        _this.FirstNumbers7.scale.setTo(0.7);
        _this.FirstNumbers7.visible=false;

        //_this.FirstNumbers2.frame = 1;

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers7 = this.add.sprite(_this.world.centerX-370,_this.world.centerY+53,'Unity12_3_2greenNumbers');
        _this.SecondNumbers7.name="SecondNumbers";
        _this.SecondNumbers7.scale.setTo(0.7);
        _this.SecondNumbers7.anchor.setTo(0.5);
        _this.SecondNumbers7.frame=6;
        _this.SecondNumbers7.visible=false;

        _this.Multiplicationsign7=_this.add.sprite(_this.world.centerX-407,_this.world.centerY+33,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign7.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign7.scale.setTo(0.7);
        _this.Multiplicationsign7.visible=false;


        _this.FirstNumbers8= _this.add.sprite(_this.world.centerX-420,_this.world.centerY+93,'Unity12_3_2greenNumbers');
        _this.FirstNumbers8.name="FirstNumbers";
        _this.FirstNumbers8.anchor.setTo(0.5);
        _this.FirstNumbers8.scale.setTo(0.7);
        _this.FirstNumbers8.visible=false;

        //_this.FirstNumbers2.frame = 1;

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers8 = _this.add.sprite(_this.world.centerX-370,_this.world.centerY+93,'Unity12_3_2greenNumbers');
        _this.SecondNumbers8.name="SecondNumbers";
        _this.SecondNumbers8.scale.setTo(0.7);
        _this.SecondNumbers8.anchor.setTo(0.5);
        _this.SecondNumbers8.frame=7;
        _this.SecondNumbers8.visible=false;

        _this.Multiplicationsign8=_this.add.sprite(_this.world.centerX-407,_this.world.centerY+70,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign8.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign8.scale.setTo(0.7);
        _this.Multiplicationsign8.visible=false;

        _this.FirstNumbers9= _this.add.sprite(_this.world.centerX-420,_this.world.centerY+130,'Unity12_3_2greenNumbers');
        _this.FirstNumbers9.name="FirstNumbers";
        _this.FirstNumbers9.anchor.setTo(0.5);
        _this.FirstNumbers9.scale.setTo(0.7);
        _this.FirstNumbers9.visible=false;

        //_this.FirstNumbers2.frame = 1;

        // _this.framesChange1 = [1,2,3,4,5,7,8,9];
        //_this.framesChange1 = this.shuffle(_this.framesChange1);

        _this.SecondNumbers9 = _this.add.sprite(_this.world.centerX-370,_this.world.centerY+130,'Unity12_3_2greenNumbers');
        _this.SecondNumbers9.name="SecondNumbers";
        _this.SecondNumbers9.scale.setTo(0.7);
        _this.SecondNumbers9.anchor.setTo(0.5);
        _this.SecondNumbers9.frame=8;
        _this.SecondNumbers9.visible=false;

        _this.Multiplicationsign9=_this.add.sprite(_this.world.centerX-407,_this.world.centerY+110,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign9.name="Unity12_1Multiplicationsign";
        _this.Multiplicationsign9.scale.setTo(0.7);
        _this.Multiplicationsign9.visible=false;

        //small egg behind egg box 
        _this.SmallEgg1 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY-180,'Unity12_3_2SmallEgg');
        _this.SmallEgg1.anchor.setTo(0.5);
        _this.SmallEgg1.scale.setTo(1,1);
        _this.SmallEgg1.frame = 0;
        _this.SmallEgg1.name = "SmallEgg1";
        _this.SmallEgg1.visible=false;

        // glow

        _this.SmallEgg1_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY-180,'Unity12_3_2SixGlow');
        _this.SmallEgg1_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg1_Glow_six.scale.setTo(1,1);
        _this.SmallEgg1_Glow_six.frame = 1;
        _this.SmallEgg1_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg1_Glow_six.visible=false;

        _this.SmallEgg1_Glow_seven = _this.add.sprite(_this.world.centerX-204,_this.world.centerY-180,'Unity12_3_2SevenGlow');
        _this.SmallEgg1_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg1_Glow_seven.scale.setTo(1,1);
        _this.SmallEgg1_Glow_seven.frame = 1;
        _this.SmallEgg1_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg1_Glow_seven.visible=false;


        /******************************/

        _this.SmallEgg2 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-180,'Unity12_3_2SmallEgg');
        _this.SmallEgg2.anchor.setTo(0.5);
        _this.SmallEgg2.scale.setTo(1,1);
        _this.SmallEgg2.frame = 0;
        _this.SmallEgg2.name = "SmallEgg2";
        _this.SmallEgg2.visible=false;

        _this.SmallEgg3 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY-180,'Unity12_3_2SmallEgg');
        _this.SmallEgg3.anchor.setTo(0.5);
        _this.SmallEgg3.scale.setTo(1,1);
        _this.SmallEgg3.frame = 0;
        _this.SmallEgg3.name = "SmallEgg3";
        _this.SmallEgg3.visible=false;

        _this.SmallEgg4 =_this.add.sprite(_this.world.centerX-203,_this.world.centerY-180,'Unity12_3_2SmallEgg');
        _this.SmallEgg4.anchor.setTo(0.5);
        _this.SmallEgg4.scale.setTo(1,1);
        _this.SmallEgg4.frame = 0;
        _this.SmallEgg4.name = "SmallEgg4";
        _this.SmallEgg4.visible=false;

        _this.SmallEgg5 =_this.add.sprite(_this.world.centerX-165,_this.world.centerY-180,'Unity12_3_2SmallEgg');
        _this.SmallEgg5.anchor.setTo(0.5);
        _this.SmallEgg5.scale.setTo(1,1);
        _this.SmallEgg5.frame = 0;
        _this.SmallEgg5.name = "SmallEgg5";
        _this.SmallEgg5.visible=false;

        _this.SmallEgg6 =_this.add.sprite(_this.world.centerX-128,_this.world.centerY-180,'Unity12_3_2SmallEgg');
        _this.SmallEgg6.anchor.setTo(0.5);
        _this.SmallEgg6.scale.setTo(1,1);
        _this.SmallEgg6.frame = 0;
        _this.SmallEgg6.name = "SmallEgg5";
        _this.SmallEgg6.visible=false;

        _this.SmallEgg7 =_this.add.sprite(_this.world.centerX-90,_this.world.centerY-180,'Unity12_3_2SmallEgg');
        _this.SmallEgg7.anchor.setTo(0.5);
        _this.SmallEgg7.scale.setTo(1,1);
        _this.SmallEgg7.frame = 0;
        _this.SmallEgg7.name = "SmallEgg5";
        _this.SmallEgg7.visible=false;


        /*******************************************/

        _this.SmallEgg8 =_this.add.sprite(_this.world.centerX-318,_this.world.centerY-142,'Unity12_3_2SmallEgg');
        _this.SmallEgg8.anchor.setTo(0.5);
        _this.SmallEgg8.scale.setTo(1,1);
        _this.SmallEgg8.frame = 0;
        _this.SmallEgg8.name = "SmallEgg6";
        _this.SmallEgg8.visible=false;

        //glow

        _this.SmallEgg2_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY-142,'Unity12_3_2SixGlow');
        _this.SmallEgg2_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg2_Glow_six.scale.setTo(1,1);
        //_this.SmallEgg2_Glow_six.frame = 1;
        _this.SmallEgg2_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg2_Glow_six.visible=false;

        _this.SmallEgg2_Glow_seven = _this.add.sprite(_this.world.centerX-204,_this.world.centerY-142,'Unity12_3_2SevenGlow');
        _this.SmallEgg2_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg2_Glow_seven.scale.setTo(1,1);
        //_this.SmallEgg2_Glow_seven.frame = 1;
        _this.SmallEgg2_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg2_Glow_seven.visible=false;

        _this.SmallEgg9 =_this.add.sprite(_this.world.centerX-280,_this.world.centerY-142,'Unity12_3_2SmallEgg');
        _this.SmallEgg9.anchor.setTo(0.5);
        _this.SmallEgg9.scale.setTo(1,1);
        _this.SmallEgg9.frame = 0;
        _this.SmallEgg9.name = "SmallEgg7";
        _this.SmallEgg9.visible=false;

        _this.SmallEgg10 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY-142,'Unity12_3_2SmallEgg');
        _this.SmallEgg10.anchor.setTo(0.5);
        _this.SmallEgg10.scale.setTo(1,1);
        _this.SmallEgg10.frame = 0;
        _this.SmallEgg10.name = "SmallEgg8";
        _this.SmallEgg10.visible=false;

        _this.SmallEgg11 = _this.add.sprite(_this.world.centerX-203,_this.world.centerY-142,'Unity12_3_2SmallEgg');
        _this.SmallEgg11.anchor.setTo(0.5);
        _this.SmallEgg11.scale.setTo(1,1);
        _this.SmallEgg11.frame = 0;
        _this.SmallEgg11.name = "SmallEgg9";
        _this.SmallEgg11.visible=false;

        _this.SmallEgg12 = _this.add.sprite(_this.world.centerX-165,_this.world.centerY-142,'Unity12_3_2SmallEgg');
        _this.SmallEgg12.anchor.setTo(0.5);
        _this.SmallEgg12.scale.setTo(1,1);
        _this.SmallEgg12.frame = 0;
        _this.SmallEgg12.name = "SmallEgg10";
        _this.SmallEgg12.visible=false;

        _this.SmallEgg13 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY-142,'Unity12_3_2SmallEgg');
        _this.SmallEgg13.anchor.setTo(0.5);
        _this.SmallEgg13.scale.setTo(1,1);
        _this.SmallEgg13.frame = 0;
        _this.SmallEgg13.name = "SmallEgg10";
        _this.SmallEgg13.visible=false;

        _this.SmallEgg14 = _this.add.sprite(_this.world.centerX-90,_this.world.centerY-142,'Unity12_3_2SmallEgg');
        _this.SmallEgg14.anchor.setTo(0.5);
        _this.SmallEgg14.scale.setTo(1,1);
        _this.SmallEgg14.frame = 0;
        _this.SmallEgg14.name = "SmallEgg10";
        _this.SmallEgg14.visible=false;

        /*****************************************/

        _this.SmallEgg15 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY-105,'Unity12_3_2SmallEgg');
        _this.SmallEgg15.anchor.setTo(0.5);
        _this.SmallEgg15.scale.setTo(1,1);
        _this.SmallEgg15.frame = 0;
        _this.SmallEgg15.name = "SmallEgg11";
        _this.SmallEgg15.visible=false;

        //glow

        _this.SmallEgg3_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY-105,'Unity12_3_2SixGlow');
        _this.SmallEgg3_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg3_Glow_six.scale.setTo(1,1);
        //_this.SmallEgg3_Glow_six.frame = 1;
        _this.SmallEgg3_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg3_Glow_six.visible=false;

        _this.SmallEgg3_Glow_seven = _this.add.sprite(_this.world.centerX-204,_this.world.centerY-105,'Unity12_3_2SevenGlow');
        _this.SmallEgg3_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg3_Glow_seven.scale.setTo(1,1);
        //_this.SmallEgg3_Glow_seven.frame = 1;
        _this.SmallEgg3_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg3_Glow_seven.visible=false;


        _this.SmallEgg16 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-105,'Unity12_3_2SmallEgg');
        _this.SmallEgg16.anchor.setTo(0.5);
        _this.SmallEgg16.scale.setTo(1,1);
        _this.SmallEgg16.frame = 0;
        _this.SmallEgg16.name = "SmallEgg12";
        _this.SmallEgg16.visible=false;

        _this.SmallEgg17 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY-105,'Unity12_3_2SmallEgg');
        _this.SmallEgg17.anchor.setTo(0.5);
        _this.SmallEgg17.scale.setTo(1,1);
        _this.SmallEgg17.frame = 0;
        _this.SmallEgg17.name = "SmallEgg13";
        _this.SmallEgg17.visible=false;

        _this.SmallEgg18 = _this.add.sprite(_this.world.centerX-203,_this.world.centerY-105,'Unity12_3_2SmallEgg');
        _this.SmallEgg18.anchor.setTo(0.5);
        _this.SmallEgg18.scale.setTo(1,1);
        _this.SmallEgg18.frame = 0;
        _this.SmallEgg18.name = "SmallEgg14";
        _this.SmallEgg18.visible=false;

        _this.SmallEgg19 = _this.add.sprite(_this.world.centerX-165,_this.world.centerY-105,'Unity12_3_2SmallEgg');
        _this.SmallEgg19.anchor.setTo(0.5);
        _this.SmallEgg19.scale.setTo(1,1);
        _this.SmallEgg19.frame = 0;
        _this.SmallEgg19.name = "SmallEgg15";
        _this.SmallEgg19.visible=false;

        _this.SmallEgg20 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY-105,'Unity12_3_2SmallEgg');
        _this.SmallEgg20.anchor.setTo(0.5);
        _this.SmallEgg20.scale.setTo(1,1);
        _this.SmallEgg20.frame = 0;
        _this.SmallEgg20.name = "SmallEgg15";
        _this.SmallEgg20.visible=false;

        _this.SmallEgg21 = _this.add.sprite(_this.world.centerX-90,_this.world.centerY-105,'Unity12_3_2SmallEgg');
        _this.SmallEgg21.anchor.setTo(0.5);
        _this.SmallEgg21.scale.setTo(1,1);
        _this.SmallEgg21.frame = 0;
        _this.SmallEgg21.name = "SmallEgg15";
        _this.SmallEgg21.visible=false;

        /****************************************/

        _this.SmallEgg22 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY-65,'Unity12_3_2SmallEgg');
        _this.SmallEgg22.anchor.setTo(0.5);
        _this.SmallEgg22.scale.setTo(1,1);
        _this.SmallEgg22.frame = 0;
        _this.SmallEgg22.visible=false;
        _this.SmallEgg22.name = "SmallEgg16";

        //glow
        _this.SmallEgg4_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY-65,'Unity12_3_2SixGlow');
        _this.SmallEgg4_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg4_Glow_six.scale.setTo(1,1);
        //_this.SmallEgg4_Glow_six.frame = 1;
        _this.SmallEgg4_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg4_Glow_six.visible=false;

        _this.SmallEgg4_Glow_seven = _this.add.sprite(_this.world.centerX-204,_this.world.centerY-65,'Unity12_3_2SevenGlow');
        _this.SmallEgg4_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg4_Glow_seven.scale.setTo(1,1);
        // _this.SmallEgg4_Glow_seven.frame = 1;
        _this.SmallEgg4_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg4_Glow_seven.visible=false;


        _this.SmallEgg23 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-65,'Unity12_3_2SmallEgg');
        _this.SmallEgg23.anchor.setTo(0.5);
        _this.SmallEgg23.scale.setTo(1,1);
        _this.SmallEgg23.frame = 0;
        _this.SmallEgg23.visible=false;
        _this.SmallEgg23.name = "SmallEgg17";

        _this.SmallEgg24 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY-65,'Unity12_3_2SmallEgg');
        _this.SmallEgg24.anchor.setTo(0.5);
        _this.SmallEgg24.scale.setTo(1,1);
        _this.SmallEgg24.frame = 0;
        _this.SmallEgg24.visible=false;
        _this.SmallEgg24.name = "SmallEgg18";

        _this.SmallEgg25 = _this.add.sprite(_this.world.centerX-203,_this.world.centerY-65,'Unity12_3_2SmallEgg');
        _this.SmallEgg25.anchor.setTo(0.5);
        _this.SmallEgg25.scale.setTo(1,1);
        _this.SmallEgg25.frame = 0;
        _this.SmallEgg25.visible=false;
        _this.SmallEgg25.name = "SmallEgg19";

        _this.SmallEgg26 = _this.add.sprite(_this.world.centerX-165,_this.world.centerY-65,'Unity12_3_2SmallEgg');
        _this.SmallEgg26.anchor.setTo(0.5);
        _this.SmallEgg26.scale.setTo(1,1);
        _this.SmallEgg26.frame = 0;
        _this.SmallEgg26.visible=false;
        _this.SmallEgg26.name = "SmallEgg20";

        _this.SmallEgg27 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY-65,'Unity12_3_2SmallEgg');
        _this.SmallEgg27.anchor.setTo(0.5);
        _this.SmallEgg27.scale.setTo(1,1);
        _this.SmallEgg27.frame = 0;
        _this.SmallEgg27.visible=false;
        _this.SmallEgg27.name = "SmallEgg20";

        _this.SmallEgg28 = _this.add.sprite(_this.world.centerX-90,_this.world.centerY-65,'Unity12_3_2SmallEgg');
        _this.SmallEgg28.anchor.setTo(0.5);
        _this.SmallEgg28.scale.setTo(1,1);
        _this.SmallEgg28.frame = 0;
        _this.SmallEgg28.visible=false;
        _this.SmallEgg28.name = "SmallEgg20";

        /******************************************/

        _this.SmallEgg29 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY-27,'Unity12_3_2SmallEgg');
        _this.SmallEgg29.anchor.setTo(0.5);
        _this.SmallEgg29.scale.setTo(1,1);
        _this.SmallEgg29.frame = 0;
        _this.SmallEgg29.visible=false;
        _this.SmallEgg29.name = "SmallEgg21";

        //glow

        _this.SmallEgg5_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY-27,'Unity12_3_2SixGlow');
        _this.SmallEgg5_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg5_Glow_six.scale.setTo(1,1);
        //_this.SmallEgg5_Glow_six.frame = 1;
        _this.SmallEgg5_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg5_Glow_six.visible=false;

        _this.SmallEgg5_Glow_seven = _this.add.sprite(_this.world.centerX-204,_this.world.centerY-27,'Unity12_3_2SevenGlow');
        _this.SmallEgg5_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg5_Glow_seven.scale.setTo(1,1);
        //_this.SmallEgg5_Glow_seven.frame = 1;
        _this.SmallEgg5_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg5_Glow_seven.visible=false;

        _this.SmallEgg30 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY-27,'Unity12_3_2SmallEgg');
        _this.SmallEgg30.anchor.setTo(0.5);
        _this.SmallEgg30.scale.setTo(1,1);
        _this.SmallEgg30.frame = 0;
        _this.SmallEgg30.visible=false;
        _this.SmallEgg30.name = "SmallEgg22";

        _this.SmallEgg31 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY-27,'Unity12_3_2SmallEgg');
        _this.SmallEgg31.anchor.setTo(0.5);
        _this.SmallEgg31.scale.setTo(1,1);
        _this.SmallEgg31.frame = 0;
        _this.SmallEgg31.visible=false;
        _this.SmallEgg31.name = "SmallEgg23";

        _this.SmallEgg32 = _this.add.sprite(_this.world.centerX-203,_this.world.centerY-27,'Unity12_3_2SmallEgg');
        _this.SmallEgg32.anchor.setTo(0.5);
        _this.SmallEgg32.scale.setTo(1,1);
        _this.SmallEgg32.frame = 0;
        _this.SmallEgg32.visible=false;
        _this.SmallEgg32.name = "SmallEgg24";

        _this.SmallEgg33 = _this.add.sprite(_this.world.centerX-165,_this.world.centerY-27,'Unity12_3_2SmallEgg');
        _this.SmallEgg33.anchor.setTo(0.5);
        _this.SmallEgg33.scale.setTo(1,1);
        _this.SmallEgg33.frame = 0;
        _this.SmallEgg33.visible=false;
        _this.SmallEgg33.name = "SmallEgg25";

        _this.SmallEgg34 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY-27,'Unity12_3_2SmallEgg');
        _this.SmallEgg34.anchor.setTo(0.5);
        _this.SmallEgg34.scale.setTo(1,1);
        _this.SmallEgg34.frame = 0;
        _this.SmallEgg34.visible=false;
        _this.SmallEgg34.name = "SmallEgg25";

        _this.SmallEgg35 = _this.add.sprite(_this.world.centerX-90,_this.world.centerY-27,'Unity12_3_2SmallEgg');
        _this.SmallEgg35.anchor.setTo(0.5);
        _this.SmallEgg35.scale.setTo(1,1);
        _this.SmallEgg35.frame = 0;
        _this.SmallEgg35.visible=false;
        _this.SmallEgg35.name = "SmallEgg25";


        /***********************************/

        _this.SmallEgg36 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY+12,'Unity12_3_2SmallEgg');
        _this.SmallEgg36.anchor.setTo(0.5);
        _this.SmallEgg36.scale.setTo(1,1);
        _this.SmallEgg36.frame = 0;
        _this.SmallEgg36.visible=false;
        _this.SmallEgg36.name = "SmallEgg16";

        //glow

        _this.SmallEgg6_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY+12,'Unity12_3_2SixGlow');
        _this.SmallEgg6_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg6_Glow_six.scale.setTo(1,1);
        //_this.SmallEgg6_Glow_six.frame = 1;
        _this.SmallEgg6_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg6_Glow_six.visible=false;

        _this.SmallEgg6_Glow_seven = _this.add.sprite(_this.world.centerX-204,_this.world.centerY+12,'Unity12_3_2SevenGlow');
        _this.SmallEgg6_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg6_Glow_seven.scale.setTo(1,1);
        //_this.SmallEgg6_Glow_seven.frame = 1;
        _this.SmallEgg6_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg6_Glow_seven.visible=false;

        _this.SmallEgg37 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY+12,'Unity12_3_2SmallEgg');
        _this.SmallEgg37.anchor.setTo(0.5);
        _this.SmallEgg37.scale.setTo(1,1);
        _this.SmallEgg37.frame = 0;
        _this.SmallEgg37.visible=false;
        _this.SmallEgg37.name = "SmallEgg27";

        _this.SmallEgg38 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY+12,'Unity12_3_2SmallEgg');
        _this.SmallEgg38.anchor.setTo(0.5);
        _this.SmallEgg38.scale.setTo(1,1);
        _this.SmallEgg38.frame = 0;
        _this.SmallEgg38.visible=false;
        _this.SmallEgg38.name = "SmallEgg28";

        _this.SmallEgg39 = _this.add.sprite(_this.world.centerX-203,_this.world.centerY+12,'Unity12_3_2SmallEgg');
        _this.SmallEgg39.anchor.setTo(0.5);
        _this.SmallEgg39.scale.setTo(1,1);
        _this.SmallEgg39.frame = 0;
        _this.SmallEgg39.visible=false;
        _this.SmallEgg39.name = "SmallEgg29";

        _this.SmallEgg40 = _this.add.sprite(_this.world.centerX-165,_this.world.centerY+12,'Unity12_3_2SmallEgg');
        _this.SmallEgg40.anchor.setTo(0.5);
        _this.SmallEgg40.scale.setTo(1,1);
        _this.SmallEgg40.frame = 0;
        _this.SmallEgg40.visible=false;
        _this.SmallEgg40.name = "SmallEgg30";

        _this.SmallEgg41 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY+12,'Unity12_3_2SmallEgg');
        _this.SmallEgg41.anchor.setTo(0.5);
        _this.SmallEgg41.scale.setTo(1,1);
        _this.SmallEgg41.frame = 0;
        _this.SmallEgg41.visible=false;
        _this.SmallEgg41.name = "SmallEgg30";

        _this.SmallEgg42 = _this.add.sprite(_this.world.centerX-90,_this.world.centerY+12,'Unity12_3_2SmallEgg');
        _this.SmallEgg42.anchor.setTo(0.5);
        _this.SmallEgg42.scale.setTo(1,1);
        _this.SmallEgg42.frame = 0;
        _this.SmallEgg42.visible=false;
        _this.SmallEgg42.name = "SmallEgg30";

        /**************************************************/

        _this.SmallEgg43 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY+50,'Unity12_3_2SmallEgg');
        _this.SmallEgg43.anchor.setTo(0.5);
        _this.SmallEgg43.scale.setTo(1,1);
        _this.SmallEgg43.frame = 0;
        _this.SmallEgg43.visible=false;
        _this.SmallEgg43.name = "SmallEgg19";

        //glow

        _this.SmallEgg7_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY+50,'Unity12_3_2SixGlow');
        _this.SmallEgg7_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg7_Glow_six.scale.setTo(1,1);
        //_this.SmallEgg7_Glow_six.frame = 1;
        _this.SmallEgg7_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg7_Glow_six.visible=false;
        _this.SmallEgg7_Glow_seven = _this.add.sprite(_this.world.centerX-203,_this.world.centerY+50,'Unity12_3_2SevenGlow');
        _this.SmallEgg7_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg7_Glow_seven.scale.setTo(1,1);
        // _this.SmallEgg7_Glow_seven.frame = 1;
        _this.SmallEgg7_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg7_Glow_seven.visible=false;


        _this.SmallEgg44 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY+50,'Unity12_3_2SmallEgg');
        _this.SmallEgg44.anchor.setTo(0.5);
        _this.SmallEgg44.scale.setTo(1,1);
        _this.SmallEgg44.frame = 0;
        _this.SmallEgg44.visible=false;
        _this.SmallEgg44.name = "SmallEgg32";

        _this.SmallEgg45 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY+50,'Unity12_3_2SmallEgg');
        _this.SmallEgg45.anchor.setTo(0.5);
        _this.SmallEgg45.scale.setTo(1,1);
        _this.SmallEgg45.frame = 0;
        _this.SmallEgg45.visible=false;
        _this.SmallEgg45.name = "SmallEgg33";

        _this.SmallEgg46 = _this.add.sprite(_this.world.centerX-203,_this.world.centerY+50,'Unity12_3_2SmallEgg');
        _this.SmallEgg46.anchor.setTo(0.5);
        _this.SmallEgg46.scale.setTo(1,1);
        _this.SmallEgg46.frame = 0;
        _this.SmallEgg46.visible=false;
        _this.SmallEgg46.name = "SmallEgg34";

        _this.SmallEgg47 = _this.add.sprite(_this.world.centerX-165,_this.world.centerY+50,'Unity12_3_2SmallEgg');
        _this.SmallEgg47.anchor.setTo(0.5);
        _this.SmallEgg47.scale.setTo(1,1);
        _this.SmallEgg47.frame = 0;
        _this.SmallEgg47.visible=false;
        _this.SmallEgg47.name = "SmallEgg35";

        _this.SmallEgg48 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY+50,'Unity12_3_2SmallEgg');
        _this.SmallEgg48.anchor.setTo(0.5);
        _this.SmallEgg48.scale.setTo(1,1);
        _this.SmallEgg48.frame = 0;
        _this.SmallEgg48.visible=false;
        _this.SmallEgg48.name = "SmallEgg35";

        _this.SmallEgg49 = _this.add.sprite(_this.world.centerX-90,_this.world.centerY+50,'Unity12_3_2SmallEgg');
        _this.SmallEgg49.anchor.setTo(0.5);
        _this.SmallEgg49.scale.setTo(1,1);
        _this.SmallEgg49.frame = 0;
        _this.SmallEgg49.visible=false;
        _this.SmallEgg49.name = "SmallEgg35";

        /****************************************************/

        _this.SmallEgg50 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY+86,'Unity12_3_2SmallEgg');
        _this.SmallEgg50.anchor.setTo(0.5);
        _this.SmallEgg50.scale.setTo(1,1);
        _this.SmallEgg50.frame = 0;
        _this.SmallEgg50.visible=false;
        _this.SmallEgg50.name = "SmallEgg22";

        //glow

        _this.SmallEgg8_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY+86,'Unity12_3_2SixGlow');
        _this.SmallEgg8_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg8_Glow_six.scale.setTo(1,1);
        //_this.SmallEgg8_Glow_six.frame = 1;
        _this.SmallEgg8_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg8_Glow_six.visible=false;

        _this.SmallEgg8_Glow_seven = _this.add.sprite(_this.world.centerX-204,_this.world.centerY+86,'Unity12_3_2SevenGlow');
        _this.SmallEgg8_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg8_Glow_seven.scale.setTo(1,1);
        //_this.SmallEgg8_Glow_seven.frame = 1;
        _this.SmallEgg8_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg8_Glow_seven.visible=false;

        _this.SmallEgg51 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY+86,'Unity12_3_2SmallEgg');
        _this.SmallEgg51.anchor.setTo(0.5);
        _this.SmallEgg51.scale.setTo(1,1);
        _this.SmallEgg51.frame = 0;
        _this.SmallEgg51.visible=false;
        _this.SmallEgg51.name = "SmallEgg37";

        _this.SmallEgg52 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY+86,'Unity12_3_2SmallEgg');
        _this.SmallEgg52.anchor.setTo(0.5);
        _this.SmallEgg52.scale.setTo(1,1);
        _this.SmallEgg52.frame = 0;
        _this.SmallEgg52.visible=false;
        _this.SmallEgg52.name = "SmallEgg38";

        _this.SmallEgg53 = _this.add.sprite(_this.world.centerX-203,_this.world.centerY+86,'Unity12_3_2SmallEgg');
        _this.SmallEgg53.anchor.setTo(0.5);
        _this.SmallEgg53.scale.setTo(1,1);
        _this.SmallEgg53.frame = 0;
        _this.SmallEgg53.visible=false;
        _this.SmallEgg53.name = "SmallEgg39";

        _this.SmallEgg54 = _this.add.sprite(_this.world.centerX-165,_this.world.centerY+86,'Unity12_3_2SmallEgg');
        _this.SmallEgg54.anchor.setTo(0.5);
        _this.SmallEgg54.scale.setTo(1,1);
        _this.SmallEgg54.frame = 0;
        _this.SmallEgg54.visible=false;
        _this.SmallEgg54.name = "SmallEgg40";

        _this.SmallEgg55 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY+86,'Unity12_3_2SmallEgg');
        _this.SmallEgg55.anchor.setTo(0.5);
        _this.SmallEgg55.scale.setTo(1,1);
        _this.SmallEgg55.frame = 0;
        _this.SmallEgg55.visible=false;
        _this.SmallEgg55.name = "SmallEgg40";

        _this.SmallEgg56 = _this.add.sprite(_this.world.centerX-90,_this.world.centerY+86,'Unity12_3_2SmallEgg');
        _this.SmallEgg56.anchor.setTo(0.5);
        _this.SmallEgg56.scale.setTo(1,1);
        _this.SmallEgg56.frame = 0;
        _this.SmallEgg56.visible=false;
        _this.SmallEgg56.name = "SmallEgg40";

        /****************************************/

        _this.SmallEgg57 = _this.add.sprite(_this.world.centerX-318,_this.world.centerY+124,'Unity12_3_2SmallEgg');
        _this.SmallEgg57.anchor.setTo(0.5);
        _this.SmallEgg57.scale.setTo(1,1);
        _this.SmallEgg57.frame = 0;
        _this.SmallEgg57.visible=false;
        _this.SmallEgg57.name = "SmallEgg25";

        //glow
        _this.SmallEgg9_Glow_six = _this.add.sprite(_this.world.centerX-222,_this.world.centerY+124,'Unity12_3_2SixGlow');
        _this.SmallEgg9_Glow_six.anchor.setTo(0.5);
        _this.SmallEgg9_Glow_six.scale.setTo(1,1);
        //_this.SmallEgg9_Glow_six.frame = 1;
        _this.SmallEgg9_Glow_six.name = "SmallEgg1_Glow_three";
        _this.SmallEgg9_Glow_six.visible=false;

        _this.SmallEgg9_Glow_seven = _this.add.sprite(_this.world.centerX-204,_this.world.centerY+124,'Unity12_3_2SevenGlow');
        _this.SmallEgg9_Glow_seven.anchor.setTo(0.5);
        _this.SmallEgg9_Glow_seven.scale.setTo(1,1);
        //_this.SmallEgg9_Glow_seven.frame = 1;
        _this.SmallEgg9_Glow_seven.name = "SmallEgg1_Glow_three";
        _this.SmallEgg9_Glow_seven.visible=false;

        _this.SmallEgg58 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY+124,'Unity12_3_2SmallEgg');
        _this.SmallEgg58.anchor.setTo(0.5);
        _this.SmallEgg58.scale.setTo(1,1);
        _this.SmallEgg58.frame = 0;
        _this.SmallEgg58.visible=false;
        _this.SmallEgg58.name = "SmallEgg42";

        _this.SmallEgg59 = _this.add.sprite(_this.world.centerX-242,_this.world.centerY+124,'Unity12_3_2SmallEgg');
        _this.SmallEgg59.anchor.setTo(0.5);
        _this.SmallEgg59.scale.setTo(1,1);
        _this.SmallEgg59.frame = 0;
        _this.SmallEgg59.visible=false;
        _this.SmallEgg59.name = "SmallEgg43";

        _this.SmallEgg60 = _this.add.sprite(_this.world.centerX-203,_this.world.centerY+124,'Unity12_3_2SmallEgg');
        _this.SmallEgg60.anchor.setTo(0.5);
        _this.SmallEgg60.scale.setTo(1,1);
        _this.SmallEgg60.frame = 0;
        _this.SmallEgg60.visible=false;
        _this.SmallEgg60.name = "SmallEgg44";

        _this.SmallEgg61 = _this.add.sprite(_this.world.centerX-165,_this.world.centerY+124,'Unity12_3_2SmallEgg');
        _this.SmallEgg61.anchor.setTo(0.5);
        _this.SmallEgg61.scale.setTo(1,1);
        _this.SmallEgg61.frame = 0;
        _this.SmallEgg61.visible=false;
        _this.SmallEgg61.name = "SmallEgg45";

        _this.SmallEgg62 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY+124,'Unity12_3_2SmallEgg');
        _this.SmallEgg62.anchor.setTo(0.5);
        _this.SmallEgg62.scale.setTo(1,1);
        _this.SmallEgg62.frame = 0;
        _this.SmallEgg62.visible=false;
        _this.SmallEgg62.name = "SmallEgg45";

        _this.SmallEgg63 = _this.add.sprite(_this.world.centerX-90,_this.world.centerY+124,'Unity12_3_2SmallEgg');
        _this.SmallEgg63.anchor.setTo(0.5);
        _this.SmallEgg63.scale.setTo(1,1);
        _this.SmallEgg63.frame = 0;
        _this.SmallEgg63.visible=false;
        _this.SmallEgg63.name = "SmallEgg45";


        /*********************************************/

        //drag egg
        _this.SmallEgg1_1 = _this.add.sprite(_this.world.centerX-325,_this.world.centerY+230,'Unity12_3_2SmallEgg');
        _this.SmallEgg1_1.anchor.setTo(0.5);
        _this.SmallEgg1_1.scale.setTo(1,1);
        _this.SmallEgg1_1.name = "SmallEgg1_1";
        //_this.SmallEgg1_1.visible=false;

        _this.SmallEgg1_2 = _this.add.sprite(_this.world.centerX-300,_this.world.centerY+230,'Unity12_3_2SmallEgg');
        _this.SmallEgg1_2.anchor.setTo(0.5);
        _this.SmallEgg1_2.scale.setTo(1,1);
        _this.SmallEgg1_2.name = "SmallEgg1_2";
        //_this.SmallEgg1_2.visible=false;

        _this.SmallEgg1_3 = _this.add.sprite(_this.world.centerX-275,_this.world.centerY+230,'Unity12_3_2SmallEgg');
        _this.SmallEgg1_3.anchor.setTo(0.5);
        _this.SmallEgg1_3.scale.setTo(1,1);
        _this.SmallEgg1_3.name = "SmallEgg1_3";
        //_this.SmallEgg1_3.visible=false;

        _this.SmallEgg1_4 = _this.add.sprite(_this.world.centerX-250,_this.world.centerY+230,'Unity12_3_2SmallEgg');
        _this.SmallEgg1_4.anchor.setTo(0.5);
        _this.SmallEgg1_4.scale.setTo(1,1);
        _this.SmallEgg1_4.name = "SmallEgg1_4";
        //_this.SmallEgg1_4.visible=false;

        _this.SmallEgg1_5 = _this.add.sprite(_this.world.centerX-225,_this.world.centerY+230,'Unity12_3_2SmallEgg');
        _this.SmallEgg1_5.anchor.setTo(0.5);
        _this.SmallEgg1_5.scale.setTo(1,1);
        _this.SmallEgg1_5.name = "SmallEgg1_5";
        //_this.SmallEgg1_5.visible=false;

        _this.SmallEgg1_6 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY+230,'Unity12_3_2SmallEgg');
        _this.SmallEgg1_6.anchor.setTo(0.5);
        _this.SmallEgg1_6.scale.setTo(1,1);
        _this.SmallEgg1_6.name = "SmallEgg1_6";
        //_this.SmallEgg1_6.visible=false;

        _this.SmallEgg1_7 = _this.add.sprite(_this.world.centerX-175,_this.world.centerY+230,'Unity12_3_2SmallEgg');
        _this.SmallEgg1_7.anchor.setTo(0.5);
        _this.SmallEgg1_7.scale.setTo(1,1);
        _this.SmallEgg1_7.name = "SmallEgg1_7";
        //_this.SmallEgg1_7.visible=true;

        if(_this.randomno == 6)
        {
            _this.SmallEgg1_7.visible = false;
        }


        _this.SmallEggGrp = _this.add.group();
        _this.DragEggGrp = _this.add.group();

        _this.NumberGrp1 = _this.add.group();
        _this.NumberGrp2 = _this.add.group();
        _this.NumberGrp3 = _this.add.group();

        _this.SmallEggGrp.add(_this.SmallEgg1);
        _this.SmallEggGrp.add(_this.SmallEgg2);
        _this.SmallEggGrp.add(_this.SmallEgg3);
        _this.SmallEggGrp.add(_this.SmallEgg4);
        _this.SmallEggGrp.add(_this.SmallEgg5);
        _this.SmallEggGrp.add(_this.SmallEgg6);
        _this.SmallEggGrp.add(_this.SmallEgg7);
        _this.SmallEggGrp.add(_this.SmallEgg8);
        _this.SmallEggGrp.add(_this.SmallEgg9);
        _this.SmallEggGrp.add(_this.SmallEgg10);
        _this.SmallEggGrp.add(_this.SmallEgg11);
        _this.SmallEggGrp.add(_this.SmallEgg12);
        _this.SmallEggGrp.add(_this.SmallEgg13);
        _this.SmallEggGrp.add(_this.SmallEgg14);
        _this.SmallEggGrp.add(_this.SmallEgg15);
        _this.SmallEggGrp.add(_this.SmallEgg16);
        _this.SmallEggGrp.add(_this.SmallEgg17);
        _this.SmallEggGrp.add(_this.SmallEgg18);
        _this.SmallEggGrp.add(_this.SmallEgg19);
        _this.SmallEggGrp.add(_this.SmallEgg20);
        _this.SmallEggGrp.add(_this.SmallEgg21);
        _this.SmallEggGrp.add(_this.SmallEgg22);
        _this.SmallEggGrp.add(_this.SmallEgg23);
        _this.SmallEggGrp.add(_this.SmallEgg24);
        _this.SmallEggGrp.add(_this.SmallEgg25);
        _this.SmallEggGrp.add(_this.SmallEgg26);
        _this.SmallEggGrp.add(_this.SmallEgg27);
        _this.SmallEggGrp.add(_this.SmallEgg28);
        _this.SmallEggGrp.add(_this.SmallEgg29);
        _this.SmallEggGrp.add(_this.SmallEgg30);
        _this.SmallEggGrp.add(_this.SmallEgg31);
        _this.SmallEggGrp.add(_this.SmallEgg32);
        _this.SmallEggGrp.add(_this.SmallEgg33);
        _this.SmallEggGrp.add(_this.SmallEgg34);
        _this.SmallEggGrp.add(_this.SmallEgg35);
        _this.SmallEggGrp.add(_this.SmallEgg36);
        _this.SmallEggGrp.add(_this.SmallEgg37);
        _this.SmallEggGrp.add(_this.SmallEgg38);
        _this.SmallEggGrp.add(_this.SmallEgg39);
        _this.SmallEggGrp.add(_this.SmallEgg40);
        _this.SmallEggGrp.add(_this.SmallEgg41);
        _this.SmallEggGrp.add(_this.SmallEgg42);
        _this.SmallEggGrp.add(_this.SmallEgg43);
        _this.SmallEggGrp.add(_this.SmallEgg44);
        _this.SmallEggGrp.add(_this.SmallEgg45);
        _this.SmallEggGrp.add(_this.SmallEgg46);
        _this.SmallEggGrp.add(_this.SmallEgg47);
        _this.SmallEggGrp.add(_this.SmallEgg48);
        _this.SmallEggGrp.add(_this.SmallEgg49);
        _this.SmallEggGrp.add(_this.SmallEgg50);
        _this.SmallEggGrp.add(_this.SmallEgg51);
        _this.SmallEggGrp.add(_this.SmallEgg52);
        _this.SmallEggGrp.add(_this.SmallEgg53);
        _this.SmallEggGrp.add(_this.SmallEgg54);
        _this.SmallEggGrp.add(_this.SmallEgg55);
        _this.SmallEggGrp.add(_this.SmallEgg56);
        _this.SmallEggGrp.add(_this.SmallEgg57);
        _this.SmallEggGrp.add(_this.SmallEgg58);
        _this.SmallEggGrp.add(_this.SmallEgg59);
        _this.SmallEggGrp.add(_this.SmallEgg60);
        _this.SmallEggGrp.add(_this.SmallEgg61);
        _this.SmallEggGrp.add(_this.SmallEgg62);
        _this.SmallEggGrp.add(_this.SmallEgg63);

        _this.DragEggGrp.add(_this.SmallEgg1_1);
        _this.DragEggGrp.add(_this.SmallEgg1_2);
        _this.DragEggGrp.add(_this.SmallEgg1_3);
        _this.DragEggGrp.add(_this.SmallEgg1_4);
        _this.DragEggGrp.add(_this.SmallEgg1_5);
        _this.DragEggGrp.add(_this.SmallEgg1_6);
        _this.DragEggGrp.add(_this.SmallEgg1_7);

        _this.NumberGrp1.add(_this.FirstNumbers1);
        _this.NumberGrp1.add(_this.FirstNumbers2);
        _this.NumberGrp1.add(_this.FirstNumbers3);
        _this.NumberGrp1.add(_this.FirstNumbers4);
        _this.NumberGrp1.add(_this.FirstNumbers5);
        _this.NumberGrp1.add(_this.FirstNumbers6);
        _this.NumberGrp1.add(_this.FirstNumbers7);
        _this.NumberGrp1.add(_this.FirstNumbers8);
        _this.NumberGrp1.add(_this.FirstNumbers9);

        _this.NumberGrp2.add(_this.SecondNumbers1);
        _this.NumberGrp2.add(_this.SecondNumbers2);
        _this.NumberGrp2.add(_this.SecondNumbers3);
        _this.NumberGrp2.add(_this.SecondNumbers4);
        _this.NumberGrp2.add(_this.SecondNumbers5);
        _this.NumberGrp2.add(_this.SecondNumbers6);
        _this.NumberGrp2.add(_this.SecondNumbers7);
        _this.NumberGrp2.add(_this.SecondNumbers8);
        _this.NumberGrp2.add(_this.SecondNumbers9);

        _this.NumberGrp3.add(_this.Multiplicationsign1);
        _this.NumberGrp3.add(_this.Multiplicationsign2);
        _this.NumberGrp3.add(_this.Multiplicationsign3);
        _this.NumberGrp3.add(_this.Multiplicationsign4);
        _this.NumberGrp3.add(_this.Multiplicationsign5);
        _this.NumberGrp3.add(_this.Multiplicationsign6);
        _this.NumberGrp3.add(_this.Multiplicationsign7);
        _this.NumberGrp3.add(_this.Multiplicationsign8);
        _this.NumberGrp3.add(_this.Multiplicationsign9);

        var graphics = this.add.graphics(0, 0);
        graphics.lineStyle(2, 0x0000FF, 0);
        graphics.beginFill(0xFF700B, 0);

        graphics.addChild(_this.DragEggGrp);
        //graphics.alpha = 0;
        graphics.inputEnabled = true;
        graphics.visible = false;
        graphics.input.priorityID = 1;
        graphics.events.onInputDown.add(_this.onDragStart,_this);

        _this.EggVisiblebtn = _this.add.sprite(_this.world.centerX+230,_this.world.centerY-250,'Unity12_3_2bulbGlow');
        _this.EggVisiblebtn.anchor.setTo(0.5);
        _this.EggVisiblebtn.scale.setTo(0.7,0.7);

        _this.anim= _this.EggVisiblebtn.animations.add('walk',[7,8,9,10,11]);
        _this.anim.play(2, true);

        _this.Glow = _this.add.sprite(_this.world.centerX+231,_this.world.centerY-248,'Unity12_3_2glow');
        _this.Glow.anchor.setTo(0.5);
        _this.Glow.scale.setTo(0.7,0.7);

        _this.Glow_grp= _this.Glow.animations.add('walk');
        _this.Glow_grp.play(2, true);

        _this.EggVisiblebtn.inputEnabled = true;
        _this.EggVisiblebtn.events.onInputDown.add(function()
                                                   {
            console.log("click button ");
            _this.MovePadnumber = _this.add.tween(_this.addNumberPadGrp).to( { x: 250 }, 1500, "Quart.easeOut");
            _this.MovePadnumber.start();

            commonNavBar.playClickSound();

            _this.time.events.add(1500, function()
                                  {
                _this.Eggbox.visible = true;
                if(_this.randomno == 6)
                {
                    graphics.drawRect(_this.world.centerX-370,_this.world.centerY+200, 190, 50);

                    //_this.anim= _this.SmallEgg1_Glow_two.animations.add('walk');
                    _this.SmallEgg1_Glow_six.frame = 1;
                    _this.SmallEgg1_Glow_six.visible=true;
                    //_this.anim.play(10, true); 
                }
                else
                {
                    graphics.drawRect(_this.world.centerX-370,_this.world.centerY+200, 190, 50);
                    _this.SmallEgg1_Glow_seven.frame = 1;
                    _this.SmallEgg1_Glow_seven.visible=true;
                }
                graphics.visible = true;
            }, this);

        },_this);
    },

    removeListeners:function(){

        _this.calNum0.inputEnabled=false;
        _this.calNum0.input.useHandCursor = false;
        
        _this.calNum1.inputEnabled=false;
        _this.calNum1.input.useHandCursor = false;
        
        _this.calNum2.inputEnabled=false;
        _this.calNum2.input.useHandCursor = false;
        
        _this.calNum3.inputEnabled=false;
        _this.calNum3.input.useHandCursor = false;
        
        _this.calNum4.inputEnabled=false;
        _this.calNum4.input.useHandCursor = false;
        
        _this.calNum5.inputEnabled=false;
        _this.calNum5.input.useHandCursor = false;
        
        _this.calNum6.inputEnabled=false;
        _this.calNum6.input.useHandCursor = false;
        
        _this.calNum7.inputEnabled=false;
        _this.calNum7.input.useHandCursor = false;
        
        _this.calNum8.inputEnabled=false;
        _this.calNum8.input.useHandCursor = false;
        
        _this.calNum9.inputEnabled=false;
        _this.calNum9.input.useHandCursor = false;
    },

    addNumberPad:function()
    {
        console.log("addNumberPad");

        _this.pressed = 0;
        _this.dragged = false;

        _this.Numberbox= _this.add.sprite(_this.world.centerX,_this.world.centerY+20,'Unity12_3_2Number_box');
        _this.Numberbox.anchor.setTo(0.5)
        _this.Numberbox.scale.setTo(1,1);
        _this.Numberbox.name="Unity12_3_2Number_box";

        _this.AnswerGrp = _this.add.group();
        _this.addNumberPadGrp = _this.add.group();

        //_this.shuffleNumbers();

        // number multiplication
        _this.framesChange = [6,7];
        _this.framesChange = this.shuffle(_this.framesChange);

        _this.FirstNumbers = _this.add.sprite(_this.world.centerX-110,_this.world.centerY-140,'Unity12_3_2greenNumbers');
        _this.FirstNumbers.name="FirstNumbers";
        _this.FirstNumbers.anchor.setTo(0.5);
        _this.FirstNumbers.frame = _this.framesChange[0];

        _this.framesChange1 = [2,3,4,5,7,8,9];
        _this.framesChange1 = _this.shuffle(_this.framesChange1);

        _this.SecondNumbers = _this.add.sprite(_this.world.centerX-30,_this.world.centerY-140,'Unity12_3_2greenNumbers');
        _this.SecondNumbers.name="SecondNumbers";
        _this.SecondNumbers.anchor.setTo(0.5);
        _this.SecondNumbers.frame = _this.framesChange1[0]-1;
        /*********************************************************/

        _this.FirstNumbers.frame =(_this.randomno-1);

        console.log("first no b4=="+_this.randomno);
        console.log("second no b4=="+_this.framesChange1[0]);

        _this.multiplication =_this.randomno *_this.framesChange1[0];
        console.log("Multiplication no =="+_this.multiplication);

        _this.Multiplicationsign=_this.add.sprite(_this.world.centerX-85,_this.world.centerY-170,'Unity12_3_2Multiplicationsign');
        _this.Multiplicationsign.name="Unity12_3_2Multiplicationsign";
        _this.Multiplicationsign.scale.setTo(1,1);

        _this.EqualSymbol = _this.add.sprite(_this.world.centerX,_this.world.centerY-170,'Unity12_3_2EqualSymbol');
        _this.EqualSymbol.name="Unity12_3_2EqualSymbol";
        _this.EqualSymbol.scale.setTo(1,1);

        _this.txtbox =_this.add.sprite(_this.world.centerX+90,_this.world.centerY-145,'Unity12_1Txtbox');
        _this.txtbox.name="AnswerBox";
        _this.txtbox.anchor.setTo(0.5);
        _this.txtbox.scale.setTo(0.9);

        // numbers 0 to 9
        _this.calNum1=this.add.sprite(_this.world.centerX-90,_this.world.centerY-53,'Unity12_3_2Numbers');
        _this.calNum1.name="1";
        _this.calNum1.anchor.setTo(0.5);
        _this.calNum1.scale.setTo(0.7,0.7);
        _this.calNum1.frame = 1;
        _this.calNum1.inputEnabled=true;
        _this.calNum1.input.useHandCursor = true;
        _this.calNum1.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum2=_this.add.sprite(_this.world.centerX,_this.world.centerY-53,'Unity12_3_2Numbers');
        _this.calNum2.name="2";
        _this.calNum2.anchor.setTo(0.5);
        _this.calNum2.scale.setTo(0.7,0.7);
        _this.calNum2.frame=2;
        _this.calNum2.inputEnabled=true;
        _this.calNum2.input.useHandCursor = true;
        _this.calNum2.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum3=_this.add.sprite(_this.world.centerX+90,_this.world.centerY-53,'Unity12_3_2Numbers');
        _this.calNum3.name="3";
        _this.calNum3.anchor.setTo(0.5);
        _this.calNum3.scale.setTo(0.7,0.7);
        _this.calNum3.frame=3;
        _this.calNum3.inputEnabled=true;
        _this.calNum3.input.useHandCursor = true;
        _this.calNum3.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum4=_this.add.sprite(_this.world.centerX-90,_this.world.centerY+30,'Unity12_3_2Numbers');
        _this.calNum4.name="4";
        _this.calNum4.anchor.setTo(0.5);
        _this.calNum4.scale.setTo(0.7,0.7);
        _this.calNum4.frame=4;
        _this.calNum4.inputEnabled=true;
        _this.calNum4.input.useHandCursor = true;
        _this.calNum4.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum5=_this.add.sprite(_this.world.centerX,_this.world.centerY+30,'Unity12_3_2Numbers');
        _this.calNum5.name="5";
        _this.calNum5.anchor.setTo(0.5);
        _this.calNum5.scale.setTo(0.7,0.7);
        _this.calNum5.frame=5;
        _this.calNum5.inputEnabled=true;
        _this.calNum5.input.useHandCursor = true;
        _this.calNum5.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum6=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+30,'Unity12_3_2Numbers');
        _this.calNum6.name="6";
        _this.calNum6.anchor.setTo(0.5);
        _this.calNum6.scale.setTo(0.7,0.7);
        _this.calNum6.frame=6;
        _this.calNum6.inputEnabled=true;
        _this.calNum6.input.useHandCursor = true;
        _this.calNum6.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum7=_this.add.sprite(_this.world.centerX-90,_this.world.centerY+115,'Unity12_3_2Numbers');
        _this.calNum7.name="7";
        _this.calNum7.anchor.setTo(0.5);
        _this.calNum7.scale.setTo(0.7,0.7);
        _this.calNum7.frame=7;
        _this.calNum7.inputEnabled=true;
        _this.calNum7.input.useHandCursor = true;
        _this.calNum7.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum8=_this.add.sprite(_this.world.centerX,_this.world.centerY+115,'Unity12_3_2Numbers');
        _this.calNum8.name="8";
        _this.calNum8.anchor.setTo(0.5);
        _this.calNum8.scale.setTo(0.7,0.7);
        _this.calNum8.frame = 8;
        _this.calNum8.inputEnabled=true;
        _this.calNum8.input.useHandCursor = true;
        _this.calNum8.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum9=_this.add.sprite(_this.world.centerX+90,_this.world.centerY+115,'Unity12_3_2Numbers');
        _this.calNum9.name="9";
        _this.calNum9.anchor.setTo(0.5);
        _this.calNum9.scale.setTo(0.7,0.7);
        _this.calNum9.frame=9;
        _this.calNum9.inputEnabled=true;
        _this.calNum9.input.useHandCursor = true;
        _this.calNum9.events.onInputDown.add(_this.numClicked,_this);

        _this.calNum0=_this.add.sprite(_this.world.centerX-90,_this.world.centerY+200,'Unity12_3_2Numbers');
        _this.calNum0.name="0";
        _this.calNum0.anchor.setTo(0.5);
        _this.calNum0.scale.setTo(0.7,0.7);
        _this.calNum0.frame = 0;
        _this.calNum0.inputEnabled=true;
        _this.calNum0.input.useHandCursor = true;
        _this.calNum0.events.onInputDown.add(_this.numClicked,_this);

        console.log("pressed== :"+_this.pressed);

        _this.enterTxt = _this.add.text(-2,1, _this.selectedAns);
        _this.enterTxt.anchor.setTo(0.5);
        _this.enterTxt.scale.setTo(0.9,1);
        _this.enterTxt.align = 'center';
        _this.enterTxt.font = "myfont";
        _this.enterTxt.fontWeight = 'normal';
        _this.enterTxt.fontSize = 65;
        _this.enterTxt.fill = '#0199a3';
        _this.enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        _this.txtbox.addChild(_this.enterTxt);

        _this.AnswerGrp.add(_this.txtbox);

        _this.eraser=_this.add.sprite(_this.world.centerX,_this.world.centerY+205,'Unity12_3_2Eraser');
        _this.eraser.name="Eraser";
        _this.eraser.anchor.setTo(0.5);
        _this.eraser.scale.setTo(1.4,1.4);
        _this.eraser.frame = 0;
        _this.eraser.inputEnabled = true;
        _this.eraser.input.useHandCursor = true;
        _this.eraser.events.onInputDown.add(function(){
            commonNavBar.playTapSound();
            _this.eraser.frame=1;
            _this.enterTxt.setText("");
            _this.selectedAns="";

            _this.time.events.add(500, function(){
                _this.eraser.frame=0;
            },this);
            _this.txtbox.frame = 0;

        },this);

        _this.tick =_this.add.sprite(_this.world.centerX+90,_this.world.centerY+205,'Unity12_3_2Tick');
        _this.tick.name="tick";
        _this.tick.anchor.setTo(0.5);
        _this.tick.scale.setTo(1.4,1.4);
        _this.tick.frame = 0;
        _this.tick.inputEnabled=true;
        _this.tick.input.useHandCursor = true;

        _this.tick.events.onInputDown.add(function(target){
            target.events.onInputDown.removeAll();
            _this.noofAttempts++;
            _this.tick.frame=1;
            commonNavBar.playTapSound();
            console.log("selectedAns :"+_this.selectedAns);
            console.log("Answer :"+_this.multiplication);

            _this.time.events.add(500, function(){
                _this.tick.frame=0;
                if(_this.selectedAns==_this.multiplication||_this.selectedAns=="0"+_this.multiplication||_this.selectedAns=="00"+_this.multiplication)  
                {
                    console.log("correct");
                    telInitializer2.gameCorrectAns();
                    //target.events.onInputDown.removeAll();
                    
                    commonNavBar.disableHintIcon();  //Disable Hint icon after click
                    
                    _this.removeListeners();            //Disable other numbers after click
                    _this.tick.inputEnabled = false;       //Disable tick btn after click
                    _this.tick.input.useHandCursor = false; 
                    
                    _this.txtboxplay = _this.txtbox.animations.add('walk');                   
                    _this.txtboxplay.play(7,true);

//                    _this.speakerbtn.inputEnabled=false;
                    _this.celebration = true;

                    commonNavBar.playClickSound();

                    commonNavBar.playCelebrationSound();

                    /*********************************************/

                    _this.Stararr.push(3);
                    _this.time.events.add(2000, _this.removeEverthing, _this);

                    _this.staranim = _this.starsGroup.getChildAt(_this.count1);
                    _this.staranim.smoothed = false;
                    _this.anim4 = _this.staranim.animations.add('star');
                    _this.anim4.play();

                    _this.selectedAns = "";

                }
                else
                {
                    telInitializer2.gameWrongAns();
                    console.log("wrong");

                    commonNavBar.disableHintIcon();
                    
                    _this.selectedAns = "";
                    _this.enterTxt.setText("");

                    _this.addNumberPadGrp.x = _this.addNumberPadGrp.x+480;
                    _this.addNumberPadGrp.y = _this.addNumberPadGrp.y+270;
                    _this.addNumberPadGrp.pivot.setTo(this.world.centerX,this.world.centerY);

                    //_this.shake.shake(10, _this.Numberbox);

                    var tween = _this.add.tween(_this.addNumberPadGrp);
                    tween.to({ angle: -10 }, 100, 'Linear', true, 0);
                    tween.onComplete.add(function(){
                        var tween1 = _this.add.tween(_this.addNumberPadGrp);
                        tween1.to({ angle: 10 }, 100, 'Linear', true, 0);
                        tween1.onComplete.add(function(){
                            var tween2 = _this.add.tween(_this.addNumberPadGrp);
                            tween2.to({ angle: -10 }, 100, 'Linear', true, 0);
                            tween2.onComplete.add(function(){
                                var tween3 = _this.add.tween(_this.addNumberPadGrp);
                                tween3.to({ angle: 10 }, 100, 'Linear', true, 0);
                                tween3.onComplete.add(function(){
                                    _this.addNumberPadGrp.angle = 0;
                                    _this.addNumberPadGrp.x = _this.addNumberPadGrp.x-480;
                                    _this.addNumberPadGrp.y = _this.addNumberPadGrp.y-270;
                                    _this.addNumberPadGrp.pivot.setTo(0,0);
                                }, _this);
                            }, _this);
                        }, _this);
                    }, _this);


                    commonNavBar.playClickSound();
                    
                    _this.Stararr.push(1);

                    commonNavBar.playWrongCelebrationSound();
                    
                    _this.starsGroup.getChildAt(_this.count1).frame = 1;
                    
                    _this.time.events.add(1000, _this.removeEverthing, _this);
                    
                    _this.removeListeners();
                    
                    _this.tick.inputEnabled = false;
                    _this.tick.input.useHandCursor = false; 

                   // _this.timer1.stop();

                }

            },this);
        },this);

        commonNavBar.tick= _this.tick;
        commonNavBar.eraser=_this.eraser;
        commonNavBar.calNum0=_this.calNum0;
        commonNavBar.calNum1=_this.calNum1;
        commonNavBar.calNum2=_this.calNum2;
        commonNavBar.calNum3=_this.calNum3;
        commonNavBar.calNum4=_this.calNum4;
        commonNavBar.calNum5=_this.calNum5;
        commonNavBar.calNum6=_this.calNum6;
        commonNavBar.calNum7=_this.calNum7;
        commonNavBar.calNum8=_this.calNum8;
        commonNavBar.calNum9=_this.calNum9;

        _this.addNumberPadGrp.add(_this.Numberbox);
        _this.addNumberPadGrp.add(_this.FirstNumbers);
        _this.addNumberPadGrp.add(_this.SecondNumbers);

        _this.addNumberPadGrp.add(_this.Multiplicationsign);
        _this.addNumberPadGrp.add(_this.EqualSymbol);
        _this.addNumberPadGrp.add(_this.AnswerGrp);

        _this.addNumberPadGrp.add(_this.calNum1);
        _this.addNumberPadGrp.add(_this.calNum2);
        _this.addNumberPadGrp.add(_this.calNum3);
        _this.addNumberPadGrp.add(_this.calNum4);
        _this.addNumberPadGrp.add(_this.calNum5);
        _this.addNumberPadGrp.add(_this.calNum6);
        _this.addNumberPadGrp.add(_this.calNum7);
        _this.addNumberPadGrp.add(_this.calNum8);
        _this.addNumberPadGrp.add(_this.calNum9);
        _this.addNumberPadGrp.add(_this.calNum0);
        _this.addNumberPadGrp.add(_this.eraser);
        _this.addNumberPadGrp.add(_this.tick);

    },

    numClicked:function(target){
        //console.log("numClicked name"+target.name);
        // target.frame = 1;
        commonNavBar.playClickSound();
        if(_this.selectedAns.length<2)
        {
            _this.selectedAns += target.name;
            _this.AnswerGrp.getByName("AnswerBox").getChildAt(0).setText(_this.selectedAns);
        }
    },

    changeQuestion:function()
    {
        if(_this.no11<6)
        {
            count++;
            _this.getQuestion();
        }
        else
        {
            //console.log("gameEnd");
            _this.stopVoice();
            _this.state.start('level2');
        }
    },

    checkOverlap:function(spriteA, spriteB) 
    {
        _this.boundsA = spriteA.getBounds();
        _this.boundsB = spriteB.getBounds();
        return Phaser.Rectangle.intersects(_this.boundsA, _this.boundsB);
    }, 

    removeEverthing:function() 
    {

        console.log("removeEverthing");
        _this.wrong = true;
        _this.checkEgg = 0;
        console.log("checkEgg :"+_this.checkEgg);

        _this.no11++;
        _this.addEgg++;
        
        console.log("Question Number :"+_this.no11);

        _this.Eggbox.visible = false;

        _this.SmallEgg1_Glow_six.visible=false;
        _this.SmallEgg1_Glow_seven.visible=false;

        _this.SmallEgg2_Glow_six.visible=false;
        _this.SmallEgg2_Glow_seven.visible=false;

        _this.SmallEgg3_Glow_six.visible=false;
        _this.SmallEgg3_Glow_seven.visible=false;


        _this.SmallEgg4_Glow_six.visible=false;
        _this.SmallEgg4_Glow_seven.visible=false;

        _this.SmallEgg5_Glow_six.visible=false;
        _this.SmallEgg5_Glow_seven.visible=false;

        _this.SmallEgg6_Glow_six.visible=false;
        _this.SmallEgg6_Glow_seven.visible=false;

        _this.SmallEgg7_Glow_six.visible=false;
        _this.SmallEgg7_Glow_seven.visible=false;

        _this.SmallEgg8_Glow_six.visible=false;
        _this.SmallEgg8_Glow_seven.visible=false;

        _this.SmallEgg9_Glow_six.visible=false;
        _this.SmallEgg9_Glow_seven.visible=false;

        if(_this.no11 < 3)
        {
//            _this.timer1.stop();

            console.log("inside removeEverthing");

            _this.AnswerGrp.destroy();
            _this.SmallEggGrp.destroy();
            _this.DragEggGrp.destroy();
            _this.addNumberPadGrp.destroy();
            //_this.Eggbox.destroy();
            _this.Eggbox.visible = false;

            _this.Numberbox.destroy();

            _this.tick.events.onInputDown.removeAll();
            //_this.tick = null;
            _this.eraser.events.onInputDown.removeAll();
            //_this.MovePadnumber.destroy();
            //_this.eraser = null;

            _this.calnum1=null;
            _this.calnum2=null;
            _this.calnum3=null;
            _this.calnum4=null;
            _this.calnum5=null;
            _this.calnum6=null;
            _this.calnum7=null;
            _this.calnum8=null;
            _this.calnum9=null;
            _this.calnum0=null;

            _this.SmallEgg1=null;_this.SmallEgg2=null;_this.SmallEgg3=null;
            _this.SmallEgg4=null;_this.SmallEgg5=null;_this.SmallEgg6=null;
            _this.SmallEgg7=null;_this.SmallEgg8=null;_this.SmallEgg9=null;
            _this.SmallEgg10=null;_this.SmallEgg11=null;_this.SmallEgg12=null;
            _this.SmallEgg13=null;_this.SmallEgg14=null;_this.SmallEgg15=null;
            _this.SmallEgg16=null;_this.SmallEgg17=null;_this.SmallEgg18=null;
            _this.SmallEgg19=null;_this.SmallEgg20=null;_this.SmallEgg21=null;
            _this.SmallEgg22=null;_this.SmallEgg23=null;_this.SmallEgg24=null;
            _this.SmallEgg25=null;_this.SmallEgg26=null;_this.SmallEgg27=null;
            _this.SmallEgg28=null;_this.SmallEgg29=null;_this.SmallEgg30=null;
            _this.SmallEgg31=null;_this.SmallEgg32=null;_this.SmallEgg33=null;
            _this.SmallEgg34=null;_this.SmallEgg35=null;_this.SmallEgg36=null;
            _this.SmallEgg37=null;_this.SmallEgg38=null;_this.SmallEgg39=null;
            _this.SmallEgg40=null;_this.SmallEgg41=null;_this.SmallEgg42=null;
            _this.SmallEgg43=null;_this.SmallEgg44=null;_this.SmallEgg45=null;

            _this.SmallEgg1_Glow_six.visible=false;
            _this.SmallEgg1_Glow_seven.visible=false;

            _this.SmallEgg2_Glow_six.visible=false;
            _this.SmallEgg2_Glow_seven.visible=false;

            _this.SmallEgg3_Glow_six.visible=false;
            _this.SmallEgg3_Glow_seven.visible=false;


            _this.SmallEgg4_Glow_six.visible=false;
            _this.SmallEgg4_Glow_seven.visible=false;

            _this.SmallEgg5_Glow_six.visible=false;
            _this.SmallEgg5_Glow_seven.visible=false;

            _this.SmallEgg6_Glow_six.visible=false;
            _this.SmallEgg6_Glow_seven.visible=false;

            _this.SmallEgg7_Glow_six.visible=false;
            _this.SmallEgg7_Glow_seven.visible=false;

            _this.SmallEgg8_Glow_six.visible=false;
            _this.SmallEgg8_Glow_seven.visible=false;

            _this.SmallEgg9_Glow_six.visible=false;
            _this.SmallEgg9_Glow_seven.visible=false;


            _this.FirstNumbers1.visible=false;
            _this.FirstNumbers2.visible=false;
            _this.FirstNumbers3.visible=false;
            _this.FirstNumbers4.visible=false;
            _this.FirstNumbers5.visible=false;
            _this.FirstNumbers6.visible=false;
            _this.FirstNumbers7.visible=false;
            _this.FirstNumbers8.visible=false;
            _this.FirstNumbers9.visible=false;


            _this.SecondNumbers1.visible=false;
            _this.SecondNumbers2.visible=false;
            _this.SecondNumbers3.visible=false;
            _this.SecondNumbers4.visible=false;
            _this.SecondNumbers5.visible=false;
            _this.SecondNumbers6.visible=false;
            _this.SecondNumbers7.visible=false;
            _this.SecondNumbers8.visible=false;
            _this.SecondNumbers9.visible=false;

            _this.Multiplicationsign1.visible=false;
            _this.Multiplicationsign2.visible=false;
            _this.Multiplicationsign3.visible=false;
            _this.Multiplicationsign4.visible=false;
            _this.Multiplicationsign5.visible=false;
            _this.Multiplicationsign6.visible=false;
            _this.Multiplicationsign7.visible=false;
            _this.Multiplicationsign8.visible=false;
            _this.Multiplicationsign9.visible=false;

            _this.getQuestion(); 
            _this.starsGroup.getChildAt(_this.count1+1).frame = 2; 
            _this.count1++;
        }
        else
        {
            var timerStopVar = commonNavBar.stopTimer();
            commonNavBar.stopTimer();
            commonNavBar.stopVoice();

                                commonNavBar.navBar = null;
                                commonNavBar.backbtn = null;
                                commonNavBar.mcIcon = null;
                                commonNavBar.speakerbtn = null;

            _this.state.start('multiplication_NOMG_4_2level2',true,false,this.Stararr,commonNavBar.getScore(),timerStopVar);
           
        }
    },

    getVoice:function()
    {
        /*_this.stopVoice();
        //console.log("question Array :"+_this.qArrays[_this.no11]);


        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(_this.qArrays[_this.no11])
        {
            case 1: 
            case 2: 
            case 3: 
            case 4:
            case 5:
            case 6:
            case 7:
            case 8: if(window.languageSelected=="English")
            {
                _this.src.setAttribute("src", window.baseUrl+"questionSounds/12.3.2/English/12.3.1.mp3");
            }
                else if(window.languageSelected=="Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/12.3.2/Hindi/12.3.1.mp3");
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/12.3.2/Kannada/12.3.1.mp3");
                }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/12.3.2/Odiya/12.3.2.mp3");
                    _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
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

};