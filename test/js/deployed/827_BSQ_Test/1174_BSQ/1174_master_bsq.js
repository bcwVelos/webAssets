/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_164866_169387',
	epistaxisPrimary: 'fld10050_164867_169388'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_164869_169390',
	bruisingPrimary: 'fld10050_164870_169391'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_164872_169393',
	minorWoundsPrimary: 'fld10050_164873_169394'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_164875_169396',
	hematuriaPrimary: 'fld10050_164876_169397'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_164877_169398',
	giBleedingPrimary: 'fld10050_164879_169400'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_164880_169401',
	oralCavityPrimary: 'fld10050_164882_169403'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_164883_169404',
	toothExtractionPrimary: 'fld10050_164885_169406'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_164886_169407',
	surgeryPrimary: 'fld10050_164888_169409'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_164891_169412',
	menstrualPrimary: 'fld10050_164892_169413'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_164893_169414',
	deliveryPrimary: 'fld10050_164895_169416'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_164896_169417',
	hematomaPrimary: 'fld10050_164898_169419'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_164899_169420',
	hemarthrosisPrimary: 'fld10050_164901_169422'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_164903_169424',
	cnsPrimary: 'fld10050_164904_169425'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_164905_169426',
	otherBleedingPrimary: 'fld10050_164907_169428'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_164839_169360',
	totalScoreBottom: 'fld10050_164909_169430'
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
