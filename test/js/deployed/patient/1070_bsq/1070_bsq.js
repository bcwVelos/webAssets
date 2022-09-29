/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_124397_129125',
	epistaxisPrimary: 'fld10050_124398_129126'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_124400_129128',
	bruisingPrimary: 'fld10050_124401_129129'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_124403_129131',
	minorWoundsPrimary: 'fld10050_124404_129132'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_124406_129134',
	hematuriaPrimary: 'fld10050_124407_129135'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_124408_129136',
	giBleedingPrimary: 'fld10050_124410_129138'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_124411_129139',
	oralCavityPrimary: 'fld10050_124413_129141'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_124414_129142',
	toothExtractionPrimary: 'fld10050_124416_129144'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_124417_129145',
	surgeryPrimary: 'fld10050_124419_129147'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_124422_129150',
	menstrualPrimary: 'fld10050_124423_129151'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_124424_129152',
	deliveryPrimary: 'fld10050_124426_129154'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_124427_129155',
	hematomaPrimary: 'fld10050_124429_129157'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_124430_129158',
	hemarthrosisPrimary: 'fld10050_124432_129160'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_124434_129162',
	cnsPrimary: 'fld10050_124435_129163'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_124436_129164',
	otherBleedingPrimary: 'fld10050_124438_129166'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_124367_129095',
	totalScoreBottom: 'fld10050_124440_129168'
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('[class^="calculateBtn"]').click(function(event) {
		calcScore();
	});
	
	$j('[id^="eSign"]').focus(function(event) {
		calcScore();
	});
	
	$j('[id^="submit_btn"]').click(function(event) {
		calcScore();
	});
});
