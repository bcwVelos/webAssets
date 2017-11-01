/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_125953_130720',
	epistaxisPrimary: 'fld10050_125954_130721'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_125956_130723',
	bruisingPrimary: 'fld10050_125957_130724'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_125959_130726',
	minorWoundsPrimary: 'fld10050_125960_130727'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_125962_130729',
	hematuriaPrimary: 'fld10050_125963_130730'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_125964_130731',
	giBleedingPrimary: 'fld10050_125966_130733'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_125967_130734',
	oralCavityPrimary: 'fld10050_125969_130736'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_125970_130737',
	toothExtractionPrimary: 'fld10050_127341_132248'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_125973_130740',
	surgeryPrimary: 'fld10050_127342_132249'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_125978_130745',
	menstrualPrimary: 'fld10050_125979_130746'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_125980_130747',
	deliveryPrimary: 'fld10050_125982_130749'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_125983_130750',
	hematomaPrimary: 'fld10050_125985_130752'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_125986_130753',
	hemarthrosisPrimary: 'fld10050_125988_130755'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_125990_130757',
	cnsPrimary: 'fld10050_125991_130758'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_125992_130759',
	otherBleedingPrimary: 'fld10050_125994_130761'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_125923_130690',
	totalScoreBottom: 'fld10050_125999_130766'
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