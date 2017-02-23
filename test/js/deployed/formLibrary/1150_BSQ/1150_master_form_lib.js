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
	epistaxisPrimary: 'fld10050_159624_163729',
	epistaxisHowMany: 'fld10050_159630_163735',
	epistaxisHowLong: 'fld10050_159623_163728',
	epistaxisSeekMedAttn: 'fld10050_159629_163734',
	epistaxisTreatedHow: 'fld10050_159627_163732',
	epistaxisTotalScore: 'fld10050_159633_163738'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_159641_163746',
	bruisingTrauma: 'fld10050_159645_163750',
	bruisingMedicalAttention: 'fld10050_159637_163742',
	bruisingTreatedHow: 'fld10050_159642_163747',
	bruisingMultiple: 'fld10050_159638_163743',
	bruisingTotalScore: 'fld10050_159650_163755'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_159657_163762',
	minorWoundsHowMany: 'fld10050_159662_163767',
	minorWoundsHowLong: 'fld10050_159664_163769',
	minorWoundsSeekMedAttn: 'fld10050_159661_163766',
	minorWoundsTreatedHow: 'fld10050_159658_163763',
	minorWoundsTotalScore: 'fld10050_159665_163770'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_159678_163783',
	oralCavitySeekMedAttn: 'fld10050_159670_163775',
	oralCavityTreatedHow: 'fld10050_159672_163777',
	oralCavityTotalScore: 'fld10050_159674_163779'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_159681_163786',
	toothExtractionHowManyTimes: 'fld10050_159684_163789',
	toothExtractionExcessiveTimes: 'fld10050_159690_163795',
	toothExtractionComment: 'fld10050_159680_163785',
	toothExtractionAddComment: 'fld10050_159679_163784',
	toothExtractionHeading: 'fld10050_159701_163806',
	toothExtractionAge: 'fld10050_159721_163826',
	toothExtractionWhatTeeth: 'fld10050_159731_163836',
	toothExtractionTreatmentGiven: 'fld10050_159711_163816',
	toothExtractionTreatmentPrevention: 'fld10050_159691_163796',
	toothExtractionExcessiveBleeding: 'fld10050_159741_163846',
	toothExtractionLength: 'fld10050_159751_163856',
	toothExtractionTreatment: 'fld10050_159781_163886',
	toothExtractionTreatedHow: 'fld10050_159761_163866',
	toothExtractionAddBtn: 'fld10050_159831_163936',
	toothExtractionDeleteBtn: 'fld10050_159841_163946',
	toothExtractionTotalScore: 'fld10050_159688_163793'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_159853_163958',
	giBleedingOtherIllness: 'fld10050_159855_163960',
	giBleedingSeekMedAttn: 'fld10050_159856_163961',
	giBleedingTreatedHow: 'fld10050_159857_163962',
	giBleedingTotalScore: 'fld10050_159858_163963'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_159874_163979',
	hematuriaSeekMedAttn: 'fld10050_159876_163981',
	hematuriaTreatedHow: 'fld10050_159865_163970',
	hematuriaTotalScore: 'fld10050_159870_163975'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_159880_163985',
	surgeryHowManyTimes: 'fld10050_159881_163986',
	surgeryExcessiveTimes: 'fld10050_159879_163984',
	surgeryAddComment: 'fld10050_159882_163987',
	surgeryHeading: 'fld10050_160085_164190',
	surgeryAge : 'fld10050_159885_163990',
	surgeryType : 'fld10050_159945_164050',
	surgeryTypeDescribe : 'fld10050_159905_164010',
	surgeryTreatmentGiven : 'fld10050_159965_164070',
	surgeryTreatmentPrevention : 'fld10050_159985_164090',
	surgeryExcessiveBleeding: 'fld10050_159925_164030',
	surgeryTime : 'fld10050_160005_164110',
	surgeryTreatment: 'fld10050_160025_164130',
	surgeryTreatedHow: 'fld10050_160045_164150',
	surgeryAddBtn : 'fld10050_160205_164310',
	surgeryDeleteBtn : 'fld10050_160145_164250',
	surgeryTotalScore: 'fld10050_159883_163988'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_160254_164359',
	menstrualHowLong: 'fld10050_160261_164366',
	menstrualPassClots: 'fld10050_160263_164368',
	menstrualHeaviestDay: 'fld10050_160264_164369',
	menstrualExcessiveBleeding: 'fld10050_160265_164370',
	menstrualHowLongExcessive: 'fld10050_160249_164354',
	menstrualMedicalAttention: 'fld10050_160253_164358',
	menstrualReceiveTreatment: 'fld10050_160250_164355',
	menstrualTreatedHow: 'fld10050_160251_164356',
	menstrualHospitalization: 'fld10050_160248_164353',
	menstrualTimeOffWork: 'fld10050_160246_164351',
	menstrualPictoralScore: 'fld10050_160274_164379',
	menstrualTotalScore: 'fld10050_160268_164373'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_160282_164387',
	deliveryAddComment: 'fld10050_160284_164389',
	deliveryHeading: 'fld10050_160387_164492',
	deliveryAge: 'fld10050_160287_164392',
	deliveryType: 'fld10050_160357_164462',
	deliveryTreatmentGiven: 'fld10050_160367_164472',
	deliveryTreatmentPrevention: 'fld10050_160377_164482',
	deliveryExcessiveBleeding: 'fld10050_160317_164422',
	deliveryTime: 'fld10050_160327_164432',
	deliveryTreatment: 'fld10050_160297_164402',
	deliveryTreatedHow: 'fld10050_160307_164412',
	deliveryHospital: 'fld10050_160337_164442',
	deliveryAddBtn : 'fld10050_160447_164552',
	deliveryDeleteBtn : 'fld10050_160457_164562',
	deliveryTotalScore: 'fld10050_160285_164390'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_160470_164575',
	otherNeonatalType: 'fld10050_160474_164579',
	otherNeonatalTreatment: 'fld10050_160471_164576',
	otherNeonatalTreatedHow: 'fld10050_160473_164578',
	otherBleedingTotalScore: 'fld10050_160479_164584'
}

cnsVariables = {
	cnsPrimary: 'fld10050_160488_164593',
	cnsAddComment: 'fld10050_160487_164592',
	cnsHeading: 'fld10050_160531_164636',
	cnsAge: 'fld10050_160551_164656',
	cnsTreatment: 'fld10050_160561_164666',
	cnsTreatedHow: 'fld10050_160541_164646',
	cnsAddBtn: 'fld10050_160501_164606',
	cnsDeleteBtn: 'fld10050_160511_164616',
	cnsTotalScore: 'fld10050_160489_164594'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_160573_164678',
	hemarthrosisAddComment: 'fld10050_160572_164677',
	hemarthrosisHeading: 'fld10050_160577_164682',
	hemarthrosisAge: 'fld10050_160597_164702',
	hemarthrosisType: 'fld10050_160657_164762',
	hemarthrosisTypeOther: 'fld10050_160717_164822',
	hemarthrosisLocation: 'fld10050_160677_164782',
	hemarthrosisTreatment: 'fld10050_160617_164722',
	hemarthrosisTreatedHow: 'fld10050_160637_164742',
	hemarthrosisAddBtn: 'fld10050_160797_164902',
	hemarthrosisDeleteBtn: 'fld10050_160757_164862',
	hemarthrosisTotalScore: 'fld10050_160575_164680'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_160819_164924',
	hematomaAddComment: 'fld10050_160818_164923',
	hematomaHeading: 'fld10050_160923_165028',
	hematomaAge: 'fld10050_160853_164958',
	hematomaType: 'fld10050_160823_164928',
	hematomaTypeOther: 'fld10050_160863_164968',
	hematomaLocation: 'fld10050_160833_164938',
	hematomaTreatment: 'fld10050_160843_164948',
	hematomaTreatedHow: 'fld10050_160933_165038',
	hematomaAddBtn: 'fld10050_160903_165008',
	hematomaDeleteBtn: 'fld10050_160873_164978',
	hematomaTotalScore: 'fld10050_160821_164926'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_159599_163704',
	totalScoreBottom: 'fld10050_160962_165067'
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