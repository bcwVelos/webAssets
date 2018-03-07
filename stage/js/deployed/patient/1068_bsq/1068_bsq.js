/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_122387_127832',
	epistaxisPrimary: 'fld10050_122388_127833'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_122390_127835',
	bruisingPrimary: 'fld10050_122391_127836'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_122393_127838',
	minorWoundsPrimary: 'fld10050_122394_127839'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_122396_127841',
	hematuriaPrimary: 'fld10050_122397_127842'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_122398_127843',
	giBleedingPrimary: 'fld10050_122400_127845'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_122401_127846',
	oralCavityPrimary: 'fld10050_122403_127848'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_122404_127849',
	toothExtractionPrimary: 'fld10050_122406_127851'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_122407_127852',
	surgeryPrimary: 'fld10050_122409_127854'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_122412_127857',
	menstrualPrimary: 'fld10050_122413_127858'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_122414_127859',
	deliveryPrimary: 'fld10050_122416_127861'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_122417_127862',
	hematomaPrimary: 'fld10050_122419_127864'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_122420_127865',
	hemarthrosisPrimary: 'fld10050_122422_127867'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_122424_127869',
	cnsPrimary: 'fld10050_122425_127870'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_122426_127871',
	otherBleedingPrimary: 'fld10050_122428_127873'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_122357_127802',
	totalScoreBottom: 'fld10050_122433_127878'
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
