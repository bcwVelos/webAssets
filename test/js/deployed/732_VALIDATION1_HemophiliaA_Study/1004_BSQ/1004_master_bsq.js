/**
 * 
 */
var toothExtractionSections = 10;
var surgerySections = 20;
var deliverySections = 10;
var cnsSections = 10;
var hemarthrosisSections = 20;
var hematomaSections = 10;
var toothExtractionExcessiveBleedingArray= new Array(toothExtractionSections);
var toothExtractionTreatmentArray= new Array(toothExtractionSections);
var toothExtractionTreatedHowArray= new Array(toothExtractionSections);
var surgeryExcessiveBleedingArray= new Array(surgerySections);
var surgeryTreatmentArray= new Array(surgerySections);
var surgeryTreatedHowArray= new Array(surgerySections);
var deliveryTreatmentArray= new Array(deliverySections);
var deliveryTreatedHowArray= new Array(deliverySections);
var deliveryHospitalArray= new Array(deliverySections);
var cnsTreatmentArray= new Array(cnsSections);
var cnsTreatedHowArray= new Array(cnsSections);
var hemarthrosisTypeArray= new Array(hemarthrosisSections);
var hemarthrosisTreatmentArray= new Array(hemarthrosisSections);
var hemarthrosisTreatedHowArray= new Array(hemarthrosisSections);
var hematomaTypeArray= new Array(hematomaSections);
var hematomaTreatmentArray= new Array(hematomaSections);
var hematomaTreatedHowArray= new Array(hematomaSections);

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
	toothExtractionComment: 'fld10050_135138_138760',
	toothExtractionAddComment: 'fld10050_135137_138759',
	toothExtractionHeading: 'fld10050_135159_138781',
	toothExtractionAge: 'fld10050_135179_138801',
	toothExtractionWhatTeeth: 'fld10050_135189_138811',
	toothExtractionTreatmentGiven: 'fld10050_135169_138791',
	toothExtractionTreatmentPrevention: 'fld10050_135149_138771',
	toothExtractionExcessiveBleeding: 'fld10050_135199_138821',
	toothExtractionLength: 'fld10050_135209_138831',
	toothExtractionTreatment: 'fld10050_135249_138871',
	toothExtractionTreatedHow: 'fld10050_135219_138841',
	toothExtractionAddBtn: 'fld10050_135239_138861',
	toothExtractionDeleteBtn: 'fld10050_135299_138921',
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
	surgeryAddComment: 'fld10050_135340_138962',
	surgeryHeading: 'fld10050_135563_139185',
	surgeryAge : 'fld10050_135343_138965',
	surgeryType : 'fld10050_135403_139025',
	surgeryTypeDescribe : 'fld10050_135363_138985',
	surgeryTreatmentGiven : 'fld10050_135423_139045',
	surgeryTreatmentPrevention : 'fld10050_135463_139085',
	surgeryExcessiveBleeding: 'fld10050_135383_139005',
	surgeryTime : 'fld10050_135483_139105',
	surgeryTreatment: 'fld10050_135503_139125',
	surgeryTreatedHow: 'fld10050_135523_139145',
	surgeryAddBtn : 'fld10050_135683_139305',
	surgeryDeleteBtn : 'fld10050_135623_139245',
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
	deliveryAddComment: 'fld10050_135742_139364',
	deliveryHeading: 'fld10050_135855_139477',
	deliveryAge: 'fld10050_135745_139367',
	deliveryType: 'fld10050_135815_139437',
	deliveryTreatmentGiven: 'fld10050_135835_139457',
	deliveryTreatmentPrevention: 'fld10050_135845_139467',
	deliveryExcessiveBleeding: 'fld10050_135775_139397',
	deliveryTime: 'fld10050_135785_139407',
	deliveryTreatment: 'fld10050_135755_139377',
	deliveryTreatedHow: 'fld10050_135765_139387',
	deliveryHospital: 'fld10050_135795_139417',
	deliveryAddBtn : 'fld10050_135915_139537',
	deliveryDeleteBtn : 'fld10050_135905_139527',
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
	cnsAddComment: 'fld10050_135945_139567',
	cnsHeading: 'fld10050_135989_139611',
	cnsAge: 'fld10050_136009_139631',
	cnsTreatment: 'fld10050_136019_139641',
	cnsTreatedHow: 'fld10050_135999_139621',
	cnsAddBtn: 'fld10050_135959_139581',
	cnsDeleteBtn: 'fld10050_135969_139591',
	cnsTotalScore: 'fld10050_135947_139569'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_136031_139653',
	hemarthrosisAddComment: 'fld10050_136030_139652',
	hemarthrosisHeading: 'fld10050_136035_139657',
	hemarthrosisAge: 'fld10050_136055_139677',
	hemarthrosisType: 'fld10050_136115_139737',
	hemarthrosisTypeOther: 'fld10050_136175_139797',
	hemarthrosisLocation: 'fld10050_136135_139757',
	hemarthrosisTreatment: 'fld10050_136075_139697',
	hemarthrosisTreatedHow: 'fld10050_136095_139717',
	hemarthrosisAddBtn: 'fld10050_136255_139877',
	hemarthrosisDeleteBtn: 'fld10050_136215_139837',
	hemarthrosisTotalScore: 'fld10050_136033_139655'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_136277_139899',
	hematomaAddComment: 'fld10050_136276_139898',
	hematomaHeading: 'fld10050_136391_140013',
	hematomaAge: 'fld10050_136321_139943',
	hematomaType: 'fld10050_136291_139913',
	hematomaTypeOther: 'fld10050_136331_139953',
	hematomaLocation: 'fld10050_136301_139923',
	hematomaTreatment: 'fld10050_136311_139933',
	hematomaTreatedHow: 'fld10050_136281_139903',
	hematomaAddBtn: 'fld10050_136371_139993',
	hematomaDeleteBtn: 'fld10050_136341_139963',
	hematomaTotalScore: 'fld10050_136279_139901'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_135058_138680',
	totalScoreBottom: 'fld10050_136408_140030'
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		if (formStatus[0].value == '16036')
			testMapping();
		calcTotalScore();
	});
});
