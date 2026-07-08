Game.NS_INT_7_G6demo = function () { };

Game.NS_INT_7_G6demo.prototype = {

    init: function (GameNumber) {
        _this = this;

        _this.GameNumToStart = GameNumber;   //* get the add/subtract game to start.

        //* THIS GAME PLAYS DEMO VIDEO FOR ALL ADDITION & SUBTRACTION GAMES (INT7,8,9,10,11,12).
        //* User can skip the video to go to the game. Backbutton takes back to the menu.

        //************************************** to be used in the Addition-Subtraction games.***********
        //* get the session parameter if the demo is already seen for any of addition games.
        //* if it is already seen, then set the parameter to 1 and go to the game directly.
        var addDemoseen = sessionStorage.getItem("param1");
        console.log(addDemoseen);
        if (addDemoseen == 1) _this.startGame();   //* skip to game.
        else                                                            //* set flg and continue demo
        {
            addDemoseen = 1;
            sessionStorage.setItem("param1", addDemoseen);
            console.log("continuing with the game....");
        }
        //*************************************************************************************************

        _this.languageSelected = window.languageSelected;

        if (_this.languageSelected == null
            || _this.languageSelected == " "
            || _this.languageSelected == "") {
            _this.languageSelected = "Odiya";
        }
        else console.log("Language selected: " + _this.languageSelected);


        //document.getElementById("LANGUAGE").innerHTML = "ENG";
        //document.getElementsByTagName('b')[0].innerHTML = "NUMBERS" ;       

        _this.clickSound = document.createElement('audio');
        _this.clickSoundsrc = document.createElement('source');
        _this.clickSoundsrc.setAttribute("src", window.baseUrl + "sounds/ClickSound.mp3");
        _this.clickSound.appendChild(_this.clickSoundsrc);

        _this.screen_opening = document.createElement('audio');
        _this.screen_openingsrc = document.createElement('source');
        _this.screen_openingsrc.setAttribute("src", window.baseUrl + "sounds/screen opening.wav");
        _this.screen_opening.appendChild(_this.screen_openingsrc);

        //* these games are about integer operations
        _this.demoAudio1 = document.createElement('audio');
        _this.demoAudio1src = document.createElement('source');
        _this.demoAudio1src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 1.mp3");
        _this.demoAudio1.appendChild(_this.demoAudio1src);

        //* two integers are displayed, operation to be performed is shown
        _this.demoAudio2 = document.createElement('audio');
        _this.demoAudio2src = document.createElement('source');
        _this.demoAudio2src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 2.mp3");
        _this.demoAudio2.appendChild(_this.demoAudio2src);

        //* drag teh counter according to the number and press tick button
        _this.demoAudio3 = document.createElement('audio');
        _this.demoAudio3src = document.createElement('source');
        _this.demoAudio3src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 3.mp3");
        _this.demoAudio3.appendChild(_this.demoAudio3src);

        //* addition..
        _this.demoAudio4 = document.createElement('audio');
        _this.demoAudio4src = document.createElement('source');
        _this.demoAudio4src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 4.mp3");
        _this.demoAudio4.appendChild(_this.demoAudio4src);

        //* when all the counters are with the same sign, count and enter answer with sign
        _this.demoAudio5 = document.createElement('audio');
        _this.demoAudio5src = document.createElement('source');
        _this.demoAudio5src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 5.mp3");
        _this.demoAudio5.appendChild(_this.demoAudio5src);

        //* when the counters are oppsite sign, drag and match to make zero..
        _this.demoAudio6 = document.createElement('audio');
        _this.demoAudio6src = document.createElement('source');
        _this.demoAudio6src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 6.mp3");
        _this.demoAudio6.appendChild(_this.demoAudio6src);

        //* count the remaining counter and enter answer with apporpriate sign
        _this.demoAudio7 = document.createElement('audio');
        _this.demoAudio7src = document.createElement('source');
        _this.demoAudio7src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 7.mp3");
        _this.demoAudio7.appendChild(_this.demoAudio7src);

        //* subtraction..
        _this.demoAudio8 = document.createElement('audio');
        _this.demoAudio8src = document.createElement('source');
        _this.demoAudio8src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 8.mp3");
        _this.demoAudio8.appendChild(_this.demoAudio8src);

        //* while subtraction, change sign of subtrahend counter and add them
        _this.demoAudio9 = document.createElement('audio');
        _this.demoAudio9src = document.createElement('source');
        _this.demoAudio9src.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-demo 9.mp3");
        _this.demoAudio9.appendChild(_this.demoAudio9src);

        //* solve the problem shown in the question box.
        _this.q1Sound = document.createElement('audio');
        _this.q1Soundsrc = document.createElement('source');
        _this.q1Soundsrc.setAttribute("src", window.baseUrl + "questionSounds/NS-INT-10-G6/" +
            _this.languageSelected + "/Int-Op-q.mp3");
        _this.q1Sound.appendChild(_this.q1Soundsrc);
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
            _this.startGame();   //* start appropriate game
        });
    },

    startGame: function () {
        console.log("switching to the game: " + _this.GameNumToStart);
        switch (_this.GameNumToStart) {
            case 7: _this.state.start('NS_INT_7_G6level1'); break;
            case 8: _this.state.start('NS_INT_8_G6level1'); break;
            case 9: _this.state.start('NS_INT_9_G6level1'); break;
            case 10: _this.state.start('NS_INT_10_G6level1'); break;
            case 11: _this.state.start('NS_INT_11_G6level1'); break;
            case 12: _this.state.start('NS_INT_12_G6level1'); break;
        }
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

        if (_this.demoVideo_4) {
            console.log("removing the video4");
            _this.demoVideo_4.destroy();
        }

        if (_this.videoWorld1) _this.videoWorld1.destroy();
        if (_this.videoWorld2) _this.videoWorld2.destroy();
        if (_this.videoWorld3) _this.videoWorld3.destroy();
        if (_this.videoWorld4) _this.videoWorld4.destroy();
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

        if (_this.demoAudio7) {
            console.log("removing the audio7");
            _this.demoAudio7.pause();
            _this.demoAudio7 = null;
            _this.demoAudio7src = null;
        }

        if (_this.demoAudio8) {
            console.log("removing the audio8");
            _this.demoAudio8.pause();
            _this.demoAudio8.removeEventListener('ended', _this.dA8);
            _this.demoAudio8 = null;
            _this.demoAudio8src = null;
        }

        if (_this.demoAudio9) {
            console.log("removing the audio9");
            _this.demoAudio9.pause();
            _this.demoAudio9 = null;
            _this.demoAudio9src = null;
        }

        if (_this.q1Sound) {
            console.log("removing the q1");
            _this.q1Sound.pause();
            _this.q1Sound = null;
            _this.q1Soundsrc = null;
        }

        _this.time.events.removeAll();
        // _this.backbtn.events.onInputDown.removeAll();
        _this.skip.events.onInputDown.removeAll();
    },

    //* event functions for demo audio and question audios. remove itself first and
    //* then do the action as required for synching with video. See showVideo
    //* function & actual videos/audios to understand the flow of audio and video.
    dA1: function () {
        _this.demoVideo_2.playbackRate = 1;
        _this.time.events.add(2000, function () {
            _this.demoAudio2.play();
        });
    },

    dA2: function () {
        _this.demoAudio3.play();
    },

    dA3: function () {
        if (_this.demoVideo_1) _this.demoVideo_1.stop(false);

        _this.demoVideo_2.play(false);
        _this.demoVideo_2.changeSource(window.baseUrl + 'assets/demoVideos/NS-INT-7-G6_2.mp4');  //* phaser needs this.to run in mobile
        _this.video_playing = 2;
        _this.videoWorld2 = _this.demoVideo_2.addToWorld();
        // _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        _this.skip.bringToTop();
        _this.demoAudio4.play();
        _this.time.events.add(1000, function () {
            _this.demoAudio5.play();
        });
    },

    dA5: function () {
        if (_this.demoVideo_2) _this.demoVideo_2.stop(false);

        _this.demoVideo_3.play(false);
        _this.demoVideo_3.changeSource(window.baseUrl + 'assets/demoVideos/NS-INT-7-G6_3.mp4');  //* phaser needs this.to run in mobile
        _this.video_playing = 2;
        _this.videoWorld3 = _this.demoVideo_3.addToWorld();
        // _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
        _this.skip.bringToTop();
        _this.demoAudio6.play();
    },

    dA6: function () {
        _this.time.events.add(100, function () {
            _this.demoAudio7.play();
        });
    },

    dA8: function () {
        _this.time.events.add(1000, function () {
            _this.demoAudio9.play();
        });
    },

    //* video_1 is concept explanation. 
    //* video_2 is int_1 game. 
    //* video_3 is int_2 game.

    showDemoVideo: function () {
        console.log("SHOW VIDEO language selected: " + _this.languageSelected);
        _this.demoVideo_1 = _this.add.video('int_7_1');
        _this.demoVideo_1.play(false);
        _this.demoVideo_1.changeSource(window.baseUrl + 'assets/demoVideos/NS-INT-7-G6_1.mp4');
        _this.video_playing = 1;
        _this.videoWorld1 = _this.demoVideo_1.addToWorld();

        _this.time.events.add(2000, function () {
            //_this.demoVideo_1.paused = true;
            _this.demoVideo_1.playbackRate = 0;
            _this.demoAudio1.play();
        });

        _this.demoAudio1.addEventListener('ended', _this.dA1);

        _this.demoAudio2.addEventListener('ended', _this.dA2);

        _this.demoVideo_2 = _this.add.video('int_7_2');

        _this.demoAudio3.addEventListener('ended', _this.dA3);

        _this.demoVideo_3 = _this.add.video('int_7_3');

        _this.demoAudio5.addEventListener('ended', _this.dA5);

        _this.demoAudio6.addEventListener('ended', _this.dA6);

        _this.demoVideo_4 = _this.add.video('int_7_4');

        _this.demoVideo_3.onComplete.add(function () {
            if (_this.demoVideo_3) _this.demoVideo_3.stop(false);

            _this.demoVideo_4.play(false);
            _this.demoVideo_4.changeSource(window.baseUrl + 'assets/demoVideos/NS-INT-7-G6_4.mp4');  //* phaser needs this.to run in mobile
            _this.video_playing = 2;
            _this.videoWorld4 = _this.demoVideo_4.addToWorld();
            // _this.backbtn.bringToTop();               //* bring backbtn and skip to top.
            _this.skip.bringToTop();
            _this.demoAudio8.play();
        });

        _this.demoAudio8.addEventListener('ended', _this.dA8);

        _this.demoVideo_4.onComplete.add(function () {
            if (_this.demoVideo_4) _this.demoVideo_4.stop(false);

            if (_this.videoWorld1) _this.videoWorld1.destroy();
            if (_this.videoWorld2) _this.videoWorld2.destroy();
            if (_this.videoWorld3) _this.videoWorld3.destroy();
            if (_this.videoWorld4) _this.videoWorld4.destroy();

            _this.stopAudio();
            _this.startGame();
        });
    },
}

//* video related commands     
//        this.video.changeSource("assets/demoVideos/7_1_1.mp4");
//        this.video.addToWorld();
//        this.video2.stop(false);
//        this.video2.onComplete.add(function() {}
//        this.video3.playbackRate = 1;  
