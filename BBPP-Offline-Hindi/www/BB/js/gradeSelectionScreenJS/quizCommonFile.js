var quizCommonFile = 
{
	
	
	 
        addQuestions:function(game) {
			console.log('1 '+game);
			console.log("Im playing the quiz.............");
			this.stage = game;
			this.no11 = 0;
			this.qArray = new Array();		


			window.quizText = "DAILY QUIZ";
			
			if(window.languageSelected == "Hindi")
				window.quizText = "दैनिक प्रश्नोत्तरी";
			else if(window.languageSelected == "Kannada")
				window.quizText = "ದೈನಂದಿನ ರಸಪ್ರಶ್ನೆ";
			else if(window.languageSelected == "Odiya")
				window.quizText = "ପ୍ରତିଦିନ ବ୍ଯଙ୍ଗ କରିବା";
			else if(window.languageSelected == "Gujarati")
				window.quizText = "દૈનિક ક્વિઝ";
			else if(window.languageSelected == "Marathi")
				window.quizText = "दैनिक क्विझ";
			else if(window.languageSelected == "Telugu")
				window.quizText = "రోజువారీ క్విజ్";
			else if(window.languageSelected == "Tamil")
				window.quizText = "தினசரி வினாடி வினா";
			else if(window.languageSelected == "Urdu")
				window.quizText = "روزانہ کوئز";
			else 
				window.quizText = "DAILY QUIZ";
			this.qArray = ['number_NSNG_1_1level1','number_NSNG_2_1level1','addition_NOAG_1_1level1','addition_NOAG_2_1level1','addition_NOAG_3_2level1','addition_NOAG_4_3level1','comparison_NSCG_1_1level1','comparison_NSCG_2_1level1','comparison_NSCG_4_2level1','comparison_NSCG_5_3level1','division_NODG_1_2level1','division_NODG_2_2level1','division_NODG_3_2level1','division_NODG_4_2level1','fraction_NSFG_1_1level1','fraction_NSFG_2_1level1','fraction_NSFG_3_1level1','fraction_NSFG_4_1level1','length_MLG_1_1level1','length_MLG_2_1level1','length_MLG_3_2level1','multiplication_NOMG_1_1level1','multiplication_NOMG_2_1level1','multiplication_NOMG_3_1level1','multiplication_NOMG_4_2level1','multiplication_NOMG_5_3level1','placevalue_NSPVG_1_1level1','placevalue_NSPVG_2_1level1','placevalue_NSPVG_4_2level1','placevalue_NSPVG_5_2level1','placevalue_NSPVG_6_3level1','placevalue_NSPVG_7_3level1','sequence_NSSG_1_1level1','sequence_NSSG_2_1level1','sequence_NSSG_3_2level1','sequence_NSSG_4_2level1','sequence_NSSG_5_3level1','sequence_NSSG_6_3level1','subtraction_NOAG_1_1level1','subtraction_NOAG_2_1level1','subtraction_NOAG_3_2level1','subtraction_NOAG_4_3level1','time_MTG_1_1level1','time_MTG_2_3level1','time_MTG_3_3level1','volume_MVG_1_4level1','volume_MVG_2_4level1','volume_MVG_3_4level1','weight_MWG_1_1level1','weight_MWG_2_2level1','weight_MWG_3_2level1'];
			//this.qArray = ['weight_MWG_1_1level1','weight_MWG_2_2level1','weight_MWG_3_2level1'];
			this.qArray = this.shuffle(this.qArray);
			this.score =window.score;
			//alert(this.score);
			//this.stage.state.start('gameModeSelectionScreen',true,false);
            game.state.start(this.qArray[this.no11],true,false,this.param = 0,this.score = window.score,this.timerStopVar = 0);
			this.no11++;
        },
		
		
		changeQuestions:function(param,score) {
			this.stopVoice();
			commonNavBar.stopVoice();
			window.score = score;
			localStorage.setItem(window.avatarName+"Score", window.score);
			if(this.no11 == 3)
			{
				window.quizQuest = false; 
				this.stage.state.start('gameModeSelectionScreen',true,false);
			}
			else
			{
				
				this.stage.state.start(this.qArray[this.no11],true,false,param,score);
				this.no11++;
			}

        },
		
	
		shuffle: function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
            
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
        }

       return array;
     },
	 
	 stopVoice:function()
    {     

        if(_this.playQuestionSound)
        {
            if(_this.playQuestionSound.contains(_this.src))
            {
                _this.playQuestionSound.removeChild(_this.src);
                _this.src = null;
            }
            if(!_this.playQuestionSound.paused)
            {
                 console.log("stop"); 
                _this.playQuestionSound.pause();
                _this.playQuestionSound.currentTime = 0.0;
            }
            _this.playQuestionSound = null;
            _this.src = null;
        }
            
        if(_this.celebrationSound)
        {
            if(_this.celebrationSound.isPlaying)
            {
                _this.celebrationSound.stop();
                _this.celebrationSound = null;
            }
        }
		if(_this.amplify!=null)
		{
			_this.amplify.context.close();
			_this.amplify = null;
		}
    },
};