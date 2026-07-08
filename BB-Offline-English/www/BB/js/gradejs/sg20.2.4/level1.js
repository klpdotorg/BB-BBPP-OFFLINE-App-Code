Game.sg20_2_4level1=function(){};


Game.sg20_2_4level1.prototype={

    init:function(param,score)
    {
        _this = this;

        this.Stararr = param;
        this.score = score;
        telInitializer.gameIdInit("SG20_2_4",gradeSelected);
    },

    preload:function(game){
        if(!window.grade4SG5){

            window.grade4SG5 = true;

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

            this.load.atlas("sg20_2_4_image_anim1",window.baseUrl+"assets/gradeAssets/sg20.2.4/1.png",window.baseUrl+"json/gradeJson/sg20.2.4/1.json");
        
        this.load.atlas("sg20_2_4_image_anim2",window.baseUrl+"assets/gradeAssets/sg20.2.4/2.png",window.baseUrl+"json/gradeJson/sg20.2.4/2.json");
        
        this.load.atlas("sg20_2_4_image_anim3",window.baseUrl+"assets/gradeAssets/sg20.2.4/3.png",window.baseUrl+"json/gradeJson/sg20.2.4/3.json");
        
        this.load.atlas("sg20_2_4_image_anim4",window.baseUrl+"assets/gradeAssets/sg20.2.4/4.png",window.baseUrl+"json/gradeJson/sg20.2.4/4.json");
        
        //        this.load.image("image5",window.baseUrl+"assets/gradeAssets/sg20.2.4/image_5.png");
        this.load.atlas("sg20_2_4_image_anim5",window.baseUrl+"assets/gradeAssets/sg20.2.4/5.png",window.baseUrl+"json/gradeJson/sg20.2.4/5.json");
        
        //        this.load.image("image6",window.baseUrl+"assets/gradeAssets/sg20.2.4/image_6.png");
        this.load.atlas("sg20_2_4_image_anim6",window.baseUrl+"assets/gradeAssets/sg20.2.4/6.png",window.baseUrl+"json/gradeJson/sg20.2.4/6.json");
        
        //        this.load.image("image7",window.baseUrl+"assets/gradeAssets/sg20.2.4/image_7.png");
        this.load.atlas("sg20_2_4_image_anim7",window.baseUrl+"assets/gradeAssets/sg20.2.4/7.png",window.baseUrl+"json/gradeJson/sg20.2.4/7.json");
        
        //        this.load.image("image8",window.baseUrl+"assets/gradeAssets/sg20.2.4/image_8.png");
        this.load.atlas("sg20_2_4_image_anim8",window.baseUrl+"assets/gradeAssets/sg20.2.4/8.png",window.baseUrl+"json/gradeJson/sg20.2.4/8.json");
        
        //        this.load.image("image9",window.baseUrl+"assets/gradeAssets/sg20.2.4/image_9.png");
        this.load.atlas("sg20_2_4_image_anim9",window.baseUrl+"assets/gradeAssets/sg20.2.4/9.png",window.baseUrl+"json/gradeJson/sg20.2.4/9.json");
        
        //        this.load.image("image10",window.baseUrl+"assets/gradeAssets/sg20.2.4/image_10.png");
        this.load.atlas("sg20_2_4_image_anim10",window.baseUrl+"assets/gradeAssets/sg20.2.4/10.png",window.baseUrl+"json/gradeJson/sg20.2.4/10.json");
        
        //        this.load.image("image11",window.baseUrl+"assets/gradeAssets/sg20.2.4/image_11.png");
        this.load.atlas("sg20_2_4_image_anim11",window.baseUrl+"assets/gradeAssets/sg20.2.4/11.png",window.baseUrl+"json/gradeJson/sg20.2.4/11.json");
        
        //        this.load.image("image12",window.baseUrl+"assets/gradeAssets/sg20.2.4/image_12.png");
        this.load.atlas("sg20_2_4_image_anim12",window.baseUrl+"assets/gradeAssets/sg20.2.4/12.png",window.baseUrl+"json/gradeJson/sg20.2.4/12.json");     
       
        this.load.image("sg20_2_4_Pencil",window.baseUrl+"assets/gradeAssets/sg20.2.4/pencil.png");
        this.load.image("sg20_2_4_Eraser",window.baseUrl+"assets/gradeAssets/sg20.2.4/eraser.png");
        this.load.image("sg20_2_4_Board",window.baseUrl+"assets/gradeAssets/sg20.2.4/Board.png");
        this.load.atlas("sg20_2_4_TickMark",window.baseUrl+"assets/gradeAssets/sg20.2.4/tick.png",window.baseUrl+"json/gradeJson/sg20.2.4/tick.json");
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

        _this.dragStarted = false;

        _this.crayonFrame = 0;

        _this.no11 = 0;
        _this.count=0;

        _this.count1=0;

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;

        _this.prevTarget = null;
        _this.currentTarget = null;

        _this.prev = [];

        _this.qArray = new Array();
        _this.qArray = [1,2,3,4,5,6];
//        _this.qArray = [5];
        _this.qArray = _this.shuffle(_this.qArray);

        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg2');

        if(window.languageSelected == "English")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/English/sg20.2.4.mp3";
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/Hindi/sg20.2.4.mp3";
        }
        else if(window.languageSelected=="Kannada")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/Kannada/sg20.2.4.mp3";
        }
        else if(window.languageSelected=="Gujarati")
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/Gujarati/sg20.2.4.mp3";
        }
		else if(window.languageSelected =="Marathi")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/Marathi/sg20.2.4.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/Telugu/sg20.2.4.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/Tamil/sg20.2.4.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/Urdu/sg20.2.4.mp3";
                    }
        else
        {
            _this.soundurl =  window.baseUrl+"questionSounds/sg20.2.4/Odiya/sg20.2.4.mp3";
            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
        }

        commonNavBar_sg20_2_4.addNavBar(game,_this.soundurl);
        commonNavBar_sg20_2_4.addTimerToTheGame(game,0,0,0);
        commonNavBar_sg20_2_4.startTimer(game);

        _this.generateStarsForTheScene(6);

        _this.getQuestion();

        _this.getVoice();

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
       

        if(!_this.timer)
        {
             _this.sceneCount++;
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

        }
    },

    greenSprites:function(){

        _this.FirstRowImage = _this.add.group();
        _this.SecondRowImage = _this.add.group();
        _this.ThirdRowImage = _this.add.group();
        _this.FourthRowImage = _this.add.group();
        _this.FifthRowImage = _this.add.group();
        _this.SixthRowImage = _this.add.group();
        _this.SeventhRowImage = _this.add.group();

        _this.FirstColumnImage = _this.add.group();
        _this.SecondColumnImage = _this.add.group();
        _this.ThirdColumnImage = _this.add.group();
        _this.FourthColumnImage = _this.add.group();
        _this.FifthColumnImage = _this.add.group();
        _this.SixthColumnImage = _this.add.group();

        _this.FirstRightCrossColumnImage = _this.add.group();
        _this.SecondRightCrossColumnImage = _this.add.group();
        _this.ThirdRightCrossColumnImage = _this.add.group();
        _this.FourthRightCrossColumnImage = _this.add.group();
        _this.FifthRightCrossColumnImage = _this.add.group();

        _this.FirstLeftCrossColumnImage = _this.add.group();
        _this.SecondLeftCrossColumnImage = _this.add.group();
        _this.ThirdLeftCrossColumnImage = _this.add.group();
        _this.FourthLeftCrossColumnImage = _this.add.group();
        _this.FifthLeftCrossColumnImage = _this.add.group();

        _this.row_graphics1 = _this.add.group();
        _this.row_graphics2 = _this.add.group();
        _this.row_graphics3 = _this.add.group();
        _this.row_graphics4 = _this.add.group();
        _this.row_graphics5 = _this.add.group();
        _this.row_graphics6 = _this.add.group();
        _this.row_graphics7 = _this.add.group();

        /*------------------------------------Row Sprites---------------------------------------*/
        //1st Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 6; i++)
        {
            _this.FirstRowImage.create(_this.world.centerX+x+i, _this.world.centerY-203,'sg20_2_4_image_anim1');
            _this.FirstRowImage.getChildAt(i).name = "Row_image1-"+i;
            _this.FirstRowImage.getChildAt(i).visible = false;
            _this.FirstRowImage.getChildAt(i).inputEnabled = true;
            _this.FirstRowImage.getChildAt(i).useHandCursor = true;
            _this.FirstRowImage.getChildAt(i).input.priorityID = 1;

            _this.row_graphics = _this.add.graphics(_this.world.centerX+graph1+i, _this.world.centerY-198);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 25);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics1-"+i;
            _this.row_graphics.boundsPadding = 0;            
            _this.row_graphics1.add(_this.row_graphics);

            _this.row_graphics1.getChildAt(i).inputEnabled = true;
            _this.row_graphics1.getChildAt(i).useHandCursor = true;

            _this.row_graphics1.getChildAt(i).events.onInputDown.add(_this.selected,_this); 

            x+=76;
            graph1+=76;
        }

        //2nd Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 6; i++)
        {
            _this.SecondRowImage.create(_this.world.centerX+x+i, _this.world.centerY-130,'sg20_2_4_image_anim1');
            _this.SecondRowImage.getChildAt(i).name = "Row_image2-"+i;
            _this.SecondRowImage.getChildAt(i).visible = false;
            _this.SecondRowImage.getChildAt(i).inputEnabled = true;
            _this.SecondRowImage.getChildAt(i).useHandCursor = true;
            _this.SecondRowImage.getChildAt(i).input.priorityID = 1;

            _this.row_graphics = _this.add.graphics(_this.world.centerX+graph1+i, _this.world.centerY-125);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 25);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics2-"+i;
            _this.row_graphics.boundsPadding = 0;            
            _this.row_graphics2.add(_this.row_graphics);

            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics2.getChildAt(i).useHandCursor = true;

            _this.row_graphics2.getChildAt(i).events.onInputDown.add(_this.selected,_this); 

            x+=76;
            graph1+=76;
        }

        //3rd Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 6; i++)
        {
            _this.ThirdRowImage.create(_this.world.centerX+x+i, _this.world.centerY-58,'sg20_2_4_image_anim1');
            _this.ThirdRowImage.getChildAt(i).name = "Row_image3-"+i;
            _this.ThirdRowImage.getChildAt(i).visible = false;
            _this.ThirdRowImage.getChildAt(i).inputEnabled = true;
            _this.ThirdRowImage.getChildAt(i).useHandCursor = true;
            _this.ThirdRowImage.getChildAt(i).input.priorityID = 1;

            _this.row_graphics = _this.add.graphics(_this.world.centerX+graph1+i, _this.world.centerY-52);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 25);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics3-"+i;
            _this.row_graphics.boundsPadding = 0;            
            _this.row_graphics3.add(_this.row_graphics);

            _this.row_graphics3.getChildAt(i).inputEnabled = true;
            _this.row_graphics3.getChildAt(i).useHandCursor = true;

            _this.row_graphics3.getChildAt(i).events.onInputDown.add(_this.selected,_this); 

            x+=76;
            graph1+=76;
        }

        //4th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 6; i++)
        {
            _this.FourthRowImage.create(_this.world.centerX+x+i, _this.world.centerY+14,'sg20_2_4_image_anim1');
            _this.FourthRowImage.getChildAt(i).name = "Row_image4-"+i;
            _this.FourthRowImage.getChildAt(i).visible = false;
            _this.FourthRowImage.getChildAt(i).inputEnabled = true;
            _this.FourthRowImage.getChildAt(i).useHandCursor = true;
            _this.FourthRowImage.getChildAt(i).input.priorityID = 1;

            _this.row_graphics = _this.add.graphics(_this.world.centerX+graph1+i, _this.world.centerY+20);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 25);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics4-"+i;
            _this.row_graphics.boundsPadding = 0;            
            _this.row_graphics4.add(_this.row_graphics);

            _this.row_graphics4.getChildAt(i).inputEnabled = true;
            _this.row_graphics4.getChildAt(i).useHandCursor = true;

            _this.row_graphics4.getChildAt(i).events.onInputDown.add(_this.selected,_this); 

            x+=76;
            graph1+=76;
        }

        //5th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 6; i++)
        {
            _this.FifthRowImage.create(_this.world.centerX+x+i, _this.world.centerY+87,'sg20_2_4_image_anim1');
            _this.FifthRowImage.getChildAt(i).name = "Row_image5-"+i;
            _this.FifthRowImage.getChildAt(i).visible = false;
            _this.FifthRowImage.getChildAt(i).inputEnabled = true;
            _this.FifthRowImage.getChildAt(i).useHandCursor = true;
            _this.FifthRowImage.getChildAt(i).input.priorityID = 1;

            _this.row_graphics = _this.add.graphics(_this.world.centerX+graph1+i, _this.world.centerY+92);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 25);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics5-"+i;
            _this.row_graphics.boundsPadding = 0;            
            _this.row_graphics5.add(_this.row_graphics);

            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics5.getChildAt(i).useHandCursor = true;

            _this.row_graphics5.getChildAt(i).events.onInputDown.add(_this.selected,_this); 

            x+=76;
            graph1+=76;
        }

        //6th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 6; i++)
        {
            _this.SixthRowImage.create(_this.world.centerX+x+i, _this.world.centerY+160,'sg20_2_4_image_anim1');
            _this.SixthRowImage.getChildAt(i).name = "Row_image6-"+i;
            _this.SixthRowImage.getChildAt(i).visible = false;
            _this.SixthRowImage.getChildAt(i).inputEnabled = true;
            _this.SixthRowImage.getChildAt(i).useHandCursor = true;
            _this.SixthRowImage.getChildAt(i).input.priorityID = 1;

            _this.row_graphics = _this.add.graphics(_this.world.centerX+graph1+i, _this.world.centerY+165);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 25);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics6-"+i;
            _this.row_graphics.boundsPadding = 0;            
            _this.row_graphics6.add(_this.row_graphics);

            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics6.getChildAt(i).useHandCursor = true;

            _this.row_graphics6.getChildAt(i).events.onInputDown.add(_this.selected,_this); 

            x+=76;
            graph1+=76;
        }

        //7th Row
        var x = -47;
        var graph1 = -40;
        for (var i = 0; i < 6; i++)
        {
            _this.SeventhRowImage.create(_this.world.centerX+x+i, _this.world.centerY+233,'sg20_2_4_image_anim1');
            _this.SeventhRowImage.getChildAt(i).name = "Row_image7-"+i;
            _this.SeventhRowImage.getChildAt(i).visible = false;
            _this.SeventhRowImage.getChildAt(i).inputEnabled = true;
            _this.SeventhRowImage.getChildAt(i).useHandCursor = true;
            _this.SeventhRowImage.getChildAt(i).input.priorityID = 1;

            _this.row_graphics = _this.add.graphics(_this.world.centerX+graph1+i, _this.world.centerY+238);
            _this.row_graphics.beginFill(0xFF0000, 1);
            _this.row_graphics.drawCircle(0, 0, 25);
            _this.row_graphics.alpha = 0;
            _this.row_graphics.name = "Row_Graphics7-"+i;
            _this.row_graphics.boundsPadding = 0;            
            _this.row_graphics7.add(_this.row_graphics);

            _this.row_graphics7.getChildAt(i).inputEnabled = true;
            _this.row_graphics7.getChildAt(i).useHandCursor = true;

            _this.row_graphics7.getChildAt(i).events.onInputDown.add(_this.selected,_this); 

            x+=76;
            graph1+=76;
        }

        /*------------------------------------End of Row Sprites-----------------------------------*/

        /*------------------------------------Column Sprites---------------------------------------*/
        //1st Column
        var y = 203;
        var z = 205;

        for (var i = 0; i < 6; i++)
        {
            _this.FirstColumnImage.create(_this.world.centerX-45, _this.world.centerY-y-i,'sg20_2_4_image_anim2');
            _this.FirstColumnImage.getChildAt(i).name = "Column_image1-"+i;
            _this.FirstColumnImage.getChildAt(i).visible = false;
            _this.FirstColumnImage.getChildAt(i).inputEnabled = true;
            _this.FirstColumnImage.getChildAt(i).useHandCursor = true;
            _this.FirstColumnImage.getChildAt(i).input.priorityID = 1;

            _this.FirstLeftCrossColumnImage.create(_this.world.centerX-46, _this.world.centerY-z-i,'sg20_2_4_image_anim3');
            _this.FirstLeftCrossColumnImage.getChildAt(i).name = "LeftCrossColumn_image1-"+i;
            _this.FirstLeftCrossColumnImage.getChildAt(i).visible = false;
            _this.FirstLeftCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.FirstLeftCrossColumnImage.getChildAt(i).useHandCursor = true;

            _this.FirstRightCrossColumnImage.create(_this.world.centerX-46, _this.world.centerY-z-i,'sg20_2_4_image_anim4');
            _this.FirstRightCrossColumnImage.getChildAt(i).name = "RightCrossColumn_image1-"+i;
            _this.FirstRightCrossColumnImage.getChildAt(i).visible = false;
            _this.FirstRightCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.FirstRightCrossColumnImage.getChildAt(i).useHandCursor = true;

            y-=73;
            z-=73.5;
        }

        //2nd Column
        var y = 203;
        var z = 205;

        for (var i = 0; i < 6; i++)
        {
            _this.SecondColumnImage.create(_this.world.centerX+31, _this.world.centerY-y-i,'sg20_2_4_image_anim2');
            _this.SecondColumnImage.getChildAt(i).name = "Column_image2-"+i;
            _this.SecondColumnImage.getChildAt(i).visible = false;
            _this.SecondColumnImage.getChildAt(i).inputEnabled = true;
            _this.SecondColumnImage.getChildAt(i).useHandCursor = true;
            _this.SecondColumnImage.getChildAt(i).input.priorityID = 1;

            _this.SecondLeftCrossColumnImage.create(_this.world.centerX+30, _this.world.centerY-z-i,'sg20_2_4_image_anim3');
            _this.SecondLeftCrossColumnImage.getChildAt(i).name = "LeftCrossColumn_image2-"+i;
            _this.SecondLeftCrossColumnImage.getChildAt(i).visible = false;
            _this.SecondLeftCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.SecondLeftCrossColumnImage.getChildAt(i).useHandCursor = true;

            _this.SecondRightCrossColumnImage.create(_this.world.centerX+30, _this.world.centerY-z-i,'sg20_2_4_image_anim4');
            _this.SecondRightCrossColumnImage.getChildAt(i).name = "RightCrossColumn_image2-"+i;
            _this.SecondRightCrossColumnImage.getChildAt(i).visible = false;
            _this.SecondRightCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.SecondRightCrossColumnImage.getChildAt(i).useHandCursor = true;

            y-=73;
            z-=73.5;
        }

        //3rd Column
        var y = 203;
        var z = 205;

        for (var i = 0; i < 6; i++)
        {
            _this.ThirdColumnImage.create(_this.world.centerX+108.5, _this.world.centerY-y-i,'sg20_2_4_image_anim2');
            _this.ThirdColumnImage.getChildAt(i).name = "Column_image3-"+i;
            _this.ThirdColumnImage.getChildAt(i).visible = false;
            _this.ThirdColumnImage.getChildAt(i).inputEnabled = true;
            _this.ThirdColumnImage.getChildAt(i).useHandCursor = true;
            _this.ThirdColumnImage.getChildAt(i).input.priorityID = 1;

            _this.ThirdLeftCrossColumnImage.create(_this.world.centerX+107, _this.world.centerY-z-i,'sg20_2_4_image_anim3');
            _this.ThirdLeftCrossColumnImage.getChildAt(i).name = "LeftCrossColumn_image3-"+i;
            _this.ThirdLeftCrossColumnImage.getChildAt(i).visible = false;
            _this.ThirdLeftCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.ThirdLeftCrossColumnImage.getChildAt(i).useHandCursor = true;

            _this.ThirdRightCrossColumnImage.create(_this.world.centerX+107, _this.world.centerY-z-i,'sg20_2_4_image_anim4');
            _this.ThirdRightCrossColumnImage.getChildAt(i).name = "RightCrossColumn_image3-"+i;
            _this.ThirdRightCrossColumnImage.getChildAt(i).visible = false;
            _this.ThirdRightCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.ThirdRightCrossColumnImage.getChildAt(i).useHandCursor = true;

            y-=73;
            z-=73.5;

        }

        //4th Column
        var y = 203;
        var z = 205;

        for (var i = 0; i < 6; i++)
        {
            _this.FourthColumnImage.create(_this.world.centerX+185, _this.world.centerY-y-i,'sg20_2_4_image_anim2');
            _this.FourthColumnImage.getChildAt(i).name = "Column_image4-"+i;
            _this.FourthColumnImage.getChildAt(i).visible = false;
            _this.FourthColumnImage.getChildAt(i).inputEnabled = true;
            _this.FourthColumnImage.getChildAt(i).useHandCursor = true;
            _this.FourthColumnImage.getChildAt(i).input.priorityID = 1;

            _this.FourthLeftCrossColumnImage.create(_this.world.centerX+184, _this.world.centerY-z-i,'sg20_2_4_image_anim3');
            _this.FourthLeftCrossColumnImage.getChildAt(i).name = "LeftCrossColumn_image4-"+i;
            _this.FourthLeftCrossColumnImage.getChildAt(i).visible = false;
            _this.FourthLeftCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.FourthLeftCrossColumnImage.getChildAt(i).useHandCursor = true;

            _this.FourthRightCrossColumnImage.create(_this.world.centerX+184, _this.world.centerY-z-i,'sg20_2_4_image_anim4');
            _this.FourthRightCrossColumnImage.getChildAt(i).name = "RightCrossColumn_image4-"+i;
            _this.FourthRightCrossColumnImage.getChildAt(i).visible = false;
            _this.FourthRightCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.FourthRightCrossColumnImage.getChildAt(i).useHandCursor = true;

            y-=73;
            z-=73.5;

        }

        //5th Column
        var y = 203;
        var z = 205;

        for (var i = 0; i < 6; i++)
        {
            _this.FifthColumnImage.create(_this.world.centerX+263, _this.world.centerY-y-i,'sg20_2_4_image_anim2');
            _this.FifthColumnImage.getChildAt(i).name = "Column_image5-"+i;
            _this.FifthColumnImage.getChildAt(i).visible = false;
            _this.FifthColumnImage.getChildAt(i).inputEnabled = true;
            _this.FifthColumnImage.getChildAt(i).useHandCursor = true;
            _this.FifthColumnImage.getChildAt(i).input.priorityID = 1;

            _this.FifthLeftCrossColumnImage.create(_this.world.centerX+261, _this.world.centerY-z-i,'sg20_2_4_image_anim3');
            _this.FifthLeftCrossColumnImage.getChildAt(i).name = "LeftCrossColumn_image5-"+i;
            _this.FifthLeftCrossColumnImage.getChildAt(i).visible = false;
            _this.FifthLeftCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.FifthLeftCrossColumnImage.getChildAt(i).useHandCursor = true;

            _this.FifthRightCrossColumnImage.create(_this.world.centerX+261, _this.world.centerY-z-i,'sg20_2_4_image_anim4');
            _this.FifthRightCrossColumnImage.getChildAt(i).name = "RightCrossColumn_image5-"+i;
            _this.FifthRightCrossColumnImage.getChildAt(i).visible = false;
            _this.FifthRightCrossColumnImage.getChildAt(i).inputEnabled = true;
            _this.FifthRightCrossColumnImage.getChildAt(i).useHandCursor = true;

            y-=73;
            z-=73.5;

        }

        //6th Column
        var y = 203;

        for (var i = 0; i < 6; i++)
        {
            _this.SixthColumnImage.create(_this.world.centerX+339.5, _this.world.centerY-y-i,'sg20_2_4_image_anim2');
            _this.SixthColumnImage.getChildAt(i).name = "Column_image6-"+i;
            _this.SixthColumnImage.getChildAt(i).visible = false;
            _this.SixthColumnImage.getChildAt(i).inputEnabled = true;
            _this.SixthColumnImage.getChildAt(i).useHandCursor = true;
            _this.SixthColumnImage.getChildAt(i).input.priorityID = 1;

            y-=73;
            z-=73.5;

        }

        /*------------------------------------End of Column Sprites---------------------------------------*/

    },

    gotoFirstQuestion:function(){

        _this.questionNo = 1;
        _this.ansCount = 14;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+20,'sg20_2_4_Board');
        _this.board.anchor.setTo(0.5);
        //        _this.board.scale.setTo(0.95,0.95);

        _this.hand = _this.add.sprite(50,300,'hand');
        _this.hand.scale.setTo(0.65,0.65);

        _this.time.events.add(1000,function(){
            _this.tween1 = _this.add.tween(this.hand).to({x:510,y:65},1000,'Linear',true,0);
            _this.tween1.onComplete.add(function(){
                _this.time.events.add(2500,function(){
                    _this.hand.destroy();  
                },_this);
            },_this);
        },_this);

        _this.image5 = _this.add.sprite(_this.world.centerX-192,_this.world.centerY+20,'sg20_2_4_image_anim5');
        _this.image5.anchor.setTo(0.5);
        _this.image5.name="image5";

        if(_this.wrongAnswer == false){

            _this.time.events.add(500,function(){

                commonNavBar_sg20_2_4.playDrawingSound();

                _this.image5_anim = _this.image5.animations.add('draw');
                _this.image5_anim.play(15);
                _this.image5_anim.onComplete.add(function(){
                    commonNavBar_sg20_2_4.stopDrawingSound();
                },_this);

            },_this);

        }else{

            _this.image5.frame = 37;

        }

        _this.greenSprites();

        _this.addEventListeners();

    },

    gotoSecondQuestion:function(){

        _this.questionNo = 2;
        _this.ansCount = 10;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+20,'sg20_2_4_Board');
        _this.board.anchor.setTo(0.5);

        _this.hand = _this.add.sprite(50,300,'hand');
        _this.hand.scale.setTo(0.65,0.65);

        _this.time.events.add(1000,function(){
            _this.tween1 = _this.add.tween(this.hand).to({x:510,y:140},1000,'Linear',true,0);
            _this.tween1.onComplete.add(function(){
                _this.time.events.add(3000,function(){
                    _this.hand.destroy();  
                },_this);
            },_this);
        },_this);

        _this.image7 = _this.add.sprite(_this.world.centerX-158,_this.world.centerY+20,'sg20_2_4_image_anim7');
        _this.image7.anchor.setTo(0.5);
        _this.image7.name="image7";

        if(_this.wrongAnswer == false){

            _this.time.events.add(500,function(){

                commonNavBar_sg20_2_4.playDrawingSound();

                _this.image7_anim = _this.image7.animations.add('draw');
                _this.image7_anim.play(15); 
                _this.image7_anim.onComplete.add(function(){
                    commonNavBar_sg20_2_4.stopDrawingSound();
                },_this);

            },_this);

        }else{

            _this.image7.frame=57;

        }

        _this.greenSprites();

        _this.addEventListeners();

    },

    gotoThirdQuestion:function(){

        _this.questionNo = 3;
        _this.ansCount = 16;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+20,'sg20_2_4_Board');
        _this.board.anchor.setTo(0.5);

        _this.hand = _this.add.sprite(50,300,'hand');
        _this.hand.scale.setTo(0.65,0.65);

        _this.time.events.add(1000,function(){
            _this.tween1 = _this.add.tween(this.hand).to({x:515,y:215},1000,'Linear',true,0);
            _this.tween1.onComplete.add(function(){
                _this.time.events.add(3000,function(){
                    _this.hand.destroy();  
                },_this);
            },_this);
        },_this);

        _this.image8 = _this.add.sprite(_this.world.centerX-155,_this.world.centerY+20,'sg20_2_4_image_anim8');
        _this.image8.anchor.setTo(0.5);
        _this.image8.name="image8";

        if(_this.wrongAnswer == false){

            _this.time.events.add(500,function(){

                commonNavBar_sg20_2_4.playDrawingSound();

                _this.image8_anim = _this.image8.animations.add('draw');
                _this.image8_anim.play(20); 
                _this.image8_anim.onComplete.add(function(){
                    commonNavBar_sg20_2_4.stopDrawingSound();
                },_this);

            },_this);

        }else{

            _this.image8.frame=55;

        }

        _this.greenSprites();

        _this.addEventListeners();

    },

    gotoFourthQuestion:function(){

        _this.questionNo = 4;
        _this.ansCount = 16;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+20,'sg20_2_4_Board');
        _this.board.anchor.setTo(0.5);

        _this.hand = _this.add.sprite(50,300,'hand');
        _this.hand.scale.setTo(0.65,0.65);

        _this.time.events.add(1000,function(){
            _this.tween1 = _this.add.tween(this.hand).to({x:510,y:65},1000,'Linear',true,0);
            _this.tween1.onComplete.add(function(){
                _this.time.events.add(2500,function(){
                    _this.hand.destroy(); 
                },_this);
            },_this);
        },_this);

        _this.image11 = _this.add.sprite(_this.world.centerX-156,_this.world.centerY+20,'sg20_2_4_image_anim11');
        _this.image11.anchor.setTo(0.5);
        _this.image11.name="image11";

        if(_this.wrongAnswer == false){

            _this.time.events.add(500,function(){

                commonNavBar_sg20_2_4.playDrawingSound();

                _this.image11_anim = _this.image11.animations.add('draw');
                _this.image11_anim.play(20); 
                _this.image11_anim.onComplete.add(function(){
                    commonNavBar_sg20_2_4.stopDrawingSound();
                },_this);

            },_this);

        }else{

            _this.image11.frame=46;

        }

        _this.greenSprites();

        _this.addEventListeners();

    },

    gotoFifthQuestion:function(){

        _this.questionNo = 5;
        _this.ansCount = 14;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+20,'sg20_2_4_Board');
        _this.board.anchor.setTo(0.5);

        _this.hand = _this.add.sprite(30,330,'hand');
        _this.hand.scale.setTo(0.65,0.65);

        _this.time.events.add(1000,function(){
            _this.tween1 = _this.add.tween(this.hand).to({x:510,y:65},1000,'Linear',true,0);
            _this.tween1.onComplete.add(function(){
                _this.time.events.add(3000,function(){
                    _this.hand.destroy();  
                },_this);
            },_this);
        },_this);

        _this.image9 = _this.add.sprite(_this.world.centerX-233,_this.world.centerY+20,'sg20_2_4_image_anim9');
        _this.image9.anchor.setTo(0.5);
        _this.image9.name="image9";

        if(_this.wrongAnswer == false){

            _this.time.events.add(500,function(){

                commonNavBar_sg20_2_4.playDrawingSound();
                _this.image9_anim = _this.image9.animations.add('draw');
                _this.image9_anim.play(15); 
                _this.image9_anim.onComplete.add(function(){
                    commonNavBar_sg20_2_4.stopDrawingSound();
                },_this);

            },_this);

        }else{

            _this.image9.frame=46;

        }

        _this.greenSprites();

        _this.addEventListeners();

    },

    gotoSixthQuestion:function(){

        _this.questionNo = 6;
        _this.ansCount = 14;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+20,'sg20_2_4_Board');
        _this.board.anchor.setTo(0.5);

        _this.hand = _this.add.sprite(50,300,'hand');
        _this.hand.scale.setTo(0.65,0.65);

        _this.time.events.add(500,function(){
            _this.tween1 = _this.add.tween(this.hand).to({x:510,y:65},1000,'Linear',true,0);
            _this.tween1.onComplete.add(function(){
                _this.time.events.add(3000,function(){
                    _this.hand.destroy();  
                },_this);
            },_this);
        },_this);

        _this.image12 = _this.add.sprite(_this.world.centerX-192,_this.world.centerY+20,'sg20_2_4_image_anim12');
        _this.image12.anchor.setTo(0.5);
        _this.image12.name="image5";

        if(_this.wrongAnswer == false){

            _this.time.events.add(500,function(){

                commonNavBar_sg20_2_4.playDrawingSound();

                _this.image12_anim = _this.image12.animations.add('draw');
                _this.image12_anim.play(15);
                _this.image12_anim.onComplete.add(function(){
                    commonNavBar_sg20_2_4.stopDrawingSound();
                },_this);

            },_this);

        }else{

            _this.image12.frame=44;
            
        }

        _this.greenSprites();

        _this.addEventListeners();

    },

    gotoSeventhQuestion:function(){

        _this.questionNo = 7;
        _this.ansCount = 13;

        _this.targetGrp = [];

        _this.board = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+20,'sg20_2_4_Board');
        _this.board.anchor.setTo(0.5);

        _this.hand = _this.add.sprite(50,300,'hand');
        _this.hand.scale.setTo(0.65,0.65);

        _this.time.events.add(1000,function(){
            _this.tween1 = _this.add.tween(this.hand).to({x:510,y:140},1000,'Linear',true,0);
            _this.tween1.onComplete.add(function(){
                _this.time.events.add(3000,function(){
                    _this.hand.destroy();  
                },_this);
            },_this);
        },_this);

        _this.image10 = _this.add.sprite(_this.world.centerX-156,_this.world.centerY+22,'sg20_2_4_image_anim10');
        _this.image10.anchor.setTo(0.5);
        _this.image10.name="image10";

        if(_this.wrongAnswer == false){

            _this.time.events.add(500,function(){

                commonNavBar_sg20_2_4.playDrawingSound();

                _this.image10_anim = _this.image10.animations.add('draw');
                _this.image10_anim.play(15); 
                _this.image10_anim.onComplete.add(function(){
                    commonNavBar_sg20_2_4.stopDrawingSound();
                },_this);

            },_this);

        }else{

            _this.image10.frame=66;

        }

        _this.greenSprites();

        _this.addEventListeners();

    },

    addEventListeners:function(){

        _this.tickMark = _this.add.sprite(_this.world.centerX+400,_this.world.centerY,'sg20_2_4_TickMark');
        _this.tickMark.scale.setTo(0.8);
        _this.tickMark.anchor.setTo(0.5);
        _this.tickMark.inputEnabled = true;
        _this.tickMark.input.useHandCursor = true;

    },

    DisableAllDots:function(){
        for (var i = 0; i < 6; i++)
        {
            _this.row_graphics1.getChildAt(i).inputEnabled = false;
            _this.row_graphics1.getChildAt(i).useHandCursor = false;
            _this.row_graphics2.getChildAt(i).inputEnabled = false;
            _this.row_graphics2.getChildAt(i).useHandCursor = false;
            _this.row_graphics3.getChildAt(i).inputEnabled = false;
            _this.row_graphics3.getChildAt(i).useHandCursor = false;
            _this.row_graphics4.getChildAt(i).inputEnabled = false;
            _this.row_graphics4.getChildAt(i).useHandCursor = false;
            _this.row_graphics5.getChildAt(i).inputEnabled = false;
            _this.row_graphics5.getChildAt(i).useHandCursor = false;
            _this.row_graphics6.getChildAt(i).inputEnabled = false;
            _this.row_graphics6.getChildAt(i).useHandCursor = false;
            _this.row_graphics7.getChildAt(i).inputEnabled = false;
            _this.row_graphics7.getChildAt(i).useHandCursor = false;
        }
    },

    EnableAllDots:function(){
        for (var i = 0; i < 6; i++)
        {
            _this.row_graphics1.getChildAt(i).inputEnabled = true;
            _this.row_graphics1.getChildAt(i).useHandCursor = true;
            _this.row_graphics2.getChildAt(i).inputEnabled = true;
            _this.row_graphics2.getChildAt(i).useHandCursor = true;
            _this.row_graphics3.getChildAt(i).inputEnabled = true;
            _this.row_graphics3.getChildAt(i).useHandCursor = true;
            _this.row_graphics4.getChildAt(i).inputEnabled = true;
            _this.row_graphics4.getChildAt(i).useHandCursor = true;
            _this.row_graphics5.getChildAt(i).inputEnabled = true;
            _this.row_graphics5.getChildAt(i).useHandCursor = true;
            _this.row_graphics6.getChildAt(i).inputEnabled = true;
            _this.row_graphics6.getChildAt(i).useHandCursor = true;
            _this.row_graphics7.getChildAt(i).inputEnabled = true;
            _this.row_graphics7.getChildAt(i).useHandCursor = true;
        }
    },

    selected:function(target)
    {
        console.log(target.name);
        commonNavBar_sg20_2_4.playClickSound();

        var lineName = null;
        var prevTName = null;
        var currentTName = null;
        var prevRowName = null;
        var currentRowName = null;

        if(_this.questionNo == 1){
            if(target.name == "Row_Graphics1-1"){
                _this.FirstRowImage.getChildAt(0).visible = true;
                _this.FirstRowImage.getChildAt(0).events.onInputDown.add(_this.DisappearLine,_this);
            }
        }
        if(_this.questionNo == 2){
            if(target.name == "Row_Graphics2-1"){
                _this.FirstLeftCrossColumnImage.getChildAt(0).visible = true;
                _this.FirstLeftCrossColumnImage.getChildAt(0).events.onInputDown.add(_this.DisappearLine,_this);
            }
        }
        if(_this.questionNo == 3){
            if(target.name == "Row_Graphics3-1"){
                _this.ThirdRowImage.getChildAt(0).visible = true;
                _this.ThirdRowImage.getChildAt(0).events.onInputDown.add(_this.DisappearLine,_this);
            }
        }
        if(_this.questionNo == 4){
            if(target.name == "Row_Graphics1-1"){
                _this.FirstRowImage.getChildAt(0).visible = true;
                _this.FirstRowImage.getChildAt(0).events.onInputDown.add(_this.DisappearLine,_this);
            }
        }
        if(_this.questionNo == 5){
            if(target.name == "Row_Graphics1-1"){
                _this.FirstRightCrossColumnImage.getChildAt(0).visible = true;
                _this.FirstRightCrossColumnImage.getChildAt(0).events.onInputDown.add(_this.DisappearLine,_this);
            }
        }
        if(_this.questionNo == 6){
            if(target.name == "Row_Graphics1-1"){
                _this.FirstRowImage.getChildAt(0).visible = true;
                _this.FirstRowImage.getChildAt(0).events.onInputDown.add(_this.DisappearLine,_this);
            }
        }
        if(_this.questionNo == 7){
            if(target.name == "Row_Graphics2-1"){
                _this.FirstLeftCrossColumnImage.getChildAt(0).visible = true;
                _this.FirstLeftCrossColumnImage.getChildAt(0).events.onInputDown.add(_this.DisappearLine,_this);
            }
            if(target.name == "Row_Graphics4-1"){
                _this.FirstLeftCrossColumnImage.getChildAt(2).visible = true;
                _this.FirstLeftCrossColumnImage.getChildAt(2).events.onInputDown.add(_this.DisappearLine,_this);
            }
        }

        if(_this.prevTarget)
        {
            _this.prev.push(_this.prevTarget);

            lineName = null;
            prevTName = _this.prevTarget.name.substr(-1);
            currentTName = target.name.substr(-1);

            var temp = _this.prevTarget.name.split("-");
            temp = temp[0].split("_");            
            prevRowName = temp[1].substring(8,temp[1].length);

            var temp2 = target.name.split("-");
            temp2 = temp2[0].split("_");            
            currentRowName = temp2[1].substring(8,temp2[1].length);

            if(prevTName == (Number(currentTName)-1) && prevRowName == currentRowName)
            {
                lineName = "RowImage";

                switch(prevRowName)
                {
                    case "1" :
                        _this["First"+lineName].getChildAt(prevTName).visible = true;
                        _this["First"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "2" :
                        _this["Second"+lineName].getChildAt(prevTName).visible = true;
                        _this["Second"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "3" :
                        _this["Third"+lineName].getChildAt(prevTName).visible = true;
                        _this["Third"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "4" :
                        _this["Fourth"+lineName].getChildAt(prevTName).visible = true;
                        _this["Fourth"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "5" :
                        _this["Fifth"+lineName].getChildAt(prevTName).visible = true;
                        _this["Fifth"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "6" :
                        _this["Sixth"+lineName].getChildAt(prevTName).visible = true;
                        _this["Sixth"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "7" :
                        _this["Seventh"+lineName].getChildAt(prevTName).visible = true;
                        _this["Seventh"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "8" :
                        _this["Eighth"+lineName].getChildAt(prevTName).visible = true;
                        _this["Eighth"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "9" :
                        _this["Ninth"+lineName].getChildAt(prevTName).visible = true;
                        _this["Ninth"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "10" :
                        _this["Tenth"+lineName].getChildAt(prevTName).visible = true;
                        _this["Tenth"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "11" :
                        _this["Eleventh"+lineName].getChildAt(prevTName).visible = true;
                        _this["Eleventh"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "12" :
                        _this["Twelvth"+lineName].getChildAt(prevTName).visible = true;
                        _this["Twelvth"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "13" :
                        _this["Thirteenth"+lineName].getChildAt(prevTName).visible = true;
                        _this["Thirteenth"+lineName].getChildAt(prevTName).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                } 
                //_this.prevTarget = target;
            }
            else if(prevTName == (Number(currentTName)+1) && prevRowName == currentRowName)
            {
                lineName = "RowImage";

                switch(prevRowName)
                {
                    case "1" :
                        _this["First"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["First"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "2" :
                        _this["Second"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Second"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "3" :
                        _this["Third"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Third"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "4" :
                        _this["Fourth"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Fourth"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "5" :
                        _this["Fifth"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Fifth"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "6" :
                        _this["Sixth"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Sixth"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "7" :
                        _this["Seventh"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Seventh"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "8" :
                        _this["Eighth"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Eighth"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "9" :
                        _this["Ninth"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Ninth"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "10" :
                        _this["Tenth"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Tenth"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "11" :
                        _this["Eleventh"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Eleventh"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "12" :
                        _this["Twelvth"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Twelvth"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "13" :
                        _this["Thirteenth"+lineName].getChildAt(prevTName-1).visible = true;
                        _this["Thirteenth"+lineName].getChildAt(prevTName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                } 
                //_this.prevTarget = target;
            }
            else if(prevTName == (Number(currentTName)-1) && prevRowName == (Number(currentRowName)-1))
            {

                lineName = "LeftCrossColumnImage";

                switch(prevTName)
                {
                    case "0" :
                        _this["First"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["First"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "1" :
                        _this["Second"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Second"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "2" :
                        _this["Third"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Third"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "3" :
                        _this["Fourth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Fourth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "4" :
                        _this["Fifth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Fifth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "5" :
                        _this["Sixth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Sixth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "6" :
                        _this["Seventh"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Seventh"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "7" :
                        _this["Eighth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Eighth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "8" :
                        _this["Ninth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Ninth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "9" :
                        _this["Tenth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Tenth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "10" :
                        _this["Eleventh"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Eleventh"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "11" :
                        _this["Twelvth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Twelvth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "12" :
                        _this["Thirteenth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Thirteenth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                } 
            }
            else if(prevTName == (Number(currentTName)+1) && prevRowName == (Number(currentRowName)+1))
            {

                lineName = "LeftCrossColumnImage";

                switch(currentTName)
                {
                    case "0" :
                        _this["First"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["First"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "1" :
                        _this["Second"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Second"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "2" :
                        _this["Third"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Third"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "3" :
                        _this["Fourth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Fourth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "4" :
                        _this["Fifth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Fifth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "5" :
                        _this["Sixth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Sixth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "6" :
                        _this["Seventh"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Seventh"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "7" :
                        _this["Eighth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Eighth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "8" :
                        _this["Ninth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Ninth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "9" :
                        _this["Tenth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Tenth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "10" :
                        _this["Eleventh"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Eleventh"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "11" :
                        _this["Twelvth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Twelvth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "12" :
                        _this["Thirteenth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Thirteenth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                } 
            }
            else if(prevTName == Number(currentTName) && (prevRowName == Number(currentRowName)-1))
            {

                lineName = "ColumnImage";

                switch(prevTName)
                {
                    case "0" :
                        _this["First"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["First"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "1" :
                        _this["Second"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Second"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "2" :
                        _this["Third"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Third"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "3" :
                        _this["Fourth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Fourth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "4" :
                        _this["Fifth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Fifth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "5" :
                        _this["Sixth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Sixth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "6" :
                        _this["Seventh"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Seventh"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "7" :
                        _this["Eighth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Eighth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "8" :
                        _this["Ninth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Ninth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "9" :
                        _this["Tenth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Tenth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "10" :
                        _this["Eleventh"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Eleventh"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "11" :
                        _this["Twelvth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Twelvth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "12" :
                        _this["Thirteenth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Thirteenth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                } 
            }
            else if(prevTName == Number(currentTName) && (prevRowName == Number(currentRowName)+1))
            {

                lineName = "ColumnImage";

                switch(prevTName)
                {
                    case "0" :
                        _this["First"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["First"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "1" :
                        _this["Second"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Second"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "2" :
                        _this["Third"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Third"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "3" :
                        _this["Fourth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Fourth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "4" :
                        _this["Fifth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Fifth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "5" :
                        _this["Sixth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Sixth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "6" :
                        _this["Seventh"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Seventh"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "7" :
                        _this["Eighth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Eighth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "8" :
                        _this["Ninth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Ninth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "9" :
                        _this["Tenth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Tenth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "10" :
                        _this["Eleventh"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Eleventh"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "11" :
                        _this["Twelvth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Twelvth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "12" :
                        _this["Thirteenth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Thirteenth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                } 
            }
            else if(prevTName == (Number(currentTName)+1) && prevRowName == (Number(currentRowName)-1))
            {

                lineName = "RightCrossColumnImage";

                switch(currentTName)
                {
                    case "0" :
                        _this["First"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["First"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "1" :
                        _this["Second"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Second"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "2" :
                        _this["Third"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Third"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "3" :
                        _this["Fourth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Fourth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "4" :
                        _this["Fifth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Fifth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "5" :
                        _this["Sixth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Sixth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "6" :
                        _this["Seventh"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Seventh"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "7" :
                        _this["Eighth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Eighth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "8" :
                        _this["Ninth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Ninth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "9" :
                        _this["Tenth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Tenth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "10" :
                        _this["Eleventh"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Eleventh"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "11" :
                        _this["Twelvth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Twelvth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "12" :
                        _this["Thirteenth"+lineName].getChildAt(prevRowName-1).visible = true;
                        _this["Thirteenth"+lineName].getChildAt(prevRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                } 
            }
            else if(prevTName == (Number(currentTName)-1) && prevRowName == (Number(currentRowName)+1))
            {

                lineName = "RightCrossColumnImage";

                switch(prevTName)
                {
                    case "0" :
                        _this["First"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["First"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "1" :
                        _this["Second"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Second"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "2" :
                        _this["Third"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Third"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "3" :
                        _this["Fourth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Fourth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "4" :
                        _this["Fifth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Fifth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "5" :
                        _this["Sixth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Sixth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "6" :
                        _this["Seventh"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Seventh"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "7" :
                        _this["Eighth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Eighth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "8" :
                        _this["Ninth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Ninth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "9" :
                        _this["Tenth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Tenth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "10" :
                        _this["Eleventh"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Eleventh"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "11" :
                        _this["Twelvth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Twelvth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                    case "12" :
                        _this["Thirteenth"+lineName].getChildAt(currentRowName-1).visible = true;
                        _this["Thirteenth"+lineName].getChildAt(currentRowName-1).events.onInputDown.add(_this.DisappearLine,_this);
                        break;
                } 
            }

        }

        /*if(_this.prevTarget)
            {
                if(lineName = "RowImage")
                    {
                       switch(prevRowName)
                    {
                        case "1" :

                            _this["First"+lineName].getChildAt(prevTName).visible = true;
                            break;
                        case "2" :
                            //alert("yo");
                            _this["Second"+lineName].getChildAt(prevTName).visible = true;
                            break;
                    } 
                    }

            }*/

        // --------------To get the line when on click of 2 dots-------//
        //        if(_this.prevTarget==null)
        //        {

        _this.prevTarget = target;

        //        }
        //        else
        //        {
        //            _this.prevTarget = null;
        //        }
        //--------------------------------------------------------------//

        //----------------------- TICK MARK--------------------------//
        _this.tickMark.events.onInputDown.add(function(target1){
            commonNavBar_sg20_2_4.playClickSound();
            _this.tickMark.frame = 1;
            target1.events.onInputDown.removeAll();

            if(_this.questionNo == 1){

                for(var i=0;i<_this.FirstRowImage.length;i++){
                    if(_this.FirstRowImage.getChildAt(i).visible == true){
                        if((_this.FirstRowImage.getChildAt(i).name == "Row_image1-0")||
                           (_this.FirstRowImage.getChildAt(i).name == "Row_image1-1"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdRowImage.length;i++){
                    if(_this.ThirdRowImage.getChildAt(i).visible == true){
                        if((_this.ThirdRowImage.getChildAt(i).name == "Row_image3-2")||
                           (_this.ThirdRowImage.getChildAt(i).name == "Row_image3-3"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdRowImage.getChildAt(i));
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FifthRowImage.length;i++){
                    if(_this.FifthRowImage.getChildAt(i).visible == true){
                        if((_this.FifthRowImage.getChildAt(i).name == "Row_image5-2")||
                           (_this.FifthRowImage.getChildAt(i).name == "Row_image5-3"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FifthRowImage.getChildAt(i));
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SeventhRowImage.length;i++){
                    if(_this.SeventhRowImage.getChildAt(i).visible == true){
                        if((_this.SeventhRowImage.getChildAt(i).name == "Row_image7-0")||
                           (_this.SeventhRowImage.getChildAt(i).name == "Row_image7-1"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SeventhRowImage.getChildAt(i));
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdColumnImage.length;i++){
                    if(_this.ThirdColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdColumnImage.getChildAt(i).name == "Column_image3-0")||
                           (_this.ThirdColumnImage.getChildAt(i).name == "Column_image3-1")||
                           (_this.ThirdColumnImage.getChildAt(i).name == "Column_image3-4")||
                           (_this.ThirdColumnImage.getChildAt(i).name == "Column_image3-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdColumnImage.getChildAt(i));
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FifthColumnImage.length;i++){
                    if(_this.FifthColumnImage.getChildAt(i).visible == true){
                        if((_this.FifthColumnImage.getChildAt(i).name == "Column_image5-2")||
                           (_this.FifthColumnImage.getChildAt(i).name == "Column_image5-3"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FifthColumnImage.getChildAt(i));
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }

                console.log("count  "+_this.count1);
                console.log("Ans_count  "+_this.ansCount);

                if(_this.count1 == _this.ansCount){
                    correct = true;
                }else{
                    correct = false;
                }

            }

            if(_this.questionNo == 2){

                for(var i=0;i<_this.ThirdRowImage.length;i++){
                    if(_this.ThirdRowImage.getChildAt(i).visible == true){
                        if(_this.ThirdRowImage.getChildAt(i).name == "Row_image3-1")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FifthRowImage.length;i++){
                    if(_this.FifthRowImage.getChildAt(i).visible == true){
                        if((_this.FifthRowImage.getChildAt(i).name == "Row_image5-1")||
                           (_this.FifthRowImage.getChildAt(i).name == "Row_image5-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FifthRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SeventhRowImage.length;i++){
                    if(_this.SeventhRowImage.getChildAt(i).visible == true){
                        if(_this.SeventhRowImage.getChildAt(i).name == "Row_image7-0")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SeventhRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondColumnImage.length;i++){
                    if(_this.SecondColumnImage.getChildAt(i).visible == true){
                        if((_this.SecondColumnImage.getChildAt(i).name == "Column_image2-4")||
                           (_this.SecondColumnImage.getChildAt(i).name == "Column_image2-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FirstLeftCrossColumnImage.length;i++){
                    if(_this.FirstLeftCrossColumnImage.getChildAt(i).visible == true){
                        if(_this.FirstLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image1-0"){
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondLeftCrossColumnImage.length;i++){
                    if(_this.SecondLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.SecondLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image2-1")||
                           (_this.SecondLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image2-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdLeftCrossColumnImage.length;i++){
                    if(_this.ThirdLeftCrossColumnImage.getChildAt(i).visible == true){
                        if(_this.ThirdLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image3-3")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }

                console.log("count  "+_this.count1);
                console.log("Ans_count  "+_this.ansCount);

                if(_this.count1 == _this.ansCount){
                    correct = true;
                }else{
                    correct = false;
                }

            }

            if(_this.questionNo == 3){

                for(var i=0;i<_this.ThirdRowImage.length;i++){
                    if(_this.ThirdRowImage.getChildAt(i).visible == true){
                        if(_this.ThirdRowImage.getChildAt(i).name == "Row_image3-0")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FifthRowImage.length;i++){
                    if(_this.FifthRowImage.getChildAt(i).visible == true){
                        if(_this.FifthRowImage.getChildAt(i).name == "Row_image5-0")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FifthRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FirstRowImage.length;i++){
                    if(_this.FirstRowImage.getChildAt(i).visible == true){
                        if((_this.FirstRowImage.getChildAt(i).name == "Row_image1-1")||
                           (_this.FirstRowImage.getChildAt(i).name == "Row_image1-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }

                for(var i=0;i<_this.SeventhRowImage.length;i++){
                    if(_this.SeventhRowImage.getChildAt(i).visible == true){
                        if((_this.SeventhRowImage.getChildAt(i).name == "Row_image7-1")||
                           (_this.SeventhRowImage.getChildAt(i).name == "Row_image7-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SeventhRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondColumnImage.length;i++){
                    if(_this.SecondColumnImage.getChildAt(i).visible == true){
                        if((_this.SecondColumnImage.getChildAt(i).name == "Column_image2-0")||
                           (_this.SecondColumnImage.getChildAt(i).name == "Column_image2-1")||
                           (_this.SecondColumnImage.getChildAt(i).name == "Column_image2-4")||
                           (_this.SecondColumnImage.getChildAt(i).name == "Column_image2-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FourthColumnImage.length;i++){
                    if(_this.FourthColumnImage.getChildAt(i).visible == true){
                        if((_this.FourthColumnImage.getChildAt(i).name == "Column_image4-0")||
                           (_this.FourthColumnImage.getChildAt(i).name == "Column_image4-1")||
                           (_this.FourthColumnImage.getChildAt(i).name == "Column_image4-2")||
                           (_this.FourthColumnImage.getChildAt(i).name == "Column_image4-3")||
                           (_this.FourthColumnImage.getChildAt(i).name == "Column_image4-4")||
                           (_this.FourthColumnImage.getChildAt(i).name == "Column_image4-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FourthColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                console.log("count  "+_this.count1);
                console.log("Ans_count  "+_this.ansCount);

                if(_this.count1 == _this.ansCount){
                    correct = true;

                }else{
                    correct = false;
                }

            }

            if(_this.questionNo == 4){

                for(var i=0;i<_this.FirstRowImage.length;i++){
                    if(_this.FirstRowImage.getChildAt(i).visible == true){
                        if((_this.FirstRowImage.getChildAt(i).name == "Row_image1-0")||
                           (_this.FirstRowImage.getChildAt(i).name == "Row_image1-1")||
                           (_this.FirstRowImage.getChildAt(i).name == "Row_image1-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdRowImage.length;i++){
                    if(_this.ThirdRowImage.getChildAt(i).visible == true){
                        if((_this.ThirdRowImage.getChildAt(i).name == "Row_image3-1")||
                           (_this.ThirdRowImage.getChildAt(i).name == "Row_image3-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FifthRowImage.length;i++){
                    if(_this.FifthRowImage.getChildAt(i).visible == true){
                        if((_this.FifthRowImage.getChildAt(i).name == "Row_image5-1")||
                           (_this.FifthRowImage.getChildAt(i).name == "Row_image5-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FifthRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SeventhRowImage.length;i++){
                    if(_this.SeventhRowImage.getChildAt(i).visible == true){
                        if((_this.SeventhRowImage.getChildAt(i).name == "Row_image7-0")||
                           (_this.SeventhRowImage.getChildAt(i).name == "Row_image7-1")||
                           (_this.SeventhRowImage.getChildAt(i).name == "Row_image7-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SeventhRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FourthColumnImage.length;i++){
                    if(_this.FourthColumnImage.getChildAt(i).visible == true){
                        if((_this.FourthColumnImage.getChildAt(i).name == "Column_image4-2")||
                           (_this.FourthColumnImage.getChildAt(i).name == "Column_image4-3"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FourthColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondRightCrossColumnImage.length;i++){
                    if(_this.SecondRightCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.SecondRightCrossColumnImage.getChildAt(i).name == "RightCrossColumn_image2-1"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondRightCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdRightCrossColumnImage.length;i++){
                    if(_this.ThirdRightCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdRightCrossColumnImage.getChildAt(i).name == "RightCrossColumn_image3-0"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdRightCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondLeftCrossColumnImage.length;i++){
                    if(_this.SecondLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.SecondLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image2-4"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdLeftCrossColumnImage.length;i++){
                    if(_this.ThirdLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image3-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }

                console.log("count  "+_this.count1);
                console.log("Ans_count  "+_this.ansCount);

                if(_this.count1 == _this.ansCount){
                    correct = true;
                }else{
                    correct = false;
                }
            }

            if(_this.questionNo == 5){

                for(var i=0;i<_this.FirstRightCrossColumnImage.length;i++){
                    if(_this.FirstRightCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.FirstRightCrossColumnImage.getChildAt(i).name == "RightCrossColumn_image1-0"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstRightCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FirstRowImage.length;i++){
                    if(_this.FirstRowImage.getChildAt(i).visible == true){
                        if(_this.FirstRowImage.getChildAt(i).name == "Row_image1-1")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdColumnImage.length;i++){
                    if(_this.ThirdColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdColumnImage.getChildAt(i).name == "Column_image3-0")||
                           (_this.ThirdColumnImage.getChildAt(i).name == "Column_image3-1")||
                           (_this.ThirdColumnImage.getChildAt(i).name == "Column_image3-4")||
                           (_this.ThirdColumnImage.getChildAt(i).name == "Column_image3-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdRightCrossColumnImage.length;i++){
                    if(_this.ThirdRightCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdRightCrossColumnImage.getChildAt(i).name == "RightCrossColumn_image3-1"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdRightCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FourthLeftCrossColumnImage.length;i++){
                    if(_this.FourthLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.FourthLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image4-1"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FourthLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FifthLeftCrossColumnImage.length;i++){
                    if(_this.FifthLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.FifthLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image5-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FifthLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FourthRightCrossColumnImage.length;i++){
                    if(_this.FourthRightCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.FourthRightCrossColumnImage.getChildAt(i).name == "RightCrossColumn_image4-4"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FourthRightCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FifthRightCrossColumnImage.length;i++){
                    if(_this.FifthRightCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.FifthRightCrossColumnImage.getChildAt(i).name == "RightCrossColumn_image5-3"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FifthRightCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdLeftCrossColumnImage.length;i++){
                    if(_this.ThirdLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image3-4"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SeventhRowImage.length;i++){
                    if(_this.SeventhRowImage.getChildAt(i).visible == true){
                        if(_this.SeventhRowImage.getChildAt(i).name == "Row_image7-1")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SeventhRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FirstLeftCrossColumnImage.length;i++){
                    if(_this.FirstLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.FirstLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image1-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }

                console.log("count  "+_this.count1);
                console.log("Ans_count  "+_this.ansCount);

                if(_this.count1 == _this.ansCount){
                    correct = true;
                }else{
                    correct = false;
                }
            }

            if(_this.questionNo == 6){

                for(var i=0;i<_this.FirstRowImage.length;i++){
                    if(_this.FirstRowImage.getChildAt(i).visible == true){
                        if((_this.FirstRowImage.getChildAt(i).name == "Row_image1-0")||
                           (_this.FirstRowImage.getChildAt(i).name == "Row_image1-1"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondRightCrossColumnImage.length;i++){
                    if(_this.SecondRightCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.SecondRightCrossColumnImage.getChildAt(i).name == "RightCrossColumn_image2-0"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondRightCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondLeftCrossColumnImage.length;i++){
                    if(_this.SecondLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.SecondLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image2-1"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdRowImage.length;i++){
                    if(_this.ThirdRowImage.getChildAt(i).visible == true){
                        if(_this.ThirdRowImage.getChildAt(i).name == "Row_image3-2")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdRightCrossColumnImage.length;i++){
                    if(_this.ThirdRightCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdRightCrossColumnImage.getChildAt(i).name == "RightCrossColumn_image3-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdRightCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FourthLeftCrossColumnImage.length;i++){
                    if(_this.FourthLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.FourthLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image4-4"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FourthLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdLeftCrossColumnImage.length;i++){
                    if(_this.ThirdLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image3-3")||
                           (_this.ThirdLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image3-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SixthRowImage.length;i++){
                    if(_this.SixthRowImage.getChildAt(i).visible == true){
                        if((_this.SixthRowImage.getChildAt(i).name == "Row_image6-2")||
                           (_this.SixthRowImage.getChildAt(i).name == "Row_image6-3"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SixthRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SeventhRowImage.length;i++){
                    if(_this.SeventhRowImage.getChildAt(i).visible == true){
                        if((_this.SeventhRowImage.getChildAt(i).name == "Row_image7-0")||
                           (_this.SeventhRowImage.getChildAt(i).name == "Row_image7-1")||
                           (_this.SeventhRowImage.getChildAt(i).name == "Row_image7-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SeventhRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }

                console.log("count  "+_this.count1);
                console.log("Ans_count  "+_this.ansCount);

                if(_this.count1 == _this.ansCount){
                    correct = true;
                }else{
                    correct = false;
                }
            }

            if(_this.questionNo == 7){

                for(var i=0;i<_this.FirstLeftCrossColumnImage.length;i++){
                    if(_this.FirstLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.FirstLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image1-0")||
                           (_this.FirstLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image1-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FirstLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondLeftCrossColumnImage.length;i++){
                    if(_this.SecondLeftCrossColumnImage.getChildAt(i).visible == true){
                        if(_this.SecondLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image2-1")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.ThirdLeftCrossColumnImage.length;i++){
                    if(_this.ThirdLeftCrossColumnImage.getChildAt(i).visible == true){
                        if((_this.ThirdLeftCrossColumnImage.getChildAt(i).name == "LeftCrossColumn_image3-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.ThirdLeftCrossColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FourthColumnImage.length;i++){
                    if(_this.FourthColumnImage.getChildAt(i).visible == true){
                        if((_this.FourthColumnImage.getChildAt(i).name == "Column_image4-3")||
                           (_this.FourthColumnImage.getChildAt(i).name == "Column_image4-4")||
                           (_this.FourthColumnImage.getChildAt(i).name == "Column_image4-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FourthColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SeventhRowImage.length;i++){
                    if(_this.SeventhRowImage.getChildAt(i).visible == true){
                        if((_this.SeventhRowImage.getChildAt(i).name == "Row_image7-1")||
                           (_this.SeventhRowImage.getChildAt(i).name == "Row_image7-2"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SeventhRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SixthRowImage.length;i++){
                    if(_this.SixthRowImage.getChildAt(i).visible == true){
                        if(_this.SixthRowImage.getChildAt(i).name == "Row_image6-0")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SixthRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.SecondColumnImage.length;i++){
                    if(_this.SecondColumnImage.getChildAt(i).visible == true){
                        if((_this.SecondColumnImage.getChildAt(i).name == "Column_image2-3")||
                           (_this.SecondColumnImage.getChildAt(i).name == "Column_image2-5"))
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.SecondColumnImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }
                for(var i=0;i<_this.FifthRowImage.length;i++){
                    if(_this.FifthRowImage.getChildAt(i).visible == true){
                        if(_this.FifthRowImage.getChildAt(i).name == "Row_image5-0")
                        {
                            _this.count1++;
                            _this.targetGrp.push(_this.FifthRowImage.children[i]);
                        }else{
                            _this.count1 = 0;
                        }
                    }
                }

                console.log("count  "+_this.count1);
                console.log("Ans_count  "+_this.ansCount);

                if(_this.count1 == _this.ansCount){
                    correct = true;
                }else{
                    correct = false;
                }
            }

            if(correct == true){
                console.log("correct");
                for(var i=0;i<_this.targetGrp.length;i++)
                    _this.targetGrp[i].frame = 1;
                _this.correctAns1(target);
            }else{
                console.log("wrong");
                _this.wrongAns1(target);
            }

        },_this);

    },

    DisappearLine:function(target){

        console.log("prevTarget "+_this.prevTarget.name);
        console.log("target "+target.name);
        console.log("prev Length "+_this.prev.length);
        //        console.log("prev name "+_this.prev[_this.prev.length-1].name);

        target.visible = false;

        _this.prevTarget = _this.prev[_this.prev.length-1];
        _this.prev.length--;

        //        _this.prev[_this.prev.length-1].events.onInputDown.add(function(){
        //            target.visible = true;
        //            _this.prev.length++;
        //        },_this);

        //        lastTar = target.name.substr(-1);

        //        Row_Or_Col = target.name.substring(0,3);

        //        _this.prevTarget.name = _this.prevTarget.name.substring(0, _this.prev.name.length-1) + lastTar;

    },

    correctAns1:function(target)
    {

        if(_this.image5)
            _this.image5.inputEnabled = false;
        if(_this.image6)
            _this.image6.inputEnabled = false;
        if(_this.image7)
            _this.image7.inputEnabled = false;
        if(_this.image8)
            _this.image8.inputEnabled = false;
        if(_this.image9)
            _this.image9.inputEnabled = false;
        if(_this.image10)
            _this.image10.inputEnabled = false;
        if(_this.image11)
            _this.image11.inputEnabled = false;
        if(_this.image12)
            _this.image12.inputEnabled = false;

        if(_this.FirstColumnImage)
            _this.FirstColumnImage.setAll("inputEnabled",false);
        if(_this.SecondColumnImage)
            _this.SecondColumnImage.setAll("inputEnabled",false);
        if(_this.ThirdColumnImage)
            _this.ThirdColumnImage.setAll("inputEnabled",false);
        if(_this.FourthColumnImage)
            _this.FourthColumnImage.setAll("inputEnabled",false);
        if(_this.FifthColumnImage)
            _this.FifthColumnImage.setAll("inputEnabled",false);
        if(_this.SixthColumnImage)
            _this.SixthColumnImage.setAll("inputEnabled",false);

        if(_this.FirstRowImage)
            _this.FirstRowImage.setAll("inputEnabled",false);
        if(_this.SecondRowImage)
            _this.SecondRowImage.setAll("inputEnabled",false);
        if(_this.ThirdRowImage)
            _this.ThirdRowImage.setAll("inputEnabled",false);
        if(_this.FourthRowImage)
            _this.FourthRowImage.setAll("inputEnabled",false);
        if(_this.FifthRowImage)
            _this.FifthRowImage.setAll("inputEnabled",false);
        if(_this.SixthRowImage)
            _this.SixthRowImage.setAll("inputEnabled",false);
        if(_this.SeventhRowImage)
            _this.SeventhRowImage.setAll("inputEnabled",false);

        if(_this.FirstLeftCrossColumnImage)
            _this.FirstLeftCrossColumnImage.setAll("inputEnabled",false);
        if(_this.SecondLeftCrossColumnImage)
            _this.SecondLeftCrossColumnImage.setAll("inputEnabled",false);
        if(_this.ThirdLeftCrossColumnImage)
            _this.ThirdLeftCrossColumnImage.setAll("inputEnabled",false);
        if(_this.FourthLeftCrossColumnImage)
            _this.FourthLeftCrossColumnImage.setAll("inputEnabled",false);
        if(_this.FifthLeftCrossColumnImage)
            _this.FifthLeftCrossColumnImage.setAll("inputEnabled",false);

        if(_this.FirstRightCrossColumnImage)
            _this.FirstRightCrossColumnImage.setAll("inputEnabled",false);
        if(_this.SecondRightCrossColumnImage)
            _this.SecondRightCrossColumnImage.setAll("inputEnabled",false);
        if(_this.ThirdRightCrossColumnImage)
            _this.ThirdRightCrossColumnImage.setAll("inputEnabled",false);
        if(_this.FourthRightCrossColumnImage)
            _this.FourthRightCrossColumnImage.setAll("inputEnabled",false);
        if(_this.FifthRightCrossColumnImage)
            _this.FifthRightCrossColumnImage.setAll("inputEnabled",false);
        _this.noofAttempts++;
        //_this.AnsTimerCount=0;
        _this.celebration1 = true;
        //        _this.removeListeners();
        commonNavBar_sg20_2_4.playCelebrationSound();
        this.Stararr.push(3);
        var starAnim = _this.starsGroup.getChildAt(_this.count);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();      
        _this.wrongAnswer = false;
        _this.time.events.add(2500, _this.removeCelebration1);
        target.events.onInputDown.removeAll();

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }
        _this.questionid = 1;
        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
    },

    removeListeners:function(){
        _this.crayon.inputEnabled = false;
        _this.eraser.inputEnabled = false;
    },

    wrongAns1:function(target)
    {
        target.events.onInputDown.removeAll();
        _this.noofAttempts++;
        _this.wrongAnswer = true; 

        _this.prevTarget = null;
        _this.currentTarget = null;

        if(_this.image5)
            _this.image5.destroy();
        if(_this.image6)
            _this.image6.destroy();
        if(_this.image7)
            _this.image7.destroy();
        if(_this.image8)
            _this.image8.destroy();
        if(_this.image9)
            _this.image9.destroy();
        if(_this.image10)
            _this.image10.destroy();
        if(_this.image11)
            _this.image11.destroy();
        if(_this.image12)
            _this.image12.destroy();

        if(_this.hand)
            _this.hand.destroy();

        if(_this.FirstColumnImage)
            _this.FirstColumnImage.destroy();
        if(_this.SecondColumnImage)
            _this.SecondColumnImage.destroy();
        if(_this.ThirdColumnImage)
            _this.ThirdColumnImage.destroy();
        if(_this.FourthColumnImage)
            _this.FourthColumnImage.destroy();
        if(_this.FifthColumnImage)
            _this.FifthColumnImage.destroy();
        if(_this.SixthColumnImage)
            _this.SixthColumnImage.destroy();

        if(_this.FirstRowImage)
            _this.FirstRowImage.destroy();
        if(_this.SecondRowImage)
            _this.SecondRowImage.destroy();
        if(_this.ThirdRowImage)
            _this.ThirdRowImage.destroy();
        if(_this.FourthRowImage)
            _this.FourthRowImage.destroy();
        if(_this.FifthRowImage)
            _this.FifthRowImage.destroy();
        if(_this.SixthRowImage)
            _this.SixthRowImage.destroy();
        if(_this.SeventhRowImage)
            _this.SeventhRowImage.destroy();

        if(_this.FirstLeftCrossColumnImage)
            _this.FirstLeftCrossColumnImage.destroy();
        if(_this.SecondLeftCrossColumnImage)
            _this.SecondLeftCrossColumnImage.destroy();
        if(_this.ThirdLeftCrossColumnImage)
            _this.ThirdLeftCrossColumnImage.destroy();
        if(_this.FourthLeftCrossColumnImage)
            _this.FourthLeftCrossColumnImage.destroy();
        if(_this.FifthLeftCrossColumnImage)
            _this.FifthLeftCrossColumnImage.destroy();

        if(_this.FirstRightCrossColumnImage)
            _this.FirstRightCrossColumnImage.destroy();
        if(_this.SecondRightCrossColumnImage)
            _this.SecondRightCrossColumnImage.destroy();
        if(_this.ThirdRightCrossColumnImage)
            _this.ThirdRightCrossColumnImage.destroy();
        if(_this.FourthRightCrossColumnImage)
            _this.FourthRightCrossColumnImage.destroy();
        if(_this.FifthRightCrossColumnImage)
            _this.FifthRightCrossColumnImage.destroy();

        commonNavBar_sg20_2_4.playWrongCelebrationSound();

        _this.tickMark.frame = 0;
        //        _this.crayon.destroy();
        //        _this.eraser.destroy();
        _this.board.destroy();
        _this.getQuestion();
        _this.count1 = 0;  
    },

    removeCelebration1:function()
    {

        _this.count1 = 0; 
        _this.correctCount = 0;

        _this.targetGrp = [];

        _this.prev = [];

        if(_this.timer1)
        {
            _this.timer1.stop();
        }
        _this.celebration1 = false;

        _this.tickMark.frame = 0;

        if(_this.tickMark)
            _this.tickMark.destroy();

        if(_this.image5)
            _this.image5.destroy();
        if(_this.image6)
            _this.image6.destroy();
        if(_this.image7)
            _this.image7.destroy();
        if(_this.image8)
            _this.image8.destroy();
        if(_this.image9)
            _this.image9.destroy();
        if(_this.image10)
            _this.image10.destroy();
        if(_this.image11)
            _this.image11.destroy();
        if(_this.image12)
            _this.image12.destroy();

        if(_this.FirstColumnImage)
            _this.FirstColumnImage.destroy();
        if(_this.SecondColumnImage)
            _this.SecondColumnImage.destroy();
        if(_this.ThirdColumnImage)
            _this.ThirdColumnImage.destroy();
        if(_this.FourthColumnImage)
            _this.FourthColumnImage.destroy();
        if(_this.FifthColumnImage)
            _this.FifthColumnImage.destroy();
        if(_this.SixthColumnImage)
            _this.SixthColumnImage.destroy();

        if(_this.FirstRowImage)
            _this.FirstRowImage.destroy();
        if(_this.SecondRowImage)
            _this.SecondRowImage.destroy();
        if(_this.ThirdRowImage)
            _this.ThirdRowImage.destroy();
        if(_this.FourthRowImage)
            _this.FourthRowImage.destroy();
        if(_this.FifthRowImage)
            _this.FifthRowImage.destroy();
        if(_this.SixthRowImage)
            _this.SixthRowImage.destroy();
        if(_this.SeventhRowImage)
            _this.SeventhRowImage.destroy();

        if(_this.FirstLeftCrossColumnImage)
            _this.FirstLeftCrossColumnImage.destroy();
        if(_this.SecondLeftCrossColumnImage)
            _this.SecondLeftCrossColumnImage.destroy();
        if(_this.ThirdLeftCrossColumnImage)
            _this.ThirdLeftCrossColumnImage.destroy();
        if(_this.FourthLeftCrossColumnImage)
            _this.FourthLeftCrossColumnImage.destroy();
        if(_this.FifthLeftCrossColumnImage)
            _this.FifthLeftCrossColumnImage.destroy();

        if(_this.FirstRightCrossColumnImage)
            _this.FirstRightCrossColumnImage.destroy();
        if(_this.SecondRightCrossColumnImage)
            _this.SecondRightCrossColumnImage.destroy();
        if(_this.ThirdRightCrossColumnImage)
            _this.ThirdRightCrossColumnImage.destroy();
        if(_this.FourthRightCrossColumnImage)
            _this.FourthRightCrossColumnImage.destroy();
        if(_this.FifthRightCrossColumnImage)
            _this.FifthRightCrossColumnImage.destroy();

        _this.no11++;
        if(_this.no11 < 6)
        {
            _this.board.destroy();
            //            _this.crayon.destroy();
            //            _this.eraser.destroy();
            _this.getQuestion();

            _this.starsGroup.getChildAt(_this.count+1).frame = 2; 
            _this.count++;
        }
        else
        {
            
            _this.state.start('sg20_2_4Score',true,false);
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
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/English/sg20.2.4.mp3");
        }
        else if(window.languageSelected == "Hindi")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/Hindi/sg20.2.4.mp3");
        }
        else if(window.languageSelected == "Kannada")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/Kannada/sg20.2.4.mp3");
        }
        else if(window.languageSelected == "Gujarati")
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/Gujarati/sg20.2.4.mp3");
        }
		else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/Marathi/sg20.2.4.mp3");
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/Telugu/sg20.2.4.mp3");
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/Tamil/sg20.2.4.mp3");
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/Urdu/sg20.2.4.mp3");
                    }
        else
        {
            _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg20.2.4/Odiya/sg20.2.4.mp3");
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
        //        _this.stopVoice();

        commonNavBar_sg20_2_4.stopTimer();
            commonNavBar_sg20_2_4.stopVoice();
            commonNavBar_sg20_2_4.disableNavBar();

            commonNavBar_sg20_2_4.navBar= null;
            commonNavBar_sg20_2_4.speakerbtn= null;
            commonNavBar_sg20_2_4.backbtn= null;


        _this.stopVoice();
        commonNavBar_sg20_2_4.stopVoice();
        commonNavBar_sg20_2_4.stopDrawingSound();
    }

};