Game.NSF_6_G6demo = function () {};

Game.NSF_6_G6demo.prototype = 
{

    init: function (game) 
    {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR FM3 GAME.
        //* User can skip the video to go to the game. Backbutton takes back to the menu.
        
//************************************** to be used in the Addition-Subtraction games.***********
//        //* get the session parameter if the demo is already seen.
//        //* if it is already seen, then set the parameter to 1 and skip the demo now.
//		var addDemoseen = sessionStorage.getItem("param1");
//        
//        if (addDemoseen == 1) _this.state.start('NS_INT_1_G6level1');   //* skip to game.
//        else                                                            //* set flg and continue demo
//        {
//            addDemoseen = 1;
//            sessionStorage.setItem("param1", addDemoseen);
//        }
//*************************************************************************************************
        console.log("jj");
        _this.languageSelected = window.languageSelected;
        
        if (_this.languageSelected == null 
            || _this.languageSelected == " "
            || _this.languageSelected == "")
        {
            _this.languageSelected = "English";
        }
        else console.log("Language selected: " + _this.languageSelected);
        

        // _this.clickSound = document.createElement('audio');
        // _this.clickSoundsrc = document.createElement('source');
        // _this.clickSoundsrc.setAttribute("src", "sounds/ClickSound.mp3");
        // _this.clickSound.appendChild(_this.clickSoundsrc);

        // _this.screen_opening = document.createElement('audio');
        // _this.screen_openingsrc = document.createElement('source');
        // _this.screen_openingsrc.setAttribute("src", "sounds/screen opening.wav");
        // _this.screen_opening.appendChild(_this.screen_openingsrc);
        
        
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl+"questionSounds/NSF-6-G6/" + 
                                         _this.languageSelected + "/NSF-6-G6.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);  
       
    },

    preload:function(game)
    {       
    
        this.load.video('nsf6',window.baseUrl+'assets/demoVideos/NSF-6-G6.mp4');
//        this.load.atlas('backbtn','assets/commonAssets/backbtn.png','assets/commonAssets/bkbtn.json');
        this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        //this.load.image('backbtn','assets/commonAssets/BackBtn1.png');
        this.load.image('prgressbarOutLine', window.baseUrl+'assets/commonAssets/prgressbarOutLine.png');
        this.load.image('preloadBar',window.baseUrl+'assets/commonAssets/prgressbar.png'); 
    },

    create: function (game) 
    {        
        _this.video_playing = 0;  //* variables to keep track of which video is played. video1/2/3
        _this.showDemoVideo();  //* call the function to show the video
        
       _this.backbtn = _this.add.sprite(5,6,'backbtn');         //* back button at the top.
       _this.backbtn.inputEnabled = true;
       _this.backbtn.input.useHandCursor = true;
       _this.backbtn.events.onInputDown.add(function ()
       {
           _this.clickSound.play();
           //_this.stopVideo();
           _this.stopAudio();
           //_this.state.start('NS_INT_G6Menu');
          // window.parent.location.reload();
          _this.time.events.add(450,function()
           {
            _this.state.start('grade6NumberSystems',true,false);
               
           }); 
           
           //* use javascript timeout to destroy the game since phaser time object
           //* will not exist after game destroy and hence give time related error.
           setTimeout(function() 
           {
             _this.game.destroy();
           }, 500);
       });       
        _this.skip = _this.add.image(870, 420, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function ()
        {
            //_this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.state.start('NSF_6_G6level1');
        });
    },
    
    //* function to stop the video and audio if they are playing.
    stopVideo: function()
    {
        if(_this.demoVideo_1)
		{
            console.log("removing the video1");
			_this.demoVideo_1.destroy();
		}
    },

    stopAudio: function()
    {    
        if (_this.q1Sound)
        {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }
        
        _this.time.events.removeAll();
//        _this.backbtn.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
    },
    
    showDemoVideo: function()
    {
        _this.q1Sound.play(); 
        _this.demoVideo_1 = _this.add.video('nsf6');
                
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+"assets/demoVideos/NSF-6-G6.mp4");
        _this.demoVideo_1.addToWorld();
        _this.video_playing = 1;
        console.log("jj");
        
        _this.demoVideo_1.onComplete.add(function()   //* on completion of video3, go to the game.
        {
            _this.stopAudio();
            _this.demoVideo_1.stop(false);
            _this.time.events.removeAll();
//            _this.backbtn.events.onInputDown.removeAll();
            _this.skip.events.onInputDown.removeAll();
            _this.state.start('NSF_6_G6level1');
        });            
    }
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
