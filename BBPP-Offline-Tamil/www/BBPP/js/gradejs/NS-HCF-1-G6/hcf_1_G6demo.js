Game.NS_HCF_1_G6demo = function () { };

Game.NS_HCF_1_G6demo.prototype = {

    init: function (game) {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR HCF
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
            _this.languageSelected = "Tamil";
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

        //* Highest common factor is the largest number that perfectly divides....
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6 demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* In this game, divisibility is checked using the number options arranged....
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6 demo 2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* When an option is a common factor of both the numbers, it is the HCF.
        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6 demo 3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* If no option perfectly divides both the numbers, then HCF is 1.
        _this.demoAudio4 = document.createElement('audio');
        _this.demoAudio4src = document.createElement('source');
        _this.demoAudio4src.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6 demo 4.mp3");
        _this.demoAudio4.appendChild(_this.demoAudio4src);

        //* At first, check if the smaller number itself is the HCF.
        _this.demoAudio5 = document.createElement('audio');
        _this.demoAudio5src = document.createElement('source');
        _this.demoAudio5src.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6 demo 5.mp3");
        _this.demoAudio5.appendChild(_this.demoAudio5src);

        //* If not, check divisibility using half of the smaller number....
        _this.demoAudio6 = document.createElement('audio');
        _this.demoAudio6src = document.createElement('source');
        _this.demoAudio6src.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6 demo 6.mp3");
        _this.demoAudio6.appendChild(_this.demoAudio6src);


        //* Let us find the Highest Common Factor of the given numbers
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Enter the HCF
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-HCF-1-G6/" +
            _this.languageSelected + "/NS-HCF-1-G6-b.mp3");
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
        //     //_this.stopVideo();
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
            //_this.stopVideo();
            _this.stopAudio();
            _this.state.start('NS_HCF_1_G6level1');
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

        if (_this.demoAudio3) {
            console.log("removing the audio3");
            _this.demoAudio3.pause();
            _this.demoAudio3.removeEventListener('ended', _this.dA3);
            _this.demoAudio3 = null;
            _this.demoAudio3src = null;
        }

        if (_this.demoAudio4) {
            console.log("removing the audio4");
            _this.demoAudio4.pause();
            _this.demoAudio4.removeEventListener('ended', _this.dA4);
            _this.demoAudio4 = null;
            _this.demoAudio4src = null;
        }

        if (_this.demoAudio5) {
            console.log("removing the audio5");
            _this.demoAudio5.pause();
            _this.demoAudio5.removeEventListener('ended', _this.dA5);
            _this.demoAudio5 = null;
            _this.demoAudio5src = null;
        }

        if (_this.demoAudio6) {
            console.log("removing the audio6");
            _this.demoAudio6.pause();
            _this.demoAudio6.removeEventListener('ended', _this.dA6);
            _this.demoAudio6 = null;
            _this.demoAudio6src = null;
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

        // _this.time.events.removeAll();
        // _this.backbtn.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
    },

    //* event functions for demo audio and question audios. remove itself first and
    //* then do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.demoAudio2.play();
    },

    dA2: function () {
        //_this.demoVideo_1.paused = false;
        _this.demoVideo_1.playbackRate = 1;
        _this.time.events.add(3000, function ()    //* play audio after a small delay to synch with video.
        {
            _this.demoAudio3.play();
        });
    },

    dA3: function () {
        _this.demoAudio4.play();
    },

    dA4: function () {
        if (_this.demoVideo_1) _this.demoVideo_1.stop(false);

        _this.q1Sound.play();

        _this.demoVideo_2.play(false);
        _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-HCF-1-G6_2.mp4");
        _this.videoWorld2 = _this.demoVideo_2.addToWorld();

        //  _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        _this.skip.bringToTop();
        _this.video_playing = 2;
        _this.time.events.add(800, function () {
            //_this.demoVideo_2.paused =true;
            _this.demoVideo_2.playbackRate = 0;
        });
    },

    dA5: function () {
        _this.demoVideo_2.playbackRate = 1;
        _this.time.events.add(8000, function () {
            //_this.demoVideo_2.paused =true;
            _this.demoVideo_2.playbackRate = 0;
            _this.demoAudio6.play(); //* play audio after a small delay to synch with video.
        });
    },

    dA6: function () {
        //_this.demoVideo_2.paused =false;
        _this.demoVideo_2.playbackRate = 1;
        _this.time.events.add(11000, function () {
            _this.q2Sound.play();
            //_this.demoVideo_2.paused =true;
            _this.demoVideo_2.playbackRate = 0;
        });
    },

    q1S: function () {
        _this.demoAudio5.play();
    },

    q2S: function () {
        //_this.demoVideo_2.paused =false; 
        _this.demoVideo_2.playbackRate = 1;
    },

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('hcf_1_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-HCF-1-G6_1.mp4");
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();

        //        _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        //        _this.skip.bringToTop();

        _this.video_playing = 1;
        // _this.demoVideo_1.playbackRate = 0.35; 
        //_this.screen_opening.play();  //* sound effect when screen is opening.

        _this.time.events.add(800, function () { _this.demoAudio1.play(); }); //* play audio after a small delay to synch with video.

        _this.time.events.add(1000, function () {
            //_this.demoVideo_1.paused = true; 
            _this.demoVideo_1.playbackRate = 0;
        });

        _this.demoAudio1.addEventListener('ended', _this.dA1);

        _this.demoAudio2.addEventListener('ended', _this.dA2);

        _this.demoAudio3.addEventListener('ended', _this.dA3);

        _this.demoVideo_2 = _this.add.video('hcf_1_2');

        _this.demoAudio4.addEventListener('ended', _this.dA4);

        _this.q1Sound.addEventListener('ended', _this.q1S);

        _this.demoAudio5.addEventListener('ended', _this.dA5);

        _this.demoAudio6.addEventListener('ended', _this.dA6);

        _this.q2Sound.addEventListener('ended', _this.q2S);

        _this.demoVideo_2.onComplete.add(function () {
            if (_this.demoVideo_2) _this.demoVideo_2.stop(false);

            if (_this.videoWorld1) _this.videoWorld1.destroy();
            if (_this.videoWorld2) _this.videoWorld2.destroy();

            _this.stopAudio();
            _this.state.start('NS_HCF_1_G6level1');
        });
    },
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
