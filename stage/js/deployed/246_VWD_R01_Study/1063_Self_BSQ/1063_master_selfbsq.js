/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_122111_127534',
	epistaxisPrimary: 'fld10050_122112_127535'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_122114_127537',
	bruisingPrimary: 'fld10050_122115_127538'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_122117_127540',
	minorWoundsPrimary: 'fld10050_122118_127541'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_122120_127543',
	hematuriaPrimary: 'fld10050_122121_127544'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_122122_127545',
	giBleedingPrimary: 'fld10050_122124_127547'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_122125_127548',
	oralCavityPrimary: 'fld10050_122127_127550'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_122128_127551',
	toothExtractionPrimary: 'fld10050_122130_127553'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_122131_127554',
	surgeryPrimary: 'fld10050_122133_127556'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_122136_127559',
	menstrualPrimary: 'fld10050_122137_127560'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_122138_127561',
	deliveryPrimary: 'fld10050_122140_127563'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_122141_127564',
	hematomaPrimary: 'fld10050_122143_127566'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_122144_127567',
	hemarthrosisPrimary: 'fld10050_122146_127569'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_122148_127571',
	cnsPrimary: 'fld10050_122149_127572'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_122150_127573',
	otherBleedingPrimary: 'fld10050_122152_127575'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_122081_127504',
	totalScoreBottom: 'fld10050_122157_127580'
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
