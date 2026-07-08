The old Building Blocks 1-5 and 6-8 app is renewed as Building Blocks 1-8. The goal of this combined project was to having both BB and BB++ app in a single package. Earlier we had two different app one for 1-5 and another one for 6-8 both had more than 400+ interactive games. In Building Blocks 1-8 we decided to combine both the app as well as to make the app completely online. The last version of BB app was 8.1.6(with the version code 66) and BB++ was 1.1.3(with version code 14) and the current version of this combined app is 8.1.9(with version code 68). 
3.3 Design Flow
Initially we wanted a main screen to divide BB and BB++ inside Building Blocks 1-8, we decided to have both the app go in a separate way as it was working as earlier. We created a new screen called MainScreen which will have two clouds representing grade 1-5 and 6-8 where the player can decide the grade they want to continue. As mentioned above both the app will work differently, they will have a separate database, assets set, server script, grade JS scripts, user statistic (or user progress).
3.3.1	Converting BB app fully online 
The BB app was not completely online, the app was working in offline as well. In order to make the app fully online we decided to have a separate asset structure in the server. We created a new asset structure in the server under /home/ubuntu/abbmath/BuildingBlocksAssets/ folder.

3.4 Procedures used for combining
	Create a main screen file called mainScreen.js add two options (clouds) BB 1-5 & BB 6-8. Add this page in common script folder. 
	Create two folders inside the www named BB and BBPP add the respective scripts and folder inside that 
	Change the path appropriately in index.html, index.js also in preloader.js 
	In index.js call the mainScreen.js file
	In mainScreen based on the option the user chooses (BB 1-5 / BB 6-8) it will redirect the user to respective section
	To make BB 1-5 online change the window.baseUrl as follow
window.baseUrl = "https://abbmath.klp.org.in/BuildingBlocksAssets/";
	Rename database related scripts if it same for BB and BBPP
	Rename the telemetryInitializer JS for BBPP since we can’t have same JS for both BB and BBPP. Once you rename it, you need to change the telemetryInitializer calls in each game level.
	Regarding the assets of BB, created a separate folder for BB inside the server and the folder structure looks like this

	Since our cordova android version was 12 the default cordova splash screen cannot be removed so we replaced it with our app icon, the procedure as follows
•	Create a folder at root level – res/screen/android/splash.png
•	Add below code lines in your config.xml page
 <preference name="AndroidWindowSplashScreenAnimatedIcon" value="res/screen/android/ic_launcher_monochrome.png"/>
<preference name="AndroidWindowSplashScreenBackground" value="#85C1E9" />

	Follow these commands once you done with all the changes
•	Cordova clean android
•	Cordova build android

03/11/2025
**Fixing the Play Store App Issue:**
The issue: "Your app does not support the 16 KB memory page sizes. Your app was built using an older NDK (Native Development Kit) or older native libraries that don’t support 16 KB page sizes."

Solution:
1. Open the app file in VS Code and open the terminal.
2. Run the following commands:
    - npm install -g cordova
    - cordova platform remove android
    - cordova platform add android@14.0.0
3. Verify the config.xml file contains:
    <preference name="android-targetSdkVersion" value="36" />
4. After editing the file, run the following commands:
    - cordova clean android
    - cordova build android

Run this command
- cordova platform remove android
- cordova platform add android@14.0.0
- cordova clean android
- cordova build android
For generating .abb file/ release apk
- cordova build android –release

Please ensure the folder structure doesn't include spaces in the folder names, as this may cause errors.
-	cordova plugin remove cordova-plugin-firebasex
-	cordova plugin add cordova-plugin-firebasex@latest
-	cordova plugin remove cordova-sqlite-storage
-	cordova plugin add cordova-sqlite-storage@latest

changed lines in the config.xml file
  <preference name="android-minSdkVersion" value="23" />
  <preference name="android-compileSdkVersion" value="36" />
   <preference name="android-targetSdkVersion" value="36" />

## for force update

Use a server-driven minimum version check at app startup.

Keep using android-versionCode as the source of truth
config.xml (line 2) currently has android-versionCode="72".

Create a remote JSON (on your server), for example:
//app-force-update.json
{
  "forceUpdate": true,
  "minVersionCode": 73,
  "storeUrl": "https://play.google.com/store/apps/details?id=com.akshara.easymath",
  "message": "A new version is required to continue."
}

Add startup check before entering app flow
Hook it in index.js (line 106) (inside create) before game.state.start('mainScreen'...) at index.js (line 164).

Compare local build vs server minVersionCode

If localVersionCode < minVersionCode: show blocking screen + “Update Now” button only.
Button should open Play Store (market://details?id=com.akshara.easymath, fallback to storeUrl).
Re-check on app resume too (optional but recommended).

For each release

Increase android-versionCode in config.xml.
Publish build.
Raise minVersionCode in server JSON when you want to force old users to update.
Notes for your project:

nativeApp.openPlaystore() exists as stub at nativeapp.js (line 101); you can use direct store URL from JS if native method isn’t implemented.
adSplashScreenbb.js already fetches server config, so you can host update config similarly.


changes moved on 21-04-26
Push Notifications and Mandatory Updates	Described in "Push Notification in BB App" word document Trigger logic and job setup
Push Notification Performance Analytics	Push notification performance (Sent, Delivery rate, open rate)
Secure Back-End Administrative Portal	User authentication (user creation from backend) Password reset function for users
Force Update feature	
Logo	To be updated
Avatar / Profile Pic	To be removed and limited only to 1 default option
Pop Up Quiz	To be removed
Added grade also along with deviceid and name for differentiating the 1-5 and 6-8 game. now for 1-5 it's storing grade 1 and 6-8 grade 6