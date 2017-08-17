/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_124703_129438',
	epistaxisPrimary: 'fld10050_124704_129439'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_124706_129441',
	bruisingPrimary: 'fld10050_124707_129442'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_124709_129444',
	minorWoundsPrimary: 'fld10050_124710_129445'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_124712_129447',
	hematuriaPrimary: 'fld10050_124713_129448'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_124714_129449',
	giBleedingPrimary: 'fld10050_124716_129451'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_124717_129452',
	oralCavityPrimary: 'fld10050_124719_129454'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_124720_129455',
	toothExtractionPrimary: 'fld10050_124722_129457'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_124723_129458',
	surgeryPrimary: 'fld10050_124725_129460'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_124728_129463',
	menstrualPrimary: 'fld10050_124729_129464'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_124730_129465',
	deliveryPrimary: 'fld10050_124732_129467'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_124733_129468',
	hematomaPrimary: 'fld10050_124735_129470'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_124736_129471',
	hemarthrosisPrimary: 'fld10050_124738_129473'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_124740_129475',
	cnsPrimary: 'fld10050_124741_129476'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_124742_129477',
	otherBleedingPrimary: 'fld10050_124744_129479'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_124673_129408',
	totalScoreBottom: 'fld10050_124749_129484'
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