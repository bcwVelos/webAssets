/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_125033_129780',
	epistaxisPrimary: 'fld10050_125034_129781'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_125036_129783',
	bruisingPrimary: 'fld10050_125037_129784'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_125039_129786',
	minorWoundsPrimary: 'fld10050_125040_129787'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_125042_129789',
	hematuriaPrimary: 'fld10050_125043_129790'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_125044_129791',
	giBleedingPrimary: 'fld10050_125046_129793'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_125047_129794',
	oralCavityPrimary: 'fld10050_125049_129796'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_125050_129797',
	toothExtractionPrimary: 'fld10050_125052_129799'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_125053_129800',
	surgeryPrimary: 'fld10050_125055_129802'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_125058_129805',
	menstrualPrimary: 'fld10050_125059_129806'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_125060_129807',
	deliveryPrimary: 'fld10050_125062_129809'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_125063_129810',
	hematomaPrimary: 'fld10050_125065_129812'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_125066_129813',
	hemarthrosisPrimary: 'fld10050_125068_129815'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_125070_129817',
	cnsPrimary: 'fld10050_125071_129818'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_125072_129819',
	otherBleedingPrimary: 'fld10050_125074_129821'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_125003_129750',
	totalScoreBottom: 'fld10050_125079_129826'
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
