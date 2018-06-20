/**
 * 
 */
painDetectVariables = {
	courseOfPain: 'fld10050_128224_134206',
	painRadiate: 'fld10050_128225_134207',
	burningSensation: 'fld10050_128216_134198',
	tinglingSensation: 'fld10050_128220_134202',
	lightTouching: 'fld10050_128226_134208',
	painAttacks: 'fld10050_128236_134218',
	coldHeat: 'fld10050_128217_134199',
	numbnessSensation: 'fld10050_128227_134209',
	slightPressure: 'fld10050_128232_134214'
}

scoreVariables = {
	hardlyNoticedScore: 'fld10050_128233_134215',
	slightlyScore: 'fld10050_128231_134213',
	moderatelyScore: 'fld10050_128228_134210',
	stronglyScore: 'fld10050_128229_134211',
	veryStronglyScore: 'fld10050_128230_134212',
	totalScore: 'fld10050_128222_134204',
	finalScore: 'fld10050_128218_134200',
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		calcScore();
	});
	
	$j('.[id^="submit_btn"]').click(function(event) {
		calcScore();
	});
});
