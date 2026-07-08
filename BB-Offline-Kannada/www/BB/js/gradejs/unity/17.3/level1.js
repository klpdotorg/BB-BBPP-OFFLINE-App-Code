Game.unity17_3level1=function(){};
var randarr;
var counted1;
var numGroup;
var done;
var doInc;
var enablecoin;
var enablecoin1;
var enablecoin2;
var enablecoin3;
var txtbox1;
var sss;
var countThing;
var wronggraphics1,wronggraphics2,wronggraphics3,wronggraphics4;
var txtbox;
var hhh;
var countenable;
var randarr11;
var randarr22;
var randarr1;
var randarrs;
var randarr3;
var array1;
var aa,aab,a1,rr,f,v,g,inc,q,inc1,l,a,b,c,d,p,g,m,n,j,s,z,e,o,k,t,u,w;
var counts0=0;
var counts1=0;
var counts2=0;
var counts3=0;
var pressed;
var val1,val2;
var pressed1;
var randarray;
var randarray1;
var added;
var selectedAns = "";
var timer;
var numTxt2;



Game.unity17_3level1.prototype={


     init:function(game)
    {
        _this = this;
        
        _this.gameid = "17.3";
        telInitializer.gameIdInit("Unity17_3",gradeSelected);
        

    },

    preload:function(game){
        if(!window.grade1NOA1){

            window.grade1NOA1 = true;

            var preloadGrp = _this.add.group();
            _this.preloadBarOutline = _this.add.sprite(_this.world.centerX,_this.world.centerY,'prgressbarOutLine');
            //_this.preloadBarOutline.anchor.setTo(0.5,0.5);
            _this.preloadBars = _this.add.sprite(_this.world.centerX,_this.world.centerY,'preloadBar');

            //_this.preloadBar.anchor.setTo(0.5,0.5);
            _this.time.advanceTiming=true;
            _this.load.setPreloadSprite(_this.preloadBars);

            preloadGrp.add(_this.preloadBarOutline);
            preloadGrp.add(_this.preloadBars);

            preloadGrp.x -= 105;

        this.load.image('Level721_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
        this.load.image('Level321_bg1',window.baseUrl+'assets/gradeAssets/3.2.1/BG.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        this.load.atlas('Level321_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        
        this.load.image('Level721_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level721_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level721_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level721_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        
        this.load.image('Level723_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level723_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level723_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level723_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
       
        this.load.image('Level722_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
        this.load.image('Level723_bg1',window.baseUrl+'assets/gradeAssets/7.2.1/Bg10008.png');
    
        _this.load.atlas('Level722_CommonBackBtn',window.baseUrl+'assets/commonAssets/newBackBtn.png',window.baseUrl+'assets/commonAssets/newBackBtn.json');
    
        this.load.image('Level722_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level722_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        this.load.atlas('Level722_starAnim',window.baseUrl+'assets/commonAssets/starAnim1.png',window.baseUrl+'json/commonJson/starAnim1.json');
        this.load.atlas('Level722_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');
        


        this.load.atlas('Level721_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level721_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level721_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level721_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level721_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level721_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level721_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level721_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level721_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level721_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level721_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level721_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level721_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level721_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level721_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
      
        this.load.image('Level721_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level721_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level721_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level721_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level721_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level721_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level721_bluecoin',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level721_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');
        
       
        this.load.atlas('Level721_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');



        
        this.load.atlas('Level722_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level722_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level722_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100 anim.json');
        this.load.atlas('Level722_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level722_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level722_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level722_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level722_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level722_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level722_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level722_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level722_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level722_Coin100',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100.json');
        this.load.atlas('Level722_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level722_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level722_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level722_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
        this.load.image('Level722_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level722_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level722_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level722_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/bluecoinreverse.json');
        this.load.atlas('Level722_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/greencoinreverse.json');
        this.load.atlas('Level722_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level722_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level722_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level722_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level722_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');
        
       
        this.load.atlas('Level722_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');
        


        
        this.load.atlas('Level723_coin1Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1 anim.json');
        this.load.atlas('Level723_coin10Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10 anim.json');
        this.load.atlas('Level723_coin100Anim',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100 anim.json');
        this.load.atlas('Level723_LeverBlue',window.baseUrl+'assets/gradeAssets/7.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverBlue.json');
        this.load.atlas('Level723_LeverGreen',window.baseUrl+'assets/gradeAssets/7.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverGreen.json');
        this.load.atlas('Level723_LeverYellow',window.baseUrl+'assets/gradeAssets/7.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/7.2.1/LeverYellow.json');
        //this.load.atlas('Level723_numberBig',window.baseUrl+'assets/gradeAssets/7.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBig.json');
        this.load.atlas('Level723_numberSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberSmall.json');
        this.load.atlas('Level723_numberVSmall',window.baseUrl+'assets/gradeAssets/7.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberVSmall.json');
        this.load.atlas('Level723_numberBox',window.baseUrl+'assets/gradeAssets/7.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/7.2.1/numberBox.json');
        this.load.atlas('Level723_Coin1',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 1.json');
        this.load.atlas('Level723_Coin10',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 10.json');
        this.load.atlas('Level723_Coin100',window.baseUrl+'assets/gradeAssets/7.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/7.2.1/Coin 100.json');
        this.load.atlas('Level723_erase',window.baseUrl+'assets/gradeAssets/7.2.1/erase.png' ,window.baseUrl+'json/gradeJson/7.2.1/erase.json');
        this.load.atlas('Level723_rightmark',window.baseUrl+'assets/gradeAssets/7.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/7.2.1/rightmark.json');
        this.load.atlas('Level723_NumberKey',window.baseUrl+'assets/gradeAssets/7.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/7.2.1/numbers.json');
        
        this.load.image('Level723_coinMachinePannel',window.baseUrl+'assets/gradeAssets/7.2.1/coinMachinePannel.png');
        this.load.image('Level723_pannel1',window.baseUrl+'assets/gradeAssets/7.2.1/1.png');
        this.load.image('Level723_numBG',window.baseUrl+'assets/gradeAssets/7.2.1/b2.png');
        this.load.image('Level723_plusSign',window.baseUrl+'assets/gradeAssets/7.2.1/plusSign.png');
        
        this.load.atlas('Level723_bluecoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/bluecoinreverse.json');
        this.load.atlas('Level723_greencoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/greencoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/greencoinreverse.json');
        this.load.atlas('Level723_yellowcoinreverse',window.baseUrl+'assets/gradeAssets/7.2.1/yellowcoinreverse.png' ,window.baseUrl+'json/gradeJson/7.2.1/yellowcoinreverse.json');
        
        this.load.image('Level723_coindrag',window.baseUrl+'assets/gradeAssets/7.2.1/coindrag.png');
        this.load.atlas('Level723_coininsertbox',window.baseUrl+'assets/gradeAssets/7.2.1/coininsertbox.png',window.baseUrl+'json/gradeJson/7.2.1/coininsertbox.json');
        this.load.image('Level723_bluecoindrag',window.baseUrl+'assets/gradeAssets/7.2.1/bluecoin.png');
        this.load.image('Level723_glow',window.baseUrl+'assets/gradeAssets/7.2.1/glow.png');

        this.load.atlas('Level723_OneToHundred',window.baseUrl+'assets/gradeAssets/7.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/7.2.1/1-100.json');


        this.load.image('Level321_topic',window.baseUrl+'assets/gradeAssets/3.2.1/topic.png');
        this.load.image('Level321_practice',window.baseUrl+'assets/gradeAssets/3.2.1/practice.png');
        this.load.image('Level321_navBar',window.baseUrl+'assets/commonAssets/navBar.png');
        this.load.image('Level321_timebg',window.baseUrl+'assets/commonAssets/timebg.png');
        _this.load.atlas('Level321_CommonSpeakerBtn',window.baseUrl+'assets/commonAssets/grade11_speaker.png',window.baseUrl+'json/commonJson/grade11_speaker.json');

        
        //this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');
         this.load.atlas('Level321_coin1Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1 anim.json');
        this.load.atlas('Level321_coin10Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10 anim.json');
        this.load.atlas('Level321_coin100Anim',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100 anim.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100 anim.json');
        this.load.atlas('Level321_numberSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall.json');
        this.load.atlas('Level321_numberVSmall',window.baseUrl+'assets/gradeAssets/3.2.1/numberVSmall.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberVSmall.json');
        this.load.atlas('Level321_numberBig',window.baseUrl+'assets/gradeAssets/3.2.1/numberBig.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBig.json');

        this.load.atlas('Level321_numberBox',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox.json');
        this.load.atlas('Level321_numberBox1',window.baseUrl+'assets/gradeAssets/3.2.1/numberBox-old.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberBox-old.json');

        this.load.atlas('Level321_Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 1.json');
        this.load.atlas('Level321_Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 10.json');
        this.load.atlas('Level321_Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.png' ,window.baseUrl+'json/gradeJson/3.2.1/Coin 100.json');
        this.load.atlas('Level321_erase',window.baseUrl+'assets/gradeAssets/3.2.1/erase.png' ,window.baseUrl+'json/gradeJson/3.2.1/erase.json');
        this.load.atlas('Level321_rightmark',window.baseUrl+'assets/gradeAssets/3.2.1/rightmark.png' ,window.baseUrl+'json/gradeJson/3.2.1/rightmark.json');
        this.load.atlas('Level321_NumberKey',window.baseUrl+'assets/gradeAssets/3.2.1/numbers.png' ,window.baseUrl+'json/gradeJson/3.2.1/numbers.json');
        
        this.load.atlas('Level321_OneToHundred',window.baseUrl+'assets/gradeAssets/3.2.1/1-100.png' ,window.baseUrl+'json/gradeJson/3.2.1/1-100.json');
        
        this.load.atlas('Level1011_coinDecrease',window.baseUrl+'assets/gradeAssets/3.2.1/coinDec.png' ,window.baseUrl+'json/gradeJson/3.2.1/coinDec.json');
        this.load.atlas('Level1011_coinExchange',window.baseUrl+'assets/gradeAssets/3.2.1/exchange.png' ,window.baseUrl+'json/gradeJson/3.2.1/exchange.json');
        
        this.load.image('Level1011_BlueCoin',window.baseUrl+'assets/gradeAssets/3.2.1/blueSingleCoin.png');
        this.load.image('Level1011_GreenCoin',window.baseUrl+'assets/gradeAssets/3.2.1/greenSingleCoin.png');
        this.load.image('Level1011_YellowCoin',window.baseUrl+'assets/gradeAssets/3.2.1/yellowSingleCoin.png');
        this.load.image('Level1011_Minus',window.baseUrl+'assets/gradeAssets/3.2.1/minus.png');
        
        this.load.image('Level321_coinMachinePannel',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel.png');
        this.load.image('Level321_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel10.png');
        this.load.image('Level321_pannel3_2_1',window.baseUrl+'assets/gradeAssets/3.2.1/pannel.png');
        this.load.image('Level321_numBG',window.baseUrl+'assets/gradeAssets/3.2.1/b2.png');

        this.load.atlas('Level321_LeverBlue',window.baseUrl+'assets/gradeAssets/3.2.1/LeverBlue.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverBlue.json');
        this.load.atlas('Level321_LeverGreen',window.baseUrl+'assets/gradeAssets/3.2.1/LeverGreen.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverGreen.json');
        this.load.atlas('Level321_LeverYellow',window.baseUrl+'assets/gradeAssets/3.2.1/LeverYellow.png' ,window.baseUrl+'json/gradeJson/3.2.1/LeverYellow.json');


        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

        this.load.image('placeValuePanel',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValuePanel1.png');
        this.load.image('SlotMachinePanel1',window.baseUrl+'assets/gradeAssets/3.2.1/SlotMachinePanel1.png');

         this.load.image('Level322_pannel',window.baseUrl+'assets/gradeAssets/3.2.1/pannel322.png');


      //  this.load.image('PlaceValueNumberPanel1',window.baseUrl+'assets/gradeAssets/3.2.1/PlaceValueNumberPanel1.png');

       // this.load.atlas('Coin1',window.baseUrl+'assets/gradeAssets/3.2.1/Coin1.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 1.json');
      //this.load.atlas('Coin10',window.baseUrl+'assets/gradeAssets/3.2.1/Coin10.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 10.json');
      //this.load.atlas('Coin100',window.baseUrl+'assets/gradeAssets/3.2.1/Coin100.png' ,window.baseUrl+'assets/gradeAssets/3.2.1/Coin 100.json');

      this.load.image('Level321_coinMachinePannel17_2',window.baseUrl+'assets/gradeAssets/3.2.1/coinMachinePannel17_2.png');
      this.load.atlas('Level321_numberSmall17_2',window.baseUrl+'assets/gradeAssets/3.2.1/numberSmall17_2.png' ,window.baseUrl+'json/gradeJson/3.2.1/numberSmall17_2.json');
      this.load.atlas('Level172_slot',window.baseUrl+'assets/gradeAssets/3.2.1/slot.png' ,window.baseUrl+'json/gradeJson/3.2.1/slot.json');
        this.load.atlas('Level172_ansbox',window.baseUrl+'assets/gradeAssets/3.2.1/4.png' ,window.baseUrl+'json/gradeJson/3.2.1/4.json');
        this.load.image('Level172_div',window.baseUrl+'assets/gradeAssets/3.2.1/6.png');
        this.load.image('Level172_tray',window.baseUrl+'assets/gradeAssets/3.2.1/tray.png');
        this.load.image('Level321_5',window.baseUrl+'assets/gradeAssets/3.2.1/5.png');


    }

    },
    
	create:function(game){

		_this.amplify = null;
		_this.sceneCount = 0;
        inc=0;
        done=0;
        doInc=0;
        added=0;
        counted1=0;
        enablecoin1=0;
        enablecoin2=0;
        enablecoin3=0;
        countThing=0;
        enablecoin=0;
        countenable=0;
        array1= new Array();
        randarr22= new Array();
        randarr11= new Array();
        randarray1= new Array();
         randarray = new Array();
       randarrs = new Array();
       randarr = new Array();
       randarr1 = new Array();
       randarr3 = new Array();
        _this.counts=0;
        _this.noofAttempts=0;
		_this.AnsTimerCount=0;   
        _this.sceneCount=1;
        _this.seconds = 0;
          pressed=0;
          pressed1=0;
          pressed2=0;
        _this.minutes = 0;
        _this.counterForTimer = 0;
        _this.selectedAns = "";
        _this.selectedAns1 = "";
        _this.rightAns = "";
        randarr = new Array();
       _this.wrong = true;
        _this.displayNopad = false;
        _this.toCheckNumberPad = false;
         _this.no1=0;
         _this.qArrays = [1,2,3,4,5,6,7,8,9,10];
        _this.qArrays = _this.shuffle( _this.qArrays);
        _this.count=0;
         _this.count1=0;
		shake = new Phaser.Plugin.Shake(game);
		game.plugins.add(shake);

        _this.physics.startSystem(Phaser.Physics.ARCADE);
		_this.physics.setBoundsToWorld();

           _this.bg1 = _this.add.tileSprite(0,0,_this.world.width,_this.world.height, 'Level321_bg1');
            _this.navBar = _this.add.sprite(0,0,'Level321_navBar');
             _this.navBar.scale.setTo(1,1);
             _this.timebg = _this.add.sprite(305,6,'Level321_timebg');
            // _this.topicOutline = _this.add.sprite(70,5,'topicOutline');
            // _this.practice = _this.add.sprite(78,10,'practice');
            
           /* numTxt2 = this.add.text(210,24, 'Division');
            numTxt2.anchor.setTo(0.5);
            numTxt2.align = 'center';
            numTxt2.font = 'Alte Haas Grotesk';
            numTxt2.fontSize = 20;
            numTxt2.fill = '#ffffff';
            numTxt2.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);*/
        
        
             _this.timeDisplay = _this.add.text(330,22, _this.minutes + ' : '+  _this.seconds);
             _this.timeDisplay.anchor.setTo(0.5);
             _this.timeDisplay.align = 'center';
             _this.timeDisplay.font = 'myfont';
            _this.timeDisplay.fontWeight = 'normal';
             _this.timeDisplay.fontSize = 20;
            //text.fontWeight = 'bold';
             _this.timeDisplay.fill = '#ADFF2F';
         
       
       _this.backbtn = _this.add.sprite(-3,3,'newCommonBackBtnForAll');
        _this.backbtn.inputEnabled = true;
        _this.backbtn.events.onInputDown.add(function()
        {
            //_this.cache.destroy();
            //console.log("back");
            selectedAns = '';
            _this.backbtn.events.onInputDown.removeAll();
            _this.stopVoice();
            
            _this.clickSound = _this.add.audio('ClickSound');
            _this.clickSound.play();
            if(grade2Selected == false)
                _this.state.start('grade3levelSelectionScreen',true,false); 
            else
                _this.state.start('grade2levelSelectionScreen',true,false);
        },_this);

       _this.speakerbtn = _this.add.sprite(600,6,'Level321_CommonSpeakerBtn');
      // _this.speakerbtn.inputEnabled = true;
        _this.speakerbtn.events.onInputDown.add(function()
        {
            
           _this.clickSound = _this.add.audio('ClickSound');
           _this.clickSound.play();
            
            _this.getVoice();
            
        },_this);
        
        
        _this.coinPannel = _this.add.sprite(40,123,'Level321_coinMachinePannel17_2');
        _this.coinPannel.scale.setTo(0.95,1);
        
        
      _this.Levercoin1 = _this.add.sprite(386,190,'Level321_coin1Anim');
        _this.Levercoin1.scale.setTo(0.8,0.8);
        _this.Levercoin1.visible = false;
        
      _this.Levercoin10 = _this.add.sprite(355,168,'Level321_coin10Anim');
        _this.Levercoin10.visible = false; 

       
        
        _this.topbar = _this.add.sprite(400,51,'Level321_5');
         _this.topbar.name = "Level321_5";
         _this.topbar.scale.setTo(0.8,0.8);
        
       
        _this.displayNumber1 = 0;
        _this.displayNumber2 = 0;
        _this.displayNumber3 = 0;
        
       

        _this.numBoxNum1 = _this.add.sprite(698,278,'Level321_numberSmall17_2');
       
        _this.numBoxNum1.scale.setTo(1.5,1.5);
        //_this.numBoxNum1.frame  = 1;
        _this.numBoxNum1.visible = false;
        //_this.addNumberPad();
       _this.generateStarsForTheScene(6);
        //  _this.no1++;
        //_this.getVoice();
        _this.getQuestion();
        
        
    },
   
    
    addListeners:function(target){
      target.input.enableDrag();
        target.events.onDragStart.add(_this.onDragStart, this);
    	target.events.onDragStop.add(_this.onDragStop, this);
    	
    },
    
    
    AllVisible:function(){
        
        _this.bluecoin=this.add.sprite(550,40,'Level321_Coin10');
                            _this.bluecoin.visible=false;
                            _this.bluecoin.scale.setTo(0.8,0.8);
                            _this.bluecoin.frame=9;
        _this.bluecoin1=this.add.sprite(810,40,'Level321_Coin10');
                            _this.bluecoin1.visible=false;
                            _this.bluecoin1.scale.setTo(0.8,0.8);
                            _this.bluecoin1.frame=9;
        _this.yellowcoin=this.add.sprite(610,40,'Level321_Coin1');
                            _this.yellowcoin.visible=false;
                            _this.yellowcoin.scale.setTo(0.8,0.8);
                            _this.yellowcoin.frame=9;
        _this.yellowcoin1=this.add.sprite(870,40,'Level321_Coin1');
                            _this.yellowcoin1.visible=false;
                            _this.yellowcoin1.scale.setTo(0.8,0.8);
                            _this.yellowcoin1.frame=9;
         _this.yellowcoin2=this.add.sprite(605,220,'Level321_Coin1');
                            _this.yellowcoin2.visible=false;
                            _this.yellowcoin2.scale.setTo(0.8,0.8);
                            _this.yellowcoin2.frame=9;
        _this.yellowcoin3=this.add.sprite(870,220,'Level321_Coin1');
                            _this.yellowcoin3.visible=false;
                            _this.yellowcoin3.scale.setTo(0.8,0.8);
                            _this.yellowcoin3.frame=9;
        _this.bluecoin3=this.add.sprite(550,220,'Level321_Coin10');
                            _this.bluecoin3.visible=false;
                            _this.bluecoin3.scale.setTo(0.8,0.8);
                            _this.bluecoin3.frame=9;
        _this.bluecoin4=this.add.sprite(810,220,'Level321_Coin10');
                            _this.bluecoin4.visible=false;
                            _this.bluecoin4.scale.setTo(0.8,0.8);
                            _this.bluecoin4.frame=9;
        
       
        
    },
    
    onDragStart:function(target){
        
    	console.log("startdrag");
         console.log(target.x);
        console.log(target.y);
        console.log("increment value="+inc1);
        console.log("n1="+(Number(_this.assign1)-2));
      targetCoordinatesX = target.x;
    	targetCoordinatesY = target.y;
        
        
        
        click1 = this.add.audio('ClickSound');
        click1.play();
        
    },
    onDragStop:function(target){
        console.log("targetvalue");
        
 console.log(_this.displayNumber2);
       
        if((Number(_this.assign3)==2))
            {
               
           if(target.name=="blue"&&((_this.displayNumber2==1)||(_this.displayNumber2==3)||(_this.displayNumber2==5)))
               {
                   
                   if (this.checkOverlap(target,wronggraphics1))
                        {
                           if(_this.displayNumber1==3)
                                {
                                k++;
                                    if(k<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                        
                                            console.log("inc1="+inc1);
                                            console.log("k value="+k);
                                            console.log("inc1 value="+inc1);
                                            target.destroy();
                                            randarr1.length--;
                                            _this.bluecoin.visible = true;
                                            _this.bluecoin.frame = k;
                                            }
                                     else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            if(_this.displayNumber1==7)
                                {
                                k++;
                                    if(k<3){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                       
                                            console.log("k value="+k);
                                            console.log("inc1 value="+inc1);
                                            target.destroy();
                                           randarr1.length--;
                                            _this.bluecoin.visible = true;
                                            _this.bluecoin.frame = k;
                                            }
                                     else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            
                             if(_this.displayNumber1==5)
                                {
                                k++;
                                    if(k<2){
                                            //_this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            console.log("k value="+k);
                                            console.log("inc1 value="+inc1);
                                            target.destroy();
                                        randarr1.length--;
                                            _this.bluecoin.visible = true;
                                            _this.bluecoin.frame = k;
                                            }
                                     else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            if(_this.displayNumber1==9)
                                {
                                k++;
                                    if(k<4){
                                            //_this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            console.log("k value="+k);
                                            console.log("inc1 value="+inc1);
                                            target.destroy();
                                        randarr1.length--;
                                            _this.bluecoin.visible = true;
                                            _this.bluecoin.frame = k;
                                            }
                                     else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            console.log("inc1="+inc1);
                            if(inc1==(Number(_this.assign1)-2)&&doInc==0)
                                {
                                    console.log("inc1="+inc1);
                                    console.log("no1="+(Number(_this.assign1)-2));
                                    
                                    
                                    _this.enableYellowCoins();
                                }
                            
                                
                            }
                
                      else if (this.checkOverlap(target,wronggraphics2))
                        {
                            if(_this.displayNumber1==3)
                                {
                                t++;
                                    if(t<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                                inc1++;
                                        console.log("inc1="+inc1);
                                                console.log("t value="+t);
                                               target.destroy();
                                        randarr1.length--;
                                              _this.bluecoin1.frame=t;
                                                _this.bluecoin1.visible=true;
                                            }
                                      else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            if(_this.displayNumber1==7)
                                {
                                t++;
                                    if(t<3){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                                inc1++;
                                                console.log("t value="+t);
                                               target.destroy();
                                        randarr1.length--;
                                              _this.bluecoin1.frame=t;
                                                _this.bluecoin1.visible=true;
                                            }
                                      else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                             if(_this.displayNumber1==5)
                                {
                                t++;
                                    if(t<2){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                                inc1++;
                                                console.log("t value="+t);
                                               target.destroy();
                                        randarr1.length--;
                                              _this.bluecoin1.frame=t;
                                                _this.bluecoin1.visible=true;
                                            }
                                      else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            if(_this.displayNumber1==9)
                                {
                                t++;
                                    if(t<4){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                                inc1++;
                                                console.log("t value="+t);
                                               target.destroy();
                                        randarr1.length--;
                                              _this.bluecoin1.frame=t;
                                                _this.bluecoin1.visible=true;
                                            }
                                      else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            console.log("inc1="+inc1);
                                    console.log("no1="+(Number(_this.assign1)-1));
                            if(inc1==(Number(_this.assign1)-2)&&doInc==0)
                                {
                                    console.log("inc1="+inc1);
                                    console.log("no1="+(Number(_this.assign1)-1));
                                    _this.enableYellowCoins();
                                }
                            
                           
                        }
                 
                    else if (this.checkOverlap(_this.slot1, target)&&(enablecoin==1))
                        {
                            
                            //_this.coinFall = this.add.audio('coinFall');
                         //_this.coinFall.play();
                            snap1 = this.add.audio('snapSound');
                                        snap1.play();
                           target.destroy();
                            _this.AnimOpt1.stop();
                            _this.slot1.frame=0;
                            _this.firstTimeIn = true;
                            
                              this.timerForAnim = this.time.create(false);
                         _this.timerForAnim.loop(400, function(){
                             
                             _this.Levercoin1.visible = true;
                        this.coinFall = this.add.audio('coinFall');
                         _this.coinFall.play();
                        _this.Levercoin1.animations.add('Level321_coin1Anim',_this.animArrayCoin1);
                         _this.Levercoin1.animations.play('Level321_coin1Anim',200);
                              _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
                              _this.Levercoin1.visible = false;
                                console.log("ininin");
                               _this.animArrayCoin1.pop(); 
                               _this.animArrayCoin1.pop();
                               _this.animArrayCoin1.pop();
                             _this.Coin1.visible =true;
                                  if( _this.firstTimeIn){
                               _this.Coin1.frame = 0;
                                 _this.firstTimeIn = false
                            }
                            else{
                                _this.Coin1.frame++;
                            }
                                if( _this.Coin1.frame == 9 ){
                                    _this.timerForAnim.stop();
                                    _this.Coin1.frame--;
                                     _this.newYellowCoins();
                                }
                                 
                              },this);
                         },this);

                        _this.timerForAnim.start();
                       
                        }
                   else
                       {
                           target.x = targetCoordinatesX;
                           target.y = targetCoordinatesY;
                       }
               
               }
                
             if(target.name=="yellow"&&((_this.displayNumber2==1)||(_this.displayNumber2==3)||(_this.displayNumber2==5)))
               {
                   
                   console.log("hhh value="+hhh);
                   console.log("n2="+(Number(_this.assign2)-1));
                   if (this.checkOverlap(target,wronggraphics1))
                        {
                            if(_this.displayNumber2==1)
                                {
                            if(_this.displayNumber1==3&&(u<0)&&done==0)
                                {
                                     u++;
                                    if((u<1)&&done==0){
                                       // _this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        hhh++;
                                        target.destroy();
                                        
                                        _this.yellowcoin.frame=u;
                                        _this.yellowcoin.visible=true;
                                    }
                                  
                                    
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                            if(_this.displayNumber1==3&&(u<4)&&done==1)
                                {
                                    console.log("uuuuuu value="+u);
                                     u++;
                                     console.log("uuuuuu value="+u);
                                    if((u<5)&&(done==1)){
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //hhh++;
                                         
                                        console.log("counted1="+counted1);
                                        target.destroy();
                                        //randarr1.length--;
                                        _this.yellowcoin.frame=u;
                                        _this.yellowcoin.visible=true;
                                        console.log("uuuuuu value="+u);
                                        /*if(u==5){
                                            console.log("visited");
                                            showNum1=1;
                                        }*/
                                        
                                        
                                    }
                                    
                                    
                                }
                    
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                                    
                                    
                                }
                            
                            if(_this.displayNumber2==3)
                                {
                            if(_this.displayNumber1==7&&(u<1)&&done==0)
                                {
                                     u++;
                                    if((u<2)&&done==0){
                                       // _this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        hhh++;
                                        target.destroy();
                                        //randarr1.length--;
                                        _this.yellowcoin.frame=u;
                                        _this.yellowcoin.visible=true;
                                    }
                                    
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                            if(_this.displayNumber1==7&&(u<5)&&done==1)
                                {
                                    console.log("uuuuuu value="+u);
                                     u++;
                                     console.log("uuuuuu value="+u);
                                    if(u<6&&done==1){
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //hhh++;
                                        target.destroy();
                                        _this.yellowcoin.frame=u;
                                        _this.yellowcoin.visible=true;
                                       /* if(u==5){
                                            showNum1=1;
                                        }*/
                                    }
                                    
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                                }
                            
                            if(_this.displayNumber2==5)
                                {
                            if(_this.displayNumber1==5&&(u<2)&&done==0)
                                {
                                     u++;
                                    if((u<3)&&done==0){
                                       // _this.coinFall = this.add.audio('coinFall');
                                      //  _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        hhh++;
                                        target.destroy();
                                        //randarr1.length--;
                                        _this.yellowcoin.frame=u;
                                        _this.yellowcoin.visible=true;
                                    }
                                    
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                            if(_this.displayNumber1==5&&(u<6)&&done==1)
                                {
                                    console.log("uuuuuu value="+u);
                                     u++;
                                     console.log("uuuuuu value="+u);
                                    if(u<7&&done==1){
                                        //_this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //hhh++;
                                        target.destroy();
                                        _this.yellowcoin.frame=u;
                                        _this.yellowcoin.visible=true;
                                        /*if(u==7){
                                            showNum1=1;
                                        }*/
                                    }
                                    
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                                }
                            
                            if(_this.displayNumber2==3)
                                {
                            if(_this.displayNumber1==9&&(u<1)&&done==0)
                                {
                                     u++;
                                    if((u<2)&&done==0){
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        hhh++;
                                        target.destroy();
                                        //randarr1.length--;
                                        _this.yellowcoin.frame=u;
                                        _this.yellowcoin.visible=true;
                                    }
                                    
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                            if(_this.displayNumber1==9&&(u<5)&&done==1)
                                {
                                    console.log("uuuuuu value="+u);
                                     u++;
                                     console.log("uuuuuu value="+u);
                                    if((u<6)&&(done==1)){
                                       
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //hhh++;
                                        target.destroy();
                                        _this.yellowcoin.frame=u;
                                        _this.yellowcoin.visible=true;
                                        /*if(u==8){
                                            showNum1=1;
                                        }*/
                                    }
                                    
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                                }
                            
                            
                            
                            
                            
                            
                            
                            
                            
                                
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                         if(done==0&&_this.displayNumber2==1)
                                {   
                      
                        if((hhh==(Number(_this.assign2)-1)))
                                {
                                    console.log("hhh value="+hhh);
                                    console.log("num2="+(Number(_this.assign2)-1));
                            _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    
                                    enablecoin=1;
                                    countThing=1;
                                    done=1;
                                    hhh=0;
                                      for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                             randarr1[v].inputEnabled=true;
                                               
                                        }
                                    
                                }
                                }
                            
                             if(done==0&&_this.displayNumber2==3)
                                {   
                      
                        if((hhh==(Number(_this.assign2)-1)))
                                {
                                    console.log("hhh value="+hhh);
                                    console.log("num2="+(Number(_this.assign2)-1));
                            _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    countThing=1;
                                    done=1;
                                    hhh=0;
                                      for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                             randarr1[v].inputEnabled=true;
                                               
                                        }
                                     
                                }
                                }
                            
                            if(done==0&&_this.displayNumber2==5)
                                {   
                      
                        if((hhh==(Number(_this.assign2)-1)))
                                {
                                    console.log("hhh value="+hhh);
                                    console.log("num2="+(Number(_this.assign2)-1));
                            _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    countThing=1;
                                    done=1;
                                    hhh=0;
                                    for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                             randarr1[v].inputEnabled=true;
                                               
                                        }
                                     
                                    
                                }
                                }
                            
                            
                            if(_this.displayNumber1==3&&_this.displayNumber2==1)
                                {
                                            if(u==4&&w==4)
                                        {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                            if(_this.displayNumber1==7&&_this.displayNumber2==3)
                                {
                                            if(u==5&&w==5)
                                       {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                            if(_this.displayNumber1==5&&_this.displayNumber2==5)
                                {
                                            if(u==6&&w==6)
                                        {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                            if(_this.displayNumber1==9&&_this.displayNumber2==3)
                                {
                                            if(u==5&&w==5)
                                        {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                            if(done==0&&_this.displayNumber2==8)
                                {   
                      
                        if((hhh==(Number(_this.assign2)-1)))
                                {
                                    console.log("hhh value="+hhh);
                                    console.log("num2="+(Number(_this.assign2)-1));
                            _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    countThing=1;
                                    done=1;
                                    hhh=0;
                                    for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                             randarr1[v].inputEnabled=true;
                                               
                                        }
                                     
                                    
                                }
                                    
                                    
                                }
                            
                             /*if(showNum1==1&&showNum2==1)
                                {
                                    _this.addNumberPad();
                                }*/
                           
                        }
                   
                
                      else if (this.checkOverlap(target,wronggraphics2))
                        {
                             if(_this.displayNumber2==1)
                                {
                            if(_this.displayNumber1==3&&(w<3)&&done==0)
                                {
                                    w++;
                                    if((w<1)&&(done==0)){
                            //_this.coinFall = this.add.audio('coinFall');
                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                            hhh++;
                            console.log("w value="+w);
                             pressed2++;
                            target.destroy();
                            //randarr.length--;
                            _this.yellowcoin1.frame=w;
                            _this.yellowcoin1.visible=true;
                            }
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                     if(_this.displayNumber1==3&&(w<4)&&done==1)
                                {
                                    w++;
                                    if((w<5)&&(done==1)){
                            //_this.coinFall = this.add.audio('coinFall');
                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                           // hhh++;
                            console.log("w value="+w);
                            // pressed2++;
                            target.destroy();
                            
                            _this.yellowcoin1.frame=w;
                            _this.yellowcoin1.visible=true;
                                        /*if(w==5){
                                            showNum2=1;
                                        }*/
                            
                            }
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                        }
                            
                            
                            if(_this.displayNumber2==3)
                                {
                            if(_this.displayNumber1==7&&(w<1)&&done==0)
                                {
                                    w++;
                                    if((w<2)&&(done==0)){
                            //_this.coinFall = this.add.audio('coinFall');
                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                            hhh++;
                            console.log("w value="+w);
                             pressed2++;
                            target.destroy();
                            //randarr1.length--;
                            _this.yellowcoin1.frame=w;
                            _this.yellowcoin1.visible=true;
                            }
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                     if(_this.displayNumber1==7&&(w<5)&&done==1)
                                {
                                    w++;
                                    if((w<6)&&(done==1)){
                            //_this.coinFall = this.add.audio('coinFall');
                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                           // hhh++;
                            console.log("w value="+w);
                            // pressed2++;
                            target.destroy();
                            
                            _this.yellowcoin1.frame=w;
                            _this.yellowcoin1.visible=true;
                                        /*if(w==5){
                                            showNum2=1;
                                        }*/
                            }
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                        }
                            if(_this.displayNumber2==5)
                                {
                            if(_this.displayNumber1==5&&(w<2)&&done==0)
                                {
                                    w++;
                                    if((w<3)&&(done==0)){
                           // _this.coinFall = this.add.audio('coinFall');
                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                            hhh++;
                            console.log("w value="+w);
                             pressed2++;
                            target.destroy();
                            //randarr1.length--;
                            _this.yellowcoin1.frame=w;
                            _this.yellowcoin1.visible=true;
                            }
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                     if(_this.displayNumber1==5&&(w<6)&&done==1)
                                {
                                    w++;
                                    if((w<7)&&(done==1)){
                           // _this.coinFall = this.add.audio('coinFall');
                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                           // hhh++;
                            console.log("w value="+w);
                            // pressed2++;
                            target.destroy();
                            
                            _this.yellowcoin1.frame=w;
                            _this.yellowcoin1.visible=true;
                                        /*if(w==7){
                                            showNum2=1;
                                        }*/
                            }
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                        }
                            
                             if(_this.displayNumber2==3)
                                {
                            if(_this.displayNumber1==9&&(w<3)&&done==0)
                                {
                                    w++;
                                    if((w<2)&&(done==0)){
                            //_this.coinFall = this.add.audio('coinFall');
                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                            hhh++;
                            console.log("w value="+w);
                             pressed2++;
                            target.destroy();
                            //randarr1.length--;
                            _this.yellowcoin1.frame=w;
                            _this.yellowcoin1.visible=true;
                            }
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                     if(_this.displayNumber1==9&&(w<5)&&done==1)
                                {
                                    w++;
                                    if((w<6)&&(done==1)){
                            //_this.coinFall = this.add.audio('coinFall');
                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                           // hhh++;
                            console.log("w value="+w);
                            // pressed2++;
                            target.destroy();
                            
                            _this.yellowcoin1.frame=w;
                            _this.yellowcoin1.visible=true;
                                        /*if(w==8){
                                            showNum2=1;
                                        }*/
                            }
                                }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                        }
                            
                            
                            
                            
                            
                            
                                
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                    
                            
                            if(done==0&&_this.displayNumber2==1)
                                {
                                    if((hhh==(Number(_this.assign2)-1)))
                                {
                                    console.log("hhh value="+hhh);
                                    console.log("num2="+(Number(_this.assign2)-1));
                            _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                    
                                    hhh=0;
                                    
                                    
                                     for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                            randarr1[v].inputEnabled=true;
                                               
                                        }
                                     
                                  
                                   
                                }
                                }
                            
                            if(done==0&&_this.displayNumber2==3)
                                {
                                    if((hhh==(Number(_this.assign2)-1)))
                                {
                                    console.log("hhh value="+hhh);
                                    console.log("num2="+(Number(_this.assign2)-1));
                            _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                    
                                    hhh=0;
                                    
                                    console.log("---------------------------------------"+randarr1,randarr1.length);
                                    
                                      for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                             randarr1[v].inputEnabled=true;
                                               
                                        }
                                     
                                    
                                }
                                }
                            
                            if(done==0&&_this.displayNumber2==5)
                                {
                                    if((hhh==(Number(_this.assign2)-1)))
                                {
                                    console.log("hhh value="+hhh);
                                    console.log("num2="+(Number(_this.assign2)-1));
                            _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                    
                                    hhh=0;
                                    for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                             randarr1[v].inputEnabled=true;
                                               
                                        }
                                     
                                    
                                }
                                }
                            
                            if(done==0&&_this.displayNumber2==8)
                                {
                                    if((hhh==(Number(_this.assign2)-1)))
                                {
                                    console.log("hhh value="+hhh);
                                    console.log("num2="+(Number(_this.assign2)-1));
                            _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                    
                                    hhh=0;
                                    for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                             randarr1[v].inputEnabled=true;
                                               
                                        }
                                     
                                   
                                }
                                }
                            /*if(showNum1==1&&showNum2==1)
                                {
                                    console.log("come come");
                                    _this.addNumberPad();
                                }*/
                            if(_this.displayNumber1==3&&_this.displayNumber2==1)
                                {
                                            if(u==4&&w==4)
                                        {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                            if(_this.displayNumber1==7&&_this.displayNumber2==3)
                                {
                                            if(u==5&&w==5)
                                       {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            if(_this.displayNumber1==5&&_this.displayNumber2==5)
                                {
                                            if(u==6&&w==6)
                                        {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                             if(_this.displayNumber1==9&&_this.displayNumber2==3)
                                {
                                            if(u==5&&w==5)
                                        {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                          
                              
                        }
                   else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                  
                   
                  
               }
                else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                
                            

            }
        ///if the number is 3
        
                if((Number(_this.assign3)==3))
            {
               
           if(target.name=="blue")
               {
                   if (this.checkOverlap(_this.slot1, target)&&(enablecoin==1))
                                {
                                    //_this.coinFall = this.add.audio('coinFall');
                        // _this.coinFall.play();
                                    snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                    target.destroy();
                            _this.AnimOpt1.stop();
                            _this.slot1.frame=0;
                            _this.firstTimeIn = true;
                            
                              this.timerForAnim = this.time.create(false);
                         _this.timerForAnim.loop(400, function(){
                             
                             _this.Levercoin1.visible = true;
                        this.coinFall = this.add.audio('coinFall');
                         _this.coinFall.play();
                        _this.Levercoin1.animations.add('Level321_coin1Anim',_this.animArrayCoin1);
                         _this.Levercoin1.animations.play('Level321_coin1Anim',200);
                              _this.Levercoin1.animations.currentAnim.onComplete.add(function () {
                              _this.Levercoin1.visible = false;
                                console.log("ininin")
                               _this.animArrayCoin1.pop(); 
                               _this.animArrayCoin1.pop();
                               _this.animArrayCoin1.pop();
                             _this.Coin1.visible =true;
                                  if( _this.firstTimeIn){
                               _this.Coin1.frame = 0;
                                 _this.firstTimeIn = false
                            }
                            else{
                                _this.Coin1.frame++;
                            }
                                if( _this.Coin1.frame == 9 ){
                                    _this.timerForAnim.stop();
                                    _this.Coin1.frame--;
                                     _this.newYellowCoins();
                                }
                                 
                              },this);
                         },this);

                        _this.timerForAnim.start();
                                    
                                }
                   else
                       {
                           target.x = targetCoordinatesX;
                           target.y = targetCoordinatesY;
                       }
               
               }
                
             if(target.name=="yellow")
               {
                   
                    console.log("sss value="+sss);
                    console.log("n2="+(Number(_this.assign2)-1));
                   if (this.checkOverlap(target,wronggraphics1))
                        {
                            if(_this.displayNumber2==3)
                                {
                                    
                                     if(_this.displayNumber1==1&&z<0&&done==0)
                                         {
                                    z++;
                                    console.log("z====="+z);
                                             console.log("after z="+z);
                                    if((z<1)&&(done==0)){
                                        //_this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        sss++;
                                        console.log("z value="+z);
                                        target.destroy();
                                        _this.yellowcoin.frame=z;
                                        _this.yellowcoin.visible=true;
                                        
                                    }
                                         }
                                     else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                    if(_this.displayNumber1==1&&(z<3)&&(done==1))
                                         {
                                              console.log("before z="+z);
                                             z++;
                                              console.log("after z="+z);
                                    if(z<4){
                                        
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //sss++;
                                        console.log("z values="+z);
                                        //pressed++;
                                        target.destroy();
                                        _this.yellowcoin.frame=z;
                                        _this.yellowcoin.visible=true;
                                        /*if(z==3){
                                            showNum1=1;
                                        }*/
                                    }
                                         }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            if(_this.displayNumber2==1)
                                {
                                    
                                     if(_this.displayNumber1==1&&z<0&&done==0)
                                         {
                                    z++;
                                    console.log("z====="+z);
                                    if((z<1)&&(done==0)){
                                       // _this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        sss++;
                                        console.log("z value="+z);
                                        target.destroy();
                                        _this.yellowcoin.frame=z;
                                        _this.yellowcoin.visible=true;
                                        
                                    }
                                         }
                                     else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                    if(_this.displayNumber1==1&&(z<2)&&(done==1))
                                         {
                                              console.log("before z="+z);
                                             z++;
                                              console.log("after z="+z);
                                    if(z<3){
                                        
                                       // _this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //sss++;
                                        console.log("z values="+z);
                                        //pressed++;
                                        target.destroy();
                                        _this.yellowcoin.frame=z;
                                        _this.yellowcoin.visible=true;
                                        /*if(z==4){
                                            showNum1=1;
                                        }*/
                                    }
                                         }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                             
                            if(done==0&&_this.displayNumber2==3)
                                {
                            if(sss==(Number(_this.assign2)-1))
                                {
                                    console.log("sss value1="+sss);
                                    console.log("ewwwwww="+(Number(_this.assign2)-1));
                    console.log("n21="+(Number(_this.assign2)-1));
                                   _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                     if(done==1){
                                        console.log("th");
                                           // z=0;
                                         sss=0;
                                    }
                                    
                                }
                                }
                            if(done==0&&_this.displayNumber2==1)
                                {
                            if(sss==(Number(_this.assign2)-1))
                                {
                                    console.log("sss value1="+sss);
                                    console.log("ewwwwww="+(Number(_this.assign2)-1));
                    console.log("n21="+(Number(_this.assign2)-1));
                                   _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                     if(done==1){
                                        console.log("th");
                                           // z=0;
                                         sss=0;
                                    }
                                    
                                }
                                }
                            
                           if(_this.displayNumber1==1&&_this.displayNumber2==3)
                                {
                                    if(z==3&&e==3&&o==3){
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                            if(_this.displayNumber1==1&&_this.displayNumber2==1)
                                {
                                    if(z==2&&e==2&&o==2)
                                   {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                                
                            
                            
                          
                        }
                
                      else if (this.checkOverlap(target,wronggraphics2))
                        {
                            if(_this.displayNumber2==3)
                                {
                                    if(_this.displayNumber1==1&&e<0&&done==0)
                                         {
                                    e++;
                                    if(e<1&&(done==0)){
                                       // _this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        sss++;
                                        console.log("e value="+e);
                                        pressed++;
                                        target.destroy();
                                        _this.yellowcoin1.frame=e;
                                        _this.yellowcoin1.visible=true;
                                    }
                                         }
                                                else
                                            {
                                                target.x = targetCoordinatesX;
                                                target.y = targetCoordinatesY;
                                            }
                                    if(_this.displayNumber1==1&&(e<3)&&(done==1))
                                         {
                                             e++;
                                    if(e<4){
                                        
                                        //_this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //sss++;
                                        console.log("e values="+e);
                                        //pressed++;
                                        target.destroy();
                                        _this.yellowcoin1.frame=e;
                                        _this.yellowcoin1.visible=true;
                                        /*if(e==3){
                                            showNum2=1;
                                        }*/
                                    }
                                         }
                                             else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                
                                
                                       
                                }
                            
                            if(_this.displayNumber2==1)
                                {
                                    if(_this.displayNumber1==1&&e<0&&done==0)
                                         {
                                    e++;
                                    if(e<1&&(done==0)){
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        sss++;
                                        console.log("e value="+e);
                                        pressed++;
                                        target.destroy();
                                        _this.yellowcoin1.frame=e;
                                        _this.yellowcoin1.visible=true;
                                    }
                                         }
                                                else
                                            {
                                                target.x = targetCoordinatesX;
                                                target.y = targetCoordinatesY;
                                            }
                                    if(_this.displayNumber1==1&&(e<2)&&(done==1))
                                         {
                                             e++;
                                    if(e<3){
                                        
                                        //_this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //sss++;
                                        console.log("e values="+e);
                                        //pressed++;
                                        target.destroy();
                                        _this.yellowcoin1.frame=e;
                                        _this.yellowcoin1.visible=true;
                                        /*if(e==4){
                                            showNum2=1;
                                        }*/
                                    }
                                         }
                                             else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                
                                
                                       
                                }
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                            
                            if(done==0&&_this.displayNumber2==3)
                            {
                                
                            if(sss==(Number(_this.assign2)-1))
                                {
                                    console.log("inc1="+inc1);
                        console.log("no1="+(Number(_this.assign1)-1));
                                    _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                    if(done==1){
                                        console.log("th");
                                           // z=0;
                                         sss=0;
                                    }
                                    
                                }
                            }
                            
                             if(done==0&&_this.displayNumber2==1)
                            {
                                
                            if(sss==(Number(_this.assign2)-1))
                                {
                                    console.log("inc1="+inc1);
                        console.log("no1="+(Number(_this.assign1)-1));
                                    _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                    if(done==1){
                                        console.log("th");
                                           // z=0;
                                         sss=0;
                                    }
                                    
                                }
                            }
                            
                            
                            if(_this.displayNumber1==1&&_this.displayNumber2==3)
                                {
                                    if(z==3&&e==3&&o==3){
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            
                            if(_this.displayNumber1==1&&_this.displayNumber2==1)
                                {
                                    if(z==2&&e==2&&o==2)
                                   {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                        
                        }
                   else if (this.checkOverlap(target,wronggraphics3))
                        {
                             if(_this.displayNumber2==3)
                                {
                                    if(_this.displayNumber1==1&&o<0&&done==0)
                                         {
                                    o++;
                                    if(o<1&&(done==0)){
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        sss++;
                                        console.log("o value="+o);
                                        pressed1++;
                                        target.destroy();
                                        _this.yellowcoin2.frame=o;
                                        _this.yellowcoin2.visible=true;
                                    }
                                         }
                                    else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                    if(_this.displayNumber1==1&&(o<3)&&(done==1))
                                         {
                                             o++;
                                    if(o<4){
                                        
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //sss++;
                                        console.log("o values="+o);
                                        //pressed++;
                                        target.destroy();
                                        _this.yellowcoin2.frame=o;
                                        _this.yellowcoin2.visible=true;
                                        /*if(o==3){
                                            showNum3=1;
                                        }*/
                                    }
                                         }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            
                            if(_this.displayNumber2==1)
                                {
                                    if(_this.displayNumber1==1&&o<0&&done==0)
                                         {
                                    o++;
                                    if(o<1&&(done==0)){
                                       // _this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        sss++;
                                        console.log("o value="+o);
                                        pressed1++;
                                        target.destroy();
                                        _this.yellowcoin2.frame=o;
                                        _this.yellowcoin2.visible=true;
                                    }
                                         }
                                    else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                    if(_this.displayNumber1==1&&(o<2)&&(done==1))
                                         {
                                             o++;
                                    if(o<3){
                                        
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        //sss++;
                                        console.log("o values="+o);
                                        //pressed++;
                                        target.destroy();
                                        _this.yellowcoin2.frame=o;
                                        _this.yellowcoin2.visible=true;
                                        /*if(o==4){
                                            showNum3=1;
                                        }*/
                                    }
                                         }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                           
                            
                            if(done==0&&_this.displayNumber2==3)
                            {
                            if(sss==(Number(_this.assign2)-1))
                                {
                                    console.log("inc1="+inc1);
                                    console.log("no1="+(Number(_this.assign1)-1));
                                   _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                    if(done==1){
                                        console.log("th");
                                           // z=0;
                                         sss=0;
                                    }
                                }
                           
                            }
                            
                            if(done==0&&_this.displayNumber2==1)
                            {
                            if(sss==(Number(_this.assign2)-1))
                                {
                                    console.log("inc1="+inc1);
                                    console.log("no1="+(Number(_this.assign1)-1));
                                   _this.AnimOpt1 =_this.slot1.animations.add('flag1',["a2","a1"]);
                            _this.AnimOpt1.play(2.8,true);
                                    enablecoin=1;
                                    done=1;
                                    if(done==1){
                                        console.log("th");
                                           // z=0;
                                         sss=0;
                                    }
                                }
                           
                            }
                            
                            if(_this.displayNumber1==1&&_this.displayNumber2==3)
                                {
                                    if(z==3&&e==3&&o==3){
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                            if(_this.displayNumber1==1&&_this.displayNumber2==1)
                                {
                                    if(z==2&&e==2&&o==2)
                                   {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                                }
                        }
                   
                           else
                               {
                                   target.x = targetCoordinatesX;
                                   target.y = targetCoordinatesY;
                               }

               }

            }
        ///number is 4
          if((Number(_this.assign3)==4))
            {
               
           if(target.name=="blue")
               {
                   if (this.checkOverlap(target, wronggraphics1))
                        {
                            if(_this.displayNumber1==8&&_this.displayNumber2==7)
                                {
                                    q++;
                                    if(q<2){
                                        //_this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        inc1++;
                                        target.destroy();
                                        console.log("q value="+q);
                                        _this.bluecoin.visible = true;
                                        _this.bluecoin.frame = q;
                                            }
                                       else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==5)
                                {
                                    q++;
                                    if(q<1){
                                       // _this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        inc1++;
                                        target.destroy();
                                        console.log("q value="+q);
                                        _this.bluecoin.visible = true;
                                        _this.bluecoin.frame = q;
                                        
                                            }
                                       else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==7)
                                {
                                    q++;
                                    if(q<1){
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        inc1++;
                                        target.destroy();
                                        console.log("q value="+q);
                                        _this.bluecoin.visible = true;
                                        _this.bluecoin.frame = q;
                                            }
                                       else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            if(_this.displayNumber1==8&&_this.displayNumber2==6)
                                {
                                    q++;
                                    if(q<2){
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        inc1++;
                                        target.destroy();
                                        console.log("q value="+q);
                                        _this.bluecoin.visible = true;
                                        _this.bluecoin.frame = q;
                                            }
                                       else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                             
                            
                            //_this.enableYellowCoins();
                            
                            if(inc1==(Number(_this.assign1)-1))
                                {
                                    console.log("inc1="+inc1);
                        console.log("no1="+(Number(_this.assign1)-1));
                                    _this.enableYellowCoins();
                                }
                        }
                
                      else if (this.checkOverlap(target,wronggraphics2))
                        {
                             if(_this.displayNumber1==8&&_this.displayNumber2==7)
                                {
                                    l++;
                                    if(l<2){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            target.destroy();
                                            _this.bluecoin1.frame=l;
                                            _this.bluecoin1.visible=true;
                                            }
                                             else
                                                {
                                                    target.x = targetCoordinatesX;
                                                    target.y = targetCoordinatesY;
                                                }
                                }
                            
                             if(_this.displayNumber1==4&&_this.displayNumber2==5)
                                {
                                    l++;
                                    if(l<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            target.destroy();
                                            _this.bluecoin1.frame=l;
                                            _this.bluecoin1.visible=true;
                                            }
                                             else
                                                {
                                                    target.x = targetCoordinatesX;
                                                    target.y = targetCoordinatesY;
                                                }
                                }
                            if(_this.displayNumber1==4&&_this.displayNumber2==7)
                                {
                                    l++;
                                    if(l<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            target.destroy();
                                            _this.bluecoin1.frame=l;
                                            _this.bluecoin1.visible=true;
                                            }
                                             else
                                                {
                                                    target.x = targetCoordinatesX;
                                                    target.y = targetCoordinatesY;
                                                }
                                }
                            
                            if(_this.displayNumber1==8&&_this.displayNumber2==6)
                                {
                                    l++;
                                    if(l<2){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            target.destroy();
                                            _this.bluecoin1.frame=l;
                                            _this.bluecoin1.visible=true;
                                            }
                                             else
                                                {
                                                    target.x = targetCoordinatesX;
                                                    target.y = targetCoordinatesY;
                                                }
                                }
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                            if(inc1==(Number(_this.assign1)-1))
                                {
                                    console.log("inc1="+inc1);
                        console.log("no1="+(Number(_this.assign1)-1));
                                    _this.enableYellowCoins();
                                }
                           
                        }
                   else if (this.checkOverlap(target,wronggraphics3))
                        {
                             if(_this.displayNumber1==8&&_this.displayNumber2==7)
                                {
                                    n++;
                                    if(n<2){
                                    //_this.coinFall = this.add.audio('coinFall');
                                    //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                    inc1++;
                                    target.destroy();
                                     _this.bluecoin3.frame=n;
                                    _this.bluecoin3.visible=true;
                             
                                    }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                             
                             if(_this.displayNumber1==4&&_this.displayNumber2==5)
                                {
                                    n++;
                                    if(n<1){
                                           // _this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            target.destroy();
                                            _this.bluecoin3.frame=n;
                                            _this.bluecoin3.visible=true;
                                            }
                                             else
                                                {
                                                    target.x = targetCoordinatesX;
                                                    target.y = targetCoordinatesY;
                                                }
                                }
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==7)
                                {
                                    n++;
                                    if(n<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            target.destroy();
                                            _this.bluecoin3.frame=n;
                                            _this.bluecoin3.visible=true;
                                            }
                                             else
                                                {
                                                    target.x = targetCoordinatesX;
                                                    target.y = targetCoordinatesY;
                                                }
                                }
                            
                            if(_this.displayNumber1==8&&_this.displayNumber2==6)
                                {
                                    n++;
                                    if(n<2){
                                   // _this.coinFall = this.add.audio('coinFall');
                                  //  _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                    inc1++;
                                    target.destroy();
                                     _this.bluecoin3.frame=n;
                                    _this.bluecoin3.visible=true;
                             
                                    }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                           
                            if(inc1==(Number(_this.assign1)-1))
                                {
                                    console.log("inc1="+inc1);
                        console.log("no1="+(Number(_this.assign1)-1));
                                    _this.enableYellowCoins();
                                }
                           
                        }
                   else if (this.checkOverlap(target, wronggraphics4))
                        {
                             if(_this.displayNumber1==8&&_this.displayNumber2==7)
                                {
                                    h++;
                                    if(h<2){
                                        //_this.coinFall = this.add.audio('coinFall');
                                       // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        inc1++;
                                        target.destroy();
                                         _this.bluecoin4.frame=h;
                                        _this.bluecoin4.visible=true;
                                        //_this.enableYellowCoins();
                                        }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                             
                             if(_this.displayNumber1==4&&_this.displayNumber2==5)
                                {
                                    h++;
                                    if(h<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            target.destroy();
                                            _this.bluecoin4.frame=h;
                                            _this.bluecoin4.visible=true;
                                        console.log("inc1="+inc1);
                        console.log("no1="+(Number(_this.assign1)-1));
                                            }
                                             else
                                                {
                                                    target.x = targetCoordinatesX;
                                                    target.y = targetCoordinatesY;
                                                }
                                }
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==7)
                                {
                                    h++;
                                    if(h<1){
                                           // _this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            inc1++;
                                            target.destroy();
                                            _this.bluecoin4.frame=h;
                                            _this.bluecoin4.visible=true;
                                            }
                                             else
                                                {
                                                    target.x = targetCoordinatesX;
                                                    target.y = targetCoordinatesY;
                                                }
                                }
                            
                            if(_this.displayNumber1==8&&_this.displayNumber2==6)
                                {
                                    h++;
                                    if(h<2){
                                        //_this.coinFall = this.add.audio('coinFall');
                                        //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                        inc1++;
                                        target.destroy();
                                         _this.bluecoin4.frame=h;
                                        _this.bluecoin4.visible=true;
                                        
                                        //_this.enableYellowCoins();
                                        }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                           
                            if(inc1==(Number(_this.assign1)-1))
                                {
                                    console.log("inc1="+inc1);
                        console.log("no1="+(Number(_this.assign1)-1));
                                    _this.enableYellowCoins();
                                }
                          
                          
                           
                        }
                   ///////////////////////////
                   else
                       {
                           target.x = targetCoordinatesX;
                           target.y = targetCoordinatesY;
                       }
               
               }
                
             if(target.name=="yellow")
               {
                   if (this.checkOverlap(target,wronggraphics1))
                        {
                            if(_this.displayNumber1==8&&_this.displayNumber2==7&&(a<0))
                                {
                                    a++;
                                    if(a<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("a value="+a);
                                            target.destroy();
                                            _this.yellowcoin.frame=a;
                                            _this.yellowcoin.visible=true;
                                        /*if(a==0)
                                            {
                                                showNum1=1;
                                            }*/
                                            }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            if(_this.displayNumber1==4&&_this.displayNumber2==5&&(a<0))
                                {
                                    a++;
                                    if(a<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("a value="+a);
                                            target.destroy();
                                            _this.yellowcoin.frame=a;
                                            _this.yellowcoin.visible=true;
                                        /*if(a==0)
                                            {
                                                showNum1=1;
                                            }*/
                                            }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                             if(_this.displayNumber1==4&&_this.displayNumber2==7&&(a<0))
                                {
                                    a++;
                                    if(a<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("a value="+a);
                                            target.destroy();
                                            _this.yellowcoin.frame=a;
                                            _this.yellowcoin.visible=true;
                                        /*if(a==1)
                                            {
                                                showNum1=1;
                                            }*/
                                            }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                             if(_this.displayNumber1==8&&_this.displayNumber2==6&&(a<0))
                                {
                                    a++;
                                    if(a<1){
                                            //_this.coinFall = this.add.audi&&(a<0)o('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("a value="+a);
                                            target.destroy();
                                            _this.yellowcoin.frame=a;
                                            _this.yellowcoin.visible=true;
                                       /* if(a==1)
                                            {
                                                showNum1=1;
                                            }*/
                                            }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                          if(_this.displayNumber1==4&&_this.displayNumber2==5)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==4&&_this.displayNumber2==7)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==8&&_this.displayNumber2==7)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==8&&_this.displayNumber2==6)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                             
                            
                        }
                
                      else if (this.checkOverlap(target,wronggraphics2))
                        {
                            if(_this.displayNumber1==8&&_this.displayNumber2==7&&(b<0))
                                {
                                    b++;
                                    if(b<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("b value="+b);
                                            target.destroy();
                                            _this.yellowcoin1.frame=b;
                                            _this.yellowcoin1.visible=true;
                                        /*if(b==0)
                                            {
                                                showNum2=1;
                                            }*/
                                            }
                                                else
                                            {
                                                target.x = targetCoordinatesX;
                                                target.y = targetCoordinatesY;
                                            }
                                }
                            
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==5&&(b<0))
                                {
                                    b++;
                                    if(b<1){
                                           // _this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("b value="+b);
                                            target.destroy();
                                            _this.yellowcoin1.frame=b;
                                            _this.yellowcoin1.visible=true;
                                        /*if(b==0)
                                            {
                                                showNum2=1;
                                            }*/
                                            }
                                                else
                                            {
                                                target.x = targetCoordinatesX;
                                                target.y = targetCoordinatesY;
                                            }
                                }
                            if(_this.displayNumber1==4&&_this.displayNumber2==7&&(b<0))
                                {
                                    b++;
                                    if(b<1){
                                           // _this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("b value="+b);
                                            target.destroy();
                                            _this.yellowcoin1.frame=b;
                                            _this.yellowcoin1.visible=true;
                                        /*if(b==1)
                                            {
                                                showNum2=1;
                                            }*/
                                            }
                                                else
                                            {
                                                target.x = targetCoordinatesX;
                                                target.y = targetCoordinatesY;
                                            }
                                }
                            
                            if(_this.displayNumber1==8&&_this.displayNumber2==6&&(b<0))
                                {
                                    b++;
                                    if(b<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("b value="+b);
                                            target.destroy();
                                            _this.yellowcoin1.frame=b;
                                            _this.yellowcoin1.visible=true;
                                        /*if(b==1)
                                            {
                                                showNum2=1;
                                            }*/
                                            }
                                                else
                                            {
                                                target.x = targetCoordinatesX;
                                                target.y = targetCoordinatesY;
                                            }
                                }
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            if(_this.displayNumber1==4&&_this.displayNumber2==5)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            
                             if(_this.displayNumber1==4&&_this.displayNumber2==7)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==8&&_this.displayNumber2==7)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==8&&_this.displayNumber2==6)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                          
                        }
                   else if (this.checkOverlap(target,wronggraphics3))
                        {
                            if(_this.displayNumber1==8&&_this.displayNumber2==7&&(c<0))
                                {
                                    c++;
                                    if(c<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("c value="+c);
                                            target.destroy();
                                            _this.yellowcoin2.frame=c;
                                            _this.yellowcoin2.visible=true;
                                        /*if(c==0)
                                            {
                                                showNum3=1;
                                            }*/
                                    }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==5&&(c<0))
                                {
                                    c++;
                                    if(c<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("c value="+c);
                                            target.destroy();
                                            _this.yellowcoin2.frame=c;
                                            _this.yellowcoin2.visible=true;
                                        /*if(c==0)
                                            {
                                                showNum3=1;
                                            }*/
                                    }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==7&&(c<0))
                                {
                                    c++;
                                    if(c<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("c value="+c);
                                            target.destroy();
                                            _this.yellowcoin2.frame=c;
                                            _this.yellowcoin2.visible=true;
                                       /* if(c==1)
                                            {
                                                showNum3=1;
                                            }*/
                                    }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            if(_this.displayNumber1==8&&_this.displayNumber2==6&&(c<0))
                                {
                                    c++;
                                    if(c<1){
                                           // _this.coinFall = this.add.audio('coinFall');
                                            //_this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("c value="+c);
                                            target.destroy();
                                            _this.yellowcoin2.frame=c;
                                            _this.yellowcoin2.visible=true;
                                        /*if(c==1)
                                            {
                                                showNum3=1;
                                            }*/
                                    }
                                            else
                                        {
                                            target.x = targetCoordinatesX;
                                            target.y = targetCoordinatesY;
                                        }
                                }
                            
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==5)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            
                             if(_this.displayNumber1==4&&_this.displayNumber2==7)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==8&&_this.displayNumber2==7)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==8&&_this.displayNumber2==6)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                          
                        }
                   else if (this.checkOverlap(target,wronggraphics4))
                        {
                            if(_this.displayNumber1==8&&_this.displayNumber2==7&&(s<0))
                                {
                                    s++;
                                    if(s<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("s value="+s);
                                            target.destroy();
                                            _this.yellowcoin3.frame=s;
                                            _this.yellowcoin3.visible=true;
                                        /*if(s==0)
                                            {
                                                showNum4=1;
                                            }*/
                                            }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            if(_this.displayNumber1==4&&_this.displayNumber2==5&&(s<0))
                                {
                                    s++;
                                    if(s<1){
                                           // _this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("s value="+s);
                                            target.destroy();
                                            _this.yellowcoin3.frame=s;
                                            _this.yellowcoin3.visible=true;
                                        /*if(s==0)
                                            {
                                                showNum4=1;
                                            }*/
                                            }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            if(_this.displayNumber1==4&&_this.displayNumber2==7&&(s<0))
                                {
                                    s++;
                                    if(s<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("s value="+s);
                                            target.destroy();
                                            _this.yellowcoin3.frame=s;
                                            _this.yellowcoin3.visible=true;
                                        /*if(s==1)
                                            {
                                                showNum4=1;
                                            }*/
                                            }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                            
                            if(_this.displayNumber1==8&&_this.displayNumber2==6&&(s<0))
                                {
                                    s++;
                                    if(s<1){
                                            //_this.coinFall = this.add.audio('coinFall');
                                           // _this.coinFall.play();
                                        snap1 = this.add.audio('snapSound');
                                        snap1.play();
                                            console.log("s value="+s);
                                            target.destroy();
                                            _this.yellowcoin3.frame=s;
                                            _this.yellowcoin3.visible=true;
                                        /*if(s==1)
                                            {
                                                showNum4=1;
                                            }*/
                                            }
                                    else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                                }
                           
                            else
                                {
                                    target.x = targetCoordinatesX;
                                    target.y = targetCoordinatesY;
                                }
                            if(_this.displayNumber1==4&&_this.displayNumber2==5)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            
                             if(_this.displayNumber1==4&&_this.displayNumber2==7)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==8&&_this.displayNumber2==7)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            if(_this.displayNumber1==8&&_this.displayNumber2==6)
                          {
                          if(a==0&&b==0&&c==0&&s==0)
                                {
                                            counted1++;
                                            if(counted1==1)
                                                {
                                                    
                                                
                                            console.log("here shud cm");
                                            _this.addNumberPad();
                                                }
                                        }
                          }
                            
                          
                        }
                   else
                       {
                           target.x = targetCoordinatesX;
                           target.y = targetCoordinatesY;
                       }
               
               }

            }
       
    },
   
    newYellowCoins:function(){
        console.log("destroyall");
        _this.Coin1.destroy();
        
        for(g=0;g<10;g++)
        {
            
                randarrs.push(this.add.sprite(0,0,'Level321_Coin1'));
                
                randarrs[g].x=380;
                randarrs[g].y=215+(g*-16);
                randarrs[g].scale.setTo(0.8,0.8);
                randarrs[g].inputEnabled=true;
                randarrs[g].name="yellow";
                randarrs[g].events.onInputDown.add(_this.addListeners,this);
               
        }
        
    },
    

	checkOverlap:function(spriteA, spriteB) 
	{

	    var boundsA = spriteA.getBounds();
	    var boundsB = spriteB.getBounds();

	    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    
    updateTimer:function() {
     _this.counterForTimer++;
    // //console.log("lololil"+_this.counterForTimer);
     if(_this.counterForTimer>59)
         {
             _this.counterForTimer = 0;
             if(_this.minutes<10){
                 _this.minutes =  _this.minutes+1;
                 _this.seconds = 00;
             }
             else{
                 _this.minutes =  _this.minutes+1;
                 }
         }
    else{
            if (_this.counterForTimer < 10)        
	            _this.seconds = '0' + _this.counterForTimer;
            else
                _this.seconds = _this.counterForTimer;
        }
      _this.timeDisplay.setText(_this.minutes+':' + _this.seconds);
    },

    getQuestion:function()
    
    {  
                
counted1=0;
    console.log("get Question "+_this.no1);
     inc1=-1;
     done=0;
     done=0;
     hhh=-1;
     sss=-1;
     added=0;
     enablecoin=0;
                q=-1;
                l=-1;
                a=-1;
                b=-1;
                 c=-1;
                 d=-1;
                 p=-1;
                 g=-1;
                 m=-1;
                 n=-1;
                 h=-1;
                 s=-1;
     z=-1;
     e=-1;
     o=-1;
     k=-1;
     t=-1;
     u=-1;
     w=-1;
     _this.slot1 = _this.add.sprite(135,150,'Level172_slot');
         _this.slot1.name = "Level172_slot";
     _this.slot1.frame=0;
     
     _this.tray1 = _this.add.sprite(530,180,'Level172_tray');
         _this.tray1.name = "Level172_tray";
         _this.tray1.scale.setTo(1,1);
        
        _this.tray2 = _this.add.sprite(790,180,'Level172_tray');
         _this.tray2.name = "Level172_tray";
         _this.tray2.scale.setTo(1,1);
        
        _this.tray3 = _this.add.sprite(530,360,'Level172_tray');
         _this.tray3.name = "Level172_tray";
         _this.tray3.scale.setTo(1,1);
        
        _this.tray4 = _this.add.sprite(790,360,'Level172_tray');
         _this.tray4.name = "Level172_tray";
         _this.tray4.scale.setTo(1,1);
     
     _this.AllVisible();
     
        _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
        _this.animArrayCoin10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
     
     
      _this.askNumber1 = _this.add.sprite(10,5,'Level321_numberSmall17_2');
        // _this.askNumber1.frame = 1;
         _this.askNumber1.scale.setTo(0.7,0.7);
     _this.topbar.addChild(_this.askNumber1);
     
     
        
        _this.askNumber2 = _this.add.sprite(40,5,'Level321_numberSmall17_2');
       // _this.askNumber2.frame = 1;
         _this.askNumber2.scale.setTo(0.7,0.7);
     _this.topbar.addChild(_this.askNumber2);
        
        _this.askNumber3 = _this.add.sprite(100,5,'Level321_numberSmall17_2');
        // _this.askNumber3.frame = 1;
         _this.askNumber3.scale.setTo(0.7,0.7);
     _this.topbar.addChild(_this.askNumber3);
        
       _this.div = _this.add.sprite(80,25,'Level172_div');
     _this.div.name="Level172_div";
     _this.div.scale.setTo(1.2,1.2);
        _this.topbar.addChild(_this.div);
     
     
     
        
        _this.timer = _this.time.create(false);
         _this.displayNopad = true;
         _this.toCheckNumberPad = true;
          //  Set a TimerEvent to occur after 2 seconds
          _this.timer.loop(1000, function(){
               _this.AnsTimerCount++;
          }, this);
          //  Start the timer running - this is important!
          //  It won't start automatically, allowing you to hook it to button events and the like.
          _this.timer.start();
        
       /**************************************************************************/ 
        _this.timer1 = _this.time.create(false);
		      _this.timer1.loop(1000, function(){
                  _this.updateTimer();
		      }, _this);
		_this.timer1.start();
        /**************************************************************************/ 
        
        _this.speakerbtn.inputEnabled=true;
        _this.speakerbtn.input.useHandCursor = true;
     
                /*  _this.yellowcoin.destroy();
                    _this.Coin1.destroy();
                _this.bluecoin.destroy();
                    _this.Coin10.destroy();
     */
                    
                   // _this.numGroup.destroy();
        //console.log(" _this.no1"+ _this.qArrays[5]);
        // _this.no1 = 4;
    	switch( _this.qArrays[_this.no1])      
    	{
                
    		case 1: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 3;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 3;
                   // },this);
                    _this.displayNumber2 = 1;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =1;
                    //},this);
                    
                    _this.displayNumber3 = 2;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 2;
                    //},this);
                    
                    _this.toDisplayNoPad = 57; 
                    rightAns = 15;
                    rightAns1 = 1;
    				break;
    		case 2: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 7;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 7;
                   // },this);
                    _this.displayNumber2 = 3;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =3;
                    //},this);
                    
                    _this.displayNumber3 = 2;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 2;
                    //},this);
                    
                    _this.toDisplayNoPad = 57; 
                    rightAns = 36;
                rightAns1 = 1;
    				break;
    		case 3: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 5;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 5;
                   // },this);
                    _this.displayNumber2 = 5;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =5;
                    //},this);
                    
                    _this.displayNumber3 = 2;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 2;
                    //},this);
                    
                    _this.toDisplayNoPad = 57; 
                    rightAns = 27;
                rightAns1 = 1;
    				break;
    		case 4: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.graphicsfn();
                    _this.displayNumber1 = 4;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 4;
                   // },this);
                    _this.displayNumber2 = 5;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =5;
                    //},this);
                    
                    _this.displayNumber3 = 4;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    //},this);
                    
                    _this.toDisplayNoPad = 57; 
                    rightAns = 11;
                    rightAns1 = 1;
    				break;
    		case 5: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                   _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 1;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 1;
                   // },this);
                    _this.displayNumber2 = 3;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =3;
                    //},this);
                    
                    _this.displayNumber3 = 3;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 3;
                    //},this);
                    
                    _this.toDisplayNoPad = 57; 
                    rightAns = 4;
                    rightAns1 = 1;
    				break;
    		case 6: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                   _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 1;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 1;
                   // },this);
                    _this.displayNumber2 = 1;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =1;
                    //},this);
                    
                    _this.displayNumber3 = 3;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 3;
                    //},this);
                    
                    _this.toDisplayNoPad = 57; 
                    rightAns = 3;
                rightAns1 = 2;
    				break;
            case 7: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 4;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 4;
                   // },this);
                    _this.displayNumber2 = 7;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =7;
                    //},this);
                    
                    _this.displayNumber3 = 4;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    //},this);
                    
                    _this.toDisplayNoPad = 57; 
                    rightAns = 11;
                rightAns1 = 3;
    				break;
            case 8: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 8;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 8;
                   // },this);
                    _this.displayNumber2 = 7;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =7;
                    //},this);
                    
                    _this.displayNumber3 = 4;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    //},this);
                    
                    _this.toDisplayNoPad = 57; 
                    rightAns = 21;
                rightAns1 = 3;
    				break;
            case 9: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 9;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 9;
                   // },this);
                    _this.displayNumber2 = 3;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =3;
                    //},this);
                    
                    _this.displayNumber3 = 2;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 2;
                    //},this);
                    
                    _this.toDisplayNoPad = 12; 
                    rightAns = 46;
                rightAns1 = 1;
    				break;
          case 10: _this.questionid = "17_2#SCR-"+_this.sceneCount;
                    _this.inputDownFunctionForLeverAndBox();
                    _this.graphicsfn();
                    _this.displayNumber1 = 8;
                   // _this.time.events.add(200, function(){
                    _this.askNumber1.frame = 8;
                   // },this);
                    _this.displayNumber2 = 6;
                    //_this.time.events.add(1500, function(){
                    _this.askNumber2.frame =6;
                    //},this);
                    
                    _this.displayNumber3 = 4;
                    //_this.time.events.add(200, function(){
                    _this.askNumber3.frame = 4;
                    //},this);
                    
                    _this.toDisplayNoPad = 12; 
                    rightAns = 21;
                rightAns1 = 2;
    				break;
        
           
    	}
     
     
    //_this.addNumberPad();
     //_this.slideup();
     
     console.log("no1"+_this.no1);
     _this.assign1=_this.displayNumber1;
     _this.assign2=_this.displayNumber2;
     _this.assign3=_this.displayNumber3;
     
     console.log("first num"+ Number(_this.assign1));
     console.log("second num"+ Number(_this.assign2));
     _this.addYellowCoins();
    //_this.dispCoins();
     _this.firstAnim();
    },
    
    firstAnim:function(){
        randarr22= new Array();
        randarr11= new Array();

        if(_this.displayNumber3==2||_this.displayNumber3==4)
            
        {
        _this.randomno7=_this.assign1-1;
        for(v=0;v<_this.randomno7;v++)
        {
                randarr11.push(this.add.sprite(0,0,'Level321_Coin10'));
                
                randarr11[v].y=215+(v*-16);
                randarr11[v].x=150;
                randarr11[v].scale.setTo(0.8,0.8);
                randarr11[v].inputEnabled=false;
                randarr11[v].name="blue";
               // randarr11[v].input.useHandCursor = true;
                randarr11[v].events.onInputDown.add(_this.addListeners,this);
               
        }
            
            
         _this.randomno77=_this.assign2;
        for(rr=0;rr<_this.randomno77;rr++)
        {
            
                randarr22.push(this.add.sprite(0,0,'Level321_Coin1'));
                randarr22[rr].x=310;
                randarr22[rr].y=215+(rr*-16);
                randarr22[rr].scale.setTo(0.8,0.8);
                randarr22[rr].inputEnabled=false;
                randarr22[rr].name="yellow";
                randarr22[rr].events.onInputDown.add(_this.addListeners,this);
               
        }
        }
        
         if(_this.displayNumber3==3)
            
        {
        _this.randomno7=_this.assign1;
        for(v=0;v<_this.randomno7;v++)
        {
                randarr11.push(this.add.sprite(0,0,'Level321_Coin10'));
                
                randarr11[v].y=215+(v*-16);
                randarr11[v].x=150;
                randarr11[v].scale.setTo(0.8,0.8);
                randarr11[v].inputEnabled=false;
                randarr11[v].name="blue";
                
                randarr11[v].events.onInputDown.add(_this.addListeners,this);
               
        }
            
            
         _this.randomno77=_this.assign2-1;
        for(rr=0;rr<_this.randomno77;rr++)
        {
            
                randarr22.push(this.add.sprite(0,0,'Level321_Coin1'));
                randarr22[rr].x=310;
                randarr22[rr].y=215+(rr*-16);
                randarr22[rr].scale.setTo(0.8,0.8);
                randarr22[rr].inputEnabled=false;
                randarr22[rr].name="yellow";
                randarr22[rr].events.onInputDown.add(_this.addListeners,this);
               
        }
        }
         
             if((Number(_this.assign1)==3)&&(Number(_this.assign2)==1)&&(Number(_this.assign3)==2)){
        _this.tweenblue1=this.add.sprite(150,183,'Level321_Coin10');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=value1;
        _this.tweenblue1.y=value2;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 150,y:183}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
        
        
        if((Number(_this.assign1)==7)&&(Number(_this.assign2)==3)&&(Number(_this.assign3)==2)){
        _this.tweenblue1=this.add.sprite(150,120,'Level321_Coin10');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=value1;
        _this.tweenblue1.y=value2;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 150,y:120}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
            
            if((Number(_this.assign1)==5)&&(Number(_this.assign2)==5)&&(Number(_this.assign3)==2)){
        _this.tweenblue1=this.add.sprite(150,150,'Level321_Coin10');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=value1;
        _this.tweenblue1.y=value2;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 150,y:150}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
            
    if((Number(_this.assign1)==9)&&(Number(_this.assign2)==3)&&(Number(_this.assign3)==2)){
        _this.tweenblue1=this.add.sprite(150,93,'Level321_Coin10');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=value1;
        _this.tweenblue1.y=value2;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 150,y:93}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
        
        if((Number(_this.assign1)==4)&&(Number(_this.assign2)==5)&&(Number(_this.assign3)==4)){
        _this.tweenblue1=this.add.sprite(150,165,'Level321_Coin10');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=value1;
        _this.tweenblue1.y=value2;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 150,y:165}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
        
        if((Number(_this.assign1)==4)&&(Number(_this.assign2)==7)&&(Number(_this.assign3)==4)){
        _this.tweenblue1=this.add.sprite(150,165,'Level321_Coin10');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=value1;
        _this.tweenblue1.y=value2;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 150,y:165}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
        
        if((Number(_this.assign1)==8)&&(Number(_this.assign2)==7)&&(Number(_this.assign3)==4)){
        _this.tweenblue1=this.add.sprite(150,105,'Level321_Coin10');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=value1;
        _this.tweenblue1.y=value2;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 150,y:105}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
        
         if((Number(_this.assign1)==8)&&(Number(_this.assign2)==6)&&(Number(_this.assign3)==4)){
        _this.tweenblue1=this.add.sprite(150,105,'Level321_Coin10');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=value1;
        _this.tweenblue1.y=value2;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 150,y:105}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
        
        
         if((Number(_this.assign1)==1)&&(Number(_this.assign2)==3)&&(Number(_this.assign3)==3)){
        _this.tweenblue1=this.add.sprite(340,153,'Level321_Coin1');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+16;
        _this.tweenblue1.x=340;
        _this.tweenblue1.y=153;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 340,y:153}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
        
        if((Number(_this.assign1)==1)&&(Number(_this.assign2)==1)&&(Number(_this.assign3)==3)){
        _this.tweenblue1=this.add.sprite(340,185,'Level321_Coin1');
        _this.tweenblue1.scale.setTo(0.8,0.8);
         
             console.log("length="+randarr11.length);
        _this.addLength=randarr11.length-1;
         console.log("last x position of carrot ="+randarr11[_this.addLength].x);
         console.log("last  y position of carrot="+randarr11[_this.addLength].y);
        
                var value1=randarr11[_this.addLength].x;
                    var value2=randarr11[_this.addLength].y+5;
        _this.tweenblue1.x=340;
        _this.tweenblue1.y=185;
        var M1 = this.add.tween(_this.tweenblue1);
        M1.to({ x: 550,y:50}, 0, 'Linear', true, 0);
         M1.onComplete.add(function () {
             _this.tweenblue1.x=550;
            _this.tweenblue1.y=50;
             var M2 = this.add.tween(_this.tweenblue1);
        M2.to({ x: 340,y:185}, 0, 'Linear', true, 0);
             M2.onComplete.add(function () {
                 for(var mk=0;mk<randarr11.length;mk++)
        {
            randarr11[mk].destroy();
            
            
        }
                 
                 for(var mkk=0;mkk<randarr22.length;mkk++)
        {
            randarr22[mkk].destroy();
        }
        randarr22.length=0;
                 _this.tweenblue1.destroy();
                 _this.dispCoins();
             },this);
         },this);
        
      }
        
        console.log("wrong wrong");
        
    },
    
    graphicsfn:function(){
        wrongG=this.add.group();
        wronggraphics1 = this.add.graphics(this.world.centerX+50, this.world.centerY-200);
        wronggraphics1.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics1.beginFill(0xFF700B, 1);
        //wronggraphics1.scale.setTo(1.5,1);
        wronggraphics1.name="w1";
         wronggraphics1.lineTo(0, 100);
        wronggraphics1.lineTo(160, 100);
        wronggraphics1.lineTo(160, 0);
        wronggraphics1.lineTo(0, 0);
        wronggraphics1.alpha = 0;
         wronggraphics1.inputEnabled = true;
        wronggraphics1.input.useHandCursor = true;
        
        
        wronggraphics2 = this.add.graphics(this.world.centerX+310, this.world.centerY-200);
        wronggraphics2.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics2.beginFill(0xFF700B, 1);
        wronggraphics2.name="w2";
        //wronggraphics1.scale.setTo(1.5,1);
         wronggraphics2.lineTo(0, 100);
        wronggraphics2.lineTo(160, 100);
        wronggraphics2.lineTo(160, 0);
        wronggraphics2.lineTo(0, 0);
       wronggraphics2.alpha = 0;
         wronggraphics2.inputEnabled = true;
        wronggraphics2.input.useHandCursor = true;
        
        wronggraphics3 = this.add.graphics(this.world.centerX+50, this.world.centerY-20);
        wronggraphics3.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics3.beginFill(0xFF700B, 1);
        wronggraphics3.name="w3";
        //wronggraphics1.scale.setTo(1.5,1);
         wronggraphics3.lineTo(0, 100);
        wronggraphics3.lineTo(160, 100);
        wronggraphics3.lineTo(160, 0);
        wronggraphics3.lineTo(0, 0);
        wronggraphics3.alpha = 0;
         wronggraphics3.inputEnabled = true;
        wronggraphics3.input.useHandCursor = true;
        
        wronggraphics4 = this.add.graphics(this.world.centerX+310, this.world.centerY-20);
        wronggraphics4.lineStyle(1, 0xFFFFFF, 0.8);
        wronggraphics4.beginFill(0xFF700B, 1);
        wronggraphics4.name="w4";
        //wronggraphics1.scale.setTo(1.5,1);
         wronggraphics4.lineTo(0, 100);
        wronggraphics4.lineTo(160, 100);
        wronggraphics4.lineTo(160, 0);
        wronggraphics4.lineTo(0, 0);
        wronggraphics4.alpha = 0;
         wronggraphics4.inputEnabled = true;
        wronggraphics4.input.useHandCursor = true;
        
        wrongG.add(wronggraphics1);
        wrongG.add(wronggraphics2);
        wrongG.add(wronggraphics3);
        wrongG.add(wronggraphics4);
        
    },
    
   
    
  inputDownFunctionForLeverAndBox :function(){
      
      _this.Coin1 = _this.add.sprite(380,215,'Level321_Coin1');
      _this.Coin1.scale.setTo(0.8,0.8);
      _this.Coin1.visible = false;
      _this.Coin10 = _this.add.sprite(350,220,'Level321_Coin10');
      _this.Coin10.visible = false;
      //_this.Coin1.frame=7;
      
  },
    
  addYellowCoins:function(){
        
        
        if((Number(_this.assign3)==2))
            {
                _this.tray1.visible=true;
                _this.tray2.visible=true;
                _this.tray3.visible=false;
                _this.tray4.visible=false;
                
            }
        if((Number(_this.assign3)==3))
            {
                _this.tray1.visible=true;
                _this.tray2.visible=true;
                _this.tray3.visible=true;
                _this.tray4.visible=false;
                
            }
        if((Number(_this.assign3)==4))
            {
                _this.tray1.visible=true;
                _this.tray2.visible=true;
                _this.tray3.visible=true;
                _this.tray4.visible=true;
                
            }
        
       
        
    },
    
    dispCoins:function(){
        console.log("come hereeeeeeeeeeeee");
       
        //for yellow
        if(_this.displayNumber3==2||_this.displayNumber3==4)
            {
         _this.randomno1=_this.assign2;
        for(f=0;f<_this.randomno1;f++)
        {
            
                randarr.push(this.add.sprite(-300,-300,'Level321_Coin1'));
                randarr[f].x=310;
                randarr[f].y=215+(f*-16);
                randarr[f].scale.setTo(0.8,0.8);
                randarr[f].inputEnabled=false;
                randarr[f].name="yellow";
                randarr[f].events.onInputDown.add(_this.addListeners,this);
               
        }
         
        
        //for blue
         _this.randomno2=_this.assign1;
        for(v=0;v<_this.randomno2;v++)
        {
                randarr1.push(this.add.sprite(-200,-200,'Level321_Coin10'));
                randarr1[v].y=215+(v*-16);
                randarr1[v].x=150;
                randarr1[v].scale.setTo(0.8,0.8);
                randarr1[v].inputEnabled=true;
                randarr1[v].name="blue";
               // randarr1[v].input.useHandCursor = true;
                randarr1[v].events.onInputDown.add(_this.addListeners,this);
               console.log("randarr1="+randarr1.length);
        }
               
    }
    if(_this.displayNumber3==3)
    {
        _this.randomno1=_this.assign2;
        for(f=0;f<_this.randomno1;f++)
        {
            
                randarr.push(this.add.sprite(0,0,'Level321_Coin1'));
                randarr[f].x=310;
                randarr[f].y=215+(f*-16);
                randarr[f].scale.setTo(0.8,0.8);
                randarr[f].inputEnabled=true;
                randarr[f].name="yellow";
                randarr[f].events.onInputDown.add(_this.addListeners,this);
               
        }
         
        
        //for blue
         _this.randomno2=_this.assign1;
        for(v=0;v<_this.randomno2;v++)
        {
                randarr1.push(this.add.sprite(0,0,'Level321_Coin10'));
                
                randarr1[v].y=215+(v*-16);
                randarr1[v].x=150;
                randarr1[v].scale.setTo(0.8,0.8);
                randarr1[v].inputEnabled=true;
                randarr1[v].name="blue";
               
                randarr1[v].events.onInputDown.add(_this.addListeners,this);
               
        }
    
    }
        console.log("iam here");
       
    },
    
    showYellow:function(){
        _this.randomnog=_this.assign2;
        for(a1=0;a1<_this.randomnog;a1++)
        {
            
                array1.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                array1[a1].x=310;
                array1[a1].y=215+(a1*-16);
                array1[a1].scale.setTo(0.8,0.8);
                array1[a1].inputEnabled=true;
                array1[a1].name="yellow";
                array1[a1].events.onInputDown.add(_this.addListeners,this);
               
        }
    },
    
    enableYellowCoins:function(){
       // _this.randomno1=0;
        
        doInc=1;
        console.log("showwww");
        if((Number(_this.assign1)==3)&&(Number(_this.assign2)==1)&&(Number(_this.assign3)==2)){
        //if((k==1&&t==1)||k==4||t==4||(k==2&&t==1)||(k==1&&t==2)||(k==0&&t==3)||(k==3&&t==0))
                    {
                       
                        countenable=1;
                        
                        
                         for(var m=0;m<randarr.length;m++)
                            {
                                randarr[m].destroy();
                                console.log("destroyed");
                            }
                        
                        
                            _this.randomno4=_this.assign2-1;
                            
                                    for(aa=0;aa<_this.randomno4;aa++)
                                    {
                                           
                                            randarray.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                                            randarray[aa].x=310;
                                            randarray[aa].y=215+(aa*-16);
                                            randarray[aa].scale.setTo(0.8,0.8);
                                            randarray[aa].inputEnabled=false;
                                            randarray[aa].name="yellow";
                                            randarray[aa].events.onInputDown.add(_this.addListeners,this);
                                       
                                    }
                        
                       
                        
                        _this.tweenyellow=this.add.sprite(340,193,'Level321_Coin1');
                        _this.tweenyellow.scale.setTo(0.8,0.8);
                            _this.tweenyellow.x=310;
                            _this.tweenyellow.y=193;
                        var tweenanim = this.add.tween(_this.tweenyellow);
                            tweenanim.to({ x: 570,y:50}, 0, 'Linear', true, 0);
                             tweenanim.onComplete.add(function () {
                                 _this.tweenyellow.x=570;
                            _this.tweenyellow.y=50;
                                 var tweenanim1 = this.add.tween(_this.tweenyellow);
                            tweenanim1.to({ x: 310,y:193}, 0, 'Linear', true, 0);
                                  tweenanim1.onComplete.add(function () {
                                       for(var vh=0;vh<randarray.length;vh++)
                                            {
                                                randarray[vh].destroy();
                                            }
                                      _this.tweenyellow.destroy();
                                      _this.showYellow();
                                  },this);
                             },this);
                         
                                    for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                                randarr1[v].inputEnabled=true;
                                               
                                        }
                        
                       }
        }
        
       
        if((Number(_this.assign1)==7)&&(Number(_this.assign2)==3)&&(Number(_this.assign3)==2))
            {
               //if((k==2&&t==2)||(k==0&&t==5)||(k==5&&t==0)||(k==1&&t==3)||(k==3&&t==1)||k==6||t==6)
                    {
                        countenable=1;
                         for(var m=0;m<randarr.length;m++)
                            {
                                randarr[m].destroy();
                                console.log("destroyed");
                            }
                            _this.randomno4=_this.assign2-1;
                            
                                    for(aa=0;aa<_this.randomno4;aa++)
                                    {
                                           
                                            randarray.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                                            randarray[aa].x=310;
                                            randarray[aa].y=215+(aa*-16);
                                            randarray[aa].scale.setTo(0.8,0.8);
                                            randarray[aa].inputEnabled=false;
                                            randarray[aa].name="yellow";
                                            randarray[aa].events.onInputDown.add(_this.addListeners,this);
                                       
                                    }
                        _this.tweenyellow=this.add.sprite(340,183,'Level321_Coin1');
                        _this.tweenyellow.scale.setTo(0.8,0.8);
                            _this.tweenyellow.x=310;
                            _this.tweenyellow.y=173;
                        var tweenanim = this.add.tween(_this.tweenyellow);
                            tweenanim.to({ x: 570,y:50}, 0, 'Linear', true, 0);
                             tweenanim.onComplete.add(function () {
                                 _this.tweenyellow.x=570;
                            _this.tweenyellow.y=50;
                                 var tweenanim1 = this.add.tween(_this.tweenyellow);
                            tweenanim1.to({ x: 310,y:183}, 0, 'Linear', true, 0);
                                  tweenanim1.onComplete.add(function () {
                                       for(var vh=0;vh<randarray.length;vh++)
                                            {
                                                randarray[vh].destroy();
                                            }
                                      _this.tweenyellow.destroy();
                                      _this.showYellow();
                                  },this);
                             },this);
                        
                        for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                                randarr1[v].inputEnabled=true;
                                               
                                        }
                        
                       }
                }
            
            if((Number(_this.assign1)==5)&&(Number(_this.assign2)==5)&&(Number(_this.assign3)==2)){
        //if((k==0&&t==0)||(k==1&&t==0)||(k==0&&t==1)||k==2||t==2)
                    {
                        countenable=1;
                         for(var m=0;m<randarr.length;m++)
                            {
                                randarr[m].destroy();
                                console.log("destroyed");
                            }
                            _this.randomno4=_this.assign2-1;
                            
                                    for(aa=0;aa<_this.randomno4;aa++)
                                    {
                                           
                                            randarray.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                                            randarray[aa].x=310;
                                            randarray[aa].y=215+(aa*-16);
                                            randarray[aa].scale.setTo(0.8,0.8);
                                            randarray[aa].inputEnabled=false;
                                            randarray[aa].name="yellow";
                                            randarray[aa].events.onInputDown.add(_this.addListeners,this);
                                       
                                    }
                        _this.tweenyellow=this.add.sprite(340,143,'Level321_Coin1');
                        _this.tweenyellow.scale.setTo(0.8,0.8);
                            _this.tweenyellow.x=310;
                            _this.tweenyellow.y=143;
                        var tweenanim = this.add.tween(_this.tweenyellow);
                            tweenanim.to({ x: 570,y:50}, 0, 'Linear', true, 0);
                             tweenanim.onComplete.add(function () {
                                 _this.tweenyellow.x=570;
                            _this.tweenyellow.y=50;
                                 var tweenanim1 = this.add.tween(_this.tweenyellow);
                            tweenanim1.to({ x: 310,y:143}, 0, 'Linear', true, 0);
                                  tweenanim1.onComplete.add(function () {
                                       for(var vh=0;vh<randarray.length;vh++)
                                            {
                                                randarray[vh].destroy();
                                            }
                                      _this.tweenyellow.destroy();
                                      _this.showYellow();
                                  },this);
                             },this);
                        for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                                randarr1[v].inputEnabled=true;
                                               
                                        }
                        
                        
                        
                       }
        }
        
          if((Number(_this.assign1)==9)&&(Number(_this.assign2)==3)&&(Number(_this.assign3)==2)){
        //if((k==0&&t==0)||(k==1&&t==0)||(k==0&&t==1)||k==2||t==2)
                    {
                        countenable=1;
                         for(var m=0;m<randarr.length;m++)
                            {
                                randarr[m].destroy();
                                console.log("destroyed");
                            }
                            _this.randomno4=_this.assign2-1;
                            
                                    for(aa=0;aa<_this.randomno4;aa++)
                                    {
                                           
                                            randarray.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                                            randarray[aa].x=310;
                                            randarray[aa].y=215+(aa*-16);
                                            randarray[aa].scale.setTo(0.8,0.8);
                                            randarray[aa].inputEnabled=false;
                                            randarray[aa].name="yellow";
                                            randarray[aa].events.onInputDown.add(_this.addListeners,this);
                                       
                                    }
                        _this.tweenyellow=this.add.sprite(340,185,'Level321_Coin1');
                        _this.tweenyellow.scale.setTo(0.8,0.8);
                            _this.tweenyellow.x=310;
                            _this.tweenyellow.y=185;
                        var tweenanim = this.add.tween(_this.tweenyellow);
                            tweenanim.to({ x: 570,y:50}, 0, 'Linear', true, 0);
                             tweenanim.onComplete.add(function () {
                                 _this.tweenyellow.x=570;
                            _this.tweenyellow.y=50;
                                 var tweenanim1 = this.add.tween(_this.tweenyellow);
                            tweenanim1.to({ x: 310,y:185}, 0, 'Linear', true, 0);
                                  tweenanim1.onComplete.add(function () {
                                       for(var vh=0;vh<randarray.length;vh++)
                                            {
                                                randarray[vh].destroy();
                                            }
                                      _this.tweenyellow.destroy();
                                      _this.showYellow();
                                  },this);
                             },this);
                        for(v=0;v<randarr1.length;v++)
                                        {
                                                
                                                randarr1[v].inputEnabled=true;
                                               
                                        }
                        
                       
                        
                       }
        }
        
        if((Number(_this.assign1)==8)&&(Number(_this.assign2)==7)&&(Number(_this.assign3)==4)){
       // if((q==1&&l==1&&n==1&&h==1)||(q==7)||(h==7)||(l==7)||(n==7)||(q==2&&l==2&&n==0&&h==0)||(q==0&&l==0&&n==2&&h==2)||(q==2&&l==0&&n==2&&h==0)||(q==0&&l==2&&n==0&&h==2)||(q==0&&l==3&&n==0&&h==1)||(q==0&&l==0&&n==0&&h==4)||(q==0&&l==0&&n==4&&h==0)||(q==0&&l==4&&n==0&&h==0)||(q==4&&l==0&&n==0&&h==0))
            //if(inc1==Number(_this.assign1))
                    {
                        
                         for(var m=0;m<randarr.length;m++)
                            {
                                randarr[m].destroy();
                                console.log("destroyed");
                            }
                            _this.randomno4=_this.assign2-1;
                            
                                    for(aa=0;aa<_this.randomno4;aa++)
                                    {
                                           
                                            randarray.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                                            randarray[aa].x=310;
                                            randarray[aa].y=215+(aa*-16);
                                            randarray[aa].scale.setTo(0.8,0.8);
                                            randarray[aa].inputEnabled=false;
                                            randarray[aa].name="yellow";
                                            randarray[aa].events.onInputDown.add(_this.addListeners,this);
                                       
                                    }
                        
                        _this.tweenyellow=this.add.sprite(340,120,'Level321_Coin1');
                        _this.tweenyellow.scale.setTo(0.8,0.8);
                            _this.tweenyellow.x=310;
                            _this.tweenyellow.y=120;
                        var tweenanim = this.add.tween(_this.tweenyellow);
                            tweenanim.to({ x: 570,y:50}, 0, 'Linear', true, 0);
                             tweenanim.onComplete.add(function () {
                                 _this.tweenyellow.x=570;
                            _this.tweenyellow.y=50;
                                 var tweenanim1 = this.add.tween(_this.tweenyellow);
                            tweenanim1.to({ x: 310,y:120}, 0, 'Linear', true, 0);
                                  tweenanim1.onComplete.add(function () {
                                       for(var vh=0;vh<randarray.length;vh++)
                                            {
                                                randarray[vh].destroy();
                                            }
                                      _this.tweenyellow.destroy();
                                      _this.showYellow();
                                  },this);
                             },this);
                        
                       }
        }
         if((Number(_this.assign1)==4)&&(Number(_this.assign2)==5)&&(Number(_this.assign3)==4)){
        //if((q==0&&l==0&&n==0&&h==0)||q==3||l==3||n==3||h==3)
                    {
                         for(var m=0;m<randarr.length;m++)
                            {
                                randarr[m].destroy();
                                console.log("destroyed");
                            }
                            _this.randomno4=_this.assign2-1;
                            
                                    for(aa=0;aa<_this.randomno4;aa++)
                                    {
                                           
                                            randarray.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                                            randarray[aa].x=310;
                                            randarray[aa].y=215+(aa*-16);
                                            randarray[aa].scale.setTo(0.8,0.8);
                                            randarray[aa].inputEnabled=false;
                                            randarray[aa].name="yellow";
                                            randarray[aa].events.onInputDown.add(_this.addListeners,this);
                                       
                                    }
                        _this.tweenyellow=this.add.sprite(340,143,'Level321_Coin1');
                        _this.tweenyellow.scale.setTo(0.8,0.8);
                            _this.tweenyellow.x=310;
                            _this.tweenyellow.y=143;
                        var tweenanim = this.add.tween(_this.tweenyellow);
                            tweenanim.to({ x: 570,y:50}, 0, 'Linear', true, 0);
                             tweenanim.onComplete.add(function () {
                                 _this.tweenyellow.x=570;
                            _this.tweenyellow.y=50;
                                 var tweenanim1 = this.add.tween(_this.tweenyellow);
                            tweenanim1.to({ x: 310,y:143}, 0, 'Linear', true, 0);
                                  tweenanim1.onComplete.add(function () {
                                       for(var vh=0;vh<randarray.length;vh++)
                                            {
                                                randarray[vh].destroy();
                                            }
                                      _this.tweenyellow.destroy();
                                      _this.showYellow();
                                  },this);
                             },this);
                        
                       }
        }
        
         if((Number(_this.assign1)==4)&&(Number(_this.assign2)==7)&&(Number(_this.assign3)==4)){
      // if((q==0&&l==0&&n==0&&h==0)||q==3||l==3||n==3||h==3)
                    {
                         for(var m=0;m<randarr.length;m++)
                            {
                                randarr[m].destroy();
                                console.log("destroyed");
                            }
                            _this.randomno4=_this.assign2-1;
                            
                                    for(aa=0;aa<_this.randomno4;aa++)
                                    {
                                           
                                            randarray.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                                            randarray[aa].x=310;
                                            randarray[aa].y=215+(aa*-16);
                                            randarray[aa].scale.setTo(0.8,0.8);
                                            randarray[aa].inputEnabled=false;
                                            randarray[aa].name="yellow";
                                            randarray[aa].events.onInputDown.add(_this.addListeners,this);
                                       
                                    }
                        _this.tweenyellow=this.add.sprite(340,120,'Level321_Coin1');
                        _this.tweenyellow.scale.setTo(0.8,0.8);
                            _this.tweenyellow.x=310;
                            _this.tweenyellow.y=120;
                        var tweenanim = this.add.tween(_this.tweenyellow);
                            tweenanim.to({ x: 570,y:50}, 0, 'Linear', true, 0);
                             tweenanim.onComplete.add(function () {
                                 _this.tweenyellow.x=570;
                            _this.tweenyellow.y=50;
                                 var tweenanim1 = this.add.tween(_this.tweenyellow);
                            tweenanim1.to({ x: 310,y:120}, 0, 'Linear', true, 0);
                                  tweenanim1.onComplete.add(function () {
                                       for(var vh=0;vh<randarray.length;vh++)
                                            {
                                                randarray[vh].destroy();
                                            }
                                      _this.tweenyellow.destroy();
                                      _this.showYellow();
                                  },this);
                             },this);
                        
                       }
        }
        
        
         if((Number(_this.assign1)==8)&&(Number(_this.assign2)==6)&&(Number(_this.assign3)==4)){
       //if((q==1&&l==1&&n==1&&h==1))
                    {
                         for(var m=0;m<randarr.length;m++)
                            {
                                randarr[m].destroy();
                                console.log("destroyed");
                            }
                            _this.randomno4=_this.assign2-1;
                            
                                    for(aa=0;aa<_this.randomno4;aa++)
                                    {
                                           
                                            randarray.push(this.add.sprite(-100,-200,'Level321_Coin1'));
                                            randarray[aa].x=310;
                                            randarray[aa].y=215+(aa*-16);
                                            randarray[aa].scale.setTo(0.8,0.8);
                                            randarray[aa].inputEnabled=false;
                                            randarray[aa].name="yellow";
                                            randarray[aa].events.onInputDown.add(_this.addListeners,this);
                                       
                                    }
                        _this.tweenyellow=this.add.sprite(310,125,'Level321_Coin1');
                        _this.tweenyellow.scale.setTo(0.8,0.8);
                            _this.tweenyellow.x=310;
                            _this.tweenyellow.y=125;
                        var tweenanim = this.add.tween(_this.tweenyellow);
                            tweenanim.to({ x: 570,y:50}, 0, 'Linear', true, 0);
                             tweenanim.onComplete.add(function () {
                                 _this.tweenyellow.x=570;
                            _this.tweenyellow.y=50;
                                 var tweenanim1 = this.add.tween(_this.tweenyellow);
                            tweenanim1.to({ x: 310,y:125}, 0, 'Linear', true, 0);
                                  tweenanim1.onComplete.add(function () {
                                       for(var vh=0;vh<randarray.length;vh++)
                                            {
                                                randarray[vh].destroy();
                                            }
                                      _this.tweenyellow.destroy();
                                      _this.showYellow();
                                  },this);
                             },this);
                        
                       }
        }
       
   
     if((Number(_this.assign1)==1)&&(Number(_this.assign2)==2)&&(Number(_this.assign3)==3))
            {
                //console.log("show");
               // if(z==0&&e==0)
                    {
                        countenable=1;
                         for(var j=0;j<randarr1.length;j++)
                        {
                                randarr1[j].destroy();
                                console.log("destroyed");
                            
                               _this.randomno6=_this.assign1;
                                
                                    for(aab=0;aab<_this.randomno6;aab++)
                                    {
                                           
                                            randarray1.push(this.add.sprite(-100,-200,'Level321_Coin10'));
                                            randarray1[aab].x=150;
                                            randarray1[aab].y=215+(aab*-16);
                                            randarray1[aab].scale.setTo(0.8,0.8);
                                            randarray1[aab].inputEnabled=false;
                                            randarray1[aab].name="blue";
                                            randarray1[aab].events.onInputDown.add(_this.addListeners,this);
                                    }
                             }
                       }
                }
        
       if((Number(_this.assign1)==1)&&(Number(_this.assign2)==5)&&(Number(_this.assign3)==3))
            {
               // console.log("show");
               // if((z==1&&e==1))
                    {
                        countenable=1;
                         for(var j=0;j<randarr1.length;j++)
                        {
                                randarr1[j].destroy();
                                console.log("destroyed");
                            
                               _this.randomno6=_this.assign1;
                                
                                    for(aab=0;aab<_this.randomno6;aab++)
                                    {
                                           
                                            randarray1.push(this.add.sprite(-100,-200,'Level321_Coin10'));
                                            randarray1[aab].x=150;
                                            randarray1[aab].y=215+(aab*-16);
                                            randarray1[aab].scale.setTo(0.8,0.8);
                                            randarray1[aab].inputEnabled=false;
                                            randarray1[aab].name="blue";
                                            randarray1[aab].events.onInputDown.add(_this.addListeners,this);
                                    }
                             }
                       }
                }
        
       
    },
    
   
    addNumberPad:function(){
        
         _this.numBackground = this.add.sprite(480,505,'Level321_numBG');
        _this.numBackground.anchor.setTo(0.5);
        numGroup = this.add.group();
         numGroup.add(_this.numBackground);
        objGroup = this.add.group();
        var x = 80;
        for(var i=0;i<10;i++)
        {
            var numbg = numGroup.create(x,505,'Level321_NumberKey');  
            numbg.anchor.setTo(0.5);
            numbg.scale.setTo(0.6,0.6);
            numbg.name = i;
            numbg.frame = i;
            
            
            var numTxt = this.add.text(-2,1, i);
            //titletext.scale.setTo(1.5);
            numTxt.anchor.setTo(0.5);
            numTxt.align = 'center';

            numTxt.font = 'Alte Haas Grotesk';
            numTxt.fontSize = 24;
            //text.fontWeight = 'bold';
            numTxt.fill = '#FFFFFF';
            numTxt.visible=false;
            //numTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
            
            numbg.addChild(numTxt);

                numbg.inputEnabled = true;
                numbg.input.useHandCursor = true;
                numbg.events.onInputDown.add(this.numClicked,this);
            
            
            x+=70;
        }
        txtbox = objGroup.create(735,380,'Level172_ansbox');
        txtbox.anchor.setTo(0.5);
        txtbox.scale.setTo(0.8,0.8);
        txtbox.frame=1;
        txtbox.inputEnabled = true;
        txtbox.visible=false;
        
        
        
        txtbox1 = objGroup.create(90,78,'Level172_ansbox');
        txtbox1.anchor.setTo(0.5);
        txtbox1.scale.setTo(0.8,0.8);
        txtbox1.frame=0;
        txtbox1.inputEnabled = true;
        txtbox1.visible=false;
        /*txtbox1.events.onInputDown.add(function(){
             txtbox1.frame=1;
            // _this.numClicked1(target);
        },this);*/
       
        //txtbox.name = "AnswerBox";
        //objGroup.add(txtbox);
        var wrongbtn = numGroup.create(x+10,508,'eraser');
        wrongbtn.anchor.setTo(0.5);
        wrongbtn.scale.setTo(1.2,1.2);
        wrongbtn.name = "wrongbtn";
        wrongbtn.inputEnabled = true;
        wrongbtn.input.useHandCursor = true;
       
        
        var rightbtn = numGroup.create(x+90,508,'Unity12_1Tick');
        rightbtn.anchor.setTo(0.5);
        rightbtn.scale.setTo(1.2,1.2);
        rightbtn.name = "rightbtn";
        rightbtn.frame = 0;
       
        rightbtn.inputEnabled = true;
        rightbtn.input.useHandCursor = true;
        
        
        var enterTxt = this.add.text(-2,1, selectedAns);
        enterTxt.scale.setTo(0.8,0.8);
        enterTxt.anchor.setTo(0.5);
        enterTxt.align = 'center';
        enterTxt.font = 'myfont';
        enterTxt.fontWeight = 'normal';

        
        enterTxt.fontSize = 70;
            //text.fontWeight = 'bold';
        enterTxt.fill = '#65B4C3';
        
        var enterTxt1 = this.add.text(-2,1, _this.selectedAns1);
        enterTxt1.scale.setTo(0.8,0.8);
        enterTxt1.anchor.setTo(0.5);
        enterTxt1.align = 'center';
        enterTxt1.font = 'myfont';
        enterTxt1.fontWeight = 'normal';

        
        enterTxt1.fontSize = 70;
            //text.fontWeight = 'bold';
        enterTxt1.fill = '#65B4C3';

       // enterTxt.setShadow(0, 0, 'rgba(0, 0, 0, 0)', 0);
        txtbox.addChild(enterTxt);
        txtbox1.addChild(enterTxt1);
        txtbox.name = "txtbox";
        txtbox1.name = "txtbox1";
        //numGroup.add(txtbox);
        
        //numGroup.visible=false;
        
        numGroup.y=500;
        
        selectedAns = "";
        _this.selectedAns1 = "";
       
          //  numGroup.visible=true;
         this.time.events.add(1000, function(){
        txtbox.visible=true;
        txtbox1.visible=true;
             /*txtbox1.events.onInputDown.add(function(target){
                 _this.inputBoxUp = true;
                  _this.inputBoxDown = false;
                 txtbox1.frame=1;
                 _this.numClicked1(target);
             },this);
            txtbox.events.onInputDown.add(function(target){
                _this.inputBoxDown = true;
                 _this.inputBoxUp = false;
                 txtbox.frame=1;
                 _this.numClicked(target);
             },this);*/
         },this);
           
        numGroup.y = 50;
         var Maintween = this.add.tween(numGroup);
        Maintween.to({ y:0}, 0, 'Linear', true, 0);
           
        
       // _this.slideup();
        
        wrongbtn.events.onInputDown.add(function(){
            //wrongbtn.inputEnabled = false;
            click1 = this.add.audio('ClickSound');
            click1.play();
            wrongbtn.frame = 1;enterTxt.setText("");selectedAns="";enterTxt1.setText("");_this.selectedAns1="";added=0;txtbox.frame=1;txtbox1.frame=0;
                                                  this.time.events.add(1000, function(){wrongbtn.frame = 0},this);
                                                  },this);
        
        rightbtn.events.onInputDown.add(function(target){
            _this.noofAttempts++;
            rightbtn.inputEnabled = false;
            console.log("right btn");
           _this.speakerbtn.inputEnabled=false;
           click1 = this.add.audio('ClickSound');
        click1.play();
            
           // rightbtn.frame = 1;
             //this.time.events.add(500, function(){rightbtn.frame = 0},this);
            console.log(selectedAns);
            console.log(rightAns);
            if((selectedAns=="0"+rightAns||selectedAns==rightAns)&&(_this.selectedAns1=="0"+rightAns1||_this.selectedAns1==rightAns1))  
                {
                    rightbtn.frame = 1;
                    console.log("correct");
               
        
                    
                    /*_this.tray1.destroy();
                    _this.tray2.destroy();
                    _this.tray3.destroy();
                    _this.tray4.destroy();*/
                    
                    /*_this.bluecoin.visible = false;
                    _this.bluecoin1.visible = false;
                    _this.bluecoin3.visible = false;
                    _this.bluecoin4.visible = false;
                    _this.yellowcoin.visible = false;
                    _this.yellowcoin1.visible = false;
                    _this.yellowcoin2.visible = false;
                    _this.yellowcoin3.visible = false;*/
                    
                   // target.events.onInputDown.removeAll();
                 
                   _this.celebr = _this.add.audio('celebr');
                    _this.celebr.play();
                     _this.starAnim =  _this.starsGroup.getChildAt(_this.count1);
                    _this.animText=txtbox.animations.add('txtbox');
                     _this.animText.play(3,true);
                    
                    _this.animText1=txtbox1.animations.add('txtbox1');
                     _this.animText1.play(3,true);
                   
                    numbg.inputEnabled = false;
                     _this.starAnim.smoothed = false;
                     _this.anim4 = _this.starAnim.animations.add('star');
                     _this.anim4.play();
                     _this.count1++;
                     _this.questionid = 1;

                     if( _this.timer!=null)
                     {
                         _this.timer.stop();
                          _this.timer = null;
                     }
                    telInitializer.tele_saveAssessment(_this.questionid,"yes",_this.AnsTimerCount,_this.noofAttempts,_this.sceneCount);
                    this.time.events.add(2000, function(){
                    console.log("go here");
                        
                        _this.bluecoin.visible = false;
                        _this.bluecoin1.visible = false;
                        _this.bluecoin3.visible = false;
                        _this.bluecoin4.visible = false;
                        _this.yellowcoin.visible = false;
                        _this.yellowcoin1.visible = false;
                        _this.yellowcoin2.visible = false;
                        _this.yellowcoin3.visible = false;
                        
                        _this.tray1.destroy();
                        _this.tray2.destroy();
                        _this.tray3.destroy();
                        _this.tray4.destroy();
                        
                        _this.removeEverthing();
                        
                        
                    
                    },this);
                }
            else
                {
                                 for(var m=0;m<randarr.length;m++)
                                    {
                                    randarr[m].destroy();
                                    }
                                     randarr.length=0;
                            for(var j=0;j<randarr1.length;j++)
                            {
                                randarr1[j].destroy();

                            }
                    
                            randarr1.length=0;
                                   for(var r=0;r<randarrs.length;r++)
                                    {
                                    randarrs[r].destroy();
                                    }
                                    randarrs.length=0;
                    
                        for(var bb=0;bb<randarray.length;bb++)
                                    {
                                    randarray[bb].destroy();
                                    }
                                randarray.length=0;
                    
                    for(var aabb=0;aabb<randarray1.length;aabb++)
                                    {
                                    randarray1[aabb].destroy();

                                    }
                                randarray1.length=0;
                    
                for(var a2=0;a2<array1.length;a2++)
                                    {
                                    array1[a2].destroy();
                                    }
                                array1.length=0;
                   
        
                    if(_this.animArrayCoin1)
                        _this.animArrayCoin1=new Array();
                     _this.animArrayCoin1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
                    
                    _this.speakerbtn.inputEnabled=true;
                    _this.speakerbtn.input.useHandCursor=true;
                    console.log("wrong");
                    selectedAns = "";
                    selectedAns = '';
                    added=0;
                    counted1=0;
                    txtbox.frame=1;
                    txtbox1.frame=0;
                    _this.selectedAns1 = "";
                    _this.selectedAns1 = '';
                    //enterTxt.set1Text("");
                    shake.shake(10, objGroup);
                    this.time.events.add(400, function(){
                    objGroup.destroy();
                    },this);
                    _this.wmusic = _this.add.audio('waudio');
                _this.wmusic.play();
                    
                    _this.Coin1 = _this.add.sprite(380,215,'Level321_Coin1');
      _this.Coin1.scale.setTo(0.8,0.8);
      _this.Coin1.visible = false;
                   
                    _this.bluecoin.visible = false;
                    _this.bluecoin1.visible = false;
                    _this.bluecoin3.visible = false;
                    _this.bluecoin4.visible = false;
                    _this.yellowcoin.visible = false;
                    _this.yellowcoin1.visible = false;
                    _this.yellowcoin2.visible = false;
                    _this.yellowcoin3.visible = false;
                    console.log("againwrong");
                    _this.firstAnim();
                    
                    rightbtn.frame = 0;
                    enablecoin=0;
                    numGroup.visible=false;
            //objGroup.visible=false;
                    inc1=-1;
                    hhh=-1;
                    sss=-1;
                    q=-1;
                    l=-1;
                    a=-1;
                    b=-1;
                     c=-1;
                     d=-1;
                     p=-1;
                     g=-1;
                     m=-1;
                     n=-1;
                     h=-1;
                     s=-1;
                    z=-1;
                    e=-1;
                    o=-1;
                     k=-1;
     t=-1;
     u=-1;
     w=-1;
                    done=0;
                    doInc=0;
                      pressed=0;
                      pressed1=0;
                      pressed2=0;
                    
             }
        },this);
    },
    slideup:function(){
       // this.time.events.add(300, function(){
        numGroup.y=500;
       
            numGroup.visible=true;
        
        txtbox.visible=true;
        txtbox1.visible=true;
           
         var Maintween = this.add.tween(numGroup);
        Maintween.to({ y:0}, 1000, 'Linear', true, 0);
          
      //  },this);
        
        
    },
    
 /*   
 numClicked:function(target){
         txtbox.frame = 1;
         txtbox1.frame = 0;
        console.log(target.name,selectedAns);
      
         ClickSound.play();
        
                  if(selectedAns.length<2)
                {
                   
                 var number = Number(target.name)+1;
                 if(number == 10)
                     number = 0;

                 if(selectedAns!=""||selectedAns!=null)
                     selectedAns += number;
                 else
                     selectedAns = number;

                objGroup.getByName("txtbox").getChildAt(0).setText(selectedAns); 
                }
 
        
    },
    
    numClicked1:function(target){
       
         ClickSound.play();
        console.log("really");
            txtbox.frame = 0;
           txtbox1.frame = 1;
          if(selectedAns.length<2)
                {
         var number = Number(target.name)+1;
         if(number == 10)
             number = 0;
         
         if(_this.selectedAns1!=""||_this.selectedAns1!=null)
             _this.selectedAns1 += number;
         else
             _this.selectedAns1 = number;
         
        objGroup.getByName("txtbox1").getChildAt(0).setText(_this.selectedAns1); 
                }
    },*/
    
     numClicked:function(target){
        console.log(target.name,selectedAns);
      
         click1 = this.add.audio('ClickSound');
        click1.play();
         if(_this.qArrays[_this.no1]==5 || _this.qArrays[_this.no1] ==6)
             {
                  if(selectedAns.length<1)
                {
                    added++;
                 var number = Number(target.name)+1;
                 if(number == 10)
                     number = 0;

                 if(selectedAns!=""||selectedAns!=null)
                     selectedAns += number;
                 else
                     selectedAns = number;

                objGroup.getByName("txtbox").getChildAt(0).setText(selectedAns); 
                    if(added==1){
                        txtbox.frame=0;
                         txtbox1.frame=1;
                        //_this.numClicked1(target);
                    }


                }
                  else{
             //txtbox.frame=0;
                // txtbox1.frame=1;
                _this.numClicked1(target);
                }
             }
         else{
         if(selectedAns.length<2)
        {
                added++;
             var number = Number(target.name)+1;
             if(number == 10)
                 number = 0;

             if(selectedAns!=""||selectedAns!=null)
                 selectedAns += number;
             else
                 selectedAns = number;

            objGroup.getByName("txtbox").getChildAt(0).setText(selectedAns); 
                if(added==2){
                    txtbox.frame=0;
                     txtbox1.frame=1;
                    //_this.numClicked1(target);
                }


            }
         
         else{
             //txtbox.frame=0;
                // txtbox1.frame=1;
                _this.numClicked1(target);
         }
         }
        
            
        
    },
    
    numClicked1:function(target){
       
         click1 = this.add.audio('ClickSound');
        click1.play();
         if(_this.selectedAns1.length<2)
        {
            
         var number = Number(target.name)+1;
         if(number == 10)
             number = 0;
         
         if(_this.selectedAns1!=""||_this.selectedAns1!=null)
             _this.selectedAns1 += number;
         else
             _this.selectedAns1 = number;
         
        objGroup.getByName("txtbox1").getChildAt(0).setText(_this.selectedAns1); 
            
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
    
    removeEverthing:function() 
    {
         //_this.no1++;
        
        console.log(_this.no1);
        
        if(_this.count1<6)
        {
            
            console.log("go go");
         for(var m=0;m<randarr.length;m++)
        {
            randarr[m].destroy();
            
            
        }
        randarr.length=0;
        
        for(var mV=0;mV<randarr11.length;mV++)
        {
            randarr11[mV].destroy();
            
            
        }
        randarr11.length=0;
         for(var yy=0;yy<randarr1.length;yy++)
        {
            randarr1[yy].destroy();
           }
        randarr1.length=0;
            
        
         for(var r=0;r<randarrs.length;r++)
                    {
                    randarrs[r].destroy();

                    }
                    randarrs.length=0;
        
        
        for(var bb=0;bb<randarray.length;bb++)
                                    {
                                            randarray[bb].destroy();


                                        }
                                randarray.length=0;
        
        for(var a2=0;a2<array1.length;a2++)
                                    {
                                    array1[a2].destroy();
                                    }
                                array1.length=0;
        
 
        
        _this.bluecoin.visible = false;
        _this.bluecoin1.visible = false;
        _this.bluecoin3.visible = false;
        _this.bluecoin4.visible = false;
        _this.yellowcoin.visible = false;
        _this.yellowcoin1.visible = false;
        _this.yellowcoin2.visible = false;
        _this.yellowcoin3.visible = false;
        
         selectedAns = '';
         _this.selectedAns1 = '';
            //_this.selectedAns1="";
        _this.askNumber1.destroy();
        _this.askNumber2.destroy();
        _this.askNumber3.destroy();
       
        doInc=0;
        console.log("index="+_this.qArrays);
        //qArrays[0]=randomno;
        _this.qArrays.splice(0,1);
        console.log("index="+_this.qArrays);
        
        //console.log("--------------------------"+ _this.no1);
        
             //_this.no1++;
              _this.wrong = true;
            console.log("here its");
             _this.timer1.stop();
                _this.count =0;
                 _this.sceneCount++;
           
            _this.displayNumber1 = 0;
            _this.askNumber1.frame = 0;
            _this.displayNumber2 = 0;
            _this.askNumber2.frame =0;
            _this.displayNumber3 = 0;
            _this.askNumber3.frame =0;
           
             _this.numBox3Pressed = false;
             _this.Levercoin1.visible = false;
             _this.Levercoin10.visible = false;
            
            added=0;
            txtbox.frame=1;
            txtbox1.frame=0;
            _this.Coin1.destroy();
            _this.Coin10.destroy();
            numGroup.destroy();
            objGroup.destroy();
           
            _this.animArrayCoin1 =null;
            _this.selectedAns = " ";
            _this.selectedAns1 = " ";
            _this.getQuestion();
            
           // _this.no1++;
        }
        else
        {
             
             console.log("score scene");
             _this.timer1.stop();
             _this.timer1 = null;
             _this.counterForTimer = null;
             _this.stopVoice();
             selectedAns = '';
             _this.selectedAns1 = '';
             _this.state.start('unity17_3Score');
        }
        
    },
    
    generateStarsForTheScene:function(count)
	{
		 _this.starsGroup = _this.add.group();
		
		for (var i = 0; i < count; i++)
		{
	
			 _this.starsGroup.create(_this.world.centerX-15, 10, 'starAnim1');
            
			for(var j =0;j<i;j++)
			{
				if( _this.starsGroup.getChildAt(j))
				{
					 _this.starsGroup.getChildAt(j).x-=15;
					 _this.starsGroup.getChildAt(i).x+=15;
				}
			}
		}						
	},
    
	
    update:function(){

    },
    
    getVoice:function(){
        //console.log("voice "+ _this.qArrays[ _this.no1]);
            _this.stopVoice();
            _this.playQuestionSound = document.createElement('audio');
		  _this.src = document.createElement('source');
            switch( _this.qArrays[ _this.no1])
            {
                    
                    
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:if(window.languageSelected == "English")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/English/Game 17.3.mp3");
                        }
                        else if(window.languageSelected == "Hindi")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Hindi/Game 17.3.mp3");
                        }
                        else if(window.languageSelected == "Kannada")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Kannada/Game 17.3.mp3");
                        }
                        else if(window.languageSelected == "Gujarati")
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/Gujarati/3.2.1/17.3.mp3");
                        }
						else if(window.languageSelected=="Marathi")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Marathi/17.3.mp3");
                            }
							else if(window.languageSelected=="Telugu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Telugu/17.3.mp3");
                            }
							else if(window.languageSelected=="Tamil")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Tamil/17.3.mp3");
                            }
							else if(window.languageSelected=="Urdu")
                            {
                                _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Urdu/17.3.mp3");
                            }
                        else
                        {
                            _this.src.setAttribute("src", window.baseUrl+"questionSounds/3.2.1/Odiya/17.3.mp3");
                            _this.amplify = this.amplifyMedia(_this.playQuestionSound, 3);
                        }
                        break;
            }
        _this.playQuestionSound.appendChild(_this.src);
		_this.playQuestionSound.play();
        },

		amplifyMedia:function(mediaElem, multiplier) {
		  var context = new (window.AudioContext || window.webkitAudioContext),
		      result = {
		        context: context,
		        source: context.createMediaElementSource(mediaElem),
		        gain: context.createGain(),
		        media: mediaElem,
		        amplify: function(multiplier) { result.gain.gain.value = multiplier; },
		        getAmpLevel: function() { return result.gain.gain.value; }
		      };
		  result.source.connect(result.gain);
		  result.gain.connect(context.destination);
		  result.amplify(multiplier);

		  return result;
	},
	
        stopVoice:function(){
            if(_this.playQuestionSound)
		   {
			if(_this.playQuestionSound.contains(_this.src))
			{
				_this.playQuestionSound.removeChild(_this.src);
				_this.src = null;
			}
			if(!_this.playQuestionSound.paused)
			{
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
    
    shutdown:function(){
        _this.stopVoice();
        /*delete randarr;
        delete numGroup;
        delete showNum1;
        delete showNum2;
        delete showNum3;
        delete showNum4;
        delete done;
        delete doInc;
        delete enablecoin;
        delete enablecoin1;
        delete enablecoin2;
        delete enablecoin3;
        delete sss;
        delete countThing;
        delete wronggraphics1,wronggraphics2,wronggraphics3,wronggraphics4;
        delete txtbox;
        delete txtbox1;
        delete hhh;
        delete countenable;
        delete randarr11;
        delete randarr22;
        delete randarr1;
        delete randarrs;
        delete randarr3;
        delete array1;
        delete aa,aab,a1,rr,f,v,g,inc,q,inc1,l,a,b,c,d,p,g,m,n,j,s,z,e,o,k,t,u,w;
        delete counts0=0;
        delete counts1=0;
        delete counts2=0;
        delete counts3=0;
        delete pressed;
        delete val1,val2;
        delete pressed1;
        delete randarray;
        delete randarray1;
        delete selectedAns = "";
        delete selectedAns1 = "";
        delete _this.noofAttempts;
        delete timer;
        delete _this.gameid,_this.questionid;
        delete _this.AnsTimerCount;
        delete _this.bg1;
        delete _this.navBar;
        delete _this.timebg;
        delete _this.topicOutline;
        delete _this.practice;
        delete numTxt2;
        delete _this.timeDisplay;
        delete _this.backbtn;
        delete _this.speakerbtn;
        delete _this.coinPannel;
        delete _this.Levercoin1;
        delete _this.Levercoin10;
        delete _this.topbar;
        delete _this.numBoxNum1;
        delete _this.shake = null;
        delete _this.slot1;
        delete _this.tray1;
        delete _this.tray2;
        delete _this.tray3;
        delete _this.tray4;
        delete _this.animArrayCoin1;
        delete _this.animArrayCoin10;
        delete _this.askNumber1;
        delete _this.askNumber2;
        delete _this.askNumber3 ;
        delete _this.div;
        delete counted1;
        delete added;

        */
    }

    
};