/**
 * 
 */
var toothExtractionSections = 10;
var surgerySections = 20;
var deliverySections = 10;
var cnsSections = 10;
var hemarthrosisSections = 20;
var hematomaSections = 10;

noseBleedVariables = {
	epistaxisPrimary: 'fld10050_139228_142853',
	epistaxisHowMany: 'fld10050_139234_142859',
	epistaxisHowLong: 'fld10050_139227_142852',
	epistaxisSeekMedAttn: 'fld10050_139233_142858',
	epistaxisTreatedHow: 'fld10050_139231_142856',
	epistaxisTotalScore: 'fld10050_139237_142862'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_139245_142870',
	bruisingTrauma: 'fld10050_139249_142874',
	bruisingMedicalAttention: 'fld10050_139241_142866',
	bruisingTreatedHow: 'fld10050_139246_142871',
	bruisingMultiple: 'fld10050_139242_142867',
	bruisingTotalScore: 'fld10050_139254_142879'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_139261_142886',
	minorWoundsHowMany: 'fld10050_139266_142891',
	minorWoundsHowLong: 'fld10050_139268_142893',
	minorWoundsSeekMedAttn: 'fld10050_139265_142890',
	minorWoundsTreatedHow: 'fld10050_139262_142887',
	minorWoundsTotalScore: 'fld10050_139269_142894'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_139276_142901',
	oralCavitySeekMedAttn: 'fld10050_139278_142903',
	oralCavityTreatedHow: 'fld10050_139280_142905',
	oralCavityTotalScore: 'fld10050_139272_142897'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_139284_142909',
	toothExtractionHowManyTimes: 'fld10050_139287_142912',
	toothExtractionExcessiveTimes: 'fld10050_139293_142918',
	toothExtractionExcessiveBleeding: 'fld10050_139344_142969',
	toothExtractionTreatment: 'fld10050_139384_143009',
	toothExtractionTreatedHow: 'fld10050_139364_142989',
	toothExtractionTotalScore: 'fld10050_139291_142916'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_139456_143081',
	giBleedingOtherIllness: 'fld10050_139458_143083',
	giBleedingSeekMedAttn: 'fld10050_139459_143084',
	giBleedingTreatedHow: 'fld10050_139460_143085',
	giBleedingTotalScore: 'fld10050_139461_143086'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_139477_143102',
	hematuriaSeekMedAttn: 'fld10050_139479_143104',
	hematuriaTreatedHow: 'fld10050_139468_143093',
	hematuriaTotalScore: 'fld10050_139473_143098'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_139483_143108',
	surgeryHowManyTimes: 'fld10050_139484_143109',
	surgeryExcessiveTimes: 'fld10050_139482_143107',
	surgeryExcessiveBleeding: 'fld10050_139528_143153',
	surgeryTreatment: 'fld10050_139628_143253',
	surgeryTreatedHow: 'fld10050_139648_143273',
	surgeryTotalScore: 'fld10050_139486_143111'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_139872_143497',
	menstrualHowLong: 'fld10050_139879_143504',
	menstrualPassClots: 'fld10050_139881_143506',
	menstrualHeaviestDay: 'fld10050_139882_143507',
	menstrualExcessiveBleeding: 'fld10050_139849_143474',
	menstrualHowLongExcessive: 'fld10050_139867_143492',
	menstrualMedicalAttention: 'fld10050_139871_143496',
	menstrualReceiveTreatment: 'fld10050_139868_143493',
	menstrualTreatedHow: 'fld10050_139869_143494',
	menstrualHospitalization: 'fld10050_139866_143491',
	menstrualTimeOffWork: 'fld10050_139864_143489',
	menstrualPictoralScore: 'fld10050_139858_143483',
	menstrualTotalScore: 'fld10050_139852_143477'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_139885_143510',
	deliveryTreatment: 'fld10050_139900_143525',
	deliveryTreatedHow: 'fld10050_139910_143535',
	deliveryHospital: 'fld10050_139940_143565',
	deliveryTotalScore: 'fld10050_139888_143513'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_140073_143698',
	otherNeonatalType: 'fld10050_140077_143702',
	otherNeonatalTreatment: 'fld10050_140074_143699',
	otherNeonatalTreatedHow: 'fld10050_140076_143701',
	otherBleedingTotalScore: 'fld10050_140082_143707'
}

cnsVariables = {
	cnsPrimary: 'fld10050_140091_143716',
	cnsTreatment: 'fld10050_140164_143789',
	cnsTreatedHow: 'fld10050_140144_143769',
	cnsTotalScore: 'fld10050_140092_143717'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_140176_143801',
	hemarthrosisBleedingType: 'fld10050_140260_143885',
	hemarthrosisTreatment: 'fld10050_140220_143845',
	hemarthrosisTreatedHow: 'fld10050_140240_143865',
	hemarthrosisTotalScore: 'fld10050_140178_143803'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_140422_144047',
	hematomaBleedingType: 'fld10050_140436_144061',
	hematomaTreatment: 'fld10050_140456_144081',
	hematomaTreatedHow: 'fld10050_140426_144051',
	hematomaTotalScore: 'fld10050_140424_144049'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_139203_142828',
	totalScoreBottom: 'fld10050_140553_144178'
}

$j(document).ready(function() {
	
	testMapping();
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		
		calcTotalScore();
	});
});
