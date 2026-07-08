Game.NS_PRM_1_G6demo = function () { };

Game.NS_PRM_1_G6demo.prototype = {

    init: function (game) {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR PRIME GAME.
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
            _this.languageSelected = "English";
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

        //* If a number’s factors are only 1 and the number itself, then it is a prime.
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6 demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* In this game, divisibility is checked using the number options
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6 demo 2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* First, we check if the number is odd or even using the divisibility of 2.
        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6 demo 3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* An even number is always a composite.
        _this.demoAudio4 = document.createElement('audio');
        _this.demoAudio4src = document.createElement('source');
        _this.demoAudio4src.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6 demo 4.mp3");
        _this.demoAudio4.appendChild(_this.demoAudio4src);

        //* If the number is odd, we check the divisibility using the next odd numbers.....
        _this.demoAudio5 = document.createElement('audio');
        _this.demoAudio5src = document.createElement('source');
        _this.demoAudio5src.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6 demo 5.mp3");
        _this.demoAudio5.appendChild(_this.demoAudio5src);

        //* When the number is divisible by an option, then the number is a composite.....
        _this.demoAudio6 = document.createElement('audio');
        _this.demoAudio6src = document.createElement('source');
        _this.demoAudio6src.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6 demo 6.mp3");
        _this.demoAudio6.appendChild(_this.demoAudio6src);

        //* Let us find if the number is prime or composite. 
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* Select the option to check if the given number is divisible by it.
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* Is this a composite number?
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-PRM-1-G6/" +
            _this.languageSelected + "/NS-PRM-1-G6-d.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);
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
        //        // _this.state.start('Backbutton');
        //         _this.state.start('grade6NumberSystems');
        //     }); 

        // });

        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            //_this.stopVideo();
            _this.stopAudio();
            _this.state.start('NS_PRM_1_G6level1');
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

        if (_this.q3Sound) {
            console.log("removing the q3");
            _this.q3Sound.pause();
            _this.q3Sound.removeEventListener('ended', _this.q3S);
            _this.q3Sound = null;
            _this.q3Soundsrc = null;
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
        //_this.demoVideo_1.paused = false;
        _this.demoVideo_1.playbackRate = 1;

        _this.time.events.add(3000, function () {
            //_this.demoVideo_1.paused = true;
            _this.demoVideo_1.playbackRate = 0;
        });
    },

    dA2: function () {
        if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
        _this.q1Sound.play();
        _this.videoWorld2 = _this.demoVideo_2.addToWorld();

        _this.demoVideo_2.play(false);
        _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-PRM-1-G6_2.mp4");
        _this.video_playing = 2;

        //   _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        _this.skip.bringToTop();                  //* otherwise, they go behind 2nd video.
    },

    dA4: function () {
        //_this.demoVideo_2.paused = false;
        _this.demoVideo_2.playbackRate = 1;
        _this.time.events.add(4000, function () {
            _this.demoAudio5.play();
        });
    },

    dA5: function () {
        _this.q3Sound.play();
    },

    dA6: function () {
        _this.stopAudio();
        if (_this.demoVideo_2) _this.demoVideo_2.stop(false);
        if (_this.videoWorld1) _this.videoWorld1.destroy();
        if (_this.videoWorld2) _this.videoWorld2.destroy();

        _this.state.start('NS_PRM_1_G6level1');
    },

    q1S: function () {
        _this.q2Sound.play();
    },

    q2S: function () {
        _this.time.events.add(1000, function () {
            //_this.demoVideo_2.paused = true;
            _this.demoVideo_2.playbackRate = 0;
            _this.demoAudio3.play();
        });
    },

    q3S: function () {
        _this.demoAudio6.play();
    },

    //* video_1 is concept explanation. 
    //* video_2 is int_1 game. 
    //* video_3 is int_2 game.

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('prm_1_1');
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-PRM-1-G6_1.mp4");
        _this.video_playing = 1;

        _this.time.events.add(800, function () { _this.demoAudio1.play(); }); //* slight delay for video to start

        _this.time.events.add(3000, function () {
            //_this.demoVideo_1.paused = true;
            _this.demoVideo_1.playbackRate = 0;
        });

        _this.demoAudio1.addEventListener('ended', _this.dA1);

        _this.demoVideo_2 = _this.add.video('prm_1_2');

        _this.demoAudio2.addEventListener('ended', _this.dA2);

        _this.q1Sound.addEventListener('ended', _this.q1S);

        _this.q2Sound.addEventListener('ended', _this.q2S);

        _this.demoAudio3.addEventListener('ended', function () {
            _this.demoAudio4.play();
        });

        _this.demoAudio4.addEventListener('ended', _this.dA4);

        _this.demoAudio5.addEventListener('ended', _this.dA5);

        _this.q3Sound.addEventListener('ended', _this.q3S);

        _this.demoAudio6.addEventListener('ended', _this.dA6);
    },
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
