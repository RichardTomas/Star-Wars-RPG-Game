$(document).ready(function() {

	//Characters
	var quiGonJin = {
		name: 'Qui-Gon Jin',
		health: 80,
		attack: 9,
		counterAttack: 6,
	};
	var darthMaul = {
		name: 'Darth Maul',
		health: 120,
		attack: 9,
		counterAttack: 5,
	};
	var obiWanKenobi = {
		name: 'Obi-Wan Kenobi',
		health: 110,
		attack: 8,
		counterAttack: 8,
	};
	var darthVader = {
		name: 'Darth Vader',
		health: 70,
		attack: 10,
		counterAttack: 8,
	};

	var champion;
	var opponent;
	var charSelected = false;
	var oppoSelected = false;


	$('#quiGonJin').on('click', function() {
		console.log('quiGonJin selected');

		if(charSelected === false) {
			$('.message').replaceWith('<h5 class="message">Choose your Opponent!</h5>');
			$('#playerArea').replaceWith($('#quiGonJin').addClass('col-md-3'));
		} else {
			$('.message').replaceWith('<h5 class="message">Fight!</h5>');
			$('#enemyArea').replaceWith($('#quiGonJin').addClass('col-md-3'));
		}
	});

	$('#darthMaul').on('click', function() {
		console.log('darthMaul selected');

		if(charSelected === false) {
			$('.message').replaceWith('<h5 class="message">Choose your Opponent!</h5>');
			$('#playerArea').replaceWith($('#darthMaul').addClass('col-md-3'));
		} else {
			$('.message').replaceWith('<h5 class="message">Choose your Character!</h5>');
			$('#enemyArea').replaceWith($('#darthMaul').addClass('col-md-3'));
		}
	});

	//$('#enemyArea').replaceWith($('#darthMaul').addClass('col-md-3'));	



});

