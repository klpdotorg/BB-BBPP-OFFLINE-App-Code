var commonNavBarConversion = {

notesDestroy:null,
        boxonRightCrnrL:null,
    init:function()
    {
        this.notesDestroy = null;
        _this.boxonRightCrnrL = null;
        _this.walletBtnOnBoxL = null;
    },
  
    addWallet:function(twoHundredFrame,oneHundredFrame,fiftyFrame,twentyFrame,tenFrame,fiveFrame,twoFrame,oneFrame,walletCount,enableWalletDrag,amount)
    {
        _this.walletBG = _this.add.sprite(267,47,'walletBG_sp');
        
        _this.walletGrup = _this.add.group();
        _this.wallet = _this.add.sprite(280,60,'wallet_sp');
        
        _this.twoHunSprite = _this.add.sprite(310,150,'200rupee_sp');
        _this.twoHunSprite.frame = twoHundredFrame;
        
        _this.HundredSprite = _this.add.sprite(330,221,'100rupee_sp');
        _this.HundredSprite.frame = oneHundredFrame;
        
        _this.fiftySprite = _this.add.sprite(310,280,'50rupee_sp');
        _this.fiftySprite.frame = fiftyFrame;
        
        _this.twentySprite = _this.add.sprite(330,351,'20rupee_sp');
        _this.twentySprite.frame = twentyFrame;
        
        _this.tenSprite = _this.add.sprite(600,137,'10rupee_sp');
        _this.tenSprite.frame = tenFrame;
        
        _this.fiveSprite = _this.add.sprite(580,204,'5rupee_sp');
        _this.fiveSprite.frame = fiveFrame;
        
        _this.twoSprite = _this.add.sprite(600,278,'2rupee_sp');
        _this.twoSprite.frame = twoFrame;
        
        _this.oneSprite = _this.add.sprite(580,351,'1rupee_sp');
        _this.oneSprite.frame = oneFrame;
        
        _this.twoHunSprite.tint = 0xffffff;
        
         _this.HundredSprite.tint = 0xffffff;
        
        _this.fiftySprite.tint = 0xffffff;
        
        _this.twentySprite.tint = 0xffffff;
        
        _this.tenSprite.tint = 0xffffff;
        
        _this.fiveSprite.tint = 0xffffff;
        
        _this.twoSprite.tint = 0xffffff;
        
        _this.oneSprite.tint = 0xffffff;
        
        _this.walletGrup.add(_this.walletBG);
        _this.walletGrup.add(_this.wallet);
        _this.walletGrup.add(_this.twoHunSprite);
        _this.walletGrup.add(_this.HundredSprite);
        _this.walletGrup.add(_this.fiftySprite);
        _this.walletGrup.add(_this.twentySprite);
        _this.walletGrup.add(_this.tenSprite);
        _this.walletGrup.add(_this.fiveSprite);
        _this.walletGrup.add(_this.twoSprite);
        _this.walletGrup.add(_this.oneSprite);
            
        _this.walletText = _this.add.text(745,85,''+_this.walletCountTopass);
        _this.walletText.anchor.setTo(0.5);
        _this.walletText.font = 'myfont';
        _this.walletText.align = 'center';
        _this.walletText.fontWeight = 'bold';
        _this.walletText.fontSize = 30;
        _this.walletText.fill = '#ffffff'
          
        _this.enableChangeDrag = true;
        
        _this.closeWalletW = _this.add.sprite(230,47,'closeWallet_sp');
        _this.closeWalletW.inputEnabled = true;
        _this.closeWalletW.input.useHandCursor = true;
        _this.closeWalletW.events.onInputDown.add(function(){
            _this.enableChangeDrag = false;
            _this.walletText.destroy();
            _this.closeWalletW.destroy();
            _this.walletGrup.destroy();
            _this.boxonRightCrnrW.inputEnabled = true;
            _this.boxonRightCrnrW.frame= 0;
             if(_this.billMachineDisplayed)
                {
                    _this.itemRateTextWallet.destroy();
                    _this.billValueBox.destroy();
                }
            
            commonNavBarConversion.removeNotes();
         },_this);
      
        if(enableWalletDrag == true)
            {
                this.addDragableObjects(twoHundredFrame,oneHundredFrame,fiftyFrame,twentyFrame,tenFrame,fiveFrame,twoFrame,oneFrame,walletCount,enableWalletDrag,amount);
            }
        console.log(_this.billMachineDisplayed);
        if(_this.billMachineDisplayed)
            {
                _this.closeWalletW.destroy();
                _this.billValueBox = _this.add.sprite(20,150,'billValueBox_sp');
                _this.itemRateTextWallet = _this.add.text(130,200,_this.itemsRate+'.00');
                /*switch(_this.billValue[0])
            {
                case 'carrot': _this.itemRateTextWallet = _this.add.text(130,200,_this.itemsRate+'.00');
                                break;
                case 'Banana': _this.itemRateTextWallet = _this.add.text(130,200,'₹40.00');
                                break;
                case 'Candy':   _this.itemRateTextWallet = _this.add.text(130,200,'₹14.00');
                                break;
                case 'Jalebi': _this.itemRateTextWallet = _this.add.text(130,200,'₹45.00');
                                break;
                case 'Oil':    _this.itemRateTextWallet = _this.add.text(130,200,'₹80.00');
                                break;
                case 'Oilpay': _this.itemRateTextWallet = _this.add.text(130,200,'₹80.00');
                                break;
                case 'autoPay': _this.itemRateTextWallet = _this.add.text(130,200,'₹60.00');
                                break;
            }*/
              _this.itemRateTextWallet.anchor.setTo(0.5);
              _this.itemRateTextWallet.font = 'myfont';
              _this.itemRateTextWallet.align = 'center';
              _this.itemRateTextWallet.fontWeight = 'normal';
              _this.itemRateTextWallet.fontSize = 45;
              _this.itemRateTextWallet.fill = '#ffffff';
            }
	},
closeWalletAutoMatically:function()
    {
        _this.enableChangeDrag = false;
        _this.walletText.destroy();
        _this.closeWalletW.destroy();
        _this.walletGrup.destroy();
        if(_this.billMachineDisplayed)
            {
                _this.itemRateTextWallet.destroy();
                _this.billValueBox.destroy();
            }
        commonNavBarConversion.removeNotes();
        _this.boxonRightCrnrW.inputEnabled = true;
        _this.boxonRightCrnrW.frame= 0;
    },
    
    removeNotes:function()
    {

        
         if(_this.twoHunDrag != null)
                        _this.twoHunDrag.destroy();
                    if(_this.HundredDrag != null)
                        _this.HundredDrag.destroy();
                    if(_this.fiftyDrag != null)
                        _this.fiftyDrag.destroy();
                    if(_this.twentyDrag != null)
                        _this.twentyDrag.destroy();
                    if(_this.tenDrag != null)
                        _this.tenDrag.destroy();
                    if(_this.fiveDrag != null)
                        _this.fiveDrag.destroy();
                    if(_this.twoDrag != null)
                        _this.twoDrag.destroy();
                    if(_this.oneDrag != null)
                        _this.oneDrag.destroy();
            
    },
  addDragableObjects:function(twoHundredFrame,oneHundredFrame,fiftyFrame,twentyFrame,tenFrame,fiveFrame,twoFrame,oneFrame,walletCount,enableWalletDrag)
    {
        
        _this.twoHunSprite.tint = 0x679552;
        _this.twoHunSprite.inputEnabled = false;
        
         _this.HundredSprite.tint = 0x679552;
         _this.HundredSprite.inputEnabled = false;
        
        _this.fiftySprite.tint = 0x679552;
        _this.fiftySprite.inputEnabled = false;
        
        _this.twentySprite.tint = 0x679552;
        _this.twentySprite.inputEnabled = false;
        
        _this.tenSprite.tint = 0x679552;
        _this.tenSprite.inputEnabled = false;
        
        _this.fiveSprite.tint = 0x679552;
        _this.fiveSprite.inputEnabled = false;
        
        _this.twoSprite.tint = 0x679552;
        _this.twoSprite.inputEnabled = false;
        
        _this.oneSprite.tint = 0x679552;
        _this.oneSprite.inputEnabled = false;
        
        _this.twoHunDrag = null;
        _this.HundredDrag = null;
        _this.fiftyDrag = null;
        _this.twentyDrag = null;
        _this.tenDrag = null;
        _this.fiveDrag = null;
        _this.twoDrag = null;
        _this.oneDrag = null;
        
        _this.twFrame = 0;
        _this.hFrame = 0;
        _this.fFrame = 0;
        _this.tFrame = 0;
        _this.tnFrame = 0;
        _this.fvFrame = 0;
        _this.twFrame = 0;
        _this.oFrame = 0;
        
        for(var i=0; i<_this.amounts.length;i++)
            {
                if(_this.amounts[i]==200)
                {
                    if(_this.twoHunDrag == null)
                        _this.twoHunDrag = _this.add.sprite(310,150,'200rupee_sp');
                    _this.twoHunDrag.name = '200rupee_sp';
                    _this.twoHunDrag.frame++;
                    _this.twoHunDrag.inputEnabled = true;
                    
                    _this.twFrame++;
        
                    
                }
                else if(_this.amounts[i]==100)
                {
                    if(_this.HundredDrag == null)
                        _this.HundredDrag = _this.add.sprite(330,221,'100rupee_sp');
                    _this.HundredDrag.name = '100rupee_sp';
                    _this.HundredDrag.frame++;
                    _this.HundredDrag.inputEnabled = true;
                    
                    _this.hFrame++;
        
                    
                }
                else if(_this.amounts[i]==50)
                {
                    if(_this.fiftyDrag == null)
                        _this.fiftyDrag = _this.add.sprite(310,280,'50rupee_sp');
                    _this.fiftyDrag.name = '50rupee_sp';
                    _this.fiftyDrag.frame++;
                    _this.fiftyDrag.inputEnabled = true;
                    
                    _this.fFrame++;
        
                    
                }
                else if(_this.amounts[i]==20)
                {
                    if(_this.twentyDrag == null)
                        _this.twentyDrag = _this.add.sprite(330,351,'20rupee_sp');
                    _this.twentyDrag.name = '20rupee_sp';
                    _this.twentyDrag.frame++;
                    _this.twentyDrag.inputEnabled = true;
                    
                    _this.tFrame++;
        
                    
                }
                else if(_this.amounts[i]==10)
                {
                    if(_this.tenDrag == null)
                        _this.tenDrag = _this.add.sprite(600,137,'10rupee_sp');
                    _this.tenDrag.name = '10rupee_sp';
                    _this.tenDrag.frame++;
                    _this.tenDrag.inputEnabled = true;
                    
                    _this.tnFrame++;
       
                    
                }
                else if(_this.amounts[i]==5)
                {
                    if(_this.fiveDrag == null)
                        _this.fiveDrag = _this.add.sprite(580,204,'5rupee_sp');
                    _this.fiveDrag.name = '5rupee_sp';
                    _this.fiveDrag.frame++;
                    _this.fiveDrag.inputEnabled = true;
                    
                     _this.fvFrame++;
        
                    
                }
                else if(_this.amounts[i]==2)
                {
                    if(_this.twoDrag == null)
                        _this.twoDrag = _this.add.sprite(600,278,'2rupee_sp');
                    _this.twoDrag.name = '2rupee_sp';
                    _this.twoDrag.frame++;
                    _this.twoDrag.inputEnabled = true;
                    
                    _this.twFrame++;
        
                    
                }
                else if(_this.amounts[i]==1)
                {
                    if(_this.oneDrag == null)
                        _this.oneDrag = _this.add.sprite(580,351,'1rupee_sp');
                    _this.oneDrag.name = '1rupee_sp';
                    _this.oneDrag.frame++;
                    _this.oneDrag.inputEnabled = true;
                    
                    _this.oFrame++;
                    
                }
            }
        _this.amountToAdd = 0;
        _this.addedAmount = 0;
        for(var i=0;i<_this.amounts.length;i++)
                {
                   _this.amountToAdd += _this.amounts[i]; 
                }
        if(_this.twoHunDrag != null)
                        _this.twoHunDrag.events.onInputDown.add(this.notesDragToStage, this);
                    if(_this.HundredDrag != null)
                        _this.HundredDrag.events.onInputDown.add(this.notesDragToStage, this);
                    if(_this.fiftyDrag != null)
                        _this.fiftyDrag.events.onInputDown.add(this.notesDragToStage, this);
                    if(_this.twentyDrag != null)
                        _this.twentyDrag.events.onInputDown.add(this.notesDragToStage, this);
                    if(_this.tenDrag != null)
                        _this.tenDrag.events.onInputDown.add(this.notesDragToStage, this);
                    if(_this.fiveDrag != null)
                        _this.fiveDrag.events.onInputDown.add(this.notesDragToStage, this);
                    if(_this.twoDrag != null)
                        _this.twoDrag.events.onInputDown.add(this.notesDragToStage, this);
                    if(_this.oneDrag != null)
                        _this.oneDrag.events.onInputDown.add(this.notesDragToStage, this);
     
      
    },
    
    
    dragstarted:function(target){
        
        if(target.name == '200rupee_sp') 
                    {
                        _this.twoHunSprite.frame--;

                        _this.twoHunDrag.loadTexture('200rsNote_sp', 0, false);
                    }
                else if(target.name == '100rupee_sp') 
                    {
                        _this.HundredSprite.frame--;

                        _this.HundredDrag.loadTexture('100rsNote_sp', 0, false);
                    }
                else if(target.name == '50rupee_sp')
                    {
                       _this.fiftySprite.frame--;
                       
                        _this.fiftyDrag.loadTexture('50rsNote_sp', 0, false);
                    }
                else if(target.name == '20rupee_sp')
                    {
                       _this.twentySprite.frame--;
                        
                        _this.twentyDrag.loadTexture('20rsNote_sp', 0, false);
                    }
                else if(target.name == '10rupee_sp')
                    {
                       _this.tenSprite.frame--;
                       
                        _this.tenDrag.loadTexture('10rsNote_sp', 0, false);
                    }
                else if(target.name == '5rupee_sp')
                    {
                       _this.fiveSprite.frame--;
                       
                        _this.fiveDrag.loadTexture('5rsNote_sp', 0, false);
                    }
                else if(target.name == '2rupee_sp')
                    {
                      _this.twoSprite.frame--;
                      
                        _this.twoDrag.loadTexture('2rsNote_sp', 0, false);
                    }
                else if(target.name == '1rupee_sp')
                    {
                       _this.oneSprite.frame--;
                      
                        _this.oneDrag.loadTexture('1rsNote_sp', 0, false);
                    }
            },

    notesDragToStage:function(target)
    {
           
            this.vx = target.x;   
			this.vy = target.y;
            target.alpha = 1;
			target.input.enableDrag(true);
            target.events.onDragStart.add(this.dragstarted,this);
            target.events.onDragStop.add(this.dragStoped,this);
    },
dragStoped:function(target){
    console.log('_this.billValue '+_this.billValue);
    if(_this.checkOverlap(target,_this.graphics))
        {
            _this.snapSound = _this.add.audio('snapSound');
            _this.snapSound.play();
            
            if(target.name == '200rupee_sp')
                        {
                            _this.walletCountTopass -= 200;
                            _this.walletText.setText(_this.walletCountTopass);
                            _this.twoHundredFrame--;
                            //_this.sprite21.alpha = 1;
                            
                            for(var i=0;i<_this.groupNotes.length;i++)
                                {
                                    if(_this.groupNotes.getAt(i).name == target.name && _this.groupNotes.getAt(i).alpha == 0)
                                        {
                                            _this.groupNotes.getAt(i).alpha = 1;
                                             break;
                                        }
                                }
                            
                            //if(_this.groupNotes.getByName(target.name).alpha == 0)
                                //_this.groupNotes.getByName(target.name).alpha = 1;
                            _this.twoHunDrag.loadTexture('200rupee_sp', 0, false);
                            target.x = this.vx;   
                            target.y = this.vy;
                            
                            _this.twFrame--;
                            
                            
                            _this.twoHunDrag.frame = _this.twFrame;
                            
                            if(_this.twoHunDrag.frame == 0)
                                _this.twoHunDrag.destroy();
                            
                            _this.addedAmount += 200;
                            
                            if(_this.addedAmount >= _this.amountToAdd)
                                {
                                    _this.time.events.add(1000, function(){
                                        
                                        if(_this.payment1completed)
                                            _this.completedPayment2();
                                        else if(_this.payment2completed)
                                            _this.completedPayment3();
                                        else if(_this.payment3completed)
                                            _this.completedPayment4();
                                        else if(_this.payment4completed)
                                            _this.completedPayment5();
                                        else if(_this.payment5completed)
                                            _this.completedPayment6();
                                        else if(_this.payment6completed)
                                            _this.completedPayment7();
                                        else
                                            _this.completedPayment1();
                                    },this);
                                }
                            /*if(_this.contNotes == 2)
                                {
                                 _this.walletCountTopass -= 20;
                                 _this.walletText.setText(_this.walletCountTopass);
                                  _this.sprite22.alpha = 1;  
                                  _this.contNotes = 0;
                                  _this.twentyDrag.inputEnabled = false;
                                  _this.twentyFrame = 0;
                                    _this.time.events.add(1000, function(){
                                    _this.completedPayment1();
                                    },this);

                                }*/
                        }
            else if(target.name == '100rupee_sp')
                        {
                            _this.walletCountTopass -= 100;
                            _this.walletText.setText(_this.walletCountTopass);
                            _this.oneHundredFrame--;
                            //_this.sprite21.alpha = 1;
                            
                            for(var i=0;i<_this.groupNotes.length;i++)
                                {
                                    if(_this.groupNotes.getAt(i).name == target.name && _this.groupNotes.getAt(i).alpha == 0)
                                        {
                                            _this.groupNotes.getAt(i).alpha = 1;
                                             break;
                                        }
                                }
                            
                            //_this.groupNotes.getByName(target.name).alpha = 1;
                            _this.HundredDrag.loadTexture('100rupee_sp', 0, false);
                            target.x = this.vx;   
                            target.y = this.vy;
                            
                            _this.hFrame--;
                            
                            _this.HundredDrag.frame = _this.hFrame;
                            
                            if(_this.HundredDrag.frame == 0)
                                _this.HundredDrag.destroy();
                            
                            _this.addedAmount += 100;
                            
                            if(_this.addedAmount >= _this.amountToAdd)
                                {
                                    _this.time.events.add(1000, function(){
                                        
                                        if(_this.payment1completed)
                                            _this.completedPayment2();
                                        else if(_this.payment2completed)
                                            _this.completedPayment3();
                                        else if(_this.payment3completed)
                                            _this.completedPayment4();
                                        else if(_this.payment4completed)
                                            _this.completedPayment5();
                                        else if(_this.payment5completed)
                                            _this.completedPayment6();
                                        else if(_this.payment6completed)
                                            _this.completedPayment7();
                                        else
                                            _this.completedPayment1();
                                    },this);
                                }
                            
                            /*if(_this.contNotes == 2)
                                {
                                 _this.walletCountTopass -= 20;
                                 _this.walletText.setText(_this.walletCountTopass);
                                  _this.sprite22.alpha = 1;  
                                  _this.contNotes = 0;
                                  _this.twentyDrag.inputEnabled = false;
                                  _this.twentyFrame = 0;
                                    _this.time.events.add(1000, function(){
                                    _this.completedPayment1();
                                    },this);

                                }*/
                        }
            else if(target.name == '50rupee_sp')
                        {
                            _this.walletCountTopass -= 50;
                            _this.walletText.setText(_this.walletCountTopass);
                            _this.fiftyFrame--;
                            //_this.sprite21.alpha = 1;
                            
                            for(var i=0;i<_this.groupNotes.length;i++)
                                {
                                    if(_this.groupNotes.getAt(i).name == target.name && _this.groupNotes.getAt(i).alpha == 0)
                                        {
                                            _this.groupNotes.getAt(i).alpha = 1;
                                             break;
                                        }
                                }
                            _this.fiftyDrag.loadTexture('50rupee_sp', 0, false);
                            target.x = this.vx;   
                            target.y = this.vy;
                            
                            _this.fFrame--;
                            
                           _this.fiftyDrag.frame = _this.fFrame;
                            
                            if(_this.fiftyDrag.frame == 0)
                                _this.fiftyDrag.destroy();
                            
                            _this.addedAmount += 50;
                            
                            if(_this.addedAmount >= _this.amountToAdd)
                                {
                                    _this.time.events.add(1000, function(){
                                        
                                        if(_this.payment1completed)
                                            _this.completedPayment2();
                                        else if(_this.payment2completed)
                                            _this.completedPayment3();
                                        else if(_this.payment3completed)
                                            _this.completedPayment4();
                                        else if(_this.payment4completed)
                                            _this.completedPayment5();
                                        else if(_this.payment5completed)
                                            _this.completedPayment6();
                                        else if(_this.payment6completed)
                                            _this.completedPayment7();
                                        else
                                            _this.completedPayment1();
                                    },this);
                                }
                            /*if(_this.contNotes == 2)
                                {
                                 _this.walletCountTopass -= 20;
                                 _this.walletText.setText(_this.walletCountTopass);
                                  _this.sprite22.alpha = 1;  
                                  _this.contNotes = 0;
                                  _this.twentyDrag.inputEnabled = false;
                                  _this.twentyFrame = 0;
                                    _this.time.events.add(1000, function(){
                                    _this.completedPayment1();
                                    },this);

                                }*/
                        }
            
            else if(target.name == '20rupee_sp')
                        {
                            _this.walletCountTopass -= 20;
                            _this.walletText.setText(_this.walletCountTopass);
                            _this.twentyFrame--;
                            //_this.sprite21.alpha = 1;
                            
                            for(var i=0;i<_this.groupNotes.length;i++)
                                {
                                    if(_this.groupNotes.getAt(i).name == target.name && _this.groupNotes.getAt(i).alpha == 0)
                                        {
                                            _this.groupNotes.getAt(i).alpha = 1;
                                             break;
                                        }
                                }
                            _this.twentyDrag.loadTexture('20rupee_sp', 0, false);
                            target.x = this.vx;   
                            target.y = this.vy;
                            
                            _this.tFrame--;
                            
                            
                            
                            _this.twentyDrag.frame = _this.tFrame;
                            
                            if(_this.twentyDrag.frame == 0)
                                _this.twentyDrag.destroy();
                            
                            _this.addedAmount += 20;
                            
                            if(_this.addedAmount >= _this.amountToAdd)
                                {
                                    _this.time.events.add(1000, function(){
                                        
                                        if(_this.payment1completed)
                                            _this.completedPayment2();
                                        else if(_this.payment2completed)
                                            _this.completedPayment3();
                                        else if(_this.payment3completed)
                                            _this.completedPayment4();
                                        else if(_this.payment4completed)
                                            _this.completedPayment5();
                                        else if(_this.payment5completed)
                                            _this.completedPayment6();
                                        else if(_this.payment6completed)
                                            _this.completedPayment7();
                                        else
                                            _this.completedPayment1();
                                    },this);
                                }
                            /*if(_this.contNotes == 2)
                                {
                                 _this.walletCountTopass -= 20;
                                 _this.walletText.setText(_this.walletCountTopass);
                                  _this.sprite22.alpha = 1;  
                                  _this.contNotes = 0;
                                  _this.twentyDrag.inputEnabled = false;
                                  _this.twentyFrame = 0;
                                    _this.time.events.add(1000, function(){
                                    _this.completedPayment1();
                                    },this);

                                }*/
                        }
            else if(target.name == '10rupee_sp')
                        {
                            _this.walletCountTopass -= 10;
                            _this.walletText.setText(_this.walletCountTopass);
                            _this.tenFrame--;
                            //_this.sprite21.alpha = 1;
                            
                            for(var i=0;i<_this.groupNotes.length;i++)
                                {
                                    if(_this.groupNotes.getAt(i).name == target.name && _this.groupNotes.getAt(i).alpha == 0)
                                        {
                                            _this.groupNotes.getAt(i).alpha = 1;
                                             break;
                                        }
                                }
                            _this.tenDrag.loadTexture('10rupee_sp', 0, false);
                            target.x = this.vx;   
                            target.y = this.vy;
                            
                            _this.tnFrame--;
                            
                            
                            
                            _this.tenDrag.frame = _this.tnFrame;
                            
                            if(_this.tenDrag.frame == 0)
                                _this.tenDrag.destroy();
                            
                            _this.addedAmount += 10;
                            
                            if(_this.addedAmount >= _this.amountToAdd)
                                {
                                    _this.time.events.add(1000, function(){
                                        
                                        if(_this.payment1completed)
                                            _this.completedPayment2();
                                        else if(_this.payment2completed)
                                            _this.completedPayment3();
                                        else if(_this.payment3completed)
                                            _this.completedPayment4();
                                        else if(_this.payment4completed)
                                            _this.completedPayment5();
                                        else if(_this.payment5completed)
                                            _this.completedPayment6();
                                        else if(_this.payment6completed)
                                            _this.completedPayment7();
                                        else
                                            _this.completedPayment1();
                                    },this);
                                }
                            /*if(_this.contNotes == 2)
                                {
                                 _this.walletCountTopass -= 20;
                                 _this.walletText.setText(_this.walletCountTopass);
                                  _this.sprite22.alpha = 1;  
                                  _this.contNotes = 0;
                                  _this.twentyDrag.inputEnabled = false;
                                  _this.twentyFrame = 0;
                                    _this.time.events.add(1000, function(){
                                    _this.completedPayment1();
                                    },this);

                                }*/
                        }
            else if(target.name == '5rupee_sp')
                        {
                            _this.walletCountTopass -= 5;
                            _this.walletText.setText(_this.walletCountTopass);
                            _this.fiveFrame--;
                            //_this.sprite21.alpha = 1;
                            
                            for(var i=0;i<_this.groupNotes.length;i++)
                                {
                                    if(_this.groupNotes.getAt(i).name == target.name && _this.groupNotes.getAt(i).alpha == 0)
                                        {
                                            _this.groupNotes.getAt(i).alpha = 1;
                                             break;
                                        }
                                }
                            _this.fiveDrag.loadTexture('5rupee_sp', 0, false);
                            target.x = this.vx;   
                            target.y = this.vy;
                            
                            
                            _this.fvFrame--;
                            
                            
                             _this.fiveDrag.frame = _this.fvFrame;
                            
                            if(_this.fiveDrag.frame == 0)
                                _this.fiveDrag.destroy();
                            
                            _this.addedAmount += 5;
                            
                            if(_this.addedAmount >= _this.amountToAdd)
                                {
                                    _this.time.events.add(1000, function(){
                                        
                                        if(_this.payment1completed)
                                            _this.completedPayment2();
                                        else if(_this.payment2completed)
                                            _this.completedPayment3();
                                        else if(_this.payment3completed)
                                            _this.completedPayment4();
                                        else if(_this.payment4completed)
                                            _this.completedPayment5();
                                        else if(_this.payment5completed)
                                            _this.completedPayment6();
                                        else if(_this.payment6completed)
                                            _this.completedPayment7();
                                        else
                                            _this.completedPayment1();
                                    },this);
                                }
                            /*if(_this.contNotes == 2)
                                {
                                 _this.walletCountTopass -= 20;
                                 _this.walletText.setText(_this.walletCountTopass);
                                  _this.sprite22.alpha = 1;  
                                  _this.contNotes = 0;
                                  _this.twentyDrag.inputEnabled = false;
                                  _this.twentyFrame = 0;
                                    _this.time.events.add(1000, function(){
                                    _this.completedPayment1();
                                    },this);

                                }*/
                        }
            else if(target.name == '2rupee_sp')
                        {
                             _this.walletCountTopass -= 2;
                            _this.walletText.setText(_this.walletCountTopass);
                            _this.twoFrame--;
                            //_this.sprite21.alpha = 1;
                            
                            for(var i=0;i<_this.groupNotes.length;i++)
                                {
                                    if(_this.groupNotes.getAt(i).name == target.name && _this.groupNotes.getAt(i).alpha == 0)
                                        {
                                            _this.groupNotes.getAt(i).alpha = 1;
                                             break;
                                        }
                                }
                            _this.twoDrag.loadTexture('2rupee_sp', 0, false);
                            target.x = this.vx;   
                            target.y = this.vy;
                            
                            
                            _this.twFrame--;
                            
                            
                            _this.twoDrag.frame = _this.twFrame;
                            
                            if(_this.twoDrag.frame == 0)
                                _this.twoDrag.destroy();
                            
                            _this.addedAmount += 2;
                            
                            if(_this.addedAmount >= _this.amountToAdd)
                                {
                                    _this.time.events.add(1000, function(){
                                        
                                        if(_this.payment1completed)
                                            _this.completedPayment2();
                                        else if(_this.payment2completed)
                                            _this.completedPayment3();
                                        else if(_this.payment3completed)
                                            _this.completedPayment4();
                                        else if(_this.payment4completed)
                                            _this.completedPayment5();
                                        else if(_this.payment5completed)
                                            _this.completedPayment6();
                                        else if(_this.payment6completed)
                                            _this.completedPayment7();
                                        else
                                            _this.completedPayment1();
                                    },this);
                                }
                            /*if(_this.contNotes == 2)
                                {
                                 _this.walletCountTopass -= 20;
                                 _this.walletText.setText(_this.walletCountTopass);
                                  _this.sprite22.alpha = 1;  
                                  _this.contNotes = 0;
                                  _this.twentyDrag.inputEnabled = false;
                                  _this.twentyFrame = 0;
                                    _this.time.events.add(1000, function(){
                                    _this.completedPayment1();
                                    },this);

                                }*/
                        }
            else if(target.name == '1rupee_sp')
                        {
                            _this.walletCountTopass -= 1;
                            _this.walletText.setText(_this.walletCountTopass);
                            _this.oneFrame--;
                            //_this.sprite21.alpha = 1;
                            
                            for(var i=0;i<_this.groupNotes.length;i++)
                                {
                                    if(_this.groupNotes.getAt(i).name == target.name && _this.groupNotes.getAt(i).alpha == 0)
                                        {
                                            _this.groupNotes.getAt(i).alpha = 1;
                                             break;
                                        }
                                }
                            _this.oneDrag.loadTexture('1rupee_sp', 0, false);
                            target.x = this.vx;   
                            target.y = this.vy;
                            
                            _this.oFrame--;
                           _this.oneDrag.frame = _this.oFrame;
                            
                            if(_this.oneDrag.frame == 0)
                                _this.oneDrag.destroy();
                            
                            _this.addedAmount += 1;
                            
                            if(_this.addedAmount >= _this.amountToAdd)
                                {
                                    _this.time.events.add(1000, function(){
                                        
                                        if(_this.payment1completed)
                                            _this.completedPayment2();
                                        else if(_this.payment2completed)
                                            _this.completedPayment3();
                                        else if(_this.payment3completed)
                                            _this.completedPayment4();
                                        else if(_this.payment4completed)
                                            _this.completedPayment5();
                                        else if(_this.payment5completed)
                                            _this.completedPayment6();
                                        else if(_this.payment6completed)
                                            _this.completedPayment7();
                                        else
                                            _this.completedPayment1();
                                    },this);
                                }
                            /*if(_this.contNotes == 2)
                                {
                                 _this.walletCountTopass -= 20;
                                 _this.walletText.setText(_this.walletCountTopass);
                                  _this.sprite22.alpha = 1;  
                                  _this.contNotes = 0;
                                  _this.twentyDrag.inputEnabled = false;
                                  _this.twentyFrame = 0;
                                    _this.time.events.add(1000, function(){
                                    _this.completedPayment1();
                                    },this);

                                }*/
                        }
        }
    else
        {
            

            target.alpha = 1;
            if(target.name == '200rupee_sp') 
            {
                _this.twoHunDrag.loadTexture('200rupee_sp', 0, false);
                _this.twoHunDrag.frame = _this.twFrame;
                _this.twoHunSprite.frame++;
            }
         else if(target.name == '100rupee_sp') 
            {
                _this.HundredDrag.loadTexture('100rupee_sp', 0, false);
                _this.HundredDrag.tint = '0xffffff'
                _this.HundredDrag.frame = _this.hFrame;
                _this.HundredSprite.frame++;
            }
         else if(target.name == '50rupee_sp') 
            {
                _this.fiftyDrag.loadTexture('50rupee_sp', 0, false);
                _this.fiftyDrag.tint = '0xffffff'
                _this.fiftyDrag.frame = _this.fFrame;
                _this.fiftySprite.frame++;
            }
            else if(target.name == '20rupee_sp') 
            {
                _this.twentyDrag.loadTexture('20rupee_sp', 0, false);
                _this.twentyDrag.tint = '0xffffff'
                _this.twentyDrag.frame = _this.tFrame;
                _this.twentySprite.frame++;
            }
            else if(target.name == '10rupee_sp') 
            {
                _this.tenDrag.loadTexture('10rupee_sp', 0, false);
                _this.tenDrag.tint = '0xffffff'
                _this.tenDrag.frame = _this.tnFrame;
                _this.tenSprite.frame++;
            }
            else if(target.name == '5rupee_sp') 
            {
                _this.fiveDrag.loadTexture('5rupee_sp', 0, false);
                _this.fiveDrag.tint = '0xffffff'
                _this.fiveDrag.frame = _this.fvFrame;
                _this.fiveSprite.frame++;
            }
            else if(target.name == '2rupee_sp') 
            {
                _this.twoDrag.loadTexture('2rupee_sp', 0, false);
                _this.twoDrag.tint = '0xffffff'
                _this.twoDrag.frame = _this.twFrame;
                _this.twoSprite.frame++;
            }
            else if(target.name == '1rupee_sp') 
            {
                _this.oneDrag.loadTexture('1rupee_sp', 0, false);
                _this.oneDrag.tint = '0xffffff'
                _this.oneDrag.frame = _this.oFrame;
                _this.oneSprite.frame++;
            }


            //target.events.onDragStop.removeAll(); 
            target.x = this.vx;   
            target.y = this.vy;
        }
    },
  backToOriginalPlace:function(target)
    {
      if(target.name == '100rupee_sp') 
            {
                _this.HundredDrag.loadTexture('100rupee_sp', 0, false);
                _this.HundredSprite.frame = 1;
            }
         else if(target.name == '50rupee_sp') 
            {
                _this.fiftyDrag.loadTexture('50rupee_sp', 0, false);
                _this.fiftySprite.frame++;
            }
            else if(target.name == '20rupee_sp') 
            {
                _this.twentyDrag.loadTexture('20rupee_sp', 0, false);
                _this.twentySprite.frame++;
            }
            else if(target.name == '10rupee_sp') 
            {
                _this.tenDrag.loadTexture('10rupee_sp', 0, false);
                _this.tenSprite.frame++;
            }
            else if(target.name == '5rupee_sp') 
            {
                _this.fiveDrag.loadTexture('5rupee_sp', 0, false);
                _this.fiveSprite.frame++;
            }
            else if(target.name == '2rupee_sp') 
            {
                _this.twoDrag.loadTexture('2rupee_sp', 0, false);
                _this.twoSprite.frame++;
            }
            else if(target.name == '1rupee_sp') 
            {
                _this.oneDrag.loadTexture('1rupee_sp', 0, false);
                _this.oneSprite.frame++;
            }


            //target.events.onDragStop.removeAll(); 
            target.x = this.vx;   
            target.y = this.vy;
    },
    showListWhenClicked:function(greyItem1,greyItem2,greyItem3,greyItem4,greyItem5,greyItem6,greyItem7,greyItem8,greyItem9,openListAutomatically)
    {
        if(_this.boxonRightCrnrL == null)
            {
                console.log('OK');
            _this.boxonRightCrnrL = _this.add.sprite(857,159,'blueBox_sp');
            }
        if(_this.walletBtnOnBoxL == null)
            _this.walletBtnOnBoxL = _this.add.sprite(875,180,'receiptBtn_sp');
        
        if(_this.listitemsGroup)
         {
             console.log(_this.listitemsGroup);
             if( _this.closeWalletL)
                 _this.closeWalletL.destroy();
             _this.listitemsGroup.destroy();
             _this.boxonRightCrnrL.frame= 0;
         }
        
        if(openListAutomatically)
            {
                _this.boxonRightCrnrL.inputEnabled = false;
                openListAutomatically = false;
                this.backClicked();
                
            }
        else
            {
                _this.boxonRightCrnrL.inputEnabled = true;
                _this.boxonRightCrnrL.input.useHandCursor = true;
                _this.boxonRightCrnrL.events.onInputDown.add(this.backClicked,this);
            }
        
        _this.greyItem1 = greyItem1;
        _this.greyItem2 = greyItem2;
        _this.greyItem3 = greyItem3;
        _this.greyItem4 = greyItem4;
        _this.greyItem5 = greyItem5;
        _this.greyItem6 = greyItem6;
        _this.greyItem7 = greyItem7;
        _this.greyItem8 = greyItem8;
        _this.greyItem9 = greyItem9;
  
    },
    removeListFromScreen:function()
    {
        if(_this.listitemsGroup)
         {
             console.log(_this.listitemsGroup);
             if( _this.closeWalletL)
                 _this.closeWalletL.destroy();
             _this.listitemsGroup.destroy();
             _this.boxonRightCrnrL.frame= 0;
             
             _this.boxonRightCrnrL.inputEnabled = true;
             _this.boxonRightCrnrL.input.useHandCursor = true;
         }
    },
    backClicked:function()
    {
        console.log("$$");
      //_this.boxonRightCrnrL.events.onInputDown.removeAll();
       _this.boxonRightCrnrL.frame= 1;
      _this.boxonRightCrnrL.inputEnabled = false;  
    
     
      _this.receiptToClick = _this.add.sprite(542,46,'receiptToClick_sp');
       
        
      _this.autoImg1 = _this.add.sprite(600,110,'autoImg_sp');
      _this.autoImg1Text = _this.add.text(720,120,''+_this.autoRideDist1);
      _this.autoImg1Text.anchor.setTo(0.5);
      _this.autoImg1Text.font = 'myfont';
      _this.autoImg1Text.align = 'center';
      _this.autoImg1Text.fontWeight = 'bold';
      _this.autoImg1Text.fontSize = 25;
         
      if(_this.greyItem1)
        {
            _this.autoImg1.frame = 1;
            _this.autoImg1Text.fill = "#949494";
        }
        else
          {
            _this.autoImg1.frame = 0;
            _this.autoImg1Text.fill = "#000000"; 
          }
      _this.carrotImg = _this.add.sprite(600,162,_this.itemArray1+'Img_sp');
        
      _this.carrotImgText = _this.add.text(720,170,''+_this.vegitableList);
      _this.carrotImgText.anchor.setTo(0.5);
      _this.carrotImgText.font = 'myfont';
      _this.carrotImgText.align = 'center';
      _this.carrotImgText.fontWeight = 'bold';
      _this.carrotImgText.fontSize = 25;
      
        if(_this.greyItem2)
        {
            _this.carrotImg.frame = 1;
            _this.carrotImgText.fill = "#949494";
        }
        else
          {
            _this.carrotImg.frame = 0;
            _this.carrotImgText.fill = "#000000";  
          }
      _this.bananaImg = _this.add.sprite(600,195,_this.itemArray2+'Img_sp');
        
      _this.bananaImgText = _this.add.text(720,210,''+_this.fruitList);
      _this.bananaImgText.anchor.setTo(0.5);
      _this.bananaImgText.font = 'myfont';
      _this.bananaImgText.align = 'center';
      _this.bananaImgText.fontWeight = 'bold';
      _this.bananaImgText.fontSize = 25;
        
        if(_this.greyItem3)
        {
            _this.bananaImg.frame = 1;
            _this.bananaImgText.fill = "#949494";
        }
        else
          {
            _this.bananaImg.frame = 0;
            _this.bananaImgText.fill = "#000000";  
          }
      _this.autoImg2 = _this.add.sprite(600,240,'autoImg_sp');
        
      _this.autoImg2Text = _this.add.text(720,255,''+_this.autoRideDist2);
      _this.autoImg2Text.anchor.setTo(0.5);
      _this.autoImg2Text.font = 'myfont';
      _this.autoImg2Text.align = 'center';
      _this.autoImg2Text.fontWeight = 'bold';
      _this.autoImg2Text.fontSize = 25;
       
        if(_this.greyItem4)
        {
            _this.autoImg2.frame = 1;
            _this.autoImg2Text.fill = "#949494";
        }
        else
          {
            _this.autoImg2.frame = 0;
            _this.autoImg2Text.fill = "#000000";
          }
      _this.candyImg = _this.add.sprite(600,280,_this.itemArray3+'Img_sp');
        
      _this.candyImgText = _this.add.text(720,295,''+_this.grossList);
      _this.candyImgText.anchor.setTo(0.5);
      _this.candyImgText.font = 'myfont';
      _this.candyImgText.align = 'center';
      _this.candyImgText.fontWeight = 'bold';
      _this.candyImgText.fontSize = 25;
        
        if(_this.greyItem5)
        {
            _this.candyImg.frame = 1;
            _this.candyImgText.fill = "#949494";
        }
        else
          {
            _this.candyImg.frame = 0;
            _this.candyImgText.fill = "#000000"; 
          }
      _this.jalebiImg = _this.add.sprite(600,325,_this.itemArray4+'Img_sp');
        
      /*_this.jalebiImgTextN = _this.add.text(690,322,''+_this.sweetList2N);
      _this.jalebiImgTextN.anchor.setTo(0.5);
      _this.jalebiImgTextN.font = 'myfont';
      _this.jalebiImgTextN.align = 'center';
      _this.jalebiImgTextN.fontWeight = 'bold';
      _this.jalebiImgTextN.fontSize = 25;*/
        
      _this.jalebiImgText_ = _this.add.text(720,340,''+_this.sweetList);
      _this.jalebiImgText_.anchor.setTo(0.5);
      _this.jalebiImgText_.font = 'myfont';
      _this.jalebiImgText_.align = 'center';
      _this.jalebiImgText_.fontWeight = 'bold';
      _this.jalebiImgText_.fontSize = 25;
        
      /*_this.jalebiImgTextStd = _this.add.text(720,340,''+_this.sweetList2Std);
      _this.jalebiImgTextStd.anchor.setTo(0.5);
      _this.jalebiImgTextStd.font = 'myfont';
      _this.jalebiImgTextStd.align = 'center';
      _this.jalebiImgTextStd.fontWeight = 'bold';
      _this.jalebiImgTextStd.fontSize = 25;
      
      _this.jalebiImgTextD = _this.add.text(690,355,''+_this.sweetList2D);
      _this.jalebiImgTextD.anchor.setTo(0.5);
      _this.jalebiImgTextD.font = 'myfont';
      _this.jalebiImgTextD.align = 'center';
      _this.jalebiImgTextD.fontWeight = 'bold';
      _this.jalebiImgTextD.fontSize = 25;*/
        
        if(_this.greyItem6)
        {
            _this.jalebiImg.frame = 1;
            //_this.jalebiImgTextN.fill = "#949494";
            _this.jalebiImgText_.fill = "#949494";
            //_this.jalebiImgTextStd.fill = "#949494";
            //_this.jalebiImgTextD.fill = "#949494";
        }
        else
          {
            _this.jalebiImg.frame = 0;
            //_this.jalebiImgTextN.fill = "#000000"; 
            _this.jalebiImgText_.fill = "#000000";  
            //_this.jalebiImgTextStd.fill = "#000000";  
            //_this.jalebiImgTextD.fill = "#000000"; 
          }
      _this.autoImg3 = _this.add.sprite(600,370,'autoImg_sp');
        
      _this.autoImg3Text = _this.add.text(720,380,''+_this.autoRideDist3);
      _this.autoImg3Text.anchor.setTo(0.5);
      _this.autoImg3Text.font = 'myfont';
      _this.autoImg3Text.align = 'center';
      _this.autoImg3Text.fontWeight = 'bold';
      _this.autoImg3Text.fontSize = 25;
        
        if(_this.greyItem7)
        {
            _this.autoImg3.frame = 1;
            _this.autoImg3Text.fill = "#949494";
        }
        else
          {
            _this.autoImg3.frame = 0;
            _this.autoImg3Text.fill = "#000000"; 
          }
      _this.oilImg = _this.add.sprite(600,405,_this.itemArray5+'Img_sp');
        
      /*_this.oilImgTextN = _this.add.text(690,407,''+_this.oilListN);
      _this.oilImgTextN.anchor.setTo(0.5);
      _this.oilImgTextN.font = 'myfont';
      _this.oilImgTextN.align = 'center';
      _this.oilImgTextN.fontWeight = 'bold';
      _this.oilImgTextN.fontSize = 25;*/
        
      _this.oilImgText_ = _this.add.text(720,430,''+_this.oilList);
      _this.oilImgText_.anchor.setTo(0.5);
      _this.oilImgText_.font = 'myfont';
      _this.oilImgText_.align = 'center';
      _this.oilImgText_.fontWeight = 'bold';
      _this.oilImgText_.fontSize = 25;
    
      /*_this.oilImgTextStd = _this.add.text(720,422,''+_this.oilListStd);
      _this.oilImgTextStd.anchor.setTo(0.5);
      _this.oilImgTextStd.font = 'myfont';
      _this.oilImgTextStd.align = 'center';
      _this.oilImgTextStd.fontWeight = 'bold';
      _this.oilImgTextStd.fontSize = 25;
      
      _this.oilImgTextD = _this.add.text(690,435,''+_this.oilListD);
      _this.oilImgTextD.anchor.setTo(0.5);
      _this.oilImgTextD.font = 'myfont';
      _this.oilImgTextD.align = 'center';
      _this.oilImgTextD.fontWeight = 'bold';
      _this.oilImgTextD.fontSize = 25;*/
        
      if(_this.greyItem8)
        {
            _this.oilImg.frame = 1;
            //_this.oilImgTextN.fill = "#949494";
            _this.oilImgText_.fill = "#949494";
            //_this.oilImgTextStd.fill = "#949494";
            //_this.oilImgTextD.fill = "#949494";
        }
        else
          {
            _this.oilImg.frame = 0;
            //_this.oilImgTextN.fill = "#000000";  
            _this.oilImgText_.fill = "#000000"; 
            //_this.oilImgTextStd.fill = "#000000";
            //_this.oilImgTextD.fill = "#000000";  
          }
      _this.autoImg4 = _this.add.sprite(600,450,'autoImg_sp');
        
      _this.autoImg4Text = _this.add.text(720,465,''+_this.autoRideDist4);
      _this.autoImg4Text.anchor.setTo(0.5);
      _this.autoImg4Text.font = 'myfont';
      _this.autoImg4Text.align = 'center';
      _this.autoImg4Text.fontWeight = 'bold';
      _this.autoImg4Text.fontSize = 25;
    
        if(_this.greyItem9)
        {
            _this.autoImg4.frame = 1;
            _this.autoImg4Text.fill = "#949494";
        }
        else
          {
            _this.autoImg4.frame = 0;
            _this.autoImg4Text.fill = "#000000";  
          }
          
        _this.listitemsGroup = _this.add.group();
        _this.listitemsGroup.add(_this.receiptToClick);
        _this.listitemsGroup.add(_this.autoImg1);
        _this.listitemsGroup.add(_this.carrotImg);
        _this.listitemsGroup.add(_this.bananaImg);
        _this.listitemsGroup.add(_this.autoImg2);
        _this.listitemsGroup.add(_this.candyImg);
        _this.listitemsGroup.add(_this.jalebiImg);
        _this.listitemsGroup.add(_this.autoImg3);
        _this.listitemsGroup.add(_this.oilImg);
        _this.listitemsGroup.add(_this.autoImg4);
        _this.listitemsGroup.add(_this.autoImg1Text);
        _this.listitemsGroup.add(_this.carrotImgText);
        _this.listitemsGroup.add(_this.bananaImgText);
        _this.listitemsGroup.add(_this.autoImg2Text);
        _this.listitemsGroup.add(_this.candyImgText);
        //_this.listitemsGroup.add(_this.jalebiImgTextN);
        _this.listitemsGroup.add(_this.jalebiImgText_);
        //_this.listitemsGroup.add(_this.jalebiImgTextStd);
        //_this.listitemsGroup.add(_this.jalebiImgTextD);
        _this.listitemsGroup.add(_this.autoImg3Text);
        //_this.listitemsGroup.add(_this.oilImgTextN);
        //_this.listitemsGroup.add(_this.oilImgTextStd);
        _this.listitemsGroup.add(_this.oilImgText_);
        //_this.listitemsGroup.add(_this.oilImgTextD);
        _this.listitemsGroup.add(_this.autoImg4Text);
        
        _this.closeWalletL = _this.add.sprite(510,46,'closeWallet_sp');
        _this.closeWalletL.inputEnabled = true;
        _this.closeWalletL.input.useHandCursor = true;
        _this.closeWalletL.events.onInputDown.add(function(){
           // _this.boxonRightCrnrL.destroy();
           // _this.walletBtnOnBoxL.destroy();
            
            /*_this.boxonRightCrnrL = _this.add.sprite(857,159,'blueBox_sp');
            _this.walletBtnOnBoxL = _this.add.sprite(875,180,'receiptBtn_sp');
 
            _this.boxonRightCrnrL.inputEnabled = true;
            _this.boxonRightCrnrL.input.useHandCursor = true;
            _this.boxonRightCrnrL.events.onInputDown.add(this.backClicked,this);*/
            
            _this.boxonRightCrnrL.inputEnabled = true;
            _this.boxonRightCrnrL.input.useHandCursor = true;
            
            _this.closeWalletL.destroy();
            //commonNavBarConversion.removeNotes();
            _this.listitemsGroup.destroy();
            _this.boxonRightCrnrL.frame= 0;
         },_this); 
    },
  
addNotesToWallet:function(target)
    {
       //alert("here");
        _this.vx = target.x;   
        _this.vy = target.y;

        target.input.enableDrag(true);
        target.events.onDragStart.add(this.dragstartedToWallet,this);
        target.events.onDragStop.add(this.dragStopedWallet,this);
        
    },
    dragstartedToWallet:function(target){
         //_this.notesChangeGroup.bringToTop();
        
        _this.world.bringToTop(target.parent);
    },
dragStopedWallet:function(target){
    
    if(_this.checkOverlap(target,_this.wallet))
        {
            _this.snapSound = _this.add.audio('snapSound');
            _this.snapSound.play();
            
            if(target.name == '200rsNote_sp')
                {
                     _this.walletCountTopass += 200;
                    _this.walletText.setText(_this.walletCountTopass);
                    target.destroy();
                    _this.twoHundredFrame++;
                             _this.twoHunSprite.frame = _this.twoHundredFrame;
                    
                    _this.changeNoteCount--;
                    
                    if(_this.changeNoteCount<=0)
                    {
                        if(_this.change1added)
                            _this.changeAddedToWallet2();
                        else if(_this.change2added)
                            _this.changeAddedToWallet3();
                        else if(_this.change3added)
                            _this.gotoCelebrationScene();
                        else
                            _this.changeAddedToWallet1();
                    }
                            
                       
                }
            
            if(target.name == '100rsNote_sp')
                {
                     _this.walletCountTopass += 100;
                    _this.walletText.setText(_this.walletCountTopass);
                    target.destroy();
                    _this.oneHundredFrame++;
                             _this.HundredSprite.frame = _this.oneHundredFrame;
                    
                    _this.changeNoteCount--;
                    
                    if(_this.changeNoteCount<=0)
                    {
                        if(_this.change1added)
                            _this.changeAddedToWallet2();
                        else if(_this.change2added)
                            _this.changeAddedToWallet3();
                        else if(_this.change3added)
                            _this.gotoCelebrationScene();
                        else
                            _this.changeAddedToWallet1();
                    }
                }
        
            if(target.name == '1rsNote_sp')
                {
                     /*if(_this.billValue == 'Candy')
                     {
                         _this.walletCountTopass += 1;
                         _this.walletText.setText(_this.walletCountTopass);
                         target.visible = false;
                         _this.oneFrame++;
                         _this.oneSprite.frame = _this.oneFrame;
                         _this.changeAddedToWallet1();
                    }
                    else
                        {*/
                             _this.walletCountTopass += 1;
                             _this.walletText.setText(_this.walletCountTopass);
                             target.destroy();
                             _this.oneFrame++;
                             _this.oneSprite.frame = _this.oneFrame;
                    
                    /*if(_this.change1added)
                        _this.changeAddedToWallet2();
                    else
                        _this.changeAddedToWallet1();*/
                    
                    _this.changeNoteCount--;
                    
                    if(_this.changeNoteCount<=0)
                    {
                        if(_this.change1added)
                            _this.changeAddedToWallet2();
                        else if(_this.change2added)
                            _this.changeAddedToWallet3();
                        else if(_this.change3added)
                            _this.gotoCelebrationScene();
                        else
                            _this.changeAddedToWallet1();
                    }
                       // }
                }
            if(target.name == '5rsNote_sp')
                {
                   /* if(_this.billValue == 'Jalebi')
                     {
                         _this.walletCountTopass += 5;
                         _this.walletText.setText(_this.walletCountTopass);
                         target.destroy();
                         _this.fiveFrame++;
                         _this.fiveSprite.frame = _this.fiveFrame;
                         _this.changeAddedToWallet2();
                     }
                    else
                        {*/
                             _this.walletCountTopass += 5;
                             _this.walletText.setText(_this.walletCountTopass);
                             target.destroy();
                             _this.fiveFrame++;
                             _this.fiveSprite.frame = _this.fiveFrame;
                    
                    _this.changeNoteCount--;
                    
                    if(_this.changeNoteCount<=0)
                    {
                        if(_this.change1added)
                            _this.changeAddedToWallet2();
                        else if(_this.change2added)
                            _this.changeAddedToWallet3();
                        else if(_this.change3added)
                            _this.gotoCelebrationScene();
                        else
                            _this.changeAddedToWallet1();
                    }
                       // }
                }
            if(target.name == '2rsNote_sp')
                {
                     _this.walletCountTopass += 2;
                     _this.walletText.setText(_this.walletCountTopass);
                     target.destroy();
                     _this.twoFrame++;
                     _this.twoSprite.frame = _this.twoFrame;
                    
                    _this.changeNoteCount--;
                    
                    if(_this.changeNoteCount<=0)
                    {
                        if(_this.change1added)
                            _this.changeAddedToWallet2();
                        else if(_this.change2added)
                            _this.changeAddedToWallet3();
                        else if(_this.change3added)
                            _this.gotoCelebrationScene();
                        else
                            _this.changeAddedToWallet1();
                    }
                }
            if(target.name == '10rsNote_sp')
                {
                     _this.walletCountTopass += 10;
                     _this.walletText.setText(_this.walletCountTopass);
                     target.destroy();
                     _this.tenFrame++;
                     _this.tenSprite.frame = _this.tenFrame;
                    
                    _this.changeNoteCount--;
                    
                    if(_this.changeNoteCount<=0)
                    {
                        if(_this.change1added)
                            _this.changeAddedToWallet2();
                        else if(_this.change2added)
                            _this.changeAddedToWallet3();
                        else if(_this.change3added)
                            _this.gotoCelebrationScene();
                        else
                            _this.changeAddedToWallet1();
                    }
                }
            if(target.name == '20rsNote_sp')
                {
                     _this.walletCountTopass += 20;
                     _this.walletText.setText(_this.walletCountTopass);
                    target.destroy();
                     _this.twentyFrame++;
                     _this.twentySprite.frame = _this.twentyFrame;
                    
                    _this.changeNoteCount--;
                    
                    if(_this.changeNoteCount<=0)
                    {
                        if(_this.change1added)
                            _this.changeAddedToWallet2();
                        else if(_this.change2added)
                            _this.changeAddedToWallet3();
                        else if(_this.change3added)
                            _this.gotoCelebrationScene();
                        else
                            _this.changeAddedToWallet1();
                    }
                }
            if(target.name == '50rsNote_sp')
                {
                     _this.walletCountTopass += 50;
                     _this.walletText.setText(_this.walletCountTopass);
                     target.destroy();
                     _this.fiftyFrame++;
                     _this.fiftySprite.frame = _this.fiftyFrame;
                    
                    _this.changeNoteCount--;
                    
                    if(_this.changeNoteCount<=0)
                    {
                        if(_this.change1added)
                            _this.changeAddedToWallet2();
                        else if(_this.change2added)
                            _this.changeAddedToWallet3();
                        else if(_this.change3added)
                            _this.gotoCelebrationScene();
                        else
                            _this.changeAddedToWallet1();
                    }
                }
            /*if(_this.walletCountTopass == 268)
                {
                    if(_this.billValue == 'Oil')
                     {
                        _this.exchangeMoneyAddedtoWallet();
                     }
                }
            if(_this.walletCountTopass == 128)
                {
                    if(_this.billValue == 'autoPay')
                     {
                        _this.gotoCelebrationScene();
                     }
                }*/
        }
},
    
    
    addNotesToWallet2:function(target)
    {
       //alert("here");
        _this.vx = target.x;   
        _this.vy = target.y;
        target.input.enableDrag(true);
        target.events.onDragStart.add(this.dragstartedToWallet2,this);
        target.events.onDragStop.add(this.dragStopedWallet2,this);
        
    },
    dragstartedToWallet2:function(target){
         //_this.notesChangeGroup.bringToTop();
        
        _this.world.bringToTop(target.parent);
    },
dragStopedWallet2:function(target){
    
    if(_this.checkOverlap(target,_this.wallet))
        {
            _this.snapSound = _this.add.audio('snapSound');
            _this.snapSound.play();
            
            if(target.name == '200rsNote_sp')
                {
                     _this.walletCountTopass += 200;
                    _this.walletText.setText(_this.walletCountTopass);
                    target.destroy();
                    _this.twoHundredFrame++;
                             _this.twoHunSprite.frame = _this.twoHundredFrame;
                    
                    _this.changeNoteCount2--;
                    
                    if(_this.changeNoteCount2<=0)
                    {
                       _this.exchangeMoneyAddedtoWallet();
                    }
                            
                       
                }
            
            if(target.name == '100rsNote_sp')
                {
                     _this.walletCountTopass += 100;
                    _this.walletText.setText(_this.walletCountTopass);
                    target.destroy();
                    _this.oneHundredFrame++;
                             _this.HundredSprite.frame = _this.oneHundredFrame;
                    
                    _this.changeNoteCount2--;
                    
                    if(_this.changeNoteCount2<=0)
                    {
                       _this.exchangeMoneyAddedtoWallet();
                    }
                }
        
            if(target.name == '1rsNote_sp')
                {
                     /*if(_this.billValue == 'Candy')
                     {
                         _this.walletCountTopass += 1;
                         _this.walletText.setText(_this.walletCountTopass);
                         target.visible = false;
                         _this.oneFrame++;
                         _this.oneSprite.frame = _this.oneFrame;
                         _this.changeAddedToWallet1();
                    }
                    else
                        {*/
                             _this.walletCountTopass += 1;
                             _this.walletText.setText(_this.walletCountTopass);
                             target.destroy();
                             _this.oneFrame++;
                             _this.oneSprite.frame = _this.oneFrame;
                    
                    /*if(_this.change1added)
                        _this.changeAddedToWallet2();
                    else
                        _this.changeAddedToWallet1();*/
                    
                    _this.changeNoteCount2--;
                    
                    if(_this.changeNoteCount2<=0)
                    {
                       _this.exchangeMoneyAddedtoWallet();
                    }
                       // }
                }
            if(target.name == '5rsNote_sp')
                {
                   /* if(_this.billValue == 'Jalebi')
                     {
                         _this.walletCountTopass += 5;
                         _this.walletText.setText(_this.walletCountTopass);
                         target.destroy();
                         _this.fiveFrame++;
                         _this.fiveSprite.frame = _this.fiveFrame;
                         _this.changeAddedToWallet2();
                     }
                    else
                        {*/
                             _this.walletCountTopass += 5;
                             _this.walletText.setText(_this.walletCountTopass);
                             target.destroy();
                             _this.fiveFrame++;
                             _this.fiveSprite.frame = _this.fiveFrame;
                    
                    _this.changeNoteCount2--;
                    
                    if(_this.changeNoteCount2<=0)
                    {
                       _this.exchangeMoneyAddedtoWallet();
                    }
                       // }
                }
            if(target.name == '2rsNote_sp')
                {
                     _this.walletCountTopass += 2;
                     _this.walletText.setText(_this.walletCountTopass);
                     target.destroy();
                     _this.twoFrame++;
                     _this.twoSprite.frame = _this.twoFrame;
                    
                    _this.changeNoteCount2--;
                    
                    if(_this.changeNoteCount2<=0)
                    {
                       _this.exchangeMoneyAddedtoWallet();
                    }
                }
            if(target.name == '10rsNote_sp')
                {
                     _this.walletCountTopass += 10;
                     _this.walletText.setText(_this.walletCountTopass);
                     target.destroy();
                     _this.tenFrame++;
                     _this.tenSprite.frame = _this.tenFrame;
                    
                    _this.changeNoteCount2--;
                    
                    if(_this.changeNoteCount2<=0)
                    {
                       _this.exchangeMoneyAddedtoWallet();
                    }
                }
            if(target.name == '20rsNote_sp')
                {
                     _this.walletCountTopass += 20;
                     _this.walletText.setText(_this.walletCountTopass);
                    target.destroy();
                     _this.twentyFrame++;
                     _this.twentySprite.frame = _this.twentyFrame;
                    
                    _this.changeNoteCount2--;
                    
                    if(_this.changeNoteCount2<=0)
                    {
                       _this.exchangeMoneyAddedtoWallet();
                    }
                }
            if(target.name == '50rsNote_sp')
                {
                     _this.walletCountTopass += 50;
                     _this.walletText.setText(_this.walletCountTopass);
                     target.destroy();
                     _this.fiftyFrame++;
                     _this.fiftySprite.frame = _this.fiftyFrame;
                    
                    _this.changeNoteCount2--;
                    
                    if(_this.changeNoteCount2<=0)
                    {
                       _this.exchangeMoneyAddedtoWallet();
                    }
                }
            /*if(_this.walletCountTopass == 268)
                {
                    if(_this.billValue == 'Oil')
                     {
                        _this.exchangeMoneyAddedtoWallet();
                     }
                }
            if(_this.walletCountTopass == 128)
                {
                    if(_this.billValue == 'autoPay')
                     {
                        _this.gotoCelebrationScene();
                     }
                }*/
        }
},


};
