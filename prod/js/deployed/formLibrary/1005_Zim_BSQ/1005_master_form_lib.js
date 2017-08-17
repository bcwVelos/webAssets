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
	epistaxisPrimary: 'fld10050_111692_116114',
	epistaxisHowMany: 'fld10050_111684_116106',
	epistaxisHowLong: 'fld10050_111691_116113',
	epistaxisSeekMedAttn: 'fld10050_111683_116105',
	epistaxisTreatedHow: 'fld10050_111681_116103',
	epistaxisTotalScore: 'fld10050_111687_116109'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_111698_116120',
	bruisingTrauma: 'fld10050_111702_116124',
	bruisingMedicalAttention: 'fld10050_111694_116116',
	bruisingTreatedHow: 'fld10050_111699_116121',
	bruisingMultiple: 'fld10050_111695_116117',
	bruisingTotalScore: 'fld10050_111707_116129'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_111714_116136',
	minorWoundsHowMany: 'fld10050_111719_116141',
	minorWoundsHowLong: 'fld10050_111721_116143',
	minorWoundsSeekMedAttn: 'fld10050_111718_116140',
	minorWoundsTreatedHow: 'fld10050_111715_116137',
	minorWoundsTotalScore: 'fld10050_111722_116144'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_111735_116157',
	oralCavitySeekMedAttn: 'fld10050_111727_116149',
	oralCavityTreatedHow: 'fld10050_111729_116151',
	oralCavityTotalScore: 'fld10050_111731_116153'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_111744_116166',
	toothExtractionHowManyTimes: 'fld10050_111747_116169',
	toothExtractionExcessiveTimes: 'fld10050_111741_116163',
	toothExtractionComment: 'fld10050_111743_116165',
	toothExtractionAddComment: 'fld10050_111742_116164',
	toothExtractionHeading: 'fld10050_111758_116180',
	toothExtractionAge: 'fld10050_111778_116200',
	toothExtractionWhatTeeth: 'fld10050_111788_116210',
	toothExtractionTreatmentGiven: 'fld10050_111768_116190',
	toothExtractionTreatmentPrevention: 'fld10050_111748_116170',
	toothExtractionExcessiveBleeding: 'fld10050_111798_116220',
	toothExtractionLength: 'fld10050_111808_116230',
	toothExtractionTreatment: 'fld10050_111838_116260',
	toothExtractionTreatedHow: 'fld10050_111818_116240',
	toothExtractionAddBtn: 'fld10050_111878_116300',
	toothExtractionDeleteBtn: 'fld10050_111888_116310',
	toothExtractionTotalScore: 'fld10050_111739_116161'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_111911_116333',
	giBleedingOtherIllness: 'fld10050_111913_116335',
	giBleedingSeekMedAttn: 'fld10050_111914_116336',
	giBleedingTreatedHow: 'fld10050_111915_116337',
	giBleedingTotalScore: 'fld10050_111916_116338'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_111922_116344',
	hematuriaSeekMedAttn: 'fld10050_111925_116347',
	hematuriaTreatedHow: 'fld10050_111926_116348',
	hematuriaTotalScore: 'fld10050_111931_116353'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_111937_116359',
	surgeryHowManyTimes: 'fld10050_111938_116360',
	surgeryExcessiveTimes: 'fld10050_111936_116358',
	surgeryAddComment: 'fld10050_111939_116361',
	surgeryHeading: 'fld10050_112102_116524',
	surgeryAge : 'fld10050_112262_116684',
	surgeryType : 'fld10050_111982_116404',
	surgeryTypeDescribe : 'fld10050_111942_116364',
	surgeryTreatmentGiven : 'fld10050_112002_116424',
	surgeryTreatmentPrevention : 'fld10050_112022_116444',
	surgeryExcessiveBleeding: 'fld10050_111962_116384',
	surgeryTime : 'fld10050_112042_116464',
	surgeryTreatment: 'fld10050_112062_116484',
	surgeryTreatedHow: 'fld10050_112182_116604',
	surgeryAddBtn : 'fld10050_112202_116624',
	surgeryDeleteBtn : 'fld10050_112242_116664',
	surgeryTotalScore: 'fld10050_111940_116362'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_112317_116739',
	menstrualHowLong: 'fld10050_112324_116746',
	menstrualPassClots: 'fld10050_112326_116748',
	menstrualHeaviestDay: 'fld10050_112327_116749',
	menstrualExcessiveBleeding: 'fld10050_112328_116750',
	menstrualHowLongExcessive: 'fld10050_112312_116734',
	menstrualMedicalAttention: 'fld10050_112316_116738',
	menstrualReceiveTreatment: 'fld10050_112313_116735',
	menstrualTreatedHow: 'fld10050_112314_116736',
	menstrualHospitalization: 'fld10050_112311_116733',
	menstrualTimeOffWork: 'fld10050_112309_116731',
	menstrualPictoralScore: 'fld10050_112303_116725',
	menstrualTotalScore: 'fld10050_112331_116753'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_112339_116761',
	deliveryAddComment: 'fld10050_112341_116763',
	deliveryHeading: 'fld10050_112344_116766',
	deliveryAge: 'fld10050_112464_116886',
	deliveryType: 'fld10050_112484_116906',
	deliveryTreatmentGiven: 'fld10050_112494_116916',
	deliveryTreatmentPrevention: 'fld10050_112504_116926',
	deliveryExcessiveBleeding: 'fld10050_112434_116856',
	deliveryTime: 'fld10050_112444_116866',
	deliveryTreatment: 'fld10050_112514_116936',
	deliveryTreatedHow: 'fld10050_112474_116896',
	deliveryHospital: 'fld10050_112454_116876',
	deliveryAddBtn : 'fld10050_112404_116826',
	deliveryDeleteBtn : 'fld10050_112414_116836',
	deliveryTotalScore: 'fld10050_112342_116764'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_112527_116949',
	otherNeonatalType: 'fld10050_112531_116953',
	otherNeonatalTreatment: 'fld10050_112528_116950',
	otherNeonatalTreatedHow: 'fld10050_112530_116952',
	otherBleedingTotalScore: 'fld10050_112536_116958'
}

cnsVariables = {
	cnsPrimary: 'fld10050_112545_116967',
	cnsAddComment: 'fld10050_112544_116966',
	cnsHeading: 'fld10050_112588_117010',
	cnsAge: 'fld10050_112608_117030',
	cnsTreatment: 'fld10050_112618_117040',
	cnsTreatedHow: 'fld10050_112598_117020',
	cnsAddBtn: 'fld10050_112558_116980',
	cnsDeleteBtn: 'fld10050_112568_116990',
	cnsTotalScore: 'fld10050_112546_116968'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_112630_117052',
	hemarthrosisAddComment: 'fld10050_112629_117051',
	hemarthrosisHeading: 'fld10050_112634_117056',
	hemarthrosisAge: 'fld10050_112654_117076',
	hemarthrosisType: 'fld10050_112714_117136',
	hemarthrosisTypeOther: 'fld10050_112774_117196',
	hemarthrosisLocation: 'fld10050_112734_117156',
	hemarthrosisTreatment: 'fld10050_112674_117096',
	hemarthrosisTreatedHow: 'fld10050_112694_117116',
	hemarthrosisAddBtn: 'fld10050_112854_117276',
	hemarthrosisDeleteBtn: 'fld10050_112794_117216',
	hemarthrosisTotalScore: 'fld10050_112632_117054'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_112876_117298',
	hematomaAddComment: 'fld10050_112875_117297',
	hematomaHeading: 'fld10050_112880_117302',
	hematomaAge: 'fld10050_112930_117352',
	hematomaType: 'fld10050_112900_117322',
	hematomaTypeOther: 'fld10050_112940_117362',
	hematomaLocation: 'fld10050_112910_117332',
	hematomaTreatment: 'fld10050_112920_117342',
	hematomaTreatedHow: 'fld10050_112890_117312',
	hematomaAddBtn: 'fld10050_112980_117402',
	hematomaDeleteBtn: 'fld10050_112990_117412',
	hematomaTotalScore: 'fld10050_112878_117300'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_111656_116078',
	totalScoreBottom: 'fld10050_113019_117441'
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
