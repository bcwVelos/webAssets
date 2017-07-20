/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_123456_128121',
	epistaxisPrimary: 'fld10050_123457_128122'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_123459_128124',
	bruisingPrimary: 'fld10050_123460_128125'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_123462_128127',
	minorWoundsPrimary: 'fld10050_123463_128128'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_123465_128130',
	hematuriaPrimary: 'fld10050_123466_128131'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_123467_128132',
	giBleedingPrimary: 'fld10050_123469_128134'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_123470_128135',
	oralCavityPrimary: 'fld10050_123472_128137'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_123473_128138',
	toothExtractionPrimary: 'fld10050_123475_128140'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_123476_128141',
	surgeryPrimary: 'fld10050_123478_128143'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_123481_128146',
	menstrualPrimary: 'fld10050_123482_128147'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_123483_128148',
	deliveryPrimary: 'fld10050_123485_128150'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_123486_128151',
	hematomaPrimary: 'fld10050_123488_128153'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_123489_128154',
	hemarthrosisPrimary: 'fld10050_123491_128156'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_123493_128158',
	cnsPrimary: 'fld10050_123494_128159'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_123495_128160',
	otherBleedingPrimary: 'fld10050_123497_128162'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_123429_128094',
	totalScoreBottom: 'fld10050_123499_128164'
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
