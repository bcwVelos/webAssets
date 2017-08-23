/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_126038_130806',
	epistaxisPrimary: 'fld10050_126039_130807'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_126041_130809',
	bruisingPrimary: 'fld10050_126042_130810'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_126044_130812',
	minorWoundsPrimary: 'fld10050_126045_130813'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_126047_130815',
	hematuriaPrimary: 'fld10050_126048_130816'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_126049_130817',
	giBleedingPrimary: 'fld10050_126051_130819'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_126052_130820',
	oralCavityPrimary: 'fld10050_126054_130822'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_126055_130823',
	toothExtractionPrimary: 'fld10050_126057_130825'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_126058_130826',
	surgeryPrimary: 'fld10050_126060_130828'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_126063_130831',
	menstrualPrimary: 'fld10050_126064_130832'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_126065_130833',
	deliveryPrimary: 'fld10050_126067_130835'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_126068_130836',
	hematomaPrimary: 'fld10050_126070_130838'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_126071_130839',
	hemarthrosisPrimary: 'fld10050_126073_130841'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_126075_130843',
	cnsPrimary: 'fld10050_126076_130844'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_126077_130845',
	otherBleedingPrimary: 'fld10050_126079_130847'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_126008_130776',
	totalScoreBottom: 'fld10050_126084_130852'
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		calcScore();
	});
	
	$j('.[id^="eSign"]').focus(function(event) {
		calcScore();
	});
});