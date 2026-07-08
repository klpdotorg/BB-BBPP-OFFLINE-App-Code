Game.gradeSelectionScreen=function(){

};

Game.gradeSelectionScreen.prototype={

	
	create:function(game){		

		
        	if(window.mode == "practice")
			{
				game.state.start('practiceModegradeSelectionScreen',true,false);	
			}	
			else
			{
				game.state.start('challengeModeGgradeSelectionScreen',true,false);
			}

	},


};