/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_122281_127706',
	epistaxisPrimary: 'fld10050_122282_127707'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_122284_127709',
	bruisingPrimary: 'fld10050_122285_127710'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_122287_127712',
	minorWoundsPrimary: 'fld10050_122288_127713'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_122290_127715',
	hematuriaPrimary: 'fld10050_122291_127716'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_122292_127717',
	giBleedingPrimary: 'fld10050_122294_127719'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_122295_127720',
	oralCavityPrimary: 'fld10050_122297_127722'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_122298_127723',
	toothExtractionPrimary: 'fld10050_122300_127725'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_122301_127726',
	surgeryPrimary: 'fld10050_122303_127728'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_122306_127731',
	menstrualPrimary: 'fld10050_122307_127732'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_122308_127733',
	deliveryPrimary: 'fld10050_122310_127735'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_122311_127736',
	hematomaPrimary: 'fld10050_122313_127738'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_122314_127739',
	hemarthrosisPrimary: 'fld10050_122316_127741'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_122318_127743',
	cnsPrimary: 'fld10050_122319_127744'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_122320_127745',
	otherBleedingPrimary: 'fld10050_122322_127747'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_122251_127676',
	totalScoreBottom: 'fld10050_122327_127752'
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
