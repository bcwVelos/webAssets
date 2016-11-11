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
	epistaxisPrimary: 'fld10050_104693_109096',
	epistaxisHowMany: 'fld10050_104685_109088',
	epistaxisHowLong: 'fld10050_104692_109095',
	epistaxisSeekMedAttn: 'fld10050_104684_109087',
	epistaxisTreatedHow: 'fld10050_104682_109085',
	epistaxisTotalScore: 'fld10050_104688_109091'
}

cutaneousVariables = {
	bruisingPrimary: 'fld10050_104699_109102',
	bruisingTrauma: 'fld10050_104703_109106',
	bruisingMedicalAttention: 'fld10050_104695_109098',
	bruisingTreatedHow: 'fld10050_104700_109103',
	bruisingMultiple: 'fld10050_104696_109099',
	bruisingTotalScore: 'fld10050_104708_109111'
}

minorWoundsVariables = {
	minorWoundsPrimary: 'fld10050_104715_109118',
	minorWoundsHowMany: 'fld10050_104720_109123',
	minorWoundsHowLong: 'fld10050_104722_109125',
	minorWoundsSeekMedAttn: 'fld10050_104719_109122',
	minorWoundsTreatedHow: 'fld10050_104716_109119',
	minorWoundsTotalScore: 'fld10050_104723_109126'
}

oralCavityVariables = {
	oralCavityPrimary: 'fld10050_104735_109138',
	oralCavitySeekMedAttn: 'fld10050_104727_109130',
	oralCavityTreatedHow: 'fld10050_104729_109132',
	oralCavityTotalScore: 'fld10050_104731_109134'
}

toothExtractionVariables = {
	toothExtractionPrimary: 'fld10050_104744_109147',
	toothExtractionHowManyTimes: 'fld10050_104747_109150',
	toothExtractionExcessiveTimes: 'fld10050_104741_109144',
	toothExtractionComment: 'fld10050_104743_109146',
	toothExtractionAddComment: 'fld10050_104742_109145',
	toothExtractionHeading: 'fld10050_104758_109161',
	toothExtractionAge: 'fld10050_104778_109181',
	toothExtractionWhatTeeth: 'fld10050_104788_109191',
	toothExtractionTreatmentGiven: 'fld10050_104768_109171',
	toothExtractionTreatmentPrevention: 'fld10050_104748_109151',
	toothExtractionExcessiveBleeding: 'fld10050_104798_109201',
	toothExtractionLength: 'fld10050_104808_109211',
	toothExtractionTreatment: 'fld10050_104828_109231',
	toothExtractionTreatedHow: 'fld10050_104818_109221',
	toothExtractionAddBtn: 'fld10050_104868_109271',
	toothExtractionDeleteBtn: 'fld10050_104878_109281',
	toothExtractionTotalScore: 'fld10050_104739_109142'
}

giBleedingVariables = {
	giBleedingPrimary: 'fld10050_104911_109314',
	giBleedingOtherIllness: 'fld10050_104913_109316',
	giBleedingSeekMedAttn: 'fld10050_104914_109317',
	giBleedingTreatedHow: 'fld10050_104915_109318',
	giBleedingTotalScore: 'fld10050_104916_109319'
}

hematuriaVariables = {
	hematuriaPrimary: 'fld10050_104922_109325',
	hematuriaSeekMedAttn: 'fld10050_104925_109328',
	hematuriaTreatedHow: 'fld10050_104926_109329',
	hematuriaTotalScore: 'fld10050_104931_109334'
}

surgeryVariables = {
	surgeryPrimary: 'fld10050_104937_109340',
	surgeryHowManyTimes: 'fld10050_104938_109341',
	surgeryExcessiveTimes: 'fld10050_104936_109339',
	surgeryAddComment: 'fld10050_104939_109342',
	surgeryHeading: 'fld10050_105082_109485',
	surgeryAge : 'fld10050_105282_109685',
	surgeryType : 'fld10050_104982_109385',
	surgeryTypeDescribe : 'fld10050_104942_109345',
	surgeryTreatmentGiven : 'fld10050_105002_109405',
	surgeryTreatmentPrevention : 'fld10050_105022_109425',
	surgeryExcessiveBleeding: 'fld10050_104962_109365',
	surgeryTime : 'fld10050_105042_109445',
	surgeryTreatment: 'fld10050_105062_109465',
	surgeryTreatedHow: 'fld10050_105242_109645',
	surgeryAddBtn : 'fld10050_105182_109585',
	surgeryDeleteBtn : 'fld10050_105222_109625',
	surgeryTotalScore: 'fld10050_104940_109343'
}

menstrualVariables = {
	menstrualPrimary: 'fld10050_105317_109720',
	menstrualHowLong: 'fld10050_105324_109727',
	menstrualPassClots: 'fld10050_105326_109729',
	menstrualHeaviestDay: 'fld10050_105327_109730',
	menstrualExcessiveBleeding: 'fld10050_105328_109731',
	menstrualHowLongExcessive: 'fld10050_105312_109715',
	menstrualMedicalAttention: 'fld10050_105316_109719',
	menstrualReceiveTreatment: 'fld10050_105313_109716',
	menstrualTreatedHow: 'fld10050_105314_109717',
	menstrualHospitalization: 'fld10050_105311_109714',
	menstrualTimeOffWork: 'fld10050_105309_109712',
	menstrualPictoralScore: 'fld10050_105303_109706',
	menstrualTotalScore: 'fld10050_105331_109734'
}

deliveryVariables = {
	deliveryPrimary: 'fld10050_105339_109742',
	deliveryAddComment: 'fld10050_105341_109744',
	deliveryHeading: 'fld10050_105344_109747',
	deliveryAge: 'fld10050_105494_109897',
	deliveryType: 'fld10050_105464_109867',
	deliveryTreatmentGiven: 'fld10050_105474_109877',
	deliveryTreatmentPrevention: 'fld10050_105484_109887',
	deliveryExcessiveBleeding: 'fld10050_105434_109837',
	deliveryTime: 'fld10050_105444_109847',
	deliveryTreatment: 'fld10050_105504_109907',
	deliveryTreatedHow: 'fld10050_105514_109917',
	deliveryHospital: 'fld10050_105454_109857',
	deliveryAddBtn : 'fld10050_105404_109807',
	deliveryDeleteBtn : 'fld10050_105414_109817',
	deliveryTotalScore: 'fld10050_105342_109745'
}

otherBleedingVariables = {
	otherNeonatalExcessive: 'fld10050_105527_109930',
	otherNeonatalType: 'fld10050_105531_109934',
	otherNeonatalTreatment: 'fld10050_105528_109931',
	otherNeonatalTreatedHow: 'fld10050_105530_109933',
	otherBleedingTotalScore: 'fld10050_105536_109939'
}

cnsVariables = {
	cnsPrimary: 'fld10050_105545_109948',
	cnsAddComment: 'fld10050_105544_109947',
	cnsHeading: 'fld10050_105588_109991',
	cnsAge: 'fld10050_105608_110011',
	cnsTreatment: 'fld10050_105618_110021',
	cnsTreatedHow: 'fld10050_105598_110001',
	cnsAddBtn: 'fld10050_105558_109961',
	cnsDeleteBtn: 'fld10050_105568_109971',
	cnsTotalScore: 'fld10050_105546_109949'
}

hemarthrosisVariables = {
	hemarthrosisPrimary: 'fld10050_105630_110033',
	hemarthrosisAddComment: 'fld10050_105629_110032',
	hemarthrosisHeading: 'fld10050_105634_110037',
	hemarthrosisAge: 'fld10050_105654_110057',
	hemarthrosisType: 'fld10050_105714_110117',
	hemarthrosisTypeOther: 'fld10050_105774_110177',
	hemarthrosisLocation: 'fld10050_105734_110137',
	hemarthrosisTreatment: 'fld10050_105674_110077',
	hemarthrosisTreatedHow: 'fld10050_105694_110097',
	hemarthrosisAddBtn: 'fld10050_105834_110237',
	hemarthrosisDeleteBtn: 'fld10050_105854_110257',
	hemarthrosisTotalScore: 'fld10050_105632_110035'
}

hematomaVariables = {
	hematomaPrimary: 'fld10050_105876_110279',
	hematomaAddComment: 'fld10050_105875_110278',
	hematomaHeading: 'fld10050_105880_110283',
	hematomaAge: 'fld10050_105930_110333',
	hematomaType: 'fld10050_105900_110303',
	hematomaTypeOther: 'fld10050_105940_110343',
	hematomaLocation: 'fld10050_105910_110313',
	hematomaTreatment: 'fld10050_105920_110323',
	hematomaTreatedHow: 'fld10050_105890_110293',
	hematomaAddBtn: 'fld10050_105970_110373',
	hematomaDeleteBtn: 'fld10050_105980_110383',
	hematomaTotalScore: 'fld10050_105878_110281'
}

totalScoreVariables = {
	totalScoreTop: 'fld10050_104657_109060',
	totalScoreBottom: 'fld10050_106019_110422'
}

var formStatus = document.getElementsByName('er_def_formstat');

$j(document).ready(function() {
	
	$j('.[class^="calculateBtn"]').click(function(event) {
		if (formStatus[0].value == '15736')
			testMapping();
		calcTotalScore();
	});
});
