Game.NS_INT_4_G6demo = function () { };

Game.NS_INT_4_G6demo.prototype = {

    init: function (game) {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR INT 6 GAME FRUIT SELLER GAME.
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
            _this.languageSelected = "Odiya";
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

        //* concept of integer in real life is shown in the game..
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/NS-INT-4-G6 demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* when the seller takes money and gives fruits, then trans is +ve integer...
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/NS-INT-4-G6 demo 2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* when the seller takes money and says he will give tomorrow, then it is -ve integer...
        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/NS-INT-4-G6 demo 3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* when the seller does not take money, then it is zero
        _this.demoAudio4 = document.createElement('audio');
        _this.demoAudio4src = document.createElement('source');
        _this.demoAudio4src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/NS-INT-4-G6 demo 4.mp3");
        _this.demoAudio4.appendChild(_this.demoAudio4src);


        //* please give me ..
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/NS-INT-4-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* two fruits ..
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/two-frt.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* three fruits ..
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/three-frt.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* fruits ..(used for zero fruit case)
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/zr-frt.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        //demo video purpose
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/NS-INT-4-G6-a.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);

        _this.q6Sound = document.createElement('audio');
        _this.q6Soundsrc = document.createElement('source');
        _this.q6Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-6-G6/" +
            _this.languageSelected + "/NS-INT-4-G6-a.mp3");
        _this.q6Sound.appendChild(_this.q6Soundsrc);

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
            _this.state.start('NS_INT_6_G6level1');
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

        if (_this.demoVideo_3) {
            console.log("removing the video3");
            _this.demoVideo_3.destroy();
        }

        if (_this.videoWorld1) _this.videoWorld1.destroy();
        if (_this.videoWorld2) _this.videoWorld2.destroy();
        if (_this.videoWorld3) _this.videoWorld3.destroy();
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
            _this.q4Sound.removeEventListener('ended', _this.q4S);
            _this.q4Sound = null;
            _this.q4Soundsrc = null;
        }

        if (_this.q5Sound) {
            console.log("removing the q5");
            _this.q5Sound.pause();
            _this.q5Sound.removeEventListener('ended', _this.q5S);
            _this.q5Sound = null;
            _this.q5Soundsrc = null;
        }

        if (_this.q6Sound) {
            console.log("removing the q2");
            _this.q6Sound.pause();
            _this.q6Sound.removeEventListener('ended', _this.q6S);
            _this.q6Sound = null;
            _this.q6Soundsrc = null;
        }

        _this.time.events.removeAll();
        // _this.backbtn.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
    },

    //* event functions for demo audio and question audios. remove itself first and
    //* then do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.demoVideo_1.playbackRate = 1;
        _this.time.events.add(2000, function () {
            _this.demoVideo_1.playbackRate = 0;
            _this.q1Sound.play();
        });
    },

    dA2: function () {
        //_this.demoVideo_1.paused = false;
        _this.demoVideo_1.playbackRate = 1;
    },

    dA3: function () {
        //_this.demoVideo_2.paused = false;
        _this.demoVideo_2.playbackRate = 1;
    },

    dA4: function () {
        _this.demoVideo_3.playbackRate = 1;
    },

    q1S: function () {
        _this.q2Sound.play();
    },

    q2S: function () {
        _this.demoVideo_1.playbackRate = 1;
        _this.time.events.add(4000, function () {
            _this.demoVideo_1.playbackRate = 0;
            _this.demoAudio2.play();
        });
    },

    q3S: function () {
        _this.demoVideo_2.playbackRate = 1;
        _this.time.events.add(4000, function () {
            _this.demoVideo_2.playbackRate = 0;
            _this.demoAudio3.play();
        });
    },

    q4S: function () {
        _this.demoVideo_3.playbackRate = 1;
        _this.time.events.add(4000, function () {
            _this.demoVideo_3.playbackRate = 0;
            _this.demoAudio4.play();
        });
    },

    q5S: function () {
        _this.q3Sound.play();
    },

    q6S: function () {
        _this.q4Sound.play();
    },

    //* video_1 is concept explanation. 
    //* video_2 is int_1 game. 
    //* video_3 is int_2 game.

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('int_4_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + 'assets/demoVideos/NS-INT-4-G6_1.mp4');
        _this.video_playing = 1;
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();

        _this.time.events.add(1000, function () {
            //_this.demoVideo_1.paused = true;
            _this.demoVideo_1.playbackRate = 0;
            _this.demoAudio1.play();
        }); //* give bit delay for video to start playing

        _this.demoAudio1.addEventListener('ended', _this.dA1);   //*after audio2 is over, start 2nd video.

        _this.q1Sound.addEventListener('ended', _this.q1S);

        _this.q2Sound.addEventListener('ended', _this.q2S);

        _this.demoAudio2.addEventListener('ended', _this.dA2);

        _this.demoVideo_2 = _this.add.video('int_4_2');

        _this.demoVideo_1.onComplete.add(function ()  //* after video3 is done, start the game
        {
            if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + 'assets/demoVideos/NS-INT-4-G6_2.mp4');  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld2 = _this.demoVideo_2.addToWorld();
            // _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
            _this.skip.bringToTop();
            _this.time.events.add(3000, function () {
                //_this.demoVideo_2.paused = true;
                _this.demoVideo_2.playbackRate = 0;
                _this.q5Sound.play();
            });
        });

        _this.q5Sound.addEventListener('ended', _this.q5S);

        _this.q3Sound.addEventListener('ended', _this.q3S);

        _this.demoAudio3.addEventListener('ended', _this.dA3);

        _this.demoVideo_3 = _this.add.video('int_4_3');

        _this.demoVideo_2.onComplete.add(function () {
            if (_this.demoVideo_2) _this.demoVideo_2.stop(false);
            _this.demoVideo_3.play(false);
            _this.demoVideo_3.changeSource(window.baseUrl + 'assets/demoVideos/NS-INT-4-G6_3.mp4');  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld3 = _this.demoVideo_3.addToWorld();
            //  _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
            _this.skip.bringToTop();
            _this.time.events.add(3000, function () {
                //_this.demoVideo_3.paused = true;
                _this.demoVideo_3.playbackRate = 0;
                _this.q6Sound.play();
            });
        });

        _this.q6Sound.addEventListener('ended', _this.q6S);

        _this.q4Sound.addEventListener('ended', _this.q4S);

        _this.demoAudio4.addEventListener('ended', _this.dA4);

        _this.demoVideo_3.onComplete.add(function ()  //* after video3 is done, start the game
        {
            if (_this.demoVideo_3) _this.demoVideo_3.stop(false);

            if (_this.videoWorld1) _this.videoWorld1.destroy();
            if (_this.videoWorld2) _this.videoWorld2.destroy();
            if (_this.videoWorld3) _this.videoWorld3.destroy();

            _this.stopAudio();
            _this.state.start('NS_INT_6_G6level1');
        });
    },
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
