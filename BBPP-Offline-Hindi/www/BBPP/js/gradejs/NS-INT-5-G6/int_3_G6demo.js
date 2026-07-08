Game.NS_INT_3_G6demo = function () { };

Game.NS_INT_3_G6demo.prototype = {

    init: function (game) {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR INT 5 GAME.(MULTIPLE BIRDS/FISH, SELECT THE BIRD/FISH at a given level)
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

        _this.languageSelected = window.languageSelected;

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "Hindi";
        }
        else console.log("Language selected: " + _this.languageSelected);


        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.screen_opening = document.createElement('audio');
        _this.screen_openingsrc = document.createElement('source');
        _this.screen_openingsrc.setAttribute("src", window.baseUrl + "sounds/screen opening.wav");
        _this.screen_opening.appendChild(_this.screen_openingsrc);

        //* integers are introduced in this game..uses int-1 game demo audio itself.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-1-G6/" +
            _this.languageSelected + "/Integer demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* select teh fish in the place
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5-G6/" +
            _this.languageSelected + "/NS-INT-3-G6-b.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* minus 1
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-5-G6/" +
            _this.languageSelected + "/mns-1-a.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

    },

    create: function (game) {
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
        //         _this.state.start('grade6NumberSystems',true,false);
        //     }); 

        // });

        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.state.start('NS_INT_5_G6level1');
        });
    },

    //* function to stop the video and audio if they are playing.
    stopVideo: function () {
        if (_this.demoVideo_1) {
            console.log("removing the video1");
            _this.demoVideo_1.destroy();
        }

        if (_this.demoVideo_2) {
            console.log("removing the video2");
            _this.demoVideo_2.destroy();
        }

        if (_this.videoWorld1) _this.videoWorld1.destroy();
        if (_this.videoWorld2) _this.videoWorld2.destroy();
    },

    stopAudio: function () {
        if (_this.demoAudio1) {
            console.log("removing the audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound.removeEventListener('ended', _this.q1S);
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        if (_this.q2Sound) {
            console.log("removing the q2");
            _this.q2Sound.pause();
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        //_this.time.events.removeAll();
        //_this.backbtn.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
    },

    //* event functions for demo audio and question audios. remove itself first and
    //* then do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    q1S: function () {
        _this.demoVideo_2.playbackRate = 0;
        _this.q2Sound.play();
        _this.time.events.add(2000, function () {
            _this.demoVideo_2.playbackRate = 1;
        });
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('int_3_1');
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-INT-3-G6_1.mp4");
        _this.video_playing = 1;

        //_this.screen_opening.play();  //* sound effect when screen is opening.
        _this.time.events.add(800, function () { _this.demoAudio1.play() });

        _this.demoVideo_2 = _this.add.video('int_3_2');
        _this.demoVideo_1.onComplete.add(function ()    //* on completion of video1, play 2nd video.
        {
            if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
            _this.q1Sound.play();

            _this.videoWorld2 = _this.demoVideo_2.addToWorld();

            //  _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
            _this.skip.bringToTop();                  //* otherwise, they go behind 2nd video.

            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-INT-3-G6_2.mp4");
            _this.video_playing = 2;
        });

        _this.q1Sound.addEventListener('ended', _this.q1S);

        _this.demoVideo_2.onComplete.add(function ()   //* on completion of video2, play 3rd video.
        {
            if (_this.demoVideo_2) _this.demoVideo_2.stop(false);
            if (_this.videoWorld1) _this.videoWorld1.destroy();
            if (_this.videoWorld2) _this.videoWorld2.destroy();

            _this.stopAudio();
            _this.state.start('NS_INT_5_G6level1');
        });
    },
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
