/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_127723_132632',
	epistaxisPrimary: 'fld10050_127724_132633'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_127726_132635',
	bruisingPrimary: 'fld10050_127727_132636'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_127729_132638',
	minorWoundsPrimary: 'fld10050_127730_132639'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_127732_132641',
	hematuriaPrimary: 'fld10050_127733_132642'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_127734_132643',
	giBleedingPrimary: 'fld10050_127736_132645'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_127737_132646',
	oralCavityPrimary: 'fld10050_127739_132648'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_127740_132649',
	toothExtractionPrimary: 'fld10050_127742_132651'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_127743_132652',
	surgeryPrimary: 'fld10050_127745_132654'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_127748_132657',
	menstrualPrimary: 'fld10050_127749_132658'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_127750_132659',
	deliveryPrimary: 'fld10050_127752_132661'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_127753_132662',
	hematomaPrimary: 'fld10050_127755_132664'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_127756_132665',
	hemarthrosisPrimary: 'fld10050_127758_132667'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_127760_132669',
	cnsPrimary: 'fld10050_127761_132670'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_127762_132671',
	otherBleedingPrimary: 'fld10050_127764_132673'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_127693_132602',
	totalScoreBottom: 'fld10050_127769_132678'
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
