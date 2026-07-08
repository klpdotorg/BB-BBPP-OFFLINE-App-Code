Game.sg4_2_1level1=function(){};

Game.sg4_2_1level1.prototype={

    init:function(param,score)
    {
        _this = this;

        this.Stararr = param;
        this.score = score;
        telInitializer.gameIdInit("SG4_2_1",gradeSelected);
    },

    preload:function(game){
        if(!window.grade1SG7){

            window.grade1SG7 = true;

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

        //Background Images
        this.load.image("sg4_2_1_commonBg1",window.baseUrl+"assets/gradeAssets/sg4.2.1/Bg1.png");
        this.load.image("sg4_2_1_commonBg2",window.baseUrl+"assets/gradeAssets/sg4.2.1/Bg2.png");
        this.load.image("sg4_2_1_commonBg3",window.baseUrl+"assets/gradeAssets/sg4.2.1/Bg3.png");
        
        //Circle Images
        this.load.image("sg4_2_1_Circle",window.baseUrl+"assets/gradeAssets/sg4.2.1/Circle.png");
        this.load.atlas("sg4_2_1_Circle_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/Circle image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Circle/Circle image1.json");
        this.load.atlas("sg4_2_1_Circle_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/Circle image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Circle/Circle image2.json");
        this.load.atlas("sg4_2_1_Circle_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/Circle image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Circle/Circle image3.json");
        this.load.atlas("sg4_2_1_Circle_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/Circle image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Circle/Circle image4.json");
        this.load.atlas("sg4_2_1_Circle_image1_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/Circle image1_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Circle/Circle image1_GlowAnim.json");
        
        //Cone Images
        this.load.image("sg4_2_1_Cone",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cone.png");
        this.load.atlas("sg4_2_1_Cone_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cone image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cone/Cone image1.json");
        this.load.atlas("sg4_2_1_Cone_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cone image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cone/Cone image2.json");
        this.load.atlas("sg4_2_1_Cone_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cone image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cone/Cone image3.json");
        this.load.atlas("sg4_2_1_Cone_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cone image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cone/Cone image4.json");
        this.load.atlas("sg4_2_1_Cone_image4_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cone image4_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cone/Cone image4_GlowAnim.json");
        
        //Cube Images
        this.load.image("sg4_2_1_cube",window.baseUrl+"assets/gradeAssets/sg4.2.1/cube.png");
        this.load.atlas("sg4_2_1_cube_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/cube image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cube/cube image1.json");
        this.load.atlas("sg4_2_1_cube_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/cube image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cube/cube image2.json");
        this.load.atlas("sg4_2_1_cube_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/cube image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cube/cube image3.json");
        this.load.atlas("sg4_2_1_cube_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/cube image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cube/cube image4.json");
        this.load.atlas("sg4_2_1_cube_image5",window.baseUrl+"assets/gradeAssets/sg4.2.1/cube image5.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cube/cube image5.json");
        this.load.atlas("sg4_2_1_cube_image4_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/cube image4_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cube/cube image4_GlowAnim.json");
        
        //Cuboid Images
        this.load.image("sg4_2_1_cuboid",window.baseUrl+"assets/gradeAssets/sg4.2.1/cuboid.png");
        this.load.atlas("sg4_2_1_cuboid_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/cuboid image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cuboid/cuboid image1.json");
        this.load.atlas("sg4_2_1_cuboid_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/cuboid image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cuboid/cuboid image2.json");
        this.load.atlas("sg4_2_1_cuboid_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/cuboid image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cuboid/cuboid image3.json");
        this.load.atlas("sg4_2_1_cuboid_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/cuboid image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cuboid/cuboid image4.json");
        this.load.atlas("sg4_2_1_cuboid_image5",window.baseUrl+"assets/gradeAssets/sg4.2.1/cuboid image5.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cuboid/cuboid image5.json");
        this.load.atlas("sg4_2_1_cuboid_image5_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/cuboid image5_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cuboid/cuboid image5_GlowAnim.json");
        
        //Cylinder Images
        this.load.image("sg4_2_1_Cylinder",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder.png");
        this.load.atlas("sg4_2_1_Cylinder_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cylinder/Cylinder image1.json");
        this.load.atlas("sg4_2_1_Cylinder_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cylinder/Cylinder image2.json");
        this.load.atlas("sg4_2_1_Cylinder_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cylinder/Cylinder image3.json");
        this.load.atlas("sg4_2_1_Cylinder_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cylinder/Cylinder image4.json");
        this.load.atlas("sg4_2_1_Cylinder_image5",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder image5.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cylinder/Cylinder image5.json");
        this.load.atlas("sg4_2_1_Cylinder_image2_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder image2_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cylinder/Cylinder image2_GlowAnim.json");
        this.load.atlas("sg4_2_1_Cylinder_image3_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder image3_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cylinder/Cylinder image3_GlowAnim.json");
        this.load.atlas("sg4_2_1_Cylinder_image5_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/Cylinder image5_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Cylinder/Cylinder image5_GlowAnim.json");
        
        //Oval Images
        this.load.image("sg4_2_1_Oval",window.baseUrl+"assets/gradeAssets/sg4.2.1/Oval.png");
        this.load.atlas("sg4_2_1_Oval_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/Oval image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Oval/Oval image1.json");
        this.load.atlas("sg4_2_1_Oval_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/Oval image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Oval/Oval image2.json");
        this.load.atlas("sg4_2_1_Oval_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/Oval image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Oval/Oval image3.json");
        this.load.atlas("sg4_2_1_Oval_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/Oval image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Oval/Oval image4.json");
        
        //Rectangle Images
        this.load.image("sg4_2_1_rectangle",window.baseUrl+"assets/gradeAssets/sg4.2.1/rectangle.png");
        this.load.atlas("sg4_2_1_rectangle_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/rectangle image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Rectangle/rectangle image1.json");
        this.load.atlas("sg4_2_1_rectangle_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/rectangle image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Rectangle/rectangle image2.json");
        this.load.atlas("sg4_2_1_rectangle_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/rectangle image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Rectangle/rectangle image3.json");
        this.load.atlas("sg4_2_1_rectangle_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/rectangle image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Rectangle/rectangle image4.json");
        this.load.atlas("sg4_2_1_rectangle_image3_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/rectangle image3_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Rectangle/rectangle image3_GlowAnim.json");
        
        //Sphere Images
        this.load.image("sg4_2_1_Sphere",window.baseUrl+"assets/gradeAssets/sg4.2.1/Sphere.png");
        this.load.atlas("sg4_2_1_Sphere_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/Sphere image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Sphere/Sphere image1.json");
        this.load.atlas("sg4_2_1_Sphere_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/Sphere image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Sphere/Sphere image2.json");
        this.load.atlas("sg4_2_1_Sphere_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/Sphere image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Sphere/Sphere image3.json");
        this.load.atlas("sg4_2_1_Sphere_image3_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/Sphere image3_GlowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Sphere/Sphere image3_GlowAnim.json");
      
        //Square Images
        this.load.image("sg4_2_1_square",window.baseUrl+"assets/gradeAssets/sg4.2.1/square.png");
        this.load.atlas("sg4_2_1_square_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/square image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Square/square image1.json");
        this.load.atlas("sg4_2_1_square_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/square image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Square/square image2.json");
        this.load.atlas("sg4_2_1_square_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/square image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Square/square image3.json");
        this.load.atlas("sg4_2_1_square_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/square image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Square/square image4.json");
        this.load.atlas("sg4_2_1_square_image1_GlowAnim",window.baseUrl+"assets/gradeAssets/sg4.2.1/square image1_glowAnim.png",window.baseUrl+"json/gradeJson/sg4.2.1/Square/square image1_glowAnim.json");
        
        //Triangle Images
        this.load.image("sg4_2_1_triangle",window.baseUrl+"assets/gradeAssets/sg4.2.1/triangle.png");
        this.load.atlas("sg4_2_1_triangle_image1",window.baseUrl+"assets/gradeAssets/sg4.2.1/triangle image1.png",window.baseUrl+"json/gradeJson/sg4.2.1/Triangle/triangle image1.json");
        this.load.atlas("sg4_2_1_triangle_image2",window.baseUrl+"assets/gradeAssets/sg4.2.1/triangle image2.png",window.baseUrl+"json/gradeJson/sg4.2.1/Triangle/triangle image2.json");
        this.load.atlas("sg4_2_1_triangle_image3",window.baseUrl+"assets/gradeAssets/sg4.2.1/triangle image3.png",window.baseUrl+"json/gradeJson/sg4.2.1/Triangle/triangle image3.json");
        this.load.atlas("sg4_2_1_triangle_image4",window.baseUrl+"assets/gradeAssets/sg4.2.1/triangle image4.png",window.baseUrl+"json/gradeJson/sg4.2.1/Triangle/triangle image4.json");
        this.load.atlas("sg4_2_1_triangle_image5",window.baseUrl+"assets/gradeAssets/sg4.2.1/triangle image5.png",window.baseUrl+"json/gradeJson/sg4.2.1/Triangle/triangle image5.json");
        
        this.load.atlas("sg4_2_1_TickMark",window.baseUrl+"assets/gradeAssets/sg4.2.1/tick.png",window.baseUrl+"json/gradeJson/sg4.2.1/tick.json");
        
        


    }

    },

    create:function(game){
        _this = this;
        _this.Stararr = [];
        _this.amplify = null;
        _this.noofAttempts=0;
        _this.AnsTimerCount=0;
        _this.sceneCount=0;
        _this.wrongAnswer = false;
        _this.shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(_this.shake);

        _this.rightCount = 0;
        _this.no11 = 0;
        _this.rno11 = 0;
        _this.vno11 = 0;
        _this.no2 = 0;
        _this.count=0;
        _this.count1=1;
        _this.minutes=0;
        _this.seconds=0;
        _this.counterForTimer=0;
        _this.opt1X=0;
        _this.opt1Y=0;
        _this.opt2X=0;
        _this.opt2Y=0;
        _this.opt3X=0;
        _this.opt3Y=0;
        _this.qArray = new Array();
        _this.qArray = [1,2,3,4,5,6,7,8,9,10];
        //_this.qArray = [1,2,3,4,5,6,7,8,9];
//        _this.qArray = [10];
        _this.qArray = _this.shuffle(_this.qArray);

        _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'sg4_2_1_commonBg1');
        _this.bg2 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'sg4_2_1_commonBg2');
        _this.bg3 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height,'sg4_2_1_commonBg3');

        commonNavBar_sg4_2_1.addNavBar(game,_this.soundurl);
        commonNavBar_sg4_2_1.addTimerToTheGame(game,0,0,0);
        commonNavBar_sg4_2_1.startTimer(game);
        
        commonNavBar_sg4_2_1.speakerbtn.events.onInputDown.add(function()
		{
		   commonNavBar_sg4_2_1.playClickSound();
			_this.getVoice();
		},_this);

        _this.generateStarsForTheScene(6);

        _this.getQuestion();

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
        this.getVoice(_this.qArray[_this.no11]);

        


        if(!_this.timer)
        {
            _this.sceneCount++;
        _this.noofAttempts = 0;
        _this.AnsTimerCount = 0;
         _this.timer = _this.time.create(false);
        

        _this.timer.loop(1000, function()
        {
            _this.AnsTimerCount++;
        }, this);
    }

        _this.timer.start();

        _this.obj1Array = [];
        _this.obj2Array = [];
        _this.obj3Array = [];
        _this.obj4Array = [];
        _this.obj5Array = [];
        _this.obj6Array = [];
        _this.obj7Array = [];
        _this.obj8Array = [];
        _this.obj9Array = [];
        _this.obj10Array = [];
        _this.obj11Array = [];
        _this.obj12Array = [];
        _this.obj13Array = [];
        _this.obj14Array = [];
        _this.obj15Array = [];
        _this.obj16Array = [];
        _this.obj17Array = [];

        _this.questionid = 1;

        switch(_this.qArray[_this.no11])
        {
            case 1: 
                _this.correctCount = 3;
                _this.obj1Array = ['sg4_2_1_cuboid',800,150,"cuboid"];
                _this.obj2Array = ['sg4_2_1_Circle_image2',900,430,"Circle_Donut"];
                _this.obj3Array = ['sg4_2_1_cuboid_image3',280,430,"Cuboid_Book"];
                _this.obj4Array = ['sg4_2_1_Circle_image4',90,400,"Circle_No_Parking"];
                _this.obj5Array = ['sg4_2_1_Cone_image4',840,480,"Cone_Icecream"];
                _this.obj6Array = ['sg4_2_1_square_image1',200,200,"Square_Frame"];
                _this.obj7Array = ['sg4_2_1_square_image2',650,440,"Square_Biscuit"];
                _this.obj8Array = ['sg4_2_1_square_image3',330,390,"Square_Stamp"];
                _this.obj9Array = ['sg4_2_1_Oval_image1',600,200,"Oval_StraightMirror"];
                _this.obj10Array = ['sg4_2_1_Sphere_image1',480,400,"Sphere_BasketBall"];
                _this.obj11Array = ['sg4_2_1_Circle_image3',210,395,"Circle_Dice"];
                _this.obj12Array = ['sg4_2_1_cuboid_image4',390,490,"Cuboid_Block"];
                _this.obj13Array = ['sg4_2_1_cuboid_image5',770,430,"Cuboid_Bread"];
                _this.obj14Array = ['sg4_2_1_cube_image1',140,470,"Cube_Cubix"];
                _this.obj15Array = ['sg4_2_1_cube_image2',320,480,"Cube_Dice"];
                _this.obj16Array = ['sg4_2_1_triangle_image1',560,430,"Triangle_Geometry"];
                _this.bg=_this.bg1;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);

                break;

            case 2: 
                _this.correctCount = 3;
                _this.obj1Array = ['sg4_2_1_Cone',800,150,"Cone"];
                _this.obj2Array = ['sg4_2_1_cuboid_image1',620,350,"Cuboid_Cupboard"];
                _this.obj3Array = ['sg4_2_1_Sphere_image3',560,160,"Sphere_Globe"];
                _this.obj4Array = ['sg4_2_1_triangle_image2',630,240,"Triangle_SlantGeometry"];
                _this.obj5Array = ['sg4_2_1_Cylinder_image2',690,220,"Cylinder_Candle"];
                _this.obj6Array = ['sg4_2_1_cuboid_image2',360,380,"Cuboid_Box"];
                _this.obj7Array = ['sg4_2_1_Cylinder_image3',150,440,"Cylinder_MagicHat"];
                _this.obj8Array = ['sg4_2_1_Cone_image1',420,300,"Cone_JokerHat"];      
                _this.obj9Array = ['sg4_2_1_Cylinder_image1',330,320,"Cylinder_WastePaper"];
                _this.obj10Array = ['sg4_2_1_Circle_image1',400,430,"Circle_Clock"];
//                _this.obj11Array = ['square_image4',140,420,"Square_Suitcase"];
                _this.obj11Array = ['sg4_2_1_Sphere_image2',150,250,"Sphere_Ballon"];
                _this.obj12Array = ['sg4_2_1_Sphere_image1',250,470,"Sphere_BasketBall"];
                _this.obj13Array = ['sg4_2_1_Cone_image2',500,470,"Cone_Drill"];
                _this.obj14Array = ['sg4_2_1_Oval_image4',720,470,"Oval_SlantMirror"];
                _this.obj15Array = ['sg4_2_1_Cylinder_image4',850,480,"Cylinder_Jam"];
                _this.obj16Array = ['sg4_2_1_Cone_image3',50,450,"Cone_Blue"];
                _this.bg=_this.bg2;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

            case 3: 
                _this.correctCount = 3;
                _this.obj1Array = ['sg4_2_1_Oval',800,150,"Oval"];
                _this.obj2Array = ['sg4_2_1_Cylinder_image5',600,410,"Cylinder_Tin"];
                _this.obj3Array = ['sg4_2_1_rectangle_image2',690,450,"Rectangle_Mobile"];
                _this.obj4Array = ['sg4_2_1_cube_image4',870,420,"Cube_CargoBox"];
                _this.obj5Array = ['sg4_2_1_Oval_image3',900,500,"Oval_Necklace"];      
                _this.obj6Array = ['sg4_2_1_triangle_image4',770,470,"Triangle_Hanger"];
                _this.obj7Array = ['sg4_2_1_Oval_image1',470,230,"Oval_StraightMirror"];
                _this.obj8Array = ['sg4_2_1_rectangle_image1',300,300,"Rectangle_Door"];
                _this.obj9Array = ['sg4_2_1_Circle_image1',300,90,"Circle_Clock"];
                _this.obj10Array = ['sg4_2_1_Oval_image2',100,230,"Oval_Frame"];
                _this.obj11Array = ['sg4_2_1_cube_image3',80,450,"Cube_GiftBox"];
                _this.obj12Array = ['sg4_2_1_rectangle_image4',160,450,"rectangle_image4"];
//                _this.obj13Array = ['Cylinder_image4',130,500,"Cylinder_Jam"];
                _this.obj13Array = ['sg4_2_1_triangle_image3',200,500,"Triangle_Watermelon"];
                _this.obj14Array = ['sg4_2_1_triangle_image5',540,460,"Triangle_WalkingSign"];
                _this.obj15Array = ['sg4_2_1_rectangle_image3',670,295,"Rectangle_Flag"];
                _this.obj16Array = ['sg4_2_1_cube_image5',580,325,"Cube_Cake"];
                _this.bg=_this.bg3;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

            case 4: 
                _this.correctCount = 3;
                _this.obj1Array = ['sg4_2_1_square',800,150,"square"];
                _this.obj2Array = ['sg4_2_1_Circle_image2',900,430,"Circle_Donut"];
                _this.obj3Array = ['sg4_2_1_cuboid_image3',280,430,"Cuboid_Book"];
                _this.obj4Array = ['sg4_2_1_Circle_image4',90,400,"Circle_No_Parking"];
                _this.obj5Array = ['sg4_2_1_Cone_image4',840,480,"Cone_Icecream"];
                _this.obj6Array = ['sg4_2_1_square_image1',200,200,"Square_Frame"];
                _this.obj7Array = ['sg4_2_1_square_image2',650,440,"Square_Biscuit"];
                _this.obj8Array = ['sg4_2_1_square_image3',320,390,"Square_Stamp"];
                _this.obj9Array = ['sg4_2_1_Oval_image1',600,200,"Oval_StraightMirror"];
                _this.obj10Array = ['sg4_2_1_Sphere_image1',480,400,"Sphere_BasketBall"];
                _this.obj11Array = ['sg4_2_1_Circle_image3',240,390,"Circle_Dice"];
                _this.obj12Array = ['sg4_2_1_cuboid_image4',380,480,"Cuboid_Block"];
                _this.obj13Array = ['sg4_2_1_cuboid_image5',770,430,"Cuboid_Bread"];        
                _this.obj14Array = ['sg4_2_1_cube_image1',140,470,"Cube_Cubix"];
                _this.obj15Array = ['sg4_2_1_cube_image2',320,480,"Cube_Dice"];
                _this.obj16Array = ['sg4_2_1_triangle_image1',560,430,"Triangle_Geometry"];
                _this.bg=_this.bg1;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

            case 5: 
                _this.correctCount = 3;
                _this.obj1Array = ['sg4_2_1_Sphere',800,150,"Sphere"];
                _this.obj2Array = ['sg4_2_1_cuboid_image1',620,350,"Cuboid_Cupboard"];
                _this.obj3Array = ['sg4_2_1_Sphere_image3',560,160,"Sphere_Globe"];
                _this.obj4Array = ['sg4_2_1_triangle_image2',630,240,"Triangle_SlantGeometry"];
                _this.obj5Array = ['sg4_2_1_Cylinder_image2',690,220,"Cylinder_Candle"];
                _this.obj6Array = ['sg4_2_1_cuboid_image2',360,380,"Cuboid_Box"];
                _this.obj7Array = ['sg4_2_1_Cylinder_image3',150,440,"Cylinder_MagicHat"];
                _this.obj8Array = ['sg4_2_1_Cone_image1',420,300,"Cone_JokerHat"];      
                _this.obj9Array = ['sg4_2_1_Cylinder_image1',330,320,"Cylinder_WastePaper"];
                _this.obj10Array = ['sg4_2_1_Circle_image1',400,430,"Circle_Clock"];
//                _this.obj11Array = ['square_image4',140,420,"Square_Suitcase"];
                _this.obj11Array = ['sg4_2_1_Sphere_image2',150,250,"Sphere_Ballon"];
                _this.obj12Array = ['sg4_2_1_Sphere_image1',250,470,"Sphere_BasketBall"];
                _this.obj13Array = ['sg4_2_1_Cone_image2',500,470,"Cone_Drill"];
                _this.obj14Array = ['sg4_2_1_Oval_image4',720,470,"Oval_SlantMirror"];
                _this.obj15Array = ['sg4_2_1_Cylinder_image4',850,480,"Cylinder_Jam"];
                _this.obj16Array = ['sg4_2_1_Cone_image3',50,450,"Cone_Blue"];
                _this.bg=_this.bg2;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

            case 6: 
                _this.correctCount = 3;
                _this.obj1Array = ['sg4_2_1_Circle',800,150,"Circle"];
                _this.obj2Array = ['sg4_2_1_Circle_image2',900,430,"Circle_Donut"];
                _this.obj3Array = ['sg4_2_1_cuboid_image3',280,430,"Cuboid_Book"];
                _this.obj4Array = ['sg4_2_1_Circle_image4',90,400,"Circle_No_Parking"];
                _this.obj5Array = ['sg4_2_1_Cone_image4',840,480,"Cone_Icecream"];
                _this.obj6Array = ['sg4_2_1_square_image1',200,200,"Square_Frame"];
                _this.obj7Array = ['sg4_2_1_square_image2',650,440,"Square_Biscuit"];
                _this.obj8Array = ['sg4_2_1_square_image3',320,390,"Square_Stamp"];
                _this.obj9Array = ['sg4_2_1_Oval_image1',600,200,"Oval_StraightMirror"];
                _this.obj10Array = ['sg4_2_1_Sphere_image1',480,400,"Sphere_BasketBall"];
                _this.obj11Array = ['sg4_2_1_Circle_image3',240,390,"Circle_Dice"];
                _this.obj12Array = ['sg4_2_1_cuboid_image4',380,480,"Cuboid_Block"];
                _this.obj13Array = ['sg4_2_1_cuboid_image5',770,430,"Cuboid_Bread"];
                _this.obj14Array = ['sg4_2_1_cube_image1',140,470,"Cube_Cubix"];
                _this.obj15Array = ['sg4_2_1_cube_image2',320,480,"Cube_Dice"];
                _this.obj16Array = ['sg4_2_1_triangle_image1',560,430,"Triangle_Geometry"];
                _this.bg=_this.bg1;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

            case 7: 
                _this.correctCount = 4;
                _this.obj1Array = ['sg4_2_1_Cylinder',800,150,"Cylinder"];
                _this.obj2Array = ['sg4_2_1_cuboid_image1',620,350,"Cuboid_Cupboard"];
                _this.obj3Array = ['sg4_2_1_Sphere_image3',560,160,"Sphere_Globe"];
                _this.obj4Array = ['sg4_2_1_triangle_image2',630,240,"Triangle_SlantGeometry"];
                _this.obj5Array = ['sg4_2_1_Cylinder_image2',690,220,"Cylinder_Candle"];
                _this.obj6Array = ['sg4_2_1_cuboid_image2',360,380,"Cuboid_Box"];
                _this.obj7Array = ['sg4_2_1_Cylinder_image3',150,440,"Cylinder_MagicHat"];
                _this.obj8Array = ['sg4_2_1_Cone_image1',420,300,"Cone_JokerHat"];      
                _this.obj9Array = ['sg4_2_1_Cylinder_image1',330,320,"Cylinder_WastePaper"];
                _this.obj10Array = ['sg4_2_1_Circle_image1',400,430,"Circle_Clock"];
//                _this.obj11Array = ['square_image4',140,420,"Square_Suitcase"];
                _this.obj11Array = ['sg4_2_1_Sphere_image2',150,250,"Sphere_Ballon"];
                _this.obj12Array = ['sg4_2_1_Sphere_image1',250,470,"Sphere_BasketBall"];
                _this.obj13Array = ['sg4_2_1_Cone_image2',500,470,"Cone_Drill"];
                _this.obj14Array = ['sg4_2_1_Oval_image4',720,470,"Oval_SlantMirror"];
                _this.obj15Array = ['sg4_2_1_Cylinder_image4',850,480,"Cylinder_Jam"];
                _this.obj16Array = ['sg4_2_1_Cone_image3',50,450,"Cone_Blue"];
                _this.bg=_this.bg2;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

            case 8: 
                _this.correctCount = 3;
                _this.obj1Array = ['sg4_2_1_triangle',800,150,"triangle"];
                _this.obj2Array = ['sg4_2_1_Cylinder_image5',600,410,"Cylinder_Tin"];
                _this.obj3Array = ['sg4_2_1_rectangle_image2',690,450,"Rectangle_Mobile"];
                _this.obj4Array = ['sg4_2_1_cube_image4',870,420,"Cube_CargoBox"];
                _this.obj5Array = ['sg4_2_1_Oval_image3',900,500,"Oval_Necklace"];      
                _this.obj6Array = ['sg4_2_1_triangle_image4',770,470,"Triangle_Hanger"];
                _this.obj7Array = ['sg4_2_1_Oval_image1',470,230,"Oval_StraightMirror"];
                _this.obj8Array = ['sg4_2_1_rectangle_image1',300,300,"Rectangle_Door"];
                _this.obj9Array = ['sg4_2_1_Circle_image1',300,90,"Circle_Clock"];
                _this.obj10Array = ['sg4_2_1_Oval_image2',100,230,"Oval_Frame"];
                _this.obj11Array = ['sg4_2_1_cube_image3',80,450,"Cube_GiftBox"];
                _this.obj12Array = ['sg4_2_1_rectangle_image4',160,450,"rectangle_image4"];
                _this.obj13Array = ['sg4_2_1_triangle_image3',200,500,"Triangle_Watermelon"];
                _this.obj14Array = ['sg4_2_1_triangle_image5',540,460,"Triangle_WalkingSign"];
                _this.obj15Array = ['sg4_2_1_rectangle_image3',670,295,"Rectangle_Flag"];
                _this.obj16Array = ['sg4_2_1_cube_image5',580,325,"Cube_Cake"];
                _this.bg=_this.bg3;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

            case 9: 
                _this.correctCount = 4;
                _this.obj1Array = ['sg4_2_1_rectangle',800,150,"rectangle"];
                _this.obj2Array = ['sg4_2_1_Cylinder_image5',600,410,"Cylinder_Tin"];
                _this.obj3Array = ['sg4_2_1_rectangle_image2',690,450,"Rectangle_Mobile"];
                _this.obj4Array = ['sg4_2_1_cube_image4',870,420,"Cube_CargoBox"];
                _this.obj5Array = ['sg4_2_1_Oval_image3',900,500,"Oval_Necklace"];      
                _this.obj6Array = ['sg4_2_1_triangle_image4',770,470,"Triangle_Hanger"];
                _this.obj7Array = ['sg4_2_1_Oval_image1',470,230,"Oval_StraightMirror"];
                _this.obj8Array = ['sg4_2_1_rectangle_image1',300,300,"Rectangle_Door"];
                _this.obj9Array = ['sg4_2_1_Circle_image1',300,90,"Circle_Clock"];
                _this.obj10Array = ['sg4_2_1_Oval_image2',100,230,"Oval_Frame"];
                _this.obj11Array = ['sg4_2_1_cube_image3',80,450,"Cube_GiftBox"];
                _this.obj12Array = ['sg4_2_1_rectangle_image4',160,450,"rectangle_image4"];
                _this.obj13Array = ['sg4_2_1_triangle_image3',200,500,"Triangle_Watermelon"];
                _this.obj14Array = ['sg4_2_1_triangle_image5',540,460,"Triangle_WalkingSign"];
                _this.obj15Array = ['sg4_2_1_rectangle_image3',670,295,"Rectangle_Flag"];
                _this.obj16Array = ['sg4_2_1_cube_image5',580,325,"Cube_Cake"];
                _this.bg=_this.bg3;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

            case 10: 
                _this.correctCount = 3;
                _this.obj1Array = ['sg4_2_1_cube',800,150,"cube"];
                _this.obj2Array = ['sg4_2_1_Cylinder_image5',600,410,"Cylinder_Tin"];
                _this.obj3Array = ['sg4_2_1_rectangle_image2',690,450,"Rectangle_Mobile"];
                _this.obj4Array = ['sg4_2_1_cube_image4',870,420,"Cube_CargoBox"];
                _this.obj5Array = ['sg4_2_1_Oval_image3',900,500,"Oval_Necklace"];      
                _this.obj6Array = ['sg4_2_1_triangle_image4',770,470,"Triangle_Hanger"];
                _this.obj7Array = ['sg4_2_1_Oval_image1',470,230,"Oval_StraightMirror"];
                _this.obj8Array = ['sg4_2_1_rectangle_image1',300,300,"Rectangle_Door"];
                _this.obj9Array = ['sg4_2_1_Circle_image1',300,90,"Circle_Clock"];
                _this.obj10Array = ['sg4_2_1_Oval_image2',100,230,"Oval_Frame"];
                _this.obj11Array = ['sg4_2_1_cube_image3',80,450,"Cube_GiftBox"];
                _this.obj12Array = ['sg4_2_1_rectangle_image4',160,450,"rectangle_image4"];
                _this.obj13Array = ['sg4_2_1_triangle_image3',200,500,"Triangle_Watermelon"];
                _this.obj14Array = ['sg4_2_1_triangle_image5',540,460,"Triangle_WalkingSign"];
                _this.obj15Array = ['sg4_2_1_rectangle_image3',670,295,"Rectangle_Flag"];
                _this.obj16Array = ['sg4_2_1_cube_image5',580,325,"Cube_Cake"];
                _this.bg=_this.bg3;
                _this.gotoQuestion(_this.correctCount,_this.obj1Array,_this.obj2Array,_this.obj3Array,_this.obj4Array,_this.obj5Array,_this.obj6Array,_this.obj7Array,_this.obj8Array,_this.obj9Array,_this.obj10Array,_this.obj11Array,_this.obj12Array,_this.obj13Array,_this.obj14Array,_this.obj15Array,_this.obj16Array,_this.bg);
                break;

        }
    },

    gotoQuestion:function(correctCount,obj1Array,obj2Array,obj3Array,obj4Array,obj5Array,obj6Array,obj7Array,obj8Array,obj9Array,obj10Array,obj11Array,obj12Array,obj13Array,obj14Array,obj15Array,obj16Array,bg){

        _this.flagGroup1 = _this.add.group();

        _this.correctCount=correctCount;

        _this.b1 = _this.add.sprite(obj1Array[1],obj1Array[2],obj1Array[0]);
        _this.b1.anchor.setTo(0.5);
        _this.b1.name = obj1Array[3];
        _this.b1.key = obj3Array[0];

        _this.b2 = _this.add.sprite(obj2Array[1],obj2Array[2],obj2Array[0]);
        _this.b2.anchor.setTo(0.5);
        _this.b2.name =  obj2Array[3];
        _this.b2.key = obj3Array[0];
        _this.b2.inputEnabled = true;
        _this.b2.input.useHandCursor = true;

        _this.b3 = _this.add.sprite(obj3Array[1],obj3Array[2],obj3Array[0]);
        _this.b3.anchor.setTo(0.5);
        _this.b3.name = obj3Array[3];
        _this.b3.key = obj3Array[4];
        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;

        _this.b4 = _this.add.sprite(obj4Array[1],obj4Array[2],obj4Array[0]);
        _this.b4.anchor.setTo(0.5);
        _this.b4.name = obj4Array[3];
        _this.b4.key = obj4Array[4];
        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;

        _this.b5 = _this.add.sprite(obj5Array[1],obj5Array[2],obj5Array[0]);
        _this.b5.anchor.setTo(0.5);
        _this.b5.name = obj5Array[3];
        _this.b5.key = obj5Array[4];
        _this.b5.inputEnabled = true;
        _this.b5.input.useHandCursor = true;

        _this.b6 = _this.add.sprite(obj6Array[1],obj6Array[2],obj6Array[0]);
        _this.b6.anchor.setTo(0.5);
        _this.b6.name = obj6Array[3];
        _this.b6.key = obj6Array[4];
        _this.b6.inputEnabled = true;
        _this.b6.input.useHandCursor = true;

        _this.b7 = _this.add.sprite(obj7Array[1],obj7Array[2],obj7Array[0]);
        _this.b7.anchor.setTo(0.5);
        _this.b7.name = obj7Array[3];
        _this.b7.key = obj7Array[4];
        _this.b7.inputEnabled = true;
        _this.b7.input.useHandCursor = true;

        _this.b8 = _this.add.sprite(obj8Array[1],obj8Array[2],obj8Array[0]);
        _this.b8.anchor.setTo(0.5);
        _this.b8.name = obj8Array[3];
        _this.b8.key = obj8Array[4];
        _this.b8.inputEnabled = true;
        _this.b8.input.useHandCursor = true;

        _this.b9 = _this.add.sprite(obj9Array[1],obj9Array[2],obj9Array[0]);
        _this.b9.anchor.setTo(0.5);
        _this.b9.name = obj9Array[3];
        _this.b9.key = obj9Array[4];
        _this.b9.inputEnabled = true;
        _this.b9.input.useHandCursor = true;

        _this.b10 = _this.add.sprite(obj10Array[1],obj10Array[2],obj10Array[0]);
        _this.b10.anchor.setTo(0.5);
        _this.b10.name = obj10Array[3];
        _this.b10.key = obj10Array[4];
        _this.b10.inputEnabled = true;
        _this.b10.input.useHandCursor = true;

        _this.b11 = _this.add.sprite(obj11Array[1],obj11Array[2],obj11Array[0]);
        _this.b11.anchor.setTo(0.5);
        _this.b11.name = obj11Array[3];
        _this.b11.key = obj11Array[4];
        _this.b11.inputEnabled = true;
        _this.b11.input.useHandCursor = true;

        _this.b12 = _this.add.sprite(obj12Array[1],obj12Array[2],obj12Array[0]);
        _this.b12.anchor.setTo(0.5);
        _this.b12.name = obj12Array[3];
        _this.b12.key = obj12Array[4];
        _this.b12.inputEnabled = true;
        _this.b12.input.useHandCursor = true;

        _this.b13 = _this.add.sprite(obj13Array[1],obj13Array[2],obj13Array[0]);
        _this.b13.anchor.setTo(0.5);
        _this.b13.name = obj13Array[3];
        _this.b13.key = obj13Array[4];
        _this.b13.inputEnabled = true;
        _this.b13.input.useHandCursor = true;

        _this.b14 = _this.add.sprite(obj14Array[1],obj14Array[2],obj14Array[0]);
        _this.b14.anchor.setTo(0.5);
        _this.b14.name = obj14Array[3];
        _this.b14.key = obj14Array[4];
        _this.b14.inputEnabled = true;
        _this.b14.input.useHandCursor = true;

        _this.b15 = _this.add.sprite(obj15Array[1],obj15Array[2],obj15Array[0]);
        _this.b15.anchor.setTo(0.5);
        _this.b15.name = obj15Array[3];
        _this.b15.key = obj15Array[4];
        _this.b15.inputEnabled = true;
        _this.b15.input.useHandCursor = true;

        _this.b16 = _this.add.sprite(obj16Array[1],obj16Array[2],obj16Array[0]);
        _this.b16.anchor.setTo(0.5);
        _this.b16.name = obj16Array[3];
        _this.b16.key = obj16Array[4];
        _this.b16.inputEnabled = true;
        _this.b16.input.useHandCursor = true;

        if(bg == _this.bg2){
            _this.bg1.visible=false;
            _this.bg3.visible=false;
            _this.bg2.visible=true;
            _this.b12.scale.setTo(0.5);
            _this.b8.scale.setTo(0.8,0.9);
        }else if(bg == _this.bg1){
            _this.bg2.visible=false;
            _this.bg3.visible=false;
            _this.bg1.visible=true;
            _this.b10.scale.setTo(1);
            _this.b15.scale.setTo(1.2);
        }else if(bg == _this.bg3){
            _this.bg1.visible=false;
            _this.bg2.visible=false;
            _this.bg3.visible=true;
            _this.b7.scale.setTo(0.8,0.9);
            _this.b9.scale.setTo(0.8);
            _this.b13.scale.setTo(1.2);
            _this.b16.scale.setTo(1.2);
        }

        _this.addListeners();

        _this.flagGroup1.add(_this.b1);
        _this.flagGroup1.add(_this.b2);
        _this.flagGroup1.add(_this.b3);
        _this.flagGroup1.add(_this.b4);
        _this.flagGroup1.add(_this.b5);
        _this.flagGroup1.add(_this.b6);
        _this.flagGroup1.add(_this.b7);
        _this.flagGroup1.add(_this.b8);
        _this.flagGroup1.add(_this.b9);
        _this.flagGroup1.add(_this.b10);
        _this.flagGroup1.add(_this.b11);
        _this.flagGroup1.add(_this.b12);
        _this.flagGroup1.add(_this.b13);
        _this.flagGroup1.add(_this.b14);
        _this.flagGroup1.add(_this.b15);
        _this.flagGroup1.add(_this.b16);

        if(_this.wrongAnswer == false)
        {
            _this.flagGroup1.x = -1000;
            var tween = _this.add.tween(_this.flagGroup1);
            tween.to({ x: 0 }, 0,'Linear', true, 0);
        }
        _this.tickMark = this.add.sprite(800,250,'sg4_2_1_TickMark');
        _this.tickMark.anchor.setTo(0.5);

        _this.tickMark.events.onInputUp.removeAll();

    },

    addListeners:function()
    {

        _this.targetGroup = [];
        _this.correctGroup = [];
        _this.wrongGroup = _this.add.group();

        _this.b2.inputEnabled = true;
        _this.b2.input.useHandCursor = true;
        _this.b2.events.onInputDown.add(_this.selected,_this);

        _this.b3.inputEnabled = true;
        _this.b3.input.useHandCursor = true;
        _this.b3.events.onInputDown.add(_this.selected,_this);

        _this.b4.inputEnabled = true;
        _this.b4.input.useHandCursor = true;
        _this.b4.events.onInputDown.add(_this.selected,_this);

        _this.b5.inputEnabled = true;
        _this.b5.input.useHandCursor = true;
        _this.b5.events.onInputDown.add(_this.selected,_this);

        _this.b6.inputEnabled = true;
        _this.b6.input.useHandCursor = true;
        _this.b6.events.onInputDown.add(_this.selected,_this);

        _this.b7.inputEnabled = true;
        _this.b7.input.useHandCursor = true;
        _this.b7.events.onInputDown.add(_this.selected,_this);

        _this.b8.inputEnabled = true;
        _this.b8.input.useHandCursor = true;
        _this.b8.events.onInputDown.add(_this.selected,_this);

        _this.b9.inputEnabled = true;
        _this.b9.input.useHandCursor = true;
        _this.b9.events.onInputDown.add(_this.selected,_this);

        _this.b10.inputEnabled = true;
        _this.b10.input.useHandCursor = true;
        _this.b10.events.onInputDown.add(_this.selected,_this);

        _this.b11.inputEnabled = true;
        _this.b11.input.useHandCursor = true;
        _this.b11.events.onInputDown.add(_this.selected,_this);

        _this.b12.inputEnabled = true;
        _this.b12.input.useHandCursor = true;
        _this.b12.events.onInputDown.add(_this.selected,_this);

        _this.b13.inputEnabled = true;
        _this.b13.input.useHandCursor = true;
        _this.b13.events.onInputDown.add(_this.selected,_this);

        _this.b14.inputEnabled = true;
        _this.b14.input.useHandCursor = true;
        _this.b14.events.onInputDown.add(_this.selected,_this);

        _this.b15.inputEnabled = true;
        _this.b15.input.useHandCursor = true;
        _this.b15.events.onInputDown.add(_this.selected,_this);

        _this.b16.inputEnabled = true;
        _this.b16.input.useHandCursor = true;
        _this.b16.events.onInputDown.add(_this.selected,_this);

    },

    unselect:function(target){
        _this.count1--;
        console.log("cnt in unsel"+_this.count1);
        commonNavBar_sg4_2_1.playClickSound();
        target.events.onInputDown.removeAll();
        target.frame = 0;
        target.events.onInputDown.add(_this.selected,_this);
        
        if(_this.count1 <= _this.correctCount){
            _this.tickMark.inputEnabled = false; 
        }
        
        this.targetGroup.splice( this.targetGroup.indexOf(target), 1 );
    },

    selected:function(target){

        commonNavBar_sg4_2_1.playClickSound();
        var correct = false;

        _this.targetGroup.push(target);     //Pushing the selected values into 'targetGroup'

        target.events.onInputDown.removeAll();

        temp=1;
        wrongtemp=0;

        _this.count1++;

        console.log("cnt in sel "+_this.count1);
        
        console.log("correctCount "+_this.correctCount);
        
        target.frame=1;

        target.events.onInputDown.add(_this.unselect,_this);
        
        if(_this.count1 > _this.correctCount){
            _this.tickMark.inputEnabled = true; 
            _this.tickMark.input.useHandCursor = true; 
            _this.tickMark.name="click";
        }

        _this.tickMark.events.onInputDown.add(function(target1){

            commonNavBar_sg4_2_1.playClickSound();
            
            console.log("cnt in rightbtn"+_this.count1);

            _this.tickMark.frame = 1;

            target1.events.onInputDown.removeAll();

            _this.noofAttempts++;

            console.log(_this.targetGroup.length);

            for(var i=0;i<_this.targetGroup.length;i++){

                console.log(_this.targetGroup[i].name);

                if( (_this.b1.name == "cuboid" && _this.targetGroup[i].name =="Cuboid_Book")
                   || (_this.b1.name == "cuboid" && _this.targetGroup[i].name =="Cuboid_Block")
                   || (_this.b1.name == "cuboid" && _this.targetGroup[i].name =="Cuboid_Bread")
                   || (_this.b1.name == "cuboid" && _this.targetGroup[i].name =="Cuboid_Cupboard"))

                    correct = true;

                else if((_this.b1.name == "Cone" && _this.targetGroup[i].name =="Cone_JokerHat")
                        || (_this.b1.name == "Cone" && _this.targetGroup[i].name =="Cone_Blue")
                        || (_this.b1.name == "Cone" && _this.targetGroup[i].name =="Cone_Drill") )

                    correct = true;

                else if((_this.b1.name == "Oval" && _this.targetGroup[i].name =="Oval_Necklace")
                        || (_this.b1.name == "Oval" && _this.targetGroup[i].name =="Oval_StraightMirror")
                        || (_this.b1.name == "Oval" && _this.targetGroup[i].name =="Oval_Frame"))

                    correct = true;

                else if((_this.b1.name == "Sphere" && _this.targetGroup[i].name =="Sphere_Ballon") 
                        || (_this.b1.name == "Sphere" && _this.targetGroup[i].name =="Sphere_BasketBall")
                        || (_this.b1.name == "Sphere" && _this.targetGroup[i].name =="Sphere_Globe"))

                    correct = true;

                else if((_this.b1.name == "square" && _this.targetGroup[i].name =="Square_Frame")
                        || (_this.b1.name == "square" && _this.targetGroup[i].name =="Square_Biscuit")
                        || (_this.b1.name == "square" && _this.targetGroup[i].name =="Square_Stamp"))

                    correct = true;

                else if((_this.b1.name == "Circle" && _this.targetGroup[i].name =="Circle_Donut")
                        || (_this.b1.name == "Circle" && _this.targetGroup[i].name =="Circle_No_Parking")
                        || (_this.b1.name == "Circle" && _this.targetGroup[i].name =="Circle_Dice")
                        || (_this.b1.name == "Circle" && _this.targetGroup[i].name =="Circle_Clock"))

                    correct = true;

                else if((_this.b1.name == "Cylinder" && _this.targetGroup[i].name =="Cylinder_Candle")
                        || (_this.b1.name == "Cylinder" && _this.targetGroup[i].name =="Cylinder_MagicHat")
                        || (_this.b1.name == "Cylinder" && _this.targetGroup[i].name =="Cylinder_WastePaper")
                        || (_this.b1.name == "Cylinder" && _this.targetGroup[i].name =="Cylinder_Jam")
                        || (_this.b1.name == "Cylinder" && _this.targetGroup[i].name =="Cylinder_Tin"))

                    correct = true;

                else if((_this.b1.name == "rectangle" && _this.targetGroup[i].name =="Rectangle_Mobile")
                        || (_this.b1.name == "rectangle" && _this.targetGroup[i].name =="Rectangle_Door")
                        || (_this.b1.name == "rectangle" && _this.targetGroup[i].name =="rectangle_image4")
                        || (_this.b1.name == "rectangle" && _this.targetGroup[i].name =="Rectangle_Flag"))

                    correct = true;

                else if((_this.b1.name == "triangle" && _this.targetGroup[i].name =="Triangle_Hanger")
                        || (_this.b1.name == "triangle" && _this.targetGroup[i].name =="Triangle_Watermelon")
                        || (_this.b1.name == "triangle" && _this.targetGroup[i].name =="Triangle_WalkingSign"))

                    correct = true;

                else if((_this.b1.name == "cube" && _this.targetGroup[i].name =="Cube_CargoBox")
                        || (_this.b1.name == "cube" && _this.targetGroup[i].name =="Cube_GiftBox")
                        || (_this.b1.name == "cube" && _this.targetGroup[i].name =="Cube_Cake"))

                    correct = true;

                else{

                    correct = false;
                    break;

                }

            }

            for(var i=0;i<_this.targetGroup.length;i++){

                if(correct == true){

                    temp++;

                    _this.targetGroup[i].frame=1;   //To make the correct objects GLOW

                    _this.correctGroup.push(_this.targetGroup[i]);      //Push only correct objects into "correctGroup"

                    console.log(_this.correctGroup.length);

                }else{

                    _this.wrongGroup.add(_this.targetGroup[i]);     //Adding only wrong objects into "wrongGroup"

                    console.log(_this.wrongGroup.length);

                    temp=1;

                    wrongtemp++;

                    for(var j=0;j<wrongtemp;j++){
                        _this.shake.shake(10, _this.wrongGroup);        //Shake only wrong objects
                    }

                    _this.wrongAns1(target);
                }
            }

            if(temp > _this.correctCount){

                for(var j=0;j<_this.correctGroup.length;j++){

                    anim1 = _this.correctGroup[j].animations.add('glow');
                    //anim1.play(5, true);
                    anim1.play(5);

                    if(_this.b1.name == "Sphere" && _this.correctGroup[j].name == "Sphere_Ballon"){
                        var Sphere_Ballon_tween = _this.add.tween(_this.correctGroup[j]);
                        Sphere_Ballon_tween.to({ y: 150 }, 3000,'Linear', true, 500);
                    }

                    if(_this.b1.name == "Sphere" && _this.correctGroup[j].name == "Sphere_BasketBall"){
                        var Sphere_BasketBall_tween = _this.add.tween(_this.correctGroup[j]);
                        //  Sphere_BasketBall_tween.to({ y: 400 }, 1000,Phaser.Easing.Bounce.In, true);
                        Sphere_BasketBall_tween.to({ y: 420 }, 400,'Linear', true);
                        Sphere_BasketBall_tween.onComplete.add(function(){
                            Sphere_BasketBall_tween.to({ y: 470 }, 400,'Linear', true);
                        },this);
                    }

                    if(_this.b1.name == "Sphere" && _this.correctGroup[j].name == "Sphere_Globe"){
                        _this.correctGroup[j].visible=false;

                        _this.Sphere_Globe_Anim=_this.add.sprite(560,160,"sg4_2_1_Sphere_image3_GlowAnim");
                        _this.Sphere_Globe_Anim.anchor.setTo(0.5);

                        anim1 = _this.Sphere_Globe_Anim.animations.add('roll');
                        anim1.play(10, true);

                    }

                    if(_this.b1.name == "Circle" && _this.correctGroup[j].name == "Circle_Clock"){
                        _this.correctGroup[j].visible=false;

                        _this.Circle_Clock_Anim=_this.add.sprite(310,430,"sg4_2_1_Circle_image1_GlowAnim");
                        _this.Circle_Clock_Anim.anchor.setTo(0.5);

                        anim1 = _this.Circle_Clock_Anim.animations.add('move');
                        anim1.play(10, true);

                    }

                    if(_this.b1.name == "square" && _this.correctGroup[j].name == "Square_Frame"){
                        _this.correctGroup[j].visible=false;

                        _this.Square_Frame_Anim=_this.add.sprite(200,200,"sg4_2_1_square_image1_GlowAnim");
                        _this.Square_Frame_Anim.anchor.setTo(0.5);

                        anim1 = _this.Square_Frame_Anim.animations.add('move');
                        anim1.play(10, true);

                    }

                    if(_this.b1.name == "rectangle" && _this.correctGroup[j].name == "Rectangle_Flag"){
                        _this.correctGroup[j].visible=false;

                        _this.Rectangle_Flag_Anim=_this.add.sprite(670,295,"sg4_2_1_rectangle_image3_GlowAnim");
                        _this.Rectangle_Flag_Anim.anchor.setTo(0.5);

                        anim1 = _this.Rectangle_Flag_Anim.animations.add('sway');
                        anim1.play(10, true);

                    }

                    if(_this.b1.name == "Cylinder" && _this.correctGroup[j].name == "Cylinder_Candle"){
                        _this.correctGroup[j].visible=false;

                        _this.Cylinder_Candle_Anim=_this.add.sprite(690,220,"sg4_2_1_Cylinder_image2_GlowAnim");
                        _this.Cylinder_Candle_Anim.anchor.setTo(0.5);

                        anim1 = _this.Cylinder_Candle_Anim.animations.add('burn');
                        anim1.play(10, true);

                    }

                    if(_this.b1.name == "Cylinder" && _this.correctGroup[j].name == "Cylinder_MagicHat"){
                        _this.correctGroup[j].visible=false;

                        _this.Cylinder_MagicHat_Anim=_this.add.sprite(150,400,"sg4_2_1_Cylinder_image3_GlowAnim");
                        _this.Cylinder_MagicHat_Anim.anchor.setTo(0.5);

                        anim1 = _this.Cylinder_MagicHat_Anim.animations.add('fly');
                        anim1.play(5);

                    }

                    if(_this.b1.name == "cube" && _this.correctGroup[j].name == "Cube_CargoBox"){
                        _this.correctGroup[j].visible=false;

                        _this.Cube_CargoBox_Anim=_this.add.sprite(870,420,"sg4_2_1_cube_image4_GlowAnim");
                        _this.Cube_CargoBox_Anim.anchor.setTo(0.5);

                        anim1 = _this.Cube_CargoBox_Anim.animations.add('close');
                        anim1.play(5);

                    }

                    if(_this.b1.name == "cuboid" && _this.correctGroup[j].name == "Cuboid_Bread"){
                        _this.correctGroup[j].visible=false;

                        _this.Cuboid_Bread_Anim=_this.add.sprite(785,435,"sg4_2_1_cuboid_image5_GlowAnim");
                        _this.Cuboid_Bread_Anim.anchor.setTo(0.5);

                        anim1 = _this.Cuboid_Bread_Anim.animations.add('slice');
                        anim1.play(5, false);

                    }

                }

                _this.correctAns1(target);
                temp=1;

            }

        },this);

    },

    checkOverlap:function(spriteA, spriteB) 
    {
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    correctAns1:function(target)
    {
        //_this.noofAttempts++;
        //_this.AnsTimerCount=0;

        _this.celebration1 = true;

        _this.removeListeners();

        commonNavBar_sg4_2_1.playCelebrationSound();
        this.Stararr.push(3);

        var starAnim = _this.starsGroup.getChildAt(_this.count);
        starAnim.smoothed = false;
        var anim4 = starAnim.animations.add('star');
        anim4.play();      
        _this.wrongAnswer = false;
        _this.time.events.add(3500, _this.removeCelebration1, _this);

        target.events.onInputDown.removeAll();

        if(_this.timer)
        {
            _this.timer.stop();
            _this.timer = null;
        }

        telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
    },

    wrongAns1:function(target)
    {
        //_this.noofAttempts++;
        _this.wrongAnswer = true;

        commonNavBar_sg4_2_1.playWrongCelebrationSound();

        _this.time.events.add(500, function(){
            target.frame = 0;
            _this.tickMark.frame = 0;
            _this.flagGroup1.destroy();
            _this.targetGroup=[];
            _this.correctGroup=[];
            _this.wrongGroup.destroy();
            _this.getQuestion();
        }, _this);
        _this.count1 = 1;
    },

    removeListeners:function()
    {   
        _this.b1.inputEnabled=false;
        _this.b2.inputEnabled=false;
        _this.b3.inputEnabled=false;
        _this.b4.inputEnabled=false;
        _this.b5.inputEnabled=false;
        _this.b6.inputEnabled=false;
        _this.b7.inputEnabled=false;
        _this.b8.inputEnabled=false;
        _this.b9.inputEnabled=false;
        _this.b10.inputEnabled=false;
        _this.b11.inputEnabled=false;
        _this.b12.inputEnabled=false;
        _this.b14.inputEnabled=false;
        _this.b13.inputEnabled=false;
        _this.b15.inputEnabled=false;
        _this.b16.inputEnabled=false;
    },

    removeCelebration1:function()
    {
        if(_this.timer1)
        {
            _this.timer1.stop();
        }
        _this.celebration1 = false;

        _this.flagGroup1.destroy();

        _this.targetGroup=[];
        _this.correctGroup=[];
        _this.wrongGroup.destroy();
        _this.count1 = 1;

        if(_this.Sphere_Globe_Anim)
            _this.Sphere_Globe_Anim.destroy();
        if(_this.Circle_Clock_Anim)
            _this.Circle_Clock_Anim.destroy();
        if(_this.Cylinder_Candle_Anim)
            _this.Cylinder_Candle_Anim.destroy();
        if(_this.Rectangle_Flag_Anim)
            _this.Rectangle_Flag_Anim.destroy();
        if(_this.Cube_CargoBox_Anim)
            _this.Cube_CargoBox_Anim.destroy();
        if(_this.Square_Frame_Anim)
            _this.Square_Frame_Anim.destroy();
        if(_this.Cylinder_MagicHat_Anim)
            _this.Cylinder_MagicHat_Anim.destroy();
        if(_this.Cuboid_Bread_Anim)
            _this.Cuboid_Bread_Anim.destroy();

        _this.tickMark.frame = 0;

        _this.no11++;
        if(_this.no11 < 6)
        {
            _this.getQuestion();

            _this.starsGroup.getChildAt(_this.count+1).frame = 2; 
            _this.count++;
        }
        else
        {
            var timerStopVar = commonNavBar_sg4_2_1.stopTimer();
            /*commonNavBar_sg4_2_1.stopTimer();
            commonNavBar_sg4_2_1.stopVoice();
            commonNavBar_sg4_2_1.disableNavBar();

            commonNavBar_sg4_2_1.navBar= null;
            commonNavBar_sg4_2_1.speakerbtn= null;
            commonNavBar_sg4_2_1.backbtn= null;*/

            _this.state.start('sg4_2_1Score',true,false);
        }
    },

    update:function(){

    },

    updateTimer:function() {
        _this.counterForTimer++;
        //console.log("lololil"+counterForTimer);
        if(_this.counterForTimer>59)
        {
            _this.counterForTimer = 0;
            if(_this.minutes<10){
                this.minutes =  this.minutes+1;
                _this.seconds = 00;
            }
            else{
                this.minutes =  this.minutes+1;

            }
        }
        else{
            if (_this.counterForTimer < 10)        
                this.seconds = '0' + this.counterForTimer;
            else
                this.seconds = this.counterForTimer;
        }
        this.timeDisplay.setText(_this.minutes+':' + this.seconds);

    },

    getVoice:function(question)
    {   
        _this.stopVoice();  

        _this.playQuestionSound = document.createElement('audio');
        _this.src = document.createElement('source');

        switch(question)
        {
            case 1:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1a.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1a.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1a.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1a.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1a.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1a.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1a.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1a.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1a.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1a.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1a.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1a.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1a.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1a.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 2:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1b.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1b.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1b.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1b.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1b.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1b.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1b.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1b.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1b.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1b.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1b.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 3:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1c.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1c.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1c.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1c.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1c.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1c.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1c.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1c.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1b.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1c.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1c.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 4:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1d.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1d.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1d.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1d.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1d.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1d.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1d.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1b.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1d.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1b.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1d.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1d.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 5:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1e.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1e.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1e.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1e.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1e.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1e.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1e.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1e.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1e.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1e.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1e.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1e.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1e.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1e.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 6:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1f.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1f.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1f.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1f.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1f.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1f.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1f.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1f.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1f.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1f.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1f.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1f.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1f.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1f.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1f.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1f.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1f.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1f.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 7:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1g.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1g.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1g.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1g.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1g.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1g.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1g.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1g.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1g.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1g.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1g.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1g.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1g.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1g.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1g.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1g.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1g.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1g.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 8:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1h.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1h.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1h.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1h.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1h.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1h.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1h.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1h.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1h.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1h.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1h.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1h.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1h.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1h.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1h.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1h.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1h.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1h.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;

            case 9:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1i.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1i.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1i.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1i.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1i.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1i.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1i.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1i.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1i.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1i.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1i.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1i.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1i.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1i.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1i.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1i.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1i.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1i.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;
                
             case 10:
                if(window.languageSelected == "English")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1j.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/English/sg4.2.1j.mp3";
                }
                else if(window.languageSelected == "Hindi")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1j.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Hindi/sg4.2.1j.mp3";
                }
                else if(window.languageSelected=="Kannada")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1j.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Kannada/sg4.2.1j.mp3";
                }
                else if(window.languageSelected=="Gujarati")
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1j.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Gujarati/sg4.2.1j.mp3";
                }
				else if(window.languageSelected =="Marathi")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Marathi/4.2.1j.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Marathi/sg4.2.1j.mp3";
                    }
					else if(window.languageSelected =="Telugu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Telugu/4.2.1j.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Telugu/sg4.2.1j.mp3";
                    }
					else if(window.languageSelected =="Tamil")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Tamil/4.2.1j.mp3");
						  _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Tamil/sg4.2.1j.mp3";
                    }
					else if(window.languageSelected =="Urdu")
                    {
                         _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Urdu/4.2.1j.mp3");
						 _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Urdu/sg4.2.1j.mp3";
                    }
                else
                {
                    _this.src.setAttribute("src", window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1j.mp3");
                    _this.soundurl =  window.baseUrl+"questionSounds/sg4.2.1/Odiya/sg4.2.1j.mp3";
                    //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                }
                break;
        }

        commonNavBar_sg4_2_1.getVoice(_this.soundurl);

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
        commonNavBar_sg4_2_1.stopTimer();
            commonNavBar_sg4_2_1.stopVoice();
            commonNavBar_sg4_2_1.disableNavBar();

            commonNavBar_sg4_2_1.navBar= null;
            commonNavBar_sg4_2_1.speakerbtn= null;
            commonNavBar_sg4_2_1.backbtn= null;
        _this.stopVoice();
        commonNavBar_sg4_2_1.stopVoice();
    }

};