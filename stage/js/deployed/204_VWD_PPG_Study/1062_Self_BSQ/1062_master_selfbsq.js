/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_122026_127448',
	epistaxisPrimary: 'fld10050_122027_127449'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_122029_127451',
	bruisingPrimary: 'fld10050_122030_127452'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_122032_127454',
	minorWoundsPrimary: 'fld10050_122033_127455'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_122035_127457',
	hematuriaPrimary: 'fld10050_122036_127458'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_122037_127459',
	giBleedingPrimary: 'fld10050_122039_127461'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_122040_127462',
	oralCavityPrimary: 'fld10050_122042_127464'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_122043_127465',
	toothExtractionPrimary: 'fld10050_122045_127467'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_122046_127468',
	surgeryPrimary: 'fld10050_122048_127470'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_122051_127473',
	menstrualPrimary: 'fld10050_122052_127474'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_122053_127475',
	deliveryPrimary: 'fld10050_122055_127477'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_122056_127478',
	hematomaPrimary: 'fld10050_122058_127480'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_122059_127481',
	hemarthrosisPrimary: 'fld10050_122061_127483'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_122063_127485',
	cnsPrimary: 'fld10050_122064_127486'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_122065_127487',
	otherBleedingPrimary: 'fld10050_122067_127489'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_121996_127418',
	totalScoreBottom: 'fld10050_122072_127494'
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
