Game.NS_OE_1_G6demo = function () { };

Game.NS_OE_1_G6demo.prototype = {

    init: function (game) {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR OE1A & OE1B GAMES.
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
            _this.languageSelected = "Marathi";
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

        //* an even num is exactly divisible by 2 and odd num is not...
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1A-G6/" +
            _this.languageSelected + "/NS-OE-1-G6 demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* in this game we check if num is even/odd by arranging objects in pairs
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1A-G6/" +
            _this.languageSelected + "/NS-OE-1-G6 demo 2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* drag the items from the kit to arrange them inpairs.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1A-G6/" +
            _this.languageSelected + "/OE-drag.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* is the given number odd.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1A-G6/" +
            _this.languageSelected + "/NS-OE-1A-G6-a.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* select the odd numbers
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1B-G6/" +
            _this.languageSelected + "/NS-OE-1B-G6-b.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //drag the object
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-OE-1A-G6/" +
            _this.languageSelected + "/OE-drag.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);
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
        //         //document.getElementById("first").style.display = "block";
        //         _this.state.start('grade6NumberSystems',true,false);
        //     }); 

        // });

        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            // _this.stopVideo();
            _this.stopAudio();
            _this.state.start('NS_OE_1A_G6level1');

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
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.demoAudio2) {
            console.log("removing the audio2");
            _this.demoAudio2.pause();
            _this.demoAudio2.removeEventListener('ended', _this.dA2);
            _this.demoAudio2 = null;
            _this.demoAudio2src = null;
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
            _this.q2Sound.removeEventListener('ended', _this.q2S);
            _this.q2Sound = null;
            _this.q2Soundsrc = null;
        }

        if (_this.q3Sound) {
            console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound.removeEventListener('ended', _this.q3S);
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
        }

        if (_this.q4Sound) {
            console.log("removing the q4");
            _this.q4Sound.pause();
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        // _this.time.events.removeAll();
        //_this.backbtn.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
    },

    //* event functions for demo audio and question audios. remove itself first and
    //* then do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.demoAudio2.removeEventListener('ended', _this.dA1);
        _this.demoAudio2.play();                         //* start audio 2.
    },

    dA2: function () {
        _this.demoAudio2.removeEventListener('ended', _this.dA2);
        _this.demoVideo_1.playbackRate = 1;
        _this.time.events.add(1000, function () {
            _this.q1Sound.play();
        });
    },

    q1S: function ()     //* after audio1 completion
    {
        _this.q1Sound.removeEventListener('ended', _this.q1S);
        _this.demoVideo_1.playbackRate = 0;
        _this.q2Sound.play();
    },

    q2S: function () {
        _this.q2Sound.removeEventListener('ended', _this.q2S);
        _this.demoVideo_1.playbackRate = 1;
    },

    q3S: function () {
        _this.q3Sound.removeEventListener('ended', _this.q3S);
        _this.demoVideo_2.playbackRate = 1;
    },

    //* video_1 is concept explanation. 
    //* video_2 is oe1a game
    //* video_3 is oe1b game

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('oe_1_1');

        //document.getElementById('phaser_canvas').style.pointerEvents = "none";

        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-OE-1-G6_1.mp4");
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();
        _this.video_playing = 1;


        _this.time.events.add(1000, function () {
            //_this.demoVideo_1.paused = true;
            _this.demoVideo_1.playbackRate = 0;
            _this.demoAudio1.play();
        });

        _this.demoAudio1.addEventListener('ended', _this.dA1);     //* after audio1 completion

        _this.demoAudio2.addEventListener('ended', _this.dA2);     //* after audio1 completion

        _this.q1Sound.addEventListener('ended', _this.q1S);     //* after audio1 completion

        _this.q2Sound.addEventListener('ended', _this.q2S);

        _this.demoVideo_2 = _this.add.video('oe_1_2');

        _this.demoVideo_1.onComplete.add(function ()  //*after audio2 is over, start 2nd video.
        {
            if (_this.demoVideo_1) _this.demoVideo_1.stop(false);

            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-OE-1-G6_2.mp4");  //* phaser needs this.to run in mobile
            _this.videoWorld2 = _this.demoVideo_2.addToWorld();
            _this.video_playing = 2;

            //  _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
            _this.skip.bringToTop();
            _this.q4Sound.play();

            _this.time.events.add(21000, function () {
                _this.demoVideo_2.playbackRate = 0;
                _this.q3Sound.play();
            });
        });

        _this.q3Sound.addEventListener('ended', _this.q3S);

        _this.demoVideo_2.onComplete.add(function ()  //* after video3 is done, start the game
        {
            if (_this.demoVideo_2) _this.demoVideo_2.stop(false);

            if (_this.videoWorld1) _this.videoWorld1.destroy();
            if (_this.videoWorld2) _this.videoWorld2.destroy();

            _this.stopAudio();
            _this.state.start('NS_OE_1A_G6level1');
        });
    },
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
