/**
 * 
 */
painDetectVariables = {
	courseOfPain: 'fld10050_132674_137672',
	painRadiate: 'fld10050_132675_137673',
	burningSensation: 'fld10050_132666_137664',
	tinglingSensation: 'fld10050_132670_137668',
	lightTouching: 'fld10050_132676_137674',
	painAttacks: 'fld10050_132686_137684',
	coldHeat: 'fld10050_132667_137665',
	numbnessSensation: 'fld10050_132677_137675',
	slightPressure: 'fld10050_132682_137680'
}

scoreVariables = {
	hardlyNoticedScore: 'fld10050_132683_137681',
	slightlyScore: 'fld10050_132681_137679',
	moderatelyScore: 'fld10050_132678_137676',
	stronglyScore: 'fld10050_132679_137677',
	veryStronglyScore: 'fld10050_132680_137678',
	totalScore: 'fld10050_132672_137670',
	finalScore: 'fld10050_132668_137666',
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
