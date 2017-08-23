/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_126123_130892',
	epistaxisPrimary: 'fld10050_126124_130893'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_126126_130895',
	bruisingPrimary: 'fld10050_126127_130896'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_126129_130898',
	minorWoundsPrimary: 'fld10050_126130_130899'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_126132_130901',
	hematuriaPrimary: 'fld10050_126133_130902'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_126134_130903',
	giBleedingPrimary: 'fld10050_126136_130905'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_126137_130906',
	oralCavityPrimary: 'fld10050_126139_130908'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_126140_130909',
	toothExtractionPrimary: 'fld10050_126142_130911'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_126143_130912',
	surgeryPrimary: 'fld10050_126145_130914'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_126148_130917',
	menstrualPrimary: 'fld10050_126149_130918'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_126150_130919',
	deliveryPrimary: 'fld10050_126152_130921'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_126153_130922',
	hematomaPrimary: 'fld10050_126155_130924'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_126156_130925',
	hemarthrosisPrimary: 'fld10050_126158_130927'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_126160_130929',
	cnsPrimary: 'fld10050_126161_130930'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_126162_130931',
	otherBleedingPrimary: 'fld10050_126164_130933'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_126093_130862',
	totalScoreBottom: 'fld10050_126169_130938'
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