Game.NSF_1A_G6demo = function () {};

Game.NSF_1A_G6demo.prototype = 
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
            _this.languageSelected = "Hindi";
        }
        else console.log("Language selected: " + _this.languageSelected);
        

         _this.clickSound = document.createElement('audio');
         _this.clickSoundsrc = document.createElement('source');
         _this.clickSoundsrc.setAttribute("src", window.baseUrl+"sounds/ClickSound.mp3");
         _this.clickSound.appendChild(_this.clickSoundsrc);

        // _this.screen_opening = document.createElement('audio');
        // _this.screen_openingsrc = document.createElement('source');
        // _this.screen_openingsrc.setAttribute("src", "sounds/screen opening.wav");
        // _this.screen_opening.appendChild(_this.screen_openingsrc);
        

        
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl+"questionSounds/NSF-1A-G6/" + 
                                         _this.languageSelected + "/NSF-1-G6-a.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src); 

        //* enter the minimum number of pieces
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl+"questionSounds/NSF-1B-G6/" + 
                                        _this.languageSelected + "/NSF-1-G6-b.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);
    },

    preload:function(game)
    {       
    
        this.load.video('nsf1_a',window.baseUrl+'assets/demoVideos/NSF-1A-G6.mp4');
        this.load.video('nsf1_b',window.baseUrl+'assets/demoVideos/NSF-1B-G6.mp4');
       // this.load.atlas('backbtn',window.baseUrl+'assets/commonAssets/backbtn.png','assets/commonAssets/backbtn.json');
        this.load.image('skipArrow',window.baseUrl+'assets/commonAssets/skipArrow.png');
        //this.load.image('backbtn','assets/commonAssets/BackBtn1.png');		
        
        this.load.image('prgressbarOutLine', window.baseUrl+'assets/commonAssets/prgressbarOutLine.png');
        this.load.image('preloadBar',window.baseUrl+'assets/commonAssets/prgressbar.png'); 
        this.load.image('Level42C_Topbar',window.baseUrl+'assets/commonAssets/topbar.png');
        this.load.image('Level42C_timer',window.baseUrl+'assets/commonAssets/timerbg.png');
    },

    create: function (game) 
    {        
        _this.video_playing = 0;  //* variables to keep track of which video is played. video1/2/3
        _this.showDemoVideo();  //* call the function to show the video
        
        // _this.backbtn = _this.add.sprite(5,6,'backbtn');         //* back button at the top.
        // _this.backbtn.inputEnabled = true;
        // _this.backbtn.input.useHandCursor = true;
        
        // _this.backbtn.events.onInputDown.add(function ()
        // {
        //     _this.clickSound.play();
        //    // _this.stopVideo();
        //     _this.stopAudio();
        //     _this.time.events.add(50,function()
        //     {
        //         _this.state.start('grade6NumberSystems');
        //     });  
        // });
        
        _this.skip = _this.add.image(870, 420, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function ()
        {
            _this.clickSound.play();
           // _this.stopVideo();
            _this.stopAudio();
            _this.state.start('NSF_1A_G6level1');
        });
    },
    
    //* function to stop the video and audio if they are playing.
    stopVideo: function()
    {
        if (_this.demoVideo_1)
        {
            _this.demoVideo_1.destroy();
        }
        
        if (_this.demoVideo_2)
        {
            _this.demoVideo_2.destroy();
        }
    },
    
    stopAudio: function()
    {    
        if (_this.demoAudio1)
        {
            console.log("removing the q1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }
        else if(_this.demoAudio2)
        {
            _this.demoAudio2.pause();
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
        }
        
       // _this.time.events.removeAll();
    //_this.backbtn.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
        //_this.backbtn.destroy();
        _this.skip.destroy();
    },

    showDemoVideo: function()
    {
        _this.demoAudio1.play(); 
        _this.demoVideo_1 = _this.add.video('nsf1_b');              
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+"assets/demoVideos/NSF-1A-G6.mp4");
        _this.demoVideo_1.addToWorld();
        _this.video_playing = 1;
        console.log("jj");

        _this.demoVideo_2 = _this.add.video('nsf1_a');
        _this.demoVideo_1.onComplete.add(function()   //* on completion of video3, go to the game.
        {
            
           _this.time.events.add(1300, function()
            {               
                _this.demoVideo_2.play(false);
                _this.demoVideo_2.changeSource(window.baseUrl+"assets/demoVideos/NSF-1B-G6.mp4");
                _this.demoVideo_2.addToWorld();
                _this.video_playing = 2;
                //_this.backbtn.bringToTop();               
                _this.skip.bringToTop(); 
            });
            
            _this.time.events.add(2200, function()
            {
                _this.demoAudio2.play();     
            });
        });

        _this.demoVideo_2.onComplete.add(function()   //* on completion of video2, go to the game.
        {
            _this.stopAudio();
            _this.demoVideo_2.stop(false);    
            _this.state.start('NSF_1A_G6level1');
        });            
    }
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
