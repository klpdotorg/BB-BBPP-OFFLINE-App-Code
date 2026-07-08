/*
 * File: abbprmdsjsapilib.js
 * Version: 1.0
 * Release date: 
 * Akshara Building Block (ABB) - Challenge and Practive Modes: Android Datastore API Library for Cordova based Android apps.
 * Javascript APIs to store telemetry data locally on the Android device and to Sync it to the ABB Server using ABB REST APIs.
 * Pre-requisite:
 *    Plug-ins/Libraries: corodova-sqlite-strage plugin, jquery library (jquery-1.8.0.min.js, jquery.mobile-1.4.5.min.js)
 *    Settings: Add abbrestapi_baseurl to the 'Content-Security-Policy' in the invoking HTML file
 *              Allow access to the abbrestapi_baseurl in the cordova project config.xml
 * Author: sureshkodoor@gmail.com
 */
// console.log(window.app_Grade,"inside abbprm app grade************************************");

var abbprmdsjsapi = {

    databasename: "abbprmdb.db",
    providercode: "CAL",  // 3-char ID for the provider of the app/game. (e.g 'CAL' for Callystro)
    abbchmprmdbhandler: null,
    debugalerts: false,
    erroralerts: false,

    // Create/Open the database
    initializeDS: function () {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter initialiseDS");

        this.abbchmprmdbhandler = window.sqlitePlugin.openDatabase(
            {
                name: this.databasename, location: 'default'
            },
            function () {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: initialiseDS: openDatabase success");
            },
            function (msg) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: initialiseDS: openDatabase failed: " + msg);
                return false;
            }
        );

        // Creates/Opens the Tables
        this.createTables();

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit initialiseDS");

        return true;
    },

    deleteDS: function () {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter deleteDS");

        this.abbchmprmdbhandler = window.sqlitePlugin.deleteDatabase(
            {
                name: this.databasename, location: 'default'
            },
            function () {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: deleteDS: success");
            },
            function (msg) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: deleteDS: failed: " + msg);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit deleteDS");
    },

    getCurrentGrade: function (objData) {
        console.log("abbprmdsjsapi: getCurrentGrade: " + JSON.stringify(objData));
        return (objData && (objData.grade || objData.gradename || objData.gradeName)) ||
            window.app_Grade || window.grade || "";
    },

    // Create the tables
    createTables: function () {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter createTables");

        this.abbchmprmdbhandler.sqlBatch([
            'CREATE TABLE IF NOT EXISTS prmgameplaytbl (id integer primary key autoincrement, id_game_play text, id_game text, avatarname text, deviceid text, grade text, start_time text, synced integer not null default 0)',
            'CREATE TABLE IF NOT EXISTS prmgameplaydetailtbl (id integer primary key autoincrement, id_game_play text, id_question text, pass text, time2answer integer, attempts integer, date_time_submission text, avatarname text, deviceid text, grade text, synced integer not null default 0)',
            'CREATE TABLE IF NOT EXISTS prminteracteventtbl (id integer primary key autoincrement, id_game_play text, id_question text, date_time_event text, event_type text, res_id text, avatarname text, deviceid text, synced integer not null default 0)',

            'CREATE TABLE IF NOT EXISTS chmwalletscoretbl (id integer primary key autoincrement, avatarname text, deviceid text, score integer, datetime_lastupdated text, synced integer not null default 0)',
            'CREATE TABLE IF NOT EXISTS chmgameplaytbl (id integer primary key autoincrement, id_game_play text, id_game text, avatarname text, deviceid text, start_time text, hints integer, synced integer not null default 0)',
            'CREATE TABLE IF NOT EXISTS chmgameplaydetailtbl (id integer primary key autoincrement, id_game_play text, id_question text, pass text, time2answer integer, date_time_submission text, avatarname text, deviceid text, synced integer not null default 0)',
            'CREATE TABLE IF NOT EXISTS chmgamemastertbl (id integer primary key autoincrement, id_game text, game_description text, id_grade integer, gametoopen text, prerequisitegame text)'
        ],
            function () {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: createTables: success");
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: createTables: failed" + error.message);
                return false;
            }
        );

        this.abbchmprmdbhandler.sqlBatch([
            "ALTER TABLE prmgameplaytbl ADD COLUMN grade text",
            "ALTER TABLE prmgameplaydetailtbl ADD COLUMN grade text"
        ],
            function () { },
            function () { }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit createTables");

        return true;
    },

    dropTables: function () {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter dropTables");

        this.abbchmprmdbhandler.sqlBatch([
            'DROP TABLE IF EXISTS prmgameplaytbl',
            'DROP TABLE IF EXISTS prmgameplaydetailtbl',
            'DROP TABLE IF EXISTS prminteracteventtbl',

            'DROP TABLE IF EXISTS chmwalletscoretbl',
            'DROP TABLE IF EXISTS chmgameplaytbl',
            'DROP TABLE IF EXISTS chmgameplaydetailtbl',
            'DROP TABLE IF EXISTS chmgamemastertbl'
        ],
            function () {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: dropTables: success");
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: dropTables: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit dropTables");

        return true;
    },

    // PRACTICE Mode
    // Save practice mode gameplay record. The id_game_play corresponding to the saved gameplay is returned.
    // The returned id_game_play should be passed to 'prm_saveAssessment' and 'prm_saveInteractEvent' functions to save the Assessment and InteractEvent data corresponding to this gameplay. 
    prm_saveGameplay: function (objData) {

        //alert(objData.deviceid);
        var grade = this.getCurrentGrade(objData);
        console.log("grade", grade);
        if (grade == "BBPP") {
            grade = "6th Grade";
        } else {
            grade = "1st Grade";
        }

        if ((objData.id_game == "") || (objData.avatarname == "") || (objData.deviceid == "") || (objData.start_time == "") || (grade == "")) {

            if (abbprmdsjsapi.erroralerts) {
                console.log("abbprmdsjsapi: ERROR: prm_saveGameplay: values for one or more input parameters are missing.");
            }

            return false;
        }

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_saveGameplay. objData: " + objData.id_game + ", " + objData.avatarname + ", " + objData.deviceid + ", " + grade + ", " + objData.start_time);

        var gameplayid = this.createGameplayId();

        var query = "INSERT INTO prmgameplaytbl (id_game_play, id_game, avatarname, deviceid, grade, start_time) VALUES (?,?,?,?,?,?)";

        this.abbchmprmdbhandler.executeSql(query, [gameplayid, objData.id_game, objData.avatarname, objData.deviceid, grade, objData.start_time],
            function (rs) {
                if (abbprmdsjsapi.debugalerts) {
                    console.log("abbprmdsjsapi: prm_saveGameplay: success. id_game_play: " + gameplayid);
                    console.log("abbprmdsjsapi: resultSet.insertId: " + rs.insertId);
                    console.log("abbprmdsjsapi: resultSet.rowsAffected: " + rs.rowsAffected);
                }
                // return gameplayid; // IMPORTANT NOTE: This 'return' statement here WILL NOT WORK. SQLlite functions are executed asynchronously. 
                // i.e This JS function will spawn executeSql function in a seperate thread and will continue executing the 
                // remaining part of the function. So, prm_saveGameplayRecord function will return before the executeSql is 
                // complete (the SQLite function will run in background). Hence returning gameplayid at this point will not work. 
                // The calling function will get null value. So, the 'return gameplayid' is placed outside the SQLite function call.
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_saveGameplay: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_saveGameplay");

        return gameplayid;
    },

    // Create a unique identifier for id_game_play (A 15 char unique string is generated as the Id). 'providercode' prefix is to identify the provider of the app
    createGameplayId: function () {

        // return this.providercode+Math.random().toString(36).substr(5, 12); // substring of 12 chars (12 chars of the original string, starting from the 5th char)

        var text = "";
        var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 12; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return this.providercode + text;
    },

    // PRACTICE Mode
    // Fetch the practice mode gameplay data for syncing (read all the unsynced gameplay records).
    //
    // IMPORTANT NOTE: The SQLite function is executed asynchronously and hence the JS function will exit before the SQLite function is completed.
    // Hence, the recrods fetched cannot be returned from the JS function as a return value. Instead, a callback function should be provided to the
    // JS function, which will be invoked when the SQLite function is completed. 
    //
    // prm_fetchUnsyncedGameplayRecords_cbf is the callback function, which will be invoked once the SQLite function completes its execution
    prm_fetchUnsyncedGameplayRecords: function (callbackfn) {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_fetchUnsyncedGameplayRecords");

        var query = "SELECT id AS objid, avatarname, deviceid, grade, id_game_play, id_game, start_time FROM prmgameplaytbl WHERE synced = 0";

        var arrObjs = new Array();

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                var nrecords = rs.rows.length;
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_fetchUnsyncedGameplayRecords: success. Number of records:" + nrecords);

                for (var i = 0; i < nrecords; i++) {
                    arrObjs.push(rs.rows.item(i));
                }
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_fetchUnsyncedGameplayRecords: arrObjs: " + JSON.stringify(arrObjs));

                callbackfn(arrObjs); // Invoke the callback function to send the array of Objects with the fetched records
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_fetchUnsyncedGameplayRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_fetchUnsyncedGameplayRecords");

    },

    // PRACTICE Mode
    // callback function for prm_fetchUnsyncedGameplayRecords
    prm_fetchUnsyncedGameplayRecords_cbf: function (arrRecords) {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_fetchUnsyncedGameplayRecords_cbf");
        // console.log("prm_fetchUnsyncedGameplayRecords_cbf: arrRecords: " + JSON.stringify(arrRecords));

        // Do all the Processing, REST API calls etc here
        if (arrRecords.length > 0)
            RESTAPImgr_1.invokeRESTAPI_1('txabbprmgameplay', arrRecords);
    },

    // PRACTICE Mode
    // mark all the records that have 'id' values specified in the 'ids' array as synced (set 'synced' field to 1.)
    prm_markSyncedGameplayRecords: function (ids) {

        var query = "UPDATE prmgameplaytbl SET synced = 1 WHERE id IN (" + ids + ")";

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_markSyncedGameplayRecords. ids:" + ids + "  query: " + query);

        if ((ids.length == 0) || (ids == '')) {
            if (abbprmdsjsapi.debugalerts)
                console.log("abbprmdsjsapi: Empty list of 'id's. No action performed.");
            return true;
        }
        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_markSyncedGameplayRecords: success. resultSet.rowsAffected:" + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_markSyncedGameplayRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_markSyncedGameplayRecords");
    },

    // PRACTICE Mode
    // delete all the records that have 'synced' field as 1
    prm_deleteSyncedGameplayRecords: function () {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_deleteSyncedGameplayRecords");

        var query = "DELETE FROM prmgameplaytbl WHERE synced = 1";

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_deleteSyncedGameplayRecords: success. resultSet.rowsAffected: " + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_deleteSyncedGameplayRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_deleteSyncedGameplayRecords");
    },

    // PRACTICE Mode
    // delete all the records that have 'id' values specified in the 'ids' array as synced. 
    // This function can be used to delete records directly instead of a two-step process of marking as synced and then deleting separately 
    prm_deleteGameplayRecordsByIds: function (ids) {

        if (abbprmdsjsapi.debugalerts)
            console.log("ABSJSAPI: Enter prm_deleteGameplayRecordsByIds");

        var query = "DELETE FROM prmgameplaytbl WHERE id IN (" + ids + ")";

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("ABSJSAPI: prm_deleteGameplayRecordsByIds: success. resultSet.rowsAffected: " + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("ABSJSAPI: prm_deleteGameplayRecordsByIds: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("ABSJSAPI: Exit prm_deleteGameplayRecordsByIds");
    },

    // PRACTCIE MODE
    // Save practice mode assessment record. 
    prm_saveAssessment: function (objData) {

        var grade = this.getCurrentGrade(objData);
        console.log("grade", grade);
        if (grade == "BBPP") {
            grade = "6th Grade";
        } else {
            grade = "1st Grade";
        }

        if ((objData.id_game_play == "") || (objData.id_question == "") || (objData.pass == "") || (objData.time2answer == "") || (objData.attempts == "") || (objData.date_time_submission == "") || (objData.avatarname == "") || (objData.deviceid == "") || (grade == "")) {

            if (abbprmdsjsapi.erroralerts) {
                console.log("abbprmdsjsapi: ERROR: prm_saveAssessment: values for one or more input parameters are missing.");
            }

            return false;
        }

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_saveAssessment. objData: " + objData.id_game_play + ", " + objData.id_question + ", " + objData.pass + ", " + objData.time2answer + ", " + objData.attempts + ", " + objData.date_time_submission + ", " + objData.avatarname);


        var query = "INSERT INTO prmgameplaydetailtbl (id_game_play, id_question, pass, time2answer, attempts, date_time_submission, avatarname, deviceid, grade) VALUES (?,?,?,?,?,?,?,?,?)";

        this.abbchmprmdbhandler.executeSql(query, [objData.id_game_play, objData.id_question, objData.pass, objData.time2answer, objData.attempts, objData.date_time_submission, objData.avatarname, objData.deviceid, grade],
            function (rs) {
                if (abbprmdsjsapi.debugalerts) {
                    console.log("abbprmdsjsapi: prm_saveAssessment: success");
                    console.log("abbprmdsjsapi: resultSet.insertId: " + rs.insertId);
                    console.log("abbprmdsjsapi: resultSet.rowsAffected: " + rs.rowsAffected);
                }
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_saveAssessment: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_saveAssessment");
    },

    // PRACTCIE MODE
    // Fetch the assessment data for syncing (read all the unsynced assessment records).
    //
    // IMPORTANT NOTE: The SQLite function is executed asynchronously and hence the JS function will exit before the SQLite function is completed.
    // Hence, the recrods fetched cannot be returned from the JS function as a return value. Instead, a callback function should be provided to the
    // JS function, which will be invoked when the SQLite function is completed. 
    //
    // prm_fetchUnsyncedAssessmentRecords_cbf is the callback function, which will be invoked once the SQLite function completes its execution
    //

    prm_fetchUnsyncedAssessmentRecords: function (callbackfn) {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_fetchUnsyncedAssessmentRecords");

        var query = "SELECT id AS objid, avatarname, deviceid, grade, id_game_play, id_question, pass, time2answer, attempts, date_time_submission FROM prmgameplaydetailtbl WHERE synced = 0";

        var arrObjs = new Array();

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                var nrecords = rs.rows.length;
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_fetchUnsyncedAssessmentRecords: success. Number of records:" + nrecords);

                for (var i = 0; i < nrecords; i++) {
                    arrObjs.push(rs.rows.item(i));
                }
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: arrObjs: " + JSON.stringify(arrObjs));

                callbackfn(arrObjs); // Invoke the callback function to send the array of Objects with the fetched records
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_fetchUnsyncedAssessmentRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_fetchUnsyncedAssessmentRecords");

    },

    // PRACTCIE MODE
    // callback function for prm_fetchUnsyncedAssessmentRecords
    prm_fetchUnsyncedAssessmentRecords_cbf: function (arrRecords) {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_fetchUnsyncedAssessmentRecords_cbf");
        // console.log("prm_fetchUnsyncedAssessmentRecords_cbf: arrRecords: " + JSON.stringify(arrRecords));

        // Do all the Processing, REST API calls etc here
        if (arrRecords.length > 0)
            RESTAPImgr_1.invokeRESTAPI_1('txabbprmgameplaydetail', arrRecords);
    },

    // PRACTCIE MODE
    // mark all the records that have 'id' values specified in the 'ids' array as synced (set 'synced' field to 1.)
    prm_markSyncedAssessmentRecords: function (ids) {

        var query = "UPDATE prmgameplaydetailtbl SET synced = 1 WHERE id IN (" + ids + ")";

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_markSyncedAssessmentRecords. ids:" + ids + "  query: " + query);

        if ((ids.length == 0) || (ids == '')) {
            if (abbprmdsjsapi.debugalerts)
                console.log("abbprmdsjsapi: Empty list of 'id's. No action performed.");
            return true;
        }
        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_markSyncedAssessmentRecords: success. resultSet.rowsAffected:" + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_markSyncedAssessmentRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_markSyncedAssessmentRecords");
    },

    // PRACTCIE MODE
    // delete all the records that have 'synced' field as 1
    prm_deleteSyncedAssessmentRecords: function () {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_deleteSyncedAssessmentRecords");

        var query = "DELETE FROM prmgameplaydetailtbl WHERE synced = 1";

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_deleteSyncedAssessmentRecords: success. resultSet.rowsAffected: " + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_deleteSyncedAssessmentRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_deleteSyncedAssessmentRecords");
    },

    // PRACTICE MODE
    // delete all the records that have 'id' values specified in the 'ids' array as synced. 
    // This function can be used to delete records directly instead of a two-step process of marking as synced and then deleting separately 
    prm_deleteAssessmentRecordsByIds: function (ids) {

        if (abbprmdsjsapi.debugalerts)
            console.log("ABSJSAPI: Enter prm_deleteAssessmentRecordsByIds");

        var query = "DELETE FROM prmgameplaydetailtbl WHERE id IN (" + ids + ")";

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("ABSJSAPI: prm_deleteAssessmentRecordsByIds: success. resultSet.rowsAffected: " + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("ABSJSAPI: prm_deleteAssessmentRecordsByIds: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("ABSJSAPI: Exit prm_deleteAssessmentRecordsByIds");
    },

    // PRACTICE MODE
    // Save Interact Event record. 
    prm_saveInteractEvent: function (objData) {

        if ((objData.id_game_play == "") || (objData.id_question == "") || (objData.date_time_event == "") || (objData.event_type == "") || (objData.res_id == "") || (objData.avatarname == "") || (objData.deviceid == "")) {
            if (abbprmdsjsapi.erroralerts) {
                console.log("abbprmdsjsapi: ERROR: prm_saveInteractEvent: values for one or more input parameters are missing.");
            }
            return false;
        }

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_saveInteractEvent. objData: " + objData.id_game_play + ", " + objData.id_question + ", " + objData.date_time_event + ", " + objData.event_type + ", " + objData.res_id + ", " + objData.avatarname + ", " + objData.deviceid);


        var query = "INSERT INTO prminteracteventtbl (id_game_play, id_question, date_time_event, event_type, res_id, avatarname, deviceid) VALUES (?,?,?,?,?,?,?)";

        this.abbchmprmdbhandler.executeSql(query, [objData.id_game_play, objData.id_question, objData.date_time_event, objData.event_type, objData.res_id, objData.avatarname, objData.deviceid],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_saveInteractEvent: success");
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_saveInteractEvent: failed" + error.message);
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_saveInteractEvent");
    },

    // PRACTICE MODE
    // Fetch the practice mode Interact Event data for syncing (read all the unsynced Interact Event records).
    //
    // IMPORTANT NOTE: The SQLite function is executed asynchronously and hence the JS function will exit before the SQLite function is completed.
    // Hence, the recrods fetched cannot be returned from the JS function as a return value. Instead, a callback function should be provided to the
    // JS function, which will be invoked when the SQLite function is completed. 
    //
    // prm_fetchUnsyncedInteractEventRecords_cbf is the callback function, which will be invoked once the SQLite function completes its execution
    //

    prm_fetchUnsyncedInteractEventRecords: function (callbackfn) {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_fetchUnsyncedInteractEventRecords");

        var query = "SELECT id AS objid, avatarname, deviceid, id_game_play,  id_question, date_time_event, event_type, res_id FROM prminteracteventtbl WHERE synced = 0";

        var arrObjs = new Array();

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                var nrecords = rs.rows.length;
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_fetchUnsyncedInteractEventRecords: success. Number of records:" + nrecords);

                for (var i = 0; i < nrecords; i++) {
                    arrObjs.push(rs.rows.item(i));
                }
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: arrObjs: " + JSON.stringify(arrObjs));

                callbackfn(arrObjs); // Invoke the callback function to send the array of Objects with the fetched records
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_fetchUnsyncedInteractEventRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_fetchUnsyncedInteractEventRecords");

    },

    // PRACTICE MODE
    // callback function for prm_fetchUnsyncedInteractEventRecords
    prm_fetchUnsyncedInteractEventRecords_cbf: function (arrRecords) {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_fetchUnsyncedInteractEventRecords_cbf");

        // console.log("prm_fetchUnsyncedInteractEventRecords_cbf: arrRecords: " + JSON.stringify(arrRecords));

        var arrEventData = new Array();
        for (var i = 0; i < arrRecords.length; i++) {

            var arr_eks = { "type": arrRecords[i].event_type, "id": arrRecords[i].res_id };
            var arr_edata = { "eks": arr_eks };
            var arrEvent = { "ekstep_eventid": "OE_INTERACT", "objid": arrRecords[i].objid, "id_game_play": arrRecords[i].id_game_play, "id_question": arrRecords[i].id_question, "date_time_event": arrRecords[i].date_time_event, "edata": arr_edata, "avatarname": arrRecords[i].avatarname, "deviceid": arrRecords[i].deviceid };

            arrEventData.push(arrEvent);
        }
        // console.log("arrEventData: " + JSON.stringify(arrEventData));

        // Do all the Processing, REST API calls etc here
        if (arrRecords.length > 0)
            RESTAPImgr_1.invokeRESTAPI_1('txabbprmekstepevents', arrEventData);
    },

    // PRACTICE MODE
    // mark all the records that have 'id' values specified in the 'ids' array as synced (set 'synced' field to 1.)
    prm_markSyncedInteractEventRecords: function (ids) {

        var query = "UPDATE prminteracteventtbl SET synced = 1 WHERE id IN (" + ids + ")";

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_markSyncedInteractEventRecords. ids:" + ids + "  query: " + query);

        if ((ids.length == 0) || (ids == '')) {
            if (abbprmdsjsapi.debugalerts)
                console.log("abbprmdsjsapi: Empty list of 'id's. No action performed.");
            return true;
        }
        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_markSyncedInteractEventRecords: success. resultSet.rowsAffected:" + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_markSyncedInteractEventRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_markSyncedInteractEventRecords");
    },

    // PRACTICE MODE
    // delete all the records that have 'synced' field as 1
    prm_deleteSyncedInteractEventRecords: function () {

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Enter prm_deleteSyncedInteractEventRecords");

        var query = "DELETE FROM prminteracteventtbl WHERE synced = 1";

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("abbprmdsjsapi: prm_deleteSyncedInteractEventRecords: success. resultSet.rowsAffected: " + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("abbprmdsjsapi: prm_deleteSyncedInteractEventRecords: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("abbprmdsjsapi: Exit prm_deleteSyncedInteractEventRecords");
    },

    // PRACTICE MODE
    // delete all the records that have 'id' values specified in the 'ids' array as synced. 
    // This function can be used to delete records directly instead of a two-step process of marking as synced and then deleting separately 
    prm_deleteInteractEventRecordsByIds: function (ids) {

        if (abbprmdsjsapi.debugalerts)
            console.log("ABSJSAPI: Enter prm_deleteInteractEventRecordsByIds");

        var query = "DELETE FROM prminteracteventtbl WHERE id IN (" + ids + ")";

        this.abbchmprmdbhandler.executeSql(query, [],
            function (rs) {
                if (abbprmdsjsapi.debugalerts)
                    console.log("ABSJSAPI: prm_deleteInteractEventRecordsByIds: success. resultSet.rowsAffected: " + rs.rowsAffected);
            },
            function (error) {
                if (abbprmdsjsapi.erroralerts)
                    console.log("ABSJSAPI: prm_deleteInteractEventRecordsByIds: failed" + error.message);
                return false;
            }
        );

        if (abbprmdsjsapi.debugalerts)
            console.log("ABSJSAPI: Exit prm_deleteInteractEventRecordsByIds");
    },

    // Sync all the Telemetry data 
    // All 'fetch' functions run asynchronously and pass records to respective callback functions. 
    // Hence the 'syncTelemetryData' will return before the execution of all 'fetch' functions are complete. 
    // Hence, no point in returning any status value from this function
    syncTelemetryData: function () {
        console.log("syncTelemetryData inside bbpp[][][][][][][][][][][][][][]");

        // Sync CHALLANGE MODE Gameplay records
        // this.chm_fetchUnsyncedGameplayRecords(this.chm_fetchUnsyncedGameplayRecords_cbf);

        // Sync CHALLENGE MODE Gameplaydetail records
        // this.chm_fetchUnsyncedAssessmentRecords(this.chm_fetchUnsyncedAssessmentRecords_cbf);

        // Sync CHALLENGE MODE Walletscore records
        // this.chm_fetchUnsyncedWalletscoreRecords(this.chm_fetchUnsyncedWalletscoreRecords_cbf);


        // Sync PRACTICE MODE Gameplay records
        this.prm_fetchUnsyncedGameplayRecords(this.prm_fetchUnsyncedGameplayRecords_cbf);

        // Sync PRACTICE MODE Gameplaydetail records
        this.prm_fetchUnsyncedAssessmentRecords(this.prm_fetchUnsyncedAssessmentRecords_cbf);

        // Sync PRACTICE MODE Interact Event records
        this.prm_fetchUnsyncedInteractEventRecords(this.prm_fetchUnsyncedInteractEventRecords_cbf);
    },

    reload: function () {

        console.log("abbprmdsjsapi: in reload");
        location.reload(); // to be used when transitioning the page
    },

    echoTest: function () {
        window.sqlitePlugin.echoTest(function () {
            console.log('abbprmdsjsapi: ECHO Test OK');
            //console.log('ECHO test OK');
        });
    },

    selfTest: function () {
        window.sqlitePlugin.selfTest(function () {
            console.log('abbprmdsjsapi: SELF Test OK');
            // console.log('SELF Test OK');
        });
    }

};

var RESTAPImgr_1 = {

    //abbrestapi_baseurl: "https://dev.abs.klp.org.in/abbchmprm/",
    //abbrestapi_baseurl: "https://abbmath.klp.org.in/abbchmprm/",
    // abbrestapi_baseurl: "https://abbmath.klp.org.in/abbppchmprm/",
    //"https://abbmath.klp.org.in/abbppchmprm/",

    //https://abbmath.klp.org.in/abbppchmprm/Reports/
    //"https://10.0.2.2/abbchmprm/",
    // abbrestapi_baseurl: "https://10.0.2.2/abbchmprm/",
    abbrestapi_baseurl: window.ApiConfig.url('jspoint'),
    // abbrestapi_baseurl: "https://abbmath.klp.org.in/abbchmprmtest/",
    // function to invoke REST API
    invokeRESTAPI_1: function (apiname, jsondata) {

        var apiurl = this.abbrestapi_baseurl + apiname;
        var rtn = true;

        console.log("RESTAPImgr_1.invokeRESTAPI_1: apiname:" + apiurl + "jsondata" + JSON.stringify(jsondata));

        $.ajax({
            url: apiurl,
            type: "POST",
            dataType: "json",
            // async:false, // set to false to perform a synchronous request
            data: JSON.stringify(jsondata),
            contentType: 'application/json; charset=UTF-8',
            accepts: 'application/json',
            success: function (jsonresp) {
                console.log("REST API success" + JSON.stringify(jsonresp));
                RESTAPImgr_1.deleteSyncedRecords(apiname, jsonresp); // delete the Synced records
            },
            error: function (error) {
                rtn = false;
                console.log("abbprmdsjsapi: invokeRESTAPI_1 failed: api: " + apiurl + " error: " + error.toString());
            }
        });

        return rtn;
    },

    deleteSyncedRecords: function (apiname, jsonresp) {

        // console.log("RESTAPImgr_1.deleteSyncedRecords");

        switch (apiname) {


            // case 'txabbchmwalletscore':

            //     var arrObjs1 = new Array();
            //     var arrIds1 = new Array();

            //     var nrecs1 = jsonresp.length;
            //     // console.log("nrecords:" + nrecs1);
            //     for (var i = 0; i < nrecs1; i++) {
            //         arrObjs1.push(jsonresp[i]);  
            //     }

            //     var nfields1 = arrObjs1.length;
            //     for (var j = 0; j < nfields1; j++) {
            //         if(arrObjs1[j].status == 'success')
            //             arrIds1.push(arrObjs1[j].objid);   // Only those records which were successfully synced are to be deleted
            //     }

            //     //console.log("arrIds toString: " + arrIds1.toString());

            //     abbprmdsjsapi.chm_deleteWalletscoreRecordsByIds(arrIds1.toString());

            //     break;

            // case 'txabbchmgameplay':

            //     var arrObjs1 = new Array();
            //     var arrIds1 = new Array();

            //     var nrecs1 = jsonresp.length;
            //     // console.log("nrecords:" + nrecs1);
            //     for (var i = 0; i < nrecs1; i++) {
            //         arrObjs1.push(jsonresp[i]);  
            //     }

            //     var nfields1 = arrObjs1.length;
            //     for (var j = 0; j < nfields1; j++) {
            //         if(arrObjs1[j].status == 'success')
            //             arrIds1.push(arrObjs1[j].objid);   // Only those records which were successfully synced are to be deleted
            //     }

            //     //console.log("arrIds toString: " + arrIds1.toString());

            //     // Mark fetched records as 'Synced'
            //     // abbprmdsjsapi.chm_markSyncedGameplayRecords(arrIds1.toString());
            //     // Delete 'Synced' records
            //     // abbprmdsjsapi.chm_deleteSyncedGameplayRecords();
            //     abbprmdsjsapi.chm_deleteGameplayRecordsByIds(arrIds1.toString());

            //     break;

            // case 'txabbchmgameplaydetail':

            //     // console.log("deleteSyncedRecords: case: txabsgameplaydetail");

            //     var arrObjs2 = new Array();
            //     var arrIds2 = new Array();

            //     var nrecs2 = jsonresp.length;
            //     // console.log("nrecords:" + nrecs2);
            //     for (var i = 0; i < nrecs2; i++) {
            //         arrObjs2.push(jsonresp[i]);
            //     }

            //     var nfields2 = arrObjs2.length;
            //     for (var j = 0; j < nfields2; j++) {
            //         if (arrObjs2[j].status == 'success')
            //             arrIds2.push(arrObjs2[j].objid);   // Only those records which were successfully synced are to be deleted
            //     }

            //     //console.log("arrIds toString: " + arrIds2.toString());

            //     // Mark fetched records as 'Synced'
            //     // abbprmdsjsapi.prm_markSyncedAssessmentRecords(arrIds2.toString());
            //     // Delete 'Synced' records
            //     // abbprmdsjsapi.prm_deleteSyncedAssessmentRecords();
            //     abbprmdsjsapi.chm_deleteAssessmentRecordsByIds(arrIds2.toString());

            //     break;

            case 'txabbprmgameplay':

                // console.log("deleteSyncedRecords: case: txabbprmgameplay");


                var arrObjs1 = new Array();
                var arrIds1 = new Array();

                var nrecs1 = jsonresp.length;
                // console.log("nrecords:" + nrecs1);
                for (var i = 0; i < nrecs1; i++) {
                    arrObjs1.push(jsonresp[i]);
                }

                var nfields1 = arrObjs1.length;
                for (var j = 0; j < nfields1; j++) {
                    if (arrObjs1[j].status == 'success')
                        arrIds1.push(arrObjs1[j].objid);   // Only those records which were successfully synced are to be deleted
                }

                //console.log("arrIds toString: " + arrIds1.toString());

                // Mark fetched records as 'Synced'
                // abbprmdsjsapi.prm_markSyncedGameplayRecords(arrIds1.toString());
                // Delete 'Synced' records
                // abbprmdsjsapi.prm_deleteSyncedGameplayRecords();
                abbprmdsjsapi.prm_deleteGameplayRecordsByIds(arrIds1.toString());

                break;

            case 'txabbprmgameplaydetail':

                // console.log("deleteSyncedRecords: case: txabsgameplaydetail");

                var arrObjs2 = new Array();
                var arrIds2 = new Array();

                var nrecs2 = jsonresp.length;
                // console.log("nrecords:" + nrecs2);
                for (var i = 0; i < nrecs2; i++) {
                    arrObjs2.push(jsonresp[i]);
                }

                var nfields2 = arrObjs2.length;
                for (var j = 0; j < nfields2; j++) {
                    if (arrObjs2[j].status == 'success')
                        arrIds2.push(arrObjs2[j].objid);   // Only those records which were successfully synced are to be deleted
                }

                //console.log("arrObjs2 toString: " + arrObjs2);
                //console.log("arrIds toString: " + arrIds2.toString());

                // Mark fetched records as 'Synced'
                // abbprmdsjsapi.prm_markSyncedAssessmentRecords(arrIds2.toString());
                // Delete 'Synced' records
                // abbprmdsjsapi.prm_deleteSyncedAssessmentRecords();
                abbprmdsjsapi.prm_deleteAssessmentRecordsByIds(arrIds2.toString());

                break;

            case 'txabbprmekstepevents':

                // console.log("deleteSyncedRecords: case: txekstepevents");

                var arrObjs3 = new Array();
                var arrIds3 = new Array();

                var nrecs3 = jsonresp.length;
                // console.log("nrecords:" + nrecs3);
                for (var i = 0; i < nrecs3; i++) {
                    arrObjs3.push(jsonresp[i]);
                }

                var nfields3 = arrObjs3.length;
                for (var j = 0; j < nfields3; j++) {
                    if (arrObjs3[j].status == 'success')
                        arrIds3.push(arrObjs3[j].objid);   // Only those records which were successfully synced are to be deleted
                }

                // console.log("arrIds toString: " + arrIds3.toString());

                // Mark fetched records as 'Synced'
                // abbprmdsjsapi.prm_markSyncedInteractEventRecords(arrIds3.toString());
                // Delete 'Synced' records
                // abbprmdsjsapi.prm_deleteSyncedInteractEventRecords();
                abbprmdsjsapi.prm_deleteInteractEventRecordsByIds(arrIds3.toString());
                break;
        }
    }
};
