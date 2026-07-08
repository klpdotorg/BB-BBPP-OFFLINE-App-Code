Game.level1=function(){};
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
Game.level1.prototype={
    create:function(game){

        no1=0;
       
        count = 0;
        count1 = 0;
        objAdded = 0;
       
        
        qArrays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
       // qArrays = this.shuffle(qArrays);
        
        
    
        shake = new Phaser.Plugin.Shake(game);
        game.plugins.add(shake);

        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.physics.setBoundsToWorld();

        bg1 = this.add.sprite(0,0, 'bg1');
       
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
                        scale2Group.getByName("targetAnim1").x = tempX+2;
                        scale2Group.getByName("targetAnim1").y = tempY+17;
                        
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
                        //numGroup.destroy();
                        //objGroup.destroy();
                        //obj1Group.destroy();
                        //obj2Group.destroy();
                        //scale1Group.destroy();
                   
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
                                if(tp1.getChildAt(j).frame==1)
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
                        
                       /* if((targetGroup.getByName("targetAnim")||targetGroup.getByName("targetAnim1"))&&scaleGroupFlag=="scale1Group")
                        {
                            targetGroup.destroy();
                            //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                            console.log("tempAngle"+tempAngle);
                            weightScale2.angle=tempAngle;
                            scale1Group.y=tempweight;
                            scale2Group.y=tempweight; 
                        }
                        if((targetGroup.getByName("targetAnim")||targetGroup.getByName("targetAnim1"))&&scaleGroupFlag=="scale2Group")
                        {
                            targetGroup.destroy();
                            console.log("tempAngle"+tempAngle);
                            //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                            weightScale2.angle=tempAngle;
                            scale1Group.y=tempweight;
                            scale2Group.y=tempweight; 
                        }*/
                        
                        
                      
                      /*  if(scale1Group.getByName("targetAnim"))
                        {
                            scale1Group.getByName("targetAnim").destroy();
                            //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                            weightScale2.angle+=tempAngle;
                            scale1Group.y-=tempweight;
                            scale2Group.y+=tempweight;
                        }
                        if(scale1Group.getByName("targetAnim1"))
                        {
                            scale1Group.getByName("targetAnim1").destroy();
                            //this.tweenTheMachineLeft(weightScale2,scale1Group,scale2Group,tween1,tween2);
                            weightScale2.angle+=tempAngle;
                            scale1Group.y-=tempweight;
                            scale2Group.y+=tempweight;
                        }
                        if(scale2Group.getByName("targetAnim"))
                        {
                            scale2Group.getByName("targetAnim").destroy();
                            weightScale2.angle-=tempAngle;
                            scale1Group.y+=tempweight;
                            scale2Group.y-=tempweight;
                        }
                        if(scale2Group.getByName("targetAnim1"))
                        {
                            scale2Group.getByName("targetAnim1").destroy();
                            weightScale2.angle-=tempAngle;
                            scale1Group.y+=tempweight;
                            scale2Group.y-=tempweight;
                        }*/
                       //this.getQuestion();
                       
                    },this);
                }
        },this);
        
        //console.log(numGroup.length);
        
       /* for(var k=0;k<numGroup.length;k++)
        {
            numGroup.getChildAt(k).inputEnabled = false;  
        }*/
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
        scale1Empty = false;
        scale2Empty = true;
        objAdded = 0;
        objGroup = this.add.group();
        scale1Group = this.add.group();
        scale2Group = this.add.group();
        obj1Group = this.add.group();
        obj2Group = this.add.group();
        obj3Group = this.add.group();
        obj4Group = this.add.group();
        obj5Group = this.add.group();
         tp=null;
    /*
        mainSprite = this.add.sprite(560,192,'shoe');
        mainSprite.anchor.setTo(0.5);
        mainSprite.name = "shoe";
        mainSprite.width -= 8;*/
        
        weightScale1 = this.add.sprite(this.world.centerX-150,300,'level2weight1');
        weightScale1.anchor.setTo(0.5,0);
        
        weightScale2 = this.add.sprite(this.world.centerX-150,310,'level2weight2');
        weightScale2.anchor.setTo(0.5,0.5);
        
        weightScale3 = this.add.sprite(8,223,'level2weight32');
        weightScale3.scale.setTo(0.95,0.89);
       
        
        var graphics = this.add.graphics(0, -120);
        graphics.lineStyle(1, 0xFFFFFF, 0.8);
        graphics.beginFill(0xFF700B, 1);
        graphics.drawRect(0,0,200,200);      
        graphics.boundsPadding = 0;
        graphics.alpha=0;
        weightScale3.addChild(graphics);
             
        weightScale4 = this.add.sprite(345,223,'level2weight42');
        weightScale4.scale.setTo(0.95,0.89);
        
        var graphics1 = this.add.graphics(40, -110);
        graphics1.lineStyle(1, 0xFFFFFF, 0.8);
        graphics1.beginFill(0xFF700B, 1);
        graphics1.drawRect(0,0,200,170);     
        graphics1.boundsPadding = 0;
        graphics1.alpha=0;
        weightScale4.addChild(graphics1);
         
        tempX = 0;
        tempY = 0;
        
        
       //var object1 = this.add.sprite(this.world.centerX-350,440,objArray[qArrays[count]][0]);
        var object1 = this.add.sprite(this.world.centerX-100,280,'Pappaya');
        object1.name = "Pappaya";
        mainSprite = object1;
       
      
        
        object1.anchor.setTo(0.5,1);
        object1.inputEnabled = true;
        object1.input.useHandCursor = true;
        object1.events.onInputDown.add(function(target){
            //this.objectClicked(target,20,8);
        },this);
         
        obj1Group.add(object1);
        
        //obj1Group.addChild(object1);
        
       // object2 = this.add.sprite(this.world.centerX+350,440,objArray[qArrays[count]][1]);
   
            
            var object2 = this.add.sprite(this.world.centerX+280,this.world.centerY-100,'50g');
            //object2.name = objArray[qArrays[count]][1];
            object2.name = "50g";
            object2.anchor.setTo(0.5,1);
            object2.scale.setTo(0.9,0.9);
           // obj2.addChild(object2);
            object2.inputEnabled = true;
            object2.input.useHandCursor = true;
            
            object2.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2,0.8);
            },this);
            //y+=12;
            
            obj2Group.add(object2);
        
        
            var object3 = this.add.sprite(this.world.centerX+330,this.world.centerY-40,'100g');
            //object2.name = objArray[qArrays[count]][1];
            object3.name = "100g";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.95,0.95);
           // obj2.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2,0.8);
            },this);
            //y+=12;
            
            obj3Group.add(object3);
        
            var object4 = this.add.sprite(this.world.centerX+280,this.world.centerY+35,'200g');
            //object2.name = objArray[qArrays[count]][1];
            object4.name = "200g";
            object4.anchor.setTo(0.5,1);
            object4.scale.setTo(1,1);
           // obj2.addChild(object2);
            object4.inputEnabled = true;
            object4.input.useHandCursor = true;
            
            object4.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2,0.8);
            },this);
            //y+=12;
            
            obj4Group.add(object4);
        
        var object5 = this.add.sprite(this.world.centerX+340,this.world.centerY+125,'500g');
            //object2.name = objArray[qArrays[count]][1];
            object5.name = "500g";
            object5.anchor.setTo(0.5,1);
            object5.scale.setTo(1.1,1.1);
           // obj2.addChild(object2);
            object5.inputEnabled = true;
            object5.input.useHandCursor = true;
            
            object5.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,2,0.8);
            },this);
            //y+=12;
            
            obj5Group.add(object5);
        
        //objGroup.add(object1);
       // objGroup.add(object2);
        var graphics2 = this.add.graphics(690, 60);
        graphics2.lineStyle(1, 0xFFFFFF, 0.8);
        graphics2.beginFill(0xFF700B, 1);
        graphics2.drawRect(0,0,250,400);        
        graphics2.boundsPadding = 0;
        graphics2.alpha=0;
        graphics2.name="graphics2";
       
        
        
        objGroup.add(weightScale2);
        objGroup.add(weightScale1);
        objGroup.add(graphics2);
        
        
        scale1Group.add(weightScale3);
        scale2Group.add(weightScale4);
        
        rightAns = "600";
        
        scale1Group.add(object1);
                        scale1Group.bringToTop(object1);
                        object1.x = weightScale3.x+100;
                        object1.y = weightScale3.y+60;
        
        
        
               
        
        //this.objectClicked(object1,50,8);
        
         /*angleSlide = weightScale2.angle-10;
         tweenSlide = scale2Group.y+24;
         tweenSlide1 = scale2Group.y-24;
        
          weightScale2.angle-=10;
          scale1Group.y+=24;
          scale2Group.y-=24;*/
        
       
        
        
        
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
        obj4Group.x = 1000;
        obj5Group.x = 1000;
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
        var Maintween5 = this.add.tween(obj4Group);
        Maintween5.to({ x: 0}, 0, 'Linear', true, 0);
        var Maintween5 = this.add.tween(obj5Group);
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
            
            object2 = this.add.sprite(this.world.centerX+320,this.world.centerY+140+y,'w1');
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
            y-=12;
            
            obj2Group.add(object2);
            //y-=5;
            
             object3 = this.add.sprite(this.world.centerX+240+x,this.world.centerY+150,'w2');
            //object3.name = objArray[qArrays[count]][1];
            object3.name = "w2";
            object3.anchor.setTo(0.5,1);
            object3.scale.setTo(0.7,0.9);
           // obj3.addChild(object2);
            object3.inputEnabled = true;
            object3.input.useHandCursor = true;
            
            object3.events.onInputDown.add(function(target){
                tweenVal = 2;
                angleVal = 0.8;
                this.objectClicked(target,0.2,0.15);
            },this);
            x+=14;
            
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
                        var targetAnim = this.add.sprite( weightScale4.x+100, weightScale4.y+50,tempName);
                        targetAnim.name = "targetAnim";
                        targetAnim.anchor.setTo(0.5,1);
                        targetAnim.frame = tempFrame;
                        scale2Group.add(targetAnim);
                        scale2Group.bringToTop(targetAnim);
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
                        //target.tint = 0xA1A1A1;
                        target.frame=1;
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
                        //target.tint = 0xA1A1A1;
                        target.frame = 1;
                       target.x = tempX;
                       target.y = tempY;
                       if(scale2Group.getByName('targetAnim1'))
                        {
                            tempFrame = scale2Group.getByName('targetAnim1').frame+1;
                            scale2Group.getByName('targetAnim1').destroy();
                        }
                        tempName = target.name+"Anim";
                        var targetAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+25,tempName);
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
            var targetAnim = this.add.sprite( weightScale4.x+150, weightScale4.y+25,"w2Anim");
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
    
    objectRemoved1:function(target,tween1,tween2)
    {
        ClickSound.play();
        console.log(target.parent);
        var targetParent = target.parent;
        tempName = target.name;
        if(targetParent==scale2Group)
        {
            console.log("here");
            var targetAnim = this.add.sprite( weightScale4.x+140, weightScale4.y+25,"w1Anim");
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
                        if(tp1.getChildAt(j).frame==1)
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