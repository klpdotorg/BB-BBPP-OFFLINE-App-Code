Game.subtraction_NOAG_1_1level1=function(){};
var no22;
var RabitAnim;
var no11;
var m,n;
var qArrays;
var numberpadgrp;
var greenNumbers2;
var tick,eraser;
var carrot;
var addLength=0;
var imp;
var carrot;
var displayCarrots1,displayCarrots2,displayCarrots3,displayCarrots4,displayCarrots5,displayCarrots6,displayCarrots7,displayCarrots8;
var randomno=0;
var randarr;
var allElements;
var rabitAnimGroup;
var blackCarrots;
var carrot1,carrot2,carrot3,carrot4,carrot5,carrot6,carrot7,carrot8,carrot9;
var carrots1,carrots2,carrots3,carrots4,carrots5,carrots6,carrots7,carrots8;
var blackCarrots1,blackCarrots2,blackCarrots3,blackCarrots4,blackCarrots5,blackCarrots6,blackCarrots7,blackCarrots8,blackCarrots9;
var framesChange;
var f,v;
var starsGroup1;
var dragcount;
var starsGroup;
var framesChange11;
var framesChange1;
var framesChange2;
var greenNumbers;
var greenNumbers1;
var shakeGroup;
var animRabit;
var correctflag;
var qArrays1;
var carrotArray;
var count;
var count1;
var speaker;
var destCarrots;
var timeDisplay;
var celebration;
var thinkingCloud;
var carrotGroup;
var pressed;
Game.subtraction_NOAG_1_1level1.prototype={
    
    init:function(param,score)
 {
    _this = this;
     
      this.Stararr = param;
        this.score =parseInt(window.score);
        
        this.celebr = this.add.audio('celebr');
    	this.waudio = this.add.audio('waudio');
        this.ClickSound=this.add.audio('ClickSound');
        this.snapSound=this.add.audio('snapSound');
        this.CarrotBite=this.add.audio('CarrotBite');    	
        this.Rabbit=this.add.audio('Rabbit'); 
        ehm=this.add.audio('ehm'); 
        hhm=this.add.audio('hhm');
        khm=this.add.audio('khm');

         
        this.questionid=null;
        this.noofAttempts=0;
        this.sceneCount=0;
        this.AnsTimerCount=0;
        
    
  
      //this.currentTime = window.timeSaveFunc();
     /*  this.gameid = "Game 8.1";

      this.saveGameplay = 
      { 
       id_game:this.gameid, 
       access_token:window.acctkn, 
       start_time:this.currentTime
      } 
      this.savedVar = absdsjsapi.saveGameplay(this.saveGameplay);*/

      //telInitializer.gameIdInit("unity8_1",gradeSelected);
  
      telInitializer2.gameIdInit2("NOAG1.1");
 },
    
    
	create:function(game){

    this.playedwithHint = false;
        this.completelyplayed = false;
		
         _this.Stararr = [];
		//_this.amplify = null;
		
        shake = new Phaser.Plugin.Shake(game);
		    game.plugins.add(shake);

        no11 = 0;
        no22 = 0;
        count=0;
         count1=0;
        minutes=0;
        seconds=0;
        counterForTimer=0;
		
        celebration= false;
        
        framesChange11=new Array();
        framesChange=new Array();
        framesChange1=new Array();
        framesChange2=new Array();
        randarr = new Array();
        carrotArray = new Array();
        qArrays = new Array();
        qArrays = [1,2,3,4,5,6];
        //qArrays = this.shuffle(qArrays);

        framesChange = [1,2,3,4,5,6,7,8];
        framesChange1 = [1,2,3,4,5,6,7,8];
       
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.physics.setBoundsToWorld();

        var background = this.add.tileSprite(0,0,this.world.width,this.world.height, 'grade81_bg1');
        background.name="grade81_bg1";
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! ! ! ! !  ");
             commonNavBar.addNavBar(game,_this.soundurl,"numberoperation2");
             commonNavBar.addTimerToTheGame(game,0,0,0);
             commonNavBar.startTimer(game);
             commonNavBar.addScore(game,this.score);
             this.hintparams=['NOSG11','level1',false,false,true,1];
              commonNavBar.addHint(game,this.hintparams);
            this.generateStarsForTheScene(5);
        
            
			_this.time.events.repeat(Phaser.Timer.SECOND * 10, 10, this.playRabbitSound, _this);
            this.getQuestion();
          
    },
    
	playRabbitSound:function()
    {
		_this.rabbitSound = _this.add.audio('RabbitSound');
		_this.rabbitSound.play();
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
    
   stopvoice:function(){
         if(this.playQuestionSound)
		{
			if(this.playQuestionSound.contains(this.src))
			{
				this.playQuestionSound.removeChild(this.src);
				this.src = null;
			}
			if(!this.playQuestionSound.paused)
			{
				this.playQuestionSound.pause();
				this.playQuestionSound.currentTime = 0.0;
			}
			this.playQuestionSound = null;
			this.src = null;
		}
			
		if(this.celebrationSound)
		{
			if(this.celebr.isPlaying)
			{
				this.celebr.stop();
				this.celebr = null;
			}
		}
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
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
	
    getVoice:function(){
          
        this.stopvoice();
        this.playQuestionSound = document.createElement('audio');
		this.src = document.createElement('source');
        
           if(Number(greenNumbers1.frame+1)==1){
            this.questionid = 1;
                if(window.languageSelected=="English")
                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/English/e2.mp3");
                                    
                                else if(window.languageSelected=="Hindi")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Hindi/h2.mp3");
                                    
                                else if(window.languageSelected=="Kannada")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Kannada/k2.mp3");
								else
								{
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Odiya/8.1_a.mp3");
									//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
								}
                                    
                               
           }
          else if(Number(greenNumbers1.frame+1)==2){
            this.questionid = 2;
              if(window.languageSelected=="English")
                  this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/English/e3.mp3");
                                   
                                else if(window.languageSelected=="Hindi")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Hindi/h3.mp3");
                                    
                                else if(window.languageSelected=="Kannada")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Kannada/k3.mp3");
								else
								{
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Odiya/8.1_b.mp3");
									//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
								}
                                    
                               
          }
          else if(Number(greenNumbers1.frame+1)==3){
            this.questionid = 3;
              if(window.languageSelected=="English")
                  this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/English/e4.mp3");
                                   
                                else if(window.languageSelected=="Hindi")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Hindi/h4.mp3");
                                    
                                else if(window.languageSelected=="Kannada")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Kannada/k4.mp3");
								else
								{
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Odiya/8.1_c.mp3");
									//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
								}
                                    
                               
          }
          else if(Number(greenNumbers1.frame+1)==4){
            this.questionid = 4;
              if(window.languageSelected=="English")
                  this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/English/e5.mp3");
                                    
                                else if(window.languageSelected=="Hindi")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Hindi/h5.mp3");
                                    
                                else if(window.languageSelected=="Kannada")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Kannada/k5.mp3");
								else
								{
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Odiya/8.1_d.mp3");
									//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
								}
                                    
                                
          }
          else if(Number(greenNumbers1.frame+1)==5){
            this.questionid = 5;
              if(window.languageSelected=="English")
                  this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/English/e6.mp3");
                                    
                                else if(window.languageSelected=="Hindi")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Hindi/h6.mp3");
                                    
                                else if(window.languageSelected=="Kannada")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Kannada/k6.mp3");
								else
								{
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Odiya/8.1_e.mp3");
									//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
								}
                                   
                                
          }
          else if(Number(greenNumbers1.frame+1)==6){
            this.questionid = 6;
              if(window.languageSelected=="English")
                  this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/English/e7.mp3");
                                    
                                else if(window.languageSelected=="Hindi")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Hindi/h7.mp3");
                                   
                                else if(window.languageSelected=="Kannada")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Kannada/k7.mp3");
								else
								{
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Odiya/8.1_f.mp3");
									//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
								}
                                    
                                
          }
          else if(Number(greenNumbers1.frame+1)==7){
            this.questionid = 7;
             if(window.languageSelected=="English")
                 this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/English/e8.mp3");
                                    
                                else if(window.languageSelected=="Hindi")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Hindi/h8.mp3");
                                    
                                else if(window.languageSelected=="Kannada")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Kannada/k8.mp3");
								else
								{
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Odiya/8.1_g.mp3");
									//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
								}
                                    
                                
          }
        else if(Number(greenNumbers1.frame+1)==8){
          this.questionid = 8;
             if(window.languageSelected=="English")
                 this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/English/e9.mp3");
                                    
                                else if(window.languageSelected=="Hindi")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Hindi/h9.mp3");
                                    
                                else if(window.languageSelected=="Kannada")
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Kannada/k9.mp3");
								else
								{
                                    this.src.setAttribute("src", window.baseUrl+"questionSounds/8.1/Odiya/8.1_h.mp3");
									//_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
								}
                                    
                                
          }
        this.playQuestionSound.appendChild(this.src);
		         this.playQuestionSound.play(); 
        
    },

    getQuestion:function()
     {
        //this.stopvoice();

         this.noofAttempts = 0;
        this.AnsTimerCount = 0;
        this.sceneCount++;
        
    	//console.log("get"+no11);
        
        dragcount = 0;
         
    	switch(qArrays[no11])
       //switch(no11)
    	{
    		case 1: 
    		case 2: 
    		case 3: 
    		case 4:
    		case 5: 
    		case 6: this.gotoFirstQuestion();
    				    break;
    	}
        telInitializer2.gameQuestionStart(this,_this.questionid);
    },
    updateTimer:function() {
        
     counterForTimer++;
     ////console.log("lololil"+counterForTimer);
     if(counterForTimer>59)
         {
          counterForTimer = 0;
           if(minutes<10){
                 minutes =  minutes+1;
                 seconds = 00;
                        }
             else{
                 minutes =  minutes+1;
                   
                 }
         }
                else{
                        if (counterForTimer < 10)        
                                seconds = '0' + counterForTimer;
                        else
                                seconds = counterForTimer;
                    }
     timeDisplay.setText(minutes+':' + seconds);
 
//timer.setText(minutes + ':'+ seconds );
},
    
    
    generateStarsForTheScene:function(count)
	 {
		starsGroup = this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 starsGroup.create(_this.world.centerX, 10, 'cstarAnim');
            
			for(var j =0;j<i;j++)
			{
				if( starsGroup.getChildAt(j))
				{
					 starsGroup.getChildAt(j).x-=10;
					 starsGroup.getChildAt(i).x+=10;
				}
			}
		}
        starsGroup.getChildAt(0).frame = 2; 						
	},

    addQuestion:function(no22)
    {
        
        //console.log("wwwww");
        destCarrots.destroy();
        allElements.destroy();
        rabitAnimGroup.destroy();
        numberpadgrp.destroy();
        carrotArray.length=0;
        carrotGroup.destroy();
        shakeGroup.destroy();
        for(var m=0;m<randarr.length;m++)
        {
            randarr[m].destroy();
            
            
        }
        randarr.length=0;
       //carrot.destroy();
        //randarr[f].destroy();
        
        //this.time.events.add(500, function(){
         starsGroup.getChildAt(count1+1).frame = 2; 
            count1++;
        
        this.changeQuestion();
        //}, this);

    },
    
    update:function(){

    },

    gotoFirstQuestion:function(){
    	no11++;
        
        
        m=0;
        n=0;
       
        
        allElements=this.add.group();
        rabitAnimGroup=this.add.group();
        randomno=  Math.ceil(Math.random() * 8);
       



        //carrotArray=this.shuffle(carrotArray);
        //randomno=carrotArray[0];
        //console.log("length="+randomno);
        this.addNumberPad();
        this.carrotVisible();
        
        //var selectarr=this.carrotInsideCloud();
        ////console.log("selectarr==="+randomno);
         
        
        
        RabitAnim = this.add.sprite(120,442,'grade81_RabitAnim','Symbol 2 instance 10000');
        RabitAnim.name="grade81_RabitAnim";
        RabitAnim.anchor.setTo(0.5);
        RabitAnim.scale.setTo(0.6,0.6);
        RabitAnim.smoothed = true;
        var animRabit=RabitAnim.animations.add('RabitAnim');
        animRabit.play(10,true);
        
        
        thinkingCloud = this.add.sprite(250,245,'grade81_thinkingCloud','Symbol 5 instance 10000');
        thinkingCloud.name="grade81_thinkingCloud";
        thinkingCloud.anchor.setTo(0.5);
        thinkingCloud.scale.setTo(0.7,0.8);
        thinkingCloud.smoothed = true;
        var animCloud=thinkingCloud.animations.add('thinkingCloud');
        animCloud.play(10,false);
        

        

        
        allElements.add(RabitAnim);
        rabitAnimGroup.add(RabitAnim);
        allElements.add(thinkingCloud);
      
        
        
       
    	
    },
    
    
    
    addListeners:function(target){
        carrot1.input.enableDrag(true);
    	carrot2.input.enableDrag(true);
    	carrot3.input.enableDrag(true);
        carrot4.input.enableDrag(true);
    	carrot5.input.enableDrag(true);
    	carrot6.input.enableDrag(true);
        carrot7.input.enableDrag(true);
    	carrot8.input.enableDrag(true);
    	carrot9.input.enableDrag(true);

      commonNavBar.playClickSound();

        
        carrot1.events.onDragStart.add(this.onDragStart, this);
    	carrot1.events.onDragStop.add(this.onDragStop, this);

    	carrot2.events.onDragStart.add(this.onDragStart, this);
    	carrot2.events.onDragStop.add(this.onDragStop, this);

    	carrot3.events.onDragStart.add(this.onDragStart, this);
    	carrot3.events.onDragStop.add(this.onDragStop, this);
        
        carrot4.events.onDragStart.add(this.onDragStart, this);
    	carrot4.events.onDragStop.add(this.onDragStop, this);

    	carrot5.events.onDragStart.add(this.onDragStart, this);
    	carrot5.events.onDragStop.add(this.onDragStop, this);

    	carrot6.events.onDragStart.add(this.onDragStart, this);
    	carrot6.events.onDragStop.add(this.onDragStop, this);
        
        carrot7.events.onDragStart.add(this.onDragStart, this);
    	carrot7.events.onDragStop.add(this.onDragStop, this);

    	carrot8.events.onDragStart.add(this.onDragStart, this);
    	carrot8.events.onDragStop.add(this.onDragStop, this);

    	carrot9.events.onDragStart.add(this.onDragStart, this);
    	carrot9.events.onDragStop.add(this.onDragStop, this);
    },
    
    onDragStart:function(target){
    	//console.log("startdrag");
  
       
    	targetCoordinatesX = target.x;
    	targetCoordinatesY = target.y;
        //click1 = this.add.audio('ClickSound');
        //click1.play();
    },
    

    onDragStop:function(target){

       commonNavBar.playSnapSound();
       
      if (this.checkOverlap(thinkingCloud, target)&&dragcount<Number(greenNumbers1.frame+1))
    	{
            target.scale.setTo(0.5,0.5);
           dragcount++;
            
                
           
                if((Number(greenNumbers1.frame+1))<5)
                {
                    //console.log((Number(greenNumbers1.frame+1)));
                    target.x=160+m;
                    target.y=160;
                    m=m+50;
                    //console.log(target.x);
                    randarr.push(target);
                    
                    
                    
                }
            
            else
                {
                    if(((Number(greenNumbers1.frame+1))==5)||((Number(greenNumbers1.frame+1))==6)||((Number(greenNumbers1.frame+1))==7)||((Number(greenNumbers1.frame+1))==8))
                        {
                            if(dragcount<5){
                            target.x=160+m;
                            target.y=160;
                            m=m+50;  
                            //console.log(target.x);
                            //console.log(dragcount);
                                randarr.push(target);
                            }
                            else
                                {
                                    target.x=160+n;
                                    target.y=250;
                                    n=n+50;
                                    //console.log(target.x);
                                    randarr.push(target);
                                }
                            
                        }
                    
                }
            

                if(dragcount==Number(greenNumbers1.frame+1))
                    {
                            this.CarrotBite.play(); 
                        
                         this.time.events.add(600, function(){
                            
                              this.playQuestionSound = document.createElement('audio');
		                      this.src = document.createElement('source');
                             
                             if(window.languageSelected =="English")
                                   {
                                          commonNavBar.getVoice(window.baseUrl+"questionSounds/8.1/English/ehm.mp3");

                                   }
                                else if(window.languageSelected =="Hindi")
                                    {
                                         
                                         commonNavBar.getVoice(window.baseUrl+"questionSounds/8.1/Hindi/hhm.mp3");
                                    }
                                else if(window.languageSelected=="Kannada")
                                    {
                                         commonNavBar.getVoice(window.baseUrl+"questionSounds/8.1/Kannada/khm.mp3");
                                    }
								                else 
                                    {
                                        //  commonNavBar.getVoice("src", window.baseUrl+"questionSounds/8.1/English/ehm.mp3");
                                    } 
                                
                              if(window.languageSelected =="English")
                                   {
                                         _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/ehm.mp3";

                                   }
                                else if(window.languageSelected =="Hindi")
                                    {
                                         
                                         _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/hhm.mp3";
                                    }
                                else if(window.languageSelected=="Kannada")
                                    {
                                        _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/khm.mp3";
                                    }
								                else 
                                    {
                                        //  commonNavBar.getVoice("src", window.baseUrl+"questionSounds/8.1/English/ehm.mp3");
                                    } 
                             commonNavBar.addNavBar(this,_this.soundurl,"numberoperation2");
                            this.glowCarrotToCount();
                           
                        },this);
                    
                            this.destroyCarrots();
                            this.slideup();
                        
                    }
            
                    target.inputEnabled = false;
                
        }
        else{
            //console.log("wrong");
            
            if(target == carrot1)
    			{
    				target.x = 510;
    				target.y = 280;
    			}
             else if(target == carrot2)
    			{
    				target.x = 610;
    				target.y = 280;
    			}
              else if(target == carrot3)
    			{
    				target.x = 710;
    				target.y = 280;
    			}
             else if(target == carrot4)
    			{
    				target.x = 810;
    				target.y = 280;
    			}
              else  if(target == carrot5)
    			{
    				target.x = 460;
    				target.y = 380;
    			}
              if(target == carrot6)
    			{
    				target.x = 560;
    				target.y = 380;
    			}
             else if(target == carrot7)
    			{
    				target.x = 660;
    				target.y = 380;
    			}
              else if(target == carrot8)
    			{
    				target.x = 760;
    				target.y = 380;
    			}
              else if(target == carrot9)
    			{
    				target.x = 860;
    				target.y = 380;
    			}
            
        }
        
            
    },
glowCarrotToCount :function()
    {
        //console.log("seriously");
        carrot1.frame = 2;
        carrot2.frame = 2;
        carrot3.frame = 2;
        carrot4.frame = 2;
        carrot5.frame = 2;
        carrot6.frame = 2;
        carrot7.frame = 2;
        carrot8.frame = 2;
        carrot9.frame = 2;
    },
    
	checkOverlap:function(spriteA, spriteB) 
	{

	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    
    carrotVisible:function(){
        
      
       
        carrotGroup=this.add.group();
        
        blackCarrots1 = this.add.sprite(510,280,'grade81_carrot');
        blackCarrots1.anchor.setTo(0.5);
        blackCarrots1.scale.setTo(0.7,0.7);
        blackCarrots1.frame=0;
        blackCarrots1.visible=false;
        blackCarrots1.name = "blackCarrot";
        
        blackCarrots2 = this.add.sprite(610,280,'grade81_carrot');
        blackCarrots2.anchor.setTo(0.5);
        blackCarrots2.scale.setTo(0.7,0.7);
        blackCarrots2.frame=0;
        blackCarrots2.visible=false;
        
        blackCarrots3 = this.add.sprite(710,280,'grade81_carrot');
        blackCarrots3.anchor.setTo(0.5);
        blackCarrots3.scale.setTo(0.7,0.7);
        blackCarrots3.frame=0;
        blackCarrots3.visible=false;
        
        blackCarrots4 = this.add.sprite(810,280,'grade81_carrot');
        blackCarrots4.anchor.setTo(0.5);
        blackCarrots4.scale.setTo(0.7,0.7);
        blackCarrots4.frame=0;
        blackCarrots4.visible=false;
        
        blackCarrots5 = this.add.sprite(460,380,'grade81_carrot');
        blackCarrots5.anchor.setTo(0.5);
        blackCarrots5.scale.setTo(0.7,0.7);
        blackCarrots5.frame=0;
        blackCarrots5.visible=false;
        
        blackCarrots6 = this.add.sprite(560,380,'grade81_carrot');
        blackCarrots6.anchor.setTo(0.5);
        blackCarrots6.scale.setTo(0.7,0.7);
        blackCarrots6.frame=0;
        blackCarrots6.visible=false;
        
        blackCarrots7 = this.add.sprite(660,380,'grade81_carrot');
        blackCarrots7.anchor.setTo(0.5);
        blackCarrots7.scale.setTo(0.7,0.7);
        blackCarrots7.frame=0;
        blackCarrots7.visible=false;
        
        blackCarrots8 = this.add.sprite(760,380,'grade81_carrot');
        blackCarrots8.anchor.setTo(0.5);
        blackCarrots8.scale.setTo(0.7,0.7);
        blackCarrots8.frame=0;
        blackCarrots8.visible=false;
        
        blackCarrots9 = this.add.sprite(860,380,'grade81_carrot');
        blackCarrots9.anchor.setTo(0.5);
        blackCarrots9.scale.setTo(0.7,0.7);
        blackCarrots9.frame=0;
        blackCarrots9.visible=false;
        
          
        carrot1=this.add.sprite(510,280,'grade81_carrot');
        carrot1.anchor.setTo(0.5);
        carrot1.scale.setTo(0.7,0.7);
        carrot1.frame=1;
        carrot1.visible=false;
        carrot1.inputEnabled=true;
        carrot1.input.useHandCursor = true;
        carrot1.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        
        carrot2=this.add.sprite(610,280,'grade81_carrot');
        carrot2.anchor.setTo(0.5);
        carrot2.scale.setTo(0.7,0.7);
        carrot2.frame=1;
        carrot2.visible=false;
        carrot2.inputEnabled=true;
        carrot2.input.useHandCursor = true;
        carrot2.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        carrot3=this.add.sprite(710,280,'grade81_carrot');
        carrot3.anchor.setTo(0.5);
        carrot3.scale.setTo(0.7,0.7);
        carrot3.frame=1;
        carrot3.visible=false;
        carrot3.inputEnabled=true;
        carrot3.input.useHandCursor = true;
        carrot3.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        carrot4=this.add.sprite(810,280,'grade81_carrot');
        carrot4.anchor.setTo(0.5);
        carrot4.scale.setTo(0.7,0.7);
        carrot4.frame=1;
        carrot4.visible=false;
        carrot4.inputEnabled=true;
        carrot4.input.useHandCursor = true;
        carrot4.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        carrot5=this.add.sprite(460,380,'grade81_carrot');
        carrot5.anchor.setTo(0.5);
        carrot5.scale.setTo(0.7,0.7);
        carrot5.frame=1;
        carrot5.visible=false;
        carrot5.inputEnabled=true;
        carrot5.input.useHandCursor = true;
        carrot5.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        carrot6=this.add.sprite(560,380,'grade81_carrot');
        carrot6.anchor.setTo(0.5);
        carrot6.scale.setTo(0.7,0.7);
        carrot6.frame=1;
        carrot6.visible=false;
        carrot6.inputEnabled=true;
        carrot6.input.useHandCursor = true;
        carrot6.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        carrot7=this.add.sprite(660,380,'grade81_carrot');
        carrot7.anchor.setTo(0.5);
        carrot7.scale.setTo(0.7,0.7);
        carrot7.frame=1;
        carrot7.visible=false;
        carrot7.inputEnabled=true;
        carrot7.input.useHandCursor = true;
        carrot7.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        carrot8=this.add.sprite(760,380,'grade81_carrot');
        carrot8.anchor.setTo(0.5);
        carrot8.scale.setTo(0.7,0.7);
        carrot8.frame=1;
        carrot8.visible=false;
        carrot8.inputEnabled=true;
        carrot8.input.useHandCursor = true;
        carrot8.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        carrot9=this.add.sprite(860,380,'grade81_carrot');
        carrot9.anchor.setTo(0.5);
        carrot9.scale.setTo(0.7,0.7);
        carrot9.frame=1;
        carrot9.visible=false;
        carrot9.inputEnabled=true;
        carrot9.input.useHandCursor = true;
        carrot9.events.onInputDown.add(function(){
               this.addListeners();
            },this);
        
        if(Number(greenNumbers.frame+1)==1){
            carrot1.visible=true;
        }
        if(Number(greenNumbers.frame+1)==2){
            carrot1.visible=true;
            carrot2.visible=true;
        }
        if(Number(greenNumbers.frame+1)==3){
            carrot1.visible=true;
            carrot2.visible=true;
            carrot3.visible=true;
        }
        if(Number(greenNumbers.frame+1)==4){
            carrot1.visible=true;
            carrot2.visible=true;
            carrot3.visible=true;
            carrot4.visible=true;
        }
        if(Number(greenNumbers.frame+1)==5){
            carrot2.visible=true;
            carrot3.visible=true;
            carrot6.visible=true;
            carrot7.visible=true;
            carrot8.visible=true;
        }
        if(Number(greenNumbers.frame+1)==6){
            carrot1.visible=true;
            carrot2.visible=true;
            carrot3.visible=true;
            carrot4.visible=true;
            carrot6.visible=true;
            carrot7.visible=true;
        }
        if(Number(greenNumbers.frame+1)==7){
            carrot1.visible=true;
            carrot2.visible=true;
            carrot3.visible=true;
            carrot5.visible=true;
            carrot6.visible=true;
            carrot7.visible=true;
            carrot8.visible=true;
        }
        if(Number(greenNumbers.frame+1)==8){
            carrot1.visible=true;
            carrot2.visible=true;
            carrot3.visible=true;
            carrot4.visible=true;
            carrot5.visible=true;
            carrot6.visible=true;
            carrot7.visible=true;
           carrot8.visible=true;
        }
        
     
        blackCarrots1.name = "blackCarrot1";
        blackCarrots2.name = "blackCarrot2";
        blackCarrots3.name = "blackCarrot3";
        blackCarrots4.name = "blackCarrot4";
        blackCarrots5.name = "blackCarrot5";
        blackCarrots6.name = "blackCarrot6";
        blackCarrots7.name = "blackCarrot7";
        blackCarrots8.name = "blackCarrot8";
        blackCarrots9.name = "blackCarrot9";
        
        carrot1.name = "carrot1";
        carrot2.name = "carrot2";
        carrot3.name = "carrot3";
        carrot4.name = "carrot4";
        carrot5.name = "carrot5";
        carrot6.name = "carrot6";
        carrot7.name = "carrot7";
        carrot8.name = "carrot8";
        carrot9.name = "carrot9";
 
        
        carrotGroup.add(blackCarrots1);
        carrotGroup.add(blackCarrots2);
        carrotGroup.add(blackCarrots3);
        carrotGroup.add(blackCarrots4);
        carrotGroup.add(blackCarrots5);
        carrotGroup.add(blackCarrots6);
        carrotGroup.add(blackCarrots7);
        carrotGroup.add(blackCarrots8);
        carrotGroup.add(blackCarrots9);
        carrotGroup.add(carrot1);
        carrotGroup.add(carrot2);
        carrotGroup.add(carrot3);
        carrotGroup.add(carrot4);
        carrotGroup.add(carrot5);
        carrotGroup.add(carrot6);
        carrotGroup.add(carrot7);
        carrotGroup.add(carrot8);
        carrotGroup.add(carrot9);
    },
    
  
	changeQuestion:function()
	{
		//flagGroup1.destroy();
        
		if(no11<6)
		{
            count++;
			this.getQuestion();
		}
		else
		{
			//console.log("gameEnd");
				//this.stopvoice();
               this.state.start('unity8_1Score');

		}
	},
    
  
    removeCelebration:function()
	{
		//console.log("removeCeleb");
		celebration = false;
	
		//console.log("no"+no11);
	
			
		    // count1++;
         //console.log("index="+framesChange);
        //console.log(randomno);
        framesChange[0]=randomno;
        framesChange.splice(0,1);
        //console.log("index="+framesChange);
			
            //console.log("vamitha");
            
			if(no11<5)
			{
                //console.log("addq");
                 this.addQuestion(count1);
			}
			
			else
			{
				console.log("gameEnd");

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



		//}


		
	},

      createScoreScene:function()
    {

      this.completelyplayed = true;
	  
	  this.backgroundtransp = this.add.tileSprite(0,0,this.world.width,this.world.height, 'transparent'); //BackGround Opacity
      
        this.scorebg = this.add.sprite(this.world.centerX,this.world.centerY,'scoreSceneBg');
        this.scorebg.anchor.setTo(0.5);

        //this.terrificText = this.add.sprite(this.world.centerX,this.world.centerY,'terrificText');
        //this.terrificText.anchor.setTo(0.5);

       /* this.terrificText = this.add.text(this.world.centerX,this.world.centerY,'Terrific !!');
        this.terrificText.anchor.setTo(0.5);
        this.terrificText.align = 'center';
        //this.terrificText.font = 'myfont';
        this.terrificText.fontWeight = 'bold';
        this.terrificText.fontSize = 40;
        this.terrificText.fill = 'White';*/
        
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

        this.generateStarsForScoreScene(this,5);
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

		this.backgroundtransp.visible=false; //Remove BackGround Opacity
    
        _this.state.start('numberoperation2',true,false);
        
    },
    
    generateStarsForScoreScene:function(game,count)
    {
        //console.log("star");
        this.starsGroup = this.add.group();
        this.scoreSceneScore = 0;
         this.maxscore = count * 5;
       // this.Stararr = [1,3,1,3,1,3,1,3];
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
        
        //this.addScoreSceneScore(this,this.scoreSceneScore);   
        this.rightSound = new Audio('sounds/celebration.mp3');
        this.rightSound.play();      
        commonNavBar.deductScore(this,this.scoreSceneScore,false);   

        if(!this.playedwithHint)
        {
            this.replayBtn.visible = false;
        }      
    },
    
    replayClicked:function()
    {
        commonNavBar.playClickSound();

        this.replayBtn.events.onInputDown.removeAll();
        commonNavBar.deductScore(this,-5,true);

        this.score += this.scoreSceneScore;
        this.score -= 5;

        this.time.events.add(2000, function()
        { 
           // this.state.restart();
           //_this.state.start('level2',true,false,this.qarray,this.score);
            commonNavBar.soundVar=null,
            commonNavBar.questionArray=null,
            commonNavBar.questionCount=null,
            commonNavBar.soundUrl=null,
            commonNavBar.hint1=true,
            commonNavBar.hint2=true,
            commonNavBar.hint3=true,
            this.backgroundtransp.visible=false; //Remove BackGround Opacity
           _this.state.start('subtraction_NOAG_1_1level1',true,false);
        }, this);
    },
    
	correctAns:function()
	{

    telInitializer2.gameCorrectAns();
		this.Stararr.push(3);
        numberpadgrp.y = 00;
		var tween1 = this.add.tween(numberpadgrp);
		tween1.to({ y: 100 }, 0, 'Linear', true, 0);
		
		rabitAnimGroup.y=-45;
        
        var Maintweens = this.add.tween(rabitAnimGroup);
        Maintweens.to({ y:100}, 845, 'Linear', true, 0);
		//console.log("correct11");
        
        tick.inputEnabled=false;
        
         if(_this.timer)
         {
          _this.timer.stop();
          _this.timer = null;
         }

        //this.currentTime = window.timeSaveFunc();
        this.saveAsment = 
         { 
          id_game_play: this.savedVar,
          id_question: this.questionid,  
          pass: "yes",
          time2answer: this.AnsTimerCount,
          attempts: this.noofAttempts,
          date_time_submission: this.currentTime, 
          access_token: window.acctkn 
         }
          
         //absdsjsapi.saveAssessment(this.saveAsment);

       // telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);


        //destCarrots.destroy();
        
        //opt1.inputEnabled=false;
        //opt2.inputEnabled=false;
        	
        //anim =target.animations.add('flag1');
        //anim.play();
		celebration = true;
		//celebAnim = this.add.tileSprite(0,0,this.world.width,this.world.height,'celeb');
        
                 commonNavBar.playClickSound();
     	 commonNavBar.stopVoice();
                   commonNavBar.playCelebrationSound();

		//scoretext.setText(selctedLang.score+' : '+score);
		
        
        
		//celebAnim.smoothed=true;
        this.time.events.add(500, this.removeCelebration, this);


		////console.log(target);
        //target.tint = 0xA9A9A9;
		
        
    
        var starAnim = starsGroup.getChildAt(count1);
		//console.log(starAnim);
		starAnim.smoothed = false;
    	var anim4 = starAnim.animations.add('star');
		anim4.play();        
        
        //this.disableListeners();
		//target.events.onInputDown.removeAll();
	},


    wrongAns:function()
	{
    telInitializer2.gameWrongAns();
        //console.log("wrong");
        	
        _this.Stararr.push(1);
         starsGroup.getChildAt(count1).frame = 1;
		//scoretext.setText(selctedLang.score+' : '+score);
        ////console.log(target);
        //target.tint = 0xA9A9A9;
        
		shake.shake(10, shakeGroup);
        txtbox.frame=0;
   
            
                
                 commonNavBar.playClickSound();
		 commonNavBar.stopVoice();
        commonNavBar.playWrongCelebrationSound();
        
         this.time.events.add(500, this.removeCelebration, this);
        	//this.disableListeners();
        //target.events.onInputDown.removeAll();
	},
    
    destroyCarrots:function(){
        //destCarrots.destroy();
        carrotArray.length=0;
        for(var m=0;m<randarr.length;m++)
        {
            randarr[m].destroy();
            
            
        }
        randarr.length=0;
        
        
            // this.time.events.add(1000, function(){
        destCarrots=this.add.group();
        

                displayCarrots1 = this.add.sprite(160,160,'grade81_carrotsAnim','Symbol 1 instance 10000');
        displayCarrots1.name="grade81_carrotsAnim1";
                displayCarrots1.anchor.setTo(0.5);
                displayCarrots1.scale.setTo(0.5,0.5);
                displayCarrots1.smoothed = true;
                displayCarrots1.visible=false;
                 
                displayCarrots2 = this.add.sprite(210,160,'grade81_carrotsAnim','Symbol 1 instance 10000');
        displayCarrots2.name="grade81_carrotsAnim2";
                displayCarrots2.anchor.setTo(0.5);
                displayCarrots2.scale.setTo(0.5,0.5);
                displayCarrots2.smoothed = true;
                displayCarrots2.visible=false;
        
                displayCarrots3 = this.add.sprite(260,160,'grade81_carrotsAnim','Symbol 1 instance 10000');
        displayCarrots3.name="grade81_carrotsAnim3";
                displayCarrots3.anchor.setTo(0.5);
                displayCarrots3.scale.setTo(0.5,0.5);
                displayCarrots3.smoothed = true;
                displayCarrots3.visible=false;
        
                displayCarrots4 = this.add.sprite(310,160,'grade81_carrotsAnim','Symbol 1 instance 10000');
        displayCarrots4.name="grade81_carrotsAnim4";
                displayCarrots4.anchor.setTo(0.5);
                displayCarrots4.scale.setTo(0.5,0.5);
                displayCarrots4.smoothed = true;
                displayCarrots4.visible=false;
       
                displayCarrots5 = this.add.sprite(160,250,'grade81_carrotsAnim','Symbol 1 instance 10000');
        displayCarrots5.name="grade81_carrotsAnim5";
                displayCarrots5.anchor.setTo(0.5);
                displayCarrots5.scale.setTo(0.5,0.5);
                displayCarrots5.smoothed = true;
                displayCarrots5.visible=false;
        
                displayCarrots6 = this.add.sprite(210,250,'grade81_carrotsAnim','Symbol 1 instance 10000');
        displayCarrots6.name="grade81_carrotsAnim6";
                displayCarrots6.anchor.setTo(0.5);
                displayCarrots6.scale.setTo(0.5,0.5);
                displayCarrots6.smoothed = true;
                displayCarrots6.visible=false;
        
                displayCarrots7 = this.add.sprite(260,250,'grade81_carrotsAnim','Symbol 1 instance 10000');
        displayCarrots7.name="grade81_carrotsAnim7";
                displayCarrots7.anchor.setTo(0.5);
                displayCarrots7.scale.setTo(0.5,0.5);
                displayCarrots7.smoothed = true;
                displayCarrots7.visible=false;
        
                displayCarrots8 = this.add.sprite(310,250,'grade81_carrotsAnim','Symbol 1 instance 10000');
        displayCarrots8.name="grade81_carrotsAnim8";
                displayCarrots8.anchor.setTo(0.5);
                displayCarrots8.scale.setTo(0.5,0.5);
                displayCarrots8.smoothed = true;
                displayCarrots8.visible=false;
        
        
        destCarrots.add(displayCarrots1);
        destCarrots.add(displayCarrots2);
        destCarrots.add(displayCarrots3);
        destCarrots.add(displayCarrots4);
        destCarrots.add(displayCarrots5);
        destCarrots.add(displayCarrots6);
        destCarrots.add(displayCarrots7);
        destCarrots.add(displayCarrots8);
        
        //},this);
        
           //2
        if((Number(greenNumbers1.frame+1)==1))
            {
                correctflag=2;
                displayCarrots1.visible=true;
                var d11=displayCarrots1.animations.add('displayCarrots');
                d11.play(5,false);
            }
        
        //3
        if((Number(greenNumbers1.frame+1)==2))
            {
                correctflag=3;
                displayCarrots1.visible=true;
                var d21=displayCarrots1.animations.add('displayCarrots');
                d21.play(5,false);
        
                displayCarrots2.visible=true;
                var d22=displayCarrots2.animations.add('displayCarrots');
                d22.play(5,false);
                
                
            }
        //4
        if((Number(greenNumbers1.frame+1)==3))
            {
                correctflag=4;
                displayCarrots1.visible=true;
                var d31=displayCarrots1.animations.add('displayCarrots');
                d31.play(5,false);
        
                displayCarrots2.visible=true;
                var d32=displayCarrots2.animations.add('displayCarrots');
                d32.play(5,false);
                
                displayCarrots3.visible=true;
                var d33=displayCarrots3.animations.add('displayCarrots');
                d33.play(5,false);
                
              
        
            }
        //5
       if((Number(greenNumbers1.frame+1)==4))
            {
                correctflag=5;
                displayCarrots1.visible=true;
                var d41=displayCarrots1.animations.add('displayCarrots');
                d41.play(5,false);
        
                displayCarrots2.visible=true;
                var d42=displayCarrots2.animations.add('displayCarrots');
                d42.play(5,false);
                
                displayCarrots3.visible=true;
                var d43=displayCarrots3.animations.add('displayCarrots');
                d43.play(5,false);
                
                displayCarrots4.visible=true;
                var d44=displayCarrots4.animations.add('displayCarrots');
                d44.play(5,false);
                
                
            }
        //6
       if((Number(greenNumbers1.frame+1)==5))
            {
                correctflag=6;
                displayCarrots1.visible=true;
                var d51=displayCarrots1.animations.add('displayCarrots');
                d51.play(5,false);
        
                displayCarrots2.visible=true;
                var d52=displayCarrots2.animations.add('displayCarrots');
                d52.play(5,false);
                
                displayCarrots3.visible=true;
                var d53=displayCarrots3.animations.add('displayCarrots');
                d53.play(5,false);
                
                displayCarrots4.visible=true;
                var d54=displayCarrots4.animations.add('displayCarrots');
                d54.play(5,false);
                
                displayCarrots5.visible=true;
                var d55=displayCarrots5.animations.add('displayCarrots');
                d55.play(5,false);
                
             
        
            }
        //7
       if((Number(greenNumbers1.frame+1)==6))
            {
                correctflag=7;
                displayCarrots1.visible=true;
                var d61=displayCarrots1.animations.add('displayCarrots');
                d61.play(5,false);
        
                displayCarrots2.visible=true;
                var d62=displayCarrots2.animations.add('displayCarrots');
                d62.play(5,false);
                
                displayCarrots3.visible=true;
                var d63=displayCarrots3.animations.add('displayCarrots');
                d63.play(5,false);
                
                displayCarrots4.visible=true;
                var d64=displayCarrots4.animations.add('displayCarrots');
                d64.play(5,false);
                
                displayCarrots5.visible=true;
                var d65=displayCarrots5.animations.add('displayCarrots');
                d65.play(5,false);
        
                displayCarrots6.visible=true;
                var d66=displayCarrots6.animations.add('displayCarrots');
                d66.play(5,false);
                
                
            }
        //8
       if((Number(greenNumbers1.frame+1)==7))
            {
                correctflag=8;
                displayCarrots1.visible=true;
                var d71=displayCarrots1.animations.add('displayCarrots');
                d71.play(5,false);
        
                displayCarrots2.visible=true;
                var d72=displayCarrots2.animations.add('displayCarrots');
                d72.play(5,false);
                
                displayCarrots3.visible=true;
                var d73=displayCarrots3.animations.add('displayCarrots');
                d73.play(5,false);
                
                displayCarrots4.visible=true;
                var d74=displayCarrots4.animations.add('displayCarrots');
                d74.play(5,false);
                
                displayCarrots5.visible=true;
                var d75=displayCarrots5.animations.add('displayCarrots');
                d75.play(5,false);
        
                displayCarrots6.visible=true;
                var d76=displayCarrots6.animations.add('displayCarrots');
                d76.play(5,false);
                
                displayCarrots7.visible=true;
                var d77=displayCarrots7.animations.add('displayCarrots');
                d77.play(5,false);
                
               
            }
        
        if((Number(greenNumbers1.frame+1)==8))
            {
                correctflag=9;
                displayCarrots1.visible=true;
                var d81=displayCarrots1.animations.add('displayCarrots');
                d81.play(5,false);
        
                displayCarrots2.visible=true;
                var d82=displayCarrots2.animations.add('displayCarrots');
                d82.play(5,false);
                
                displayCarrots3.visible=true;
                var d83=displayCarrots3.animations.add('displayCarrots');
                d83.play(5,false);
                
                displayCarrots4.visible=true;
                var d84=displayCarrots3.animations.add('displayCarrots');
                d84.play(5,false);
                
                displayCarrots5.visible=true;
                var d85=displayCarrots1.animations.add('displayCarrots');
                d85.play(5,false);
        
                displayCarrots6.visible=true;
                var d86=displayCarrots2.animations.add('displayCarrots');
                d86.play(5,false);
                
                displayCarrots7.visible=true;
                var d87=displayCarrots3.animations.add('displayCarrots');
                d87.play(5,false);
                
                displayCarrots8.visible=true;
                var d88=displayCarrots3.animations.add('displayCarrots');
                d88.play(5,false);
            }
        
        
        
    },
  
   
    shuffleNumbers:function(){
        
        

        framesChange = this.shuffle(framesChange);
        randomno=framesChange[0];

        greenNumbers = this.add.sprite(555,125,'grade81_greenNumbers');
        greenNumbers.name="grade81_greenNumbers";
    	greenNumbers.scale.setTo(0.7,0.7);
        greenNumbers.frame=framesChange[0];
       
       
        
        //framesChange1 = this.shuffle(framesChange1);

        greenNumbers1 = this.add.sprite(620,125,'grade81_greenNumbers1');
        greenNumbers1.name="grade81_greenNumbers1";
    	greenNumbers1.scale.setTo(0.7,0.7);
        greenNumbers1.visible=true;
        greenNumbers1.frame=framesChange1[0];
        
        framesChange2 = [1,2,3,4,5,6,7,8];
        framesChange2 = this.shuffle(framesChange2);
        
        greenNumbers2 = this.add.sprite(715,75,'grade81_greenNumbers2');
        greenNumbers2.name="grade81_greenNumbers2";
    	greenNumbers2.scale.setTo(0.7,0.7);
        greenNumbers2.frame=framesChange2[0];
        greenNumbers2.visible=false;
        //console.log("gn2="+Number(greenNumbers2.frame+1));
        
        
      
    },
    checkOrder:function(){
        
        //console.log("n1="+Number(greenNumbers.frame+1));
        //console.log("n2="+Number(greenNumbers1.frame+1));
        //console.log("n3="+Number(greenNumbers2.frame+1));
       
        if((Number(greenNumbers.frame+1)==1))
            {
                
                greenNumbers1.frame=0;
            }
        //========
        if((Number(greenNumbers.frame+1)==2)&&((Number(greenNumbers2.frame+1)==1)||(Number(greenNumbers2.frame+1)==2)||(Number(greenNumbers2.frame+1)==3)||(Number(greenNumbers2.frame+1)==4)))
            {
                
                greenNumbers1.frame=1;
            }
        if((Number(greenNumbers.frame+1)==2)&&((Number(greenNumbers2.frame+1)==5)||(Number(greenNumbers2.frame+1)==6)||(Number(greenNumbers2.frame+1)==7)||(Number(greenNumbers2.frame+1)==8)))
            {
                
                greenNumbers1.frame=0;
            }
        //=======
        
        if((Number(greenNumbers.frame+1)==3)&&((Number(greenNumbers2.frame+1)==1)))
            {
                
                greenNumbers1.frame=0;
            }
        if((Number(greenNumbers.frame+1)==3)&&((Number(greenNumbers2.frame+1)==4)||(Number(greenNumbers2.frame+1)==5)||(Number(greenNumbers2.frame+1)==6)))
            {
                
                greenNumbers1.frame=1;
            }
        if((Number(greenNumbers.frame+1)==3)&&((Number(greenNumbers2.frame+1)==7)||(Number(greenNumbers2.frame+1)==8)||(Number(greenNumbers2.frame+1)==3)||(Number(greenNumbers2.frame+1)==2)))
            {
                
                greenNumbers1.frame=2;
            }
        //========
        
        if((Number(greenNumbers.frame+1)==4)&&((Number(greenNumbers2.frame+1)==1)))
            {
                greenNumbers1.frame=0;
            }
        if((Number(greenNumbers.frame+1)==4)&&((Number(greenNumbers2.frame+1)==3)))
            {
                
                greenNumbers1.frame=1;
            }
        if((Number(greenNumbers.frame+1)==4)&&((Number(greenNumbers2.frame+1)==5)||(Number(greenNumbers2.frame+1)==6)||(Number(greenNumbers2.frame+1)==2)))
            {
                
                greenNumbers1.frame=2;
            }
        if((Number(greenNumbers.frame+1)==4)&&((Number(greenNumbers2.frame+1)==7)||(Number(greenNumbers2.frame+1)==8)||(Number(greenNumbers2.frame+1)==4)))
            {
                
                greenNumbers1.frame=3;
            }
        //==========
        if((Number(greenNumbers.frame+1)==5)&&((Number(greenNumbers2.frame+1)==1)))
            {
                
                greenNumbers1.frame=0;
            }
        if((Number(greenNumbers.frame+1)==5)&&((Number(greenNumbers2.frame+1)==3)))
            {
                
                greenNumbers1.frame=1;
            }
        if((Number(greenNumbers.frame+1)==5)&&((Number(greenNumbers2.frame+1)==5)||(Number(greenNumbers2.frame+1)==6)))
            {
                
                greenNumbers1.frame=2;
            }
        if((Number(greenNumbers.frame+1)==5)&&((Number(greenNumbers2.frame+1)==7)||(Number(greenNumbers2.frame+1)==4)))
            {
                
                greenNumbers1.frame=3;
            }
        if((Number(greenNumbers.frame+1)==5)&&((Number(greenNumbers2.frame+1)==8)||(Number(greenNumbers2.frame+1)==2)))
            {
                
                greenNumbers1.frame=4;
            }
        //==========
         if((Number(greenNumbers.frame+1)==6)&&((Number(greenNumbers2.frame+1)==1)))
            {
                
                greenNumbers1.frame=0;
            }
        if((Number(greenNumbers.frame+1)==6)&&((Number(greenNumbers2.frame+1)==3)))
            {
                
                greenNumbers1.frame=1;
            }
        if((Number(greenNumbers.frame+1)==6)&&((Number(greenNumbers2.frame+1)==5)))
            {
                
                greenNumbers1.frame=2;
            }
        if((Number(greenNumbers.frame+1)==6)&&((Number(greenNumbers2.frame+1)==6)))
            {
                
                greenNumbers1.frame=3;
            }
        if((Number(greenNumbers.frame+1)==6)&&((Number(greenNumbers2.frame+1)==7)||(Number(greenNumbers2.frame+1)==2)))
            {
                
                greenNumbers1.frame=4;
            }
        if((Number(greenNumbers.frame+1)==6)&&((Number(greenNumbers2.frame+1)==8)||(Number(greenNumbers2.frame+1)==4)))
            {
                
                greenNumbers1.frame=5;
            }
        //============
         if((Number(greenNumbers.frame+1)==7)&&((Number(greenNumbers2.frame+1)==1)))
            {
                
                greenNumbers1.frame=0;
            }
         if((Number(greenNumbers.frame+1)==7)&&((Number(greenNumbers2.frame+1)==3)))
            {
                
                greenNumbers1.frame=1;
            }
        if((Number(greenNumbers.frame+1)==7)&&((Number(greenNumbers2.frame+1)==4)))
            {
                
                greenNumbers1.frame=2;
            }
        if((Number(greenNumbers.frame+1)==7)&&((Number(greenNumbers2.frame+1)==5)))
            {
                
                greenNumbers1.frame=3;
            }
        if((Number(greenNumbers.frame+1)==7)&&((Number(greenNumbers2.frame+1)==6)))
            {
                
                greenNumbers1.frame=4;
            }
        if((Number(greenNumbers.frame+1)==7)&&((Number(greenNumbers2.frame+1)==7)||(Number(greenNumbers2.frame+1)==2)))
            {
                
                greenNumbers1.frame=5;
            }
        if((Number(greenNumbers.frame+1)==7)&&((Number(greenNumbers2.frame+1)==8)))
            {
                
                greenNumbers1.frame=6;
            }
        //=====
        if((Number(greenNumbers.frame+1)==8)&&((Number(greenNumbers2.frame+1)==1)))
            {
                
                greenNumbers1.frame=0;
            }
        if((Number(greenNumbers.frame+1)==8)&&((Number(greenNumbers2.frame+1)==2)))
            {
                
                greenNumbers1.frame=1;
            }
        if((Number(greenNumbers.frame+1)==8)&&((Number(greenNumbers2.frame+1)==3)))
            {
                
                greenNumbers1.frame=2;
            }
        if((Number(greenNumbers.frame+1)==8)&&((Number(greenNumbers2.frame+1)==4)))
            {
                
                greenNumbers1.frame=3;
            }
        if((Number(greenNumbers.frame+1)==8)&&((Number(greenNumbers2.frame+1)==5)))
            {
                
                greenNumbers1.frame=4;
            }
        if((Number(greenNumbers.frame+1)==8)&&((Number(greenNumbers2.frame+1)==6)))
            {
                
                greenNumbers1.frame=5;
            }
        if((Number(greenNumbers.frame+1)==8)&&((Number(greenNumbers2.frame+1)==7)))
            {
                
                greenNumbers1.frame=6;
            }
        if((Number(greenNumbers.frame+1)==8)&&((Number(greenNumbers2.frame+1)==8)))
            {
                
                greenNumbers1.frame=7;
            }

            
    },
   
   
    addNumberPad:function(){
        
      // //console.log("first norrrrrr=="+randomno);
        
        //this.time.events.add(5000, function(){
            
       pressed=0;
        
        this.shuffleNumbers();
        
        numberpadgrp=this.add.group();
        shakeGroup=this.add.group();
        /*boxbg = this.add.sprite(800,280,'boxbg');
        boxbg.anchor.setTo(0.5);
        boxbg.scale.setTo(0.6,0.6);*/
       
        
        var WhiteBox=this.add.sprite(650,150,'grade81_WhiteBox');
        WhiteBox.name="grade81_WhiteBox";
        WhiteBox.anchor.setTo(0.5);
        WhiteBox.scale.setTo(0.55,0.55);
//        WhiteBox.addChild(greenNumbers);
//        WhiteBox.addChild(greenNumbers1);
//        WhiteBox.addChild(greenNumbers2);
        
        greenNumbers.frame=(randomno-1);//framesChange[0];
       
        //console.log("first no b4=="+randomno);
       //console.log("second no b4=="+framesChange1[0]);
   
     /*  
       var sum=randomno+framesChange1[0];
        //console.log("summmm no=="+sum);
        if(sum <=8) {
            greenNumbers1.frame=(framesChange1[0]-1);
            //console.log("first no after=="+greenNumbers.frame);
            //console.log("second no after=="+greenNumbers1.frame);
           // //console.log("third no after=="+greenNumbers2.frame);
        }
        else
            {
               
                if(greenNumbers.frame<5)
                {
                    //console.log("greenNumbers.frame="+greenNumbers.frame);
                    framesChange11 = [1,2];
                    framesChange11=this.shuffle(framesChange11);
                    greenNumbers1.frame=framesChange11[0];
                }
                else
                {
                     greenNumbers1.frame=0;
                }
           
            }
        */

       var minusSign=this.add.sprite(590,125,'grade81_minusSign');
        minusSign.name="grade81_minusSign";
       minusSign.scale.setTo(0.7,0.7);
       
       var equalSymbol=this.add.sprite(660,125,'grade81_equalSymbol');
        equalSymbol.name="grade81_equalSymbol";
       equalSymbol.scale.setTo(0.7,0.7);
       //console.log("greennum1=="+Number(greenNumbers1.frame+1));
       
       
    
        
        txtbox=this.add.sprite(715,147,'grade81_txtbox');
        txtbox.name="grade81_txtbox";
        txtbox.anchor.setTo(0.5);
        txtbox.scale.setTo(0.55,0.55);
    
        
        var bottomBar=this.add.sprite(0,470,'grade81_bottomBar');
        bottomBar.name="grade81_bottomBar";
      
            
            var calNum1=this.add.sprite(105,505,'grade61_calNum');
        calNum1.name="grade61_calNum1";
            calNum1.anchor.setTo(0.5);
            calNum1.scale.setTo(0.6,0.6);
            calNum1.frame=1;
            calNum1.inputEnabled=true;
            calNum1.input.useHandCursor = true;
            //destCarrots.destroy();
        //this.destroyCarrots();
            calNum1.events.onInputDown.add(function(){
                var click11 = this.add.audio('Tap');
                click11.play();
                

                txtbox.frame=2;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
                //this.destroyCarrots();
                //destCarrots.destroy();
                //this.darkCarrtsVisible();
                
            },this);
       
            var calNum2=this.add.sprite(170,505,'grade61_calNum');
        calNum2.name="grade61_calNum2";
            calNum2.anchor.setTo(0.5);
            calNum2.scale.setTo(0.6,0.6);
            calNum2.frame=2;
       calNum2.inputEnabled=true;
           calNum2.input.useHandCursor = true;
        //destCarrots.destroy();
            calNum2.events.onInputDown.add(function(){
                var click22 = this.add.audio('Tap');
                click22.play();
                
                txtbox.frame=3;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
                //this.destroyCarrots();
                //destCarrots.destroy();
                //this.darkCarrtsVisible();
            },this);
       
            var calNum3=this.add.sprite(235,505,'grade61_calNum');
        calNum3.name="grade61_calNum3";
            calNum3.anchor.setTo(0.5);
            calNum3.scale.setTo(0.6,0.6);
            calNum3.frame=3;
       calNum3.inputEnabled=true;
            calNum3.input.useHandCursor = true;
        //destCarrots.destroy();
            calNum3.events.onInputDown.add(function(){
                var click33 = this.add.audio('Tap');
                click33.play();
               
                txtbox.frame=4;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
                //this.destroyCarrots();
                //destCarrots.destroy();
               // this.darkCarrtsVisible();
            },this);
       
            var calNum4=this.add.sprite(300,505,'grade61_calNum');
        calNum4.name="grade61_calNum4";
            calNum4.anchor.setTo(0.5);
            calNum4.scale.setTo(0.6,0.6);
            calNum4.frame=4;
       calNum4.inputEnabled=true;
            calNum4.input.useHandCursor = true;
       // destCarrots.destroy();
            calNum4.events.onInputDown.add(function(){
                var click44 = this.add.audio('Tap');
                click44.play();
                
                txtbox.frame=5;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
                //this.destroyCarrots();
                //destCarrots.destroy();
               // this.darkCarrtsVisible();
            },this);
       
            var calNum5=this.add.sprite(365,505,'grade61_calNum');
        calNum5.name="grade61_calNum5";
            calNum5.anchor.setTo(0.5);
            calNum5.scale.setTo(0.6,0.6);
            calNum5.frame=5;
       calNum5.inputEnabled=true;
       calNum5.input.useHandCursor = true;
        //destCarrots.destroy();
            calNum5.events.onInputDown.add(function(){
                var click55 = this.add.audio('Tap');
                click55.play();
                
                txtbox.frame=6;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
                //this.destroyCarrots();
                //destCarrots.destroy();
               // this.darkCarrtsVisible();
            },this);
       
       
            var calNum6=this.add.sprite(430,505,'grade61_calNum');
        calNum6.name="grade61_calNum6";
            calNum6.anchor.setTo(0.5);
            calNum6.scale.setTo(0.6,0.6);
            calNum6.frame=6;
       calNum6.inputEnabled=true;
           calNum6.input.useHandCursor = true;
        //destCarrots.destroy();
            calNum6.events.onInputDown.add(function(){
                var click66 = this.add.audio('Tap');
                click66.play();
                
                txtbox.frame=7;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
                //this.destroyCarrots();
                //destCarrots.destroy();
               // this.darkCarrtsVisible();
            },this);
       
             var calNum7=this.add.sprite(495,505,'grade61_calNum');
        calNum7.name="grade61_calNum7";
            calNum7.anchor.setTo(0.5);
            calNum7.scale.setTo(0.6,0.6);
            calNum7.frame=7;
       calNum7.inputEnabled=true;
           calNum7.input.useHandCursor = true;
        //destCarrots.destroy();
            calNum7.events.onInputDown.add(function(){
                var click77 = this.add.audio('Tap');
                click77.play();
                
                txtbox.frame=8;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
               // this.destroyCarrots();
                //destCarrots.destroy();
              //  this.darkCarrtsVisible();
            },this);
       
            var calNum8=this.add.sprite(560,505,'grade61_calNum');
        calNum8.name="grade61_calNum8";
            calNum8.anchor.setTo(0.5);
            calNum8.scale.setTo(0.6,0.6);
            calNum8.frame=8;
      calNum8.inputEnabled=true;
           calNum8.input.useHandCursor = true;
        
            calNum8.events.onInputDown.add(function(){
                var click88 = this.add.audio('Tap');
                click88.play();
                
                txtbox.frame=9;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
               // this.destroyCarrots();
               // destCarrots.destroy();
              //  this.darkCarrtsVisible();
            },this);
       
            var calNum9=this.add.sprite(625,505,'grade61_calNum');
        calNum9.name="grade61_calNum9";
            calNum9.anchor.setTo(0.5);
            calNum9.scale.setTo(0.6,0.6);
            calNum9.frame=9;
      calNum9.inputEnabled=true;
            calNum9.input.useHandCursor = true;
        //destCarrots.destroy();
            calNum9.events.onInputDown.add(function(){
                var click99 = this.add.audio('Tap');
                click99.play();
                
                txtbox.frame=10;
//               pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
                //this.destroyCarrots();
                //destCarrots.destroy();
                //this.darkCarrtsVisible();
            },this);
       
             var calNum0=this.add.sprite(690,505,'grade61_calNum');
        calNum0.name="grade61_calNum0";
            calNum0.anchor.setTo(0.5);
            calNum0.scale.setTo(0.6,0.6);
            calNum0.frame=0;
       calNum0.inputEnabled=true;
            calNum0.input.useHandCursor = true;
        //destCarrots.destroy();
            calNum0.events.onInputDown.add(function(){
                var click00 = this.add.audio('Tap');
                click00.play();
                
                txtbox.frame=1;
//                pressed++;
//                if(pressed==1)
//            {
//                this.destroyCarrots();
//            }
               // this.destroyCarrots();
                //destCarrots.destroy();
                //this.darkCarrtsVisible();
            },this);
       ////console.log("pressed=="+pressed);

            

       
            
           tick=this.add.sprite(855,508,'grade61_tick');
        tick.name="grade61_tick";
            tick.anchor.setTo(0.5);
            tick.scale.setTo(1.2,1.2);
            tick.frame=0;
            tick.inputEnabled=true;
           tick.input.useHandCursor = true;
            tick.events.onInputDown.add(function(target){
                target.events.onInputDown.removeAll();
              //tick.inputEnabled=false;
                this.noofAttempts++;
                tick.frame=1;
                this.time.events.add(500, function(){
                    tick.frame=0;
                    if(correctflag==1){
                        //this.events.onInputDown.removeAll();
                    }
                    //this.checkForRightAns();
                    this.checkAns();
                    
            },this);
            },this);
       
            eraser=this.add.sprite(780,508,'grade61_eraser');
        eraser.name="grade61_eraser";
            eraser.anchor.setTo(0.5);
            eraser.scale.setTo(1.2,1.2);
            eraser.frame=0;
            eraser.inputEnabled=true;
            eraser.input.useHandCursor = true;
            eraser.events.onInputDown.add(function(){
                eraser.frame=1;
                this.time.events.add(500, function(){
                eraser.frame=0;
                },this);
                txtbox.frame=0;
                    
            },this);
       
        
        //console.log("txt frame=="+txtbox.frame);
        this.checkOrder();
       
       
        //this.getVoice();
        
         if(Number(greenNumbers1.frame+1)==1){
            this.questionid = 1;
                if(window.languageSelected=="English")
                        _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/e2.mp3";  
                        else if(window.languageSelected=="Hindi")
                           _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/h2.mp3";

                        else if(window.languageSelected=="Kannada")
                           _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/k2.mp3";
                         else if(window.languageSelected=="Gujarati")
                           _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/8.1/e2.mp3";
                        else
                        {
                           _this.soundurl =  window.baseUrl+"questionSounds/8.1/Odiya/8.1_a.mp3";
                            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                                    
                               
           }
          else if(Number(greenNumbers1.frame+1)==2){
            this.questionid = 2;
              if(window.languageSelected=="English")
                        _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/e3.mp3";

                        else if(window.languageSelected=="Hindi")
                           _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/h3.mp3";

                        else if(window.languageSelected=="Kannada")
                           _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/k3.mp3";
                         else if(window.languageSelected=="Gujarati")
                           _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/8.1/e3.mp3";
                        else
                        {
                           _this.soundurl =  window.baseUrl+"questionSounds/8.1/Odiya/8.1_b.mp3";
                            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                                    
                               
          }
          else if(Number(greenNumbers1.frame+1)==3){
            this.questionid = 3;
              if(window.languageSelected=="English")
                    _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/e4.mp3";

                    else if(window.languageSelected=="Hindi")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/h4.mp3";

                    else if(window.languageSelected=="Kannada")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/k4.mp3";
                     else if(window.languageSelected=="Gujarati")
                           _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/8.1/e4.mp3";
                    else
                    {
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Odiya/8.1_c.mp3";
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                               
          }
          else if(Number(greenNumbers1.frame+1)==4){
            this.questionid = 4;
              if(window.languageSelected=="English")
                    _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/e5.mp3";

                    else if(window.languageSelected=="Hindi")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/h5.mp3";

                    else if(window.languageSelected=="Kannada")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/k5.mp3";
                     else if(window.languageSelected=="Gujarati")
                           _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/8.1/e5.mp3";
                    else
                    {
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Odiya/8.1_d.mp3";
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                                
          }
          else if(Number(greenNumbers1.frame+1)==5){
            this.questionid = 5;
              if(window.languageSelected=="English")
                    _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/e6.mp3";

                    else if(window.languageSelected=="Hindi")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/h6.mp3";

                    else if(window.languageSelected=="Kannada")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/k6.mp3";
                     else if(window.languageSelected=="Gujarati")
                           _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/8.1/e6.mp3";
                    else
                    {
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Odiya/8.1_e.mp3";
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                   
                                
          }
          else if(Number(greenNumbers1.frame+1)==6){
            this.questionid = 6;
              if(window.languageSelected=="English")
                    _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/e7.mp3";

                    else if(window.languageSelected=="Hindi")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/h7.mp3";

                    else if(window.languageSelected=="Kannada")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/k7.mp3";
                     else if(window.languageSelected=="Gujarati")
                           _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/8.1/e7.mp3";
                    else
                    {
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Odiya/8.1_f.mp3";
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                                
          }
          else if(Number(greenNumbers1.frame+1)==7){
            this.questionid = 7;
             if(window.languageSelected=="English")
                    _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/e8.mp3";

                    else if(window.languageSelected=="Hindi")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/h8.mp3";

                    else if(window.languageSelected=="Kannada")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/k8.mp3";
                     else if(window.languageSelected=="Gujarati")
                           _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/8.1/e8.mp3";
                    else
                    {
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Odiya/8.1_g.mp3";
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                                
          }
        else if(Number(greenNumbers1.frame+1)==8){
          this.questionid = 8;
             if(window.languageSelected=="English")
                    _this.soundurl =  window.baseUrl+"questionSounds/8.1/English/e9.mp3";

                    else if(window.languageSelected=="Hindi")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Hindi/h9.mp3";

                    else if(window.languageSelected=="Kannada")
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Kannada/k9.mp3";
                     else if(window.languageSelected=="Gujarati")
                           _this.soundurl =  window.baseUrl+"questionSounds/Gujarati/8.1/e9.mp3";
                    else
                    {
                       _this.soundurl =  window.baseUrl+"questionSounds/8.1/Odiya/8.1_h.mp3";
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                                
          }
        
         commonNavBar.addNavBar(this,_this.soundurl,"numberoperation2");
       
        if(Number(greenNumbers1.frame+1)==1){
            this.questionid = 1;
                if(window.languageSelected=="English")
                       commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/English/e2.mp3");  
                        else if(window.languageSelected=="Hindi")
                          commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Hindi/h2.mp3");

                        else if(window.languageSelected=="Kannada")
                          commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Kannada/k2.mp3");
                        else if(window.languageSelected=="Gujarati")
                           commonNavBar.getVoice( window.baseUrl+"questionSounds/Gujarati/8.1/e2.mp3");
                        else
                        {
                          commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Odiya/8.1_a.mp3");
                            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                                    
                               
           }
          else if(Number(greenNumbers1.frame+1)==2){
            this.questionid = 2;
              if(window.languageSelected=="English")
                       commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/English/e3.mp3");

                        else if(window.languageSelected=="Hindi")
                          commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Hindi/h3.mp3");

                        else if(window.languageSelected=="Kannada")
                          commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Kannada/k3.mp3");
                        else if(window.languageSelected=="Gujarati")
                           commonNavBar.getVoice( window.baseUrl+"questionSounds/Gujarati/8.1/e3.mp3");
                        else
                        {
                          commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Odiya/8.1_b.mp3");
                            //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                                    
                               
          }
          else if(Number(greenNumbers1.frame+1)==3){
            this.questionid = 3;
              if(window.languageSelected=="English")
                   commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/English/e4.mp3");

                    else if(window.languageSelected=="Hindi")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Hindi/h4.mp3");

                    else if(window.languageSelected=="Kannada")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Kannada/k4.mp3");
                    else if(window.languageSelected=="Gujarati")
                           commonNavBar.getVoice( window.baseUrl+"questionSounds/Gujarati/8.1/e4.mp3");
                    else
                    {
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Odiya/8.1_c.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                               
          }
          else if(Number(greenNumbers1.frame+1)==4){
            this.questionid = 4;
              if(window.languageSelected=="English")
                   commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/English/e5.mp3");

                    else if(window.languageSelected=="Hindi")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Hindi/h5.mp3");

                    else if(window.languageSelected=="Kannada")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Kannada/k5.mp3");
                    else if(window.languageSelected=="Gujarati")
                           commonNavBar.getVoice( window.baseUrl+"questionSounds/Gujarati/8.1/e5.mp3");
                    else
                    {
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Odiya/8.1_d.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                                
          }
          else if(Number(greenNumbers1.frame+1)==5){
            this.questionid = 5;
              if(window.languageSelected=="English")
                   commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/English/e6.mp3");

                    else if(window.languageSelected=="Hindi")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Hindi/h6.mp3");

                    else if(window.languageSelected=="Kannada")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Kannada/k6.mp3");
                    else if(window.languageSelected=="Gujarati")
                           commonNavBar.getVoice( window.baseUrl+"questionSounds/Gujarati/8.1/e6.mp3");
                    else
                    {
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Odiya/8.1_e.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                   
                                
          }
          else if(Number(greenNumbers1.frame+1)==6){
            this.questionid = 6;
              if(window.languageSelected=="English")
                   commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/English/e7.mp3");

                    else if(window.languageSelected=="Hindi")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Hindi/h7.mp3");

                    else if(window.languageSelected=="Kannada")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Kannada/k7.mp3");
                    else if(window.languageSelected=="Gujarati")
                           commonNavBar.getVoice( window.baseUrl+"questionSounds/Gujarati/8.1/e7.mp3");
                    else
                    {
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Odiya/8.1_f.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                                
          }
          else if(Number(greenNumbers1.frame+1)==7){
            this.questionid = 7;
             if(window.languageSelected=="English")
                   commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/English/e8.mp3");

                    else if(window.languageSelected=="Hindi")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Hindi/h8.mp3");

                    else if(window.languageSelected=="Kannada")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Kannada/k8.mp3");
                    else if(window.languageSelected=="Gujarati")
                           commonNavBar.getVoice( window.baseUrl+"questionSounds/Gujarati/8.1/e8.mp3");
                    else
                    {
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Odiya/8.1_g.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                                
          }
        else if(Number(greenNumbers1.frame+1)==8){
          this.questionid = 8;
             if(window.languageSelected=="English")
                   commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/English/e9.mp3");

                    else if(window.languageSelected=="Hindi")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Hindi/h9.mp3");

                    else if(window.languageSelected=="Kannada")
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Kannada/k9.mp3");
                    else if(window.languageSelected=="Gujarati")
                           commonNavBar.getVoice( window.baseUrl+"questionSounds/Gujarati/8.1/e9.mp3");
                    else
                    {
                      commonNavBar.getVoice( window.baseUrl+"questionSounds/8.1/Odiya/8.1_h.mp3");
                        //_this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                    }
                                    
                                
          }
        
      // shakeGroup.add(boxbg);
       shakeGroup.add(WhiteBox);
       shakeGroup.add(greenNumbers);
       shakeGroup.add(greenNumbers1);
       shakeGroup.add(greenNumbers2);
       shakeGroup.add(minusSign);
       shakeGroup.add(equalSymbol);
       shakeGroup.add(txtbox);
        
        
       numberpadgrp.add(bottomBar);
       numberpadgrp.add(calNum1);
       numberpadgrp.add(calNum2);
       numberpadgrp.add(calNum3);
       numberpadgrp.add(calNum4);
       numberpadgrp.add(calNum5);
       numberpadgrp.add(calNum6);
       numberpadgrp.add(calNum7);
       numberpadgrp.add(calNum8);
       numberpadgrp.add(calNum9);
       numberpadgrp.add(calNum0);
       numberpadgrp.add(tick);
       numberpadgrp.add(eraser);
        
        numberpadgrp.visible=false;
        //this.time.events.add(5000, function(){
          //  //console.log("tween");
          //  shakeGroup.x=500;
       // shakeGroup.visible=true;
        //    var Maintween = this.add.tween(shakeGroup);
       // Maintween.to({ x: 0}, 0, 'Linear', true, 0);
            
     //  },this);
   },
    
  shutdown:function(){
      this.stopvoice();
        /*this.no22=null;
        this.src = null;
        this.no11=null;
        this.qArrays=null;
        this.carrot=null;
        this.addLength=null;
        this.imp=null;
        this.carrot=null;
        this.displayCarrots1=null;
        this.displayCarrots2=null;
        this.displayCarrots3=null;
        this.displayCarrots4=null;
        this.displayCarrots5=null;
        this.displayCarrots6=null;
        this.displayCarrots7=null;
        this.displayCarrots8=null;
        this.randomno=null;
        this.randarr=null;
        this.dragged=null;
        this.allElements=null;
        this.rabitAnimGroup=null;
        this.blackCarrots=null;
        this.carrot1=null;
        this.carrot2=null;
        this.carrot3=null;
        this.carrot4=null;
        this.carrot5=null;
        this.carrot6=null;
        this.carrot7=null;
        this.carrot8=null;
        this.carrot9=null;
         this.blackCarrots1=null;
        this.blackCarrots2=null;
        this.blackCarrots3=null;
        this.blackCarrots4=null;
        this.blackCarrots5=null;
        this.blackCarrots6=null;
        this.blackCarrots7=null;
        this.blackCarrots8=null;
        this.blackCarrots9=null;
        this.framesChange=null;
        f=null;
        v=null;
        this.framesChange1=null;
        this.greenNumbers=null;
        this.greenNumbers=null;
        this.greenNumbers1=null;
        this.shakeGroup=null;
        this.correctflag=null;
        this.qArrays1=null;
        this.carrotArray=null;
        this.count=null;
        this.count1=null;
        this.dragcount=null;
        this.speaker=null;
        this.destCarrots=null;
        this.counterForTimer=null;
        this.minutes=null;
        this.seconds=null;
        this.celebration=null;
        this.thinkingCloud=null;
        this.carrotGroup=null;
        this.pressed=null;
        this.starsGroup=null;
        this.timeDisplay=null;
        tick.events.onInputDown.removeAll();
        this.tick=null;
        eraser.events.onInputDown.removeAll();
        this.eraser=null;
        carrot1.events.onInputDown.removeAll();
        carrot2.events.onInputDown.removeAll();
        carrot3.events.onInputDown.removeAll();
        carrot4.events.onInputDown.removeAll();
        carrot5.events.onInputDown.removeAll();
        carrot6.events.onInputDown.removeAll();
        carrot7.events.onInputDown.removeAll();
        carrot8.events.onInputDown.removeAll();
        carrot9.events.onInputDown.removeAll();
        //calNum1.events.onInputDown.removeAll();
        this.calnum1=null;
        //calNum2.events.onInputDown.removeAll();
        this.calnum2=null;
        //calNum3.events.onInputDown.removeAll();
        this.calnum3=null;
        //calNum4.events.onInputDown.removeAll();
        this.calnum4=null;
        //calNum5.events.onInputDown.removeAll();
        this.calnum5=null;
        //calNum6.events.onInputDown.removeAll();
        this.calnum6=null;
        //calNum7.events.onInputDown.removeAll();
        this.calnum7=null;
        //calNum8.events.onInputDown.removeAll();
        this.calnum8=null;
       // calNum9.events.onInputDown.removeAll();
        this.calnum9=null;
        //calNum0.events.onInputDown.removeAll();
        this.calnum0=null;
       // backbtn.events.onInputDown.removeAll();
        this.backbtn=null;
        //speaker.events.onInputDown.removeAll();
        this.speaker=null;*/

        window.score = this.score;
            localStorage.setItem(window.avatarName+"Score", window.score);

            if(this.playedwithHint&&this.completelyplayed)
            {
              telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"subtraction_NOSG_1_1state", "playedwithhint");
                localStorage.setItem(window.avatarName+"numberoperationPlayed", "played");
            }
            else if(!this.playedwithHint&&this.completelyplayed)
            {
              telInitializer2.syncToServer();
                localStorage.setItem(window.avatarName+"subtraction_NOSG_1_1state", "fullycomplete");
                localStorage.setItem(window.avatarName+"subtraction_NOSG_2_1state", "canplay");
                localStorage.setItem(window.avatarName+"numberoperationPlayed", "played");
            }  
        
    },
    
    slideup:function(){
         //this.time.events.add(800, function(){
            rabitAnimGroup.y=47;
        
            var Maintweens = this.add.tween(rabitAnimGroup);
        Maintweens.to({ y:-47}, 845, 'Linear', true, 0);
          //   },this);
            
        numberpadgrp.visible=true;
		numberpadgrp.y=50;
         var Maintween = this.add.tween(numberpadgrp);
        Maintween.to({ y:0}, 0, 'Linear', true, 0);
            
       
    },
    
    checkAns:function(){
        
       //console.log("greenframe1="+Number(greenNumbers.frame+1));
       //console.log("greenframe2="+Number(greenNumbers1.frame+1));
       //console.log("greenframe3="+Number(greenNumbers2.frame+1));
        
        
        //1-1=0
                 
                    if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
        else if((Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==1)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
               
               
                     { 
                         
                         this.wrongAns();
                     }  
        
        //2-1=1
           
                    if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
            else if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //2-2=0
        
                    if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
            else if((Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==2)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //3-1=2
           
                   if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
          else if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //3-2=1
        
                   if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2))
                       {
                           correctflag=1;
                       this.correctAns();
                         //  destCarrots.destroy();
                       }
              else if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //3-3=0
        
                   if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
           else if((Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==3)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //4-1=3
        
                    if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
             else if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //4-2=2
             
                    if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
           else if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //4-3=1
        
                   if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
            else if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //4-4=0
        
                    if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
            else if((Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==4)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //5-1=4
        
                    if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
           else if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //5-2=3
        
        
                    if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
           else if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //5-3=2
        
        
                    if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3))
                       {
                           correctflag=1;
                       this.correctAns();
                         //  destCarrots.destroy();
                       }
             else if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //5-4=1
        
                    if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //5-5=0
        
                     if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==1))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
               else if((Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==5)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
                  
        //6-1=5
        
                     if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //6-2=4
        
                     if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
           else if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //6-3=3
        
                     if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
           else if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //6-4=2
        
                   if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3))
                       {
                           correctflag=1;
                       this.correctAns();
                         //  destCarrots.destroy();
                       }
           else if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //6-5=1
        
                   if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==2))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
        else if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //6-6=0
                 
                    if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==1))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
           else if((Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==6)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        //7-1=6
        
                   if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
      else if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        //7-2=5
        
                   if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
            else if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        //7-3=4
        
                    if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //7-4=3
        
                   if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //7-5=2
        
                    if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==3))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //7-6=1
        
                   if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==2))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //7-7=0
        
                   if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==1))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
          else if((Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==7)&&(Number(greenNumbers1.frame+1)==17)&&(txtbox.frame==10))
                     { 
                         
                         this.wrongAns();
                     } 
        //8-1=7
        
                   if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==8))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
      else if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==1)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        //8-2=6
        
                   if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==7))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
            else if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==2)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        //8-3=5
        
                    if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==6))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==3)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //8-4=4
        
                   if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==5))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==4)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //8-5=3
        
                    if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==4))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==5)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     } 
        
        //8-6=2
        
                   if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==3))
                       {
                           correctflag=1;
                       this.correctAns();
                          // destCarrots.destroy();
                       }
         else if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==6)&&(txtbox.frame==10))
                     { 
                         this.wrongAns();
                     }  
        
        //8-7=1
        
                   if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==2))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
          else if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==1)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==7)&&(txtbox.frame==10))
                     { 
                         
                         this.wrongAns();
                     } 
        //8-8=0
        
                   if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==1))
                       {
                           correctflag=1;
                       this.correctAns();
                           //destCarrots.destroy();
                       }
          else if((Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==0)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==2)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==3)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==4)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==5)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==6)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==7)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==8)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==9)||
                (Number(greenNumbers.frame+1)==8)&&(Number(greenNumbers1.frame+1)==8)&&(txtbox.frame==10))
                     { 
                         
                         this.wrongAns();
                     } 
    }
};