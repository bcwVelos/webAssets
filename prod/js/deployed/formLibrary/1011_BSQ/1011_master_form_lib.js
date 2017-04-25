/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_115929_120365',
	epistaxisPrimary: 'fld10050_116740_121177'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_115949_120385',
	bruisingPrimary: 'fld10050_116744_121182'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_115965_120401',
	minorWoundsPrimary: 'fld10050_116745_121183'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_115983_120419',
	hematuriaPrimary: 'fld10050_116746_121184'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_115991_120427',
	giBleedingPrimary: 'fld10050_116747_121185'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_116005_120441',
	oralCavityPrimary: 'fld10050_116748_121186'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_116021_120457',
	toothExtractionPrimary: 'fld10050_116749_121187'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_116310_120746',
	surgeryPrimary: 'fld10050_116750_121188'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_116658_121094',
	menstrualPrimary: 'fld10050_117897_122343'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_116674_121110',
	deliveryPrimary: 'fld10050_117898_122344'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_116686_121122',
	hematomaPrimary: 'fld10050_116751_121189'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_116699_121135',
	hemarthrosisPrimary: 'fld10050_116752_121190'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_116719_121155',
	cnsPrimary: 'fld10050_116753_121191'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_116727_121163',
	otherBleedingPrimary: 'fld10050_116754_121192'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_115878_120314',
	totalScoreBottom: 'fld10050_116734_121170'
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
