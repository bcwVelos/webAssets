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
	epistaxisPrimary: 'fld10050_106075_110479',
	epistaxisHowMany: 'fld10050_106067_110471',
	epistaxisHowLong: 'fld10050_106074_110478',
	epistaxisSeekMedAttn: 'fld10050_106066_110470',
	epistaxisTreatedHow: 'fld10050_106064_110468',
	epistaxisTotalScore: 'fld10050_106070_110474'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_106081_110485',
	bruisingTrauma: 'fld10050_106085_110489',
	bruisingMedicalAttention: 'fld10050_106077_110481',
	bruisingTreatedHow: 'fld10050_106082_110486',
	bruisingMultiple: 'fld10050_106078_110482',
	bruisingTotalScore: 'fld10050_106090_110494'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_106097_110501',
	minorWoundsHowMany: 'fld10050_106102_110506',
	minorWoundsHowLong: 'fld10050_106104_110508',
	minorWoundsSeekMedAttn: 'fld10050_106101_110505',
	minorWoundsTreatedHow: 'fld10050_106098_110502',
	minorWoundsTotalScore: 'fld10050_106105_110509'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_106117_110521',
	oralCavitySeekMedAttn: 'fld10050_106109_110513',
	oralCavityTreatedHow: 'fld10050_106111_110515',
	oralCavityTotalScore: 'fld10050_106113_110517'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_106126_110530',
	toothExtractionHowManyTimes: 'fld10050_106129_110533',
	toothExtractionExcessiveTimes: 'fld10050_106123_110527',
	toothExtractionComment: 'fld10050_106125_110529',
	toothExtractionAddComment: 'fld10050_106124_110528',
	toothExtractionHeading: 'fld10050_106140_110544',
	toothExtractionAge: 'fld10050_106160_110564',
	toothExtractionWhatTeeth: 'fld10050_106170_110574',
	toothExtractionTreatmentGiven: 'fld10050_106150_110554',
	toothExtractionTreatmentPrevention: 'fld10050_106130_110534',
	toothExtractionExcessiveBleeding: 'fld10050_106180_110584',
	toothExtractionLength: 'fld10050_106190_110594',
	toothExtractionTreatment: 'fld10050_106210_110614',
	toothExtractionTreatedHow: 'fld10050_106200_110604',
	toothExtractionAddBtn: 'fld10050_106250_110654',
	toothExtractionDeleteBtn: 'fld10050_106260_110664',
	toothExtractionTotalScore: 'fld10050_106121_110525'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_106293_110697',
	giBleedingOtherIllness: 'fld10050_106295_110699',
	giBleedingSeekMedAttn: 'fld10050_106296_110700',
	giBleedingTreatedHow: 'fld10050_106297_110701',
	giBleedingTotalScore: 'fld10050_106298_110702'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_106304_110708',
	hematuriaSeekMedAttn: 'fld10050_106307_110711',
	hematuriaTreatedHow: 'fld10050_106308_110712',
	hematuriaTotalScore: 'fld10050_106313_110717'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_106319_110723',
	surgeryHowManyTimes: 'fld10050_106320_110724',
	surgeryExcessiveTimes: 'fld10050_106318_110722',
	surgeryAddComment: 'fld10050_106321_110725',
	surgeryHeading: 'fld10050_106464_110868',
	surgeryAge : 'fld10050_106664_111068',
	surgeryType : 'fld10050_106364_110768',
	surgeryTypeDescribe : 'fld10050_106324_110728',
	surgeryTreatmentGiven : 'fld10050_106384_110788',
	surgeryTreatmentPrevention : 'fld10050_106404_110808',
	surgeryExcessiveBleeding: 'fld10050_106344_110748',
	surgeryTime : 'fld10050_106424_110828',
	surgeryTreatment: 'fld10050_106444_110848',
	surgeryTreatedHow: 'fld10050_106624_111028',
	surgeryAddBtn : 'fld10050_106564_110968',
	surgeryDeleteBtn : 'fld10050_106604_111008',
	surgeryTotalScore: 'fld10050_106322_110726'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_106699_111103',
	menstrualHowLong: 'fld10050_106706_111110',
	menstrualPassClots: 'fld10050_106708_111112',
	menstrualHeaviestDay: 'fld10050_106709_111113',
	menstrualExcessiveBleeding: 'fld10050_106710_111114',
	menstrualHowLongExcessive: 'fld10050_106694_111098',
	menstrualMedicalAttention: 'fld10050_106698_111102',
	menstrualReceiveTreatment: 'fld10050_106695_111099',
	menstrualTreatedHow: 'fld10050_106696_111100',
	menstrualHospitalization: 'fld10050_106693_111097',
	menstrualTimeOffWork: 'fld10050_106691_111095',
	menstrualPictoralScore: 'fld10050_106685_111089',
	menstrualTotalScore: 'fld10050_106713_111117'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_106721_111125',
	deliveryAddComment: 'fld10050_106723_111127',
	deliveryHeading: 'fld10050_106726_111130',
	deliveryAge: 'fld10050_106876_111280',
	deliveryType: 'fld10050_106846_111250',
	deliveryTreatmentGiven: 'fld10050_106856_111260',
	deliveryTreatmentPrevention: 'fld10050_106866_111270',
	deliveryExcessiveBleeding: 'fld10050_106816_111220',
	deliveryTime: 'fld10050_106826_111230',
	deliveryTreatment: 'fld10050_106886_111290',
	deliveryTreatedHow: 'fld10050_106896_111300',
	deliveryHospital: 'fld10050_106836_111240',
	deliveryAddBtn : 'fld10050_106786_111190',
	deliveryDeleteBtn : 'fld10050_106796_111200',
	deliveryTotalScore: 'fld10050_106724_111128'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_106909_111313',
	otherNeonatalType: 'fld10050_106913_111317',
	otherNeonatalTreatment: 'fld10050_106910_111314',
	otherNeonatalTreatedHow: 'fld10050_106912_111316',
	otherBleedingTotalScore: 'fld10050_106918_111322'
}

cnsVariables = {
	cnsPrimary: 'fld10050_106927_111331',
	cnsAddComment: 'fld10050_106926_111330',
	cnsHeading: 'fld10050_106970_111374',
	cnsAge: 'fld10050_106990_111394',
	cnsTreatment: 'fld10050_107000_111404',
	cnsTreatedHow: 'fld10050_106980_111384',
	cnsAddBtn: 'fld10050_106940_111344',
	cnsDeleteBtn: 'fld10050_106950_111354',
	cnsTotalScore: 'fld10050_106928_111332'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_107012_111416',
	hemarthrosisAddComment: 'fld10050_107011_111415',
	hemarthrosisHeading: 'fld10050_107016_111420',
	hemarthrosisAge: 'fld10050_107036_111440',
	hemarthrosisType: 'fld10050_107096_111500',
	hemarthrosisTypeOther: 'fld10050_107156_111560',
	hemarthrosisLocation: 'fld10050_107116_111520',
	hemarthrosisTreatment: 'fld10050_107056_111460',
	hemarthrosisTreatedHow: 'fld10050_107076_111480',
	hemarthrosisAddBtn: 'fld10050_107216_111620',
	hemarthrosisDeleteBtn: 'fld10050_107236_111640',
	hemarthrosisTotalScore: 'fld10050_107014_111418'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_107258_111662',
	hematomaAddComment: 'fld10050_107257_111661',
	hematomaHeading: 'fld10050_107262_111666',
	hematomaAge: 'fld10050_107312_111716',
	hematomaType: 'fld10050_107282_111686',
	hematomaTypeOther: 'fld10050_107322_111726',
	hematomaLocation: 'fld10050_107292_111696',
	hematomaTreatment: 'fld10050_107302_111706',
	hematomaTreatedHow: 'fld10050_107272_111676',
	hematomaAddBtn: 'fld10050_107352_111756',
	hematomaDeleteBtn: 'fld10050_107362_111766',
	hematomaTotalScore: 'fld10050_107260_111664'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_106039_110443',
	totalScoreBottom: 'fld10050_107401_111805'
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		if (formStatus[0].value == '15736')
			testMapping();
		calcTotalScore();
	});
});
