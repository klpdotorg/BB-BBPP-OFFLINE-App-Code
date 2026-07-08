Game.NS_FM_1_G6demo = function () { };

Game.NS_FM_1_G6demo.prototype = {

    init: function (game) {
        _this = this;

        //* THIS GAME PLAYS DEMO VIDEO FOR FM1 & FM2 GAMES.
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

        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1-G6 demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1-G6 demo 2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1-G6 demo 3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* enter the number of lines you need.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-a.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);

        //* is the smaller number factor of bigger number
        _this.q2Sound = document.createElement('audio');
        _this.q2Soundsrc = document.createElement('source');
        _this.q2Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-b.mp3");
        _this.q2Sound.appendChild(_this.q2Soundsrc);

        //* wht is the other factor here
        _this.q3Sound = document.createElement('audio');
        _this.q3Soundsrc = document.createElement('source');
        _this.q3Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-1-G6/" +
            _this.languageSelected + "/NS-FM-1A-G6-c.mp3");
        _this.q3Sound.appendChild(_this.q3Soundsrc);

        //* find if the options are factors of the given number.
        _this.q4Sound = document.createElement('audio');
        _this.q4Soundsrc = document.createElement('source');
        _this.q4Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-2-G6/" +
            _this.languageSelected + "/NS-FM-1B-G6-a.mp3");
        _this.q4Sound.appendChild(_this.q4Soundsrc);

        //* is the selected option a factor of the bigger number.
        _this.q5Sound = document.createElement('audio');
        _this.q5Soundsrc = document.createElement('source');
        _this.q5Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-FM-2-G6/" +
            _this.languageSelected + "/NS-FM-1B-G6-b.mp3");
        _this.q5Sound.appendChild(_this.q5Soundsrc);
    },

    create: function (game) {
        _this.time.events.removeAll();
        _this.video_playing = 0;  //* variables to keep track of which video is played. video1/2/3
        _this.showDemoVideo();  //* call the function to show the video

        _this.skip = _this.add.image(870, 490, 'skipArrow');       //* skip button shown at the bottom
        _this.skip.inputEnabled = true;
        _this.skip.input.useHandCursor = true;
        _this.skip.events.onInputDown.add(function () {
            _this.clickSound.play();
            _this.stopAudio();
            _this.state.start('NS_FM_1_G6level1');
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
        _this.skip.events.onInputDown.removeAll();
    },

    //* event functions for demo audio and question audios. remove itself first and
    //* then do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        console.log("audi1 ended - executing un-pause of video1");
        _this.demoVideo_1.playbackRate = 1;              //* let video play now (for 1 second)
        _this.demoAudio2.play();                         //* start audio 2.
        _this.time.events.add(2500, function ()           //* pause video after 2.5sec while showing rect box
        {
            console.log("2.5sec - executing pause of video1");
            _this.demoVideo_1.playbackRate = 0;
        });
    },

    dA2: function () {
        console.log("audio2 ended - pause video1");
        if (_this.demoVideo_1) _this.demoVideo_1.stop(false);
        _this.demoVideo_2.play(false);
        _this.demoVideo_2.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-1-G6_2.mp4");  //* phaser needs this.to run in mobile
        _this.video_playing = 2;
        _this.demoVideo_2.addToWorld();
        //_this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        _this.skip.bringToTop();

        //* ask 1st question here.bit delay for video to pl.
        _this.time.events.add(800, function () { _this.q1Sound.play() });

        _this.time.events.add(1500, function ()           //* pause video after 1.5sec for Question to complete
        {
            console.log("1.5sec - executing pause of video2");
            _this.demoVideo_2.playbackRate = 0;
        });
    },

    dA3: function () {
        _this.q3Sound.play();
    },

    q1S: function () {
        console.log("Q1 over - executing un-pause of video2");
        _this.demoVideo_2.playbackRate = 1;

        _this.time.events.add(9000, function ()           //* after 8 seconds, ask 2nd question. pause video2
        {
            _this.demoVideo_2.playbackRate = 0;
            console.log("1.5sec - executing pause of video2");
            _this.q2Sound.play();
        });
    },

    q2S: function () {
        _this.demoVideo_2.playbackRate = 1;         //* continue the video
        _this.demoAudio3.play();                  //* play 3rd audio which shows full rectangle
    },

    q4S: function () {
        _this.demoVideo_3.playbackRate = 1;     //* unpause the video3, let it play for 5 seconds
        _this.time.events.add(5000, function () {
            _this.demoVideo_3.playbackRate = 0;
            _this.q5Sound.play();           //* ask if the given option is a factor.
        });
    },

    q5S: function () {
        _this.demoVideo_3.playbackRate = 1;   //* let the video continue till the end
    },

    //* video_1 is concept explanation uses demoaudio1, demoaudio2.
    //* video_2 is fm_1 game. uses question1, question2, demoaudio3, question3 (Questions from FM1 game)
    //* video_3 is fm_2 game. uses question4 and question 5 (Questions from FM2 game)
    //* video1 - 5s;  demoaudio1 - 4s;  demoaudio2 - 10s.
    //* video2 - 21s; q1 - 2s, q2 - 3s, q3 - 1s, demoaudio3 - 7s
    //* video3 - 23s; q4 - 3s;  q5 - 3s

    showDemoVideo: function () {
        _this.demoVideo_1 = _this.add.video('fm_1_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-1-G6_1.mp4");
        _this.video_playing = 1;
        _this.demoVideo_1.addToWorld();

        _this.time.events.add(800, function () { _this.demoAudio1.play() }); //* give bit delay for video to start playing

        _this.time.events.add(3000, function ()       //* pause video after 3 seconds to show rectangle box 
        {
            console.log("3sec - executing pause of video1");
            _this.demoVideo_1.playbackRate = 0;
        });

        //_this.demoAudio1.addEventListener('ended', function()     //* after audio1 completion
        _this.demoAudio1.addEventListener('ended', _this.dA1);     //* after audio1 completion             

        _this.demoVideo_2 = _this.add.video('fm_1_2');

        _this.demoAudio2.addEventListener('ended', _this.dA2); //*after audio2 is over, start 2nd video.

        _this.q1Sound.addEventListener('ended', _this.q1S);

        _this.q2Sound.addEventListener('ended', _this.q2S);

        _this.demoAudio3.addEventListener('ended', _this.dA3);

        _this.demoVideo_3 = _this.add.video('fm_1_3');   //* add the video 3

        _this.demoVideo_2.onComplete.add(function () {
            console.log("completing video 2, playing v3");
            if (_this.demoVideo_2) _this.demoVideo_2.stop(false);

            _this.demoVideo_3.play(false);        //* start playing video3 of fm2 game
            _this.demoVideo_3.changeSource(window.baseUrl + "assets/demoVideos/NS-FM-1-G6_3.mp4");
            _this.video_playing = 3;
            _this.demoVideo_3.addToWorld();

            //* ask let us find if given options are factors.
            _this.time.events.add(800, function () { _this.q4Sound.play() });

            _this.time.events.add(2000, function ()   //* pause the video after 2 seconds
            {
                _this.demoVideo_3.playbackRate = 0;
            });

            //_this.backbtn.bringToTop();
            _this.skip.bringToTop();
        });

        _this.q4Sound.addEventListener('ended', _this.q4S);

        _this.q5Sound.addEventListener('ended', _this.q5S);

        _this.demoVideo_3.onComplete.add(function ()  //* after video3 is done, start the game
        {
            if (_this.demoVideo_3) _this.demoVideo_3.stop(false);

            if (_this.videoWorld1) _this.videoWorld1.destroy();
            if (_this.videoWorld2) _this.videoWorld2.destroy();
            if (_this.videoWorld3) _this.videoWorld3.destroy();

            _this.stopAudio();
            _this.state.start('NS_FM_1_G6level1');
        });
    },
}

