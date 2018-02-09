/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_125146_130508',
	epistaxisPrimary: 'fld10050_125147_130509'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_125149_130511',
	bruisingPrimary: 'fld10050_125150_130512'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_125152_130514',
	minorWoundsPrimary: 'fld10050_125153_130515'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_125155_130517',
	hematuriaPrimary: 'fld10050_125156_130518'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_125157_130519',
	giBleedingPrimary: 'fld10050_125159_130521'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_125160_130522',
	oralCavityPrimary: 'fld10050_125162_130524'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_122298_127723',
	toothExtractionPrimary: 'fld10050_125165_130527'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_125166_130528',
	surgeryPrimary: 'fld10050_125168_130530'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_125171_130533',
	menstrualPrimary: 'fld10050_125172_130534'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_125173_130535',
	deliveryPrimary: 'fld10050_125175_130537'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_125176_130538',
	hematomaPrimary: 'fld10050_125178_130540'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_125179_130541',
	hemarthrosisPrimary: 'fld10050_125181_130543'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_125183_130545',
	cnsPrimary: 'fld10050_125184_130546'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_125185_130547',
	otherBleedingPrimary: 'fld10050_125187_130549'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_125116_130478',
	totalScoreBottom: 'fld10050_125192_130554'
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
