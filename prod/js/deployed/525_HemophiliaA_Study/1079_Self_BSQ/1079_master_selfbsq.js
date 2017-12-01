/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_124968_130312',
	epistaxisPrimary: 'fld10050_124969_130313'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_124971_130315',
	bruisingPrimary: 'fld10050_124972_130316'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_124974_130318',
	minorWoundsPrimary: 'fld10050_124975_130319'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_124977_130321',
	hematuriaPrimary: 'fld10050_124978_130322'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_124979_130323',
	giBleedingPrimary: 'fld10050_124981_130325'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_124982_130326',
	oralCavityPrimary: 'fld10050_124984_130328'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_124985_130329',
	toothExtractionPrimary: 'fld10050_124987_130331'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_124988_130332',
	surgeryPrimary: 'fld10050_124990_130334'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_124993_130337',
	menstrualPrimary: 'fld10050_124994_130338'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_124995_130339',
	deliveryPrimary: 'fld10050_124997_130341'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_124998_130342',
	hematomaPrimary: 'fld10050_125000_130344'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_125001_130345',
	hemarthrosisPrimary: 'fld10050_125003_130347'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_125005_130349',
	cnsPrimary: 'fld10050_125006_130350'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_125007_130351',
	otherBleedingPrimary: 'fld10050_125009_130353'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_124938_130282',
	totalScoreBottom: 'fld10050_125014_130358'
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
