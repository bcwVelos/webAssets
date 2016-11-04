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
	toothExtractionComment: 'fld10050_137901_141525',
	toothExtractionAddComment: 'fld10050_137900_141524',
	toothExtractionHeading: 'fld10050_137922_141546',
	toothExtractionAge: 'fld10050_137942_141566',
	toothExtractionWhatTeeth: 'fld10050_137952_141576',
	toothExtractionTreatmentGiven: 'fld10050_137932_141556',
	toothExtractionTreatmentPrevention: 'fld10050_137912_141536',
	toothExtractionExcessiveBleeding: 'fld10050_137962_141586',
	toothExtractionLength: 'fld10050_137972_141596',
	toothExtractionTreatment: 'fld10050_138002_141626',
	toothExtractionTreatedHow: 'fld10050_137982_141606',
	toothExtractionAddBtn: 'fld10050_138052_141676',
	toothExtractionDeleteBtn: 'fld10050_138062_141686',
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
	surgeryAddComment: 'fld10050_138103_141727',
	surgeryHeading: 'fld10050_138306_141930',
	surgeryAge : 'fld10050_138106_141730',
	surgeryType : 'fld10050_138166_141790',
	surgeryTypeDescribe : 'fld10050_138126_141750',
	surgeryTreatmentGiven : 'fld10050_138186_141810',
	surgeryTreatmentPrevention : 'fld10050_138206_141830',
	surgeryExcessiveBleeding: 'fld10050_138146_141770',
	surgeryTime : 'fld10050_138226_141850',
	surgeryTreatment: 'fld10050_138246_141870',
	surgeryTreatedHow: 'fld10050_138266_141890',
	surgeryAddBtn : 'fld10050_138426_142050',
	surgeryDeleteBtn : 'fld10050_138366_141990',
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
	deliveryAddComment: 'fld10050_138505_142129',
	deliveryHeading: 'fld10050_138608_142232',
	deliveryAge: 'fld10050_138508_142132',
	deliveryType: 'fld10050_138578_142202',
	deliveryTreatmentGiven: 'fld10050_138588_142212',
	deliveryTreatmentPrevention: 'fld10050_138598_142222',
	deliveryExcessiveBleeding: 'fld10050_138538_142162',
	deliveryTime: 'fld10050_138548_142172',
	deliveryTreatment: 'fld10050_138518_142142',
	deliveryTreatedHow: 'fld10050_138528_142152',
	deliveryHospital: 'fld10050_138558_142182',
	deliveryAddBtn : 'fld10050_138668_142292',
	deliveryDeleteBtn : 'fld10050_138678_142302',
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
	cnsAddComment: 'fld10050_138708_142332',
	cnsHeading: 'fld10050_138752_142376',
	cnsAge: 'fld10050_138772_142396',
	cnsTreatment: 'fld10050_138782_142406',
	cnsTreatedHow: 'fld10050_138762_142386',
	cnsAddBtn: 'fld10050_138722_142346',
	cnsDeleteBtn: 'fld10050_138732_142356',
	cnsTotalScore: 'fld10050_138710_142334'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_138794_142418',
	hemarthrosisAddComment: 'fld10050_138793_142417',
	hemarthrosisHeading: 'fld10050_138798_142422',
	hemarthrosisAge: 'fld10050_138818_142442',
	hemarthrosisType: 'fld10050_138878_142502',
	hemarthrosisTypeOther: 'fld10050_138938_142562',
	hemarthrosisLocation: 'fld10050_138898_142522',
	hemarthrosisTreatment: 'fld10050_138838_142462',
	hemarthrosisTreatedHow: 'fld10050_138858_142482',
	hemarthrosisAddBtn: 'fld10050_139018_142642',
	hemarthrosisDeleteBtn: 'fld10050_138978_142602',
	hemarthrosisTotalScore: 'fld10050_138796_142420'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_139040_142664',
	hematomaAddComment: 'fld10050_139039_142663',
	hematomaHeading: 'fld10050_139154_142778',
	hematomaAge: 'fld10050_139084_142708',
	hematomaType: 'fld10050_139054_142678',
	hematomaTypeOther: 'fld10050_139094_142718',
	hematomaLocation: 'fld10050_139064_142688',
	hematomaTreatment: 'fld10050_139074_142698',
	hematomaTreatedHow: 'fld10050_139044_142668',
	hematomaAddBtn: 'fld10050_139134_142758',
	hematomaDeleteBtn: 'fld10050_139104_142728',
	hematomaTotalScore: 'fld10050_139042_142666'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_137821_141445',
	totalScoreBottom: 'fld10050_139171_142795'
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		if (formStatus[0].value == '16036')
			testMapping();
		calcTotalScore();
	});
});
