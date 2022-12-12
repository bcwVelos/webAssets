/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_124883_130226',
	epistaxisPrimary: 'fld10050_124884_130227'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_124886_130229',
	bruisingPrimary: 'fld10050_124887_130230'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_124889_130232',
	minorWoundsPrimary: 'fld10050_124890_130233'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_124892_130235',
	hematuriaPrimary: 'fld10050_124893_130236'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_124894_130237',
	giBleedingPrimary: 'fld10050_124896_130239'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_124897_130240',
	oralCavityPrimary: 'fld10050_124899_130242'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_124900_130243',
	toothExtractionPrimary: 'fld10050_124902_130245'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_124903_130246',
	surgeryPrimary: 'fld10050_124905_130248'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_124908_130251',
	menstrualPrimary: 'fld10050_124909_130252'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_124910_130253',
	deliveryPrimary: 'fld10050_124912_130255'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_124913_130256',
	hematomaPrimary: 'fld10050_124915_130258'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_124916_130259',
	hemarthrosisPrimary: 'fld10050_124918_130261'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_124920_130263',
	cnsPrimary: 'fld10050_124921_130264'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_124922_130265',
	otherBleedingPrimary: 'fld10050_124924_130267'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_124853_130196',
	totalScoreBottom: 'fld10050_124929_130272'
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('[class^="calculateBtn"]').click(function(event) {
		calcScore();
	});
	
	$j('[id^="submit_btn"]').click(function(event) {
		calcScore();
	});
});
