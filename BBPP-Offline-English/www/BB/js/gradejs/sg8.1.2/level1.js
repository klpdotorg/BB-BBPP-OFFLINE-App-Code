Game.sg8_1_2level1=function(){};


Game.sg8_1_2level1.prototype={

    init:function(param,score)
    {
        _this = this;

        this.Stararr = param;
        this.score = score;

        telInitializer.gameIdInit("SG8_1_2",gradeSelected);
    },

    preload:function(game){
        if(!window.grade2SG5){

            window.grade2SG5 = true;

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

            this.load.atlas('SG3_1_1rightmark',window.baseUrl+'assets/gradeAssets/sg3.1.1/rightmark.png',window.baseUrl+'json/gradeJson/sg3.1.1/rightmark.json');
        

            this.load.image("sg8_1_2_A",window.baseUrl+"assets/gradeAssets/sg8.1.2/A/A.png");
        this.load.atlas("sg8_1_2_image1",window.baseUrl+"assets/gradeAssets/sg8.1.2/A/1.png",window.baseUrl+"json/gradeJson/sg8.1.2/A/1.json");
        this.load.atlas("sg8_1_2_image2",window.baseUrl+"assets/gradeAssets/sg8.1.2/A/2.png",window.baseUrl+"json/gradeJson/sg8.1.2/A/2.json");
        this.load.atlas("sg8_1_2_image3",window.baseUrl+"assets/gradeAssets/sg8.1.2/A/3.png",window.baseUrl+"json/gradeJson/sg8.1.2/A/3.json");
        
        this.load.atlas("sg8_1_2_old_image1",window.baseUrl+"assets/gradeAssets/sg8.1.2/A/1_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/A/1_old.json");
        this.load.atlas("sg8_1_2_old_image2",window.baseUrl+"assets/gradeAssets/sg8.1.2/A/2_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/A/2_old.json");
        this.load.atlas("sg8_1_2_old_image3",window.baseUrl+"assets/gradeAssets/sg8.1.2/A/3_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/A/3_old.json");
        
        //B Images
        this.load.image("sg8_1_2_B",window.baseUrl+"assets/gradeAssets/sg8.1.2/B/B.png");
        this.load.atlas("sg8_1_2_image4",window.baseUrl+"assets/gradeAssets/sg8.1.2/B/4.png",window.baseUrl+"json/gradeJson/sg8.1.2/B/4.json");   
        this.load.atlas("sg8_1_2_image5",window.baseUrl+"assets/gradeAssets/sg8.1.2/B/5.png",window.baseUrl+"json/gradeJson/sg8.1.2/B/5.json");   
        this.load.atlas("sg8_1_2_image6",window.baseUrl+"assets/gradeAssets/sg8.1.2/B/6.png",window.baseUrl+"json/gradeJson/sg8.1.2/B/6.json");
        
        this.load.atlas("sg8_1_2_old_image4",window.baseUrl+"assets/gradeAssets/sg8.1.2/B/4_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/B/4_old.json");   
        this.load.atlas("sg8_1_2_old_image5",window.baseUrl+"assets/gradeAssets/sg8.1.2/B/5_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/B/5_old.json");   
        this.load.atlas("sg8_1_2_old_image6",window.baseUrl+"assets/gradeAssets/sg8.1.2/B/6_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/B/6_old.json");
        
        //C Images
        this.load.image("sg8_1_2_C",window.baseUrl+"assets/gradeAssets/sg8.1.2/C/C.png");
        this.load.atlas("sg8_1_2_image7",window.baseUrl+"assets/gradeAssets/sg8.1.2/C/7.png",window.baseUrl+"json/gradeJson/sg8.1.2/C/7.json");   
        this.load.atlas("sg8_1_2_image8",window.baseUrl+"assets/gradeAssets/sg8.1.2/C/8.png",window.baseUrl+"json/gradeJson/sg8.1.2/C/8.json");   
        
        this.load.atlas("sg8_1_2_old_image7",window.baseUrl+"assets/gradeAssets/sg8.1.2/C/7_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/C/7_old.json");   
        this.load.atlas("sg8_1_2_old_image8",window.baseUrl+"assets/gradeAssets/sg8.1.2/C/8_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/C/8_old.json");  
        
        this.load.image("sg8_1_2_F",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/F.png");
                this.load.atlas("sg8_1_2_image17",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/17.png",window.baseUrl+"json/gradeJson/sg8.1.2/F/17.json");   
                this.load.atlas("sg8_1_2_image18",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/18.png",window.baseUrl+"json/gradeJson/sg8.1.2/F/18.json");   
                this.load.atlas("sg8_1_2_image19",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/19.png",window.baseUrl+"json/gradeJson/sg8.1.2/F/19.json");   
                this.load.atlas("sg8_1_2_image20",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/20.png",window.baseUrl+"json/gradeJson/sg8.1.2/F/20.json"); 
                
                this.load.atlas("sg8_1_2_old_image17",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/17_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/F/17_old.json");   
                this.load.atlas("sg8_1_2_old_image18",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/18_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/F/18_old.json");   
                this.load.atlas("sg8_1_2_old_image19",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/19_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/F/19_old.json");   
                this.load.atlas("sg8_1_2_old_image20",window.baseUrl+"assets/gradeAssets/sg8.1.2/F/20_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/F/20_old.json"); 
                
                this.load.image("sg8_1_2_H",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/H.png");
                this.load.atlas("sg8_1_2_image26",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/26.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/26.json");   
                this.load.atlas("sg8_1_2_image27",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/27.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/27.json");   
                this.load.atlas("sg8_1_2_image28",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/28.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/28.json");   
                this.load.atlas("sg8_1_2_image29",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/29.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/29.json");   
                this.load.atlas("sg8_1_2_image30",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/30.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/30.json");  
                
                this.load.atlas("sg8_1_2_old_image26",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/26_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/26_old.json");   
                this.load.atlas("sg8_1_2_old_image27",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/27_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/27_old.json");   
                this.load.atlas("sg8_1_2_old_image28",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/28_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/28_old.json");   
                this.load.atlas("sg8_1_2_old_image29",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/29_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/29_old.json");   
                this.load.atlas("sg8_1_2_old_image30",window.baseUrl+"assets/gradeAssets/sg8.1.2/H/30_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/H/30_old.json");  
                
                //I Images
                this.load.image("sg8_1_2_I",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/I.png");
                this.load.atlas("sg8_1_2_image31",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/31.png",window.baseUrl+"json/gradeJson/sg8.1.2/I/31.json");   
                this.load.atlas("sg8_1_2_image32",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/32.png",window.baseUrl+"json/gradeJson/sg8.1.2/I/32.json");   
                this.load.atlas("sg8_1_2_image33",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/33.png",window.baseUrl+"json/gradeJson/sg8.1.2/I/33.json");   
                this.load.atlas("sg8_1_2_image34",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/34.png",window.baseUrl+"json/gradeJson/sg8.1.2/I/34.json");
                
                this.load.atlas("sg8_1_2_old_image31",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/31_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/I/31_old.json");   
                this.load.atlas("sg8_1_2_old_image32",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/32_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/I/32_old.json");   
                this.load.atlas("sg8_1_2_old_image33",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/33_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/I/33_old.json");   
                this.load.atlas("sg8_1_2_old_image34",window.baseUrl+"assets/gradeAssets/sg8.1.2/I/34_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/I/34_old.json");
                
                this.load.image("sg8_1_2_L",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/L.png");
                this.load.atlas("sg8_1_2_image46",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/46.png",window.baseUrl+"json/gradeJson/sg8.1.2/L/46.json");   
                this.load.atlas("sg8_1_2_image47",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/47.png",window.baseUrl+"json/gradeJson/sg8.1.2/L/47.json");   
                this.load.atlas("sg8_1_2_image48",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/48.png",window.baseUrl+"json/gradeJson/sg8.1.2/L/48.json");   
                this.load.atlas("sg8_1_2_image49",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/49.png",window.baseUrl+"json/gradeJson/sg8.1.2/L/49.json"); 
                
                this.load.atlas("sg8_1_2_old_image46",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/46_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/L/46_old.json");   
                this.load.atlas("sg8_1_2_old_image47",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/47_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/L/47_old.json");   
                this.load.atlas("sg8_1_2_old_image48",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/48_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/L/48_old.json");   
                this.load.atlas("sg8_1_2_old_image49",window.baseUrl+"assets/gradeAssets/sg8.1.2/L/49_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/L/49_old.json"); 
                
                this.load.image("sg8_1_2_N",window.baseUrl+"assets/gradeAssets/sg8.1.2/N/N.png");
                this.load.atlas("sg8_1_2_image52",window.baseUrl+"assets/gradeAssets/sg8.1.2/N/52.png",window.baseUrl+"json/gradeJson/sg8.1.2/N/52.json");   
                this.load.atlas("sg8_1_2_image53",window.baseUrl+"assets/gradeAssets/sg8.1.2/N/53.png",window.baseUrl+"json/gradeJson/sg8.1.2/N/53.json");   
                this.load.atlas("sg8_1_2_image54",window.baseUrl+"assets/gradeAssets/sg8.1.2/N/54.png",window.baseUrl+"json/gradeJson/sg8.1.2/N/54.json"); 
                
                this.load.atlas("sg8_1_2_old_image52",window.baseUrl+"assets/gradeAssets/sg8.1.2/N/52_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/N/52_old.json");   
                this.load.atlas("sg8_1_2_old_image53",window.baseUrl+"assets/gradeAssets/sg8.1.2/N/53_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/N/53_old.json");   
                this.load.atlas("sg8_1_2_old_image54",window.baseUrl+"assets/gradeAssets/sg8.1.2/N/54_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/N/54_old.json"); 
                
                
        this.load.image("sg8_1_2_X",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/X.png");
        this.load.atlas("sg8_1_2_image75",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/75.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/75.json");   
        this.load.atlas("sg8_1_2_image76",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/76.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/76.json");   
        this.load.atlas("sg8_1_2_image77",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/77.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/77.json");   
        this.load.atlas("sg8_1_2_image78",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/78.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/78.json");   
        this.load.atlas("sg8_1_2_image79",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/79.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/79.json");   
        this.load.atlas("sg8_1_2_image80",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/80.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/80.json"); 
        
        this.load.atlas("sg8_1_2_old_image75",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/75_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/75_old.json");   
        this.load.atlas("sg8_1_2_old_image76",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/76_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/76_old.json");   
        this.load.atlas("sg8_1_2_old_image77",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/77_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/77_old.json");   
        this.load.atlas("sg8_1_2_old_image78",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/78_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/78_old.json");   
        this.load.atlas("sg8_1_2_old_image79",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/79_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/79_old.json");   
        this.load.atlas("sg8_1_2_old_image80",window.baseUrl+"assets/gradeAssets/sg8.1.2/X/80_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/X/80_old.json"); 
        
        //Y Images
        this.load.image("sg8_1_2_Y",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/Y.png");
        this.load.atlas("sg8_1_2_image81",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/81.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/81.json");   
        this.load.atlas("sg8_1_2_image82",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/82.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/82.json");   
        this.load.atlas("sg8_1_2_image83",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/83.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/83.json");   
        this.load.atlas("sg8_1_2_image84",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/84.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/84.json");   
        this.load.atlas("sg8_1_2_image85",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/85.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/85.json");   
        this.load.atlas("sg8_1_2_image86",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/86.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/86.json");   
        this.load.atlas("sg8_1_2_image87",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/87.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/87.json");   
        this.load.atlas("sg8_1_2_image88",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/88.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/88.json");   
        
        this.load.atlas("sg8_1_2_old_image81",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/81_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/81_old.json");   
        this.load.atlas("sg8_1_2_old_image82",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/82_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/82_old.json");   
        this.load.atlas("sg8_1_2_old_image83",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/83_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/83_old.json");   
        this.load.atlas("sg8_1_2_old_image84",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/84_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/84_old.json");   
        this.load.atlas("sg8_1_2_old_image85",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/85_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/85_old.json");   
        this.load.atlas("sg8_1_2_old_image86",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/86_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/86_old.json");   
        this.load.atlas("sg8_1_2_old_image87",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/87_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/87_old.json");   
        this.load.atlas("sg8_1_2_old_image88",window.baseUrl+"assets/gradeAssets/sg8.1.2/Y/88_old.png",window.baseUrl+"json/gradeJson/sg8.1.2/Y/88_old.json");   
        
        
        this.load.atlas("sg8_1_2_TickMark",window.baseUrl+"assets/gradeAssets/sg8.1.2/tick.png",window.baseUrl+"json/gradeJson/sg8.1.2/tick.json");


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

        _this.count1=0;
        _this.correctCount=0;

        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.opt1X=0;
        _this.opt1Y=0;
        _this.opt2X=0;
        _this.opt2Y=0;
        _this.opt3X=0;
        _this.opt3Y=0;

//                _this.qArray = new Array();
//                _this.qArray = [10];

        _this.qArray = new Array();
        _this.qArrays1 = new Array();
        _this.qArrays2 = new Array();

        _this.qArrays1 = [1,2,3,4,5];
        _this.qArrays2 = [6,7,8,9,10];

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

        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'commonBg2');

        commonNavBar_sg8_1_2.addNavBar(game);
        commonNavBar_sg8_1_2.addTimerToTheGame(game,0,0,0);
        commonNavBar_sg8_1_2.startTimer(game);

        commonNavBar_sg8_1_2.speakerbtn.events.onInputDown.add(function()
                                                       {
            commonNavBar_sg8_1_2.playClickSound();
            _this.getVoice();
        },_this);

        _this.generateStarsForTheScene(6);

        _this.getQuestion();

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
        console.log(_this.qArray[_this.no11]);

        this.getVoice(_this.qArray[_this.no11]);

        if(!_this.timer)
        {
            _this.sceneCount++;
            _this.noofAttempts = 0;
            _this.AnsTimerCount = 0;

             _this.timer = this.time.create(false);
            _this.timer.loop(1000, function(){
                      _this.AnsTimerCount++;
            }, this);
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

            case 9: 
                _this.gotoNinthQuestion();
                break;

            case 10: 
                _this.gotoTenthQuestion();
                break;

        }
    },

    gotoFirstQuestion:function(){
        //Lines - 2

        _this.questionNo = 1;
        _this.questionCount = 2;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.curve = _this.add.sprite(_this.world.centerX-70,_this.world.centerY+20,'sg8_1_2_image1');
            _this.curve.anchor.setTo(0.5);
            _this.curve.name="Curve1_1";

            _this.graphics1 = _this.add.graphics(320,275);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0xFFF, 1);
            _this.graphics1.drawRect(0, 20, 200,100);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics2 = _this.add.graphics(330,275);
            _this.graphics2.beginFill(0x027a71);
            _this.graphics2.lineStyle(1, 0xFFF, 1);
            _this.graphics2.drawRect(180, 20, 40,40);
            _this.graphics2.inputEnabled = true;
            _this.graphics2.input.priorityID = 1;
            _this.graphics2.alpha = 0;

            _this.graphics3 = _this.add.graphics(324,165);
            _this.graphics3.beginFill(0x027a71);
            _this.graphics3.lineStyle(1, 0xFFF, 1);
            _this.graphics3.drawRect(0, 0, 80,140);
            _this.graphics3.inputEnabled = true;
            _this.graphics3.input.priorityID = 1;
            _this.graphics3.alpha = 0;

            _this.graphics4 = _this.add.graphics(360,150);
            _this.graphics4.beginFill(0x027a71);
            _this.graphics4.lineStyle(1, 0xFFF, 1);
            _this.graphics4.drawRect(0, 0, 40,140);
            _this.graphics4.inputEnabled = true;
            _this.graphics4.input.priorityID = 1;
            _this.graphics4.alpha = 0;

            _this.graphics5 = _this.add.graphics(270,360);
            _this.graphics5.beginFill(0x027a71);
            _this.graphics5.lineStyle(1, 0xFFF, 1);
            _this.graphics5.drawRect(70, 20, 140,40);
            _this.graphics5.inputEnabled = true;
            _this.graphics5.input.priorityID = 1;
            _this.graphics5.alpha = 0;

            _this.graphics6 = _this.add.graphics(420,110);
            _this.graphics6.beginFill(0x027a71);
            _this.graphics6.lineStyle(1, 0xFFF, 1);
            _this.graphics6.drawRect(0, 20, 200,150);
            _this.graphics6.inputEnabled = true;
            _this.graphics6.input.priorityID = 1;
            _this.graphics6.alpha = 0;

            _this.graphics7 = _this.add.graphics(280,200);
            _this.graphics7.beginFill(0x027a71);
            _this.graphics7.lineStyle(1, 0xFFF, 1);
            _this.graphics7.drawRect(0, 0, 40,160);
            _this.graphics7.inputEnabled = true;
            _this.graphics7.input.priorityID = 1;
            _this.graphics7.alpha = 0;

            _this.line1 = _this.add.sprite(_this.world.centerX+12,_this.world.centerY+18,'sg8_1_2_image2');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line1_1";

            _this.line2 = _this.add.sprite(_this.world.centerX-69,_this.world.centerY-60,'sg8_1_2_image3');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line1_2";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.curve_anim = _this.curve.animations.add('curve',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]);
            _this.curve_anim.play(20); 
            _this.curve_anim.onComplete.add(function(){
                _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6,7,8,9]);
                _this.line1_anim.play(20); 
                _this.line1_anim.onComplete.add(function(){
                    _this.line2_anim = _this.line2.animations.add('line2',[0,1,2,3,4,5,6,7,8,9]);
                    _this.line2_anim.play(20); 	
                    _this.line2_anim.onComplete.add(function(){
                        commonNavBar_sg8_1_2.stopDrawingSound();
                        _this.curve.inputEnabled = true;
                        _this.curve.input.useHandCursor = true;
                        _this.line1.inputEnabled = true;
                        _this.line1.input.useHandCursor = true;
                        _this.line2.inputEnabled = true;
                        _this.line2.input.useHandCursor = true;
                    },_this);
                },_this);
            },_this); 

        } else {

            _this.curve = _this.add.sprite(_this.world.centerX-70,_this.world.centerY+20,'sg8_1_2_old_image1');
            _this.curve.anchor.setTo(0.5);
            _this.curve.name="Curve1_1";
            _this.curve.inputEnabled = true;
            _this.curve.input.useHandCursor = true;

            _this.line1 = _this.add.sprite(_this.world.centerX+10,_this.world.centerY+18,'sg8_1_2_old_image2');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line1_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.useHandCursor = true;

            _this.line2 = _this.add.sprite(_this.world.centerX-70,_this.world.centerY-60,'sg8_1_2_old_image3');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line1_2";
            _this.line2.inputEnabled = true;
            _this.line2.input.useHandCursor = true;
        }

        _this.shapeGroup.add(_this.curve);
        _this.shapeGroup.add(_this.line1);
        _this.shapeGroup.add(_this.line2);

        _this.curve.events.onInputDown.add(_this.selected,_this); 

        _this.line1.events.onInputDown.add(_this.selected,_this);

        _this.line2.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoSecondQuestion:function(){
        //Curve - 1

        _this.questionNo = 2;
        _this.questionCount = 1;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {

            _this.graphics1 = _this.add.graphics(255,252);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0xFFF, 1);
            _this.graphics1.drawRect(0, 20, 320,100);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics2 = _this.add.graphics(320,180);
            _this.graphics2.beginFill(0x027a71);
            _this.graphics2.lineStyle(1, 0xFFF, 1);
            _this.graphics2.drawRect(0, 20, 180,80);
            _this.graphics2.inputEnabled = true;
            _this.graphics2.input.priorityID = 1;
            _this.graphics2.alpha = 0;

            _this.graphics3 = _this.add.graphics(220,300);
            _this.graphics3.beginFill(0x027a71);
            _this.graphics3.lineStyle(1, 0xFFF, 1);
            _this.graphics3.drawRect(0, 20, 375,50);
            _this.graphics3.inputEnabled = true;
            _this.graphics3.input.priorityID = 1;
            _this.graphics3.alpha = 0;

            _this.graphics4 = _this.add.graphics(280,210);
            _this.graphics4.beginFill(0x027a71);
            _this.graphics4.lineStyle(1, 0xFFF, 1);
            _this.graphics4.drawRect(0, 20, 260,50);
            _this.graphics4.inputEnabled = true;
            _this.graphics4.input.priorityID = 1;
            _this.graphics4.alpha = 0;

            _this.graphics5 = _this.add.graphics(400,260);
            _this.graphics5.beginFill(0x027a71);
            _this.graphics5.lineStyle(1, 0xFFF, 1);
            _this.graphics5.drawCircle(0, 20, 195);
            _this.graphics5.inputEnabled = true;
            _this.graphics5.input.priorityID = 1;
            _this.graphics5.alpha = 0;

            _this.curve = _this.add.sprite(_this.world.centerX-70,_this.world.centerY+10,'sg8_1_2_image7');
            _this.curve.anchor.setTo(0.5);
            _this.curve.name="Curve2_1";

            _this.line1 = _this.add.sprite(_this.world.centerX-70,_this.world.centerY+112,'sg8_1_2_image8');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line2_1";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6,7,8,9]);
            _this.line1_anim.play(20); 
            _this.line1_anim.onComplete.add(function(){
                _this.curve_anim = _this.curve.animations.add('curve',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
                _this.curve_anim.play(20); 	
                _this.curve_anim.onComplete.add(function(){
                    commonNavBar_sg8_1_2.stopDrawingSound();
                    _this.curve.inputEnabled = true;
                    _this.curve.input.useHandCursor = true;
                    _this.line1.inputEnabled = true;
                    _this.line1.input.useHandCursor = true;
                },_this);
            },_this);

        } else {

            _this.curve = _this.add.sprite(_this.world.centerX-70,_this.world.centerY+10,'sg8_1_2_old_image7');
            _this.curve.anchor.setTo(0.5);
            _this.curve.name="Curve2_1";
            _this.curve.inputEnabled = true;
            _this.curve.input.useHandCursor = true;

            _this.line1 = _this.add.sprite(_this.world.centerX-70,_this.world.centerY+112,'sg8_1_2_old_image8');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line2_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.useHandCursor = true;

        }

        _this.shapeGroup.add(_this.curve);
        _this.shapeGroup.add(_this.line1);

        _this.curve.events.onInputDown.add(_this.selected,_this); 

        _this.line1.events.onInputDown.add(_this.selected,_this);

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoThirdQuestion:function(){
        //Curve - 1

        _this.questionNo = 3;
        _this.questionCount = 1;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.graphics1 = _this.add.graphics(250,220);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0xFFF, 1);
            _this.graphics1.drawRect(0, 20, 220,200);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics2 = _this.add.graphics(405,250);
            _this.graphics2.beginFill(0x027a71);
            _this.graphics2.lineStyle(1, 0xFFF, 1);
            _this.graphics2.drawCircle(0, 20, 280);
            _this.graphics2.inputEnabled = true;
            _this.graphics2.input.priorityID = 1;
            _this.graphics2.alpha = 0;

            _this.curve = _this.add.sprite(_this.world.centerX-67,_this.world.centerY-90,'sg8_1_2_image17');
            _this.curve.anchor.setTo(0.5);
            _this.curve.name="Curve3_1";

            _this.line1 = _this.add.sprite(_this.world.centerX+50,_this.world.centerY+83,'sg8_1_2_image18');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line3_1";

            _this.line2 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY+180,'sg8_1_2_image19');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line3_2";

            _this.line3 = _this.add.sprite(_this.world.centerX-240,_this.world.centerY+80,'sg8_1_2_image20');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line3_3";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.line3_anim = _this.line3.animations.add('line3',[0,1,2,3,4,5,6,7,8,9]);
            _this.line3_anim.play(20);
            _this.line3_anim.onComplete.add(function(){
                _this.line2_anim = _this.line2.animations.add('line2',[0,1,2,3,4,5,6,7,8,9]);
                _this.line2_anim.play(20); 		
                _this.line2_anim.onComplete.add(function(){
                    _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6,7,8,9]);
                    _this.line1_anim.play(20); 
                    _this.line1_anim.onComplete.add(function(){
                        _this.curve_anim = _this.curve.animations.add('curve',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
                        _this.curve_anim.play(20); 
                        _this.curve_anim.onComplete.add(function(){
                            commonNavBar_sg8_1_2.stopDrawingSound();
                            _this.curve.inputEnabled = true;
                            _this.curve.input.useHandCursor = true;
                            _this.line1.inputEnabled = true;
                            _this.line1.input.useHandCursor = true;
                            _this.line2.inputEnabled = true;
                            _this.line2.input.useHandCursor = true;
                            _this.line3.inputEnabled = true;
                            _this.line3.input.useHandCursor = true;
                        },_this);
                    },_this);
                },_this);
            },_this);

        } else {

            _this.curve = _this.add.sprite(_this.world.centerX-67,_this.world.centerY-90,'sg8_1_2_old_image17');
            _this.curve.anchor.setTo(0.5);
            _this.curve.name="Curve3_1";
            _this.curve.inputEnabled = true;
            _this.curve.input.useHandCursor = true;

            _this.line1 = _this.add.sprite(_this.world.centerX+50,_this.world.centerY+83,'sg8_1_2_old_image18');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line3_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.useHandCursor = true;

            _this.line2 = _this.add.sprite(_this.world.centerX-128,_this.world.centerY+180,'sg8_1_2_old_image19');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line3_2";
            _this.line2.inputEnabled = true;
            _this.line2.input.useHandCursor = true;

            _this.line3 = _this.add.sprite(_this.world.centerX-240,_this.world.centerY+80,'sg8_1_2_old_image20');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line3_3";
            _this.line3.inputEnabled = true;
            _this.line3.input.useHandCursor = true;
        }

        _this.shapeGroup.add(_this.curve);
        _this.shapeGroup.add(_this.line1);
        _this.shapeGroup.add(_this.line2);
        _this.shapeGroup.add(_this.line3);

        _this.curve.events.onInputDown.add(_this.selected,_this); 

        _this.line1.events.onInputDown.add(_this.selected,_this);

        _this.line2.events.onInputDown.add(_this.selected,_this); 

        _this.line3.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoFourthQuestion:function(){
        // Lines - 3

        _this.questionNo = 4;
        _this.questionCount = 3;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.graphics1 = _this.add.graphics(145,10);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(5, 0x027a71, 1);
            _this.graphics1.moveTo(150,420);
            _this.graphics1.lineTo(150, 150);
            _this.graphics1.lineTo(420, 420);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.line1 = _this.add.sprite(_this.world.centerX-198,_this.world.centerY+10,'sg8_1_2_image4');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line4_1";

            _this.line2 = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+168,'sg8_1_2_image5');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line4_2";

            _this.line3 = _this.add.sprite(_this.world.centerX-39,_this.world.centerY+10,'sg8_1_2_image6');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line4_3";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6,7,8,9]);
            _this.line1_anim.play(20);
            _this.line1_anim.onComplete.add(function(){
                _this.line2_anim = _this.line2.animations.add('line2',[0,1,2,3,4,5,6,7,8,9]);
                _this.line2_anim.play(20); 		
                _this.line2_anim.onComplete.add(function(){
                    _this.line3_anim = _this.line3.animations.add('line3',[0,1,2,3,4,5,6,7,8,9]);
                    _this.line3_anim.play(20); 
                    _this.line3_anim.onComplete.add(function(){
                        commonNavBar_sg8_1_2.stopDrawingSound();
                        _this.line1.inputEnabled = true;
                        _this.line1.input.priorityID = 1;
                        _this.line1.input.useHandCursor = true;
                        _this.line2.inputEnabled = true;
                        _this.line2.input.priorityID = 1;
                        _this.line2.input.useHandCursor = true;
                        _this.line3.inputEnabled = true;
                        _this.line3.input.useHandCursor = true;
                    },_this);
                },_this);
            },_this);

        } else {

            _this.line1 = _this.add.sprite(_this.world.centerX-198,_this.world.centerY+10,'sg8_1_2_old_image4');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line4_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.priorityID = 1;
            _this.line1.input.useHandCursor = true;

            _this.line2 = _this.add.sprite(_this.world.centerX-40,_this.world.centerY+168,'sg8_1_2_old_image5');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line4_2";
            _this.line2.inputEnabled = true;
            _this.line2.input.priorityID = 1;
            _this.line2.input.useHandCursor = true;

            _this.line3 = _this.add.sprite(_this.world.centerX-39,_this.world.centerY+10,'sg8_1_2_old_image6');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line4_3";
            _this.line3.inputEnabled = true;
            _this.line3.input.useHandCursor = true;
        }

        _this.shapeGroup.add(_this.line1);
        _this.shapeGroup.add(_this.line2);
        _this.shapeGroup.add(_this.line3);

        _this.line1.events.onInputDown.add(_this.selected,_this);

        _this.line2.events.onInputDown.add(_this.selected,_this); 

        _this.line3.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoFifthQuestion:function(){
        //Curves - 3

        _this.questionNo = 5;
        _this.questionCount = 3;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.graphics1 = _this.add.graphics(400,190);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0x027a71, 3);
            _this.graphics1.drawCircle(5, 40, 180);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics2 = _this.add.graphics(320,315);
            _this.graphics2.beginFill(0x027a71);
            _this.graphics2.lineStyle(1, 0x027a71, 3);
            _this.graphics2.drawCircle(5, 40, 180);
            _this.graphics2.inputEnabled = true;
            _this.graphics2.input.priorityID = 1;
            _this.graphics2.alpha = 0;

            _this.graphics3 = _this.add.graphics(470,315);
            _this.graphics3.beginFill(0x027a71);
            _this.graphics3.lineStyle(1, 0x027a71, 3);
            _this.graphics3.drawCircle(5, 40, 180);
            _this.graphics3.inputEnabled = true;
            _this.graphics3.input.priorityID = 1;
            _this.graphics3.alpha = 0;

            _this.curve1 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+90,'sg8_1_2_image54');
            _this.curve1.anchor.setTo(0.5);
            _this.curve1.name="Curve5_1";

            _this.curve2 = _this.add.sprite(_this.world.centerX+15,_this.world.centerY+90,'sg8_1_2_image53');
            _this.curve2.anchor.setTo(0.5);
            _this.curve2.name="Curve5_2";

            _this.curve3 = _this.add.sprite(_this.world.centerX-76,_this.world.centerY-77,'sg8_1_2_image52');
            _this.curve3.anchor.setTo(0.5);
            _this.curve3.name="Curve5_3";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.curve1_anim = _this.curve1.animations.add('curve1',[0,1,2,3,4,5,6,7,8,9]);
            _this.curve1_anim.play(20); 
            _this.curve1_anim.onComplete.add(function(){
                _this.curve2_anim = _this.curve2.animations.add('curve2',[0,1,2,3,4,5,6,7,8,9]);
                _this.curve2_anim.play(20); 
                _this.curve2_anim.onComplete.add(function(){
                    _this.curve3_anim = _this.curve3.animations.add('curve3',[0,1,2,3,4,5,6,7,8,9]);
                    _this.curve3_anim.play(20); 
                    _this.curve3_anim.onComplete.add(function(){
                        commonNavBar_sg8_1_2.stopDrawingSound();
                        _this.curve1.inputEnabled = true;
                        _this.curve1.input.useHandCursor = true;
                        _this.curve2.inputEnabled = true;
                        _this.curve2.input.useHandCursor = true;
                        _this.curve3.inputEnabled = true;
                        _this.curve3.input.useHandCursor = true;
                    },_this);
                },_this);
            },_this); 

        } else {

            _this.curve1 = _this.add.sprite(_this.world.centerX-170,_this.world.centerY+90,'sg8_1_2_old_image54');
            _this.curve1.anchor.setTo(0.5);
            _this.curve1.name="Curve5_1";
            _this.curve1.inputEnabled = true;
            _this.curve1.input.useHandCursor = true;

            _this.curve2 = _this.add.sprite(_this.world.centerX+15,_this.world.centerY+90,'sg8_1_2_old_image53');
            _this.curve2.anchor.setTo(0.5);
            _this.curve2.name="Curve5_2";
            _this.curve2.inputEnabled = true;
            _this.curve2.input.useHandCursor = true;

            _this.curve3 = _this.add.sprite(_this.world.centerX-76,_this.world.centerY-77,'sg8_1_2_old_image52');
            _this.curve3.anchor.setTo(0.5);
            _this.curve3.name="Curve5_3";
            _this.curve3.inputEnabled = true;
            _this.curve3.input.useHandCursor = true;
        }

        _this.shapeGroup.add(_this.curve1);
        _this.shapeGroup.add(_this.curve2);
        _this.shapeGroup.add(_this.curve3);

        _this.curve1.events.onInputDown.add(_this.selected,_this); 

        _this.curve2.events.onInputDown.add(_this.selected,_this);

        _this.curve3.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoSixthQuestion:function(){
        //Horizontal lines - 2

        _this.questionNo = 6;
        _this.questionCount = 2;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.graphics1 = _this.add.graphics(185,145);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0xFFF, 1);
            _this.graphics1.drawRect(20, 10, 260,270);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics2 = _this.add.graphics(310,10);
            _this.graphics2.beginFill(0x027a71);
            _this.graphics2.lineStyle(5, 0x027a71, 1);
            _this.graphics2.moveTo(150,410);
            _this.graphics2.lineTo(150, 150);
            _this.graphics2.lineTo(305, 410);
            _this.graphics2.inputEnabled = true;
            _this.graphics2.input.priorityID = 1;
            _this.graphics2.alpha = 0;

            _this.line1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY+20,'sg8_1_2_image34');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line6_1";

            _this.line2 = _this.add.sprite(_this.world.centerX-60,_this.world.centerY+170,'sg8_1_2_image33');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line6_2";

            _this.line3 = _this.add.sprite(_this.world.centerX+78,_this.world.centerY+20,'sg8_1_2_image32');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line6_3";

            _this.line4 = _this.add.sprite(_this.world.centerX-145,_this.world.centerY-130,'sg8_1_2_image31');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line6_4";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6,7,8,9]);
            _this.line1_anim.play(20); 
            _this.line1_anim.onComplete.add(function(){
                _this.line2_anim = _this.line2.animations.add('line2',[0,1,2,3,4,5,6,7,8,9]);
                _this.line2_anim.play(20); 
                _this.line2_anim.onComplete.add(function(){
                    _this.line3_anim = _this.line3.animations.add('line3',[0,1,2,3,4,5,6,7,8,9]);
                    _this.line3_anim.play(20); 
                    _this.line3_anim.onComplete.add(function(){
                        _this.line4_anim = _this.line4.animations.add('line4',[0,1,2,3,4,5,6,7,8,9]);
                        _this.line4_anim.play(20); 
                        _this.line4_anim.onComplete.add(function(){
                            commonNavBar_sg8_1_2.stopDrawingSound();
                            _this.line1.inputEnabled = true;
                            _this.line1.input.priorityID = 1;
                            _this.line1.input.useHandCursor = true;
                            _this.line2.inputEnabled = true;
                            _this.line2.input.priorityID = 1;
                            _this.line2.input.useHandCursor = true;
                            _this.line3.inputEnabled = true;
                            _this.line3.input.useHandCursor = true;
                            _this.line4.inputEnabled = true;
                            _this.line4.input.priorityID = 1;
                            _this.line4.input.useHandCursor = true;
                        },_this);
                    },_this);
                },_this);
            },_this); 

        } else {

            _this.line1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY+20,'sg8_1_2_old_image34');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line6_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.priorityID = 1;
            _this.line1.input.useHandCursor = true;

            _this.line2 = _this.add.sprite(_this.world.centerX-60,_this.world.centerY+170,'sg8_1_2_old_image33');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line6_2";
            _this.line2.inputEnabled = true;
            _this.line2.input.priorityID = 1;
            _this.line2.input.useHandCursor = true;

            _this.line3 = _this.add.sprite(_this.world.centerX+78,_this.world.centerY+20,'sg8_1_2_old_image32');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line6_3";
            _this.line3.inputEnabled = true;
            _this.line3.input.useHandCursor = true;

            _this.line4 = _this.add.sprite(_this.world.centerX-145,_this.world.centerY-130,'sg8_1_2_old_image31');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line6_4";
            _this.line4.inputEnabled = true;
            _this.line4.input.priorityID = 1;
            _this.line4.input.useHandCursor = true;
        }

        _this.shapeGroup.add(_this.line1);
        _this.shapeGroup.add(_this.line2);
        _this.shapeGroup.add(_this.line3);
        _this.shapeGroup.add(_this.line4);

        _this.line1.events.onInputDown.add(_this.selected,_this); 

        _this.line2.events.onInputDown.add(_this.selected,_this);

        _this.line3.events.onInputDown.add(_this.selected,_this); 

        _this.line4.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoSeventhQuestion:function(){
        //Slant lines - 4

        _this.questionNo = 7;
        _this.questionCount = 4;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.graphics1 = _this.add.graphics(240,220);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0xFFF, 1);
            _this.graphics1.drawRect(0, 10, 320,130);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics2 = _this.add.graphics(330,120);
            _this.graphics2.beginFill(0x027a71);
            _this.graphics2.lineStyle(1, 0xFFF, 1);
            _this.graphics2.drawRect(0, 10, 140,320);
            _this.graphics2.inputEnabled = true;
            _this.graphics2.input.priorityID = 1;
            _this.graphics2.alpha = 0;

            _this.graphics3 = _this.add.graphics(200,0);
            _this.graphics3.beginFill(0xffd900);
            _this.graphics3.lineStyle(5, 0xffd900, 1);
            _this.graphics3.moveTo(130,230);
            _this.graphics3.lineTo(130, 140);
            _this.graphics3.lineTo(40, 225);
            _this.graphics3.inputEnabled = true;
            _this.graphics3.input.priorityID = 1;
            _this.graphics3.alpha = 0;

            _this.graphics4 = _this.add.graphics(340,0);
            _this.graphics4.beginFill(0xffd900);
            _this.graphics4.lineStyle(5, 0xffd900, 1);
            _this.graphics4.moveTo(130,230);
            _this.graphics4.lineTo(130, 140);
            _this.graphics4.lineTo(215, 225);
            _this.graphics4.inputEnabled = true;
            _this.graphics4.input.priorityID = 1;
            _this.graphics4.alpha = 0;

            _this.graphics5 = _this.add.graphics(200,220);
            _this.graphics5.beginFill(0xffd900);
            _this.graphics5.lineStyle(5, 0xffd900, 1);
            _this.graphics5.moveTo(130,230);
            _this.graphics5.lineTo(130, 140);
            _this.graphics5.lineTo(40, 140);
            _this.graphics5.inputEnabled = true;
            _this.graphics5.input.priorityID = 1;
            _this.graphics5.alpha = 0;

            _this.graphics6 = _this.add.graphics(340,220);
            _this.graphics6.beginFill(0xffd900);
            _this.graphics6.lineStyle(5, 0xffd900, 1);
            _this.graphics6.moveTo(130,230);
            _this.graphics6.lineTo(130, 140);
            _this.graphics6.lineTo(215, 140);
            _this.graphics6.inputEnabled = true;
            _this.graphics6.input.priorityID = 1;
            _this.graphics6.alpha = 0;

            _this.line1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-100,'sg8_1_2_image88');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line7_1";

            _this.line2 = _this.add.sprite(_this.world.centerX-250,_this.world.centerY+21,'sg8_1_2_image87');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line7_2";

            _this.line3 = _this.add.sprite(_this.world.centerX-202,_this.world.centerY+142,'sg8_1_2_image86');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line7_3";

            _this.line4 = _this.add.sprite(_this.world.centerX-80,_this.world.centerY+190,'sg8_1_2_image85');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line7_4";

            _this.line5 = _this.add.sprite(_this.world.centerX+42,_this.world.centerY+142,'sg8_1_2_image84');
            _this.line5.anchor.setTo(0.5);
            _this.line5.name="Line7_5";

            _this.line6 = _this.add.sprite(_this.world.centerX+90,_this.world.centerY+21,'sg8_1_2_image83');
            _this.line6.anchor.setTo(0.5);
            _this.line6.name="Line7_6";

            _this.line7 = _this.add.sprite(_this.world.centerX+42,_this.world.centerY-100,'sg8_1_2_image82');
            _this.line7.anchor.setTo(0.5);
            _this.line7.name="Line7_7";

            _this.line8 = _this.add.sprite(_this.world.centerX-79,_this.world.centerY-149,'sg8_1_2_image81');
            _this.line8.anchor.setTo(0.5);
            _this.line8.name="Line7_8";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6,7,8,9]);
            _this.line1_anim.play(20); 
            _this.line1_anim.onComplete.add(function(){
                _this.line2_anim = _this.line2.animations.add('line2',[0,1,2,3,4,5,6,7,8,9]);
                _this.line2_anim.play(20); 
                _this.line2_anim.onComplete.add(function(){
                    _this.line3_anim = _this.line3.animations.add('line3',[0,1,2,3,4,5,6,7,8,9]);
                    _this.line3_anim.play(20); 
                    _this.line3_anim.onComplete.add(function(){
                        _this.line4_anim = _this.line4.animations.add('line4',[0,1,2,3,4,5,6,7,8,9]);
                        _this.line4_anim.play(20); 
                        _this.line4_anim.onComplete.add(function(){
                            _this.line5_anim = _this.line5.animations.add('line5',[0,1,2,3,4,5,6,7,8,9]);
                            _this.line5_anim.play(20); 
                            _this.line5_anim.onComplete.add(function(){
                                _this.line6_anim = _this.line6.animations.add('line6',[0,1,2,3,4,5,6,7,8,9]);
                                _this.line6_anim.play(20); 
                                _this.line6_anim.onComplete.add(function(){
                                    _this.line7_anim = _this.line7.animations.add('line7',[0,1,2,3,4,5,6,7,8,9]);
                                    _this.line7_anim.play(20); 
                                    _this.line7_anim.onComplete.add(function(){
                                        _this.line8_anim = _this.line8.animations.add('line8',[0,1,2,3,4,5,6,7,8,9]);
                                        _this.line8_anim.play(20); 
                                        _this.line8_anim.onComplete.add(function(){
                                            commonNavBar_sg8_1_2.stopDrawingSound();
                                            _this.line1.inputEnabled = true;
                                            _this.line1.input.useHandCursor = true;
                                            _this.line2.inputEnabled = true;
                                            _this.line2.input.useHandCursor = true;
                                            _this.line3.inputEnabled = true;
                                            _this.line3.input.useHandCursor = true;
                                            _this.line4.inputEnabled = true;
                                            _this.line4.input.useHandCursor = true;
                                            _this.line5.inputEnabled = true;
                                            _this.line5.input.useHandCursor = true;
                                            _this.line6.inputEnabled = true;
                                            _this.line6.input.useHandCursor = true;
                                            _this.line7.inputEnabled = true;
                                            _this.line7.input.useHandCursor = true;
                                            _this.line8.inputEnabled = true;
                                            _this.line8.input.useHandCursor = true;
                                        },_this);
                                    },_this);
                                },_this);
                            },_this);
                        },_this);
                    },_this);
                },_this);
            },_this); 

        } else {

            _this.line1 = _this.add.sprite(_this.world.centerX-200,_this.world.centerY-100,'sg8_1_2_old_image88');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line7_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.useHandCursor = true;

            _this.line2 = _this.add.sprite(_this.world.centerX-250,_this.world.centerY+21,'sg8_1_2_old_image87');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line7_2";
            _this.line2.inputEnabled = true;
            _this.line2.input.useHandCursor = true;

            _this.line3 = _this.add.sprite(_this.world.centerX-202,_this.world.centerY+142,'sg8_1_2_old_image86');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line7_3";
            _this.line3.inputEnabled = true;
            _this.line3.input.useHandCursor = true;

            _this.line4 = _this.add.sprite(_this.world.centerX-80,_this.world.centerY+190,'sg8_1_2_old_image85');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line7_4";
            _this.line4.inputEnabled = true;
            _this.line4.input.useHandCursor = true;

            _this.line5 = _this.add.sprite(_this.world.centerX+42,_this.world.centerY+142,'sg8_1_2_old_image84');
            _this.line5.anchor.setTo(0.5);
            _this.line5.name="Line7_5";
            _this.line5.inputEnabled = true;
            _this.line5.input.useHandCursor = true;

            _this.line6 = _this.add.sprite(_this.world.centerX+90,_this.world.centerY+21,'sg8_1_2_old_image83');
            _this.line6.anchor.setTo(0.5);
            _this.line6.name="Line7_6";
            _this.line6.inputEnabled = true;
            _this.line6.input.useHandCursor = true;

            _this.line7 = _this.add.sprite(_this.world.centerX+42,_this.world.centerY-100,'sg8_1_2_old_image82');
            _this.line7.anchor.setTo(0.5);
            _this.line7.name="Line7_7";
            _this.line7.inputEnabled = true;
            _this.line7.input.useHandCursor = true;

            _this.line8 = _this.add.sprite(_this.world.centerX-79,_this.world.centerY-149,'sg8_1_2_old_image81');
            _this.line8.anchor.setTo(0.5);
            _this.line8.name="Line7_8";
            _this.line8.inputEnabled = true;
            _this.line8.input.useHandCursor = true;
        }

        _this.shapeGroup.add(_this.line1);
        _this.shapeGroup.add(_this.line2);
        _this.shapeGroup.add(_this.line3);
        _this.shapeGroup.add(_this.line4);
        _this.shapeGroup.add(_this.line5);
        _this.shapeGroup.add(_this.line6);
        _this.shapeGroup.add(_this.line7);
        _this.shapeGroup.add(_this.line8);

        _this.line1.events.onInputDown.add(_this.selected,_this); 
        _this.line2.events.onInputDown.add(_this.selected,_this);
        _this.line3.events.onInputDown.add(_this.selected,_this); 
        _this.line4.events.onInputDown.add(_this.selected,_this); 
        _this.line5.events.onInputDown.add(_this.selected,_this); 
        _this.line6.events.onInputDown.add(_this.selected,_this); 
        _this.line7.events.onInputDown.add(_this.selected,_this); 
        _this.line8.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoEighthQuestion:function(){
        //Vertical lines - 3

        _this.questionNo = 8;
        _this.questionCount = 3;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.graphics1 = _this.add.graphics(200,200);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0xFFF, 1);
            _this.graphics1.drawRect(5, 30, 240,120);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics2 = _this.add.graphics(490,290);
            _this.graphics2.beginFill(0x027a71);
            _this.graphics2.lineStyle(1, 0x027a71, 3);
            _this.graphics2.drawCircle(5, 0, 190);
            _this.graphics2.inputEnabled = true;
            _this.graphics2.input.priorityID = 1;
            _this.graphics2.alpha = 0;

            _this.graphics3 = _this.add.graphics(490,240);
            _this.graphics3.beginFill(0x027a71);
            _this.graphics3.lineStyle(1, 0x027a71, 3);
            _this.graphics3.drawCircle(5, 0, 150);
            _this.graphics3.inputEnabled = true;
            _this.graphics3.input.priorityID = 1;
            _this.graphics3.alpha = 0;

            _this.graphics4 = _this.add.graphics(490,335);
            _this.graphics4.beginFill(0x027a71);
            _this.graphics4.lineStyle(1, 0x027a71, 3);
            _this.graphics4.drawCircle(5, 0, 150);
            _this.graphics4.inputEnabled = true;
            _this.graphics4.input.priorityID = 1;
            _this.graphics4.alpha = 0;

            _this.graphics5 = _this.add.graphics(420,150);
            _this.graphics5.beginFill(0x027a71);
            _this.graphics5.lineStyle(1, 0xFFF, 1);
            _this.graphics5.drawRect(0, 10, 60,260);
            _this.graphics5.inputEnabled = true;
            _this.graphics5.input.priorityID = 1;
            _this.graphics5.alpha = 0;

            _this.line1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY+20,'sg8_1_2_image78');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line8_1";

            _this.line2 = _this.add.sprite(_this.world.centerX-175,_this.world.centerY+89,'sg8_1_2_image77');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line8_2";

            _this.line3 = _this.add.sprite(_this.world.centerX-67,_this.world.centerY+123,'sg8_1_2_image76');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line8_3";

            _this.curve = _this.add.sprite(_this.world.centerX+24,_this.world.centerY+20,'sg8_1_2_image75');
            _this.curve.anchor.setTo(0.5);
            _this.curve.name="Curve8_4";

            _this.line4 = _this.add.sprite(_this.world.centerX-68,_this.world.centerY-84,'sg8_1_2_image80');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line8_5";

            _this.line5 = _this.add.sprite(_this.world.centerX-175,_this.world.centerY-50,'sg8_1_2_image79');
            _this.line5.anchor.setTo(0.5);
            _this.line5.name="Line8_6";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6]);
            _this.line1_anim.play(20); 
            _this.line1_anim.onComplete.add(function(){
                _this.line2_anim = _this.line2.animations.add('line2',[0,1,2,3,4,5,6,7,8,9]);
                _this.line2_anim.play(20); 
                _this.line2_anim.onComplete.add(function(){
                    _this.line3_anim = _this.line3.animations.add('line3',[0,1,2,3,4]);
                    _this.line3_anim.play(20); 
                    _this.line3_anim.onComplete.add(function(){
                        _this.curve_anim = _this.curve.animations.add('curve',[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
                        _this.curve_anim.play(20); 
                        _this.curve_anim.onComplete.add(function(){
                            _this.line4_anim = _this.line4.animations.add('line4',[0,1,2,3,4,5]);
                            _this.line4_anim.play(20); 
                            _this.line4_anim.onComplete.add(function(){
                                _this.line5_anim = _this.line5.animations.add('line5',[0,1,2,3,4,5,6,7,8,9]);
                                _this.line5_anim.play(20); 
                                _this.line5_anim.onComplete.add(function(){
                                    commonNavBar_sg8_1_2.stopDrawingSound();
                                    _this.line1.inputEnabled = true;
                                    _this.line1.input.priorityID = 1;
                                    _this.line1.input.useHandCursor = true;
                                    _this.line2.inputEnabled = true;
                                    _this.line2.input.priorityID = 1;
                                    _this.line2.input.useHandCursor = true;
                                    _this.line3.inputEnabled = true;
                                    _this.line3.input.priorityID = 1;
                                    _this.line3.input.useHandCursor = true;
                                    _this.curve.inputEnabled = true;
                                    _this.curve.input.useHandCursor = true;
                                    _this.line4.inputEnabled = true;
                                    _this.line4.input.priorityID = 1;
                                    _this.line4.input.useHandCursor = true;
                                    _this.line5.inputEnabled = true;
                                    _this.line5.input.useHandCursor = true;
                                },_this);
                            },_this);
                        },_this);
                    },_this);
                },_this);
            },_this); 

        } else {

            _this.line1 = _this.add.sprite(_this.world.centerX-280,_this.world.centerY+20,'sg8_1_2_old_image78');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line8_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.priorityID = 1;
            _this.line1.input.useHandCursor = true;

            _this.line2 = _this.add.sprite(_this.world.centerX-175,_this.world.centerY+89,'sg8_1_2_old_image77');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line8_2";
            _this.line2.inputEnabled = true;
            _this.line2.input.priorityID = 1;
            _this.line2.input.useHandCursor = true;

            _this.line3 = _this.add.sprite(_this.world.centerX-67,_this.world.centerY+123,'sg8_1_2_old_image76');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line8_3";
            _this.line3.inputEnabled = true;
            _this.line3.input.priorityID = 1;
            _this.line3.input.useHandCursor = true;

            _this.curve = _this.add.sprite(_this.world.centerX+24,_this.world.centerY+20,'sg8_1_2_old_image75');
            _this.curve.anchor.setTo(0.5);
            _this.curve.name="Curve8_4";
            _this.curve.inputEnabled = true;
            _this.curve.input.useHandCursor = true;

            _this.line4 = _this.add.sprite(_this.world.centerX-68,_this.world.centerY-84,'sg8_1_2_old_image80');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line8_5";
            _this.line4.inputEnabled = true;
            _this.line4.input.priorityID = 1;
            _this.line4.input.useHandCursor = true;

            _this.line5 = _this.add.sprite(_this.world.centerX-175,_this.world.centerY-50,'sg8_1_2_old_image79');
            _this.line5.anchor.setTo(0.5);
            _this.line5.name="Line8_6";
            _this.line5.inputEnabled = true;
            _this.line5.input.useHandCursor = true;
        }

        _this.shapeGroup.add(_this.line1);
        _this.shapeGroup.add(_this.line2);
        _this.shapeGroup.add(_this.line3);
        _this.shapeGroup.add(_this.curve);
        _this.shapeGroup.add(_this.line4);
        _this.shapeGroup.add(_this.line5);

        _this.line1.events.onInputDown.add(_this.selected,_this); 

        _this.line2.events.onInputDown.add(_this.selected,_this);

        _this.line3.events.onInputDown.add(_this.selected,_this); 

        _this.curve.events.onInputDown.add(_this.selected,_this); 

        _this.line4.events.onInputDown.add(_this.selected,_this); 

        _this.line5.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoNinthQuestion:function(){
        //Horizontal lines - 2

        _this.questionNo = 9;
        _this.questionCount = 2;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.graphics1 = _this.add.graphics(335,145);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0xFFF, 1);
            _this.graphics1.drawRect(0, 10, 140,280);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics2 = _this.add.graphics(210,15);
            _this.graphics2.beginFill(0xffd900);
            _this.graphics2.lineStyle(5, 0xffd900, 1);
            _this.graphics2.moveTo(130,420);
            _this.graphics2.lineTo(130, 140);
            _this.graphics2.lineTo(10, 140);
            _this.graphics2.inputEnabled = true;
            _this.graphics2.input.priorityID = 1;
            _this.graphics2.alpha = 0;

            _this.graphics3 = _this.add.graphics(340,15);
            _this.graphics3.beginFill(0xffd900);
            _this.graphics3.lineStyle(5, 0xffd900, 1);
            _this.graphics3.moveTo(130,420);
            _this.graphics3.lineTo(130, 140);
            _this.graphics3.lineTo(295, 140);
            _this.graphics3.inputEnabled = true;
            _this.graphics3.input.priorityID = 1;
            _this.graphics3.alpha = 0;

            _this.line1 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY+25,'sg8_1_2_image49');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line9_1";

            _this.line2 = _this.add.sprite(_this.world.centerX-75,_this.world.centerY+173,'sg8_1_2_image48');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line9_2";

            _this.line3 = _this.add.sprite(_this.world.centerX+88,_this.world.centerY+25,'sg8_1_2_image47');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line9_3";

            _this.line4 = _this.add.sprite(_this.world.centerX-51,_this.world.centerY-125,'sg8_1_2_image46');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line9_4";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6,7,8,9]);
            _this.line1_anim.play(20); 
            _this.line1_anim.onComplete.add(function(){
                _this.line2_anim = _this.line2.animations.add('line2',[0,1,2,3,4,5,6,7,8,9]);
                _this.line2_anim.play(20); 
                _this.line2_anim.onComplete.add(function(){
                    _this.line3_anim = _this.line3.animations.add('line3',[0,1,2,3,4,5,6,7,8,9]);
                    _this.line3_anim.play(20); 
                    _this.line3_anim.onComplete.add(function(){
                        _this.line4_anim = _this.line4.animations.add('line4',[0,1,2,3,4,5,6,7,8,9,10,11,12]);
                        _this.line4_anim.play(20); 
                        _this.line4_anim.onComplete.add(function(){
                            commonNavBar_sg8_1_2.stopDrawingSound();
                            _this.line1.inputEnabled = true;
                            _this.line1.input.useHandCursor = true;
                            _this.line2.inputEnabled = true;
                            _this.line2.input.priorityID = 1;
                            _this.line2.input.useHandCursor = true;
                            _this.line3.inputEnabled = true;
                            _this.line3.input.useHandCursor = true;
                            _this.line4.inputEnabled = true;
                            _this.line4.input.priorityID = 1;
                            _this.line4.input.useHandCursor = true;
                        },_this);  
                    },_this);
                },_this);
            },_this); 

        } else {

            _this.line1 = _this.add.sprite(_this.world.centerX-215,_this.world.centerY+25,'sg8_1_2_old_image49');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line9_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.useHandCursor = true;

            _this.line2 = _this.add.sprite(_this.world.centerX-75,_this.world.centerY+173,'sg8_1_2_old_image48');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line9_2";
            _this.line2.inputEnabled = true;
            _this.line2.input.priorityID = 1;
            _this.line2.input.useHandCursor = true;

            _this.line3 = _this.add.sprite(_this.world.centerX+88,_this.world.centerY+25,'sg8_1_2_old_image47');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line9_3";
            _this.line3.inputEnabled = true;
            _this.line3.input.useHandCursor = true;

            _this.line4 = _this.add.sprite(_this.world.centerX-51,_this.world.centerY-125,'sg8_1_2_old_image46');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line9_4";
            _this.line4.inputEnabled = true;
            _this.line4.input.priorityID = 1;
            _this.line4.input.useHandCursor = true;
        }

        _this.shapeGroup.add(_this.line1);
        _this.shapeGroup.add(_this.line2);
        _this.shapeGroup.add(_this.line3);
        _this.shapeGroup.add(_this.line4);

        _this.line1.events.onInputDown.add(_this.selected,_this); 

        _this.line2.events.onInputDown.add(_this.selected,_this);

        _this.line3.events.onInputDown.add(_this.selected,_this); 

        _this.line4.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    gotoTenthQuestion:function(){
        //Slant lines - 2

        _this.questionNo = 10;
        _this.questionCount = 2;

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();
        _this.shapeGroup = _this.add.group();

        if(_this.wrongAnswer == false)
        {
            _this.graphics1 = _this.add.graphics(277,240);
            _this.graphics1.beginFill(0x027a71);
            _this.graphics1.lineStyle(1, 0xFFF, 1);
            _this.graphics1.drawRect(0, 10, 265,192);
            _this.graphics1.inputEnabled = true;
            _this.graphics1.input.priorityID = 1;
            _this.graphics1.alpha = 0;

            _this.graphics3 = _this.add.graphics(0,0);
            _this.graphics3.beginFill(0xffd900);
            _this.graphics3.lineStyle(5, 0xffd900, 1);
            _this.graphics3.moveTo(410,130);
            _this.graphics3.lineTo(280, 250);
            _this.graphics3.lineTo(540, 250);
            _this.graphics3.inputEnabled = true;
            _this.graphics3.input.priorityID = 1;
            _this.graphics3.alpha = 0;

            _this.line1 = _this.add.sprite(_this.world.centerX-143,_this.world.centerY-88,'sg8_1_2_image30');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line10_1";

            _this.line2 = _this.add.sprite(_this.world.centerX-210,_this.world.centerY+80,'sg8_1_2_image29');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line10_2";

            _this.line3 = _this.add.sprite(_this.world.centerX-70,_this.world.centerY+180,'sg8_1_2_image28');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line10_3";

            _this.line4 = _this.add.sprite(_this.world.centerX+70,_this.world.centerY+80,'sg8_1_2_image27');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line10_4";

            _this.line5 = _this.add.sprite(_this.world.centerX+3,_this.world.centerY-88,'sg8_1_2_image26');
            _this.line5.anchor.setTo(0.5);
            _this.line5.name="Line10_5";

            commonNavBar_sg8_1_2.playDrawingSound();

            _this.line1_anim = _this.line1.animations.add('line1',[0,1,2,3,4,5,6,7,8,9]);
            _this.line1_anim.play(20); 
            _this.line1_anim.onComplete.add(function(){
                _this.line2_anim = _this.line2.animations.add('line2',[0,1,2,3,4,5,6,7,8,9]);
                _this.line2_anim.play(20); 
                _this.line2_anim.onComplete.add(function(){
                    _this.line3_anim = _this.line3.animations.add('line3',[0,1,2,3,4,5,6,7,8,9]);
                    _this.line3_anim.play(20); 
                    _this.line3_anim.onComplete.add(function(){
                        _this.line4_anim = _this.line4.animations.add('line4',[0,1,2,3,4,5,6,7,8,9]);
                        _this.line4_anim.play(20); 
                        _this.line4_anim.onComplete.add(function(){
                            _this.line5_anim = _this.line5.animations.add('line5',[0,1,2,3,4,5,6,7,8,9]);
                            _this.line5_anim.play(20); 
                            _this.line5_anim.onComplete.add(function(){
                                commonNavBar_sg8_1_2.stopDrawingSound();
                                _this.line1.inputEnabled = true;
                                _this.line1.input.useHandCursor = true;
                                _this.line2.inputEnabled = true;
                                _this.line2.input.useHandCursor = true;
                                _this.line3.inputEnabled = true;
                                _this.line3.input.useHandCursor = true;
                                _this.line4.inputEnabled = true;
                                _this.line4.input.useHandCursor = true;
                                _this.line5.inputEnabled = true;
                                _this.line5.input.useHandCursor = true;
                            },_this);
                        },_this);
                    },_this);
                },_this);
            },_this);

        } else {

            _this.line1 = _this.add.sprite(_this.world.centerX-143,_this.world.centerY-88,'sg8_1_2_old_image30');
            _this.line1.anchor.setTo(0.5);
            _this.line1.name="Line10_1";
            _this.line1.inputEnabled = true;
            _this.line1.input.useHandCursor = true;

            _this.line2 = _this.add.sprite(_this.world.centerX-210,_this.world.centerY+80,'sg8_1_2_old_image29');
            _this.line2.anchor.setTo(0.5);
            _this.line2.name="Line10_2";
            _this.line2.inputEnabled = true;
            _this.line2.input.useHandCursor = true;

            _this.line3 = _this.add.sprite(_this.world.centerX-70,_this.world.centerY+180,'sg8_1_2_old_image28');
            _this.line3.anchor.setTo(0.5);
            _this.line3.name="Line10_3";
            _this.line3.inputEnabled = true;
            _this.line3.input.useHandCursor = true;

            _this.line4 = _this.add.sprite(_this.world.centerX+70,_this.world.centerY+80,'sg8_1_2_old_image27');
            _this.line4.anchor.setTo(0.5);
            _this.line4.name="Line10_4";
            _this.line4.inputEnabled = true;
            _this.line4.input.useHandCursor = true;

            _this.line5 = _this.add.sprite(_this.world.centerX+3,_this.world.centerY-88,'sg8_1_2_old_image26');
            _this.line5.anchor.setTo(0.5);
            _this.line5.name="Line10_5";
            _this.line5.inputEnabled = true;
            _this.line5.input.useHandCursor = true;

        }

        _this.shapeGroup.add(_this.line1);
        _this.shapeGroup.add(_this.line2);
        _this.shapeGroup.add(_this.line3);
        _this.shapeGroup.add(_this.line4);
        _this.shapeGroup.add(_this.line5);

        _this.line1.events.onInputDown.add(_this.selected,_this); 
        _this.line2.events.onInputDown.add(_this.selected,_this);
        _this.line3.events.onInputDown.add(_this.selected,_this); 
        _this.line4.events.onInputDown.add(_this.selected,_this); 
        _this.line5.events.onInputDown.add(_this.selected,_this); 

        _this.tickMark = this.add.sprite(830,270,'sg8_1_2_TickMark');
        _this.tickMark.anchor.setTo(0.5);

    },

    unselect:function(target){

        _this.count1--; 
        console.log("Count val "+_this.count1);
        commonNavBar_sg8_1_2.playClickSound();
        target.events.onInputDown.removeAll();
        target.frame = target.frame - 1;

        //        if(_this.count1 < _this.questionCount){
        //			_this.tickMark.inputEnabled = false; 
        //			_this.tickMark.input.useHandCursor = false; 
        //		}

        target.events.onInputDown.add(_this.selected,_this);

        this.targetGroup.splice( this.targetGroup.indexOf(target), 1 );

    },

    selected:function(target){
        _this.count1++; 

        console.log("Count val "+_this.count1);
        console.log("Ans Count "+_this.questionCount);
        wrongtemp=0;

        _this.tickMark.inputEnabled = true; 
        _this.tickMark.input.useHandCursor = true; 
        _this.tickMark.name="click";

        commonNavBar_sg8_1_2.playClickSound();

        _this.targetGroup.push(target);     //Pushing the selected values into 'targetGroup'

        target.events.onInputDown.removeAll();

        target.events.onInputDown.add(_this.unselect,_this);

        //        if(_this.count1 >= _this.questionCount){
        //			_this.tickMark.inputEnabled = true; 
        //			_this.tickMark.input.useHandCursor = true; 
        //			_this.tickMark.name="click";
        //		}

        target.frame = target.frame + 1;

        _this.tickMark.events.onInputDown.add(function(target1){

            commonNavBar_sg8_1_2.playClickSound();

            _this.tickMark.frame = 1;

            target1.events.onInputDown.removeAll();

            console.log(_this.targetGroup.length);

            if(_this.questionNo == 1){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.correctCount);
                    if(_this.targetGroup[i].name == "Line1_1" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line1_2" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 2) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 2){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Curve2_1" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 1) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 3){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Curve3_1" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 1) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 4){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Line4_1" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line4_2" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line4_3" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 3) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 5){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Curve5_1" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Curve5_2" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Curve5_3" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 3) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 6){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Line6_2" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line6_4" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 2) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 7){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Line7_1" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line7_3" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line7_5" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line7_7" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 4) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 8){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Line8_1" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line8_3" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line8_5"){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 3) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 9){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Line9_2" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line9_4" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 2) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(_this.questionNo == 10){
                for(var i=0;i<_this.targetGroup.length;i++){
                    console.log(_this.targetGroup[i].name);
                    if(_this.targetGroup[i].name == "Line10_1" ){
                        _this.correctCount++;
                    }
                    if(_this.targetGroup[i].name == "Line10_5" ){
                        _this.correctCount++;
                    }
                }

                if((_this.correctCount == 2) && (_this.correctCount == _this.targetGroup.length)){
                    correct = true;
                }else{
                    correct = false;
                }   
            }

            if(correct == true){
                console.log("corect");

                _this.correctAns1(target);

            }else{

                console.log("wrong");

                for(var i=0;i<_this.targetGroup.length;i++){
                    _this.wrongGroup.add(_this.targetGroup[i]);     //Adding only wrong objects into "wrongGroup"
                    wrongtemp++;
                    for(var j=0;j<wrongtemp;j++){
                        _this.shake.shake(10, _this.wrongGroup);        //Shake only wrong objects
                    }
                }
                _this.wrongAns1(target);
            }

        },_this);

    },

    correctAns1:function(target)
    {
        _this.noofAttempts++;
       

        _this.celebration1 = true;

        _this.removeListeners();

        commonNavBar_sg8_1_2.playCelebrationSound();
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
         _this.AnsTimerCount=0;
    },

    removeListeners:function(){
        if(_this.curve){
            _this.curve.inputEnabled = false;
            _this.curve.input.useHandCursor = false;
        }
        if(_this.curve1){
            _this.curve1.inputEnabled = false;
            _this.curve1.input.useHandCursor = false;
        }
        if(_this.curve2){
            _this.curve2.inputEnabled = false;
            _this.curve2.input.useHandCursor = false;
        }
        if(_this.curve3){
            _this.curve3.inputEnabled = false;
            _this.curve3.input.useHandCursor = false;
        }
        if(_this.line1){
            _this.line1.inputEnabled = false;
            _this.line1.input.useHandCursor = false;
        }
        if(_this.line2){
            _this.line2.inputEnabled = false;
            _this.line2.input.useHandCursor = false;
        }
        if(_this.line3){
            _this.line3.inputEnabled = false;
            _this.line3.input.useHandCursor = false;
        }
        if(_this.line4){
            _this.line4.inputEnabled = false;
            _this.line4.input.useHandCursor = false;
        }
        if(_this.line5){
            _this.line5.inputEnabled = false;
            _this.line5.input.useHandCursor = false;
        }
        if(_this.line6){
            _this.line6.inputEnabled = false;
            _this.line6.input.useHandCursor = false;
        }
        if(_this.line7){
            _this.line7.inputEnabled = false;
            _this.line7.input.useHandCursor = false;
        }
        if(_this.line8){
            _this.line8.inputEnabled = false;
            _this.line8.input.useHandCursor = false;
        }
    },

    wrongAns1:function(target)
    {
        target.events.onInputDown.removeAll();
        _this.noofAttempts++;
        _this.wrongAnswer = true; 

        commonNavBar_sg8_1_2.playWrongCelebrationSound();

        _this.time.events.add(500, function(){ 
            _this.tickMark.frame = 0;
            _this.targetGroup=[];
            _this.wrongGroup.destroy(); 
            _this.shapeGroup.destroy(); 
            _this.getQuestion();
        }, _this); 
        _this.count1 = 0;  
        _this.correctCount = 0;
    },

    removeCelebration1:function()
    {

        _this.count1 = 0; 
        _this.correctCount = 0;

        if(_this.timer1)
        {
            _this.timer1.stop();
        }
        _this.celebration1 = false;

        _this.targetGroup=[];

        _this.tickMark.frame = 0;

        if(_this.tickMark)
            _this.tickMark.destroy();

        if(_this.curve){
            _this.curve.destroy();
        }
        if(_this.curve1){
            _this.curve1.destroy();
        }
        if(_this.curve2){
            _this.curve2.destroy();
        }
        if(_this.curve3){
            _this.curve3.destroy();
        }
        if(_this.line1){
            _this.line1.destroy();
        }
        if(_this.line2){
            _this.line2.destroy();
        }
        if(_this.line3){
            _this.line3.destroy();
        }
        if(_this.line4){
            _this.line4.destroy();
        }
        if(_this.line5){
            _this.line5.destroy();
        }
        if(_this.line6){
            _this.line6.destroy();
        }
        if(_this.line7){
            _this.line7.destroy();
        }
        if(_this.line8){
            _this.line8.destroy();
        }

        if(_this.graphics1)
            _this.graphics1.destroy();
        if(_this.graphics2)
            _this.graphics2.destroy();
        if(_this.graphics3)
            _this.graphics3.destroy();
        if(_this.graphics4)
            _this.graphics4.destroy();
        if(_this.graphics5)
            _this.graphics5.destroy();
        if(_this.graphics6)
            _this.graphics6.destroy();
        if(_this.graphics7)
            _this.graphics7.destroy();

        _this.no11++;
        if(_this.no11 < 6)
        {
            _this.getQuestion();

            _this.starsGroup.getChildAt(_this.count+1).frame = 2; 
            _this.count++;
        }
        else
        {
            

            _this.state.start('sg8_1_2Score',true,false);
        }
    },

    update:function(){

    },

    getVoice:function(question)
    {   
        _this.stopVoice();  

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(question)
        {
            case 1:
            case 4:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2b.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2b.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2b.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2b.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2b.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2b.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2b.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2b.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2b.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 2:
            case 3:
            case 5:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2a.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2a.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2a.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2a.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2a.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2a.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2a.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2a.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2a.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 6:
            case 9:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2e.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2e.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2e.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2e.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2e.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2e.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2e.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2e.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2e.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 8:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2d.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2d.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2d.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2d.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2d.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2d.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2d.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2d.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2d.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 7:
            case 10:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/English/sg8.1.2c.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Hindi/sg8.1.2c.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Kannada/sg8.1.2c.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Gujarati/sg8.1.2c.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Marathi/sg8.1.2c.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Telugu/sg8.1.2c.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Tamil/sg8.1.2c.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Urdu/sg8.1.2c.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg8.1.2/Odiya/sg8.1.2c.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

        }

        commonNavBar_sg8_1_2.getVoice(_this.soundurl);

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

        commonNavBar_sg8_1_2.stopTimer();
            commonNavBar_sg8_1_2.stopVoice();
            commonNavBar_sg8_1_2.disableNavBar();

            commonNavBar_sg8_1_2.navBar= null;
            commonNavBar_sg8_1_2.speakerbtn= null;
            commonNavBar_sg8_1_2.backbtn= null;

        _this.stopVoice();
        commonNavBar_sg8_1_2.stopDrawingSound();
        commonNavBar_sg8_1_2.stopVoice();
    }

};