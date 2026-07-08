Game.NS_LCM_1_G6demo = function () {};

Game.NS_LCM_1_G6demo.prototype = {

    init: function (game) {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR LCM GAME.
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
        
      //  _this.languageSelected = localStorage.getItem("language");
      _this.languageSelected = window.languageSelected;
        
        if (_this.languageSelected == null 
            || _this.languageSelected == " "
            || _this.languageSelected == "")
        {
            _this.languageSelected = "Marathi";
        }
        else console.log("Language selected: " + _this.languageSelected);
        

        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src",window.baseUrl+"sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.screen_opening = document.createElement('audio');
        _this.screen_openingsrc = document.createElement('source');
        _this.screen_openingsrc.setAttribute("src",window.baseUrl+"sounds/screen opening.wav");
        _this.screen_opening.appendChild(_this.screen_openingsrc);
        
        //* in this game we find LCM by arranging multiples of a number
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src",window.baseUrl+"questionSounds/NS-LCM-1-G6/" + 
                                         _this.languageSelected + "/NS-LCM-1-G6 demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);
                
        //* let us find the lcm of the given numbers
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src",window.baseUrl+"questionSounds/NS-LCM-1-G6/" + 
                                         _this.languageSelected + "/NS-LCM-1-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);
        
        //* enter the LCM
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src",window.baseUrl+"questionSounds/NS-LCM-1-G6/" + 
                                         _this.languageSelected + "/NS-LCM-1-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);
    },

    create: function (game) 
    {        
        _this.time.events.removeAll();
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
        //     _this.backbtn.events.onInputDown.removeAll();

        //     _this.time.events.add(50,function()
        //     {
        //         //document.getElementById("first").style.display = "block";
        //        // _this.state.start('Backbutton');
        //        _this.state.start('grade6NumberSystems');
        //     }); 

        // });
        
        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function ()
        {
            _this.clickSound.play();
           // _this.stopVideo();
            _this.stopAudio();
            _this.state.start('NS_LCM_1_G6level1');
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
        
		if(_this.demoVideo_2)
		{
            console.log("removing the video2");
            _this.demoVideo_2.destroy();
		}

        if (_this.videoWorld1)  _this.videoWorld1.destroy();
        if (_this.videoWorld2)  _this.videoWorld2.destroy();
    },
    
    stopAudio: function()
    {
        if (_this.demoAudio1)
        {
            console.log("removing the audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }
        
        if (_this.q1Sound)
        {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }
        
        if (_this.q2Sound)
        {
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        //_this.time.events.removeAll();
       // _this.backbtn.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
    },
    
    //* event functions for demo audio and question audios. remove itself first and
    //* then do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function()
    {
        if (_this.demoVideo_1)  _this.demoVideo_1.stop(false);
        console.log("audio2 ended - pause video1");
        _this.demoAudio1.removeEventListener('ended', _this.dA1);
        _this.demoVideo_2.play(false);
        _this.demoVideo_2.changeSource(window.baseUrl+'assets/demoVideos/NS-LCM-1-G6_2.mp4');  //* phaser needs this.to run in mobile
        _this.video_playing = 2;
        _this.videoWorld2 = _this.demoVideo_2.addToWorld();
        //_this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        _this.skip.bringToTop(); 

        //* ask 1st question here.bit delay for video to pl.
        _this.time.events.add(2600, function() {_this.q1Sound.play()}); 

        _this.time.events.add(16000, function()           //* pause video after 16sec for Question to complete
        {
            _this.q2Sound.play();
        });
    },
    
    //* video_1 is concept explanation. 
    //* video_2 is int_1 game. 
    //* video_3 is int_2 game.
    
    showDemoVideo: function()
    {
        _this.demoVideo_1 = _this.add.video('lcm_1_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl+'assets/demoVideos/NS-LCM-1-G6_1.mp4');
        _this.video_playing = 1;        
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();
        
        _this.time.events.add(2200, function() {_this.demoAudio1.play()}); //* give bit delay for video to start playing

        _this.demoVideo_2 = _this.add.video('lcm_1_2');
       
        _this.demoAudio1.addEventListener('ended', _this.dA1);    //*after audio2 is over, start 2nd video.

        _this.demoVideo_2.onComplete.add(function()  //* after video3 is done, start the game
        {
            if (_this.demoVideo_2)  _this.demoVideo_2.stop(false);
            
            if (_this.videoWorld1)  _this.videoWorld1.destroy();
            if (_this.videoWorld2)  _this.videoWorld2.destroy();
            
           // _this.stopAudio();
            _this.state.start('NS_LCM_1_G6level1');
        });
    },
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
