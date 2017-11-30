/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_127808_132718',
	epistaxisPrimary: 'fld10050_127809_132719'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_127811_132721',
	bruisingPrimary: 'fld10050_127812_132722'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_127814_132724',
	minorWoundsPrimary: 'fld10050_127815_132725'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_127817_132727',
	hematuriaPrimary: 'fld10050_127818_132728'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_127819_132729',
	giBleedingPrimary: 'fld10050_127821_132731'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_127822_132732',
	oralCavityPrimary: 'fld10050_127824_132734'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_127825_132735',
	toothExtractionPrimary: 'fld10050_127827_132737'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_127828_132738',
	surgeryPrimary: 'fld10050_127830_132740'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_127833_132743',
	menstrualPrimary: 'fld10050_127834_132744'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_127835_132745',
	deliveryPrimary: 'fld10050_127837_132747'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_127838_132748',
	hematomaPrimary: 'fld10050_127840_132750'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_127841_132751',
	hemarthrosisPrimary: 'fld10050_127843_132753'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_127845_132755',
	cnsPrimary: 'fld10050_127846_132756'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_127847_132757',
	otherBleedingPrimary: 'fld10050_127849_132759'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_127778_132688',
	totalScoreBottom: 'fld10050_127854_132764'
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
