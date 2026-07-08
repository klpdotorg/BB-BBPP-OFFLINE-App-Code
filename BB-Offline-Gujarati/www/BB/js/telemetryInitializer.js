var telInitializer = {

	saveGameplayReturnedValue : null,
	gameID : null,

	passStringToWebView:null,
	checkForSix : null,

	gameIdInit:function(gameName,grade)
	{
		window.prevScreen = "gameScreen";

		saveGameplayReturnedValue = null;
		gameID = null;

		checkForSix = 0;

		if(gameName==null||gameName==""||gameName==undefined||gameName==NaN)
		{
			//alert("game name is not proper");
		}
		else if(grade==null||grade==""||grade==undefined||grade==NaN)
		{
			//alert("grade is not proper");
		}

		switch(gameName)
		{
			case "pinwheel1_1A":
							gameID = "NSF1.1A";
							break;
			case "length2_1A":
							gameID = "SSR2.1A";
							break;
			case "length2_1B":
							gameID = "SSR2.1B";
							break;
			case "length2_2":
							gameID = "ML2.2";
							break;
			case "length2_3":
							gameID = "ML2.3";
							break;
			case "weight3_1":
							gameID = "MW3.1";
							break;
			case "weight3_2A":
							gameID = "MW3.2A";
							break;
			case "time5_1":
							gameID = "MT5.1";
							break;
			case "time5_2":
							gameID = "MT5.2";
							break;
			case "time5_4":
							gameID = "MT5.4";
							break;
			case "unity1_1":
							gameID = "NSN1.1";
							break;
			case "unity1_2":
							gameID = "NSN1.2";
							break;
			case "unity1_3":
							gameID = "NSN1.3";
							break;
			case "unity1_4":
							gameID = "NSN1.4";
							break;
			case "unity1_5":
							gameID = "NSN1.5";
							break;
			case "unity1_6":
							gameID = "NSN1.6";
							break;
			case "unity1_7":
							gameID = "NSN1.7";
							break;
			case "sequence2_1_1":
							gameID = "NSS2.1";
							break;
			case "sequence2_1_1a":
							gameID = "NSS2.1A";
							break;
			case "sequence2_2_1":
							gameID = "NSS2.2";
							break;
			case "sequence2_2_1a":
							gameID = "NSS2.2A";
							break;
			case "sequence2_3_1":
							gameID = "NSS2.3";
							break;
			case "sequence2_3_1a":
							gameID = "NSS2.3A";
							break;
			case "sequence2_4_1":
							gameID = "NSS2.4";
							break;
			case "sequence2_4_1a":
							gameID = "NSS2.4A";
							break;
			case "sequence2_5_1":
							gameID = "NSS2.5";
							break;
			case "sequence2_5_1a":
							gameID = "NSS2.5A";
							break;
			case "sequence2_6_1":
							gameID = "NSS2.6";
							break;
			case "sequence2_7_3":
							gameID = "NSS2.7";
							break;
			case "sequence2_7_3a":
							gameID = "NSS2.7A";
							break;
			case "unity5_1":
							gameID = "NOA5.1";
							break;
			case "unity6_1":
							gameID = "NOA6.1";
							break;
			case "CoinMachine3_1_1":
							gameID = "NSPV3.1";
							break;
			case "unity3_1_1a":
							gameID = "NSPV3.1A";
							break;
			case "unity3_1_1b":
							gameID = "NSPV3.1B";
							break;
			case "CoinMachine3_2_1":
							gameID = "NSPV3.2";
							break;
			case "CoinMachine7_1_1":
							gameID = "NOA7.1";
							break;
			case "CoinMachine7_2_1":
							gameID = "NOA7.2";
							break;
			case "unity8_1":
							gameID = "NOS8.1";
							break;
			case "unity10_1_1":
							gameID = "NOS10.1";
							break;
			case "unity10_2_1":
							gameID = "NOS10.2";
							break;
			case "unity11_1":
							gameID = "NOM11.1";
							break;
			case "unity11_2":
							gameID = "NOM11.2";
							break;
			case "time6_1":
							gameID = "MT6.1";
							break;
			case "time6_2":
							gameID = "MT6.2";
							break;
			case "pinwheel1_1B":
							gameID = "NSF1.1B";
							break;
			case "pinwheel1_2A":
							gameID = "NSF1.2A";
							break;
			case "pinwheel1_2B":
							gameID = "NSF1.2B";
							break;
			case "pinwheel1_2C":
							gameID = "NSF1.2C";
							break;
			case "pinwheel1_3A":
							gameID = "NSF1.3A";
							break;
			case "pinwheel1_3B":
							gameID = "NSF1.3B";
							break;
			case "pinwheel1_4":
							gameID = "NSF1.4";
							break;
			case "length2_4A":
							gameID = "ML2.4A";
							break;
			case "length2_4B":
							gameID = "ML2.4B";
							break;
			case "weight3_2B":
							gameID = "MW3.2B";
							break;
			case "weight3_2C":
							gameID = "MW3.2C";
							break;
			case "weight3_2D":
							gameID = "MW3.2D";
							break;
			case "weight3_3A":
							gameID = "MW3.3A";
							break;
			case "weight3_3B1":
							gameID = "MW3.3B1";
							break;
			case "weight3_3B2":
							gameID = "MW3.3B2";
							break;
			case "time7_1":
							gameID = "MT7.1";
							break;
			case "time7_2":
							gameID = "MT7.2";
							break;
			case "CoinMachine17_2":
							gameID = "NOD17.2";
							break;
			case "volume4_1A":
							gameID = "MV4.1A";
							break;
			case "volume4_1B":
							gameID = "MV4.1B";
							break;
			case "volume4_1C":
							gameID = "MV4.1C";
							break;
			case "volume4_2A":
							gameID = "MV4.2A";
							break;
			case "volume4_2B":
							gameID = "MV4.2B";
							break;
			case "volume4_2C":
							gameID = "MV4.2C";
							break;
			case "volume4_3A":
							gameID = "MV4.3A";
							break;
			case "volume4_3B":
							gameID = "MV4.3B";
							break;
			case "volume4_3C":
							gameID = "MV4.3C";
							break;
			case "Comparison4_1":
							gameID = "NSC4.1";
							break;
			case "Comparison4_1_1New":
							gameID = "NSC4.1A";
							break;
			case "unity_4_2_2":
							gameID = "NSC4.2A";
							break;
			case "Comparison4_2":
							gameID = "NSC4.2";
							break;
			case "Comparison4_3_1":
							gameID = "NSC4.3";
							break;
			case "unity4_4_1":
							gameID = "NSC4.4";
							break;
			case "unity4_5_1":
							gameID = "NSC4.5";
							break;
			case "unity4_6_1":
							gameID = "NSC4.6";
							break;
			case "multiplication12_1":
							gameID = "NOM12.1";
							break;
			case "unity12_2":
							gameID = "NOM12.2";
							break;
			case "multiplication12_3_1":
							gameID = "NOM12.3";
							break;
			case "unity13_1":
							gameID = "NOM13.1";
							break;
			case "unity14_1":
							gameID = "NOM14.1";
							break;
			case "unity14_2":
							gameID = "NOM14.2";
							break;
			case "unity15_1":
							gameID = "NOM15.1";
							break;
			case "unity16_1":
							gameID = "NOD16.1";
							break;
			case "unity16_2":
							gameID = "NOD16.2";
							break;
			case "unity16_3":
							gameID = "NOD16.2";
							break;
			case "Unity17_3":
							gameID = "NOD17.3";
							break;
			case "SG1_1_1":
							gameID = "SG1.1.1";
							break;
			case "SG2_1_1":
							gameID = "SG2.1.1";
							break;
			case "SG2_2_1":
							gameID = "SG2.2.1";
							break;
			case "SG3_1_1":
							gameID = "SG3.1.1";
							break;
			case "SG3_2_1":
							gameID = "SG3.2.1";
							break;
			case "SG4_1_1":
							gameID = "SG4.1.1";
							break;
			case "SG4_2_1":
							gameID = "SG4.2.1";
							break;
			case "SG5_1_2":
							gameID = "SG5.1.2";
							break;
			case "SG7_1_2":
							gameID = "SG7.1.2";
							break;
			case "SG7_2_2":
							gameID = "SG7.2.2";
							break;
			case "SG7_2_2x":
							gameID = "SG7.2.2x";
							break;
			case "SG8_1_2":
							gameID = "SG8.1.2";
							break;
			case "SG8_2_2":
							gameID = "SG8.2.2";
							break;
			case "SG8_2_2x":
							gameID = "SG8.2.2x";
							break;
			case "SG11_1_3":
							gameID = "SG11.1.3";
							break;
			case "SG12_1_3":
							gameID = "SG12.1.3";
							break;
			case "SG14_1_3":
							gameID = "SG14.1.3";
							break;
			case "SG15_1_3":
							gameID = "SG15.1.3";
							break;
			case "SG15_2_3":
							gameID = "SG15.2.3";
							break;
			case "SG16_1_4":
							gameID = "SG16.1.4";
							break;
			case "SG16_2_4":
							gameID = "SG16.2.4";
							break;
			case "SG17_1_4":
							gameID = "SG17.1.4";
							break;
			case "SG20_1_4":
							gameID = "SG20.1.4";
							break;
			case "SG20_2_4":
							gameID = "SG20.2.4";
							break;
			case "SG24_1_4":
							gameID = "SG24.1.4";
							break;
			case "SG24_2_4":
							gameID = "SG24.2.4";
							break;
			case "SG21_1_5":
							gameID = "SG21.1.5";
							break;
			case "SG21_2_5":
							gameID = "SG21.2.5";
							break;
			case "SG21_3_5":
							gameID = "SG21.3.5";
							break;
			case "SG22_1_5":
							gameID = "SG22.1.5";
							break;
			case "SG23_1_5":
							gameID = "SG23.1.5";
							break;
			case "SG21_3_6":
							gameID = "SG21.3.6";
							break;
			case "NSF1_4":
							gameID = "NSF1.4";
							break;
			case "NSF2_4":
							gameID = "NSF2.4";
							break;
			case "NSF3_4":
							gameID = "NSF3.4";
							break;
			case "NSF1_5":
							gameID = "NSF1.5";
							break;
			case "NSF2_5":
							gameID = "NSF2.5";
							break;
			case "NSF3_5":
							gameID = "NSF3.5";
							break;
			case "NSF4_5":
							gameID = "NSF4.5";
							break;
			case "NSF5_5":
							gameID = "NSF5.5";
							break;
			case "NSD1_5":
							gameID = "NSD1.5";
							break;
			case "NSD2_5":
							gameID = "NSD2.5";
							break;
			case "NSD4_5":
							gameID = "NSD4.5";
							break;
			case "NSD5_5":
							gameID = "NSD5.5";
							break;
			case "NSD6_5":
							gameID = "NSD6.5";
							break;
			case "pv1_4":
            				gameID = "PV1";
            				break;
            case "pv2_4":
            				gameID = "PV2";
            				break;
            case "pv3_4":
            				gameID = "PV3";
            				break;
            case "longdivison":
            				gameID = "NOLDG1";
            				break;
            case "longmult":
            				gameID = "NOLMG1";
            				break;
            case "DH1":
            				gameID = "DHDCG1";
            				break;
            case "DH2":
            				gameID = "DHDTG1";
            				break;
            case "NSN1":
            				gameID = "NSNPG1.3";
            				break;
            case "NSN2":
            				gameID = "NSNPG1.5";
            				break;
			case "conversion":
            				gameID = "MCON1.4";
            				break;
			case "MT5-1-Time":
							gameID = "MT5-1-Time";
							break;
			case "MT5-2-Time":
							gameID = "MT5-2-Time";
							break;

		}

		////alert(gameID);

		if(gameID==null||gameID==""||gameID==undefined)
		{
			//alert("game id is not proper");
		}

		if(grade==1)
		{
			gameID = gameID + "-G1"; 
		}
		else if(grade==2)
		{
			gameID = gameID + "-G2"; 
		}
		else if(grade==3)
		{
			gameID = gameID + "-G3"; 
		}
		else if(grade==4)
		{
			gameID = gameID + "-G4"; 
		}
		else if(grade==5)
		{
			gameID = gameID + "-G5"; 
		}

		passStringToWebView = gameID;
		
		telInitializer.tele_saveGamePlay(gameID);

		

	},

	tele_saveGamePlay:function(gameid)
	{
	    //saveGamePlay; /*local variable */
	    time = window.timeSaveFunc();
	    acss_token = window.acctkn;
	    var saveGameplay = 
	    { 
			id_game:gameid, 
			avatarname:window.avatarName, 
	    	deviceid: window.deviceId, 
		 	start_time:time
	    } 

	    

	    if(saveGameplay.id_game==null||saveGameplay.id_game==""||saveGameplay.id_game==undefined)
		{
			//alert("game id is not proper");
		}
        //alert(saveGameplay.deviceid);
	    saveGameplayReturnedValue = abbchmprmdsjsapi.prm_saveGameplay(saveGameplay);
	    ////alert(saveGameplayReturnedValue);

	    nativeApp.startPracticeActivity(passStringToWebView);
	},

	tele_interactEvent:function(gamePlay, access_token, time, question_id, event_type, res_id)
	{
	    var interactEvent = 
	    {
			id_game_play: gamePlay, 
			id_question: question_id,  
			date_time_event: time, 
			event_type: event_type, 
			res_id: res_id, 
			access_token: access_token 
	    } 
	    //absdsjsapi.saveInteractEvent(interactEvent);
	},

	tele_saveAssessment:function(question_id, pass_type, time_to_answer, attempts, screenCount)
	{
		nativeApp.screenViewStringPass("Practice_screen","Practice_screen");
		checkForSix++;
        if(checkForSix == 6)
        {
            nativeApp.screenViewStringPass("practice_completion_screen","practice_completion_screen");
            checkForSix = 0;
            nativeApp.finishPracticeActivity(passStringToWebView);

            window.rateCount++;


            setTimeout(function(){
                if(localStorage.getItem("FirstTimeRate")=="false")
                 {
                    window.rateCount = 0;
                    nativeApp.RateApp();
                    localStorage.setItem("FirstTimeRate", "true");
                }

                if(window.rateCount == 5){
                    window.rateCount = 0;
                    nativeApp.RateApp();
                }
            }, 500);


        }

		gamePlay = saveGameplayReturnedValue;
		pass_type = "yes";
		time = window.timeSaveFunc();
		acss_token = window.acctkn;

		if(question_id==null||question_id==""||question_id==undefined)
		{
			//alert("question id is not proper");
		}
		else if(screenCount==null||screenCount==""||screenCount==undefined)
		{
			//alert("screenCount is not proper");
		}

		question_id = gameID + "-Q" + question_id + "#SCR-" + screenCount;

	    var saveAsment = 
	    { 
			id_game_play: gamePlay,
			id_question: question_id,  
			pass: pass_type,
			time2answer: time_to_answer,
			attempts: attempts,
			date_time_submission: time, 
			avatarname: window.avatarName, 
	    	deviceid: window.deviceId 
	    }

	    

	    if(saveAsment.id_question==null||saveAsment.id_question==""||saveAsment.id_question==undefined)
		{
			//alert("question id is not proper");
		}
		else if(saveAsment.time2answer==null||saveAsment.time2answer==""||saveAsment.time2answer==undefined)
		{
			//alert("time to answer is not proper");
		}
		else if(saveAsment.attempts==null||saveAsment.attempts==""||saveAsment.attempts==undefined)
		{
			//alert("attempts to answer is not proper");
		}
		console.log(saveAsment);
		abbchmprmdsjsapi.prm_saveAssessment(saveAsment);

	},



};

