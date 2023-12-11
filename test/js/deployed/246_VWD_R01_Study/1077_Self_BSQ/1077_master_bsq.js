/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_124798_130140',
	epistaxisPrimary: 'fld10050_124799_130141'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_124801_130143',
	bruisingPrimary: 'fld10050_124802_130144'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_124804_130146',
	minorWoundsPrimary: 'fld10050_124805_130147'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_124807_130149',
	hematuriaPrimary: 'fld10050_124808_130150'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_124809_130151',
	giBleedingPrimary: 'fld10050_124811_130153'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_124812_130154',
	oralCavityPrimary: 'fld10050_124814_130156'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_124815_130157',
	toothExtractionPrimary: 'fld10050_124817_130159'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_124818_130160',
	surgeryPrimary: 'fld10050_124820_130162'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_124823_130165',
	menstrualPrimary: 'fld10050_124824_130166'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_124825_130167',
	deliveryPrimary: 'fld10050_124827_130169'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_124828_130170',
	hematomaPrimary: 'fld10050_124830_130172'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_124831_130173',
	hemarthrosisPrimary: 'fld10050_124833_130175'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_124835_130177',
	cnsPrimary: 'fld10050_124836_130178'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_124837_130179',
	otherBleedingPrimary: 'fld10050_124839_130181'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_124768_130110',
	totalScoreBottom: 'fld10050_124844_130186'
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
