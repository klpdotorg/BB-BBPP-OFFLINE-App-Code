Game.level4=function(){};
var bg1;
var starsGroup;
var dragBox;
var count;
var gameBoxGroup;
var crocsGroup;
var tickMark;
var objGroup;
var rightOrderArray = [];
var glowOrderArray = [];
var no1;
var count;
var count1;
var qArrays = [];
var graphics;
var numGroup;
var selectedAns = "";
var rightAns = "";
var mainSprite;
var object3;
var scale1Empty = true;
var scale2Empty = true;
var weightScale1,weightScale2,weightScale3,weightScale4;
var obj1Group,obj2Group,obj3Group;
var tweenVal,angleval,tweenVal1,angleval1;
var tweenSlide,tweenSlide1,angleSlide;
var tp,tp1;
//var tempName,tp;
//var tempFrame;
//var targetAnim;
//var tempX,tempY;
//var x,y;
Game.level4.prototype={
    create:function(game){

        no1=0;
        //qArrays = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
       // qArrays = this.shuffle(qArrays);
        count = 0;
        count1 = 0;
        objAdded = 0;
        /*objArray = [
        ['bottle','Ball',40,10,10,3],['Can','Book',40,20,10,5],['Can','Comb',40,5,10,2],['Can','Eraser',40,5,10,2],['Can','Glass',40,10,10,3],['Can','Mug',40,20,10,5],['Can','Key',40,5,10,2],['Can','Pappaya',40,30,10,7],['Can','Carrot',40,5,10,1],['Can','Coin',40,5,10,1]
        ['Can','Pencil',40,5,10,2],['Can','ScrewDriver',40,10,10,3],['Can','Shoe',40,15,10,4],
        ['Ball','Book',10,25,3,6],['Ball','Comb',20,5,5,2],['Ball','Eraser',20,5,5,2],['Ball','Glass',20,10,5,3],['Ball','Mug',10,25,3,6],['Ball','Key',20,5,5,2],['Ball','Pappaya',10,30,3,7],['Ball','Pencil',20,5,5,2],['Ball','ScrewDriver',20,8,5,2],['Ball','Shoe',20,10,5,3],['Ball','Carrot',20,5,5,1],['Ball','Shoe',20,5,5,1],
        ['Book','Comb',25,5,6,2],['Book','Eraser',25,5,6,2],['Book','Glass',25,10,6,3],['Book','Mug',25,10,6,3],['Book','Key',25,5,6,2],['Book','Pappaya',20,40,5,10],['Book','Pencil',25,5,6,2],['Book','ScrewDriver',25,8,6,2],['Book','Shoe',25,10,6,3],['Book','Carrot',25,5,6,1],['Book','Coin',25,5,6,1],
        ['Eraser','Glass',5,20,2,5],['Eraser','Mug',5,20,2,5],['Eraser','Key',15,5,4,2],['Eraser','Pappaya',5,30,2,8],['Eraser','Pencil',15,5,4,2],['Eraser','ScrewDriver',10,20,3,5],['Eraser','Shoe',10,25,3,6],['Eraser','Carrot',5,20,1,5],['Eraser','Coin',15,5,3,1],
        ['Glass','Mug',10,25,3,6],['Glass','Key',15,5,3,2],['Glass','Pappaya',10,30,3,7],['Glass','Pencil',15,5,4,2],['Glass','ScrewDriver',20,10,5,3],['Glass','Shoe',10,20,3,5],['Glass','Carrot',20,10,5,2],['Glass','Coin',20,5,5,1],
        ['Mug','Key',20,5,5,2],['Mug','Pappaya',10,30,3,8],['Mug','Pencil',20,5,5,2],['Mug','ScrewDriver',20,10,5,3],['Mug','Shoe',10,20,3,5],
        ['Key','Pappaya',5,30,2,8],['Key','Pencil',15,5,4,2],['Key','ScrewDriver',5,20,1,5],['Key','Shoe',5,20,1,5],['Key','Carrot',5,20,1,5],['Key','Coin',20,5,5,1],
        ['Pappaya','Glass',25,10,6,3],['Pappaya','Pencil',25,5,6,1],['Pappaya','ScrewDriver',30,10,7,3],['Pappaya','Shoe',30,10,7,3],['Pappaya','Carrot',30,10,7,3],['Pappaya','Coin',30,5,7,1],
        ['Pencil','Glass',5,20,1,5],['Pencil','ScrewDriver',5,20,1,5],['Pencil','Shoe',5,20,1,5],
        ['ScrewDriver','Glass',10,25,2,6],['ScrewDriver','Shoe',10,25,2,6],
        ['Shoe','Glass',25,10,6,2],['Carrot','Coin',20,5,5,1]
        ];*/
        
        qArrays = [1,4,5,7,9,10,11,12,13,14,15,16,17,18,19,20];
        qArrays = this.shuffle(qArrays);
        
        
        /*weightArray = [
            [40,20],[40,20],[40,10],[40,10],[40,20],[40,20],[40,30],[40,10],[40,30],[40,10],[40,20],[40,20],
            [20,20],[20,20],[20,10],[20,10],[20,20],[20,20],[20,30],[20,10],[20,30],[20,10],[20,20],[20,20],
            [20,20],[20,20],[20,10],[20,10],[20,20],[20,20],[20,30],[20,10],[20,30],[20,10],[20,20],[20,20],
        ];
        
        
        
        angleArray = [[10,5]];*/
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

        bg1 = this.add.sprite(0,0, 'level2Bg');
       
        var backbtn = this.add.button(5,1,'backbtn',function(){},this,0,1,2);
        var speaker = this.add.button(908,1,'speaker',function(){},this,0,1,2);
        

        this.generateStarsForTheScene(10);
        
        //no1++;
        this.getQuestion();
        
       // this.gotoFirstQuestion();
        

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
        numGroup.destroy();
       /* objGroup.destroy();
        obj1Group.destroy();
        obj2Group.destroy();
        scale1Group.destroy();
        scale2Group.destroy();*/
        selectedAns="";
        if(no1<9)
        {
            count =0;
            no1++;
            
            var MaintweenDestroy = this.add.tween(objGroup);
            MaintweenDestroy.to({ x: -1000}, 0, 'Linear', true, 0);
            MaintweenDestroy.onComplete.add(function(){
                objGroup.destroy();
            },this);
            var Maintween1Destroy = this.add.tween(scale1Group);
            Maintween1Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween1Destroy.onComplete.add(function(){
                scale1Group.destroy();
            },this);
            var Maintween2Destroy = this.add.tween(scale2Group);
            Maintween2Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween2Destroy.onComplete.add(function(){
                scale2Group.destroy();
            },this);
            var Maintween3Destroy = this.add.tween(obj1Group);
            Maintween3Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween3Destroy.onComplete.add(function(){
                obj1Group.destroy();
            },this);
            var Maintween4Destroy = this.add.tween(obj2Group);
            Maintween4Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween4Destroy.onComplete.add(function(){
                obj2Group.destroy();
            },this);
            var Maintween5Destroy = this.add.tween(obj3Group);
            Maintween5Destroy.to({ x: -1000}, 0, 'Linear', true, 0);
            Maintween5Destroy.onComplete.add(function(){
                obj3Group.destroy();
                this.getQuestion();
            },this);
        
        }
        else
        {
           // console.log("gameover");
            objGroup.destroy();
            scale1Group.destroy();
            scale2Group.destroy();
            obj1Group.destroy();
            obj2Group.destroy();
            obj3Group.destroy();
            this.state.start('score');
        }
    },
    
    checkOverlap:function(spriteA, spriteB) 
    {
        
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    addNumberPad:function(){
        
         numGroup = this.add.group();
        var x = 120;
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,500,'numbg');  
            numbg.anchor.setTo(0.5);
            numbg.name = i;
            
            var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';

            numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);
            
            numbg.inputEnabled = true;
            numbg.input.useHandCursor = true;
            numbg.events.onInputDown.add(this.numClicked,this);
            
            x+=50;
        }
        var txtbox = this.add.sprite(x+50,500,'txtbox');
        txtbox.anchor.setTo(0.5);
        txtbox.name = "txtbox";
        
        var wrongbtn = numGroup.create(x+120,500,'wrongBtn');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+170,500,'rightBtn');
        rightbtn.anchor.setTo(0.5);
        rightbtn.name = "rightbtn";
        rightbtn.name = "wrongbtn";
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        var enterTxt = this.add.text(-2,1, selectedAns);
            //titletext.scale.setTo(1.5);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';

        enterTxt.font = 'Alte Haas Grotesk';
        enterTxt.fontSize = 24;
            //text.fontWeight = 'bold';
        enterTxt.fill = '#65B4C3';

        enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        numGroup.add(txtbox);
        
        
        wrongbtn.events.onInputDown.add(function(){ClickSound.play();enterTxt.setText("");selectedAns="";},this);
        
        rightbtn.events.onInputDown.add(function(target){
            ClickSound.play();
            if(selectedAns==rightAns||selectedAns=="0"+rightAns)  
                {
                    //console.log("correct");
                    target.events.onInputDown.removeAll();
                    
                    //mainSprite.frame = 1;
//                    var anim = weightScale3.animations.add('glow');
//                    anim.play(10);
//                    var anim2 = weightScale4.animations.add('glow');
//                    anim2.play(10);
                     //var anim = mainSprite.animations.add('glow');
                    //anim.play(10);
                    
                    
                    if(scale2Group.getByName("targetAnim1"))
                    {
                        var tempFrame = scale2Group.getByName("targetAnim1").frame; 
                        var tempX = scale2Group.getByName("targetAnim1").x; 
                        var tempY = scale2Group.getByName("targetAnim1").y;
                        scale2Group.getByName("targetAnim1").loadTexture('w1AnimGlow',0,false);
                        scale2Group.getByName("targetAnim1").frame = tempFrame;
                        scale2Group.getByName("targetAnim1").x = tempX+5;
                        scale2Group.getByName("targetAnim1").y = tempY+18.5;
                        
                        var largeTween = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                        largeTween.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
                        largeTween.onComplete.add(function(){
                            
                            var largeTween1 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                            largeTween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                            largeTween1.onComplete.add(function(){

                                    var largeTween2 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                    largeTween2.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
                                    largeTween2.onComplete.add(function(){

                                        var largeTween3 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                        largeTween3.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                        largeTween3.onComplete.add(function(){

                                                var largeTween4 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                                largeTween4.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
                                                largeTween4.onComplete.add(function(){

                                                    var largeTween5 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                                    largeTween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                                    largeTween5.onComplete.add(function(){

                                                        var largeTween6 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                                        largeTween6.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
                                                        largeTween6.onComplete.add(function(){

                                                            var largeTween7 = this.add.tween(scale2Group.getByName("targetAnim1").scale);
                                                            largeTween7.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                                            largeTween7.onComplete.add(function(){


                                                               // this.removeEverthing();


                                                            },this);



                                                        },this);



                                                    },this);



                                                },this);



                                        },this);



                                    },this);



                            },this);
                            
                            
                            
                        },this);
                        
                        
                    }
                    
                    
                    if(scale2Group.getByName("targetAnim"))
                    {
                        var tempFrame = scale2Group.getByName("targetAnim").frame; 
                        var tempX = scale2Group.getByName("targetAnim").x; 
                        var tempY = scale2Group.getByName("targetAnim").y;
                        scale2Group.getByName("targetAnim").loadTexture('w2AnimGlow',0,false);
                        scale2Group.getByName("targetAnim").frame = tempFrame;
                        scale2Group.getByName("targetAnim").x = tempX+2;
                        scale2Group.getByName("targetAnim").y = tempY+17;
                        
                        var largeTween = this.add.tween(scale2Group.getByName("targetAnim").scale);
                        largeTween.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
                        largeTween.onComplete.add(function(){
                            
                            var largeTween1 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                            largeTween1.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                            largeTween1.onComplete.add(function(){

                                    var largeTween2 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                    largeTween2.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
                                    largeTween2.onComplete.add(function(){

                                        var largeTween3 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                        largeTween3.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                        largeTween3.onComplete.add(function(){

                                                var largeTween4 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                largeTween4.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
                                                largeTween4.onComplete.add(function(){

                                                    var largeTween5 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                    largeTween5.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                                    largeTween5.onComplete.add(function(){

                                                        var largeTween6 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                        largeTween6.to({ x:1.05 , y:1.05}, 300, 'Linear', true, 0);
                                                        largeTween6.onComplete.add(function(){

                                                            var largeTween7 = this.add.tween(scale2Group.getByName("targetAnim").scale);
                                                            largeTween7.to({ x:1 , y:1}, 300, 'Linear', true, 0);
                                                            largeTween7.onComplete.add(function(){


                                                               // this.removeEverthing();


                                                            },this);



                                                        },this);



                                                    },this);



                                                },this);



                                        },this);



                                    },this);



                            },this);
                            
                            
                            
                        },this);
                        
                        
                    }
                    
                    
   
                    
                    
                     celebr.play();
                     var starAnim = starsGroup.getChildAt(count1);
                        // console.log(starAnim);
                        starAnim.smoothed = false;
                        var anim4 = starAnim.animations.add('star');
                        anim4.play();
                         //anim4.onComplete.add(function(){this.removeEverthing();},this);
                        this.time.events.add(3000, function(){this.removeEverthing();},this);
                    count1++;
                }
            else
                {
                    //console.log("wrong");
                    selectedAns = "";
                    enterTxt.setText("");
                    var targetGroup = this.add.group();
                    var scaleGroupFlag;
                    if(scale1Group.getByName("targetAnim"))
                    {
                        targetGroup.add(scale1Group.getByName("targetAnim"));
                        targetGroup.x = scale1Group.x;
                        targetGroup.y = scale1Group.y;
                        scaleGroupFlag = "scale1Group";
                    }
                    if(scale1Group.getByName("targetAnim1"))
                    {
                        targetGroup.add(scale1Group.getByName("targetAnim1"));
                        targetGroup.x = scale1Group.x;
                        targetGroup.y = scale1Group.y;
                        scaleGroupFlag = "scale1Group";
                    }
                    if(scale2Group.getByName("targetAnim"))
                    {
                        targetGroup.add(scale2Group.getByName("targetAnim"));
                        targetGroup.x = scale2Group.x;
                        targetGroup.y = scale2Group.y;
                        scaleGroupFlag = "scale2Group";
                    }
                    if(scale2Group.getByName("targetAnim1"))
                    {
                        targetGroup.add(scale2Group.getByName("targetAnim1"));
                        targetGroup.x = scale2Group.x;
                        targetGroup.y = scale2Group.y;
                        scaleGroupFlag = "scale2Group";
                    }
                    waudio.play(); 
                    if(targetGroup.getByName("targetAnim"))
                        targetGroup.bringToTop(targetGroup.getByName("targetAnim"));
                    shake.shake(10, targetGroup);
                   // aiyoh.play(); 
                    this.time.events.add(500, function()
                    {
                     
                   
                        var tempAngle = 0;
                        var tempweight = 0;
                        if(tp!=null)
                        {
                            for(var j=0;j<tp.length;j++)
                            {
                                if(!tp.getChildAt(j).visible)
                                {
                                    tp.getChildAt(j).visible = true;
                                    tp.getChildAt(j).inputEnabled = true;
                                    tp.getChildAt(j).input.useHandCursor = true;
                                    tp.getChildAt(j).events.onInputDown.add(function(target){
                                        this.objectClicked(target,tweenVal,angleVal);
                                    },this);
                                    //break;
                                    tempAngle=angleSlide;
                                    tempweight=tweenSlide;
                                }
                            }
                        }
                        if(tp1!=null)
                        {
                            for(var j=0;j<tp1.length;j++)
                            {
                                if(tp1.getChildAt(j).tint == 0xA1A1A1)
                                {
                                    tp1.getChildAt(j).visible = true;
                                    tp1.getChildAt(j).tint = 0xFFFFFF;
                                    tp1.getChildAt(j).inputEnabled = true;
                                    tp1.getChildAt(j).input.useHandCursor = true;
                                    tp1.getChildAt(j).events.onInputDown.add(function(target){
                                        this.objectClicked1(target,tweenVal1,angleVal1);
                                    },this);
                                    //break;
                                    tempAngle=angleSlide;
                                    tempweight=tweenSlide;
                                }
                            }
                        }
                        
                        targetGroup.destroy();
                            //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                        console.log("tempAngle"+tempAngle);
                        weightScale2.angle=angleSlide;
                        scale1Group.y=tweenSlide;
                        scale2Group.y=tweenSlide1;

                       
                    },this);
                }
        },this);
        
       
    },
    
    
    numClicked:function(target){
        //console.log(target.name);
        
        ClickSound.play();
        if(selectedAns.length<3)
        {
            selectedAns += target.name;
            numGroup.getByName("txtbox").getChildAt(0).setText(selectedAns);
        }
        
       // console.log(selectedAns);
        
    },
    getQuestion:function(target)
    {       
        console.log("get"+no1);
        switch(qArrays[no1])      
        {
            case 1: this.gotoFirstQuestion();
                    break;
            case 2: this.gotoSecondQuestion();
                    break;
            case 3: this.gotoThirdQuestion();
                    break;
            case 4: this.gotoFourthQuestion();
                    break;
            case 5: this.gotoFifthQuestion();
                    break;
            case 6: this.gotoSixthQuestion();
                    break;
            case 7: this.gotoSeventhQuestion();
                    break;
            case 8: this.gotoEightQuestion();
                    break;
            case 9: this.gotoNinthQuestion();
                    break;
            case 10: this.gotoTenthQuestion();
                    break;
            case 11: this.gotoEleventhQuestion();
                    break;
            case 12: this.gotoTwelvethQuestion();
                    break;
            case 13: this.gotoThirteenthQuestion();
                    break;
            case 14: this.gotoFourteenthQuestion();
                    break;
            case 15: this.gotoFifteenthQuestion();
                    break;
            case 16: this.gotoSixteenthQuestion();
                    break;
            case 17: this.gotoSeventeenthQuestion();
                    break;
            case 18: this.gotoEighteenthQuestion();
                    break;
            case 19: this.gotoNinteenthQuestion();
                    break;
            case 20: this.gotoTwentythQuestion();
                    break;
        }
        
    },
     
   
    
    gotoFirstQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
        tp=null;
        tp1=null;
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
         weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'bottle2');
        object1.name = "bottle2";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,1.25,0.5);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
            
        x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
         
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,1.05,0.5);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
    
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "110";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
        
         angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
       
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
     },
    
    gotoSecondQuestion:function(){
               this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'bottle');
        object1.name = "bottle";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,2.5,1);
            },this);
           y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        } 
        x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
             
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.17,0.1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "99";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
          angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
     },
     
    gotoThirdQuestion:function(){
               this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Pappaya');
        object1.name = "Pappaya";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,2.8,1.25);
            },this);
            y+=14;
            obj2Group.add(object2);
            //y-=5;
            
        }
              x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.2,0.2);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "86";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
                   angleSlide = weightScale2.angle-11;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=11;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
     },
    
     gotoFourthQuestion:function(){
                 this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -40);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,70);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Shoe');
        object1.name = "Shoe";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,3.2,1.44);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
          x = 0;
        y = 0;
             for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.7,0.4);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "73";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
                    angleSlide = weightScale2.angle-11;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=11;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
     },
    
      gotoFifthQuestion:function(){
                    this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -40);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,70);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Book');
        object1.name = "Book";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,3.6,1.5);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
        x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.45,0.2);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "65";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
            angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
     },
    
     gotoSixthQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -40);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,70);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Ball');
        object1.name = "Ball";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,4.17,1.71);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
         
            x = 0;
            y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.38,0.2);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "58";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
           angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;
        
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
     },
    
    
      gotoSeventhQuestion:function(){
                    this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Carrot');
        object1.name = "Carrot";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
          //      tweenVal = 2;
          //      angleVal = 0.8;
                this.objectClicked1(target,5.8,2.4);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
              x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
        //        tweenVal = 2;
        //        angleVal = 0.8;
                this.objectClicked(target,0.7,0.3);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "42";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
       /* 
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=5.7;
          scale1Group.y-=12;
          scale2Group.y+=12;
        */
          
          angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
     },
    
      gotoEightQuestion:function(){
                        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Glass');
        object1.name = "Glass";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
           object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
               // tweenVal = 2;
               // angleVal = 0.8;
                this.objectClicked1(target,7.2,3);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
              x = 0;
                y = 0;
         for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
               // tweenVal = 2;
               // angleVal = 0.8;
                this.objectClicked(target,0.42,0.2);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "37";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
      /*         
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.4;
          scale1Group.y-=12;
          scale2Group.y+=12;
        */
          
          angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
     },
    
     gotoNinthQuestion:function(){
                     this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
         weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'ScrewDriver');
        object1.name = "ScrewDriver";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
           object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
               // tweenVal = 2;
               // angleVal = 0.8;
                this.objectClicked1(target,10,4);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        } 
         
             x = 0;
            y = 0;
         for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                //tweenVal = 2;
                //angleVal = 0.8;
                this.objectClicked(target,1.15,0.4);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "24";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        /*
               
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=5.4;
          scale1Group.y-=8;
          scale2Group.y+=8;
        
        */
         
         angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
     },
    
     gotoTenthQuestion:function(){
         
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Mug');
        object1.name = "Mug";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
           object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,23,9);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        } 
         
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2,0.7);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "11";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.9;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
         
         angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
     },
    
      gotoEleventhQuestion:function(){
           this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'coin1');
        object1.name = "coin1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                //tweenVal = 2;
                //angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
             x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                //tweenVal = 2;
                //angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "10";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+25;
         tweenSlide1 = scale2Group.y-25;
        
          weightScale2.angle-=10;
          scale1Group.y+=25;
          scale2Group.y-=25;
               
        
        
        
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
      
     },
    
     gotoTwelvethQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Banana');
        object1.name = "Banana";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
            x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "9";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.2;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
         
         angleSlide = weightScale2.angle-9;
         tweenSlide = scale2Group.y+22.5;
         tweenSlide1 = scale2Group.y-22.5;
        
          weightScale2.angle-=9;
          scale1Group.y+=22.5;
          scale2Group.y-=22.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
      
      
     },
    
      gotoThirteenthQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'tomoto');
        object1.name = "tomoto";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
              x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "8";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
       /* 
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.2;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
          
        angleSlide = weightScale2.angle-8;
         tweenSlide = scale2Group.y+20;
         tweenSlide1 = scale2Group.y-20;
        
          weightScale2.angle-=8;
          scale1Group.y+=20;
          scale2Group.y-=20;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
      
     },
    
     gotoFourteenthQuestion:function(){
        this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'spoon');
        object1.name = "spoon";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
               x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "7";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=4.7;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
         
         angleSlide = weightScale2.angle-7;
         tweenSlide = scale2Group.y+17.5;
         tweenSlide1 = scale2Group.y-17.5;
        
          weightScale2.angle-=7;
          scale1Group.y+=17.5;
          scale2Group.y-=17.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
      
     },
    
    
     gotoFifteenthQuestion:function(){
       this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Comb');
        object1.name = "Comb";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
            
                x = 0;
        y = 0;
      for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "6";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
       /*        
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y-=20;
          scale2Group.y+=20;
        */
         
         angleSlide = weightScale2.angle-6;
         tweenSlide = scale2Group.y+15;
         tweenSlide1 = scale2Group.y-15;
        
          weightScale2.angle-=6;
          scale1Group.y+=15;
          scale2Group.y-=15;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
     },
    
    gotoSixteenthQuestion:function(){
       this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'Key');
        object1.name = "Key";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "5";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=8;
          scale1Group.y-=20;
          scale2Group.y+=20;
        */
        
        angleSlide = weightScale2.angle-5;
         tweenSlide = scale2Group.y+12.5;
         tweenSlide1 = scale2Group.y-12.5;
        
          weightScale2.angle-=5;
          scale1Group.y+=12.5;
          scale2Group.y-=12.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
      
     },
    
      gotoSeventeenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
         weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'eraser1');
        object1.name = "eraser1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
          
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "4";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=5;
          scale1Group.y-=12;
          scale2Group.y+=12;
        */
          
          angleSlide = weightScale2.angle-4;
         tweenSlide = scale2Group.y+10;
         tweenSlide1 = scale2Group.y-10;
        
          weightScale2.angle-=4;
          scale1Group.y+=10;
          scale2Group.y-=10;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);  
      
     },
    
     gotoEighteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
         weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'eraser1');
        object1.name = "eraser1";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "3";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
          /*     
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=3.6;
          scale1Group.y-=12;
          scale2Group.y+=12;
        */
         
         angleSlide = weightScale2.angle-3;
         tweenSlide = scale2Group.y+7.5;
         tweenSlide1 = scale2Group.y-7.5;
        
          weightScale2.angle-=3;
          scale1Group.y+=7.5;
          scale2Group.y-=7.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);  
      
     },
    
    gotoNinteenthQuestion:function(){
         this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'rope');
        object1.name = "rope";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
            object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
        
            x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "2";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
        /*       
        
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=3.7;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
        
        angleSlide = weightScale2.angle-2;
         tweenSlide = scale2Group.y+5;
         tweenSlide1 = scale2Group.y-5;
        
          weightScale2.angle-=2;
          scale1Group.y+=5;
          scale2Group.y-=5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);  
      
     },
    
     gotoTwentythQuestion:function(){
         this.addNumberPad();
        scale1Empty = true;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
       weightScale3 = this.add.sprite(243,236,'level2weight32');
        
        var graphics = this.add.graphics(0, -40);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,70);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(484,236,'level2weight42');
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,140);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       // object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        object1 = this.add.sprite(this.world.centerX-100,280,'leef');
        object1.name = "leef";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
        x = 0;
        y = 0;
        for(var i=0;i<10;i++)
        {
            
           object2 = this.add.sprite(this.world.centerX+360,this.world.centerY+150-y,'w1');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "w1";
            object2.anchor.setTo(0.5,1);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked1(target,25,10);
            },this);
            y+=14;
            
            obj2Group.add(object2);
            //y-=5;
        }
         
             x = 0;
        y = 0;
        for(var j=0;j<10;j++)
        {
          if(j==5)
            {
                 x-=140;
                y+=14;
            }
            object3 = this.add.sprite(this.world.centerX+300+x,this.world.centerY+150+y,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            //object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2.5,1);
            },this);
            x+=25;
            
            obj3Group.add(object3);
        }
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(0, 300);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,960,150);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "1";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(weightScale3);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+44;
        
        
        
               
        /*
        //this.objectClicked(object1,50,8);
          weightScale2.angle-=3.7;
          scale1Group.y-=8;
          scale2Group.y+=8;
        */
         
         angleSlide = weightScale2.angle-12;
         tweenSlide = scale2Group.y+2.5;
         tweenSlide1 = scale2Group.y-2.5;
        
          weightScale2.angle-=1;
          scale1Group.y+=2.5;
          scale2Group.y-=2.5;
        
        
        
        
        //this.objectClicked(object1,50,8);
        //this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,20,8);
        //this.bringToTop(weightScale2);

     /*   var tween = this.add.tween(weightScale2);
            tween.to({ angle: 10}, 0, 'Linear', true, 1000);
        var tween1 = this.add.tween(weightScale3);
            tween1.to({ y: weightScale3.y-40}, 0, 'Linear', true, 1000);
        var tween2 = this.add.tween(weightScale4);
            tween2.to({ y: weightScale4.y+40}, 0, 'Linear', true, 1000);
        */  
         objGroup.x = 1000;
        scale1Group.x = 1000;
        scale2Group.x = 1000;
        obj1Group.x = 1000;
        obj2Group.x = 1000;
        obj3Group.x = 1000;
        var Maintween = this.add.tween(objGroup);
        Maintween.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween1 = this.add.tween(scale1Group);
        Maintween1.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween2 = this.add.tween(scale2Group);
        Maintween2.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween3 = this.add.tween(obj1Group);
        Maintween3.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween4 = this.add.tween(obj2Group);
        Maintween4.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj3Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);  
      
     },
    objectClicked:function(target,tween1,tween2)
    {
            ClickSound.play();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){
                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,weightScale3.getChildAt(0))&&scale1Empty&&scale2Group.y<=24)
                {
                     if(target.name=="bottle2"||target.name=="bottle"||target.name=="Pappaya"||target.name=="Book"||target.name=="Ball"||target.name=="Carrot"||target.name=="Glass"||target.name=="ScrewDriver"||target.name=="Mug"||target.name=="coin1"||target.name=="Banana"||target.name=="tomoto"||target.name=="spoon"||target.name=="Comb1"||target.name=="Key"||target.name=="eraser1"||target.name=="Pencil"||target.name=="rope"||target.name=="leef"||target.name=="Shoe")
                    {
                        scale1Empty = false;
                        scale1Group.add(target);
                        scale1Group.bringToTop(weightScale3);
                        target.x = weightScale3.x+100;
                        target.y = weightScale3.y+44;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
                       var tempFrame = 0;
                       target.visible = false;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale1Group.getByName('targetAnim'))
                        {
                            tempFrame = scale1Group.getByName('targetAnim').frame+1;
                            scale1Group.getByName('targetAnim').destroy();
                        }
                        tempName = target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale3.x+115, weightScale3.y+25,tempName);
                        targetAnim.name = "targetAnim";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale1Group.add(targetAnim);
                        scale1Group.bringToTop(weightScale3);
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        targetAnim.events.onInputDown.add(function(target){
                            console.log(tweenVal);
                            this.objectRemoved(target,tweenVal,angleVal);
                        },this);
                    }
                    snapSound.play();
                    target.events.onInputDown.removeAll();
                    this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else if(this.checkOverlap(target,weightScale4.getChildAt(0))&&scale2Empty&&scale2Group.y<=24)
                {
                    if(target.name=="bottle2"||target.name=="bottle"||target.name=="Pappaya"||target.name=="Book"||target.name=="Ball"||target.name=="Carrot"||target.name=="Glass"||target.name=="ScrewDriver"||target.name=="Mug"||target.name=="coin1"||target.name=="Banana"||target.name=="tomoto"||target.name=="spoon"||target.name=="Comb1"||target.name=="Key"||target.name=="eraser1"||target.name=="Pencil"||target.name=="rope"||target.name=="leef"||target.name=="Shoe")
                    {
                        scale2Empty = false;
                    
                        scale2Group.add(target);
                        scale2Group.bringToTop(weightScale4);
                        target.x = weightScale4.x+130;
                        target.y = weightScale4.y+44;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
                       var tempFrame = 0;
                       target.visible = false;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale2Group.getByName('targetAnim'))
                        {
                            tempFrame = scale2Group.getByName('targetAnim').frame+1;
                            scale2Group.getByName('targetAnim').destroy();
                        }
                        tempName = target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale4.x+143, weightScale4.y+25,tempName);
                        targetAnim.name = "targetAnim";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale2Group.add(targetAnim);
                        scale2Group.bringToTop(weightScale4);
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp = target.parent;
                        tweenVal = tween1;
                        angleVal = tween2;
                        targetAnim.events.onInputDown.add(function(target){
                            console.log(tweenVal);
                            this.objectRemoved(target,tweenVal,angleVal);
                        },this);
                    }
                    snapSound.play();
                    target.events.onInputDown.removeAll();
                    
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },this);
   },
    
    objectClicked1:function(target,tween1,tween2)
    {
        console.log("obj1");
            ClickSound.play();
            tempX = target.x;
            tempY = target.y;
            target.input.enableDrag();
            target.events.onDragStop.add(function(){
                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,weightScale3.getChildAt(0))&&scale1Empty&&scale2Group.y<=24)
                {
                     if(target.name=="bottle2"||target.name=="Pappaya"||target.name=="Shoe"||target.name=="Book"||target.name=="Ball"||target.name=="Carrot"||target.name=="Glass"||target.name=="ScrewDriver"||target.name=="Mug"||target.name=="coin1"||target.name=="Banana"||target.name=="tomoto"||target.name=="spoon"||target.name=="Comb1"||target.name=="Key"||target.name=="eraser1"||target.name=="Pencil"||target.name=="rope"||target.name=="leef")
                    {
                        scale1Empty = false;
                        scale1Group.add(target);
                        scale1Group.bringToTop(weightScale3);
                        target.x = weightScale3.x+100;
                        target.y = weightScale3.y+44;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
                       var tempFrame = 0;
                       //target.visible = false;
                        target.tint = 0xA1A1A1;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale1Group.getByName('targetAnim1'))
                        {
                            tempFrame = scale1Group.getByName('targetAnim1').frame+1;
                            scale1Group.getByName('targetAnim1').destroy();
                        }
                        tempName = target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale3.x+115, weightScale3.y+25,tempName);
                        targetAnim.name = "targetAnim1";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale1Group.add(targetAnim);
                        scale1Group.bringToTop(weightScale3);
                        if(scale1Group.getByName('targetAnim'))
                        {
                            scale1Group.bringToTop(scale1Group.getByName('targetAnim'));
                        }
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp1 = target.parent;
                        tweenVal1 = tween1;
                        angleVal1 = tween2;
                        targetAnim.events.onInputDown.add(function(target){
                            console.log(tweenVal);
                            this.objectRemoved1(target,tweenVal1,angleVal1);
                        },this);
                    }
                    snapSound.play();
                    target.events.onInputDown.removeAll();
                    
                    this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else if(this.checkOverlap(target,weightScale4.getChildAt(0))&&scale2Empty&&scale2Group.y<=24)
                {
                    if(target.name=="bottle2"||target.name=="Pappaya"||target.name=="Shoe"||target.name=="Book"||target.name=="Ball"||target.name=="Carrot"||target.name=="Glass"||target.name=="ScrewDriver"||target.name=="Mug"||target.name=="coin1"||target.name=="Banana"||target.name=="tomoto"||target.name=="spoon"||target.name=="Comb1"||target.name=="Key"||target.name=="eraser1"||target.name=="Pencil"||target.name=="rope"||target.name=="leef")
                    {
                        scale2Empty = false;
                    
                        scale2Group.add(target);
                        scale2Group.bringToTop(weightScale4);
                        target.x = weightScale4.x+130;
                        target.y = weightScale4.y+44;
                       /* if(target.name == "Pencil"||target.name == "Key"||target.name == "ScrewDriver")
                        {
                            target.angle -= 10;
                            target.x += 20;
                            target.y -= 10;
                        }*/
                    }
                    else
                    {
                       var tempFrame = 0;
                       //target.visible = false;
                        target.tint = 0xA1A1A1;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale2Group.getByName('targetAnim1'))
                        {
                            tempFrame = scale2Group.getByName('targetAnim1').frame+1;
                            scale2Group.getByName('targetAnim1').destroy();
                        }
                        tempName = target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale4.x+143, weightScale4.y+44,tempName);
                        targetAnim.name = "targetAnim1";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale2Group.add(targetAnim);
                        scale2Group.bringToTop(weightScale4);
                        
                        if(scale2Group.getByName('targetAnim'))
                        {
                            scale2Group.bringToTop(scale2Group.getByName('targetAnim'));
                        }
                        
                        targetAnim.inputEnabled = true;
                        targetAnim.input.useHandCursor = true;
                        tp1 = target.parent;
                        tweenVal1 = tween1;
                        angleVal1 = tween2;
                        targetAnim.events.onInputDown.add(function(target){
                            console.log(tweenVal);
                            this.objectRemoved1(target,tweenVal1,angleVal1);
                        },this);
                    }
                    snapSound.play();
                    target.events.onInputDown.removeAll();
                    
                    this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                }
                else
                {
                    target.x = tempX;
                    target.y = tempY;
                }
            },this);
   },
    
    
    objectRemoved:function(target,tween1,tween2)
    {
        console.log("hereeeeeeeeeeee");
        ClickSound.play();
        console.log(target.parent);
        var targetParent = target.parent;
        //tempName = target.name;
        
        //console.log(target.name);
        //console.log(tempName);
        if(targetParent==scale2Group)
        {
            console.log("here");
            var targetAnim = this.add.sprite( weightScale4.x+143, weightScale4.y+24.5,"w2Anim");
        }
        else
        {
             console.log("here2");
            var targetAnim = this.add.sprite( weightScale3.x+115, weightScale3.y+25,"w2Anim");
        }
        
        targetAnim.name = "targetAnim";
        targetAnim.anchor.setTo(0.5,1);
        targetAnim.frame = target.frame;
                        
        target.parent.add(targetAnim);
        target.parent.bringToTop(weightScale3);
        targetAnim.inputEnabled = true;
        targetAnim.input.useHandCursor = true;
        targetAnim.events.onInputDown.add(function(target){
            this.objectRemoved(target,tweenVal,angleVal);
        },this);
               
                //newTarget.frame = target.frame-1;
                //target.frame = 0;
        
        if(target.frame == 0)
            {
                console.log("yo");
               targetAnim.visible = false;
            }
        else
            {
                targetAnim.frame = target.frame-1;
            }
        
        target.input.enableDrag();
            target.events.onDragStart.add(function(target){
                if(target.frame!=0)
                    target.frame=0;
                },this);
        
            target.events.onDragStop.add(function(){
                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {  
                    snapSound.play();
                    for(var j=0;j<tp.length;j++)
                    {
                        if(!tp.getChildAt(j).visible)
                        {
                            tp.getChildAt(j).visible = true;
                            tp.getChildAt(j).inputEnabled = true;
                            tp.getChildAt(j).input.useHandCursor = true;
                            tp.getChildAt(j).events.onInputDown.add(function(target){
                                this.objectClicked(target,tweenVal,angleVal);
                            },this);
                            
                            if(!targetAnim.visible)
                                targetAnim.destroy();
                            
                            break;
                        }
                    }
                    target.destroy();
                    //newTarget.x = tempX;
                    //newTarget.y = tempY;
                    if(targetParent==scale2Group)
                    {
                        console.log("yo1");
                       this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);     
                    }
                    else
                    {
                        console.log("yo2");
                       this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                    }
                }
                else
                {
                     if(!targetAnim.visible)
                        targetAnim.visible = true;
                    else
                        targetAnim.frame+=1;
                    
                    
                    target.destroy();
             
                }
            },this);
    
        

   },
    
    objectRemoved1:function(target,tween1,tween2)
    {
        ClickSound.play();
        console.log(target.parent);
        var targetParent = target.parent;
        tempName = target.name;
        if(targetParent==scale2Group)
        {
            console.log("here");
            var targetAnim = this.add.sprite( weightScale4.x+143, weightScale4.y+44,"w1Anim");
        }
        else
        {
             console.log("here2");
            var targetAnim = this.add.sprite( weightScale3.x+115, weightScale3.y+25,"w1Anim");
        }
        
        targetAnim.name = "targetAnim1";
        targetAnim.anchor.setTo(0.5,1);
        targetAnim.frame = target.frame;
                        
        target.parent.add(targetAnim);
        target.parent.bringToTop(weightScale3);
         if(scale2Group.getByName('targetAnim'))
                        {
                            scale2Group.bringToTop(scale2Group.getByName('targetAnim'));
                        }
        targetAnim.inputEnabled = true;
        targetAnim.input.useHandCursor = true;
        targetAnim.events.onInputDown.add(function(target){
            this.objectRemoved1(target,tweenVal1,angleVal1);
        },this);
               
                //newTarget.frame = target.frame-1;
                //target.frame = 0;
        
        if(target.frame == 0)
            {
                console.log("yo");
               targetAnim.visible = false;
            }
        else
            {
                targetAnim.frame = target.frame-1;
            }
        
        target.input.enableDrag();
            target.events.onDragStart.add(function(target){
                if(target.frame!=0)
                    target.frame=0;
                },this);
        
            target.events.onDragStop.add(function(){
                target.input.disableDrag();
                target.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {  
                    snapSound.play();
                    for(var j=0;j<tp1.length;j++)
                    {
                        if(tp1.getChildAt(j).tint == 0xA1A1A1)
                        {
                            tp1.getChildAt(j).visible = true;
                            tp1.getChildAt(j).tint = 0xFFFFFF;
                            tp1.getChildAt(j).inputEnabled = true;
                            tp1.getChildAt(j).input.useHandCursor = true;
                            tp1.getChildAt(j).events.onInputDown.add(function(target){
                                this.objectClicked1(target,tweenVal1,angleVal1);
                            },this);
                            
                            if(!targetAnim.visible)
                                targetAnim.destroy();
                            
                            break;
                        }
                    }
                    target.destroy();
                    //newTarget.x = tempX;
                    //newTarget.y = tempY;
                    if(targetParent==scale2Group)
                    {
                        console.log("yo1");
                       this.tweenTheMachineRight(weightScale2,scale1Group,scale2Group,tween1,tween2);     
                    }
                    else
                    {
                        console.log("yo2");
                       this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                    }
                }
                else
                {
                     if(!targetAnim.visible)
                        targetAnim.visible = true;
                    else
                        targetAnim.frame+=1;
                    
                    
                    target.destroy();
                   // newTarget.x = tempX;
                   // newTarget.y = tempY;
                   // newTarget.visible = false;
                   // target.frame+=1;
                   // target.visible=true;
                }
            },this);
    
        
         /*   for(var j=0;j<obj2Group.length;j++)
            {
                if(!obj2Group.getChildAt(j).visible)
                {
                    newTarget = obj2Group.getChildAt(j); 
                   
                    tempX = newTarget.x;
                    tempY = newTarget.y;
                    
                    newTarget.visible = true;
                    break;
                }
            }
        
            newTarget.input.enableDrag();
            newTarget.events.onDragStop.add(function(){
                newTarget.input.disableDrag();
                newTarget.events.onDragStop.removeAll();
                if(this.checkOverlap(target,objGroup.getByName("graphics2")))
                {
                          
                    snapSound.play();
                    newTarget.x = tempX;
                    newTarget.y = tempY;
                }
                else
                {
                    newTarget.x = tempX;
                    newTarget.y = tempY;
                    newTarget.visible = false;
                    target.frame+=1;
                    target.visible=true;
                }
            },this);*/
   },
                                                                  
    tweenTheMachineLeft:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this;
        
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle+angle}, 0, 'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y-weight}, 0, 'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y+weight}, 0, 'Linear', true, 0);
            tween2.onComplete.add(function(){
                _this.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
             //object1.events.onInputDown.add(this.checkCorrectAns,this);   
             //object2.events.onInputDown.add(this.checkCorrectAns,this);
          /*  for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    
    tweenTheMachineRight:function(w2,w3,w4,weight,angle)
    {
       this.input.enabled = false;
       var _this = this; 
        var tween = this.add.tween(w2);
            tween.to({ angle: w2.angle-angle}, 0, 'Linear', true, 0);
        var tween1 = this.add.tween(w3);
            tween1.to({ y: w3.y+weight}, 0, 'Linear', true, 0);
        var tween2 = this.add.tween(w4);
            tween2.to({ y: w4.y-weight}, 0, 'Linear', true, 0);
        
        tween2.onComplete.add(function(){
                _this.input.enabled = true;
            });
        objAdded++;
        if(objAdded>=2)
        {
            // object1.events.onInputDown.add(this.checkCorrectAns,this);   
            // object2.events.onInputDown.add(this.checkCorrectAns,this);  
           /* for(var k=0;k<numGroup.length;k++)
            {
                numGroup.getChildAt(k).inputEnabled = true;  
            }*/
        }
    },
    

     
   
    
   
    generateStarsForTheScene:function(count)
    {
        starsGroup = this.add.group();
        
        for (var i = 0; i < count; i++)
        {
    
            starsGroup.create(this.world.centerX-15, 10, 'starAnim');
            
            for(var j =0;j<i;j++)
            {
                if(starsGroup.getChildAt(j))
                {
                    starsGroup.getChildAt(j).x-=15;
                    starsGroup.getChildAt(i).x+=15;
                }
            }
        }                       
    },
    
 
    update:function(){

    },
    
};