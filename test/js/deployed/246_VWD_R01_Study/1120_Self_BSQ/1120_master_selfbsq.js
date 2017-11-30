/**
 * 
 */
noseBleedVariables = {
	epistaxisTotalScore: 'fld10050_127638_132546',
	epistaxisPrimary: 'fld10050_127639_132547'
}

cutaneousVariables = {
	bruisingTotalScore: 'fld10050_127641_132549',
	bruisingPrimary: 'fld10050_127642_132550'
}

minorWoundsVariables = {
	minorWoundsTotalScore: 'fld10050_127644_132552',
	minorWoundsPrimary: 'fld10050_127645_132553'
}

hematuriaVariables = {
	hematuriaTotalScore: 'fld10050_127647_132555',
	hematuriaPrimary: 'fld10050_127648_132556'
}

giBleedingVariables = {
	giBleedingTotalScore: 'fld10050_127649_132557',
	giBleedingPrimary: 'fld10050_127651_132559'
}

oralCavityVariables = {
	oralCavityTotalScore: 'fld10050_127652_132560',
	oralCavityPrimary: 'fld10050_127654_132562'
}

toothExtractionVariables = {
	toothExtractionTotalScore: 'fld10050_127655_132563',
	toothExtractionPrimary: 'fld10050_127657_132565'
}

surgeryVariables = {
	surgeryTotalScore: 'fld10050_127658_132566',
	surgeryPrimary: 'fld10050_127660_132568'
}

menstrualVariables = {
	menstrualTotalScore: 'fld10050_127663_132571',
	menstrualPrimary: 'fld10050_127664_132572'
}

deliveryVariables = {
	deliveryTotalScore: 'fld10050_127665_132573',
	deliveryPrimary: 'fld10050_127667_132575'
}

hematomaVariables = {
	hematomaTotalScore: 'fld10050_127668_132576',
	hematomaPrimary: 'fld10050_127670_132578'
}

hemarthrosisVariables = {
	hemarthrosisTotalScore: 'fld10050_127671_132579',
	hemarthrosisPrimary: 'fld10050_127673_132581'
}

cnsVariables = {
	cnsTotalScore: 'fld10050_127675_132583',
	cnsPrimary: 'fld10050_127676_132584'
}

otherBleedingVariables = {
	otherBleedingTotalScore: 'fld10050_127677_132585',
	otherBleedingPrimary: 'fld10050_127679_132587'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_127608_132516',
	totalScoreBottom: 'fld10050_127684_132592'
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
