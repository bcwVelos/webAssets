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
	epistaxisPrimary: 'fld10050_137846_141470',
	epistaxisHowMany: 'fld10050_137852_141476',
	epistaxisHowLong: 'fld10050_137845_141469',
	epistaxisSeekMedAttn: 'fld10050_137851_141475',
	epistaxisTreatedHow: 'fld10050_137849_141473',
	epistaxisTotalScore: 'fld10050_137855_141479'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_137863_141487',
	bruisingTrauma: 'fld10050_137867_141491',
	bruisingMedicalAttention: 'fld10050_137859_141483',
	bruisingTreatedHow: 'fld10050_137864_141488',
	bruisingMultiple: 'fld10050_137860_141484',
	bruisingTotalScore: 'fld10050_137872_141496'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_137879_141503',
	minorWoundsHowMany: 'fld10050_137884_141508',
	minorWoundsHowLong: 'fld10050_137886_141510',
	minorWoundsSeekMedAttn: 'fld10050_137883_141507',
	minorWoundsTreatedHow: 'fld10050_137880_141504',
	minorWoundsTotalScore: 'fld10050_137887_141511'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_137894_141518',
	oralCavitySeekMedAttn: 'fld10050_137896_141520',
	oralCavityTreatedHow: 'fld10050_137898_141522',
	oralCavityTotalScore: 'fld10050_137890_141514'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_137902_141526',
	toothExtractionHowManyTimes: 'fld10050_137905_141529',
	toothExtractionExcessiveTimes: 'fld10050_137911_141535',
	toothExtractionExcessiveBleeding: 'fld10050_137962_141586',
	toothExtractionTreatment: 'fld10050_138002_141626',
	toothExtractionTreatedHow: 'fld10050_137982_141606',
	toothExtractionTotalScore: 'fld10050_137909_141533'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_138074_141698',
	giBleedingOtherIllness: 'fld10050_138076_141700',
	giBleedingSeekMedAttn: 'fld10050_138077_141701',
	giBleedingTreatedHow: 'fld10050_138078_141702',
	giBleedingTotalScore: 'fld10050_138079_141703'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_138095_141719',
	hematuriaSeekMedAttn: 'fld10050_138097_141721',
	hematuriaTreatedHow: 'fld10050_138086_141710',
	hematuriaTotalScore: 'fld10050_138091_141715'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_138101_141725',
	surgeryHowManyTimes: 'fld10050_138102_141726',
	surgeryExcessiveTimes: 'fld10050_138100_141724',
	surgeryExcessiveBleeding: 'fld10050_138146_141770',
	surgeryTreatment: 'fld10050_138246_141870',
	surgeryTreatedHow: 'fld10050_138266_141890',
	surgeryTotalScore: 'fld10050_138104_141728'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_138490_142114',
	menstrualHowLong: 'fld10050_138497_142121',
	menstrualPassClots: 'fld10050_138499_142123',
	menstrualHeaviestDay: 'fld10050_138500_142124',
	menstrualExcessiveBleeding: 'fld10050_138467_142091',
	menstrualHowLongExcessive: 'fld10050_138485_142109',
	menstrualMedicalAttention: 'fld10050_138489_142113',
	menstrualReceiveTreatment: 'fld10050_138486_142110',
	menstrualTreatedHow: 'fld10050_138487_142111',
	menstrualHospitalization: 'fld10050_138484_142108',
	menstrualTimeOffWork: 'fld10050_138482_142106',
	menstrualPictoralScore: 'fld10050_138476_142100',
	menstrualTotalScore: 'fld10050_138470_142094'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_138503_142127',
	deliveryTreatment: 'fld10050_138518_142142',
	deliveryTreatedHow: 'fld10050_138528_142152',
	deliveryHospital: 'fld10050_138558_142182',
	deliveryTotalScore: 'fld10050_138506_142130'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_138691_142315',
	otherNeonatalType: 'fld10050_138695_142319',
	otherNeonatalTreatment: 'fld10050_138692_142316',
	otherNeonatalTreatedHow: 'fld10050_138694_142318',
	otherBleedingTotalScore: 'fld10050_138700_142324'
}

cnsVariables = {
	cnsPrimary: 'fld10050_138709_142333',
	cnsTreatment: 'fld10050_138783_142407',
	cnsTreatedHow: 'fld10050_138763_142387',
	cnsTotalScore: 'fld10050_138710_142334'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_138794_142418',
	hemarthrosisBleedingType: 'fld10050_138878_142502',
	hemarthrosisTreatment: 'fld10050_138838_142462',
	hemarthrosisTreatedHow: 'fld10050_138858_142482',
	hemarthrosisTotalScore: 'fld10050_138796_142420'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_139040_142664',
	hematomaBleedingType: 'fld10050_139054_142678',
	hematomaTreatment: 'fld10050_139074_142698',
	hematomaTreatedHow: 'fld10050_139044_142668',
	hematomaTotalScore: 'fld10050_139042_142666'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_137821_141445',
	totalScoreBottom: 'fld10050_139171_142795'
}

$j(document).ready(function() {
	
	testMapping();
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		
		calcTotalScore();
	});
});
