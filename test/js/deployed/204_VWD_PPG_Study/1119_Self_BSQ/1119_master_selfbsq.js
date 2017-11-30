/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_127553_132460',
	epistaxisPrimary: 'fld10050_127554_132461'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_127556_132463',
	bruisingPrimary: 'fld10050_127557_132464'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_127559_132466',
	minorWoundsPrimary: 'fld10050_127560_132467'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_127562_132469',
	hematuriaPrimary: 'fld10050_127563_132470'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_127564_132471',
	giBleedingPrimary: 'fld10050_127566_132473'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_127567_132474',
	oralCavityPrimary: 'fld10050_127569_132476'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_127570_132477',
	toothExtractionPrimary: 'fld10050_127572_132479'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_127573_132480',
	surgeryPrimary: 'fld10050_127575_132482'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_127578_132485',
	menstrualPrimary: 'fld10050_127579_132486'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_127580_132487',
	deliveryPrimary: 'fld10050_127582_132489'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_127583_132490',
	hematomaPrimary: 'fld10050_127585_132492'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_127586_132493',
	hemarthrosisPrimary: 'fld10050_127588_132495'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_127590_132497',
	cnsPrimary: 'fld10050_127591_132498'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_127592_132499',
	otherBleedingPrimary: 'fld10050_127594_132501'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_127523_132430',
	totalScoreBottom: 'fld10050_127599_132506'
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
