/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_122196_127620',
	epistaxisPrimary: 'fld10050_122197_127621'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_122199_127623',
	bruisingPrimary: 'fld10050_122200_127624'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_122202_127626',
	minorWoundsPrimary: 'fld10050_122203_127627'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_122205_127629',
	hematuriaPrimary: 'fld10050_122206_127630'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_122207_127631',
	giBleedingPrimary: 'fld10050_122209_127633'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_122210_127634',
	oralCavityPrimary: 'fld10050_122212_127636'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_122213_127637',
	toothExtractionPrimary: 'fld10050_122215_127639'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_122216_127640',
	surgeryPrimary: 'fld10050_122218_127642'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_122221_127645',
	menstrualPrimary: 'fld10050_122222_127646'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_122223_127647',
	deliveryPrimary: 'fld10050_122225_127649'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_122226_127650',
	hematomaPrimary: 'fld10050_122228_127652'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_122229_127653',
	hemarthrosisPrimary: 'fld10050_122231_127655'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_122233_127657',
	cnsPrimary: 'fld10050_122234_127658'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_122235_127659',
	otherBleedingPrimary: 'fld10050_122237_127661'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_122166_127590',
	totalScoreBottom: 'fld10050_122242_127666'
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
