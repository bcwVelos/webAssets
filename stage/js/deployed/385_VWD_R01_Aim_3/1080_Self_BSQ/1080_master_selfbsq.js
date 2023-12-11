/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_125053_130398',
	epistaxisPrimary: 'fld10050_125054_130399'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_125056_130401',
	bruisingPrimary: 'fld10050_125057_130402'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_125059_130404',
	minorWoundsPrimary: 'fld10050_125060_130405'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_125062_130407',
	hematuriaPrimary: 'fld10050_125063_130408'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_125064_130409',
	giBleedingPrimary: 'fld10050_125066_130411'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_125067_130412',
	oralCavityPrimary: 'fld10050_125069_130414'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_125070_130415',
	toothExtractionPrimary: 'fld10050_125072_130417'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_125073_130418',
	surgeryPrimary: 'fld10050_125075_130420'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_125078_130423',
	menstrualPrimary: 'fld10050_125079_130424'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_125080_130425',
	deliveryPrimary: 'fld10050_125082_130427'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_125083_130428',
	hematomaPrimary: 'fld10050_125085_130430'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_125086_130431',
	hemarthrosisPrimary: 'fld10050_125088_130433'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_125090_130435',
	cnsPrimary: 'fld10050_125091_130436'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_125092_130437',
	otherBleedingPrimary: 'fld10050_125094_130439'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_125023_130368',
	totalScoreBottom: 'fld10050_125099_130444'
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
