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
	epistaxisPrimary: 'fld10050_135083_138705',
	epistaxisHowMany: 'fld10050_135089_138711',
	epistaxisHowLong: 'fld10050_135082_138704',
	epistaxisSeekMedAttn: 'fld10050_135088_138710',
	epistaxisTreatedHow: 'fld10050_135086_138708',
	epistaxisTotalScore: 'fld10050_135092_138714'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_135100_138722',
	bruisingTrauma: 'fld10050_135104_138726',
	bruisingMedicalAttention: 'fld10050_135096_138718',
	bruisingTreatedHow: 'fld10050_135101_138723',
	bruisingMultiple: 'fld10050_135097_138719',
	bruisingTotalScore: 'fld10050_135109_138731'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_135116_138738',
	minorWoundsHowMany: 'fld10050_135121_138743',
	minorWoundsHowLong: 'fld10050_135123_138745',
	minorWoundsSeekMedAttn: 'fld10050_135120_138742',
	minorWoundsTreatedHow: 'fld10050_135117_138739',
	minorWoundsTotalScore: 'fld10050_135124_138746'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_135131_138753',
	oralCavitySeekMedAttn: 'fld10050_135133_138755',
	oralCavityTreatedHow: 'fld10050_135135_138757',
	oralCavityTotalScore: 'fld10050_135127_138749'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_135139_138761',
	toothExtractionHowManyTimes: 'fld10050_135142_138764',
	toothExtractionExcessiveTimes: 'fld10050_135148_138770',
	toothExtractionExcessiveBleeding: 'fld10050_135199_138821',
	toothExtractionTreatment: 'fld10050_135249_138871',
	toothExtractionTreatedHow: 'fld10050_135219_138841',
	toothExtractionTotalScore: 'fld10050_135146_138768'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_135311_138933',
	giBleedingOtherIllness: 'fld10050_135313_138935',
	giBleedingSeekMedAttn: 'fld10050_135314_138936',
	giBleedingTreatedHow: 'fld10050_135315_138937',
	giBleedingTotalScore: 'fld10050_135316_138938'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_135332_138954',
	hematuriaSeekMedAttn: 'fld10050_135334_138956',
	hematuriaTreatedHow: 'fld10050_135323_138945',
	hematuriaTotalScore: 'fld10050_135328_138950'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_135338_138960',
	surgeryHowManyTimes: 'fld10050_135339_138961',
	surgeryExcessiveTimes: 'fld10050_135337_138959',
	surgeryExcessiveBleeding: 'fld10050_135383_139005',
	surgeryTreatment: 'fld10050_135503_139125',
	surgeryTreatedHow: 'fld10050_135523_139145',
	surgeryTotalScore: 'fld10050_135341_138963'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_135727_139349',
	menstrualHowLong: 'fld10050_135734_139356',
	menstrualPassClots: 'fld10050_135736_139358',
	menstrualHeaviestDay: 'fld10050_135737_139359',
	menstrualExcessiveBleeding: 'fld10050_135704_139326',
	menstrualHowLongExcessive: 'fld10050_135722_139344',
	menstrualMedicalAttention: 'fld10050_135726_139348',
	menstrualReceiveTreatment: 'fld10050_135723_139345',
	menstrualTreatedHow: 'fld10050_135724_139346',
	menstrualHospitalization: 'fld10050_135721_139343',
	menstrualTimeOffWork: 'fld10050_135719_139341',
	menstrualPictoralScore: 'fld10050_135713_139335',
	menstrualTotalScore: 'fld10050_135707_139329'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_135740_139362',
	deliveryTreatment: 'fld10050_135755_139377',
	deliveryTreatedHow: 'fld10050_135765_139387',
	deliveryHospital: 'fld10050_135795_139417',
	deliveryTotalScore: 'fld10050_135743_139365'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_135928_139550',
	otherNeonatalType: 'fld10050_135932_139554',
	otherNeonatalTreatment: 'fld10050_135929_139551',
	otherNeonatalTreatedHow: 'fld10050_135931_139553',
	otherBleedingTotalScore: 'fld10050_135937_139559'
}

cnsVariables = {
	cnsPrimary: 'fld10050_135946_139568',
	cnsTreatment: 'fld10050_136019_139641',
	cnsTreatedHow: 'fld10050_135999_139621',
	cnsTotalScore: 'fld10050_135947_139569'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_136031_139653',
	hemarthrosisBleedingType: 'fld10050_136115_139737',
	hemarthrosisTreatment: 'fld10050_136075_139697',
	hemarthrosisTreatedHow: 'fld10050_136095_139717',
	hemarthrosisTotalScore: 'fld10050_136033_139655'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_136277_139899',
	hematomaBleedingType: 'fld10050_136291_139913',
	hematomaTreatment: 'fld10050_136311_139933',
	hematomaTreatedHow: 'fld10050_136281_139903',
	hematomaTotalScore: 'fld10050_136279_139901'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_135058_138680',
	totalScoreBottom: 'fld10050_136408_140030'
}

$j(document).ready(function() {
	
	testMapping();
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		
		calcTotalScore();
	});
});
