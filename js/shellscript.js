$(function(){

	var intMoves = 5; // number of moves
	var speed = 0.5; // initial speed of moves - increase each moves
	var maxSpeed = 0.3; // maximum speed of moves

	var objMovePattern = []; // object contain a pattern for the cup shifting
	var ball = $('#ball');
	var widthBall = (ball.width()/2)-40;
	var firstCup;
	var firstClick = 0;

	(function init() {
		objMovePattern = generateMovePatterns();
		$('#btnStart').on('click', startGame);
	})();

	function startGame(event) {
		$(event.currentTarget).remove();
		firstCup = Math.round(Math.random()*2+1);
		var cup = $('.cup-'+firstCup);
		TweenMax.to(cup, 0.5,{y:-130});
		TweenMax.to(ball, 0.5,{left: cup.position().left+widthBall, y:-30, onComplete:function(){
			ball.css('z-index', '1');
			$('.cup').css('z-index', '10');
			TweenMax.to(cup, 0.5,{y:0, onComplete:shakeCups});
		}});
	}

	function shakeCups() {
		ball.css('display', 'none');
		var aPos = [$('.cup-'+objMovePattern[0][0]).position().left, $('.cup-'+objMovePattern[0][1]).position().left, $('.cup-'+objMovePattern[0][2]).position().left];
		for(var i = 0; i < objMovePattern.length; i++){
			speed = (speed > maxSpeed) ? speed/1.1 : maxSpeed;
			TweenMax.to($('.cup-'+objMovePattern[i][0]), speed,{left: aPos[0], delay:speed*i, ease:Sine.easeOut});
			TweenMax.to($('.cup-'+objMovePattern[i][1]), speed,{left: aPos[1], delay:speed*i, ease:Sine.easeOut});
			if(i == (objMovePattern.length-1)) TweenMax.to($('.cup-'+objMovePattern[i][2]), speed,{left: aPos[2], delay:speed*i, ease:Sine.easeOut, onComplete: unableCupClick});
			else TweenMax.to($('.cup-'+objMovePattern[i][2]), speed,{left: aPos[2], delay:speed*i, ease:Sine.easeOut});
		}
	}

	function unableCupClick() {
		$('.cup').css('cursor', 'pointer');
		$('.cup').on('click', clickCup);
	}

	function clickCup(event) {
		var currentScore = parseInt(sessionStorage.getItem("score"));
		if(isNaN(currentScore))
			sessionStorage.setItem("score",3);
		var currentCup = $(event.currentTarget);
		currentCup.off('click');
		currentCup.css('cursor', 'default');
		var iCup = currentCup.attr('id').split('cup')[1];
		ball.css({'left':$('.cup-'+firstCup).position().left+widthBall, 'display':'block'});
		TweenMax.to($('.cup-'+iCup), 0.5,{y: -130, ease:Sine.easeIn, delay:0.1});
		if(iCup == firstCup)
		{
			if(firstClick==0)
				sessionStorage.setItem("score", currentScore+10);
			else if(firstClick==1)
				sessionStorage.setItem("score", currentScore+5);

		//	setTimeout(
		//	function(){
		//		window.location.href ="question4.html";
		//	},1000);


		}
		firstClick++;
	}

	// Tool functions

	function generateMovePatterns() {
		var objMoves = [[1,2,3]]; // initial state, cups order
		var aMoves = [1,2,3];

		for(var i = 0; i < intMoves; i++){
			var initialPattern = [1,2,3];
			var objShuffledPattern = shuffle(initialPattern);
			while(objShuffledPattern[0] == objMoves[i][0]){
				objShuffledPattern = shuffle(initialPattern);
			}
			objMoves.push(objShuffledPattern);
		}

		return objMoves;
	}

	function shuffle(array) {
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
	}

});
