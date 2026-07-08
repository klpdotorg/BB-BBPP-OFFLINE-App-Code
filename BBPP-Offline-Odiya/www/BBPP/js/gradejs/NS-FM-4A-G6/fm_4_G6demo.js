Game.NS_FM_4_G6demo = function () { };

Game.NS_FM_4_G6demo.prototype = {

    init: function (game) {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR FM4A & FM4B GAMES.
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

        //* this is a game of multiples
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4A-G6/" +
            _this.languageSelected + "/NS-FM-4B-G6 Demo.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);


        //* let us find if the bigger number a multiple of smaller one
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4A-G6/" +
            _this.languageSelected + "/NS-FM-4-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* is the smaller number factor of bigger number?
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4A-G6/" +
            _this.languageSelected + "/NS-FM-4-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* let us find if the larger number is a multiple of smaller number (4B game)
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4B-G6/" +
            _this.languageSelected + "/NS-FM-4B-G6-a.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* number in the question is a multiple of which of the number options..(4B game)
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-4B-G6/" +
            _this.languageSelected + "/NS-FM-4B-G6-b.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

    },

    create: function (game) {
        // _this.time.events.removeAll();
        _this.video_playing = 0;  //* variables to keep track of which video is played. video1/2/3
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.stopAudio();
            _this.state.start('NS_FM_4A_G6level1');
        });
    },


    stopAudio: function () {
        if (_this.demoAudio1) {
            console.log("removing the audio1");
            _this.demoAudio1.pause();
            _this.demoAudio1.removeEventListener('ended', _this.dA1);
            _this.demoAudio1 = null;
            _this.demoAudio1src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.pause();
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

        _this.skip.events.onInputDown.removeAll();
    },

    //* event functions for demo audio and question audios. remove itself first and
    //* then do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.demoAudio1.removeEventListener('ended', _this.dA1);
        // if (_this.demoVideo_1) _this.demoVideo_1.stop(false);

        //   _this.videoWorld2 = _this.demoVideo_2.addToWorld();

        // _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        _this.skip.bringToTop();                  //* otherwise, they go behind 2nd video.

        _this.demoVideo_2.play(false);
        _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-4-G6_2.mp4");
        _this.video_playing = 2;
        _this.q1Sound.play();
        _this.time.events.add(9000, function () {
            //_this.demoVideo_2.paused = true;
            _this.demoVideo_2.playbackRate = 0;
            _this.q2Sound.play();
        });
    },

    q2S: function () {
        //_this.demoVideo_2.play(false);
        _this.q2Sound.removeEventListener('ended', _this.q2S);
        _this.demoVideo_2.playbackRate = 1;
    },

    q4S: function () {
        _this.q4Sound.removeEventListener('ended', _this.q4S);
        _this.demoVideo_3.playbackRate = 1;
    },

    //* video_1 is concept explanation. 
    //* video_2 is int_1 game. 
    //* video_3 is int_2 game.

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('fm_4_1');

        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-4-G6_1.mp4");
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();
        _this.video_playing = 1;
        // _this.demoVideo_1.playbackRate = 0.35;  

        _this.time.events.add(800, function () { _this.demoAudio1.play() });
        
        _this.demoVideo_2 = _this.add.video('fm_4_2');
     
        _this.demoVideo_1.onComplete.add(function () {
            _this.demoVideo_2.play(false);
            _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-4-G6_2.mp4");
            _this.videoWorld2 = _this.demoVideo_2.addToWorld();
            _this.video_playing = 2;

            _this.skip.bringToTop();
            _this.q1Sound.play();

            _this.time.events.add(9000, function () {
                _this.demoVideo_2.playbackRate = 0;
                _this.q2Sound.play();
            });

            _this.q2Sound.addEventListener('ended', _this.q2S);

            _this.demoVideo_3 = _this.add.video('fm_4_3');
            _this.demoVideo_2.onComplete.add(function () {
                _this.demoVideo_3.play(false);
                _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-4-G6_3.mp4");
                _this.videoWorld3 = _this.demoVideo_3.addToWorld();
                _this.video_playing = 3;

                _this.skip.bringToTop();

                _this.q3Sound.play();

                _this.time.events.add(15000, function () {
                    _this.demoVideo_3.playbackRate = 0;
                    _this.q4Sound.play();
                });

                _this.q4Sound.addEventListener('ended', _this.q4S);

                _this.demoVideo_3.onComplete.add(function () {

                    console.log("v3 over trigger the game");
                    if (_this.demoVideo_3) _this.demoVideo_3.stop(false);

                    if (_this.videoWorld1) {
                        _this.videoWorld1.destroy();
                    }

                    if (_this.videoWorld2) {
                        _this.videoWorld2.destroy();
                    }

                    if (_this.videoWorld3) {
                        _this.videoWorld3.destroy();
                    }

                    _this.stopAudio();
                    _this.state.start('NS_FM_4A_G6level1');
                });
            });

        });


        // _this.demoVideo_2.onComplete.add(function()    //* on completion of video2, play 3rd video.
        // {
        //     if (_this.demoVideo_2) _this.demoVideo_2.stop(false);

        //    _this.demoVideo_3.play(false);
        //     _this.demoVideo_3.changeSource(window.baseUrl+"assets/demoVideos/NS-FM-4-G6_3.mp4");
        //    _this.videoWorld3 = _this.demoVideo_3.addToWorld();

        //   //  _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        //     _this.skip.bringToTop();

        //     _this.video_playing = 3;                
        //     _this.q3Sound.play();

        //     _this.time.events.add(15000,function()
        //     {
        //         _this.demoVideo_3.playbackRate = 0;
        //         _this.q4Sound.play();
        //     });
        // });

        // _this.q4Sound.addEventListener('ended', _this.q4S);  

        // _this.demoVideo_3.onComplete.add(function()  //* after video3 is done, start the game
        // {
        //     console.log("v3 over trigger the game");
        //     if (_this.demoVideo_3) _this.demoVideo_3.stop(false);

        //     if(_this.videoWorld1)
        //     {
        //         _this.videoWorld1.destroy();
        //     }

        //     if(_this.videoWorld2)
        //     {
        //         _this.videoWorld2.destroy();
        //     }

        //     if(_this.videoWorld3)
        //     {
        //         _this.videoWorld3.destroy();
        //     }

        //     _this.stopAudio(); 

        //     _this.state.start('NS_FM_4A_G6level1');
        // });
    },
}

